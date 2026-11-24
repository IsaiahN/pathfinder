# Figure-grounded audit: can a model identify when its sources are misleading?

**Mode of this document: `specified` on the per-domain verdicts, `general` on the structural shape, `gap` on the empirical question.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, opened 2026-11-23) says *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed to tether the veracity of the output to reality."* And: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No experiment on a real model was run here.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line numbered), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, plus the world sources in `10_source_ledger.csv`. All figure quotes were reopened this session.

---

## 0. The question in effect terms

The question asks for a discrimination, not a capability score. A model faces a source S. Two things can be true at once:

1. the model reproduces S's pattern faithfully, so its output Γ(b,a) matches what S says, and
2. S is misleading, so S's claim fails against an independent anchor o' that S did not author.

"Merely reproducing their patterns" is condition 1 with no test of condition 2. "Identifying that a source is misleading" is registering the gap between 1 and 2 as a residual indexed to S, then refusing S's standing to be composed over. The `Symbols table` defines R as *"The gap between prediction and observation. The central quantity: everything the system does is"* driven by it, and the slot s as *"One object, region or entity being tracked. R is measured per slot, never as a single global number."* So the right unit is a per-source residual, not an overall truthfulness rate.

**R by arity, symmetry, scale.**

- **Arity:** a three-place relation, not a one-body property. It needs the source S, the model frame, and a third term that does not move when S or the model moves. Fig 2 :24-27 names that third term *"the anchor"*, *"pinned: it does not update on A or B"*.
- **Symmetry:** misleading-ness is directed and ordered. It is not the symmetric bond + (*"both hold at once"*, Operators table :12) between "source says p" and "model says p". It is a comparison ⋛ against a threshold (*"a threshold relation between two quantities"*, Operators table :48) plus a negation ¬ (*"this does not hold"*, Operators table :54).
- **Scale:** reproduction is intra-closure composition at one scale; detection needs a cross-frame contact at another, with a lossy transform between (Fig 4 :27-31, Fig 10 :68-69).

**Options and what each leads to.**

- **A, reproduction is sufficient, and detection is a by-product of scale:** leads to using fluency, likelihood, citation counts or benchmark accuracy as the reliability signal. Fig 1 :24-27 explicitly disqualifies exactly these: *"predicates minted, and credibility accrued"* are *"frame-internal. A frame cannot score itself with a quantity it also produces."*
- **B, detection needs an independent anchor, a bound refusal term, and a negation operator:** leads to an instrument that withholds ground labels from the model, injects misleading sources, and scores whether the model refuses the source rather than whether it happens to answer correctly.

**The sought-for shape bound as an ordinary term before the run** (Formula, "Direction"; Fig 5 :65-66): *"make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."* The shape bound here is: *a source is identified as misleading when its residual persists and does not trend down against a non-updating anchor, and the model carries an operator that can refuse it.* Because it is bound, it can fail the same test as everything else and the pre-registered refuter in section 4 can point at it.

---

## 1. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union | status |
|---|---|---|---|---|---|
| **D1, model internal (in-closure)** | the model's library Gamma, its atoms and bonds, belief b, weighting w | pattern reproduction, Γ(b,a), composition inside closure(Gamma) | none inside the frame; the only metric enters from outside (Fig 1 :23 *"The ground enters as the only metric."*) | boundary question: what composes across the frame's own vocabulary | legitimate domain, anchor external |
| **D2, model plus its source as one pool** | source S and model frame, drawing on the same corpus | agreement, mutual update, reproduced regularities | none; they share an evidence pool (Fig 2 :18) | collapse panel, not a verdict domain | legitimate domain, no independent anchor |
| **D3, model plus an independent frame or instrument** | model, an anchor (measurement, counter, second source with differing closure), the maintainer seat | residuals that register against the anchor; imported atoms with provenance | the immovable ground (Fig 2 :29-30, :33) | triangulation: two frames range against one ground | legitimate domain, verdict possible in principle |
| **D4, the empirical question about real models** | researchers, benchmarks, deployed systems | measured accuracy on withheld-label misleading-source tests | ground truth labels, not agreement | separate question with its own ground | legitimate domain, **unreached in this run = `gap`** |

**Partition or union?** The question is a **union compound**, not a partition into "reproduces" versus "detects" (Fig 9 :54-55: *"And when the split lands on a union rather than a partition, unbundle before you search again."* / *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*). Pattern representation is a condition that detection uses; it is not the opposite of detection. A model can reproduce a source and flag it, reproduce and not flag, or fail to reproduce and still not flag. One lever, for example more training data, clears the reproduction condition and leaves the intersection standing (Fig 9 :56-57).

**Order by dependency (Fig 3 :20 *"The chain is ordered by dependency, not by importance."*):**

1. **Perception (Fig 3 :4-5):** register the source reading and the anchor reading in different slots. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
2. **Vocabulary (Fig 3 :6-7):** have terms for claim, source, ground, and refusal. Without ¬ the system *"cannot write that any of those is false"* (Fig 12 amendment :139 read with Operators table :58).
3. **Objective (Fig 3 :9-10):** say what counts as progress in its own terms. Here: a residual that persists and does not trend down (Fig 5 :59-60).
4. **Planning (Fig 3 :12-13):** a route by import and triangulation, with residual described before frame chosen (Fig 8 :53).
5. **Learn and carry (Fig 3 :14-15):** name what worked, verify it, carry it.

The chain plausibly breaks at link 2 to 3, the middle link Fig 3 :24-27 says attracts the least attention: *"Why the middle link is where chains usually break."* A link with no instrument is not a link that works (Fig 3 :27). A model can hold a perfect term for what a source says and no bound term for "this source is false," so "misleading" stays a preference and the loop cannot see it (Fig 5 :61-64).

---

## 2. Figure census

| figure | bearing | verdict it governs |
|---|---|---|
| **1 The Agent** | frame-internal quantities disqualified; per-slot residual; ground is the only metric | reproduction scores are not reliability scores (F1) |
| **2 The Ground** | mirror, common cause, anchor must not update, triangulation not negotiation | D2 cannot detect; D3 needs a non-updating anchor (F2, F3) |
| **3 Dependency Chain** | a reading below the break is a reading of nothing; middle link has no instrument | the vocabulary/objective break (census, section 1) |
| **4 The Membrane** | methods cross up, recordings do not; lossy transform and round trip | a detection recipe is a method, a list of known liars is a recording (F9) |
| **5 Mint Pipeline** | fifth kind (refuted), persistent-flat residual ranking, preference not term, negation required | which source to refuse and why the loop cannot see it (F5, F6, F7) |
| **6 Closure / Reachability** | import is the only wall-moving operator; instrument improved from a worse one | detection requires contact with a differing closure (F4) |
| **7 Room Chain** | a room's agreement is variation, not a verdict | more agreeing models do not corroborate (F2) |
| **8 Union Surplus** | independence read twice; residual first, frame second; search proves nothing | low-overlap witnesses and honest `gap` (F4, F10) |
| **9 Leave / Arrive** | unbundle a union; describe before looking; filters are not witnesses | the union reading and the instrument design (census, F10) |
| **10 Ground Maintainer** | ground does not decay, channel does; verifier non-access; bring the residual, not the source | first contact carries residual and refuter (F3, outreach files) |
| **11 The Habitat** | capability is agent-and-habitat; improvement in isolation changes nothing | scale alone cannot add detection (F8) |
| **12 The Bond** | bonds vs unary negation; accumulation without refusal | the operator condition (F7) |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict | the empirical stop (F10) |
| **Operators table** | ¬ refusal, ⋛ comparison, price of arrangement | the type of the detection act (F7) |
| **Symbols table** | R aim and slice, b belief not observation, ground outside Gamma | the residual restatement (section 0) |

Strained readings are named in section 7, not smoothed over.

---

## 3. Findings

### F1 — Reproduction and detection are different quantities, and only one is measurable from inside (decisive for D1 and D2)

Fig 1 :24-27:

> **"Everything else either produces a residual or consumes the library. These do not count:"**
> **"coverage, and compression achieved"**
> **"predicates minted, and credibility accrued"**
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Fig 1 :23: *"The ground enters as the only metric."*

A model that reproduces a source's pattern has high coverage and high compression of that source. Both are named, disqualified quantities. Fluency is the model scoring itself with a quantity it also produces. So "merely reproducing their patterns" cannot be upgraded into "identified the source as misleading" by increasing the same quantity. They are different variables with different anchors. `single-source` on Fig 1, but the structural point is triangulated with Fig 2 :35 and Fig 11 :40.

**Refuter:** show a framework-internal quantity (likelihood, fluency, citation frequency, count of predicates minted) that changes the model's refusal of a source without any contact with a non-updating anchor, and show the figures admit it as a verdict metric.

### F2 — A model and its source share an evidence pool, so their agreement is the pool talking (D2)

Fig 2 :18-21:

> **"one evidence pool"**
> **"they never talk, and still agree"**
> **"so the agreement is the pool talking, not two frames confirming each other"**

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

A source inside the training corpus is not an outside frame. When the model and the source "agree," that is the shared corpus speaking once. This is the common-cause collapse of Fig 2, panel 2. A model cannot borrow certainty from the very source whose reliability is in question. `triangulated` (Fig 2, Fig 7, low overlap between the anchor rule and the room-chain rule).

**Refuter:** exhibit two frames whose agreement about a source's reliability is worth more than one frame's, while drawing on the same corpus and the same ground labels. By Fig 2 :40 that agreement is one witness, not two.

### F3 — The anchor must not update, and it is not in the library (D3)

Fig 2 :29-30:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not the anchor."**

Fig 2 :33: *"The anchor must not update."* Symbols table :104-106: the ground is *"Whatever settles the question and does not change its answer because of what any frame thinks. It is not a frame and has no vantage to update from. Not in the library; the loop cannot modify it."*

So source reliability cannot be anchored by the source's own authority, by a citation count that rises when people repeat the source, or by a fact-checking label that was leaked into the corpus. Glockner, Hou and Gurevych (EMNLP 2022) show what happens when it is: models *"rely on leaked evidence, which makes them unsuitable in real-world scenarios."* The anchor must be something the model cannot move by being confident. `triangulated` (Fig 2, Symbols table, and the independent world source).

**Refuter:** name an anchor for source reliability that is inside the model's library, changes when the model changes its mind, and still settles the question. By Fig 2 :34 that is panel 1 drift, not an anchor.

### F4 — Detection is an import: the wall moves only on contact with a differing closure (D3)

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 6 :14 calls **IMPORT** *"the only operator that moves the wall."* Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*

Fig 8 :53: *"Residual first, frame second."* Fig 8 :27-29: *"describe R, then find the frame that already predicts its shape"* and *"low overlap: B does not draw on A's evidence."*

To detect that S is misleading, the model needs a second frame that does not draw on S's evidence: an instrument, a measurement, a held-out ground label, or a source with a different closure. That import needs a source gate (provenance) and a shadow test (explains the gap) per Fig 6 :11-13. RAGuard (Zeng et al., NeurIPS 2025) is a concrete instance: all tested LLM-powered RAG systems *"perform worse than their zero-shot baselines"* when misleading retrievals are added, because more retrieved documents *"raises the likelihood of including harmful content."* Adding sources is not adding independence. `triangulated` (Fig 6, Fig 8, world source).

**Refuter:** derive "this source is misleading" purely by in-closure composition from the source's own pattern, with no imported atom and no second frame. Fig 8 :32 makes that impossible by definition: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*

### F5 — The persistent, non-trending residual ranks which source to refuse (D3)

Fig 5 :58:

> **"The candidates are ENUMERABLE rather than intuited: every term currently bound and generating a prediction is a candidate for being the wrong one."**

Fig 5 :59-60:

> **"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign."**

This is the mechanism the question needs. A source that keeps generating predictions whose residuals stay positive and flat, while the model keeps reproducing it, is the enumerable candidate to refuse. This is a `specified` mechanism: the figures license the ranking rule, not the claim that a given transformer implements it. `single-source` on the figure amendment (Fig 5), corroborated in shape by the internal-state result of Azaria and Mitchell (Findings EMNLP 2023), whose trained classifier reaches *"71% to 83% accuracy"* while direct zero-shot prompting *"completely failed with accuracy levels not going beyond 52%."*

**Refuter:** show a source whose residual persists and does not trend down against a non-updating anchor, and a model that ranks it last as a refusal candidate while ranking fluent-but-faithful sources first, across held-out topics. That breaks the ranking rule.

### F6 — The sought-for "misleading source" term is usually a preference, so the loop cannot see it (D1, D3)

Fig 5 :61: *"BUT THE TERM MOST WORTH REFUSING MAY NOT BE IN THE LIBRARY AT ALL."* Fig 5 :62-63:

> **"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it."**

Fig 5 :63-64: *"Every check above runs on the MECHANISM and none runs on the DIRECTION OF THE QUESTION."*

This is the sharpest figure-level answer to the question as posed. A model can run every internal check on its mechanism, reproduce its sources perfectly, and still not have "this source is misleading" as a term. The thing it is looking for is a direction, not a bound term. The remedy is a discipline (Fig 5 :65-66, quoted in section 0): write down what the answer would look like, bind it, let it accrue a residual. This is why the pre-registered refuter exists and why the outreach packet leads with it. `triangulated` (Fig 5 amendment, Formula "Direction").

**Refuter:** show a model with no bound term for source reliability that nevertheless registers a per-source residual and refuses the source, with the refusal scored against a non-updating anchor and with no prompt supplying the concept. That breaks the preference-not-a-term limit.

### F7 — Refusal requires a negation operator, which reproduction vocabularies need not contain (D1, D3)

Fig 5 :56: *"Requires an operator for negation, which the seven bonds do not contain."* Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*; :54 defines ¬ as *"this does not hold"*. Fig 12 amendment :140: *"A vocabulary that cannot refuse can only accumulate."*

Fig 6 :42-43 adds the asymmetry that makes refusal cheap and safe: *"What is recorded only grows. What is reachable is derived, and it can fall."* and *"A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted."* So detecting a misleading source does not delete it from the model; it removes the source's standing to be composed over, by adding a refusal. Note the open item: the price of a unary operator is unresolved (Operators table :77-78 *"What a unary operator costs is open"*). That is an honest open price, not a defect in this derivation. `triangulated` (Fig 5, Fig 12, Operators table, Fig 6).

**Refuter:** show an accumulation-only vocabulary (no ¬, no equivalent refusal term) carrying a correction that removes a source's composability while leaving the record intact. That breaks the negation condition.

### F8 — Capability is model-and-habitat, so scale alone cannot add detection (D1, D4)

Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

More parameters, more clean text, more RLHF are agent-side improvements. Unless they change contact, that is, unless they add a channel to a ground the source cannot move, they do not buy source detection. TruthfulQA (Lin, Hilton and Evans, ACL 2022) found *"The largest models were generally the least truthful"* and that this is *"expected if false answers are learned from the training distribution."* The Recursive Self-Improvement Trap essay adds the mechanism: LLMs are *"A copy of a copy of a copy."* `triangulated` (Fig 11, world source, essay).

**Refuter:** produce a controlled scaling result in which a model gains reliable per-source refusal at a non-updating anchor with no change in contact (no new instrument, no held-out ground, no differing frame). That breaks the habitat claim.

### F9 — What crosses outward must be a method, not a list of known bad sources (distribution)

Fig 4 :22-23: *"Only methods cross up. Only head starts come down."* Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*

A published list of sources judged unreliable on one dataset is a recording. What can cross is the method: describe the residual in effect terms, bind the sought-for shape, name the anchor, write the refuter, and let a reader check it against their own ground. Fig 10 :52: *"Bring a characterised residual, never the source."* This governs the outreach files, not the verdict.

**Refuter:** show a list of named unreliable sources that transfers to a new domain with a different ground and still earns the same verdict weight. By Fig 4 :25 it is a description of one occasion.

### F10 — The empirical question is a `gap`, reported as unreachable, not as silence (D4)

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."* Fig 13 :134: *"Unreachable is a verdict here, not a silence,"*

No measurement in this run tells us whether a particular deployed model genuinely identifies misleading sources. The essays and world sources give strong reason to expect that fluent reproduction dominates (F1, F2, F8), but they are not a ground reading of any specific system. The honest report is: the **shape** of detection is `specified` from the figures; the **fact** that any real model implements it is `gap`, and an instrument is owed. Fig 9 :32: *"you get a kind of thing, never the answer itself."*

**Refuter (for the gap report specifically):** a properly instrumented experiment that withholds ground labels from the model, injects misleading sources that are absent from the corpus, and records above-chance per-source refusal at a non-updating anchor. That converts the gap into a `grounded` claim, which would **not** refute the shape but would settle the empirical question this run refused to settle.

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing rule that a falsifier written before the run is a design instrument. The shape claim (a model needs a non-updating anchor, a bound refusal term, and a negation operator; pattern reproduction alone is insufficient) is refuted if any of the following holds:

1. **No-anchor detection:** a model flags a source as misleading above chance when that source is its only evidence and no ground feedback or second frame is available. Breaks Fig 2 :35 and Fig 6 :23.
2. **Single-frame detection:** detection is achieved with one closure, no import and no instrument. Breaks Fig 6 :21 and Fig 8 :32.
3. **In-closure derivation:** a source's misleading-ness is derived from its own pattern by composition alone. Breaks Fig 8 :32 idempotence.
4. **Accumulation-only correction:** a vocabulary with no ¬ and no equivalent refusal term removes a source's composability while keeping the record. Breaks Operators table :58.
5. **Scale-only contact change:** a scaling result adds reliable per-source refusal without changing contact with any non-updating ground. Breaks Fig 11 :40.
6. **Leaked-anchor artefact:** all apparent detections vanish when counter-evidence is withheld, so reported detection was pattern matching on leaked labels. This is a **false positive** for the empirical claim, not a refutation of the shape, and it is recorded here so the distinction is visible before the run.

If 1 to 5 fires, the shape claim is withdrawn. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. Do not treat fluency, likelihood, citation count or benchmark accuracy as source reliability (F1). Fig 1 :27 forbids scoring a frame with a quantity it also produces.
2. Instrument the difference (F10). Build tests that withhold ground labels, inject misleading retrieved sources absent from the corpus, and score per-source refusal at a non-updating anchor. RAGuard and the Glockner et al. leakage result show what the instrument must avoid.
3. Bind the sought-for shape as an ordinary term before the run (F6, Formula "Direction"). Write down what "this source is misleading" would look like in the model's own outputs, so it accrues a residual.
4. Buy independence in proportion to the cost of being wrong (Fig 2 :42). For high-stakes domains, triangulate with low-overlap frames, not more copies of the same corpus (F2, F4).
5. Keep per-source verdicts indexed per slot (Fig 1 :19, :22). A single truthfulness percentage averages away the only signal that says which source failed.
6. Send the method, not a blacklist (F9). Fig 4 :22-25.

---

## 6. Canonical usage check and retraction and confirmation log

Two canonical sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"* and the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: *"the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."* So whether a benchmark design is sound is decidable from the figures; whether a specific model passes it is a question for the ground, and this run has no such measurement.

| earlier reading | status after the canonical check |
|---|---|
| F1 called "reproduction is a disqualified metric" | **Confirmed and narrowed.** It governs frame-internal scoring (Fig 1 :24-27), not the claim that reproduction is useless. Reproduction is the substrate detection operates on; it is just not the verdict. |
| Temptation to say "a model can never detect a misleading source" | **Refused.** Fig 2 :35 rules out self-correction by a mirror, and Fig 6 :23 rules out in-closure detection, but D3 with a non-updating anchor and an import is exactly the triangulation the figures license. Never convert a limit of one domain into a verdict over all domains. |
| "shape, not a name" read as a ban on saying which condition is missing | **Corrected and kept visible.** The README's phrase governs a *missing primitive*. Here the missing items (anchor, refusal term, ¬) are conditions and operators, not a seventh primitive. Naming the *shape* of the discriminator is allowed; naming a specific benchmark as the only possible one is not. |
| F4 treated as "more sources help" | **Retracted at first pass.** The figure and RAGuard say the opposite: more sources from the same pool raise the chance of misleading content. Low overlap, not count, is the variable (Fig 8 :48). |
| Apparent Fig 8 :45 (union surplus) versus Fig 2 :40 (agreement worthless) | **Not strained.** Re-census: Fig 8 governs whether a differing closure creates a surplus; Fig 2 governs whether agreement counts as a verdict. Same independence parameter, two readings. |
| Fig 5 fifth kind requires ¬, which the seven bonds lack | **Kept as an open item, not hidden.** Operators table :77-78: *"What a unary operator costs is open."* The shape needs the operator; its price is unresolved. |
| D4 empirical question | **Declared `gap`, unreachable at this budget.** Reported as unreachable rather than silence (Fig 13 :134). A kind of thing is returned, not a fact about any deployed model. |

### Strains and re-census summary

- **Fig 2 (mirror) versus Fig 8 (triangulation):** re-census assigns Fig 2 to D1/D2 (no anchor) and Fig 8 to D3 (differing closures). Different domains, no strain.
- **Fig 1 (disqualified internal quantities) versus world fact-checking accuracy:** accuracy is a groundreading for the benchmark's question, not for the model's own source assessment. It is a filter for the budget (Fig 9 :60), never a witness for the model's internal verdict.
- **Fig 11 (habitat) versus "bigger models":** scale is agent-side; contact is habitat-side. No strain.
- **After re-census: one live open item (price of ¬), one declared gap (empirical implementation), no hidden strains.**

---

## 7. Closing statement

The figures return a shape and a route, not a yes-or-no about deployed systems. In D1 and D2, no: a mirror cannot correct you, and a frame cannot score itself with a quantity it also produces. In D3, in principle yes, provided an anchor that does not update, an import from a differing closure, a bound refusal term with a persistent flat residual, and an operator that can say "this does not hold." In D4, unreached: an instrument is owed and this simulated run did not build one. The verdict is `specified` where the figures decide it, `general` on the structural shape, and `gap` where only a measurement could answer.
