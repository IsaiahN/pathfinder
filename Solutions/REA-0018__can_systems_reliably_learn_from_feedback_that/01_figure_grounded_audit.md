# Figure-grounded audit: can systems reliably learn from degraded feedback?

**Mode of this document: `specified` on the per-domain findings, `general` on the structural shape, `gap` on the numerical reliability guarantee. It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."**

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*, opened 2026-11-23: LLM output simulates an approximate answer, but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** The local canonical figure extract `FRAMEWORK/reference/03-FIGURES_TEXT.md` (all `Fig N :line` citations), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, the four essays opened directly on 2026-11-23 recorded in `10_source_ledger.csv`, and the nine substantive world sources in that ledger. No figure quote is taken from a summary.

---

## 0. The residual, stated in effect terms

The question is about *feedback*, and in the framework feedback is the observation `o'`, not the ground. The Symbols table defines the residual as "The gap between prediction and observation. The central quantity: everything the system does is driven by it" (Symbols :36-38), and Fig 1 :11 indexes it by object slot.

So the residual in effect terms is:

> `R_s = |Γ(b,a) − o'_s|` for each slot `s`, where `Γ` is what the library predicts, `b` is the belief (own history mixed with inherited prior by weighting `w`), `a` is the action, and `o'_s` is what the feedback channel returns for that slot.

The question "can systems reliably learn from feedback that is sparse, inconsistent, or biased?" becomes: **can `R_s` still drive the loop to settlement when the channel returning `o'_s` is thin, mutually contradictory, or dependent on `b` itself?**

Two things follow immediately and are kept separate.

1. **Feedback is a channel, not an anchor.** Fig 10 :24: "the ground does not decay, the channel does." A degraded channel is a channel failure; it is only a ground failure if the thing that would settle the question has also been removed. Conflating the two is the first error to avoid.
2. **"Reliably" is not a quantity any figure defines.** The word cannot be bound as a term and left to accrue a residual. The remedy in `THE_FORMULA.md` "Direction" is to write down what an answer would look like and bind it as an ordinary term. Here the sought-for shape is stated explicitly in section 4 before the findings, so it can be refused by the same test as everything else.

**The shape to be tested (bound before the run).** A system can be said to learn reliably from degraded feedback only if all of the following hold at the slot where learning is claimed:

- S1. `R` stays indexed per slot and some slot carries positive live mass (Fig 1 :19, :18).
- S2. There is a ground that does not move when the frame pushes on it (Fig 2 :29-30, :33).
- S3. Two frames range against that ground separately, with low overlap of evidence (Fig 2 :31-32, :45-46).
- S4. The channel from frame to ground remains reachable (Fig 10 :24-28).
- S5. A held term that persistently fails can be refused, not merely accumulated over (Fig 5 :53; Operators :58).

If any of S1-S5 fails, the honest report is a named failure class, not a smaller accuracy number. If a sixth thing is demanded, a numerical bound on reliability across all systems, no figure line governs it and the report is `gap` (Fig 9 :32; Fig 13 :134).

---

## 1. Domain census, before choosing any figure line

Describe `R` by arity, symmetry and scale, then one line per domain with actors, currency and anchor. A domain with no nameable anchor is not a domain yet.

**R by arity / symmetry / scale.**

- **Arity:** three conditions, sparse, inconsistent, biased. This is a **union compound**, not one problem with three intensities and not a partition (Fig 9 :54-57). A single lever aimed at "noise" clears the region where only one condition holds and leaves the intersections standing.
- **Symmetry:** the step from prediction to observation is ordered (`Γ(b,a)` then `o'`); it is not a symmetric join. "Reliably" is a threshold on a quantity the framework does not define, so it is a comparison the system cannot make from inside (Fig 12 :87; Operators :51). Bias is not symmetric either: it is a relation between the observation and the belief that produced the prediction.
- **Scale:** the main loop closes at one scale (formula steps 1-5); the cross-scale move (step 6) and the room chain (Fig 7) introduce two more places a degraded channel can hide.

**One line per domain.**

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1. Signal availability (sparse)** | object slots `s`, live mass `R⁺_s`, the curiosity drive, any instrument already returning a reading | positive residual mass per slot, not global `R`, not coverage | an instrument already returning something at some resolution (Fig 6 :34-35) | support question; partition of slots by live/dead mass |
| **D2. Conflicting readings (inconsistent)** | two or more frames A and B, a hidden shared source, the chain of rooms | agreement versus residual; these are different quantities | a ground pinned outside both frames that does not update (Fig 2 :24-27) | union compound; disagreements that do not shrink under effort are split, not averaged (Fig 9 :4-5) |
| **D3. Self-referential feedback (biased)** | belief `b`, weighting `w`, private history, inherited prior, the seat with a stake | valence of the observation relative to `R`; interest in the reading | a ground that does not move when pushed (Fig 2 :29-30); absent that, **no nameable anchor yet** | mirror-collapse question; if the channel updates on the frame it is not a usable feedback domain until an anchor is installed |
| **D4. Verification / outreach** | outside frame, ground maintainer, expert reader | residuals and provenance, not agreement | the ground, never the votes (Fig 2 :45, :46) | seat arrangement; all seats in this simulated run share one evidence pool |

**Partition or union.** D1 is a partition of slots (some carry mass, some do not). D2 and D3 are unions of overlapping conditions: a channel can be both sparse and biased, and an inconsistent reading can be biased toward one of the two frames. D1, D2 and D3 together form a union, so the verdicts are kept per domain and never averaged (Fig 9 :54-58; Fig 1 :19).

**No anchor means not yet a domain.** D3 is the important case. If feedback depends on what the system already believes, and there is nothing outside the system that can settle the slot, then D3 has no anchor and is not a domain in which learning can be assessed. The honest output is `unreachable` with a named failure class, not a smaller confidence interval. Fig 13 :134: "Unreachable is a verdict here, not a silence."

**Order by dependency (Fig 3).** Describe the residual before choosing a frame (Fig 9 :27-28); establish per-slot support before attempting a mint (Fig 5 :29); refuse a persistently false held term before minting a replacement (formula step 2); settle each term against the non-updating ground before composing over it (Fig 2 :33; Fig 5 :69-70); only then promote a method across the scale membrane with a measured round-trip gap (Fig 4 :30). The likely break is between "having terms for what the feedback affords" and "being able to say what would count as progress from it" (Fig 3 :25-27), because "reliably" is exactly a missing objective term.

---

## 2. Figure census

| figure | bearing on degraded feedback | verdict used |
|---|---|---|
| 1 The Agent | residual per slot; global near-zero with one live slot is legal; frame-internal metrics disqualified | governs D1 (sparse) and the refusal of "reliably" as a self-score |
| 2 The Ground | anchor must not update; independence is low shared evidence; agreement worthless on shared pool | governs D2 and D3 decisively |
| 3 Dependency Chain | a step whose input never arrives cannot be diagnosed; the middle link has no instrument | governs the placement of the break |
| 4 The Membrane | methods cross up, recordings do not; round trip must be measured | governs what may be offered as a reusable method |
| 5 Mint Pipeline | three guards as a product; persistent flat residual points the refusal; settling not sufficient | governs the refusal condition S5 |
| 6 Closure / Reachability | import moves the wall; proto-instrument must already exist; searchers on same evidence are one searcher | governs the sparse/no-signal limit and the independence debit |
| 7 Room Chain | agreement compounds, evidence does not; next room must differ and match the residual | governs D2 across rooms |
| 8 Union Surplus | no search adds an atom; residual first, frame second; underivable versus unreachable-at-budget | governs the union reading and the `gap` |
| 9 Leave / Arrive | disagreements that do not shrink are several questions; filters are not witnesses; unbundle a union | governs the split and the refusal of a single verdict |
| 10 Ground Maintainer | ground does not decay, channel does; interest in the reading disqualifying | governs D3 and S4 |
| 11 The Habitat | capability is agent-and-habitat; a harness proves wiring not capability; valence relative to residual | governs benchmark performance as a substituted habitat |
| 12 The Bond | arrangement carries information; isomer, catalyst, two currencies that do not add | governs the comparison of two noise regimes in `06` |
| 13 Minimum Viable Set | set closed, arrangements not; `unreachable` is a verdict; shape not a name | governs the final `gap` and the honest stop |
| Operators table | `¬` is a refutation, not absence; a vocabulary without it can only accumulate | governs S5 |
| Symbols table | `R` is per slot; `w` is learnable from outcomes; frames diverge by history and `w` | governs the bias mechanism in D3 |

Strained readings are named in section 6, not smoothed over.

---

## 3. Findings

### F1 - "Reliably" is a preference, not a term, until it is bound (framework-internal, single-source)

Fig 1 :23: "The ground enters as the only metric." Fig 1 :24-27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 9 :32: "you get a kind of thing, never the answer itself."

A system asked to certify its own reliability from its own feedback is scoring itself with a quantity it also produces. The Figures README (read locally, 2026-11-23) states the limit as "what a missing thing would have to look like (a shape, not a name)". `THE_FORMULA.md` "Direction" says the loop "cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds", and gives the discipline: make the sought-for shape an ordinary term.

**Binding used here:** S1 to S5 in section 0 are that ordinary term. They are checkable from outside, one by one, and each has a refuter below.

**Refuter:** if a checker can show that S1 to S5 are themselves frame-internal (for example that "non-updating anchor" is only declared by the frame being checked), the binding fails and no reliability claim survives.

### F2 - Sparse feedback is a per-slot support problem, not a coverage problem (triangulated: Fig 1 + Fig 5 + Fig 6)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :13: "a global R near zero with one live slot residual is a legal state". Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

The mint pipeline's support guard is `|R⁺_s| > 0 for some s` before the search (`THE_FORMULA.md` step 3; Fig 1 :18 "support evaluated per slot"). Sparse feedback satisfies this guard if even one slot carries positive mass. It fails the guard if no slot ever registers, and in that case the instrument cannot be built from a description: Fig 6 :34-35 says "the search for a proto-instrument is a search for one that is already there." Fig 5 :41: "Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."

This reverses the ordinary intuition. Adding more samples to a sparse channel can make learning *worse* if it is done by averaging, because averaging is exactly how the live slot is hidden. Fig 5 :46: "When nothing is scoring, the drive manufactures a gradient." But Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."

The world literature agrees at the mechanism shape, not at the framework's vocabulary. Liu 2021 (ICML, PMLR 139) found "disparate impacts of noisy labels for sample instances with different representation frequencies" and that "higher-frequency instances often enjoy a high probability of an improvement by applying these solutions, lower-frequency instances do not." Devidze, Kamalaruban and Singla 2022 (NeurIPS 35) report that existing reward-shaping formulations "either require external domain knowledge or fail in environments with extremely sparse rewards", and that self-supervised shaping can help when a signal is present.

**Verdict D1: `specified`, learnable when some slot has live mass and no averaging hides it; `unreachable` where nothing anywhere registers.**

**Refuter:** a controlled run in which a sparse channel with exactly one live slot is averaged across all slots and the system still locates and settles that slot. That would break Fig 1 :22 as applied here.

### F3 - Inconsistent feedback is a union of conditions to split, not noise to smooth (triangulated: Fig 9 + Fig 2 + Fig 8)

Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55-57: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

A preference-aggregation pipeline typically treats annotator disagreement as noise around one latent label. Zhang et al. 2025 (ICML, PMLR 267) explicitly challenge this: "Our findings challenge a standard assumption in reward modeling methods that annotator disagreements can be attributed to simple noise", and find "the majority of disagreements are due to factors such as task underspecification or response style." In their datasets "over 75% of disagreements are influenced by factors such as response complexity, verbosity, or underspecified prompts." That is the figure's union signature: several well-formed questions were compressed into one scalar.

When two frames disagree, Fig 2 :45 applies: "Frames range against the ground. They do not negotiate with it." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 2 :44 names the arithmetic: "The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning." Averaging correlated readings increases the apparent sample size without increasing evidence.

Ghafouri et al. 2026 (ICML, PMLR 306) sharpen the point: "measurement validity is logically prior to preference aggregation", and in two RLHF datasets "inconsistency is systematic and directionally biased", so that "much of the current RLHF practice models noise as signal and elicitation artifacts as human values." Hosking, Blunsom and Bartolo 2024 (ICLR) find "the assertiveness of an output skews the perceived rate of factuality errors, indicating that human annotations are not a fully reliable evaluation metric or training objective." These are world corroborations of the same shape: before aggregating, ask what the readings are readings of.

Huang et al. 2026 (ICML, PMLR 306) implement the triangulating move: their RGPO "estimates annotator reliability and infers latent ground truth labels from noisy human feedback". Fig 8 :45: "Two frames together reach what neither reaches alone." Fig 8 :53: "Residual first, frame second." Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" - so the reliability estimate is a binding with provenance, not a derivation of truth from more votes.

**Verdict D2: `specified`, triangulated (Fig 9 split plus Fig 2 anchor plus Fig 8 union). Split before smoothing; range each split against a non-updating ground; never average the verdicts.**

**Refuter:** a case where all disagreement truly is a single symmetric noise process around one latent value and a noise-aware aggregator recovers that value with a calibrated interval, with the two frames shown to draw on disjoint evidence. That would break the union reading for that case.

### F4 - Biased feedback is the anchor updating on the frame (triangulated: Fig 2 + Fig 10 + Symbols table + cognition)

Fig 2 :33: "The anchor must not update." Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices." Fig 2 :47: "A ground listed as one of the parties has already become a frame. Which is panel 1, arrived at by a different route."

Bias is not a variance to be divided out. It is a structural fact: the channel returning `o'` is a function of `b`. The Symbols table :24-26 makes the mechanism explicit: "w is learnable from the outcomes of past weightings. Two frames with identical architecture diverge because their histories and their w diverge." Belief `b` is "Formed from its own history and from what it inherited, mixed by w" (Symbols :20-21). A channel that reads `b` is therefore a mirror with a different name (Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you.").

Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying". Fig 10 :60: "Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged." Fig 10 :47: "a convention that decides an outcome has stopped being one." A reward model trained on the preferences it is later used to grade is a convention that has become a verdict.

Kaanders et al. 2022 (eLife, PMC9038198) provide the genuinely low-overlap cognitive mechanism: "the higher the confidence in the initial choice, the more biased information sampling becomes", participants are "more likely to stick with their original choice, even when incorrect", and critically "The effect disappears in a fixed sampling condition where presentation of evidence is controlled by the experimenter." That last clause matters: the bias lives in *active sampling*, in the frame choosing its own evidence, not in the evidence itself. Wikipedia's "Confirmation bias" entry (opened 2026-11-23) gives the matching one-sided-test result from Wason and the persistence of discredited beliefs.

Note an honest constraint from Fig 2 :36-38: "An anchor is legitimate when the question is constitutively about it" and "instruments can be wrong on axes they do not measure." If the question is "is this answer good for a person", human judgment is the right anchor. If it is "is this code correct", human judgment is only an instrument and can be wrong on axes it does not measure. So the remedy for bias is not "remove humans" but "install the anchor the question is constitutively about, and state which axes the instrument cannot see."

**Verdict D3: `specified` on the failure mechanism, `gap` on installing a specific anchor for a specific system. If no anchor outside the frame can be named, D3 has no domain yet.**

**Refuter:** a run in which a channel demonstrably dependent on `b` still corrects a false term held by the frame at a non-updating ground, with no import from outside the frame. That would break Fig 2 :34 as applied here.

### F5 - The ground does not decay, the channel does (single-source on the figure, world-corroborated)

Fig 10 :24: "the ground does not decay, the channel does." Fig 10 :25-26 lists the failure modes: "stale percepts, dropped transients, saturated metrics, pooled readings". Fig 10 :27-28: "the output is not a verdict, it is you have lost touch".

This separates two claims that are usually merged. "The system has stopped learning" may mean the ground moved, or it may mean the channel decayed. The figures say the second is the ordinary case. The practical test is not "is the model still improving on its metric" but "is the channel to the non-updating ground still reachable". A saturated metric is not a settled question.

The same distinction appears in the world sources under a different vocabulary: Hosking et al. 2024 conclude that "a pleasing response is not necessarily a useful one", and Ghafouri et al. 2026 show that filtering inconsistent annotators "flips majority harm classifications for 18.6% of prompts and shifts mean ratings by over 13 points on a 100-point scale." The metric moved; it did not thereby approach a ground.

**Verdict D4: `specified`. Reliability is a channel-maintenance property, and a claim of lost touch is not a verdict about the world.**

**Refuter:** a case where a channel is demonstrably saturated or pooled and the system's reading still tracks a non-updating ground on an axis the instrument is known to measure. That would break Fig 10 :24-28 as applied here.

### F6 - Verdicts stay per slot and per domain; averaging is the disqualifying move (triangulated: Fig 1 + Fig 9)

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." A reliability score computed over all slots is a filter for the budget (which system to try further), not a witness for the claim (whether this slot learned).

The three domains have different currencies and different anchors, so they cannot be added. Sparse is measured in live mass per slot; inconsistent is measured in agreement versus residual against a pinned ground; biased is measured in the dependence of the reading on `b`. Fig 12 :125-127: "A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds." Here there are three currencies, and the same prohibition holds a fortiori.

**Verdict: structural, `general`.** No global reliability number is returned.

### F7 - A benchmark is a substituted habitat, not a demonstration of reliability (triangulated: Fig 11 + Fig 4)

Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

A system that learns well under clean, dense, low-disagreement labels has not thereby shown it can learn under sparse, inconsistent or biased feedback: the habitat was substituted. Fig 11 :66-69 names the two silent failures: "what you failed to reproduce, and what you brought with you." In a harness built for the clean case, what failed to reproduce is the degraded channel; what was brought with you is the assumption that feedback equals ground.

Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." A result on one benchmark is one occasion; the method is what may cross.

**Verdict D4: `specified`.** Benchmark success is evidence of wiring in a substituted habitat and is not a reliability verdict for the deployed habitat.

### F8 - A false held term needs refusal, not more data (triangulated: Fig 5 + Operators + Fig 1)

Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so". Fig 5 :58-60: "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign." Operators :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate."

Biased feedback often presents as a term that keeps being wrong and is fed more data anyway. The figures route this to REFUTED, not NOVEL. The shrinking test selects the target: the slot whose residual persists and does not trend down. The remedy is a refusal stamped with provenance, and the reach falls because something was added (Fig 6 :42-43), not because anything was deleted.

**Verdict S5: `specified`, structural.**

**Refuter:** a system with no negation operator that nevertheless correctly withdraws a persistently false term at a non-updating ground, with the record showing the withdrawal. That would break the Operators :58 claim as applied to learning systems.

### F9 - Independence is the parameter, bought in proportion to the cost of being wrong (triangulated: Fig 2 + Fig 8)

Fig 2 :31-32: "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are." Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Fig 8 :48: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus." Fig 6 :53: "searchers drawing on the same evidence are one searcher wearing many names."

For inconsistent feedback, more annotators from the same pool buy more spelling, not more search. The world sources agree about the mechanism: Zhang et al. 2025 report quadratic weighted Cohen's kappa of 0.268 and 0.389 in two preference datasets, and show that standard reward models "predict decisive preference toward a single option, even when annotators preferences diverge." Huang et al. 2026 reduce the problem by estimating reliability per annotator, which is a step toward independent readings.

**Verdict: `general` structural, with a `specified` cost rule.** Independence is one quantity read twice (Fig 8 :47): it decides both the worth of agreement and the size of the union surplus.

### F10 - Underivable and unreachable-at-budget are different facts with different instructions (single-source on the figure)

Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 8 :40-43 distinguishes them: "Underivable: go outside." and "the remedy is more search, not another atom. Importing against a budget limit adds an atom that was not needed." Fig 6 :49-50: "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."

Applied here: if a slot has live mass but the right binding was not found, the remedy is search and independent searchers (formula step 7, SEARCHED). If no instrument anywhere returns a reading for that slot, the remedy is OUTWARD import of a frame that already predicts its shape. If the channel is sparse but the needed term is already in the closure, importing a new "noise robustness" primitive against a budget limit adds an atom that was not needed.

**Verdict: `general` structural.** SEARCHED is asked first because the other two assume its answer.

### F11 - The world sources are corroboration at the mechanism shape, not at the vocabulary (honest overlap)

The nine substantive world sources span five fields: noisy-label learning (Liu 2021; Jiang et al. 2020), RLHF and preference aggregation (Ghafouri et al. 2026; Zhang et al. 2025; Huang et al. 2026; Hosking et al. 2024), sparse-reward RL (Devidze et al. 2022), human cognition (Kaanders et al. 2022; Wikipedia confirmation bias). Within each field the sources share an evidence pool and count as one witness each. Across fields the overlap is genuinely low, and the agreement is at the level of mechanism shape (frequency-dependent harm, systematic directional bias, active sampling, need for a validity check before aggregation), not at the level of the figures' vocabulary. No world source was used to flip a figure verdict. No world source conflicted with the figure verdict, so the conflict rule was not triggered.

### F12 - What survives, with mode attached

| claim | mode | figure / source |
|---|---|---|
| Feedback is a channel, not an anchor; channel failures are not ground failures | `general` structural | Fig 10 :24 |
| Sparse feedback is support per slot, defeated by averaging | `specified` | Fig 1 :19, :22, :28; Fig 6 :34-35 |
| Sparse feedback with no registering instrument is `unreachable`, not proof of absence | `specified` | Fig 8 :39; Fig 6 :34-35 |
| Inconsistent feedback is a union to split and range, not noise to smooth | `specified`, triangulated | Fig 9 :4-5, :54-58; Fig 2 :45 |
| Biased feedback is the anchor updating on the frame | `specified`, triangulated | Fig 2 :33-35, :47; Fig 10 :59 |
| "Reliably" needs S1-S5 and a non-updating anchor; it has no numerical form here | `general` binding, `gap` for the number | Fig 9 :32; Fig 13 :134 |
| Benchmark success proves wiring in a substituted habitat | `specified` | Fig 11 :70, :39-40 |
| A persistently false term owes a refusal | `specified` | Fig 5 :53, :58-60; Operators :58 |
| Independence is bought, not assumed | `general` cost rule | Fig 2 :42; Fig 8 :47-49 |

---

## 4. Pre-registered refuter

Written before the conclusion, per the Seat Map rule that "a falsifier written before the run is a design instrument, not only an honesty device" (quoted in the exemplar's audit from the local seat-map field guide). The shape claim is refuted if any of the following holds:

1. **S1 fails:** a system locates and settles the live slot after its per-slot residual has been averaged away across all slots, in a controlled run with the averaging verified.
2. **S2 fails:** a feedback channel that demonstrably updates on the frame's own output nevertheless settles a false held term at a ground outside the frame, with no import from that ground.
3. **S3 fails:** two frames drawing on exactly the same evidence produce agreement that predicts a non-updating ground's reading better than either frame alone, out of sample.
4. **S4 fails:** a saturated or pooled metric still tracks an independent ground on an axis the instrument is known to measure, with the saturation demonstrated.
5. **S5 fails:** a system without a negation operator withdraws a persistently false term correctly at a non-updating ground, with the withdrawal in the record.
6. **The gap closes:** someone produces a figure line (or a derived theorem from the six-term set) that returns a numerical reliability bound over systems and slots. Then F12's `gap` is withdrawn and the number is adopted with provenance.

If any fires, the finding it governs is withdrawn and the change is recorded here rather than silently edited. Until one is run, nothing in this folder is `grounded`.

---

## 5. Recommendation

1. For a sparse channel, stop averaging and report live mass per slot. Ask what instrument is already returning something before trying to design one (Fig 6 :34-35).
2. For inconsistent feedback, split before aggregating. Treat disagreement that does not shrink with effort as several questions, and range each against a pinned ground (Fig 9 :4-5; Fig 2 :45).
3. For biased feedback, name the anchor the question is constitutively about, state the axes the instrument cannot measure, and declare the stake (Fig 2 :36-38; Fig 10 :59-60).
4. Buy independence in proportion to the cost of being wrong, and keep the provenance of each reading so a convergent derivation can be told from an adopted import (Fig 2 :42; Fig 8 :50-52).
5. Bind "reliably" as S1-S5 before any claim, and report the numerical guarantee as `gap` rather than manufacturing one (Fig 9 :32; Fig 13 :134).
6. Offer the method and the refuter, not the conclusion. A recording carried upward is one occasion (Fig 4 :25).
7. Keep verdicts per domain and per slot. Never average them into one score (Fig 1 :22; Fig 9 :60).

---

## 6. Canonical usage check, strains and retraction log

### Canonical check

`FRAMEWORK/reference/FIGURES_README_canonical.md` was read on 2026-11-23. Its governing sentences: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the limit "what a missing thing would have to look like (a shape, not a name)", then a stop at "the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." "Indiscernibility is not identity." `THE_FORMULA.md` was read the same session for the mode rule, the three questions of step 7, and the Direction discipline.

### Strains, named not hidden

- **S-a: "ground" versus "feedback".** The question says feedback; the figures say ground. Re-census resolves it: feedback is `o'`, the channel, while the ground is what settles and does not update (Fig 2 :29-30; Fig 10 :24). Different objects, no contradiction. Kept visible because it is the pivot of the whole answer.
- **S-b: "sparse" as coverage versus as support.** My first-pass read treated sparse feedback as a data-volume deficit. Re-census moved it to per-slot support (Fig 1 :18, :19, :28). The change is recorded below and not erased.
- **S-c: "inconsistent" as noise versus as split.** My first-pass read treated disagreement as a variance parameter to estimate. Re-census moved it to the union/partition rule (Fig 9 :4-5, :54-58), with Fig 2 :44 as the arithmetic warning. Recorded below.
- **S-d: Fig 2 anchor test versus human feedback.** Fig 2 :37-38 permits human judgment as an anchor only when the question is about people, and calls it an instrument otherwise. Kept as a live constraint, not dissolved: for "is this answer good for a person" humans are the anchor; for "is this code correct" they are a fallible instrument. Any specific system must state which.
- **S-e: hook for the reliability number.** No figure line returns it. This is a `gap` of the shape-not-a-name kind, not unreachable in principle and not silence (Fig 13 :134; Fig 8 :39). Named as F12 and S6 of the refuter.

### Retraction and confirmation log

| earlier reading | status after re-census |
|---|---|
| "Sparse feedback means not enough data, so collect more" | **Retracted.** Re-census: the governing quantity is live mass per slot, and averaging more data can destroy it (Fig 1 :19, :22, :28). Kept as F2. |
| "Inconsistent feedback is high-variance noise; estimate the variance" | **Retracted.** Re-census: disagreement that does not shrink with effort is several well-formed questions (Fig 9 :4-5), and correlated observations do not multiply evidence (Fig 2 :44). Kept as F3. |
| "Bias can be removed by a better aggregator" | **Retracted at the figure level.** Re-census: if the channel updates on the frame, the anchor has become a frame (Fig 2 :34, :47). A better aggregator over a mirror is still a mirror. Kept as F4. |
| "This solution can report a reliability percentage" | **Refused.** The figures return a shape, not a name, and no line governs a numerical bound (Fig 9 :32; Fig 13 :134). Recorded as `gap`. |
| Fig 10 "ground does not decay" applied to "the ground never changes" | **Narrowed.** The figure says the ground does not decay, not that the question never changes. Fig 10 :71-72 says the room should change when the question changes. Both claims are kept. |
| Fig 11 capability claim applied to benchmark scores | **Narrowed.** A harness proves wiring, not capability; this is not a claim that benchmarks are useless, but that they test a substituted habitat (Fig 11 :66-70). |
| "The four framework essays opened on 2026-11-23 settle the shape" | **Retracted.** They are framework-author sources sharing the figure author's evidence pool, so they corroborate at the mechanism level only (Fig 2 :40). The four not opened this session are marked as carried from the exemplar in `05`. |

### Final audit judgement

Every figure quote in this document was checked against `FRAMEWORK/reference/03-FIGURES_TEXT.md` before use; the second seat re-checks a subset character by character in `11_audit.md`. No world source was cited without being opened on 2026-11-23. The derivation is internally consistent with the figure set after re-census, with one live constraint (S-d) and one declared `gap` (S-e). It remains a `specified` simulated derivation. It cannot settle the question it reports on; only a ground reading at a named slot can move any finding to `grounded`.
