# Figure-grounded audit: how much will global temperature rise?

**Mode of this document: `specified`, not `grounded`.** It states the shape a ground-settled answer must have. `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. World sources were opened on 2026-11-22 and recorded in `10_source_ledger.csv`. Local framework files were read from `FRAMEWORK/`.

---

## 0. The residual under audit

The question as an effect: an increase in greenhouse gases changes the top-of-atmosphere energy balance; the climate system responds; the response is read as a global mean surface temperature change. `R = |Γ(b,a) − o′|` per slot s (Symbols table, Fig 1). The prediction Γ is what a model or assessment expects for a forcing; the observation o′ is the measured warming or the paleoclimate reconstruction. The residual is not one global number.

**Bound answer shape (Direction).** Before the run I bind what an answer would look like: a constrained range of ΔT per unit forcing, held per forcing agent (CO2, CH4, aerosols, solar), per feedback (cloud, albedo, water vapour/lapse rate, ocean heat uptake, carbon cycle), per time scale (transient versus equilibrium versus Earth-system) and per climate state (glacial, warm), with a named anchor, a declared independence structure and a written refuter. A single number with no slot structure fails this shape. Binding it makes the preference refusable by the same test as every other term (Fig 5 :65-66).

**What is NOT being asked of the figures.** They are not a climate model. `THE_FORMULA.md` step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* The figures can say what the answer must look like and which frames are admissible witnesses. They cannot return 3 °C.

---

## 1. Residual census and domain census

### 1.1 R by arity, symmetry and scale

- **Arity.** Two things compose in sequence: forcing (an energy perturbation) and response (a temperature change), with a feedback chain between. Then a third term enters: the identity and location of the forcing agent, which changes the response per unit forcing. Arity is therefore at least three, not two.
- **Symmetry.** Forcing → response is ordered, not symmetric. The Operators table calls `→` *"A then B; B needs A to have happened"* and marks it not symmetric. Doubling CO2 does not commute with the response it produces. The bond carries information the operands do not (Fig 12 :5).
- **Scale.** First order: forcing to warming at a given time scale. Second order: the feedback chain inside the coupled system and the assessment frame that aggregates evidence. Cross scale: instrumental decades, paleoclimate millennia, and the long ocean tail that separates transient from equilibrium response.

### 1.2 Partition or union

This is a **union**, not a partition. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"a case in two conditions is not a harder case of either."* Asking "how much" without saying which forcing, which feedback, which time scale and which state bundles at least four well-formed questions. Fig 9 :4-5: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

### 1.3 One line per domain (actors / currency / anchor)

No line is admitted as a domain until it has a nameable anchor. Fig 2 :29-30: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| D1 Radiative forcing | CO2, CH4, N2O, aerosols, solar irradiance | watts per square metre (W m-2) | laboratory spectroscopy and top-of-atmosphere flux measurements. Yes: a spectrometer does not move when a climate model changes its prior. | partition (which forcing, how large) |
| D2 Feedback response | clouds, ice and snow albedo, water vapour and lapse rate, ocean heat uptake, land surface, carbon cycle | feedback parameter W m-2 K-1 and temperature K | instrumental warming record, satellite flux, paleoclimate proxies, process experiments. Yes: observations and proxies. | union of feedback slots, each with its own instrument |
| D3 Model and assessment frame | GCMs and ESMs (CMIP5/6), assessors, likelihood language | ensemble spread, assessed ranges, confidence labels | the ground is observed warming, not model agreement. Models are frames. Abramowitz et al. 2019 and Knutti et al. 2013 document shared code and evaluation data. | frame, not anchor |
| D4 Forcing identity and pattern | forcing agent, geographic distribution, altitude | efficacy ratio E (response per unit forcing relative to CO2) | single-forcing model experiments and observed pattern effects (Hansen et al. 2005; PDRMIP). Yes: model experiments, partly model-dependent. | isomer / functional-group question |
| D5 Time and state | transient response, equilibrium response, Earth-system sensitivity; glacial versus warm states | years to millennia, K | the long simulations and paleoclimate record (LongrunMIP, Tierney et al. 2020). Yes. | ordered chain, second order |

A domain with no nameable anchor is not yet a domain and is not admitted. D5 is admitted only because paleoclimate proxies and long simulations give it an anchor; without them "equilibrium" would be a definition, not a ground.

### 1.4 Dependency order (Fig 3)

The chain is ordered by dependency, not importance. Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces."*

1. **Perception:** measure forcing and temperature. Fig 3 :4-5: the system can tell what is in front of it and tell it apart from what was there before.
2. **Vocabulary:** W m-2, feedback parameter, K, efficacy. Fig 3 :6-7: terms for what things afford.
3. **Objective:** say what would count as progress, namely narrow the range per slot against the ground. Fig 3 :9-10. This is the middle link Fig 3 :25-27 says usually breaks: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The question as asked breaks here, because "how much" does not name which sensitivity.
4. **Planning:** triangulate independent lines (Fig 2 :31, :35).
5. **Learn and carry:** the assessment records the lineage and the refuter, not just the number (Fig 13 :130).

Optimising step 4 cannot rescue a break at step 3. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

---

## 2. Figure census

| figure | bearing | verdict for this question |
|---|---|---|
| 1 The Agent | residual per slot; ground is the only metric; frame-internal quantities disqualified | governs: keep per-slot residuals, never average the signal away |
| 2 The Ground | anchor must not update; independence; correlation disqualifies a verdict | governs D1, D2, D3: observations anchor, models range |
| 3 Dependency Chain | ordered by dependency; the middle link is where chains break | governs the unbundling: name the sensitivity before narrowing it |
| 4 The Membrane | lossy round trip; methods cross up, recordings come down | governs the compression of a coupled system into one number (R_T) |
| 5 Mint Pipeline | three guards; settling is necessary not sufficient; fifth kind is refusal | no new primitive is minted here; the number is not a figure term |
| 6 Closure / Reachability | instruments improved from worse instruments; inward and outward are opposed | governs "unreachable": instruments exist and are improving, so this is not an absence verdict |
| 7 Room Chain | agreement compounds, evidence does not; ground votes between rooms | governs D3: model agreement is not corroboration |
| 8 Union Surplus | no search adds an atom; residual first, frame second; a search finding nothing proves nothing | governs the union reading and the honest gap for a figure-derived number |
| 9 Leave / Arrive | split before searching; unbundle unions; describe before looking; kind of thing, never the answer | decisive for the shape: a range, not a point |
| 10 Ground Maintainer | bring a characterised residual; verifier non-access; declare stake | governs the outreach order and the two-stage offer |
| 11 The Habitat | capability is agent-and-habitat; enumerate actors in contact; introduce never subtract | governs the habitat census: clouds, oceans, ice are actors in contact, not decoration |
| 12 The Bond | bond carries information; isomer and functional group; arrangement is substance | governs D4: same forcing, different agent, different response |
| 13 Minimum Viable Set | independence applied to the six; unreachable is a verdict; split before searching | triangulates the independence requirement and the union verdict |
| Operators table | `→` ordered; `⋛` comparison threshold; `¬` refusal | the forcing-response bond is ordered; falsification is a negation, not a new number |
| Symbols table | R is the aim; anchor is not in the library and cannot be modified | the ground is not one more model in the ensemble |

Strained readings are named in §7, not smoothed over.

---

## 3. Findings

### F1: The question is a union, not one hard question (decisive for the shape)

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"a case in two conditions is not a harder case of either."* Fig 13 :135: *"must be split before it is searched again."*

The question bundles at least: (a) GHG concentration to radiative forcing, (b) forcing to temperature through feedbacks, (c) transient versus equilibrium versus Earth-system time scale, and (d) which agent and where it is applied. Each has a different anchor from §1.3. A single search for "the number" searches a bundle. The fix is a search per slot, then a recombination that records the union structure.

**Refuter:** show that all four sub-questions share one anchor and one currency at one scale, so that answering one answers all. If that were demonstrated, the union reading would be false.

### F2: The residual is per slot; averaging across slots throws away the only signal

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

The live slots here are individual forcing agents and individual feedbacks. A global mean temperature is a legitimate observable, but treating it as the only residual hides which slot is still wrong. This is why "3 °C per doubling" is a headline, not a diagnosis: it compresses the cloud-feedback slot, the aerosol slot and the ocean-uptake slot into one figure. The framework's own metric rule, Fig 1 :23: *"The ground enters as the only metric,"* requires reporting the residual per slot.

**Refuter:** exhibit a case where a single global residual correctly directs the correction to the responsible slot without decomposing it. If that held generally, the per-slot rule would be strain, not guidance.

### F3: The anchor is measurement, not model agreement

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :33: *"The anchor must not update."*

D1's anchor is spectroscopy and TOA flux; D2's is the instrumental and paleoclimate record; D3 has no anchor of its own and must range against D1 and D2. A GCM is a frame: it predicts, and it cannot move the observation. The IPCC AR6 SPM states: *"The AR6 assessed best estimate is 3°C with a likely range of 2.5°C to 4°C (high confidence)"*, and it reaches that number from *"multiple lines of evidence"* rather than from model spread alone. The Earth-system modelling literature concurs that feedback process understanding, historical warming and paleoclimate are separate lines (Sherwood et al. 2020).

**Refuter:** show a case in which a model ensemble moved the observational anchor, that is, the measurement changed because assessors changed their priors. This is the "collapse 1" panel of Fig 2; if it occurred here the anchor would be illegitimate.

### F4: Independence is a quantity, and shared code spends it

Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool."* Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* Fig 2 :44: *"The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis"* (formalised in statistics by Faes et al. 2009).

Sherwood et al. 2020 report that their three lines of evidence *"agree and are judged to be largely independent"*, which is exactly the condition Fig 2 requires for agreement to mean something. By contrast Abramowitz et al. 2019 write that models *"share literature, ideas for representations of processes, parameterisations, evaluation data sets and even sections of model code"*, and Knutti et al. 2013 show that CMIP models are *"neither independent of each other nor independent of the earlier generation."* Therefore: three broad lines (process, historical, paleo) are three witnesses to the extent their independence is real and declared; 30 correlated GCMs are closer to one witness wearing 30 names. Fig 13 :38: *"independence is how little two frames draw on the same evidence."*

**Refuter:** demonstrate that the process, historical and paleo lines draw on a single hidden common source with the same errors. Sherwood et al. explicitly test interdependencies between lines; a demonstrated hidden dependency of that kind would downgrade the triangulation to single-source.

### F5: Model agreement is room variation, not a verdict

Fig 7 :13: *"agreement compounds, evidence does not."* Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* Fig 8 :32: *"no search, however long, adds an atom."*

A multi-model ensemble is a room. More GCMs at the same reach improve the search of that room; they do not import a new evidence line. IPCC AR6 itself says the assessed range does *"not directly use climate model estimates of ECS and TCR"* and instead combines process understanding, the instrumental record, paleoclimate and emergent constraints. That is the framework-compliant move: the ground votes between rooms, and the rooms are kept different.

**Refuter:** show that adding a correlated GCM changed the assessed range by importing genuinely new evidence rather than by reweighting the same pool. If so, the room analogy would be strained for that case.

### F6: Forcing identity makes same-forcing responses isomers, not one substance

Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

Hansen et al. 2005 define efficacy as the global temperature response per unit forcing relative to CO2 and find a "substantial range": CH4 about 110 percent (145 percent with indirect effects), biomass-burning black carbon about 58 percent, fossil-fuel black carbon about 78 percent. Same forcing magnitude, different agent and placement, different temperature response. Under Fig 12 these are isomers over a shared forcing atom set, with efficacy as the bond that carries the missing information. If only the shared pattern `forcing → response` is kept, they are members of one functional group. This is the structural reason a single universal "degrees per watt" is a shape (the functional group), not a substance.

**Refuter:** show that all efficacies equal 1 within the measurement uncertainty of the instruments, so that the identity of the agent carries no information. Then the isomer reading fails and the scalar functional-group reading stands.

### F7: The answer is unreached, not unreachable

Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* Fig 6 :33: *"Nobody specified a telescope from an account of Mars."* Fig 6 :40: *"What is unavailable is a sensor for something that has never registered anywhere, at any resolution."*

Sensors for forcing and temperature already register: spectrometry, satellite flux, Argo floats, temperature stations, paleoclimate proxies. Tierney et al. 2020 show that past climates provide the only direct observation of the Earth system at high CO2 and argue that paleoclimate should be used in model evaluation. Therefore the climate-sensitivity residual is reachable. The honest stop is "unreached at this budget", not "unreachable", and not a `gap` that hides behind Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

**Refuter:** exhibit a slot for which nothing at any resolution has ever registered a reading, and for which theory alone cannot say where to point an instrument. That slot would be genuinely unreachable and would be reported as such.

### F8: The figures give a shape; the ground gives the number

Fig 9 :32: *"you get a kind of thing, never the answer itself."* The canonical figures README says the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops at the limit of the instruments. Fig 13 :134: *"Unreachable is a verdict here, not a silence."*

No figure line contains a climate-sensitivity value, and none should be forced to. Searching the figure text for a number would be the "frame picked first, residual second" inversion of Fig 9 :27: *"describe it before you go looking, or any frame you pick will seem to fit."* The numeric answer is supplied by the world sources: IPCC AR6 best estimate 3 °C, likely range 2.5 °C to 4 °C, very likely 2 °C to 5 °C; Sherwood et al. 2020 effective-sensitivity 66 percent range 2.6 K to 3.9 K, robust within 2.3 K to 4.5 K. These are world facts, recorded as secondary corroboration, not figure derivations.

**Refuter:** produce a verbatim figure line that determines a numeric temperature response to a greenhouse-gas forcing. Until one is produced, any number in this folder is labelled as world-sourced.

### F9: Compressing the coupled system into one number has a measurable round-trip gap

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

Sent up: the figure set, chiefly per-slot residuals, ground-is-not-a-frame, union-not-partition, isomer distinction. Abstracted: "climate sensitivity is about 3 °C per doubling, likely 2.5 to 4." Brought back down: a policy-facing number. What the shorthand drops: which slot is live, the efficacy differences between agents, the transient/equilibrium distinction, and the independence structure among the lines of evidence. The gap is nonzero and is listed in `11_audit.md`. Treating the shorthand as identical to the full derivation would set `R_T` to zero and would be the dead-reckoning error Fig 4 names.

**Refuter:** show that the compressed number preserves all four dropped items for every decision it is used in. Since it demonstrably does not, the gap is established.

### F10: Filters for the budget, witnesses for the verdict

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

Tier labels, journal prestige, author reputation and the number of models in an ensemble are contact or budget filters. They decide what gets tried, not what is true. Fig 10 :59: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* The declare-stake rule applies here: this author has an interest in the framework being useful, and that interest is recorded rather than hidden.

**Refuter:** identify a place in this audit where a filter was used as a witness. If found, the affected finding is withdrawn.

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the discipline recorded for the exemplar: a falsifier written before the run is a design instrument. The shape claim in this folder is refuted if any of the following holds:

1. A verbatim figure line is produced that yields a numeric temperature answer to a greenhouse-gas forcing. (Then F8 is false and the figures do settle the number.)
2. All forcing agents are shown to have efficacy 1 within instrument resolution, so forcing identity and the isomer reading carry no information. (Then F6 falls.)
3. The process, historical and paleo evidence lines are shown to share a single hidden source that determines their errors together, so their agreement is one pool talking. (Then F4's triangulation is downgraded to single-source.)
4. A measurement move is found in which a climate model or assessment changed the observational anchor. (Then F3 falls and Fig 2's anchor test fails here.)
5. The sub-questions of F1 are shown to share one anchor and one currency at one scale. (Then the union verdict falls and a single search is legitimate.)

If any fires, the corresponding finding is withdrawn in the log below with its date, and the verdict is re-censused rather than softened.

---

## 5. Recommendation

1. Ask a narrower question before asking for a number: which forcing, which feedback, which time scale, which state. This follows Fig 9 :4-5 and is the single highest-value repair.
2. Report the world number with its provenance and its lines of evidence, not as a figure output: IPCC AR6 3 °C best estimate, likely 2.5 °C to 4 °C, very likely 2 °C to 5 °C; Sherwood et al. 2020 66 percent range 2.6 K to 3.9 K.
3. Keep the residual per slot. A number without its slot residuals is a recording, not a generator (Fig 4 :23: *"upward: a method that can be reapplied. Never the recording of a particular success."*).
4. Buy independence where the cost of being wrong is high: process experiments, paleoclimate proxies and instrumental records kept as separate lines, with their overlaps declared (Fig 2 :42).
5. Do not let the project's ranking or tier labels enter the verdict (Fig 9 :60).
6. Send the packet in `08_expert_verification_packet.md`, lead with the refuter, and record the checker's verdict before showing any framework material (Fig 10 :52: *"Bring a characterised residual, never the source."*).

---

## 6. Canonical usage check

Two local files were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also says a reading that makes figures contradict each other *"has misidentified its domain, not found a flaw"*, and that the framework returns *"a shape, not a name"* and stops at *"the limit of what the available instruments can distinguish."*
- `FRAMEWORK/figures/THE_FORMULA.md` step 7: SEARCHED / INWARD / OUTWARD are three distinct questions. SEARCHED is cheapest and assumed by the other two. INWARD and OUTWARD are opposed and must never be read against each other.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| Initial attempt to derive the answer from Fig 13's six-term set (Energy, Gradient, flow) as a direct numeric climate response | **Retracted as a numeric claim.** Strain test: Fig 13 governs which compositions are legal at a level, not the magnitude of a response. Re-census sends it to the census, not to a softer reading. Retained only as a shape: forcing is energy-like, feedbacks are gradients and networks, and the response is a composition, not a primitive. |
| Initial status "gap, the figures say nothing about climate sensitivity" | **Revised.** After the canonical usage check, a shape generator is what the figures are for. Verdict: figure-governed shape `triangulated`; figure-derived number `gap`, stated plainly. Both are recorded, neither hides the other. |
| "Shape, not a name" read as forbidding a numeric range | **Corrected in `05_what_shape_means.md` §5b.** The phrase governs a missing primitive, not a ground-settled range. A range with its slots and anchor is a shape; a single unexplained number is not. |
| F5 "model agreement is not corroboration" | **Canonically confirmed.** Fig 7 :13, Fig 2 :40, and the Abramowitz and Knutti sources all bear the same way. Agreement from a shared pool is one witness. |
| F6 "isomer" | **Retained with a type caveat.** Fig 12 defines isomer over shared atoms and different bonds. Forcing agents share a forcing atom but differ in placement and efficacy. The mapping is a structural claim, not a measured identity. |
| Apparent strain Fig 9 :32 ("kind of thing, never the answer") versus a numeric range | **Not strained after re-census.** Fig 9 governs what a frame returns before settlement; the range is a world-settled result with an anchor. Different objects. |

---

## 7. Strains and open items

- **Efficacy as a bond.** Fig 12's bonds are seven named typed relations. "Agent identity" is not one of them. The isomer reading uses "different bond" as shorthand for different placement and different efficacy, not as a claim that a new eighth bond exists. This is a strain, named rather than hidden. `06_isomers_and_order.md` carries the detailed falsifier.
- **Emergent constraints.** IPCC AR6 lists emergent constraints as a fourth line of evidence but does not use them as a primary constraint in the same way. They are a relation learned inside an ensemble of models combined with observations, so their independence from the model frame is partly spent. Reported as `single-source` for D3, not triangulated.
- **No figure line for a number.** This is not a defect in the run. It is the boundary of the instrument, and F8 states it explicitly. Fig 8 :39: a search that finds nothing is never a proof of absence, and here the search does find the shape it was looking for.

---

## 8. Verdict summary

The figure set governs the shape of the answer and the admissibility of witnesses, not the number. The question as asked is a union and must be unbundled (F1). The residual must be held per forcing agent and per feedback (F2). The anchor is measurement, not model agreement (F3). Independence must be bought and declared (F4), because model rooms compound agreement without adding evidence (F5). Different forcing agents give different responses per unit forcing, an isomer or functional-group structure (F6). The residual is unreached, not unreachable (F7). The number is world-sourced, not figure-derived (F8), and compressing the system into a single figure carries a nonzero round-trip gap (F9). Filters are for the budget, never the verdict (F10).

Status: `specified`, ungrounded by this run, candidate. The world number is ground-settled within climate science; this derivation reports it rather than producing it.
