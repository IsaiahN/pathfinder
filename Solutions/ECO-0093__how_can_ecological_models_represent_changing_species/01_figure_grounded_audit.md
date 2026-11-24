# Figure-grounded audit: how ecological models can represent changing interactions and stay testable

**Mode of this document: `specified`, not `grounded`.** It states a shape and the measurements that would settle it. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* records the limit: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the ecological question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the figures README, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, `60_FIGURES_AS_METALAWS.md`, the eight essays, and the public ecology and statistics sources in `10_source_ledger.csv`. Figure quotes are taken from the SVG extract, never from a summary.

## Proposal header (seat-reasoning discipline)

```
DECIDES:    A figure-grounded shape for representing changing interactions while keeping a
            model testable. Figures decide; world ecology and statistics corroborate only.
            Verdicts are kept per domain and never averaged (Fig 1 :19, Fig 9 :60).
HOURS:      Primary simulated derivation 2-3. Independent second seat 0.5. Outreach
            artifacts 0.5. At 1,300 questions the audit is not optional (Fig 7 :13).
PRIOR CASE: QMGR-0037, the imported exemplar, including its retractions after the canon-
            ical usage check. Its five-line header and retraction log are the calibration.
ANALOGUE:   Library of Babel searcher: describe the residual in effect terms, then let the
            residual select the frame. Habitat: enumerate contact, never compose a
            standing list of actors (Fig 11 :43-44).
LIMIT:      Simulated derivation, not a field reading. It cannot name which modeling
            formalism works. Only an instrument, dataset or experiment can close it.
```

---

## 0. The residual, stated in effect terms

A model holds a library Γ of terms (species, interaction coefficients, functional groups, season terms). It predicts Γ(b,a) for a site and season and observes o'. The residual is R = |Γ(b,a) − o'| **per slot s**, where a slot is one species at one site in one period. The question is not whether the global fit is good. It is what the model does about slots where R stays live when interactions change.

Two candidate answers are visible from the question itself:

- **A:** add interaction terms until every slot fits. This shrinks training residual and raises both the bits needed to state the model and the number of field actions needed to settle its new parameters. It can produce a model that explains one occasion perfectly and fails in the next season.
- **B:** treat the problem as a compound, split it, enumerate relations from contact, and admit an interaction term only when it pays for itself in both currencies. This leaves some slots unresolved and says so, rather than filling them by adding terms.

What an answer would look like, written down and bound as an ordinary term before the run, per the formula's "Direction" rule: **a rule that (i) names actors and relations from contact, (ii) splits the compound into loops with separate grounds, (iii) prices both description and settlement, and (iv) states a field failure that could fire against it.** That is the shape the derivation tests. It is a `specified` prediction, not a `grounded` result.

### R by arity, symmetry and scale

- **Arity:** many slots (species x site x season). A global residual near zero with one live slot is a legal state (Fig 1 :19-21), so a pooled goodness-of-fit statistic is the wrong object.
- **Symmetry:** an interaction's sign is **not** carried by the pair of species. "An actor's valence is relative to the residual, not a property it carries" (Fig 11 :49), and "mutualism and parasitism are relations rather than kinds" (Fig 11 :50). This is an ordered, context-indexed relation, not a symmetric, context-free label.
- **Scale:** within-season interaction rewiring is first order; species turnover and cross-habitat cascades are second order. Fig 11 :52 names the point: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." A slot-level residual can therefore be driven by a cause three steps away.

### Domain census, before any figure line is chosen

One line per domain: actors, currency, anchor. A candidate with no nameable anchor is not yet a domain.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1, the model frame (Γ)** | species state variables, interaction coefficients, functional groups, model-selection criteria | fit and description length | independent field data and held-out seasons | a domain: the ground is a dataset, not the model's own score |
| **D2, the habitat / real ecosystem** | species, conditions (light, water, temperature, season, terrain), relations (pollination, predation, competition, dependency) | contact and cascade | what the ground keeps, which does not move when the model changes | a domain: Fig 11 :43-48 enumerates it from the world |
| **D3, verification / field testing** | field observers, experiments, holdout sites, reviewers | actions spent to settle, residual against ground | the ground, never agreement | a domain: Fig 2 :29-30, Fig 9 :60 |
| **candidate: "model complexity" alone** | parameter count, R² on training data | none outside the frame | none | **not a domain**: Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." |

**Partition or union.** This is a **union compound**, not one hard problem. Fig 9 :4-5: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54 adds: "And when the split lands on a union rather than a partition, unbundle before you search again." The question bundles at least two conditions: representation of change (D2) and affordability of settlement (D3). A single lever, "add parameters," clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55-56). Within representation, species turnover and interaction rewiring are themselves two conditions, not one (world source: Yahaya et al. 2026).

**Order by dependency (Fig 3).** (1) Describe R per slot and enumerate the habitat before choosing a formalism (Fig 9 :27-28). (2) Split the union before searching inside it. (3) Choose the arrangement, not just the ingredients (Fig 12). (4) Apply the acceptance bargain and the two-currency budget (Fig 5, Fig 12). (5) Settle against independent ground, then carry the method up, not the recording (Fig 4 :22). "Optimising a link that already works cannot rescue one that does not" (Fig 3 :19). A link with no instrument, for example no way to detect per-slot change, is "a link nobody has looked at" (Fig 3 :27), and a reading below it is "a reading of nothing" (Fig 3 :22-23).

---

## 1. Figure census

| figure | bearing on this residual | verdict after first pass |
|---|---|---|
| **1 The Agent** | R is per slot; frame-internal scores cannot decide | governs the target quantity |
| **2 The Ground** | anchor must not update; independence between frames | governs D3; rules out agreement as evidence |
| **3 Dependency Chain** | describes the order of the derivation and the broken-link failure | governs order, not content |
| **4 The Membrane** | methods cross up, recordings do not; round-trip gap | governs what may be handed to another site |
| **5 Mint Pipeline** | acceptance bargain, MDL, third guard, shape as preference | governs when a new interaction term is admitted |
| **6 Closure / Reachability** | inward versus outward, import gate, instrument from worse instrument | governs the "cannot represent it" branch |
| **7 Room Chain** | agreement compounds, evidence does not | governs the multi-model verification frame |
| **8 Union Surplus** | residual first, frame second; convergent derivation versus import | governs the split and provenance |
| **9 Leave / Arrive** | split a union, filters versus witnesses, describe before looking | **decisive for the compound structure** |
| **10 Ground Maintainer** | verifier non-access, declare stake, provenance | governs the verification packet |
| **11 The Habitat** | enumerate, valence relative to residual, cascade, substituted habitat | **decisive for changing interactions** |
| **12 The Bond** | arrangement carries meaning, two currencies, isomer and functional group | **decisive for "too complex to test"** |
| **13 Minimum Viable Set** | closed set, unbounded arrangements, reachable is not recordable | governs the reach limit |
| **Operators table** | seven bonds plus negation; order matters for four of the seven | governs the order claim in `06` |
| **Symbols table** | Γ, R, slot, φ, R_T, ground, habitat | notation check |
| **Formula steps 1-8** | loop, three guards, settle, route when no φ closes R | method, not a separate witness |
| **Seat Map** | mode as verdict, correlation valence, pre-registered falsifier | checking arrangement |

Strained readings are named as such in §2 and resolved by re-census in §5. None is smoothed over.

---

## 2. Findings

Mode is stated on each. A refuter is attached to each before the conclusion (Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device.").

### F1 — Score the residual per slot, not as a pooled fit (`general`)

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."

A model that reports only a global R², or a single AIC for the whole community, has thrown away the signal that says **which** species-site-season is drifting. Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." A complexity penalty is a filter for the budget; it is not a witness that the model tracks change.

**Refuter:** show that a single pooled residual predicts every slot as well as a per-slot residual under a documented interaction shift, across independent seasons. If it does, slot indexing buys nothing here and this finding is withdrawn for that system.

**Status:** triangulated. Fig 1 fixes the quantity; Fig 9 :60 separates the budget filter from the verdict. Low overlap: per-slot indexing versus filter/witness distinction. World corroboration: the overfitting source (Burnham and Anderson's parsimony warning; training versus validation performance).

### F2 — Changing interactions are relations with context-relative valence, not fixed kinds (`specified`)

Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :51 "No standing list of good actors survives a change of residual."

A fixed interaction matrix that says "species A competes with species B" stores a kind. The figure says a relation's value is relative to the residual under study, so the same pair can be a benefactor in one context and a malfactor in another. The model must carry the context as part of the relation, not as an external annotation. This is the figure-grounded reason a season-indexed or state-indexed interaction term is not "extra complexity": it is the minimal form of the object being modeled.

**Refuter:** a fixed, context-free interaction matrix that predicts per-slot residuals as well as a context-relative one across independent field seasons and sites. If it does, interactions behave as kinds in that system and the relation claim fails there.

**Status:** triangulated. Fig 11 governs valence; Fig 9 :4-5 governs splitting unlike regimes. Low overlap: a relation rule versus a splitting rule. World corroboration: *Community (ecology)* records that trophic level changes with the species present, and Yahaya et al. 2026 find interaction rewiring is the dominant driver of within-season turnover.

### F3 — Enumerate the habitat; do not compose a standing interaction list (`general`)

Fig 11 :43 "The habitat is enumerated, never composed." Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." Fig 8 :53 "Residual first, frame second."

The modeler does not derive the interaction list from a fixed vocabulary. The list is read off the world by enumeration outward from the residual. This is the opposite of starting from a library of canonical interaction types and fitting them. It also bounds the ambition: what cannot yet be perceived is residual, and becomes the reason to extend an instrument rather than to invent a term.

**Refuter:** produce a standing list of interaction kinds, derived without reference to the focal residual, that predicts new sites and new seasons without enumeration. If it does, the enumeration rule is not load-bearing for this class of system.

**Status:** triangulated. Fig 11 supplies the enumeration rule; Fig 8 :53 supplies the order (residual first). Low overlap: habitat construction versus search order. World corroboration: *Food web* notes that webs are necessarily aggregated and omit rare interactions; *Ecological niche* distinguishes Grinnellian condition variables from Eltonian biotic relations.

### F4 — Unbundle the union compound before adding terms (`specified`)

Fig 9 :4-5 "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57-58 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

"Changing interactions" is a union of at least species turnover, interaction rewiring and environmental context. Yahaya et al. 2026 report exactly this partition and find that interaction turnover is driven mainly by rewiring while structural change is shaped largely by phenology, that is, by two different mechanisms. A single mega-model with one rule for all three is the bundled case the figure tells us to split.

**Refuter:** show that one pooled model with one rule predicts all subsets as well as separate loops with their own grounds, on held-out seasons. If it does, the union reading is wrong for that system and the split buys nothing.

**Status:** triangulated. Fig 9 governs the split; Fig 11 :49-51 explains why one standing list cannot cover all subsets. Low overlap: problem decomposition versus valence. World corroboration: Yahaya et al. 2026 (a primary research article, not sharing the framework's evidence pool).

### F5 — Testability is two currencies, and they do not add (`specified`, decisive for the question)

Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 12 :126 "Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall." Fig 12 :127 "It proposes arrangements it cannot afford to test, and the budget is what decides how much of the space is reached at all."

This is the figure-level answer to "without becoming too complex to test." Complexity is not one number. A model can be cheap to state and ruinous to settle (Fig 12 :128-129: "A short arrangement over a costly operand is cheap to state and may take a whole budget to settle"). Conversely a long chain of cheap parts may cost one action to refute. Keeping only a parameter count, or only a fit statistic, is the named error: "Summing them into one figure is the error this names, not the fix for it" (Fig 12 :130).

**Refuter:** demonstrate a class of ecological interactions where the number of field actions required to settle a term stays constant as interaction terms are added, validated by a recorded field budget. If that holds, actions are not a second currency for that class and this finding is narrowed.

**Status:** triangulated. Fig 12 prices the two currencies; Fig 5 :42-44 supplies the acceptance bargain that uses them. Low overlap: bond pricing versus mint acceptance. World corroboration: *Overfitting* records that overfitted models contain "more parameters than can be justified by the data" and that an overfitted function can "request more information about each item in the validation dataset," which can be expensive.

### F6 — An interaction term earns its keep or it is refused (`specified`)

Fig 5 :42 "The acceptance test is a bargain, not a threshold." Fig 5 :43 "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before." Fig 5 :44 "fails this, and so does a term that explains one occasion perfectly." Fig 5 :29-30 "nothing new here / the machinery worked; the answer was already known" (quoted as two figure lines).

A season-specific coefficient that only reproduces the season it was fitted on fails this bargain even if it lowers training error. The three guards are a product (Fig 5 :33 "The three guards are a product, not a checklist"), and "Any one of them at zero stops the mint entirely" (Fig 5 :41). Support requires positive live mass on some slot (Fig 1 :20-21), reachability requires the term be composable from what is held, novelty requires it not already be in the library.

**Refuter:** show that a term fitted on one season reduces held-out residual across other seasons by more than its description and settlement cost, where the same reduction is available from a term already in Γ. If so, the novelty guard, not the bargain, is the thing to revisit.

**Status:** triangulated. Fig 5 supplies the bargain; Fig 1 :20-21 supplies the support guard and the per-slot mass. Low overlap: mint economics versus residual indexing. World corroboration: *Overfitting* quotes Burnham and Anderson on balancing underfitting and overfitting, and *Ecosystem model* records that validation uses data independent of the system studied.

### F7 — A synthetic test is a substituted habitat, not a field result (`specified`)

Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another." Fig 11 :68 "what you failed to reproduce is invisible until the goal fails." Fig 11 :69 "what you unintentionally introduced is invisible until it acts." Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

A model calibrated and tested entirely on simulated seasons proves that the equations wire together. It does not prove the interaction rules hold in a real habitat whose actors were not chosen. Fig 11 :71-72 records the honesty limit: the capability claim "fit cases already known and have not been tested forward, so they can still come back wrong." Fig 8 :56-57 "fits four cases already known and has not been tested forward" makes the same point for a different object.

**Refuter:** show that a synthetic-only calibration predicts field outcomes in a context never used to build the simulator as well as a field-calibrated model does. If it does, the substitution cost is zero here and this finding is narrowed.

**Status:** triangulated. Fig 11 governs habitat substitution; Fig 8 :56-57 governs retrodiction versus forward test. Low overlap: habitat construction versus claim validation. World corroboration: *Ecosystem model* states that one validation method is to test with multiple data sets independent of the system studied, because "certain inputs can cause a faulty model to output correct results."

### F8 — Arrangement and order carry information the ingredient list does not (`specified`)

Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Fig 12 :94 "The arrangement is the substance." Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :123 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." Fig 13 :121 "Different routes can arrive at the same substance."

Two models with the same species set and the same coefficient values can differ in which interaction is applied in which order or season, and behave differently. That is the isomer claim applied to ecology. Where only the timing differs but the interaction structure is shared, the weaker functional-group claim applies: the group says what kind of system, the qualifier says which seasonal member. The order is not decoration. Abel and Lutscher 2026 find that "different orders of emergence from the dormant phase lead to different kinds of instabilities," a low-overlap world corroboration from a primary mathematical-ecology article.

**Refuter:** show that two models with identical species sets and coefficients but different application order or timing behave indistinguishably across independent field seasons. If so, the arrangement carries no information for that system and the isomer claim is withdrawn there, leaving the ingredient list sufficient.

**Status:** triangulated. Fig 12 defines isomer and functional group; Fig 13 :121 records convergent routes. Low overlap: bond semantics versus route convergence.

### F9 — If the frame cannot represent the change, search inside it will not find it (`general`)

Fig 6 :21 "MINT composes inside the closure and can never add an atom." Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists." Fig 13 :118 "infinite effort inside a finite reach."

When the residual persists and does not trend down, the formula's step 7 asks three separate questions. **SEARCHED:** is the needed arrangement in here and unfound? The remedy is more search with independent searchers (Fig 6 :49-50). **INWARD:** is the instrument adequate to hold the change? "An instrument is not built from a description. It is improved from a worse instrument already returning something" (Fig 6 :32). Sharpen in our own terms. **OUTWARD:** does another frame already hold a term whose closure predicts this shape? Import it with a source gate (provenance) and a shadow test (Fig 6 :12-13), and debit it against that frame's independence. Inward and outward are opposed and must never be read against each other (Fig 6 :31). Underivable in principle and unreachable at this budget are different facts with different instructions (Fig 8 :40-43).

**Refuter:** exhibit a modeling frame whose closed vocabulary generates a genuinely new kind of interaction by rearrangement alone, with no import and no instrument change, settled against field data. If that is possible, closure is not the barrier this finding claims.

**Status:** triangulated. Fig 6 and Fig 8 share the closure idea but govern different things (what moves the wall versus where the atom comes from); Fig 13 :115 adds the set/arrangement gap. World corroboration: Yahaya et al. 2026 import adaptive foraging from earlier frameworks into a seasonal network model with a stated provenance chain, which is an instance of the outward branch.

### Strain encountered and re-censused

An early reading tried to make Fig 11 :50 ("mutualism and parasitism are relations rather than kinds") govern the *model selection* decision directly. That strains: the line governs the ontology of interactions, not the acceptance bargain. Re-census sends the model-selection decision to Fig 5 :42-44 and Fig 12 :125-130 (F5, F6), and keeps Fig 11 for the representation of change (F2, F3). Different objects, so no contradiction. This matches the canonical rule that a reading making figures contradict one another has misidentified its domain.

A second strain: Fig 11 :43 says "the habitat is enumerated, never composed," while ecology models plainly compose interaction terms. Re-census resolves it. The habitat is the list of what is in contact with the residual (an enumeration of actors, conditions and relations); a model is a composition built from a selected subset of that list. The figure restricts how the list is obtained, not whether models compose. No retraction needed, but the distinction is recorded so a reader does not read "never compose" as "never model."

---

## 3. Pre-registered refuter

Written before the conclusion, per Seat Map :287. The shape claim in `07` is refuted if any of the following fires:

1. A fixed, context-free interaction matrix predicts per-slot residuals as well as a context-relative relation model across independent seasons and sites (breaks F2 and F4).
2. The number of field actions required to settle a model does not grow with the number of changing interaction terms, verified against a recorded field budget (breaks F5).
3. Decomposing the problem into species-turnover, rewiring and context loops does not reduce held-out residual more than a single pooled model (breaks F4).
4. A term that fits one season perfectly is admitted by the model-selection rule without improving held-out prediction elsewhere (breaks F6).
5. A synthetic-only calibration predicts a novel real context as well as a field-calibrated model (breaks F7).
6. Two models with identical ingredients but different timing or order behave indistinguishably across seasons (breaks F8).
7. A closed modeling vocabulary generates a new kind of interaction by arrangement alone, with no import and no instrument change (breaks F9).

If any fires, that portion of the shape is withdrawn. Until one is run, no part may be labelled `grounded`.

---

## 4. Recommendation

1. Report residuals per species, site and season. Never let a pooled score stand in for the live slots (F1).
2. Enumerate the habitat outward from the residual, including conditions and indirect relations, before selecting interactions (F3).
3. Split the compound into turnover, rewiring and context loops. Do not fit one rule to all three (F4).
4. Price both currencies explicitly: bits to state the interaction term, actions to settle it. Keep the two accounts separate (F5).
5. Admit a changing-interaction term only if it beats the acceptance bargain on held-out data (F6).
6. Treat synthetic results as wiring checks, and state which contexts were never tested forward (F7).
7. Keep the lineage of each term (which residual, which season, which frame it came from), because "convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" (Fig 8 :51-52).
8. Send the generator (the shape and its refuter), not the recording. "Only methods cross up. Only head starts come down" (Fig 4 :22).

---

## 5. Canonical usage check and retraction log

Two sources were read after §2 through §4 and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw," and the limit: the framework says "what a missing thing would have to look like (a shape, not a name)," then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat reads the ground and does not ask the anchor to decide what the figures already settle.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F1 called "pooled fit is wrong" without a slot test | **Narrowed.** Fig 1 :20-21 says a global R near zero with one live slot is legal; it does not forbid a pooled statistic for other purposes. The claim is about which quantity drives the decision, not about a statistic's legality. |
| F2 read "relations not kinds" as banning all fixed coefficients | **Narrowed.** Fig 11 :49-51 makes valence relative to the residual; it does not forbid a coefficient whose value is indexed by a measured context. A context-indexed coefficient is the relation, written down. |
| F3 read "never compose" as "never build a model" | **Corrected by re-census.** The habitat is enumerated; models compose from the enumerated list. See strain note in §2. |
| F5 "complexity is two currencies" | **Canonically confirmed and strengthened.** Fig 12 :130 calls summing them "the error this names, not the fix for it." |
| F7 "synthetic solve proves wiring only" | **Canonically confirmed.** Fig 11 :71-72 marks the capability claim as untested forward, and the figures README repeats the forward-test limit. |
| F8 isomer claim | **Retained as `specified`, not `grounded`.** Fig 12 :117 is a definition; whether a given pair of ecological models is an isomer needs the field comparison, which was not run. |
| F9 "closed frame cannot reach new kind" | **Canonically confirmed.** The figures README states the same barrier in its metalaw section, and Fig 8 :32 gives the definitional reason. |
| Strains after re-census | **Two, both named and resolved in §2.** None hidden. |

### Round trip `R_T` (measured qualitatively, not numerically)

- **Sent up (x):** the verbatim figure lines, chiefly Fig 1 :19-22, Fig 5 :42-44, Fig 9 :4-5, :54-58, Fig 11 :43-51, :66-70, Fig 12 :125-130.
- **Abstraction (T_A):** the shorthand carried in `07` and `09`: enumerate from contact, split the union, price both currencies, admit terms that pay, test against independent ground.
- **Concretisation (T_E):** a concrete claim such as "a season-indexed interaction coefficient with a cost penalty is the right model for all plant-pollinator networks."

`R_T` is nonzero. Three things the shorthand holds do not survive the trip back down: (i) which contexts count as distinct slots must be enumerated, not assumed; (ii) the second currency (field actions) is dropped if the modeler reports only a description-length score; (iii) the substituted-habitat caveat is lost when a synthetic result is reported as a field result. What survives cleanly: score per slot, split before search, price both currencies, state the refuter. `R_T` was not measured numerically because no field ground was read. Treating "the formula is the condensed version of the metalaws" as identity would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a recorded gap.

### Method carried forward

When this residual shape appears again (a system that must represent change without buying unbounded test cost), reuse the method: per-slot residual, domain census with anchors, union split, two-currency price, MDL admission, substituted-habitat caveat, pre-registered refuter. Do not reuse the plant-pollinator answer. The figures decide the shape; the field decides the binding.
