# Anchor types, calibration as a comparison, and dependency order

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

Calibration is a comparison between two quantities: the confidence a person states and the correctness the ground returns, per slot. Two questions are owed: (1) is that comparison a figure-defined bond, and (2) in what order do the links have to work before the comparison is meaningful?

## DOMAIN CENSUS

Atoms held: the six substrate terms (space, time, energy states; spectrum, gradient, network structures) and the operators, including the seven bonds and negation. Bonds held: ⋛ comparison, → sequence, − subtraction, and the rest. No new primitive is available without import. The quantities specific to this question (confidence, correctness rate, independence, anchor type) are bindings from the human-factors frame onto these operators, not new members of the substrate.

## DERIVATION

### Q1 - Is calibration a comparison bond?

- Operators table (local file): ⋛ is *"a threshold relation between two quantities"*, and the test is *"is it about which is larger, rather than both being present? Yes."*
- Symbols table (local file): *"a goal is a comparison, which is why a vocabulary without it cannot state one"*.
- The two operands held here are stated confidence and observed correctness in the same slot. Swapping them changes the claim: "confidence exceeds correctness" is overtrust; "correctness exceeds confidence" is undertrust.
- ⇒ Calibration is a ⋛ comparison, not a sum and not a conjunction. A single number computed by averaging across slots destroys the ordered relation, which is why Fig 1 :19 requires per-slot indexing.
- **Falsifier, written before the run:** if a symmetric bond (conjunction or identity) were sufficient to express calibration, swapping confidence and correctness would preserve the claim. It does not. If a world case shows overtrust and undertrust are the same state under relabelling, this derivation fails.

### Q2 - Are the two anchor types isomers?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- The person-facing case and the code-correctness case use the same atoms (person, system, output, ground) but differ in which element is the anchor. By Fig 12's definition they are **isomers**: same atoms, different arrangement, different substance. The difference is invisible if you only list the atoms ("human, AI, task") and decisive in the behaviour (defer to the person, or defer to the instrument).
- **Falsifier:** if both cases can be written with the same anchor and the same bond and still produce different correct verdicts, they are not isomers and the functional-group reading stands instead. This is checkable by a controlled task switch.
- **Strain, named:** a person's judgment is an anchor for the person-facing case and an instrument for the code case. Fig 2 :36 makes legitimacy a function of the question, so this is not a contradiction. It is a change of role, not a step upward.

### Q3 - What is the dependency order?

- Fig 3 :20: *"The chain is ordered by dependency, not by importance."*
- Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*
- Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
- Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*
- The order is perception, vocabulary, objective, planning, learn and carry. For trust calibration: perceive the output and outcome; have terms for what a reading discriminates; state that progress is correct reliance rather than agreement; choose when to check; carry the correction to the next slot.
- The middle link (vocabulary plus objective) has the fewest instruments, which is why effort lands above the break: more displays, more model accuracy, more user education. Fig 3 (local reading): *"Having terms for what a situation affords was taken for a dictionary and it is a grammar."*
- **Falsifier:** if users with no vocabulary for failure modes calibrate correctly across novel tasks with no feedback, the vocabulary link is not load-bearing and the dependency order is wrong for this domain.

### Q4 - What order is the social/population scale?

- Fig 4 :20: *"Only the actors, the currency and the anchor change."*
- Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*
- Fig 8 :45: *"Two frames together reach what neither reaches alone."*
- At the population scale the actors become users and reviewers, the currency becomes agreement, and the anchor must still be the ground. A room of agreeing users is one long room; two low-overlap frames ranged against a residual are a triangulation. These are different orders, not the same order written twice.
- **Falsifier:** if a room of high-overlap users produced a ground-discriminating reading that neither low-overlap frame could produce, Fig 7 :35 would be wrong for this domain.

### Q5 - Two competing explanations, kept separate

| explanation | predicts | figure status |
|---|---|---|
| Miscalibration is a fluency/affect problem | users follow surface cues; corrections that add friction help | corroborated by Jaidka and Cai, and by Vastfjall 2026, but a filter, not the verdict |
| Miscalibration is a hypothesis-space problem | users never generate the alternative that would falsify the AI's answer; delaying the recommendation helps | corroborated by Pham and colleagues, noisier and closer to the middle link |

A union, not a partition. A single lever (friction, say) can clear the fluency case and leave the hypothesis-space case standing, because the second condition still binds. The figure verdict does not choose between them; it names the anchor, per-slot residual and independence conditions both must satisfy.

## CONCLUSION

Calibration is a ⋛ comparison at the person's level, indexed per slot. The person-facing and code-correctness cases are isomers under Fig 12's definition: same atoms, different anchor, different behaviour. The dependency order runs perception to vocabulary to objective to planning to carry, with the middle link the usual break. At the social scale, agreement is not a verdict and only low-overlap frames add reach. Two competing explanations are a union, not a list. No new primitive, no universal threshold, and no import that moves the wall is required.

## ANCHOR

Verbatim figure text extracted from the canonical local figure file this session; the eight essays; the world sources in `10_source_ledger.csv`. No measurement of human trust was taken.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor legitimacy, triangulation, correlation valence), Fig 3 (dependency order, middle link), Fig 4 (scale transform), Fig 7 (room chain), Fig 8 (union surplus), Fig 9 (describe before looking, filters vs witnesses), Fig 12 (isomer, functional group, bond carries meaning), Fig 13 (closed set), Operators table (⋛), Symbols table (goal is a comparison), Formula (steps 3, 5, 7). Strains after re-census: one, the role-change of human judgment between the two anchor types, named in Q2 and dissolved by Fig 2 :36; and the ⋛ operand type at population scale, named in `01_figure_grounded_audit.md` section 5.
