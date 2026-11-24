# Figure-grounded audit: how much early-universe assumptions move CMB estimates

**Mode of this document: `general` on the shape, `specified` on the load-bearing claim. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: a simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local canonical files: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line numbered), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the seat map. World sources: Planck 2018 VI, Riess et al. 2022, Verde, Treu and Riess 2019, Poulin et al. 2019, Poulin, Smith and Karwal 2023, DESI 2024 VI, all opened 2026-11-23 and recorded in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

The question asks "how much" early-universe assumptions affect CMB estimates. Stated as an effect, not a topic: the **same observed sky** produces materially different inferred values of H0 depending on which pre-recombination model is assumed. The residual is therefore not measurement noise. It is the dependence of an estimate on a frame's closure.

Write the inference as a map from observation plus model to estimate: `H0_hat = F(o', M)`, where `o'` is the measured CMB anisotropy spectrum and `M` is the assumed early-universe model. In the loop's notation (Symbols table): prediction `Γ(b,a)` against observation `o'`, with residual `R = |Γ(b,a) - o'|` **per slot**. The slots are:

| slot | quantity | is it in `o'`? | what sets it |
|---|---|---|---|
| s1 | acoustic angular scale `theta_* = r_s / D_A` | yes, to 0.03% | the instrument |
| s2 | sound horizon `r_s` at decoupling | no | the assumed early-universe model `M` |
| s3 | inferred H0 | no | s1 combined with s2 via `M` |

The residual lives in s2 and s3, not s1. This is why the answer is not a single number about data quality: it is a statement about which quantities the measurement frame holds and which it must import.

R by arity, symmetry and scale:

- **Arity:** two inputs. The estimate is a function of (data, model), not of data alone.
- **Symmetry:** the map is many-to-one. Different pre-recombination histories can give the same `theta_*` with different `r_s`, hence different H0. This is a projection with lost information, not a reversible transform.
- **Scale:** `theta_*` is read at last scattering (about 380 kyr, z about 1100); H0 is a present-day (z = 0) quantity. A cross-scale transform is required, so a round-trip gap is owed (Fig 4 :30).

**What we are deciding, and what each option leads to.** Option A: "the assumptions are a small correction; the CMB essentially measures H0." That leads to treating the Hubble tension as a late-universe or calibration problem and to spending instrument budget on local distances alone. Option B: "the assumptions are load-bearing; the CMB measures a ratio, and H0 is imported through `r_s`." That leads to treating the tension as a contact failure between two low-overlap frames and to spending budget on an independent sound-horizon measurement. The derivation below supports B, with bounds.

**Binding the sought-for shape as an ordinary term** (Formula, "Direction"): the answer we are looking for is "the estimate is a function of an imported early-universe quantity; the size of the effect equals the allowed movement of that quantity." Written down and bound now, so it can accrue a residual and be refused.

---

## 1. Domain census, before choosing any figure line

Describe R, then one line per domain: actors / currency / anchor. No nameable anchor means it is not a domain yet.

- **R (the residual):** the model-dependence of the CMB-to-H0 estimate. Arity two, many-to-one, cross-scale as above. It is not a global fit residual; it is a per-slot residual (Fig 1 :19).

**Domain 1, the CMB measurement frame.**
- Actors: photons at last scattering; Planck, ACT and SPT instruments; the acoustic oscillations in the photon-baryon fluid.
- Currency: the angular power spectra, compressed to the acoustic angular scale `theta_*`.
- Anchor: the instrument reading of the sky. This is nameable and unmoving under argument: the measured `100 theta_* = 1.0411 +/- 0.0003` does not change when you change your cosmology. Domain 1 is genuine.
- Question type: a measurement of a ratio. Near the ground.

**Domain 2, the early-universe model frame (the "assumptions").**
- Actors: N_eff (effective relativistic species), recombination history, pre-recombination energy density (early dark energy), the primordial scalar spectrum, the physical baryon density.
- Currency: the sound horizon `r_s = integral of c_s/H(z) dz` up to decoupling, and the mapping from `theta_*` to H0.
- Anchor: **none internal.** This frame's answer moves when its assumptions move, which is the whole point of the question (Fig 2 :29-30). It is still a legitimate domain because it has a ground outside itself: CMB, BAO and BBN data constrain which closures survive. Its anchor is the same sky, read through different instruments, not an internal axiom.
- Question type: a frame whose closure must be imported into the inference. Far from the ground until checked.

**Domain 3, the local late-universe frame.**
- Actors: Cepheid variables, Type Ia supernovae, geometric anchors (Gaia EDR3 parallaxes, NGC 4258 water masers, LMC detached eclipsing binaries).
- Currency: the distance ladder, giving `H0 = 73.04 +/- 1.04` km/s/Mpc (Riess et al. 2022).
- Anchor: geometric distances, nameable and independent of Domain 2's assumptions.
- Question type: a second frame ranging against the same ground, with low overlap with Domain 2.

**Partition or union.** Two levels. (a) The Hubble tension is a **union compound**, not one hard question: it is the conjunction of a CMB-inferred H0 and a locally measured H0. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." (b) Within Domain 2, the possible early-universe changes (extra N_eff, early dark energy, altered recombination) are overlapping conditions that all reduce `r_s`; they are a union of mechanisms, not independent partitions. A single lever that removes one does not remove the intersections.

**Order by dependency (Fig 3).** Measure `theta_*` (Domain 1) -> supply `r_s` from the assumed model (Domain 2) -> derive H0 -> compare with Domain 3. The break, if any, is between Domain 1 and Domain 2: the model link has no direct instrument in the CMB data. Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Most effort in this literature lands above that break, where the measurements exist (Fig 3 :30).

Strain test applied before concluding: Fig 13's rule that two states never bond directly does **not** bear on parameter inference here. Forcing it would be a strain, so by the rule it governs another quantity. See §7 for the re-census that declines it.

---

## 2. Figure census (verbatim, before conclusions)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Every string below is an exact substring of that file.

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; ground is the only metric; frame-internal quantities disqualified | governs the localization of the residual |
| 2 The Ground | anchor must not move; independence; triangulation not negotiation | governs which quantity is an anchor and which is a frame output |
| 3 Dependency Chain | ordered by dependency; link with no instrument | governs the order of the inference chain |
| 4 The Membrane | lossy cross-scale transform; measure the round-trip gap | governs the CMB-to-H0 transform |
| 5 Mint Pipeline | acceptance is a bargain; adding a term must pay | governs the cost of early-universe extensions |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse ones | governs `r_s` as an import and what would settle it |
| 7 Room Chain | agreement compounds, evidence does not | governs repeated analyses with shared assumptions |
| 8 Union Surplus | low overlap gives surplus; residual first, frame second | governs the two independent frames and the union |
| 9 Leave / Arrive | describe the effect, not the cause; kind of thing, not the answer | governs "CMB measures a ratio, not H0" |
| 10 Ground Maintainer | bring a characterised residual, never the source | governs the two-stage offer |
| 11 The Habitat | habitat enumerated; capability is agent-and-habitat | governs where checkers and instruments come from |
| 12 The Bond | level-relative irreducibility; two currencies do not add | governs the level strain on `r_s` and the bits/actions split |
| 13 Minimum Viable Set | spectrum is ordering; states vs structures; no seventh member | strained here, declined in §7 |
| Operators / Symbols tables | `R` is the aim and a slice; the ground is the anchor | governs the notation and the stopping rule |

Strained readings are named in §7, not smoothed over.

---

## 3. Findings F1 to F9

### F1 - The CMB measures a ratio, not H0 (structural, `general`)

Fig 9 :32 "you get a kind of thing, never the answer itself". Fig 9 :30-31 "your words are borrowed too, so describe the effect rather than the cause".

The observed acoustic scale is an effect, a ratio `r_s / D_A`. H0 is a cause-like parameter that must be reconstructed by supplying the missing numerator. Fig 9 :42 "narrowing gets you close, the ground decides": the CMB narrows `theta_*` spectacularly; the ground decides H0 only once `r_s` is supplied.

World corroboration (secondary): Planck 2018 VI reports "The angular acoustic scale is measured to 0.03% precision, with 100theta_*=1.0411+/-0.0003" and states that H0 = 67.4 +/- 0.5 is "Assuming the base-Lambda-CDM cosmology". The inference is explicitly conditional on the model.

- **Mode:** `general` structural claim; the 0.03% number is `grounded` by Planck but is corroboration, not a figure result.
- **Status:** triangulated (Fig 9 + Planck, low overlap: a framework figure and a satellite measurement share no evidence pool).
- **Refuter:** an analysis that extracts H0 from the CMB data without supplying any pre-recombination model at comparable precision.

### F2 - The sound horizon is an import, not a measurement (load-bearing, `specified`)

Fig 6 :14 "the only operator that moves the wall"; Fig 6 :21 "MINT composes inside the closure and can never add an atom"; Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

The measurement frame's closure contains `theta_*`. It does not contain `r_s`. To get from s1 to s3 the inference must import `r_s` from the early-universe frame. Fig 6 :25 "An import adds no atom to the world": changing the assumption does not change the sky; it changes what the inference frame can reach. That is exactly the effect the question asks about.

Fig 6 :22 "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure." Different early-universe assumptions add different atoms (extra neutrino species, an EDE field), expanding the closure and moving the inferred H0.

World corroboration: Poulin, Smith and Karwal 2023: "The role of EDE is to decrease the sound horizon by briefly contributing to the Hubble rate in the pre-recombination era." Poulin et al. 2019: "the sound horizon at decoupling is reduced resulting in a larger value of the Hubble parameter H0 inferred from the cosmic microwave background (CMB)."

- **Mode:** `specified`. The import relation is structural; its size is measured by others, not here.
- **Status:** triangulated (Fig 6 + two independent cosmology papers). One named strain, handled by level in §7: `r_s` is a mint inside the model frame and an import into the inference frame. Fig 12 :103 "Composition is recursive, and the level decides what is irreducible" licenses the two readings at different levels.
- **Refuter:** a demonstration that `r_s` is derivable within the measurement closure, so no import occurs.

### F3 - The estimate is not an anchor; the measured scale is (decisive for framing, `specified`)

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :29-30 "If it moves when you push on it, it is not an anchor." Fig 2 :45 "Frames range against the ground. They do not negotiate with it."

The inferred H0 moves when the early-universe assumptions are pushed. Therefore it is a frame output, not an anchor. The anchor in Domain 1 is `theta_*`, which does not move with cosmology. The anchor in Domain 3 is the geometric distance ladder, which does not move with pre-recombination physics.

World corroboration: Planck gives 67.4 +/- 0.5 under Lambda-CDM; Riess et al. 2022 gives "Our baseline result from the Cepheid-SN sample is H0=73.04+-1.04 km/s/Mpc" and "We find a 5-sigma difference with H0 predicted by Planck+LCDM". The two frames range against a ground and disagree; that disagreement is information, not a vote.

- **Mode:** `specified`.
- **Status:** triangulated (Fig 2 + Planck + Riess).
- **Refuter:** a measurement of H0 from CMB data that is invariant under changes to N_eff and early dark energy within observationally allowed ranges.

### F4 - The residual is per slot; a global fit hides it (decisive for "how much", `general`)

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 1 :23 "The ground enters as the only metric."

Planck reports "good consistency with the standard spatially-flat 6-parameter Lambda-CDM cosmology" and "We find no compelling evidence for extensions to the base-Lambda-CDM model." If you ask "does the CMB fit Lambda-CDM", the answer is yes: the global residual is small. If you ask slot s3, "what H0 does it imply", the residual against the local ladder is about 5 sigma. Aggregating across slots is exactly how the live signal is made to disappear.

This resolves an apparent conflict between the figures and the literature: "small effect on the fit" and "large effect on the estimate" are both true, because they are different slots.

- **Mode:** `general` for the slot rule; the 5 sigma is `grounded` by Riess et al. as a world fact.
- **Status:** triangulated (Fig 1 + Planck + Riess).
- **Refuter:** a slot-resolved analysis showing the H0 residual moves with late-universe assumptions only, not with early-universe ones.

### F5 - The size of the effect is large enough to close the gap, but it costs an atom (`specified`)

Fig 5 :43-44: "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly." Fig 6 :24 "A wrong atom costs more than starting from primitives."

A change of `r_s` of roughly 5 to 10 percent can raise the CMB-inferred H0 into the low 70s and largely remove the tension. Poulin et al. 2019 find regions where "H0 inferred from Planck CMB data agrees with the SH0ES local measurement." But the mechanism adds a new component: Poulin, Smith and Karwal 2023 report that "current data remain inconclusive on the existence of an EDE phase" and that EDE worsens the S8 clustering tension. So the effect is large, but the atom is not yet paid for.

Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." The fact that EDE can close the gap is a filter result (it shows reachability), not a verdict that EDE is real.

- **Mode:** `specified`.
- **Status:** triangulated (Fig 5/6 + Poulin 2019 + Poulin et al. 2023, with the second source partially conflicting on cost, which is recorded, not hidden).
- **Refuter:** a model-independent bound showing that no allowed early-universe change can move the inferred H0 by more than a small fraction of the observed 5 to 6 km/s/Mpc difference.

### F6 - The two frames are low-overlap, so their disagreement counts (`general`)

Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Fig 8 :48-49 "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."

Domain 2 (pre-recombination physics plus CMB) and Domain 3 (Cepheids, supernovae, geometric anchors) use different instruments, different epochs and different assumptions. Verde, Treu and Riess 2019: "combining any three independent approaches to measure H0 in the late universe yields tension with the early Universe values between 4.0sigma and 5.8sigma" and "the discrepancy does not appear to be dependent on the use of any one method, team, or source."

Fig 7 :12-13 "same closure, handed along; agreement compounds, evidence does not": repeated CMB fits that share the same Lambda-CDM assumptions are one long room, not independent corroboration of H0.

- **Mode:** `general` for the independence rule; the sigma range is a world fact.
- **Status:** triangulated (Fig 2/8/7 + Verde et al. 2019).
- **Refuter:** a shared calibration or evidence pool between the CMB inference and the local ladder sufficient to explain the full offset.

### F7 - The compression to six parameters has a measurable round-trip gap (`general`)

Fig 4 :27 "The transform between scales loses information, and that is the point." Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Fig 4 :31-32 "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."

The map from full pre-recombination physics to a six-parameter Lambda-CDM fit to H0 is lossy. What it drops (extra relativistic species, any EDE contribution, detailed recombination history) is precisely what moves `r_s`. So the answer to "how much" is bounded by how much `r_s` can move under allowed early-universe assumptions, which is the round-trip gap R_T. Planck constrains "the effective extra relativistic degrees of freedom to be N_eff = 2.99+/-0.17" in combination with BAO, so the allowed movement is nonzero but bounded.

R_T is **not** measured numerically here; no new instrument was run. It is recorded qualitatively as the set of dropped constraints.

- **Mode:** `general`.
- **Status:** single-source for the figure rule (Fig 4), corroborated on the bound by Planck/BAO. Not triangulated on the numeric size.
- **Refuter:** a round trip in which re-expanding the six-parameter fit reproduces the full early-universe model's H0 prediction with no residual, i.e. R_T = 0.

### F8 - What settles it is an instrument, not another fit (`general`)

Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 8 :39 "So a search that finds nothing is never a proof of absence." Fig 4 :33 "there is no top and no infinite regress" is not needed; the relevant stop is Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."

The ground here is an independent sound-horizon measurement, not a better fit to the same spectra. DESI 2024 VI, using BAO plus a BBN baryon-density prior plus the CMB acoustic scale, reports "H0=(68.52+/-0.62) km s-1 Mpc-1", staying near the low value and constraining how far assumptions can move the inference.

- **Mode:** `general`.
- **Status:** single-source on the figure side (Fig 6/8), corroborated by DESI.
- **Refuter:** a direct, assumption-light measurement of `r_s` at decoupling that returns a value large enough to force H0 near the local ladder value under the standard distance relation.

### F9 - What actually survives, with modes attached

| claim | mode | figure / source |
|---|---|---|
| CMB tightly constrains a ratio `theta_*`, not H0 | `general` | Fig 9 :32; Planck ground fact |
| `r_s` is imported from the early-universe frame into the inference | `specified`, level-relative | Fig 6 :23, Fig 12 :103 |
| The inferred H0 moves when the assumptions move, so it is not an anchor | `specified` | Fig 2 :29-30 |
| The residual is localized in the H0 slot, not the global fit | `general` | Fig 1 :19, :22 |
| The effect can be as large as the tension, but costs a new atom | `specified`, ungrounded | Fig 5 :43-44, Fig 6 :22 |
| The two frames have low overlap, so the disagreement is informative | `general` | Fig 2 :31, Fig 8 :48-49 |
| The six-parameter compression has a nonzero round-trip gap R_T | `general`, unmeasured | Fig 4 :30 |
| A specific missing component is early dark energy / extra neutrinos | **not claimed** | Fig 13 :134: "It cannot say which primitive is missing, because naming it would mean already holding it." |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the seat-rule that a falsifier written before the run is a design instrument, not only an honesty device. The shape claim is refuted if any of the following holds:

1. An analysis extracts H0 from CMB data without supplying any pre-recombination model at comparable precision, so the estimate stops moving when assumptions change (breaks F1/F2).
2. Varying N_eff, early dark energy fraction and recombination history within observationally allowed ranges leaves the inferred H0 unchanged within the quoted errors (breaks F3/F5).
3. It is shown that `r_s` lies in the measurement frame's closure, so no import is required (breaks F2).
4. The local ladder and the CMB inference are shown to share an evidence pool large enough to explain the full offset, making the "tension" a convention rather than two frames ranging against the ground (breaks F6).
5. A round trip from full early-universe physics through the six-parameter fit and back returns H0 with no residual (R_T = 0, breaks F7).

If any fires, the load-bearing claim is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with F1 and F4: the CMB measures a ratio, and the tension is a per-slot residual. Both are structural and survive a re-census.
2. State the mode on every substantive claim. The 0.03%, 67.4, 73.04 and 5 sigma numbers are world facts, not figure derivations.
3. Keep the import in view: any answer to "how much" is a statement about how far `r_s` can move, and that depends on which atoms the assumed model allows (F2, F5).
4. Do not name the missing component (F9). The framework returns a shape and a bound, not a primitive.
5. Ask checkers for a refutation of the stage-1 shape claim, not for agreement with a theory. Fig 4 :22 "Only methods cross up. Only head starts come down." Send the generator, not the recording.
6. Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit." Describe the residual first, then choose the frame.

---

## 6. Canonical usage check and retraction / confirmation log

Sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md` (the figures "outrank everything else in the repo... the quotes are the authority, not this summary"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "a shape, not a name" and stops at the limit of the instruments, recording the lineage; "Indiscernibility is not identity") and `THE_FORMULA.md` (mode rule, steps 3, 4, 6, 7).

| earlier reading | status after canonical check |
|---|---|
| F1 "CMB measures a ratio" | **Canonically confirmed.** Fig 9 :32 and the README's "a shape, not a name" both limit what a frame returns. |
| F2 "`r_s` is an import" | **Narrowed, not retracted.** An import adds an atom (Fig 6 :22). `r_s` is a mint inside the model frame and an import into the inference frame. Both readings survive at different levels (Fig 12 :103). The earlier unqualified "import" was imprecise. |
| F3 "estimate is not an anchor" | **Confirmed.** Fig 2 :29-30 is the anchor test applied verbatim. |
| F4 "global fit hides the slot" | **Confirmed.** Fig 1 :19 and :22 are explicit. |
| F5 "effect large enough to close gap" | **Retained as `specified`, not promoted.** The literature shows reachability; the README forbids reading a reach as a settlement. |
| F7 "R_T measurable" | **Narrowed.** Fig 4 :30 requires measuring the gap; no instrument was run here, so R_T is recorded qualitatively. Claiming a numeric R_T would be dead reckoning. |
| Fig 13 applied to parameter inference | **Retracted as a strain.** See §7. It governs composition of kinds, not model-mediated inference. |

---

## 7. Strains, re-census, and the honest stop

**Strain 1, declined: Fig 13 on parameter inference.** An initial read tried to use Fig 13 :75 "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state" to say something about CMB parameter estimation. It does not fit: the CMB anisotropy spectrum is a structure (Fig 13 :20 "ordering, so more and less can be said"), but the estimate of H0 is not a composition of states and structures in the substrate sense. The line only fits with a strain, so by the rule it governs another quantity. Re-census sends the question to Fig 6 (import), Fig 9 (kind of thing), Fig 4 (cross-scale gap). Recorded as a declined strain, not silently dropped.

**Strain 2, level-relative and named: `r_s` mint vs import.** Inside the early-universe model frame, `r_s` composes from atoms (baryon density, radiation content, expansion history). Into the inference frame it is an imported atom. Fig 12 :103 "Composition is recursive, and the level decides what is irreducible" permits both readings. This is not a contradiction between figures; it is a change of level. Kept visible.

**Strain 3, world-side, not a figure strain:** EDE can close the H0 gap but worsens S8 (Poulin, Smith and Karwal 2023). A conflict in the world layer sends us back to the census, never flips a figure verdict. The figure verdict (assumptions are load-bearing through an import) is unchanged; the world layer only bounds which atoms are affordable.

**After re-census: one declined strain, one level strain, both named; none hidden.**

**Honest stop.** The result stops at what the figures can say and what the opened sources report. The figures give the shape: a ratio is measured, a sound horizon is imported, the estimate moves with the assumptions, the gap is per slot and cross-scale. The literature gives the sizes: 0.03% on `theta_*`, 67.4 under Lambda-CDM, 73.04 locally, about 5 sigma apart, with early-universe changes able to move the inference by a comparable amount at the price of a new component. No new measurement was taken, no missing primitive was named, and the question of which component (if any) nature uses is left to the ground.
