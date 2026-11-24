# Figure-grounded audit: can text alone ground meaning?

**Mode of this document: `specified` on the domain verdicts, `general` on the structural shape, `gap` on the discriminator. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap*: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise"*, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Figure text.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Every quoted string below is copied from that file and cited as `Fig N :line`. No figure quote was taken from a summary or from memory.

---

## 0. The question under audit, bound as an ordinary term

> **Can language models develop grounded meanings through text alone, or is sensory and social experience necessary?** (reasoning.txt line 81)

The question arrives as an either/or. The first job is to refuse the framing until the terms are in effect language. Formula step "Direction" and Fig 5 :65 require the sought-for shape to be written down and bound before the run, so that the preference can accrue a residual and be refusable:

- **"grounded meaning"**, in effect terms: a term whose standing is settled by an anchor that does not change its answer because of what any frame thinks (Fig 2 :29, Fig 2 :33). It is not a term that merely sounds right, is widely agreed, or is useful for coordination. Fig 10 :18: *"a declared meaning is not a grounded one"*; Fig 10 :19: *"→ install what can be violated"*; Fig 10 :49: *"Declaring a meaning does not ground it."*
- **"text alone"**, in effect terms: a frame whose only imports are written tokens and whose only local residual is next-token prediction error. Crucially, a text corpus is a listed external source in Fig 6 :10, so "text alone" is not automatically "no import." That correction is made in F2 and is logged in §7.
- **"sensory and social experience necessary"**, in effect terms: candidate bindings for an import from a frame whose closure differs on the meaning axis (Fig 6 :23), not names of primitives the framework holds.
- **The sought-for shape**, written down before the run: (i) a commitment that can be violated, (ii) an anchor that is constitutively about the meaning question and does not update on the model's output, (iii) contact with a closure that differs on that question, so an atom or a correction can cross. Fig 9 :32: *"you get a kind of thing, never the answer itself"*; Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

An answer would be a verdict per domain on whether each condition is present, with a named instrument for the one that is not. It would not be a list of sensors.

---

## 1. Residual in effect terms

- **Arity.** Three-place at minimum: a frame Γ, a term φ in Γ, and a ground that either settles φ or does not. The question collapses this to a two-place choice (medium, property), which is why the first pass looks like a dichotomy. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- **Symmetry.** "Grounds" is an ordered relation, not a symmetric one. A term being fitted to a corpus and a corpus being corrected by a term are not the same operation. The bond is a sequence or a production, not a conjunction (Fig 12 :46, Operators table). "Grounded" is a threshold standing, not a continuous degree.
- **Scale.** One model loop (a library and a prediction residual), a population of models and users (rooms), and the habitat of contact (corpus, world, other agents, instruments), with a lossy membrane between scales (Fig 4 :20, Fig 10 :68).
- **Indexing.** The residual must stay per term and per contact slot, not be averaged into a model-level score. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A single benchmark number for "grounding" is exactly the aggregation the figures forbid.
- **Scope.** Fig 1 :23: *"The ground enters as the only metric."* Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* Fluency, loss, and agreement among users are produced by the frame whose grounding is at issue, so none of them can be the metric for that question.

---

## 2. Domain census

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not a domain yet for the property at issue; it is a frame or a closure. Dependency order from Fig 3 :20.

| id | actors | currency | anchor | status for *grounded meaning* |
|---|---|---|---|---|
| D1 Form prediction | model, corpus, tokens, weights | next-token prediction residual on held-out text | the held-out corpus, a counter that does not update on the model | admitted, but only for the question "does the model predict form"; a legitimate anchor by Fig 2 :36 |
| X1 Grounding from text | same actors | claimed "meaning", with no reading that can fail on the meaning axis | **none nameable inside a text-only frame** | **not a domain yet.** A closure, not a ground-contact domain |
| D2 Sensorimotor contact | agent, sensors, effectors, world objects and affordances | successful or failed categorisation and action | the world's refusal: a wrong categorisation, a grasp that slips, a measurement | admitted; anchor nameable (Fig 2 :29) |
| D3 Social contact | speaker, listener, community of users, shared history | repair, being understood, two-way correction (Clark and Brennan grounding) | the interlocutor's independent reading and the outcome of coordinated action, provided the closures differ | admitted with a condition; collapses to a convention if the peers share one evidence pool |
| D4 Instrument and verification | experimenter, discriminator, benchmark designed against the ground | readings that separate different sources producing the same output | the ground, which does not decay | admitted; this is where the verdict lives, and where the `gap` is declared |
| X2 "Sensory or social" as a standing list | no actors named by the figure | none | none | refused, Fig 11 :51 *"No standing list of good actors survives a change of residual."* absorbed into D2 and D3 |

**Partition or union.** A union, not a partition. D1, D2 and D3 overlap: a social partner can itself be a sensorimotor presence, and a world measurement can be reported in text. Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* One lever (add images, add conversation) clears the region where only one condition binds and leaves the intersections, so a union needs one loop per condition.

**Dependency order (Fig 3).** Perception of tokens and vocabulary must work before any objective about meaning can be tested (Fig 3 :20); the residual and its sought-for shape must be described before choosing a frame (Fig 9 :27); an anchor must be reachable before capability can be judged (Fig 11 :39); refuse the "declared meaning" route before minting a new one (Formula step 2, Operators :58); an instrument must be found before the reach can be extended (Fig 6 :32).

**Strain test applied at census.** "Text alone cannot add an atom" was the first-pass reading. It strains Fig 8 :32, which governs composition inside a fixed closure, and it contradicts Fig 6 :10, which lists corpus as an external source. A line that needs a strain was aimed at another quantity, so the census was re-run: text imports atoms during training; the question is not about atoms but about anchors. The re-census is recorded as F2 and as retraction R1 in §7.

---

## 3. Figure census

| figure | bearing on this question | verdict after use |
|---|---|---|
| 1 The Agent | frame-internal scores disqualified; ground is the only metric; per-slot residual | governs the metric, not the answer |
| 2 The Ground | anchor definition, non-updating, legitimate only when the question is about it; correlation has two valences | decisive for the distinction between convention and grounding |
| 3 Dependency Chain | ordered by dependency; a link with no instrument is not a link that works | governs the broken objective link |
| 4 The Membrane | methods cross up, head starts down; a recording is not a generator; round-trip gap | governs what a corpus can carry |
| 5 Mint Pipeline | three guards as a product; output never a measure of success; make the shape an ordinary term | governs the zero SUPPORT finding |
| 6 Closure and Reachability | import is the only wall-moving operator; corpus is a listed source; inward and outward are opposed | governs F2 and the import condition |
| 7 Room Chain | agreement is variation, not a verdict; mirrors are one long room | governs multi-agent and multi-model agreement |
| 8 Union Surplus | idempotence; no proof of absence; two frames with differing closures; residual first | governs the union and the honest `gap` |
| 9 Leave, Arrive, Search | describe the effect; union versus partition; shape not answer; filters not witnesses | governs the method and the stop |
| 10 Ground Maintainer | a declared meaning is not grounded; install what can be violated; ground does not decay; verifier non-access | the single most direct figure for this question |
| 11 The Habitat | capability is agent-and-habitat; harness is a substituted habitat; no standing list of good actors | governs the sensory/social option and the scaling rebuttal |
| 12 The Bond | ingredients are not arrangement; vocabulary without bonds cannot name a route; isomer; cycle | governs the isomer reading and the loop closure |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict; cannot name the missing primitive | governs the honest stop |
| Operators table | sequence, production, negation; a vocabulary without negation can only accumulate | governs refusal before mint |
| Symbols table | R is the gap between prediction and observation; the ground is not in the library | governs the definition of the residual and the anchor |

---

## 4. Findings

Each finding carries a mode, a verbatim quote, a refuter, and a triangulation status. Verdicts are kept separate; none is averaged with another.

### F1. "Grounded" is an anchor property, not a property of form or declaration (decisive, `general`)

Fig 10 :18: *"a declared meaning is not a grounded one"*
Fig 10 :19: *"→ install what can be violated"*
Fig 10 :49: *"Declaring a meaning does not ground it."*
Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when"*
Fig 2 :33: *"The anchor must not update."*
Symbols table :103: *"Whatever settles the question and does not change its answer because of what any frame thinks."*

A term produced by a text model is a term in a frame. Its fluency, its agreement with users and its utility are all readings from inside or from frames that share the corpus. None of them is an anchor for the question "is this term grounded," because the question is constitutively about contact with something the frame cannot move (Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."*).

The framework's own remedy is to install something that can be violated: a commitment whose failure the ground can register. A next-token objective can be violated by the next token, but that violation is about form, not about what the token means. This is the first separation the question needs.

- **Mode:** `general` structural claim about what "grounded" names; `specified` when applied to a language model.
- **Triangulation:** triangulated. Fig 10 (declaration versus ground) and Fig 2 (anchor definition) have low overlap: one is the ground-maintainer's office, the other is the alignment geometry. The Symbols table is a notation restatement, not a third independent witness.
- **Refuter:** exhibit a text-only system whose term is settled by an anchor that (a) is constitutively about meaning rather than form, (b) does not change its answer because of what any frame thinks, and (c) can be shown to have refused at least one use of that term. If this is done, F1 is refuted.

### F2. A corpus is an import source, so "text adds no atom" is retracted (`general`, correction)

Fig 6 :9: *"external source"*; Fig 6 :10: *"nature · corpus · peer frame"*; Fig 6 :11: *"IMPORT"*
Fig 6 :14: *"the only operator that moves the wall"*
Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*
Fig 6 :22: *"NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."*
Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*

The obvious move is to quote Fig 8 :32 and conclude that no amount of text can add anything. That move strains the figure. Fig 8 :32 is about *composition inside a closed set*, that is, search after the library is fixed. Training on a corpus is not composition inside the library; Fig 6 :10 explicitly lists corpus as an external source that can be imported, and Fig 6 :14 makes import the only wall-moving operator. Reading Fig 8 :32 as a claim about training would make Fig 6 contradict it, and the canonical rule says a contradiction means the domain was misidentified.

**Re-census:** Fig 8 :32 governs search within a held library. Fig 6 :9-11 governs acquisition of primitives from an external source. A language model's corpus imports atoms from the human frame whose closure differs from the model's initial state. So text alone *can* add atoms. What it cannot do, on the next finding, is supply an anchor.

- **Mode:** `general`, with the correction recorded in §7 as R1.
- **Triangulation:** triangulated across Fig 6 (import) and Fig 8 (idempotent closure) once each is assigned its own object. Low overlap: one is an operator on the wall, the other is a theorem about composition.
- **Refuter:** show that the figure text does not list corpus as an import source, or show that training is composition inside closure(Γ) rather than import. Either would restore the retracted claim.

### F3. An anchor is not an atom, and a corpus anchors form, not meaning (`specified`)

Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."*
Fig 2 :37: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they"*; Fig 2 :38: *"do not measure."*
Fig 10 :24: *"the ground does not decay, the channel does"*

A corpus is a perfectly good anchor for the question "which strings were written and how often." That question is constitutively about the corpus, so Fig 2 :36 licenses it. It is only an instrument for the question "what does this term mean in a new situation," and instruments can be wrong on axes they do not measure (Fig 2 :37-38). The channel from the written record decays and is lossy; the ground of meaning does not decay with it (Fig 10 :24).

This is the exact point where the "text alone" option fails. It is not that text is empty. It is that the thing text can anchor is a different quantity from the thing the question asks about. F1 and F3 together are the core of the answer.

- **Mode:** `specified` (depends on which question is being anchored).
- **Triangulation:** triangulated across Fig 2 (anchor legitimacy and instrument limits) and Fig 10 (channel decay).
- **Refuter:** show a text-immanent reading that is constitutively about meaning rather than form and that does not update on the model's output. A dictionary is not such a reading: it is other text (see the symbol-grounding source in `09`, "learn Chinese from a Chinese/Chinese dictionary alone").

### F4. Conventional meaning and grounded meaning are two quantities, so the either/or is a union (`general` on the split, `specified` on the model)

Fig 2 :39: *"Correlation has valence."*
Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 2 :41: *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"*
Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

Text-trained models do develop shared meanings with users. That is a real achievement and the figures explicitly call agreement about a shared meaning efficient for a convention. It is not a defect to be explained away. But the same agreement is disqualifying as evidence for a verdict about the world when the agreeing frames draw on one corpus. "Correlation has valence" (Fig 2 :39): the same measurement is valuable for one question and worthless for another.

So the question's either/or is a union of two properties with different anchors. A system can be excellent at conventional meaning and have no grounded meaning at all, and a system with strong ground contact can be poor at convention. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* The two verdicts must be kept separate and never averaged into a single "understanding" score.

- **Mode:** `general` for the valence split, `specified` for the language-model application.
- **Triangulation:** triangulated. Fig 2 is one figure, but the two clauses :40 and :41 are opposite valences of the same independence parameter and were derived from different collapse panels (common cause vs convention), so they are not one witness repeated. Fig 9 :55 supplies the union reading independently.
- **Refuter:** show a case where agreement about a shared meaning also settles a world-facing question without any independent anchor, and where the two cannot be separated by instrument.

### F5. Capability is agent-and-habitat; scaling the agent alone does not change contact (`specified`)

Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."*
Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*
Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

The common reply to F1 to F3 is that a sufficiently large model will ground its terms by scale. The figures call this an agent-only improvement. It does not change contact, so it changes nothing about the property at issue. A text-only benchmark is a substituted habitat: it proves wiring and never capability. The isolation law also names the two silent failures that matter here: what you failed to reproduce is invisible until the goal fails, and what you unintentionally introduced is invisible until it acts (Fig 11 :68-69).

Honest limit: Fig 11 :71 says the capability claim *"fit cases already known and have not been tested forward, so they"* can come back wrong. A genuine agent-only improvement that moved a ground reading would refute it. This is named rather than hidden in `09` and `11`.

- **Mode:** `specified`. The structural form is `general`; the application to scaling a language model is a prediction.
- **Triangulation:** triangulated across Fig 11 (capability and harness) and Fig 6 :23 (the bound moves only on contact with a differing closure). Different figures, different mechanisms, low overlap.
- **Refuter:** an agent-only change, with contact held fixed, that changes a ground-verified reading on a grounded-meaning test.

### F6. The chain breaks between vocabulary and objective for grounding (`specified`)

Fig 3 :20: *"The chain is ordered by dependency, not by importance."*
Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
Fig 3 :25: *"Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests. The link between them, having terms for what a"*

A text model has perception of tokens, a rich vocabulary of distributional terms, a next-token objective with an obvious test, and planning behaviour of a kind. What it does not have, in the general case, is an instrument for the objective "this term is grounded." That link is the one Fig 3 :24-27 says breaks most often because it has neither obvious failures nor obvious tests. Effort spent above the break cannot rescue it (Fig 3 :19).

This finding governs the outreach posture: the first useful question to a checker is not "does this model understand" but "what would count as a grounded term for you, and what instrument would read it." If the answer is a benchmark score, the instrument is missing and the link is unassessed.

- **Mode:** `specified`.
- **Triangulation:** single-source on the figure side (Fig 3), with world corroboration from Harnad's symbol grounding paper and the "Hard Problem is About Source" essay, which is a framework essay and therefore high overlap.
- **Refuter:** an operational, published test that fires on a term's grounding and whose result does not reduce to form prediction or user agreement.

### F7. The mint guards: SUPPORT for a *grounded* term is zero in a text-only frame (`specified`)

Fig 5 :41: *"Any one of them at zero stops the mint entirely."*
Fig 5 :48: *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."*
Fig 1 :23: *"The ground enters as the only metric."*
Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

Formula step 3 gates a new term on SUPPORT, REACHABILITY and NOVELTY as a product. A text model does produce residuals, but they are prediction errors over form. Those residuals are frame-internal quantities the model itself produces, so by Fig 1 :27 they cannot score the claim that a term is grounded. On the specific question "is this term grounded," the live mass on the slot is zero from inside the frame. The guards are a product, so a zero stops the mint regardless of how well the other two pass.

The essential caution: this is not a claim that text cannot mint *any* term. It imports atoms and composes terms, as F2 says. It is a claim about minting a term whose standing is settled by a ground the frame does not produce.

- **Mode:** `specified`.
- **Triangulation:** triangulated across Fig 5 (mint guards) and Fig 1 (ground as only metric). Low overlap: one is the licensing procedure, the other is the metric rule.
- **Refuter:** a positive residual on a grounding slot that is generated by the text frame itself and is not a form-prediction error or an agreement score. If shown, the SUPPORT finding fails.

### F8. A vocabulary of forms can name a state; grounding needs a route that can be refused (`general`)

Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*
Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."*
Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
Fig 12 :94: *"The arrangement is the substance."*
Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*

Distributional semantics gives a model relations among terms (Fig 12 :94, the arrangement carries information the ingredient list does not). That is genuine structure. But a grounded term needs the kind of relation that can be refused by something outside the frame: an action, a comparison against an outcome, a negation of a held commitment. Fig 12 :112 separates the sequence, the comparison, the subtraction and the negation; the last is not a bond and is what a vocabulary needs in order to carry a correction rather than only an accumulation.

This also explains why the answer is not "text gives nothing." Text gives states and many bonds. What it does not give, by itself, is the refusal.

- **Mode:** `general` structural, `specified` on the model.
- **Triangulation:** triangulated across Fig 12 (bonds and operators) and Fig 10 :19 (install what can be violated). Different figures, complementary quantities.
- **Refuter:** a text-only term that supports an action whose failure is registered by a non-updating ground without any sensorimotor or social channel.

### F9. Sensorimotor contact supplies a refusing anchor (`specified`)

Fig 11 :36: *"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground."*
Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*
Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when"*

In the sensorimotor domain the world refuses a categorisation. A wrong grasp fails, a prediction about an affordance is corrected by an outcome, and the correction does not consult what the model believes. That is an anchor in Fig 2's sense, and it is the mechanism Harnad names when he says symbolic representations must be grounded bottom-up in nonsymbolic representations (world source, `09`). It is a candidate binding for condition (ii) of the pre-registered shape.

It is not *the* name the framework returns. Fig 9 :32 and Fig 13 :135 forbid that upgrade. What the figures license is the effect description: a channel through which the ground can refuse a term.

- **Mode:** `specified`.
- **Triangulation:** triangulated across Fig 11 (harness versus habitat) and Fig 2 (anchor as measurement), with low-overlap world corroboration from Harnad 1990 and the embodied-cognition literature.
- **Refuter:** a sensorimotor channel that never refuses, that is, one whose readings always confirm the frame's current categories. Such a channel would be a harness, not a habitat.

### F10. Social contact supplies a differing closure, but can collapse into a convention (`specified`)

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
Fig 8 :45: *"Two frames together reach what neither reaches alone."*
Fig 8 :48: *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."*
Fig 8 :49: *"completely are one frame wearing two names."*
Fig 10 :80: *"Frames whose independence is renewed by separate experience can be maintained"*
Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

The strongest version of "social experience is necessary" is not that another speaker agrees with the model. A partner who shares the same corpus is one frame wearing two names (Fig 8 :49), and agreement with them is a convention (Fig 2 :41), not corroboration. Social contact grounds a term only when the other frame's closure differs in a way that can import a correction, and when both frames range separately against something neither can move (Fig 2 :46).

This is the two-way loop the tacit-knowledge essay calls grounding in communication: the listener shows they have understood, a puzzled look is the correction, and the speaker tries again. One-way text can carry context and part of subtext, but almost never the history the listener brings, so the loop cannot close on pretext from text alone.

- **Mode:** `specified`.
- **Triangulation:** triangulated across Fig 6 (differing closure), Fig 8 (independence and surplus) and Fig 10 :80 (renewed independence), plus world corroboration from the Chinese Room and tacit-knowledge sources. The framework essays share the framework author's evidence pool and add no independent weight.
- **Refuter:** two frames with demonstrably identical evidence producing a genuine ground-correction that neither could produce alone, with no third anchor. That would break the independence requirement.

### F11. The discriminator is owed; this is a declared `gap`, not silence (`general` on the limit, `gap` on the name)

Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*
Fig 6 :34: *"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."*
Fig 9 :32: *"you get a kind of thing, never the answer itself"*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
Fig 13 :134: *"Unreachable is a verdict here, not a silence,"*

The source essay *The Hard Problem is About Source* gives the mechanism: an instrument that reads green *"cannot comment on the source."* Several sources can produce the same reading, so a reading is a lossy projection. A fluent answer to a grounding question is such a reading. What is owed is a discriminator, not a further argument. The figure rule is stricter still: an instrument is improved from a worse instrument already returning something, so the search is for a proto-instrument that is already failing to resolve, not for a sensor specified from a description.

No figure line names such a discriminator for a language model, and this simulated run did not build one. So the correct report is `gap`: unreached, and possibly unreachable at this budget, never silence and never an invented instrument.

- **Mode:** `general` on the limit, `gap` on the discriminator.
- **Triangulation:** triangulated across Fig 6 (proto-instrument), Fig 8 (no proof of absence) and Fig 13 (unreachable is a verdict).
- **Refuter:** a published instrument that separates a grounded term from an ungrounded one on the same output, together with a reading where the current instrument fails to resolve.

### F12. "Sensory and social are necessary" is a binding, not a figure-derived name (`general`)

Fig 9 :30: *"your words are borrowed too, so describe the effect"*; Fig 9 :31: *"rather than the cause"*
Fig 9 :27: *"describe it before you go looking, or"*; Fig 9 :28: *"any frame you pick will seem to fit"*
Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*
Fig 11 :51: *"No standing list of good actors survives a change of residual."*

If the effect is named first, many frames will seem to fit. Sensory contact fits. Social contact fits. A well-designed instrument fits. A court, a market or a laboratory measurement fits (Fig 2 :29). Naming *sensory and social* as *the* necessary condition is a binding made from a preferred frame, not a result of the derivation. The framework returns a shape: violable commitment, unmoved anchor, differing closure. Which physical or social arrangement realises that shape is a ground question for a specific model, and it is exactly what F11 says is unmeasured.

- **Mode:** `general`.
- **Triangulation:** triangulated across Fig 9 (describe before looking, shape not answer) and Fig 13 (cannot name the missing primitive).
- **Refuter:** a verbatim figure line that names a sensorium or a social arrangement as required for grounding. No such line was found after a genuine re-census of all 15 figure sources.

### F13. This derivation cannot validate itself (`general`)

Fig 5 :48: *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."*
Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

From *The Recursive Self-Improvement Trap*: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* This audit is generated by a language model using the same figure text a checker would read. It is internally consistent, and that is all it establishes. Its word count, its number of figure citations and the agreement of its simulated second seat are filters for the budget, never witnesses for the verdict.

- **Mode:** `general`.
- **Triangulation:** single-source on the figure side (Fig 5), corroborated by a framework essay with maximal overlap, so effectively one witness.
- **Refuter:** a ground reading that settles the claim. No such reading is claimed here.

---

## 5. Pre-registered refuter

Written before the conclusion, per the standing instruction that a falsifier written before the run is a design instrument. The shape claim (F1, F3, F4, F5, F10, F12) is refuted if any of the following holds:

1. A text-only system's term is shown to be settled by an anchor that is constitutively about meaning, that does not update on the system's output, and that has actually refused at least one use of the term. This breaks F1 and F3.
2. A text-immanent reading is exhibited that is not a form distribution, not user agreement, and not another text source, and that functions as an anchor for meaning. This breaks F3.
3. An agent-only improvement, with contact held fixed, changes a ground-verified reading on a grounding test. This breaks F5 and Fig 11 :40.
4. Conventional agreement is shown to settle a world-facing question without any independent anchor, with the two quantities demonstrably inseparable by instrument. This breaks F4.
5. Two frames with demonstrably identical evidence produce a correction neither could produce alone, with no third anchor. This breaks F10 and Fig 8 :49.
6. A verbatim figure line is found that names a specific sensorium or social arrangement as necessary for grounding. This breaks F12.

An additional instrument condition, not a refuter of the shape but a condition on the stop: if a discriminator is published that separates grounded from ungrounded terms on the same output, the F11 `gap` closes and the verdict moves toward `grounded` for that test. Until one fires, every claim here stays `candidate`.

---

## 6. Recommendation

1. Answer in two parts, never one. Text gives convention (Fig 2 :41) and imports atoms (Fig 6 :10); grounding additionally needs an unmoved anchor on the meaning question (Fig 10 :18, Fig 10 :49). Collapsing the two is the error the question invites.
2. Do not ship "text cannot add an atom." It is retracted as R1. Ship "text imports atoms but does not supply a meaning anchor."
3. Keep the vocabulary "sensory and social" as a candidate binding and report the effect shape instead (Fig 9 :32). Ask a checker what would count as an anchor for their own term.
4. Treat a text-only benchmark as a substituted habitat (Fig 11 :70). It proves wiring, not capability.
5. Declare F11 as a `gap` with a stated proto-instrument search. "Unreachable is a verdict here, not a silence" (Fig 13 :134).
6. Lead outreach with the residual and the refuter, not the framework (Fig 10 :52). Never pool later agreement as corroboration (Fig 2 :40).

---

## 7. Canonical usage check and retraction log

Sources read after the first six sections that govern how the figures may be used: the canonical local figures README (`FRAMEWORK/reference/FIGURES_README_canonical.md`), which says *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary"*, and gives the limit *"what a missing thing would have to look like (a shape, not a name)"* plus *"Indiscernibility is not identity."* Also the formula's Direction and record/reach sections. No source outside this folder's assigned area was modified.

| earlier reading | status after the check |
|---|---|
| **R1. "Text alone adds no atom" (first-pass F2)** | **Retracted.** Fig 6 :10 lists corpus as an external source; Fig 8 :32 governs composition inside a fixed closure, not training. Re-census assigns each figure its own quantity. The weakened, surviving claim is F3: corpus anchors form, not meaning. |
| **R2. "Shape, not a name forbids saying sensory or social"** | **Narrowed, not erased.** The canonical phrase governs a *missing* primitive. Sensory and social capacities are bindings onto effects already in the figure text (contact, differing closure, refusal), so naming them as candidate bindings is allowed. Naming them as figure-derived necessities is still refused (F12). Both forms are recorded. |
| **R3. "Grounded meaning" treated as one property** | **Split.** Fig 2 :39-41 separates convention from verdict. Conventional meaning and grounded meaning are two quantities with different anchors. The either/or of the question is a union (Fig 9 :55). |
| **R4. F6 upgraded to "the broken link"** | **Downgraded to `specified` and single-source on the figure side.** Fig 3 governs the dependency order; whether a given model has an instrument for grounding is a measurement, not a figure reading. The world sources corroborate the mechanism shape only. |
| F1 (declaration is not grounding) | **Canonically confirmed.** Fig 10 :18/:49 are direct text, and the README's shape-not-a-name limit reinforces the refusal to name a substitute. |
| F5 (capability is agent-and-habitat) | **Canonically confirmed with its own caveat.** Fig 11 :71 says the capability claim has not been tested forward; kept visible in F5 and `09`. |
| F11 (`gap` for the discriminator) | **Canonically confirmed.** The README says the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* |
| Apparent Fig 8 versus Fig 6 strain | **Not a contradiction after re-census.** Idempotent closure versus import are different operators, as the README's re-census rule requires. |

---

## 8. Strains and open items

1. **Corpus as source versus corpus as anchor (resolved).** Fig 6 :10 allows corpus as an import source; Fig 2 :36 requires an anchor to be constitutively about the question. Re-census: corpus is a source for atoms and an anchor for form, not an anchor for meaning. No strain remains, but the distinction is the whole answer, so it is recorded here and in `11`.
2. **Social contact as import versus as convention (live, narrowed).** Fig 6 :23 requires a differing closure; Fig 2 :41 says shared-meaning agreement is the product. These are two quantities, not a conflict. The live part is empirical: how much independence a given dialogue actually has. No number is returned.
3. **Fig 11 capability claim not tested forward (live, acknowledged).** An agent-only improvement that moved a ground reading would refute F5. Named in F5, `09` and `11`.
4. **The operand type of a correction (open).** Fig 12 :112 treats negation as a unary operator that is not a bond, and Operators :58 says a vocabulary without it can only accumulate. What a unary operator costs is open in the Operators table. This does not block the shape, but it means the "install what can be violated" condition has a known unpriced operator. Left open rather than priced by invention.
5. **After re-census: one resolved strain, two live acknowledged items, no hidden correction.**

## 9. Closing verdict of the audit

The shape survives; the question's either/or does not. Text is an import channel and a convention generator, not a meaning anchor. Grounding needs a violable commitment, an anchor that is constitutively about meaning and does not update, and a closure that differs on that question. Sensory and social contact are candidate bindings for those effects, not names the figures return. No measurement here settles which binding a given model needs, so the verdict is `specified` and `general`, with a declared `gap` for the discriminator and a pre-registered refuter that would withdraw it.
