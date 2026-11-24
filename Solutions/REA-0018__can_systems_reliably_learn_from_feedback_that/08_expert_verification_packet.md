# Expert verification packet - degraded feedback and learning

**What this is:** a claim in a form a machine-learning researcher, alignment researcher or cognitive scientist can check. Mode, derivation and refuters are stated before the conclusion so a reader knows what to look for and what would settle it.

**Mode: `specified` on the per-domain claims, `general` on the structural shape, `gap` on a numerical reliability guarantee, not `grounded`.** No benchmark result is claimed. This is a shape and a route, not a result.

**Status:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.

## 1. The claim, in one paragraph

"Feedback" is an observation channel, not the ground that settles a question. Sparse, inconsistent and biased feedback are three conditions with different failure mechanisms, not three settings of one noise dial. Sparse feedback fails when the live slot is averaged away, and is unreachable where no instrument registers at all. Inconsistent feedback is a union of overlapping conditions to split and range against a non-updating ground, not variance to smooth. Biased feedback is the channel updating on the frame that reads it, which produces coherent drift invisible from inside. A system can be said to learn reliably from degraded feedback only if five conditions hold at the named slot: per-slot residual with live mass, a ground that does not update on the frame, two frames ranging against it separately, a channel still reachable, and an operator able to refuse a held term that keeps being wrong. No numerical reliability guarantee is returned; that is a declared `gap`, with five written refuters.

## 2. Three checkable sub-claims

### C1 - framework-internal plus empirical; checkable against Fig 1 and against your own noise-robustness results

- **Statement:** sparsity is a per-slot support problem; averaging destroys the live signal; a global score near zero with one live slot is a legal state.
- **Source, verbatim:** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Also Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." and Fig 1 :13 "a global R near zero with one live slot residual is a legal state".
- **What to check:** in your own controlled noisy-label or sparse-reward setting, does a per-slot or per-instance diagnostic locate instances that a global average hides? Liu 2021 (ICML, PMLR 139) reports "disparate impacts of noisy labels for sample instances with different representation frequencies" and that "lower-frequency instances do not" improve under standard remedies. Devidze et al. 2022 (NeurIPS 35) report that prior shaping "either require[s] external domain knowledge or fail[s] in environments with extremely sparse rewards".
- **Refuter:** a controlled run in which the live slot is still found and settled after its residual has been averaged away across all slots, with the averaging verified. If that holds, Fig 1 :22 is broken as applied here.

### C2 - union and anchor; checkable against Fig 9, Fig 2 and preference-data practice

- **Statement:** inconsistent feedback is a union of overlapping conditions, and agreement between frames sharing one evidence pool cannot settle a verdict. Split first, then range each split against a ground that does not update.
- **Source, verbatim:** Fig 9 :4-5 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." Also Fig 2 :45 "Frames range against the ground. They do not negotiate with it." and Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool".
- **What to check:** is a single "noise rate" sufficient to describe your disagreement data, or do task underspecification, response style and rater state generate distinct conditions? Zhang et al. 2025 (ICML, PMLR 267) "challenge a standard assumption in reward modeling methods that annotator disagreements can be attributed to simple noise" and find "the majority of disagreements are due to factors such as task underspecification or response style". Ghafouri et al. 2026 (ICML, PMLR 306) find "inconsistency is systematic and directionally biased" and that filtering high-inconsistency annotators "flips majority harm classifications for 18.6% of prompts".
- **Refuter:** a case where disagreement is a single symmetric noise process around one latent value, with two frames shown to draw on disjoint evidence, and a noise-aware aggregator recovering that value with a calibrated interval. That breaks the union reading for that case.

### C3 - bias and channel; checkable against Fig 2, Fig 10 and an active-sampling design

- **Statement:** biased feedback is the anchor updating on the frame. The failure is structural, not a variance to estimate, and the ordinary symptom is coherent drift nobody notices.
- **Source, verbatim:** Fig 2 :33 "The anchor must not update." Also Fig 2 :34 "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices." and Fig 10 :24 "the ground does not decay, the channel does".
- **What to check:** does the observation depend on the frame's own belief after controlling for the slot? Kaanders et al. 2022 (eLife, PMC9038198) show that "the higher the confidence in the initial choice, the more biased information sampling becomes" and that "The effect disappears in a fixed sampling condition where presentation of evidence is controlled by the experimenter." The fixed-presentation condition is the discriminator. Hosking et al. 2024 (ICLR) find "the assertiveness of an output skews the perceived rate of factuality errors".
- **Refuter:** a channel demonstrably dependent on the frame's belief that nevertheless settles a false held term at a ground outside the frame, with no import from that ground. That breaks Fig 2 :34 as applied here.

## 3. What is explicitly not claimed

- Not a reliability percentage, accuracy bound, or confidence interval over systems. No figure line returns one; that is the declared `gap` (Fig 9 :32, Fig 13 :134).
- Not that degraded feedback can never be learned from. The verdicts are conditional per condition and per slot.
- Not that human feedback is worthless. Fig 2 :36 makes an anchor "legitimate when the question is constitutively about it"; when the question is about people, human judgment is the right anchor, and on other questions it is an instrument with blind axes (Fig 2 :37-38).
- Not that a named algorithm is best. A robust loss or annotator-reliability estimator is a binding from the machine-learning frame and needs provenance (Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them").
- Not a theory of everything, and not a claim that a room of agreeing experts settles anything (Fig 2 :35).
- Not `grounded`. No measurement was taken by this agent.

## 4. Provenance

- Question: `Questions/reasoning.txt` line 23, question 18; ID REA-0018; section "2. Learning and generalization".
- Figure text extracted verbatim into `FRAMEWORK/reference/03-FIGURES_TEXT.md`; every quote above checked against it on 2026-11-23.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, read 2026-11-23. Eight-step loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, read 2026-11-23.
- Four framework essays opened directly on 2026-11-23; four carried from the completed exemplar's mapping and marked as such in `05_what_shape_means.md`.
- Nine substantive world sources opened on 2026-11-23, spanning noisy-label learning, reinforcement learning, alignment and measurement, preference aggregation, and human cognition. Author, venue, year, accessed date, quote and overlap are in `10_source_ledger.csv`.
- Pre-registered refuter with five failure conditions: `01_figure_grounded_audit.md` section 4, written before the conclusion.
- This packet compiled 2026-11-23.

## 5. What would settle it

1. A per-slot instrument that shows live mass under a sparse channel and loses it under averaging.
2. A non-updating ground at a named slot, with two low-overlap frames ranging against it separately.
3. A fixed-presentation versus active-sampling comparison showing whether the observation depends on the frame's belief.
4. A persisted, non-trending residual on a held term and a check that the system carries a refusal for it.
5. Any one of the five refuters in section 2 firing, which withdraws the sub-claim it governs.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19 and :22, Fig 2 :33-35 and :40, Fig 9 :4-5, Fig 10 :24 (six short passages).
2. For C1, name one instance-level diagnostic from your own work that a global average hides.
3. For C2, say whether your disagreement data is one noise process or several conditions, and what ground you would range each against.
4. For C3, name a fixed-presentation control that would separate belief-dependent from belief-independent feedback.
5. Send the refutation. A failure is more useful than an endorsement. If you would rather not engage, no reply is needed.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
