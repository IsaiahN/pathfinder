# Figure-grounded audit: cultural differences in memory and their causes

**Mode of this document: `general` on the structural shape, `specified` on the per-domain verdicts, `gap` on which cause produced a given observed difference. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (canonical mapping carried in the imported exemplar): LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure lines are quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Local framework primaries: `FIGURES_README_canonical.md`, `THE_FORMULA.md`. World sources were opened on 2026-11-22 and are listed in `10_source_ledger.csv`.

---

## 0. The question under audit

> **Question:** Are cultural differences in memory caused by different strategies, different social goals, or different forms of experience?
>
> **Source:** `cognitive science.txt` line 22, section 2. Perception, attention, and learning.

Stated in effect terms: we observe a memory difference between two cultural groups and want to attribute it to one of three candidate sources. A strategy difference is a change in what the person does at encoding or retrieval. A social-goal difference is a change in what the person is trying to remember and why. A difference in forms of experience is a change in the history of practice, tools, schooling, oral tradition and daily activity that the person has encountered. The question asks which one caused the observed difference.

An answer would look like a rule that, given a memory reading and a described group contrast, returns a source attribution with its instrument and its confidence. What this solution actually delivers is narrower: the figures fix the **shape** such a rule must have, and they cannot return the attribution for a particular case. The attribution is `gap`, not silence.

---

## 1. The residual in effect terms

R is the unattributed source of an observed cross-cultural memory difference.

- **Arity.** R is multi-indexed, `(memory phenomenon, cultural group, candidate source)`. It is not one number. Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** A pooled "culture affects memory" score is the aggregation error of Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
- **Symmetry.** The relation between a candidate source and a memory reading is ordered, not symmetric. A goal can produce a strategy and a strategy can produce a reading, but the reading does not return the goal. This is the difference between the ordered bonds `→` and `⇒` and the symmetric bond `+` in Fig 12. A correlation between strategy and recall cannot choose the arrow.
- **Scale.** The candidates live at different scales. Strategy is an individual operation at the moment of encoding. Social goal is an individual-in-context state. Form of experience is a developmental and historical habitat. The crossing between them is a membrane problem (Fig 4), with a lossy transform between scales.

---

## 2. Domain census

One line per domain: actors, currency, anchor. No domain without a nameable anchor is admitted.

| id | domain | actors | currency | anchor |
|---|---|---|---|---|
| D1 | Mnemonic strategy and encoding | memorizers, tasks, encoding instructions | encoding and retrieval operations, recall accuracy | controlled strategy-manipulation experiments |
| D2 | Social goals and motivated remembering | rememberers, audiences, social relations | what is remembered, and to what end | experiments varying the social motive for remembering |
| D3 | Forms of experience and enculturation | communities, children, oral and written traditions, schools | repeated practice, tools, exposure, daily activity | ethnographic and developmental records |
| D4 | Measurement and comparability | researchers, tests, translations, samples | test familiarity, invariance, sampling | cross-cultural measurement-invariance checks |
| D5 | Animal behaviour and evolutionary continuity | species, populations, habitats | memory systems, cache retrieval, neural coding | ethological and neurophysiological experiments |

**Union, not a partition.** The three named candidates are overlapping conditions. A social goal can select a strategy; experience can supply both; all three can bind at once. Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** So one lever, for example instructing everyone to use the same strategy, clears the region where strategy is the only binding condition and leaves the goal and experience intersections standing: *"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds"* (Fig 9 :55-56).

**Order by dependency (Fig 3 :20): "The chain is ordered by dependency, not by importance."** D4 (is the difference real?) is upstream of D1 to D3 (what produced it?), because a difference that is a measurement artifact has no cause to attribute. D3 (experience) is upstream of D1 and D2 in the developmental sense, because the habitat supplies the strategies and goals that are available. The break is at D4, where the instrument for comparability is weakest: *"A link with no instrument is not a link that works. It is a link nobody has looked at"* (Fig 3 :27).

No seventh domain was added. D5 is admitted as a low-overlap corroborator, not as a fourth cause.

---

## 3. Figure census, quoted before concluding

These lines were read from `03-FIGURES_TEXT.md` before any per-domain verdict was written. A line that only fits with a strain is recorded in section 6 and sent back to the census.

- Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
- Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
- Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
- Fig 2 :33: **"The anchor must not update."**
- Fig 2 :31: **"Two people reading the same report are not two frames; two instruments pointed at the same thing are."**
- Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
- Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**
- Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**
- Fig 3 :20: **"The chain is ordered by dependency, not by importance."**
- Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**
- Fig 4 :22: **"Only methods cross up. Only head starts come down."**
- Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
- Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**
- Fig 7 :35: **"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
- Fig 8 :45: **"Two frames together reach what neither reaches alone."**
- Fig 8 :50: **"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."**
- Fig 8 :53: **"Residual first, frame second."**
- Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause"**
- Fig 9 :32: **"you get a kind of thing, never the answer itself"**
- Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
- Fig 9 :57: **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**
- Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**
- Fig 10 :24: **"the ground does not decay, the channel does"**
- Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."**
- Fig 10 :52: **"Bring a characterised residual, never the source."**
- Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone."**
- Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**
- Fig 11 :49: **"An actor’s valence is relative to the residual, not a property it carries."**
- Fig 11 :51: **"No standing list of good actors survives a change of residual."**
- Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
- Fig 13 :134: **"Unreachable is a verdict here, not a silence"**
- Fig 13 :135: **"It cannot say which primitive is missing, because naming it would mean already holding it."**

---

## 4. Findings

### F1: A memory reading cannot name its source (decisive for the shape)

The observed difference is a reading. The three candidates are sources. Nothing in a reading determines which source produced it, because several sources can produce the same reading.

Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause"**

Fig 9 :32: **"you get a kind of thing, never the answer itself"**

The canonical essay *The Hard Problem is About Source* (fetched 2026-11-22) gives the mechanism in the language of metamerism: *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"the instrument is speaking only about what it measured, it cannot comment on the source."* A spectrometer resolved the green-reading case, not an argument: *"It was proven wrong not by argument, but by the arrival of a better instrument."* So asking "which cause?" from a recall score alone is a request to read a source off a projection. The figures do not supply that reading, and neither does the literature without a discriminating design.

**Verdict:** `general`, triangulated (Fig 9 limit plus Fig 6 instrument rule plus the source-discrimination essay, low overlap between a metalaw, an instrument rule and an essay). The shape "reading underdetermines source" survives. The specific attribution in any case is `gap`.

**Refuter:** a single reading that uniquely and robustly identifies one source across independent frames, with no intervening intervention, would defeat F1.

### F2: The three candidates form a union, not a partition

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**

Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

A social goal (D2) can recruit a strategy (D1). A history of experience (D3) can supply both the available strategies and the salient goals. The intersections are the interesting cases, and they are categorically different from the single-condition cases: Fig 9 :57: **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**

The empirical literature agrees in effect. Millar, Serbun, Vadalia and Gutchess 2013 found that *"The two cultural groups did not differ in general (item-level) memory"* while differing in specific memory, and noted that *"cultural differences may emerge for only some types of memory"*. That is a per-slot union, not a global cause. Dujmic, Cho, Gutchess and Chang 2026 report that *"culture may influence the effectiveness of strategies to reduce age-related associative memory impairments"*, which is a strategy-goal compound, not a strategy-only effect.

**Verdict:** `general` structural, triangulated (Fig 9 split rule plus the two empirical reports, which are in the same cultural-memory pool and count as one witness; the figure line is the second, low-overlap witness).

**Refuter:** a clean partition in which every observed difference is attributable to exactly one candidate with the other two demonstrably absent would defeat F2.

### F3: Verdicts stay per slot; no pooled cause

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

A single answer to the question as posed would average over memory phenomena (episodic detail, item recognition, associative binding, autobiographical specificity), over groups, and over the three candidates. Henrich, Heine and Norenzayan 2010 warn that *"there is substantial variability in experimental results across populations"* and that *"there are no obvious a priori grounds for claiming that a particular behavioral phenomenon is universal based on sampling from a single subpopulation."* A pooled "culture causes memory differences through X" verdict repeats exactly the sampling error they document.

**Verdict:** `general` structural, triangulated (Fig 1 slot rule plus Henrich et al.'s population-variability result, low overlap).

**Refuter:** a pooled model that reproduces every per-slot and per-group verdict without residual would defeat F3.

### F4: Before attribution, the difference must clear the anchor test

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

Fig 2 :33: **"The anchor must not update."**

The anchor for D4 is a measurement-invariance check: does the test measure the same construct in both groups, with the same familiarity and the same response norms? If the instrument moves when the researchers change the group, it is not an anchor and there is no difference to explain. The Dujmic 2026 authors explicitly flag this confound: *"the samples differed in their years of education. When considering this variable in a cross-cultural context, it is important to acknowledge historical differences in access to education."* Millar et al. 2013 tested an analogous familiarity confound and report that *"One potential confound could be whether the cultural differences in specific memory reflect East Asians’ reduced familiarity with the items."*

This is a `refuted` branch in the formula's sense: when the anchor fails, what is owed is a refusal of the difference, not an explanation of it (Formula step 2, REFUTED).

**Verdict:** `specified` on the requirement, triangulated (Fig 2 anchor rule plus two independent confound checks in the empirical literature).

**Refuter:** a demonstrated cross-cultural difference whose magnitude is invariant to test familiarity, translation and sampling, with the anchor shown not to update, would settle this domain for that case.

### F5: Independence decides whether two readings are two witnesses

Fig 2 :31: **"Two people reading the same report are not two frames; two instruments pointed at the same thing are."**

Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**

Strategy, goal and experience are usually measured from the same participants, in the same session, with the same test, by the same theoretical frame. That is one instrument wearing three names. Fig 8 :50: **"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."** Convergence only counts if the frames do not draw on the same evidence. Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

**Verdict:** `general` structural, triangulated (Fig 2 independence plus Fig 8 convergence, two different figures with different quantities).

**Refuter:** two attributions reached from genuinely disjoint evidence (for example an encoding manipulation and a longitudinal exposure record, with no shared participants or tests) that agree would be corroboration; two reached from one dataset are one witness.

### F6: Strategies and goals are not separable from the habitat

Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone."**

Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**

The question's three-way split treats strategy, goal and experience as independent levers. The figures say that the agent-side terms are properties of an agent-in-habitat. A strategy that is not supported by the habitat's contact does not persist, and a goal that is not paid for by the habitat does not organise memory. Fig 11 :49: **"An actor’s valence is relative to the residual, not a property it carries."** Fig 11 :51: **"No standing list of good actors survives a change of residual."**

The low-overlap animal literature corroborates the shape. Pravosudov, Roth, LaDage and Freas 2015 report that *"food-caching chickadees present a good model to tackle these questions because they: (a) occur over a large gradient of environmental harshness largely determined by winter climate severity, (b) depend on food caches to survive winter and their ability to retrieve food caches is, at least in part, reliant on hippocampus-dependent spatial memory."* Payne, Lynch and Aronov 2021 find that *"hippocampal circuit mechanisms are similar between birds and mammals, but that the resulting patterns of activity may vary quantitatively with species-specific ethological needs."* The memory machinery is shared; the member that fills the slot varies with the ecology.

**Verdict:** `specified` on the memory application, triangulated (Fig 11 capability plus two animal-behaviour sources that are genuinely low overlap with the cultural-memory pool).

**Refuter:** a strategy difference that persists unchanged when the habitat is fully reproduced, with contact restored, would weaken the habitat-dependence claim.

### F7: The invariant item is a functional group; variation is a member or a bond

Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Encoding, consolidation and retrieval form the functional group that is present wherever memory occurs. What varies across cultures is the member (which strategy, which social goal, which practice fills the slot) and the bond (the ordered relation between a goal and a strategy, or the comparison between a current goal and a remembered past). Two groups using the same memory atoms arranged with different bonds are isomers in Fig 12's sense. Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

**Verdict:** `specified`, single-source for the figure definition (Fig 12 only), with the empirical member-level variation corroborated by the cultural-memory sources in F2 and F6. Marked `single-source` on the figure side, not upgraded.

**Refuter:** a cross-cultural memory variation that requires a new cognitive primitive rather than a new member or bond of an existing group would defeat F7 (Operators :68: a relation failing all seven tests is a claim not yet made).

### F8: A discriminating instrument is owed, and instruments grow from worse ones

Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**

Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

The source question breaks at the point where no instrument discriminates among strategy, goal and experience. The remedy is not a longer argument or a larger literature. It is an instrument that already returns something and can be sharpened: an encoding manipulation that returns a strategy effect, a motive manipulation that returns a goal effect, an exposure record that returns an experience effect, each read against a non-updating anchor. Fig 4 :22: **"Only methods cross up. Only head starts come down."** What can be shared between fields is the method, not a recording of one cultural comparison.

**Verdict:** `general` structural, triangulated (Fig 6 instrument rule plus Fig 3 dependency break plus Fig 4 membrane, three different figures).

**Refuter:** a source attribution that survives with no discriminating instrument, only a larger correlation pool, would defeat F8.

### F9: Which cause produced a given difference is a declared gap

Fig 13 :134: **"Unreachable is a verdict here, not a silence"**

Fig 13 :135: **"It cannot say which primitive is missing, because naming it would mean already holding it."**

No figure line returns "strategy", "goal" or "experience" as the cause of a specific observed difference. Those names come from the empirical frame, and choosing one is a binding onto held atoms, not a derivation (see `05_what_shape_means.md` section 3). What the figures can return is a kind of thing: a separator that requires per-slot indexing, a non-updating anchor, independent readings and a discriminating instrument. That is the shape. The source name for any particular case is `gap`, which is a verdict and not an omission.

**Verdict:** `gap` plainly, `general` on why it is a gap. Triangulated (Fig 13 limit plus Fig 9 shape limit).

**Refuter:** a figure line that directly maps a memory reading to one of the three sources, verified verbatim in the figure text, would close the gap.

### F10: Mode discipline

It would be a category error to answer "it is strategies" or "it is goals" as a `grounded` verdict. The formula says *"the ground settles it. Verified only by what pays. A gate is not the ground."* No measurement in this folder pays for any of the three. The honest labels are: `general` for the shape, `specified` for each domain's requirement, `gap` for the attribution. Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** A large literature on one cause is a filter for what to try first, not a witness for that cause.

**Verdict:** `general`, triangulated (formula mode rule plus Fig 9 filter rule).

---

## 5. Strain test and re-census

Two candidate readings were tried and returned to the census rather than kept as witnesses.

**S1, tried and re-censused out.** Fig 13 :74 state/structure cross-kind composition was tried on the three candidates as if strategy, goal and experience were the six-term substrate's states and structures. It does not sort them and it is not a cognitive attribution rule. Re-census: Fig 13 governs the six physical primitives; the memory question governs bindings onto cognitive machinery that is not the six-term set. Different objects, no strain after re-census. Kept visible here rather than erased.

**S2, apparent conflict dissolved.** Fig 11 :49 says an actor's valence is relative to the residual, while Fig 2 :33 says the anchor must not update. Read as one claim they conflict. Re-census: Fig 11 governs which actor helps a given residual; Fig 2 governs what settles the question. A goal can be helpful for one memory residual and harmful for another, and the instrument used to settle the difference must still be fixed. Different objects, no strain after re-census.

**S3, live type question.** The ordered bonds `→` (sequence) and `⇒` (production) and the comparison `⋛` are not interchangeable. A goal is a comparison (Operators :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*), while a strategy is a sequence of operations. Whether a specific empirical association between strategy and recall is `→` or `⇒` needs a manipulation, not an argument. Named, not hidden, and carried into `06_isomers_and_order.md`.

---

## 6. Pre-registered refuter

Required before the conclusion: *"a falsifier written before the run is a design instrument, not only an honesty device"* (Seat Map :287, canonical mapping). The shape claim is refuted if any of the following holds:

1. A clean partition is demonstrated: a given memory difference attributable to exactly one of the three candidates, with the other two absent, across independent slots and groups (defeats F2).
2. A single memory reading uniquely identifies one source across independent frames, with no discriminating instrument and no intervention (defeats F1 and F8).
3. An alleged anchor for the difference moves when the researchers push on it, so the difference is a shared evidence-pool artifact (defeats F4).
4. A cross-cultural memory variation requires a new cognitive primitive rather than a new member or bond of an existing functional group (defeats F7).
5. Two frames marked independent are found to share participants, tests and theoretical frame (defeats F5).
6. A pooled cross-cultural score reproduces every per-slot and per-group verdict without residual (defeats F3).
7. A figure line is found, verified verbatim in `03-FIGURES_TEXT.md`, that assigns a specific memory difference to one of the three sources (closes F9).

If any fires, the shape is withdrawn or narrowed. Until one is run, no attribution may be labelled `grounded`.

---

## 7. Recommendation

1. State the shape first: reading underdetermines source; three candidates form a union; verdicts are per slot; an anchor and an independent, discriminating instrument are required (F1 to F5).
2. Do not name a cause for a given difference. Offer the separator instead, and record the attribution as `gap` (F9).
3. Check the anchor before the cause: test familiarity, translation and sampling are upstream (F4).
4. Buy independence in proportion to the cost of being wrong. Do not count two readings from one dataset as two witnesses (F5).
5. Send the generator, not a recording of one cultural comparison. Fig 4 :22: **"Only methods cross up. Only head starts come down."**
6. Offer the material through the public venues in `03_public_contact_points.csv`, one to one, and ask what would refute the shape rather than whether the reader agrees.

---

## 8. Canonical usage check and retraction log

Two local sources govern how the figures may be used. `FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* And: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* `THE_FORMULA.md` supplies the mode rule and the three-question step 7.

| earlier reading | status after the canonical check |
|---|---|
| "the answer is strategies, goals, or experience" | **Refused.** No figure line assigns a source; the question is a union with a `gap` attribution. Fig 9 :32, Fig 13 :134. |
| "the three causes are alternatives" | **Retracted.** They are overlapping conditions; the intersections are specific compounds. Fig 9 :54-57. |
| "culture" treated as a new cognitive primitive | **Retracted.** Experience is the habitat; capability is agent-and-habitat. Fig 11 :39. |
| "shape, not a name" applied to strategy, goal and experience | **Narrowed.** The limit governs missing primitives. These three are bindings from the empirical frame onto held machinery, so naming them as candidate sources is legitimate provenance, not an invented primitive. Naming one as *the* cause without an instrument is still refused. |
| Fig 13 cross-kind rule applied to the three candidates | **Re-censused out.** Different object (S1). Kept visible rather than silently dropped. |
| "a bigger literature settles the cause" | **Refused.** Filters for the budget, witnesses for the verdict. Fig 9 :60. |

### Confirmations

The no-source-from-reading verdict is canonically confirmed by the figures README's own limit: the framework returns *"a shape, not a name"* and stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* The union reading is confirmed by Fig 9 :54. The gap verdict is confirmed by Fig 13 :134: unreachable is a verdict, not a silence.

---

## 9. Per-domain verdicts

| domain | governing lines | mark | verdict |
|---|---|---|---|
| D1 strategy | Fig 12 :123, Fig 1 :19, Fig 6 :32 | triangulated | `specified`: a strategy is a member of the encoding functional group, not a new primitive. Which strategy: `gap`. |
| D2 social goal | Fig 11 :49, Fig 11 :51, Fig 12 :123 | triangulated | `specified`: goal valence is residual-relative; there is no standing list of goals. Which goal: `gap`. |
| D3 experience | Fig 11 :39, Fig 11 :40, Fig 4 :22 | triangulated | `specified`: experience is the habitat; capability is agent-and-habitat. Which experience history: `gap`. |
| D4 measurement | Fig 2 :29, Fig 2 :33, Fig 3 :27 | triangulated | `specified`: the anchor must not update; a failed difference is refused, not explained. |
| D5 animal continuity | Fig 11 :39, Fig 4 :20 | triangulated | `general`: memory machinery is shared across species; the filling member follows ethological need. |

Verdicts are kept separate and never averaged into a single "culture causes memory difference through X" claim.
