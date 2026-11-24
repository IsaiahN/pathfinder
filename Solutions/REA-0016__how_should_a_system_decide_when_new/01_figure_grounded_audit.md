# Figure-grounded audit: How should a system decide when new evidence should change a belief it has learned?

**Mode: `general` on the loop shape, `specified` on the decision rule. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the decision it reports on.

**Sources.** Figure text and line numbers from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited `Fig N :line`. Loop from `FRAMEWORK/figures/THE_FORMULA.md`. Seat rules from `THE_SEAT_MAP_Field_Guide_amended.md`. Canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources in `10_source_ledger.csv`, all opened. No em dashes are used in this file.

---

## 0. The residual in effect terms

A system holds a belief `b`: "What the system takes to be the case before it acts. Formed from its own history and from what it inherited, mixed by w. Not the observation." (Symbols table :19-21). Its library `Γ` predicts `Γ(b,a)`. Evidence `o'` arrives and disagrees. The residual is `R = |Γ(b,a) − o'|` (Formula step 1).

The decision residual `R_D` is not the raw discrepancy. It is the question of which route the discrepancy should take. There are five routes, not four:

| route | what it does with the held belief | what it owes |
|---|---|---|
| TRANSFERRED | nothing, the prediction held | nothing |
| NOVEL | extends perception, aims the probe | a probe, not a belief change |
| BROKEN, rebinding | re-fits a binding | a re-fit, not a new term |
| BROKEN, mechanism | mints a new term | a new atom or molecule |
| REFUTED | refuses a term already held | a negation, not an explanation |

The first four sort the gap by what is MISSING. The fifth sorts it by what is WRONG (Formula step 2). The decision asked about in REA-0016 is the fifth route and the conditions that license it. Stated in effect terms: *under what conditions does a miss stop being evidence to accommodate and become a reason to withdraw a term the system already stands behind?*

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.**

- **Arity.** Unary in its trigger: a miss is registered per object slot `s`, not as one global scalar. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Many slots may be live at once, so the decision is a set of per-slot verdicts, not a single system-wide verdict.
- **Symmetry.** Asymmetric in its relations. Evidence, frame and anchor are not interchangeable partners. The frame ranges against the anchor; the anchor does not range against the frame (Fig 2 :45, "Frames range against the ground. They do not negotiate with it."). Swapping them is the mutual-update collapse.
- **Scale.** The belief change closes within one scale (Formula steps 1 to 5). It becomes cross-scale only when the settled result is promoted and an earlier settled molecule is reused as an atom (step 6, Fig 12 :104). The decision itself is first-order; second-order effects are a separate loop and must not be averaged into it.

**One line per domain: actors, currency, anchor.**

- **Domain 1, the perceptual controller (the trigger domain).** Actors: `b` (belief), `w` (weighting), `a` (action), `o'` (observation), `R` per slot, candidate terms. Currency: residual and cost, in two incommensurable units (bits for description, actions for settlement, Fig 12 :125-127). Anchor: the ground, "The ground enters as the only metric." (Fig 1 :23). Nameable? Yes, the ground via `o'`.
- **Domain 2, the library and the reach (the mechanism domain).** Actors: terms in `Γ`, `atoms(Γ)`, `closure(Γ)`, the refusal term `¬t`, derivations built on `t`. Currency: reachability and settlement; recorded terms grow while reach can fall. Anchor: derivation itself, "a term is reachable if it is derivable under everything currently held" (Fig 6 :44). Nameable? Yes.
- **Domain 3, the verification arrangement (the legitimacy domain).** Actors: the ground maintainer, outside frames, records. Currency: settlement and independence. Anchor: the immovable ground, "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." (Fig 2 :29). Nameable? Yes, a measurement, experiment, counter, market or patient outcome (Fig 2 :29-30).
- **Domain 4, the direction of the question (the limit domain).** Actors: the sought-for shape held as a preference, the prediction written before the run. Currency: residuals the preference does not accrue (it predicts nothing). Anchor: the pre-registered prediction, if the discipline is followed. Nameable? Only if bound as an ordinary term. Left unbound it is not a domain at all, which is exactly the limit Fig 5 :61-68 names.

**Partition or union.** These four are a **union compound with a dependency order**, not a partition. A belief change is licensed only when conditions from several domains hold jointly: mass on a slot (D1), a persistently wrong term as target (D2), a fixed anchor (D3), and a pre-bound direction (D4). Per Fig 9 :54-58, a case in two conditions is not a harder case of either; unbundle before searching. Treating "when to update a belief" as one scalar question is the bundle error.

**Dependency order (Fig 3).** Perceive `R` per slot (link 1) before routing it (link 2); route before choosing which term is wrong (link 3 is where the chain usually breaks, Fig 3 :24-27); choose the term before minting the refusal (Formula step 2 before step 3); settle before promoting (step 5 before step 6). Effort spent minting before routing arrives at a step that cannot use it (Fig 3 :19-20).

---

## 2. Figure census (verbatim, quoted before concluding)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Every quoted string below is an exact substring of that file, checked character by character.

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual is per slot; ground is the only metric; frame-internal quantities cannot score the frame | governs the trigger |
| **2 The Ground** | anchor must not update; triangulation not negotiation; correlation has valence | governs legitimacy |
| **3 Dependency Chain** | route before mint; a reading below the break is a reading of nothing | governs order |
| **4 The Membrane** | methods cross, recordings do not; round trip has a gap | governs what may be handed on |
| **5 Mint Pipeline** | fifth bin REFUTED; persistent-and-flat ranking; three guards; MDL bargain; direction limit | **primary, decides the rule** |
| **6 Closure / Reachability** | refusal adds, nothing deleted, reach falls; derivation computes the fall; contradiction open | governs the mechanism |
| **7 Room Chain** | agreement among rooms is not a verdict | rejects consensus as an update criterion |
| **8 Union Surplus** | convergence and import look identical; provenance separates them | governs evidence for the target |
| **9 Leave / Arrive** | describe the residual first; filters for budget, witnesses for verdict | governs search for a checker |
| **10 Ground Maintainer** | bring a characterised residual, never the source; verifier non-access | governs verification |
| **11 The Habitat** | capability is agent-and-habitat; valence relative to the residual | governs the environment of the belief |
| **12 The Bond** | negation is not a bond; a vocabulary that cannot refuse only accumulates | supplies the operator |
| **13 Minimum Viable Set** | the six terms and cross-kind composition; a shape, not a name for what is missing | background, does not decide this rule |
| **Operators table** | negation acts on one operand; a refutation is a negation | corroborates Fig 12 |
| **Symbols table** | `b`, `w`, `R`, `Γ`, the ground; `w` learnable from outcomes | supplies the state variables |
| **THE_FORMULA.md** | five ROUTE bins; MINT bargain; Direction discipline | primary loop form (not a figure line) |

### F1. The decision already has a figure bin, and it is the fifth one (decisive)

Fig 5 :50: "AMENDMENT · the gap has a fifth kind, and the pipeline has no branch for it."

Fig 5 :51-52: "None of them sorts a gap by what is wrong. A residual whose content is that a regularity the system holds is false owes a term, and the term it owes refuses another rather than explaining a gap."

Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so"

A system cannot answer "when should new evidence change a learned belief" using only the four missing-kind branches. A belief change is not the minting of a new explanation for a surprise; it is the refusal of a regularity already held. The figures give that case its own bin and its own operator. This is the single most direct line governing the question. **Status: triangulated** between Fig 5 :50-53 and Formula step 2's REFUTED bin (low overlap: pipeline diagram versus compact loop), corroborated by the Operators table (different artefact).

*Strain test.* One might try to read the fourth bin, "mechanism broken: a new term is owed" (Fig 5 :14), as covering belief change. It does not. A new term explains a gap; the fifth bin refuses a term. Fig 5 :54 says the refusing term "pays the same bargain" but what it removes is standing, not a term. Reading belief change as a plain mint would make :54 and :55 contradictory. The line strains, so it governs a different quantity. Re-census confirmed: the fifth bin is required.

### F2. The trigger: positive mass, then the persistent-and-flat ranking

Before any refusal, support must be nonzero. Fig 5 :21: "the gap has real mass somewhere". Formula step 3 states the gate: "SUPPORT `|R⁺_s| > 0 for some s` before the search". A belief does not change on a zero residual, and it does not change merely because a global average drifted. Fig 1 :13: "a global R near zero with one live slot residual is a legal state". Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Which belief is the wrong one? Fig 5 :58-60: "every term currently bound and generating a prediction is a candidate for being the wrong one. And they rank by a quantity already recorded — a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign." (Quoted here without the em dash: the substantive clause is verbatim.) Formula step 2 restates it: the candidates "rank by a quantity already held: the residual that PERSISTS AND DOES NOT TREND DOWN. Same shrinking test the selector runs, opposite sign."

So the decision predicate is not "did the belief ever fail". Every belief fails sometimes. It is: *among terms presently bound and predicting, which one keeps being wrong and is not getting better*, read with the sign reversed from the selector that asks which residual is improving. This is the answer to "when" and "which" at once. **Status: triangulated** between Fig 5 :58-60 and Formula step 2 (compact loop), with Fig 1 :19-22 governing the per-slot indexing (independent figure).

*Refuter.* If a system can be shown to change a belief whose residual is trending down while another bound term's residual persists flat, the ranking rule is wrong. If a system changes a belief on aggregate error while all per-slot residuals are zero, the per-slot rule is wrong.

### F3. The mechanism: add a refusal, never delete a belief

Fig 6 :42: "What is recorded only grows. What is reachable is derived, and it can fall."

Fig 6 :43: "A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted."

Fig 6 :44: "a term is reachable if it is derivable under everything currently held, so what happens to terms built on a refuted one follows from derivation rather than being stipulated."

Fig 5 :54-55: "A term that refuses another pays the same bargain. Stating the refusal, plus what remains unexplained after it, costs less than what was unexplained before. What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."

This is the structural answer to "how should the system change". It must not delete the old belief. It adds a refusal, and the reach falls as a derived consequence, which is what makes the fall computable and safe. A store that deleted instead "would have neither property, and could not tell never-held from held-and-given-up" (Fig 6 :46). **Status: triangulated** between Fig 6 and Fig 5 (different figures, same conclusion), corroborated by Fig 12 :140 and the Operators table :58 on the need for negation.

*Refuter.* Exhibit a system that genuinely strikes a term from its record on update and can still distinguish "never held" from "held and withdrawn". Under this rule it cannot, so the claim would be refuted.

### F4. The acceptance bargain still applies to a refusal

Fig 5 :42: "The acceptance test is a bargain, not a threshold."

Fig 5 :43: "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."

Fig 5 :26: "and then: does the new term cost less to state than the confusion it removes?"

Formula step 3: accept iff `cost(φ) + left(R,φ) < cost(R)`. A refusal pays the same bargain (Fig 5 :54). So the system should not change a belief merely because the belief is persistently wrong; it should change it when the refusal plus the remaining unexplained residual costs less than the confusion of keeping the belief. A belief with high explanatory value that is mildly wrong may survive; a cheap refusal of a costly false belief should fire. This is why the AGM-style "give up as few beliefs as possible" and the EWC-style "protect the weights important for previous tasks" (world sources below) are corroborations, not the decision itself.

*Refuter.* A case where the refusal strictly increases total unexplained cost yet the rule still fires, or a case where it strictly decreases cost yet the rule holds the belief.

### F5. The anchor must not update while the belief does

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Fig 2 :33: "The anchor must not update."

Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

The update is legitimate only if the ground is held fixed and only the system's terms move. If new evidence changes the belief by first changing what counts as settling the belief, the system has converted the anchor into a frame and entered coherent drift, the failure mode nobody notices from inside. This separates REA-0016 from "how should beliefs be revised to match preferences". Beliefs revise; the ground does not. Seat Map :18: "Where it estimates a fact outside itself it is an *instrument*, and instruments can be wrong on axes they do not measure." **Status: `single-source` for the decisive anchor rule (Fig 2), corroborated by the Seat Map law and by Fig 10 :47 (a convention that decides an outcome has stopped being one) at low overlap.**

*Refuter.* A documented case where the measurement used to settle the belief was itself adjusted in response to the belief, and the resulting change was still called a correction rather than drift.

### F6. The direction limit: the frame cannot see what it is trying to refuse

Fig 5 :61: "BUT THE TERM MOST WORTH REFUSING MAY NOT BE IN THE LIBRARY AT ALL."

Fig 5 :62-63: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it. Every check above runs on the MECHANISM and none runs on the DIRECTION OF THE QUESTION."

Fig 5 :65-66: "The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."

This is why a purely internal "when to update" rule is incomplete. The rule can enumerate bound terms and rank them, but the belief most worth refusing may be the frame's unstated expectation of what the answer should look like. That preference has no residual and is invisible to every mechanism check. The discipline, not another branch, is to write the sought-for shape down before the run and let it be refused like anything else. Formula "Direction": "Committing a prediction before a run is this, already working." **Status: `single-source` for the figure limit (Fig 5 :61-68), triangulated with the Formula "Direction" section and the Seat Map :190-192 (which calls direction a seat office, not a frame discipline).**

*Refuter.* A frame that reliably identifies and refuses its own unbound search preference using only mechanism checks, with no pre-registered prediction.

### F7. Settling is necessary and not sufficient; a library that grows is not a reach that grows

Fig 5 :69: "AMENDMENT · settling is necessary for a term to be composed over, and it is not sufficient."

Fig 5 :71: "Whether a settled term can be composed over is a fact about how it composes, not about what it paid."

Fig 5 :72: "So a system can hold terms it purchased and cannot use, and a library that grows is not a reach that grows."

A system can update correctly by the rule above and still not become more capable, because capability is a property of agent and habitat, not of the record alone (Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone"). "An improvement that does not change contact changes nothing, however much it improves." (Fig 11 :40). So the success measure for a belief change is not terms minted; it is whether the reach and the contact changed.

*Refuter.* A system whose corrected belief set grows but whose reachable predictions and ground contact are demonstrably unchanged, claimed as an improvement.

### F8. The one honest open case

Fig 6 :47: "Open. If a term and its refusal are both settled, the record holds a contradiction. Whether that is two scopes, an error in the ground, or a world that changed is not yet decidable here."

The figures do not decide what to do when both a belief and its refusal are settled. This is a genuine `gap` inside an otherwise governed question, and it is reported as such rather than smoothed over. Formula "The record and the reach" names the same open item. Any complete answer to REA-0016 must stop here and say so.

---

## 3. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument (Seat Map :287). The shape claim is refuted if any of the following holds:

1. A belief change is correctly described as a deletion from the record, and the system can still distinguish never-held from held-and-withdrawn (breaks F3, Fig 6 :42-46).
2. A system reliably changes a belief whose residual is trending down while another bound term's residual persists flat, under the same ground (breaks F2, Fig 5 :58-60).
3. The measurement used to settle the belief is itself adjusted in response to the belief, and the change is still a correction (breaks F5, Fig 2 :33-34).
4. A frame identifies and refuses its own unbound search preference without any pre-registered prediction, using only mechanism checks (breaks F6, Fig 5 :61-68).
5. Both a term and its refusal are settled and the framework decides which scope or error obtains (closes F8, which the figures leave open).

If any fires, the corresponding finding is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Route the miss before minting. Ask which of the five bins it belongs to; only REFUTED licenses a belief change (F1, Fig 3 :19-20).
2. Measure `R` per slot. Do not wait for a global average to rise (F2, Fig 1 :19-22).
3. Pick the target by persistent-and-flat residual, read with the opposite sign from the selector (F2).
4. Add a refusal; do not delete the belief. Let the reach fall by derivation, and price the refusal against the confusion it removes (F3, F4).
5. Hold the anchor fixed. If the ground moves with the frames, report drift, not correction (F5).
6. Bind the sought-for shape as an ordinary term before the run, so it can be refused too (F6).
7. Report F8 as an open item, not a silence. "Unreachable is a verdict, not a silence." A search that finds nothing is never a proof of absence (Fig 8 :39).

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." The five-bin test and the ranking are the verdict mechanism, not a budget filter.

---

## 5. Canonical usage check

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "what a missing thing would have to look like (a shape, not a name)" and stops where instruments cannot distinguish, recording the lineage.
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, five ROUTE bins, MINT bargain, Direction discipline, and the open item when a term and its refusal are both settled.
- WATSON procedure: figures primary and decide, world sources secondary corroboration only. A conflict sends us back to the census; it never flips a verdict.
- Style: no em dashes in any file, per the standing rule.

### Retractions and confirmations

| earlier or tempting reading | status after the canonical check |
|---|---|
| "Belief change is a new term for a surprising gap" | **Refused.** The fourth bin mints; the fifth bin refuses. Fig 5 :50-55 is decisive. |
| "A belief should change when global error rises" | **Refused.** Fig 1 :19-22 requires per-slot residuals; a global average near zero with one live slot is a legal state. |
| "Any persistently wrong belief should change" | **Narrowed.** Persistence is necessary but not sufficient; the MDL bargain must also pay (F4) and the anchor must stay fixed (F5). |
| "The system should discard the false belief" | **Refused.** Fig 6 :43 adds a refusal and removes nothing; deletion loses the never-held distinction. |
| "Adequate internal checks settle which belief is wrong" | **Refused at the limit.** Fig 5 :61-68: the sought-for shape is a preference, not a term; direction is a seat office. |
| "This answers when to update completely" | **Narrowed.** Fig 6 :47 remains open when a term and its refusal are both settled. Reported as `gap`. |
| Apparent strain: fourth bin versus fifth bin | **Not strained.** Re-census: fourth sorts by what is missing, fifth by what is wrong. Different quantities. |
| World-source agreement with the rule | **Weak corroboration only.** The SEP, JDM, neuroscience and ML sources are separate fields, but any agreement here is retrodiction after the figure derivation, not a forward test. |

---

## 6. Verdict after re-census

The question is governed, not a gap. The decision rule that survives is:

> Per slot, when a bound and predicting term's residual persists and does not trend down while other residuals trend down, and the refusal's description cost plus its leftover residual is less than the confusion of keeping the term, add a refusal of that term and let the reach fall by derivation, with the ground held fixed and the sought-for shape pre-bound so it too can be refused.

Truth status: `specified`, ungrounded, candidate. Triangulation: F1, F2, F3 triangulated (two or more figures with low overlap); F5 and F6 single-source for the decisive line; F8 a named `gap`. Strains after re-census: none in F1 to F7; one open item in F8. No claim here is settled by a measurement.
