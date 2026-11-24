# Figure-grounded audit: BUS-0053, board monitoring without micromanagement or information capture

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. None is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the corporate-governance question it reports on. No board, company or dataset was measured.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session; `FRAMEWORK/figures/THE_FORMULA.md`; `FRAMEWORK/reference/FIGURES_README_canonical.md`; `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` (rank-3 authority, cited as `Seat Map :line`). World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is management's belief about the firm's state, its plans and what its actions will yield, formed from its history and inherited priors.
- **a** is what management does: strategy, investment, hiring, reporting, capital allocation.
- **Γ(b,a)** is what management's library predicts and reports: the board pack, the budget, the forecast, the KPI dashboard, the narrative.
- **o′** is what actually happens: cash collected, customers retained, incidents, defects, turnover, regulatory findings, auditor findings, realized returns.
- **s** is the decision area, business unit and period. R is indexed by slot, never by a single board-level average.

> Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
> Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

The residual to be closed is: **the board must decide whether management's reported Γ matches the ground o′ in a given slot, while (i) not taking over the action a and (ii) not treating management-authored Γ as the thing that settles the question.** Both constraints are in the question. They are not stylistic preferences; each names a way the checking arrangement can collapse.

**Bind the sought-for shape as an ordinary term before the run** (Formula, "Direction"): the answer would be a set of conditions on the board's checking arrangement, each with an instrument that can fail and a named ground that cannot be moved by the party being checked; plus an explicit statement of which parts cannot be answered without a measurement. Until bound, the shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* Management's report moves when management is pushed, so it is an instrument at best and cannot be the anchor. The candidate anchor is the realized outcome: cash, customers, incidents, auditor findings, market outcomes. It does not change because the board or management changed its opinion. For questions about whether a decision was sound for a person, the anchor would be a person-level outcome; for the board's own conduct, the anchor is the same realized ground, not the board's reputation for good governance (Fig 10 :93).

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is at least three-place: management's Γ, an action a and an outcome o′, indexed by slot s and ordered by time t. It is a sequence rather than a set, so it carries the ordered bond `→` (sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a `⋛` comparison for "within tolerance" (*"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: management and the ground are not interchangeable.
- **Symmetry.** "Adequate monitoring" is a threshold relative to the cost of being wrong, not an absolute quantity (Fig 12 :85-89; Fig 2 :42). Time is asymmetric: a trust relationship broken by intense monitoring is not restored by the same amount of reduced monitoring.
- **Scale.** Three scales are in view: the single decision (one maker and one reading), the board and its committees (many agents with a shared library and something that ranks what they produce; Fig 4 :5), and the firm across periods. The membrane between them is *"Not a wall: a filter with a direction"* (Fig 4 :21) and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so R_T must be measured, not assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The maker, under check** (management) | CEO, CFO, management, internal reporting, the board pack | reported figures, forecasts, narrative, credibility | **no** anchor independent of the maker's own claims; Γ is not o′ | admitted only as the frame being checked, never as a witness |
| **D2 The ground of outcomes** | customers, cash, operations, employees, regulators, markets | realized outcomes | yes: outcomes that do not move when an opinion changes (Fig 2 :29-30) | admitted |
| **D3 The board's checking seat** (ground maintainer) | directors, audit committee, chair | independence, conventions, rulings, allocation | yes, qualified: the ground kept reachable, and *"nothing about which value the ground returns today serves the occupant"* (Seat Map :171, Fig 10 :59) | admitted, with declared stake |
| **D4 Independent witness frames** | external audit, internal audit with a direct line, regulators, customer and supplier data, whistleblower channels, instruments the board owns | low-overlap evidence | yes: instruments that do not draw on management's evidence pool (Fig 2 :31, :40) | admitted |
| **X1 "Board intuition about the CEO"** | the board's own picture | confidence | **no** anchor outside the board's acquired model; Fig 10 :51 says a seat that reads the interior grades against its own picture | not a domain yet |
| **X2 "One composite governance health score"** | blended metrics | a single number | no independent anchor; it is *"pooled readings"* (Fig 10 :26) and aggregation across slots (Fig 1 :22) | excluded as a witness, kept as a budget filter (Fig 9 :60) |

X1 and X2 fail the anchor test and are excluded before any figure line is applied to them. This is a structural exclusion, not a claim that experienced directors never notice anything.

### 1.3 Partition or union

D2, D3 and D4 overlap: the seat acts inside the habitat, and independent witnesses are themselves firms and people in contact with the residual. D1 and D4 stand in a further tension, because more intense checking of D1 can reduce what D1 voluntarily provides to the board. The whole question is a **union**, not a partition.

> Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
> Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
> Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

The unbundled conditions are: **(C1) the anchor stays reachable**, meaning the board has a reading of o′ that management cannot move; and **(C2) the seat stays outside**, meaning the board can still grade a decision it did not author. A board failing only C1 (capture by management's information) and a board failing only C2 (micromanagement) are not different degrees of one failure; they need different instruments. The *Library of Babel* essay states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> Fig 3 :20: *"The chain is ordered by dependency, not by importance."*
> Fig 3 :24: *"Why the middle link is where chains usually break."*
> Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Order for this question: **1 perception** (can the board read o′ at all, that is, is the arrangement observable?) → **2 vocabulary** (does the board have terms for what the firm's situation affords, or only management's terms?) → **3 objective** (can it say which residual it is checking and what would count as progress?) → **4 planning** (which instruments and which independent witnesses to install) → **5 learn and carry** (rulings recorded with provenance). The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument in most boardrooms. Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most governance effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs indexing and the ban on self-scoring |
| 2 The Ground | anchor must not update; independence vs common pool | decisive for C1 (information capture) |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scaling from one decision to the board |
| 5 Mint Pipeline | guards as a product; settlement; "nothing new here" | governs when a new monitoring term is owed |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs how a board obtains a genuinely new reading |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governs repeated board composition and "rubber stamp" risk |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; residual first; what the verifier may see | governs unbundling and the admissibility rule |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access; conventions not verdicts; declared stakes | decisive for C2 (micromanagement) and for the board's office |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | governs why adding one more independent director can change nothing |
| 12 The Bond | two currencies (bits, actions); arrangement is the substance | governs the budget distinction between describing a report and testing it |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop, not a board-specific blueprint |
| Operators / Symbols | `R`, `o'`, `Γ`, `s`, the ground, `R_T` | notation for the residual and the round trip |
| Seat Map (rank 3) | maker / auditor / ground maintainer / outside frame; ignorance is load-bearing | the board as an instance of the checking arrangement |

Strain test applied during this census: an early attempt to read Fig 13's six physical terms as "board resources" (space = structure of the firm, gradient = incentives, and so on) fit only by renaming. That is a strain, so Fig 13 does **not** govern board composition. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about boards, `grounded` only if settled by a measurement. None is `grounded`. Triangulation here means low topical overlap between figures, not independent evidence pools; all figures are one framework (Fig 2 :40).

### F1: The board must range management's reports against an anchor that does not update

**Mode: `general`. Domains D1, D2. Status: triangulated (Fig 2 and Fig 9, low overlap: anchor triangulation vs admissibility rule).**

> Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
> Fig 2 :33: *"The anchor must not update."*
> Fig 2 :34: *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."*
> Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*

Management's board pack is a frame. If the board's only anchor is a number management produced, then pushing on that number moves the anchor, and the arrangement is panel 1 (coherent drift) wearing the costume of panel 3. The drift is coherent because everyone can point at "the numbers" they were supposedly grounded on. The world puts the same rule in auditing language: ISA (NZ) 500 A35 says *"The reliability of audit evidence is increased when it is obtained from independent sources outside the entity"* (XRB, compiled 2022). That is a low-overlap corroboration from accounting, not a figure line.

**Refuter:** a documented case in which the outcome the board used as its anchor changed because management or the board disputed it, and the change was treated as legitimate rather than as a broken channel. If that can happen without the arrangement being called failed, F1 is false.

### F2: Independence is the scarce quantity, and disagreement from a low-overlap source is the signal

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 2, Fig 8 and ISA 500, three distinct roles).**

> Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*
> Fig 2 :32: *"Two people reading the same report are not two frames; two instruments pointed at the same thing are."*
> Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
> Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*
> Fig 8 :29: *"low overlap: B does not draw on A's evidence"*

Two directors who read the same board pack are one reader with two names. Adding more of them raises the vocabulary and does not add an anchor (Seat Map :283: *"A room does not upgrade the label."*). What buys information is a second instrument with a different closure: external audit, a regulator's data, customer churn measured at the customer, site observation by the board, a whistleblower line with a direct route. ISA (NZ) 500 A12 agrees in a different field: *"More assurance is ordinarily obtained from consistent audit evidence obtained from different sources or of a different nature than from items of audit evidence considered individually."* Paragraph 11 of the same standard requires modified procedures when *"audit evidence obtained from one source is inconsistent with that obtained from another"*, which is the figure's triangulation rule written as an auditing duty.

**Refuter:** a controlled comparison in which two channels drawing on the same management-produced dataset still produced independent information about the realized outcome. That would break the independence definition in Fig 2 :31, so F2 would fall.

### F3: Micromanagement is a seat violation, not merely a cost

**Mode: `general`. Domains D3, D4. Status: triangulated (Fig 10 and the Seat Map, with the zero-knowledge proof literature as a low-overlap corroboration).**

> Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."*
> Fig 10 :43: *"Soundness requires the checker to be unable to produce what it is checking. Never a player, never a proxy, never the author of a verdict or an atom."*
> Fig 10 :50: *"Looking inside the frame it grades is how the seat stops being outside."*
> Fig 10 :51: *"A seat that reads that interior acquires the frame's model, and thereafter grades reports against its own picture rather than against the ground."*
> Fig 10 :86: *"Outside the slice being graded. Whoever is measured by a reading cannot own it."*

Micromanagement is usually defended or attacked on efficiency grounds (it is slow, it demotivates executives). The figures give a sharper reason: the board that authors the decision cannot be the checker of that decision. It has become a player in the frame it grades, and every later report is graded against the board's own picture rather than against the ground. The cost is not time; it is the loss of the possibility of correction. Seat Map :149 states the law: *"Soundness. A verifier that can reconstruct the claim cannot verify it. The checker must be unable to produce what it is checking."* The cryptography literature is the figure's own cited analogue: a zero-knowledge proof lets a verifier be convinced *"without conveying to the verifier any information beyond the mere fact of that statement's truth"* (Wikipedia, "Zero-knowledge proof", 2026), and soundness means *"if the statement is false, then no cheating prover can convince an honest verifier"*. The board's useful ignorance is the same kind of thing.

**Refuter:** a board that both authored a decision and later produced an independent, ground-checked grade of it, with no measurable loss of outside view and no tendency to grade against its own plan. If this is routine rather than rare, the seat law weakens.

### F4: The board authors conventions, not verdicts

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10, Seat Map :167 and the Goodhart/Campbell literature, low overlap).**

> Fig 10 :45: *"It does author conventions, because nothing else can see across a seam."*
> Fig 10 :46: *"A convention makes no claim about the world; a verdict and an atom both do."*
> Fig 10 :47: *"a convention that decides an outcome has stopped being one"*
> Fig 10 :49: *"Declaring a meaning does not ground it."*

A legitimate board job is to author shared meanings across the seam between management and the board: what counts as a reportable incident, which metric is named the same way in every unit, what threshold triggers escalation, what evidence a declaration must rest on. Those are conventions and they make no claim about the world. The failure is when the convention decides the outcome, for example when the escalation threshold mechanically becomes the target and the reading ceases to carry news. Seat Map :167: *"A convention nothing can check is a constant the seat authored, carrying the seat's authority."* CNA (2022), in a different field, states the same failure: *"when a measure becomes a target, it ceases to be a good measure"* and recommends *"Use measurement data not generated by the organization being measured"*. Goodhart's original form, quoted in the same report, is *"Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes."*

**Refuter:** a board-set threshold that continued to carry information about the ground after it became the target of management's effort, demonstrably and prospectively. Under Fig 10 :47 that should not happen; if it does, F4 is wrong as stated.

### F5: Channel decay, not ground decay, is the usual failure

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10 and Fig 1, low overlap: ground maintainer vs per-slot residual).**

> Fig 10 :24: *"the ground does not decay, the channel does"*
> Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*
> Fig 10 :28: *"you have lost touch"*
> Fig 10 :29: *"→ keep the anchor reachable"*

The four named decay modes are concrete diagnoses. "Pooled readings" is the board-level version of aggregating across slots (Fig 1 :22). "Saturated metrics" is a KPI pinned at its ceiling while the underlying condition worsens. "Dropped transients" is the incident that happened between two board meetings. The seat's output in this state is not a verdict about the world but a verdict about the connection: contact has been lost, and the remedy is to restore the reading (Seat Map :93). Seat Map :285 adds: *"Every instrument points inward unless one is built to point out."* Internal audit reports that no one reads are a "produced, recorded, and not read" failure (Seat Map :271).

**Refuter:** a board that loses contact while its channels are independently measured as fresh, unsaturated, unpooled and actually read, with no decay in any of them. That falsifies the named mechanism.

### F6: R is indexed per slot; never accept a blended health score

**Mode: `general` with a `specified` consequence for board reporting. Domains all. Status: triangulated (Fig 1, CNA 2022, low overlap).**

> Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
> Fig 1 :23: *"The ground enters as the only metric."*
> Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
> Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

A single composite "governance health score" built from management-produced metrics scores the frame with a quantity the frame also produces. It is a budget instrument (where to look next), not a witness. CNA's recommendation *"Measure all relevant system characteristics rather than just a representative few"* and its warning that MOPs (easy to measure, easy to manipulate) get substituted for MOEs (hard to manipulate, hard to measure) corroborate from defense analysis. The specified consequence: any answer to BUS-0053 that reduces board oversight to one averaged number has already discarded the signal that says which slot is losing contact.

**Refuter:** a single composite score that predicts, prospectively and per named slot, which area will fail next, with no loss of the live signal. If one exists, F6's methodological consequence is false.

### F7: Evidence bearing on the maker is inadmissible; evidence bearing on the residual is admissible

**Mode: `specified`. Domains D3, D4. Status: triangulated (Fig 9 and Fig 10, mutually reinforcing but different in what they prohibit).**

> Fig 9 :51: *"evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it"*
> Fig 10 :59: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"*
> Fig 10 :93: *"A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified."*

This is the sharpest operational rule in the derivation. A board that grades management's reports by reference to the CEO's reputation, tenure, prestige, bonus narrative or "track record" is admitting evidence about the maker rather than about the residual. It is a stake-inducing channel: the board starts modelling the person instead of ranging the claim against the ground. The same rule forbids a board from treating its own reputation for good governance as ground (Fig 10 :93). Seat Map :209 states it as the residual selecting what the verifier may see.

**Refuter:** a board that consistently uses maker-level evidence (reputation, standing, tenure) and still detects each ground failure earlier than independent low-overlap instruments would. Under Fig 9 :51 that should not be possible; if observed, F7 falls.

### F8: The board's stake must be declared, and standing is a stake

**Mode: `general`. Domain D3. Status: single-source for the exact wording (Fig 10 and Seat Map are one framework), with director-tenure regulation as a weak external parallel.**

> Fig 10 :57: *"A seat with no stake at all does not exist."*
> Fig 10 :59: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"*
> Fig 10 :60: *"Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged."*
> Fig 10 :61: *"standing is a stake that survives the outcome it was earned on"*

Directors have stakes: fees, reputation, relationships, the desire for the strategy they endorsed to succeed. None of that disqualifies them. What disqualifies is an interest in *which value the reading returns*. Long tenure is specifically named as standing that survives the outcome it was earned on. The FRC's UK Corporate Governance Code 2024 makes a low-overlap practical parallel: it asks whether a chair of over nine years should remain and says boards must *"think very carefully about their composition, refreshment and succession planning"*, because a fixed relationship is a correlation that does not refresh itself. Seat Map :233: *"Every correction raises correlation between the corrector and the corrected."*

**Refuter:** a demonstrable board seat with no stake in any reading, or a tenured director whose independence from a long-graded management team is renewed by use rather than depleted by it. The figures say neither exists; either observation weakens F8.

### F9: Describe the residual before choosing the monitoring frame

**Mode: `general`. Domains all. Status: triangulated (Fig 9 and Fig 8, low overlap).**

> Fig 9 :27: *"describe it before you go looking, or any frame you pick will seem to fit"*
> Fig 9 :32: *"you get a kind of thing, never the answer itself"*
> Fig 8 :53: *"Residual first, frame second."*
> Fig 6 :34: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."*

Boards often start with a governance fashion (more independent directors, a new committee, a new dashboard) and then look for a problem it fits. Fig 9 forbids that order. Describe the effect first: which slot's Γ failed to match o′, by how much, for how long, and what reading would have surfaced it. Then look for the frame whose closure already predicts that shape. A second constraint: an instrument cannot be specified from a description; it is improved from a worse instrument *already returning something* (Fig 6 :32-35). So the question is not whether a perfect monitoring instrument could exist, but whether anything at any resolution is already returning a failing reading to extend.

**Refuter:** a board that selected its monitoring tool before describing the residual and still reliably found failures it had not known it was looking for, across several slots and periods. That would break the residual-first rule.

### F10: The union must be unbundled, because more of the first condition can destroy the second

**Mode: `specified`. Domains D1, D3, D4. Status: triangulated (Fig 9 plus the board-literature papers, which share an evidence pool and count as one witness).**

> Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
> Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

C1 (keep the anchor reachable through independent readings) and C2 (keep the seat outside by not authoring management's decisions) are different conditions with different instruments. Corporate-finance research corroborates the tension between the maker and the checker. Adams and Ferreira (2007, *Journal of Finance*) write: *"the CEO will not communicate firm-specific information to a board that is too independent"* and *"an informed board will also monitor him more intensively"*. Faleye, Hoitash and Hoitash (2011, *Journal of Financial Economics*) report that *"intense monitoring destroys the trust necessary for the chief executive officer (CEO) to share relevant strategic information with directors"*. Adams (2009, ECGI) concludes from survey data that *"monitoring alone may not be sufficient for good governance"*. These three papers share the governance literature pool and are one witness, not three (Fig 2 :31, :40). Malenko (2023, NBER) frames the whole area as *"key frictions preventing effective information flows"*.

The figure-grounded reading is not "monitor less". It is: build the independent reading (C1) from sources that do not depend on management's voluntary disclosure, so that the board can keep the seat outside (C2) without going inside to get the information. Where the board instead increases oversight of the same management-produced channel, it can lose both the information and the outside view.

**Refuter:** a board that raises monitoring intensity with no measurable decline in voluntary information sharing and with improved early detection of ground failures. That weakens the tradeoff claim, though not the independence rule in F2, which concerns instruments rather than voluntary disclosure.

### F11: What survives, and what is a gap

| claim | mode | figure | status |
|---|---|---|---|
| R is per decision area, never a blended governance score | general | Fig 1 :19, :22 | figure-derived |
| Management's report is Γ, not the anchor | general | Fig 2 :29-30, :45 | figure-derived |
| Independence is low overlap, not headcount | specified | Fig 2 :31, :32, :40; Fig 8 :29 | triangulated F2 |
| Micromanaging forfeits the checker's outside view | general | Fig 10 :42, :43, :50, :86 | triangulated F3 |
| The board authors conventions, not verdicts | specified | Fig 10 :45-49; Seat Map :167 | triangulated F4 |
| Channel decay, not ground decay, is the failure | specified | Fig 10 :24-29; Fig 1 :22 | triangulated F5 |
| Maker-level evidence is inadmissible | specified | Fig 9 :51; Fig 10 :59 | triangulated F7 |
| Stakes are structural and must be declared | general | Fig 10 :57-61 | single-source F8 |
| The two conditions form a union, not one score | general | Fig 9 :54-58 | figure-derived |
| Which specific board structure or instrument to install | not stated | none | **gap**: the framework returns a shape, not a name |

The last row is a `gap`, not a silence. Fig 9 :32: *"you get a kind of thing, never the answer itself"*. Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* The framework can characterise the missing instrument in effect terms; it cannot name it without already holding it.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule (Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device"*), the shape claim is refuted if any of the following is observed:

1. The outcome the board calls its anchor changes when management or the board pushes on it, and the change is treated as legitimate rather than as a broken channel (breaks F1, Fig 2 :29-34).
2. Two channels drawing on the same management-produced dataset still yield independent information about the realized outcome (breaks F2, Fig 2 :31-32).
3. A board that authors a decision routinely produces an independent ground-checked grade of it with no loss of outside view (breaks F3, Fig 10 :42-43, :50-51).
4. A board-set threshold remains informative about the ground after becoming the target of management's effort (breaks F4, Fig 10 :47).
5. A single composite board score predicts, prospectively and per slot, which area will fail next, with no loss of live signal (breaks F6, Fig 1 :19, :22).
6. Maker-level evidence (reputation, standing, tenure) reliably beats low-overlap instruments at early detection across several periods (breaks F7, Fig 9 :51).
7. A board with no stake in any reading is demonstrated, or long tenure is shown to renew rather than deplete independence (breaks F8, Fig 10 :57-61).
8. One lever restores both the anchor's reachability and the seat's outsideness with no categorically different residue (breaks F10, Fig 9 :57).
9. The figures themselves fail: a frame escapes its own closure by composition alone, or an anchor survives being moved by a frame (breaks Fig 6 :21, Fig 2 :30).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a ground reading pays for the shape.

---

## 5. Recommendation

1. **Lead with the residual and the refuter**, not with a governance theory (Fig 10 :52: *"Bring a characterised residual, never the source"*).
2. **Name the anchor explicitly and test whether it moves.** For each decision area, ask what outcome would settle whether management's report was right, and whether management can change that outcome by disputing the report.
3. **Buy independence where the cost of being wrong is highest** (Fig 2 :42), and buy it from low-overlap sources rather than from more readers of the same pack (Fig 2 :32).
4. **Do not let the board author the decision it grades.** Author conventions: metric definitions, thresholds, evidence requirements, escalation routes. Do not author verdicts (Fig 10 :45-47).
5. **Keep the two conditions separate.** A "governance quality" average is a pooled reading (Fig 10 :26) and destroys the diagnostic.
6. **Deny maker-level evidence.** Reputation, tenure and standing are stakes, not evidence about the residual (Fig 9 :51; Fig 10 :59).
7. **Declare the board's own stake**, including long service and the chair's standing (Fig 10 :60-61).
8. **Record rulings with provenance**: which residual was answered, with what reasoning and on what date (Fig 10 :62-66). This makes an error locatable rather than merely felt; it does not make the ruling right.
9. **Stop at the shape.** Do not name the number of independent directors, the committee structure or the reporting cadence as *the* answer. The framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source* and *Decoding Tacit Knowledge* (all read 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5, item 9.
- The seat map confirms that this question is a **seat** question, not primarily a loop question: *"the loop composes and mints; the seat keeps the channel open"* (Seat Map :314). It also confirms that the board maps to Seat 3 (ground maintainer) with parts of Seat 2 (interior auditor) delegated to audit committees, and management to Seat 1 (maker).
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six physical terms to "board resources" | **Retracted, strain S1** | Only fit by renaming. Re-census: Fig 13 governs the physical substrate, not a board's library |
| Treated three governance papers as three independent witnesses | **Retracted, one witness** | Adams/Ferreira, Faleye et al and Adams all draw on the same governance pool; Fig 2 :31, :40 |
| Planned to name "more independent directors" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer; FRC tenure rules are a parallel, not a derivation |
| Read FRC's nine-year chair rule as figure-derived | **Narrowed to external parallel** | It is a regulator's rule, corroborating the standing-as-stake claim only at the practical level |
| Called Fig 10 :43 a `general` law about all boards | **Kept `general` but seat-scoped** | It is structural for any checker, and its board instance is `specified` because no measurement here pays for it |
| Used the zero-knowledge proof literature as independent corroboration | **Declared partially framework-cited** | Fig 10 :84 already names zero-knowledge proofs, so this is a shared reference, not a low-overlap witness |
| F11 row "which specific board structure" | **Marked `gap`** | The instrument that would name the source is not held here; Fig 13 :134 |
| F3 "micromanagement is bad for trust" in an early draft | **Reframed as a seat violation** | The world literature gives the trust mechanism; the figure gives the soundness mechanism. Different claims, both kept |

**Strains sent to the log:** S1 (Fig 13 applied to board resources), resolved by re-census; S2 (calling management's KPI "the ground" while it plainly moves when management acts), resolved by Fig 2 :29-30 and Seat Map :221: the habitat updates, the ground is what settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the *Library of Babel* bundle passage: a union of (C1) reachable anchor and (C2) outside seat, each with its own instrument.
2. **What is the anchor?** Realized outcomes that do not move on being pushed (Fig 2 :29-30). Not the board pack, not management's credibility (Fig 1 :27).
3. **What is management in this arrangement?** Seat 1, the maker, who holds the interiors and must not know the criterion (Seat Map :45-51).
4. **What is the board?** Seat 3, the ground maintainer, which keeps the channel open, rules with provenance, allocates and refreshes, and must not read the interior it grades (Seat Map :76-103; Fig 10 :42-52).
5. **How does capture happen?** The anchor updates: management's number is treated as ground, and coherent drift goes unnoticed (Fig 2 :33-34); or the channel decays through stale, pooled, saturated readings (Fig 10 :24-29).
6. **How does micromanagement happen?** The checker becomes a player and grades its own picture (Fig 10 :50-51, :86).
7. **What can be said at the stop?** A shape: independent low-overlap readings, per-slot residual, conventions not verdicts, declared stakes, admissible evidence rules, recorded rulings, and a union that must be unbundled. Not which board structure, not a `grounded` verdict.

---

## 8. Updated verdict

The shape survives: **a board monitors without micromanaging or being captured when it keeps a reading of realized outcomes that management cannot move, draws that reading from frames with low evidence overlap with management's own, refuses to author the decisions it grades, authors conventions rather than verdicts, keeps R per decision area, admits evidence about the residual and not about its maker, declares its own stakes, records its rulings with provenance, and treats anchor-reachability and seat-independence as two conditions rather than one score.** The specific instruments that would implement this are a `gap`: the framework returns a shape, and the instrument that would name the source is not held here. Mode `specified`, ungrounded, candidate. Every world source was used as corroboration or as a named conflict returned to the census; none was allowed to flip a figure verdict. No unresolved strain remains after re-census.
