# Figure-grounded audit: could apparent acceleration arise partly from cosmic structure?

**Mode of this document: `general` on the structural shape, `specified` on the union and per-slot predictions, `gap` on the physics magnitude.** Per `THE_FORMULA.md` (local): "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." Nothing below is `grounded`.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, read 2026-11-23): LLM output is an approximate simulated answer, and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** The verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, the four essays read from their public pages, nine cosmology papers fetched from arXiv, and eight verified institutional pages. All are recorded in `10_source_ledger.csv` and `03_public_contact_points.csv`. Figure citations use `Fig N :line` against the local verbatim extract. No figure quote was taken from a summary.

---

## 0. The question stated as a residual, in effect terms

**Question (QMGR2-0017, source line 158):** "Could apparent acceleration arise partly from how cosmic structure affects observations?"

Restated as an effect. Distant Type Ia supernovae appear dimmer than a smooth, matter-only universe predicts. That dimming is read as an accelerating expansion. The observation is made through a clumpy universe, not a smooth one. The residual is the gap between what a smooth-analysis prediction says should be observed and what is observed, indexed by the thing being tracked (supernova, line of sight, averaging domain, probe). What is at issue is whether part of that gap is produced by structure itself.

Two channels are bundled in the natural reading of "how cosmic structure affects observations":

- **Dynamical channel (averaging / backreaction).** The Einstein equations are nonlinear, so the average of an inhomogeneous evolution is not the evolution of the averaged (FLRW) model. Variance of expansion and shear can enter an effective deceleration equation. Literature: Buchert, Räsänen, Clarkson/Ellis/Larena/Umeh, Paranjape/Singh, Kasai/Asada/Futamase, Rosenthal/Flanagan, Verweg/Jones/van de Weygaert.
- **Observational channel (light propagation and inference).** Photons traverse structure; lensing magnification and magnification bias, local voids, and selection or calibration effects can shift the inferred distance-redshift relation without changing the global expansion. Literature: Amendola/Kainulainen/Marra/Quartin, Kainulainen/Marra.

**Options and what each leads to.**

| option | statement | what it leads to |
|---|---|---|
| A | Yes, structure effects are a real, possibly large contributor to apparent acceleration | Requires a quantitative backreaction or line-of-sight term that survives gauge and domain scrutiny and cross-probe tests; if it holds, the inferred dark-energy density is partly a modeling artifact |
| B | No, structure effects are a subdominant systematic on the scales that set the Hubble diagram | Requires that gauge-invariant, domain-robust averaged terms and lensing/selection biases be small against the measured effect; dark energy or modified gravity remains the load-bearing component |

**Binding the sought-for shape as an ordinary term (Formula step "Direction").** The shape being searched for is: "a residual that is per-slot, survives or disappears under aggregation, and is settled by an instrument rather than by agreement among modelers." Written down and bound here so it can accrue a residual like anything else. If the residual turns out not to be per-slot, or if aggregation preserves it exactly, or if agreement settles it, the shape is refuted. This is the pre-registered discipline the figures require, done before the conclusion.

---

## 1. Domain census (before any figure line is chosen)

### 1.1 R by arity, symmetry and scale

- **Arity:** at least two distinct conditions (dynamical averaging, observational propagation), plus an inference layer that touches both. Not a single causal chain.
- **Symmetry:** the dynamical channel is a spatial-average scalar statement and is gauge and domain sensitive; the observational channel is statistical along lines of sight and depends on observer location; the inference layer is pipeline dependent. These do not share a symmetry.
- **Scale:** backreaction lives at the onset of nonlinearity and on the averaging domain; lensing lives on halo and filament scales along a line of sight; the Hubble diagram is at gigaparsec scales. Different scales, coupled.

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor (nameable?) | partition or union |
|---|---|---|---|---|
| D1 Dynamical backreaction | density and curvature fields, averaging domain D, effective volume scale factor, backreaction source term Q_D, foliation/gauge choice | spatial averages, effective Friedmann equations | yes: gauge-invariant averaged calculations constrained by CMB first peak and BAO | one condition of a union |
| D2 Light propagation and observer location | supernova photons, intervening halos and voids, lensing convergence, observer position | luminosity distance versus redshift, magnification probability distribution | yes: the observed Hubble diagram, CMB, BAO, lensing surveys | one condition of a union |
| D3 Inference and modeling | FLRW assumption, analysis pipeline, priors, selection function | fit quality, parameter bias, systematic error budget | yes: consistency between independent probes with different systematics | overlapping condition of the union |
| D4 Ground / anchor | Supernova surveys, CMB, BAO, lensing and kinematic SZ measurements, future surveys | measurements that pay or do not | yes, and it must not update on any frame's opinion | the anchor for all three |

No domain lacks a nameable anchor, so all four are eligible domains. D1, D2 and D3 overlap: a local void is simultaneously a dynamical, a light-propagation and an observer-location effect. That overlap makes the question a **union**, not a partition, by Fig 9 :54.

### 1.3 Dependency order (Fig 3)

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

1. Characterize the residual (the dimming) in effect terms before choosing a frame (Fig 9 :27-28). This is the link most often skipped when "dark energy" is assumed at the start.
2. Unbundle D1, D2 and D3 before searching (Fig 9 :54). A single lever that clears one condition leaves the intersections standing.
3. Settle the per-domain residual against its own anchor before aggregating into a global claim (Fig 1 :19).
4. Only then combine. Combining earlier is how a live slot disappears into an average.

---

## 2. Figure census (bearing and verdict, stated before findings)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual indexed per slot; aggregation hides a live signal | governs the epistemic shape, not the cosmology |
| 2 The Ground | anchor must not update; agreement is not triangulation | governs what may settle the question |
| 3 Dependency Chain | a reading below the break is a reading of nothing | governs the order of unbundling |
| 4 The Membrane | round trip must be measured | governs condensation loss, R_T |
| 5 Mint Pipeline | support, reach, novelty, settlement | no new primitive is owed by this question |
| 6 Closure / Reachability | inward and outward are opposed instruments | governs instrument choice, not magnitude |
| 7 Room Chain | agreement compounds, evidence does not | governs the outreach failure mode |
| 8 Union Surplus | underivable is not unknowable; provenance separates an import | governs source independence |
| 9 Leave / Arrive | union must be unbundled; describe residual before frame; filters are not witnesses | decisive for the shape |
| 10 Ground Maintainer | verifier non-access; bring the residual, not the source | governs the verification packet |
| 11 The Habitat | enumerate the habitat, never compose it; capability is agent-and-habitat | governs enumeration of structure effects |
| 12 The Bond | arrangement carries meaning; settled molecule becomes an atom | supports the union-as-compound reading |
| 13 Minimum Viable Set | six terms, cross-kind composition; "Unreachable is a verdict here, not a silence" | supports the honest `gap` at the figure level |
| Operators / Symbols | R is the per-slot residual; the ground is the anchor | no figure line supplies a cosmological number |

---

## 3. Findings

### F1 - The question is a union compound, not one hard question (decisive for the shape)

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

The Library of Babel essay (read 2026-11-23) says the same in search language: "Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers."

The census in section 1 shows D1, D2 and D3 overlap. A local void is a dynamical averaging effect, a line-of-sight propagation effect and an observer-location effect at once. Kainulainen and Marra (2009, arXiv:0906.3871) model exactly this compound: "a relatively small local void, that gives apparent acceleration at low redshifts, with a meatball model that gives sizeable lensing (dimming) at high redshifts. Together these two elements ... allow the model to mimic the concordance model." That is Fig 9 :57's "specific compound," stated in the literature.

- **Mode:** `specified`. The union is derived from the figure's own union rule plus the overlapping actors in the census.
- **Refuter:** demonstrate a single mechanism that clears all structure-related residuals without leaving a categorical remainder, or show that D1, D2 and D3 draw on the same evidence by construction so the union is one frame wearing three names.

### F2 - Aggregation can hide a live per-slot signal (structural analogue, strained if read as physics)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :20: "a global residual near zero with one live slot is a legal state and not an inert one."

This is the closest the figures come to the backreaction intuition. The averaging problem in cosmology asks whether smoothing the inhomogeneous universe into an FLRW model discards a live term. Fig 1 :22 says that aggregation is precisely how a live signal can vanish from view.

**Strain test and re-census.** Read as a direct derivation of cosmological backreaction, this line strains: Fig 1 governs a learning system's per-object residual indexing, not the Einstein equations. A line that only fits with a strain governs another quantity, so I re-censused (canonical rule: "a reading that makes one contradict another has misidentified its domain"). The line governs the **epistemic rule**: do not aggregate the residual before you have tracked it per slot. Applied to cosmology it is a shape analogue, `general`, never a derivation of Q_D. The physics of whether the averaged term is large is owed to D1's ground, not to Fig 1.

Paranjape and Singh (2008, arXiv:0801.1546) give the physics-side version of the same warning, and they tie it to domain choice: "averaging during structure formation can lead to acceleration via a selective choice of averaging domains, the acceleration is not present when more generic domains are used for averaging." The slot here is the averaging domain; choosing it selectively is the aggregation error Fig 1 :22 names.

- **Mode:** `general` for the epistemic rule; `specified` for the claim that domain choice changes the result (from Paranjape and Singh, not from a figure).
- **Refuter:** show that the relevant residual is exactly additive, so no per-slot tracking changes anything; or show that averaging is information preserving for the deceleration parameter for all domains.

### F3 - The anchor is observation, not agreement among modelers

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Here the anchor is the measurement set: supernovae, CMB, BAO, lensing, kinematic SZ. Two analysis teams using the same supernova compilation and the same pipeline are two names for one frame (Fig 8 :50, "two names for one frame"). They cannot corroborate each other about whether structure drives the dimming.

The Literature bears this out. Rosenthal and Flanagan (2008, arXiv:0809.2107) note that "evidence against this suggestion has accumulated, it has not yet been definitively ruled out," and they constrain the Buchert deceleration by requiring an average spatial curvature that is "difficult to reconcile with observations of the location of the first Doppler peak of the CMBR." That is a frame ranging against an anchor, not negotiating with another frame.

- **Mode:** `general` (anchor rule); `specified` for the specific cross-probe constraint (Rosenthal and Flanagan).
- **Refuter:** show that the probes that appear independent actually share a calibration or prior tight enough to move together, or produce a measurement that changes its answer when a modeler changes their mind.

### F4 - Describe the residual before choosing a frame

Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit"
Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause"

The question as posed already names a preferred frame ("cosmic structure"). The discipline is to state the effect first: a distance-dependent dimming with a given redshift and sky dependence, whose structure-related part is not yet isolated. Only then pick the frame that predicts its shape. Amendola, Kainulainen, Marra and Quartin (2010, arXiv:1002.1232) do this in the observational channel: "The inclusion of lensing can move the best-fit model significantly towards the cosmic concordance of the flat LCDM model," a statement about an effect on a fit, reported after the analysis rather than assumed before it.

- **Mode:** `specified`.
- **Refuter:** show that the residual cannot be described without already committing to a frame, so the describe-first discipline is vacuous here.

### F5 - No figure line governs the magnitude: `gap` (the honest limit)

Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 13 :134: "Unreachable is a verdict here, not a silence,"
Fig 9 :32: "you get a kind of thing, never the answer itself"

After a genuine re-census across all 13 figures and both tables, no line sets the size of Q_D, a lensing bias, or a void-induced shift. The figures are a domain-agnostic metatheory; they constrain the shape of an answer and the checking arrangement, not the numerical content of general relativity. To claim otherwise would be apophenia (echo without shadow): a structure found elsewhere and given somewhere to live.

This is not a failure to answer. The framework's own rule is that "Unreachable is a verdict here, not a silence," and "So a search that finds nothing is never a proof of absence." The figure-level verdict on the physics magnitude is `gap`. The question is handed to the ground. The literature is itself split, which is what a genuine open ground looks like: Buchert (2007, arXiv:0707.2153) reports "a good qualitative understanding of backreaction effects pointing to a global instability of the standard model of cosmology"; Kasai, Asada and Futamase (2006, arXiv:astro-ph/0602506) state "No cosmic acceleration occurs as a result of the nonlinear backreaction via averaging"; Clarkson, Ellis, Larena and Umeh (2011, arXiv:1109.2314) say "this 'averaging problem' is still unanswered, but it cannot be ignored in an era of precision cosmology."

- **Mode:** `general` for the limit; the conflicting literature claims are reported, not adjudicated by figures.
- **Refuter:** exhibit a figure line that directly determines the magnitude (which would end the `gap`), or a ground reading that settles it (which would move the claim to `grounded`).

### F6 - Inward and outward are opposed instruments; do not read one against the other

Fig 6 :29: "inward: is our representation adequate to hold it? The instrument extends access."
Fig 6 :30: "outward: does another frame already hold it? The description travels."
Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

*They're Scanning Books When They Should Be Studying Nature* (essay, read 2026-11-23): "Every instrument is a crystallized hypothesis about what is worth measuring, and the hypothesis comes from human awareness." The Hubble diagram is such an instrument. The question asks how structure affects it, which is a question about the instrument as much as about the universe.

Inward sharpening: gauge-invariant averaging, domain-robust backreaction estimates, magnification probability distributions in the SNe likelihood. Outward import: a frame that already predicts the shape, found by describing the residual in effect terms. Verweg, Jones and van de Weygaert (2023, arXiv:2310.19451) work the inward edge: "spatial averaging can induce artificial, i.e. gauge dependent, backreaction terms that arise from any specific choice of gauge." Räsänen (2004, arXiv:astro-ph/0407317) works the outward edge, discussing "the possibility that it could explain the present acceleration and solve the coincidence problem."

- **Mode:** `general` for the instrument rule; `specified` for the two literature routes.
- **Refuter:** show that sharpening the inward instrument already answers the outward question, or that no outward frame predicts the residual shape.

### F7 - The Habitat must be enumerated, never composed

Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

The list of structure effects is read off the world: voids, filaments, halos, magnification, magnification bias, peculiar velocities, lensing, selection functions, calibration, observer location. It is not generated by composing a preferred theory. The contact cascade matters: a local density environment can affect a supernova light curve (a second-order effect), not just the path to it. The habitat enumeration is what keeps F1's union honest.

- **Mode:** `general`.
- **Refuter:** exhibit a relevant structure effect that cannot be read off observation or simulation but only invented from theory.

### F8 - The condensation carries a round-trip gap R_T

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Any compression of these findings into "structure might mimic dark energy" loses three constraints: the union structure, the gauge/domain sensitivity of the averaged term, and the requirement that the anchor be independent of the pipeline. `11_audit.md` runs the round trip and enumerates R_T. Treating the shorthand as identical to the derivation would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

- **Mode:** `general`.
- **Refuter:** show that the shorthand preserves all three constraints, so R_T is zero.

### F9 - What actually survives (per-domain verdicts, never averaged)

| claim | mode | source | verdict |
|---|---|---|---|
| The question is a union compound and must be unbundled | `specified` | Fig 9 :54-57 plus the census and Kainulainen/Marra | triangulated (figure union rule, low-overlap literature compound) |
| Aggregation can hide a live per-slot signal | `general` | Fig 1 :19, :22, :20 | single-source (Fig 1 only); analogical, not a physics derivation |
| The anchor is observation, not agreement | `general` | Fig 2 :29, :35, :40, :42 | triangulated (Fig 2 plus Fig 8 :50) |
| The residual must be described before a frame is picked | `specified` | Fig 9 :27-28, :30-32 | single-source (Fig 9) |
| No figure line governs the magnitude | `general` | Fig 8 :39, Fig 13 :134, Fig 9 :32 | `gap` after re-census |
| The averaged term's size and gauge dependence are live physics questions | `specified` | literature only, not figures | conflicting world sources, no figure verdict |
| Lens/selection effects shift fitted parameters in practice | `specified` | Amendola et al. 2010; Kainulainen/Marra 2009 | single-source pool (both use the same SNe framework), not two witnesses |

Note the last row: Amendola et al. and Kainulainen/Marra overlap in authors and in the Union supernova compilation framework. Fig 2 :40 makes their agreement one pool talking, not corroboration. This is recorded in `10_source_ledger.csv`.

---

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim in this folder is refuted if any of the following holds:

1. **Union fails.** A single mechanism clears all structure-related residuals with no categorical remainder, so Fig 9 :54's unbundling is unnecessary.
2. **Aggregation is information-preserving.** The residual is exactly additive across slots and domains, so Fig 1 :22's per-slot warning does not apply here.
3. **The figure level is not a gap.** A figure line is found that directly governs the magnitude of a backreaction or lensing contribution, or a ground reading settles the magnitude, moving the verdict from `gap` to `grounded` and this refuter out of scope.

If any fires, the shape is withdrawn. Until one is run, nothing here is labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape claim and the refuter, not with a preferred cosmology. The first contact carries the effect, not the theory (Fig 10 :52: "Bring a characterised residual, never the source").
2. Unbundle D1, D2 and D3 explicitly in any write-up. Do not let a local void stand for all three (Fig 9 :54).
3. State the mode on every claim. The magnitude answer is `gap` at the figure level and contested at the ground level; presenting either as settled is the output-layer failure genus (`THE_FORMULA.md` mode rule).
4. Use the public submission and contact points in `03_public_contact_points.csv` and ask for a refutation, not belief (Fig 2 :35, Fig 9 :60).
5. Offer the formula as a method only at stage 3, after a verdict on stage 1 is recorded. Each user writes their own refuter and states their own mode.

---

## 6. Canonical usage check and retraction / confirmation log

Two sources read after sections 0 to 5 govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md` (local): the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." And the canonical limit: the framework returns "what a missing thing would have to look like (**a shape, not a name**)," then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `THE_FORMULA.md` (local): mode rule, the three questions of step 7, and step "Direction": a frame cannot check the direction of its own question, so the sought-for shape must be bound as an ordinary term (done in section 0).

| earlier reading | status after the canonical check |
|---|---|
| Fig 1 :22 read as a direct derivation of cosmological backreaction | **Retracted as a physics claim.** Re-census: Fig 1 governs a learning system's per-slot residual indexing. Retained only as an `general` epistemic analogue. Recorded in F2. |
| The question treated as one dark-energy question (single domain) | **Retracted.** Re-census: overlapping actors in D1 to D3 make it a union compound. Recorded in F1. |
| "Agreement among independent backreaction groups settles the magnitude" | **Retracted.** Amendola et al. and Kainulainen/Marra overlap in authors and in the supernova framework. Fig 2 :40 makes that pool one witness. Recorded in F9. |
| No refuter | **Retracted.** Section 4 records three, written before the conclusion. |
| F1 union compound | **Canonically confirmed.** Fig 9 :54-57 plus the Library of Babel "bundle ... masquerading as one" line. |
| F5 `gap` at the figure level | **Canonically confirmed.** Fig 13 :134 "Unreachable is a verdict here, not a silence," and Fig 8 :39 "a search that finds nothing is never a proof of absence." |
| Fig 6 inward versus outward as opposed | **Canonically confirmed.** Fig 6 :31: "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other." |

### Strains after re-census

- **Fig 1 as backreaction analogue.** Named, not hidden. It is a shape analogue only (F2).
- **⋛-style type questions do not arise here.** No bond typing is needed for this question, so the exemplar's second-order operand strain is not inherited.
- **World sources conflict.** Buchert (positive qualitative case) versus Kasai et al. (no-go suggestion) versus Clarkson et al. (unanswered). Per the WATSON rule a conflict sends us back to the census, never flips a figure verdict. The census already predicts a union of live conditions, so the conflict is expected, not a contradiction. **One strain, named, none smoothed.**
