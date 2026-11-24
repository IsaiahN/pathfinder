# What "shape" means for this question

Sources read on 2026-11-23. All eight essays are by Isaiah N and were opened this session where quoted:

1. https://adventuresinml.substack.com/p/how-intelligence-actually-works
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
3. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
4. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
5. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context (listed from the canonical mapping; not quoted in this file)
6. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work (listed from the canonical mapping; not quoted in this file)
7. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should (listed from the canonical mapping; not quoted in this file)
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether (listed from the canonical mapping; not quoted in this file)

Items 5 to 8 are listed for completeness of the canonical set, but no claim in this solution rests on them, so none is quoted. Opened sources are recorded in `10_source_ledger.csv`.

## 1. A shape is a constraint, not a filler

The canonical figures README states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)."* Fig 9 :32: *"you get a kind of thing, never the answer itself"*

From *The Library of Babel*: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

For this question a **shape** is the form an answer must have before the empirical result is known: a distribution over firm, worker and task slots, with a breadth threshold written down in advance, with capability and diffusion kept apart. The shape constrains; it does not fill. "AI will raise productivity broadly" is a name for an outcome. "The answer is a per-slot distribution with a pre-registered breadth cut" is a shape.

## 2. How the shape is obtained

- *Library of Babel*: start with the vocabulary closest to the thing, look for recurring new terms that overlap with it, and recurse. *"With each new term gained, you narrow the space and deepen your vocabulary."*
- Fig 6 :30: *"outward: does another frame already hold it?"* and *"Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."*
- The residual selects the frame, not the reverse. Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit."* This is why the outreach email asks for the expert's threshold before showing ours.
- *Library of Babel* on stopping: *"the finish line will also be the starting place"*, and the paradox that by then you have *"composed the answer through the process of locating it."*

## 3. What licenses an answer here

Only two things, both outside the shape itself.

1. **The ground settles it.** `THE_FORMULA.md` step 5: *"the ground settles it. Verified only by what pays."* For this question that means measured output per hour across named slots, plus randomized rollout designs. A frame's own benchmark score does not qualify (Fig 1 :27).
2. **A provenanced import from a frame whose closure differs**, with a source gate and a shadow test (Fig 6 :23, Fig 8 :50-52). A firm-level panel is an import from the measurement frame into the capability frame, and it must carry its provenance.

*The Hard Problem is About Source* gives the failure mode: an instrument reads green and *"cannot comment on the source."* Several sources can produce one reading, so *"If several paths create the same behavior, then behavior is a projection with lossy information."* And: *"The answer is unreached until a better instrument exists."* The aggregate productivity number is exactly such a projection: one green reading with several possible distributions behind it. Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

## 4. Why the two-option wording is the wrong frame

*The Library of Babel* names the possibility directly: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* This is Fig 9 :54 in the essays' vocabulary. "Broadly or narrowly" bundles capability breadth with diffusion breadth. The shape unbundles them before any measurement.

*How Intelligence Actually Works* adds the caution that even a perfect reconstruction is still a reconstruction: *"indiscernibility is not identity"* and *"The projection that no instrument distinguishes from the thing is still a projection, which is why the lineage has to be kept even when the copy is perfect."* So a model that reproduces the direction of a productivity effect is not thereby a measurement of its distribution.

## 5. Q: does the framework name an outcome for this question?

**No.** The framework returns a shape. A particular outcome (broad, narrow, or a magnitude) is licensed only by the ground settling a term, or by a provenanced import with a shadow test. Until one of those, the outcome is the searcher's contribution and must be recorded as such. This answer is `specified`, not `grounded`, and it explicitly refuses both options in the question as verdicts.

## 6. Correction to my own reading

I initially treated "shape, not a name" as if it forbade naming any quantity in the answer. That is an overreading. The canonical phrase governs a *missing* primitive, one not held in the library. Here the slots (firms, workers, tasks), the anchor (measured output), and the threshold (a comparison) are all ordinary terms already available in the measurement frame. Binding them is not inventing a seventh term. What remains forbidden is asserting the *value* of the breadth statistic before measurement. Both the original claim and this correction are kept here so neither is lost.

## 7. Two consequences for this solution

**Prestige is not action.** From *The Recursive Self-Improvement Trap*: *"Prestige must never be allowed to validate an action directly"* and *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* A list of famous economists who agree with a productivity forecast is the named collapse, not corroboration. The legitimate ask is a budget to try the measurement.

**My own audit is a simulation, not a ground reading.** Same essay: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* And: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* So `01_figure_grounded_audit.md` is a simulated derivation checked for internal consistency against the figures. It is not a test of the question and must be labelled as such. It cannot settle anything it reports on.
