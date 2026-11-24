# Figure-grounded audit: can a system reason through the unfamiliar?

**Mode of this document: `general` on the structural shape, `specified` per domain, `gap` on the empirical attribution. Not `grounded`.** `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23) says LLM output can *"simulate an approximate answer/output"* but that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* *How Intelligence Actually Works* adds that when outputs are *"contrived to fit the formula"* they cannot verify the framework. This document is a simulated derivation checked for internal consistency against the figures. It cannot settle whether any actual AI system reasons. See `05_what_shape_means.md` §7.

**Sources.** The verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, the eight essays, and the machine-learning, cognition and animal-behaviour sources listed in `10_source_ledger.csv`. Every figure quote below was checked against the extract before writing.

---

## 0. The residual, in effect terms

> Can AI systems reason through unfamiliar problems, or do they primarily extend patterns learned from prior examples?

Restated as an effect: a system S holds a library Γ of atoms and settled molecules built from prior examples. A problem P arrives that is not in the example set. S produces a successful response. What is the **source** of that success?

| option | what it says | what it leads to |
|---|---|---|
| A, "reasoning through the unfamiliar" | the response is a new composition that reaches beyond what the examples supplied | a generator claim: S can produce a term its training set did not contain |
| B, "extending learned patterns" | the response is a reuse or recombination of what the examples supplied | a playback claim: S stays inside the space its training set defined |

The residual R is not the score on P. It is the gap, per problem slot s, between what Γ(b,a) predicts P requires and what P actually demands: `R = |Γ(b,a) − o′|` per slot (Formula step 1; Fig 1 :11). The disputed object is **the source of a successful R closure**, not the success itself. A score is a reading of success. It does not name a source.

Binding the sought-for shape as an ordinary term (Formula, "Direction"): an answer would look like a **discriminator**, a procedure that, for a given (S, P, success), tells whether the success was (i) search inside an unchanged closure, (ii) a new molecule composed from held atoms, or (iii) an import of an atom from a frame whose closure differs. Write that down now so it can accrue a residual like anything else. This is the pre-registered shape. By Fig 9 :32, it returns a kind of thing, not a verdict on a named model.

---

## 1. Domain census, before choosing any figure line

**R by arity, symmetry, scale.** Arity: two-indexed `(system, problem-slot)`, with a third hidden index, the frame that judges novelty. Symmetry: asymmetric, because novelty is a relation between a problem and a particular Γ, not a property of the problem; a generator crosses levels and a playback does not (Formula step 6). Scale: one inference (steps 1 to 5, within one scale) versus acquisition of a capability across problems (Fig 4 membrane, steps 6 and 8). The question silently mixes the two.

| id | domain | actors | currency | anchor | question type |
|---|---|---|---|---|---|
| D1 | Model-internal composition | atoms, bonds, candidate φ, slots s | residual per slot, cost(φ) vs cost(R), closure and reach | the figures as metalaws; the ground for any settlement | partition inside closure: which molecules are composable |
| D2 | Corpus, priors and habitat | examples, inherited priors, RLVR, curriculum, seat | contact, atom import, enumerated habitat | an outcome that does not update on the model's report | union: what the library contains and what crosses its wall |
| D3 | Benchmark and evaluation frame | test designers, held-out sets, scores, leaderboards | measured residual, contamination, substituted habitat | the actual problem's correct answer | union: novelty of form plus availability of a discriminator |
| D4 | Human and animal comparison | people, corvids, pigeons, experimenters | transfer to novel samples, relational mapping, inhibition | controlled experiment | union: fluid and crystallized conditions overlap |
| D5 | Verification of this package | expert readers, figures, refuter | agreement versus residual | the ground, never agreement | partition of roles (Fig 10), single evidence pool here |

**No domain without a nameable anchor was admitted.** D5 is included because it has one: the ground is not agreement. A sixth domain, "consciousness" or "understanding" as an inner property, is **not** admitted: no anchor for it was named in the question and Fig 11 :36 calls that question *"the wrong question."*

**Union, not a partition.** Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"a case in two conditions is not a harder case of either."* A success can be simultaneously a new molecule relative to the examples (novel arrangement) and a reuse of the same atoms (pattern extension in the other sense). The either/or of the question bundles two conditions. D2 and D3 overlap where an import is both a training change and a test-time import. The overlap is a compound with its own loop, not an average of two verdicts.

**Order by dependency (Fig 3 :20: *"The chain is ordered by dependency, not by importance."*)**

1. Perception: can S tell P from a stored example, per slot? (Fig 1 :19)
2. Vocabulary: does S have terms for what P affords? (Fig 3 :7)
3. Objective: can S say what progress on P would be, in its own terms? (Fig 3 :10)
4. Planning: a route to that objective via composition. (Fig 3 :13)
5. Learn and carry: does a method cross up as a method, not a recording? (Fig 4 :22)

The break is between 2 and 3. Whether a system can represent that a problem is novel, and what would count as settling it, has no common instrument across D1 and D3. A reading taken below the break would be a reading of nothing (Fig 3 :23).

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per object slot; frame-internal scores disqualified | novelty must be indexed per slot; a score cannot name a source |
| 2 The Ground | anchor must not update; agreement from one pool is worthless | the discriminator needs a non-updating anchor, not a panel of agreeers |
| 3 Dependency Chain | order by dependency; the vocabulary/objective link | the break sits at "what would count as progress on the unfamiliar" |
| 4 The Membrane | methods cross up, recordings do not; round-trip gap | a benchmark success may be a replay of one occasion |
| 5 Mint Pipeline | three guards as a product; novelty relative to atoms; "nothing new here" | composition can be novel without a new atom; machinery firing is not a milestone |
| 6 Closure / Reachability | MINT adds no atom; only IMPORT moves the wall; novelty relative to atoms | the binary "reason vs extend" is not the wall-crossing distinction |
| 7 Room Chain | agreement is variation, not a verdict; no last room | no final room in which a model is declared a reasoner |
| 8 Union Surplus | convergent derivation and adopted import look identical in contents; no proof of absence | a score cannot identify a source; provenance is the whole issue |
| 9 Leave / Arrive | union before partition; describe the residual first; filters are not witnesses | the question must be unbundled before any model is tested |
| 10 Ground Maintainer | verifier cannot reconstruct the claim; declare stakes | the evaluator must not be shown the framework before recording a verdict |
| 11 The Habitat | capability is agent-and-habitat; improved contact changes capability; synthetic solve proves wiring | "AI systems" is the wrong unit of attribution |
| 12 The Bond | same atoms, different bond, different substance; functional group | the two candidate sources are isomers over a shared atom set, or not even that |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | search without import stays in a finite reach; a missing primitive cannot be named from inside |
| Operators table | sequence, comparison, negation are different operators | "reasoning" is not a single bond; a refusal is ¬, not a new molecule |
| Symbols table | `R` is the aim; the ground is the anchor | the residual is the source of the success claim, not the accuracy figure |

No figure line was chosen before the census above was written. Strained readings are named in §7, not smoothed over.

---

## 3. Findings

### F1 — The either/or is a union of two conditions (decisive for the question's form)

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
Fig 9 :57: *"a case in two conditions is not a harder case of either."*

The proposed options A and B are not opposite values of one variable. A success can require a novel arrangement of held atoms (composition, source A in one sense) while using nothing that was not learned from examples (source B in another sense). Conversely, an import of a new atom from a different frame is neither "reasoning" in the sense of pure composition nor "extension" of the old patterns. Three cases, not two:

| case | what happens | atoms change? | which option of the question does it satisfy? |
|---|---|---|---|
| S1 | search inside closure, same molecules reached at last | no | B |
| S2 | new molecule from held atoms, not previously instantiated | no | both A and B, depending on which sense of "pattern" is used |
| S3 | import of an atom from a frame whose closure differs | yes | neither, strictly |

**Verdict:** the question as posed is malformed as a partition. This is `general` and triangulated across Fig 9 (union rule), Fig 6 (atoms versus arrangements) and Fig 12 (isomer rule), which have low overlap. It is not an evasion: it says what a well-formed answer must distinguish.

**Refuter:** show a clean partition, with success on unfamiliar problems having zero overlap with reuse of prior patterns, under a shared definition of "pattern." Until then the union stands.

### F2 — "Unfamiliar" is a relation to Γ, indexed per slot, not a property of the problem

Fig 6 :22: *"NOVEL means novel relative to atoms, not to the world."*
Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

A benchmark item is "unfamiliar" for one system and a near-neighbour of a stored item for another. Averaging novelty over a whole benchmark destroys the only signal that says which problem-slot required a new composition. The phrase "AI systems reason through unfamiliar problems" therefore cannot be evaluated without naming a system and a slot.

**Verdict:** `general`/`specified` per slot, triangulated (Fig 6 novelty rule plus Fig 1 slot rule). **Refuter:** a definition of novelty that is frame-independent and survives per-slot indexing. None appeared in any source opened this session; Chollet's benchmark work is the nearest attempt and it is explicitly relative to stated priors.

### F3 — Composition inside a closure can be genuinely new without adding an atom

Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*
Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."*
Fig 5 :29: *"nothing new here"* (the result when the machinery fires and the answer was already in the library).

This is the load-bearing correction to the intuitive reading of the question. A system that "only extends patterns" can still produce a molecule that never appeared in its examples, because the arrangements over a fixed atom set do not run out (Fig 13 :117-118: *"infinite effort inside a finite reach"* describes search inside that reach). So a novel successful output is **not** evidence for a mechanism that transcends prior examples. It is evidence for a composition that was reachable all along.

Equally, the third guard in Fig 5 means that a system running the full loop can return nothing new; machinery firing is not the milestone. So a wrong answer on an unfamiliar problem is **not** evidence that the system lacks composition.

**Verdict:** `general`, triangulated (Fig 6 plus Fig 13 plus Fig 5, low overlap). **Refuter:** a case where a novel molecule is composed from an atom absent from `atoms(Γ)` with no import. That would break Fig 6 :21.

### F4 — Only an import moves the wall, and import has a source gate

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
Fig 8 :32: *"no search, however long, adds an atom."*
Fig 8 :45: *"Two frames together reach what neither reaches alone."*

For the subclass of unfamiliar problems whose solution requires a primitive the training corpus never supplied, more search of the same library cannot close R. What is owed is an import from a different closure: a new instrument, a new sensorium, a provenanced term from another field. Fig 8 :53: *"Residual first, frame second."* The frame must be chosen by the residual, not picked first and then justified.

This is where *They're Scanning Books When They Should Be Studying Nature* bears directly: *"The real import is not a new term in the existing space. It is a new dimension of the space."* The essay calls a corpus *"a compressed output of human minds"* and says *"outputs do not contain their generator."* It is high overlap with the framework author, so it corroborates but does not independently witness.

**Verdict:** `specified`, triangulated (Fig 6 and Fig 8 are different figures with different jobs: wall and provenance). **Refuter:** an atom entering Γ with no identifiable differing frame and no source gate. That would defeat the import rule.

### F5 — A score cannot comment on the source of a success

Fig 8 :50: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*
Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*

*The Hard Problem is About Source* gives the mechanism in plain terms: an instrument reads green and *"the instrument is speaking only about what it measured, it cannot comment on the source."* It was *"the spectrometer, not an argument"* that resolved the case. Applied here: accuracy on a held-out set is the green reading. It does not say whether the source was composition, replay, or import. Provenance and a source-discriminating instrument are required.

World corroboration is unusually direct here. *GSM-Symbolic* (Mirzadeh et al., arXiv 2410.05229, ICLR camera ready) reports that *"the performance of all models declines when only the numerical values in the question are altered"* and hypothesises that *"current LLMs cannot perform genuine logical reasoning; they replicate reasoning steps from their training data."* *The Illusion of Thinking* (Shojaee et al., arXiv 2506.06941, NeurIPS 2025) reports that *"LRMs face a complete accuracy collapse beyond certain complexities"* and that *"they fail to use explicit algorithms and reason inconsistently across scales."* Both are readings that vary the probe while holding the claimed capability fixed, which is the shape of instrument the figures call for. Both are from the same machine-learning pool as the benchmark claim they test, so they are one witness with two faces, not two independent witnesses.

**Verdict:** `general` on the source-underdetermination, `specified` on the need for a discriminator, triangulated (Fig 8 provenance, Fig 1 frame-internal quantities, Fig 2 anchor). **Refuter:** a behavioural reading that identifies the source across two low-overlap frames without provenance or an instrument change. Should one appear, F5 falls.

### F6 — The unit of attribution is agent and habitat, not agent alone

Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."*
Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*
Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

So "do AI systems reason" asks the wrong subject. The answerable version asks what makes a particular system-habitat pair capable of closing a residual on a problem whose primitives were not supplied. This also explains why a benchmark can be solved without generality: the harness substituted a habitat in which the required contact is already present.

*How Intelligence Actually Works* states the author's own definition: *"The definition of what we call General Intelligence is that a system can answer questions to problems it's never seen before and in environments it has no training data for."* That definition is habitat-inclusive, consistent with Fig 11, and it is the strongest reason to keep the question alive rather than dissolve it.

**Verdict:** `general` structural, triangulated (Fig 11, Fig 4 membrane, Fig 6 instruments). **Refuter:** an agent-only improvement with no contact change that reliably transfers to a genuinely novel habitat. Fig 11 :72 records this as the standing falsifier; if it fires, the capability claim comes back wrong.

### F7 — The chain breaks at vocabulary and objective, and that is where "unfamiliar" lives

Fig 3 :20: *"The chain is ordered by dependency, not by importance."*
Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*

Do current systems perceive novelty? Often yes, per slot: a model can report uncertainty or detect distribution shift. Do they have a vocabulary of affordances for the novel problem? Sometimes. Can they say what would count as progress in their own terms on a problem whose rule is not given? This is the weakly instrumented link. A model's confidence is not a progress measure; Fig 1 :24 forbids scoring a frame with a quantity it also produces.

The remedy is not "more reasoning" but an instrument already returning something: novelty probes (SCAN's *dax* split, GSM-Symbolic perturbations, ARC tasks) that vary the unfamiliar while holding structure fixed. Lake and Baroni (arXiv 1711.00350, ICML 2018) found that recurrent networks *"can make successful zero-shot generalizations when the differences between training and test commands are small"* but *"when generalization requires systematic compositional skills ... RNNs fail spectacularly."* That is a discriminating instrument, not a verdict on all systems.

**Verdict:** `specified`, single-source for the figure part (Fig 3), with the world instrument as corroboration. **Refuter:** a direct instrument for "what counts as progress here" that works across unfamiliar domains without a ground that pays.

### F8 — There is no last room in which a system is declared a reasoner

Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*
Fig 9 :32: *"you get a kind of thing, never the answer itself"*
Fig 13 :134: *"Unreachable is a verdict here, not a silence"*
Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

Even a perfect discriminator returns a shape, and even a perfect score is not a final room. The framework cannot name a model as *the* reasoner, because that would be a name where it returns a shape, and a name for a missing primitive it cannot hold. So the empirical attribution is a `gap` of the unreachable kind at this budget, stated plainly. The honest stop is not silence: it is a report of what the instrument would have to detect.

**Verdict:** `general`, triangulated (Fig 7 and Fig 13, plus Fig 9's shape rule). **Refuter:** a closed-room argument that settles the attribution for all systems. Fig 9 :44 rules it out: *"Only a sealed room can be searched to the end, and no frame is a sealed room."*

### F9 — What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| The either/or is a union of conditions, not a partition | `general` | Fig 9 :54, :57 | survives, triangulated |
| Novelty is relative to Γ and indexed per slot | `general` | Fig 6 :22; Fig 1 :19 | survives, triangulated |
| A novel molecule can be composed without a new atom | `general` | Fig 6 :21; Fig 13 :115 | survives, triangulated |
| A different closure is required when an atom is missing | `specified` | Fig 6 :23; Fig 8 :32 | survives, triangulated |
| A score cannot identify the source of a success | `general` | Fig 8 :50; Fig 1 :27 | survives, triangulated |
| Capability is a property of agent and habitat | `general` | Fig 11 :39-40 | survives, triangulated |
| Which actual system reasons, and on which problem slot | `gap` | Fig 9 :32; Fig 13 :135 | unreachable at this budget, not silenced |
| That current systems are only pattern extenders | refused | F3 plus world sources | a score-level inference, not a source finding |

---

## 4. Pre-registered refuter (written before the conclusion)

Per Fig 8 discipline and the exemplar's rule: a falsifier written before the run is a design instrument. Each item fires against a specific finding, and firing withdraws that finding rather than absorbing it.

**R1 (against F1).** Define "pattern" and "novel" so that reuse of prior patterns and composition on an unfamiliar problem form a clean partition with empty intersection, verified over three low-overlap domains. The union claim falls.

**R2 (against F3 and F4).** Exhibit a system composing a term from an atom absent from `atoms(Γ)` with no import from a frame whose closure differs, confirmed by provenance. Fig 6 :21 and :23 fall.

**R3 (against F5).** Exhibit a behavioural reading that, without provenance or instrument change, identifies whether a success came from convergent derivation or adopted import across two low-overlap frames. F5 falls.

**R4 (against F6).** Exhibit an agent-only improvement that changes no contact and still transfers reliably to a genuinely novel habitat. Fig 11 :40 falls. This is Fig 11 :72's own standing falsifier.

**R5 (against F8).** Exhibit a closed-frame proof that settles the attribution of reasoning to a named system for all unfamiliar problems. Fig 9 :44 and Fig 13 :135 fall.

If any fires, the retraction is recorded in §7 with the date and the figure line, and the corresponding verdict becomes `refuted`, not `reinterpreted`.

---

## 5. Recommendation

1. Do not answer the question as a binary. Split it into S1, S2 and S3 (§3 F1) and ask which case the evidence actually covers.
2. Index every claim by system and problem-slot (Fig 1 :19). Drop benchmark averages from the verdict; they are filters for the budget.
3. For a source claim, require a discriminator: a probe that varies novelty while holding structure fixed, plus provenance for any import. Without both, report `gap`, not a name.
4. Attribute capability to a system and its habitat (Fig 11 :39), not to a model in isolation. Treat a benchmark solve as wiring evidence only (Fig 11 :70).
5. Send the generator, not the recording: the residual, the shape and the refuter. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*

---

## 6. Canonical usage check

Two framework documents were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments stop and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7's three questions must stay distinct (SEARCHED, INWARD, OUTWARD), step 5's rule that *"A gate is not the ground"*, and the mode rule quoted at the top of this file. Step 3's novelty guard is *"φ ∉ atoms(Γ)"* after composition, which is the exact reason F3 holds.

### Retraction and confirmation log

| earlier reading in this audit | status after canonical check |
|---|---|
| "Only imports produce novelty" (first draft of F3) | **Retracted.** Re-census: Fig 6 :22 says NOVEL is relative to atoms, and Fig 5's third guard checks novelty after composition. A new molecule from held atoms is novel and adds no atom. F3 was rewritten around this. |
| "Fig 8 :32 means search is useless" | **Retracted.** Re-census: Fig 8 :32 says no search adds *an atom*. Formula step 7 SEARCHED says the same wall can be swept more fully. Search is the right remedy for S1 and S2, not for a missing atom. |
| "The question is a partition with two answers" | **Refused, not merely unsupported.** Fig 9 :54 and :57 plus Fig 12's isomer rule decide union. Kept as a visible refusal in F1. |
| "Fig 11 :70 proves benchmarks are worthless" | **Narrowed.** It proves a synthetic solve is wiring evidence, never capability evidence. Benchmarks remain useful as instruments for the residual (Fig 6 :32), so F7 was kept and F6 rewritten. |
| "AI systems, as a class, reason / do not reason" | **Refused.** Fig 11 :39 makes the unit agent-and-habitat; Fig 1 :19 makes the residual per slot. The class-level sentence was removed from the verdict. |
| "A system that fails an unfamiliar probe does not reason" | **Refused.** Fig 5 :49: *"Machinery firing is not the milestone."* Failure to mint is not failure of the mechanism. Fig 5 :29 names the alternative reading. |
| Source-underdetermination claim | **Canonically confirmed.** Fig 8 :50 and the README's *"a shape, not a name"* both govern. High overlap with the framework author is declared in `10_source_ledger.csv`. |
| No-last-room claim | **Canonically confirmed.** The figures README has a section titled *"This is not a Theory of Everything - and that is the point"*; Fig 7 :6 names *"the limit: no last room."* |

### Strains sent to re-census, not kept as witnesses

- **Fig 13 :115 versus Fig 5's mint:** the set of kinds is closed but arrangements are not. These govern different quantities (kinds versus arrangements). Not a strain after re-census; it is the engine of F3.
- **Chollet's skill-acquisition efficiency versus Fig 11's capability:** both are in the neighbourhood of "general intelligence" but they measure different things: priors-relative acquisition efficiency versus agent-and-habitat contact. The *Arrival of the Fittest* citation list itself calls Chollet *"a parallel"*, not a borrowed result. The world source does not overrule the figure.
- **GSM-Symbolic and The Illusion of Thinking versus a positive reasoning claim:** both are benchmark readings from the same pool and both are source-level inferences dressed as measurements. They corroborate the *need* for a discriminator (F5), not the claim that no system reasons. Recorded as corroboration with declared overlap, not as a verdict.

---

## 7. Updated verdict

The question's binary does not survive the census. The figures decide that a success on an unfamiliar problem can be (S1) more search inside an unchanged closure, (S2) a genuinely new molecule composed from held atoms, or (S3) an import from a differing closure. S2 is "reasoning" in the sense of a new composition and "pattern extension" in the sense of the same atoms, so the offered options overlap. S3 is neither, strictly. A benchmark score cannot separate the cases because contents do not carry provenance; what is owed is a source-discriminating instrument plus an anchor that does not move. Capability belongs to a system and its habitat, never to a model alone. Which named system reasons on which slot remains `gap`, stated as unreachable at this budget, not silence.

After re-census: no hidden strains. Two earlier readings were retracted and preserved above (novelty requires import; Fig 8 :32 forbids search). Mode: `general` on the shape, `specified` per domain, `gap` on empirical attribution. `candidate` until a ground pays.
