# What "shape" means for this question: canonical reading from the eight essays

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see §6). All eight essays were opened on 2026-11-22.

## Sources read

1. https://adventuresinml.substack.com/p/how-intelligence-actually-works
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
4. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work
5. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
6. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should
7. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether
Plus the local `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/03-FIGURES_TEXT.md`.

## 1. A shape is a constraint, not a filler

The figures README states the limit: the framework returns "what a missing thing would have to look like (a shape, not a name)". Fig 9 :32: "you get a kind of thing, never the answer itself". Fig 13 :134: "Unreachable is a verdict here, not a silence,".

From *The Library of Babel*: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."

So a **shape** is the narrowed form of an answer you can state before you can name it. It constrains; it does not fill. For this question:

- `a unique directed causal graph over the network` is a **name**.
- `the class of directed structures compatible with the observed independences over the measured nodes, plus the list of readings that would discriminate within that class` is a **shape**.

The shape is not a euphemism for a guess. It is a set with a boundary and a stated test for crossing that boundary. That is exactly what the statistical literature calls a Markov equivalence class or, with latents, a partial ancestral graph, but the figure claim is the structural one, not the statistical formalism.

## 2. How the shape is obtained

- *Library of Babel*: start from the vocabulary closest to the thing, then "connect and correlate combinations of the existence of your known words and their relative proximity to commonly recurring new terms that you are unfamiliar with", and recurse. "With each new term gained, you are able to narrow the space by definition and deepen your vocabulary."
- Fig 6 :30: "The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." Fig 9 :30 and :31: "your words are borrowed too, so describe the effect rather than the cause."
- *Decoding Tacit Knowledge*: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."
- The same essay adds the drift warning: "Two frames that overlap almost completely are 'one frame wearing two names'." That is the exact state of a panel of correlation-only estimators fed the same matrix.
- *How Intelligence Actually Works* gives the stopping rule in terms of the projection: "The recursion converges toward indiscernibility, and indiscernibility is not identity. The projection that no instrument distinguishes from the thing is still a projection, which is why the lineage has to be kept even when the copy is perfect."

For this question the recursion goes: measured correlations (the projection) constrain the skeleton; the independence pattern constrains the v-structures; the equivalence class remains; a known-target intervention or a measured latent node discriminates within it. The shape stops at the class. It does not stop at a single arrow.

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: "the ground settles it. Verified only by what pays. A gate is not the ground." Here, an intervention with a known target whose outcome is read; or an instrument that resolves a formerly hidden source.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50), with a source gate and a shadow test. Here, a structural assumption (linearity, no unmeasured confounding, faithfulness, a known time order) may narrow the class, but only if its source and its failure condition are recorded.

*They're Scanning Books When They Should* sharpens the second point: "A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six." And: "Declaring the primitives does not make them neutral. It makes the choice visible." A causal assumption declared with its provenance is a visible choice. An assumption smuggled in through a loss function is an invisible one.

## 4. Why the unique graph is the specific forbidden error

*The Hard Problem is About Source* gives the mechanism. Metamerism: an instrument reads green and "the instrument is speaking only about what it measured, it cannot comment on the source." It continues: "If several paths create the same behavior, then behavior is a projection with lossy information (it cannot define consciousness in full)." The reading does not determine the source. It was the spectrometer, not an argument, that resolved it.

*How Intelligence Actually Works* states the same thing for artifacts: "The projection of green can't tell you whether it was RGB, CMYK or something else that composed it." And, on provenance loss: "The frame and the photograph are indistinguishable as artifacts, and they carry different warrants. One was taken; one was extracted. And nothing in the image records which."

A correlation matrix is the frame, not the photograph. It was extracted from a causal process by a projection that discarded the direction. Naming a unique causal graph from it is the metamerism error: a source named from a reading, where several sources would give the same reading. What is owed is a discriminator, not a name.

*The Recursive Self-Improvement Trap*: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed to tether the veracity of the output to reality."

## 5. Q for this question: what shape is reachable?

**Answer:** the class plus the discriminator list. Concretely:

- Reachable: a skeleton of candidate edges over the measured nodes, the orientations that the independence pattern forces, the set of graphs still compatible, and a ranked list of additional readings (which node to perturb, which latent to measure, which time resolution to add) by how much each would cut the class.
- Not reachable from the reading alone: a unique edge direction for members of the class; a sign and strength that survive an intervention; the existence or identity of an unmeasured common cause.
- Refusable: the claim that the class is identified is refuted if two members of it behave differently under an available intervention; the claim that it is not identified is refuted if the class collapses under a provenanced assumption that survives its shadow test.

The shape is therefore a **partition of the possible graphs with the cut points named**, not a single graph and not a vague statement that "correlation is not causation."

## 5b. Correction to my own §3 and §4

I overstated "shape, not a name" in the first pass. The README's phrase is *"what a **missing** thing would have to look like (a shape, not a name)."* It governs a primitive not held in the library. The equivalence class here is not a missing primitive; its members are arrangements of already held concepts (nodes, edges, independences). So naming a member of the class is not the invention of a seventh term. It is a **binding** from the causal frame onto held concepts, and it is permitted provided its provenance is stated.

What remains wrong is treating that binding as if the reading itself selected it. The metamerism point in §4 is **not** retracted: several causal sources give the same correlation reading. The reason is the missing discriminator, not a ban on naming structures. Both claims are recorded so neither is quietly lost.

This correction changes the outreach wording. The honest claim is not "no causal graph may ever be named." It is "the reading does not name it; the ground or a provenanced import does."

## 6. Two consequences for outreach

**Prestige is not action.** From *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige." A list of famous correlation-network methods whose reputation is used to settle the causal question is the named collapse, not corroboration. The legitimate ask is a budget to try a discriminator, with the ground settling it.

**My own audit is a simulation, not a ground reading.** Same essay: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself." And the architecture article's own caveat: LLM outputs "must be seen as simulacra" and "could never be verified if the solutions presented were not contrived to fit the formula." So `01` is a simulated derivation, checked for internal consistency against the figures. It is **not** a test of the claim and must be labelled as such. It cannot settle anything it reports on.
