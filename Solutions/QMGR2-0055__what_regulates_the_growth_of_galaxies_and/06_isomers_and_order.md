# Cycle versus chain, union versus partition: supporting derivation

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The word "regulate" is ambiguous between two structures: a one-way chain of cause and effect, and a returning loop with a sign. The record's usual phrasing ("AGN feedback regulates galaxy growth") does not say which. Two questions are owed:

1. Under Fig 12's bond set, is regulation a chain, a cycle, or something else?
2. Is the regulator question a partition (one lever per condition) or a union (overlapping conditions), and in what dependency order should it be searched?

## DOMAIN CENSUS

Atoms held: the six from Fig 13 (Space, Time, Energy states; Spectrum, Gradient, Network structures) plus the bindings from the astrophysics frame (black hole, cold gas, stars, halo, feedback energy). Bonds held: the seven, including sequence (→) and comparison (⋛), plus the unary negation (¬) from the Operators table. No new primitive is available without import. The question is about the *arrangement* of held atoms, so Fig 12 governs, not Fig 13's six-term set.

## DERIVATION

### Q1 - Is a regulator a chain or a cycle?

- Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- A chain is the degenerate case: one bond type, no branching. Fig 12 :48: "A chain is the degenerate case: one bond type, no branching." A chain can express `gas → stars` and `gas → black hole`, but it has no edge returning from either product to the gas.
- A cycle requires the output of one step to become the input of an earlier one. `accretion → energy → gas state → accretion` is a cycle. The sign of the return (heating/expulsion versus compression/funnelling) decides whether it closes in a self-limiting or runaway way.
- ⇒ Regulation is a **cycle**. A chain can coexist with it and describe the supply side, but the chain itself is not the regulator.
- **Falsifier, written before the run:** a measured one-way chain with no returning edge that still produces the observed small-scatter coupling. Under Fig 12 :121 this cannot be composed, so a demonstrated case breaks the figure's construction claim for this domain. Not strained; single-source within the figures, corroborated by the control-theory analogue (Wikipedia / Åström and Murray 2008).

### Q2 - What structure is the black hole: catalyst, product, or condition?

- Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
- The black hole is not consumed by its own feedback, so it is a **catalyst**, not a product that is spent. Cold gas is the spent operand. The halo is a **condition**, not a catalyst (this is the re-census from `01` section 5).
- The figure's warning "nothing records which a term is" predicts an observational gap: scaling relations are time-integrated and do not record whether the engine is spent or regenerating. The eROSITA accretion-rate break (Igo et al. 2026) is a step toward recording it.
- **Falsifier:** time-domain evidence that the central object is removed or exhausted by its own feedback in the relevant mass range, with the scaling relation unchanged.

### Q3 - Is the question a partition or a union?

- Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
- Fig 9 :55-57: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
- Test on the opened sources:
  - Condition F (feeding and feedback cycle): Ruffa et al. 2026.
  - Condition S (stellar coupling through gas): Liu et al. 2026.
  - Condition H (halo and morphology gate): Roberts et al. 2026, Mountrichas et al. 2026.
  - Intersections: F∩S is stellar feedback changing the fuel available for accretion (VariableTNG's indirect result); S∩H is merger history setting disk rotational support (Roberts et al.); F∩H is maintenance-mode heating in massive halos (Mountrichas boundary conditions plus Ruffa kinetic-mode).
- A single lever (say, "increase coupling efficiency") clears only F. The intersections remain because S and H still bind. So this is a **union**, not a partition.
- The Library of Babel essay (opened): "Perhaps your problem was a bundle or conflation of several problems masquerading as one?" Same verdict from search theory.
- **Falsifier:** one intervention that removes the coupling in F, S and H simultaneously and leaves no compound. That would make it a partition.

### Q4 - What is the dependency order across scales?

- Fig 3 :21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."
- Fig 4 :19-20: "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."
- The loop `gas in → energy out → energy back onto gas` is the kernel. What changes with size:
  - parsecs: actors = black hole and accretion disk; currency = accretion rate and kinetic power; anchor = resolved spectroscopy and X-ray timing.
  - kiloparsecs: actors = molecular gas, stars, supernovae; currency = gas mass and SFR; anchor = CO kinematics and matched controls.
  - halo scale: actors = dark matter halo, mergers, cosmic web; currency = binding energy and gas supply; anchor = clustering and merger trees.
- Fig 4 :21: "The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction." Order by dependency: enumerate habitat -> characterise engine loop -> cross membrane and measure R_T -> read the galaxy-scale correlation as the settling ground.
- **Falsifier:** a measured transform between parsec and kiloparsec descriptions with zero round trip gap for the load-bearing quantities. That would remove the membrane for this domain.

### Q5 - Is the cycle an isomer of anything in the framework?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Compare two arrangements of the same held atoms under different bonds:
  - Arrangement A (chain): `cold gas → black hole` and `cold gas → stars`, with `+` conjunction at the shared gas. Same atoms, both products grow, no return. Substance: a *supply* model.
  - Arrangement B (cycle): `accretion → energy → gas state → accretion`, with an ordered, signed return. Same atoms, different bond at the third edge. Substance: a *regulatory* model.
- Under Fig 12 they are **isomers**: same ingredients, different bond, different behaviour. This is the precise sense in which "feedback" and "supply" are not variants of one explanation. They are different substances whose formula (a list of ingredients) cannot distinguish.
- Fig 12 :94: "The arrangement is the substance." The isomer claim is therefore not a metaphor; it is the figure's own test.
- **Falsifier:** show that the two arrangements are observationally indistinguishable for every instrument that can bear on this residual, in which case the isomer distinction carries no information here (a union horizon statement, not a figure refutation, per *How Intelligence Actually Works*).

### Q6 - Analogues, and where they stop

- **Control theory / cybernetics (low overlap).** Wikipedia "Feedback" (opened): "Feedback occurs when outputs of a system are routed back as inputs as part of a chain of cause and effect that forms a circuit or loop." It also warns that "many systems with feedback loops cannot be shoehorned into either type, and this is especially true when multiple loops are present." This corroborates Q1 and Q3 from a field with no stake in the framework. It is an analogue, not a figure line; it cannot decide anything.
- **Habitat cascade (low overlap with physics).** Fig 11 :52 uses DDT and eagles: first-order enumeration, second-order effect, residual three steps out. The astrophysical version is accretion -> outflow -> molecular gas -> star formation. Same structure, different ground.
- **Catalyst (chemistry).** Fig 12 :119 is itself borrowed from chemistry. The black hole's persistence across episodes is the structural match.
- Where analogues stop: control theory has a designed set point; the galaxy-black hole system has no external controller. Fig 11 :56 says in the unmaintained mode "nothing selects, and what survives is what the ground kept." So "regulation" here is self-regulation via a closing loop, not governance by a seat. Calling it "feedback control" without that caveat imports a maintainer that the system does not have. This is a strain we name, not hide.

## CONCLUSION

Regulation is a **cycle**, not a chain. The black hole is a **catalyst**, the gas is the spent operand, the halo is a **condition**. The question is a **union** of at least three overlapping conditions, and the two candidate structures (supply chain and regulatory cycle) are **isomers** under Fig 12: same atoms, different bond, different substance. Dependency order runs from habitat enumeration to engine loop to membrane crossing to ground reading. No new primitive is needed, and no import moves the wall; all imports here are bindings onto held shape terms. What remains unmeasured is the sign of the return in each condition and the size of R_T across the membrane.

## ANCHOR

Verbatim figure text from the local `03-FIGURES_TEXT.md`, opened this session. Six essays opened 2026-11-23; two mapped from the validated exemplar and marked. Six astronomy sources and one control-theory source opened 2026-11-23. No measurement was taken by this agent.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 (kernel, membrane, only methods cross), Fig 9 (union, unbundle), Fig 11 (catalyst-free habitat reading, valence, cascade), Fig 12 (chain as degenerate case, cycle, catalyst, isomer, arrangement is substance), Fig 13 (six-term set, not used to select an actor), Operators table (ordered and unary operators). Strains after re-census: one, named in Q6 (control theory imports a set point the system does not have).
