# The Tether's answer on why climate models differ in representing clouds

**Mode: `specified` on the per-domain claims, `general` on the structural shape, not `grounded`.** This is a shape and a route, not a result. It is a simulated derivation checked against the figures (`05_what_shape_means.md` §7), not a ground reading.

## 1. The residual it answers

Models given the same forcing predict different warming, and the spread concentrates in cloud radiative effect and its change with warming. Index the residual per model and per cloud regime (Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*). The question asks for the shape of the explanation of that spread. It is a **union compound** of at least four overlapping conditions (Fig 9 :54, *"And when the split lands on a union rather than a partition, unbundle before you search again."*), not one hard problem with a right amount of cloud physics. Verdicts below are kept per domain and never averaged.

## 2. The shape, per domain

1. **The spread is indexed, not global.** A multimodel mean CRE hides the live signal; it sits in particular regimes and particular models. Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* (`general` structure, corroborated by one shared CMIP pool.)
2. **A model cannot score itself.** The anchor for cloud radiative effect is a measurement that does not move when a model changes: CERES top-of-atmosphere flux and CloudSat/CALIPSO profiles. Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :33: *"The anchor must not update."* Reanalyses and model-derived kernels are frames, not anchors, and a target built from the same pool it corrects gives the pool talking, not corroboration (Fig 2 :40). (`specified`, triangulated Fig 1 plus Fig 2 plus Fig 10.)
3. **Schemes differ by bond, not by ingredient list.** A parametrization is a typed relation between a sub-grid process and a resolved state. Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Over a fixed variable set, two schemes are **isomers** (Fig 12 :117: *"Same atoms, different bond, different substance"*); where they share only a few variables, they are members of one **functional group** (Fig 12 :124). (`specified`, triangulated Fig 6 plus Fig 12.)
4. **A flat scalar hides cancelling errors.** A model can match net top-of-atmosphere CRE while cloud fraction, liquid water path and effective radius are wrong in opposite-signed ways that cancel. Zhao et al. 2022 measured this directly. Fig 5 :70: *"A term is settled when the ground pays for it. A term is usable when something can compose over it."* So "which model best represents clouds?" is not answerable from net CRE. (`specified`, triangulated Fig 12 plus Fig 5, with one direct world measurement.)
5. **The broken link is the objective, not the physics.** Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Present-day mean-state cloud skill and cloud-feedback skill are different quantities; effort aimed above the break cannot rescue the missing objective (Fig 3 :19). (`specified`, single-source on the world side.)
6. **Resolution is an inward extension, not an import.** Clouds sit below the grid scale. Sharpening an instrument that already returns a residual is INWARD in Formula step 7; it does not add an atom. The cross-scale transform is lossy and carries a round trip gap R_T that must be measured (Fig 4 :30). (`specified`, triangulated Fig 4 plus Fig 6.)
7. **Actor valence is regime-relative.** Aerosols, inversion strength and SST patterns are not uniformly warming or cooling; the same actor flips sign with the residual. Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* (`specified`, triangulated Fig 11 plus regime-decomposition literature.)
8. **No figure names the winning scheme.** Fig 13 :134-135: *"Unreachable is a verdict here, not a silence, It cannot say which primitive is missing, because naming it would mean already holding it."* The figures fix the shape and stop. This is a `gap` of the shape-not-a-name kind, **unreached at this budget**, not underivable in principle: active sensors and process models are instruments already returning something. (`general`, gap.)

## 3. What it explicitly does not say

- Not that one model or one cloud scheme wins. No figure line selects one.
- Not a numerical ECS value, a cloud-feedback coefficient, or a parameter setting. Those are measurements and tuning decisions.
- Not that all models are equally bad, or that their agreement proves the cloud response. Model agreement is a filter and a candidate generator, not a witness (Fig 2 :40, Fig 9 :60).
- Not that reanalyses are the ground. They contain model parameterizations.
- Not that resolution alone solves the problem. Higher resolution clears one condition of a union and leaves the rest.
- Not `grounded`. No measurement was taken by this derivation.
- Not that "shape, not a name" forbids naming an already-held binding. It governs missing primitives (see `05` §5, correction in §5b). Naming a candidate binding is provenance, not an invented primitive.

## 4. What would settle it — the ground

A source-discriminating instrument, not a further argument. The analogue from *The Hard Problem is About Source* is the spectrometer resolving metamerism: several arrangements produce the same green reading, and the reading cannot comment on the source. Here:

1. **A discriminator for compensating errors:** simultaneous, co-located measurements of cloud fraction, liquid water path, effective radius and phase, with a radiative closure, that distinguish arrangements producing the same net CRE. CERES plus CloudSat/CALIPSO plus EarthCARE plus in situ campaigns are the instruments already returning something.
2. **A fixed objective:** a metric that selects realistic dCRE/dT from present-day fields, or the admission that no such metric exists and that feedback must be evaluated directly against warming.
3. **Anchor tests:** models ranged separately against a non-updating measurement, with overlap among evaluation datasets declared. Independent active sensors versus in situ campaigns count as separate frames only if their evidence is independent.
4. **Standing refuters from `01` §4:** a single intervention removing all intermodel spread; a multimodel-mean statistic locating the responsible regime; matching net CRE entailing a matching joint distribution; present-day mean-state skill predicting feedback skill; a figure line selecting a scheme; or a demonstrated lossless cross-scale round trip.

## 5. The honest stop

**Unreached, not unreachable.** The six-term substrate and the per-slot rule are a visible choice of compression axes, not nature's own list (see `05` §3 and the SEP pluralism source). The answer stops at the limit of what the available instruments distinguish and records the lineage so the stop is checkable. Fig 13 :134: *"Unreachable is a verdict here, not a silence."* Indiscernibility is not identity: two arrangements that produce the same flux are not the same atmosphere.

## 6. One-paragraph version for outreach

> The Tether does not pick a winning cloud scheme. It says that the spread in how models represent clouds is a union of overlapping conditions, not one hard problem: different closures, different instrument reach from cloud scale to grid scale, different conventions about what counts as a match, and genuine observational underdetermination. The residual must be indexed per model and per cloud regime, because averaging hides the live signal. Cloud radiative effect measured from space is the anchor, and reanalyses are not anchors because they contain the models' own assumptions. Two schemes with the same variables can differ by the bond between them, which is why matching net cloud radiative effect does not mean the clouds are right: compensating errors in cloud fraction, water path and droplet size can cancel in the flux. What is owed is a source-discriminating instrument, a fixed objective, and independent anchors, not more agreement. No figure selects a parameterization, so that part stays open until a ground settles it.
