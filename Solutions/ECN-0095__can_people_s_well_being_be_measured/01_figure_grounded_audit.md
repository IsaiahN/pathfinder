# Figure-grounded audit: can well-being be measured reliably through income and consumption?

**Mode of this document: `specified` on the separators and per-domain verdicts, `general` on the structural shape, `gap` on the weight vector. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*, opened 2026-11-23, says LLM output can *"simulate an approximate answer/output with the formula"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Verbatim figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources actually opened are listed in `10_source_ledger.csv`.

---

## 0. The question stated as an effect

The source asks whether well-being can be measured reliably through income and consumption, or whether health, security, relationships and autonomy need equal weight. Stated in effect terms, this is a choice between two instruments for one decision:

- **Option A, the monetary scalar.** A market counter (income, consumption) is used as the whole reading of a person's well-being. What it leads to: a cheap, comparable, high-coverage number that reads material command well and is blind to the other slots. Because it is a single number, a live failure in one slot disappears into the average (Fig 1 :22). If it is promoted into a policy outcome, a convention starts deciding an outcome (Fig 10 :47).
- **Option B, the equal-weight composite.** Five named dimensions are summed with identical weights. What it leads to: better per-slot coverage, but the weights are a declared convention presented as a measurement result. A sum of ingredients is the flat formula: it records the ingredient list and loses the arrangement (Fig 12 :5).

**What an answer would look like, bound as an ordinary term before the run.** An answer would (i) say which instrument is the anchor for this question, (ii) keep the residual indexed per slot, (iii) say what the composition of slots is and what the bonds cost, (iv) say who may refuse the resulting verdict, and (v) say what instrument would move the number from `specified` to `grounded`. This is the formula's "Direction" discipline: make the sought-for shape an ordinary term so it can accrue a residual and be refused.

**Residual in effect terms.** R is the gap between what an instrument reports about a person and what settles the question for that person. It is not a scalar. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*. Symbols table :38-40 describes R as *"The gap between prediction and observation. The central quantity: everything the system does is driven by it. It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."* A high-income person with no relationships has a near-zero monetary reading and a large live residual. That is a legal state, not an anomaly.

**The decisive anchor line, quoted before concluding.** Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* Fig 2 :37-38: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* This question is constitutively about people, so the person's own judgment is the anchor. Income and consumption are market counters, that is, instruments. An instrument can be right on the axes it reads and wrong on the others. This line governs the whole residual.

---

## 1. Domain census (before choosing any figure line)

### 1.1 R by arity, symmetry and scale

- **Arity.** Five named slots are in the question (income and consumption, health, security, relationships, autonomy), plus whatever else the habitat contains that the question did not name. R is a vector over these slots, not one number (Fig 1 :19; Symbols table :43-44: *"R is measured per slot, never as a single global number."*).
- **Symmetry.** The equal-weight option treats the five slots as exchangeable under a symmetric bond. That is a claim about the bond, not a fact recoverable from the operands. Fig 12 :46: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."* Fig 12 :92-93 says under a symmetric bond k operands have k! spellings and one term. "Equal" asserts a symmetry, so it must be paid for or declared, not assumed from the ingredient list.
- **Scale.** Three scales are involved and the transform between them is lossy. First order: one instrument reading one slot of one person. Second order: the person's own overall judgment, which composes the slots. Third order: a population average or index used for policy. Fig 4 :27-30: *"The transform between scales loses information, and that is the point. Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible."* The round-trip gap between the slots and the composite is the thing that must be measured, not assumed zero.

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | verdict |
|---|---|---|---|---|
| D1. Instrument reading | income and consumption counters, life-satisfaction scales, affect reports, health and security and relationship and autonomy measures | readings, per slot | the person's own judgment, because the question is constitutively about the person (Fig 2 :36-37) | `specified`, triangulated (Fig 2 :37-38 plus Diener's multi-indicator account and OWID's measurement section) |
| D2. Aggregation and index | the five ingredients, the weights, the normalisation, the composite score | bits (description) and actions (settling), which do not add (Fig 12 :125-126) | the ground for the decision the index is used for (Fig 10 :47) | `specified` on the structure, `gap` on the weight vector |
| D3. Decision and verification | the index, the decision rule, the person measured, the seat holding the anchor | outcomes | an outcome that does not update on the index itself (Fig 2 :29, Fig 10 :24) | `specified`, triangulated (Fig 2 :29/:43 and Fig 10 :47/:93) |

No domain is admitted without a nameable anchor. D1's anchor is the person. D2's anchor is the decision ground. D3's anchor is the non-updating outcome. If a proposed "domain" had only a correlation among readings and no anchor, it would not be a domain yet; it would be panel 1 of Fig 2, frames mutually updating.

### 1.3 Partition or union

**Union, not partition.** Health, security, relationships, autonomy and income overlap: health changes what income can do, security changes what relationships can form, autonomy changes the value of all the others. Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* Fig 9 :4-5: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* The Library of Babel essay (opened 2026-11-23) names the same failure: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* So one lever (more income) clears the income-only region and leaves the intersections standing. There is no single percentage or universal weight vector.

### 1.4 Order by dependency (Fig 3)

Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*

1. **Perception.** Does each instrument return anything for its slot? A metric that never registers is not a slot with a small value; it is an unread slice (Symbols table :38-40).
2. **Vocabulary.** Is there a term for what each slot affords? Can the frame say what a change in relationships would count as?
3. **Objective.** Can it say what would count as progress here, in the person's terms? This is the middle link that usually has no instrument. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
4. **Planning.** Which reading to take next, under incomplete information.
5. **Learn and carry.** Name what worked, verify it at the ground, carry it to the next person.

Most well-being measurement effort lands above the break, on coverage and comparability of the monetary scalar, because that is where the measurements already exist (Fig 3 :29-30). The question's actual break is at link 3: what counts as progress for a composite has no instrument that all five slots range against.

---

## 2. Figure census (quoted before concluding, not after)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual indexed per slot; global near-zero with one live slot is legal; frame-internal quantities disqualified | single scalar hides the live signal |
| 2 The Ground | anchor must not update; anchor legitimate when question constitutively about it; human judgment the anchor for questions about people; independence | income is an instrument here, not the anchor; many reports from one ladder are one pool |
| 3 Dependency Chain | ordered by dependency; link with no instrument is not a link that works | the composite objective link is uninstrumented |
| 4 The Membrane | kernel fixed, actors/currency/anchor change; round trip loses information | moving from slot readings to an index is a lossy crossing |
| 5 Mint Pipeline | three guards as a product; a free bond carries nothing | equal weight is a declared convention, not a settled term |
| 6 Closure / Reachability | mint cannot add an atom; import only moves the wall | re-weighting an index adds no ground contact |
| 7 Room Chain | agreement compounds, evidence does not | more surveys using one ladder do not corroborate |
| 8 Union Surplus | shared pool is one frame; residual first, frame second | a dashboard from five differing instruments has surplus; five questions on one ladder do not |
| 9 Leave / Arrive | split unions before searching; describe before looking; filters are not witnesses | the either/or is a union; weights are not returned by a filter |
| 10 Ground Maintainer | ground does not decay, channel does; convention that decides an outcome stops being one | an index used to decide outcomes is a verdict, not a convention |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; no standing list of good actors | no universal list of weightings survives a change of residual |
| 12 The Bond | ingredients are not the molecule; bonds carry the meaning; two currencies that do not add | equal-weight summation is the flat-form collapse |
| 13 Minimum Viable Set | spectrum orders more and less; set closed, arrangements not; unreachable is a verdict | a single ordering cannot carry five incommensurable slots; no figure returns the weights |
| Operators table | ⋛ is a threshold relation between two quantities | "needs equal weight" is a comparison, not an identity or a sum |
| Symbols table | R per slot; R_T is the round-trip gap; the ground is the anchor | the composite must report its R_T, not assume it away |

---

## 3. Findings

### F1 — The either/or is a union, not a partition (decisive)

Fig 9 :4-5: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*

Income readings work well on the material-command subset. Health, security, relationships and autonomy readings work on other subsets, and the intersections (a sick high-income person, an insecure high-income person) are not made easier by more income. The question's "or" is therefore a false disjunction. The correct form is a per-slot dashboard with separate verdicts, not one number and not one averaged blend.

**Mode:** `general` for the union structure, `specified` for this question's five slots. **Status:** triangulated (Fig 9 and the Library of Babel essay's bundle passage, low overlap between a diagram about residuals and an essay about search vocabulary). **Refuter:** show that one instrument reads all five slots with independent per-slot residuals and that the intersections vanish, in which case the union collapses to a partition and one scalar would suffice.

### F2 — Income and consumption are instruments here, not the anchor (decisive)

Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* Fig 2 :37-38: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* Fig 2 :29-30: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."*

A market counter is explicitly listed as a possible anchor, and it is a legitimate one when the question is constitutively about material command, for example "can this household pay rent this month?". It is not the anchor for "is this a good life for this person", because that question is about a person. Promoting it to that role is the named collapse: a ground listed as one of the parties has become a frame (Fig 2 :47).

**Mode:** `specified`. **Status:** triangulated (Fig 2 :36-38 plus the capability approach literature's Kuznets and OECD passages, which say output measures were not built to measure welfare). **Refuter:** show a measurement in which the income counter itself does not change when the person's judgment is pushed, across all five slots, with no live residual left. Then it would be an anchor for this question and F2 fails.

### F3 — Aggregating across slots hides the only signal that says where to look

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*. Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."* Symbols table :43-44: *"R is measured per slot, never as a single global number."*

A composite index with a near-zero overall reading and one live slot is exactly the legal state Fig 1 describes. The World Happiness Report based Our World in Data topic page (opened 2026-11-23) gives a concrete instance: an average by age confounds an age effect with a cohort effect, so the snapshot can suggest people become less happy as they grow older when the opposite is true within every cohort. The page says *"averages need to be interpreted carefully, even if they make sense arithmetically."* That is Fig 1 :22 in a different field and with a different instrument, so the overlap is low.

**Mode:** `specified`. **Status:** triangulated (Fig 1 and a statistics/data-quality source with no shared author). **Refuter:** show a single aggregate whose per-slot decomposition has no live residual and whose round-trip gap is zero on a ground reading. Until then, a published composite is a filter for the budget, not a witness for the verdict (Fig 9 :60).

### F4 — Equal weight is a free bond, that is, the flat-formula collapse

Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :46: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."* Fig 12 :94: *"The arrangement is the substance."* Fig 12 :101: *"A bond that costs nothing is a bond that carries nothing, which is the flat case."*

"Equal weight" names a relation among the five ingredients. It is not recoverable from the ingredient list. Under a symmetric bond the five have many spellings and one term, so declaring them equally weighted asserts a symmetry rather than discovering one. Fig 12 :130: *"Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."* And Fig 12 :125-126: *"A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."* Income, health, security, relationships and autonomy are not obviously quantities in one currency. Adding them assumes the very thing the question disputes.

**Mode:** `specified`. **Status:** single-source on the figure side (Fig 12 is the authority for the bond claim); the capability approach's Sen passage, that an exact list and weights are too difficult to define and should be left to public reasoning, corroborates the conclusion from a separate field. **Refuter:** produce a single instrument that returns all five slots in one currency at one level, with the weights paid for at the ground rather than declared. Then the flat-sum objection weakens and may fail.

### F5 — A convention that decides an outcome has stopped being a convention

Fig 10 :47: *"a convention that decides an outcome has stopped being one"*. Fig 10 :48: *"a convention nothing can check is a constant the seat authored, carrying the seat's authority"*. Fig 10 :49: *"Declaring a meaning does not ground it."* Fig 2 :43: *"Guard, from Figure 10: a convention that decides an outcome has stopped being one."*

An equal-weight index is perfectly legitimate as a convention: a shared meaning about how a group chooses to speak. It becomes a verdict the moment it decides a payment, a benefit, a ranking or a policy outcome. At that point it needs a non-updating ground and a seat able to refuse it (Fig 2 :29, Fig 10 :42). This is not an objection to indices; it is an objection to presenting a chosen convention as a measurement result.

**Mode:** `specified`. **Status:** triangulated (Fig 10 and Fig 2, two figures with different subject matter, low quote overlap). **Refuter:** show a composite that decides an outcome and is still checkable by a ground that neither updates on the index nor on the decision. That would clear the named failure.

### F6 — Independence: more administrations of one ladder are one witness, not many

Fig 2 :31-32: *"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."* Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*. Fig 7 :12-13: *"same closure, handed along; agreement compounds, evidence does not"*. Fig 8 :49: *"Two frames that overlap almost completely are one frame wearing two names."*

The well-being field has a real independence resource that it often fails to use. Diener's account, opened 2026-11-23, distinguishes self-report, informant reports, the Experience Sampling Method and the Day Reconstruction Method, and says the components *"represent distinct constructs that need to be understood separately"*. Our World in Data adds that self-reports correlate with smiling, sleep and brain activity. These are different instruments pointed at the same person, which is what Fig 2 :31 requires. But a hundred national surveys all using the identical Cantril ladder are one instrument administered many times, so their agreement is the pool talking. The Easterlin dispute between Easterlin and Stevenson and Wolfers is a live instance: both sides draw on the same World Values Survey and Life in Nation datasets, so their disagreement does not give two independent frames either.

**Mode:** `specified`. **Status:** triangulated (Fig 2 and Fig 7 plus the psychology source). **Refuter:** show two readings that share no instrument, no dataset and no author pool and that still range against the person's judgment separately. They are then two witnesses. F6 does not say the pool is wrong; it says its agreement cannot count twice.

### F7 — No figure line returns a weight vector (declared `gap`)

Fig 9 :32: *"→ you get a kind of thing, never the answer itself"*. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."* Fig 13 :136-139 says the system *"can characterise what is missing in effect terms"* and *"you get a kind of thing, never the answer itself, and narrowing gets you close while the ground decides."*

No figure line returns 20/20/20/20/20, or any other vector. The figures return the shape: per-slot readings, differing instruments, an anchor that is the person, a non-updating ground for the decision, a refusal seat, and a measured round-trip gap. The weights themselves are owed from a decision frame, not from the metatheory. The capability approach page (opened 2026-11-23) reports exactly this: *"Sen refuses to supply a specific list of capabilities"*, arguing that *"an exact list and weights would be too difficult to define"* and that *"the task of weighing various capabilities should be left to the ethical and political considerations of each society based on public reasoning."* Nussbaum's alternative list, and Anand and colleagues' dashboard of some 40 to 50 indicators, are candidate conventions, not figure-derived results.

This `gap` is of the **shape-not-a-name** kind, not the underivable-in-principle kind. Formula step 7 keeps the three questions distinct:

- **SEARCHED, asked first (cheapest).** Is a weight rule already in our closure and unfound? Yes in one sense: equal weighting is trivially available, but it has no ground behind it. Re-searching the literature for the correct vector will not add an atom (Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*).
- **INWARD.** Extend the instrument from one already returning something. Self-report already returns a reading; informant reports, experience sampling and day reconstruction sharpen it (Diener, OWID). This can improve per-slot readings but does not by itself price the weights.
- **OUTWARD.** Import from a frame whose closure differs, with a source gate and a shadow test. The public-reasoning frame of a given society supplies the weights as a declared convention; a source-discriminating instrument would be needed to move them to measurement. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

"Unreachable is a verdict, not a silence" (Fig 13 :134). The folder reports the gap rather than inventing a vector.

**Mode:** `general` for the gap, `specified` for the five-slot case. **Status:** `gap`, triangulated that no line exists (Fig 9 :32 plus Fig 13 :134 to :139, low overlap). **Refuter:** quote a verbatim figure line that returns a specific weight vector as a grounded result. None was found in a full read of `03-FIGURES_TEXT.md`.

### F8 — The room must change when the question changes

Fig 10 :72: *"When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom."* Fig 11 :51: *"No standing list of good actors survives a change of residual."* Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*

A fixed five-dimension dashboard is not guaranteed to be the right dashboard for a different question. For a question about material deprivation, income may be nearly the whole residual. For a question about end-of-life care, relationships and autonomy dominate and income may be almost idle. The same slot changes valence with the residual (Fig 11 :50). So the answer is not a standing list of five weights; it is a method for enumerating the habitat of the residual (Fig 11 :43-44: *"The habitat is enumerated, never composed."* *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*).

**Mode:** `specified`. **Status:** single-source on the figure side, corroborated by the capability approach's warning that the list is context-dependent. **Refuter:** exhibit a fixed weighting that remains figure-correct and ground-paid across two residuals with different valence structure.

### F9 — The ground cannot decay while the channel does

Fig 10 :24: *"the ground does not decay, the channel does"*. Fig 10 :25-26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*. Fig 2 :33: *"The anchor must not update."* Fig 2 :34: *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."*

A national well-being index that is recomputed from its own previous values, or that is adjusted whenever the published number causes political discomfort, is a channel failure presented as a measurement. It looks like a working anchor until the drift is large. Saturated metrics (a ladder where everyone clusters at 7 or 8) and pooled readings (a composite that averages away a live slot) are named failure modes. The output in that case is not a verdict; it is *"you have lost touch"* (Fig 10 :27-28).

**Mode:** `specified`. **Status:** triangulated (Fig 10 plus Fig 2). **Refuter:** show a published index whose anchor demonstrably does not update on the index or on the reactions to it, and whose saturated and pooled channels have been instrumented.

### F10 — What survives

The defensible residue, each with its mode:

| claim | mode | figure |
|---|---|---|
| The question is a union of overlapping conditions, not an either/or | `general` structural, `specified` for these five slots | Fig 9 :4-5, :54-56 |
| For a question about a person, the person's judgment is the anchor and income is an instrument | `specified` | Fig 2 :36-38 |
| The residual stays indexed per slot; aggregation hides a live slot | `specified` | Fig 1 :13, :19, :22, :28 |
| A composite is a molecule, so the weights are bonds and are not read off the ingredients | `specified` | Fig 12 :5, :46, :94 |
| Equal weight is a declared convention, not a grounded measurement result | `specified` | Fig 12 :101, Fig 10 :47-49 |
| A single scalar can still be the right anchor for a constitutively material question | `specified` | Fig 2 :36 |
| No figure line returns the weight vector; the vector is owed from a decision frame | `general`, `gap` | Fig 9 :32, Fig 13 :134-139 |
| Independence requires different instruments, not more administrations of one ladder | `specified` | Fig 2 :31-32, Fig 7 :12-13 |
| The slot-to-index crossing is lossy and owes a measured R_T | `specified` | Fig 4 :27-30, Symbols :77-78 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the discipline of a falsifier written before the run. The shape claim is refuted if any of the following holds:

1. A single scalar (income or consumption) is shown to track the person-judgment anchor across all five slots, with a non-updating ground and no live per-slot residual left unexplained (breaks F1, F2, F3).
2. A verbatim figure line is found that returns a specific weight vector, or that licenses equal weights as a grounded measurement result rather than a convention (breaks F4, F7).
3. The five slots are shown to be one evidence pool read by one instrument, with no independent per-slot residual, so the union collapses to a partition with five names (breaks F1, F6).
4. Equal weights are shown to be paid for at the ground by an instrument that returns all five slots in one currency at one level, rather than declared (breaks F4).
5. A composite that decides an outcome is shown to remain a checkable convention with a refusal seat and a non-updating anchor (breaks F5).
6. A published index is shown whose channel does not decay, whose anchor does not update on the index, and whose round-trip gap from slots to score is measured at zero on a ground reading (breaks F9).

If any fires, the corresponding finding is withdrawn and the answer file is revised. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. **Split before you search.** Stop treating the question as an either/or. Report per-slot readings and keep verdicts per domain (F1, Fig 9 :54-56).
2. **Name the anchor.** For a question about a person, range the instruments separately against the person's own judgment. Use income and consumption as one reading among several, not as the ground (F2, Fig 2 :36-38).
3. **Keep the residual indexed.** Publish the live slot alongside any composite. An average with one live slot is a legal state, not a pass (F3, Fig 1 :13, :22).
4. **Do not present equal weight as a result.** If a group chooses equal weights, record it as a convention with a date, a decision frame and a refusal seat (F4, F5).
5. **Buy independence with different instruments.** Self-report plus informant report plus experience sampling plus a market counter are four frames. Four versions of the same ladder are one (F6).
6. **Measure R_T.** Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Carry the slot readings up to a composite and back down to slot predictions, then publish the gap.
7. **Report the gap as a verdict.** No weight vector is returned by the figures. Say so, and say what would have to be imported (F7, Fig 13 :134).
8. **Send the generator, not the conclusion.** Fig 4 :22: *"Only methods cross up. Only head starts come down."* The thing worth offering is the per-slot method and the pre-registered refuter.

---

## 6. Canonical usage check and retraction log

Two local framework files were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` — the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says what a missing thing would have to look like *"(a shape, not a name)"*, then stops at the limit of the available instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` — the eight-step loop, the three distinct questions of step 7, the mode rule, and the "Direction" discipline of binding the sought-for shape as an ordinary term.

### Retractions and confirmations of my own earlier readings

| earlier reading | status after the canonical check |
|---|---|
| "Income is never an anchor." | **Retracted and narrowed.** Fig 2 :36 says an anchor is legitimate when the question is constitutively about it. Income *is* the anchor for "can this household pay rent?". The claim is only that it is an instrument for a question about a person, and becomes a false anchor when promoted to settle the whole question. |
| "Equal weight is forbidden by the figures." | **Retracted and narrowed.** The figures do not forbid a declared convention. They forbid presenting a convention that decides an outcome as a grounded measurement result (Fig 10 :47-49). Equal weighting is allowed as an explicit, revisable convention with a refusal seat. |
| "The five dimensions are the five slots of a minimum set." | **Retracted.** Re-census: the six-term set in Fig 13 is physical states and structures, not welfare dimensions. Mapping health or autonomy onto one of the six would be an unproven binding. No such mapping is used here. |
| "More surveys means more corroboration." | **Retracted.** Fig 2 :31-32 and Fig 8 :49. More administrations of one ladder are one frame wearing many names. Independence is a property of instruments, not of sample size. |
| "The gap on weights is underivable in principle." | **Narrowed.** It is a shape-not-a-name gap: the figures return a shape and the weights are owed from a decision frame. It is not the underivable-in-principle kind and not merely unreachable-at-this-budget. The three are kept distinct per Formula step 7. |
| F1 union reading | **Confirmed.** Fig 9 :4-5, :54-56 and the Library of Babel essay's bundle passage agree from two low-overlap routes. |
| F2 anchor reading | **Canonically confirmed.** Fig 2 :36-38 is explicit that human judgment is the right anchor when the question is about people, and that instruments can be wrong on axes they do not measure. |
| F4 flat-form reading | **Canonically confirmed.** Fig 12 :5, :46, :94, :101, :130, plus the capability approach's public-reasoning passage. |
| Apparent strain Fig 1 versus Fig 12 | **Not strained.** Re-census below. Fig 1 governs the error signal; Fig 12 governs the composed term. Different objects. |

---

## 7. Strains and re-census

- **S1, apparent conflict, Fig 1 :19 (never aggregate) versus Fig 12 (compose into a molecule) and real composite indices.** Re-census: Fig 1 governs the residual, the error signal that tells the loop where to look. Fig 12 governs a term that composes after ingredients have settled. Aggregation for a decision is legal only after per-slot readings have settled, and it must carry its R_T (Fig 4 :30). Different quantities, so no contradiction. Kept visible as a re-census.
- **S2, apparent conflict, Fig 2 :37 (human judgment is the anchor) versus self-report bias.** Re-census: human judgment is the anchor, that is, the thing that settles the question. It is not a frame. Informant reports and experience sampling are separate instruments ranging against that anchor, not replacements for it. Diener's account and OWID's validation material corroborate the multi-instrument reading. Not strained after re-census.
- **S3, world/world conflict, Easterlin versus Stevenson and Wolfers, with OWID siding with the latter on the time-series question.** This was sent back to the census, not used to flip a verdict. Both sides draw on the same survey datasets, so by Fig 2 :40 their disagreement is not two independent frames. The figure verdict concerns which instrument is the anchor for a question about a person (Fig 2 :36-38), not the empirical strength of the income-happiness trend. The conflict does not bear on that object. Recorded, verdict unchanged.
- **S4, live type question, commensurability of the five slots.** Fig 12 :125-126 says bits and actions are different currencies and do not add. Income, health, security, relationships and autonomy are not obviously one kind of quantity at one level. A common-currency instrument would settle it; an argument would not. Named as a live strain with a falsifier in F4 and §4, not hidden.
- **S5, the question's word "reliably".** Re-census: reliability here is a property of a channel to a non-updating ground (Fig 10 :24, Fig 2 :33), not of repeatability alone. A biased ladder administered reliably is a saturated channel, and Fig 10 :25-26 names saturated metrics as a way to lose touch. No strain; a re-grounding of an ordinary term.

After re-census: **one live strain (S4), four dissolved readings kept visible, one world/world conflict returned to census without a verdict flip.**

---

## 8. Round trip note

The condensation used across this folder is: keep readings per slot, use the person as anchor, require independent instruments, refuse a single scalar as the whole answer, treat equal weights as a convention, and report R_T. Carrying that back down to the source question produces: income is not thrown away, it is one slot; the equal-weight option is not refused as a practice, it is refused as a measurement claim; and the universal weight vector is not answered. Two things the shorthand holds do not survive the trip unchanged: the exact boundary of "the person's own judgment" as an anchor when self-reports are biased, and the commensurability of the five slots (S4). Both are recorded rather than smoothed. R_T is therefore nonzero and is reported qualitatively as the set of dropped constraints, not numerically, because no ground reading was taken.
