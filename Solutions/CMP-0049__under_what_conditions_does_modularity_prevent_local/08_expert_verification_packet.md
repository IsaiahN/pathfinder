# Expert verification packet: the Tether on modularity and cascades

**What this is:** a claim in a form a network-science or resilience researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the conditions, `general` on the structural shape, not `grounded`.** No measurement on a named network is claimed. Simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

The question "under what conditions does modularity prevent local failures from becoming systemic cascades?" is a union of two conditions, not one lever with a stronger setting. The conditions are structure (measured independence between modules on the channel that carries the failure) and dynamics (the propagation class: overload redistribution, exposure/threshold, or a hidden common cause). A module boundary is a filter with a direction, not a wall, so containment is always relative to the class it passes or blocks. The residual must be read per slot, because a global score hides the one live module. The framework returns that shape and four refuters written in advance; it does not return a numeric modularity threshold.

## 2. Three checkable sub-claims

### C1 — framework-internal; checkable by reading Figures 4 and 1

- **Statement:** a boundary between modules is a directional filter, and containment is measured per slot, not as a global average.
- **Source, verbatim:** Fig 4 :21, "The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction." Fig 1 :19, "The residual is indexed by object slot, not aggregated." Fig 1 :13, "a global R near zero with one live slot residual is a legal state."
- **What to check:** is "filter, not wall" consistent with your own cascade model? Does your containment metric preserve the per-component signal, or does it average it away?
- **Refuter:** exhibit a boundary that passes the failure class it should filter, or one that blocks every class including the head start needed for repair; or show a global score that predicts containment while per-slot residuals stay flat.

### C2 — network-science facing; checkable against the opened literature

- **Statement:** modularity is an independence claim on a specific channel, and a hidden shared source defeats it. The two reported results (compartmentation helps trophic networks; strong local communities hurt spatial connectivity robustness) are different cells of the union, not a contradiction.
- **Source, verbatim:** Fig 2 :31, "Independence, between two frames, is how little they draw on the same evidence." Fig 8 :49, "Two frames that overlap almost completely are one frame wearing two names." Fig 2, collapse 2, "common cause" and "hidden shared source".
- **What to check:** Thébault and Fontaine (2010) report "the stability of trophic networks is enhanced in compartmented and weakly connected architectures"; Mou and Hayashi (2025) report "the robustness is weakened by strong local communities in spatial networks." Are those two outcomes governed by different propagation classes in your view? Is a common-source co-failure indistinguishable from a cascade if you only measure the topology?
- **Refuter:** exhibit two modules with measured near-zero overlap on the failure channel that nevertheless fail together from an internal cause in one of them; or show that a single structural lever predicts containment across both interaction types without any dynamics term.

### C3 — framework-internal derivation; checkable by reading Figures 9 and 6

- **Statement:** the question is a union compound that must be unbundled, and a numeric Q threshold cannot be derived here.
- **Source, verbatim:** Fig 9 :54, "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57, "a case in two conditions is not a harder case of either." Fig 9 :32, "you get a kind of thing, never the answer itself." Fig 6 :29, "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."
- **What to check:** does the opened supply-chain study support the instrument limit? Zelbi, Ialongo and Thurner (2026) reduced systemic risk "by 16-50% without reducing the production output of firms" but report "We find no particular topological measure that explains systemic risk mitigation." Wikipedia's modularity entry adds that "modularity suffers a resolution limit and, therefore, it is unable to detect small communities."
- **Refuter:** produce a ground measurement that assigns a unique modularity threshold for containment across systems with low overlap of failure mode and substrate. Until one exists, any number is a binding, not a derivation.

## 3. What is explicitly not claimed

- Not that modularity always prevents cascades, and not that more modularity is always better.
- Not a threshold of Q, an optimal coupling value or a named partition algorithm.
- Not that topology alone predicts containment; hidden shared sources are a named failure class.
- Not a derivation of one network-science result from the other, and no new primitive.
- Not `grounded`. Nothing here is asserted as settled by measurement.
- Not that the framework's six-term set is nature's own list. It is a visible guess at compression axes.

## 4. Provenance

- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session. All `Fig N :line` citations refer to that extract.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md` (local copy of the figures README, branch `general-agent`).
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Eight essays by Isaiah N, 2026-08 to 2026-11; four opened verbatim this session, four read in the exemplar pass on 2026-11-22. Overlap declared in `10_source_ledger.csv`.
- Opened network-science sources: Buldyrev et al. 2010 (Nature), Albert, Jeong and Barabási 2000 (Nature), Newman 2006 (PNAS/PMC), Thébault and Fontaine 2010 (Science, abstract via Europe PMC), Mou and Hayashi 2025 (PLOS One), Zelbi et al. 2026 (Scientific Reports), plus the Wikipedia entries on modularity and cascading failure. Each has a URL, accessed date, author, venue, year and quote in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 5. What would settle it

A per-slot, channel-discriminating measurement on a named network, not a further argument. Concretely:

1. a per-slot residual trace through a cascade, showing which slot goes live and when;
2. a channel discriminator separating overload redistribution from exposure/threshold propagation from a common source;
3. a boundary test recording which failure classes a partition passes and blocks;
4. an overlap measure between modules on the specific channel, not on the generic graph.

The falsifiers are in `01_figure_grounded_audit.md` section 4 and the four numbered items in `02_outreach_email.md`.

## 6. What an expert can check in twenty minutes

1. Read Fig 4 :21, Fig 1 :19, Fig 2 :31 and Fig 9 :54. Four short passages.
2. Check C2 against your own work: are the two reported outcomes governed by different propagation classes?
3. Name one instrument that would discriminate the propagation class in a real cascade, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
