# Figure-grounded audit: BUS-0067, when network growth helps a platform and when it entrenches it

**Mode of this document: `specified` on the substantive claims, `general` on the structural shape, `gap` on the numerical threshold. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap* (opened 2026-11-22): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on. See `05_what_shape_means.md` §6.

**Sources for the figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Also `THE_FORMULA.md`, `FIGURES_README_canonical.md`, and the metalaws note. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) − o′|` per slot `s` (Formula step 1; Symbols table, `R`). This question has **two families of slot**, which is the first structural fact about it:

- **User slots.** `b` is a user's belief about what the platform will offer, formed from past use and inherited priors. `a` is join, participate, contribute, or stay. `Γ(b,a)` is what the user's model of the platform predicts they will get. `o′` is what they actually get: a match, a sale, an answer, an audience, or nothing. `s` is the user. The question asks what happens to this `R` as `N`, the number of other participants, grows.
- **Challenger slots.** `b` is an entrant's belief about whether entry can pay. `a` is enter, invest, build a rival, or multi-home. `Γ(b,a)` is the predicted viability. `o′` is what the market actually returns: survival, share, tipping to one standard. `s` is the platform. The question asks what happens to the barrier as the incumbent's `N` grows.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

So a pooled statistic such as "the average network effect" or "platform value ∝ N²" has already thrown away the only signal the question asks about: which users gain, which lose, and which challengers are kept out or let in. The effect is per slot (Fig 1 :19).

**State the residual as:** *for which users and under which habitat conditions does adding a participant reduce the gap between what they expect and what they get, and under which market conditions does a growing installed base raise the gap between what a challenger expects and what the market pays?* This is an effect description. It names no theory, no "network effect", no "moat", no "two-sided market". Those are candidate names, withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (i) two condition sets, one for user usefulness and one for challenger difficulty, each with its own anchor, and (ii) an instrument that discriminates a failure of one from a failure of the other. Until bound, this shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidate: *"A measurement, an experiment, a counter, a market, a patient outcome."* For both halves the anchor is the market, read two different ways: realized user value (usage, willingness to pay, retention) for the usefulness half, and realized entry and survival outcomes for the challenge half. Platform sentiment, analyst consensus, and the platform's own engagement metrics move when pushed; they are instruments at best (Fig 2 :30: *"you push on it, it is not an anchor"*). Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** Each `R` is a three-place relation: platform Γ, action `a`, observed outcome `o′`, indexed by slot `s` and ordered by time `t`. Growth precedes the value change, so the binding is **ordered** (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72). "More useful" and "harder to challenge" are **comparisons** (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87), not absolute quantities. The relation is not symmetric: user and platform are not interchangeable.
- **Symmetry.** Adding a participant is not reversible. A network that grew from 100 to 1,000 is not the network that grew from 1,000 to 100, even at the same `N`, because the arrangement and the history differ (Fig 12 :73-74, ordered bonds). The marginal value of a user depends on the current state, which is the signature of a threshold, not a symmetric sum (Fig 12 :89).
- **Scale.** Three scales are in view: the single user's loop, the population of users that forms the network, and the population of platforms that forms the market. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). Value does not aggregate from users to platform defensibility by simple summation; the transform is lossy, so the round-trip gap `R_T` must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 User-value habitat** (the usefulness half) | users, content, complementors, the platform's Γ | residual reduction per user: matches, answers, audience, value realised | yes: realized user value, a market (willingness to pay, retention), Fig 2 :29 | admitted |
| **D2 Competitive field** (the challenge half) | incumbent platform, challengers, entrants, multi-homing users | reach, closure height, installed base | yes: entry and survival or tipping, read at the market, Fig 2 :29 | admitted |
| **D3 Composition of the effect** (the mechanism compound) | the network relation, catalysts, cycles, settled molecules | contact and closure; the sign of a feedback loop | yes: settlement against the ground, Fig 5 :32 *"then check it against the ground, then carry it up"* | admitted as a compound with D1 and D2 |
| **D4 The channel** (measurement and time) | the platform's instruments, metrics, percepts | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "Network effects" as a free-floating property of `N`** | size | magnitude | **no** anchor independent of the market's verdict; a label, not a mechanism | not a domain yet |
| **X2 "Platform" as a legal or brand category** | the firm | classification | already the habitat of D2 plus the Γ of D1 | absorbed, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that size never matters. Fig 2 :34: *"If it moves when you push on it, it is not an anchor."* A size number that only moves when the platform's own reporting moves is an instrument, not a ground.

### 1.3 Partition or union

D1 and D3 overlap: the composition of the effect lives inside the user-value habitat. D2 and D4 overlap: the challenge field is reached through a channel that can decay. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **U**, user usefulness (a maintained channel to a paying user ground, with positive valence for the participants who contribute), and **H**, incumbent hardness to challenge (a closure that a challenger cannot reach without a differing frame, carried by a head start and a closing positive loop). A platform failing only U and a platform failing only H are not different degrees of one failure; they need different instruments. This is the figure-grounded reason the question's two "when" clauses must be answered separately and never averaged. An open interoperable protocol can be highly useful and easy to challenge; a locked-in incumbent can be hard to challenge and no longer useful. The *Library of Babel* essay states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can users and entrants read the outcome?) → 2 vocabulary (does Γ have terms for what a participant affords the others?) → 3 objective (can the platform say what progress in usefulness is, in its own terms?) → 4 planning → 5 learn and carry. The middle link, having terms for what a participant affords and saying what would count as progress, is the one with no instrument in most platform metrics. Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most measurement effort lands above the break (Fig 3 :29-30): platforms count users (perception) and plan growth, but rarely measure the per-slot residual or the objective.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not the direction of the effect |
| 2 The Ground | market is a named anchor; independence vs common pool; correlation valence | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnostic order |
| 4 The Membrane | head start vs method; lossy transform; R_T | governs what size transfers and what does not |
| 5 Mint Pipeline | three guards as a product; settlement; "nothing new here" | governs whether a claimed effect can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs the hardness half (H) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs entrenchment vs progress |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the honest stop |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick loss of usefulness |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for the usefulness half (U) |
| 12 The Bond | catalyst, cycle, isomer, functional group; arrangement is substance | governs feedback sign and platform types |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest-stop role only (strain S1, section 6) |
| Operators table | ⋛ threshold, → sequence, ¬ refusal | governs the type of "more" and "harder" |
| Symbols table | R is per-slot; the ground is the anchor | names the quantities |

**Strain test applied during this census.** An early attempt to apply Fig 13's six physical terms directly to platform economics only fit by calling a user network a "network" in the substrate sense, a complementor a "gradient", and engagement "energy". That is a strain, so Fig 13 does **not** govern the mechanism here. Re-census sends Fig 13 to the honest-stop role only, exactly as in the BUS-0001 pilot (strain S1, section 6). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about platforms, `grounded` only if settled by measurement. None is `grounded`.

### F1: Usefulness is a property of the platform-and-habitat, not of the platform alone

**Mode: `specified`. Domain D1. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat valence vs membrane/kernel).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

A platform's usefulness cannot be located in the platform considered alone. The users, content, and complementors are part of the habitat that makes the platform capable. This is the figure-grounded form of the direct and indirect network-externality literature: the value of a product rises with the number of other users, which is a statement about the relation, not the artefact. The encyclopedia review *Network Externalities* defines the case: *"A network exists when a product's value to the user increases as the number of users of the product grows. Each new user of the product derives private benefits, but also confers external benefits (network externalities) on existing users."* That is a world corroboration of the mechanism shape, not a verdict (business/economics pool).

**Refuter:** a platform whose per-user value keeps rising with `N` across a habitat substitution that demonstrably removes the added participants' contribution to contact (for example, users still receive the same value when the other users are replaced by a synthetic simulation they cannot interact with). Under Fig 11 :40 that should not happen; if it does, F1 is false. Fig 11 :71-72 gives the figure's own form: *"When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom."*

### F2: More users change valence with the residual; growth can lower usefulness

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 11 and Fig 1, low overlap: actor valence vs per-slot indexing).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

This is the figure-grounded answer to "when does growth stop helping". A new participant is a benefactor to the match-finding residual (more counterparties, more content) and a malfactor to the attention or coordination residual (congestion, noise, moderation load). Nothing about the participant records which they are; valence is a relation to a residual, not a property of size. So the same `N` that improves one slot degrades another, and a mean over users hides both. The world corroborates at a different stratum: the Allee-effect literature describes *"positive density dependence, or the positive correlation between population density and individual fitness"* at low density, while *"when population density reaches a high number, negative density dependence often offsets the component Allee effects through resource competition, thus erasing the demographic Allee effect"* (Wikipedia *Allee effect*, opened 2026-11-22, ecology, genuinely low overlap). That is the same shape: the sign of density dependence changes with the regime.

**Refuter:** a measured platform on which every added user strictly increases every existing user's value at all observed `N`, with no offsetting cost in any residual. That would make valence a property of size and falsify F2. A weaker but still decisive version: a participating cohort whose measured valence is invariant across a documented change of the platform's residual.

### F3: The positive feedback is a cycle whose sign decides whether it closes

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 12 and the low-overlap contagion/ecology literature; two figures with low topical overlap plus a world mechanism shape).**

> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

More users produce more value, which attracts more users. That is a cycle, not a chain (Fig 12 :121). Whether it closes is decided by the sign, and the sign is not fixed by the vocabulary: a positive loop tips, a negative loop unwinds. A participant whose contribution regenerates is a catalyst; one whose contribution is exhausted after one use is a spent part, and nothing in the user count records which (Fig 12 :119). This is where critical mass and tipping live.

The world corroborates the threshold structure from three low-overlap fields. Centola and Macy 2007 (*American Journal of Sociology*, quotes read via an annotated reproduction, 2026-11-22): *"for complex contagions to spread, multiple sources of activation are required"* (p.707), and *"Network topologies that make it easy for everyone to know about something do not necessarily make it likely that people will change their behavior."* (p.728). That is the wide-bridge / threshold condition, the social-science form of "the sign decides whether it closes". The *Allee effect* source supplies a strong-threshold version: a *"strong Allee effect is a demographic Allee effect with a critical population size or density"*, under which *"the population growth rate becomes negative"*. The network-science source *Preferential attachment* supplies the cumulative-advantage form: *"some quantity, typically some form of wealth or credit, is distributed among a number of individuals or objects according to how much they already have, so that those who are already wealthy receive more than those who are not."* These are one mechanism shape observed in sociology, ecology, and network science, three genuinely low-overlap fields, but none is a platform measurement.

**Refuter:** a network in which adding users never changes the adoption rate of further users even above the empirically observed critical mass (breaks the cycle, Fig 12 :121), or a demonstrably positive loop that fails to close while the ground pays for the value. The Allee analogy would also fail if a platform showed no threshold at all.

### F4: Hardness to challenge is a wall that only an import from a differing closure moves

**Mode: `specified`. Domain D2. Status: triangulated (Fig 6 and Fig 8, distinct roles: wall operator vs idempotence and provenance).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."** (Fig 8 :50-52)

This is the figure-grounded reading of "harder to challenge". An incumbent's installed base, complementor set, and data form a closure. A challenger optimizing inside its own library can never add an atom (Fig 6 :21); the wall moves only on contact with a frame whose closure differs (Fig 6 :23): an adjacent market, a new technology, a different user segment, an interoperability mandate. The import needs a source gate and a shadow test (Fig 8 :50-52), so a claim that data or an installed base is automatically a moat is provenance-bearing, not free. The world corroborates from the platform-strategy pool. Arthur 1989 (*Economic Journal*, abstract opened via IDEAS/RePEc, 2026-11-22) reports that *"the economy, over time, can become locked-in, by 'random' historical events, to a technological path that is not necessarily efficient, not possible to predict from usual knowledge of supply and demand functions, and not easy to change by standard tax or subsidy policies"*; the encyclopedia review adds that competition *"may 'tip' in the direction of a standard that gains an early advantage, even if that standard is objectively inferior"* and quotes Katz and Shapiro on firms *"bidding for future monopoly profits"*. Rochet and Tirole 2003 (*Journal of the European Economic Association*, summary and quotes opened via a public wiki, 2026-11-22) show that platforms *"must 'get both sides of the market on board,'"* and *"must choose a price structure and not only a price level for their service"*; this is the two-sided form of the wall. The economics sources share a pool and count as one witness; the figures decide.

**Refuter:** a challenger that displaces a large incumbent purely by internal composition, with no new atom entering from a differing closure and no import with provenance and a shadow test (breaks Fig 6 :21, :23 and Fig 8 :32). Also: a challenger that wins with zero cross-side complementor participation where the incumbent's advantage was claimed to be precisely that participation.

### F5: Size is a head start, not a generator; the transform is lossy

**Mode: `specified` with a `general` structural core. Domains D2, D4. Status: triangulated (Fig 4 and Fig 10, low overlap: membrane vs channel).**

> **"a head start, never a recording"** (Fig 4 :11)
> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)
> **"The transform between scales loses information, and that is the point."** (Fig 4 :27)
> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)
> **"saturated metrics, pooled readings"** (Fig 10 :26)

A large network gives a new participant a head start: *"it makes the next agent's search cheaper"* (Fig 4 :12). It does not follow that the platform has become a generator of new value, or that the head start transfers to a new context. The transform is lossy, so the round trip must be measured (Fig 4 :30). In platform terms, an installed base and a data corpus lower a user's search cost and an entrant's copy cost, but copying the size (a recording) is not importing the method. The channel by which the platform reads its users can also decay: *"the ground does not decay, the channel does"* (Fig 10 :24), through *"saturated metrics, pooled readings"*. Growth then produces a better-looking dashboard and a worse ground contact at the same time.

**Refuter:** a platform whose advantage survives a habitat substitution that removes the head start while its method is held constant, or a head start alone that produces new ground-verified value with no method crossing the membrane (breaks Fig 4 :22 and :30).

### F6: Entrenchment can be a chain of mirrors, not progress

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 7 and Fig 6, low overlap: room selection vs closure wall).**

> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37) **"the bracket's fidelity across the handoff"** (Fig 7 :38) **"the ground's pressure on the room"** (Fig 7 :39)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)

A platform that keeps handing itself the same kind of user, review, and metric is running a chain of mirrors. Agreement inside it compounds while evidence does not (Fig 7 :12-13). Entrenchment can therefore grow even while ground contact worsens: preferential attachment (the network-science source above) increases the incumbent's degree and thus its visibility, without requiring any new ground payment. By contrast, a challenger that enters a *differing room selected against the residual the incumbent surfaced* can make progress, provided both factors of Fig 7 :37-39 are non-zero: the bracket must still match the residual and the ground must still press the room.

**Refuter:** a platform that keeps the same closure across two observed periods and still produces new ground-verified readings of user value without importing any new atom (breaks Fig 7 :36), or a challenger with independently measured low bracket fidelity and low ground pressure that nevertheless displaces the incumbent.

### F7: The question is a union; usefulness and hardness come apart

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the two-sided-market literature, but the literature is framework-external and one witness).**

The governing lines are Fig 9 :54, :55 and :57 (quoted in section 1.3). Two conditions with different readings of the market anchor:

- A **U failure** shows up as saturated metrics, pooled readings, a bracket that no longer matches the per-user residual (Fig 10 :26, Fig 7 :38), and valence that has flipped so contributors become a cost (Fig 11 :49-51).
- An **H failure** shows up as a closure that keeps handing itself the same room, no import from a differing closure, and a wall that stops moving while the user count keeps growing (Fig 6 :21, Fig 7 :12, Fig 8 :32).

A single lever, such as "add more users" or " subsidise one side", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). Rochet and Tirole's result that price structure is non-neutral corroborates that the two sides interact, but the framework's union claim is about two different anchors, not about price. The *Library of Babel* passage on bundled problems is the framework-internal corroboration.

**Refuter:** a single network-size lever that increases user usefulness and incumbent entrenchment across all observed regimes with no categorically different residue left over. That would collapse the union into a partition and falsify F7.

### F8: A size correlation cannot choose the arrow

**Mode: `general` with a `specified` method consequence. Domains all. Status: triangulated (Fig 2 and Fig 12, low overlap: anchor/instrument rules vs bond type).**

> **"Correlation has valence."** (Fig 2 :39)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"a threshold relation between two quantities"** (Fig 12 :87)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

"More users" and "more value" are both quantities, but a correlation between them is symmetric while the claim "growth makes the platform more useful" is ordered (Fig 12 :87, Operators table on `+` versus `→`/`⇒`). A pooled association cannot tell whether users joined because the platform was already valuable or the platform became valuable because users joined. The network-effects literature contains exactly this dispute: the encyclopedia review records Liebowitz and Margolis's distinction between network effects, where *"the net value of an action . . . is affected by the number of agents taking equivalent actions"*, and network externalities proper, and their criticism that *"real indirect network externalities are of limited theoretical importance and have not been established empirically"* and that models claiming lock-in assume *"inexhaustible scale economies"* while *"the marginal gains of network size are often exhausted at sizes above a critical mass that is small relative to the total market"*. That is a corroboration of the need for a ground reading, not a verdict against network effects.

**Refuter:** an identification that exogenously varies `N` (a field experiment, a natural experiment, or an instrument with a declared source gate and shadow test) and shows per-slot user value moving causally; or a source with a genuinely different evidence pool showing that the `N`-value association is fully accounted for by reverse causation. Until then the correlation is a filter for the budget, not a witness (Fig 9 :60).

### F9: The numerical threshold is a `gap`, reported as unreachable rather than silence

**Mode: `general` on the limit. Status: figure-governed.**

No figure line returns a critical mass, a tipping point, an elasticity, or a network-size number at which usefulness turns down or the wall becomes unclimbable. The framework returns the conditions (cycle sign, closure, head start, valence, differing rooms, union) and a refuter, not the number.

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)
> **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."** (Fig 6 :34-35)

This is the `unreachable-at-this-budget` kind of gap, not `underivable-in-principle`: a market measurement could settle it (Fig 8 :40-43). Importing a number against a budget limit would add an atom that was not needed and cost more than starting from primitives (Fig 6 :24). What is owed is a source-discriminating instrument, characterised in effect terms: an instrument that reads whether a marginal user is a catalyst or a spent part for a given residual, and whether a challenger's entry crossed a differing closure or merely composed inside its own.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| The effect is indexed per user and per platform slot, never a mean | general | Fig 1 :19, :22 | figure-derived |
| The market is the anchor for both halves, read two ways | general | Fig 2 :29, :35 | figure-derived |
| Usefulness is platform-and-habitat, not platform alone | specified | Fig 11 :39, :40 | triangulated F1 |
| Added participants change valence with the residual | specified | Fig 11 :49-51; Fig 1 :22 | triangulated F2 |
| The feedback is a cycle; its sign decides whether it closes | specified | Fig 12 :119, :121 | triangulated F3 |
| Hardness to challenge is a wall moved only by an import from a differing closure | specified | Fig 6 :14, :21, :23; Fig 8 :32 | triangulated F4 |
| Size is a head start, not a generator; the transform is lossy | specified / general | Fig 4 :11, :12, :22, :27, :30 | triangulated F5 |
| Entrenchment can be a mirror chain, not progress | specified | Fig 7 :12-13, :35-39 | triangulated F6 |
| The two halves are a union with different conditions | general/specified | Fig 9 :54, :55, :57 | figure-derived |
| A size correlation cannot choose the arrow | general | Fig 2 :39-40; Fig 12 :87; Fig 9 :60 | triangulated F8 |
| The critical mass, elasticity or tipping number | not stated | none | **gap**: unreachable at this budget |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A platform's per-user value keeps rising with `N` across a substitution that removes the added participants' contribution to contact (breaks F1, Fig 11 :39-40).
2. Every added user strictly raises every existing user's value at all observed `N`, with no offsetting cost in any residual (breaks F2, Fig 11 :49-51).
3. Adding users never changes the adoption rate of further users above an empirically observed critical mass, or a positive loop demonstrably fails to close while the ground pays (breaks F3, Fig 12 :121).
4. A challenger displaces a large incumbent purely by internal composition, with no new atom and no contact with a differing closure (breaks F4, Fig 6 :21, :23; Fig 8 :32).
5. A platform's advantage survives removal of its head start while the method is held constant, or a head start alone produces new ground-verified value with no method (breaks F5, Fig 4 :22, :30).
6. A platform keeps the same closure across two periods and still produces new ground-verified readings without an import (breaks F6, Fig 7 :36).
7. A single size lever raises usefulness and entrenchment across all regimes with no categorically different residue (breaks F7, Fig 9 :57).
8. Exogenous variation in `N` produces no per-slot causal value change, or the association is fully explained by reverse causation from a genuinely different evidence pool (breaks F8, Fig 2 :39-40).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of network effects (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the usefulness verdict and the challenge verdict separate in every report. A blended "platform strength" score is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, at which link the platform's chain stops and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat "network effects", "moat", and "two-sided market" as Γ, that is, as candidate libraries whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Use the economics and strategy literature as one budget filter and one corroborating witness, not as the verdict. Katz and Shapiro, Arthur, Rochet and Tirole, and the encyclopedia review share an evidence pool (Fig 2 :31, :40). The ecology, contagion, and network-science sources are separate corroborators of the mechanism shape.
6. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Do not name the critical mass or the winning platform design; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, the metalaws note, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, and *The Hard Problem is About Source* (all opened 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also gives the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs section 4's stop.
- The essays confirm the simulation status and the instrument requirement: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*; *"The answer is unreached until a better instrument exists."*; and *"If several paths create the same behavior, then behavior is a projection with lossy information."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six-term physical substrate to a user network | **Retracted, strain S1** | Only fit by renaming users and complementors as kinds of physical terms. Re-census: Fig 13 governs the physical substrate, not a platform's Γ; it is kept for the honest-stop role only, as in BUS-0001 |
| Read "network growth makes a platform more useful" as a `general` verdict | **Narrowed to a `specified`, conditional claim** | No market measurement pays for the general form; valence is residual-relative (Fig 11 :49) |
| Treated Katz and Shapiro, Arthur, Rochet and Tirole as four independent witnesses | **Retracted as independent, kept as one pool** | Same economics evidence pool; one witness (Fig 2 :31, :40) |
| Read the Allee / contagion / preferential-attachment sources as platform evidence | **Narrowed to mechanism-shape corroboration** | Fig 4 :20 requires the anchor to be re-named at the platform scale; none is a platform measurement |
| Planned to name a critical mass or a tipping number | **Marked `gap`** | Fig 9 :32 returns a kind of thing, not the answer; the instrument is not held |
| Wanted to call Fig 11 :40 a `general` law about all platforms | **Narrowed to `specified`** | Structural claim; no market measurement pays for the platform-level version |
| F5's "data is a moat" phrasing in an early draft | **Retracted at record level** | Size is a head start, not a generator (Fig 4 :22); a moat claim needs a source gate and shadow test (Fig 8 :50-52) |
| F3 initially called "decisive" | **Downgraded to triangulated** | Fig 12 and three low-overlap world fields, but one framework pool; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 physical substrate applied to platform terms), resolved by re-census to the honest-stop role. S2 (valiance-relative versus non-updating anchor): Fig 11 :49 and Fig 2 :29 govern different objects, actor valence versus the thing that settles, so no contradiction; kept visible. S3 (positive-feedback tipping versus Fig 7 :13 "agreement compounds, evidence does not"): a closing cycle can move an incumbent's wall without adding ground evidence, which is exactly why the two figures are not strained but complementary. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the *Library of Babel* bundle passage: a union of usefulness and challenge conditions, each with its own reading of the market anchor.
2. **What is the anchor?** The market, named in Fig 2 :29; user value for one half, entry and survival for the other; never platform sentiment (Fig 1 :27).
3. **Is usefulness in the platform alone?** No. Fig 11 :39-40. Capability is platform-and-habitat.
4. **Why does growth stop helping?** Valence is residual-relative (Fig 11 :49-51); a benefactor for matching becomes a malfactor for attention; aggregation hides both (Fig 1 :22).
5. **Why does growth entrench?** The feedback is a cycle whose sign closes it (Fig 12 :121); the installed base is a closure that only an import from a differing closure moves (Fig 6 :23, Fig 8 :32); size is a head start that lowers search cost (Fig 4 :12, :22).
6. **Why can entrenchment coexist with decay?** A chain of mirrors compounds agreement without evidence (Fig 7 :12-13, :36) while the channel to the ground decays (Fig 10 :24-28).
7. **What can be said at the stop?** Two condition sets, a cycle sign, a wall operator, a union split, and refuters. Not a critical mass, not a winning design, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives. **Network growth makes a platform more useful where the added participants stay in contact with the user residual as catalysts (positive cycle sign, maintained channel, valence still beneficial per slot), and it makes the platform harder to challenge where the growing installed base forms a closure whose wall a challenger can move only by importing from a differing closure, carried by a head start and a mirror-resistant chain of rooms. Growth stops helping and starts being merely entrenching when valence flips with the residual, when aggregation hides the per-slot signal, when the channel decays while the ground does not, and when the loop compounds agreement without ground evidence.** The two halves are a union and are kept separate, never averaged into a single "network effect". Which numerical critical mass, which platform, and which design wins is a `gap`, unreachable at this budget rather than silence. Mode `specified` on the platform claims, `general` on the structural shape, not `grounded`. No world source was allowed to flip a verdict; the apparent conflict between the lock-in literature and the sceptical literature was returned to the census and kept as evidence for the union, not resolved by choosing a side. No unresolved strain remains after re-census.
