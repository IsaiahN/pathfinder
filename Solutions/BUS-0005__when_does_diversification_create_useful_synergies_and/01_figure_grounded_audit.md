# Figure-grounded audit: BUS-0005, when diversification pays and when it overloads

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, fetched 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the corporate center's belief about which businesses will pay, formed from its own history and inherited priors.
- **a** is the diversification action: acquire, enter, share an activity, transfer a skill, create a division.
- **Γ(b,a)** is what the firm's library of business units, routines and assets predicts will happen.
- **o′** is what the market actually returns: unit survival, share, profit, and corporate valuation.
- **s** is the business unit, proposed or existing. R is indexed by unit and by time, never aggregated into one synergy score.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is the **sign of the change in R when a unit is added**. Sometimes the union of two units pays at a level neither pays alone. Sometimes the same kind of addition raises R across the whole portfolio. A frame that predicts all additions are equally synergistic, or that a achieved synergy simply persists, has a residual here.

State the residual as: *why does adding a business unit lower the gap between what the portfolio predicts and what the market returns in some cases and raise it in others?* This is an effect description. It names no theory, no "synergy", no "fit", no "core competence", no "span of control". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction keeps a diversification union paying, plus an instrument that discriminates a failure of one condition from a failure of the other. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The market and the capital market valuation are explicitly named anchors. Fig 2 :30: *"you push on it, it is not an anchor."* Internal synergy narratives, "strategic fit" claims, analyst enthusiasm and management opinion move when pushed; they are instruments at best. Viable anchor: realized per-unit return, survival and market valuation.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: firm-library Γ, action a and market return o′, indexed by slot s and ordered by time t. It is a sequence rather than a set, so it carries an **ordered** bond (`→`, Fig 12 :72: *"A then B; B needs A to have happened"*). "Useful" is a **comparison** bond (`⋛`, Fig 12 :87: *"a threshold relation between two quantities"*), because the combined value is compared against the sum of standalone values. It is not symmetric: unit and market are not interchangeable.
- **Symmetry.** "Synergy" is a threshold relative to the standalone alternatives, not an absolute quantity. Diversification is asymmetric in time: a failed entry is not undone by reversing the acquisition, because the habitat has changed (Fig 11 :66-67: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."*).
- **Scale.** Three scales are in view: the single business unit's step loop, the population of units with a shared library and *"something that ranks what they produce"* (Fig 4 :5), and the membrane between them. The membrane is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The business-unit loop** (one agent, one scale) | unit managers, routines, Γ_unit | actions and residual reduction | yes: realized market return on the unit's actions | admitted |
| **D2 The portfolio habitat** (population) | business units, competitors, customers, capital markets | survival, share, valuation, capital allocation | yes: customer choice and capital market valuation; the market as ground (Fig 2 :29) | admitted |
| **D3 The synergy composition** (union of units) | atoms (businesses, capabilities, routines) and bonds (sharing, transfer) | reach, union surplus, |φ| cost | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The organizational membrane** (design) | corporate center, management layer, methods and head starts | methods crossing up, head starts down, R_T | yes: the round-trip gap, *"So take the round trip and measure the gap"* (Fig 4 :30) | admitted |
| **D5 The temporal channel** (across the diversification) | instruments, metrics, percepts | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "Synergy" as a free-floating property** | the deal | a synergy number | **no** anchor independent of the combined-versus-standalone measurement | not a domain yet |
| **X2 "Management quality" as sole cause** | the center | skill | measurable only as the controller's operation, already inside D1 and D4 | absorbed |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that synergy never exists.

### 1.3 Partition or union

D1 and D3 overlap: Γ sits inside the unit loop, so their overlap is a compound. D2 and D4 overlap: the membrane operates inside the habitat, so that overlap is a second compound. D4 and D5 overlap: the channel is exercised by the membrane. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **(C1)** the union has a genuine, aimed, ground-settled surplus, meaning the closures of the two units differ at the evidence level, the bond is priced, and a residual was described before a frame was chosen; **(C2)** the membrane can carry the composition, meaning methods cross up, head starts come down, R_T is measured, and the channel to the ground stays reachable and unpooled. A firm failing only C1 (paper synergy, "two names for one frame") and a firm failing only C2 (real surplus, unmanageable) are not different degrees of one failure; they are different compounds and need different instruments. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the center read the market response per unit?) → 2 vocabulary (does Γ have terms for what the added business affords and what would count as progress there?) → 3 objective (can it state the comparison that would count as synergy?) → 4 planning → 5 learn and carry. The middle link, having terms for what the new situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :111-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most diagnosis effort lands above the break because that is where the measurements already exist (Fig 3 :29-30): segment P&L is easy, a term for what the new business affords is not.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not why it moves |
| 2 The Ground | market is a named anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | **decisive for "harder to manage"** |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a synergy term can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs reach renewal inside a portfolio |
| 7 Room Chain | same closure handed along; fidelity × ground pressure | governs repeated-room failure after an acquisition |
| 8 Union Surplus | blend, undirected union, triangulation; low overlap surplus | **decisive for "useful synergies"** |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick overload and pooled readings |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for where synergy lives and why strengths flip |
| 12 The Bond | isomer, catalyst, two currencies; arrangement is the substance | governs what the surplus is made of and what it costs |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop only (strain S1, re-census) |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "business units" (calling a unit a kind of space, capital a kind of energy and a shared brand a kind of gradient) only fit by renaming. That is a strain, so Fig 13 does **not** govern diversification composition. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). A second strain arose when the business literature's "related diversification is better" met Fig 8's "low overlap creates surplus"; re-census R1 in section 6 resolves it by separating SIC code relatedness from closure difference. No unresolved strain remains.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about diversified firms, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Synergy is a union surplus where closures differ, not a sharing of names

**Mode: `specified`. Domains D3, D2. Status: triangulated (Fig 8 union surplus and Fig 12 bond/isomer, low topical overlap: union structure vs composition structure).**

> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)
> **"Composition crosses the boundary between them, and that surplus is where imports live."** (Fig 8 :46)
> **"Independence is one quantity read twice."** (Fig 8 :47)
> **"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."** (Fig 8 :48-49)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)

The useful case is not "the two businesses are related" in the label sense. It is that their closures differ: they draw on different evidence, hold different terms for what the market affords, and each reaches an o′ the other cannot reach alone. The surplus is a bond that crosses between them (Fig 8 :46). Two units with the same atoms arranged differently are isomers under Fig 12 :117, which is why a resource inventory alone cannot predict the surplus. Porter 1987 supplies the business-pool name: the successful route is *"transferring skills and sharing activities"* between units whose value chains actually interrelate, not *"portfolio management"*. That is a corroboration from one evidence pool, not a second independent witness.

**Refuter:** a documented pair of units whose closures are demonstrably the same (same evidence pool, same terms, one frame wearing two names by the Fig 8 :49 test) and whose combined value nevertheless exceeds the sum of standalone values persistently under a source-discriminating measurement. If observed, F1 is false.

**World bearing (secondary only):** Berger and Ofek 1995 find a *"13% to 15% average value loss from diversification"*; Iversen 2000 attributes synergy to *"Sharing of indivisible assets whose acquisition cost are amortized over multiple uses"*. Both are consistent with a surplus that must be real and priced, but neither measures closure difference, so neither pays for F1.

### F2: The surplus must be aimed by a described residual and priced, or the union is mute

**Mode: `specified`. Domain D3. Status: triangulated (Fig 8 undirected-union collapse and Fig 12 pricing, distinct roles).**

> **"closures differ, so a surplus exists"** (Fig 8 :19) / **"nothing was aimed; the union is mute"** (Fig 8 :21)
> **"A bond costs what it could have been, and nothing more."** (Fig 12 :99)
> **"The three guards are a product, not a checklist."** (Fig 5 :33)
> SUPPORT `|R⁺_s| > 0 for some s` before the search; **"gated by a product; any factor at zero forces inertness"** (Formula step 3)

A differing closure is necessary but not sufficient. Without a described residual, a union with differing closures is *"mute"*: it may have a surplus, but nothing aimed it, so nothing can recognise or price it. Porter 1987 reports that companies talk *"merely of such vague notions as 'synergy' and 'corporate fit'"* and observes that *"imagined synergy is much more common than real synergy"*. That is the business-pool description of an undirected union with no priced bond. The framework's rejection is structural: a free bond carries nothing, and the acceptance test is a bargain (Fig 5 :42-44), not a narrative.

**Refuter:** a diversification with no stated residual and no priced bond that nevertheless pays at the ground prospectively, per unit, after a control for selection. That would break the product gate and F2 with it.

### F3: High-overlap additions are "two names for one frame" and add cost, not surplus

**Mode: `specified`. Domains D3, D2. Status: triangulated (Fig 8 blend collapse and Fig 2 independence rule).**

> **"same atoms, different names"** (Fig 8 :13) / **"their union adds nothing"** (Fig 8 :14) / **"two names for one frame"** (Fig 8 :15)
> **"vocabulary, never an atom"** (Fig 8 :5)
> **"Independence, between two frames, is how little they draw on the same evidence."** (Fig 2 :31)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)

The blend collapse adds vocabulary and no atom. "We already have a sales force, so the new unit can use it" is a new name for an existing frame if both units range against the same evidence and hold the same terms. The correction is not to avoid sharing but to ask whether the sharing carries a bond that the operands do not (Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*).

**Refuter:** two units with identical evidence pools and identical terms whose union still produces a new, ground-verified term not derivable from either alone. Under Fig 8 :32 closure is idempotent; if observed, F3 is false.

### F4: "Harder to manage" is channel failure and membrane overload, not a decay of the market

**Mode: `specified`. Domains D4, D5. Status: triangulated (Fig 10 ground maintainer and Fig 4 membrane, low overlap: channel vs scale transform).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :25-26)
> **"the output is not a verdict, it is you have lost touch"** (Fig 10 :27-28)
> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)
> **"The transform between scales loses information, and that is the point."** (Fig 4 :27)
> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)

Adding units adds handoffs across the membrane. Each handoff loses information; if the center carries up recordings instead of methods (*"A recording carried upward looks like knowledge and is a description of one occasion"*, Fig 4 :25), it can replay a past success and cannot produce a new one, and the R_T gap is never measured. Metrics saturate and readings get pooled (Fig 10 :26), which is the firm-level version of aggregating across slots (Fig 1 :22). Brooks 1975 supplies a low-overlap witness from software engineering: *"Adding manpower to a late software project makes it later"*, because, in Brooks's words, *"they could not coordinate"* once the teams could not talk with each other. Simon 1962 supplies a complex-systems witness: *"Intra-component linkages are generally stronger than intercomponent linkages."* A manageable hierarchy is nearly decomposable; diversification that makes intercomponent linkages dominate is the named failure.

**Refuter:** a diversified firm where the number of units doubles while communication load per unit and metric pooling do not increase, R_T stays measured and small, and R stays low. Under F4 that should be impossible; if observed, F4 is false.

### F5: The composition costs in two currencies that do not add

**Mode: `general` with a `specified` consequence for diversification decisions. Domain D4. Status: triangulated (Fig 12 two-currency rule and Fig 5 acceptance bargain).**

> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds."** (Fig 12 :126)
> **"Summing them into one figure is the error this names, not the fix for it."** (Fig 12 :130)

A diversification story prices bits: the synergy narrative, the resource list, the strategic-fit deck. Running it prices actions: the integrations, audits, board meetings and site visits needed to find out whether the story holds. They are in different units. A single "synergy score" that adds them is the named error, not the fix. The specified consequence: any check that asks "is this diversification worth it?" without pricing both currencies has already made the mistake F5 names.

**Refuter:** a single prospective metric that predicts both the description cost and the verification cost of a diversification move and is confirmed at the ground. If one exists, the two-currency claim is false for this domain.

### F6: The strength that gave the first business its win can become the new unit's rigidity

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 valence and Fig 12 catalyst, low overlap).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

A capability that made the original business win is a catalyst only if it regenerates across uses. When the new unit changes the residual, the same capability can become a malfactor without anything about it changing. This is the figure-grounded form of "core rigidity" applied to diversification, and it is stronger than the label because it says the valence is a relation, not a property. Angeler et al. 2018 supply a low-overlap witness: *"the higher the redundancy of functional traits within and across scales, the higher the ability of the ecosystem to cope with disturbances"*, where redundancy and response diversity are relations to a disturbance, not fixed goods.

**Refuter:** a capability whose measured valence is invariant across a documented change of residual caused by a diversification. If no such flip can be found anywhere, F6 weakens to `general`.

### F7: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay; the essay is framework-internal, so the external witness count is one).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The two conditions have different instruments:

- A **C1 failure** shows up as "two names for one frame" (Fig 8 :49), a mute union (Fig 8 :21), no priced bond (Fig 12 :99) and no described residual. The fix is to describe R and find a differing closure, not to buy more units.
- A **C2 failure** shows up as pooled readings, lost touch (Fig 10 :26-28), intercomponent linkages dominating (Simon 1962), unmeasured R_T (Fig 4 :30) and methods not crossing up. The fix is membrane design, not another acquisition.

A single lever, for example "acquire more adjacent businesses", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). F7 is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions in both failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F8: The break is usually at the middle link, not at planning

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111-115 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In diversification terms, the usual failure is not that the center cannot plan the integration; it is that it has no terms for what the acquired situation affords and cannot say what would count as progress there. Segment P&L (link 1) has an instrument; a term for the new business's affordances (link 2) usually does not. F8 predicts that the highest-value diagnostic question is not "was this a good acquisition?" but "at which link does the combined chain currently stop, and was that measured?"

**Refuter:** a documented diversification whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F9: Conflict between the business literature and Fig 8, and how it was resolved

**Mode: `general`. Status: figure-governed; re-census R1 in section 6.**

Berger and Ofek 1995 report that the *"value loss is smaller when the segments of the diversified firm are in the same two-digit SIC code"*, and Porter 1987 recommends related diversification through shared activities and transferred skills. Read naively, that conflicts with Fig 8 :47-49, where low overlap creates surplus and high overlap is "one frame wearing two names". A conflict between world and figures sends the derivation back to the census; it never flips the verdict (Fig 2 :35, *"Alignment is triangulation, not negotiation"*).

Re-census R1 resolves it. Fig 8 :50 says *"shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."* SIC code is an atom-level label, not a measure of evidence overlap. Two units in the same SIC code can hold different closures and reach the same atom by convergence, giving a real surplus at maximum independence. Two units in different SIC codes can draw on one evidence pool (the same management fashion, the same capital source, the same consulting model) and be one frame wearing two names, with no surplus. So "relatedness" in the literature is a proxy for closure difference, and the figure's variable is closure difference itself. The verdict is unchanged; the proxy is demoted to a filter for the budget (Fig 9 :60).

Lamont and Polk 2002 use exogenous shocks: *"exogenous changes in diversity, due to changes in industry investment, are negatively related to firm value"*. That design buys independence from the endogeneity that plagues the discount literature, but it still measures an average effect, not a named unit (Fig 1 :22). It corroborates the cost side of the shape without deciding which unit fails.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per unit, never a corporate synergy average | general | Fig 1 :19, :22 | figure-derived |
| The market is the anchor, not internal fit claims | general | Fig 2 :29, :35 | figure-derived |
| Synergy is a union surplus where closures differ | specified | Fig 8 :45-49, :47 | triangulated F1 |
| A differing closure needs a described residual and a priced bond | specified | Fig 8 :19-21; Fig 12 :99; Fig 5 :33 | triangulated F2 |
| High-overlap additions add vocabulary, not atoms | specified | Fig 8 :5, :13-15; Fig 2 :31 | triangulated F3 |
| Overload is channel failure and lossy membrane transfer | specified | Fig 10 :24-29; Fig 4 :22, :25, :27, :30 | triangulated F4 |
| Two currencies, bits and actions, do not add | general | Fig 12 :125-130 | figure-derived |
| A winning capability can flip to a rigidity | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F6 |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F8 |
| Which specific businesses will create the surplus | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A pair of units with demonstrably the same closure (one evidence pool, one frame wearing two names by Fig 8 :49) produces a sustained, ground-settled surplus under a source-discriminating measurement (breaks F1 and F3).
2. A diversification with no described residual and no priced bond pays prospectively, per unit, after a control for selection (breaks F2, Fig 8 :21).
3. The number of units doubles while communication load per unit and metric pooling do not increase, R_T stays measured and small, and R stays low (breaks F4, Fig 10 :24, Fig 4 :30).
4. A single prospective metric predicts both the description cost and the verification cost of a diversification move and is confirmed at the ground (breaks F5, Fig 12 :125-130).
5. A capability's measured valence is invariant across a documented change of residual caused by diversification (breaks F6, Fig 11 :49-51).
6. A single lever restores both conditions in both failure types and leaves no categorically different residue (breaks F7, Fig 9 :57).
7. Fig 8's idempotence fails inside a closed set, or Fig 12's two currencies are shown to be commensurable (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of corporate strategy (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the two conditions separate in every report. A blended "synergy score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Describe the residual before choosing the target (Fig 8 :53, *"Residual first, frame second"*). Ask what the new unit affords and what would count as progress there, then name the frame.
4. Price the bond and both currencies, not just the story (Fig 12 :99, :125-130).
5. Measure the round trip R_T across the membrane (Fig 4 :30). If methods are not crossing up, the center is replaying, not managing.
6. Treat SIC relatedness as a filter for where to look, not as a witness for the surplus (Fig 9 :60; re-census R1).
7. Stop at the shape. Do not name which businesses will win; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check, strains and re-census log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the three essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status and the metamerism rule: *"the instrument is speaking only about what it measured, it cannot comment on the source"* and *"The answer is unreached until a better instrument exists"*.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six-term physical substrate to business units | **Retracted, strain S1** | Only fit by renaming units as kinds of space and capital as energy. Re-census: Fig 13 governs the physical substrate, not a firm's Γ; it is used here only for the honest stop |
| Read "related diversification is better" (Berger and Ofek; Porter) as conflicting with Fig 8 low-overlap surplus | **Re-census R1, not a strain** | SIC code is an atom-level label, not evidence overlap. Fig 8 :50 (*"shared atoms are not the signature"*) permits differing closures at the same SIC code. Verdict unchanged; relatedness demoted to a filter |
| Treated the diversification discount as evidence for the answer | **Retracted as a witness, kept as a filter** | Fig 9 :60; an average across units is a pooled reading (Fig 1 :22) |
| Planned to name "core competence" or "dynamic capabilities" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Porter's phrase is a business-pool binding, recorded as such |
| Wanted to call Fig 11 :40 a `general` law about all diversified firms | **Narrowed to `specified`** | Structural claim; no market measurement pays for the firm-level version here |
| Used Brooks 1975 and Simon 1962 as firm-level corroboration | **Narrowed to mechanism-shape corroboration** | Both are different strata (software teams; hierarchies generally). Fig 4 :20 requires the anchor to be re-named at the new scale |
| F10 row "which specific businesses will create the surplus" | **Marked `gap`** | The source essay: a reading *"cannot comment on the source"*; what is owed is a discriminator, not a name |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 8 and Fig 12 are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to business units), resolved by re-census to the honest-stop role. No unresolved strain after re-census. R1 was a genuine conflict between world and figure and was resolved at the census by distinguishing atom labels from closure difference, not by softening Fig 8. Per the canonical rule, a reading that makes one figure contradict another has misidentified its domain.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of closure-surplus (C1) and membrane capacity (C2), each with its own loop and instrument.
2. **What is the anchor?** The market and capital market valuation, named in Fig 2 :29. Not fit claims, not internal metrics (Fig 1 :27).
3. **Where does synergy live?** In the union, not in the business list. Fig 8 :45-47; capability is agent-and-habitat (Fig 11 :39).
4. **When is the union mute?** When closures do not differ (Fig 8 :49) or no residual was described (Fig 8 :21).
5. **When does it overload?** Channel decay and lossy membrane transfer: saturated metrics, pooled readings, lost touch (Fig 10 :24-29), unmeasured R_T (Fig 4 :30), intercomponent linkages dominating (Simon 1962).
6. **Why does the good thing turn bad?** Valence is relative to the residual (Fig 11 :49-51); a catalyst may become spent (Fig 12 :119).
7. **What can be said at the stop?** A two-condition shape with falsifiers, not which businesses to buy. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **diversification creates a useful surplus when the added unit's closure differs from the portfolio's at the evidence level, the union is aimed by a described residual and its bond is priced, and the organizational membrane can carry the composition with methods crossing up, head starts coming down, channel reachable and R_T measured; it makes a company harder to manage when either condition fails, and the capability that produced the first win can change valence when the new residual arrives.** The two conditions are kept separate, never averaged. Which specific businesses occupy the slots is a `gap`, not a silence: the framework returns a shape, and the source-discriminating instrument that would name the winner is not held here. Mode `specified`. No world source was allowed to flip a verdict; the one genuine conflict (related diversification vs low-overlap surplus) was returned to the census and re-mapped. No unresolved strain remains after re-census.
