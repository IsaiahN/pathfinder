# Isomers, functional groups, catalysts and order in the five systems

**Mode: `specified` on the structural analogies, `general` on the bond rule. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).**

## RESIDUAL

Do the five named systems form five different substances under one arrangement, or one kind with different qualifiers? And what order governs the cascade: a chain, a cycle, or something else? These are supporting questions. They do not change the `gap` verdict on the forecast.

## DOMAIN CENSUS (for this derivation)

Atoms available from the world: power supply, telecom link, road access, water pumping, fuel reserve, repair crew, demand, hazard intensity. Bonds available from Fig 12: seven binary operators plus negation. No new primitive is available without import. Anchor: observed service loss, never model agreement.

## DERIVATION

### Q1 - Are the five sectors isomers?

Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

As the question writes them, power, transport, water, communications and health do **not** share the same atom set. A telecom mast, a pumping station, a rail signal and a hospital have different assets, different currencies and different failure modes. Under Fig 12's definition they are **not isomers**.

Fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

The five do share a functional group: each is a service that depends on continuous power and on physical access for repair, and each fails when a threshold is crossed. So the honest weaker claim is **one functional group with five qualifiers**, not five isomers. World corroboration: the PLOS review treats the sectors separately precisely because vulnerability and impact differ across hazard and sector, while npj Natural Hazards finds a shared lifeline core (power, water, communications, transport).

The stronger claim is worth stating because it is checkable: **if all five are written over the full shared atom set** {power, telecom, road access, water, fuel, repair, demand, hazard}, differing only in which atom plays the mediating role, then they are isomers in the figure's sense. Same atoms, different arrangement, different behaviour. That is the version a responder can refute.

### Q2 - What order governs the cascade?

Fig 12 :48: *"A chain is the degenerate case: one bond type, no branching."* A pure `A → B → C` chain is available but is the thin case. The real graph branches and feeds back.

- **Sequence (`→`):** *"A then B; B needs A to have happened"* (Fig 12 :70-72). Power loss precedes pumping loss. Ordered, so swapping changes the thing.
- **Production (`⇒`):** *"A produces B; B did not exist before"* (Fig 12 :75-77). An outage produces a service gap that was not there before, distinct from mere sequence.
- **Comparison (`⋛`):** *"a threshold relation between two quantities"* (Operators table :48). Capacity versus demand, generator fuel versus 72-hour outage. This is where a goal or a limit is stated.
- **Cycle:** Fig 12 :121, *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* Storm Éowyn shows the positive loop: power loss disables telecoms, telecom loss slows fault detection and engineer deployment, which slows power restoration. A chain cannot represent this; a cycle can.

**Order by dependency** (Fig 3) is separate from bond order. Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The dependency chain for assessment is perception, vocabulary, objective, planning, learn and carry. It is not "harden power first". Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

### Q3 - Catalysts: the parts that survive their own use

Fig 12 :119: *"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."*

Backup generators, stored fuel, spare poles and standby water storage are exactly this distinction. A generator that is refuelled is a regenerating part; a tank that empties and is not refuelled is a spent part. Both are recorded as "backup capacity" in many plans, so the notation loses the difference the figure says is decisive. In Storm Éowyn, Scottish Water's 72-hour generator fuel and 3-day water storage at Clifton changed the cascade outcome without changing the asset list. That is a catalyst effect, not a new atom.

### Q4 - Conjunction versus disjunction at co-location

Fig 12 :55-64: `+` is *"both hold at once"* (symmetric), `∥` is *"either suffices; not both required"* (symmetric). Co-location of power and water assets is `+`, and swapping operands changes nothing. Redundancy of two telecom masts is `∥`, and removing one leaves service intact. The Operators table warns :22, *"not concurrency. Two things running in parallel both matter; remove one and it breaks, which is +."* Mistaking redundancy for concurrency is a notation error with an operational cost.

## CONCLUSION

The five systems are **one functional group with five qualifiers**, not isomers as written. They become a genuine isomer claim only under a full shared atom set, and that version has a falsifier below. Their cascade is a **branched cycle with ordered bonds**, not a domino chain; the cycle is what makes single-sector resilience insufficient. Backup stores and generators are **catalysts**, and spending versus regenerating must be recorded separately. Bond type is not decoration: `+`, `→`, `⇒`, `⋛` and the cycle each carry information the asset list does not.

**Falsifier, written before the run:** if any one of the five can be written without an atom another requires (for example health with no water dependency, or telecom with no power dependency) the isomer claim fails and the functional-group reading stands. If a held-out event shows a pure ordered chain predicting cascade timing as well as a cyclic model, the cycle claim fails too.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; no climate or outage measurement was taken. World witnesses: PLOS Climate 2024, Frontiers in Water 2020, npj Natural Hazards 2025, Natural Hazards 2016, all opened 2026-11-22.

## FIGURE CENSUS

Fig 12 (isomer :117, functional group :123, chain :48, sequence :70-72, production :75-77, cycle :121, catalyst :119, `+`/`∥` :55-64), Fig 3 (:19, :20), Operators table (:22, :48). Strained after re-census: applying `⋛` to service losses assumes they are *"two quantities"* at that level; named in `01_figure_grounded_audit.md` F4 and left open.
