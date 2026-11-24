# Expert verification packet - EAR-0099

**What this is:** a claim in a form an earth-system monitoring researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the substantive claims, `general` on the structural shape. Not `grounded`.** No warning was tested against a held-out case where action changed the outcome. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

The question "what indicators should be monitored early enough for practical action" is not one metric. It is a conjunction of eight conditions. Residual is indexed per component and region, never averaged, because a global mean can hide a live slot. A reading needs a directed component, not just an ordering, because only a difference that can be spent is a warning. Indicators are ranged against a ground measurement and compared to a decision boundary with lead time, because "early enough" is a threshold relation. The channel to the ground must be instrumented for staleness, dropped transients, saturation and pooling, because those failures look like working channels from inside. The habitat is enumerated outward to the cascade and re-enumerated when the residual changes. Independence comes from different evidence, bought in proportion to the cost of being wrong. The least instrumented link is the leap from a reading to what would count as progress. The specific variables and thresholds are not supplied; they are bindings from world frames and a declared `gap` at figure level.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 1 and 13

- **Statement:** per-slot indexing is required, and a directed component is required. A global average and a level-only reading are both insufficient for a warning.
- **Source, verbatim:** Fig 1 :19 - **"The residual is indexed by object slot, not aggregated."** Fig 1 :22 - **"Aggregating across slots is how a live signal disappears into an average."** Fig 13 :46-47 - **"What makes a gradient a gradient is that it can be spent, and neither an ordering nor a span of space has directedness."**
- **What to check:** is the per-slot rule being applied to the right slot in your system (component, region, tipping element, time)? And does your current indicator carry a directed component, or only a level?
- **Refuter:** a global aggregate that gives equal or better warning at equal false-alarm cost; or a level-only indicator with no directed component and no decision boundary that gives equal lead time. If either holds, that condition drops out.

### C2 - instrumentation-facing; checkable by an observing-system engineer

- **Statement:** the channel to the ground is a separate object from the ground, and its failure modes must be instrumented. Four named modes: stale readings, dropped transients, saturated metrics, pooled populations.
- **Source, verbatim:** Fig 10 :24 - **"the ground does not decay, the channel does"**; Fig 10 :25-26 - **"stale percepts, dropped transients, saturated metrics, pooled readings"**; Fig 10 :28 - **"you have lost touch"**. Seat Map :285 - *"Every instrument points inward unless one is built to point out. Wiring, consumption and behaviour are all read from inside; whether the record that was supposed to reach the outside arrived is read by nothing."*
- **What to check:** for one real monitoring chain, can you name a live instrument for each of the four failure modes? If the only check is that the data stream is still arriving, the channel is uninstrumented and will report green while failing.
- **Refuter:** channel diagnostics that stay green while warnings fail systematically across regimes. If that is common, the channel model here is wrong.

### C3 - framework-internal and habitat-facing; checkable by reading Figures 11 and 2

- **Statement:** the indicator list is enumerated from contact and extended to the cascade; independence is a property of evidence sources, not of indicator count.
- **Source, verbatim:** Fig 11 :44 - **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** Fig 11 :52-53 - **"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** Fig 2 :31 - **"Independence, between two frames, is how little they draw on the same evidence."** Fig 2 :42 - **"Buy independence in proportion to the cost of being wrong."**
- **What to check:** does the panel include at least one indicator more than two steps out from the direct forcing? Do the proposed "independent" indicators share an underlying retrieval, reanalysis or archive?
- **Refuter:** a fixed panel with no cascade enumeration that detects third-order effects reliably; or two frames sharing one evidence source shown to add corroboration weight. If either holds, the corresponding condition falls.

## 3. What is explicitly not claimed

- Not a final indicator list, no numeric thresholds, no claim to have named the right variable. Fig 9 :32 - *"you get a kind of thing, never the answer itself."*
- Not that variance, lag-1 autocorrelation or skewness ARE the figure's Gradient. They are world-frame bindings with their own provenance and their own validity conditions.
- Not that a single global index is enough, and not that more indices automatically help.
- Not that earth-system interdependence (Stockholm Resilience Centre 2026) means observing frames may overlap. Different objects.
- Not `grounded`. Nothing here was settled by a held-out action test.
- Not a claim that the framework is the only valid account of monitoring.

## 4. Provenance

- Residual, domain census, findings F1 to F10, pre-registered refuter and retraction log: `01_figure_grounded_audit.md`.
- Canonical reading of shape: `05_what_shape_means.md` and `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Supporting derivation (union, order, isomers, cascade): `06_isomers_and_order.md`.
- Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, accessed 2026-11-22; cited as `Fig N :line`.
- World sources actually opened 2026-11-22: Scheffer et al., Nature 461, 2009; Ditlevsen and Ditlevsen, Nature Communications 14, 2023; Boettiger and Hastings, Proc R Soc B 279, 2012; Litt et al., Neuron 30, 2001; Stockholm Resilience Centre planetary-boundaries page; Earth System Dynamics journal page. Full provenance in `10_source_ledger.csv`.
- Compiled 2026-11-22.

## 5. What would settle it

1. **Directed-component test:** does a level-only indicator give equal lead time? If yes, condition 2 falls.
2. **Channel test:** do green channel diagnostics coexist with systematic warning failure? If yes, condition 5 is wrong.
3. **Cascade test:** does a first-order panel surface a third-order residual? If yes, condition 6 is not necessary.
4. **Independence test:** does a shared evidence source add real corroboration weight? If yes, condition 7 falls.
5. **Action test, decisive:** in a held-out transition, does acting at the warning time change the outcome relative to baseline? That is what pays.

A source-discriminating instrument is also needed. *The Hard Problem is About Source*: an instrument *"cannot comment on the source"* and *"The answer is unreached until a better instrument exists."* Rising variance may be critical slowing down or an artifact.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19 and :22, Fig 13 :46-47, Fig 10 :24-28, Fig 11 :44 and :52-53, Fig 2 :31 and :42 - eight short passages.
2. On one monitoring chain you know, name a live instrument for each of the four channel failure modes. If you cannot, report which one is unmonitored.
3. Name one "independent" indicator pair in your field that actually shares an underlying retrieval. If the pair collapses to one witness, report it.
4. Name one instrument that would distinguish critical slowing down from an observation-density artifact in your variable, or say why none is available.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.
