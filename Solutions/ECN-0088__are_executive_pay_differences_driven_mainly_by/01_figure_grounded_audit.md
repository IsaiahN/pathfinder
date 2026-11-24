# Figure-grounded audit: ECN-0088, executive pay differences

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the economics question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) - o′|` per slot s (Formula step 1; Symbols table, `R`). The Symbols table adds that R is *"the aim, not only the error signal, and it is always a slice"*. Here:

- **s** is the executive-firm slot: one named executive, one firm, one year. R is indexed by slot, not by industry or by occupation.
- **b** is the pay-setting frame's belief about what the executive must be paid: formed from its own history and inherited priors, which in this field are peer benchmarks and consultant advice.
- **a** is the compensation contract: salary, bonus, equity, options, severance, perks, deferred pay, consulting.
- **Γ(b,a)** is what the pay-setting frame predicts the firm should pay given that contract.
- **o′** is what the firm actually returns, read from an instrument the executive did not set.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)

The phenomenon to explain is not the level of pay but **why a given slot's gap between pay and an independently read outcome stays small or grows large**. A frame that predicts all executive pay is productivity-priced, or that all of it is rent, has a residual here: it cannot say which slot is which.

State the residual as: *why does the gap between what the pay-setting process awards and what an independently read firm outcome supports differ across executive slots, and what would discriminate the conditions that produce each gap?* This is an effect description. It names no theory, no "talent market", no "managerial power". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (i) a conjunction of conditions that determines whether a named slot's gap is priced or extracted, (ii) an anchor that does not move when the executive pushes on it, and (iii) an instrument that discriminates the conditions at the slot level. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"If it moves when you push on it, it is not an anchor."*

- The **reported pay number** is not an anchor. It is the output of the process under investigation, and it moves when the executive pushes on peer benchmarking, consultant choice, or target resetting.
- **Share price** is an instrument, not an anchor. Fig 2 :37-38 says human judgment *"is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* Price can be moved by accounting choices, buybacks, and option timing, which the world record documents (see `09_watson_answer.md`, WORLD).
- Viable anchor: an outcome or rule change the executive did not choose, for example an industry-adjusted outcome measured from outside the firm, a governance rule imposed by law or exchange, or a pay decision made with the CEO recused. This is characterized in effect terms. No specific dataset is named here, because naming it without a source gate would be an import with no provenance (Fig 6 :23, Fig 8 :50-52).

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is at least a three-place relation: executive slot, contract, independently read outcome, indexed by slot and ordered by time. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72), because the contract is set before the outcome is read, and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87), because a peer-median comparison is a threshold relation. It is not symmetric: pay and outcome are not interchangeable.
- **Symmetry.** "Excessive" is a threshold relative to a peer group, not an absolute quantity. "Scarce" is relative to a field of contenders, not a property carried by a person. Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*
- **Scale.** Four scales are in view: one executive slot, the board and compensation committee room, the market or industry population, and the time channel across a career. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), with *"Only the actors, the currency and the anchor change"* (Fig 4 :20). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Executive labour market** | executives, rival firms, recruiters, private equity | pay as the price of scarce talent; gap between pay and marginal contribution | yes in principle: an exogenous measure of contribution the executive did not set | admitted |
| **D2 The governance and contracting room** | board, compensation committee, CEO, consultants, shareholders, proxy advisors | pay as the output of a bargaining process; gap between pay and a CEO-recused counterfactual | yes: a decision made with the CEO recused, or an imposed governance rule | admitted |
| **D3 The measurement frame** | researchers, compensation datasets, regressions | estimated pay-outcome sensitivity; residual that persists and does not trend down | the data, but low independence since all studies draw on one pool | admitted with flag |
| **D4 Institutions and identification** | regulators, tax code, accounting standards, exchange rules, say-on-pay law | exogenous rule changes as variation | yes: an enacted change the executive did not choose | admitted |
| **X1 Talent as a free-floating property** | the executive alone | genius | **no** anchor independent of the firm outcome | not a domain yet |
| **X2 Firm size or industry as sole cause** | the firm, the industry | structural rents | already a habitat condition inside D1 and D2 | absorbed |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that executives never matter. X2 is absorbed because Fig 11 :46 names conditions as habitat elements: *"conditions: light, water, temperature, season, terrain"*. Firm size and industry are the terrain of this question, and they are a **common cause** of both higher pay and weaker governance, which is why both camps can cite the same observation (see F3).

### 1.3 Partition or union

D1 and D2 overlap: the same executive can be genuinely scarce and sit on a captured committee, so that overlap is a compound with its own loop. D2 and D4 overlap: governance rules shape the room, and the room's readings feed rule changes. D3 overlaps all three as the instrument through which the others are read. The whole is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

Fig 9 :4-5 gives the first test: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* The two camps in this question keep working well on different subsets of firms, which is the signature of a split, not of one hard question.

The unbundled conditions are: (C1) a pay level that is priced by an outcome the executive cannot move, and (C2) a pay-setting room whose reference does not update on the executive's own influence. A firm failing only C1 and a firm failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. A single lever, for example "tie more pay to performance", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55-56).

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the committee read the executive's contribution?), 2 vocabulary (does the contract have terms for the outputs it is buying?), 3 objective (can it say what progress would count as: shareholder value, retention, survival?), 4 planning, 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* A contract that names revenue, earnings per share, and total shareholder return has ingredients; it does not name the bond between the executive's action and long-run firm value. Most diagnostic effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not which camp wins |
| 2 The Ground | anchor must not update; mutual update and common cause collapses | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; R_T | governs individual-to-population transfer |
| 5 Mint Pipeline | guards as product; settlement not sufficient | governs why a pay correlation is not a settlement |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs exogenous variation as the route to a name |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs peer benchmarking as a mirror chain |
| 8 Union Surplus | idempotence; provenance separates convergence from import | governs triangulation and the one-pool warning |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the declared gap |
| 10 Ground Maintainer | ground does not decay, channel does; declare stakes | governs the captured room and the stakeholder declarations |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1 and D2 |
| 12 The Bond | isomer, catalyst, functional group, two currencies | governs why the two camps are not one dial |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest-stop role only (strain S1, section 6) |
| Operators table | ⋛ comparison; ¬ refusal | governs "excessive" and the impossibility of a standing verdict |
| Symbols table | R is the aim; ground is the anchor | no ground reading was taken here |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "pay" only fit by calling pay a kind of energy and governance a kind of gradient. That is a strain, so Fig 13 does **not** govern executive pay. Re-census sends it to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about pay, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The question is a union of conditions, not a partition with one dominant cause

**Mode: `general` structural, `specified` for the pay application. Domains all. Status: triangulated (Fig 9 and the NBER survey, low topical overlap between a union/partition rule and an evidence synthesis).**

The governing lines are Fig 9 :54, :55, :57 and Fig 9 :4-5 (quoted in section 1.3). The world supplies a direct corroboration from the centre of the field. Edmans, Gabaix and Jenter (NBER Working Paper 23596, 2017) write that they *"critically analyze three non-exclusive explanations for what drives executive pay -- shareholder value maximization by boards, rent extraction by executives, and institutional factors such as regulation, taxation, and accounting policy"* and conclude that *"no single explanation can account for all facts and historical trends"*. Three non-exclusive explanations, with no single winner, is the union in the field's own vocabulary. The question's either/or is therefore a bundled question: it combines at least the talent price, the bargaining room, and the institutional frame, and the third term is not reducible to the first two.

**Refuter:** a single intervention that restores both C1 and C2 in both failure types and leaves no categorically different residue (breaks Fig 9 :57). A world source showing that one of the three explanations has zero contribution across all slots would also fire.

**World bearing.** The NBER survey shares the compensation evidence pool with the other compensation sources below, so it is one witness, not several. Its value here is that it names the non-exclusivity, which is what the figures predict.

### F2: Evaluate per executive slot, never by an averaged pay share

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A statistic of the form "X percent of pay variation is explained by performance" or "Y percent by governance strength" scores the frame with a quantity the frame produces. It is a filter for where to look and for how much budget to spend, not a witness for a cause. The specified consequence: any answer to ECN-0088 that is an average across executives has already thrown away the signal that says which slot is losing contact with an independently read outcome. The world record shows the temptation clearly: aggregate ratios such as CEO-to-worker pay multiples dominate the public debate, while the NBER survey's own contribution is a critical review of *"the strength of executive incentives"* across firms and time, not a single decomposition.

**Refuter:** an averaged industry statistic that prospectively and correctly predicts which named executive slot will show a rent component. If one exists, F2's methodological consequence is false.

### F3: The anchor, the mirror chain, and the common cause

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 2, Fig 7 and the statistics source, low overlap between the anchor rule, the room chain and causal-inference theory).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"If it moves when you push on it, it is not an anchor."** (Fig 2 :30)
> **"they converge, and what they converge on is whoever had the most influence"** (Fig 2 :14-15)
> **"they never talk, and still agree"** (Fig 2 :19)
> **"so the agreement is the pool talking,"** (Fig 2 :20)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"same closure, handed along; agreement compounds, evidence does not"** (Fig 7 :12-13)

Two distinct collapses govern this question.

**Collapse 1, mutual update.** Peer benchmarking is a mirror chain. The committee reads peer pay, the consultant reads the same peer pay, the executive reads both, and each updates on the others. Fig 7 :36: *"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."* The world records the precise mechanism: a study found a practice of *"peer benchmarking" by boards, where their CEO's pay was pegged to the 50th, 75th, or 90th percentile* of peer firms (Wikipedia, Executive compensation in the United States). Buffett's name for it is *"Ratchet, Ratchet and Bingo"* (same source). The word "never lower" in that source is the operational signature of a reference that cannot move downward, which is a room with no ground.

**Collapse 2, common cause.** "Productivity" and "power" arguments cite the same large firms. Firm size and industry are common causes: large firms attract scarce executives and also have diffuse ownership, which is the governance condition. The statistics literature names this structure exactly. The Wikipedia article on confounding states: *"A confounder is traditionally understood to be a variable that (1) independently predicts the outcome (or dependent variable), (2) is associated with the exposure (or independent variable), and (3) is not on the causal pathway between the exposure and the outcome."* That is Fig 2's hidden shared source in a different vocabulary, which is why it counts as a genuinely low-overlap corroboration of the mechanism shape. It also warns that adjusting for the wrong variables can introduce bias, so the remedy is an instrument, not a longer list of controls.

**Refuter:** an anchor the executive cannot move, with two frames drawing on genuinely different evidence, that orders the two conditions in the same direction across slots. If it still cannot separate them, F3's gap is real rather than a defect of this derivation.

### F4: "Productivity and talent" is one frame; "power and weak governance" is one frame

**Mode: `general`. Domains D1, D2, D3. Status: triangulated (Fig 8 and Fig 2, low overlap between the union-surplus and independence rules).**

> **"Independence, between two frames, is how little they draw on the same evidence."** (Fig 2 :31)
> **"Two frames that overlap almost completely are one frame wearing two names."** (Fig 8 :48-49)
> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"** (Fig 8 :50-52)
> **"Residual first, frame second."** (Fig 8 :53)

"Scarce talent" and "marginal productivity" are two names for the competitive labour market frame. "Bargaining power" and "weak governance" are two names for the managerial power frame. Treating the four as four independent witnesses is double counting. Worse, the signalling literature shows that even the talent frame is not one thing: Spence's job-market model makes pay *"a signal"* of unobservable quality, and the Wikipedia article on signalling states that *"Signals are most credible when they are differentially costly"*. A high salary can therefore be a price of marginal product or a costly signal of quality, two different mechanisms inside the same camp. This is a source-discrimination problem, not a vote to be counted.

**Refuter:** two frames that genuinely draw on different evidence pools and arrive at the same slot-level verdict by separate derivations, with the record of each route preserved. Under Fig 8 :50-52 that would be corroboration at maximum independence, and the one-pool objection would be spent.

### F5: Governance has residual-relative valence; there is no standing list of good or bad arrangements

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 11 and the say-on-pay literature, low overlap between habitat valence and corporate law).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)

"Weak governance" is therefore a binding, not a kind. A strong compensation committee can be a benefactor for a residual of rent extraction and a malfactor for a residual of talent retention. Say-on-pay is the clearest world instance: Cheffins and Thomas predicted that it *"could hold back sudden jumps, but it would not stop the general upward drift in pay rates"*, and the Wikipedia article on say-on-pay reports a later study finding that binding reforms increased the value of shareholder voting rights while advisory ones decreased it. The same named instrument has different valence depending on which residual and which binding. An advisory vote treated as decisive is a convention promoted into a verdict (Fig 10 :47).

**Refuter:** a governance arrangement whose measured valence is invariant across a documented change of residual and across binding versus advisory forms. If one exists, F5 weakens to `general`.

### F6: The break is at vocabulary and objective, not at planning

**Mode: `specified`. Domain D1, D2. Status: single-source on the figure side (Fig 3), with the contract-theory corroboration from a different field.**

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"A vocabulary without bonds can name a state and cannot name a route to one."** (Fig 12 :111)

The standard reform proposal, "make the contract more incentive intensive", spends budget above the break. The contract already has terms for revenue, earnings per share, and total shareholder return. What it lacks is a term for the executive's contribution to long-run value and a bond between that contribution and the payout. The contract-theory literature names the same limit from inside the field: complex jobs *"will typically not be evaluated through explicit contracts"* (Prendergast 1999, quoted in the Wikipedia article on the principal-agent problem). Where the explicit measure is weak, subjective evaluation takes over, and the same source records that supervisors may be reluctant to distinguish critically between workers, which is a compression of ratings that weakens the link between pay and effort. That is a vocabulary failure, not a planning failure.

**Refuter:** a documented firm whose perception, vocabulary, and objective links all measure as working and whose pay residual is located at planning or execution. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F7: A pay-performance correlation is not a settlement

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 5, Fig 9 and the conflicting world findings).**

> **"The acceptance test is a bargain, not a threshold."** (Fig 5 :42)
> **"settling is necessary for a term to be composed over, and it is not sufficient."** (Fig 5 :69)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)

A claim such as "pay follows performance" has passed a description test only if stating it plus the leftover residual costs less than the unexplained gap before it (Fig 5 :26). But even if it passes, settlement is necessary and not sufficient: it still has to compose with an independent instrument. The world gives both directions. The Wikipedia article on executive compensation reports that a study of highly paid CEOs found improved profitability, while a review by Jacquart and Armstrong concluded that *"the notion that higher pay leads to the selection of better executives is undermined by the prevalence of poor recruiting methods"* and that *"higher pay fails to promote better performance"*. It also records the summary that *"There is very little correlation between performance pay of CEOs and the success of the companies they manage"* (principal-agent article). Conflicting findings are expected under a union: each rule works on a different subset. They are not a reason to average the verdict.

**Refuter:** a single pay-performance relation that predicts prospectively, per slot, and across a change of habitat, with the same coefficient and no subset dependence. That would collapse the union toward one condition.

### F8: The request for a single "mainly" is a `gap`, and the missing thing is an instrument

**Mode: `general`. Domains all. Status: figure-governed, with the metamerism corroboration from a framework essay.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)
> **"Unreachable is a verdict here, not a silence"** (Fig 13 :134)

No figure line returns a percentage split between productivity and power. After a genuine re-census the missing thing is not a name for a cause but a **source-discriminating instrument** at the slot level. The essay *The Hard Problem is About Source* gives the mechanism: *"If several paths create the same behavior, then behavior is a projection with lossy information"*, an instrument that reads green *"cannot comment on the source"*, and *"The answer is unreached until a better instrument exists"*. A high salary is a reading. Productivity, scarce talent, costly signalling, and rent extraction are several sources that can produce the same reading. What is owed is a discriminator, not an adjudication by argument.

**Refuter:** two instruments that discriminate the sources at the slot level, converge from different evidence pools, and satisfy the independence condition of Fig 2 :31. Until one is run, the percentage is unreached, not zero and not silence.

### F9: Stakes are structural and must be declared

**Mode: `general`. Status: figure-governed.**

> **"A seat with no stake at all does not exist."** (Fig 10 :58)
> **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."** (Fig 10 :59)
> **"Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged."** (Fig 10 :60)
> **"Correlation has valence."** (Fig 2 :39)

Every participant in this debate has an interest in the outcome: executives, boards, shareholders, consultants, researchers, regulators. The Seat Map states the rule at :163: *"High correlation is disqualifying for a verdict and efficient for a convention."* Declared here: this derivation has no stake in whether executive pay is high or low, but it does have an interest in the framework that produces the reading, which is disqualifying for verdict weight. The figures decide; the world sources only corroborate; a stakeholder's agreement is never counted as evidence.

**Refuter:** an outside frame with a genuinely different evidence pool that returns a correction on shape and names a failure class. Its failure is more useful than an endorsement.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per executive slot, never an industry average | general | Fig 1 :19, :22 | figure-derived |
| The anchor is an outcome the executive cannot move | general | Fig 2 :29, :30 | figure-derived |
| The question is a union of overlapping conditions | general | Fig 9 :4-5, :54, :55, :57 | triangulated F1 |
| Peer benchmarking is a mirror chain, not triangulation | specified | Fig 2 :14-15, :35; Fig 7 :12-13, :36 | triangulated F3 |
| Two names in a camp are one witness | general | Fig 2 :31; Fig 8 :48-49, :50-52 | figure-derived |
| Governance valence is residual-relative | specified | Fig 11 :49-51; Fig 10 :47 | triangulated F5 |
| The break is at vocabulary and objective | specified | Fig 3 :19, :20, :27; Fig 12 :111 | single-source F6 |
| A pay correlation is not settlement | specified | Fig 5 :26, :42, :69 | triangulated F7 |
| A single percentage split between the two camps | gap | Fig 9 :32; Fig 13 :134 | unreached, instrument owed |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule (Seat Map :287): *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. An anchor the executive cannot move, read by two frames with genuinely different evidence, orders the two conditions and shows one condition's contribution is zero across all slots (breaks F1 and F3).
2. A single lever restores C1 and C2 in both failure types and leaves no categorically different residue (breaks Fig 9 :57).
3. An averaged industry statistic prospectively predicts which named executive slot carries a rent component (breaks Fig 1 :19, :22 and F2).
4. Governance valence is invariant across a documented change of residual and across binding versus advisory forms (breaks F5, Fig 11 :49-51).
5. A pay-outcome relation predicts prospectively, per slot, and across a habitat change with one coefficient and no subset dependence (breaks F7).
6. Two instruments discriminate the sources at slot level from different evidence pools and satisfy Fig 2 :31 (breaks F8's gap).
7. Fig 8's idempotence fails, or a composition adds an atom to a closed set (breaks the figures themselves).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a ground reading has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of executive pay (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the two conditions separate in every report. A blended "pay fairness score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. At each handoff ask which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat any list of pay drivers as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Use the compensation literature as one corroborating witness and a budget filter, not as the verdict. The NBER survey, the Wikipedia syntheses, and the governance sources share a broad evidence pool (Fig 2 :31, :40).
6. Describe the missing instrument in effect terms before looking for it (Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not return a percentage. The framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to pay components | **Retracted, strain S1** | Only fit by renaming pay as energy and governance as a gradient. Re-census: Fig 13 governs the physical substrate, not a compensation contract |
| Treated "the market" as a single anchor | **Narrowed, strain S2** | Share price moves when the executive pushes via accounting, buybacks, and option timing. Re-census: the anchor is an outcome the executive did not move; price is an instrument (Fig 2 :37-38) |
| Read "talent" and "productivity" as two witnesses | **Retracted as double counting** | One competitive-labour-market frame under two names (Fig 8 :48-49) |
| Read "power" and "weak governance" as two witnesses | **Retracted as double counting** | One managerial-power frame under two names, same dataset |
| Planned to name a specific dataset as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing. A dataset is an import and needs a source gate and shadow test (Fig 6 :23, Fig 8 :50-52) |
| Wanted to call the union verdict `grounded` | **Narrowed to `specified`** | No ground reading pays for the firm-level claim here |
| Used aggregate CEO-to-worker ratios as evidence | **Retracted as a witness, kept as a filter** | Fig 9 :60; an averaged quantity cannot select a slot (Fig 1 :22) |
| First draft called F3 "decisive" | **Downgraded to triangulated** | Fig 2 and Fig 7 are two figures, but both come from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 physical substrate versus compensation terms), resolved by re-census to the honest-stop role; S2 (market as anchor versus market as an executive-movable price), resolved by Fig 2 :29-30 and :37-38 into an outcome anchor plus an instrument; S3 (Fig 11 valence relative versus a non-updating anchor), dissolved by re-census into two different objects, actor valence and anchor invariance. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :4-5, :54, :55, :57 plus the Library of Babel bundle passage: it is a union of at least three conditions, each with its own instrument.
2. **What is the anchor?** An outcome the executive did not move. Not the pay number, not an uncontested share price (Fig 2 :29, :30, :37-38).
3. **Is the answer in the executive alone?** No. Fig 11 :39-40. Capability and pay are properties of executive-and-habitat.
4. **How does the room go wrong?** By mutual update on peer benchmarks (Fig 2 :14-15, Fig 7 :36) or by a common cause that both camps cite (Fig 2 :18-21, confounding source).
5. **How does a version of the story stay stable?** A chair with a different closure and a channel to an unmoved ground, renewed by contact with rooms that differ (Fig 7 :35-36, Fig 6 :23).
6. **Why does a good arrangement turn bad?** Valence is relative to the residual (Fig 11 :49-51); a catalyst becomes a spent part (Fig 12 :119); a convention becomes a verdict (Fig 10 :47).
7. **What can be said at the stop?** A shape, four domain verdicts kept separate, seven falsifiers, and an instrument described in effect terms. Not a percentage, not a `grounded` answer. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **executive pay differences are a union of at least three conditions, the talent price, the bargaining room, and the institutional frame, with verdicts kept separate per domain and never averaged. A slot's gap stays small when the pay is priced by an outcome the executive cannot move and the room's reference does not update on the executive's own influence; it grows when either condition fails, and an arrangement that once helped can change valence when the residual changes.** The request for a single "mainly" is a declared `gap`, of the unreached kind, because what is missing is a source-discriminating instrument, not a name. Mode `specified` on the substantive claims, `general` on the structural shape, not `grounded`. No world source was allowed to flip a verdict; the two double-counting readings were returned to the census and withdrawn. No unresolved strain remains after re-census. The second seat in `11_audit.md` shares this evidence pool, so its agreement is internal consistency, not corroboration.
