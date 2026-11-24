# Figure-grounded audit: BUS-0099, which corporate accountability changes decisions

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) - o'|` per slot `s` (Formula step 1; Symbols table, `R`).

- **b** is what the firm takes to be the case before it acts: its beliefs about what regulators will enforce, what investors will price, what employees will report, what buyers will purchase, and what is disclosed about it.
- **a** is what it decides and does: a sourcing contract, a plant retrofit, a pay policy, a supplier audit, a disclosure, a lobbying position, a product claim.
- **Γ(b,a)** is what the firm's library predicts will follow: compliance, cost, reputation, return, risk.
- **o′** is what the world actually returns: an injury rate, an emission, a verified wage payment, a court finding, a purchase, a divestment, a permit revoked.
- **s** is the decision slot. R is indexed by slot and by time, never aggregated into a single firm-level "accountability score."

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is **which mechanisms move `a` so that `R` shrinks at a ground**, and which merely move the firm's description of `a`. Call the first `Δcontact` and the second `Δdescription`. Observed: all five candidates can produce `Δdescription` (a policy, a report, a rating, a pledge, a campaign). The residual is that `Δdescription` is routinely mistaken for `Δcontact`.

State the residual as: *which interventions change the firm's action against a ground that does not move when the firm pushes on it, and what would discriminate that change from a change in the firm's self-report?* This is an effect description. It names no theory and no winner. "Law," "oversight," "voice," "transparency" and "pressure" are candidate names, withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a set of conditions whose conjunction is necessary for `Δcontact`, plus an instrument that discriminates `Δcontact` from `Δdescription`. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so section 4's refuter can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"you push on it, it is not an anchor."* A published ESG score, a compliance checklist and a reputation metric all move when the firm pushes on them (through selection of scope, metric shopping, PR), so they are instruments at best. Viable anchors here: a verified physical or welfare outcome, a court finding, an actual purchase or capital allocation, an incident count. Seat map line 13 agrees: an anchor is *"an experiment, a counter, a market, a proof checker, a patient outcome."*

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** The five candidates are five relations between a firm and a ground, each with three terms at least: the mechanism reads the firm, reports a value, and a consequence follows (or does not). This is a **sequence** with an **ordered** bond (`→`, *"A then B; B needs A to have happened"*, Fig 12 :72), not a set. A report that is never read is a chain cut at the third term.
- **Symmetry.** None of the five is symmetric: regulator and firm are not interchangeable, buyer and firm are not interchangeable. "Accountability" also carries a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87): a mechanism bites when a measured value crosses a threshold that the mechanism itself does not set. A threshold the firm can set is a convention, not a ground (Fig 10 :47).
- **Scale.** Three scales are in view: the single decision slot inside the firm (Fig 4, one-agent panel); the habitat of regulators, investors, employees, consumers and standard setters around the firm (Fig 4, population panel with *"something that ranks what they produce"*, Fig 4 :5); and the channel across time by which a reading reaches a decision (Fig 10). The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21); *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The decision loop** (one slot, one scale) | managers, routines, the firm's Γ | actions and residual reduction | yes: the realized outcome on that slot (a verified harm, incident, wage, emission) | admitted |
| **D2 The accountability habitat** (population) | regulators, courts, investors, employees, consumers, NGOs, media, standard setters | sanctions, capital, purchases, attention, disclosure | yes: the ground each channel reports against; *"the market"*, *"a counter"*, *"a patient outcome"* (Fig 2 :29) | admitted |
| **D3 The verification arrangement** (oversight) | boards, auditors, raters, reporting systems, complaint channels | agreement, provenance, independence | yes: the ground, never agreement (Fig 2 :35, Fig 7 :35) | admitted |
| **D4 The temporal channel** (across reporting cycles) | metrics, disclosures, audits, ratings, warnings | contact with the ground | yes: *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 Corporate culture as self-grounding accountability** | the leadership | sincerity, values | **no** anchor independent of the firm's own reading; it updates when pushed | not a domain yet |
| **X2 Reputation as the ground** | the brand | media sentiment, brand value | measurable, but it updates when the firm pushes on it via PR; it is an instrument inside D3/D4, not a ground | absorbed, not separate |

X1 and X2 fail the anchor test and are excluded before any figure line is applied to them. This is a structural exclusion, not a claim that culture or reputation never matter.

### 1.3 Partition or union

D2 overlaps D3: oversight actors are habitat actors, so law that mandates disclosure lives in both. D3 overlaps D4: the reporting channel is the verifier's instrument. D1 overlaps D4: the firm reads the ground through the same channel the verifier uses. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) the mechanism ranges against a ground that does not move when the firm pushes on it; (C2) the firm cannot reconstruct or produce the check; (C3) the channel delivers a per-slot signal to someone who can impose a consequence; (C4) the mechanism brings a closure that differs, so an import can occur. A mechanism failing only C1 and one failing only C3 are not different degrees of one failure; they are different compounds needing different instruments. Fig 9 :55 predicts that a single lever, for example "mandate more disclosure," clears the region where only one condition holds and leaves the intersections standing because the second condition still binds.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

Order for this question: 1 perception (can the mechanism read the actual action and outcome, not the description?) to 2 vocabulary (does it have terms for what the action affords and what would count as progress there?) to 3 objective (can it say what would count as a changed decision?) to 4 planning (can it impose a consequence?) to 5 learn and carry (does the change survive the next reporting cycle?). The middle link is the one with no instrument: a mechanism can collect many readings and issue many reports without ever stating what would count as a decision changing. Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most reform effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs indexing and the Δdescription trap |
| 2 The Ground | anchor test, independence, mirror vs triangulation | decisive for C1 and C2 |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs transfer from individual to firm and cycle to cycle |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs why more policy is not more reach |
| 6 Closure / Reachability | import is the only operator that moves the wall | decisive for C4 |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs repetitive oversight and disclosure cycles |
| 8 Union Surplus | idempotence; provenance separates convergence from import | governs the five mechanisms as overlapping frames |
| 9 Leave / Arrive | union vs partition; describe residual first; filters vs witnesses | governs the unbundling and the refusal of a ranking |
| 10 Ground Maintainer | ground does not decay, channel does; non-reconstructibility; stakes | decisive for C2 and C3 |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for the no-universal-ranking verdict |
| 12 The Bond | arrangement is the substance; sequence, comparison, catalyst, functional group | governs mechanism structure and the order of conditions |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |
| Operators table | negation/refusal, comparison, sequence | governs what a fake mechanism lacks |
| Symbols table | `R` is the aim; the ground is the anchor | governs the residual statement |
| Seat Map | soundness, stakes, inward instruments, produced-not-read | governs independence and dead channels |

Strain test applied during this census: an early attempt to apply Fig 13's six physical terms to "stakeholder groups" only fit by calling a regulator a kind of energy and a disclosure a kind of gradient. That is a strain, so Fig 13 does **not** govern stakeholder groups. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about corporate accountability, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The question is a union, so a single ranking is a category error

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 9 and the *Library of Babel* bundle passage, low topical overlap, but one framework evidence pool).**

Quotes in section 1.3 govern. The five candidates overlap: law often creates the disclosure that public transparency uses; investor oversight often consumes that disclosure; consumer pressure often consumes the same disclosure; employee voice often supplies the fact that makes the disclosure verifiable. A "which one wins" answer is an average over a union. The *Library of Babel* essay asks the same question in its own words: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

**Refuter:** a prospective, per-slot study in which a single one of the five mechanisms, applied across habitat substitutions, restores both contact and reach in both failure types and leaves no categorically different residue. That would collapse the union into a partition and F1 would be false.

### F2: A mechanism changes decisions only if it ranges against a ground that does not move when pushed

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 2 and Fig 10, low overlap: anchor/triangulation vs ground maintainer).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"you push on it, it is not an anchor."** (Fig 2 :30)
> **"The anchor must not update."** (Fig 2 :33)
> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"a declared meaning is not a grounded one"** (Fig 10 :18)

A statute with an inspector, a court and a penalty is the clearest of the five at satisfying C1: its reading (you complied or you did not) does not change because the firm thinks well of itself. A voluntary pledge, a self-scored ESG index and a reputation campaign fail C1: they move when pushed. The world source *Corporate social responsibility* (Wikipedia, 2026) reports that *"Critics dismiss these reports as lip service, citing examples such as Enron's yearly 'Corporate Responsibility Annual Report' and tobacco companies' social reports."* That is C1 failing in the world's own words. Note the mode: this is a condition, not a name. Law satisfies C1 **when enforcement is real**, not by virtue of being called law. A law nobody enforces is a convention, and *"a convention that decides an outcome has stopped being one"* (Fig 10 :47).

**Refuter:** a documented case in which a mechanism whose reading demonstrably moves when the firm pushes on it (self-scored, self-scoped, unreviewed) changes a decision at the ground as reliably as an enforced external anchor. If that is observed, C1 is not necessary and F2 is false.

### F3: The check must be independent: the firm must not be able to produce it

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10 and Seat Map, different documents but one framework; plus the world source on whistleblower retaliation, which is low overlap).**

> **"A verifier that can reconstruct the claim cannot verify it."** (Fig 10 :42)
> **"Soundness requires the checker to be unable to produce what it is checking."** (Fig 10 :43)
> **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"** (Fig 10 :59)
> **"Where a stake cannot be removed, declare it."** (Fig 10 :60)

Investor oversight satisfies C2 only when the overseer has a ground and a reading the firm cannot manufacture. A rating paid for by the issuer, or an internal audit that grades the routines its own authors wrote, is a verifier that can reconstruct the claim. The Seat Map states it as a law: *"A verifier that can reconstruct the claim cannot verify it. The checker must be unable to produce what it is checking."* (Seat Map :149). And independence decays: every correction raises correlation between checker and checked, so a board that has calibrated against the same management for a decade has spent its independence (Seat Map, the shelf life).

Employee voice is the lowest-correlation frame of the five when it carries information only an insider has, but its stake in the reading is severe. The world source *Whistleblowing* (Wikipedia, 2026) reports: *"Whistleblowers often face retaliation for their disclosure, including termination of employment, or criminal persecution for revealing classified governments secrets."* The same source notes that *"people are more likely to take action with respect to unacceptable behavior, within an organization, if there are complaint systems that offer not just options dictated by the planning and control organization, but a choice of options for absolute confidentiality."* Unprotected voice is a dead channel; protected, confidential voice is a genuinely outside reading. Both are figure predictions (Fig 10 :59 on stakes, Fig 10 :24 on channel decay), corroborated by a field with no shared evidence pool with the framework.

**Refuter:** a controlled comparison in which a check the firm can fully author and grade is as effective at producing ground-settled `Δcontact` as one it cannot author. That breaks Fig 10 :42 and F3.

### F4: The channel must deliver a per-slot signal to someone who can impose a consequence

**Mode: `specified`. Domains D3, D4. Status: triangulated (Fig 10, Fig 1 and Seat Map; plus an independent economics source).**

> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"keep the anchor reachable"** (Fig 10 :29)
> **"the output is not a verdict, it is you have lost touch"** (Fig 10 :27-28)
> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)

Public transparency and consumer pressure change decisions only if the disclosure reaches a decision point with a consequence attached. A report that stops at publication is a stream with a writer and no consumer, the named failure genus in the Seat Map: *"Produced, recorded, and not read. A stream with a writer and no consumer; a decision made on a constant while the measured value sits unread one call away."* (Seat Map :271). And *"Every instrument points inward unless one is built to point out."* (Seat Map :285). An aggregate firm-level score is a pooled reading (Fig 10 :26) and hides the live slot (Fig 1 :22).

The independent economics source Houde and Myers, *"Are Consumers Attentive to Local Energy Costs? Evidence from the Appliance Market"* (NBER Working Paper 25591, 2019), reports: *"We strongly reject that consumers are unresponsive to local energy costs under a wide range of assumptions."* The relevant shape is not "consumers care" but "the signal is local and present at the point of decision." Consumer pressure bites when the consequence is anchored at the purchase, and fails when it depends on an abstract claim at a distance. This corroborates C3 at a different stratum and carries low overlap with the management literature.

**Refuter:** a documented case in which a report that reaches no decision-maker and carries no possible consequence changes a firm's action at the ground. That breaks C3 and F4.

### F5: Repetitive oversight is a mirror chain, not evidence

**Mode: `specified`. Domain D3. Status: triangulated (Fig 7 and Fig 2, low overlap: selection between rooms vs anchor triangulation).**

> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket's fidelity across the handoff"** (Fig 7 :38)
> **"the ground's pressure on the room"** (Fig 7 :39)

Annual board reviews that ask the same questions, ratings that reuse last year's questionnaire, and audits that inspect the same documents are handoffs of the same room. Agreement inside them compounds while evidence does not. Fig 7 :42: *"booking a room like the last one is how a chain stops travelling at all."* The world source *Corporate governance* (Wikipedia, 2026) notes that organizations should *"implement procedures to independently verify and safeguard the integrity of the company's financial reporting"*, which is the figure's bracket fidelity at the governance stratum. A mechanism that changes the room, for example a regulator introducing a measurement the firm did not choose, is the move that can progress.

**Refuter:** a documented oversight chain that keeps the same closure across several cycles and still produces new, ground-verified readings of the firm without any import. Under Fig 7 :36 that should be impossible; if observed, F5 is false.

### F6: The same mechanism has different valence against different residuals

**Mode: `general` structural, `specified` consequence. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

This is the figure-grounded reason no universal winner exists. Consumer pressure can force a recall on a safety slot and reward a misleading label on a different slot. Investor oversight can push a long-horizon retrofit and punish the same retrofit when the quarter dips. Law can set a floor and be captured into a ceiling. Employee voice can surface a hazard and be retaliated into silence. The valence attaches to the relation between actor and residual, not to the actor. The world source *Shareholder activism* (Wikipedia, 2026) states: *"Shareholder activists can address self-dealing by corporate insiders, although large stockholders can also engage in self-dealing to themselves at the expense of smaller minority shareholders."* That is Fig 11 :50 in the finance field, from a source with no shared pool with the framework.

**Refuter:** a demonstrated case of a mechanism whose measured valence is invariant across a documented change of the firm's residual and across habitat substitution. If none can be found anywhere, F6 weakens to `general` only.

### F7: More reports, ratings and policies grow the library, not the reach

**Mode: `general` with a `specified` consequence. Domain D3. Status: triangulated (Fig 1, Fig 5 and Fig 9, three distinct figures).**

> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"a library that grows is not a reach that grows."** (Fig 5 :72)
> **"settling is necessary for a term to be composed over, and it is not sufficient."** (Fig 5 :69)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

Counting policies adopted, reports published, ratings obtained or pledges signed counts the denominator (Fig 5 :69). The world source *Corporate social responsibility* (Wikipedia, 2026) reports that critics *"observed that CSR is merely window-dressing, or an attempt to pre-empt the role of governments as a watchdog over powerful multinational corporations."* That is `Δdescription` named in the world literature. The specified consequence: an answer to BUS-0099 that uses volume of accountability activity as evidence has already made the Fig 1 :27 error.

**Refuter:** an averaged accountability-activity index that predicts prospectively and per slot which named decision will change at the ground. If one exists, F7's methodological consequence is false.

### F8: A mechanism that cannot be violated is a convention, not a check

**Mode: `general`. Domain D3. Status: triangulated (Fig 10 and the Operators table/Formula negation rule).**

> **"install what can be violated"** (Fig 10 :19)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"a refutation is a negation, which is why a vocabulary without it can only accumulate"** (Operators table :58)

A mechanism with no losing condition cannot carry a refutation. A voluntary pledge with no penalty, no publication of failure and no third-party reading says what the firm contains and cannot say that the firm is wrong. Formula step 2 routes a false held term to REFUTED: *"a term held is false; what is owed is a refusal, not an explanation."* A vocabulary that can only accumulate can correct a description and cannot carry the correction. So C1 and C2 are necessary but not sufficient: the mechanism also needs a negation, a way to fail.

**Refuter:** a mechanism with no possible losing condition that nonetheless produces a ground-settled change in a named decision. That would break the negation requirement and F8.

### F9: Independence is bought, not assumed, and shared pools are one witness

**Mode: `general`. Domain D3. Status: single-source for the arithmetic (Fig 2/Fig 8/Seat Map are one framework), corroborated at low overlap by the Wikipedia pool only as a metaphor.**

> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)
> **"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."** (Fig 8 :48)
> **"High correlation is disqualifying for a verdict and efficient for a convention."** (Seat Map :163)

Four world sources in this folder are Wikipedia articles. They are one evidence pool, because one encyclopedia and one editorial community produced them, so their agreement is one witness, not four (Fig 2 :40). The NBER paper is a separate pool. The framework's own figures are the primary pool. No verdict here rests on the count of agreeing sources. The world sources supply predictions and mechanisms, not authority.

**Refuter:** two mechanisms shown to have genuinely independent evidence, followed by a demonstration that their agreement still adds nothing beyond one of them. That would break the surplus claim in Fig 8 :45 and F9.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per decision slot, never a firm-level average | general | Fig 1 :19, :22 | figure-derived |
| The anchor must not move when the firm pushes on it | general | Fig 2 :29, :30, :33 | figure-derived |
| The five candidates form a union, not a ranking | general | Fig 9 :54, :55, :57 | figure-derived |
| A check the firm can produce is not a check | general | Fig 10 :42, :43 | figure-derived |
| The channel can decay while the ground does not | general | Fig 10 :24, :26, :28 | figure-derived |
| Capability to change decisions lives in firm-and-habitat | specified | Fig 11 :39, :40 | triangulated F6 |
| Valence of each mechanism is relative to the residual | general | Fig 11 :49-51 | figure-derived |
| Repetitive oversight compounds agreement, not evidence | specified | Fig 7 :13, :35, :36 | triangulated F5 |
| More disclosure activity is not more reach | specified | Fig 1 :27, Fig 5 :69, :72 | triangulated F7 |
| Which named mechanism wins for a given residual | not stated | none | gap: shape, not a name (Fig 9 :32) |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"And a falsifier written before the run is a design instrument, not only an honesty device."* (Seat Map :287). The shape claim is refuted if any of the following is observed:

1. A mechanism whose reading demonstrably moves when the firm pushes on it changes a decision at the ground as reliably as an enforced external anchor (breaks F2, C1, Fig 2 :29-33).
2. A check the firm can fully author and grade is as effective as one it cannot author (breaks F3, C2, Fig 10 :42-43).
3. A report that reaches no decision-maker and carries no consequence changes a firm's action at the ground (breaks F4, C3, Fig 10 :24-29).
4. Two mechanisms drawing on the same evidence are shown to be two independent witnesses for a verdict (breaks F9, Fig 2 :40, Fig 8 :48).
5. A single universal ranking of the five mechanisms is validated prospectively per slot across habitat substitutions (breaks F1 and F6, Fig 9 :57, Fig 11 :51).
6. A mechanism with no possible losing condition produces a ground-settled change in a named decision (breaks F8, Fig 10 :19).
7. Fig 13's six terms are derived from five, Fig 6's idempotence fails inside a closed set, or a frame certifies its own limit (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of accountability (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Do not publish a league table of the five mechanisms. Unbundle the union and ask which condition each mechanism fails for the named slot (Fig 9 :54-57).
3. Ask, at each reporting handoff, whether the reading moved when the firm pushed on it, whether the firm could produce the check, whether anyone who can impose a consequence read it, and what new atom entered (C1 to C4).
4. Keep the four conditions separate in every report. A blended "accountability score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
5. Treat reputation, culture and disclosure volume as Γ, that is, as candidate libraries whose reach must be tested against the ground, never as answers (Fig 1 :27, Fig 5 :72).
6. Use the accountability literature as a budget filter and as one corroborating witness, not as the verdict. The four Wikipedia pages share a pool (Fig 2 :31, :40).
7. Require a losing condition in every mechanism. A pledge that cannot fail is a convention that has already decided its outcome (Fig 10 :19, :47).
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name which mechanism is best; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source* and *Decoding Tacit Knowledge* (all opened 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*
- *The Hard Problem is About Source* gives the instrument rule in effect terms: *"If several paths create the same behavior, then behavior is a projection with lossy information."* A disclosure that can be produced by harm reduction and by reputational management does not discriminate the source. What is owed is a discriminator, not a name.
- *Decoding Tacit Knowledge* confirms the outreach order: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| First draft treated the five candidates as five atoms in a partition and tried to rank them | **Retracted, strain S1** | Only fit by forcing Fig 13's six physical terms onto stakeholder groups. Re-census: Fig 13 governs the physical substrate, not an organization's habitat. Fig 9 :54-57 governs instead |
| First draft called law "the anchor" | **Narrowed to `specified`** | Law is an anchor only when its reading does not move when pushed. An unenforced statute is a convention (Fig 10 :47). Verdict unchanged, condition added |
| Treated the four Wikipedia pages as four independent corroborations | **Retracted as independent witnesses, kept as one pool** | Same encyclopedia and editorial community. Fig 2 :40. The NBER source is the only independent world pool |
| Planned to name "stakeholder accountability" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. A framework label is not a ground result |
| Read the ESG-rating and disclosure literature as evidence that transparency changes decisions | **Narrowed to a mechanism prediction** | What those sources report is `Δdescription` (greenwashing, lip service). Fig 1 :27 disqualifies a frame scoring itself with a quantity it produces |
| Wanted to call F6 a `general` law of all firms | **Kept `general` for structure, `specified` for consequence** | Valence relativity is structural (Fig 11 :49-51); no per-slot ground measurement pays for the firm-level consequence here |
| F2 "decisive" in an early draft | **Downgraded to triangulated** | Fig 2 and Fig 10 are two figures, but one framework. Triangulation here means low topical overlap, not independent evidence pools |
| F10 row "which named mechanism wins" | **Marked `gap`** | The framework returns a shape; the source-discriminating instrument is not held here (Hard Problem essay) |

**Strains sent to the log:** S1 (Fig 13 applied to stakeholder groups), resolved by re-census; S2 (calling a market "the ground" while also treating buyer preference as moving), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground is what settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the *Library of Babel* bundle passage: it is a union of four conditions, each with its own loop and instrument.
2. **What is the anchor?** The realized outcome per slot, named by Fig 2 :29 (a counter, a market, a patient outcome). Not consensus, not a disclosure, not a rating (Fig 1 :27).
3. **Does any mechanism change decisions on its own?** No. Fig 11 :39-40. Capability is firm-and-habitat; an improvement that does not change contact changes nothing.
4. **When does a mechanism fail?** It moves when pushed (C1); it can be produced by the firm (C2); its channel is dead or pooled (C3); it brings no differing closure (C4).
5. **Why do reputational mechanisms look effective?** Mirror chain: agreement compounds, evidence does not (Fig 7 :13, :35). `Δdescription` is counted as `Δcontact`.
6. **Why is there no winner?** Valence is relative to the residual (Fig 11 :49-51); no standing list of good actors survives a change of residual.
7. **What can be said at the stop?** A shape with four conditions, falsifiers, and the instrument that would close it. Not a rank, not a name, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **an accountability mechanism changes a decision only when it ranges against a ground that does not move when the firm pushes on it, when the firm cannot produce the check, when the channel delivers a per-slot signal to someone who can impose a consequence, and when it brings a closure that differs. Law, investor oversight, employee voice, public transparency and consumer pressure are habitat actors whose valence is relative to the residual, not a rank order of effectiveness; law is the clearest anchor only when enforcement is real, voice is the lowest-correlation reading only when it is protected, and disclosure and pressure change contact only when tied to a point of consequence.** The four conditions are kept separate, never averaged. Which named mechanism dominates for a given slot is a `gap`, not a silence: the framework returns a shape, and the instrument that would discriminate `Δcontact` from `Δdescription` is not held here. Mode `specified`. No world source was allowed to flip a verdict; the one genuine tension (self-reported ESG activity as evidence) was returned to the census and re-mapped as `Δdescription`. No unresolved strain remains after re-census.
