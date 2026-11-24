# WATSON answer, EAR-0028

**Mode: `specified`, not `grounded`.** Figures are primary and decide. World sources are secondary, corroborate but never overrule, and a conflict returns the derivation to the domain census. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## QUESTION

Could changes in plankton and marine food webs substantially alter the ocean's role in the carbon cycle?

Restated as an effect: does any part of the gap between a physics-and-pumps prediction and the observed air-sea CO2 flux arise from the biological actors, and how large is that part relative to the whole sink? R is indexed per region and per pool, never aggregated (Fig 1 :19). Anchor: the measured carbon inventory and air-sea flux, named as a measurement in Fig 2 :29. The word substantially is a threshold comparison between two quantities (Fig 12 :87).

## DOMAIN CENSUS

Arity: a many-place relation among pump state, biological actors, physical forcing and observed flux, indexed by region and pool; it carries a sequence bond for the path of carbon, a comparison bond for the threshold word substantially, and a network for the food web. Symmetry: not symmetric; biology and physics are not interchangeable operands, and the comparison is a threshold, not a symmetric join. Scale: mixed layer, mesopelagic zone, deep ocean and sediments; seasonal to millennial; the transform between scales is lossy (Fig 4 :30) and level-relative (Fig 12 :104).

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Biological pump | phytoplankton, zooplankton, bacteria, viruses | POC and DOC export, transfer efficiency | sediment traps, 234Th, O2/Ar | admitted |
| D2 Solubility and carbonate pumps | CO2, seawater, carbonate ions | DIC, pCO2, alkalinity | SOCAT, GLODAP | admitted |
| D3 Circulation and ventilation | currents, mixing, upwelling | transport, residence time | floats, tracers, reanalysis | admitted |
| D4 Food-web relations | grazers, predators, mixotrophs, viruses | coupling, valence | isotopes, networks, mesocosms | admitted |
| D5 Observation and model frame | models, instruments, observers | residual | measured inventory | admitted |
| X1 Plankton as one uniform actor | a single biomass number | carbon fixed | none for "the plankton" as one thing | re-census into D1 and D4 |
| X2 Ocean as one box | a global mean sink | one aggregate flux | global mean hides the per-slot residual | absorbed into D2 and D3 |

Union, not partition: D1/D4 and D2/D3 form two compounds; the whole is a union of Q1 (the natural gradient) and Q2 (the anthropogenic sink), which are different quantities with different instruments (Fig 9 :54-57). Dependency order: perception → vocabulary → objective → planning → learn and carry (Fig 3).

## TETHER (primary, verbatim, per domain, triangulated|single-source|gap)

**D1 Biological pump, status triangulated (Fig 11 and Fig 12, habitat enumeration vs cycle sign).**

> *"The habitat is enumerated, never composed."* (Fig 11 :43)
> *"relations: pollination, predation, competition, dependency"* (Fig 11 :47)
> *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* (Fig 11 :52)
> *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* (Fig 12 :121)

Reading: the food web is enumerated, not composed; contact cascades, and the pump's sign decides whether the loop sequesters. Mode `specified`. Refuter: a plankton change whose cascade stops at the first trophic step, or a basin where the pump is a one-way chain with no return flux.

**D2 Solubility and carbonate pumps, status triangulated (Fig 2 and Fig 13, anchor rule vs physical flow).**

> *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* (Fig 2 :29)
> *"Energy and a gradient compose a flow."* (Fig 13 :76)
> *"it or a thousand. Only the actors, the currency and the anchor change."* (Fig 4 :20)

Reading: the air-sea CO2 gradient is a flow composed from energy and gradient; the measured inventory settles the question. Mode `general` for the anchor rule, `specified` for the ocean application. Refuter: a model consensus that settles the sink without a measurement.

**D3 Circulation and ventilation, status single-source for the flow reading (Fig 13), corroborated by Fig 12 :104.**

> *"Energy and a gradient compose a flow."* (Fig 13 :76)
> *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."* (Fig 12 :104)

Reading: circulation gates Q1 through nutrient supply and sets much of Q2; level-relativity is licensed by the settled-molecule rule. Mode `general` for the flow, `specified` for the ocean. Refuter: a circulation change that leaves both quantities untouched across a documented stratification shift.

**D4 Food-web relations, status triangulated (Fig 11 and Fig 12, valence vs isomer).**

> *"An actor’s valence is relative to the residual, not a property it carries."* (Fig 11 :49)
> *"No standing list of good actors survives a change of residual."* (Fig 11 :51)
> *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* (Fig 12 :117)
> *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* (Fig 12 :5)

Reading: a plankton group's effect flips with the residual, and a species inventory cannot distinguish communities whose bonds differ. Mode `specified`. Refuter: invariant valence across a change of context, or identical atoms and bonds with divergent export and no difference in habitat.

**Union and method, status triangulated (Fig 9 and Fig 3).**

> *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* (Fig 9 :57)
> *"A link with no instrument is not a link that works. It is a link nobody has looked at."* (Fig 3 :27)
> *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* (Fig 9 :60)

**Naming the decisive species or the numeric threshold, status `gap`.** No figure line governs either after a genuine re-census. Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* The missing things are a source-discriminating instrument and a threshold definition, characterized in effect terms but not held.

## WORLD (secondary, each source read; field, author/venue/year, quote, prediction, corroborates|conflicts)

- **Climate assessment.** Josep G. Canadell, Pedro M.S. Monteiro et al., IPCC AR6 WG1 Chapter 5, Cambridge University Press, 2021. Read via the chapter page, 2026-11-22. Quote: *"There is low confidence in how changes in the biological pump will influence the magnitude and direction of the ocean carbon feedback."* Prediction: the magnitude is unresolved by the available instruments. **Corroborates** the F7 `gap`; does not supply a verdict.
- **Earth system synthesis.** Laure Resplandy, Marina Lévy and Laurent Bopp, *Integrated perspective on ocean carbon cycle: Untangling facts, fluxes, and fictions*, Science Advances 12(21):eaed2480, 2026. Quote: *"human-driven changes in the biological pump have only a small effect on the air-sea CO2 flux [<0.15 GtC/year], more than an order of magnitude smaller than the anthropogenic carbon sink (+2.70 GtC/year)."* Also: *"The biological carbon pumps explain ~90% of the present-day surface-to-deep increase in carbon, while the solubility pump only explains the remaining 10%."* Prediction: two quantities with opposite weighting. **Corroborates** the unbundling F1; read literally as a single answer it **conflicts** with the cascade reading and was returned to the census (F9), not used to flip the verdict.
- **Marine ecology and observation.** Clare Ostle, Peter Landschützer, Martin Edwards et al., *Multidecadal changes in biology influence the variability of the North Atlantic carbon sink*, Environmental Research Letters 17(11):114056, 2022. Quote: *"long term variability in the CO2 sink in the North Atlantic is associated with changes in phytoplankton abundance and community structure."* Prediction: composition correlates with sink variability, entangled with mixing and temperature. **Corroborates** F2 and F3; its explicit inability to separate biology from physics corroborates the F7 gap.
- **Macroecology.** Fabio Benedetti, Meike Vogt, Urs Hofmann Elizondo et al., *Major restructuring of marine plankton assemblages under global warming*, Nature Communications 12:5226, 2021. Quote: *"nearly 40% of the phytoplankton and zooplankton assemblages are replaced by poleward shifting species."* Also: *"the biological carbon pump is weakened under higher levels of plankton diversity... Alternatively, the biological carbon pump is more efficient under species-poor communities characterized by higher proportions of larger species."* Prediction: turnover and size structure change the sign of the pump. **Corroborates** F4 and F6.
- **Molecular ecology and networks.** Yajuan Lin, Nicolas Cassar, Adrian Marchetti et al., *Specific eukaryotic plankton are good predictors of net community production in the Western Antarctic Peninsula*, Scientific Reports 7:14845, 2017. Quote: *"as few as two or three key OTUs... can explain a large majority of the spatial variability in the carbon export potential (76–92%). Moreover... ecosystems with lower export potential have more tightly coupled communities."* Prediction: a few actors and the bond structure dominate. **Corroborates** F6 and F8 (per-slot, not a global average).
- **Earth system modelling.** David I. Armstrong McKay, Sarah E. Cornell, Katherine Richardson and Johan Rockström, *Resolving ecological feedbacks on the ocean carbon sink in Earth system models*, Earth System Dynamics 12:797-818, 2021. Quote: *"interactions with carbonate chemistry cause opposite sign responses for the carbon sink in both cases: TDR leads to a smaller sink relative to default runs (-∼1.0%), whereas ECOGEM leads to a larger sink (+∼0.2%)."* Prediction: export and sink can move in opposite directions. **Corroborates** F4 and F5.
- **Data-constrained attribution.** Dustin Carroll, Dimitris Menemenlis, Stephanie Dutkiewicz et al., *Attribution of Space-Time Variability in Global-Ocean Dissolved Inorganic Carbon*, Global Biogeochemical Cycles 36(3):e2021GB007162, 2022. Quote: *"biological processes providing a small contribution of 2% (1.4 Pg C). In the upper 100 m... biological processes are the largest loss (8.6 Pg C year−1)."* Prediction: the biological weight changes with level. **Corroborates** F8 and the level-relativity of Fig 12 :104.
- **Mesocosm synthesis highlight.** L. T. Bach, P. Stange, J. Taucher et al., summarized by the Ocean Carbon and Biogeochemistry Project Office, Woods Hole Oceanographic Institution, 2019. Quote: *"degradation rates changed maximally 15-fold over the course of the study while sinking speed changed only 3-fold."* Prediction: composition controls particle fate more than sinking speed. **Corroborates** F6.
- **Framework-internal essays, used for the canonical reading only, not as world witnesses.** Isaiah N, *The Library of Babel*, Oct 02 2026; *The Recursive Self-Improvement Trap*, Nov 19 2026; *The Hard Problem is About Source*, Aug 28 2026; all Adventures in Machine Learning, read 2026-11-22. Key quote from the last: *"the answer is unreached until a better instrument exists"*. Overlap with the figures is maximal (same author), so they carry no independent corroboration weight.
- **Venue pages opened, no verdict bearing (silent on the question).** ASLO, OCB, SOLAS and MEPS homepages. These establish public opt-in routes only. Their AI and authorship policy links are practical constraints on submission, not evidence about oceans.

No world source conflicts with a figure verdict after re-census. The one apparent conflict (Resplandy 2026 versus the cascade reading) was returned to the census and resolved as a difference of quantity and level. The marine sources share a disciplinary frame and citation chain, so their agreement is one witness with several faces, not several witnesses (Fig 2 :31, :40).

## VERDICT (from the figures)

The figure-derived verdict: the ocean's carbon role is a union of conditions held by a community and its habitat; plankton changes propagate through an enumerated food web and can flip the sign of the pump, but the effect has opposite weight on the natural surface-to-deep gradient and on the contemporary anthropogenic sink. The verdict is the union kept separate per domain, never averaged. The sign is relative to the residual, the pump is a cycle, and two communities with the same species but different bonds are different substances. Mode `specified`. The world sources corroborate different parts of the mechanism; the one apparent conflict was returned to the census and did not flip the verdict. The decisive species and the numeric threshold are declared `gap`s, not hidden answers.

- **Cost if wrong:** misdirected diagnosis and a false public claim. A reader failing Q2 would be sold plankton instruments for a solubility problem, or a reader failing Q1 would be told that biology is irrelevant because it is small for Q2. In outreach terms, an expert's twenty minutes would be spent refuting a shape that was never the right shape. The cost is real but bounded and largely reversible, because the packet states the two quantities and the refuters in advance. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*
- **Undoable:** yes. No term is deleted if the claim fails; a refutation is added and the reach falls because *"something was added rather than because anything was deleted"* (Fig 6 :42-43). The shape and its six falsifiers are recorded in a provenance trail so a later reader can locate the error (Fig 10 :62-64).
- **Reversed by:** a ground reading, not agreement. A source-discriminating instrument in a basin that attributes a flux change to a named biological source would name the slot; a demonstration that a plankton change stops at the first trophic step, that valence is invariant across a change of residual, that the pump is a one-way chain, or that one lever moves both quantities identically everywhere would break the shape. A figure re-census that governs the numeric magnitude would close the gap. Until one of these fires, the verdict stands as `candidate`.

## Sources (linked titles)

- [Global Carbon and other Biogeochemical Cycles and Feedbacks, IPCC AR6 WG1 Ch5](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5)
- [Integrated perspective on ocean carbon cycle, Resplandy, Lévy and Bopp 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13189101/)
- [Multidecadal changes in biology influence the North Atlantic carbon sink, Ostle et al. 2022](https://iopscience.iop.org/article/10.1088/1748-9326/ac9ecf)
- [Major restructuring of marine plankton assemblages under global warming, Benedetti et al. 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8410869)
- [Specific eukaryotic plankton predict net community production, Lin et al. 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5665988)
- [Resolving ecological feedbacks on the ocean carbon sink, Armstrong McKay et al. 2021](https://esd.copernicus.org/articles/12/797/2021/)
- [Attribution of Space-Time Variability in Global-Ocean DIC, Carroll et al. 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9286438/)
- [The ecology of the biological carbon pump, OCB science highlight 2019](https://web.whoi.edu/ocb/the-ecology-of-the-biological-carbon-pump)
- [The Library of Babel, Isaiah N 2026](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap, Isaiah N 2026](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Hard Problem is About Source, Isaiah N 2026](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [ASLO](https://www.aslo.org/)
- [Ocean Carbon and Biogeochemistry](https://web.whoi.edu/ocb/)
- [SOLAS](https://www.solas-int.org/)
- [Marine Ecology Progress Series](https://www.int-res.com/journals/meps/)
- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
