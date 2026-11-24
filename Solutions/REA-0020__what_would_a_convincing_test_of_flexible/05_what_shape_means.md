# What "shape" means for this question - canonical reading from the essays

**Sources opened 2026-11-23.** The eight essays are listed below. Three were opened this session and are the only essays quoted in this file. The others are named from the existing solution exemplar and were **not** opened in this session, so no quote is attributed to them.

1. https://adventuresinml.substack.com/p/how-intelligence-actually-works (listed, not opened this session)
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap (**opened**)
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context (listed, not opened this session)
4. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work (listed, not opened this session)
5. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the (**opened**)
6. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should (listed, not opened this session)
7. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source (**opened**)
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether (listed, not opened this session)

The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`, opened this session.

---

## 1. A shape is a constraint, not a filler

The figures README states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*. Fig 9 :32: "you get a kind of thing, never the answer itself". Fig 13 :134 says a system with a closure can report that it lacks something rather than producing an answer anyway, and *"It cannot say which primitive is missing, because naming it would mean already holding it."*

From *The Library of Babel*, opened this session: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

So a **shape** is the narrowed form of an answer you can state before you can name it. It constrains; it does not fill. For REA-0020 the shape is: *a test whose conditions are enumerated from the deployment habitat, whose anchor does not move, which requires contact with a differing closure, which is indexed per environment, and whose verdict separates depth from absence*. Naming one particular benchmark, metric or shift would be a name, not a shape.

## 2. How a shape is obtained

- *Library of Babel*: use the vocabulary you already have that is closest to the thing, look for recurring new terms that overlap or correlate with it, recurse. *"With each new term gained, you narrow the space and deepen your vocabulary."*
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."*
- Fig 11 :43: "The habitat is enumerated, never composed." Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."
- *Library of Babel* on stopping: the answer is reached when *"the finish line will also be the starting place"*, and the paradox is that by then you have *"composed the answer through the process of locating it."*

For this question, the effect description comes first: what actually fails when a learner is moved from one environment to another. Only then is a test frame chosen. Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit".

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* The README: the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* In OOD testing, a name is licensed by a deployment outcome, not by a leaderboard Place.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test.

*The Hard Problem is About Source*, opened this session, sharpens this. Metamerism: an instrument reads green and *"cannot comment on the source"*; one green light, or yellow plus blue, or RGB, or CMYK, or a scheme not yet discovered can all produce it. *"If several paths create the same behavior, then behavior is a projection with lossy information."* An instrument that cannot discriminate sources demonstrates its own inadequacy. It was the spectrometer, not an argument, that resolved it.

Applied here: an accuracy number read off a shifted test set does not determine the source of the failure. Several mechanisms (missing primitive, channel decay, shortcut, budget limit) can produce the same low score. What is owed is a discriminator, not a name. Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*

## 4. Two consequences for test design

**The score is not the ground.** Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." A benchmark score is produced by the same evaluation machinery used to select the model that scores well on it. Fig 2 :37-38 warns that an instrument *"can be wrong on axes they do not measure."* The deployment outcome is the anchor; the score is an instrument that must range against it separately (Fig 2 :45, *"Frames range against the ground. They do not negotiate with it."*).

**Prestige is not action.** From *The Recursive Self-Improvement Trap*, opened this session: *"Prestige must never be allowed to validate an action directly"* and *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A list of famous benchmarks or famous labs does not settle a test-design claim. The legitimate ask is to give the criterion a budget to be tried and let the ground decide.

## 5. Q answered: what licenses a particular OOD test?

**Nothing in the framework.** The framework returns a shape. A particular test is licensed only by a deployment ground settling a minted term, or by a provenanced import with a shadow test. Until one of those, the chosen benchmark is the searcher's own contribution and must be recorded as such. The correct form is a described condition set, not a named leaderboard.

## 5b. Correction to my own section 3

I initially read the "shape, not a name" rule as forbidding the naming of *any* metric. The README's phrase is *"what a **missing** thing would have to look like (a shape, not a name)."* The subject is a primitive not held in Γ. A metric such as accuracy under shift is already an instrument the field holds; naming one is a binding from the evaluation frame, not the invention of a new primitive. What remains wrong is claiming the framework *derives* that metric, or importing it as an atom that moves the wall when it adds none (Fig 6 :22, *"IMPORT adds an atom, and the added atom is what expands the closure"*). Both readings are recorded so neither is quietly lost.

## 6. My own audit is a simulation, not a ground reading

From *The Recursive Self-Improvement Trap*: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* And: *"LLMs can quickly simulate an approximate answer/output with the formula... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."*

So `01_figure_grounded_audit.md` and this file are simulated derivations, checked for internal consistency against the figures. They are **not** a test of the claim and must be labelled as such. They cannot settle anything they report on. The same essay frames this positively for the question at hand: *"And then I learned about a test that could actually prove whether a system was learning or just memorizing: the ARC Prize challenge"* and *"The ARC games have a score. You either solve the level or you don't. That is the ground."* A convincing test needs a ground that pays, and that is exactly what this shape demands.
