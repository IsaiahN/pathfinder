# Codes as molecules, isomers, and the order of refuse / import / mint

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The main audit established the shape: reliability against a code-adapting adversary needs a code plus a resource the adversary cannot read. Two supporting questions remain. (1) In what sense is the code a structured thing the adversary can adapt to, rather than a bag of symbols? (2) In what order must refuse, import, mint and settle be performed, and what breaks if the order is reversed?

## DOMAIN CENSUS

Atoms held for this derivation: symbols and signal states (states in the six-term sense of spectrum and energy), plus the bonds available in the Operators table. No new primitive is available without import. Bonds relevant here: `→` sequence (the code maps message to codeword in order), `⋛` comparison (decoded against sent at a threshold), `−` subtraction (residual as a difference), `¬` negation (refusal of "channel is an anchor"). Currency: description cost in bits and settling cost in actions, which do not add (Fig 12 :125-126). Anchor: the receiver counter.

## DERIVATION

### Q1. Is a code a molecule, or just a list of ingredients?

Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :94: *"The arrangement is the substance."*

A code is not the alphabet alone. It is the alphabet plus the typed relations that map messages to constrained sequences. Change the constraint and you change the thing, while the alphabet stays identical. This is exactly Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Two codes over the same alphabet with different symbol-to-sequence constraints are isomers under the figure's own definition. Their ingredient lists match; their behaviour under a jammer that reads the code does not. This is why "same alphabet, same redundancy" is not a reason to expect the same reliability.

**Falsifier, written before the run:** if a code's reliability against a code-aware adversary is invariant under every rearrangement of its atoms that preserves the ingredient multiset, then the bond carries nothing and the isomer reading fails. This is checkable by permuting constraints at fixed alphabet and redundancy.

### Q2. What does the adversary read, atoms or arrangement?

The question says the adversary *"adapts to the code."* A code-aware jammer can exploit the mapping from messages to sequences, not merely the symbol statistics. Under Q1 it reads the arrangement, which is the part a flat formula does not record. Fig 12 :95-96: *"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."*

So the adversary is not overcoming more noise; it is ranging against a structure. That is why adding more of the same atoms (redundancy) does not necessarily help, and why an import that changes what the adversary can read (a private mapping) changes the problem categorically rather than by degree.

**Falsifier:** a jammer whose optimal strategy depends only on the symbol distribution and not on the message-to-sequence mapping. Then the arrangement carries nothing for this adversary and Q2 fails; the dispute has been misidentified as structural when it is statistical.

### Q3. What is the order of refuse, import, mint and settle?

The formula is explicit that the fifth route is not reached by the other four (step 2: *"the fifth by what is WRONG, and no arrangement of the other four reaches it"*), and Fig 5 :50 names it: *"the gap has a fifth kind, and the pipeline has no branch for it."* Fig 5 :51-52: *"A residual whose content is that a regularity the system holds is false owes a term, and the term it owes refuses another rather than explaining a gap."*

Applied here, the held false term is *"the channel is a fixed background the code is designed against."* Formula step 2 routes it to REFUTED: *"a term held is false; what is owed is a refusal, not an explanation."* The unary operator is ¬ (Operators table :53-58: *"negation: this does not hold"*; *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*).

The correct order, each step gated by the one before:

1. **Describe R in effect terms first.** Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit."* Here: the channel distribution changes when the code changes.
2. **Refuse the false term.** ¬("channel is an anchor"). Formula step 2. This is a refusal, not a better noise model.
3. **Look up the frame whose closure predicts the shape.** Fig 9 :23-24: *"the frame whose closure predicts it"* and Fig 9 :25: *"one lookup"*; Fig 6 :23: *"The bound moves only on contact with a frame whose closure differs."* The differing closure is a variable the adversary cannot read.
4. **Import with a source gate and a shadow test.** Fig 8 :12-13: *"source gate: provenance"* and *"shadow test: explains a gap."* Debit against independence (Fig 6 :24).
5. **Mint the scheme.** Step 3 gates: SUPPORT |R⁺_s| > 0 per slot, REACHABILITY in closure, NOVELTY, and the MDL bargain *"cost(φ) + left(R,φ) < cost(R)."*
6. **Settle at the ground.** Step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."*

**Falsifier for the order:** a case in which a scheme is minted and settles at the ground while the false term "channel is an anchor" is still held. If that happens, refusal was not owed first and the step-2 order is wrong here.

### Q4. What happens if the order is reversed?

Minting before refusal produces a better code designed against a false noise model. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Importing before describing R produces a fashionable primitive with no shadow test, which Fig 6 :24 prices as *"a wrong atom costs more than starting from primitives."* Searching before splitting treats a union as one problem and wastes the budget on the region where only one condition holds (Fig 9 :55).

**Falsifier:** a documented program that reversed the order, kept the false term, and still achieved per-slot reliability against a code-aware adversary without any unreadable resource. That would refute the order claim, not merely the implementation.

### Q5. Is repeated relaying a cycle or a room chain?

Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* A chain of relays that all use the same code and the same shared key is a single cycle with positive feedback: each handoff re-enters the same arrangement, so a compromised key propagates. Fig 7 :12-13: *"same closure, handed along; / agreement compounds, evidence does not."*

The alternative is a room chain: fresh rooms selected against the residual, low overlap between rooms (Fig 7 :24-25: *"low ρ between rooms; the next room is picked / against the residual the last one surfaced"*). In engineering terms, per-session keys and independent codebooks are the room-chain reading of the same structure. They are a provenanced import from the security frame, not a figure output.

**Falsifier:** a relay chain with fresh independent per-session keys whose per-slot residual does not differ from a single fixed-key room under a code-aware adversary. Then the room-chain analogy is empty here.

### Q6. Which analogue is a strain?

The "code as molecule" reading is an **analogue with a falsifier**, not a figure line that governs a communication system. The figures govern composition in a library; a codebook is a composition in an engineering library. Fig 12 itself licenses the cross-domain use because it says the rules are structural (*"The arrangement is the substance"*), but `05_what_shape_means.md` §6 warns that the six-term set is a visible guess, not a neutral vocabulary. So the isomer claim is stated as `specified` and falsifiable, never as `grounded`.

One real strain remains: the ⋛ comparison at the reliability threshold. Operators table :49 defines ⋛ as *"a threshold relation between two quantities."* In many information-theoretic treatments reliability is an average over messages, which is a quantity; in the adversarial treatment it is a worst-case over channel states and a threshold on a per-slot residual. Whether the worst-case operand counts as a quantity at that level needs an instrument, not an argument. The strain is named, not smoothed.

## CONCLUSION

The code is a bonded arrangement, so two codes with the same alphabet can be isomers with different behaviour under a code-aware jammer (Q1, Q2, falsifiers stated). The operation order is describe R, refuse the anchor term, find the differing closure, import with gates, mint, settle (Q3), and reversing it produces the named failures (Q4). Repeated relaying is a same-closure cycle unless fresh rooms are introduced, which is an import (Q5). The isomer reading is a falsifiable analogue, and the operand type of ⋛ at the worst-case threshold is a live strain (Q6).

## ANCHOR

Verbatim figure text extracted from the canonical `03-FIGURES_TEXT.md`; the Operators and Symbols tables; `THE_FORMULA.md` and the canonical figures README. No measurement was used. World corroboration (Hosseinigoki and Kosut 2019; Csiszar and Narayan 1988) is secondary and recorded in `10_source_ledger.csv`.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor test, mirror), Fig 3 (dependency order), Fig 5 (fifth kind, refusal), Fig 6 (import gates, wrong atom price), Fig 7 (room chain), Fig 8 (source gate, shadow test, provenance), Fig 9 (describe before looking, union), Fig 10 (channel decays), Fig 11 (contact), Fig 12 (bond, isomer, arrangement, cycle, two currencies), Fig 13 (shape and import), Operators (¬, ⋛ type). Strains after re-census: one, the ⋛ operand type at a worst-case threshold, named above and carried into `09_watson_answer.md` and `11_audit.md`.
