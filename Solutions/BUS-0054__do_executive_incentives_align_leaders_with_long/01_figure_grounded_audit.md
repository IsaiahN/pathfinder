# Figure-grounded audit: executive incentives and long-term performance

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: SIMULATED DERIVATION, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources opened 2026-11-22 and listed in `10_source_ledger.csv`. Every `Fig N :line` quote below was taken verbatim from the figure text, before the conclusions were written.

---

## 0. The residual stated in effect terms

The contract is supposed to turn leadership effort into pay through performance measures. **`R` is the gap between what the contract rewards (a reading) and what the firm actually needs (long-term value, the ground).** "Easy to measure and manipulate" names the case where the reading moves without the ground moving.

- **Arity:** many object slots. There is a slot per metric (reported EPS, revenue, free cash flow, TSR, peer-relative TSR, "adjusted" measures, ESG scores), a slot per horizon (quarter, year, full cycle), and a slot per governance check (audit, disclosure, say-on-pay, clawback). Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A single headline "pay for performance" correlation throws away the signal about where to look.
- **Symmetry:** the relation is directed. `effort → metric → pay` is a chain; `metric → value` is an instrument relation that can fail in one direction. A metric that moves when the ground does not is not a symmetric reading of value, it is a separate artifact. The anchor must not update on the metric (Fig 2 :33: *"The anchor must not update."*).
- **Scale:** three levels with lossy transforms between them. Level 1 is the executive's action and the reporting cycle. Level 2 is the board's contract design and the metric vocabulary. Level 3 is the assurance and disclosure regime. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
- **What would count as evidence:** per-slot residuals that persist and do not trend down (Formula step 2's "persists and does not trend down" test), not an average alignment score; a measurement of whether the metric moves the ground or only reports it; a check of whether the verifier holds the same evidence pool as the maker.

**Binding the sought-for shape as an ordinary term (Formula "Direction").** Shape claim B0, written before the findings: *an incentive arrangement can contact long-term value only if (i) its anchor is an outcome no party to the contract can move by opinion, (ii) residuals are read per metric and per horizon and never averaged into one alignment number, (iii) the arrangement, not the ingredient list, carries the information, and (iv) the verifier lacks access to the maker's interior and shares no evidence pool with it.* This is a prediction, not a conclusion. It is refutable by the pre-registered refuter in §3.

---

## 1. Domain census (before choosing any figure line)

R by arity, symmetry and scale is stated in §0. One line per domain with actors, currency and anchor. A domain with no nameable anchor is not yet a domain.

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| D1 Executive action and the reporting cycle | CEO, CFO, business unit leaders | effort, strategic choices, accounting and stock outcomes | **realized long-term firm outcomes**. Yes. They settle over years and do not change because a compensation committee thinks differently. Market price alone is not the anchor; it is partly frame-driven. | partition boundary: does the metric contact value? |
| D2 Board contract design | compensation committee, directors, pay consultants | contracts, targets, benchmarks, discretion, peer groups | **long-term shareholder interest**. Yes, as a standard that does not update on the committee's own reported number. Where the committee's own standing depends on today's number, the anchor has moved and the domain has failed. | union: horizon mismatch plus stake in the reading |
| D3 Measurement and metric production | accounting standards, analysts, auditors, rating agencies, data vendors | reported numbers, "adjusted" figures, indices | **underlying economics of the firm**. Yes, but only through instruments that can be wrong on axes they do not measure. | union: frame-internal reading plus channel saturation |
| D4 Assurance and governance | external auditor, regulator, shareholders, proxy advisors, courts, disclosure rules | opinions, votes, restatements, clawbacks, filings | **realized long-term outcomes**. Yes, and the ground never votes in the room. | verification: independence and non-access |

**Partition or union.** The question's "or" is a **union of overlapping conditions**, not a partition. Four conditions can be live at once: (a) horizon mismatch, (b) metric manipulability, (c) a verifier that shares the maker's evidence pool, (d) a contract whose bonds make the measurable outcome the target. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds (Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*). Verdicts are therefore reported per domain and never averaged.

**Order by dependency (Fig 3).** 1 perception of long-term value → 2 vocabulary for value versus proxy → 3 objective (what counts as progress) → 4 planning (the contract) → 5 learn and carry (deferred pay, clawbacks, successor terms). Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* The likely break is between 2 and 3, because that is the link with no instrument (see F4).

**Strain test applied before concluding.** The first temptation was to map this question onto Fig 13's six-term substrate (space, time, energy as states; spectrum, gradient, network as structures), reading "action" as energy and "metric" as spectrum. That reading strains: Fig 13's six are a physical substrate, and the mapping would force a domain mismatch. Per the canonical usage rule, a reading that makes figures strain means the wrong domain was named, so it goes back to census. Re-census landed on the domain-agnostic figures (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12). The attempted mapping is preserved in the retraction log, not erased.

---

## 2. Figure census (quoted before the findings)

| figure | what it bears on here | verdict |
|---|---|---|
| 1 The Agent | per-slot residual, ground as only metric, frame-internal quantities disqualified | governing for D1, D3 |
| 2 The Ground | anchor must not update, independence, two collapses, correlation valence | governing for D2, D4 |
| 3 Dependency Chain | middle link where chains break; no instrument for the objective | governing for D2, single-source |
| 4 The Membrane | lossy transforms, round trip, methods versus recordings | governing for cross-level |
| 5 Mint Pipeline | output is never a measure of success | governing for D3 |
| 6 Closure / Reachability | more composition inside the closure adds no atom; import only | governing for D3 |
| 7 Room Chain | agreement compounds, evidence does not | governing for outreach, not for the verdict |
| 8 Union Surplus | idempotent closure; search that finds nothing is not proof of absence | governing for D3, stop rule |
| 9 Leave / Arrive | unbundle unions; describe before looking; filters not witnesses | governing for D2 and method |
| 10 Ground Maintainer | channel decay, verifier non-access, stake in the reading, conventions | governing for D4 |
| 11 The Habitat | capability is agent-and-habitat; contact not agent improvement | governing for D1, D4 |
| 12 The Bond | arrangement is the substance; isomers; two incommensurate prices | governing for D2, D3 |
| 13 Minimum Viable Set | retracted mapping (see strain test); "unreachable is a verdict" only | stop rule only |
| Operators table | a goal is a comparison; progress is a subtraction; negation is not a bond | supporting, not a figure-line citation |
| Symbols table | `R` is the aim; ground is the anchor | vocabulary |

---

## 3. Findings (F1 to F12)

### F1  -  The anchor of an incentive contract must not update on the metric (D2, decisive)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
Fig 2 :30: *"If it moves when you push on it, it is not an anchor."*
Fig 2 :34: *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."*

If the "ground" for pay is the reported number itself, or a peer group drawn from the same reporting culture, the design is Fig 2's mutual-update collapse: committee and management each update on the other's numbers and converge on whoever had the most influence. The drift is coherent, so the annual compensation report looks healthy. The anchor for this question is realized long-term outcomes, not the market quote on the measurement date. Market price is partly a frame (it updates on what investors think), so using it alone as the anchor is an instrument mistake, not a ground.

**Refuter:** show a contract whose anchor demonstrably changes its answer when the committee or the executive pushes on the reported metric, yet still tracks long-term outcomes out of sample. **Status: `triangulated`** (Fig 2 anchor law and Fig 10 :59 stake law, low overlap between anchor mechanics and seat incentive).

### F2  -  A metric the firm produces cannot score the firm (D3)

Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
Fig 5 :48: *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."*

Reported earnings, "adjusted" EBITDA and deal-close counts are outputs of the same system whose leader is being scored. They are in the frame's library, not readings of the ground. Fig 1 :23: *"The ground enters as the only metric."* A perfect score on a self-produced metric is the "nothing new here" state of Fig 5 :29 to :31, not evidence of long-term value.

**Refuter:** show a firm-produced metric that discriminates long-term value on held-out firms after removing the producing frame's influence (for example after restatement or independent reconstruction). **Status: `triangulated`** (Fig 1 and Fig 5 are different figures with different mechanisms).

### F3  -  A single alignment number hides the failing slot (D1)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

"Pay is aligned with performance" is an average over metrics and horizons. A firm can be aligned on revenue, misaligned on adjusted EPS, and inert on five-year total return. Those are three residuals, not one. The question's own "or" is a union condition, so averaging it into a binary verdict is a category error.

**Refuter:** show that one aggregated correlation identifies which metric and which horizon is failing, with no loss of slot information. **Status: `triangulated`** (Fig 1 and Fig 9, different figures; the per-slot rule also appears in the multi-agent essay with an independent social-science citation, but that essay shares an author with the figures and adds no independent witness).

### F4  -  The dependency chain breaks at the vocabulary-to-objective link (D2)

Fig 3 :25-26: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."*
Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Executive contracts have rich vocabulary for what a situation affords (revenue, margins, TSR, peer rank, ESG scores) and elaborate plans for paying against them. What they lack is an instrument for "what would count as long-term progress here" and for "has this reading been moved without the ground moving." That is the middle link, and it has neither obvious failures nor obvious tests. World corroboration is weak but pointed: the SEC's Chief Economist wrote in 2026 that *"And for a board, attention may be the scarcest resource of all."* Attention is not an instrument.

**Refuter:** exhibit a board instrument that states what would count as long-term progress and detects metric-only movement, and show it is actually read by the compensation committee. **Status: `single-source`** for the figure claim (no second figure line states the middle-link break); world source corroborates but shares no author, so it is a weak second witness, not a figure triangulation.

### F5  -  The channel decays even though the ground does not (D3)

Fig 10 :24: *"the ground does not decay, the channel does"*
Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*

Targets saturate. A three-year EPS target that was informative at grant becomes a floor once achieved; peer benchmarks pool firms that have diverged; restatements are dropped transients. The ground (long-run outcomes) has not moved, but the reading has lost contact. Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."* Raising the bonus multiplier does not restore a dead channel.

**Refuter:** show a metric whose sensitivity to long-term outcomes does not degrade after it becomes a target and a pay determinant. **Status: `triangulated`** (Fig 10 channel law and Fig 11 contact law).

### F6  -  Adding another KPI in the same family adds no atom (D3)

Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*
Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*
Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

A seventh accounting-based KPI is still inside the accounting closure. What can move the wall is contact with a frame that holds different primitives: an independent reconstruction of economics, a long-horizon outcome measure, a disclosure regime with different data. Fig 6's source gate and shadow test apply. Importantly, a second committee reading the same report is Fig 2's panel 2 (one evidence pool), not a new frame.

**Refuter:** show a new internal KPI that adds discrimination among long-term outcomes not already available from the existing accounting closure, with a ground test. **Status: `triangulated`** (Fig 6 and Fig 8, different figures).

### F7  -  The contract is a molecule, not an ingredient list (D2, D3)

Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
Fig 12 :94: *"The arrangement is the substance."*
Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

"Salary + annual bonus + options + restricted stock" is a list of ingredients. The contract is the bond structure: vesting schedule, performance hurdles, relative versus absolute comparison, discretion, clawback, holding period. Two contracts with identical ingredients and different bonds are isomers in Fig 12's sense: same atoms, different substance. Disclosure that lists only the ingredients records half of the arrangement, and nothing downstream can tell the two apart. Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."*

**Refuter:** show two contracts with identical ingredients but different bonds (for example a clawback versus none) that behave identically on realized long-term outcomes across a sufficient sample. **Status: `triangulated`** (Fig 12 bond definition and seat map :182, which states the same rule for verification crossings in a different document).

### F8  -  A verifier that can reconstruct the metric cannot verify it (D4)

Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."*
Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*
Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*

An auditor who works only from management's "adjusted" figures is a mirror. An outside director who reads the same analyst consensus as management is not a second frame. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* The cost of a wrong pay verdict is high (a decade of misdirected strategy), so independence should be bought accordingly, with separate evidence, not separate courtesy.

**Refuter:** show a verifier with full access to the maker's interior and evidence pool that corrects metric-only movement as reliably as one with independent access. **Status: `triangulated`** (Fig 10 soundness and Fig 2 independence, different mechanisms).

### F9  -  Pay-for-performance research is a filter, not a witness (method)

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
Seat map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."*

A meta-analysis of executive pay and performance tells us where to spend attention (which metrics are noisy, which horizons are under-measured). It does not settle whether this contract contacts this firm's long-term value. Say-on-pay votes and peer benchmarks are conventions for deciding where to look; a convention that decides an outcome has stopped being one (Fig 10 :47: *"a convention that decides an outcome has stopped being one"*).

**Refuter:** show that an aggregate empirical regularity, without a ground reading of the specific contract, is sufficient to settle the verdict. **Status: `triangulated`** (Fig 9 and Fig 10).

### F10  -  A stake in the reading disqualifies the reader (D2, D4)

Fig 10 :59: *"The condition is that nothing about which value the ground returns today serves the occupant: an interest in the outcome is unavoidable, an interest in the reading is disqualifying."*
Seat map :171: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."*

A committee whose own standing, bonuses, or peer reputation rise with today's reported number has an interest in the reading. That interest is structural, not a character defect. The honest move is to declare it and to put the reading outside the committee's control, not to ask for more trust in the committee.

**Refuter:** show a decider whose reward is strictly independent of the reported value yet who cannot be checked against the ground. **Status: `triangulated`** (Fig 10 and seat map, different documents).

### F11  -  "Alignment" is a label applied after the fact (D1)

Fig 11 :36: *"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there."*

By the same shape, "aligned incentives" is a label applied afterwards to a contract lineage that met its ground. It is not a property carried by the contract's vocabulary, and it is not produced by adding a word like "long-term" to a metric name. What does the work is contact: outcomes that refuse the contract, and a channel that keeps those outcomes readable.

**Refuter:** exhibit a contract whose alignment is demonstrable from its text alone, with no reference to outcomes that refused it. **Status: `single-source`** for the figure line; the metatable argument is structural, and the world sources do not state this claim.

### F12  -  The framework returns a shape, not a named metric (stop rule)

Fig 9 :32: *"you get a kind of thing, never the answer itself"*
Canonical figures README: *"what a missing thing would have to look like (**a shape, not a name**)"*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
Fig 13 :134: *"Unreachable is a verdict here, not a silence"*

The figures can say what an incentive arrangement must look like (non-movable anchor, per-slot residuals, arrangement-carried information, independent verifier). They cannot name the correct metric for a particular firm. If no instrument in the closure can discriminate long-term value from a moved metric, the honest report is `gap`, not a confident metric recommendation. "Unreachable is a verdict, not a silence."

**Refuter:** produce a figure line that names a specific compensation metric as the ground, or a ground measurement that settles which metric a particular firm must use. **Status: `triangulated`** (Fig 9 and canonical README, different documents).

---

## 4. Pre-registered refuter (written before the conclusion and before the WATSON run)

The shape claim B0 in §0 is refuted if any of the following holds:

1. A contract whose only anchor is a metric the executive can move without moving long-term value is shown to track long-term value out of sample across horizons (breaks F1 and F2).
2. A single aggregated pay-performance correlation is shown to locate the failing metric and horizon without loss of slot information (breaks F3).
3. A ground-visible measurement shows that the metric and long-term value are the same quantity at the relevant horizon, so metric-only movement is impossible in principle (breaks F5).
4. Two contracts with identical ingredients but different bonds (vesting, hurdles, clawback, discretion) are shown to behave identically on realized long-term outcomes (breaks F7).
5. A verifier with full access to the maker's interior and evidence pool is shown to correct metric-only movement as well as one with independent access (breaks F8).
6. A figure line is found that names a specific compensation metric as the ground for all firms (breaks F12).

If any fires, the shape claim is withdrawn or narrowed, and the retraction is recorded here rather than silently applied. Until one is run, nothing in this folder is `grounded`. This satisfies the seat map :287 rule: *"a falsifier written before the run is a design instrument, not only an honesty device."*

---

## 5. Recommendation

1. **Do not answer the question with an "either/or".** It is a union. Report four separate verdicts (D1 through D4) and never average them.
2. **Bind the shape, not a metric longlist** (F12). Ask for a non-movable anchor, per-slot residuals, arrangement-carried information, and an independent verifier.
3. **Repair the middle link before adding new KPIs** (F4, F6). An instrument for "what would count as long-term progress" and for "did the reading move without the ground" is owed, not another accounting ratio.
4. **Price the arrangement** (F7). Disclose and check vesting, hurdles, comparison basis, discretion and clawback, not just the ingredient list.
5. **Buy independence where the cost of being wrong is high** (F8, F10). Separate evidence, declared stakes, and verifier non-access.
6. **Report `gap` where no instrument exists** (F12). Fig 4 :30 requires the round trip gap to be measured rather than assumed zero; `11_audit.md` carries the qualitative `R_T`.
7. **Lead outreach with the residual and the refuter** (Fig 10 :52: *"Bring a characterised residual, never the source."*). Do not ask for trust or agreement.

---

## 6. Canonical usage check (figures README, seat map, formula)

Read after the first five sections and used to govern how the figures may be applied:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"* and *"the quotes are the authority, not this summary."* A reading that makes figures contradict one another has misidentified its domain; re-census, do not soften. The framework returns *"a shape, not a name"* and stops where instruments can no longer distinguish, recording the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md` step 7: SEARCHED first (cheapest), then INWARD, then OUTWARD, kept distinct. Underivable in principle and unreachable at this budget are different facts with different instructions.
- Seat map :163 and :171: correlation disqualifies a verdict; declare unavoidable stakes; no personal-email or receptiveness ranking in outreach.
- Fig 9 :60: filters for the budget, witnesses for the verdict.

### Retractions and confirmations (kept visible)

| earlier reading | status after canonical check |
|---|---|
| Map "action" to energy and "metric" to spectrum under Fig 13's six-term substrate | **Retracted at strain test.** The six are a physical substrate; the mapping forced a domain mismatch. Re-census landed on the domain-agnostic figures. Preserved here as evidence of the correction. |
| "Incentives either align or they do not" (binary reading of the question) | **Retracted.** The "or" is a union of overlapping conditions (Fig 9 :54). Four domain verdicts are kept separate. |
| "More independent directors automatically buy independence" | **Narrowed.** A second reader of the same evidence pool is Fig 2 panel 2, not an independent frame (Fig 2 :31). Independence requires different evidence. |
| "Long-term value is the anchor" | **Specified.** Realized long-term outcomes are the anchor. Market price alone is an instrument and can be wrong on axes it does not measure (Seat map :18). |
| "A new KPI can move the wall" | **Refused.** Only import from a closure that differs moves the wall (Fig 6 :21, :23). A new KPI inside the accounting family adds no atom. |
| F1 anchor law | **Confirmed** by Fig 2 :29 to :34 and Fig 10 :59. |
| F7 arrangement rule | **Confirmed** by Fig 12 :5, :94, :117 and seat map :182. |
| F12 shape-not-a-name | **Confirmed** by Fig 9 :32 and the canonical README. |
| F4 middle-link break | **Still `single-source`** in the figures. World corroboration is weak and declared, not promoted to triangulation. |

### Where the three route questions land (Formula step 7)

- **SEARCHED:** yes. The compensation literature already contains the relevant failure classes (metric manipulation, pay for luck, peer benchmarking, horizon mismatch, exit selection). No new atom is owed for those.
- **INWARD:** an instrument already returning something exists. Pay-versus-performance disclosure (SEC 2022), restatements, clawbacks and peer-relative TSR are readings that already fail to resolve; they can be sharpened. Sharpen here first.
- **OUTWARD:** a frame with a different closure is needed for the stake-in-the-reading and verifier-non-access conditions: independent reconstruction of economics, disclosure regimes with different data, or assurance that does not use management's adjusted figures. This is an import with a source gate and a shadow test, debited against independence.
- INWARD and OUTWARD are opposed and are never read against one another. The verdict does not come from either; it comes from the figures, with world sources as secondary corroboration.

### Updated verdict

The shape claim survives with stated modes. Four domain verdicts are kept separate: D1 (executive action) and D3 (measurement) are `triangulated` on the frame-internal and channel-decay findings; D2 (contract design) is `triangulated` on anchor and arrangement, with the middle-link break `single-source`; D4 (verification) is `triangulated` on independence and non-access. Strains after re-census: one mapping strain retracted, one "independent director" claim narrowed, one `single-source` claim declared. None hidden. The question's binary framing is refused as a union error, not answered by averaging.
