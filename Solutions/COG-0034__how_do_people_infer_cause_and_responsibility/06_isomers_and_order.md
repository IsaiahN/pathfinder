# Bonds, order and isomers in multi-factor attribution

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

Two questions are owed after `01_figure_grounded_audit.md`: (1) can the relations people attribute among factors be written with the held operators rather than requiring a new one, and (2) are two explanations with the same factor set but different relations **isomers** under Fig 12's definition? A related third question: where does the order come from, and does negation have a role?

## DOMAIN CENSUS

Atoms held: candidate factors, actors, outcomes and conditions, all enumerated from the vignette (Fig 11 :43). Operators held: the seven bonds plus negation, which is unary and not a bond (Operators table :70-78). No new operator is available without import. Anchor for this supporting derivation: the verbatim figure text; no empirical study was run.

## DERIVATION

### Q1 - The causal schemata are three bonds, not three new primitives

The opened Wikipedia entry "Covariation model" (2026) records Kelley's three schemata:

- **Multiple sufficient causes:** either A or B suffices. This is disjunction `∥`: "either suffices; not both required" (Fig 12 :63).
- **Multiple necessary causes:** both A and B are required. This is conjunction `+`: "both hold at once" (Fig 12 :57).
- **Compensatory causes:** the effect occurs if either factor is maximal or both are moderate. This is comparison `⋛`: Fig 12 :87 "a threshold relation between two quantities".

A causal chain (A then B, B needs A) is sequence `→`: Fig 12 :71 "A then B; B needs A to have happened". A factor that brings about a new state is production `⇒`: Fig 12 :75 "A produces B; B did not exist before". A counterfactual that removes a factor is subtraction `-`, and the Operators table :73 is explicit that "− is A with B removed or absent, which is the absence of an operand." Refusing a causal claim is negation `¬`, which "is the refusal of a claim" and is not subtraction.

**Conclusion:** the world relations need no new operator. This is a **binding** of world vocabulary onto held operators (provenance in `10_source_ledger.csv`), not a figure derivation. A vocabulary with `-` but without `¬` could say what factor was absent and could not say that an attribution was wrong; it could only accumulate. **Mode: `specified`, triangulated** for the bond definitions (Fig 12 plus Operators table), single-source for the Kelley mapping.

### Q2 - Are two explanations with the same factors isomers?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Take one factor set `{person, task difficulty, time pressure}` and two readings:

- Sufficient reading: any one of the three could have produced the error. `person ∥ difficulty ∥ pressure`.
- Necessary reading: the error required all three together. `person + difficulty + pressure`.

Same atoms, different bonds, different explanation. If the two readings also produce different responsibility judgments, which is what the world literature on necessary versus sufficient causes suggests, the pair is an isomer pair under Fig 12 :117. If they produce the same judgment, the atom set was not the substance and the difference is notational.

**Falsifier, written before the run:** if a controlled study presents the same factor set under necessary and sufficient readings and responsibility ratings do not differ beyond measurement error, the isomer claim fails for this domain and the flat-form claim (Fig 12 :5) is weakened here.

**Status:** `specified`, unmeasured, single-source for the figure definition.

### Q3 - Catalyst, standing conditions and blame

Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

A standing condition (an unlit stairwell, a policy that permits an override, a culture of deference) survives the episode and acts again. A trigger is spent by the episode. They can have the same atom in the factor list and behave differently across uses, and the list alone does not record which is which. This is the figure-level reason a frequency count of factors cannot settle responsibility. The safety-engineering source supplies the world vocabulary: latent failures lie dormant until they contribute; active failures are directly linked to the event.

**Falsifier:** if a study shows that repeated exposure to the same standing condition produces no accumulating attribution of responsibility while a one-off trigger produces the same attribution at every exposure, the catalyst distinction fails here.

### Q4 - Order and feedback

Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." An attribution can close a loop: the blame assigned in one episode becomes a condition of the next (a person labelled careless is watched more closely, so more of their errors are seen). A chain representation cannot express that; a cycle can, and its sign decides whether it amplifies or damps. **Mode: `general`**, triangulated across Fig 3 and Fig 12.

The order is not a claim that one factor must be named first. Fig 3 :18 says where a chain stops is a reading, never a property of the chain.

### Q5 - What the union is

Cause detection and responsibility attribution are not variants of one another. They share atoms (the same actors and the same outcome) but differ in anchor: a factor manipulation for one, a norm or decision for the other. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." The right composition is at second order, after each condition's own loop has settled, and Fig 12 :104 permits each settled result to become an atom for the next level. **Mode: `specified`, single-source for the figure line, corroborated by the essay *The Library of Babel*.**

## CONCLUSION

The relations people infer among factors need no new primitive: sufficient, necessary, threshold, sequence, production, subtraction and refusal map onto seven held operators plus negation. Two readings of the same factor set are genuine isomers if they change the responsibility judgment, and that is a testable claim with a stated falsifier. Standing conditions and triggers are distinguishable only across uses, which is why a single-episode factor list cannot decide blame. Feedback makes the attribution a cycle rather than a chain. The union of cause and responsibility is second order. None of this is measured here.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; the Operators table; the eight essays; the opened Wikipedia entries "Covariation model", "Swiss cheese model" and "Causal reasoning". No empirical measurement was taken.

## FIGURE CENSUS

Fig 3 (dependency order, where a chain stops), Fig 9 (union before search), Fig 11 (enumerated habitat), Fig 12 (bonds, isomer, catalyst, cycle, settled molecule), Operators table (negation versus subtraction), Symbols table (residual per slot). Strains after re-census: none. The Knobe/Fig 11 strain was resolved in `01_figure_grounded_audit.md` section 4 and is not recycled here.
