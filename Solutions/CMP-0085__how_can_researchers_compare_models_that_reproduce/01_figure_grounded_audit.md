# Figure-grounded audit: CMP-0085, comparing models that fit the same pattern

**Mode of this document: `general` for the structural findings, `specified` for the isomer reading. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 8.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

### 0.1 What is actually left over

The loop defines `R = |Γ(b,a) - o'|` per slot `s` (Formula step 1; Symbols table, `R`). Substituting this question:

- **b**: the forcing, initial conditions and boundary conditions handed to both models.
- **a**: the researcher's action, observe, intervene, perturb, clamp, hold fixed.
- **Γ_i**: model i's library, that is its mechanism: its atoms and the bonds between them.
- **Γ_i(b,a)**: what model i predicts.
- **o'**: the observed pattern that both models reproduce.

The reported phenomenon is `R_1(s) ≈ R_2(s) ≈ 0` on the same `o'`. Both models are settled against that pattern. Fit is not the residual, because fit is zero. The residual is on a different quantity: **which source produced the pattern?** Call it the source residual, `R_source`. It is a slice the current instrument cannot read. The Symbols table says `R` is *"always a slice: what cannot be perceived yet is residual and simply cannot be read."*

The essays name this exactly. *The Hard Problem is About Source* (Isaiah N, 2026-08-28):

> "What if you have metrics that do not discriminate about its inputs?"
> "If several paths create the same behavior, then behavior is a projection with lossy information"
> "the instrument is speaking only about what it measured, it cannot comment on the source."
> "The answer is unreached until a better instrument exists."

The observed pattern is the projection. The mechanism is the source. A pattern-only comparison asks the projection to name its own source, which the projection cannot do. *How Intelligence Actually Works* puts the same case as green: *"The projection of green can't tell you whether it was RGB, CMYK or something else that composed it."* And: *"The frame and the photograph are indistinguishable as artifacts, and they carry different warrants. One was taken; one was extracted. And nothing in the image records which."*

### 0.2 Indexing, never averaging

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13 "a global R near zero with one live slot residual is a legal state".

Applied here: a global goodness-of-fit near zero is a legal state while one unmeasured regime carries all the discriminating mass. The two models may agree on the mean and diverge on a tail, a transient, an intervention response, or a scale. A single scalar score hides exactly the slot that would separate them. Per-slot indexing is therefore a structural requirement, not a preference.

### 0.3 Anchor test

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." The same line names examples: a measurement, an experiment, a counter, a market, a patient outcome. Fig 2 :30 adds: push on it and if it moves, it is not an anchor.

- **Not an anchor:** an information criterion (AIC, BIC, cross-validated score) computed on the observed pattern. It moves when the modeler changes the candidate set, the penalty, or the split. Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- **Not an anchor:** agreement between the two models, or between the researchers who built them. Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Two models fitted to the same sample are two readings of one pool.
- **Candidate anchor:** a measurement or intervention on which the mechanisms return different values, and which does not move when the modelers argue. In the essays' terms, a spectrometer, an isotope ratio, an out-of-sample regime, a perturbation, a different scale.

### 0.4 Bind the sought-for shape as an ordinary term

Formula, "Direction": a frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."* The remedy is to write the shape down, bind it, and let it accrue a residual. Bound now, before the run:

> **The sought-for shape S** is a triple: (S1) a condition under which two models are indiscernible at the current instrument; (S2) an effect description of an observation or intervention on which they are predicted to diverge; (S3) an instrument that returns different readings there and is not moved by either model's fit. An answer to the question has the form of S, not the name of a winning model.

S predicts something: it predicts that more of the same pattern will not separate the models, and that a discriminating instrument will. That makes S refusable by the test in section 5.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of the residual

- **Arity.** `R_source` is at least three-place: model Γ_i, action a (the discriminating intervention), and the ground reading o'. It is indexed by slot s and, where the models are dynamic, ordered by time. It therefore carries an ordered bond (`→`, sequence: *"A then B; B needs A to have happened"*, Operators table :30) when the discriminator is a designed intervention, and a comparison bond (`⋛`, *"a threshold relation between two quantities"*, Operators table :48) when the question is which reading is larger. It is not symmetric: the pattern and the source are not interchangeable.
- **Symmetry.** On the observed pattern the two models *are* symmetric: exchanging M1 and M2 leaves `R ≈ 0` unchanged. That symmetry is the phenomenon to be explained, not a license to average them. The asymmetry lives in the bond, which is invisible in the flat formula. Fig 12 :14 "the ingredients are recorded and the arrangement is not". Fig 12 :94 "The arrangement is the substance."
- **Scale.** Three scales are in view: the single model's fit loop, the population of candidate models with something that ranks them, and the instrument or intervention that ranges both against a ground. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured, not assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only when an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The fit frame** | the k models, the observed pattern o', the score | per-slot residual, description length | yes: the measurement that produced o', but o' is a recording, not the ground itself (Fig 4 :25) | admitted, conditionally |
| **D2 The mechanism frame** | atoms and bonds inside each Γ_i, the arrangement | composition inside closure(Γ_i), cost |\|phi\| | yes: settlement, Fig 5 :32 *"then check it against the ground, then carry it up"* | admitted |
| **D3 The discrimination frame** | instruments, interventions, low-overlap peer frames | independence, residual, new readings | yes: a measurement that returns differently under M1 and M2 and does not move when argued with | admitted, decisive |
| **D4 The verification frame** | expert readers, reviewers, editors | agreement and residual | yes: the ground, never agreement (Fig 2 :35, :45) | admitted |
| **X1 "the simplest model is the true model"** | a ranking criterion | simplicity | **no** anchor independent of a declared prior or penalty; absorbed into D1 as a filter | not a verdict domain |
| **X2 "the mechanism is unobservable in principle"** | none nameable | none | **no** nameable instrument or differing closure after a genuine census | gap after re-census, section 4 |

X1 fails the anchor test and is excluded from the verdict before any figure line is applied to it. This is structural, not a claim that parsimony is useless: it is a filter for the budget (Fig 9 :60). X2 is recorded as a `gap`, not silently filled with an answer. Fig 8 :39 "So a search that finds nothing is never a proof of absence." Fig 13 :134 "Unreachable is a verdict here, not a silence".

### 1.3 Partition or union

D1 and D2 overlap: a mechanism's composition is what generates the fit, so their overlap is a compound with its own loop. D3 and D4 overlap: an expert reading is itself an instrument with a channel that can decay (Fig 10 :24). The whole question is a **union**, not a partition.

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The unbundled conditions are:

- **C1, pattern fit:** do the models reproduce the observed pattern at all? Necessary, settled on o'.
- **C2, source identity:** which mechanism would return the observed pattern, and what would it return elsewhere? Not settled.

A lever on C1 (more data of the same kind, a better optimizer, a tighter score) leaves the intersection standing, because C2 still binds. This is why "collect more data" is not an answer to this question by default. The Library of Babel essay warns in the same terms: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

Fig 3 :20 "The chain is ordered by dependency, not by importance." Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

Order for this question: 1 perception (can the current instrument tell the models apart at all? answer: no, that is the given), 2 vocabulary (does either Γ have terms for what the proposed intervention affords?), 3 objective (state what would count as a discriminating observation), 4 planning (design or find the intervention), 5 learn and carry (record which discriminator worked and carry the method, not the recording).

The chain usually breaks at link 3. There is no instrument for "what would count as a difference between mechanisms", so effort lands above the break, on fit, where the measurements already exist. Fig 3 :29-30: *"Most improvement effort in practice lands above the break, because that is where the measurements already exist."* The fix is the Formula's Direction discipline: bind S2 as an ordinary term so it can accrue a residual and be checked.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual, global near zero with a live slot is legal | governs how the residual is indexed, not which model wins |
| 2 The Ground | anchor test, independence, two collapses, triangulation | governs the witness rule and the notion of a discriminator |
| 3 Dependency Chain | middle link breaks first, effort lands above the break | governs diagnosis order |
| 4 The Membrane | pattern is a recording; methods cross up, head starts down; R_T | governs why fit alone is not capability |
| 5 Mint Pipeline | settlement necessary not sufficient; no occasion-perfect term | governs why a perfect fit does not license a mechanism |
| 6 Closure / Reachability | import moves the wall; inward and outward are opposed instruments | governs how a discriminator is found |
| 7 Room Chain | same closure handed along, agreement compounds | governs why more fitted models do not corroborate |
| 8 Union Surplus | closure idempotent, convergence vs import, residual first | governs triangulation and provenance |
| 9 Leave / Arrive | union vs partition, describe the effect, filters vs witnesses | governs the unbundling and the census itself |
| 10 Ground Maintainer | verifier non-access, bring the residual not the source | governs first contact and declaration of stake |
| 11 The Habitat | capability is agent-and-habitat; a test harness proves wiring | governs why an in-sample reproduction is not a mechanism |
| 12 The Bond | isomer, functional group, arrangement is the substance, two currencies | decisive for what "same pattern, different mechanism" is |
| 13 Minimum Viable Set | closed set, open arrangements, different routes to one substance | governs the honest stop and the shape-not-a-name limit |
| Operators table | ⋛ is a threshold relation, ≻ is not defined here; symmetry test | governs the type of the comparison |
| Symbols table | R is the aim and a slice; the ground is the anchor | governs the source residual |
| Formula steps 3, 5, 7 | guards, settlement, SEARCHED / INWARD / OUTWARD | governs the route to a discriminator |

Strain test applied during this census: an early attempt to apply Fig 13's six physical terms directly to "model components" only fit by calling a parameter a kind of energy and a network layer a kind of gradient. That is a strain, so Fig 13 does **not** govern the internal furniture of an arbitrary model. Re-census sends Fig 13 to the honest-stop and isomer-analogue role only (section 4, S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable reading of this question, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Agreement on the pattern is one evidence pool, not a verdict

**Mode: `general`. Domain D1, D4. Status: triangulated (Fig 2 and Fig 7, low overlap: anchor/independence rule versus room chain).**

Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" Fig 7 :13 "agreement compounds, evidence does not".

Two models fitted to the same sample, scored on the same holdout, and reviewed by the same community are not independent witnesses to the mechanism. They are readings of one pool. Fig 2 :42 "Buy independence in proportion to the cost of being wrong." If the cost of choosing the wrong mechanism is high, the right purchase is an independent frame or a new instrument, not another model trained on the same data.

*The Hard Problem is About Source* sharpens this: an instrument that cannot distinguish the cases *"demonstrates its own inadequacy"* and cannot then claim to have settled the source. The pattern is such an instrument by construction, because the question stipulates that both models reproduce it.

**Refuter:** a discriminating measurement on which the two models return different values, made before any verdict is recorded. If it fires, the agreement was not the whole evidence and this finding is confirmed, not refuted. The finding is refuted if it can be shown that two frames drawing on exactly the same evidence can discriminate a third mechanism at maximum independence. That would require evidence about the mechanism inside the shared pool, which contradicts the question's premise.

### F2: Same pattern, different arrangement: models are isomers or metamers under the flat formula

**Mode: `general` for the shape, `specified` for the claim that a given pair is an isomer pair. Domains D2, D3. Status: triangulated (Fig 12 and Fig 13, low overlap: bond table versus minimum-set route claim).**

Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :94 "The arrangement is the substance." Fig 13 :121 "Different routes can arrive at the same substance." Fig 13 :123 "Two chains built from different links may compose functionally identical terms"

The observed pattern is the flat formula: the ingredients are recorded and the arrangement is not. Fig 12 :14 "the ingredients are recorded and the arrangement is not". Fig 5 :69 "settling is necessary for a term to be composed over, and it is not sufficient." Both models settle against o' and both fail to compose over the source question. *How Intelligence Actually Works* states the general case: *"The recursion converges toward indiscernibility, and indiscernibility is not identity."*

Two readings are kept separate, as Fig 12 requires:

- **Strong form, isomer:** both models are written over a shared atom set and differ only in which bond arranges which atoms. Then they are isomers: same atoms, different bond, different substance.
- **Weak form, functional group:** the models share a substructure (for example, a state that is mapped to a structure and back) but not the full atom set. Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." Then they are members of one functional group, not isomers.

World bearing, secondary only and from three genuinely different fields:

- **Systems theory / environmental modelling.** Wikipedia, *Equifinality*: *"Model equifinality refers to a condition where distinct configurations of model components (e.g. distinct model parameter values) can lead to similar or equally acceptable simulations (or representations of the real-world process of interest)."* It adds the filter warning: *"This similarity or equal acceptability is conditional on the objective functions and criteria of acceptability defined by the modeler."* Predicts the flat-formula condition and the filter rule. **Corroborates** F2 and F1.
- **Statistics / system identification.** Wikipedia, *Identifiability*: *"A model that fails to be identifiable is said to be non-identifiable or unidentifiable: two or more parametrizations are observationally equivalent."* Predicts exactly the two-models-one-pattern premise. **Corroborates** F2. Note the same page distinguishes partial identifiability: *"it is still possible to learn the true values of a certain subset of the model parameters"*, which is the per-slot indexing of F4 at the parameter level.
- **Philosophy of science.** Kyle Stanford, SEP *Underdetermination of Scientific Theory* (2009, revised 2023): *"there are an infinite number of distinct mathematical functions describing different curves that will pass through all of them."* Also Mill, quoted there: *"an hypothesis...is not to be received as probably true because it accounts for all the known phenomena, since this is a condition sometimes fulfilled tolerably well by two conflicting hypotheses"*. Predicts that fit cannot select. **Corroborates** F2 and F3.
- **Evolutionary biology, low overlap.** Wikipedia, *Convergent evolution*: *"Convergent evolution is the independent evolution of similar features in species of different lineages."* Different histories, one observed form. **Corroborates** the isomer shape at a different stratum.
- **Cognitive science, low overlap.** Wikipedia, *Multiple realizability*: *"the same mental property, state, or event can be implemented by different physical properties, states, or events."* Piccinini's distinction there is useful: a spring mousetrap and a glue mousetrap share a property through different mechanisms. **Corroborates** the functional-group reading at another stratum.

These five sources do not share a single evidence pool: systems theory, statistics, philosophy of science, evolutionary biology and cognitive science. Their agreement is weak corroboration of the *shape*, not of the figures' authority, and none names which mechanism is right.

**Refuter:** show that the two mechanisms can be written over no shared atom set and share no functional substructure, so neither the isomer nor the functional-group reading holds; or show that the observed pattern determines the bond, so the models are not indiscernible after all.

### F3: Fit is necessary but not sufficient; criteria are filters, never witnesses

**Mode: `general`. Domains D1, D3. Status: triangulated (Fig 5 and Fig 9, low overlap: settlement amendment versus leave-arrive rule).**

Fig 5 :69 "settling is necessary for a term to be composed over, and it is not sufficient." Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."

A model that reproduces o' has paid for its fit. It has not thereby purchased the standing to answer the source question. A score such as AIC or BIC prices the description (bits, parameter count, penalized likelihood). It does not price the actions needed to find out which mechanism holds. Conflating the two is the error Fig 12 names, and the whole model-selection literature lives in that conflation when it is used to decide mechanism truth.

Fig 5 :43 "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly." A model that fits only the observed occasion, with no out-of-regime consequence, pays the second half of that sentence.

World bearing, secondary. Wikipedia, *Model selection*: *"Given candidate models of similar predictive or explanatory power, the simplest model is most likely to be the best choice (Occam's razor)."* The same page separates the two objectives and gives the crucial warning: *"the selected model may simply be the lucky winner among a few close competitors, yet the predictive performance can still be the best possible. If so, the model selection is fine for the second goal (prediction), but the use of the selected model for insight and interpretation may be severely unreliable and misleading."* That is Fig 9 :60 in the statistics vocabulary. **Corroborates**, with the same field as the identifiability source (one statistics witness, not two).

**Refuter:** exhibit a selection criterion whose value changes with the mechanism while holding the sampled pattern fixed, and validate it on a ground where mechanisms are known. If such a criterion exists, it is a witness, not a filter, and F3 is narrowed.

### F4: The residual is a source residual on an unmeasured slot; index it per slot

**Mode: `general`. Domain D1, D2. Status: single-source within the framework (Fig 1 and Symbols table share a pool), triangulated with the source essay (same author, so weak).**

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13 "a global R near zero with one live slot residual is a legal state". Symbols table: *"what cannot be perceived yet is residual and simply cannot be read."*

The practical instruction is to find the live slot before choosing a frame: the tail, the transient, the intervention, the scale at which the models quietly diverge. *The Hard Problem is About Source* gives the discriminating case: green can be one light, yellow plus blue, RGB, CMYK, or a scheme not yet known, and it was the spectrometer rather than an argument that separated them. Fig 9 :53 "Nobody chooses. The gap does, and the gap is only as good as its description."

**Refuter:** a case where a single global fit score already returns the mechanism-discriminating signal without per-slot decomposition, on a ground where the mechanism is known. That would falsify the application of Fig 1 :19 here, though not the figure itself.

### F5: The discriminator is an instrument, not more of the same data; inward and outward are two tracks

**Mode: `general`. Domain D3. Status: triangulated (Fig 6, Fig 3, Fig 9, distinct roles).**

Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 6 :34 "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there." Fig 6 :30 "The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit".

The route has three distinct branches, and they must not be collapsed (Formula step 7):

1. **SEARCHED**, asked first: is the discriminator already in the candidate space and unfound? Fig 6 :49 "more search at the same reach: is it in here and unfound? The closure does not change." This is where a designed intervention on an already-measured variable belongs. Distribute the search and keep the searchers independent (Fig 6 :50).
2. **INWARD**: extend an instrument that is already returning something that fails to resolve. Sharpen in our own terms. A spectral line that blurs two mechanisms is an edge to extend from.
3. **OUTWARD**: characterize `R_source` in effect terms, then find a frame whose closure predicts its shape. Fig 6 :30 says cast the description in effect terms so it travels. Fig 8 :53 "Residual first, frame second."

INWARD and OUTWARD are opposed and are never read against each other (Fig 6 :31). Also distinguish underivable-in-principle from unreachable-at-this-budget. Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 8 :39 "So a search that finds nothing is never a proof of absence."

World bearing, secondary. In *How Intelligence Actually Works*, the mined-versus-lab-grown diamond case shows a trace that becomes readable when isotope ratios are measured, while the green-light case shows a projection with no recoverable trace. Both are the same question with different answers, and the difference is an instrument. *They're Scanning Books When They Should Be Studying Nature* adds: *"The real import is not a new term in the existing space. It is a new dimension of the space."*

**Refuter:** a documented case where collecting more observations of the same pattern, with no new intervention, instrument, or frame, separates two mechanisms on a known ground. For that case, the "instrument owed" claim is false and F5 is narrowed to cases with a true projection loss. The opposite failure, claiming a permanent gap where an instrument already returns a failing resolution, refutes the application of Fig 6 :34 and sends the case back to INWARD.

### F6: Independent frames, not a larger room of agreeable readers

**Mode: `general`. Domain D4. Status: triangulated (Fig 2, Fig 7, Fig 8, low overlap).**

Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :42 "Buy independence in proportion to the cost of being wrong." Fig 8 :50 "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Two independent frames may arrive at the same mechanism by convergent derivation. That is the one case where agreement means something, and it is still not the ground: the content looks identical whether it was derived twice or copied once. Fig 8 teaches that only the record of provenance separates them. So the comparison protocol must record, for each model and each verdict, where the mechanism came from, which instrument settled it, and on which date.

*How a Society of Agents Would Work* gives the operational rule: *"A group is only worth having while its members stay different."* And: *"their separation as frames make them viable vantage points to range against an unmovable verifying ground that they tether to."*

**Refuter:** a case where two frames drawing on the same evidence discriminate mechanism at maximum independence, demonstrated on a ground where the mechanism is known. F6 would then be narrowed to the caution about provenance rather than the requirement of low overlap.

### F7: The comparison is a union; unbundle fit from source identity before searching

**Mode: `general`. Whole question. Status: triangulated (Fig 9 and Fig 2).**

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." Fig 9 :42 "narrowing gets you close, the ground decides".

The two loops have different instruments. C1 uses fit scores and residual plots on the observed pattern. C2 uses a discriminating instrument, an intervention, or a low-overlap frame. Applying a C1 lever to a C2 failure is the error Fig 3 names: effort above the break arriving at a step that cannot use it.

World bearing: the Library of Babel essay's *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* predicts the unbundling directly. Wikipedia *Equifinality* distinguishes process equifinality (real open systems) from *model equifinality* (conceptual open systems), which is the same partition concern in the modelling vocabulary.

**Refuter:** a single intervention that clears both conditions at once, with no categorically different residue left over, on two independent grounds. That would show the problem was a hard partition after all.

### F8: Which mechanism is right is a `gap`, not a hidden answer

**Mode: `general` limit. Domain D3. Status: triangulated (Fig 9, Fig 13, canonical README).**

Fig 9 :32 "you get a kind of thing, never the answer itself". Fig 13 :133 "what it returns is a shape rather than a name." Fig 13 :134 "Unreachable is a verdict here, not a silence". Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room."

After a genuine re-census no figure line selects a mechanism by name from the pattern. The figures return the shape of the discriminator: what it must separate, that it must be answerable to a ground, that it must not update when the modelers argue. They do not say "choose the agent-based model" or "choose the differential equation". Naming a mechanism is a binding from the domain frame onto an atom already held, provenanced as such, or a settlement by an instrument. Until one of those, the name is the researcher's contribution.

The canonical README's phrase is *"what a missing thing would have to look like (a shape, not a name)"*, and the subject is a missing primitive. Here the missing thing is an instrument, not a primitive, but the limit holds in the same direction: the framework reports what the discriminator must be able to do, not which mechanism will win.

**Refuter:** a figure line that, after re-census, names a mechanism class as the winner of a pattern-only comparison. None was found.

---

## 4. Strains, re-census, and honest gaps

- **S1, Fig 13 versus model internals.** An early reading tried to call model parameters and network layers instances of energy and gradient. That strains Fig 13, whose six terms are a physical substrate. Re-census: Fig 13 governs the six primitives and the honest-stop rule, not the furniture of an arbitrary statistical or computational model. It is used here only for the isomer/route analogue (Fig 13 :121, :123) and the gap verdict (:134). Named strain, resolved by re-census, not smoothed.
- **S2, more models: search or import?** Fig 6 :49 says more search at the same reach visits more of the space without changing the closure. Fig 6 :23 says only contact with a differing closure moves the wall. Adding a third model is therefore either SEARCHED (same atoms, more of the space) or OUTWARD (a frame with a different closure), and the two have opposite instructions. This is not a contradiction but a census obligation: record which one the new model is, with provenance (Fig 8 :51-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*).
- **S3, the world's "empirical equivalence" versus the figures' defeasible reach.** The SEP entry notes that empirical equivalence judgments are defeasible as instruments change. This does not conflict with the figures: Fig 8 :39 says a search finding nothing is no proof of absence, and the source essay says a below-horizon case is *"never a settled verdict, only a report that nobody has reached it yet."* One pool, consistent, no flip needed.
- **S4, partial identifiability versus the union split.** A model can be partially identifiable even when overall non-identifiable (Wikipedia, *Identifiability*). That is the union from F7 at the parameter level: some slots are settled, others are not. Re-census keeps the per-domain verdicts separate rather than declaring the whole comparison a single failure.
- **After re-census: zero live strains, one declared `gap` (X2 / F8), one scope narrowing (S1), one census obligation (S2).** Nothing hidden.

---

## 5. Pre-registered refuter

Required before any outreach. Seat Map: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim S is refuted if any of the following holds:

1. A figure line is found that, after re-census, names a mechanism class as the winner of a pattern-only comparison. Breaks Fig 9 :32 and Fig 13 :133.
2. Two models with different mechanisms are shown to share neither a full atom set nor a functional substructure, and nevertheless reproduce the same pattern in a way the figure set can describe. Breaks the isomer / functional-group dichotomy of Fig 12 :117 and :124.
3. A global fit score is demonstrated, on a ground where the mechanism is known, to return the mechanism-discriminating signal without per-slot decomposition. Breaks the application of Fig 1 :19 and :22 here.
4. More observations of the same pattern, with no intervention, instrument, or differing frame, separate the mechanisms on a known ground. Breaks the "discriminator owed" claim in F5.
5. Two frames drawing on exactly the same evidence discriminate mechanism at maximum independence on a known ground. Breaks Fig 2 :31 and :40.
6. A single lever clears both C1 and C2 with no categorically different residue, on two independent grounds. Breaks Fig 9 :54 and :57.

If any fires, the shape is withdrawn or narrowed and the retraction is recorded here, visibly. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. **Stop treating a fit ranking as a mechanism verdict.** Report scores as filters for the budget, with the candidate set and the scoring rule declared (F1, F3, Fig 9 :60).
2. **Re-state the residual as a source residual per slot.** Find the live slot where the models quietly diverge and describe it in effect terms before naming any frame (F4, Fig 9 :27-28).
3. **Unbundle the union.** Run C1 (fit) and C2 (source identity) as two loops with two instruments. Do not apply a C1 lever to a C2 failure (F7, Fig 3).
4. **Buy one independent bearing.** Prefer a discriminating measurement or intervention. If that is unavailable, use Fig 6's two tracks: INWARD on an instrument already returning a failing resolution, OUTWARD to a frame with a differing closure. Record which track supplied any atom (F5, F6).
5. **Bind S before the run.** Write down what a discriminating answer would look like, so the preference is refusable by the same test as everything else (Formula, "Direction").
6. **Keep the lineage.** Record for each verdict which instrument settled it, where the mechanism came from, and the date. Convergent derivation and adopted import look identical in the contents (F6, Fig 8 :51-52).
7. **Report the honest stop.** Say plainly that which mechanism is right is a `gap` until a ground settles it. Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator, that is the residual, the shape, and the refuter, not the conclusion.

---

## 7. Canonical usage check (figures README + WATSON 60, 2026-11-22)

Two local sources were read after sections 0 to 6 and they govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws and decide design questions by derivation, not by escalation to the anchor. Fig 9 :60's filter rule is named there as *"thresholds are filters, never the decision."* The seat must not ask for rulings the figures already decide.

### Retractions and confirmations

| earlier finding | status after the canonical check |
|---|---|
| "models are isomers" as a flat claim | **Narrowed.** Kept as the strong form over a shared atom set; otherwise the functional-group reading of Fig 12 :124 applies. Scope correction, not a withdrawal. |
| "collect more data to break the tie" in an early draft | **Retracted.** Same-pattern data are one evidence pool (Fig 2 :40). The correct branches are SEARCHED, INWARD or OUTWARD, not more of the same recording. |
| "AIC/BIC decide which mechanism is true" in an early draft | **Retracted.** Filters for budget, never witnesses (Fig 9 :60). The statistics source agrees. |
| "Fig 13's six terms are the model's atoms" | **Retracted at scope level.** Strain S1. Re-census sent Fig 13 to the honest-stop and isomer-analogue role only. |
| "adding a third model always helps" | **Narrowed.** S2. It is either more search at the same reach or an import with a source gate and a debit against independence. |
| F8, which mechanism is right | **Canonically confirmed as a `gap`.** The README's shape-not-a-name rule and Fig 9 :32 govern. A search finding nothing is no proof of absence (Fig 8 :39). |
| "the mechanism is unobservable in principle" | **Not asserted.** No nameable instrument was found, so X2 is a gap after re-census, not a claim of permanent impossibility. |
| S1 apparent Fig 13 versus model structure | **Not strained after re-census.** Different objects: physical primitives versus arbitrary model furniture. Matches the README's re-census rule. |
| Simulated status | **Canonically confirmed.** The architecture article's own caveat says outputs *"could never be verified if the solutions presented were not contrived to fit the formula."* |

### Eight-question recursive derivation (summary)

1. **What is the residual?** The source identity, not the pattern fit. Symbols table: it is a slice that cannot yet be read.
2. **Is it one question?** No. A union of C1 (fit) and C2 (source identity); Fig 9 :54.
3. **Do the models differ in atoms or in bonds?** In the arrangement; Fig 12 :14, :94. Isomers over a shared set, otherwise a functional group.
4. **Can the pattern choose between them?** No. It is a flat formula, one evidence pool; Fig 2 :40, Fig 5 :69.
5. **What could close it?** A source-discriminating instrument, an intervention, or a low-overlap frame; Fig 6 :23, :32.
6. **Which route?** SEARCHED first, then INWARD, then OUTWARD as opposed tracks; Formula step 7, Fig 6 :31.
7. **Can the framework name the winning mechanism?** No. It returns a shape, not a name; Fig 9 :32, Fig 13 :133.
8. **What is the stop?** Honest `gap` with provenance; unreachable is a verdict, not a silence; Fig 13 :134.

### Updated verdict

The shape survives: two models that fit one pattern are metamers under the current instrument, their difference is in the arrangement rather than the ingredients, and only a source-discriminating bearing settles which mechanism holds. The fit ranking does not. The isomer reading survives in its narrowed strong/weak form, with the scope strain S1 named and the import-versus-search obligation S2 recorded. Which mechanism is correct remains a declared `gap`. Strains after re-census: zero live, one scope narrowing, one census obligation. No-world-source conflicts: none triggered; the world sources corroborate the shape from five low-overlap fields but carry no weight for the figure verdict.
