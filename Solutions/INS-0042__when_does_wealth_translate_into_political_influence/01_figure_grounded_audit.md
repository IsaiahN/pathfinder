# Figure-grounded audit: INS-0042, wealth and political influence

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the institutional question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o'| per slot s (Formula step 1; Symbols table, `R`, `s`). The phenomenon to explain is not the level of political influence but **the event of conversion**: in some slots a stock of wealth becomes a standing capacity to determine o', and in others it does not. Call the event `C_s`. Observed: `C_s` varies across slots and across time within a polity. A frame that predicts conversion is a smooth function of wealth size, or that institutions are barriers of greater or lesser strength, has a residual here.

State the residual as: *when does the gap between what a wealth holder's actions predict and what the political slot actually returns close into a standing capacity, and what property of a slot keeps it open?* This is an effect description. It names no theory, no "capture", no "rent seeking", no "elite domination". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a conjunction of conditions whose presence closes `C_s`, plus an instrument that discriminates three failure modes: (i) the anchor moved when wealth pushed it, (ii) the import never crossed the closure boundary, (iii) the feedback was not broken so influence regenerated wealth. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* Applied here: a recorded vote count, a published judgment, a published budget allocation, an enforcement record. Opinion surveys about "who really runs this city" and expert reputation rankings move when pushed; they are instruments at best. Crucially, a political institution can *be* the thing that settles the question in a slot, and can also be moved by wealth. Those two properties cannot both hold. That contradiction is the entire subject of this audit, not a defect in it.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry and scale of R

- **Arity.** R is a three-place relation (actor Γ, action a, political return o'), indexed by institutional slot s and ordered by time t. "Conversion" adds a fourth quantity, the wealth stock W, so the object is a comparison (`⋛`: *"a threshold relation between two quantities"*, Fig 12 :87) between W and the standing capacity to determine o'. It is not a symmetric relation: wealth and political authority are not interchangeable operands.
- **Symmetry.** Conversion is asymmetric in time: a stock deployed once is not thereby spent (compare the catalyst, Fig 12 :119), and an achieved office is not recovered by reversing the action. Influence-to-wealth feedback is an ordered bond (`→`, *"A then B; B needs A to have happened"*, Fig 12 :72).
- **Scale.** Three scales are in view: the individual actor's step-by-step loop (Fig 4, one-agent panel), the population of actors with a shared library and *"something that ranks what they produce"* (Fig 4 :5), and the institutional membrane between an economic result and a political decision. The membrane is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T has to be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The wealth loop** (economic frame) | donors, firms, media owners, network members | money, access, organisational capacity | yes: a price, a balance sheet, an audited donation record (Fig 2 :29 names a market) | admitted |
| **D2 The political slot** (political frame) | legislators, regulators, judges, election administrators | votes, rules, rulings, budgets, enforcement | yes, conditionally: a recorded vote, a published judgment, a published allocation, provided it does not move when wealth pushes it | admitted |
| **D3 The institutional ground maintainer** (the would-be anchor) | constitutions, oversight bodies, disclosure rules, independent judiciaries, professional norms | constraint and legitimacy | yes, by office: *"the ground does not decay, the channel does"* (Fig 10 :24); the seat's job is to keep the anchor reachable | admitted, with a live failure mode |
| **D4 The habitat of contact** (where the two frames touch) | lobbyists, revolving-door staff, think tanks, media platforms, party finance channels | contact, introduction, cascade | yes: the habitat is enumerated from the world, *"You do not invent the list. You read it off the world"* (Fig 11 :48) | admitted |
| **D5 The verification frame** (the outside checker) | expert readers, journalists, oversight researchers | residuals and agreement | yes: the ground, never agreement; in this simulated run all seats draw on one evidence pool | admitted, independence zero in this run |
| **X1 "Money is power" as a free-floating property** | the wealthy actor | wealth | no anchor independent of the political slot's verdict | not a domain yet |
| **X2 "Culture explains everything"** | norms | legitimacy | measurable only as agreement inside a frame, which is a room, not an anchor (Fig 7 :35) | absorbed into D3/D4, not separate |

X1 fails the anchor test: wealth has no standing to determine a political outcome except through a slot that registers it. This is a structural exclusion, not a claim that wealthy people never matter. X2 is absorbed because agreement inside a frame cannot anchor a verdict about that frame.

### 1.3 Partition or union

D1 and D4 overlap: the wealth loop operates inside the habitat of contact. D2 and D3 overlap: the political slot is what the maintainer tries to keep anchored. D4 and D5 overlap: the verification frame is itself part of the habitat (media and expertise are actors on the residual). The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)

The unbundled conditions are: **(C1) an anchor failure** (the political slot moves when wealth pushes it), **(C2) a closure failure** (wealth's atom enters the political closure and is debited against its independence), and **(C3) a feedback failure** (influence regenerates wealth, so the loop closes). A slot failing only C1 and one failing only C3 are not different degrees of one failure: they are different compounds and need different instruments. Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the slot read the political response at all?) → 2 vocabulary (does the slot have terms for what wealth affords, and can it say what would count as progress against conversion?) → 3 objective (can it state what an un-captured outcome would look like?) → 4 planning (counterweights, disclosure, rotation, independent appointment) → 5 learn and carry. The middle link is the one with no instrument: Fig 12 :115 says *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* Most reform effort lands above the break, where measurements already exist (Fig 3 :29-30), which is why adding more transparency rules can leave `C_s` unchanged.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal metrics disqualified | governs how R is indexed; forbids the national average |
| 2 The Ground | anchor must not update; independence vs common pool | governs C1 and the witness rule; decisive |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | filter with a direction; methods up, head starts down; R_T | governs individual-to-institution transfer |
| 5 Mint Pipeline | three guards as a product; settlement; "nothing new here" | governs whether a new institutional term is licensed at all |
| 6 Closure / Reachability | import is the only operator that moves the wall, debited against independence | governs C2; decisive |
| 7 Room Chain | agreement compounds, evidence does not | governs public-opinion and expert-consensus claims |
| 8 Union Surplus | two frames reach what neither alone reaches; overlap negates redundancy | governs the union and the two-frame independence test |
| 9 Leave / Arrive | union vs partition; describe the residual before choosing a frame | governs the unbundling and the census itself |
| 10 Ground Maintainer | conventions that decide outcomes stop being conventions; declare stakes | governs D3 and the institutional failure mode; decisive |
| 11 The Habitat | valence relative to residual; introduction available, exclusion not; isolation as substitution | governs D4 and why reform is permanent work; decisive |
| 12 The Bond | catalyst, cycle, functional group, two currencies | governs C3 and the reuse of a single stock; decisive |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest-stop role only (see strain S1) |
| Operators / Symbols | ⋛ threshold comparison; → sequence; R per slot; ground is anchor | notation |

Strain test applied during this census: an early attempt to apply Fig 13's six physical terms directly to this question required calling wealth a kind of energy and influence a kind of gradient. That is a strain, so Fig 13 does **not** govern the wealth/influence composition. It is sent to the honest-stop role only (section 7, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about a political slot, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Conversion happens when the political anchor becomes movable, not when wealth gets larger

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 2 and Fig 10, low overlap: anchor rule vs convention rule).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"If it moves when you push on it, it is not an anchor."** (Fig 2 :30)
> **"no anchor; each updates on the others"** (Fig 2 :13)
> **"they converge, and what they converge on is whoever had the most influence"** (Fig 2 :15)

Fig 2's panel 1 is the structural description of a captured slot: with no anchor, the frames update on each other and converge on whoever had the most influence. Conversion is therefore not a quantity that increases smoothly with wealth; it is the event of a slot losing its anchor. Fig 2 :25 makes the test hard: *"pinned: it does not update on A or B."*

**Refuter:** in a named slot, vary wealth while holding the recorded outcome fixed, or show that the outcome changes with wealth while the putative anchor remains pinned by an independent instrument. If the outcome tracks wealth while the anchor is demonstrably pinned by another measure, the anchor reading is wrong for that slot.

**World bearing (secondary only):** Gilens and Page report *"economic elites and organized groups representing business interests have substantial independent impacts on U.S. government policy, while average citizens and mass-based interest groups have little or no independent influence."* This is a filter for where to look (Fig 9 :60), not a witness for this verdict: it is one data tradition, one evidence pool.

### F2: An institution that decides the outcome has stopped being an institution in the load-bearing sense

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10 and Seat Map :163, convention rule vs correlation valence).**

> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"Declaring a meaning does not ground it."** (Fig 10 :49)
> **"A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified."** (Fig 10 :93)

Fig 10 :47 is the sharpest institutional finding in the framework. A rule that merely constrains the frame is a convention; the moment the rule itself determines which outcome is returned, it has become a frame and has ceased to anchor anything. So "the institution exists" and "the institution prevents conversion" are different claims. The second requires that the institution still be a convention. *"Declaring a meaning does not ground it"* rules out the usual fix: writing "independent" into a statute does not make the body independent. Fig 10 :93 adds the stake test: an oversight body whose own reputation depends on a particular outcome is already captured in the structural sense, even with no bribe.

Seat Map :171: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* The rule for a checker and the rule for an institution coincide here, which is why the same diagnosis applies to a regulator and to a verification seat.

**Refuter:** exhibit a slot where the formal convention determines the outcome, the outcome is stable under wealth variation, and an independent instrument confirms the convention still constrains rather than decides. Then F2 as a general claim fails for that slot.

**World bearing:** Stigler's hypothesis, quoted in the regulatory-capture literature, is *"as a rule, regulation is acquired by the industry and is designed and operated primarily for its benefit."* That is the world-level retrodiction of Fig 10 :47, arrived at independently. One witness, different field, low overlap with the framework.

### F3: Conversion requires an import, and the import is paid for out of the political frame's independence

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 6 and Fig 8, boundary rule vs surplus rule).**

> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."** (Fig 6 :24)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)

Political authority is an atom held by the political frame; money is an atom held by the economic frame. No amount of composing inside the economic closure manufactures authority. To become influence, wealth must cross on contact with the political frame, and Fig 6 :24 prices that crossing: the political frame's independence is debited by the import. This is the mechanism behind F1, stated at the boundary rather than at the anchor. Fig 8 :45 names the surplus that makes the crossing worth making: the union of the two frames reaches outcomes neither reaches alone.

**Refuter:** exhibit a slot where a wealth holder changes a political outcome with no contact between the frames (no donation, no appointment channel, no media or network path, no shared personnel) and no import of money as a legitimate input. Then the import reading fails for that slot.

**World bearing:** the regulatory-capture literature describes *"the revolving door"* as the path by which a regulator is captured, and notes that *"a captured regulator is often worse than no regulation, because it wields the authority of government."* This is a concrete description of the import and of the debit, from a different field.

### F4: Low overlap between the two frames makes the conversion total, not more efficient

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 8 and Fig 2, overlap rule vs independence rule).**

> **"Independence is one quantity read twice."** (Fig 8 :47)
> **"completely are one frame wearing two names."** (Fig 8 :49)
> **"Independence, between two frames, is how little they draw on the same evidence."** (Fig 2 :31)
> **"Independence is what makes agreement mean something."** (Fig 2 :32)

Fig 8 :49 completes the sentence that begins on line 48: *"Two frames that overlap almost completely are one frame wearing two names."* When the economic and political frames draw on the same evidence (the same personnel, the same donors, the same media), they are one frame wearing two names. Their union has no surplus because there is no boundary left to cross; the conversion is not merely stronger, it is categorical. This also explains why independence-building, not wealth reduction alone, is the structural lever: independence is the parameter, not a caveat (Fig 6 :53-54).

**Refuter:** show a slot where the two frames share personnel, evidence and channels almost completely, yet the political outcome remains unmoved by wealth pushes. That would falsify the overlap prediction.

**World bearing:** the common-mode-failure literature in engineering states that *"if the events of failure of two components are maximally statistically dependent, the probability of the joint failure of both is identical to the probability of failure of them individually. In such a case, the advantages of redundancy are negated."* It prescribes *"keeping redundant components physically isolated."* This is a different field's statement of the same invariance, and it supplies the design word: isolation of channels.

### F5: Wealth is a catalyst, so a single stock composes many influence molecules

**Mode: `specified`. Domain D1. Status: single-source (Fig 12 :119), with a low-overlap analogue in animal behaviour.**

> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

A dollar used to secure access is not consumed by securing it. The same stock can compose a donation, a lobbying contract, a media acquisition and a revolving-door salary in sequence, and *"nothing records which a term is"*: the accounting does not mark the resource as spent or regenerating. This is why conversion is not proportional to annual income flows and why a bounded stock can have standing effects. It also gives the measurement target: a ledger that distinguishes spent from regenerating uses would change the prediction.

**Refuter:** exhibit a slot where each use of the stock demonstrably exhausts the capacity to use it again, with no regeneration, and conversion still persists at the same rate. Then the catalyst reading fails there.

**World bearing:** ethology gives a low-overlap analogue. Dominance is defined as *"an individual's preferential access to resources over another based on coercive capacity based on strength, threat, and intimidation"*, and contests turn on *"Resource-holding potential: Animals that are better able to defend resources often win without much physical contact."* The resource-holding stock survives the contest, exactly as the catalyst survives its use. Crucially, the same source reports that in vervet monkeys high-ranking females *"lose their advantage"* when food is distributed rather than clumped: the habitat, not the stock, decides whether dominance converts. That is Fig 11 in another field.

### F6: When influence regenerates wealth, the conversion is a closed cycle, and a chain cannot close

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 12 and Fig 11, bond rule vs habitat rule).**

> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)
> **"an improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)

Regulatory favours, contracts and information advantages return as wealth. With a positive sign, the loop closes: the output (influence) re-enters as input (wealth), and because a chain cannot close by construction, a linear accountability model cannot even represent the failure. This is the C3 condition from the census, and it is categorically different from C1: breaking a cycle requires a different instrument from pinning an anchor.

**Refuter:** exhibit a slot where influence returns no economic advantage over repeated uses, with a measured sign of zero or negative, and the conversion still closes. Then the cycle condition is not necessary there.

### F7: Institutional prevention is permanent work, and isolation is substitution, not removal

**Mode: `specified`. Domains D3, D4. Status: triangulated (Fig 11 and Fig 10, habitat rule vs ground-maintainer rule).**

> **"The seat's power is asymmetric. Introduction is available; exclusion is not."** (Fig 11 :61)
> **"Which is why a managed ecosystem is permanent work rather than a solved state."** (Fig 11 :63)
> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)

Institutions can add counterweights (disclosure, public financing, independent appointment, rotation) but cannot subtract the habitat, because *"contact is a fact about the world and does not consult you"* (Fig 11 :62). Therefore a reform is not a switch that turns conversion off; it is an ongoing introduction of actors into a habitat that keeps acting. And a policy that "isolates" politics from wealth does not remove contact: public financing substitutes a new habitat with new actors, of which *"you inherit the new habitat's actors, which you did not choose"* (Fig 11 :67). The two silent failure modes are named: *"what you failed to reproduce is invisible until the goal fails"* and *"what you unintentionally introduced is invisible until it acts"* (Fig 11 :68-69).

**Refuter:** exhibit a slot where a one-time institutional change permanently and measurably severs the conversion with no further maintenance and with no new actors introduced. Then the permanence claim fails for that slot.

### F8: Actor valence is relative to the residual, so there is no standing list of bad actors

**Mode: `specified`. Domain D4. Status: triangulated (Fig 11 and Fig 2, valence rule vs anchor legitimacy rule).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)

A donor, a lobbyist or a media owner is not a malfactor by kind. The same actor is a benefactor to a residual defined as "under-funded public health communication" and a malfactor to a residual defined as "an unmoved regulatory outcome". This forbids the common reform move of blacklisting categories of actors, and instead requires naming the residual first. Fig 2 :36 supplies the matching anchor rule: *"An anchor is legitimate when the question is constitutively about it."*

**Refuter:** exhibit an actor whose valence is invariant across two genuinely different residuals in the same habitat. Then the relativity claim fails for that actor.

### F9: Correlation studies are filters for the budget, not witnesses for the verdict

**Mode: `general`. Domain D5. Status: triangulated (Fig 9 and Fig 2, filter rule vs valence rule).**

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)

Across-country or across-issue correlation between wealth and policy is useful for deciding where to spend the search budget. It cannot settle whether a particular slot's anchor moved, because the measurement and the claim draw on the same evidence pool and because a correlation cannot distinguish C1 from C3. Fig 2 :42 sets the design rule: buy independence in proportion to the cost of being wrong. Here the cost is high and the independence of the usual evidence pool is low.

**Refuter:** produce a source whose measurement does not draw on the same data tradition as the claim it is used to settle, and show that it alone moves the verdict. Then the one-pool diagnosis is refuted for that source.

### F10: The framework returns a shape, not a threshold, a name or a country ranking

**Mode: `general`. Domain D5. Status: triangulated (Fig 9 and the canonical README).**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"describe it before you go looking, or any frame you pick will seem to fit"** (Fig 9 :27)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)

No figure line returns a dollar threshold at which conversion begins, a named country, or a named institution as the unique culprit. Those are bindings from the political-science frame, provenanced as such. What survives is the shape: conversion closes when an anchor moves, an import crosses, overlap negates independence, a catalyst is reused and a cycle closes, and institutions prevent it only by maintaining the anchor as permanent work. The canonical README states the limit directly: the framework gives *"a shape, not a name."*

**Refuter:** derive a numerical threshold or a unique institutional culprit from the figures alone, with no import from political science and no measurement. If this can be done, F10 is false.

### F11: What actually survives

The defensible residue, with its mode attached:

| claim | mode | figure |
|---|---|---|
| Conversion is the event of a political anchor becoming movable, not a smooth function of wealth | `specified` | Fig 2 :29-30, :13-15 |
| An institution that decides the outcome has stopped being a convention | `specified` | Fig 10 :47 |
| Crossing requires an import paid for out of the political frame's independence | `specified` | Fig 6 :21-24 |
| High frame overlap negates the independence that made the crossing checkable | `specified` | Fig 8 :47-49; Fig 2 :31-32 |
| Wealth survives its use, so a bounded stock composes many influence molecules | `specified` | Fig 12 :119 |
| Influence regenerating wealth closes a cycle that a chain cannot represent | `specified` | Fig 12 :121 |
| Prevention is permanent work; isolation substitutes a habitat rather than removing one | `specified` | Fig 11 :61-69 |
| Correlations that share an evidence pool are budget filters, not verdict witnesses | `general` | Fig 9 :60; Fig 2 :40 |
| A numerical threshold or a unique culprit is not derivable from the figures | `general` | Fig 9 :32; canonical README |

---

## 4. Pre-registered refuter

Required before any outreach, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. A named political slot's recorded outcome tracks wealth while an independent instrument confirms the slot's anchor stayed pinned (breaks F1).
2. A formal convention demonstrably decides an outcome, yet remains an anchor under independent measurement (breaks F2).
3. A wealth holder changes a political outcome with no cross-frame contact and no import of wealth as a legitimate input (breaks F3).
4. Two frames with near-total overlap still produce an unmoved political outcome under wealth pushes (breaks F4).
5. A one-time institutional change permanently severs the conversion with no maintenance and no new actors introduced (breaks F7).
6. An observer source is produced whose evidence pool is genuinely disjoint from the claim it settles and that alone moves the verdict (breaks F9 at the level of this run's one-pool status).

If any fires in a named slot, the claim is withdrawn for that slot and the census is reopened. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Ask the question per slot, never as a national average (Fig 1 :19, Fig 1 :22).
2. Test the anchor first, because the other two conditions assume its answer: pinned outcome under a wealth push, measured with an instrument that does not itself move when pushed (Fig 2 :25).
3. Name the habitat before naming a culprit (Fig 11 :48, Fig 9 :27-28).
4. Distinguish C1, C2 and C3 in the instrument: anchor failure, import crossing, feedback closure are different compounds and need different checks (Fig 9 :55-57).
5. Treat reforms as introductions into a habitat that must be maintained, and record what was unintentionally introduced (Fig 11 :61-69).
6. Send the generator (the residual, the shape and the refuter), not the conclusion (Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*).

---

## 6. Canonical usage check

Two sources were read after the first five sections and they govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` (local copy of the canonical figures README) — *"the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` — the seat reads the ground; it does not ask the anchor to decide what the figures already settle. Line 163 gives the correlation valence rule, line 171 the stake rule, line 283 the room/anchor rule, line 287 the pre-registered falsifier rule.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` — the figures are metalaws, so design questions are answered by derivation, not by escalation.

### Retractions and confirmations

| earlier finding | status after the canonical check |
|---|---|
| "Institutions prevent conversion when they are strong" | **Retracted.** Fig 10 :47 makes strength the wrong axis: a convention that decides the outcome has stopped being a convention. Replaced by the anchor/convention distinction in F2. |
| Fig 13 applied directly to wealth as energy and influence as gradient | **Retracted as a strain.** The physical six-term set does not govern this composition (section 2, strain S1). Fig 13 is confined to the honest-stop role. |
| "A correlation between wealth and policy settles the question" | **Retracted at the level of evidence.** Fig 9 :60 and Fig 2 :40 make such correlations budget filters from one evidence pool, not verdict witnesses. Kept as F9. |
| "Isolation removes wealth's contact with politics" | **Corrected.** Fig 11 :66 says isolation substitutes a habitat, not removes one. F7 now states the inherited-actors failure. |
| F1 anchor reading | **Canonically confirmed.** Fig 2 :29-30 is the anchor test, and panel 1 (Fig 2 :13-15) describes convergence on whoever had the most influence. |
| F10 shape-not-a-name | **Canonically confirmed.** The README's own phrase is *"a shape, not a name."* No threshold, country or institution is named by the figures. |
| The one-pool status of this run | **Confirmed and declared.** The essays, the figures and the political-science sources used here overlap only at the framework boundary; the simulated second seat shares the primary's pool entirely. See `11_audit.md`. |

### Strains after re-census

- **S1: Fig 13 versus the wealth/influence composition.** Re-census: Fig 13 governs the six physical primitives and the rule that composition crosses two kinds. Applying it to money and authority required treating them as states and structures, which it does not license. Fig 13 is retained only for its limit claim (Fig 13 :134, unreachable is a verdict). No strain remains in the governing findings.
- **S2: Fig 10 :47 read literally.** An early reading took "a convention that decides an outcome has stopped being one" to mean institutions never decide anything, which is contradicted by the existence of courts. Re-census: the line distinguishes deciding the outcome from constraining the frame in which outcomes are produced. A court that applies a rule is a convention; a court whose selection or funding is determined by the actor it is meant to judge has become a frame. F2 now states this explicitly.

---

## 7. Honest stop

**Unreached, not unreachable.** The shape is stated, the instrument is characterized in effect terms, and the refuters are written down. The ground reading (a pinned-outcome test with an instrument that does not move when pushed) has not been run here. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and the record of the route is what keeps the stop checkable. What the figures give is a kind of thing, never the answer itself (Fig 9 :32). Nothing in this folder is `grounded`.
