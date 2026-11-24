# Isomers, cycles and order in the clustering question

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

Two contact networks can share a degree distribution, a global clustering coefficient and a set of triangles, yet give different epidemic outcomes. The record asks for the structural reason. Four questions are owed: (1) are they **isomers** under Fig 12's definition; (2) what **order** does the transmission chain require; (3) what is the difference between a **chain** and a **cycle** here; (4) is there a **functional group** whose member is decided by the immunity regime?

## DOMAIN CENSUS

Atoms held: nodes, edges, triangles, cliques, communities (D1 of `01`); states S, E, I, R; recovery and re-entry. Bonds held: the seven, including → sequence (ordered), ⋛ comparison (ordered), and the cycle as a derived structure. Negation is the eighth operator and is not a bond: a permanently removed node is not a susceptible node with a negative flag, it is a different state. No new primitive is available without import.

## DERIVATION

### Q1 — Are differently arranged clustered networks isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fix the atom set: the same nodes, the same number of edges, the same number of triangles. Let network A place its triangles so they share no edge (disjoint motifs). Let network B place them so they share edges, forming cliques or a community with a few bridging edges. Both have the same ingredient list, so the flat formula cannot tell them apart.
- Under Fig 12 :94, "The arrangement is the substance." They are **isomers**, not variants of one network.
- World check (low overlap with the framework): Rolls et al. 2015 report that two models "calibrated to have the same degree distribution, the same global clustering coefficient and the same disease parameters" can give "quite different" epidemic dynamics, "especially when clustering is extensive", and conclude that "the specific nature of the clustering appears relevant for epidemic dynamics." Volz et al. 2011 make the same point from a different method: the coefficient "alone is not always sufficient".
- **Falsifier, written before the run:** if two networks matched on degree sequence, triangle count and clique-size distribution, but differing in which motifs share edges, give statistically indistinguishable growth rate, final size and disease lifetime across many runs, they are not isomers in the epidemically relevant sense and Q1 fails.

### Q2 — What order does the chain require?

- Fig 12 :72 defines → as "A then B; B needs A to have happened", with the test "swap them. Does it become a different thing? Yes." (Fig 12 :74).
- The observed process is ordered: contact precedes infection, infection precedes recovery, recovery may precede re-entry. The word "already reached" in `01` F2 is an ordering claim, not a count.
- Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one." A clustering coefficient names a state of the network. It cannot name the route the infection took. That is why transmission-tree data is tempting and why Welch 2011 found it insufficient: a tree records a route, but a single tree is one realisation, and the noise masks the coefficient.
- **Falsifier:** a transmission process whose outcome is invariant under reversal of the contact-to-infection order, for which "already reached" and "not yet reached" are the same slot. That would remove the ordered bond and break Q2.

### Q3 — Chain versus cycle: where does the reservoir come from?

- Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- A triangle closes a path in the contact graph. Whether it closes an **epidemic** loop depends on the state transition after recovery. In SIR, I goes to R and R does not return: a recovered node is not re-challenged, so the epidemic chain cannot close through it. The triangle is a dead end and the local susceptible pool is depleted (F2 of `01`).
- In SIS or SIRS, I goes back to S, or R loses immunity: the output re-enters as input. The same triangle now closes the loop. The "sign of the loop" is the immunity regime. This is the structural reason Nadini et al. 2018 found "while the presence of tightly connected clusters inhibits SIR processes, it speeds up SIS phenomena" and that "communities act as a reservoir for the disease".
- The reservoir is therefore not a kind of network; it is a relation between a network arrangement and a state-transition regime. Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Read at the level of structures, not just actors.
- **Falsifier:** a permanently removing epidemic that sustains re-entry-like persistence in a clustered community with no external reseeding, or a reinfecting epidemic whose clustered communities show no longer lifetime than degree-matched controls. Either breaks the chain/cycle distinction.

### Q4 — Functional group and qualifier

- Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- Both regimes share the functional group `local cluster -> correlated exposure -> local depletion`. The qualifier is the immunity regime: permanent removal (slow-down member) versus re-entry (reservoir member). Same group, different member, opposite outcome.
- This keeps the verdict from drifting into a standing list. Fig 11 :51: "No standing list of good actors survives a change of residual." There is no standing list of good structures either.
- **Falsifier:** a cluster structure that produces the slow-down outcome under both qualifiers, or the reservoir outcome under both, with no categorically different residue. That would collapse the functional group into a single member and break the union.

### Q5 — Scale order and the round-trip gap

- Fig 13 gives a one-chain reading: state, structure, relations, fields, gradients, flows, networks, and on. For this question the practical order is node (state), edge and triangle (structure), community (network), epidemic curve (flow across the whole system).
- The transform between scales is lossy (Fig 4 :27, "The transform between scales loses information, and that is the point."). Carrying the micro fact "a triangle closes a path" up to the macro claim "clustering slows epidemics" drops the immunity regime and the degree distribution. Carrying it back down does not reproduce the original. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
- The gap is recorded qualitatively in `11_audit.md`: what drops is the arrangement, the immunity regime and the fixed-degree condition.

## ANALOGUES AS THE QUESTION NEEDS THEM

Two low-overlap analogues were examined, with the shadow test (Fig 8 import needs a source gate and a shadow test):

1. **Household cliques.** Volz et al. 2011 parameterise high clustering within households and find that ignoring household clustering overestimates prevalence. Shadow test: it explains the local-depletion gap, so it is admitted as an instance, not as a new primitive.
2. **Communal nurseries and badger social groups.** Marescot et al. 2021 find higher fade-out with communal nurseries; Benton et al. 2016 describe badger social structure as driving clustered infection and persistence. Shadow test: both explain the between-group contact cascade of Fig 11 :52. They are admitted as analogues from a differing closure (disease ecology, not network epidemiology). Their agreement with the network-epidemiology pool is one corroborating witness, not independent grounds (Fig 2 :31).

No analogue was used to name a numerical flip point. That remains a `gap`.

## CONCLUSION

The two regimes are **isomers over a fixed arrangement atom set**: same nodes, edges and triangles, different bond arrangement and different state-transition qualifier, hence different substance. The chain requires the ordered bond → because "already reached" is an ordering claim. The reservoir requires the cycle, which appears only when infection re-enters, and the immunity regime is the sign of that loop. The two outcomes share a functional group and differ by qualifier, so verdicts must be kept separate. Falsifiers for all four moves are written above and were not run; this remains `specified`, not `grounded`.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session, plus the world sources named above, each opened as recorded in `10_source_ledger.csv`. No epidemiological measurement was taken by this derivation.

## FIGURE CENSUS

Fig 4 (lossy scale transform, R_T), Fig 8 (source gate and shadow test, one witness per pool), Fig 11 (valence relative to residual, contact cascades), Fig 12 (isomer, sequence, cycle, functional group, arrangement is the substance), Fig 13 (scale chain), Operators table (sequence and comparison). Strained after re-census: the ⋛ operand type at the threshold (S2), named in `01` F4 and carried into `09` and `11`; no other strain.
