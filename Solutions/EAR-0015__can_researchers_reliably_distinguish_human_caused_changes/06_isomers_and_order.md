# Isomers, unions and order in the attribution question

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §5).

## RESIDUAL

The question "can researchers reliably distinguish human-caused changes in extreme events from natural variability?" arrives as one sentence. The supporting derivation asks three structural questions the main audit assumes:

1. Is the question a partition (a list of separate questions) or a union (overlapping conditions with a compound residue)?
2. Are the "class of events" claim and the "single event" claim two spellings of one thing, or two different substances built from the same ingredients?
3. In what order must the pieces be settled, and what does a reading below the break look like?

## DOMAIN CENSUS

Atoms held in this derivation: the observed event magnitude; the event definition (threshold, region, season); the factual-model distribution; the counterfactual-model distribution; internal variability; measurement error. Bonds held: the ordered comparison `⋛` (Fig 12 :53-54, "the test that identifies it": "swap them. Does it become a different thing? Yes."), sequence `→`, conjunction `+`, subtraction `-` and negation `¬`. No new atom is introduced. The world supplies bindings (which model, which dataset) but not new primitives.

---

## DERIVATION

### Q1 - Union or partition?

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

Fig 9 :57: "a case in two conditions is not a harder case of either"

The event magnitude is a compound: forced signal **and** internal variability **and** measurement error **and** model representation error. A longer observational record clears the measurement-error region and leaves the compound standing; a better model clears representation error and leaves internal variability standing; a multi-model ensemble reduces one family's bias and shares the others. No single lever empties the set, which is the signature of a union. So the question is three well-formed questions, not one hard one:

- U1: is the observed change real against the measurement anchor?
- U2: is the counterfactual baseline anchored and independent?
- U3: is the claim about a class or about one event?

**Falsifier for Q1:** if a single lever (one instrument, one dataset, one model) could clear all three conditions at once, so that U1, U2 and U3 fell together, the union reading would be wrong and the question would be a partition. That would let one global verdict stand.

### Q2 - Are the class claim and the single-event claim isomers?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Both claims use the same ingredient list: a magnitude, a location, a date, an observational dataset and a model ensemble. The notation on a slide would look identical: "the 2003 European heatwave was made more likely by climate change." But the bonds differ.

- **Class claim:** `observed distribution ⋛ counterfactual distribution`. The bond is an ordered comparison of two distributions. The result is a probability ratio, a property of a class. It is repeatable, testable against frequencies, and can be corroborated across frames.
- **Single-event claim:** `this one occurrence → this one source`. The bond is a sequence from an occurrence to a cause. But the occurrence is unique, the source is not registered by the magnitude, and no instrument at that resolution returns the source. The result is a source verdict that the ingredients cannot carry.

Same atoms, different bond, different substance. Under Fig 12's definition they are **isomers**: the difference is invisible in the English sentence and decisive in what can be checked. They are also members of a **functional group** (Fig 12 :124): both are "event attribution statements" in the literature, which is exactly why the group label hides the difference. The qualifier ("class" versus "singular") says which member.

This is the structural reason a single confidence label cannot be pasted across both. The class member can be settled by frequencies; the singular member cannot, because its outcome was one draw.

**Falsifier for Q2 (written before the run):** if a source-discriminating instrument returns the same source for a single event under two low-overlap framings, with observed frequencies matched, then the single-event claim is no longer a different substance carrying an unpayable bond. It becomes the same kind of term as the class claim, the isomer reading fails, and the functional-group reading stands instead.

### Q3 - Dependency order, and what a reading below the break looks like

Fig 3 :20: "The chain is ordered by dependency, not by importance."

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Fig 3 :22-23: "a reading taken below the break is not a weak reading. It is a reading of nothing."

The chain for this question:

1. **Perception:** is the event measured, and with what error? Instrument exists.
2. **Vocabulary:** what is the event class (threshold, region, season, variable)? This is the middle link that usually has no instrument. Definition changes the answer materially: a heatwave defined on temperature alone can yield a different result from one defined on heat stress (recorded in the IPCC chapter and in the Bellprat et al. paper read this session).
3. **Objective:** what would count as progress? For the class member, a bounded per-slot risk ratio with independent frames. For the singular member, a source verdict. Binding the objective before step 2 is how the singular member gets smuggled into a class study.
4. **Comparison:** compute `P_ALL / P_NAT`, check model reliability against observed frequencies, check independence between framings.
5. **Carry:** record the event definition, the datasets, the model family, the reliability check and the refuter, so the next event does not re-pay the derivation.

Most published effort lands at step 4, where the measurements already exist. If step 2 has no instrument, that effort arrives at a step that cannot use it. Fig 3 :19 and :22-23 are the governing lines.

**Falsifier for Q3:** if it is shown that event definition does not materially change the per-slot attribution across a representative set of events and framings, then steps 2 and 4 are not dependent as claimed, and the dependency order can be flattened. This is testable and has not been run here.

### Q4 - The comparison bond is ordered, not symmetric

Fig 12 :74: "swap them. Does it become a different thing? Yes." (the test for sequence; the same asymmetry applies to the ordered comparison `⋛` in Fig 12 :89: "is it about which is larger, rather than both being present? Yes.")

The risk ratio `P_factual / P_counterfactual` is not the same term as `P_counterfactual / P_factual`. Swapping the operands changes "made more likely" into "made less likely". A summary that reports only a magnitude without the direction has recorded the ingredients and lost the bond, which is Fig 12 :14-16's flat-formula failure: "the ingredients are recorded and the arrangement is not" and "nothing downstream can tell them apart". For cold extremes in a warming world the direction flips, so this is not a cosmetic point.

---

## FALSIFIER FOR THE WHOLE SUPPORTING DERIVATION

Written before the run: the derivation fails if any of the following holds.

1. A single lever clears U1, U2 and U3 together (kills the union reading, Q1).
2. A source-discriminating instrument makes the singular claim checkable in the same way as the class claim (kills the isomer reading, Q2).
3. Event definition is shown not to change per-slot attribution across representative framings (kills the dependency order, Q3).
4. A symmetric join is shown to be the correct bond for the attribution statement (kills Q4).

If any fires, `01_figure_grounded_audit.md` must be re-censused from the residual line, and the correction recorded there rather than silently applied.

## CONCLUSION

The question is a union of three conditions, not a partition (Q1). The class claim and the single-event claim are isomers: same ingredients, different bond, different substance, with the shared "event attribution" label acting as a functional group that hides the difference (Q2). The chain is ordered by dependency, with the event-definition link the instrument-poor middle link most likely to break (Q3). The comparison bond is ordered, so direction is part of the term (Q4). None of this imports a new primitive; it is a re-arrangement of atoms already held, which is why it can be checked against the figures without claiming a new scientific result.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the IPCC AR6 WG1 Chapter 11 page, Bellprat et al. 2019, Otto et al. 2024, Perkins-Kirkpatrick et al. 2022 and Naveau et al. 2020, all opened this session. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 3 (dependency order, reading below the break), Fig 9 (union versus partition), Fig 12 (isomer, functional group, ordered bonds, flat formula), Fig 6 (instrument rule), Fig 8 (no proof of absence), Fig 2 (independence). Strained after re-census: none. The apparent strain between "class" and "singular" is resolved by the isomer reading rather than by softening either claim.
