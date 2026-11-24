# What "shape" means for this question

**Mode: `general` on the meaning of "shape", `specified` where it is applied to ice.** This document is a simulated derivation checked for internal consistency against the figures, not a ground reading (see section 6).

Sources read 2026-11-22, all by Isaiah N unless noted:

1. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the (The Library of Babel, 2026-10-02)
2. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source (The Hard Problem is About Source, 2026-08-28)
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context (Decoding Tacit Knowledge, 2026-11-10)
4. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap (The Recursive Self-Improvement Trap, 2026-11-19)
5. Local `FRAMEWORK/reference/FIGURES_README_canonical.md` (canonical usage rule)
6. Local `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text)

I did not rely on the other four essays in the exemplar's list. They are not cited here because I did not open them for this question.

## 1. A shape is a constraint, not a filler

The canonical rule: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*. Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134-135: "It can say the answer is out of reach with the library as it stands... It cannot say which primitive is missing, because naming it would mean already holding it."

From *The Library of Babel*: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."

So for EAR-0038 a **shape** is the form an early-warning observation must have before any particular glacier, instrument or date is named. It constrains:

- the warning lives at a **slot**, not in a global average (Fig 1 :19);
- the warning is a **residual that persists and does not trend down**, not a state extreme (Fig 5 :59);
- the warning must be **observable by an instrument already returning something** (Fig 6 :32);
- the warning is **refusable** when it is inherited forcing (Operators table: negation);
- the warning is a **kind of thing**, not a date or a threshold value (Fig 9 :32).

The sentence `elevation residual at basin S, AC1 rising in rolling windows, null of inherited forcing rejected` is a shape. `Jakobshavn tips in 2031` is a name and is not licensed here.

## 2. How the shape is obtained

- *Library of Babel*: use the vocabulary closest to the thing, then recurse on nearby new terms. "With each new term gained, you narrow the space and deepen your vocabulary."
- Fig 6 :30: "The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause."
- *Decoding Tacit Knowledge*: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." This is exactly why the outreach email in `02` leads with what to expect in a detrended series rather than with the framework.
- *Library of Babel* on stopping: "the finish line will also be the starting place", and the paradox is that you have "already composed the answer through the process of locating it." Here: once the residual, slot, instrument, refuter and independent frame are specified, there is nothing left to add except measurements.

## 3. What would license a name

Only two things, both outside the shape itself:

1. **The ground settles it.** `THE_FORMULA.md` step 5: "the ground settles it. Verified only by what pays. A gate is not the ground." The canonical README adds that the framework "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test. The five world sources in `10_source_ledger.csv` are such imports: their CSD statistics and instruments are recorded as coming from glaciology and complex-systems science, not derived from the figures.

*They're Scanning Books When They Should* was not read for this solution, so its often-quoted line about a new dimension of the space is **not** used here. The point it would support is already covered by Fig 6's import rule.

## 4. The specific forbidden error here: source named from a reading

*The Hard Problem is About Source*: "If several paths create the same behavior, then behavior is a projection with lossy information". The colour instrument reads green and cannot say whether the source was one green light, yellow plus blue, RGB, CMYK, or a scheme not yet discovered. "An instrument that can't distinguish these cases demonstrates its own inadequacy." It was the spectrometer, not an argument, that resolved it.

For EAR-0038 the same error appears in two places:

- **Rising variance as a source claim.** A rising variance in a detrended elevation series can come from loss of resilience, from a change in measurement coverage, or from inherited forcing variability. Chapman et al. (2026) explicitly test the last of these. Naming "loss of resilience" from the variance reading alone is the metamerism error. What is owed is a discriminating check, not a name.
- **Coherence loss as a mechanism claim.** Mannerfelt et al. (2025) use InSAR coherence loss as the primary signal of disturbed flow, but note that coherence can also be lost through rainfall, melt or imaging geometry. They mitigate it by selecting winter acquisitions. The reading does not by itself determine the cause.

In both cases the figures' answer is the same: keep the effect description, add a discriminating instrument or null test, and record what remains undecided.

## 5. Q: Does "shape, not a name" forbid naming the observables?

**No, with a condition.** The README's phrase governs a **missing** primitive, one not held in the frame. The observables in `01_figure_grounded_audit.md` are not new primitives imported into the figures; they are bindings from the glaciology and complex-systems frames onto held terms (a slot, a residual, a gradient, a network). What is forbidden is claiming the figures derive them, or claiming a new instrument is licensed without a source gate and a shadow test.

I therefore state the answer as: **here is the shape of a warning observation, bound to instruments that already return data; the figures do not name the glacier, the date, or a new sensor.** This is the same narrowing the exemplar applies when it distinguishes a missing primitive from a binding onto a held atom. Triangulated (canonical README + Fig 6 + Fig 9).

## 6. My own derivation is a simulation, not a ground reading

*The Recursive Self-Improvement Trap*: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." And: "the truly testable output would need to be derived from the real architecture or working the formula yourself." So `01_figure_grounded_audit.md`, this file and `07_the_tether_answer.md` are simulated derivations checked for internal consistency against the figures. They are **not** tests of any glacier and cannot settle anything they report on.

**Prestige is not action.** Same essay: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." A monitoring programme that gathers prestigious endorsements for a warning is the named collapse. The legitimate ask is to give the shape a budget to be tested and let measurements settle it.
