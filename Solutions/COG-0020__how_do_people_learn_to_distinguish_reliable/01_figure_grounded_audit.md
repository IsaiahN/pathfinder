# Figure-grounded audit: how people learn to separate reliable signals from noise

**Mode of this document: `specified` on the separator and the per-domain findings, `general` on the structural shape, `gap` on the curriculum and the criterion value. Nothing here is `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says that LLM output is *"simulacra"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figure quotes are from `FRAMEWORK/reference/03-FIGURES_TEXT.md` only, cited as `Fig N :line`. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources were opened on 2026-11-22 and are listed in `10_source_ledger.csv` and `04_links_and_distribution.md`.

---

## 0. The residual in effect terms

A learner faces a stream of observations under uncertainty. Each observation might be a reliable signal, meaning a regularity that a decision should track, or noise, meaning variation that should not move the decision. The learner's current library predicts which observations will pay. The outcome is what actually pays. R is the gap between the two, and it has four features that decide everything downstream.

1. **Arity.** R is indexed by a slot, not by the learner. The slot is a cue-source-situation triple under a particular risk. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A pooled detection score throws away the only thing that says where to look.
2. **Symmetry.** The split is not symmetric. Treating noise as a signal and treating a signal as noise are different errors with different costs. The figures name this as a comparison, Fig 12 :87: "a threshold relation between two quantities". The Operators table gives the test: is it about which is larger, rather than both being present? The asymmetry is in the cost, not in the cue.
3. **Scale.** Learning closes within one lifetime at the individual scale and crosses between people and generations at the population scale. Fig 4 :19-20 says the kernel does not change with size: only the actors, the currency and the anchor change. The membrane rule is Fig 4 :22: "Only methods cross up. Only head starts come down."
4. **What is unreadable is not noise.** Symbols table :38-40 defines R as "The gap between prediction and observation" and adds "it is always a slice: what cannot be perceived yet is residual and simply cannot be read." Labeling an unreadable residual as noise is a category error. In the figures, noise is partly the detail a lossy crossing discards and that reappears above it: Fig 13 :32, "the detail a crossing discards reappears above it as noise." So noise is not a substance out there; it is, in part, what a coarser description dropped.

**An answer would look like:** a rule that assigns each slot a verdict, states the risk-dependent threshold, names an instrument that would settle a disputed slot with ground contact that does not update on the learner's confidence, and says what may cross to another learner. What the figures return is the shape of that rule, not the rule's content (Fig 9 :32: "→ you get a kind of thing, never the answer itself").

---

## 1. Domain census, before choosing any figure line

R by arity, symmetry and scale is stated in section 0. One line per domain with actors, currency, anchor. No nameable anchor means it is not yet a domain.

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| D1 Individual perception and attention | a learner, an observation stream, a per-slot prediction | hits, misses, false alarms, correct rejections | yes: outcome feedback that does not move with the learner's confidence | union of perception and objective links, ordered by dependency (Fig 3) |
| D2 Decision under risk | a decision maker, competing cues, an asymmetric cost matrix | expected cost of the two error types, criterion placement | yes: a consequence that pays, not a feeling of certainty | threshold comparison, not a symmetric join (Fig 12 :87) |
| D3 Social and information sources | peers, institutions, media, testimony, the learner | transmitted reports and credibility labels | yes: independent ground contact at the slot | union of mutual update, common cause and genuine triangulation (Fig 2) |
| D4 Cultural and generational accumulation | a population of learners over time | methods up, head starts down | yes: the ground persists even when the channel decays (Fig 10 :24) | membrane crossing, room selection (Fig 4, Fig 7) |
| D5 The asked-for curriculum and criterion value | none nameable | none | **no nameable anchor** | not yet a domain; a `gap`, reported as such |

**Partition or union.** D1 through D4 form a union of overlapping conditions with different anchors, not a partition. Fig 9 :55-57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." A single lever, such as more information or more attention, clears the region where only one condition holds and leaves the intersections standing (Fig 9 :54). Verdicts are therefore kept per domain and never averaged into a single "signal detection ability" score.

**Dependency order (Fig 3).** Perception gives vocabulary, vocabulary gives an objective, objective gives planning, and only then can learning be named and carried. Fig 3 :20: "The chain is ordered by dependency, not by importance." A step whose input never arrives cannot be diagnosed (Fig 3 :22-23). The middle link is the one to check first, because it has the fewest instruments (Fig 3 :25-27). D5 has no actors or anchor and is not promoted to a domain by wanting an answer.

---

## 2. Figure census, quoted before concluding

Each line below is copied from `03-FIGURES_TEXT.md` and checked against the source extract. A line that only fits with a strain is marked as governing another quantity and sent back to census (section 7).

| figure | verbatim line | governs |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | per-slot residual |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | why a pooled accuracy score misleads |
| Fig 1 :23 | "The ground enters as the only metric." | what may settle a verdict |
| Fig 1 :27 | "They are frame-internal. A frame cannot score itself with a quantity it also produces." | confidence, fluency and consistency are disqualified |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | outcome as anchor |
| Fig 2 :31 | "Two people reading the same report are not two frames; two instruments pointed at the same thing are." | independence between information sources |
| Fig 2 :32 | "Independence is what makes agreement mean something." | agreement only after independence |
| Fig 2 :33 | "The anchor must not update." | feedback must not move with confidence |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement is not calibration |
| Fig 2 :40 | "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" | pooled sources are one witness |
| Fig 2 :42 | "Buy independence in proportion to the cost of being wrong." | risk changes how much independence to buy |
| Fig 3 :19 | "Optimising a link that already works cannot rescue one that does not." | more attention cannot fix a missing objective |
| Fig 3 :25-27 | "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." | the middle link is the usual break |
| Fig 3 :27 | "A link with no instrument is not a link that works. It is a link nobody has looked at." | absence of a test is not success |
| Fig 4 :22 | "Only methods cross up. Only head starts come down." | what teaching may pass |
| Fig 4 :25 | "A recording carried upward looks like knowledge and is a description of one occasion." | why a rule of thumb fails in a new habitat |
| Fig 5 :13 | "mis-attached: refit what you have, do not invent" | most cue failures are refits |
| Fig 5 :33 | "The three guards are a product, not a checklist." | support, reach and novelty |
| Fig 5 :42 | "The acceptance test is a bargain, not a threshold." | a credibility label must pay for itself |
| Fig 5 :48 | "Its own output is never a measure of success." | the learner's own confidence cannot certify learning |
| Fig 5 :65-66 | "Write down what an answer would look like, bind it, and let it accrue a residual like anything else." | pre-register the sought-for shape |
| Fig 6 :23 | "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | a new source is an import |
| Fig 6 :32 | "An instrument is not built from a description. It is improved from a worse instrument already returning something." | calibration instruments grow from partial ones |
| Fig 7 :35 | "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." | cross-environment progress |
| Fig 7 :36 | "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced." | why repeating one environment stalls |
| Fig 8 :32 | "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." | more of the same cues cannot add a new source |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | honest stop at a gap |
| Fig 8 :47 | "Independence is one quantity read twice." | independence decides both agreement and surplus |
| Fig 8 :50-52 | "Convergent derivation and adopted import look identical in the contents." | provenance decides what a source contributed |
| Fig 9 :27-28 | "describe it before you go looking, or any frame you pick will seem to fit" | residual first, field second |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | an accuracy score is not a witness |
| Fig 10 :24 | "the ground does not decay, the channel does" | a cue that stops predicting is a channel failure |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | do not teach the interior before asking for a check |
| Fig 10 :47 | "a convention that decides an outcome has stopped being one" | a credibility label that fixes a verdict is not a convention |
| Fig 11 :49 | "An actor's valence is relative to the residual, not a property it carries." | reliability is not carried by a source |
| Fig 11 :51 | "No standing list of good actors survives a change of residual." | refusal of a permanent reliable-cue list |
| Fig 12 :5 | "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." | arrangement, not cue inventory |
| Fig 12 :87 | "a threshold relation between two quantities" | the signal-noise split as comparison |
| Fig 12 :117 | "isomer. Same atoms, different bond, different substance." | two risk regimes over one cue set |
| Fig 12 :125-126 | "Bits price the description. Actions price finding out whether it holds." | cost of stating a rule versus cost of testing it |
| Fig 13 :32 | "the detail a crossing discards reappears above it as noise." | noise as discarded detail |
| Fig 13 :134 | "Unreachable is a verdict here, not a silence" | status of the curriculum request |

---

## 3. Findings F1 to F11

### F1: Reliability is a relation, not a property carried by a source (decisive, `specified`, triangulated)

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :51: "No standing list of good actors survives a change of residual." Fig 11 :50 adds that "the same actor is a benefactor to one residual and a malfactor to another."

A cue, a physician, a news outlet, or a memory is not reliable in itself. It is reliable relative to a residual in a habitat. The same fever is a signal for one diagnosis and noise for another; the same confident witness is a good source for a routine claim and a bad one for a claim they benefit from. The question's phrase "reliable signals" invites a standing list. The figures refuse that object. What survives is a per-slot verdict: for this residual, in this habitat, does this source's reading pay against an outcome that does not move when the reading moves?

World corroboration, low overlap. Green and Swets' detection theory, as summarised at `https://en.wikipedia.org/wiki/Detection_theory`, describes sensitivity as depending on the task and separates it from response bias: "Bias is independent of sensitivity." A source can have high sensitivity on one task and a wrong bias on another. Haselton and Buss' error management theory, at `https://en.wikipedia.org/wiki/Error_management_theory`, says "recurrent cost asymmetries between two types of errors Type 1 and 2 over evolutionary time should result in a bias to make the less costly error." Both are outside the framework pool and both agree that reliability is a relation to a task and a cost, not a property of a cue. **Triangulated** (Fig 11 plus two distinct low-overlap world frames), `specified`, ungrounded.

### F2: Keep the residual per slot; a pooled accuracy is a filter, not a witness (`specified`, triangulated)

Fig 1 :19 and :22 are quoted in section 2. Fig 1 :23: "The ground enters as the only metric." Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 9 :60: "Use filters for the budget and witnesses for the verdict."

Detection theory supplies the low-overlap vocabulary: hits, misses, false alarms and correct rejections are counted in a 2 by 2 table, and sensitivity `d'` is separated from bias `c` and `beta`. The ROC literature adds the warning that "any attempt to summarize the ROC curve into a single number loses information about the pattern of tradeoffs" (`https://en.wikipedia.org/wiki/Receiver_operating_characteristic`). An AUC of 0.9 can coexist with low precision. So a pooled "I am 90 percent good at spotting fake news" is precisely the aggregate in Fig 1 :22. The verdict belongs per cue-source-risk slot. **Triangulated** (Fig 1 and Fig 9 against the ROC single-number criticism), `specified`.

### F3: Confidence, fluency and agreement are frame-internal (`specified`, triangulated)

Fig 1 :27 disqualifies a quantity a frame produces. Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."

The familiar feeling of "this looks reliable" is a frame-internal reading. It can be produced by the same mechanism that produced the cue. Kahneman and Klein 2009, read through the Psychology Reader guide and the university-hosted copy at `https://psychologyreader.com/readings/kahneman-klein-2009-intuitive-expertise`, make the same point in different terms: "A feeling of recognition does not by itself show that the recognized pattern is predictive," and the paper is "especially valuable for separating subjective certainty from independently measurable performance." Goodhart's law, at `https://en.wikipedia.org/wiki/Goodhart%27s_law`, names the failure when a measure becomes a target: "When a measure becomes a target, it ceases to be a good measure." That is Fig 10 :47 in world vocabulary. **Triangulated**, `specified`, ungrounded.

### F4: The usual break is the objective link, not perception (`specified`, triangulated)

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :22-23: "A step whose input never arrives cannot be diagnosed, only its predecessor can." Fig 3 :25-27, quoted above. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Most training aimed at "telling signal from noise" improves perception: look harder, check more sources, read more. But the middle link is having terms for what a situation affords and being able to say what would count as progress. Without a stated objective, more evidence has nowhere to land. The figures' remedy is a discipline, not a drill: Fig 5 :65-66, "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else." Concretely, before examining a source, write down the prediction it should make if it is reliable, the observation that would count against it, and the cost of each error. This is the formula's "Direction" step applied to a learner. **Triangulated** (Fig 3 and Fig 5 with the pre-registration discipline in the formula), `specified`.

### F5: Risk changes the criterion, not the method (`specified`, triangulated)

Fig 12 :87 defines the split as "a threshold relation between two quantities". The Operators table gives the comparison glyph ⋛ and the test "is it about which is larger, rather than both being present?" Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

The world frames agree on the mechanism. Detection theory says "Bias can be desirable if false alarms and misses lead to different costs" and gives the sentry example: a sentry in wartime detects fainter stimuli but "might also be more likely to treat innocuous stimuli as a threat." The Bayes criterion section assigns utilities to the four outcomes and chooses the threshold from the differences U11 minus U21 and U22 minus U12. Error management theory says the cost asymmetry selects which error the system makes more of, with the smoke detector example: "the sensitivity threshold of a smoke detector is designed to err on the side of Type I errors." Fig 12 :125-126 separates the two currencies: "Bits price the description. Actions price finding out whether it holds." A high-risk environment does not need a different definition of signal; it needs a threshold set by the cost ratio and enough independent checks to afford it. **Triangulated** (Fig 12 and Fig 2 with SDT and EMT), `specified`, ungrounded.

### F6: Two sources are one only if they draw on different evidence (`specified`, triangulated)

Fig 2 :31: "Two people reading the same report are not two frames; two instruments pointed at the same thing are." Fig 2 :32: "Independence is what makes agreement mean something." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 2 :41: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it." Fig 8 :47: "Independence is one quantity read twice."

The information cascade literature is a direct low-overlap corroborator. `https://en.wikipedia.org/wiki/Information_cascade` reports Anderson's urn study: "an information cascade was observed in 41 of 56 such runs," and "in the runs where the cascade occurred, at least one participant gave precedence to earlier decisions over his own private signal." It also notes cascades "can be incorrect" and "can be based on little information." The Stanford Encyclopedia entry on testimony, `https://plato.stanford.edu/entries/testimony-episprob/`, distinguishes reductionist "Positive Reasons" from non-reductionist "Presumptive Right" and records the objection that "testimony about some of these things is highly reliable... whereas testimony about other topics is less so," so the category must be disaggregated. Fig 2 :39 says correlation has valence, and this is the same split: agreement is good for a convention and worthless as a verdict when the pool is shared. **Triangulated**, `specified`.

### F7: A new information source is an import with a source gate and a shadow test (`specified`, triangulated)

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 6 :12-13 gives the gate: "source gate: provenance" and "shadow test: explains a gap." Fig 6 :30: "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents."

A learner who only re-combines the cues they already hold cannot acquire a new kind of evidence. A new instrument, a new domain expert, or a new measurement is an import from a frame whose closure differs. It needs a provenance record (where did this reading come from) and a shadow test (does it explain a gap the old cues could not). Otherwise a wrong atom is imported, which Fig 6 prices above starting from primitives. Fig 6 :32-33 adds the instrument rule: "An instrument is not built from a description. It is improved from a worse instrument already returning something." The practical form: you cannot specify an ideal reliability detector from an account of reliability; you improve the crude check you already have by reading the residual it fails to resolve. **Triangulated** (Fig 6 and Fig 8), `specified`.

### F8: Most failures are mis-attachment, and a new term must pay a bargain (`specified`, single-source on the figure side)

Fig 5 :13: "mis-attached: refit what you have, do not invent." Fig 5 :33: "The three guards are a product, not a checklist." Fig 5 :41: "Any one of them at zero stops the mint entirely." Fig 5 :42: "The acceptance test is a bargain, not a threshold."

When a learner's cue fails, the common case is that an existing category is attached to the wrong slot, not that a new category is owed. Refit first. Mint only when there is live mass, a composable candidate and genuine novelty, and only if stating the new cue plus what remains unexplained costs less than the confusion it removes. Fig 5 :48 blocks the obvious shortcut: the learner's own satisfaction with the new rule is not a measure of success. **Single-source** (the MDL bargain is figure-derived; the base-rate literature corroborates the refit failure only indirectly), `specified`.

### F9: What crosses between people is a method, not a recording (`specified`, triangulated)

Fig 4 :22: "Only methods cross up. Only head starts come down." Fig 4 :23-24: "upward: a method that can be reapplied. Never the recording of a particular success." Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

Telling a learner "this source is reliable" passes a recording. Telling them how to test a source against an outcome that does not update passes a generator. The first repeats a past success in a habitat that may have changed; the second can produce a new one. Fig 7 adds the population condition: progress across environments requires that the next environment differ from the last and match the residual the last one surfaced. Repeating one environment produces "motion, no progress" (Fig 7 :32). Kahneman and Klein 2009 corroborates from outside: skilled intuition needs "an environment of sufficiently high validity" and "adequate opportunity to practice the skill." A stable environment with clear feedback is the condition under which a method can be earned; without it, experience can entrench a wrong bias. **Triangulated**, `specified`, ungrounded.

### F10: A cue that stops predicting is a channel failure until shown otherwise (`specified`, triangulated)

Fig 10 :24: "the ground does not decay, the channel does." Fig 10 :25-26 names the failure modes: "stale percepts, dropped transients, saturated metrics, pooled readings." Fig 10 :28: "the output is not a verdict, it is" and "you have lost touch." Fig 10 :29: "→ keep the anchor reachable." Fig 10 :72: "When the question changes, the room should change."

When a formerly reliable cue stops paying, two readings are possible: the world changed, or the channel decayed. The figures default to the second and require the seat to keep the anchor reachable. Goodhart's law corroborates the mechanism: once a measure is used as a target, "Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes." The base-rate parity example at `https://en.wikipedia.org/wiki/Base_rate_fallacy` gives the other half: "The probability of a positive test result is determined not only by the accuracy of the test but also by the characteristics of the sampled population." A cue can appear to decay when only the base rate moved. **Triangulated** (Fig 10 with Goodhart and base-rate parity), `specified`.

### F11: No curriculum and no criterion value are governed (`gap`, not silence)

No figure line names a reliable cue, a numerical threshold, a training schedule, or a universal reliability score. D5 has no nameable anchor and was not promoted to a domain (section 1). Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 13 :134: "Unreachable is a verdict here, not a silence." Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 9 :32: "→ you get a kind of thing, never the answer itself."

What is owed is an instrument at the slot: a source-discriminating reading that separates the candidate sources of one observed regularity. *The Hard Problem is About Source*, opened 2026-11-22, gives the analogue: a color instrument reads green but "the instrument is speaking only about what it measured, it cannot comment on the source," and "It was proven wrong not by argument, but by the arrival of a better instrument." **Gap**, reported as `unreachable` at this budget and not as an underivable-in-principle claim.

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing instruction that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds.

1. A cue or source's reliability survives a change of residual with no re-enumeration, so Fig 11 :49-51 is false.
2. A frame-internal quantity, confidence, coherence, or agreement within a shared pool, settles a reliability verdict against a non-updating outcome, so Fig 1 :23-27 or Fig 2 :29-35 is false.
3. A state-to-state or structure-to-structure composition that cannot be refused governs the signal-noise split, so Fig 13 :74-75 is false.
4. A recording of one past success, replayed in a changed habitat, produces a new success with no method passed, so Fig 4 :22-25 is false.
5. Empirical: in a regular environment with immediate, accurate feedback, people do not improve at separating hits from false alarms with practice. This would break the world corroboration, not the figure shape.

Until one of these is run, no part of this folder may be labelled `grounded`.

---

## 5. Per-domain verdicts, kept separate and never averaged

| domain | verdict | mode | status |
|---|---|---|---|
| D1 perception and attention | The residual is per slot; attention alone cannot rescue a missing objective link. What counts as evidence must be written down before the cue is examined. | `specified` | triangulated, F1, F2, F4 |
| D2 decision under risk | Reliability is a threshold relation whose criterion is set by the two error costs. Different risks change the criterion and the amount of independence bought, not the method. | `specified` | triangulated, F5, F10 |
| D3 social and information sources | A source's reliability is not carried. Two readings count as two only when they do not draw on the same evidence. Agreement from a shared pool is one witness. New sources are imports with provenance and a shadow test. | `specified` | triangulated, F1, F6, F7 |
| D4 cultural and generational accumulation | Pass methods and head starts, not recordings of past successes. Progress between environments needs rooms that differ and match the surfaced residual. | `specified` on the separator, `general` on the structural claim | triangulated, F9 |
| D5 curriculum and criterion value | No figure line governs. A source-discriminating instrument is owed. `unreached`, a verdict and not silence. | `gap` | F11 |

No average is taken across these rows. A learner can be good at D1 and fail at D3, and the pooled score would hide which lever to pull.

---

## 6. Recommendation

1. State the residual per cue-source-risk slot. Drop the pooled accuracy question (F2).
2. Before looking at any source, write down what a reliable reading would predict, what would count against it, and the two error costs (F4, Fig 5 :65-66).
3. Set the criterion from the cost ratio of the two errors. Buy independent readings in proportion to the cost of being wrong (F5, Fig 2 :42).
4. Treat every new source as an import. Record provenance and run a shadow test before counting it (F7).
5. Teach the checking method, not the list of sources that worked last time (F9).
6. Report the missing curriculum and criterion value as a `gap` with a named instrument owed, not as a silence and not as a number invented to fill the slot (F11).

---

## 7. Strains, re-census and corrections

**S1, live and narrowed.** Fig 11 :51 refuses a standing list of good actors, yet learners plainly use shortcuts. Re-census: Fig 11 governs valence relative to a residual; a shortcut is a binding onto an already-held atom and is licensed as provenance, not as a permanent property of the actor. The "shape, not a name" rule governs a missing primitive, so naming a held binding is not forbidden. Correction kept visible, in parallel with the same correction in the completed exemplar's `05` section 5b.

**S2, dissolved by re-census.** Fig 13 :32 calls noise the detail a crossing discards and that reappears above; detection theory calls noise the background distribution within one level. Different objects: one is a cross-scale loss, the other a within-level distractor. A learner faces both. Neither line strained after the re-census.

**S3, dissolved by re-census.** Fig 12 :87 makes the split a threshold comparison; ROC analysis offers AUC, a single number across all thresholds. The ROC article itself warns that a single-number summary "loses information about the pattern of tradeoffs of the particular discriminator algorithm". AUC is a budget filter (Fig 9 :60), not a witness for a particular criterion. Different objects, no strain.

**S4, live design constraint.** Fig 10 :24 says the ground does not decay while the channel does; Fig 10 :72 says the room should change when the question changes. Re-census: at a fixed slot, a cue that stops paying is channel failure until shown otherwise; when the slot changes, a new room with a new anchor must be enumerated. Both statements are kept, with the re-census recorded.

**Retraction log.** An earlier draft of this audit treated "reliable signals" as a symmetric classification problem and looked for a discriminating rule of thumb. That reading is retracted: Fig 12 :87 and the Operators test make the split an ordered threshold with asymmetric costs, and Fig 11 :49-51 makes reliability relative. The draft also read AUC as the sought-for reliability score. That reading is retracted: it is a filter by Fig 9 :60. Both earlier readings are preserved here rather than erased.

---

## 8. Canonical usage check

`FRAMEWORK/reference/FIGURES_README_canonical.md` was read in full. It says the figures *"outrank everything else in the repo"* and that *"the quotes are the authority, not this summary."* It also says a reading that makes one figure contradict another has misidentified its domain, not found a flaw, which is the rule applied in section 7. The framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* That is exactly the status of D5. *"Indiscernibility is not identity"*: a cue set that has always paid is not thereby proven complete.

The figures are primary and decide; the world sources in section 3 are secondary corroboration only. Detection theory, error management theory, information cascades, testimony epistemology, Goodhart's law, base-rate research and Kahneman and Klein are drawn from distinct fields with low overlap with the framework, and each was opened on 2026-11-22. The framework essay *The Hard Problem is About Source* shares the framework author's evidence pool and is used only for the shape reading, never as an independent witness. No conflict with a figure verdict was found; the conflict rule was not triggered. Agreement from the shared framework pool is one witness, not several.
