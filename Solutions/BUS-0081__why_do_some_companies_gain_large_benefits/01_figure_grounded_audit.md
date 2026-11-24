# Figure-grounded audit: BUS-0081, unequal benefit from similar technology

**Mode of this document: `specified` on the firm-level claims, `general` on the structural shape, `gap` on the named winner. Nothing here is `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* LLM output is *"simulacra."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on. No firm was measured.

**Sources for figure text.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Every quoted string below is an exact substring of that file (checked character by character in `11_audit.md` and by `validate_solution.py`). Supporting framework sources: `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed with quotes in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Gamma(b,a) - o'|` per slot `s` (Formula step 1; Symbols table :37-40, :43-44). For this question:

- **b** is the firm's belief about what the technology will do. It is formed from its own history and inherited priors (Symbols :20-22). Vendor claims and industry enthusiasm are part of `b`, not part of the ground.
- **a** is what the firm actually does: buys, integrates, retrains, redesigns a workflow, changes a metric, measures, or does none of these.
- **Gamma(b,a)** is what the firm's library of routines, data, skills and assets predicts the technology will return.
- **o'** is what the market actually returns: realized throughput, quality, defect rate, time to customer, willingness to pay, survival.
- **s** is the firm-and-workflow slot. R is indexed by slot and by time, never aggregated into an industry average.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)

The phenomenon to explain is not the size of the purchase and not the mean productivity statistic. It is **why `R_s` stays small in some slots and grows in others after the same atom enters both**. Call the observed quantity `B_s`, the realized benefit per slot. `B_s` is not a number the framework returns. It is the residual's behaviour, and the question asks for its conditions.

State the residual as: *why does the gap between what a firm's routines predict a newly bought technology will return and what its market actually returns remain small in some slots and grow quickly in others, when the technology atom is the same?* This is an effect description. It names no theory, no "digital maturity", no "absorptive capacity", no "complementary assets". Those are candidate names and are withheld until the census and the source gate.

**Bind the sought-for shape as an ordinary term before the run** (Formula, "Direction"; Fig 5 :65-68). The answer would be a conjunction of conditions on (i) the bonds the firm builds around the tool, (ii) contact with a ground that does not update on the firm's own report, (iii) renewal of reach through a closure that differs, and (iv) reproduction of the habitat that made a pilot work, together with an instrument that can discriminate a failure of one condition from a failure of another. Until written down, that shape is a preference, predicts nothing, and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The market is explicitly a named anchor. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* Vendor benchmarks, adoption counts, employee sentiment and internal utilization dashboards move when pushed; they are instruments at best. Fig 10 :33: *"The anchor must not update."* Viable anchor: realized market return per slot, including customer payment and survival, measured after the tool is in place.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry and scale of R

- **Arity.** R is a three-place relation (firm `Gamma`, action `a`, market return `o'`), indexed by slot `s` and ordered by time `t`. It therefore carries an **ordered** bond, sequence (`->`: *"A then B; B needs A to have happened"*, Fig 12 :72; Operators :30-34), and a **comparison** bond for "large benefit" relative to a baseline (`⋛`: *"a threshold relation between two quantities"*, Fig 12 :87; Operators :48-51). It is not symmetric: tool and firm are not interchangeable.
- **Symmetry.** "Large benefit" is a threshold, not an absolute quantity (Fig 12 :85-89). The history is asymmetric in time: a benefit lost through habitat substitution is not recovered by reversing the purchase (Fig 11 :66-70).
- **Scale.** Three scales are in view: the single firm's step-by-step loop (Fig 4 :16-17), the population of firms with *"something that ranks what they produce"* (Fig 4 :5), and the time channel across adoption and diffusion. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21). Because the transform is lossy, the round-trip gap `R_T` must be measured rather than assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where no anchor can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The adoption loop** (one firm, one scale) | decision makers, routines, the tool, `Gamma` | actions and residual reduction | yes: realized market return on the slot (Fig 2 :29) | admitted |
| **D2 The market habitat** (population) | customers, competitors, entrants, suppliers, regulators | survival, share, willingness to pay | yes: customer choice; market as ground (Fig 2 :29) | admitted |
| **D3 The composition library** (inside the firm) | atoms (tool, data, skills, routines) and the bonds between them | reach, `|phi|` cost, settlement | yes: *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The measurement channel** (across time) | metrics, instruments, percepts, dashboards | contact with the ground | yes: *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 Technology as a free-floating cause** | the tool alone | capability | **no** anchor independent of the firm's realized outcome | not a domain yet |
| **X2 Industry productivity statistics as sole cause** | the industry | average returns | measurable, but this is already D2 plus D4, and an average dissolves the slot signal (Fig 1 :22) | absorbed, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that tools never matter. A tool that changes contact can matter enormously (Fig 11 :40 read together with Fig 6 :26); what fails is the idea of benefit as a property of the tool considered alone.

### 1.3 Partition or union

D1 and D3 overlap: `Gamma` is inside the firm loop, so their overlap is a compound with its own loop. D2 and D4 overlap: contact with the ground is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1 (bonds/arrangement).** The tool is composed with data, skills and routines by typed bonds, not merely added as an ingredient (Fig 12 :46, :94).
- **C2 (vocabulary and objective).** The firm can say what the tool affords and what would count as progress with it (Fig 3 :24-27).
- **C3 (channel to a non-updating ground).** The firm can still read what pays; its metrics have not gone stale or pooled (Fig 10 :24-29).
- **C4 (reach renewal).** The firm's reach moves through contact with a closure that differs (Fig 6 :23, Fig 8 :32).
- **C5 (habitat reproduction).** The conditions that made a pilot succeed are reproduced, and the actors unintentionally introduced are enumerated (Fig 11 :66-70).

A firm failing only C3 and a firm failing only C4 are not different degrees of one failure. They are different compounds needing different instruments. *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order: 1 perception (can the firm read the market response?) -> 2 vocabulary (does `Gamma` have terms for what the tool affords?) -> 3 objective (can it say what progress with the tool would count as?) -> 4 planning (deployment) -> 5 learn and carry (Fig 3 :4-17). Buying a tool is step 4 work. The break is usually at steps 2 and 3, which have neither obvious failures nor obvious tests (Fig 3 :25-27). Most improvement effort lands above the break because that is where the measurements already exist (Fig 3 :29-30). Fig 12 :111-115 names the same gap in notation terms: *"A vocabulary without bonds can name a state and cannot name a route to one."*

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs indexing and the refusal of averages |
| 2 The Ground | market is a named anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; `R_T` | governs scale transfer and pilot to production |
| 5 Mint Pipeline | three guards as product; "nothing new here" | governs when a tool can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs reach renewal (C4) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs the time channel and repeated pilots |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick loss (C3) |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; isolation is substitution | decisive for D1, D2 and C5 |
| 12 The Bond | ingredient versus arrangement; isomer, catalyst, functional group; two currencies | decisive for "despite buying similar tools" (C1) |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest stop and the `gap` |
| Operators table | sequence, comparison, negation | governs the typed relations in the census |
| Symbols table | `R` is the aim; the ground is the anchor | governs the residual statement |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate directly to "technology, data and workflows" only fit by calling a tool a kind of energy, a workflow a kind of gradient, and a firm's data a kind of space. That is a strain, so Fig 13 does **not** govern the technology atoms. Re-census sends Fig 13 to the honest-stop role only (section 8, strain S1). The isomer and arrangement work is governed by Fig 12, which is about bonds and does not require the physical six. No other figure needed a strain after re-census. Two live type questions are named rather than hidden: the fixed-atom condition on the isomer claim (F1, section 8 strain S2), and whether a bought atom that changes no contact can still move the wall (F5, strain S3).

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about firms and technology, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Similar tools are similar ingredients; the benefit is the arrangement

**Mode: `general` for the notation rule, `specified` for firms. Domains D1, D3. Status: triangulated (Fig 12 and Fig 4, low overlap: bond pricing versus between-scale membrane).**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands. A recipe that names only its ingredients has recorded half of itself."** (Fig 12 :46)
> **"The arrangement is the substance."** (Fig 12 :94)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)

"Despite buying similar tools" is a statement about atoms, not about molecules. Two firms that licence the same platform hold the same atom. What differs is the typed bond between that atom and the firm's data, skills, decision rights and routines, and the order of those bonds. Under Fig 12 :117 the two configurations are **isomers** over a fixed shared atom set: same atoms, different bond, different substance. The difference is invisible in the purchase order and decisive in the benefit. Fig 4 :25 adds the failure mode: *"A recording carried upward looks like knowledge and is a description of one occasion."* Buying a vendor's "best practice playbook" is importing a recording of one occasion; replayed in another habitat, it produces a repeat of a past success and cannot produce a new one.

Isomer status is `specified`, not `grounded`, and it carries a fixed-atom condition. Two firms never hold literally identical atom sets, so the strong claim is a controlled comparison over a declared shared set, not a claim about every pair of buyers. The weaker, always-available claim is the functional-group reading (Fig 12 :124): both configurations are members of the same kind of arrangement with different occupants in the slots.

**Refuter:** two firms with demonstrably identical atom sets and identical typed bonds, measured per slot, whose realized market benefits differ; or two firms with different bonds and arrangements whose benefits are indistinguishable after the ground test. Either breaks the arrangement claim.

**World bearing (secondary only).** Brynjolfsson and Hitt 2000 report that *"organizational 'investments' have a large influence on the value of IT investments"* (RePEc abstract, opened 2026-11-22). That is the business-pool name for bonds around the atom. It **corroborates** F1 at the firm level but shares the economics/IS evidence pool with F7 and with the J-curve paper, so it counts as one witness. Rogers' compatibility attribute (via Henderson 2017) is a genuinely low-overlap corroboration from diffusion research: an innovation must be *"consistent with the existing values, past experiences, and needs of potential adopters"*, which is a statement about the bond to the receiving system, not the atom.

### F2: Capability is a property of firm-and-habitat, not of the tool alone

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat valence versus membrane kernel).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

The habit of answering "why did the tool pay off here?" with a list of tool features is the named agent-only error. A tool is an improvement to the agent. If it does not change contact with what the market pays for, Fig 11 :40 says it changes nothing, however impressive the feature list. If it does change contact, for example a sensor that makes a previously unreadable customer response readable, it can matter greatly. The figure does not ban tools; it locates their effect in the contact, not in the tool considered alone.

Fig 11 :49-51 adds that the valence of the tool is relative to the residual: *"No standing list of good actors survives a change of residual."* A tool that is a benefactor to one firm's residual can be a malfactor to another's, with no change in the tool.

**Refuter:** a controlled comparison in which a firm's realized benefit is unchanged across a habitat substitution that demonstrably removes or reverses the ground's payment for what the tool does. If it survives, F2 is false.

**World bearing.** Cohen and Levinthal 1990, read in full via reproduction, state that *"the ability of a firm to recognize the value of new, external information, assimilate it, and apply it to commercial ends is critical to its innovative capabilities"* and that some critical knowledge *"cannot be bought and quickly integrated into the firm"*. The second clause is a direct corroboration of F2 and of Fig 4 :23-25: the atom can be bought, the composing capacity cannot be bought as a recording. Organizational learning is a partly overlapping business pool, so one witness.

### F3: The break is at vocabulary and objective, and most tool money lands above it

**Mode: `specified`. Domain D1. Status: single-source on Fig 3, with Fig 12 :111-115 as a corroborating line from a different figure but the same framework, so one witness.**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)
> **"A vocabulary without bonds can name a state and cannot name a route to one."** (Fig 12 :111)

A firm can name its tools, its data and its vendors. Having terms for the ingredients is taken for a dictionary, when it is a grammar (Fig 12 :113-115). The failing link is usually the ability to say what the new situation affords and what progress with it would count as. Procurement, rollout and training budgets are step-4 work and land above the break. F3 predicts that the highest-value diagnostic question is not "did the tool work?" but "at which link does this slot's chain stop, and was that measured?"

**Refuter:** a documented set of slots whose perception, vocabulary and objective links all measure as working and whose failure is located at planning or execution. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F4: Quick loss of benefit is a failure of the channel, not a decay of the ground

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer versus room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"the output is not a verdict, it is"** (Fig 10 :27) **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)
> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37), **"the bracket’s fidelity across the handoff"** (Fig 7 :38), **"the ground’s pressure on the room"** (Fig 7 :39)

A firm's benefit collapses when its contact with what pays degrades while the market keeps paying someone else. The named decay modes are stale percepts (a dashboard the tool still fills but nobody reads), dropped transients (a short-lived demand signal), saturated metrics (a utilization percentage that cannot move) and pooled readings (an average across teams that hides the one losing contact). "Pooled readings" is the firm-level version of aggregating across slots (Fig 1 :22). Sustained benefit is a chain of handoffs; if either bracket fidelity or ground pressure goes to zero, the firm runs in place (Fig 7 :37-39). A repeated quarterly review that hands the same closure along is a chain of mirrors (Fig 7 :36).

**Refuter:** a documented case in which a firm's benefit drops while bracket fidelity and ground pressure are independently measured as high and non-declining. If both stay high, F4's mechanism is not the cause.

**World bearing.** Triplett 1999 reports Solow's aphorism *"You can see the computer age everywhere but in the productivity statistics."* The Wikipedia synthesis of the paradox records that *"IT investments might also require complementary capital investments to be made to be fully productive"* and that gains appear with a lag. Corroborates the time-channel condition, economics pool, low weight.

### F5: A tool changes the wall only as a sourced import or a cheaper search

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8 and Fig 4, three distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"instruments extend what can be represented at all."** (Fig 6 :26)
> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)
> **"downward: something that makes the next search cheaper. Never a replay of what worked once."** (Fig 4 :24)

Buying a tool is not automatically an import that moves the wall. If the tool only gives the firm a new name for an atom it already had, composition inside the same closure adds nothing (Fig 8 :32). It can be one of two things. First, a **head start**: something that makes the next search cheaper, crossing down from a differing closure (Fig 4 :24). Second, a genuine **import** of a new atom, which moves the wall and is *"the only operator that moves the wall"* (Fig 6 :14). Both require a source gate (provenance) and a shadow test (explains a gap): *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"* (Fig 8 :50-52). A purchase order provides the provenance of the transaction, not of the capability. The source gate must show where the capability came from and the shadow test must show which gap it explains.

A tool that extends what can be represented, for example a measurement instrument that reads a customer response the firm could not previously read, changes contact (Fig 6 :26, read with Fig 11 :40). That is the case where a tool genuinely matters.

**Refuter:** a tool that adds no new atom to the firm's closure and makes no search cheaper, yet whose benefit survives a change of habitat and passes the ground test. That breaks idempotence and F5 with it.

**World bearing.** Brynjolfsson, Rock and Syverson 2021: *"General purpose technologies (GPTs) like AI enable and require significant complementary investments."* Corroborates the conditions, economics pool, one witness with Brynjolfsson and Hitt. The productivity J-curve is also a warning against reading early zero benefit as absence (Fig 8 :39).

### F6: A pilot is a substituted habitat, and synthetic success proves wiring, not capability

**Mode: `specified`. Domains D2, D3, D4. Status: triangulated (Fig 11 and a low-overlap engineering source).**

> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)
> **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat’s actors, which you did not choose."** (Fig 11 :67)
> **"what you failed to reproduce is invisible until the goal fails"** (Fig 11 :68)
> **"what you unintentionally introduced is invisible until it acts"** (Fig 11 :69)
> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** (Fig 11 :70)

A successful proof of concept succeeds in a substituted habitat. Two failures are silent by construction: what the pilot failed to reproduce from production, and what the pilot unintentionally introduced that the production habitat did not have. This is the figure-grounded reading of "pilot purgatory": not that the pilot lied, but that it answered a different question in a different habitat. Fig 4 :25 applies one level up: a replay of a recorded success cannot produce a new one.

**Refuter:** a pilot whose success transfers to a changed habitat without reproducing any of the conditions the goal required and without inheriting any new actor, with benefit still passing the ground test. Under Fig 11 :66-70 that should be impossible.

**World bearing (the genuinely low-overlap witness).** Aljalbout et al. 2025, *The Reality Gap in Robotics*, accepted for Annual Review of Control, Robotics, and Autonomous Systems 2026, state: *"simulations consist of abstractions and approximations that inevitably introduce discrepancies between simulated and real environments, known as the reality gap"* and *"These discrepancies significantly hinder the successful transfer of systems from simulation to the real world."* This is Fig 11 :66-70 observed in robotics, with no shared evidence pool with management strategy. It corroborates the mechanism shape, not the firm-level measurement.

### F7: Never explain this by averaging across firms

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"coverage, and compression achieved"** (Fig 1 :25) **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A study that reports "technology investment raises productivity by X percent on average" scores the frame with a quantity the frame also produces. Utilization, adoption counts, number of licences and training hours are frame-internal. They are filters for where to look and budget instruments, not witnesses for the verdict. The `specified` consequence: any answer to BUS-0081 that is an average across firms has already thrown away the only signal that says which slot is losing contact and where. Solow's aphorism and the J-curve both live at the averaged level and cannot, by themselves, answer a per-slot question.

**Refuter:** an averaged industry statistic that predicts, prospectively and per named slot, which firm will gain large benefit next. If one exists, F7's methodological consequence is false.

### F8: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and *The Library of Babel*; the essay is framework-internal, so the external witness count is one).**

Fig 9 :54, :55 and :57 are the governing lines (quoted in section 1.3). The conditions have different instruments:

- A **C3 failure** shows up as saturated metrics, pooled readings, a bracket that no longer matches the residual (Fig 10 :26, Fig 7 :38).
- A **C4 failure** shows up as a closure that keeps handing itself the same room, no sourced import, and a reach that stops moving while the licence count keeps growing (Fig 6 :21, Fig 7 :12).
- A **C1 failure** shows up as the vendor's ingredient list reproduced faithfully with none of the bonds (Fig 12 :5).
- A **C5 failure** shows up at the moment the goal fails, with the missing reproduced condition invisible until then (Fig 11 :68).

A single lever, for example "buy more tools" or "hire more data scientists", clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55). F8 is why the verdicts in `09_watson_answer.md` are separate per domain and never averaged.

**Refuter:** a single intervention that restores all conditions in all failure types with no categorically different residue left over. That would collapse the union into a partition.

### F9: Internal agreement is not evidence, and a repeated review is not progress

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 7 and Fig 2, low overlap: selection between rooms versus anchor triangulation).**

> **"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"The chain approaches the truth only as the world runs out of ways to refuse it."** (Fig 7 :42)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)

A firm that keeps appointing the same kind of vendor, running the same kind of steering committee and rewarding the same kind of metric is handing itself the same room. Agreement inside it compounds while evidence does not. This is the figure-grounded reading of "we all agree the tool is working": the agreement is a convention about a shared meaning, efficient for that purpose and worthless as a verdict about the world (Fig 2 :41, Seat Map :163). Fig 10 :34 names the drift: *"everything drifts together, and the drift is coherent, which is why nobody notices."*

**Refuter:** a firm that keeps the same closure across two adoption cycles and yet keeps producing new, ground-verified readings of the market without importing any new atom. Under Fig 7 :36 that should be impossible; if observed, F9 is wrong.

### F10: No standing list of technology success factors

**Mode: `general`. Status: figure-governed.**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"A relation that fails all seven is not an operator you are missing; it is a claim that has not been made yet."** (Operators :68)

The question "what do successful adopters do?" invites a standing list. Fig 11 :51 structurally refuses it. "Top management support", "agile ways of working", "data quality" can each be a benefactor to one residual and a malfactor to another. Naming them as permanent success factors is an adopted import with no source gate and no shadow test (Fig 8 :50-52), carrying zero evidentiary weight until a per-slot provenance is shown. The Operators table refuses the related temptation to invent a new bond when a proposed "factor" fails all seven tests (Operators :68).

**Refuter:** a factor whose measured valence is invariant across documented changes of residual in multiple slots. If none can be found, F10 weakens to a caution rather than a rule.

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| Benefit is per slot, never an industry average | general | Fig 1 :19, :22, :23 | figure-derived |
| The market is the anchor, not internal agreement | general | Fig 2 :29, :35, :40 | figure-derived |
| Same tools are same atoms; the arrangement is the substance | specified | Fig 12 :5, :46, :94, :117 | triangulated F1 |
| Capability is firm-and-habitat, not tool-alone | specified | Fig 11 :39, :40; Fig 4 :20 | triangulated F2 |
| The break is usually vocabulary and objective | specified | Fig 3 :19, :24, :27, :29 | single-source F3 |
| Quick loss is channel failure, not ground decay | specified | Fig 10 :24, :26, :29; Fig 7 :37-39 | triangulated F4 |
| A tool moves the wall only as a sourced import or cheaper search | specified | Fig 6 :14, :21, :23; Fig 8 :32, :50-52; Fig 4 :22-24 | triangulated F5 |
| A pilot substitutes a habitat; synthetic success proves wiring | specified | Fig 11 :66-70 | triangulated F6 |
| Averages are filters, never verdicts | general / specified method | Fig 1 :23-27; Fig 9 :60 | triangulated F7 |
| The question is a union of conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| No standing list of success factors | general | Fig 11 :49-51; Operators :68 | figure-governed F10 |
| Which particular tool or configuration wins | not stated | none governs after re-census | **gap** |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule, Seat Map :287: *"And a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. Two slots with identical atom sets and identical typed bonds, measured per slot, whose realized market benefits differ (breaks F1, Fig 12 :117).
2. A firm's benefit unchanged across a habitat substitution that removes the market's payment for what the tool does (breaks F2, Fig 11 :39-40).
3. A set of slots whose perception, vocabulary and objective links all measure as working and whose failure is located at planning (breaks the "usually" in F3, Fig 3 :24-29).
4. Benefit lost while bracket fidelity and ground pressure both measure high and non-declining (breaks F4, Fig 7 :37-39).
5. A tool that adds no atom and makes no search cheaper yet keeps paying across a change of habitat (breaks idempotence and F5, Fig 8 :32).
6. A pilot whose success transfers with no reproduced habitat condition and no inherited unwanted actor (breaks F6, Fig 11 :66-70).
7. An averaged industry statistic that predicts prospectively and per named slot who gains next (breaks F7's method consequence, Fig 9 :60).
8. A single lever restoring all union conditions with no categorically different residue (breaks F8, Fig 9 :57).
9. Fig 13's six terms are derived from five, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a per-slot market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of digital transformation (Fig 10 :52, *"Bring a characterised residual, never the source."*).
2. Stop reporting a single blended technology-benefit score. Keep the five conditions separate; a blended score is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each adoption handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat the tool's feature list as `Gamma`, that is, as an ingredient list whose bonds must be tested against the ground, never as the answer (Fig 12 :5, Fig 1 :27).
5. Require a source gate and a shadow test for every claimed "best practice" import (Fig 8 :50-52): where did the capability come from, and which gap does it explain?
6. Re-enumerate the habitat around every pilot, including what was not reproduced and what was unintentionally introduced (Fig 11 :66-70).
7. Use the economics and information-systems literature as a budget filter and as one corroborating witness, not as the verdict. Brynjolfsson and Hitt, Brynjolfsson/Rock/Syverson and Triplett share one broad pool (Fig 2 :31, :40).
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name which tool wins; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, the seat map, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*, *Decoding Tacit Knowledge* and *They're Scanning Books* (all opened 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them"* and *"the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The canonical limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. *"Indiscernibility is not identity."* This governs section 5's stop.
- The source essay confirms simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to map the six physical terms onto tool/data/workflow | **Retracted, strain S1** | Only fit by renaming a tool as energy. Re-census: Fig 13 governs the physical substrate, not a firm's `Gamma`; arrangement work belongs to Fig 12 |
| Treated "same tools" as literal identical atom sets | **Narrowed to a fixed-atom condition, strain S2** | Real buyers never hold identical sets. Isomer claim is a controlled comparison; weak form is a functional group (Fig 12 :124) |
| Read Solow's aphorism as an answer to BUS-0081 | **Retracted as a witness, kept as a filter** | It is an averaged observation (Fig 9 :60);averaging across slots throws away the signal (Fig 1 :22) |
| Planned to name "absorptive capacity" or "digital maturity" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Cohen and Levinthal's phrase is a business-pool binding, recorded as such |
| Wanted to call Fig 11 :40 a `general` law about all firms | **Narrowed to `specified`** | Structural claim; no per-slot market measurement pays for the firm-level version here |
| Used the robotics reality-gap paper as firm-level corroboration | **Narrowed to mechanism-shape corroboration** | Different substrate; Fig 4 :20 requires the anchor to be re-named at the firm scale |
| Read "shape, not a name" as banning the naming of any held atom or binding | **Retracted and narrowed** (kept visible in `05` section 6) | The README's phrase governs a *missing* primitive. Naming a tool already in the firm's library is a binding, not an invented primitive. What remains forbidden is claiming the binding moves the wall without a source gate |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 12 and Fig 4 are two figures, but one framework; triangulation here means low topical overlap, not independent evidence pools |
| Treated a purchase as an import that moves the wall | **Refused as written** (F5, strain S3) | Without provenance and a shadow test the purchase is a transaction record, not a sourced atom (Fig 8 :50-52) |

**Strains sent to the log:** S1 (Fig 13 physical six terms applied to technology atoms), resolved by re-census; S2 (fixed-atom condition on the isomer claim), named and left live as a design constraint; S3 (tool purchase versus wall-moving import), resolved by the source gate and shadow test. No unexplained strain after re-census. One apparent world/figure conflict was returned to the census without flipping the verdict: Barney-style resource stability, encountered in the related pilot, is re-mapped to D3's library and is not treated as evidence that a tool alone pays.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 and the Library of Babel bundle passage show a union of at least five conditions, each with its own instrument.
2. **What is the anchor?** The market, named in Fig 2 :29. Not adoption counts, not utilisation, not sentiment (Fig 1 :27).
3. **Is the answer in the tool?** No. Fig 11 :39-40. Capability is firm-and-habitat.
4. **Why do similar tools give different benefits?** Same atoms, different bonds (Fig 12 :5, :46, :117); a recording replayed in a new habitat cannot produce a new success (Fig 4 :25).
5. **How does quick loss happen?** Channel decay: stale percepts, pooled readings, lost touch (Fig 10 :24-29); either factor of Fig 7 :37-39 going to zero.
6. **How does long benefit happen?** A chain of differing rooms selected against the residual (Fig 7 :36), with reach moved by contact with closures that differ (Fig 6 :23) and imports that pass a source gate (Fig 8 :50-52).
7. **What fails in a pilot?** Habitat substitution with two silent failures (Fig 11 :66-70); synthetic success proves wiring, not capability.
8. **What can be said at the stop?** Five conditions, their instruments, and nine falsifiers. Not which tool wins. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a newly bought technology pays off when the firm composes it into its library with the right bonds over a declared atom set, keeps a channel to a paying ground that does not update on the firm's own report, renews its reach through contact with closures that differ, and reproduces the habitat that made any pilot succeed; benefit is lost quickly when any of these conditions fails, and a tool's valence can flip when the residual changes.** The conditions are kept separate, never averaged. Which particular technology or configuration wins is a declared `gap`, not a hidden answer: the framework returns a shape, and the instrument that would discriminate the source of a measured gain is not held here. Mode `specified` on the firm claims, `general` on the structural shape, not `grounded`. No world source flipped a verdict; the one genuine overstatement about naming held atoms was retracted and preserved above. Strains after re-census: two live design constraints (S2, S3), one dissolved (S1), none hidden.
