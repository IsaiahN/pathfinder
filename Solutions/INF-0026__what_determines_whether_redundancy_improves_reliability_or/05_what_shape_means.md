# What "shape" means for this question — canonical reading from the eight essays

All eight essays were opened on 2026-11-23. Each is by Isaiah N and is listed in `10_source_ledger.csv` with its URL and a verbatim quote:

1. https://adventuresinml.substack.com/p/how-intelligence-actually-works
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
4. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work
5. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
6. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should
7. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether

The canonical rule is the local `FRAMEWORK/reference/FIGURES_README_canonical.md`, which states that the framework reports "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of what instruments can distinguish.

## 1. A shape is a constraint, not a filler

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence,". The figures README gives the limit explicitly: a shape is what a missing thing would have to look like, not the missing thing.

From *The Library of Babel*: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."

For INF-0026 a shape is therefore **not** a code, a rate, a critical correlation or a redundancy percentage. It is the form the deciding quantity must have. Here that form is: *the sign of the redundancy gain is set by how much the repeated signals draw on the same evidence, and the gain is licensed only by a bargain in which the capacity spent is less than the error removed.* This is a constraint on any answer; it does not fill in the answer.

"Redundancy = 50%" is a measured property of English (Shannon). "rho_crit = 0.3" is a number from a particular model (the LLM ensemble paper). Neither is a shape.

## 2. How the shape is obtained for this question

- *Library of Babel*: use the vocabulary already held that is closest to the thing, then recurse on new terms that overlap. "With each new term gained, you are able to narrow the space by definition and deepen your vocabulary." Here the close terms were independence, agreement, surplus, bargain and capacity.
- Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause." So the residual was described as an error-rate gap per repetition slot, not as "coding theory".
- *They're Scanning Books*: "The data wall is the point at which the next genius is redundant." That is the same shape in a different field: adding units of one kind after the useful variance is exhausted adds nothing.
- *How a Society of Agents*: "Ten copies watching the same thing are one opinion said ten times." This is the shape stated in one sentence.
- *Library of Babel* on stopping: "the finish line will also be the starting place" and the paradox that by then you have "composed the answer through the process of locating it". Here the finish line is the bound prediction in `README.md`, written before the audit.

## 3. What licenses a name or a number

Two things only, both outside the shape:

1. **The ground settles it.** Formula step 5: "the ground settles it. Verified only by what pays. A gate is not the ground." In this question the ground is a measured error rate, a measured failure rate, or a measured majority accuracy.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test. Shannon's channel capacity, Kish's design effect and the beta-factor model are imports of this kind. They carry their own provenance and are never presented as figure derivations.

*They're Scanning Books*: "The real import is not a new term in the existing space. It is a new dimension of the space." And: "A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six." Also: "Declaring the primitives does not make them neutral. It makes the choice visible." The figures' independence rule is a visible choice of compression axis, not a discovery of nature's own list.

## 4. The specific forbidden error: reading the source off one projection

*The Hard Problem is About Source*: "If several paths create the same behavior, then behavior is a projection with lossy information". A green reading cannot say whether the source was one green light, yellow plus blue, RGB or CMYK. It "was proven wrong not by argument, but by the arrival of a better instrument."

Applied here: an observed agreement among repeated signals is a projection. It is compatible with (a) independent draws that happen to agree, (b) one shared cause repeating itself, and (c) copies of one measurement replayed. The agreement reading cannot discriminate among these sources. Naming "the redundancy worked" from the agreement alone is the metamerism error. What is owed is a discriminator: separate noise draws, separate failure causes, separate experience. Fig 13 :134 again: "Indiscernibility is not identity."

From *Arrival of the Fittest*: "Because it is a metatheory, it cannot be validated, nor can it validate itself." A number asserted as figure-derived would be a frame certifying itself.

## 5. Answers to the shape questions

**Q: Does the framework name a code or a critical correlation?** No. It returns the shape: independence decides whether the repetition carries information, and the MDL bargain decides whether it is worth its cost. Any specific code or threshold is a binding from an outside frame, provenanced as such. This is not the "shape, not a name" limit governing a missing primitive; it is the narrower Fig 9 :32 limit governing what can be derived from the figures at all.

**Q: Does the record commit an error by talking about "50% redundancy"?** Only if the percentage is attributed to the figures. It is Shannon's measured source property, imported with its own citation. The record keeps it in the WORLD section, never in TETHER.

**Q: What would turn the shape into a name?** A source-discriminating instrument, not more agreement. For a channel: an experiment that varies the correlation of the noise draws while holding rate fixed and measures the error curve. For components: a common-cause audit that separates Q_I from Q_C. For a committee: independent judgments ranged separately against the same fixed ground.

## 6. Two consequences for outreach

**Prestige is not action.** From *The Recursive Self-Improvement Trap*: "Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." A campaign that gathers famous names to agree with the shape is the named collapse. The legitimate ask is the opposite: give the claim a budget to be tried and let an error rate settle it.

**My own audit is a simulation, not a ground reading.** Same essay: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... the truly testable output would need to be derived from the real architecture or working the formula yourself." The architecture essay calls such outputs "simulacra" and warns they "could never be verified if the solutions presented were not contrived to fit the formula." So `01_figure_grounded_audit.md` is a simulated derivation checked for internal consistency. It cannot settle the question it reports on.

## 7. A correction kept visible

An earlier reading of §3 treated the "shape, not a name" rule as if it forbade mentioning any number at all. That was overstated. The canonical phrase governs a **missing** thing: the framework cannot name a primitive it does not hold. Numbers already held in an outside frame can be imported, provided the source gate and shadow test are run and the provenance is recorded. The correction is kept here rather than silently applied: the rule forbids presenting an imported number as derived, not mentioning it.
