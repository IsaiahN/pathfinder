# What "shape" means for COG-0021

**Mode: `general`.** This is a reading of the canonical essays, not a measurement. Simulated derivation checked against the figures; see section 7.

Sources read 2026-11-22, all by Isaiah N unless noted:

1. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
2. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
3. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
4. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should
5. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
6. `FRAMEWORK/reference/FIGURES_README_canonical.md` (canonical usage rule)
7. `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text)

The other essays in the canonical eight were not opened in this session, so no quotation from them is used here. This is recorded rather than covered over.

## 1. A shape is a constraint, not a filler

The figures README gives the limit: the framework returns "what a missing thing would have to look like (a shape, not a name)." Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence", and :135: "It cannot say which primitive is missing, because naming it would mean already holding it."

From *The Library of Babel*: "You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." And: "With each new term gained, you are able to narrow the space by definition and deepen your vocabulary."

So for this question a **shape** is the form an answer must have before any particular category list is named. It says: there is an invariant kernel, a variable binding, a carrier that is a convention, and a ground that discriminates. It does not say which language has which colour terms, or how much language contributes. `SPACE(???)TIME` is the exemplar's shape; the analogue here is `SHARED KERNEL + VARIABLE BINDING(???)`.

## 2. How the shape is obtained

- *Library of Babel*, on bootstrapping: "If you don’t know the right terms to search for, you will have to use the existing vocabulary you do know that is closest to the words that you wish to describe and grasp the shape of."
- Fig 6 :30: "The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."
- Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause"
- *Decoding Tacit Knowledge*: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."
- *Library of Babel*, on stopping: "You will know that you are done because the finish line will also be the starting place, as there is nowhere else to search and nothing else that can describe the answer better." The paradox: "you have already composed the answer through the process of locating it."

For COG-0021 the search term that narrowed the space was not "language" or "culture" but "bond versus name." Once that distinction was bound, the literature split cleanly: Wang et al. measure relations, Cibelli et al. measure category distributions under uncertainty, Gelman and Roberts measure the convention that carries labels. That is the bootstrapping move the essay describes.

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: "the ground settles it. Verified only by what pays. A gate is not the ground." The README says the framework "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."
2. **A provenanced import from a frame whose closure differs**, with a source gate and a shadow test (Fig 6 :23, Fig 8 :50-52).

*They're Scanning Books* sharpens the second: "The real import is not a new term in the existing space. It is a new dimension of the space." And: "A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six." Also: "Declaring the primitives does not make them neutral. It makes the choice visible."

**Correction to my own section 1.** In the first pass of this file I treated "shape, not a name" as a blanket ban on naming any category structure. That overstates it. The README's phrase governs "what a **missing** thing would have to look like." Colour terms, labels and generics are not missing primitives; they are atoms already present in the world literature. Naming "labels and generics" as the carrier is a **binding** from the language-and-cognition frame, not the invention of a new primitive. What stays forbidden is presenting that binding as a figure-derived result. `01_figure_grounded_audit.md` F6 and the retraction table record the corrected status: figure shape triangulated, specific carrier `single-source`. Both the earlier overstatement and its correction are kept visible.

## 4. The specific error this question invites: naming a source from a reading

*The Hard Problem is About Source* gives the mechanism. An instrument reads green and "the instrument is speaking only about what it measured, it cannot comment on the source." The same reading could come from one green light, from yellow plus blue, from RGB, from CMYK. "If several paths create the same behavior, then behavior is a projection with lossy information." What resolved it was "not by argument, but by the arrival of a better instrument", the spectrometer.

Applied here: a verbal task reads the label. Several different sources could produce the same verbal reading, a genuinely different category, a shifted prototype, or merely a different naming convention. Naming one of those from the verbal reading is the metamerism error. The corresponding spectrometer is a nonverbal discrimination task with uncertainty manipulated, which is exactly what Cibelli et al. use: "the apparent effect of language on color cognition disappears when participants are given a verbal [but not a visual] interference task."

This is why F1 in the audit insists on bonds and relations rather than word inventories: the inventory is the reading; the relation is the source we are trying to discriminate.

## 5. Agreement, convention and the drift trap

*Decoding Tacit Knowledge* is directly on point for this question. It defines culture as "a shared backdrop, Collins's collective tacit knowledge. Its members can hold very different mindsets; what they share isn't a set of beliefs but the backdrop they read each other against." It then notes: "Shared pretext is good for one thing and ruins another. Agreement is the whole point when you're settling what words mean. It's worthless for settling what's true when both sides learned from the same sources."

This is the essay version of Seat Map :163: "High correlation is disqualifying for a verdict and efficient for a convention." It is also the reason the question asks how language and culture *jointly* shape categories: a shared category system is the product of the convention, so finding that speakers agree tells us nothing about whether the categories track anything outside the convention.

## 6. Prestige is not action

From *The Recursive Self-Improvement Trap*: "Prestige must never be allowed to validate an action directly." And: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."

For this question: naming Sapir, Whorf, Levinson, Boroditsky or Lucy gives the claim a budget to be tried. It does not settle whether the shape is right. The source ledger records every author and venue for provenance, never as a verdict weight.

## 7. My own audit is a simulation, not a ground reading

Same essay: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself." Also: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed to tether the veracity of the output to reality."

So `01_figure_grounded_audit.md` is a simulated derivation, checked for internal consistency against the verbatim figures. It is not a test of the shape claim and cannot settle anything it reports on. The status stays `specified` / `candidate` until a nonverbal, source-discriminating ground pays.

## 8. Answer to the "shape" question for COG-0021

**What shape does an answer to "how do languages and cultural practices jointly shape categories" have?**

It is a union compound with four parts: an invariant kernel (shared perceptual and bodily capacities), a variable binding (the relations, not just the names), a carrier that is a convention with recorded provenance, and a ground that is a nonverbal, source-discriminating instrument. It keeps verdicts per domain rather than averaging them. It refuses strong determinism. It describe effects rather than names when crossing languages. It stops at the limit of the instruments and records the human-kinds strain rather than hiding it.

That is a shape. It is not a list of categories, not a percentage, and not a verdict on the Sapir-Whorf debate.
