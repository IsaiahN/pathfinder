# Figure-grounded audit: how to test generalization rather than historical fit

**Mode of this document: `general` on the structural shape, `specified` on the falsifiable predictions. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (opened 2026-11-22): LLM output can simulate an answer, but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figures with line numbers), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, four essays opened this session, and five independent world sources listed in `10_source_ledger.csv`. Every quoted figure string below is taken from the local extract, not from a summary.

---

## 0. Proposal header

```
DECIDES:    A valid generalization test is a transport measurement, not a score. It ranges
            one model against an anchor that cannot update, in conditions that do not draw
            on the training evidence pool, and reports the residual per condition rather
            than as an average. Fit and transport are two conditions of a union, so they
            need two loops, not one lever (Fig 9 :54-58). In-sample fit is disqualified as
            evidence because a frame cannot score itself with a quantity it also produces
            (Fig 1 :27).
HOURS:      Derivation 2-3. World search 1. Outreach artifacts 1. Second-seat audit 0.5.
PRIOR CASE: QMGR-0037, imported exemplar. Its method is carried: residual first, verbatim
            quote before conclusion, retraction log kept visible, simulated status declared.
ANALOGUE:   Library of Babel searcher, anchored by the question, stopping at a descriptive
            shape; habitat enumeration in Fig 11 rather than composition of a synthetic set.
LIMIT:      No ground reading was taken. The second seat shares the primary's evidence
            pool, so its agreement is internal consistency, not corroboration (Fig 2 :40).
```

---

## 1. The residual, in effect terms

A model M is fitted on historical data D drawn from conditions C_hist. Its in-sample residual is small. The question asks what test would show that M's predictions stay accurate under new conditions C_new absent from D. In effect terms the thing to decide is not "is M accurate" but:

> Does the residual R(M, C) stay small as C moves off the pool that produced D, and what would count as a failure of that claim before the test is run?

Two options and what each leads to. Option A, accept small in-sample or same-pool held-out error as evidence of generalization. This ships a model whose measured quantity is produced by the frame being measured, and it spends the independence of the reader asked to trust it. Option B, require transport against a sealed, low-overlap anchor and report per-condition residuals. This yields a checkable shape, a nonzero gap with a name (R_T), and an open verdict until the ground pays.

**R by arity, symmetry and scale** `[general]`.

- **Arity: two.** The operands are the model and the habitat. Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." So "does this model generalize?" is itself mis-posed. The answerable form is "does this model in this habitat keep a small residual when the habitat is changed in specified ways?"
- **Symmetry: ordered.** Fitting on C_hist and testing on C_new is not the reverse test. The ground is asymmetric: it does not update when the frame changes its mind. Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30 "If it moves when you push on it, it is not an anchor." The transport direction is part of the quantity.
- **Scale: two.** First order, one condition (model fitted and checked inside C). Second order, across conditions (each condition's settled prediction becomes an atom for the cross-condition comparison). Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."

---

## 2. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1 fitting frame | model Γ, D_hist, optimiser, hyperparameters | in-sample loss, description length | **none internally**. This is the defect, not a domain boundary | part of the union |
| D2 evaluation frame | held-out observations, new conditions, instrument, verifier | residual against observation | the observation, which does not update (Fig 2 :29-30) | part of the union |
| D3 habitat / transport frame | conditions, actors, relations in contact with the residual | contact and causal reach | still the ground; the habitat is not the ground (Fig 11 :91) | overlaps D2: a compound with its own loop |
| D4 reporting / verification frame | verifier, per-condition residual record | admissible evidence | the ground, never agreement | downstream of D2 and D3 |

D1 has no internal anchor, so it cannot carry a verdict. This is exactly Fig 1 :27: "A frame cannot score itself with a quantity it also produces." It remains in the census as the thing being tested, not as a witness.

**Union, not partition.** "Fit historical data" and "generalize to new conditions" overlap. A random split of D_hist clears the region where only fitting holds and leaves the intersection (transport) standing. Fig 9 :55-56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Fig 9 :57-58: what remains "stops being a mixture and becomes a specific compound." So two loops are owed, and they are not averaged.

**Dependency order (Fig 3).** Fix the anchor (D2) before enumerating conditions (D3), then choose an instrument, then report (D4). Effort spent optimising the model cannot rescue a missing anchor: Fig 3 :19, "Optimising a link that already works cannot rescue one that does not." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

---

## 3. Figure census and findings

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Verdicts are kept per domain, never averaged.

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | in-sample fit is not evidence. triangulated |
| 2 The Ground | anchor must not update; independence is low overlap | a valid test is a sealed, low-overlap range against an anchor. triangulated |
| 3 Dependency Chain | order by dependency, not importance | anchor before instrument before report. single-source |
| 4 The Membrane | round trip and R_T; recording versus method | transport error is the measured gap, not a score. triangulated |
| 5 Mint Pipeline | MDL bargain; "explains one occasion perfectly" fails | overfitting is a named figure failure. triangulated |
| 6 Closure / Reachability | import moves the wall; more search at same reach | re-census: does not govern this question (retraction, section 8) |
| 7 Room Chain | next room must differ; agreement is not a verdict | repeated same-pool splits are one long room. triangulated |
| 8 Union Surplus | shared evidence pool; no proof of absence | low-overlap conditions carry the surplus. triangulated |
| 9 Leave / Arrive | describe the residual first; admissible evidence | the verifier sees residual evidence, not the maker's story. single-source |
| 10 Ground Maintainer | pooled readings; bring the residual, not the source | report per condition; keep the verifier blind to interiors. triangulated |
| 11 The Habitat | capability is agent-and-habitat; test harness is substituted habitat | a same-pool holdout proves wiring, not capability. triangulated |
| 12 The Bond | arrangement is substance; two currencies | order of operations carries meaning; bits and actions do not add. single-source |
| 13 Minimum Viable Set | cross-kind composition; set closed, arrangements not | sets the scale distinction, not the test itself. single-source |
| Formula / Symbols | mode rule; R is the aim, not only the error signal | every claim carries a mode; candidate until the ground pays. framework primary |

### F1. In-sample fit is a frame-internal quantity `[general]`, decisive against Option A

Fig 1 :27: "A frame cannot score itself with a quantity it also produces."
Fig 1 :23: "The ground enters as the only metric."
Fig 5 :44: "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."

The fit of M on D_hist is produced by M and D_hist together. Counting it as evidence of transport lets the frame score itself. Fig 5 :44 names the overfit case directly: a term that explains one occasion perfectly fails the bargain. This is the figure-grounded reason a training score is not a generalization test.

**Status: triangulated** across Fig 1 (ground is the only metric) and Fig 5 (the MDL bargain). The two figures have different objects: one governs what may count as a metric, the other governs what a term is worth. Low overlap.

**Refuter.** Show that a quantity the model itself produces can settle a question about the world without any range against an independent observation. That breaks Fig 1 :23.

### F2. The test condition must be an anchor that cannot update `[general]`

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30 "If it moves when you push on it, it is not an anchor."
Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

A held-out set becomes an anchor only if it is sealed before the verdict and not used to retune M. Once the test data inform hyperparameters or model selection, the anchor updates on the frame and the panel collapses into coherent drift. Fig 2 :33-34 names that failure: "everything drifts together, and the drift is coherent, which is why nobody notices."

**Status: triangulated** (Fig 2 anchor rule plus Fig 4 round trip, which requires the return leg to be a fresh reading).

**Refuter.** Show that a test set used for selection still settles the transport question as well as a sealed one. That breaks the non-updating condition at Fig 2 :30.

### F3. Same-pool splits share an evidence pool, so their agreement is the pool talking `[general]`

Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 8 :48-49: "Two frames that overlap almost completely are one frame wearing two names."
Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."

A random train/test split of one historical dataset draws both sides from the same pool. The two "conditions" are one frame wearing two names. This is the structural reason i.i.d. validation can be excellent while transport fails. It does not say i.i.d. validation is useless: it says it cannot be a witness for the transport claim.

**Status: triangulated** across Fig 2 (independence) and Fig 8 (union surplus). Different quantities: agreement weight versus reachable surplus.

**Refuter.** Show that two samples from one evidence pool carry as much information about transport as samples from conditions whose closures differ. That breaks Fig 2 :31 and Fig 8 :48-49 together.

### F4. A same-distribution holdout is a substituted habitat `[general]`

Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone"
Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

The deployment habitat is the thing the claim is about. A holdout sampled from the training distribution substitutes a habitat that shares its closure. It tests that the fitted pipeline still wires up; it does not test capability under new conditions. Fig 11 :30 lists the two silent failure modes of substitution: "what you failed to reproduce, and what you brought with you."

**Status: triangulated** (Fig 11 isolation law plus Fig 2 :40 evidence pool). The habitat is enumerated, not composed: Fig 11 :43, "The habitat is enumerated, never composed."

**Refuter.** Exhibit a model that proves capability under a substituted habitat and a changed habitat alike, with the changed habitat shown to be genuinely outside the training closure. That breaks Fig 11 :70.

### F5. Generalization error is a round-trip gap R_T, not a score `[general]`

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
Fig 4 :31: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold"
Symbols table: R_T is `gap(x, (T_E ∘ T_A)(x))`, the gap between what was sent up and what came back down.

Fitting is abstraction: detail from D_hist is thrown away so the model can be reapplied. Deployment is concretisation: the model is put back into a specific new situation. The residual observed there is the transport gap. It is not an error to be optimised away inside the training frame; it is the measurement of what the fitted description cannot hold.

**Status: triangulated** (Fig 4 round trip plus Fig 2 ground). Different levels: within-scale loop versus cross-scale transform.

**Refuter.** Show that the abstraction-to-deployment transform is lossless, so the coarser description holds every detail the deployment needs. That sets R_T to zero and breaks Fig 4 :31.

### F6. Report per-condition residual, never an average `[general]`

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 10 :25-26: "stale percepts, dropped transients, saturated metrics, pooled readings"

Averaging accuracy over conditions is the named way a live failure disappears. The general rule in Fig 1 is: never aggregate the residual over the things it is indexed by. In this question the indices are the conditions and environments.

**Status: single-source for the literal "object slot" wording, triangulated for the no-pooling rule** (Fig 1 plus Fig 10 pooled readings). See the strain note in section 7: transporting "slot" from tracked objects to conditions is a level crossing, declared rather than hidden.

**Refuter.** Show a case where the mean across conditions preserves every live per-condition failure and no pooling is possible. That breaks Fig 1 :22.

### F7. The verifier must be blinded to the maker and shown residual evidence `[general]`

Fig 9 :51: "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it"
Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."
Fig 10 :52: "Bring a characterised residual, never the source."

A checker shown the architecture, the training story, or the author's reputation can reconstruct the claim and can no longer verify it. Show the condition, the sealed prediction and the observed residual. The model's pedigree is a stake-inducing channel.

**Status: triangulated** (Fig 9 admissible evidence plus Fig 10 verifier non-access). Low overlap: one governs evidence type, the other governs checker position.

**Refuter.** Show a verifier whose verdict improves when it is given the maker's story rather than the residual record. That breaks Fig 9 :51.

### F8. Repeated same-pool tests do not converge on the truth `[general]`

Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."
Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."
Fig 7 :42: "the next room you book is the direction you travel, and booking a room like the last one is how a chain stops travelling at all."

Adding more random splits of the same data is booking the same room. Progress per handoff needs two factors: a bracket with fidelity across the handoff and ground pressure on the room (Fig 7 :37-39). A new condition is useful only if it differs from the last and is chosen against the residual the last one surfaced.

**Status: triangulated** (Fig 7 selection-between-rooms plus Fig 2 independence).

**Refuter.** Show a chain of identical rooms whose agreement with the ground increases monotonically. That breaks Fig 7 :35.

### F9. Passing is not proof of generalization `[general]`

Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room."
Fig 9 :32: "you get a kind of thing, never the answer itself"

No finite set of new conditions exhausts the habitat. A model that survives them is a candidate, not a `grounded` generalizer. Fig 9 :32 also bounds what the figures return: a shape of a valid test, not a certificate for a particular model.

**Status: triangulated** (Fig 8 proof of absence plus Fig 9 sealed room).

**Refuter.** Exhibit a finite test suite that proves absence of failure for all unseen conditions. That would require a sealed room, which Fig 9 :44 forbids.

---

## 4. Pre-registered refuter

Written before any conclusion or outreach, per the framework's own rule that a falsifier written before the run is a design instrument. **Begin below this line before reading section 5.**

The shape claim (a valid generalization test must use a sealed, low-overlap anchor and per-condition residuals) is refuted if any of the following holds:

1. A quantity the model itself produces, with no range against an independent observation, is shown to settle a transport claim. Breaks Fig 1 :27 and Fig 1 :23.
2. Same-pool train and test samples are shown to carry as much evidence about deployment behaviour as conditions from closures that differ. Breaks Fig 2 :31, Fig 2 :40 and Fig 8 :48-49.
3. A test harness that substitutes the training habitat is shown to demonstrate capability rather than wiring. Breaks Fig 11 :70.
4. Averaging residuals across conditions is shown to preserve every live per-condition failure. Breaks Fig 1 :22.
5. A finite suite of unseen conditions is shown to prove absence of failure. Breaks Fig 8 :39 and Fig 9 :44.

If any fires, the corresponding structural claim is withdrawn and the audit is re-run from the residual. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. **State the claim as transport, not accuracy.** The residual is a function of condition: R(M, C). Ask how it behaves as C leaves the training pool `[general]`.
2. **Seal the anchor before the run.** No tuning, model selection or threshold choice on the test conditions. Record the date and the seal in the provenance (Fig 2 :29-30).
3. **Choose conditions by low overlap, not by convenience.** For each test condition, record what frame it comes from, what evidence it shares with training, and why the closures differ (Fig 2 :31, Fig 8 :48-49).
4. **Enumerate the habitat before building the suite.** List actors, conditions and relations in contact with the residual, then what contacts those (Fig 11 :43-44). Mark what you failed to reproduce and what you introduced (Fig 11 :30).
5. **Report R_T per condition.** Publish the vector of residuals and the worst case, not only the mean (Fig 1 :22, Fig 4 :30).
6. **Keep the verifier blind.** Send the condition, the sealed prediction and the observed residual, not the architecture or the training narrative (Fig 9 :51, Fig 10 :52).
7. **Buy independence in proportion to the cost of being wrong.** Fig 2 :42: "Buy independence in proportion to the cost of being wrong." A high-stakes model warrants more low-overlap conditions, not more splits of the same pool.
8. **Write the refuter first.** A failure is more useful than an endorsement.

---

## 6. Canonical usage check

Two local canonical sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo"; a reading that makes one contradict another has misidentified its domain, not found a flaw; the framework returns "a shape, not a name" and stops at the limit of the available instruments, recording the lineage so the stop is honest. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7 separates SEARCHED, INWARD and OUTWARD. SEARCHED is asked first because it is cheapest. Step 5: "the ground settles it. Verified only by what pays. A gate is not the ground." Step 8: "IT IS THE REACH THAT DRIVES THE LOOP, NOT THE LIBRARY."

**Re-read of F1 to F9 after the canonical check.** Nothing is retracted at claim level. Two corrections are recorded below. The verdict stays `general`/`specified`, ungrounded.

---

## 7. Strain test and honest level crossings

- **"Object slot" to "condition slot" (F6).** The literal index in Fig 1 :19 is an object being tracked. Using conditions as the index is a level crossing, not a literal reading. Justified because Fig 10 :68 says a crossing is "a change of role rather than a step upward" and the figures are domain-agnostic. Marked as a `specified` extension with a stated strain. It is not hidden and it is not a figure quote about conditions.
- **Round trip between scales to fit and deployment (F5).** Fig 4's transform runs between one agent and a population. Applying it to fitting and deployment puts the same lossy structure at a different stratum. Fig 4 :19-20 says the kernel is invariant and only actors, currency and anchor change. No strain after re-census.
- **"Test harness" to "i.i.d. holdout" (F4).** A holdout from the training distribution is not literally a synthetic solve, but it is a habitat substituted for the deployment habitat, which is the condition Fig 11 :70 names. Low strain, declared.
- **No figure line for "accuracy".** The figures name residuals, ground and anchor. They do not name accuracy as a metric. This is not a gap: the question is answerable in the figures' vocabulary as a transport residual, so no import is owed.

---

## 8. Retraction and confirmation log

Corrections are kept visible, never silently erased.

| earlier reading | status now | reason |
|---|---|---|
| First pass used Fig 6 (closure, reachability, import) as the governing line for generalization | **Retracted.** | Import governs acquiring a new atom. A transport test does not add an atom to the model's library; it ranges the same model against a new anchor (Fig 2 :45). Recensus moved it to D2. Fig 6 is left in the census table with the retraction visible. |
| First pass treated "more test data" as the remedy for a failed transport test | **Retracted.** | Fig 6 :50: "Fails by spending budget on a region already swept. Distribute the search, and keep the searchers independent." More of the same pool is budget spent on a swept region. |
| First pass called D1 a domain with "data fit" as its anchor | **Retracted.** | A quantity the frame produces is not an anchor. D1 is kept in the table with anchor = none, because it is the object under test. |
| F1 in-sample fit disqualified | **Confirmed** after canonical check. | Fig 1 :27 and Fig 5 :44 name it from two different quantities. |
| F4 substituted habitat | **Confirmed** after canonical check. | Fig 11 :40, :70, plus Fig 11 :91 (habitat is not the ground). |
| F6 per-condition reporting | **Narrowed, not retracted.** | The rule survives, but "condition slot" is a level crossing from "object slot"; see section 7. |
| F9 passing is not proof | **Canonically confirmed.** | Figures README: "Indiscernibility is not identity"; Fig 8 :39. |

---

## 9. What survives, with its mode

| claim | mode | figure |
|---|---|---|
| A generalization claim is about model-and-habitat, not the model alone | `general` | Fig 11 :39 |
| In-sample fit cannot be evidence for transport | `general` | Fig 1 :27; Fig 5 :44 |
| The test condition must be a sealed anchor that does not update | `general` | Fig 2 :29-30 |
| Same-pool conditions share an evidence pool and cannot witness transport | `specified`, falsifiable | Fig 2 :31, :40; Fig 8 :48-49 |
| A same-distribution holdout proves wiring, not capability | `specified`, falsifiable | Fig 11 :70 |
| Transport error is the round-trip gap R_T, reported per condition | `general` | Fig 4 :30-31; Fig 1 :22 |
| Passing a finite suite leaves the model a candidate, not grounded | `general` | Fig 8 :39; Fig 9 :44 |

**Verdict on this audit.** The shape survives, the specific method follows from the figures, and nothing is settled. The world sources in `09_watson_answer.md` corroborate from different fields, but they do not decide. Strains after re-census: one declared level crossing (F6), no hidden ones.
