# Are causal graphs with the same correlations isomers? Structure, order and analogues

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

Two directed networks can induce the same correlation matrix yet behave differently under an intervention. The record asks: (1) are such networks **isomers** under Fig 12's definition; (2) what **order** applies, given that a real network may contain feedback; and (3) do the six-term substrate say anything about whether a correlation reading is a network at all? Questions (1) and (2) are a union compound, because orientation and closure interact at a feedback edge. They are not averaged.

## DOMAIN CENSUS

- **Atoms held:** node variables, an association value per pair, candidate directed edges, an intervention operation, a latent node marker. **Bonds held:** the seven from Fig 12, of which `+` is symmetric and `→`, `⇒`, `−`, `⋛` are ordered; plus `¬` for refusal. No new primitive is available without import.
- **D1, the reading.** Actors: measured nodes and pairwise associations. Currency: co-variation. Anchor: the assay that produced the values.
- **D2, the structure.** Actors: all nodes, directed edges, latent causes. Currency: response under intervention. Anchor: a known-target perturbation.
- **D3, the comparison.** Actors: candidate graphs. Currency: which independences each implies. Anchor: the ground, never agreement among candidates.
- **Order by dependency:** settle whether the reading is a network structure at all (Fig 13), then classify the relation between candidate graphs (Fig 12), then decide whether the composition can close a cycle (Fig 12 :121), then carry the result with provenance.

## DERIVATION

### Q1  -  Are two graphs with the same correlations isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :95: **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."**

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Take two graphs over the same node set with the same adjacency skeleton but opposite orientation on an edge, for example `A → B ← C` and `A ← B → C`. They share the same nodes and the same ingredient list of pairwise associations. They differ in which operand the arrow joins, that is in the bond. By Fig 12 :117 they are **isomers**: same atoms, different bond, different substance. The difference is invisible in the correlation formula and decisive in the behaviour, because intervening on `B` changes `A` and `C` differently in the two graphs.

The figure also gives a weaker relation for graphs that share only a substructure. Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** Two graphs that share a collider or a fan-in motif but differ elsewhere are members of the same functional group, not isomers over the full atom set. This distinction matters: the claim "all causal graphs consistent with the data are isomers" is too strong; the claim "graphs in the same Markov equivalence class are isomers over the measured atom set" is the figure-licensed one.

World corroboration (secondary): Christopher Hitchcock, *SEP, Causal Models* (2018), gives the three-variable example whose Markov equivalence class is `X → Y → Z`, `X ← Y ← Z` and `X ← Y → Z`, and states: "We cannot determine from the probability distribution, together with MC and FC, which of these structures is correct." That is Fig 12 :117 written in the language of DAGs.

**Falsifier, written before the run:** if two graphs in the same equivalence class have identical responses to every available intervention on every node, the difference is not decisive in behaviour and the isomer claim is idle. In that case the class is one substance under two names, and the figure does not apply.

### Q2  -  What order applies: chain, cycle or something else?

Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**

A correlation reading is a flat list of pairwise quantities. Listed in a table, it invites the `→` reading, because the Operators table says "the only bond a flat chain can express, so every term today is a sequence whether or not it should be." But a real regulatory or social network contains feedback. A directed acyclic graph is a chain-like object in the exact sense of Fig 12 :121: "a chain cannot close by construction." So imposing acyclicity is not a neutral convenience; it is a decision to compose with `→` where the structure may require the cycle operator.

Two consequences:

1. The equivalence-class results cited in Q1 are proved under acyclicity. They describe the chain fragment of the network, not necessarily the whole system. If the ground contains a feedback loop, the class may omit the very edge that matters.
2. A node that acts and is regenerated (a transcription factor, a catalyst, a persisted social norm) is Fig 12's catalyst. Its role is invisible in a single time slice of correlations. It requires a time-resolved or interventional reading to be distinguished from a transient node.

**Falsifier for Q2:** exhibit a purely sequential composition that closes a feedback loop without a cycle bond. If one exists, Fig 12 :121 does not govern this domain and the acyclicity caveat is withdrawn.

### Q3  -  Is a correlation matrix a network at all under the six-term substrate?

Fig 13 :24: **"that entities relate, and influence travels"** is the definition of network as a structure. Fig 13 :35: **"Space, time and energy are not three readings of one quantity. Neither are spectrum, gradient and network."** Fig 13 :36: **"cannot: adjacency is not duration, an ordering is not a pathway, a pathway is not a direction. If two members drew on the same underlying fact,"** Fig 13 :37: **"their agreement would carry no information, and one of them would be redundant rather than minimal."**

A correlation matrix is an **ordering** of pair strengths, that is spectrum-like. It is not adjacency, because adjacency is which entities relate; it is not a pathway, because a pathway is which influence can travel; and it is not a direction, because direction is the bond. So a correlation matrix is not a network readout under the substrate. It is a spectrum over node pairs. Calling it a "correlation network" is a naming convention, not a compositional fact. This is the figure-level version of F1 in `01`.

Fig 13 :74: **"Everything else is a composition across the two kinds, never within one."** To get from a spectrum (a structure) to a network (a structure) requires a state in between, by Fig 13 :75: **"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."** Here the state is the measured node variable at a time. That is why time-resolved readings change the problem: they supply the state that licenses a cross-kind composition.

### Q4  -  What is the order of the union?

Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it."** Once a candidate edge orientation is settled against the ground, it becomes an atom for the next composition: the network motif, then the intervention plan. Before it is settled it cannot be composed over, by Fig 12 :106: **"Nothing composes over what was never admitted as a part."** This is why a pipeline that feeds unvalidated orientations into a downstream policy optimiser is composing over unsettled terms: Fig 5 :69 **"settling is necessary for a term to be composed over, and it is not sufficient."**

So the union's order is: settle the skeleton (partly reachable from the reading), settle the orientation (requires the discriminator), then compose into motifs and plans. Reversing this order is the named error of composing over unsettled terms. Formula step 2 adds that a refusal comes before a mint when a held orientation is found false: ¬ is not a bond, so the vocabulary must contain a way to refuse an edge, not merely to accumulate edges.

## CONCLUSION

Two graphs with the same correlations are **isomers** under Fig 12 :117 when they share the measured atoms and differ only in the bond; graphs that share only a motif are members of a **functional group** (Fig 12 :123), not full isomers. The composition is not a chain by default: a feedback network needs Fig 12's cycle, and the acyclicity assumption silently exports the chain. Under the six-term substrate a correlation matrix is spectrum-like, not a network, so direction is not in the reading. The order of the union is skeleton, orientation, then motif and plan, with refusals before mints. Each claim has a falsifier above, and none is `grounded`.

## ANCHOR

Verbatim figure text extracted from the canonical SVG set this session; eight essays by Isaiah N, opened 2026-11-22; Hitchcock's SEP entry on causal models. No measurement was used.

## FIGURE CENSUS

Fig 12 :5, :95, :104, :106, :117, :119, :121, :123 (bond, isomer, catalyst, cycle, functional group, level-relative irreducibility, settling necessity); Fig 13 :24, :35, :37, :74, :75 (network as structure, distinctness of the six, cross-kind composition); Operators table (sequence is the flat chain's only bond); Symbols table (`¬` as refusal); Formula step 2 (refuse before mint). Strains after re-census: one live caveat, named rather than hidden, the Markov equivalence results are proved under acyclicity while real networks may close a cycle.
