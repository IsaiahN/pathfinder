# Isomers and order: why the same ingredients make different systems

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The question asks what distinguishes two things that can look identical from outside. The supporting question is: can two systems with the **same atoms** still be categorically different, and which bonds or operators make the difference? If yes, then "more optimization" is the wrong axis and "different arrangement" is the right one.

## DOMAIN CENSUS

Atoms held for this question: an agent Γ, a belief b, an action a, an objective/proxy, compute, and a training history. Bonds held: the seven (+ ∥ ≡ → ⇒ − ⋛) plus the unary ¬. No new atom is available without import. The two systems share every ingredient; what may differ is the bond between them and whether the vocabulary contains ¬.

## DERIVATION

### Q1 - Same atoms, different system: is this an isomer?

- Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :94 *"The arrangement is the substance."*
- Fig 12 :97 *"silver fulminate and silver cyanate have the same composition and different properties"*

A narrow optimizer and an intelligent system can have the same model, the same data, the same compute and the same reward signal. Under Fig 12 they are still two different substances if the bond to the ground differs: one composes inside closure against a proxy, the other composes across a maintained contact with a ground and can import. The difference is invisible in the ingredient list, which is exactly why asking "how much optimization" cannot answer the question. Fig 12 :96 puts it sharply: *"Two entries can share every ingredient and be inverses of one another."*

**Falsifier, written before the run:** if two systems with identical ingredients and identical bonds to their objective still differ in the relevant sense, then the bond is not the distinguishing quantity and this isomer reading fails; the difference must be sought in an atom, which would require an import.

Verdict: `specified`, triangulated across Fig 12 and the chemical instance it cites. Not a chemical analogy imported wholesale; Fig 12 states it as a structural rule, and the chemistry is the figure's own evidence.

### Q2 - Which bond does the narrow objective use, and which operator is missing?

- Fig 12 :112 *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."*
- Fig 12 :111 *"A vocabulary without bonds can name a state and cannot name a route to one."*
- Fig 12 :140 *"A vocabulary that cannot refuse can only accumulate."*

Mapping: the objective is a **goal**, so it is a comparison (⋛). Progress is a **subtraction** (−). The plan is a **sequence** (→). All three are available to a fixed-objective optimizer. What is not available from bonds is the statement that the objective is false: that needs ¬, a unary operator, not a bond.

The Operators table :58 says: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."* So a system can be arbitrarily good at goal, progress and plan and still be unable to carry the correction "this aim is wrong". That is the structural, non-empirical part of the distinction. It does not require claiming the system literally lacks a NOT gate in code; it requires that no settled term in its vocabulary refuses its own objective, which is a checkable claim about the system's library, not its implementation.

**Falsifier:** exhibit a system with no ¬ in its settled vocabulary that nevertheless refuses and replaces its own objective on ground evidence. Then ¬ is not necessary and Q2 is withdrawn.

### Q3 - Order: where the chain actually breaks

- Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."*
- Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
- Fig 3 :10 *"it can say what would count as progress here, in its own terms"*
- Fig 3 :29 *"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."*

Dependency order: perception → vocabulary (what things afford, Fig 3 :7) → objective → planning → learn and carry. The objective is link 3, the middle link, and Fig 3 :24-26 says it is where chains usually break because it has neither obvious failures nor obvious tests. Narrow-objective work almost always lands above the break, where the measurements already exist. So two systems can differ at link 3 while looking identical at links 4 and 5. This is the *order* part of the answer: the distinguishing intervention is earlier than the score.

**Falsifier:** a case where a system's failure to qualify as capable is demonstrably at planning or actuation while links 1 through 3 all measure high and non-declining. Then link 3 is not the diagnostic location for this question.

### Q4 - Order within the loop: refuse before mint

`THE_FORMULA.md` step 2 (a formula line, not a figure line) routes a residual whose content is that a held term is false to REFUTED, and says what is owed is *"a refusal, not an explanation"*. Fig 5 :53 states the same: *"refuted: a term we hold is wrong; a term is owed that says so"*. Fig 5 :55 adds: *"What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."*

The order matters. A system that mints a better optimizer before refusing the objective has spent its budget on the wrong term. The exemplar's retraction record on this exact point applies: a refused term adds to the record and lowers the reach, so the fall is computable rather than stipulated (Fig 6 :42-43). For this question, refusal of the proxy is the first move, not a later refinement.

**Falsifier:** a case where refusing the objective first lowers verified capability irreversibly while minting a better optimizer first raises it. Then the prescribed order is wrong for this domain.

## CONCLUSION

Two systems with the same ingredients can be Fig 12 isomers: same atoms, different bond to the ground, different substance. The narrow objective's vocabulary can say goal, progress and plan, but not the refusal of its own aim, because ¬ is not a bond. The dependency chain puts that difference at link 3, the middle link with no instrument, so score-based comparison looks at the wrong place. Order within the loop puts refusal before mint. These are structural claims about arrangement, not measurements. They are `specified`, ungrounded, and each carries a written falsifier.

## ANCHOR

Verbatim figure text extracted from the local `03-FIGURES_TEXT.md` and reopened this session; `THE_FORMULA.md`; the essays in `05_what_shape_means.md`. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order, middle link), Fig 5 (the refuted bin and what refusal removes), Fig 6 (reach falls by addition), Fig 12 (isomer, arrangement is the substance, bonds versus negation), Operators table (¬ is not a bond). Strains after re-census: none. The one open item is Q1's falsifier, which needs a ground to run; until then the isomer reading is a checkable shape, not a settled fact.
