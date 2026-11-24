# What "shape" means for BUS-0069: canonical reading from the essays

Sources opened 2026-11-22, all by Isaiah N:

1. https://adventuresinml.substack.com/p/how-intelligence-actually-works (used for the mapping of "shape" to a narrowed form; read this session)
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
4. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work (listed in the exemplar's essay set; not re-fetched this session, so no quote is taken from it here)
5. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
6. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should (listed in the exemplar's essay set; not re-fetched this session, so no quote is taken from it here)
7. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether (listed in the exemplar's essay set; not re-fetched this session, so no quote is taken from it here)

Where an essay was not re-fetched, it appears in the list for completeness but carries no quotation in this file. That is an honest record, not a hidden citation.

## 1. A shape is a constraint, not a filler

The canonical figures README states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*. Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 13 :135 says the framework cannot name which primitive is missing, since naming it would mean already holding it.

From *The Library of Babel*: *"You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

For BUS-0069 a **shape** is therefore the form a valid measurement must take, statable before any particular tool is chosen:

- a residual indexed per consumer slot, not a campaign average (Fig 1 :19);
- a comparison of that slot with and without the ad, where the assignment does not update on what the analyst believes (Fig 2 :29, :33);
- a source-discriminating instrument, because the purchase reading alone cannot say which cause produced it (Hard Problem essay);
- C1 and C2 kept as separate compounds, never averaged into one ROAS (Fig 9 :57).

That shape constrains. It does not fill. "Run a randomised holdout with per-slot lift and a selection diagnostic" is a shape. "Use vendor X's multi-touch model" is a name.

## 2. How the shape is obtained

- *Library of Babel*: bootstrap vocabulary by proximity, using what is already known and closest to the thing, then recurse. *"With each new term gained, you narrow the space and deepen your vocabulary."*
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect"* rather than the cause. The effect here is the counterfactual gap, not "attribution quality" or "ROAS accuracy", which are vendor-bound names.
- *Decoding Tacit Knowledge*: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* That is why the outreach email in `02` sends a description of the refuter before any figure text.
- *Library of Babel* on stopping: the answer is reached when *"the finish line will also be the starting place"*, with the paradox that by then the searcher has *"composed the answer through the process of locating it."* For this question, the finish line is a measurement design good enough that an outside frame can refute it without reading the framework.

## 3. What licenses a name

Two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: *"the ground settles it. Verified only by what pays."* A holdout result that pays for the term, at the right slot and scale, licenses the specific instrument as settled for that campaign.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :51), with a source gate and a shadow test. The epidemiology target-trial framework is an import of this kind: it predicts the shape of the counterfactual comparison from a different field, and its provenance is recorded in `10_source_ledger.csv`.

A vendor's claim that its model "measures true incrementality" is neither. It is a name asserted from inside the frame that produces the reading.

## 4. Why the purchase reading cannot name its source

*The Hard Problem is About Source* supplies the mechanism. An instrument reads green and *"cannot comment on the source"*. The green could be one green light, yellow plus blue, RGB, CMYK, or a scheme not yet discovered. *"If several paths create the same behavior, then behavior is a projection with lossy information"*. The reading does not determine the source, and *"An instrument that can't distinguish these cases demonstrates its own inadequacy"*. The resolution in the colour case was a spectrometer, not an argument.

For advertising, the purchase after an exposure is the green reading. Its source could be persuasion, pre-existing intention found by targeting, a concurrent promotion, or a competitor's absence. What is owed is a discriminator, not a name for the source read off the projection. This is F4 in `01_figure_grounded_audit.md`.

Fig 6 :32-34 sharpens the instrument rule: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* A/B tests already returned a reading; holdouts, geo splits, and ghost ads are sharpenings of that instrument, not inventions from the concept of causation.

## 5. What "shape" does not license here

- It does not license picking a measurement stack before describing the residual. Fig 8 :53: *"Residual first, frame second."* Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit."*
- It does not license asserting that a randomised holdout is always affordable or always necessary. Lewis and Rao 2015 show the budget limit, and Formula step 7 distinguishes unreachable-at-budget from underivable-in-principle.
- It does not license treating the framework's own output as a verdict. From *The Recursive Self-Improvement Trap*: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

## 6. Two consequences for outreach

**Prestige is not action.** From *The Recursive Self-Improvement Trap*: *"Prestige must never be allowed to validate an action directly"*; *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* A well-known attribution vendor or a famous researcher is a prestige proxy. It is excluded from verdict weight. What we want is a checkable record of contact with a measurement ground, reached through an opt-in venue.

**This audit is a simulation, not a ground reading.** Same essay: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post."* So `01` is a simulated derivation, checked for internal consistency against the figures. It is not a lift test and it must be labelled as such. It cannot settle the advertising question it reports on.

## 7. Correction to my own framing

I initially treated "shape, not a name" as if it forbade naming any measurement tool at all. That is too strong. The README's phrase governs a **missing** thing, a primitive or instrument not held in Γ. A holdout is an ordinary term already present in the business frame; naming it as a candidate instrument is a binding from that frame, not the invention of a new primitive. What remains forbidden is claiming that the framework *derives* a specific vendor or stack, or that the shape alone names the one correct tool. Both the weaker and the stronger claims are recorded so neither is quietly lost. This correction is triangulated against Fig 13 :134 and the README's canonical limit.
