# Figure-grounded audit: useful regularity versus coincidence

**Mode of this document: `specified`, not `grounded`.** It states what a distinguishing test would have to look like and what would refute it. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From "The Recursive Self-Improvement Trap" (essay, read 2026-11-23): "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim quotes, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the exemplar solution, and the public sources in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

A model holds a candidate pattern `phi` extracted from a corpus C. Two options.

- **Option A, treat `phi` as a useful regularity.** The model composes over it, expects it to hold at new contact, and spends budget on tests that could fail.
- **Option B, treat `phi` as a coincidence.** The model withholds composition, keeps the term as a candidate, and looks for a discriminator or an import.

What each leads to: A pays a compression bargain and survives ground contact, or collapses at the first new observation; B avoids a false reach at the cost of an unresolved slot. The residual R is the gap between what the training fit reports and what would still be true at new contact. It is not "is the pattern true" in the abstract. It is "does this term pay when the frame is no longer the one that produced it".

**Arity / symmetry / scale.** Arity two: one candidate term and one ground (plus a possible peer frame). Symmetry: the relation is asymmetric. The frame ranges against the ground, not the reverse (Fig 2 :45). A correlation between two variables in C is symmetric, but the verdict is not. Scale: inside one closure (the model and its corpus) versus across two closures (model plus ground or model plus independent peer). Fig 9 :4-5 warns that a disagreement which does not shrink with effort may be several questions bundled into one. Here the test and the settlement are two conditions, so the answer is a **union compound**, not a single measurement.

**What an answer would look like, bound as an ordinary term before the run.** Following the formula's Direction rule and Fig 5 :65-66, I bind the sought-for shape now: "a test that (i) prices the candidate against the whole corpus and (ii) exposes it to contact not produced by the frame, with (iii) a recorded provenance for any frame that confirms it." This is a shape, not a certificate. It is refusable by the pre-registered refuter in section 3.

---

## 1. Domain census (before any figure line is chosen)

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1, the model frame | candidate `phi`, terms, bonds, object slots, residual `R` | description length in bits, compression achieved | none inside the frame | **no internal anchor**. This is a gate domain, not a verdict domain |
| D2, the ground | new observations, instruments, experiments, the habitat | whether `phi` pays when composed over new contact | the ground, which does not update (Fig 2 :29, Fig 10 :24) | yes |
| D3, independent frames | peer models or observers with different closures | independence, overlap, convergent derivation | the ground, never agreement | yes |

**Partition or union.** D1 is partitioned off from D2 and D3 by a closure boundary (Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."). The answer itself is a union: a gate from D1 **and** a settlement from D2 **and** an independence check from D3. Removing any one condition leaves a different question. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

**Dependency order (Fig 3).** Perception: is there a live slot residual at all (Fig 1 :13)? Vocabulary: can the model state the shape of `phi` before confirming it? Objective: does `phi` pay the bargain? Planning: where to aim the probe or which peer frame to consult? Learn and carry: settle, then promote a method, never a recording. The common break is between vocabulary and objective: the model can fit the corpus but has no instrument for "what would count as progress", so training fit silently becomes the objective. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

By the census rule, D1 has no nameable anchor and therefore is not yet a verdict domain. That is the central structural finding, not a defect to patch.

---

## 2. Figure census (bearing and verdict before findings)

| figure | bearing here | verdict |
|---|---|---|
| 1 The Agent | frame-internal quantities disqualified; residual per slot | D1 cannot score itself; supports F1, F3 |
| 2 The Ground | anchor, independence, correlation valence | D2 and D3 anchored; supports F1, F5 |
| 3 Dependency Chain | order by dependency; broken middle link | the objective link is the usual break |
| 4 The Membrane | methods cross up, recordings do not | the deliverable is a test, not a fitted term |
| 5 Mint Pipeline | MDL bargain, three guards, one-occasion failure | direct: the coincidence is named here; F2, F4 |
| 6 Closure / Reachability | search inside closure adds no atom; inward vs outward | F4, F10, and the SEARCHED/INWARD/OUTWARD split |
| 7 Room Chain | agreement is variation, not a verdict | no reader list can corroborate |
| 8 Union Surplus | convergence vs adopted import; residual first | F5, F9 |
| 9 Leave / Arrive | describe before looking; shape only; sealed room | F6, F10 |
| 10 Ground Maintainer | channel decay, saturated metrics, no self-grounding | F8, F9 |
| 11 The Habitat | substituted habitat proves wiring, never capability | F7 |
| 12 The Bond | two currencies, bits and actions, do not add | supporting derivation in `06` |
| 13 Minimum Viable Set | unreachable is a verdict, not a silence | F10 |
| Operators / Symbols | `R` is the aim; the ground is the anchor | notation check |

Strained readings are named in section 6, not smoothed over.

---

## 3. Findings (verbatim quotes before conclusions)

### F1: training fit is a frame-internal quantity and cannot be the verdict metric (`general` structural)

Fig 1 :23: "The ground enters as the only metric."

Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

A training-loss number, an in-sample accuracy, or a count of predicates minted is produced by the same frame it is asked to grade. That is the named disqualification. The point is not that the number is useless. It is that it is a **gate input**, not a verdict. Re-census below resolves the apparent conflict with the MDL bargain.

Refuter: exhibit a recorded ground reading in which a quantity produced only by the frame, with no contact outside it, settled a regularity/coincidence distinction. Until then, training fit alone carries zero verdict weight. Triangulated across Fig 1 and Fig 2 (low overlap between the agent metric rule and the anchor rule).

### F2: a coincidence is exactly the term that explains one occasion perfectly (`specified`)

Fig 5 :42: "The acceptance test is a bargain, not a threshold."

Fig 5 :43-44: "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."

Fig 5 :26: "and then: does the new term cost less to state than the confusion it removes?"

The formula's step 3 writes the bargain as `accept iff cost(phi) + left(R,phi) < cost(R)`. A coincidence fits C tightly but does not reduce `cost(R)` once the term's own description length is charged and once the slots it fails to explain are counted. It is a high fit with a poor bargain. This is the figure's own vocabulary for the distinction the question asks for.

Refuter: produce a candidate that fits a single occasion (or a single narrow subset) perfectly, pays `cost(phi) + left(R,phi) < cost(R)` over the full corpus, and then survives ground contact without a drop. If that happens, the one-occasion clause does not discriminate and F2 is withdrawn. Triangulated with the independent MDL literature (world source W1), which is a separate evidence pool from the figures.

### F3: the signal is per slot, and aggregation hides it (`specified`)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Fig 1 :13: "a global R near zero with one live slot residual is a legal state"

Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

A model can report excellent average fit while a specific slot still carries positive live mass `R+_s`. That slot is where a spurious regularity hides, and also where a genuine novelty hides. A global score cannot tell them apart. The useful question is not "how well did it fit" but "which slot is still wrong and is that wrongness shrinking".

Refuter: show a case where averaging across object slots preserves the discriminating signal between a stable regularity and a one-occasion fit. Triangulated across four lines of Fig 1, single figure family, so marked single-source at the figure level.

### F4: the gate is not the ground; passing MDL is necessary and not sufficient (`specified`)

Fig 5 :32: "then check it against the ground, then carry it up"

`THE_FORMULA.md` step 5: "the ground settles it. Verified only by what pays. A gate is not the ground." And: "Settling is necessary for a term to be composed over and it is NOT SUFFICIENT. A library that grows is not a reach that grows."

The three mint guards (support, reachability, novelty) can all pass for a coincidence. They are an AND gate, and the gate says nothing about new contact. Fig 5 :41: "Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting." So a model with no new regularities may be correctly inert, and a model minting freely may be accumulating coincidences. Mint count is a denominator, not a progress measure.

Refuter: a recorded experiment in which a term that cleared all three guards and the MDL bargain was settled as useful by ground contact alone, with no additional instrument or independent frame. That would collapse the gate/ground distinction and F4 is withdrawn. Triangulated across Fig 5 and the formula (same framework pool, low overlap in wording).

### F5: agreement inside one evidence pool is the pool talking, not corroboration (`general`)

Fig 2 :39: "Correlation has valence."

Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"

Fig 2 :41: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"

Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Fig 8 :47: "Independence is one quantity read twice."

A pattern found by two models trained on the same corpus is one witness spelled twice. A pattern found by a frame whose closure differs, and predicted in advance from a described residual, is corroboration at maximum independence (Fig 8 :50). The venue list in `03_public_contact_points.csv` exists to find such frames, not to gather votes.

Refuter: show that two frames drawing on the same evidence pool can add evidentiary weight to a world claim. Fig 2 :31 defines independence as "how little they draw on the same evidence", so this would require re-census of the anchor rule itself. Triangulated across Fig 2 and Fig 8.

### F6: describe the effect before choosing the frame (`general`)

Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit"

Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause"

Fig 9 :32: "you get a kind of thing, never the answer itself"

If the model names the pattern from the same data in which it then tests it, any frame picked afterwards will confirm it. That is the apophenia shape: a structure found in noise and given somewhere to live. The discipline is to write down the shape of `phi` before looking, then let it accrue a residual like any other term (formula Direction rule; Fig 5 :65-66).

Refuter: a case in which a pattern named only after inspecting the data still carries independent, pre-registered ground confirmation. That would show the order is not load-bearing. Triangulated with the Library of Babel essay (W8), separate pool.

### F7: a substituted habitat proves wiring, never capability (`specified`)

Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

Fig 11 :68: "what you failed to reproduce, and what you brought with you"

Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

A held-out split drawn from the same corpus is a substituted habitat. It tests whether the wiring works under a nearby distribution. It cannot show that the regularity is a feature of the world rather than of that corpus. Two silent failures attend the substitution: conditions the goal needed were not reproduced, and actors from the new habitat were unintentionally introduced.

Refuter: a substituted habitat that reproduces every condition the goal required and has no unintended imports, with a synthetic solve that then transfers to the original goal. Breaks F7. Triangulated with the cross-validation literature (W7), which states the same-population condition independently.

### F8: a coincidence is a saturated reading, and the channel is what decays (`general`)

Fig 10 :24: "the ground does not decay, the channel does"

Fig 10 :25-26: "stale percepts, dropped transients, saturated metrics, pooled readings"

Fig 10 :27-28: "the output is not a verdict, it is you have lost touch"

Fig 10 :29: "keep the anchor reachable"

When a metric is saturated on one pool, it stops resolving. The model still reports numbers, and the numbers no longer carry information about contact. The useful distinction is not "does the metric fire" but "is the anchor still reachable through it". The Hard Problem is About Source essay (W9) gives the instrument case: a reading cannot comment on its own source.

Refuter: an instrument that discriminates sources at the current resolution and is demonstrably unsaturated on the corpus. That clears this particular failure, not the whole verdict. Triangulated across Fig 10 and W9 (different pools).

### F9: provenance is the whole issue when contents are identical (`general`)

Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

Fig 10 :62: "A ruling carries provenance like an atom."

A reused regularity and an independently derived one look the same in the weights. Only the record separates them. An import needs a source gate and a shadow test (Fig 6 :12-13), and is debited against the independence of the frame that supplied it (Fig 6 :24). Without provenance, the candidate carries zero evidentiary weight even if it is in fact useful.

Refuter: a case in which the contents alone determine whether a term was converged or imported, with no record. That would remove the need for provenance. Triangulated across Fig 8, Fig 6, Fig 10.

### F10: no certificate from inside; the honest stop (`general`)

Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room."

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

Fig 13 :134: "Unreachable is a verdict here, not a silence,"

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."

So more epochs on the same corpus cannot by themselves turn a coincidence into a regularity. They can visit more of the same closure (Fig 6 :49), but the wall does not move. What moves it is contact with a frame whose closure differs (Fig 6 :23), or an instrument refined from one already returning something (Fig 6 :32, :34-35). The framework returns a shape and stops. "Unreachable is a verdict, not a silence."

Refuter: a proof that a finite closed library can certify, from inside, that one of its own terms is not a coincidence. Fig 8 :34-37 names Godel, Tarski and Chaitin against this; a working construction would require re-census of that rule. Single-source at figure level, with mathematical corroboration in W6.

---

## 4. SEARCHED, INWARD, OUTWARD (kept distinct, formula step 7)

No single figure line closes "regularity versus coincidence" from inside D1. The formula says to ask SEARCHED first, then INWARD, then OUTWARD, and never to read the last two against each other.

- **SEARCHED (cheapest, asked first).** Is the candidate already in `closure(Gamma)` and merely unfound? Fig 6 :49: "more search at the same reach: is it in here and unfound?" Distribute the search and keep searchers independent (Fig 6 :50, :53). This answers "is it in here", never "does it pay at new contact".
- **INWARD.** Extend the instrument from a worse one already returning something. Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 6 :34-35: "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there." Sharpen the per-slot residual so it resolves the live slot.
- **OUTWARD.** Characterize R in effect terms, then find the frame whose closure predicts its shape (Fig 8 :53). Source gate, shadow test, debited against independence (formula step 7). This is where the public venues in `03` are used.

**Mode note.** SEARCHED is `general` (structural). INWARD and OUTWARD are `specified` here: they say what to try, not that it will succeed on this corpus.

---

## 5. Pre-registered refuter (written before the conclusion)

Required by the discipline that "a falsifier written before the run is a design instrument". The shape claim is refuted if any of the following holds:

1. A recorded ground reading settles a regularity/coincidence distinction using only a quantity the frame itself produces, with no contact outside the frame (breaks F1 and F4).
2. A candidate that fits one occasion perfectly pays `cost(phi) + left(R,phi) < cost(R)` over the full corpus **and** survives ground contact without drop (breaks F2).
3. Two frames drawing on the same evidence pool are shown to add evidentiary weight to a world claim (breaks F5).
4. A substituted habitat reproduces every condition the goal required, with no unintended imports, and a synthetic solve transfers to capability (breaks F7).
5. A finite closed library certifies from inside that one of its own terms is not a coincidence (breaks F10).

If any fires, the shape is withdrawn or re-censused. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Strain tests and re-census

- **Fig 1 :23 "the only metric" versus the MDL bargain computed on training data.** Strain if read as one quantity. Re-census: Fig 1 governs the *verdict* metric; the MDL bargain governs the *mint gate*. Different quantities, different steps (formula steps 3 and 5). No strain after re-census. This is why F1 says "gate input, not verdict", not "training fit is useless".
- **Fig 2 :40 disqualifying versus Fig 2 :41 efficient.** Strain if valence is ignored. Re-census: the first governs agreement about the world; the second governs agreement about a shared meaning. A shared codelength convention is a convention; two models agreeing because they share a corpus is not a witness. No strain.
- **Fig 5 :48 "Its own output is never a measure of success" versus using the MDL score as a gate.** Re-census: the score measures a *candidate*, not the system's success. A system can score candidates correctly and still produce nothing new (Fig 5 :49). No strain.
- **F7 versus ordinary cross-validation.** Cross-validation is a substituted habitat too; the world source W7 states the same-population condition. No strain, and the overlap is declared rather than hidden.

---

## 7. Recommendation

1. Lead with the shape (F1 to F4), not with a claim that a particular test works.
2. Price the candidate against the whole corpus and report the per-slot residual, never just the mean (F2, F3).
3. Record provenance for every confirming frame, and never pool agreement from one evidence pool (F5, F9).
4. Treat MDL as a gate and keep the ground reachable (F4, F8).
5. Ask a reader what they would count as a failure before showing them the framework (F6, and `02_outreach_email.md`).

---

## 8. Canonical usage check

Read after the first sections, per the standing instructions. The figures README says: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also says "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the framework returns "what a missing thing would have to look like (a shape, not a name)" then stops and records the lineage, with "Indiscernibility is not identity." These govern the posture of this folder: a shape and a route, not a certificate.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| F1 first drafted as "training fit is useless" | **Retracted in that strong form.** Narrowed to "training fit is produced by the frame and cannot be the verdict metric". It remains a legitimate gate input. See strain test 1. |
| F2 first drafted as "MDL settles regularity versus coincidence" | **Retracted at ground level.** MDL is step 3, settlement is step 5. "A gate is not the ground." Narrowed to "MDL discriminates one-occasion fits at the gate; it does not settle". |
| F3 first drafted as "a good model has zero residual everywhere" | **Retracted.** Fig 1 :13 explicitly makes a global near-zero residual with one live slot a legal state. The goal is to find the live slot, not to erase the average. |
| F7 first drafted as "held-out testing is invalid" | **Narrowed.** A held-out split is valid for wiring and portability, invalid as proof of capability. Fig 11 :70. |
| F10 "unreachable is a verdict" | **Canonically confirmed.** Paraphrased in the figures README as stopping "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest". |
| F5 "agreement is worthless" | **Narrowed.** Only agreement about the world. Fig 2 :41 makes agreement about a shared meaning the product of a convention. Both clauses now recorded. |
| Shape-not-a-name rule | **Kept but scoped.** It governs a missing primitive. Here the missing thing is a discriminator, not a new atom, so the answer is a test shape, not a named metric. |

### Updated verdict

The shape survives: a useful regularity is a term that pays the compression bargain across slots, survives contact not produced by the frame, and carries provenance that separates convergence from import. A coincidence is a term that fits one occasion, hides in an average, saturates the channel, and is confirmed only by the pool that produced it. Nothing here is `grounded`. Strains after re-census: none hidden; four resolved above.
