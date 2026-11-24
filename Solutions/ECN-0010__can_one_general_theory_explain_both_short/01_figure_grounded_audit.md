# Figure-grounded audit: can one general theory explain both short recessions and prolonged depressions?

**Mode of this document: `specified` on the domain verdicts, `general` on the structural shape, `gap` on the discriminator and on empirical adequacy. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that LLM output is "simulacra" and that "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Primary: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources were opened on 2026-11-22 and are listed in `10_source_ledger.csv`. Every figure quotation below was typed from the verbatim extract, not from a summary.

---

## 0. The residual, in effect terms

The question asks for one theory T such that applying T to a pre-episode state predicts both outcome classes: short recessions (duration of months to roughly two years, modest peak-to-trough loss, employment recovers) and prolonged depressions (multi-year, deep, recovery slow or incomplete, with examples the world literature names as the 1930s, Japan's long recession, and the Greek depression). The effect is not "which theory is prettier." It is: **what would have to be in a theory's closure for it to predict the duration-and-depth distribution of both classes, and is that thing reachable from what the theory already holds?**

Stated as `R = |Γ(b,a) − o'|` per slot `s`:

- **Arity.** At least two conditions, a propagation region and a persistence region, plus their intersection. The world literature adds a third: a policy-regime condition that can flip the sign of persistence (the JEL review calls it a regime change). This is a union, not a partition.
- **Symmetry.** The "short" versus "prolonged" cut is a threshold comparison `⋛` on a duration and depth quantity. It is not a symmetric join of two operand kinds. Operators :51: "a goal is a comparison, which is why a vocabulary without it cannot state one."
- **Scale.** First order inside one episode: shock, propagation, outcome. Second order across episodes: the rule that selects which region an episode enters. A confused answer mixes the two scales.
- **Slots.** Households, firms, banks, the policy regime, and the data vintage, each tracked separately. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A national duration average is the thing that hides the live signal.
- **Anchor.** The realised per-slot path, including recovery time, bankruptcies and employment, plus a counterfactual that does not move when the theory is announced. Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." But note the boundary: the *label* "depression" is partly a declared convention (a 10 percent output fall or two years, per the world source on economic depression), and Fig 10 :18 says "a declared meaning is not a grounded one." The measured path is anchor-like; the category boundary is a convention until a ground settles it. That distinction is load-bearing in F3.

**What an answer would look like, bound as an ordinary term before the run** (Formula "Direction"): either (A) one fixed closure and one parameter set predicts both distributions out of sample with a per-slot residual that trends down, or (B) one closure spans both regions only by containing a regime selector, a persistence cycle with a sign, and a refusal of at least one held convention, with the selector's value a `gap` until an instrument returns it, or (C) no such closure exists and the question must be split. The refuter in section 5 is written against this binding before any conclusion is drawn.

---

## 1. Domain census

One line per domain with actors, currency and anchor. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | partition or union | status |
|---|---|---|---|---|---|
| **D1 Measured episodes** | output, employment, prices, bank balance sheets, data vintages | realised per-slot outcomes and their time path | the realised path plus a non-updating counterfactual | union of two regions on one trajectory | domain, anchor partly conventional at the label boundary |
| **D2 Propagation theory** | shocks, nominal rigidities, financial accelerator, expectations | fit to ordinary high-frequency fluctuations | ordinary recession data | fits the short region only | domain |
| **D3 Persistence theory** | debt overhang, zero lower bound, hysteresis, policy regime, credibility | fit to deep and long episodes | depression episodes | fits the long region and the intersection | domain |
| **D4 Unifying claim** | natural rate, policy regime, selector condition, closure boundary | cross-episode prediction of region and duration | out-of-sample episode assignment | union handled in one closure, if the closure holds the selector | domain, predicate `gap` |
| **D5 Verification frame** | expert readers, replicators, data vintages | agreement versus residual | the ground, never agreement | not a content domain; a checking arrangement | domain |

**Dependency order (Fig 3).** The chain is ordered by dependency, not by importance: Fig 3 :20 "The chain is ordered by dependency, not by importance." The order here is (1) per-slot residual and vocabulary for what an episode affords, (2) objective, meaning a declared duration/depth comparator, (3) propagation loop, (4) persistence and regime loop, (5) unifying claim carried across episodes. The break is between (1) and (3): there is no instrument that assigns a live episode to a region before the outcome. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Effort spent on step (4) before step (1) arrives at a step that cannot use it. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

**Habitat enumeration (Fig 11 :43).** "The habitat is enumerated, never composed." In contact with the residual: the data producers and their revision schedule; central bank reaction functions and their regime changes; bank solvency and collateral values; household debt and deleveraging; labour market institutions and long-term unemployment; expectation formation; fiscal rules and gold-standard or exchange-rate commitments; the early-warning literature from ecology and complex systems. Second-order contacts: the same actor changes valence with the residual. Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." A debt overhang is a propagation amplifier in one habitat and the persistence mechanism in another. Third-order contacts matter: a regime change alters what counts as a credible policy action, which alters expectations, which alters duration. Fig 11 :52: "Scoping the habitat to direct contact is how DDT reached the eagles". The union is not a list of causes; it is a region map over a habitat.

---

## 2. Figure census

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | residual per slot; ground the only metric; aggregate hides signal | the national duration average is not the object |
| **2 The Ground** | anchor must not update; triangulation not negotiation; correlation disqualifies a verdict | realised outcomes anchor; agreement among schools does not |
| **3 Dependency Chain** | dependency order; the middle link lacks an instrument | the regime discriminator is the break |
| **4 The Membrane** | methods cross, recordings do not; round trip gap | a unifying method can cross episodes, a fitted result cannot |
| **5 Mint Pipeline** | three guards as a product; MDL bargain; persistent flat residual points a refusal | a theory that explains both by naming everything fails the bargain |
| **6 Closure / Reachability** | import moves the wall; depth and absence look the same from inside | whether persistence is in a model's closure or merely unfound is undecidable from inside |
| **7 Room Chain** | no last room; agreement compounds, evidence does not | a final all-explaining theory is structurally refused |
| **8 Union Surplus** | closure idempotent; underivable versus unreachable; residual first | no amount of calibrating the short-region model adds the persistence atom; importing a wrong atom costs more |
| **9 Leave / Arrive** | split versus search; union unbundling; describe effect before choosing a frame | the question is a union and must be split before it is searched |
| **10 Ground Maintainer** | convention versus ground; channel decays, ground does not; verifier non-access | the depression threshold is a convention; the data channel can go stale; show the refuter before the theory |
| **11 The Habitat** | actor valence relative to residual; introduction not exclusion; capability is agent and habitat | the same shock yields different regions in different habitats |
| **12 The Bond** | cycle sign, isomer, functional group, comparison, subtraction, negation | short and long are functional-group variants; persistence is a signed cycle; regime change is a refusal |
| **13 Minimum Viable Set** | closed kinds, open arrangements; a shape and a stop, not a name | the union's kinds are closed; the arrangements over them are not; the selector is `gap` |
| **Operators table** | `⋛` comparison, `−` subtraction, `¬` negation | duration cut is a comparison; progress is a subtraction; regime change owes a refusal |
| **Symbols table** | `R` is per slot; the ground is the anchor; `R_T` measures the lossy round trip | reinforces D1 and the R_T accounting in `11_audit.md` |

Strained readings are named in section 4, not smoothed over.

---

## 3. Findings

### F1: the question is a union, not a partition, and not one hard problem (decisive for the framing)

Fig 9 :4: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "a case in two conditions is not a harder case of either".

The two literatures behave exactly like this. Propagation models (shocks plus nominal rigidity plus financial accelerator) work well on the short region and poorly on the long one. Persistence mechanisms (debt deflation, liquidity trap, hysteresis, regime change) work well on the long region and are largely idle in the short one. A single lever that improves propagation leaves the intersection standing because the persistence condition still binds. So "one general theory" cannot mean "one mechanism with one parameter set". That reading fails before any econometrics. **Mode: `general`, triangulated** across Fig 9 :4, :55-57 and Fig 8 :32.

**Refuter:** show that short and long episodes are generated by one condition observed at two horizons, so that a single lever clears both the exclusive and the intersection regions with a residual that trends down per slot.

### F2: a theory cannot manufacture a missing atom by calibration

Fig 8 :32: "no search, however long, adds an atom". Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

If a propagation model's closure contains no debt-overhang state, no zero-lower-bound constraint, no hysteresis channel and no regime variable, then no amount of fitting to ordinary recessions adds one. Conversely, if it already contains them and the search has not found the right arrangement, the remedy is more search, not another import. Fig 8 :40: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."

The world-side unification review is instructive here: it does not obtain coverage by refining a standard shock model. It imports the negative-natural-rate condition and the policy-regime switch from a different closure, then shows how the same framework handles three landmark downturns. That is an import with a source gate, not a fit. **Mode: `specified`, triangulated** across Fig 6 :23 and Fig 8 :32/:40.

**Refuter:** exhibit a model with no persistence atom in its primitives that nevertheless predicts depression duration out of sample with a per-slot residual that trends down, across independent data vintages.

### F3: the depression boundary is a convention; the regime difference is not

Fig 10 :18: "a declared meaning is not a grounded one." Seat Map :167: "Declaring a meaning does not ground it." The world source on economic depression records two competing definitions: a peak-to-trough output fall above 10 percent, or a recession lasting two or more years, and notes that under one definition every depression is a recession while under the other they are distinct events with different end dates.

This is not a reason to dismiss the category. It is a reason to separate two objects. The **cut** at two years or ten percent is a convention, and Fig 10 :47 warns: "a convention that decides an outcome has stopped being one." If the label determines which mechanism is applied, the convention has become a verdict. The **regime difference** is the world fact: a debt-deflation spiral, a liquidity trap with a zero lower bound, and hysteresis are not the same arrangement as an ordinary inventory cycle. The honest form is to keep the measured trajectory as anchor, declare the cut, and let the mechanism be decided by the per-slot residual, not by the label. **Mode: `specified`, triangulated** across Fig 10 :18/:47 and the world source.

**Refuter:** show that the category boundary is itself ground-settled (a discontinuity in the data that all observers locate at the same point) and that mechanism assignment by label predicts as well as mechanism assignment by residual.

### F4: persistence is a signed cycle, not a longer chain

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

Fisher's nine-link chain, as recorded in the debt-deflation source, is not a chain in the figure's sense once the output re-enters as input: falling prices raise real debt, which forces distress sales, which lowers prices further. Minsky's description is explicit that "inflation feeds upon inflation and debt-deflation feeds upon debt-deflation." The sign of the loop is what distinguishes a self-arresting recession from a self-deepening depression. Hysteresis is the same structural object in the labour market: a temporary shock permanently shifts the expected unemployment path, so the loop does not return to its prior state. Fig 12 :121 therefore governs the persistence region; it does not govern propagation alone. **Mode: `specified`, triangulated** across Fig 12 :121, Fig 13 :31-32 (a remainder compounding through an amplifying chain) and the world sources on debt deflation and hysteresis.

**Refuter:** show a depression episode whose persistence is fully accounted for by an open chain with no re-entrant output, or a cycle whose measured sign is positive (damping) while the depth and duration remain depression-class.

### F5: short and long are functional-group variants, and are isomers only under a fixed atom set

Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Both classes can be written as a first-order molecule over a shared macro atom set: `state (output or employment) -> structure (propagation or persistence bond) -> state (recovery or further decline)`. That shared `state -> structure -> state` substructure is a functional group: it fixes the kind, "downturn with propagation". The qualifier (which bond closes, which regime is active) fixes the member. Under a fixed atom set containing the propagation and persistence structures, two episodes differing only in which bond closes are isomers: same atoms, different arrangement, different duration, invisible in the aggregate path alone and decisive in which policy pays. If one episode requires an atom the other does not, the isomer claim fails and only the functional-group claim stands. **Mode: `specified`, single-source for the figure definition, with the fixed-atom condition named as live.**

**Refuter:** exhibit an episode pair where one class requires an atom absent from the other's closure (for example a depression with no counterpart to ordinary propagation), in which case the isomer reading is withdrawn.

### F6: the unifying level compares settled episodes, and that raises a type question

Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world." Each episode whose outcome has been settled against the data can serve as an atom at the next level, so a theory of the *distribution* over episodes composes over settled episodes without needing a seventh primitive. But the comparison bond is defined in the Operators table as "a threshold relation between two quantities", and at the unifying level the operands are settled molecules now serving as atoms. Fig 12 :104 permits the demotion to atom; whether an atom counts as a quantity at that level needs an instrument, not an argument. This is a strain, not a correction. **Mode: `specified`, single-source with a live strain.**

**Refuter:** prove that settled molecules cannot enter a `⋛` relation at the higher level, or produce an instrument that settles the operand type either way.

### F7: regime change is a refusal, and a vocabulary without negation can only accumulate

Fig 5 :59: "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at". Operators :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate". Fig 6 :42: "What is recorded only grows. What is reachable is derived, and it can fall."

The world-side unification review reports that regime changes, such as the 1933 abandonment of the gold standard and balanced-budget dogmas, reversed deep slumps by credibly shifting expectations. In figure terms that is not another composition inside the same closure. It is a refusal of a held convention, a `¬` operation that removes the standing of the old rule as something to compose over, after which the reach falls or re-shapes. A macro theory that can only add mechanisms and never refuse a convention can accumulate terms forever and still miss the reversal. **Mode: `specified`, triangulated** across Fig 5 :59, Operators :58 and the JEL review.

**Refuter:** show a depth-to-recovery transition fully explained by adding a new propagation term with no refusal of any held policy convention, with the residual trending down per slot.

### F8: the ground is the realised path, not agreement among schools

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool". Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Keynesian, monetarist, new classical, post-Keynesian and complexity accounts draw on overlapping macro data pools. Their agreement, when it occurs, is one pool talking. Their disagreement is useful only when the frames are ranged separately against a non-updating anchor: realised per-slot outcomes and a counterfactual. Fig 2 :42: "Buy independence in proportion to the cost of being wrong." **Mode: `general`, triangulated** across Fig 2 :35/:40 and Fig 7 :35.

**Refuter:** produce two genuinely low-overlap instruments that range the same claim against the ground and agree, with a stated evidence-pool overlap near zero.

### F9: the cross-episode selector is a `gap`, reported as a verdict

Fig 13 :134: "It can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again." Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 8 :39: "a search that finds nothing is never a proof of absence."

No figure line names an instrument that assigns a live episode to the persistence region before the outcome. The world side shows that such instruments are being sought, not that one has settled the case: the early-warning literature reports generic signals (rising autocorrelation and variance, critical slowing down) and immediately notes that it remains unclear how well they work across systems or whether they give enough time to act; the output-gap source notes that potential output "is not an observable variable". The ecological regime-shift source adds the sharper warning that the point at which a system flips one way differs from the point at which it flips back. So the selector is unreached at this budget, not underivable in principle. **Mode: `specified` on the shape of the owed instrument, `gap` on its identity.**

**Refuter:** exhibit a real-time selector with a non-updating anchor and low-overlap instruments that assigns episodes to regions before the duration is known, and whose accuracy survives a data revision.

### F10: a final covering theory is structurally refused

Fig 7 :6: "the limit: no last room". Fig 7 :13: "agreement compounds, evidence does not". Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room." The canonical figures README has a section titled "This is not a Theory of Everything, and that is the point."

If "one general theory" means a terminal frame after which nothing further can be asked, the framework forbids it definitionally. If it means a generator that can be applied per episode and per slot and then revised, it is exactly what the loop permits. The literal question therefore has two answers at two scopes, and conflating them is the error. **Mode: `general`, triangulated** across Fig 7 :6/:13, Fig 9 :44 and the canonical usage rule.

**Refuter:** amend the figures so that a last room is admitted, or exhibit a frame with no outside left to import from.

### F11: a theory that explains everything by naming everything fails the bargain

Fig 5 :43: "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before." Fig 5 :44: "fails this, and so does a term that explains one occasion perfectly."

A "general theory" that adds a special mechanism for each episode (a Gold Standard mechanism for 1933, a ZLB mechanism for 2009, a hysteresis mechanism for the 1980s, a debt-overhang mechanism for Greece) explains every occasion perfectly and states nothing general. The MDL bargain refuses it. What survives is a short closure whose region selector has a written shape and a written refuter. The world-side review earns its keep precisely because it is a review: it unifies three downturns with a small set of conditions rather than a new term per episode. **Mode: `specified`, single-source for the figure rule.**

**Refuter:** show that the compact closure's stated length plus its unexplained residual exceeds the episodic account's, under a declared code.

### F12: the round trip from figures to macro claim is lossy and its gap must be stated

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The Symbols table defines `R_T` as `gap(x, (T_E ∘ T_A)(x))`. Abstraction from the figures to the shorthand "union plus signed cycle plus refusal" throws away the per-slot indexing, the convention-versus-ground distinction, the operand type of `⋛` at second order and the requirement that the selector have a non-updating anchor. Bringing the shorthand back down as a claim about actual macro models produces a different object unless those four constraints are carried explicitly. The gap is recorded qualitatively in `11_audit.md`, not set to zero. **Mode: `general`, triangulated** across Fig 4 :30 and the Symbols table.

**Refuter:** show that the shorthand preserves all four constraints under a declared transform, with a measured zero round trip gap.

---

## 4. Strain test and re-census

| apparent strain | re-census result |
|---|---|
| Fig 13's six physical terms (space, time, energy; spectrum, gradient, network) do not map onto macro atoms. | **Not a strain after re-census.** Fig 13 governs the minimum substrate of any composed physical system. Here the atoms are macro quantities in Γ, not a new seventh primitive. Naming "shock", "debt overhang" or "policy regime" is a binding from the economics frame onto held slots, recorded as provenance, not a derivation from the six. This is the same narrowing the earlier ECN solutions recorded. |
| "Depression is a convention" versus "depression is a different regime". | **Not a contradiction after re-census.** Fig 10 :18 governs the meaning of a declared cut; the debt-deflation and hysteresis sources govern a world mechanism. Map versus territory. A convention that decides mechanism assignment commits the Fig 10 :47 error. |
| "One theory can span both" versus "no last room". | **Not a strain after re-census.** The first is a claim about a closure applied per episode; the second is a claim about a terminal frame. Different objects. A generator can be general without being final. |
| `⋛` is defined over two quantities, but F6 compares settled molecules at the unifying level. | **Live strain, named.** Fig 12 :104 permits the demotion to atom; no figure settles whether an atom counts as a quantity at that level. Kept open in `06`, `08`, `09`, `11`. |
| A single lever should clear a union if the two classes are one condition at two horizons. | **Live alternative, not hidden.** It is refuter F1. If it fires, the union reading collapses and the answer changes to a single-mechanism theory. Not executed at this budget. |

After re-census: one live type strain and one live alternative refuter, both named; zero silent strains.

---

## 5. Pre-registered refuter

Written before the conclusion, per Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device."

The shape claim is refuted if any of the following holds:

1. **Single-condition firing (F1).** Short and long episodes are shown to be one condition observed at two horizons, and one lever clears both exclusive and intersection regions with a per-slot residual that trends down across independent data vintages.
2. **No-import firing (F2).** A model with no persistence atom in its primitives predicts depression duration out of sample with a residual that trends down per slot.
3. **Convention firing (F3).** The category boundary is ground-settled and mechanism assignment by label predicts as well as assignment by residual.
4. **Cycle-sign firing (F4).** A depression-class episode's persistence is fully accounted for by an open chain with no re-entrant output, or its loop sign is damped while depth and duration remain depression-class.
5. **Fixed-atom firing (F5).** One class requires an atom absent from the other's closure, so the isomer claim fails and only the functional-group claim remains.
6. **No-refusal firing (F7).** A depth-to-recovery transition is fully explained by adding a propagation term with no refusal of any held convention, with the residual trending down.
7. **Selector firing (F9).** A real-time region selector with a non-updating anchor and low-overlap instruments assigns episodes before the outcome and survives a data revision.
8. **Type firing (F6).** Settled molecules are proved unable to enter a `⋛` relation at the higher level, or an instrument settles the operand type against the claim.
9. **Final-room firing (F10).** A figure amendment admits a terminal frame with no outside left to import from.

If any fires, the corresponding verdict is withdrawn and the relevant file is corrected with the earlier wording preserved. Until one is run, nothing in this folder may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with the union split and the refuter, not with a preferred school. F1 and Fig 9 :4.
2. State the convention at the category boundary and refuse to let it decide a mechanism. F3 and Fig 10 :47.
3. Write a depression theory as a closure with a signed persistence cycle and a refusal operator, not as a list of episode-specific mechanisms. F4, F7, F11.
4. Treat the cross-episode claim as a generator over settled episodes, and state the `⋛` operand-type strain rather than hiding it. F6, Fig 4 :30.
5. Report the selector as `gap`, unreached at this budget, and name the kind of instrument owed rather than inventing a name. F9, Fig 13 :134-135.
6. Send the generator and the refuter, not the conclusion. Fig 4 :22: "Only methods cross up. Only head starts come down." Fig 10 :52: "Bring a characterised residual, never the source."

---

## 7. Canonical usage check and retraction log

Two canonical sources were read after the first six sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the limit: the framework reports "what a missing thing would have to look like (a shape, not a name)", then "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws, so design questions are settled by derivation rather than by escalating to a human ruling. The seat reads the ground; it does not ask the ground's maintainer to decide what the figures already settle.

| earlier reading | status after the canonical check |
|---|---|
| "The figures answer no, one theory cannot explain both." | **Retracted.** The figures answer a meta-question and a conditional. The "no" applies only to the final-room reading (F10), while a generative unified closure is permitted (F1, F2). |
| "Short = subtraction, depression = cycle, cleanly." | **Narrowed.** Both classes contain propagations, cycles and subtractions. They differ in loop sign, closure and regime, not in the presence of a single bond. |
| First-pass reading of Fig 8 :32 as a categorical claim about macro models and depressions. | **Downgraded to conditional.** The line says a closed set cannot add an atom. Depth and budget exhaustion are different facts (Fig 8 :40), so the claim is conditional on a declared closure, not categorical. |
| "Shape, not a name" forbids naming liquidity trap or hysteresis. | **Narrowed to missing primitives.** The README's phrase governs a primitive not held in Γ. Naming a mechanism from the world frame is a provenanced binding, not an invented primitive. The metamerism objection to reading a mechanism off one aggregate series is retained. |
| "The 2025 JEL unified theory settles the question." | **Retracted to secondary corroboration.** WATSON rule: figures are primary and decide. The paper is a world witness that corroborates the shape of a possible unified closure; it is not a verdict. |
| Fig 13 physical six bound onto macro atoms. | **Re-censed and recorded as a binding**, not a derivation (section 4). |
| Depression boundary as a natural kind. | **Retracted.** It is a declared cut until a ground settles it (F3, Fig 10 :18). |
| Final-room claim. | **Canonically confirmed.** The README's own section title and Fig 7 :6 govern it. |

No earlier reading was silently erased.

---

## 8. World-side cross-check, kept secondary

The full WATSON treatment is in `09_watson_answer.md` and every source is in `10_source_ledger.csv`. Three points bear directly on this audit:

1. The Eggertsson and Egiev 2025 JEL review, "Liquidity Traps: A Unified Theory of the Great Depression and the Great Recession", states that it "unifies three landmark economic downturns" into one analytical framework and that "When policy rates hit the zero lower bound, conventional monetary tools lose traction." It predicts that a unified closure is possible if it holds the negative-natural-rate condition and a policy-regime switch. It corroborates F1, F2 and F7. Overlap with the other macro sources is high; it is one pool, not an independent witness.
2. The regime-shift and early-warning sources (ecology and complex systems, genuinely lower overlap) predict that a region flip has hysteresis and that early-warning signals are generic but not yet reliable enough to time a correction. They corroborate the *shape* of F9's owed instrument, not its identity, and they conflict with any claim that the discriminator already exists.
3. The secular-stagnation source records that warnings after deep recessions have repeatedly turned out wrong and that the concept has been called "a baggy concept, arguably too capacious for its own good". That is a world-side conflict with an over-strong unifying claim. It was returned to the census and produced F11's MDL constraint; the verdict did not flip.

No world source overrules a figure line. The conflict rule sent the reading back to the census, as required.
