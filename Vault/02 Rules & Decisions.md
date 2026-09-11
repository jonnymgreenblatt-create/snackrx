# Rules & Decisions

Hard-won rules. Any future session (human or Claude) should honor these unless deliberately revisited.

## Infrastructure

- **Deploys cost ~15 Netlify credits** (~300/month free tier, resets monthly). Batch changes; deploy once per work session. Check usage: Netlify → team → Billing.
- **Never deploy without asking Jonny first** (2026-07-15). Stage everything in the zip; he gives the go.
- **Never route voice back through Web Audio.** The media channel (HTMLAudio) is what survives the iPhone silent switch. This is load-bearing.
- Visitor data stays in the visitor's browser. Nothing is sent to a server except the waitlist form. **REVISED 2026-07-17 (Jonny, deliberate reversal of the no-pixel rule, which he notes he never set himself):** the live site now carries the **Meta pixel** (ID 199999138000739, the renamed KC_Pixel) — PageView + a Lead event on waitlist join, hostname-guarded so it never fires on local/offline copies, automatic advanced matching OFF. Moods, results, streaks still never leave the browser and the pixel never sees them; the You-tab disclaimer discloses the pixel honestly. Rationale: better ad delivery + seed retargeting audience for the validation test and beyond. **EXTENDED 2026-07-20 (Jonny, deliberate):** the pixel now also sends four content-free funnel steps — `RxViewed`, `SnackStart`, `SnackComplete` (full minute only; aborts show as Start-without-Complete), `WaitlistViewed` (throttled 5s so the results card + its auto-popup count as one ask) — so we can see WHERE the ad funnel loses people. The line that must never move: events say a step happened, never what it contained — no moods, ratings, doses, results or streaks, ever. You-tab disclosure updated to match, worded plainly per Jonny ("…counts visits, basic activity and waitlist signups. It never sees your moods, ratings or results."). Bonus: more conversion-adjacent signal for Meta's Leads optimizer (the $110-CPM/learning-limited problem). **EXTENDED AGAIN 2026-07-20 (Jonny, "all the data Meta could possibly need")**: (1) **manual advanced matching** on Lead — the volunteered email is SHA-256-hashed IN THE BROWSER (Meta never gets the raw address) and attached via `fbq('init', …, {em})`; automatic advanced matching stays OFF; disclosure gained the clause "signups are matched to ads using a privacy-protected, hashed version of your email". (2) **Conversions API**: a Netlify `submission-created` function re-sends each REAL Lead server-side (hashed em + Meta's own fbp/fbc ids, deduped vs the browser event via a shared `event_id` carried as a hidden form field) — immune to ad blockers/ITP; no-ops until `META_CAPI_TOKEN` env var exists; SKIPS utm_source test/pixeltest/deploycheck so Jonny's rehearsals never teach the optimizer. The unmoved line: moods, ratings, doses, results, streaks never leave the browser.

## Business model (SET 2026-07-28 — supersedes all earlier free/paid assumptions)

- **The free layer is FINITE and NAMED. The library is the product.** Take·5 (five days, one
  mechanism each) is free forever and repeatable forever. The mood-matched snack library,
  new moves, new courses, reminders and memory are the **paid membership**. This is the actual
  Headspace model, verified from period sources — see [[05 Competitive Landscape]].
- **Day 1 of the course is never gated.** No email, no account, no wall. It is the ad's landing
  page. (Calm keeps Day 1 of every program permanently free; it is the best-performing shape
  of "try before you trade anything".)
- **The email is the price of Day 2, never of Day 1.** This is the whole retention fix: it makes
  a `sessions=0` signup structurally impossible and turns the pixel's Lead into an engagement
  event without changing the optimizer.
- **Never ration relief, only novelty.** Anything a person has already unlocked stays available
  unlimited, forever. What's scarce is NEW material. Rationing a 60-second anxiety tool at the
  moment someone needs it would be both cruel and off-brand; Headspace only ever gated a
  *course*, and we are gating relief if we're not careful.
- **Grandfather the existing cohort.** Everyone who signed up under the old free-library promise
  keeps it. Not primarily out of fairness — they are the only retention data the project has.
- **Price higher than instinct.** Calm quadrupled $10/yr → $40/yr with almost no drop-off in
  signups. The old $3–6/mo target is probably leaving money on the table; test $8–10/mo.
- **Don't take money before there's a build date.** A founding-member *click* at course
  completion is the willingness-to-pay test. Actual deposits wait until delivery is real.
- **Never charge for Take·5 itself.** It is the acquisition engine and it is what the ad
  delivers on. A wall at the end of a free course is the one thing Take10 graduates
  consistently resented (documented, see the audit).

## Ad optimization (learned the hard way, 2026-07-28)

- **A falling CPL is not automatically good news.** Test 1 ended at **under $2/lead with zero
  engagement** — Meta had found people who sign up for anything. The optimizer will always
  succeed at the event you give it; if the event is cheap to fake, it will find the fakers.
  **Judge a campaign by the behaviour behind the conversion, never by the conversion price.**
- Corollary: fix this by moving the conversion event, not by fighting the algorithm. Put the
  email behind a completed lesson and the same optimizer has to go find people who do lessons.

## Production craft (established 2026-07-28, applies to every future recording)

- **Record full takes in one continuous pass, never clip-by-clip.** Per-clip recording trimmed
  to digital silence makes the room tone snap in and out — the speaker sounds like they're
  teleporting. A continuous take has a continuous floor, which is what "silence" is supposed
  to sound like. This is also why the lesson needs NO background music (see below).
- **Fit the video to the performance, not the other way round.** Caption times are derived from
  the actual measured speech onsets in the take. The booth (`../take5-recorder.html`) shows
  each line 0.8s early so the natural read-then-speak lands on the beat; this took Jonny's
  delivery lag from +0.88s (take 1) → +0.24s (take 2) → **+0.08s (take 3)**.
- **Word-pop must be spread across the SPOKEN duration of the line**, not ticked at a fixed
  rate. Otherwise the reveal rate tells the reader nothing about pace — and if the pop is
  slower than the delivery, the last words get killed before they ever render (this actually
  happened; four lines were silently losing their tails).
- **Every caption must outlive its last word by ≥1.15s.** Enforced in the beat builder.
- **No music on the lessons.** Headspace's courses are voice and silence; Calm uses beds. Ours
  is Headspace here, because "silence grows" across the five days and the Still Moment IS
  five seconds of nothing — music would delete the beat the whole course is built on. Silence
  also has no rights holder. The AD cut is a separate question and may carry ambience.
- **Audio cleanup chain that works** (NYC street noise): 80 Hz high-pass, then spectral
  subtraction using a noise profile measured from the take's OWN silent hold, keeping 14% of
  the original so the floor stays CONTINUOUS rather than gating to zero. Take 3 went from
  −38 dBFS floor / 15 dB SNR to **−57.5 / 32.3 dB**.
- **Vocal fry is an air problem before it's a voice problem.** Breathe before every line and
  sit slightly higher in pitch — reaching down for "calm" lands at the bottom of the range
  where the cords rattle. Measured: fry frames 28.9% → 20.3% between takes 2 and 3.
- **Keep every take.** Naming: `d1_full_take1.wav`, `d1_full_take2.wav`, and the chosen one as
  `d1_full.wav`.


## Marketing & ethics

- **No fake social proof, no fake scarcity.** `WAITLIST_COUNT` in `../fitness-snack.html` only ever shows the real number from Netlify Forms.
- **Meta ads may not imply knowledge of the viewer's mental state.** "Struggling with anxiety?" = personal-attribute violation → rejection/flags. Sell the moment instead: "mind won't stop?", "wired at 3pm?".
- **One Facebook page. No backup pages.** Duplicates read as ban evasion → permanent bans across all assets. If restricted: appeal + verify identity, never fresh accounts.
- **Floating pill policy (Jonny, 2026-07-15)**: "give it to them as often as we can without being obstructive." Pill shows on all tabs AND the prescription screen (tucked low); hidden only during the 60-second timer and the log/results screens, where the auto-popup owns the ask.
- Waitlist copy leads with **"Want more?"** + "first in line, free, at launch" (Jonny's framing as of 2026-07-15 — the earlier "your email is the vote" framing is retired; still honest, just incentive-led).

## Product taste

- **Exclamation rule (2026-07-15)**: exclamation points on celebration lines only ("Day 3 in a row!", "Good to see you back!"), never on instructions or first-run copy — newcomers often arrive anxious; instructions stay calm.
- **Settled-scale rule (2026-07-15, from tester feedback)**: the UI **measures "settled ↔ spiralling", never "anxiety."** Asking "how anxious are you?" primes people to scan for anxiety and tells the non-anxious the app isn't for them (the Headspace lesson: sell destinations, not deficits). Results say "you settled 3 points." The word "anxiety" survives only in the medical disclaimer (honesty) and opt-in "Why this?" science copy. Voice line `res_good` still says "your anxiety eased" — **re-record candidate**: "You settled in one minute. That's the whole idea."
- **Encouragement rule (2026-07-15)**: never show users a negative number about themselves. Dose level above standard = show the % proudly ("+10%"); below standard = the word **"Gentle"**, never "−50%". Eased doses are framed as the app doing its job, not the user falling short. Show meaning, never math.

- Warm, cartoonish, Headspace-y surface; rigorous mechanism underneath. Friendly blobs + real physiology.
- When a snack doesn't help: warm human copy + a breathing follow-up. Never "that's real data, not failure" AI-speak.
- Voice = the product's intimacy. Combined one-breath phrases, no chopped audio.
- Not positioned as desk-only: invisible mode is the hook, "sixty seconds anywhere, matched to how you feel" is the product.

## Legal / someday

- Trademark "Snack·Rx" if validation succeeds (few hundred dollars; confirm with a lawyer).
- Wellness tool, not medical care — disclaimer stays in the You tab.
