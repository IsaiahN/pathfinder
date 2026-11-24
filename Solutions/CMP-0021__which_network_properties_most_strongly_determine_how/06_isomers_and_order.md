# Are the three properties isomers? Structure, order and analogues in CMP-0021

**Mode: `specified` for the field application, `general` for the figure definitions.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The question asks which of degree distribution, clustering and community structure "most strongly" determines spread. Before ranking them, we must ask what kind of thing they are. Are they three different atoms of a network, or three different arrangements of one atom set? The answer changes what a comparison between them even means. A second question follows: is "most strongly" a sequence or a comparison?

## DOMAIN CENSUS

Atoms held in the substrate: the six terms (space, time, energy as states; spectrum, gradient, network as structures). Bonds held: the seven, including sequence `→` and comparison `⋛`, plus negation. The three candidate properties are **not** substrate atoms; they are derived descriptions of the network structure, held in the network-science frame as a habitat (Fig 11 :43). No new primitive is available without import, and none is needed.

## DERIVATION

### Q1 - Are degree distribution, clustering and community structure isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :94: "The arrangement is the substance."
- Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
- Fig 13 :122-123: "In chemistry this has been established since Liebig and Wöhler found two substances with the same composition and different properties, 1824 to 1826, and Berzelius named it isomerism in 1830."

Two networks with the same nodes and the same number of edges (the same ingredient list) can have a very different degree sequence, or the same degree sequence with very different transitivity, or the same degree sequence and transitivity with very different community boundaries. Their adjacency lists are different molecules under Fig 12. The spread behaviour differs even though the "formula" (node count, edge count) is identical. That is the figure's isomer case stated for networks: **the arrangement carries the causal difference, and an ingredient-only description records half of it.**

This is why the question as posed loses information. "Degree distribution" is a projection of the arrangement onto one axis; "clustering" and "community structure" are projections onto others. Asking which projection wins is like asking which coordinate of a molecule explains its boiling point. The bond arrangement between the coordinates is doing the work (Fig 12 :94).

**Reading:** the three properties are not rival atoms. They are isomer-generating variations of arrangement over one atom set (nodes, edges, transmission states). A comparison between them is a comparison between *descriptions of a molecule*, not between substances that could be swapped in and out.

**Mode:** `general` for the figure definition, `specified` for the network application.
**Status:** triangulated across Fig 12 :5, :94, :117 and Fig 13 :122-123, with the chemistry case as the figure's own analogue. The network application itself is unmeasured.
**Falsifier, written before the run:** if two networks with identical degree sequence but different clustering or community structure show identical spread speed and identical final reach across every process type and seed policy we test (within measurement resolution), the isomer claim fails for this domain and the three properties reduce to redundant descriptions of one quantity. This falsifier is checkable with a controlled simulation plus a contact-trace dataset.

### Q2 - Is "most strongly" a sequence or a comparison?

- Fig 12 :72: "A then B; B needs A to have happened" (sequence `→`, ordered).
- Fig 12 :89: "is it about which is larger, rather than both being present? Yes." (comparison `⋛`, ordered, threshold relation between two quantities).
- Operators table :52: "a goal is a comparison, which is why a vocabulary without it cannot state one."

"Most strongly" is `⋛`, not `→`. It compares quantities (the per-slot residual under property P versus under property Q). It has nothing to do with temporal order of spreading, which is `→` and belongs to the process dynamics (D2). Confusing the two is a type error: it would treat "which property matters most" as a question about the *sequence* of contagion rather than about the *ranking of effects*.

The question also presupposes a goal (minimise residual spread error), which is a comparison. A vocabulary that can only conjoin properties ("degree AND clustering AND community") cannot state this question at all. It can name ingredients, not rank them.

**Falsifier:** show that the three properties enter the spread prediction only through an ordered chain (P then Q then R, each enabling the next), so that `⋛` is the wrong bond and `→` is required. That would move the question from D4 to D2 and change the whole census.

### Q3 - Isomers, or functional groups?

- Fig 12 :123-124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- Fig 12 :103: "Composition is recursive, and the level decides what is irreducible."

If the atom set is restricted to nodes and edges, the three properties are variations of arrangement and the isomer reading holds. If the atom set is widened to include the process (transmission rule, recovery, seed), then degree distribution, clustering and community structure are better read as **functional groups**: substructures whose presence fixes a kind of outcome, with the qualifier (which process, which quantity) selecting the member. The group says what kind of spreading is possible; the process says which member actually spreads.

Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world." Once a network-plus-process pair is settled against the ground, it can serve as an atom for the next comparison level. So the level at which we ask "which property" decides whether the answer is an isomer claim or a functional-group claim. There is no level-free winner.

**Mode:** `specified`. The choice between readings is a level decision, not a discovery of nature's own list.
**Falsifier:** a case in which the process qualifier can be removed without changing the ranking of properties at the network level. That would make the functional-group reading idle and force the isomer reading.

### Q4 - What order does the dependency chain impose?

Fig 3 :20: "The chain is ordered by dependency, not by importance." The order for CMP-0021 is:

1. perception of the contact trace (what actually spread);
2. vocabulary for what the network affords (degree, clustering, community are terms for affording, Fig 3 :7 "it has terms for what things afford: what can be moved, opened, joined, blocked");
3. objective (speed or reach, a comparison ⋛);
4. planning an intervention (seed nodes, link additions, community barriers);
5. learning and carrying per-slot results to the next network.

The "which property" question sits at link 3. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." The world literature has instruments for links 1 and 2; link 3 (a fair comparison of properties across processes) is still the weak link. That is why the ranking is a `gap`, not because nobody has measured spreading, but because nobody has built the cross-slot comparator the question presupposes.

## CONCLUSION

The three properties are not rival atoms. Under Fig 12 they are variations of arrangement over one atom set, and the difference they make is invisible in an ingredient-only formula but decisive in behaviour: they are isomers in the figure's sense at the network level, and functional groups once the process is admitted at the next level. "Most strongly" is a comparison bond `⋛` between per-slot residuals, not a sequence. The dependency chain places this comparison at its weakest, least-instrumented link. None of this yields a winner; it explains why the question as posed cannot have one without unbundling the union first (Fig 9 :55).

Both claims carry falsifiers written in advance. If either fires, the derivation is revised and the retraction is recorded in `01_figure_grounded_audit.md`.

## ANCHOR

Verbatim figure text extracted from the canonical SVGs and read at `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; `THE_FORMULA.md`; the eight essays cited in `05_what_shape_means.md`. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order, middle link), Fig 9 (union vs partition), Fig 11 (habitat enumerated), Fig 12 (bond, isomer, functional group, arrangement, recursion, comparison vs sequence), Fig 13 (chemistry analogue, level-relative irreducibility), Operators table (⋛ as threshold relation, goal as comparison). Strains after re-census: none. The isomer and functional-group readings are level-relative by Fig 12 :104, not contradictory.
