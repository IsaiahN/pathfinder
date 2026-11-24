# Figure-grounded audit: BUS-0031, why successful firms struggle with transformative technology

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. None is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*, fetched 2026-11-22: *"the truly testable output would need to be derived from the real architecture or working the formula yourself"*, and LLM output is *"simulacra"*. This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Also `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and all eight essays, fetched 2026-11-22. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) − o′|` per slot `s` (Formula step 1; Symbols table, `R`). Here:

- **b** is the firm's belief about what the market will pay for, formed from its own history and inherited priors.
- **a** is what the firm does: invest, price, acquire, launch, research, hire.
- **Γ(b,a)** is what the firm's library of routines, metrics and assets predicts will happen.
- **o′** is what the market actually returns: demand, price, share, survival.
- **s** is the firm. R is indexed by firm and by time, never averaged into an industry figure.

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."
> Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

The phenomenon to explain is a conjunction, not a level: a slot whose R has stayed small for years (success) is the slot that fails to keep R small when a technology changes what the market pays for. Call the first part `D_s`, the duration of a live low-residual slot, and the second part `Δ_s`, the growth of R after the habitat shift. The question asks why `D_s` and `Δ_s` are positively associated in the observed cases.

State the residual as: *why does a firm that has kept its prediction close to the market's return for years lose that closeness when a new technology changes what the market pays for, while firms with different libraries keep it?* This is an effect description. It names no theory: not "dilemma", not "rigidity", not "myopia", not "dynamic capabilities". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction") before the run: the answer would be a set of conditions whose conjunction keeps R small across a habitat shift, an instrument that discriminates a failure of one condition from a failure of the other, and a declared `gap` for what no available instrument reaches. Until bound, the shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." The same line names candidates directly: a *"measurement, an experiment, a counter, a market, a patient outcome"*. Fig 2 :30 *"you push on it, it is not an anchor"*. Analyst consensus, management opinion and the firm's own revenue metrics move when pushed, so they are instruments at best. Viable anchor: realized market payment and survival, measured per firm and per period.

**A correction made before the census.** An early reading treated the transformative technology as a change in the ground. That is a strain: the ground does not move when frames think (Fig 2 :29), and Fig 10 :24 says *"the ground does not decay, the channel does"*. Re-census: what changes is the **habitat**, the actors, conditions and relations that decide what the market pays for; the ground, whether the market pays and the firm survives, does not. Fig 11 :73 "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." This re-census is kept visible in section 6, S1.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: firm Γ, action a, market return o′, indexed by slot s and ordered by time t. It is a sequence rather than a set, so it carries an **ordered** bond (`→`, sequence: Fig 12 :72 *"A then B; B needs A to have happened"*). The word "transform" is a **threshold** relation, not a symmetric join: Fig 12 :87 *"a threshold relation between two quantities"*. "Successful" is likewise a comparison against competitors, not an absolute.
- **Symmetry.** The relation is asymmetric in time: a lost low-residual state is not recovered by reversing the action. The technology and the incumbent are not interchangeable (Fig 12 :74 *"swap them. Does it become a different thing? Yes."*).
- **Scale.** Three scales are in view: the single firm's step loop (Fig 4 one-agent panel), the population of firms with *"something that ranks what they produce"* (Fig 4 :5), and the time channel across decades. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and the transform is lossy, so the round-trip gap `R_T` must be measured, not assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The firm loop** (one agent, one scale) | decision makers, routines, the firm's Γ | actions and residual reduction | yes: realized market return on the action | admitted |
| **D2 The industry habitat** (population) | incumbent firms, entrants, customers, suppliers, regulators, the new technology | survival, share, profit | yes: customer payment, the market as ground (Fig 2 :29); habitat actors update (Fig 11 :73) | admitted |
| **D3 The capability and memory library** (composition inside the firm) | atoms: tacit know-how, routines, assets, metrics; bonds between them | reach (what can be composed and done), `|φ|` cost | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The temporal / instrument channel** (across decades) | the firm's instruments, metrics, percepts, customer-research routines | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "Entrepreneurial spirit" as a free-floating property** | the exceptional leader | talent | **no** anchor independent of the market's verdict | not a domain yet |
| **X2 "Industry dynamism" as sole cause** | the industry | structural rents | measurable, but this is already the habitat of D2, and Fig 11 :46 names conditions (season, terrain) as habitat elements | absorbed into D2, not separate |
| **X3 "Managerial myopia" as a free-floating trait** | the decision maker | attention | no anchor outside the channel of D4 | absorbed into D4 |

X1 and X3 fail the anchor test and are excluded before any figure line is applied to them. That is a structural exclusion, not a claim that leaders never matter.

### 1.3 Partition or union

D1 and D3 overlap: Γ is inside the firm loop, so their overlap is a compound with its own loop. D2 and D4 overlap: contact with the ground is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
> Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The unbundled conditions are:

- **C1:** the firm's channel to what the market pays stays reachable (a contact / ground condition, D2 and D4).
- **C2:** the firm's reach is renewed by contact with a closure that differs from its own (a composition condition, D1 and D3).
- **C3:** when the habitat's affordances change, the valence of the firm's held capabilities can flip, and the instrument that would detect the new affordance sits at the middle link (D2, D3, D4).

A firm failing only C1 and a firm failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order

> Fig 3 :20 "The chain is ordered by dependency, not by importance."
> Fig 3 :24 "Why the middle link is where chains usually break."
> Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

Order for this question: 1 perception (can the firm read the changed market?) → 2 vocabulary (does Γ have terms for what the new situation affords?) → 3 objective (can it say what progress would count as there?) → 4 planning → 5 learn and carry. The middle link, having terms for what a changed situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :111 *"A vocabulary without bonds can name a state and cannot name a route to one"* and :112 *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* Most diagnosis effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not why it grows |
| 2 The Ground | market is a named anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order (C3) |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; `R_T` | governs scale transfer, leader-to-firm analogue |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a new capability can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs renewal of reach (C2) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs persistence as a sequence of handoffs |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick loss after a habitat shift (C1) |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1, D2 and the technology-as-actor |
| 12 The Bond | catalyst, cycle, isomer; arrangement is the substance | governs why a strength becomes a rigidity |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop only (see strain S2) |

**Strain test applied during this census.** An early attempt to apply Fig 13's six physical terms directly to "firm resources" only fit by calling a routine a kind of energy and a capability a kind of gradient. That is a strain, so Fig 13 does **not** govern firm capabilities. Re-census sends Fig 13 to the honest-stop role only (section 6, S2). A second strain, the technology as a change in the ground, was resolved in section 0 (S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about firms, `grounded` only if settled by a market measurement. None is `grounded`.

### F1 : Endurance is a property of firm-and-habitat, not of the firm alone

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat relations vs membrane across scales).**

> Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."
> Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
> Fig 4 :20 "Only the actors, the currency and the anchor change."

A firm's advantage is not located in the firm considered alone. The habit of answering "why did it fail?" with a list of firm attributes (talent, brand, culture, process) is an agent-only improvement that may not change contact. When the habitat changes, the same attributes can be held while the outcome flips. This is the figure-grounded reason the question cannot be answered by a better leader story.

**Refuter:** a controlled comparison in which a firm's low residual is unchanged across a habitat substitution that demonstrably removes or reverses the market's payment for what the firm does. If it survives, F1 is false.

**World bearing (secondary only):** Bower and Christensen write that *"customers wield extraordinary power in directing a company's investments"* (1995, full text reproduced), which is a habitat-facing description of the same relation; Rumelt's *"very large stable business-unit effects"* (1991, RePEc abstract) supports per-slot indexing but is a variance decomposition, hence a budget filter and not a witness (Fig 9 :60).

### F2 : The transformative technology changes the habitat, not the ground

**Mode: `general` structurally, `specified` for firms. Domains D2, D4. Status: triangulated (Fig 11 and Fig 2, low overlap: habitat update vs anchor invariance).**

> Fig 11 :73 "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."
> Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
> Fig 11 :52 "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect"

A new technology is a new actor in the habitat, with a cascade that reaches the firm's residual several steps out. Customers do not stop being the thing that pays; they shift what they pay for. The firm's old routine was a good answer to the old residual and is not a bad thing in itself: its valence changed with the residual. Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." This is why "we did nothing wrong" and "the firm failed" can both be true, as the individual-level literature reports (Trinh 2019, *Frontiers in Psychology*).

**Refuter:** an industry transformation in which the total market payment collapses to zero rather than shifting to a new basis, with the firm's low residual intact. That would be ground loss, not habitat change, and F2's mechanism would not be the one at work.

### F3 : Quick loss is a failure of the channel, not a decay of the ground

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> Fig 10 :24 "the ground does not decay, the channel does"
> Fig 10 :26 "saturated metrics, pooled readings"
> Fig 10 :28 "you have lost touch"
> Fig 7 :37 "Progress per handoff has two factors. Zero either and the chain runs in place:"
> Fig 7 :38 "the bracket's fidelity across the handoff"
> Fig 7 :39 "the ground's pressure on the room"

A firm loses its low residual when its contact with what pays degrades while the market keeps paying someone else. The named decay modes are stale percepts, dropped transients, saturated metrics and pooled readings. "Pooled readings" is the firm-level version of aggregating across slots (Fig 1 :22): the signal that says where to look disappears into an average, here an average over the incumbent's most profitable customers. Bower and Christensen's description of incumbents making *"the right decisions for circumstances that are about to become history"* (1995, full-text extract) is the world-level name for the same channel failure.

**Refuter:** a documented case in which a firm loses its low residual while bracket fidelity and ground pressure are both independently measured as high and are not declining. If both stay high, F3's mechanism is not the cause.

### F4 : A successful firm keeps handing itself the same room

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 7 and Fig 2, low overlap: selection between rooms vs anchor triangulation).**

> Fig 7 :12 "same closure, handed along;"
> Fig 7 :13 "agreement compounds, evidence does not"
> Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."
> Fig 7 :42 "The chain approaches the truth only as the world runs out of ways to refuse it. Which means the next room you book is the direction you travel, and booking a room like the last one is how a chain stops travelling at all."
> Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."

A firm that keeps appointing the same kind of leader, running the same review and rewarding the same routine is handing itself the same room. Agreement inside it compounds while evidence does not. Success makes this worse because the room is selected by its past victories: Fig 10 :71 "The room composition is a function of the question." When the question moves and the room does not, the correlation between past success and present failure is a symptom, not a cause (Fig 10 :72).

**Refuter:** a firm that keeps the same closure across two decades and yet keeps producing new, ground-verified readings of the market without importing any new atom. Under Fig 7 :36 that should be impossible; if observed, F4 is wrong.

### F5 : Renewal of reach requires contact with a differing closure, which the entrant supplies

**Mode: `specified` for firms, `general` for idempotence. Domain D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, three distinct roles).**

> Fig 6 :21 "MINT composes inside the closure and can never add an atom."
> Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
> Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."
> Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists."
> Fig 8 :45 "Two frames together reach what neither reaches alone."

A firm can keep optimising inside its library forever and never add an atom. When the habitat shifts, the atom the new market pays for is typically already held by an entrant whose closure differs. For the incumbent it is an import, gated by provenance and a shadow test (Fig 6 :12-13); the import adds an atom to the firm's reach, not to the world (Fig 6 :25). This is why the technology is often invented inside the incumbent, as the Xerox PARC and Kodak cases report (Robson, BBC Worklife 2020), yet commercialised elsewhere: the atom was reachable in a different room.

**Refuter:** a firm that renews its reach solely by composing inside its own closure, with no new atom from a differing closure, and still passes the ground test across a change of habitat. That breaks idempotence and F5 with it.

### F6 : The strength that produced the success changes valence when the residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
> Fig 11 :51 "No standing list of good actors survives a change of residual."
> Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
> Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

This is the "success trap", "competency trap" and "core rigidity" stated in effect terms. A routine is a catalyst if it regenerates across uses and a spent part if it does not, and nothing in the routine's description records which. When the residual changes, a former benefactor becomes a malfactor without anything about the routine changing. The business pool names this repeatedly: Levitt and March 1988 on the *"competency trap"*, March 1991 on exploitation that is *"self-destructive in the long run"*, Wang 2015 on *"success reinforces exploitation of existing competences and crowds out exploration"*, and Sydow, Schreyögg and Koch 2020 on lock-in where *"a lock-in and its accompanying path-dependent capabilities can be fatal"*. These are one evidence pool, not four witnesses (Fig 2 :31). The ecology source supplies a genuinely separate witness: MathisonSlee et al. 2022 describe a *"rigidity trap"* where a system becomes *"highly connected, rigid, and inflexible"* and *"System capacity for novelty is diminished"*.

**Refuter:** a capability whose measured valence is invariant across a documented change of the firm's residual. If no such change of valence can be found anywhere, F6 weakens to `general`.

### F7 : The break is at the middle link: no terms for what the new situation affords

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111-115 as a corroborating line from the same framework, so one witness).**

> Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
> Fig 3 :29 "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."
> Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one."

The usual failure is not that the firm cannot plan. It is that its Γ has no terms for what the transformed situation affords and it cannot say what would count as progress there. More planning budget lands above the break, where the measurements already exist (Fig 3 :29-30). *Decoding Tacit Knowledge* puts the transfer limit in effect terms: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."*

**Refuter:** a documented firm whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F8 : Never explain this by averaging across firms or by frame-internal success metrics

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> Fig 1 :23 "The ground enters as the only metric."
> Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."
> Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Revenue from the current product, customer satisfaction among current customers, and analyst ratings are quantities the firm's own frame helps produce. A variance decomposition that reports "firm effects explain X percent" scores the frame with a quantity the frame produces. It is a filter for where to look, not a witness. The specified consequence: any answer to BUS-0031 that is an average across firms has already thrown away the only signal that says which firm is losing contact and where.

**Refuter:** an averaged industry-level statistic that predicts, prospectively and per firm, which named slot will lose its low residual next. If one exists, F8's methodological consequence is false.

### F9 : The question is a union; unbundle before choosing a lever

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 plus the Library of Babel essay, but the essay is framework-internal, so the external witness count is one).**

Fig 9 :54, :55 and :57 are the governing lines (quoted in section 1.3). The three conditions have different instruments:

- A **C1** failure shows up as saturated metrics, pooled readings and a bracket that no longer matches the residual (Fig 10 :26, Fig 7 :38).
- A **C2** failure shows up as a closure that keeps handing itself the same room, no import, and a reach that stops moving while the library grows (Fig 6 :21, Fig 7 :12).
- A **C3** failure shows up at the middle link: terms and objectives missing for the new affordance (Fig 3 :24-27).

A single lever, for example "invest more in the core business" or "become more ambidextrous", clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55). F9 is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores all three conditions in all failure types with no categorically different residue left over. That would collapse the union into a partition.

### F10 : Which technology and which routines win is a `gap`

**Mode: `gap`, stated plainly. Status: figure-governed.**

> Fig 9 :32 "you get a kind of thing, never the answer itself"
> Fig 8 :39 "So a search that finds nothing is never a proof of absence."
> Fig 13 :134 "Unreachable is a verdict here, not a silence,"

No figure line names the winning technology or the winning routine after a genuine re-census. The canonical README says the framework reports *"what a missing thing would have to look like (a shape, not a name)"*. Fig 8 :40-41 separates *"underivable-in-principle"* from *"unreachable-at-this-budget"*: what is missing here is a source-discriminating instrument, not more search inside the same library. The honest answer is a shape and its falsifiers, not a forecast.

### F11 : The figures give a mechanism shape, not a causal estimate

**Mode: `gap` on causality, `specified` on mechanism. Status: figure-governed.**

The observed association between past success and later failure has two readings: success **caused** the failure (the routines of success became rigidities), or success **selected** firms that were late in their habitat cycle and therefore exposed to any change. The figures license the first as a mechanism shape (F3 to F6), but no figure line discriminates it from selection. Fig 9 :30 *"your words are borrowed too, so describe the effect"* and :31 *"rather than the cause"* forbid asserting the causal reading from this run. *The Hard Problem is About Source* gives the reason: an instrument that reads a result *"cannot comment on the source"*, and what is owed is a discriminator, not a name. This gap is declared, not hidden, and it is one of the things an outside expert is asked to check.

**Refuter:** a prospective, per-firm study that holds habitat exposure constant and still finds the success-to-failure association, or one that removes exposure and finds the association gone. Either result discriminates mechanism from selection and closes this gap.

### F12 : What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per firm, never an industry average | general | Fig 1 :19, :22 | figure-derived |
| The market is the anchor, not internal agreement | general | Fig 2 :29, :35 | figure-derived |
| Endurance is firm-and-habitat, not firm alone | specified | Fig 11 :39, :40 | triangulated F1 |
| A technology transforms the habitat, not the ground | general / specified | Fig 11 :73; Fig 2 :29 | triangulated F2 |
| Quick loss is channel failure, not ground decay | specified | Fig 10 :24, :26; Fig 7 :37-39 | triangulated F3 |
| Repeated closure stops progress | specified | Fig 7 :12, :13, :36 | triangulated F4 |
| Renewal needs import from a differing closure | specified | Fig 6 :21, :23; Fig 8 :32 | triangulated F5 |
| A strength changes valence when the residual changes | specified | Fig 11 :50, :51; Fig 12 :119 | triangulated F6 |
| The break is usually at vocabulary / objective | specified | Fig 3 :19, :24, :29 | single-source F7 |
| Averages are filters, never witnesses for this verdict | general | Fig 1 :23, :27; Fig 9 :60 | triangulated F8 |
| The question is a union of three conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| Which technology or routine wins | not stated | none | `gap` F10 |
| Success causes failure rather than selects for it | not stated | none | `gap` F11 |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A firm's low residual is unchanged across a habitat substitution that removes the market's payment for what it does (breaks F1, Fig 11 :39-40).
2. An industry transformation in which total payment collapses to zero rather than shifting basis, with the firm's low residual intact (breaks F2, Fig 11 :73).
3. A firm loses its low residual while bracket fidelity and ground pressure both measure high and non-declining (breaks F3, Fig 7 :37-39).
4. A firm keeps the same closure for two decades and keeps producing ground-verified new readings without any import (breaks F4 and F5, Fig 7 :36, Fig 8 :32).
5. A capability's valence is invariant across a documented change of residual (breaks F6, Fig 11 :50-51).
6. A firm with perception, vocabulary and objective all measuring as working fails at planning (breaks F7, Fig 3 :24-27).
7. A single lever restores all three conditions in every failure type and leaves no categorically different residue (breaks F9, Fig 9 :57).
8. A prospective study that fixes habitat exposure removes or confirms the success-to-failure association (breaks or closes F11).
9. Fig 13's six terms are derived from five, or Fig 8 :32's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of disruption (Fig 10 :52 *"Bring a characterised residual, never the source"*).
2. Keep C1, C2 and C3 separate in every report. A blended "innovation score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask at each handoff which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat any list of firm attributes as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Use the disruption and decline literature as a budget filter and as one corroborating witness, not as the verdict. Bower, Christensen, March, Levitt, Rumelt, Wang, D'Aveni, Cameron and Sydow largely share an evidence pool (Fig 2 :31, :40). Ecology and cognition are lower-overlap witnesses for the mechanism shape.
6. Offer the formula as a method after a verdict is recorded (Fig 4 :22 *"Only methods cross up. Only head starts come down."*). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Do not name which technology a firm should bet on; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction / confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and all eight essays by Isaiah N, fetched 2026-11-22 (list in `05_what_shape_means.md`).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also gives the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs F10 and F11.
- *The Recursive Self-Improvement Trap* confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*
- *They're Scanning Books When They Should Be Studying Nature* confirms that a *"minimum viable set of six terms is a human's careful guess at reality's compression axes"*, which is why Fig 13 is not applied to a firm's Γ.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Treat the transformative technology as a change in the ground | **Retracted, strain S1** | Fig 2 :29 and Fig 11 :73; the habitat updates, the ground does not |
| Apply Fig 13's six-term set to firm resources | **Retracted, strain S2** | Only fit by renaming routines as kinds of energy; Fig 13 governs the physical substrate, not Γ |
| Call customers "the ground" | **Narrowed** | Customers are habitat actors; realized payment and survival are the ground (Fig 2 :29, Fig 11 :73) |
| Read disruption theory as straightforward corroboration | **Narrowed to one witness** | Shared evidence pool (Fig 2 :31, :40) |
| Read Rumelt's firm effects as evidence for the answer | **Retracted as witness, kept as filter** | Fig 9 :60; an averaged quantity is frame-internal (Fig 1 :27) |
| Plan to name "dynamic capabilities" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer; Teece's phrase is a business-pool binding |
| Read "success causes failure" as established | **Marked `gap` F11** | Effect descriptions cannot name a cause (Fig 9 :30-31; *The Hard Problem is About Source*) |
| Which technology wins | **Marked `gap` F10** | No figure line governs it after re-census; a discriminator is owed, not a forecast |
| F1 called "decisive" in an early draft | **Downgraded to triangulated** | Fig 11 and Fig 4 are two figures from one framework; low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (technology as ground change) and S2 (Fig 13 applied to firm resources), both resolved by re-census. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of contact maintenance, reach renewal and middle-link vocabulary, each with its own loop and instrument.
2. **What is the anchor?** Realized market payment and survival, named in Fig 2 :29. Not consensus, not internal metrics (Fig 1 :27).
3. **What changed when the technology arrived?** The habitat, not the ground (Fig 11 :73). New actors, new relations, new affordances, with a cascade (Fig 11 :52).
4. **Why does the good thing turn bad?** Valence is relative to the residual (Fig 11 :50-51); a catalyst may become spent (Fig 12 :119).
5. **How is contact lost?** Channel decay: saturated metrics, pooled readings, lost touch (Fig 10 :24-28); either factor of Fig 7 :37-39 going to zero.
6. **How does progress stop?** A chain of identical rooms; agreement compounds, evidence does not (Fig 7 :12, :13, :36).
7. **Why can the firm not just search harder?** Closure is idempotent (Fig 8 :32); only an import from a differing closure moves the wall (Fig 6 :23).
8. **What can be said at the stop?** Three conditions, their instruments and their falsifiers, plus two declared gaps. Not which technology wins, not a causal estimate, not a `grounded` answer. Fig 13 :134 *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a firm keeps its low residual across a technology shift when its channel to what the market pays stays reachable, its reach is renewed by contact with a closure that differs from its own, and its vocabulary can name what the changed situation affords and what would count as progress there; quick loss follows the failure of any one of these, and the capability that once helped can change valence when the residual changes.** The three conditions are kept separate, never averaged. Which technology wins and whether success caused the failure rather than selected for it are declared `gap`s, not silences. Mode `specified` on the mechanism, `general` on the structural shape. No world source was allowed to flip a verdict; the business literature was returned to the census and re-mapped where it strained. No unresolved strain remains after re-census.
