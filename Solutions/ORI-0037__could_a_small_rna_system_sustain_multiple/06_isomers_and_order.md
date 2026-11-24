# Replication as a bonded arrangement: isomers, catalyst, cycle, and order

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6). No measurement under natural conditions was used.

**Purpose.** The question asks whether a small RNA system could sustain multiple generations under natural conditions. Before answering, three structural questions have to be settled: what kind of object a replicating RNA is under Fig 12, how a generation chain relates to a closed cycle, and what order the handoffs must run in. This file does that work. A falsifier is written before the conclusion.

---

## RESIDUAL

A small bounded library Γ (few atoms, limited bond vocabulary) is claimed to carry a replicating system across n handoffs. The residual is per molecule slot and per handoff: the gap between what the library predicts the offspring will be and what is observed. Because the bond between generations is ordered and productive, swapping parent and offspring does not preserve the relation. What has to be explained is not whether a single copying step works, but how an ordered, productive chain can persist and still differ from its predecessor.

---

## DOMAIN CENSUS

- **Arity:** three-place (replicator Γ, habitat H, generation index n), with two indexed places, molecule slot and handoff.
- **Symmetry:** the production bond is ordered. Fig 12 :77 "A produces B; B did not exist before" and Fig 12 :79 "is there a B before A fires? No." Fidelity is a comparison, not a symmetric conjunction.
- **Scale:** single-molecule loop, population in a habitat, cross-generation channel. The transform between scales is lossy (Fig 4 :27).
- **Domain 1, molecular arrangement.** Actors: atoms, bonds, catalyst. Currency: composition inside closure(Γ). Anchor: the actual offspring sequence.
- **Domain 2, the generation chain.** Actors: template, complement, monomers, parasites. Currency: fidelity and ground pressure per handoff. Anchor: differential survival at the ground.
- **Domain 3, the habitat.** Actors: conditions and contacts. Currency: introduction versus subtraction. Anchor: the ground, never the seat.
- **Order by dependency (Fig 3):** perceive what is in contact, have terms for fidelity and separation, state the objective as keeping R small across n handoffs, design the transfer, name what worked.

---

## DERIVATION

### Q1: Is a replicating RNA sequence an isomer under Fig 12?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :97-98: "This is not an analogy. Chemistry hit it first: silver fulminate and silver cyanate have the same composition and different properties, which is what forced structure into the notation."

An RNA molecule and its complement can be written with the same alphabet and a different order. Under Fig 12 :48, "A molecule is a bonded arrangement. A chain is the degenerate case: one bond type, no branching." A sequence is therefore a molecule with the chain bond, and two sequences with the same base composition but different order are isomers in the figure's sense: same atoms, different arrangement, different behaviour. This is not a decorative analogy. The figure itself reaches for the chemistry case to make the point.

What follows for the question: a small Γ can enumerate many arrangements without adding an atom, so sequence space is large even when the alphabet is small. But enumeration is not genesis. Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one." A list of nucleotides does not specify a replicating route; the bond does, and the bond carries information the ingredients do not.

**Status: `general` for the isomer rule, `specified` for the RNA application. Triangulated** between Fig 12 :117 and the chemistry case at :97-98 (two distinct passages in one figure with different subject matter, low overlap in wording). Not `grounded`: no sequence was measured here.

### Q2: Can a chain of generations close without a catalyst?

Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

A chain of handoffs is a sequence (→), not a cycle. A sequence terminates; a cycle re-enters its own output as input. For a replication system to persist across many handoffs, something must survive its own use so that the loop can close. The figure distinguishes a catalyst from a spent part across uses, and notes that nothing in a term's notation records which it is. That is exactly the ambiguity in an RNA replication claim: a template that is copied once and consumed is a spent part; a ribozyme that copies and remains is a catalyst. They behave differently across uses and a single-observation protocol cannot tell them apart.

Fig 10 :24: "the ground does not decay, the channel does." The thing that can fail across generations is the channel, not the chemistry in the abstract. A chain that cannot close is a channel that runs in place.

**Status: `general` rule, triangulated** between Fig 12 :119/:121 and Fig 10 :24. **Refuter:** a multi-generation replication chain measured to close with no part surviving its own use, under the same per-slot residual accounting.

### Q3: What order do the handoffs run in?

Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced." Fig 7 :37: "Progress per handoff has two factors. Zero either and the chain runs in place:" Fig 7 :38 "the bracket's fidelity across the handoff", Fig 7 :39 "the ground's pressure on the room".

Two constraints follow, and neither is optional:

1. **Difference.** Each generation must differ from the last. A repeated identical handoff is motion without progress (Fig 7 :32).
2. **Matching.** The differing generation must match the residual the previous one surfaced. A room summoned by something other than the residual is a composed room, not a selected one.

The order is therefore dependency order (Fig 3), not importance order. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Raising fidelity when ground pressure is zero cannot rescue the chain, and increasing selection when the bracket cannot cross the handoff cannot either. The two factors multiply; they do not substitute.

**Status: `general` rule, `specified` application, triangulated** between Fig 7 :36-39 and Fig 3 :19.

### Q4: Can the reach be renewed from inside Γ?

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."

A small Γ has few atoms. Copying rearranges them and does not add one. Sustained adaptation therefore needs an import from a differing closure: fresh monomers, a compartment that changes the selection regime, or a parasite whose arrival alters the contact cascade. This is where the world literature bears on the structure without deciding it. Furubayashi and Ichihashi (2022) report stasis after about 600 generations in a constant environment and renewed diversification when coevolving parasites change the environment. That is the world-level instance of "the next room must differ," not a figure authority for it.

**Status: `general`. Refuter:** sustained adaptation across many handoffs in a closed Γ with no import and no changing contact. Note that this does not assert that a natural habitat is closed; it asserts that a closed one cannot renew.

---

## FALSIFIER, WRITTEN BEFORE THE CONCLUSION

The structural claim consisting of Q1 to Q4 is refuted if any of the following is measured:

1. A multi-generation RNA replication chain closes with no part surviving its own use, under per-slot residual accounting. (Breaks Q2.)
2. Persistence across many generations is measured while bracket fidelity and ground pressure are both at or near zero and non-declining. (Breaks Q3.)
3. Open-ended adaptation is sustained in a closed Γ with no import and no change in contact. (Breaks Q4.)
4. Two RNA arrangements with identical atoms and identical bonds are found to be the same substance in every measured behaviour, contrary to the isomer rule. (Breaks Q1.)

If one fires, the affected claim is narrowed or withdrawn and the change is recorded in `01` section 8 rather than edited away. Finding a numeric error threshold is not a falsifier of this file; it fills a different, currently empty slot.

---

## CONCLUSION

A replicating RNA is a bonded arrangement, so sequence isomers are real differences in substance and not differences in spelling. A generation chain is a sequence and cannot close by construction; closure requires a part that survives its own use, which the figures call a catalyst and which a single-use observation cannot distinguish from a spent part. The handoffs run in dependency order with two multiplying factors, bracket fidelity and ground pressure, and each generation must differ from the last while matching the residual that one surfaced. Renewal of a small reach requires contact with a differing closure, because composition inside a closed set adds no atom. All of this is `specified` on the RNA application and `general` on the structural rules. None of it is `grounded`, and none of it returns the empirical yes or no.

---

## ANCHOR AND FIGURE CENSUS

Verbatim figure text extracted from the SVGs, `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-23. No measurement was used.

Figures used: Fig 3 (dependency order), Fig 4 (lossy transform between scales), Fig 6 (closure and import), Fig 7 (handoff factors, mirror chain), Fig 8 (idempotent closure, import), Fig 10 (channel decay), Fig 12 (isomer, catalyst, cycle, chain, sequence bond), Fig 13 (closed set, open arrangements).

**Strain recorded, not smoothed:** Fig 12 :121 says a chain cannot close by construction, while real replication lineages persist. Re-census resolves this: the chain is a sequence of handoffs; persistence is a cycle with a catalyst that survives its own use. Different objects, one apparent contradiction. No verdict changes.
