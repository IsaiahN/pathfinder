# Union, order and analogues for ECN-0051

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

Two questions are owed after `01`: (1) if H and S are a union, what is the structure of that union and what does unbundling actually produce; (2) in what order must the domains be processed, and which link is the one that usually breaks. A third, smaller question: are the two mechanisms isomers under Fig 12's definition, and if not, what are they.

## DOMAIN CENSUS

Atoms held for this derivation: slots (households, firms, capital owners), income mass, spendable difference, the measurement frame. Bonds held: sequence (→), comparison (⋛), conjunction (+), subtraction (−). No new primitive is available without import. The anchor for the whole derivation is the slot-level transaction, not the aggregate index.

## DERIVATION

### Q1 — What is the structure of the H/S union?

- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- Fig 9 :56 "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
- Let H be the condition "distribution shifted away from low-income slots reduces broad demand." Let S be the condition "distribution shifted toward high-income slots increases investable capital."
- Region H only: demand-constrained economy with idle capacity, weak investment response. A demand lever works; the S lever does not bind.
- Region S only: supply-constrained economy with saturated demand, strong investment response. A saving lever works; the H lever does not bind.
- Intersection H ∧ S: both bind. A lever that clears H leaves S standing, and the reverse. This is Fig 9 :56 read exactly.
- ⇒ Unbundling produces two well-formed questions with two different anchors, not one question with a weighted average answer. The intersection is a compound with its own loop (Fig 9 :57-58: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound.").

**Falsifier, written before the run:** if a single lever is found whose operation removes both H and S at once in the intersection, the union reading fails and the two conditions collapse into one.

### Q2 — What is the dependency order, and where does the chain break?

- Fig 3 :20 "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces"
- Link 1, perception: measure the distribution. This works; PIP, LIS and WID all return per-slot or per-decile figures.
- Link 2, vocabulary: terms for what the distribution affords (propensity to consume, propensity to save, investable surplus). This works in economics.
- Link 3, objective: what counts as progress, and what counts as broad-based. **This is the break.** Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." More and better distribution data cannot repair a disagreement about the objective.
- Link 4, planning: a lever for one region of the union. It can only be reached after link 3 is repaired.
- Link 5, learn and carry: settle the lever against the ground and carry the method.
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Link 3 has no instrument in this debate, which is why the argument recurs.

**Falsifier:** exhibit an instrument that decides what counts as broad-based growth independently of the measurement frame. Then link 3 works and the order above is wrong.

### Q3 — Are H and S isomers, and if not what are they?

- Fig 12 :117 ("isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour.").
- Fig 12 :124 ("functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member.").
- As usually written, H uses the atom set {low-income households, consumption, demand}, and S uses {high-income households, saving, investment}. They share only "income mass." By Fig 12's definition they are **not isomers**; they are two members of the same functional group, a `slot → spendable difference → outcome` arrangement with different atoms in the slots.
- The stronger version: write both over the full shared atom set {slots, income mass, spendable difference, measurement frame}, differing only in which slot the difference is bonded to and which currency is spent. Then they **are** isomers: same atoms, different bond, different substance. That is the claim worth testing, because it makes the two mechanisms comparable without averaging them.
- **Falsifier:** if either mechanism can be written without an atom the other requires (for example, if the saving mechanism needs no slot structure, or the demand mechanism needs no spendable difference), the isomer claim fails and the functional-group reading stands.

### Q4 — What order composes the aggregate?

- Fig 13 :110 "And each composition becomes an atom for whatever composes over it."
- A slot-level spending or investing event, once settled against the ground (an actual purchase, an actual investment), becomes an atom at the next level. The economy-wide growth rate is a composition over those settled atoms. This is the recursion Fig 13 names, not a new primitive.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The transform from slots to aggregate is lossy. The round-trip gap R_T for this question is enumerated in `11_audit.md`. Treating the aggregate as a lossless summary of the slots sets R_T to zero, which is the dead-reckoning error.
- Fig 13 :74 "Everything else is a composition across the two kinds, never within one." Applied by analogy only: a slot-level state and a spendable structure alternate through the chain. This is a shape constraint on how the composition may be written, not an economic derivation.

## CONCLUSION

The H/S question is a union of two overlapping conditions. Unbundling yields two questions with different anchors and a compound in the intersection. The chain breaks at link 3, the objective, not at measurement. As usually written the two mechanisms are a functional group, not isomers; over a shared atom set they are a testable isomer claim. The aggregate is second-order, composed from settled slot-level atoms, and the slot-to-aggregate transform is lossy with a nonzero round-trip gap.

This framing keeps what is defensible in both options without taking a net sign, and it needs no new primitive and no claim that the figures measure an economy.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened 2026-11-23. World check: Our World in Data on measurement frames, Wikipedia on the trickle-down and Kuznets debates (all opened 2026-11-23). No economic measurement was used.

## FIGURE CENSUS

Fig 3 :19-20, :27 (dependency order and the broken link); Fig 4 :30 (lossy round trip); Fig 9 :55-58 (union, intersection, compound); Fig 12 :117, :124 (isomer, functional group); Fig 13 :74, :110 (cross-kind composition, settled molecule becomes atom). Strained after re-census: none. Fig 13 :74 is marked as an analogy, not a derivation.
