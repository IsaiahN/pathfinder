# Figure-grounded audit: BUS-0001, persistence of superior firm performance

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the firm's belief about what the market will pay for, formed from its own history and inherited priors.
- **a** is what the firm does: price, product, acquisition, entry, investment, routine.
- **Γ(b,a)** is what the firm's library of routines and assets predicts will happen.
- **o′** is what the market actually returns: demand, price, share, survival.
- **s** is the firm. R is indexed by firm and by time, never aggregated into an industry average.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not performance level but **the duration for which R stays small**. Call it `D_s`, the persistence of a live, low-residual slot. Observed: `D_s` ranges from a few years to decades. A frame that predicts all advantages are equally durable, or that an achieved advantage simply persists, has a residual here.

State the residual as: *why does the gap between what a firm's routines predict and what its market returns remain small for decades in some slots and grow quickly in others?* This is an effect description. It names no theory, no "resource", no "capability", no "moat". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction keeps `D_s` large, plus an instrument that discriminates a failure of one condition from a failure of the other. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidate directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* The market is explicitly a named anchor. Fig 2 :30: *"you push on it, it is not an anchor."* Management opinion, analyst consensus and internal metrics move when pushed; they are instruments at best. Viable anchor: realized market return and survival, measured per firm.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: firm Γ, action a, market return o′, indexed by slot s and ordered by time t. It is a sequence rather than a set, so it carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "superior" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not a symmetric relation: firm and market are not interchangeable.
- **Symmetry.** "Superior" is a threshold relative to competitors, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). Persistence is asymmetric in time: a lost advantage is not recovered by reversing the action.
- **Scale.** Three scales are in view: the single firm's step-by-step loop (Fig 4 one-agent panel), the population of firms with a shared library and *"something that ranks what they produce"* (Fig 4 :5), and the time channel across decades. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The firm loop** (one agent, one scale) | decision makers, routines, the firm's Γ | actions and residual reduction | yes: realized market return on the action | admitted |
| **D2 The market habitat** (population) | firms, customers, entrants, suppliers, regulators | survival, share, profit | yes: customer choice and willingness to pay; the market as ground (Fig 2 :29) | admitted |
| **D3 The capability library** (composition inside the firm) | atoms (tacit know-how, routines, assets) and bonds between them | reach (what can be composed and done), |φ| cost | yes: settlement, "then check it against the ground, then carry it up" (Fig 5 :32) | admitted |
| **D4 The temporal channel** (across decades) | the firm's instruments, metrics, percepts | contact with the ground | yes: the ground, "the ground does not decay, the channel does" (Fig 10 :24) | admitted |
| **X1 Managerial genius as free-floating property** | the leader | talent | **no** anchor independent of the market's verdict | not a domain yet |
| **X2 Industry attractiveness as sole cause** | the industry | structural rents | measurable industry returns, but this is already the habitat of D2, plus Fig 11 :46 names conditions (season, terrain) as habitat elements | absorbed into D2, not separate |

X1 fails the anchor test and is therefore excluded before any figure line is applied to it. This is a structural exclusion, not a claim that leaders never matter.

### 1.3 Partition or union

D1 and D3 overlap: Γ is inside the firm loop, so their overlap is a compound with its own loop. D2 and D4 overlap: contact with the ground is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) maintained contact with a ground that still pays, and (C2) renewal of reach through contact with a closure that differs. A firm failing only C1 and a firm failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the firm read the market response?) → 2 vocabulary (does Γ have terms for what the market affords?) → 3 objective (can it say what progress would count as?) → 4 planning → 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :113-115 says that a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it, and that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* Most diagnosis effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not why it persists |
| 2 The Ground | market is a named anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer and the individual-to-firm analogue |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a capability can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs renewal of reach (C2) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs persistence as a sequence of handoffs |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick loss (C1 failure) |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1 and D2 |
| 12 The Bond | catalyst, cycle, isomer; arrangement is the substance | governs why a strength becomes a rigidity |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "firm resources" only fit by calling a routine a kind of energy and a capability a kind of gradient. That is a strain, so Fig 13 does **not** govern firm capabilities. Re-census sent Fig 13 to the honest-stop role only (section 7, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about firms, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Persistence is a property of firm-and-habitat, not of the firm alone

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat vs membrane).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

The two conditions observed in the world: same kernel at different sizes (Fig 4), and capability located in the relation rather than the agent (Fig 11). If the question is "why does this slot keep paying", the answer cannot be a property of the slot considered alone. The habit of answering with a list of firm attributes (talent, brand, culture, process) is an agent-only improvement that may not change contact. Fig 11 :72 gives the standing refuter in the figure's own words: an agent-only improvement that moved the ground would refute the capability claim.

**Refuter:** a controlled comparison in which a firm's sustained performance is unchanged across a habitat substitution that demonstrably removes or reverses the ground's payment for what the firm does. If it survives, F1 is false.

**World bearing (secondary only):** Barney 1991 assumes resources are *"heterogeneously distributed across firms and that these differences are stable over time"* (abstract, Open Access Button). That is a firm-internal framing and **conflicts** with Fig 11 :39 as written. The conflict sends us back to the census, not to a softer reading (see section 6, re-census R1). Rumelt 1991 reports *"very large stable business-unit effects"*, which supports per-slot indexing (Fig 1 :19) but is a variance decomposition, hence a filter for budget, not a witness for the verdict (Fig 9 :60).

### F2: Quick loss is a failure of the channel, not a decay of the ground

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)

A firm loses advantage quickly when its contact with what pays degrades while the market itself keeps paying someone. The named decay modes are stale percepts, dropped transients, saturated metrics and pooled readings. "Pooled readings" is the firm-level version of aggregating across slots (Fig 1 :22): the signal that says where to look disappears into an average.

Fig 7 adds the two-factor test:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

A decade of advantage is a chain of handoffs. If either the bracket's fidelity or the ground's pressure goes to zero, the firm runs in place. The world reports this: Teece, Pisano and Shuen write that *"Whether and how a firm’s competitive advantage is eroded depends on the stability of market demand, and the ease of replicability (expanding internally) and imitability (replication by competitors)"* (1997, full text). "Stability of market demand" is the ground-pressure factor; "ease of replicability and imitability" is the closure factor of F4.

**Refuter:** a documented case in which a firm loses advantage while both bracket fidelity and ground pressure are independently measured as high and are not declining. If both stay high, F2's mechanism is not the cause.

### F3: Internal agreement is not evidence, and a repeated room is not progress

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 7 and Fig 2, low overlap: selection between rooms vs anchor triangulation).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"The chain approaches the truth only as the world runs out of ways to refuse it. Which means the next room you book is the direction you travel, and booking a room like the last one is how a chain stops travelling at all."** (Fig 7 :42)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)

A firm that keeps appointing the same kind of leader, running the same kind of review and rewarding the same kind of routine is handing itself the same room. Agreement inside it compounds while evidence does not. This is the figure-grounded reading of "core rigidity": not that the capability is bad, but that the firm has stopped selecting between rooms. Fig 7 :35: *"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

The world corroborates at a different stratum. Trinh 2019, in *Frontiers in Psychology*, opens with Nokia: *"Nokia did not do anything wrong; it was expert in what it was doing. It only failed to catch up with change."* She reports Dane's cognitive entrenchment: schemas become *"larger, more complex, more interrelated, more detailed, and more accurate"* and, reinforced by repeated practice, *"also tended to be more stable"*. This is an individual-level instance, not a firm-level measurement. Fig 4 :20 licenses the cross-scale transfer of the kernel while requiring the anchor to be re-named at the new scale, so the corroboration is of the mechanism shape, marked single-source for the firm-level claim.

**Refuter:** a firm that keeps the same closure across two decades and yet keeps producing new, ground-verified readings of the market without importing any new atom. Under Fig 7 :36 that should be impossible; if observed, F3 is wrong.

### F4: Renewal of reach requires contact with a differing closure

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, three figures with distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)

A firm can keep optimizing inside its library forever and never add an atom. To keep paying for decades, its reach must be expanded by contact with frames whose closures differ: entrants, adjacent technologies, other industries, customers, regulators, science. Teece, Pisano and Shuen define dynamic capabilities as *"the firm’s ability to integrate, build, and reconfigure internal and external competences to address rapidly changing environments"* (1997), which is the business-practice name for this condition. It is a corroboration from the same strategy pool as Barney and Rumelt, so it counts as one witness, not three (Fig 2 :31).

**Refuter:** a firm that renews its reach solely by composing inside its own closure, with no new atom entering from a differing closure, and that still passes the ground test across a change of habitat. That breaks idempotence and F4 with it.

### F5: The strength that gave the advantage changes valence when the residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)

This is the mechanism behind "success traps" and "core rigidities" stated in effect terms. A routine is a catalyst if it regenerates across uses and a spent part if it does not, and nothing in the routine's description records which. When the residual changes, a former benefactor becomes a malfactor without anything about the routine changing. Leonard-Barton's title, *"Core Capabilities and Core Rigidities: A Paradox in Managing New Product Development"* (Strategic Management Journal 13, 1992), is the business-pool name for the same observation; only the bibliographic record was opened (see ledger note), so it is not used as a substantive quote.

The ecology source supplies an independent, low-overlap witness. MathisonSlee et al. 2022 report a *"rigidity trap"* in which *"a system stuck in one phase of the adaptive cycle becomes highly connected, rigid, and inflexible. System capacity for novelty is diminished, leading to a decrease in adaptive responses to shocks."* That is Fig 12 :119 and Fig 7 :36 observed in social-ecological systems, with no shared evidence pool with management strategy.

**Refuter:** a capability whose measured valence is invariant across a documented change of the firm's residual. If no such change of valence can be found anywhere, F5 weakens to `general`.

### F6: Never explain this by averaging across firms

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

A variance decomposition that reports "firm effects explain X percent of returns" scores the frame with a quantity the frame produces. It is a filter for where to look and a budget instrument, not a witness. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* The specified consequence: any claimed answer to BUS-0001 that is an average across firms has already thrown away the only signal that says which firm is losing contact and where.

**Refuter:** an averaged industry-level statistic that predicts, prospectively and per firm, which named slot will lose its advantage next. If one exists, F6's methodological consequence is false.

### F7: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal so the external witness count is one).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The two conditions C1 (contact maintained) and C2 (reach renewed) have different instruments:

- A C1 failure shows up as saturated metrics, pooled readings, a bracket that no longer matches the residual (Fig 10 :26, Fig 7 :38).
- A C2 failure shows up as a closure that keeps handing itself the same room, no import, and a reach that stops moving while the library keeps growing (Fig 6 :21, Fig 7 :12).

A single lever, for example "invest more in the core business", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). F7 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions in both failure types with no categorically different residue left over. That would collapse the union into a partition.

### F8: The break is usually at the middle link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :113-115 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In firm terms, the usual failure is not that the firm cannot plan; it is that it has no terms for what the changed situation affords and cannot say what would count as progress there. More planning budget lands above the break (Fig 3 :29-30). F8 predicts that the highest-value diagnostic question is not "is this firm well managed?" but "at which link does its chain currently stop, and was that measured?"

**Refuter:** a documented firm whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F9: Conflict between the business literature and the figures, and how it was resolved

**Mode: `general`. Status: figure-governed.**

Barney's assumption of *"differences ... stable over time"* (abstract) reads as an agent-only stock. Fig 11 :40 says an improvement that does not change contact changes nothing. A conflict between world and figures sends the derivation back to the census; it never flips the verdict. Re-census R2 in section 6 resolves it: Barney's "resources" are mapped to Γ, the library operand inside the firm, and stability is re-read as a property of a closure that has not met a differing closure. Under that mapping Barney corroborates the library domain D3 and no longer conflicts with D1/D2. The mapping is recorded as an import with no provenance for the firm-level claim, so it carries zero evidentiary weight until a source gate and shadow test are supplied (Fig 6 :23; Fig 8 :50-52).

Fitness-landscape work gives a warning that corroborates the method rather than the verdict. Marks, Gerrits and Marx 2019 conclude that *"the more the model is tailored towards the target domain, the more exploratory and explanatory power it will have, the less it will resemble the original model."* They also say that in the social realm *"one can obtain fitness at some point and lose it elsewhere without losing overall fitness, so a simplistic dichotomy between survival and extinction doesn’t work well there"*. That matches Fig 6 :30 (*"Cast it in effect terms"*) and Fig 9 :30 (*"your words are borrowed too, so describe the effect"*) with Fig 9 :31 (*"rather than the cause"*). It also refuses the naive "fitness landscape" analogy that would otherwise be tempting here.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per firm, never an industry average | general | Fig 1 :19, :22 | figure-derived |
| The market is the anchor, not internal agreement | general | Fig 2 :29, :35 | figure-derived |
| Persistence is firm-and-habitat, not firm alone | specified | Fig 11 :39, :40 | triangulated F1 |
| Quick loss is channel failure, not ground decay | specified | Fig 10 :24, :26; Fig 7 :37-39 | triangulated F2 |
| Repeated closure stops progress | specified | Fig 7 :12, :13, :36 | triangulated F3 |
| Renewal needs import from a differing closure | specified | Fig 6 :14, :21, :23 | triangulated F4 |
| A strength changes valence when the residual changes | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F5 |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F8 |
| Which particular routines are the good ones | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A firm's sustained performance is unchanged across a habitat substitution that removes the market's payment for what it does (breaks F1, Fig 11 :39-40).
2. A firm loses its advantage while bracket fidelity and ground pressure both measure high and non-declining (breaks F2, Fig 7 :37-39).
3. A firm keeps the same closure for two decades and keeps producing ground-verified new readings without any import (breaks F3 and F4, Fig 7 :36, Fig 8 :32).
4. A capability's valence is invariant across a documented change of residual (breaks F5, Fig 11 :49-51).
5. A single lever restores both conditions and leaves no categorically different residue (breaks F7, Fig 9 :57).
6. Fig 13's six terms are derived from five of them, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of strategy (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the two conditions separate in every report. A blended "advantage score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat any list of firm attributes as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Use the business literature as a budget filter and as one corroborating witness, not as the verdict. Barney, Rumelt and Teece share an evidence pool (Fig 2 :31, :40).
6. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Do not name which routines a firm should own; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the three essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to firm resources | **Retracted, strain S1** | Only fit by renaming routines as kinds of energy. Re-census: Fig 13 governs the physical substrate, not a firm's Γ |
| Treated Barney 1991 as straightforward corroboration | **Conflict, re-census R1** | Firm-internal stability vs Fig 11 :40. Resolved by mapping "resources" to Γ; see F9. Verdict unchanged |
| Read "firm effects" variance as evidence for the answer | **Retracted as a witness, kept as a filter** | Fig 9 :60; averaged quantities are frame-internal (Fig 1 :27) |
| Planned to name "dynamic capabilities" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Teece's phrase is a business-pool binding, recorded as such |
| Wanted to call Fig 11 :40 a `general` law about all firms | **Narrowed to `specified`** | It is a structural claim; no market measurement pays for the firm-level version here |
| Used Trinh 2019 as firm-level corroboration | **Narrowed to mechanism-shape corroboration** | The study is about individual experts; Fig 4 :20 requires the anchor to be re-named at the new scale |
| F10 row "which routines are the good ones" | **Marked `gap`** | The essay's metamerism rule: an instrument that reads a result *"cannot comment on the source"*; what is owed is a discriminator, not a name |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 11 and Fig 4 are two figures, but both come from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to firm resources), resolved by re-census; S2 (calling a firm's market "the ground" while also treating customer preference as moving), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground is what settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of contact maintenance and reach renewal, each with its own loop and instrument.
2. **What is the anchor?** The market, named in Fig 2 :29. Not consensus, not internal metrics (Fig 1 :27).
3. **Is the answer in the firm alone?** No. Fig 11 :39-40. Capability is agent-and-habitat.
4. **How does quick loss happen?** Channel decay: saturated metrics, pooled readings, lost touch (Fig 10 :24-29); either factor of Fig 7 :37-39 going to zero.
5. **How does long persistence happen?** A chain of differing rooms selected against the surfaced residual (Fig 7 :36), with imports from differing closures moving the wall outward (Fig 6 :23).
6. **Why does the good thing turn bad?** Valence is relative to the residual (Fig 11 :49-51); a catalyst may become spent (Fig 12 :119).
7. **What can be said at the stop?** A shape and two conditions, with falsifiers. Not which routines, not which leader, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **superior performance persists when a firm keeps its channel to a paying ground reachable and keeps moving its reach outward through contact with closures that differ from its own; it is lost quickly when either condition fails, and the capability that once helped can change valence when the residual changes.** The two conditions are kept separate, never averaged. Which specific routines occupy the slots is a `gap`, not a silence: the framework returns a shape, and the instrument that would name the source is not held here. Mode `specified`. No world source was allowed to flip a verdict; the one genuine conflict (Barney) was returned to the census and re-mapped. No unresolved strain remains after re-census.
