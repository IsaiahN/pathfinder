# What "shape" means for INF-0023, from the eight essays

Sources read 2026-11-23, all by Isaiah N. URLs are recorded with quotes in `10_source_ledger.csv`.

1. https://adventuresinml.substack.com/p/how-intelligence-actually-works
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
4. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work
5. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
6. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should
7. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether

Plus the canonical figures README, local copy at `FRAMEWORK/reference/FIGURES_README_canonical.md`.

## 1. A shape is a constraint you can state before you can name the thing

The figures README gives the limit: the framework reports *"what a missing thing would have to look like (a shape, not a name)."* Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

From *The Library of Babel*: *"This means that you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

For this question a shape is: **four goods, two currencies, two bond properties; hard floors before optimisation; per-slot residual; independence in proportion to failure cost; numeric split withheld until a ground is named.** That is a shape. A specific split such as "20 percent accuracy, 30 percent speed, 30 percent robustness, 20 percent energy" is a name, and the framework does not derive it.

## 2. How a shape is obtained

- *Library of Babel*: use the vocabulary already held that is closest to the thing, then recurse on newly found terms. *"With each new term gained, you are able to narrow the space by definition and deepen your vocabulary. It's this recursive process that will help you converge on the answer."*
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."* So the residual is described as missed messages and missed deadlines, not as "low QoS".
- *Decoding Tacit Knowledge*: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* This is why the packet asks what a failure would look like rather than explaining the framework.
- *Library of Babel* on stopping: *"You will know that you are done because the finish line will also be the starting place, as there is nowhere else to search and nothing else that can describe the answer better."*

## 3. What licenses a name, and what does not

Two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* For this question that means a measured bit error rate, a measured latency distribution, a measured joule-per-bit figure, under a stated channel state.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23), with a source gate and a shadow test. Here the import is the application's cost of being wrong, which lives in the safety case, the service contract, or the user, not in the communication frame.

*They're Scanning Books* sharpens the second point: *"The real import is not a new term in the existing space. It is a new dimension of the space."* The cost of being wrong is not another coding parameter; it is a new axis that turns an unconstrained tradeoff into a decision.

That essay also says: *"A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six."* And: *"Declaring the primitives does not make them neutral. It makes the choice visible."* This is why `01` §5 retracts the attempt to map the four goods onto the six substrate terms. Declaring the six does not make them the right axes for a bandwidth question.

## 4. Why the bundle has to be unbundled before it is searched

*The Hard Problem is About Source* gives the discriminator argument: *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it."*

A fleet average of delivered packets is a reading that cannot comment on the source. One green reading can come from a green light, from yellow plus blue, or from RGB. Likewise, one "99.9 percent delivered" figure can come from uniform low loss or from one persistently failing slot hidden in the average. What is owed is a better instrument, the per-slot residual, not a name for the source.

*How Intelligence Actually Works* states the general stop: *"converges toward indiscernibility, and indiscernibility is not identity."* A rate-distortion curve that is indiscernible from the real channel for the measured cases is still a projection until the unmeasured channel states are tested.

## 5. Correction to my own §1 and §3

I initially read "shape, not a name" as forbidding any numeric statement at all in this answer, including floors. **That is retracted.** The README's phrase governs a *missing* primitive, one not held in the library. It does not forbid binding ordinary terms that are already measurable. A latency ceiling, a bit error floor, a joule-per-bit ceiling and a survival probability under a stated channel state are all ordinary, measurable terms and can accrue residuals like anything else. What remains forbidden is presenting a single numeric split as derived when the channel model and the cost of being wrong were never supplied.

Both claims are recorded so neither is quietly lost: floors are allowed and required; the unique split is not derived.

## 6. Two consequences for this question

**Prestige is not action.** From *The Recursive Self-Improvement Trap*: *"Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A list of well-known reviewers selected for likely agreement is the named collapse, not corroboration. The legitimate ask is a budget to try the claim against a measured channel.

**My own audit is a simulation, not a ground reading.** Same essay: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post."* And: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* So `01` is a simulated derivation checked for internal consistency against the figures. It is **not** a measurement of any channel and must be labelled as such. It cannot settle anything it reports on.

## 7. What a society of agents would add, and why it is not used here

*How a Society of Agents Would Work* explains that a group is only worth having while its members stay different, and that the group's agreement is never the verdict: *"Figure 2 says the same: 'Frames range against the ground. They do not negotiate with it.'"* For this question the relevant consequence is practical: if several engineers check the shape claim, they must check it on different channel data, not reread the same rate-distortion page. In this simulated package the primary seat and the second seat share one evidence pool, so their agreement is internal consistency only, as declared in `11_audit.md`.
