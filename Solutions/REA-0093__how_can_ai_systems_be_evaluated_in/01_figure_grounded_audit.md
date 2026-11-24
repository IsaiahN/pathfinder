# Figure-grounded audit: evaluating AI systems in real environments

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: SIMULATED DERIVATION, NOT A GROUND READING.** By *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources for figure lines:** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim extract with line numbers) and `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. Every figure quote below was reopened and checked against those files on 2026-11-24.

---

## 0. The residual under audit

**Question as given:** How can AI systems be evaluated in real environments where outcomes are delayed, ambiguous, and influenced by human behavior?

**Residual in effect terms.** A decision maker must decide whether to keep, change or stop an AI system when the thing that matters (a harm avoided, a benefit delivered, a user's welfare, an institutional effect) arrives late, is not single-valued, and is partly produced by how people respond to the system itself. Write the evaluation score as the prediction `Γ(b,a)` and the real-world outcome as the observation `o'`. Then `R = |Γ(b,a) − o'|` per slot `s`, where a slot is a use case, a population, a site, a time window, or an affected party. The effect to explain is this: why can the global score look healthy while a live slot residual persists, and why does closing that gap require more than a better score?

**What an answer would look like (bound as an ordinary term, per the Formula's "Direction").** Call the sought-for shape `E*`: an evaluation protocol that (i) names an outcome anchor that does not move when the system optimises toward it and that is legitimate for the question, (ii) reports residual per slot rather than as a global average, (iii) enumerates the human and institutional habitat that acts on the residual, including the system as an introduced actor, (iv) keeps at least two low-overlap instruments ranging against the same anchor, and (v) records the round trip gap between the score and the field outcome. Binding `E*` as a term makes it refusable by the same test as anything else (Formula "Direction"; Seat Map :192).

**Option A versus option B.** A: treat the benchmark score as the answer and improve it. B: treat the score as a head start, find the legitimate anchor, and measure per-slot residual against it. A leads to a frame scoring itself with a quantity it also produces. B leads to a checkable shape and an open verdict until the field settles it.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.** Arity: at least three conditions in contact (delay, ambiguity, human response), so a **union compound**, not one hard question. Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** Symmetry: the score and the outcome are not interchangeable. The score is an instrument; the outcome is the anchor when it is legitimate (Fig 2 :36). Scale: the score is computed inside one frame at one scale; the outcome arrives after the habitat has changed at another scale (Fig 11 :52-53, Fig 4 :19-20).

**One line per domain. A domain needs actors, a currency and a nameable anchor.**

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1 Evaluation frame | benchmark designers, leaderboards, model builders, metric code | scores, coverage, compression, credibility | none legitimate for the real-environment question; the score is frame-internal (Fig 1 :27) | not a verdict domain yet; a habitat actor and a head start |
| D2 Deployment habitat | users, institutions, affected third parties, the system as introduced actor, conditions (time, incentives, law) | actual outcomes, harms, benefits | the outcome that is constitutively at issue, when measurable and held fixed (Fig 2 :36) | union member; its own loop with delay |
| D3 Verification frame | external auditors, field studies, independent instruments | residual, independence | the same ground, never agreement (Fig 2 :45) | union member; its own loop with ambiguity |
| D4 Delayed-outcome channel (compound of D2 and D3) | time, drift, stale percepts, pooled readings, saturated metrics | contact with the ground | the ground, which does not decay; the channel does (Fig 10 :24) | dependent domain; sits between D2 and D3 |

**No nameable anchor, not a domain.** D1 has no anchor for this question, so it is not admitted as a verdict domain. This is the anchor test of Fig 2 :29-30 applied before any figure line is used to close the residual.

**Order by dependency (Fig 3).**

1. Name the candidate anchor and ask whether it is legitimate and non-updating (Fig 2 :33, :36).
2. Enumerate the habitat, including second and third-order contact (Fig 11 :43, :52-53).
3. Choose independent instruments that can range against that anchor (Fig 2 :31-32).
4. Read the residual per slot, not as an aggregate (Fig 1 :19).
5. Decide, keep cuts ranked and reversible (Fig 9 :40-41).

A benchmark-first protocol works on links 1 and 2 of Fig 3 (perception and vocabulary: what the system can do, what terms it has) and never reaches link 3, what would count as progress in the real environment. Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** Effort above the break cannot rescue it (Fig 3 :19).

**Partition or union.** Union, not partition. Delay, ambiguity and human response overlap, and the intersection is a specific compound, not a harder case of any one condition (Fig 9 :57-58). Each condition gets its own loop; the triple intersection is unbundled before search and then recombined as a compound with its own ground.

---

## 2. Findings

### F1 - A benchmark score is frame-internal; it cannot be its own ground (decisive for D1)

Fig 1 :23: **"The ground enters as the only metric."**
Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Fig 1 :24-26 names the disqualified quantities: *"coverage, and compression achieved"* and *"predicates minted, and credibility accrued."* A leaderboard position, a pass rate and a metric suite are all produced by the same frame that reports them. That does not make them useless. It makes them unable to settle the deployment question.

**Mode:** `general` (structural).
**Refuter:** produce a score that does not change when the builder optimises it, and that is constitutively about the deployment outcome rather than a proxy for it. That would make it a legitimate anchor under Fig 2 :36 and would break this finding.
**Status:** triangulated across Fig 1 :23, Fig 1 :27 and the Symbols table definition of the ground as *"Whatever settles the question and does not change its answer because of what any frame thinks"*. Low overlap within the figure set is limited, since one corpus issued all three; the low-overlap corroboration is in `09_watson_answer.md` (Thomas and Uminsky 2022, Singh et al. 2025).

### F2 - Report the residual per slot; the global average destroys the only where-to-look signal

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**

This is the direct answer to "ambiguous outcomes." Ambiguity is not best handled by a single more refined number. It is handled by keeping the slots separate: which population, which site, which use, which affected party, over which time window. Fig 1 :13: *"a global R near zero with one live slot residual is a legal state."*

**Mode:** `specified` (a testable protocol requirement).
**Refuter:** show that a global average retains the where-to-look signal for the deployment question, that is, no slot carries positive residual while the global score looks healthy. HELM's own issue tracker is a live natural experiment here; see `04_links_and_distribution.md`.
**Status:** triangulated across Fig 1 :13, :19, :22, :28 (all one figure but four distinct claims at different scales). Internal triangulation only; world corroboration from HELM's multi-metric stance and the measurement-science text.

### F3 - The anchor must be legitimate and must not update (decisive for D2 and D3)

Fig 2 :29-30: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."**
Fig 2 :33: **"The anchor must not update."**
Fig 2 :36: **"An anchor is legitimate when the question is constitutively about it."**
Fig 2 :37-38: **"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."**

For a question constitutively about people in real settings, human and institutional outcomes are the legitimate anchor. A benchmark is an instrument for that question, and instruments can be wrong on axes they do not measure. When the score becomes a target and the system optimises it, the score starts moving under pressure. Fig 2 :34 describes the result: **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."**

**Mode:** `general` (structural), `specified` when applied to a named deployment.
**Refuter:** show either that the chosen real-world anchor moves when a frame pushes on it, or that it is only an instrument for a question actually about something else. Both are observable.
**Status:** triangulated across Fig 2 :29-38 and the Seat Map's anchor section (local seat map lines 11-22). One evidence pool; the "patient outcome" phrase is corroborated from an unrelated field in WORLD (CAST).

### F4 - A test harness is a substituted habitat; it proves wiring, never capability (decisive for D1 versus D2)

Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**
Fig 11 :39: **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."**
Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**
Fig 11 :73: **"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."**

Human behavior is not noise around a deployment. It is part of the habitat that makes the system capable or incapable. The system is also an introduced actor in that habitat (Fig 11 :61: *"Introduction is available; exclusion is not."*), so evaluation must enumerate the cascade, not just the direct contact. Fig 11 :52-53: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

**Mode:** `specified` (falsifiable), `general` for the agent-and-habitat claim.
**Refuter:** the figure's own standing one, Fig 11 :72: **"an agent-only improvement that moved the ground would refute the capability claim."** In evaluation terms: a score-only improvement that changes real outcomes without changing contact with the habitat.
**Status:** triangulated across Fig 11 :39, :40, :70, :73 and Fig 1 :27 (frame-internal quantities). Single framework pool; ecological-validity literature is low-overlap corroboration.

### F5 - Delay is a channel failure, not a ground failure (D4)

Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 10 :25-26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*
Fig 6 :34-35: **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."**

Late outcomes do not make the question unanswerable in principle. They make the channel to the ground stale. Fig 10 :28 reports the honest output of that state: *"you have lost touch."* The remedy is to restore the reading, not to adjudicate what it would have said. The instrument must be improved from one already returning something (Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*). A longitudinal field outcome is such an instrument; an argument about what would happen is not.

**Mode:** `specified`.
**Refuter:** show a metric that remains a live channel to the real outcome indefinitely with no maintenance, no stale readings, no pooled populations and no saturation. Under Fig 10 that would mean the channel does not decay, which breaks the claim.
**Status:** triangulated across Fig 10 :20-29 and Fig 6 :32-35. Single framework pool. Low-overlap corroboration from CAST surrogate endpoints, where the marker stayed readable while the patient outcome moved the other way.

### F6 - The three conditions form a union compound; keep the verdicts separate

Fig 9 :57-58: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**
Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**

Delay, ambiguity and human response must not be averaged into one "real-worldness" score. Each asks for a different instrument: time-aligned outcome measurement for delay, per-slot residuals for ambiguity, habitat enumeration for human response. The triple intersection is then a specific compound with its own loop.

**Mode:** `general` (structural), `specified` for any named deployment.
**Refuter:** find one lever that clears all three conditions with no categorical residue, showing the split was a partition after all.
**Status:** single-source within the figures (Fig 9), corroborated by F2 and F4 at different scales. Verdict per domain is kept separate and never averaged.

### F7 - Triangulation, not a room of agreeing evaluators (D3)

Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**
Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
Fig 7 :36: **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."**

Two evaluation teams using the same benchmark, the same rubric and the same training data are one frame wearing two names. The right arrangement is two or more low-overlap instruments (for example a field outcome and an independent process audit) ranging separately against the same anchor. Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."*

**Mode:** `general` with a `specified` design consequence.
**Refuter:** measure the overlap between the two frames and show it is high, or show that their agreement came from convergent derivation rather than a shared pool (Fig 8 :50-52). Without that measurement their agreement carries no verdict weight.
**Status:** triangulated across Fig 2 and Fig 7 (different figures, different subjects: independence and handoff). One framework pool.

### F8 - What closes the residual is an import, not more of the same score

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 13 :138-139: *"narrowing gets you close while the ground decides"*

A benchmark frame cannot derive the real-environment outcome from inside its own closure no matter how many tests it runs. The residual must first be characterised in effect terms (delayed, multi-valued, human-mediated), then a frame whose closure predicts that shape is found: longitudinal cohort studies, human-factors fieldwork, econometrics of behavioral response, independent audits. Fig 9 :32: **"you get a kind of thing, never the answer itself."**

**Mode:** `specified`.
**Refuter:** show the outcome is already in the evaluation closure and merely unfound (unreachable-at-budget). Then the remedy is more search, not another atom, and importing would be a cost with no gain (Formula step 7).
**Status:** triangulated across Fig 6, Fig 8, Fig 9 and Fig 13. Single framework pool.

### F9 - There is no final evaluation room

Fig 7 :6: **"the limit: no last room"**
Fig 13 :90: **"One chain is one route through a space that has no last route."**
Fig 13 :134: **"Unreachable is a verdict here, not a silence"**

Any claim that one evaluation suite settles the deployment question forever is a terminal room, which the framework forbids. The honest stop is a recorded limit: what the current instruments cannot distinguish, what would have to be imported, and what would reverse the verdict.

**Mode:** `general`.
**Refuter:** exhibit a sealed final evaluation room with no outside left to import from. That would break both Fig 7 and Fig 13.
**Status:** triangulated across Fig 7 and Fig 13 (different figures, same structural limit).

### F10 - Filters choose the budget, never the verdict

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**
Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

Reachability, tractability, cost and ease of contact decide which venues get tried first. They never decide whether a claim about real-world capability is true. A shortlist of receptive evaluators is a filter, not a witness.

**Mode:** `general`.
**Refuter:** show that a convenience or receptiveness filter does not enter the verdict anywhere in a given evaluation process. If it does, the process is producing a convention.
**Status:** triangulated with Seat Map :163. Single framework pool.

---

## 3. Pre-registered refuter (written before the conclusion)

Required by Seat Map :287: **"a falsifier written before the run is a design instrument, not only an honesty device."** The shape claim `E*` is refuted if any of the following fires:

1. A single evaluation score is shown to be a legitimate, non-updating anchor for the deployment question (Fig 2 :36) **and** to retain the per-slot where-to-look signal (Fig 1 :19).
2. An agent-only improvement, with habitat contact unchanged, moves the real-world outcome (Fig 11 :40 standing refuter).
3. Two evaluation frames with measured near-zero overlap agree on the deployment verdict, and the agreement is shown to be convergent derivation rather than a shared evidence pool (Fig 2 :31-32, Fig 8 :50-52).
4. One lever clears delay, ambiguity and human response with no categorical residue (Fig 9 :54-58).
5. A sealed final evaluation room exists with no outside left to import from (Fig 7 :6).
6. A metric is shown to stay a live channel to the field outcome indefinitely with no maintenance (Fig 10 :24).

If any fires, the shape claim is withdrawn or rewritten. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Name the outcome anchor first and test both properties: does it not move when the score moves, and is the question constitutively about it (F3)? For questions about people, the legitimate anchor is a human or institutional outcome, not a metric.
2. Report residual per slot (use case, population, site, time window, affected party). Never publish only a global average (F2).
3. Enumerate the habitat, including the system itself as an introduced actor and the second and third-order cascades (F4).
4. Keep at least two low-overlap instruments ranging against the same anchor, and measure their overlap. Buy independence in proportion to the cost of being wrong (F7).
5. Treat benchmark results as a substituted habitat and a head start, never as proof of capability (F4, Fig 4 :22).
6. Restore stale channels rather than adjudicating from them (F5). Use instruments already returning something, improve them, and record the change.
7. Keep every cut ranked and reversible (Fig 9 :40-41). Report the round trip gap `R_T` between score and field outcome rather than a single number (Fig 4 :30).
8. Stop at the limit of the available instruments and record the lineage (F9).

---

## 5. Canonical usage check (figures README, Formula, seat map)

Four governing sources were read after sections 0 to 4 and checked against the findings:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` - the figures *"outrank everything else in the repo"* and *"the quotes are the authority, not this summary."* Key limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` - mode rule, the three distinct questions at step 7 (SEARCHED, INWARD, OUTWARD), and the warning that a system may stop when the library stops growing even though the reach has not moved.
- `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` - anchor, the three ignorance conditions, correlation valence, output-layer failure genus.
- The eight essays (`05_what_shape_means.md`) - provenance, metamerism, tacit knowledge, society of agents.

### Retractions and confirmations (kept visible)

| earlier reading | status after the canonical check |
|---|---|
| F1 first read as "benchmarks are forbidden" | **Retracted and narrowed.** Benchmarks are instruments and head starts (Fig 4 :22). The forbidden move is letting a frame-internal quantity become the verdict anchor. F1 now says that, not that metrics are useless. |
| F6 first written as three independent questions (a partition) | **Retracted as a partition.** Re-census against Fig 9 :54-58 gives a union compound. Verdicts stay separate and are never averaged, so the practical advice survived while the topology changed. |
| F4 first read as "synthetic evaluation proves nothing" | **Narrowed.** Fig 11 :70 says a synthetic solve proves wiring and never capability. That is a bounded legitimate role, not a null result. |
| F8 first read as "import any external frame" | **Narrowed.** Formula step 7 and Fig 8 :40-43 distinguish underivable in principle from unreachable at budget. Importing against a budget limit adds an atom that was not needed. |
| "Shape, not a name" applied to the outcome anchor | **Narrowed.** The README's phrase governs a missing primitive. The deployment outcome is not missing from the world; it is unmeasured. Naming a candidate anchor is a binding from the deployment frame, to be provenanced, not a forbidden act. |
| Apparent strain Fig 1 (per slot) versus a single anchor | **Not strained.** Re-census: Fig 1 governs how residual is indexed; Fig 2 governs what it is ranged against. Different quantities. |
| Apparent strain Fig 10 (channel decays) versus Fig 2 (anchor does not) | **Not strained.** The channel and the anchor are different objects, exactly as Fig 10 :24 states. |
| F9 (no last room) | **Canonically confirmed.** The figures README has a section titled "This is not a Theory of Everything, and that is the point." |
| Simulation status | **Canonically confirmed.** The Arrival essay warns that solutions presented to an LLM *"could never be verified if the solutions presented were not contrived to fit the formula."* |

---

## 6. Canonical usage check: verbatim line verification

Each figure line used as a primary quote in this folder was checked character by character against `03-FIGURES_TEXT.md` on 2026-11-24. Notable checks:

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." checked.
- Fig 2 :33 "The anchor must not update." checked.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.
- Fig 10 :24 "the ground does not decay, the channel does" checked; it is a partial line, presented as such.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked; the source line continues with a comma, so the quotation stops before punctuation.
- Seat Map :287 "a falsifier written before the run is a design instrument, not only an honesty device." checked against the local field guide.

No quote was found to have drifted. All are primary quotes from the figure text, none from a summary.

---

## 7. Verdict of the audit

The shape `E*` survives as a `specified`, ungrounded result: per-slot residual against a legitimate non-updating anchor, habitat enumerated, independent instruments, benchmark as head start, round trip gap recorded. No specific deployment, metric or venue is endorsed as that anchor. Delay, ambiguity and human response are separate loops whose intersection is a compound. Strains after re-census: **none hidden**; the two apparent strains (Fig 1 versus Fig 2, Fig 10 versus Fig 2) were dissolved by re-census and are recorded above. The status remains `candidate` until a field reading pays for it.
