# Figure-grounded audit: are large wealth differences mainly returns, saving, inheritance, or scarce assets?

**Mode of this document: `general` on the structural shape, `specified` on the domain claims, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figure quotes: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim extract, cited `Fig N :line`). Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources: the ledger in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The question under audit, as an effect

> Are large wealth differences mainly a result of unequal returns, unequal saving, inheritance, or ownership of scarce assets?

Restated in effect terms. For wealth slot s (a person or household) let Γ(b,a) be a model's prediction of next-period wealth and o′ the observed wealth. The residual R_s = |Γ(b,a) − o′| is indexed per slot (Fig 1 :10, :11). The phrase large wealth differences names the persistent positive residuals in the top tail that a population average erases (Fig 1 :13, :19, :22). The question asks which of four conditions mainly produces that dispersion:

- **unequal returns** (a heterogeneous rate r on assets),
- **unequal saving** (a heterogeneous flow from income into wealth),
- **inheritance** (an intergenerational transfer),
- **ownership of scarce assets** (a stock of hard-to-replicate claims).

What an answer would look like, written down and bound before the run (Formula, "Direction"): the set of conditions that must all be present for a slot's R to stay large and persistent, plus an instrument that would discriminate which condition is load-bearing in a given case. This shape is the sought-for term; until it is bound it accrues no residual and no check in the loop can see it.

**Verdict in advance of the findings, stated so it can be refuted:** the four are a union of overlapping conditions, each with its own anchor, and "mainly" is a budget filter rather than a witness. The figures return that shape; no figure line selects one of the four.

---

## 1. Domain census (before choosing any figure line)

### 1.1 R by arity, symmetry, scale

- **Arity:** four candidate conditions. They are not four values of one variable; they are four conditions in contact with the residual. Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*
- **Symmetry:** the four are not interchangeable. Returns and saving are per-period flow parameters. Inheritance is a transfer across a generation boundary. Scarce-asset ownership is a stock/closure condition that determines what can be composed at all. Order matters: you cannot compose returns over an asset you do not hold.
- **Scale:** returns and saving operate within a lifetime; inheritance crosses a membrane between cohorts; scarce-asset ownership sets the closure within which the other two operate; measurement sits above all three and reports a share.

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor (nameable?) | partition or union |
|---|---|---|---|---|
| D1 within-lifetime compounding | savers, asset holders, returns | wealth (a spendable difference) | administrative wealth and tax records; yes | union member |
| D2 intergenerational transfer | donors, heirs, cohorts | bequests and head starts | estate and inheritance records; yes | union member |
| D3 scarce-asset closure | asset owners, asset supply, legal titles | claims on hard-to-replicate atoms | asset supply, property and valuation records; yes | union member |
| D4 measurement and verdict | researchers, datasets, estimators | variance shares, residuals | independent fiscal/administrative data; yes, and it must not update on the model | meta-level over the union |

Every domain has a nameable anchor. None is admitted without one. D4's anchor is the ground for this question; the other three anchors are measurements that must range against it separately (Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*).

### 1.3 Union or partition

Union, with overlaps. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* A person can inherit a scarce asset and earn a high return on it and save a high fraction of the resulting income. That case is not a harder case of any one condition; it is a specific compound (Fig 9 :57-58). Therefore the four options in the question are not mutually exclusive answers.

### 1.4 Order by dependency (Fig 3)

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The working order is:

1. **D3 closure** (which atoms exist and who holds them) sets what can be composed.
2. **D2 transfer** (who receives a head start across the generation membrane) allocates the initial atoms.
3. **D1 compounding** (saving feeds the stock, returns multiply it) grows the per-slot residual.
4. **D4 measurement** (which condition is load-bearing) can only be read after the first three are enumerated.

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Refining a variance share (D4) while the closure (D3) is unenumerated is effort spent above a break. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

---

## 2. Figure census

| figure | bearing | verdict for this question |
|---|---|---|
| **1 The Agent** | residual per slot; aggregate is a disqualified signal | the question must be asked per wealth slot; top shares hide the live signal |
| **2 The Ground** | anchor must not update; independence defines corroboration; correlation has valence | administrative data is the anchor; one dataset used four ways is one witness |
| **3 Dependency Chain** | order by dependency; a link below the break reads nothing | enumerate closure and transfer before ranking causes |
| **4 The Membrane** | head start crosses down, never a recording | inheritance is a head start, not a replay |
| **5 Mint Pipeline** | three guards; acceptance is a bargain | a single-cause term is refused until it pays against the compound |
| **6 Closure / Reachability** | mint cannot add an atom; only import moves the wall | asset ownership gates reachability; no atom is added by the world |
| **7 Room Chain** | a room's agreement is variation, not a verdict | expert consensus cannot settle "mainly" |
| **8 Union Surplus** | residual first, frame second; no search proves absence; provenance | describe the compound before choosing a discipline; a gap is a verdict |
| **9 Leave / Arrive** | split union from partition; filters for budget, witnesses for verdict | the either/or is a union; "mainly" is a filter |
| **10 Ground Maintainer** | bring a characterised residual, never the source; verifier non-access | lead with the shape and refuter, not the framework |
| **11 The Habitat** | enumerate, never compose; valence relative to residual; introduce, never subtract | enumerate the four conditions from contact, not from a theory |
| **12 The Bond** | cycle, settled molecule becomes atom, isomer, two currencies | compounding is a cycle; a settled fortune becomes an atom; cost has two units |
| **13 Minimum Viable Set** | gradient is spendable; chaos from a compounding remainder; unreachable is a verdict | wealth is a gradient; the loop's sign decides concentration; stop honestly |
| **Operators table** | subtraction is progress; comparison is a goal | saving is a subtraction; a "mainly" rank is a comparison, that is, a goal, not a finding |
| **Symbols table** | R is the aim; per slot, never a single global number | formalises section 0 |

Strained readings are named in section 7 and in `11_audit.md`, not smoothed over.

---

## 3. Findings

### F1 — The residual is per slot; the aggregate erases it (decisive for framing)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**
Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"**

A top-tail wealth residual is a live slot. A population Gini or a top-one-percent share is an aggregate that can look stable while individual slots diverge. The question must therefore be operationalised per wealth slot before any cause is named.

- **Mode:** `general` (structural).
- **Status:** triangulated across Fig 1 and Fig 9 :4-5 (split rather than search), with low overlap between a per-slot measurement rule and a question-splitting rule.
- **Refuter:** show that, for the decision at hand, a per-slot reading adds no information over the aggregate, that is, that no live slot changes a conclusion the aggregate already settles.

### F2 — The four candidates are a union, not a partition

Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :56: **"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."**
Fig 9 :57-58: **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**

The options in the question read as a multiple choice. The figure says such a bundle is usually a union. A lever that changes only returns leaves the inheritance-and-scarce-asset intersection standing. The same conclusion is corroborated, from a different field, by the wealth overview's statement that the mechanisms are *"non-exclusive"* and *"could work together to compound the effect"* (Wikipedia, Distribution of wealth, 2026), and by Fagereng et al., who find that returns are *"positively correlated with wealth"* and that the permanent return component is *"correlated across generations"*, so returns and inheritance intersect in the same slots.

- **Mode:** `general` on the union, `specified` on the intersections.
- **Status:** triangulated (Fig 9 plus two low-overlap world frames; the world frames themselves share an economics pool, declared in `10_source_ledger.csv`).
- **Refuter:** exhibit a population in which each top-tail slot has exactly one active condition and every intersection is empty. Then the partition reading wins.

### F3 — Unequal returns matter as a compounding cycle, not a one-shot rate

Fig 12 :121: **"The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**
Fig 13 :22: **"a difference that can be spent"**
Fig 13 :31: **"a remainder compounding through a chain that amplifies is chaos"**

Wealth is a spendable difference (a gradient). Returns act on the stock and the output re-enters as input, so this is Fig 12's **cycle**, not a linear chain. The sign of the loop decides whether concentration closes. This is exactly the structure that the low-overlap frames independently describe: preferential attachment distributes a quantity *"according to how much they already have, so that those who are already wealthy receive more than those who are not"* (Wikipedia, Preferential attachment, 2026), and the Matthew effect is *"the tendency of individuals to accrue social or economic success in proportion to their initial level of popularity, friends, wealth, and natural advantages"* (Wikipedia, Matthew effect, 2026). Fagereng et al. supply the economics-facing reading: a 500 basis point spread between the 10th and 90th percentile of returns, and a permanent individual component.

- **Mode:** `specified`. The figure fixes the cycle structure; it does not fix r or g.
- **Status:** triangulated (Fig 12 cycle plus Fig 13 gradient), with three world frames of low overlap with the figures (economics registry data, sociology, network science).
- **Refuter:** a wealth process in which the feedback sign is zero or negative and top-tail residuals do not compound despite heterogeneous one-period returns.

### F4 — Unequal saving is a distinct flow link, not a rival to returns

Symbols table :42-46: *"progress is a subtraction, which is why a vocabulary without it cannot say how far along it is."* The wealth overview writes the identity directly: *"change of wealth = saving = income − consumption (expenses)."*

Saving supplies the input to the compounding cycle; returns supply the rate on the accumulated stock. They are factors of a product, not alternative explanations. Fig 12 :125: **"A composition costs in two currencies, and they do not add."** Bits price the description and actions price the test; likewise a flow and a rate are different readings of a wealth trajectory and summing them into one "cause" is the error the figure names.

- **Mode:** `specified`, ungrounded on the quantitative split.
- **Status:** single-source for the figure mapping of a flow into a gradient; triangulated with the wealth overview for the accounting identity. Held separate, not averaged with F3.
- **Refuter:** a case in which saving differences vanish while top-tail residuals are unchanged, or the reverse, across two independent datasets. That would make saving an independent condition rather than a factor, and the union would need re-census.

### F5 — Inheritance is a head start across a membrane, not a replay

Fig 4 :10-11: **"a head start, never a recording"** and *"it makes the next agent's search cheaper."*
Fig 4 :22: **"Only methods cross up. Only head starts come down."**
Fig 10 :68: *"a generator crosses, an instance does not."*

Inheritance is a transfer across the cohort membrane. The figure's distinction matters: a head start that makes the heir's search cheaper is a generator crossing; a mere replay of a past fortune is a recording and carries no new capability. The wealth overview reports that *"Inherited wealth may help explain why many Americans who have become rich may have had a 'substantial head start'"* and that historically *"material inheritance played a major role in wealth differences and in the transmission of wealth status from generation to generation."* Fagereng et al. find the permanent return component mildly correlated across generations, an intersection between D1 and D2.

- **Mode:** `specified`.
- **Status:** triangulated (Fig 4 membrane plus Fig 10 crossing rule); world corroboration from registry data and a secondary overview.
- **Refuter:** a population with demonstrably zero intergenerational transfer in which top-tail residuals are statistically unchanged.

### F6 — Scarce-asset ownership is the closure wall that gates composition

Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**
Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it."**

To earn returns you must hold an asset. Ownership of a scarce asset is the atom set that determines what a slot can compose. Those without the atoms fail reachability for the Compounds that require them. A fortune that has settled becomes an atom for the next round, which is the structural form of "wealth begets wealth." The wealth overview supplies two corroborating readings: *"the first necessary condition for wealth concentration is an unequal initial distribution of wealth"* and the land/rent material (*"the top 10% of land owners (all corporations) in Baltimore, Maryland own 58% of the taxable land value"*; rent seeking through political influence). Tax Justice Network describes *"financial secrecy and tax havens"* wired into the global economy, which *"fuels inequality."*

- **Mode:** `specified`, with the mapping declared as a binding rather than a derivation.
- **Status:** triangulated for the closure logic (Fig 6 plus Fig 12); single-source-to-strained for the mapping of "legal title" onto "atom" (see section 7).
- **Refuter:** a case where top-tail wealth arises and persists purely from flow returns on perfectly replicable assets, with no scarce-atom closure and no transfer.

### F7 — "Mainly" is a filter, not a witness

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**
Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (the quantities so disqualified are coverage, compression achieved, predicates minted and credibility accrued, listed on Fig 1 :25-26.)
Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*

A variance share that ranks the four causes is computed inside one closure and with one estimator. It is a legitimate device for deciding where to spend research budget. It is not a witness for the verdict, because the frame that produces the share also uses it to score itself. Asking "which one mainly" is a comparison, that is, a goal; a goal is not a finding.

- **Mode:** `general`.
- **Status:** triangulated (Fig 9 filter rule plus Fig 1 frame-internal rule, low overlap).
- **Refuter:** exhibit a share that is invariant across independent closures and anchored to a measurement that does not update on any model. It would then qualify as a witness and this finding would be withdrawn.

### F8 — The anchor is independent administrative data, not agreement

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."**
Fig 2 :31-32: *"Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."*
Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**

WID states that its estimates are *"Based on the systematic combination of national accounts, survey and fiscal data"* and notes that surveys are *"based upon self-reporting and are well known to underestimate top incomes and top wealth shares."* Saez's Berkeley page documents the provenance chain (Saez and Zucman, QJE 131(2), 2016, capitalized income tax data; Piketty, Econometrica 2013, optimal inheritance taxation). The settlement instrument here is fiscal and administrative data plus natural experiments, each used as a separate range against the ground.

- **Mode:** `specified`.
- **Status:** triangulated (Fig 2 anchor rule plus two independent data-source accounts). Overlap between WID and Saez/Zucman is high and declared as one pool.
- **Refuter:** a verdict that survives only inside one dataset and flips under an independent administrative source.

### F9 — The "which one mainly" slot is a `gap`, not a silence

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 13 :134: **"Unreachable is a verdict here, not a silence"**
Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :139: **"narrowing gets you close while the ground decides"**

After a genuine census no figure line selects one of the four as the main cause. That is a `gap` of the unreachable-at-this-budget kind: the figures return the shape of a compound and the instrument that would discriminate its load-bearing condition, not a ranking. Fig 8 :40-43 distinguishes underivable-in-principle from unreachable-at-this-budget; here it is the former for a figure-only verdict, because the ranking is a dataset question, not a metalaw question. Importing an outside "answer" against this limit would add an atom that was not needed.

- **Mode:** `general`.
- **Status:** `gap` after re-census.
- **Refuter:** a figure line, quoted verbatim, that ranks the four conditions. None was found.

### F10 — A room of experts cannot settle the share

Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
Fig 7 :36: **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Pooling expert opinion, or a survey of researchers, cannot turn a filter into a witness. The room must differ from the last room and match the residual it surfaced. This governs the outreach artifacts: a reply is a conversation, never corroboration.

- **Mode:** `general`.
- **Status:** triangulated (Fig 7 plus Fig 2).
- **Refuter:** a case where a panel's agreement, with no independent instrument, correctly settled a contested variance share. That would break the anchor rule.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before outreach: a falsifier written before the run is a design instrument. The shape claim (four-condition union, per-slot compounding, filter-not-witness) is refuted if any of the following holds:

1. A clean partition is demonstrated: each top-tail slot has exactly one active condition and every intersection among returns, saving, inheritance and scarce assets is empty.
2. Holding all other conditions fixed, variation in exactly one condition leaves the top-tail residual unchanged across two independent administrative datasets.
3. A figure line is found, quoted verbatim from `03-FIGURES_TEXT.md`, that selects one of the four as "mainly" responsible.
4. The compounding loop's sign is shown to be zero or negative in the relevant wealth process, so the top tail does not amplify.

If any fires, the union verdict is withdrawn and the question is re-censused. Until one is run, nothing here is labelled `grounded`.

---

## 5. Recommendation

1. Ask the question per wealth slot, not per population average (F1).
2. Treat the four options as a union and unbundle before searching (F2).
3. Present compounding, saving, head start and closure as distinct links with distinct anchors, never averaged (F3 to F6).
4. Label "mainly" as a budget filter and refuse it as a verdict (F7, F9).
5. Settle with independent administrative data and natural experiments, not with agreement (F8, F10).
6. Send the generator (shape plus refuter), not the conclusion (Fig 4 :22: *"Only methods cross up. Only head starts come down."*).

---

## 6. Canonical usage check (figures README, THE_FORMULA, metalaws)

Three sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; the canonical limit, *"what a missing thing would have to look like (a shape, not a name)"*; and *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, gates as a product, and step 7's three distinct questions (SEARCHED, INWARD, OUTWARD). SEARCHED was run first: no figure line selects one cause.
- Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* The condensation in `07_the_tether_answer.md` carries a round-trip gap R_T, enumerated in `11_audit.md`, and is not treated as identical to the figures.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "scarce-asset ownership is an import that moves the wall" | **Retracted.** Fig 6 :25-26: *"An import adds no atom to the world."* and *"The world does not gain primitives; a frame gains access."* Acquiring an asset changes the holder's access; it adds no primitive. The surviving claim is narrower: ownership sets which atoms are reachable for composition (F6). |
| "inheritance is a recorded replay of a past fortune" | **Retracted.** Fig 4 :10-11 says the downward transfer is *"a head start, never a recording"* and makes the next search cheaper. Corrected in F5. |
| "Unreachable is a verdict, not a silence" (master plan paraphrase) | **Corrected to the verbatim form.** Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. The word "here" is part of the quote and is retained. |
| F1 aggregate erases the live slot | **Canonically confirmed.** Fig 1 :19 and :22 are direct, and the README's per-slot discipline applies at every level. |
| F2 union not partition | **Canonically confirmed.** Fig 9 :54-57 plus the README's re-census rule for apparent contradictions. |
| F7 filter not witness | **Canonically confirmed.** Fig 9 :60 is explicit, and the frame-internal rule in Fig 1 :24-27 gives the mechanism. |
| F9 gap | **Confirmed as `unreachable`, not silence.** Fig 8 :39 and Fig 13 :134 together license the verdict. |
| Apparent strain: "gradient" as wealth versus the six-term substrate | **Not strained after re-census.** Fig 13 :22 defines gradient for physical state/structure chains. Here it is a binding onto a wealth stock, declared as such in F3, not a claim that wealth is a seventh primitive. |

---

## 7. Strains, honestly named

1. **Legal title versus atom (F6).** Fig 6's atom is a primitive in a library; a scarce asset is a legal and economic claim. The mapping is a binding from the economics frame, not a derivation and not an import that moves the wall. Kept visible; this is why F6 is `specified`, not `grounded`.
2. **Returns correlation versus causation (F3).** Fagereng et al. document heterogeneity, persistence and correlation with wealth, but correlation is not the loop's sign. The figure supplies the cycle; the data supplies the magnitudes. The two are kept separate.
3. **"Mainly" as a question direction.** The framework cannot check the direction of its own question (Formula, "Direction"). Binding the sought-for shape before the run is how this is made refusable; it is a discipline, not a step.
4. **After re-census: two live strains, named, none hidden.** No strain was resolved by softening a figure line.
