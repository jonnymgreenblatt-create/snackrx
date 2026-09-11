SETTLE (formerly Snack·Rx) — MASTER FOLDER
=====================================
Everything needed to run, update, and rebuild the app. Keep this folder safe.

YOUR LIVE SITE
  https://settlemoves.com                 (primary domain as of July 2026)
  https://snackrx.thekenclub.com          (your domain, HTTPS, auto-renewing cert)
  https://brilliant-tarsier-4280f9.netlify.app   (same site, Netlify address)
  Hosting: Netlify free tier — no expiry. Only recurring cost: the domain (~$15/yr at Squarespace).

THE FILES
  DEPLOY.md ..................... How Claude deploys the zip hands-free via the
                                  Chrome extension (or the manual drag fallback).
  fitness-snack.html ............ THE SOURCE CODE. All logic, exercises, voice scripts. Edit this.
  fitness-snack-standalone.html . Single-file version with all 206 voice clips embedded.
                                  Works offline, can be shared as one file.
  snackrx-site.zip .............. Ready-to-deploy web build (compressed audio).
                                  To update the live site: log into app.netlify.com, open the
                                  brilliant-tarsier-4280f9 project, drag this zip onto
                                  "Production deploys". That's the whole deployment process.
  voice/ ........................ Your 206 master voice recordings (wav, July 2026 re-record). The irreplaceable part.
  voice-normalized/ ............. Same 206 clips, loudness-matched (−26 dB RMS, peaks capped −3 dB,
                                  12ms fade-in / 30ms fade-out to soften attacks).
                                  The embedded audio in both builds comes from THESE — no clip jumps
                                  out louder than the rest. Rebuild embeds from here, not voice/.
  voice-lines.json .............. The script: every line ID and its exact text.
  voice-recorder-v3.html ........ (now v4 inside) Record lines in your browser. Spacebar starts/
                                  stops (no trackpad clicks), takes are auto-cleaned and play back
                                  automatically, progress persists between sessions; export gives a
                                  voice-pack zip. Script is 206 lines: ~100 guide lines plus 106
                                  one-breath target phrases ("58 reps" as a single recording —
                                  replaces the old stitched number + unit clips).
  voicepack-builder.html ........ Alternative: generate the voice with HeyGen AI (needs API key).
  figure-preview.html ........... All 12 animated exercise figures side by side, with mood colors.
  generate-voice-pack.mjs ....... Command-line HeyGen generator (for developers).

AUDIO ARCHITECTURE (July 2026)
  The app plays voice through HTMLAudio (the phone's MEDIA channel), which the
  iPhone silent switch does NOT mute — same trick as Headspace/Spotify. Don't
  "optimize" it back to Web Audio; that channel goes silent on muted iPhones.
  Target numbers use combined clips (tgt_58_reps.*) when present, and fall back
  to stitched tp_58 + unit_reps clips, then device TTS. The dose stepper is
  clamped per exercise so it can only land on numbers that have recordings.

HOW THE PIECES CONNECT
  1. Voice lines live in fitness-snack.html (VOICE_LINES) and voice-lines.json.
  2. Recordings in voice/ are named <line-id>.wav to match.
  3. A build embeds voice into the HTML -> snackrx-site.zip -> drag onto Netlify.
  Any Claude session (or developer) given this folder can change anything and redeploy.

DNS (set up at Squarespace for thekenclub.com — don't delete these)
  A      @        75.2.60.5                            (root -> Netlify)
  CNAME  www      brilliant-tarsier-4280f9.netlify.app
  CNAME  snackrx  brilliant-tarsier-4280f9.netlify.app
  TXT    subdomain-owner-verification  bcbc1fc2c4643df60c2ea364aeeb5c33
  (MX / DKIM / SPF records belong to your Google email — never touch.)

DEPLOYS COST CREDITS (learned July 2026 — read before deploying)
  Netlify's free tier gives ~300 credits per month (resets each billing cycle).
  Each production deploy costs ~15 credits. Visitors are nearly free (bandwidth
  and requests barely register). RULE: batch all changes and deploy ONCE per
  work session — never deploy per tweak. Check usage at app.netlify.com →
  team → Billing → Credit usage breakdown.

WAITLIST (added July 2026)
  The results screen asks for name + email after a completed snack ("The full app
  is coming"). Submissions go to Netlify Forms — view them at app.netlify.com →
  brilliant-tarsier-4280f9 → Forms → "waitlist". Free tier: 100 submissions/month.
  Turn on email alerts there under Form notifications.
  SOCIAL PROOF COUNTER: in fitness-snack.html, find WAITLIST_COUNT (near the
  waitlist code) and set it to the real signup count, e.g. const WAITLIST_COUNT = 37;
  then rebuild + redeploy. The card then says "Join 37 others already on the list."
  While null it says "Be one of the first in line." Keep the number real.
  IMPORTANT: if no submissions appear after deploying, go to the site's settings →
  Forms → enable "Form detection", then redeploy the zip once.

DATA & PRIVACY
  Each visitor's data (sessions, calibration, streaks) lives only in their own browser.
  Nothing is sent to any server. "Export my data" in the You tab produces their JSON.

RENAME (July 2026): brand is now "Settle — movement snacks for your mind"
  (was Snack·Rx; dropped to avoid Meta pharma classifiers + food ambiguity).
  localStorage key stays snackrx_v4 (renaming it would wipe visitors' data)
  and the Netlify form stays named "waitlist". snackrx.thekenclub.com remains
  as a working alias.

Built July 2026 with Claude.
