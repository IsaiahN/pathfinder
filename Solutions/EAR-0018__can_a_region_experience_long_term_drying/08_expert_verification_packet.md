# Expert verification packet - EAR-0018

**What this is:** a claim in a form a regional-climate researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the structural claim, `general` on the shape, not `grounded`.** No regional trend is asserted as measured by this run. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

The question "can a region dry while global rainfall rises?" bundles two objects: a global mean over many regional slots and one named slot. The framework indexes residuals by object slot and never aggregates them, so the two trends are different quantities and their joint sign is free. The mean keeps the total water and drops the arrangement; two worlds with the same total but different spatial arrangements are structurally isomers, with the difference invisible in the aggregate and decisive for the region. The cross-scale transform from mean to slot is lossy, so the mean cannot be used as a downscaled prediction. What the mean cannot supply must come from a different frame, namely the atmospheric energy budget for the mean and the moisture and circulation budgets for the slot. The framework gives the shape and the refuters, not the regional number.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 1 and 12

- **Statement:** the residual for a region is a different quantity from the global mean, and a positive aggregate residual coexisting with a negative slot residual is a legal state.
- **Source, verbatim:** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13 "a global R near zero with one live slot residual is a legal state". Fig 12 :94 "The arrangement is the substance."
- **Refuter:** show that the mean is invertible to its slots, so the aggregate trend determines every slot trend, or show a framework rule forbidding a positive aggregate residual alongside a negative slot residual.

### C2 - structure; checkable by reading Figure 12 and any precipitation map

- **Statement:** two precipitation fields with the same global total but different spatial arrangements are isomers under Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." One can have a rising mean and a drying region; another with the identical mean need not.
- **What to check:** is the global mean a many-to-one map that loses the arrangement? If yes, the isomer reading follows without any climate physics. The physical question of whether the second world is actually realised is separate.
- **Refuter:** exhibit two fields with the same total that always give the same trend in every slot, or show that the mean preserves the arrangement of its operands.

### C3 - physics-facing; checkable by a climate researcher against the literature

- **Statement:** the mean and the slot are governed by different constraints, so the mean cannot stand in for the slot. Fig 4 :27 "The transform between scales loses information, and that is the point." Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
- **What to check:** does the atmospheric energy budget constrain global mean precipitation to roughly 1-3% per K while moisture transport and circulation govern regional changes of either sign below a scale of a few thousand kilometres? This is what IPCC AR6 WG1 Ch8, Held and Soden (2006), Dagan and Stier (2020) and Dagan, Stier and Watson-Parris (2019) report.
- **Refuter:** a downscaling operator that recovers each region from the global mean with zero round-trip gap, or evidence that a single condition rather than a union accounts for all persistent regional drying trends.

## 3. What is explicitly not claimed

- Not that a named region is drying, by how much, or over which decades. The figures return a shape, not a name or a number.
- Not that global rainfall is not increasing. The mean can be rising; the claim is about what the mean cannot tell a region.
- Not that "wet gets wetter, dry gets drier" is a law. AR6 WG2 Ch4 assesses it as too simplistic.
- Not that the six-term substrate is a climate model. It is a structural analogue only.
- Not that a panel of agreeing researchers corroborates the claim. Agreement chosen for receptiveness is the disqualifying correlation (Fig 2 :40).
- Not `grounded`. Nothing here was measured by this run.

## 4. Provenance

- Residual and shape claim: bound in `README.md` section 2, refuter written in `01_figure_grounded_audit.md` section 4 before the WORLD search.
- Figure text: verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`, extracted this session.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`; mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- World sources: IPCC AR6 WG1 Ch8 (Douville et al., 2021), IPCC AR6 WG2 Ch4 (Caretta et al., 2022), Held and Soden (2006, Journal of Climate), Dagan and Stier (2020, npj Climate and Atmospheric Science), Dagan, Stier and Watson-Parris (2019, GRL), Wills et al. (2016 overview), Simpson's Paradox (Stanford Encyclopedia of Philosophy, 2021, rev. 2026). Each was opened on 2026-11-22 and is recorded with a quote in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 5. What would settle it

For the structural claim, the figure text is the anchor and C1/C2 are checkable by reading. For the physical claim, the ground is:

1. Per-slot precipitation trends from gauges, satellites and reanalysis for a stated region and period, compared with the global trend over the same period.
2. A moisture-budget decomposition separating the thermodynamic term (about 7% per K in water vapour) from the dynamic term (circulation and transport), plus the energy-budget constraint on the mean (about 1-3% per K).
3. A scale test: is the region below the roughly 3000-4000 km closure scale where divergence terms still operate?

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :13, :19, :22 and Fig 12 :94, :117, five short passages.
2. Draw two precipitation maps with the same global total, one with a drying region and one without. Confirm the means are equal and the regional outcomes differ.
3. Check C3 against your own knowledge: is the global-mean constraint really an energy constraint while the regional constraint is a moisture and circulation constraint?
4. Name one instrument or analysis that would distinguish a thermodynamic from a dynamic cause in the region you know best, or say why none is available.
5. Send the refutation, if there is one. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.
