# What "shape" means for this question

Sources read 2026-11-23, all essays by Isaiah N:

1. `https://adventuresinml.substack.com/p/how-intelligence-actually-works`
2. `https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap`
3. `https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context`
4. `https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work`
5. `https://adventuresinml.substack.com/p/the-library-of-babel-locating-the`
6. `https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should`
7. `https://adventuresinml.substack.com/p/the-hard-problem-is-about-source`
8. `https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether`

Plus the canonical figure README (`FRAMEWORK/reference/FIGURES_README_canonical.md`) and the extracted figure text.

## 1. A shape is a constraint, not a filler

The figures README states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)."* Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :134: *"Unreachable is a verdict here, not a silence."*

From *The Library of Babel*: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* And: *"With each new term gained, you narrow the space and deepen your vocabulary."*

So for this question a **shape** is the form of the mapping from three inputs to a per-slot priority, stated before anyone can name which input dominates in a given system. "Data matters most" is a name and a ranking. "Priority is per slot, data acts through contact, the objective is a comparison, feedback is a decaying channel, and the three are a union compound" is a shape.

## 2. How the shape is obtained

- *Library of Babel*: use the vocabulary closest to the target, then look for new terms that overlap or recur. *"the pattern of the shape of answers from these searches starts to look like the shape of problems you already worked out on a different scale."*
- Fig 9 :30 to :31: *"your words are borrowed too, so describe the effect rather than the cause."*
- *Decoding Tacit Knowledge*: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."*
- *Library of Babel* on stopping: *"the finish line will also be the starting place"*, with the paradox that by then you have *"composed the answer through the process of locating it."*

The shape here was obtained by describing R in effect terms (arity, symmetry, scale) before naming any of the three levers, then reading the figure lines that govern each domain. The order is recorded in `01_figure_grounded_audit.md` sections 1 to 3.

## 3. What licenses a name, and what this question must not name

Only two things license a name: the ground settling a term (Fig 5, step 5; Formula: *"the ground settles it. Verified only by what pays"*), or a provenanced import from a frame whose closure differs (Fig 6 :23, Fig 8 :50 to :52).

The README's phrase governs a **missing** primitive. None of training data, objectives, or feedback channels is a missing primitive; they are all already in the vocabulary of the field. So the "shape, not a name" rule here does not forbid saying the words "data", "objective" or "feedback". It forbids:

1. naming a single dominant lever before a ground reading settles the ranking;
2. naming the content of a slot the system itself has not resolved, that is, saying which specific information a given system will prioritize without a per-slot measurement;
3. naming the source of a reading from the reading alone. *They're Scanning Books* calls this the generator mistake: *"A corpus is the compressed output of human minds; the capacity that produced it is a generator, and outputs do not contain their generator."*

## 4. The shape this question specifically needs

The eight essays bear unusually directly on this question, more so than on the QM/GR exemplar.

### 4.1 Data is outputs, not the generator

*They're Scanning Books*: *"When a model trains on text, it is not learning to think; it is learning the compressed traces of many minds' outputs and reconstructing the distribution that generated them."* And: *"model-generated text is a compression of a model's reconstruction, so training on it is decompressing a decompression, a copy of a copy."*

*How Intelligence Actually Works*: *"It can be inherited or taught, so the recipient need not pay the bill themselves, but something, somewhere, already paid it."*

This is the essay-level version of Fig 11 :70 (*"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*) and of Fig 8 :32 (closure is idempotent). It is why F2 and F9 in `01` are shape claims about contact and closure, not claims about corpus size.

### 4.2 The objective is a comparison that decides what counts as progress

*Arrival of the Fittest: The Tether Architecture*, its demo section: *"Ablation Testing via Date Cutoff or Problem Domain"* proposes modifying *"a transformer model training set to only include data from a certain time period (say the early 1900s) or from a particular field."* That is a published, concrete way to test the data half of this question against a ground, and it is recorded in `07` as what would settle it.

*How a Society of Agents Would Work* describes the weighting: belief is *"formed from its own history and from what it inherited, mixed by 'w'"*, and *"'w' is learnable from the outcomes of past weightings."* Two systems with identical architecture diverge because their histories and their w diverge. That is the Symbols table's `w` applied to the question: the objective and feedback change w, and w changes what gets prioritized.

### 4.3 Feedback is a ground contact, and a reward model is not the ground

*The Recursive Self-Improvement Trap*: *"The Tether ties alignment to the ground. Not to human preferences. Not to a reward model trained on human feedback."* And: *"This is why RLHF was continually needed. LLMs, if running continuously, would degrade into gibberish because there is nothing inherent to align them and a short context span."*

*Arrival of the Fittest*, demo section: *"RLHF (Reinforcement Learning from Human Feedback) has been required up until now, to train models, because we did not have a way to ascertain proof of provenance, or proof of decidability for the algorithms and architecture to prove their work and worth against RLVR (Reinforcement Learning with Verified Rewards)."*

*How a Society of Agents*: *"Use the success rate per try, not the total. Whatever gets tried most piles up votes."* This is the practical form of Fig 1 :22 (*"Aggregating across slots is how a live signal disappears into an average"*) and Fig 10 :25's *"pooled readings."*

All three are framework-author sources and carry high overlap with the figures. They corroborate F4, F5 and F7; they do not independently decide them.

### 4.4 The stop is at the union horizon, not at an answer

*How Intelligence Actually Works*: *"There exists a 'distinction horizon' for every individual observer, the point at which the observer cannot discern any difference between one generation method and another."* and *"The projection that no instrument distinguishes from the thing is still a projection, which is why the lineage has to be kept even when the copy is perfect."*

*They're Scanning Books*: *"A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six."* And: *"Declaring the primitives does not make them neutral. It makes the choice visible."*

So the honest stop for this question is: the shape is checkable, the ranking is not, and the recorded lineage is what makes the difference between a refusable derivation and a fluent guess.

## 5. Correction to my own §4.2

I first read `w` as the objective itself. That overstates it. The Symbols table defines `w` as *"How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings."* It is the **leaning**, not the objective or the feedback signal. Data, objectives and feedback channels shape priority partly by shaping `w`, but `w` is one symbol over a composition, and *How a Society of Agents* says it is *"a crude representation"* of something richer. I keep both the narrow figure definition and the author's expansion, and mark the latter as high-overlap. Nothing in the verdict depends on treating `w` as a third lever; the three domains in `01` stand on their own anchors.

## 6. Prestige is not action, and this audit is a simulation

*The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A campaign that gathers famous names to agree with the shape claim is the named collapse, not corroboration.

Same essay on simulation: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* *Arrival of the Fittest* is blunter: because *"the library is unknown to us (black-box training data) which is not Framework Compliant, therefore the outputs generated must be seen as simulacra."*

Therefore `01` and this file are simulated derivations checked for internal consistency against the figures. They are not tests of the question. They cannot settle anything they report on.
