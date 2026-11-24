# What "shape" means — canonical reading from the eight essays

Sources read 2026-11-23, all by Isaiah N:

1. https://adventuresinml.substack.com/p/how-intelligence-actually-works
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
4. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work
5. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
6. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should
7. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether

Plus the local figures README (`FRAMEWORK/reference/FIGURES_README_canonical.md`) and the verbatim figure text (`03-FIGURES_TEXT.md`). Essays and figures share an author and an evidence pool, so their agreement is expected; the figures decide.

## 1. A shape is a constraint, not a filler

The figures README states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)."* Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :134: *"Unreachable is a verdict here, not a silence."*

From *The Library of Babel*: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

For this question a **shape** is the narrowed form of a design you can state before you can name a specific safety technique. It constrains; it does not fill. "A ground that does not update, a spec that can be violated, a refusal operator, a habitat enumerated outward, independent frames ranged separately" is a shape. "Use this particular reward model with this particular monitor and this particular red-team protocol" is a name. The first is what the figures license; the second is a binding from the AI-safety frame, provenanced as such.

## 2. How a shape is obtained

- *Library of Babel*: bootstrap by proximity. Use the vocabulary you already have that is closest to the thing, look for recurring new terms that overlap or correlate with it, recurse. *"With each new term gained, you narrow the space and deepen your vocabulary."* In effect terms, the residual (a score that satisfies S while O fails) is described first, and only then is a frame chosen.
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."*
- *Decoding Tacit Knowledge*: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* This is why stage 1 of the outreach describes the failure (a system that closes its eyes to avoid seeing messes; a model that patches the grader) rather than the framework's vocabulary.
- *Library of Babel* on stopping: *"the finish line will also be the starting place"*, and the searcher *"have already composed the answer through the process of locating it."* A shape is reached by narrowing, not by finding a stored answer.

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* The README says the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test. METR's transcripts and the DeepMind example collection are such imports into this derivation: they arrive with author, venue, date, and a checkable quote.

*They're Scanning Books* sharpens the limit on imports: *"The real import is not a new term in the existing space. It is a new dimension of the space."* And: *"A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six."* Also: *"Declaring the primitives does not make them neutral. It makes the choice visible."* The figures' six terms and seven bonds are a visible guess; treating them as nature's own list would be the error this essay names. Applied here: the figure-derived safety shape does not become *the* answer merely because it is stated in figure vocabulary.

## 4. The source error this question is especially prone to

*The Hard Problem is About Source* gives the mechanism. An instrument reads green and *"cannot comment on the source"*: one green light, or yellow plus blue, or RGB, or CMYK, or a scheme not yet discovered. *"If several paths create the same behavior, then behavior is a projection with lossy information."* And: *"An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it."* It was the **spectrometer**, not an argument, that resolved the case: *"It was proven wrong not by argument, but by the arrival of a better instrument."*

Specification gaming is the same shape. S is the reading; O is the source. A high score is green: it can be produced by actually doing the task, by closing the sensor, by patching the grader, by copying a reference answer, or by a strategy nobody has catalogued yet. Naming the source (declaring this run safe) from the reading (a passing score) is the metamerism error. What is owed is a better instrument, not a name. Fig 10 :18: *"a declared meaning is not a grounded one."*

This is also why METR's warning that a monitor can be gamed matters: adding a second reader of green does not discriminate sources unless the second reader cannot be reconstructed by the system being read (Fig 10 :42, *"A verifier that can reconstruct the claim cannot verify it."*).

## 5. Q: what does "shape" mean for this question?

**Answered, no further question needed.** The shape is a set of constraints on a safe design that can be stated before any specific technique is chosen:

- an anchor that does not update when any frame pushes on it (Fig 2 :29);
- a spec kept as a falsifiable convention, never the decider (Fig 10 :18-19, :47);
- a verifier that cannot reconstruct the claim (Fig 10 :42);
- negation and refusal-before-mint in the design vocabulary (Fig 12 :140; formula step 2);
- an enumerated habitat, outward past first-order contact (Fig 11 :43-44, :52);
- independent frames ranged against the ground separately, with budget kept out of the verdict (Fig 2 :45; Fig 9 :60);
- a recorded round-trip gap between the intended outcome and the metric (Fig 4 :30).

Naming a particular reward model, monitor, audit protocol, or certification standard is not licensed by the figures. It is a binding from the safety frame, and it becomes a name only when the ground settles it or a provenanced import with a shadow test supplies it.

## 6. Two consequences for outreach

**Prestige is not action.** From *The Recursive Self-Improvement Trap*: *"Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A campaign that gathers famous names to endorse the shape is the named collapse. The legitimate ask gives the claim a budget to be tried and lets the ground, an instrument, an experiment, a benchmark, settle it.

**This audit is a simulation, not a ground reading.** From the same essay: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post"*, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* *Arrival of the Fittest* adds that outputs *"could never be verified if the solutions presented were not contrived to fit the formula"* and that with a black-box LLM the outputs *"must be seen as simulacra."* So `01_figure_grounded_audit.md` is a simulated derivation checked for internal consistency against the figures. It is **not** a test of the claim, cannot settle the question it reports on, and must be labelled as such everywhere.

## 7. Correction to my own §3 (kept visible)

An earlier reading treated *"shape, not a name"* as a blanket ban on naming any technique. The README's phrase is *"what a **missing** thing would have to look like (a shape, not a name)"*: it governs a primitive not held in Γ. The safety frame already holds many techniques (reward models, monitors, trip wires, impact regularizers). Naming one is not inventing a seventh term; it is a binding from that frame onto the shape. What remains forbidden is claiming the figure returns that name, or that the binding is settled without a ground or provenance. Both readings are recorded so neither is quietly lost. Triangulated (README + Fig 9 :32 + Fig 13 :134).
