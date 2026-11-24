# Outreach draft — validate the test protocol first, then decide about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the three sub-claims in `08_expert_verification_packet.md` have been re-checked against the verbatim figure text on the day of sending. A packet that fails stage 1 collapses the two-stage offer on contact.

---

**Subject:** What would count as a failure of this simulation-validation protocol?

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not asking you to read the framework first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`general` structurally, `specified` for early-universe cosmology, not `grounded`):** a simulation is a library of laws, initial conditions and numerical machinery. It cannot validate itself from inside that library. When the early universe cannot be recreated in a laboratory, the way to test it is not to find a cleverer internal check. It is to place the simulation in contact with a ground that does not move when the simulation changes: the observed universe. Concretely, the protocol has six parts:
>
> 1. Write the observable slots before choosing any tool (CMB temperature and polarization, primordial light-element abundances, BAO, large-scale structure, numerical convergence). A residual indexed per slot, not averaged into one score.
> 2. Range each prediction against a measurement from a different epoch or a different instrument. Two codes run from the same initial conditions are one witness, not two.
> 3. Commit a prediction before the measurement is made. A fit written after seeing one dataset does not carry the same weight.
> 4. Use laboratory analogues and test harnesses for wiring only. They check that the equations were implemented; they do not establish that the simulation reproduces the actual universe.
> 5. Enumerate the habitat beyond direct contact: foregrounds, stellar processing of primordial abundances, calibration drift, subgrid prescriptions. A first-order list misses third-order effects.
> 6. Report what the condensation dropped and say plainly which limit was reached: unfound at this budget, out of reach with this closure, or a genuine gap.
>
> **What I am not claiming:** that any named simulation is validated by this; that a particular inflationary or dark-matter model is correct; that a laboratory analogue recreates the early universe; that more simulators agreeing makes a result true. I am offering the shape a test must have, not a certificate for a model.
>
> **What would refute the shape claim:**
> 1. a simulation settled as correct by internal consistency alone, with no contact with any observation;
> 2. two simulations sharing all inputs and data counted as two independent witnesses;
> 3. a lab analogue shown to establish capability for the real universe, not just correct wiring;
> 4. a post-hoc fit shown to carry the same weight as a pre-committed prediction that survives a new measurement;
> 5. an instrument for something that has never registered at any resolution, specified from a description alone, that succeeds;
> 6. a budget or resolution threshold shown to settle truth by itself.
>
> I wrote these down before sending this. If any one holds, I will retract the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Canonical figures and line-numbered text (local to this project): `FRAMEWORK/reference/03-FIGURES_TEXT.md` and `FRAMEWORK/reference/FIGURES_README_canonical.md`
> - The eight-step loop and the mode rule (local): `FRAMEWORK/figures/THE_FORMULA.md`
> - Public verification and validation of simulation models, including the ASME V&V standards: https://en.wikipedia.org/wiki/Verification_and_validation_of_computer_simulation_models
> - Cosmic microwave background, its prediction, discovery and instrument chain: https://en.wikipedia.org/wiki/Cosmic_microwave_background
> - Big Bang nucleosynthesis and the CMB/BBN consistency test: https://en.wikipedia.org/wiki/Big_Bang_nucleosynthesis
>
> **If you want to use the machinery:** the formula is in the local link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, framework second | Fig 10 :52 "Bring a characterised residual, never the source." A recipient who absorbs the framework before judging stage 1 has joined the frame being checked. |
| Do not ask for agreement | Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Refuter written before the run | Seat Map :287 "a falsifier written before the run is a design instrument, not only an honesty device." |
| Mode on every claim | `THE_FORMULA.md`: "Mode. general · specified · grounded. State which." |
| Six numbered protocol parts instead of a narrative | Fig 1 :19 "The residual is indexed by object slot, not aggregated." |
| Independent epochs named, codes not | Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Fig 7 :13 "same closure, handed along; agreement compounds, evidence does not." |
| Harness called wiring only | Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." |
| No claim that any simulation is validated | Fig 9 :32 "you get a kind of thing, never the answer itself." The output is a shape. |
| No ask for trust or prestige | Recursive Self-Improvement Trap: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Offer the formula as a method | Fig 4 :22 "Only methods cross up. Only head starts come down." |
| Ask each user for their own ground and refuter | `THE_FORMULA.md` Direction: a frame cannot check the direction of its own question. |

## Two-stage offer, explicitly

1. **Stage 1:** send the shape claim and the pre-registered refuter. Ask what the recipient would count as a failure. Record their verdict before showing any framework material.
2. **Stage 2, opt-in only:** if they are curious, offer the three links, with the note that the figures, not the summary, are the authority. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3:** offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

Stage 1 comes first because Fig 2 :45 says "Frames range against the ground. They do not negotiate with it." Stage 2 is opt-in because Seat 4 must not hold the interiors. Stage 3 sends a generator, which Fig 4 :22 permits, but each user still needs a ground and a written refuter.
