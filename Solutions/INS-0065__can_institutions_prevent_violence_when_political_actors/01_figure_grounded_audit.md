# Figure-grounded audit: INS-0065, can institutions prevent violence under expected exclusion or retaliation?

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. None is `accepted`.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, fetched 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the institutional question it reports on. No violence event data were analysed here.

**Sources for figure lines.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Quote as `Fig N :line`. `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` were read for usage rules. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) - o'|` per slot `s` (Formula step 1; Symbols table, `R`). Here:

- **b** is the political actor's belief about its own future: *if I comply, or if I lose this office, I will be excluded, dispossessed or retaliated against.*
- **a** is what the actor does: comply with the institution, hedge, or strike first.
- **Γ(b,a)** is what the institution's library predicts: the assurance that compliance is safe and defection is punished.
- **o′** is what actually happens to that actor: whether exclusion or violence occurs.
- **s** is the actor-slot: a faction, an elite network, a community, a militia, a regional bloc. `R` is indexed per actor and per time, never aggregated into a national peace score.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the level of violence but **which slots keep a live positive residual on the question "is compliance safe?" and which do not.** Call it `R_s^{+}(safety)`. Observed: two factions under one constitution can differ sharply on this. A frame that predicts all factions read the same assurance the same way has a residual here.

State the residual as: *why does the gap between what an institution's assurance predicts and what a political actor expects to happen stay small in some actor-slots and grow in others, even when the written rules are identical?* This is an effect description. It names no theory, no "credible commitment", no "power sharing", no "deterrence". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction makes "compliance is safe" a settled prediction for the actor, plus an instrument that discriminates a failure of the institution to bind itself from a failure of the channel carrying the assurance. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The counter here is observed violence and observed treatment of losers. It does not move when a government, a rebel leader or an expert insists that the institution works. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* Perceptions of security, institutional self-reports and expert consensus move when pushed; they are instruments, and instruments can be wrong on axes they do not measure (Fig 2 :37-38). The public-health field names the same object: CDC writes *"CDC works to prevent violence by understanding the factors that influence violence"* and *"Violence is an urgent public health problem. CDC is committed to preventing violence so that everyone can be safe and healthy."* (CDC Violence Prevention, fetched 2026-11-23). Measurable harm, not consensus, is the thing to range against.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** `R_s` is a multi-place relation among institution, actor belief, action and observed treatment, indexed by actor-slot and ordered by time. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72), because a future expectation is a future-directed sequence. It carries a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87), because the actor compares expected loss from compliance against expected gain from striking first. And it carries **negation** (`¬`), because the operative belief is *"the guarantee will NOT hold for me"*, a refusal of the institution's claim, not a missing atom. The operators table records that negation is unary and *"a refutation is a negation, which is why a vocabulary without it can only accumulate"* (Operators :58).
- **Symmetry.** The relation is not symmetric. The assurance must not change when the actor pushes on it (Fig 2 :30). If it does, the guarantee has become another frame and the actor's expectation is correct. Time is asymmetric: a lost advantage or a retaliated defection is not undone by reversing the action.
- **Scale.** Three scales are in view: the single actor's decision loop (Fig 4 one-agent panel), the population of actors under one institution with *"something that ranks what they produce"* (Fig 4 :5), and the time channel across which an expectation of future exclusion is carried. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap `R_T` must be measured rather than assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The institution as maker** | rules, enforcement agencies, designers, courts | assurances, enforcement actions | yes: whether the assurance holds when tested, that is observed violence and observed treatment of losers | admitted |
| **D2 The actor's belief loop** | factions, elites, communities, militias | expectations of future exclusion or retaliation | yes: actual treatment on loss of power or on compliance | admitted |
| **D3 The credibility and reach domain** | institutions, third parties, external guarantors, internal checks | credible commitment, the reach of what can be guaranteed | yes: behaviour under stress, when the powerful party is tempted to defect | admitted |
| **D4 The temporal channel** | signals of intent, reputations, memory of past retaliation, monitoring | contact with the ground over time | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 Institutional design genius as a free-floating property** | the designer | talent | **no** anchor independent of observed violence | not a domain yet |
| **X2 Pure coercion capacity as sole cause** | the state's monopoly of force | deterrence | measurable, but already inside D3 as one mechanism of credibility | absorbed into D3, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that designers never matter.

### 1.3 Partition or union

D1 and D3 overlap: the assurance issued by the institution and the credibility of that assurance are one loop viewed from the maker side and the reach side. D2 and D4 overlap: the actor's belief and the maintenance of that belief over time are one loop. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1: the assurance is credible, that is, a commitment the institution cannot select when it becomes inconvenient.** Its instrument: does the rule bind the powerful actor when that actor is tested?
- **C2: the channel carrying that assurance stays reachable over time.** Its instrument: are signals of continued commitment arriving at the actor, or have they gone stale, been dropped, saturated, or pooled across groups?

An institution failing only C1 and an institution failing only C2 are not different degrees of one failure. They are different compounds and need different instruments. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* (fetched 2026-11-23).

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the actor read the institution's signals at all?) → 2 vocabulary (does the actor have terms distinguishing a binding commitment from cheap talk?) → 3 objective (can the actor say what would count as safety and progress?) → 4 planning (strike first, hedge, comply) → 5 learn and carry. The middle link, having terms for what the institution affords and saying what would count as safety, is the one with no instrument. Fig 12 :113 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most diagnosis effort lands above the break, because that is where the measurements already exist (Fig 3 :29).

### 1.5 Strain test and re-census

An early attempt to apply Fig 13's six-term physical substrate directly to "institutional power" fit only by calling coercive capacity a kind of energy and a constitution a kind of gradient. That is a strain. Per the canonical rule, *"a reading that makes one contradict another has misidentified its domain, not found a flaw"* (figures README). So Fig 13 does **not** govern institutional power. Re-census sends Fig 13 to the honest-stop role only (section 6, strain S1), where its line *"Unreachable is a verdict here, not a silence,"* (Fig 13 :134) is legitimate and domain-agnostic. No other figure needed a strain after re-census.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not which institution works |
| 2 The Ground | anchor is observed violence; independence vs one evidence pool | governs C1's non-updating test and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer from one actor to a population |
| 5 Mint Pipeline | three guards as product; settling necessary, not sufficient | governs why a new mechanism cannot be asserted without a source |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs renewal when the institution's closure lacks a mechanism |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs persistence as a sequence of assurances |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick failure (C2) |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1 and D2 |
| 12 The Bond | catalyst, cycle, negation; arrangement is the substance | governs why a peace mechanism changes sign |
| 13 Minimum Viable Set | closed set, open arrangements; unreachable is a verdict | honest stop only, after the strain re-census |
| Operators table | negation is unary; comparison is a threshold relation | governs the actor's "will NOT protect me" belief |
| Symbols table | R is the aim, per slot; the ground is the anchor | no R was stated in the raw question; it is now stated in section 0 |

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about institutions, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Violence prevention is a property of institution-and-habitat, not of the institution alone

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat relations versus membrane scale).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"Only the actors, the currency and the anchor change."** (Fig 4 :20)

An institution cannot be made more violence-preventing by adding rules, courts or patrols in isolation if its contact with the political habitat does not change. The habitat here is the other actors, the distribution of coercive capacity, the history of retaliation, the region, the external guarantors. Answering with a list of institutional attributes is an agent-only improvement that may leave contact untouched. Fig 11 :72 gives the standing refuter in the figure's own words: an agent-only improvement that moved the ground would refute the capability claim.

The political-science source corroborates at a different level of description. Wikipedia's *Consociationalism* entry states: *"The goals of consociationalism are governmental stability, the survival of the power-sharing arrangements, the survival of democracy, and the avoidance of violence"* and records that post-conflict arrangements have been *"severely dependent on external support for survival."* (fetched 2026-11-23). External support is a habitat condition, not an attribute of the written constitution.

**Refuter:** a documented case in which an institution's capacity to prevent violence is unchanged across a habitat substitution that demonstrably removes the ground's payment for compliance, with violence measured per actor-slot before and after. If it survives, F1 is false.

### F2: The anchor is observed violence, not agreement, perception or institutional self-report

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 2 and Fig 7, low overlap: anchor rule versus selection between rooms).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)

Whether violence was prevented is settled by what happened to people, not by a government's assurance, a rebel leader's statement or a panel of experts agreeing that the institution is sound. The social-psychology source corroborates the mechanism at the individual stratum. Janis's definition of groupthink, as recorded in Wikipedia's *Groupthink* entry: *"concurrence-seeking becomes so dominant in a cohesive ingroup that it tends to override realistic appraisal of alternative courses of action"* (fetched 2026-11-23). A cohesive elite room can agree perfectly and be wrong about the ground. Fig 2 :31 adds the witness rule: *"Two people reading the same report are not two frames; two instruments pointed at the same thing are."*

**Refuter:** a documented case where expert agreement and institutional self-report stay high while measured violence rises per slot, and the agreement is used as the verdict. Under F2 that is not a success; if the field nonetheless counts it as one, F2's methodological claim is false.

### F3: Credibility requires an assurance that does not update when the actor pushes

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 2 and the game-theoretic commitment-device literature, genuinely different fields).**

> **"The anchor must not update."** (Fig 2 :33)
> **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."** (Fig 2 :34)
> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)

This is the heart of the question stated in figure terms. When a political actor expects exclusion, the institution's assurance only functions as a ground if the institution cannot change its answer because of that actor's power or displeasure. If the rule bends for the powerful faction, the assurance has become another frame, the two drift together, and nobody notices because the drift is coherent. The actor's expectation was then correct.

The game-theoretic and behavioural-economics literature names the same object from outside the framework. Wikipedia's *Commitment device* entry (the redirect target of "Credible commitment"): *"a commitment device is a mechanism or arrangement that implements precommitment by deliberately restricting one's own future options in order to make a commitment credible"*, and *"in game theory, commitment devices are strategic moves that constrain an agent's choices to influence an adversary or negotiating partner"* (fetched 2026-11-23). Schelling's version, as recorded there, is that *"visibly eliminating one's own options can force an adversary to adjust, because the adversary can see that the commitment is irrevocable."* This is Fig 2 :30 in another vocabulary: if it can be moved by a push, it is not an anchor.

The legal-institutional corollary appears in *Decoding Tacit Knowledge*: *"Courts of law rule on evidence, which neither side can move."* (Isaiah N, fetched 2026-11-23). A court whose verdict tracks the government's preference is not an anchor.

**Refuter:** a documented case where the institution changed its own guarantee under pressure from a party to the conflict, measured violence did not rise, and the guarantee was not the operative ground. That would show F3 has identified the wrong binding condition. Equally: a case where a genuinely non-updating assurance coexists with sustained violence in the same slots would weaken F3 to `general`.

### F4: Quick failure is channel failure, not decay of the ground

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer versus room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"the output is not a verdict, it is you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)

When institutions fail to prevent violence despite formally sound rules, the failure is often that the channel carrying the assurance degraded. The named decay modes are stale percepts, dropped transients, saturated metrics and pooled readings. "Pooled readings" is the institutional version of aggregating across actor-slots (Fig 1 :22): the signal that says which faction has stopped believing disappears into a national average.

Fig 7 adds the two-factor test:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

A decade of peace is a chain of handoffs, each a fresh assurance. If either the bracket's fidelity or the ground's pressure goes to zero, the institution runs in place. The organizational-studies source corroborates in a low-overlap field. Wikipedia's *Institutional memory* entry: *"Institutional memory may be ingrained to the point that it becomes hard to challenge, even the conditions that caused it to arise have changed. An example of this would be an organization continuing to submit a form, even after the law requiring that document has been repealed, for fear of legal consequences that no longer exist."* (fetched 2026-11-23). That is a stale percept with a changed ground.

**Refuter:** a documented case in which an institution loses compliance while bracket fidelity and ground pressure are independently measured as high and not declining. If both stay high, F4's mechanism is not the cause.

### F5: An institution that hands itself the same room produces agreement, not progress

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 7 and Fig 2, low overlap: selection between rooms versus anchor triangulation).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"The chain approaches the truth only as the world runs out of ways to refuse it. Which means the next room you book is the direction you travel, and booking a room like the last one is how a chain stops travelling at all."** (Fig 7 :42)

An institution that keeps convening the same elite bargain, the same dispute-resolution format and the same monitoring regime is handing itself the same room. Agreement inside it compounds while evidence does not. The consociationalism source corroborates with a phrase that nearly quotes the figure: such arrangements have been criticised as *"temporarily freezing conflicts but not resolving them"* (Wikipedia, *Consociationalism*, fetched 2026-11-23). Freezing is motion; it is not the ground voting.

**Refuter:** an institution that keeps the same closure for two decades and still produces new, ground-verified reductions in violence per slot without importing any new mechanism. Under Fig 7 :36 that should be impossible; if observed, F5 is wrong.

### F6: Renewal of reach requires contact with a closure that differs

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, three figures with distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

An institution whose closure lacks a mechanism (no independent enforcement, no cross-cutting representation, no third-party guarantee, no subnational early-warning channel) cannot mint its way to that mechanism by composing inside its own rules. It must meet a frame whose closure differs: an external regulator, a neighbouring jurisdiction, civil society, a monitoring mission, a rival institution that has solved a similar residual.

The political-science source supplies a concrete instance. The *Consociationalism* entry describes Bosnia-Herzegovina's *"international regulating body"* in the form of a High Representative who *"frequently intervened in the domestic political affairs of the state to implement legislation on which domestic elites were reluctant to come to an agreement."* It also records that recent examples were *"characterised by external facilitation, and at times imposition, through international actors."* That is an import from a differing closure, carried with provenance, not a composition inside the domestic set.

The cognitive source corroborates at a different stratum. The *Groupthink* entry records Janis's prevention rule: *"The organization should set up several independent groups, working on the same problem"* and *"The group should invite outside experts into meetings."* (fetched 2026-11-23). Independence is the imported atom.

**Source gate and shadow test.** Fig 6 :12-13 require an import to carry *"source gate: provenance"* and *"shadow test: explains a gap"*. An external guarantor that is itself a party to the conflict, or that cannot name which gap it closes, is an atom imported without provenance. Fig 6 :24: *"A wrong atom costs more than starting from primitives."*

**Refuter:** an institution that renews its reach solely by composing inside its own closure, with no new atom entering from a differing closure, and that still passes the ground test across a change of habitat. That breaks idempotence and F6 with it.

### F7: A mechanism that produced peace changes valence when the residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations versus composition structures).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)

A power-sharing veto, a repression apparatus, an amnesty, a militia integration deal: each is a benefactor to "no violence today" under one residual and can become a malfactor when the actor's expectation changes. Nothing in the mechanism's description records which it currently is. This is the figure-grounded reading of what the policy literature calls a perverse incentive. Wikipedia's *Perverse incentive* entry: *"In economics, a perverse incentive is an incentive structure with undesirable results, particularly one where those effects are unexpected and contrary to the intentions of its designers."* (fetched 2026-11-23). The entry itself records that the founding cobra anecdote's historicity was doubted by a 2025 investigation, so I use the general definition as the substantive witness and do not rely on the anecdote. That correction is preserved here rather than hidden.

The *Consociationalism* entry corroborates politically: power-sharing has been criticised as *"institutionalising and deepening existing divisions"* and as something that can *"bring short-term peace, but that it is always temporary and is likely to worsen tensions in the long-run."* Valence changed; the arrangement did not.

**Refuter:** an institutional arrangement whose measured valence is invariant across a documented change in the relevant actors' expectations. If no such change of valence can be found anywhere, F7 weakens to `general`.

### F8: The question is a union, so one lever cannot clear it

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay; the essay is framework-internal, so one external witness).**

Fig 9 :54, :55 and :57 are quoted in section 1.3. The two conditions C1 (a non-updating, credible assurance) and C2 (a maintained channel over time) have different instruments:

- A **C1 failure** shows up when the rule bends for a powerful actor, when the guarantor can be bought off, or when the assurance was never self-binding (Fig 2 :30, :33-34).
- A **C2 failure** shows up as stale percepts, pooled readings, a bracket that no longer matches the residual, or an assurance that arrives only at the capital and not at the faction (Fig 10 :26, Fig 7 :38).

A single lever, for example "more repression" or "more power sharing", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). F8 is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions in both failure types with no categorically different residue left over. That would collapse the union into a partition.

### F9: The break is usually at the middle link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :113-115 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In institutional terms, the usual failure is not that the government cannot plan; it is that an actor has no terms for what a binding assurance affords and cannot say what would count as safety. More monitoring budget lands above the break because that is where the measurements exist (Fig 3 :29-30). The tacit-knowledge essay corroborates the mechanism: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* (Isaiah N, fetched 2026-11-23). A written constitution carries context and some subtext and almost none of the actor's history, which is why the same words read differently in two factions.

**Refuter:** a documented case where perception, vocabulary and objective links all measure as working and the failure is located at planning. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F10: Never explain this by aggregating across actors, and do not name which mechanism wins

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1, Fig 9, Fig 13 and the source-discrimination essay).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)

A national "peace index" or an averaged "institutional quality" score scores the frame with a quantity the frame produces. It is a filter for where to look and a budget instrument, not a witness. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

The second half is a declared `gap`. Which specific mechanism prevents violence in this particular slot, that is, which atom occupies the credibility slot, is not given after a genuine re-census. The source-discrimination essay gives the reason: an instrument that reads green *"cannot comment on the source"*, and *"If several paths create the same behavior, then behavior is a projection with lossy information."* It was a spectrometer, not an argument, that resolved the case; *"The answer is unreached until a better instrument exists."* (Isaiah N, *The Hard Problem is About Source*, fetched 2026-11-23). Here the analogous instrument would discriminate "the institution bound itself" from "the actor merely believed it did", both of which can produce the same absence of violence for a year.

Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

**Refuter:** an averaged institutional statistic that predicts prospectively and per actor-slot which faction will defect next, plus a source-discriminating instrument that names the operative mechanism. Either would move F10's gap to `specified` or `grounded`.

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per actor-slot, never a national average | general | Fig 1 :19, :22 | figure-derived |
| Observed violence is the anchor, not consensus | general | Fig 2 :29, :35 | figure-derived |
| Prevention is institution-and-habitat, not institution alone | specified | Fig 11 :39, :40 | triangulated F1 |
| Credibility requires a non-updating assurance | specified | Fig 2 :30, :33, :36 | triangulated F3 |
| Quick failure is channel failure, not ground decay | specified | Fig 10 :24, :26; Fig 7 :37-39 | triangulated F4 |
| Repeated closure stops progress | specified | Fig 7 :12, :13, :36 | triangulated F5 |
| Renewal needs import from a differing closure | specified | Fig 6 :14, :21, :23 | triangulated F6 |
| A peace mechanism changes valence when the residual changes | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F7 |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F9 |
| Which specific mechanism works in this slot | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule in the Seat Map field guide: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. An institution's capacity to prevent violence is unchanged across a habitat substitution that removes the ground's payment for compliance (breaks F1, Fig 11 :39-40).
2. Expert agreement and self-report stay high while measured violence rises per slot, and the field counts the agreement as the verdict (breaks F2, Fig 2 :29, :35).
3. An institution changes its own guarantee under pressure from a party and measured violence does not rise, with the guarantee shown not to be the operative ground; or a genuinely non-updating assurance coexists with sustained violence in the same slots (breaks F3, Fig 2 :30, :33-34).
4. An institution loses compliance while bracket fidelity and ground pressure both measure high and non-declining (breaks F4, Fig 7 :37-39).
5. An institution keeps the same closure for two decades and still produces new ground-verified reductions in violence without any import (breaks F5 and F6, Fig 7 :36, Fig 8 :32).
6. A mechanism's measured valence is invariant across a documented change in the relevant actors' expectations (breaks F7, Fig 11 :49-51).
7. A single intervention restores both C1 and C2 in both failure types with no categorically different residue (breaks F8, Fig 9 :57).
8. Fig 13's six terms are derived from five of them, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a violence measurement has paid for the shape per actor-slot.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of institutional design (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep C1 and C2 separate in every report. A blended "institutional strength score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask at each handoff which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Judge the assurance by whether it binds the powerful actor when tested, not by how often it is repeated. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."*
5. Treat any list of institutions as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
6. Require a source gate and a shadow test for every imported guarantor or external mechanism (Fig 6 :12-13, :24).
7. Use the public-health and political-science literature as a budget filter and as corroborating witnesses, not as the verdict (Fig 9 :60).
8. Offer the formula as a method only after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name which mechanism will work in a given country; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction and confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md` and `60_FIGURES_AS_METALAWS.md`, plus four essays fetched 2026-11-23 (*The Recursive Self-Improvement Trap*, *The Library of Babel*, *The Hard Problem is About Source*, *Decoding Tacit Knowledge*).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop and F10's gap.
- The metalaws note confirms that design questions are answered by derivation rather than by escalation to a human anchor: *"the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."*
- *The Recursive Self-Improvement Trap* confirms the simulation status and the prestige rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to institutional power | **Retracted, strain S1** | Only fit by renaming coercive capacity as energy. Re-census: Fig 13 governs the physical substrate, not an institution's Γ. Kept for the honest-stop role only |
| Treated the consociationalism source as straightforward corroboration | **Narrowed to mechanism-shape corroboration** | It is a political-science description at a different stratum; Fig 4 :20 requires the anchor to be re-named at the new scale |
| Treated "credible commitment" as a figure-derived name | **Retracted at record level** | The game-theory literature supplies the name. The figure supplies only the non-updating-anchor condition. The binding is a provenanced import, recorded as such |
| Treated the cobra anecdote as a substantive witness | **Retracted at record level** | A 2025 investigation doubts its historicity. Only the general definition of perverse incentive is used |
| Wanted to call F2 a `general` law about all institutions | **Narrowed to `specified`** | No violence measurement pays for the institutional application here |
| Wanted to assert a specific mechanism (veto, monitoring, third-party guarantee) | **Marked `gap`** | Fig 9 :32 returns a kind of thing, never the answer; the source-discriminating instrument is not held |
| F1 called "decisive" in an early draft | **Downgraded to triangulated** | Fig 11 and Fig 4 are two figures but one framework; triangulation means low topical overlap, not independent evidence pools |
| F9 status | **Marked single-source** | Fig 3 and Fig 12 are one framework; Fig 12 corroborates the shape of the link but not the "usually" frequency claim |

**Strains sent to the log:** S1 (Fig 13 applied to institutional power), resolved by re-census; S2 (calling observed violence "the ground" while also treating institutional behaviour as updateable), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground is what settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of credible assurance and maintained channel, each with its own loop and instrument.
2. **What is the anchor?** Observed violence and observed treatment of losers, named as a counter in Fig 2 :29. Not consensus, not self-report (Fig 1 :27).
3. **Is prevention in the institution alone?** No. Fig 11 :39-40. Capability is institution-and-habitat.
4. **What makes an assurance credible?** It must not update when the actor pushes (Fig 2 :30, :33-34); the game-theory commitment-device literature converges on the same shape from outside.
5. **How does quick failure happen?** Channel decay: stale percepts, pooled readings, lost touch (Fig 10 :24-29); or either factor of Fig 7 :37-39 going to zero.
6. **How does long prevention happen?** A chain of differing rooms selected against the surfaced residual (Fig 7 :36), with imports from differing closures moving the wall outward (Fig 6 :23).
7. **Why does the good thing turn bad?** Valence is relative to the residual (Fig 11 :49-51); a catalyst may become spent (Fig 12 :119).
8. **What can be said at the stop?** A shape and two conditions, with falsifiers. Not which mechanism, not which country, not a `grounded` answer. *"Unreachable is a verdict here, not a silence,"* (Fig 13 :134), and *"So a search that finds nothing is never a proof of absence."* (Fig 8 :39).

---

## 8. Updated verdict

The shape survives: **institutions can prevent violence under expected exclusion or retaliation only when (C1) the assurance is a commitment that does not update under pressure from the parties, and (C2) the channel carrying that assurance stays reachable over time; prevention is a property of the institution and its political habitat, renewal requires contact with closures that differ, and a mechanism that once produced peace can change sign when the residual changes.** The two conditions are kept separate, never averaged. Which specific mechanism occupies the credibility slot in a given case is a `gap`, not a hidden answer. Mode `specified`, ungrounded.

No world source was allowed to flip a verdict. The one apparent conflict, the political-science observation that external support is necessary for power-sharing survival, was returned to the census and re-mapped to F6 (import from a differing closure) and F1 (habitat condition), where it corroborates without overturning. No unresolved strain remains after re-census.

This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.
