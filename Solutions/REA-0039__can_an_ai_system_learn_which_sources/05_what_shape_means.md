# What "shape" means for this question â€” canonical reading from the essays

Sources read 2026-11-23, all by Isaiah N unless noted:

1. https://adventuresinml.substack.com/p/how-intelligence-actually-works
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
4. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work
5. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
6. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should
7. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether

The local canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; the authoritative quote set is `FRAMEWORK/reference/03-FIGURES_TEXT.md`.

## 1. A shape is a constraint, not a filler

The canonical rule: the framework returns *"what a missing thing would have to look like (a shape, not a name)."* Fig 9 :32: *"you get a kind of thing, never the answer itself."* From *The Library of Babel*: *"You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

A **shape** is the narrowed form of an answer you can state before you can name it. It constrains; it does not fill. For this question:

- **A shape:** a trust assignment that is per source, ranged against a non-updating ground, independence-aware, provenance-carrying, and refusable.
- **A name:** "Source S is trustworthy," a numeric trust score, or a fixed whitelist. All three are names where the framework gives a shape.

The distinction matters because the question asks "which sources deserve trust," which invites a list of names. The figures forbid the list as the output; they permit the shape that any legitimate list would have to satisfy.

## 2. How a shape is obtained

- *Library of Babel*: use the vocabulary you already have closest to the thing, look for recurring new terms that overlap with it, recurse: *"With each new term gained, you narrow the space and deepen your vocabulary."*
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."* So describe the residual ("a claim that keeps failing contact with a measurement") rather than the cause ("a biased publisher").
- *Decoding Tacit Knowledge*: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* For source trust, the checkable description is: what would we expect to observe if this source were tracking ground rather than pool?
- *Library of Babel* on stopping: the answer is reached when *"the finish line will also be the starting place"* and you have *"composed the answer through the process of locating it."*

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: *"the ground settles it. Verified only by what pays."* The README: the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test.

*They're Scanning Books* sharpens this for source trust specifically: *"Declaring the primitives does not make them neutral. It makes the choice visible."* And the decisive line: *"Proof of provenance does not remove the priors. It makes them auditable, which is the most that honesty allows when the priors are unavoidable."*

That is the honest core of this solution. An AI cannot remove every inherited prior by declaration; it can make them auditable. The Archbishop of Canterbury-style mistake here would be to declare a source "neutral" because it appears in a trusted list. Visibility is not neutrality.

The same essay gives the inheritance mechanism: *"model-generated text is a compression of a model's reconstruction, so training on it is decompressing a decompression, a copy of a copy. Each generation carries less original cognition and more prior-model reconstruction. The decay is generational recompression loss."* Bias inheritance is generational recompression loss, and it is a shape we can state without naming which particular prior is inherited.

## 4. Why "which sources deserve trust" is a source question, not a behavior question

*The Hard Problem is About Source* gives the mechanism. Metamerism: an instrument reads green and *"cannot comment on the source."* One green light, or yellow plus blue, or RGB, or CMYK, or a scheme not yet discovered can all produce the same reading. *"If several paths create the same behavior, then behavior is a projection with lossy information."* And: *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* It was the **spectrometer**, not an argument, that resolved it.

Applied here: a source's output does not determine its source. A fluent, well-calibrated-looking answer can come from ground contact or from a shared pool. A trust score built from the output alone is a reading that cannot comment on the source, which is Fig 9 :51 in the essays' idiom: evidence about the maker is the wrong channel. What is owed is a discriminating instrument (independence measurement, provenance, an outside frame), not a name.

*The Recursive Self-Improvement Trap*: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* A trust system cannot validate its own trust calibration. This is the F3 gap in `01`.

## 5. Q answered: what shape must a trustworthy-source answer have?

Nothing in the framework returns a list of names. The framework returns, for this question:

1. **Per-source residual, not a global score** (Fig 1 :19, :28).
2. **A ground that does not update** (Fig 2 :29, :45).
3. **Independence measured, not assumed** (Fig 2 :31, :42; Fig 6 :53).
4. **Provenance that separates convergence from adopted import** (Fig 8 :51).
5. **A negation operator so a frame can be refused, not only downweighted** (Fig 12 :140).
6. **A declared limit on self-certification** (Fig 8 :37).

A particular source name is licensed only by the ground settling a claim from that source, or by a provenanced import with a shadow test. Until then, naming a source "trustworthy" is the searcher's own contribution and must be recorded as such. Prestige is explicitly not that license: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*

## 6. Correction to my own Â§3â€“Â§4 scope

I initially framed "shape, not a name" as if it forbade all source-level judgment. It does not. The README's phrase governs a *missing* primitive, one not held in Î“. For this question the missing thing is the discriminating instrument, not the source list. So the correct reading is: we can state the **shape** of a trustworthy source relation (the six constraints above) while refusing to name which sources satisfy it until ground contact is shown. "Shape, not a name" is not "no judgment ever"; it is "no name before the ground pays." I keep this correction visible rather than erasing the earlier overstatement.

## 7. Two consequences for this solution

**Prestige is not action.** A source-trust system that ranks by reputation reproduces the named collapse: *"the prestige loop confirms itself. The high-prestige person is believed because they are high-prestige. The action is assumed to work because the person is believed. The ground is never consulted."* The legitimate ask is to give a claim a budget to be tried and let the ground settle it (Fig 10 :93).

**My own audit is a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap*: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* So `01` is a simulated derivation, checked for internal consistency against the figures. It is **not** a test of the claim and must be labelled as such. It cannot settle anything it reports on.
