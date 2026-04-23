import fs from 'fs';
import path from 'path';

const htmlPath = path.join('dist', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Inline CSS
const cssRegex = /<link rel="stylesheet" href="\/_astro\/(.*?\.css)">/g;
html = html.replace(cssRegex, (match, cssFile) => {
  const cssPath = path.join('dist', '_astro', cssFile);
  if (fs.existsSync(cssPath)) {
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    return `<style>${cssContent}</style>`;
  }
  return match;
});

// Inline JS modules (if Astro generated any external JS)
const jsRegex = /<script type="module" src="\/_astro\/(.*?\.js)"(.*?)><\/script>/g;
html = html.replace(jsRegex, (match, jsFile, attrs) => {
  const jsPath = path.join('dist', '_astro', jsFile);
  if (fs.existsSync(jsPath)) {
    const jsContent = fs.readFileSync(jsPath, 'utf8');
    return `<script type="module"${attrs}>${jsContent}</script>`;
  }
  return match;
});

// Handle JS without type="module" if any
const jsRegexClassic = /<script src="\/_astro\/(.*?\.js)"(.*?)><\/script>/g;
html = html.replace(jsRegexClassic, (match, jsFile, attrs) => {
  const jsPath = path.join('dist', '_astro', jsFile);
  if (fs.existsSync(jsPath)) {
    const jsContent = fs.readFileSync(jsPath, 'utf8');
    return `<script${attrs}>${jsContent}</script>`;
  }
  return match;
});

const outputPath = path.join('..', 'act2cut_standalone.html');
fs.writeFileSync(outputPath, html);
console.log(`Successfully created standalone HTML at: ${outputPath}`);
