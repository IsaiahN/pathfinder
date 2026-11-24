# Isomers, order and competing criteria - supporting derivation for CMP-0007

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The primary audit returned a union of failure conditions. Three questions are still owed before the answer can be stated cleanly:

1. **Structure.** Two systems can show the same reported pattern. Is that an isomer claim under Fig 12, or something weaker?
2. **Order.** In what order do the tests bind? Which one is cheapest, and which link breaks first?
3. **Competing criteria.** Can the methodology literature's standard answers be generated from the shape, or do they name something the shape cannot reach?

## DOMAIN CENSUS (carried forward, not re-run)

- D1 system ground: actors the system, states and structures, habitat; currency what the ground settles under intervention; anchor an instrument that does not move with the analyst's frame.
- D2 measurement and analysis frame: actors instrument, metric, transform, code, analyst; currency fitted residual, compression, pattern counts; anchor none inside the frame.
- D3 pattern as composition: actors atoms and bonds; currency arrangement, `|φ|`, `left(R,φ)`; anchor settlement.
- D4 independent witnesses: actors a second frame with differing closure; currency agreement under low overlap; anchor the ground triangulated.
- D5 channel: actors percepts, metrics, conventions; currency contact; anchor the ground that persists.
- Partition or union: union of the failure conditions; overlap forms compounds.
- Dependency order: perception to vocabulary to objective to planning to learn and carry (Fig 3).

No new domain is introduced here. Figure lines were selected only after this census was fixed.

---

## Q1 - Are two systems with the same reported pattern isomers?

> "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." (Fig 12 :117)
> "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." (Fig 12 :124)
> "Symmetry is what decides whether an arrangement is a new thing." (Fig 12 :92)
> "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." (Fig 12 :5)

Two systems whose ingredient lists are identical but whose arrangements differ are **isomers** under Fig 12 :117: same atoms, different bond, different behaviour, with the difference invisible in the ingredient list. This is the figure-grounded version of the complexity-science intuition that the same components can organise differently, but it is stronger: the arrangement is itself a substance and carries information the ingredients do not.

If the systems share only a pattern shape (both show `state to structure to state`) while differing in which atoms occupy the slots, the weaker claim holds: they are members of one **functional group** (Fig 12 :124), the qualifier saying which member. The presence of the pattern fixes the kind, not the outcome.

The distinction is testable. A comparison that records only ingredient lists cannot distinguish isomer from functional group; the bond has to be recorded. "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond." (Fig 12 :95-96). This is why an analysis that reports only a list of measured variables cannot tell you whether two systems share an organizing principle.

**Falsifier, written before the run:** if two systems with identical atoms and identical bonds nevertheless diverge in the pattern with no difference in ground contact or imported atoms, the isomer framing is insufficient and the difference must be habitat (D1), which moves the explanation out of composition.

**Status:** `specified`, triangulated for legality (Fig 12 and Fig 11 :49-51, different figures), single-source for the systems application. No world source opened for this solution bears directly on the isomer claim in complex systems, so it is not corroborated here.

## Q2 - In what order do the tests bind?

Two orderings must be kept distinct.

**(a) The dependency chain (Fig 3).**

> "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." (Fig 3 :20-21)
> "Optimising a link that already works cannot rescue one that does not." (Fig 3 :19)

Order for a researcher facing a reported pattern:

1. **Perception.** Can the channel register the system's behaviour at all, independently of the analysis? Failure here is visible and has obvious tests.
2. **Vocabulary.** Does the analysis have terms that distinguish a principle from an artifact? This is the middle link. "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." (Fig 3 :26). This question is precisely about that link, which is why it is hard.
3. **Objective.** Can the researcher say what would count as progress? A vocabulary with only ingredients cannot state a goal (Fig 12 :112).
4. **Planning.** Choose the battery of tests under a finite budget.
5. **Learn and carry.** Record the lineage and carry the method, not the recording (Fig 4 :22-23).

The failure conditions map onto this chain: anchor-invariance and convention failures are mostly link 1 and 2 failures; provenance and habitat failures are mostly link 5 failures. That mapping is why one lever cannot clear all of them (Fig 9 :55).

Budget naturally piles up at links 1 and 4, where instruments already exist, while the break sits at 2 and 5. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed." (Fig 3 :29).

**(b) The leave-and-arrive order (Formula step 7, Fig 6).**

> "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms." (Fig 6 :29)
> "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." (Fig 6 :30)
> "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other." (Fig 6 :31)

SEARCHED comes first, because it is cheapest and the other two assume its answer: is the pattern already inside the analysis closure and merely unfound? "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." (Fig 8 :32). If it is already implied by the model, more fitting will not find anything new. Only then ask INWARD (extend the instrument from one already returning something) and OUTWARD (find a frame whose closure differs). These are opposed instruments and must not be read against each other.

**Falsifier:** a documented case where the break is demonstrably at planning (link 4) while perception, vocabulary and objective all measure as working, or where an OUTWARD import is shown to answer an INWARD adequacy question without running the INWARD track. That would falsify the "usually middle" and "keep the tracks distinct" claims without touching the dependency ordering itself.

## Q3 - Competing criteria, and what each can and cannot reach

| candidate criterion | what it names | figure-line bearing | what it cannot reach |
|---|---|---|---|
| **Replication on new data** | stability across samples | close to F1 if the instrument is genuinely varied | new data from the same pipeline is the same frame; Fig 2 :31 says two readers of one report are not two frames |
| **Pre-registration** | a lineage fixed before the result | close to F5 and Fig 10 :62-66 | a clean record shows legitimacy, not rightness (Fig 10 :65-66); a wrong pre-registered criterion stays wrong |
| **Sensitivity analysis** | variation under parameter pushes | close to F1 | if the push stays inside one model class, it is SEARCHED only; it cannot add an atom (Fig 8 :32) |
| **Triangulation** | two methods agreeing | close to F2 | only if the evidence pools do not overlap; otherwise it is a convention (Fig 2 :40) |
| **Holdout / cross-validation** | out-of-sample fit | a budget filter | the split is chosen by the analyst and is frame-internal (Fig 1 :27); it cannot decide what the pattern means |
| **Information criteria / MDL** | cost of the description | Fig 5 :42-44, Fig 12 :99-101 | prices the description, not the actions needed to settle it; "A composition costs in two currencies, and they do not add." (Fig 12 :125) |
| **Construct validity (via the exemplar's mapping, not opened here)** | whether a measure tracks its construct | analogous to Fig 10 :18, "a declared meaning is not a grounded one" | named from within the measurement tradition; used here only as an analogue, not as a witness |
| **Luck / a favourable early reading** | an unearned pattern that persists while unfuted | Fig 8 :39, "So a search that finds nothing is never a proof of absence." | cannot be excluded from inside a frame; honest `gap`, not a rival verdict |

No candidate is discarded by prestige or familiarity. Each is ranged against the same residual in the order Fig 8 :53 requires. The point is not to pick one; it is to notice that most are bindings of one broad methodological pool, and that each captures one failure mode while leaving the others standing.

## Q4 - Does the shape generate the literature's criteria?

Partly. The shape can generate:

- the emphasis on replication, as the anchor-invariance test with the instrument actually varied;
- the emphasis on pre-registration, as the lineage requirement, with the caution that provenance is not rightness;
- the emphasis on triangulation, as Fig 2 :31 independence rather than agreement count;
- the emphasis on model comparison, as Fig 5 :42 MDL bargain plus Fig 12 :125 two-currency warning;
- the emphasis on robustness, as SEARCHED first, then INWARD and OUTWARD as distinct tracks.

It cannot generate the *name* of the criterion that will settle a given case, because which failure mode is present depends on the ground of that system. That is the `gap` recorded in F11 of `01`. It is a gap at the instrument boundary, not a silence: Fig 13 :134 ("Unreachable is a verdict here, not a silence,") and Fig 8 :39 apply. The source essay states why: an instrument that reads a result "cannot comment on the source", and "the answer is unreached until a better instrument exists."

## CONCLUSION

Two systems with the same atoms but different bonds are isomers under Fig 12 :117; two systems sharing only a `state to structure to state` pattern are members of one functional group under Fig 12 :124. The tests bind in dependency order, with the vocabulary and carry links the usual breaks, which is why the failure conditions need different instruments. SEARCHED is cheapest and comes first, while INWARD and OUTWARD are opposed and must not be read against one another. The standard criteria are generated by the shape only up to the point where a name for the winning criterion would be required. The isomer claim has a written falsifier; the order claim has one; the naming gap is declared rather than filled.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. World sources opened and recorded in `10_source_ledger.csv`. No measurement was used. Mode `specified`.

## FIGURE CENSUS

Fig 3 (dependency order, middle break, instrument absence), Fig 4 (methods up, head starts down), Fig 5 (bargain), Fig 6 (INWARD vs OUTWARD, idempotence), Fig 8 (residual first, underivable vs unreachable), Fig 9 (union vs partition), Fig 11 (valence relative to residual, habitat), Fig 12 (isomer, functional group, symmetry, bond information, two currencies), Formula (step 5 settlement, step 7, Direction). Strained after re-census: none. The one earlier strain, applying Fig 13's six-term substrate directly to complex-systems patterns, was re-census S1 and is logged in `01_figure_grounded_audit.md` section 6.
