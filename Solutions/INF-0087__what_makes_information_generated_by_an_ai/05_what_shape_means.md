# What "shape" means for this question: canonical reading from the eight essays

Sources read 2026-11-23, all by Isaiah N:

1. https://adventuresinml.substack.com/p/how-intelligence-actually-works
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
4. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work
5. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
6. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should
7. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether

All eight share an author with the figures, so their agreement with the figure verdict is expected and carries little independent weight (`10_source_ledger.csv` records the overlap).

## 1. A shape is a constraint, not a filler

The figures README states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)."* Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13: *"It can say the answer is out of reach with the library as it stands... It cannot say which primitive is missing, because naming it would mean already holding it."*

From *The Library of Babel*: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

So a **shape** is the narrowed form of an answer you can state before you can name it. It constrains; it does not fill. For this question the shape is: *a claim ranged against an unmoving anchor, checked by someone who cannot reconstruct it, corroborated at low overlap, with lineage recorded.* That is a set of constraints. Naming a particular product, score or vendor would be a name.

## 2. How the shape is obtained

- *Library of Babel*: use the vocabulary you already have that is *closest* to the thing, then look for recurring new terms that overlap or correlate with it, recurse. *"With each new term gained, you narrow the space and deepen your vocabulary."* The essay also names the exact failure mode of this question: if the final book does not answer it, *"perhaps your problem was a bundle or conflation of several problems masquerading as one?"* That is the union compound found in `01` §1.
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."*
- *Decoding Tacit Knowledge*: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* And: *"Sounding right isn't the same as being checked against the world, which is why I call the Turing test a test of fluency, not of accuracy."* This is the cleanest essay-level statement of F3: a fluent answer is not a checked answer.
- *Library of Babel* on stopping: *"the finish line will also be the starting place"*, and the paradox that by then you have *"composed the answer through the process of locating it."*

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: *"the ground settles it. Verified only by what pays."* The README: the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test. In this question the independent ML sources (Lipton, Guo, Adebayo, the Nature editorial) are such imports: different fields, separate evidence pools, and each bears on one sub-claim.

*They're Scanning Books* sharpens the limit: *"The real import is not a new term in the existing space. It is a new dimension of the space."* And: *"A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six."* Also: *"Declaring the primitives does not make them neutral. It makes the choice visible."* A trust metric declared by a vendor is a visible choice, not a discovery of nature's list.

## 4. The source-discrimination point is the specific forbidden error

*The Hard Problem is About Source* gives the mechanism. Metamerism: an instrument reads green and *"cannot comment on the source"*; one green light, or yellow plus blue, or RGB, or CMYK, or a scheme not yet discovered. *"If several paths create the same behavior, then behavior is a projection with lossy information."* It was the **spectrometer**, not an argument, that resolved it.

Applied here: a legible reasoning trace is a reading of the output, not a reading of the source that produced it. Lipton's field review and Adebayo's saliency sanity checks make the same point independently: explanations can be underspecified or even independent of the model. The fact that an explanation looks right does not comment on whether the claim is right. What is owed is a better instrument, not a nicer explanation.

*The Recursive Self-Improvement Trap*: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed to tether the veracity of the output to reality. Anything else is drift."* And: *"You may all agree and be wrong. You may set your clock to someone else's, who was setting your clock to yours, and be off by many deviations over time. You need ground truth to define where you stand."*

## 5. The answer this question owes, in shape form

**What makes an opaque AI output trustworthy?** Nothing about its opacity, and nothing about how legible its route is, settles it. The output is trustworthy to the degree that four conditions hold:

1. an anchor that does not update has been ranged against the claim;
2. the checker could not have produced the claim itself;
3. an independent frame with a different evidence pool corroborates;
4. the lineage is recorded so an error can be located, and the mode is stated.

The framework returns this as a **shape**, not a name. It does not pick a particular explainability method, a particular audit standard, or a particular confidence threshold. Those are bindings from other frames and must be provenanced as such.

## 6. Correction to my own §3 and §4

I first wrote that a source-discriminating instrument was required before any part of the shape could be trusted. That overstates the case in one direction. Fig 10 :65 says *"Provenance shows a ruling was reached legitimately. It never shows it was right,"* but a ground can settle a claim without a full account of its source. What the spectrometer analogy forbids is **naming the source from the reading**, not using the reading at all. I also referred to the ML sources as if they imported a new primitive. They do not: they are convergent derivations from different closures, which Fig 8 :50 calls *"corroboration at maximum independence."* Both versions are recorded here so neither is quietly lost.

## 7. Two consequences for outreach

**Prestige is not action.** From *The Recursive Self-Improvement Trap*: *"Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A campaign that gathers prestigious names to agree that opacity is or is not a problem is the named collapse, not corroboration. The legitimate ask gives the claim a budget to be tried and lets an anchor settle it.

**This audit is a simulation, not a ground reading.** Same essay: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* The article adds that outputs *"could never be verified if the solutions presented were not contrived to fit the formula."* So `01` is a simulated derivation checked for internal consistency against the figures. It is not a test of the claim and must be labelled as such. It cannot settle anything it reports on.

## 8. What the society-of-agents essay adds

*How a Society of Agents Would Work* is the closest essay to this question. It says plainly: *"Ten copies watching the same thing are one opinion said ten times"*, and *"The group's agreement is never the verdict."* Its account of the shared store carries exactly the provenance discipline F5 requires: convergent discoveries count most, *"Only the record of where each came from separates them."* It also states the dependency order F7 uses: votes come from outcomes, not popularity, and *"Aggregating across slots is how a live signal disappears into an average."* These are figure-grounded statements delivered in essay form, and they are the reason the outreach CSV asks for public, opt-in venues rather than a crowd of agreeable readers.
