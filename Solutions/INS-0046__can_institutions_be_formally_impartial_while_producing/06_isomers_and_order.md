# Supporting derivation: union, bond type, order, and the aggregation analogue

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The question asks whether one institution can carry two properties at once. Before answering, three structural questions are owed: (1) is this a union or a partition, (2) which bond joins the two properties, and (3) in what order must they be assessed. A fourth analogue, aggregation reversal, explains why a single fairness score misleads.

## DOMAIN CENSUS (carried from `01`, not re-derived here)

- R: arity three (rule form, habitat, outcome distribution); symmetry mixed (one swap-invariant, one ordered comparison); scale step versus lineage.
- D1 rule form: actors = rule, adjudicator, blind categories; currency = decisions per case; anchor = declared criterion.
- D2 habitat: actors = entrants and their positions, conditions, relations; currency = contact; anchor = the ground.
- D3 outcome distribution: actors = per-group slots; currency = per-slot residual; anchor = measurement.
- Union: D1 ∩ D2 produces D3 as a compound with its own loop.
- Order (Fig 3): recognise the split, enumerate contact, measure per slot, check anchor independence, then decide.

---

## Q1 - Union or partition? (falsifier included)

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :5 "are not one hard question but several well-formed ones. Split it rather than search."

A partition would mean the rule's form and the outcome distribution never overlap: one institution, one property, no compound. They do overlap, in the stream of decisions the rule issues over the habitat. That overlap is the compound "an impartial rule run over an unequal habitat", and it has the distribution as its own ground. So the split lands on a union.

**Falsifier, written before the run:** if a case is found where the outcome distribution is fully determined by the rule's form with no habitat term (a closed urn with known contents), this is a partition, not a union, and Q1 falls. The inference is single-figure (Fig 9) and corroborated by the *Library of Babel* essay's bundle passage.

## Q2 - Which bond joins the two properties?

Fig 12 :59 "swap the operands. Does the meaning change? No." This is the test for the symmetric bond `+`: both hold at once, and exchanging operands changes nothing.
Fig 12 :85 "a threshold relation between two quantities" is the definition of the comparison bond `⋛` (Operators table :48 carries the same wording).

"Formally impartial" passes the symmetric test: exchange the group labels, the rule's decision should be unchanged. "Systematically unequal outcomes" does not: it is an ordered comparison of group-level quantities (which group is worse off), and swapping the operands changes the claim. So the two properties use different bond types. They cannot be one term held under one bond, and asking whether they "both hold" is asking about a conjunction of two different kinds of relation.

A further consequence: because `+` is symmetric, under it "k operands have k! spellings and one term" (Fig 12 :92). An impartiality claim that enumerates group labels as if each were a separate case is overcharging by log₂(k!) while undercharging the bond term. This is the notation error behind counting every group as a separate fairness finding when the rule treats them symmetrically.

**Falsifier:** if swapping group labels changes the rule's decision while the institution still claims formal impartiality, then the property was never a symmetric bond and Q2 must be re-censused as a failed convention, not a bond-type distinction.

## Q3 - Do the two properties form isomers?

Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

**As the question poses them, no.** The rule's form `{criterion, blind categories}` and the outcome distribution `{group tallies}` do not share an atom set, so the isomer definition fails. They are two members of a broader **functional class** of institutional claims: each is "a comparison over cases", with different atoms in the slots. Fig 12 :124 is the right frame: the group says what kind, the qualifier says which member.

**The stronger, checkable form:** two institutions with the same formal rule, the same habitat atoms, and a different arrangement of which structure mediates which contact, could be isomers. They would present identically under a formula that records only ingredients, and differ decisively in their distributions. That is a real isomer claim with a falsifier:

**Falsifier:** if either institution can be written without an atom the other requires (one has no habitat term, or no per-slot outcome), the isomer claim fails and the functional-class reading stands.

This mirrors the exemplar's rescue move: the weaker claim survives without the stronger one being forced.

## Q4 - What order do the assessments run in?

Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
Fig 9 :43 "The verdict tells you to leave. The lookup tells you where to go. Elimination is what you do after you arrive."
Fig 8 :53 "Residual first, frame second."

Formula step 2 requires a refusal before a mint when the term held is false. Here the term held is the question's own framing: "one institution, one property, yes or no". That framing is refused first (F1, F2), then the three domains are enumerated, then the legal and statistical frames are looked up by residual shape. Measuring outcomes before describing the residual is the inversion that makes any frame seem to fit.

Order by dependency:

1. Refuse the single-property framing.
2. Enumerate habitat contact (Fig 11 :43 "The habitat is enumerated, never composed.").
3. Measure per-slot outcomes (Fig 1 :19 "The residual is indexed by object slot, not aggregated.").
4. Check whether the impartiality rating moves under that measurement (Fig 2 anchor test).
5. Only then name a source, with provenance.

**Falsifier:** if step 4 changes step 2 (the rating moves when outcomes move, forcing a re-description of the habitat), the dependency order is wrong and the chain must be re-censused.

## Q5 - The aggregation analogue: Simpson's paradox

Simpson's paradox (Wikipedia, opened this session): "a trend appears in several groups of data but disappears or reverses when the groups are combined." The UC Berkeley admissions case is the standard institutional example: a pooled adverse reading reversed once department-level contact was enumerated.

This is the world-side analogue of Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." It predicts exactly what the figures predict: a single institution-level fairness score can read as neutral while every relevant subgroup slot carries a live residual, and enumerating habitat contact can flip the sign.

**Falsifier:** a case where disaggregating by habitat contact leaves the pooled reading unchanged in sign and magnitude. Then the analogue is silent here and Fig 1 :22 governs only the measurement resolution, not this domain.

## Q6 - Anchors and the ceiling of this derivation

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when"
Fig 10 :58 "A seat with no stake at all does not exist." (from "The cost is not only that the rule describes nobody...")

No figure line was found that decides whether an institution *ought* to be answerable for its distribution. The figures decide composability and measurement; they do not decide values. That is a declared `gap`, not a silence to be filled with a preference.

**Falsifier for the gap:** a figure line that governs a normative "ought" directly. If one is found in re-census, this section is withdrawn.

---

## CONCLUSION

The question is a union compound (Q1), its two properties use different bond types (Q2), they are a functional class rather than isomers as posed, with a real isomer claim available under a stricter atom set (Q3), and their assessments run in a fixed dependency order that refuses the framing before minting an answer (Q4). The Simpson's paradox analogue corroborates the per-slot requirement (Q5). The normative "ought" is a gap (Q6).

What survives is a checkable structural claim: a symmetric convention over an asymmetric habitat yields an asymmetric distribution, and the two descriptions do not share an anchor. No new primitive, no import that moves the wall, and no naming of a guilty institution is needed to state it.

## ANCHOR

Verbatim figure text extracted from the canonical SVGs this session (`FRAMEWORK/reference/03-FIGURES_TEXT.md`), the formula and figures README, and the world sources opened and logged in `10_source_ledger.csv`. No institutional measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual, aggregation), Fig 2 (anchor test), Fig 3 (dependency order), Fig 8 (residual first), Fig 9 (union versus partition, split), Fig 11 (enumeration of habitat), Fig 12 (symmetric bond test, comparison bond, isomer, functional group), Formula step 2 (refuse before mint). Strained after re-census: none; the type constraint on `⋛` operands is named in `01` F7 and is not smoothed here.
