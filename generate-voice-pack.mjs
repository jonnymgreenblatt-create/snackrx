#!/usr/bin/env node
/**
 * generate-voice-pack.mjs
 * Generates the SNACK·RX voice pack from voice-lines.json using HeyGen's
 * text-to-speech API (POST /v3/voices/speech — returns plain MP3s, no video).
 *
 * Usage:
 *   1. Get your API key: HeyGen → Settings → Subscriptions & API → API token
 *   2. Pick a voice: run with --list-voices to see calm English options,
 *      or use a voice you've cloned/liked in HeyGen Studio (copy its voice_id).
 *   3. Run:
 *        HEYGEN_API_KEY=your_key node generate-voice-pack.mjs --voice <voice_id>
 *
 * Output: ./voice/<line_id>.mp3 — put the `voice` folder next to
 * fitness-snack.html and the app uses it automatically (falls back to
 * device TTS for any missing file, so partial packs are fine).
 *
 * Notes:
 *   - Speed 0.9 reads calmer; tweak SPEED below to taste.
 *   - The "..." in lines are intentional — most TTS engines render them
 *     as gentle pauses. If HeyGen's voice rushes them, try SSML instead.
 *   - Re-running skips files that already exist (delete one to regenerate).
 */

import fs from "node:fs";
import path from "node:path";

const API = "https://api.heygen.com";
const KEY = process.env.HEYGEN_API_KEY;
const SPEED = 0.9;

if (!KEY) { console.error("Set HEYGEN_API_KEY. See usage notes at top of file."); process.exit(1); }

const args = process.argv.slice(2);

if (args.includes("--list-voices")) {
  const r = await fetch(`${API}/v3/voices?engine=starfish`, { headers: { "X-Api-Key": KEY } });
  const data = await r.json();
  const voices = (data.data?.voices || data.voices || []).filter(v =>
    /^en/i.test(v.language || v.locale || "en"));
  for (const v of voices) console.log(`${v.voice_id}\t${v.name}\t${v.gender || ""}`);
  process.exit(0);
}

const vIdx = args.indexOf("--voice");
if (vIdx === -1 || !args[vIdx + 1]) {
  console.error("Pass --voice <voice_id> (find one with --list-voices)."); process.exit(1);
}
const VOICE_ID = args[vIdx + 1];

const lines = JSON.parse(fs.readFileSync(new URL("./voice-lines.json", import.meta.url)));
fs.mkdirSync("voice", { recursive: true });

let done = 0, skipped = 0;
for (const [id, text] of Object.entries(lines)) {
  const out = path.join("voice", `${id}.mp3`);
  if (fs.existsSync(out)) { skipped++; continue; }
  const r = await fetch(`${API}/v3/voices/speech`, {
    method: "POST",
    headers: { "X-Api-Key": KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ text, voice_id: VOICE_ID, speed: SPEED }),
  });
  if (!r.ok) { console.error(`✗ ${id}: HTTP ${r.status} ${await r.text()}`); continue; }
  const data = await r.json();
  const url = data.data?.audio_url || data.audio_url;
  if (!url) { console.error(`✗ ${id}: no audio_url in response`, JSON.stringify(data).slice(0, 200)); continue; }
  const audio = await fetch(url);
  fs.writeFileSync(out, Buffer.from(await audio.arrayBuffer()));
  done++;
  console.log(`✓ ${id} (${done}/${Object.keys(lines).length})`);
  await new Promise(res => setTimeout(res, 350)); // gentle rate limiting
}
console.log(`\nDone. ${done} generated, ${skipped} already existed. Drop the voice/ folder next to fitness-snack.html.`);
