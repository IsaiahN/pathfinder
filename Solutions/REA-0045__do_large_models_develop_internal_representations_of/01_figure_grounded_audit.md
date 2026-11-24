# Figure-grounded audit: do large models develop internal representations that support reliable reasoning?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap says LLM output is simulacra and that "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** The verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays at `adventuresinml.substack.com`, and the public pages in `10_source_ledger.csv`. All quotes below were read this session (2026-11-23).

---

## 0. The question under audit, in effect terms

> "Do large models develop internal representations of objects, people, and events that support reliable reasoning?" (`reasoning.txt` line 56)

This is a **union compound**, not one question. It joins:

- **C1, a state claim:** a large model has internal states that are "of" objects, people, and events. This is about model-internal geometry.
- **C2, a capability claim:** those states *support reliable reasoning*. This is about a disposition to get the right answer across cases, at the ground.

A case in two conditions is not a harder case of either (Fig 9 :54 to :58). The two need separate loops and separate anchors. What each option leads to:

- **Option A (yes as written):** we look inside the model, find features and circuits, name them representations of the world, and conclude that scaling internal structure delivers reliable reasoning. This spends the frame's own output as its score.
- **Option B (figure-derived):** we describe the effect (per-slot correctness against an unmovable ground), refuse the internal name until it is grounded, and treat capability as a property of model-and-habitat. This yields a checkable shape, written refuters, and an open binding.

The sought-for shape, bound as an ordinary term so it can accrue a residual: **"a per-slot ground claim about model-and-habitat, with the internal-state name held as an unproven binding."** This is formula step "Direction": a frame cannot check the direction of its own question, so the shape is made into a term that can be refused.

---

## 1. Domain census (before any figure line is chosen)

**R by arity, symmetry, scale.**

- **Arity: two conditions.** C1 and C2 are not one residual. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
- **Symmetry: the causal claim is ordered.** "Support" is a production or sequence bond (⇒ or →), not a symmetric conjunction. "Representation of X" is an identity claim (≡) between an internal state and a world entity, which is a different bond from "supports." Two bonds are being conflated under one word.
- **Scale: two scales with a lossy transform between.** Internal activations are within-run and micro. Reliable reasoning is across-run, across-case, and habitat-level. The transform is `R_T` (Fig 4 :30).

**One line per domain: actors, currency, anchor.** Where no anchor is nameable, the domain cannot yet settle the claim.

| domain | actors | currency | anchor | can it settle the question? |
|---|---|---|---|---|
| D1, model-internal structure | activations, weight geometry, features, circuits, linear directions | probe accuracy, compression achieved, description length | **none** | no. Fig 1 :27 disqualifies the currency. Not a deciding domain yet. |
| D2, behaviour and ground contact | the model acting on tasks; objects, people, events as world slots; instruments and environments | per-slot residual, verifiable outcome | the ground (a measurement, experiment, environment that refuses) | yes. This is where reliable reasoning is decided. |
| D3, verification and instruments | probing researchers, interpretability practitioners, expert readers, seats | agreement versus residual, evidence-pool independence | the ground, never agreement | yes, for instrument adequacy; no, for the causal claim on its own. |
| D4, habitat and corpus | the training corpus, selection, the world that produced the corpus | contact, introduction, cascade | the ground (the world that produced the traces and can refuse the model) | yes, for whether an internal "of" relation can form at all. |

**Partition or union.** It is a union. D2, D3 and D4 overlap on the ground and the habitat, and the causal claim lives at the intersection of D1 and D2. Fig 9 :56-58: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing." The intersection is a compound with its own loop.

**Order by dependency (Fig 3).**

1. **Perception:** are objects, people and events tracked as distinct slots? Fig 1 :19: "The residual is indexed by object slot, not aggregated." Without slots there is nothing to be "of."
2. **Vocabulary:** are there terms for what those slots afford? Fig 3 :6-8. Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."
3. **Objective:** what counts as "reliable reasoning"? This is a comparison (a goal), and needs an anchor. Fig 3 :9-11.
4. **Planning:** the route from internal state to grounded action, which is a bond, not an ingredient.
5. **Learn and carry:** settlement, provenance, whether the representation survives a boundary (Fig 12 :107-110).

The likely break is at link 3, exactly where Fig 3 :24-27 says chains usually break: having terms for what a situation affords "was taken for a dictionary and it is a grammar" (Fig 12 :115), and "A link with no instrument is not a link that works. It is a link nobody has looked at" (Fig 3 :27). The phrase reliable reasoning is usually a benchmark average, which is the aggregation Fig 1 forbids.

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per object slot; frame-internal quantities disqualified | decisive against the aggregate benchmark reading |
| 2 The Ground | anchor must not update; agreement is not a verdict; buy independence | decides the anchor for C2 |
| 3 Dependency Chain | per-link status; break at vocabulary/objective | orders the loops |
| 4 The Membrane | methods cross up, head starts down; measure `R_T` | governs the two-scale transform |
| 5 Mint Pipeline | output is never a measure of success | disqualifies probe accuracy as self-score |
| 6 Closure / Reachability | depth versus absence look the same from inside; instruments improved from worse ones | governs interpretability instruments |
| 7 Room Chain | agreement compounds, evidence does not | governs multi-probe agreement |
| 8 Union Surplus | a search that finds nothing is never a proof of absence | governs negative interpretability results |
| 9 Leave / Arrive | describe the effect, not the cause; unbundle a union | decides the reframing |
| 10 Ground Maintainer | declaring a meaning does not ground it; verifier non-access | governs outreach and probing claims |
| 11 The Habitat | capability is agent-and-habitat; contact | decisive for C2 |
| 12 The Bond | state versus route; arrangement is the substance | separates representation from reasoning |
| 13 Minimum Viable Set | closed set, unbounded arrangements; unreachable is a verdict | governs the limit |
| Operators / Symbols | ⇒ production, → sequence, ≡ identity; `R` is the aim, not the metric | names the conflated bonds |

---

## 3. Findings

### F1 - C2 is decided by contact, not by internal structure (decisive, triangulated)

Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."

Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

The question asks whether an *internal* property supports reliable reasoning. Fig 11 dissolves that framing: the answerable question is about agent-and-habitat. A change to internal structure that does not change contact changes nothing. Reliable reasoning is a contact property, and the anchor is the ground, not the geometry.

**Triangulation:** Fig 11 (habitat and selection) and Fig 2 (alignment and anchor) are different figures with different actors and different currencies. Their agreement is low-overlap. A third line, Fig 1 :19 ("The residual is indexed by object slot, not aggregated."), fixes the unit of the ground reading. Verdict `specified`, triangulated.

**Refuter:** a controlled intervention in which reliable reasoning is held constant while the model's contact with the habitat (environment, tools, external sources, per-slot feedback) is removed. If the capability survives, Fig 11 :40 is false here.

### F2 - The word "representation" is a borrowed cause-word (decisive, triangulated)

Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause."

Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit."

Fig 9 :32: "you get a kind of thing, never the answer itself."

"Representation of objects, people, and events" names a cause inside the model. The effect is per-slot correctness against a ground. The question picks the frame (representation) before describing the residual, which is the inversion Fig 9 forbids. What the figures return is a kind of thing: a slot that must be filled by a ground-settled binding, not a name.

**Triangulation:** Fig 9 (leave/arrive) and Fig 10 :49 ("Declaring a meaning does not ground it.") are low-overlap frames (search geometry versus checking arrangement). Verdict `general`, triangulated.

**Refuter:** show that "representation" is not a borrowed cause-word here but an operationally defined, ground-settled term whose residual accrues independently of the benchmark it is meant to explain. Then Fig 9 :30-31 does not govern it.

### F3 - Frame-internal quantities cannot score the frame (single-source, decisive for D1)

Fig 1 :24-27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." The named examples are "coverage, and compression achieved" and "predicates minted, and credibility accrued."

Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."

Probe accuracy, feature count, linear decodability and compression are produced by the same frame whose "representation" they are meant to certify. D1 therefore has no nameable anchor. By the census rule, it is not yet a deciding domain. This is a `gap` for C1 as literally posed: no figure line licenses a yes or no about internal states being representations of world entities. What the figures do govern is the route out of D1 into D2 and D3.

**Status: `gap` for the literal C1 claim; `single-source` (Fig 1, corroborated by Fig 5) for the disqualification of its metrics.**

**Refuter:** an instrument external to the frame that returns a residual against the world for the specific internal state, such that the state's standing does not depend on a quantity the frame also produces. Then D1 acquires an anchor and the gap closes.

### F4 - Per slot, never an aggregate (single-source but load-bearing)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

The question names objects, people and events, that is, slots. "Reliable reasoning" reported as one benchmark number is the aggregation Fig 1 forbids. A model can be globally near zero with one live slot residual, and that is a legal state (Fig 1 :20-21). So a yes or no at the level of the whole model is the wrong reading even before the ground is consulted.

**Status: `single-source` (Fig 1), with corroboration from the essay *How a Society of Agents Would Work*, which quotes the same line. Verdict `specified`.**

**Refuter:** a demonstration that the relevant residual is genuinely global (a single scalar that predicts the per-slot failures without losing a live slot). Then aggregation is not throwing away the signal.

### F5 - Interpretation instruments can be inadequate, and absence is not proof (triangulated)

Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."

Fig 6 :34: "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room."

Interpretability is an instrument, not a verdict. A probe can decode a property the model does not use for the task (Hewitt and Liang, 2019, read this session: "popular probes on ELMo representations are not selective"). A failure to find a representation in activation space does not prove it is absent; it may be below the current instrument's resolution. This is why the essay *How Intelligence Actually Works* says "A bigger and better instrument finding nothing is indistinguishable from a trace it still can't reach."

**Triangulation:** Fig 6 (instrument geometry) and Fig 8 (underivability and union surplus) are different figures. Fig 9 :44 corroborates. Verdict `general`, triangulated.

**Refuter:** a sealed, complete search of the internal state space with a proven selector, after which absence would be provable. Fig 9 :44 says no frame is sealed; producing one would break the figure.

### F6 - Representation is a state; reasoning is a route (single-source, structural)

Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."

Fig 12 :94: "The arrangement is the substance."

Fig 12 :112-113: "A plan is a sequence. A goal is a comparison. Progress is a subtraction."

An internal feature is a state. Reliable reasoning is a route with a goal (a comparison) and progress (a subtraction). Having the first does not compose the second; the bond between them is the whole of the claim and is not recoverable from the operands. The question's "support" is that bond, and it is charged for what it could have been, so it cannot be assumed free.

**Status: `single-source` (Fig 12), structural. Verdict `general`.**

**Refuter:** show that a representation state entails the route to a goal without a typed bond, so the arrangement carries no information the operands lack.

### F7 - Outputs are not generators (world corroboration, not a figure verdict)

The essay *They're Scanning Books When They Should Be Studying Nature*: "A corpus is the compressed output of human minds; the capacity that produced it is a generator, and outputs do not contain their generator." And: "The human fails by searching; the decompressor fails by guessing."

The essay *Decoding Tacit Knowledge*: "Training on it reproduces 'the traces the thought left, not the thought', with enough structure to rebuild the appearance of reasoning." And: "Sounding right isn't the same as being checked against the world, which is why I call the Turing test a test of fluency, not of accuracy."

These are world sources (framework author, high overlap with the figures). They corroborate F1 and F2 but do not decide anything. The figure verdict stands on Fig 11 and Fig 9.

### F8 - A probe's agreement with a benchmark is one pool, not two witnesses

Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool."

Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

If a representational claim is checked only by the same model's benchmark outputs, the two frames share an evidence pool. Different probes trained on the same activations are one searcher wearing several names (Fig 6 :53-54). Independent frames must draw on different evidence: a behavioural ground, a causal intervention, an environment that refuses.

**Status: `triangulated` (Fig 2 and Fig 7, low overlap). Verdict `general`.**

### F9 - The two-scale round trip has a nonzero `R_T`

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Fig 4 :31-32: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."

The shorthand "models have representations that support reasoning" is a condensation. Taken up from the figures and brought back down to a concrete claim, it drops: (a) the per-slot indexing, (b) the anchor requirement, (c) the state/route bond, (d) the instrument-adequacy caveat. `R_T` is nonzero and is recorded qualitatively in `11_audit.md`. Treating the shorthand as identical to the figures would set `R_T` to zero and be the dead-reckoning error.

### F10 - What survives, with modes attached

| claim | mode | figure |
|---|---|---|
| Capability is a property of model-and-habitat, not of the model alone | `general`, structural | Fig 11 :39 |
| An internal change that does not change contact changes nothing | `specified`, falsifiable | Fig 11 :40 |
| The residual is indexed per object slot, not aggregated | `specified` | Fig 1 :19, :22 |
| "Representation" as a cause-word must be grounded before it carries verdict weight | `general` | Fig 9 :30-31, Fig 10 :49 |
| Failed internal search is not proof of absence | `general` | Fig 8 :39, Fig 6 :27 |
| A representation state does not compose a route to a goal without a priced bond | `general`, structural | Fig 12 :111 |
| A specific internal feature is the representation of a specific world object | **refused as written, `gap`** | F3, F5 |

### F11 - The answerable question, restated

The figures do not return a yes or no to the question as written. They return a shape and a route:

- The literal C1 claim is a `gap` (no anchor, frame-internal currency). "Unreachable is a verdict here, not a silence" (Fig 13 :134).
- C2 is `specified`: reliable reasoning is a contact property of model-and-habitat, measured per slot against a ground.
- D3 is `specified`: interpretability instruments can corroborate but cannot settle, and a null result is not absence.

Mode of the whole answer: `specified`, ungrounded, candidate.

---

## 4. Formula step 7, kept distinct

When no single term closes the residual, the formula asks three questions, not one.

- **SEARCHED (asked first, cheapest):** is the answer in the current closure and unfound? Applied to D1: the internal-state space is large and much of it has not been visited. More search at the same reach (Fig 6 :49-50) could find features. But this only answers the existence of internal structure, not the "of the world" or "supports reasoning" claims, which need an anchor. Verdict: search alone does not close C2.
- **INWARD:** extend the instrument from one already returning something. Applied to D3: probes and causal mediation are instruments improved from worse instruments (Fig 6 :32-33). Require selectivity (control tasks), not just decodability. This sharpens in our own terms and cannot by itself supply the ground.
- **OUTWARD:** import. Characterize the residual in effect terms, then find the frame whose closure predicts its shape. Applied here: the low-overlap frames are ecological psychology (affordance), distributed cognition, extended mind, and the Chinese-room literature. They predict the shape "capability is animal-and-environment, not animal alone." Source gate and shadow test are in `09_watson_answer.md`.

INWARD and OUTWARD are opposed and are never read against each other. Underivable in principle and unreachable at this budget are different facts (Fig 6 :51-52); no claim of underivability is made here, only that the present anchor is missing.

---

## 5. Pre-registered refuter (written before the conclusion)

Per the seat map rule: a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. **Grounded internal link.** A probe or intervention is shown to be selective against control tasks *and* causally necessary for per-slot correctness on novel slots, with an anchor independent of the model's own outputs. This would close the C1 to C2 link and refute the `gap` verdict.
2. **Contact invariance.** Reliable reasoning is measured to be unchanged when contact with the habitat (environment, tools, external sources, per-slot feedback) is removed. This breaks Fig 11 :40.
3. **Frame-internal anchor admitted.** A quantity the frame also produces (probe accuracy, compression achieved, predicates minted, credibility accrued) is admitted as the anchor that settles the question. This breaks Fig 1 :24-27.

If any fires, the shape claim is withdrawn. Until one is run, no part of this is labelled `grounded`.

---

## 6. Recommendation

1. Do not answer the question yes or no in outreach. Unbundle C1 and C2 and state modes (F1, F2, F11).
2. Replace the benchmark average with a per-slot residual against a named ground (F4).
3. Treat any internal-state finding as an instrument reading until a source gate and shadow test are supplied (F3, F5).
4. Ask a checker what they would count as a failure, before showing any theory (Fig 10 :52: "Bring a characterised residual, never the source.").
5. Send the generator (the residual, the shape, the refuter), not the recording (the full framework). Fig 4 :22-25.

---

## 7. Canonical usage check

Two local sources govern how the figures may be used, read after the findings above:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo" and "the quotes are the authority, not this summary." A reading that makes one contradict another has misidentified its domain. The framework returns "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the instruments. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule; the sought-for shape must be made an ordinary term; SEARCHED, INWARD and OUTWARD are three questions.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "F1 is about intelligence, so it decides the question" | **Narrowed.** Fig 11 :39 concerns what makes a system capable, not a yes/no on internal representations. It governs C2 only. |
| "C1 is answered no" | **Retracted.** C1 is a `gap` (F3), not a negative verdict. "A search that finds nothing is never a proof of absence" (Fig 8 :39). |
| "probe accuracy can serve as the ground for representation claims" | **Refused.** Fig 1 :27 and Fig 5 :48. Frame-internal output cannot score the frame. |
| "the eight essays decide the verdict" | **Refused.** Essays are world sources and share the author's evidence pool; they corroborate only. The figures decide. |
| "shape not a name forbids naming any internal feature" | **Narrowed.** The README's phrase governs a *missing* primitive. Naming an already-held internal feature is a binding from the ML frame, provenanced as such. It still cannot claim to settle C2. |
| apparent strain Fig 1 per-slot versus a whole-model yes/no | **Not strained.** Re-census: Fig 1 governs the residual unit; the question's "reliable reasoning" is an aggregate. Different objects. |
| apparent strain Fig 11 contact versus representational capacity | **Not strained.** Re-census: Fig 11 governs capability; internal structure is a candidate mechanism whose standing is decided by contact, not a rival quantity. |

### Verdict after the canonical check

The shape survives: the answerable question is about contact, measured per slot, against a ground; internal-state names are unproven bindings; failed search is not absence. The literal question does not receive a yes or no. Strains after re-census: none hidden; one live terminological strain is named in `11_audit.md` (representation as state versus representation as grounded correspondence) and handled by binding two separate terms.
