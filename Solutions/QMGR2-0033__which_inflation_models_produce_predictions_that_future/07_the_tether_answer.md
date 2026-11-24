# The Tether's answer: which inflation models produce distinguishable predictions?

**Mode: `specified` on the structural verdict, `general` on the shape, `gap` on the specific model list. Not `grounded`.** This is a simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground reading.

## 1. The residual it answers

We hold a family of inflation models, each predicting a vector over observable slots (`n_s`, `r`, `alpha_s`, `beta_s`, `f_NL`, `n_t`, features), and a ground, the sky as measured by CMB experiments. The question asks for a partition of the model family, not a winner. Its residual is `R(m, s) = |Gamma(m, s) - o'(s)|`, indexed by model and slot. The bound answer-shape, written down before the run, is **distinguishability class**: two models are in different classes if and only if, for a named instrument I, their predicted distributions differ by more than I's resolution on at least one slot. Without I, nothing is predicted.

## 2. The shape, with verbatim figures

1. **Keep the residual per model and per slot. Never average.** Fig 1 :19: "The residual is indexed by object slot, not aggregated." A single "inflation fits the data" statistic destroys exactly the signal the question asks for.
2. **The sky is the anchor; models range against it separately.** Fig 2 :45: "Frames range against the ground. They do not negotiate with it." A Bayesian evidence ranking is a frame that scores models with a quantity it computes, not the ground. Model consensus is not corroboration.
3. **Models whose predictions coincide at I form one distinguishable class at I.** Fig 8 :49: "Two frames that overlap almost completely are one frame wearing two names." Keep their separate provenance in the model lineage, but do not count them as two witnesses at that instrument. Where two mechanisms converge independently, Fig 8 treats the convergence as corroboration at maximum independence, not as shared-evidence collapse; that does not make them separable by the instrument.
4. **Reach and separation are a union compound, not one question.** Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." A better `r` measurement clears the monomial models and leaves the plateau cluster standing; single levers clear only the region where one condition binds.
5. **Instruments are sharpened versions of older readings; inward and outward are separate tracks.** Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 6 :31: "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other." Sharpening `n_s` precision is one track; importing `f_NL`, features or isocurvature is another.
6. **Within a fixed atom set, models are isomers or functional-group members, and the atom set must be declared.** Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Across slow-roll models they share a functional group; across different atom sets neither term applies.
7. **The framework returns the criterion, not the model list.** Fig 9 :32: "you get a kind of thing, never the answer itself." The list of which models LiteBIRD will separate is an import from cosmology with provenance, not a figure derivation.
8. **No separation found is a verdict conditional on the instruments.** Fig 8 :39: "So a search that finds nothing is never a proof of absence." Say "unreachable at this instrument", not "unreachable in principle". Importing a new atom against a budget limit adds something unneeded.
9. **Measure the round-trip gap on any headline.** Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." A claim like "LiteBIRD rules out large-field inflation" drops reheating uncertainty, foreground assumptions, and the class-versus-member distinction.

## 3. Verdicts per domain, kept separate

| domain | verdict | status |
|---|---|---|
| A, candidate model family | Not a free-standing domain: no nameable anchor. It is the set of frames to be ranged. Treating it as self-validating is the Fig 2 collapse. | structural finding |
| B, observational ground | The sky settles the question and does not move when models change. | `triangulated` (Fig 2 plus Symbols table) |
| C, resolution and comparison | Union compound; overlap collapse law holds; inward and outward tracks distinct. Isomer classification valid only within a declared atom set. | `triangulated` for collapse and union; `single-source` for the isomer definition; `gap` for the specific model list |

These verdicts are not averaged. A `triangulated` structural verdict does not promote the specific model list to `grounded`.

## 4. What it explicitly does not say

- Not a winner. No inflation model is asserted to be correct, and no Bayesian evidence ranking is treated as the ground.
- Not a proof that inflation happened. The shape assumes a model family and a set of observable slots; it does not derive either from the six-term substrate.
- Not a fixed instrument list. CMB-S4 is out of the live set per its own 2025-07-09 statement; any schedule must be rebuilt around LiteBIRD, Simons Observatory, or whatever is actually funded.
- Not one observable lever. `r` alone does not clear the plateau intersections.
- Not `grounded`. No measurement at LiteBIRD or Simons Observatory has been taken.
- Not a derivation of `n_s`, `r` or an inflaton potential from the six terms. Those are imports with provenance.

## 5. What would settle it, and the pre-registered refuter

The ground settles it: observations, not agreement. The shape claim is refuted if any of the following holds (written before the run):

1. Two models with identical predicted distributions on every slot at a stated resolution are nevertheless separated by a correctly calibrated instrument (breaks point 3).
2. A correct distinguishability decision is obtained from a single aggregated fit statistic with no per-model, per-slot residual (breaks point 1).
3. The ground value moves when the model changes, so the anchor updates (breaks point 2).
4. A future instrument separates a pair the criterion declared indistinguishable at that instrument (the ground reverses the verdict).
5. A distinguishability claim is delivered with no instrument and no resolution and then defended as a result (breaks the mode rule).
6. A signed, parity-odd observable makes "A distinguishable from B" differ from "B distinguishable from A" when the criterion was stated as symmetric (breaks Q2 of `06_isomers_and_order.md`).

Concretely, the sky settles the specific list when LiteBIRD returns either a detection of primordial B-modes at `r` above about 0.01, separating the monomial class from the plateau class, or an upper limit near `r < 0.002`, which would leave the plateau cluster as one distinguishable class at that instrument. A second discriminator (`f_NL`, features, isocurvature, a stochastic gravitational-wave background) would be needed to split that cluster.

## 6. The honest stop

**Unreached, not unreachable.** The imported observable slots are a visible guess: "Declaring the primitives does not make them neutral. It makes the choice visible." Another instrument with another sensorium might carve the model space differently, and the six-term substrate does not certify `n_s` and `r` as nature's own axes. The answer stops at the limit of the available instruments and records the lineage so the stop is checkable. "Indiscernibility is not identity." Prestige or consensus is not a discriminator: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action."

## 7. One-paragraph version for outreach

> The Tether does not name the winning inflation model, and it does not claim that the models future observations can distinguish are fixed once and for all. It says that the residual has to be kept per model and per observable slot, so an averaged "inflation fits the data" number cannot answer the question; that models whose predictions coincide at a stated instrument form one distinguishable class at that instrument, whatever their microscopic differences; that being in reach of an instrument and being separated from a neighbour are two conditions that must be unbundled; and that sharpening `n_s` and `r` is a different track from adding non-Gaussianity, features or isocurvature, so the two must not be read against one another. The figure returns that criterion and its refuter. It does not return the model list: that is imported from cosmology with provenance, and it waits for the sky to settle it. If LiteBIRD detects B-modes above about 0.01, the monomial class separates from the plateau class; if it returns an upper limit near 0.002, the plateau cluster remains one class at that instrument, and a second observable will be needed to split it. Until an observation arrives, the verdict is `specified`, ungrounded, and open.
