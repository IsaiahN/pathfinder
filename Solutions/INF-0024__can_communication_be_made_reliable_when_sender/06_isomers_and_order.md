# Structure, order and analogues for a no-shared-code channel

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The bundle "can communication be reliable without a shared code?" contains a noisy-channel problem and a meaning-coordination problem. Two questions are owed: (1) are these the same problem written differently, that is, isomers under Fig 12's definition, or different substances? (2) what is the dependency order from signal to grounded meaning, and which link currently has no instrument?

## DOMAIN CENSUS

Atoms held: two frames (sender A, receiver B), a signal, a channel, a convention, a ground, a residual per slot. Bonds held: the seven plus negation. No new primitive is needed for this derivation. The overlap of the two problems is a compound, not a harder instance of either (Fig 9 :54-57: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*).

## DERIVATION

### Q1 : Are the noisy channel and the no-shared-code seam isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Noisy channel as written: `source → transmitter → channel(+noise) → receiver → destination`. Residuals are bit errors; the codebook is held fixed at design time. This is the Shannon structure, confirmed in the 1948 source opened this session: *"The system must be designed to operate for each possible selection, not just the one which will actually be chosen since this is unknown at the time of design."*
- No-shared-code seam as written: `frame A(Γ_A) : signal : frame B(Γ_B)`, with `Γ_A ≠ Γ_B`. Residuals are meaning mismatches; there is no fixed codebook.
- They do **not** share the same atoms. The noisy-channel problem holds a codebook; the seam problem does not. By Fig 12's definition they are therefore **not isomers**. They are two different substances that a flat phrase like "communication reliability" writes with the same word.
- What they do share is a **functional group** (Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*): both have a sender, a signal, a receiver and a residual. The qualifier (fixed code versus absent code) fixes the substance.
- **Falsifier, written before the run:** if a mapping can be exhibited under which a bit-error residual and a meaning residual are the same quantity measured on the same slot by the same instrument, the isomer claim fails and the two problems must be merged. No such mapping was found in the sources read.
- **Status:** triangulated for the structural distinction (Fig 12 definition plus the Shannon scope statement from an outside field), single-source for the functional-group reading.

### Q2 : What is the dependency order, and where does the chain break?

Fig 3 :20-21: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**

Ordered chain for this question:

1. **Perception.** B can tell that a signal arrived and distinguish it from the previous signal. Instrument: a detector. Works in the standard case.
2. **Vocabulary.** B has terms for what the signal affords: what it could refer to, what action it licenses. This is Fig 3 :7 *"it has terms for what things afford: what can be moved, opened, joined, blocked"*. **This is the break.** When Γ_B lacks the term, no amount of signal quality helps.
3. **Objective.** B can say what would count as progress, in its own terms. Without step 2 there is no predicate in which to state the objective.
4. **Planning.** A route to the objective under incomplete information.
5. **Learn and carry.** Name what worked, verify it, carry it to the next exchange.

Fig 3 :25-26: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

A reading taken below the break is not a weak reading; it is a reading of nothing (Fig 3 :22-23: *"A step whose input never arrives cannot be diagnosed, only its predecessor can."*). So reporting a bit-error rate for a no-shared-code failure is a category error: it measures a link whose input never reached the broken step.

**Falsifier:** if an instrument is exhibited that measures "does B have a term for what this signal affords" without presupposing A's vocabulary, then step 2 has an instrument and the break claim is withdrawn or relocated. The refuters in `01` §4 are written to look for exactly such an instrument.

### Q3 : The seam is a declared meaning until it is a grounded one

Fig 10 :13-19, verbatim lines: *"two frames, one field, no shared reading"*, *"a disagreement nothing can state"*, *"is not yet a defect"*, *"the convention does not fix the bug"*, *"it makes the bug statable"*, *"a declared meaning is not a grounded one"*, *"→ install what can be violated"*.

This is the most direct structural statement of the question in the figure set. Two frames share a field (the signal) without a shared reading. The resulting disagreement is not yet even a defect, because nothing can state it. The role of a convention is not to fix the bug but to make the bug statable. And declaring that a signal means X does not make it mean X in a grounded sense: what must be installed is something that can be violated.

That last clause is the design criterion for any proposed solution. A protocol that cannot be falsified by the receiver's observations is a constant the sender authored, carrying the sender's authority (Fig 10 :48: *"a convention nothing can check is a constant the seat authored, carrying the seat's authority"*). This is why Fig 2 :36 matters: *"An anchor is legitimate when the question is constitutively about it."* The convention question is constitutively about agreement, so agreement is its legitimate anchor; the fact question is constitutively about the world, so agreement is disqualified there.

### Q4 : Three analogues, and what each predicts

Analogue 1, **coordination without a prior code (Schelling / Lewis, via the SEP entry opened this session)**. Two people separated in a department store with no agreed meeting point still find each other, because each looks for a place that is obvious to both. Vanderschraaf and Sillari (2023) report that Lewis later called "common knowledge" an unfortunate term because there is no assurance it is true. Predicts: a convention can solve the coordination problem without any anchor beyond the convention. Corroborates the convention domain D, not the fact domain B.

Analogue 2, **grounding in conversation (Clark and Brennan, 1991, via the entry opened this session)**. A contribution is not complete until the addressee gives evidence of understanding: an acknowledgement, a relevant next turn, continued attention. The reported "ice skater" experiment shows a referring expression being refashioned and then shortened across trials. Predicts: the invariant is built in the loop and the loop requires two-way evidence. Corroborates Fig 4 :30 and Fig 6 :23.

Analogue 3, **metamerism (Hard Problem is About Source essay, opened this session)**. A green reading does not determine whether the source was green light, yellow plus blue, RGB, CMYK or something unknown. Predicts: correct decoding is not evidence of which mechanism produced it. Corroborates the need for the discriminating ground tests in `01` §4.

**Falsifier for the analogue set:** if any analogue is shown to depend on a fixed code, a shared pretext or a common sensorium that the target case lacks, it is removed from the corroborating set. Analogue 1 depends on a shared culture of "obvious" places, which is a pretext; it is therefore admitted only for domain D and not for the genuine no-common-context case. This is a real limitation and is recorded, not hidden.

### Q5 : The arrangement is the substance

Fig 12 :94: **"The arrangement is the substance."** Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

A shared alphabet is the ingredient list. The code is the bond between symbols and meanings. Two parties can hold identical symbol inventories and still differ entirely in bond, which is why "we use the same words" is not evidence of a shared code. Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."* Under an ordered bond, swapping sender and receiver produces a different arrangement; communication is asymmetric, so the bond is ordered and the swap must be priced.

## CONCLUSION

The two problems in the bundle are **not isomers**: they share a functional group but not an atom set, because one holds a codebook and the other does not. The dependency chain breaks at the vocabulary link (step 2 of Fig 3), which is precisely the link with no standard instrument. The seam is a declared meaning until something violable is installed (Fig 10 :19), and the analogues corroborate the convention side and the round-trip requirement but not a fact verdict. The honest residue is a shape: a shared invariant built by contact, checked against a reference neither frame can move, with the convention reported as a convention and never averaged with the fact verdict.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, reopened this session. Outside anchors: Shannon 1948, Vanderschraaf and Sillari 2023, the Clark and Brennan summary, and the two essays quoted above. No experiment, channel measurement or simulation was run; the falsifiers are written but unexecuted.

## FIGURE CENSUS AND STRAIN

Fig 3 (dependency order, the middle break), Fig 4 (round trip), Fig 6 (closure and contact), Fig 9 (union versus partition), Fig 10 (seam, declared versus grounded meaning, legitimate anchor), Fig 12 (isomer, functional group, symmetry, arrangement), Symbols table (residual per slot). Strains after re-census: **none hidden.** One open limit: the analogue from Schelling/Lewis presupposes shared cultural pretext, so it governs convention formation but not the no-common-context extreme in the question. It is admitted with that scope restriction and not used as a witness for the fact domain.
