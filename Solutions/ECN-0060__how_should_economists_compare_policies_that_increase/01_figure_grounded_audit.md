# Figure-grounded audit: comparing income-increasing and distribution-increasing policies

**Mode of this document: `specified` on the shape of the comparison procedure, `general` on the structural rules, `gap` on the ranking itself. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (as quoted in the exemplar's `05_what_shape_means.md` §6) says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The figure text in `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule in `FRAMEWORK/reference/FIGURES_README_canonical.md`, the WATSON metalaws note in `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the completed exemplar at `Solutions/QMGR-0037__spacetime_continuum_or_emergent/`. World sources are listed in `10_source_ledger.csv` and were actually opened.

---

## 0. The residual, stated in effect terms

Option A raises total income. Option B distributes income more evenly. Economists are asked to compare them. State the residual as an effect, before naming any theory:

> A comparison is demanded between two effects that are recorded in **different currencies**. The first is a quantity of money income, measured by markets and national accounts. The second is an arrangement of that income across persons, measured by shares and inequality indices. To rank the two options a third quantity is required, a social objective that says how much of one currency may be traded for the other. Every candidate objective available (utilitarian sum, Rawlsian maximin, Bergson-Samuelson welfare function, Kaldor-Hicks compensation test) **changes its answer when its weights or its interpersonal-comparison assumptions are pushed**. By the anchor definition that disqualifies all of them. The residual is therefore not an under-measured quantity. It is a **missing anchor at the objective link**.

Bind the sought-for shape as an ordinary term, per formula step "Direction" and Fig 5 :65-66 (as recorded in the exemplar's audit): write down what an answer would look like. Here it is:

> **A comparison procedure whose output does not depend on an ungrounded choice of welfare weights, which reports the two currencies separately at the level of the affected groups, which names the threshold it applies, and which records where its objective came from.**

That sentence is an ordinary term in this derivation. It can fail, and its failure conditions are pre-registered in §3 before the conclusion.

### The residual by arity, symmetry and scale

- **Arity:** at least two policy options, each with two effects (total, distribution). The comparison is a binary relation over options, not a scalar property of one option.
- **Symmetry:** the comparison is **ordered**, not a symmetric join. Swapping A and B changes the answer. The bond is ⋛ comparison (Operators table :49, *"a threshold relation between two quantities"*), with the test *"is it about which is larger, rather than both being present? Yes."*
- **Scale:** first order inside a single policy (a policy changes total income and changes the split), second order at the comparison between options, third order if the comparison is aggregated across a population into one social number. The third order is where the anchor goes missing, not the first.

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not yet a domain with a ground.

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| **D1, aggregate income (efficiency)** | firms, workers, households, national statistical offices | money income, output, GDP | markets and national accounts | yes. A measurement that moves when an economist pushes on it is not this anchor, but prices and accounts do not move because a frame admires them. |
| **D2, distribution (equity)** | households ranked by income, tax and benefit records, surveys | income shares, percentile ratios, inequality indices | administrative records and survey instruments | yes, for the *shape* of the distribution. The *weight* attached to different parts of it is a different object and has no anchor here. |
| **D3, social objective / comparison** | economists, policymakers, social welfare functions, compensation tests | social welfare, distributional weights, equivalence scales | **none nameable.** Every candidate moves when its weight is pushed (Fig 2 :29). | **no.** This is a candidate domain with no ground yet. |
| **D4, verification and outreach** | expert evaluators, reviewers, readers | agreement versus residual | the ground (measured outcomes), never agreement | yes, but only if the reader has not been shown the interiors first (Fig 10 :42). |

**Partition or union.** D1 and D2 are two conditions on the same policy outcomes, not two disjoint kinds of policy. A transfer can reduce total income; a growth policy can change the split; one instrument can do both. This is a **union compound** with an intersection, not a partition. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* The unbundled pieces are: (a) policies that change only total income, (b) policies that change only the split, (c) policies that change both, and (c) is a specific compound, not a harder case of (a) or (b) (Fig 9 :57-58).

**Order by dependency (Fig 3).**

1. perception: can we measure total income and the distribution? Yes, D1 and D2 both have instruments.
2. vocabulary: do we have terms for what the options afford? Yes, efficiency, equity, transfer, incidence.
3. **the objective: can we say what counts as progress when the two conflict? No.** This is the break. There is no instrument that returns a ground-settled tradeoff weight.
4. planning: given a settled objective, choose the policy. This link is below the break and cannot be diagnosed until link 3 works.
5. learn and carry: compare predicted and observed outcomes, name what worked.

The dependency order matters because effort spent above the break cannot rescue it. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

---

## 2. Finding the governing figure lines (quote before concluding)

I grepped the verbatim figure text and quoted before drawing each conclusion. Strains are named, not smoothed.

### F1 - The required objective is not an anchor (decisive for the ranking)

Fig 2 :29:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

and, on the same line pair:

> **"If it moves when you push on it, it is not an anchor."**

Fig 10 :49:

> **"Declaring a meaning does not ground it."**

A utilitarian sum answers one way when the utility function is Bernoulli and another when it is not. A maximin answers one way when the worst-off group is defined by income and another when it is defined by capability. An Atkinson index answers differently for every value of its inequality-aversion parameter. The answer moves when the frame pushes on it. These are declared meanings, so by Fig 2 :29 they are not anchors. The comparison of D3 is therefore a `gap`: not a silence, a verdict that the thing which would settle it is missing. Fig 13 :134: *"Unreachable is a verdict here, not a silence"*.

**Mode:** `general` (structural), applied to this question as `specified`. **Status:** `gap`. **Triangulation:** triangulated across Fig 2 and Fig 10, two figures with low overlap (one defines the anchor, one forbids declaring a meaning). **Refuter:** exhibit a social objective whose ranking of A and B does not change under any admissible reweighting or interpersonal-comparison assumption, and which is not itself just a measured quantity. If such an object is produced, F1 fails.

*Strain check:* one could read a democratically enacted budget as an anchor, because it settles which policy is chosen. Re-census: that settles a *decision*, not the *comparison question*. It is a convention that decides an outcome, which Fig 10 :47 names as a failure (*"a convention that decides an outcome has stopped being one"*, as recorded in the exemplar). So the strain dissolves and F1 stands.

### F2 - The two currencies do not add

Fig 12 :125:

> **"A composition costs in two currencies, and they do not add."**

Fig 12 :126-127:

> **"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."**

Fig 12 :130:

> **"Summing them into one figure is the error this names, not the fix for it."**

The figure's own two currencies are bits and actions. The two currencies in this question are money income and distributional weight. They are not the same pair, and this must be said plainly. The transfer is licensed by Fig 4 :20: *"Only the actors, the currency and the anchor change."* The kernel rule (two currencies in different units resist a single accounting) is domain-agnostic; the currency pair is domain-specific. So the mapping is a `specified` application of a `general` rule, not a `grounded` fact about economics.

**The consequence for practice:** any single summary that adds efficiency and equity (a composite index, an unweighted benefit-cost total, a "growth-and-equity score") repeats the named error. The honest form is two readings held apart. Fig 12 :130 closes: *"A price in bits and a price in actions are two readings, held apart."* The world literature corroborates this from inside policy evaluation: the Wikipedia synthesis of Phaneuf and Requate records that cost-benefit analysis "relies on the Kaldor-Hicks criteria to make statements about efficiency without addressing issues of income distribution", and that this "has allowed economists to stay silent on issues of equity". That is the shortfall Fig 12 :126 names, observed in the field.

**Mode:** `general` on the rule, `specified` on the income/equity substitution. **Status:** triangulated across Fig 12 and Fig 4, plus a low-overlap world corroborator (policy evaluation literature). **Refuter:** exhibit a unit in which total income and the full distribution are commensurable without a lossy, convention-dependent conversion, and show the conversion is settled by a ground rather than a chosen weight. Equivalent variation and compensating variation do not qualify: both depend on a welfare weight. If such a unit is exhibited, F2 fails.

### F3 - Aggregate reporting destroys the live signal

Fig 1 :19:

> **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22:

> **"Aggregating across slots is how a live signal disappears into an average."**

Fig 1 :13 also says *"a global R near zero with one live slot residual is a legal state"*. In this question the slots are groups, percentiles, regions, or cohorts. A national mean income can rise while the bottom decile falls; a single Gini can be unchanged while the tails swap. The comparison must be reported per slot: who gains, who loses, by how much, at each step of the distribution. A single national number is not a smaller report, it is a different and lossier object.

The world literature supports the per-group move from a different direction. The Atkinson index entry records that the generalized entropy index is additively subgroup decomposable: overall inequality "can be computed as the sum of the corresponding GE indices within each group, and the GE index of the group mean incomes", while noting that "many popular indices, including Gini index, do not satisfy this property". Decomposability is the operational form of per-slot indexing.

**Mode:** `general`. **Status:** single-source for the figure rule (Fig 1 only), corroborated by one low-overlap world source (inequality measurement). **Refuter:** show that a single aggregate preserves every decision-relevant per-group effect for all policies in the comparison set. This is possible only in the degenerate case where all groups move identically, which is a testable special case, not a general licence.

### F4 - The break is at the objective, not at measurement

Fig 3 :20-21:

> **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**

Fig 3 :25-26:

> **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."**

Fig 3 :27:

> **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

Economists have excellent instruments for perception (national accounts, household surveys, tax records) and a working vocabulary for the affordances (tax, transfer, wage floor, public service, asset grant). What they lack is an instrument for link 3: a ground-returned answer to "how much equality is one unit of total income worth". Better GDP measurement and finer inequality data land above the break and cannot use. The money spent improving them is a filter for the budget, not a witness for the verdict (Fig 9 :60, *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*).

**Mode:** `general`. **Status:** triangulated across Fig 3 and Fig 9, different figures and different questions (dependency versus verdict-versus-budget). **Refuter:** exhibit an instrument that settles the tradeoff at link 3 and returns different readings for different policies. If it exists, the break moves and F4 fails.

### F5 - It is a union compound, so unbundle before comparing

Fig 9 :5:

> **"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."**

Fig 9 :54:

> **"And when the split lands on a union rather than a partition, unbundle before you search again."**

Fig 9 :57-58:

> **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**

The apparent single question is at least three: a pure efficiency question, a pure distribution question, and the compound where one lever moves both. A single lever (say, a cash transfer) clears the first region and leaves the intersection standing, because the second condition still binds. Comparing A and B as if they were points on one line is comparing a mixture to a mixture.

**Mode:** `general`. **Status:** triangulated across Fig 9 and the domain census (the census independently yields a union), low overlap between route and result. **Refuter:** show that every policy affects only one of total income or distribution. That would make it a partition and kill the unbundling instruction. It is empirically false for taxation and transfers, but the refuter is stated.

### F6 - The comparison is a goal, and a goal needs a threshold

Operators table :49 defines ⋛ as *"a threshold relation between two quantities"*, and its identifying test is *"is it about which is larger, rather than both being present? Yes."* Operators table :52:

> **"a goal is a comparison, which is why a vocabulary without it cannot state one"**

"Which policy is better" is a ⋛ comparison, so it carries two obligations: a choice of the two quantities being compared, and a threshold that decides which is larger. The question as posed supplies neither. Naming the threshold is not optional: without it the comparison is unbound. But naming an anchored threshold is exactly the missing objective of F1. Fig 9 :32:

> **"you get a kind of thing, never the answer itself"**

The framework can return the *kind* of comparison owed (an ordered, threshold-bearing comparison of two currencies held apart), not the winner.

**Mode:** `general`. **Status:** single-source for the operator definition (Operators table), triangulated with Fig 9 for the shape-not-the-answer limit. **Refuter:** exhibit the comparison with an anchored threshold and show the framework can derive the winner. That would name the answer, which Fig 9 :32 says it cannot do from inside.

### F7 - An imported welfare function adds no atom to the world

Fig 6 :26:

> **"An import adds no atom to the world."**

Fig 8 :51:

> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"**

Choosing a utilitarian, Rawlsian, or capability objective is an import from ethics or social choice into policy evaluation. It adds no new ground fact; it gives the evaluating frame access to a convention another frame holds. Fig 6 :23 (*"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*) describes the access correctly, but Fig 8 requires a source gate and a shadow test. Without provenance the imported objective carries zero evidentiary weight in this derivation. F1 is not contradicted: an import is a convention, not an anchor that stops moving when pushed.

**Mode:** `general`. **Status:** triangulated across Fig 6 and Fig 8. **Refuter:** show a welfare function that was settled by the ground (measured and invariant under the relevant pushes) rather than adopted from a normative frame. Then it is not an import and F7 does not apply.

### F8 - What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| Total income and the distribution are two currencies; hold the readings apart rather than summing them | `general` rule, `specified` application | Fig 12 :125, :126-127, :130; Fig 4 :20 | triangulated |
| The comparison needs an objective with an anchor; none of the standard criteria supplies one | `specified` about current practice, `general` about the anchor requirement | Fig 2 :29; Fig 10 :49 | gap |
| Report per group or percentile, not a single national aggregate | `general` | Fig 1 :19, :22 | single-source, world-corroborated |
| Unbundle the union into pure-efficiency, pure-distribution and compound cases | `general` | Fig 9 :5, :54, :57-58 | triangulated |
| State the two quantities and the threshold before ranking | `general` | Operators :49, :52; Fig 9 :32 | single-source plus shape limit |
| Record the provenance of any welfare function used | `general` | Fig 6 :26; Fig 8 :51 | triangulated |
| Which of A and B is better | **not derivable** | no governing line after census | `gap` |

---

## 3. Pre-registered refuter

Required before conclusion and outreach: a falsifier written before the run is a design instrument. The shape claim of this folder is refuted if any of the following holds:

1. **Anchor refuter.** An objective is exhibited whose ranking of A and B does not change under any admissible reweighting or interpersonal-comparison assumption, and which is not simply a measured quantity (Fig 2 :29, Fig 10 :49).
2. **Currency refuter.** A unit is exhibited in which total income and the full distribution are commensurable without a lossy, convention-dependent conversion, and the conversion is ground-settled (Fig 12 :125-130).
3. **Instrument refuter.** An instrument is exhibited that settles what counts as progress in the union compound and returns different readings for A and B (Fig 3 :27).
4. **Aggregate refuter.** A single summary statistic is shown to preserve all decision-relevant per-group effects for every policy in the comparison set, outside the degenerate case where all groups move identically (Fig 1 :22).

If any fires, the shape claim is withdrawn and the ranking becomes derivable to that extent. Until one is run, the shape is `specified` and the ranking is `gap`. None has fired in this run. This refuter is repeated in `07`, `08` and `09`.

---

## 4. Recommendation

1. Stop asking for a single winner until an objective anchor is supplied. Report the ranking half as `gap`, not as a polite silence (Fig 13 :134).
2. Report the two currencies separately, per group, with the threshold and the provenance of the objective stated on the page (F2, F3, F6, F7).
3. Unbundle the compound before comparing: separate pure-efficiency, pure-distribution and both-condition cases (F5).
4. Put the instruments where the break is. Effort on better inequality measurement is useful for D2 but does not settle D3 (F4).
5. Send the generator, not the conclusion: the shape claim, the four refuters, and the question "what would you count as a failure" (Fig 10 :52, *"Bring a characterised residual, never the source."*).

---

## 5. Canonical usage check

Two local framework sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"*; *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the framework returns *"a shape, not a name"* then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. Design questions are answered by derivation.

### Retractions and confirmations

| earlier reading | status after re-census |
|---|---|
| "the figures forbid comparing the two policies at all" | **Retracted and narrowed.** The figures forbid a single summed currency and an unanchored objective. They do not forbid reporting two currencies held apart or running separate loops per condition. |
| "Fig 12's currencies are bits and actions, so it cannot bear on income and equity" | **Strain named, then dissolved by re-census.** Fig 4 :20 says only the actors, currency and anchor change across domains. The structural no-add rule transfers; the currency pair is substituted. Labelled `specified`, not `grounded`. |
| "adopting a welfare function moves the wall" | **Retracted.** Fig 6 :26: an import adds no atom to the world. It is a convention adopted from another frame, and must be provenanced (Fig 8 :51). |
| "there is no fact here, so split the whole question" | **Narrowed.** Fig 9 :5 splits when disagreements do not shrink with effort. D1 and D2 do shrink. Split at the objective link, not at the whole question. |
| "a democratic decision is an anchor" | **Refused.** It settles an outcome, not the comparison. Fig 10 :47 names a convention that decides an outcome as a failure. |
| shape-not-a-name | **Kept, with its scope recorded.** It governs a primitive not held in Γ. Here it bars the framework from naming the winning policy, not from naming the two measured currencies, which are already available terms. |
| Fig 2 :40 on the second seat | **Confirmed and applied.** The second seat in `11_audit.md` shares this evidence pool, so its agreement is internal consistency, not corroboration. |

### Strain log

After re-census, one live strain remains and is not hidden: Fig 12's two currencies are bits and actions, and the income/equity application is a domain substitution licensed by Fig 4 :20, so the verdict is `specified` rather than `grounded`. All other apparent strains were dissolved by re-census and recorded above.

---

## 6. Closing status

The figure census is complete: every substantive claim in F1 to F8 is attached to a verbatim figure line or declared `gap`. No line was forced. The ranking of A versus B is a `gap` of the unreachable-at-this-budget kind, not a proof that no objective is possible (Fig 8 :39, *"So a search that finds nothing is never a proof of absence."*). The shape of the comparison procedure survives and is checkable in `08_expert_verification_packet.md`.
