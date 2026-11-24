# Isomers, gradients, and dependency order in ECO-0095

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The monitoring question decomposes into three structural questions the main audit does not settle:

1. A time series is a state (time) bonded to structures. Which structure is a trend, which is a variance ordering, and are temporal and spatial versions the same term?
2. Two time series can share all indicator ingredients. Are they isomers or members of one functional group?
3. In what order must a monitoring program be built, and what does a reading below the break mean?

## DOMAIN CENSUS

Atoms held for this derivation: the six substrate terms. Time is a state, glossed in the extract as "the ordered succession of differences"; Gradient and Spectrum are structures, glossed as "a difference that can be spent" and "ordering, so more and less can be said". Network is the remaining structure, "that entities relate, and influence travels between them". Bonds held: the seven plus negation. No new primitive is available without import.

## DERIVATION

### Q1: Temporal versus spatial early-warning signals

Fig 13 :76: "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."

A rising temporal AR(1) is a gradient over time (a difference that can be spent, bonded to the time state). A rising spatial variance across a lake or a landscape is a gradient over space bonded to the space state. They are **different terms**, not two measurements of one thing. This matters because the empirical literature uses both: Gsell et al. 2016 tested AR-1, SD, SK, and DR in time; the spatial early-warning literature (Carpenter and Brock 2010, cited in Boettiger et al. 2013) uses spatial variance and the discrete Fourier transform. A program that treats them as interchangeable commits a type error.

- **Falsifier:** show a monitoring system in which a spatial variance signal and a temporal AR(1) signal are interchangeable for the same mechanism at the ground, with identical false-positive and false-negative rates. Then Fig 13 :76 is strained for this domain and a re-census is owed.
- **Status:** `single-source` for the figure distinction; world corroboration from the separate spatial and temporal literatures.

### Q2: Isomer or functional group?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Two series with the same variance, AR(1), skewness, and density ratio are, at the level of the indicator formula, the same ingredients. If one is bonded to a slowly increasing nutrient load approaching a fold and the other to a seasonal forcing artifact, they are **isomers**: same atoms, different bond, different substance, and the formula cannot tell them apart. This is the structural version of the metamerism warning in `05_what_shape_means.md` §3.

As ecological practice usually writes them, however, the shared set {variance, AR(1), skew, DR} is better described as a **functional group**: the group says "loss of resilience" as a kind, and the qualifier (which driver, which state variable, which sampling scale) says which member. Calling the whole group a single early warning signal is the flat-formula collapse: the arrangement is the substance (Fig 12 :94).

- **Stronger isomer claim worth testing:** two ecosystems over the full shared atom set of their monitored drivers and state variables, differing only in which structure mediates which state pair, would be genuine isomers with a stated falsifier.
- **Falsifier, written before the run:** if two series matched on every indicator statistic AND on their bond to the same driver at the same scale can still diverge in mechanism at the ground, the isomer caution is empty here. If they cannot diverge, the functional-group reading stands and naming a specific mechanism from the pattern alone is refused.
- **Status:** `triangulated` (Fig 12 plus the source essay's metamerism case), with world corroboration from O'Brien et al. 2023 on processing dependence.

### Q3: Is a persistent driver a catalyst or a cycle?

Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

A slowly increasing nutrient load is catalyst-like: it survives its own use and keeps pushing. A predator-prey feedback is cycle-like: output re-enters as input, and the sign of the loop decides whether it closes. The two require different monitoring. A catalyst-driven drift rewards a trend test on the driver; a cycle rewards a test on loop gain or recovery rate. O'Brien et al. 2023 found that "temporal dynamics of driver variables (e.g., nutrient concentration) are themselves non-linear" and display pulse events, which is a catalyst-with-pulses rather than a smooth ramp.

- **Falsifier:** show that catalyst-like and cycle-like drivers produce indistinguishable indicator trajectories AND indistinguishable management outcomes in the same system. Then the distinction carries no information for this question.
- **Status:** `single-source` for the figure definitions; world corroboration for the driver nonlinearity.

### Q4: Dependency order of the monitoring program

Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Order: (1) perception, can the sensor tell the current reading from the previous one; (2) vocabulary, does the program have terms for what the indicator affords (variance is an ordering, AR(1) is a recovery-time proxy, a driver is a directed push); (3) objective, can it say what would count as progress, meaning early warning of a *named* transition; (4) planning, which intervention follows which verdict; (5) learn and carry, which correction is recorded with provenance.

The middle link is the one that usually breaks, because "the link between them, having terms for what a situation offers and being able to say what would count as progress, has neither" obvious failures "and the fewest instruments" (Fig 3 :24-26). A program that buys a better sensor and a more complex classifier while never naming the transition it is warning about is optimising above the break.

- **Falsifier:** show a monitoring program that reliably distinguishes fluctuation from change while its objective link (3) is explicitly unstated and unmeasured. Then the dependency order is wrong for this domain.
- **Status:** `triangulated` (Fig 3 plus the pre-registration discipline of Fig 5), with world corroboration from Gsell et al. 2016 on the necessity of prior mechanism knowledge.

## CONCLUSION

Temporal and spatial warning signals are different terms (Fig 13 :76). Series that share all indicator ingredients are isomers under a different bond to the driver, or at minimum members of one functional group whose qualifier carries the mechanism (Fig 12 :94, :117, :124). Catalyst-like drivers and cycle-like feedbacks require different monitoring. The program must be built in dependency order, and the unmeasured objective link, not the sensor, is the likely break (Fig 3). Nothing here names a universal indicator. The one live falsifier from the main audit carries over: a single pooled indicator with no pre-registered mechanism-specific shape that works across independent ecosystems would collapse several of these distinctions at once.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (opened 2026-11-23); local `THE_FORMULA.md` and `THE_SEAT_MAP_Field_Guide_amended.md`; world sources Gsell et al. 2016, O'Brien et al. 2023, Boettiger et al. 2013, all opened and recorded in `10_source_ledger.csv`. No measurement was taken in this derivation.

## FIGURE CENSUS

Fig 3 (dependency order, status per link, middle break), Fig 5 (pre-registered shape), Fig 12 (isomer, functional group, catalyst, cycle, arrangement is the substance), Fig 13 (states and structures, gradient over space versus time). Strained after re-census: none. The glosses for time, spectrum, gradient and network are quoted alone because the extract prints each label and its gloss on separate lines; no colon was inserted into a quotation.
