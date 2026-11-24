# What "shape" means for this question — canonical reading from the essays

Sources read 2026-11-23, all by Isaiah N (Adventures in Machine Learning, Substack). Quotes below are from the pages actually opened; full provenance in `10_source_ledger.csv`.

1. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the (Oct 02 2026)
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap (Nov 19 2026)
3. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source (Aug 28 2026)
4. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
5. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work
6. https://adventuresinml.substack.com/p/how-intelligence-actually-works
7. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether

Items 4 to 8 are carried from the exemplar's canonical reading, where they were read and quoted; they were not re-opened in this session and carry no independent weight for this question. The three opened essays are enough to fix "shape" here.

## 1. A shape is a constraint, not a filler

The figures README states the limit: the framework returns *"what a missing thing would have to look like (**a shape, not a name**)."* Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :134: *"Unreachable is a verdict here, not a silence,"*

From *The Library of Babel*: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

For this question a **shape** is the narrowed form a definition of information must have before we can name the winning definition. It is a list of constraints: per-slot, ground-anchored, guard-gated, priced in two currencies, provenance-stamped, plural across a union, refusable. "Here is the unique formula" is a name, not a shape.

Concretely for INF-0006:

- A shape: *a correct definition is a per-slot map from prediction and observation to a quantity anchored outside the assigning frame, with description cost and test cost kept apart, and with a stated refuter.*
- A name: *information is the Kolmogorov complexity of the signal*, or *information is the width of a credal set*, or *information is variational free energy*.

The difference matters because the SEP entry on Information observes that Shannon, Kolmogorov and Floridi definitions *"have next to nothing in common"* and that some are conflicting. A name would pick a side before the ground has voted.

## 2. How the shape was obtained here

- *Library of Babel*: bootstrap by proximity, *"With each new term gained, you are able to narrow the space by definition and deepen your vocabulary."* Here the known terms were residual, slot, anchor, closure, import and bond; the unfamiliar neighbours were entropy, Kolmogorov complexity, credal sets and surprisal. Each was ranged against the residual rather than adopted.
- *Library of Babel* on steering: the returned books *"need to be tested or ranged against the problem you want answered in order to steer the direction of the next search."* That is the role of §3's strain tests in `01_figure_grounded_audit.md`.
- Fig 6 :30: *"Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."* Hence the census in `01` describes "a distribution the frame cannot hold", not "the true prior".
- *Library of Babel* on stopping: *"you will know that you are done because the finish line will also be the starting place"*, with the paradox that by the time the search terms are exact, *"you have already composed the answer through the process of locating it."* Here the stop is earlier and more honest: the shape is composed, the name is not.
- *Library of Babel* on a bundle: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* This is the direct essay-level warrant for F6's union: the single question "how should information be defined" is four questions.

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: *"the ground settles it. Verified only by what pays."* Here that would be an instrument that discriminates among candidate definitions at a receiver slot, not a survey of which definition philosophers prefer.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test. A credal set imported from imprecise probability is licensed only if its provenance is shown and it explains a gap the six-term set cannot.

*The Hard Problem is About Source* gives the reason a name from a reading is premature. An instrument that reads green *"cannot comment on the source"*; several different sources can produce the same reading. *"If several paths create the same behavior, then behavior is a projection with lossy information."* The resolution in that essay was not an argument but *"the arrival of a better instrument."* For unknown p, the corresponding claim: several definitions (shortest program, credal set, free-energy bound) can yield the same receiver reading, so the reading does not determine which definition is correct. What is owed is a discriminating instrument, not a vote.

## 4. Q: does "shape, not a name" forbid naming any substitute?

**Answer: no, and this is a correction to an overstatement I made in an earlier reading.** The README phrase is *"what a **missing** thing would have to look like (a shape, not a name)."* The subject is a primitive not held in Γ. Algorithmic complexity, credal sets and residual reduction are terms already available from other frames; pointing at one is a **binding**, not the invention of a seventh primitive. What is forbidden is asserting that the six-term set derives the binding, or that the binding moves the wall (Fig 6: *"IMPORT adds an atom"* - a binding adds none). So:

- Allowed: *"under the shape, a credal-set definition is a candidate; here is its provenance and its shadow test."*
- Forbidden: *"the Tether proves information is Kolmogorov complexity."*

This correction is kept visible rather than erased, matching the exemplar's own §5b correction.

## 5. Prestige is not action

From *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."*

A campaign that gathers famous information theorists to agree with the shape is the named collapse. The legitimate ask is the opposite: give the shape a budget to be tried, ask what would refute it, and let a receiver-level instrument settle it. This is why `03_public_contact_points.csv` contains only public institutional and opt-in routes, and why `02_outreach_email.md` asks for a failure rather than an endorsement.

## 6. My own audit is a simulation, not a ground reading

Same essay: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* And: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post"*, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."*

So `01_figure_grounded_audit.md` is a simulated derivation, checked for internal consistency against the figures. It is not a test of the definition and must be labelled as such. It cannot settle anything it reports on. (The exemplar attributes the shorter word *"simulacra"* to this essay; the opened page uses *"simulate an approximate answer/output"*. This solution uses the form it actually read and records the difference rather than silently copying.)

## 7. Consequence for this question's outreach

The figure-derived output is a shape plus five written refuters, not a definition to be believed. Send the shape and its refuter first (Fig 10 :52: *"Bring a characterised residual, never the source."*). Record the recipient's verdict before showing any theory. Never pool later agreement as corroboration (Fig 2 :40). Offer the formula as a reusable method only on request, with the instruction that each user write their own refuter and state their own mode.
