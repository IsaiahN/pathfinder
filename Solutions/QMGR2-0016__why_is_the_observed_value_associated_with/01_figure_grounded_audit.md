# Figure-grounded audit: why the observed dark-energy value is so small

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."* and *"Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session, cited as `Fig N :line`. Canonical usage is `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources were opened on 2026-11-23 and are listed in `10_source_ledger.csv`; all were fetched directly and quoted from the pages as returned.

---

## 0. The question under audit

> **Question (QM & GR Questions.txt line 157, section B):** Why is the observed value associated with dark energy so small compared with some theoretical estimates?
>
> **Bound sought-for shape (Formula, "Direction"):** a four-part shape, (i) which side of the gap is the anchor, (ii) how many conditions the question bundles, (iii) what the cross-scale transform drops, (iv) which instrument would discriminate the candidate sources. This shape is written down before the run so it can accrue a residual like any other term.

The reader should note what the question does *not* ask. It does not ask for the numerical value of Lambda, which is a measurement reported elsewhere. It asks *why* the observed value is small relative to an estimate. In effect terms, "why so small" is a demand for a correction to the prediction side of a residual, or for a demonstration that the prediction and the observation are not the same quantity measured at the same scale. The figures decide which of those two moves is licensed. They do not supply a number.

---

## 1. Residual in effect terms

`R = |Gamma(b,a) - o'|`, per slot (Symbols table, R).

- **Gamma(b,a), the prediction.** A quantum field theory computation of the vacuum energy density. World reports put it between roughly 50 and 122 orders of magnitude above the observed value depending on the regulator: *"between 50 and as many as 122 orders of magnitude greater than has actually been observed"* (Wikipedia, Cosmological constant problem, fetched 2026-11-23). Martin's technical review notes that *"the properly renormalized value of the zero-point energy density today (for a free theory) is in fact far from being 122 orders of magnitude larger than the critical energy density, as often quoted in the literature"* (arXiv:1205.3365). The prediction is therefore not one number; it is a family indexed by a regulator.
- **o-prime, the observation.** The cosmological constant inferred from supernovae, the cosmic microwave background, baryon acoustic oscillations and lensing. Wikipedia reports Lambda of order 10^-52 m^-2 or 10^-122 in Planck units, with *"the values predicted exceeding observation by some 120 orders of magnitude"* described as *"the worst theoretical prediction in the history of physics"* (Wikipedia, Cosmological constant).
- **Slots, not one global number.** Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** The slots here are the distinct contributions: each quantum field, each phase transition (electroweak, QCD), each regulator choice, and the separately measured expansion probes. The headline "120 orders" is an aggregate.
- **Boundary diff.** The gap is not a single novel quantity; it is where an existing prediction misses an existing observation by an impossible margin. That puts it in the BROKEN family of Formula step 2, not the NOVEL family, and the first question owed is which term is wrong, not what new term to mint.

The figures are asked to govern the *shape of the correction*, not the physics value.

---

## 2. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.** Arity: at least two conditions, a UV construction and an IR measurement, with a regulator as a hidden third index. Symmetry: the comparison is a threshold relation between quantities with the same dimensions but from closures that differ, not a symmetric join of two operands in one frame. Scale: the two returns are separated by the entire UV-to-IR span, roughly 30 orders in energy and 120 in density, so the comparison is a cross-scale transform, not a same-level subtraction.

One line per domain, giving actors, currency and anchor. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1, QFT vacuum frame | fields, zero-point modes, cutoff or regulator, renormalisation counterterm | energy density in the theory's own units | particle-physics experiment (Casimir, Lamb shift, collider constraints on the fields) | yes, but only for the fields and their interactions, not for the absolute vacuum level |
| D2, cosmological frame | metric, Lambda, expansion history, supernovae, CMB, BAO, lensing | distance, redshift, Hubble rate, inferred energy density | the observations themselves, plus standard rulers and candles | yes, the ground for the observed value |
| D3, the cross-scale translation | the two closures above, the binding "vacuum energy gravitates as Lambda", the regulator index | the round trip from UV prediction to IR reading and back | the measured Lambda, which does not update when a frame re-describes it | yes, the observed value is the anchor for the translation |
| D4, the verification frame | expert readers, competing mechanisms, instruments still to come | residuals and agreement | the ground, never agreement | yes, but in this simulated run all four domains draw on one evidence pool, so its independence is zero |

**Partition or union.** D1 and D2 are different closures of the same world; their join is a **union**, not a partition. Applying one lever (for example, renormalising the vacuum to zero) clears the region where only D1's condition holds and leaves the intersection, where the observed nonzero value still binds (Fig 9 :54-58). The regulator index runs inside D1, so D1 itself is a family of frames, not one frame. Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** Fig 9 :57: **"a case in two conditions is not a harder case of either"**; it is a specific compound with its own loop.

**Dependency order (Fig 3).** Fig 3 :20: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."** The order here is: first identify the anchor (D2), then characterise the residual per slot (D1 family), then measure what the cross-scale translation drops (D3), then seek an outside frame only if no inside composition closes it (D4). Effort spent proposing mechanisms before the anchor is fixed lands on a step that cannot use it.

**Strain test applied before conclusion.** Fig 6 :29 gives the inward instrument, *"Sharpen in our own terms"*; Fig 6 :30 gives the outward instrument, *"Cast it in effect terms"*. A reading that uses Fig 4's lossy transform to explain the numerical gap and also uses Fig 6's import to explain the same gap strains the two figures against each other. Re-census resolves it: Fig 4 governs the *translation* between an already-held UV description and an already-held IR reading; Fig 6 governs the *acquisition* of an atom from a frame with a different closure. Different quantities. Both are recorded; neither is smoothed away.

---

## 3. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified; ground is the only metric | D2 is the anchor, D1's estimate is frame-internal |
| 2 The Ground | anchor must not update; independence; correlation disqualifies a verdict | the observed value cannot be moved by a re-description; the estimate can |
| 3 Dependency Chain | order by dependency; a link with no instrument is not a link that works | fix the anchor before proposing mechanisms |
| 4 The Membrane | cross-scale transform is lossy; measure the round-trip gap | the headline gap is a cross-scale projection, not a same-level mismatch |
| 5 Mint Pipeline | MDL bargain; a term that explains everything by saying nothing fails | frame-first "any value is possible" accounts fail the bargain |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | no inside frame supplies the missing cancellation; the observing instruments already return readings |
| 7 Room Chain | a room's agreement is variation, not a verdict | readership cannot settle the value |
| 8 Union Surplus | closure is idempotent; a search that finds nothing is not a proof of absence; residual first, frame second | two frames have a surplus, but it is mute until the residual is described |
| 9 Leave / Arrive | split a non-shrinking disagreement; unbundle a union; describe before looking; filters are not witnesses | the question is a union compound and must be split before a frame is chosen |
| 10 Ground Maintainer | bring a characterised residual; verifier non-access; declare stakes | outreach leads with the residual and the refuter |
| 11 The Habitat | enumerate the habitat; capability is agent-and-habitat | list the actors in contact with the residual rather than inventing a mechanism |
| 12 The Bond | a comparison is a threshold relation; isomer and functional group | the regulator-indexed estimates share a functional group, not one value |
| 13 Minimum Viable Set | the set is closed, the arrangements are not; unreachable is a verdict | no seventh primitive or new number is owed to the figure set |
| Operators table | comparison is a threshold relation between two quantities; negation is unary | the vacuum-to-Lambda binding is a composition, not a derivation of a value |
| Symbols table | R is the aim per slot; the ground is the anchor | no per-slot residual is stated in the headline question |

Strained readings are named in section 7, not smoothed over.

---

## 4. Findings

### F1 - The observed value is the anchor, the estimate is a frame-internal construction (decisive for the shape)

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** Fig 2 :30: **"If it moves when you push on it, it is not an anchor."**

Fig 1 :23: **"The ground enters as the only metric."** Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

The measured Lambda is a ground reading. The "theoretical estimate" is produced inside QFT from that frame's own cutoff and renormalisation convention; Wikipedia records that a Planck cutoff gives *"a difference of 120 orders of magnitude between the vacuum energy and the cosmological constant"* while *"Using dimensional regularization instead, reduces this difference to about 56 orders of magnitude."* A quantity that changes by 64 orders when the frame changes its regulator is not an anchor. It is a projection with a lossy dependence on the frame.

So the headline phrasing "observed value versus theoretical estimate" is structurally asymmetric. One side is ground, the other is a family of frame-internal returns. The residual is not between two equal claimants.

**Refuter:** show that the absolute vacuum energy is a direct ground reading that does not move under a change of regulator or renormalisation convention, or produce a particle-physics instrument that returns the absolute value rather than a difference. Casimir and Lamb-shift measurements return differences; if an instrument returned the absolute level, F1 falls.

### F2 - The question is a union compound and must be split before a frame is chosen

Fig 9 :4-5: **"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."** Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

The Library of Babel essay records the same move from a different field: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."* This is corroboration from a different frame but the same author, so it is one evidence pool, not a second witness (declared in `10_source_ledger.csv`).

The unbundling is:

- **U1, the old problem.** Why does the vacuum contribute to the cosmological constant at all, and why is the naive sum so far off? Ground: particle physics plus the coupling of vacuum energy to gravity.
- **U2, the naturalness problem.** Why is the renormalised value so extraordinarily small compared with the cutoff scale? Ground: the measured Lambda, since the smallness is a fact about the observed value.
- **U3, the new or coincidence problem.** Why is the dark-energy density of the same order as the matter density *today*? Wikipedia calls this *"the fact that energy density from dark matter and dark energy are of the same order of magnitude today"* and links to Weinberg's new cosmological problem. Ground: the expansion history and the matter density at the present epoch.

A single lever can clear one condition and leave the others standing. Renormalising the vacuum to zero addresses U2 by decree and leaves U1 and U3 untouched; anthropic selection addresses U3 and leaves U1's mechanism open. That is the signature of a union, not a hard single question.

**Refuter:** demonstrate that a single mechanism, applied once, shrinks the residuals of U1, U2 and U3 together in a way that is measurable rather than asserted. If the three residuals move independently under one lever, the union reading stands.

### F3 - The headline gap is a lossy cross-scale transform, and the naive comparison is dead reckoning

Fig 4 :27: **"The transform between scales loses information, and that is the point."** Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** Fig 4 :31-32: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."**

The prediction is formed at the UV end (fields, zero-point modes, a cutoff). The observation is formed at the IR end (the metric's large-scale behaviour). The "120 orders" is what you get when you carry a UV quantity to an IR reading as if the transform were lossless. Fig 4 says the transform between sizes is lossy by construction and that the honest report is the measured gap, not a forced identity.

This does not explain the number away. It relocates the question: the rounding error to be accounted for is the round-trip gap `R_T = gap(x, (T_E o T_A)(x))` between the UV description and the IR reading, and the next instrument owed is one that can discriminate what the coarse IR description discards. The world sources independently show that the number itself depends on the transform: 120 orders with a Planck cutoff, about 56 with dimensional regularisation, and Martin's renormalised value *"far from being 122 orders"*. That variation is the measured footprint of a lossy transform, not noise around a single true estimate.

**Refuter:** exhibit a cross-scale map from the QFT vacuum to the cosmological constant whose round trip returns the input unchanged at the required precision, so that R_T is zero and the 120-order mismatch is a genuine same-level contradiction. No such lossless map is supplied by any source read here.

### F4 - Two closures meet at the vacuum; the surplus is mute until a residual is described

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** Fig 8 :50-52: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."** Fig 8 :53: **"Residual first, frame second."**

QFT and GR have different closures. QFT's library holds fields, modes and a renormalisation convention; GR's holds the metric, curvature and a cosmological term. The binding "vacuum energy gravitates as Lambda" is an import from one closure to the other. It needs a **source gate: provenance** and a **shadow test: explains a gap** (Fig 8). The world literature records the failure directly: *"Although no theory exists that supports this assumption, arguments can be made in its favor"* for the equivalence of the quantum vacuum and the cosmological constant (Wikipedia, Cosmological constant). The assumption is an import with no source gate in the standard treatment.

Two frames together can reach what neither reaches alone, but the union does not name the atom. Fig 8 :21 names the failure mode: *"nothing was aimed; the union is mute."* A residual must be described before the frame that predicts its shape can be looked up.

**Refuter:** show that the binding is a derivation inside a single closure with no imported atom, and that it returns the observed value rather than only relating symbols. That would remove the need for a source gate and falsify F4.

### F5 - Frame-first selection accounts fail the mint bargain; a genuine anthropic prediction is a different thing

Fig 5 :43-44: **"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."** Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit."** Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause."**

A selection account that begins with "in an ensemble all values occur, so a small one is inevitable" picks the frame first and then maps the observation onto it. By Fig 9 :27-28 any value will then seem to fit. That is the echo-without-shadow failure named in `05_what_shape_means.md`: a structure found elsewhere and given somewhere to live. It also fails Fig 5's bargain: a term that makes every observation expected explains everything by saying nothing.

The honest qualification must be recorded. Weinberg's anthropic argument was not a mere "anything goes" claim: Wikipedia records that *"Weinberg predicted that the cosmological constant would have a value of less than a hundred times the currently accepted value"* and that he later refined it to *"5 to 10 times the matter density."* A bound stated before the measurement and then checked is a prediction, and the feature that saves it is exactly the feature Fig 5 demands: it constrains the space of expected readings. F5 therefore refuses only the unbounded frame-first version, not a pre-registered bound with a shadow test.

**Refuter:** show that an unbounded selection account predicts a specific measurement distribution before the measurement and that the observed value has low probability under the alternatives. If it can, it passes the bargain and F5 is withdrawn as applied to it.

### F6 - The single headline number is an aggregate that hides the live slot

Fig 1 :19 and :22 (quoted in section 1) forbid averaging the residual. Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**

The slots in this problem are the separate vacuum contributions: each field's zero-point sum, the electroweak and QCD phase transitions, the supersymmetric cancellations, the regulator choice, and each independent cosmological probe. Wikipedia's history section records that the estimate changed when new contributions were added: Zeldovich's original calculation was *"forty orders of magnitude bigger than the observed cosmological constant"*, the electroweak contribution *"increasing the discrepancy"*, and later estimates *"as high as 120 to 122 orders of magnitude"*. The number grew because new slots were counted, not because one slot was measured more precisely. Averaging them into "120 orders" discards the only signal that says which contribution dominates the error.

**Refuter:** show that a single slot carries the entire residual and that the other contributions cancel to the required precision by a mechanism that is itself measured. Until then, the per-slot reading stands and the aggregate is a filter for the budget, never a witness for the verdict (Fig 9 :60).

### F7 - No figure line yields the value or the mechanism: this is a `gap` on the physics answer

Fig 9 :32: **"you get a kind of thing, never the answer itself."** Fig 13 :134: **"Unreachable is a verdict here, not a silence,"** and Fig 13 :135: **"It cannot say which primitive is missing, because naming it would mean already holding it."**

After a genuine re-census over all thirteen figures, no line closes the numerical residual. The figures supply the grammar of the correction (anchor, union, lossy transform, closure, source gate), not a value of Lambda and not a mechanism such as unimodular gravity, trace-free Einstein gravity, light-front quantisation, the Cohen-Kaplan-Nelson bound, or vacuum fluctuation modelling. The world sources list these as live, mutually competing proposals; the figures do not select among them.

This is not silence. It is the verdict `gap` on the physics answer, reported in the shape of what a missing thing would have to look like: a term that (a) suppresses the vacuum contribution without fine-tuning across the cutoff, (b) leaves the observed nonzero value, (c) addresses the coincidence, and (d) is checkable by an instrument whose reading does not depend on the frame that produced it.

**Refuter:** exhibit a figure line that, under a low-strain reading, determines the value of the cosmological constant or selects one of the competing mechanisms. None was found on re-census; if one is produced, this finding is withdrawn.

### F8 - Search inside one closure cannot manufacture the missing cancellation

Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** Fig 6 :21: **"MINT composes inside the closure and can never add an atom."** Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

Weinberg's no-go result, as reported in the world sources, is the physics-face version of a closure limit: *"the different contributions to the cosmological constant cannot, under general conditions, cancel without fine tuning their values"* (Wikipedia, Cosmological constant problem). Given only the atoms of effective field theory, more search over those atoms does not produce a natural cancellation. That is a barrier result, not a proof that no solution exists anywhere (Fig 8 :39). The instruction from Fig 8 :40-43 is to distinguish underivable-in-principle from unreachable-at-this-budget and to go outside only for the former.

**Refuter:** produce a cancellation derived entirely inside the standard effective-field-theory closure that meets the observed value without fine-tuning. If one is settled against the ground, the import instruction does not apply.

### F9 - The question is unreached at this budget, not unreachable in principle

Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** Fig 6 :33: **"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."** Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**

The cosmological probes are already returning readings that fail to resolve at the precision needed to separate the mechanisms: supernovae, CMB, BAO, lensing, and the DESI survey, whose public page states that it *"will measure the effect of dark energy on the expansion of the universe"* and has already observed more than 47 million galaxies and quasars. Fig 6 :34 asks whether anything at any resolution is already returning something that fails to resolve. The answer here is yes. The missing thing is discrimination among sources, not a first contact.

This distinction governs the honest stop. "Underivable" would send us outside the frame; "unreachable at this budget" would send us back to more search. Here neither is correct: the instruments exist and are improving, so the label is **unreached**, with the lineage and the would-be discriminator recorded.

**Refuter:** show that no instrument at any resolution can discriminate the candidate sources, so that the question is genuinely underivable rather than merely hard. A forward test that fails to find such an instrument is not proof of absence (Fig 8 :39).

---

## 5. Pre-registered refuter

Required before any outreach, per the amended Seat Map line 287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. The observed Lambda is shown to be frame-dependent, moving when a theory pushes on it, so it is not an anchor (breaks F1 and Fig 2 :29-30).
2. A single lever is shown to shrink all three unbundled conditions U1, U2 and U3 together in a measured way, so the union reading is false (breaks F2 and Fig 9 :54-58).
3. A lossless cross-scale map is exhibited with round-trip gap R_T equal to zero at the required precision, so the mismatch is a same-level contradiction rather than a projection (breaks F3 and Fig 4 :30).
4. The absolute vacuum energy is returned by a direct ground instrument rather than by differences, so the estimate is an anchor after all (breaks F1 and F6).
5. A figure line is produced that determines the numerical value or selects a mechanism under a low-strain reading (breaks F7).

If any fires, the shape is withdrawn or rewritten. Until one is run, nothing in this folder may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with F1 and F2. The asymmetry of the comparison and the union structure are the two most defensible figure-grounded outputs and they need no physics value.
2. State the mode on every sentence. The question asks "why"; the figures license a shape of the answer, not a number (F7).
3. Report the regulator dependence of the estimate as a measured projection, not as a flaw in the reader's preferred theory (F1, F3).
4. Split U1, U2 and U3 before proposing any mechanism, and keep the three verdicts separate and never averaged (F2, F6).
5. Offer the discriminating instrument, not the preferred mechanism. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the shape and the refuter.
6. Use the public submission and contact points in `03_public_contact_points.csv`, and ask for a refutation rather than belief (Fig 7 :35, Fig 10 :42).

---

## 7. Canonical usage check and retraction log

Two sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` and the public GitHub copy: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* The canonical limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest. Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: *"the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."* So no ruling was requested from an author; the figures settle the design question of what counts as an acceptable answer, and the ground settles the physics value.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F3 first called the 120-order number "the round-trip gap R_T" | **Retracted and narrowed.** R_T is the gap between a condensed description and its concretisation, not the raw UV-to-IR mismatch. The headline number is the *footprint* of a lossy transform; R_T is the loss itself, measured by the round trip. Both are kept. |
| F4 first called the vacuum-to-Lambda binding "an import that moves the wall" | **Retracted at that strength.** Fig 6 :25 says an import adds no atom to the world; this binding adds no atom to the figure set. It is an import between *physics frames* with no source gate, which is the actual defect. F4 is rewritten accordingly. |
| F5 first dismissed all anthropic reasoning as apophenia | **Narrowed.** Weinberg's pre-registered bound predicts a measurement range, so it passes Fig 5's bargain in the form in which it was actually made. Only the unbounded frame-first version is refused. |
| F7 first recorded "gap" as a failure to find a line | **Confirmed as a verdict.** Fig 13 :134 names unreachability a verdict, not a silence. The report is now the shape of what is missing, not an apology. |
| The "observed value" was initially treated as one quantity on a par with the estimate | **Corrected to asymmetry.** Fig 2 :29-30 makes the measurement the anchor and the regulator-dependent estimate a projection (F1). |
| Apparent strain Fig 4 lossy transform versus Fig 6 import | **Not strained after re-census.** Fig 4 governs translation between held descriptions; Fig 6 governs acquisition of an atom from another closure. Different quantities (section 2, strain test). |
| F9 "unreachable" | **Corrected to "unreached".** The observing instruments already return readings that fail to resolve; that is depth at this budget, not absence in principle (Fig 6 :34, Fig 8 :39-43). |

### Seven-question recursive derivation (summary)

1. **Which side is ground?** The observation, not the estimate. F1, Fig 2 :29-30.
2. **One question or several?** A union of three conditions. F2, Fig 9 :4-5, :54-58.
3. **Is the comparison same-level?** No, it crosses UV to IR through a lossy transform. F3, Fig 4 :27, :30.
4. **Can an inside frame close it?** No atom in the standard closure supplies the cancellation; Weinberg's no-go is the physics-face barrier. F8, Fig 8 :32.
5. **What is owed?** An import with a source gate and a shadow test, and a residual described before the frame is chosen. F4, Fig 8 :50-53.
6. **Does a frame-first selection account pass?** The unbounded version fails the MDL bargain; a pre-registered bound does not. F5, Fig 5 :43-44.
7. **Can this derivation settle the value?** No. It is a simulation, it returns a shape, and the instruments are still returning unresolved readings. F7, F9, Fig 9 :32.

### Updated verdict

The shape survives: the observed value is the anchor, the question is a union compound that must be split, the headline number is the footprint of a lossy cross-scale transform, no inside closure supplies the cancellation, and the instruments already returning readings make this `unreached` rather than `unreachable`. What does not survive is any claim that the figures compute Lambda, name a mechanism, or select among the live proposals. Strains after re-census: none hidden; one regulator-dependence question (56 versus 120 orders) is recorded as world evidence for the lossy-transform reading, not smoothed into a single number. On the physics value: `gap`, reported plainly (Fig 13 :134).
