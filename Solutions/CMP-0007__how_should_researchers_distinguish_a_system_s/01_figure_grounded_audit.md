# Figure-grounded audit: distinguishing organizing principles from measurement artifacts

**Mode of this document: `specified` on the methodological protocol, `general` on framework-internal structural rules, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*, opened 2026-11-22: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post." and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources for figure lines.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Also `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) - o'|` per slot `s` (Formula step 1; Symbols table). Applied to this question:

- **b** is the analyst's frame: priors, vocabulary, assumed model class, commitments about what kind of pattern is expected.
- **a** is the measurement and analysis choice: instrument, sampling, binning, similarity metric, transform, estimator, stopping rule, plotting choice.
- **Γ(b,a)** is what the analysis library predicts will be seen when that choice is applied.
- **o'** is what the ground returns under an intervention or an independent probe, not under the same analysis.
- **s** is the object, region or slot whose regularity is in question. R is indexed per slot and per instrument, never aggregated into one global "the system shows pattern P".

> "The residual is indexed by object slot, not aggregated." (Fig 1 :19)
> "Aggregating across slots is how a live signal disappears into an average." (Fig 1 :22)

The phenomenon to explain is not whether a pattern appears. It is that the same system, held fixed, yields pattern P under analysis choice M1 and a different pattern or none under M2. Stated in effect terms: **why does a reported regularity persist or vanish when the measurement and analysis choices vary while the system is held fixed, and which of those regularities is the system's own doing?**

This names no criterion yet. "Replication", "robustness", "pre-registration", "holdout", "triangulation" are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** before the run (Formula, "Direction"): the answer would be a decision protocol that, for any candidate pattern, returns one of "principle candidate", "analysis artifact", or "undecided at this instrument", with a named instrument for each test and a recorded lineage. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 3 can fire on it.

**Anchor test.** "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." (Fig 2 :29). "If it moves when you push on it, it is not an anchor." (Fig 2 :29-30). A pattern whose existence is decided by the analysis choice moves when the analyst pushes on it, so it cannot be the anchor. "An anchor is legitimate when the question is constitutively about it." (Fig 2 :36): this question is constitutively about the system's ground-visible behaviour, so the anchor must be an intervention or independent reading of that behaviour, not the output of the pipeline that reported the pattern.

---

## 1. Figure census

### 1.1 Domain census, written before choosing any figure line

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

**R by arity, symmetry, scale.** Arity: at least three places (system S, choice M, observation O), so the object is a relation, not a property of the data alone. Symmetry: not symmetric. Changing M while holding S is not the same as changing S while holding M, which is precisely the asymmetry the question asks us to exploit. The "organizing principle" side carries a comparison (Fig 12 :85-89) against a threshold of stability, not a mere conjunction. Scale: the slot is a local measurement, the regularity is a population or time pattern, and the analysis transform crosses the membrane between them (Fig 4). The residual is therefore intrinsically cross-scale.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The system ground** | the system, its states and structures, its habitat | what the ground settles under intervention | yes: an intervention or independent reading that does not move when the analyst's frame changes | admitted |
| **D2 The measurement and analysis frame** | instrument, metric, transform, pipeline, code, analyst | fitted residual, compression achieved, pattern counts, credibility | none inside the frame; its only legitimate anchor is the ground outside it | admitted as a frame, barred from verdict authority by Fig 1 :27 |
| **D3 The pattern as composition** | atoms and the bonds between them | arrangement, `|φ|`, `left(R,φ)` | yes: settlement against the ground, and an instrument that discriminates isomers | admitted |
| **D4 Independent witnesses** | a second frame with a differing closure, a second instrument | agreement under low overlap | yes: the ground, triangulated (Fig 2 :31, Fig 8 :47) | admitted |
| **D5 The channel across choices and time** | percepts, metrics, conventions, thresholds | contact with the ground | yes: the ground, which persists while the channel decays (Fig 10 :24) | admitted |
| **X1 "The pattern is self-evident in the data"** | the dataset | salience | no anchor independent of the analysis that made it salient | not a domain yet |
| **X2 "A fit statistic or p-value is the verdict"** | the estimator | significance | measurable, but it is a convention inside D2 and a filter for budget, not a witness (Fig 9 :60) | absorbed into D2 |
| **X3 "The algorithm's output is itself a discovery"** | the pipeline | patterns produced | frame-internal quantity (Fig 1 :26-27) | absorbed into D2 |

X1 is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that the pattern is false.

**Partition or union.** These are overlapping conditions, so the whole is a **union**, not a partition. A pattern that fails anchor-invariance and a pattern that fails independence are not different degrees of one failure; they are different compounds with different instruments.

> "And when the split lands on a union rather than a partition, unbundle before you search again." (Fig 9 :54)
> "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." (Fig 9 :55)
> "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." (Fig 9 :57)

**Dependency order (Fig 3).** "The chain is ordered by dependency, not by importance." (Fig 3 :20). Order: 1 perception (can the channel register anything at all?) to 2 vocabulary (does the analysis have terms that distinguish a principle from an artifact?) to 3 objective (bind the shape and say what would count as progress) to 4 planning (which battery of tests) to 5 learn and carry (record the lineage). The middle link is the one that usually breaks: "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." (Fig 3 :26). "A link with no instrument is not a link that works. It is a link nobody has looked at." (Fig 3 :27).

Formula step 7 adds a second ordering that must not be confused with this one. Ask SEARCHED first, "is it in here and unfound?" (Formula step 7), then INWARD, then OUTWARD. "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other." (Fig 6 :31).

**Strain test applied during this census.** An early attempt to apply Fig 13's six physical substrate terms directly to "organizing principles" (calling a network "the Network structure" and a scaling law "a Spectrum") fit only by renaming terms from a different domain. That is a strain, so Fig 13 does **not** govern the identity of complex-systems patterns. Re-census sends Fig 13 to the honest-stop and derived-remainder roles only (section 6, strain S1). No other figure needed a strain after re-census.

### 1.2 Figure census table

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| **1 The Agent** | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and what may count as evidence |
| **2 The Ground** | anchor must not move; independence vs common pool | governs the invariance test and the witness rule |
| **3 Dependency Chain** | middle link breaks first; effort above the break is wasted | governs the order in which tests are run |
| **4 The Membrane** | lossy transform between scales; round trip `R_T` | governs the measurement transform and its measured gap |
| **5 Mint Pipeline** | three guards as product; "nothing new here" | governs whether a reported pattern is new at all |
| **6 Closure / Reachability** | `NOVEL` is relative to atoms; INWARD vs OUTWARD | governs depth versus genuine absence |
| **7 Room Chain** | agreement compounds, evidence does not | governs repeated analyses with the same frame |
| **8 Union Surplus** | provenance separates convergence from import; independence | governs the record and the independence of witnesses |
| **9 Leave / Arrive** | union vs partition; describe the effect, not the cause | governs the unbundling and the census itself |
| **10 Ground Maintainer** | declared meaning is not grounded; convention that decides an outcome | governs thresholds, bins and declared conventions |
| **11 The Habitat** | capability is agent-and-habitat; test harness is a substituted habitat | governs the analysis pipeline as an intervention |
| **12 The Bond** | arrangement is the substance; isomer, functional group | governs structure versus ingredient list |
| **13 Minimum Viable Set** | derived remainders are not members; unreachable is a verdict | governs the honest stop (not the identity of patterns) |
| **Operators table** | `⋛` comparison, `−` subtraction, `¬` negation | governs what a "difference between patterns" can be written as |
| **Symbols table** | `R` per slot; `R_T` as round-trip gap | governs the quantities being measured |

---

## 2. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable methodological prediction, `grounded` only if settled by a measurement. None is `grounded`. "Triangulated" here means two figures with low topical overlap inside one framework, not two independent evidence pools.

### F1 - The anchor-invariance test

**Mode: `general`. Domains D1, D5. Status: triangulated (Fig 2 anchor rule and Fig 10 channel decay, low topical overlap).**

> "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." (Fig 2 :29)
> "If it moves when you push on it, it is not an anchor." (Fig 2 :29-30)
> "The anchor must not update." (Fig 2 :33)
> "the ground does not decay, the channel does" (Fig 10 :24)
> "stale percepts, dropped transients, saturated metrics, pooled readings" (Fig 10 :25-26)

Hold the system fixed and push on the instrument. An organizing principle is a property of the system's contact with its ground and survives that push; a pattern produced by the measurement moves with it, or vanishes. The named decay modes are the concrete failure list: stale percepts, dropped transients, saturated metrics, pooled readings. This is the figure-grounded form of sensitivity analysis, but stronger, because it specifies what is being held fixed (the ground) and what is being varied (the frame).

**Refuter:** a pattern that is later demonstrated to be an artifact of a shared assumption, yet was invariant under every available instrument push and was accepted as a principle. That would show invariance is not sufficient.

**World bearing (secondary only):** Formenti et al. 2019, an open clinical measurement review, report that "Commonly encountered physiologic changes in the ICU, such as anasarca and hypothermia, introduce artifacts by altering amplitude and velocity recordings for nerve conduction studies", and that "echogenicity measurements are highly influenced by observer-dependent factors, such as the adjustment of the ultrasound probe." A real underlying state (muscle wasting) is distinguished from a reading that moves with the probe and the patient's fluid balance. This corroborates the invariance test in a field with no shared evidence pool with the framework. It is one witness, not a figure line.

### F2 - Independence decides whether agreement means anything

**Mode: `general`. Domains D2, D4. Status: triangulated (Fig 2 independence, Fig 8 union surplus, Fig 7 room chain).**

> "Independence, between two frames, is how little they draw on the same evidence." (Fig 2 :31)
> "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" (Fig 2 :40)
> "Independence is one quantity read twice." (Fig 8 :47)
> "Two frames together reach what neither reaches alone." (Fig 8 :45)
> "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced." (Fig 7 :36)

Two analyses that share the data, the model class, the metric and the prior agree because they are the same frame wearing two names. Their agreement is a convention, not corroboration. A genuine test requires a second frame whose closure differs and whose evidence is drawn from elsewhere. "Buy independence in proportion to the cost of being wrong." (Fig 2 :42).

**Refuter:** two analyses shown to draw on one data set, one metric class and one citation chain, whose agreement is nonetheless counted as two independent confirmations. Or, in the other direction, a pattern that survives a genuinely low-overlap second instrument and is still dismissed as an artifact with no further reason.

**World bearing:** the 2026 SynCo network-benchmarking paper notes that "ground-truth community labels are often unavailable and most algorithms proposed in recent literature rely on the same benchmark datasets for model training and evaluation." That is the shared-pool failure inside network science itself. Corroborates Fig 2 :31, low overlap with the framework.

### F3 - A frame cannot score itself with a quantity it produces

**Mode: `general`. Domain D2. Status: triangulated (Fig 1 disqualification and Fig 5 :48 output-not-success).**

> "The ground enters as the only metric." (Fig 1 :23)
> "coverage, and compression achieved" (Fig 1 :25)
> "predicates minted, and credibility accrued" (Fig 1 :26)
> "They are frame-internal. A frame cannot score itself with a quantity it also produces." (Fig 1 :27)
> "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing." (Fig 5 :48)

The number of clusters found, the variance explained, the compression achieved, the number of terms minted, the fit statistic: these are produced by the analysis and cannot be evidence that the analysis found the system's own structure. This is the exact error the question is about, restated as a figure law. The only admissible witness is something the frame does not produce.

**Refuter:** a pattern that is a deterministic output of the fitting procedure (for example, the chosen number of clusters) admitted as evidence of a real partition without an external probe that would fail if the partition were wrong.

**World bearing:** Clauset, Shalizi and Newman 2009 report that "Commonly used methods for analyzing power-law data, such as least-squares fitting, can produce substantially inaccurate estimates of parameters for power-law distributions, and even in cases where such methods return accurate answers they are still unsatisfactory because they give no indication of whether the data obey a power law at all." A fitting routine that always returns a slope cannot tell you whether there is a power law. Corroborates F3 from statistical data analysis, a field with low overlap with the framework.

### F4 - Novelty and the MDL bargain

**Mode: `general`. Domain D3. Status: triangulated (Fig 5 mint guards and Fig 6 reachability).**

> "it is not already in the library" (Fig 5 :25)
> "the machinery worked; the answer was already known." (Fig 5 :30)
> "The acceptance test is a bargain, not a threshold." (Fig 5 :42)
> "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly." (Fig 5 :43-44)
> "MINT composes inside the closure and can never add an atom." (Fig 6 :21)
> "NOVEL means novel relative to atoms, not to the world." (Fig 6 :22)

A pattern that is a recomposition of what the model already assumed is "nothing new here". Novelty is relative to the library, not to the world: a pattern surprising to the analyst does not qualify if the analysis class already contained it. The bargain asks whether stating the pattern plus what remains unexplained costs less than the unexplained residual before it. A pattern that explains one data set perfectly and transfers nowhere fails the same test.

**Refuter:** a pattern admitted as a new organizing principle when it is derivable from the model's own atoms and assumptions, with no external settlement and no improvement in `left(R,φ)`.

### F5 - Provenance is the whole issue

**Mode: `general`. Domains D3, D4. Status: triangulated (Fig 8 provenance, Fig 10 ruling provenance, Fig 13 lineage).**

> "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" (Fig 8 :51)
> "WHY THE LINEAGE IS THE PROOF" (Fig 13 :126)
> "The array cannot be checked by inspection, so the record is what makes it verifiable." (Fig 13 :127)
> "A ruling carries provenance like an atom." (Fig 10 :62)
> "Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record." (Fig 10 :65-66)

Two reports of the same pattern are indiscernible in their contents. If one was derived against the ground by a frame that did not hold the pattern in advance and the other was imposed by the analysis choice, only the record separates them. So the protocol must record, for each candidate pattern, which choices were fixed before the data were seen, which were chosen after, and what would have falsified the pattern at the time. A clean lineage is necessary and not sufficient: the ground still decides.

**Refuter:** a pattern whose lineage shows that its bin width, similarity metric or stopping rule was selected after seeing the result, yet is still treated as settled by the same data.

**World bearing:** *The Hard Problem is About Source* states that "the instrument is speaking only about what it measured, it cannot comment on the source." and "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it." This is framework-internal corroboration (same author as the figures), so it carries no independent witness weight. It is used for the canonical reading, not as a verdict.

### F6 - Analysis choice is a substituted habitat

**Mode: `general` for the structural claim, `specified` for its methodological consequence. Domains D2, D3. Status: triangulated (Fig 11 isolation and Fig 4 lossy transform).**

> "Isolation is not removal of the habitat. It is substitution of one habitat for another." (Fig 11 :66)
> "what you failed to reproduce, and what you brought with you" (Fig 11 :68)
> "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." (Fig 11 :70)
> "The transform between scales loses information, and that is the point." (Fig 4 :27)

Choosing an analysis pipeline is substituting a habitat for the system. Two things are then invisible: what the pipeline failed to reproduce from the system, and what the pipeline brought with it. A pattern found inside a synthetic or heavily processed habitat proves that the pipeline is wired a certain way, not that the system has that organization. This is why changing the pipeline is a test rather than a nuisance.

**Refuter:** a pattern that disappears when the pipeline is replaced by an independent instrument in a substituted habitat, yet is still classified as a property of the system with no further reason.

**World bearing:** the SynCo paper reports that "most existing generators rely heavily on power-law degree distributions, despite recent evidence indicating that scale-free networks are rare, particularly in social network contexts." A structural pattern was built into the generator and then rediscovered in its output. That is the substituted-habitat failure in network science. Corroborates F6 with low overlap.

### F7 - A declared meaning is not a grounded one

**Mode: `general`. Domain D5. Status: single-source (Fig 10), confirmed canonically in section 5.**

> "a declared meaning is not a grounded one" (Fig 10 :18)
> "the convention does not fix the bug" (Fig 10 :16)
> "→ install what can be violated" (Fig 10 :19)
> "a convention that decides an outcome has stopped being one" (Fig 10 :47)

A bin width, a significance threshold, a similarity cutoff or a declared cluster label has no truth value about the system. It becomes illegitimate the moment it decides the outcome: when changing the convention changes whether the pattern exists. The remedy is to install something that can be violated by the ground. A convention that cannot be violated is a constant the analyst authored, carrying the analyst's authority (Fig 10 :48).

**Refuter:** a threshold that determines whether the pattern exists, with no independent test that could fail, still counted as a grounded finding.

### F8 - Measure the round-trip gap, never set it to zero

**Mode: `general`. Domains D2, D5. Status: triangulated (Fig 4 round trip and Fig 9 effect-not-cause).**

> "The transform between scales loses information, and that is the point." (Fig 4 :27)
> "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." (Fig 4 :30)
> "your words are borrowed too, so describe the effect" (Fig 9 :30)
> "rather than the cause" (Fig 9 :31)

Every analysis is a lossy transform from the system to a description and back to a claim about the system. The round-trip gap `R_T = gap(x, (T_E ∘ T_A)(x))` measures what the coarser description cannot hold. Treating the description as identical to the system sets `R_T` to zero and is the dead-reckoning error the figure names. What drops out of the round trip is often exactly the difference between a principle and an artifact.

**Refuter:** a claim that the analysis output is a complete representation of the system with no residual gap, or an inability to say what a more concrete reading would contain that the abstraction discarded.

### F9 - Derived remainders are not organizing principles

**Mode: `general`. Domain D3. Status: single-source (Fig 13), with low-overlap world corroboration noted below.**

> "A continuum was the seventh and was removed for failing exactly this: it is a spectrum without gaps, or smoothness over space and time. A generating set must not contain what its own members produce." (Fig 13 :43-44)
> "Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member." (Fig 13 :124-125)
> "the detail a crossing discards reappears above it as noise." (Fig 13 :32)

Scaling, smoothness, discreteness, synchrony and fractality are candidates for "organizing principle" in complex systems work. Fig 13 says such quantities are what a composition leaves behind, not members of the generating set. A detected pattern can therefore be a remainder of how the system was composed or measured rather than a primitive organizing it. This does not make the pattern unreal; it makes the claim "this is the organizing principle" a category error of the same kind as adding a seventh substrate member.

**Refuter:** derive one of the six substrate terms from the other five, or show that a pattern commonly treated as a remainder is load-bearing in a law that does not depend on the measuring transform. Until then the reading stands as `general`, not `grounded`.

**World bearing:** the SynCo authors' remark that scale-free networks are "rare" despite generators assuming them (F6) is consistent with this: a much-reported pattern may be a remainder of the generation and fitting choices. This is corroboration of the shape, not a measurement of the figure claim.

### F10 - The question is a union; verdicts are not averaged

**Mode: `general`. Domains all. Status: triangulated (Fig 9 unbundling and Fig 3 dependency order).**

> "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." (Fig 9 :57)
> "Optimising a link that already works cannot rescue one that does not." (Fig 3 :19)

The tests are not interchangeable and their failures are not additive. A pattern that fails the anchor test needs a different instrument from one that fails the independence test or the convention test. A single lever, for example "replicate with a larger sample", clears the region where only one condition fails and leaves the intersections standing (Fig 9 :55). Any report that blends the tests into one "robustness score" has produced a pooled reading (Fig 10 :26) and destroyed the diagnostic.

**Refuter:** one intervention that restores all failing conditions in all failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F11 - What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per slot and per instrument, never a global pattern verdict | general | Fig 1 :19, :22 | figure-derived |
| A pattern that moves when the instrument is pushed is not an anchor | general | Fig 2 :29-30, :33 | triangulated F1 |
| Same-pool agreement is one witness | general | Fig 2 :31, :40; Fig 8 :47 | triangulated F2 |
| A frame cannot score itself with its own output | general | Fig 1 :25-27; Fig 5 :48 | triangulated F3 |
| Novelty is relative to the analysis library | general | Fig 5 :25, :30; Fig 6 :22 | triangulated F4 |
| Provenance separates convergence from choice | general | Fig 8 :51; Fig 10 :62-66; Fig 13 :126-127 | triangulated F5 |
| Analysis choice substitutes a habitat | general / specified | Fig 11 :66-70; Fig 4 :27 | triangulated F6 |
| A convention that decides the outcome is not grounded | general | Fig 10 :16-19, :47 | single-source F7 |
| The round-trip gap must be measured | general | Fig 4 :27-30 | triangulated F8 |
| Smoothness, scaling and discreteness may be remainders | general | Fig 13 :43-44, :124-125 | single-source F9 |
| The failure modes form a union | general | Fig 9 :54-57; Fig 3 :19 | triangulated F10 |
| Which specific pattern in a given system is genuine | not stated | none | gap: source-discriminating instrument not held |

---

## 3. Pre-registered refuter

Written before the conclusion, per the design-instrument rule. The shape claim is refuted if any of the following holds:

1. A pattern demonstrated to be an artifact of a shared assumption is nevertheless invariant under every available instrument push and is accepted as a principle (breaks F1).
2. Two analyses demonstrably drawing on one evidence pool are counted as two independent confirmations, or a genuinely low-overlap second instrument is dismissed with no further reason (breaks F2).
3. A deterministic output of the fitting procedure is admitted as ground evidence with no external probe that could fail (breaks F3).
4. A pattern derivable from the model's own atoms is admitted as new with no improvement in `left(R,φ)` (breaks F4).
5. A pattern whose lineage shows a post hoc choice of bin, metric or stopping rule is treated as settled by the same data (breaks F5 and F7).
6. A pattern treated as a remainder is shown to be load-bearing in a law independent of the measuring transform, or one of the six substrate terms is derived from the other five (breaks F9 and the figures themselves).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until an independent instrument has paid for a specific pattern in a specific system.

---

## 4. Recommendation

1. Lead with the residual and the refuter, not with a general theory of method (Fig 10 :52, "Bring a characterised residual, never the source").
2. Hold the system fixed and vary the choice; record which patterns move and which persist (F1).
3. Buy a second frame whose closure differs and whose evidence pool does not overlap (F2, Fig 2 :42). Do not count two readings of the same report as two frames.
4. Exclude every quantity the analysis produces from the witness list (F3). A robustness score computed by the same pipeline is not a witness.
5. Ask whether the pattern is novel relative to the library and whether it pays the MDL bargain (F4).
6. Record the lineage: what was fixed before the data, what was chosen after, and what would have failed (F5). Provenance is necessary, not sufficient.
7. Treat the pipeline as a substituted habitat and state what it failed to reproduce and what it brought with it (F6).
8. Make every convention violable; remove any threshold that decides the outcome by itself (F7).
9. Measure `R_T` rather than treating the description as the system (F8).
10. Keep the failure modes separate in every report. Do not blend them into one score (F10).
11. Stop at the shape. Do not claim which pattern is the real one for a system you have not ranged against an independent ground (Fig 9 :32, "you get a kind of thing, never the answer itself").

---

## 5. Canonical usage check

Canonical sources read after sections 0 to 4: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, and `FRAMEWORK/figures/THE_FORMULA.md`.

- The README confirms: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also gives the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw."
- The canonical limit: the framework returns "what a missing thing would have to look like (a shape, not a name)", then "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." This governs section 4's stop.
- WATSON 60 confirms that design questions are decided by derivation from the figures as metalaws, not by escalating for a human ruling. "The figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." No ruling is being requested here.
- The formula's mode rule and its Direction paragraph confirm that the sought-for shape must be bound as an ordinary term before the run, which is why section 0 binds the protocol explicitly.

---

## 6. Retractions and confirmations

| earlier move in this audit | status after the canonical check | reason |
|---|---|---|
| Applied Fig 13's six physical terms to complex-systems patterns ("network structure", "spectrum") | **Retracted, strain S1** | Fit only by renaming; re-census sends Fig 13 to the honest-stop and derived-remainder roles (F9) |
| Treated Clauset et al. 2009 as if it proved the figure verdict | **Narrowed to corroboration** | It is a world source from statistical data analysis, secondary and low overlap; the verdict comes from Fig 1 and Fig 5 |
| Wanted to name one "best test", for example replication, as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer; the answer here is a protocol of tests, not one privileged test |
| Read "independent instruments" as "two papers that agree" | **Corrected** | Fig 2 :31 defines independence by evidence overlap; two papers in one pool are one witness |
| Treated a clean lineage as sufficient for a pattern to be genuine | **Corrected** | Fig 10 :65-66: provenance shows legitimacy, not rightness; the ground still decides |
| Called F7 and F9 `triangulated` in an early draft | **Narrowed to `single-source`** | Each rests on one figure (Fig 10 and Fig 13 respectively); canonical essays corroborate but share the author's evidence pool |
| Used the source essay's metamerism passage as an independent witness | **Re-labelled framework-internal** | Same author as the figures; it is used for the canonical reading of "shape" in `05`, not as a second witness |
| Assumed an "organizing principle" is a nameable entity | **Bound as an ordinary term instead** | Formula "Direction": make the sought-for shape an ordinary term so it can accrue a residual and be refuted |

**Strains sent to the log:** S1 (Fig 13 applied to complex-systems patterns), resolved by re-census to the remainder role. S2 (calling a pattern "the system's own" while the habitat updates and the ground settles), resolved by Fig 11 :73: "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one test?** No. Fig 9 :54, :55, :57 plus the *Library of Babel* bundle passage: it is a union of failure conditions, each with its own instrument.
2. **What is the anchor?** The system's ground-visible behaviour under intervention, not the analysis output (Fig 2 :29-30).
3. **Can the frame score itself?** No. Fig 1 :27. Output quantities are frame-internal.
4. **Is the pattern new?** Only relative to the library (Fig 5 :25, Fig 6 :22), and only if it pays the bargain (Fig 5 :42).
5. **How do I know which of two agreeing analyses to believe?** Only the record of where each came from (Fig 8 :51), plus the overlap of their evidence (Fig 2 :31).
6. **What does the pipeline hide?** What it failed to reproduce and what it brought with it (Fig 11 :68, :70).
7. **What can be said at the stop?** A protocol that returns principle candidate, artifact, or undecided at this instrument, with named instruments and a recorded lineage. Not which pattern is real in any unexamined system. Fig 13 :134: "Unreachable is a verdict here, not a silence," and Fig 8 :39: "So a search that finds nothing is never a proof of absence."

---

## 8. Updated verdict

The shape survives. **A pattern counts as a candidate organizing principle only when it persists under a push on the instrument (Fig 2 :29-30), is confirmed by a frame with low evidence overlap (Fig 2 :31, Fig 8 :47), is not a quantity the analysis produces (Fig 1 :27), is novel relative to the library and pays the MDL bargain (Fig 5 :25, :42; Fig 6 :22), has a lineage that separates convergence from choice (Fig 8 :51), survives the substitution of habitat that the pipeline performs (Fig 11 :70), is not decided by a declared convention (Fig 10 :47), and is reported with a measured round-trip gap (Fig 4 :30).** The failure modes are kept separate and never averaged. Which specific pattern occupies that position in a particular system is a `gap`, not a hidden answer: the source-discriminating instrument is not held here. Mode `specified` on the protocol, `general` on the framework-internal rules. No world source was allowed to flip a verdict; the one apparent strain was returned to the census and re-mapped. No unresolved strain remains after re-census.
