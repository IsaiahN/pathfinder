# Figure-grounded audit: how culture shapes what people notice, ignore, and treat as important

**Mode of this document: `general` on the structural shape, `specified` on the transmission channel. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says an LLM "can quickly simulate an approximate answer/output" but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Local framework files: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (all `Fig N :line` citations), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the Symbols and Operators tables in the figure text. World sources actually opened are recorded in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

The phenomenon to be explained: people in different cultural surroundings allocate attention differently over the *same* scene. Some features are noticed, some are ignored, and some are weighted as important enough to guide action.

State R as a gap, per slot:

> R_s = | Γ(b, a)_s − o′_s |, for each object slot s in the surroundings.

- `Γ(b,a)` is what the perceiver's library predicts for slot s given its belief and action.
- `o′` is what actually arrived.
- A slot with positive residual is *noticed*, that is, it is where the boundary diff sends the next probe. A slot with zero residual is *ignored*, that is, it is already predicted and carries no call to look. "Important" is not a third kind of slot; it is the slot whose residual is bound into the objective, that is, into what counts as progress here.

The question asks what changes that allocation across cultures. The candidate answers are:

- **A:** culture changes the substrate (the slots, the sensors, the primitives). Leads to instruction-resistant difference and a new primitive.
- **B:** culture changes `b` and `w`, and transmits a vocabulary of affordances and an objective. Leads to instruction-sensitive difference over a shared substrate.

The residual is stated in effect terms first, before any frame is chosen (Fig 9 :27 to :28: *"describe it before you go looking, or any frame you pick will seem to fit"*). No field, population, or theory is named in this paragraph.

---

## 1. Domain census (before any figure line is chosen)

**R by arity, symmetry, scale.**
- Arity: many. One residual per object slot, not one global number.
- Symmetry: not aggregatable. A live slot cannot be averaged away into a global near-zero.
- Scale: two. One loop runs inside a single perceiver (prediction, observation, re-aim), and a second loop runs across perceivers (a head start handed to the next searcher).

**One line per domain: actors, currency, anchor.**

| domain | actors | currency | anchor (nameable?) |
|---|---|---|---|
| D1, individual perception and attention | a perceiver, object slots in the surroundings, an action/bet, an observation | per-slot residual R_s, the prediction Γ(b,a), the boundary diff | yes: the environment/task/reward that actualises o′ |
| D2, cultural inheritance across perceivers | a population of perceivers, a shared library Γ, inherited prior, the weighting w | head starts (vocabulary, methods) that make the next search cheaper; w_A + w_B = 1 | yes: the ground contacted by the population's practices, which does not move when a frame changes its mind |
| D3, verification | experimenters, tasks, instructions, measurements | residual under instruction shift | yes: measured attention (fixation, report, task success), never agreement |

A domain with no nameable anchor is not a domain yet. All three have one, so all three stand.

**Partition or union?** This is a **union compound**, not a partition. A cultural difference in attention requires, at once, a per-slot residual in D1, an inherited weighting and vocabulary in D2, and a ground that decides which differences are real in D3. Per Fig 9, a case in more than one condition is not a harder case of either; it is a specific compound with its own loop. It must be unbundled before it is searched again, and each condition keeps its own verdict. Verdicts are never averaged across D1, D2 and D3.

**Order by dependency (Fig 3, chain ordered by dependency, not importance):** perception (can the slots be told apart at all?) → vocabulary (are there terms for what the slots afford?) → objective (can the perceiver say what would count as progress here?) → planning → learn and carry. Culture enters at the vocabulary and objective links. The chain cannot be repaired by working on a link below the break.

---

## 2. Figure census: quoted before concluding

Every quoted string below is an exact substring of `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Line numbers are those of the verbatim extract.

| figure | line(s) | bearing | verdict after strain test |
|---|---|---|---|
| Fig 1 | :19, :22, :15 | residual indexed per slot; averaging hides the live signal; where to look | governs *notice/ignore* |
| Symbols table | :20-21, :25-27 | belief formed from history and inherited prior mixed by w; identical architecture still diverges because histories and w diverge | governs the *channel* directly |
| Fig 3 | :7, :10, :26 | terms for what things afford; what counts as progress; the middle link has the fewest instruments | governs *important* |
| Fig 4 | :22, :24 | only methods cross up, only head starts come down; a head start makes the next search cheaper | governs what culture *transmits* |
| Fig 2 | :29-30, :45, :40, :35 | the anchor settles and does not update; frames range against it; shared-pool agreement disqualifies; a mirror cannot correct | governs *what settles importance* |
| Fig 11 | :39, :40, :49 | capability is agent-and-habitat; no contact change, no change; valence is relative to the residual | corroborates that the difference lives in the agent-plus-habitat |
| Fig 9 | :27-28, :32, :60 | describe before looking; a kind of thing, never the answer; filters for budget, witnesses for verdict | governs the honest stop and the outreach order |
| Fig 10 | :52, :42 | bring a characterised residual, never the source; a verifier that can reconstruct cannot verify | governs the two-stage offer |
| Fig 4 | :30 | measure the round-trip gap, not dead reckoning | governs `11_audit.md` |
| Fig 7 | :35 | a room's agreement is variation, not a verdict | governs the rejection of mass agreement |
| Fig 5 | :48 | a system's own output is never a measure of success | governs the simulated status of this audit |
| Fig 8 | :32, :45 | search adds no atom; two frames together reach what neither reaches alone | governs why one frame cannot close this from inside |

Strained readings are named in section 5 and sent to `11_audit.md`, not smoothed over.

---

## 3. Findings F1 to F6

### F1. Notice and ignore are per-slot, and averaging destroys the signal

Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*

Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*

Fig 1 :15 *"where to look: broken vs novel"*

A global "how much did this culture notice?" is the forbidden aggregate. The figure says attention is an allocation over slots: a slot whose prediction fails is where the next look goes; a slot whose prediction holds is ignored. So the question "what do people notice?" must be re-asked as "which slots carry positive mass, for this belief and this action, in this environment?" Culture does not move a single global attention dial; it changes the per-slot pattern.

**Mode:** `general` (structural). **Status:** triangulated across Fig 1 (residual indexing) and Fig 9 :22 arity/symmetry (the residual is described by arity, symmetry, scale). Low overlap: one is a loop quantity, the other a description discipline.

**Refuter:** a controlled measurement in which overall attention is the only stable quantity and per-slot mass does not vary with the cultural condition, with no slot-level residual anywhere. That would break the per-slot claim.

### F2. The channel is `w` and the inherited prior, not a different architecture

Symbols table :20-21: *"Formed from its own history and from what it inherited, mixed by w. Not the observation."*

Symbols table :25: *"How far the belief leans on private history versus inherited prior."*

Symbols table :26-27: *"Two frames with identical architecture diverge because their histories and their w diverge."*

This is the most direct figure line in the whole question. The belief `b` that enters the prediction is not the observation; it is a mixture of what the perceiver lived and what it inherited. The mixture coefficient `w` is learnable from outcomes, and `w_A + w_B = 1`. Crucially, two frames with identical architecture diverge *because* their histories and `w` diverge. So a cultural difference in what is noticed needs no difference in hardware, no different set of slots, and no new primitive. It needs a different inherited prior and a different `w`.

Fig 11 :39 *"capability is a property of agent-and-habitat, never of the agent alone"* corroborates from a different domain: the explanation lives in the agent-plus-habitat, and culture is the habitat-side term.

**Mode:** `general` for the mechanism, `specified` for the claim that this is the channel for this question. **Status:** triangulated (Symbols table + Fig 11, low overlap: notation table versus capability claim).

**Refuter:** two perceivers matched on architecture, history and `w` who still attend to different slots under the same task. That breaks :26-27 directly and kills Option B.

### F3. "Important" is the vocabulary/objective link, and it is the least measured link

Fig 3 :7 *"it has terms for what things afford: what can be moved, opened, joined, blocked"*

Fig 3 :10 *"it can say what would count as progress here, in its own terms"*

Fig 3 :26 *"has neither, so it attracts the least attention and the fewest instruments."*

Calling a feature "important" is not a third perceptual act. It is the second and third links of the dependency chain: having a term for what the slot affords, and being able to say what counts as progress. Fig 3 says these links have neither obvious failures nor obvious tests, so they attract the least attention and the fewest instruments. That is exactly why cross-cultural differences in "importance" are easy to miss and hard to measure: the instrument is missing, and a link with no instrument is not a link that works (Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."*).

Fig 4 :22 *"Only methods cross up. Only head starts come down."*

Fig 4 :24 *"downward: something that makes the next search cheaper. Never a replay of what worked once."*

What culture hands down is a head start: a vocabulary and an objective that make the next perceiver's search cheaper. It is not a recording of one occasion, and it does not install a new slot.

**Mode:** `general` (chain structure), `specified` (that the transmitted vocabulary is the target). **Status:** triangulated (Fig 3 + Fig 4, low overlap: dependency chain versus membrane direction).

**Refuter:** an "importance" weighting that survives the complete removal of terms for what things afford and of any objective, that is, a weighting with no vocabulary link at all. That breaks Fig 3 :7 and :10.

### F4. The ground decides importance; cultural agreement does not

Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*

Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."*

Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool"* (full line begins "disqualifying for a verdict:").

Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

This is the non-relativist half of the answer. Culture changes the frame; it does not change the ground. Agreement inside a culture is efficient as a convention (everyone reads the same cue the same way) and disqualifying as a verdict about what is actually important. So the framework refuses to rank a culture's importance judgments as true because the culture agrees on them. It ranges them against an anchor: task success, prediction, an experiment, a measurement, an outcome the culture cannot talk into moving.

This also rules out the reverse error, treating one culture's weighting as the universal baseline. The ground is not any frame's preference, so no frame gets to appoint itself the anchor.

**Mode:** `general`. **Status:** triangulated (Fig 2 anchor rule + Fig 2 correlation rule, different clauses of the same figure but different quantities; corroborated by Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*).

**Refuter:** a demonstration that what counts as important in a task is settled by within-group agreement with no external anchor and that this agreement changes the task's success measure. That breaks the anchor rule.

### F5. The framework returns a shape, not the name of the practice

Fig 9 :32 *"you get a kind of thing, never the answer itself"*

Fig 9 :30 *"your words are borrowed too, so describe the effect rather than the cause"*

The canonical README says the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and that it *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*

So the derivation can say the channel must be `w`, inherited prior, and a transmitted vocabulary/objective, and that the substrate stays fixed. It cannot say which practice, in which population, moves which slot. That is an empirical question for an instrument (eye tracking, matched-task experiments, instruction-shift paradigms), not a figure derivation. Naming one would be importing an answer under the cover of a derivation.

Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A tier label, a famous author, or a large sample is a filter for what to try first, never a witness for the verdict.

**Mode:** `general`. **Status:** triangulated (Fig 9 + canonical README, different documents).

**Refuter:** a figure derivation that yields a specific named cultural practice as *the* cause without a ground reading or a provenanced import. That breaks the shape limit.

### F6. This second seat is a mirror, so its agreement is not corroboration

Fig 5 :48 *"Its own output is never a measure of success."*

Fig 2 :40 (above) and Fig 2 :35 (above).

Fig 8 :32 *"no search, however long, adds an atom"*

Fig 8 :45 *"Two frames together reach what neither reaches alone."*

`11_audit.md` is written by a simulated second seat that draws on the same evidence pool: the same local figure text, the same essays, the same web pages. Its agreement is internal consistency, not a second witness. Searching harder in the same pool adds no atom. Only a frame whose closure differs, in practice a real experiment with a real ground, can add one.

**Mode:** `general`. **Status:** triangulated (Fig 5 + Fig 2 + Fig 8, three different quantities).

**Refuter:** an independent frame with a different evidence pool and a ground measurement that returns a different allocation pattern. That would be a real witness, not a mirror, and would replace this verdict.

---

## 4. What survives, with mode attached

| claim | mode | figure |
|---|---|---|
| Attention is a per-slot residual; "notice" and "ignore" are slot allocations | `general` | Fig 1 :19, :22, :15 |
| Belief mixes private history and inherited prior through `w`; identical architecture still diverges with history and `w` | `general` | Symbols table :20-21, :25-27 |
| "Important" is the vocabulary/objective link, which is the least instrumented link | `general` | Fig 3 :7, :10, :26, :27 |
| Culture transmits a head start, not a new primitive and not a recording | `general` | Fig 4 :22, :24 |
| The ground, not cultural agreement, settles what is actually important | `general` | Fig 2 :29, :45, :40, :35 |
| For this question the channel is `w` plus inherited vocabulary over a shared substrate | `specified`, ungrounded | F2 + F3 |
| Which specific practice moves which slot | `gap` at this budget | Fig 9 :32; canonical README |

---

## 5. Strains and re-census (sent to `11_audit.md`, not hidden)

1. **Fig 1 :19 (per-slot residual) versus Symbols table (belief and `w`).** Apparent strain: one is a perception-domain quantity, the other a control-domain quantity. **Re-census:** they govern different quantities. `b` and `w` determine the prediction `Γ`, and `Γ` determines the per-slot residual. They compose; they do not compete. No strain after re-census.

2. **Fig 4 :22 (only head starts come down) versus learned categories as cultural content.** Apparent strain: a learned category looks like content, not a method. **Re-census:** a category vocabulary is a term that makes the next search cheaper, which is exactly Fig 4 :24's "makes the next search cheaper." It is not a replay of one occasion. No strain after re-census.

3. **Fig 3 :10 (objective) versus "importance" as a free-floating weighting.** Apparent strain: importance might be outside the chain. **Re-census:** Fig 3 :10 binds the objective to "what would count as progress here, in its own terms," so importance is a link in the chain. What is not derivable is *which* objective a habitat installs. That is the honest limit F5, not a strain.

4. **World-literature conflict, not a figure conflict.** Park and Huang (2010) report robust East Asian versus Western differences in attention and neural function, while also reporting that Rayner and colleagues failed to find some of the predicted gaze differences and that the cultural effects were *"processing biases rather than immutable circuitry changes"* and could be overridden by instructions to attend to the object. This conflict does **not** flip the figure verdict. It sends us back to the census and there corroborates F2 and F3: attention is instruction-sensitive and goal-driven (top-down, `w`), not a fixed hardware difference. Recorded as a conflict inside the world pool; verdict unchanged.

After re-census: no figure strain; one world-pool conflict, named.

---

## 6. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim, "culture acts through `w`, inherited prior and transmitted vocabulary over a shared substrate," is refused if any of the following holds:

1. A controlled experiment holds inherited prior and vocabulary constant (matched `w`, matched instruction, matched task) and still finds a robust cultural difference in which slots carry residual, with no measured difference in `w` or vocabulary. Breaks F2.
2. Two perceivers with identical architecture, identical history and identical `w` attend to different slots under the same conditions. Breaks Symbols table :26-27.
3. Cultural transmission is shown to install a new perceptual primitive, or a fixed recording of what to attend to, rather than a head start or method. Breaks Fig 13 minimality and Fig 4 :22-24.
4. An importance weighting survives the removal of all terms for what things afford and of any objective. Breaks Fig 3 :7 and :10.
5. A within-group agreement, with no external anchor, is shown to change the task's success measure. Breaks Fig 2 :29 and :45.

If any fires, the claim is withdrawn. Until one is run, nothing is labelled `grounded`.

---

## 7. Recommendation and outreach order

1. Lead with the shape claim and the pre-registered refuter, not with the framework. Fig 10 :52 *"Bring a characterised residual, never the source."*
2. Ask the reader what they would count as a failure, and record that verdict before showing any theory. Fig 2 :45 frames range against the ground separately.
3. State the mode on every claim. `general` for structure, `specified` for the channel, `gap` for the named practice.
4. Never ask for agreement or trust. Fig 2 :35 and Fig 2 :40. A list selected for receptiveness manufactures the correlation that makes agreement worthless.
5. Offer the three source links only after stage 1, and say the figures, not the summary, are the authority. Fig 4 :22, only methods cross up.
6. Use the public opt-in venues in `03_public_contact_points.csv`. One to one, no bulk send, no personal emails.

---

## 8. Canonical usage check

Two sources were read after the first sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` and its public original `https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit *"a shape, not a name"* with *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop, the mode rule, and the "Direction" discipline that writes the sought-for shape as an ordinary term so it can be refused.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| "Culture changes a global attention dial" | **Retracted.** Fig 1 :19 and :22 govern a per-slot residual; a global aggregate is the named way to lose the signal. |
| "The framework can name the cultural practice responsible" | **Retracted.** The canonical README limits it to a shape, not a name; Fig 9 :32 agrees. |
| "Important is a separate perceptual act" | **Retracted.** Re-census places it at the Fig 3 vocabulary and objective links. |
| "Agreement within a culture is evidence that a weighting is right" | **Retracted.** Fig 2 :40 disqualifies shared-pool agreement for a verdict; it is efficient only for a convention. |
| F2 (the `w` channel) | **Canonically confirmed.** The Symbols table is part of the authoritative notation set, and the canonical README says only the cast changes between domains, never the rules. |
| F4 (the ground, not agreement) | **Canonically confirmed.** The README's section on the ground states that a frame can be self-consistent and still wrong. |
| Apparent Fig 1 versus Symbols table strain | **Not strained.** Re-census: `b` and `w` feed the prediction that generates the per-slot residual. |
| Simulation status | **Confirmed.** *The Recursive Self-Improvement Trap* distinguishes simulated output from a ground-derived result; this audit is the former. |

### Updated verdict

The shape survives: attention is a per-slot residual, belief mixes private history with inherited prior through `w`, "important" is the vocabulary/objective link, culture passes a head start rather than a new primitive, and the ground not agreement decides. The channel claim is `specified`, ungrounded and triangulated. The name of the specific practice is a `gap` at this budget. Strains after re-census: none figure-internal; one world-pool conflict, recorded in section 5.
