# Figure-grounded audit: when does AI assistance improve human judgment?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (read 2026-11-24): LLM output simulates an approximate answer, and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, all `Fig N :line` citations), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources are listed in `10_source_ledger.csv` and were all opened 2026-11-24.

---

## 0. The residual, in effect terms

A person holds a library Γ (skills, concepts, memory, terms for what a situation affords) and meets tasks with ground `o'`. Per-slot error is `R = |Γ(b,a) - o'|` (Fig 1 :11, :19). AI assistance inserts a new actor into the person's habitat. Two quantities then move, and they need not move together:

- **Q1, aided accuracy:** the combined human-plus-AI system's residual against the ground on the current task.
- **Q2, own capability:** the person's unaided residual on held-out tasks after the aid is withdrawn, plus whether they can still produce a new judgment rather than replay a recorded one.

The residual under audit is the **divergence between Q1 and Q2**. The common claim "AI improves human judgment" is underdetermined until it says which quantity it means. Merging them is the aggregation error: Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* and Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :23 *"The ground enters as the only metric."* and Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* So user confidence or perceived helpfulness cannot be the metric for either quantity.

**Bound sought-for shape (Direction).** Before the run I bind as an ordinary term: *assistance improves judgment without weakening own skill if (i) it changes the person's contact with the ground, (ii) it supplies a re-applicable method rather than a recording, and (iii) Q1 and Q2 are measured separately on different slots.* That shape is the term to be refused or kept by the same test as everything else, not a preference smuggled in afterwards.

---

## 1. Domain census (before any figure line was chosen)

R by arity, symmetry, scale; one line per domain giving actors, currency and anchor; partition or union; order by dependency.

| domain | arity / symmetry / scale of its R | actors | currency | anchor (nameable?) | type |
|---|---|---|---|---|---|
| **D1, the judgment task** | arity 2 (person, aid, ground), symmetry broken (the aid is a different closure, not a mirror), scale = per task slot | human judge, AI system, the thing judged | error against ground, per slot | the ground, an outcome or measurement. For a question constitutively about people, human judgment itself is the anchor (Fig 2 :36-37). Nameable: yes | partition boundary: which compositions count as contact with this ground |
| **D2, the person's own skill and understanding** | arity 1 (the person's internal Γ and reach), symmetry internal to the person, scale = across tasks and over time after withdrawal | the person's held terms, bonds, memory, attention | can produce a new judgment versus replay a prior one; held-out unaided residual | unaided performance on held-out tasks with feedback. Nameable: yes | maintained habitat: introduction is available, exclusion is not |
| **D3, design and verification** | arity 2 (designer, recipient), symmetry broken (the checker may not author the claim), scale = across studies and labs | designers, experimenters, users, public venues | public record, provenance, independence | the ground, never agreement (Fig 2 :35, :40). Nameable: yes | union of overlap conditions; unbundle before searching |

**Dependency order (Fig 3).** Fig 3 :20 *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* Link 3 is the objective: saying what counts as progress in each domain's own terms. Most AI work lands above the break, on model accuracy, which is a link-1 and link-2 improvement for Q1 only. Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."* There is no standard instrument for Q2 in deployed systems, so Q2 is not a weak reading of Q1. It is a reading of nothing. Fig 3 :29 *"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed. Most improvement effort in practice lands above the break, because that is where the measurements already exist."*

**Partition or union.** D1 and D2 are not two versions of one quantity. A single lever (give the person an aid) clears the region where only Q1 holds and leaves the intersection standing. Fig 9 :4 *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* The compound must be unbundled before a frame is chosen.

No domain here lacks a nameable anchor, so none is marked "not yet a domain." If an anchor could not be named, the honest verdict would be `gap`, not a softer reading.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per slot, ground is the only metric, frame-internal quantities disqualified | both Q1 and Q2 must be per-slot ground readings; no average |
| **2 The Ground** | anchor must not update; human judgment is anchor for questions about people; correlation disqualifies | decides the anchor question, the core of "improve judgment" |
| **3 Dependency Chain** | objective before planning; a link with no instrument is not a link that works | Q2 lacks an instrument in practice; effort on model accuracy cannot rescue it |
| **4 The Membrane** | methods cross up, head starts down, replays cannot produce a new one | separates improve (method) from weaken (recording) |
| **5 Mint Pipeline** | three guards, MDL bargain, settling not sufficient for usability | an aid must be settled and composable by the person |
| **6 Closure / Reachability** | import is the only operator that moves the wall; inward and outward opposed | an AI answer is an import; needs source gate and shadow test |
| **7 Room Chain** | same closure handed along; agreement compounds, evidence does not | consensus that AI helps is not a verdict |
| **8 Union Surplus** | two frames reach what neither reaches alone; provenance separates import from convergence | low overlap between person and aid is where surplus lives |
| **9 Leave / Arrive** | split a union before searching; describe the effect; filters are not witnesses | unbundle Q1 and Q2 before choosing a literature |
| **10 Ground Maintainer** | ground does not decay, channel does; verifier non-access; declare stake | skill loss is a channel failure; first contact carries residual, not theory |
| **11 The Habitat** | capability is agent-and-habitat; isolation substitutes the habitat; introduction available, exclusion not | governs the weakening half directly |
| **12 The Bond** | bonds carry the route, not just the ingredients; settled molecule becomes atom | understanding requires bonds, not just stored answers |
| **13 Minimum Viable Set** | "you get a kind of thing, never the answer itself"; unreachable is a verdict | the answer is a shape with two conditions, not one best tool |

Strained readings are named as such in section 6, not smoothed over.

---

## 3. Findings, each with verbatim lines and its own refuter

### F1 - Two quantities, not one (decisive for the framing)

Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* Fig 9 :4 *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

Q1 and Q2 are a union compound. A system can improve the aided answer on this slot while reducing the person's unaided reach on the next one. Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* The round trip here is aid then no-aid; its gap is the measurement of what the person lost.

**Refuter:** a controlled study in which Q1 and Q2 move in the same direction on every measured slot, with no trade-off anywhere, breaks the union reading. Then one quantity would do and the split would be unnecessary. **Status: triangulated** (Fig 1 slot rule and Fig 9 union rule, low overlap).

### F2 - What counts as the anchor (governs "improve judgment")

Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :36-37 *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."*

This is the most direct figure line in the whole question. For a question constitutively about people (is this answer good for this person, is this diagnosis the right one for this patient), human judgment is the anchor, not because humans are unbiased but because the question is about people. AI is an **instrument** for questions on axes it measures. An instrument can be wrong on axes it does not measure. Treating an AI output as the anchor for a person-level question is a category error. Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

World corroboration, low overlap: Glickman and Sharot (Nature Human Behaviour, 2024/2025) found that a biased AI amplifies human bias but *"when humans interact with an accurate AI system, their judgements are improved."* That is exactly the instrument/axis distinction. Vaccaro, Almaatouq and Malone (2024) found that human-plus-AI was worse than the better of the two alone on decision tasks, better on creation tasks: again, whether the axis being judged is one the aid measures.

**Refuter:** show an AI instrument that is accurate on the axis it measures but wrong on an unmeasured axis settling a person-level question as well as human judgment, on a ground both cannot move. That breaks Fig 2 :36-37. **Status: triangulated** (Fig 2 anchor rule plus two independent world results, low overlap with the framework).

### F3 - Improvement changes contact, not the agent in isolation

Fig 11 :39 *"And capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :40 *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."* Fig 4 :24 *"downward: something that makes the next search cheaper. Never a replay of what worked once."*

AI assistance improves judgment when it changes contact: it extends what can be represented (Fig 6 :29 *"inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."*), or it imports an atom from a closure that differs (Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*), or it gives a head start that makes the next search cheaper without dictating its result. It does not improve judgment by making the tool look more authoritative. Fig 11 :36 *"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground."*

**Refuter:** a randomized study in which a more capable aid, with identical human contact and identical task slots, improves Q2 without any change to the person's habitat. That breaks the capability claim. **Status: triangulated** (Fig 11 capability rule plus Fig 4 head-start rule, different domains).

### F4 - The weakening mechanism is habitat substitution

Fig 11 :66 *"Isolation is not removal of the habitat. It is substitution of one habitat for another."* Fig 11 :68 *"what you failed to reproduce is invisible until the goal fails"* and Fig 11 :69 *"what you unintentionally introduced is invisible until it acts"*. Fig 11 :70 *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

When the aid performs the reasoning, the person's task habitat is substituted. The loss is invisible while the aid is reliable. It becomes visible only when the goal fails: the aid is wrong, absent, or the person must act without it. Fig 6 :34 *"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."* A user's good feeling with the aid is not an instrument for Q2.

World corroboration, low overlap with the framework: Bainbridge (1983, *Automatica*) argued that automating most work leaves the operator practising no skills and needing more training for rare interventions. Endsley and Kiris (1995, *Human Factors*) defined the out-of-the-loop problem as loss of skill and situation awareness making manual operation impossible after failure. Automation bias research (Cummings 2004; Parasuraman and Riley 1997; Lyell and Coiera 2017) records commission and omission errors under reliance. Lee et al. (2025, CHI) found that *"higher confidence in GenAI is associated with less critical thinking, while higher self-confidence is associated with more critical thinking."*

**Refuter:** a trial showing unaided Q2 after long answer-only assistance is no worse than a no-assistance control on held-out tasks, with the aid having done the reasoning. That breaks the substitution claim at the ground. **Status: triangulated** (Fig 11 plus three independent literatures).

### F5 - Skill loss is a channel failure, not a ground failure

Fig 10 :24 *"the ground does not decay, the channel does"*. Fig 10 :25 *"stale percepts, dropped transients, saturated metrics, pooled readings"*. Fig 10 :27 *"the output is not a verdict, it is you have lost touch"* and Fig 10 :29 *"keep the anchor reachable"*.

Deskilling is not the world becoming harder. It is the person's channel to the ground degrading while the ground sits still. The proper output of an instrument check is "you have lost touch," not a verdict about the person's intelligence. The remedy is to keep the anchor reachable: periodic unaided work with feedback, not more exposure to the aid. Fig 8 :32 *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* More aided practice inside the same closure does not add the missing skill.

**Refuter:** show that unaided capability recovers without any new contact with the ground, by exposure to the aid's outputs alone. That breaks the channel claim. **Status: triangulated** (Fig 10 and Fig 8, plus Sparrow, Liu and Wegner 2011 and its mixed replication record, which I record as weak rather than hiding the replication failures).

### F6 - The criterion that separates improve from weaken: method versus recording

Fig 4 :22 *"Only methods cross up. Only head starts come down."* Fig 4 :25 *"A recording carried upward looks like knowledge and is a description of one occasion."* Replayed downward, Fig 4 :25-26 says it *"produces a system that repeats a past success and cannot produce a new one."* Fig 12 :111 *"A vocabulary without bonds can name a state and cannot name a route to one."* Fig 12 :112 *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."*

An aid that leaves the person with a re-applicable method, a bond between situation and action that they can carry to a new case, improves understanding. An aid that leaves them with an answer to copy is a recording: it can reproduce the past success and cannot produce a new one. Fig 11 :61-62 *"The seat's power is asymmetric. Introduction is available; exclusion is not."* You can add the method; you cannot subtract the habit of deferring once it is installed, so the interface should make the method explicit at the moment of handoff.

World corroboration: Li (2026, *Nature Human Behaviour*) titles the point directly, *"AI amplifies experts, not expertise"*; the abstract says AI tools can amplify what people do while posing problems for the next generation of experts. The Nature Human Behaviour research briefing on AI petition drafting (2026) reports that texts changed and became more similar while outcomes did not improve, a recording-like effect. Clark and Chalmers (1998) give the complementary case: an external item functions as part of cognition only when it is constantly accessible, automatically endorsed and plays the same role as an internal process. Their critics (Adams and Aizawa 2010) call the unrestricted version "cognitive bloating," so the coupling condition, not mere presence of the tool, is the load-bearing part.

**Refuter:** an aid that supplies only a finished answer, no method and no reapplication condition, still improves unaided performance on genuinely new tasks at the ground. That breaks the method/recording criterion. **Status: triangulated** (Fig 4 and Fig 12 plus three independent world sources).

### F7 - Agreement cannot settle either quantity

Fig 7 :12-13 *"same closure, handed along; agreement compounds, evidence does not"*. Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* Fig 7 :36 *"A chain of mirrors is one long room."* Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*. Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

A literature full of positive user surveys is a room, not an anchor. Most human-AI studies use the same task families, participant pools and measures, so their agreement is one evidence pool talking. Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* The cost here is large: a person who loses the ability to detect an AI error is precisely the person least able to report the loss.

**Refuter:** a demonstration that a pool of agreeable, overlapping studies predicts the ground as well as an independent, preregistered, held-out study. That would break the correlation rule. **Status: triangulated** (Fig 7 and Fig 2, plus Vaccaro et al.'s reported heterogeneity, `I² = 97.7%`, which is a ground reading of one pool).

### F8 - Imports need provenance; trust must be calibrated to the measured axis

Fig 6 :24 *"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."* Fig 8 :51-52 *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."* Fig 8 :45 *"Two frames together reach what neither reaches alone."* Fig 8 :53 *"Residual first, frame second."*

An AI answer is an import from a frame whose closure differs. That is where the surplus lives, but only with a source gate (provenance) and a shadow test (does it explain the residual?). Without them, a plausible answer is indistinguishable from a convergent derivation by inspection. Calibration is therefore not a personality trait of the user; it is the record of where the answer came from and which axis it was checked on. Lee et al. (2025) found that confidence in GenAI predicted less critical thinking, and Glickman and Sharot found that *"Participants are often unaware of the extent of the AI's influence, rendering them more susceptible to it."*

**Refuter:** show that fluent, provenance-free AI output calibrates reliance as well as provenance-bearing output on out-of-distribution cases. That breaks the import gate. **Status: triangulated** (Fig 6, Fig 8 and two independent studies).

### F9 - The shape, not a name

Fig 9 :32 *"you get a kind of thing, never the answer itself"*. Fig 13 :134-135 *"Unreachable is a verdict here, not a silence, It cannot say which primitive is missing, because naming it would mean already holding it."* Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*

The framework cannot name one universally best assistance mode. It can return the shape: contact preserved, re-applicable method, two quantities read separately, import provenanced. Fig 5 :42 *"The acceptance test is a bargain, not a threshold. A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."* A tool that explains one occasion perfectly and nothing else fails that bargain. Fig 5 :48 *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."*

**Refuter:** a single assistance protocol shown, on a ground, to improve both quantities across all task families with no exception. That would license a name and break the shape-only limit. **Status: single-source within the figures for the limit, triangulated with the figures README; the world evidence is silent on any universal protocol.**

### F10 - What survives and what is refused

| claim | mode | figure basis |
|---|---|---|
| Aided accuracy and unaided capability are two quantities and must be read per slot | `general` | Fig 1 :19, :22; Fig 9 :4 |
| For questions about people, human judgment is the anchor and AI is an instrument | `specified`, falsifiable | Fig 2 :36-37 |
| Capability is a property of person-and-habitat, not the person alone | `general` | Fig 11 :39-40 |
| Habitat substitution makes losses invisible until the goal fails | `specified`, falsifiable | Fig 11 :66-70 |
| Method or head start improves; recording or replay weakens | `specified`, falsifiable | Fig 4 :22-26; Fig 12 :111-112 |
| Imports need source gate and shadow test; agreement is not a verdict | `general` / `specified` | Fig 6 :24; Fig 8 :51-52; Fig 7 :35 |
| One universally best assistance mode | **refused** | Fig 9 :32; Fig 13 :134-135 |

---

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim is refused if any of the following holds:

1. A randomized, preregistered trial finds unaided Q2 after answer-only assistance indistinguishable from a no-assistance control on held-out tasks, while Q1 improved. This breaks F4 and the isolation claim.
2. An aid that delivers only a recording (a finished answer, no method, no reapplication) improves Q2 on genuinely new tasks at the ground. This breaks F6 and Fig 4 :25-26.
3. For a question constitutively about people, an AI instrument accurate on its measured axis but wrong on an unmeasured axis is found to settle the question as well as human judgment against a ground neither can move. This breaks F2 and Fig 2 :36-37.
4. Q1 and Q2 move in the same direction on every measured slot across task families, with no divergence anywhere. This breaks F1 and the union reading.
5. A single assistance protocol improves both quantities in every task family with no trade-off, verified at the ground. This breaks F9's shape-only limit.

If any fires, the corresponding claim is withdrawn and the retraction is recorded in section 7. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Split the question before answering it. Publish Q1 and Q2 separately, per slot. Do not report one "productivity" number (F1).
2. State the anchor for the task class before deploying aid: for person-level questions, human judgment is the anchor and the AI is an instrument (F2).
3. Design the aid to leave a method, not an answer: show the route, keep a feedback channel to the ground, and schedule unaided practice with feedback (F3, F5, F6).
4. Require provenance for every AI-supplied answer and treat reliance as a calibration record, not a trust sentiment (F8).
5. Do not count user agreement or literature consensus as a witness (F7).
6. Run the five refuters before the shape is promoted to a name (section 4).

Fig 4 :25 *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the two quantities and the refuters, not the conclusion.

---

## 6. Canonical usage check and strains

The canonical usage rule (`FRAMEWORK/reference/FIGURES_README_canonical.md`, read this session) says the figures outrank everything else and that *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* It also says the framework returns *"what a missing thing would have to look like (a shape, not a name)"* then stops at the limit of what instruments distinguish. Two apparent strains were sent back to the census:

| apparent strain | re-census | result |
|---|---|---|
| Fig 11 :40 says improving the agent in isolation changes nothing, yet education plainly improves a person's skill | Fig 11 :40 is conditional on contact not changing. Education that changes contact (practice on real tasks with feedback) is an introduction into the habitat, permitted by Fig 11 :61-62. Different objects | not strained after re-census |
| Fig 2 :36-37 calls human judgment the anchor, but world sources show human judgment is biased (Glickman and Sharot's level-1 participants showed a small bias; automation bias literature is extensive) | The anchor line governs which quantity is **constitutive** for a question about people, not which estimator is less biased. An instrument (the AI) can be wrong on axes it does not measure; an anchor can be biased and still be what the question is about. The world conflict is recorded, not used to flip the figure verdict | genuine world conflict, figure verdict retained after re-census |
| Vaccaro et al. find human-plus-AI worse than the better alone on average, which seems to conflict with F3 | The meta-analysis measured one-shot joint decision accuracy, a Q1 quantity averaged across tasks. F3 governs contact and Q2 over time. Different quantities and scales; Fig 1 :22 warns against exactly this average | not strained after re-census |

After re-census: two conflicts resolved by domain separation, one world conflict recorded openly, none hidden.

---

## 7. Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "AI improves judgment" treated as one claim | **Split into Q1 and Q2.** The single claim is underdetermined. Fig 1 :19, :22 and Fig 9 :4 govern the split. |
| "Human judgment is the anchor" read as "humans are more accurate" | **Narrowed.** It is a constitutive claim about person-level questions (Fig 2 :36-37), not an accuracy claim. The world bias evidence stands and is recorded as a conflict. |
| Fig 11 :40 read as a claim that training is pointless | **Retracted as an overreading.** It is conditional on contact not changing. Practice with feedback changes contact. |
| Sparrow et al. (2011) used as settled evidence of memory offloading | **Downgraded.** Camerer et al. (2018) and Hesselmann (2020) failed to replicate; Schooler and Storm (2021) and Gong and Yang (2024) support it under conditions. The claim is recorded as condition-dependent, not settled. |
| Extended mind thesis used as "tools are part of the person" | **Narrowed.** Adams and Aizawa's "cognitive bloating" objection is recorded. Only constantly accessible, automatically endorsed, functionally coupled items qualify; the coupling condition carries the weight. |
| Glickman and Sharot used only for the harm side | **Corrected.** The same paper reports that accurate AI improves judgment. Both halves are now cited, so the source is not cherry-picked. |
| Nature Human Behaviour petition briefing used as a skill-loss result | **Narrowed.** It reports changed outputs and unchanged outcomes, not a measured loss of unaided capability. It supports the recording claim, not F4. |

Nothing was silently erased. Each correction names the earlier reading and the reason it changed.
