# What "shape" means: canonical reading for REA-0038

**Sources opened this session, 2026-11-23.** All by Isaiah N, at Adventures in Machine Learning:

1. [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the), Oct 02 2026.
2. [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source), Aug 28 2026.
3. [Decoding Tacit Knowledge: Why Context, Subtext, and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context), Nov 10 2026.
4. [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap), Nov 19 2026.
5. [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether), Aug 19 2026.

Plus the local canonical usage rule at `local: FRAMEWORK/reference/FIGURES_README_canonical.md` and
the verbatim figure text at `local: FRAMEWORK/reference/03-FIGURES_TEXT.md`. The other essays named
in the exemplar's `05` (*How a Society of Agents Would Work*, *They're Scanning Books*,
*How Intelligence Actually Works*) were **not opened this session** and are not used as fresh
witnesses here. Their recorded readings in the exemplar were not treated as evidence.

## 1. A shape is a constraint, not a filler

The canonical limit is in the local README: the framework returns *"what a missing thing would have
to look like (a shape, not a name)."* Fig 9 :32: *"you get a kind of thing, never the answer itself."*
From the README: *"It cannot say which primitive is missing, because naming it would mean already
holding it."*

From *The Library of Babel*, opened this session: *"you can cut your search short if the set of books
returned is small and descriptive enough that it provides a general shape of the answer that
satisfies your question."*

So for this question a **shape** is the set of properties any detector must have, stated before we
can name a single detector that satisfies them all. The shape is:

> a procedure with contact to a ground that does not move when confidence moves, per-slot rather
> than averaged reporting, a deliberate change of marginal with per-case evidence held fixed, two
> low-overlap readings whose gap is the signal, and a provenance record.

`A universal confidence-only statistic` would be a name. The shape above is not a name and does not
claim to be one.

## 2. How the shape was obtained

- *Library of Babel*: use the vocabulary you already have that is closest to the thing, look for
  recurring new terms that overlap with it, and recurse. *"With each new term gained, you are able to
  narrow the space by definition and deepen your vocabulary."*
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it
  in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than
  the cause."*
- *Decoding Tacit Knowledge*, opened this session: *"When contact isn't possible, the best you can
  send is a plain description of what you'd expect to see, because anyone can check that against the
  world."* This is why the stage-1 email asks a checker what they would count as a failure, before
  sending any framework material.
- *Library of Babel* on stopping: *"You will know that you are done because the finish line will
  also be the starting place, as there is nowhere else to search and nothing else that can describe
  the answer better."* And the paradox: *"you have already composed the answer through the process
  of locating it."*

Applied here, the proximity terms were: calibration, ECE, OOD detection, conformal coverage,
signal detection theory, base-rate neglect, illusion of validity, metamerism, provenance. Each
narrowed the shape by removing a candidate that could not satisfy all five properties.

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** `THE_FORMULA.md` step 5: *"the ground settles it. Verified only by what
   pays. A gate is not the ground."* The local README: the framework *"stops at the limit of what
   the available instruments can distinguish, and records the lineage so the stop is honest."*
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :51), with a source
   gate and a shadow test.

From *Arrival of the Fittest*, opened this session, the architecture's own citation scheme marks
each borrowed result as *"borrowed machinery"*, *"an instance"*, or *"a parallel"*. That is exactly
the discipline applied to the world sources in `09`: Guo and Ovadia are borrowed machinery for the
calibration part, Tversky and Kahneman and Casscells are low-overlap instances of the same
structural shape, and none of them is a Tether result.

The *Arrival* essay also says plainly: *"the library is unknown to us (black-box training data)
which is not Framework Compliant, therefore the outputs generated must be seen as simulacra."* This
solution is one of those outputs.

## 4. Why source-naming is the specific forbidden error here

*The Hard Problem is About Source*, opened this session, gives the mechanism. An instrument reads
green and *"the instrument is speaking only about what it measured, it cannot comment on the
source."* The source could be one green light, or yellow plus blue, or RGB, or CMYK, or *"a
completely novel color scheme that humans have not yet discovered."* The essay's general claim:
*"If several paths create the same behavior, then behavior is a projection with lossy information."*
And the resolution: *"What the Spectrometer Example Reveals: The answer is unreached until a better
instrument exists."* It was proven wrong *"not by argument, but by the arrival of a better
instrument."*

This maps exactly onto the confidence question. A model's confidence reading is the green. The
training distribution and the present evidence are two of the possible sources. An argument about
whether the model "really knows" cannot separate them; a spectrometer-like instrument can. What the
figures add is the constraint that the instrument must range against a ground that does not update
(Fig 2 :29, :35), and that two low-overlap readings are needed to see the gap (Fig 2 :31;
Fig 12 :126).

*Decoding Tacit Knowledge* adds a second reason: *"An understanding that's never checked feels
exactly as certain as one that has been."* That sentence is the psychological version of the whole
question. It explains why confidence feels like evidence from the inside and why an outside anchor
is required.

## 5. Naming the method families: ANSWERED under a stated limit

**Do the figures license naming calibration curves, signal detection theory and conformal
prediction?** Yes and no, and the distinction matters.

- They are **not derived** from the figures. Each is an import from a frame whose closure differs,
  with its own literature and its own ground (Fig 6 :23). They carry no verdict weight from the
  figures.
- Naming them is **not forbidden** either. They are methods that satisfy a stated shape, not new
  primitives invented to fill a missing slot. The relevant limit in the README is about a *missing*
  thing: *"what a missing thing would have to look like (a shape, not a name)."* Calibration,
  SDT and conformal prediction are not missing from the frame; they are held in other frames.
- What remains unlicensed is the claim that **one of them is the answer**. Fig 9 :32: *"you get a
  kind of thing, never the answer itself."* The solution therefore reports method *families* and
  the properties they must have, and refuses to rank them into a winner.

## 5b. Correction to my own §1 and §4

I initially wrote §1 as if "shape, not a name" forbade naming any detector at all. That overstates
it. The phrase governs a primitive not held in Γ, as the README's word *"missing"* makes clear. The
three method families above are held elsewhere and are named as **provenanced bindings onto the
shape**, in the same way the exemplar corrected its own naming of Gradient. Two claims are now
recorded so neither is quietly lost:

1. **Kept:** an argument about a confidence reading cannot discriminate its source; an instrument
   is required. This is the metamerism point and it stands.
2. **Corrected:** naming method families is allowed when they are marked as imports with a source
   gate. What is forbidden is calling one of them *the* detector the framework produced.

I also initially treated *The Hard Problem is About Source* as if the spectrometer analogy settled
the machine-learning question by itself. It does not. It supplies the shape of the missing
instrument; the ground test is still owed. The exemplar's correction pattern is followed here: both
the kept claim and the corrected claim are visible.

## 6. Two consequences for outreach

**Prestige is not action.** From *The Recursive Self-Improvement Trap*, opened this session:
*"Prestige must never be allowed to validate an action directly"* and *"Prestige can fund an action.
It can give an action a budget to be tried. But it cannot settle an action. Only the ground can
settle it. The Ground Maintainer must be blind to prestige."* A list of prestigious calibration
researchers who agree with this packet is the named collapse, not corroboration. The legitimate ask
is a refuter.

**My own audit is a simulation, not a ground reading.** Same essay: *"LLMs can quickly simulate an
approximate answer/output with the formula found in the architecture post... However, the truly
testable output would need to be derived from the real architecture or working the formula yourself."*
The *Arrival* essay adds: *"due to the black-box nature could never be verified if the solutions
presented were not contrived to fit the formula."* So `01` is a simulated derivation checked for
internal consistency against the figures. It is **not** a test of the question and must be labelled
as such. It cannot settle anything it reports on.
