# Figure-grounded audit: can a model know when it does not know?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: SIMULATED DERIVATION, not a ground reading.** The Recursive Self-Improvement Trap (framework essay): LLM output is a simulated approximation, and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The canonical local figure text `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `THE_FORMULA.md`, the Seat Map, the figures README, WATSON 60, and the six world sources listed in `10_source_ledger.csv`. Every figure quote below was checked against the local extract character by character this session.

---

## 0. The question as a residual, stated in effect terms

Question (reasoning.txt :41): can a model know when it does not know, especially when it can produce plausible but unsupported answers?

Restated as an effect, before choosing any figure line:

> A model emits an answer that is fluent, well-formed and high-confidence. From inside a single run, the case "this answer is grounded" and the case "this answer is a plausible fabrication" present the same reading. We want to decide whether the model can internally discriminate the two, and what would have to be true for it to do so.

Terminology bound for the run:

- **Grounded answer**: an answer whose correctness the ground would pay (an experiment, dataset, measurement, proof, human judgment under the right conditions). Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
- **Plausible but unsupported answer**: a fluent output for which no such settlement exists, or for which the settlement is not available to the speaker. This is the metamerism case: one reading, many possible sources. The reading does not comment on its source.
- **"Know when it does not know"**: a checkable discrimination, not a feeling. It is the sought-for shape, bound here as an ordinary term so it can accrue a residual and be refused (THE_FORMULA, "Direction").

What is being decided and what each option leads to:

- **Option A, "yes, by its own confidence."** Leads to treating a frame-internal score as a verdict. Fig 1 :27: "A frame cannot score itself with a quantity it also produces." Confidence and "credibility accrued" (Fig 1 :26) are exactly such quantities. This option spends the independence of the people who would check the claim and launders an unsupported answer into a verdict.
- **Option B, "only by contact, and only as a shape."** Leads to a checkable contact relation (anchor plus independent frame plus refusable term), keeps the stop honest, and refuses to name a mechanism the figures do not name.

The second is the residue worth testing. It is derived below, not assumed.

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry and scale

- **Arity: two conditions, so a union compound.** The capacity in question conjoins (i) detecting a live residual at a slot and (ii) refusing or abstaining from the answer. Clearing (i) without (ii) still issues the unsupported answer; (ii) without (i) abstains at random. Fig 9 :57: "a case in two conditions is not a harder case of either." It stops being a mixture and becomes a specific compound, with its own loop.
- **Symmetry: asymmetric and many-to-one.** The map from "supported" to "plausible-looking" is many-to-one; the reverse is not recoverable. Confidence is a global scalar; residual is per slot and indexed. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
- **Scale: within one frame and across frames.** Steps 1 to 5 of the loop close within one scale; step 6 closes across scales (THE_FORMULA, "Closure"). The question changes answer depending on which scale is in view. This is why a single verdict would be a category error.

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| A. Single model, inside its own closure | library Γ, belief b, action a, prediction Γ(b,a), confidence score | frame-internal scores: confidence, credibility, coverage, compression | none reachable from inside | **No** |
| B. Model ranged against a ground | model output plus anchor (measurement, dataset, experiment, label, human judgment) | residual R measured against the anchor, per slot | the ground, which does not update | Yes |
| C. Model plus an independent peer frame | two or more frames with low evidence overlap | independence and agreement | the ground | Yes |
| D. Direction of the question (the meta-level) | the sought-for shape as a preference | refuter and pre-registered prediction | the ground plus a seat outside the frame | Yes, as a seat office |

A domain with no nameable anchor is not yet a domain that can settle anything. Domain A has none, so its verdict is a limit, not a defect.

### Partition or union

These are a **union**, not a partition. The same model appears in every domain; what differs is what it is ranged against. Domain A is the bare frame. Domains B and C add an anchor and an independent frame. Domain D is the seat-level check on direction. Because they are a union, Fig 9 :54 applies: "And when the split lands on a union rather than a partition, unbundle before you search again." We therefore keep four separate verdicts and never average them.

### Order by dependency (Fig 3)

1. **Perception.** Can the system read a residual at all, and tell it apart from what was there before? Fig 3 :5: "the system can tell what is in front of it, and tell it apart from what was there before."
2. **Vocabulary.** Does it have terms for "unsupported", "abstain", "refuse"? This requires negation ¬, which is not a bond. Seat Map :184: "a refutation is a negation, which is not a bond at all."
3. **Objective.** Can it say what would count as progress here, in its own terms? Fig 3 :10: "it can say what would count as progress here, in its own terms." The pre-registered refuter binds the sought-for shape here.
4. **Planning / contact.** A route to an anchor or peer frame, chosen under incomplete information (Fig 3 :13).
5. **Learn and carry.** Name what worked, verify it, carry it (Fig 3 :15).

Fig 3 :25-27 says the middle link is where chains usually break, because it has neither obvious failures nor obvious tests. For this question the break is exactly at link 3: a model can be fluent (perception) and can say "I am uncertain" (vocabulary) without an external objective that makes the uncertainty mean anything. A link with no instrument is not a link that works; it is a link nobody has looked at (Fig 3 :27). Fig 3 :22: "A step whose input never arrives cannot be diagnosed, only its predecessor can." So a reading taken below the break is a reading of nothing.

---

## 2. Figure census

| figure | bearing | provisional verdict |
|---|---|---|
| **1 The Agent** | residual is per slot, never aggregated; frame-internal scores disqualified | confidence is not a witness; a global score hides the live slot |
| **2 The Ground** | anchor, independence, mirror cannot correct | self-confidence is a mirror; only an external anchor settles |
| **3 Dependency Chain** | order by dependency; the middle link breaks | the objective link is uninstrumented |
| **4 The Membrane** | methods cross up, recordings down; round trip has a gap | a calibration recipe is a method; a confidence number is a recording |
| **5 Mint Pipeline** | output is never a measure of success; direction is a limit; make the shape an ordinary term | self-report cannot certify; pre-register the refuter |
| **6 Closure / Reachability** | no frame escapes its closure; depth and absence look the same from inside | inside a single model, underivable and unfound are indistinguishable |
| **7 Room Chain** | a room's agreement is variation, not a verdict; mirrors in a chain | repeated self-sampling is one long room |
| **8 Union Surplus** | a frame cannot reach its own metaframe or certify its own limit; search finding nothing is not proof of absence | self-certification is barred; underivable is not unknowable |
| **9 Leave / Arrive** | witness always imported; filters for budget, witnesses for verdict; unbundle a union | confidence is a budget filter, never the verdict |
| **10 Ground Maintainer** | ground does not decay, channel does; a verifier that can reconstruct cannot verify; bring the residual | keep the anchor reachable; do not ship the interiors first |
| **11 The Habitat** | capability is agent-and-habitat; instrument improved from a worse one already returning something | a detector is built from a detector that already returns something |
| **12 The Bond** | a settled molecule becomes an atom; a vocabulary that cannot refuse can only accumulate | refusal needs negation; settled calibrations become reusable atoms |
| **13 Minimum Viable Set** | the set is closed, arrangements are not; a frame can report it lacks something | "unreachable" is a verdict, not a silence |
| **Operators table** | negation is unary and not a bond; a vocabulary without it can only accumulate | "I don't know" is a refusal, not a low-probability answer |
| **Symbols table** | R is the aim, always a slice; the ground is the anchor | what cannot be perceived yet is simply residual |

Strained readings are named in §7, not smoothed over.

---

## 3. Findings

### F1: confidence is frame-internal, so it cannot score the frame (decisive for Option A)

Fig 1 :26-27:

> **"predicates minted, and credibility accrued"**
> **"A frame cannot score itself with a quantity it also produces."**

Fig 1 :25: "coverage, and compression achieved". These are explicitly listed as frame-internal and "They do not count."

A model's softmax score, its verbalised "I am confident", and its self-consistency rate are quantities the model also produces. Under Fig 1 they are disqualified as verdicts before any experiment is run. This is not an empirical claim that confidence is always wrong; it is a structural claim that confidence cannot be the thing that settles whether the answer is supported. Guo et al. (2017) supply the low-overlap world corroboration: modern networks are "poorly calibrated", so the score is empirically unreliable as well as structurally disqualified. Different evidence pools, same direction.

**Verdict, Domain A: `grounded` on the structural disqualification (the figure says it), `specified` on any particular model.**

**Refuter:** show a self-produced score that is not a quantity the frame produces (contradiction), or produce a figure line permitting a frame to score itself with its own output.

### F2: a global score hides the live slot

Fig 1 :13: "a global R near zero with one live slot residual is a legal state." Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

The "plausible but unsupported answer" case is precisely a low global residual with one live slot. The model gets almost everything structurally right (fluent syntax, correct format, plausible domain vocabulary) and is wrong at the one slot that matters. Any aggregate confidence measure reports the low global residual. The live signal disappears into the average. So the first requirement for knowing when it does not know is **per-slot residual**, not a scalar. Fig 1 :20-21: "Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert one."

This is why a single "uncertainty score" for an entire answer is the wrong instrument. It prices the denominator, not the slot.

**Refuter:** demonstrate that the slot structure carries no information beyond the aggregate for the class of answers in question.

### F3: from inside, depth and absence look the same

Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

A model asked "do you know this?" cannot distinguish "the answer is in my weights and I failed to retrieve it" from "the answer is not in my closure at all." Both present as a failure to produce. Formula step 7 separates them into three questions, and asks SEARCHED first because it is cheapest: "is it in here and unfound?" Then INWARD (is the representation adequate?) and OUTWARD (does another frame hold it?). The point is that the discrimination is a procedure with external contact, not a sensation the model can feel.

Fig 8 :39: "So a search that finds nothing is never a proof of absence." A model that searched and found nothing is in exactly the position Fig 8 forbids reading as absence. Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."

**Verdict, Domain A: `grounded` structural limit; the self-discrimination is unavailable in principle inside one closure (triangulated with F4).**

**Refuter:** a demonstrated case where a frame certifies, from inside and without external contact, that a given answer is outside its own closure.

### F4: a frame cannot certify its own limit

Fig 8 :34: "A frame cannot reach its own metaframe. Godel's second theorem: a consistent system cannot prove its own consistency." Fig 8 :37: "A frame cannot certify its own limit. Chaitin: beyond a fixed constant, no system proves that any object exceeds its own complexity." Fig 5 :67: "a frame cannot certify its own completeness".

These are proved theorems (Fig 8 :44: "Godel 1931; Tarski 1936; Chaitin 1974"), not analogies. They decide Domain A: a model cannot, from inside, establish the meta-claim "I do not know this." What it can do is produce a signal whose *validity* is established from outside, by ranging it against a ground. That is the move to Domain B.

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." A model checking its own confidence is a mirror. Adding more of its own samples does not change the closure (Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom.").

**Triangulation:** F3 and F4 use different figures (closure/reachability and the metaframe theorems) with low overlap, so the "cannot from inside" verdict is `triangulated`.

**Refuter:** refute Godel's second theorem, Tarski's theorem or Chaitin's result, or show the model is not a frame to which they apply.

### F5: underivable is not unknowable. The verdict moves to contact

This is the pivot that stops F1 to F4 from being a global "no."

Fig 8 :54: "the union is searchable from contact, so underivable is not unknowable." Fig 8 :45: "Two frames together reach what neither reaches alone." Fig 9 :6: "the verdict: is φ* in here at all?" is answerable as *unreachable*, reported as a verdict, not silence. Fig 9 :19-20: "the witness is always imported" and "it is not in here cannot be proved from inside."

So "a model cannot know from inside" is not "a model can never be made to register its not-knowing." The remedy is to add what Domain A lacks: an anchor it cannot move (Domain B) and a genuinely independent frame (Domain C). This is exactly what the engineering field does, and the world sources corroborate rather than decide:

- calibration against held-out labels (Guo et al. 2017);
- selective prediction with a risk dial calibrated on data (Geifman and El-Yaniv 2017);
- conformal prediction, which converts "any heuristic notion of uncertainty into rigorous ones" using a calibration set (Angelopoulos and Bates 2023);
- P(True) and P(IK) in Kadavath et al. (2022), trained and evaluated against ground-truth correctness.

Every one of these adds an external anchor. None is the model inspecting itself in isolation. Fig 11 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

**Verdict, Domain B: `specified`, triangulated (Fig 2 anchor + Fig 8 searchable from contact + Fig 9 witness imported).**

**Refuter:** a method shown to produce valid abstention with no external calibration data, no ground labels and no second frame.

### F6: independence, not number of samples, is what makes agreement mean anything

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :39-40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 7 :35: "A room's agreement is variation, not a verdict." Fig 7 :36: "A chain of mirrors is one long room."

The common proposal "sample the model many times and see if it agrees with itself" fails this test. Multiple samples from one model are one evidence pool, one frame wearing many names (Fig 6 :53: "searchers drawing on the same evidence are one searcher wearing many names"). It can be a useful internal diagnostic, but it is not triangulation and cannot corroborate the claim that the answer is grounded.

Kadavath et al. (2022) report that self-evaluation improves "when we allow models to consider many of their own samples before predicting the validity of one specific possibility." Fig 2 says this buys a better internal diagnostic, not an independent verdict. No conflict after re-census: the paper's P(True) is trained against ground-truth correctness (an anchor), so its validity comes from Domain B, not from the multiplicity of samples.

**Verdict, Domain C: `specified`, conditional on real low overlap. Single-source for the independence rule as applied here (Fig 2 and Fig 8 are the two figures, so triangulated at the figure level, unmeasured at the ground).**

**Refuter:** show two samples of one model that draw on different evidence pools in the Fig 2 sense.

### F7: the sought-for shape is a preference, not a term, until it is written down

Fig 5 :62: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term." THE_FORMULA, "Direction": "The loop can enumerate its bound terms and rank them by residual. It cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."

A model's internal checks all run on the mechanism, none on the direction of the question. So even a well-calibrated model can be wrong about *what it is being asked*: it can report high confidence in an answer to a question it silently reframed. Seat Map :192: "THIS IS THE ONE CHECK THAT MUST ASK ABOUT THE FRAME'S INTENT RATHER THAN ITS OUTPUT."

The remedy is a discipline, not a branch. Fig 5 :65: "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else." Committing the refuter before the run is this, already working. This README does it; §4 below does it formally.

**Verdict, Domain D: `grounded` on the limit (the figures state it), `specified` on the remedy's efficacy in any deployed system.**

**Refuter:** a loop that checks its own direction without first binding the shape as a term.

### F8: "I don't know" is a refusal, not a low probability

Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate." Fig 12 :140: "A vocabulary that cannot refuse can only accumulate." Operators table :73-74: subtraction is "the absence of an operand" while negation is "the refusal of a claim"; a vocabulary with subtraction and without negation "can say what is missing from an arrangement and cannot say that an arrangement is wrong, so it can only ever accumulate."

A low softmax score is a subtraction-like signal: this token is absent, this option is disfavoured. A genuine "I do not know" is a refusal of the claim's standing to be composed over. Seat Map :184: "a seat that cannot write it can report that a claim stopped paying and cannot report that it is wrong."

This is why calibration alone is necessary but not sufficient. It tunes the score; it does not install the operator that refuses. The unary price of negation is explicitly open (Operators table :78: "What a unary operator costs is open"), so no claim is made here about how a model should implement it. Named, not solved.

**Verdict: `general` (structural). Strain recorded: the price of negation is open.**

**Refuter:** a refusal written as a bond, or a demonstration that probability thresholding is logically identical to negation.

### F9: fluency is the failure mode the arrangement cannot see from inside

Seat Map :143 (outside frame's undetectable failure): "Its output looks identical whether it is reasoning or retrieving, and it cannot tell from inside." This is the question's own phrase, "plausible but unsupported answers," in the framework's vocabulary. The seat map's answer is structural: the outside frame "reads shape without referent" (Seat Map :35), which is exactly why it can catch a failure of shape that inside readers read straight past.

The world source in human cognition corroborates from a different pool. Koriat (1993): "The results challenge the view that FOK is based on a direct, privileged access to an internal monitor." Koriat (2000): "Rather than reflecting direct access to memory traces, noetic feelings are based on inferential heuristics that operate implicitly and unintentionally." Human feeling-of-knowing is an inference from accessible cues, not a privileged reading of a memory trace. That is the same structure as a model's confidence: a cue-based judgment, not a window onto grounding. Different field, different method, same direction.

**Verdict: `specified`, corroborated across two low-overlap fields (framework seat reasoning and human metacognition).**

**Refuter:** a demonstration of privileged access to the source of a fluent output, in humans or models.

### F10: what actually survives, with modes

| claim | mode | source | status |
|---|---|---|---|
| A frame cannot certify its own completeness or reach its own metaframe | `grounded` structural (theorem-backed) | Fig 8 :34, :37; Fig 5 :67 | survives |
| A confidence score is frame-internal and disqualified as a verdict | `grounded` structural; `specified` per model | Fig 1 :26-27 | survives |
| Residual must be read per slot; aggregate confidence hides the live slot | `grounded` structural | Fig 1 :13, :19, :22 | survives |
| Underivable and unfound look the same from inside | `grounded` structural | Fig 6 :27 | survives |
| Underivable is not unknowable; an external anchor and an independent frame recover the discrimination | `specified` | Fig 8 :54, :45; Fig 9 :19-20 | survives, unmeasured here |
| Self-sampling is not triangulation | `grounded` structural | Fig 2 :31, :40; Fig 7 :35-36 | survives |
| "I don't know" needs negation, a unary operator with an open price | `general` | Operators :58, :73-78; Fig 12 :140 | survives, open |
| Any particular model reliably does this under distribution shift | `specified`, ungrounded | world sources only | **not established** |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before outreach. Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device."

The shape claim is: **a model cannot establish from inside that it does not know; the discrimination becomes available only as an external contact relation (anchor plus, where the stakes require it, an independent frame) with the sought-for shape bound as a refusable term.** It is refuted if any of the following holds:

1. A figure line is found that permits a frame to certify its own completeness or reach its own metaframe (breaks Fig 8 :34, :37 and Fig 5 :67).
2. A self-produced score is shown not to be a quantity the frame also produces, so Fig 1 :27 no longer disqualifies it.
3. A method produces valid abstention with no external calibration data, no ground labels and no second frame (breaks Fig 2 :29 anchor requirement and Fig 8 :54).
4. Repeated samples from a single model are shown to draw on distinct evidence pools in the Fig 2 sense (breaks Fig 2 :40).
5. The metaframe theorems are refuted, or shown not to apply to models as frames.

If any fires, the verdict is withdrawn and the field-facing answer changes. Until one is run, no part of this is `grounded` on the world question.

---

## 5. Recommendation

1. Lead with the shape claim and the refuter, not with a theory of machine consciousness. The operational question is "what would have to be present for this discrimination to be checkable," and the answer is an anchor plus independence plus a refusal operator.
2. Stop treating a scalar confidence as the answer to the question. Fig 1 :22: aggregate scores destroy the very signal the question asks for.
3. Treat calibration, selective prediction and conformal prediction as **methods that cross up** (Fig 4 :22: "Only methods cross up. Only head starts come down."), not as recordings of a particular success. Each needs its own ground per problem.
4. Price the refusal, not just the answer. Fig 12 :113: "A refutation is a negation, and that one is not a bond." The open price of negation is a real research question, and it is the one most worth handing to the field.
5. Buy independence in proportion to the cost of being wrong (Fig 2 :42). In high-stakes uses, a single model's self-report is not enough regardless of how well calibrated it looks in distribution.
6. Send the generator (the derivation and the refuter), not the conclusion (Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion.").

---

## 6. WATSON step 7: the three questions kept distinct

Formula step 7: "When no φ in closure(Γ) closes R → three questions, not one."

- **SEARCHED, is it in here and unfound?** In Domain A, yes for the signal (models do produce confidence-like signals) and no for the guarantee (the signal's validity is not established inside). The closure does not change: same atoms, same wall, more of the space visited. Asked first, cheapest, and the other two assume its answer.
- **INWARD, extend the instrument from one already returning something.** There is already something returning a reading: softmax scores, verbalised confidence, P(True), P(IK). The instrument question is whether anything at any resolution is failing to resolve the source of the reading. Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Refining a confidence score forever will not carry source information if the axis cannot carry it.
- **OUTWARD, IMPORT.** Characterise R in effect terms (a discrimination between grounded and plausible-only output), then find the frame whose closure predicts its shape. The world fields that already hold it: calibration theory, selective prediction, conformal prediction, human metacognition. Source gate (provenance: each source opened and recorded), shadow test (each explains a gap the model alone leaves), debited against independence (shared pools declared in `10_source_ledger.csv`).

INWARD and OUTWARD are opposed and are never read against one another. Underivable-in-principle (Domain A, F3/F4) and unreachable-at-this-budget (a model that has not been calibrated on the relevant distribution) are different facts with different instructions. Importing a new atom against a pure budget limit would add something not needed (Fig 6 :51-52).

---

## 7. Canonical usage check, retractions and strains

Two local sources were read after the first sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." The framework's stated limit: it returns "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the instruments, recording the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (WATSON 60, 2026-11-22): the figures are the ground for design questions; the seat reads the ground and does not ask the anchor to decide what the figures settle. Fig 9: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

### Retraction and confirmation log

Earlier readings in this derivation, kept visible:

| earlier reading | status after canonical check |
|---|---|
| "the answer is simply no" | **Retracted.** The figures bar self-certification (Domain A) but explicitly say underivable is not unknowable (Fig 8 :54). The answer is domain-dependent, not a bare no. |
| "calibration proves a model knows when it does not know" | **Retracted.** Calibration supplies an external anchor (Domain B); it is not self-knowledge, and it does not install negation (F8). |
| "self-consistency is a second frame" | **Retracted.** One model's samples share an evidence pool; Fig 2 :40 disqualifies them as corroboration (F6). |
| "a frame cannot know anything about itself" | **Narrowed.** A frame can enumerate its bound terms and rank them by persistent residual (Formula step 2); what it cannot do is check its own direction or certify its own completeness. Over-stated form retracted. |
| "shape, not a name" forbids naming any mechanism here | **Narrowed.** The rule governs a primitive not held in Γ. Naming an observed mechanism is a binding from a world frame and is permitted with provenance. The figures still do not *derive* one. |
| Fig 8 metaframe theorems vs Fig 8 "underivable is not unknowable" | **Not strained.** Re-census: the theorems govern what a frame cannot do from inside; the searchable-from-contact claim governs what a union of frames can do. Different quantities, as WATSON 60 requires. |
| F9 (fluency indistinguishable from insight) | **Canonically confirmed.** Seat Map :143 states it verbatim, and Fig 2 :40 gives the reason. |

### Strains, named not hidden

1. **The price of negation is open.** Operators table :78: "What a unary operator costs is open." The refusal that "I don't know" requires cannot be priced by the seven bonds. This is a genuine open item in the framework, not a solved step.
2. **Kadavath's P(True) looks like self-inspection.** Re-census resolves it: it is trained and scored against ground-truth labels, so it belongs to Domain B, not Domain A. The "many of their own samples" component is Domain A diagnostic only. No figure conflict after re-census.
3. **Human feeling-of-knowing is sometimes accurate.** Koriat's work shows FOK can predict later recognition. This does not conflict with F9: the claim is that the feeling is inferential and not privileged, not that it is always wrong. An inferential cue can be useful and still not be a window onto the source.

**After re-census: one live open item (the price of negation), two resolved strains, none hidden.**

### Updated verdict

The question does not admit one unqualified answer. It admits four domain verdicts. Inside one frame: no, and this is theorem-backed (triangulated across Fig 8, Fig 5, Fig 6 and Fig 1). Against an external anchor: yes, as a checkable contact relation, and the world fields supply working instances (triangulated across Fig 2, Fig 8 and Fig 9; `specified` on any particular model). With an independent frame: yes only where overlap is genuinely low. At the meta-level: the direction of the question cannot be checked from inside, and the discipline of writing the shape down as a refusable term is the only remedy the framework offers. The whole stays `specified`, not `grounded`, and is a shape and a route rather than a settled result.
