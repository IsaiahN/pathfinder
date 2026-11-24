# What "shape" means for this question

**Mode: `general`.** A shape is a constraint that can be stated before the thing that satisfies it can be named. No ground reading is claimed.

## Sources opened 2026-11-22

1. `FRAMEWORK/reference/FIGURES_README_canonical.md` (local canonical usage rule)
2. `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local verbatim figures)
3. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the, Isaiah N, "The Library of Babel: Locating The Book of Books", Oct 2 2026
4. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source, Isaiah N, "The Hard Problem is About Source", Aug 28 2026
5. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context, Isaiah N, "Decoding Tacit Knowledge: Why Context, Subtext, & Pretext Matter", Nov 10 2026
6. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap, Isaiah N, "The Recursive Self-Improvement Trap", Nov 19 2026

---

## 1. A shape constrains, it does not fill

The canonical README states the limit: the framework returns "what a missing thing would have to look like (a shape, not a name)". Fig 9 :32: "you get a kind of thing, never the answer itself". Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it."

From *The Library of Babel*, opened this session: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."

For CMP-0038 the shape is therefore **not** a named test suite, not a named benchmark, and not a claim that a particular model generalizes. It is the set of constraints any valid generalization test must satisfy: sealed anchor, low-overlap conditions, per-condition residual, round-trip gap, enumerated habitat, blind verifier, candidate verdict.

## 2. How the shape is obtained here

- *Library of Babel*: start from the vocabulary closest to the residual and recurse. "With each new term gained, you are able to narrow the space by definition and deepen your vocabulary." Here the starting terms are residual, ground, anchor, habitat and round trip.
- The question itself is the tether. *Library of Babel*: "This anchor is provided by your own question". Fig 8 :53: "Residual first, frame second." The residual was described before any field was chosen, so the field (model validation research) did not hand us the verdict.
- Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause." The effect here is a residual that stays small as conditions change, not "accuracy" and not "robustness" as those words are used in different subfields.
- *Decoding Tacit Knowledge*: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." So stage 1 of the outreach is a description of what a failed transport test would look like, not the framework.

## 3. What licenses a name

Only two things, both outside the shape itself.

1. **The ground settles it.** `THE_FORMULA.md` step 5: "the ground settles it. Verified only by what pays. A gate is not the ground." For CMP-0038 that means an actual deployment observation under a genuinely new condition, sealed in advance.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23), with a source gate and a shadow test. The five world sources in `09_watson_answer.md` are imports of this kind: they arrive from ML and medical statistics, and their provenance is recorded rather than hidden.

*The Hard Problem is About Source* gives the discriminator we do not yet have: an instrument that reads green "cannot comment on the source", and "If several paths create the same behavior, then behavior is a projection with lossy information." A low in-sample residual can come from genuine structure or from memorised historical detail. The reading does not determine the source. "An instrument that can't distinguish these cases demonstrates its own inadequacy." The transport test is that discriminator in shape form; its instrument is the sealed low-overlap condition, not an argument.

## 4. Why the stop is honest

*The Library of Babel* on stopping: "the finish line will also be the starting place". The other case: if the final search fails, "the nature of your question was unanswerable, or malformed. Perhaps your problem was a bundle or conflation of several problems masquerading as one?" This is the reading behind `06_isomers_and_order.md`: "fit" and "transport" are a union of two conditions, not one hard question.

The canonical README adds: the framework stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." Here the stop is: no instrument was run, so the verdict is a candidate shape, not a result.

**Correction to my own §3.** I first wrote that "a name is forbidden" for any slot. That overstates the rule. The README's phrase governs a *missing* thing, a primitive not held in the library. Here the question does not ask us to name a missing primitive; it asks for the shape of a test. So the correct statement is narrower: naming a particular benchmark or model as *the* answer would be a binding from the validation frame, not a derivation, and it must be provenanced as such. The prohibition is on presenting a binding as a derivation, not on naming held things. Both readings are recorded so neither is quietly lost.

## 5. Prestige is not action

From *The Recursive Self-Improvement Trap*, opened this session: "Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."

A validation claim does not become better because a well-known group endorses it. The ask in `02_outreach_email.md` gives the claim a budget to be tried and requests a refutation. It does not collect names.

## 6. My own audit is a simulation, not a ground reading

Same essay: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." And: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... the truly testable output would need to be derived from the real architecture or working the formula yourself."

So `01_figure_grounded_audit.md` is a simulated derivation checked for internal consistency against the figures. It is not a validation experiment and cannot settle anything it reports on. No benchmark was run and no model was deployed.
