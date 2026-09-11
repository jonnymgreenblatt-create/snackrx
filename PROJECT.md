# SNACK·RX — Project Handoff

*Last updated: July 14, 2026. For any new Claude session: connect this folder and read this file first — it replaces re-explaining the project.*

## What this is

Snack·Rx is a live MVP testing whether "60-second mood-matched movement for anxiety" deserves to become a full app. Live at **https://snackrx.thekenclub.com** (Netlify, project `brilliant-tarsier-4280f9`, custom domain via Squarespace DNS). Everything runs client-side in one HTML file; user data never leaves their browser. `README.txt` in this folder explains every file and the deploy process.

## Current state (all live)

- **Voice**: 206 recordings of Jonny's own voice (July 14 re-record, `voice/*.wav` — the irreplaceable masters; the older July 12 set is in `voice-old-masters-20260712/`). Targets are one-breath combined phrases ("58 reps" = one clip, `tgt_58_reps`), no more stitching. Script lives in `voice-lines.json`; `voice-recorder-v3.html` (v4 inside) records with spacebar control, auto-declick, auto-playback, back/skip navigation.
- **Audio playback**: routed through HTMLAudio (media channel) so the iPhone silent switch does NOT mute it — the Headspace trick. Never "optimize" back to Web Audio. One-time "🔊 Sound on" toast at first prescription.
- **Waitlist funnel**: email-only signup via Netlify Forms ("waitlist" form) on the results screen, a one-time bottom sheet after the 2nd session with a positive anxiety drop, and a You-tab card. Copy leads with "The full app is coming" + honest framing ("built if enough people ask — your email is the vote, first in line free at launch"). Submissions → Netlify → Forms; email alerts go to the owner's email. `WAITLIST_COUNT` constant in `fitness-snack.html` shows real social proof once signups accumulate — keep the number real, never fake it.
- **Retention**: 9 milestone badges (You tab + results celebration), streak chip, time-aware greeting with returning-user line, "knows you" dose copy ("Last time 40 felt easy — today it's 45").
- **Outcome handling**: anxiety same/worse gets warm copy + a one-tap breathing follow-up (physiological sigh), never "that's real data" AI-speak.

## Hard-won rules

1. **Deploys cost ~15 Netlify credits each (~300/month free).** Batch every change; deploy once per work session. Details in README.
2. **Meta ads must not imply knowledge of the viewer's mental state** ("struggling with anxiety?" = personal-attribute violation). Sell the moment: "mind won't stop?", "wired at 3pm?".
3. **No fake social proof, no fake scarcity.** Honest early-adopter framing converts fine and can't blow up.
4. **One Facebook page, not backups.** Duplicate pages read as ban evasion and escalate to permanent bans. Check facebook.com/accountquality before any campaign work.

## Where we left off / next steps

1. **Meta ad campaign** (in progress): Jonny was logging into Facebook so we could check Account Quality together via the Chrome extension, then plan campaign + creative in chat, then build it together in Ads Manager (~$10–20/day validation test). Hook direction: invisible desk moves / "mind won't stop" moment, not generic wellness.
2. **Waitlist watching**: submissions arrive in Netlify → Forms; once real numbers exist, set `WAITLIST_COUNT` and redeploy (bundle with other changes).
3. **Validation goal**: enough waitlist signups from ad traffic to justify building the real app (cross-device accounts, reminders/push, iOS/Android).
4. Someday/maybe: trademark "Snack·Rx" if validated (consult a lawyer).

## Competitive picture (July 2026)

Closest neighbors: Wakeout (desk micro-movement, no mental-health angle), Brain-Body Therapy (movement for anxiety, but program-style, not 60-second matched doses), Motion/Moodfit (mood tracking + fitness). Nobody does mood-matched one-minute doses with pre/post anxiety measurement, invisible desk mode, and a personal voice. The whitespace is real; speed and audience are the moat.
