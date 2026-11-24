# Figure-grounded audit: Is dark matter cold, warm, or a mixture, and what observations best distinguish these possibilities?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: simulated, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026) says LLM output can "quickly simulate an approximate answer/output" while "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The canonical local extract `FRAMEWORK/reference/03-FIGURES_TEXT.md` (all `Fig N :line` quotes below), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, and the public world sources listed in `10_source_ledger.csv`.

---

## 0. The claim under audit and the residual in effect terms

The plain-language question offers three labels: cold, warm, mixture. Stated in effect terms, the residual is:

> For each observational slot `s`, the prediction `Γ_s(b,a)` of a dark-matter model disagrees with the observation `o'_s` in a way that depends on *scale*, and the sign and size of that disagreement differs from slot to slot.

The slots this audit enumerates (habitat read off the world, Fig 11 :43 "The habitat is enumerated, never composed.") are:

| slot `s` | observable | current residual shape |
|---|---|---|
| s1 | CMB + large-scale structure | cold, collisionless DM fits well, residual near zero |
| s2 | dwarf satellite abundance | CDM predicts too many low-mass subhalos, residual positive |
| s3 | inner density profiles (cusp/core, too-big-to-fail) | CDM predicts too much central mass, residual positive |
| s4 | Lyman-alpha flux power at z greater than 4 | a cutoff is observed, but thermal (IGM) and free-streaming (DM) sources project to the same reading |
| s5 | strong-lensing substructure and stellar streams | presently consistent with abundant substructure, squeezing the allowed warm freedom |
| s6 | 21 cm at z greater than 15 (future) | would discriminate free-streaming from collisional damping, instrument not yet flown |

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :20-21: "a global residual near zero with one live slot is a legal state and not an inert one." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

**Consequence.** The first move is not to ask "which of the three labels wins overall." That would average s1 through s6 and throw away exactly the signal. Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." The correct output is a per-slot residual table plus per-domain verdicts, never one global label.

What an answer would look like was bound in `README.md` (formula step "Direction"), so the sought-for shape is an ordinary term here and can accrue a residual like anything else.

---

## 1. Figure census and domain census

### 1.1 R by arity, symmetry and scale

- **Arity.** The question presents three labels, but the underlying structure is one component (cold or warm) versus two components (mixture). Arity 1 or 2, so a union question when the mixture option is live, not a list of three mutually exclusive kinds.
- **Symmetry.** Cold and warm are not symmetric alternatives in the sense of a symmetric bond. They are two regions of one ordering (particle mass or free-streaming length) compared against a threshold. The matter power spectrum is literally a spectrum: Fig 13 :20 "ordering, so more and less can be said." The cutoff is a gradient over that ordering: Fig 13 :22 "a difference that can be spent."
- **Scale.** The residual lives at small scales (high `k`, low halo mass), but its explanation reaches from the early universe to the present. The transform between those scales is lossy (Fig 4), so mapping a particle mass to a satellite count carries a round-trip gap that must be measured.

### 1.2 One line per domain: actors / currency / anchor

A domain without a nameable anchor is not a domain yet. All four below have one.

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1 particle / early universe (ab initio) | thermal relics, sterile neutrinos, production mechanisms | free-streaming length, particle mass, transfer function `T(k)` | Boltzmann solvers plus CMB and large-scale structure; does not update on dwarf-scale opinions | partition boundary: which perturbations enter the nonlinear era |
| D2 nonlinear structure and galaxies | halos, subhalos, dwarfs, baryons, feedback | subhalo mass function, concentration, central density | simulations plus galaxy dynamics data | union: baryonic feedback and DM temperature are overlapping conditions |
| D3 observation and instruments | Lyman-alpha spectrographs, lenses, streams, 21 cm arrays | flux power, subhalo counts, flux ratios, brightness temperature | the actual data; instruments can be wrong on axes they do not measure | partition by probe, but probes may share one modeling pool |
| D4 verification and outreach | expert readers, this simulated second seat | agreement and residuals | the ground, never agreement | shares one evidence pool in this run, so independence = 0 |

### 1.3 Order by dependency (Fig 3)

The chain is ordered by dependency, not by importance: Fig 3 :20 "The chain is ordered by dependency, not by importance." Dependency order here:

1. **Perceive** whether a cutoff registers at all in any slot (Fig 3 :4-5).
2. **Vocabulary** whether hot / cold / warm / mixed are terms on an ordering, not names of particles (Fig 3 :6-7).
3. **Objective** what counts as progress: a suppression whose *redshift scaling* separates thermal from free-streaming sources.
4. **Planning** which probe at which redshift (Lyman-alpha above z 5; 21 cm above z 15).
5. **Learn and carry** transfer functions and simulation suites that make the next search cheaper (Fig 4 :11 "a head start, never a recording").

Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." The WDM-versus-interacting-DM link currently stops at step 3, because separating those two needs percent-level `P(k)` at z greater than 15 (Mosbech, Boehm and Wong 2023, read this session), which no current instrument supplies. That is a missing link, not a working one, and a reading below it is a reading of nothing (Fig 3 :22-23).

### 1.4 Partition or union

Cold / warm / mixture is a **union** of overlapping conditions, not three separate hypotheses. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57-58 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." Unbundle before searching:

- U1: Is there a scale-dependent suppression in `P(k)` at all? (shape question)
- U2: If yes, is its source ab initio DM physics (free-streaming) or in situ baryonic / DM physics (feedback, self-interactions)? (source question)
- U3: If a warm component exists, what fraction and what cutoff? (mixture question, now a specific compound)

Each has its own loop and its own ground. The original question's honest answer is therefore **three separate verdicts**, never an average.

---

## 2. Findings F1 to F10

### F1 — The question as phrased averages the residual (structural, decisive for method)

**Verbatim.** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

**Derivation.** s1 is near zero while s2 and s3 are positive and s4 is ambiguous. A single global "the data prefer warm" or "the data prefer cold" is the frame-internal average the figure forbids. Fig 2 :37-38 "instruments can be wrong on axes they do not measure" applies directly: large-scale structure cannot see the cutoff, so its near-zero residual says nothing about s2-s4.

**Refuter.** Exhibit one scalar observable whose residual is a sufficient statistic for all six slots. None is known; the CMB is blind to dwarf-scale suppression.

**Mode:** `general` (structural). **Status:** triangulated across Fig 1 and Fig 2, low overlap between the slot rule and the instrument-axes rule.

### F2 — The figure-governed output is a shape, not a particle name (shape claim)

**Verbatim.** Fig 9 :32 "you get a kind of thing, never the answer itself." Fig 13 :134 "Unreachable is a verdict here, not a silence". Canonical local rule: the framework returns "what a missing thing would have to look like (a shape, not a name)" (`FRAMEWORK/reference/FIGURES_README_canonical.md`).

**Derivation.** The shape is: a suppression in `P(k)` above some cutoff wavenumber `k_fs`, equivalently a half-mode mass `M_hm`, whose location scales with redshift differently for a thermal IGM source and a free-streaming source (the 2018 MNRAS paper read this session reports `lambda_DM` proportional to `(1+z)^(1/2)` while the thermal scales are roughly z-independent). "7 keV sterile neutrino" is a **binding** from the particle frame onto that shape, not a figure derivation and not an import that adds an atom (Fig 6 :21 "MINT composes inside the closure and can never add an atom").

**Refuter.** A ground measurement that names the particle directly (for example an X-ray decay line confirmed against background) would settle the *name*, but would not by itself refute the shape. The shape claim is refuted only if a source-discriminating measurement shows no cutoff where the shape predicts one, or a cutoff with no scale dependence.

**Mode:** `specified`. **Status:** triangulated across Fig 9, Fig 13 and the canonical usage rule (three different passages, low overlap).

### F3 — Cold and warm are threshold regions over one ordering; mixture is a union compound

**Verbatim.** Operators table :49 "a threshold relation between two quantities". Fig 13 :20 "ordering, so more and less can be said." Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 9 :57-58 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

**Derivation.** Cold and warm require no seventh primitive. Energy (a state) bonded to spectrum (an ordering of perturbations) yields a gradient (a directed suppression) that can be spent on structure formation. Fig 13 :74 "Everything else is a composition across the two kinds, never within one." Over the full six-term atom set the two are isomers: same atoms, different arrangement, different behaviour. A mixture is not a third same-kind option; it is U1 and U2 both binding, so the unbundling rule applies and the residue is a specific compound with its own loop.

**Refuter.** If either option required a new primitive beyond the six (Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists" would then be violated by an unmotivated import), or if the mixture's residuals were not the two condition-specific residuals but a genuinely new interaction, this reading fails.

**Mode:** `specified`. **Status:** triangulated for the union (Fig 9) and the ordering (Fig 13 + Operators); single-source for the specific isomer mapping (Fig 12).

### F4 — The discriminator is legible only where an instrument resolves the gradient

**Verbatim.** Fig 13 :22 "a difference that can be spent." Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 6 :34 "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."

**Derivation.** The 21 cm route is a real extension of an existing reading, not a telescope specified from an account of Mars: Fig 6 :32-33 "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced." SKA forecasts (Carucci et al. 2015; Mosbech et al. 2023, both read this session) build on existing 21 cm intensity-mapping measurements. Conversely, the filament-imaging route fails: a 2026 study finds beam smearing erases the CDM/WDM morphological difference, so that particular instrument axis cannot carry the signal.

**Refuter.** A probe that resolves a sharp feature with no ordering in `k`, or a proof that no instrument at any resolution returns a source-discriminating signal, would break this finding.

**Mode:** `specified`. **Status:** triangulated (Fig 3, Fig 6, Fig 13).

### F5 — Multiple probes are multiple witnesses only if their evidence pools differ

**Verbatim.** Fig 2 :31-32 "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :39-40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."

**Derivation.** The 2026 review (Nadler, Rogers and Drlica-Wagner, read this session) states that dwarf galaxies and stellar streams share systematics related to the Milky Way subhalo population and host halo properties, while strong lensing, the Lyman-alpha forest and high-redshift galaxies have distinct systematics. So "many probes agree" is not automatically many witnesses. Buy independence in proportion to the cost of being wrong: Fig 2 :42 "Buy independence in proportion to the cost of being wrong."

**Refuter.** Demonstrate a common systematic that pushes all currently independent probes in the same direction, or show that two "independent" probes draw on the same hydro simulation suite and priors. Then the apparent triangulation collapses to one frame wearing two names (Fig 8 :48-49 "two frames that overlap almost completely are one frame wearing two names", quoted in the tacit-knowledge essay).

**Mode:** `general`. **Status:** triangulated (Fig 2 + Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict").

### F6 — Source discrimination, not curve fitting, closes this question

**Verbatim.** Fig 2 :37-38 "instruments can be wrong on axes they do not measure." Fig 9 :30-31 "your words are borrowed too, so describe the effect rather than the cause." Fig 6 :30 "The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."

**Derivation.** The observed Lyman-alpha cutoff is a projection with several possible sources: Doppler broadening, Jeans smoothing and DM free-streaming. The 2018 MNRAS paper reports "the FPS cut-off can be fit assuming cold dark matter, but it can be equally well fit assuming that the dark matter consists of ∼7 keV sterile neutrinos". From the source essay: "the instrument is speaking only about what it measured, it cannot comment on the source", and the color case "was proven wrong not by argument, but by the arrival of a better instrument." What the ground owes here is a discriminator: the redshift evolution of the cutoff, or 21 cm at high z.

**Refuter.** An analysis proving that the cutoff's redshift scaling cannot separate thermal from free-streaming sources even in principle. That would move this slot from "unreached at this budget" to "underivable", which changes the instruction from INWARD (extend the instrument) to OUTWARD (import a new frame).

**Mode:** `specified`. **Status:** triangulated (Fig 2 + Fig 9 + Fig 6) and corroborated by the world literature, which is secondary only.

### F7 — Unreachable is a verdict, and two kinds of unreachability differ

**Verbatim.** Fig 8 :39 "So a search that finds nothing is never a proof of absence." Fig 8 :40-43 "Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom." Fig 13 :134 "Unreachable is a verdict here, not a silence".

**Derivation.** Null results in direct detection do not prove cold dark matter; small-scale tensions do not prove warm dark matter. For the WDM-versus-interacting-DM slot, the needed discriminator (percent-level `P(k)` at z greater than 15) is an *instrument extension* question, so the remedy is INWARD, not a new particle. A wrong import here would add an atom that was not needed, and Fig 8 :43 prices "a wrong atom above starting from primitives".

**Refuter.** A proof that no instrument at any resolution returns a source-discriminating reading. Then the slot is underivable and OUTWARD import is owed. Until then, reporting "unresolved" for that slot is a verdict, not a silence.

**Mode:** `general`. **Status:** triangulated (Fig 8 + Fig 13).

### F8 — The particle-to-observable mapping has a measurable round-trip gap

**Verbatim.** Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."

**Derivation.** Mapping `m_WDM` to `T(k)` to halo mass function to satellite counts to flux power is a lossy chain. A measured instance: the 2021 MNRAS paper "How to constrain warm dark matter with the Lyman-alpha forest" lowers the robust bound from roughly 3 keV to 1.9 keV under different, data-compatible reionization histories. That difference *is* `R_T`, the gap between what the coarse description carries and what the ground returns. Description cost (bits) and observation cost (actions) must be read separately; a lower limit is cheap in bits and expensive in actions.

**Refuter.** Show that the mapping is invertible and independent of baryonic history, so `R_T` is zero. No such demonstration exists in the sources read.

**Mode:** `specified`. **Status:** triangulated (Fig 4 + Fig 12) with a measured world instance.

### F9 — Limits are filters for the budget, never witnesses for the verdict

**Verbatim.** Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

**Derivation.** The 2013 constraint `m_WDM > 3.3 keV` (Viel et al.), the 2023 weak preference near 4.5 keV (Villasenor et al.), and the 2026 joint `m_WDM` greater than about 10 keV (Nadler et al.) are all *filters*: they say which models get tried next and with which instrument. None is a detection of cold dark matter, and none is a detection of warmth. The disagreement among them is itself a round-trip-gap measurement (F8), not a reason to average them.

**Refuter.** Any argument that converts a lower limit into a positive claim about the particle, without a ground reading that discriminates sources, violates this finding.

**Mode:** `general`. **Status:** single-source figure line, corroborated by the pattern of the world literature (secondary).

### F10 — One strain named: the borrowed vocabulary of "cold" and "warm"

Fig 9 :30-31 requires describing the effect rather than the cause. The words cold and warm are borrowed from the particle frame and sound like three kinds. Re-census: the figure-governed quantity is a suppression scale (an ordering plus a threshold), and cold, warm and mixed are labels for regions of that ordering. Fig 13 :35-36 "Space, time and energy are not three readings of one quantity." Analogously, cold and warm are not three readings of one label, they are different arrangements over the same six terms. No figure contradiction remains after re-census; the strain lives in the question's vocabulary, not in the figures. Kept visible rather than smoothed.

---

## 3. Pre-registered refuter (written before the conclusion)

Per the discipline that a falsifier written before the run is a design instrument, the shape claim of this audit is refuted if any of the following fires:

1. Two probes with genuinely independent systematics (F5) return suppression scales whose discrepancy does not shrink with more data and cannot be accounted for by declared modeling uncertainty. Then it is not one residual and must be split: Fig 9 :4-5 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."
2. A source-discriminating measurement (redshift evolution of the cutoff, or 21 cm at z greater than 15) shows no cutoff where the shape predicts one, or shows a cutoff whose scaling is thermal in a universe with no warm component.
3. Every independent slot resolves to baryonic feedback with no dark suppression, so the residual for DM temperature goes to zero and the ground answers "cold" without the figures.
4. Composing any of the three options requires a seventh primitive, breaking Fig 13 :115.

If any fires, the claim is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with the shape (a scale-dependent suppression and its redshift evolution), not with a competition among three labels (F2).
2. Keep per-slot and per-domain verdicts separate; never average s1 through s6 into one "the data prefer X" (F1).
3. Describe the residual before choosing the probe: Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit."
4. Buy independence where the cost of being wrong is highest: weight probes with distinct systematics (Lyman-alpha, strong lensing, high-z galaxies) above those sharing Milky Way subhalo modeling (F5).
5. Treat the missing high-redshift discriminator as an INWARD instrument task, not an OUTWARD particle import (F4, F7).
6. State mode on every sentence. Fig 12 :125-126: price bits and actions separately.

---

## 5. Canonical usage check

Two local canonical sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "a shape, not a name"; and "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions, the seat reads the ground and does not ask the anchor to decide what the figures already settle. "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict" (Fig 9 :60, as quoted in that document).

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Initial draft treated "warm" as a new physical primitive, a possible seventh term | **Retracted.** Energy, spectrum and gradient are already among the six (Fig 13). WDM is a different arrangement over held atoms (Fig 13 :115), not a new member. |
| Initial draft read the Lyman-alpha cutoff as evidence for warm dark matter | **Retracted on reading the sources.** The 2018 MNRAS paper fits the same cutoff with CDM plus a thermal history and with roughly 7 keV sterile neutrinos. The cutoff is a projection, not a source (F6). |
| Initial draft counted "many probes agree" as corroboration | **Narrowed.** Only probes with distinct systematics count as separate frames (F5). Shared simulation pools are one witness. |
| Initial draft called the 21 cm gap "unreachable in principle" | **Retracted.** It is unreachable at this budget. SKA forecasts already exist, so the remedy is instrument extension, not import (F7). |
| "cold / warm / mixture" treated as three kinds | **Re-censused, not hidden.** They are threshold regions over one ordering plus a union compound (F3, F10). |
| F1 called "decisive for method" | **Confirmed but scoped.** It is decisive for how the question is *asked*, not a verdict about which dark matter exists. |
| Shape-not-a-name limit | **Canonically confirmed** by the figures README and Fig 9 :32. |

### Round trip on the condensation

The shorthand carried into `07` and `09` is: "a scale-dependent suppression, discriminated by redshift evolution." Going up (`T_A`) keeps the shape and drops the six-term grammar and the union unbundling. Coming back down (`T_E`) must restore: (a) the per-slot indexing of F1; (b) the union compound of F3; (c) the instrument link of F4. If those are dropped, the condensation becomes dead reckoning (Fig 4 :30). `11_audit.md` measures this gap explicitly as `R_T`.

### Updated verdict

The shape survives: per-slot residuals over a scale-dependent suppression, cold and warm as threshold regions over one ordering, mixture as a union compound, and a high-redshift source discriminator that is unreached rather than unreachable. What does not survive is any single averaged label, any particle name asserted from a projection, and any claim that a lower limit is a detection. Strains after re-census: one, the borrowed cold/warm vocabulary, named in F10 and resolved by re-census rather than hidden.
