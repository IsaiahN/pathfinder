# WATSON answer: how much do early-universe assumptions affect CMB-derived estimates?

**Mode: `general` on the shape, `specified` on the load-bearing claim, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the claim it reports on. No new measurement was taken.

## QUESTION

Decide in effect terms how much assumed pre-recombination physics changes estimates inferred from the CMB. Option A: the assumptions are a small correction and the CMB essentially measures H0. Option B: the CMB measures a ratio, the sound horizon is imported from the assumed early-universe model, and the estimate is a function of (data, model), so the assumptions are the dominant systematic while the measured ratio is nearly assumption-free. What each leads to: A directs effort to late-universe systematics and more CMB precision; B directs effort to an independent sound-horizon measurement and treats the tension as a contact failure between two low-overlap frames. The figures support B, with a bound and no named primitive.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** Same observed sky, different inferred H0 under different early-universe assumptions. Arity: two inputs, data and model. Symmetry: many-to-one, several pre-recombination histories give the same acoustic angle with different sound horizons, so the map is a lossy projection. Scale: the observable is at recombination (about 380 kyr, z about 1100) and the estimate is at z = 0, so a cross-scale transform is required. Fig 1 :19 "The residual is indexed by object slot, not aggregated": it lives in the sound-horizon and H0 slots, not the acoustic-scale slot.
- **Domain 1, the CMB measurement frame.** Actors: photons at last scattering, acoustic oscillations, Planck / ACT / SPT instruments. Currency: angular power spectra compressed to `theta_* = r_s / D_A`. Anchor: the instrument reading of the sky, 100 theta_* = 1.0411 +/- 0.0003 (0.03%, Planck 2018 VI), which does not move when cosmology changes. Genuine domain, near the ground.
- **Domain 2, the early-universe model frame (the assumptions).** Actors: N_eff, recombination history, pre-recombination energy density, primordial spectrum, physical baryon density. Currency: the sound horizon `r_s` and the mapping from `theta_*` to H0. Anchor: none internal by construction; its answer moves when its assumptions move. Its external anchor is the same sky read through BAO and BBN. Genuine domain, far from the ground until checked. This is where "how much" is decided.
- **Domain 3, the local late-universe frame.** Actors: Cepheids, Type Ia supernovae, Gaia parallaxes, NGC 4258 masers, LMC eclipsing binaries. Currency: the distance ladder, H0 = 73.04 +/- 1.04 km/s/Mpc (Riess et al. 2022). Anchor: geometric distances, which do not move with pre-recombination physics. Low overlap with Domain 2.
- **Partition or union.** Union at two levels. The tension is a compound of a CMB-inferred H0 and a locally measured H0 (Fig 9). Within Domain 2, extra N_eff, early dark energy and altered recombination overlap as conditions that all reduce `r_s`; removing one leaves the intersections. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
- **Order by dependency (Fig 3).** Measure `theta_*` (D1), supply `r_s` from the assumed model (D2), derive H0, compare with D3. The break is the model link, which has no direct instrument in the CMB data.

Strain test applied: Fig 13's rule that two states never bond directly was tried and declined for parameter inference; it only fits with a strain, so it governs another quantity. Re-census sent the question to Figures 6, 9 and 4. Recorded in `01_figure_grounded_audit.md` §7.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs. Per-domain verdicts are kept separate.

**D1, measurement frame (triangulated):**
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> the CMB returns a ratio, not H0.
- Fig 9 :30-31 "your words are borrowed too, so describe the effect rather than the cause" -> describe `theta_*` as an effect; the source is underdetermined.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated" -> the signal is in the H0 slot, not the global fit.
- Triangulation: Fig 9 (shape returned) and Fig 1 (per-slot residual) have low overlap, so the "ratio not rate" verdict is triangulated. Planck's 0.03% measurement corroborates from a different evidence pool.

**D2, model frame (triangulated):**
- Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs" -> `r_s` is imported, not measured.
- Fig 6 :22 "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure" -> different assumptions expand the closure and move the inferred H0.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks" and Fig 2 :29-30 "If it moves when you push on it, it is not an anchor" -> the inferred H0 fails the anchor test.
- Fig 5 :43-44 "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly" -> the size of the effect is bounded by what an added atom can pay for.
- Fig 13 :134 "It cannot say which primitive is missing, because naming it would mean already holding it" -> no named component.
- Triangulation: Figures 6, 2, 5 and 13 are distinct figure lines with low overlap on different aspects (import, anchor, cost, naming), so the D2 verdict is triangulated internally.

**D3, local frame (single-source on the figure side, corroborated in world):**
- Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence" -> D2 and D3 are low-overlap, so their disagreement is informative.
- Fig 8 :48-49 "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names" -> repeated CMB fits sharing Lambda-CDM assumptions are one room, not independent checks.
- Fig 7 :12-13 "same closure, handed along; agreement compounds, evidence does not" -> number of analyses does not add evidence.
- Triangulation: Figures 2, 8 and 7 give the independence rule from three related but distinct framings. Marked `triangulated` on the independence verdict; the specific sigma figures are world facts, not figure outputs.

**Cross-scale and stop (single-source on the figure side):**
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked" -> the six-parameter compression has a nonzero gap R_T; the answer to "how much" is bounded by it.
- Fig 4 :31-32 "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up" -> the gap is the report, not a defect to hide.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict" -> reachability of a high H0 under EDE is a filter result, not a verdict.
- Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing" -> the stop is honest.
- Verdict on this cluster: `single-source` for the figure rule (Fig 4, Fig 9), corroborated on the bound by Planck and DESI.

## WORLD (secondary sources read)

World sources corroborate only; they never overrule the figures. Fields are declared so overlap is visible.

- **Field: cosmology / CMB measurement.** Planck Collaboration, "Planck 2018 results. VI. Cosmological parameters", A&A 641, A6 (2020), arXiv:1807.06209. Quote: "The angular acoustic scale is measured to 0.03% precision, with 100theta_*=1.0411+/-0.0003" and "Assuming the base-Lambda-CDM cosmology, the inferred late-Universe parameters are: Hubble constant H0 = (67.4+/-0.5)km/s/Mpc". Prediction: the ratio is precise, the rate is conditional. Corroborates C1 and the D2 import.
- **Field: cosmology / local distance ladder.** Adam G. Riess et al., "A Comprehensive Measurement of the Local Value of the Hubble Constant", ApJL 934 L7 (2022), arXiv:2112.04510. Quote: "Our baseline result from the Cepheid-SN sample is H0=73.04+-1.04 km/s/Mpc" and "We find a 5-sigma difference with H0 predicted by Planck+LCDM". Prediction: a second low-overlap frame ranges against the same ground and disagrees. Corroborates D3 and the union reading.
- **Field: cosmology / tension synthesis.** L. Verde, T. Treu and A. G. Riess, "Tensions between the Early and the Late Universe", Nature Astronomy (2019), arXiv:1907.10625. Quote: "combining any three independent approaches to measure H0 in the late universe yields tension with the early Universe values between 4.0sigma and 5.8sigma" and "the discrepancy does not appear to be dependent on the use of any one method, team, or source". Prediction: independence, not a single systematic. Corroborates Fig 2 :31 and Fig 8 :48-49.
- **Field: cosmology / early-universe model building.** V. Poulin, T. L. Smith, T. Karwal and M. Kamionkowski, "Early Dark Energy can Resolve the Hubble Tension", Phys. Rev. Lett. 122, 221301 (2019). Quote: "the sound horizon at decoupling is reduced resulting in a larger value of the Hubble parameter H0 inferred from the cosmic microwave background (CMB)". Prediction: reducing `r_s` raises the inferred H0, reaching the SH0ES value in some regions. Corroborates the D2 import and the magnitude.
- **Field: cosmology / review and constraints.** V. Poulin, T. L. Smith and T. Karwal, "The Ups and Downs of Early Dark Energy solutions to the Hubble tension", Physics of the Dark Universe (2023), arXiv:2302.09032. Quote: "current data remain inconclusive on the existence of an EDE phase". Prediction: the added atom is not yet paid for; the S8 tension worsens. Corroborates the cost constraint; partially conflicts with the simpler "EDE solves everything" story, which is recorded, not hidden.
- **Field: cosmology / BAO.** DESI Collaboration, "DESI 2024 VI: cosmological constraints from the measurements of baryon acoustic oscillations", JCAP 02 (2025) 021. Quote: "Paired with a baryon density prior from Big Bang Nucleosynthesis and the robustly measured acoustic angular scale from the cosmic microwave background (CMB), DESI requires H0=(68.52+/-0.62) km s-1 Mpc-1". Prediction: an independent sound-horizon route stays near the low value. Corroborates the bound on R_T and the instrument requirement.
- **Field: metatheory / source discrimination.** Isaiah N, "The Hard Problem is About Source", adventuresinml (Substack), 2026. Quote: "If several paths create the same behavior, then behavior is a projection with lossy information" and "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it". Prediction: the acoustic reading underdetermines its early-universe source until a discriminating instrument exists. Corroborates Fig 9 :30-31. Overlap: high, framework author, so weak independent weight.
- **Field: search / shape.** Isaiah N, "The Library of Babel: Locating The Book of Books", adventuresinml (Substack), 2026. Quote: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question". Prediction: a shape and a bound, not a named primitive. Corroborates Fig 13 :134. Overlap: high, framework author.
- **Field: validation / self-validation.** Isaiah N, "The Recursive Self-Improvement Trap", adventuresinml (Substack), 2026. Quote: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself". Prediction: this run cannot settle its own claim. Corroborates the simulated status. Overlap: high, framework author.
- **Field: human cognition / tacit knowledge.** Isaiah N, "Decoding Tacit Knowledge", adventuresinml (Substack), 2026. Quote: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world". Prediction: lead outreach with an effect description and a refuter. Corroborates Fig 9 :27-28. Overlap: high, framework author.

The cosmology sources are independent of the framework and of each other in method (satellite CMB, local distance ladder, BAO, MCMC model fitting), though all address the same debate, so their agreement is one research programme rather than many independent witnesses. The four essay sources share an author with the figures and carry little independent weight. No world source conflicts with the figure verdict; the one partial conflict (EDE constraints) was returned to the census and left the verdict unchanged.

## VERDICT (from the figures)

Early-universe assumptions are **load-bearing, not a small correction**: the CMB tightly constrains a ratio while the absolute scale that converts it to H0 is imported from the assumed pre-recombination model. The inferred H0 moves when that assumption moves and therefore fails the anchor test; the residual is localized in the H0 slot; the two frames whose disagreement defines the tension are low-overlap, so the disagreement counts; and the magnitude is bounded by how far the imported sound horizon can move, a bound that current data constrain but do not close. The framework returns this shape and bound, not a name: which component (if any) nature used stays open. This is a `specified`, ungrounded result; the numeric values come from the world layer and are corroboration only.

- **cost if wrong:** bounded and locatable. If the assumptions matter less than claimed, the invariant test in C2 fires cheaply and the load-bearing claim is withdrawn. If they matter more and are ignored, effort is misdirected to late-universe systematics and more CMB precision above the Fig 3 break. A premature name costs a wrong atom, which Fig 6 :24 prices above starting from primitives. The outreach cost of spending checker independence with a recording rather than a generator is also real and avoidable by leading with the shape claim and refuter.
- **undoable:** yes. No primitive is added, so nothing has to be withdrawn. The bounded claim can be narrowed by a sound-horizon measurement; the added model atoms are removable; the lineage is recorded in `01_figure_grounded_audit.md` §6 and `11_audit.md`.
- **reversed by:** a ground reading, not agreement. An independent measurement of `r_s` at decoupling; a direct, assumption-light H0 from the CMB; an invariance test showing H0 unchanged under allowed early-universe variations; or a shared-evidence-pool finding explaining the whole offset. A figure re-census that puts `r_s` inside the measurement closure would also reverse the import claim. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Planck 2018 results. VI. Cosmological parameters](https://arxiv.org/abs/1807.06209)
- [A Comprehensive Measurement of the Local Value of the Hubble Constant (SH0ES)](https://arxiv.org/abs/2112.04510)
- [Tensions between the Early and the Late Universe](https://arxiv.org/abs/1907.10625)
- [Early Dark Energy can Resolve the Hubble Tension](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.122.221301)
- [The Ups and Downs of Early Dark Energy solutions to the Hubble tension](https://arxiv.org/abs/2302.09032)
- [DESI 2024 VI: cosmological constraints from BAO (JCAP)](https://iopscience.iop.org/journal/1475-7516)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
