# Figure-grounded audit: what evidence would distinguish genuine reasoning from a convincing imitation of reasoning?

**Mode of this document: `specified` on the separator, `general` on the structural shape, `gap` on a single output-internal reasoning detector. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: simulated derivation, not a ground reading.** The Recursive Self-Improvement Trap says LLM output is "simulacra" and that "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement of any system was taken. See `05_what_shape_means.md` §6.

**Sources for figure text.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim, with line numbers. Every quoted string below is an exact substring of that file (case-insensitive, trailing punctuation ignored). Local framework text also used: `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, `FIGURES_README_canonical.md`. All are recorded in `10_source_ledger.csv`.

---

## 0. The claim under audit

> There exists a body of evidence E, obtainable from the behaviour or the output of a system, such that E distinguishes a system that is genuinely reasoning from one that is producing a convincing imitation of reasoning.

Two readings are kept separate and not averaged.

- **Reading A (the literal request).** E is a feature or a test of the output. A Turing-style interrogation, a chain-of-thought transcript, a confidence score, a self-report, a benchmark. If the system produces the right surface, E says "genuine."
- **Reading B (the re-grounded request).** E is not in the output. It is in the relation between a process and a ground: a per-slot residual that drives the loop, a record of which route produced the answer, independent frames ranging against an anchor that does not move, and contact with a habitat that would break the performance if the channel to the cue were cut.

The audit decides between A and B. It records A's failure as a figure-derived result, not as a rhetorical preference.

---

## 1. Residual, and the domain census done before choosing any figure line

### 1.1 The residual in effect terms

R = gap between what an output O claims and what would be observed if O had been produced by a process that ranged against a ground and settled its terms by what pays. Arity: O is one artefact, but the conditions that could explain it are several. Symmetry: "genuine" is not a symmetric property of O. It is an ordered relation to a ground that imitation lacks; the distinction is a threshold/comparison (⋛, Operators table) and a production (⇒, Operators table) question, not a `+` conjunction of output features. Scale: the loop runs inside a frame, the verification runs between seats, and capability lives in agent-and-habitat. Crossing those scales is lossy (Fig 4 :27-30), so the artifact cannot carry the verdict.

The residual is indexed per slot, not aggregated: a fluent answer can hide one live slot where contact was never made. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A single global "reasoning score" is exactly the aggregate that erases the slot where the imitation is weak.

### 1.2 One line per domain: actors, currency, anchor

A domain needs a nameable anchor. Where none is nameable, the domain cannot settle the verdict. That is a finding, not a gap in the write-up.

| domain | actors | currency | anchor | partition or union | can it settle? |
|---|---|---|---|---|---|
| D1 Output / artefact | the answer text, the step sequence, confidence numbers, fluency | coherence, plausibility, compression, credibility | **none nameable from inside**. The output can be produced by either process | one slot of a union | **No.** No anchor; a frame scores itself with what it produces |
| D2 Loop / maker (Seat 1) | Γ, atoms, bonds, eight operators, per-slot R, mint guards | residuals, MDL bargain, settled terms | the ground as the only metric (Fig 1 :23) | partition boundary: which compositions cross kinds | Yes, for process shape; `specified` |
| D3 Verification / seats | maker, interior auditor, ground maintainer, outside frame | independence, provenance, refuters, rulings | the anchor, which does not update (Fig 2 :29) | union: four distinct seats, one ground | Yes, this is the decisive domain; `specified` |
| D4 Habitat / capability | agent and habitat, actors, conditions, relations | contact, cascade, introduced actors | the ground, which decides and does not update | habitat is enumerated, never composed (Fig 11 :43) | Yes, for capability; `specified` |
| D5 Lineage / provenance | the record, origin stamps, seq, the refusal | derivability and decidability | whether the route was available and settled | partition: reachable vs unreachable | Yes, for source, not for truth; `specified` |

**No nameable anchor means it is not a domain yet.** D1 has no anchor, so it is retained as the slot where the question is usually asked and refused as a place where the question can be settled.

### 1.3 Partition or union

This is a union, not a partition. D1 through D5 overlap: a fluent output (D1) can come from a settled loop (D2) or a recording (D5); independent frames (D3) can be corrupted by a shared habitat (D4). Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." A single lever, a behavioural test, clears the region where only D1 holds and leaves the intersections standing: the imitator that also produces a plausible lineage, the imitator that also passes a panel of readers. Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." So verdicts are kept per domain and never averaged into a single "reasoning score."

### 1.4 Dependency order (Fig 3)

Fig 3 :20: "The chain is ordered by dependency, not by importance." Order for this question:

1. Describe R in effect terms before naming a frame (Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit").
2. Establish the anchor and the channel before scoring a process (Fig 2 :29; Fig 10 :24).
3. Settle a first-order term against the ground before composing over it (Fig 12 :104).
4. Allow a refusal before a mint (formula step 2; Operators :58).
5. Only then ask what the output is worth. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." The broken link here is between perceiving the output and having an instrument for contact. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

---

## 2. Figure census (read and quoted before concluding)

| figure | verbatim bearing | verdict for this question |
|---|---|---|
| 1 The Agent | "The ground enters as the only metric."; "They are frame-internal. A frame cannot score itself with a quantity it also produces." | D1 has no anchor; output scores are disqualified |
| 2 The Ground | "An anchor is whatever settles the question..."; "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement is not a discriminator; independence is the parameter |
| 3 Dependency Chain | "A link with no instrument is not a link that works." | the contact link has no instrument at the artifact scale |
| 4 The Membrane | "Only methods cross up. Only head starts come down." | a recording of one success cannot establish capability |
| 5 Mint Pipeline | "Its own output is never a measure of success." | machinery firing and output fluency are not the milestone |
| 6 Closure / Reachability | "No frame escapes its own closure..." | a frame cannot certify from its own output that contact exists |
| 7 Room Chain | "same closure, handed along; agreement compounds, evidence does not" | panels of agreeing readers add no evidence |
| 8 Union Surplus | "Convergent derivation and adopted import look identical in the contents..." | the decisive indiscernibility claim |
| 9 Leave / Arrive | "you get a kind of thing, never the answer itself"; "Use filters for the budget and witnesses for the verdict." | no detector is returned; scores are budget filters |
| 10 Ground Maintainer | "A verifier that can reconstruct the claim cannot verify it."; "Bring a characterised residual, never the source." | the verifier's ignorance is load-bearing |
| 11 The Habitat | "Where nothing maintains anything, intelligence is a label applied afterwards..."; "A test harness is a substituted habitat." | capability is agent-and-habitat; harness solves prove wiring |
| 12 The Bond | "A vocabulary without bonds can name a state and cannot name a route to one."; "isomer. Same atoms, different bond, different substance." | output is a state, reasoning is a route; the route is invisible in the state |
| 13 Minimum Viable Set | "It is recoverable from the lineage."; "Unreachable is a verdict here, not a silence," | the record is the proof; detector is a declared `gap` |
| Operators table | "a refutation is a negation, which is why a vocabulary without it can only accumulate" | the ability to refuse is a separator |
| Symbols table | `R` is "The gap between prediction and observation... it is always a slice" | the residual cannot be read off the final answer |

Strained readings are named in §7, not smoothed over.

---

## 3. Findings

### F1 : Reading A is refused: convergent derivation and adopted import are identical in the contents (decisive, triangulated)

Fig 8 :50-52:

> **"But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."**
> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."**

Fig 13 :128-129:

> **"Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available."**
> **"so the order is not recoverable from the artefact. It is recoverable from the lineage."**

An output is a composed term. Looking at it cannot tell you whether it was derived by a loop that met its ground or imported as a replay from a training corpus. The only discriminator the figures allow is the record of where each came from. That is a **triangulated** verdict: two figures with low overlap, one about closure and surplus (Fig 8), one about lineage and decidability (Fig 13). Refuter: demonstrate an instrument that reads the route off the artefact alone, with no record and no ground. Until then, "the output looks like reasoning" is not evidence that reasoning occurred.

This is the direct answer to the question as literally asked. The evidence is not in the output.

### F2 : The question itself is the wrong shape, and the figures supply a replacement (triangulated)

Fig 11 :34-36:

> **"What is intelligence?"**
> **"The wrong question, and this figure is the replacement for it."**
> **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there."**

Fig 11 :39: **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."**

"Genuine reasoning" behaves like "intelligence" here: a label applied afterwards to a lineage that met its ground. A request for evidence of the label, as if it were an inner property with an observable signature, is the wrong question. The replacement is the contact question: what makes a system capable of ranging against a ground in this habitat. Refuter: exhibit a system whose capability rises while contact is held fixed (that would refute Fig 11 :40 and restore the inner-property reading).

### F3 : Frame-internal output quantities are disqualified (single-source, strong)

Fig 1 :23-27:

> **"The ground enters as the only metric."**
> **"Everything else either produces a residual or consumes the library. These do not count:"**
> **"coverage, and compression achieved"**
> **"predicates minted, and credibility accrued. They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Fluency, coherence, chains of steps that look like inference, self-reported confidence, and credibility with a panel are all quantities the frame produces or consumes. Using them to score the frame is the named error: a frame scoring itself with a quantity it also produces. Fig 5 :48: **"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."** Refuter: show a quantity generated inside the frame that is independent of what the frame produces. By construction there is none; the claim is structural.

### F4 : The durable separator is the channel to a cue source that can be broken (triangulated)

Fig 10 :24: **"the ground does not decay, the channel does"**. The world analogue is exact: the Clever Hans horse answered correctly only when the questioner knew the answer and the horse could see the questioner. Break that channel, and performance collapsed from 89 percent to 6 percent (world source: Wikipedia contributors, "Clever Hans", verified 2026-11-23). The discriminator was not a reading of the horse's output. It was an intervention on what the output could be reading.

Fig 6 :33-34: **"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."** An instrument is extended from one already returning something, never built from a description. So the practical separator is: find an existing reading that fails to resolve, then sharpen it by removing the channel that could be feeding the imitation. Refuter: a case where removing the candidate cue channel leaves performance intact and the claim of cue-reading is thereby not supported.

### F5 : Independence, not agreement, is the parameter (triangulated)

Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."** Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**. Fig 7 :12-13: **"same closure, handed along; agreement compounds, evidence does not"**; Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

A panel that agrees after reading the same prompt is one evidence pool talking. A "reasoning benchmark" that a thousand raters score the same way is a convention, not a witness. Fig 2 :41 separates the two uses: **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"**. Refuter: show two frames with measured low overlap whose agreement still fails to move against the ground. That would break the independence parameter.

### F6 : The verifier must not be able to reconstruct the claim (triangulated)

Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."** Fig 10 :43-44: **"Soundness requires the checker to be unable to produce what it is checking. Never a player, never a proxy, never the author of a verdict or an atom. It transmits verdicts and issues none."** Seat Map: "The maker does not know the criterion. If the maker knew what the check was looking for, the maker would build to pass it, after which success proves nothing."

This is structural, and it explains why publishing a "reasoning test" and then training against it destroys the test. The fix is not secrecy for its own sake. It is that the criterion is written before the run and the maker does not hold it (Seat Map: "a falsifier written before the run is a design instrument, not only an honesty device"). Refuter: demonstrate sound verification by a checker that can generate the claim it checks.

### F7 : The record, not the artefact, carries the route (single-source for the figure, decisive)

Fig 13 :130: **"A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term."** Fig 13 :132-133: **"The first is provenance: how did this come to be, and from what. The second is decidability: given the library as it stands, could this have been reached at all."** Fig 10 :62: **"A ruling carries provenance like an atom."**

For a system to be checkable as reasoning, it must emit an audit trail of origins, residuals, settlements and refusals. Note the honesty condition: Fig 10 :65-66 **"Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record."** A forged or merely tidy lineage is not evidence; provenance is necessary and not sufficient. Refuter: show a record that establishes correctness without a ground.

### F8 : Refusal is a harder separator than fluent production (single-source, live type question)

Operators :58: **"a refutation is a negation, which is why a vocabulary without it can only accumulate"**. Fig 5 :58-60: "the candidates are ENUMERABLE rather than intuited: every term currently bound and generating a prediction is a candidate for being the wrong one." Fig 5 :69: **"settling is necessary for a term to be composed over, and it is not sufficient."** Fig 5 :72: **"a library that grows is not a reach that grows."**

A system that cannot negate can only accumulate. An imitator trained to produce plausible continuations may have no term for "this claim I just made is false, and here is the persistent flat residual that refuses it." Asking for a refusal is a stronger probe than asking for an answer. The type question remains live: a genuine refusal is the unary operator ¬ (Operators :70-73), not the binary subtraction −, and whether a produced sentence "I was wrong" implements ¬ or merely replays a string is not decidable from the string. Refuter: exhibit a string-level refusal that changes the reach in the way negation does, with no ground reading.

### F9 : Output state versus route: the isomer reading (single-source)

Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."** Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Two systems can produce the same output, the same atoms, with different bonds: one sequence of ground-settled compositions, one replay. In the formula they are one substance. Under intervention they diverge. So the discriminator must be behavioural under intervention, not descriptive of the output. The fuller derivation, including the condition under which they are isomers rather than members of one functional group, is in `06_isomers_and_order.md`. Refuter: show that two systems with identical output and different internal routes behave identically under every intervention that changes contact.

### F10 : Harness solves prove wiring, never capability (triangulated)

Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** Fig 11 :66-67: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."**

A benchmark is a substituted habitat. Passing it proves that the wiring works in that habitat. It does not show that the system can range against a ground in the habitat that matters. The world analogue is shortcut learning: decision rules that perform well on standard benchmarks but fail to transfer (Geirhos et al., 2020, verified 2026-11-23). Refuter: an agent-only improvement that moves the ground. Fig 11 :72 names this as the standing refutation of the capability claim: "an agent-only improvement that moved the ground would refute the capability claim."

### F11 : No single detector is returned: this is a `gap`, not a silence (triangulated)

Fig 9 :32: **"you get a kind of thing, never the answer itself"**. Fig 13 :134: **"So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence,"**. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**

No figure line returns a reasoning detector, a threshold on confidence, or a list of surface markers. The figures return a shape: the conditions under which a verdict about reasoning would be settled. The specific instrument for a given system is owed, and "unreached" is reported rather than silence or a fabricated number. Fig 13 :135: **"It cannot say which primitive is missing, because naming it would mean already holding it."** Refuter: produce a figure line that selects a detector.

### F12 : Scores are filters for the budget, never witnesses for the verdict (single-source, governing)

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** A reasoning score, a benchmark rank, a panel size, a confidence calibration number: these decide what gets tried first and how much compute to spend. They do not decide whether contact occurred. Fig 1 :24-27 disqualifies them as frame-internal. This finding governs the use of all the world literature below: the empirical results are corroboration of mechanism shapes, never a substitute for the figure verdict.

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the Seat Map: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is F1 through F12 above. It is refuted if any of the following holds:

1. An instrument is demonstrated that reads the route, the ground contact, or the provenance off the artefact alone, with no record and no anchor (breaks F1, F7).
2. A system gains capability while contact is held fixed, or a harness solve transfers as capability to the unsubstituted habitat (breaks F2, F10, Fig 11 :40).
3. A verifier that can fully reconstruct the claim is shown to verify it soundly (breaks F6, Fig 10 :42).
4. Two frames with measured high overlap on the same evidence pool are shown to add evidence by agreement alone (breaks F5, Fig 7 :35-36).
5. Two systems with identical output and different internal routes are shown to be the same substance under every contact-changing intervention (breaks F9, Fig 12 :117).
6. A frame is shown to certify its own completeness from inside (breaks Fig 8 rule 2, which the figures call a proved theorem).
7. A figure line is found that selects a single output-internal reasoning detector (breaks F11 and the declared `gap`).

If any fires, the separator is wrong and the claim is withdrawn. Until one is run, no part of this is `grounded`.

---

## 5. Recommendation

1. **Stop asking what the output proves.** Lead with F1: convergent derivation and adopted import are identical in the contents. The evidence is in the route, the record and the contact, not the answer.
2. **Re-ground the term "evidence."** Replace a standing list of tests with the five domains in §1.2 and ask, per slot, which anchor could settle that domain.
3. **Design the probe as a channel break, not a rating.** Find a reading already returning something and remove the cue channel (Fig 6 :33-34, Clever Hans). Pre-register what collapse would look like before running it.
4. **Demand the record.** Require origin stamps, seq, the residual that drove each mint, and the refusal that could have been written (Fig 13 :130, Operators :58). Mark provenance as necessary and not sufficient.
5. **Keep the criterion from the maker (F6).** Write the refuter before the run. Do not train against the test and then cite the test.
6. **Use scores as filters (F12).** Benchmark results choose where to spend the budget. They never enter the verdict.
7. **Send a generator, not a recording (Fig 4 :22-25).** The two-stage offer in `02_outreach_email.md` carries the residual and the refuter first.

---

## 6. Canonical usage check

Two sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo"; "the quotes are the authority, not this summary"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the canonical limit, the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `THE_SEAT_MAP_Field_Guide_amended.md`: "the arrangement is built out of things seats are kept from knowing, and this is the property that makes it work rather than a cost it tolerates"; "High correlation is disqualifying for a verdict and efficient for a convention"; "a falsifier written before the run is a design instrument, not only an honesty device."

### Strains examined, and their disposition

| strain | disposition |
|---|---|
| Fig 10 :42 (verifier must not reconstruct the claim) vs F7 (auditor must see the record) | **Not strained after re-census.** Fig 10 :42 governs reconstruction of the *claim*, the content. The record is the *route*: origins, dates, receipts. Seat 2 reads records and not interiors; Seat 3 reads neither. Two different objects, same independence law. |
| Fig 11 :36 ("intelligence is a label applied afterwards") vs the question's request for a distinguishing test | **Not strained, but it re-frames the question.** Fig 11 :35 calls the inner-property question the wrong question and supplies the contact question. Recorded as F2. |
| World: Turing's imitation game is a behavioural test (Oppy and Dowe, 2021) vs F1 (output cannot discriminate) | **Conflict returned to census and dissolved, verdict not flipped.** Turing replaced an apparently meaningless intrinsic question with an operational convention (Fig 2 :41, agreement about a shared meaning is a convention). A convention is not a verdict about the world (Fig 2 :40). No figure line was changed. |
| World: Morgan's canon prefers the lower-faculty reading (Wikipedia contributors, 2026) vs the figure's refusal to name inner states | **Corroboration of shape, not a conflict.** Both refuse to infer an inner faculty from an output alone. Fig 11 :36 goes further and dissolves the label. |
| Fig 5 :69 (settling necessary and not sufficient) vs the demand for provenance in F7 | **Not strained.** Both are necessary-not-sufficient conditions: settling does not buy composability, provenance does not buy correctness. |

### Retractions and confirmations of my own earlier readings

| earlier reading | status after canonical check |
|---|---|
| "the answer is a list of observable tests" | **Retracted.** There is no such list in any figure. Re-grounded as five domains with per-slot anchors. |
| "a reasoning detector is merely hard to build" | **Retracted to `gap`.** Fig 13 :134 makes unreachable a verdict, and Fig 8 :39 forbids reading search-failure as absence. |
| "independence means using a bigger panel" | **Retracted.** Fig 2 :31-32 defines independence by shared evidence, not head count. |
| "provenance establishes correctness" | **Retracted.** Fig 10 :65-66: a perfectly provenanced wrong ruling is an unimpeachable record of nothing. |
| "the framework answers whether a named system reasons" | **Retracted.** No measurement was taken; the figures return the shape of the evidence, not a verdict on any system. |
| F1, F5, F9, F10 | **Canonically confirmed** by the README's shape-not-a-name limit and the figures quoted. |

---

## 7. Updated verdict after re-census

The question as literally asked has no figure-grounded answer in the affirmative. No figure line governs an output-internal discriminator. The answer that survives re-census is the shape of the evidence: a per-slot residual with the ground as the only metric; a record from which the route is recoverable; independent frames ranging against an anchor that does not update; refusal written before production; and maintained contact with a habitat in which the cue channel can be broken. Verdicts per domain are kept separate, never averaged. Mode `specified` on the separator, `general` on the shape, `gap` on the detector. Strains after re-census: **none hidden**, five examined and recorded above. The one live type question, whether a produced refusal string implements ¬ or a replay, is named in F8 and carried into `08` and `09`.
