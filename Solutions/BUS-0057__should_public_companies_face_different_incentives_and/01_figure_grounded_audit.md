# Figure-grounded audit: BUS-0057, public versus private-equity-owned versus founder-controlled firms

**Mode of this document: `specified` on the design shape, `general` on the structural laws, `gap` on the specific rule content.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the framework essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the normative question it reports on. See `05_what_shape_means.md` section 6.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session; cite as `Fig N :line`. `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`. Every figure quote below is verbatim from the extract.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o'| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the governance belief, formed from a firm's history and inherited legal and business priors, about what the market and regulator will reward.
- **a** is what is chosen: incentive schemes, disclosure duties, board obligations, fiduciary duties, stakeholder protections.
- **Γ(b,a)** is what the governance library predicts will follow from those choices.
- **o'** is what actually happens: firm survival, returns, innovation, worker and creditor outcomes, systemic effects.
- **s** is the firm, indexed by ownership form: public, private-equity-owned, founder-controlled. R is measured per form and per firm, never aggregated into a single "corporate sector" average.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the level of R but its **dependence on the slot**: the same formal obligation (say, a quarterly earnings target or an independent-board requirement) appears to carry a different residual in a widely held public firm, a PE-backed firm and a founder-controlled firm. A frame that predicts all firms have the same governance residual, or that ownership form simply does not matter, has a residual here.

State the residual as: *why does the gap between what a governance regime predicts and what its ground returns differ by ownership slot, and what design rule should bind incentives and obligations to each slot?* This is an effect description. It names no theory, no "agency costs", no "stakeholder capitalism", no "founder vision". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (i) a per-slot indexing rule for R, (ii) an invariant governance kernel with re-bound actors, currency and anchor per form, (iii) an unbundling of incentives from obligations and of the three forms from one another, and (iv) an instrument that discriminates a failure of contact from a failure of reach in each form. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The same line names candidate anchors directly: a market, a counter, an outcome. Fig 2 :30: *"you push on it, it is not an anchor."* Regulator opinion, analyst consensus, governance ratings and internal metrics move when pushed; they are instruments at best. Viable anchors: realized firm outcomes measured per form, survival, long-horizon returns, innovation, and stakeholder outcomes that can be counted. The ground is not the stock price alone, which is a reading that can be gamed (see F8 and the Goodhart source).

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation: governance regime a, firm belief b, firm Γ, realized outcome o', indexed by slot s (ownership form and firm) and ordered by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because governance acts before outcomes, and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87) because "should" is a threshold judgment about which regime leaves the smaller residual. It is not symmetric: regime and outcome are not interchangeable.
- **Symmetry.** "Better governance" is a threshold relative to the ground, not an absolute property (Fig 12 :85-89). The relation is asymmetric in time: a loss of contact is not undone by reversing the rule.
- **Scale.** Three scales are in view: the single firm's governance loop (Fig 4 one-agent panel), the population of firms sharing a capital market and *"something that ranks what they produce"* (Fig 4 :5), and the regulatory frame that authors the conventions. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The firm governance loop** (one agent, one scale) | managers, board, owners, incentive schemes, obligations | decisions and residual reduction | yes: realized firm outcomes on the choice | admitted |
| **D2 The ownership habitat** (population) | dispersed public shareholders, PE sponsors, founder, creditors, workers, entrants, regulators | control, capital, time horizon, information | yes: market verdict and counted stakeholder outcomes; the market as ground (Fig 2 :29) | admitted |
| **D3 The governance convention library** (composition inside the regime) | rules, incentive devices, disclosure and obligation regimes as conventions | reach (what can be composed and done), |φ| cost | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The verification and regulatory frame** (the seat that authors and checks) | regulators, legislators, standard setters, researchers, outside checkers | rulings, conventions, evidence | yes: the ground, never agreement; the seat's stake must be declared (Seat Map :171) | admitted |
| **X1 Ownership form as a free-floating good or bad property** | the form itself (public, PE, founder) | presumed virtue | **no** anchor independent of the residual; valence is relative to the residual (Fig 11 :49-51) | not a domain yet |
| **X2 One uniform global rule as the only serious option** | the regulator | uniformity | its anchor is administrative comparability, which is an instrument, not the ground (Fig 2 :30) | absorbed into the union analysis below |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that ownership form never matters. X2 is the question's own framing and is handled as a union to be unbundled, not as a domain.

### 1.3 Partition or union

D1 and D3 overlap: Γ sits inside the firm loop, so their overlap is a compound with its own loop. D2 and D4 overlap: the regulatory frame acts on the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

Two unbundlings are owed. First, **incentives** and **obligations** are two conditions, not one: a PE sponsor's high-powered management equity is an incentive, while an independent-audit duty is an obligation, and a single lever can clear the region where only one binds. Second, the three **ownership forms** are not three points on one scale: they differ simultaneously in time horizon, information, ownership concentration and exit route (Witney 2017; Wright et al. 2009, see F5). The unbundled conditions are: (C1) a maintained channel to a ground that still pays, and (C2) renewal of governance reach through contact with a closure that differs. A public firm failing only C1 and a founder firm failing only C2 are not different degrees of one failure; they are different compounds and need different instruments.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the regime read the residual per form?) → 2 vocabulary (does the governance library have terms for what each ownership form affords?) → 3 objective (can it say what progress would count as, per form?) → 4 planning → 5 learn and carry. The middle link, having terms for what each form affords and saying what counts as progress there, is the one with no instrument. Most reform effort lands above the break, where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not its normative answer |
| 2 The Ground | market and outcomes as named anchors; independence vs common pool | governs the anchor and the convention/verdict line |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer and the same-kernel-per-form claim |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a governance rule can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs renewal of governance reach (C2) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs an authorship room that keeps agreeing with itself |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; seat authors conventions | governs quick loss (C1 failure) and the convention/verdict rule |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1 and D2 |
| 12 The Bond | isomer, functional group, comparison bond; arrangement is substance | governs form-as-isomer and the threshold in "should" |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest-stop role only (strain S1, see section 6) |

Strain test applied during this census: an early attempt to apply Fig 13's six physical terms to "governance" only fit by calling incentives a kind of gradient and disclosure duties a kind of network. That is a strain, so Fig 13 does **not** govern governance content. Re-census sent Fig 13 to the honest-stop role only (section 6, S1). A second early attempt used ⋛, the comparison bond, as "the threshold between public and private ownership". That is a type error: ⋛ relates two quantities, not two ownership categories. Re-census keeps ⋛ for the threshold in "should" (which regime leaves the smaller residual), not for a boundary between forms. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable design prediction about these three forms, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Ownership form is a slot, so R must be measured per form, never averaged

**Mode: `general` with a `specified` consequence for governance design. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap: per-slot residual vs union unbundling).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)

A single "governance quality" score pooled across public, PE and founder firms destroys the only signal that says which slot is losing contact. The specified consequence: any answer to BUS-0057 that is an average difference between ownership categories has already thrown away the per-firm, per-form signal.

**Refuter:** an averaged, form-blind statistic that predicts prospectively and per named firm which slot will lose contact next, with no loss of signal. If one exists, F1's methodological consequence is false.

**World bearing (secondary only):** Federo 2020 reviews six distinct ownership types, including *"family, lone founder, corporation, institutional investor, state, and venture capitalist"*, each shaping board governance differently. This corroborates per-slot indexing but is a literature review sharing the governance evidence pool, so one witness, not many (Fig 2 :31).

### F2: Same governance kernel, re-bound actors, currency and anchor per form

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 4 and Fig 11, low overlap: membrane kernel vs habitat/valence).**

> **"The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :19-20)
> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)
> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)

This is the governing line for the question. The loop and the rule for naming what worked do not change between a public firm, a PE-backed firm and a founder firm. What changes is the cast (dispersed shareholders versus sponsor versus founder), the currency (public market return versus fund exit multiple versus long-horizon control value), and the anchor (which outcome actually settles the residual in each form). So the figure-grounded answer is neither "one identical rule for all" nor "a different kind of governance for each": it is **one kernel, re-bound per slot**. Fig 4 :22 adds the transfer rule: what crosses between forms is a method, never a recording of another form's success. Transplanting a public-company board rule into a PE portfolio company as a replay is a recording, not a generator.

**Refuter:** a demonstration that the governance loop itself (perceive, bet, act, predict, name what worked) changes kind between ownership forms, such that one kernel cannot describe all three. That would break Fig 4 :19-20 for this domain.

### F3: Ownership form has no standing valence; its valence is relative to the residual

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)

Concentrated ownership is a benefactor to a firm whose residual is managerial shirking and can be a malfactor to a firm whose residual is minority expropriation. Dispersed ownership is a benefactor to risk allocation and a malfactor to monitoring. Founder control is a benefactor to long-horizon investment and a malfactor to succession and accountability. The figure refuses a standing ranking of the three forms. Any answer of the form "public companies are inherently better governed" or "founder firms are inherently superior" is X1, a domain that failed the anchor test.

**Refuter:** a capability or form whose measured valence is invariant across a documented change of residual. If no such change of valence can be found anywhere, F3 weakens to `general`.

**World bearing:** the ecology source on mutualism (Wikipedia, *Mutualism (biology)*, read 2026-11-22) reports *"Under certain conditions species of fungi previously in a state of mutualism can turn parasitic on weak or dying plants"* and, citing Sachs and Simms 2006, that *"One mutualist shifts to parasitism, and no longer benefits its partner"*. This is Fig 11 :49-51 observed in a low-overlap field: the same partner changes sign with conditions. It corroborates the mechanism shape, not the corporate fact.

### F4: Governance incentives and obligations are conventions, not verdicts

**Mode: `general`. Domain D4. Status: single-source for the seat's authority to author conventions (Fig 10 and Fig 2 share a framework, so one witness), triangulated for the consequence.**

> **"It does author conventions, because nothing else can see across a seam."** (Fig 10 :45)
> **"A convention makes no claim about the world; a verdict and an atom both do. The seat may author what has no truth value and nothing that does."** (Fig 10 :46)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"Guard, from Figure 10: a convention that decides an outcome has stopped being one."** (Fig 2 :43)

The question is normative ("should"). The figures locate normativity in the regulator seat, which may author conventions because nothing else can see across a seam between frames. A convention makes no claim about the world, so a governance rule is legitimate only while it remains a convention that can be violated and checked. When an obligation becomes a target that firms optimize, it has *"stopped being one"* and become a verdict it authors for itself.

**Refuter:** a governance convention shown to be constitutive of the very outcome it purports to measure, with no independent ground left to range against. That is the failure Fig 2 :43 and Fig 10 :47 name, so observing it confirms rather than refutes the rule; the genuine refuter is a demonstration that a convention can decide an outcome and still be checkable against an unmoved ground with no corruption of the reading. If that is shown, the guard is wrong.

### F5: The three forms are isomers, so the same incentive can behave categorically differently

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 12 and Fig 11, different figures, distinct roles).**

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :124)

Public, PE-backed and founder-controlled firms can share the same atoms (capital, managers, workers, a board, assets) and differ in the bond that joins them (the ownership and control relation). Under Fig 12 :117 they are isomers: same atoms, different arrangement, different substance, decisive in behaviour. That is why the same formal rule can leave a different residual in each form without being "more or less" applied. They also share a **functional group** (Fig 12 :124): *"the group says what kind; the qualifier says which member."* The group is "a firm with owners and a board"; the qualifier is the ownership bond that fixes which substance it is.

**Refuter:** a demonstration that two ownership forms reduce to the same bond over the same atoms and produce the same residual on the same rule, so that ownership form carries no live slot mass. That would collapse the isomer claim.

**World bearing:** Witney 2017, a study of *"The corporate governance of private equity-backed companies"*, identifies the main difference between a PE-backed company, a family-owned company and a listed company as *"the shareholder(s)' anticipated investment horizon, and the level and impact of legal and reputational risk"*. Wright et al. 2009 write that *"The diffuse ownership structure of the public corporation, while allowing risk to be efficiently allocated, is not conducive to the effective monitoring of managers, because free-riding can occur."* Both corroborate the isomer reading from inside the governance pool (one witness). The Fama and Jensen 1983 paper on the *"survival of organizations in which decision agents do not bear a major share of the wealth effects of their decisions"* corroborates that the separation itself is a bond that survives when its agency problems are controlled.

### F6: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal, so one external witness).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The two conditions C1 (contact maintained) and C2 (reach renewed) have different instruments, and within each form the incentive and obligation conditions also differ:

- A C1 failure shows up as saturated metrics, pooled readings, a bracket that no longer matches the residual (Fig 10 :26, Fig 7 :38).
- A C2 failure shows up as a closure that keeps handing itself the same room, no import, and a reach that stops moving while the library keeps growing (Fig 6 :21, Fig 7 :13).

A single lever, whether "impose the same code on every firm" or "let every form write its own rules", clears only the region where one condition holds and leaves the intersections standing (Fig 9 :55). F6 is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions in all three forms with no categorically different residue left over. That would collapse the union into a partition.

**World bearing:** Filatotchev, Jackson and Nakajima 2013 argue that *"a 'one size fits all' approach is undesirable"* because a contingency perspective *"rejects the notion of universal best practices"*. Steel 2018 reports the opposing axiom: *"According to the conventional wisdom, 'one size does not fit all' in corporate governance. Firms are heterogeneous with respect to their governance needs, implying the optimal corporate governance structure must also vary from firm to firm."* Steel then presents evidence that shareholders actually prefer standardized terms, because *"shareholders prefer standardization because they must incur considerable transaction costs to exercise control rights that contain idiosyncratic terms"*. These two are a genuine conflict inside the governance pool. Per the figures' rule, a conflict returns the derivation to the census; it never flips the verdict. Re-census R2 in section 6 resolves it by locating standardization at the **convention** layer (D4) and heterogeneity at the **binding** layer (D2/D3): standardize the seam, differentiate the binding. The verdict is unchanged.

### F7: Reaching a ground is a property of rule and habitat, not of the rule alone

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 11 and Fig 4, low overlap).**

> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)

A governance rule's effectiveness is a property of the rule-and-habitat, not of the rule. Importing an independent-board rule from the public frame into a founder-controlled firm, or a sponsor-monitoring rule from PE into a public firm, is an agent-only improvement if it does not change contact with what settles the residual in the new habitat. Renewal of reach requires contact with a closure that differs: entrants, adjacent ownership forms, creditors, workers, regulators, science (Fig 8 :45: *"Two frames together reach what neither reaches alone."*).

**Refuter:** a governance rule that renews its reach solely by composing inside one ownership form's closure, with no new atom entering from a differing closure, and that still passes the ground test across a change of habitat. That breaks idempotence and F7 with it.

**World bearing:** the Wright et al. 2009 review notes that *"Buyouts are typically characterized by active monitoring by PE investors, high leverage, and the concentration of equity under management control. It is this combination of characteristics that creates a unique corporate governance structure."* The combination, not any single device, is the substance (Fig 12 :117). Also from the governance pool, so one witness.

### F8: Metrics that become targets are conventions that have become verdicts

**Mode: `specified`. Domains D3, D4. Status: triangulated (Fig 10 / Fig 2 and Goodhart/Campbell, low overlap: framework vs measurement-policy literature).**

> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"The ground enters as the only metric."** (Fig 1 :23)

The figures predict that an obligation tied to a proxy will collapse once pressure is placed on it for control purposes. The world supplies an independent, low-overlap witness. Goodhart's law, via CNA 2022, states that *"when a measure becomes a target, it ceases to be a good measure"* and gives the original form: *"Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes."* Campbell's law is reported in the same source: *"The more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures and the more apt it will be to distort and corrupt the social processes it is intended to monitor."* This corroborates Fig 10 :47 at the level of measurement policy, with no shared evidence pool with corporate governance.

**Refuter:** a governance metric that, after being made the target of a reward or obligation, retains an unchanged and independently measured relationship to the ground. Under F8 it should not; if it does, the claim weakens.

### F9: Internal agreement and a repeated authorship room are not evidence

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 7 and Fig 2, low overlap).**

> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"High correlation is disqualifying for a verdict and efficient for a convention."** (Seat Map :163)

A regulator that keeps appointing the same kind of reviewer, using the same governance index and rewarding the same disclosure behaviour is handing itself the same room. Agreement inside it compounds while evidence does not. The Seat Map line matters especially here: governance codes are conventions, and selecting the people who check them for likely agreement produces the disqualifying correlation while remaining perfectly efficient as a convention. This is why `03_public_contact_points.csv` contains public, opt-in institutional venues and no list of people chosen for receptiveness.

**Refuter:** a regulatory room that keeps the same closure across two review cycles and still keeps producing new, ground-verified readings of firm outcomes without importing any new atom. Under Fig 7 :36 that should be impossible; if observed, F9 is wrong.

### F10: The break is usually at the middle link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :113-115 corroborating from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In governance terms, the usual failure is not that the regulator cannot write rules; it is that the governance vocabulary has no terms for what each ownership form affords and cannot say what would count as progress there. More disclosure and more board oversight are budget spent above the break (Fig 3 :29-30). F10 predicts that the highest-value diagnostic is not "is this governance code good?" but "at which link does it currently stop for this form, and was that measured?"

**Refuter:** a documented ownership form whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F11: Which specific incentives and obligations belong to which form is a `gap`

**Mode: `general`. Status: figure-governed.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)
> **"Unreachable is a verdict here, not a silence"** (Fig 13 :134)

No figure line licenses a specific rule such as "public firms must have a majority-independent board while founder firms need only two". The figures license a shape: per-form indexing, one kernel re-bound, unbundled conditions, a reachable ground, and falsifiers. Naming the particular rule would require a source-discriminating instrument that measures how each rule moves the residual per form against an unmoved ground. That instrument is not held here. `08_expert_verification_packet.md` records the gap rather than filling it.

**Refuter:** a ground reading that, for a named rule and a named ownership form, discriminates among candidate sources of a measured outcome and settles which rule belongs in which slot. That would close the gap, not refute it.

### F12: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per ownership form and per firm, never a sector average | general | Fig 1 :19, :22 | figure-derived |
| The regulator authors conventions, not verdicts | general | Fig 10 :45-47; Fig 2 :43 | figure-derived |
| One kernel; only actors, currency and anchor change per form | specified | Fig 4 :19-20 | triangulated F2 |
| Ownership form has no standing valence | specified | Fig 11 :49-51 | triangulated F3 |
| The three forms are isomers over a shared atom set | specified | Fig 12 :117, :124 | triangulated F5 |
| Rule effectiveness is rule-and-habitat, not rule alone | specified | Fig 11 :40; Fig 6 :23 | triangulated F7 |
| A metric made a target stops being a good convention | specified | Fig 10 :47; Fig 1 :23 | triangulated F8 with Goodhart/Campbell |
| Incentives, obligations and forms form a union to unbundle | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F10 |
| Which concrete rule belongs to which form | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"And a falsifier written before the run is a design instrument, not only an honesty device."* (Seat Map :287). The shape claim is refuted if any of the following is observed:

1. A governance rule produces the same residual distribution across all three ownership slots after controlling for habitat, so ownership form carries no live slot mass (breaks F1 and F2, Fig 1 :19-22, Fig 4 :20).
2. The governance kernel itself changes kind between ownership forms, so one loop cannot describe all three (breaks F2, Fig 4 :19-20).
3. An ownership form's measured valence is invariant across a documented change of residual (breaks F3, Fig 11 :49-51).
4. Two ownership forms reduce to the same bond over the same atoms and produce the same residual on the same rule (breaks F5, Fig 12 :117).
5. A convention that decides an outcome remains checkable against an unmoved ground with an uncorrupted reading (breaks F4 and F8, Fig 10 :47).
6. A single lever restores both conditions in all three forms with no categorically different residue (breaks F6, Fig 9 :57).
7. A rule renews governance reach solely by internal composition, with no new atom from a differing closure, and still passes the ground test across a habitat change (breaks F7, Fig 6 :21, :23).
8. The figures themselves break: Fig 1's per-slot indexing fails, or Fig 4's kernel changes with size, or Fig 12's arrangement stops carrying the substance.

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a ground reading has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of corporate governance (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the three forms and the two conditions separate in every report. A blended "governance quality score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Standardize the seam, differentiate the binding (re-census R2): use common, hard-to-game outcome measures across forms, while allowing the rule that binds to each habitat to differ. This resolves the Steel versus Filatotchev conflict without flipping the verdict.
4. Treat every governance rule as Γ, a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27, *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*).
5. Keep a metric from becoming a target. When an obligation becomes the thing optimized, it has stopped being a convention and must be re-grounded (Fig 10 :47; Goodhart/Campbell).
6. Ask, at each handoff, which link the governance chain stops at for this form and whether that was measured (Fig 3 :29). Do not fund above the break.
7. Use the governance literature as a budget filter and as one corroborating witness, not as the verdict. Jensen and Meckling, Witney, Wright et al., Federo, Filatotchev and Steel share overlapping evidence pools (Fig 2 :31, :40).
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name which concrete rule belongs to which form; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the framework essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (read 2026-11-22, per `05_what_shape_means.md`).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* This governs section 5's stop and F11's `gap`.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term physical set to "governance" | **Retracted, strain S1** | Only fit by renaming incentives as gradients and duties as networks. Re-census: Fig 13 governs the physical substrate, not a governance Γ. Relegated to honest-stop role |
| Used ⋛ as the boundary between public and private ownership | **Retracted, strain S2** | Fig 12 :87 defines ⋛ as *"a threshold relation between two quantities"*, not a category boundary. Re-census keeps it for the threshold in "should" |
| Treated Steel 2018 and Filatotchev 2013 as flatly contradictory | **Conflict, re-census R2** | Standardization lives at the convention layer (D4), heterogeneity at the binding layer (D2/D3). Both can hold; verdict unchanged |
| Wanted to name a specific board-composition rule per form | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Held as `gap` in F11 |
| Read "governance quality" variance as evidence for the answer | **Retracted as a witness, kept as a filter** | Fig 9 :60; averaged quantities are frame-internal (Fig 1 :27) |
| Called Fig 11 :40 a `general` law about all firms | **Narrowed to `specified`** | It is a structural claim; no ground measurement pays for the three-form version here |
| Treated Goodhart/Campbell as corporate-governance evidence | **Narrowed to mechanism-shape corroboration** | The source is measurement policy, not firms; low overlap, so it corroborates the mechanism, not the corporate fact |
| F2 "same kernel" in an early draft called "decisive" | **Downgraded to triangulated** | Fig 4 and Fig 11 are two figures but one framework; low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to governance), resolved by re-census; S2 (⋛ as a category boundary), resolved by re-census; R2 (standardization versus heterogeneity), resolved by layer separation. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of contact maintenance and reach renewal, further split into incentives versus obligations and three ownership forms.
2. **What is the anchor?** Realized outcomes per form, named in Fig 2 :29. Not consensus, not governance ratings, not the stock price alone (Fig 1 :27, Fig 10 :26).
3. **Is the answer a different governance kind per form?** No. Fig 4 :19-20: one kernel, only actors, currency and anchor change.
4. **Is any form standing-better?** No. Fig 11 :49-51: valence is relative to the residual; no standing list of good actors.
5. **Why can one rule behave differently across forms?** Fig 12 :117: they are isomers, same atoms, different ownership bond, different substance.
6. **How does a rule lose contact?** Channel decay (saturated metrics, pooled readings, Fig 10 :24-29); either factor of Fig 7 :37-39 going to zero; a convention becoming a verdict (Fig 10 :47).
7. **How does a regime stay effective?** A chain of differing rooms selected against the surfaced residual (Fig 7 :36), with imports from differing closures moving the wall outward (Fig 6 :23).
8. **What can be said at the stop?** A design shape with falsifiers. Not a specific rule, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence"*, and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives. **Keep one governance kernel, index it by ownership form, measure R per form and per firm, bind obligations to each form's habitat and ground, keep incentives and obligations unbundled, keep the channel to the ground reachable, and refuse both a blanket ranking of forms and a blanket uniformity of rules.** The specific content (which concrete incentives and obligations belong to which form) is a `gap`, not a silence: the framework returns a shape, and the source-discriminating instrument that would name the rule is not held here. Mode `specified` for the shape, `general` for the structural laws. No world source was allowed to flip a verdict; the one genuine conflict (Steel versus Filatotchev) was returned to the census and resolved by layer separation. No unresolved strain remains after re-census.
