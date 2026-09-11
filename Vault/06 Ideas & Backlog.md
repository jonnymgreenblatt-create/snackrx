# Ideas & Backlog

## Mascot: THE DOG (final as of 2026-07-15, nameless like Headspace's blob)

Golden fur, floppy ears, one-eye patch, orange collar + gold tag, wagging tail. Built into the app: waving greeter (Today + signup popup), zen sit (results, only when anxiety dropped).

- [ ] Mood variants / more poses (cheering for badges, encouraging on the prescription screen?)
- [ ] Candidate voice line to record next session: **"I'll ask for your number at the end."** (plays with/near tgt_count; Jonny unsure if necessary — try in one recording, A/B by feel)
- History: blob → pebble → capybara/hedgehog → rolly polly/armadillo → zen sloth → **dog**. Keep: awake eyes everywhere except the settle pose; bubbles at decision moments only, never mid-exercise.
- **Animation rules (learned the hard way building the ad, 2026-07-15)**:
	- The dog emotes with his TAIL, not his limbs. Bodies stay still; no bouncing (an anxious-looking mascot defeats the brand).
	- Tail rig: horizontal tail behind the hip (rotation of an upward tail reads as forward/back, not up/down). Animate with **SVG `animateTransform` with the rotate center in the values** (e.g. `values="-13 29 42; ..."`), NOT CSS transform-origin — CSS resolves the pivot differently across browsers and the attachment point drifts. Path root within ~1 unit of the pivot = welded joint.
	- Wag rhythm is **periodic, not steady**: three quick wags, then a rest (2.8s cycle). Constant motion reads mechanical; bursts read alive.

## IG character series — "pippo.bean lane" (Jonny, 2026-07-23 night, to research)

A recurring cute character making little relaxing videos — inspired by **pippo.bean**, a small IG creator Jonny follows (account not reachable from outside IG; research it together via the Chrome extension: format, pacing, character design, why it's soothing). The gap it fills: we have a cast (dog, otter, orange character, flower) but no RECURRING SERIES — the format that builds followers vs one-off reach. Direction to explore: one character, one small calming/movement thing per video, same comforting rhythm every time, snacks woven in as things the character does. Candidate: does the dog carry this, or a new creature?

## ⭐ TAKE·5 — STATUS 2026-07-28: **DAY 1 IS BUILT AND RECORDED**

Take·5 is no longer a backlog item — it is the product. Model, funnel and pricing now live in
[[01 Project Status]] and [[02 Rules & Decisions]].

**Day 1 · Unclench (jaw) — DONE.** `../take5-day1.html` is the master (lesson variant + 27s ad
variant + the seated figure animation). Script is `../take5-day1-script-v2.md` (v4, **2:58**).
Voice is `../voice/take5/d1_full.wav` and `../voice/take5/d1_ad.wav` — take 3 of 3, cleaned.

Script history worth remembering: v1 ran 3:38 with 86 seconds of talking before anyone did
anything. v2 moved **fingertips-on-the-muscle BEFORE the teach** (find it, then hear why it
matters) — that alone bought ~20s. v4 cut two more teach lines at Jonny's call ("Your mind
takes cues from your muscles" + "All day it checks…") so it runs *"That's the masseter"* →
*"This one muscle gets more of your brain's attention than your entire back does."*

⚠️ **Cost of that cut, deliberately accepted:** those lines were the course's spine — the
"your mind reads your muscles / dials" frame the Take10 audit moved to Day 1 so Day 5 could pay
it off. It now needs to be seeded in the course-welcome email, or Day 5 introduces it cold.

**Days 2–5:** scripts drafted in `../take5-scripts.md` but they still need the Day-1 treatment
before recording — window-fitting against real speaking time, the same trimming discipline, and
the audit's revisions (S4 Still Moment, the integration line per close, the Day-3 reassurance
beat).

**New tooling built today:** `../take5-recorder.html` — the booth. Full-take / line-by-line /
ad-cut modes, mic meter, 0.8s lead-in cue, a two-zone bar showing speak-vs-silence, exports
peak-normalised WAVs named for the master's voice slots.

**Original spec + the Take10 research** are unchanged in `../take5-spec.md` and
`../take5-take10-audit.md`.

### Original Take·5 entry (2026-07-24, superseded above) (Jonny, 2026-07-24 — THE BLUEPRINT; full spec in `../take5-spec.md`)

Deliberate model of Headspace's Take10 (their 2012–13 protocol researched via Wayback: free NAMED programme with a number → completion → everyday membership; one voice, teach-then-do, silence grows, ~12-15 real minutes despite the "10"). Ours: **five days, one gentle mechanism a day, ~4 min real, all seated, high impact / low effort** — tuned to the audience the ads actually found (older; aol/msn/yahoo/hotmail streak). Days: 1 soleus raises ("the second heart," UH/iScience 2022 blood-sugar work) · 2 shoulder rolls + the drop (existing assets; continuity with bloom reel + welcome email) · 3 jaw release + masseter massage (new) · 4 hand + forearm self-massage (new; RCT-backed for brief anxiety relief) · 5 slow head turns + physiological sigh (graduation day; existing sigh assets). Jonny's voice teaches every day-intro (our Andy layer). **Completion = the founding-membership moment.** Name "Take 5" approved by Jonny (idiom does the marketing; 13 years from their messaging). Squats/heel drums deliberately EXCLUDED from the course — too vigorous for the discovered audience. Email drip = the course's twin. Build: own round, after the current test reads out; ~20-28 new voice lines; open questions (practice length, day-gating, animations, pre-verdict use as the iterate-round lever) at the end of the spec.

**ARCHITECTURE LOCKED (Jonny, 2026-07-24 afternoon) — the three-rung ladder:** (1) site free forever, no email, promise in the ads stays exactly true; (2) **email = the free Take·5 guided course by daily email** (each day teaches one idea + deep-links into the right snack via the new `?mood=` param) + founding-member standing; (3) paid full-app membership later. The email ask stops being "vote for the future" and becomes value-this-week — and the daily course emails double as the retention instrument. V1 needs almost no site build: emails teach, existing snacks practice, deep links connect. Existing 15 = beta cohort. **Scripts written: `../take5-scripts.md` (~27 new clips; Jonny recording). Next build items: take5-recorder.html booth → per-day deep links/redirects → drip emails (manual at current n; automation decision later) → on-site Take·5 card as the following round.** Site waitlist-ask copy updates to lead with the course only AFTER the drip exists.

## Near-term

- [ ] **MONDAY 2:45 PM ET: send the welcome email** (single cohort, "I'm the voice you hear on Settle", bloom GIF inline = the inbox snack, link settlemoves.com/3pm → Slow shoulder rolls). Draft approved 2026-07-23; GIF rendered (`../settle-bloom-snack.gif`). Friday send rejected (weekend inbox burial). BEFORE SEND: stage `?mood=tense` deep-link (all three copies) + `/3pm` redirect in netlify.toml, deploy the pending batch (checkin-utm fix + MoodPicked + deep-link), verify /3pm lands on shoulder rolls.

- [ ] Run the Meta ad test → [[03 Ad Campaign]]
- [ ] Set a validation threshold *before* the ad runs → [[04 Waitlist & Validation]]
- [ ] Update `WAITLIST_COUNT` once real signups accumulate
- [ ] End-to-end phone test of the new voice with silencer ON

## Iteration levers (only if the ad test lands in the $15–30 in-between zone)

- **Soft signup gate** (Jonny's idea, 2026-07-18, deliberately NOT used in round one): if usage is high but conversion low (many sessions, few signups), test gating continued use behind a value-framed ask ("save your streak and calibration with an email"), never a hard wall. NOT before then: it would poison the volunteered-signup metric, contradict the ad's "no signup" promise, and break the sessions-per-signup telemetry. One variable per iteration round.

- **Peak-relief bounce / earlier ask** (Jonny's empathy-test insight, 2026-07-18): "once the exercise fixes me, I close the app — why linger?" Structurally the flow already sprints (email bar ON the rating screen; auto-popup 1.4s after results, fires on every results incl. breathing path — verified in source). But IF the test shows good CTR + good landing-page views + weak Leads, this is the prime suspect: test a leaner/earlier ask (e.g. inline ask on the rating screen promoted above the slider, or popup before confetti). Never mid-exercise. Adjudicating metric: Leads ÷ landing page views.

## Full-app ideas (if validated)

- **PWA as full-app v1** (researched 2026-07-16): "Add to Home Screen" makes the site an installable app — no App Store, no review, no $99/yr. iOS 26 opens home-screen sites as standalone apps by default. Installed PWAs get **web push** (the reminders feature! iOS 16.4+, only once installed + permission granted) and can request **persistent storage** (streak/calibration durability). Needs only manifest + service worker + icons on the existing single-file app — bundle with a normal deploy batch. Gotcha: installed-app storage is SEPARATE from Safari's, so an existing user's streaks don't carry over on install. Native/App Store deferred until the audience justifies it. Does NOT change the validation test (still ad → site → waitlist).
- Cross-device accounts, real memory (the "getting to know you" engine, but persistent)
- Push/reminder nudges at personal stress times (the calibration engine already knows the patterns)
- More moves, more voices, more calm protocols
- Leaderboards / buddy accountability (needs backend)
- Apple Health / wearable HR integration — real Karvonen zones instead of estimates

## Parking lot

- Trademark "Snack·Rx" (post-validation)
- Analytics beyond the waitlist (privacy-respecting, e.g. GoatCounter) if funnel visibility is needed
- Voice packs: other languages, other tones (the recorder + build pipeline already support swapping packs)
- B2B angle: teams/employers buying calm minutes for staff (way later)

## Rejected / settled

- ~~Fake waitlist numbers~~ — honest counter only ([[02 Rules & Decisions]])
- ~~Backup Facebook pages~~ — ban-evasion pattern, one clean page
- ~~Re-recording to fix clicks~~ — solved in software first (declick pass), then superseded by the July 14 re-record for combined phrases
