# Waitlist & Validation

## ⛔ TEST 1 CLOSED — 2026-07-28. Ad stopped by Jonny.

**Verdict: acquisition is solved; retention was never demonstrated.**

| | |
|---|---|
| Real signups | ~21 (≈20 ad-driven) — *confirm final count in Netlify → Forms, both tabs* |
| Spend | ~$200 (confirm in Ads Manager) |
| CPL | ~$10 cumulative; **final days under $2** |
| Product-engaged | ~10 of 20 at peak (50%), then collapsed to ~0 on the cheap-lead days |
| Cross-day returns | **1**, and it doesn't really count (below) |

**Why it was stopped.** In its last days the campaign produced leads under $2 and *none of
them did a snack, before or after signing up*. That is the signature of Meta finding a pocket
of people who reflexively sign up for anything. The optimizer was doing exactly what it was
told; the instruction was wrong. Continuing would have bought more of an answer we already had.

**What test 1 actually bought (all of it valuable):**
- Attention is cheap: **$2–10 per lead** with the calf creative. Huge headroom for a better funnel.
- The whole pipeline works and is verified: pixel, funnel events, advanced matching, CAPI
  function, Netlify Forms, the `checkin` instrument.
- A clean negative result on retention, which is what justified the entire course pivot.

**The one "return" — and why it's not the win it looks like.** `[email removed]`
(2026-07-28) had an `fbp` cookie set **46 hours earlier** — a genuine cross-day return, the
first in the whole test. But his `fbc` was fresh: **he came back because Meta showed him the ad
again, not because he remembered us.** The ad had memory; the product didn't. That single data
point is the clearest possible argument for the course.

**An analytical correction worth keeping.** `sessions` reads at the instant the form posts, so
`sessions=0` never meant "didn't try it" — it meant "hadn't tried it *yet*". Several signups
joined at 0 and did a full snack within 60 seconds. The `checkin` instrument that reveals this
only shipped 2026-07-22, so **all pre-Jul-22 "sessions=0" reads undercount engagement.**

## The metric for test 2

Unchanged in spirit (engagement, not signups), but now enforced by structure rather than
measured after the fact: **the email sits behind Day 1, so every Lead is by definition someone
who completed a lesson.** Watch: Day 1 completion rate, Day 2 email open/click, and the
founding-member click rate at Day 5.

---

## Historical log (test 1)

## The funnel

Ad → snackrx.thekenclub.com → pick a feeling → 60-second snack → result screen ("anxiety 7 → 4") → waitlist ask → email lands in Netlify Forms + alert to the owner's email.

Three asks, all honest: results-screen card (every completed snack), one-time sheet (after 2nd session with a positive drop — the warmest moment), You-tab card (for later converts).

## Signup log

| Date | Total signups | Notes |
|------|---------------|-------|
| 2026-07-14 | 1 | Jonny's own end-to-end test |
| 2026-07-15 | 2 | Jonny's settlemoves.com pipeline test (sessions=4) |
| 2026-07-16 | 3 | **First real signup** ([email removed], sessions=2, no UTM — direct share). Akismet flagged it as spam (empty name field): found via the email alert, restored from Forms → Spam tab. |
| 2026-07-18 | 5 | +2 Jonny rehearsal tests (utm_source=test) during the pixel traffic-permissions fix — subtract. |
| 2026-07-19 | 6 | **🎉 FIRST AD-DRIVEN SIGNUP**: [email removed], utm meta/calf-v1, **sessions=0** — converted from the open form WITHOUT doing a snack first (the ad itself sold them). ~$20–23 spent to this point → rough CPL ~$20 at n=1, judged only at full test spend. Track the sessions distribution on future signups: 0s = ad-converted, 2+ = product-converted (feeds the peak-relief-bounce question in [[06 Ideas & Backlog]]). |
| 2026-07-20 | 7 | Claude audit of BOTH Forms tabs: **7 verified, 0 spam**. The 7th is one of Jonny's three Jul 18 test entries (utm test ×2 + pixeltest — the Jul 19 row undercounted tests by one). **Real signups still = 2** (1 direct · 1 ad). Nothing new since the first ad signup, Jul 19 5:41 AM. Cumulative spend ~$28–30 → CPL ~$28–30 at n=1; judged only at full test spend. |
| 2026-07-20 | 8 | +1 Claude form-pipeline test after deploy #8 (formtest-deploy8@test.invalid, utm test/deploy8-formcheck) — **subtract**. Real signups still = 2. Jonny test entries to subtract now total 5 (+1 Claude test). |
| 2026-07-21 | 9 | **🎉 SECOND AD-DRIVEN SIGNUP**: [email removed], 3:31 PM ET, utm meta/calf-v1, **sessions=0** (ad-converted without doing a snack — same pattern as the first ad signup; the ad itself is selling the waitlist). First signup through the deploy-#8 pipeline: email alert shows event_id + fbp + **fbc** (fbc = clicked the ad, and pixel cookies present = not ad-blocked), so the browser Lead should surface in Events Manager + attribute to calf-v1 in Ads Manager (~24h lag possible; CAPI still dormant, no token). Address looks like a church's gmail — unusual but nothing suspicious; counts as real. **Real signups = 3 (2 ad-driven).** Cumulative spend ≈ $50 → **CPL ≈ $25 at n=2 — first time inside the $15–30 iterate zone instead of past the $30 stop line.** Still judged only at full test spend ($150–300). |
| 2026-07-21 | 10 | **🎉🎉 THIRD AD-DRIVEN SIGNUP — one hour after the second**: [email removed], 4:32 PM ET, utm meta/calf-v1, **sessions=0** (third in a row — every ad convert so far signs up on the ad's promise without doing a snack), event_id + fbp + fbc all captured. Two leads in an hour on the first full day of advanced-matched Leads + ~$85 CPM — consistent with the optimizer finally getting signal (still could be luck at this n). **Real signups = 4 (3 ad-driven).** Cumulative spend ≈ $55 → **CPL ≈ $18 at n=3 — closing in on the $15 build line.** Judged only at full test spend. |
| 2026-07-21 | 11 | **🎉 FOURTH AD-DRIVEN SIGNUP — 3 minutes after the third**: [email removed], 4:35 PM ET, utm meta/calf-v1, **sessions=0** (4 of 4), event_id + fbp + fbc. Three leads in 64 minutes. **Real signups = 5 (4 ad-driven).** Cumulative spend ≈ $55–60 → **CPL ≈ $14–15 at n=4 — AT the $15 build line** (still ~⅓ of minimum test spend; hold the verdict). ⚠️ Honest-skeptic note for the record: a sudden same-hour burst of sessions=0 leads is ALSO the classic signature of Meta's optimizer finding a cheap-converting audience pocket of variable quality (real people, but sign-up-for-everything types skew older/lower-intent). Not a reason to doubt these — fbc + distinct real-looking addresses — but lead QUALITY gets tested later (do any return, do snacks, open launch emails). Watch: does the pace hold tomorrow at ~$85 CPM, and does ANY signup ever show sessions ≥ 1. |

| 2026-07-22 | 14 | **🎉🎉🎉 MIDNIGHT BURST — 3 ad signups in 3 minutes** (12:11–12:14 AM ET): [email removed], [email removed], [email removed] — all utm meta/calf-v1, **sessions=0**, event_id+fbp+fbc captured. ⚠️ Correction (2026-07-23, from the Ads Manager placement breakdown): across Jul 16–22 only **1** attributed lead is Audience Network rewarded video (Reels 3, Stories 2) — so at most one of this burst is AN inventory; the "mostly AN" flag applied to *impressions*, not leads. **Real signups = 8 (7 ad-driven).** |
| 2026-07-22 | 15 | **🎉 FIRST PRODUCT-CONVERTED STRANGER**: [email removed], 5:31 PM ET, utm meta/calf-v1, **sessions=1 — did a full snack BEFORE joining** (first ad convert to try the product first; pixel that day: RxViewed 11 = SnackStart 11 = SnackComplete 11, zero leakage). **Real signups = 9 (8 ad-driven).** Cumulative spend ≈ $85–91 → **CPL ≈ $10–11, under the $15 build line at ~½ minimum test spend.** |

| 2026-07-23 | 16 | **🎉 FIFTH+SIXTH AD SIGNUPS — BOTH PRODUCT-CONVERTED**: [email removed], 6:21 PM ET, **sessions=2** (two completed snacks before joining) and [email removed], 8:32 PM ET, **sessions=1** — both meta/calf-v1, event_id+fbp+fbc. On the pacing-quiet day (~$10 spend) → **~$5/lead, cheapest day of the test.** The pattern FLIPPED: the first 7 ad signups were all sessions=0; the last 3 (three in a row) all did snacks first — **product-converted = 3 of 10 ad signups.** Watch: do the remaining quiet days (Fri–Sat) repeat the high-intent pattern? Feeds the AN decision. **Real signups = 11 (10 ad-driven).** Cumulative spend ≈ $95–100 → **CPL ≈ $9–10, under the $15 line at ~⅔ min test spend.** |

| 2026-07-24 | 19 | **🎉🎉🎉 THREE MORE OVERNIGHT/MORNING** (on a pacing-quiet day, ~$13.50 spent by 10 AM → **~$4.51/lead, cheapest of the test**): [email removed] 1:50 AM (sessions=0 at join — **then did 2 snacks immediately**: first real `checkin` row EVER, kind=snack sessions=2 at 1:52 AM, hash b45bfed6…) · [email removed] 4:48 AM (**sessions=1** — product-converted) · [email removed] 7:31 AM (sessions=0; visit checkin e32bc34a… at 7:32). All meta/calf-v1 with event_id+fbp+fbc. **Real signups = 14 (13 ad).** Product-engaged = **5 of 13 ad signups** (four pre-join + one post-join). Cumulative spend ≈ $118 → **CPL ≈ $9.** Quiet-day-high-intent pattern held a second day. Cross-day return: still none — the welcome email (Monday) hunts the first one. |

| 2026-07-24 | 20 | **🎉 SEVENTH-TODAY'S-FOURTH — [email removed], 12:19 PM ET**, meta/calf-v1, sessions=0 at join — then **kind=snack checkin at 12:20 (sessions=1) and another at 12:24 (sessions=2)**: joined on the promise, immediately did two snacks (join-then-snack pattern, second occurrence). **Real signups = 15 (14 ad), product-engaged = 6 of 14.** 4 leads today by lunch on quiet-day spend → CPL today ≈ $4–5. |

*Update from Netlify → Forms → waitlist — **check BOTH the Verified and Spam tabs**; Akismet false-positives submissions with empty fields. Subtract Jonny's 2 tests from any `WAITLIST_COUNT`. When real numbers exist, set `WAITLIST_COUNT` in `../fitness-snack.html` and redeploy (bundled with other changes) to show "Join N others already on the list."*

## What counts as validation

**REVISED 2026-07-23 (Jonny + consultant):** the CPL thresholds below stay as the *spend-efficiency rails*, but the adjudicating evidence is now **engagement** — strangers completing snacks and (once the checkin instrument accumulates) returning. A cheap waitlist of non-users no longer counts as validation; a modest waitlist of repeat users does. Watch: completes/day, completion rate, first real `checkin` rows, and whether any future signup arrives with sessions ≥ 1 like the first product-converted stranger.

**THRESHOLD SET 2026-07-17 (Jonny, before launch — now the supporting rail):** run ~$150–300. Cost per real waitlist signup (excluding Jonny's tests, both Netlify tabs counted) **under ~$15 → build the app. Over ~$30 → stop. In between → iterate creative once and re-test.** Free tier limit: 100 submissions/month — a great problem to have.
