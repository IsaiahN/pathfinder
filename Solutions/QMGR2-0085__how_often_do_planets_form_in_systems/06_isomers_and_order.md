# Isomers, order and architecture in planetary systems

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

Two systems can form from the same disk with the same masses and end in different states: one remains compact and stable, the other loses planets. Are they **isomers** under Fig 12, and what is the **order** of the bonds in the chain formation -> instability -> detection? If the order is wrong, the frequency is being measured over the wrong population.

## DOMAIN CENSUS

Atoms held: Space, Time, Energy (states), Spectrum, Gradient, Network (structures), from Fig 13. For a planetary system the relevant structure is Network, "that entities relate, and influence travels" (Fig 13 :24), with a Gradient over Space and over Time. No new primitive is introduced. Bonds held: sequence ->, production =>, comparison ⋛, subtraction -, and the symmetric set. A geological age is a Spectrum, an ordering that lets more and less be said.

## DERIVATION

### Q1: Are a stable and an unstable system isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :96: "Two entries can share every ingredient and be inverses of one another."
- Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
- A system with planets {a, b, c} and spacings {K1, K2} and another with the same three planets but a different mass ordering are not two instances of one object. They share atoms and differ in arrangement. Under Fig 12 they are **isomers**, provided the ingredient list is genuinely the same.
- Marzari (2024) supplies the ground check: his 10,000 integrations vary masses and separations and find that a configuration with the less massive planet outermost is stable far longer, while a massive outermost planet makes the system "highly unstable with small values of t_i". Same kinds of ingredients, different arrangement, different outcome. That is the figure's isomer claim at the ground.
- **Falsifier, written before the run:** if two systems with identical masses, identical separations, identical inclinations and no external perturber can be shown to have different instability outcomes under deterministic integration, the isomer reading fails, because then the difference is not in the arrangement.

Status **triangulated**: Fig 12 (bond carries the difference) and Marzari 2024 (mass ordering changes the outcome) are different evidence pools.

### Q2: What is the order of the chain?

- Sequence -> is "A then B; B needs A to have happened" (Operators table, and Fig 12 :72 "A then B; B needs A to have happened"). The chain is:
  1. disk dissipates and planets are in place, t0 (production, =>, because the planets did not exist before);
  2. instability may onset at t1 > t0 (sequence, not symmetric; swapping breaks the meaning);
  3. ejection, collision or scattering changes the architecture (production of a new arrangement);
  4. the system survives to be detected, or does not (selection by the habitat, Fig 11 :15).
- The comparison ⋛ enters at step 2 as a threshold between a timescale and a clock. Fig 12 :87 gives the test: "is it about which is larger, rather than both being present? Yes." The Operators table restricts it to "a threshold relation between two quantities" and both operands qualify (an instability timescale and the system age or survey baseline).
- **The order is not optional.** Reversing steps 1 and 2 would mean measuring instability in systems where planets never formed. Fig 3 :20: "The chain is ordered by dependency, not by importance."
- **Falsifier:** an observation of dynamical instability in a system with no prior planet formation, or a detection made before formation, would break the sequence bond. No such case is known.

Status **single-source** for the bond definitions (Operators and Fig 12 are one figure family), **triangulated** for the dependency order with Fig 3.

### Q3: Is the union a partition?

- Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
- Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."
- Formation and instability are two conditions. A third condition, survival into the detected sample, gates observation. They do not partition a single pile; they are a union of overlapping conditions, and each needs its own loop and its own ground. Yang et al. (2023) run forward modelling specifically because the raw observed multiplicity function is not the intrinsic one, which is the operational form of "unbundle before you search again".
- **Falsifier:** a single intervention that changes formation efficiency, instability rate and detection completeness by the same factor, leaving the joint distribution's shape unchanged, would collapse the union into one condition.

Status **triangulated**: Fig 9 (union rule) and Yang et al. 2023 (forward modelling as unbundling) are distinct.

### Q4: The scale crossing and R_T

- Fig 4 :22: "Only methods cross up. Only head starts come down."
- Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
- An instability time from one N-body run is an instance. The population frequency is a method-level claim about a distribution. Carrying the instance upward as if it were the distribution is the recording error. Yang et al. (2023) generate about 4 x 10^8 simulated systems in their forward model, which is a head start sent down, not a replay of one success.
- **Falsifier:** a mapping from a single simulated instability time to a population frequency that loses nothing and has no declared gap.

Status **single-source** for Fig 4, with the world check corroborating the practice.

## CONCLUSION

A stable and an unstable planetary system are **isomers** in the figure's sense when they share atoms and differ in arrangement; the mass-ordering result of Marzari (2024) is the ground-level instance. The chain is a **sequence** (formation then instability then scattering then selection), with a **comparison** threshold at the instability step and a **production** bond when the architecture changes. The whole is a **union**, not a partition, so it must be unbundled before any frequency is reported. The scale crossing from one system to a population is lossy and carries a nonzero round-trip gap. No new primitive, no import that moves the wall, and no name for the missing number is required.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; Operators and Formula tables; Marzari 2024; Yang et al. 2023; Zhu and Dong 2021. No measurement was taken.

## FIGURE CENSUS

Fig 3 (dependency), Fig 4 (membrane and R_T), Fig 9 (union, unbundle, describe first), Fig 11 (selection), Fig 12 (isomer, sequence, production, comparison, bond price), Fig 13 (network, the six). Strains after re-census: none hidden; the one open item is who declares the threshold (F4 in `01_figure_grounded_audit.md`).
