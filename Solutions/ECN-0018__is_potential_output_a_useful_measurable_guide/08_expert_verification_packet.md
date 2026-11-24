# Expert verification packet — the Tether on potential output

**What this is:** a claim in a form a macroeconomist or economic statistician can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` — not `grounded`.** No vintage-level computation and no episode data were used. This is a shape and a decision rule, not a result.

## 1. The claim, in one paragraph

An unobserved capacity ceiling cannot occupy the anchor position in a policy rule, because an anchor must not change its answer when a frame changes its model, and published potential output estimates revise, about two-thirds of that revision coming from re-estimating potential growth. The figure-derived shape is a **decision-grade capacity estimate**: report a band with its vintage and revision history, read slack per component rather than as one aggregate, triangulate against genuinely independent slack readings, and accept a policy action only if it remains acceptable across the band. The anchor is outturn inflation and employment. The framework does not say capacity does not exist or can never be measured; it reports the slot as `unreached`, with falsifiers written in advance.

## 2. Three checkable sub-claims

### C1 — framework-internal; checkable by reading Figure 2
- **Statement:** a reading that revises when the estimating model changes cannot be the anchor; the outturn series is the anchor.
- **Source, verbatim:** Fig 2 :29-30 — *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."* Also Fig 2 :33 — *"The anchor must not update."*
- **World check:** the VoxEU study of IMF surveillance reports a median real-time output gap of -0.7 percent and a final median of -0.1 percent, with roughly two-thirds of revision from re-estimating potential growth. The FRED blog calls revisions *"frequent and unpredictable."*
- **Refuter:** a named potential output estimate invariant under all plausible estimation methods and all data vintages, with outturn inflation and employment shown to revise when the estimate revises. If that holds, the anchor assignment is wrong.

### C2 — framework-internal; checkable by reading Figure 1 and the Symbols table
- **Statement:** slack must be read per slot; a single aggregate gap is the wrong object to interrogate about where the residual lives.
- **Source, verbatim:** Fig 1 :19 — *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 — *"Aggregating across slots is how a live signal disappears into an average."* Symbols table: *"One object, region or entity being tracked. R is measured per slot, never as a single global number."*
- **What to check:** does an aggregate gap carry information about industry capacity utilisation, group unemployment, vacancies, hours and wage growth, or does the component detail do work the aggregate does not? The VoxEU study finds the gap only slightly correlated with other slack indicators.
- **Refuter:** a single aggregate gap that tracks every named sub-slot's slack with zero residual across dated episodes containing at least one adverse supply shock and one demand boom. If so, the per-slot requirement is idle.

### C3 — cross-frame; checkable by a statistician or forecasting practitioner
- **Statement:** the unobserved ceiling is at best set-identifiable, and the real-time to final move is a lossy round trip whose gap must be published. Independent observations correct a drifting model; a consensus of overlapping estimates does not.
- **Source, verbatim:** Fig 6 :27 — *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."* Fig 4 :30 — *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Fig 8 :45 — *"Two frames together reach what neither reaches alone."*
- **World check:** the *Identifiability* page states that *"two or more parametrizations are observationally equivalent"* when a model is not identifiable; the *Kalman filter* page says optimality assumes *"the model matches the real system perfectly"* and known noise covariances; the *Data assimilation* page says a forecast model *"quickly deviates from the real atmosphere"* and must be corrected by observations. These three fields share no author with the framework.
- **Refuter:** a proof that capacity is structurally unidentifiable under all admissible assumptions (which would downgrade `unreached` to `underivable` and change the instruction), or a vintage round trip with zero residue, or a demonstration that all candidate slack indicators are deterministic transforms of the same GDP series.

## 3. What is explicitly not claimed

- Not that potential output does not exist, and not that it can never be measured. *"So a search that finds nothing is never a proof of absence"* (Fig 8 :39).
- Not that any particular published estimate, NAIRU value, or dated episode verdict is correct.
- Not that the framework outperforms existing forecasting methods. It supplies a shape and a check, not a model.
- Not a claim that a consensus of prominent forecasters settles the question. Agreement from a shared evidence pool is one witness (Fig 2 :40).
- Not `grounded`. Nothing here is asserted as settled by an instrument or a dataset analysis run in this folder.
- Not a theory of everything, and no final room.

## 4. Provenance

- Method: canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, canonical figures README, `THE_FORMULA.md`, Operators and Symbols tables, all local.
- Essays: eight by Isaiah N; two fetched directly 2026-11-23 (*The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*), six carried via the exemplar's mapping and marked as such in `05_what_shape_means.md`.
- World sources: 16 public pages opened 2026-11-23, listed with author, venue, year, quote and overlap in `10_source_ledger.csv`. One CBO page returned 403 and is recorded as a failed fetch in `04_links_and_distribution.md`, not cited as read.
- This packet compiled 2026-11-23.

## 5. What would settle it

A vintage-level computation and a source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it. Here:

1. **Vintage round trip:** carry a real-time estimate to the final vintage and back for a named economy; report the residue `R_T` numerically.
2. **Source discrimination:** exhibit an observable that separates a demand-driven boom from a fall in capacity when output and inflation readings are equal. If none exists at any resolution, report `unreached`.
3. **Per-slot test:** show zero residual between the aggregate gap and the named component series across a supply shock and a demand boom.
4. **Anchor test:** show outturn inflation and employment revise when the estimate revises, which would break C1.

## 6. What an expert can check in twenty minutes

1. Read Fig 2 :29-34, Fig 1 :19 and :22, and Fig 4 :30, four short passages.
2. Check C1 against the revision record of your preferred potential output estimate: how much of the revision is data and how much is re-estimating potential growth?
3. Name one observable that would distinguish a demand boom from a capacity fall, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
