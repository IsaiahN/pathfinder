# Figure-grounded audit: what evidence would show concepts rather than associations?

**Mode of this document: `specified`, not `grounded`.** It states the shape of an observation that would have
to be made. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the
ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap
records the author's own limit: *"LLMs can quickly simulate an approximate answer/output with the formula
found in the architecture post. It will often be better than the generic outputs that you will usually
get otherwise too. However, the truly testable output would need to be derived from the real architecture
or working the formula yourself."* This document is a simulated derivation checked for internal
consistency against the figures. It cannot settle the question it reports on. See
`05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, line numbers),
`FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, plus the public
sources in `10_source_ledger.csv`. Every `Fig N :line` quote below was checked against the local extract.

---

## 0. The residual in effect terms

Two hypotheses about one machine:

- **H_C:** the machine formed concepts.
- **H_A:** the machine learned useful associations.

The question asks for *evidence that discriminates them*. State this as a residual, not as a definition.
Let Γ be what the machine can express, `b` its belief, `a` its action, `o'` the observation, and
`R = |Γ(b,a) − o'|` per slot `s` (Symbols table). On any fixed distribution that the machine was trained
on, both H_C and H_A can drive `R` to near zero while differing in what they would do elsewhere.
The discrimination residual is the difference between the two hypotheses' predictions at the point of
contact. On training behavior it is zero. A question whose residual is zero on the only observation we
have is a question about *source*, not about *output*.

This is the first substantive finding and it is already figure-governed: *"If several paths create the same
behavior, then behavior is a projection with lossy information"* (Isaiah N, The Hard Problem is About
Source, 2026, first-hand). The task is to find an observation that separates the paths. An answer would
look like a described observation O, stated before any theory, such that O would be expected under H_C
and not under H_A. It is bound as an ordinary term here, so it can accrue a residual and be refused.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.**

- **Arity:** two hypotheses, but "concept" is not one condition. It bundles at least four: the machine holds a composed structure with typed bonds; that structure is settled and carries provenance (a lineage); it can refuse a term the ground refutes; and it transfers under changed contact. The question is therefore a **union compound**, not one hard question. Fig 9 :54-55: *"when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*
- **Symmetry:** discrimination is asymmetric. A failure under changed contact can refute H_C; a success cannot confirm it, because an association may mimic transfer over the probed range. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
- **Scale:** the internal composition lives at one scale (one machine, one library); the transfer test lives at the scale of agent-and-habitat; the verdict lives at the scale of a checking arrangement. These are different actors, currencies and grounds, so they need separate loops (Fig 10 :68).

**One line per domain: actors / currency / anchor.**

| domain | actors | currency | anchor (nameable?) | verdict |
|---|---|---|---|---|
| D1 Machine frame, internal | library Γ, atoms, bonds, per-slot residuals, terms | composition inside closure(Γ), settlement via `R` | yes: the per-slot residual, Fig 1 :23 *"The ground enters as the only metric."* | A concept is a settled molecule with a bond and a lineage. An association is a flat correlation carrying neither. |
| D2 Instrument frame | probes, interventions, benchmarks, changed-contact tests | residual under intervention | yes: a ground that does not move, Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* | Need a probe already returning a differential signal. Otherwise no edge to extend. |
| D3 Habitat / contact frame | environment, distribution, tasks, conditions | contact | yes: the ground, Fig 11 :39 *"capability is a property of agent-and-habitat, never of the agent alone."* | Transfer under changed contact is the behavioral discriminator; a synthetic solve is not. |
| D4 Verification frame | expert readers, the claim, the refuter | agreement and residuals | yes: the ground, never agreement, Fig 7 :35 | A room of agreeing readers cannot corroborate. In this simulated run all four domains draw on one evidence pool, so independence is zero. |

**Partition or union.** Union (above). Four conditions, four verdicts, never averaged.

**Dependency order (Fig 3).** Describe the residual in effect terms before choosing a frame (Fig 9 :27-28);
check the per-slot residual before the aggregate (Fig 1 :19); obtain a discriminating instrument before
claiming internal structure (Fig 6 :34-35); refuse before mint (Formula step 2); settle at the ground
before composing over the result (Formula step 5). Fig 3 :20: *"The chain is ordered by dependency, not by importance."*

Strain test applied during the census: an early reading wanted to use Fig 12's isomer definition as a
direct concept/association test. It does not fit without strain, because isomerism compares two
molecules over a shared atom set, not a molecule against a correlation. It governs a different quantity
(supporting derivation in `06_isomers_and_order.md`), so it was removed from the primary census.

---

## 2. Figure census (verbatim lines, quoted before concluding)

| figure | verbatim line used | bearing |
|---|---|---|
| 1 The Agent | Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* | evidence must be per item, not an average accuracy |
| 1 The Agent | Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* | a global score destroys the discriminator |
| 2 The Ground | Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* | the ground must not be the training distribution |
| 2 The Ground | Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* | agreement cannot stand in for the ground |
| 2 The Ground | Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* | this simulated audit is one pool |
| 3 Dependency Chain | Fig 3 :20 *"The chain is ordered by dependency, not by importance."* | order of the four conditions |
| 5 Mint Pipeline | Fig 5 :14 *"mechanism broken: a new term is owed"* | refutation needs a refusal operator |
| 6 Closure | Fig 6 :34-35 *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."* | no probe, no instrument |
| 7 Room Chain | Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* | expert agreement is not evidence |
| 8 Union Surplus | Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* | asymmetry of the discrimination |
| 8 Union Surplus | Fig 8 :51-52 *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."* | behavior cannot discriminate source |
| 9 Leave / Arrive | Fig 9 :27-28 *"describe it before you go looking, or any frame you pick will seem to fit"* | residual before frame |
| 9 Leave / Arrive | Fig 9 :32 *"you get a kind of thing, never the answer itself"* | shape, not a named test |
| 9 Leave / Arrive | Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* | ranking venues cannot decide the answer |
| 10 Ground Maintainer | Fig 10 :42 *"A verifier that can reconstruct the claim cannot verify it."* | two-stage offer |
| 11 The Habitat | Fig 11 :40 *"An improvement that does not change contact changes nothing, however much it improves."* | contact is the discriminator |
| 11 The Habitat | Fig 11 :70 *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."* | benchmarks prove wiring |
| 12 The Bond | Fig 12 :5 *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* | concept has bonds, association has ingredients |
| 12 The Bond | Fig 12 :111 *"A vocabulary without bonds can name a state and cannot name a route to one."* | flat correlation cannot encode a route |
| Operators table | Operators :58 *"a refutation is a negation, which is why a vocabulary without it can only accumulate"* | a one-way accumulator cannot refuse |
| 13 Minimum Viable Set | Fig 13 :127-128 *"Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available. The space has no last route and every turn begins from a remainder the last one left, so the order is not recoverable from the artefact. It is recoverable from the lineage."* | provenance is the internal discriminator |
| 13 Minimum Viable Set | Fig 13 :134 *"Unreachable is a verdict here, not a silence,"* | report no instrument honestly |
| 4 The Membrane | Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* | round trip gap in `11_audit.md` |

---

## 3. Findings F1 to F9

### F1 - Fixed-distribution behavior cannot discriminate concept from association (decisive)

Fig 8 :51-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."*

A concept hypothesis and an association hypothesis that produce the same outputs are identical in the
contents. Fig 1 :27 adds: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
Accuracy on the training distribution is produced by the very thing it is supposed to grade. Therefore
**no fixed-distribution benchmark result, however large, is evidence of concepts.** Verdict: `general`
(structural), triangulated across Fig 8 and Fig 1 (low overlap: surplus/provenance versus frame-internal
metric). Refuter: a proof that the mapping from internal source to training behavior is injective, so
that identical behavior could not arise from two different sources.

### F2 - Aggregate scores hide the only signal

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

An average over items tells you that the machine is right overall. The discriminator would be *which*
items it fails on and whether the failures cluster where the alleged concept should bind. Evidence must
be reported per slot: which object, which intervention, which residual. Verdict: `general`, triangulated
across Fig 1 :19 and :22 (same figure, two distinct statements, so single-source at figure level;
corroborated by the world source on overfitting below). Refuter: a demonstration that a global score
preserves the per-slot discrimination, which would make the indexing rule idle.

### F3 - The ground must not be the training distribution

Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*
Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."*
Fig 2 :29 defines the anchor as something that *"does not change its answer because of what any frame thinks."*

A held-out set drawn from the same distribution is still a substituted habitat. The discriminating
observation must change contact: intervention, distribution shift, novel combination, or a consequence
the machine did not train for. World corroboration, independent of the framework: Wikipedia on
overfitting records that *"overfitting occurs when a model begins to 'memorize' training data rather than
'learning' to generalize from a trend"* and that such learning adjusts to *"very specific random features
of the training data that have no causal relation to the target function"*. Verdict: `specified`,
triangulated across Fig 11 and the independent overfitting source. Refuter: a case where a system with no
change of contact nevertheless separates the two hypotheses by a proof internal to the machine, with
the ground agreeing.

### F4 - An instrument must already be returning something

Fig 6 :34-35: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

If no probe currently returns even a weak differential signal between two matched systems, there is no
proto-instrument to sharpen. Keep two facts distinct: underivable-in-principle (go outside, import a new
axis) and unreachable-at-this-budget (the discriminating probe is already in the closure, search more).
Fig 8 :40-43: *"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue
different instructions."* World corroboration from an independent field: color science records
*illuminant metameric failure* where *"two material samples match when viewed under one light source but
not another"* and that *"a method which can solve metamerism in fibres combines microscopy and
spectroscopy"* (Wikipedia, Metamerism (color)). The discriminator was a different instrument, not a
different argument. Verdict: `specified`, triangulated across Fig 6, Fig 8 and the color-science source.
Refuter: exhibit a discriminating instrument manufactured purely by search inside a closure that
returned no differential signal at the start.

### F5 - Internally, a concept is a settled molecule with a lineage; an association is a flat formula

Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*
Fig 13 :127-128: *"Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available. The space has no last route and every turn begins from a remainder the last one left, so the order is not recoverable from the artefact. It is recoverable from the lineage."*
Operators :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*

Under the figures, an association is a correlation with no typed bond, no origin record and no way to
say of a held regularity that it is false. A concept is a composed, settled term whose bond type and
lineage are part of the term. So a second, structurally independent class of evidence is available:
inspect the internal arrangement (does the model hold a reusable composed feature with a recorded
origin?) and inspect refusability (can it withdraw a term when the ground refutes it, rather than only
adding another weight?). World corroboration from a different subfield: mechanistic interpretability
*"aims to understand the internal workings of neural networks by analyzing their concrete structures,
algorithms and circuits"* and uses *"causal methods"* including activation and inhibition of circuits
(Wikipedia, Mechanistic interpretability). Verdict: `specified`, single-source at figure level (Fig 12 +
Operators are one framework pool), corroborated by an independent subfield. Refuter: show a system with
no compositional bond and no refusal operator that nevertheless satisfies every changed-contact test
and whose lineage check is empty, with the ground agreeing. That would make the internal condition
unnecessary.

### F6 - A concept-based label is not itself proof of a concept

The directly relevant 2026 JMLR paper warns that concept-based models *"are known to suffer from
information leakage, whereby models exploit unintended information encoded within the learned
concepts"* and that its leakage scores are *"strongly predictive of model behaviour under interventions"*
(Parisini, Chakraborti, Harbron, MacArthur and Banerji, JMLR 27(174), 2026, first-hand). A model that
outputs a named concept feature may simply have encoded the answer in that feature. This is Fig 8 :51-52
again, in a different field: the record of where the feature came from is the whole issue. Verdict:
`specified`, triangulated across Fig 8 and an independent peer-reviewed source. Refuter: an
intervention study showing the proposed concept feature is causally upstream of the output and carries
no task label beyond its stated content.

### F7 - The question is a union compound, so verdicts stay separate

Fig 9 :54-55: *"when the split lands on a union rather than a partition, unbundle before you search again."*
Fig 9 :57: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*
Book of Babel: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*
(first-hand, 2026).

The four conditions in the census (composition, lineage, refusal, changed-contact transfer) must be
reported as four verdicts with four modes. Averaging them into a "concept score" repeats the Fig 1 :22
error at the level of conditions. Verdict: `general`, triangulated across Fig 9 and an independent
essay that is inside the same author pool, so weak corroboration. Refuter: a proof that the four
conditions collapse to one under all admissible mappings.

### F8 - Agreement among readers is not the evidence

Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*
Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."*
Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

A list of sympathetic reviewers, a high citation count, or a consensus statement are all room effects.
The first contact must carry only the residual and its refuter. Verdict: `general`, triangulated across
Fig 7, Fig 10 and Fig 9. Refuter: a demonstration that agreement between low-overlap frames with a
shared immovable anchor has already been shown to produce a verdict without any ground reading (it
cannot be, by Fig 2 :35).

### F9 - The framework returns the shape of the evidence, not the name of a test

Fig 9 :32: *"you get a kind of thing, never the answer itself"*.
Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*.

Naming a specific benchmark as *the* concept test is a binding from the machine-learning frame onto a
shape, provenanced as such. The framework can say what any adequate discriminating observation must
look like: per slot, intervention-based, under changed contact, with a lineage check and a refusal
test. It cannot name which instrument will settle it. Verdict: `general`, triangulated across Fig 9 and
the canonical figures README (first-hand): the framework returns *"what a missing thing would have to
look like (a shape, not a name)"*. Refuter: a figure line that names a particular instrument as the
settler, after a genuine re-census.

---

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim in this folder is:

> No fixed-distribution behavioral observation can discriminate H_C from H_A. An adequate discriminator
> must be (i) indexed per slot, (ii) taken under changed contact with an immovable ground, (iii)
> triangulated with an internal check for a composed term with provenance and a refusal operator, and
> (iv) reported as separate domain verdicts, never averaged.

It is refuted if any of the following holds:

1. **Injectivity refuter.** A proof that training behavior determines internal source uniquely, so that concept and association cannot be behaviorally equivalent. This would collapse the metamerism premise at F1.
2. **Internal-condition refuter.** A system is found with no typed bond, no lineage record and no refusal operator, yet it passes every changed-contact probe and an independent internal inspection confirms the absence. That would show the F5 condition is unnecessary.
3. **Contact-condition refuter.** A system is found with full compositional lineage and working refusal that fails every changed-contact probe, while a matched association-only system passes. That would show the F3 condition is not sufficient.
4. **Ground refuter.** A ground reading, not an agreement, returns a result that reverses any of F1 to F5.

If any fires, the shape is withdrawn or narrowed and the correction is recorded here, not erased.

---

## 5. Recommendation

1. Lead with F1 and the pre-registered refuter. They are the parts a checker can refute in twenty minutes.
2. Ask the recipient what *they* would count as a failure of the shape claim before offering any framework material.
3. Do not present a named benchmark as the answer. Present the four conditions and ask which one they would attack first.
4. Treat concept-feature claims with the JMLR leakage result in hand: ask for the intervention evidence, not the feature name.
5. Use the public submission routes in `03_public_contact_points.csv`. No personal emails, no bulk send, no receptiveness rank.

---

## 6. Canonical usage check (figures README + formula, re-read after F1-F9)

Two local files govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` - *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"* and the canonical limit, a *"shape, not a name"*, stopping at the limit of the available instruments and recording the lineage so the stop is honest. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` - mode rule (`general | specified | grounded`); *"the ground settles it. Verified only by what pays. A gate is not the ground."*; *"the set of kinds is closed; the arrangements over it are not"* under step 7.

### Retractions and confirmations of my own earlier readings

| earlier reading in this derivation | status after canonical check |
|---|---|
| "Fig 12 isomerism is the concept/association discriminator" | **Retracted at census.** It governs two molecules over a shared atom set, not a molecule versus a flat correlation. It only fits with a strain, so by the strain test it governs another quantity. Moved to `06_isomers_and_order.md` as a supporting analogue, single-source. |
| "The concept question is one question about one test" | **Retracted.** Fig 9 :54-57 and the Book of Babel essay both force a union reading. Four separate verdicts now, never averaged. |
| "F1 is a proof that concepts and associations are metaphysically identical" | **Retracted.** Fig 8 :51-52 says the contents look identical, not that they are identical. *"Indiscernibility is not identity"* (figures README). The claim is about what behavior can discriminate, not about what exists. |
| "more benchmarks will eventually settle it" | **Retracted.** Fig 8 :32 *"no search, however long, adds an atom"* and Fig 6 :34-35. More of the same probe is budget, not a new witness. |
| "naming OOD transfer as the test is figure-derived" | **Narrowed.** The framework returns a shape. Naming transfer is a binding from the machine-learning frame, provenanced in `10_source_ledger.csv`, not a figure line. |
| "the Fig 8 convergent-line citation is :50" | **Corrected after verbatim check.** The line begins at :51 and wraps to :52. All citations now read Fig 8 :51-52. |
| "F3 triangulated across two independent fields" | **Kept.** Fig 11 and the independent overfitting source draw on different evidence pools. The essays and the figures share an author, so essay corroboration is recorded as weak throughout. |

### Seven-question recursive derivation (summary)

1. **Is the residual nonzero on training behavior?** No. F1, Fig 8 :51-52.
2. **Does aggregating help?** No. F2, Fig 1 :19 and :22.
3. **What changes contact?** Intervention under a ground that does not move. F3, Fig 11 :40 and :70.
4. **Is there an instrument?** Only if something already returns a differential signal. F4, Fig 6 :34-35. Differentiate this from a budget limit.
5. **What would internal evidence look like?** A composed term with a typed bond, a lineage and a refusal operator. F5, Fig 12 :5, Fig 13 :127-128, Operators :58.
6. **Can a named concept feature be trusted?** Not without intervention evidence. F6, JMLR 2026.
7. **Can one test settle all four conditions?** No. Union compound, F7. Shape not a name, F9.

### Updated verdict

The shape survives every re-census: the discriminating evidence is per slot, taken under changed contact,
triangulated with an internal composition and refusal check, and reported per domain. What does not
survive is any claim that a single benchmark, a named concept feature, or reader agreement settles the
question. Strains after re-census: **one named, none hidden**, the internal-structure class (F5) is
single-source at figure level and relies on an instrument that the framework itself says must already
be returning something (Fig 6 :34-35). It is recorded as a strain, not smoothed over.
