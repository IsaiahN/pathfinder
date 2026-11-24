# Figure-grounded audit: when hubs stabilize and when they make a network fragile

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured for a particular network. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Seat map :281: *"An unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict."*

**Status of this derivation: a simulation, not a ground reading.** LLM output is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md` (all `Fig N :line` citations), `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, the figures README, WATSON 60, and seven public web sources listed in `10_source_ledger.csv`. Every quoted string below is copied from the figure extract, not from a summary.

---

## 0. The residual, in effect terms

> When do highly connected hubs stabilize a network, and when do they make it more vulnerable to targeted failure?

Restated as an effect: for the same network and the same high-degree node, a measurement of network-level performance flips sign when the perturbation changes from random loss to targeted removal, or when the quantity propagating changes from a harmless one to a harmful one. What is unexplained is not the degree of a node, which is easy to measure. It is the **valence** of that node relative to a threat and an instrument.

R is indexed per slot. Each slot is a (network, perturbation, instrument) triple. fig 1 :19: *"The residual is indexed by object slot, not aggregated."* fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Averaging over all threat models produces the familiar but empty sentence "hubs are good and bad", which is why the question stays open.

R by arity, symmetry and scale:

- **Arity.** At least three place: structure (which nodes connect to which), perturbation (what is removed or injected), and anchor (what measurement counts as stability). A fourth place, the dynamics of what flows, is often needed.
- **Symmetry.** Asymmetric. Random loss and targeted removal are not exchangeable. Degree is a threshold or comparison, not a symmetric join: fig 12 comparison is *"a threshold relation between two quantities"* (Operators table :48). Under a symmetric bond, k operands have one term (fig 12 :92), so "hub" cannot be a symmetric object whose valence is read off its ingredients.
- **Scale.** Local (one node's degree, one removal) and global (giant component, cascade size, epidemic prevalence), joined by a lossy transform. fig 4 :20: *"Only the actors, the currency and the anchor change."* fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

**The shape of an answer, bound before the run (formula step "Direction").** An answer would be a conditional of the form: for anchor A and threat T, hubs have sign S by mechanism M. It is written down here as an ordinary term so it can accrue a residual. It is not assumed true. A single anchor-independent answer would fail this shape and is therefore refused in advance.

---

## 1. Domain census before choosing any figure line

One line per domain, with actors, currency and anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1 Structural frame** | nodes, edges, degree sequence, components | adjacency and ordering (more or less degree) | a measured connectivity statistic: giant component fraction, percolation threshold, path length | admitted |
| **D2 Threat or failure model** | random removal, targeted removal, cascade, epidemic | nodes removed, load shifted, infection injected | measured outcome: fragmentation, cascade die-out, prevalence | admitted |
| **D3 Dynamics frame** | flows, synchrony, contagion, traffic | influence, bandwidth, infection | experiment or dataset on the propagating quantity | admitted |
| **D4 Verification frame** | expert readers, instruments | agreement versus residual | the ground, never agreement (fig 2 :29) | admitted |
| **X1 "the hub is intrinsically stabilising"** | the hub alone | none nameable | none: the same node changes sign with the residual | not a domain yet |
| **X2 "scale-free degree law is the universal cause"** | degree distribution | fit statistic | contingent across domains (Broido and Clauset 2019, Doyle et al 2005) | absorbed into D1 as an empirical condition |

D1 splits further into two distinct frames. **Network** is the structure that says *"that entities relate, and influence travels"* (fig 13 :23-24). **Spectrum** is the structure that gives *"ordering, so more and less can be said"* (fig 13 :19-20). A hub as a high-degree tail is a spectrum reading; a hub as a conduit is a network reading. fig 13 :35 says *"Neither are spectrum, gradient and network."* fig 13 :38 says *"independence is how little two frames draw on the same evidence"*. They are two frames, not two names for one fact.

**Partition or union?** Union. D1, D2 and D3 are overlapping conditions. fig 9 :54: *"when the split lands on a union rather than a partition, unbundle before you search again."* fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* Random failure and targeted attack are two well-formed questions whose rules work on different subsets, so they are split, not averaged.

**Order by dependency (fig 3).** Perception of the network (link, node, component) before vocabulary (degree, hub, cascade) before objective (what counts as stable, the anchor) before planning (choose the perturbation and instrument) before learn and carry. fig 3 :26 warns that the middle link, having terms for what a situation offers and being able to say what counts as progress, has neither obvious failures nor obvious tests, so it attracts the least attention. That is exactly where this question usually stalls: people measure degree without saying what outcome degree is supposed to predict.

---

## 2. Findings, each with verbatim lines and a refuter

### F1 - Valence is relative to the residual, not carried by the hub (decisive)

fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*
fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."*
fig 11 :51: *"No standing list of good actors survives a change of residual."*

A hub is an actor in the habitat of D2. To the residual "keep the giant component intact under random loss" it is a benefactor, because random loss rarely selects it and its edges hold the component together. To the residual "keep the giant component intact when an adversary removes the highest-degree nodes" it is a malfactor, because it is the first thing removed and its edges are what is lost. This is not a contradiction in the theory. It is the theory's rule about valence applied to two different residuals.

**Mode:** `general` (structural), triangulated across fig 11 (habitat valence) and fig 2 (anchor rule), two figure lines with low overlap (actor-valence versus measurement-anchor).

**Refuter:** exhibit a network and a single instrument where the sign of the hub effect is identical for random and targeted removal at the same measured outcome; or show that the sign is carried by degree alone, independent of which perturbation is applied. In either case F1 is false and the question collapses to a property of degree.

### F2 - The question is a union compound, not one threshold

fig 9 :4-5, quoted in section 1, and fig 9 :57: *"a case in two conditions is not a harder case of either"*.

Random failure and targeted failure are distinct conditions. A single lever (raise the average degree, or add redundancy) clears the region where only one condition holds and leaves the intersection standing, because the second condition still binds. This is why "hubs help until they are attacked" is a retelling of the two cases, not an explanation of their boundary. The framework requires separate loops and separate verdicts, never an average.

**Mode:** `general`, triangulated across fig 9 (union/partition) and fig 11 (relations rather than kinds).

**Refuter:** a single scalar function of topology and degree that predicts the sign of the effect across random, targeted and cascading threats with no interaction term and no change of anchor. If such a scalar exists and survives out-of-sample measurement, the union reading is unnecessary.

### F3 - Name the anchor before choosing the frame

fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*

"Stable" has no single anchor. Candidate anchors are: giant component fraction after removal (percolation), time to die-out of a cascade, spectral radius of the adjacency matrix, probability of global synchrony, or epidemic prevalence below a threshold. These are different measurements and they can rank the same network differently. Without naming one, D1 has no anchor and is not yet a domain. With a named anchor, the question becomes `specified` and checkable.

**Mode:** `general` for the rule, `specified` for any particular anchor. Single-source for the anchor definition (fig 2), triangulated with fig 9's describe-before-looking rule.

**Refuter:** an anchor-independent definition of stability on which two distinct instruments measuring different quantities always agree. By fig 2 :31 such agreement would itself signal a shared evidence pool, so the refuter must show the instruments are independent before the agreement counts.

### F4 - Network and spectrum are independent frames, so "hub" is a compound

fig 13 :35: *"Space, time and energy are not three readings of one quantity. Neither are spectrum, gradient and network."*
fig 13 :36: *"adjacency is not duration, an ordering is not a pathway, a pathway is not a direction"*
fig 13 :38: *"independence is how little two frames draw on the same evidence"*

Degree ordering (spectrum) does not produce adjacency (network). Fig 13 :42 says *"Ordering does not produce adjacency"*. So a high degree is not the same claim as being a critical conduit. The two can come apart, and the empirical literature shows exactly that: Doyle et al 2005 built two graphs with the same degree sequence where high-degree nodes sit at the core in one (critical) and at the periphery in the other (locally contained). The atom set is the same; the arrangement differs.

**Mode:** `general`, triangulated across fig 13 (independence of the six) and fig 12 (isomer definition, see `06`).

**Refuter:** derive adjacency from degree ordering alone, or show empirically that degree rank and criticality to global connectivity are the same measurement in every network tested. The first breaks the figure, the second breaks the empirical claim.

### F5 - The hub is a functional group and a catalyst, not a new primitive

fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
fig 12 :119: *"catalyst. A part that survives its own use."*

A high-degree position is a functional group: its presence fixes whether connectivity survives loss, and the qualifier (random or targeted) says which member of the kind you are looking at. Under random loss it behaves like a catalyst, surviving its own use and continuing to carry edges across many removals. Under targeted loss it is spent at once. Fig 13 :41: *"Each is indivisible: no arrangement of the other five yields it."* A hub does not require a seventh member of the minimum set. It is an arrangement of network and spectrum over nodes.

**Mode:** `specified`, single-source for the catalyst reading (fig 12), triangulated for the no-new-primitive claim with fig 13 minimality.

**Refuter:** show that a hub requires a primitive not among the six, or that the qualifier does not change the outcome for any network at any anchor.

### F6 - Description is cheap, settlement is expensive

fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."*
fig 12 :127: *"a system holding one accounting cannot compare them and will not notice the shortfall"*

It is cheap to describe a hub (one number per node). It is expensive to settle whether it helps (a percolation experiment, an attack simulation, a field measurement on the propagating quantity). The question as posed invites a cheap structural answer to an expensive question. Fig 5 :33: *"The three guards are a product, not a checklist."* A candidate term saying "hubs stabilise" has support only if a slot carries positive mass, reach only if it composes from what is held, and novelty only if it is not already in the library. The bare claim fails novelty: it is already in the network-science library as a retrodiction.

**Mode:** `general`. Single-source (fig 12) but consistent with fig 5's guards.

**Refuter:** a measurement-free derivation of the sign of the hub effect at a named anchor. If that exists, the price distinction does not bind here.

### F7 - The condensed answer has a nonzero round-trip gap

fig 4 :30, quoted above. The shorthand carried in outreach is "hubs hold a network together until someone targets them". Sending that up and bringing it back down drops three constraints: which anchor was measured, which dynamics propagated, and the empirical contingency of the degree distribution itself (Broido and Clauset 2019 find strongly scale-free structure rare; Doyle et al 2005 find the same degree sequence can be robust or fragile). R_T is nonzero and is recorded qualitatively, not numerically, because no single ground reading exists for the condensed claim.

**Mode:** `specified`. **Refuter:** an instrument that makes the condensed sentence predict a measured outcome at a named anchor without loss of those three constraints.

### F8 - Agreement is not evidence, and silence is not absence

fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*
fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

Seven world sources were read for this package. Several cite the same 2000 papers, so their agreement is one pool talking, not seven witnesses. The conflict between Albert et al 2000 (hubs are the Achilles' heel) and Doyle et al 2005 (hubs at the periphery are not critical) is handled by returning to the census, not by picking a winner: they describe different arrangements and different anchors. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

**Mode:** `general`. **Refuter:** two genuinely independent instruments, drawing on different evidence pools, that rank networks the same way at the same anchor. That would be corroboration rather than pool agreement.

---

## 3. What survives, with modes

| claim | mode | figure |
|---|---|---|
| The valence of a hub is relative to the residual, not intrinsic | `general` | fig 11 :49-51 |
| Random and targeted failure are separate conditions and must not be averaged | `general` | fig 9 :4-5, :57 |
| An anchor must be named before a network domain exists | `general` | fig 2 :29 |
| Degree ordering and adjacency are independent frames | `general` | fig 13 :35-38 |
| A hub is a functional group and an arrangement, not a new primitive | `specified` | fig 12 :119, :123; fig 13 :41 |
| For a named anchor and threat, hubs stabilize under random loss and create vulnerability under targeted loss when they carry the giant component | `specified`, ungrounded | world sources plus fig 11, fig 12 |
| Which of two same-degree arrangements is robust is decided by measurement | `specified` | fig 4 :30; Doyle et al 2005 |

---

## 4. Pre-registered refuter, written before the conclusion

The shape claim is refuted if any of the following holds:

1. A measurement at a named anchor gives the same sign for the hub effect under random and targeted removal, in a network where degree rank and connectivity criticality have been separately measured.
2. An anchor-independent definition of stability is produced on which two independent instruments always agree.
3. Adjacency is derived from degree ordering alone, or a seventh primitive is required to explain the flip.
4. Across a representative corpus, degree rank and criticality to global connectivity coincide in every case, so the arrangement distinction drawn in `06` has no referent.

If any fires, the union reading falls and the answer becomes a single property of degree. Until one is run, nothing here may be labelled `grounded`.

---

## 5. Recommendation

1. State the anchor on every claim: percolation, cascade, synchrony or epidemic. Drop sentences about "stability" without a measurement.
2. Split the question into its two threat loops plus the dynamics loop. Keep verdicts separate (F2).
3. Lead outreach with the valence rule and the refuter, not with a conclusion about hubs (Fig 10 :52: *"Bring a characterised residual, never the source."*).
4. Present the Albert/Doyle pair as an isomer case (same degree sequence, different arrangement, different outcome), not as a fight between a famous result and a critique (fig 12 :117).
5. Use filters for the budget and witnesses for the verdict. fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Citation counts, venue prestige and age of a paper are filters only.

---

## 6. Canonical usage check

Two sources were read after sections 0 to 5 and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`. It says the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them"* and *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*. The canonical limit is that the framework says what a missing thing would look like, *"a shape, not a name"*, and stops where instruments stop distinguishing, recording the lineage.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. The figures are metalaws, so design questions are answered by derivation rather than escalation to a human ruling. fig 9 :60 separates filters from witnesses.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F1 "decisive" | Confirmed, but narrowed. The figures decide that valence is relational. They do not decide which sign a hub has in a named network. That remains a ground question. |
| F2 "union compound" | Confirmed. The canonical README's re-census rule supports splitting rather than forcing one rule. |
| F3 "no domain without an anchor" | Confirmed and strengthened. fig 2 :36 says an anchor is legitimate when the question is constitutively about it. "Stable" is not, until a measurement is named. |
| F4 "network and spectrum independent" | Confirmed. No strain: fig 13 governs the six primitives; the empirical degree-criticality result governs arrangements. |
| F5 "catalyst" | Kept as `specified`, not promoted. The figure names the structure, not its empirical instance in a given network. |
| Apparent conflict Albert 2000 versus Doyle 2005 | Not a conflict after re-census. Different arrangements over the same atom set, different anchors. Records of where each atom came from separate them (fig 8 :51: *"Only the record of where each came from separates them"*). |
| "hubs are bad" or "hubs are good" as an answer | Refused. A name for a slot the framework leaves open, exactly the canonical forbidden move. The answer is a shape: name the residual and the anchor, then measure. |

---

## 7. Honest stop

The answer stops at the limit of what the available sources can distinguish. It returns a shape: valence is relational, the question is a union, the anchor must be named, and same-degree arrangements can have different outcomes. It does not return the sign of the effect for any particular real network without a ground reading. fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Unreachable here is a verdict, not silence, and it is stated as such.
