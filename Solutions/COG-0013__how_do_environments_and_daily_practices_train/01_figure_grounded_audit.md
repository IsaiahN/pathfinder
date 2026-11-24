# Figure-grounded audit: how environments and daily practices train attention

**Mode of this document: `general` for the structural shape, `specified` per domain, `gap` for the feature list and time course. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* No feature name and no number in this document is `grounded`.

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (opened 2026-11-22): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited `Fig N :line`. Formula from `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md`. Seat rules from `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources fetched 2026-11-22, listed in `10_source_ledger.csv`.

---

## 0. The residual stated in effect terms

The question asks how environments and daily practices "train" attention to visual or social information. Stated as an effect: given an observer, an environment or practice regime, and an information kind, predict which features gain or lose attentional weight, and how that weighting changes with exposure.

**Bind the sought-for shape as an ordinary term before searching** (Formula step "Direction"): *an answer is a rule mapping (environment, practice, information kind) to attentional weighting, plus an account of why the mapping differs across regimes.* Now the preference can accrue a residual like anything else and can be refused by the same test as everything else.

**Residual R.** For observer slot `s` in regime `p` for information kind `k`, hold a prediction `Γ(b, a)` about what will be attended and an observation `o'` from a measurement. Then `R = |Γ(b, a) − o'|` per slot. Three properties matter before any figure line is chosen:

- **Arity:** three-indexed, `(observer, environment-practice regime, information kind)`. A one- or two-indexed residual drops the comparison the question is about.
- **Symmetry:** not symmetric. Swapping "environment" and "information kind" is a different measurement. Under Fig 12's bond table this is an ordered relation, closer to production (`A produces B; B did not exist before`, Fig 12 :77) or sequence (`A then B; B needs A to have happened`, Fig 12 :72) than to symmetric conjunction. "Train" implies a directed change, not a co-occurrence.
- **Scale:** practice and developmental timescales, from a single laboratory task to a lifetime of enculturation. This is cross-scale, which makes aggregation tempting, and aggregation is the named failure in Fig 1.

The answer the figures can return is constrained to a shape. The feature names (for example "attend to context" or "attend to gaze") are not in `closure(Γ)` of the figures, so they are owed from the ground, not derivable here.

---

## 1. Domain census (before choosing any figure line)

The habitat is enumerated, not composed (Fig 11 :43 *"The habitat is enumerated, never composed."*; :44 *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*). One line per candidate domain, with actors, currency and a nameable anchor. A domain without a nameable anchor is not a domain yet.

| domain | actors | currency | nameable anchor |
|---|---|---|---|
| D1 Perceptual learning of low-level visual features | observers, visual stimuli, task demands | discrimination thresholds, attentional weighting, reaction time, transfer specificity | psychophysical measurement (Gibson and Gibson 1955; Goldstone 1998; Sagi 2011) |
| D2 Cultural attention to scenes (analytic or holistic) | observers from different practice regimes, visual scenes | fixation location, object-versus-context weighting, change detection | cross-cultural eye-tracking and change-blindness experiments (Nisbett and Miyamoto 2005) |
| D3 Social attention and gaze | observers, social partners, faces | gaze following, face and gaze selectivity, threat or relevance detection | gaze-cueing and face-processing experiments (Takao et al. 2018; Stanford Encyclopedia of Philosophy 2024) |
| D4 Development and children's attention | children, caregivers, environment | looking time, novelty preference, learned selective attention | developmental eye-tracking and statistical-learning studies (SEP 2024, section 1.5) |
| D5 Deliberate practice and professional vision | experts and novices, professional domain | detection accuracy, scan paths, categorisation speed | expert-novice studies (fencers, radiologists, chess players; SEP 2024 sections 2.3 and 3.3) |
| D6 Animal behaviour and ecological attention | species, habitat, conspecifics | vigilance, detection, sign stimuli, feature salience | ethological exposure experiments (Gibson and Walk 1956 rat cage study, reported in Tsushima and Watanabe 2009) |

All six have nameable anchors, so all six are domains. No seventh was added because no new anchor appeared in the search. D6 is included as the low-overlap field (animal behaviour) that the WATSON procedure asks for.

### Partition or union

This is a **union, not a partition**. Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57 *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

The overlaps are real. Environment (habitat exposure) and practice (a seat doing work) are separate conditions that co-occur. Visual and social information share machinery and differ in binding. Trained and untrained are not clean bins, because mere exposure is itself a training condition (D1, D6). Asking "is it the environment or the practice?" forces a false dichotomy. Each overlap is a compound with its own loop, so D1 to D6 are kept as six separate loops with six separate verdicts, never averaged.

### Dependency order (Fig 3)

Fig 3 :20 *"The chain is ordered by dependency, not by importance."* The chain for this question runs:

1. perception: can the information be detected and discriminated in each regime,
2. vocabulary: do we have comparable terms for what the environment affords (emic versus etic attentional categories),
3. objective: what would count as "attending to the right thing" in that regime,
4. planning: a practice regime that could move weighting toward that objective,
5. learn and carry: a disposition that can be checked in a new setting.

The break is between 2 and 3. We have instruments for perception and for planning, but comparability of attentional categories and the operational threshold for "attending appropriately" have no stable instrument. Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."* A verdict taken below that break is a reading of nothing, not a weak reading (Fig 3 :22 to :23).

---

## 2. Figure census, quoted before concluding

| figure | verbatim line | bearing on this question |
|---|---|---|
| Fig 1 :19 | *"The residual is indexed by object slot, not aggregated."* | Attention change must be indexed per observer, regime and feature slot. |
| Fig 1 :22 | *"Aggregating across slots is how a live signal disappears into an average."* | A pooled "attends more" score hides the variation the question asks about. |
| Fig 1 :13 | *"a global R near zero with one live slot residual is a legal state"* | A near-zero average effect with one live feature or society is a legal state. |
| Fig 1 :27 | *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* | A trainee's own confidence is not a measure of the training. |
| Fig 2 :29 | *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* | The ground is associative or behavioral measurement, not agreement among theorists. |
| Fig 2 :31 | *"Two people reading the same report are not two frames; two instruments pointed at the same thing are."* | Two papers quoting one review are one witness. |
| Fig 2 :34 | *"the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."* | If the "training effect" is defined by the trainer's own rating, the anchor has become a frame. |
| Fig 2 :35 | *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* | Agreement inside a laboratory is not a cross-regime test. |
| Fig 2 :40 | *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* | Selecting checkers for likely agreement is forbidden. |
| Fig 2 :42 | *"Buy independence in proportion to the cost of being wrong."* | Cross-species and cross-regime frames are worth the extra cost here. |
| Fig 3 :20 | *"The chain is ordered by dependency, not by importance."* | Order the six links by dependency. |
| Fig 3 :27 | *"A link with no instrument is not a link that works. It is a link nobody has looked at."* | The comparability and threshold link is uninstrumented. |
| Fig 4 :20 | *"Only the actors, the currency and the anchor change."* | Invariant kernel, variable cast, across the scale from one observer to a culture. |
| Fig 4 :22 | *"Only methods cross up. Only head starts come down."* | Training transmits a method or a head start, not a recording. |
| Fig 4 :25 | *"A recording carried upward looks like knowledge and is a description of one occasion."* | A memorised scan path is a recording, not a transferable attentional skill. |
| Fig 5 :46 | *"When nothing is scoring, the drive manufactures a gradient."* | The mechanism by which a system with no task can still be shaped by exposure. |
| Fig 5 :47 | *"So a system that starts with nothing can still be shaped, by seeking the gap that is large and compressible, which is the same quantity the acceptance test scores."* | Direct figure support for the word "train" as shaping. |
| Fig 5 :48 | *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."* | The shaped system's own output cannot certify the training. |
| Fig 6 :21 | *"MINT composes inside the closure and can never add an atom."* | Practice inside one closure cannot manufacture a new kind of information. |
| Fig 6 :23 | *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* | Only contact with a differing regime or species moves the wall. |
| Fig 6 :30 | *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* | Describe the training effect in effects, not in the trainer's private vocabulary. |
| Fig 7 :35 | *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* | A consensus of trainers is variation, not the ground's vote. |
| Fig 8 :32 | *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."* | More practice in the same regime cannot add a new information kind. |
| Fig 8 :39 | *"So a search that finds nothing is never a proof of absence."* | No effect found at this budget is not proof that none exists. |
| Fig 8 :45 | *"Two frames together reach what neither reaches alone."* | Cross-regime and cross-species comparison is where the surplus lives. |
| Fig 8 :50 | *"But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."* | Independently arrived-at attentional effects are the strong case. |
| Fig 8 :51 | *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"* | Provenance separates a found effect from a borrowed one. |
| Fig 9 :27 | *"describe it before you go looking, or any frame you pick will seem to fit"* | Describe the residual before choosing the field. |
| Fig 9 :32 | *"you get a kind of thing, never the answer itself"* | The figures give a shape, not a feature list. |
| Fig 9 :44 | *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."* | The feature list stays open. |
| Fig 9 :51 | *"evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it"* | Evidence about the trainer is not evidence about the training. |
| Fig 9 :54 | *"And when the split lands on a union rather than a partition, unbundle before you search again."* | Environment and practice overlap. |
| Fig 9 :60 | *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* | Sample size and effect size choose where to look, not what is true. |
| Fig 10 :24 | *"the ground does not decay, the channel does"* | A practice can sever the channel with stale percepts even while the ground holds. |
| Fig 10 :26 | *"stale percepts, dropped transients, saturated metrics, pooled readings"* | The named ways a training channel fails. |
| Fig 10 :42 | *"A verifier that can reconstruct the claim cannot verify it."* | The first contact carries the residual, not the theory. |
| Fig 10 :47 | *"a convention that decides an outcome has stopped being one"* | A scoring rubric that fixes the verdict is no longer a convention. |
| Fig 10 :52 | *"Bring a characterised residual, never the source."* | Two-stage offer. |
| Fig 10 :59 | *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* | Declare the stake, do not ask for agreement. |
| Fig 10 :72 | *"When the question changes, the room should change."* | A fixed training regime while the task moves is the failure. |
| Fig 11 :36 | *"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground."* | "Trained" is a label applied afterwards to a lineage that met its ground. |
| Fig 11 :39 | *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."* | Attention change is a property of observer-and-regime. |
| Fig 11 :40 | *"An improvement that does not change contact changes nothing, however much it improves."* | A practice that does not change contact changes nothing. |
| Fig 11 :43 | *"The habitat is enumerated, never composed."* | Read the regime off the world, do not invent a "culture bond". |
| Fig 11 :44 | *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* | Enumerate actors, conditions, relations. |
| Fig 11 :48 | *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."* | No standing list of attentional targets. |
| Fig 11 :49 | *"An actor's valence is relative to the residual, not a property it carries."* | A practice helps one residual and harms another. |
| Fig 11 :51 | *"No standing list of good actors survives a change of residual."* | No universal "good" attentional habit. |
| Fig 11 :56 | *"Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept."* | Immersion is one training mode. |
| Fig 11 :58 | *"Maintained. A seat exists and can act: choose the instruments, distil the impactful actors, introduce what was not there. That is the garden, and it is how arrival is worked on rather than waited for."* | Deliberate practice is the other mode. |
| Fig 11 :61 | *"The seat's power is asymmetric. Introduction is available; exclusion is not."* | A regime can add an actor and cannot subtract the habitat. |
| Fig 11 :72 | *"an agent-only improvement that moved the ground would refute the capability claim"* | The figure's own standing falsifier. |
| Fig 12 :46 | *"A bond is the typed relation between two operands."* | Variation can be a change of relation, not a change of parts. |
| Fig 12 :77 | *"A produces B; B did not exist before"* | "Train" is production, not conjunction. |
| Fig 12 :104 | *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."* | A settled perceptual discrimination becomes an atom for the next level of skill. |
| Fig 12 :107 | *"Settling compresses the description and not what it cost to establish."* | The trained label hides the practice that built it. |
| Fig 12 :111 | *"A vocabulary without bonds can name a state and cannot name a route to one."* | Naming the attended feature is not naming the route to it. |
| Fig 12 :117 | *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* | Two regimes over the same machinery are isomers. |
| Fig 12 :123 | *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* | Attentional machinery is the group, its targets are members. |
| Fig 13 :74 | *"Everything else is a composition across the two kinds, never within one."* | Constrains composition inside a cognitive system, not the cross-regime sort. |
| Fig 13 :115 | *"The set is closed. The arrangements are not. That gap is why import exists."* | Closed mechanism, unbounded practice arrangements. |
| Fig 13 :134 | *"Unreachable is a verdict here, not a silence"* | The feature list is a verdict of unreach from the figures, not an omission. |
| Fig 13 :135 | *"It cannot say which primitive is missing, because naming it would mean already holding it."* | The figures cannot name the trained feature. |
| Seat Map :163 | *"High correlation is disqualifying for a verdict and efficient for a convention."* | Selecting informants for likely agreement is forbidden. |
| Seat Map :287 | *"a falsifier written before the run is a design instrument, not only an honesty device."* | Pre-register the refuter before the per-domain verdicts. |

### Strain test results

Four candidate readings were rejected or narrowed and sent back to census:

1. **Fig 5 :47, "So a system that starts with nothing can still be shaped, by seeking the gap that is large and compressible, which is the same quantity the acceptance test scores."** Tempting reading: this licenses "training creates new kinds of information." That fails. Fig 6 :21 says *"MINT composes inside the closure and can never add an atom."* Re-census: Fig 5 governs gradient manufacture inside a frame; Fig 6 and Fig 11 govern what contact and closure can add. Different quantities, no strain after re-census. The shaping is real, but it rearranges what is already reachable.
2. **Fig 13 :74, "Everything else is a composition across the two kinds, never within one."** Tempting reading: visual features are states, social features are structures, so the line splits the question's two information kinds. That fails. The universal/variation axis is not the state/structure axis, and the line governs composition inside a cognitive system. Re-census placed it as a constraint on the mechanism (D1, D3), not as the sort rule.
3. **Fig 11 :51, "No standing list of good actors survives a change of residual."** Apparent conflict with Fig 12 :123, which says a functional group's presence fixes the outcome. Re-census: Fig 11 governs the valence of an actor relative to a residual; Fig 12 :123 governs which kind of structure is present. A functional group says what kind, not which member is good for every residual. Different objects, no strain.
4. **Mere exposure without attention (SEP 2024; Watanabe et al. 2001 as reported in Tsushima and Watanabe 2009).** Apparent conflict with Fig 5 attention shaping. Re-census: mere exposure is the unmaintained mode (Fig 11 :56), task-relevant training is the maintained mode (Fig 11 :58). The two are a union, not a contradiction. Recorded as S4 and not used to flip a verdict.

No strained line was kept as a witness.

---

## 3. Findings

### F1 : The effect is per slot, never averaged

Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :13 *"a global R near zero with one live slot residual is a legal state"*

A single "this practice increases attention" score destroys the only signal the question asks for. A feature can gain weight in one regime and lose it in another, so the answer must be filled cell by cell across observers, regimes and information kinds. This is also why D1 to D6 stay separate. The perceptual-learning literature corroborates the mechanism shape at the ground: learning is often highly specific to retinal location, orientation or task (Sagi 2011; Tsushima and Watanabe 2009), so a pooled improvement figure throws away where the learning happened.

**Refuter:** if per-slot and pooled assignments coincide on every feature tested across all six domains, the slot requirement is idle for this question and F1 is withdrawn as a governing finding.

### F2 : Training changes contact, not the isolated agent

Fig 11 :39 *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :40 *"An improvement that does not change contact changes nothing, however much it improves."* Fig 11 :36 *"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground."*

"Training people to attend" is shorthand for changing the contact between observer and regime. Goldstone's definition, quoted in SEP 2024, already has this shape: *"Perceptual learning involves relatively long-lasting changes to an organism's perceptual system that improve its ability to respond to its environment and are caused by this environment."* The environment is in the definition, not an afterthought. Triangulated with Fig 4 :20 *"Only the actors, the currency and the anchor change."*

**Refuter:** an agent-only change that moves the ground with habitat held fixed would refute the capability claim. The figures name this as their own standing falsifier at Fig 11 :72 *"an agent-only improvement that moved the ground would refute the capability claim"*.

### F3 : There are two training modes, and only one has a seat

Fig 11 :56 *"Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept."* Fig 11 :58 *"Maintained. A seat exists and can act: choose the instruments, distil the impactful actors, introduce what was not there. That is the garden, and it is how arrival is worked on rather than waited for."* Fig 11 :61 *"The seat's power is asymmetric. Introduction is available; exclusion is not."*

Immersion and deliberate practice are different conditions with different instruments, not degrees of one dial. In the world literature, mere exposure (bottom-up, no task) and task-relevant training (top-down, with feedback) are repeatedly distinguished (SEP 2024 section 2.3; Tsushima and Watanabe 2009). Nisbett and Miyamoto 2005 report that *"participating in different social practices leads to both chronic as well as temporary shifts in perception,"* which is the maintained and temporary variants of the same union. The seat can introduce an instrument and cannot subtract the habitat, so a training program is permanent work rather than a solved state.

**Refuter:** a regime in which nothing selects and no seat acts, yet attention moves systematically toward a non-updating ground, would collapse the two-mode distinction and refute F3.

### F4 : The habitat is enumerated, not composed, and there is no standing target list

Fig 11 :43 *"The habitat is enumerated, never composed."* Fig 11 :44 *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* Fig 11 :48 *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."* Fig 11 :49 *"An actor's valence is relative to the residual, not a property it carries."* Fig 11 :51 *"No standing list of good actors survives a change of residual."*

The right question is not "which features should be attended to" but "which actors, conditions and relations are in contact with this residual, and what is their valence for it." Nisbett and Miyamoto 2005 give the habitat shape directly: Miyamoto and colleagues photographed thousands of hotels, post offices and schools in Japanese and American cities and found the Japanese environments more complex, with more objects; exposure to those scenes prompted different change-detection allocations regardless of the participant's own culture. That is a habitat reading, not a standing list.

**Refuter:** a derived eighth "culture bond" that passes all bond identification tests, or a demonstration that one fixed list of attentional targets survives every residual change, would refute F4.

### F5 : Methods cross, recordings do not

Fig 4 :22 *"Only methods cross up. Only head starts come down."* Fig 4 :25 *"A recording carried upward looks like knowledge and is a description of one occasion."* Fig 12 :107 *"Settling compresses the description and not what it cost to establish."*

A transferable attentional skill is a generator, a method for weighting information. A memorised scan path from one scene is a recording of one occasion. SEP 2024 section 3.3 notes that in expert domains perception comes to shape what information enters conscious perception according to professional needs, which is a method-like change; Sagi 2011 warns that *"Training on a restricted stimulus set may lead to perceptual overfitting and over-specificity,"* which is the recording failure. What is compressed into the expert's label is the result, not the cost of establishing it (Fig 12 :107).

**Refuter:** a one-occasion recording, with no reapplicable method and no head start, that nonetheless transfers as a new capability into a different regime would refute F5.

### F6 : The machinery is a functional group, the variation is the binding

Fig 12 :123 *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :46 *"A bond is the typed relation between two operands."*

Across D1 to D6 the recurring shape is that orienting, selecting, discriminating and comparing are present, and regimes differ in which member fills the slot and how it is bonded. Goldstone's four mechanisms (differentiation, unitization, attentional weighting, stimulus imprinting, as surveyed in SEP 2024) are members of a functional group, not new primitives. SEP reports that expert fencers attend to the upper trunk where non-experts attend to the upper leg, and that expert soccer defenders focus longer on opponents' hips: same machinery, different member. Over a fixed atom set two regimes are isomers (see `06_isomers_and_order.md`).

**Refuter:** a cultural or practice variation that introduces a new cognitive primitive rather than a new member or bond of a shared kind would refute F6.

### F7 : Practice composes inside its closure; only contact moves the wall

Fig 6 :21 *"MINT composes inside the closure and can never add an atom."* Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :32 *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."* Fig 13 :115 *"The set is closed. The arrangements are not. That gap is why import exists."*

More practice inside the same environment rearranges the reachable arrangements and never manufactures a new information kind. The wall moves only when the observer meets a regime or species whose closure differs, which is the reason the world search for this question crossed into animal behaviour and cross-cultural work (Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."*).

**Refuter:** a training regime confined to one closure that adds a genuinely new information kind, with provenance showing no import, would refute F7.

### F8 : The ground decides; agreement does not, and independence is bought

Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :31 *"Two people reading the same report are not two frames; two instruments pointed at the same thing are."* Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* Fig 9 :51 *"evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it"*

The anchor for each domain is the measurement named in section 1. A consensus among trainers, or two papers quoting Nisbett and Miyamoto, is one pool talking. Evidence about the trainer's reputation is inadmissible; evidence about the training residual is admissible. Seat Map :163 *"High correlation is disqualifying for a verdict and efficient for a convention."*

**Refuter:** if an alleged training anchor changes its answer when frames push on it, that domain's ground is withdrawn; if two frames marked independent are found to share one dataset or review, the triangulation mark for that domain falls to single-source.

### F9 : Shaping is real, but the shaped system's own output cannot certify it

Fig 5 :46 *"When nothing is scoring, the drive manufactures a gradient."* Fig 5 :47 *"So a system that starts with nothing can still be shaped, by seeking the gap that is large and compressible, which is the same quantity the acceptance test scores."* Fig 5 :48 *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."* Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

This is the one place where the figures say the word "shaped" directly, so it deserves a careful reading. The mechanism is licensed; the certification is not. A trainee's confidence, a trainer's rating, or the sheer amount of practice is the system's own output and cannot settle the training. The ground must be an external measurement. From *The Hard Problem is About Source* (opened 2026-11-22): *"the instrument is speaking only about what it measured, it cannot comment on the source"* and *"If several paths create the same behavior, then behavior is a projection with lossy information"*, so an attentional reading alone cannot identify which practice produced it. A discriminator is owed (Fig 6 :30).

**Refuter:** an alleged training effect measured solely by the trained system's own output, with no external anchor, is not a result. If anyone claims one as settled, F9 requires it to be withdrawn until a discriminator exists.

### F10 : A practice can also sever the channel

Fig 10 :24 *"the ground does not decay, the channel does"* Fig 10 :26 *"stale percepts, dropped transients, saturated metrics, pooled readings"* Fig 10 :47 *"a convention that decides an outcome has stopped being one"* Fig 10 :72 *"When the question changes, the room should change."*

Daily practices do not only train attention toward the ground; they can train it away. A saturated classroom metric, a rubric that decides the outcome, or a habit kept after the task changed are the named failure modes. SEP 2024 gives the ordinary case: a new golfer with inadequate coaching attends to the putter rather than the ball, so attentional weighting can stifle as well as facilitate. Because valence is residual-relative (Fig 11 :49), the same practice is a benefactor for one residual and a malfactor for another.

**Refuter:** a practice regime shown to keep a non-updating ground reachable while its scoring convention fixes the outcome, with no detectable drift, would narrow F10 to the saturated-metric case only.

### F11 : The feature list and the time course are `gap`, not silence

Fig 9 :32 *"you get a kind of thing, never the answer itself"* Fig 13 :134 *"Unreachable is a verdict here, not a silence"* Fig 13 :135 *"It cannot say which primitive is missing, because naming it would mean already holding it."* Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*

The figures return the shape of the answer. They do not contain the names of attentional features, the cultural ethnography, or the number of trials to criterion. Any specific list produced here would be an import with no source gate, forbidden by Fig 6 :23. The honest report for D1 to D6 content and for all numerical magnitudes is `gap`.

**Refuter:** a per-slot ground measurement that names a trained feature and survives the anchor test of F8 would promote that slot from `gap` to `specified`, then to `grounded` only when the ground pays.

---

## 4. Pre-registered refuter (written before the per-domain verdicts)

A falsifier written before the run is a design instrument (Seat Map :287). These are written now, before any per-domain verdict is stated, and they are not tuned to the results above.

The shape claim *"attention training is a change in agent-and-habitat contact, indexed per slot, a union of maintained and unmaintained modes, with a functional-group machinery whose members and bindings vary, and with the feature names unreachable from the figures"* is refuted if any of the following holds:

1. **Agent-only result.** An agent-only change moves the ground with habitat held fixed. That defeats F2 and the capability claim (Fig 11 :72).
2. **Averaging result.** A pooled verdict across feature slots reproduces every per-slot verdict, so the slot discipline changes nothing. That defeats F1.
3. **Partition result.** Environment and practice, or visual and social information, form a clean partition with no shared machinery and no overlapping conditions. That defeats F3 and F6.
4. **Anchor result.** An alleged ground for a domain changes its answer when frames push on it, so no anchor exists for that domain. That domain's verdict is withdrawn rather than repaired.
5. **Independence result.** Two frames marked as triangulating are shown to draw on one evidence pool. That domain's mark falls to single-source or gap.
6. **New-kind result.** A practice variation introduces a new cognitive primitive rather than a new member or binding of a shared kind. That defeats F6 and F4.
7. **Naming result.** A figure line is produced that names a specific trained feature and pays for it at the ground. That defeats F11 and the `gap` verdict.

No result from the world search is allowed to flip a figure verdict directly; a conflict sends the census back to step 1.

---

## 5. Per-domain verdicts, kept separate and never averaged

Mode key: `general` is a structural statement from the figures, `specified` is that structure applied to a named domain, `gap` is unreach from the figures for content.

| domain | figure governance | corroboration mark | verdict |
|---|---|---|---|
| D1 Perceptual learning | F1, F2, F5, F6, F7; Fig 1 :19, Fig 11 :40, Fig 4 :22, Fig 12 :123, Fig 6 :21 | **triangulated** (Fig 11 contact, Fig 4 membrane, Fig 6 closure, low overlap; world: Gibson and Gibson, Goldstone, Sagi, SEP are one historical perceptual-learning pool, one witness) | `specified` shape: weighting is per-slot, specific, practice-bound; feature list `gap`. |
| D2 Cultural attention | F2, F4, F6, F8; Fig 11 :39, Fig 11 :48, Fig 12 :117, Fig 2 :29 | **triangulated** (Fig 11 habitat, Fig 12 composition, Fig 2 anchor, low overlap; world: Nisbett and Miyamoto plus its commentary are one contested pool, one witness) | `specified` shape: machinery invariant, object-versus-context binding variable; named targets `gap`. |
| D3 Social attention and gaze | F4, F6, F9; Fig 11 :49, Fig 12 :123, Fig 5 :48 | **triangulated** (Fig 11 valence, Fig 12 functional group, Fig 5 output limit, low overlap; world: gaze-cueing and face expertise are a separate social-attention pool, one witness) | `specified` shape: social attention is habitat-relative, binding variable; target list `gap`. |
| D4 Development | F3, F8 (link break); Fig 3 :20, Fig 3 :27, Fig 11 :56 | **single-source** for the dependency-break claim (Fig 3 only; no figure line fixes the threshold for "attending appropriately"). World: developmental evidence corroborates the mechanism, not the figure verdict. | `specified` on the shape, `general` on the break; feature list `gap`. |
| D5 Professional vision | F5, F6, F7; Fig 4 :22, Fig 12 :104, Fig 12 :107, Fig 6 :23 | **triangulated** (Fig 4 membrane, Fig 12 settled-molecule, low overlap; world: expert-novice examples in SEP and specificity data in Sagi are one expertise pool, one witness) | `specified` shape: expertise is a method crossed up then settled into an atom; named domain features `gap`. |
| D6 Animal ecological attention | F2, F3, F4, F7; Fig 11 :39, Fig 11 :56, Fig 11 :43, Fig 6 :23 | **triangulated** (Fig 11 habitat, Fig 4 membrane across scale, Fig 6 closure, low overlap; world: Gibson and Walk 1956 rat cage exposure and the animal-learning line in Tsushima and Watanabe 2009 are a genuinely low-overlap pool) | `specified` shape: capability is agent-and-habitat, exposure changes contact; named features `gap`. |

**No averaging.** D4 is single-source and is not upgraded by agreement with D1. The six domains form a union, so no combined score and no universal "training effect size" is computed.

---

## 6. Recommendation

1. Lead with F1 and F2: per-slot, agent-and-habitat. This is the part of the question the figures actually settle.
2. State the mode on every sentence. The shape is `general` or `specified`; the feature list and time course are `gap`.
3. Distinguish the two training modes (F3) before comparing any two studies that use the words "exposure" and "practice" differently.
4. Do not present any feature name as figure-derived. Fig 13 :135 governs: *"It cannot say which primitive is missing, because naming it would mean already holding it."*
5. Buy independence with low-overlap fields (animal behaviour, cross-cultural work) before promoting any domain mark from single-source to triangulated (Fig 2 :42).
6. Fig 4 :22 *"Only methods cross up. Only head starts come down."* Offer the census method, not a pooled conclusion.
7. Write to the public venues in `03_public_contact_points.csv`, one to one, and ask what would count as a failure. A failure is more useful than an endorsement.

---

## 7. Canonical usage check

Read after the first six sections, per the authority order:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the limit: the framework returns *"a shape, not a name"* and stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* This confirms F11 and the four strain re-censuses in section 2.
- `FRAMEWORK/figures/THE_FORMULA.md` step 7: SEARCHED, INWARD and OUTWARD are three distinct questions. For this question: SEARCHED is whether the feature is already in the perceptual-learning or cross-cultural corpus and unfound; INWARD is sharpening the emic/etic and "attending appropriately" instruments; OUTWARD is importing a low-overlap frame (animal behaviour). The feature list is not a SEARCHED result, because no figure line governs it.
- `FRAMEWORK/figures/THE_FORMULA.md` "Direction": make the sought-for shape an ordinary term, which section 0 does.
- `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`: Seat 4 holds a different vocabulary and *"must not hold the interiors, the records, the anchor, any stake, or any authority"* (line 139), which is why the outreach material leads with the residual and refuter, never the framework.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| First pass treated environment and practice as two independent causes (a partition). | **Retracted.** Re-censused to a union under Fig 9 :54 and :55. Both conditions co-occur and their overlap is a compound with its own loop. |
| First pass read Fig 5 :47 as licensing a claim about training creating new information kinds | **Retracted.** Fig 6 :21 and Fig 8 :32 forbid adding an atom by composing inside a closure. Shaping rearranges the reachable; it does not add a primitive. |
| First pass named "attention weighting" as the figure-derived answer to the question. | **Narrowed.** Attention weighting is a provenanced binding from Goldstone 1998, not a figure name. Shape-not-a-name governs the feature list; naming a held mechanism as the mechanism is a binding and must be recorded as such. |
| "A global training effect answers the question." | **Retracted.** Fig 1 :19 and :22 forbid the aggregate. Verdicts stay per slot and per domain. |
| F2 agent-and-habitat | **Canonically confirmed**, with its own stated falsifier at Fig 11 :72. |
| F11 gap for the feature list | **Canonically confirmed.** *"a shape, not a name"* and Fig 13 :134. |
| F8 independence requirement | **Canonically confirmed.** Fig 2 :31 to :32 and Fig 8 :48 to :52; Seat Map :163. |
| "This derivation could settle which features are trained" | **Never claimed, now explicit.** *The Recursive Self-Improvement Trap* calls LLM output simulation and requires the real architecture or the formula itself. |

### Round trip note

The primary census was written before the canonical check. The check removed three strained overstatements and added no new figure line. The round trip gap `R_T` is therefore small for the figure set and large for the feature list, which is reported as `gap` rather than filled. `11_audit.md` re-runs the census independently from the residual line alone.
