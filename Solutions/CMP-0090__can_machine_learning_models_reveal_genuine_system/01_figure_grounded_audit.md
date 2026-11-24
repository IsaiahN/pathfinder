# Figure-grounded audit: can a fitted model carry a mechanism?

**Mode of this document: `general` on the structural shape, `specified` on the per-domain findings, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* No intervention was run here, so nothing is accepted.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output simulates an answer, and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (all `Fig N :line` citations), `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, eight essays where cited, and the real URLs in `10_source_ledger.csv`, all opened 2026-11-22.

---

## 0. The residual under audit, stated in effect terms

The question is not "are models useful." It is: **what would have to be observed to tell whether a fitted model holds a mechanism (a structure that remains in contact with the ground when the ground is pushed) or only a correlation (a regularity internal to the training pool that stops paying when conditions change)?**

Restate as a measurement. Let a model be Γ, its prediction Γ(b,a), the observation o'. The residual is `R = |Γ(b,a) - o'|` per slot s (Symbols table, Fig 1 :11). The decisive feature is **where o' comes from**:

- If o' is drawn from the same pool that built Γ, then R near zero is compatible with both a mechanism and a shortcut. The reading does not discriminate sources. This is the metamerism case in *The Hard Problem is About Source*: the instrument *"cannot comment on the source"* and *"If several paths create the same behavior, then behavior is a projection with lossy information."*
- The only reading that discriminates is o' taken under a **changed habitat** (intervention, new environment, deployment), from a frame that does not share Γ's evidence pool. Fig 2 :29-30: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."*

So the residual is indexed by **habitat**, not just by object slot. Under i.i.d. test both the mechanism model and the shortcut model return R approximately zero; the signal that separates them arrives only when the habitat changes. Aggregating accuracy across habitats is the Fig 1 :22 error: *"Aggregating across slots is how a live signal disappears into an average."*

Two shapes were bound before the run (README). The M-shape predicts mechanism-credit only after a survived intervention from an independent frame. The C-shape predicts high in-distribution accuracy and failure under substitution. The derivation below scores each against figure lines and world sources.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.** Arity: at least two frames (the model and a probe) across at least two habitats (training and changed). Symmetry: the relation is directional. The ground is the anchor and does not update on the model (Fig 2 :25 *"pinned: it does not update on A or B"*); a model's accuracy is not symmetric with mechanism-contact. Scale: one level for the fitted model, a crossing at intervention where the model-and-habitat becomes the object (Fig 11 :39 *"capability is a property of agent-and-habitat, never of the agent alone"*).

**One line per domain: actors / currency / anchor.** A domain needs a nameable anchor; if none is nameable, it is a frame, not yet a grounded domain.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1, the fitted model as frame | weights, features, training distribution, objective | in-distribution loss and accuracy | none internal; its "data" moves with the frame, so it fails the anchor test | a **frame**, folded into D2 as an object under test |
| D2, the evaluation ground | held-out environments, interventions, experiments, deployment conditions | per-slot residual under change | the measurement that does not move when the model is pushed | grounded domain |
| D3, the composition inside the model | variables as atoms, structural/causal relations as bonds | description length of the arrangement (Fig 12) | whether the arrangement survives substitution | grounded domain, style `specified` |
| D4, the verification / science frame | researchers, reviewers, benchmarks, replication studies | agreement and residual | the ground, never agreement | grounded domain; independence zero in this simulated run |

**Partition or union.** The question as posed ("mechanisms, or mainly correlations that fail under changing conditions") is a **union of overlapping conditions**, not a partition. A single model can hold a genuine mechanism in one slot and a Clever Hans shortcut in another. Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* The compound must be unbundled before a verdict is attempted:

- **Q_a (reachability/settlement):** does the model hold anything that contacts the ground at all?
- **Q_b (bond):** is what it holds the arrangement, not just the ingredient set?
- **Q_c (habitat):** does the regularity pay when the habitat is substituted?

Each has its own loop and its own ground. They are ordered, not averaged.

**Order by dependency (Fig 3).** 1 perception: does anything fail to resolve under shift? 2 vocabulary: do we have terms for bond versus ingredient? 3 objective: what counts as progress, a residual that stays down under intervention; 4 planning: intervention design; 5 learn and carry: name what worked with provenance. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* The chain here usually breaks at link 2 or 3, because accuracy has instruments and "mechanism" has few: Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

**Strain test applied before findings.** "Correlation versus mechanism" could be read as Fig 2's independence rule (two frames sharing an evidence pool) or as Fig 12's bond rule (ingredients versus arrangement). Both fit, with low overlap, so they govern **different quantities** in D4 and D3 respectively; no strain. Another candidate strain, Fig 11's substituted habitat versus Fig 6's outward import, is resolved by re-census in §6.

---

## 2. Figure census (bearing and verdict, before conclusions)

| figure | bearing on this residual | verdict it gives |
|---|---|---|
| **1 The Agent** | frame-internal metrics disqualified; residual per slot | accuracy is frame-internal; cannot be the ground |
| **2 The Ground** | anchor test, independence, correlation valence | the probe must not move with the model and must not share the training pool |
| **3 Dependency Chain** | a reading below the break is a reading of nothing | "mechanism" lacks an instrument at the middle link |
| **4 The Membrane** | lossy round trip, measure the gap | a benchmark result carried into deployment has an `R_T` that must be measured |
| **5 Mint Pipeline** | three guards as a product; settlement insufficient | accuracy gain is not a mint; no support for a mechanism term from accuracy alone |
| **6 Closure / Reachability** | MINT cannot add an atom; import moves the wall | more in-distribution search adds no mechanism; an import (intervention/new variable) is required |
| **7 Room Chain** | agreement compounds, evidence does not | many agreeing evaluations are one long room |
| **8 Union Surplus** | closure idempotent; absence unprovable; residual first | more of the same data visits the same closure; failure to find a mechanism is not proof of absence |
| **9 Leave / Arrive** | split compounds, describe before looking, filters not witnesses | the question is a union and must be split; accuracy is a budget filter, not a witness |
| **10 Ground Maintainer** | the channel decays; declared meaning is not grounded | a benchmark can go stale; only a live ground pays |
| **11 The Habitat** | test harness is a substituted habitat; capability is agent-and-habitat | passing a benchmark proves wiring, never capability |
| **12 The Bond** | arrangement is the substance; isomer, functional group | correlation versus mechanism = ingredients versus bond |
| **13 Minimum Viable Set** | derived quantities are what a composition leaves behind | smoothness/order/regularity are not a seventh primitive; a mechanism is a composition |
| **Operators table** | a claim that fails all tests is not yet made | "mechanism" must be written as a term with a bond, not left a preference |
| **Symbols table** | `R` is the aim and is always a slice; ground is the anchor | what cannot be perceived under the training pool is residual |

---

## 3. Findings F1 to F9

Every quoted string below is verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` case-insensitively and ignoring trailing punctuation.

### F1: In-distribution accuracy is frame-internal and cannot be the verdict (general)

Fig 1 :23: **"The ground enters as the only metric."** Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** Fig 1 :25-26 names the frame-internal quantities: *"coverage, and compression achieved"*, *"predicates minted, and credibility accrued"*.

A model is optimized against its loss. Using held-out accuracy from the same pool as the evidence that a mechanism was captured is scoring the frame with a quantity the frame also produces. Fig 1 :3: *"Everything here either produces a residual or consumes the library."*

This is not a claim that accuracy is useless. It is a claim about **what kind of thing accuracy is**: a budget filter (Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*), not a witness for mechanism. Mode `general`.

**Refuter:** exhibit a scoring rule for mechanism-contact that is independent of the training objective and whose value predicts survival under intervention across habitats. If such a rule exists and accuracy turns out to be its sufficient statistic, F1 is refuted for that setting.

### F2: The residual is per-slot under change; a global mean hides it (specified)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Fig 2 :29-30: **"If it moves when you push on it, it is not an anchor."**

An accuracy mean over a test set is an aggregate. The failure the question names ("correlations that fail under changing conditions") is a live slot that the mean hides. The remedy is to report `R` per slot across habitats and to push the ground (intervene) rather than re-sample the same pool.

**Refuter:** a case where a single global accuracy stays high under intervention while every per-slot residual stays at zero and the prediction pays at the ground in the new habitat. Then the aggregation objection is moot. Mode `specified`.

### F3: Correlation versus mechanism is the ingredients-versus-bond distinction (specified)

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** Fig 12 :94: **"The arrangement is the substance."** Fig 12 :95-96: **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."** Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

A correlational model and a mechanistic model can share the same features (ingredients) and the same in-distribution predictions (the flat formula) while differing in the arrangement that carries the behaviour. Fig 12 :14-17: *"the ingredients are recorded and the arrangement is not / nothing downstream can tell them apart, / and nothing signals that anything was lost"*. This is why accuracy alone cannot see the difference: the difference is invisible in the formula and decisive under intervention, which is exactly the question's own wording.

This is also why "interpretable feature importances" are not yet mechanisms: they report ingredients. The supporting derivation is in `06_isomers_and_order.md`. Mode `specified`, triangulated across Fig 12 and `THE_FORMULA.md` "Composition" (two low-overlap routes inside the framework).

**Refuter:** show two models with the same ingredient set and the same behaviour under intervention where no difference of arrangement exists between them, or show that the intervention difference is carried by ingredients the flat formula already records. Then the bond carries nothing and F3 fails.

### F4: A benchmark is a substituted habitat; it proves wiring, never capability (specified)

Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** Fig 11 :66-67: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone."** Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**

A held-out test set substitutes a habitat for deployment. Two silent failure modes follow, Fig 11 :68-69: *"what you failed to reproduce is invisible until the goal fails"* and *"what you unintentionally introduced is invisible until it acts"*. A model can pass the test and lose the ground. Fig 10 :24: *"the ground does not decay, the channel does"*; :26: *"saturated metrics, pooled readings"*; :27-28: *"the output is not a verdict, it is you have lost touch"*.

Mode `specified`. **Refuter:** a benchmark whose habitat reproduces every deployment condition that matters for the residual, with a measured round trip gap `R_T` of zero (Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*). If the gap is measured and zero, the substitution costs nothing and F4 is refuted for that benchmark.

### F5: The probe must be independent of the training evidence pool (general)

Fig 2 :31-32: **"Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."** Fig 2 :20-21: **"the agreement is the pool talking, not two frames confirming each other"**. Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**. Fig 8 :45: **"Two frames together reach what neither reaches alone."**

A second test split from the same generator is one instrument wearing two names. Independence must be bought: Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."** In a high-stakes deployment, a different measurement modality, a field experiment, or an out-of-domain environment is the second frame.

Mode `general`. **Refuter:** demonstrate two probes with genuinely disjoint evidence that agree on a mechanism claim, where the agreement is not traceable to a shared generator or preprocessing pipeline. That is a real second witness and would weaken the need to buy more independence, not remove it.

### F6: More search inside the same distribution cannot add a mechanism (general)

Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** Fig 6 :21: **"MINT composes inside the closure and can never add an atom."** Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

Training on more samples of the same distribution visits more of the same closure. If a mechanism was not in representable reach, scale alone does not add it. An import is required: Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** In practice the import is a new measured variable, an inductive bias, an intervention protocol, or a causal structure supplied from outside the training frame.

Two honest limits. First, Fig 8 :40-42: *"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."* A failure to find a mechanism may be depth, not absence. Second, Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* so the importing instrument must already register something.

Mode `general`. **Refuter:** a controlled case where exhaustive search inside a fixed, closed feature set produces robustness under a genuinely new habitat without any new atom entering the frame. That would violate idempotence and the framework would need re-census.

### F7: The framework returns a shape, not a name for a particular model (general)

Fig 9 :32: **"you get a kind of thing, never the answer itself"**. Fig 13 :134: **"Unreachable is a verdict here, not a silence"**. Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause"*.

No figure line names an architecture, a layer, or a circuit as *the* mechanism. What the figures license is the **shape** a mechanism-credit must have: per-slot residual that stays down under an independent push, with the bond doing the work. Whether a given model satisfies it is a ground question, not a figure question. Fig 13 :134-135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

Mode `general`. **Refuter:** produce a figure line that certifies a specific model class as mechanism-bearing without a measurement. None exists; if one were added, F7 would be withdrawn.

### F8: The question is a union compound and must be split before search (general)

Fig 9 :4-5: **"are not one hard question but several well-formed ones. Split it rather than search."** Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** Fig 9 :57-58: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*

"Can models reveal mechanisms, or mainly capture correlations that fail under change?" bundles three conditions (Q_a reachability, Q_b bond, Q_c habitat) into one sentence. A single lever (for example, adding more data) clears the region where only Q_c holds and leaves the Q_b intersection standing. The compound needs its own loop. This is a verdict on the **form of the question**, not on models.

Mode `general`. **Refuter:** show that Q_a, Q_b and Q_c are decided by one measurement with no residual left over; then the union reading is unnecessary.

### F9: What would settle it: a source-discriminating instrument, with cost priced (specified)

*The Hard Problem is About Source*: **"If several paths create the same behavior, then behavior is a projection with lossy information (it cannot define consciousness in full)."** and **"It was proven wrong not by argument, but by the arrival of a better instrument."** Fig 6 :30: *"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 10 :49: **"Declaring a meaning does not ground it."**

An accuracy reading is a projection. Several sources (mechanism, shortcut, artifact) can produce it. What is owed is an instrument that discriminates sources: an intervention, a new measurement modality, a deployment environment. The cost of being wrong sets how much independence to buy (Fig 2 :42). A wrong cut removes the answer and speeds up, so cuts must stay ranked and reversible, Fig 9 :40-41: *"a wrong cut removes the answer and speeds up so keep every cut ranked and reversible"*.

Mode `specified`. **Refuter:** a purely conceptual discrimination of mechanism from correlation that predicts intervention outcomes at the ground without any new instrument. If that succeeds, the instrument requirement is too strong.

### F10: What survives (residue table)

| claim | mode | figure / source |
|---|---|---|
| In-distribution accuracy is frame-internal and cannot witness mechanism | `general` | Fig 1 :23, :27 (triangulated with Fig 9 :60) |
| The discriminating residual is per slot, across habitats | `specified` | Fig 1 :19, :22; Fig 2 :29-30 |
| Correlation versus mechanism is ingredients versus bond | `specified` | Fig 12 :5, :94, :117 (triangulated with `THE_FORMULA.md` Composition) |
| A test set is a substituted habitat, so a solve proves wiring | `specified` | Fig 11 :66-67, :70 |
| Independence is required and costs something | `general` | Fig 2 :31-32, :40, :42; Fig 8 :45 |
| More same-distribution search adds no new atom | `general` | Fig 8 :32; Fig 6 :21 |
| The question is a union compound | `general` | Fig 9 :4-5, :54 |
| The framework gives the shape, not the model-level verdict | `general` | Fig 9 :32; Fig 13 :134 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach, Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The M-shape (mechanism credited) is refuted if:

1. **A model pays at the ground under a genuinely new habitat** with per-slot residual near zero, where the probe shares no evidence pool with training and the new habitat reproduces the deployment conditions. This kills the "mainly correlations" half for that model.
2. **The bond carries nothing:** two models with the same ingredient set and different arrangements behave identically under intervention, or the behavioural difference is fully recoverable from the flat formula (Fig 12 :94, :117 refuted).
3. **A figure line names a specific mechanism-bearing model class** without a measurement (F7 refuted).

The C-shape (correlation only) is refuted if a mechanism-credit survives all three attempts above and a source-discriminating instrument shows the regularity is carried by a structural relation that persists under intervention.

The question itself is refuted as a single question if Q_a, Q_b and Q_c are decided by one measurement with no leftover residual (F8 refuted).

A fourth, honest stop: if no instrument anywhere registers the difference, the question is **unreachable-at-this-budget**, not answered. Fig 8 :39 and :40-43 govern that; it is not a silence, it is a verdict with an instruction (get a better probe, do not import a spurious atom).

---

## 5. Recommendation

1. Split the compound into Q_a, Q_b and Q_c before searching (F8). Do not average the two halves of the question into one score.
2. Stop reporting in-distribution accuracy as a mechanism verdict. Treat it as a budget filter (F1, Fig 9 :60).
3. Report per-slot residual across habitats, and intervene rather than re-sample (F2).
4. Test the bond, not just the ingredient set: compare arrangements under intervention, not feature importances (F3).
5. Treat benchmarks as wiring tests. Measure the round trip gap `R_T` before trusting a test result in deployment (F4).
6. Buy independence in proportion to the cost of being wrong: a field or out-of-domain probe, not another split of the same generator (F5, Fig 2 :42).
7. Expect imports, not scale, to add mechanism; price them and keep provenance (F6, Fig 6 :23).
8. Keep the shape claim and the refuter in front of the links in any outreach (Fig 10 :52 *"Bring a characterised residual, never the source"*).

---

## 6. Canonical usage check, strains and retraction log

Two framework sources were read after the first five sections and govern how the figures may be used:

- `FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"*; *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops where instruments cannot distinguish, recording the lineage. *"Indiscernibility is not identity."*
- `60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions. The seat reads the ground; it does not ask the anchor to decide what the figures already settle. Fig 11 and the record decide the habitat question; no external ruling is owed.

### Strains and re-census

| candidate strain | re-census result |
|---|---|
| Fig 2 independence (correlation disqualifies) vs Fig 12 bond (arrangement is substance) | **Not strained.** Fig 2 governs two frames and their evidence pools (D4). Fig 12 governs the internal arrangement of one term (D3). Different domains; both retained, each with its own verdict. |
| Fig 11 :70 substituted habitat vs Fig 6 :30 outward import, "cast it in effect terms" | **Not strained after re-census.** Fig 11 governs what is lost when a residual is moved into a test harness. Fig 6 governs how a description travels to a new frame. One prices a substitution, the other a translation. Both apply to Q_c at different moments. |
| Fig 8 :39 "a search that finds nothing is never a proof of absence" vs the C-shape "mainly correlations that fail" | **Not strained.** The first is an epistemic limit on what a frame can prove about its own closure; the second is a ground claim about behaviour under change. A model can fail under change (ground) while the proof of universal absence stays out of reach (frame). Recorded separately, not averaged. |
| Fig 1 frame-internal metric vs world sources praising accuracy | **Conflict handled by authority order.** World sources (D'Amour, Geirhos) actually *support* the figure verdict: high held-out accuracy and deployment failure come apart. No conflict was triggered; see `09_watson_answer.md` WORLD. |

After re-census: **no live strain**. Two candidate strains were dissolved by assigning the lines to different domains, matching the README rule.

### Retractions and confirmations of my own earlier readings

| earlier reading (this session) | status after the canonical check |
|---|---|
| "The figures say ML models cannot reveal mechanisms" | **Retracted.** That is a `general`-mode verdict the figures do not give. The figures give the criteria for a legitimate mechanism-credit and predict which models fail them; they do not blanket-deny mechanism. Replaced by the M-shape/C-shape residue table in §3 F10. |
| "Fig 8 :39 means models never find mechanisms" | **Retracted.** It says absence cannot be proved from inside a frame, not that mechanisms are absent. It is a limit on proof, not a claim about models. |
| "Feature importance is a mechanism" | **Never asserted; refused here.** Feature importance reports ingredients; Fig 12 :5 requires the bond. Kept as an explicit non-claim in `07` and `08`. |
| "A larger test set fixes under-specification" | **Refused.** Fig 11 :70 makes a harness a substituted habitat, and D'Amour et al. show equivalently strong held-out predictors diverging in deployment. More of the same pool is Fig 8 :32 idempotence, not an import. |
| F3 read as a physics-style isomer claim about models | **Narrowed.** Fig 12's isomer is about composed terms sharing atoms under different bonds. Applied to models it is a structural analogy with a real falsifier (§3 F3), not a chemical identity claim. See `06_isomers_and_order.md`. |
| F1 "accuracy is useless" | **Narrowed.** Accuracy is a legitimate budget filter (Fig 9 :60); it is disqualified only as a witness for mechanism. |
| Seven-question recursion summary | **Confirmed** against `THE_FORMULA.md` steps 1 through 8; no figure quote drifted on re-opening the extract. |

### Seven-question recursive derivation (summary)

1. **Is anything failing to resolve?** Yes, under habitat change; per-slot residual, not global accuracy (Fig 1 :19, :22).
2. **Which term is owed?** A term for the bond that survives substitution, not another accuracy predicate (Fig 12 :5).
3. **Is it reachable inside the training closure?** Only if the atoms are there; otherwise an import is owed (Fig 6 :21, :23).
4. **What refuses the C-shape?** An independent intervention with near-zero per-slot residual (Fig 2 :29-30, :31-32).
5. **What refuses the M-shape?** Same ingredients, different arrangement, identical intervention behaviour (Fig 12 :94).
6. **What settles either?** The ground, not agreement (Fig 2 :35, :40; `THE_FORMULA.md` step 5 *"the ground settles it. Verified only by what pays. A gate is not the ground."*).
7. **Where does the loop stop?** At the limit of the instruments that discriminate sources, with the lineage recorded (README canonical rule; *The Hard Problem is About Source*: *"The answer is unreached until a better instrument exists."*).

### Updated verdict

The structural shape survives: in-distribution accuracy is frame-internal; the discriminating residual is per-slot under habitat change; correlation versus mechanism is ingredients versus bond; a benchmark is a substituted habitat; independence is required and costs something; more same-distribution search adds no atom; the question is a union compound; and the framework returns a shape, not a model-level name. Both the blanket "models cannot" and the "accuracy settles it" readings are retracted. Mode `general` on the shape, `specified` on each domain finding, `grounded` on none. Strains after re-census: none hidden, two dissolved, one epistemic limit kept visible.
