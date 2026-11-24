# Structure, order and analogues in the underdetermination question

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 5).

## RESIDUAL

"Recognize underdetermination" packages at least two structures that the question does not separate: a threshold comparison (do the constraints fix the answer?) and a refusal (the claim "the answer is fixed" is false). It also packages two instrument questions that the formula says are opposed. Three derivations are owed: the operator structure, the union/partition order, and the analogues that test whether the mapping is a shadow or an echo.

## DOMAIN CENSUS

Atoms held: the eight operators (seven bonds plus negation), a library Γ with atoms(Γ) and closure(Γ), a residual R indexed by slot s, an anchor (the ground). No new primitive is available without import. The three domains and the limit row are those in `01_figure_grounded_audit.md` section 1; this file works on their internal order, not their verdicts.

## DERIVATION

### Q1: Is "underdetermined" one operator or two?

- Operators table :47-51 defines ⋛ (comparison): *"a threshold relation between two quantities"*, test: *"is it about which is larger, rather than both being present? Yes."*
- Operators table :53-57 defines ¬ (negation): *"this does not hold"*, test: *"is the point that it is false, rather than absent? Yes."*
- Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."*

Underdetermination has both faces. Formally it is a comparison between the number/strength of independent constraints and the degrees of freedom of the answer: too few constraints, and the system is underdetermined. Epistemically it is a negation of the claim "the information fixes the answer." These are not interchangeable. A vocabulary with ⋛ and without ¬ can say "the constraints are fewer than the unknowns"; it cannot say "therefore the claim of uniqueness is false." The converse also fails: ¬ alone can refuse a claim without saying why.

**Falsifier:** exhibit a derivation in which the comparison alone carries the refusal, or the refusal alone carries the threshold, with no loss. The operator definitions forbid it, but an instance would count as a real correction.

### Q2: Is the question a partition or a union?

- Fig 9 :54-55: *"when the split lands on a union rather than a partition, unbundle before you search again."* The same passage says a case in two conditions is not a harder case of either and becomes a specific compound once the first lever clears the region where only one condition holds.
- Fig 13 :136: *"It can say the question is not one question and must be split before it is searched again."*

D1 (reachability under Γ) and D2 (ground contact) are a union, not a partition of one set. The overlap is the live case: an answer can be outside closure(Γ) *and* the channel can be dead. A single lever (more search) clears the region where only budget binds, and leaves the intersection standing. That is why the answer has to be given per domain and never averaged.

**Falsifier:** show that D1 and D2 share an anchor, so that settling one settles the other. Then the union reading is wrong and a single verdict is legitimate.

### Q3: What is the dependency order?

Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*

Mapped to this question:

1. **Perception.** Is any residual arriving at all? (Fig 10 :24 *"the ground does not decay, the channel does"*.)
2. **Vocabulary.** Is there a term for "not fixed"? This requires ¬ (Operators table :73-74: *"A vocabulary with − and without ¬ can say what is missing from an arrangement and cannot say that an arrangement is wrong, so it can only ever accumulate."*)
3. **Objective.** Can the system say what would count as progress, in its own terms? Here: can it name closure(Γ) as the thing being tested? (Fig 13 :132-133.)
4. **Planning.** Can it run the reachability check before spending a search budget?
5. **Learn and carry.** Can it record the lineage so a later reader can locate an error?

The likely break is between links 2 and 3. Fig 3 :25-26 says the middle link, having terms for what a situation offers and being able to say what would count as progress, has neither obvious failures nor obvious tests, so it attracts the least attention. A system with a rich vocabulary of uncertainty scores but no bound notion of its own closure stops there, and effort spent on better calibration arrives at a step that cannot use it.

**Falsifier:** measure a system that passes link 3 while failing link 2. That would break the dependency reading.

### Q4: The two instruments are opposed, not interchangeable

Fig 6 :28-31: *"Which makes reachability two questions, not one. The instruments are opposed."* Inward asks whether the representation can hold the term; outward asks whether another frame already holds it. Fig 6 :31: *"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."*

For underdetermination this means sharpening a model's own uncertainty estimate (inward) does not tell you whether a neighbouring field already has an identifiability theorem that names the gap (outward), and importing that theorem does not tell you whether your own representation could have expressed it. The formula's step 7 adds the third question, SEARCHED: is the answer in here and merely unfound? Treating all three as one "underdetermination detector" is the error this derivation refuses.

### Q5: Analogues, and whether they are shadows or echoes

| analogue | source actually read | what it predicts here | status |
|---|---|---|---|
| Contrastive underdetermination: infinitely many curves through finitely many points | SEP, *Underdetermination of Scientific Theory* (2009, rev. 2023): *"No finite amount of data will ever be able to narrow the possibilities down to just a single function or indeed, any finite number of candidate functions."* | A non-converging search is compatible with genuine absence; it does not certify it. | Corroborates the barrier; low overlap with the framework (philosophy of science). |
| Non-identifiability in statistics | Wikipedia, *Identifiability*: *"A model that fails to be identifiable is said to be non-identifiable or unidentifiable: two or more parametrizations are observationally equivalent."* | Relative to a declared model, non-uniqueness is decidable and has a method. | Corroborates the YES; low overlap (statistics). |
| The halting problem and partial-solution recognition | Wikipedia, *Halting problem*: *"Alan Turing proved in 1937 that the halting problem is undecidable, meaning that no general algorithm exists that can correctly solve the problem for all possible program–input pairs."* | "Not found" is not "not there", even in principle for a general solver. | Corroborates the NO; low overlap (mathematics of computation). |
| Inverse-problem non-injectivity | *Inverse Problems* journal, vol. 42 (2026): papers distinguish *"invisible singularities (present in the ground truth but not in the reconstruction)"* and cases where *"distinct coefficients may produce identical data"*. | The residual can be located per slot; the reading does not determine the source. | Corroborates F7 and the metamerism point; low overlap (applied mathematics). |
| Metamemory, feeling of knowing and tip of the tongue | Wikipedia, *Tip of the tongue*: *"FOKs can be assessed through memory-monitoring testing in which a test subject is asked to 'estimate the likelihood' of recognizing when 'prompted with a cue' or information that they previously failed to remember."* The lorazepam result: participants *"are not aware that their answer is incorrect"* until told. | A metacognitive signal exists and can be calibrated, but it can also fail silently. | Corroborates both halves; low overlap (cognitive science). |

None of these is a derivation of the figure lines. They are convergent cases from fields with separate evidence pools, so they are corroboration at best. The *Language Models (Mostly) Know What They Know* paper (Kadavath et al., 2022) reports that models predict P(True) and P(IK) with *"encouraging performance, calibration, and scaling"* but *"they struggle with calibration of P(IK) on new tasks"*, which is the in-domain yes and out-of-domain no in measured form.

## CONCLUSION

The question is a union of a comparison and a refusal, settled in a dependency order that starts with whether any residual is arriving and ends with an outside frame checking the claim. Two instruments (inward and outward) plus a third question (searched) must be kept apart. The analogues converge from four low-overlap fields, but convergence is corroboration, not proof. The shape survives: relative reachability is decidable; world-level underdetermination is not certifiable from inside.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; canonical README and `THE_FORMULA.md`; the six world sources above, each opened on 2026-11-23. No measurement was taken.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 6 (opposed instruments), Fig 8 (union split, underivable versus unreachable), Fig 9 (union versus partition), Fig 10 (channel), Fig 12 (negation is not a bond), Fig 13 (decidability before search), Operators table (⋛ and ¬). Strains after re-census: none hidden; the one live type question is whether a missing constraint counts as a quantity for ⋛ at the relevant level, which needs an instrument rather than an argument.
