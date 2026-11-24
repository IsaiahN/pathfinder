# Isomers, order and competing explanations - supporting derivation for CMP-0093

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The primary audit (`01`) returned a union of four conditions. Three questions are still owed before the answer can be stated cleanly:

1. **Structure.** Are targeted and distributed intervention two members of one family (a functional group), or are they genuinely different substances with the same ingredients (isomers) under Fig 12?
2. **Order.** In what order do the conditions and their instruments bind? Which link breaks first?
3. **Competing explanations.** Can the field's standard answers be generated from the shape, or do they name something the shape cannot reach?

## DOMAIN CENSUS (carried forward, not re-run)

- D1 network topology: actors nodes, edges, hubs; currency connectivity; anchor measured adjacency and degree sequence.
- D2 cascade dynamics: actors contagion, failure, information, flow; currency propagation and cases averted; anchor measured post-intervention outcome.
- D3 intervention seat: actors intervener, lever, chosen node set; currency cost and reach; anchor settlement against the ground.
- D4 habitat: actors conditions, other networks, environment; currency stability; anchor the ground that persists.
- Union, not partition: C1 concentration, C2 faithful bracket, C3 stable habitat, C4 reachable target; D1/D2 and D3/D4 forming two compounds.
- Dependency order: perception to vocabulary to objective to planning to learn and carry (Fig 3 :4-15).

No new domain is introduced here. The figure lines below were selected only after this census was fixed.

---

## Q1 - Are the two strategies isomers or members of one functional group?

> Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
> Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
> Fig 12 :92: "Symmetry is what decides whether an arrangement is a new thing."
> Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

Write both strategies over the full shared atom set: the nodes, their relations, the goal and the ground. The atoms are the same; what differs is the arrangement of the action over them, one concentrated and one spread. Under Fig 12 :117 they are **isomers** if that different arrangement is what changes the outcome, and the difference is invisible in a resource list that records only "which nodes were touched". This is the figure-grounded version of "it is not how many you touch, it is how you arrange the touching", but stronger: the arrangement is itself a substance carrying information the ingredient list does not.

If the two strategies share only the network while differing in which nodes occupy the action slots, the weaker claim holds: they are members of one **functional group** (Fig 12 :123), the group fixing the kind ("intervention on a network") and the qualifier fixing the member ("concentrated" or "distributed").

The distinction is testable. A comparison that records only counts of treated nodes cannot tell isomer from functional-group; the bond, that is, the arrangement of actions relative to the cascade path, has to be recorded. Fig 12 :94: *"The arrangement is the substance."*

**Falsifier, written before the run:** if two interventions with identical atoms and identical bonds nevertheless diverge in measured outcome with no difference in ground contact or imported atom, the isomer framing is insufficient and the difference must be habitat (D4), which moves the explanation out of the arrangement.

**Status:** `specified`, triangulated for the legality of the reading (Fig 12 and Fig 11 :50, different figures), single-source for the world application. The world corroboration is Albert et al. 2000 (targeted removal fragments a network that random failure does not) and Liu et al. 2011 (control targets avoid hubs), but both are network-physics bindings of the same broad field, so they count as one witness for the arrangement claim.

---

## Q2 - What order do the conditions bind in?

> Fig 3 :20: "The chain is ordered by dependency, not by importance."
> Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
> Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Order for an intervener facing a cascade:

1. **Perception.** Can the system read the network and the outcome at all? Failure here is visible and has obvious tests.
2. **Vocabulary.** Does its Γ have terms for what the nodes afford, and can it identify influence relative to the stated goal? This is the middle link. Fig 3 :26: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."*
3. **Objective.** Can it state a comparison that would count as "outperform"? Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* A vocabulary with only ingredients cannot state a goal.
4. **Planning.** A route to that objective under incomplete information.
5. **Learn and carry.** Name what worked, verify it, carry it to the next system.

The four conditions map onto this chain: C1 (concentration) is mostly a failure of links 1 and 2; C2 (bracket) fails at links 2 and 3; C3 (habitat) fails at link 4, because the planned route assumed a habitat that was substituted; C4 (reach) fails at link 5, because the frame names what worked but never imports a new atom. That mapping is why a single lever cannot clear all four (Fig 9 :56).

The order also decides which instrument to buy first. Fig 3 :27 applies: adjacency and outcome data usually exist at link 1, while link 5 has almost none. Budget therefore piles up at links 1 and 4 while the break sits at 2 and 5.

**Falsifier:** a system whose chain demonstrably works at 1, 2 and 3 and fails only at 4. That would falsify the "usually middle" claim of F8 in `01`, though not the dependency ordering itself.

---

## Q3 - Competing explanations, and what each can and cannot reach

| candidate explanation | what it names | figure-line bearing | what it cannot reach |
|---|---|---|---|
| **Hub / high-degree targeting** (Albert, Jeong, Barabási 2000) | concentrated degree as the live slot | close to C1 and Fig 1 :19-22 | Why the same hub is not the target for controllability; no contact variable, so it conflicts with Fig 11 :49 until re-read as task-relative |
| **Structural controllability** (Liu, Slotine, Barabási 2011) | the driver set for a specified dynamics | close to C2 and Fig 7 :38 (bracket) | It is a different residual, not a rival answer to the same one; it does not say which goal the intervener holds |
| **Percolation / epidemic threshold** (Pastor-Satorras et al. 2015) | the threshold that decides whether a cascade takes off | close to C2 and Fig 7 :39 (ground pressure) | A threshold is a property of a model; it must still be settled at the ground for the system at hand |
| **Network dismantling** (Artime et al. 2024) | the optimal range of applicability of a removal technique | close to C3 and Fig 9 :60 (filters for budget) | It ranks techniques by a frame-internal performance measure unless the ground pays |
| **Recoverable phase / microscopic intervention** (Sanhedrai et al. 2022) | a phase in which one node can reignite a system | close to C3 and C4, Fig 6 :23 | Only after structural reconstruction; it does not identify the node from inside the held closure |
| **Rule of hand** (MathisonSlee et al. 2022) | a small set of key variables governs critical change | low-overlap corroboration of C1 and the instrument gap | Under-tested and critiqued as reductionist; it does not name the variables |
| **Rigidity trap / diversity** (MathisonSlee et al. 2022) | a stuck phase loses adaptive responses | Fig 12 :119, :121; Fig 7 :36 | It is an analogue at a different stratum; no per-system intervention measurement here |
| **"A few good influencers" as a standing list** | an intrinsic property of certain nodes | conflicts with Fig 11 :49-51 | No anchor independent of the residual; excluded as X1 in the census |
| **Luck / unmeasured latent ties** | an unearned early reading that persists | Fig 8 :39: "So a search that finds nothing is never a proof of absence." | Cannot be excluded from inside a frame; honest `gap`, not a rival verdict |

No candidate is discarded by prestige or familiarity. Each is ranged against the same residual, in the order Fig 8 :53 requires. The point is not to pick one; it is to notice that the first five are all in one broad network-science evidence pool (Fig 2 :31), and that the sixth and seventh are the genuinely low-overlap witnesses.

---

## Q4 - Does the shape generate the literature's answers?

Partly. The shape can generate:

- the hub-targeting emphasis, as C1 under a concentrated degree distribution;
- the controllability result, as C2 under a different task residual, which flips the node's valence exactly as Fig 11 :50 predicts;
- the phase-boundary result, as C3 and C4 combined;
- the rule-of-hand observation, as C1 with an acknowledged instrument gap;
- the caution about systemic cascades, as Fig 11 :52's first-order enumeration warning.

It cannot generate the *name* of the specific node set that will work in a given system. That is the `gap` recorded in F10 of `01`. It is a gap at the instrument boundary, not a silence: Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39 applies. The source rule states why: an instrument that reads a result *"cannot comment on the source"*, and *"the answer is unreached until a better instrument exists"* (*The Hard Problem is About Source*).

---

## CONCLUSION

Two strategies over the same nodes but with the action arranged differently are isomers under Fig 12 :117 only when that arrangement is what changes the outcome; if they share only the network and differ in which nodes occupy the action slots, the weaker functional-group claim (Fig 12 :123) stands. The conditions bind in dependency order, with the middle link (vocabulary and objective) and the carry link the usual breaks, which is why C1 to C4 need different instruments. The standard explanations are mostly bindings of one network-science evidence pool and are generated by the shape only up to the point where a name would be required. The isomer claim has a written falsifier; the order claim has one; the naming gap is declared rather than filled.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. World sources opened and recorded in `10_source_ledger.csv`. No measurement was used. Mode `specified`.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor, pooled agreement), Fig 3 (dependency order, middle break, instrument absence), Fig 6 (import moves the wall), Fig 7 (bracket and ground pressure), Fig 8 (residual first, underivable versus unreachable), Fig 9 (union versus partition, filters, describe before looking), Fig 11 (valence relative to residual, contact cascades), Fig 12 (isomer, functional group, symmetry, arrangement is substance), Formula (steps 3, 5, "Direction"). Strained after re-census: none. The one earlier strain, applying Fig 13's six-term substrate to intervention targets, was re-census S1 and is logged in `01_figure_grounded_audit.md` section 6.
