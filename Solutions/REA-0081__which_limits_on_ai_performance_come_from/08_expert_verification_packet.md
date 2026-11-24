# Expert verification packet: the Tether on architectural versus resource limits in AI

**What this is:** a claim in a form an AI researcher can check. Mode, derivation, and refuters are stated before the conclusion.

**Mode: `specified` on the shape, `general` on the distinction, not `grounded`.** No measurement in this packet assigns a cause to any real system. It is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

An AI performance shortfall has at least four distinguishable conditions. (1) Outside the closure: the capability cannot be composed from what the system holds, so no amount of data, compute, or energy adds it; the wall moves only by import from a frame whose closure differs. (2) Inside the closure, unfunded or unfound: the capability is already reachable but was not found or settled; the remedy is more search, better allocation, or a sharper instrument. (3) Same reach, unfound: more of the same space needs visiting, and nothing new is owed. (4) Contact-limited: the limit is in the habitat or benchmark, so improving the agent in isolation changes nothing. The two headline causes look the same on one performance curve, so the packet offers a discriminating experiment and falsifiers written in advance, not a classification of any named model.

## 2. Three checkable sub-claims

### C1 — framework-internal; checkable by reading Figures 8, 6, and 13

- **Statement:** underivable-in-principle and unreachable-at-budget are different facts, and composition inside a fixed closure cannot add a new kind.
- **Source, verbatim:** Fig 8 :40 "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions." Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 13 :118 "infinite effort inside a finite reach."
- **Refuter:** show that unbounded data, compute, and energy at strictly fixed closure add a new kind rather than visiting more of the same space; or derive a new member from the held set; or show the two facts issue the same instruction.
- **Status:** triangulated across three figures with low overlap (idempotence law, wall operator, unbounded-arrangements law).

### C2 — budget-facing; checkable against scaling practice

- **Statement:** a resource shortfall is cured by more search or a sharper instrument, not by importing a new atom; data (bits) and compute/energy (actions) are separate currencies and cannot be added into one score.
- **Source, verbatim:** Fig 8 :41-42 "Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom." Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 12 :127 "the budget is what decides how much of the space is reached at all." Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it."
- **What to check:** is a published "scaling" claim actually a re-allocation inside one budget (as in Chinchilla: more tokens per parameter at fixed FLOPs), or does it smuggle in a new kind without declaring an import? Does the claimed single score mix tokens with FLOPs or watts?
- **Refuter:** exhibit a single unit in which description cost and test cost are commensurable such that optimizing their sum never proposes an arrangement the system cannot afford to test; or show an in-closure shortfall that persists under arbitrarily much independent search and is nevertheless not derivable.
- **Status:** triangulated across Fig 8 and Fig 12, with Chinchilla, Villalobos, and the IEA/Brookings energy forecasts as secondary corroboration.

### C3 — verification-facing; checkable by anyone who has seen a scaling plot

- **Statement:** depth and absence are indiscernible from inside the frame, so a single curve cannot decide the cause; a benchmark solve does not establish capability.
- **Source, verbatim:** Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
- **What to check:** does the claimed evidence consist of one averaged metric on a fixed benchmark, or of a discriminating intervention (fixed-closure budget sweep, architecture swap at fixed budget, metric swap, or real-habitat transfer)?
- **Refuter:** exhibit a single measure of model outputs that reliably separates underivable from merely unfound without any ground intervention or change of instrument; or show an agent-only improvement that moves the ground while contact and habitat are fixed.
- **Status:** triangulated across Fig 6, Fig 1, and Fig 11 for the indiscernibility part. The contact category itself is single-source within the figures.

## 4. What is explicitly not claimed

- Not that any named model's limit has been correctly classified. That requires a ground reading.
- Not that scaling is unnecessary, or that an architecture change is automatically an import.
- Not that a circuit-complexity impossibility theorem settles a production system's wall. Those results are conditional on unproven conjectures and asymptotic.
- Not that the emergent-abilities mirage result refutes scaling. It refutes a metric-induced discontinuity.
- Not that the Apple collapse result proves an architectural wall. Collapse despite adequate budget is compatible with at least three of the four conditions.
- Not that the four verdicts can be averaged.
- Not `grounded`. Nothing here is asserted as settled by experiment.

## 5. Provenance

- Figure text extracted verbatim from the 13 figures plus the Operators and Symbols tables: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-24. Every `Fig N :line` quote above is from that file.
- `FRAMEWORK/figures/THE_FORMULA.md` (eight-step loop, mode rule, step 7 order); `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` (pre-registered falsifier rule, seat map).
- `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, canonical usage and metalaw reading.
- World sources opened 2026-11-24 and recorded with author, venue, year, and quote in `10_source_ledger.csv`: Hoffmann et al. (NeurIPS 2022 / DeepMind 2022), Villalobos et al. (ICML 2024), Merrill and Sabharwal (TACL 2023), Schaeffer et al. (NeurIPS 2023), Shojaee et al. (NeurIPS 2025), Sutton (2019), IEA (2026), Brookings (2026). Essays by Isaiah N opened the same day.
- This packet compiled 2026-11-24.

## 6. Standing pre-registered refuters

Written before the run in `01_figure_grounded_audit.md` §3:

1. A single measure reliably assigns the active cause without a ground intervention.
2. More budget at strictly fixed closure adds a new kind.
3. An architecture swap at equal or lower budget wins where arbitrary budget at the old architecture fails (this would refute the difficulty of detecting the cause, not the distinction).
4. A metric change turns an apparent new capability into a continuous curve where the capability claim had been used as evidence for a wall.
5. An agent-only improvement moves the ground while contact and habitat are fixed.
6. A seventh primitive is derived from the six.

## 7. What an expert can check in twenty minutes

1. Read Fig 8 :40-42, Fig 8 :32, Fig 6 :23/:27/:49, Fig 12 :125-130, and Fig 11 :70. Nine short passages.
2. Check C2 against one scaling paper you know: does it re-allocate within a budget or claim a new kind?
3. Name one experiment that would distinguish a wall from a budget shortfall for a task you work on, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.
