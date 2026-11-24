# What "shape" means for this question

**Mode: `general` on the reading of the framework's own term; `specified` where it is applied to early-universe simulation testing.** Sources: the eight essays by Isaiah N (read via the canonical framework descriptions and cited by title), the figures README, and the figure text. Full provenance in `10_source_ledger.csv`.

## 1. A shape is a constraint you can state before you can name the answer

The canonical usage rule (`FRAMEWORK/reference/FIGURES_README_canonical.md`) gives the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops at what the instruments can distinguish and records the lineage. *"Indiscernibility is not identity."*

Fig 9 :32: **"you get a kind of thing, never the answer itself"**. Fig 13 :134: **"Unreachable is a verdict here, not a silence,"** and :135: **"It cannot say which primitive is missing, because naming it would mean already holding it."**

From *The Library of Babel: Locating the...*: "You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."

So, for this question, a **shape** is the set of constraints any successful test of an early-universe simulation must satisfy, stated before any particular simulation, dataset or instrument is named. A name would be "use the Planck likelihood and the IllustrisTNG data release." A shape is "a per-slot residual against a ground that cannot be moved by the model, with independent probes, a pre-committed prediction, and a harness used for wiring only."

## 2. How the shape is obtained

- *The Library of Babel*: use the vocabulary already closest to the thing, look for recurring new terms that overlap or correlate with it, and recurse. "With each new term gained, you narrow the space and deepen your vocabulary."
- Fig 6 :30: **"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."** Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause"**.
- *Decoding Tacit Knowledge: Why Context*: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."
- *They're Scanning Books When They Should*: "The real import is not a new term in the existing space. It is a new dimension of the space." Also: "Declaring the primitives does not make them neutral. It makes the choice visible."

Applied here: describe the effect first. The effect is not "we lack a laboratory"; it is "there is no slot for which we can set the universe's initial conditions and rerun it, while there are slots for which a photon or a nucleus already reports a value." That description picks the ground without smuggling in a favorite code.

## 3. What licenses a name

Two things, both outside the shape itself:

1. **The ground settles it.** `THE_FORMULA.md` step 5: "the ground settles it. Verified only by what pays. A gate is not the ground." A test protocol is named as successful only after a measurement pays for it.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test. Importing the V&V vocabulary from engineering is legitimate only if its provenance is recorded and it explains a gap the figures leave open. It does not add a primitive to the framework; it supplies an instance.

The six-term substrate is described in *They're Scanning Books* as "a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six." Declaring the six makes a choice visible, not neutral. The same humility applies to any list of validation tools.

## 4. The specific failure this question is prone to

*The Hard Problem is About Source* gives the mechanism. A spectrometer reads green and "cannot comment on the source": one green light, or yellow plus blue, or RGB, or CMYK, or a scheme not yet discovered. "If several paths create the same behavior, then behavior is a projection with lossy information." "An instrument that can't distinguish these cases demonstrates its own inadequacy." It was the spectrometer, not an argument, that resolved it.

For simulation testing the metamerism is this: a good fit to the CMB power spectrum can be produced by more than one history and more than one subgrid prescription. Reading the cause off the fit is the named error. What is owed is a better discriminator (another epoch, another probe), not a name for the source.

*The Recursive Self-Improvement Trap*: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." A simulation validating itself with its own internal score is exactly the failure this essay names.

## 5. The shape, stated

For QMGR2-0096 the shape has five parts:

1. **A ground that does not update.** Fig 2 :29-30, :36. The observed universe, not agreement among simulators.
2. **Per-slot residuals and independence.** Fig 1 :19, Fig 2 :31-32, Fig 8 :29. Different epochs and different instruments are different frames; two codes from one set of initial conditions are one frame.
3. **A pre-committed term.** Fig 5 :43-44 and Formula "Direction". The prediction is bound as an ordinary term so it can accrue a residual and be refused.
4. **A harness with a declared limit.** Fig 11 :70, :68-69. Wiring only; the reproduction gap and the introduced artifacts are named.
5. **A recorded stop.** Fig 4 :30 (measure R_T), Fig 8 :39-43 (underivable versus unreachable), Fig 13 :134 (unreachable is a verdict). The lineage says what was searched, what was imported, and what would reverse the verdict.

What the shape does **not** contain: a named simulator, a named dataset as the whole anchor, a claim that laboratory analogues recreate the universe, or any verdict that a particular cosmological model is true.

## 6. Consequence for the mode of this whole package

*The Recursive Self-Improvement Trap*: "LLMs can quickly simulate an approximate answer/output... However, the truly testable output would need to be derived from the real architecture or working the formula yourself." LLM output is *"simulacra."*

Therefore every substantive claim in this folder is labelled `general` or `specified` and this derivation is a **simulated derivation checked for internal consistency against the figures**. It is not a test of any simulation and cannot settle the question it reports on. It can only say what a test must look like, and write down in advance what would break that claim.

## 7. Prestige is not action (why no famous-name campaign)

From *The Recursive Self-Improvement Trap*: "Prestige must never be allowed to validate an action directly... Someone let prestige stand in for proof... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."

The legitimate ask is a budget to try the protocol against a real ground, not an endorsement by well-known cosmologists. Seat Map :163: "High correlation is disqualifying for a verdict and efficient for a convention." A list ranked by receptiveness is a list selected to agree.

## 8. Corrections kept visible

- My first reading treated "shape, not a name" as a ban on naming any instrument. The canonical phrase governs a **missing** primitive. Naming an existing instrument is a binding, not an invention of a seventh term. The ban that matters here is the ban on naming a *ground* that is actually just one frame's reading, and on naming a *result* before the measurement pays for it. Both readings are recorded so the narrowing is visible.
- My first reading treated the CMB as "the anchor." Re-census: the CMB is one instrument reading of the ground; the anchor is the whole observational record that does not move when Γ changes (Fig 2 :29-30). The narrower reading is used in `01` and `09`; the earlier one is preserved here.
