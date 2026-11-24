# Figure-grounded audit: CMP-0055, can systemic risk be measured before a crisis when connections and exposures are partly hidden?

**Mode of this document: `specified` on the substantive claims, `general` on the structural shape, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, fetched 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too"*; *"However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session; cite as `Fig N :line`. Also `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the regulator's or modeler's belief about the network of connections and exposures, formed from reported positions, disclosed data and inherited priors.
- **a** is the measurement action: choose a metric, run a stress test, set a buffer, publish a score.
- **Γ(b,a)** is what the model predicts about losses and cascade extent.
- **o′** is what the crisis actually realizes: defaults, losses, cascade reach.
- **s** is the institution, the exposure edge, the correlated-position cluster. R is indexed by slot and by time, never collapsed into one global index.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The Symbols table states the structural limit directly: R *"is always a slice: what cannot be perceived yet is residual and simply cannot be read."* The question's phrase *"partly hidden"* is exactly this: some slots carry live residual that the instrument cannot read. Fig 11 :48 agrees: *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."*

**Bind the sought-for shape as an ordinary term** before the run (Formula, "Direction"; Fig 5 :66: *"Committing a prediction before a run is this, already working."*): the answer would be (i) a per-slot warning structure that tracks where contact with the hidden network is failing, and (ii) an instrument that would name those hidden edges. It is now bound, so the refuter in section 4 can fire on it. Until bound, the preference predicts nothing and no loop check can see it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The realized crisis is the anchor for *"can it be measured before a crisis"*, because the question is constitutively about what the crisis would do. Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* A stress-test pass, a model's own score and a consensus of agencies all move when pushed, so by Fig 2 :30 they are instruments, not anchors. The anchor arrives after the prediction; that temporal asymmetry is examined in F5.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a many-place relation: institution i, counterparty j, exposure e, time t. It is a network, not a list. It carries **sequence** (`->`, a cascade step, Fig 12 :72), **production** (`=>`, a shock produces a loss absent before it fired, Fig 12 :76-77), **comparison** (`⋛`, the failure threshold, Fig 12 :87) and **cycle** (feedback re-enters as input, Fig 12 :121). It is not a symmetric relation: exposure A owes B is not B owes A, and information is asymmetric too (one side may know an exposure the other cannot see).
- **Symmetry.** *"Systemic"* is a threshold relative to a failure criterion, not an absolute quantity (Fig 12 :85-89). A cascade is irreversible in practice: re-running the action does not recover the lost institution.
- **Scale.** Three scales are in view: the single institution's loop, the network of institutions, and the coupled habitat of financial, physical and social networks (Fig 4 one-agent and population panels; Fig 11 :52-53 second-order cascade). The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and the transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The model loop** (one institution, one frame) | modelers, models, reported positions | residual reduction on predicted losses | yes: realized loss at that institution | admitted |
| **D2 The exposure network** (the web itself) | institutions, counterparties, edges, common holdings | exposure, contagion paths | yes: settlement records, actual defaults | admitted, partly hidden |
| **D3 The coupled habitat** (financial plus physical plus social) | multiple network layers, feedback, perception, panic | cascading failure, liquidity | yes: the realized system-wide outcome | admitted |
| **D4 The measurement channel** (pre-crisis to crisis) | instruments, stress tests, early-warning indicators, disclosure | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 Systemic risk as a single global scalar** | the index | one number | no anchor independent of the crisis; it is a *"pooled reading"* (Fig 10 :26) | not a domain; absorbed into D4 as a failure mode |
| **X2 Model consensus as the measure** | agencies, risk models | agreement | no: internal agreement moves when pushed (Fig 2 :30) | not a domain; it is the Fig 2 panel 1 or panel 2 collapse |

X1 and X2 fail the anchor test and are excluded before any figure line is applied to them. This is a structural exclusion, not a claim that indices or agencies are useless. It says they cannot be the verdict.

### 1.3 Partition or union

D1 and D2 overlap: a model must represent the network it measures, so the overlap is a compound with its own loop. D2 and D3 overlap: exposures sit inside a wider habitat, so that overlap is a second compound. D4 overlaps all three: measurement is of the other three. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are **C1: can the connections be perceived at all** (data, disclosure, instrument) and **C2: can the cascade dynamics be composed from what is perceived** (model, topology, feedback). A regime failing C1 and one failing C2 are not degrees of one failure; they need different instruments. The *Library of Babel* essay states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :26)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order: 1 perception (can we see the exposures?) -> 2 vocabulary (do we have terms for hidden links and feedback?) -> 3 objective (what counts as progress: a per-slot residual?) -> 4 planning (stress test, intervention) -> 5 learn and carry. The break is at perception and vocabulary. If the connections cannot be perceived, no sophistication at planning rescues the chain (Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*). Most regulatory effort lands above the break, where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not its value |
| 2 The Ground | anchor; common-cause collapse; independence vs pool | decisive for hidden exposures and for consensus |
| 3 Dependency Chain | middle link breaks first; effort above the break wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer and honest condensation |
| 5 Mint Pipeline | three guards as product; MDL bargain; prediction before run | governs whether a risk term can be admitted |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs what hidden data can and cannot add |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governs model consensus |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs "more computation on the same data" |
| 9 Leave / Arrive | union vs partition; describe the residual first; shape not answer | governs the unbundling and the honest stop |
| 10 Ground Maintainer | ground does not decay, channel does; pooled readings; anchor reachable | governs pre-crisis measurement and scalar indices |
| 11 The Habitat | enumerate contact outward; valence relative to residual | decisive for second-order cascades |
| 12 The Bond | cycle, catalyst, comparison; two currencies (bits and actions) | governs feedback and the cost of settling |
| 13 Minimum Viable Set | network is one of six; closed set, open arrangements; unreachable is a verdict | governs the honest stop, not a financial substrate |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate directly to financial nodes and edges only fit by calling an exposure a kind of energy and a cascade a kind of gradient. That is a strain. Re-census (S1 in section 6): Fig 13 governs the physical substrate; *"network / that entities relate, and influence travels"* (Fig 13 :23-24) is legitimately one of the six, but the thermodynamic minimality claims do not transfer to a financial graph. Fig 13 is retained for the honest-stop role only. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about crisis measurement, `grounded` only if settled by a measurement. None is `grounded`.

### F1: A partly hidden residual cannot be read per slot, so a scalar index loses the signal

**Mode: `general` for the indexing rule, `specified` for the consequence. Domains D1, D2, D4. Status: triangulated (Fig 1 and Fig 10, low overlap: agent indexing vs channel failure).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"The ground enters as the only metric."** (Fig 1 :23)

The symbols table adds: R *"is always a slice: what cannot be perceived yet is residual and simply cannot be read."* A single systemic-risk score is a pooled reading. It can be perfectly self-consistent and still have lost the only signal that says which institution is failing contact. Fig 1 :26-27 disqualifies the frame's own outputs: *"predicates minted, and credibility accrued"* are *"frame-internal. A frame cannot score itself with a quantity it also produces."* A model's own confidence is such a quantity.

**Refuter:** a scalar index that prospectively names, per slot and in a held-out crisis, which named institution or edge fails first, verified at the ground. If one exists, the per-slot consequence is false.

**World bearing (secondary only):** Sergueiva 2013 writes that *"Our understanding of systemic risk is evolving and the awareness of data relevance is rising gradually"* (arXiv abstract). This corroborates the data-side of F1 but shares the finance evidence pool with the other measurement papers, so it is one witness.

### F2: Hidden connections are the common-cause collapse; apparent diversification may be the pool talking

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 2 and Fig 11, low overlap: alignment collapse vs habitat relations).**

> **"collapse 2: common cause"** (Fig 2 :6)
> **"(hidden shared source)"** (Fig 2 :7)
> **"one evidence pool"** (Fig 2 :18)
> **"so the agreement is the pool talking,"** (Fig 2 :20)
> **"not two frames confirming each other"** (Fig 2 :21)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)

Two institutions whose losses move together because of an unobserved common exposure are not two independent confirmations of diversification. They are one exposure wearing two names. Fig 2 :39: *"Correlation has valence."*

**Refuter:** a documented sample in which two institutions' correlated losses are shown, at the ground, to arise from independent shocks with no shared hidden exposure. If independence holds there, the common-cause reading does not govern that case.

**World bearing (secondary only):** Pichler, Poledna and Thurner 2018 write that *"Strongly overlapping portfolios lead to similar exposures that are caused by price movements of the underlying financial assets."* That is the common-cause panel in the finance frame. May, Levin and Sugihara 2008 write that catastrophic change derives *"from linkages that are latent and often unrecognized"* (ecology, low overlap). Both corroborate F2.

### F3: Hidden atoms cannot be composed from held data; only an import moves the wall

**Mode: `general` with a `specified` consequence. Domains D2, D4. Status: triangulated (Fig 6, Fig 8, Fig 13, distinct roles).**

> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)
> **"the only operator that moves the wall"** (Fig 6 :14)

A hidden exposure is an atom not in Γ. More computation on the same reported positions explores arrangements inside the same closure and never adds it. What moves the wall is new disclosure, trade-level data, a counterparty's books, or another frame that already holds the edge. Fig 6 :25: *"An import adds no atom to the world"*; it gives this frame access. And Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

**Refuter:** a missing exposure derived purely from reported data by internal composition and verified at the ground without import. That breaks idempotence and F3 with it.

**World bearing (secondary only):** Ramadiah et al. 2018 report that *"the systemic risk properties of a financial network are extremely sensitive to its network features"*, including networks all consistent with the same balance-sheet information. That is F3 in the finance frame: same held data, different topology, different measured risk. Sergueiva 2013's *"tensorial multilayer networks"* approach is the field's own name for needing more layers of exposure data.

### F4: The chain breaks at perception, and an instrument grows from a worse instrument already returning something

**Mode: `specified`. Domain D4. Status: triangulated (Fig 3 and Fig 6, low overlap: dependency order vs instrument rule).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** (Fig 6 :32)
> **"the search for a proto-instrument is a search for one that is already there."** (Fig 6 :35)

You cannot specify a perfect pre-crisis sensor from a description of the crisis. You extend an instrument that is already returning a failing signal. This is why F4 does not collapse into fatalism: observable series already return something (variance, autocorrelation, connectivity drift), and those are the proto-instruments.

**Refuter:** an instrument built from a pure description, with no prior instrument returning anything, that later pays at the ground. Under Fig 6 :32 that should be impossible; if observed, F4 is wrong.

**World bearing (secondary only):** Scheffer et al. 2009 write that *"predicting such critical points before they are reached is extremely difficult"* while *"work in different scientific fields is now suggesting the existence of generic early-warning signals"*. Both halves are F4: the difficulty is at perception, and the signals are instruments already returning something. Biswas and Chakrabarti 2024 report that *"coincidence of these two indices signal a systemic risk in the network"*, which is a proto-instrument, not a settlement.

### F5: The pre-crisis measure is a candidate; only the realized crisis pays for it

**Mode: `specified`. Domain D4. Status: triangulated (Fig 2 and Fig 10, plus the Formula mode rule).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"an anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)
> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"you have lost touch"** (Fig 10 :28)
> **"-> keep the anchor reachable"** (Fig 10 :29)

The ground settles (Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."*). A stress-test pass is a gate, not the ground. Because the crisis arrives after the prediction, every pre-crisis measure is `candidate` until the outcome pays for it. The temporal asymmetry is not a strain: Fig 2 :36 makes the crisis the legitimate anchor precisely because the question is about it. The anchor cannot be consulted early, so the honest report is a prediction with a stated refuter.

May, Levin and Sugihara 2008 supply the anchor's independence from belief: *"the odds on a 100-year storm do not change because people think that such a storm has become more likely"*. Fischer 2013 names *"delayed or incomplete information"* as a source of reflexivity, which is the channel decaying while the ground waits.

**Refuter:** a pre-crisis measure that pays at the ground prospectively across multiple held-out crises, with provenance showing no post-hoc fitting. That would move this finding to `grounded` and falsify its "candidate only" claim.

### F6: Contact cascades, so the habitat must be enumerated outward past direct counterparts

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat enumeration vs loop structure).**

> **"The habitat is enumerated, never composed."** (Fig 11 :43)
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** (Fig 11 :44)
> **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** (Fig 11 :52-53)
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)

Measuring only direct exposures is first-order enumeration. The residual that matters can be three steps out. Fig 12 :119 adds the catalyst case: *"A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."* A counterparty that appears harmless today may be a regenerating carrier of the next cascade, and the static exposure snapshot does not record which.

**Refuter:** a documented crisis whose cascade is confined to first-order direct contacts with no measurable second-order propagation. That would weaken F6 to `general`.

**World bearing (secondary only):** Buldyrev et al. 2010 report that *"failure of nodes in one network may lead to failure of dependent nodes in other networks"* and that *"a failure of a very small fraction of nodes in one network may lead to the complete fragmentation of a system of several interdependent networks."* That is Fig 11 :52-53 observed in coupled infrastructures, from physics, a low-overlap field.

### F7: Agreement among risk models is a room, not corroboration

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 7 and Fig 2, low overlap: room selection vs anchor triangulation).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

An ensemble of models fed the same incomplete data is one room with several names. Model consensus is a filter for where to spend checking budget, not a witness for the verdict. Fig 8 :51: *"Only the record of where each came from separates them"* (convergent derivation versus adopted import).

**Refuter:** a documented case in which a consensus of models sharing one data pool prospectively predicts a held-out crisis at the ground, with no disjoint-pool model doing better. That would falsify F7's "not corroboration" claim for that class.

### F8: The union must be unbundled before any lever is chosen

**Mode: `specified`. Domains all. Status: figure-governed by Fig 9 :54-57.**

C1 (perceive the hidden connections) and C2 (compose the cascade dynamics from what is perceived) have different instruments:

- A C1 failure shows up as unread slots, pooled readings, a bracket that no longer matches the residual (Fig 1 :19, Fig 10 :26, Fig 11 :48).
- A C2 failure shows up as a closure handing itself the same room, a topology whose sensitivity is untested, and a reach that stops moving while the model library grows (Fig 7 :12, Fig 8 :32, Fig 6 :21).

A single lever, for example "raise capital", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). This is why verdicts are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions across both failure types and leaves no categorically different residue. That collapses the union into a partition.

### F9: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per slot, never a scalar average | general | Fig 1 :19, :22 | figure-derived |
| Hidden connections are a common-cause collapse, not independence | specified | Fig 2 :6-7, :18-21, :40 | triangulated F2 |
| More computation on held data adds no hidden atom | general | Fig 6 :21, :23; Fig 8 :32 | triangulated F3 |
| The break is at perception, not planning | specified | Fig 3 :19, :27; Fig 6 :32 | triangulated F4 |
| Pre-crisis measurement is candidate until the crisis pays | specified | Fig 2 :29, :36; Fig 10 :24 | triangulated F5 |
| Contact cascades past direct counterparts | specified | Fig 11 :43-44, :52-53; Fig 12 :121 | triangulated F6 |
| Model consensus is a filter, not a witness | specified | Fig 7 :12-13, :35; Fig 2 :35 | triangulated F7 |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The exact pre-crisis number, named in advance | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per Fig 5 :66, *"Committing a prediction before a run is this, already working."* The shape claim is refuted if any of the following is observed:

1. A scalar index that prospectively and per slot predicts which named institution or edge fails first in a held-out crisis, verified at the ground (breaks F1, Fig 1 :19, Fig 10 :26).
2. Correlated losses shown at the ground to arise from independent shocks with no shared hidden exposure, across a documented sample (breaks F2, Fig 2 :18-21).
3. A missing exposure derived purely from reported data by internal composition and verified at the ground without import (breaks F3, Fig 8 :32).
4. An instrument built from a pure description, with no prior instrument returning anything, that later pays at the ground (breaks F4, Fig 6 :32).
5. A crisis whose cascade is confined to first-order direct contacts with no measurable second-order propagation (breaks F6, Fig 11 :52-53).
6. A consensus of models sharing one evidence pool that prospectively beats disjoint-pool models at the ground (breaks F7, Fig 7 :36).
7. One intervention restoring both C1 and C2 with no categorically different residue (breaks F8, Fig 9 :57).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until the realized crisis pays for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a risk taxonomy (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Report per slot. A blended systemic-risk score is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Invest in the perception link first: disclosure, trade-level data, counterparty mapping. That is the import that moves the wall (Fig 6 :14, :23). Do not spend the whole budget above the break (Fig 3 :29-30).
4. Treat model agreement as a budget filter, never as corroboration (Fig 9 :60, Fig 7 :35).
5. Enumerate the habitat outward, past direct counterparties (Fig 11 :44, :52-53).
6. Label the pre-crisis measure `candidate` and attach the date and provenance of its refuter (Fig 2 :29, Formula step 5).
7. Stop at the shape. The framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32); the exact number is not licensed by the figures.

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source* and *Decoding Tacit Knowledge* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- *The Hard Problem is About Source* confirms the simulation status and the instrument rule: *"The answer is unreached until a better instrument exists."* and *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* It supplies the metamerism point used in `05`.
- *Decoding Tacit Knowledge* confirms describe-the-effect outreach: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Applied Fig 13 six-term substrate to financial nodes and edges | **Retracted, strain S1** | Only fit by renaming exposures as energy and cascades as gradients. Re-census: Fig 13 governs the physical substrate; only its network term and honest-stop role transfer (Fig 13 :134) |
| Read "no search adds an atom" as "systemic risk is unknowable in principle" | **Retracted, strain S2** | Fig 8 :40-43 separates underivable-in-principle from unreachable-at-this-budget. Hidden exposures are the second: more data (import), not more computation on held data |
| Treated an early-warning index as a settled verdict | **Narrowed to `candidate`** | Fig 5 :69 amendment: settling is necessary but not sufficient, and the ground decides. Biswas and Chakrabarti's index coincidence is an indicator, not payment |
| Wanted to name the exact pre-crisis systemic-risk number | **Marked `gap`** | Fig 9 :32 returns a kind of thing, never the answer; Fig 13 :134-135: a missing primitive cannot be named without already holding it |
| Read the crisis's future arrival as a defect in the anchor | **Not strained after re-census** | Fig 2 :36: an anchor is legitimate when the question is constitutively about it. The crisis is that anchor; its lateness is the measurement problem, addressed in F5 |
| Treated Fig 6 :32 as forbidding all early-warning instruments | **Narrowed** | Scheffer's signals and Biswas's indices are instruments improved from series already returning something, so Fig 6 :32 is satisfied, not contradicted |
| Used May et al. 2008 as a finance-world witness | **Kept, marked low overlap** | It is an ecology News and Views piece about finance, so it is a genuine cross-field frame but writes from the finance problem; counted as one witness, not an independent pool |
| F2 called "decisive" in an early draft | **Downgraded to triangulated** | Fig 2 and Fig 11 are two figures but one framework; triangulation means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to finance), resolved by re-census; S2 (idempotence read as unknowability), resolved by Fig 8's scope note. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the *Library of Babel* bundle passage: it is a union of perception (C1) and composition (C2), each with its own instrument.
2. **What is the anchor?** The realized crisis, named in Fig 2 :29 and legitimated by :36. Not model agreement, not internal scores.
3. **Can the hidden part be composed from what we hold?** No. Fig 8 :32 and Fig 6 :21. It needs an import from a differing closure (new data).
4. **Where does the chain break?** At perception and vocabulary (Fig 3 :26-27), so effort above the break is wasted.
5. **How does a cascade travel?** Outward through contact, past direct counterparts (Fig 11 :44, :52-53), with cycles and regenerating carriers (Fig 12 :119, :121).
6. **What does agreement among models mean?** One room, not corroboration (Fig 7 :12-13, :35); a filter for budget, not a witness (Fig 9 :60).
7. **What can be said at the stop?** A per-slot warning shape, two separable conditions, and falsifiers written in advance. Not the exact number. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **systemic risk can be characterized before a crisis, as a per-slot warning structure that tracks where contact with the partly hidden exposure network is failing, but it cannot be certified by a single score, by more computation on held data, or by model agreement; the hidden atoms require an import of new data, the measurement stays `candidate` until the realized crisis pays for it, and the question is a union of two conditions that must be unbundled before any lever is chosen.** The verdicts are kept separate per domain and never averaged. The exact pre-crisis number is a `gap`, not a hidden answer. Mode `specified`. No world source was allowed to flip a verdict; the one genuine tension (idempotence versus unknowability) was returned to the census and resolved by Fig 8's scope note. No unresolved strain remains after re-census.
