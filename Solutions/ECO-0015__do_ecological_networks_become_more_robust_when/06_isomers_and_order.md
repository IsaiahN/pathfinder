# Loop sign, loop length, and isomers of interaction strength

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The literature asks whether weak or strong interactions confer robustness. Two structural questions are owed before that can be answered: (1) does the sign of a loop, rather than the magnitude of its links, decide whether the loop closes stably, and (2) are two webs with the same multiset of interaction strengths but different placements **isomers** under Fig 12's definition?

## DOMAIN CENSUS

Atoms held in the ecology frame: species, links, magnitudes, signs, loops, biomass distributions. Bonds held: the seven, of which `→` sequence and `⋛` comparison are used here, and `¬` negation is used for the refutation. No new primitive is available without import from the measurement frame. Strains S1 and S2 from `01` section 2 remain re-censused: the six physical terms of Fig 13 are not ecological atoms, and Fig 12's bit-price is not interaction magnitude.

## DERIVATION

### Q1: Does loop sign decide closure?

- Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- A food-web loop is a cycle, not a chain. A chain of weak links cannot close at all, so "many weak links" is not by itself a stability mechanism; the loop must exist and its sign must be the closing one.
- Neutel et al. (2002) report that long loops in real webs contain relatively many weak links and that this "reduces maximum 'loop weight'". Loop weight is the ecological name for what the figure calls the sign-governed closure of a cycle: the magnitude distribution along the loop sets how strongly it closes.
- The small-gain theorem (control theory, fetched 2026-11-23) states that two stable systems in feedback are input-output stable if "‖S1‖⋅‖S2‖<1". This is the weak-link condition stated in a different vocabulary. The large-gain theorem gives "the minimum loop-gain needed to stabilize an unstable, possibly nonlinear and time-varying, plant; the minimum loop-gain being 1." Both conditions are true, in different situations. That is a low-overlap corroboration of the union, not a contradiction.
- **Falsifier, written before the run:** reverse the sign of one link in a loop while holding absolute loop gain fixed. Under Fig 12 :121 the closure must change. If it does not, the sign rule is false for that web.

### Q2: Are two webs with the same strengths but different placements isomers?

- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :94 "The arrangement is the substance."
- Tang, Pawar and Allesina (2014) find that the correlation between consumer-on-resource and resource-on-consumer effects "substantially accounts for their stability", and that preserving only the distribution and correlation of strengths in random webs reproduces the stability of empirical systems. That is exactly the isomer claim in ecological units: identical ingredients, different arrangement, different behaviour.
- **Verdict:** two webs with the same multiset of strengths and signs but different placements are isomers under Fig 12's definition. This is `specified` and unmeasured here; the ground test is a paired perturbation experiment on the two webs.
- **Falsifier:** two webs identical in strength multiset and placement up to a relabelling of species that preserves all loop signs, yet with persistently different measured outcomes under the same perturbation. That would break the arrangement claim.

### Q3: What is the order of the union?

- Fig 3 :20 "The chain is ordered by dependency, not by importance."
- Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"
- Dependency order for this question: measure the links (perception) → have terms for what a link affords (damping, coupling, sign) → say what counts as progress for a named slot → choose the perturbation → carry the result to the next web.
- A measured, settled loop becomes an atom for the web-level argument. That is the recursion Fig 12 names, not an import of a new primitive. A web-level stability claim built on unsettled loop estimates is dead reckoning (Fig 4 :30).
- **Falsifier:** a web-level stability result that is unchanged when every underlying loop estimate is replaced by its contrary. If it survives, the dependency order is wrong.

### Q4: What is load-bearing, and what is a catalyst?

- Fig 13 :48 "And the set is minimal: remove one and something stops."
- Fig 13 :49 "Each member is load-bearing in at least one of them"
- Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
- A strong link can be load-bearing in the Fig 13 sense: remove it and a function stops. A link can also be a catalyst in the Fig 12 sense: it survives its own use and keeps regulating across perturbations, or it is spent and stops after one event. Nothing in a strength measurement records which a term is. Allesina and Tang's "tightly coupled pairs" are the load-bearing reading; Paine's measured "few strong interactions" are the candidate population.
- **Falsifier:** a link whose measured contribution to persistence is identical before and after it is made spent (for example, after its consumer is removed and replaced by an equivalent). If the contribution does not change, the catalyst distinction does not apply here.

### Q5: What does the analogue license, and what does it not?

- The control-theory theorems are imported from engineering. Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 :50-52 requires provenance so that convergent derivation is not confused with adopted import.
- The import is recorded with its source and date in `10_source_ledger.csv`. It corroborates the *shape* of the union, that weak gain and strong gain can each be required, but it does not license a numeric strength threshold for any particular web. Numeric thresholds need the ecological ground.

## CONCLUSION

The two cores are cycles whose **sign** and **placement** decide closure, not their magnitudes alone. Two webs with the same strength multiset but different placements are isomers: same atoms, different arrangement, different substance. Strong links can be load-bearing or catalytic; a field strength measurement does not record which. The union order runs from measured loop to web, and a web claim built on unmeasured loops is dead reckoning. An engineering import corroborates the two-condition shape but licenses no numeric threshold. Every claim here carries a falsifier, so none is immune to the ground.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the two control-theory theorem statements from the fetched control-theory page, and the ecology abstracts listed in `10_source_ledger.csv`. No perturbation measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 (round trip), Fig 6 (import), Fig 8 (provenance), Fig 11 (valence relative to residual), Fig 12 (cycle, isomer, catalyst, settled molecule, arrangement), Fig 13 (minimality, load-bearing). Strains after re-census: none; S1 and S2 remain recorded as resolved in `01`.
