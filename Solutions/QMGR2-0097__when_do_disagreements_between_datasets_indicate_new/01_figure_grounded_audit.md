# Figure-grounded audit: when does a dataset disagreement mean new physics?

**Mode of this document: `general` on the decision-procedure shape, `specified` on the mapping to physics-statistics practice. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the web sources recorded in `10_source_ledger.csv`. Every figure quote below is taken verbatim from the local extract and cited `Fig N :line`.

---

## 0. The residual under audit

**Question in effect terms.** Two datasets D1 and D2 report values for what is taken to be the same quantity. They differ by an amount Δ that exceeds the quoted uncertainties. The shared prediction Γ says what should have been observed; the two observations are o′₁ and o′₂. The residual is the gap between prediction and observation, but here it arrives **twice**, once per frame. The question asks: what is owed when two frames disagree?

Options and what each leads to:

- **Option A, new physics.** A term is owed. The gap is underivable in the current closure, so a mint or import is required (Formula steps 3 and 7). Leads to: a new atom, a new composition, a claim about the ground.
- **Option B, underestimated errors.** What is owed is a refit, a better instrument, a split of the question, or a refusal of a held assumption. Leads to: no new atom, a corrected channel, a re-description of the residual.

**Binding the sought-for shape as an ordinary term.** Formula "Direction" says a frame cannot check its own question's direction, because the shape searched for is not a term it holds. The remedy is a discipline: write down what an answer would look like and let it accrue a residual. So the sought-for object is bound here as **`the sort rule`**: a procedure that assigns a disagreement to a figure bin, states a refuter for the assignment, and names the ground that would settle it. If `the sort rule` fails any test in §4, the preference is refused like any other term.

Note what the question is **not** asking. It is not asking for a new number to replace 5σ. A significance threshold is a convention: *"a convention that decides an outcome has stopped being one"* (Fig 10 :47). The figures do not license any numeric cut, and world practice agrees (Lyons 2013, read 2026-11-23: *"far too blunt a tool for dealing with issues such as the Look Elsewhere Effect, the plausibility of the searched-for effect, the role of systematics"*).

---

## 1. Domain census

**R by arity, symmetry, scale.** Arity: two observations of one quantity, so the residual has two slots, not one. Symmetry: the roles of D1 and D2 are symmetric until an anchor is named; swapping them changes no conclusion, which is why an unanchored pair drifts (Fig 2, collapse 1). Scale: first order inside each dataset's own analysis, second order at their comparison. Fig 9 :4-5 names the first question to ask of such a residual: *"Disagreements that do not shrink with effort"* ... *"are not one hard question but several well-formed ones. Split it rather than search."*

**One line per domain: actors, currency, anchor. A domain with no nameable anchor is not yet a domain.**

- **Domain 1, the two datasets as frames.** Actors: instruments, analyses, calibration chains, the reports. Currency: measurements plus quoted uncertainties. Anchor: the ground, the true value of the quantity, which must not move when either frame is pushed. Question type: **partition or union?** Two frames that share calibration, theory inputs, analysis code, or a parent dataset are one frame wearing two names (Fig 2 :18-21). Two instruments pointed at the same thing are two frames (Fig 2 :31). The two causes (shared pool and genuine disagreement) are overlapping conditions, so the compound is a **union**, not a partition of σ into "new" and "error".
- **Domain 2, the residual-sorting frame.** Actors: the prediction Γ, the observation o′, the residual bins. Currency: support, reach, novelty and settlement. Anchor: the ground, which settles a minted term; a gate is not the ground. Question type: a **sort** into Fig 5's bins, not a scalar magnitude.
- **Domain 3, the instrument and ground-maintainer frame.** Actors: detectors, clocks, cables, foreground models, analysis pipelines. Currency: resolution and contact with the ground. Anchor: the ground, which does not decay while the channel does (Fig 10 :24). Question type: **reachability**, inward (extend the instrument) versus outward (find another frame).

**Partition or union, explicitly.** The outcomes "new physics" and "underestimated errors" do not partition the space of disagreements. A shared evidence pool, a subset structure, a decayed channel and a genuine missing term can all be present in one discrepancy, and a single lever clears only the region where one condition holds (Fig 9 :55). The answer must be a sort with separate verdicts, never an averaged probability.

**Dependency order (Fig 3).** Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces."* The sort rule's links are:

1. Is the anchor nameable and unmoved? (else there is no domain yet)
2. Are the two frames independent, or one evidence pool?
3. Is there a fact here, or does the discrepancy fail to shrink and split by subset?
4. Is the residual live per slot, or an artifact of aggregation?
5. Which Fig 5 bin does it fall into?
6. Is it unreachable-at-budget or underivable? (more search versus a new atom)
7. Does a new term pay the bargain, and can the ground settle it?

Optimising step 7 cannot rescue a broken step 2. Effort spent above the break arrives at a step that cannot use it (Fig 3 :19-20).

---

## 2. Figure census (before concluding)

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per slot, never aggregated; a global near-zero R with one live slot is legal | aggregation hides or manufactures discrepancies; no verdict from a pooled mean |
| **2 The Ground** | independence, common cause, anchor must not update | independence, not σ, decides whether a disagreement bears on the ground |
| **3 Dependency Chain** | ordered by dependency; a reading below the break is nothing | the sort rule must be run in order; a p-value cannot rescue a broken channel |
| **4 The Membrane** | only methods cross up; round trip gap | a combined report is a recording, not a second witness; measure `R_T` |
| **5 Mint Pipeline** | five bins, three guards as product, MDL bargain | the decision procedure is the five-bin sort plus the bargain |
| **6 Closure / Reachability** | import is the only wall-mover; instruments improved from worse ones | new physics needs an import with provenance; errors need a better instrument |
| **7 Room Chain** | agreement compounds, evidence does not | more datasets in the same pool do not settle the disagreement |
| **8 Union Surplus** | low overlap, underivable versus unreachable-at-budget, convergence | the decisive distinction; a wrong atom costs more than more search |
| **9 Leave / Arrive** | is there a fact here? split; describe before looking; filters not witnesses | first question is "split it"; σ is a filter, not a witness |
| **10 Ground Maintainer** | ground does not decay, channel does; you have lost touch | a drifted dataset is a lost channel, not changed physics |
| **11 The Habitat** | contact cascades; capability is agent-and-habitat | an anomaly three steps out is invisible to first-order scoping |
| **12 The Bond** | arrangement carries information; priced bonds; isomer | two equal readings can have different sources (metamerism) |
| **13 Minimum Viable Set** | unreachable is a verdict; a shape, not a name | the figures return the procedure's shape, not the name of a specific cause |
| **Operators table** | negation refuses a held term | a refusal bin exists; the vocabulary can carry a correction |
| **Symbols table** | R is per slot and is the aim; the ground is the anchor | restates the per-slot and anchor constraints |

Strained readings are named and re-censused in §6, not smoothed over.

---

## 3. Findings

### F1 - The either/or is a sort with five bins, not a two-way split (decisive)

Fig 5 :11-14:

> **"held: the model was right, nothing owed"**
> **"new: extend perception, aim the probe here"**
> **"mis-attached: refit what you have, do not invent"**
> **"mechanism broken: a new term is owed"**

And the amendment in Fig 5 :53:

> **"refuted: a term we hold is wrong; a term is owed that says so"**

The four original kinds sort a gap by **what is missing**; the fifth sorts it by **what is wrong**. This matters directly. Underestimated errors are not one thing: an unmodelled foreground is *mis-attached* (refit what you have); a loose cable is a *held* term that was wrong about its own precision and becomes *refuted*; a genuinely new particle is *mechanism broken* (a term is owed). "New physics versus underestimated errors" collapses three distinct bins into one side and two into the other. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*

**Strain test.** I first tried to map "new physics" to Fig 5 :12 (*"new: extend perception, aim the probe here"*). That failed: the "new" bin extends perception and adds **no atom** (Fig 6 :22, *"NOVEL means novel relative to atoms, not to the world."*). A genuine new-physics claim needs a mint, so it belongs to :14 and possibly :53. The strain sent me back to the census; the mapping is corrected here and preserved.

### F2 - Independence, not the σ value, decides whether a disagreement carries ground information

Fig 2 :18-21 describes the collapse:

> **"one evidence pool"**
> **"they never talk, and still agree"**
> **"so the agreement is the pool talking,"**
> **"not two frames confirming each other"**

Fig 2 :31:

> **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."**

Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool."* Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

A 6σ discrepancy between two analyses of the same beam, sharing the same clock reconstruction, is one frame reporting twice. A 3σ discrepancy between a muonic measurement and an electron measurement, with different systematics and different theory inputs, is two frames and carries information. The figures' independence test is qualitative and prior to any p-value. World corroboration: OPERA's internal replication agreed with its own main analysis while an independent frame (ICARUS, and the SN 1987A bound) did not (Wikipedia, 2011 OPERA anomaly, read 2026-11-23).

**Verdict: triangulated** across Fig 2 and Fig 8 :47 (*"Independence is one quantity read twice."*) with low overlap between the two routes.

### F3 - First ask whether there is a fact here; if the gap will not shrink and splits by subset, split it

Fig 9 :4-5:

> **"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset,"**
> **"are not one hard question but several well-formed ones. Split it rather than search."**

This is the figure line closest to the question. A disagreement that persists while each analysis keeps working well on its own subset is not one hard measurement of one quantity. It is several well-formed questions that have been averaged together. The remedy is a split, which is an underestimated-error outcome (the model of "one quantity" was wrong), not a new atom. BICEP2 is the world instance: the 7σ B-mode claim (*"7 sigma (5.9σ after foreground subtraction)"*, Wikipedia, BICEP and Keck Array, read 2026-11-23) split into a cosmological component and a Galactic dust component when Planck's dust map was added, and *"the signal can be entirely attributed to dust in the Milky Way."*

Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*

### F4 - The residual is per slot; pooling creates and hides discrepancies

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :20: **"a global residual near zero with one live slot is a legal state"**. Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

Two consequences, one for each failure mode:

1. A combined fit can be globally excellent while one experiment, channel or mass bin carries a live discrepancy. Averaging is how a real signal disappears.
2. A pooled "discrepancy" can be manufactured by combining incompatible slots. The reported Δ then measures the pooling, not the ground.

Formula step 2 asks *"WHICH TERM"* by ranking residuals that *"PERSISTS AND DOES NOT TREND DOWN"*. That test only works per slot. Lyons 2013 makes the same point in experimental language: *"a nσ effect in an analysis where the statistical errors are dominant may be more convincing that one where the nσ claim is dominated by systematics errors."*

### F5 - Underivable versus unreachable-at-budget is the precise form of the question

Fig 8 :40-42:

> **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions. Underivable: go outside. Unreachable-at-budget: the term is"**
> **"already in the closure and was not found, so the remedy is more search, not another atom."**

Fig 8 :32: **"no search, however long, adds an atom."** Fig 6 :24: **"A wrong atom costs more than starting from primitives."**

This is the sharpest figure statement of the answer:

- **Underestimated errors** correspond to unreachable-at-budget. The explanation is already in the closure (a calibration term, a foreground model, a subset split, a known systematic). The remedy is more search, a better instrument, or a refit. Importing a new particle here adds an atom that was not needed.
- **New physics** corresponds to underivable. No arrangement of the held atoms predicts the observed shape. A term must be imported from a frame whose closure differs (Fig 6 :23), with provenance and a shadow test.

The two look the same from inside the frame (Fig 8 :40, Fig 6 :27). That is why a single σ cannot distinguish them.

### F6 - A new-physics term must pay the bargain; the error hypothesis is the competitor

Fig 5 :42: **"The acceptance test is a bargain, not a threshold."** Fig 5 :43:

> **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."**

Fig 5 :33: **"The three guards are a product, not a checklist."** Fig 5 :41: **"Any one of them at zero stops the mint entirely."**

A new-physics term must beat the error hypothesis on description length and leftover residual, and it needs support (live mass on some slot), reachability (composes from what is held) and novelty (not already in the library). A term that explains one occasion perfectly fails the bargain (Fig 5 :43-44). Lyons 2013 records the operational version: *"a 5σ claim should be reduced to merely 2.5σ if the systematic uncertainties had been underestimated by a factor of 2"*, and recommends asking by how much the systematics must be inflated to reduce the significance. That is a comparison of two explanations, exactly the bargain, expressed in σ.

### F7 - The channel decays, not the ground

Fig 10 :24: **"the ground does not decay, the channel does"**. Fig 10 :25-26 names the failure modes: *"stale percepts, dropped transients,"* *"saturated metrics, pooled readings"*. Fig 10 :28: **"you have lost touch"**. Fig 10 :29: **"keep the anchor reachable"**.

A dataset can drift away from the ground through a loose cable, an unstable clock, an unmodelled foreground, or a saturated metric. In OPERA the cause was, in the source's words, *"A link from a GPS receiver to the OPERA master clock was loose"*, and the final difference was *"approximately 6.5 ± 15 ns"*, consistent with no difference. The physics did not change; the channel did. Lyons 2013 anticipated the structure: *"if an experiment seemed to show that neutrinos travel faster than light, we might well have a tendency to believe that there was some undiscovered systematic, rather than that neutrinos were a potential source for violating causality."*

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** A dataset whose reported value moves when the analysis is pushed is not an anchor.

### F8 - Settlement needs an independent frame or a better instrument, not more of the same

Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** Fig 6 :34: **"It is whether anything, at any resolution, is already returning something that fails to resolve."**

Fig 8 :39: **"a search that finds nothing is never a proof of absence."** Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**

The proton radius puzzle is the worked world case. Pohl et al. 2010 reported a value that *"differs by 5.0 standard deviations from the CODATA value"* and concluded that *"either the Rydberg constant has to be shifted"* or *"the calculations of the QED effects in atomic hydrogen or muonic hydrogen atoms are insufficient."* Notice the form: both offered resolutions are in-closure corrections, so the puzzle was initially an unreachable-at-budget discrepancy, not a minted particle. Antognini et al. 2011 put it plainly: *"The observed discrepancy therefore indicates that a problem exists in at least one of the experiments or theory used to extract the radii."* Resolution came from new independent instruments and re-analyses, not from more σ on the same average.

### F9 - σ is a filter for the budget, never a witness for the verdict

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."**

A significance value allocates attention: which discrepancies get a reanalysis, which get a new instrument. It does not decide what they mean. Fig 2 :41 states the convention rule directly: *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"*. The 5σ convention is useful for organizing a collaboration; it is not a ground. Benjamin et al. 2018, in a different field, made the same structural point about thresholds: *"We propose to change the default P-value threshold for statistical significance from 0.05 to 0.005 for claims of new discoveries."* A threshold that a community can simply vote to change is a convention.

### F10 - What the figures do not give: the name of the cause in a particular case

Fig 9 :32: **"you get a kind of thing, never the answer itself"**. Fig 9 :42: **"narrowing gets you close, the ground decides"**. Fig 13 :134: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

The figures return the shape of `the sort rule`. They do not return, for a given real disagreement, "this one is new physics" or "this one is an error". That requires a ground reading: a reanalysis with an independent frame, a discriminating instrument, or a source-level measurement. This is a declared **gap of the unreachable-at-this-budget kind**, not underivable in principle. It is recorded as a verdict, not a silence.

---

## 4. Pre-registered refuter

Required before any outreach. The shape claim is refuted if any of the following holds:

1. **Bins not exhaustive.** A dataset-disagreement outcome is exhibited that is not closed by Fig 5's five bins (held, new, mis-attached, mechanism-broken, refuted) together with Fig 9's split rule. That breaks the sort rule itself.
2. **Independence is the wrong quantity.** A case is shown where two frames with genuinely disjoint evidence and instrumentation disagree in a way that carries zero ground information, and the figures supply no resource to tell this from a real disagreement. That breaks F2.
3. **A threshold is a witness.** A derivation from the figures yields a numeric significance cut that settles the verdict without a ground reading. That breaks F9 and the convention rule at Fig 10 :47.
4. **Channel decay is not a category.** A case is shown where the ground demonstrably moved and the channel is intact, but the figures force a "lost touch" reading. That breaks F7.
5. **Bargain fails.** A new-physics term pays the Fig 5 :43 bargain against a held error hypothesis without an import from a differing closure, with its provenance recorded. That breaks F5 and Fig 6 :23.

If any fires, the shape is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation: the sort rule, in dependency order

1. **Name the anchor.** Is there a quantity that does not move when either dataset is pushed? If not, there is no domain yet (Fig 2 :29).
2. **Test independence before significance.** Do the datasets share calibration, theory inputs, code, or a parent sample? If so, their agreement or disagreement is the pool talking (Fig 2 :18-21, :31).
3. **Ask whether there is a fact here.** Does the gap shrink with effort? Does each analysis work on a different subset? If so, split it (Fig 9 :4-5). This is an error outcome.
4. **Keep the residual per slot.** Never decide from a pooled mean (Fig 1 :19, :22).
5. **Sort into the five bins.** Held, new, mis-attached, mechanism-broken, refuted (Fig 5 :11-14, :53). Mis-attached and refuted are the error family; mechanism-broken is the new-physics family; "new" only extends perception.
6. **Ask underivable or unreachable-at-budget** (Fig 8 :40-42). More search and a better instrument first; an import only when the shape is not in the closure. A wrong atom costs more (Fig 6 :24).
7. **Run the bargain and the guards as a product** (Fig 5 :33, :41-43). The new-physics term must beat the error hypothesis on cost plus leftover residual.
8. **Settle with the ground, through an independent frame** (Fig 2 :35, Fig 8 :47, Fig 6 :32). Record provenance. Do not pool later agreement as corroboration.
9. **Record the stop.** If nothing settles it, say unreachable and name what would reverse it (Fig 13 :134, Fig 8 :39).

---

## 6. Canonical usage check and retraction log

Two sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework reports *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: steps 1 to 8, the mode rule, and the SEARCHED / INWARD / OUTWARD split at step 7. SEARCHED is asked first because it is cheapest; INWARD and OUTWARD are never read against each other.

### Retractions and confirmations of my own earlier readings

| earlier reading | status after the canonical check |
|---|---|
| "new physics = the `new` bin of Fig 5" | **Retracted and replaced.** Fig 5 :12 extends perception and adds no atom (Fig 6 :22). New physics maps to mechanism-broken (:14) and, for a refused held term, refuted (:53). Kept visible in F1's strain test. |
| "the question is a partition into new physics and error" | **Retracted.** Fig 9 :55 makes it a union of overlapping conditions; σ is a filter (Fig 9 :60). The sort rule replaces the split. |
| "a 5σ cut is the operational answer" | **Retracted.** Fig 10 :47 calls a convention that decides an outcome no longer a convention. Lyons 2013 and Benjamin et al. 2018 corroborate that thresholds are conventions. |
| "the figures can name the cause of a real discrepancy" | **Refused, not merely unsupported.** Fig 9 :32 and Fig 13 :134 bound the claim to a shape. Declared gap in F10. |
| F5 underivable/unreachable mapping | **Canonically confirmed.** Formula step 7 separates SEARCHED, INWARD and OUTWARD and warns that importing against a budget limit adds an unneeded atom. |
| F3 split rule | **Canonically confirmed.** The figures README's no-final-room rule and Fig 9 :4-5 together forbid treating a stubborn multi-subset gap as one terminal question. |

### Strains, all named and re-censused

- **S1, Fig 5 four bins versus the fifth kind.** Resolved by the amendment at Fig 5 :50-56: the first four sort by what is missing, the fifth by what is wrong. Different sort key, no contradiction. The Operators table's negation is the required operator.
- **S2, Fig 1 per-slot residual versus a discrepancy defined on a difference of two datasets.** Re-census: the two datasets are two slots of R, and their comparison is a second-order slot. Per-slot indexing still applies; no strain after re-census.
- **S3, Fig 8 convergence versus adopted import.** Two frames can hold the same atom by separate derivation (Fig 8 :50). A proton-radius value reached by electron and muon routes is corroboration at maximum independence only if the routes genuinely differ in evidence; a re-analysis of the same data is not. Recorded, not hidden.
- **S4, the world's "5σ" language versus the figures' no-threshold rule.** Different objects: σ is a budget filter in the world, a convention in the figures. Re-census dissolves it; F9 keeps both readings separate.
- **After re-census: one live limit (F10, the unnameable cause), no hidden strains.**

---

## 7. Updated verdict

The shape survives. A dataset disagreement is sorted, not measured into a binary. The rule is: check the anchor, check independence, ask whether there is a fact and split if there is not, keep the residual per slot, assign one of the five bins, separate underivable from unreachable-at-budget, make the new-physics term pay the MDL bargain, and settle only through an independent frame or a better instrument. Under this rule, "new physics" means a term is owed from a differing closure, and "underestimated errors" means the fix is already in the closure and needs search, refit, refusal, or instrument work rather than a new atom.

The specific assignment of any real disagreement is `gap` at the ground, of the unreachable-at-this-budget kind. This is a `general` shape with `specified` mappings, simulated and ungrounded. It cannot settle which real anomaly is which.
