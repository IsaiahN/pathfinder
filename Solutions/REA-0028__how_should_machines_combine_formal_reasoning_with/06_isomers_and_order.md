# Supporting derivation: what is combined, bond types, order, and analogues

**Mode: `specified` on the composition reading, `general` on the bond rules.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The question says "combine formal reasoning with intuitive, approximate, or context-sensitive judgments." The word "combine" is underdescribed. Three readings are possible, and the figures separate them:

1. **Conjunction:** both are present at once.
2. **Production:** the fast frame produces terms consumed by the slow frame.
3. **Blend:** one set of ingredients merged into one frame.

Which reading is licensed? And what is the ordered relation, if any, between the two frames?

## DOMAIN CENSUS

Atoms held, in this domain: a library Γ with symbols, atoms and typed bonds (D1); a weighted evidence pool with percepts and a weighting `w` (D2); an import operator with provenance and a shadow test (D3); a ground that supplies `R` (D4). Bonds held: the seven, including `→` sequence, `⇒` production, `⋛` comparison, and the unary `¬` refuse. No new primitive is available without import.

## DERIVATION

### Q1 — Is the combination a conjunction (`+`)?

- Operators table :11-15: `+` is *"conjunction"*, *"both hold at once"*, symmetric: *"swap the operands. Does the meaning change? No."*
- A symmetric bond means the two frames are interchangeable. But Fig 10 :42 is asymmetric: *"A verifier that can reconstruct the claim cannot verify it."* The proposer and the verifier cannot be swapped.
- ⇒ Conjunction alone is insufficient. It cannot express the verifier/proposer asymmetry. It also cannot express a route (Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*). Refuted as the complete answer.

### Q2 — Is it production (`⇒`)?

- Operators table :36-39: `⇒` is *"production"*, *"A produces B; B did not exist before"*: *"is there a B before A fires? No."*
- The fast frame does produce a candidate term that did not exist in Γ before. Fig 6 :14: *"the only operator that moves the wall"*; Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
- ⇒ `⇒` is the correct bond for the **import step**, with one condition: the produced term must pass a source gate and a shadow test (Fig 6 :12-13), and the import is *"debited against that frame’s independence"* (Fig 6 :24). A term that is only a fast binding of an existing atom is not produced; it is merely reached faster. This is the distinction the missing instrument in F12 must make.
- **Falsifier, written before the run:** if a fast output that is provably a rebinding of existing atoms still expands the formal closure, the `⇒` reading is wrong and the combination is something else.

### Q3 — Is it a sequence (`→`)?

- Operators table :30-33: `→` is *"sequence"*, *"A then B; B needs A to have happened"*: *"swap them. Does it become a different thing? Yes."*
- Fig 4 :22-24: *"Only methods cross up. Only head starts come down."* *"downward: something that makes the next search cheaper. Never a replay of what worked once."* The two directions are ordered and not interchangeable.
- ⇒ `→` is the correct bond for the **membrane**, but it is not symmetric with `⇒`: the import goes one way (fast to slow) and the head start goes the other (slow to fast). The combination is a cycle across a membrane, not a single ordered chain. Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*
- **Falsifier:** if the two directions are interchangeable with no loss, Fig 4's asymmetry is wrong and the cycle collapses to a chain.

### Q4 — Is it a comparison (`⋛`)?

- Operators table :48-52: `⋛` is *"a threshold relation between two quantities"*: *"is it about which is larger, rather than both being present? Yes."*
- Fig 9 :6: *"the verdict: is φ* in here at all?"* The question of whether the missing atom is inside the closure is a threshold question about reach, not about the two frames. `⋛` governs the verdict about `φ*`, not the coupling of the frames.
- ⇒ Using `⋛` to join the two frames is a type error. It joins a quantity to a quantity (is the residual in the closure), not a frame to a frame. This is the same category mistake the exemplar found in the QM/GR record, reached independently here.

### Q5 — What about refusal (`¬`)?

- Operators table :54-58: `¬` is *"negation"*, *"this does not hold"*, unary: *"is the point that it is false, rather than absent? Yes."*
- Fig 5 :53: *"refuted: a term we hold is wrong; a term is owed that says so"*; :55: *"What it removes is not a term but a term’s standing to be composed over. Nothing leaves the library. What falls is the reach."*
- ⇒ The slow frame's contribution is not only to verify new terms but to **refuse** held ones. A vocabulary with `−` (subtraction) but without `¬` can say what is missing and cannot say what is wrong (Operators table :73-74: *"A vocabulary with − and without ¬ can say what is missing from an arrangement and cannot say that an arrangement is wrong, so it can only ever accumulate."*). So "combine" must include a refusal path. This is the part a blend cannot supply.

### Q6 — Are the two frames isomers?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- The formal frame and the fast frame do **not** share the same atoms: one holds symbols and a checker, the other holds weights and percepts. By Fig 12's definition they are **not isomers**. They are two different frames whose *closures* differ, which is precisely why an import is possible (Fig 6 :23).
- A stronger, checkable version: two **instances of the same architecture** trained on different evidence pools could be isomers over a shared atom set, differing only in which atom each composes over. That is a real isomer claim, but it is a claim about two fast frames, not about the formal/fast pair.
- **Falsifier:** if both frames can be written over one atom set and differ only by bond, the isomer claim holds for them; if they require different atoms, it fails and the crossing is an import between closures.

### Q7 — What is the order across scales?

- Fig 13 :4-5: *"There is no order of rank here. The two kinds are in lockstep"*, *"and no member of the pair is senior to the other."*
- Fig 10 :68: *"Different actors, a different currency, a different ground, and a lossy transform between."* A generator crosses up, an instance does not.
- ⇒ The proposer and verifier are in lockstep, not hierarchy. What is ordered is the **transform** between scales (methods up, head starts down), not the dignity of the frames. Calling one frame "higher" is the rank error Fig 13 forbids.
- **Falsifier:** a construction in which one frame is provably a larger copy of the other (same atoms, same currency, same ground); then there is no crossing and no membrane.

## CONCLUSION

The combination is **not** one bond. It is a compound:

- `⇒` production for the import from fast frame to formal frame, gated by provenance and a shadow test;
- `→` sequence for the two directions across the membrane, with a measured round trip;
- `¬` refusal for the formal frame's correction of held terms;
- `⋛` comparison reserved for the verdict about whether `φ*` is in the closure, not for joining the frames;
- `+` conjunction rejected as the complete answer because it cannot express the proposer/verifier asymmetry.

The two frames are **not isomers** (different atom sets). They are two closures whose difference is the source of the surplus (Fig 8 :45: *"Two frames together reach what neither reaches alone."*). The order across scales is a lockstep, not a rank.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session; the Operators table in the same file; `THE_FORMULA.md`; the eight essays. No measurement was used.

## FIGURE CENSUS

Fig 4 (membrane directions), Fig 5 (refusal kind), Fig 6 (import, source gate), Fig 8 (surplus, independence), Fig 9 (verdict as threshold), Fig 10 (ground maintainer, no rank), Fig 12 (bonds, isomers, cycle, grammar vs dictionary), Fig 13 (lockstep, no senior member), Operators table (bond tests). Strained after re-census: none; the `⋛` type question was resolved by restricting it to the closure verdict.
