# UGC Ad Kit — "Re-enactment" testimonial creative

*Created 2026-07-17. AI-avatar UGC-style overview of Settle, built as a disclosed re-enactment of real user feedback. Companion to the calf/drums hero ads in `ad-video-master.html`. Three outputs from one shoot: 30s Meta ad, 60s organic cut (TikTok/Reels), and a casual written overview.*

---

## The format, in one line

A casual, selfie-style AI person tells the camera how they used Settle, over real screen recordings of the app, with a small on-screen line: **"Re-enactment of real user feedback."**

## Why this is compliant (the rails)

1. **First person only.** The speaker describes *her own* moment ("my mind would not stop"), never the viewer's ("struggling with anxiety?"). First-person testimonial is structurally safer than second-person copy under Meta's personal-attributes rule.
2. **Disclosed dramatization.** The re-enactment line stays on screen during every testimonial beat (small, bottom third). Dramatized testimonials are a legal, decades-old ad format; *undisclosed* synthetic people are what get flagged. If Meta's publish flow offers an "AI-generated content" self-disclosure toggle, turn it on.
3. **Every claim maps to something a real person actually said.** Fill in the claim map below before running the ad and keep it in this folder. If a line has no real source, soften it or cut it. (FTC endorsement rule: a re-enactment must reflect a genuine experience.)
4. **Measurement language follows the settled-scale rule.** The speaker says "it told me I settled three points," not "my anxiety dropped." The word "anxiety" stays out of all overlays and primary text.
5. House style: no em-dashes in on-screen copy, exclamation points only on celebration lines, sell the moment never the condition.

### Claim map (fill in before launch)

| Script line | Real source | Who / when |
|---|---|---|
| "My mind would not stop, so I tried this" | e.g. tester describing the 3pm spiral | ______ |
| "Nobody around me noticed anything" | invisible-mode feedback | ______ |
| "I settled three points" | a real logged 7 → 4 (or swap to that person's real delta) | ______ |
| "I've done it a few times now" | An early user signed up with sessions=2 | [email removed], 2026-07-16 |

---

## THE 30-SECOND META CUT (9:16)

Structure mirrors the hero ad's logic: hook, what it is, demo, result, CTA. Avatar on camera roughly 40% of the time; the app carries the middle.

| Time | Visual | VO (avatar) | Caption/overlay |
|---|---|---|---|
| 0.0–3.0 | Avatar, selfie framing, desk behind her | "My mind would not stop yesterday. So I tried this weird little website." | Word-by-word pop captions, brand style. Small: *Re-enactment of real user feedback* |
| 3.0–9.0 | Avatar 1.5s, then cut to screen recording: Today tab, dog greeter, tapping a mood on "How are you arriving?" | "It asks where your head's at, then gives you sixty seconds of movement matched to it. No app. No signup." | Captions continue. Corner wordmark "Settle." from 3s on |
| 9.0–19.0 | Full-screen app b-roll: prescription screen beat, then the orange character doing calf raises during the follow-along. Avatar PIP bottom corner (optional, muted, nodding/doing calf raises seated) | "Mine was calf raises under my desk. Nobody around me noticed anything. And there's a real guy's voice counting with you the whole time." | Let ~1s of Jonny's actual app voice peek through under the VO at 13–14s (the continuity move: the ad demos the real product sound) |
| 19.0–25.0 | Screen recording: post-log slider drag, then the results screen. Confetti if a badge fires | "Then it asks where your head's at again. It told me I settled three points. In one minute." | Results screen IS the caption here; keep overlays minimal |
| 25.0–30.0 | End card: waving dog + "Settle." wordmark + "movement snacks for your mind" + link pill | "It's free. It's called Settle. Sixty seconds. That's it." | *settlemoves.com* · small re-enactment line returns |

**Alternate hooks to A/B (swap beat 1 only):**

- A (lead): "My mind would not stop yesterday. So I tried this weird little website."
- B: "I un-wired my 3pm brain in one minute and nobody at my desk noticed."
- C: "This is the only thing I have tried that fits inside a meeting."

**Primary text options (first person or product-voice, never viewer's state):**

- "Sixty seconds of movement, matched to how you feel. Free, in your browser, no signup."
- "One job for your mind. Sixty seconds. Nobody will notice."

**UTMs:** `https://settlemoves.com/?utm_source=meta&utm_content=ugc-avatar-calf` (bump the suffix per hook variant: `ugc-avatar-hookB`, etc. The waitlist form already records them.)

---

## THE 60-SECOND ORGANIC CUT (TikTok / Reels / sharing)

Same footage plus extras; looser and chattier. Additions over the 30s cut:

- After the hook, 4s more on the mood picker: "You literally just tell it how you're arriving. Racing, wired, low, tense. It picks different moves for different heads. Racing minds get counting moves, on purpose."
- Show the +/- dose stepper for 2s: "It even learns your dose. Second time I opened it, it remembered me."
- After results: 3s on the You tab (streak chip + a badge): "There are streaks and badges, which absolutely should not work on me, and yet."  *(exclamation-free, celebration is allowed to be wry)*
- CTA: "It's sixty seconds and it's free. Settle. Link in bio." End card same as Meta cut.
- Keep the re-enactment disclosure in the first testimonial beat and the caption text of the post itself ("re-enactment of real user feedback").

---

## GENERATING THE AVATAR (HeyGen)

You already have a HeyGen path in this folder (`voicepack-builder.html` / `generate-voice-pack.mjs`); avatar video works from the same account via the web app. What matters:

1. **Avatar choice**: pick from the "UGC-style" avatar category, not studio presenters. Look for: seated, casual clothes, slightly imperfect framing, office or home-desk background. She should look like she filmed it herself between meetings.
2. **Voice**: a HeyGen stock voice matched to the avatar. NOT your voice. Your voice is the app's voice; the contrast is the point, and the "real guy's voice counting with you" line lands because the viewer then hears it.
3. **Delivery**: paste one beat at a time (HeyGen paces long paragraphs flatly). Target ~145–155 wpm, conversational. If the tool supports it, add a small pause after "yesterday." and after "That's it."
4. **Format**: generate at 9:16, 1080×1920, captions OFF in HeyGen (we caption in CapCut in brand style so all creatives match).
5. Generate each hook variant as its own short clip so A/B swaps are one clip replacement in CapCut.
6. **Do not** let any AI tool generate footage of the app itself. The app is always the real screen recording (what they see is literally what they get, same rule as the hero ad).

---

## B-ROLL CAPTURE LIST (real app, your phone)

Screen-record on your iPhone at settlemoves.com. Use a **private/incognito tab or cleared site data** so the first-run dog greeter appears. Do Not Disturb on. One continuous pass gives everything; trim in CapCut.

1. Today tab landing: dog greeter bubble visible (2–3s hold)
2. Tap a mood on "How are you arriving?" (racing or wired)
3. Prescription screen: hold 2s (count-cue pill visible if it is a counted move)
4. Begin → ~12s of the follow-along with the orange character doing calf raises, sound ON (we need Jonny's counting voice in the recording)
5. Finish → drag the post-log slider deliberately (slow enough to read)
6. Results screen: hold through "You settled N points" and any confetti
7. You tab: streak chip + badges (3s, for the organic cut)
8. Optional: the floating "✨ Want more?" pill and popup (probably keep OUT of the ad; the funnel does that job on-site)

⚠️ Do the b-roll session AS A FRESH USER but make sure the run you record shows a real settle delta on the results screen. If your recorded run happens to show "same," record another pass; we are not faking a screen, just choosing which real take to use.

---

## CAPCUT ASSEMBLY

1. Import: avatar clips + screen recording + music (calm lofi, same family as the hero ad; lift slightly at the follow-along, duck −12 dB under all VO).
2. Lay screen recording as the base track; avatar clips cut in per the timeline above; avatar PIP during the follow-along is optional (skip if it crowds the character).
3. Captions: manual, word-by-word pops matching the hero ad's style. Auto-captions off.
4. Disclosure text: lower third, ~60% white, during beats 1 and 5 (and beat 3 if the avatar is on screen).
5. Let the app's real audio through at 13–14s (one count from Jonny's voice), duck the avatar VO under it for that beat.
6. Export 1080×1920, under 30s for the Meta cut. The 60s cut exports separately for organic.

---

## WRITTEN OVERVIEW (same voice, for sending to people)

> Okay so: Settle. It's a free website (settlemoves.com, nothing to install) that gives your mind one job for sixty seconds. You tell it how you're arriving, racing or wired or low or tense, and it hands you a tiny movement prescription matched to that, with a real human voice counting you through it. Half the moves are invisible, like calf raises under a desk, so you can do them in a meeting and nobody notices. You rate where your head's at before and after, and it shows you how far you settled. It learns your dose over time. Sixty seconds, matched to how you feel, anywhere. That's the whole thing.

---

## Meta setup notes for this creative

- Runs in the same validation campaign as the hero ads (Traffic objective, $10–20/day, no pixel). It is a third creative angle: hero = product demo, static = one-liner, UGC = social proof shape.
- Advantage+ enhancements: same rules as the vault. AI text variations get reviewed against the personal-attributes rule; NO AI background generation on any frame containing the dog or the app.
- Review every auto-generated text variant for second-person mental-state language before approving.
- If the ad is rejected: the likely flags are the synthetic person or perceived health claims. Appeal with the disclosure framing; do not re-upload variants to dodge review (same family as the one-page rule).

## Open items

- [ ] Fill in the claim map (who actually said what)
- [ ] Decide the avatar (screenshot 2–3 HeyGen candidates into chat; warm > polished)
- [ ] Capture the b-roll pass with sound on
- [ ] Generate hook A first; B and C only if A gets traction
