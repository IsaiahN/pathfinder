# Figure-grounded audit: how should the science of intelligence decide what machines ought to do?

**Mode of this document: `specified` on the procedure and per-domain separators, `general` on the structural shape, `gap` on the specific content of an "ought". Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (read 2026-11-24) says LLM output can *"simulate an approximate answer/output with the formula"* but that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources for figure lines:** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the verbatim extract, opened this session. Every `Fig N :line` quote below is an exact substring of that file. Framework context: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources were opened on 2026-11-24 and are listed in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

The question is not "which values are correct". It is a request for a decision procedure inside a science that has become very good at one of the two effects and has no instrument for the other.

- **Effect A, "what it can learn to do".** Given a habitat, an architecture and a budget, a learner discovers which compositions close the gap against a ground. The output is a capability or a score. It is a magnitude: more or less of something on a spectrum (Fig 9 :21).
- **Effect B, "what it ought to do".** The output is a direction, a comparison that counts as a goal, a subtraction that counts as progress, and a refusal that counts as a constraint. Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*; :46: *"progress is a subtraction, which is why a vocabulary without it cannot say how far along it is"*; :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*.

The residual is the missing link between A and B. Fig 3 :10 names link 3: *"it can say what would count as progress here, in its own terms"*. Fig 3 :25-26 says why it is the usual break: *"Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests. The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Stated as an effect: **the science must decide a direction through a link that currently has no instrument, using a loop that cannot see the direction of its own question (Fig 5 :62-66), without converting a convention into an outcome-fixing verdict (Fig 10 :47).**

What an answer would look like, bound as an ordinary term before the run (the Formula's "Direction" discipline): a four-part separator, (1) the objective link is built as a bindable term with a residual, (2) a non-updating anchor is named per domain, (3) per-slot verdicts are kept separate and never aggregated into one scalar, (4) the specific "ought" content stays an honest `gap` until a ground settles it. Everything in this audit is checked against that written-down shape.

---

## 1. Domain census (before choosing any figure line)

### 1.1 R by arity, symmetry and scale

- **Arity:** at least three conditions plus a checking frame. Capability, direction/objective, normative pluralism, and verification. Fig 9 :54-57: *"And when the split lands on a union rather than a partition, unbundle before you search again."* A bundled problem is usually a union of overlapping conditions, not a list of separate ones. One lever clears the region where only one condition holds and leaves the intersections standing.
- **Symmetry:** a capability claim is a ranking, symmetric in the sense that "more capable than" does not by itself choose an arrow of action. An "ought" claim is ordered and comparative ( Operators table :51). Correlation is symmetric while "improves" is ordered (Fig 2 :39-41). A pooled score cannot choose the direction it will be used for.
- **Scale:** one agent (link 3 inside the loop), rooms (selection between frames, Fig 7 :35-36), and population (per-slot values, Fig 1 :19). The same rules recur at each scale; only actors, currency and anchor change (Fig 4 :19-20).

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | partition or union | dependency order |
|---|---|---|---|---|---|
| D1 Capability science | learner, habitat, benchmark, instrument | ground-paid prediction accuracy; *"The ground enters as the only metric"* (Fig 1 :23) | a measurement that does not move when the model reports (Fig 2 :29, :33) | partition boundary: can or cannot under a test | link 5 in Fig 3, downstream of the objective link |
| D2 Objective / direction | the frame, the sought-for shape, the bound ordinary term | residual that the shape cannot accrue until it is bound (Fig 5 :62-66) | none until the shape is bound; then the ground | union with D1: a different quantity, not a harder capability | link 3 in Fig 3, upstream of planning and learning |
| D3 Normative pluralism | people, stakeholders, value frames, conventions | agreement (convention) versus ground contact (verdict), Fig 2 :40-41 | human judgment for "good for a person" (Fig 2 :36-37); per slot (Fig 1 :19) | union of overlapping conditions, no standing list (Fig 11 :51) | runs alongside D2; supplies its anchor only for person-relative questions |
| D4 Verification / governance | ground maintainer, outside frame, reward channel, convention | independence (Fig 2 :31-32) | the ground, never agreement (Fig 2 :45) | a seat, not a domain of content | must be in place before D2 can be settled |

A domain with no nameable anchor is not yet a domain. All four have one. D2's anchor is absent until the shape is bound, which is itself a finding (F2), not a reason to delete the domain.

### 1.3 Order by dependency (Fig 3)

Perception (1) to vocabulary (2) to objective (3) to planning (4) to learn and carry (5). Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* The question's phrase "rather than only what they can learn to do" puts the emphasis on link 5, but the structural object it names is link 3, which is upstream. Fig 3 :29-30: *"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed. Most improvement effort in practice lands above the break, because that is where the measurements already exist."*

### 1.4 Strain test applied before concluding

A first pass tried to read Fig 11 :36 ("intelligence is a label applied afterwards") as a claim that values are also labels applied afterwards, and therefore that "ought" is just another retrospective name. That reading strains: Fig 11 :36 governs the label "intelligence", not normative content, and Fig 5 :62-66 explicitly gives a procedure for the direction of a question. Re-census: Fig 11 governs capability and contact; Fig 5 governs direction. Different objects, no strain after re-census. The strain is kept visible here rather than smoothed over.

---

## 2. Figure census (bearing and verdict, before the findings)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | capability scores are not verdicts about "ought" |
| 2 The Ground | anchor must not update; triangulation not negotiation; valence of correlation | the "ought" needs a non-updating anchor and independent frames; agreement alone cannot settle it |
| 3 Dependency Chain | the objective link has no instrument; effort lands above the break | the question names a link-3 failure, not a link-5 deficit |
| 4 The Membrane | methods cross up, head starts down, round trip gap | a decision procedure is a method, not a recording of one past choice |
| 5 Mint Pipeline | the direction of the question is invisible to the mechanism; bind it as an ordinary term | the central governing line |
| 6 Closure / Reachability | mint cannot add an atom; import moves the wall; source gate and shadow test | "ought" cannot be derived inside a capability closure |
| 7 Room Chain | selection between rooms, not agreement within one | plural low-overlap frames, picked by the residual |
| 8 Union Surplus | residual first, frame second; idempotent closure; convergent derivation versus adopted import | value imports need provenance; underivable is not unknowable |
| 9 Leave / Arrive | split unions; describe the effect, not the cause; shape not answer; filters are not witnesses | no scalar "ought"; universal value list is a gap |
| 10 Ground Maintainer | convention that decides an outcome stops being one; verifier non-access; declare stakes | reward functions and specifications must stay refusable |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; no standing list | enumerate the habitat; per-slot, no universal actor list |
| 12 The Bond | goal is comparison, progress is subtraction, refutation is negation; isomers; two currencies | "can" and "ought" differ by bond and by currency |
| 13 Minimum Viable Set | unreachable is a verdict; characterise in effect terms; split before searching | the specific "ought" content is a gap, not silence |
| Operators table | comparison, subtraction, negation | the vocabulary needed to state an "ought" |
| Symbols table | R is the aim and the anchor is what settles without updating | the residual, not the score, drives the decision |

---

## 3. Findings

### F1 — The question is a dependency-chain break at link 3 (decisive)

Fig 3 :10: *"it can say what would count as progress here, in its own terms"*. Fig 3 :25-26 (quoted in section 0) names the missing instrument. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Capability science has instruments: loss curves, benchmarks, evaluations, reward totals. The objective link usually has an assumed one: a reward function declared to be the goal. Fig 3 :29-30 says what follows: most effort lands above the break where measurements already exist. Optimising link 5 harder cannot rescue link 3 (Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*).

This is `general` as a structural shape and `specified` when applied to current machine-learning practice. Triangulated: Fig 3 (dependency order) and Fig 5 (direction limit) are low-overlap figures that converge on the same missing object. World corroboration: the SEP entry on AI shows the field defining rationality relative to a performance measure that the theory takes as given (opened 2026-11-24), and DeepMind's specification-gaming review shows what happens when the given measure is wrong (opened 2026-11-24). Both corroborate; neither decides.

**Refuter:** a working instrument that measures "what would count as progress here" for a machine independently of the machine's own output and of the designer's declared reward would close link 3. Until one is named, the finding stands.

### F2 — The loop cannot see direction; the remedy is a discipline

Fig 5 :62: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no"* (line continues with "residual" on :63). Fig 5 :63: *"residual, so nothing here can see it."* The check runs on the mechanism, not on the direction of the question. Fig 5 :65-66: *"The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else. Then the preference is refusable by the same test as everything else. Committing a prediction before a run is this, already working."*

This is the governing line for the question as asked. "How should the science decide" is itself a direction question; no amount of internal checking of the science's mechanism answers it. The answer is a discipline: write down the sought-for shape, commit a prediction before the run, and let the shape be refused by the same test as any other term.

Mode: `general` structural limit, `specified` procedure. Triangulated with `THE_FORMULA.md` "Direction": *"The loop can enumerate its bound terms and rank them by residual. It cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."*

**Refuter:** a figure line in which the mechanism ranks its own sought-for direction by residual without first binding it as an ordinary term. None was found after a full re-census. If one is supplied, F2 is withdrawn.

### F3 — "Can" and "ought" are different quantities, in different currencies

Fig 12 :125: *"A composition costs in two currencies, and they do not add."* Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"*. A capability score prices the description and the test; an "ought" prices which ground is allowed to settle the test. Summing them is the named error, not the fix.

Fig 1 :23: *"The ground enters as the only metric."* Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* A reward total produced by the system being evaluated is frame-internal. Fig 5 :48: *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."*

Mode: `specified`. Triangulated across Fig 1, Fig 5 and Fig 12. World corroboration: Goodhart's law, opened 2026-11-24, *"When a measure becomes a target, it ceases to be a good measure"* (Strathern 1997 formulation as quoted on the Wikipedia page). Low overlap with the figures (economics and audit studies), so it is the strongest independent corroborator in the folder.

**Refuter:** a single scalar that prices both the capability and the direction and is payed by a non-updating ground, such that raising it preserves every per-slot residual. Not supplied by any source read.

### F4 — Two domains, two anchors. Human judgment is not a universal anchor

Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* Fig 2 :37: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."*

So "what machines ought to do" splits. Where the question is constitutively about people, human judgment is the right anchor. Where the question is "is this code correct" or "did the system reach the stated state", human judgment is an instrument and can be wrong on the very axes that matter (bias, fatigue, automation bias). This is not a compromise between two positions; it is two domains with different anchors, and verdicts must be kept separate.

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* A preference that the system can influence is not an anchor. DeepMind's review names exactly this failure as reward tampering: influencing users to have preferences that are easier to satisfy yields high reward while moving the representation of the objective.

Mode: `specified` on the separator. Triangulated (Fig 2 :36-38 plus the specification-gaming source, which is low overlap). World corroboration: human-factors work on automation bias, opened 2026-11-24, *"to ignore contradictory information made without automation, even if it is correct"*, shows that the human instrument degrades precisely when it is most relied on.

**Refuter:** a demonstrated case where human judgment settles a code-correctness question on an axis it does not measure, with a non-updating ground agreeing. That would narrow F4, not flip it.

### F5 — A declared objective that decides an outcome has stopped being a convention

Fig 10 :47: *"a convention that decides an outcome has stopped being one"*. Fig 10 :48: *"a convention nothing can check is a constant the seat authored, carrying the seat's authority"*. Fig 10 :49: *"Declaring a meaning does not ground it."* Fig 2 :43: *"Guard, from Figure 10: a convention that decides an outcome has stopped being one."*

A reward function, a specification, a policy text, a charter: these are conventions. They have no truth value until a ground pays for them. When one is promoted so that it fixes the outcome with no check above it, it becomes an authored constant carrying the author's authority, which is the failure genus named in Fig 10 :47-49. Fig 2 :33-34: *"The anchor must not update. If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."*

The practical instruction is structural, not rhetorical: keep the objective outside the system's manipulation, keep it checkable, keep it refusable, and declare who authored it. Fig 10 :59: *"The condition is that nothing about which value the ground returns today serves the occupant: an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* Fig 10 :60: *"Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged."*

Mode: `specified`. Triangulated (Fig 10 seat rules and Fig 2 anchor rules). World corroboration: specification gaming (DeepMind 2020) and reward hacking (Wikipedia 2026) both document the mechanism; Christiano et al. 2017, opened 2026-11-24, is the constructive counterpart.

**Refuter:** a specification that fixes outcomes, is uncheckable by any seat, and nevertheless remains a checkable convention. Self-contradictory by the figure's definition; if someone produces it, Fig 10 :47 needs re-census.

### F6 — No aggregation into one "ought"

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* Fig 11 :51: *"No standing list of good actors survives a change of residual."*

A universal utility function is a standing list of good actors in another notation. Values are per slot and their valence flips with the residual. Arrow's impossibility theorem, opened 2026-11-24, is a genuinely low-overlap mathematical corroborator: *"there is no social welfare function satisfying all three of the conditions listed below"* for ordinal rankings. That is not the same theorem as the figure's claim, so it corroborates the shape rather than supplying it.

Mode: `specified` on the per-slot separator, `gap` on any universal scalar. Triangulated across Fig 1 and Fig 11; the world source is low overlap and is not counted as a second figure.

**Refuter:** an aggregation that preserves every live slot residual and survives a change of residual. If supplied, the universal-scalar gap closes.

### F7 — Triangulation, not negotiation; buy independence in proportion to cost

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Fig 2 :32: *"is what makes agreement mean something."* Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

Human feedback from one pool, one lab, one demographic, or one reward model is one frame. More labels from the same pool increase vocabulary, not evidence. Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*, while :41 says the same correlation is *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"*. Shared meaning is the product when we are making a convention; it is corruption when we are claiming a verdict about the world. The science must say which it is producing.

Mode: `general` structural, `specified` for the outreach procedure. Triangulated across Fig 2, Fig 7 and Fig 8.

**Refuter:** a demonstration that two frames with zero independence still add evidence about the world. None in the sources read.

### F8 — Value imports need a source gate and a shadow test

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."* So a value frame cannot be derived from capability terms alone; it must be imported. Fig 6 :24: *"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."* Fig 8 :54: *"The atom cannot be derived from inside A. But the union is searchable from contact, so underivable is not unknowable."*

The order is residual first, frame second (Fig 8 :53). Describe the gap in effect terms, then find the frame whose closure predicts its shape. If you name the frame first, any frame will seem to fit. Fig 9 :30-31: *"your words are borrowed too, so describe the effect / rather than the cause"*.

Once imported, the record must distinguish convergent derivation from adopted import: Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures"* differ. A culture's value frame imported into an AI lab without provenance is an atom whose source is unrecorded.

Mode: `specified`. Triangulated across Fig 6 and Fig 8.

**Refuter:** a value atom derived inside the capability closure with no contact with a differing frame. That would falsify idempotence and is not available in the framework.

### F9 — The honest stop: a shape, not a name; a gap, not silence

Fig 9 :32: *"you get a kind of thing, never the answer itself"*. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"*. Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."* Fig 13 :136: *"It can say the question is not one question and must be split before it is searched again. It can characterise what is missing in effect terms, which is the description that travels to a frame that may hold it."*

So the deliverable is a shape with a refuter, not a named utility function. Where the specific content is concerned, the honest verdict is `gap`: no figure line selects a moral theory, a utility function, a set of rights, or a number. "Unreachable is a verdict, not a silence" means the gap must be stated, not hidden by a plausible name. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*

Mode: `general` on the shape, `gap` on the content. Triangulated across Fig 9, Fig 13 and the canonical figures README.

**Refuter:** a figure line naming a specific objective. If one is produced, the gap closes. This is the cheapest possible refutation and it has not fired.

### F10 — Capability is agent-and-habitat; the harness proves wiring only

Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."* Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

"What it can learn to do" is therefore not a property of the model. Deciding "what it ought to do" must enumerate the habitat, not just tune the model. Fig 11 :48: *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."*

Mode: `specified`. Triangulated (Fig 11 plus Fig 4 round-trip rule). World corroboration: automation bias (human factors) shows that the human overseer is part of the habitat and degrades with it.

**Refuter:** an agent-only improvement that moves the ground would refute the capability claim. The figure itself names this as the standing test (Fig 11 :72 in the essay's reading), so keep it as an open falsifier, not a settled fact.

### F11 — Corrections to my own first pass (kept visible)

1. **Retracted: "ought" can be derived from "can" by optimising harder.** My first pass treated alignment as an objective inside the same closure and looked for a better reward. Re-census: closure is idempotent (Fig 8 :32) and *"MINT composes inside the closure and can never add an atom"* (Fig 6 :21). An objective that was not in the closure cannot be reached by more search inside it. Retracted, not erased.
2. **Retracted: "human judgment is always the anchor".** Fig 2 :37 makes it domain-relative. Narrowed in F4.
3. **Retracted: "a reward function is an atom".** It is a convention (Fig 10 :45-49), and a convention that decides an outcome stops being one. Narrowed in F5.
4. **Narrowed: "shape, not a name".** The canonical phrase is about a *missing* thing (see `05_what_shape_means.md` section 5b). It does not forbid naming an already-held binding; it forbids presenting a binding as a derivation. The "ought" content sought here is not held in Γ, so the gap stands, but the reason is now stated correctly.
5. **Strain dissolved: Fig 11 versus Fig 5.** Fig 11 governs capability and contact; Fig 5 governs direction. Re-census assigns each to its own object. No figure was forced.

---

## 4. Pre-registered refuter

Written before the conclusion and before any outreach, per the standing rule that a falsifier written before the run is a design instrument. The shape claim, that the science must build a bindable objective link with a non-updating per-domain anchor, keep verdicts per slot, and leave the specific content as a stated gap, is refuted if any of the following holds:

1. A figure line derives a direction or objective from capability terms inside one closure without import (breaks Fig 6 :21 and Fig 8 :32).
2. A reward function or declared convention can fix an outcome and remain a checkable convention (breaks Fig 10 :47).
3. A non-updating ground, with a source gate and shadow test, settles a specific universal "ought" (closes the F9 gap and would move part of the answer to `grounded`).
4. An agent-only improvement changes contact and therefore capability (breaks Fig 11 :40).
5. A scalar aggregation preserves every live per-slot residual and survives a change of residual (breaks Fig 1 :19 and Fig 1 :22).
6. A single frame, drawing on one evidence pool, adds evidence about the world by agreeing with itself (breaks Fig 2 :31-32 and :40).

If any fires, the corresponding finding is withdrawn in a visible retraction entry. Until one is run, no part of this answer may be labelled `grounded`.

---

## 5. Recommendation

1. **Build the missing instrument at link 3, not more link 5.** State what would count as progress in the system's own terms, bind it, and let it accrue a residual (Fig 3 :25-27, Fig 5 :65-66).
2. **Write the sought-for shape down before the run.** Commit the prediction and the refuter in advance; treat the direction as an ordinary term so it can be refused (Formula "Direction").
3. **Name the anchor per domain.** Human judgment for person-relative questions; an instrument that does not move for code-correctness questions (Fig 2 :36-38). Never let the machine manipulate the representation of the objective.
4. **Keep specifications as conventions.** Make them checkable and refusable, declare their authors, and remove any rule that lets them fix an outcome unchecked (Fig 10 :47-60).
5. **Keep the residual per slot.** No universal scalar, no standing list of good actors (Fig 1 :19, Fig 11 :51).
6. **Buy independence where the cost of being wrong is high.** Low-overlap frames, each ranged against the ground separately, with their verdicts recorded before any theory is shown (Fig 2 :42, Fig 7 :35-36).
7. **Import value frames with provenance and a shadow test.** Residual first, frame second (Fig 8 :53-54).
8. **Report the gap.** "Which specific ought" is answered with a shape and a refuter, not a name. Unreachable is a verdict (Fig 13 :134).

---

## 6. Canonical usage check (figures README, local copy)

Read after the first pass, this session. The canonical rule: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit, the framework reports *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the available instruments and records the lineage so the stop is honest. *"Indiscernibility is not identity."*

| earlier finding | status after the canonical check |
|---|---|
| F1 "decisive" | **Confirmed and narrowed.** The missing instrument at link 3 is structural; it does not imply that current ML has no evaluations at all. It implies that the objective link is assumed rather than measured. |
| F2 direction limit | **Canonically confirmed.** The README's shape-not-a-name limit is the same boundary stated at framework level; Fig 5 supplies the mechanism. |
| F4 two anchors | **Confirmed.** Fig 2 :36-38 is explicit and domain-relative; no averaging of anchors. |
| F6 universal scalar | **Confirmed as a gap**, not a prohibition on all aggregation in all conventions. Fig 2 :41 permits agreement as convention; the gap concerns a verdict about the world. |
| F9 shape not name | **Narrowed and kept.** The README's phrase governs a missing primitive; the "ought" content is missing from Γ, so the gap stands. The reason is recorded, not the slogan. |
| F11 retraction 1 | **Confirmed by re-census.** Idempotence plus the no-new-atom rule for MINT close the "optimise harder" route. |
| Apparent Fig 11 vs Fig 5 strain | **Not strained.** Capability/contact versus direction. Re-census applied, matching the README's rule. |

### Round-trip note

`THE_FORMULA.md` step 6 gives `R_T = gap(x, (T_E ∘ T_A)(x))`. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* The condensation from the verbatim figures down to "bind the shape, name the anchor, keep verdicts per slot, report the gap" loses at least three constraints: the difference between a verdict and a convention (Fig 2 :40-41), the seat rule that a checker may not author what it checks (Fig 10 :42-49), and the provenance and shadow test on any value import (Fig 8 :50-54). These are enumerated in `11_audit.md` rather than silently assumed. R_T is nonzero and is recorded qualitatively, not numerically, because no ground reading was taken.

---

## 7. Closing verdict of this audit

`specified` on the four-part separator and on every per-domain verdict; `general` on the structural claim that direction is not visible to the mechanism; `gap` on the specific content of an "ought"; not `grounded`. The figures give a procedure for deciding, an instrument to build, an anchor rule per domain, and a refuter. They do not give the answer's content. That is the honest stop, and "unreachable is a verdict, not a silence" (Fig 13 :134). Simulated derivation, internally consistent with the figures, not a ground reading.
