# What "shape" means for this question

Sources read 2026-11-22, all framework-author essays unless marked. Each was opened; quotes are from the pages, not from memory.

1. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the (Isaiah N, 2026-10-02)
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap (Isaiah N, 2026-11-19)
3. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source (Isaiah N, 2026-08-28)
4. https://adventuresinml.substack.com/p/how-intelligence-actually-works (listed in the exemplar and the metalaws note; not re-fetched this session, so no quote is taken from it here)
5. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work (same status as 4)
6. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context (same status)
7. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should (same status)
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether (same status)

Where 4 to 8 are concerned, I rely only on the framework-local `60_FIGURES_AS_METALAWS.md` and the canonical figures README, both read this session, and I say so. This is the honesty rule from the exemplar: do not cite what you did not read.

## 1. A shape is a constraint you can state before you can name the instance

The canonical figures README states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)."* Fig 9 :32: *"you get a kind of thing, never the answer itself"*. Fig 13 :134-135: *"Unreachable is a verdict here, not a silence, It cannot say which primitive is missing, because naming it would mean already holding it."*

From *The Library of Babel*: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

For CMP-0090 the shape is therefore **not** "models do X" and **not** "models cannot do X." It is the set of constraints any mechanism-credit would have to satisfy:

- the residual is per slot, not a global accuracy (Fig 1 :19, :22);
- it stays down when the ground is pushed by a frame sharing no evidence pool with training (Fig 2 :29-32, :40);
- the difference is carried by the arrangement (bond), not the ingredient set (Fig 12 :5, :94);
- a benchmark is a substituted habitat, so a solve proves wiring, not capability (Fig 11 :70);
- more of the same distribution adds no new atom (Fig 8 :32).

That is a shape. "Model class M has mechanism" is a name, and the framework does not supply it.

## 2. How the shape is obtained

*The Library of Babel* gives the search discipline: use the vocabulary you already have that is *closest* to the thing, look for recurring new terms that overlap or correlate with it, recurse. *"With each new term gained, you are able to narrow the space by definition and deepen your vocabulary."* And the stop condition: *"The books that you are returning in your searches need to be tested or ranged against the problem you want answered in order to steer the direction of the next search."*

Applied here, the closest available vocabulary was accuracy, interpretability, robustness and causality. The recurring new terms that narrowed the space were **per-slot residual**, **habitat substitution**, **bond versus ingredient** and **independence**. The question then resolved into three (Fig 9 :4-5 *"Split it rather than search"*), and *The Library of Babel* names that exact case: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* So the residual is described as an effect (prediction stops paying when the ground is pushed), not as a cause (a particular internal circuit).

## 3. What licenses a name, and why accuracy is not one

Only two things, both outside the shape:

1. **The ground settles it.** `THE_FORMULA.md` step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* In this question the ground is an intervention or deployment environment, not a test split.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and shadow test. Here that would be a causal structure, a new measured variable or an experimental protocol brought in from outside the training frame, recorded as such.

*The Hard Problem is About Source* supplies the mechanism for why accuracy cannot license the name. An instrument reads green and *"it cannot comment on the source"*. Several underlying causes create one reading: *"If several paths create the same behavior, then behavior is a projection with lossy information (it cannot define consciousness in full)."* A model's in-distribution accuracy is exactly such a projection: mechanism, shortcut and artifact can all produce it. *"An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it."* The resolution came *"not by argument, but by the arrival of a better instrument"*, here an intervention.

## 4. The split is part of the shape, not a detour

Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* The question's two halves overlap: a model can hold a genuine mechanism in one slot and a Clever Hans shortcut in another. So the shape of the answer is a **triple verdict** (reachability, bond, habitat), not a single yes or no. This is why `07_the_tether_answer.md` keeps three verdicts separate and never averages them.

## 5. Why the derivation cannot settle the question it reports on

*The Recursive Self-Improvement Trap*: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed."* And: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post ... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."*

So `01_figure_grounded_audit.md` is a **simulated derivation checked for internal consistency against the figures**, not a measurement of any model. It reports the shape a check would have to take. It cannot tell you whether any particular model has a mechanism. That would require running the intervention.

The same essay on agreement: *"You may all agree and be wrong. You may set your clock to someone else's, who was setting your clock to yours, and be off by many deviations over time."* This is why the second seat in `11_audit.md` is declared a mirror sharing one evidence pool, not a corroborating witness.

## 5b. Correction to my own §3

I initially wrote that only the ground or a provenanced import can license a name, and nearly treated "feature importance" as a weak third route. **Retracted.** Feature importance reports which ingredients a model uses; it does not report the bond. Fig 12 :5 says *"The bond is the rest of the information, and it is the half nothing was recording"*, and :94 *"The arrangement is the substance."* An importance map is still a projection, and *The Hard Problem is About Source* warns that a projection *"cannot comment on the source."* The correction is kept here rather than erased, matching the exemplar's retraction discipline.

A second narrowing: the shape-not-a-name rule governs a **missing** primitive. The bond vocabulary (sequence, production, comparison, negation) is already in the Operators table; naming the relation a model holds is a binding onto a held atom, not the invention of a new one. What stays forbidden is certifying a model class without a ground reading, which is the same metamerism error one level up.

## 6. Two consequences for outreach

**Prestige is not action.** *The Recursive Self-Improvement Trap*: *"Prestige must never be allowed to validate an action directly ... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* The ask in `02_outreach_email.md` gives the criterion a budget to be tried; it does not ask anyone to endorse it.

**A failure is more useful than an endorsement.** Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A recipient's refutation of the criterion is worth more than their agreement, because the latter would be the pool talking (Fig 2 :20-21).
