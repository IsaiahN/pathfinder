# Supporting derivation: the three loop arrangements, order, and the round trip

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The field describes three degrees of human control: human in the loop (the human instigates), human on the loop (the human supervises and may abort), human out of the loop (no human action). The question asks what meaningful control *requires* when speed or scale outruns the supervisor. Two questions are owed: (1) are these three arrangements **isomers** under Fig 12, and (2) in what **order** must the control chain be closed for any of them to be meaningful at machine speed? A third question follows from Fig 4: what is lost when a control method moves across the speed/scale membrane?

## DOMAIN CENSUS

Atoms held for this derivation: a supervisor seat S, a system frame F, an action stream A, observations o′, object slots s, and a ground G that is not a frame. Bonds held: the seven of Fig 12 plus the unary negation of the Operators table. No new primitive is available without import. The three arrangements differ in which bond attaches S to F and A, not in their atom set. Speed and scale are values of the membrane in Fig 4, not new atoms.

## DERIVATION

### Q1: Are the three arrangements isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**
- Operators table :34: **"the only bond a flat chain can express, so every term today is a sequence whether or not it should be"**
- Operators table :51: **"a goal is a comparison, which is why a vocabulary without it cannot state one"**
- Operators table :57: **"a refutation is a negation, which is why a vocabulary without it can only accumulate"**

Parse the three arrangements with the atoms held:

| arrangement | bond from S to F and A | figure term |
|---|---|---|
| in the loop | `S → F → A`, sequence | → sequence, ordered: "A then B; B needs A to have happened" |
| on the loop | `(F → A) ⋛ G`, then `S` subtracts or refuses when the comparison fails | ⋛ comparison plus − subtraction plus ¬ negation |
| out of the loop | `F → A`, no bond from S | the seat is absent; there is no control term to parse |

So they are **isomers** over the shared atom set: same atoms, different bonds, different substances. The in-the-loop arrangement is a flat sequence, which the Operators table warns is the only bond a flat chain can express *whether or not it should be*. The on-the-loop arrangement adds a comparison and a negation, which a vocabulary without them cannot state. The out-of-the-loop arrangement is not a third substance of the same family; it has no seat, so it is the absence of the term, not an isomer of it. This is its own falsifiable claim, see below.

- **Mode:** `specified`, `general` for the bond definitions.
- **Status:** `triangulated` for the isomer reading (Fig 12 definition plus the Operators table on sequence, comparison and negation).
- **Falsifier, written before the run:** if two arrangements with the same atoms and different bonds behave identically under the ground, that is, produce the same ground-validated refusal record at the same speed and scale, the isomer claim fails. If an out-of-the-loop arrangement is shown to contain a seat with a non-updating anchor, the claim that the seat is absent also fails.

### Q2: What order must the chain be closed in?

- Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
- Fig 3 :22: **"A step whose input never arrives cannot be diagnosed, only its predecessor can."**
- Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."**

The order is fixed by dependency, not by importance:

1. **Perception** at the system's speed (resolve the slot before you can grade it).
2. **Vocabulary** for what the slot affords, including a term for refusal.
3. **Objective** as a comparison: what would count as acceptable here.
4. **Planning** the intervention under incomplete information.
5. **Carry** the method, verified, to the next problem.

The *comparison must precede the refusal*. You cannot subtract what you have not compared, and you cannot negate a claim you have not bound (Operators table :58). This is the order the field's "human on the loop" description assumes but rarely states. A veto button wired to a saturated metric is a subtraction with no comparison upstream, which is the Fig 3 break expressed in bond vocabulary.

- **Falsifier:** if a refusal that is not preceded by a comparison against a non-updating anchor still produces ground-validated changes at the system's speed, the dependency order claimed here is wrong.

### Q3: What is the round trip gap R_T across speed and scale?

The Symbols table defines R_T as **"The gap between what was sent up and what came back down: gap(x, (T_E ∘ T_A)(x)). Measures what the coarser description cannot hold."** Fig 4 :30 requires it to be measured: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

Run on this derivation:

1. **Sent up (x):** the figure set, chiefly Fig 1 :19 (per-slot residual), Fig 2 :33 (anchor must not update), Fig 3 :27 (link with no instrument), Fig 4 :22 (methods cross), Fig 12 :117 (isomer).
2. **Abstraction (T_A):** the shorthand "keep a human meaningfully in control".
3. **Concretisation (T_E):** a concrete arrangement at speed and scale, with an instrument, a refusal rule and a latency.

**R_T is nonzero.** Three things the shorthand holds do not survive the trip down:

- the per-slot indexing, which the shorthand collapses into "human oversight";
- the non-updating anchor, which the shorthand replaces with "the operator's judgment";
- the comparison-before-refusal order, which the shorthand reduces to a button.

One thing survives cleanly: a control arrangement at speed and scale needs a maintained channel to something that does not move when the frames think otherwise. That residue is worth sending. R_T is recorded qualitatively as the enumerated set of dropped constraints, not numerically, because no ground reading exists. Treating "keep a human in the loop" as equivalent to the figure set would set R_T to zero and would be the dead-reckoning error.

- **Falsifier:** a control procedure moved across the speed/scale membrane with no measured R_T retains its ground-validated refusal rate. This is the same falsifier as F5 in `01`.

### Q4: Does negation close the vocabulary?

- Operators table :57: **"a refutation is a negation, which is why a vocabulary without it can only accumulate"**
- Fig 12 :139: **"Without a unary operator a system can write what a situation contains, what follows what, and how far along it is"** (the line continues past a dash, so the quotation stops here to keep the no-dash rule; the continuation is in the source file).

A supervisor with only the ingredients and the sequence bond can say what the system contains and what it did, but cannot say that an arrangement is wrong. It can only accumulate alerts. The on-the-loop arrangement is meaningful precisely because it adds the unary operator that lets the seat refuse. That is a structural claim, not a claim about human cognition.

## CONCLUSION

The three loop arrangements are isomers over a shared atom set, distinguished by the bonds that attach the seat to the system. "Out of the loop" is the absence of the seat term, not a third isomer. The chain must be closed in dependency order: perception, vocabulary, objective as comparison, planning, carry; comparison before refusal. The round trip gap between the shorthand "human in the loop" and a real speed/scale arrangement is nonzero and is recorded as an enumerated set of dropped constraints. Negation is what lets the seat refuse instead of accumulate. All four claims are `specified` and ungrounded; each carries a falsifier written before the run.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the Operators and Symbols tables in the same file; `THE_FORMULA.md`. No measurement was used. The three-degree vocabulary comes from the Wikipedia LAWS synthesis opened 2026-11-23 and is secondary.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor must not update), Fig 3 (dependency chain), Fig 4 (membrane and round trip), Fig 12 (isomer, bond types, sequence/comparison/subtraction/negation), Operators table (sequence, goal, refutation, unary negation), Symbols table (R_T). Strains after re-census: none. The "out of the loop is absence rather than isomer" sub-claim is single-source (Fig 12 definition plus the census) and is marked as such; it falsifies independently of the rest.
