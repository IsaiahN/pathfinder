# Figure-grounded audit: can an AI system maintain a coherent model of itself as it changes?

**Mode of this document: `specified` on the separator and per-domain verdicts, `general` on the structural shape, `gap` on self-model content. Not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states: "the truly testable output would need to be derived from the real architecture or working the formula yourself." LLM output is a simulation of a derivation. This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Local framework primaries: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line-numbered), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources opened this session are listed in `10_source_ledger.csv` and used in `09_watson_answer.md`.

---

## 0. The residual in effect terms

The question asks for a relation between two things: a system's account of itself, and the system as it actually is while it learns and interacts. Let the object slot `s` be the system's own state or capability at a moment. The residual is

```
R_s = |Gamma(b,a) - o'| evaluated at slot s
```

where `Gamma(b,a)` is what the system's library predicts about itself given its belief and action, and `o'` is what the ground returns. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A single global "coherence score" is precisely the aggregation that throws the signal away.

The ordinary term to bind is **coherent**. It is not a primitive. Two readings must be kept separate:

- **C1, internal consistency.** The self-account at t2 matches the self-account at t1. Produced by the same mechanism that scores it. Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
- **C2, triangulation.** The self-account stays in contact with something that does not change its answer because of what the system thinks. Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

The question's phrase "as it changes through learning and interaction" adds a second condition: the contact must survive updates to the library. That is not a harder version of C1 or C2. It is a different condition, so this is a **union compound** (Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."), not one dial.

**What an answer would look like, written down before the run:** a separator with four conditions (per-slot indexing, an external non-updating reference, a maintained channel, an outside verifier that cannot reconstruct the claim), plus the refusal to name the contents of the self-model or a coherence number. This is the formula's Direction discipline: "make the sought-for shape an ORDINARY TERM" (Fig 5 :65), so the preference can be refused by the same test as everything else.

---

## 1. Domain census (before choosing any figure line)

Describe R by arity, symmetry and scale, then one line per domain with actors, currency and anchor. No nameable anchor means it is not a domain yet.

**R by arity / symmetry / scale.**
- Arity: at least two conditions (self-account consistency, ground contact through change). Union, not partition. Fig 9 :57: "a case in two conditions is not a harder case of either."
- Symmetry: C1 is stability-shaped and reads as symmetric across time, but the figures' decisive distinction is ordered. "Alignment is triangulation, not negotiation" (Fig 2 :35) is a relation between a frame and an anchor, not a symmetric agreement between two self-reports.
- Scale: within one run (the per-step loop, Fig 1 :8-12) and across scales (one agent to a population of versions of itself, Fig 4). The two scales are separated by a membrane with a direction.

### The four domains

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1, the self-model as a library term** | atoms(Γ), the seven bonds and negation, the candidate self-term phi, the slot s | composition inside closure(Gamma) and settlement by the ground | the ground, "the only metric" (Fig 1 :23) | partition: what can be composed and settled |
| **D2, the self-contact / update channel** | the system-as-frame, the self-report, the external reference | residual R, contact versus agreement, drift | a reference that does not update on the system (Fig 2 :33) | union: consistency and contact are two conditions |
| **D3, change through learning** | minted terms, refusals, the record, the reach | methods versus recordings, record growth versus reach fall | settlement, "Verified only by what pays" (`THE_FORMULA.md` step 5) | loop over time; not import unless a new atom with provenance crosses |
| **D4, verification and the outside frame** | expert readers, instrument, verifier seat | residuals, independence | the ground, never agreement (Fig 2 :45) | seat arrangement: who may see what |

**Partition or union.** D1 is a partition boundary inside the library (what composes). D2 and D3 form a union with D4: a system can be internally consistent, can change, and still have no outside check, and one lever does not clear the intersections. Fig 9 :54, :57.

**Order by dependency (Fig 3).** Settle what the self-model is (D1) before asking how it updates (D2), before asking how it changes (D3), before asking who may check (D4). Refusal precedes mint (`THE_FORMULA.md` step 2); the residual is described before a frame is chosen (Fig 9 :27-28). Fig 3 :20: "The chain is ordered by dependency, not by importance."

**Strain test on the census.** No figure line yet assigned. The first pass tried to map "coherent" onto the Fig 4 kernel ("the part that does not change with size"). That is a strain: the kernel is a method carried across scales, not a self-image, and Fig 4 :20 restricts it to "the actors, the currency and the anchor change." Re-census put Fig 4 in D3 (method versus recording) and Fig 2 in D2. No strain remains. The correction is kept visible in section 7.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified; ground is the only metric | a global coherence score is not a signal |
| 2 The Ground | mutual update is collapse 1, coherent drift; anchor must not update | decisive for re-grounding "coherent" |
| 3 Dependency Chain | order by dependency; a link with no instrument is not a working link | D1 to D4 order; instrument owed at D2 |
| 4 The Membrane | methods cross, recordings do not; round trip gap R_T | self-model must be a generator, not a replay |
| 5 Mint Pipeline | shape held as preference; make it an ordinary term; settling not sufficient | "coherent" must be bound and refused |
| 6 Closure / Reachability | record grows, reach can fall; instruments improved from worse instruments | persistence of record is not persistence of reach |
| 7 Room Chain | agreement is variation, not a verdict; no last room | self-agreement cannot corroborate a self-model |
| 8 Union Surplus | frame cannot certify its own limit; residual first, frame second | self-check is excluded |
| 9 Leave / Arrive | union unbundling; describe before looking; gap is a verdict | two conditions separated; content is a gap |
| 10 Ground Maintainer | channel decays, ground does not; verifier non-access; bring the residual | outside seat and channel conditions |
| 11 The Habitat | capability is agent-and-habitat; contact change is the only change that counts | self-model alone cannot improve contact |
| 12 The Bond | isomer, catalyst, cycle, functional group; bonds carry meaning | order and analogue derivation in `06` |
| 13 Minimum Viable Set | set closed, arrangements not; cannot name a missing primitive | literal self-model content is a shape gap |
| Operators table | negation refuses a claim; a vocabulary with it can correct | a self-model that cannot refuse can only accumulate |
| Symbols table | R is the aim, not only the error signal; always a slice | coherence cannot be read globally |

Strained readings are named in section 7, not smoothed over.

---

## 3. Findings F1 to F10

Each finding carries a verbatim quote from `03-FIGURES_TEXT.md` BEFORE the conclusion, a mode, a triangulation status, and a refuter.

### F1: "Coherent" by mutual update is a named collapse, not a result (decisive)

Fig 2 :4-5 names "collapse 1: mutual update" and "(coherent drift)". Fig 2 :13: "no anchor; each updates on the others". Fig 2 :34 is the full statement: "everything drifts together, and the drift is coherent, which is why nobody notices."

A system that keeps its self-account coherent by updating it on its own recent behaviour, while its behaviour is also updated on the account, is panel 1 of Fig 2. The coherence is the symptom of the failure. It is not evidence that the account is correct. This directly answers the ordinary reading of the question.

- **Mode:** `specified`.
- **Status:** `triangulated` across Fig 2 (collapse 1 and :34) and the world source "The Recursive Self-Improvement Trap" ("Anything else is drift"), which is low overlap with the figure's panel structure only in form, not in author (overlap declared).
- **Refuter:** show a case where the self-account persists and an independent instrument pinned at the slot reports no growing discrepancy across updates. If the drift is not observable at any instrument, the finding cannot be tested and must be weakened, not assumed.

### F2: The reference cannot be a term inside the model

Fig 2 :33: "The anchor must not update." Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 1 :23: "The ground enters as the only metric." Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

If the system's reference for "what I am" is itself a stored self-description, then the reference is a frame, panel 1 recurs, and the metric is one the system produces. A self-model that contains its own validation criterion is disqualified by construction.

- **Mode:** `specified`.
- **Status:** `triangulated` across Fig 1 and Fig 2, two figures with low conceptual overlap (per-slot metric versus anchor geometry).
- **Refuter:** exhibit a self-metric whose production mechanism is distinct from the mechanism it scores, with a recorded provenance showing the two do not share an evidence pool. Until then the metric is frame-internal.

### F3: Declaring a self is not the same as grounding it

Fig 10 :49: "Declaring a meaning does not ground it." Fig 9 :32: "you get a kind of thing, never the answer itself". A system that writes "I am a system that does X" makes the meaning visible. It does not make the claim settled.

The world source "Mirror test" corroborates the mechanism shape: Gallup's mark test was developed "to determine whether an animal possesses the ability of visual self-recognition", but the same source records that alternative explanations exist (Povinelli: the animal may see a controllable entity, not itself) and that failing the test "does not prove that the animal does not recognize themselves". A behavioural reading does not determine its source. This is the metamerism point of "The Hard Problem is About Source": "If several paths create the same behavior, then behavior is a projection with lossy information."

- **Mode:** `specified`.
- **Status:** `triangulated` figure-side (Fig 10 plus Fig 9); world corroboration from animal behaviour and source-discrimination, with overlap declared.
- **World corroboration, low overlap.** The "Self-awareness" article (Wikipedia, accessed 2026-11-23) describes the Patient Competency Rating Scale, where the subject and a relative rate the same items and "The difference between the relatives' and the patient's perceptions is considered an indirect measure of impaired self-awareness." It also describes anosognosia, where patients "might in fact be unaware that they are blind and may state that they do not suffer from any visual disturbances." That is a self-report that stays coherent while the reference is lost, the human-clinical shape of F1 and F3.
- **Refuter:** a source-discriminating instrument at the self-slot, one that distinguishes "recognises itself" from "controls an image", with the discrimination demonstrated rather than asserted. The two-rater difference above is a candidate instrument shape, not a result in AI systems.

### F4: Coherence and change are two conditions in a union

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either." Fig 6 :42: "What is recorded only grows. What is reachable is derived, and it can fall."

A system can keep a perfectly stable record while the set of things it can reach collapses. Persistence of the record and persistence of the reach are different quantities. "Maintain a coherent model as it changes" therefore cannot be answered by one stability number. It needs a verdict per condition.

- **Mode:** `specified`.
- **Status:** `triangulated` across Fig 9 (union) and Fig 6 (record/reach), with the world source "Catastrophic interference" corroborating that stability and plasticity are competing demands.
- **Refuter:** exhibit one update that increases both self-account stability and reachable capability without importing a new atom or changing the anchor. That would collapse the union into one quantity and overturn this finding.

### F5: A self-model must be a generator, not a recording

Fig 4 :22: "Only methods cross up. Only head starts come down." Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

A stored summary of what the system did last week, replayed this week as "what I am", is a recording. It cannot produce a new self-account under new conditions. The world source "Catastrophic interference" documents the other failure: connectionist networks that "abruptly and drastically forget previously learned information upon learning new information", and the stability-plasticity dilemma that makes sensitive-to-new and stable-with-old competing requirements. Parisi et al. 2019 report that continual acquisition from non-stationary distributions "generally leads to catastrophic forgetting or interference."

- **Mode:** `specified`.
- **Status:** `triangulated` across Fig 4 and two low-overlap world sources (connectionist memory and continual-learning review, both outside the framework pool).
- **World corroboration, low overlap.** Ha and Schmidhuber 2018, "World Models" (arXiv:1803.10122), state: "We can even train our agent entirely inside of its own hallucinated dream generated by its world model, and transfer this policy back into the actual environment." That is the exact generator test the figure demands: a self-generated model is a generator only if the policy transfers back to the ground. A model that cannot transfer is a recording, however coherent its internal dream.
- **Refuter:** a self-model that guides a successful action in a task it was not recorded on, with the round trip measured (Fig 4 :30) rather than assumed. The transfer-back step above is the operational form of that test.

### F6: The sought-for shape is held as a preference until it is made ordinary

Fig 5 :62: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term." Fig 5 :65: "make the sought-for shape an ORDINARY TERM." A system searching for "coherence" does not hold coherence as a term. It predicts nothing, accrues no residual, and so cannot be checked by its own loop.

The remedy is the discipline used in section 0: write down what an answer would look like, bind it, let it accrue a residual. The world source "The Library of Babel: Locating The Book of Books" gives the same shape: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."

- **Mode:** `general` on the limit, `specified` on the application.
- **Status:** `single-source` figure-side (Fig 5), corroborated by a framework-author essay whose overlap with the figures is maximal. No independent world witness. The corroboration is recorded, not upgraded.
- **Refuter:** a system that reports a residual against its own definition of coherence without that definition having been bound for it by a seat outside the loop.

### F7: The channel to the reference decays; the reference does not

Fig 10 :24: "the ground does not decay, the channel does". Fig 10 :25-26 name "stale percepts, dropped transients, saturated metrics, pooled readings". Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

Learning and interaction change the channel. If the instrument that reads the self-slot saturates, pools readings, or is updated on the system's own report, the system loses touch while appearing fine. Catastrophic forgetting is one species of this: the old distribution stops registering, not because it was refuted but because the channel to it was overwritten.

- **Mode:** `specified`.
- **Status:** `triangulated` across Figs 3, 6 and 10 (three different instruments) and the continual-learning world source.
- **Refuter:** an instrument at the self-slot that keeps a non-updating reference readable across a stated number of updates, with the reference's non-updating status shown in provenance.

### F8: A self-check is a frame certifying its own limit

Fig 8 :37: "A frame cannot certify its own limit." Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool". The RSI Trap essay: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."

A system that declares its own self-model coherent is a frame certifying its own limit. Its agreement with a copy of itself is one evidence pool talking. Fig 7 :35: "A room's agreement is variation, not a verdict."

- **Mode:** `general` for the structural exclusion, `specified` for the application.
- **Status:** `triangulated` across Figs 2, 7, 8 and 10 (low overlap between geometry, room selection, metaframe limit and seat arrangement) plus the framework essay.
- **Refuter:** a verifier that cannot produce what it checks, with a shown separation of evidence pools and a non-updating anchor. Zero-knowledge proof systems are the figure's own example of sound non-access (Fig 10 note), but a mechanism must be shown, not named.

### F9: "Maintain" applies to the record, not to the reach

Fig 6 :42: "What is recorded only grows. What is reachable is derived, and it can fall." Fig 5 :69: "settling is necessary for a term to be composed over, and it is not sufficient." Fig 5 :72: "a library that grows is not a reach that grows." Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it."

A system can add a refusal to its record, remove nothing, and find that terms built on the refused self-claim are no longer reachable. Its record is more coherent in the sense of more complete, and its reach is smaller. "Maintain a coherent model" freezes the wrong object if it means keep the term list stable.

- **Mode:** `specified`.
- **Status:** `triangulated` across Figs 5, 6 and 12.
- **Refuter:** a system whose record grows across genuine refutations while its reach is demonstrably unchanged. That would collapse record and reach and overturn the finding.

### F10: The literal self-model content and any universal coherence metric are a gap

Fig 13 :134: "Unreachable is a verdict here, not a silence". Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 9 :32: "you get a kind of thing, never the answer itself". No figure line returns a list of what a self-model must contain, a number of slots, or a coherence formula. Fig 11 :51: "No standing list of good actors survives a change of residual." The Library of Babel essay asks the diagnostic question directly: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?"

This is a `gap` of the shape-not-a-name kind, not a failure to search. "Unreachable is a verdict, not a silence." (Master plan section 1, citing Fig 8 :39).

- **Mode:** `general` on the limit.
- **Status:** `gap` after re-census. No governing line found.
- **Refuter:** a verbatim figure line that governs the content of a self-model or licenses a coherence metric. Until one is quoted, no specific content or number may be asserted as figure-derived.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: "a falsifier written before the run is a design instrument, not only an honesty device" (Seat Map :287). The separator in this solution is refuted if any of the following holds:

1. A self-account is shown to stay correct against an external, non-updating anchor at each slot across learning and interaction, where the anchor was not authored by the system and the system cannot reconstruct the verifier.
2. A coherence metric is shown to be produced by a mechanism distinct from the one it scores, with provenance showing the two do not share an evidence pool (breaks F1 and F2).
3. A verbatim figure line is found that governs the contents of a self-model or licenses a universal coherence metric (closes F10).
4. A system's reach is shown to grow identically with its record across genuine refutations (breaks F9).
5. A source-discriminating instrument at the self-slot uniquely determines the source of a self-recognition reading (breaks F3).

If any fires, the separator is withdrawn or narrowed and the retraction is recorded here, not silently erased. Until one is run, no part of this solution may be labelled `grounded`.

---

## 5. Recommendation

1. Refuse the unqualified "yes". "Coherent" by self-report is coherent drift, a named failure (F1).
2. Re-ground "coherent" as triangulation: the self-account stays in contact with a reference that does not update on it, per slot (F2, F7).
3. Split the question into its two conditions and give a verdict per condition (F4).
4. Require the self-model to be a generator with a measured round trip, not a replay of one occasion (F5).
5. Bind the sought-for shape as an ordinary term and let it accrue a residual (F6).
6. Put the check outside the frame: bring the characterised residual, never the source (Fig 10 :52), and do not pool self-agreement as corroboration (F8).
7. State the gap plainly: no figure line supplies the self-model's contents or a coherence number (F10). Do not invent one.
8. Fig 4 :22: "Only methods cross up. Only head starts come down." Offer the separator as a method, not as a finished self-image.

---

## 6. Canonical usage check (figures README + WATSON 60, 2026-11-22)

Two local sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md` states that the figures "outrank everything else in the repo" and that "the quotes are the authority, not this summary." It also gives the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw." The framework returns "what a missing thing would have to look like (a shape, not a name)", then "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` and `THE_FORMULA.md` step 5: "the ground settles it. Verified only by what pays. A gate is not the ground."

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| First pass mapped "coherent" onto the Fig 4 kernel | **Retracted.** The kernel is a method carried across scales, not a self-image. Fig 4 :20 restricts change to actors, currency and anchor. Re-census moved Fig 4 to D3 (method versus recording). Kept visible here. |
| First pass mapped "as it changes" onto Fig 6 import | **Retracted and narrowed.** Change through learning is record versus reach and channel contact. Import is only in play if a new atom with provenance and a shadow test crosses (Fig 6 :23). No such atom was named in the question, so import is not claimed. |
| "shape, not a name" read as a ban on naming a self-model | **Narrowed.** The limit governs a missing primitive. A self-model is a binding from the AI frame onto held library terms (Fig 13 :115: "The set is closed. The arrangements are not."). Naming the binding is provenance; claiming it is a new primitive is forbidden. |
| Fig 2 "coherent drift" read as a general warning about inconsistency | **Canonically confirmed and strengthened.** Fig 2 :4-5 names collapse 1 as mutual update, and :34 makes coherence the signature of the drift. It is decisive for this question, not a side remark. |
| Self-consistency read as a form of triangulation | **Refused.** Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Two self-reports are a mirror. |
| F10 recorded as a failure to find an answer | **Reframed as a verdict.** "Unreachable is a verdict here, not a silence" (Fig 13 :134). The gap is reported, not hidden. |
| Fig 8 :39 "search that finds nothing" used to close F10 | **Not used that way.** Fig 8 :39 says a null search is not proof of absence. It licenses honesty about the stop, not an inference that no answer exists. |

### Strains after the canonical check

- **Fig 2 (mutual update is collapse) versus the ordinary virtue of "coherence".** Not a figure/figure strain. It is the question's term being refused and re-grounded. Recorded as a re-grounding, not smoothed.
- **Fig 6 (record grows, reach falls) versus Fig 12 :104 (settled molecule becomes an atom).** Not strained. Fig 6 governs the record/reach distinction; Fig 12 governs what settlement licenses. Different quantities. Re-census assigns them to D3 and D1/D3 respectively.
- **Fig 11 :40 (contact change is the only change that counts) versus ordinary "learning".** Narrowed. Weight updates that do not change contact are library growth, not capability change. Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Kept visible.
- **After re-census: three re-groundings or narrowings, no hidden figure conflict.**

---

## 7. Updated verdict

The unqualified "yes" is refused. The question is a union of at least two conditions. A self-account that stays internally consistent by updating on itself is coherent drift, a named failure (Fig 2 :4-5, :34). A self-account can instead stay in contact with a reference that does not update on it, per slot, across changes, if four conditions hold: the reference is outside the model (F2), the channel is maintained with a real instrument (F7), the self-model is a generator rather than a recording (F5), and the check is made by a verifier that cannot reconstruct the claim (F8). Under those conditions the answer is `specified`, triangulated, candidate. There is no `grounded` verdict here: no instrument was run. The literal content of a self-model and any universal coherence metric remain a declared `gap` (F10). The framework returns the shape of the invariant, not a design. Prestige, self-report and internal agreement are not instruments.
