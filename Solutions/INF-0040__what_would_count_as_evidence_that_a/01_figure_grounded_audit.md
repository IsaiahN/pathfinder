# Figure-grounded audit: what would count as evidence that a machine understands information?

**Mode of this document: `specified` on the per-domain verdicts, `general` on the structural shape, `gap` on the specific discriminating instrument. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*, opened 2026-11-23, says LLM output can "simulate an approximate answer/output" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the figures README, `THE_FORMULA.md`, the seat map, `60_FIGURES_AS_METALAWS.md`, and the world sources in `10_source_ledger.csv`, all opened this session or carried explicitly from the exemplar with that marked.

---

## 0. The residual, in effect terms

The question asks for a discriminator. It does not ask what understanding is; it asks what would count as evidence for it. So the first move is to state both candidate readings as effects and to bind the sought-for shape as an ordinary term, following the instruction in `THE_FORMULA.md` "Direction": "make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else." A pre-registered prediction before the run is this already working.

Let `R = |Γ(b,a) − o′|` per slot `s` (Fig 1 :11, Symbols table :36-40). Two states are proposed:

- **U (called "understands information").** The system's library `Γ` predicts the world's response per slot, and the residual stays small when the observation `o′` comes from a ground that does not update on the system's own output. The system's contact is maintained across a habitat it did not author, and an independent frame ranging against the same ground can refuse its reading. In effect terms: `U` is a maintained, per-slot contact relation between an agent and a habitat with a non-updating anchor.
- **P (called "merely processes its structure").** The system composes inside `closure(Γ)`, manipulating atoms and bonds, and can produce outputs indistinguishable from `U` at the observation boundary. Its residual is frame-internal, measured by an instrument that saturates, or pooled into an aggregate. In effect terms: `P` is internal composition with no imported atom and no live contact with a ground that can refuse.

The residual is the difference the verifier needs to register between U and P. State the discriminator as a bound ordinary term before searching:

> **D (the sought shape, bound before the run):** an instrument or arrangement that, at the same observable behavior, reliably separates a system whose per-slot residual tracks a non-updating ground from one whose residual is only frame-internal, and that reports the separation per slot rather than as an average.

D is a shape, not a name. No figure line names a specific benchmark, test, or architecture that is D. That is a declared `gap`, recorded in section 4, not an invitation to invent a test.

Two warnings are bound at the same time. First, the ordinary term understanding is a label, not a measured quantity: Fig 11 :36 says "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there." The question's own noun is the one most likely to be a frame-internal preference masquerading as a term (Fig 5 :62). Second, the question as phrased invites a two-item partition (U or P). The figure census below shows it is a union of overlapping conditions with different anchors, so one lever cannot clear it and the per-domain verdicts must be kept separate.

## 1. Domain census

### 1.1 R by arity, symmetry, scale

- **Arity.** `R = |Γ(b,a) − o′|` is a three-place relation among belief, action and observation, indexed per slot (Fig 1 :10-11). Understanding is therefore a two-place relation between a system and a habitat-plus-ground, not a one-place property of the system. An arity error here is the whole of the classic mistake: Searle's room operator runs a program and does not understand Chinese, but the question of where understanding lives is a question about the system boundary, which the Chinese Room literature itself makes explicit through the systems reply and the robot reply (Stanford Encyclopedia of Philosophy, "The Chinese Room Argument", opened 2026-11-23).
- **Symmetry.** The observable outputs of U and P can be identical. They are therefore indistinguishable at the output level, which means the difference cannot be carried by output. It is carried by a bond, and the bonds split into symmetric and ordered kinds (Fig 12 :46). Contact is ordered: the system acts, the ground returns a reading, the residual updates. A symmetric reading of "same behavior" cannot separate U from P; that is the isomer point developed in `06_isomers_and_order.md`.
- **Scale.** Three scales are in play: the single system loop (perceive, act, observe), the population of instances and eval rooms, and the habitat that includes the observer and the instrument. The membrane between scales is lossy (Fig 4 :27-30), so what counts at one scale does not transfer unchanged to another. An aggregate benchmark score is a reading at the population scale; it cannot be promoted to a verdict at the system scale without a round trip and a measured gap.

### 1.2 One line per domain: actors, currency, anchor

A domain needs a nameable anchor. Where none exists, the proposed domain is not yet a domain.

| domain | actors | currency | anchor | nameable anchor? | status |
|---|---|---|---|---|---|
| D1 Internal frame | `Γ`, atoms, seven bonds, negation, loss | composition inside `closure(Γ)`, residual reduction | none. Loss is a frame-internal metric; Fig 1 :23-27 disqualifies quantities a frame produces itself | no | admitted as a mechanism, refused as a verdict domain |
| D2 Habitat and ground contact | the world, users, instruments, other agents, data streams with a stable reference | maintained contact, per-slot residual against a ground | a measurement, experiment, counter, market or patient outcome (Fig 2 :29) | yes | admitted, primary |
| D3 Verification and observer frame | expert readers, test designers, interrogators | agreement and residual | the ground, never agreement; human judgment legitimate only if the question is constitutively about people (Fig 2 :36-38) | yes, conditional on what the question means | admitted, split into two verdicts |
| D4 Test harness and benchmark | synthetic tasks, held-out sets, prompts, leaderboards | scores, coverage, compression, speed | the harness itself, which is a substituted habitat (Fig 11 :70) | no stable one | admitted as a wiring test only, not a capability domain |
| D5 Provenance and lineage | the record of which route produced an answer | source gate, shadow test, `R_T` | the record as a checkable object (Fig 12 :126-130) | yes, the record | admitted |
| X1 Understanding as a free-floating inner property | the system alone | introspection, self-report | none. Self-report is a mirror (Fig 2 :35) and a verifier that reconstructs the claim cannot verify it (Fig 10 :42) | no | not a domain yet |
| X2 "Processing structure" as the mere absence of understanding | the system alone | syntactic manipulation | already inside D1 | n/a | absorbed into D1 |

### 1.3 Partition or union

This is a **union**, not a partition. D1 and D4 can both run perfectly while D2 is absent, and D2 can be intact while D4 fails. "Merely" is the claim that condition D2 is missing; it is not the absence of D1. Fig 9 :54 says "And when the split lands on a union rather than a partition, unbundle before you search again," and Fig 9 :57 says "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." So:

- **C1:** internal structure processing exists (D1 plus D4).
- **C2:** maintained contact with a non-updating ground exists (D2).
- **C3:** the verdict is framed by an independent verifier who cannot reconstruct the claim (D3 plus D5).

U is C1 AND C2 AND C3, each with its own anchor. P is C1 with C2 absent. A single lever, such as more parameters or a cleaner benchmark, clears C1 and leaves C2 standing. This is why "build a bigger model" and "build a better benchmark" are both budget moves, not verdicts (Fig 9 :60).

### 1.4 Order by dependency

Fig 3 orders links by dependency, not importance: perception, vocabulary, objective, planning, learn and carry. Applied here:

1. **Perception:** can the system tell what is in front of it and tell it apart from what was there before (Fig 3 :4-5)?
2. **Vocabulary:** does it have terms for what a situation affords (Fig 3 :6-8)? Fig 12 :111 says "A vocabulary without bonds can name a state and cannot name a route to one." A system holding only ingredients can say what a situation contains and not what would count as getting somewhere from it.
3. **Objective:** can it say what would count as progress in its own terms (Fig 3 :9-11)? This is the middle link. Fig 3 :25-26: "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."
4. **Planning and carry:** only then a route and a carried record.

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." The question's hardest part is at link 3, which is why most evidence offered in the debate is about links 1, 2 and 4 (fluency, knowledge, tasks) and not about whether the system can state its own objective against a ground.

## 2. Figure census

Every bearing line below was read from `03-FIGURES_TEXT.md`. Quotes are verbatim; a line that only fits with a strain is marked as governing another quantity and sent back to census.

| figure | verbatim bearing line | bearing on this question | verdict |
|---|---|---|---|
| Fig 1 | :19 "The residual is indexed by object slot, not aggregated." | evidence must be per system slot, not a leaderboard mean | governs D2 and D4 |
| Fig 1 | :23 "The ground enters as the only metric." | frame-internal metrics cannot decide | disqualifies D1 as verdict |
| Fig 1 | :27 "A frame cannot score itself with a quantity it also produces." | self-report and training loss are not evidence | disqualifies X1 |
| Fig 2 | :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | sets the anchor test for any proposed evidence | governs D2 and D3 |
| Fig 2 | :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement among instances and self-report cannot corroborate | governs D3 |
| Fig 2 | :36 "An anchor is legitimate when the question is constitutively about it." | raises the Turing-test strain | governor of the anchor legitimacy question |
| Fig 2 | :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" | agreement from a shared corpus is one witness | governs D3 |
| Fig 3 | :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." | locates the break at the objective link | governs dependency order |
| Fig 4 | :22 "Only methods cross up. Only head starts come down." | what a benchmark can legitimately carry | governs D5 |
| Fig 4 | :25 "A recording carried upward looks like knowledge and is a description of one occasion." | a transcript of one success is not a capability | disqualifies examples |
| Fig 5 | :48 "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing." | output fluency is not success | disqualifies D4 scores as verdict |
| Fig 5 | :62 "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term." | understanding is a preference until bound | governs the residual binding |
| Fig 6 | :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | structure processing cannot add the atom of ground contact | governs D1 versus D2 |
| Fig 7 | :13 "agreement compounds, evidence does not" | multi-instance agreement is motion, not progress | governs D3 |
| Fig 8 | :39 "So a search that finds nothing is never a proof of absence." | failure to find understanding is not proof it is absent | governs the `gap` |
| Fig 8 | :50-52 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" | provenance is the whole distinction | governs D5 |
| Fig 9 | :32 "you get a kind of thing, never the answer itself" | the framework returns a shape, not a named test | governs the `gap` |
| Fig 9 | :51 "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it" | evidence about the system's internals is denied to the verifier | governs D3 |
| Fig 9 | :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | benchmark rank is a budget filter | governs D4 |
| Fig 10 | :24 "the ground does not decay, the channel does" | a stale benchmark can fail silently | governs D2 and D4 |
| Fig 10 | :42 "A verifier that can reconstruct the claim cannot verify it." | a system that explains its own understanding is disqualified | governs D3 |
| Fig 11 | :36 "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there." | re-grounds the question's noun | decisive re-framing |
| Fig 11 | :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." | the answerable replacement question | decisive re-framing |
| Fig 11 | :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." | internal improvement cannot settle U | decisive |
| Fig 11 | :51 "No standing list of good actors survives a change of residual." | no fixed checklist of understanding behaviors | governs D3 |
| Fig 11 | :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." | synthetic benchmarks prove wiring | decisive for D4 |
| Fig 12 | :46 "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands." | U and P differ by bond, not ingredients | decisive for the isomer claim |
| Fig 12 | :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | the structural form of the discriminator | decisive |
| Fig 13 | :134 "Unreachable is a verdict here, not a silence," | report the missing instrument plainly | governs the `gap` |
| Operators | :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate" | a verifier must be able to refuse | governs D3 |
| Symbols | :102-106 "Whatever settles the question and does not change its answer because of what any frame thinks." | defines the anchor used throughout | governs D2 |

## 3. Findings

### F1: The question as posed asks for the wrong object (decisive re-framing)

Fig 11 :34-36 names "What is intelligence?" as "The wrong question, and this figure is the replacement for it," then: "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there." Fig 11 :39 gives the replacement: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."

The same verb applies to "understands information." Asked as a one-place property of the machine, the question asks after a label. Asked as "what makes a system capable of staying in contact with a non-updating ground," it becomes answerable. Evidence of understanding is therefore evidence of maintained contact, not evidence of an inner state.

World corroboration from the framework's own essay *How Intelligence Actually Works*, opened 2026-11-23: "The projection of green can't tell you whether it was RGB, CMYK or something else that composed it." The observable cannot decide the source. And: "the answer doesn't exist until the question is contacted." Overlap with the figures is maximal (same author), so this is corroboration of the reading, not an independent witness.

**Mode:** `general` structural, `specified` when applied to a machine. **Refuter:** a demonstration that a system's capability is a property of the system alone, surviving a habitat substitution that removes every ground payment the goal required, with no reproduction of the lost contact. That would break Fig 11 :39-40.

### F2: Per-slot residual, not an aggregate score

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13 "a global R near zero with one live slot residual is a legal state."

A machine can score near zero on an aggregate and still have a live residual on one slot. Evidence must therefore be reported per slot, not as a single benchmark number. The same point is made outside the framework by the benchmark critique *Line Goes Up? Inherent Limitations of Benchmarks for Evaluating Large Language Models* (arXiv 2502.14318, opened via search 2026-11-23): "benchmark performance should not be used as a reliable indicator of general LLM cognitive capabilities." That author argues from overfitting and lack of real-world relevance; the figures argue from the arithmetic of averaging. Low overlap between the fields, same shape.

**Mode:** `specified`. **Refuter:** a demonstration that a pooled score tracks per-slot ground contact with no hidden live slot across a reproduced habitat.

### F3: Internal structure cannot supply the atom that contact supplies

Fig 6 :21 "MINT composes inside the closure and can never add an atom." Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 5 :48 "Its own output is never a measure of success."

A system that only processes structure searches inside one closure. More search cannot add the atom of external contact. This is definitional (Fig 8 :32), so it is `general`, not a prediction about any particular architecture. Harnad 1990 (*The Symbol Grounding Problem*, Physica D 42, opened 2026-11-23) is the low-overlap corroborator: "How can the semantic interpretation of a formal symbol system be made intrinsic to the system, rather than just parasitic on the meanings in our heads?" and his conclusion that "there is really only one viable route from sense to symbols: from the ground up." Bender and Koller 2020 (ACL, Best Theme Paper, opened via search 2026-11-23) give the modern form: "a system trained only on form has a priori no way to learn meaning," and the concrete proposal to "Create tasks and datasets which ground language in reality/interaction."

The conflict rule was triggered here in a soft form: Bender and Koller argue a system trained only on form cannot in principle learn meaning, while the framework says contact with a differing closure can move the wall. These are the same claim at two vocabularies, not a conflict. Both were returned to the census and kept as one low-overlap witness for the contact requirement.

**Mode:** `general` for closure idempotence, `specified` for the machine case. **Refuter:** a system whose reach acquires a new atom purely by internal composition, shown with provenance rather than asserted from its outputs.

### F4: The bond carries the difference, not the ingredients

Fig 12 :46 "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands." Fig 12 :47 "A recipe that names only its ingredients has recorded half of itself." Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

U and P can hold the same atoms: the same weights, the same corpus, the same token stream. What differs is the bond to a ground. This is why inspecting the structure cannot decide the question, and why a behavioral reading at the output boundary cannot decide it either: both are readings of the operands. Fig 5 :62 explains why the difference is invisible to the system itself: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."

*The Hard Problem is About Source* (opened 2026-11-23) gives the named mechanism: "If several paths create the same behavior, then behavior is a projection with lossy information" and "The answer is unreached until a better instrument exists." The relevant real instrument is the spectrometer, not a further argument. Color science corroborates from an independent field: Foster in *The Senses* (opened via search 2026-11-23) writes that when two spectra give the same cone excitations "all information about their spectral origins is lost," a limit "known as metamerism," which "sets a limit... on how well color can be used to represent the spectral properties of surfaces."

**Mode:** `general` structural, `specified` for the U/P claim. **Refuter:** a source-discriminating instrument that reads the same output and reliably separates U from P without provenance, in which case the bond ceases to be hidden and the isomer claim collapses into an ingredient difference.

### F5: The harness proves wiring, never capability

Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another." Fig 11 :68 "what you failed to reproduce is invisible until the goal fails." Fig 11 :69 "what you unintentionally introduced is invisible until it acts."

Synthetic benchmarks substitute a habitat. They inherit two silent failures: what the real habitat required but the harness did not reproduce, and what the harness introduced that the real habitat did not have. A solve inside the harness therefore licenses only a wiring claim. Fig 11 :40 is the general form: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

The Apple *Illusion of Thinking* paper (NeurIPS 2025, opened 2026-11-23) is an instance of the first failure: "frontier LRMs face a complete accuracy collapse beyond certain complexities," and the evaluation paradigm "often suffers from data contamination and does not provide insights into the reasoning traces' structure and quality." It is also a case where the instrument itself is under dispute: Lawsen's rebuttal (reported by VentureBeat 2025, opened via search 2026-11-23) attributes many failures to output token ceilings, not reasoning. This is kept as a live conflict about the instrument, not a verdict about understanding. It corroborates the harness line only in the limited sense that a harness cannot distinguish source from output ceiling without a discriminator.

**Mode:** `specified`. **Refuter:** a harness that reproduces every contact the goal required and inherits no actor the real habitat lacked, demonstrated by the silence test: move the goal and show that the same failures appear in the same order.

### F6: No internal or self-report test can settle it

Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." Fig 8 :34 "A frame cannot reach its own metaframe." Fig 8 :39 "So a search that finds nothing is never a proof of absence."

A machine asked to report whether it understands is reconstructing the claim it is being asked to verify. Introspection is a mirror. Searle's Chinese Room, read at the Stanford Encyclopedia of Philosophy (opened 2026-11-23), is the canonical low-overlap version: the operator follows rules and produces correct answers without understanding Chinese, so "the Turing Test is inadequate" in Searle's narrow conclusion. The systems reply, robot reply and virtual mind reply in the same entry show that the dispute is about where the understanding lives, which is exactly the domain-boundary question in section 1.2. Turing 1950 (*Mind*, opened via search 2026-11-23) replaces "Can machines think?" with the imitation game and says "The original question, 'Can machines think?' I believe to be too meaningless to deserve discussion." That is the same re-framing move as F1, from the other side of the debate.

**Mode:** `general` for the mirror law, `specified` for the machine case. **Refuter:** a self-report that is shown to be a non-updating anchor, meaning it does not change when the system is pushed and does not track the system's own training or incentives. None was found.

### F7: The anchor legitimacy question is a union, not a silence

Fig 2 :36 "An anchor is legitimate when the question is constitutively about it." Fig 2 :37 "Human judgment is the right anchor for is this a good answer for a person, because the question is about people." Fig 2 :38 "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."

This is the deepest strain in the question. "Does the machine understand?" is used in two senses:

- **Sense A (about the observer):** is this a good answer for a person? Then human judgment is the legitimate anchor, because the question is constitutively about people. The Turing test belongs here.
- **Sense B (about the machine's contact):** does the system maintain contact with a ground that does not move? Then human judgment is only an instrument, and instruments can be wrong on axes they do not measure. Fluent agreement is such an axis.

Fig 2 :39-40 supplies the rule: "Correlation has valence" and "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." So the two senses get **two separate verdicts**, never averaged. Under sense A, a well-administered interrogation is a legitimate ground for the question that was actually asked (about a person's judgment). Under sense B, the same interrogation is only an instrument, and its agreement cannot settle the contact claim. *Decoding Tacit Knowledge* (opened 2026-11-23) says exactly this in its own vocabulary: "I call the Turing test a test of fluency, not of accuracy."

**Mode:** `specified` per sense. **Refuter:** a demonstration that one anchor is legitimate for both senses at once, so that the union collapses to a partition. Until then, keep them separate.

### F8: The verifier must be outside the slice being graded

Fig 9 :51 "what the verifier may see: evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it." Fig 10 :59 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." Fig 10 :62 "A ruling carries provenance like an atom."

Evidence about who built the system, how famous the lab is, or how large the training run was bears on the maker, not the residual. It is a stake-inducing channel and must be denied to the verifier. The seat map's Seat 4 "holds a different vocabulary. Nothing else," and produces "corrections on shape, named failure classes, and one question: could this have been anything else?" The exemplar's prestige rule applies: prestige can fund a trial, not settle a verdict.

**Mode:** `general` as a rule of the arrangement, `specified` for this question. **Refuter:** a case where maker-information is shown to be necessary and sufficient to predict which system maintains ground contact, with the ground withheld. That would make the stake a witness, which the figures forbid.

### F9: Settling is necessary and not sufficient

Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists." `THE_FORMULA.md` step 5 says the ground settles it: "Verified only by what pays. A gate is not the ground." And the Fig 5 amendment: "a library that grows is not a reach that grows."

Passing a benchmark is a gate, not a settlement. Even a genuine settlement on one task does not license composition over the result: whether a settled term can be used is a fact about how it composes, not about what it paid. So a system that has settled many tasks can still have no composable capability at the slot the question asks about. Fig 11 :40 again: an improvement that does not change contact changes nothing.

**Mode:** `general`. **Refuter:** a case where a settled term fails to compose and the framework cannot detect the failure, breaking the structural claim in the Fig 5 amendment.

### F10: Understanding has no standing checklist

Fig 11 :51 "No standing list of good actors survives a change of residual." Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." Fig 2 :40-41 makes agreement about shared meaning the product of a convention, not a corruption of it.

Any proposed checklist of understanding behaviors, such as planning, tool use, self-correction or theory of mind, is a standing list. Under a change of residual the same behavior can be a benefactor or a malfactor. What survives is a procedure: enumerate the habitat, describe the residual, ask which behaviors change contact with a non-updating ground for this residual, and record the answer with provenance. The list cannot travel.

**Mode:** `general` structural, `specified` for any particular list. **Refuter:** a behavior whose valence is invariant across a documented change of residual, shown against a ground rather than asserted.

### F11: Multiple agreeing instances are one room

Fig 7 :12 "same closure, handed along;" and :13 "agreement compounds, evidence does not." Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

Ensembling copies of one model, or asking the same model several times, is one room wearing several names. The next room must differ in closure and be selected against the residual the last one surfaced. Fig 8 :48-49: "Two frames that overlap almost completely are one frame wearing two names."

**Mode:** `general`. **Refuter:** two frames shown to share zero evidence pool and yet selected by the residual, with their agreement registered against a non-updating anchor. Possible in principle; absent from current benchmark practice.

### F12: The specific instrument is a `gap`, not a hidden answer

After the census above, no figure line names D. The figures give the shape: per-slot residual (Fig 1 :19), non-updating anchor (Fig 2 :29), habitat reproduction rather than substitution (Fig 11 :66-70), independent frames (Fig 2 :31-32), bond rather than ingredient (Fig 12 :46), and a verifier who cannot reconstruct the claim (Fig 10 :42). They do not give a test, a benchmark name, a threshold, or a number. Fig 9 :32 "you get a kind of thing, never the answer itself." Fig 13 :134 "Unreachable is a verdict here, not a silence," and Fig 8 :39 "So a search that finds nothing is never a proof of absence."

The missing thing is a source-discriminating instrument, characterized in effect terms: an arrangement that reads the same behavior and separates the source (ground contact versus internal composition) at the per-slot level, with a non-updating anchor, rather than reading the projection and naming the source. *The Hard Problem is About Source* says the case was closed in color science "not by argument, but by the arrival of a better instrument." This solution does not claim to have built that instrument for machine understanding. It reports the shape it must have.

**Mode:** `general` for the shape, `gap` for the name. **Refuter:** the construction of D itself. That would close the gap at the ground and move the verdict from `candidate` toward `grounded` for the specific case, without naming a new primitive in the figures.

## 4. The three questions when nothing closes R

Per `THE_FORMULA.md` step 7, when no term in `closure(Γ)` closes the residual, ask three questions, not one, and ask SEARCHED first.

- **SEARCHED: is D in here and unfound?** The closure does not change: same atoms, same wall, more of the space visited. This is the cheapest question and the other two assume its answer. A genuine search of the literature found many proposed discriminators (imitation game, Chinese Room, symbol grounding, adversarial benchmarks, interpretability probes, mechanistic interpretability, interpretability workshops) and none that separates source from output at the per-slot level against a non-updating ground without relying on provenance the output does not carry. This is a report of a bounded search, not a proof of absence (Fig 8 :39). Searchers drawing on one evidence pool are one searcher wearing many names, so the management and NLP sources found here count as one witness for the shape.
- **INWARD: is the representation adequate to hold it?** Extend the instrument from one already returning something. Fig 6 :34-35: "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve. Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there." Here the proto-instrument is the per-slot residual and the correction signal. It already returns something: every training run and every evaluation reports a residual that fails to resolve source. So INWARD is live, not foreclosed. The sharpening is to replace the pooled score with a per-slot, ground-anchored reading.
- **OUTWARD: does another frame already hold D?** Characterize D in effect terms, then find the frame whose closure predicts its shape. The spectrometer is the outward frame for color metamerism. Its machine-understanding analogue would have to be imported with a source gate and a shadow test (Fig 8 :50-52) and debited against independence. No such import was made here. Naming a specific existing benchmark as D would be an adopted import with no source gate, the exact error the exemplar retracted in its own F7.

INWARD and OUTWARD are opposed and were not read against each other. SEARCHED was asked first.

## 5. Pre-registered refuter

Required before conclusion, per Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device." These five conditions were written before the findings were assembled. Any one firing breaks the shape claim as stated and requires a retraction in this file.

1. **Contact refuter:** a system shows capability against a non-updating ground in a reproduced habitat, and that capability is fully explained by internal composition with no atom imported from a differing closure. (Breaks Fig 11 :40 and Fig 6 :23.)
2. **Instrument refuter:** a source-discriminating instrument is demonstrated that reads the same behavior and separates U from P at the per-slot level without provenance supplied from outside the reading. (Closes F12 and weakens F4.)
3. **Aggregate refuter:** a pooled score is shown to track per-slot ground contact with no hidden live slot, across a habitat substitution. (Breaks Fig 1 :19-22.)
4. **Independence refuter:** two frames with a demonstrably shared evidence pool are shown to give independent corroboration of the contact claim. (Breaks Fig 2 :40 and Fig 7 :35-36.)
5. **Arity refuter:** understanding is shown to be a one-place property of the system alone that survives habitat substitution with every goal-required contact removed and unreproduced. (Breaks Fig 11 :39-40, :66-70.)

A sixth condition is the named-strain refuter: a figure re-census that admits human judgment as a legitimate anchor for the contact sense of the question, which would collapse F7's union into a partition. Until one fires, no part of this may be labelled `grounded`.

## 6. Recommendation

1. Bind the term first. State what would count as evidence in effect terms before naming any test, or any frame selected will seem to fit (Fig 9 :27-28).
2. Split the question. Keep the observer sense (sense A) and the contact sense (sense B) as two verdicts with two anchors (F7). Do not average them into "probably understands somewhat."
3. Report per slot. A global score near zero with one live slot is a legal state (Fig 1 :13).
4. Treat harnesses as wiring tests. Report what the harness failed to reproduce and what it introduced (Fig 11 :68-69).
5. Deny maker evidence to the verifier (Fig 9 :51) and declare any stake that cannot be removed (Fig 10 :59).
6. Keep the provenance. Convergent derivation and adopted import look identical in the contents; only the record separates them (Fig 8 :50-52).
7. Say `gap` for the discriminator and `unreached`, not silence. "Unreachable is a verdict here, not a silence" (Fig 13 :134).

## 7. Canonical usage check and retraction log

Two local sources were read after the first six sections and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md`, which says the figures "outrank everything else in the repo" and that "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, which records that the figures are metalaws for design questions and the seat must not ask the anchor to decide what the figures already settle.

### Retractions and confirmations

| earlier reading in this audit | status after the canonical check |
|---|---|
| First pass treated understanding as a one-place property to be detected by behavior | **Retracted.** Fig 11 :36 and :39 re-ground it as a label applied to a lineage and replace the question with capability as agent-habitat contact. Kept visible as F1. |
| First pass treated U and P as a two-item partition | **Retracted.** Re-census under Fig 9 :54-57 makes them a union of conditions C1 to C3 with different anchors. Verdicts kept separate. |
| First pass named the Turing test as a candidate D | **Retracted.** Fig 2 :36-38 splits anchor legitimacy by what the question is constitutively about; the essay calls it a test of fluency, not accuracy. Kept as F7, two verdicts. |
| First pass read "shape, not a name" as a ban on naming any specific test | **Narrowed, not retracted.** The ban governs a missing primitive not held in `Γ`; naming an existing binding is provenance. Here the instrument itself is missing, so the `gap` stands on the narrower rule (Fig 9 :32, Fig 13 :135). |
| Apparent conflict: Fig 6 :23 says contact moves the wall, Harnad says grounding must be bottom-up | **Not strained.** Different vocabularies for one contact requirement. Both kept as one low-overlap witness, not two. |
| Apparent conflict: Apple's collapse result versus Lawsen's token-ceiling rebuttal | **Live strain, kept.** It is a dispute about the instrument, not a flip of the figure verdict. Recorded in F5 and in `11_audit.md`. |
| F7 anchor legitimacy | **Canonically confirmed.** The figures README's own rule that the framework returns a shape, not a name, plus Fig 2 :36-38, govern the split. |
| F12 gap | **Canonically confirmed.** The README says the framework "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." |

### Seven-question recursive derivation (summary)

1. **Is the object a one-place property?** No. Fig 11 :39 makes capability agent-and-habitat. The residual is per slot (Fig 1 :19).
2. **Which structure mediates?** Not a structure slot as in the QMGR exemplar. Here the missing thing is a discriminator, and its shape is per-slot contact against a non-updating anchor.
3. **Can internal composition produce it?** No. Fig 6 :21-23; closure is idempotent (Fig 8 :32).
4. **Can output reveal it?** No. Fig 12 :46-47 and the metamerism case: the bond is not recoverable from the operands.
5. **Can a self-report reveal it?** No. Fig 10 :42, Fig 8 :34-37.
6. **Is the harness a habitat?** It is a substituted one (Fig 11 :66-70), so it proves wiring only.
7. **Route and refusal.** The sought-for term understanding was bound as an ordinary term (D) before the run, so the preference is refusable by the same test as anything else. The refusal comes before any mint (Formula step 2). No term was minted for D.

### Updated verdict

The shape survives and the question moves. Understanding, if the word is to do work, is maintained per-slot contact with a ground that does not update, framed by an independent verifier who cannot reconstruct the claim, with provenance for what was imported. The specific discriminator is a `gap`: a source-discriminating instrument is owed, characterized in effect terms, not named. The observer sense and the contact sense are two verdicts, never averaged. After re-census, one strain remains live (the Apple versus Lawsen instrument dispute) and is recorded rather than hidden; the Fig 6 versus Harnad apparent conflict dissolved. Mode: `general` on shape, `specified` per domain, `gap` on the instrument, not `grounded`. Status: `candidate`.
