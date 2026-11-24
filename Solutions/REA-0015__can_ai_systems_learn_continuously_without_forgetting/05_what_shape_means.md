# What "shape" means - canonical reading from the essays

Sources. Eight essays by Isaiah N are the canonical grounding for the word "shape". Two were opened directly this session and are marked READ; six are carried from the completed exemplar's canonical mapping (`QMGR-0037/05_what_shape_means.md`) and are marked CARRIED, not re-opened at source this session. This distinction is recorded so a reader knows which quotes were verified in this run.

1. https://adventuresinml.substack.com/p/how-intelligence-actually-works (CARRIED)
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap (READ 2026-11-23)
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context (CARRIED)
4. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work (CARRIED)
5. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the (CARRIED)
6. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should (CARRIED)
7. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source (READ 2026-11-23)
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether (CARRIED)

Canonical figure rule, from `FRAMEWORK/reference/FIGURES_README_canonical.md`: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*. Fig 9 :32: *"you get a kind of thing, never the answer itself"*. Fig 13 :134-135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

---

## 1. A shape is a constraint, not a filler

*The Library of Babel* (CARRIED): *"You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

A **shape** is the narrowed form of an answer you can state before you can name it. It constrains; it does not fill. For this question the shape is the four-part separator in `01_figure_grounded_audit.md` §5: per-slot residual, methods not recordings, a non-updating anchor with a reachable channel, and reproduced contact after a habitat switch. Naming "replay", "EWC", "parameter isolation" or "progressive networks" would fill the slot, which is a different move.

The question's own words "forgetting" and "instability" are ordinary terms, not figure terms. Under the Formula's "Direction" rule, the sought-for shape must be written down and bound as an ordinary term, otherwise it predicts nothing and no check can see it. Section 0 of `01` does that binding.

## 2. How a shape is obtained

- *Library of Babel* (CARRIED): use the vocabulary you already have that is closest to the thing, look for recurring new terms that overlap or correlate with it, recurse. *"With each new term gained, you narrow the space and deepen your vocabulary."*
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31 (carried in `01` context): *"your words are borrowed too, so describe the effect rather than the cause"*.
- *Decoding Tacit Knowledge* (CARRIED): *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."*
- The residual was described in effect terms first in `01` §0: a per-slot R that rises on old tasks while the record grows, plus a reference that moves with the learner. Only after that were frames (reach/channel/habitat) chosen.

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* For continual learning the ground is an independent measurement of old-task reach, not a benchmark average and not the system's own confidence.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test. Saying "the complementary learning systems literature supplies the replay mechanism" is an import from cognitive science. It needs a provenance record and a statement of which gap it explains. The record is in `10_source_ledger.csv`.

*They're Scanning Books* (CARRIED): *"The real import is not a new term in the existing space. It is a new dimension of the space."* And: *"Declaring the primitives does not make them neutral. It makes the choice visible."*

## 4. Why "stability" and "plasticity" cannot be read off the figure set directly (metamerism)

*The Hard Problem is About Source* (READ 2026-11-23) gives the mechanism. An instrument that detects green *"cannot comment on the source"*: the source might be one green light, or yellow plus blue, or RGB, or CMYK, or a scheme not yet discovered. *"If several paths create the same behavior, then behavior is a projection with lossy information."* And: *"An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it."* The resolution in that essay is instrumental: *"The answer is unreached until a better instrument exists."* It was the spectrometer, not an argument, that settled the color case.

Applied here: a held-out accuracy curve is a projection. It cannot tell you whether a fall in score came from reach decay (record grows, reach falls, Fig 6 :42), from channel decay (saturated metrics, pooled readings, Fig 10 :25-26), or from a substituted habitat that failed to reproduce the old goal's contact (Fig 11 :66-68). Three sources, one reading. Naming one from the reading alone is the metamerism error. What is owed is a discriminating instrument: per-slot residuals against frozen grounds, an independent frame that does not share the training data, and a check on whether the reference updates.

*The Recursive Self-Improvement Trap* (READ 2026-11-23) states the general version: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed to tether the veracity of the output to reality. Anything else is drift."* And: *"You may all agree and be wrong. You may set your clock to someone else's, who was setting your clock to yours, and be off by many deviations over time."*

## 5. Does the framework licence naming replay or EWC as *the* answer?

No, for the reason in §3 and §4. The figures return a shape: retention must carry methods/head starts (Fig 4 :22-25), old terms must be settled before composition (Fig 5 :69-70), and the reference must not update (Fig 2 :33-34). They do not select among algorithms. A claim that "replay is the figure's answer" is a binding from the machine-learning frame onto a held shape. It can be licensed by a provenanced import with a shadow test, but it is not a derivation.

The honest form is the one in `07_the_tether_answer.md`: replay, regularization and isolation are candidate bindings; each must be checked against the shape and against a ground that does not move. World corroboration for the mechanism shape comes from Squire et al. and Fiebig and Lansner (opened this session), which are outside the framework author's evidence pool, so they are genuine low-overlap witnesses for the *shape*, not for the figure text.

## 6. Correction to my own §3 and §4 (kept visible)

I first wrote the "shape, not a name" rule as a blanket ban on naming any mechanism. That overstates it. The canonical phrase is *"what a **missing** thing would have to look like (a shape, not a name)"*; its subject is a primitive not held in Γ. Replay, consolidation, a frozen test set and a non-updating reference are not missing primitives of the six-term set. They are bindings onto held terms (record, reach, channel, anchor, habitat), or instruments imported from another frame. Naming them is provenance, not an invented seventh primitive.

What remains wrong in any account that names one as *the* answer is the metamerism point of §4: a single reading (a benchmark curve) does not discriminate among the candidate sources, so the name is chosen by preference rather than by an instrument. The reason is the missing discriminator, not a ban on naming held atoms. Both claims are recorded so neither is quietly lost.

## 7. Two consequences for this solution

**Prestige is not action.** *The Recursive Self-Improvement Trap* (READ 2026-11-23): *"Prestige must never be allowed to validate an action directly... Someone let prestige stand in for proof. Someone let reputation substitute for result. Someone let the trusted name validate the untested claim... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A list of famous continual-learning researchers asked to endorse the shape is the named collapse. The legitimate ask is a budget to try the refuter against an independent ground.

**My own audit is a simulation, not a ground reading.** Same essay (READ 2026-11-23): *"LLMs can quickly simulate an approximate answer/output... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* Therefore `01`, `06`, `07`, `09` and `11` are simulated derivations checked for internal consistency against the figures. They are **not** tests of the continual-learning claim and must be labelled as such. They cannot settle anything they report on.
