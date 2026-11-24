# Order, currencies and analogues in the minimum-capacity question

**Mode: `specified` for the structural claims, `general` for the analogues. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).**

## RESIDUAL

The shape claim in `01` names four conditions but does not order them or say how they compose. Two questions are owed: (1) what is the dependency order, and what follows if it is wrong? (2) which analogues from Fig 12 and Fig 13 actually apply to minimal adaptive systems, and which are strained?

## DOMAIN CENSUS

Atoms held: six terms (space, time, energy as states; spectrum, gradient, network as structures). Bonds held: the seven, plus negation as a unary operator. World imports available: Ashby's requisite variety, the good regulator theorem, Landauer's bound (all recorded as budget or necessary-condition instruments, not figure lines). No new primitive is available without an import with a source gate and shadow test.

## DERIVATION

### Q1: What is the order of the four conditions?

Fig 3 :20: **"The chain is ordered by dependency, not by importance."** Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."** Fig 3 :21: "Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."

Applied to this question, the dependency order is:

1. **Habitat and contact** (D4): enumerate what is in contact with the residual. Without contact there is no residual.
2. **Perception** (D1): "the system can tell what is in front of it, and tell it apart from what was there before" (Fig 3 :5).
3. **Vocabulary** (D3): "it has terms for what things afford: what can be moved, opened, joined, blocked" (Fig 3 :7).
4. **Objective** (D3): "it can say what would count as progress here, in its own terms" (Fig 3 :10).
5. **Planning and carry** (D3): a route chosen under incomplete information, then "name what worked, verify it, and carry it to the next problem" (Fig 3 :14).

The substrate (D2) runs underneath all five steps; it is not a sixth link. Fig 13 :29: "A state with no structure has no magnitude: three of what, ordered how, varying across what?" A structure with no state is empty.

**Falsifier, written before the run:** if the five steps can be permuted without loss of adaptive response under the same habitat and disturbance, the dependency claim fails. Also, if a link with no instrument is observed to work reliably (Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."), the order claim needs re-census.

### Q2: The two currencies do not add

Fig 12 :125: **"A composition costs in two currencies, and they do not add."** Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."** Fig 12 :127: "They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."

- **Bits** price the description: a grammar of six terms, seven bonds and a per-slot residual. Fig 12 :100-101: "a bond costs what it could have been," logarithmic in the bond vocabulary; "a bond that costs nothing is a bond that carries nothing, which is the flat case."
- **Actions** price finding out whether a composition holds: the bet per object slot per action (Fig 1 :10), the probe aimed at the new bin, the ground reading.

Landauer's kT ln 2 prices a third thing, the physical erasure of a bit, and belongs to the hardware rather than to either currency above. Ashby's variety is a *relation* between regulator and disturbance, measured in bits but not a description cost. Summing these into one "capacity" is the error Fig 12 :130 names: "Summing them into one figure is the error this names, not the fix for it."

**Falsifier:** exhibit a single unit in which description cost, action cost and erasure cost add without loss, and show that a system with one accounting does not propose arrangements it cannot afford to test.

### Q3: Which analogues apply?

- **Isomer.** Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Two minimal adaptive systems built over the same six terms but with a different bond arrangement (say, a threshold over energy and time versus a gradient over space and time) are isomers under this definition. This is `specified`, not measured; it needs a case comparison, not an argument.
- **Functional group.** Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." All adaptive systems in this reading share the functional group `state -> structure -> state` (Fig 13 :75). Chemotaxis, a thermostat and a cell-cycle switch are candidates; which member each is remains unmeasured.
- **Catalyst.** Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." Receptor methylation in bacterial chemotaxis is a concrete instance: the receptor is modified and reset, and the cell's memory of recent concentration survives across runs. This is a world case, corroborating only.
- **Cycle.** Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Fig 13 :31: "because each turn leaves a remainder (the residual) that re-enters the next, it is also where the randomness comes from." The adaptive loop is a cycle, not a chain; the dependency chain in Q1 is the ordering *within* one turn.
- **Substrate alternation.** Fig 13 :28: "They alternate, and the alternation is where both the recursion and the randomness come from." States and structures alternate; "composition across the two kinds, never within one" (Fig 13 :74). A system that tries to compose two states directly (space-time) or two structures directly is refused at first order.

**Falsifier for the analogue set:** show two systems with the same six atoms and the same bonds but different adaptive behaviour, with no difference in habitat or history. That would break the isomer claim (the difference would have to come from outside the arrangement) and send the derivation back to the census.

### Q4: Union, not partition

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." The four conditions in `01` overlap: a per-slot residual needs a vocabulary of slots; a vocabulary needs contact to acquire valence; contact needs a loop to register as residual. So the minimum is a compound with its own loop, not four independent requirements whose capacities can be added. Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

### Q5: Round trip between scales

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

- **Up (T_A):** the shape (four conditions, six terms, per-slot residual, dependency order).
- **Down (T_E):** a concrete claim such as "this bacterium with this receptor set meets its ground in this gradient."
- **Gap R_T:** the habitat, the disturbance set, the observer's powers of discrimination and the action budget are dropped by the abstraction and cannot be recovered from the shape. `11_audit.md` enumerates them.

The gap is not an error to eliminate; it is the measurement of what the coarser description cannot hold (Fig 4 :31-32).

## CONCLUSION

The dependency order is habitat, perception, vocabulary, objective, planning and carry, with the substrate underneath. It is ordered by dependency, so the first missing link sets the minimum and capacity added above it is wasted. Description cost, action cost and erasure cost are separate currencies and do not add. The applicable analogues are isomer, functional group, catalyst, cycle and substrate alternation, each with a stated falsifier. The four headline conditions form a union compound, not a partition, and any move between the shape and a concrete system carries a nonzero round-trip gap that must be recorded rather than assumed zero.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; `THE_FORMULA.md`; the eight essays (three re-opened this session); public world pages listed in `10_source_ledger.csv`. No measurement was taken.

## FIGURE CENSUS

Fig 1 (bet per slot), Fig 3 (dependency order, instrument at each link), Fig 4 (round trip), Fig 8 (union surplus and provenance), Fig 9 (union versus partition, describe before looking), Fig 11 (habitat enumerated, capability relational), Fig 12 (isomer, functional group, catalyst, cycle, two currencies), Fig 13 (substrate alternation, cross-kind composition), Operators table (bond price), Symbols table (R as a slice). Strained after re-census: none between figures; the world-source currency question (bits versus actions versus joules) is named in Q2 and left open, not resolved by summation.
