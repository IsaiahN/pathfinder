# Figure-grounded audit: INF-0082, generalizable representation versus training-only pattern

**Mode of this document: `specified` on the separator, `general` on the structural shape, `gap` on the universal recipe. Nothing here is `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, adventuresinml Substack, opened 2026-11-23) says LLMs "can quickly simulate an approximate answer/output" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No model was trained and no measurement was taken.

**Sources.** Primary: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md` (all read this session). World sources are listed in `10_source_ledger.csv` and used only as secondary corroboration.

---

## 0. Proposal header (seat-reasoning discipline)

```
DECIDES:   The question is a union compound of four conditions, not one scalar. A
           representation is generalizable only when it carries a reapplicable
           method (bonds and arrangement), reduces residual per slot on a habitat
           whose ground does not update on the model's own outputs, is checked by
           an instrument independent of the fitting evidence, and has a lineage
           that separates convergent derivation from adopted import. A = B? No.
           "Fits training data" and "generalizes" answer different questions with
           different anchors (Fig 1 :23, Fig 2 :29, Fig 9 :54-57).
HOURS:     One primary seat and one simulated second seat. Estimate 1.5 to 2.5h
           for the full 12-file folder; independent re-census is not optional.
PRIOR CASE: QMGR-0037 imported exemplar, retraction table in its 01 section 5;
           BUS-0018 false-dichotomy/union ruling; BUS-0009 filters-not-witnesses.
ANALOGUE:  Library of Babel searcher: describe the residual in effect terms before
           choosing a field, stop at a shape, record the lineage. Habitat: enumerate
           what contacts the residual (Fig 11 :43-48).
LIMIT:     No figure line returns an architecture, a sample count, or a universal
           threshold. That is a declared gap (Fig 9 :32, Fig 13 :134-135), not a
           silence and not an invitation to invent a number.
```

---

## 1. The residual, stated in effect terms

Two candidates, A and B, both drive the training residual near zero. Call A "generalizable" and B "training-only" if, and only if, the following difference would show up at the ground:

> A reduces `R = |Γ(b,a) - o'|` at object slots in a habitat it was not fitted on, by reapplying a method it carries. B reduces `R` on the fitted corpus only, by replaying a description of that corpus. The question asks what observation would separate them.

In effect terms, not theory terms:

- **What is being decided:** whether a low residual on the training corpus is evidence of a structure that will survive contact with a new habitat, or only evidence of a good memory of one occasion.
- **What each option leads to:** treating fit as generality spends the independence of every later checker and produces a convention, not a verdict (Fig 2 :40). Treating fit as a frame-internal filter and demanding cross-habitat contact produces a checkable shape with a refuter (Fig 9 :60).
- **What an answer would look like, bound as an ordinary term (Formula step "Direction"):** a *separator*, written down before any run, with four parts: per-slot residual on a non-updating ground; method-versus-recording determined from the lineage; typed bonds present rather than an ingredient list; an independence statement about the probe. Binding it lets it accrue a residual like anything else (Fig 5 :65: "Write down what an answer would look like, bind it, and let it accrue a residual like anything else.").

### 1.1 R by arity, symmetry, scale

- **Arity:** dyadic at first order (prediction against observation) and indexed by slot s; second order across habitats (fitted habitat versus probe habitat). The question is not one scalar but a **union compound** (Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones.").
- **Symmetry:** an aggregate accuracy is symmetric under permutation of slots, while "generalizes" is ordered in time and habitat (train then probe). A symmetric quantity cannot decide an ordered claim. Fig 1 :19 ("The residual is indexed by object slot, not aggregated.") and :22 ("Aggregating across slots is how a live signal disappears into an average.") are the governing lines. Operators table :34: "the only bond a flat chain can express, so every term today is a sequence whether or not it should be" is the notational warning.
- **Scale:** within a run (frame-internal) versus across the membrane to a new habitat. The error signal at that crossing is the round-trip gap `R_T`, not the training loss. Symbols table :75-78 defines `R_T` as "The gap between what was sent up and what came back down"; Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

---

## 2. Domain census (done before choosing any figure line)

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not yet a domain that can carry a verdict.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1, the learning frame** | parameters, training examples, loss, optimizer | training residual; description length in bits and in actions | **none nameable inside it**: the training metric updates on the frame's own outputs, so it fails the anchor test (Fig 2 :29-30) | the frame being checked, not a verdict domain on its own |
| **D2, the new habitat / held-out ground** | unseen slots, new tasks, measurement instruments | residual at each slot on a habitat not used for fitting | a measurement that does not move when the model's prediction changes (Fig 2 :29, :33) | verdict domain |
| **D3, the evaluation and selection frame** | benchmark designers, metric choice, reviewers, reported leaderboards | reported accuracy and agreement | the ground only if the benchmark genuinely touches it; otherwise a mirror (Fig 2 :35) | verdict domain with its own loop |
| **D4, the provenance and lineage frame** | the derivation record, source gates, shadow test | provenance: where each atom and bond came from | the record itself, checkable by a later reader (Fig 10 :62-64) | verdict domain |

**Partition or union: union.** D2, D3 and D4 overlap. A held-out test that clears D2 fails D3 if the test corpus shares an evidence pool with the training corpus, and fails D4 if the lineage is absent. A single lever clears only the region where the other conditions do not bind; the intersections remain (Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."). Verdicts are kept per domain and never averaged into one "generalization score."

**Order by dependency (Fig 3 :20: "The chain is ordered by dependency, not by importance."):**

1. **Perception:** can the instrument see the new slots at all? If nothing is returning anything at that resolution, there is no edge to extend from (Fig 6 :34).
2. **Vocabulary:** does the representation carry bonds, or only ingredients? "A vocabulary without bonds can name a state and cannot name a route to one" (Fig 12 :111).
3. **Objective:** what counts as progress here, in its own terms? `left(R,phi)` on the probe habitat, not training loss.
4. **Planning:** choose a probe that lands in a different closure, not a paraphrase of the fitted one (Fig 7 :36).
5. **Learn and carry:** record the lineage so the separator can be re-run (Fig 10 :62-64).

Refuse before mint (Formula step 2): if the claim "training fit proves generality" is held, it must be refused as a wrong term, not merely supplemented.

---

## 3. Figure census (verbatim, before concluding)

Every quote below is an exact substring of `FRAMEWORK/reference/03-FIGURES_TEXT.md`, checked against that file. A line that needed a strain was sent back to the census, not smoothed over.

| figure | verbatim line | bearing here |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | per-slot separator |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | aggregate accuracy is the wrong object |
| Fig 1 :23 | "The ground enters as the only metric." | training fit cannot be the metric |
| Fig 1 :27 | "They are frame-internal. A frame cannot score itself with a quantity it also produces." | compression and coverage disqualified |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | the anchor test for a held-out set |
| Fig 2 :31 | "Independence, between two frames, is how little they draw on the same evidence." | benchmark independence |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement is not a verdict |
| Fig 2 :40 | "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" | shared corpus disqualifies |
| Fig 3 :27 | "A link with no instrument is not a link that works. It is a link nobody has looked at." | the missing discriminator |
| Fig 4 :22 | "Only methods cross up. Only head starts come down." | method versus recording |
| Fig 4 :25 | "A recording carried upward looks like knowledge and is a description of one occasion." | the training-only case |
| Fig 4 :26 | "and cannot produce a new one." | replay fails in a new habitat |
| Fig 4 :30 | "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | `R_T` as the error signal |
| Fig 5 :43 | "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before." | the MDL bargain |
| Fig 5 :44 | "and so does a term that explains one occasion perfectly." | the named memorization failure |
| Fig 5 :48 | "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing." | self-reported fit is not success |
| Fig 6 :21 | "MINT composes inside the closure and can never add an atom." | more fitting cannot add reach |
| Fig 6 :22 | "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure." | novelty is not generality |
| Fig 6 :23 | "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | the probe must differ |
| Fig 7 :35 | "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." | evaluator selection |
| Fig 8 :32 | "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." | fit cannot manufacture reach |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | gap is a verdict, not silence |
| Fig 8 :51 | "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" | provenance is the whole issue |
| Fig 9 :27-28 | "describe it before you go looking, or any frame you pick will seem to fit" | describe residual before field |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | shape, not recipe |
| Fig 9 :55 | "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." | union ruling |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | accuracy is a filter |
| Fig 10 :24 | "the ground does not decay, the channel does" | saturated metrics sever contact |
| Fig 10 :26 | "saturated metrics, pooled readings" | aggregate accuracy as channel decay |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | do not show the interior first |
| Fig 10 :52 | "Bring a characterised residual, never the source." | two-stage offer |
| Fig 11 :39 | "capability is a property of agent-and-habitat, never of the agent alone." | generality is relational |
| Fig 11 :40 | "An improvement that does not change contact changes nothing, however much it improves." | more fitting is not more contact |
| Fig 11 :70 | "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." | a synthetic benchmark proves wiring |
| Fig 12 :5 | "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." | features are not the representation |
| Fig 12 :14-16 | "the ingredients are recorded and the arrangement is not" / "nothing downstream can tell them apart" | flat feature lists |
| Fig 12 :94 | "The arrangement is the substance." | bond is decisive |
| Fig 12 :107-110 | "where the arrangement is recorded, re-deriving it is a lookup and the actions were spent once. Where it is not, the result carries forward and the deriving does not, so every lineage pays again." | substrate condition for reuse |
| Fig 12 :117 | "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | the probe design |
| Fig 12 :123 | "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." | shared method skeleton |
| Fig 12 :125-126 | "A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds." | description versus probe cost |
| Fig 13 :115 | "The set is closed. The arrangements are not. That gap is why import exists." | reach versus library |
| Fig 13 :130 | "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term." | lineage is the claim |
| Fig 13 :134 | "Unreachable is a verdict here, not a silence" | gap discipline |
| Fig 13 :135 | "It cannot say which primitive is missing, because naming it would mean already holding it." | shape, not name |
| Operators :58 | "a refutation is a negation, which is why a vocabulary without it can only accumulate" | the separator must be refusable |
| Symbols :38-40 | "It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read." | per-slot residual is the aim |
| Symbols :42-44 | "R is measured per slot, never as a single global number." | no single score |

---

## 4. Findings, one loop per domain

### F1. Training fit is frame-internal and cannot be the anchor (D1; `specified`; triangulated)

Fig 1 :23: "The ground enters as the only metric." Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Training accuracy and compression achieved are both quantities the learning frame produces from the same corpus it is judged on. They fail the anchor test: push on them by changing the objective and they move. D1 therefore has no nameable anchor and cannot carry a verdict about generality on its own.

**Triangulation:** Fig 1 (per-slot residual and frame-internal quantities) and Fig 2 (anchor test) are different figures with low conceptual overlap, so `triangulated`.

**Refuter:** exhibit a metric produced by the model itself that does not update on its own outputs and settles the cross-habitat residual at every slot. Until then, training fit is a filter for the budget, not a witness.

### F2. "Explains one occasion perfectly" is the named failure (D1; `specified`; triangulated with a world conflict recorded)

Fig 5 :43: "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before." Fig 5 :44: "and so does a term that explains one occasion perfectly." Fig 5 :48: "Its own output is never a measure of success."

A lookup table fitted to the training corpus has a very low residual on that corpus and a very high cost when stated as a rule; the MDL bargain refuses it. Zhang, Bengio, Hardt, Recht and Vinyals (ICLR 2017, arXiv:1611.03530, opened 2026-11-23) report that large networks "easily fit a random labeling of the training data," which is the empirical instance of the named failure: perfect one-occasion explanation with no structure.

**Conflict returned to census, not used to flip the verdict:** the same source family documents benign overfitting, where a model "generalize[s] well to unseen data, even when it has been fit perfectly on noisy training data" (Wikipedia, Overfitting, opened 2026-11-23). This conflicts with any naive reading of "perfect fit means memorization." Re-census: Fig 5 :43-44 prices *stating plus leftover*, not fit alone. A low-complexity interpolating solution and a lookup table have the same fit and different description length and different contact. Two quantities, not one. The verdict stands; the naive gap-as-witness reading is retracted and preserved in section 6.

**Refuter:** a term that explains one occasion perfectly, whose description length on an independent ground is also small, and whose per-slot residual on a new habitat stays low under a measured complexity accounting.

### F3. A generalizable representation carries a method, not a recording (D2; `specified`; triangulated)

Fig 4 :22: "Only methods cross up. Only head starts come down." Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Fig 4 :26: "and cannot produce a new one." Fig 12 :107-110: "where the arrangement is recorded, re-deriving it is a lookup and the actions were spent once. Where it is not, the result carries forward and the deriving does not, so every lineage pays again." Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

The discriminator is not "did it fit" but "what crossed." A representation whose arrangement is recorded as a method can be reapplied in a substituted habitat; a recording of one occasion can only be replayed. Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." More parameters, more epochs and more in-distribution accuracy do not change contact.

**Triangulation:** Fig 4 (scale membrane), Fig 11 (habitat substitution) and Fig 12 (substrate condition on re-derivation) are three low-overlap routes to the same separator, so `triangulated`.

**Refuter:** a verbatim recording of one training occasion, with a lineage showing a lookup and no carried method, that predicts the shape of residuals at new slots in a new habitat as well as a method-carrying representation.

### F4. Bonds, not ingredients, carry what generalizes (D1 and D4; `specified`; single-source on the bond definition, triangulated on the probe design)

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Fig 12 :14-16: "the ingredients are recorded and the arrangement is not" and "nothing downstream can tell them apart". Fig 12 :94: "The arrangement is the substance." Operators :34: "the only bond a flat chain can express, so every term today is a sequence whether or not it should be".

A representation that stores features but not the typed relations between them cannot distinguish two arrangements with the same ingredients. A generalization probe must therefore hold the ingredient set fixed and change the bond or the order. Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

**Status:** the claim that the bond carries information the operands do not is `single-source` in its figure definition (Fig 12), corroborated by the Operators table on the flat-formula limit; the *probe design* that follows from it is `triangulated` across Fig 12 and the Operators table (low overlap between chemistry isomerism and notational pricing).

**Refuter:** a flat ingredient-only representation that distinguishes two arrangements with identical ingredients at a new slot, without spending extra actions on the ordering.

### F5. Reach, not library size: more fitting cannot add an atom (D1 and D2; `specified`; triangulated)

Fig 6 :21: "MINT composes inside the closure and can never add an atom." Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists." Fig 6 :22: "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."

If the structure required by the new habitat is not in `closure(Γ)`, then no amount of fitting inside the training corpus produces it. Formula step 7 then asks three distinct questions: SEARCHED (is it in here and unfound?), INWARD (can our instrument hold it?), OUTWARD (does another frame already hold it?). These are not interchangeable; importing against a budget limit adds an atom that was not needed.

World corroboration: Wolpert and Macready's no-free-lunch result, read via Wikipedia (opened 2026-11-23), that "any two algorithms are equivalent when their performance is averaged across all possible problems." Inductive bias (Mitchell 1980, via Wikipedia, opened 2026-11-23): "Without any additional assumptions, this problem cannot be solved since unseen situations might have an arbitrary output value." These are mathematics and machine-learning theory, low overlap with the framework's own essays.

**Triangulation:** Fig 6 (import moves the wall), Fig 8 (closure idempotent) and Fig 13 (arrangements unbounded, reach not) are `triangulated`.

**Refuter:** a model whose closure demonstrably lacks the atom required by a new residual, yet reduces that residual at every slot without an import, with the provenance recorded.

### F6. Independence of the evaluator decides whether agreement is a verdict (D3; `specified`; triangulated)

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

A held-out split drawn from the same corpus is a mirror with a different name. Fig 2 names the collapse as "collapse 2: common cause (hidden shared source)". Wikipedia Cross-validation (opened 2026-11-23) records the operational form: "Cross-validation only yields meaningful results if the validation set and training set are drawn from the same population and only if human biases are controlled," and notes "twinning" where near-identical samples leak into the test set. It also reports the MAQC-II finding that "cross-validation by itself is not very predictive of external validity, whereas a form of experimental validation known as swap sampling that does control for human bias can be much more predictive of external validity."

**Triangulation:** Fig 2 (independence), Fig 7 (selection between rooms) and the cross-validation literature (swap sampling and twinning) are `triangulated` with low overlap.

**Refuter:** two evaluations drawing on the same evidence pool that predict cross-habitat failure at the same rate as two blinded evaluations from independent instruments.

### F7. The gap is a budget filter, not a witness (D2 and D3; `specified`; triangulated)

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Fig 1 :19 ("The residual is indexed by object slot, not aggregated.") and :22 ("Aggregating across slots is how a live signal disappears into an average.") Fig 10 :24: "the ground does not decay, the channel does"; :26: "saturated metrics, pooled readings"; :28: "you have lost touch".

An overall train/test accuracy is a single number that hides which slots are alive. Wikipedia Cross-validation states that "the variance of F* can be large" and that "the procedure with the better estimated performance may not actually be the better of the two procedures." Wikipedia Overfitting adds a second discriminator: an overfitted function is "less portable" and may need more information per validation item. The world sources agree with the figure verdict that a scalar gap cannot carry the verdict; they are a different evidence pool from the essays.

**Triangulation:** Fig 9 (filters versus witnesses), Fig 1 (per-slot residual), Fig 10 (channel decay) and the statistics literature are `triangulated`.

**Refuter:** a single scalar computed from the fitted corpus that settles every per-slot failure in a new habitat, with no loss of information and no measurement on a non-updating ground.

### F8. Provenance separates two representations with identical contents (D4; `specified`; triangulated)

Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them". Fig 12 :130: "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term." Fig 10 :62: "A ruling carries provenance like an atom." Two representations can have the same observable behaviour and different standing: one derived the structure, the other copied it. The lineage is not documentation of the answer, it is part of what makes the answer checkable. Fig 8 :53: "Residual first, frame second."

**Triangulation:** Fig 8 (contents versus record) and Fig 12 (record is the term) are two figures with low overlap, so `triangulated`.

**Refuter:** a representation with no lineage at all whose cross-habitat predictions are fully reproducible by an independent instrument, with no record of atoms, bonds or sources.

### F9. No figure line returns the universal recipe (declared `gap`)

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence". Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line names an architecture, a sample count, a regularizer, a universal threshold, or which atom a failing model lacks. The framework returns the *shape* of a separator, then stops. Fig 11 :51: "No standing list of good actors survives a change of residual." A standing list of generalization tricks fails for the same reason.

This is a `gap` of the shape-not-a-name kind, not an unreachable-in-principle proof. It is **unreached**, because no instrument was run and no figure line governs the particular number. Reported as a verdict (Fig 13 :134), not as silence.

**Refuter:** a figure line that names the specific architecture or sample count that guarantees generalization, or a proven universal separator with a stated ground and a failed pre-registered refuter.

---

## 5. Pre-registered refuter (written before any conclusion)

A falsifier written before the run is a design instrument. The separator shape is refuted if any of the following holds:

1. A verbatim recording of one training occasion, with a lineage showing a lookup and no carried method, predicts the shape of residuals at new slots in a new habitat as well as a method-carrying representation. (Breaks F3.)
2. A metric produced by the learning frame itself (training loss, compression achieved, or pooled accuracy) is shown to be a non-updating anchor that settles the cross-habitat residual at every slot. (Breaks F1.)
3. Two evaluations drawing on the same evidence pool predict external-validity failures as well as two blinded evaluations from independent instruments. (Breaks F6.)
4. A flat ingredient-only representation, with no typed bonds, distinguishes two arrangements with identical ingredients at a new slot without spending extra actions on order. (Breaks F4.)
5. A single scalar computed inside the fitted corpus settles every per-slot failure in a new habitat without a measurement on a non-updating ground. (Breaks F7.)
6. A figure line is found that names the architecture, sample count or threshold that guarantees generalization. (Closes F9; the gap is withdrawn.)

If any fires, the separator is withdrawn in that domain. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Retraction and confirmation log (kept visible)

| earlier reading | status after re-census |
|---|---|
| "A held-out test accuracy settles generalization" | **Retracted.** Fig 1 :23/:27 and Fig 9 :60: if the split shares the corpus, the metric is frame-internal and the agreement is a convention. The held-out reading counts only when the anchor does not update and the closures differ. |
| "Generalizable means a new atom was imported" | **Narrowed.** Fig 6 :22: NOVEL is relative to atoms, not the world. Fig 13 :115: the arrangements are not closed, so a new arrangement over held atoms generalizes without an import. |
| "Fig 5 :44 bans every perfect fit" | **Narrowed by a recorded world conflict.** Benign overfitting shows perfect fit with good unseen performance. Re-census: the bargain prices stating plus leftover, not the fit; a lookup table and a low-complexity interpolant are different terms. The strain S2 stays visible. |
| "Shape, not a name forbids naming any mechanism" | **Corrected, per the exemplar.** The phrase governs a *missing* primitive (Fig 13 :135). Naming a binding that is already in the library is provenance, not an invented primitive. Here the framework still declines to name an architecture, because no figure line holds one. |
| "The question is a partition: fit versus generalize" | **Retracted.** Fig 9 :55: a union of overlapping conditions. A single lever leaves the intersections standing. |
| "Fig 1 per-slot residual conflicts with using a held-out score" | **Not strained after re-census.** Fig 1 governs how R is indexed inside a frame; a held-out score is a cross-habitat reading. Different objects. |
| "Fig 8 union surplus conflicts with Fig 2 agreement-worthlessness" | **Not strained.** Both are the independence parameter read twice (Fig 8 :47). High overlap gives a cheap convention and no surplus; low overlap gives a possible surplus and a real verdict. |
| F2 MDL finding | **Confirmed with a live type strain**, S2 below. |

### Strains

- **S1 (dissolved):** aggregate accuracy versus per-slot residual. Re-census: two different quantities; the aggregate is a budget filter and the per-slot residual is the aim.
- **S2 (live):** Fig 5 :43-44 MDL bargain versus benign overfitting. A term that explains one occasion perfectly fails the bargain; some interpolating models nevertheless generalize. Held as a type question about "stating the term," not smoothed. An instrument that measures effective description length on the probe habitat would settle it.
- **S3 (live but narrowed):** Fig 11 :70 (a harness proves wiring) versus the standard practice of benchmark evaluation. A benchmark is a substituted habitat; it can prove wiring, and it proves capability only where its ground does not update on the model's own outputs and its closure differs from the fitting closure. Kept visible as a design constraint.
- **S4 (dissolved by re-census):** Fig 8 union surplus versus Fig 2 shared-pool disqualification. Same independence parameter, two readings, no contradiction.

---

## 7. Recommendation

1. State the residual per slot before choosing any metric (Fig 1 :19, :22).
2. Treat training fit and compression as filters for the budget, never witnesses (Fig 9 :60).
3. Build the probe by holding ingredients fixed and changing the bond or order (Fig 12 :117), on a habitat whose anchor does not update (Fig 2 :29).
4. Buy independence for the evaluator in proportion to the cost of being wrong (Fig 2 :42), and record provenance so convergent derivation can be told from adopted import (Fig 8 :51).
5. Send the separator and its six refuters first; offer the sources only after a verdict is recorded (Fig 10 :52).
6. Report the F9 gap plainly. Unreached is a verdict, not a silence (Fig 13 :134).

**Verdict of this audit.** Shape survives: a per-slot, method-carrying, bond-aware, reach-aware, independently checked and provenanced separator. The universal recipe is a `gap`. Everything is `specified` or `general`, nothing is `grounded`, and the whole document is a simulated derivation checked for internal consistency, not a ground reading.
