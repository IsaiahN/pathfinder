# What "shape" means for this question

**Mode: `general`.** This is a canonical reading of "shape" from the essays, checked against the figures. It is a simulation, not a ground reading (see §6).

**Which essays were actually opened this session (2026-11-24).** Three were re-opened and are quoted below: *The Library of Babel: Locating The Book of Books* (Isaiah N, adventuresinml Substack, Oct 2 2026), *The Hard Problem is About Source* (Isaiah N, adventuresinml Substack, Aug 28 2026), and *The Recursive Self-Improvement Trap* (Isaiah N, adventuresinml Substack, Nov 19 2026). The other five in the exemplar's set (*How Intelligence Actually Works*, *Decoding Tacit Knowledge*, *How a Society of Agents Would Work*, *They're Scanning Books*, *Arrival of the Fittest: The Tether*) were **not** re-opened in this run. Where this file uses a phrase from them it is marked as inherited from the calibrated exemplar and is not treated as an independently verified quote. This is recorded so the reader knows which agreements are fresh and which are carried.

## 1. A shape is a constraint, not a filler

The canonical figures README states the limit: the framework returns "what a missing thing would have to look like (a shape, not a name)". Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence", and the following line notes it "cannot say which primitive is missing, because naming it would mean already holding it."

From *The Library of Babel*, opened this session: "This means that you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."

So a **shape** is the narrowed form of an answer you can state before you can name it. It constrains; it does not fill. For this question:

- `safe at level L because tests X, Y, Z passed` is a **name** (a specific certificate).
- `ground-ranged, per-slot, low-overlap, threshold-bound, maintained` is a **shape**.

The question asks for the name. The framework can supply only the shape, and that is a finding, not a refusal to answer.

## 2. How a shape is obtained

- *The Library of Babel*: "If you don't know the right terms to search for, you will have to use the existing vocabulary you do know that is closest to the words that you wish to describe and grasp the shape of." Then: "With each new term gained, you are able to narrow the space by definition and deepen your vocabulary. It's this recursive process that will help you converge on the answer." Applied here: start from the closest held vocabulary (evaluation, residual, anchor, habitat, threshold) and narrow toward what a certificate would have to be, rather than picking a test suite first.
- Fig 6 :30: "The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause."
- Inherited from *Decoding Tacit Knowledge* (not re-opened this session): "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Marked as inherited, not freshly verified.
- *The Library of Babel* on steering: "The books that you are returning in your searches need to be tested or ranged against the problem you want answered in order to steer the direction of the next search." Its anchor: "you need something to tether and anchor you to reality, the same way a mountaineer needs a tether when rappelling or climbing." For this question the anchor is deployment outcomes at level L, not benchmark scores.
- On stopping: "you will know that you are done because the finish line will also be the starting place, as there is nowhere else to search and nothing else that can describe the answer better." Here the stop is reached when the residual stops registering against the ground, not when a checklist is complete.

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: "the ground settles it. Verified only by what pays. A gate is not the ground." From *The Hard Problem is About Source*, opened this session: "It was proven wrong not by argument, but by the arrival of a better instrument." The spectrometer, not a further argument about green, resolved the metamerism case.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test. For safety, an import would be a method from another field (safety cases from aviation and nuclear engineering, per Lee et al., or subgroup discovery from medical imaging, per Oakden-Rayner et al.) carried with its provenance and checked for whether it explains the residual here.

*The Hard Problem is About Source* gives the mechanism that matters most for safety evaluation: "If several paths create the same behavior, then behavior is a projection with lossy information (it cannot define consciousness in full)." And: "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it." A benchmark that reads "pass" for a system that achieved the pass by a spurious correlate is exactly such an instrument. Fig 2 :37-38 puts the framework version: "instruments can be wrong on axes they do not measure."

## 4. The ground and the source problem

A safety score is a reading. It does not comment on its source. Three different deployments can produce the same pass rate: one that is robust, one that exploited a spurious correlate in the harness, and one whose monitoring channel has gone stale and simply stopped reporting harm. The reading cannot discriminate among them. That is the metamerism error applied to safety evidence.

The world literature makes the same point in its own vocabulary. D'Amour et al. (JMLR 2022), opened this session, write: "An ML pipeline is the full procedure followed to train and validate a predictor. Such a pipeline is underspecified when it can return many distinct predictors with equivalently strong test performance." Lee, Zhu et al. write that AI systems' "evaluation often proceeds without a fixed ground truth" and that "the logic of assurance for AI should be discovery-driven, continually updated."

So the safe conclusion is not "tests are useless." It is: a reading cannot be promoted to a source claim without an instrument that discriminates sources, or a ground reading that settles the case. Until then the slot stays open, and the record of the route is what makes the stop checkable.

## 5. Answer to the shape question

**What shape must sufficient evidence for autonomy level L have?** Five constraints, each with a figure anchor and a refuter in `01_figure_grounded_audit.md` §3:

1. **Ground-ranged.** It must range against deployment outcomes at L (Fig 2 :29-30, :36), not against a substituted harness (Fig 11 :70).
2. **Per-slot.** It must index the live slots where harm can occur, including rare and cascaded cases (Fig 1 :19-22).
3. **Low-overlap.** At least two instruments that do not draw on the same evidence (Fig 2 :31-32), because agreement from one pool is one witness (Fig 2 :40; Fig 7 :13).
4. **Threshold-bound.** Acceptable risk at L is written down as an ordinary term before the run and can accrue a residual (Fig 12 :87; Fig 5 :65-66; Fig 3 :27).
5. **Maintained.** The channel to the ground is kept reachable; a green metric can mean loss of contact (Fig 10 :24-28; Fig 11 :63-64).

**What is refused.** A content-free, once-delivered certificate that is sufficient in general. The framework returns a shape, not a name (Fig 9 :32). Naming the content of a sufficient package for a specific system requires a ground reading that this run did not perform.

**Does the framework here commit the error the README forbids?** No, provided the five constraints are kept as constraints. It becomes the forbidden error the moment someone reads them as a checklist whose completion settles safety. Fig 5 :69-70: "settling is necessary for a term to be composed over, and it is not sufficient." Fig 4 :30 requires the round trip and the measured gap `R_T`, which `11_audit.md` enumerates qualitatively.

## 5b. Correction to my own §3 and §5

In an earlier draft I wrote that "the framework cannot name any evidence at all." That overstates the rule. The README's phrase governs a **missing** thing, a primitive not held in Γ. Evaluation, measurement, and operational data are not missing primitives; they are terms the safety-case literature already holds. What the framework forbids here is promoting one of those held terms to the status of ground-settled sufficiency without a ground reading and a provenanced import. The correction narrows the claim: the slot stays open not because evidence is unspeakable, but because the certificate a frame can name is a preference, not a term that has paid at the ground (Fig 5 :62-66). Both the original and the narrowed form are recorded so neither is silently lost.

## 6. Consequences for contact and for this document's own standing

**Prestige is not action.** From *The Recursive Self-Improvement Trap*, opened this session: "Prestige must never be allowed to validate an action directly." And: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." A safety claim endorsed by a famous lab or a large review panel has been funded, not settled. The legitimate ask is to give the claim a budget to be tried against the ground, and to report the failure if it fails.

**This document is a simulation, not a ground reading.** Same essay: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." What follows from that is exactly the discipline applied elsewhere in this folder: state the mode, write the refuter before the run, and do not pool later agreement as corroboration (Fig 2 :40).
