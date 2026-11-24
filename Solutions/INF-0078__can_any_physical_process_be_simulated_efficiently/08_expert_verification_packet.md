# Expert verification packet: the Tether on efficient simulation

**What this is:** a claim in a form a simulation or complexity researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the three sub-claims, `general` on the structural shape, `gap` on the universal yes/no. Not `grounded`.** No measurement, simulation run or numerical experiment is claimed. This is a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

The question "can any physical process be simulated efficiently?" is a union of five conditions, not a dichotomy. Computability is membership in a fixed closure, and search inside that closure adds no primitive. Efficiency splits into two currencies, bits for the description and actions for settling the prediction, which do not add. A simulation is a substituted habitat, so a successful run proves wiring and never capability unless it is checked against a ground that does not update on the simulator's report. Chaos is an amplifying remainder that makes exact trajectory tracking budget-limited while leaving robust statistics computable. Some properties are underivable in principle rather than expensive. The framework returns this shape, seven refuters written in advance, and the discriminating instruments. It refuses both a universal efficiency guarantee and a universal "some processes always resist", and records the universal yes/no as a `gap`.

## 2. Three checkable sub-claims

### C1: framework-internal, checkable by reading Figures 6, 8 and 12
- **Statement:** reachability and efficiency are different quantities; efficiency has two currencies that cannot be added into one number.
- **Source, verbatim:** Fig 6 :21 - "MINT composes inside the closure and can never add an atom." Fig 8 :32 - "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." Fig 12 :125 - "A composition costs in two currencies, and they do not add." Fig 12 :126 - "Bits price the description. Actions price finding out whether it holds."
- **Refuter:** exhibit a composition inside a fixed primitive set that adds a new primitive with a checkable lineage; or exhibit one instrument that measures both currencies in one unit and whose single number predicts an intervention across reachability, description cost and settling cost. Either breaks the sub-claim.

### C2: simulation-facing, checkable by a researcher against their own system
- **Statement:** a simulation that agrees with itself proves wiring, not capability; the ground contact must be to something the simulator did not author. A trajectory and a statistic are different objects, so a chaos claim must name which one fails.
- **Source, verbatim:** Fig 11 :70 - "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 1 :27 - "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 10 :42 - "A verifier that can reconstruct the claim cannot verify it." Fig 13 :32 - "comes from: a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."
- **What to check:** for a simulation you know well, name the ground that is not the model's own output and the slot being predicted. Then ask whether a success was checked against that ground or against the simulator's record. For a chaotic system, say whether the claim concerns the exact trajectory or the statistics of the attractor. Corless 2025 is the checkable reference: trajectories diverge exponentially while statistics can be well-conditioned, and a shadow orbit is not the exact orbit.
- **Refuter:** show a simulator whose prediction pays at a non-updating ground with no channel to that ground; or a bounded-precision scheme that tracks the exact reference trajectory of a positive-Lyapunov system over unbounded time, verified against the reference rather than a shadow orbit. Either breaks the sub-claim.

### C3: complexity-facing, checkable by a complexity or mathematical-physics researcher
- **Statement:** underivable in principle and unreachable at this budget are different facts with different instructions. Importing a new substrate moves a wall; importing against a budget limit adds an atom that was not needed.
- **Source, verbatim:** Fig 8 :40-41 - "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions." Fig 8 :41-42 - "Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom." Fig 6 :23 - "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 :51 - "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"
- **What to check:** the general spectral gap problem is undecidable (Cubitt, Perez-Garcia and Wolf, Nature 528, 2015), while particular instances may be decidable. Feynman's proposal and Lloyd's proof change the simulator substrate, so record the import rather than calling it an optimisation. Rahimi-Keshari, Ralph and Caves show the hardness boundary flips with loss and noise, so the difficulty is relative to the residual.
- **Refuter:** exhibit a uniform terminating algorithm for the general spectral gap problem; or show that the classical and quantum simulators arise from one primitive set with no imported atom and identical cost in both currencies. Either breaks the sub-claim.

## 3. What is explicitly not claimed

- Not a theory of everything and no last simulator. The universal yes/no is a `gap`, not a verdict.
- Not that no process can be simulated efficiently. SEARCHED is asked first; many efficiencies are reachable.
- Not that quantum computers are always faster. The loss/noise result gives a classically efficient case.
- Not that chaos blocks useful simulation. Only exact-trajectory tracking is claimed to be budget-limited; statistics can be well-conditioned.
- Not that undecidability of a general problem decides any particular instance.
- Not that a named algorithm is the framework's answer. The framework returns a shape, not a name; choosing a substrate is a provenance-bearing binding.
- Not `grounded`. No measurement, simulation run or numerical experiment is claimed.

## 4. Provenance

- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session; cite as `Fig N :line`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Eight-step loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- All eight essays by Isaiah N, 2026; two opened this session (Library of Babel, Recursive Self-Improvement Trap), six carried from the completed exemplar with that provenance stated in `05_what_shape_means.md`.
- World sources opened this session: Feynman 1982 via Alsing, Cafaro and Mancini 2024 (arXiv HTML); Preskill 2021/2023 (arXiv HTML); Cubitt, Perez-Garcia and Wolf 2015 via ICMAT; Corless 2025 (arXiv HTML); Conant and Ashby 1970 via the publisher abstract; Box quote provenance via The DO Loop. Each is recorded with author, venue, year, accessed date and a quote in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source"; the spectrometer resolved it. Concretely:

1. **Channel test:** withhold the simulator's own report from the checking seat and ask whether the prediction still pays at the physical ground.
2. **Currency test:** measure description bits and settling actions separately for one process and one slot.
3. **Trajectory/statistic test:** verify against the exact reference orbit, not a shadow orbit, before claiming chaos blocks usefulness.
4. **Instance/general test:** distinguish a decidable instance from an undecidable general problem.
5. **Round trip:** carry a simulator method up a scale and back down and measure `R_T`. Fig 4 :30 - "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

## 6. What an expert can check in twenty minutes

1. Read Fig 6 :21, Fig 8 :32 and :40-42, Fig 12 :125-126, Fig 11 :70 and Fig 13 :32 - six short passages.
2. Pick a simulation you know. Name its ground, its slot and the checking seat. Is the check independent of the simulator's own record?
3. Say which object a chaos result concerns: exact trajectory or attractor statistic. Name one discriminator that separates them.
4. Say whether a claimed hardness result is about the general problem or an instance, and whether a substrate change was recorded as an import.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
