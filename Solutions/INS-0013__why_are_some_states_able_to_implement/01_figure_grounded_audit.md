# Figure-grounded audit: INS-0013, consistency of state policy implementation

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the institutional question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the state's belief about what acting will achieve, formed from its own administrative history and inherited priors (prior policies, standard procedures, the model of the citizen or firm it governs).
- **a** is what the state does: issue a decision, allocate a budget, deploy field staff, register a claim, enforce a rule, deliver a service.
- **Γ(b,a)** is what the state's library of routines, categories, legal authorities, information systems and staff predicts will happen when it acts.
- **o′** is what actually happens in the field: whether the decision is carried out, the benefit delivered, the rule complied with, the case resolved.
- **s** is the case, the locality, or the policy. R is indexed per case and per policy, never aggregated into a national average.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the level of capacity but **the duration and consistency for which R stays small**. Call it `D_s`, the persistence of a live, low-residual slot. Observed: `D_s` ranges from a single announcement to decades of reliable delivery across many policies. A frame that predicts all states are equally consistent, or that an achieved capacity simply persists, has a residual here.

State the residual as: *why does the gap between what a state's routines predict acting will achieve and what the field actually returns stay small across many decisions in some states and grow quickly in others, so that even a basic decision is not carried out?* This is an effect description. It names no theory, no "state capacity", no "bureaucratic quality", no "political will", no "institutional trust". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction keeps `D_s` large, plus an instrument that discriminates a failure of one condition from the other. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* For implementation the corresponding anchor is realized delivery per case: did the benefit arrive, was the decision carried out, was the rule complied with. Fig 2 :30: *"you push on it, it is not an anchor."* Ministerial claims, political will, citizen satisfaction and governance rankings move when pushed; they are instruments at best. Fig 2 :37-38: *"instruments can be wrong on axes they do not measure."* Viable anchor: delivery and compliance measured per case, not a perception index. The World Bank WGI page, read this session, records that the six governance indexes *"do not discriminate usefully among different aspects of governance"* and *"merely reflects perceptions of the quality of governance more broadly"*, a point returned to in F6.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: state library Γ, action a, field return o′, indexed by slot s and ordered by time t. It is a sequence rather than a set, so it carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "consistent" (`⋛`, *"a threshold relation between two quantities"*, Operators table :46-51). It is not a symmetric relation: state and field are not interchangeable.
- **Symmetry.** "Consistent" is a threshold relative to a state's own prior record and to other states, not an absolute quantity (Fig 12 :85-89). Consistency is asymmetric in time: a lost channel is not restored by reversing the decision.
- **Scale.** Three scales are in view: the single agency's step-by-step loop (Fig 4 one-agent panel), the population of agencies and jurisdictions with *"something that ranks what they produce"* (Fig 4 :5), and the time channel across years and regimes. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The administrative loop** (one agency, one scale) | civil servants, routines, SOPs, the state's Γ | decisions and residual reduction | yes: realized delivery on the case | admitted |
| **D2 The policy habitat** (population and field) | citizens, firms, local power holders, street-level bureaucrats, courts, legislatures, other agencies | compliance, delivery, survival of a decision | yes: case outcome in the field; habitat conditions named in Fig 11 :46 | admitted |
| **D3 The administrative library** (composition inside the state) | atoms (legal authorities, categories, data, routines, staff skills) and bonds between them | reach (what can be composed and done), |φ| cost | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The information channel** (across scales and time) | reports, indicators, audits, statistics, monitoring systems | contact with the field | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 Political will / leadership commitment as free-floating property** | the leader | resolve | **no** anchor independent of realized delivery | not a domain yet |
| **X2 National culture or trust as sole cause** | a population | diffuse trust | measurable by survey, but already a habitat condition inside D2 (Fig 11 :46) | absorbed into D2, not separate |

X1 fails the anchor test and is therefore excluded before any figure line is applied to it. This is a structural exclusion, not a claim that leaders never matter. X2 is not denied; it is located as a condition in the habitat, and its valence is relative to the residual (F5).

### 1.3 Partition or union

D1 and D3 overlap: Γ is inside the administrative loop, so their overlap is a compound with its own loop. D2 and D4 overlap: contact with the ground is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) maintained contact with a ground that still pays, meaning the state's readings of what is actually delivered are not stale, saturated, pooled into a national average, or substituted by a test harness; and (C2) renewal of reach through contact with a closure that differs from the state's own, meaning frontline knowledge, local categories, courts, citizens, other agencies or evidence from outside. A state failing only C1 and a state failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step"** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the state read what is happening in the field?) → 2 vocabulary (does Γ have terms for what the situation affords, what can be registered, enforced, delivered?) → 3 objective (can it say what would count as progress there, in its own terms?) → 4 planning → 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :111-115 says a vocabulary holding only ingredients can name a state and cannot name a route to one, that *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* and that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* Most diagnosis effort lands above the break because that is where the measurements already exist (Fig 3 :29-30). This is the figure-grounded reading of why a state can fail "even basic decisions": perception and command may work while the vocabulary and objective links are empty.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not why it persists |
| 2 The Ground | delivery as anchor; independence vs common pool; instruments can be wrong | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order and the "basic decision" failure |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer and the agency-to-state analogue |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a routine can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs renewal of reach (C2) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs persistence as a sequence of handoffs |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick loss (C1 failure) |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1 and D2 |
| 12 The Bond | catalyst, cycle, isomer; arrangement is the substance | governs why a strength becomes a rigidity |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "state resources" only fit by calling a budget a kind of energy and a civil service a kind of gradient. That is a strain, so Fig 13 does **not** govern the composition of state capacity. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about states, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Consistency is a property of state-and-habitat, not of the state alone

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat vs membrane).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"Only the actors, the currency and the anchor change."** (Fig 4 :20)

The phenomenon in the world: the same formal apparatus delivers reliably in one jurisdiction and fails in another; the same kernel at different sizes (Fig 4), with capability located in the relation rather than the agent (Fig 11). The habit of answering with a list of state attributes (staff numbers, budgets, legal powers, training) is an agent-only improvement that may not change contact. Fig 11 :72 gives the standing refuter in the figure's own words: an agent-only improvement that moved the ground would refute the capability claim.

**Refuter:** a controlled comparison in which a state's consistent delivery is unchanged across a habitat substitution that demonstrably removes or reverses what the field pays for or permits what the state does. If it survives, F1 is false.

**World bearing (secondary only):** the "state capacity" reference page read this session defines capacity as *"the ability of a government to accomplish policy goals"* and names an infrastructural type as *"the ability to process information, create organisational structures, and maintain transportation and communication systems"*. That is an agent-internal framing and **conflicts** with Fig 11 :40 as written. The conflict sends us back to the census, not to a softer reading (see section 6, re-census R1).

### F2: Quick collapse is a failure of the channel, not a decay of the ground

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)

A state loses the ability to carry out even basic decisions when its contact with what actually happens degrades while the field still pays someone else who can act. The named decay modes are stale percepts, dropped transients, saturated metrics and pooled readings. "Pooled readings" is the administrative version of aggregating across slots (Fig 1 :22): the signal that says where to look disappears into a national average or a compliance percentage. Fig 7 adds the two-factor test:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

A decade of consistent delivery is a chain of handoffs. If either the bracket's fidelity or the field's pressure goes to zero, the chain runs in place. The street-level bureaucracy source read this session supplies the low-overlap witness: Lipsky's finding that *"policy implementation in the end comes down to the people [the street-level bureaucrats] who actually implement it"*, and that a lack of resources makes front-line staff *"develop simplified routines for processing cases"*. Those routines are the channel, and they are where fidelity is lost. This is an individual and organisational stratum, not a state-level measurement, so the corroboration is of the mechanism shape, marked single-source for the state-level claim.

**Refuter:** a documented state that loses the ability to carry out basic decisions while bracket fidelity and field pressure are independently measured as high and are not declining. If both stay high, F2's mechanism is not the cause.

### F3: Internal agreement is not evidence, and legibility is a grammar problem

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 7, Fig 2 and Fig 12, distinct roles).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"A vocabulary without bonds can name a state and cannot name a route to one."** (Fig 12 :111)

A ministry that keeps appointing the same kind of reviewer, running the same kind of review and rewarding the same kind of routine is handing itself the same room. Agreement inside it compounds while evidence does not. The deeper failure is at the vocabulary link: administrative categories are a *dictionary* naming what a situation contains, but they must be a *grammar* that can name what would count as getting somewhere from it (Fig 12 :115). Scott's *Seeing Like a State*, read this session, is the low-overlap witness: states *"seek to force administrative legibility on their subjects by homogenizing them and creating standards that simplify pre-existing, natural, diverse social arrangements"*, and in his own 2010 essay, *"For officials who require a radically different form of order, such local knowledge, however quaint, is illegible."* Legibility buys measurement and can blind the state to what pays. Scott and the state-capacity page are not the same evidence pool as the figures.

**Refuter:** a state that keeps the same closure across two decades and yet keeps producing new, field-verified readings without importing any new atom. Under Fig 7 :36 that should be impossible; if observed, F3 is wrong.

### F4: Renewal of reach requires contact with a differing closure

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, three figures with distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

A state can keep optimizing inside its library forever and never add an atom. To keep paying across many policies, its reach must be expanded by contact with frames whose closures differ: frontline staff, local knowledge, courts, citizens, other agencies, adjacent jurisdictions, evidence from outside. Simon's bounded rationality, read this session, is the low-overlap cognition witness: *"rationality is limited when individuals make decisions, and under these limitations, rational individuals will select a decision that is satisfactory rather than optimal."* Satisficing inside a fixed library is exactly composition inside a closure; the state needs an import to move the wall. Perrow's *Normal Accidents*, read this session, supplies a second low-overlap witness from safety science: *"multiple and unexpected failures are built into society's complex and tightly coupled systems, and that accidents are unavoidable and cannot be designed around"*, with *"many failures relate to organizations rather than technology"*. Tight coupling plus a closed library is the configuration F4 predicts fails.

**Refuter:** a state that renews its reach solely by composing inside its own closure, with no new atom entering from a differing closure, and that still passes the ground test across a change of habitat. That breaks idempotence and F4 with it.

### F5: The strength that gave the capacity changes valence when the residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

This is the mechanism behind "bureaucratic inertia" and "institutional rigidity" stated in effect terms. A routine is a catalyst if it regenerates across uses and a spent part if it does not, and nothing in the routine's description records which. When the field changes, a formerly effective standard procedure can become the thing that prevents delivery, without anything about the procedure changing. There is no standing list of good institutions. Perrow's observation that *"major accidents almost always have very small beginnings"* is a low-overlap instance of a valence flip under tight coupling.

**Refuter:** a routine whose measured valence is invariant across a documented change of the state's residual. If no such change of valence can be found anywhere, F5 weakens to `general`.

### F6: Never explain this by national averages or perception indices

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1, Fig 9 and Fig 2, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"instruments can be wrong on axes they do not measure."** (Fig 2 :37-38)

A governance ranking or a compliance percentage scores the frame with a quantity the frame produces. It is a filter for where to look and a budget instrument, not a witness. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* The WGI source read this session makes the same point directly: the six indexes *"do not discriminate usefully among different aspects of governance"* and *"may have limited use as guides for policymakers"*, and their availability *"may well have crowded out efforts at measuring the impact of institutions as they really exist in a particular place on real outcomes"*. The specified consequence: any claimed answer to INS-0013 that is a national average or a perception index has already thrown away the only signal that says which case is failing and where.

**Refuter:** an averaged or perception-based statistic that predicts, prospectively and per case, which named slot will lose delivery next. If one exists, F6's methodological consequence is false.

### F7: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal so the external witness count is one).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The two conditions C1 (contact maintained) and C2 (reach renewed) have different instruments:

- A C1 failure shows up as saturated metrics, pooled readings, a bracket that no longer matches the residual, or a substituted habitat (Fig 10 :26, Fig 7 :38, Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*).
- A C2 failure shows up as a closure that keeps handing itself the same room, no import, and a reach that stops moving while the library keeps growing (Fig 6 :21, Fig 7 :12).

A single lever, for example "increase funding" or "strengthen political will", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). F7 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions in both failure types with no categorically different residue left over. That would collapse the union into a partition.

### F8: The break is usually at the middle link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111-115 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In administrative terms, the usual failure is not that the state cannot plan or cannot issue an order; it is that it has no terms for what the changed local situation affords and cannot say what would count as progress there. More planning budget lands above the break (Fig 3 :29-30). F8 predicts that the highest-value diagnostic question is not "is this state well governed?" but "at which link does its chain currently stop, and was that measured?" The street-level source corroborates at a different scale: staff under resource pressure develop *"simplified routines for processing cases"*, which is a vocabulary and objective adaptation, not a failure of command. Fig 4 :20 requires the anchor to be re-named at the new scale, so this is mechanism-shape corroboration, marked single-source for the state-level claim.

**Refuter:** a documented state whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F9: Conflict between the state-capacity literature and the figures, and how it was resolved

**Mode: `general`. Status: figure-governed.**

The state-capacity reference page defines capacity as *"the ability of a government to accomplish policy goals"* and splits it into territorial, economic, infrastructural and symbolic types. Read as an agent-only stock, that conflicts with Fig 11 :40 (*"An improvement that does not change contact changes nothing"*). A conflict between world and figures sends the derivation back to the census; it never flips the verdict. Re-census R2 in section 6 resolves it: "resources" are mapped to Γ, the library operand inside the state, and "infrastructural capacity" (information processing, organisational structures, communication) is mapped to D4, the channel. Under that mapping the source corroborates D3 and D4 and no longer conflicts with D1/D2. The mapping is recorded as an import with no provenance for the state-level claim, so it carries zero evidentiary weight until a source gate and shadow test are supplied (Fig 6 :23; Fig 8 :50-52).

The WGI critique corroborates the method rather than the verdict: a perception index *"cannot comment"* on the source of a reading, which is the metamerism error in *The Hard Problem is About Source*. It corroborates F6, not the shape.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per case and per policy, never a national average | general | Fig 1 :19, :22 | figure-derived |
| Realized delivery is the anchor, not a governance ranking or internal agreement | general | Fig 2 :29, :35, :37-38 | figure-derived |
| Consistency is state-and-habitat, not state alone | specified | Fig 11 :39, :40 | triangulated F1 |
| Quick collapse is channel failure, not ground decay | specified | Fig 10 :24, :26; Fig 7 :37-39 | triangulated F2 |
| Internal agreement and pure legibility stop progress | specified | Fig 7 :12, :13, :35, :36 | triangulated F3 |
| Renewal needs import from a differing closure | specified | Fig 6 :14, :21, :23 | triangulated F4 |
| A strength changes valence when the residual changes | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F5 |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary and objective | specified | Fig 3 :19, :24, :29 | single-source F8 |
| Which specific reform (merit system, decentralisation, digitisation) wins | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A state's consistent delivery is unchanged across a habitat substitution that removes what the field pays for or permits what the state does (breaks F1, Fig 11 :39-40).
2. A state loses the ability to carry out basic decisions while bracket fidelity and field pressure both measure high and non-declining (breaks F2, Fig 7 :37-39).
3. A state keeps the same closure for two decades and keeps producing new, field-verified readings without any import from a differing closure (breaks F3 and F4, Fig 7 :36, Fig 8 :32).
4. A routine's measured valence is invariant across a documented change of the state's residual (breaks F5, Fig 11 :49-51).
5. A single lever restores both conditions in both failure types and leaves no categorically different residue (breaks F7, Fig 9 :57).
6. Fig 13's six terms are derived from five of them, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a delivery-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of public administration (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the two conditions separate in every report. A blended "capacity score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat any list of state attributes as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Use the institutional literature as a budget filter and as one corroborating witness, not as the verdict. State-capacity and governance-indicator sources overlap heavily (Fig 2 :31).
6. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Do not name which reform delivers consistency; the framework returns *"you get a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-23).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*
- *The Hard Problem is About Source* confirms the instrument gap: *"the answer is unreached until a better instrument exists."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to state resources | **Retracted, strain S1** | Only fit by renaming a budget as a kind of energy. Re-census: Fig 13 governs the physical substrate, not a state's Γ |
| Treated the state-capacity page's definition as straightforward corroboration | **Conflict, re-census R1** | Agent-only ability vs Fig 11 :40. Resolved by mapping resources to Γ and infrastructural capacity to D4; see F9. Verdict unchanged |
| Read a governance ranking as evidence for the answer | **Retracted as a witness, kept as a filter** | Fig 9 :60; averaged perception quantities are frame-internal (Fig 1 :27) |
| Planned to name "infrastructural capacity" or "bureaucratic quality" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Those phrases are bindings from the institutional frame, recorded as such |
| Wanted to call Fig 11 :40 a `general` law about all states | **Narrowed to `specified`** | It is a structural claim; no delivery measurement pays for the state-level version here |
| Used Lipsky's front-line routines as state-level corroboration | **Narrowed to mechanism-shape corroboration** | The study is about individual and organisational behaviour at the street level; Fig 4 :20 requires the anchor to be re-named at state scale |
| F10 row "which specific reform wins" | **Marked `gap`** | The source essay: an instrument that reads a result *"cannot comment on the source"*; what is owed is a discriminator, not a name |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 11 and Fig 4 are two figures, but both come from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to state resources), resolved by re-census; S2 (calling "the field" or "the economy" the ground while citizen and firm behaviour plainly moves), resolved by Fig 2 :29-30 and Fig 11 :73: *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."* S3 (reading Fig 7 :26 *"progress per handoff: R = h² × S"* as a calibrated equation), resolved by treating it as a product structure with no numbers, mode `specified`; S4 (treating "state capacity" as the framework's answer to C2), resolved as a binding with zero verdict weight. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of contact maintenance and reach renewal, each with its own loop and instrument.
2. **What is the anchor?** Realized delivery per case, named in Fig 2 :29. Not a governance ranking, not internal agreement (Fig 1 :27).
3. **Is the answer in the state alone?** No. Fig 11 :39-40. Capability is agent-and-habitat.
4. **How does quick collapse happen?** Channel decay: stale percepts, saturated metrics, pooled readings, lost touch (Fig 10 :24-29); either factor of Fig 7 :37-39 going to zero; or a substituted habitat (Fig 11 :70).
5. **How does long consistency happen?** A chain of differing rooms selected against the surfaced residual (Fig 7 :36), with imports from differing closures moving the wall outward (Fig 6 :23).
6. **Why does the good thing turn bad?** Valence is relative to the residual (Fig 11 :49-51); a catalyst may become spent (Fig 12 :119).
7. **What can be said at the stop?** A shape and two conditions, with falsifiers. Not which reform, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **consistent implementation is a property of state-and-habitat, not a stock the state owns. It holds when a state keeps its channel to what actually happens in the field reachable (C1) and keeps moving its reach outward through contact with closures that differ from its own (C2); it collapses quickly when either condition fails, and the routine that produced earlier capacity can change sign when the residual changes.** The two conditions are kept separate, never averaged. Which specific reform occupies the slots is a `gap`, not a silence: the framework returns a shape, and the instrument that would name the source is not held here. Mode `specified`. No world source was allowed to flip a verdict; the one genuine conflict (the agent-only reading of state capacity) was returned to the census and re-mapped. No unresolved strain remains after re-census.
