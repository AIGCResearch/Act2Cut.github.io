import { readFileSync } from 'node:fs';

const files = {
  index: readFileSync('src/pages/index.astro', 'utf8'),
  nav: readFileSync('src/components/Navigation.astro', 'utf8'),
  overview: readFileSync('src/components/OverviewSection.astro', 'utf8'),
  dataset: readFileSync('src/components/DatasetSection.astro', 'utf8'),
  datasetPage: readFileSync('src/pages/dataset/index.astro', 'utf8'),
  benchmark: readFileSync('src/components/BenchmarkSection.astro', 'utf8'),
  benchmarkTables: readFileSync('src/components/BenchmarkTablesSection.astro', 'utf8'),
};

const failures = [];
const assert = (cond, msg) => { if (!cond) failures.push(msg); };

assert(files.overview.includes('Performance Comparison'), 'Overview home should include the compact Performance Comparison table.');
assert(!files.overview.includes('Generated Sequences vs. Baseline'), 'Overview home should not contain Generated Sequences vs. Baseline.');
assert(files.nav.includes('Dataset Display'), 'Navigation should rename dataset to Dataset Display.');
assert(files.nav.includes('Comparison & Benchmark'), 'Navigation should rename benchmark to Comparison & Benchmark.');
assert(files.datasetPage.includes('BenchmarkTablesSection'), 'Dataset route should include the quantitative benchmark tables.');
assert(files.benchmarkTables.includes('Benchmark Results'), 'Dataset page should contain the Benchmark Results section title.');
assert(files.benchmarkTables.includes('ActCutBench, VistoryBench, and VBench evaluation.'), 'Dataset page should contain the benchmark intro copy.');
assert(files.benchmark.includes('Generated Sequences'), 'Benchmark page should contain qualitative generated sequence display.');
assert(files.benchmark.includes('Baseline Comparison'), 'Benchmark page should contain qualitative baseline comparison.');
assert(!files.benchmark.includes('Image → Video') && !files.benchmark.includes('Video → Video'), 'Benchmark qualitative comparison should be T2V-only.');
assert(files.dataset.includes('multiCharacterStats') || files.dataset.includes('Multi-Character Roles'), 'Dataset statistics should isolate multi-character role count.');
assert(files.dataset.includes('md:grid-cols-[1fr_1fr_0.75fr]') || files.dataset.includes('multi-character-panel'), 'Multi-character statistics should render as a separate single column block.');

if (failures.length) {
  console.error('Content checks failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log('Content checks passed.');
