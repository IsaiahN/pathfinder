# What "shape" means for this question: canonical reading from the essays

Sources read 2026-11-23 (the three that bear most directly on shape, source and contact; the other five in the eight-essay set are mapped in the exemplar `Solutions/QMGR-0037__.../05_what_shape_means.md` and were not re-opened for this question, which is stated here rather than hidden):

1. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the (Isaiah N, Oct 2 2026)
2. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source (Isaiah N, Aug 28 2026)
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context (Isaiah N, Nov 10 2026)
4. Canonical local: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/03-FIGURES_TEXT.md`

---

## 1. A shape is a constraint, not a filler

The figures README states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)."* Fig 9 :32 *"you get a kind of thing, never the answer itself."* Fig 13 :134 *"Unreachable is a verdict here, not a silence."*

From *The Library of Babel*: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

So a **shape** is the narrowed form of an answer you can state before you can name it. It constrains; it does not fill. For this question, the shape is: a discriminating observation with five properties (round trip gap, per-context residual, same-atoms-different-bond transfer, low-overlap triangulation, description-length bargain). A named benchmark, a named dataset, a numeric threshold is a name. The shape does not select among them.

## 2. How a shape is obtained

- *Library of Babel*: use the vocabulary you already have that is closest to the thing, look for recurring new terms that overlap or correlate with it, recurse. *"With each new term gained, you are able to narrow the space by definition and deepen your vocabulary."*
- Fig 6 :30 *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31 *"your words are borrowed too, so describe the effect rather than the cause."*
- *Decoding Tacit Knowledge*: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."*
- *Library of Babel* on stopping: *"You will know that you are done because the finish line will also be the starting place, as there is nowhere else to search and nothing else that can describe the answer better."*

Applied here, the vocabulary borrowed from the question ("flexible", "familiar associations") is sharpened into figure terms: method versus recording (Fig 4), residual per slot (Fig 1), isomer (Fig 12), independent frames (Fig 2). That is how the shape in section 1 was reached. It is not a summary of a paper.

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* The README: the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50), with a source gate and a shadow test.

*They're Scanning Books* sharpens this elsewhere: *"The real import is not a new term in the existing space. It is a new dimension of the space"* and *"Declaring the primitives does not make them neutral. It makes the choice visible."* I did not re-open that essay for this question, so those two quotations are carried from the exemplar's read, not from a fresh fetch; they are marked as such rather than presented as newly verified.

**For this question:** no world source names a test that the figures would have to endorse. Geirhos et al. 2020 recommend robustness benchmarking; Chollet 2019 proposes ARC; Lake & Baroni 2018 provide SCAN; Lake & Baroni 2023 provide MLC. Each is a binding from a particular frame onto the shape. None is licensed by the figures as *the* answer, and the 2026 TACL rebuttal shows why a binding should not be promoted to a verdict. The slot stays open, like `SPACE(???)TIME` in the exemplar.

## 4. The decisive reading: a reading does not determine its source

*The Hard Problem is About Source* gives the mechanism that most directly governs this question. Metamerism: an instrument reads green and *"the instrument is speaking only about what it measured, it cannot comment on the source"*; the source might be one green light, or yellow plus blue, or RGB, or CMYK, or *"a completely novel color scheme that humans have not yet discovered."*

> *"If several paths create the same behavior, then behavior is a projection with lossy information."*
> *"An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it."*
> *"It was proven wrong not by argument, but by the arrival of a better instrument."*

This is the residual exactly. A benchmark reads "correct." The reading cannot say whether the source was a reapplied method (H1) or familiar associations (H2). Several paths create the same behaviour. The right response is a **better instrument that discriminates sources**, not an argument about which source is present. That is why F1 through F7 in `01` are instrument specifications rather than a verdict about any particular model. Fig 5 :48: *"Its own output is never a measure of success."*

## 5. Why fluency is not flexibility

*Decoding Tacit Knowledge* gives the sharpest world-facing statement of H2:

> *"Sounding right isn't the same as being checked against the world, which is why I call the Turing test a test of fluency, not of accuracy."*
> *"Training on it reproduces 'the traces the thought left, not the thought', with enough structure to rebuild the appearance of reasoning."*

The written record is *"a lossy encoding of human thought."* A system trained on it can reproduce the traces, which are the familiar associations, without the contact that built the thought. The essay's three-part diagnosis (context travels, subtext partly, pretext almost never) explains why this is structural rather than incidental: the history that would discriminate a method from a replay is exactly the part that does not travel in text. Fig 4 :25 *"A recording carried upward looks like knowledge and is a description of one occasion."*

The same essay supplies the drift warning that governs verification: two frames that check only against each other *"drift together, and they drift together, so neither notices"*; the reference point must stay put (Fig 2 :33-34). Hence F5's demand for an anchor that does not update and for separate experience between frames (Fig 10 :80 *"Frames whose independence is renewed by separate experience can be maintained"*).

## 6. Correction to my own §3 (see `06_isomers_and_order.md` Q1)

I initially wrote the shape rule as a blanket ban on naming a candidate test. That overstates it. The README's phrase is *"what a **missing** thing would have to look like (a shape, not a name)."* The subject is a primitive not held in Γ. A benchmark such as ARC or SCAN is not a missing primitive; it is a binding from the evaluation frame onto terms already held (context, transfer, residual). So naming one is **not forbidden**. What is forbidden is presenting the binding as a derivation, or claiming it moves the wall (Fig 6 :22 *"IMPORT adds an atom"*; a benchmark adds none).

My §4 metamerism point is **not** retracted: a reading of "correct" still does not determine which source produced it, and no benchmark currently discriminates H1 from H2 on its own. But the reason is the missing discriminator, not a ban on naming tests. Both readings are recorded so neither is quietly lost.

## 7. Two consequences for this question

**Prestige is not action.** From *The Recursive Self-Improvement Trap* (carried from the exemplar's read, not re-fetched this session): *"Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A paper with famous authors is a budget to be tried, not a verdict. The 2023 Nature result and the 2026 TACL rebuttal are both given a budget to be tried; neither is promoted by affiliation.

**This audit is a simulation, not a ground reading.** Same essay: *"LLMs can quickly simulate an approximate answer/output... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* LLM output is *"simulacra."* So `01` is a simulated derivation, checked for internal consistency against the figures. It is **not** a test of any AI system and must be labelled as such. It cannot settle the question it reports on.
