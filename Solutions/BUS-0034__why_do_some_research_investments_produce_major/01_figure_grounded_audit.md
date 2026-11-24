# Figure-grounded audit: BUS-0034, why some research investments pay and others do not

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, fetched 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the funder's belief about what technology or the market will need, formed from its own history and inherited priors (a research strategy, a prior program, a fashionable thesis).
- **a** is the investment: which question, instrument, team, duration, and closure contact to fund.
- **Γ(b,a)** is what the organization's library of knowledge, methods, routines, and tacit know-how predicts the investment will yield.
- **o′** is what the ground returns. There are two returns and they are not the same quantity: a settled result (nature pays) and a payment (the market pays).
- **s** is the project or program. R is indexed by project and by time, never averaged into an industry figure.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)

The phenomenon to explain is not the size of the investment but the variance of the outcome across slots: why does the gap between what an investment's library predicts and what the ground returns stay small and pay hugely in some slots, while in others a real result settles and still yields little commercial value, or nothing settles at all. An "average return on R&D" has already thrown away the signal (Fig 1 :22).

State the residual as: *why does a project slot sometimes produce a term that settles, composes, and is paid for, and sometimes produce a term that settles but cannot compose, or nothing that settles at all?* This is an effect description. It names no theory, no "talent", no "absorptive capacity", no "appropriability regime". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a conjunction of conditions whose holding keeps a project's R small all the way from prediction to payment, plus an instrument that discriminates a failure of one condition from a failure of another. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Both a measurement and a market are named anchors. Fig 2 :30: *"you push on it, it is not an anchor."* Management opinion, analyst consensus, publication counts, citation counts, and patent counts move when pushed; they are instruments at best. Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* The question is constitutively about commercial value, so the market is the legitimate anchor for the commercial half, and the experiment is the legitimate anchor for the settlement half. These are two grounds in one union, not one ground with two names.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: investment library Γ, action a, ground return o′, indexed by slot s and ordered by time t. It is a sequence rather than a set, so it carries the **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72). Both "major" and "commercial value" are **threshold** comparisons (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87; Operators table :48). It is not symmetric: investor and market are not interchangeable.
- **Symmetry.** "Major innovation" and "superior commercial value" are thresholds relative to alternatives, not absolute quantities (Fig 12 :85-89; Operators table :46-51). The outcome is asymmetric in time: a lost opportunity is not recovered by reversing the investment.
- **Scale.** Three scales are in view: the single project's step-by-step loop (one agent), the research organization with a shared library and *"something that ranks what they produce"* (Fig 4 :5), and the market or economy across years. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The kernel is the same at every size: *"Only the actors, the currency and the anchor change."* (Fig 4 :20). The transform is lossy, so the round-trip gap R_T must be measured rather than assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The project loop** (one agent, one scale) | researcher, instruments, the project's Γ | residual reduction, |φ| cost | yes: a settled experimental result, "a measurement, an experiment" (Fig 2 :29) | admitted |
| **D2 The research portfolio** (population) | PIs, teams, funders, reviewers, a shared library, something that ranks what they produce | funding, papers, citations, patents, influence | yes: the ground's settlement plus the market's payment; internal metrics are NOT anchors (Fig 1 :26-27) | admitted with caveat |
| **D3 The commercial ground** (market) | customers, adopters, competitors, owners of complementary assets | willingness to pay, adoption, profit | yes: the market, named in Fig 2 :29; legitimate because the question is constitutively about it (Fig 2 :36) | admitted |
| **D4 The temporal channel** (across years) | the organization's instruments, metrics, percepts | contact with the ground | yes: the ground, "the ground does not decay, the channel does" (Fig 10 :24) | admitted |
| **D5 The closure / import domain** | the organization's Γ and external frames whose closures differ: other disciplines, basic science, customers, startups, adjacent industries | reach, atoms imported, |φ| cost | yes: settlement, "then check it against the ground, then carry it up" (Fig 5 :32) | admitted |
| **X1 Visionary researcher genius as free-floating property** | the individual | talent | **no** anchor independent of the ground's verdict | not a domain yet |
| **X2 Spend level as sole cause** | the budget | dollars | spend is measurable, but it is a budget input and an average that destroys the per-slot signal (Fig 1 :22); it is a filter (Fig 9 :60) | absorbed as a filter, not a domain |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that people never matter. X2 is absorbed as a budget filter, not promoted to a cause: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* (Fig 9 :60).

### 1.3 Partition or union

D1 and D3 overlap: a settled result must still meet a paying market before there is commercial value. D2 and D4 overlap: contact with the ground is exercised inside the organization. D5 overlaps all of them, because a new atom can enter only through contact with a closure that differs. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1, settlement and contact.** Does the investment actually settle against a ground, and is the channel to that ground still reachable? Failure modes: no settlement, or channel decay (stale percepts, saturated metrics, pooled readings, Fig 10 :24-29).
- **C2, reach renewal.** Does a new atom enter from a closure that differs, so that a major term is composable at all? Failure modes: the organization composes forever inside its own closure (Fig 6 :21, Fig 8 :32).
- **C3, composition and payment.** Does the settled term compose into something the market pays for, and is the investor positioned to receive the payment? Failure modes: settling without composing (Fig 5 :69-70, Fig 12 :104), or the profit accruing to owners of complementary assets (a world-facing name for a failure class inside D3's currency, single-source for the business claim).

A project failing only C1 and a project failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The Library of Babel essay states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the funder read the technical and market signal?) to 2 vocabulary (does Γ have terms for what the opportunity affords?) to 3 objective (can it say what progress would count as, i.e. has it bound the sought-for shape?) to 4 planning (how to fund) to 5 learn and carry (name what worked, verify, carry up). The middle link, having terms for what a situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :111-115 says a vocabulary holding only ingredients can name a state and cannot name a route to one, and that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* Most R&D management effort lands above the break because that is where the measurements already exist (Fig 3 :29-30): spend, headcount, papers, patents. None of those says whether the link at 2 or 3 works.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not why it persists |
| 2 The Ground | market and measurement as named anchors; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer from project to portfolio to market |
| 5 Mint Pipeline | three guards as product; settlement is necessary not sufficient; "nothing new here" | governs whether a term is admitted and whether it composes |
| 6 Closure / Reachability | import is the only operator that moves the wall; inward vs outward vs budget | governs reach renewal (C2) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs persistence as a sequence of handoffs |
| 8 Union Surplus | closure idempotent; convergence vs import; residual first | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe residual first; filters vs witnesses | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick loss (C1 failure) |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; introduce not subtract | decisive for D1, D2, D5 |
| 12 The Bond | catalyst, cycle, isomer, functional group; arrangement is the substance | governs why a strength becomes a rigidity and how a term composes |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest-stop role only (strain S1) |
| Operators table | ⋛ threshold relation between two quantities; ¬ refutation | governs "major" and "commercial" as comparisons, and refusal before mint |
| Symbols table | R is the aim; the ground is the anchor; habitat is the field of contact | governs definitions |
| Formula | steps 2, 3, 5, 7; Direction; record and reach | governs refusal before mint, mode rule, honest stop |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate directly to "research inputs" only fit by calling funding a kind of energy and a researcher a kind of gradient. That is a strain, so Fig 13 does **not** govern research inputs. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1): *"Unreachable is a verdict here, not a silence"* and the set-closed/arrangements-not argument support the stop without naming physical primitives. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about research investments, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Outcomes are indexed per project, never as an average return on R&D

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap: agent slot vs leave/arrive).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)

An "average return on R&D" scores the portfolio with a quantity the portfolio produces. It is a budget instrument, not a witness (Fig 9 :60). The specified consequence: any claimed answer to BUS-0034 that is an industry average has already discarded the only signal that says which project lost contact and where.

**Refuter:** an averaged statistic that predicts, prospectively and per named project, which investment will be commercially major. If one exists, F1's methodological consequence is false.

**World bearing (secondary only):** Bloom, Jones, Van Reenen and Webb (AER 2020 / NBER 2017) report *"substantial heterogeneity across firms, but research productivity is declining in more than 85% of our sample."* That supports per-slot indexing (Fig 1 :19). Their other headline, *"Averaging across firms, research productivity declines at a rate of around 10% per year,"* is an average and is used here only as a filter for where to look, never as a witness for this or that project.

### F2: The anchor is the ground, not publications, citations, or patents

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 2 and Fig 1, low overlap: anchor triangulation vs frame-internal quantities).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"you push on it, it is not an anchor."** (Fig 2 :30)
> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

Publication and citation counts are exactly the "predicates minted and credibility accrued" that Fig 1 disqualifies. The market is the legitimate anchor here because the question is constitutively about commercial value. Fig 2 :37-38 adds the standing warning: *"instruments can be wrong on axes they do not measure."* Peer review is an instrument for "is this scientifically sound", not a verdict for "will this pay".

**Refuter:** an internal metric that predicts, prospectively and per project, which investment will be commercially major, with the prediction confirmed by the market. If one exists, F2's exclusion of internal metrics as anchors is false.

### F3: A major innovation needs an import, not more search inside the closure

**Mode: `specified`. Domain D5. Status: triangulated (Fig 6 and Fig 8, low overlap: operator that moves the wall vs idempotence of closure).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)

More money, more researchers, and more years spent inside the same Γ add search, not atoms. This is the figure's distinction between *underivable* and *unreachable-at-this-budget*: *"Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."* (Fig 8 :42). A portfolio that keeps funding the same closure confuses the two and imports an atom it did not need.

**Refuter:** a documented case in which more search inside a demonstrably fixed closure produced a genuine new atom, with the atom's absence from the original closure shown, not assumed. That breaks idempotence and F3 with it.

**World bearing (secondary only):** Cohen and Levinthal (Administrative Science Quarterly, 1990) argue that *"the ability of a firm to recognize the value of new, external information, assimilate it, and apply it to commercial ends is critical to its innovative capabilities."* This corroborates C2 from the management frame. It shares a citation pool with Teece and with the strategy literature, so it counts as one witness, not several (Fig 2 :31, :40).

### F4: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal so the external witness count is one).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The three conditions C1, C2 and C3 have different instruments:

- A C1 failure shows up as no settlement, or as saturated metrics and pooled readings with a bracket that no longer matches the residual (Fig 10 :26, Fig 7 :38).
- A C2 failure shows up as a closure that keeps handing itself the same room, no import, and a reach that stops moving while the library keeps growing (Fig 6 :21, Fig 7 :12).
- A C3 failure shows up as a term that settled and composes, yet the market does not pay the investor, or does not pay at all (Fig 2 :29, Fig 5 :69-70; Teece 1986, single-source for the business name).

A single lever, for example "increase research funding", clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55). This is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores all three conditions in all three failure types with no categorically different residue left over. That would collapse the union into a partition.

### F5: Settling is necessary but not sufficient for composition, and that is the shape of "little commercial value"

**Mode: `specified`. Domains D1, D3, D5. Status: triangulated (Fig 5 amendment and Fig 12, low overlap: mint pipeline sufficiency vs settled-molecule recursion).**

> **"settling is necessary for a term to be composed over, and it is not sufficient."** (Fig 5 :69)
> **"A term is settled when the ground pays for it. A term is usable when something can compose over it. Those are two conditions and this figure names one."** (Fig 5 :70)
> **"Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."** (Fig 5 :41)
> **"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."** (Fig 5 :48)
> **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"** (Fig 12 :104)

This finding is the closest figure-derived answer to the literal wording of the question. A research investment can produce a true, settled result (nature paid for the term) and still yield little commercial value, because the term did not become an atom that anything could compose over into a paying product. Conversely, a large volume of research activity that mints nothing may be behaving correctly: *"a system that is minting nothing may have nothing wrong with its minting"* (Fig 5 :41). What is owed in that case is an import or a better instrument, not more activity.

**Refuter:** a settled term that always composes into a commercially paid product with no further atom, no differing closure, and no complementary asset. If such a case is documented, Fig 5 :69-70 does not govern this domain and F5 falls to `general`.

**World bearing (secondary only):** Teece (Research Policy, 1986) writes that *"when imitation is easy, markets don't work well, and the profits from innovation may accrue to the owners of certain complementary assets, rather than to the developers of the intellectual property."* That is a world-facing name for a C3 failure, and it corroborates the separation of settlement from payment. It shares a pool with Cohen and Levinthal, so the two are one witness for the management frame.

### F6: The break is usually at the middle link, and R&D management measures above it

**Mode: `specified`. Domain D2. Status: single-source (Fig 3, with Fig 12 :111-115 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In research terms, the usual failure is not that the organization cannot plan or cannot spend. It is that it has no terms for what a changed technical or market situation affords and cannot say what would count as progress there. More planning and more budget land above the break (Fig 3 :29-30). F6 predicts that the highest-value diagnostic question is not "is this research program well managed?" but "at which link does its chain currently stop, and was that measured?"

**Refuter:** a documented research organization whose perception, vocabulary and objective links all measure as working and whose failure is located at planning or execution. That would falsify "usually at the middle" though not the dependency ordering.

### F7: Internal agreement is not evidence, and a repeated room is not progress

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 7 and Fig 2, low overlap: selection between rooms vs anchor triangulation).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)

A portfolio that keeps appointing the same reviewer type, running the same review, and rewarding the same routine is handing itself the same room. Agreement inside it compounds while evidence does not. This is the figure-grounded reading of a "success trap": not that the routine was bad, but that the organization stopped selecting between rooms. Fig 7 :42: *"The chain approaches the truth only as the world runs out of ways to refuse it."*

**Refuter:** a portfolio that keeps the same closure across two funding cycles and yet keeps producing ground-verified new readings of the market without importing any new atom. Under Fig 7 :36 that should be impossible; if observed, F7 is wrong.

### F8: The capability that produced past innovation can change valence, and novel combinations carry both failure and breakthrough

**Mode: `specified`. Domains D2, D3, D5. Status: triangulated with one low-overlap external witness (Fig 11 and Fig 12 for the mechanism; UC Berkeley evolution for an independent instance).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

The mechanism behind "core rigidity" stated in effect terms. A routine is a catalyst if it regenerates across uses and a spent part if it does not, and nothing in the routine's description records which. When the residual changes, a former benefactor becomes a malfactor without anything about the routine changing.

The low-overlap witness comes from evolutionary biology. UC Berkeley's Understanding Evolution defines exaptation as *"a feature that performs a function but that was not produced by natural selection for its current use"* and gives feathers, first co-opted for flight after arising for insulation, as the example. That is Fig 11 :49-51 and Fig 12 :119 observed in a field with no shared evidence pool with management strategy: current utility is not original function, and the value of a trait is relative to the residual it now meets. Fleming (Management Science, 2001) adds a second, economics-adjacent witness from patent data: *"Experimentation with new components and new combinations leads to less useful inventions on average, but it also implies an increase in the variability that can result in both failure and breakthrough."* That is the variance shape of a genuine import, and it corroborates C2 rather than a "more spend" story.

**Refuter:** a research capability whose measured valence is invariant across a documented change of the organization's residual. If no such change of valence can be found anywhere, F8 weakens to `general`.

### F9: The framework returns a shape, not the name of the winning project

**Mode: `general`. Status: figure-governed plus canonical usage rule.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)

Which specific project will pay is a `gap`, not a silence. The hard-problem essay gives the reason and the remedy: an instrument that reads a result *"cannot comment on the source"*, so *"It was proven wrong not by argument, but by the arrival of a better instrument."* What is owed for BUS-0034 is a discriminator that tells a failure of C1 from a failure of C2 from a failure of C3, not a list of favourite investments. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

**Refuter:** a figure line or a world source that names a specific project and has its prediction confirmed by the market. Until then the name is the searcher's own contribution and must be recorded as such.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| Outcomes are per project, never an R&D average | general | Fig 1 :19, :22 | figure-derived |
| The anchor is the ground (measurement and market), not internal metrics | general | Fig 2 :29, :36; Fig 1 :26-27 | figure-derived |
| Innovation is investment-and-habitat, not investment alone | specified | Fig 11 :39, :40 | triangulated F1 |
| Quick loss is channel failure, not ground decay | specified | Fig 10 :24, :26; Fig 7 :37-39 | triangulated (BUS-0001 cross-check) |
| A major innovation needs an import from a differing closure | specified | Fig 6 :14, :21, :23; Fig 8 :32 | triangulated F3 |
| Settling is necessary but not sufficient for composition | specified | Fig 5 :69, :70; Fig 12 :104 | triangulated F5 |
| The question is a union of three conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| Repeated closure stops progress | specified | Fig 7 :12, :13, :36 | triangulated F7 |
| A capability changes valence when the residual changes | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F8, one low-overlap world witness |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F6 |
| Which particular investment will pay | not stated | none | gap: the framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A project's outcome is unchanged across a habitat substitution that removes the ground's payment for what it does (breaks F1, Fig 11 :39-40).
2. An internal metric predicts, prospectively and per project, which investment will be commercially major, confirmed by the market (breaks F2, Fig 1 :26-27).
3. More search inside a demonstrably fixed closure produces a genuine new atom (breaks F3, Fig 8 :32).
4. A single lever restores all three conditions in all failure types and leaves no categorically different residue (breaks F4, Fig 9 :57).
5. A settled term always composes into a paying product with no further atom and no complementary asset (breaks F5, Fig 5 :69-70).
6. A research capability's valence is invariant across a documented change of residual (breaks F8, Fig 11 :49-51).
7. Fig 13's six terms are derived from five of them, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of innovation (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the three conditions separate in every report. A blended "innovation score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat any list of research attributes (talent, spend, facilities, process) as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Use the innovation literature as a budget filter and as one corroborating witness, not as the verdict. Bloom, Cohen and Levinthal, Teece and Fleming share parts of the same economics and management pool (Fig 2 :31, :40); the Berkeley evolution page is the one genuinely low-overlap witness.
6. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Do not name which project a funder should back; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*, *Decoding Tacit Knowledge* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*
- The tacit-knowledge essay confirms the outreach order: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term physical set to research inputs | **Retracted, strain S1** | Only fit by renaming spend as energy and researchers as gradients. Re-census: Fig 13 governs the physical substrate, not a research portfolio. It remains only as the honest-stop argument |
| Treated Bloom et al. decline in research productivity as a verdict about particular projects | **Narrowed to a filter and one witness** | It is an average across firms (Fig 1 :22, Fig 9 :60); it supports per-slot indexing but cannot name a slot |
| Treated Cohen and Levinthal and Teece as two independent corroborations | **Narrowed to one management evidence pool** | Shared citations and frame (Fig 2 :31); agreement from a pool is one witness |
| Planned to name "absorptive capacity" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. The phrase is a management-pool binding, recorded as such |
| Wanted to call the market "the ground" without restriction | **Narrowed by Fig 2 :29-30 and Fig 11 :73** | The habitat updates, the ground is what settles and does not. The market is the anchor for the commercial half only |
| Treated "commercial value" as one scalar | **Marked a union and unbundled into C1, C2, C3** | Fig 9 :54, :55, :57; the Berkeley exaptation case shows that present utility and original function come apart |
| Read "research output" metrics as evidence for the answer | **Retracted as witnesses, kept as filters** | Fig 1 :26-27; those are quantities the frame also produces |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 1 and Fig 9 are two figures, but both are framework-internal; triangulation here means low topical overlap, not independent evidence pools |
| Appropriability (who captures the profit) as a fourth domain | **Marked a world-facing failure class inside D3** | It is a distribution of the market's currency among frames, not a new anchor; Teece is single-source for the business name |

**Strains sent to the log:** S1 (Fig 13 applied to research inputs), resolved by re-census; S2 (calling the market "the ground" while customer preference visibly moves), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground is what settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of settlement and contact, reach renewal, and composition and payment, each with its own instrument.
2. **What is the anchor?** The measurement and the market, named in Fig 2 :29 and legitimated by Fig 2 :36. Not consensus, not citation counts (Fig 1 :27).
3. **Is the answer in the investment alone?** No. Fig 11 :39-40. Innovation is investment-and-habitat.
4. **How does little commercial value happen?** Channel decay (Fig 10 :24-29), settling without composition (Fig 5 :69-70, Fig 12 :104), no import (Fig 6 :21), or payment captured elsewhere (Teece 1986, single-source).
5. **How does a major innovation happen?** Differing rooms selected against the surfaced residual (Fig 7 :36), import moving the wall outward (Fig 6 :23), and the settled term becoming an atom for the next level (Fig 12 :104).
6. **Why does the good thing turn bad?** Valence is relative to the residual (Fig 11 :49-51); a catalyst may become a spent part (Fig 12 :119).
7. **What can be said at the stop?** A shape and three conditions with falsifiers. Not which project, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a research investment yields a major, commercially paid innovation when its channel to a paying ground stays reachable and a term actually settles, its reach is renewed by contact with closures that differ so a new atom can enter and compose, and the settled term composes into something the market pays the investor for. It yields little commercial value when any of these fails, and the very capability that produced past successes can change valence when the residual changes.** The three conditions are kept separate, never averaged. Which specific investment will pay is a `gap`, not a silence: the framework returns a shape, and the instrument that would discriminate the three failures is not held here. Mode `specified`. No world source was allowed to flip a verdict; the one genuine conflict (Bloom's averaging) was returned to the census and re-mapped as a filter. No unresolved strain remains after re-census.
