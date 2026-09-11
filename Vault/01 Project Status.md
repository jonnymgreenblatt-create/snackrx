# Project Status

*Updated 2026-07-28 (evening) — **THE MODEL CHANGED. Read this before anything else.***

*Settle is no longer "a free snack site with a waitlist." It is now: **Take·5, a free five-day
course, is the product people meet first; the snack library becomes the paid membership.**
Day 1 of the course is built, recorded in Jonny's voice and finished. The validation ad has
been STOPPED. Nothing has been deployed — the live site is still the old model.*

## What happened today (2026-07-28) — the short version

1. **The ad was stopped.** By the end it was producing leads under **$2** — and none of them
   did a snack, before or after signing up. Jonny's read (correct): Meta had found people who
   reflexively sign up for anything. The optimizer was succeeding perfectly at the goal it was
   given; the goal was wrong. See [[04 Waitlist & Validation]] for the full test-1 readout.
2. **The architecture was rebuilt** around the real Headspace/Calm model — see
   "The new model" below and the new rules in [[02 Rules & Decisions]].
3. **Take·5 Day 1 is DONE**: script v4 (2:58), recorded three times, take 3 is final, cleaned
   to −57.5 dBFS / 32.3 dB SNR. The 27s ad cut is recorded and cleaned too. Both live in
   `../voice/take5/` and play inside `../take5-day1.html`.
4. **The Monday welcome email was cancelled** — the list will be blasted with the course
   instead, once the Day 1 page exists.

## The new model (decided 2026-07-28, binding until revisited)

**The three layers:**

| Layer | What it is | Price |
|---|---|---|
| Acquisition | Reels, the IG character series, the ad cut, emails | free (marketing) |
| **The free product** | **Take·5 — five days, one mechanism a day, ~3 min each. Repeatable forever.** | free forever |
| **The paid product** | The mood-matched snack library, new moves, new courses, reminders, memory, cross-device | membership |

**Why:** verified research (below) showed Headspace NEVER gave away an unlimited library.
Take10 was the only free practice content — everything beyond it (Take15, Take20, the Journey)
was paid from day one. Our snack library is not the equivalent of "Take10's repeatable days";
it is the equivalent of **the thing they charged for**. Giving it away was off-model.

**The funnel:**

- **Day 1 is ungated.** No email, no account. The ad lands straight on it and it plays.
  (This is Calm's mechanic: Day 1 of every program is permanently free.)
- **The email is the price of Day 2.** Completion screen: *"Day two arrives tomorrow. Where
  should I send it?"*
- **Therefore `sessions=0` becomes structurally impossible** — a Lead can only exist if
  someone finished a lesson. The pixel's Lead event silently becomes an engagement event,
  which fixes the metric misalignment without touching the optimizer.
- **Existing ~21 signups are grandfathered** on the current free library.

**Pricing (to be tested, not yet live):** two asks side by side at Day 5 completion — free
("send me day two"-style continuation) and **founding member at a real monthly price**. The
ratio between those two clicks IS the willingness-to-pay signal. Calm went $10/yr → $40/yr
with almost no drop-off in signups, so **test $8–10/month, not the old $3–6 target.**

## Where we left off / what's next

1. **The Day 1 landing page** (`/take5`) — ungated player + completion screen carrying the two
   asks. Not built.
2. **`/take5` redirect** in netlify.toml. Not built.
3. **Days 2–5** — scripts exist in `../take5-scripts.md` but need the v3/v4 treatment
   (window-fitting, the trims Day 1 got) before recording.
4. **Blast the existing ~21 before spending a cent on ads** — they are the free beta cohort,
   and this is the first honest read on retention the project has ever had.
5. **Then the new ad**: the 27s Day 1 cut → `/take5`.

## ⚠️ Operational risks to watch

- **Netlify Forms free tier is 100 submissions/month, and `checkin` rows share that bucket
  with `waitlist`.** Engagement generates multiple checkin rows per person per day. Check
  usage before it silently caps — a full bucket means signups stop arriving, not just data.
- `META_CAPI_TOKEN` still unset (open since 2026-07-20). Carries forward to the new funnel
  since it's the same pixel and the same Lead event.
- Junk drafts still sitting in Ads Manager. Never bulk-publish.

---

*Previous: 2026-07-24 (morning) — **STAGED, NOT DEPLOYED: the welcome-email batch is ready for Jonny's go.** All three copies + zip now carry: (1) **MoodPicked** content-free beacon at the top of chooseState (closes the PageView→RxViewed blind spot); (2) **`?mood=<id>` deep link** — lands straight on that mood's prescription exactly as if the card were tapped (verified headless: ?mood=tense → Slow shoulder rolls, no errors; plain visits unaffected); (3) **`/3pm` redirect** in netlify.toml (root + zip copy) → `/?utm_source=welcome-email&utm_content=3pm&mood=tense`. Plus the previously staged checkin-utm preference. One deploy ships it all — do it before Monday 2:45 PM (welcome email send). OVERNIGHT: 3 more signups (~$4.51/lead) incl. **the first real checkin rows** — one signup joined 1:50 AM then did 2 snacks (kind=snack!); another sessions=1. Real signups = 14 (13 ad), product-engaged 5, CPL ≈ $9, spend ≈ $118 (~¾ of min test). Dashboard artifact refreshed. Details [[04 Waitlist & Validation]].*

*Previous: 2026-07-23 (night): **2 evening ad signups, BOTH product-converted** — [email removed] (sessions=2!) 6:21 PM + [email removed] (sessions=1) 8:32 PM, meta/calf-v1, ~$10 spent today → ~$5/lead. Product-converted strangers now 3 of 10 ad signups (the last three in a row — the sessions=0 pattern flipped). **Real signups = 11 (10 ad).** CPL ≈ $9–10 cumulative. Details in [[04 Waitlist & Validation]]. Also today: engagement dashboard artifact built (refresh on request — numbers above not yet reflected), budget nudged $18→$21 (safe, no learning reset), bloom reel master v4 finalized for recording ([[03 Ad Campaign]]). Welcome email now owed to 10 ad signups.*\n\n*Earlier 2026-07-23 (midday) — NO deploy. **(1) SUCCESS METRIC REDEFINED (Jonny + consultant — binding): engagement (snack starts / full-minute completes / returns) is now the PRIMARY validation signal; signups/CPL are supporting.** Details + first read in [[04 Waitlist & Validation]]. New **"settle-engagement-dashboard" artifact** built (Claude refreshes on request: "update the engagement dashboard"). Jul 20–22: RxViewed 20 → SnackStart 18 (90%) → SnackComplete 14 (78%); checkin instrument too new (0 real rows). **(2) Scam + spend scare resolved:** a Page-inbox DM from "Meta Policy Support Team" (actually personal profile "Kuphal Jens", PDF attachment "Restricted-access-equipment-needs-verificationss.pdf") is a PHISHING SCAM — never open the PDF; report + delete. Account Quality checked live: **"No account or asset issues."** Today's tiny spend ($1.20 by 11 AM) is Meta's weekly pacer paying back the Sun–Wed front-load (Jul 19–22 spent ≈ $104 of the calendar week's ~$126 ceiling; $26–30/day against the $18 budget) — expect quiet Thu–Sat, normal pace from Sunday. Rule: judge spend by the WEEK, never one day. **(3) Placement truth (last-7d attributed leads):** Reels 3 · Stories 2 (reach 9!) · **AN rewarded video 1** ($5.72 CPL) — the Jul-22 "burst mostly AN" note overstated AN at the lead level; AN = ~1 of 9 while eating ~⅓ of reach. AN decision open, low stakes. ⚠️ New check for next FB session: Events Manager shows advanced matching "Automatic & manual" with Email + First name on funnel events — the rule says automatic stays OFF; verify dataset Settings. STILL OPEN: welcome email to signups, META_CAPI_TOKEN, @settlemoves IG bio link, discard Ads Manager junk drafts (seen again today — "Review and publish (9)").*

*Previous: 2026-07-22 (night) — deploy #10 SHIPPED (return check-ins + `/hi` welcome-email redirect). HUGE DAY: **4 new ad-driven signups** — 3 in a midnight burst (mostly Audience Network rewarded-video inventory — cheap incentivized clicks, placement breakdown read; leads real humans but intent flagged) + **one signup, 5:32 PM, sessions=1 — THE FIRST PRODUCT-CONVERTED STRANGER** (did a full snack before joining). Real signups = 9 (8 ad-driven), spend ≈ $85–90 → **CPL ≈ $10–11, under the $15 build line** at ~½ of min test spend. Events Manager Jul 22: RxViewed 11 = SnackStart 11 = SnackComplete 11 (zero leakage — a small number of engaged users doing repeated full snacks). Otter reel v3 rendered + posted (frame-exact headless render). STILL OPEN: welcome email to the 8 signups (draft ready, `/hi` live), `META_CAPI_TOKEN` env var, @settlemoves IG bio link, AN placement decision (exclude vs watch), Ads Manager junk drafts to discard.*

## Deploy #10 — 2026-07-22, 11:22 PM ET, SHIPPED ✅

Hands-free via Chrome extension (sixth run). Deploy summary: 1 generated page changed, **7 redirect rules processed without errors**, 1 function deployed, 7s build. Shipped: **(1) Return check-ins** — once someone has JOINED the waitlist, the app posts a check-in to a new hidden Netlify form `checkin` on later visits (and on a day's first completed snack): SHA-256 hashed email (same hash as advanced matching), running sessions count, kind (visit|snack), utm_source, day. Throttled once/day (+once more on first snack of the day); non-joined visitors send nothing; no-ops on file:// copies; moods/ratings/results still never leave the browser. You-tab disclosure extended to match. **How to read it**: Netlify → Forms → checkin; hash each known waitlist email (sha256 of lowercased address) to put names on rows. Comparing a person's sessions count across check-ins reveals both returns AND new snacks. **(2) `/hi` redirect** → `/?utm_source=welcome-email` (the pretty link for the welcome email). Verified live same minute: /hi 302s with correct UTM, app renders, checkin form registered in Forms — **and logged its first real submission seconds later** (Claude's verification visit in Jonny's signed-in browser; hash = Jonny's — subtract). ⚠️ First checkin row is Jonny's test — subtract. STAGED after this deploy (next batch): checkin utm_source now prefers the CURRENT visit's utm over first-touch (so email-driven returns read `welcome-email`); MoodPicked event still unstaged.

## Deploy #9 — 2026-07-21, 3:57 PM ET, SHIPPED ✅

Hands-free via Chrome extension (fifth run). Config-only deploy: netlify.toml gained `/thumb` → `/?utm_source=fb-reel&utm_content=thumb-v1` (matches the thumb reel's pinned-comment UTMs) and `/ig` → `/?utm_source=ig-bio` (the one Instagram bio link — IG comments/captions aren't clickable, so all IG traffic funnels through the bio). Deploy summary: "All files already uploaded" (toml-only change — cheap), **6 redirect rules processed without errors**, 1 function deployed. Verified live: `/thumb` 302s with correct UTMs; `/ig` loads the app. **Share links are now safe to use everywhere**: FB pinned comments → `settlemoves.com/thumb` (or `/snack` etc. per creative), Instagram bio → `settlemoves.com/ig`. NOT in this deploy: MoodPicked funnel event (promoted 2026-07-21 after the first funnel read showed the PageView→RxViewed leak — stage into all three copies for the next batch).

## Staged after deploy #8 — NOT YET DEPLOYED

- ~~**Clean share links (2026-07-20 evening)**~~ **SHIPPED in deploy #9** (plus new `/thumb` and `/ig`) — see above.
- ~~"Thumb circles" calm protocol~~ **PULLED from the batch (Jonny, 2026-07-20 evening: "clunky, not ready")** — reverted from all three copies + zip; the draft protocol text lives in [[06 Ideas & Backlog]] for a polish round before it ships.
- **"Thumb circles" calm protocol (WITHDRAWN — see above)** (the reel-born move — see the in-feed snack reels section of [[03 Ad Campaign]]): 4s-in/6s-out breath orb + trace-a-circle instruction, reuses existing br_in/br_out clips (no new recordings). All three copies + zip. Deploy batched with whatever comes next (candidates: lazy-load voice split, res_good re-record, CAPI token activation).

## Deploy #8 — 2026-07-20, 12:01 PM ET, SHIPPED ✅

Hands-free via Chrome extension (fourth run). Deploy log confirmed "1 function deployed". Verified live same minute: new form fields registered (form-name, name, email, sessions, utm_source, utm_content, **event_id, fbp, fbc**, bot-field), `sha256Hex` computes, `joinWaitlist` is async, hashed-email disclosure clause rendering. End-to-end form test posted (formtest-deploy8@test.invalid, utm test — SUBTRACT from counts) and appeared in Verified within seconds. **CAPI function is deployed but DORMANT until `META_CAPI_TOKEN` exists — adding the env var requires one more deploy to take effect.**

## What deploy #8 contained

- **Advanced matching on Lead**: volunteered email SHA-256-hashed in-browser → `fbq('init', …, {em})` before the Lead fires; Lead now carries an `eventID` for dedup. Disclosure updated (hashed-email clause). All three copies.
- **Conversions API**: `netlify.toml` + `netlify/functions/submission-created.js` (in the zip): server-side Lead per real signup with hashed em + fbp/fbc (new hidden form fields, incl. `_fbc` fallback from `fbclid`), deduped via the shared event_id; skips test utm sources; logs to Netlify function logs. **No-ops until Jonny does the one-time step: Events Manager → dataset Settings → Conversions API → Generate access token → Netlify → Site configuration → Environment variables → `META_CAPI_TOKEN`. Then deploy (one deploy covers everything).**
- Note: the form gained fields (event_id, fbp, fbc) — Netlify re-scans forms on deploy; if submissions stall, re-enable Form detection + redeploy (known gotcha in DEPLOY.md).

*Previous: 2026-07-17 (evening) — deploy #6 SHIPPED (Meta pixel + staged fixes). FB Page "Settle Moves" created. Next: Leads campaign in Ads Manager, then Jonny's res_good re-record. See [[03 Ad Campaign]].*

## Deploy #7 — 2026-07-20, 10:20 AM ET, SHIPPED ✅

Deployed hands-free by Claude via the Chrome extension (DEPLOY.md recipe, third successful run). Verified live on settlemoves.com same minute: `beacon`/`beaconWaitlistSeen` functions present, fbq loaded, new disclosure rendering. Mid-campaign deploy is safe by design: same ad URL, same Lead event, atomic Netlify publish — ad flow untouched.

- **Full-funnel pixel events (2026-07-20, Jonny's call — disclosure updated to match, see [[02 Rules & Decisions]])**: `RxViewed` (prescription screen shown) → `SnackStart` (Begin pressed, movement + breathing) → `SnackComplete` (full minute only; aborts = Start without Complete) → `WaitlistViewed` (any signup ask shown; 5s-throttled so the results card + its auto-popup count once; only fires pre-join). Content-free by design — no moods, ratings, doses or results, ever. Hostname-guarded like the pixel itself; all three copies patched; every script block syntax-checked. **Why**: with only PageView + Lead we couldn't tell ad-click bounce from played-but-didn't-convert. Read the funnel in Events Manager; adjudicating metric for the peak-relief-bounce question = Leads ÷ WaitlistViewed (and Leads ÷ landing page views in Ads Manager). Disclosure wording per Jonny (kept deliberately plain): "…Meta's ad pixel counts visits, basic activity and waitlist signups. It never sees your moods, ratings or results."
- Still pending: `res_good` re-record ("You settled in one minute. That's the whole idea.").

*Previous: 2026-07-15 (afternoon) — big ship day: dog mascot, Tesla funnel, one-slider log, normalized audio, tagline. All live. See [[Sessions/2026-07-15]]. settlemoves.com works (SSL fixed). ~70 Netlify credits left. Next: Meta campaign ([[03 Ad Campaign]]).*

## ⚡ RENAMED: the brand is now **Settle — movement snacks for your mind**

Chosen over Snack·Rx to avoid Meta's pharma classifiers ("Rx") and food ambiguity. Verified: no competing "Settle" wellness app; settle.com is an unrelated fintech. Domain **settlemoves.com** purchased at Squarespace 2026-07-14, added as Netlify alias. **Live with HTTPS as of 2026-07-15** — DNS records were fine; the blocker was the Let's Encrypt cert (issued 7/12, pre-domain; the 7/14 auto-renewal failed because DNS hadn't propagated). Fixed via Netlify → Domain management → Renew certificate. If a future domain is ever added: add DNS first, wait for propagation, then renew the cert. Kept unchanged on purpose: localStorage key `snackrx_v4` (renaming wipes visitor data), Netlify form name `waitlist`, snackrx.thekenclub.com still works. Waitlist submissions now carry `utm_source`/`utm_content` for ad attribution. Vault/folder names still say SNACKRX — cosmetic, rename anytime.

## Live right now (snackrx.thekenclub.com)

- **206 voice recordings** in Jonny's own voice (July 14 re-record). Targets are one-breath phrases — `tgt_58_reps` is one clip, no stitching. Masters: `../voice/*.wav` (irreplaceable). Old set preserved in `../voice-old-masters-20260712/`.
- **Silent-switch-proof audio**: voice plays through the media channel (HTMLAudio), so iPhones on silent still hear it — the Headspace trick. Plus a one-time "🔊 Sound on" toast.
- **Waitlist funnel** (overhauled 2026-07-15, staged not yet deployed): four entry points — results-screen card after every snack, one-time sheet after 2nd win, You-tab card, and a **floating "✨ Want more?" pill on every tab**. Copy leads with "Want more?" + "first in line, free, at launch" (vote framing retired). Orange "Get early access — free" buttons. Alerts email the owner's email.
- **Retention layer**: 9 badges, streak chip, time-aware greeting, "knows you" dose copy, breathing follow-up when a snack doesn't land.

## Deploy #6 — 2026-07-17, 3:58 PM ET, SHIPPED ✅

Deployed hands-free by Claude via the Chrome extension (DEPLOY.md recipe, second successful run). Verified live: Meta pixel fires on settlemoves.com (fbevents.js + config 200 for pixel 199999138000739, checked via network log). Shipped in this batch: **Meta pixel + Lead event + honest privacy disclosure** (Jonny's deliberate reversal of the no-pixel rule — details in [[02 Rules & Decisions]]) plus everything staged after deploy #5 (below). Check credits at Netlify → Billing. Still pending: `res_good` re-record ("You settled in one minute. That's the whole idea.") — next batch.

## Shipped in deploy #6 (was: staged after deploy #5)

- **Physiological sigh audio cutoff fix (Jonny's report)**: "A second short inhale" was chopped at "a second shor—" — NOT the recording (clip is a clean 1.43s); the sigh's second-inhale step lasts 1s and the next cue's `stopSpeaking()` cut it. New `cueLate` step option: the "Loooong exhale" cue starts 0.7s late so the previous line finishes (still lands early in its 6s step). Abort clears the pending cue. All three copies.
- **The dog offers the app** (Jonny's idea, scoped to warm users): the Today-tab greeter's welcome line becomes "Want Settle one tap away, no app store? Tap me." — but ONLY for people who joined the waitlist or have 2+ sessions, never first-touch visitors (funnel stays pure), never when running installed, and it retires permanently after one tap (`S.dogA2hs`). Streak celebrations outrank it. Tapping the dog opens the install sheet. All three copies.
- **Install button in every waitlist success state** (Jonny: "is it too hidden?"): a quiet "Put Settle on your home screen" ghost button inside all four "You're in 🎉" blocks, opening the same install sheet. Sequencing rule: **the install ask comes only AFTER the email is captured, never beside it** — pre-signup surfaces (pill, popup, forms) stay untouched so the validation funnel measures one decision. Hidden when already running installed. All three copies.

## Deploy #5 — 2026-07-16, 11:05 PM, SHIPPED ✅

Everything below went live (plus the settled-scale reframe staged since 7/15). **Deployed hands-free by Claude via the Chrome extension — recipe written down in `../DEPLOY.md`** (key trick: copy the zip to the session outputs folder first; the extension can't read device paths). Verified live: install card on You tab, manifest serving with `utm_source=pwa`, form pipeline alive (the first real submission visible). Jonny upgraded Netlify credits beforehand — check Billing for the new balance.

- **Orb label cutoff fix (tester report, via text)**: "A second short inhale" / "Inhale through your nose" overflowed the breathing orb's 220px label box at 22px. Label now 18.5px, line-height 1.35, `text-wrap: balance` — long phrases wrap to two centered lines inside the orb. All three copies.
- **"Get the app" option**: the site is now an installable PWA — `manifest.json` + `icon-192.png` added to the deploy zip (start_url carries `utm_source=pwa`, so signups from the installed app self-identify in Netlify Forms). A "Settle on your home screen" card on the You tab (auto-hidden when already running from the home screen) opens an install sheet: real Chrome/Android install prompt via `beforeinstallprompt`; Share → Add to Home Screen steps on iOS. Deliberately OUT of the waitlist funnel — the validation metric is unchanged (installs are a retention layer, not the scoreboard). All three copies updated (source, standalone, zip index).

## Infrastructure

- Netlify project `brilliant-tarsier-4280f9`, custom domain via Squarespace DNS (records in `../README.txt`)
- Deploys: drag `../snackrx-site.zip` onto Production deploys — but see [[02 Rules & Decisions]] on credits
- Form detection ON; submissions at Netlify → Forms → waitlist

## Where we left off

FB Page **"Settle Moves"** is live (dog avatar, brand cover, bio). Pixel is live on the site. Validation threshold locked (<$15/signup build, >$30 stop — [[04 Waitlist & Validation]]). **THE AD IS PUBLISHED (2026-07-17 ~11:30 PM): campaign "Settle validation — Jul 2026", $15/day, in Meta review.** Full config + build gotchas in [[03 Ad Campaign]]. Daily ritual now: Netlify Forms (both tabs) for `calf-v1` signups → log in [[04 Waitlist & Validation]] → spend vs the $15/$30 threshold. Still open: record res_good ("You settled in one minute. That's the whole idea."), delete the old junk drafts in Ads Manager (never bulk-publish them), consider a real @settlemoves Instagram + statics as a second ad.

## The one-line goal

Enough strangers from a paid ad complete a snack *and* join the waitlist to justify building the real app.
