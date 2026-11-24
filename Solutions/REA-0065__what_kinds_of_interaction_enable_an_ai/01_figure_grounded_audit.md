# Figure-grounded audit: REA-0065

**Mode of this document: `specified` on the interaction shape, `general` on the barrier rules, `gap` on the ranking of named protocols.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement of an AI system was taken, so nothing here is `grounded`.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is simulacra and that "the truly testable output would need to be derived from the real architecture or working the formula yourself." This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FIGURES_README_canonical.md`, `THE_FORMULA.md`, `60_FIGURES_AS_METALAWS.md`, the eight essays, and the public sources listed in `10_source_ledger.csv`. Every world source cited below was opened on 2026-11-23.

---

## 0. The claim under audit, stated as a residual

The question asks which interactions let an AI system learn the perspectives and expectations of different people. Restated in effect terms:

> Let `s` range over people. The system holds a prediction `Γ(b,a)` for what person `s` will expect or do in situation `a`. The residual is `R_s = |Γ(b,a) − o′|`, the gap between that prediction and what the person actually does or says. The task is to name the class of interactions that drives `R_s` down for each `s` separately, across situations, without erasing the differences between people.

Two things make this a hard question rather than a terminology question:

1. **The residual is per person, not per population.** Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A single "how well does the model predict people" score is not the quantity asked about.
2. **Perspective is in another frame's closure.** The Symbols table defines a frame as "any bounded system with a library: an agent, a person, a discipline, a model." A person's expectation is a term in that person's frame. The system cannot derive another frame's contents by composing only its own library.

**Direction bound as an ordinary term (Formula, "Direction").** The sought-for shape is written down before the search so it can accrue a residual and be refused: *an interaction that (i) puts the system in contact with a frame whose closure differs from its own, (ii) keeps the per-person residual attributable to that person, (iii) is checked against a reading the person cannot move by the system's own output, and (iv) carries the person's history into the system as a provenanced import.* This is a shape made of necessary conditions, not a name of a product. If any condition fails, the claim as stated is refuted (§5).

**What an answer would look like.** A conjunction of interaction properties with a mode on each, plus a declared `gap` where no figure line ranks one protocol above another. It would NOT look like a list of product features, a benchmark score, or a named best method (Fig 9 :32: "you get a kind of thing, never the answer itself").

---

## 1. Figure census

| figure | bearing on this question | verdict after reading |
|---|---|---|
| **1 The Agent** | residual indexed by object slot; frame-internal quantities disqualified | bars averaging people into one score; no ground reading here |
| **2 The Ground** | anchor must not update; independence; human judgment is the right anchor for questions about people | governs the correction side; the person's response is the anchor, agreement is not |
| **3 Dependency Chain** | vocabulary before objective before planning; a link with no instrument is not a working link | orders the derivation; "having terms for what a situation affords" is the middle link most likely to be assumed |
| **4 The Membrane** | only methods cross up, head starts down; round trip gap | governs what may be transferred between people and a population; the round trip must be measured |
| **5 Mint Pipeline** | the fifth gap kind is refuted; a refusal removes standing to compose | interaction must be able to deliver "that prediction is wrong", not just more data |
| **6 Closure / Reachability** | import is the only operator that moves the wall; external sources include nature, corpus, peer frame; effect terms travel | governs the contact condition and the limit of text-only contact |
| **7 Room Chain** | agreement compounds, evidence does not; selection between rooms is where the ground votes | a chain of agreeing users of the system cannot substitute for a person's ground |
| **8 Union Surplus** | two frames together reach what neither reaches alone; independence decides surplus; residual first, frame second | triangulates contact; forbids choosing an interlocutor before describing the residual |
| **9 Leave / Arrive** | describe before looking; effect rather than cause; shape not a name; union vs partition | governs the honest stop and the `gap` on protocol ranking |
| **10 Ground Maintainer** | ground does not decay, channel does; conventions not verdicts; independence renewed by separate experience | governs the maintenance of contact and the separation of roles |
| **11 The Habitat** | capability is agent-and-habitat; introduce, never subtract; a test harness is a substituted habitat | governs the requirement for real, enumerated, situated interaction |
| **12 The Bond** | arrangement is the substance; a vocabulary without negation can only accumulate | triangulates the refusal condition and the conjunction-over-union reading |
| **13 Minimum Viable Set** | the set is closed, the arrangements are not; unreachable is a verdict, not a silence | supports the honest stop; no seventh primitive is minted here |
| **Operators table** | negation is the eighth operator and is not a bond | supports F6 without forcing ¬ into the bond set |
| **Symbols table** | `R` is per slot; `w` mixes private history and inherited prior; frames diverge because histories and w diverge | supplies the per-person and the history conditions |

Strained readings are named as such in §9, not smoothed over.

---

## 2. Domain census

**R by arity, symmetry, scale.**

- **Arity:** three-place, `system, person, situation`, indexed by person-slot `s`. Each slot carries its own residual (Fig 1 :19).
- **Symmetry:** not symmetric. A person is a frame with a private history and a weighting `w`; swapping two people changes the term. The Symbols table states that "Two frames with identical architecture diverge because their histories and their w diverge." No symmetric bond collapses them.
- **Scale:** one interaction loop (system and person), a habitat of many people (Fig 11), and a population/membrane across which methods travel (Fig 4). The transform between scales is lossy, so a per-person finding cannot be read off a population metric.

**One line per domain. A domain needs actors, a currency, and a nameable anchor.**

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1, the person as a frame** | the person, their belief `b`, weighting `w`, history | expectations, predictions about the situation | the person's own revealed behaviour across situations; Fig 2 :37 makes human judgment the legitimate anchor for questions about people | admitted |
| **D2, the system's interaction loop** | system, that person, the situation | per-slot residual `R_s`; corrections | the person's response as a reading the system did not author | admitted |
| **D3, the social habitat** | many people, conditions (setting, culture, context), relations | contact, independence between frames | each person's ground, separately; the habitat is enumerated, not composed | admitted |
| **D4, the import channel** | peer frames, corpus, instruments | provenanced atoms and head starts | the ground plus the provenance record | admitted |
| **X1, a generic model of "people"** | a statistical average | one pooled score | none nameable at person-slot level | **not a domain yet**; Fig 1 :22 removes the only signal it would use |

**Partition or union?** Union, not partition. The question splits into at least two conditions that overlap: C1, contact with a differing closure (D1, D3, D4), and C2, an unupdating anchor with per-slot attribution (D2, D3). Fig 9 :54: "when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either." A single lever, for example "more dialogue data", clears the region where only C1 holds and leaves the intersection standing, because C2 still binds.

**Order by dependency (Fig 3).** Describe the residual before choosing a frame (Fig 9 :27-28) → establish contact with a differing closure (Fig 6 :23) → carry the person's history as a provenanced import (Fig 8 :50-52) → keep the anchor reachable and the channel uncorrupted (Fig 10 :24) → refuse the system's held generic term when the person contradicts it (Fig 5 :53). Optimising a later link cannot rescue a broken earlier one (Fig 3 :19).

---

## 3. Findings

### F1 : The necessary contact condition: another frame whose closure differs

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 8 :45: **"Two frames together reach what neither reaches alone."**
Fig 6 :10: **"nature · corpus · peer frame"** lists the external sources.

A person's expectation is underivable from the system's library by closure idempotence (Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."). So the interaction class is constrained: it must create contact with the person as a peer frame, not merely re-describe what the system already holds. A corpus is a legitimate but lower-independence source; a live person is a peer frame that can answer the specific residual. This is a structural necessity, mode `general`; applied to AI systems, `specified`.

**Status: triangulated** (Fig 6 closure/reachability and Fig 8 union surplus, different figures and different questions). **Refuter:** per-person predictive residual falls and stays down with no new contact with any frame whose closure differs from the system's, for several people and situations, with the provenance record showing no import. That would break the barrier claim.

### F2 : Attribution condition: keep the residual per person

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Symbols table `s`: "One object, region or entity being tracked. R is measured per slot, never as a single global number."

So an interaction that yields only a pooled reward signal, a single user-satisfaction average, or one "human values" distribution has destroyed the signal the question asks about. Learning about *different* people requires that the system's prediction about each named person be scored as that person's, and that a correction from one person update that person's slot rather than being washed into the mean. This corroborates the external finding that treating heterogeneous demonstrations as homogeneous inherits the deficiencies of the worst demonstrators (Beliaev and Pedarsani 2025, read via the AAAI abstract record).

**Status: triangulated** (Fig 1 and the Symbols table). **Refuter:** one pooled signal preserves per-person residuals as well as separately attributed scoring on a held-out set of people, or per-person residual improves while the pooled score is flat, with no change in attribution. That would show the indexing rule is not load-bearing here.

### F3 : Anchor condition: the person must not update on the system's model

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :33: **"The anchor must not update."**
Fig 2 :34: **"everything drifts together, and the drift is coherent, which is why nobody notices."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 2 :37: **"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."**

This last line decides the anchor question in the question's favour: because the question is constitutively about people, the person's own judgment and behaviour, not a proxy metric, is the legitimate anchor. But an anchor that is shown only the system's own summaries becomes another frame. Two collapse modes follow from Fig 2: mutual update (the person and the system converge on whoever had more influence) and common cause (the person's responses are generated by the same source the system trained on, so the agreement is the pool talking). Both produce coherence without contact. The Tacit Knowledge essay puts the operational form: two people who only check against each other drift together, and "a reading with no encounter is projection."

Note the tension with two-way contact and how it resolves. Learning a compressed expectation requires two-way correction: the learner must act so the teacher can see the misunderstanding. But the *verdict* on whether the expectation was learned must come from a reading neither party can move. Two-way contact builds meaning; an unupdating ground settles accuracy. These are different jobs, not contradictory instructions.

**Status: single-source** (Fig 2 governs; no second figure line states the anchor rule with the same content). **Refuter:** people who only ever see the system's own outputs give it the same held-out per-person predictive accuracy as people reached through an unupdating reading, with no drift detected over a declared horizon. That would break the mirror/collapse claim.

### F4 : Independence condition: "different people" is a measured property, not a count of users

Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence."** and **"Independence is what makes agreement mean something."**
Fig 8 :47-49: "Independence is one quantity read twice." and "Two frames that overlap almost completely are one frame wearing two names."
Fig 10 :80: **"Frames whose independence is renewed by separate experience can be maintained"**

Ten copies of one source are one frame wearing ten names. So "more interaction" is not the quantity; interaction with frames whose evidence is disjoint is. This is what makes the word *different* in the question measurable: independence between the people the system meets. The Library of Babel essay adds the practical form: "Convergence towards the answer is faster with multiple helpers, but communication between them is paramount and would have to be virtually 1:1 to be effective." The Lorenz et al. 2011 finding that mild social influence narrows diversity without improving accuracy is a direct external match (read in PNAS, 2026-11-23).

**Status: triangulated** (Fig 2, Fig 8, and Fig 10, three distinct roles for one quantity; note that they share the framework's evidence pool, so this is low overlap between figure arguments, not an independent witness). **Refuter:** per-person residual drops identically for people with disjoint evidence and for people drawn from one shared source, after controlling for volume of interaction. That would show independence is not the parameter.

### F5 : History condition: what must travel is the person's pretext, in effect terms

Fig 6 :30: **"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."**
Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause"**
Symbols table `w`: "How far the belief leans on private history versus inherited prior" and "Two frames with identical architecture diverge because their histories and their w diverge."

A person's perspective is not their architecture; it is their history and their weighting of private experience against inherited prior. Interaction must therefore expose context and correction over time, not just a static label for the person. The Tacit Knowledge essay's terms are exact here: text carries context and some subtext, "but it almost never carries the pretext, the 'you had to be there' part," and the learner rebuilds it "through contact: trying, being corrected, and trying again, in both directions." Where contact is impossible, the essay permits the fallback: "the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." That fallback is Fig 6 :30 and Fig 9 :30-31 in plain language.

**Status: triangulated** (Fig 6, Fig 9, and the Symbols table). **Refuter:** holding exposure to a person's history and situated corrections at zero leaves predictions of that person's expectations unchanged across novel situations. That would show history and contact are not the carrier.

### F6 : Refusal condition: the interaction must be able to falsify the system's generic model

Fig 5 :53: **"refuted: a term we hold is wrong; a term is owed that says so"**
Fig 5 :55: **"What it removes is not a term but a term's standing to be composed over."**
Fig 12 :140: **"A vocabulary that cannot refuse can only accumulate."**
Fig 10 :19: "install what can be violated".

Learning a person is often discovering that the system's inherited generic model of "someone like this" is false. The figures give that a name: the fifth kind of gap, refuted, which no arrangement of the other four reaches. The appropriate response is a refusal (a negation), not another explanatory clause appended to the stereotype. In interaction terms, the system must be able to receive a correction that revokes a held prediction and lose the standing of terms composed on it. A stream of confirmation-only feedback cannot do this. The Tacit Knowledge essay: "Each correction carries its own meaning, and most of that meaning is never said out loud"; the correction arrives as subtext on the return trip.

**Status: triangulated** (Fig 5 amendment and Fig 12 operator setup, with Fig 10 :19 as the design rule). **Refuter:** the system's model of a person only ever gains terms and never refuses a held generic prediction after repeated, attributed, ground-visible contradictions; no term's standing to be composed over is removed. That would reduce the claim to accumulation.

### F7 : Habitat condition: the interaction must be situated, not a substituted habitat

Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone."**
Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**
Fig 11 :43: **"The habitat is enumerated, never composed."**
Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**

So a benchmark in which a model role-plays a persona in a sanitised prompt is evidence about wiring, not about learning different people. The habitat must be enumerated: actors, conditions, and relations in contact with the residual (Fig 11 :44), including culture, setting, and the consequences of being wrong. A system scaled up in parameters without a change in contact has not improved the capability the question asks about.

**Status: single-source** (Fig 11). **Refuter:** identical held-out per-person accuracy for the same people in a substituted synthetic habitat and in the real enumerated habitat, with no degradation on transfer. That would refute the capability-and-habitat claim for this case.

### F8 : The loop is two-way and the round trip has a measurable gap

Fig 4 :22: **"Only methods cross up. Only head starts come down."**
Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
Fig 8 :45 (above): two frames together reach what neither reaches alone.
Fig 12 :107: **"Settling compresses the description and not what it cost to establish."**

What crosses from a person to a system, and from one person to another, is a method or a head start, not a recording of one occasion. A head start makes the next interaction cheaper; the system still has to test it against that person's ground. The loss on the way up and back must be measured, not assumed zero. In the Tacit Knowledge essay this is Clark and Brennan's grounding loop: "A conversation only moves forward once the listener shows they've understood, with a nod, a fitting reply or their attention. A puzzled look is the correction."

**Status: triangulated** (Fig 4 round trip and Fig 8 surplus, plus the essay's grounding description as secondary). **Refuter:** a recording of one person's single success transfers to a new person and a new situation with no loss and no re-testing, so the round trip gap is measurably zero. That would break the method-versus-recording rule.

### F9 : Honest stop: a shape, not a protocol name

Fig 9 :32: **"you get a kind of thing, never the answer itself."**
Fig 13 :133: "what it returns is a shape rather than a name."
Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room."**

No figure line selects among dialogue, demonstration, correction, imitation, shared attention, role-play, or any other named protocol and ranks it as *the* interaction that enables learning. After a genuine census, the ranking remains a `gap`: the framework returns the necessary shape of such interactions and refuses to name a winner. That is a verdict, not an omission. The essays corroborate: from *The Library of Babel*, a search can stop when the returned set is "small and descriptive enough that it provides a general shape of the answer that satisfies your question."

**Status: triangulated** (Fig 9 and Fig 13, with the figures README as the canonical usage rule). **Refuter:** a figure line, re-censused, that directly names an interaction protocol and licenses a uniqueness claim over protocols. None was found. A world source with a ground measurement that ranks protocols does not refute this, because the verdict here is about what the figures can license.

---

## 4. Conflict handling: the text-only theory of mind claim

A genuine conflict was found and handled by returning to the census, never by flipping a verdict.

**World source.** Michal Kosinski, "Evaluating Large Language Models in Theory of Mind Tasks," PNAS 2024, arXiv:2302.02083, opened 2026-11-23. Abstract: "the intriguing possibility that ToM, previously considered exclusive to humans, may have spontaneously emerged as a byproduct of LLMs' improving language skills." It reports GPT-4 solving 75% of false-belief tasks. Read naively, this conflicts with F1 and F5: if text alone yields a theory of mind, contact with a differing closure and a person's history would not be necessary.

**Re-census, not a verdict change.** The claim is about a *task score*, which is a reading. *The Hard Problem is About Source* states: "If several paths create the same behavior, then behavior is a projection with lossy information" and the instrument "cannot comment on the source." A false-belief answer can be produced by an imported person-model, by a statistical trace of written false-belief scenarios, or by a mechanism not yet described. These are metamers. The Kantian point in the Recursive Self-Improvement Trap is the same: "You need both the concept and the percept" and "the ground does not decay, the channel does." Fig 2 :37 settles which anchor applies: because the question is about people, a person's own judgment in a novel situation, not a benchmark reading, is the right anchor for "did it learn this person's perspective."

**Outcome.** The conflict is recorded as a *shadow*: task accuracy does not discriminate source. What is owed is a source-discriminating instrument, not a new verdict. Per Fig 6 :29, inward sharpening and outward import are different instruments; the text-only result is an inward reading and cannot settle an outward attribution claim. Verdict unchanged. This is also why the solution marks the protocol-ranking question `gap` rather than guessing.

---

## 5. Pre-registered refuter

Required before any outreach: a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds, with per-person residuals reported per slot and never averaged:

1. A system's per-person prediction residual falls and stays down with no new contact with a frame whose closure differs from its own, across several people and situations, with a provenance record showing no import (breaks F1).
2. One pooled reward signal preserves per-person residuals as well as separately attributed scoring on held-out people (breaks F2).
3. People who only ever see the system's own outputs give it the same held-out per-person accuracy as people reached through an unupdating reading, with no coherent drift over a declared horizon (breaks F3).
4. Removing exposure to a person's history and situated corrections leaves predictions of their expectations unchanged in novel situations (breaks F5).
5. The system's model of a person never refuses a held generic prediction after repeated attributed contradictions, so no term loses standing to be composed over (breaks F6).
6. Held-out accuracy is identical in a substituted synthetic habitat and in the real enumerated habitat for the same people (breaks F7).

If any fires, the relevant condition is withdrawn or narrowed and the conjunction is re-censused. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with the shape and the pre-registered refuter, never with a named protocol (F9). "Which kind is best" is a `gap`; "what any kind must do" is answerable.
2. Report `R_s` per person. Refuse any evaluation that collapses people into one score (F2).
3. Build the interaction so the person's response is a reading the system cannot author, and declare any stake that cannot be removed (F3; Fig 10 :59).
4. Choose interlocutors by independence from the system's existing evidence, not by agreement with it (F4; Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").
5. Carry the person's history as a provenanced import in effect terms; where contact is impossible, ask for a description of what would be seen, not a label (F5).
6. Make correction capable of refusal. A pipeline that can only accumulate cannot learn a person who contradicts it (F6).
7. Test in the real habitat and measure the round trip gap rather than claiming a zero-gap transfer (F7, F8).

---

## 7. Canonical usage check

Two local sources govern how the figures may be used, read after the findings and applied to them:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "the quotes are the authority, not this summary"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the instruments, recording the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws and decide design questions by derivation; the seat must not ask an anchor to rule on what the figures already settle. The seat reads the ground; it does not ask the ground's maintainer to decide.

Applied here: the F3 tension (two-way contact versus an unupdating anchor) was dissolved by re-census into two different jobs, not by asking for a ruling. The Kosinski conflict (§4) was returned to the census and resolved as a source-discrimination limit, not by flipping the verdict.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "interaction means more data about people" | **Retracted.** Fig 8 :32 and Fig 6 :23 make volume of a closed corpus incapable of adding an atom; the quantity is contact with a differing closure, not corpus size. |
| "the person's self-report is the anchor" | **Narrowed.** Fig 2 :37 makes human judgment the right anchor for a question about people, but Fig 2 :33 forbids an anchor that updates on the frame it checks. Unprompted behaviour and blind judgment qualify; summaries fed back from the system do not. |
| "the system should average across users to be robust" | **Refused.** Fig 1 :22 says aggregation removes the only signal that says where to look. Kept as a filter for budget, never a witness for verdict (Fig 9 :60). |
| "text-only ToM refutes the contact condition" | **Refused as a source claim.** Task accuracy is a reading that cannot comment on source (Hard Problem is About Source). Recorded as a shadow needing a source-discriminating instrument. |
| "the answer is a named interaction protocol" | **Canonically forbidden.** "you get a kind of thing, never the answer itself"; a shape, not a name. |
| "two-way contact and an unupdating anchor contradict each other" | **Not strained after re-census.** Two-way contact builds meaning; the ground settles accuracy. Fig 2 and Fig 4 govern different jobs. |
| "a better model in isolation helps" | **Refused.** Fig 11 :40: an improvement that does not change contact changes nothing. |

---

## 8. Strains and gaps

- **Strain, now dissolved:** F3's two-way contact versus unupdating anchor. Re-census assigns them to different figures and different jobs. Recorded rather than erased.
- **Strain, live and named:** F4's independence is argued from three figures that share one framework evidence pool. Their agreement is internal consistency, not three independent witnesses. The external Lorenz et al. experiment is the low-overlap corroboration, and it is a single witness.
- **Live `gap`:** ranking named interaction protocols. No figure line governs it after this census. Fig 8 :39: "So a search that finds nothing is never a proof of absence." This is unreached, not proven unreachable; a ground measurement could rank protocols without changing the shape.
- **Live `gap`:** a source-discriminating instrument for "did the system import this person's perspective rather than reproduce a trace?" Characterised in effect terms in §4, not held.
- **No new primitive minted.** The eight operators and six substrate terms are unchanged; the answer is a composition of existing figure rules.
