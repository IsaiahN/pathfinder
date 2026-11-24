# What "shape" means for INF-0062

**Mode: `general` for the definition, `specified` for its application to this question. Simulated derivation, not a ground reading.**

## Sources actually opened for this file

1. `FRAMEWORK/reference/FIGURES_README_canonical.md` (local, read 2026-11-23).
2. `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local, read 2026-11-23).
3. Isaiah N, *The Library of Babel: Locating The Book of Books*, https://adventuresinml.substack.com/p/the-library-of-babel-locating-the (opened 2026-11-23).
4. Isaiah N, *The Hard Problem is About Source*, https://adventuresinml.substack.com/p/the-hard-problem-is-about-source (opened 2026-11-23).
5. Isaiah N, *The Recursive Self-Improvement Trap*, https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap (opened 2026-11-23).

**Gap, stated honestly:** five of the eight essays named in the exemplar were not opened in this run (*Decoding Tacit Knowledge*, *How a Society of Agents Would Work*, *They're Scanning Books When They Should*, *How Intelligence Actually Works*, *Arrival of the Fittest: The Tether*). They are not quoted or cited here. The canonical definition of shape is available locally in the figures README and the figure text, so the derivation does not depend on them, but the essay grounding is narrower than the exemplar's.

---

## 1. A shape is a constraint, not a filler

The canonical usage rule says the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and then stops where instruments stop discriminating, recording the lineage. Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :133: *"A system with a closure can answer that before it searches, and what it returns is a shape rather than a name."*

From *The Library of Babel*, opened this session: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

So for this question a **shape** is the narrowed form of an account you can state before you can rank the candidates. It constrains; it does not fill. "An account that keeps residuals per slot" is a shape. "MDL is the best formal account of learning" is a name plus a verdict, and neither is licensed here.

## 2. How the shape is obtained

- *Library of Babel*: use the vocabulary already held that is closest to the thing, then *"With each new term gained, you are able to narrow the space by definition and deepen your vocabulary."* Applied here: start from residual, slot, support, cost and ground, which the figures already give, and let the candidate accounts be located by proximity to those terms.
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect"* / *"rather than the cause."* So describe the failure of sparse, noisy, uneven data in effects (a live slot buried in an average, a prior that cannot be distinguished from lock-in, an unreached term mistaken for an absent one) before naming PAC, Bayes or MDL.
- *The Hard Problem is About Source*: *"If several paths create the same behavior, then behavior is a projection with lossy information."* Several accounts can produce the same predictions on a benchmark; the benchmark reading does not identify which internal account produced it. The essay's resolution was instrumental, not argumentative: *"It was proven wrong not by argument, but by the arrival of a better instrument."* That is why F6 and F5 in the audit ask for a ground and an honest unreached verdict rather than a ranking.
- *Library of Babel* on stopping: *"the finish line will also be the starting place."* Here the stop is reached when the residual stops registering against the ground, and the four refuters in `01` are the record of where that might happen.

## 3. What licenses a name

Only two things, both outside the shape itself.

1. **The ground settles it.** Fig 13 :139: *"narrowing gets you close while the ground decides."* Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* A comparison of named accounts on a real sparse-data task, with a ground separate from the benchmark that designed them, would be such a settlement. None was run in this session.
2. **A provenanced import from a frame whose closure differs**, with source gate and shadow test (Fig 6 :11-14). Bringing in sample complexity or value of information is an import. It is licensed only if the record says where it came from and what gap it explains. `10_source_ledger.csv` is that record for this folder.

Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."* The framework can say the current account lacks a per-slot residual or a refusal operator, but it cannot derive the name of the replacement theory.

## 4. The shape for this question

Bind it as an ordinary term (Formula, "Direction"):

> An adequate formal account of learning under sparse, noisy, unevenly informative data keeps R indexed by slot and never aggregates it away; admits a term only on the description-length bargain with SUPPORT, REACHABILITY and NOVELTY as a product; prices bits and actions in separate currencies; distinguishes unreached-at-budget from underivable-in-principle; reports "unreached" rather than minting from silence; and is settled by an anchor that does not move when a frame pushes on it. The framework does not rank the named candidates. It names MDL as the admission test and leaves the rest open.

This is `specified`, not `grounded`. It is a constraint any candidate must satisfy, not a measurement of which candidate does.

## 5. Why this is not an apophenia result

The direction discipline matters here. It would be easy to pick MDL, PAC, Bayesian inference and active learning first and then find figure lines that fit each. Fig 9 :27-28 forbids that order: *"describe it before you go looking, or any frame you pick will seem to fit."* The census in `01` was written before the world search, and the figures decided the shape. The world sources were then used as secondary corroboration and one genuine tension was found (value of information, resolved by re-census in F4). A conflict sends the derivation back to the census; it never flips the verdict.

## 6. Prestige and the status of this document

*The Recursive Self-Improvement Trap*, opened this session: *"Prestige must never be allowed to validate an action directly."* And: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action."* A famous author, a high citation count or a well known venue cannot decide which formal account is best. Only the ground can.

The same essay states the standing of this document: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* So `01` and this file are simulated derivations checked for internal consistency against the figures. They are not tests of the claim and cannot settle it.

## 7. Correction log

| earlier reading | status |
|---|---|
| "Shape, not a name" forbids naming any formal account | **Narrowed.** It governs a missing primitive (Fig 13 :135). Naming MDL here is a statement about what the framework incorporates (Fig 5 :45), not the derivation of a new primitive. |
| Eight essays ground this file | **Corrected.** Only three were opened this session; the other five are not cited. Recorded as a gap rather than hidden. |
| World-source agreement corroborates the verdict | **Narrowed.** MDL, PAC, sample complexity and active learning share one learning-theory pool. Agreement within a pool is one witness (Fig 2 :40). |
