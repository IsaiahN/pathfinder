# Figure-grounded audit: how a spacecraft could distinguish living from nonliving chemistry

**Mode of this document: `specified` on the derived constraints, `general` on the structural shape.** From `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement settles the binding here, so nothing is `grounded`.

**Status: a simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap*: "the truly testable output would need to be derived from the real architecture or working the formula yourself." This file is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line numbered), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, and the public sources in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual, stated in effect terms

A spacecraft carries instruments. Each returns a reading o' for a slot s: a mineral grain, a spot on a rock, a mass spectrum, an isotopic ratio, a texture. The onboard chemistry library Γ predicts what a sample of a given kind should read. The residual is the gap R_s = |Γ(b,a) − o'| on that slot. The decision owed is a discrimination: did a living source or a nonliving source produce this reading?

The difficulty is not sensitivity. It is that the map from source to reading is many to one. Living chemistry and abiotic chemistry can yield the same organic molecule, the same redox pair, the same mineral, the same apparent structure. The reading is a projection; it does not determine the source. *The Hard Problem is About Source* states the generic case: "the instrument is speaking only about what it measured, it cannot comment on the source." The same essay: "If several paths create the same behavior, then behavior is a projection with lossy information." And the operative limit: "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it."

So the residual in effect terms is: **the current instrument closure returns readings that fail to discriminate among sources, and a discrimination procedure is owed.** What an answer would look like, bound as an ordinary term before the derivation (formula step "Direction"): a procedure whose per-slot residuals fall only when at least one measurement distinguishes a biological from an abiotic source under a shared context, and which can report `unreachable` instead of manufacturing a verdict when no such measurement exists.

---

## 1. Domain census, before any figure line is chosen

### 1.1 R by arity, symmetry and scale (Fig 9 :22, "arity · symmetry · scale")

- **Arity:** at least three conditions operate on one reading: a biological source, an abiotic source, and contamination from the instrument's own Earth origin. Fig 9 :4: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." This is a **union compound**, not one hard question.
- **Symmetry:** the source-to-reading map is many to one. Exchanging living and abiotic sources can leave the reading unchanged. Under such a symmetric projection, k hidden sources collapse into fewer distinguishable readings. A discriminator must add independent axes that break this symmetry. Fig 12 :92: "Symmetry is what decides whether an arrangement is a new thing."
- **Scale:** per slot, not global. Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."* A bulk "the sample looks organic" average discards the one live grain. The discrimination also recurs across scales: molecule, grain, cell-like structure, community, environment (Fig 12 :103, composition is recursive).

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| **S, the sample and habitat (contact)** | the sample, organics, minerals, isotopes, textures, the abiotic background, contamination, context | physical and chemical contact; traces and gradients | the sample itself and a control of known abiotic origin | yes: the returned or in situ sample, plus a sterile/abiotic control |
| **I, the instrument frame (perception and measurement)** | spectrometers, imagers, chromatographs, isotopic and chiral analyzers, calibrations, the operator's signature library | readings o' per slot; residual R_s | an instrument already returning something that fails to resolve | yes: an existing instrument with a live, unresolved reading |
| **C, the classification closure (chemistry/biology library Γ)** | held terms (molecule, ratio, structure, disequilibrium), bonds, closure(Γ), candidate term φ | composition inside closure(Γ); settlement against the ground | the ground, never internal coherence | yes: experiment, returned sample, known-positive and known-negative analogue |
| **V, verification and community frame** | independent instrument teams, other missions, sample return, peer review, public criteria | independent lines of evidence; agreement only when low overlap | the ground, never agreement | yes: sample return and controlled analogue result |

A domain without a nameable anchor is not a domain yet. All four have one, so all four survive. Domain I and domain C are distinct: an instrument can return a reading while the classification closure still cannot interpret it, and a closure can hold a term while no instrument returns it.

### 1.3 Partition or union

**Union, not partition.** A reading can be biological, abiotic, contaminated, or several at once. Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55 *"a case in two conditions is not a harder case of either"*. Fig 9 :56 continues: "It stops being a mixture and becomes a specific compound." The operational unbundling is the one NASA's own life detection expert gives: rule out contamination, ask whether the type of life seen could live there, ask whether any abiotic process could make the thing, then ask for separate independent lines of evidence (Kaiser, NASA, 2025, `10_source_ledger.csv`).

A single lever, one extra spectrum at the same resolution, clears the region where only one condition holds and leaves the intersections standing. This is why "one definitive biosignature" is the wrong search target.

### 1.4 Order by dependency (Fig 3)

Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." Ordered chain for this question:

1. perception: can the instrument tell what is in front of it and apart from what was there before?
2. vocabulary: does it have terms for what a sample affords (heated, split, imaged, labelled, compared to a control)?
3. objective: can it say what would count as progress in its own terms (one abiotic alternative ruled out for this slot)?
4. planning: which probe or sample next?
5. learn and carry: name what worked, verify it, carry it to the next slot and the next mission.

Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."* For life detection the middle link, vocabulary and objective, is the usual break: there are plenty of instruments and plenty of shots, but few instruments for "what would count as a biological rather than abiotic origin for this spot". Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The CoLD scale and the Standards of Evidence framework are attempts to instrument that middle link, not detectors themselves.

---

## 2. Figure census (bearing and verdict before findings)

| figure | bearing on ORI-0097 | preliminary verdict |
|---|---|---|
| 1 The Agent | residual per object slot; frame-internal quantities disqualified | governs the unit of measurement |
| 2 The Ground | anchor must not update; independence; triangulation not negotiation | governs the verification domain |
| 3 Dependency Chain | order by dependency; a reading below the break is a reading of nothing | governs the sequence of the procedure |
| 4 The Membrane | round trip between a method and its use; measure the gap R_T | governs condensation of the answer |
| 5 Mint Pipeline | support, reachability, novelty; settlement necessary not sufficient | no new primitive is minted here |
| 6 Closure / Reachability | instruments improved from worse ones already returning something; only import moves the wall | governs the instrument route |
| 7 Room Chain | agreement compounds, evidence does not | governs "more teams agree" as a non-answer |
| 8 Union Surplus | two low-overlap frames reach what neither reaches; provenance separates convergent derivation from adopted import; no proof of absence | governs multi-instrument discrimination and provenance |
| 9 Leave / Arrive | verdict, lookup, narrowing; union unbundling; filters not witnesses; describe before looking | governs the whole procedure |
| 10 Ground Maintainer | ground does not decay, channel does; bring a characterised residual, never the source; declare stake | governs the outreach and checking arrangement |
| 11 The Habitat | capability is agent and habitat; enumerate contact; synthetic solve proves wiring not capability | governs controls and analogues |
| 12 The Bond | catalyst survives its own use; cycle output re-enters as input; functional group; two currencies | governs candidate structural discriminators and the budget |
| 13 Minimum Viable Set | different routes arrive at the same substance; closed set, open arrangements; unreachable is a verdict | governs metamerism and the honest stop |
| Operators table | comparison ⋛ is a threshold relation, not a symmetric join | a threshold on one reading is a filter, not a witness |
| Symbols table | R is the aim; slot s; ground is the anchor that cannot be modified | notation for the census |
| THE_FORMULA.md | mode rule; step 7 SEARCHED / INWARD / OUTWARD kept distinct | governs the three-route section |
| FIGURES_README canonical | "a shape, not a name"; "Indiscernibility is not identity" | governs what may be claimed |

Strained readings are named as such in section 6, not smoothed over.

---

## 3. Findings F1 to F12

### F1: the reading is per slot, and aggregation destroys the signal (decisive for the unit of analysis)

Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

A spacecraft that reports "bulk sample shows organic carbon" has averaged across objects and thrown away the only signal that says where to look. The Mars case makes this concrete: the useful signal was a pattern of mineral reaction fronts in specific spots, read by two instruments, not the bulk composition (Taveau, NASA, 2025). Mode `general`; triangulated with the Mars case at low overlap (Fig 1 from the framework, the Mars report from NASA).

**Refuter:** show a case where averaging across slots preserves a discrimination that no per-slot reading can make. I know of none, but the claim is falsifiable.

### F2: one reading cannot comment on its source (decisive for the problem statement)

Fig 13 :121 "Different routes can arrive at the same substance."
Fig 13 :122 "In chemistry this has been established since Liebig and Wöhler found two substances with the same composition and different properties, 1824 to 1826, and Berzelius named it isomerism in 1830."
Fig 8 :50 *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."*

Two different histories can produce the same composition. The reading gives the composition; it does not give the history. The provenance line is what must be added. The metamerism essay names the general failure, and the colour science literature gives an independent, low-overlap demonstration: in colourimetry, different spectral power distributions produce an equivalent receptor response (Wikipedia, "Metamerism (color)", 2026, `10_source_ledger.csv`). Mode `general`; triangulated across Fig 13, Fig 8 and colour science (low overlap between chemistry history and colourimetry).

**Refuter:** exhibit a reading with a one-to-one map to source across all known abiotic mimics and contamination states. Then a single measurement suffices and this finding fails.

### F3: no single closure can certify the answer from inside

Fig 9 :6 *"the verdict: is φ* in here at all?"*
Fig 9 :44 *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*
Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*
Fig 8 :32 *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*

A chemistry-only closure cannot derive "life" from more chemistry readings at the same resolution, and it cannot prove "not life" either. An absent signature is not an absent life. The NASA Mars release says exactly this in operational form: "while abiotic explanations for what we see at Bright Angel are less likely given the paper's findings, we cannot rule them out." Mode `specified` when applied to a given instrument; `general` for the closure claim. Triangulated (Fig 8 and Fig 9 are different figures with different roles, plus the NASA case).

**Refuter:** a worked derivation of a living-nonliving discriminator entirely inside one instrument's current signature library, closed and complete, with the ground paying for it.

### F4: triangulation, not a vote of instruments that share a pool

Fig 2 :31 *"Two people reading the same report are not two frames; two instruments pointed at the same thing are."*
Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 8 :45 *"Two frames together reach what neither reaches alone."*

Two instruments only add reach if they draw on different evidence: different physical principles, different preparations, different analysts, different times. Two mass spectrometers with the same calibration library and the same sample preparation are one frame wearing two names. Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* The cost here is high, so the independence must be bought deliberately. The NASA expert's "separate independent lines of evidence" and the Methods literature's definition of triangulation (different observers, theories, methods and materials) corroborate at low overlap. Mode `specified`; triangulated.

**Refuter:** show that the independent instruments share a calibration, preparation or analysis pool sufficient to make their agreement the pool talking. Then their convergence is not evidence.

### F5: the union must be unbundled before it is searched

Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."*
Fig 9 :55 *"a case in two conditions is not a harder case of either"*
Fig 9 :56 "It stops being a mixture and becomes a specific compound."

The four conditions, contamination, abiotic mimic, environmental context, and positive structure, are separate loops. NASA's expert checklist follows the same order: rule out contamination, check habitability, rule out abiotic routes, then seek corroboration. Green et al. (2024) report the workshop framework's two levels: "signal detection, signal contamination, abiotic mimics, consistency with environmental context, and complementarity between lines of evidence." Mode `general` for the union claim, `specified` for this particular four-way split. Triangulated across Fig 9 and two independent NASA sources.

**Refuter:** show the conditions are a partition (mutually exclusive and exhaustive) for some target class, so a single lever clears all of them.

### F6: the instrument is sharpened from one already returning something that fails to resolve

Fig 6 :32 *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*
Fig 6 :34 *"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."*
Fig 6 :35 "extend from, and the search for a proto-instrument is a search for one that is already there."

This is the operative answer to "how can a spacecraft". Not by specifying a perfect life detector from a description of life. By taking an instrument already returning something (a spectrum, an image of a spot, a mass peak, an isotopic ratio) that fails to discriminate source, and sharpening it, then adding a different instrument on a different axis. The Mars case is the instance: PIXL and SHERLOC returned mineral and organic maps that failed to resolve the source, and the sharpening was higher-resolution imaging plus contextual mineralogy plus a returned-sample plan. Mode `specified`; triangulated (Fig 6 and the Mars report, low overlap).

**Refuter:** a case where a life-discriminating sensor was built from a pure description with no earlier returning instrument to sharpen. The framework says this cannot happen; a single counterexample would break the rule.

### F7: what may be named is a shape; the biosignature itself is a provenanced binding

Fig 9 :32 *"you get a kind of thing, never the answer itself"*
Fig 9 :30 *"your words are borrowed too, so describe the effect rather than the cause"*
Fig 9 :27 *"describe it before you go looking, or any frame you pick will seem to fit"*

The figures license structural discriminators that are already in the vocabulary: a part that survives its own use (Fig 12 :119), a cycle whose output re-enters as input (Fig 12 :121), a functional group whose presence fixes the outcome (Fig 12 :123). They do not derive which molecule, ratio or texture is *the* biosignature. That selection is a binding from the chemistry and biology frame, provenanced as such. Fig 8 :50: "Only the record of where each came from separates them." The canonical README states the limit as "what a missing thing would have to look like (a shape, not a name)".

**Correction to my first reading (kept visible):** I initially wrote that the framework forbids naming any biosignature at all. That overstates it. The README's phrase governs a *missing* primitive. Cycle, catalyst and functional group are already held atoms of Fig 12, so naming one is a binding onto a held atom, not the invention of a seventh term. What remains forbidden is claiming the framework *derived* the binding, or treating the binding as an import that moves the wall (Fig 6 :21 *"MINT composes inside the closure and can never add an atom."*). Both readings are recorded; the narrowed one stands. Mode `specified`; triangulated (Fig 9, Fig 12, canonical README).

**Refuter:** a figure-derived derivation that selects a unique biosignature molecule without importing a chemistry or biology frame. Then "shape, not a name" does not bind here.

### F8: the habitat is enumerated, and a synthetic solve proves wiring only

Fig 11 :43 *"The habitat is enumerated, never composed."*
Fig 11 :44 *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*
Fig 11 :70 *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*
Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone"

The abiotic background is part of the habitat, not noise to be subtracted. PCE3/NfoLD/NOW ran a workshop specifically on it: "What contextual measurements might help to rule in/out abiotic mimics for evidence of life?" The LDKB records arguments for and against each candidate biosignature in a particular environmental context, with false positives and false negatives (Shkolyar, NASA, 2025). A spacecraft tested only on clean spiked analogues proves the instrument's wiring, not its capability in the real habitat. Mode `general`; triangulated (Fig 11 and two independent programme sources).

**Refuter:** a controlled synthetic analogue that predicts a field result without any habitat enumeration. Then the substitution law fails for this case.

### F9: two currencies, held apart

Fig 12 :125 *"A composition costs in two currencies, and they do not add."*
Fig 12 :126 *"Bits price the description. Actions price finding out whether it holds."*
Fig 9 :40 *"a wrong cut removes the answer and speeds up so keep every cut ranked and reversible"*
Fig 9 :41 "so keep every cut ranked and reversible"

A spacecraft's downlink and data budget (bits) and its sample, power and time budget (actions) are different units. A long chain of cheap spectra is expensive to describe and may cost one confirmatory action; a short isotopic or chiral measurement on a precious core is cheap to state and may take a whole campaign to settle. Summing them into one "science score" is the named error. Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A CoLD level or a confidence score is a filter for communication, not a witness for life. Mode `general`; triangulated with the operational "podium test" (Kaiser, 2025).

**Refuter:** a single currency that prices both description and action without loss, demonstrated on a real mission trade.

### F10: the ground must not move

Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*
Fig 10 :24 *"the ground does not decay, the channel does"*
Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."*

For this question the anchor is the sample and a known control, not the team's confidence, not the number of papers, not the CoLD level. If the "ground" is a committee's consensus about what counts as a biosignature, it moves when pushed, and panel 3 of Fig 2 becomes panel 1: coherent drift nobody notices. The independent National Academies review of the Biosignatures Standards of Evidence report exists precisely to keep this anchor honest. Mode `general`; triangulated.

**Refuter:** show a case where a community's changed definition of life changed the sample's reading. Then the anchor moved and the verdict is void.

### F11: the honest stop is `unreachable`, not "no life" and not "life"

Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*
Fig 13 :134 "Unreachable is a verdict here, not a silence,"
Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it."
Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

When no discriminator closes the per-slot residual, the report is `unreachable at this budget` or `underivable with this closure`, with the two kept distinct (Fig 8 :40: "Underivable-in-principle and unreachable-at-this-budget are different facts"). The NASA Mars case reports the operational version: a potential biosignature, with abiotic explanations not ruled out. The canonical README adds: "Indiscernibility is not identity." Failing to discriminate does not mean the sources are the same. Mode `general`; triangulated.

**Refuter:** a proof that absence of a discriminator entails absence of the source. None of the figures licenses it.

### F12: the six-term substrate governs composition, not biosignature selection

Fig 13 :74 *"Everything else is a composition across the two kinds, never within one."*
Fig 13 :75 *"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."*
Fig 13 :115 *"The set is closed. The arrangements are not. That gap is why import exists."*

The six-term set is not a life detector and must not be used as one. What it contributes here is a discipline: anything claimed as a detector must be a composition, and the vocabulary of compositions is finite and open in arrangement only. No seventh term is minted by finding life. This finding is included to prevent an over-claim that would otherwise look figure-grounded. Mode `general`; single-source for the substrate claim (Fig 13 only), corroborated by the canonical README at high overlap.

**Refuter:** derive a seventh member of the six-term set from a biosignature discovery. Then the closure claim is wrong.

---

## 4. Formula step 7: three questions, kept distinct

`THE_FORMULA.md` step 7: "NO φ IN closure(Γ) CLOSES R → three questions, not one." I ran all three, in the mandated order, and kept them separate.

**SEARCHED (asked first, cheapest).** Is a source-discriminating measurement already in the closure of current life-detection instruments, merely unfound? The closure of a signature library is idempotent (Fig 8 :32), so more of the same spectra at the same resolution adds no atom. But the relevant literature suggests the discriminator may be already held and merely uncombined: the LDKB inventories candidate biosignatures with arguments for and against in each environmental context, and the Standards of Evidence framework already names signal detection, contamination, mimics, context and complementarity. Verdict: **partly searched**. The terms exist; the combination into one operational per-slot procedure is not something I found already assembled. This is a budget finding, not a witness.

**INWARD (sharpen in our own terms).** Extend the instrument already returning something that fails to resolve. Fig 6 :32 and :34 govern this. Concretely: increase spatial resolution where a spot already returns a mixed signal; add a second physical principle (X-ray lithochemistry plus Raman and luminescence, as on Perseverance); add isotopic, chiral or textural axes where a mass peak is ambiguous; repeat in time and in a control. Verdict: **viable and figure-licensed**, but it cannot by itself break a true metamerism in which both sources produce the same set of readings on every available axis.

**OUTWARD (import, cast the residual in effect terms).** Find a frame whose closure predicts the shape of the residual. The residual in effect terms is "one reading, several possible sources, no discriminator". The importing frames are chemistry (abiotic reaction pathways, the abiotic background), biology (cycles that close, catalysts that regenerate, heritable variation), and measurement science (standards of evidence, independent lines). These bring atoms such as cycle, catalyst and functional group that are, in fact, already in Fig 12, so the import is thin: mostly a binding, debited against independence as Fig 6 :24 requires. The LDKB and the Standards of Evidence workshop are public instances of this import already being done by the field. Verdict: **viable**, with provenance required.

INWARD and OUTWARD were not read against one another. Underivable-in-principle and unreachable-at-this-budget remain different facts with different instructions.

---

## 5. Pre-registered refuter (written before the conclusion)

Per the standing rule, a falsifier written before the run is a design instrument. These were written here before the verdict in section 8 was fixed.

The shape claim ("a spacecraft distinguishes life from nonliving chemistry only through several low-overlap, per-slot measurements, a union unbundled, and a ground that does not move") is refuted if any of the following holds:

1. **R1, one-to-one reading.** A single instrument reading maps one-to-one to living versus nonliving across all known abiotic mimics and contamination states, so metamerism does not obtain for the target class.
2. **R2, shared pool.** Two measurements presented as independent are shown to draw on the same evidence (same calibration library, same preparation, same analyst group, same prior), so their agreement is the pool talking.
3. **R3, closure success.** A source discriminator is derived entirely inside one instrument's current signature library and settles at the ground, so no import and no second frame is owed.
4. **R4, ground reversal.** A returned sample or a controlled analogue with known living and known abiotic halves returns the opposite classification under the same procedure.
5. **R5, substrate break.** A seventh member of the six-term set is derived, or a composition of two states with no intervening structure is admitted and cannot be refused.

If any fires, the shape claim is withdrawn or narrowed accordingly. Until one is run, no part of this is `grounded`.

---

## 6. Strains, re-census and retraction log

### 6.1 Strain A: isomer versus metamerism (resolved by re-census)

Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* The life/nonlife case is not an isomer case in this strict sense: the two sources need not differ in molecular composition at all; they differ in history. Applying "isomer" directly strains the line. **Re-census:** Fig 12 governs composition-level differences; source differences are governed by Fig 13 :121 (different routes, same substance), Fig 8 :50 (only the record separates convergent derivation from adopted import), and the source essay. Different objects, so no contradiction. The isomer line is used in `06_isomers_and_order.md` only for the weaker, correct claim: equal elemental composition does not fix identity of process.

### 6.2 Strain B: cycles are not uniquely biological (resolved by narrowing)

Fig 12 :121 *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* Geochemistry also has cycles. Using "a cycle is present" alone as a biosignature strains the line. **Re-census:** the figure governs a compositional structure, not a biological criterion. A closing production cycle is a *candidate structural discriminator* only when combined with the per-slot residual (F1), provenance (F2), and an independent axis (F4). Narrowed, not hidden.

### 6.3 Strain C: comparison bond as a detector (refused)

The Operators table defines ⋛ as "a threshold relation between two quantities". A threshold on a single reading is a comparison, hence a goal or a filter, not a witness. Fig 9 :60 forbids letting a filter hand a verdict. So a confidence threshold does not become a discriminator by being named one. Refused.

### 6.4 Retraction and confirmation log

| earlier reading | status after re-census and source check |
|---|---|
| "the framework forbids naming any biosignature" | **Retracted and narrowed.** It governs a missing primitive. Cycle, catalyst and functional group are held atoms (Fig 12); naming one is a provenanced binding, not a seventh term. |
| "different routes, same substance is an isomer claim" | **Retracted.** Isomers require different bonds (Fig 12 :117). The correct figure for source ambiguity is Fig 13 :121 plus Fig 8 :50. |
| "a closing cycle identifies life" | **Narrowed.** Geochemical cycles exist. A cycle is a candidate structural discriminator only in combination with low-overlap independent lines. |
| "more independent teams means more evidence" | **Refused unless overlap is low.** Fig 2 :40 and Fig 7 :12 (agreement compounds, evidence does not). |
| "no signal means no life" | **Refused.** Fig 8 :39 and Fig 13 :134. Unreachable is a verdict, not a silence. |
| "one instrument with a perfect biosignature molecule would settle it" | **Not confirmed.** Fig 6 :32 requires sharpening from an already-returning instrument; Fig 8 :45 requires a second low-overlap frame. |
| F1, F2, F3, F4, F6, F8, F9, F10, F11 | **Confirmed** with the modes and triangulations stated above |
| F5, F7, F12 | **Confirmed with narrowing** as recorded in F5, F7 and section 6.2 |

---

## 7. Canonical usage check

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." And: "a reading that makes one contradict another has misidentified its domain, not found a flaw." This governed both re-census moves in section 6.
- The same README gives the limit: "what a missing thing would have to look like (a shape, not a name)" and "Indiscernibility is not identity." Both are load bearing in F7 and F11.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: "the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." No human ruling was requested for any design question here. All were derived.
- `THE_FORMULA.md` step 7 and the mode rule were applied as written; SEARCHED, INWARD and OUTWARD were not merged.

---

## 8. Updated verdict

The shape survives; a single measurement does not.

A spacecraft distinguishes living from nonliving chemistry by **range-finding several low-overlap instruments against a ground that does not move**, on a per-slot basis, after unbundling the union of contamination, abiotic mimic, environmental context and positive structure. It sharpens an instrument already returning an unresolved reading rather than designing a detector from a description of life. It looks for a shape, a closing production cycle, a part that survives its own use, a functional group that fixes the outcome, and records the provenance of every binding from chemistry or biology. It holds bits and actions as two currencies. When nothing closes the residual, it says `unreachable at this budget`, not `life` and not `no life`.

Verdicts by domain, kept separate and never averaged:

- **S, sample and habitat:** `general`. Enumerate the habitat; the sample and an abiotic control are the anchor. Triangulated (Fig 11 plus the LDKB and abiotic workshop).
- **I, instrument:** `specified`. Sharpen an already-returning instrument; residual per slot. Triangulated (Fig 6, Fig 1, Mars case).
- **C, classification closure:** `specified`. No closure certifies itself; absence is not proof. Triangulated (Fig 8 and Fig 9).
- **V, verification:** `specified` with a `general` core. Independence is bought, not assumed; the community scrutinises but agreement is not the anchor. Triangulated (Fig 2, Fig 8, NASA expert, methods literature).

Strains after re-census: three named, two resolved by re-census, one (cycle as necessary marker) narrowed and kept visible; no strain hidden. The strongest single figure-grounded point is F2 plus F4 together: the reading does not give the source, and only low-overlap independent measurements ranged against a fixed ground can add that information.
