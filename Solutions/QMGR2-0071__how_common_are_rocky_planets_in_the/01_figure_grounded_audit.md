# Figure-grounded audit: occurrence of rocky habitable-zone planets by star type

**Mode of this document: `general` on the structural rule, `specified` on the shape claims, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19), opened this session: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources actually opened are listed in `10_source_ledger.csv` and are secondary corroboration only.

---

## 0. The residual

Stated in effect terms, not in the vocabulary of a preferred answer:

> An astronomer or mission designer needs the number of rocky planets in the habitable zone **per star**, reported separately for each kind of star. Option A: publish one aggregate number for all stars. Option B: publish one number per star-type slot, each tied to the instrument that measured it and to the definition of "rocky" and "habitable" that was used.

What each leads to:

- **A** produces a single figure that is convenient for short- and long-range planning, but it sums over slots whose rates may differ and whose measurement completeness differs. Fig 1 :22 names the failure: *"Aggregating across slots is how a live signal disappears into an average."* A mission designed from the average can be wrong for every individual star type.
- **B** produces several smaller claims, each with its own instrument, definition and error bar. Each can be refuted separately. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*

**What an answer would look like, bound as an ordinary term (formula step "Direction"):** a table with one row per star kind and one column per definition of habitable zone, each cell a rate with an error bar and a provenance tag naming the survey and the analysis. This is the shape. The figures license the table's form. They do not license any cell's value.

**The number itself is a `gap` from the figures.** Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. The closure of the figures contains no stellar luminosity function, no telescope completeness map, no climate model. Import is required (Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*), and the import is the measurement literature, cited with provenance in `10_source_ledger.csv`.

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry and scale

- **Arity:** one rate per star-kind slot. Not one number. The question's phrase "different kinds of stars" makes the slot index part of the residual.
- **Symmetry:** a rate is a comparison of a count of planets against a count of stars under a detection completeness correction. Swapping the operands is not meaningful, so the governing bond is ordered/comparison, not a symmetric join. The *rate* compares; it is not itself a physical bond between two star kinds.
- **Scale:** stellar-population scale, above the single planet and below the Galaxy. The six-term substrate (Fig 13) is assumed throughout but does not by itself yield a demographic rate.

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor (nameable?) | partition or union |
|---|---|---|---|---|
| D1 survey and instrument | Kepler photometer, DR25 pipeline, completeness, reliability, TESS, HARPS RV | detections per star, completeness corrections | **yes:** the instrument and the public catalog. A rate that moves when the pipeline changes is not an anchor reading. | partition by survey/instrument; union with D3 when a rate is assembled |
| D2 stellar demographics | FGK dwarfs, early M, mid-late M, Gaia-revised effective temperature and radius | stars counted per spectral bin | **yes:** Gaia-revised stellar parameters and the star catalog | partition by star kind; this is the slot index of R |
| D3 habitability definition | habitable zone models (conservative, optimistic), rocky radius upper bound ~1.5 to 1.64 Earth radii, instellation limits | definitional boundaries | **yes:** climate models and measured mass-radius relation. A definition that changes with what we want to find is not an anchor. | union with D1 and D2: "rocky" AND "in HZ" AND "around this star kind" are conjoined conditions |
| D4 verification and mission design | ExoPAG, SAG13, HWO yield working group, reviewers of a claim | agreement, credible intervals, expected yield | **yes, but not agreement:** the future detection of actual habitable-zone rocky planets; until then each estimate is a `candidate` | union with the other three; it consumes their outputs and must not feed back as a verdict |

No nameable anchor means not yet a domain. All four have one, so all four are domains. D4's anchor is explicitly *not* consensus: Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*

### Partition or union

- D2 is a **partition** of stars into kinds. Fig 13 :39: *"Six members that overlapped would be fewer members wearing six names."* The same warning applies here: if the star-kind bins overlap so much that their rates are interchangeable, they are fewer slots wearing more names. Gaia revisions that moved Kepler hosts from M to earlier types are exactly this failure (Bergsten et al. 2023, read this session).
- The full question is a **union of conditions**: a planet must be rocky, in the HZ, and counted per star kind. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* A single lever that clears the "rocky" condition leaves the "in HZ" and "per star kind" conditions standing. So the answer must be unbundled into the table before it is searched.

### Dependency order (Fig 3)

1. **Perception/vocabulary:** fix the definitions of rocky and of the HZ (D3). Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."*
2. **Objective:** state what counts as progress, namely a rate per star-kind slot with an error bar (D2).
3. **Planning:** choose the instrument and the completeness/reliability treatment (D1). Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*
4. **Learn and carry:** report the rate with provenance, so the next survey starts from a head start rather than a recording (D4).

A reading taken below a broken link is not a weak reading, it is a reading of nothing (Fig 3 :22-23). A number quoted without its definition of the HZ is such a reading.

---

## 2. Figure census

| figure | verbatim bearing (checked against `03-FIGURES_TEXT.md`) | verdict in this domain |
|---|---|---|
| Fig 1 | :19 *"The residual is indexed by object slot, not aggregated."* :22 *"Aggregating across slots is how a live signal disappears into an average."* :23 *"The ground enters as the only metric."* | **governs the shape:** report per star-kind slot, calibrate against the ground |
| Fig 2 | :29 anchor definition; :31 independence; :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* ; :40 shared-pool clause; :42 *"Buy independence in proportion to the cost of being wrong."* | governs the verdict rule: measurement settles; multiple analyses of one catalog are one witness |
| Fig 3 | :19 link order; :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."* | governs the dependency order and the "few detections" bottleneck |
| Fig 4 | :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* | any condensation of a review into a single number carries `R_T` |
| Fig 5 | guards as a product; no new term is owed for a demographic count | the count is not a mint; no new primitive is claimed |
| Fig 6 | :23 no frame escapes its closure; :33 *"Nobody specified a telescope from an account of Mars."* ; :34 *"Where nothing is, there is no edge to extend from"* | the number is imported from instruments; instruments are improved from instruments already returning something |
| Fig 7 | :12-13 *"same closure, handed along; agreement compounds, evidence does not"* | passing a single η⊕ estimate along a citation chain adds no evidence |
| Fig 8 | :39 *"So a search that finds nothing is never a proof of absence."* ; :40 underivable versus unreachable-at-budget; :50 convergence at maximum independence | zero HZ detections is not zero planets; distinguish "not measured" from "not there" |
| Fig 9 | :27-28 *"describe it before you go looking, or any frame you pick will seem to fit"* ; :32 *"you get a kind of thing, never the answer itself"* ; :54 unbundle a union; :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* | the figures give the shape; a mission-yield number is a filter, not a witness |
| Fig 10 | :42 *"A verifier that can reconstruct the claim cannot verify it."* ; :52 *"Bring a characterised residual, never the source."* | outreach discipline: residual first, sources only after a verdict |
| Fig 11 | :48 *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."* ; :40 contact, not agent-in-isolation | the star-kind list is enumerated from catalogs, not composed from the theory |
| Fig 12 | bond pricing and isomer/functional-group distinction | used in `06` to classify star-kind slots; no new bond is required here |
| Fig 13 | :39 overlap warning; :134 *"Unreachable is a verdict here, not a silence"* | supports partition discipline and the honest `gap` for the number |
| Operators table | ⋛ comparison is a threshold relation between two quantities | an occurrence rate compares counts; it is not a physical bond among the six |
| Symbols table | `R` is the aim; the ground is the anchor; `R_T` is the round-trip gap | no `R` is closed by a number; the ground settles each slot |

Strained readings are named below, not smoothed over.

---

## 3. Findings

### F1 : The slot index governs; the aggregate does not (decisive for the shape)

Fig 1 :19 and :22:

> **"The residual is indexed by object slot, not aggregated."**
> **"Aggregating across slots is how a live signal disappears into an average."**

The star kind is a slot. An occurrence rate that does not carry its slot index has thrown away the signal the question asks about ("different kinds of stars"). The world literature agrees operationally: the review by Fernandes et al. (2025), opened this session, records that studies adopt different stellar parent populations and effective-temperature ranges, and that η⊕ is conventionally defined for FGK stars while M-dwarf work often uses instellation space because the HZ boundaries vary differently. The definitions are not interchangeable across slots. **Verdict: `general` structural rule, triangulated (Fig 1 plus the review's documented practice).**

**Refuter:** show that a single aggregate rate carries the same information as the per-kind rates for mission design and for a physical claim about star type. If true, the slot rule is wrong here.

### F2 : The number is a `gap` from the figures, imported from the ground

Fig 13 :134 *"Unreachable is a verdict here, not a silence"*. Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*

`closure(Γ)` of the figures contains the six states/structures and their bonds. It contains no stellar mass function, no Kepler DR25 completeness map, no Kopparapu climate model. No amount of rearranging the figures yields a rate. The atom must be imported, and the import is the measurement literature. Fig 8 :40: *"underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."* Here the number is not underivable in principle (instruments do return it); it is simply not in the figures' closure. The instruction is OUTWARD import with a source gate, not a longer search inside the figures.

**Refuter:** derive a numerical occurrence rate from the six-term substrate and the bond set alone, with no imported stellar or instrumental data. If someone does, this finding falls.

### F3 : The anchor is the measurement, not the agreement

Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."* Fig 1 :23 *"The ground enters as the only metric."*

The review records that "there is little evidence of convergence in estimates of η⊕ after 2019" despite convergence on definitions and catalogs (Fernandes et al. 2025). That is exactly what Fig 7 :12-13 predicts for a chain: *"same closure, handed along; agreement compounds, evidence does not"*. Eleven papers quoting one another about a rate are one evidence pool, not eleven witnesses.

**Refuter:** show that two analyses returning the same η⊕ drew on genuinely independent instruments, not just independent code applied to the same Kepler light curves. Fig 8 :50 allows this: *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."* But the record must show separate derivation, which requires the source trail.

### F4 : Zero detections is not zero planets

Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* Fig 9 :44 *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*

Bergsten et al. (2023), opened this session, report that after Gaia revisions there is one partially reliable Earth-sized candidate in the optimistic M-dwarf HZ and zero in the conservative zone, yet their forward model still returns η⊕ of 8.58 percent with large asymmetric uncertainty. The zero is a statement about the current catalog's completeness, not about the population. Fig 6 :34: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."* Here an edge exists: Kepler already returned something that fails to resolve, so sharpening (reprocessing DR25, adding TESS and RV) is licensed.

**Refuter:** exhibit an instrument whose detection completeness in the HZ bin is measured and near unity, and still find zero planets across a sample large enough to distinguish zero from the candidate rates. That would begin to fire.

### F5 : The shape-not-a-name limit applies to the number, correctly scoped

Fig 9 :32 *"you get a kind of thing, never the answer itself"*. The canonical README (local copy, read this session) states the framework returns *"what a missing thing would have to look like (a shape, not a name)"*.

For this question the "missing thing" is not a primitive in Γ, it is a measurement. The framework therefore returns the **form** of the answer: a per-slot table, ground-settled, definitions stated, uncertainty carried. It refuses to fill a cell. When the HWO baseline adopts η⊕ ≈ 0.24 for planning (Jenkins, NASA SPIN 2024 presentation, NTRS record verified), that is a design assumption imported from the world, not a figure-derived name. I initially wrote it as a figure result and retract that in §5.

**Refuter:** show the figures themselves selecting one numerical η⊕ over another, or deriving a privileged star kind. None of the thirteen figures ranks star kinds.

### F6 : "Different kinds of stars" is a partition, and overlapping bins collapse it

Fig 13 :39 *"Six members that overlapped would be fewer members wearing six names."*

Bergsten et al. (2023) show that Gaia-revised stellar properties moved many Kepler hosts from M to earlier types, so a 2015 M-dwarf sample and a 2023 M-dwarf sample are not the same slot. The 2015 estimate of roughly 24 percent for M dwarfs and the 2023 estimate of 8.58 percent are therefore not two measurements of one bin; the bin moved. This is an instance of the overlap warning, and it is why `06_isomers_and_order.md` requires the star-kind list to be enumerated from catalogs, not inherited from an earlier paper.

**Refuter:** demonstrate that the revised and original star-kind samples are identical in effective temperature, radius and luminosity, so the change in rate comes only from statistics. The cited paper says the opposite.

### F7 : The question is a union of conditions; unbundle before comparing numbers

Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."*

A rate of "rocky planets in the HZ" conjoins at least three conditions: composition/size, instellation, and host type. The review documents that changing the lower radius bound from 0.75 to 0.5 Earth radii can increase η⊕ by more than a factor of 2, and that conservative versus optimistic HZ boundaries shift it again. Two studies with different conjoined conditions are not measuring the same quantity even if both call it η⊕. The honest report is the table with the conditions as columns.

**Refuter:** show that two studies with different radius or HZ definitions return the same rate for the same reason, so the definitional axis is idle. The review's factor-of-2 result refutes that.

### F8 : The cost of being wrong is borne by mission design, so independence should be bought

Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

The NTRS record for Jenkins (SPIN 2024) states that η⊕ is a critical design input for HWO, that the baseline assumes about 0.24, and that current estimates vary widely. A wrong value changes the number of stars that must be observed to characterize a target sample, and therefore aperture, throughput and cost. That is a high cost, so multiple genuinely independent frames are worth buying: transit photometry (Kepler, TESS), radial velocity (HARPS), and eventually direct imaging. But a tier label, a mission baseline or a SAG13 consensus is a **filter for the budget** and must never be reported as the verdict of the ground.

**Refuter:** show that the mission-baseline value was selected by a measurement in the η⊕ regime rather than for design tractability. If it was, it stops being a filter and becomes admissible.

---

## 4. Triangulation ledger

| finding | figures (low-overlap where possible) | world source | status |
|---|---|---|---|
| F1 slot index | Fig 1 :19, :22 + Fig 13 :39 | Fernandes et al. 2025 (definitions differ by population) | **triangulated** across the slot rule and the overlap warning; world source corroborates |
| F2 number is a gap | Fig 13 :134 + Fig 6 :23 | review explicitly does not provide a new estimate | **triangulated**; no world conflict |
| F3 anchor is measurement | Fig 2 :29, :45 + Fig 7 :12-13 | review: no convergence after 2019 | **triangulated**: structural rule plus a different-domain observation |
| F4 zero is not absence | Fig 8 :39 + Fig 9 :44 + Fig 6 :34 | Bergsten et al. 2023 forward model with zero conservative detections | **triangulated**, single survey but two distinct figure routes |
| F5 shape not name | Fig 9 :32 + canonical README | HWO baseline as design assumption | **single-source** for the figure rule; world use only illustrates it |
| F6 overlapping bins | Fig 13 :39 | Bergsten et al. 2023 Gaia revisions | **triangulated**: figure warning plus an independent catalog result |
| F7 union of conditions | Fig 9 :54 | review: radius bound change gives factor > 2 | **triangulated** |
| F8 independence | Fig 2 :42 + Fig 9 :60 | NTRS Jenkins presentation, design cost | **triangulated** for the rule; the cost figure is single-source |

No verdict is averaged across domains. The world sources are secondary; they corroborate the shape but cannot supply the figure verdict, and a conflict would send the census back for re-census rather than flip the verdict.

---

## 5. Retraction and confirmation log

Corrections are kept visible. Nothing earlier is silently erased.

| earlier reading | status after re-census / canonical check |
|---|---|
| I first wrote that the figures imply η⊕ is roughly 0.24 because the HWO baseline assumes it. | **Retracted.** The figures contain no such number. The 0.24 is an engineering baseline imported from the mission-planning frame, a filter for the budget (Fig 9 :60), not a witness. No cell of the table is figure-filled. |
| I first treated the drop from the 2015 M-dwarf estimate (~24 percent) to the 2023 estimate (~8.6 percent) as a measurement revision within one bin. | **Retracted and replaced by F6.** Gaia revisions changed the bin membership (spectral type), so the two numbers are not two readings of one slot. The figure that governs is Fig 13 :39, not a statistical fluctuation claim. |
| I read "η⊕ is higher around M dwarfs" as an established trend and nearly used it to populate the table. | **Retracted.** Bergsten et al. (2023) find no evidence for an increase from FGK to M stars. Earlier ~3.5x factors came from close-in planets and were applied to the HZ by extrapolation. The figures never licensed that extrapolation (Fig 6 :28-31: inward and outward instruments are opposed, never read one against the other). |
| I called the zero HZ detections "evidence the rate is near zero." | **Retracted.** F4. Fig 8 :39. Completeness, not absence. |
| I initially framed the star kinds as an unordered list of examples. | **Narrowed by census.** D2 is a partition with a slot index; the list must be enumerated from catalogs (Fig 11 :48), not composed from the theory. |
| Apparent strain: Fig 1 :22 forbids aggregation, yet mission planning needs a single yield number. | **Not strained after re-census.** The yield number is a budget filter (Fig 9 :60), not a verdict and not the residual's slot value. Different quantities, so no contradiction. |
| Apparent strain: Fig 2 :29 says the anchor does not move, yet Gaia revisions moved the star kinds. | **Not strained.** The anchor is the measurement process (catalog plus instrument), which is exactly what moved when Gaia revised stellar parameters. A frame updated its instrument; the ground did not update on the frame's opinion. |

---

## 6. Pre-registered refuter

Written before the conclusion, per the standing rule that a falsifier written before the run is a design instrument.

The shape claim (per-slot, ground-settled, union-unbundled, number imported) is refuted if any of the following holds:

1. **Slot rule fails:** a single aggregate rate is shown to preserve all information needed for both mission design and a physical claim about star type. (Breaks Fig 1 :19, :22.)
2. **Anchor fails:** the accepted rate is shown to be fixed by consensus or a mission baseline rather than by a measurement that does not move when a frame pushes on it. (Breaks Fig 2 :29, :45.)
3. **Independence fails:** two sources offered as corroboration are shown to draw on one catalog and one pipeline, with no separate derivation recorded. (Breaks Fig 2 :31, :40.)
4. **Absence inference fails:** a HZ bin with zero detections is reported as a zero population while completeness in that bin is unmeasured or low. (Breaks Fig 8 :39.)
5. **Union fails:** two rates with different radius or HZ definitions are compared as if they were the same quantity. (Breaks Fig 9 :54.)

If any fires, withdraw the shape claim. Until one is run, no part of this may be labelled `grounded` on the strength of the derivation alone. The world numbers remain `grounded` **as reported by their authors**; this document is not their ground.

---

## 7. Recommendation

1. Report a **table**, never a lone number. Rows: FGK, early M, mid to late M, with the definitions as columns.
2. Attach the instrument and catalog to each cell (Fig 11 :48), and treat Gaia revisions as a new bin definition, not a footnote.
3. Keep "no detection" and "no planets" distinct in every cell (Fig 8 :39).
4. Buy independence across instruments (transit, RV, imaging), and record when two analyses share one evidence pool (Fig 2 :42, :40).
5. Use SAG13 or HWO baseline values only as budget filters, labelled as such (Fig 9 :60).
6. Send `08_expert_verification_packet.md`, not this audit, to the venues in `03_public_contact_points.csv`. Lead with the shape claim and the refuter; offer the links only after a verdict is recorded.

---

## 8. Canonical usage check

Two local canonical sources were read after sections 0 to 4 and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the central limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest. Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: SEARCHED, INWARD, OUTWARD are three distinct questions, and *"INWARD and OUTWARD are opposed; never read one against the other."* Step 7's Warning distinguishes underivable in principle from unreachable at this budget.

Applied here: the numeric rate is OUTWARD (import the measurement), not SEARCHED inside the figures and not INWARD (there is no instrument inside the figure set to sharpen). The `gap` verdict is therefore canonical, not an admission of failure. Fig 13 :134 makes that explicit.

### Confirmations after the check

| earlier item | status |
|---|---|
| F2 `gap` for the number | **Canonically confirmed.** The README's "shape, not a name" plus the step-7 OUTWARD rule. |
| F5 scope of "shape, not a name" | **Confirmed and narrowed.** The phrase governs a missing thing. Here the missing thing is a measurement, so the framework gives the form of the table, not a cell. |
| F8 filters not witnesses | **Confirmed.** Fig 9 :60 is explicit and the plan's section 2 repeats it. |
| Retractions in §5 | **Kept visible.** None of the four retracted readings is used anywhere in the findings. |

---

## 9. Summary verdict

**The figures settle the shape, not the number.** The shape: one occurrence rate per star-kind slot, each tied to a stated definition of rocky and of the habitable zone and to the instrument that measured it; a union of conditions unbundled into columns; no aggregate substituted for the slots; zero detections reported as non-detections, not absences; the number imported from measurements with provenance and its credible interval intact. **The numeric question is a `gap` from the figures**, filled only by the cited literature, and even there the estimates for Sun-like stars span roughly 0.05 to 0.6 with uncertainties that overlap. Strains after re-census: **none hidden**; the two apparent contradictions in §5 are dissolved by distinguishing a budget filter from a verdict and a moving instrument from a moving anchor. All claims here are simulated and internally consistent with the figures, not a ground reading.
