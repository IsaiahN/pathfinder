# Figure-grounded audit: HIS-0019

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the magnitude and universal sign of the trust change. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Figure source.** Every quoted string attributed to a figure is an exact substring of `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Quotes from `THE_FORMULA.md`, the seat map and the essays are labelled as those sources and are not presented as figure lines.

---

## 1. The residual in effect terms

**Observation to be explained.** A respected institution, meaning a frame that the public treats as a reliable reference for some knowledge domain, makes a public error that the ground later confirms. Afterwards, measured trust changes, not only in that institution and that domain, but in other institutions and domains that had no direct contact with the error. The question asks how the first change produces the second.

**Stated as a per-slot residual.** Let slot `s` be a knowledge domain together with the frame that is trusted to range against its ground. The prior belief is `b = "frame F reliably ranges against ground G at slot s"`. The action is F issuing a claim. The observation `o′` is the ground returning a result that refutes the claim. The residual is

```
R_s = |Γ(b,a) − o′|   for each slot s, never as one global number.
```

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Symbols table :38-40: "The gap between prediction and observation. The central quantity: everything the system does is driven by it."

**What is actually puzzling.** The error is local. The trust change is reported as broad. The residual is the gap between those two facts. It has three parts, and they are different questions:

1. What changes at the slot where the error occurred? (Institution trust.)
2. What governs how far the change propagates to other slots? (The "more broadly" part.)
3. Does the ground for knowledge change when trust changes, or does something else change? (The status of knowledge itself.)

An answer that gives one number for "public trust in knowledge" has already aggregated away the only signal that could answer (2). Fig 9 :4-5: "are not one hard question but several well-formed ones. Split it rather than search."

**Binding the sought-for shape as an ordinary term, before the run.** Following the "Direction" discipline in `THE_FORMULA.md`, I write down what an answer would look like so it can accrue a residual like anything else. The answer shape I am testing is:

> The trust change is a **per-slot reclassification of a frame that had been granted anchor standing**. Its propagation radius equals the overlap radius of the evidence pools that had been treated as independent. What falls is the reachable standing of the frames, not the ground. A clean refusal lowers reach; an explanation without refusal only accumulates. No figure returns the magnitude or the universal sign of the change.

This shape is now a term in the library and can be refused. The pre-registered refuter is in section 5.

---

## 2. Domain census

I describe R by arity, symmetry and scale before naming any figure line, then give one line per domain with actors, currency and anchor. A candidate with no nameable anchor is not a domain yet.

### 2.1 R by arity, symmetry and scale

- **Arity.** At least three-place: institution, ground-refuted claim, and a trust reading per knowledge slot. Indexed by slot and ordered in time, because the error precedes the change.
- **Symmetry.** "Trusted" and "more trusted" are threshold readings, not additive quantities. Fig 12 :87: "a threshold relation between two quantities". The causal claim "error changes trust" is ordered, not symmetric: it uses sequence or production, not conjunction. Fig 12 :89: "is it about which is larger, rather than both being present? Yes."
- **Scale.** First order inside the institution's own loop (a prediction meets a ground). Second order across the peer field and the public narrative (one frame's error is read as a statement about a class of frames). A third scale, the time channel, governs whether the reading persists or decays. Fig 4 :19-20: "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand."

### 2.2 One line per domain

| id | domain | actors | currency | anchor | status |
|---|---|---|---|---|---|
| D1 | The institution's own epistemic loop | the institution, its statements, its staff, its reward system, its reputation | verdicts and the credibility it pays to issue them | the ground for the claim: measurement, experiment, outcome, patient, market. It must not update on what the institution thinks (Fig 2 :29, :33) | admitted |
| D2 | The peer verification field | other institutions, journals, replication teams, funders, outside critics | independence versus overlap: how much of the same evidence each draws on | the same ground, reached separately by each frame | admitted |
| D3 | The public trust channel | the public, media narrators, survey instruments | contact with the ground through trusted frames, plus the narrative that frames a single error | the ground of knowledge, which does not decay; the channel does (Fig 10 :24) | admitted |
| D4 | The correction and refusal mechanism | the mint/refuse machinery inside and outside the institution, outside seats able to refuse | terms added and reach gained or lost | the ground settles; a refusal is a negation, not an explanation | admitted |

**Candidates that are not domains yet.**

- **X1, "public trust in knowledge" as one global stock.** Actors: none nameable. Currency: one aggregate percentage. Anchor: none. There is no instrument that settles one global trust quantity; surveys ask about scientists, medical scientists, universities, journals, government and the military as separate items. Not a domain. Absorbed into D3 as many per-slot readings (Fig 1 :19, :22).
- **X2, "science is broken" as a free-floating cause.** Actors: none nameable. It is a narrative frame inside D3, not an independent mechanism. Absorbed.

### 2.3 Partition or union

This is a **union**, not a partition. D1 (where the error originates), D2 (the overlap radius), D3 (the channel and the narrative) and D4 (the correction or refusal) are overlapping conditions. A single lever clears only the region where one condition holds and leaves the intersections standing.

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Consequences: an apology may help where D4 is the binding condition and do nothing where D2 (shared evidence pools) is binding; a retraction may repair the record and leave the channel broken; a new oversight body may add an atom where D4 is binding and be only re-arrangement where D1 is binding. These are separate levers for separate conditions, and no average of them is a verdict.

### 2.4 Order by dependency (Fig 3)

1. **Perception:** can the public see that an error occurred and that the ground returned a different result? Perception has obvious failures and obvious tests.
2. **Vocabulary:** does the frame have a term for "independent correction" distinct from "the enterprise is broken"? This is the middle link that has neither obvious failures nor obvious tests. Fig 3 :25-26: "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."
3. **Objective:** what would count as restored trust? Regained contact with a non-updating ground, or merely regained agreement? These are different objectives.
4. **Planning:** what response is chosen, given incomplete information about the public's evidence pool.
5. **Learn and carry:** what the correction stamps with origin and date so a later reader can locate the error (Fig 10 :62-64).

Effort spent at step 4 or 5 cannot rescue a break at step 2 or 3. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

---

## 3. Figure census

The figures were read before any conclusion was written. Strained readings are named in section 4 and resolved in section 7, not smoothed over.

| figure | bearing on this question | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; credibility is frame-internal | trust change is per slot, never one global average |
| 2 The Ground | anchor must not update; independence; correlation has valence | an erring institution was a frame granted anchor standing; spread equals overlap |
| 3 Dependency Chain | the middle link has no instrument | the vocabulary and objective links are where the chain breaks |
| 4 The Membrane | methods cross, recordings do not; round-trip gap | a correction is a method and a head start, not a replay of a good occasion |
| 5 Mint Pipeline | the fifth gap kind, refuted; refusal is a negation | the error owes a refusal, not an explanation |
| 6 Closure / Reachability | import moves the wall; refutation lowers reach | reform inside the same closure adds no atom |
| 7 Room Chain | agreement is variation; a chain of mirrors is one long room | self-correction is visible selection of a differing room, not the mere occurrence of an error |
| 8 Union Surplus | independence is one quantity read twice; provenance | shared pools make trust fall together; convergence and adoption need the record |
| 9 Leave / Arrive | union before search; describe before looking; filters not witnesses | unbundle; the magnitude is a filter, not a witness |
| 10 Ground Maintainer | ground does not decay; channel does; standing is a stake; outside seat | trust is a channel reading; a reputation to protect disqualifies as ground |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; contact cascades | a trusted institution is a frame in a habitat, not a free-floating property |
| 12 The Bond | thresholds, typed bonds, isomers, catalyst, functional group | "trust" is a threshold over different quantities; the error and the repair are different orders |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | no figure returns a trust coefficient; report a gap |
| Operators table | refutation is a negation, a unary operator; vocabulary without it only accumulates | the refusal requirement is an operator requirement |
| Symbols table | R is per slot; the ground is the anchor | confirmation of the per-slot and anchor readings |

---

## 4. Findings

Each finding gives verbatim figure lines first, then the reading, the mode, and a refuter. Verdicts are kept per domain and never averaged.

### F1. The error reveals that a frame had been granted anchor standing (D1)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."

Fig 2 :29-30: "If it moves when you push on it, it is not an anchor."

Fig 2 :33: "The anchor must not update."

Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

Fig 2 :47: "A ground listed as one of the parties has already become a frame. Which is panel 1, arrived at by a different route."

**Reading.** The ground for a knowledge claim is the outcome, the measurement, the patient, the market. The institution is the frame that ranges against it. When a public treats the institution itself as the thing that cannot be wrong, it has put a frame in the anchor position. A mistake is the moment that reclassification becomes visible. The trust change is not primarily a loss of belief in one proposition; it is the frame moving from the anchor column back to the frame column. This is why the change can feel like a change in "knowledge more broadly": the public had been using the institution as its ground, and now has to find the ground again. Mode `general` for the reclassification, `specified` for the institution case. Triangulated across Fig 2 (anchor rule) and Fig 10 (standing as stake, F2).

**Refuter.** An institution whose answer demonstrably moves with the ground under independent pressure (so it was not granted anchor standing), which nevertheless produces a ground-refuted error and suffers a trust collapse identical in sign and per-slot pattern to an anchor-standing institution. That would weaken the reclassification mechanism. Also refuted if the public never treated the institution as an anchor and the error was read from the start as one frame being corrected.

### F2. Standing is a stake that survives the outcome it was earned on (D1)

Fig 10 :61: "And standing is a stake that survives the outcome it was earned on."

Fig 10 :93: "A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified."

Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying."

Fig 10 :60: "Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged."

Fig 1 :26-27: "predicates minted, and credibility accrued" and "They are frame-internal. A frame cannot score itself with a quantity it also produces."

**Reading.** The more respected the institution, the more of its authority is "credibility accrued", which Fig 1 names as a frame-internal quantity. A frame cannot score itself with a quantity it also produces. So a highly respected institution has more to lose from an error, not because knowledge changed but because the error exposes a self-scoring loop. This predicts a per-slot asymmetry: trust loss should be larger where the institution's standing was larger, and smaller where its claims were already publicly checked against outcomes. The correct move is to declare the stake (Fig 10 :60), not to assert that the institution is neutral. Mode `specified`. Triangulated across Fig 10 and Fig 1.

**Refuter.** A respected institution with a fully public, independently checkable, error-correction record whose per-slot trust is unaffected by a ground-confirmed error; or a measured case where the size of the trust loss is independent of prior standing and independent of whether claims were publicly checked.

### F3. The "more broadly" spread is governed by overlap, not by the content of the error (D2)

Fig 2 :31-32: "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."

Fig 8 :47: "Independence is one quantity read twice."

Fig 8 :48-49: "Two frames that overlap almost completely are one frame wearing two names."

Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"

Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

Fig 7 :12-13: "same closure, handed along;" and "agreement compounds, evidence does not"

Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."

**Reading.** If the public had been reading a set of institutions as independent confirmations, and the error reveals that they all draw on one evidence pool, then trust falls across all of them at once. The "broad" decline is the radius of the shared pool, not the reach of the mistake. This is Fig 2's common-cause collapse: they never talk and still agree, so the agreement is the pool talking. Conversely, where frames genuinely range against the same ground separately, one frame's error is one frame corrected; trust in that frame falls while trust in the method can hold or rise. The two outcomes are different per-slot verdicts, not a single averaged one. Mode `general` for the structure, `specified` for the public sphere. Triangulated across Fig 2, Fig 8 and Fig 7.

**Refuter.** A single institution's error producing a broad, uniform trust decline while all other institutions demonstrably draw on independent evidence and no shared-pool revelation occurs; or a shared-pool institution erring with no spread to its pool partners. Either result would break the overlap prediction.

### F4. Trust in knowledge is per slot, and aggregation hides the live signal (D1 to D3)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Fig 9 :4-5: "are not one hard question but several well-formed ones. Split it rather than search."

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

**Reading.** At least five slots must be kept separate: trust in the specific institution; in the field it covers; in peer institutions that share its pool; in the method (science, history, medicine) as a generator; and in the ground itself, which does not move by definition. A single "public trust in knowledge" percentage mixes these and therefore cannot tell us which condition is binding. The world measurement literature agrees that direct single-item trust measures are a poor substitute for discrete trustworthiness judgments; that is a world corroboration, not a figure line (see `09_watson_answer.md`). Mode `general` for the indexing rule. Triangulated across Fig 1 and Fig 9.

**Refuter.** A measured case in which trust changes after one error are exactly proportional across all five slots, with no differential by prior standing or pool overlap, repeated across several errors and cultures. That would make the aggregation harmless and weaken the per-slot finding.

### F5. The ground does not decay; the channel does (D3)

Fig 10 :24: "the ground does not decay, the channel does"

Fig 10 :25-26: "stale percepts, dropped transients, saturated metrics, pooled readings"

Fig 10 :27-28: "the output is not a verdict, it is you have lost touch"

Fig 10 :29: "→ keep the anchor reachable"

Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

**Reading.** A fall in trust is not a fall in the amount of knowledge, and it is not a verdict about the corpus. It is a "lost touch" reading: the public can no longer distinguish which frame is ranging against the ground and which is reporting from a pool. "Pooled readings" is named as a channel failure in Fig 10 :26, which is exactly the common-cause condition of F3 seen from the public side. What is owed is to keep the anchor reachable, meaning public access to the outcome, the measurement and the independent check. Mode `specified`. Triangulated across Fig 10 and Fig 2.

**Refuter.** A case where trust declines while independently measured contact with the ground (replication rate, predictive success, patient outcome) rises or holds constant AND the public has access to that measurement. If trust falls when contact is demonstrably healthy and visible, the channel reading is weakened.

### F6. An error owes a refusal, not an explanation (D4)

Fig 5 :50: "AMENDMENT · the gap has a fifth kind, and the pipeline has no branch for it."

Fig 5 :51-52: "The four kinds sort a gap by what is missing. None of them sorts a gap by what is wrong. A residual whose content is that a regularity the system holds is false owes a term, and the term it owes refuses another rather than explaining a gap."

Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so"

Fig 5 :55: "What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."

Fig 6 :42-43: "What is recorded only grows. What is reachable is derived, and it can fall. A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted."

Fig 5 :43: "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."

Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate"

**Reading.** The error is a REFUTED gap, the fifth kind in Fig 5. The term owed is a refusal (¬), which is a unary operator and not one of the seven bonds. A refusal lowers the reach: the institution loses its standing to be composed over, while nothing is deleted from the record. An institution without the refusal operator can only accumulate justifications; "a term that explains one occasion perfectly" fails the bargain. This predicts that responses which explain without refusing will convert a competence error into a second, integrity-level failure, and that responses which refuse will lower the standing of the specific claim without erasing the institution's other settled contributions. Mode `specified`. Triangulated across Fig 5, Fig 6 and the Operators table.

**Refuter.** A ground-refuted institution issues a clean, specific refusal and its standing to be composed over does not fall in any slot, while its other terms remain composable; or the reach rises because the refusal was added. That would break the "reach falls" prediction. Also refuted if a vocabulary with no negation is shown to refuse correctly.

### F7. Self-correction is a visible selection of a differing room, not the mere occurrence of an error (D3 and D4)

Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

Fig 7 :37-39: "Progress per handoff has two factors. Zero either and the chain runs in place:" and "the bracket’s fidelity across the handoff" and "the ground’s pressure on the room"

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

**Reading.** What governs trust after an error is not that an error occurred but whether the public can see a next room that differs from the last and was selected against the residual the error surfaced. If the only visible response is the same institution explaining itself, the chain is a chain of mirrors and runs in place; trust in the institution and in the method fall together. If a differing frame is visibly selected and the ground votes, the two verdicts separate: trust in the specific institution falls while trust in the method can hold. Fig 8 :39 matters because a search that finds no error after a correction does not prove the correction worked; the room must still be checked against the ground. Mode `specified`. Triangulated across Fig 7, Fig 2 and Fig 8.

**Refuter.** A case where a visibly independent, ground-checked correction occurs and trust in the institution, its field, its peers and the method all fall by the same amount with no separation; or a case where a pure self-explanation preserves method trust while institution trust falls. Either would weaken the room-selection reading.

### F8. No figure returns a magnitude or a universal sign: declared gap (all domains)

Fig 9 :32: "you get a kind of thing, never the answer itself"

Fig 13 :134: "Unreachable is a verdict here, not a silence,"

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

**Reading.** After a genuine re-census there is no figure line that returns the size of the trust change, its sign in a given culture, or a universal law of propagation. The figures return the shape: per-slot, union, governed by overlap, channel rather than ground, refusal rather than explanation. A trust percentage is a filter for the budget (which venues to try, how much independence to buy), never a witness for the verdict. This is a `gap` in the strict sense, reported as unreached rather than as silence. Mode `general`. `single-source` on the gap verdict only if one insists on Fig 9 alone; it is triangulated across Fig 9, Fig 13 and Fig 8.

**Refuter.** A figure line that returns a numerical trust coefficient or a universal sign, or a ground measurement from a source-discriminating instrument that settles the coefficient across slots. Until one of these fires, the magnitude stays open.

### F9. Real repair is an import with provenance and a shadow test; internal re-arrangement adds no atom (D4)

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

Fig 6 :14: "the only operator that moves the wall"

Fig 6 :12: "source gate: provenance"

Fig 6 :13: "shadow test: explains a gap"

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."

Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."

Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

**Reading.** A genuine correction imports a new atom: an independent verification instrument, a public checkable record, an outside seat able to refuse. It needs a source gate (where did this come from) and a shadow test (does it explain the gap). A new mission statement, ethics training or an internal review board that remains inside the institution's closure is re-arrangement; it does not add an atom, and it does not change contact. Fig 11 :40 says an improvement that does not change contact changes nothing. This predicts which "reforms" will move trust and which will only produce activity. Mode `specified`. Triangulated across Fig 6, Fig 8 and Fig 11.

**Refuter.** A case where a reform invented entirely inside the institution's closure demonstrably added a new discriminating atom (a new instrument that returns readings the old closure could not represent), changed contact, and restored trust across slots. That would break the import requirement.

### F10. The verifier must stay outside; the residual goes first (D3 and D4)

Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."

Fig 10 :43-44: "Soundness requires the checker to be unable to produce what it is checking. Never a player, never a proxy, never the author of a verdict or an atom. It transmits verdicts and issues none."

Fig 10 :52: "Bring a characterised residual, never the source."

Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying."

Fig 2 :41: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"

**Reading.** A public that has absorbed the institution's full account before being asked for a verdict has joined the frame being checked and can no longer verify it. This is a structural constraint on how the question can be studied and on how a correction can be communicated: present the error and the refuter first, record the verdict, then offer the theory. It also explains why "shared meaning" communications can raise agreement (efficient for a convention) while leaving the per-slot trust readings unchanged (worthless as a verdict). Mode `general` for the constraint, `specified` for the outreach procedure. Triangulated across Fig 10 and Fig 2.

**Refuter.** A case where leading with the full theoretical account produces better per-slot discrimination and better ground contact than leading with the residual and a refuter, across independent frames. That would reverse the ordering rule.

---

## 5. Pre-registered refuter

Written before the conclusion and before any world search was used to settle the verdict. "A falsifier written before the run is a design instrument." The shape claim in section 1 is refuted if any of the following holds:

1. **Per-slot failure.** One global trust stock is shown to move as a single quantity across all knowledge slots with no differential by prior standing or evidence-pool overlap, in repeated cases (breaks Fig 1 :19, :22 and F4).
2. **No separation of verdicts.** An error is corrected by an unmoved ground with visibly independent peer frames, and trust in the institution, its field, its peers and the method all move together with no separation (breaks F1, F3, F7).
3. **Refusal without reach loss.** A clean, specific refusal by a ground-refuted institution is followed by no loss of standing to be composed over in any slot, while its other terms remain composable (breaks Fig 6 :42-43 and F6).
4. **Internal repair works.** A reform with no import from a differing closure adds a new discriminating atom, changes contact and restores trust across slots (breaks Fig 6 :23 and F9).
5. **A figure returns the number.** A figure line is found that returns the magnitude or the universal sign of the trust change (breaks F8).
6. **Contact inverse.** Trust is observed to fall most where the public has the most independent, ground-reaching verification available and can see it (breaks F5 and F9).

Any firing sends the derivation back to the domain census, never to a softer reading. The world sources cannot flip the verdict; a conflict between a world source and a figure line returns us to section 2.

---

## 6. Recommendation, per domain, never averaged

- **D1, institution.** Reclassify from anchor to frame. Trust in the specific institution should fall to the level its maintained contact with a non-updating ground warrants, and its stake should be declared. Verdict `specified`, triangulated (Fig 2 + Fig 10).
- **D2, peer field.** The propagation radius is the overlap radius. Trust falls together where pools are shared; errors stay local and can strengthen method trust where frames range separately. Verdict `general` structure and `specified` for publics, triangulated (Fig 2 + Fig 8 + Fig 7).
- **D3, channel.** A trust drop is a lost-touch signal, not a verdict about knowledge. The ground does not decay. Verdict `specified`, triangulated (Fig 10 + Fig 2).
- **D4, correction.** Owe a refusal, not an explanation. Import a new atom with provenance and a shadow test. Keep an outside seat able to refuse. Verdict `specified` and `general`, triangulated (Fig 5 + Fig 6 + Fig 10).
- **Magnitude and universal sign.** Declared `gap` (F8). Report unreached, not silence. Do not manufacture a coefficient.

Practical ordering: describe the residual and the refuter before offering any theory (Fig 10 :52); unbundle the union before choosing a lever (Fig 9 :54-55); buy independence in proportion to the cost of being wrong (Fig 2 :42).

---

## 7. Canonical usage check

Two sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them" and "the quotes are the authority, not this summary." It also states the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw," and the limit: the framework returns "what a missing thing would have to look like (**a shape, not a name**)" and stops where instruments can no longer distinguish, recording the lineage.
- `FRAMEWORK/figures/THE_FORMULA.md`: the mode rule, the five route bins including REFUTED ("a term held is false; what is owed is a refusal, not an explanation"), the three guards as a product, the round-trip gap `R_T`, and the "Direction" discipline that makes the sought-for shape an ordinary term.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "a mistake destroys knowledge" | **Retracted.** Fig 10 :24 says the ground does not decay; the channel does. What changes is contact and standing, not the ground. |
| "the error causes one global collapse of trust" | **Retracted.** Fig 1 :19 and :22 forbid aggregating. The union is unbundled into five slots in F4. |
| "the broad decline is a second, separate cause" | **Retracted.** It is the same independence parameter read twice (Fig 8 :47): the overlap of evidence pools governs both whether agreement means anything and how far the trust change spreads. |
| "an apology or a retraction is a repair" | **Narrowed.** A retraction is a refusal only if it actually refuses the held term (Fig 5 :53). An explanation without ¬ only accumulates (Operators :58). An import from a differing closure is still required (Fig 6 :23). |
| "the institution was the ground and has now failed" | **Corrected.** The institution was a frame granted anchor standing (Fig 2 :29, :33, :47). The ground is the outcome. This is a reclassification, not a failure of the ground. |
| apparent conflict Fig 2 :47 (a ground listed as a party has become a frame) versus Fig 2 :29 (a patient outcome can be an anchor) | **Not strained after re-census.** Fig 2 :47 governs an institution that enters the disagreement as a party; Fig 2 :29 governs the outcome itself. Different objects. Matches the canonical re-census rule. |
| apparent conflict Fig 2 :34 (coherent drift when the anchor updates) versus Fig 10 :24 (the ground does not decay) | **Not strained after re-census.** Fig 2 :34 governs a frame in the anchor position that updates on other frames; Fig 10 :24 governs the ground, which cannot update. The institution in D1 is the former, never the latter. |
| "shape, not a name" forbids naming a trust instrument | **Narrowed.** The canonical phrase governs a *missing* primitive. Naming an available verification instrument is a binding from the world frame, provenanced as such, not the invention of a new primitive. See `05_what_shape_means.md` section 6. |
| magnitude of the trust change | **Confirmed as a gap.** Fig 9 :32 and Fig 13 :134. Unreachable is a verdict, not a silence. |

### Round-trip note

Condensing the figures into the four-line shape in section 1 loses at least three constraints: the typed refusal operator (¬ is unary, not a bond), the source gate and shadow test on any import, and the per-slot indexing. The condensation is a generator with a nonzero `R_T`, not an identity. `11_audit.md` enumerates the dropped constraints.

---

## 8. Sources used in this file

Local framework primaries: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the Operators and Symbols tables in the figure extract. World sources are not used to settle any verdict here; they are recorded in `10_source_ledger.csv` and used only in `04_links_and_distribution.md`, `05_what_shape_means.md` and `09_watson_answer.md`.
