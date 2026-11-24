# Figure-grounded audit: what the figures can and cannot decide about the drivers of inflation

**Mode of this document: `general` on the shape, `specified` on the per-domain predictions, `grounded` nowhere.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** The Recursive Self-Improvement Trap (2026-11-19) warns that LLM output *"can quickly simulate an approximate answer/output with the formula"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is checked for internal consistency against the figure text only. It cannot settle which driver of inflation is primary. No inflation series, index, or natural experiment was measured here.

**Sources.** Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop: `FRAMEWORK/figures/THE_FORMULA.md`. World sources were fetched on 2026-11-23 and are listed in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

Let `Γ` be a causal frame that predicts an inflation path from a candidate driver. `b` is what the frame takes to be the case, `a` is an action such as a policy lever, `o′` is the observed price path. `R = |Γ(b,a) − o′|`, measured **per slot**, where a slot is a price sub-index in a country in an episode. The question asks which of four candidate drivers, or which combination, makes `R` smallest across those slots.

The residual is not one number. It is a vector over slots: food, energy, shelter, services, durables; 1970s, 2008, 2021 to 2023; United States, euro area, emerging markets. Several distinct shape facts follow before any economics is consulted:

- **Arity.** Four candidate causes plus a compound option. The compound is a union of overlapping conditions, not a fifth peer cause. That is a structural claim, checked in F2.
- **Symmetry.** The candidates are not interchangeable under a symmetric bond. Demand and supply are opposed levers; money and expectations can be both cause and consequence. Order and reflexivity matter. Checked in F5 and in `06_isomers_and_order.md`.
- **Scale.** First order inside one episode and one sub-index; second order when episodes are compared and when the nominal anchor is included. A claim that holds at one scale need not hold at the other.

The word `primarily` is an aggregation operation over this vector. Whether that operation preserves a live signal is the first thing to settle, not the last.

---

## 1. Domain census, before choosing any figure line

One line per domain: actors, currency, anchor. No nameable anchor means it is not yet a domain.

| domain | actors | currency | anchor | partition or union | dependency order |
|---|---|---|---|---|---|
| **D1 Measurement and definition** | statistical agencies, price statisticians, index constructors (CPI, PCE, HICP) | index numbers, levels, rates | the published index and the underlying transaction prices, which do not move when an economist changes school | partition: one index definition per measured universe | first; no causal claim can be read before this link works |
| **D2 Causal attribution** | demand shocks, supply shocks, money and credit conditions, expectations, firms and workers | causal influence on the price path | **none inside the frame**; each school can score itself with its own quantity | **union** of overlapping conditions, not a partition | second; consumes D1's sub-index residuals |
| **D3 Reflexive expectations** | households, firms, wage negotiators, central bank communication | beliefs that feed back into the prices they predict | the realised path, plus survey and market expectations series, which are instruments not anchors | a cycle within D2, with its own loop | third; consumes D1 and the expectations instrument, and re-enters D2 |
| **D4 Verification and publication** | researchers, editors, referees, data archives | residuals, corrections, replications | reproducible data and a source-discriminating instrument, never agreement | partition of channels, but many share one evidence pool | fourth; it grades D1 through D3 from outside |

**D2 has no internal anchor.** That is the decisive census result. A school of thought whose metric is "how much variance my shock explains" is scoring itself with a quantity it also produces, which Fig 1 disqualifies. Until an outside anchor is named, D2 is a set of frames, not yet a ground-bearing domain.

**Union, not partition.** A demand shock and a supply shock can both be present in the same quarter; fiscal stimulus and a supply bottleneck overlap; expectations can amplify either. Fig 9 :55 states the rule: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* A single lever therefore cannot clear the compound. This is checked in F2.

**Order by dependency, Fig 3 :20:** *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* Asking "which driver is primary" before D1's per-slot residual is fixed is a reading taken below the break: *"It is a reading of nothing."* (Fig 3 :22-23).

---

## 2. Figure census, quoted before concluding

Each quote is verbatim from `03-FIGURES_TEXT.md`. The bearing column states what the line governs, so a strained fit can be detected and sent back to the census.

| figure | verbatim line | governs | verdict |
|---|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | D1/D2, the unit of the residual | bars a single aggregate answer |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | D1, the `primarily` operation | the question's own verb is the failure |
| Fig 1 :23 | "The ground enters as the only metric." | D1/D2, what may settle it | data and instrument only |
| Fig 1 :27 | "They are frame-internal. A frame cannot score itself with a quantity it also produces." | D2, each school's self-score | disqualifies internal metrics |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | all domains, the anchor test | D2 has no internal anchor |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | D4, agreement between schools | no verdict by consensus |
| Fig 2 :40 | "agreement about the world is worthless when the agreeing frames share an evidence pool" | D4, overlap of surveys and reviews | most inflation "evidence" shares a pool |
| Fig 2 :45 | "Frames range against the ground. They do not negotiate with it." | D2/D4, how a school may be checked | each candidate ranges separately |
| Fig 3 :20 | "The chain is ordered by dependency, not by importance." | order of D1 before D2 | attribution before measurement is void |
| Fig 6 :27 | "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." | D2/D4, gap versus hard question | cannot call the figure silence |
| Fig 7 :12-13 | "same closure, handed along; agreement compounds, evidence does not" | D4, many readers | no corroboration from more of the same |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | D2/D4, the limit of the search | gap is not "no cause" |
| Fig 9 :4-5 | "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." | D2, the question's form | split, do not search harder |
| Fig 9 :27-28 | "describe it before you go looking, or any frame you pick will seem to fit" | D2/D4, residual before frame | naming a school first is apophenia |
| Fig 9 :54 | "And when the split lands on a union rather than a partition, unbundle before you search again." | D2, union handling | unbundle the compound |
| Fig 9 :55 | "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." | D2, overlap | the four candidates overlap |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | D4, ranking and surveys | a poll is a filter, not a witness |
| Fig 10 :24 | "the ground does not decay, the channel does" | D4, stale indexes and pooled readings | keep the channel open |
| Fig 11 :49 | "An actor's valence is relative to the residual, not a property it carries." | D2, no permanently good or bad driver | a driver's role is episode-relative |
| Fig 11 :52 | "And contact cascades." | D2, second and third order effects | enumerate beyond direct contact |
| Fig 12 :117 | "isomer. Same atoms, different bond, different substance." | D2, comparing candidate structures | see `06_isomers_and_order.md` |
| Fig 12 :121 | "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." | D3, expectations | expectations are a cycle, not a line |
| Fig 12 :126 | "Bits price the description. Actions price finding out whether it holds." | D4, cost accounting | keep two costs apart |
| Fig 13 :38-39 | "independence is how little two frames draw on the same evidence, and it is what makes their agreement mean anything." | D4, independence | overlapping surveys are one witness |
| Fig 13 :134 | "Unreachable is a verdict here, not a silence," | D2/D4, the gap | say gap plainly |

No line was admitted after the conclusion was formed. Lines that only fit with a strain are marked as such below.

---

## 3. Findings

### F1: The word `primarily` is an aggregation that hides the live signal (decisive for the shape)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :23: "The ground enters as the only metric."

The observed inflation path differs sharply by sub-index. The Fed itself notes that *"various indexes can send diverse signals about inflation"* and that policymakers *"routinely examine the subcategories that make up a broad price index"* (Federal Reserve FAQ, 2026-11-23 access). That is the operational reading of Fig 1 in a real institution: the national headline rate is an average, and the decision-relevant residual is in the subcategories.

So the question as posed asks for one number over a vector. Under Fig 1, that operation loses exactly the information the question needs. The answer to "which driver is primary" cannot be read off an aggregate, because the aggregate has already thrown away which slot is live.

- **Mode:** `general`, structural.
- **Status:** `triangulated` (Fig 1 :19/:22 for the per-slot rule, Fig 9 :4-5 for the split rule; low overlap between the agent figure and the leave/arrive figure).
- **Refuter:** show that a single aggregate driver predicts each sub-index residual as well as a per-slot decomposition does, with a non-updating anchor. If that holds, Fig 1's indexing rule does not govern this domain and F1 fails.

### F2: The candidates form a union of overlapping conditions, not a list of rivals

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific"

The 2021 to 2023 surge is the live test case. A fetched public account lists *"pandemic-related economic dislocation"*, *"supply chain disruptions"*, *"the fiscal and monetary stimulus"* and *"price gouging"* together, then adds housing shortage, climate impacts and budget deficits as pre-existing contributors. It records a genuine dispute about *"whether inflationary pressures were transitory or persistent"* and about *"how much of a role profits played"*. The candidates are not exclusive. They overlap and cascade.

The Library of Babel essay names the exact shape: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."* (Isaiah N, 2026-10-02). That is Fig 9's union rule stated in the search vocabulary.

Therefore "some combination" is not an answer to the question. It is a restatement of the union. The work begins after that restatement.

- **Mode:** `general` on the union, `specified` on this episode.
- **Status:** `triangulated` (Fig 9 :54-57 and the Library of Babel essay, different vocabularies and different domains).
- **Refuter:** demonstrate that the four conditions are mutually exclusive across the slots in question, such that a partition and a single lever clear every intersection. If so, F2 fails and the question is genuinely single-cause.

### F3: The causal frames have no internal anchor

Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

A demand-side frame scores success by how much variance demand explains. A monetarist frame scores by the money growth correlation. An expectations frame scores by survey movements. Each is a quantity its own frame produces. Under Fig 1 :27 these are disqualified from deciding. Under Fig 2 :45 each must range separately against the same outside anchor, the observed sub-index path and a source-discriminating instrument.

The quantity theory source gives the clean empirical statement of the problem: Friedman wrote in 1987 that the connection between money and prices was perhaps the most-evidenced economic phenomenon on record, adding that *"The statistical connection itself, however, tells nothing about direction of influence"* (Wikipedia, Quantity theory of money, accessed 2026-11-23). That is a direct real-world instance of the source-versus-reading limit: the reading does not name its cause.

- **Mode:** `general`.
- **Status:** `triangulated` (Fig 1 :27 and Fig 2 :29/:45; the agent figure and the ground figure have low overlap).
- **Refuter:** produce an anchor inside a causal frame that does not move when that frame is revised, and show that it settles the residual on its own. If such an anchor exists, D2 was mis-censused and F3 fails.

### F4: Which driver is primary is a `gap` from the figures

Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."
Fig 13 :134: "Unreachable is a verdict here, not a silence,"

After a genuine census, no figure line derives a unique dominant driver of inflation. The figures are a domain-agnostic metatheory of composition and grounding, not a macroeconomic model. They govern the **shape** of the answer, per F1 to F3 and F5 to F9. They do not rank demand, supply, money and expectations. Claiming otherwise would be a strain: the lines would have to be forced to name quantities they do not mention. Per the canonical usage rule, a reading that needs a strain has misidentified its domain.

So the honest verdict at the empirical layer is `gap`, not a refusal to answer and not a hidden answer. Gap here means: from the figures alone, the dominant driver is unreachable; from the ground, it may be reachable, and the world sources show people actively trying with mixed instruments.

- **Mode:** `general` for the gap verdict.
- **Status:** `triangulated` (Fig 8 :39 for search-is-not-absence, Fig 6 :27 for depth versus absence, Fig 13 :134 for the verdict status).
- **Refuter:** derive a unique dominant driver from the figure lines alone, without importing an empirical series. If that succeeds, F4 is false. Note that a survey of economists would not do it: Fig 9 :60 says filters must not hand over verdicts.

### F5: Expectations form a reflexive cycle, not a fourth linear driver

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

Expectations are not a lever alongside the others. They are the loop's output fed back as input: expected prices enter wage contracts and pricing decisions, which produce the prices that confirm or disconfirm the expectation. The sign of that feedback decides whether the loop amplifies or damps. A chain cannot close; only a cycle can.

The world literature corroborates at low overlap. Bernanke's 2013 speech says *"the effects of monetary policy on the economy today depend importantly not only on current policy actions, but also on the public's expectations of how policy will evolve"* and concludes *"for monetary policy, expectations matter."* The Fed's 2 percent FAQ gives the operational reason: *"When households and businesses can reasonably expect inflation to remain low and stable, they are able to make sound decisions regarding saving, borrowing, and investment."*

Treating expectations as a linear input would be a category mistake. They are a different bond type in the same molecule.

- **Mode:** `specified`, ungrounded. No feedback sign was measured here.
- **Status:** `single-source` for the figure definition (Fig 12 :121), with world corroboration from Bernanke and the Fed FAQ. Those sources are institutional economics, a different closure from the metatheory, so the overlap is low.
- **Refuter:** show that the expectations-to-prices feedback has negative sign and closes at the observed scale, so expectations cannot amplify a shock. If it closes, the cycle reading collapses to a damped chain and F5 fails.

### F6: Agreement among schools cannot decide the question

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 7 :12-13: "same closure, handed along; agreement compounds, evidence does not"
Fig 13 :38-39: "independence is how little two frames draw on the same evidence, and it is what makes their agreement mean anything."

The quantity theory page records that surveys of American Economic Association members since the 1990s show most economists agreeing that *"Inflation is caused primarily by too much growth in the money supply."* That is a real fact about a community, but under Fig 2 :40 and Fig 9 :60 it is a filter, not a witness. Respondents draw on overlapping textbooks, data and training. Their agreement is the pool talking.

The same page records that monetarist money targeting was abandoned because *"the relationship between monetary aggregates and other macroeconomic variables proved to be rather unstable,"* and that Friedman *"later acknowledged that direct money supply targeting was less successful than he had hoped."* A verdict that cannot survive its own instrument is exactly the case Fig 2 :35 forbids settling by agreement.

- **Mode:** `general`.
- **Status:** `triangulated` (Fig 2 :35/:40 and Fig 7 :13, different figures and failure modes).
- **Refuter:** exhibit two causal frames with genuinely zero shared evidence that agree on a dominant driver and each range against a non-updating anchor. That would be triangulation, not a mirror, and F6 would fail.

### F7: Measurement precedes attribution; a reading below the break is a reading of nothing

Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."
Fig 3 :22-23: "A step whose input never arrives cannot be diagnosed, only its predecessor can. Which is why a reading taken below the break is not a weak reading. It is a reading of nothing."

The Fed FAQ on measurement supplies the real-world analogue: *"Inflation cannot be measured by an increase in the cost of one product or service, or even several products or services. Rather, inflation is a general increase in the overall price level of the goods and services in the economy."* It then lists the steps policymakers take: average over longer periods, examine subcategories to separate temporary from persistent events, and check core measures. That is D1 being settled before D2 is asked.

A claim that "demand caused inflation in 2021" is unreadable until the index, the period and the subcategory are fixed. Otherwise the claim is about a different object in every sentence.

- **Mode:** `general`.
- **Status:** `single-source` for the figure (Fig 3), with institutional corroboration.
- **Refuter:** show that causal attribution is invariant to the choice of index, window and subcategory. If it is invariant, D1 is not upstream of D2 and F7 fails.

### F8: The habitat must be enumerated outward, not stopped at direct contact

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :52: "And contact cascades."
Fig 11 :52-53: "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

No driver is permanently inflationary or disinflationary. Its valence is relative to the residual and the episode. The 2021 to 2023 account is a worked cascade: a pandemic shift in spending, then supply-chain stress, then energy and fertilizer shocks from the war, then housing shortage, then markup and profit discussions, then a policy response. Second and third order effects mattered.

The same source records a direct instance of valence reversal: *"The broadest measure of money supply, M2, increased about 45% from 2010 through 2015, far faster than GDP growth, yet the inflation rate declined during that period".* That was the opposite of what monetarism would have predicted. Money had a different valence in that episode.

- **Mode:** `specified`, ungrounded as to any particular cascade.
- **Status:** `single-source` for the figure (Fig 11), with world corroboration.
- **Refuter:** show that direct-contact enumeration (first order only) predicts the sub-index residual as well as the full cascade. If so, the habitat can be scoped narrowly and F8 fails.

### F9: Description cost and settlement cost are two currencies and do not add

Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."
Fig 12 :126: "They are in different units, so a system holding one accounting cannot compare them"

"Some combination" is cheap to state and expensive to settle. A single-cause story is also cheap to state and may take a whole research budget to refute. The figure requires both readings to be held apart. In inflation research, a verbal narrative costs little, while a source-discriminating decomposition costs data, identification and time.

- **Mode:** `general`.
- **Status:** `single-source` (Fig 12 :126-127).
- **Refuter:** exhibit a common unit in which description bits and settlement actions add without loss. If one exists, F9 fails.

### F10: A shape is what survives, and a gap is reported, not filled

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 13 :134: "Unreachable is a verdict here, not a silence,"

The canonical rule is explicit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"* (FIGURES_README_canonical.md), then stops and records the lineage. For this question the shape is: per-slot residual, union unbundled, outside anchor, reflexive expectations as a cycle, ground decides. The name of the dominant driver is not in that shape, and inventing one would breach the rule.

- **Mode:** `general`.
- **Status:** `triangulated` (Fig 9 :32 and the canonical README, low overlap between a figure and the usage rule).
- **Refuter:** show that the figure set names a specific macro driver anywhere. It does not, so this finding is the hardest to refute and therefore the least load-bearing; the shape findings F1 to F3 carry the verdict.

---

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. These are recorded here before any verdict is stated in `07_the_tether_answer.md`.

The shape claim is refuted if any of the following holds:

1. **Aggregation refuter.** A single aggregate driver predicts every price sub-index residual as well as the per-slot decomposition, judged against a non-updating anchor. This breaks Fig 1 :19/:22 and F1.
2. **Partition refuter.** The four candidate conditions are shown to be mutually exclusive across the slots, so a single lever clears every intersection. This breaks Fig 9 :54-57 and F2.
3. **Anchor refuter.** An anchor is produced that does not move when a school of thought changes its mind and that settles the dominant driver on its own. This breaks Fig 2 :29/:45 and F3.
4. **Cycle refuter.** The expectations feedback is shown to have negative sign at the measured scale, so the loop closes and cannot amplify. This breaks Fig 12 :121 and F5.
5. **Order refuter.** Causal attribution is invariant to index, window and subcategory. This breaks Fig 3 :20-23 and F7.

If any fires, the shape verdict is withdrawn. Until one is run, no part of this audit may be labelled `grounded`.

---

## 5. Recommendation

1. Restate the question before answering it: not "which driver is primary" but "which driver closes the residual in this sub-index, in this episode, against an anchor that does not update." This is Fig 9 :27-28 applied to the question itself.
2. Unbundle the union before searching for a lever (Fig 9 :54). Demand, supply, money and expectations are overlapping conditions.
3. Deny every school the right to score itself (Fig 1 :27). Ask what would refute it from outside.
4. Report the empirical dominance question as a `gap` from the figures (Fig 13 :134). Do not fill it with a survey, a narrative, or a preferred school.
5. Take the packet in `08_expert_verification_packet.md` to the public venues in `03_public_contact_points.csv`. Ask what would refute the shape. Do not ask which school the reader agrees with.

---

## 6. Canonical usage check and retraction log

Read after sections 0 to 5: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`.

The canonical rule bears on two places in this audit:

- **No naming where the framework returns a shape.** The README says the framework reports *"what a missing thing would have to look like (a shape, not a name)"* and stops at *"the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* This governs F4 and F10. A dominant driver would be a name, and the figures do not hold it.
- **Re-census on strain.** The README says *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* Applied below.

| earlier reading | status after the canonical check |
|---|---|
| Initial temptation to answer "money and credit" because an AEA survey shows most economists agree | **Retracted.** A survey is agreement within a shared evidence pool. Fig 2 :40 and Fig 9 :60 disqualify it. It is recorded in F6 as a filter, not used as a verdict. |
| Initial treatment of expectations as a fourth peer driver | **Retracted and re-censused.** Fig 12 :121 governs a cycle, not a linear bond. D3 was created as a domain with its own loop. F5 now carries it. |
| Initial statement that the figures "say nothing" about which driver dominates | **Corrected.** The figures govern the shape and explicitly license a gap verdict: *"Unreachable is a verdict here, not a silence"* (Fig 13 :134). Silence would have been the wrong report. |
| Apparent strain: Fig 9 :55 says union, while the question lists four separate options | **Not strained after re-census.** Fig 9 governs overlapping conditions; the question's list is a phrasing, not a census. Different objects. |
| Apparent strain: Fig 1 :19 says per slot, while national accounts publish one headline rate | **Not strained.** Fig 1 governs the residual used for search; the headline rate is a published aggregate. The Fed FAQ itself distinguishes them. Different quantities. |
| "Some combination" initially scored as a substantive answer | **Retracted.** It restates the union (F2) and does not close the residual. |
| F9 initially summed description cost and settlement cost | **Corrected.** Fig 12 :126-127 forbids the sum. Two currencies, held apart. |

### Verdicts by domain, kept separate and never averaged

| domain | verdict | mode | status |
|---|---|---|---|
| D1 Measurement and definition | The residual must be read per sub-index and per episode; the headline average hides the live signal. | `general` | `triangulated` (F1, F7) |
| D2 Causal attribution | Union of overlapping conditions; no internal anchor; which driver dominates is unreachable from the figures. | `general` shape, `gap` empirical | `triangulated` for the shape (F2, F3, F4), `gap` for the name |
| D3 Reflexive expectations | A cycle whose sign decides whether it closes; not a linear fourth driver. | `specified` | `single-source` figure, world corroboration (F5) |
| D4 Verification and publication | Agreement within a shared pool cannot decide; keep two cost currencies apart; report the gap. | `general` | `triangulated` (F6), `single-source` (F9), `triangulated` (F10) |

No row was averaged with another. A triangulated shape finding does not turn the empirical gap into a grounded verdict.
