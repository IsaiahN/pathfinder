# Figure-grounded audit: BUS-0027, remote and hybrid work

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." Every finding below carries its mode. None is accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap* (opened 2026-11-22): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session; cite as `Fig N :line`. Canonical usage: `FIGURES_README_canonical.md`. Loop and mode: `THE_FORMULA.md`. World sources are secondary and are in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o'| per slot s (Formula step 1; Symbols table, `R`). Applied to an arrangement decision:

- **b** is what the organization believes about what work requires, formed from its own history and inherited management priors.
- **a** is the arrangement: office, hybrid, or fully remote.
- **Γ(b,a)** is what the organization's routines and instruments predict will happen under a: output, learning, collaboration.
- **o′** is what actually happens: measured output, demonstrated new competence, new cross-team links.
- **s** is the slot: a team, a task type, a cohort, a person. R is indexed by slot and by time, never averaged into one firm-wide "productivity" number.

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."
> Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

The phenomenon to explain is not a level but a **divergence across slots under one arrangement**: the same a that shrinks R on an independent output slot can grow R on a learning or collaboration slot. A frame that predicts "remote work raises productivity" or "remote work destroys collaboration" as a single global verdict has already committed the aggregation error.

State the residual as: *why does the gap between what an arrangement predicts and what the work actually returns stay small on some slots and grow on others, and what selects which?* This is an effect description. It names no theory, no "culture", no "engagement", no "focus". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term before the run** (Formula, "Direction"): the answer would be a set of conditions whose conjunction keeps R small on both kinds of slot, plus an instrument that discriminates a failure of one condition from a failure of the other. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29 says "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." The same line names candidates: "A measurement, an experiment, a counter, a market, a patient outcome." For this question the anchors are a realized output counter and a demonstrated transfer of competence, both measured per slot. Manager opinion, employee satisfaction, and self-assessed productivity move when pushed; they are instruments at best. Fig 2 :30: "If it moves when you push on it, it is not an anchor."

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation: arrangement a, slot s, the organization's Γ, and the realized outcome o', ordered in time. It is a sequence rather than a set, so it carries an **ordered** bond (`→`, sequence, "A then B; B needs A to have happened", Fig 12 :72) and a **comparison** bond for "improves" and "weakens" (`⋛`, "a threshold relation between two quantities", Operators table :48). It is not symmetric: arrangement and outcome are not interchangeable.
- **Symmetry.** "Improves" is a threshold relative to a baseline, not an absolute quantity. Time is asymmetric: a lost weak tie is not recovered by reversing the policy (Gibbs et al. 2024, read 2026-11-22).
- **Scale.** Three scales are in view: the single worker's step-by-step loop (Fig 4 one-agent panel), the team as a population with *"something that ranks what they produce"* (Fig 4 :5), and the organization across quarters. The membrane is *"Not a wall: a filter with a direction"* (Fig 4 :21) and "Only methods cross up. Only head starts come down." (Fig 4 :22). The transform is lossy, so R_T must be measured, not assumed zero (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The individual focus loop** (one worker, one scale) | worker, their Γ, their instruments | output per unit time, residual reduction on independent tasks | yes: a realized output counter on the task | admitted |
| **D2 The team habitat / contact field** (population) | teammates, newcomers, mentors, cross-team peers | knowledge crossed, competence transferred, new bridges | yes: demonstrated new competence and observed new cross-team work | admitted |
| **D3 The channel / perception** (contact with ground) | metrics, dashboards, customer contact, percepts | fidelity of contact with what actually pays | yes: the ground, "the ground does not decay, the channel does" (Fig 10 :24) | admitted |
| **D4 The closure / reach** (imports and rooms) | the team's library, other teams, other disciplines, entrants | reach expansion, new rooms selected against surfaced R | yes: ground settlement of a new term (Fig 5 :32, Fig 6 :23) | admitted |
| **X1 "Culture" as free-floating property** | the organization | mood, values | **no** anchor independent of measured behaviour | not a domain yet |
| **X2 "Productivity" as one scalar** | the firm | a single number | measurable, but it conflates D1 and D3 slots | absorbed into D1/D3, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that culture never matters. X2 is absorbed because a single average destroys the per-slot signal (Fig 1 :22).

### 1.3 Partition or union

D1 and D2 overlap: the same person both focuses and learns inside one habitat. D2 and D3 overlap: knowledge transfer is itself a channel. D3 and D4 overlap: a new room is reached through a channel. The whole question is a **union**, not a partition.

> Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
> Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The unbundled conditions are:

- **C1, contact maintained.** The channel to what actually pays, and to what actually transfers, stays reachable and is not replaced by a pooled metric. Instrument: an independent ground counter per slot, plus a recorded round trip between metric and outcome.
- **C2, habitat reproduced and reach renewed.** The substituted habitat still contains the relations the task's goal required, and reach is expanded by contact with a closure that differs. Instrument: an enumerated habitat census before the move, plus a record of which new atoms entered.

A firm failing only C1 and a firm failing only C2 are not different degrees of one failure; they need different instruments. *The Library of Babel* states the same stop condition: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?"

### 1.4 Dependency order (Fig 3)

> Fig 3 :20 "The chain is ordered by dependency, not by importance."
> Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."
> Fig 3 :29 "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."

Order for this question: 1 perception (can the organization read the actual output and the actual transfer?) → 2 vocabulary (does its Γ have terms for what an arrangement affords, beyond "productive" and "collaborative"?) → 3 objective (can it say what progress on each slot would count as?) → 4 planning → 5 learn and carry. The middle link is the one with no instrument, and most diagnosis effort lands above the break because that is where measurements already exist (Fig 3 :29-30). This is why a blanket send-everyone-home order and a blanket everyone-back-to-the-office order are both plans made above the break.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not which arrangement wins |
| 2 The Ground | anchors, independence, common pool | governs the anchor and why satisfaction surveys cannot corroborate |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs why a written procedure is not a transferred skill |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a new practice can be admitted |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs reach renewal (C2) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs repeated hybrid rooms and siloing |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs cross-team bridges and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick loss (C1 failure) |
| 11 The Habitat | capability is agent-and-habitat; isolation as substitution | decisive for D1 and D2 |
| 12 The Bond | catalyst, cycle, isomer; arrangement is the substance | governs why a strength changes valence |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop only (see strain S1) |

Strain test applied during this census: an early attempt to apply Fig 13's six physical terms directly to "office space versus home space" only fit by calling a desk a kind of space-state and a deadline a kind of energy. That is a strain, so Fig 13 does **not** govern work arrangements. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about work arrangements, `grounded` only if settled by a measurement here. None is `grounded`.

### F1: The effect lives in the arrangement-and-habitat, not in the arrangement alone

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 habitat and Fig 4 membrane, low overlap: contact field vs scale filter).**

> Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."
> Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
> Fig 4 :20 "Only the actors, the currency and the anchor change."

A work mode is not a property of a person; it is a change of habitat, that is, of which actors, conditions and relations are in contact with the work. Removing co-location removes contacts (overheard context, immediate correction, peripheral observation) and adds contacts (quiet, flexibility, distributed talent). Asking "is remote work productive?" treats the mode as an agent-only improvement. Fig 11 :40 says an improvement that does not change contact changes nothing; a mode change that does change contact changes something, but which something depends on the habitat that was enumerated.

**Refuter:** a controlled comparison in which the measured performance of a team is unchanged across a habitat substitution that demonstrably removes the ground's payment for what the team does. If it is unchanged, F1's contact claim is false.

**World bearing (secondary only):** Bloom, Han and Liang (Nature, 2024) found that hybrid working "improved job satisfaction and reduced quit rates by one-third" while "Null equivalence tests showed that hybrid working did not affect performance grades over the next two years of reviews." Their trial is a habitat substitution with a measured null on the output slot and a large effect on another slot. That is exactly the per-slot divergence the residual predicts, and it corroborates F1. It is one witness, not a verdict.

### F2: Isolation substitutes a habitat, and what was not reproduced is invisible until the goal fails

**Mode: `specified`. Domain D2. Status: triangulated (Fig 11 isolation law and LPP education source, low overlap: framework law vs sociology of learning).**

> Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another."
> Fig 11 :67 "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat’s actors, which you did not choose."
> Fig 11 :68 "what you failed to reproduce is invisible until the goal fails"
> Fig 11 :69 "what you unintentionally introduced is invisible until it acts"

This is the figure-grounded statement of why learning and collaboration weaken. When work moves out of an office, the goal still requires the same relations (mentoring, observation, weak ties, spontaneous feedback) unless the goal itself changed. Those relations are not subtracted; a different habitat is substituted. Two failures follow, and both are silent at the moment of the move: the relations that were required but not reproduced, and the new actors that arrived unbidden (scheduling tools, status dashboards, always-on notifications).

**Refuter:** a remote-only team whose newcomers show competence acquisition indistinguishable from a co-located control on a ground measure, with the required relations documented as not reproduced. If it passes, the isolation law's learning consequence is false for that slot.

**World bearing (secondary only):** Bloom et al. 2024 excluded interns and rookies in probation because "on-site learning and mentoring are particularly important for those individuals." The learning slot was deliberately out of scope of the trial's null result, which therefore cannot be read as "no career cost." The LPP source (Wikipedia summary of Lave and Wenger, 1991) says "newcomers who are separated from the experts have limited access to their tools and community and therefore have limited growth." Different field, different evidence pool, same shape. Yang et al. 2022 found firm-wide remote work made the collaboration network "more static and siloed, with fewer bridges between disparate parts." Gibbs et al. 2024 found that in hybrid mode "innovation drops particularly sharply in teams with high variation in office presence."

### F3: Quick loss is a failure of the channel, not a decay of the ground

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10 ground maintainer and Fig 1 frame-internal quantities, low overlap).**

> Fig 10 :24 "the ground does not decay, the channel does"
> Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings"
> Fig 10 :28 "the output is not a verdict, it is you have lost touch"
> Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."

The market does not stop paying for good work when people work from home. What can fail is the organization's contact with what pays: metrics that saturate, readings pooled across teams, customer reaction thinned to a dashboard. The named decay modes in Fig 10 :26 map directly onto counts of lines of code, hours online, and average engagement scores. When those replace ground contact, the output is not a verdict; it is a report that the organization has lost touch.

**Refuter:** a documented case in which a team loses its measured advantage while independent ground counters and bracket fidelity both measure high and non-declining. If both stay high, F3's mechanism is not the cause.

**World bearing:** the CTrip call-centre experiment (Bloom, Liang, Roberts and Ying, QJE 2015; read via NBER Digest 2013) attributed its 13 percent gain partly to "the quieter home environment", a ground-adjacent reading, while also finding that "rates of promotion for home workers were almost 50 percent lower, possibly because they were not visible to office-based managers." The second finding is a channel failure: the ground (promotion) was still paying, but the manager's percept was thinned.

### F4: Repeated rooms stop progress; new bridges require a differing closure

**Mode: `specified`. Domains D3, D4. Status: triangulated (Fig 7 room chain and Fig 8 union surplus, low overlap: sequence vs composition).**

> Fig 7 :12 "same closure, handed along;"
> Fig 7 :13 "agreement compounds, evidence does not"
> Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."
> Fig 8 :45 "Two frames together reach what neither reaches alone."
> Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

A hybrid team that keeps the same meetings with the same people is handing itself the same room. Agreement inside it compounds while evidence does not. Reach expands only on contact with a closure that differs: another team, another discipline, a customer, an entrant. Remote work can widen closure (distributed talent) or narrow it (static siloed network); the arrangement does not decide, the contact does.

**Refuter:** a firm that keeps the same closure for two years and yet keeps producing ground-verified new readings without importing any new atom. Under Fig 7 :36 that should be impossible; if observed, F4 is wrong.

**World bearing:** Yang et al. 2022 found "firm-wide remote work caused the collaboration network of workers to become more static and siloed, with fewer bridges between disparate parts" and that the share of collaboration time with cross-group connections "drop[ped] by about 25% of the pre-pandemic level" (Microsoft Research summary). Gibbs et al. 2024 found that the hybrid penalty was concentrated in "teams with high variation in office presence", a failure of shared channel rather than of hours. One corroborating pool (workplace telemetry), so one witness.

### F5: A written procedure is a recording, not a transferred method

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 4 membrane and the tacit knowledge essay, low overlap: scale filter vs cognition of transfer).**

> Fig 4 :22 "Only methods cross up. Only head starts come down."
> Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion."
> Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

Documenting the process so that remote staff can read it is the legitimate move, but it sends a recording, not a method. From *Decoding Tacit Knowledge* (opened 2026-11-22): "Writing carries the context well and the subtext partly, but it almost never carries the pretext, the 'you had to be there' part." The essay's remedy for low contact is "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." That is an effect description, not a procedure, and it is checkable. The operational consequence is that onboarding and mentoring need two-way correction, not a larger handbook.

**Refuter:** a documented case in which a newcomer acquires the same judged competence from a written procedure alone as from a two-way corrected apprenticeship, on a ground measure. If that holds generally, F5 is false.

**World bearing:** the LPP summary says "If newcomers can directly observe the practices of experts, they understand the broader context into which their own efforts fit," while "newcomers who are separated from the experts have limited access to their tools and community and therefore have limited growth." Independent field (education/sociology), corroborates Fig 4 :25.

### F6: A strength changes valence when the residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 valence and Fig 12 catalyst, low overlap: habitat relations vs composition structures).**

> Fig 11 :49 "An actor’s valence is relative to the residual, not a property it carries."
> Fig 11 :51 "No standing list of good actors survives a change of residual."
> Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

Quiet is a benefactor to the focus slot and a malfactor to the learning slot. The same uninterrupted home day that raises output removes the corrections that build competence. Nothing in the description of "quiet" records which it is; valence belongs to the relation with the residual, not to the arrangement. This is the mechanism behind both "remote work is great" and "remote work is isolating": both are standing lists of good or bad actors that fail when the slot changes.

**Refuter:** a measured advantage of an arrangement whose valence is invariant across a documented change of slot. If found generally, F6 weakens to `general`.

### F7: Never explain this by averaging across slots or people

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> Fig 1 :23 "The ground enters as the only metric."
> Fig 1 :26 "predicates minted, and credibility accrued"
> Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

A single "productivity index" that blends output, satisfaction and retention scores the frame with a quantity the frame produces. It is a budget filter, not a witness. Bloom et al. 2024 reported manager beliefs moving from "−2.6% on average" before the experiment to "+1.0%" after. That update is agreement inside one pool (Fig 2 :40), not a ground reading; it is evidence that experience changes opinions, not that output changed. The specified consequence: any answer to BUS-0027 expressed as one number for all teams has already thrown away the signal that says which slot is losing contact.

**Refuter:** an averaged statistic that predicts, prospectively and per slot, which team will lose ground contact next. If one exists, F7's methodological consequence is false.

### F8: The break is usually at the middle link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111 as a corroborating line from the same framework, so one witness).**

> Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
> Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one."

In work terms, the usual failure is not that people cannot execute; it is that the organization has no terms for what the changed arrangement affords on each slot and cannot say what would count as progress there. More planning budget lands above the break. F8 predicts that the highest-value diagnostic question is not "is remote work working?" but "at which link does this team's chain currently stop, and was that measured?"

**Refuter:** a documented team whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That would falsify "usually at the middle" without falsifying the dependency order.

### F9: Conflict between the world literature and the figures, and how it was resolved

**Mode: `general`. Status: figure-governed.**

Two apparent conflicts were returned to the census, never used to flip a verdict.

1. The call-centre literature finds fully remote productivity gains (CTrip +13 percent). Fig 11 :39 says capability is agent-and-habitat. Re-census R1: CTrip's gain came from more minutes and a quieter environment, that is, from a changed habitat, not from the same capability improved in isolation. No conflict after re-census; the fit is to F1.
2. The innovation literature finds hybrid worse than fully remote or fully office (Gibbs et al. 2024). Fig 8 :45 says two frames together reach what neither reaches alone. Re-census R2: the hybrid penalty is concentrated where teams are scattered, so the shared closure was not actually shared. The figure governs a *condition* for the surplus, and the study measures its absence. No conflict; the fit is to F4.

A third item was narrowed rather than resolved: the claim "hybrid leaves performance unchanged" is true only for experienced graduate employees in one trial. The trial excluded probationary rookies, so it is silent on the learning slot (F2).

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| Effects are per slot, never a firm-wide average | general | Fig 1 :19, :22 | figure-derived |
| Realized output and demonstrated transfer are the anchors | general | Fig 2 :29 | figure-derived |
| A work mode changes a habitat, not an isolated agent | specified | Fig 11 :39, :40 | triangulated F1 |
| Isolation substitutes a habitat; missing relations are silent | specified | Fig 11 :66-69 | triangulated F2 |
| Quick loss is channel decay, not ground decay | specified | Fig 10 :24, :26 | triangulated F3 |
| Repeated closure stops progress; bridges need differing closure | specified | Fig 7 :12, :36; Fig 8 :45 | triangulated F4 |
| A handbook carries context, not the pretext of practice | specified | Fig 4 :22, :25 | triangulated F5 |
| Valence of a mode is relative to the slot | specified | Fig 11 :49-51 | triangulated F6 |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :27, :29 | single-source F8 |
| Which exact day count is optimal for every team | not stated | none | gap: a name, not a shape |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following is observed:

1. A remote-only team whose newcomers match a co-located control on a ground measure of competence while the required mentoring and observation relations are documented as absent (breaks F2, Fig 11 :66-69).
2. A hybrid team that gains new cross-team bridges over two years while remaining hybrid, with no new atom imported from a differing closure (breaks F4, Fig 7 :36, Fig 8 :45).
3. A fully remote team whose innovation quantity and quality match co-located controls over two years with no substitute channel established (breaks Fig 4 :25 and the Gibbs 2024 corroboration).
4. A firm where a single policy lever restores both ground-contact fidelity and habitat reproduction with no categorically different residue left (breaks F7 union, Fig 9 :57).
5. A measured productivity gain that survives replacing the management metric with an independent ground counter, measured per slot (breaks F3, Fig 10 :24-26).
6. Fig 6's idempotence fails inside a closed set, or Fig 1's per-slot indexing fails (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a ground measurement has paid for the shape on each slot.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a position on remote work (Fig 10 :52, "Bring a characterised residual, never the source").
2. Keep the two conditions separate in every report. A blended "work mode score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Enumerate the habitat before the move: which actors, conditions and relations does this task's goal require, and which are in contact only because of co-location? (Fig 11 :43, :44).
4. Build an instrument per slot, not a survey. Ask what would count as a failure on the output slot and on the learning slot separately (Fig 3 :29).
5. Treat any list of "best practices" as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
6. Use the business literature as one witness and as a budget filter. Bloom, Yang, Gibbs and CTrip overlap in the workplace-research pool (Fig 2 :31, :40).
7. Stop at the shape. Do not name an optimal number of office days; the framework returns "a kind of thing, never the answer itself" (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and four essays (opened 2026-11-22): *Decoding Tacit Knowledge*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*, *The Library of Babel*.

- The README confirms: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also confirms the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw."
- The README's canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops where instruments can no longer distinguish, and records the lineage. This governs the stop in section 5.
- *The Hard Problem is About Source*: "If several paths create the same behavior, then behavior is a projection with lossy information." A productivity reading cannot comment on its source; the source (focus, presenteeism, a saturated metric) needs a discriminator, not an argument. The essay adds: "It was proven wrong not by argument, but by the arrival of a better instrument."
- *The Recursive Self-Improvement Trap*: "You may all agree and be wrong." This is why the manager belief update in Bloom et al. cannot be a witness.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term physical set to office/home | **Retracted, strain S1** | Only fit by renaming a desk a space-state. Re-census: Fig 13 governs the physical substrate, not work arrangements. Kept to honest-stop role |
| Read "remote work raises productivity" as a global verdict | **Retracted as a verdict, kept as per-slot** | CTrip and Bloom 2024 show slot-specific effects; Fig 1 :19, :22 |
| Read "hybrid is the best of both worlds" as a verdict | **Refused** | Gibbs 2024 finds hybrid worse for idea quantity when teams are scattered; Fig 7 :36 |
| Read "productivity" as the anchor | **Retracted as an anchor, kept as an instrument** | A metric the frame produces cannot settle the frame (Fig 1 :27); anchor is realized output |
| Treated manager belief change as corroboration | **Retracted as a witness** | Fig 2 :40; one evidence pool, agreement inside it |
| Read Bloom 2024 null promotions as "no career cost" | **Narrowed** | The trial excluded probationary rookies; silent on the learning slot |
| Wanted to call Fig 11 :40 a `general` law of organizations | **Narrowed to `specified`** | Structural claim; no ground measurement pays for the firm-level version here |
| Wanted to name three office days as the answer | **Marked `gap`** | The framework returns a shape; Bloom et al. explicitly decline to generalize below three office days |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 11 and Fig 4 are two figures but one framework; low topical overlap is not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to work arrangements), resolved by re-census; S2 (calling employee satisfaction "the ground" while it moves when pushed), resolved by Fig 2 :29-30 and Fig 11 :73, the habitat updates, the ground is what settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: a union of contact maintenance and habitat reproduction, each with its own instrument.
2. **What is the anchor?** Realized output and demonstrated transfer, per slot. Not surveys, not self-assessed productivity (Fig 2 :29; Fig 1 :27).
3. **Is the effect in the arrangement alone?** No. Fig 11 :39-40. It is in the arrangement-and-habitat.
4. **How does learning weaken?** Habitat substitution; what was not reproduced is invisible until the goal fails (Fig 11 :66-69); a handbook carries context and not pretext (Fig 4 :25).
5. **How does focus improve productivity?** A changed habitat with quiet and more minutes, provided the task's goal did not require the contacts that were removed (CTrip 2015; Fig 11 :40).
6. **Why can hybrid be worse than either pure mode?** A scattered team has no shared channel; no new room is selected and agreement compounds (Fig 7 :12, :36; Gibbs 2024).
7. **What can be said at the stop?** Two conditions and their falsifiers, not a day count. Fig 13 :134: "Unreachable is a verdict here, not a silence," and Fig 8 :39: "So a search that finds nothing is never a proof of absence."

---

## 8. Updated verdict

The shape survives: **remote and hybrid arrangements improve productivity on slots whose goal is independent, codifiable and countable, when the substituted habitat preserves the contacts that goal required and the channel to the paying ground stays reachable; they weaken learning and collaboration on slots whose goal requires tacit transfer, peripheral observation or cross-team bridges, when the substituted habitat silently drops those relations or the metric replaces the ground.** The two conditions are kept separate, never averaged. Which specific office-day count is optimal is a `gap`, not a silence: it is a name where the framework returns a shape, and the available instruments (Bloom 2024) explicitly decline to generalize below three days. Mode `specified`. No world source flipped a verdict; two apparent conflicts were returned to the census and re-mapped. No unresolved strain remains after re-census.
