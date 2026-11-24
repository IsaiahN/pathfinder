# Supporting derivation: isomers of a report, and the order in which domains settle

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6). Every figure quote is from `FRAMEWORK/reference/03-FIGURES_TEXT.md`.

## RESIDUAL

Two questions are owed beyond the main audit:

1. Are the competing uncertainty representations really different things, or are they the same ingredients spelled differently? If they are the same thing, the recommendation to choose among them is bookkeeping.
2. In what order must the four census domains be settled, and which link is most likely to be broken without an instrument?

## DOMAIN CENSUS (carried from `01`, not re-derived here)

D1 within-mechanism variation: currency probability mass per slot, anchor measured frequencies. D2 mechanism uncertainty: currency description cost and reach, anchor ground plus a differing closure. D3 verification: currency score against outcome, anchor ground. D4 decision: currency bits and actions, anchor declared cost if wrong.

Atoms held in the reporting vocabulary: a distribution family, bounds on a parameter, a set of candidate mechanisms, an observation, a score, a cost. Bonds held: the seven, especially `−` subtraction (remove an operand), `⋛` comparison (a threshold relation), `→` sequence, and negation `¬` (refuse a claim). No new primitive is available without import.

## Q1: Are the alternative representations isomers?

Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Consider two reports over the same atoms:

- **Report A:** a single distribution family with *interval-valued parameters* (a parameter interval under a fixed family).
- **Report B:** an *interval of distributions* (a p-box, a credal set over the same family).

Both hold the same ingredients: a family, bounds, outcomes, a score. Under a flat notation both would be written "family + bounds + outcomes." Fig 12 :5 says "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

The bonds differ:

- In A, the bound attaches to the *parameter* inside the family. The bond is a comparison `⋛` over the parameter value, inside a fixed generator. Sampling is nested: draw a parameter from its interval, then draw an outcome.
- In B, the bound attaches to the *whole distribution*. The bond is a constraint over the generator itself. Sampling is over a set of generators.

Same atoms, different bond, different substance. They answer different questions: A says how badly a known generator is calibrated; B says which generators are still admissible. Conflating them is the flat-formula error. Fig 12 :14-16: "the ingredients are recorded and the arrangement is not / nothing downstream can tell them apart, / and nothing signals that anything was lost."

This is a real isomer claim, not an analogy: under a symmetric bond k operands have k! spellings and one term (Fig 12 :92), so the notation has to record which bond is present or a search will count two different reports as one candidate.

**Falsifier, written before the run:** if a pre-registered decision task shows that Report A and Report B induce the same action and the same ground score in every tested cell, they are not isomers for that task. They are one term with two spellings, and the recommendation to distinguish them collapses into a notation preference. The cells and the score must be fixed before the test.

**Status:** triangulated for the definition (Fig 12 :117 and Fig 12 :5, a definition and a failure mode); single-source for the specific A/B application until a ground score runs.

## Q2: What is the relation between "structural absence" and "mechanism ignorance"?

Not identity, and not a harder version of the same thing. Fig 13 :35-36: "Space, time and energy are not three readings of one quantity. Neither are spectrum, gradient and network. Each answers a question the other two cannot." Read structurally: parameter uncertainty and mechanism-class absence answer different questions. One asks how far a held generator can be trusted; the other asks whether the generator is in the library at all.

Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." From inside, both are a wide interval. The distinction is made by the route, not the width:

- Depth: the residual trends down as data arrives. Remedy is SEARCHED then INWARD.
- Absence: the residual persists and does not trend down. Remedy is a refusal followed by OUTWARD import (Formula step 2 and step 7).

Operators matter. Negation `¬` refuses a claim; subtraction `−` removes an operand. Operators table :73: "− is A with B removed or absent, which is the absence of an operand. Negation is the refusal of a claim. A vocabulary with − and without ¬ can only ever accumulate." A UQ vocabulary that can only widen intervals has `−` but not `¬`: it can say a mechanism is absent from the set and cannot say the claim "the mechanism is in the set" is false. That is why the structural field must be a refusal, not just another interval.

**Falsifier:** show a case where a persistent, flat residual is removed by adding data inside the same frame with no new atom and no instrument repair. Then the flat-residual diagnostic does not separate absence from depth, and F4 in the main audit is narrowed to a heuristic.

**Status:** triangulated (Fig 6 :27 plus Operators :73; a reachability claim and an operator rule).

## Q3: What order do the domains settle in?

Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."

The dependency order for this question:

1. **Describe R per slot** (Fig 9 :27-28). Without this, the frame chosen for the rest will seem to fit for the wrong reason.
2. **Unbundle the union compound** (Fig 9 :54). A case in two conditions is a specific compound, not a harder single case.
3. **Settle within-mechanism variation** in D1. A first-order molecule must settle before it can become an atom for the next level (Fig 12 :104).
4. **Route the mechanism residual** in D2: SEARCHED first, then INWARD or OUTWARD as separate tracks, never read against one another (Formula step 7).
5. **Audit independence and score against the ground** in D3. Agreement is not the verdict (Fig 2 :35).
6. **Price the decision** in D4 with bits and actions held apart (Fig 12 :125-130).

**Which link is most likely to break without an instrument?** Link 3, the D1 to D2 boundary: distinguishing a flat structural residual from a saturated sensor. Fig 3 :25-27 says the middle link has "neither" obvious failures nor obvious tests, and "A link with no instrument is not a link that works. It is a link nobody has looked at." The practical instrument here is a held-out, ground-scored comparison with a pre-registered saturation check. Without it, steps 4 to 6 consume a diagnosis they do not have.

**Falsifier:** show that in a representative set of cases the D1 to D2 boundary is settled reliably without any instrument beyond the model's own residual trace. Then the dependency claim is wrong for that class and effort should move directly to D3.

**Status:** single-source for the specific break point (Fig 3 :25-27), corroborated at low overlap by Baranski and Petrusic (1994), who found that trial-by-trial feedback improved resolution but not calibration without ground-backed correction.

## Q4: Is the structured report a catalyst or just a container?

Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

The independence audit (field 4 of the recommendation) is catalyst-like in one respect and not in another. It survives its use as a check on one forecast and can be reused on the next, so it is not spent by being applied. But it is regenerated only if new, independently sourced evidence arrives; if every new candidate is drawn from the same pool, the audit is a constant dressed as a measurement. Fig 10 :80-81: "Frames whose independence is renewed by separate experience can be maintained; frames whose correlation is fixed at origin can only be rotated, because no amount of use makes them less alike and replacement is the only refresh."

So a repeated independence audit over the same pool is a record of one occasion, not a reusable method. The practical rule is to record the source of every candidate's evidence and to require separate experience for renewal.

**Falsifier:** a case where rotating the same fixed pool produces a genuinely different independence measurement with no new experience. Then the audit is a catalyst after all and the renewal rule is too strict.

**Status:** single-source (Fig 12 :119 plus Fig 10 :80-81, two different figures but both from the same framework; internal consistency, not independent corroboration).

## CONCLUSION

The alternative report forms are genuine isomers: same atoms, different bond, different behaviour, and the difference is invisible in a flat notation. Structural absence is not a wider interval but a different operator (refusal, not subtraction). The dependency order settles D1 before D2 and scores at D3 only after a verdict is fixed, with the D1 to D2 boundary as the likely silent break. The independence audit is a catalyst only while its evidence is renewed by separate experience.

This rescues the part of the UQ literature that is worth keeping (separate representations, proper scores, independence checks) without accepting the part that fails (additive recombination, a single scalar, and the claim that a wide interval identifies its own source).

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` on 2026-11-22; the Operators table in the same extract; `THE_FORMULA.md`; the eight essays. No numerical measurement was used.

## FIGURE CENSUS

Fig 3 (dependency, middle link), Fig 6 (depth versus absence), Fig 9 (describe before looking, unbundle), Fig 10 (independence renewal), Fig 12 (isomer, catalyst, two currencies, settled molecule), Fig 13 (non-identical kinds), Operators table (negation versus subtraction), Symbols table (R per slot). Strains after re-census: none hidden; Q1 and Q3 are marked single-source for their specific applications.
