# Figure-grounded audit: BUS-0010, coherence under frequent priority change

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on. See `05_what_shape_means.md` section 7.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the company's belief about what pays, formed from its own history and inherited priors.
- **a** is what the company does: its priorities, the projects it funds, the routines it runs. "Frequently changing priorities" is a claim about the time derivative of a, not about b or Γ.
- **Γ(b,a)** is what the company's library of commitments predicts will happen.
- **o′** is what the market actually returns: demand, price, share, survival.
- **s** is the slot (business, product, capability, customer relation). R is indexed by slot and by time, never aggregated into a company-wide "coherence score."

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"a global R near zero with one live slot residual is a legal state"** (Fig 1 :13)

The phenomenon to explain is the **simultaneous presence** of two observations: (i) R stays small across many slots over a long window, which is what "coherent" reduces to in effect terms, and (ii) the action a changes at high frequency within that window. A frame that predicts these are mutually exclusive has a residual here. A frame that predicts they can coexist only when a specific additional condition holds also has a residual here.

State the residual as: *how can the gap between what a company's commitments predict and what its market returns remain small across slots while the company repeatedly changes what it does?* This is an effect description. It names no theory, no "mission", no "culture", no "strategic intent", no "ambidexterity." Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of quantities, one that stays fixed and one that changes, with an instrument that discriminates a ground-referenced change from a motion-only change. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidate directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* The market is explicitly a named anchor. Fig 2 :30: *"you push on it, it is not an anchor."* Internal alignment scores, employee surveys, strategy decks and analyst consensus move when pushed; they are instruments at best. Viable anchor: realized market return and survival, measured per slot.

**First structural suspicion, recorded before the census.** The question's ordinary word "coherence" means internal consistency or agreement. Fig 2 explicitly names internal agreement with a non-updating ground as a **collapse**, not a virtue:

> **"they converge, and what they converge on"** (Fig 2 :14)
> **"the drift is coherent, which is why nobody notices."** (Fig 2 :34)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)

So the question arrives with a term, "coherence", that the figures disqualify in its ordinary sense. That is a reason to re-cense, not a reason to stop. The derive-first move is to ask what coherence would have to mean in effect terms for the question to be well-formed at all. Section 1 answers that.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: company library Γ, action a, market return o′, indexed by slot s and ordered by time t. "Priority change" is a second-order property: a change in a across t. "Coherence" is a constraint on the set of slots at a time and across time. Both are properties of the same relation, but at different logical positions, so they are not automatically opposed.
- **Symmetry.** "Coherent" is a threshold comparison across slots and over time (Fig 12 :87: *"a threshold relation between two quantities"*), so it carries the ordered comparison bond ⋛. "Change" carries the ordered sequence bond → (*"A then B; B needs A to have happened"*, Fig 12 :72). Neither is symmetric; company and market are not interchangeable.
- **Scale.** Three scales are in view: the single company's step-by-step loop (Fig 4 one-agent panel), the population of companies with *"something that ranks what they produce"* (Fig 4 :5), and the time channel across many priority cycles. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The company decision loop** (one agent, one scale) | decision makers, priorities, Γ | actions and residual reduction | yes: realized market return on the action | admitted |
| **D2 The market habitat** (population) | companies, customers, entrants, suppliers, regulators | survival, share, profit | yes: customer choice and willingness to pay; the market as ground (Fig 2 :29) | admitted |
| **D3 The composition library** (what holds stable) | atoms (commitments, routines, capabilities, kinds) and bonds between them | reach (what can be composed and done), |φ| cost | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The time channel / room sequence** (what changes) | rooms, priorities across cycles, instruments, metrics | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "Coherence" as internal agreement or stable direction** | the leadership team | consensus | **no** anchor independent of the market's verdict (a quantity the frame produces, Fig 1 :27) | not a domain yet; it is a named collapse (Fig 2 collapse 1) |
| **X2 "Priority change" as such** | the plan | novelty | no separate anchor; it is already the rooms of D4 | absorbed into D4 |

X1 fails the anchor test and is therefore excluded before any figure line is applied to it. This is a structural exclusion, not a claim that alignment never matters. It is the reason the question cannot be answered on its own terms. X2 is absorbed, not excluded: frequent priority change is the observable of D4.

**The key census result.** D3 and D4 are not the same quantity. D3 is the *set* of commitments and the bonds among them; D4 is the *sequence of rooms* selected over time. Fig 13 :115 says explicitly:

> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

And Fig 4 :19-20 separates the invariant from the variable:

> **"The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running"** (Fig 4 :19)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

So "coherence" maps onto the kernel, the set and the anchor (D3 and the anchor of D2/D4), and "frequent priority change" maps onto the arrangements and rooms (D4). They govern different quantities. The question's apparent contradiction is produced by putting them on one axis. This is a `general` structural result, before any firm-level prediction.

### 1.3 Partition or union

D1 and D3 overlap: Γ is inside the company loop, so their overlap is a compound with its own loop. D2 and D4 overlap: contact with the ground is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **(C1)** the anchor and the kernel stay fixed (the ground still pays, the set is not silently redefined, the channel stays reachable), and **(C2)** the arrangements change by selection against the residual the last room surfaced (Fig 7 :36). A company failing only C1 and a company failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The Library of Babel essay states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the company read the market response to the changed priority?) → 2 vocabulary (does Γ have terms for what the changed situation affords, and can the company say what would count as progress?) → 3 objective (can it state a comparison that counts as getting somewhere?) → 4 planning → 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :111-112 says a vocabulary with only ingredients can name a state and cannot name a route to one: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* Most diagnosis effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not whether coherence and change coexist |
| 2 The Ground | market is a named anchor; internal agreement is a named collapse | decisive for the re-definition of coherence |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; only actors, currency and anchor change | decisive for fixed-versus-variable |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs whether a new priority is a mint or a re-arrangement |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs which changes expand reach |
| 7 Room Chain | differing rooms selected against the residual; motion versus progress | decisive for frequent change |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs source rules and the one-witness rule |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; room should change with question | decisive for both C1 and C2 |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | governs why the good commitment can become the bad one |
| 12 The Bond | set vs arrangement; isomer; catalyst; plan/goal/progress | decisive for the set/arrangement distinction |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | decisive structural line (Fig 13 :115) |
| Operators table | → sequence, ⋛ comparison, ¬ negation | governs the bonds carried by coherence and change |
| Symbols table | R is the aim; the ground is the anchor; Γ is the library | no `R` is stated for the ordinary reading of the question |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "strategic priorities" only fit by calling a priority a kind of energy and a mission a kind of gradient. That is a strain, so Fig 13 does **not** govern which priorities a company holds. Re-census sent Fig 13 to the set-versus-arrangement role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about companies, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The contradiction is a category error, set-stability and arrangement-change are different quantities

**Mode: `general` structural, `specified` for the company application. Domains D3, D4. Status: triangulated (Fig 13 and Fig 4, low overlap: substrate set vs membrane kernel).**

> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)
> **"Six members, and no amount of arranging produces a seventh: a new member would have to be a new kind, and composition only ever rearranges the kinds already held. Meanwhile the arrangements over those six do not run out."** (Fig 13 :116-117)
> **"Only the actors, the currency and the anchor change."** (Fig 4 :20)

The ordinary question treats "coherent" and "changing priorities" as opposite ends of one stability axis. Fig 13 forbids that reading: the set is closed while the arrangements are open. A company can hold a fixed set of commitments, capabilities and anchors (coherence) while endlessly rearranging which one is active, funded or sequenced (priority change), because these are two different quantities governed by two different clauses of the same figure. Fig 4 makes the same cut between the kernel and the actors, currency and anchor that change.

The essay *The Recursive Self-Improvement Trap* states the instance in the author's own system: *"A human keeps a stable kernel (DNA) but changes as a person over time. The Tether is like a human. The kernel is fixed. The operating system grows."* This is framework-internal corroboration, not an independent witness (recorded as such in the ledger).

**Refuter:** show a system in which changing an arrangement necessarily changes the set, that is, where Fig 13 :115 fails and no rearrangement is possible without minting or importing a new kind. If every priority change forced a new irreducible commitment, F1 collapses and the question's ordinary contradiction is restored.

### F2: "Coherence" as internal agreement is a named collapse, not a virtue

**Mode: `specified`. Domain D2, D4. Status: triangulated (Fig 2 and Fig 7, low overlap: anchor rule vs room chain).**

> **"they converge, and what they converge on"** (Fig 2 :14)
> **"everything drifts together, and the drift is coherent, which is why nobody notices."** (Fig 2 :34)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)

Fig 2 collapse 1 is "coherent drift": frames with no anchor that update on each other converge on whoever had the most influence, and the drift is invisible precisely because it looks coherent. A company whose "strategic coherence" consists of its leaders and metrics agreeing with one another is in panel 1, not panel 3. Genuine coherence is triangulation: each frame ranges separately against an anchor that does not update (Fig 2 :29, :33). So the question cannot be answered on its own terms. Its central term must be re-grounded: coherence is *stable contact with a ground that does not move*, not internal consistency.

This is not a wordplay move. It changes the prediction. Under the ordinary reading, a company that changes priorities often is incoherent by definition. Under the figure-grounded reading, a company that changes priorities often while keeping the market as the non-updating anchor may be *more* coherent than one that holds its plan and lets its metrics drift into self-agreement.

The essay *The Recursive Self-Improvement Trap* gives the same warning in the author's voice: *"You may all agree and be wrong. You may set your clock to someone else's, who was setting your clock to yours, and be off by many deviations over time."*

**Refuter:** a documented company whose high internal agreement and stable published direction coexist with a market anchor that measurably moved against it, and where the company's readings were not updated to match the market. If such a company retains contact and pays, F2's identification of agreement-with-drift is wrong. Note the direction of the test: it does not ask whether agreement feels good; it asks whether the anchor was consulted.

### F3: Frequent change is required when the question changes, and is progress only when rooms are selected against the residual

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom."** (Fig 10 :72)
> **"The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"one long room: motion, no progress"** (Fig 7 :32)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37), **"the bracket’s fidelity across the handoff"** (Fig 7 :38), **"the ground’s pressure on the room"** (Fig 7 :39)

Fig 10 :72 speaks directly to the question. The room (the current priority configuration) is a function of the question (what the market is now asking). When the question moves and the room does not, that is the named failure. So frequent priority change is not a defect to be minimised; it is the correct response to a moving question. But Fig 7 :36 adds the discriminator: the next room must both differ from the last *and* match the residual the last one surfaced. A company that changes priorities frequently but never against the surfaced residual is in Fig 7 :32, "one long room: motion, no progress". Its R does not trend down; it merely relabels.

The two-factor form gives the instrument. If either bracket fidelity across the handoff or the ground's pressure on the room goes to zero, the chain runs in place. A company can change priorities every quarter and still be stationary if its bracket no longer matches what pays or if the market has stopped paying for anything it does.

This finding was checked against a genuine world conflict and survived re-census (F10 below). The organizational-ambidexterity literature says ambidextrous organizations "do not alternate between exploration and exploitation, but they do both simultaneously" (Wikipedia summary of Raisch and Birkinshaw, read 2026-11-22). Read as a `general` claim that simultaneity is always required, this would **conflict** with Fig 10 :72 and Fig 7 :36, which license temporal succession of rooms provided each is selected against the residual. The conflict was returned to the census: Fig 7 governs the sequence of rooms against a residual, whereas the ambidexterity claim governs the structural allocation of attention at a moment. Different quantities. Under that re-census the world source corroborates the "both can coexist" shape without overruling the figure's sequencing rule (see F10, strain S4).

**Refuter:** a company that changes priorities frequently, with each change demonstrably selected against the residual the prior cycle surfaced, and whose R does not trend down over the sequence. Under Fig 7 :37-39 that should be impossible if both factors are nonzero; if observed, F3's progress condition is wrong and change alone is sufficient.

### F4: Not every priority change moves the wall; internal re-arrangement adds no atom

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, three distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)

A company can reshuffle its priorities indefinitely inside its existing library and never add an atom. That is F1's arrangement-change, and it is legal and useful (it is what the set/arrangement gap is *for*), but it does not expand reach. Only contact with a closure that differs (an entrant, an adjacent technology, a regulator, an unfamiliar customer) moves the wall. So the honest answer to "can it remain coherent while changing priorities often" has a hidden third question: *what kind of change?* A priority change can be (a) a re-arrangement of held atoms, which preserves coherence and leaves reach unchanged, or (b) an import from a differing closure, which expands reach and carries a provenance debt. Both are compatible with coherence; only (b) changes what the company can reach.

Fig 8 :51 gives the source rule: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."* A company cannot tell from the priority list alone whether a change was an import or a re-shuffle. That distinction needs a record, which is the `gap` in F11.

Teece's dynamic-capabilities page (read 2026-11-22) gives the business-pool name for the operator: *"the firm's ability to integrate, build, and reconfigure internal and external competences to address rapidly changing environments"*. It also defines the capacity *"to purposefully create, extend, or modify its resource base"* (Helfat et al., 2007, quoted on that page). This is a corroboration from the strategy pool, one witness, not three (Fig 2 :31).

**Refuter:** a company that expands its demonstrated reach (new products, new markets, new prediction accuracy) purely by internal re-prioritisation with no new atom entering from a differing closure, across a documented interval. That breaks idempotence and F4 with it.

### F5: The commitment that gave coherence can change valence when the residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

This is the mechanism behind the intuition that a coherent company can become rigid. A commitment is coherent while its valence is positive for the current residual. When the residual changes, the same commitment can become the thing preventing the next match, without anything about the commitment changing. Fig 12 :119 adds that nothing in the commitment's description records whether it is a catalyst (regenerated by use) or a spent part. So "keep the coherent core" is not a safe instruction: it may preserve a spent part.

A low-overlap witness corroborates the mechanism at a different scale. Daniels, Chen, Sethna, Gutenkunst and Myers (2008, arXiv:0805.2628, read 2026-11-22) write that *"Mutational robustness of systems would seem to be at odds with an ability to adapt and evolve, since robustness implies persistence of phenotype or function, which may inhibit the capacity for evolutionary change"* and that neutral networks *"enable systems to drift robustly in genotype space (i.e., without significant phenotypic change), while encountering new and different phenotypes at various points along that neutral space."* That is Fig 13 :115 and Fig 12 :119 observed in systems biology, with no shared evidence pool with management strategy. It also names the apparent paradox the question is an instance of, and the resolution the figures give.

**Refuter:** a commitment whose measured valence is invariant across a documented change of the company's residual and a change of habitat. If no such case can be found anywhere, F5 weakens to `general`.

### F6: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal so the external witness count is one).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The two conditions C1 (anchor and kernel held) and C2 (arrangements changed against the residual) have different instruments:

- A C1 failure shows up as an anchor that moves when pushed (Fig 2 :30), a channel that has gone stale or pooled (Fig 10 :26), or a kernel silently redefined so that "coherent" now means "what we already decided."
- A C2 failure shows up as rooms that keep handing themselves the same closure, no import, and a reach that stops moving while the priority list keeps growing (Fig 6 :21, Fig 7 :12).

A single lever, for example "change priorities faster" or "hold the course", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). F6 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions in both failure types with no categorically different residue left over. That would collapse the union into a partition.

### F7: The break is usually at the middle link, so faster changing often misses the actual failure

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111-112 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

A company facing a changed market usually does not fail at planning. It fails because it has no terms for what the changed situation affords and cannot say what would count as progress there. Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* More planning budget, which is what "change priorities more often" typically buys, lands above the break (Fig 3 :29-30). The diagnosed failure must be located before the frequency of change is adjusted.

**Refuter:** a documented company whose perception, vocabulary and objective links all measure as working and whose failure is located at planning or at the carry link. That would falsify the "usually middle" claim, though not the dependency ordering.

### F8: Never answer this with a company-wide coherence average

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

A "strategic coherence index" that aggregates alignment, consistency of messaging and stability of resource allocation across the whole company scores the frame with quantities the frame produces. It is a budget filter, not a witness. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* The specified consequence: any claimed answer to BUS-0010 that is a single company-level coherence score has already thrown away the only signal that says which slot is live and which room stopped matching.

**Refuter:** an aggregated company-level coherence statistic that predicts, prospectively and per slot, which priority change will fail next. If one exists, F8's methodological consequence is false.

### F9: The source error is the specific forbidden move here

**Mode: `general`. Status: figure-governed with framework-internal corroboration.**

The essay *The Hard Problem is About Source* gives the mechanism. A spectrometer reads green and *"cannot comment on the source"*; one green light, yellow plus blue, RGB, CMYK and an undiscovered scheme all produce the same reading. *"If several paths create the same behavior, then behavior is a projection with lossy information"*, and *"The answer is unreached until a better instrument exists."*

Applied here: "the company is coherent" is a reading. It is consistent with a genuinely anchored set, with a monopoly that hides the residual, with a market that has not yet moved, and with coherent drift (Fig 2 :34). The reading does not determine the source. Naming the source from the reading is the metamerism error the essay forbids. What is owed is an instrument that discriminates anchored coherence from drift, not another agreement among readers. Fig 6 :30: *"Cast it in effect terms."*

**Refuter:** an instrument that, from the same coherence reading, discriminates anchored set-stability from coherent drift without access to the market's independent verdict. If one exists, the `gap` in F11 narrows.

### F10: World sources, one pool and three low-overlap witnesses, with one conflict returned to the census

**Mode: `general`. Status: figure-governed.**

**Evidence pool A, strategic management (one witness, not several).**

- Teece's dynamic-capabilities page defines the reconfiguration operator (quoted in F4) and states that core competencies should be used to modify short-term competitive positions that build longer-term advantage. This is the business-pool name for C2.
- The Wikipedia ambidexterity summary reports that organizational ambidexterity is *"an organization's ability to be aligned and efficient in its management of today's business demands as well as being adaptive to changes in the environment at the same time"* and credits March 1991 with developing the concept. It also reports that ambidextrous organizations *"do not alternate between exploration and exploitation, but they do both simultaneously."* This **conflicts** with a naive reading of Fig 10 :72 if the simultaneity clause is taken to forbid temporal succession of rooms; the conflict was returned to the census (F3, strain S4) and dissolved by distinguishing structural allocation at a moment from room sequence across time. It corroborates the "both can coexist" shape only.
- The same page reports a *"success trap (i.e. the focus on their, historically successful, current business activities)"*. That is Fig 12 :119's spent part and Fig 7 :36's repeated room, from the same pool.

Because these sources share conferences, citation chains and problems, their agreement is one witness (Fig 2 :31, :40).

**Low-overlap witnesses (independent fields, mechanism only).**

- **Systems biology.** Daniels et al. 2008, quoted in F5, corroborates the set/arrangement and robustness/evolvability resolution from a field with no shared evidence pool.
- **Physiological regulation.** Ramsay and Woods 2014, *Psychological Review*, read 2026-11-22: *"Sterling and Eyer's (1988) allostasis, a term they defined as achieving stability through change."* The same article notes that *"the defended level of a regulated value can and should change to optimally cope with the demands presented by environmental changes"*. This is an independent corroboration of the exact shape the figures give: stability is achieved by changing the defended level against a regulating ground, not by holding a constant set point. It also reports that the concept *"remains diffuse"* and that there is *"no general consensus as to what the model actually is"*, which corroborates the instrument `gap` in F11 rather than filling it.
- **Framework-internal essays.** Library of Babel, Recursive Self-Improvement Trap, Hard Problem is About Source, all read directly 2026-11-22. They corroborate the shape but share the author with the figures, so they carry zero independent weight (recorded in the ledger).

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per slot, never a company-wide average | general | Fig 1 :13, :19, :22 | figure-derived |
| The market is the anchor, not internal agreement | general | Fig 2 :29, :33, :35 | figure-derived |
| "Coherence" as internal agreement is a collapse, not a verdict | specified | Fig 2 :14, :34, :35; Fig 7 :12, :13 | triangulated F2 |
| Set/kernel stability and arrangement/room change are different quantities | general | Fig 13 :115-117; Fig 4 :19-20 | triangulated F1 |
| Frequent change is required when the question moves and must be room-selected | specified | Fig 10 :72; Fig 7 :32, :36-39 | triangulated F3 |
| Internal reshuffle preserves coherence but adds no atom; import moves the wall | specified | Fig 6 :14, :21, :23; Fig 8 :32 | triangulated F4 |
| The coherent commitment can change valence when the residual changes | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F5 |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary and objective | specified | Fig 3 :19, :24, :27, :29 | single-source F7 |
| A coherence reading cannot name its own source | general | Fig 1 :27; source essay | figure-derived F9 |
| Which specific priorities to change, and whether a given change is an import or a re-shuffle | not stated | none | gap: framework returns a shape, not a name; no source-discriminating instrument held |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A system in which changing an arrangement necessarily changes the set, so Fig 13 :115 fails and coherence and change cannot be separated (breaks F1).
2. A company whose high internal agreement and stable published direction coexist with a market anchor that measurably moved against it, where its readings were not updated to match, and where it retains contact (breaks F2).
3. A company that changes priorities frequently, each change selected against the surfaced residual, and whose R does not trend down across the sequence (breaks F3 and Fig 7 :37-39).
4. A company that expands its demonstrated reach purely by internal re-prioritisation with no new atom from a differing closure, across a documented interval (breaks F4 and idempotence).
5. A commitment whose measured valence is invariant across a documented change of residual and habitat (breaks F5).
6. A single intervention that restores both conditions in both failure types and leaves no categorically different residue (breaks F6, Fig 9 :57).
7. An aggregated coherence statistic that prospectively predicts per-slot priority failure (breaks F8).
8. Fig 13's set/arrangement distinction is derived away, or Fig 2's anchor rule is shown to be inapplicable to a market (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of coherence (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Refuse the question's ordinary term. Do not ask "is this company coherent?" Ask "which anchor does it range against, and does that anchor move when pushed?" (Fig 2 :29-30).
3. Keep the two conditions separate in every report. A blended "coherence score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
4. Classify each priority change as re-arrangement or import before judging it. The priority list alone cannot tell you which (Fig 8 :51).
5. At each handoff, ask which link the chain stops at and whether that was measured (Fig 3 :29). Do not buy frequency of change before locating the break.
6. Treat the ambidexterity and dynamic-capabilities literatures as one budget filter and one corroborating witness, not as the verdict. They share an evidence pool (Fig 2 :31, :40).
7. Use the light-overlap witnesses (systems biology, physiology) for the mechanism shape only, and state that they are analogues, not this ground (Fig 4 :20 requires the anchor to be re-named at the new scale).
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name which priorities a company should change. Fig 9 :32: *"you get a kind of thing, never the answer itself."*

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the three essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six physical substrate terms to strategic priorities | **Retracted, strain S1** | Only fit by renaming priorities as kinds of energy. Re-census: Fig 13 governs the set/arrangement distinction, not which priorities a company holds |
| Treated "coherence" as a neutral description of the company | **Retracted and re-grounded** | Fig 2 :34 names internal agreement as coherent drift. Coherence is re-defined as stable contact with a non-updating anchor. Both the discarded and the corrected reading are kept |
| Read ambidexterity's "simultaneous" as a direct **conflict** with Fig 10 :72 | **Conflict returned to census and dissolved, strain S4** | Fig 7 governs room sequence against a residual; ambidexterity governs structural allocation at a moment. Different objects. Verdict unchanged |
| Read Fig 7 :26, *"progress per handoff: R = h² × S"*, as a calibrated equation | **Retracted as a witness, kept as a structure, strain S3** | The figure supplies two factors and no numbers. Mode `specified`, not a formula to fit |
| Planned to name ambidexterity or dynamic capabilities as the framework's answer to C2 | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. These are business-pool bindings, recorded as such |
| Wanted to call F1 a `general` law about all companies | **Narrowed: `general` for the set/arrangement structure, `specified` for firm-level coexistence** | No market measurement pays for the firm-level version |
| Used the allostasis source as independent evidence for the business claim | **Narrowed to mechanism-shape corroboration** | It is physiology; Fig 4 :20 requires the anchor to be re-named at the company scale |
| F11 row "which priorities to change" | **Marked `gap`** | The source essay's metamerism rule: a coherence reading *"cannot comment on the source"*; what is owed is a discriminator, not a name |
| F2 "decisive" in an early draft | **Downgraded to triangulated** | Fig 2 and Fig 7 are two figures, but both come from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to strategic priorities), resolved by re-census; S2 (the word "coherence" is a collapse in Fig 2 but a virtue in the question), resolved by re-grounding the term in effect terms, not by softening Fig 2; S3 (Fig 7 :26 read as a calibrated equation), resolved as product structure; S4 (ambidexterity's simultaneity versus Fig 10 :72), resolved by re-census into structural allocation versus room sequence. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of anchor/kernel maintenance (C1) and arrangement/room change (C2), each with its own loop and instrument.
2. **What is the anchor?** The market, named in Fig 2 :29. Not internal agreement, not a coherence index (Fig 1 :27).
3. **Is the question well-formed as asked?** No. Its term "coherence" is a named collapse (Fig 2 :34). It must be re-grounded as stable contact with a ground that does not move (Fig 2 :29, :33).
4. **Can the two coexist?** Yes at the structural level. Fig 13 :115: the set is closed, the arrangements are not. Fig 4 :19-20: the kernel is constant, only actors, currency and anchor change.
5. **When is frequent change correct?** When the question moves (Fig 10 :72), and when each room differs from the last and matches the residual the last one surfaced (Fig 7 :36). Otherwise it is motion, not progress (Fig 7 :32).
6. **What kind of change expands reach?** Only contact with a differing closure (Fig 6 :23). Internal re-arrangement adds no atom (Fig 8 :32).
7. **What can go bad while everything looks coherent?** The formerly good commitment changes valence when the residual changes (Fig 11 :49-51, Fig 12 :119). A stable core may be a spent part.
8. **What can be said at the stop?** A shape: keep the anchor fixed and the channel reachable, rearrange against the residual, import when the wall must move, and record which is which. Not which priorities. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a company can remain strategically coherent while changing priorities frequently, because coherence and priority change govern different quantities. Coherence is stable contact with a non-updating market anchor and a fixed kernel; priority change is the rearrangement of held atoms and the selection of new rooms against the residual the last room surfaced. They fail together only when the anchor moves (coherent drift) or when rooms change without residual selection (motion, not progress).** The two conditions are kept separate, never averaged. The ordinary sense of "coherence" as internal agreement is refused as a named collapse, not adopted. Which specific priorities to change, and whether a given change is a genuine import or an internal re-shuffle, is a `gap` at the instrument boundary, not a hidden answer. Mode `general` for the set/arrangement structure, `specified` for the firm-level claim. No world source was allowed to flip a verdict; the one genuine conflict (ambidexterity's simultaneity) was returned to the census and re-mapped. No unresolved strain remains after re-census.
