# Figure-grounded audit: BUS-0024, psychological safety, learning and innovation

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md` :107: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. None is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Every quoted figure string in this folder is an exact substring of that file. `THE_FORMULA.md` and `FIGURES_README_canonical.md` were also opened. World sources are secondary and are recorded in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) - o′|` per slot `s` (Formula step 1; Symbols table, `R`). Here:

- **b** is the team's belief about the interpersonal cost of speaking up, formed from its own history of prior speak-ups and from inherited norms.
- **a** is what a member does: report an error, admit a mistake, dissent from a decision, challenge poor performance, propose an idea.
- **Γ(b,a)** is what the team predicts will follow: embarrassment, punishment, being ignored, being heard, the idea being adopted.
- **o′** is what actually happens at the ground: an error caught before harm, a decision revised, an idea adopted, a patient outcome, a market return.
- **s** is the team and the member, indexed per team, per task phase and per time. It is never an organisation-wide average "safety score".

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the level of safety but **the direction of its effect on contact with the ground**. Observed in the world: safety is associated with voice, error reporting, learning behaviour and some performance outcomes, yet reviewers report few boundary conditions and possible costs. The residual is: *why does a reduction in felt interpersonal risk sometimes shrink the gap between what the team predicts and what the ground returns, and sometimes grow it by removing the challenge that would have corrected a poor decision?* This is an effect description. It names no theory, no "psychological safety" as a cause, no "learning culture", no "groupthink". Those are candidate names, withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a conjunction of conditions under which safety keeps the channel to the ground reachable, plus a discriminator instrument that separates that state from safety that has become an internal agreement room. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidates: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"you push on it, it is not an anchor."* A safety survey moves when pushed by social desirability and by the same climate it claims to measure, so it is an instrument, not an anchor. Fig 2 :37-38: *"instruments can be wrong on axes they do not measure."* Viable anchors here: error detection and correction, decision revisions, and adopted innovations, measured outside the team's own account.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: belief b, action a, ground outcome o′, indexed by slot s and ordered by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "increase" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not a symmetric relation: team and ground are not interchangeable.
- **Symmetry.** "Increase" is a threshold relative to a ground, not an absolute quantity. The ground does not update on the team's opinion (Fig 2 :25): *"pinned: it does not update on A or B"*. Loss of learning is not recovered by reversing the safety intervention, so the effect is asymmetric in time.
- **Scale.** Three scales are in view: the member's step loop, the team with a shared library and *"something that ranks what they produce"* (Fig 4 :5), and the organisation that hosts both. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21) and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap `R_T` must be measured (Fig 4 :30). Fig 4 :20: *"it or a thousand. Only the actors, the currency and the anchor change."*

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The member's risk loop** | an individual member, belief b about the cost of voice | felt interpersonal cost, predicted payoff of speaking | yes: the recorded consequence of prior speak-ups, whether the error report was punished or used | admitted |
| **D2 The team interaction habitat** | members, leader, norms, task phase | voice, error reports, dissent, idea proposals | yes: error detection and correction, decision revisions; "a patient outcome" is a named anchor (Fig 2 :29) | admitted |
| **D3 The ground of task performance** | customers, patients, regulators, market, task outcome | real performance, avoided errors, adopted innovations | yes: the ground, which does not update on the team's opinion (Fig 2 :25) | admitted |
| **D4 The channel and its instruments** | safety surveys, reporting systems, retrospectives, meeting and phase rules | contact with the ground, fidelity of readings | yes: the ground persists, the channel does not (Fig 10 :24); fidelity measured by whether readings are stale or pooled | admitted |
| **X1 "Psychological safety as a free-floating virtue"** | the climate itself | positive affect | **no** anchor independent of the ground; it moves when pushed (Fig 2 :30) | not a domain yet |
| **X2 "Innovation as a generic organisational trait"** | the organisation | novelty | measurable only as adopted innovations, which is already D3 | absorbed into D3 |
| **X3 "Cohesiveness as the cause"** | the group | liking and agreement | self-report from the same pool as the safety measure (Fig 2 :31); its valence flips with the residual (Fig 11 :50) | absorbed into D2 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that safety is irrelevant.

### 1.3 Partition or union

D1 and D2 overlap: the member's belief is formed inside the team habitat, so their overlap is a compound with its own loop. D2 and D4 overlap: the channel is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **C1**, safety keeps the channel to a paying ground reachable (voice that reaches the ground), and **C2**, safety lets reach be renewed by contact with a closure that differs (dissent, a different function, a customer, science). A team failing only C1 and a team failing only C2 are not different degrees of one failure; they need different instruments. *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the team read the ground and the risk of voice?) → 2 vocabulary (does its Γ have terms for error, near miss, dissent, idea, and phase?) → 3 objective (can it say what counts as progress: an error corrected, a decision revised, an idea adopted?) → 4 planning → 5 learn and carry. The middle link is the one with no instrument (Fig 3 :26): *"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* Most safety training lands above the break, where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| **1 The Agent** | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and what may count as a metric |
| **2 The Ground** | anchor rule; instruments can be wrong; independence vs common pool | governs the anchor and the witness rule |
| **3 Dependency Chain** | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| **4 The Membrane** | kernel constant across sizes; methods up, head starts down; R_T | governs member to team transfer and the lossy summary |
| **5 Mint Pipeline** | three guards as a product; settlement; "nothing new here" | governs whether "safety" can be admitted as a new term at all |
| **6 Closure / Reachability** | import is the only operator that moves the wall | governs C2, the innovation arm |
| **7 Room Chain** | same closure handed along; agreement compounds, evidence does not | decisive for the "less willing to challenge" arm |
| **8 Union Surplus** | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| **9 Leave / Arrive** | union vs partition; describe the residual first | governs the unbundling and the census itself |
| **10 Ground Maintainer** | ground does not decay, channel does; keep anchor reachable | governs C1, the learning arm |
| **11 The Habitat** | capability is agent-and-habitat; valence relative to residual | decisive for D1, D2 and the flip |
| **12 The Bond** | isomer, catalyst, sequence, comparison, two currencies | governs structure, order and the phase distinction |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict | honest stop only, after re-census S1 |
| **Operators table** | `¬` refuses a claim; a vocabulary without it can only accumulate | governs the pre-registered refusal |
| **Symbols table** | `R` is the aim; the ground is the anchor; `R_T` is the round trip | governs notation and the audit in `11_audit.md` |

**Strain test applied during this census.** An early attempt to apply Fig 13's six physical terms directly to "team safety" only fit by calling a norm a gradient and a team a network. That is a strain, so Fig 13 does **not** govern team dynamics. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about teams, `grounded` only if settled by a measurement. None is `grounded`.

### F1 - Safety is a property of team-and-habitat, not of a member alone

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat vs membrane).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

The construct at issue is explicitly team-level. The Field Guide to Psychological Safety, opened 2026-11-22, reports that Edmondson's seven-item scale had an intraclass correlation of .39, *"which is what licenses treating it as a property of the team"*, and that *"the design is cross-sectional and single-company, so nothing here is causal"*. That is a secondary practitioner summary, not the paper itself, and it is one witness from the safety pool. The figure claim is stronger and structural: a change in felt safety that does not change contact with the ground changes nothing. Training individuals to feel safer, while leaving the team's habitat and the reporting system untouched, is an agent-only improvement.

**Refuter:** a documented individual-level increase in felt safety that changes error reporting or decision correction while team-habitat contact is measured as unchanged. If it survives, F1 is false.

### F2 - The anchor for "learning and innovation" is the ground, not the safety survey

**Mode: `general` for the anchor rule, `specified` for the team application. Domains D3, D4. Status: triangulated (Fig 2 and Fig 1, low overlap: anchor triangulation vs frame-internal scoring).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"instruments can be wrong on axes they do not measure."** (Fig 2 :37-38)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

A team that reports high safety and high learning on the same questionnaire has scored itself with quantities it also produces. The Field Guide summary of Edmondson 1999 says *"Learning behaviour fully mediated its effect on observer-rated performance"*; observer rating is closer to a ground than self-report, but it is still an instrument, and the summary also records that *"the design is cross-sectional and single-company, so nothing here is causal"*. AHRQ PSNet's summary of Eldor, Hodor and Cappelli 2023 calls safety *"a vital part of robust safety culture"* and reports that *"routine task performance increases with psychological safety only to a point, then declines"*. Both are one evidence pool. The figure rule does not flip on their agreement: the anchor is the error corrected, the decision revised, the idea adopted, measured outside the team's account.

**Refuter:** a study in which safety and learning are both self-reported by the same members, and the claimed increase in learning fails to survive an independent ground measure of adoption or error correction.

### F3 - Safety increases learning when it keeps the channel reachable; quick loss is channel failure

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"→ keep the anchor reachable"** (Fig 10 :29)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

Learning is not produced by safety as a stock. It is produced while the channel from the team to what pays remains reachable. The named decay modes are stale percepts, dropped transients, saturated metrics and pooled readings. "Pooled readings" is the team-level version of aggregating across slots (Fig 1 :22): an organisation-wide safety average destroys the signal that says where to look. A decade of learning is a chain of handoffs; if either bracket fidelity or ground pressure goes to zero, the chain runs in place.

The world corroborates at a different stratum. Cangiano 2026, *Frontiers in Psychology*, read directly: *"Reducing that anticipation does both at the same time"*, and *"The result is more voice, and potentially less disciplined voice."* The same paper reports that *"high psychological safety combined with low accountability produces a comfort zone rather than a learning zone"*. These are conceptual claims from one 2026 paper, not a ground settlement; they corroborate the shape of the conditional, not its truth.

**Refuter:** a team whose safety rises while both bracket fidelity and ground pressure measure high and are not declining, and whose measured error correction still declines. If both factors stay high, F3's mechanism is not the cause.

### F4 - Safety that becomes internal agreement is a mirror room

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 7 and Fig 2, low overlap: selection between rooms vs anchor triangulation).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)

This is the figure-grounded answer to the question's second clause. When the shared belief is conflated with "we agree and no one challenges", the team hands itself the same room: agreement compounds while evidence does not, and a mirror cannot correct it (Fig 2 :35). The failure is not safety itself. It is safety bound to a closure that does not differ, so no room is selected against the residual the last one surfaced. The Field Guide summary of Edmondson 1999 records that the construct *"is not group cohesiveness, which can suppress disagreement to the point of groupthink"*; the field itself separates safety from cohesiveness, and the figure gives the structural reason why.

Low-overlap corroboration: Toyokawa, Whalen and Laland 2019, *Nature Human Behaviour*, report from an interactive experiment with 699 participants that *"Challenging tasks elicit greater conformity among individuals, with rates of copying increasing with group size, leading to high probabilities of herding among large groups confronted with uncertainty."* That is the mirror-room mechanism observed in human social learning, with no shared evidence pool with management research. It corroborates the mechanism shape, not the team-level fact.

**Refuter:** a team with high safety and high internal agreement that keeps producing ground-verified new readings, errors caught and decisions reversed, with no differing room and no import. Under Fig 7 :36 that should be impossible; if observed, F4 is wrong.

### F5 - Innovation requires a differing closure; safety is a valve, not a source

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, three distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

A team can keep discussing ideas inside its library forever and never add an atom. A ground-verified innovation requires contact with a frame whose closure differs: a dissenting member, another function, a customer, a regulator, science. Reducing the interpersonal cost of that contact lets the differing closure cross the boundary, so safety is the valve that permits an import; it does not supply the atom. This is why "psychological safety increases innovation" is a conditional claim and not a main effect. Frazier et al. 2017, *Personnel Psychology*, is summarised by the Field Guide as *"A meta-analysis of the psychological safety literature, synthesising 136 samples"* confirming relationships with learning, performance and engagement. That is one witness from one pool, and a correlation between two self-reports cannot establish which operator moved the wall.

**Refuter:** a team that produces ground-verified new atoms purely by composing inside its own closure, with no contact with a differing closure. That breaks idempotence and F5 with it.

### F6 - The valence of voice flips with the residual and the task phase

**Mode: `specified`. Domains D2, D3. Status: triangulated for the valence rule, single-source for the phase application.**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

"Challenge poor performance" is not a fixed good. Its valence is relative to the residual. When the residual is "we may be wrong", challenge is a benefactor; when the residual is "we must coordinate now", the same challenge can be a malfactor. Cangiano 2026 supplies the phase distinction from outside the figures: *"the same dynamic during execution can introduce coordination failures and undermine the command authority"*, and the aviation case shows *"crew members were trained to challenge decisions at defined moments, while command authority and operational discipline stayed intact"*. The figures give the valence rule; the phase schedule comes from one source and is therefore marked single-source for that application. The eCFR gives the rule in law: 14 CFR 121.542(b) names *"engaging in nonessential conversations within the cockpit"* as an activity *"not required for the safe operation of the aircraft"* during critical phases. That is an engineering anchor for calibrated, not maximal, voice.

**Refuter:** a measured case in which the valence of the same voice act is invariant across a documented change of residual and task phase. If no such change of valence can be found anywhere, F6 weakens to `general`.

### F7 - The question is a union; unbundle before a lever is chosen

**Mode: `general` for the method, `specified` for the team consequence. Domains all. Status: triangulated (Fig 9 and Fig 3, low overlap: union split vs dependency chain).**

Fig 9 :54, :55 and :57 are the governing lines (quoted in section 1.3). The two conditions have different instruments:

- A **C1 failure** shows up as saturated metrics, pooled readings, a bracket that no longer matches the residual (Fig 10 :26, Fig 7 :38).
- A **C2 failure** shows up as a closure that keeps handing itself the same room, no import, and a reach that stops moving while the library keeps growing (Fig 6 :21, Fig 7 :12).

A single lever, for example "run another psychological safety workshop", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). F7 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions in both failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F8 - The break is usually at the middle link

**Mode: `specified`. Domains D1, D4. Status: single-source (Fig 3, with Fig 12 :112 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** (Fig 3 :26)

A team can score high on a safety survey (perception works) and still have no terms for what speaking up affords in the changed situation, and no objective that counts "decision corrected" as progress. Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* A vocabulary holding only ingredients cannot state a goal. F8 predicts that the highest-value diagnostic question is not "is this team psychologically safe?" but "at which link does its chain currently stop, and was that measured?".

**Refuter:** a team whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F9 - Never let a filter hand you a verdict

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1, Fig 9 and Fig 2, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)
> **"agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)

Edmondson 1999, Frazier et al. 2017 and Cangiano 2026 all draw on the same organisational-behaviour literature and cite one another. Their agreement is one pool talking (Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*). A meta-analysis is a budget instrument that says where to look; it is not a witness for the verdict. The low-overlap witnesses, Toyokawa et al. 2019 (human social learning) and the eCFR cockpit rule (aviation engineering and law), corroborate the mechanism shape only.

**Refuter:** a prospective, pre-registered study with independent ground measures that predicts, prospectively and per team, which named slot will lose contact next and why. If such a statistic exists, the average has earned witness standing. Until then it is a filter.

### F10 - The 2,000-person agreement trap: agreement cannot corroborate a checkable shape

**Mode: `general`. Domains D2, D4. Status: triangulated (Fig 7, Fig 2 and Fig 10, three distinct roles).**

Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* Fig 10 :59: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* Fig 7 :35: *"A room’s agreement is variation, not a verdict."* A mailing list selected for people who already like the claim is a mirror chain. The legitimate ask gives the claim a budget to be tried by someone whose closure differs and whose ground contact is real. From *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*

**Refuter:** a demonstration that an outside frame with a genuinely different evidence pool returned the same verdict on stage 1 without seeing the framework's interior. That would be corroboration, and it still would not be ground settlement.

### F11 - What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per team and per member, never an organisation-wide average | general | Fig 1 :19, :22 | figure-derived |
| The anchor is error correction and adopted innovation, not the survey | general | Fig 2 :29, :35; Fig 1 :27 | figure-derived |
| Safety changes learning only if it changes contact | specified | Fig 11 :39, :40 | triangulated F1 |
| Quick loss is channel failure, not ground decay | specified | Fig 10 :24, :26; Fig 7 :37-39 | triangulated F3 |
| Internal agreement is not evidence | specified | Fig 7 :12, :13, :35, :36 | triangulated F4 |
| Innovation needs import from a differing closure | specified | Fig 6 :23, Fig 8 :32, Fig 13 :115 | triangulated F5 |
| Voice valence flips with the residual and phase | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F6, phase single-source |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary and objective | specified | Fig 3 :19, :24, :26, :27 | single-source F8 |
| The right amount of safety at which challenge is preserved | not stated | none | `gap`: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. An individual-level increase in felt safety changes error reporting or decision correction while team-habitat contact is measured as unchanged (breaks F1, Fig 11 :39-40).
2. A team's safety rises while both bracket fidelity and ground pressure measure high and non-declining, and error correction still declines (breaks F3, Fig 7 :37-39).
3. A team with high safety and high internal agreement keeps producing ground-verified new readings with no differing room and no import (breaks F4, Fig 7 :36).
4. A team produces ground-verified new atoms purely by internal composition, with no contact with a differing closure (breaks F5, Fig 6 :23, Fig 8 :32).
5. The valence of the same voice act is invariant across a documented change of residual and task phase (breaks F6, Fig 11 :49-51).
6. One intervention restores both conditions in both failure types and leaves no categorically different residue (breaks F7, Fig 9 :57).
7. Fig 6's idempotence fails inside a closed set, or one of the six substrate terms is derived from the other five (breaks the figures themselves).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of safety (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep C1 and C2 separate in every report. A blended "safety and learning score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat the safety survey as Γ, that is, as an instrument whose reach must be tested against the ground, never as the answer (Fig 1 :27, Fig 2 :37-38).
5. Use the safety literature as one witness and a budget filter, not as the verdict (Fig 2 :31, :40; Fig 9 :60).
6. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Do not name the right amount of safety or the exact phase rule. The framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).
8. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the residual and the refuter, not the conclusion.

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop. *"Indiscernibility is not identity."*
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*
- *The Hard Problem is About Source* gives the metamerism rule: *"If several paths create the same behavior, then behavior is a projection with lossy information"*, and *"the answer is unreached until a better instrument exists"*. A safety reading does not determine its source.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Tried to answer "yes or no" to the first clause | **Narrowed to a conditional shape** | The question is a union of C1 and C2 (Fig 9 :54-57), not one main effect |
| Applied Fig 13's six-term physical set to team safety | **Retracted, strain S1** | Only fit by renaming norms as gradients. Re-census: Fig 13 governs the physical substrate, not a team's Γ |
| Treated Edmondson 1999 as a ground settlement | **Retracted to one witness** | Field Guide summary: "the design is cross-sectional and single-company, so nothing here is causal" |
| Read self-reported learning behaviour as the anchor | **Retracted, kept as instrument** | Fig 2 :37-38; instruments can be wrong on axes they do not measure |
| Wanted to call Fig 11 :40 a `general` law about all teams | **Narrowed to `specified`** | Structural claim; no ground measurement pays for the team-level version here |
| Read Fig 7 :26, "progress per handoff: R = h² × S", as a calibrated equation | **Retracted, strain S2** | The figure supplies two factors and no numbers. Treated as a product structure, mode `specified` |
| Treated "psychological safety" as a framework term | **Retracted, strain S3** | It is a safety-pool binding with no source gate; an import that adds no atom (Fig 6 :21) |
| First read the "dark side" clause as safety itself causing unwillingness to challenge | **Narrowed and retained** | Fig 11 :49 says valence is relative to the residual, not a fixed property. Both the earlier and the corrected reading are kept: safety bound to an agreement closure suppresses challenge (F4), while the same voice can change sign with the residual (F6) |
| F10 row "right amount of safety" | **Marked `gap`** | The essay's metamerism rule: a reading cannot comment on the source. What is owed is a discriminator, not a number |
| F1 "team-and-habitat" in an early draft | **Downgraded from decisive to triangulated** | Fig 11 and Fig 4 are two figures, but both come from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to team safety), resolved by re-census; S2 (Fig 7 :26 read as an equation), resolved by treating it as a product structure; S3 (safety as a framework term), resolved by recording it as a binding with zero verdict weight; S4 (safety literature says learning increases, Fig 11 :40 says contact is required), resolved by re-mapping "learning behaviour" to a change in contact versus a self-report intention; S5 (Cangiano's inverted-U versus Fig 11's valence rule), resolved by re-census: a performance curve and a valence rule are different objects. No unresolved strain after re-census. Per the canonical rule, a reading that makes one figure contradict another has misidentified its domain, not found a flaw; each strain was returned to the census rather than smoothed over.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the *Library of Babel* bundle passage: it is a union of channel maintenance (C1) and reach renewal (C2), each with its own loop and instrument.
2. **What is the anchor?** Error correction, decision revision and adopted innovation, named in Fig 2 :29. Not a safety survey, not self-reported learning (Fig 1 :27).
3. **Is the effect in the individual alone?** No. Fig 11 :39-40. Capability is team-and-habitat.
4. **How does learning increase?** While the channel to the ground is reachable; two factors, bracket fidelity times ground pressure (Fig 7 :37-39), and the named decay modes of Fig 10 :26.
5. **How does innovation increase?** Only when a differing closure crosses the membrane and adds an atom (Fig 6 :23, Fig 8 :32); safety is the valve that lowers the cost of that crossing.
6. **How can safety suppress challenge?** When it becomes an agreement room handed along with high ρ (Fig 7 :12-13, :35-36), and when voice valence flips with the residual and phase (Fig 11 :49-51).
7. **What can be said at the stop?** A conjunction of two conditions with two failure modes, an instrument gap, and falsifiers. Not the right amount of safety, not a phase schedule. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **psychological safety increases learning and innovation when it keeps the team's channel to a paying ground reachable and lets a closure that differs cross the membrane, and it can make a team less willing to challenge poor performance when the shared belief becomes an agreement room that hands itself the same closure, or when the valence of voice flips with the residual and the task phase.** C1 and C2 are kept separate and never averaged. Which specific amount of safety, which phase rule and which intervention occupy the slots is a `gap`, not a silence: the framework returns a shape, and the instrument that would name the source is not held here. Mode `specified`. No world source was allowed to flip a verdict; the one apparent conflict between the safety literature and Fig 11 :40 was returned to the census and re-mapped. No unresolved strain remains after re-census. This is a simulated derivation checked for internal consistency against the figures, not a ground reading, and it cannot settle BUS-0024.
