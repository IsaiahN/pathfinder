# What "shape" means — canonical reading from the essays

Sources read 2026-11-23, all by Isaiah N (the framework's author). These are secondary sources for this question; the figures remain primary.

1. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
4. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
5. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should
6. https://adventuresinml.substack.com/p/how-intelligence-actually-works

The remaining two essays in the canonical set of eight (`How a Society of Agents Would Work`, `Arrival of the Fittest: The Tether`) were not re-opened this session and are not cited here.

## 1. A shape is a constraint, not a filler

The figures README states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)."* Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

From *The Library of Babel*: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* And on the method: *"With each new term gained, you narrow the space and deepen your vocabulary."*

So a **shape** is the narrowed form of an answer you can state before you can name it. It constrains; it does not fill. For this question the shape is the four-part relational condition in `01_figure_grounded_audit.md` section 0: method rather than recording, refusable bound term rather than invisible preference, non-updating ground, per-slot measurement, plus low-overlap checking. A number `w*` would be a name. The shape is what the number would have to satisfy.

## 2. How a shape is obtained

- *Library of Babel*: use the vocabulary you already have that is *closest* to the thing, look for recurring new terms that overlap or correlate with it, recurse. The searcher's ignorance is the obstacle, not the library's size.
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."*
- *Decoding Tacit Knowledge*: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."*
- *Library of Babel* on stopping: the finish line is also the starting place, and the paradox is that by then you have *"composed the answer through the process of locating it."*

For this question the effect description is deliberately behavioural: "a prior improves inference when removing it makes the per-case residual worse against a fixed ground, and locks the learner in when the same prior keeps the residual flat and the learner cannot say what observation would refute it." Anyone can run that check without reading the framework.

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: *"the ground settles it. Verified only by what pays."* The README: the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test.

*They're Scanning Books When They Should Be Studying Nature* sharpens the second item: *"The real import is not a new term in the existing space. It is a new dimension of the space."* And: *"A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six."* Also: *"Declaring the primitives does not make them neutral. It makes the choice visible, which is worth a great deal, because a visible choice can be revised and an emergent one cannot."*

So a prior is a visible choice. The essay's own discipline for carrying priors is the one this folder follows: *"where a task is itself built on human priors, the priors are labeled and their provenance recorded, added because the task required them, marked as what they are, so a later reader can see exactly what was assumed and what was earned."*

## 4. Why "the prior helped" is a reading, not a source

*The Hard Problem is About Source* gives the mechanism for the most common error in this question. Metamerism: an instrument reads green and *"the instrument is speaking only about what it measured, it cannot comment on the source."* The source could be one green light, or yellow plus blue, or RGB, or CMYK, or a scheme not yet discovered. *"If several paths create the same behavior, then behavior is a projection with lossy information."* And: *"It was proven wrong not by argument, but by the arrival of a better instrument."*

Applied here: an improvement in average accuracy cannot tell you *why* the prior helped. A method that crosses as a head start and a recording that happens to match the test set can produce the same accuracy reading. The reading does not determine the source. What is owed is a better instrument, an ablation with a fixed ground and per-slot residuals, not a name attached to the aggregate.

## 5. Prior knowledge is "pretext," and shared pretext is the lock

*Decoding Tacit Knowledge* is the essay that bears most directly on this question. It defines the listener's *"pretext (the history and assumptions the listener had before the words arrived)"* and then states the double edge exactly:

> *"Two people who only check against each other drift, and they drift together, so neither notices."*
> *"High contact builds exactly the shared understanding that makes communication work, but that same factor makes the learner's agreement with the teacher worthless as a check. Two frames that overlap almost completely are 'one frame wearing two names' (Fig 8 :48-49)."*
> *"The reference point both sides check against has to stay put. If it moves, 'everything drifts together, and the drift is coherent, which is why nobody notices' (Fig 2 :33-34)."*

That is the answer to "when does a prior lock a learner in" in the essays' own vocabulary: shared pretext is good for one thing and ruins another. It makes communication work and it destroys the independence needed for a check. The essay also names the invisible-preference failure directly: *"a frame holds its preferred answer 'as a PREFERENCE rather than as a term', so 'nothing here can see it' (Fig 5 :62-63)."*

And it states the remedy as a two-way loop: *"The loop only closes if the learner acts; the highlighted step is where the correction arrives, unstated"* and *"An understanding that's never checked feels exactly as certain as one that has been."*

## 6. Correction to my own §3 and §4 reading of "shape, not a name"

I initially wrote section 3 as if "shape, not a name" forbids saying anything specific about the discriminator. That overstates it, and the correction must be visible.

The README's phrase is *"what a **missing** thing would have to look like (a shape, not a name)."* Its subject is a primitive not held in `Γ`. The four discriminators here (method versus recording, refusability, non-updating ground, per-slot measurement) are not missing primitives. They are relations among things the framework already holds: the membrane (Fig 4), the bound term and the refusal (Fig 5, Operators `¬`), the anchor (Fig 2), and the slot (Fig 1). Naming those relations is not inventing a seventh term. What remains forbidden is naming the numerical `w*` as if the framework returned it; that would be a name where a shape is all that is available (Fig 9 :32).

My §4 metamerism point is **not** retracted. An accuracy reading still cannot discriminate a method from a recording, exactly as a green reading cannot discriminate RGB from CMYK. What is owed is a source-discriminating instrument, not a ban on describing the shape. Both claims are recorded so neither is quietly lost.

This matches the exemplar's own correction pattern in `05_what_shape_means.md` section 5b: "shape, not a name" governs missing primitives, not the selection or description of what is already in the library.

## 7. Prestige is not action, and this derivation is a simulation

From *The Recursive Self-Improvement Trap*:

> *"Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."*

A request sent to famous researchers asking them to endorse the shape is the named collapse. The legitimate ask gives the claim a budget to be tried and lets a ground settle it. The same essay supplies the self-limit:

> *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*
> *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."*
> *"You may all agree and be wrong. You may set your clock to someone else's, who was setting your clock to yours, and be off by many deviations over time. You need ground truth to define where you stand."*

So `01_figure_grounded_audit.md` is a simulated derivation checked for internal consistency against the figures. It is **not** a test of the claim and must be labelled as such. It cannot settle anything it reports on.

One last consequence from *How Intelligence Actually Works*: *"indiscernibility is not identity."* Even a perfect fit between this shape and the four world literatures would not make the shape true. It would only mean no available instrument currently distinguishes them. The lineage is recorded so the stop is honest.
