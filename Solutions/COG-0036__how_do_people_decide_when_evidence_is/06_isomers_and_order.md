# The three decision questions, the two operators, and the cost-of-delay analogue

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The main audit leaves three structural questions open: what is the order of the decision questions, which operator does the stopping work, and what cross-field analogue would let a researcher recognise the shape without adopting the framework. A fourth question is a correction to my own reading in `05`.

## DOMAIN CENSUS

Atoms held: `R` residual, `s` slot, `Gamma` library, `b` belief, `a` action, `o'` observation, `phi` candidate term, the seven bonds plus negation (Symbols table, Operators table). No new primitive is available without import. Currencies held: description bits and settling actions (Fig 12 :125-127). Anchors: the paid outcome for the decision domains, behavioural data for the verification frame.

---

## Q1 — Does "shape, not a name" forbid a procedure at all? CORRECTION TO MY OWN SECTION 3 of `05`

- The canonical README: "what a **missing** thing would have to look like (a shape, not a name)". The subject is a primitive not held in the library.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" and Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it."
- `⋛`, `R` and `s` are already in the operators and symbols tables. Saying "sufficiency is a comparison" binds onto held vocabulary, it does not mint a seventh primitive.
- **I overstated this earlier.** The rule forbids naming a missing primitive, and it forbids naming a numeric threshold or a cognitive mechanism that the ground has not paid for. It does not forbid structural statements over held atoms. Retracted as applied to the comparison claim; triangulated (README + Fig 13 + Operators table).

## Q2 — What order are the three questions?

Fig 9 :6-8 names them: "the verdict: is φ* in here at all?", "the lookup: which frame holds it?", "the narrowing: which one is it?". Fig 9 :43 "The verdict tells you to leave. The lookup tells you where to go. Elimination is what you do after you arrive."

For the stop decision:

1. **SEARCHED first.** Fig 6 :49 "more search at the same reach: is it in here and unfound? The closure does not change." Distribute independent searchers before assuming a new mechanism is needed (Fig 6 :50).
2. **INWARD second**, from an instrument already returning something: sharpen the representation in our own terms (Fig 6 :29).
3. **OUTWARD last**, import only after characterising the residual in effect terms (Fig 6 :30).

INWARD and OUTWARD are opposed and must never be read against one another (THE_FORMULA step 7). Underivable-in-principle and unreachable-at-this-budget are different facts with different instructions. Importing against a budget limit "adds an atom that was not needed" (Fig 8 :40-42).

**Falsifier for this order:** a demonstration that a stop decision can be improved by importing a new state variable before any independent search at the existing reach has been run, in a task where the residual is reachable. That would invert step 7 and break the order.

## Q3 — Which operator does the stopping work, and which does the minting work?

- `⋛` is comparison: Fig 12 :87 "a threshold relation between two quantities" and :89 "is it about which is larger, rather than both being present? Yes." The operators table :51-52: "a goal is a comparison, which is why a vocabulary without it cannot state one".
- Fig 5 :42 "The acceptance test is a bargain, not a threshold." THE_FORMULA step 3: accept iff `cost(phi) + left(R,phi) < cost(R)`.
- Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction." Operators :46 "progress is a subtraction, which is why a vocabulary without it cannot say how far along it is".

So: **act** is a `⋛` comparison between remaining residual and cost of waiting; **mint** is a bargain between stated cost, leftover and prior cost; **progress** is a subtraction on the residual. Three different operators. A decision model that treats all three as one scalar is the flat-formula failure Fig 12 names: "the ingredients are recorded and the arrangement is not" (Fig 12 :14).

**Falsifier:** a single measured rule that correctly predicts both when to act and when a new belief is warranted, with no distinguishable comparison and bargain, and that survives across tasks. That would collapse the distinction and break this derivation.

## Q4 — Is there a low-overlap analogue for the cost of delay?

Four independent frames, each with actors / currency / anchor:

| frame | actors | currency | anchor | stop rule | field overlap |
|---|---|---|---|---|---|
| Marginal value theorem | forager, patch, habitat | intake rate vs opportunity cost of time | long-run reward rate | leave when marginal gain in patch falls to the habitat average | low, animal behaviour |
| Wald SPRT | sampler, two hypotheses | likelihood ratio vs two boundaries | error rates | stop when the ratio crosses a boundary; minimal expected sample at matched errors | low, mathematics |
| Drift diffusion | accumulator, two options | noisy evidence vs boundary | reward rate / accuracy | stop when evidence hits a bound; time pressure lowers the bound | low, decision neuroscience |
| Satisficing | searcher, alternatives | alternative value vs aspiration level | aspiration, adjusted by experience | stop at first alternative meeting the level | low, economics and JDM |

What all four share is the **shape**: a threshold comparison between a current yield and a cost or criterion, with the threshold moving when the environment changes. What they do not share is a mechanism. That is exactly the metamerism point from `05`: several sources can produce the same stopping behaviour.

**Strain, named.** The four analogues trade in a single currency (reward, likelihood, evidence, value), while Fig 12 :125-127 insists that composition bits and settling actions do not add. Re-census from section 5 of `01` holds: the analogues price an ecological choice within a frame; the figure prices a composition inside a frame. Different objects. No verdict flip. The analogue corroborates the comparison shape; it does not corroborate the two-currency claim.

**Falsifier, written before the run:** if a well-controlled study shows stop thresholds that are invariant to a manipulated opportunity cost of time in a task where the normative optimum clearly shifts, the analogue fails and the cost-of-delay part of the shape is withdrawn.

## Q5 — What order is the union?

Fig 3 :20-21 "The chain is ordered by dependency, not by importance." Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it." So:

1. Track the residual per slot.
2. Describe the residual in effect terms.
3. Compare remaining residual against delay cost.
4. Act or refuse.
5. Let the ground settle it; the settled decision becomes an operand for the next episode.

A stop rule learned this way is second order over first-order episodes. It needs no new primitive: the settled episode becomes an atom at the next level (Fig 12 :104). The library can grow while the reach stays put (Formula step 8), so counting decisions made is not measuring improvement.

## CONCLUSION

The three decision questions are ordered SEARCHED, INWARD, OUTWARD. The act is a `⋛` comparison; the mint is a bargain; progress is a subtraction. Four independent fields provide low-overlap analogues of the comparison shape, but none supplies the framework's numeric threshold or the two-currency constraint, and their single-currency trade is a strain resolved by re-census as a difference of level. The union of episodes is second order and uses only held atoms. Every claim here is `specified`; none is `grounded`.

## ANCHOR

Verbatim figure text extracted from the local SVG text file this session; the canonical figures README; `THE_FORMULA.md`; eight essays read this session; world sources in `10_source_ledger.csv`. No measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order), Fig 5 (bargain, persistent flat residual), Fig 6 (inward/outward, distributed search), Fig 8 (idempotent closure, import against budget), Fig 9 (three questions, compound, filters vs witnesses), Fig 12 (comparison, subtraction, flat formula, settled molecule), Fig 13 (missing thing, no name), Operators table, Symbols table, THE_FORMULA steps 3, 5, 7. Strains after re-census: one, the single-currency analogues versus the two-currency rule, named and resolved as a level difference.
