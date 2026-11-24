# Order, union and isomers in the river-wetland response

**Mode: `specified` on the structural claims, `gap` on the numeric coefficients.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

`01` established that the effect of pumping and rainfall on rivers and wetlands is a union indexed per slot. Three supporting questions remain: (1) what is the bond that makes the response an order rather than a list, (2) are different river-wetland arrangements isomers over a shared atom set, and (3) what does it cost, in the figures' two currencies, to decide which arrangement holds in a given place.

## DOMAIN CENSUS

Atoms held from the figure set: states space, time, energy; structures spectrum, gradient, network. Bonds held: the seven, including `→` sequence, `⋛` comparison and `−` subtraction; plus negation. World frames supply quantities: hydraulic head, recharge, streamflow, wetland depth, abstraction rate. No new primitive is available without import. The recession coefficient and the connectivity threshold are imports with source gates, recorded in `10_source_ledger.csv`.

## DERIVATION

### Q1. What makes the response an order and not a mixture?

- Fig 12 :72: "A then B; B needs A to have happened." `→` is the only bond whose meaning changes when the operands are swapped (Operators table: "swap them. Does it become a different thing? Yes.").
- Barlow and Leake 2012 (opened) give the physical order: cone of depression, reduced gradient, reduced groundwater discharge, possible reversal to a losing stream. de Graaf et al. 2024 (opened): "increased capture happens before groundwater depletion is experienced." de Graaf et al. 2019 (opened): environmental flow limits "generally occur before substantial losses in groundwater storage are experienced."
- The order is therefore `connection → capture → head decline / storage loss → threshold crossing → ecological change`. The water arriving at the river is a flow over a stored state (Fig 13 :76), and the wetland response lags the head decline because storage buffers it.
- **Falsifier, written before the run:** a connected reach where storage loss measurably precedes any capture component, or where the ecological change precedes the head decline without another named cause.

### Q2. Is a union different from a partition here?

- Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
- Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."
- Partition reading (rejected): dry-climate basins versus wet-climate basins, each with its own trend. Union reading (kept): hydraulic connection, pumping pressure, rainfall timing and ecosystem dependence overlap. The NSF PAR 2024 excerpt reports that low rainfall plus high extraction created persistent drought conditions, while lower extraction made precipitation "matter less for wetland inundation as surface water storage was likely sustained through a mix of precipitation and groundwater discharge." The mix is the intersection, not an average.
- A single lever clears only the region where one condition holds (Fig 9 :55), leaving the intersections standing. **Falsifier:** a single lever that clears the intersection cases in a measured system.

### Q3. Are river and wetland responses isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
- Over the shared atom set `{head, gradient, storage, recharge, connection, season}`, a river low-flow response and a wetland hydroperiod response can be written with the same atoms and different bonds: for the river, `head → gradient → flow → low-flow threshold`; for the wetland, `head → saturated area → hydroperiod → connectivity threshold`. Same ingredients, different arrangement, different behaviour. A pumping shift that reduces river low flow can leave a deep wetland unchanged, and one that disconnects a shallow wetland can leave river low flow above its environmental limit.
- The weaker reading: they share a **functional group** (Fig 12 :123, carried from the figure: "A substructure whose presence fixes the outcome") of a head decline feeding a threshold. The stronger reading is isomerism, which requires the full shared atom set.
- **Falsifier:** a river and a wetland in the same basin whose responses are driven by disjoint atom sets, with no shared head or connection term. That kills the isomer claim and leaves the functional-group claim standing.
- **Status:** `single-source` on the figure definition (Fig 12), with the physics-facing check unmeasured here. The world sources show sign divergence between regions, which is corroboration in kind, not a test of the figure definition.

### Q4. What is the threshold bond?

- Operators table: "a threshold relation between two quantities." Fig 12 :87: "a threshold relation between two quantities."
- Adequacy is a comparison: delivered flow `⋛` environmental flow; water table depth `⋛` root-zone or connectivity depth; inundation duration `⋛` hydroperiod requirement. Fig 12 near :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction."
- de Graaf et al. 2019 (opened): "Only a small decline in groundwater level is needed to affect streamflow." The HESS 2025 mapping (abstract excerpt) uses a 5 m depth and 50% saturated area as its operational thresholds, with core functions in the 0.5 to 3 m band. The number is a world import; the comparison form is the figure's.
- **Falsifier:** a system where the ecological response is a monotone function of head with no threshold interval and no categorical change at any scale the instrument can resolve.

### Q5. Does the memory behave like a cycle or a catalyst?

- Fig 12 :119: "catalyst. A part that survives its own use." Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- The aquifer is catalyst-like: it survives each pumping season and remains the same store that the next season draws on, though its state changes. Managed aquifer recharge introduces a deliberate feedback: output (recharged water) re-enters as input. The sign of that loop decides whether the system closes toward recovery or keeps drifting down. Pumped water returned to the aquifer is the same physical substance with a different bond, which is why "capture" and "depletion" are different terms for the same water.
- **Falsifier:** a store that is consumed by its own use in one season and must be recreated from scratch, or a recharge loop whose sign cannot be measured.
- **Status:** `single-source` on the figure side; the recharge example is a provenanced world analogue, not a figure derivation.

### Q6. Two currencies, and why one number is not a verdict

- Fig 12 :125: "A composition costs in two currencies, and they do not add."
- In this domain the two currencies are **description cost** (how many parameters the coupled model needs) and **action cost** (how many wells, gauges and seasons of record it takes to decide which arrangement holds). The 2022 JAWRA excerpt notes that analytical models are cheap to implement but assumption-heavy, numerical models represent more processes but have "high data, expertise, and computational needs," and statistical approaches are "historically underutilized" because attribution is hard. A cheap model can be expensive to settle; a costly operand can be cheap to state. Summing them into one score would hide the shortfall.
- This is a budget filter, not a verdict (Fig 9 :60): "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

### Q7. Round trip gap `R_T`

- The Symbols table defines `R_T` as `gap(x, (T_E ∘ T_A)(x))`. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
- Sent up (`x`): the verbatim figure set, chiefly the union rule (Fig 9 :54 to :57), the per-slot rule (Fig 1 :19), the dependency order (Fig 3 :20, Fig 12 :72) and the threshold bond (Fig 12 :87).
- Abstraction (`T_A`): the shorthand "union, indexed, ordered, thresholded, with a gap."
- Concretisation (`T_E`): a claim about a named reach, e.g. "pumping plus a dry sequence will drop low flow past the environmental limit by X per cent."
- The gap is nonzero and contains at least: the identity of the threshold for that reach, the fraction of the decline due to capture versus rainfall, the lag time, and the instrument's detection limit. None survives the trip unless measured. `R_T` is recorded qualitatively, not numerically, because no ground reading is held here.

## CONCLUSION

The response is an ordered sequence (Fig 12 :72), the pressures form a union rather than a partition (Fig 9 :54 to :57), and river and wetland outcomes are isomers or at least functional-group relatives over a shared atom set (Fig 12 :117, :123). Adequacy is a comparison at a threshold, not a stock (Fig 12 :87), the aquifer is a catalyst-like store with a possible feedback (Fig 12 :119, :121), and the two currencies of description and action must be held apart (Fig 12 :125). Every numeric operand is an import with a source gate; the round trip gap to a named basin is nonzero and is enumerated, not assumed away. One live strain: the hydraulic gradient of Darcy's law is a structural analogue of the figure's gradient primitive, not an identity (`01` F4, `11` audit).

## ANCHOR

Verbatim figure text extracted from the local canonical file this session; public world sources listed in `10_source_ledger.csv`, all opened or fetched on 2026-11-22 with failures recorded. No measurement was taken by this agent.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order), Fig 4 (round trip gap), Fig 6 (import), Fig 9 (union, unbundling, filters), Fig 11 (relative valence, enumeration), Fig 12 (sequence, comparison, isomer, functional group, catalyst, cycle, two currencies), Fig 13 (flow over a state), Operators table (sequence and comparison tests), Symbols table (`R_T`). Strains after re-census: one, the gradient analogue, named rather than hidden.
