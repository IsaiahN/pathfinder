# Union, order, and non-additivity: supporting derivation for ECN-0065

**Mode: `specified` on the substantive moves, `general` on the structural shape.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The question asks how much of a single aggregate gap belongs to each of four condition classes. Two derivations are owed: (1) whether those classes are a partition or a union, and (2) whether their "shares" can be added in one currency. A third follows from the first: what order the conditions must be examined in, because a decomposition is a chain with a dependency order, not a bag of labels.

## DOMAIN CENSUS (carried forward, not repeated in full)

| domain | actors | currency | anchor |
|---|---|---|---|
| D1 Occupation | workers, employers, gatekeepers | sorting and occupational pay | recorded occupation and pay |
| D2 Hours | workers, schedulers | hours supplied and paid | measured hours |
| D3 Discrimination | employers, workers | differential treatment at equal productivity | only an audit or blind instrument |
| D4 Caregiving | caregivers, households, employers | time out of work, unpaid care | event-dated care and attachment |

The census is in `01_figure_grounded_audit.md` section 1.2. D3 is conditional on an instrument; without one it is not a domain yet.

---

## Q1: Partition or union?

> Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
> Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

Take one worker-slot s: a woman, part-time, in a female-typed occupation, six months after a birth, whose employer discounts mothers. She is in D1, D2, D3, and D4 simultaneously. Under a partition she would be split into four fractional pieces. Under Fig 9 :57 she is a **specific compound**, a different kind of case from a worker in only one condition. A lever that clears D2 (flexible scheduling) leaves D3 standing, because the employer's discount is not a schedule. That is exactly Fig 9 :55-56: a single lever clears the region where only one condition holds and leaves the intersections.

**Empirical shadow.** Kleven, Landais and Søgaard (2018 NBER WP 24219, read 2026-11-23) report that a birth creates a gap "driven in roughly equal proportions by labor force participation, hours of work, and wage rates." One event fires three channels, each with a different currency. A decomposition that assigns the whole child penalty to "hours" would erase the other two. That is a union signature, corroborated in a genuinely different measurement setting from the metalaw.

**Mathematical shadow.** The *Stanford Encyclopedia of Philosophy* entry on Simpson's Paradox (read 2026-11-23) reports that in the Berkeley admissions data "women were more likely to apply to departments with lower acceptance rates. This leads to a probabilistic association between gender and the partitioning variable (department), which we have seen can lead to Simpson's reversals." A population-level difference can reverse once partitioned by a correlated condition. Here occupation is the correlated condition.

**Verdict:** union, `specified`, triangulated (Fig 9 plus low-overlap mathematics and the child-penalty event study).

**Falsifier:** a decomposition whose per-condition shares are invariant to adding an overlapping condition and to changing the reference category, with an assignable shared part.

## Q2: Order by dependency, not by importance

> Fig 3 :20: "The chain is ordered by dependency, not by importance."
> Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
> Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

The four-condition chain stops at the **objective** link (link 3): what would count as progress for this worker-slot? The aggregate decomposition that the question reaches for is an observer's population statistic, not the worker's link-3 term. Fig 3 :24 names this as the middle link, the one that breaks first because it has neither obvious failures nor obvious tests.

Dependency order for a usable answer:

1. **Perception:** can we read which condition fired for s? Without this, the later links receive no input (Fig 3 :22-23).
2. **Vocabulary:** do we have terms for the four conditions, or only "explained" versus "unexplained"? The unexplained bin has no term for a source (F4).
3. **Objective:** what would count as closing s's gap? A raise, a schedule change, an occupational move, a care substitution are four different objectives.
4. **Planning:** choose an intervention for s.
5. **Learn and carry:** record which intervention paid, per slot, and carry the method, not the recording (Fig 4 :22).

Order matters because effort spent above the break arrives at a step that cannot use it. Publishing another national percentage is effort at link 5 applied to a gap at link 3.

**Falsifier:** show that the four-condition attribution can be computed at link 5 from a population statistic without any per-slot perception link, and that it still selects the correct intervention at a named slot.

## Q3: Isomers, functional group, or neither?

> Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
> Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

As the question writes them, the four conditions share no common atom set. Occupation is a categorical move, hours is a time quantity, discrimination is a conditional comparison, caregiving is an unpaid time expenditure. By Fig 12's definition they are **not isomers** of one another. They are members of a **functional group**: "condition that can change a pay residual." The group says what kind; the qualifier says which member. This mirrors the exemplar's use of Fig 12 :124 for two theories that share only a functional group.

The stronger isomer claim: hold a fixed atom set of worker attributes (credentials, schedule, care status, local labor market) and compare two otherwise identical worker-slots whose conditions are arranged differently. Those two slots are same atoms, different arrangement, different pay outcome, which is a real isomer claim, `specified` by analogy and single-source. It is not a claim that the four causes share atoms; it is a claim about the worker-slots they act on.

**Falsifier:** exhibit a worker-slot pair with identical attributes and identical arrangements that yields different outcomes with no new condition, or show that one of the four conditions requires an attribute the other three cannot express. Either kills the isomer claim and leaves the functional-group claim standing.

## Q4: Do the four shares add?

> Fig 12 :125: "A composition costs in two currencies, and they do not add."
> Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."
> Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it."

Fig 12's own case is bits versus actions. The analogue here is four causal currencies: a sorting move, a time quantity, a conditional comparison, and an unpaid time expenditure. To sum their "shares" into 100 percent of a pay gap, a common currency must be supplied. The regression supplies one (variance in log pay), but that is a modelling choice, not a figure-licensed identity. The figure explicitly separates the two readings and refuses the sum. Recorded as `specified` by analogy, single-source, strain S3 in `01` section 6.

A second non-additivity comes from Fig 4 :30: aggregating worker-slots into a population and back to a worker-slot is a lossy round trip. The round-trip gap R_T is measured in `11_audit.md`. The "sum of shares" is the abstraction; the worker-slot is the concretisation; they do not match, and the mismatch is the honest report rather than an error to eliminate.

**Falsifier:** supply a common currency in which all four effects are commensurable by definition, not by modelling convention, such that the additive decomposition is exact and invariant.

## Q5: Analogues that do and do not hold

- **Ecological variation partitioning.** A shared fraction explained by two correlated habitat variables "cannot be decided to which of them should be attributed" (Zelený, read in the BUS-0009 pilot, 2026-11-22; not re-read this session, so it is not in this folder's ledger and carries no weight here). It is a same-shape analogue from a different field, corroborating the union verdict, not a source for this solution.
- **Simpson's paradox.** The aggregation reversal is a mathematical analogue with a documented discrimination case. Holds at the level of *why partitioning changes a reading*. Does not hold as a model of discrimination itself.
- **Accounting overhead allocation.** Commonly used to assign shared costs, but any assignment rule is a convention. Used here only as an intuition pump for the unassignable shared fraction. Not a cited source and not used as evidence.
- **The "dials" analogue from the eighth essay.** The framework's own author, asked "how much smarter" in a multi-agent setting, answers with dials and says "none is a constant to pick." That is the closest structural precedent for refusing a single number here. Within-author, so one witness.

---

## CONCLUSION

The four conditions are a **union with an unassignable shared fraction**, not a partition. Their attribution chain is ordered by dependency and breaks at the objective link unless a per-slot instrument exists. They are a **functional group** of pay-changing conditions, not isomers of each other, though a fixed-attribute worker-slot pair can be an isomer claim under a different arrangement. Their shares cannot be summed in a figure-supplied common currency; the sum is a modelling convention. The falsifiers for each claim are written above and were written before the conclusion in `01` section 4.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened 2026-11-23. The eight essays, opened 2026-11-23. The Simpson's-paradox entry and the child-penalty paper, opened 2026-11-23. No wage measurement was taken by this derivation.

## FIGURE CENSUS

Fig 3 (dependency order, middle link), Fig 4 (methods only, round trip), Fig 9 (union, unbundle, filters), Fig 11 (conditions, valence), Fig 12 (functional group, isomer, two currencies), Fig 13 (honest stop). Strained after re-census: Fig 12 exercised as an analogue for four causal currencies (S3, named, not hidden). No other strain.
