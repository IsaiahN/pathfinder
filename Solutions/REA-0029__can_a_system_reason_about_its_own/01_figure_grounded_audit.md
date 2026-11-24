# Figure-grounded audit: can a system reason about its own assumptions and detect when those assumptions no longer apply?

**Mode of this document: `specified` on the per-domain findings, `general` on the structural shape, `gap` on the instrument named in F9. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026): LLM output is *"simulacra"*, and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (the authority for every `Fig N :line` quote). Also `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. Eight essays by Isaiah N and the world sources listed in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual in effect terms

The question bundles two effects that have different actors and different anchors. Splitting them is required by Fig 9 :4-5: a disagreement that does not shrink with effort because each rule works on a different subset is not one hard question but several well-formed ones. Split it rather than search.

- **R1, representation.** The system holds terms it composes over. The question asks whether it can make those terms objects of further composition. Effect test: is the assumption a bound term that generates a prediction and can accrue a residual, or is it an unbound preference (the direction of the system's own question) that predicts nothing? The figures decide this split at Fig 5 :58 and :61-63.
- **R2, detection.** The system held a term, the ground once paid for it, and now something does not resolve. Effect test: does the term's residual persist and fail to trend down against a reference that does not move when the system changes its mind? The figures decide this at Fig 2 :29-35 and Fig 1 :27.

**What each option leads to.** If R1 is answered "all assumptions are representable" and R2 "detection is internal", the system is its own metaframe and its own anchor. That closes the last room and makes coherent drift undetectable (Fig 2 :34, Fig 7 :6). If R1 is answered "only bound terms" and R2 "only against an external ground", the system can correct a proper subset of what it holds, can refuse a term when the ground stops paying, and cannot certify the whole set. The latter is the shape the figures give.

**The sought-for shape, bound before the run (Formula step "Direction").** I write down now what an answer would look like: four per-domain verdicts, never averaged, one declared `gap` for the missing instrument, a cost if wrong, an undoability condition and a reversal condition. This paragraph is the pre-registration; no finding below was selected to fit it.

---

## 1. Domain census, before choosing any figure line

### 1.1 R by arity, symmetry and scale

- **Arity.** Two conditions (representation and detection), plus a third object that appears in the question but is not itself a domain: the metaframe, the frame that would certify the whole set. Fig 9 :54-58: a bundled problem is usually a union of overlapping conditions, not a list of separate ones; a case in two conditions is not a harder case of either. This is a **union**, and each condition gets its own loop.
- **Symmetry.** "Reason about" is reflective: the object and the subject are the same frame at different levels, and the transform between them is lossy (Fig 10 :68, Fig 4 :27-29). no-longer-applies is **ordered**: the term was held, then refused. Refusal is the unary operator negation, not a bond (Operators table :70-74; Fig 12 amendment at :134-140). A vocabulary with subtraction but no negation can say what is absent from an arrangement and cannot say that an arrangement is wrong.
- **Scale.** R1 closes inside one scale (the loop over Γ). R2 closes at the ground under that scale. The claim about certifying the whole set crosses a scale membrane and needs the seat at Fig 10. Three scales, one kernel: *"Only the actors, the currency and the anchor change"* (Fig 4 :20).

### 1.2 One line per domain: actors, currency, anchor

A domain needs a nameable anchor. Where none is nameable, it is not yet a domain; it is an aspiration and is recorded as `gap`.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1, the loop / self-model** | Γ, atoms(Γ), bound terms, belief b, weighting w, per-slot residual R_s | composition inside closure(Γ); residual per object slot | the figures as metalaws; no measurement in this folder | genuine domain (internal ground is the figure text, not a world reading) |
| **D2, the ground / anchor** | prediction Γ(b,a), action a, observation o′, the anchor | R = \|Γ(b,a) − o′\| per slot | a measurement, experiment, counter or outcome that does not update (Fig 2 :29) | genuine domain |
| **D3, the metaframe / certification** | the frame, its metaframe, the negation operator | proof or composition inside closure(Γ) | **none inside the frame**. The witness is imported (Fig 9 :19) | genuine domain but its verdict is `no`, categorically, at this scale |
| **D4, the verification / other-frame seat** | ground maintainer, outside frame, monitor, record | residual, independence, provenance | the ground, never agreement (Fig 9 :60, Fig 10 :24) | genuine domain |
| **D5, "the instrument that binds the direction"** | an unbound preference, an ordinary term | residual accrual after binding | **no nameable anchor in this folder** | **not a domain yet** -> `gap`, F9 |

No stand-alone domain is created for "reasoning" in the abstract. That word is a label applied afterwards to a lineage that met its ground (Fig 11 :36); it has no currency of its own here.

### 1.3 Partition or union

Union, not partition. D1 and D2 overlap: the residual D1 computes is the same quantity D2 ranges against the anchor. D3 and D4 overlap: both require a frame whose closure differs, but D3 names the limit while D4 supplies the office that works inside it. An overlap is a compound with its own loop, so D1+D2 is one compound and D3+D4 is another, and the two compounds are ordered by dependency, not averaged (Fig 9 :55-58). One lever cannot clear the intersections. The question "can a system reason about its own assumptions" is answered separately for each compound.

### 1.4 Order by dependency (Fig 3)

1. **Perception.** Can the system tell what is in front of it and tell it apart from what was there before? Operationally: is R indexed per slot? Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* If the system reports one global confidence number, the live slot disappears into an average (Fig 1 :22) and every later step reads a smoothed signal.
2. **Vocabulary.** Does it have terms for what its assumptions afford: what can be moved, opened, joined, blocked? An assumption that is not bound as a term has no affordances. This is where the chain breaks in practice.
3. **Objective.** Can it say what would count as progress here, in its own terms? That is a persistent residual that does not trend down (Fig 5 :59), not a confidence score it produces itself.
4. **Planning.** Aim the probe at the live slot; decide whether the gap is new, mis-attached, broken-mechanism or refuted (Fig 5 :10-14 and :50-56).
5. **Learn and carry.** Refuse first when a term is false (negation is not a bond), then mint a replacement only if the bargain pays, settle against the ground, carry the method up (Fig 4 :22, Fig 12 :104).

Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The missing instrument at link 2 is the subject of F9 and is recorded as `gap`, not as a working link.

### 1.5 Strain test applied before concluding

- A line that only fits by calling "reason about" the same thing as "certify" is strained. Those are different quantities: object-level representation versus metaframe proof. Re-census assigns Fig 5 to the first and Fig 8 to the second (F4, S2).
- A line that only fits by calling a monitor's specification "the system's own view" is strained. A monitor built from an external formal specification is a bound ordinary term, not a verifier that reconstructs the claim (F7, S3).
- After re-census, one live type question remains: what counts as the ground for an assumption whose subject matter is formal rather than empirical (S4). It is named, not hidden, and does not flip any verdict.

---

## 2. Figure census (read before concluding)

| figure | bearing on this question | verdict it gives |
|---|---|---|
| **1 The Agent** | *"A frame cannot score itself with a quantity it also produces"*; residual per slot | internal confidence cannot be the verdict; detection must be per slot |
| **2 The Ground** | anchor does not update; alignment is triangulation, not negotiation | detection requires an anchor outside the agreeing frames |
| **3 Dependency Chain** | a reading below the break is a reading of nothing | "reasoning about assumptions" fails at the vocabulary link when the preference is unbound |
| **4 The Membrane** | methods cross up, recordings do not; round trip lossy | a self-report carried up is a recording of one occasion, not a method |
| **5 Mint Pipeline** | bound terms enumerated, ranked by residual; the fifth kind is refuted; the direction is invisible | **decisive for D1**: partial yes for bound terms, structural no for the unbound direction |
| **6 Closure / Reachability** | mint cannot add an atom; only import moves the wall; refutation lowers reach | whole-set self-correction cannot be manufactured inside the closure |
| **7 Room Chain** | agreement compounds, evidence does not; no last room | internal agreement about assumptions is variation, not a verdict |
| **8 Union Surplus** | Gödel, Tarski, Chaitin; a frame cannot reach its own metaframe or certify its own limit | **decisive for D3**: no self-certification, and no proof of absence from inside |
| **9 Leave / Arrive** | the edge is named from beyond; the witness is imported; describe before looking | **decisive for D2 and D4**: detection arrives from outside, described in effect terms |
| **10 Ground Maintainer** | verifier non-access; the seat ranges against the ground; bring a characterised residual | outside frame is the office; agreement with an inside reader is contamination |
| **11 The Habitat** | capability is agent-and-habitat; an improvement that does not change contact changes nothing | an internal self-model alone is not capability; contact is the variable |
| **12 The Bond** | the bond carries the information the operands do not; negation is not a bond | a list of held assumptions is not a refusal; the operator for "no longer applies" is unary |
| **13 Minimum Viable Set** | the set is closed, arrangements are not; it reports a shape, not a name | no figure line names the assumption that will fail or the instrument that will bind the direction |
| **Operators table** | negation refuses a claim; subtraction only removes an operand | "no longer applies" is negation, so a vocabulary without it can only accumulate |
| **Symbols table** | R is the aim, not only the error signal; the ground is the anchor | the residual drives the loop; confidence is not an anchor |

---

## 3. Findings

### F1 - The question is a union, and the first split is bound term versus unbound preference (decisive for D1)

Fig 5 :58:

> **"The candidates are ENUMERABLE rather than intuited: every term currently bound and generating a prediction is a candidate for being the wrong one."**

Fig 5 :59 (truncated at the em dash in the source line):

> **"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"**

Fig 5 :61 and :62-63:

> **"BUT THE TERM MOST WORTH REFUSING MAY NOT BE IN THE LIBRARY AT ALL."**
> **"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no"**
> **"residual, so nothing here can see it. Every check above runs on the MECHANISM and none runs on the DIRECTION OF THE QUESTION"**

A system can enumerate its bound, predicting terms and rank them by persistent flat residual. That is a genuine, mechanisable form of reasoning about a proper subset of its own assumptions. But the assumption that most determines what the system sees, the shape it is searching for, is held as a preference and not as a term. It accrues no residual, so no internal check can see it. The pipeline's own amendment calls this a LIMIT rather than a step: *"a frame cannot certify its own completeness"* (Fig 5 :67, truncated).

**Verdict D1: partial yes / structural no. `triangulated`** across Fig 5 :58-68, Fig 1 :27 and Formula "Direction" (different objects: which bound term is wrong, self-scoring disqualification, and the unbound direction). Refuter: demonstrate a system that ranks a term it does not hold, accrues residual for a preference, and refuses it by its own pipeline without importing any external term. That breaks Fig 5 :62.

### F2 - no-longer-applies is negation, not subtraction or re-fitting

Fig 5 :50-56 names the fifth kind: the gap whose content is that a held regularity is false owes *"the term it owes refuses another rather than explaining a gap"*, and Operators table :58 says *"a refutation is a negation, which is why a vocabulary without it can only accumulate."* Fig 12 :139-140: *"Without a unary operator a system can write what a situation contains, what follows what, and how far along it is - and it cannot write that any of those is false."*

This matters for the question's second half. A system that can only re-fit a mis-attached term (Fig 5 :13 *"mis-attached: refit what you have, do not invent"*) can update a parameter, but it cannot record that an assumption lost its standing. Fig 6 :42: *"A refutation adds a term that refuses; it removes nothing, and the reach falls because"* something was added. The record keeps the refused term so it cannot cycle back without new growth (Fig 6 :45-46).

**Verdict (within D1): `triangulated`** across Fig 5, Operators, Fig 12 and Fig 6. Refuter: a system that changes its behaviour when an assumption fails but whose record contains no refusal term and cannot distinguish never-held from held-and-given-up (Fig 6 :46). Such a system has drifted, not refused.

### F3 - Detection is only possible against a ground that does not update

Fig 2 :29:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

Fig 2 :33-35:

> **"The anchor must not update."**
> **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."**
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

So "detect when an assumption no longer applies" is a relation between a prediction and an anchor, not a property of the system's own state. If the assumed reference is the system's own confidence, its own frequency of success, or a peer that only reads the same record, the reference updates with the system and the failure is invisible precisely because everything remains self-consistent. Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*

**Verdict D2: yes, conditional on a non-updating anchor. `triangulated`** across Fig 2 :29/:33-35/:45, Fig 1 :27 and Fig 10 :24. Refuter: a system that reliably detects a false held assumption using only a score it computes from its own outputs, with no independent reading and no change of contact. That breaks Fig 1 :27 and would collapse Fig 2's panel 3 into panel 1.

### F4 - Whole-set self-certification is categorically refused (decisive for D3)

Fig 8 :34 (truncated before "Tarski"):

> **"A frame cannot reach its own metaframe. Godel's second theorem: a consistent system cannot prove its own consistency."**

Fig 8 :37:

> **"A frame cannot certify its own limit. Chaitin: beyond a fixed constant, no system proves that any object exceeds its own complexity."**

Fig 9 :16, :18, :19, :20 and :44:

> **"the edge can only be named from beyond it"**
> **"φ* out of reach: nothing inside can prove that"**
> **"the witness is always imported"**
> Fig 9 :20 reports that *"it is not in here"* cannot be proved from inside.
> **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**

These are proved theorems, not stylistic limits (Fig 8 :56-57). They govern D3, not D1: enumerating which bound term is wrong is possible; certifying that the enumeration is complete, or that the system's own set of assumptions is consistent, is not available from inside. Fig 8 :40-43 adds the scope condition: these prove the metaframe is underivable, they do not prove any particular atom is far away, and underivable-in-principle differs from unreachable-at-this-budget. So the verdict "no" is about self-certification, not about whether a particular system will in fact fail.

**Verdict D3: no, categorically, for whole-set self-certification. `triangulated`** across Fig 8 :34/:37/:39-43 and Fig 9 :16-20/:44 (formal limit plus witness location, low overlap). Refuter: a consistent system that proves its own consistency by its own rules (breaks Fig 8 :34), or a frame that proves from inside that a specific term is absent from its own closure (breaks Fig 9 :20).

### F5 - The outside seat is the office that can carry the failing residual (D4)

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :54: *"The atom cannot be derived from inside A. But the union is searchable from contact, so underivable is not unknowable."* Fig 9 :19: *"the witness is always imported."*

Fig 10 :42-43:

> **"A verifier that can reconstruct the claim cannot verify it."**
> **"Soundness requires the checker to be unable to produce what it is checking. Never a player, never a proxy, never the author of a verdict or an atom."**

Fig 10 :50-52 adds the failure mode: *"Looking inside the frame it grades is how the seat stops being outside. A seat that reads that interior acquires the frame's model, and thereafter grades reports against its own picture rather than against the ground. Bring a characterised residual, never the source."*

Therefore a system cannot use a copy of itself as its own verifier. Two copies of one frame are one opinion stated twice (Fig 8 :48-49: *"Two frames that overlap almost completely are one frame wearing two names."*). Independence is the parameter: *"Buy independence in proportion to the cost of being wrong"* (Fig 2 :42). The correction comes from a low-overlap frame or an instrument, imported with a source gate and shadow test (Fig 8 :9-14), and the outside reader must see the residual in effect terms, not the framework's interior.

**Verdict D4: yes, via a differing closure; the specific frame for a given assumption is `gap`. `triangulated`** for the structure across Fig 6 :23, Fig 8 :45/:54, Fig 9 :19 and Fig 10 :42/:52. Refuter: a verifier that is demonstrably unable to produce the claim, shares no evidence pool with its author, and still verifies it soundly without any external ground. That would break the verifier-non-access rule.

### F6 - A global "assumption health" number destroys the signal

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

Most practical "self-monitoring" returns one calibration score or one loss value. Under the figure that is a frame-internal quantity (Fig 1 :27) and it is pooled across slots. A single assumption can be failing while the mean looks healthy, which is the legal state named at Fig 1 :13: *"a global R near zero with one live slot residual is a legal state."* Detection must therefore be per assumption slot, and the system must be able to say which slot is live. Fig 13 :134-135: *"It can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again."* and *"It cannot say which primitive is missing, because naming it would mean already holding it."* The slot can be named; the missing primitive cannot.

**Verdict: `single-source` on the figure side for the per-slot requirement (Fig 1 only), corroborated by world sources (calibration, metacognition) but not by a second figure line about confidence. Kept separate, not upgraded.**

### F7 - Internal runtime monitoring is permitted, with a condition

This is the hardest apparent conflict in the audit and is kept visible. In software engineering, a monitor synthesised from a formal specification is *"integrated into the system"* and yet detects violations and can send *"feedback to the system to possibly correct false behaviour"* (Wikipedia, *Runtime verification*, 2026). Read naively, that is a system reasoning about its own assumptions and detecting failure from inside.

Re-census dissolves it. The monitor's specification is a bound ordinary term that did not come from the system's own closure. It is an import with provenance, not a frame inspecting its own interior. Fig 10 :42 forbids a verifier that can reconstruct the claim from the claim's own materials; it does not forbid a monitor that holds a specification the system cannot generate. Where the specification is authored by the system being monitored, the arrangement becomes Fig 2 panel 1: the reference updates with the author and the drift is coherent. The engineering source predicts the same condition in its own vocabulary: *"Reasoning about intervention effects"* is listed as an open research challenge, and coverage is reduced relative to exhaustive verification.

**Verdict: not a conflict after re-census. Strain S3 recorded in §6 and carried to `11_audit.md`.**

### F8 - Agreement with a satisfied reader is not detection

Fig 7 :13: *"agreement compounds, evidence does not"*; Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."*

A campaign to collect endorsements that a system can reason about its assumptions would produce a convention, not a check. This is why `02_outreach_email.md` and `08_expert_verification_packet.md` ask for a failure condition before any theory is shown, and why `03_public_contact_points.csv` contains venues, not a list of likely believers. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

**Verdict: `triangulated`** across Fig 7 :13/:35, Fig 2 :40 and Fig 9 :60. Refuter: a check in which two readers drawn from the same literature and the same pre-print independently return the same verdict, and that verdict is counted as two witnesses.

### F9 - The missing instrument is a `gap`, not a silence

Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Fig 5 :65: *"The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."* Fig 6 :34: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."*

The figures give the discipline (bind the sought-for shape, commit a prediction before the run) but no figure line specifies the mechanism by which a machine turns its own unbound direction into an ordinary term, nor an instrument that would measure when such a term starts accruing residual. That is D5 in the census: no nameable anchor in this folder, therefore not yet a domain. It is an `unreached` gap of the instrument kind, not `unreachable` in principle: Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* and Fig 8 :40-43 require the distinction to be kept.

**Verdict: `gap`. Unreachable is a verdict here, not a silence.** Refuter: a worked mechanism in which a named system binds its own search preference as a term, shows the term's residual over time, and refuses it by its own pipeline, with the ground named. That would close D5 and move it to a domain.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the seat map: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim in this folder is withdrawn if any of the following is demonstrated:

1. A frame derives a term outside `closure(Γ)` by composition alone (breaks Fig 6 :21 *"MINT composes inside the closure and can never add an atom"*).
2. A system consistent enough for elementary arithmetic proves its own consistency by its own rules (breaks Fig 8 :34).
3. A system's own confidence score tracks its correctness across novel tasks with no external ground reading, no second frame and no change of contact (breaks Fig 1 :27 and Fig 11 :40 *"An improvement that does not change contact changes nothing, however much it improves"*).
4. A frame makes its unbound search preference an ordinary term, accrues residual for it, and refuses it internally with no imported term and no outside seat, where the refusal is subsequently confirmed against a ground (breaks Fig 5 :62-65).
5. A verifier that can reconstruct the claim from the claimant's own record is still sound (breaks Fig 10 :42).
6. Two readers sharing a single evidence pool produce a verdict that is subsequently confirmed by an independent anchor and is counted as two witnesses (breaks Fig 2 :40).

If any fires, the affected domain verdict is retracted in the retraction log below with the date and the source. No new figure line will be sought to rescue it.

---

## 5. Recommendation

1. Ship the union, not a single yes/no. Answer D1, D2, D3 and D4 separately and never average them into a percentage of "self-awareness" (Fig 9 :60).
2. Lead with the refuter and the per-slot residual, not with a claim that a system understands itself. Fig 10 :52: *"Bring a characterised residual, never the source."*
3. Make the sought-for shape an ordinary term in the outreach itself: write down what would count as a failure before showing any framework (Fig 5 :65). This is what `08_expert_verification_packet.md` does.
4. Price the outside frame. Independence decides whether the check means anything (Fig 2 :31-32, :42). Use the public venues in `03_public_contact_points.csv`; do not select readers for agreement.
5. Keep the `gap` visible. No figure line names the instrument that binds an unbound preference (F9). Reporting that honestly is the framework's own rule: *"Unreachable is a verdict here, not a silence"* (Fig 13 :134).
6. Do not call the result `grounded`. The only settlement available here is internal consistency against the figure text; the world sources corroborate a shape and were read for that purpose only.

---

## 6. Canonical usage check (figures README, WATSON 60, seat map)

Two local primaries were read after the first five sections and govern how figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them."* It also says a reading that makes one figure contradict another has misidentified its domain, and the framework returns *"a shape, not a name"*, stopping at the limit of what instruments distinguish and recording the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md`, step 7: SEARCHED / INWARD / OUTWARD are three questions, not one, and INWARD and OUTWARD are opposed. This audit asked SEARCHED first (are the bound terms already searchable? yes, F1), then OUTWARD (which frame could hold the witness? F5), and declared INWARD's missing instrument as `gap` (F9). It did not import an atom against a budget limit.

### Retraction and confirmation log

| earlier reading in this session | status after canonical check |
|---|---|
| First pass: "a system cannot reason about its own assumptions at all" | **Retracted.** Fig 5 :58-60 explicitly makes bound, predicting terms enumerable and rankable. The correct form is partial yes for bound terms, structural no for the unbound direction. |
| First pass: self-knowledge is one domain | **Retracted.** Re-census split it into D1 representation, D2 ground detection, D3 certification and D4 verification, with D5 as a `gap`. Confirmed by Fig 9 :54-58 (union) and Fig 10 :68 (different actors, currency and ground at each scale). |
| Apparent conflict: internal runtime monitor (engineering world source) versus Fig 10 :42 | **Dissolved by re-census (S3).** An externally specified monitor holds a bound term, not the claim's interior. Kept visible as a strain, not erased. |
| Apparent conflict: "inference from self-observation" (SEP Self-Knowledge) versus Fig 5 :62 | **Dissolved by re-census (S2).** Inner-sense accounts govern object-level access to current states; Fig 5 governs the unbound direction of a search. Different objects. |
| F6 marked `single-source` rather than upgraded | **Confirmed.** No second figure line about self-confidence exists; world corroboration is not a second figure. |
| F9 called `gap` | **Canonically confirmed.** *"shape, not a name"* and Fig 13 :134-135. Reported as `unreached`, not silence, with Fig 8 :39 governing the distinction. |
| Verdict on D3 called "no, categorically" | **Narrowed and kept.** It is no for self-certification, not no for any particular detection; Fig 8 :40-43 forbids extending it to "this atom is far away." |
| Governance of the campaign (F8) | **Canonically confirmed.** Fig 2 :40 disqualifies shared-pool agreement; no receptiveness ranking appears in `03`. |

### Strains carried forward

- **S1 (live, narrowed):** D1's "which term is wrong" and D3's "can the set certify itself" are different questions; the pipeline can do the first and not the second. Named, not smoothed.
- **S2 (dissolved, visible):** self-observation versus metaframe limit.
- **S3 (dissolved, conditional):** external-specification monitor versus verifier non-access. The condition is that the spec is not authored by the monitored frame.
- **S4 (live type question):** what is the ground for a formal assumption? Fig 2 :29 defines the anchor functionally (whatever settles the question and does not update). A proof checker in a differing frame can play that role, but no figure line states the type. Left open with a falsifier in `08` C3.

### Updated verdict

The shape survives and its four verdicts stay separate. A system can reason about the bound subset of its assumptions and can detect their failure only against a ground that does not update on the system's own report. It cannot see the unbound preference that sets the direction of its own question, cannot certify the whole set from inside, and cannot manufacture the missing witness by more internal search. The instrument that would bind the direction is a declared `gap`. After re-census, no figure line was found to strain, and two dissolved strains and two live questions are recorded above. Mode `specified` on the domain verdicts, `general` on the structural shape, not `grounded`.
