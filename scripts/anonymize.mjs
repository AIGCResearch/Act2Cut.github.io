/**
 * anonymize.mjs – Post-processes dist/ for anonymous build.
 *
 * Run AFTER `astro build` but BEFORE `localize.mjs` (paths are still /-rooted).
 *
 * What it does:
 *  1. Strip HTML comments
 *  2. Rename referenced media files (images + videos) to /m/<sha256>.<ext>
 *  3. Update all references in HTML / JS / CSS files
 *  4. Delete unreferenced media files from dist/
 *  5. Remove now-empty directories
 */

import {
  readFileSync, writeFileSync, readdirSync,
  renameSync, unlinkSync, mkdirSync, existsSync,
} from 'fs';
import { execFileSync } from 'child_process';
import { join, dirname, extname, relative } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir   = join(__dirname, '..', 'dist');

const MEDIA_EXTS = new Set(['.mp4', '.webm', '.gif', '.png', '.jpg', '.jpeg', '.avif', '.webp', '.svg', '.json']);
const TEXT_EXTS  = new Set(['.html', '.js', '.css', '.mjs']);

// ── Helpers ───────────────────────────────────────────────────────────────────

// Skip directories that are clearly not Astro-copied public assets
const SKIP_DIRS = new Set(['.astro', 'node_modules', '.git', 'dist']);

function walkAll(dir, files = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (!SKIP_DIRS.has(e.name)) walkAll(join(dir, e.name), files);
    } else {
      files.push(join(dir, e.name));
    }
  }
  return files;
}

function hashFile(fsPath) {
  return createHash('sha256').update(readFileSync(fsPath)).digest('hex').slice(0, 16);
}

// Recursively prune a directory: removes it if only junk remains after pruning children.
// "Junk" = SKIP_DIRS entries, .DS_Store, Thumbs.db.
// Directories with real files (HTML, JS, CSS…) are left untouched.
function pruneDir(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true }))
    if (e.isDirectory()) pruneDir(join(dir, e.name));

  const remaining = readdirSync(dir);
  const onlyJunk  = remaining.every(n => SKIP_DIRS.has(n) || n === '.DS_Store' || n === 'Thumbs.db');
  if (remaining.length === 0 || onlyJunk)
    execFileSync('rm', ['-rf', dir]);
}

function removeEmptyDirs() {
  for (const e of readdirSync(distDir, { withFileTypes: true })) {
    if (!e.isDirectory() || e.name === 'm' || e.name === '_astro') continue;
    pruneDir(join(distDir, e.name));
  }
}

// ── 1. Collect all files ──────────────────────────────────────────────────────

const allFiles  = walkAll(distDir);
const textFiles = allFiles.filter(f => TEXT_EXTS.has(extname(f).toLowerCase()));

/** absolute-URL-path → absolute-fs-path, e.g. "/images/foo.avif" → "/dist/images/foo.avif" */
const mediaMap = new Map();
for (const f of allFiles) {
  if (MEDIA_EXTS.has(extname(f).toLowerCase()))
    mediaMap.set('/' + relative(distDir, f).replace(/\\/g, '/'), f);
}

// ── 2. Scan text files to find referenced media paths ─────────────────────────

// Match any media URL that starts with / and ends at a non-path character
const MEDIA_URL_RE = /(?:["'`(])(\/([\w\-./]+\.(?:mp4|webm|gif|png|jpg|jpeg|avif|webp|svg|json)))(?=[^a-zA-Z0-9_\-./])/g;

const referenced = new Set();
for (const f of textFiles) {
  const src = readFileSync(f, 'utf-8');
  for (const m of src.matchAll(MEDIA_URL_RE)) {
    const p = m[1].split('?')[0].split('#')[0];
    if (mediaMap.has(p)) referenced.add(p);
  }
}

// ── 3. Build rename map ───────────────────────────────────────────────────────

/** old-URL-path → new-URL-path */
const renameMap = new Map();
const mDir = join(distDir, 'm');
if (!existsSync(mDir)) mkdirSync(mDir);

for (const urlPath of referenced) {
  const ext    = extname(urlPath);
  const hash   = hashFile(mediaMap.get(urlPath));
  renameMap.set(urlPath, `/m/${hash}${ext}`);
}

// ── 4. Rename files on disk ───────────────────────────────────────────────────

for (const [oldUrl, newUrl] of renameMap) {
  const src = mediaMap.get(oldUrl);
  const dst = join(distDir, newUrl.slice(1));
  if (existsSync(dst)) unlinkSync(src);  // identical content already at dst
  else renameSync(src, dst);
}

// ── 5. Delete unreferenced media files ───────────────────────────────────────

let deleted = 0;
for (const [urlPath, fsPath] of mediaMap) {
  if (!referenced.has(urlPath)) {
    unlinkSync(fsPath);
    deleted++;
  }
}

// ── 6. Update references and strip HTML comments ──────────────────────────────

const COMMENT_RE = /<!--[\s\S]*?-->/g;

for (const f of textFiles) {
  let content = readFileSync(f, 'utf-8');

  // Replace old media paths with new hashed ones (longest first to avoid partial matches)
  const sorted = [...renameMap.entries()].sort((a, b) => b[0].length - a[0].length);
  for (const [oldPath, newPath] of sorted)
    content = content.split(oldPath).join(newPath);

  // Strip HTML comments
  if (extname(f) === '.html')
    content = content.replace(COMMENT_RE, '');

  writeFileSync(f, content);
}

// ── 7. Delete junk files (.DS_Store etc.) then remove empty directories ───────

for (const f of walkAll(distDir)) {
  const base = f.split('/').at(-1);
  if (base === '.DS_Store' || base === 'Thumbs.db') unlinkSync(f);
}

removeEmptyDirs(distDir);

console.log(
  `✓ anonymize: ${renameMap.size} assets → /m/<hash>, ` +
  `${deleted} unreferenced deleted, HTML comments stripped`,
);
