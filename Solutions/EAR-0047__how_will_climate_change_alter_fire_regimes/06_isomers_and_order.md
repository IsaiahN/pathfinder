# Isomers, unions and order in the fire-regime question

**Mode: `general` on the structural derivation, `specified` where it makes a checkable prediction. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).**

## RESIDUAL

Two questions are owed beyond the main audit: (1) can two fire regimes that share the same set of conditions still be different substances, in the sense of Fig 12, and (2) what is the dependency order between climate, fuel, observation and management, and what breaks if it is reversed?

## DOMAIN CENSUS (brief, full census in `01_figure_grounded_audit.md` section 1)

- **D1, fire-climate habitat.** Actors: temperature, humidity, drought, wind, season, terrain, fuel, ignition, people. Currency: per-slot fire-regime metrics. Anchor: observation.
- **D2, land-management seat.** Actors: treatments, prescribed and cultural burning, suppression, policy. Currency: before/after differences in fire behaviour. Anchor: experiment or BACI measurement.
- **D3, verification.** Anchor: the ground, never agreement. Independence near zero in this simulated run.

Order by dependency: observe the upstream condition, then expect behaviour, then evaluate the intervention.

## DERIVATION

### Q1  -  Are two biomes' fire regimes isomers under Fig 12?

- Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Take the shared condition set as atoms: `{fuel availability, fuel continuity, fuel dryness, ignition, terrain}`. Haas et al. 2024 supply the empirical basis for this set: vegetation amount, vegetation cover and atmospheric humidity are *"the most important influences on wildfire extent and severity"*, while *"Ignitions, whether anthropogenic or natural, are generally not limiting."*

- A boreal regime and a savanna regime can share all five atoms. They differ in which condition binds and how the conditions are arranged. Under Fig 12 :117 they are therefore **isomers**: same atoms, different bond, different substance. The difference is invisible in a list of drivers and decisive in behaviour. This matches Thapa et al. 2026: *"The direction and magnitude of fire regime changes vary considerably by biome type, region, and the interplay of land use and management factors."*
- The weaker claim is that they share a **functional group** (Fig 12 :124): a `fuel x dryness x ignition` substructure that fixes the kind, with a qualifier that says which member. The group is necessary but not sufficient to predict the regime.
- **Falsifier, written before the run:** if two regimes with identical condition sets and identical binding order nonetheless behaved identically under the same forcing, the isomer claim fails and the functional-group reading is all that survives. Conversely, if a regime can be written without an atom the other requires, they are not isomers at all.

**Status:** `general` for the structural claim, `specified` and unmeasured for any particular pair of biomes. Triangulated for the definition (Fig 12 plus the independent driver syntheses); no ground comparison was run.

### Q2  -  Is the climate/land-use split a partition or a union?

- Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
- Fig 9 :57: **"a case in two conditions is not a harder case of either"**

Partition would mean every fire case belongs to exactly one of "climate-driven" or "land-use-driven". That assumption fails: savanna trends are mediated by land use and suppression, so climate alone cannot predict them (Thapa et al. 2026). The correct object is the intersection, a compound with its own loop. Fig 9 :57 adds that *"It stops being a mixture and becomes a specific compound."*

**Falsifier:** a demonstrated additive, non-overlapping decomposition of fire-regime change into a climate term and a land-use term across all major biomes would break the union claim.

### Q3  -  What is the dependency order, and what happens when it is reversed?

- Fig 3 :20: **"The chain is ordered by dependency, not by importance."**
- Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
- Fig 3 :22: **"A step whose input never arrives cannot be diagnosed, only its predecessor can."**

The chain: (1) perception of fire and fuel state, (2) vocabulary for what the landscape affords, (3) an objective in the form of a fire-regime metric, (4) a plan in the form of a treatment schedule, (5) learning to carry. The dependency break most likely to bite is between (2) and (3): having terms for what the landscape affords and being able to say what would count as progress are different things. Fig 3 :25 says the middle link *"has neither, so it attracts the least attention and the fewest instruments."* For fire management this is the link between a fuel map and a stated, measurable objective. A treatment scheduled without an objective is effort above the break.

**Falsifier:** show that a treatment programme with no stated, measurable objective performs as well as one with one, i.e. that link 3 is not load-bearing.

### Q4  -  Is management a sequence, a goal, progress, or a cycle?

- Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."**
- Operators table :46: **"progress is a subtraction, which is why a vocabulary without it cannot say how far along it is"**
- Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

A fuel treatment is not an ingredient. It is a **route**: a sequence of actions (thin, burn, monitor, retreat) toward a **comparison** (severity below a threshold), with **progress** as a subtraction (severity with treatment minus severity without). Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."*

The regime itself is a **cycle**: fire changes fuel, fuel changes fire, with reburns re-entering as input. The sign of the loop decides whether it closes; a chain cannot close by construction. This is why Fig 11 :63 gives the management verdict: *"Which is why a managed ecosystem is permanent work rather than a solved state."* A one-off treatment is a chain inserted into a cycle; the cycle reasserts itself as fuels rebuild. Davis et al. 2024 report the empirical signature: treatment efficacy declines with age, and maintenance treatments are required.

**Falsifier:** show that a one-off treatment produces a permanent change in the cycle without retreatments. That would break the permanence claim and the cycle reading together.

## CONCLUSION

Two fire regimes can be isomers over the same condition set: same atoms, different arrangement, different behaviour. The climate/land-use split is a union, not a partition, so the intersection needs its own loop. The dependency order runs observation, vocabulary, objective, plan, learning, and a treatment without a measurable objective is a reading below the break. Management is a sequence toward a comparison with progress as a subtraction, inserted into a cycle that reasserts itself, so it is permanent work. Each claim carries its own falsifier; none is asserted as `grounded`.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, and the world sources in `10_source_ledger.csv`. No fire measurement was taken by this derivation.

## FIGURE CENSUS

Fig 3 (dependency order, middle link), Fig 9 (union versus partition), Fig 11 (permanence), Fig 12 (isomer, functional group, plan/goal/progress, cycle), Operators (progress as subtraction). Strained after re-census: none. The habitat-as-niche mapping was declined and removed in `05_what_shape_means.md` section 4; that was the one real strain and it was re-censused rather than smoothed.
