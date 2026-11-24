# Expert verification packet - the Tether on hub stability and fragility

**What this is:** a claim in a form a network researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` - not `grounded`.** No measurement on a particular network is claimed here. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

The valence of a high-degree hub is relative to the residual, not a property it carries. The same node is a benefactor to the question "does the giant component survive random loss?" and a malfactor to the question "does it survive targeted removal of the highest-degree nodes?". Random failure and targeted failure are separate conditions, so they are split rather than averaged, and an anchor must be named before either can be assessed. Degree ordering and adjacency are independent frames, so high degree is not the same claim as being critical to global connectivity. The famous scale-free result and the engineering critique that disputes it are isomers over the same degree sequence: same atoms, different arrangement, different measured outcome. The framework returns that shape, the falsifiers written in advance and the instruments that would close it. It does not return the sign for a given network.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figure 11

- **Statement:** valence is relative to the residual. The same actor has opposite signs for different residuals.
- **Source, verbatim:** fig 11 :49, *"An actor's valence is relative to the residual, not a property it carries."* fig 11 :50, *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."* fig 11 :51, *"No standing list of good actors survives a change of residual."*
- **Refuter:** exhibit a network and one instrument where the sign of the hub effect is the same for random and targeted removal at the same measured outcome, with degree rank and connectivity criticality measured separately; or show that the sign is carried by degree alone independent of perturbation.

### C2 - union and anchor; checkable by reading Figures 9 and 2

- **Statement:** the question is a union of conditions to be split, and "stable" has no anchor until a measurement is named.
- **Source, verbatim:** fig 9 :4-5, *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* fig 9 :55, *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* fig 2 :29, *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
- **Refuter:** an anchor-independent definition of stability on which two independent instruments always agree, with evidence that the instruments draw on different pools; or a single scalar predicting the sign across all threat models with no interaction term.

### C3 - empirical-facing; checkable against the two papers

- **Statement:** the 2000 scale-free result and the 2005 engineering critique are isomers over the same degree sequence, not a contradiction to be settled by prestige. Same degree sequence, high-degree nodes at the core in one and at the periphery in the other, different attack tolerance.
- **Source, verbatim:** fig 12 :117, *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Also fig 8 :51, *"Only the record of where each came from separates them"*, on convergent derivation versus adopted import.
- **What to check:** read Doyle et al 2005, Figures 1 and 3 and Table 1, and confirm that SFnet and HOTnet share a scaling degree sequence but place high-degree vertices differently and differ in worst-case deletion tolerance. Read Albert et al 2000 and confirm its ensemble has the hubs at the core. If both hold, the isomer reading is faithful.
- **Refuter:** a degree-only invariant that predicts the worst-case deletion outcome for both graphs without using edge placement; or evidence that the two graphs do not in fact share the atom set claimed.

## 3. What is explicitly not claimed

- Not that hubs are always stabilising or always the Achilles' heel.
- Not that scale-free degree distributions are universal (Broido and Clauset 2019).
- Not that connectivity is derivable from degree ordering (fig 13 :42: *"Ordering does not produce adjacency"*).
- Not that the 2000 result is refuted or that the 2005 critique is correct by authority. Both are arrangements with provenance; the ground decides which applies to a given network.
- Not that a seventh primitive is needed. The isomer is an arrangement of held atoms (fig 13 :116).
- Not `grounded`. Nothing here was settled by measurement.

## 4. Provenance

- Figure text extracted verbatim from the canonical local extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-22. All `Fig N :line` citations point to it.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, read 2026-11-22.
- World sources, all fetched and read 2026-11-22:
  - Albert, Jeong and Barabasi, "Error and attack tolerance of complex networks", Nature 406, 378-382 (2000), https://www.nature.com/articles/35019019
  - Callaway, Newman, Strogatz and Watts, "Network robustness and fragility: Percolation on random graphs", Phys Rev Lett 85, 5468-5471 (2000), https://arxiv.org/abs/cond-mat/0007300
  - Pastor-Satorras and Vespignani, "Epidemic spreading in scale-free networks", Phys Rev Lett 86, 3200 (2001), https://arxiv.org/abs/cond-mat/0010317
  - Doyle et al, "The robust yet fragile nature of the Internet", PNAS 102, 14497-14502 (2005), https://pmc.ncbi.nlm.nih.gov/articles/PMC1240072/
  - Broido and Clauset, "Scale-free networks are rare", Nature Communications 10, 1017 (2019), https://www.nature.com/articles/s41467-019-08746-5
  - May, "Will a large complex system be stable?", Nature 238, 413-414 (1972), https://www.nature.com/articles/238413a0
  - Artime et al, "Robustness and resilience of complex networks", Nature Reviews Physics 6, 114-131 (2024), https://www.nature.com/articles/s42254-023-00676-y
- This packet compiled 2026-11-22. Full row-level provenance in `10_source_ledger.csv`.

## 5. What would settle it

A discriminating measurement, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it. Here:

1. At a named anchor, which arrangement descriptor (degree, betweenness, k-core, spatial position) predicts the targeted-removal outcome out of sample?
2. For the same average degree, report giant-component fraction (or cascade size) after uniform removal and after degree-ranked removal, for both the core-hub and periphery-hub arrangements. The two curves are the result.
3. With a harmful quantity propagating, does the epidemic threshold vanish when the high-degree nodes are the connectors (Pastor-Satorras and Vespignani 2001)?

## 6. What an expert can check in twenty minutes

1. Read fig 11 :49-51, fig 9 :4-5, fig 2 :29 and fig 12 :117. Four short passages.
2. Check C2 against your own practice: when someone says a network is "stable", is an anchor usually named before the claim?
3. Check C3 against Doyle et al 2005 Figures 1 and 3. Are the two graphs genuinely same-degree-sequence isomers with opposite worst-case outcomes?
4. Name one instrument that would discriminate degree rank from core position at your anchor, or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
