# Figure-grounded audit: ECN-0090, accounting for unpriced harms

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*, opened 2026-11-23: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the economics question it reports on. See `05_what_shape_means.md` §6.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Also `FRAMEWORK/figures/THE_FORMULA.md` and `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) − o′|` per slot s (Formula step 1; Symbols table, `R`). Applied to this question:

- **b** is the firm's belief about what the market will pay for, formed from its own history and inherited priors.
- **a** is what the firm does: price, produce, source, invest, locate, supply, disclose or not disclose.
- **Γ(b,a)** is what the firm's library predicts will follow: revenue, cost, price, share.
- **o′** is what actually follows, including harm to people and ecosystems that never enters a price.
- **s** is the slot: the firm, the exposed person, the watershed, the supplier community. R is indexed per slot, never averaged.

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."

> Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

The phenomenon named in the question is the gap between what the price channel carries and what the world actually does. The harms "not reflected in market prices" are precisely the portion of `o′` that the price instrument drops. This is a statement about an **instrument**, not a statement about the reality of the harm. An unpriced harm is not an absent harm; it is a reading the channel cannot represent.

> Fig 10 :24 "the ground does not decay, the channel does"

> Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings"

Price is a pooled reading: it adds the private benefit and the unpriced harm into one number and the live residual disappears into the average. The question "should firms be required to account for it?" asks whether to install a term in the firm's library for a residual the price channel drops.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run. An answer would look like: (i) an external ground for the harm that does not move when the firm reports it, (ii) a per-slot enumeration of the contact cascade, (iii) a violable convention that makes the harm statable, (iv) a way to hold the money reading and the physical reading apart, and (v) an instrument that discriminates a measurement failure from a composition failure. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in §4 can fire on it.

**Anchor test.** Fig 2 :29 names the market as a possible anchor: *"A measurement, an experiment, a counter, a market, a patient outcome."* But Fig 2 :36 says:

> Fig 2 :36 "An anchor is legitimate when the question is constitutively about it."

The question is constitutively about harms to people and ecosystems, not about the market's clearing price. Fig 2 :37-38 continues:

> Fig 2 :37 "It is only an instrument for is this code correct, and instruments can be wrong on axes they"

> Fig 2 :38 "do not measure."

So for the harm axis the market is an instrument that can be wrong, not the ground that settles. Fig 2 :47: *"A ground listed as one of the parties has already become a frame."* A firm's own price is a party to the transaction. It cannot also be the anchor for the harm the transaction causes.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation: firm action, market price signal, unaffected third party or ecosystem, and time. It carries an **ordered** bond (`→`, sequence, Fig 12 :72: *"A then B; B needs A to have happened"*) because the harm emerges after the action and often far downstream. It carries a **comparison** bond (`⋛`, Fig 12 :87: *"a threshold relation between two quantities"*) because "harm not reflected in price" is a comparison of two readings, not a property of one. It is not symmetric: firm and exposed party are not interchangeable.
- **Symmetry.** Whether a harm counts is threshold-relative to a standard, not an absolute quantity. "Required" is itself a threshold: a rule that binds some firms and not others (Fig 12 :85-89; Operators table :46-51).
- **Scale.** Four scales are in view: the single firm's loop, the market price signal at population scale, the habitat contact cascade across supply chains and generations, and the institutional stratum where conventions are authored and enforced. The membrane between them is *"Not a wall: a filter with a direction"* (Fig 4 :21) and the transform is lossy, so `R_T` must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The firm price loop** (one agent) | managers, routines, Γ, market prices | profit, cost, price, share | yes for *what the market will pay*, Fig 2 :29; no for the harm axis, Fig 2 :37-38 | admitted for allocation, not for harm |
| **D2 The harm habitat** (contact cascade) | exposed people, workers, communities, species, water, soil | exposure, contact, damage, survival | yes: physical and biological measurement, a "counter, a patient outcome" (Fig 2 :29) | admitted |
| **D3 The measurement and convention frame** | auditors, standards bodies, scientists, standard setters | conventions, disclosure, metrics, assurance | yes: the ground must be kept reachable, Fig 10 :29 | admitted, convention-authoring seat only |
| **D4 The enforcement and verification frame** | regulators, courts, investors, civil society, journalists | compliance, penalty, reputation, correction | yes: the ground, never agreement, Fig 2 :35 | admitted |
| **X1 "The market will price it eventually"** | the price instrument | efficiency | **no** anchor independent of the price on the harm axis | not a domain for this residual; absorbed into D1's instrument |
| **X2 "Voluntary goodwill is sufficient"** | the firm's self-report | reputation | **no** ground-independent anchor; self-report is frame-internal, Fig 1 :27 | not a domain yet; absorbed into D1 |

X1 and X2 fail the anchor test for the harm residual and are excluded before any figure line is applied to them. This is a structural exclusion, not a claim that markets never work or that managers never care.

### 1.3 Partition or union

D1 and D3 overlap: the measurement convention becomes part of the firm's Γ, so the overlap is a compound with its own loop. D2 and D4 overlap: enforcement acts on the habitat and the habitat updates, so that overlap is a second compound. The question is a **union**, not a partition.

> Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."

> Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

> Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The unbundled conditions are: C1, the channel must carry the harm; C2, the habitat enumeration must reach far enough; C3, the account must be violable and externally checked; C4, the money reading and the physical reading must be held apart. A firm failing only C1 and a firm failing only C3 are not different degrees of one failure. They are different compounds and need different instruments. *The Library of Babel*, opened 2026-11-23, names the same error: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."

> Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

Order: 1 perception (can the harm be detected at all?) → 2 vocabulary (does Γ have a term for it?) → 3 objective (does the firm count harm reduction as progress?) → 4 planning → 5 learn and carry. The middle link is where this question breaks. A price-carrying firm has excellent instruments for revenue and no instrument for the dropped residual, so "having terms for what a situation affords was taken for a dictionary and it is a grammar" (Fig 12 :115). Most policy effort lands above the break, where measurements already exist (Fig 3 :29-30).

---

## 2. Figure census (preliminary)

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs indexing and what may count as evidence |
| 2 The Ground | market named as anchor, but anchor legitimacy is question-relative; independence vs common pool | decisive for D1 and D4 |
| 3 Dependency Chain | the middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer from person to firm to institution |
| 5 Mint Pipeline | three guards as a product; acceptance bargain; "nothing new here" | governs whether an accounting term is worth having |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs adding the harm term to Γ |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs voluntary standards and industry agreement |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs source discipline for harm data |
| 9 Leave / Arrive | union vs partition; describe the residual before choosing a frame | governs unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; conventions make bugs statable | decisive for D3 |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; contact cascades | decisive for D2 |
| 12 The Bond | two currencies, priced bonds, isomer, functional group | governs the money-versus-physical question, with a stated strain |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |
| Operators table | ⋛ is a threshold relation between two quantities | "unpriced" is a comparison of readings, not a kind of harm |
| Symbols table | R is the aim; the ground is the anchor | no firm-level measurement pays for these bindings |
| THE_FORMULA | gates as a product; refusal before mint; direction as an ordinary term | governs the pre-registered refuter |

Strain test during this census: an early attempt to apply Fig 13's six physical terms directly to "harm" only fit by calling exposure a kind of energy and a supply chain a kind of network. That is a strain, so Fig 13 does **not** govern environmental harms. Re-census sent Fig 13 to the honest-stop role only (§6, strain S1). No other figure needed a strain after re-census except the two-currency mapping in F6, which is named there.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about firms, `grounded` only if settled by a measurement. None is `grounded`.

### F1 — The market price is an instrument on the harm axis, not the anchor

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 2 anchor rule and Fig 10 channel rule, low topical overlap).**

> Fig 2 :36 "An anchor is legitimate when the question is constitutively about it."

> Fig 2 :37 "It is only an instrument for is this code correct, and instruments can be wrong on axes they"

> Fig 2 :38 "do not measure."

> Fig 10 :24 "the ground does not decay, the channel does"

The phrase "not reflected in market prices" describes the instrument's coverage, not the harm's existence. To ask the price to settle the harm question is to ask an instrument to decide outside the axes it measures. Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*

**Refuter:** a prospective measurement showing that the market price already tracks the physical harm on the relevant axis, with the firm's reporting frame held fixed, so that price is a valid anchor for that harm. If it fires, F1 is false and D1 admits the harm.

**World bearing (secondary only):** Bob Ward and Naomi Hicks, LSE Grantham explainer, 2022, say that when pollution costs are not imposed on emitters, *"these costs are thus 'externalised' to society, representing what economists describe as a 'market failure'."* That corroborates the channel reading. Coase 1960 calls the standard remedy into question: *"It is my contention that the suggested courses of action are inappropriate, in that they lead to results which are not necessarily, or even usually, desirable."* Both are secondary and neither settles the figure verdict.

### F2 — The harm is a pooled reading; per-slot indexing is mandatory

**Mode: `general` with a `specified` consequence for accounting. Domains D1, D2. Status: triangulated (Fig 1 and Fig 10, low overlap).**

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."

> Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

> Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings"

A single corporate "impact score" is a pooled reading. It does the same work as averaging across firms in BUS-0001: the signal that says where to look disappears. The specified consequence is that an account that reports only a total is not an account of the residual, whatever its precision.

**Refuter:** an aggregate statistic that prospectively identifies, per slot, which named exposure will breach a harm threshold next, with no loss of the live signal. If one exists, F2's consequence is false.

### F3 — The material harm is often three steps out

**Mode: `specified`. Domain D2. Status: single-source for the DDT example; the enumeration rule itself is figure-imposed.**

> Fig 11 :43 "The habitat is enumerated, never composed."

> Fig 11 :52 "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three"

> Fig 11 :53 "steps out."

The figure's own case is environmental: Carson, *Silent Spring*, 1962, cited at Fig 11 :54, with biomagnification through the food chain to eggshell thinning established over the following decade. An account scoped to the firm's direct transactions will miss precisely the residual that mattered. "Account for harms" therefore means enumerate the contact cascade outward until it stops mattering, not total the firm's first-order emissions.

**Refuter:** a demonstrable domain in which all material harm is first-order, fully inside the transaction boundary, and the cascade contribution measures zero. That breaks the specified cascade claim, though not the enumeration rule.

### F4 — A disclosure mandate is a convention that makes the bug statable, not the ground

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10 and Fig 1, low overlap).**

> Fig 10 :16 "the convention does not fix the bug"

> Fig 10 :17 "it makes the bug statable"

> Fig 10 :19 "→ install what can be violated"

> Fig 10 :47 "a convention that decides an outcome has stopped being one"

> Fig 10 :49 "Declaring a meaning does not ground it."

> Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."

This is the figure-grounded reading of "required to account." A mandatory disclosure rule is legitimate because it makes a previously unstatable harm statable and installs something that can be violated. It is not legitimate as a substitute for the ground. A firm that measures its own harm with its own metric is a frame scoring itself with a quantity it also produces. Fig 10 :48 adds the failure mode: *"a convention nothing can check is a constant the seat authored, carrying the seat's authority."*

**Refuter:** a mandated "harm metric" for which no possible observation would show it false, or one whose value is set entirely by the reporting firm. Then it is an authored constant, not a convention, and F4 is confirmed in its negative form while the regime fails C3.

**World bearing:** the AAAJ review of CSR reporting regulations, 2022, finds that *"CSR reporting continues to be ceremonial rather than substantive after the regulations - consistent with corporate legitimation and 'greenwashing' views."* That is the world's name for Fig 10 :47. Gatti, Seele and Rademacher, 2019, find that *"the entirely voluntary CSR (Corporate Social Responsibility) approach facilitates the diffusion of greenwashing"* and that *"greenwashing could be better prevented with a combination of voluntary and mandatory aspects."* Both corroborate the shape; neither is allowed to decide it.

### F5 — Adding the harm term is an import that must pay the bargain

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6 and Fig 5, distinct roles).**

> Fig 6 :14 "the only operator that moves the wall"

> Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

> Fig 8 :12 "source gate: provenance"

> Fig 8 :13 "shadow test: explains a gap"

> Fig 5 :42 "The acceptance test is a bargain, not a threshold."

> Fig 5 :43 "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."

The firm's closure lacks a term for the dropped residual. Requiring the account is an import of that term, and Fig 6 says import is the only move that expands reach. It must pass a source gate and a shadow test: where did the harm figure come from, and which gap does it explain? It must then pay `cost(φ) + left(R,φ) < cost(R)`. A requirement that restates what the firm already knows is named at Fig 5 :29-30: *"nothing new here the machinery worked; the answer was already known."*

**Refuter:** a required account that adds no atom to Γ, measured by whether it changes any decision after provenance is stripped; or one where stating the metric plus the residual it leaves costs more than the confusion it removes.

### F6 — Two currencies, do not sum (strain named)

**Mode: `general` for the structural shape, `specified` for the money-versus-physical binding. Domain D2, D3. Status: single-source, with a cross-level binding that is recorded as a strain, not smoothed.**

> Fig 12 :125 "A composition costs in two currencies, and they do not add."

> Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."

> Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it."

Fig 12 governs the two costs of a composition: bits for the description and actions for finding out whether it holds. Applying that to a monetary account and a physical harm is a **cross-level analogue**, licensed by Fig 4 :20 (*"Only the actors, the currency and the anchor change"*) but not a direct figure line about externalities. The shape transfers: a system holding one accounting *"cannot compare them and will not notice the shortfall"* (Fig 12 :127). The naive answer, put a price on the harm and add it to profit, is the error the figure names. The honest form holds the two readings apart and reports both.

**Refuter:** a demonstrated single monetized aggregate that prospectively predicts both the firm's decision and the physical harm trajectory on both axes, with no residual left on either. That would collapse the two readings into one and break F6.

**World bearing:** the World Bank 2024 shadow-price guidance says *"current limitations of modeling to estimate SCCs result in large uncertainties about the true marginal damage costs of GHG emissions"* and *"the SCC is and will always remain contested."* That is the world's version of the shortfall. It corroborates the shape at one remove; it is not a figure line.

### F7 — The question is a union; a single lever leaves the intersections standing

**Mode: `specified`. Domains all. Status: figure-derived (Fig 9).**

The four conditions C1 to C4 overlap. A single lever, for example "mandate a disclosure template," clears the region where only C1 holds and leaves the intersections standing. Fig 9 :56: *"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* What remains is *"not a harder case of either"* (Fig 9 :57) but a categorically different compound.

**Refuter:** one instrument that resolves all four conditions across all failure types with no categorically different residue. That would collapse the union into a partition.

**World bearing:** Gatti et al. 2019 reach a similar union conclusion from a completely different evidence pool, warning that *"also an exclusive mandatory approach may favor the establishment of grey zones where companies look for ways around the rules."* Agreement across pools is weak corroboration of the shape, not a second witness for the figure verdict.

### F8 — Internal agreement is not evidence, and a repeated room is not progress

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 7 and Fig 2, low overlap).**

> Fig 7 :13 "agreement compounds, evidence does not"

> Fig 7 :35 "A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."

> Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."

An industry voluntary standard in which every firm agrees that it "accounts for harms" is a chain of mirrors. It produces a convention, not a verdict. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* An external checker must not draw on the firm's own evidence pool.

**Refuter:** a case in which industry agreement, with no independent ground reading, prospectively predicts reduced physical harm across named slots. If it holds, F8 weakens.

**World bearing:** the AAAJ Spotlight Accounting study, 2020, records a finding headed *"Importance of externally derived benchmarks for materiality and comparison"* and another that *"Reporting practices create barriers to accessing accurate information."* That corroborates the need for an outside frame, from the accounting field.

### F9 — Which harm, which instrument, which threshold: `gap`

**Mode: `general`. Status: figure-derived gap.**

> Fig 9 :32 "you get a kind of thing, never the answer itself"

> Fig 13 :134 "Unreachable is a verdict here, not a silence"

> Fig 8 :39 "So a search that finds nothing is never a proof of absence."

After a genuine re-census, no figure line names which harms to price, which instrument discriminates them, which threshold is correct, or which jurisdiction should mandate the account. The framework returns the shape of a checkable accounting regime, not its name. Declaring `gap` is the verdict here, not a silence and not a failure. What is owed is a source-discriminating instrument, characterised in effect terms but not held in this folder.

### F10 — The firm's valence changes with the residual

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 12, low overlap).**

> Fig 11 :49 "An actor’s valence is relative to the residual, not a property it carries."

> Fig 11 :51 "No standing list of good actors survives a change of residual."

The same firm is a benefactor under the production residual and a malfactor under the harm residual. "Should firms be required" presupposes one residual; the answer depends on which slot is indexed. Fig 12 :119 names the mechanism: *"catalyst. A part that survives its own use."* A routine that regenerates under one residual can be a spent part under another, and nothing in the routine's description records which.

**Refuter:** a firm whose measured valence is invariant across a documented change of residual. If no such change can be found anywhere, F10 weakens to `general`.

### F11 — What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| The harm residual is per slot, never a corporate total | general | Fig 1 :19, :22 | figure-derived |
| The market is not the anchor for the harm axis | specified | Fig 2 :36-38 | triangulated F1 |
| The harm is a channel failure, not ground decay | specified | Fig 10 :24, :26 | triangulated F1, F2 |
| The habitat must be enumerated outward through the cascade | general rule, specified DDT case | Fig 11 :43, :52-54 | single-source F3 |
| A disclosure mandate makes the bug statable but does not ground it | specified | Fig 10 :16-19, :47, :49 | triangulated F4 |
| An accounting term is an import that must pay the bargain | specified | Fig 6 :14, :23; Fig 5 :42-43 | triangulated F5 |
| Two readings are held apart, not summed | general shape, specified binding | Fig 12 :125-130 | single-source with strain F6 |
| The question is a union of four conditions | general | Fig 9 :54-57 | figure-derived F7 |
| Industry agreement is not a verdict | specified | Fig 7 :13, :35; Fig 2 :35 | triangulated F8 |
| Which standard, threshold or jurisdiction | not stated | none | `gap` F9 |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule, a falsifier written before the run is a design instrument, not only an honesty device. The shape claim is refuted if any of the following is observed:

1. A prospective measurement shows the market price already tracks the physical harm on the relevant axis while the reporting frame is held fixed (breaks F1, Fig 2 :36-38).
2. An aggregate statistic prospectively identifies which named exposure will breach a threshold next, with no live signal lost (breaks F2, Fig 1 :22).
3. A domain is demonstrated in which all material harm is first-order and the cascade contribution measures zero (breaks F3, Fig 11 :52-54).
4. A mandated metric cannot be violated, or its value is set entirely by the reporting firm (breaks F4 as a useful convention, Fig 10 :47-49).
5. A required account adds no atom to Γ, or its statement plus leftover residual costs more than the confusion it removes (breaks F5, Fig 5 :42-44).
6. A single monetized aggregate prospectively predicts both the decision and the physical trajectory on both axes (breaks F6, Fig 12 :130).
7. One instrument resolves all four conditions with no categorically different residue (breaks F7, Fig 9 :57).
8. Industry agreement with no independent ground reading prospectively predicts reduced physical harm per slot (breaks F8, Fig 7 :35).
9. A firm's valence is invariant across a documented change of residual (breaks F10, Fig 11 :49-51).

No part of this solution may be upgraded to `grounded` until one of these has been run and failed to fire, and until an external ground measurement pays for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, never with a policy position (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the four conditions separate in every report. A blended "impact score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Enumerate the habitat outward before choosing a metric (Fig 11 :43). Direct scope is how third-order harm is missed.
4. Treat any corporate account as Γ, a candidate library whose reach must be tested against an external ground, never as the answer (Fig 1 :27).
5. Require what can be violated, and check it from a frame that does not draw on the firm's evidence pool (Fig 10 :19; Fig 2 :42).
6. Hold the money reading and the physical reading apart; do not present a single summed number as the answer (Fig 12 :130, with the strain recorded in F6).
7. Use the economics and accounting literature as one corroborating witness and a budget filter, not as the verdict. Coase, the AAAJ papers and the greenwashing reviews overlap heavily (Fig 2 :31, :40).
8. Stop at the shape. Do not name a standard, a tax rate or a jurisdiction; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources opened after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source*, all read 2026-11-23.

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The canonical limit is *"a shape, not a name"*: the framework says what a missing thing would have to look like, then stops at the limit of the instruments and records the lineage. This governs F9.
- *The Hard Problem is About Source* supplies the metamerism rule: *"If several paths create the same behavior, then behavior is a projection with lossy information."* An instrument that reads green *"cannot comment on the source."* A price that reads a transaction cannot comment on the harm. The remedy is a discriminator, not a name.
- *The Recursive Self-Improvement Trap* confirms the simulation status and the prestige rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* A respected standard setter gives a regime a budget to be tried; it does not make the account true.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Wanted to answer "yes, mandate it" | **Retracted at record level** | The framework returns a shape, not a policy name (Fig 9 :32). The verdict is four conditions, not a yes or no |
| Treated the market as the ground | **Retracted, re-census R1** | Fig 2 :29 names it as an anchor only for questions constitutively about it; Fig 2 :37-38 makes it an instrument on the harm axis |
| Applied Fig 13's six physical terms to "harm" | **Retracted, strain S1** | Only fit by renaming exposure as energy. Re-census: Fig 13 governs the physical substrate, not D2 |
| Read "internalize the externality" as summing a price into profit | **Refused as written** | Fig 12 :130 names that the error; the two readings are held apart. Kept as a `specified` cross-level analogue, not a figure line |
| Treated Fig 12's bits and actions as literally money and harm | **Narrowed and strain recorded** | Fig 12 governs a composition's two costs. Fig 4 :20 licenses the cross-scale binding, with the currency re-named at the new level |
| Used Gatti et al. 2019 as corroboration of the union | **Kept as one witness, not two** | Its evidence pool is business ethics; the figures are primary. Agreement is corroboration at low overlap, not a second verdict |
| Wanted to name GRI or ISSB as the required standard | **Marked `gap`** | Naming a standard is a binding from a world frame onto held atoms, with no source gate in this folder |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 2 and Fig 10 are two figures, but both come from one framework. Triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to harm), resolved by re-census. S2 (market called both an anchor and an instrument), resolved by Fig 2 :36-38: anchor legitimacy is question-relative. S3 (Fig 12's currencies mapped to money and physical harm), recorded as a cross-level binding, not erased. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus *The Library of Babel* bundle passage: it is a union of a channel condition, an enumeration condition, a convention condition and a currency condition, each with its own instrument.
2. **What is the anchor?** The physical harm, measured externally. Not the price and not internal agreement (Fig 2 :36-38, :35).
3. **What is the residual?** `R = |Γ(b,a) − o′|` per slot, where the dropped part of `o′` is the unpriced harm (Fig 1 :19, Fig 10 :26).
4. **Where does the harm live?** Three steps out in the contact cascade, not in the direct transaction (Fig 11 :52-54).
5. **What does "required to account" do?** It authors a convention that makes the bug statable and installs something violable (Fig 10 :16-19). It does not ground the harm.
6. **Does it move the wall?** Only if it imports a new atom into Γ, with a source gate and a shadow test, and pays the bargain (Fig 6 :14, :23; Fig 8 :12-13; Fig 5 :42-43).
7. **Can the two readings be added?** No. Two currencies, held apart (Fig 12 :130, with the strain recorded).
8. **What can be said at the stop?** A shape with four conditions, falsifiers, and a `gap` for the standard, threshold and jurisdiction. Not a yes or no. Fig 13 :134: *"Unreachable is a verdict here, not a silence."*

---

## 8. Updated verdict

The shape survives: **the unpriced harm is a dropped channel reading, not an absent fact; it sits several steps out in a contact cascade that must be enumerated per slot; a requirement to account is a convention that makes it statable and violable, but only an external ground settles it; importing the harm term into the firm's library must pass provenance and pay the bargain; and the money reading and the physical reading are held apart, never summed.** The four conditions are kept separate, never averaged. Which specific standard, threshold or jurisdiction fills the slots is a `gap`, not a hidden answer. Mode `specified`. No world source flipped a verdict; the two apparent conflicts (market as anchor, Fig 12's currencies) were returned to the census and re-mapped. Strains after re-census: S3 recorded, S1 and S2 dissolved.
