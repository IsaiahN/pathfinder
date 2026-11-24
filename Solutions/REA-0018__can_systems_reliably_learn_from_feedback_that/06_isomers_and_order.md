# Isomers and order: the three conditions as a union, and two regimes as one molecule

**Mode: `specified` on the structural claims, `general` on the ordering rule. This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).**

**Falsifier, written before the run:** if two degraded-feedback regimes that share the loop's atoms cannot be written with the same atoms and a different bond, or if the three conditions can be shown to be a partition with no overlapping intersections, the isomer claim and the union claim in this file both fail. Recorded here before the derivations for that reason.

## RESIDUAL

`01` left two structural questions open: (1) what is the order of the three conditions, so that effort is not spent on a link whose input never arrives; (2) are two noise regimes different *substances* over the same atoms, or merely different parameter settings of one substance? This file answers those two, and nothing else.

## DOMAIN CENSUS

Atoms held for this derivation are the loop's own terms from the Symbols table: `Γ` (library and prediction), `b` (belief), `w` (weighting), `a` (action), `o'` (observation), `R` (residual), `s` (slot), `φ` (candidate term), the ground, and the negation operator `¬` from the Operators table. Bonds held: the seven typed bonds and negation. No new primitive is available without an import with provenance and a shadow test (Fig 6 :23; Fig 8 :50-52).

## DERIVATION

### Q1 - Partition or union? (decisive)

- Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
- Fig 9 :55-57: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." And: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."
- The three conditions overlap in fact. A channel can be sparse *and* biased (the few readings it returns are a function of `b`). It can be inconsistent *and* biased (the two disagreeing readings are each pulled toward a different belief). A channel can be all three.
- ⇒ Sparse, inconsistent and biased form a **union**, not a three-way partition. A lever that fixes only sparsity (collect more readings) leaves the biased intersection standing, because the new readings still update on `b`. A lever that fixes only inconsistency (aggregate across annotators) leaves the sparse intersection standing, because averaging hides the live slot (Fig 1 :22).
- **World check, not a figure line:** Zhang et al. 2025 find that most disagreement comes from task underspecification and response style, and that standard reward models "predict decisive preference toward a single option, even when annotators preferences diverge" - a single lever applied to a union. Ghafouri et al. 2026 find filtering high-inconsistency annotators "flips majority harm classifications for 18.6% of prompts", so the levers interact. `specified`, unmeasured for any particular system. Triangulated for the union shape at the figure level; single-source per empirical figure.

### Q2 - Order by dependency (Fig 3)

The chain is ordered by dependency, not by importance: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces" (Fig 3 :20).

| link | question for degraded feedback | status test |
|---|---|---|
| 1 perception | is any slot returning a reading at any resolution? | Fig 6 :34-35: "the search for a proto-instrument is a search for one that is already there." If nothing registers anywhere, there is no edge to extend. |
| 2 vocabulary | are there terms for what the feedback affords: live mass, disagreement, dependence on `b`? | Fig 3 :7: "it has terms for what things afford: what can be moved, opened, joined, blocked". Without these, the channel is noise with no descriptor. |
| 3 objective | what would count as progress here, in the system's own terms? | S1-S5 in `01` section 0 is the bound objective. Before it is bound, "reliably" is a preference and "nothing here can see it" (Fig 5 :62-63). |
| 4 planning | a route to that objective under incomplete information | refuse before mint (formula step 2); SEARCHED before INWARD or OUTWARD (formula step 7). |
| 5 learn and carry | name what worked, settle it, carry a method not a recording | Fig 4 :22: "Only methods cross up. Only head starts come down." |

**Where the chain breaks.** Fig 3 :25-27: "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." For this question the break is link 3, the objective. Almost all effort in noise-robust learning lands on link 4 (new losses, new aggregators), because that is where the measurements already exist (Fig 3 :29-30). Link 3 is "a comparison, which is why a vocabulary without it cannot state one" (Fig 12 :52, on ⋛). Without a bound objective there is nothing to compare the result to.

- **Refuter:** a system that states what would count as progress under degraded feedback but whose metric was never checked at a non-updating ground. That is a declared objective, not a settled one, and would break this reading only if the system could show the ground settled it.

### Q3 - Are the two noise regimes isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Regime A (instance-independent noise): the bond between `o'_s` and `R_s` is a symmetric flip with a fixed rate, independent of the slot's representation frequency. Regime B (instance-dependent, biased noise): the bond between `o'_s` and `b` is a dependence, so the observation is a function of what the frame already holds.
- Both regimes use the same loop atoms (`Γ`, `b`, `w`, `a`, `o'`, `R`, `s`, ground). They differ in which typed bond attaches `o'` to the rest. By Fig 12 :117 they are **isomers**: same atoms, different bond, different substance. The difference is invisible if a paper reports only a single "noise rate" and omits the bond.
- Fig 12 :46: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands." This is the precise reason a scalar noise rate cannot distinguish the two regimes.
- Fig 12 :5: "The bond is the rest of the information, and it is the half nothing was recording." Liu 2021 measures exactly this: lower-frequency instances do not benefit from standard remedies, so the bond, not the rate, carries the consequence. Jiang et al. 2020 show that synthetic noise is a low-cost proxy for real web noise, i.e. a different bond presented under the same name.
- **Refuter (already registered at the head of this file):** show both regimes with the same atoms and the same bond, differing only in a scalar parameter, and with identical qualitative consequences for learning. Then the isomer claim fails and they are one substance at two settings.

### Q4 - Is "more data" a composition, a search, or an import?

- Fig 6 :21: "MINT composes inside the closure and can never add an atom." Fig 6 :49-50: "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."
- ⇒ If the needed discriminator (an instrument that tells a true reading from a biased one) is already in `closure(Γ)` and merely unfound, the remedy is SEARCHED: more of the space visited, with independent searchers (Fig 6 :53: "searchers drawing on the same evidence are one searcher wearing many names").
- If no such discriminator is in the closure, the remedy is OUTWARD import: describe the residual in effect terms and find the frame that already predicts its shape (Fig 8 :53 "Residual first, frame second"; Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit"). Underivable-in-principle and unreachable-at-budget are different facts (Fig 8 :40-43).
- Fig 8 :32: "no search, however long, adds an atom." So collecting more of the same kind of feedback cannot manufacture the missing discriminator. Hosking et al. 2024 are the world-side statement of this: preference scores under-represent factuality, so more preference pairs do not add the missing axis.

### Q5 - Anchor as catalyst, feedback as cycle

- Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." A non-updating anchor survives its own use: every frame ranges against it and it is not consumed by being consulted (Fig 2 :46: "Each frame is corrected by it separately, and what makes the correction sound is that neither frame can move it"). It is the catalyst of triangulation.
- Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." A feedback channel in which `o'` re-enters as `b` is a cycle. With an anchor, the sign closes on the ground; without one, it closes on the frame and is the coherent drift of Fig 2 :34. Fig 2 :35: "A mirror cannot correct you."
- Result: the same cycle topology, two different signs, two different substances. This is a second isomer claim, at the level of the loop rather than the noise regime, and it has the same falsifier: a cycle whose output re-enters as input and still closes on a non-updating ground without an anchor external to the frame.

## CONCLUSION

The three conditions are a union (Q1), the chain breaks at the objective link (Q2), two noise regimes are isomers over the loop's atoms when the bond is typed (Q3), "more data" is SEARCHED when the discriminator is in the closure and OUTWARD import when it is not (Q4), and the anchor/cycle pair is a catalyst versus a sign-changed cycle (Q5). These results need no new primitive, no import that moves the wall, and no naming of a seventh term. They preserve everything checkable in the ordinary "handle noisy feedback" framing while refusing the part that failed: treating the three adjectives as one dial and the benchmark score as a verdict.

## ANCHOR

Verbatim figure text extracted from the canonical local extract this session; `THE_FORMULA.md` and the Operators and Symbols tables read locally the same session; the nine world sources opened on 2026-11-23 and listed in `10_source_ledger.csv`. No measurement was taken by this agent.

## FIGURE CENSUS

Fig 1 :22 (averaging), Fig 2 :34/:35/:46 (anchor and mirror), Fig 3 :7/:20/:25-27/:29-30 (dependency order and the break), Fig 4 :22 (method versus recording), Fig 5 :62-63 (preference invisible), Fig 6 :21/:23/:34-35/:49-50/:53 (closure, proto-instrument, search), Fig 8 :32/:40-43/:50-52/:53 (import and residual first), Fig 9 :27-28/:54-57 (union and describe-first), Fig 11 :39-40 (capability and contact), Fig 12 :5/:46/:52/:117/:119/:121 (bond, isomer, catalyst, cycle), Operators :58 (negation), Symbols :20-26/:36-40 (belief, weighting, residual). Strains after re-census: none hidden; the isomorphism between a physical six-term atom set and the loop's own symbols is an analogy, not a claim that the loop's atoms are the six substrate terms.
