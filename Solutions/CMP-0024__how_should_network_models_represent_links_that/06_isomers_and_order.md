# Isomers, bond families and dependency order: supporting derivation for CMP-0024

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The primary audit (`01`) returned a shape and a union of four conditions. Four questions are still owed before the answer can be stated cleanly:

1. **Structure.** If two networks hold the same nodes and the same connected pairs, why does one behave differently? Is that an isomer claim under Fig 12, or something weaker?
2. **Bond families.** Which figure term actually carries strength, and why is gradient the wrong home for it?
3. **Order.** In what order do the conditions and their instruments bind, and which link breaks first in a modelling workflow?
4. **Competing representations.** Can the standard network-science representations be generated from the shape, or do they name something the shape cannot reach?

## DOMAIN CENSUS (carried forward, not re-run)

- D1 link as bond: actors two operands, a typed bond, the record of which bond holds; currency |φ| and settlement; anchor the ground for composition.
- D2 measurement layer: actors instrument, event, time; currency ordering, directedness, succession; anchor the trace or removal experiment.
- D3 semantic layer: actors frame, source relation, convention; currency which bond holds; anchor provenance or ground test.
- D4 model frame: actors modeller, Γ, edge list; currency residual reduction and reach; anchor external system dynamics.
- Partition or union: union of S (strength), D (direction), T (duration), M (meaning), with D1/D3 and D2/D4 forming compounds.
- Dependency order: perception → vocabulary → objective → planning → learn and carry (Fig 3 :4-15).

No new domain is introduced here. The figure lines below were selected only after this census was fixed.

---

## Q1: Are two networks with the same edges but different edge types isomers?

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :124)
> **"Symmetry is what decides whether an arrangement is a new thing."** (Fig 12 :92)
> **"Two entries can share every ingredient and be inverses of one another."** (Fig 12 :96)

Two graphs with identical vertex sets and identical unordered connected pairs have the same atoms. If one joins them with a symmetric co-presence bond (+) and the other with an ordered sequence bond (→), they are **isomers** under Fig 12 :117: same atoms, different bond, different substance, with the difference invisible in the edge list and decisive in what spreads or fails. This is stronger than the intuition that "it is not the nodes, it is the connections", because it says the arrangement is itself a substance and carries information the node list does not.

If the graphs share only a pattern, for example `node → bond → node` with different atoms occupying the slots, the weaker claim holds: members of one **functional group** (Fig 12 :124), where the pattern fixes the kind and the qualifier says which member. A resource-list or endpoint-list comparison cannot distinguish the isomer from the functional-group case; the bond must be recorded (Fig 12 :5).

The converse matters too. *"Different routes can arrive at the same substance."* (Fig 13 :121) A temporal contact sequence represented as a sequence of instantaneous contacts and the same system represented as a set of duration-bearing intervals may compose to the same substance at the network scale. Which representation is cheaper to state and which is cheaper to settle are two different prices (Fig 12 :125-127).

**Falsifier, written before the run:** if two graphs with identical atoms and identical bonds nevertheless diverge in observed dynamics with no difference in ground contact or imported atoms, the isomer framing is insufficient and the difference must be habitat (D2), which moves the explanation out of D1. A second falsifier: if a strength-only change produces a categorically different behaviour with no bond change, strength must be promoted to a bond distinction too.

**Status:** `specified`, triangulated for legality (Fig 12 and Fig 13 :121, different figures), single-source for the network application. The world corroboration is Leskovec et al. 2010 on signed links (a different subfield but still network-facing) and is one witness.

---

## Q2: Where does strength live, and why is gradient the wrong home?

> **"ordering, so more and less can be said"** (Fig 13 :20)
> **"What makes a gradient a gradient is that it can be spent, and neither an ordering nor a span of space has directedness."** (Fig 13 :46-47)
> **"a threshold relation between two quantities"** (Fig 12 :87)

An early draft of this derivation mapped "strength" to the Gradient. That is a strain. Fig 13 :46-47 says gradient is defined by directedness and spendability, not by magnitude. Strength is an ordering that allows more and less to be said (Fig 13 :20), and "above a threshold" is the ⋛ comparison (Fig 12 :87). So:

- strength belongs to **spectrum ordering plus the comparison bond**;
- direction belongs to the **ordered versus symmetric bond classes**;
- gradient describes **what can be spent along a direction**, which is a separate question from either magnitude or symmetry.

**Re-census R1:** the earlier reading conflated "stronger than" with "directed". Re-census separates them: spectrum/comparison for the ordering, gradient for the directed difference, ordered bond for the sequence. After re-census, no figure is strained. This is logged as S2 in `01_figure_grounded_audit.md` section 6.

**Falsifier:** exhibit a difference in link strength that an ordering/comparison instrument cannot rank, or a directed relation with no spendable difference. Either would break the mapping. Mode `specified`, figure-derived.

---

## Q3: What order do the conditions bind in?

> **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."** (Fig 3 :20-21)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** (Fig 3 :26)

Order for a modeller facing a changing link representation:

1. **Perception.** Can the instrument register link events at all? Failure here is visible and has obvious tests.
2. **Vocabulary.** Does Γ have terms for what a link affords, that is the seven bonds and their symmetry tests? This is the middle link. A vocabulary holding only a weight column can say what a link contains and cannot say what it affords.
3. **Objective.** Can the modeller state a comparison that would count as progress, for example "this bond type predicts the cascade better than that one on the same trace"? Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."*
4. **Planning.** Choose the representation under incomplete information.
5. **Learn and carry.** Settle against the ground, name what worked, carry it to the next problem.

The four conditions map onto this chain: **T** (duration) is mostly a failure of link 1, the channel; **S** (strength) is mostly a failure of link 3, the comparison; **D** (direction) is a failure of link 2, the bond vocabulary; **M** (meaning) is mostly a failure of link 5, where a type is named but never imported or settled. That mapping is why a single lever cannot clear all four (Fig 9 :55).

The order also decides which instrument to buy first. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Ties have abundant weight-fitting tools (links 1 and 4 have measurements); bond vocabulary and provenance (links 2 and 5) have almost none. Budget naturally piles up where instruments already exist.

**Falsifier:** a model whose chain demonstrably works at links 1, 2 and 3 and fails only at planning, with the failure measured. That would falsify the "usually middle" claim, though not the dependency ordering itself.

---

## Q4: Duration, catalyst and cycle

> **"the ordered succession of differences"** (Fig 13 :12)
> **"adjacency is not duration, an ordering is not a pathway, a pathway is not a direction."** (Fig 13 :36)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)

Duration is not a fourth scalar attached to an edge. Time is one of the six states (Fig 13 :12), and the question of whether a link survives its own use is the catalyst structure (Fig 12 :119), while the question of whether its output re-enters is the cycle structure (Fig 12 :121). A timestamped edge list records when contacts happen; it does not record whether the bond is spent or regenerating, and *"nothing records which a term is"* (Fig 12 :119). The world's temporal-network literature corroborates the representation half: Holme and Saramäki describe *"moving the information of when things happen from the dynamical system on the network, to the network itself"* (abstract, 2012). It does not corroborate the catalyst distinction, which remains framework-internal and `specified`.

**Falsifier:** a link whose duration is fully determined by its adjacency and strength, with no separate time state needed and no difference across uses. That would collapse T into S and D.

---

## Q5: Meaning: declared type versus grounded bond

> **"a declared meaning is not a grounded one"** (Fig 10 :18)
> **"the convention does not fix the bug. it makes the bug statable"** (Fig 10 :16-17)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"Bring a characterised residual, never the source."** (Fig 10 :52)

A type string in an edge table is a convention. It is useful when it makes a failure statable, and it becomes a defect when it decides the model's prediction. Under Fig 8 :51, *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."* So a representation should carry the provenance of each bond type, not just its label. The framework's rule for meaning is installability: *"→ install what can be violated"* (Fig 10 :19). A type that cannot be violated by an observation is a name, not a grounded meaning.

**Falsifier:** a link-type convention that decides no outcome, whose violation is observable, and whose selection is repeatedly settled by the ground rather than authored by the modeller. That would weaken F8 to `general`.

---

## Q6: Competing representations, and what each can and cannot reach

| candidate representation | what it names | figure-line bearing | what it cannot reach |
|---|---|---|---|
| **Weighted adjacency** | magnitude on one bond type | spectrum ordering, flat formula (Fig 13 :20; Fig 12 :6, :101) | direction, duration, meaning; the bond price term is zero |
| **Directed adjacency** | an ordered pair | sequence bond → (Fig 12 :72) | whether the order is sequence or production (⇒, Fig 12 :77); strength and meaning |
| **Temporal contact sequence** | events with timestamps | time state and cycle (Fig 13 :12; Fig 12 :121) | whether the bond survives its own use (catalyst, Fig 12 :119) |
| **Multilayer / multiplex** | several edge types as layers | same atoms, different bonds, isomers (Fig 12 :117) | the provenance of each layer; a layer label is still a declared convention until licensed |
| **Signed / valenced edges** | positive versus negative relations | comparison ⋛ and valence relative to residual (Fig 12 :87; Fig 11 :49) | the reason a sign flips when the residual changes; it is a relation, not a kind (Fig 11 :50) |
| **Latent embedding of link meaning** | a vector with no external referent | no nameable anchor | excluded at census X1: no anchor independent of the model's own output |
| **Which bond a named empirical link has** | the missing name | no figure line after re-census | `gap`: Fig 9 :32, Fig 13 :134, Fig 8 :39 |

No candidate is discarded by prestige or familiarity. Each is ranged against the same residual, in the order Fig 8 :53 requires. The point is not to pick one. The first five are network-facing and share a broad evidence pool; the ecology source is the low-overlap witness for strength and sign as measured quantities; and the latent-embedding row fails the anchor test structurally, not because embeddings are useless.

---

## CONCLUSION

Two networks with the same atoms and edges but different bonds are isomers under Fig 12 :117; two graphs sharing only the `node → bond → node` pattern are members of one functional group under Fig 12 :124. Strength belongs to spectrum ordering and the ⋛ comparison, not to the gradient; that correction is a re-census, not a softened reading. The conditions bind in dependency order, with vocabulary and carry as the usual breaks, which is why S, D, T and M need different instruments. The standard representations are bindings of figure terms and are generated by the shape up to the point where a name would be required. The isomer claim, the strength mapping, the order claim and the duration/meaning claims each carry a written falsifier; the naming gap is declared rather than filled.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. World sources opened and recorded in `10_source_ledger.csv`. No measurement was used. Mode `specified`.

## FIGURE CENSUS

Fig 3 (dependency order, middle break, instrument absence), Fig 6 (import moves the wall), Fig 8 (provenance, residual first, no proof of absence), Fig 9 (union vs partition, describe before looking, shape not name), Fig 10 (declared meaning, convention, bring the residual), Fig 11 (valence relative to residual), Fig 12 (bond, symmetry, price, isomer, functional group, catalyst, cycle, goal as comparison), Fig 13 (states and structures, ordering, time, cross-kind rule, closed set, different routes), Operators (⋛ type, bond price), Formula (steps 3, 5, 7, Direction). Strains after re-census: none. The three earlier strains S1 to S3 are logged in `01_figure_grounded_audit.md` section 6.
