# Figure-grounded audit: how should an autonomous system decide when to seek human input rather than act independently?

**Mode of this document: `specified` on the per-domain boundary, `general` on the structural shape, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line numbered), `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the local Seat Map copy, and the world pages opened 2026-11-23 and listed in `10_source_ledger.csv`. All figure quotes below are exact substrings of `03-FIGURES_TEXT.md`, cited as `Fig N :line`.

---

## 0. Proposal header (seat reasoning)

```
DECIDES:    Whether a system acts from its own closure or seeks human input is decided
            by where R lives and which anchor the question is constitutively about,
            not by one confidence dial. Four domains have four different anchors:
            own closure (ground of the task), human as anchor (constitutively human
            question), human as differing-closure import (ground still decides),
            and the verification seat (ground, never agreement). The rule is ordered:
            SEARCHED, then INWARD, then OUTWARD import (Formula step 7).
            A = B? No. "Act independently" is composition inside closure(Γ);
            "seek human input" is either ranging against the legitimate anchor or
            an IMPORT from a peer frame. They answer different questions.
HOURS:      This audit and the eleven companion files, one primary seat and one
            simulated second seat. No measurement was taken; hours are agent time,
            not ground contact. A real check requires a deployment with a ground.
PRIOR CASE: QMGR-0037, the imported exemplar on QM/GR composition. Its method is
            carried, not its answer: domain census before figure line, refuter before
            conclusion, retraction table kept visible, and a simulated second seat.
ANALOGUE:   Library of Babel searcher: describe R in effect terms, then let the
            residual select the frame. Habitat: enumerate who is in contact with the
            residual before naming who may answer it. Animal metacognition: decline
            the test when information is incomplete (opened world source, secondary).
LIMIT:      No figure line returns a numeric defer threshold, a fixed handoff count,
            or a named role that always decides. That is a declared gap of the
            shape-not-a-name kind, reported as unreached, not silence. At scale the
            audit stays flat only if each solution gets an independent second census.
```

---

## 1. The residual in effect terms

At a decision event the system holds a belief `b`, takes action `a`, predicts `Γ(b,a)` and observes `o'`. The residual is `R = |Γ(b,a) − o'|` per slot `s` (Symbols table :38-40; Formula step 1). The question asks which of two routes the system should take when `R` will not close:

- **Act independently.** Compose inside `closure(Γ)`, extend perception, refit a held term or mint a new one. This keeps the wall in place. Fig 6 :21: "MINT composes inside the closure and can never add an atom."
- **Seek human input.** Either range against a human who is the legitimate ground, or import a primitive from a human frame whose closure differs. Fig 6 :14 calls import "the only operator that moves the wall"; Fig 6 :25: "An import adds no atom to the world." What changes is the frame's access, not the world's inventory.

The effect difference is the point. Acting independently spends actions and keeps the frame's independence intact. Seeking human input can move the wall, but it spends the human frame's independence and can import a wrong atom at a cost above starting from primitives (Fig 6 :24). A system that treats the two as one dial with a right setting has already lost the signal that says which condition holds.

The residual is indexed per slot and must not be averaged. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13: "a global R near zero with one live slot residual is a legal state". A global confidence below a threshold can therefore coexist with one live slot that owes an import. That is the first structural answer to the question, and it is decisive against any single global "ask a human when confidence < t" rule.

---

## 2. Domain census before choosing any figure line

Describe `R` by arity, symmetry and scale, then one line per domain with actors, currency and anchor. No nameable anchor means it is not a domain yet.

**R by arity, symmetry, scale.** Arity: four conditions, not two opposite answers. A decision event can be inside the closure and merely unfound, can need a sharper instrument, can be constitutively about a person, or can need a primitive the frame does not hold. Symmetry: the relation between system and human is not symmetric. The human can be an anchor that does not update, a peer frame with a differing closure, or a seat that can refuse. Which one holds is not recoverable from the word "input" alone. Scale: first order inside one frame (per slot, one action), second order at the membrane between the system's closure and the human's closure (Formula step 6, Fig 4).

| domain | actors | currency | anchor | partition or union | dependency order |
|---|---|---|---|---|---|
| D1 The system's own closure | object slots, Γ, atoms, bonds, the seven operators and negation, `R⁺_s` | composition and settlement cost in bits and actions (Fig 12 :125-127) | the ground of the task, a measurement or outcome that does not move when the system thinks | partition boundary: what is in `closure(Γ)` versus what is not | first. SEARCHED before anything else (Formula step 7) |
| D2 Human as the legitimate anchor | human judge, system output, the person the answer is for | verdicts about whether an answer is good for a person | human judgment itself, legitimate because the question is constitutively about people (Fig 2 :36) | separate domain, not a subcase of D1 or D3; a union member with its own anchor | second. Before D3, because if the human is the ground there is no import to make |
| D3 Human as a differing-closure peer frame | the human's corpus, experience, instruments and ground contact, described in effect terms | an imported primitive with provenance, paid against independence | the ground still decides; the human frame is a witness, not the anchor | union, overlapping D1 on the residual and D4 on the seat | third. Only after SEARCHED and INWARD fail (Formula step 7, Fig 6 :29-30) |
| D4 The verification seat | the person assigned to oversee, refuse, override or stop; not the author of the claim | conventions authored, verdicts transmitted, never verdicts issued (Fig 10 :43-46) | the ground, never agreement; outside the slice being graded (Fig 10 :86) | union with D2 and D3: the same human can occupy two roles, so the roles must be kept separate | throughout, but its prohibitions are checked when the human is chosen, not after |

**Why four domains and not two.** A partition would require one question with two opposite answers. Fig 9 :4-5 says disagreements that do not shrink with effort, where each rule keeps working well on a different subset, "are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." D1 and D2 overlap when a system's own prediction concerns a person; D2 and D3 overlap when the human is both the anchor and a source of an atom; D3 and D4 overlap when the person who supplied the atom also grades it, which is a conflict of interest the figures name (Fig 10 :59-60). Overlaps are compounds with their own loop, so verdicts are kept per domain and never averaged.

**Strain test applied at census.** Reading Fig 2 :36-37 ("Human judgment is the right anchor for is this a good answer for a person") as "always ask a human first" strains the line, because the same passage continues that for "is this code correct" the human is "only an instrument" and "instruments can be wrong on axes they do not measure." A line that only fits with a strain governs another quantity. Re-census produced D2 and D3 as separate domains with different anchors. No figure was softened.

---

## 3. Figure census, quoted before concluding

| figure | bearing | verdict |
|---|---|---|
| Fig 1 | residual per slot, not aggregated; frame-internal quantities disqualified | any global defer threshold throws away the only signal |
| Fig 2 | anchor test, independence, correlation valence, human as anchor for constitutively human questions | the human is ground in D2 and a witness in D3; these are not interchangeable |
| Fig 3 | dependency chain ordered by function, break between vocabulary and objective | ask which link stops before asking whether to escalate |
| Fig 4 | methods cross up, head starts down, round trip gap | the decision procedure is a method; a replayed human answer is a recording |
| Fig 5 | four bins plus refuted, three guards as product, MDL bargain, direction limit | seek input on mechanism-broken or refuted, not on novelty |
| Fig 6 | import is the only wall-moving operator; source gate, shadow test, independence debit, inward/outward opposed | seeking human input is OUTWARD, with gates and a price |
| Fig 7 | room chain, agreement compounds, evidence does not | a committee of agreeable humans cannot settle the residual |
| Fig 8 | closure idempotent, union surplus, residual first frame second | more internal search cannot add what the frame lacks; describe R before choosing a human |
| Fig 9 | verdict, lookup, narrowing; describe the effect; filters not witnesses; unbundle unions | the question is a decision procedure, not a number; no ratio is licensed |
| Fig 10 | verifier non-access, stake declaration, convention versus verdict, room follows question | who gives the input is constrained by what they may see and own |
| Fig 11 | capability is agent-and-habitat, valence relative to residual, introduce not exclude, harness substitution | a human in the loop changes contact only if the habitat is reproduced, not substituted |
| Fig 12 | bond carries arrangement, plan/goal/progress/refutation, settled molecule becomes atom, two currencies | "when" is a comparison and "stop" is a negation; neither is a confidence scalar |
| Fig 13 | set closed, arrangements not; unreachable is a verdict; narrowing in effect terms | the specific threshold is a `gap`, stated as unreached, not invented |
| Operators table | ⋛ comparison, ¬ negation, goal is comparison, refutation is negation | the decision uses ordered operators, not a symmetric score |
| Symbols table | `R` is the aim, the ground is the anchor, a seat is defined by what it may see | no deferral rule can be grounded in a number the system also produces |

---

## 4. Findings

### F1 - The question is a union of four conditions, not one threshold (decisive)

Fig 9 :4-5: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55-56: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

A single confidence threshold is one lever. It can clear the region where only D1 holds (the answer is in the library and merely unfound), and it leaves every intersection standing: the constitutively human case where the human is the ground, the differing-closure case where an atom is owed, and the seat case where the person with the answer is the person being graded. Verdict: `specified`, triangulated across Fig 9 and Fig 1 (per-slot residual). Refuter: a demonstration that all four conditions collapse to one monotone quantity with one threshold that settles every slot; that would require the human's anchor status, the frame's closure boundary and the seat's prohibition to be one fact, which the figures keep distinct.

### F2 - Seek on a mechanism gap or a refusal, not on novelty

Fig 5 :10-14 names the bins: "held: the model was right, nothing owed", "new: extend perception, aim the probe here", "mis-attached: refit what you have, do not invent", "mechanism broken: a new term is owed". The amendment at Fig 5 :50-53 adds "refuted: a term we hold is wrong; a term is owed that says so". Fig 5 :33: "The three guards are a product, not a checklist." Fig 5 :41: "Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."

Novelty is the curiosity drive's bin, not the import bin (Fig 5 :15-18). A system that seeks human input whenever something is new will escalate on exactly the slots that an extended perception could resolve. Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing." Verdict: `specified`, single-source on the bin assignment (Fig 5), triangulated with Formula step 2. Refuter: a case where the only way to resolve a novel slot is an import and INWARD is shown to be impossible, which would move that slot into D3, not erase the bin rule.

### F3 - Order the three questions: SEARCHED, then INWARD, then OUTWARD

Formula step 7: "SEARCHED is it in here and unfound? ... Asked FIRST - it is cheapest and the other two assume its answer." Then "INWARD extend the instrument, from one already returning something. Sharpen in our own terms." Then "OUTWARD IMPORT. Characterize R in effect terms, then find the frame whose closure predicts its shape." Fig 6 :29-30: "inward: is our representation adequate to hold it? The instrument extends access." and "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." Fig 6 :31: "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."

"Seek human input" is the OUTWARD track. It is not the first question and it is not the answer to INWARD. Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." So if the atom is absent, SEARCHED will not find it; but if the atom is present and merely unfound, importing a human's answer would add an atom that was not needed, and Fig 6 :24 prices a wrong atom above starting from primitives. Verdict: `specified`, triangulated across Formula step 7 and Fig 6. Refuter: a case where an import resolves a slot that was provably in `closure(Γ)` and SEARCHED had swept it, with the import paid for by something other than a wrong atom; that would reverse the order claim.

### F4 - Human judgment is the ground for some questions and only an instrument for others (decisive for the field)

Fig 2 :36-38: "An anchor is legitimate when the question is constitutively about it. Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." and "If it moves when you push on it, it is not an anchor." Fig 2 :33-34: "The anchor must not update. If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

This is the one figure passage that is directly about human input. It forbids both blanket rules. "Always ask a human" treats the human as an anchor for "is this code correct," which the figure says is only an instrument. "Never ask a human" refuses the anchor for a question that is constitutively about a person. The decision therefore turns on what the question is about, and that is a classification of `R`, not a confidence score. Verdict: `specified`, single-source on the figure side (Fig 2 :36-38) but the most directly governing line in the whole set; world corroboration from automation-bias research is secondary and is recorded as such in `09_watson_answer.md`. Refuter: a measurement showing that human judgment moves when told the system's answer, on a constitutively human question, and still settles it; that would break the anchor test.

### F5 - An import needs a source gate, a shadow test, and an independence debit

Fig 6 :9-14: "external source", "nature · corpus · peer frame", "IMPORT", "source gate: provenance", "shadow test: explains a gap", "the only operator that moves the wall". Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 6 :24: "Import from a live peer is debited against that frame’s independence. A wrong atom costs more than starting from primitives." Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."

So "seek human input" is not satisfied by receiving an answer. The provenance of the answer (where this person's judgment came from, what ground contact it has) and its shadow test (does it explain the residual that was described) are part of the import. Once the human's answer is adopted, the human frame's independence is spent for that check; later agreement from the same person is one witness, not two. Verdict: `specified`, triangulated across Fig 6 and Fig 8. Refuter: a case where an unprovenanced human answer nonetheless moves the wall and passes a source-discriminating instrument; that would show the source gate is a convention rather than a structural requirement.

### F6 - Describe the residual before choosing the human, or any human will seem to fit

Fig 9 :26-28: "R's own predicates name the habitat that holds φ*", "describe it before you go looking, or any frame you pick will seem to fit". Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause". Fig 8 :53: "Residual first, frame second." Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 11 :43-44: "The habitat is enumerated, never composed. List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

The operational consequence is that the system must state what would have to be true of a human frame before it contacts one: which atom, which ground contact, which closure difference. Otherwise the selection is an authored room (Fig 10 :73-75) and the result is a preference dressed as a verdict. Verdict: `specified`, triangulated across Fig 9, Fig 8 and Fig 11. Refuter: a search that names a specific human frame first and still yields a checkable import whose shadow test was written before the frame was chosen; that would dissolve the order claim.

### F7 - The human who may answer is constrained by what they may see and own

Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." Fig 10 :43-44: "Soundness requires the checker to be unable to produce what it is checking. Never a player, never a proxy, never the author of a verdict or an atom. It transmits verdicts and issues none." Fig 10 :86: "Outside the slice being graded. Whoever is measured by a reading cannot own it." Fig 10 :58-60: "A seat with no stake at all does not exist. The condition is that nothing about which value the ground returns today serves the occupant: an interest in the outcome is unavoidable, an interest in the reading is disqualifying." and "Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged." Fig 10 :47: "a convention that decides an outcome has stopped being one".

This governs D4 and creates a real conflict with D3: the person whose differing closure supplied the missing atom is often the person most able to reconstruct the claim, and therefore disqualified from verifying it. The import and the verification must be separated into different seats. An "interest in the outcome" is unavoidable and allowed; an "interest in the reading" is disqualifying and must be declared. Verdict: `specified`, triangulated across Fig 10 and the Symbols table seat definition. Refuter: a case where the importer also verifies and the verification still passes a source-discriminating instrument; that would show non-access is not required for soundness.

### F8 - Agreement among humans is not the ground

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :39-41: "Correlation has valence." / "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" / "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it". Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Fig 7 :35-36: "A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes." and "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

So the number of humans consulted, and their agreement, are filters for the budget and never witnesses for the verdict (Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict"). Independence is bought in proportion to the cost of being wrong, which connects the "when" decision to the cost of the specific slot rather than to a global risk appetite. Verdict: `specified`, triangulated across Fig 2, Fig 7 and Fig 9. Refuter: a case where two humans share an evidence pool and their agreement still moves the ground; that would collapse the distinction between a convention and a verdict.

### F9 - A human in the loop changes contact only if the habitat is reproduced

Fig 11 :39-40: "capability is a property of agent-and-habitat, never of the agent alone." and "An improvement that does not change contact changes nothing, however much it improves." Fig 11 :66-69: "Isolation is not removal of the habitat. It is substitution of one habitat for another." and "what you failed to reproduce is invisible until the goal fails" / "what you unintentionally introduced is invisible until it acts". Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 11 :49-51: "An actor’s valence is relative to the residual, not a property it carries." / "The same actor is a benefactor to one residual and a malfactor to another" / "No standing list of good actors survives a change of residual."

So adding a human to the loop is not automatically an increase in capability. If the human is a harness, a reflection button, or a person who cannot see the residual, the habitat was substituted and the test proves wiring. If the human changes contact with the ground at the live slot, capability changes. Valence is relative to the residual: the same overseer is a benefactor to one slot and a source of automation bias to another. Verdict: `specified`, triangulated across Fig 11 and Fig 2. Refuter: a controlled deployment where adding a non-ground-contact human improves settled outcomes on a live slot; that would refute the contact claim.

### F10 - The specific "when" number is a declared gap, not silence

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence". Fig 13 :136-139: "It can say the question is not one question and must be split before it is searched again. It can characterise what is missing in effect terms, which is the description that travels to a frame that may hold it. And it can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again." Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line returns a universal confidence percentage, a fixed number of handoffs, a latency budget, or a named role that always decides. Those are deployment parameters that need a local ground. The figures return: the per-slot residual, the route through three questions, the anchor test, the import gates, and the seat constraints. That is a decision procedure and a shape. Verdict: `gap` of the shape-not-a-name kind, reported as unreached rather than unreachable in principle. Refuter: a figure line that does return a numeric threshold after a genuine re-census; if found, this gap should be closed by quoting it, not by estimating a number.

---

## 5. Pre-registered refuter (written before the conclusion)

Required before any outreach, per Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device."

The four-domain decision shape is refused if any of the following holds:

1. All four conditions collapse to one monotone quantity with one threshold that settles every slot across deployments (would break F1 and Fig 1 per-slot residual).
2. A case shows human judgment moving when told the system's answer and still settling a constitutively human question (would break F4 and the anchor test at Fig 2 :33-34).
3. An import with no source gate and no shadow test moves the wall and passes a source-discriminating instrument (would break F5).
4. The importer also verifies and the verification still passes non-access (would break F7 and Fig 10 :42).
5. Adding a human with no live ground contact improves settled outcomes on a live slot in a controlled deployment (would break F9 and Fig 11 :40).
6. A figure line is found after re-census that returns a universal numeric defer threshold (would close F10).

If any fires, the shape is withdrawn or narrowed and the retraction table below is extended. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Route per slot, never per global confidence (F1, Fig 1 :19/:22). Keep a live-slot signal even when the global residual is near zero.
2. Classify the question before choosing a human: is the human the anchor (constitutively about a person) or a witness with a differing closure (F4)? These have different anchors and different failure modes.
3. Run SEARCHED, then INWARD, then OUTWARD in that order (F3). Escalation is the last question, not the first.
4. When escalating, characterise R in effect terms before picking a person (F6), and require source gate, shadow test and an independence debit (F5).
5. Separate the importer from the verifier (F7). Bring a characterised residual, never the source (Fig 10 :52).
6. Count agreement as a budget filter, never as a witness (F8). Buy independence in proportion to the cost of being wrong.
7. Check that the human changes contact at the live slot; do not count a harness or a reflex button as capability (F9).
8. State the gap plainly (F10). Do not invent a threshold the figures do not return.
9. Send the generator, not a recording: the procedure, the refuter and the lineage (Fig 4 :25).

---

## 7. Canonical usage check

Two local sources were read after the first six sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the limit that the framework reports "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. Design questions are answered by derivation, not by escalation to an authority.

### Retractions and confirmations

| earlier finding | status after the canonical check |
|---|---|
| F4 read as "always ask a human" | **Retracted, kept visible.** The canonical anchor test makes the human the ground only for constitutively human questions. The blanket reading strained Fig 2 :36-38 and sent the audit back to census, producing D2 and D3. |
| "Seek input on novelty" | **Retracted.** Novelty is the curiosity bin (Fig 5 :15-18); the import bin is mechanism-broken or refuted. The correction is recorded in F2 rather than erased. |
| "Agreement of several humans is corroboration" | **Refused.** Fig 2 :40 and Fig 7 :35-36 make agreement a convention or a mirror unless the frames range separately against the ground. |
| "Shape, not a name forbids naming the human's role" | **Narrowed.** The README's phrase governs a *missing* primitive. Naming D2, D3 and D4 is classifying anchors and seats that the figure text already names; it is not inventing a seventh term. The specific numeric threshold remains a genuine gap. |
| Apparent conflict Fig 2 (human is anchor) versus Fig 6 (human is import) | **Not strained.** Re-census: Fig 2 :36-38 governs questions constitutively about people; Fig 6 :9-14 governs an external source for a different closure. Different objects, same framework. Matches the README re-census rule. |
| Apparent conflict Fig 11 (capability is agent-and-habitat) versus Fig 6 (import moves the wall) | **Not strained.** Fig 11 governs what changes contact at a slot; Fig 6 governs what moves the closure boundary. An import can move the wall without changing contact. Both are kept. |
| F10 numeric threshold | **Canonically confirmed as a gap.** The README says "a shape, not a name" and Fig 13 :134 says unreachable is a verdict. Reporting a number here would be the named output-layer failure genus. |

### Round trip note

Condensing the figures into "route the residual and escalate last" loses three constraints that must be re-checked on the way back down: the per-slot indexing (Fig 1 :19), the anchor versus witness distinction (Fig 2 :36-38), and the source gate plus shadow test (Fig 6 :12-13). The full round trip gap `R_T` is measured in `11_audit.md`. Treating the shorthand as identical to the figures would be the dead-reckoning error Fig 4 :30 names.

### Updated verdict

The four-domain shape survives after canonical check: per-slot routing, classify the anchor, SEARCHED then INWARD then OUTWARD, gated import, separated seats, contact tested at the live slot. The blanket rules (always ask, never ask, ask whoever agrees) do not survive. One live gap remains, the universal numeric threshold, reported as unreached rather than silence. Strains after re-census: none hidden, two dissolved and preserved above. No measurement was taken, so the verdict stays `specified`, ungrounded, candidate.
