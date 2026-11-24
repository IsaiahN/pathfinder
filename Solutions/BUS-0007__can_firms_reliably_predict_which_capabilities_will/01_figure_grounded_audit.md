# Figure-grounded audit: BUS-0007, predicting which capabilities will matter

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Structural claims about reachability are `general`; predictions about firms are `specified`. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md` and `FIGURES_README_canonical.md` were opened this session. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`). The distinctive feature of this question is the **time gap** between the bet and the settlement:

- **b** is the firm's belief at time t about which capabilities will matter at t+Δ.
- **a** is the action at t: build, buy, partner, train, acquire, reconfigure.
- **Γ(b,a)** is what the firm's library predicts the future market will reward.
- **o′(t+Δ)** is what the future market actually pays. It becomes legible only after the bet.
- **s** is the firm and the specific capability slot. R is indexed per firm-slot and per future time.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

Stated as an effect: *can the gap between what a firm's library predicts at t about which capability will be rewarded and what the future market actually rewards at t+Δ be closed in advance, or does it close only after o′ arrives and the firm adapts?* The sentence names no theory, no "dynamic capability", no "sensing", no "scenario planning", no "absorptive capacity". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (1) a reachability verdict on the named capability at t, (2) the shape that is reachable instead if the name is not, and (3) an instrument that would discriminate a foresight failure from an adaptation failure. Fig 5 :65: **"The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM."** It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29 names the candidate directly: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** The future market is a nameable anchor, but it is not reachable at t. This is the crux: the anchor exists, the channel to it is deferred. Management opinion, analyst consensus, and internal scenario scores move when pushed, so they are instruments at best (Fig 2 :30). The viable anchor is the future market's realized payment per firm, observed at t+Δ.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a relation among firm-library Γ, belief b about the future, action a, and future return o′, indexed by slot s and ordered by time from t to t+Δ. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because the bet precedes the settlement, and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87) because the question of which capability will matter is a ranking, not a count. It is not symmetric: the future market does not update on the firm's forecast.
- **Symmetry.** "Matter" is a threshold relative to what else the market rewards. Persistence of a capability's valence is asymmetric in time: a capability that lost valence when the residual changed is not restored by rerunning the same bet.
- **Scale.** Three scales are in view: the firm's step loop at t, the population market at t+Δ, and the time channel between them. The membrane is *"Not a wall: a filter with a direction"* (Fig 4 :21). Only methods cross up; only head starts come down (Fig 4 :22). A forecast is a projection carried across this membrane, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The foresight loop at t** | analysts, scenarios, decision makers, the firm's Γ | reduction of R about the future | yes: the future market's realized payment, but not reachable until t+Δ | admitted, with deferred contact |
| **D2 The future market habitat at t+Δ** | firms, customers, entrants, regulators, technologies | survival, share, willingness to pay | yes: customer choice at t+Δ; the market as ground (Fig 2 :29) | admitted |
| **D3 The capability library Γ at t** | atoms (routines, know-how, assets) and bonds between them | reach (what can be composed and done), |φ| cost | yes: settlement against the ground (Fig 5 :70, *"A term is settled when the ground pays for it"*) | admitted |
| **D4 The foresight channel across t to t+Δ** | leading indicators, instruments, metrics, percepts | contact with a future ground | yes: the ground that persists while the channel degrades (Fig 10 :24) | admitted |
| **X1 The visionary who simply knows** | a person | insight | **no** anchor independent of the later market verdict | not a domain yet |
| **X2 The technology roadmap as sole cause** | an industry trajectory | deterministic path | industry outcomes, but these are already inside D2 | absorbed into D2 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that individuals never forecast well.

### 1.3 Partition or union

D1 and D3 overlap: Γ is inside the foresight loop, so their overlap is a compound with its own loop. D2 and D4 overlap: contact with the future ground is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The question's own wording, "predict ... or ... adapt", is a union masquerading as a disjunction. The unbundled conditions are: (C1) reaching the shape of what will matter before o′ arrives, and (C2) maintaining contact and reach so the firm can rebind, refit, or import when o′ arrives. A firm failing only C1 and a firm failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The Library of Babel essay states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the firm read weak signals at t?) → 2 vocabulary (does Γ have terms for what a future market affords?) → 3 objective (can it say what progress toward that market would count as?) → 4 planning → 5 learn and carry. The middle link is the one with no instrument. Fig 12 :111 says **"A vocabulary without bonds can name a state and cannot name a route to one."** Fig 12 :112 adds: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* Most foresight effort lands above the break because that is where the measurements already exist (Fig 3 :29).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs indexing, not the time crossing |
| 2 The Ground | future market as anchor; independence vs common pool | governs witness rule and anchor status |
| 3 Dependency Chain | middle link breaks first; effort above the break wasted | governs diagnosis order for foresight |
| 4 The Membrane | lossy transform across t to t+Δ; R_T | governs the forecast round trip |
| 5 Mint Pipeline | three guards; settlement; sought-for shape as ordinary term | governs what a forecast term may claim |
| 6 Closure / Reachability | import is the only operator that moves the wall; depth vs genuine absence | decisive for "can the capability be predicted" |
| 7 Room Chain | same closure handed along is a mirror chain; two factors | governs scenario quality and persistence |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs why more analysis cannot add the atom |
| 9 Leave / Arrive | union vs partition; describe residual first; verdict/lookup/narrowing | governs the census and the stop |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick loss of foresight contact |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for "which capability matters" |
| 12 The Bond | arrangement is the substance; catalyst, cycle, two currencies | governs why a strength becomes a rigidity |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |

**Strain test applied during this census.** An early reading tried to apply Fig 9 :6, *"1 · the verdict: is φ* in here at all?"*, literally to the future market: at t, is the capability in the firm's closure? That strained, because Fig 9's closure is a formal closure at one time, while this residual crosses a time membrane and an unknown future habitat. Re-census (strain S1 in section 6) assigns Fig 6 :27 and Fig 4 :30 to govern the time crossing and keeps Fig 9's verdict line for the methodological question of whether more search at the same reach helps. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about firms, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The question is a union, not a choice between predicting and adapting

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal, so the external witness count is one).**

Fig 9 :54, :55 and :57 are quoted in section 1.3. The two conditions C1 (reach the shape) and C2 (maintain contact and reach) have different instruments:

- A C1 failure shows up as a confidence-weighted forecast that names a capability without a source gate, a scenario set that hands the same closure along, and an objective that cannot be stated (Fig 5 :61-66, Fig 7 :36, Fig 12 :111).
- A C2 failure shows up as saturated metrics, pooled readings, a bracket that no longer matches the residual, and a reach that stops moving while the capability library keeps growing (Fig 10 :26, Fig 7 :38, Fig 6 :21).

A single lever, for example "do more scenario planning", clears the region where only C1 fails and leaves the intersection standing, because C2 still binds. F1 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions in both failure types with no categorically different residue left over. That would collapse the union into a partition.

### F2: The specific capability that will matter is unreachable at decision time

**Mode: `general` for reachability, `specified` for firms. Domains D1, D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, three figures with distinct roles).**

> **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."** (Fig 6 :27)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)
> **"still not arrive: infinite effort inside a finite reach."** (Fig 13 :118)
> **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."** (Fig 9 :44)

At t, the firm cannot tell whether the capability that will matter is already in Γ and merely unfound (depth, more search) or genuinely absent (a new atom owed from a differing closure). From inside the frame the two look the same. No amount of internal analysis adds an atom. So the specific name cannot be relied on as a prediction made at t. This is `unreachable` at decision time, not silence and not proof that foresight is useless. Mode is `general` for the reachability structure and `specified` for the claim about firms.

**Refuter:** a prospective, per-firm, per-capability prediction issued at t that names the capability, is confirmed by the market at t+Δ, and carries a source gate showing where the atom came from and a shadow test showing which gap it explains (Fig 6 :23; Fig 8 :50). If such predictions hold across repeated slots, F2 is false.

**World bearing (secondary only):** Teece 2007 writes that opportunities are detected because *"entrepreneurs/managers must make informed conjectures about the path ahead. These conjectures become working hypotheses that can be updated as evidence emerges."* That is the shape of F2 in the strategy vocabulary: conjectures updated as evidence arrives, not names settled in advance. Same evidence pool as the rest of the strategy literature, so one witness.

### F3: What foresight can return is a shape, not a name

**Mode: `general`. Domains D1, D3. Status: triangulated (Fig 13, Fig 9 and Fig 5).**

> **"what it returns is a shape rather than a name."** (Fig 13 :133)
> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"BUT THE TERM MOST WORTH REFUSING MAY NOT BE IN THE LIBRARY AT ALL."** (Fig 5 :61)

The reach at t returns a constraint: the capability must be one whose valence survives the residual change, reachable by crossing kinds and maintainable through contact with a differing closure. It does not return "build capability X". Naming X at t is the searcher's own contribution and must be recorded as such. Fig 5 :62: **"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."** The shape is bound as an ordinary term in section 0 so that it can be refused.

**Refuter:** a demonstration that the framework, run without imported business vocabulary, outputs a specific named capability that later settles against the ground. Until then, names are bindings from a world frame, provenanced as such.

### F4: The break for future questions is at vocabulary and objective, not at planning

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111-112 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

In firm terms, the usual failure in foresight is not that the firm cannot run a planning exercise. It is that it has no terms for what a changed future market affords and cannot say what would count as progress there. Scoblic 2020 puts it in the foresight vocabulary: *"managers cannot watch for things they have not thought of"* and *"We see many inflection points that do not exist and miss many that do."* Both are Fig 3 :27 and Fig 11 :48 observed in the management literature, but they share the business evidence pool with Teece and Semke and Tiberius.

**Refuter:** a documented firm whose perception, vocabulary, and objective links all measure as working for a future market and whose foresight failure is located at planning. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F5: Foresight that hands the same closure along is a mirror chain

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 7 and Fig 2, low overlap: room selection vs anchor triangulation).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)
> **"The chain approaches the truth only as the world runs out of ways to refuse it. Which means the next room you book is the direction you travel, and booking a room like the last one is how a chain stops travelling at all."** (Fig 7 :42)

A firm that runs the same scenario workshop, hires the same kind of futurist, and rewards the same mental model is handing itself the same room. Agreement inside it compounds while evidence does not. Two factors decide whether a foresight handoff is progress: bracket fidelity across the handoff and the ground's pressure on the room. Zero either and the chain runs in place. Semke and Tiberius 2020 report that in their interviews *"Sensing constitutes a reactive action of the firm, as it perceives changes after they have already occurred"* and that four of seven experts saw a *"process break"* after sensing, so foresight often stops at perception and is not carried into reconfiguration. That is Fig 7 :37 with the second factor missing, from a different sample but the same business pool.

**Refuter:** a firm that keeps the same closure across two decades and yet keeps producing new, ground-verified readings of future markets without importing any new atom. Under Fig 7 :36 that should be impossible; if observed, F5 is wrong.

### F6: A capability's valence is relative to the future residual

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)

This is why the list of capabilities that mattered yesterday is not a reliable list for tomorrow. Nothing in a capability's current description records whether it regenerates when the residual changes. A routine is a catalyst if it survives its own use and a spent part if it does not, and the description does not say which. The mechanism is the figure-grounded reading of "core rigidity", stated in effect terms.

Kleiner 2013 reports Teece on exactly this failure: Nokia *"missed the smartphone revolution because the company was not well equipped for sensing"* and, though it had a research lab in Berkeley, *"they tapped into the science, but they missed the state of mind."* Same business pool as Teece 2007, so one witness. The ecology source supplies an independent, low-overlap witness: MathisonSlee et al. 2022 describe a *"rigidity trap"* in which a system becomes *"highly connected, rigid, and inflexible. System capacity for novelty is diminished, leading to a decrease in adaptive responses to shocks."* That is Fig 12 :119 and Fig 7 :36 in social-ecological systems.

**Refuter:** a capability whose measured valence is invariant across a documented change of the future residual. If no such change of valence can be found anywhere, F6 weakens to `general`.

### F7: Renewal of reach requires contact with a differing closure

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)
> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."** (Fig 8 :50)

To keep paying across a change of market, the firm's reach must be expanded by contact with frames whose closures differ: entrants, adjacent technologies, customers, regulators, science. Teece 2007 names the three microfoundations: *"the capacity (1) to sense and shape opportunities and threats, (2) to seize opportunities, and (3) to maintain competitiveness through enhancing, combining, protecting, and, when necessary, reconfiguring the business enterprise's intangible and tangible assets."* This is the business-pool name for F7, one witness. Kleiner 2013 records Teece's own admission that *"dynamic capabilities theory is not tightly predictive"* and that *"It's very hard to figure out which capabilities are most important, which aspect of 'the way things are done around here' is the one that leads to superior performance. Sometimes people in an organization don't know why their own capability is successful. They attribute their success to the wrong factors."* That is Fig 6 :27 and Fig 13 :133 in the field's own voice.

**Refuter:** a firm that renews its reach solely by composing inside its own closure, with no new atom entering from a differing closure, and that still passes the ground test across a documented change of habitat. That breaks idempotence and F7 with it.

### F8: The round-trip gap is what foresight cannot hold

**Mode: `general` for the lossy transform, `specified` for firms. Domains D1, D4. Status: triangulated (Fig 4 and Fig 10, low overlap: cross-scale membrane vs ground-maintainer channel).**

> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)
> **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."** (Fig 4 :31)
> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)

A forecast is a coarser description of t+Δ carried back to t. Going up throws away detail; coming back down does not restore it. The gap R_T is the honest report of what the forecast cannot hold. Quick loss of foresight is channel failure, not the future market decaying: the named decay modes are stale percepts, dropped transients, saturated metrics, and pooled readings.

**Refuter:** a documented case in which a forecast carried up from t and brought back at t+Δ matches the realized market with no measurable gap across repeated slots, on a capability whose valence changed in between. That would falsify the lossy-transform claim for this domain.

### F9: Forecast pools disqualify verdicts, and active open-mindedness is the usable shape

**Mode: `general` for the witness rule, `specified` for firms. Domains D1, D4. Status: triangulated (Fig 2, Fig 1 and Tetlock, with the two figure lines from one framework so one witness plus one low-overlap world witness).**

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

Tetlock 2020, in a human-cognition field with no shared evidence pool with management strategy, reports that *"subject-matter experts don't know as much as they think they do about the future. They are miscalibrated."* He reports that the better forecasters displayed *"Active open-mindedness"*, which is *"your willingness to treat your beliefs as testable hypotheses and probabilistic assertions, not dogmatic certainties."* He adds that *"One of the things they are really good for is generating interesting questions. I'm not so sure they're good at generating the answers."* These are low-overlap corroborations of F1, F3 and F9: the usable product of foresight is a plural, refusable shape, not a settled name, and a pool of agreeable forecasters is one witness wearing many names. This corroborates the mechanism, not the firm-level fact.

**Refuter:** a pool of forecasts drawn from one evidence set that prospectively and per firm predicts which named capability will matter, with calibration confirmed at t+Δ. Under Fig 2 :40 that agreement carries zero verdict weight; if it nevertheless holds, the witness rule needs re-census.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per firm and per capability slot, never a market average | general | Fig 1 :19, :22 | figure-derived |
| The future market is the anchor, not internal scenario scores | general | Fig 2 :29, :35 | figure-derived |
| The question is a union of reaching a shape and maintaining contact | general | Fig 9 :54, :55, :57 | figure-derived |
| The specific capability is unreachable at decision time | general, specified for firms | Fig 6 :27, Fig 8 :32, Fig 13 :118 | triangulated F2 |
| Reach at t returns a shape, not a name | general | Fig 13 :133, Fig 9 :32 | triangulated F3 |
| The break is usually at vocabulary and objective | specified | Fig 3 :19, :24, :29 | single-source F4 |
| Same-closure foresight is a mirror chain | specified | Fig 7 :12, :13, :36, :37 | triangulated F5 |
| Capability valence is relative to the future residual | specified | Fig 11 :49-51, Fig 12 :119 | triangulated F6 |
| Reach renews only by contact with a differing closure | general, specified for firms | Fig 6 :14, :23, Fig 8 :45 | triangulated F7 |
| A forecast carries an irreducible round-trip gap | general | Fig 4 :30, :31 | triangulated F8 |
| Agreement in one evidence pool is not corroboration | general | Fig 2 :35, :40, :42 | triangulated F9 |
| Which named capability will win | not stated | none | gap: unreachable at decision time, verdict not silence |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A prospective, per-firm, per-capability prediction issued at t names the capability, carries a source gate and a shadow test, and is confirmed by the market at t+Δ across repeated slots (breaks F2 and F3).
2. A firm renews its reach solely inside its own closure across a documented change of habitat and still passes the ground test (breaks F7 and Fig 8 :32).
3. A capability's measured valence is invariant across a documented change of residual (breaks F6, Fig 11 :49-51).
4. A same-closure foresight process keeps producing new, ground-verified readings over two decades without import (breaks F5, Fig 7 :36).
5. A single lever restores both union conditions in both failure types and leaves no categorically different residue (breaks F1, Fig 9 :57).
6. A forecast carried across the membrane matches the realized market with no measurable gap across repeated slots while valence changed (breaks F8, Fig 4 :30).
7. Fig 6 :21 or Fig 8 :32 fails inside a genuinely closed set, or Fig 13's set is derived from five of its members (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of foresight (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the union conditions separate in every report. A blended "foresight maturity score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Bind the sought-for shape as an ordinary term before any scenario exercise, and write the refuter down before the run (Fig 5 :65). A frame cannot check the direction of its own question.
4. Treat any named capability as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27, Fig 13 :133).
5. Select the next room against the residual the last one surfaced, and require it to differ from the last (Fig 7 :36, :42). Scenario sets that agree are a mirror chain.
6. Use the foresight and strategy literature as one budget filter and one witness, not as the verdict (Fig 2 :31, :40). Tetlock is the low-overlap second witness for the mechanism only.
7. Measure the round trip and report the gap R_T rather than the forecast's confidence (Fig 4 :30, :31).
8. Stop at the shape. Do not name which capability a firm should own; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all opened 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*
- The Hard Problem essay confirms the instrument requirement: *"the instrument is speaking only about what it measured, it cannot comment on the source."* A forecast is such an instrument; the capability is the source it cannot name.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to read Fig 9 :6 literally as the future-market verdict | **Retracted, strain S1** | Fig 9's closure is at one time; this residual crosses a time membrane. Re-census gave Fig 6 :27 and Fig 4 :30 the governing role. Fig 9 :6 now governs only the question of whether more search at the same reach is worth it. No verdict changed |
| Planned to answer "firms cannot predict at all" | **Narrowed to `unreachable` at decision time** | Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* The name is unreachable; the shape is reachable |
| Treated "shape, not a name" as a ban on naming any capability | **Corrected** | The README's phrase governs a missing primitive. "Dynamic capabilities" is a binding from the business frame onto Γ, not a new primitive. Recorded as an import with zero verdict weight until a source gate is shown |
| Treated the strategy pool (Teece, Kleiner, Semke and Tiberius, Scoblic) as four corroborations | **Retracted as four witnesses, kept as one** | Fig 2 :31, :40. Tetlock and MathisonSlee are the low-overlap witnesses, for mechanism only |
| Read Tetlock's "miscalibrated" as proof that foresight is worthless | **Narrowed to mechanism-shape corroboration** | Tetlock himself rejects that inference: *"I think this led to the misconception that I think subject-matter experts are useless. I don't believe that."* Used for F1, F3 and F9 only |
| Wanted to call Fig 6 :27 a `general` law about all markets | **Kept `general` for reachability, `specified` for firms** | No market measurement pays for the firm-level version here |
| Read Fig 7 :37 as a calibrated equation | **Strained, kept as a product structure** | The figure supplies two factors and no numbers. Mode `specified`, not a formula to fit |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 9 and the Library of Babel essay have low topical overlap but share the framework; one external witness |

**Strains sent to the log:** S1 (Fig 9 :6 applied literally to a time-crossing residual), resolved by re-census; S2 (calling the future market "the ground" while customer preference plainly moves), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground is what settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of reaching a shape and maintaining contact and reach, each with its own loop and instrument.
2. **What is the anchor?** The future market, named in Fig 2 :29 and not reachable at t. Not scenario consensus, not internal scores (Fig 1 :27).
3. **Can the named capability be predicted at t?** No. Fig 6 :27, Fig 8 :32, Fig 13 :118. Depth and genuine absence look the same from inside Γ.
4. **What is reachable instead?** A shape, not a name (Fig 13 :133, Fig 9 :32), bound as an ordinary term so it can be refused (Fig 5 :65).
5. **How does adaptation actually work?** Channel maintained (Fig 10 :24-29), reach renewed by import from differing closures (Fig 6 :23), next room selected against the surfaced residual (Fig 7 :36, :42).
6. **Why does the good capability turn bad?** Valence is relative to the future residual (Fig 11 :49-51); a catalyst may become spent (Fig 12 :119).
7. **What can be said at the stop?** A union of two conditions, a reachability verdict, a shape, and falsifiers. Not which capability wins, not a `grounded` answer. *"Unreachable is a verdict here, not a silence,"* (Fig 13 :134) and *"So a search that finds nothing is never a proof of absence."* (Fig 8 :39)

---

## 8. Updated verdict

The shape survives: **at decision time the specific capability that will matter is unreachable from the firm's current library, because depth and genuine absence look the same from inside that closure; foresight can return only the shape such a capability must have, together with a refuter; reliable strategy therefore keeps the union's two conditions separate (maintain a channel to a ground that pays, and keep moving reach outward through contact with closures that differ) so that when the future market settles, the firm can rebind, refit, or import rather than discover that a former strength changed sign.** The two conditions are kept separate, never averaged. Which named capability will win is a `gap` in the precise sense of Fig 13 :134, not a hidden answer and not a silence. Mode `specified` for firms, `general` for the reachability structure. No world source was allowed to flip a verdict; the conflicts were returned to the census and re-mapped. No unresolved strain remains after re-census.
