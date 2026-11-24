# Expert verification packet — community boundaries and contagion

**What this is:** a claim in a form a contagion or network scientist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` — not `grounded`.** No outbreak measurement is claimed. This is a shape and a route, not a result. It is a simulated derivation checked for internal consistency against a figure set, not a ground reading.

## 1. The claim, in one paragraph

A community boundary is a directional filter, not a wall. Its sign depends on what crosses: a live case is a head start that seeds a new local outbreak, a signal is a recording that changes belief without carrying infection. Three conditions decide the regime. First, the order of contagion: one exposure suffices or several are required. Second, the crossing rule: bridges pass live cases or pass only signals. Third, the overlap of the closures on either side. When bridges pass few live cases and the local susceptible/infectious difference is spent before a bridge is used, the boundary reduces spread by denying contact with a differing closure. When bridges pass live cases, overlapping members act as catalysts and within-group reinfection as a cycle, so the cut protects a reservoir and re-exports it. These are two conditions crossed with two orders, so no single modularity value decides the sign. The framework gives this shape; it does not give the crossover number.

## 2. Three checkable sub-claims

### C1 — framework-internal; checkable by reading Figures 4, 6 and 8

- **Statement:** a boundary is a filter with a direction, and no spread can leave a closure without contact with a differing closure.
- **Source, verbatim:** Fig 4 :21 — "The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction." Fig 4 :22 — "Only methods cross up. Only head starts come down." Fig 6 :23 — "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 :32 — "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."
- **What to check:** does any mechanism in your field let a signal alone, with no live case crossing, start a new chain of transmission? If not, the head-start/recording distinction survives as an effect description.
- **Refuter:** a first-order contagion reaching global prevalence with zero cross-boundary transmission events; or a signal with no live case crossing reliably starting a new chain.

### C2 — epidemiology-facing; checkable against outbreak data

- **Statement:** dense internal contact can sustain a reservoir, with boundary members as catalysts and reinfection as a cycle; isolation substitutes a habitat rather than removing contact.
- **Source, verbatim:** Fig 12 :119 — "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." Fig 12 :121 — "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Fig 11 :66 — "Isolation is not removal of the habitat. It is substitution of one habitat for another." Fig 11 :52-53 — "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."
- **What to check:** the Contreras et al. household study (arXiv:2602.15447) reports that larger households "boost transmission by acquiring external infections more frequently and subsequently transmitting them back into the community" and that "mandatory interventions primarily modulate contagion between households rather than within them." Is that a pump in the sense above? The Qian and Asllani study (arXiv:2504.05653) reports that "highly connected groups accelerate and amplify outbreaks, while less connected ones dampen spread." Does that fit the catalyst/cycle reading?
- **Refuter:** a controlled experiment showing dense internal contact does not sustain prevalence below the pairwise threshold with bridge rate held fixed.

### C3 — regime structure; checkable by a pre-registered cross-dataset test

- **Statement:** the regime split is a union of conditions, not a point on one modularity scale. Fig 9 :57 — "a case in two conditions is not a harder case of either." Fig 9 :54 — "And when the split lands on a union rather than a partition, unbundle before you search again."
- **What to check:** the Wikipedia complex contagion page, attributing to Centola and Macy (2007), states that weak ties and small worlds are good for simple contagions but "for complex contagions, weak ties and small worlds can slow diffusion." Does the sign of the boundary effect in your datasets track that simple/complex split? A global attack rate will not show it: Fig 1 :19 — "The residual is indexed by object slot, not aggregated."
- **Refuter:** the simple/complex distinction does not predict the sign across a pre-registered dataset set; or one scalar predicts the sign monotonically with no interaction term across all four cells.

## 3. What is explicitly not claimed

- Not a critical modularity value, bridge density or reproduction-number threshold. That number is a declared gap (F8 in `01_figure_grounded_audit.md`).
- Not that modularity always slows contagion or that weak ties always help. Those are single-cell claims.
- Not that closing a boundary removes contact. It substitutes a habitat.
- Not that a one-pass chain model can represent a reservoir. A chain cannot close by construction.
- Not that the framework derived the mesoscale or household results. They are provenanced imports, not primitives.
- Not `grounded`. Nothing here was settled by an outbreak measurement.

## 4. Provenance

- Residual and regime split: `01_figure_grounded_audit.md`, derived this session from the effect statement at complexity science.txt line 37.
- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim, cited `Fig N :line`. Local canonical copy read 2026-11-22.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`, read 2026-11-22.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, read 2026-11-22.
- Essays: four of the canonical eight opened this session, listed in `05_what_shape_means.md`; the other four are listed but not cited.
- World sources: eleven opened on 2026-11-22, each with author, venue, year and a verbatim quote in `10_source_ledger.csv`. Failed fetches are recorded in `04_links_and_distribution.md`.
- This packet compiled 2026-11-22. Simulated derivation, not a ground reading.

## 5. What would settle it

A cross-boundary transmission instrument, not a further argument. From the essays: an instrument that reads green "cannot comment on the source", and the colour case was resolved "not by argument, but by the arrival of a better instrument." Here:

1. **Crossing-type test:** signals only versus live cases, holding structure fixed.
2. **Reservoir test:** persistence below the pairwise threshold with bridge rate fixed.
3. **Regime test:** simple versus complex sign prediction across pre-registered datasets.
4. **Detection precondition:** if communities are not detectable above chance, no crossover can be measured.

## 6. What an expert can check in twenty minutes

1. Read Fig 4 :21-22, Fig 12 :119 and :121, Fig 11 :66, and Fig 1 :19 — five short passages.
2. Check C2 against one outbreak you know: were boundary nodes spent or regenerated, and did a group re-seed others after a gap?
3. Name one measurement that would distinguish a head start from a recording in your data, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
