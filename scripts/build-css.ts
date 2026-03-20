import { palette, darkTheme } from '../src/tokens.js';
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function toKebab(key: string): string {
  return key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const lines = ['@theme {'];

for (const [key, value] of Object.entries(palette)) {
  lines.push(`  --color-brand-${toKebab(key)}: ${value};`);
}

for (const [key, value] of Object.entries(darkTheme)) {
  lines.push(`  --color-dark-${toKebab(key)}: ${value};`);
}

lines.push('}', '');

const outPath = join(__dirname, '..', 'dist', 'tokens.css');
writeFileSync(outPath, lines.join('\n'));
console.log(`Wrote ${outPath}`);
