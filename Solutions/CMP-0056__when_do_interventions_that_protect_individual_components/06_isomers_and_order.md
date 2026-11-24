# Supporting derivation: bond structure, union order and habitat substitution

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

`01` conditions F5 through F8 say that protection can substitute a habitat, leave a union intersection standing, act as a regenerating part, or flip a loop sign. Three supporting questions are owed: (1) what bond structure distinguishes a protection that helps from one that harms, (2) in what order are the conditions composed, and (3) how are the two costs priced.

## DOMAIN CENSUS

Atoms held: the six substrate terms (Fig 13) plus the figure vocabulary of residual, slot, habitat, catalyst, cycle and functional group (Fig 11, Fig 12). Bonds held: the seven, of which sequence (→), comparison (⋛) and subtraction (−) bear here, plus negation (¬) for refusals. No new primitive is available without import. One line per domain: D1 habitat (actors and contact, ground = measured cascade), D2 signal (instruments and per-slot residual, ground = what does not update), D3 decision (designer, filters, two budgets, ground settles). Union compound, ordered by dependency as in Fig 3.

## DERIVATION

### Q1 - Are two protections isomers, or members of a functional group?

- Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Consider two protections over the same component set: P1 shields a component so it survives, and P2 shields the same component but redirects its load to a neighbour. If both are written only as "component protected", they look identical in the formula. Under Fig 12 :117 they are different substances if the bond to the habitat differs (survival without contact change versus production of a new contact). As the record is usually written, they share a **functional group** under Fig 12 :124. The substructure we may call protection-present fixes the kind, and the qualifier (which bond to the habitat) says which member.

The stronger isomer claim: write both protections over the full shared atom set `{component, neighbour, residual, channel, habitat}` and let them differ only in arrangement. Then they are isomers: same atoms, different bond, different substance. That is the claim worth testing, because it predicts different system-level behaviour from the same list of protected components.

**Falsifier, written before the run:** if two protections over the same atoms and different bonds produce identical per-slot residuals at every horizon, the isomer claim fails and only the functional-group reading stands.

### Q2 - Catalyst versus spent part

- Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
- Fig 12 :107: "Settling compresses the description and not what it cost to establish."

A fuse is spent: it absorbs one disturbance and is gone, so its protection is consumed by the event it guards against. A regenerating buffer survives its own use and acts again on the next disturbance. The figure says nothing records which a term is, so a system that records only "protection present" cannot distinguish them. Across repeated small disturbances the two accumulate differently: the spent part degrades and the signal returns; the regenerating part persists and the signal does not. This is the micro-structure under condition F4 (channel cutting) and condition F6 (loop sign).

**Falsifier:** show a system whose record explicitly tags each protecting part as spent or regenerating and whose per-slot residuals are identical across uses for both tags. That breaks the claim that the distinction carries system-level information.

### Q3 - Union order: why one lever leaves the intersection

- Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
- Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

Let C = "component safe" and S = "system safe at horizon H". The question asks for C ∩ S. Option A optimises C alone. The region where C holds and S fails is the intersection that remains after the lever, and it is categorically different from either region alone: a component that is safe in a system that is not is not a harder version of a safe component, it is a compound. The dependency order is therefore: unbundle C and S, enumerate the habitat for each, find a witness for each, then recombine. Fig 9 :43: "The verdict tells you to leave. The lookup tells you where to go. Elimination is what you do after you arrive."

**Falsifier:** exhibit a system in which optimising C alone provably empties C ∩ S complement across the enumerated habitat, verified at the ground. Then the union unbundling adds nothing.

### Q4 - Order of refusal before mint

- Fig 6 :42: "What is recorded only grows. What is reachable is derived, and it can fall."
- Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate."

"Protect the component" is a claim that can be refused. A vocabulary with only protections and no refusals can only accumulate safeguards; it cannot carry the correction when a safeguard is the cause of the fragility. The loop therefore refuses before it mints: check whether the protection being considered is itself the wrong term (Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so") before adding another protection. This is Formula step 2 applied to interventions.

**Falsifier:** show a system that accumulates protections without any refusal and whose per-slot residuals trend down at all horizons. That breaks the refusal-before-mint instruction for that case.

### Q5 - Two currencies, and the round-trip gap

- Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."
- Fig 12 :127: "They are in different units, so a system holding one accounting cannot compare them"
- Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Describing a protection is cheap in bits. Enumerating the habitat outward to a cascade horizon is expensive in actions. They do not add, so a plan that is cheap to state can be unaffordable to verify. The condensation from the full figure set into the shorthand "enumerate the habitat and measure per slot" loses information; Fig 4 requires measuring that round-trip gap `R_T` rather than assuming zero. No numerical `R_T` exists here because no ground reading was taken; `11_audit.md` records it qualitatively.

**Falsifier:** produce a single unit in which description cost and verification cost are commensurable without loss, and show the condensed shorthand preserves all constraints of the full figure set (`R_T = 0`).

### Q6 - Habitat substitution as an ordered move

- Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."
- Fig 11 :67: "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."
- Fig 11 :63: "Which is why a managed ecosystem is permanent work rather than a solved state."

The order is: name the goal; enumerate what the original habitat supplied for that goal; substitute; check what failed to be reproduced; check what was unintentionally introduced; keep monitoring. Reversing the order (substitute first, then look for the goal) is the stacking error Fig 10 :73-79 warns about: a candidate set chosen by a participant is an authored room however well the selection is reasoned.

## CONCLUSION

Two protections over the same atoms but different bonds are a real isomer claim, with a written falsifier. A spent part and a regenerating part are distinguishable only if the system records which, and that distinction carries system-level information across uses. The conditions compose as a union and must be unbundled before any lever is chosen, refusal precedes mint, and the two costs must be read separately with a measured round-trip gap. Isolation substitutes a habitat and is permanent monitoring work. None of this requires a new primitive, an import that moves the wall, or a system-specific numeric threshold.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the canonical figures README and the metalaws note; the eight essays where cited in `05`. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 :22/:30 (methods cross, round trip), Fig 5 :53 (refusal), Fig 6 :14/:22/:42 (import, record versus reach), Fig 9 :43/:55/:56/:57 (union, where elimination happens), Fig 10 :73-79 (authored room), Fig 11 :39/:40/:63/:66/:67 (capability, contact, asymmetry, substitution), Fig 12 :104/:107/:117/:119/:124/:126/:127 (isomer, catalyst, functional group, two prices), Fig 13 (six-term set), Operators :58 (negation). Strained after re-census: the operand type of ⋛ at a composed level is not used here, so no live strain; the one open item is the unmeasured numeric `R_T` and the unmeasured threshold name.
