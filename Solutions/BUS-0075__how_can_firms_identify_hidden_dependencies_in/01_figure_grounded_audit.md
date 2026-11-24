# Figure-grounded audit: BUS-0075, hidden dependencies beyond direct suppliers

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, fetched 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md` and `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the firm's belief about its supply base: approved-vendor lists, contracts, tier-1 questionnaires.
- **a** is what the firm does: orders, dual sourcing, inventory policy, audits, supplier development.
- **Γ(b,a)** is what the map predicts: continuity, lead time, quality, cost.
- **o′** is what the supply base actually returns when a disruption propagates: a stopped line, a missed shipment, a sub-tier quality failure.
- **s** is a part, site or supplier node, indexed by **tier**. R is indexed per node and per depth, never averaged into a single risk score.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the number of suppliers in the database but **the depth at which the map stops predicting correctly**. Call it `T_s`, the tier at which a node's R goes live while the tier-1 map still reads near zero. Observed in the field: a majority of firms report disruption, and a substantial share of it originates upstream of the first tier. A frame that predicts all dependencies are equally visible, or that a complete tier-1 register closes the question, has a residual here.

State the residual as: *why does the gap between what a firm's supplier map predicts and what its supply base returns stay small at direct suppliers and grow live several tiers out?* This is an effect description. It names no theory, no "visibility platform", no "critical supplier", no "n-tier mapping". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (i) a rule for extending enumeration outward until the cascade stops mattering, (ii) a discriminator that separates a hidden shared source from two independent suppliers, and (iii) an instrument that would fire if either were absent. Until bound, it predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* Here the anchor is the realized disruption event: the line that stopped, the shipment that did not arrive, the measured co-failure. It does not move when a procurement team changes its risk rating. Fig 2 :30: *"you push on it, it is not an anchor."* Supplier questionnaires, audit scores and vendor risk ratings move when pushed; they are instruments at best. Viable anchor: the realized supply event, measured per node and per tier.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** The supply base is a relation over nodes and directed dependencies, not a set. A single link is binary; the object of interest is the k-th order neighbour, so R is indexed by depth as well as by node. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **production** bond (`⇒`, *"A produces B; B did not exist before"*, Fig 12 :76). It is not symmetric: a sub-tier shock reaches the focal firm, the focal firm's order does not reach the sub-tier source in the same way.
- **Symmetry.** "Hidden" is relative to the focal firm's map, not a property a supplier carries (Fig 11 :49). A shared source is a relation, not a kind (Fig 11 :50).
- **Scale.** Three scales are in view: the single node and its direct link, the tier and its cascade, and the whole web. Fig 13 :24 names the relevant structure: *"that entities relate, and influence travels."* The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Direct supplier map** (first order) | procurement, approved vendors, tier-1 contracts | orders, deliveries, contract terms | yes: the realized tier-1 delivery event | admitted |
| **D2 Extended habitat / contact cascade** (tier 2 and beyond) | sub-tier suppliers, raw material sources, geography, infrastructure, conditions, and the dependency relations between them (Fig 11 :46-47) | material and information flow, influence | yes: the realized disruption at depth, a stopped line or missed shipment | admitted |
| **D3 Visibility channel / instruments** | questionnaires, audits, risk scores, visibility software, percepts | contact and coverage | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **D4 Shared-source / common-cause structure** | the hidden shared source, two apparently independent suppliers | correlated failure | yes: measured co-failure under a perturbation, a counter (Fig 2 :29) | admitted |
| **X1 "Supplier risk score" as a property owned by a supplier** | the score | a number | **no** anchor independent of the aggregate that produces it (Fig 1 :27) | not a domain yet |
| **X2 "Supplier criticality" as an intrinsic kind** | the supplier | criticality | no anchor independent of the residual; already inside D2 and D4 (Fig 11 :49-51) | absorbed |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that scoring is useless. A score is a filter for where to look, not a witness for the verdict (Fig 9 :60).

### 1.3 Partition or union

D1 and D3 overlap: the tier-1 map is itself a product of the visibility channel, so their overlap is a compound with its own loop. D2 and D4 overlap: a shared source is an extended-habitat relation, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) **contact extends outward until the cascade stops mattering**, and (C2) **the channel discriminates a hidden shared source from independent failure**. A firm failing only C1 has a depth problem. A firm failing only C2 has a discrimination problem. These are different compounds and need different instruments. A single lever, for example "buy a visibility platform", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55).

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the firm read any tier-2 signal at all?) → 2 vocabulary (does Γ have terms for what a sub-tier node affords: dependency, condition, shared source, cascade?) → 3 objective (can it say what would count as "hidden dependency found", namely a falsifiable prediction of co-failure under a perturbation?) → 4 planning → 5 learn and carry. The middle link, having terms for what a sub-tier situation affords and saying what would count as progress there, is the one with no instrument. Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most diagnosis effort lands above the break because that is where the measurements already exist (Fig 3 :29-30): more suppliers are added to the register, which is link 1 and 4 work, while link 2 and 3 stay unmeasured.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-node residual; frame-internal quantities disqualified | governs how R is indexed, not what the hidden dependency is |
| 2 The Ground | common cause / hidden shared source; anchor and independence | decisive for D4 and for the anchor |
| 3 Dependency Chain | middle link breaks first; reading below the break reads nothing | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs the tier-to-tier transfer and the analogue |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs whether a proposed dependency is admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall; proto-instrument rule | governs how a weak tier-2 signal becomes an instrument |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs repeated audits that produce agreement, not evidence |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep the anchor reachable | decisive for D3 and quick loss of visibility |
| 11 The Habitat | contact cascades; enumerate, never compose; valence relative to residual | decisive for D1 and D2; the DDT line is the question |
| 12 The Bond | ingredients versus arrangement; isomer, catalyst, cycle | governs why a bill of materials cannot name the dependency |
| 13 Minimum Viable Set | network as a structure; set closed, arrangements not | supports the network reading and the honest stop |
| Operators / Symbols tables | `→` sequence, `⇒` production, `⋛` comparison; `R` the aim | notation and index, not a new verdict |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to supply chains only fit by calling a supplier a kind of space, a delivery a kind of energy and dependency a kind of gradient. That is a strain, so Fig 13 does **not** govern supply-chain atoms. Re-census sent Fig 13 to two narrower roles: Fig 13 :23-24 licenses treating the supply web as a network, and Fig 13 :115 plus :134 govern the honest stop (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about firms, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Depth is a contact cascade; first-order enumeration is the named failure

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and the field literature, low overlap: habitat figure versus operations surveys).**

> **"The habitat is enumerated, never composed."** (Fig 11 :43)
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** (Fig 11 :44)
> **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** (Fig 11 :52)
> **"Carson, Silent Spring, 1962. The mechanism, biomagnification through the food chain to eggshell thinning, was established over the following decade."** (Fig 11 :53)

The figure's own example is a supply chain: a chemical applied at one trophic level reaches the apex predator several steps out, and the mechanism is established only after someone enumerates the cascade. A firm that enumerates direct suppliers has done first-order enumeration. The residual that matters is three steps out.

World bearing (secondary only): a Wikipedia synthesis of the BCI and Zurich 2011 survey reports that *"40% of the reported disruptions originated upstream with sub-contractors rather than prime contractors or first-tier suppliers"* (Supply chain risk management, read 2026-11-22). That is F1 in the field's own numbers. It corroborates the figure at the operations stratum; the figure decides.

**Refuter:** a firm that enumerates only direct suppliers and yet shows no residual (no stopped line, no quality loss, no delay) under a documented disruption that demonstrably reached its tier-2 or tier-3 inputs. If the cascade arrives and the map still pays, F1 is false.

### F2: Hidden dependencies are commonly a hidden shared source, not two independent suppliers

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 2 and Fig 11, low overlap: common-cause collapse versus habitat relations).**

> **"collapse 2: common cause"** (Fig 2 :6)
> **"(hidden shared source)"** (Fig 2 :7)
> **"one evidence pool"** (Fig 2 :18)
> **"so the agreement is the pool talking,"** (Fig 2 :20)
> **"not two frames confirming each other"** (Fig 2 :21)
> **"relations: pollination, predation, competition, dependency"** (Fig 11 :47)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)

Fig 2's second collapse is the structural reason two direct suppliers fail together. They do not fail together because they are correlated by fate; they fail together because they draw on one evidence pool, in this domain one sub-tier supplier, one raw material source, one geography or one shared condition. The co-failure is the pool talking. Fig 11 :47 names dependency as a habitat relation to be enumerated, not a property of a node.

This is a cross-scale transfer, licensed by Fig 4 :20 (*"it or a thousand. Only the actors, the currency and the anchor change."*): at the firm stratum the actors are suppliers rather than frames, the currency is material flow rather than agreement, and the anchor is measured co-failure rather than concordant reports. Marked `specified` for firms; the figure decides the shape, the scale transfer is an analogue.

World bearing: Yang, Scoglio and Gruenbacher 2021 report that *"the adverse effects of any disruption can be amplified and spread throughout the systems"* (arXiv:1908.02616, Physica A 563:125466). Network physics corroborates the propagation, from a genuinely different evidence pool.

**Refuter:** a documented co-failure of two direct suppliers whose habitats are demonstrably disjoint (no shared sub-tier source, no shared raw material, no shared geography, no shared condition, no upstream link) and whose co-failure rate still exceeds chance. That would break the shared-source reading.

### F3: Loss of visibility is channel decay, not ground decay

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10 and Fig 3, low overlap: ground maintainer versus dependency chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

A firm does not lose a tier-2 dependency because the dependency disappeared. It loses it because the channel that could show it decays: stale audit percepts, dropped transient signals, a saturated risk score that cannot discriminate, and pooled readings that average away the live slot (Fig 1 :22). "Pooled readings" is the firm-level version of the enterprise risk score excluded as X1.

World bearing: the bullwhip literature describes *"the observed propensity for material orders to be more variable than demand signals and for this variability to increase the further upstream a company is in a supply chain"* (Lee, Padmanabhan and Whang 1997, quoted in the Wikipedia bullwhip page, read 2026-11-22). Amplification upstream is the same shape; same broad operations pool as F1, so one witness, not two.

**Refuter:** a firm whose channel measures as high fidelity by independent tests (fresh percepts, unsaturated metrics, unpooled per-node readings) and that still cannot see a tier-2 dependency when the ground is paying for it. That falsifies F3's mechanism.

### F4: The instrument is grown from a signal already returning something, not specified from a description

**Mode: `general` on the rule, `specified` on the firm application. Domain D3. Status: single-source (Fig 6, with Fig 3 :27 as a corroborating line from a different figure but the same framework, so one witness).**

> **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** (Fig 6 :32)
> **"Nobody specified a telescope from an account of Mars."** (Fig 6 :33)
> **"the search for a proto-instrument is a search for one that is already there."** (Fig 6 :35)
> **"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."** (Fig 6 :31)

This governs *how* a firm finds the hidden dependency. There are two opposed tracks, and they must not be read against each other. **INWARD:** extend an instrument already returning something, for example lead-time variance, a near-miss, a sub-tier invoice, a shared raw-material price move, a quality escape with an unexplained signature. **OUTWARD:** import from a frame whose closure differs, for example the supplier's own supplier map, a logistics provider's shipment records, an industry registry, a regulator's disclosure. Fig 6 :33 is the standing refuter of "we designed a visibility platform from first principles and it found the dependency": nobody specified a telescope from an account of Mars.

**Refuter:** a visibility instrument specified purely from a description, with no prior signal already returning something, that names a hidden dependency later confirmed by the ground in a held-out disruption. Under Fig 6 :32 that should not happen; if it does, F4 is wrong.

### F5: Valence is relative to the residual; there is no standing list of critical suppliers

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations versus composition structures).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)

A tier-3 supplier that is benign under a cost residual may be critical under a lead-time residual. A logistics partner that is a catalyst in one configuration is a spent part in another, and nothing in its vendor record says which. F5 predicts that "critical supplier" lists decay when the residual changes, and that the useful question is always critical *for what*.

**Refuter:** a supplier whose measured criticality is invariant across a documented change of the firm's residual. If no such case can be found anywhere, F5 weakens to `general`.

### F6: A bill of materials is the flat formula; the dependency bond carries the hidden information

**Mode: `general` with a `specified` consequence for mapping. Domains D1, D2. Status: triangulated (Fig 12 and Fig 13 plus the network-physics source at a different stratum).**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"network"** (Fig 13 :23) and **"that entities relate, and influence travels"** (Fig 13 :24)

An approved-vendor list records ingredients. It does not record which sub-tier source feeds which tier-1 supplier, or that two "independent" lines converge on one raw material. Two supply webs with the same supplier set and different bonds are isomers: the formula looks identical and the failure behaviour differs. World corroboration at a different stratum: Yang et al. 2021 study *"the robustness of SC networks against underload cascading failures"* and find that *"recovery strategies of surplus inventory and backup suppliers often adopted in actual SCs can enhance the system robustness, compared with the system without the recovery process"*, which is the bond and the recovery structure, not the ingredient count.

**Refuter:** two networks with identical supplier sets and materially different dependency bonds that show identical failure propagation under the same perturbation. That would collapse the isomer claim.

### F7: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal so the external witness count is one).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The two conditions C1 (contact extended outward) and C2 (source discrimination) have different instruments:

- A C1 failure shows up as a map that stops at tier 1, a cascade that reaches the firm from outside the map, and Fig 11 :52's residual three steps out.
- A C2 failure shows up as shared-source co-failure misread as two independent risk events, a saturated score, and pooled readings (Fig 2 :6-7, Fig 10 :26).

A single lever, for example "map tier 2", clears C1 and leaves C2 standing. F7 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions in both failure types with no categorically different residue left over. That would collapse the union into a partition.

### F8: Describe the residual before choosing the frame or the platform

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, one evidence pool as in F7).**

> **"R's own predicates name the habitat that holds φ*"** (Fig 9 :26)
> **"describe it before you go looking, or"** (Fig 9 :27)
> **"any frame you pick will seem to fit"** (Fig 9 :28)
> **"your words are borrowed too, so describe the effect"** (Fig 9 :30)
> **"→ you get a kind of thing, never the answer itself"** (Fig 9 :32)

A firm that buys a visibility platform first and then looks for dependencies to populate it has inverted the order. Any platform will seem to fit once the vocabulary is borrowed from the platform's own dashboard. The discipline is to describe the effect first: which node's R went live, at what depth, under what perturbation, and whether the failure was depth or discrimination. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

**Refuter:** a frame selected before any residual was described that predicts a hidden dependency the residual did not imply, and that is then confirmed at the ground. That would show frame-first search can carry information the residual lacks.

### F9: Dual sourcing is habitat substitution, not removal of dependency

**Mode: `specified`. Domains D2, D4. Status: single-source (Fig 11, with the network-physics finding on backup suppliers as low-overlap corroboration at a different stratum).**

> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)
> **"what you failed to reproduce, and what you brought with you"** (Fig 11 :30)
> **"what you failed to reproduce is invisible until the goal fails"** (Fig 11 :68)
> **"what you unintentionally introduced is invisible until it acts"** (Fig 11 :69)
> **"Introduction is available; exclusion is not."** (Fig 11 :61)

"De-risking" by adding a second supplier does not remove a dependency. It substitutes one habitat for another. Two silent failure modes follow: what the new source failed to reproduce from the old one, and what came along with the new one that was not chosen. Both are invisible until the goal fails or the new actor acts. Yang et al. 2021 finding that backup suppliers and surplus inventory improve robustness corroborates the value of the move, but not the absence of new dependencies.

**Refuter:** a documented supplier substitution that reproduces none of the ground-required conditions, introduces no unchosen actor with a cascade, and passes through a full disruption cycle with no new residual. That would break the substitution law.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is indexed per node and per tier, never an enterprise average | general | Fig 1 :19, :22 | figure-derived |
| The realized disruption is the anchor, not the risk score | general | Fig 2 :29, :30 | figure-derived |
| Depth is a contact cascade; tier-1-only enumeration is the named failure | specified | Fig 11 :43, :44, :52 | triangulated F1 |
| Co-failure is commonly a hidden shared source | specified | Fig 2 :6-7, :18-21, :40 | triangulated F2 |
| Visibility loss is channel decay, not ground decay | specified | Fig 10 :24-29; Fig 3 :27 | triangulated F3 |
| Instruments grow from a proto-signal already returning something | general / specified | Fig 6 :32-35 | single-source F4 |
| Criticality is relative to the residual, not a property | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F5 |
| The bond carries what the ingredient list omits | general | Fig 12 :5, :117; Fig 13 :23-24 | triangulated F6 |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| Dual sourcing substitutes a habitat, it does not remove dependency | specified | Fig 11 :61, :66, :68-69 | single-source F9 |
| Which particular sub-tier dependency is critical | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A firm enumerating only direct suppliers shows no residual under a disruption that demonstrably reached its tier-2 or tier-3 inputs (breaks F1, Fig 11 :52).
2. Two direct suppliers co-fail above chance with demonstrably disjoint habitats and no shared source, geography, condition or upstream link (breaks F2, Fig 2 :6-7).
3. A firm with independently measured high channel fidelity still cannot see a live sub-tier dependency (breaks F3, Fig 10 :24-29).
4. A visibility instrument specified from a description alone, with no proto-signal, names a held-out hidden dependency confirmed at the ground (breaks F4, Fig 6 :32-35).
5. A supplier's measured criticality is invariant across a documented change of residual (breaks F5, Fig 11 :49-51).
6. Two networks with the same supplier set and different dependency bonds show identical failure propagation under the same perturbation (breaks F6, Fig 12 :117).
7. One intervention restores both C1 and C2 with no categorically different residue (breaks F7, Fig 9 :57).
8. A supplier substitution reproduces no required condition, introduces no unchosen actor with a cascade, and passes a full disruption cycle without residual (breaks F9, Fig 11 :66-69).
9. Fig 13's network structure is derived from the other five, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a realized supply event has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a visibility-product pitch (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Enumerate the habitat outward from the failed node until the cascade stops mattering, including conditions and dependency relations, not just supplier legal entities (Fig 11 :43-48).
3. Keep depth (C1) and discrimination (C2) separate in every report. A blended "supply chain risk score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
4. Grow the instrument from a signal already returning something; run inward and outward as two separate tracks (Fig 6 :31-35). Do not specify a telescope from an account of Mars.
5. Ask, at each supplier node, critical *for what* residual. Do not publish a standing list of critical suppliers (Fig 11 :49-51).
6. Treat dual sourcing as a habitat substitution and enumerate what was not reproduced and what was unintentionally introduced (Fig 11 :66-69).
7. Use the field literature as a budget filter and as one corroborating witness, not as the verdict. The operations-survey, bullwhip and network-physics sources overlap in the supply-chain pool only at the edges; count them as at most two witnesses (Fig 2 :31).
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name which sub-tier supplier is the critical one; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel* (2026-10-02), *The Recursive Self-Improvement Trap* (2026-11-19) and *The Hard Problem is About Source* (2026-08-28), all fetched 2026-11-22.

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The RSI essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* It also gives the prestige rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term physical set to supply chain nodes | **Retracted, strain S1** | Only fit by renaming suppliers as spaces and deliveries as energy. Re-census: Fig 13 :23-24 names network as one structure among six; it licenses the network reading, not a parts list of six supply-chain atoms |
| Treated the Fig 11 DDT line as independent world corroboration | **Narrowed to the figure's own worked case** | Fig 11 :52-53 already names Carson 1962 and biomagnification. The ecology page confirms the case details but shares the figure's evidence pool, so it is not a second witness |
| Wanted to call Fig 11 :52 a `general` law of all supply chains | **Narrowed to `specified`** | It is a structural claim from a figure; no realized supply event pays for the firm-level version here |
| Planned to name "the critical hidden supplier" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. The name needs a source-discriminating instrument, which is the gap |
| Read the enterprise risk score as evidence for the answer | **Retracted as a witness, kept as a filter** | Fig 9 :60; averaged quantities are frame-internal (Fig 1 :27) |
| Applied Fig 2's common-cause collapse directly to supplier co-failure | **kept, with transfer stated** | Fig 4 :20 licenses cross-scale transfer only with the anchor renamed. At the firm stratum the anchor is measured co-failure, not concordant reports (S2) |
| Applied Fig 10's channel language to physical visibility | **kept, with anchor renamed** | The ground is the realized supply event; the channel is the firm's instruments (S3) |
| F1 "triangulated" | **kept, overlap declared** | Fig 11 and the operations survey have low topical overlap, but both are within one framework's claimed domain. Triangulation means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to supply-chain atoms), resolved by re-census to the network and honest-stop roles; S2 (Fig 2 common cause transferred to supplier co-failure), resolved by Fig 4 :20 with the anchor renamed to measured co-failure; S3 (Fig 10 channel transferred to physical visibility), resolved by naming the realized supply event as ground. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of contact depth (C1) and source discrimination (C2), each with its own loop and instrument.
2. **What is the anchor?** The realized supply event, named by the "counter" in Fig 2 :29. Not a risk score, not an audit result (Fig 1 :27).
3. **Where does the residual live?** At depth, three steps out, exactly as Fig 11 :52 names for DDT and the eagles.
4. **Why is it hidden?** Because of a hidden shared source (Fig 2 :6-7) and because the channel decays (Fig 10 :24-26); both are relations, not properties of a supplier.
5. **How is it found?** Enumerate outward until the cascade stops mattering (Fig 11 :44) and grow an instrument from a proto-signal already returning something (Fig 6 :32-35), on two separate tracks.
6. **Why do the usual fixes fail?** A bigger tier-1 register is first-order enumeration (Fig 11 :52); a platform chosen before the residual lets any frame seem to fit (Fig 9 :28); dual sourcing substitutes a habitat and imports unchosen actors (Fig 11 :66-69).
7. **What can be said at the stop?** A shape and two conditions, with falsifiers. Not which supplier, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a firm identifies hidden dependencies by enumerating the habitat outward from the failed node until the cascade stops mattering, by keeping its channel to the realized supply event reachable with fresh and unpooled readings, by discriminating a hidden shared source from independent failure using an instrument grown from a signal already returning something, by keeping depth and discrimination as separate verdicts, and by treating dual sourcing as habitat substitution rather than removal of dependency.** Criticality is relative to the residual, and a bill of materials records ingredients but not the bonds that decide propagation. The two conditions are kept separate, never averaged. Which specific sub-tier node is critical is a declared `gap`, not a hidden answer: the framework returns a shape, and the source-discriminating instrument that would name the node is not held here. Mode `specified`. No world source was allowed to flip a verdict; the field sources were used as filters and one-pool witnesses. No unresolved strain remains after re-census.
