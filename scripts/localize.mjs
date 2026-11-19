/**
 * Post-processes dist/ HTML files so the site works when opened with file://
 * (double-click on macOS). Two passes per file:
 *
 * Pass 1 – absolute → relative
 *   src="/…"  →  src="./…"  (depth 0)   or  src="../…"  (depth 1)
 *
 * Pass 2 – directory hrefs → explicit index.html
 *   href="./benchmark"       →  href="./benchmark/index.html"
 *   href="./"                →  href="./index.html"
 *   href="../"               →  href="../index.html"
 *   href="./dataset#sec"     →  href="./dataset/index.html#sec"
 *
 * Links with file extensions, external URLs, and bare hash anchors are
 * left unchanged.
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir   = join(__dirname, '..', 'dist');

// ── Pass 1: absolute path attributes → relative ───────────────────────────

const ABS_RE = /((?:href|src|srcset|poster|data-src)=")\/(?!\/)/g;

// ── Pass 2: bare directory hrefs → explicit index.html ───────────────────

// Real file extension: 2–5 alphanumeric chars after a dot at end of segment
// Excludes bare "." and ".." directory refs
const FILE_EXT_RE = /\.[a-zA-Z0-9]{2,5}$/;

function fixDirHref(href) {
  // Skip external, protocol-relative, mailto, bare hash
  if (!href || href.startsWith('#') || href.includes('://') || href.startsWith('//') || href.startsWith('mailto:')) return href;

  // Split fragment
  const hashIdx = href.indexOf('#');
  const path     = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
  const fragment = hashIdx >= 0 ? href.slice(hashIdx) : '';

  // If the last real segment looks like a file (e.g. "foo.pdf"), leave it alone
  const lastSeg = path.split('/').filter(s => s && s !== '.' && s !== '..').pop() ?? '';
  if (FILE_EXT_RE.test(lastSeg)) return href;

  // Directory path → append index.html
  const fixed = path.endsWith('/') ? `${path}index.html` : `${path}/index.html`;
  return fixed + fragment;
}

const DIR_HREF_RE = /href="([^"]*)"/g;

function processHtml(filePath) {
  const rel    = relative(distDir, dirname(filePath));
  const depth  = rel === '' ? 0 : rel.split('/').filter(Boolean).length;
  const prefix = depth === 0 ? '.' : Array(depth).fill('..').join('/');

  let html = readFileSync(filePath, 'utf-8');

  // Pass 0 – strip external font links (blocked by Safari content blocker on file://)
  html = html.replace(/<link[^>]*(?:fonts\.googleapis\.com|fonts\.gstatic\.com)[^>]*\/?>/g, '');

  // Pass 1
  html = html.replace(ABS_RE, `$1${prefix}/`);

  // Pass 2
  html = html.replace(DIR_HREF_RE, (_, val) => {
    const fixed = fixDirHref(val);
    return fixed === val ? `href="${val}"` : `href="${fixed}"`;
  });

  writeFileSync(filePath, html);
}

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) processHtml(full);
  }
}

walk(distDir);
console.log('✓ localize: paths made relative + dir hrefs resolved for file:// viewing');
