# Figure-grounded audit: How should systems handle questions for which no available evidence supports a definite answer?

**Mode: `general` on the structural shape, `specified` on the operational protocol, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." An "ought" is not settled by a measurement, so nothing here is `grounded`.

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See §6 and `05_what_shape_means.md`.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim quotes), `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `THE_FORMULA.md`, plus the world sources in `10_source_ledger.csv`. Read 2026-11-23.

---

## 0. The residual, in effect terms

A system is asked Q. Its library Γ and its closure(Γ) contain no term that settles Q against a ground. The normal loop still emits something: either a guess minted without support, or a high-confidence output that merely reflects the training distribution, or a confident "unknown" that erases *why* nothing settled. The residual is the mismatch between the **demand for a definite answer** and the **actual absence of a settling anchor**. In effect terms: *the system must return a state of the world (settled, unreachable, refused), and instead returns a sentence.*

What an answer would look like, bound as an ordinary term before the run (Formula "Direction"): a protocol that (a) keeps the distinct no-answer states separate, (b) runs the cheapest discriminator first, (c) names what would have to change for the answer to differ, and (d) states its own mode and refuter. This bound shape is what the findings below check, not a conclusion smuggled in.

**Arity / symmetry / scale.** Arity: the single question Q is a **union compound** of at least three well-formed questions (is it unfound in here, is it absent from the frame, is the premise false). Symmetry: the same outward behaviour (no definite answer) is produced by asymmetric causes, so the residual is not a symmetric function of one scalar. Scale: within-frame search (step 7 SEARCHED), across-frame import (Fig 6), and ground settlement (Fig 2) are different strata.

A verbatim figure line fixes the residual bin from the start: Fig 8 :39 "So a search that finds nothing is never a proof of absence."

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors / currency / anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1, in-frame search | Γ, atoms(Γ), candidate φ, independent searchers | compositions inside closure(Γ); bits and actions of budget | the ground, outside the frame, reached only by a probe | partition boundary: what composes within the closure |
| D2, instrument and ground | probe, sensor, observation o′, anchor | reach from o′; refinement from a worse instrument already returning something | measurement, experiment, counter: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." (Fig 2 :29) | partition: one anchor, many frames ranging against it |
| D3, peer frame / import | frame A, frame B with differing closure, imported primitive, provenance | the residual described in effect terms; source gate and shadow test | the same ground, with independence as the quantity that makes the import non-circular | union with D1: the surplus exists only where closures differ |
| D4, truth status / refusal | held term, negation ¬, the record | standing to be composed over; reach falls when a refusal is added | the ground, which settles whether the premise is false | partition: REFUTED is its own bin, not reachable by the other four |
| D5, reporting and verification | the system, the consumer, the outside checker | mode labels, recorded lineage, round-trip gap `R_T` | the ground, never agreement | partition: a status claim, not a truth claim |

**Dependency order (Fig 3: the chain is ordered by dependency, not by importance).** First split the union (Fig 9 :4-5). Then sort the residual into its bin; if REFUTED, refuse before mint (Formula step 2). Then SEARCHED, which is cheapest and which INWARD and OUTWARD assume the answer to (Formula step 7). Then INWARD and OUTWARD as two opposed tracks, never read against one another (Fig 6 :31). Then settlement, then report with mode and lineage.

**Strain test applied before concluding.** The "no definite answer" residual is a union, not one hard question. A figure line that only fits by treating all three causes as one would be straining, so it governs another quantity and triggers a re-census. This is recorded as a finding (F2), not smoothed over.

---

## 2. Figure census

| figure | bearing on this question | verdict |
|---|---|---|
| 1 The Agent | support is per slot; a global near-zero residual can hide one live slot | the question's "no evidence" must be localised, not averaged |
| 2 The Ground | anchor must not update; correlation disqualifies a verdict | a status is anchored to a measurement, not to agreement |
| 3 Dependency Chain | a reading below the break is a reading of nothing | order the operations by dependency (§1) |
| 4 The Membrane | round trip and `R_T`; only methods cross up | a one-word "unknown" is a lossy condensation with an unmeasured gap |
| 5 Mint Pipeline | three guards as a product; fifth kind REFUTED; shape as preference | no mint without support; refusal is a distinct move |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | SEARCHED / INWARD / OUTWARD are different, opposed questions |
| 7 Room Chain | "same closure, handed along; agreement compounds, evidence does not" | passing a question to more agreeing frames adds no evidence |
| 8 Union Surplus | underivable versus unreachable-at-budget; "So a search that finds nothing is never a proof of absence." | report the distinction; absence of a find is not absence of an atom |
| 9 Leave / Arrive | split versus search; describe the residual before choosing a frame | the union must be unbundled before search |
| 10 Ground Maintainer | "the ground does not decay, the channel does"; verifier non-access | a stale channel reports "lost touch", not a verdict |
| 11 The Habitat | capability is agent-and-habitat; enumerate, never compose | enumerate what contacts the residual; do not invent the list |
| 12 The Bond | ¬ is not a bond; a vocabulary without it can only accumulate | refusal needs a unary operator, not a new answer |
| 13 Minimum Viable Set | "Unreachable is a verdict here, not a silence"; "It cannot say which primitive is missing, because naming it would mean already holding it." | the honest output is a status and a shape |
| Operators table | ¬: "a refutation is a negation, which is why a vocabulary without it can only accumulate" | the REFUTED bin needs negation |
| Symbols table | `R` is the aim; the ground is the anchor; `R_T` measures the coarser description | state which quantity is being reported |

Strained readings are named as such below, not smoothed over.

**Verbatim spot-checks (citation before quote), re-read against `03-FIGURES_TEXT.md` this session:** Fig 13 :134 "Unreachable is a verdict here, not a silence," ; Fig 9 :4-5 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." ; Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." ; Fig 6 :34-35 "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve. Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."

---

## 3. Findings

### F1: The correct output for an evidence-free question is a status, not a guess (decisive, `general`)

Fig 13 :133-135: "It can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again."
> "Unreachable is a verdict here, not a silence,"

Fig 9 :6: "the verdict: is φ* in here at all?"

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

A system that always emits a definite answer has mis-encoded the output layer: it has no term for "the ground did not settle this." The figures make the status an honest verdict, and make the absence of a find *not* a proof of absence. So the first requirement is a vocabulary that can say "unreached" and "refused" without pretending either is an answer.

**Refuter:** show a case called "evidence-free" where a definite output is in fact settled by a ground that does not move when frames change. Then the question was not evidence-free and F1 does not apply. A second refuter: derive from the figures a rule that a frame must always return a term. None of the cited lines does.

**Triangulation:** triangulated across Fig 13 (closure/report), Fig 9 (verdict) and Fig 8 (search vs absence), three lines with low overlap in argument form. World corroboration: Geifman and El-Yaniv (2017), SEP Skepticism (2026), Chau et al. (2026).

### F2: "No evidence" bundles several questions; split before searching (`general`)

Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

Fig 9 :54-55: "when the split lands on a union rather than a partition, unbundle before you search again."

The single user-facing question is a union of conditions: unfound in the closure, unreachable from any proto-instrument, or a false premise. Fig 9 forbids treating a union as one hard question and forbids searching before unbundling. Searching the bundle wastes the budget on regions where only one condition holds and leaves the intersections standing.

**Refuter:** show that one rule works across every subset of the residual (a partition), or that the three conditions co-vary such that clearing one clears all. Then the union reading is wrong and a single search is right. This is an empirical question about the instance, not about the figures.

**Triangulation:** single-source for the figure rule (Fig 9), triangulated with Formula step 7's three-way split. Low overlap between the geometric split and the procedural split.

### F3: Three operations, wrongly collapsed; SEARCHED comes first (`specified`)

Formula step 7 names three questions, not one: SEARCHED (is it in here and unfound?), INWARD (extend an instrument already returning something), OUTWARD (import from a frame whose closure differs). Fig 6 :48-50: "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."

Fig 6 :31: "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

SEARCHED is cheapest and the other two assume its answer (Formula step 7). INWARD and OUTWARD are opposed and must not be read against one another. A system that imports before searching pays for an atom it may already hold; Fig 8 :42-43 prices a wrong atom above starting from primitives.

**Refuter:** a frame whose closure changes under repeated search with the same atoms (breaks Fig 8 :32), or a case where sharpening an instrument answers whether another frame holds the term (breaks Fig 6 :31). Under either, the three-way order collapses.

**Triangulation:** triangulated across Formula step 7 (procedure), Fig 6 (geometry of the wall) and Fig 8 (idempotence theorem). The three are independent formulations within the framework, but all are framework-primary, so their agreement is internal consistency, not world corroboration.

### F4: Unreachable-at-budget and underivable-in-principle are different facts with different instructions (`general`)

Fig 8 :40-41: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."

Fig 6 :26-27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."

A single "unknown" label conflates them. Unreachable-at-budget means the term is "already in the closure and was not found, so the remedy is more search, not another atom" (Formula step 7). Underivable in principle means "go outside" (Fig 8 :41). Importing against a budget limit adds an atom that was not needed.

**Refuter:** an imported atom that closes the residual at fixed budget *and* is shown not to have been in closure(Γ) before the import. That would mean the budget case was misclassified. Also refuted if a frame can tell depth from absence from inside without an instrument, which Fig 6 :26 denies.

**Triangulation:** triangulated across Fig 8 (scope of the metaframe theorems) and Fig 6 (the two instruments). World corroboration: Kendall and Gal's epistemic/aleatoric distinction (2017) is a low-overlap analogue of "reducible with more data" versus "not reducible".

### F5: No proto-instrument, no INWARD edge (`general`)

Fig 6 :34-35: "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve. Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

INWARD is not "imagine a better sensor". It requires an existing reading that fails to resolve. If nothing registers anywhere at any resolution, there is no edge to extend and the honest report is that no instrument exists to improve. This is a barrier, not a pessimism: "What is unavailable is a sensor for something that has never registered anywhere, at any resolution." (Fig 6 :39-40)

**Refuter:** a documented case where an instrument was specified from a pure description with no prior resolution-failing reading. The figures say this cannot happen; a single verified case breaks F5.

**Triangulation:** single-source for the figure rule (Fig 6), corroborated in a different field by Chau et al. (2026), where engineering away an empty prediction set removes the system's ability to signal extreme uncertainty.

### F6: The sought-for answer shape is a preference, not a term; bind it to make it refusable (`general`)

Fig 5 :61-63: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it."

The remedy, in `THE_FORMULA.md` step "Direction" (attributed to the formula, not the figure text): "make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else." In this folder that bound shape is §0's four-part protocol. Until it is written down, a system cannot refuse its own desire for a definite answer and will aim the refusal at the outcome it did not want.

**Refuter:** a frame that correctly refuses its own desired answer without ever having bound the shape as a term. The figures claim this is structurally invisible to the frame; a working counter-example breaks F6.

**Triangulation:** triangulated across Fig 5 (direction limit) and the Formula "Direction" discipline. Single-source for the figure line itself.

### F7: If the premise is false, the owed move is a refusal, not an explanation (`general`)

Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so"

Fig 5 :54-55: "What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."

Operators table :57-58:

> "a refutation is a negation, which is why a vocabulary without it can only accumulate"

Some evidence-free questions are not missing-answer questions. They are false-premise questions. The fifth bin (REFUTED) sorts by what is *wrong*, which "no arrangement of the other four reaches" (Formula step 2). The owed term is a negation (¬), which is unary and "not a bond" (Fig 12 amendment). A vocabulary with only ingredients and subtraction can say what is absent from an arrangement and cannot say that the arrangement is wrong.

**Refuter:** a system that withdraws a false premise's standing to be composed over without any negation operator, or a figure line that places REFUTED inside the four missing-thing bins. Neither is present in the cited text.

**Triangulation:** triangulated across Fig 5 (fifth kind) and the Operators table (¬ entry), two low-overlap artifacts within the framework. World corroboration: the SEP Skepticism entry treats suspension of judgement as a third doxastic attitude, though that is closer to F1 than to false-premise refusal.

### F8: Reporting must state mode and lineage; an agreeing room cannot supply the missing evidence (`general`)

Fig 7 :13: "same closure, handed along; agreement compounds, evidence does not"

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

Fig 10 :24: "the ground does not decay, the channel does"

Fig 10 :27-28: "the output is not a verdict, it is you have lost touch"

A status report is admissible if it says what would settle the question and what the current state is. It becomes inadmissible when a crowd of agreeing frames is used as a substitute for an anchor, or when a stale channel's silence is reported as a fact about the world. Note the asymmetry: a **closed channel** and a **perfect prediction** look the same from inside (Formula "Closure": the loop stops when R stops arriving, "which is either a perfect prediction or a closed channel, and from inside those look the same"). Only a maintained channel distinguishes them.

**Refuter:** an anchor-free agreement procedure that tracks the ground at the same rate as an anchored instrument across independent instances. Then agreement is doing verdict work and F8 is wrong.

**Triangulation:** triangulated across Fig 7 (handoff), Fig 2 (anchor), Fig 10 (channel). World corroboration: conformal prediction's empty-set literature treats an empty set as an explicit signal that must not be engineered away merely because a coverage target can be met (Chau et al., 2026).

### F9: A missing term does not license inventing one; the mint is a gated product (`general`)

Fig 5 :41: "Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."

Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."

Fig 13 :134: "It cannot say which primitive is missing, because naming it would mean already holding it."

The framework returns a shape, not a name. A system with no support is *not* licensed to fill the slot, and a system that has minted nothing is not thereby defective. The answer to "what should it say" is not "say something plausible".

**Refuter:** a mint that fires with zero support and whose new term is subsequently settled by the ground, with support shown to be genuinely zero at every slot. Then the SUPPORT gate is misdescribed. Also refuted if the framework does return names for missing primitives; Fig 13 :134 forbids it.

**Triangulation:** triangulated across Fig 5 (three guards) and Fig 13 (shape, not a name). World corroboration: selective classification's "don't know" output (Geifman and El-Yaniv, 2017) is an engineered abstention, not an invented class.

### F10: A one-word status is a lossy condensation; measure the round-trip gap `R_T` (`specified`)

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Fig 9 :53: "Nobody chooses. The gap does, and the gap is only as good as its description."

Condensing the three distinct no-answer states (F3, F4, F7) into "unknown" throws away exactly the distinctions that tell a system what to do next. The Symbols table defines `R_T` as "The gap between what was sent up and what came back down", measuring "what the coarser description cannot hold." The honest form is a lossy condensation with a recorded gap, not an identity claim.

**Refuter:** a one-word status that preserves which bin fired, which instrument was tried, and what would reverse it. Then `R_T` is approximately zero for that case and the warning does not bite.

**Triangulation:** triangulated across Fig 4 (round trip) and Fig 9 (description quality). This is the finding the second seat tests most directly in `11_audit.md`.

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing rule that "a falsifier written before the run is a design instrument". Dated 2026-11-23. The shape claim (the four-part protocol in §0, elaborated in `07`) is refuted if any of the following holds:

1. A definite answer to an actually evidence-free question is settled by a ground that does not move when frames change. Then there was an anchor all along and F1 is void.
2. A frame's closure changes under repeated search with the same atoms (breaks Fig 8 :32), or sharpening an instrument answers whether another frame holds the term (breaks Fig 6 :31).
3. An instrument is built from a description alone with no prior reading that fails to resolve (breaks Fig 6 :32 and :34-35).
4. A false premise is withdrawn without any negation operator (breaks Fig 5 :53 and the Operators table's ¬ entry).
5. Agreement among overlapping frames predicts the ground as well as an anchored instrument (breaks Fig 2 :35 and Fig 7 :13).
6. A one-word status preserves the bin, the instrument and the reversal condition, so `R_T` for the condensation is zero (breaks F10).

If any fires, the protocol is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. **Split before search.** Unbundle the union (F2); keep the three reply states separate and never average them.
2. **Run SEARCHED first** (F3). Distribute independent searchers; keep them genuinely independent, because "searchers drawing on the same evidence are one searcher wearing many names" (Fig 6 :52-53).
3. **Then run INWARD and OUTWARD as two tracks** (F3, F4, F5). Do not import against a budget limit. Report which track fired and why.
4. **Give REFUTED its own door** (F7). If the premise is false, refuse; do not generate an explanatory answer to a question that should be withdrawn.
5. **Report a status with a mode, a refuter and a lineage** (F1, F8, F10). "Unreachable is a verdict here, not a silence." Never let the number of agreeing recipients substitute for the ground.
6. **Do not mint to fill the slot** (F9). A shape is the deliverable; a name needs a ground reading or a provenanced import.
7. **Measure `R_T`** before calling any summary of this protocol complete (F10, and §`11_audit.md`).

---

## 6. Canonical usage check

Two local sources read after the first five sections govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the limit: the framework says what "a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws, so design questions are answered by derivation, not by escalating to a human ruling. "The figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." No ruling was requested, and none is claimed.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "the answer is to say 'I don't know'" | **Retracted.** Too coarse. The figures require a structured verdict (unfound, unreachable, refused), and F10 shows the round-trip gap. "I don't know" is a lossy condensation until its bin is recorded. |
| "no evidence means the framework can say nothing" | **Retracted.** Fig 13 :134 makes unreachability a verdict, and Fig 9 :6 makes it the first of three questions. |
| "a shape is a placeholder for the missing answer" | **Narrowed.** The README's phrase governs a *missing* primitive. Here the deliverable is a protocol shape (what a defensible answer would look like), which is itself a bound ordinary term, not a name for an atom. |
| "more search will eventually settle it" | **Refused.** Fig 8 :32 (idempotence) and Fig 6 :34-35 (no proto-instrument) forbid it. SEARCHED is first precisely because it is the cheapest way to show that more search is not the remedy. |
| "import a frame that always answers" | **Refused.** A frame that always answers has no off-switch and no anchor; Fig 6 :23 requires differing closure and Fig 8 requires provenance and a shadow test. |
| F1 (status not guess) | **Canonically confirmed.** Fig 13 :134 and Fig 9 :6, plus the README's "a shape, not a name". |
| F7 (refusal is a distinct move) | **Canonically confirmed.** The Operators table defines ¬ and says a vocabulary without it can only accumulate. |
| Apparent strain: Fig 5's four bins versus its fifth kind | **Not strained.** Re-census: the four sort by what is missing; the fifth sorts by what is wrong (Fig 5 :50-53). Different objects, so no re-census of the domains is owed. |
| Apparent strain: "search first" versus "import is the only operator that moves the wall" | **Not strained.** Re-census: SEARCHED does not claim to move the wall; Fig 6 :49 says the closure does not change. Different quantities (visited space vs wall). |

### Seven-question recursive derivation (summary)

1. **What kind of residual?** A union (F2), so split before search. Fig 9 :4-5.
2. **What is the first operation?** SEARCHED, cheapest, assumed by the others. Formula step 7.
3. **Is more search the remedy?** Only if unreachable-at-budget; not if underivable. Fig 8 :40-41.
4. **Can INWARD work?** Only from an instrument already returning something that fails to resolve. Fig 6 :34-35.
5. **Can OUTWARD work?** Only with the residual described in effect terms first, and with source gate and shadow test. Fig 9 :27-28, Fig 8 :12-13.
6. **What if the premise is false?** Refuse with ¬; do not explain. Fig 5 :53.
7. **What do we report?** A mode-labelled status with a refuter and a lineage; `R_T` recorded. Fig 4 :30, Fig 13 :134.

### Updated verdict

The structural shape survives: an evidence-free question is a union, its no-answer states must be kept separate, SEARCHED precedes INWARD/OUTWARD, refusal is a distinct operator, and the honest output is a status with a recorded gap. The specific claim that a system should "say something" is refused. Strains after re-census: **none hidden**; the one live strain is the qualitative status of `R_T` (no ground reading was taken), which `11_audit.md` records rather than resolves.
