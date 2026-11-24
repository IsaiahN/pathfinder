# Expert verification packet - the Tether on shock containment and cascades

**What this is:** a claim in a form a network-science or resilience researcher can check. Mode, derivation, and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` - not `grounded`.** No network measurement is claimed. This is a shape and a set of conditions, not a result.

## 1. The claim, in one paragraph

A local shock is a per-slot residual, not a global average. It stays contained when that residual trends down to zero as the disturbance is composed outward through contact; it cascades when the residual persists and does not trend down, so that more slots go live. The Tether figures make this a union of four separable conditions with a product gate: (1) topology and outward contact, (2) the boundary as a directional filter rather than a wall, (3) transmission versus common cause, and (4) the sign of the feedback loop. All four must pass for containment; one failing condition opens the cascade. No universal numeric threshold is given by the figures; the number belongs to the ground of a specific network.

## 2. Three checkable sub-claims

### C1 - The shrinking-test criterion (framework-internal plus physics-facing)

- **Statement:** containment is the case where the per-slot residual trends down to zero across composition steps; cascade is the case where it persists and does not trend down. The residual is indexed per slot, never aggregated.
- **Source, verbatim:** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 13 :31-32 "a remainder compounding through a chain that amplifies is chaos." Fig 5 :59-60 "a term whose residual PERSISTS AND DOES NOT TREND DOWN." Fig 12 :121 "The sign of the loop decides whether it closes, and a chain cannot close by construction."
- **What to check:** in a cascade model you know, does the per-node (per-slot) deviation from equilibrium decay or grow step by step, and does a self-sustaining cascade require a closing loop with positive sign? Scheffer et al. 2009 (Nature) describe the matching ground effect: "as the eigenvalue approaches zero, the impacts of shocks do not decay, and their accumulating effect increases the variance of the state variable."
- **Refuter:** a network in which every per-slot residual trends monotonically down yet a global cascade still occurs; or a self-sustaining cascade in a provably acyclic graph with no surviving-use component.

### C2 - Correlation is not contagion (the discrimination check)

- **Statement:** two nodes failing together do not thereby transmit a shock. Whether they draw on the same evidence (common source) is a separate, necessary measurement. Counting a shared-pool co-failure as two cascaded nodes is double-counting one witness.
- **Source, verbatim:** Fig 2 :19-21 "they never talk, and still agree" and "so the agreement is the pool talking, not two frames confirming each other." Fig 2 :31-32 "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool."
- **What to check:** in a system you know, can you separate transmission from common-cause correlation with two low-overlap instruments? Caccioli, Barucca and Kobayashi 2017 (J Comput Soc Sci) state the finance version: "a fall in the price of an asset will simultaneously affect many banks holding the same (or a correlated) asset. Such a simultaneous shock to multiple banks has a potential to accelerate the traditional contagion process through interbank exposures."
- **Refuter:** two nodes with a proven shared source and no path between them, shown by intervention to be transmitting the shock to each other. Then shared-source detection is not sufficient.

### C3 - Union with a product gate, not one lever (framework-internal and economics-facing)

- **Statement:** the four conditions are a union of overlapping conditions, not a partition; they share a functional group (threshold relations) and gate as a product. No single lever separates contained from cascaded across all four.
- **Source, verbatim:** Fig 9 :55-56 "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Fig 5 :41 "Any one of them at zero stops the mint entirely." Fig 12 :87 "a threshold relation between two quantities." Fig 9 :32 "you get a kind of thing, never the answer itself."
- **What to check:** does a known system show the sign flip Acemoglu, Ozdaglar and Tahbaz-Salehi 2015 (AER) report: "as long as the magnitude of negative shocks affecting financial institutions are sufficiently small, a more densely connected financial network ... enhances financial stability. However, beyond a certain point, dense interconnections serve as a mechanism for the propagation of shocks"? Does modularity help for one process and hurt for another (Pastor-Satorras et al. 2015 versus Nadini et al. 2018)? Both are the union/product signature.
- **Refuter:** one scalar that reliably separates contained from cascaded across all four conditions; or a case where three conditions hold and the fourth fails, yet the shock is still contained across repeated trials.

## 3. What is explicitly not claimed

- Not a universal critical threshold, R0 value, or degree cutoff. The figures give a shape, not a number (Fig 9 :32).
- Not that modularity always contains. Its sign depends on the process; it is a filter with a direction (Fig 4 :21), an analogue with a named strain, not a wall.
- Not that co-failure proves contagion. Common cause is a named collapse (Fig 2 :6).
- Not that a system-level average is a verdict. Averaging hides the live slot (Fig 1 :22).
- Not `grounded`. Nothing here was settled by an instrument.

## 4. Provenance

- Primary: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, Figures 1 to 13, Operators table, Symbols table; `FRAMEWORK/figures/THE_FORMULA.md`; `FRAMEWORK/reference/FIGURES_README_canonical.md`. All local, read 2026-11-22.
- Canonical usage rule: `figures/README.md`, branch `general-agent`, public on GitHub, read 2026-11-22.
- Eight essays by Isaiah N, 2026-08 to 2026-11, cited in `05_what_shape_means.md`, all fetched 2026-11-22.
- World sources: eight, each opened 2026-11-22, listed with author, venue, year, quote, and overlap in `10_source_ledger.csv` and `04_links_and_distribution.md`.
- This packet compiled 2026-11-22.

## 5. What would settle it

1. **Per-slot trend test:** measure R_s step by step. Decay to zero, or persistence/growth?
2. **Two-instrument discrimination:** transmission versus common source, kept independent (Fig 8 :45 "Two frames together reach what neither reaches alone.").
3. **Cycle-sign test:** is there a closing loop with positive sign, and a component that survives its own use (Fig 12 :119 "catalyst. A part that survives its own use.")?
4. **Product-gate test:** three conditions hold, one fails. Contained across repeated trials, or not?
5. **Standing falsifiers:** the five in `01` §4 and `07` §4.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, Fig 5 :59-60, Fig 9 :55-56, Fig 12 :121 and Fig 2 :19-21. Five short passages.
2. Check C1 against a cascade model you know: do per-slot residuals decay or grow, and does a loop close?
3. Check C2: in your field, is co-failure routinely mistaken for contagion, and could your instruments discriminate them?
4. Name one instrument that would settle the per-slot trend test, or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
