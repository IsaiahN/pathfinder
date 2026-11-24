# Figure-grounded audit: INS-0081, property rights and investment under uneven security

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, fetched 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the institutional question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) − o′|` per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is a group's belief about whether an investment will be repaid, formed from its own history and inherited priors. A history of expropriation and a history of enforced title produce different `b` from the same plot and the same price.
- **a** is the investment action: plant trees, build terraces, register a title, hold livestock, keep a child in school rather than sending them to work.
- **Γ(b,a)** is what the group's library of routines predicts it will receive, given what it believes about tenure.
- **o′** is what actually arrives at harvest, at sale, or at the bank.
- **s** is the group, indexed by group and by plot, not by a national average.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the level of investment but **the systematic difference in `R` between a secure slot and a precarious slot under the same technology and prices**. A frame that predicts all groups invest the same, or that an achieved title simply pays off, has a residual here.

State the residual as: *why does the gap between what a group's routines predict it will get back and what actually arrives stay small across a long horizon in some ownership slots and widen into a short horizon in others?* This is an effect description. It names no theory, no "title", no "incentive", no "collateral". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction keeps a slot's `R` small across a horizon longer than one season, plus an instrument that discriminates a failure of one condition from a failure of the other. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The question is constitutively about **investment**, so the anchor is the realized return and the observed investment flow, measured per group and per plot. A market is explicitly named. Legal titles, statutes and registries are **not** the anchor: legislatures rewrite them and officials revoke them, so *"you push on it, it is not an anchor"* (Fig 2 :30). They are instruments and habitat conditions, admitted into the derivation but denied verdict weight. This distinction governs finding F7.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation: group Γ, tenure condition, action a, return o′, indexed by slot s and ordered by time t. It is a sequence rather than a set, so it carries an **ordered** bond (`→`, *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for secure versus precarious (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87; Operators table :47-51). It is not a symmetric relation: group and market are not interchangeable.
- **Symmetry.** "Secure" is a threshold relative to a threat, not an absolute quantity (Fig 12 :85-89). Investment is asymmetric in time: a lost plot or a lost harvest is not recovered by reversing the action (Fig 12 :121, *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*).
- **Scale.** Three scales are in view: the single group's step-by-step loop, the population of groups with a shared market and *"something that ranks what they produce"* (Fig 4 :5), and the time channel across seasons and generations. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap `R_T` must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The investor's decision loop** (one group, one scale) | group decision makers, routines, the group's Γ | actions and residual reduction | yes: realized return per plot | admitted |
| **D2 The tenure habitat** (population and relations) | rights holders, state, enforcers, courts, neighbours, creditors, markets | security of access, enforcement, transferability | yes: observed investment and output per plot, market and land value (Fig 2 :29) | admitted |
| **D3 The legal instrument frame** (titles, statutes, registries) | statutes, title deeds, registries, contracts | legal legitimacy | **no** anchor independent of D2: a title's validity is internal to the legal frame, and the frame moves when pushed | not a domain yet; absorbed into D2 as a condition |
| **D4 The temporal channel** (across seasons) | the group's expectations, memory of past dispossession, instruments | contact with a future return | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "culture of thrift" as a free-floating property** | the group | alleged thrift | **no** anchor independent of observed behaviour | not a domain yet |
| **X2 "legal title causes investment" as a monocause** | the title | legal form | measurable only through D2 outcomes; already inside D2 | absorbed into D2, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. X2 fails because treating legal form as a self-sufficient cause would make the frame score itself with a quantity the frame produces (Fig 1 :27). These are structural exclusions, not claims that culture or law never matter.

### 1.3 Partition or union

D1 and D2 overlap: investment decisions are made inside the tenure habitat, so their overlap is a compound with its own loop. D2 and D4 overlap: the future return is pursued inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **(C1) a maintained channel to a future return**, and **(C2) a reach to a wider set of investments**. A group failing only C1 and a group failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The Library of Babel essay states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the group read the return signal from last season?) → 2 vocabulary (does Γ have terms for what secure tenure affords: can it state "this tree will still be mine in seven years"?) → 3 objective (can it say what progress would count as?) → 4 planning → 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :112-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. For a precarious group the objective link is the one that breaks: you cannot state a future return you cannot count on. Most diagnostic effort lands above the break, where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not its sign |
| 2 The Ground | investment outcome is the named market anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs individual-to-group transfer and the lossy condensation |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a tenure practice can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs C2, renewal of reach |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs long-horizon investment as a chain of handoffs |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs C1 failure, the short horizon |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1 and D2 |
| 12 The Bond | isomer, catalyst, cycle, functional group; arrangement is the substance | governs why a right protects one group and exposes another |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop only |
| Operators table | ⋛ comparison is a threshold relation between two quantities | secure versus precarious is a comparison, not a substance |
| Symbols table | `R` is the aim; the ground is the anchor; habitat is enumerated | confirms the residual and the census order |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "property rights" only fit by calling a title a kind of energy and tenure security a kind of gradient. That is a strain, so Fig 13 does **not** govern the property-rights domain. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census, except the sign question recorded as S2.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about investment behaviour, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The investment response is a property of group-and-habitat, not of the group alone

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat vs membrane).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

The two observed conditions: the same kernel at different sizes (Fig 4), and capability located in the relation rather than the agent (Fig 11). If the question is "why does this group keep investing", the answer cannot be a property of the group considered alone. The habit of answering with a list of group attributes (thrift, skill, culture, entrepreneurship) is an agent-only improvement that may not change contact.

**Refuter:** a controlled comparison in which a group's investment response is unchanged across a tenure-habitat substitution that demonstrably removes or reverses the habitat's payment for what the group invests in. If it survives, F1 is false.

**World bearing (secondary only):** Besley 1995 opens *"This paper examines the link between property rights and investment incentives"* and develops arguments from *"security of tenure, using land as collateral and obtaining gains from trade"*. That is a habitat-and-relation framing, not an agent-only one, and it corroborates F1 from within the economics pool. Goldstein and Udry 2008 are sharper: *"individuals who hold powerful positions in a local political hierarchy have more secure tenure rights and that as a consequence they invest more in land fertility and have substantially higher output"*. Power is a habitat relation, and it corroborates F1 at the level of a specific mechanism.

### F2: Secure and precarious are two conditions of a union, not two points on one scale

**Mode: `general` with a `specified` consequence for method. Domains all. Status: figure-derived (Fig 9).**

Fig 9 :54, :55 and :57 are the governing lines (quoted in section 1.3). The two conditions are:

- **C1, channel maintained:** the expected return still arrives at the future harvest. Instrument: measured bracket fidelity and measured ground pressure (Fig 7 :37-39).
- **C2, reach renewed:** the group can compose investments that take longer to pay and cannot be moved away. Instrument: whether new atoms enter the group's closure from a differing closure (Fig 6 :23).

A single lever, for example "issue more titles", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). F2 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** one intervention that restores both conditions in both failure types with no categorically different residue left over. That would collapse the union into a partition.

### F3: Precarious tenure degrades the channel, not the ground

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)

A group invests less for the long horizon when its contact with what pays degrades while the market itself keeps paying someone else. The named decay modes are stale percepts, dropped transients, saturated metrics and pooled readings. "Pooled readings" is the group-level version of aggregating across slots (Fig 1 :22): the signal that says where to look disappears into an average.

Fig 7 adds the two-factor test:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

A long-horizon investment is a chain of handoffs from present action to future return. If either the bracket's fidelity (the expectation that the return will still be yours) or the ground's pressure (the market actually paying for output) goes to zero, the group runs in place. This is what the world reports: Ali, Dercon and Gautam 2011 find that *"limited perceive transfer rights, and the threat of expropriation, negatively affects the long-term investment in Ethiopian agriculture"*. Note the subject: **long-term** investment. The scope of F3 is narrowed accordingly in strain S2.

**Refuter:** a documented group whose bracket fidelity and ground pressure both measure high and non-declining, and which still refuses long-horizon investment. If both stay high, F3's mechanism is not the cause.

### F4: Renewal of reach requires contact with a closure that differs

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, three figures with distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)

A group can keep optimizing its present plot forever and never add an atom. To keep investing across a changing habitat, its reach must be expanded by contact with frames whose closures differ: credit markets, other groups' tenure practices, registries, courts, extension services. Field 2007 reports that titling in Peru produced *"a substantial increase in labor hours, a shift in labor supply away from work at home to work in the outside market, and substitution of adult for child labor"*: a change of reach, not merely a change of output on the same plot. Besley's third argument, *"obtaining gains from trade"*, is the same atom.

A title by itself is **not** a new atom in the world. Fig 6 :25: *"An import adds no atom to the world."* It is a binding from the legal frame onto a right the habitat already recognises. What moves the wall is contact with the credit market, the court, or the neighbouring closure that makes the binding usable. This is why F4 does not collapse into "titles cause investment" (see F7).

**Refuter:** a group that renews its investment reach solely by composing inside its own closure, with no new atom entering from a differing closure, and that still passes the ground test across a change of habitat. That breaks idempotence and F4 with it.

### F5: A right changes valence when the residual changes; the actor is a relation, not a kind

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

This is the mechanism behind the observation that the same institution protects one group and dispossesses another. A registrable title is a catalyst for a group that can use it and a spent part for one that cannot; a state court enforces one holder's claim and extinguishes another's, and nothing in the phrase "secure property rights" records which. Goldstein and Udry 2008 supply the low-level mechanism at the same stratum: security follows *"the individual's position in the political hierarchy relevant to those specific plots"*. The right is not a thing held equally; it is a relation to a hierarchy, so its valence depends on the residual being tracked.

**Refuter:** an enforcement actor or a title whose measured valence is invariant across a documented change of the group's residual. If no such change of valence can be found anywhere, F5 weakens to `general`.

### F6: Never explain this by averaging across groups

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

A national investment rate, or a cross-country regression of investment on an index of "property rights", scores the frame with a quantity the frame helps produce. It is a filter for where to look and a budget instrument, not a witness. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* The specified consequence: any claimed answer to INS-0081 that averages secure and precarious groups has already thrown away the only signal that says which slot is losing contact and where.

Fenske 2011 corroborates at the measurement stratum: *"Self-reported tenure security has been a poor predictor of investment outcomes"*, and *"Studies with small sample sizes, those that use binary investment measures, and those that control for household fixed effects are less likely to find a statistically significant link between land tenure and investment"*. The instrument decides what can be seen; a coarse one produces a confusing literature rather than a refutation.

**Refuter:** an averaged national statistic that predicts, prospectively and per named group, which slot will disinvest next. If one exists, F6's methodological consequence is false.

### F7: Conflict between the title monocause and the figures, and how it was resolved

**Mode: `general`. Status: figure-governed.**

The de Soto thesis, as recorded on the economist's public page, treats formal title as the lever that turns *"dead capital"* into live investment. The same page records a direct counter-observation: *"Contrary to de Soto's claims, the land title project provided no change to the access of credit to poor Peruvians"*, and a critic's judgement that the programme's findings were *"implausible"* because the conclusion was already framed by the institute. Fenske 2011 opens with *"results that are often confusing and contradictory"*. These are genuine conflicts with the simple causal story, and a conflict sends the derivation back to the census; it never flips a verdict.

Re-census R2 (section 6) resolves them: the title is mapped to **D2** as a habitat condition that can alter **C1** (the expected return becomes stateable and enforceable) and **C2** (the right can be used in a credit or market closure). Under that mapping the titling evidence corroborates the two-condition shape and does not conflict with D1/D2. It carries no verdict weight for "title alone causes investment", because that binding has no source gate and no shadow test for the group-level claim (Fig 6 :23; Fig 8 :50-52). Field's 2007 result is kept as the better-discriminating instrument: it measures what actually changed (labour allocation), not what the programme claimed.

### F8: Insecurity does not have a figure-determined sign

**Mode: `specified`. Domains D1, D4. Status: single-source conflict, narrowed by re-census S2.**

Banerjee and Ghatak 2004 report that *"the effect of eviction threats on unobservable investment effort can be positive"*, because investment raises the chance of retaining the tenancy in a later period. Read as "precarious tenure always lowers investment", this **conflicts** with F3 and with the expected direction of the whole derivation. The conflict is returned to the census, not smoothed over.

The figures do not state a sign. Fig 7 :37-39 states two factors that must both be non-zero; Fig 10 :24 states that the channel decays; Fig 11 :40 states that a change which does not change contact changes nothing. None says "an eviction threat must reduce effort". S2 therefore narrows F3 from "investment" to **long-horizon, immobile, non-redeployable investment**, where the bracket must cross many handoffs and cannot be recovered by leaving. That is also the scope Ali, Dercon and Gautam observe: long-term investment in trees and shrubs. The narrow claim survives; the broad one is withdrawn. This is a re-census, not a softer reading.

### F9: The break is usually at the middle link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :112-115 as a corroborating line from a different figure but the same framework).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In group terms, the usual failure is not that the group cannot plan; it is that it has no terms for what a changed tenure situation affords and cannot say what would count as progress there. A group without a stateable claim cannot state a seven-year return. More planning budget lands above the break (Fig 3 :29-30).

**Refuter:** a documented group whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per group and per plot, never a national average | general | Fig 1 :19, :22, :23 | figure-derived |
| Investment outcome is the anchor, not legal form or internal agreement | general | Fig 2 :29, :35 | figure-derived |
| Investment response is group-and-habitat, not group alone | specified | Fig 11 :39, :40 | triangulated F1 |
| The question is a union of channel maintenance and reach renewal | general | Fig 9 :54, :55, :57 | figure-derived |
| Precarious tenure degrades the channel for long-horizon immobile investment | specified | Fig 10 :24, :26; Fig 7 :37-39 | triangulated F3, narrowed by S2 |
| Renewal of reach requires contact with a differing closure | specified | Fig 6 :14, :21, :23 | triangulated F4 |
| A right or enforcer changes valence when the residual changes | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F5 |
| The sign of the insecurity effect is not figure-determined | specified | S2; Banerjee and Ghatak 2004 | single-source conflict, narrowed |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F9 |
| Which specific institutional arrangement works in a given habitat | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A group's sustained investment response is unchanged across a tenure-habitat substitution that removes the habitat's payment for what it invests in (breaks F1, Fig 11 :39-40).
2. A single lever restores both C1 and C2 in both failure types and leaves no categorically different residue (breaks F2, Fig 9 :57).
3. A precarious group whose bracket fidelity and ground pressure both measure high and non-declining still refuses long-horizon immobile investment (breaks narrowed F3, Fig 7 :37-39).
4. A group renews its investment reach solely by internal composition with no new atom from a differing closure and still passes the ground test across a habitat change (breaks F4, Fig 6 :21, Fig 8 :32).
5. A title or enforcer's measured valence is invariant across a documented change of residual (breaks F5, Fig 11 :49-51).
6. A prospectively validated averaged national statistic predicts which named group will disinvest next (breaks F6, Fig 1 :19, Fig 9 :60).
7. Fig 13's six terms are derived from five, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape per group.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of institutions (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep C1 and C2 separate in every report. A blended "investment climate score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Do not name "formal title" as the answer. The title is a provenanced binding from the legal frame; what is owed is an instrument that discriminates its effect on the channel from its effect on reach (Fig 9 :32).
4. Index per group and per plot. Treat any national average as a budget filter, never a witness (Fig 9 :60).
5. Ask at each handoff which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
6. Use the development-economics literature as one corroborating witness and as a budget filter, not as the verdict. Besley, Goldstein and Udry, Ali and Dercon, Field and Fenske share an evidence pool (Fig 2 :31, :40).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Which arrangement works where is an instrument question, not a naming question (Fig 13 :134).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and three essays fetched 2026-11-23: *The Library of Babel* (Oct 02 2026), *The Recursive Self-Improvement Trap* (Nov 19 2026), *The Hard Problem is About Source* (Aug 28 2026).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- *The Library of Babel*: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question"* and *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* Both govern section 1.3.
- *The Hard Problem is About Source*: *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"The answer is unreached until a better instrument exists."* Both govern F7's stop.
- *The Recursive Self-Improvement Trap*: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* This governs the honesty label.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term physical substrate to property rights | **Retracted, strain S1** | Only fit by renaming a title a kind of energy. Re-census: Fig 13 governs the physical substrate, not a group's Γ |
| Treated de Soto's "dead capital" as straightforward corroboration | **Conflict, re-census R2** | Credit access did not change in the Peruvian programme; mapped the title to D2 as a condition affecting C1 and C2; see F7. Verdict unchanged |
| "Insecurity always lowers investment" | **Narrowed to long-horizon immobile investment, strain S2** | Banerjee and Ghatak 2004 show eviction threats can raise effort. The figures state factors and contact, not a sign |
| Read self-reported tenure security as a witness | **Retracted as a witness, kept as a filter** | Fenske 2011: it is a poor predictor; Fig 9 :60 |
| Planned to name "formal title" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer; the title is a binding, provenanced as such |
| Wanted to call Fig 11 :40 a `general` law about all groups | **Narrowed to `specified`** | Structural claim; no market measurement pays for the group-level version here |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 11 and Fig 4 are two figures, but one framework; triangulation means low topical overlap, not independent evidence pools |
| "Market is the ground" while also treating land value as moving | **Narrowed by Fig 2 :29-30 and Fig 11 :73** | *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."* |

**Strains sent to the log:** S1 (Fig 13 applied to property rights), resolved by re-census; S2 (sign of the insecurity effect), resolved by narrowing F3 to long-horizon immobile investment; R2 (de Soto monocause), resolved by re-mapping to D2. No unresolved strain remains after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of channel maintenance and reach renewal, each with its own loop and instrument.
2. **What is the anchor?** The market in realized investment returns and output per plot, named in Fig 2 :29. Not the title, not legal legitimacy, not internal agreement (Fig 1 :27).
3. **Is the answer in the group alone?** No. Fig 11 :39-40. Capability is group-and-habitat.
4. **How does the short horizon happen?** Channel decay: stale percepts, pooled readings, lost touch (Fig 10 :24-29); either factor of Fig 7 :37-39 going to zero.
5. **How does long investment persist?** A chain of handoffs whose bracket fidelity survives because the return is still claimable (Fig 7 :36), with imports from differing closures moving the wall outward (Fig 6 :23).
6. **Why does the protective thing turn harmful?** Valence is relative to the residual (Fig 11 :49-51); a catalyst may become spent (Fig 12 :119); the same hierarchy position that secures one plot dispossesses another (Goldstein and Udry 2008).
7. **What can be said at the stop?** A shape and two conditions, with falsifiers. Not which title, not which statute, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **investment responds to ownership security because security keeps the channel between a present action and a future return reachable and enlarges the reach of investments a group can compose; precarious ownership degrades that channel and confines the group to short-horizon, movable, quickly recovered assets.** The two conditions are kept separate, never averaged, and the group is indexed per plot. The sign of the effect on *all* investment is not figure-determined and is narrowed to long-horizon immobile investment after S2. Which specific institutional arrangement secures investment in a given habitat is a `gap`, not a hidden answer: the framework returns a shape, and the instrument that would name the source is not held here. Mode `specified`. No world source flipped a verdict; the two genuine conflicts (de Soto monocause, Banerjee and Ghatak sign) were returned to the census and re-mapped or narrowed. No unresolved strain remains after re-census.
