# Figure-grounded audit: could new early-universe physics shift the inferred expansion rate?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured for any specific answer to be settled. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): LLM output can simulate an approximate answer, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, the eight essays (three opened directly this session), and the world sources recorded in `10_source_ledger.csv`. Every figure quote below was re-read verbatim from the figure extract on 2026-11-23.

---

## 0. The residual in effect terms

The question is about an **inferred** quantity, not a directly read one. The early-universe route does not measure H0; it measures the angular acoustic scale θ_s = r_s / D_A and, under the ΛCDM library Γ and its assumptions b, inverts that into a sound horizon r_s, a distance to last scattering, and hence an H0. The late route (Cepheids plus Type Ia supernovae, TRGB, masers, strong lensing) obtains H0 more directly from distances and redshifts. The two disagree at roughly 5 to 6 sigma.

In formula terms, per slot s:

```
R_s = | Γ(b,a)_s - o'_s |
```

For the CMB fit, the global residual is near zero: ΛCDM fits the acoustic peaks extremely well. But the H0 slot is live. Fig 1 :13: *"a global R near zero with one live slot residual is a legal state."* Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* So the first derivative-first move is to refuse the framing "the CMB fit is good, therefore there is no residual." There is a residual, and it sits in one slot.

Stated in effect terms, R is: a model-dependent inference of H0 from pre-recombination physics disagrees with a less model-dependent local determination, while the fit that produces the inference is itself excellent. Arity: at least two conditions (the inference's closure, and the local calibration), plus possible measurement effects. Symmetry: asymmetric, because one side is a closure-dependent inversion and the other is a more direct distance measurement, so the two are not two readings of one quantity. Scale: the residual lives at the level of a derived parameter, one rung above the raw acoustic-scale measurement.

The sought-for shape, bound as an ordinary term before the run (Formula, "Direction"): a statement of what any early-universe import must do to the closure to move H0, plus an instrument that discriminates a genuine closure shift from a calibration or sampling effect. This shape is what the audit tests. It is not a model name.

---

## 1. Domain census

R by arity, symmetry and scale was given in section 0. One line per domain, with actors, currency and a nameable anchor. A domain with no nameable anchor is not yet a domain.

| domain | actors | currency | nameable anchor | question type |
|---|---|---|---|---|
| D1 Early-inference frame | photons, baryons, the sound horizon r_s, recombination, the ΛCDM library Γ and assumptions b | fit to the acoustic scale θ_s; inversion to r_s and H0 | the measured CMB power spectrum (Planck, ACT, SPT) | closure-dependent inference |
| D2 Late-measurement frame | Cepheids, Type Ia supernovae, TRGB hosts, masers, lensed quasars | distance and redshift; absolute magnitude calibration | published distance-ladder and lensing measurements (SH0ES, CCHP, H0LiCOW style) | more direct measurement, with its own calibration habitat |
| D3 New-physics import frame | proposed pre-recombination components or history changes (extra relativistic species, early dark energy, modified recombination, varying constants) | change in r_s or in the pre-recombination expansion history | none yet for any specific proposal; the frame is a source of candidate atoms, not an anchor | import into Γ |
| D4 Independent cross-check ground | BBN light-element abundances, BAO, large-scale structure, CMB lensing, sound-horizon-free H0 determinations | constraints that do not share the tuned sound-horizon degeneracy | BBN, BAO, DESI and CMB-lensing data sets | ground readings for any proposed import |

**Partition or union.** This is a **union compound**, not a partition. Fig 9 :55: *"a union of overlapping conditions, not a list of separate ones"*; Fig 9 :57: *"a case in two conditions is not a harder case of either."* Calibration systematics, closure-dependence, sample variance and genuinely new physics overlap. A single lever that clears one condition leaves the intersections standing. The world literature says the same thing in its own words: Di Valentino et al 2021 require *"a hypothesis with enough rigor to explain multiple observations--whether these invoke new physics, unexpected large-scale structures or multiple, unrelated errors."* The correct move is to unbundle before searching (Fig 9 :54), not to force one cause.

**Dependency order (Fig 3).** Describe R before choosing a frame (Fig 9 :27); sort by what is missing before minting (Formula step 2); settle D1 and D2 separately before comparing them; require any D3 import to pass D4 before it can be composed over. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Effort spent refining a model that fails an independent cross-check arrives at a step that cannot use it.

**Triangulation plan.** D3 is only a source of candidate imports, so its agreement with D1 is not evidence. Low-overlap frames are required: a sound-horizon-free determination in D4 does not draw on the r_s inference in D1, so D1 and D4 together can triangulate where D1 alone cannot (Fig 2 :31, Fig 8 :45).

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual is per slot; a live slot survives a near-zero global fit | the H0 slot is live even though the CMB fit is good |
| 2 The Ground | triangulation, anchor must not update, correlated agreement disqualified | local and early frames must each range against the ground; agreement cannot settle |
| 3 Dependency Chain | chain ordered by dependency, not importance | describe residual, then import, then cross-check |
| 4 The Membrane | round trip between scales carries a measurable gap R_T | a condensed shape is not the concrete model; measure what is dropped |
| 5 Mint Pipeline | three guards as a product; minimum-description-length bargain | a model that fits only the CMB and breaks BBN or BAO fails the bargain |
| 6 Closure / Reachability | import is the only operator that moves the wall; wrong atom costs more than primitives | new physics is a legitimate import, but it needs a source gate and a shadow test |
| 7 Room Chain | agreement compounds, evidence does not; no last room | many fitting models do not corroborate one another |
| 8 Union Surplus | two low-overlap frames reach what neither alone; residual first | D1 plus D4 triangulates; D1 plus another CMB fit is one pool |
| 9 Leave / Arrive | split a bundle; describe before looking; you get a kind of thing, never the answer | union compound; shape, not a named model; ground decides |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | keep the independent instruments reachable; lead with residual and refuter |
| 11 The Habitat | capability is agent-and-habitat; introduce, never subtract | new physics is introduced into a habitat it did not author; cross-checks inherit it |
| 12 The Bond | arrangements carry meaning; level-relative irreducibility | distinction between extending Γ and importing an atom into Γ |
| 13 Minimum Viable Set | set closed, arrangements open; unreachable is a verdict | importing is the only route to a genuinely new closure member |
| Operators table | ¬ is a refusal, not a subtraction | retracting a doomed model adds a term and lowers the reach; nothing is deleted |
| Symbols table | R is the aim; ground is the anchor | R is stated per slot in section 0, not inferred from a global fit |

Strained readings are named as such, not smoothed over (section 7).

---

## 3. Findings

### F1 - The H0 discrepancy is a single live slot, not a global fit failure (decisive for the residual)

Fig 1 :13: *"a global R near zero with one live slot residual is a legal state."*
Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Fig 1 :23: *"The ground enters as the only metric."*

ΛCDM's excellent fit to the CMB does not cancel the H0 slot. The question "could new physics shift the inferred expansion rate?" is therefore a question about one slot in a closure-dependent prediction. Any answer that begins "the standard model fits the data" has aggregated the signal away.

**Mode:** `general` (structural). **Refuter:** show that the H0 slot is not a separate residual but is fully determined by degrees of freedom already constrained at the ground, so that no live mass remains on that slot. **Status:** `triangulated` (Fig 1 plus the published tension values in the world sources, which are low overlap: framework structure versus measurement).

### F2 - This is a union compound, and splitting precedes searching

Fig 9 :4: *"are not one hard question but several well-formed ones. Split it rather than search."*
Fig 9 :55: *"a union of overlapping conditions, not a list of separate ones"*
Fig 9 :57: *"a case in two conditions is not a harder case of either."*
Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

Calibration error, closure-dependence, sample variance and new physics are overlapping conditions. The cosmologists' own review structure matches: Di Valentino et al 2021 classify proposals into early dark energy, late dark energy, extra relativistic degrees of freedom, interactions, modified gravity, modified recombination and alternatives, which is a union list, not a single lever.

**Mode:** `specified`. **Refuter:** demonstrate that one condition is sufficient, so the residual is a partition and a single lever closes it; then the unbundling instruction does not apply. **Status:** `triangulated` (Fig 9 plus Di Valentino et al 2021; low overlap).

### F3 - H0 inferred from the CMB is closure-dependent, so new physics is a wall-moving import

Fig 6 :14: *"the only operator that moves the wall"*
Fig 6 :22: *"NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."*
Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
Fig 8 :45: *"Two frames together reach what neither reaches alone."*

The early-inference frame holds a fixed r_s under ΛCDM. The measured acoustic scale θ_s is extremely precise, but r_s and the distance D_A can trade off as long as their ratio stays fixed. Adding a pre-recombination component that changes the expansion history changes r_s, which lets a higher H0 satisfy the same θ_s. In framework terms: H0 is reachable only within closure(Γ); a new-physics import expands the closure and makes a previously unreachable H0 reachable. So the answer to "could it?" is yes in principle, and the reason is structural, not a prediction of any named model.

**Mode:** `general` (the mechanism); `specified` when applied to r_s. **Refuter:** show that H0 is invariant under every allowed change of the pre-recombination closure, i.e. that the acoustic-scale degeneracy is broken by a theorem rather than by current data. **Status:** `triangulated` (Fig 6 and Fig 8 are distinct figures, plus the world result that reducing r_s is the standard early-universe lever, e.g. Cai and Wang 2026).

### F4 - An import must pass a source gate, a shadow test and the MDL bargain

Fig 6 :12: *"source gate: provenance"*
Fig 6 :13: *"shadow test: explains a gap"*
Fig 5 :43: *"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."*
Fig 5 :44: *"and so does a term that explains one occasion perfectly."*
Fig 6 :24: *"A wrong atom costs more than starting from primitives."*

An import that reduces the CMB-inferred tension but breaks BBN light abundances, BAO, CMB lensing or the S8 growth constraint has explained one occasion perfectly. It fails the bargain. The world literature records exactly this pattern: Khalife et al 2024 find that some models are ruled out at more than 3 sigma and that *"none of the models considered in this work is favored with enough statistical significance to become the next concordance model of Cosmology."* Cai and Wang 2026 state that an early-Universe resolution comes with *"necessitating modifications to both primordial and late Universe altogether."* Poulin, Smith and Karwal 2023 record the S8 and BOSS full-shape challenges to early dark energy.

**Mode:** `specified`. **Refuter:** exhibit an import that reduces the H0 slot residual and survives every independent ground reading without re-tuning, with provenance and a shadow test stated. That would confirm, not refute, the shape; the finding is refuted if the cross-checks are demonstrably irrelevant to the term's standing. **Status:** `triangulated` (Fig 5 plus three independent literature sources).

### F5 - Agreement among early-universe determinations is one evidence pool

Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*
Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*
Fig 8 :50: *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."*

Several CMB-based analyses agree because they consume the same acoustic-scale measurement under the same closure. That is the pool talking, not two frames confirming each other. What buys independence is a determination that does not use the sound horizon at all. Zaborowski et al 2024/2025 provide exactly that: a sound-horizon-free DESI measurement finding *"provides no evidence for new early-Universe physics (e.g. early dark energy)."* This does not conflict with the figure verdict, which is only a shape; it is the ground beginning to speak on the question the shape poses.

**Mode:** `specified`. **Refuter:** show a set of determinations that share no tuned atom yet are actually the same measurement relabelled, so the independence bought is illusory. **Status:** `triangulated` (Fig 2, Fig 8, and the DESI result; distinct evidence pools).

### F6 - The verdict is the ground's, not a vote of models

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*
Fig 9 :42: *"narrowing gets you close, the ground decides"*
Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*

The number of papers proposing early dark energy is not evidence for it. Kou and Lewis 2024/2025 write that *"none are currently well-motivated or preferred by data,"* while forecasting that future CMB experiments *"should detect almost any such modification at high significance."* That is the correct posture: the instrument, not the literature count, closes the slot.

**Mode:** `general` (structural), `specified` as applied to this literature. **Refuter:** a demonstration that a consensus of models, with no new measurement, has ever moved a cosmological parameter from candidate to grounded. **Status:** `triangulated` (Fig 2 and Fig 9 plus the two literature statements).

### F7 - When no term in Γ closes R, run SEARCHED, then INWARD and OUTWARD as opposed tracks

`THE_FORMULA.md` step 7 distinguishes three questions. Applied here:

- **SEARCHED (cheapest, asked first).** Is a viable term already in the ΛCDM closure and simply unfound? Most proposed extensions (extra N_eff, curvature, dynamical dark energy) are rearrangements of held atoms. Di Valentino et al 2021 report that many such extensions enlarge uncertainties rather than resolve the tension. The closure did not change; more of the space was visited.
- **INWARD (extend the instrument).** Fig 6 :29: *"inward: is our representation adequate to hold it? The instrument extends access."* Simons Observatory, CMB-S4, DESI, ACT and SPT are inward moves. Kou and Lewis forecast that these should detect almost any modification at high significance.
- **OUTWARD (import).** Fig 6 :30: *"outward: does another frame already hold it? The description travels."* Import pre-recombination physics from a frame whose closure differs, defined in effect terms: a component that contributes to H(z) before recombination and dilutes away, so that r_s shrinks.

Fig 6 :31: *"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."* Importing a new particle against a budget limit that is actually a representation limit adds an atom that was not needed (Fig 8 :40-43).

**Mode:** `general`. **Refuter:** show that one of the three questions is not distinct, so the ordering collapses. **Status:** `triangulated` (Formula step 7, Fig 6, Fig 8).

### F8 - The framework returns a shape, not a model name

Fig 9 :32: *"you get a kind of thing, never the answer itself"*
Fig 9 :30: *"your words are borrowed too, so describe the effect"*
Fig 13 :134: *"Unreachable is a verdict here, not a silence"*

So the deliverable is the effect description: a new atom that reduces r_s, passes independent cross-checks, and is refutable. The framework does not and cannot certify early dark energy, or any named model, as *the* answer. That requires a ground reading. Poulin et al 2023: *"While current data remain inconclusive on the existence of an EDE phase,"* next-generation experiments can settle it. That is a statement about an instrument, which is exactly the framework's stop.

**Mode:** `general`. **Refuter:** derive a specific model name from the six-term set alone. **Status:** `triangulated` (Fig 9, figures README, and the quartet of world review abstracts).

### F9 - Prestige and model count cannot fund a verdict

Fig 7 :13: *"agreement compounds, evidence does not"*
Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*
Fig 10 :24: *"the ground does not decay, the channel does"*

A list of well-known proponents, or a long citation chain in which each review cites the last, is Fig 7's mirror chain. The outreach artifacts therefore ask a checker what would refute the shape before showing any theory (Fig 10 :52, *"Bring a characterised residual, never the source."*).

**Mode:** `general`. **Refuter:** a case where a chain of agreeing frames added ground contact rather than vocabulary. **Status:** `triangulated` (Fig 7, Fig 10, and the Recursive Self-Improvement Trap essay).

### F10 - The condensation carries a round-trip gap R_T

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

The shape in this folder is a lossy condensation of the figures. Sending it up as "new physics can shift the inferred H0 by changing the closure" and bringing it back down as "early dark energy is the answer" drops at least three constraints: the union-compound split (F2), the source gate and shadow test (F4), and the requirement that the ground, not model count, decides (F6). R_T is nonzero and is recorded in `11_audit.md`. Treating the formula as identical to the figures would set R_T to zero, which is the dead-reckoning error Fig 4 names.

**Mode:** `general`. **Refuter:** a condensation of the figures into the shape that loses nothing, checkable by comparing the two direction by direction. **Status:** `triangulated` (Fig 4 and the Symbols table definition of R_T).

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. The H0 slot ceases to be live under improved calibration on both sides, e.g. the disagreement falls below 3 sigma with no residual left to explain (kills F1's motivation).
2. A sound-horizon-free H0 determination that does not share D1's closure converges on the same value as the CMB-under-ΛCDM inference and disagrees with the local ladder, so no import is owed to the early-universe closure (kills F3's application).
3. Every proposed import that reduces r_s is excluded at high significance by an independent ground reading (BBN, BAO, LSS, lensing), and the exclusion is shown to be generic to the class and not a tuning failure of individual models (kills F4 as a live route).
4. The acoustic-scale degeneracy is broken by a theorem, so H0 is invariant under all allowed pre-recombination closure changes (kills F3 as a mechanism).
5. The discrepancy is localised to a single systematic in one instrument, so the union dissolves into a partition and the unbundling instruction is inapplicable (kills F2's application).

If one fires, the shape is withdrawn or narrowed and the retraction is recorded here, not silently erased. Until one is run, nothing in this folder may be labelled `grounded`.

---

## 5. Recommendation

1. Keep D1 and D2 verdicts separate; do not average a model-dependent inference with a direct measurement (F1, Fig 1).
2. Unbundle before searching: calibration, closure-dependence and new physics are overlapping conditions (F2, Fig 9).
3. State the mechanism, not a model: an import that reduces r_s moves the wall; the framework returns a shape (F3, F8).
4. Require a source gate, a shadow test and survival of BBN, BAO, LSS and lensing before any import is composed over (F4, Fig 5, Fig 6).
5. Buy independence with sound-horizon-free determinations, not with more CMB fits (F5, Fig 2).
6. Let instruments close the slot (F6, F7); do not let model counts or prestige do it (F9).
7. Measure R_T rather than assuming the condensed shape is the figures (F10, Fig 4).

---

## 6. Canonical usage check

Read after the first five sections, per the template:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* The canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"* and stops at the limit of the instruments, recording the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md` step 7 and "Direction": make the sought-for shape an ordinary term; keep SEARCHED, INWARD and OUTWARD distinct; a gate is not the ground.

Consequences for this folder: the phrase "new physics could shift the inferred rate" is allowed only as a `general`/`specified` shape about closure-dependence, never as an endorsement of a model. The word "unreachable" would apply only after a genuine re-census; here the target is reachable in principle by import, just not settled, so the honest status is `candidate`.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "the CMB fit is good, so there is no residual" | **Refused.** Fig 1 :13, :19 make the live slot legal; this was the starting wrong frame, not a later finding. |
| "new physics is the explanation of the tension" | **Refused.** The framework returns a shape, not a name (Fig 9 :32, figures README). No model is endorsed. |
| F3 called "new physics moves the wall" | **Confirmed with narrowing.** It moves the wall only as an import with provenance and a shadow test (Fig 6 :12-14). Extending Γ by rearranging held atoms is SEARCHED, not IMPORT. |
| F5 called DESI "conflicting" | **Retracted as a conflict.** The DESI statement bears on a specific model class, not on the shape verdict; the conflict rule was not triggered. It is ground corroboration of "not settled." |
| F7's three questions | **Confirmed and kept distinct.** Importing against a representation limit would add an unneeded atom (Fig 8 :40-43). |
| Apparent strain: "ground decides" versus "could new physics shift it" | **Not strained.** Re-census: the first governs settlement of a specific term; the second governs reachability in principle. Different quantities. |
| Apparent strain: union compound versus a single r_s lever | **Not strained after re-census.** The lever addresses the sound-horizon condition; the other conditions (calibration, growth) bind separately. |

---

## 7. Strains, re-census and honest stop

- **Strain, named not hidden:** the framework's import language says IMPORT adds an atom, while most proposed early-universe extensions (extra N_eff, curvature) are rearrangements of quantities already in the cosmological library. Re-census: those belong to SEARCHED, not OUTWARD. Only a genuinely new primitive or interaction is an import. `06_isomers_and_order.md` works this distinction.
- **Strain, named not hidden:** a sound-horizon-free determination is still model-dependent at some level (it uses the transfer function). Re-census: independence is relative (Fig 2 :31), not absolute. The determination is lower overlap than an acoustic-scale fit, which is what buys it weight, not zero dependence.
- **After re-census: two strains, both named, none hidden.**

**Honest stop.** This is a `specified`, ungrounded result. The shape survives: H0 is closure-dependent, an import that changes the pre-recombination expansion history can move it, any viable import must pass independent ground readings, and instruments not model counts decide. What does not survive is any model name. The answer stops at the limit of what current instruments distinguish and records the lineage so the stop is checkable. *"Unreachable is a verdict here, not a silence"* applies only if a re-census showed no import could close the slot; it does not. Here the verdict is `candidate`, awaiting a ground reading.
