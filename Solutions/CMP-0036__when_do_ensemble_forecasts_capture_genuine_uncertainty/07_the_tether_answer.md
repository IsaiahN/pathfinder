# The Tether's answer: when an ensemble carries genuine uncertainty

**Mode: `specified` on the separator and on the per-domain verdicts; `general` on the structural shape; `gap` on the universal threshold and on the name of a missing atom. Not `grounded`.** Simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §6), not a ground reading. No forecast was run, no hindcast was scored, no number was estimated.

## 1. The residual it answers

The residual is per slot: `R_s = |Γ(b,a) − o′|`, where `Γ` is the generating frame, `a` a member run, and `o′` the observation that actually arrived. The question is not how large the ensemble's spread is but whether spread is a reading of `R_s` or a product of `Γ` displayed back to itself. These are different quantities with different anchors, so the question is a **union of overlapping conditions**, not one dial (Fig 9 :4-5, :54-57). A single spread-skill coefficient cannot decide it.

## 2. The shape: a four-condition separator

1. **Differing evidence.** Independence between two frames is how little they draw on the same evidence (Fig 2 :31-32). Members sharing a parameterisation, a training set, or a model ancestry are one frame wearing several names (Fig 8 :49). *Verdict for this condition: genuine uncertainty requires low overlap among members; repetition is high overlap.* Status: **triangulated** (Fig 2 :31/:40/:44 plus low-overlap arithmetic from survey statistics and reliability engineering).
2. **A change of reach, not just position.** Perturbing a parameter searches inside one closure (Fig 6 :49: *"Same atoms, same wall, more of the space actually visited."*). A structural assumption brought from a differing frame is an import and is the only operator that moves the wall (Fig 6 :23). Both need provenance and a shadow test (Fig 8 :12-13). *Verdict: structural uncertainty requires an imported atom; parameter variation repeats the structural assumptions.* Status: **triangulated** for the reach rule (Fig 6 plus Fig 8 plus Fig 13 :115-118); **single-source** for the specific claim that a stochastic parametrisation is or is not an atom.
3. **A non-updating ground.** The anchor is the verifying observation, not the ensemble consensus and not a target refitted to the ensemble's own output (Fig 2 :29-35, :45-46). Each member is ranged against it separately. Reliability is a statement about observations, not internal agreement. *Verdict: without a non-updating anchor, agreement is coherent drift and cannot distinguish uncertainty from repetition.* Status: **triangulated** (Fig 2 plus the field's own reliability criterion in the opened Wikipedia source).
4. **A refusable use.** A threshold or a fixed ensemble size is a convention only while it can be refused when the ground turns against it (Fig 10 :47-49). Spread is a budget filter, never a witness for the verdict (Fig 9 :60). *Verdict: a decision rule that cannot be refused has silently become a verdict.* Status: **single-source** on the figure side (Fig 10 :47), with the world sources offering no direct corroboration.

The shape is the conjunction of these four, kept separate and never averaged. Verdicts per domain:

| domain | verdict | mode | status |
|---|---|---|---|
| D1 ensemble generation | member count is not the variable; dependence and ancestry are | `specified` | triangulated |
| D2 structural reach | perturbation repeats; import changes the wall; imports need a source gate and a shadow test | `specified` | triangulated for the rule, single-source for the stochastic-parametrisation case |
| D3 verification | each member ranges against an observation that does not update; spread cannot certify itself | `specified` | triangulated |
| D4 use | a convention that fixes an outcome is no longer a convention; spread is a filter | `general` structural, `specified` per application | single-source on the figure side |
| Threshold, missing atom | no figure returns a number or names the missing atom in an instance | `gap` | unreachable / shape-not-a-name |

## 3. What the answer actually says about the two halves of the question

**When genuine uncertainty is captured.** When the members come from closures that differ at the evidence level, the variation changes what can be represented rather than only reweighting one representation, a non-updating observation is available to range each member separately, and the way spread is used remains refusable. In the field's own terms, this is the case in which a multi-model collection is not merely an *ensemble of opportunity*: the lineage of each member is known, the shared components are recorded, and the spread's relation to verification is checked rather than assumed.

**When the ensemble simply repeats structural assumptions.** When the members are initial-condition or parameter perturbations of one model family (search at the same reach, Fig 6 :49); when different models descend from a common ancestor and share parameterisations and calibration data (Fig 8 :49, and the AR6-based guidance opened this session); when the spread is used as its own evidence of quality (Fig 1 :27); when calibration is performed against a target that has been refitted to the ensemble's own output (Fig 2 :33-35); when more members are added without selecting the next one against the residual the last one surfaced (Fig 7 :36). In all of these the ensemble can be large, well displayed, and internally consistent, and still carry no reach the single model did not already have.

**The precise sense of "repeat."** It is not a claim that perturbed runs are useless. It is the figure's sense: composition inside a closed set never leaves it (Fig 8 :32), so a search at fixed reach visits more of the same space. What is repeated is the atom set and the wall, not necessarily the numerical output.

## 4. Correlation is the hidden substance

Two ensembles over the same member set can have the same list and the same marginal spread and still be different substances: independent errors versus a shared cause. Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :117: *"isomer. Same atoms, different bond, different substance."* The dependency structure is therefore part of the object that must be reported, not a nuisance detail. Survey statistics prices it as `n_eff = n / Deff` with `Deff = 1 + (n* - 1) rho`; reliability engineering prices it as a beta factor that puts a floor under system failure. Both say a correlated ensemble is fewer frames wearing more names. `06_isomers_and_order.md` carries the derivation and its falsifier.

## 5. What it explicitly does not say

- Not a universal dispersion value, member count, correlation coefficient, or skill threshold. No figure returns one (Fig 9 :32, Fig 13 :134).
- Not that multi-model ensembles are always better than single-model ensembles. A multi-model collection can share one closure.
- Not that perturbed-parameter ensembles are useless. They are search at fixed reach, which has its own legitimate uses; they just do not add structural uncertainty.
- Not the name of the missing assumption in a particular forecast problem. Naming it would mean already holding it (Fig 13 :134-135). What is owed is a shape and an instrument.
- Not that a smaller spread is more reliable. Underdispersion is a documented failure; spread must be ranged against observations (Fig 1 :27).
- Not `grounded`. No measurement here settles any of the four conditions for a specific forecast system.

## 6. What would settle it

A ground reading, not agreement (Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*). The discriminating tests are:

1. **Dependence diagnostic.** Measure member dependence or shared ancestry and show that verification skill is not predicted by member count after conditioning on it. This would fire F2 and settle the first condition at the ground.
2. **Reach test.** Exhibit a member whose perturbation changes the set of representable outcomes rather than reweighting one representation, and show the ground pays for the change. If it pays, the third column of F3 falls; if no such member exists at a given budget, the structural-uncertainty claim for that system is `unreachable`, not silence.
3. **Source discriminator.** An instrument that distinguishes which assumption change produced a change in outcome, where several changes produce the same spread. This is the spectrometer move from *The Hard Problem is About Source*: an instrument that can read the source, not an argument about the reading.
4. **Held-out verification.** Each member ranged separately against observations that did not enter its calibration, with a non-updating target. Reliability is checked here, not by internal agreement.
5. **Refusal test.** Vary the decision threshold and show the use rule is checkable and refusable; if it is not, D4 fails.

Standing falsifiers from `01` §4: spread predicts settlement without observations; member count predicts skill after conditioning on dependence; perturbation adds an atom; a structural difference changes predictions with no provenance owed; the bond is redundant for fixed members; verification changes under the ensemble's own probabilities and agreement still settles the question.

## 7. The honest stop

**Unreached, not answered.** The separator says what an ensemble must be like before its spread can be called genuine uncertainty. It does not say how much spread is enough, which model family is missing, or whether a given operational system passes. Those are ground questions. The framework stops where its instruments can no longer distinguish sources, and records the lineage so the stop is checkable. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 13 :134: *"Unreachable is a verdict here, not a silence."* Indiscernibility is not identity.

## 8. One-paragraph version for outreach

> An ensemble captures genuine uncertainty only when four conditions hold together: its members draw on different evidence, the variation changes what the models can represent rather than only reweighting one model, each member is checked separately against an observation that does not update on the ensemble's own output, and the rule for using the spread stays refusable. When members are perturbations of one model family, or different models with a shared ancestry and the same calibration data, the ensemble is one frame wearing many names and its spread repeats the structural assumptions. The hidden substance is the dependence structure: two ensembles with the same member list can be different things if one has independent errors and the other a shared cause. The framework does not give a magic spread value or name the missing scheme; it gives the shape any answer must have, the falsifiers written in advance, and the instruments that would close the question. The threshold stays open until the ground settles it.
