# The Tether's answer: the best formal account of learning under sparse, noisy, uneven data

**Mode: `specified` on the shape, `general` on the structural constraints. Not `grounded`.** Simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` section 6). No learning system was run and no dataset was measured in this session. This answer cannot settle the question it reports on.

## 1. The residual it answers

We need an account of learning that still says where to look and what to admit when observations are few, corrupted, and very unequally informative. The options are not one hard question. They are a union of overlapping conditions (Fig 9 :57: *"a case in two conditions is not a harder case of either"*), so they are unbundled before searching and answered one loop at a time.

## 2. The shape

1. **Residuals are indexed by slot, never averaged.** Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A global loss near zero with one live slot is a legal state. This is the decisive correction to any pooled-loss account.
2. **A term is admitted by a bargain, not a threshold.** Fig 5 :42: *"The acceptance test is a bargain, not a threshold."* Fig 5 :43: *"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."* Fig 5 :45 names this as minimum description length, Rissanen 1978. The three guards (support, reachability, novelty) are a product, and support means *"some s"* carries positive mass, not all s and not the mean.
3. **Two currencies stay apart.** Fig 12 :125: *"A composition costs in two currencies, and they do not add."* Bits price the description, actions price finding out whether it holds. Value of information, which prices actions in one scalar, cannot be added to the bit price without losing information on one axis.
4. **Unreached is a verdict, not a silence.** Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."* Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* For a data-poor slot the honest report is unreached at this budget. The remedy is more search or a provenanced import, not minting from silence.
5. **The ground settles; agreement does not.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :40 disqualifies agreement from a shared evidence pool. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*
6. **Capability is agent and habitat together.** Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."* Sparse data is a contact property of the habitat, not an internal defect of the learner. A synthetic harness proves wiring, not capability.
7. **The framework does not name a winner.** It names MDL as its admission test, gives sample complexity the budget role, gives Bayesian updating the weighting role, and gives active learning the habitat role. "Best in the world" needs a ground settlement that was not performed here.

## 3. What it explicitly does not say

- Not that MDL, PAC, Bayesian inference or active learning is the single best account. That is a `general`-mode verdict with no measurement behind it.
- Not that more data always helps. Importing against a budget limit adds an atom that was not needed (Fig 6 :52).
- Not that a benchmark result settles anything. *"A test harness is a substituted habitat"* (Fig 11 :70).
- Not that noise and sparsity are one condition. They are a union to be unbundled.
- Not `grounded`. No source-discriminating experiment was run.

## 4. What would settle it - the ground

A source-discriminating comparison, not a further argument. *The Hard Problem is About Source*, opened 2026-11-23: an instrument reads green but *"cannot comment on the source"*; *"It was proven wrong not by argument, but by the arrival of a better instrument."* Here the corresponding tests are the refuters written in advance in `01` section 4:

1. a pooled-loss account that still locates the live slot below the noise floor;
2. a term admitted at `cost + left >= original cost` that still improves ground prediction;
3. one scalar that prices description and settling actions with no loss on either axis;
4. genuine absence established from inside a frame with no import available;
5. two frames on one evidence pool, with no separate anchor, settling a world question;
6. an agent-only improvement that changes contact with the habitat held fixed.

Any one of these fires against a specific claim. A benchmark leaderboard is not one of them unless it carries an anchor that does not move when the compared frames push on it.

## 5. The honest stop

The census has a nameable anchor in every domain, so this is not a `gap`. It is a **stop at the limit of the available instruments**: the shape is stated, the verdicts are kept separate, and the lineage is recorded so the stop is checkable. Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."* Fig 13 :139: *"narrowing gets you close while the ground decides."* The six named refuters are what would move it from `candidate` to `grounded`.

## 6. One-paragraph version for outreach

> The Tether does not pick a winner among PAC, Bayesian inference, minimum description length and active learning. It gives the shape any adequate account must have when data are sparse, noisy and uneven: keep the residual indexed by slot instead of averaging it into one loss; admit a new term only when its statement cost plus what it leaves unexplained is less than the confusion it removes; keep the price in bits separate from the price in actions; report a data-poor slot as unreached at this budget rather than as evidence that the term does not exist; and let an anchor that never updates settle the comparison, not agreement among frames reading the same pool. The one formal principle the figures name outright is the description-length bargain. Everything else is a role, not a verdict. The shape is offered with six refuters written in advance, and it stops where the instruments stop, because narrowing gets close while the ground decides.
