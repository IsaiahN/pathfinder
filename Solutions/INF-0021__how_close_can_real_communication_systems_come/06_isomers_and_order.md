# Union, benchmark choice, and the two currencies

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

"How close to capacity?" reports one number against one target. Under the domain census of `01_figure_grounded_audit.md`, that target is a union compound (short blocklength, unpredictable variation, unknown statistics) and the comparison mixes two currencies (bits of description versus actions/measurements to settle). Three supporting questions are owed:

1. Is the compound a partition or a union, and what does that change about the search?
2. Is the choice of benchmark a convention or a verdict?
3. Are the two costs (rate shortfall in bits, effort to reach the limit in actions) commensurable?

## DOMAIN CENSUS (supporting)

Atoms held: the six terms (space, time, energy states; spectrum, gradient, network structures). Bonds held: seven plus negation. Relevant derived quantities: `spectrum` (bandwidth, ordering of rates), `gradient` (directedness of SNR toward a limit), `network` (sender-channel-receiver, influence travelling), `time` (blocklength, ordering of uses), `energy` (finite signal power). No new primitive is available without import (channel state from the channel frame).

## DERIVATION

### Q1 - Partition or union?

- Fig 9 :4: **"Split it rather than search."**
- Fig 9 :53: **"Nobody chooses. The gap does, and the gap is only as good as its description."**
- Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
- Seat Map :211: *"A case in two conditions is not a harder case of either; it stops being a mixture and becomes a specific compound."*

Conditions: (i) finite blocklength `n`; (ii) unpredictable variation; (iii) unknown or adversarial statistics. A lever that clears (i) (longer blocks) leaves (ii) and (iii) standing; a lever that clears (ii) (CSI) leaves (i) and (iii); a lever that clears (iii) (robust/adversarial coding) leaves (i) and (ii). The intersections are real, not empty: short blocks under adversarial variation is a categorically different case. Chaudhuri et al (arXiv:2105.03420, 2021, opened 2026-11-23) model exactly this compound: a channel with a *"fixed, but unknown, compound-state and an AVC-state which may vary with every channel use."*

**Conclusion:** union, not partition. The residual must be unbundled before another search (Fig 9 :54).

**Falsifier (pre-registered):** exhibit a channel class where the three conditions have empty intersections, so they form a partition and a single lever clears the whole residual.

### Q2 - Benchmark choice: convention or verdict?

- Fig 10 :45: **"a convention makes no claim about the world; a verdict and an atom both do."**
- Fig 10 :47: **"a convention that decides an outcome has stopped being one."**
- Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Ergodic capacity, `ε`-outage capacity, worst-case AVC capacity and competitive capacity are different conventions for what to compare against. Wikipedia (opened 2026-11-23) states the slow-fading case has *"no definite capacity"* and defines an `ε`-outage capacity; Langberg and Sabag (2024) show the worst-case benchmark *"may result in low rates for state sequences that are associated with relatively good channels"* and propose a competitive benchmark instead. So the benchmark changes the reported answer.

Under Fig 10, picking a benchmark is legitimate as a convention (it makes the question statable). It becomes a defect the moment it decides the outcome, because then an authored choice is doing the work of the ground. The ground here is a measured rate/error pair under a stated state process.

**Conclusion:** benchmark choice is a convention for framing and must not be allowed to decide "how close" without a ground settlement. Report the benchmark explicitly alongside every closeness claim.

**Falsifier:** show a benchmark that is neutral with respect to the verdict for all channel classes, so the distinction is idle.

### Q3 - The two currencies do not add

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"**
Fig 12 :128: **"A long chain of cheap parts is expensive to describe and may cost one action to refute. A short arrangement over a costly operand is cheap to state and may take a whole budget to settle."**

For this question:

- **Bits:** the rate shortfall `C - R`, the description length of the code, the number of channel-state bits fed back. Available in the coding frame's accounting.
- **Actions:** the channel uses and measurements spent estimating a state, decoding, and re-running after a change; the encode/decode operations. Available only in the ground/habitat accounting.

A system that reports only bits (throughput relative to capacity) will not notice when the action budget to track the channel has exploded. A system that reports only actions (compute spent) will not notice that the code is far from the limit in bits. Fig 12 :130: *"Summing them into one figure is the error this names, not the fix for it."*

World corroboration, low overlap: Hesham et al (2023) report the *"discrepancy between the actual network rate and idealistic classical channel capacity"* (bits) while Bernardo et al (2023) bound the *"maximum code rate achievable by a data-driven communication system over some unknown discrete memoryless channel in the finite blocklength regime"*, where training data is an action cost (different subfield, different authors). Langberg and Sabag (2024) price a third thing, regret against a hindsight optimum, which is neither bits nor actions alone.

**Conclusion:** report both currencies separately. `R_T` (Fig 4, Symbols table) measures the loss between abstract capacity and realised rate; it is the round-trip analogue of the two-currency accounting, not a replacement for it.

**Falsifier:** exhibit a channel class where bits and actions are convertible at a fixed rate so one accounting suffices.

### Q4 - Order: what must be settled before what?

- Fig 3 :20: **"The chain is ordered by dependency, not by importance."**
- Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
- Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."**

Dependency order for this question: (1) perceive/estimate the channel; (2) have a vocabulary of codes that can express state-dependent actions; (3) state an objective under a declared benchmark; (4) plan the coding/adaptation strategy; (5) learn and carry across changes. A capacity calculation at step 3 arrives at a planning step whose input from step 1 may never have come. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Only after a first-order operating point is settled against the ground can it become an atom for a second-order comparison (is this system closer to its limit than that one?). That is Fig 12's recursion, not a new primitive.

**Falsifier:** show a system whose perception and objective links are intact but whose failure is located solely in the capacity formula itself, with the other first-order molecules settled.

## CONCLUSION

The question's residual is a **union compound**, so it must be unbundled before another search (Q1). The **benchmark is a convention until it decides an outcome**, at which point a measurement must settle it (Q2). **Bits and actions are two currencies** and must be reported apart; `R_T` is the round-trip loss between the abstract limit and the realised point, not a single score (Q3). The **dependency order** puts perception and learn-and-carry before coding refinements (Q4). Each claim carries a pre-registered falsifier above.

What survives as the answer's supporting structure: a family of limits, each with its benchmark made explicit, each reported with a per-slot distribution and a two-currency accounting, and each reached through a channel whose perception link has an instrument. No new primitive, no imported atom beyond channel state, and no single universal "closeness" number.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, reopened this session; the seat map; the three essays opened and listed in `05_what_shape_means.md`; the public sources in `10_source_ledger.csv`, each opened 2026-11-23. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 (round trip), Fig 9 (union before search, filters not witnesses, describe first), Fig 10 (convention versus verdict), Fig 12 (two currencies, settled molecule as atom), Fig 13 (closed set, arrangements not), seat map (union rule, pre-registered falsifier). Strained after re-census: **none**. The one live limitation, benchmark dependence, is recorded as Q2 rather than smoothed away.
