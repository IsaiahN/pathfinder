# Expert verification packet - the Tether on redundancy under uncertainty

**What this is:** a claim in a form a supply-chain resilience or reliability engineer can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` - not `grounded`.** No disruption settlement is claimed. This is a shape and a route, not a number.

## 1. The claim, in one paragraph

The gap between predicted supply continuity and an actual disruption is indexed per slot (supplier, component, route, region, tier), never averaged. Therefore "how much redundancy is worth paying for" is not one number: it is a union of conditions and the ground, a future disruption, has not returned a reading. The shape is: redundancy buys independence, not headcount, and two sources sharing a port, sub-tier supplier, infrastructure or maintenance regime are one frame wearing two names; size that independence to the cost of being wrong, not to a point estimate of disruption probability, because a clean history is a search that found nothing and is not proof of a low probability; hold probability and cost as two readings, not one expected-loss product; map dependencies outward; and stage the spend as ranked, reversible cuts. The result is a checkable shape with refuters written in advance, held as a candidate until the ground settles it.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 1, 2 and 8

- **Statement:** the residual is per slot, and "redundant" sources sharing evidence are one frame, not two. Independence is counted by differing closures, not by vendor count.
- **Source, verbatim:** Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 - *"Aggregating across slots is how a live signal disappears into an average."* Fig 2 :31-32 - *"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."* Fig 8 :49 - *"Two frames that overlap almost completely are one frame wearing two names."*
- **Refuter:** show two sources with a documented shared cause failing independently in a real event, or show an identical duplicate inside one closure expanding the reachable set. Either breaks the independence reading.

### C2 - decision rule; checkable against Fig 2, Fig 8 and Fig 12

- **Statement:** buy independence in proportion to the cost of being wrong, not to a point estimate of p; probability and cost are two readings that do not add into one expected-loss verdict.
- **Source, verbatim:** Fig 2 :42 - *"Buy independence in proportion to the cost of being wrong."* Fig 8 :39 - *"So a search that finds nothing is never a proof of absence."* Fig 12 :125 - *"A composition costs in two currencies, and they do not add."* Fig 12 :130 - *"Summing them into one figure is the error this names, not the fix for it."*
- **Refuter:** a figure re-census showing that "cost of being wrong" means p times C in one currency, or that the two currencies are addable for this decision. That would admit the expected-loss form the claim refuses.
- **What to check:** is the decision-rule reading faithful to Fig 2 :42, and does Fig 12 actually forbid summing the two currencies? A reliability engineer may reasonably dispute whether the two currencies map to description-cost and action-cost; that mapping is the weak link and is named, not hidden.

### C3 - structural; checkable by reading Figures 9 and 11

- **Statement:** the spend is a union of four conditions, so it must be unbundled and staged as ranked, reversible cuts; habitat must be enumerated outward because the material failure is often several tiers out; resilience is maintained work.
- **Source, verbatim:** Fig 9 :55 - *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :41 - *"so keep every cut ranked and reversible"*. Fig 11 :43 - *"The habitat is enumerated, never composed."* Fig 11 :52-53 - *"contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* Fig 11 :64 - *"Which is why a managed ecosystem is permanent work rather than a solved state."*
- **Refuter:** show one lever clearing all four conditions with a residue that is smaller but not categorically different, or a case where the material disruption is always and only at direct contact with no cascade.

## 3. What is explicitly not claimed

- Not an optimal number: no weeks of inventory, no supplier count, no premium percentage.
- Not that the framework names which supplier or buffer level wins. That is a binding from the supply frame, and needs a provenance gate and shadow test.
- Not that expected value is useless as a budget filter. It is refused as a verdict-generating rule only (Fig 9 :60).
- Not that a clean history implies low risk (Fig 8 :39).
- Not grounded. No disruption has settled the claim.
- Not a claim that the framework is the only true account of supply chain resilience.

## 4. Provenance

- Primary text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim figure extract, accessed 2026-11-22. All `Fig N :line` citations above were checked against it.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, accessed 2026-11-22.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, accessed 2026-11-22.
- Essays by Isaiah N, 2026, cited in `05_what_shape_means.md`.
- Secondary corroboration: Chopra and Sodhi (MIT SMR, 2014); NASA/RAMS (2025); Biggs et al. (Ecosphere, 2020); Tversky and Kahneman (Science, 1974); DNB Working Paper 487 (2016); Hollnagel (2009) and Woods (2006). Full URLs, quotes and overlap in `10_source_ledger.csv`. All read 2026-11-22.
- This packet compiled 2026-11-22.

## 5. What would settle it

A real disruption or a controlled stress test that returns a ground reading, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it. Here:

1. Have two "independent" sources ever failed together from a shared cause? (refuter 1 in `01`)
2. Does a source from a demonstrably differing closure change the outcome when a disruption hits? (refuter 2)
3. Is a clean history a sufficient statistic for p in this class of systems? (refuter 5)
4. Can the two currencies be added under the figure's own rule? (refuter 4)

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :22; Fig 2 :31-32, :42; Fig 8 :39, :49; Fig 12 :125, :130; Fig 9 :55; Fig 11 :43, :64. Ten short passages.
2. Check C1 against one real supply network: do the two "redundant" suppliers in your map share a port, a sub-tier source, or an infrastructure base? If yes, the figure counts them as one.
3. Check C2: does your organization's risk model multiply p by C into one number? If yes, name what the figure would say was lost in that sum.
4. Name one instrument that would discriminate a live slot from a pooled average before a disruption - or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
