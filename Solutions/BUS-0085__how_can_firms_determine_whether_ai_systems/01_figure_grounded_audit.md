# Figure-grounded audit: how a firm can determine whether an AI system improves performance across customer and employee groups

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"*, and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No firm's data was measured, no experiment was run, and no AI system was evaluated. See `05_what_shape_means.md` section 7.

**Sources.** The verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the Operators and Symbols tables as extracted in the figure text, plus the public sources listed in `10_source_ledger.csv`, all opened 2026-11-22.

---

## 0. The question under audit and the residual in effect terms

The question is: *how can firms determine whether AI systems improve performance across different customer and employee groups?*

Stated as an effect, not as a metric: a firm deploys an AI system into a decision. The system has a library `Γ` that predicts an outcome `Γ(b,a)` for a case. The world returns `o'`, the outcome that actually happened for that case. The residual is `R = |Γ(b,a) - o'|`. The phrase "across different customer and employee groups" is the instruction that `R` is indexed by the group-slot `s`, not pooled:

- Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
- Symbols :43-44 *"R is measured per slot, never as a single global number."*
- Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

The two options and what each leads to:

- **Option A, "one pooled lift number is the verdict."** Leads to the prediction that a single before/after figure settles the question for every group. It is the named averaging failure (Fig 1 :22) and it promotes a convention that decides an outcome, which stops being a convention (Fig 10 :47).
- **Option B, "improvement is a per-group relation that must be measured."** Leads to the prediction that the question is a union of conditions with a verdict per group, that pooled and per-group signs can differ, and that an average is a filter for the budget and never a witness for the verdict (Fig 9 :60).

**The sought-for shape, bound before the run** (Formula, "Direction"): write down what an answer would look like. A valid determination must contain four conditions: (1) the residual indexed per group-slot; (2) an instrument for what counts as progress *in that group's terms*, the link that usually has no instrument; (3) a non-updating anchor per group with at least two frames ranging against it separately; and (4) a failure condition written before the run. Until this is written down it is a preference, not a term, and nothing in the loop can see it. This section performs that binding.

---

## 1. Domain census before choosing any figure line

### 1.1 R by arity, symmetry and scale

- **Arity.** The residual is at least binary: customer groups and employee groups are two different habitats with different anchors, different currencies and different decision owners. "Across groups" is not a modifier on one question; it is a second (and third) slot structure. Fig 9 :4-5 says *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* The question is a union, not one hard question.
- **Symmetry.** "Improves" is ordered: it is a comparison `⋛` of an after-state against a before-state, and comparison is not symmetric (Operators :47-52; Fig 12 :87 *"a threshold relation between two quantities"*). A pooled correlation between "AI used" and "performance high" is symmetric `+` and cannot choose the arrow. The question asks for `→` or `⋛`, not `+`.
- **Scale.** First order within one group's decision loop (one slot's `R` before and after the AI acts). Second order at the firm's cross-group comparison, where each per-group verdict becomes an atom for a wider verdict (Fig 12 :104). The two scales are separated by a lossy transform, so the round trip needs a measured gap (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

No domain is admitted unless it has a nameable anchor. If a candidate has no anchor, it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1 Measurement / ground per group** | the AI system, a decision case, the group it falls in, the outcome observed for that case | prediction versus observation per slot, `R_s` | the per-group outcome measurement that does not move because a frame thinks the AI works (Fig 2 :29) | domain; anchor is the outcome under an explicit comparison |
| **D2 Group structure** | customer groups, employee groups, their overlap, the contact each has with the decision | contact; which group a case belongs to | per-group ground reading; group membership is read off the world, not invented (Fig 11 :43, :48) | domain; a union because groups overlap |
| **D3 Verification / audit** | internal evaluators, external auditors, affected groups, the vendor's own report | agreement and residual | the ground, never agreement (Fig 2 :45); each frame corrected separately (Fig 2 :46) | domain; anchor is the same per-group ground, not the firm's dashboard |
| **D4 The decision to deploy** | the firm, its managers, the people subject to the decision | cost of being wrong, action budget | the ground plus the failure condition written before the run | domain; anchor is the pre-registered refuter plus the measured outcome |

No "domain of fairness perception" is admitted: a feeling that a system is fair has no anchor that does not update on the frame's own report, so it is not yet a domain. It becomes one only if an instrument is named that measures it without moving when the firm pushes on it.

### 1.3 Partition or union

Union, not partition (Fig 9 :54, :57). A customer can also be an employee; a group can be defined by age and by tenure at once; the "customer" and "employee" slots overlap. Fig 9 :55-56: a single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds. So one lever (for example, a fairness metric on the customer side) cannot settle the employee side or the intersection. The union must be unbundled before it is searched again. Verdicts are kept per domain and never averaged.

### 1.4 Dependency order (Fig 3)

The chain runs, in order: **perception** (can the firm tell which group a case falls in, and tell it apart from the last case? Fig 3 :4-5) -> **vocabulary** (does it have terms for what the decision affords each group? Fig 3 :6-7) -> **objective** (can it say what would count as progress for that group, in its own terms? Fig 3 :9-10) -> **planning** (a route to that objective under incomplete information) -> **learn and carry** (name what worked, verify it, carry it). The break in most firms is at the objective link: Fig 3 :25-27 says the perceptual and planning links have obvious tests but the link between them, *"being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments"*, and *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Effort spent above the break cannot rescue it (Fig 3 :19, :20). A reading taken below the break is a reading of nothing (Fig 3 :22).

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per slot, not aggregated; frame-internal quantities disqualified | *"The residual is indexed by object slot, not aggregated."* (Fig 1 :19) is the governing line for "across groups" |
| **2 The Ground** | anchor must not update; independence; alignment as triangulation | the per-group measurement is an anchor only if group outcomes do not move on the firm's own report |
| **3 Dependency Chain** | the objective link has no instrument in most settings | the question's real bottleneck is "what counts as improvement for this group", not model accuracy |
| **4 The Membrane** | lossy transform between scales; measure the round trip | a firm-level lift is a coarse description of per-group residuals; its gap must be measured |
| **5 Mint Pipeline** | three guards as a product; output is not a measure of success | a fairness certificate is not a mint; it is a frame-internal score |
| **6 Closure / Reachability** | import is the only operator that moves the wall; instruments improved from worse ones | group-aware metrics are instruments extended from existing ones, not new primitives |
| **7 Room Chain** | a room's agreement is variation, not a verdict | vendor testimonials and internal dashboards cannot corroborate a per-group verdict |
| **8 Union Surplus** | low overlap required for a surplus; residual first, frame second | internal and external evaluation must not share an evidence pool; describe the residual before picking a metric |
| **9 Leave / Arrive** | split a union; filters are not witnesses; describe before looking | the pooled metric is a filter; the per-group verdict is the witness; the question must be split |
| **10 Ground Maintainer** | ground does not decay, channel does; pooled readings; verifier non-access | pooled readings sever the channel; a firm grading its own system stops being outside it |
| **11 The Habitat** | capability is agent-and-habitat; valence relative to residual | the same AI is a benefactor to one group and a malfactor to another; a harness proves wiring, not capability |
| **12 The Bond** | comparison is ordered and threshold; isomers; two currencies do not add | "improves" is `⋛`, not `+`; equal-feature groups under a different arrangement are isomers |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict | no figure line names the groups, the metric or a universal lift; that is a `gap`, not silence |
| **Operators table** | `⋛` comparison; `¬` makes refusal possible | a vocabulary with only `+` can accumulate fairness certificates and cannot carry a refusal |
| **Symbols table** | `R` is the aim, per slot; the ground is the anchor | the entire question turns on keeping `R_s` indexed and the anchor unmoved |

Strained readings are named in section 7, not smoothed over.

---

## 3. Findings

### F1 - The question is a union of per-group residuals, not one average (decisive)

Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*
Symbols :43-44 *"R is measured per slot, never as a single global number."*

A firm that reports "the AI lifted performance by X percent" has measured one number over many slots. If group A improved and group B degraded, the average can be near zero while one slot's residual is live and positive. Fig 1 :13 names that a legal state: a global `R` near zero with one live slot residual. The honest report is a vector of per-group residuals, each with its own verdict. The averaged number is a budget filter (Fig 9 :60), not a witness.

**Verdict:** `specified`, triangulated across Fig 1 and the Symbols table (low overlap: one governs the loop's bookkeeping, the other the notation). **Refuter:** show that the per-group vector can be replaced by its mean without loss under all group partitions, including a partition chosen after the result was seen. If it can, F1 is wrong.

### F2 - The pooled and the per-group verdicts can have opposite signs

Fig 9 :4-5 *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*
Fig 9 :57 *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

The world source on Simpson's paradox (Wikipedia, statistics) records the general case: a trend that appears in several groups disappears or reverses when the groups are combined. This is world corroboration of the figure's split instruction, not the source of the verdict. The figures already require the split because the subsets are differently anchored. A firm cannot answer "does it improve performance" until it says *for which slot*, because the reversal is available in the arithmetic and the figures forbid the average as a verdict.

**Verdict:** `specified`, single-source on the figure side for the exact reversal (Fig 9), corroborated by a low-overlap mathematical source. **Refuter:** exhibit a case under the framework where every per-group comparison and the pooled comparison are constrained to share a sign for all possible group sizes. No such constraint appears in Fig 9, so the burden is on the claimant.

### F3 - "Improves" is a comparison with an ordered arrow, not a symmetric correlation

Fig 12 :87 *"a threshold relation between two quantities"* (Operators table, `⋛`).
Operators :51 *"a goal is a comparison, which is why a vocabulary without it cannot state one"*.
Fig 12 :5 *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

"AI used" and "performance high" measured together is a symmetric conjunction: swap them and the statement does not change (Operators :15). "Improves" needs the ordered comparison bond; without it the firm can state what is present and cannot state that progress happened. That is the middle link of Fig 3 restated in the bond vocabulary: a list of ingredients (accuracy, fairness score, adoption rate) is not a route to a verdict. The bond carrying before-to-after is the missing half.

**Verdict:** `general` (structural), single-source on the bond definition. **Refuter:** show a symmetric statistic from which the improvement direction follows for every case without an added temporal or intervention assumption. If one exists, the ordered bond is not required.

### F4 - The anchor for "improvement" cannot be an outcome that updates on the AI's own decision

Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
Fig 2 :30 *"If it moves when you push on it, it is not an anchor."*
Fig 2 :33 *"The anchor must not update."*
Fig 2 :34 *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."*

This is the sharpest constraint on the practical question. In lending, a higher interest rate set from a predicted risk makes default more likely; in hiring, an AI shortlist determines who gets the outcome that would have measured the AI's accuracy. A raw group outcome observed *after* deployment is partly an effect of the decision, so it moves when the frame acts. It is an instrument, not an anchor. An anchor requires a comparison in which the firm's decision does not determine the observed outcome, for example a randomized holdout, an exogenous rule change, or an audit sample with decisions deliberately varied. This is the live tension recorded in section 7, S1, and it is the point at which a firm's internal "before and after" dashboard most often fails.

**Verdict:** `specified`, triangulated across Fig 2 and the fairness literature's impact-of-decisions discussion (low overlap). **Refuter:** exhibit a deployment where the outcome label is provably unaffected by the AI's decision and the frame's belief, with the mechanism stated. Then the raw outcome is a legitimate anchor and F4 narrows.

### F5 - A firm grading its own AI has left the outside seat

Fig 10 :50 *"Looking inside the frame it grades is how the seat stops being outside."*
Fig 10 :51 *"A seat that reads that interior acquires the frame's model, and thereafter grades reports against its own picture rather than against the ground."*
Fig 10 :42 *"A verifier that can reconstruct the claim cannot verify it."*

An internal evaluation team that reads the model's own dashboard, its feature attributions and its chosen fairness criterion has acquired the frame's model. Its subsequent agreement with the system is the system's picture repeated. The world source on automation bias (Wikipedia, human cognition) records the human side: people favor automated suggestions and ignore contradictory correct information. That is a frame that has stopped ranging against the ground. The outside seat needs separate experience, *"Frames whose independence is renewed by separate experience can be maintained"* (Fig 10 :80), and it must range against the same per-group ground separately (Fig 2 :46).

**Verdict:** `specified`, triangulated across Fig 10, Fig 2 and a low-overlap human-cognition source. **Refuter:** show an internal checker whose reading of the group outcome is structurally independent of the model's prediction and of the criterion the model was tuned on, including after it has seen the dashboard. If such a checker exists, the "stops being outside" claim needs narrowing to the cases where it read the interior.

### F6 - No single fairness metric is a verdict; the metrics are instruments and filters

Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
Fig 5 :48 *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."*
Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

The fairness literature opened for this audit states in its own words that there is no single test that is both necessary and sufficient, and that passing a test is not a certificate of fairness (Barocas, Hardt and Narayanan, MIT Press 2023, chapters 4 and 7). Model cards (Mitchell et al., FAT* 2019) require benchmarked evaluation across demographic and intersectional groups. Both are *instruments*: they make a residual visible per slot. They do not settle which criterion is right for a group, because that is a normative choice from outside the metric and must be declared as a stake (Fig 10 :59). A firm that optimizes one metric until it passes has made a convention decide an outcome (Fig 10 :47).

**Verdict:** `specified`, triangulated across Fig 9, Fig 5 and two AI-evaluation world sources that share part of an evidence pool (counted as one witness for the normative claim, two for the instrument claim). **Refuter:** name a criterion that is both necessary and sufficient for "improves this group's performance" across all decision contexts, with its anchor stated. Its absence is what makes the metrics filters rather than witnesses.

### F7 - The right groups must be enumerated from contact, not composed from a standing list

Fig 11 :43 *"The habitat is enumerated, never composed."*
Fig 11 :49 *"An actor's valence is relative to the residual, not a property it carries."*
Fig 11 :51 *"No standing list of good actors survives a change of residual."*
Fig 11 :66 *"Isolation is not removal of the habitat. It is substitution of one habitat for another."*

A firm cannot pick the groups from a universal protected-class list and stop. It must enumerate everything in contact with the residual: who is affected by the decision, what conditions shape the outcome, what relations carry the effect outward (Fig 11 :44-48). Contact cascades: a change in a customer-facing decision can alter employee workloads three steps out. Group membership is read off the world, not invented. And a group that appears harmless under one residual becomes a malfactor under another, so the standing list must be rebuilt each time the question changes (Fig 10 :72). Deploying the AI into a test harness substitutes a habitat; a synthetic solve proves wiring and never capability (Fig 11 :70).

**Verdict:** `specified`, triangulated across Fig 11 and Fig 10. **Refuter:** produce a group partition that is fixed across all residuals and all deployments and is still correct. Fig 11 :51 refuses it structurally; a counter-case would have to show valence carried by the group rather than relative to the residual.

### F8 - Underspecification means equal aggregate test performance does not settle deployment performance

Fig 6 :21 *"MINT composes inside the closure and can never add an atom."*
Fig 8 :32 *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*
Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

D'Amour et al. (JMLR 2022) report that an underspecified pipeline can return many distinct predictors with equivalently strong test performance, and that these behave very differently in deployment domains. This is the world-level shape of the round-trip gap: the aggregate score sent up is coarse, and what comes back down in a specific group need not match it. The figures do not need the paper to require the gap, but the paper makes the failure concrete and names a mechanism inside ordinary ML pipelines. It corroborates F1 and F4 rather than overturning them.

**Verdict:** `specified`, single-source on the exact ML mechanism, corroborated by Fig 4 and Fig 8. **Refuter:** show a pipeline for which equivalent aggregate test performance entails equivalent per-group deployment performance across all groups, with the invariance proved. Until then the aggregate number cannot close the question.

### F9 - Verdicts per domain are kept separate; no universal lift number is returned

Fig 13 :134 *"Unreachable is a verdict here, not a silence"*
Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*
Fig 9 :32 *"you get a kind of thing, never the answer itself"*

No figure line returns a universal percentage, a universal group list, or a threshold that counts as "improvement" for all firms. Fig 13 :135 says the framework cannot name the missing primitive, because naming it would mean already holding it. What can be returned is the shape of a valid determination (the four-condition separator), the refuters, and the instruments that would close it. The firm-specific numbers require a ground reading in that firm's habitat. Reporting that as `unreached` at this budget is the honest verdict, not a silence and not an invitation to invent a figure.

**Verdict:** `general` on the limit, `specified` on the separator. **Refuter:** produce a figure line that selects a group set, a fairness metric or a numerical threshold. A genuine re-census would then change this finding; none was found after searching all 13 figures and both tables.

### F10 - The improvement relation is a bond and a threshold, so "same groups differently arranged" is an isomer claim

Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
Fig 12 :123 *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
Fig 12 :125 *"A composition costs in two currencies, and they do not add."*

Two decision systems over the same customer and employee atoms can differ only in which group the comparison bond attaches to. Under Fig 12 :117 they are isomers, not variants of one system: same ingredients, different substance. This is worked out in `06_isomers_and_order.md`. The two currencies warning matters for practice: the bits cost of stating a fairness criterion and the actions cost of finding out whether it holds per group are in different units, so a firm holding one accounting will propose arrangements it cannot afford to test.

**Verdict:** `specified`, single-source on the figure definition, with a live condition on the fixed atom set. **Refuter:** show two systems with the same group atoms and different bond attachments that are behaviorally identical for every case. Then the isomer claim fails for this domain and only the functional-group reading remains.

### F11 - Prestige and adoption are not action

Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*
Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."*

From *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* Vendor names, adoption counts, audit badges and employee sentiment about the tool can all fund a trial. None can settle whether the tool improved a specific group's outcome. Selecting reviewers for likely agreement manufactures the disqualifying correlation (Fig 2 :40). The first contact must carry the residual and its refuter, never the framework or the vendor's conclusion.

**Verdict:** `specified`, triangulated across Fig 1, Fig 7, Fig 2 and the essay. **Refuter:** exhibit a case in which a reputation-based signal is a non-updating measurement of per-group outcome. Since reputation is produced by frames that read the same reports, this would require a mechanism that does not exist in the figure set.

---

## 4. Pre-registered refuter

Written before the conclusion, per *"a falsifier written before the run is a design instrument, not only an honesty device."* The four-condition separator is refuted if any of the following holds:

1. **Per-slot indexing is unnecessary.** A single aggregate residual can be substituted for the per-group vector under every group partition, including partitions chosen after seeing the result (breaks F1, Fig 1 :19/:22).
2. **The anchor updates safely.** A measured group outcome that changes when the AI's decision changes still settles the improvement question without an independent comparison (breaks F4, Fig 2 :33-34).
3. **One metric is sufficient.** A fairness or performance criterion is both necessary and sufficient for "improves this group" across all decision contexts, with its anchor declared (breaks F6, Fig 9 :60).
4. **Inside checking is outside checking.** An internal evaluator that has read the model's dashboard and criterion still produces a verdict independent of the frame it grades (breaks F5, Fig 10 :50-51).
5. **Groups carry fixed valence.** A standing group list survives a change of residual and a change of habitat (breaks F7, Fig 11 :51).
6. **Equal aggregate entails equal deployment.** Equivalent aggregate test performance entails equivalent per-group deployment performance across all groups (breaks F8).

If any fires, the separator is withdrawn in the form stated. Until one is run, no part of this may be labelled `grounded`. A failure is more useful than an endorsement, and a one-line refutation from an outside reader is the intended output of the outreach artifacts.

---

## 5. Recommendation

1. **Split before you measure.** Treat the question as a union of group-slots and unbundle overlapping conditions before choosing any metric (Fig 9 :54-57). Do not average the intersections away.
2. **Fix the middle link first.** Before asking whether the model is good, write down what counts as progress for each group in that group's terms, and name the instrument (Fig 3 :25-27, :29). Without it the reading is of nothing.
3. **Build an anchor that does not move.** Use a comparison in which the decision does not determine the label: randomized holdout, exogenous rule variation, or an audit sample with decisions deliberately varied (Fig 2 :29-34). A before/after dashboard is not such a comparison.
4. **Buy independence in proportion to the cost.** Keep internal evaluation, external audit and affected-group readings drawing on separate evidence, each ranged against the same ground separately (Fig 2 :31, :42, :46; Fig 8 :48). Do not pool later agreement as corroboration.
5. **Keep the metrics as filters.** Report per-group residuals and the failure condition first; use fairness certificates to decide where to spend testing budget, never as verdicts (Fig 9 :60; Fig 5 :48).
6. **Carry methods, not recordings.** Send the separator and its refuter, not a slide of one successful deployment. *"Only methods cross up. Only head starts come down."* (Fig 4 :22).

---

## 6. Canonical usage check and retraction log

Two sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the available instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop and the mode rule. Step 7 keeps SEARCHED, INWARD and OUTWARD distinct; a gap at this budget is not the same as underivable in principle.

### Retractions and confirmations

| earlier reading in this audit | status after the canonical check |
|---|---|
| F1 called "the decisive line" | **Narrowed, not retracted.** Fig 1 :19 governs the loop's bookkeeping; Fig 9 :4-5 governs the split. Two low-overlap lines now support the union verdict. Kept as decisive for the indexing claim only. |
| F2 reversal attributed to Simpson's paradox | **Retracted as a figure claim, kept as world corroboration.** The split comes from Fig 9; the statistics source supplies the reversal mechanism. The verdict never rested on the web page. |
| F4 anchor treated as any measured outcome | **Corrected.** The canonical anchor definition requires that the reference not update on what any frame thinks, so a decision-dependent label is an instrument, not an anchor. The correction is visible above and in section 7, S1. |
| F6 "no single metric" treated as a figure line | **Corrected.** No figure line names fairness metrics. The figure contribution is Fig 9 :60 (filter versus witness); the "no single criterion" claim is world corroboration from Barocas et al. and is labelled as such. |
| "shape, not a name" used to forbid naming groups | **Narrowed.** The README's phrase governs a missing primitive. Naming an already-enumerated group is a binding from the firm's habitat, provenance to be declared, not an invented primitive. See `05_what_shape_means.md` section 5b. |
| Apparent Fig 1 per-slot versus Fig 11 valence conflict | **Not strained after re-census.** Fig 1 governs where `R` is measured; Fig 11 governs the sign of a contact's effect relative to a residual. Different objects. |
| Gap on group list, metric and lift number | **Canonically confirmed.** Fig 13 :134-135 and Fig 9 :32 license the stop. Reported as `unreached` at this budget, not silence. |

### SEARCHED / INWARD / OUTWARD kept distinct

- **SEARCHED:** all 13 figures and both tables were searched for a line that selects a group set, a fairness metric or a numerical improvement threshold. None found. The closure does not change; more searching inside it would not add an atom (Fig 8 :32).
- **INWARD:** the instrument to extend is the per-group outcome measurement, specifically one whose label does not move under the decision. It is improved from a worse instrument already returning something, not specified from a description (Fig 6 :32-34).
- **OUTWARD:** the imported frames are statistics (Simpson's reversal, confounding), human factors (automation bias), AI evaluation (model cards, fairness criteria) and ML reliability (underspecification). Each is cast in effect terms before being read, with a source gate and a shadow test in `10_source_ledger.csv`. They explain the shape of the gap; they do not hand over the firm-specific verdict.

---

## 7. Strains and re-census

- **S1, live, narrowed.** Fig 2 :33 requires a non-updating anchor; real group outcomes under deployment are partly produced by the decision. Re-census assigns the raw outcome to *instrument* and the exogenous comparison to *anchor*. The tension is not dissolved by a softer reading; it is the practical design problem the separator exists to solve. Recorded as live, with refuter 2.
- **S2, dissolved by re-census.** Fig 1 per-slot residual versus the firm's appetite for one number. Different objects: one is the error signal, the other a budget filter (Fig 9 :60). No contradiction.
- **S3, dissolved by re-census.** Fig 11 :51 (no standing list of good actors) versus the legal need to name protected groups. Re-census: legal categories are a declared convention for a purpose; they become a defect only when a convention decides an outcome (Fig 10 :47). The groups a firm must enumerate for its residual are a superset of the legal list.
- **S4, live type question.** The improvement comparison `⋛` is defined over two quantities (Operators :47-52); at the second-order firm level its operands are per-group verdicts now serving as atoms. Fig 12 :104 permits the demotion to atom; whether a verdict counts as a quantity at that level needs an instrument, not an argument. Named in `06_isomers_and_order.md`, not hidden.
- **After re-census: two live constraints (S1, S4), two dissolved (S2, S3), none silently smoothed.**
