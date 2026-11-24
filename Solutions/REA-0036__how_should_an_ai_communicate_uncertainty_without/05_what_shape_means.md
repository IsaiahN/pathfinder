# What "shape" means - canonical reading from the essays

Sources read 2026-11-23, all by Isaiah N:

1. https://adventuresinml.substack.com/p/how-intelligence-actually-works (also represented by the exemplar's mapping; not re-opened this session, marked accordingly below)
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap (opened 2026-11-23)
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context (opened 2026-11-23)
4. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work (not re-opened this session; mapped by the exemplar)
5. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the (opened 2026-11-23)
6. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should (not re-opened this session; mapped by the exemplar)
7. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source (opened 2026-11-23)
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether (not re-opened this session; mapped by the exemplar)

Also read this session: the canonical figures README and `THE_FORMULA.md` (local framework copies).

## 1. A shape is a constraint, not a filler

The canonical README states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)."* Fig 9 :32: *"you get a kind of thing, never the answer itself"*; Fig 13 :134 *"Unreachable is a verdict here, not a silence,"* and :135 *"It cannot say which primitive is missing, because naming it would mean already holding it."*

From *The Library of Babel* (2026-10-02): *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

So a **shape** is the narrowed form of an answer you can state before you can name it. It constrains; it does not fill. For this question:

- **Shape:** a per-slot, ground-referenced uncertainty statement that reports the measured compression gap, keeps two costs in separate ledgers, carries provenance for imports, and outputs `gap` where nothing closes R.
- **Not a shape:** "say 73 percent confident", "always use the word likely", "add a disclaimer". Those are bindings or UI choices, not constraints derived from the figures.

The shape is answerable from the figures. The binding is not.

## 2. How a shape is obtained

- *Library of Babel*: use the vocabulary you already have that is closest to the thing, look for recurring new terms that overlap or correlate with it, recurse. *"With each new term gained, you are able to narrow the space by definition and deepen your vocabulary."*
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."*
- *Decoding Tacit Knowledge* (2026-11-10): *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* This is the strongest essay-level statement of what an uncertainty message should contain: a checkable expectation, not a self-description.
- *Library of Babel* on stopping: *"You will know that you are done because the finish line will also be the starting place, as there is nowhere else to search and nothing else that can describe the answer better."* The paradox: *"you have already composed the answer through the process of locating it."*

For REA-0036 the bootstrapping vocabulary was: residual per slot, anchor, channel, round-trip gap, two currencies, import, honest stop. Each narrowed the space until the shape above stopped moving.

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: *"SETTLE the ground settles it. Verified only by what pays."* The canonical README: the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* For this question that means a human experiment with a decision-accuracy ground, not an argument.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test. Conformal prediction qualifies; an uncalibrated "likely" does not.

*They're Scanning Books When They Should* (not re-opened this session; recorded via the exemplar's mapping) sharpens this: *"The real import is not a new term in the existing space. It is a new dimension of the space."* And: *"Declaring the primitives does not make them neutral. It makes the choice visible."* So declaring a confidence scale makes the choice visible, not neutral. A vendor that publishes a calibration method has imported a dimension, and the provenance should be recorded.

## 4. Why the model's own reading cannot settle the message

*The Hard Problem is About Source* (2026-08-28) gives the mechanism. Metamerism: an instrument reads green and *"cannot comment on the source"*; one green light, or yellow plus blue, or RGB, or CMYK, or a scheme not yet discovered. *"If several paths create the same behavior, then behavior is a projection with lossy information."* And: *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* It was the **spectrometer**, not an argument, that resolved it.

Applied here: a confidence score is a reading of the model's internal state. Several underlying causes (a calibrated probability, a fluent but uncalibrated prior, a saturating metric, a pooled reading across a shift) can produce the same 0.9. The score cannot comment on the source. What is owed is a source-discriminating instrument (an outcome record, a reader study), not a better-sounding word. This is F1 and F7 at the essay level.

*The Recursive Self-Improvement Trap* (2026-11-19): *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* A model's claim that its own uncertainty is well communicated is exactly the self-validation the essay forbids.

## 5. Q: Does "shape, not a name" forbid naming any confidence format? ANSWERED, with a correction

**Short answer:** no, for the same reason the QMGR-0037 exemplar corrected its own overstatement. The canonical phrase is *"what a **missing** thing would have to look like (a shape, not a name)."* The subject is a primitive not held in Γ, not every choice of how to phrase an answer.

- Percentages, intervals, verbal words and disclaimers are **bindings** from the human-factors frame onto a message slot. They are not new primitives of the framework.
- What the figures forbid is (a) inventing a new primitive to fill a missing slot, (b) treating a binding as a derivation, and (c) claiming the binding moves the wall (Fig 6 : *"IMPORT adds an atom"*). A verbal form adds no atom to the framework; it is a choice in the message.
- What the figures require is that the binding be provenanced and checked against the ground. Steyvers et al. supply a ground check showing one common binding (longer explanations) makes the message worse on the "misleading" axis.

**Correction to my own first reading.** In the first pass of §1 I wrote that the framework returns "a shape, not a UI, so no verbal form can be discussed." That was an overstatement. The README's limit governs missing primitives; it does not forbid discussing message bindings, provided they are recorded as bindings and not smuggled in as figure-derived. The correct form is: the figures give the shape; the field supplies and tests the bindings. Both claims are now recorded so neither is quietly lost.

## 6. Two consequences for outreach

**Prestige is not action.** From *The Recursive Self-Improvement Trap*: *"Prestige must never be allowed to validate an action directly... Someone let prestige stand in for proof... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A list of famous researchers who endorse a wording is the named collapse, not corroboration. The legitimate ask is a budget to try the claim against a ground.

**My own audit is a simulation, not a ground reading.** Same essay: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too"*, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* So `01` is a simulated derivation, checked for internal consistency against the figures. It is **not** a test of the claim and must be labelled as such. It cannot settle anything it reports on.

## 7. Honest stop

The figure-derived shape stops where the human-facing instrument starts. *Decoding Tacit Knowledge* puts the boundary: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* That is what `08_expert_verification_packet.md` sends: a checkable expectation and its refuter, not a finished UI. *"Indiscernibility is not identity."* The record of the route is what keeps the result checkable.
