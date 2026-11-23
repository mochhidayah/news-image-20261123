// news-image-20261123 — one image of Monday 23 November 2026.
//
// The entry is the illustration in entry.png beside this file: three panels
// (COP31 collapses in Antalya / sea drones hit the Russian warship Merkury
// at Benghazi / the first deep-sea mining leases off American Samoa) under
// a masthead naming the day. This program only verifies the file against the
// competition gate and copies it to the output directory, so both grader
// runs write the same bytes.
//
// Run outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const IMAGE = new URL('./entry.png', import.meta.url);
const MAX_BYTES = 1_048_576;
const SIDE = 1024;

// The PNG signature, then the IHDR chunk: width at offset 16, height at 20.
const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

if (!existsSync(IMAGE)) {
  throw new Error('entry.png is missing from the repository root');
}
const data = readFileSync(IMAGE);
if (data.length > MAX_BYTES) {
  throw new Error(`entry.png is ${data.length} bytes, over the 1 MiB gate`);
}
const magicOk = PNG_MAGIC.every((byte, i) => data[i] === byte);
if (!magicOk) {
  throw new Error('entry.png does not start with the PNG signature');
}
const width = data.readUInt32BE(16);
const height = data.readUInt32BE(20);
if (width !== SIDE || height !== SIDE) {
  throw new Error(`entry.png is ${width}x${height}, the gate wants 1024x1024`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.png');
copyFileSync(IMAGE, outPath);

// Prove the copy is byte-identical: the grader runs the program twice
// and both runs must write the same bytes.
const written = readFileSync(outPath);
if (!written.equals(data)) {
  throw new Error('copied entry.png differs from the repository file');
}
console.log(`23 November 2026: entry.png ${width}x${height}, ${data.length} bytes -> ${outPath}`);
