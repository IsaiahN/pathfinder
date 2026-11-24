# Outreach draft: check the output before deciding about the theory

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** the two-stage offer only works if the stage-1 output survives. Do not open with "we are at X% of capacity". Re-census the limit first (F1 and F8 in `01_figure_grounded_audit.md`). The output that goes out is the shape and its refuter, not a throughput claim.

---

**Subject:** Check one claim about "close to channel capacity" before deciding if it is worth reading

> Hi [name],
>
> I am writing with one specific claim about communication over channels that change unpredictably. I am not asking you to read a theory first, and I am not asking you to agree. If the claim does not survive, there is nothing else to look at.
>
> **The claim (`specified`, not `grounded`):** when a channel changes unpredictably, there is no single theoretical limit that a real system can be said to approach. The fixed-channel quantity `C = max I(X;Y)` is a legitimate anchor only when the statistics are known and the blocklength is asymptotically large. Once the channel moves, the meaningful limit depends on what the transmitter and receiver know (channel state information), on latency and blocklength, and on whether the variation is stochastic or adversarial. So the honest answer is a family of limits, reported with the distribution of achieved rate (not just a mean) and with the measured gap between the abstract capacity formula and the realised operating point.
>
> **What this does not claim:** that capacity is undefined, that coding is futile, or that a particular benchmark is the right one. Benchmark choice is a convention until it decides the verdict; at that point it has to be settled by a measurement, not by preference. The framework this comes from returns a shape, not a name.
>
> **What would refute the claim (written down before this message):**
> 1. A single, stable, frame-independent limit is exhibited for an unpredictably changing channel, and it settles reliability without stating CSI, latency, blocklength or threat model.
> 2. A fixed, state-blind codebook at a given blocklength and error probability reaches the same rate as a code with full channel state on the same channel class.
> 3. The abstraction-to-implementation gap is shown to be zero at finite blocklength and finite compute for that channel class.
> 4. The distribution of achieved rate carries no reliability information beyond its mean for that channel class.
>
> A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Canonical figures and formula (local extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md` and `FRAMEWORK/figures/THE_FORMULA.md`
> - Figures README, canonical usage: https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md
> - Arrival of the Fittest: The Tether Architecture: https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a channel problem you can check against measurement. Write down what would refute your result *before* you run it. The framework's own rule is that a loop cannot check the direction of its own question, and its author warns that testable outputs must be derived from the architecture or by working the formula yourself. A reported failure is more useful to me than a reported success.
>
> Thanks,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 - *"Bring a characterised residual, never the source."* Fig 2 :45 - *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Refuter before theory | Seat Map :287 - *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated on the claim | `THE_FORMULA.md` - *"Mode. general · specified · grounded. State which."* |
| No bare "percent of capacity" | F1 and F8: the benchmark is a convention until it decides an outcome; then Fig 10 :47 applies - *"a convention that decides an outcome has stopped being one."* |
| Distribution, not mean | Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* |
| Shape, not a named universal limit | Figures README - *"what a missing thing would have to look like (a shape, not a name)"*; Fig 9 :32 - *"you get a kind of thing, never the answer itself"* |
| No request for trust or prestige | The Recursive Self-Improvement Trap (opened 2026-11-23): prestige *"can fund an action"* but *"cannot settle an action. Only the ground can settle it."* |
| Offer the formula as a method to reuse | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| Ask users to state their own ground and refuter | Formula "Direction": a frame cannot check the direction of its own question; the essay warns the output is only as good as the validator. |
| One-to-one only, no bulk send | Fig 7 :13 - *"agreement compounds, evidence does not"*; Seat Map :163 - *"High correlation is disqualifying for a verdict and efficient for a convention."* |

## Two-stage discipline

- **Stage 1:** send the claim, the mode and the four refuters. Ask what the recipient would count as a failure. Record their verdict before showing any framework material.
- **Stage 2 (opt-in only):** if they are curious, offer the three links. Their later agreement is never pooled as corroboration, because a reader who has absorbed the framework now shares the evidence pool (Fig 2 :40).
- **Stage 3:** offer the formula as a generator, with the instruction that each user writes their own refuter and states their own mode.

**Hard precondition restated:** stage 1 is the re-censused limit claim, not a throughput number. If a recipient asks "what is the percentage?", the honest answer is "it depends on which limit, and that is part of what is being checked."
