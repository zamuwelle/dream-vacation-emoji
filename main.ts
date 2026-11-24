const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entry = '🌌';
const outputPath = join(outputDirectory, 'entry.txt');
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, entry, 'utf8');
