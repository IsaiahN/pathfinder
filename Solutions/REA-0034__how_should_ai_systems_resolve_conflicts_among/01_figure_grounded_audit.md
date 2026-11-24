# Figure-grounded audit: how should an AI system resolve a three-source conflict?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the Symbols and Operators tables in the same extract, and the world sources in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual under audit

The question arrives as if it named one operation: "resolve conflicts among training, current observations, and external sources." Restated in effect terms:

> A system holds Γ (training), produces Γ(b,a), receives o′ (current observation), and can admit atoms through an external source. R = |Γ(b,a) − o′| is live on some slot s. The system must decide what the live residual owes before it changes anything.

Two options, stated before any figure line is chosen:

- **A, combine.** Average the three, tune the weight between inherited prior and new input, or let each source update on the others. This is the engineering default.
- **B, sort then act.** Refuse the operation the residual does not owe, range each frame separately against an immovable ground, and import only through a source gate.

An answer must also bind the sought-for shape as an ordinary term (Formula, "Direction"): *"make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else."* The bound shape here is: **for each residual kind, one owed operation, one anchor that does not move, and one instrument that would tell a false held term from a broken channel.** Until it is bound, the loop can check the mechanism and not the direction of the question.

---

## 1. Domain census (before any figure line is chosen)

R by arity, symmetry and scale:

- **Arity:** three named sources, but structurally R is a per-slot gap with a *kind*, not a three-way vote. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
- **Symmetry:** the three are not interchangeable. Training and external sources are frames; the observation is contact; the ground is neither. Fig 2 :46: *"The anchor is not a third party to the disagreement and it is not the tie-breaker in a vote."*
- **Scale:** first order inside one frame (belief formation), second order across frames (import and triangulation), and a refusal acts on the record, which changes reach rather than the library (Fig 6 :42).

One line per domain, with actors, currency and anchor. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1, internal belief formation | Γ, b, w, a, o′, one slot s | per-slot residual R | the ground through R | which residual kind is live (partition) |
| D2, external source and import | nature, corpus, peer frame, ground maintainer | atoms crossing with provenance | the ground, which does not update | import, or common-cause echo |
| D3, adjudication and verification | the frames being ranged, the seat | agreement versus residual | the ground, never agreement | triangulation, or drift |

**Partition or union.** The three-way conflict is a **union compound**, not one hard question. Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones."* Fig 9 :5: *"Split it rather than search."* A bundled problem is a union of overlapping conditions; a single lever clears the region where only one condition holds and leaves the intersections standing (Fig 9 :54-58).

**Order by dependency (Fig 3).** Fig 3 :20: *"The chain is ordered by dependency, not by importance."* Refuse before mint (Formula step 2); settle the first-order molecule before composing over it (Fig 12 :104); describe the residual before choosing a frame (Fig 9 :27-28).

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | *"The residual is indexed by object slot, not aggregated."* | the conflict must be sorted per slot, not averaged |
| **2 The Ground** | anchor must not update; two collapses named | rules out option A outright |
| **3 Dependency Chain** | *"Optimising a link that already works cannot rescue one that does not."* | a better weight cannot fix a false term |
| **4 The Membrane** | *"Only methods cross up. Only head starts come down."* | send the sorting method, not a recorded verdict |
| **5 Mint Pipeline** | fourth kind and fifth kind; three guards as a product | the routing table for the residual |
| **6 Closure / Reachability** | import is the only operator that moves the wall | external sources are imports with a source gate |
| **7 Room Chain** | *"agreement compounds, evidence does not"* | more agreeing sources add no ground |
| **8 Union Surplus** | *"Convergent derivation and adopted import look identical in the contents."* | provenance is the whole issue for external sources |
| **9 Leave / Arrive** | *"Split it rather than search."*; describe before looking | unbundle before choosing a remedy |
| **10 Ground Maintainer** | *"Bring a characterised residual, never the source."* | the verifier must not hold the framework |
| **11 The Habitat** | *"An improvement that does not change contact changes nothing, however much it improves."* | weight tuning is not contact |
| **12 The Bond** | contraction is ¬, not −; a vocabulary without ¬ can only accumulate | a refusal is a distinct operation, not a smaller weight |
| **13 Minimum Viable Set** | *"Unreachable is a verdict here, not a silence,"* | no ground reading is an honest stop |
| **Operators table** | ¬ takes one operand; it is not subtraction | the refusal acts on a term's standing |
| **Symbols table** | w leans between private history and inherited prior; R is the aim | w is a belief parameter, not a verdict |

Strained readings are named as such below, not smoothed over.

---

## 3. Findings

### F1 — The three sources are not symmetric peers; one anchor must not update (decisive)

Fig 2 :24-25:

> **"the anchor"** / **"pinned: it does not update on A or B"**

Fig 2 :29-30:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

Fig 2 :33: **"The anchor must not update."** Fig 2 :46: **"The anchor is not a third party to the disagreement and it is not the tie-breaker in a vote."**

Training is a frame (Γ and its prior), an external source is a frame (a peer closure), and the observation is where R arrives. None of them is the anchor, because each can change its answer when the system pushes on it. The anchor is the ground: a measurement, a board, a counter, a patient outcome. If the system lets the ground move when training or the external source disagrees with it, it has converted the ground into a fourth frame.

**Refuter:** show a case where the item used to settle the conflict changes its answer because a frame thought differently about it. Then it was never an anchor and this finding fails. **Mode:** `general` (structural).

### F2 — Averaging or mutual update is collapse 1, coherent drift

Fig 2 :13-15:

> **"no anchor; each updates on the others"** / **"they converge, and what they converge on is whoever had the most influence"**

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."**

Option A is exactly panel 1 of Fig 2. Training, observation and external sources update on one another until they agree. The agreement records relative influence, not truth, and it is coherent, which is why nobody notices. This is not a side objection to a preferred design; it is the named failure genus.

**Refuter:** exhibit a three-source conflict where mutual update converges to the ground's answer *and* the anchor demonstrably did not move any frame. That would be convergence under triangulation, not collapse 1, and would not rescue averaging as a rule. **Mode:** `specified`.

### F3 — Training and external sources often share a corpus: collapse 2

Fig 2 :18-21:

> **"one evidence pool"** / **"they never talk, and still agree"** / **"so the agreement is the pool talking, not two frames confirming each other"**

Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence."** Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**

An "external source" scraped from the same web corpus as training is not a second witness. It is the same pool wearing a second label. This is the direct figure reading of the model-collapse result (Shumailov et al., 2024, read this session): a model trained on data produced by its own lineage mis-perceives the original distribution even with no distribution shift. The world source corroborates; it does not decide.

**Refuter:** show that the external source's atoms are derivable only from a closure that does not intersect the training corpus (record the provenance that establishes this). Then independence is real and the agreement may carry information. **Mode:** `specified`.

### F4 — The conflict is a union of residual kinds; route before acting

Fig 9 :4-5 (quoted in section 1) and Fig 9 :54-58. Formula step 2 (boundary diff):

> TRANSFERRED nothing owed; NOVEL extend perception, aim the probe; BROKEN · rebinding re-fit, do not mint; BROKEN · mechanism a mint is owed; REFUTED a term held is false; what is owed is a refusal, not an explanation.

Fig 5 :33: **"The three guards are a product, not a checklist."** Fig 5 :42: **"The acceptance test is a bargain, not a threshold."**

A single "resolve the conflict" operator is a category error. The first four kinds sort R by what is **missing**; the fifth sorts it by what is **wrong** (Formula step 2: *"the first four sort R by what is MISSING; the fifth by what is WRONG, and no arrangement of the other four reaches it"*). Training-versus-observation can be a novel slot (extend perception), a mis-attached label (re-fit), a missing mechanism (mint), or a false held regularity (refuse). Each owes a different operation. Applying one lever to the union clears only the single-condition region (Fig 9 :54-58).

**Refuter:** produce a conflict whose per-slot residual cannot be assigned to exactly one of the five bins after the boundary diff is run, and show that a single operation closes it. **Mode:** `specified`.

### F5 — When a held training term is false, a refusal is owed, not a re-weighting

Fig 5 :50-53 (AMENDMENT):

> **"AMENDMENT · the gap has a fifth kind, and the pipeline has no branch for it."**
> **"The four kinds sort a gap by what is missing. None of them sorts a gap by what is wrong."**
> **"refuted: a term we hold is wrong; a term is owed that says so"**

Fig 5 :55: **"What it removes is not a term but a term’s standing to be composed over. Nothing leaves the library. What falls is the reach."** Fig 6 :42: **"What is recorded only grows. What is reachable is derived, and it can fall."**

Fig 5 :58-59 gives the selection rule: *"every term currently bound and generating a prediction is a candidate for being the wrong one"*, and *"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at."* Operators table :57: **"a refutation is a negation, which is why a vocabulary without it can only accumulate"**; Fig 12 :140: **"A vocabulary that cannot refuse can only accumulate."**

Tuning w cannot express "this is false." It can only change how far the belief leans on private history versus inherited prior (Symbols table, w). A system with − but not ¬ can say what is absent from an arrangement and cannot say that the arrangement is wrong (Operators table :73-74). Contraction in the belief-revision literature is precisely the missing operator: the Levi identity K∗P = (K−¬P)+P and the debate over the recovery postulate (Wikipedia, *Belief revision*, read this session) are the field's own version of this finding. The figure verdict is not borrowed from them.

**Refuter:** show a REFUTED residual that is closed by changing w alone, with the false term still composing over downstream terms. If that works, the refusal is unnecessary and this finding fails. **Mode:** `specified`.

### F6 — External sources are imports, gated by provenance and shadow test

Fig 6 :14: **"the only operator that moves the wall"**. Fig 6 :21: **"MINT composes inside the closure and can never add an atom."** Fig 6 :23:

> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

Fig 6 :24: **"Import from a live peer is debited against that frame’s independence. A wrong atom costs more than starting from primitives."**

Fig 8 :51-52: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."** Fig 8 :53: **"Residual first, frame second."**

An external source is not evidence until it has passed a source gate (provenance) and a shadow test (it explains a gap the system already recorded). Without those, the system cannot tell a genuine import from an echo of its own training pool. This is also why the outreach order in `02_outreach_email.md` puts the residual before the theory: *"describe it before you go looking, or any frame you pick will seem to fit"* (Fig 9 :27-28).

**Refuter:** exhibit an import that moved the reach with no provenance record and no described gap, and where the atom was subsequently shown not to be in the receiving closure. **Mode:** `specified`.

### F7 — Weight learning is a belief parameter, not a verdict operation

Symbols table, w: **"How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings."** Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**

Learning w from outcomes is legitimate inside D1. It is not a conflict-resolution verdict. A system that answers "training and observation disagree, so shift w" has changed its belief formation without changing contact with the ground. If the training term is false, the weight can move forever without the residual trending down, which is the signature F5 uses to point the refusal.

**Refuter:** show that a change in w changes what the ground returns for the same slot and action, with the library fixed. Then w is in contact and this finding narrows. **Mode:** `specified`.

### F8 — The verdict comes from the ground; no ground reading is an honest stop, not a forced synthesis

Fig 7 :35: **"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."** Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."** Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** Fig 8 :40-41: **"Underivable-in-principle and unreachable-at-this-budget are different facts"**, with different instructions.

If a source-discriminating instrument does not exist, the system must report `unreachable` or `candidate` rather than manufacture a consensus. The honest output is the shape of what is missing and which operation is owed, not a name for the winning source. This is the limit the framework sets for itself; a simulated derivation cannot cross it either.

**Refuter:** produce a conflict-resolution case where the system's own agreement, with no independent ground, reliably predicts the ground's later answer across new slots. Then agreement is carrying information and the verdict rule is too strict. **Mode:** `general`.

### F9 — What survives, with mode attached

| claim | mode | figure |
|---|---|---|
| The three sources are frames plus contact; none is the anchor | `general` | Fig 2 :24-25, :46 |
| Mutual update is coherent drift, not triangulation | `specified` | Fig 2 :13-15, :35 |
| A shared corpus makes training and "external" one witness | `specified` | Fig 2 :18-21, :31-32 |
| A conflict is a union of residual kinds and must be split | `specified` | Fig 9 :4-5, :54-58 |
| A persistent flat residual on a held term owes a refusal | `specified` | Fig 5 :50-59; Operators :57 |
| External atoms need provenance and a shadow test | `specified` | Fig 6 :23-24; Fig 8 :51-53 |
| w is learnable but cannot settle a false term | `specified` | Symbols table, w; Fig 11 :40 |
| With no ground reading, report `unreachable` | `general` | Fig 13 :134; Fig 8 :39 |

---

## 4. Pre-registered refuter

Written before the conclusion and before any outreach, per the standing rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A three-source conflict is closed by mutual update where the anchor demonstrably did not move and the result later pays at the ground (breaks F1, F2).
2. A held training term whose per-slot residual persists and does not trend down is closed by re-weighting alone while remaining composable over downstream terms (breaks F5, F7).
3. An external atom demonstrably outside the receiving closure moves the reach with no provenance record and no pre-stated gap (breaks F6).
4. A single operation closes a conflict that the boundary diff assigned to two residual kinds (breaks F4).
5. Self-agreement with no independent ground reliably predicts later ground readings on new slots (breaks F8).

If any fires, the corresponding finding is withdrawn and the synthesis in `07_the_tether_answer.md` is revised. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. Replace "resolve the conflict" with "sort the residual by kind, then apply the owed operation" (F4).
2. Name an immovable ground for the domain and keep it out of the three frames (F1).
3. Give the system ¬, not just a smaller weight, so it can refuse a held term (F5).
4. Gate every external source on provenance plus a described gap, and debit its independence (F6).
5. Report `unreachable` rather than synthesising a winner when no source-discriminating instrument exists (F8).
6. Send the generator, not a recorded verdict: Fig 4 :22 *"Only methods cross up. Only head starts come down."*

---

## 6. Canonical usage check

Two sources govern how the figures may be used, both read this session:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop, the mode rule, and step 7's three distinct questions SEARCHED / INWARD / OUTWARD. SEARCHED is asked first because it is cheapest and the other two assume its answer.

### Strains and re-census

- **Apparent strain, Fig 5 fifth kind versus Fig 6 amendment.** Fig 5 says a refusal removes standing and the reach falls; Fig 6 :42 says the same. Not strained: they are the same addition read twice. No re-census owed.
- **Apparent strain, "import moves the wall" versus "w cannot settle."** Re-census: import acts on the closure (D2); w acts on belief formation inside one frame (D1). Different quantities, different domains. No strain after re-census.
- **Apparent strain, belief-revision contraction versus the figure refusal.** The world literature's recovery postulate can reintroduce a contracted belief; the figures forbid a refused term from cycling back without new growth (Fig 6 :45-46). Re-census: the figure record is monotone, the AGM belief set is not required to be. This is a real difference, recorded as a strain to be tested, not smoothed into an identity (see `06_isomers_and_order.md`).
- **After re-census: one live strain (contraction versus refusal in a monotone record), named, none hidden.**

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Averaging is inefficient" | **Upgraded to a named collapse.** Fig 2 :13-15 and :35 make it a structural failure, not a performance preference. |
| "Contraction in the literature is the same as the figure refusal" | **Narrowed to an analogue.** Both add a refusal operator, but the figure's record never deletes and its reach can fall; AGM recovery can reintroduce. Recorded as a strain, not an identity. |
| "The external source can be treated as a second frame without more work" | **Retracted.** Fig 2 :31-32 requires independence be measured, and Fig 8 :51-53 requires the provenance record. |
| "w is the conflict-resolution mechanism" | **Retracted.** Symbols table makes w a learnable belief parameter; Fig 11 :40 makes contact the thing that changes capability. |
| "No ground means the system should pick the best-supported source" | **Retracted.** Fig 13 :134 makes unreachable a verdict, not a silence. |
| F1, F2, F4, F5, F6, F8 | **Canonically confirmed** against the verbatim extract this session. |

---

## 7. Bounded stop

This audit stops where the instruments stop. It names the residual kinds, the owed operations, and the source gates. It cannot say which of a system's training terms is false in a particular deployment, whether a particular external corpus is independent, or what a source-discriminating instrument for that deployment would be. Those are ground questions. *"you get a kind of thing, never the answer itself"* (Fig 9 :32). The lineage above is the record that makes the stop checkable.
