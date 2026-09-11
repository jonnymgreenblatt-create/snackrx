# Take 5 — course spec, draft 1 (2026-07-24)

*The free foundation course for Settle, modeled deliberately on Headspace's Take10 (2012–2013), rebuilt for movement and for our actual audience. Their protocol, our clothes.*

---

## 1. What Take10 actually was (researched from period sources)

**The offer:** ten sessions, ten minutes a day, free, no card, presented as a *programme you complete* — never called a "trial." The paid product ("get Headspace everyday," from £3.74/mo annual) sat beside it as the everyday membership.

**Session anatomy (every day, same skeleton):**
1. **Day intro** — varies daily: a bit of instruction, encouragement, or "common mistakes" pointers. Animations mostly day one + occasional concept videos.
2. **Settle in** — posture, hands in lap, then five deep audible breaths (in nose, out mouth).
3. **Check in** — notice contact points, then a head-to-toe body scan (twice: tension pass, ease pass), notice thoughts and mood without fixing them.
4. **The practice** — attention on the breath, counting 1→10, begin again when the mind wanders.
5. **Let go** — a short stretch of nothing.
6. **Return** — back to the body, 20–30 seconds of open sitting, eyes open.

**Design rules hiding in it:**
- ONE voice, calm, plain words. No jargon, no music, no mysticism.
- Teach-then-do: the day intro teaches ONE idea; the practice embodies it.
- The skeleton never changes; **silence grows** across the days (the training wheels come off gradually).
- Real session length ran 12–15 min despite the "10" — the number is a promise of smallness, not a stopwatch.
- Completion is the upgrade moment: finish the course → continue the Journey (membership).

---

## 2. Take 5 — format decisions (proposed)

- **Five days. One mechanism a day. All seated. Zero sweat, zero floor, zero equipment.** High impact, low effort — built for the audience the ads actually found (older, email-native, desk- or armchair-based).
- **Day length: ~4 minutes real.** Anatomy mirrors Take10:
  1. *Day intro* (Jonny's voice, ~60–90s): teach today's ONE idea in plain words. This is our Andy layer — the same voice that guides the snack teaches the why.
  2. *Settle in* (~15s): sit tall, one slow breath. Same words every day (ritual).
  3. *The practice* (~90s): today's move, guided at snack pace. Slightly less narration each day.
  4. *Return* (~20s): "notice the difference" + one-line tease of tomorrow.
- **"Take 5" naming: approved by Jonny** — the idiom does half the marketing ("take five" = permission to break), reads better than Take10 for us, and 13 years and a different category separate us from their old messaging. Styled **Take·5** to match the house wordmark rhythm if desired.
- **The number means both**: five days, and each day you take five (minutes).
- **Completion → the founding moment.** Finish day 5 → badge + "You've met all five mechanisms. The full app matches them to your moments." → founding membership ask. (Exactly Take10's completion-upgrade mechanic.)

---

## 3. The five days

### Day 1 — The second heart *(soleus raises)*
- **Move:** slow seated heel raises, toes planted, both feet. Already in the app as `calfpump` ("Tall-spine calf pump") — voice assets exist.
- **The teach:** your calf's soleus is nicknamed the second heart. Worked while seated, it pumps pooled blood and burns circulating fuel — University of Houston's 2022 iScience work found sustained seated soleus activity produced dramatic improvements in post-meal blood sugar handling (coverage: [Medical Xpress](https://medicalxpress.com/news/2022-09-muscle-glucose-fat-fuel-metabolism.html), [UH](https://stories.uh.edu/2022-soleus-pushup/index.html)). Steadier blood sugar, steadier mind.
- **Compliance note:** describe the research plainly, never promise medical outcomes; wellness-not-medical framing as everywhere else.
- **New to record:** the ~75s day-intro teach + course connective lines. Practice lines exist.

### Day 2 — Let the shoulders fall *(slow shoulder rolls → the drop)*
- **Move:** existing `rolls` ("Slow shoulder rolls," release gauge) — assets exist; the bloom reel and welcome email already seeded this exact gesture.
- **The teach:** tension lives in the muscles that brace — shoulders, neck, jaw. Rolls move them through their range; every cycle ends with the drop, shoulders away from ears. It looks like a normal desk stretch because it is one.
- **New to record:** day-intro teach only.

### Day 3 — Unclench *(jaw release + masseter massage)*
- **Move (new, tiny):** fingertips to the corner of the jaw, slow small circles on the masseter; then teeth apart, lips closed, tongue resting — 60 seconds of unclenched jaw.
- **The teach:** the jaw is the most-clenched muscle in an anxious day; jaw tension and stress feed each other ([Medical News Today](https://www.medicalnewstoday.com/articles/jaw-tension-anxiety)). Releasing it is a signal down the whole chain. (Evidence here is mechanism + clinical-practice grade, not RCT-grade — the script stays modest: "notice how much you were holding.")
- **New to record:** full day (teach + practice guide). No figure animation needed if the on-screen guide is text+orb pacing; a simple face-touch diagram optional.

### Day 4 — Your hands *(hand + forearm self-massage)*
- **Move (new):** one hand massages the other — palm, the web of the thumb, each finger base — then swap; finish with a forearm squeeze-slide, wrist to elbow.
- **The teach:** touch is data the nervous system trusts. Brief hand massage measurably reduces anxiety in clinical settings — including a 2023 randomized controlled trial (preoperative patients, [PubMed](https://pubmed.ncbi.nlm.nih.gov/37452817/)) and brief-massage studies in postoperative care ([PubMed](https://pubmed.ncbi.nlm.nih.gov/26213879/)). And your hands are the one part of you that's worked every minute of the screen day.
- **New to record:** full day.

### Day 5 — Look up, breathe out *(slow head turns + the long exhale)*
- **Move:** slow head side-to-side — turn to one side on a long exhale, return on the inhale — then finish with two physiological sighs (existing `sigh` breathing assets).
- **The teach:** the day-5 graduation idea: your body has dials — where your eyes and neck point, how long your exhale runs — and you now know how to turn five of them. The long exhale is the body's built-in down-shift.
- **New to record:** day-intro + head-turn pacing lines; sigh lines exist.

---

## 4. Voice rules (the Andy layer, ours)

- Jonny's voice for every word — the course IS the voice; continuity from ad → snack → course → (someday) app.
- Teach-then-do, one idea per day, plain words. Exclamation rule and settled-scale rule apply. No "anxiety" outside the standing disclaimer pattern; no EMDR-family words; no medical promises.
- Same opening ritual line every day; narration thins slightly by day 5 (the Take10 silence-grows rule, scaled to minutes).
- Recording estimate: ~20–28 new lines total (5 day-intros ~75s each + 2 new practices fully guided + connective/close lines). One recording session in voice-recorder-v3.

## 5. Where it lives + how it ships

- **UI:** a "Take·5" card on Today ("Day 2 of 5 · Let the shoulders fall"), day state in localStorage alongside streaks. Sequential unlock: next day opens the following calendar day (this is the retention engine — day 2 exists only tomorrow). Open question below.
- **Email is the twin:** the welcome-email series becomes the course drip — day links via `/take5` style redirects with utm_content per day. Monday's email stays as designed; Take·5 drip is the v2 sequence.
- **Founding copy hook:** completion screen carries the founding-membership ask (first month on us, founding price locked).
- **Build sequencing:** its own build round AFTER the current test + email read out — likely the first thing built WITH the validation verdict (it is, in effect, v1 of the full app's onboarding). Not in Monday's batch.

## 6. Open questions for Jonny

1. Practice length: strict 60s snack-DNA per practice, or let days 3–4 run ~90s (massage wants a little longer)?
2. Day-gating: hard calendar gate (stronger retention, mild frustration) vs. sequential-but-bingeable (Headspace's way)? Recommend: bingeable days 1–2, calendar-gated 3–5 — momentum first, then the habit hook.
3. Figure animations for the two new moves (jaw, hands) — build the seated-rig animations, or ship text+orb pacing v1?
4. Does Take·5 live on the current free site pre-verdict as the iteration-round lever if CPL lands in the $15–30 zone? (It's the strongest "iterate creative once" candidate we have.)
