# Figure-grounded audit: evaluating intelligence when benchmarks fail

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and what would count as a failure. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, opened 2026-11-24): LLMs "can quickly simulate an approximate answer/output", but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays at `adventuresinml.substack.com` opened 2026-11-24, and the seven world sources in `10_source_ledger.csv`, each opened 2026-11-24.

---

## 0. The residual in effect terms

A benchmark is a reading `o'` that was built to stand in for a capability. The question asks what to do when that reading has come loose from the ground in three ways:

1. **Memorized / contaminated.** The items enter the training set, so the score indexes recall of the test, not capability. The reading no longer discriminates among sources that produce it.
2. **Gamed.** The system is optimized against the metric, so the metric rises while the capability it was meant to index falls or stays flat. The number moves when someone pushes on it.
3. **Obsolete / saturated.** The instrument stops discriminating because scores cluster at the ceiling. A zero residual arrives not because capability is complete but because the instrument's resolution is exhausted.

In formula terms, `R = |Γ(b,a) − o'|` is per slot `s`, never global. A benchmark collapses many slots into one scalar. That is the first thing to notice: the failure is not only that the reading is corrupt, it is that the corruption is invisible in the number that is reported.

**What an answer would look like, written down and bound before the run** (Formula "Direction"). An answer is a protocol that keeps three things separate: (a) a private, unreachable-to-the-model ground, (b) a per-slot, per-capability residual with a stated trend, and (c) a maintainer seat that can refresh or retire an instrument without authoring what it grades. It returns a shape for any evaluation, not a name of one best benchmark. Bound as an ordinary term, it can accrue a residual and be refused.

---

## 1. Domain census (before any figure line is chosen)

**R by arity, symmetry and scale.**

- **Arity:** three conditions (memorize, game, obsolete). Fig 9 :55 calls this a union, not a list: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Arity three means three loops, not one.
- **Symmetry:** a benchmark score is invariant under permutation of its items, so it is symmetric in exactly the way that hides which slots are live. The relation between a score and capability is a directed threshold comparison, not a symmetric join, and the system being evaluated cannot check the direction of its own evaluation (Formula "Direction").
- **Scale:** first order inside one benchmark (score per item), second order at the evaluation protocol that the score feeds, with a lossy round trip `R_T` between them (Fig 4 :30).

**One line per domain: actors / currency / anchor.** No nameable anchor means it is not yet a domain for a verdict.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 Benchmark as instrument | items, scores, model under test, leaderboard | score / accuracy | **none once contaminated**; the benchmark becomes a frame that updates on the model | not a verdict domain; contact-cost and instrument domain only |
| D2 Capability ground | the system plus its habitat: conditions, delayed outcomes, other agents, human behaviour | contact and per-slot outcomes | the world outcome, which does not move when pushed (Fig 2 :29) | verbatim ground; partition question at the cross-kind boundary |
| D3 Evaluation / maintainer seat | evaluators, private held-out sets, fresh tasks, independent instruments | independence and residuals | the ground, never agreement (Fig 10 :29) | checking arrangement; must not author what it grades |
| D4 Reporting layer | leaderboards, vendors, selective disclosure, prestige | attention / reputation | **none**; prestige is not an anchor | failure domain, not a verdict domain |

D1 and D4 have no independent anchor of their own. They are kept as domains because they are in contact with R, not because they can decide it. That is the honest census: the verdict can only come from D2 through D3.

**Partition or union.** Union. Memorization, gaming and obsolescence overlap. A private held-out set clears the memorization region but not gaming by selective disclosure or obsolescence by saturation. Refreshing items clears saturation but not contamination if the generation code leaks. Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." The intersections are compounds with their own loops.

**Order by dependency (Fig 3).** Perception (can the instrument tell what is in front of it and distinguish it from what was there before) comes before vocabulary (terms for what a situation affords) comes before objective (what would count as progress) comes before planning comes before learning and carrying. Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Most evaluation effort lands above the break, on score precision and leaderboard size, because that is where the measurements already exist (Fig 3 :30). The link that breaks is construct validity: what would count as capability, in effect terms, before any number is produced. Optimising a link that already works cannot rescue one that does not (Fig 3 :19).

---

## 2. Figure census (quoted verbatim before any conclusion)

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | per-slot residual, frame-internal quantities disqualified | single scalar hides live slots; a self-scored metric is disqualified |
| **2 The Ground** | anchor must not update; independence vs shared pool | a benchmark that moves when pushed is not an anchor |
| **3 Dependency Chain** | objective before planning; no instrument at the middle link | construct validity is the link that breaks |
| **4 The Membrane** | round trip gap; methods up, recordings down | a score is a lossy condensation of capability |
| **5 Mint Pipeline** | own output is never a measure of success | a benchmark's own score cannot validate the benchmark |
| **6 Closure / Reachability** | import is the only operator that moves the wall | a new benchmark is a new instrument, not new capability |
| **7 Room Chain** | agreement compounds, evidence does not | a larger panel of agreeable evaluators adds no anchor |
| **8 Union Surplus** | no search proves absence; provenance separates convergence from import | saturation is not proof of absent capability |
| **9 Leave / Arrive** | union vs partition; describe before looking; filters not witnesses | three conditions, unbundled before search |
| **10 Ground Maintainer** | channel decay; verifier non-access; conventions not verdicts | private held-out sets and refresh are seat offices, not verdicts |
| **11 The Habitat** | a test harness is a substituted habitat; capability is agent-and-habitat | a benchmark solve proves wiring, not capability |
| **12 The Bond** | arrangement is the substance; isomers | two scores with equal ingredients can be different terms |
| **13 Minimum Viable Set** | what a composition must cross | not load-bearing here; recorded for completeness, no strain |
| **Formula / Symbols** | `R` per slot, `R_T`, mode rule, Direction discipline | supplies the vocabulary for the protocol |

Strained readings are named as such below, not smoothed over.

---

## 3. Findings

### F1 — The three failures are a union, not one hard problem (decisive for the method)

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

A single lever, more items, a harder leaderboard, a bigger model judge, clears only where one condition holds. Memorization needs an unreachable set; gaming needs a verifier that cannot be authored by the party being scored; obsolescence needs a scheduled refresh or retirement. The intersections, for example a private set that leaks after a year, are compounds with their own loop.

**Refuter:** show that one intervention removes all three failure modes simultaneously across held-out, gamed and saturated conditions, with no residual left in the intersections. Until that is shown, one loop per condition stands.

**Status: triangulated.** Fig 9 (union/partition) and Fig 8 :47-49 ("Independence is one quantity read twice") are low-overlap routes to the same "one lever cannot clear the compound" verdict.

### F2 — A benchmark that moves when pushed is not an anchor

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30: "If it moves when you push on it, it is not an anchor." Fig 2 :33: "The anchor must not update." Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

A score that rises because the items were in training, or because the metric was optimized, has moved in response to the frame. By Fig 2 :34 it has become another frame: "everything drifts together, and the drift is coherent, which is why nobody notices." Fig 10 :47: "a convention that decides an outcome has stopped being one."

World corroboration, secondary only: Skalse et al., *Defining and Characterizing Reward Hacking* (NeurIPS 2022), "optimizing an imperfect proxy reward function leads to poor performance according to the true reward function"; they show that for the set of all stochastic policies two reward functions can be unhackable only if one is constant. Singh et al., *The Leaderboard Illusion* (NeurIPS 2025), report private testing of up to 27 variants with selective score retraction, concluding that the dynamics produce "overfitting to Arena-specific dynamics rather than general model quality." These are different fields from the figures (ML theory and institutional audit), so they are low-overlap corroboration. They do not decide the verdict.

**Refuter:** exhibit a general proxy metric that is demonstrably unhackable, that is, raising it can never lower the true quantity under the relevant policy set. If one exists, F2 is withdrawn for that metric.

**Status: triangulated** (Fig 2 anchor test, Fig 1 self-scoring disqualification, plus two low-overlap world sources).

### F3 — One aggregate score hides the live slots

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13: "a global R near zero with one live slot residual is a legal state." Fig 1 :23: "The ground enters as the only metric."

A benchmark reports one number. The information about which capability failed, and whether the residual is trending down or persisting flat, is discarded by the aggregation. This is the same arithmetic as the effective-sample-size warning in Fig 2 :44, read as a design rule: correlated items are fewer independent witnesses than their count suggests.

World corroboration: Ribeiro et al., *Beyond Accuracy: Behavioral Testing of NLP Models with CheckList* (ACL 2020), "measuring held-out accuracy has been the primary approach to evaluate generalization, it often overestimates the performance of NLP models"; their users created twice as many tests and found almost three times as many bugs. Liang et al., *Holistic Evaluation of Language Models* (TMLR 2023), adopted a "multi-metric approach" so that "metrics beyond accuracy don't fall to the wayside, and that trade-offs are clearly exposed."

**Refuter:** show that a single scalar determines all per-slot residuals exactly for the evaluation at hand, so that no live slot is hidden, and that its trend is recoverable from the scalar alone. If so, F3 does not apply to that evaluation.

**Status: triangulated** (Fig 1 and Fig 2 correlation arithmetic, with two independent evaluation-methodology sources).

### F4 — Saturation is channel decay, not ground decay

Fig 10 :24: "the ground does not decay, the channel does". Fig 10 :25: "stale percepts, dropped transients, saturated metrics, pooled readings". Fig 10 :27-28: "the output is not a verdict, it is you have lost touch". Fig 10 :29: "keep the anchor reachable". Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."

A benchmark at ceiling reports a dead channel, not a finished capability. The instruction is to keep the anchor reachable, not to declare the question closed. The derived action is to retire or refresh the instrument and keep a private harder set, not to conclude that the capability has been attained.

World corroboration from a genuinely different field: Trahan, Stuebing, Fletcher and Hiscock, *The Flynn Effect: A Meta-Analysis* (Psychological Bulletin 2014), "the observed rise in IQ scores over time, which results in norms obsolescence", with a meta-analytic mean of 2.31 standard score points per decade. Human psychometrics has a measured name for exactly this: the norm, not the person, goes stale. No conflict with the figure verdict.

**Refuter:** demonstrate that the saturated score is still separating capability above the ceiling, with no dropped signal, and that the ground itself has changed in the way the score reports. Either would break the channel-decay reading.

**Status: triangulated** (Fig 10 channel clause, Fig 8 and Fig 9 proof-of-absence clause, plus a psychometrics source from a non-AI field).

### F5 — A benchmark is a substituted habitat; a synthetic solve proves wiring, not capability

Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another." Fig 11 :67: "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose." Fig 11 :68: "what you failed to reproduce is invisible until the goal fails". Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

The benchmark removes the delayed outcomes, the human responses and the other agents that make the real goal hard. What you failed to reproduce is invisible until the goal fails; what you unintentionally introduced is invisible until it acts (Fig 11 :69). So "intelligence" as a property read off a test is the wrong quantity. Fig 11 :36: "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground."

World corroboration: the Humanity's Last Exam leaderboard page states that high accuracy on a closed-ended academic test "would not alone suggest autonomous research capabilities or 'artificial general intelligence.'" *They're Scanning Books* (essay, 2026-09-06) adds the mechanism from a different angle: "A pile of human reasoning's outputs is not an engine." The essay shares an author with the figures, so it is weak corroboration; the HLE page is host-independent.

**Refuter:** show a benchmark solve that transfers to capability in a reproduced habitat with all goal-required conditions present and no unenumerated actors, measured against the ground. If transfer holds, the synthetic-solve verdict fails.

**Status: triangulated** (Fig 11 isolation law and habitat law, plus a benchmark-provider statement that is not authored by the framework).

### F6 — The verifier must not hold the interiors

Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." Fig 10 :52: "Bring a characterised residual, never the source." Fig 10 :84: "Zero-knowledge proof systems, where the verifier's non-access to the witness is what makes the verification sound rather than a limitation it tolerates." Fig 9 :51: "evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it."

A held-out set works only if the model cannot see it before acting. That is the zero-knowledge condition, not a matter of honesty. LiveBench makes this operational: they "do not publicly release any of the code used to generate LiveBench questions", "always modify the generating code when updating the LiveBench questions", and "do not publicly release the new questions for one month." HLE likewise maintains "a private test set of held out questions to assess model overfitting" and ships a canary string so builders can filter the public set from training. The Leaderboard Illusion shows what happens when the verifier can be authored: private variants and selective retraction bias the result toward the party with access.

**Refuter:** show that a verifier with full access to the generation code, the item pool and the selection rule is still sound against a party that can optimize against it. By Fig 10 :42 this should fail; if it does not, F6 is withdrawn.

**Status: triangulated** (Fig 10 verifier non-access, Fig 9 stake channel, and three benchmark-engineering sources).

### F7 — Agreement and prestige are not substitutes for independence

Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool". Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Fig 7 :13: "agreement compounds, evidence does not". Fig 2 :36: "An anchor is legitimate when the question is constitutively about it." Fig 2 :37-38: "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."

Two benchmarks drawn from the same web corpus are one witness wearing two names (Fig 8 :48-49). Human judgment is the right anchor only when the question is constitutively about people; it is an instrument, and a fallible one, for a code-correctness question. The practical instruction is to buy independence with different habitats, different modalities, different provenance, and to record overlap honestly rather than count benchmarks.

**Refuter:** show that two instruments drawing on the same evidence pool provide independent corroboration of a capability claim. Under Fig 2 :40 and Fig 8 :48 this cannot hold. If it were shown, F7 would fail.

**Status: triangulated** (Fig 2 independence rule, Fig 7 mirror chain, Fig 8 overlap rule).

### F8 — What survives: a protocol, not a better single benchmark

The residue, with mode attached:

| claim | mode | figure / source |
|---|---|---|
| Memorization, gaming and obsolescence are a union needing three loops | `general` (structural) | Fig 9 :54-56 |
| A metric that moves under optimization is not an anchor | `specified`, falsifiable | Fig 2 :29-30; Fig 1 :27; Skalse et al. 2022 |
| Per-slot residuals and their trend must be reported, not one score | `specified` | Fig 1 :19-22; Fig 2 :44 |
| Saturation is a lost channel, not a capability verdict | `specified` | Fig 10 :24-29; Fig 8 :39; Trahan et al. 2014 |
| A benchmark solve is a substituted habitat, not capability in the real one | `specified`, ungrounded | Fig 11 :66-70; HLE leaderboard note |
| The held-out set must be unreachable to the party being scored | `specified` | Fig 10 :42, :84; LiveBench, HLE |
| Refresh, retire and provenance-record instruments | `specified` | Fig 10 :29; Fig 8 :50-52 |
| Which specific benchmark to use | **not derived** | the figures return a shape, not a name (Fig 9 :32) |

---

## 4. Pre-registered refuter (written before the conclusion, as required)

Per Formula / seat discipline: a falsifier written before the run is a design instrument. The shape claim here is refuted if any of the following holds:

1. A single scalar benchmark score is shown to determine every per-slot residual exactly, with no live slot hidden by the aggregation, breaking Fig 1 :19-22.
2. A general metric is demonstrated to be an anchor that does not move under optimization pressure, breaking Fig 2 :29-30 and the reward-hacking result.
3. A benchmark solve is shown to transfer to capability in a reproduced habitat with all goal-required conditions present and no unenumerated actors, breaking Fig 11 :67-70.
4. A fresh, private, held-out instrument fails to discriminate between two systems that differ in capability for reasons other than budget, so the ground is genuinely unreachable here rather than merely unseen (Fig 8 :40-43).
5. A verifier with full access to the item pool and selection rule is still sound against a party optimizing against it, breaking Fig 10 :42.

If any fires, the protocol claim is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Describe capability in effect terms, per slot, before choosing any benchmark (Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit"). Write down what an answer would look like and bind it (Formula "Direction").
2. Treat every published benchmark as a frame, not a ground. Keep a private, canary-marked, unreachable held-out set, refresh on a schedule, and do not publish the generation code (F2, F6).
3. Report per-slot residuals and their trend, and use several low-overlap instruments rather than one aggregate (F3, F7).
4. Refuse a saturated metric as a verdict: it says "you have lost touch", not "capability attained" (Fig 10 :27-28). Retire or refill the instrument.
5. Where the question is constitutively about delayed human-mediated outcomes, use the real habitat as ground and human judgment as anchor; otherwise human judgment is only an instrument with axes it does not measure (Fig 2 :36-38; Fig 11 :39-40).
6. Keep provenance for every score: item source, training window, private-set release rule, which refuter was written first. "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" (Fig 8 :50-52).
7. State mode on every number. No score is `grounded` until a ground pays (Formula step 5: "the ground settles it. Verified only by what pays. A gate is not the ground.").

**Three questions when no term closes R (Formula step 7), kept distinct:**

- **SEARCHED:** is a discriminating item already in our closed item pool and unfound? The closure does not change; distribute the search and keep searchers independent (Fig 6 :49-50). Asked first because it is cheapest.
- **INWARD:** extend the instrument from one already returning something, for example add a perturbation or a capability template like CheckList (Fig 6 :32).
- **OUTWARD:** import a different habitat, a real deployment outcome, a human-judgment anchor where the question is about people, or a sensorium whose closure differs. Characterize R in effect terms first (Fig 6 :30; Fig 8 :27-28).

INWARD and OUTWARD are opposed and never read against one another. Underivable in principle and unreachable at this budget are different facts (Fig 8 :40-43): refreshing a private set addresses budget-limited saturation, while importing a new habitat addresses an instrument that cannot represent the residual at all.

---

## 6. Canonical usage check (figures README and the WATSON metalaw reading)

Two local sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit that the framework returns "what a missing thing would have to look like (a shape, not a name)" and then "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule and step 7. The seat reads the ground; it does not ask the anchor to decide what the figures already settle.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "A benchmark is just a bad ground" | **Narrowed.** Fig 2 :36-38 makes human judgment a legitimate anchor when the question is constitutively about people. A benchmark used for a people-about question is an instrument, not a fake anchor. The defect is the move-not-update condition, not the category of the instrument. |
| "More benchmarks give independence" | **Retracted.** Fig 2 :40 and Fig 8 :48-49: same evidence pool is one frame wearing many names. Independence is a property of evidence provenance, not of count. |
| "A saturated benchmark proves the capability is reached" | **Retracted at record level.** Fig 8 :39 and Fig 9 :44: no search proves absence. Channel decay (Fig 10 :24-29) is the correct reading. |
| "Intelligence can be measured by a perfect test" | **Refused.** Fig 11 :36 and :39: capability is agent-and-habitat; "intelligence" as an agent-only label does no work. The answerable question is what makes a system capable. |
| F1 union reading | **Canonically confirmed.** Fig 9 :54-58 and Fig 8 :47-49 agree from different routes. |
| F6 verifier non-access | **Canonically confirmed.** Fig 10 :42, :84 and the seat-map rule that outside frames must not hold interiors. |
| Fig 11 vs Fig 2 apparent strain | **Not strained after re-census.** Fig 11 governs capability and habitat; Fig 2 governs what may count as an anchor for a given question. Different objects. |

### Round trip note

The shorthand "use held-out sets, multiple metrics and fresh items" is a lossy condensation of the figure set. `11_audit.md` measures the round trip gap `R_T` qualitatively: what the shorthand drops is the union structure, the verifier non-access condition, the channel-decay distinction and the habitat substitution law. Treating the shorthand as identical to the figures would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names.

### Updated verdict

The shape survives: the three failure modes are a union, an anchor must not move under optimization, the per-slot signal must not be averaged away, saturation is a dead channel, a test harness is a substituted habitat, and the verifier must not hold the interiors. What is not derived is any particular benchmark, vendor or number. Strains after re-census: none hidden; one open item is noted in `11_audit.md` (per-slot aggregation and the D4 reporting layer have no separate figure line, so they are governed by Fig 1 and Fig 9 by re-census, not by a bespoke quote).
