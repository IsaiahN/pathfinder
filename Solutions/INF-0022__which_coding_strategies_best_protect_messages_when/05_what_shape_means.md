# What "shape" means for this question

Canonical reading from the eight essays, all fetched and read on 2026-11-23, plus the local figures README and `03-FIGURES_TEXT.md`.

Sources read this session (all by Isaiah N, 2026, except where noted):

1. https://adventuresinml.substack.com/p/how-intelligence-actually-works (Sep 16 2026)
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap (Nov 19 2026)
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context (Nov 10 2026)
4. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work (Oct 22 2026)
5. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the (Oct 02 2026)
6. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should (Sep 06 2026)
7. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source (Aug 28 2026)
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether (Aug 19 2026)

Plus local: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/03-FIGURES_TEXT.md`.

---

## 1. A shape is a constraint you can state before you can name the member

The canonical README says the framework reports *"what a missing thing would have to look like (a shape, not a name)"*. Fig 9 :32: *"you get a kind of thing, never the answer itself"*. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

From *The Library of Babel*, read directly: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

Applied here. The shape of a strategy for correlated errors is:

> something that breaks the shared error source before decoding, so that what the decoder sees as separate witnesses really are separate; something that works at the scale where the burst is one symbol; something that marks uncertainty as erasure; and something whose cost is priced against a declared channel.

A named code, a specific interleaver depth, a particular λ, is a **member**, not the shape. The framework returns the former; the latter is supplied by the code designer and must be recorded as that person's contribution.

## 2. How the shape is obtained: proximity and recursion, not a guess at the winner

*The Library of Babel*: *"if you don't know the right terms to search for, you will have to use the existing vocabulary you do know that is closest to the words that you wish to describe and grasp the shape of."* And: *"With each new term gained, you are able to narrow the space by definition and deepen your vocabulary."*

For this question the bootstrap vocabulary is concrete: burst, run length, interleaver, symbol, erasure, Gilbert-Elliott state, burst-length bound. Each term narrows the space. The recursion stops when the residual stops registering, which here means when a burst channel measured at the decoder no longer shows dependence between symbols that the code treats as independent.

Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause"*. So the shape is stated in effects: "one physical event becomes several separate correctable events at the decoder," not in a private notation.

*Decoding Tacit Knowledge*, read directly: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* That is exactly the form of the packet in `08`: what you would expect to see if the shape claim were true on a burst channel.

## 3. What licenses a name: the ground, or a provenanced import

Two things, both outside the shape:

1. **The ground settles it.** Formula step 5: *"the ground settles it. Verified only by what pays."* Here: a block error rate curve on a declared channel family, measured by a reader who can reproduce it.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test.

*They're Scanning Books*, read directly: *"The real import is not a new term in the existing space. It is a new dimension of the space."* Also: *"A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six."* And: *"Declaring the primitives does not make them neutral. It makes the choice visible."*

Consequence for INF-0022. Interleaving is not a new term inside coding theory; it is a device from the coding frame whose closure differs from the metatheory's. It is imported with provenance (public sources, named authors, dates) and a shadow test (it explains why bursts become separable). Calling it "figure-derived" would be the error the README names; calling it "the framework's prediction of a specific code" would be worse. The figures license the *slot* arrangement must change; coding theory supplies the *filler*.

## 4. The source of a reading does not determine the source of the signal

*The Hard Problem is About Source*, read directly: an instrument reads green and *"cannot comment on the source"*; several paths can create the same reading; *"If several paths create the same behavior, then behavior is a projection with lossy information."* It was *"the spectrometer, not an argument"* that resolved it.

Applied here. A raw bit error rate is a projection. A burst of five bits and five independent bit flips can produce the same BER. Naming the source ("independent errors") from the reading is the metamerism error. The corresponding instrument is not a better code; it is a channel estimator that resolves dependence: an error autocorrelation, a run-length distribution, or a fitted two-state transition matrix. Gilbert (1960) did exactly this, deriving the channel parameters from a success/failure sequence. The lesson is Fig 6 :34: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."* The proto-instrument already exists: error traces from the channel.

*How Intelligence Actually Works*, read directly, sharpens this with indiscernibility: a practitioner can *"define it past the union horizon making it indiscernible from the answer itself"* and *"indiscernibility is not identity."* Two code arrangements can be indiscernible on a raw BER plot and still be different substances. That is why the lineage, not the plot, is the proof (Fig 13 :128-130).

## 5. Q: does "shape, not a name" forbid naming Reed-Solomon or an interleaver?

**No, with a condition.** The README's phrase governs a *missing* primitive, one not held in Γ. Here the question's Γ is the metatheory's six-term substrate plus the public coding vocabulary; interleavers and Reed-Solomon codes are present in the world frame, not missing primitives to be invented. Naming them is a **binding** from the coding frame onto a shape, not the invention of a new kind. What is forbidden is presenting the binding as figure-derived or as import that moves the wall inside the metatheory (Fig 6 :25: *"An import adds no atom to the world."*).

The correct form is therefore:

> Shape (figure-derived): break the shared pool; arrange at the symbol scale; mark erasures; price against a measured channel.
> Binding (provenanced, not figure-derived): a λ-way interleaved symbol code, with λ and the code family chosen by measurement on the actual channel.
> Gap (stated): no figure line selects a unique code for a given family.

This is the same narrowing the exemplar applied when it corrected "the framework returns a shape, not a name" to "the shape-not-a-name rule governs missing primitives, not the selection of atoms already held." I record the correction here rather than repeating the overstatement.

## 6. Two further consequences

**Prestige is not action.** From *The Recursive Self-Improvement Trap*, read directly: *"Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A code that is famous, widely deployed or heavily cited is not thereby right for a measured channel. The public venues in `03_public_contact_points.csv` give a claim a budget to be tried; they do not settle it.

**This audit is a simulation, not a ground reading.** Same essay, read directly: *"LLMs can quickly simulate an approximate answer/output with the formula"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* The article's own caveat: outputs *"could never be verified if the solutions presented were not contrived to fit the formula."* So `01` and `09` are simulated derivations, checked for internal consistency against the figures. They are **not** a test of any coding strategy. No BER curve was measured here.
