# What "shape" means for this question

Sources read 2026-11-23. Framework sources in the local project, plus three essays by Isaiah N opened directly.

1. `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md`
2. `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`
3. `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md`
4. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the (Isaiah N, 2026-10-02)
5. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap (Isaiah N, 2026-11-19)
6. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source (Isaiah N, 2026-08-28)
7. `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md`

## 1. A shape is a constraint, not a filler

The figures README states the limit: the framework returns "what a missing thing would have to look like (a shape, not a name)". Fig 9 :32: "you get a kind of thing, never the answer itself". Fig 5 :61-64: "THE TERM MOST WORTH REFUSING MAY NOT BE IN THE LIBRARY AT ALL. A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."

From *The Library of Babel*: "You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."

For INF-0088 a shape is the set of constraints any acceptable combining rule must satisfy, stated before a numeric rule is available. "Keep residuals per slot and infer causal structure before fusing" is a shape. "Use weights 0.5, 0.3, 0.2" is a name, and the figures do not license it here.

## 2. How the shape is obtained for this question

- *Library of Babel*: "If you don't know the right terms to search for, you will have to use the existing vocabulary you do know that is closest to the words that you wish to describe and grasp the shape of." For this question the closest known vocabulary is the data-fusion literature's distinction between complementary, redundant and cooperative sources (Castanedo 2013, opened 2026-11-23), because it is already a structural distinction rather than a coefficient.
- Fig 6 :30: "The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause." The residual is described as "the system's reading failed to resolve on this slot, and three frames disagree about it", not as "the Kalman gain is misconfigured".
- Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." *Library of Babel* says the same thing in its own words: "Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually". The three-source conflict is a bundle of at least two questions: causal structure and estimate combination.
- *Library of Babel* on stopping: "You will know that you are done because the finish line will also be the starting place, as there is nowhere else to search and nothing else that can describe the answer better." Here the stop is the shape plus its refuters, with the numeric weights left open.

## 3. What would license a name

Only two things, both outside the shape itself:

1. **The ground settles it.** `THE_FORMULA.md` step 5: "the ground settles it. Verified only by what pays. A gate is not the ground." A numeric weighting rule is licensed when a ground-scored comparison pays for it on a new task.
2. **A provenanced import from a frame whose closure differs.** Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 import has a source gate (provenance) and a shadow test (explains a gap). If we import inverse-variance weighting from psychophysics, it must be stamped as such and must explain the residual it was brought in for.

*The Hard Problem is About Source* gives the reason an import needs an instrument: "If several paths create the same behavior, then behavior is a projection with lossy information." An instrument that reads green "cannot comment on the source". Likewise a fused output cannot say which source produced it; that needs provenance, not a better blend. And "It was proven wrong not by argument, but by the arrival of a better instrument." For INF-0088 the better instrument is a ground-scored experiment that discriminates among candidate combining rules.

## 4. Why the record's likely answer is the forbidden error

The natural answer to "how should systems combine conflicting sources?" is a single formula with three weights. That is exactly the flat-formula collapse. Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." The bonds here are typed and asymmetric: a tool is an *instrument of* a measurement, a user judgment is *about* a question, a parameter is a *prior over* history. A three-weight sum records the ingredients and not the arrangement.

It is also the metamerism error. Several distinct source configurations can produce the same fused output. Naming one source as the cause of a reading, without an instrument that discriminates among sources, is a source named from a projection. *The Hard Problem is About Source*: "An instrument that can't distinguish these cases demonstrates its own inadequacy."

## 5. Q: does "shape, not a name" forbid giving a weighting rule at all?

**Answered with a correction to my own first reading.** The README's phrase is "what a **missing** thing would have to look like (a shape, not a name)". The subject is a primitive not held in Γ. In INF-0088 the numeric weight is not a primitive held in the framework's six-term set either, so the rule applies with full force: the framework can say what the weight must satisfy (per slot, ground-ranged, independence-corrected, refusable) but not what it is. It cannot name the missing thing, "because naming it would mean already holding it" (Fig 13 :134). This is an honest `gap` at the numeric level, not a refusal to answer the whole question.

I initially overstated this as "the framework refuses all combining rules". **Retracted.** The framework refuses the *coefficient*, not the structural constraint. Both readings are kept visible so the correction is checkable.

## 6. Two consequences for this solution

**Prestige is not action.** From *The Recursive Self-Improvement Trap*: "Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige." A prior that is large, well trained and widely trusted is a budget to try the rule. It is not evidence that the rule is right. Neither is the number of people who agree with it (Fig 7 :35, "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes.").

**My own audit is a simulation, not a ground reading.** Same essay: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too... However, the truly testable output would need to be derived from the real architecture or working the formula yourself." So `01_figure_grounded_audit.md` is a simulated derivation, checked for internal consistency against the figures. It is **not** a test of the combining rule and must be labelled as such. It cannot settle anything it reports on.
