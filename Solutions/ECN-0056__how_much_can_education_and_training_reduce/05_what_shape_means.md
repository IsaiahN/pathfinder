# What "shape" means for ECN-0056: canonical reading from the essays

## Reading discipline, stated honestly

The eight essays are the philosophical grounding for "shape", "prestige is not action", "source", and "outputs are not generators". Three were re-read directly on 2026-11-23:

1. *The Library of Babel: Locating The Book of Books.* https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
2. *The Hard Problem is About Source.* https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
3. *The Recursive Self-Improvement Trap.* https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap

The remaining five (*How Intelligence Actually Works*, *Decoding Tacit Knowledge*, *How a Society of Agents Would Work*, *They're Scanning Books When They Should*, *Arrival of the Fittest*) were not re-read in this session. Where they are mentioned below it is as the exemplar's recorded mapping, not as my own reading, and they carry no quote from me. Every quote below is from one of the three essays I opened, or from the local canonical figure text.

## 1. A shape is a constraint, not a filler

The canonical usage rule (`FRAMEWORK/reference/FIGURES_README_canonical.md`) states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)."* Fig 9 :32: *"you get a kind of thing, never the answer itself."*

*The Library of Babel*, read this session: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

For ECN-0056 a **shape** is the form of the answer I can state before I can measure it: **a union decomposition of the per-slot wage residual into an education-sensitive part and a habitat-sensitive part, with the boundary left open until a ground reading closes it.** That is a shape. "Training reduces wage inequality by X percent" is a name/measurement, and the framework cannot supply it from inside the frame.

## 2. How the shape is obtained

- *Library of Babel*, read this session: *"With each new term gained, you narrow the space and deepen your vocabulary."* Applied here: "wage inequality" is too coarse; the bootstrapped vocabulary becomes "per-slot residual", "skill condition", "bargaining condition", "intersection", "contact with habitat".
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30–31: *"your words are borrowed too, so describe the effect rather than the cause."* So I describe what would be observed (a per-slot wage gap that does or does not move under fixed institutions), not a mechanism word imported from a favourite theory.
- *Library of Babel* on the bundle: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."* This is the essay-level source for the union reading in F3 of `01_figure_grounded_audit.md`.
- Stopping: the answer is reached when, in the essay's words, *"the finish line will also be the starting place"*, and the paradox is that by then you have *"composed the answer through the process of locating it."*

## 3. What licenses a measurement (the analogue of naming)

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* The README: the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* Here that means an experiment or a credible decomposition, not another regression on the same survey.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 gates), with a source gate and a shadow test. The labour-institutions frame is such an import, and `10_source_ledger.csv` records it.

*The Hard Problem is About Source*, read this session, gives the mechanism for why a single aggregate reading cannot license the decomposition: *"If several paths create the same behavior, then behavior is a projection with lossy information"*; the instrument *"cannot comment on the source"*. A Gini coefficient reads green; it cannot say whether the source was skill dispersion, bargaining dispersion, or both. The resolution in the essay is instrument-led: *"It was proven wrong not by argument, but by the arrival of a better instrument."* For ECN-0056 the better instrument is a per-slot measurement with a counterfactual, which is exactly what F2 and F4 of the audit ask for.

## 4. Why the headline percentage is the forbidden error

The error is not merely imprecision. It is a source error of the kind §3 names. The question as published asks "how much", which invites a single number. The number would be a projection (one aggregate reading) treated as a source attribution (a causal decomposition). Several underlying structures can produce the same Gini movement: broad skill gains with fixed institutions, credential inflation with a fixed job queue, or a change in bargaining coverage. The reading does not determine which. Until an instrument discriminates among them, the honest output is the shape plus the refuters.

## 5. Q: Does "shape, not a name" forbid reporting any number here?

**No, narrowed.** The README's phrase governs a **missing** primitive, one not held in Γ. A measured per-slot effect is a ground reading, not a name invented by the framework. What is forbidden in this run is *manufacturing* the number from inside the education frame and calling it settled. Keeping the boundary open is a claim about this simulated run (no measurement was taken), not a permanent ban on measurement. This corrects the overstatement I initially wrote in §4 of `01_figure_grounded_audit.md`; the correction is recorded there rather than erased.

## 6. Two consequences for outreach

**Prestige is not action.** *The Recursive Self-Improvement Trap*, read this session, is explicit: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A campaign that gathers prestigious names to agree that education reduces inequality is the named collapse, not corroboration. The legitimate ask gives the claim a budget to be tried and lets the ground settle it. Same essay: *"You may all agree and be wrong."*

**This audit is a simulation, not a ground reading.** Same essay: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. ... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* So `01_figure_grounded_audit.md` is a simulated derivation checked for internal consistency against the figures. It is not a test of the claim and must be labelled as such. It cannot settle anything it reports on.
