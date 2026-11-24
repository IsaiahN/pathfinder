# Figure-grounded audit: how people learn whom to trust

**Mode of this document: `general` on the structural shape, `specified` on per-domain predictions, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the empirical question it reports on. See `05_what_shape_means.md` section 6.

**Primary sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, and `FRAMEWORK/figures/THE_FORMULA.md` and `THE_SEAT_MAP_Field_Guide_amended.md`. Figure citations are `Fig N :line` against the verbatim extract. World sources are secondary corroboration only and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The learner faces a set of candidate trustees. Each candidate is an object slot s. Before acting the learner has a belief b_s about that candidate's trustworthiness, built from private history and an inherited prior mixed by the weighting w. The learner acts a_s (extend trust, withhold trust, check first), observes o'_s (what the trustee actually did, often through an institution), and registers a residual R_s = |Γ(b_s,a_s) minus o'_s|.

Parsing R by arity, symmetry and scale before choosing any figure line:

- **Arity:** many. R is indexed by candidate, one slot per potential trustee. It is not a single global "trust level."
- **Symmetry:** directed. A trusts B is not B trusts A; trust given and trust received are different slots. The bond is ordered (sequence or production), not a symmetric join.
- **Scale:** first order within one interaction (the per-slot loop), second order when reputation and institutions aggregate settled outcomes into a term that composes over the first-order results.

The question is therefore not one question. It is a **union compound**: per-slot learning, a reputation cascade, and an institutional habitat. Fig 9 :54-58 says a bundled problem is usually a union of overlapping conditions and a single lever clears the region where only one condition holds while leaving the intersections. We unbundle before searching.

---

## 1. Domain census

One line per domain: actors / currency / anchor. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| A. Per-slot trust learning | learner, candidate trustee (one slot each) | R_s = abs(Gamma(b,a) minus o'); w between private history and inherited prior | the trustee's revealed behaviour in a trust-diagnostic interaction | partition: R is per slot, do not aggregate |
| B. Network and reputation | peers, peers of peers, observers who inform others | reputation, a second-order atom built from settled first-order outcomes | the underlying behaviour reputation is a reading of; must not update on reputation alone | union: many outcomes become one term |
| C. Institutions and habitat | courts, property rights, enforcement, norms, kinship structures | consequences that make checking cheap or costly | the institution's actual enforcement record, which must not change because a frame approves of it | habitat, enumerated not composed |
| D. Verification (this solution's checking arrangement) | expert reader (Seat 4), primary and auditor seats | agreement and residual | the figures and the ground, never agreement | checking arrangement; in this run all seats share one evidence pool |

**Order by dependency (Fig 3):** perception (can tell who did what) to vocabulary (terms for what a trustee affords: reliable, reciprocating, enforceable) to objective (what counts as trustworthiness in this habitat) to planning (whom to approach, whether to check first) to learn and carry (reputation, institutional memory). The middle link, having terms for what a situation affords and saying what counts as progress, has the fewest instruments (Fig 3 :24-27). Institutions are mostly instruments at that link. Where they differ, the chain stops at a different place.

Partition or union: A is a partition (slots are distinct). B and C are unions. The full question is a union of A, B and C, so it needs one loop per domain and the verdicts stay separate.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual indexed by slot, not aggregated; ground is the only metric | governs domain A |
| 2 The Ground | anchor must not update; independence decides what agreement means; correlation has valence | governs domains A, B, D |
| 3 Dependency Chain | a link with no instrument is unlooked-at, not working | governs domain C |
| 4 The Membrane | only methods cross up; round-trip gap R_T | governs how the result is reported |
| 5 Mint Pipeline | refuted is the fifth kind; a refusal, not an explanation | governs betrayal in domain A |
| 6 Closure and Reachability | import is the only operator that moves the wall; debited against independence | governs cross-institutional contact in domain B |
| 7 Room Chain | same closure handed along compounds agreement, not evidence | governs echo networks in domain B |
| 8 Union Surplus | two frames together reach what neither alone; independence read twice | triangulates domain B |
| 9 Leave, Arrive, Search | describe the residual before choosing a frame; union unbundling | governs method for all domains |
| 10 Ground Maintainer | verifier non-access; bring a characterised residual, never the source | governs domain D and outreach |
| 11 The Habitat | valence relative to the residual; enumerate, never compose; contact cascades | governs domain C |
| 12 The Bond | bonds carry what operands do not; cycle, catalyst; settled molecule becomes atom | governs the structure of reputation in domain B |
| 13 Minimum Viable Set | network is a structure: entities relate, influence travels; independence among frames | triangulates domains B and C |
| Operators table | negation is a refutation, not a bond; a vocabulary without it only accumulates | governs betrayal in domain A |
| Symbols table | b, w (w_A + w_B = 1, learnable), R per slot, ground as anchor | governs w in domain A and C |

Strained readings are named as such below, not smoothed over.

---

## 3. Findings

### F1 — Trust is learned per slot; a global trust score is the aggregation error (domain A)

Fig 1 :19 "The residual is indexed by object slot, not aggregated."
Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :23 "The ground enters as the only metric."

"Whom to trust" is a per-candidate question. A single "how trusting is this person / this society" scalar sums over slots and throws away exactly the signal the question asks for. The world literature makes the same distinction in its own terms: generalized trust versus particularized trust (Wikipedia, Trust (sentiment)), and the observation that despite the centrality of trust, "very little is known about how and why trust evolves, is maintained, and is destroyed" (Simpson 2016, cited there). Mode: `general`, structural. Triangulated: Fig 1 plus Fig 13's independence condition (low overlap between the slot rule and the six-term set).

**Refuter:** show a trust decision where R is genuinely one scalar, the per-slot structure carries no predictive signal, and aggregating loses nothing. Then Fig 1 :19/:22 is refuted for this domain.

### F2 — The anchor is revealed behaviour, not agreement; correlation has valence (domains A, B, D)

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :45 "Frames range against the ground. They do not negotiate with it."

What settles "is this trustee trustworthy" is what the trustee actually did, not the number of peers who say so. A network in which everyone repeats one report is Fig 2's collapse 2: "they never talk, and still agree, so the agreement is the pool talking, not two frames confirming each other."

Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence."
Fig 2 :39 "Correlation has valence."
Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :41 "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"
Fig 2 :42 "Buy independence in proportion to the cost of being wrong."

This is the key to "networks differ." A dense, closed network with low independence produces a convention, not corroboration; that convention is a legitimate product (shared meaning), but it is not evidence about the world. A network with low-overlap frames produces triangulation. The two are different quantities, and confusing them is the central failure. World corroboration: in indirect reciprocity the rule is that q, the probability of knowing someone's reputation, must exceed the cost-to-benefit ratio, and "One important problem with this explanation is that individuals may be able to evolve the capacity to obscure their reputation, reducing the probability, q, that it will be known" (Nowak and Sigmund lineage, Wikipedia, Reciprocity (evolution)). The trust-game literature adds that "people acquire less information when their inquiries are visible to the partner, indicating that impression-management concerns can constrain information gathering in trust decisions" (Ma, Sanfey and Ma 2020, cited in Wikipedia, Trust game). Both say the same thing in effect terms: the channel, not the ground, is what fails. Mode: `general` on the anchor rule, `specified` on the network prediction. Triangulated across Fig 2 and Fig 8 (low overlap: anchor test versus union surplus).

**Refuter:** exhibit a case where every member of a network agrees a trustee is trustworthy while drawing on strictly independent readings of that trustee's behaviour, and show that their independence changes nothing about what the agreement means. That breaks Fig 2 :31-32/:40.

### F3 — w is the learnable axis on which networks and institutions differ (domain A)

Symbols table (local): w is "How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings." And: "Two frames with identical architecture diverge because their histories and their w diverge."

Institutions are the inherited prior; local network experience is private history. So "when networks and institutions differ" is exactly the condition in which w differs, and the learner's task includes learning w, not merely applying a fixed credulity. The cross-cultural record corroborates: low-trust societies are described as "typically kinship-based" with "respect for private property rights, a trusted civil court system" among the mechanisms that are "corrupted, dysfunctional, or absent" (Wikipedia, High-trust and low-trust societies, citing Natale 1998 and Rose 2011). Kinship versus court is a change in which prior dominates. Mode: `specified`. Single-source from the figures for the w rule (Symbols table), triangulated with the cross-cultural world source for the anchor-free description of the two regimes.

**Refuter:** show a learner whose w is fixed, not learnable from outcomes, and who still tracks a changing trustee across a change of habitat. That breaks the Symbols table entry and the prediction.

### F4 — Trustworthiness is a valence relative to the residual, not a property of a person (domains A, C)

Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone."
Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."
Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
Fig 11 :51 "No standing list of good actors survives a change of residual."

This is the structural answer to "institutions differ." The same person can be the right trustee under one set of norms and enforcement and the wrong one under another. Trust is a relation between agent and habitat, not a badge carried by the agent. That is why a list of "trustworthy people" exported from one institution into another is not evidence; the residual changed. World corroboration: institutional trust is described as "a dynamic relationship between an individual and an institution" (Wikipedia, Institutional trust (social sciences)), and giving in experimental games changes with social distance and anonymity (Wikipedia, Trust game / Dictator game). Mode: `general`. Triangulated (Fig 11 plus Fig 2's anchor-must-not-update rule; different objects).

**Refuter:** exhibit one actor rated trustworthy by the same test in two habitats with different residuals and different enforcement, with no change in contact. That breaks Fig 11 :49-51.

### F5 — The habitat is enumerated, never composed, and contact cascades (domain C)

Fig 11 :43 "The habitat is enumerated, never composed."
Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
Fig 11 :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."
Fig 11 :52 "contact cascades"

The trust habitat includes direct partners, their partners, observers, and institutions, out to where the cascade stops. Scoping to direct partners is how a learner misses the second-order effect. World corroboration from a low-overlap field: network reciprocity in evolutionary graph theory needs the benefit-to-cost ratio to exceed the average degree k (or the mean degree of nearest neighbours), because "Real populations are not well mixed, but have spatial structures or social networks which imply that some individuals interact more often than others" (Wikipedia, Reciprocity (evolution), citing Ohtsuki, Hauert, Lieberman and Nowak 2006). The dictator-game record agrees in effect terms: "the closer the social ties between the dictator and the recipient, the higher the level of giving" (Goeree et al. 2010, cited in Wikipedia, Trust game). Mode: `general`. Triangulated across Fig 11 and Fig 13's network structure (low overlap).

**Refuter:** show a trust decision fully determined by first-order contact where second-order and institutional contact change nothing, across a habitat change. That breaks the enumeration and cascade rule.

### F6 — Betrayal is a refutation (negation), not an accumulation (domain A)

Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so"
Operators table (local): "a refutation is a negation, which is why a vocabulary without it can only accumulate"
Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

Betrayal is not "one more low observation" that an averaging rule absorbs. It is a refusal of a held term. A system that can only accumulate cannot carry the correction; it can be corrected and cannot record the correction. Repeated interaction closes a cycle, and the sign of the loop decides whether it closes: Trivers' direct reciprocity condition w > c/b (Wikipedia, Reciprocity (evolution)) is the world analogue. The experimental record names the asymmetry directly: "Betrayal aversion is another major factor that weighs the impact of trust and risk" (Bohnet and Zeckhauser, cited in Wikipedia, Trust game). Mode: `specified`. Triangulated across Fig 5 amendment, Operators table, Fig 12 cycle, and the world asymmetry finding.

**Refuter:** exhibit a trust system that records no refusal (no negation, only accumulation) and still tracks the ground through a betrayal. That breaks the Operators table entry and Fig 5 :53.

### F7 — Reputation is a second-order atom; closure is idempotent and imports cost independence (domain B)

Fig 12 :103 "Composition is recursive, and the level decides what is irreducible."
Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world"
Fig 6 :21 "MINT composes inside the closure and can never add an atom."
Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 8 :45 "Two frames together reach what neither reaches alone."
Fig 8 :47 "Independence is one quantity read twice."

First-order outcomes, once settled against the ground, become atoms at the next level: reputation. But a network cannot manufacture a reason to trust by searching harder inside the same evidence pool. Only contact with a frame whose closure differs moves the wall, and that import is debited against the importer's independence (Fig 6 :24). This predicts what bridging ties and migration do: they supply new atoms (new reasons to trust or withhold), at a cost in independence that must be paid, not ignored. World corroboration: indirect reciprocity requires q > c/b and "Reputation allows evolution of cooperation by indirect reciprocity" (Wikipedia, Reciprocity (evolution)); cross-cultural game experiments show trust and giving vary with institutions and social distance (Henrich et al., cited in Wikipedia, Trust game). Mode: `specified`. Triangulated across Fig 12 and Fig 6/8 (different quantities: level recursion versus wall movement).

**Refuter:** show a closed frame that adds a genuinely new reason to trust by internal search alone, with no import, and with independence unchanged. That breaks Fig 6 :21/:23 and Fig 8 :45.

### F8 — Where the chain stops is an instrument question, not a moral one (domain C)

Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."
Fig 3 :29 "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."

Institutions matter because they are instruments at the middle link: they make "what does this situation afford, and what counts as progress in trust here" statable. A society with a trusted civil court has an instrument where a kinship-only system may have none; that is a difference in which link is worked, not a difference in virtue. World corroboration: the high/low-trust record lists a "trusted civil court system" and "voluntary tax payment" among the mechanisms present or absent (Wikipedia, High-trust and low-trust societies). Mode: `general`. Single-source from the figures for the dependency-order rule; the world source is an analogue, not a second figure.

**Refuter:** exhibit a trust system with no instrument at the vocabulary/objective link whose success there was measured rather than assumed. That breaks Fig 3 :27.

### F9 — What survives, with mode attached

| claim | mode | figure |
|---|---|---|
| Trust residuals are per candidate, never a global average | `general`, structural | Fig 1 :19, :22 |
| The anchor is revealed behaviour, and agreement is not a verdict | `general` | Fig 2 :29, :35, :40-41 |
| w (private history versus inherited prior) is learnable and is the axis of difference | `specified` | Symbols table; high/low-trust world source |
| Trustworthiness is a valence relative to the residual, not a property | `general` | Fig 11 :49-51 |
| The habitat must be enumerated and contact cascades | `general` | Fig 11 :43-44, :48 |
| Betrayal is a refutation needing negation | `specified` | Fig 5 :53; Operators table |
| Reputation is a second-order atom; only import moves the wall | `specified` | Fig 12 :104; Fig 6 :23 |
| The exact cognitive algorithm that performs the above | `gap`, unreachable at this budget | Fig 8 :39; Fig 9 :44 |

The gap is a verdict, not a silence: "So a search that finds nothing is never a proof of absence" (Fig 8 :39), and "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing" (Fig 9 :44). The framework returns the shape; it does not name the mechanism.

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device."

The shape claim is refuted if any of the following holds:

1. A trust decision is genuinely single-slot: R is one scalar, no per-slot structure carries signal, and aggregation loses nothing (breaks Fig 1 :19/:22).
2. A network agrees on a trustee from strictly independent readings of that trustee's behaviour, and independence changes nothing about what the agreement means (breaks Fig 2 :31-32/:40).
3. The same actor carries trustworthiness as a property across two habitats with different residuals and different enforcement, with no change in contact (breaks Fig 11 :49-51).
4. A trust system builds correct trust with no instrument at the vocabulary/objective link, where success there was measured and not assumed (breaks Fig 3 :27).
5. A trust system tracks the ground through betrayal while recording no refusal, accumulating only (breaks Fig 5 :53 and the Operators table negation entry).
6. A closed frame adds a genuinely new reason to trust by internal search alone, with no import and no cost in independence (breaks Fig 6 :21/:23 and Fig 8 :45).

If any fires, the relevant domain claim is withdrawn. Until one is run, nothing here is labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape and the refuter, not with a theory of trust. Fig 10 :52 "Bring a characterised residual, never the source."
2. Keep the three domains' verdicts separate; never average them into one "trust score." Fig 1 :19.
3. Ask what a failure would look like before offering any link. Do not ask for agreement or trust. Fig 2 :35; Seat Map :163.
4. Use the public opt-in venues in `03_public_contact_points.csv`, one to one, not a bulk list.
5. Offer the formula as a method only at stage 3, with the instruction that each user writes their own refuter and states their own mode. Fig 4 :22 "Only methods cross up. Only head starts come down."

---

## 6. Canonical usage check and retraction log

Two local sources were read after the first sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo"; "the quotes are the authority, not this summary"; the framework returns "a shape, not a name"; "Indiscernibility is not identity"; and "a reading that makes one contradict another has misidentified its domain, not found a flaw."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws; the seat reads the ground and does not ask the anchor to decide design questions already settled by derivation. "Needing a human RLHF ruling is itself the signal that I stopped deriving too early."

### Retractions and confirmations of my own earlier readings

| earlier reading | status after the canonical check |
|---|---|
| I first mapped the evolutionary-biology w (probability of another encounter, Trivers/Nowak) directly onto the Tether w (weighting between private history and inherited prior). | **Retracted.** Same glyph, different quantities. Fig 8 :50-52 says convergent derivation and adopted import look identical in the contents and only the record separates them. The resonance is an analogue, not an identity; the two w's are kept distinct. |
| I first read the correlation rule as an absolute claim that shared trust is always worthless, and that reading was wrong (Fig 2 :40). | **Refined, not merely repeated.** Fig 2 :39-41 gives correlation a valence: disqualifying for a verdict, efficient for a convention. A shared norm is a legitimate product and not evidence about the world. The over-broad reading is withdrawn. |
| I first treated "institutions" as one domain with one anchor. | **Re-census.** Fig 11 makes institutions the habitat (enumerated, not composed); the anchor is the enforcement record, which must not update on what frames think. "Institution" splits into habitat conditions and anchor behaviour. Domains C and D are now separate. |
| I first looked for one cognitive mechanism that answers the whole question. | **Retracted.** Fig 9 :54-58 makes it a union compound; Fig 9 :32 "you get a kind of thing, never the answer itself." The mechanism name is a `gap`, recorded as such, not a hidden failure. |
| F1 (per slot) | **Canonically confirmed.** Fig 1 :19/:22 and the Symbols table slot definition agree. |
| F4 (valence relative to residual) | **Canonically confirmed.** Fig 11 :49-51 and the metalaw note that capability is agent-and-habitat agree. |

### Round trip and strain

Condensing the figures into the shape "trust is per slot, anchored in behaviour, weighted by w, embedded in a habitat, corrected by refusal, and composed into reputation" loses three things on the way back down: the ordered bond types (sequence, production, subtraction, comparison) that `06_isomers_and_order.md` restores; the valuation of correlation (convention versus verdict) that F2 restores; and the import cost against independence that F7 restores. R_T is nonzero and is recorded qualitatively in `11_audit.md`. No figure strain survived re-census; the one live tension is that the world sources are all one Wikipedia/encyclopaedia pool, so their agreement is weak corroboration, declared in `10_source_ledger.csv`.
