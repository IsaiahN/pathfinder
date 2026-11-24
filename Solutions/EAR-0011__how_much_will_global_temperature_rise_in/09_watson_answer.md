# WATSON answer: EAR-0011 climate sensitivity

**Mode: `specified` on the shape; the number is world-sourced and reported, not derived here.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the claim it reports on. No measurement was taken here.

## QUESTION

Decide, in effect terms, what the Tether says about the question: how much will global temperature rise in response to a given increase in greenhouse gases? Option A: treat it as one hard question whose answer is a single number the framework should produce. Option B: treat it as a union of slots, forcing conversion, feedback response, time scale and forcing identity, and report the shape any ground-settled number must satisfy. What each leads to: A searches a bundle, hides live slot residuals in an average and makes the framework answer a question it does not govern; B unbundles, keeps the residual per slot, triangulates low-overlap frames against an anchor that does not update, and hands the number to the instruments that actually measure it.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** Predicted warming minus observed warming, indexed by slot. Arity: three or more (forcing, response, agent identity and placement). Symmetry: forcing to response is ordered, not symmetric; the Operators table defines `→` as "A then B; B needs A to have happened." Scale: first order inside a time scale, second order across feedbacks and assessment, cross scale from instrumental decades to paleoclimate millennia.
- **Domain 1, radiative forcing.** Actors: CO2, CH4, N2O, aerosols, solar irradiance. Currency: W m-2. Anchor: laboratory spectroscopy and top-of-atmosphere flux, which do not move when a model changes its prior. Partition question.
- **Domain 2, feedback response.** Actors: clouds, ice and snow albedo, water vapour and lapse rate, ocean heat uptake, land, carbon cycle. Currency: feedback parameter W m-2 K-1 and temperature K. Anchor: instrumental record, satellite flux, paleoclimate proxies, process experiments. Union of feedback slots.
- **Domain 3, model and assessment frame.** Actors: GCMs, ESMs, assessors, likelihood language. Currency: ensemble spread and assessed ranges. Anchor: the ground is observed warming, not model agreement. Abramowitz et al. 2019 and Knutti et al. 2013 document shared code and evaluation data. Frame, not anchor.
- **Domain 4, forcing identity.** Actors: forcing agents, geographic and vertical placement. Currency: efficacy ratio. Anchor: single-forcing experiments and pattern-effect observations (Hansen et al. 2005). Isomer or functional-group question.
- **Domain 5, time and state.** Actors: transient, equilibrium and Earth-system sensitivity; glacial and warm states. Currency: years to millennia, K. Anchor: long simulations and paleoclimate proxies. Ordered chain.
- **Order by dependency.** Measure and name the slots first (Fig 3 :4-7); unbundle the union before searching (Fig 9 :54); refuse a wrong term before minting a new one (Formula step 2); settle the transient molecule before composing equilibrium over it (Fig 12 :104).

Strain test applied: the Fig 13 six-term set governs which compositions are legal at a level, not the magnitude of a climate response. An earlier attempt to derive the number from it was retracted in `01` §6. Different objects, so no strain after re-census.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs. Verdicts are per domain and are never averaged.

- **Domain 1 (triangulated, low overlap between spectroscopy and flux instruments).** Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> spectroscopy and TOA flux are anchors because they do not update on model opinions; the forcing slot is well anchored.
- **Domain 2 (triangulated across three lines, with overlaps declared).** Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." -> process understanding, historical warming and paleoclimate are three witnesses only to the extent they do not share errors. Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> the lines must each range against the ground, not negotiate a consensus.
- **Domain 3 (single-source, low independence).** Fig 7 :13 "agreement compounds, evidence does not." -> a correlated GCM ensemble is one pool resampled; its spread is not an independent evidence line. Fig 8 :32 "no search, however long, adds an atom" -> more models at the same reach do not import a new atom.
- **Domain 4 (single-source, instrument-dependent).** Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> agents with the same forcing magnitude but different placement and efficacy are isomers over a shared forcing atom set; the universal scalar is the functional group, Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- **Whole residual (triangulated across Fig 9 and the canonical README).** Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." -> the question is a union and must be split. Fig 9 :32 "you get a kind of thing, never the answer itself" -> the framework returns a shape, not the number.
- **Per-slot metric (triangulated across Fig 1 and the multi-agent essay).** Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> keep forcing, feedback and time-scale residuals separate. Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> the global mean is a headline, not a diagnosis.
- **Reachability (single-source, structural).** Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." -> existing sensors already register, so the residual is unreached rather than unreachable.
- **Round trip (single-source, structural).** Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> compressing the coupled system into one number has a nonzero gap R_T.
- **Numeric value from the figures alone: gap, plainly.** No figure line determines a temperature value. Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> this is a boundary, not a failure, and the shape search did find its target.

## WORLD (secondary sources read)

World sources corroborate only; they never overrule the figures. Fields and overlaps are declared.

- **Field, climate assessment.** IPCC (2021), IPCC AR6 WG1 Summary for Policymakers, https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers. Quote: "The AR6 assessed best estimate is 3°C with a likely range of 2.5°C to 4°C (high confidence)". Prediction: a constrained range per unit forcing from multiple lines of evidence, not model spread alone. Corroborates the shape and supplies the reported number. Overlap: institutional assessment drawing on the same climate literature as the other world sources.
- **Field, climate sensitivity synthesis.** Sherwood et al. (2020), Reviews of Geophysics 58, e2019RG000678, https://pmc.ncbi.nlm.nih.gov/articles/PMC7524012/. Quote: "the three lines of evidence agree and are judged to be largely independent." Prediction: three separate lines triangulate to a 66 percent range of 2.6 K to 3.9 K, robust within 2.3 K to 4.5 K. Corroborates the independence requirement in Domain 2. Overlap: several authors are climate modellers, so partial overlap with Domain 3 is declared.
- **Field, climate model methodology.** Abramowitz et al. (2019), Earth System Dynamics 10, 91 to 105, https://esd.copernicus.org/articles/10/91/2019/esd-10-91-2019.html. Quote: "share literature, ideas for representations of processes, parameterisations, evaluation data sets and even sections of model code." Prediction: multi-model agreement is not independent corroboration. Corroborates Domain 3. Overlap: climate-science field, independent of the framework.
- **Field, climate model genealogy.** Knutti et al. (2013), Geophysical Research Letters 40, 5197 to 5203, https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/grl.50256. Quote: "neither independent of each other nor independent of the earlier generation." Prediction: ensemble spread overstates effective sample size. Corroborates Domain 3. Overlap: same research community as Abramowitz et al.; direct fetch returned 403 and the text was read via the search extract, so it is not counted as a second independent witness.
- **Field, paleoclimate.** Tierney et al. (2020), Science 370, eaay3701, https://par.nsf.gov/biblio/10262156-past-climates-inform-our-future. Quote: "Past climates provide the only opportunity to observe how the Earth system responds to high carbon dioxide". Prediction: a separate ground line for the equilibrium and Earth-system slots. Corroborates Domain 5. Overlap: climate-science field, independent of the framework.
- **Field, forcing physics.** Hansen et al. (2005), Journal of Geophysical Research 110, D18104, https://www.giss.nasa.gov/pubs/abs/ha01110v.html. Quote: "the efficacy is the global temperature response per unit forcing relative to the response to CO2 forcing." Prediction: agent identity changes the response per Watt. Corroborates Domain 4. Overlap: climate-science field, independent of the framework.
- **Field, statistics (low overlap with the framework and with climate science).** Faes et al. (2009), The American Statistician 63(4), 389 to 399, https://researchonline.lshtm.ac.uk/id/eprint/4483. Quote: "the sample size one would need in an independent sample to equal the amount of information in the actual correlated sample." Prediction: correlated observations carry less information than their count suggests. Corroborates Fig 2 :44 and Domain 3. Overlap: distinct statistical field.
- **Field, metatheory and canonical usage.** Isaiah N (2026), figures README, local `FRAMEWORK/reference/FIGURES_README_canonical.md`. Quote: "what a missing thing would have to look like (a shape, not a name)". Prediction: a shape and an honest stop. Corroborates the figure verdict by construction. Overlap: high, same author as the figures, so this is one evidence pool and carries little independent weight.
- **Field, human cognition and source discrimination.** Isaiah N (2026), "The Hard Problem is About Source", https://adventuresinml.substack.com/p/the-hard-problem-is-about-source. Quote: "If several paths create the same behavior, then behavior is a projection with lossy information". Prediction: a global mean does not name its forcing-feedback source. Corroborates Domain 2. Overlap: high, framework author.
- **Field, validation.** Isaiah N (2026), "The Recursive Self-Improvement Trap", https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap. Quote: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Prediction: this derivation cannot validate itself. Corroborates its simulated status. Overlap: high, framework author.

No world source conflicts with the figure-derived shape; the conflict rule was not triggered. The climate sources and the statistics source are independent of the framework, so they are the substantive corroboration. The essays share the framework's evidence pool and are reported as such. Abramowitz et al. and Knutti et al. share a research pool with each other and are counted as one witness for the model-dependence claim.

## VERDICT (from the figures)

The shape survives; no number is derived. The question is a union and must be unbundled. The residual is per forcing agent, per feedback, per time scale and per state. The anchor is measurement, not model agreement. Independence must be bought and declared, because correlated models compound agreement without adding evidence. Forcing identity makes agents isomers over a shared forcing atom set, and the universal scalar is their functional group. The residual is unreached, not unreachable. Figures give the shape; the world gives the number. This is a `specified`, ungrounded-by-this-run result. The strongest single point for an outside checker is C1 in `08_expert_verification_packet.md`: split the bundle before searching for a number.

- **cost if wrong:** bounded and locatable. The packet states its mode, lists five refuters before the conclusion and records the lineage, so an error is findable. The real cost is spending the independence of outside readers by sending a recording, a single headline number, instead of a generator, the per-slot residual and its refuter. Fig 2 :42 "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape claim and its refuter.
- **undoable:** yes. The number is world-sourced and can be superseded by a better assessment without touching the shape. The isomer claim has a written refusal path: if efficacy collapses to 1, the term is refused and the record keeps both the claim and its refusal. No primitive has to be withdrawn.
- **reversed by:** a ground reading, not agreement. A source-discriminating instrument that separates forcing-feedback compositions would settle the slot residuals; an efficacy measurement collapsing to 1 would fire the C3 refuter; a demonstrated hidden common source for the three evidence lines would downgrade the triangulation to single-source; a verbatim figure line yielding a number would falsify the boundary claim. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Figures text with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [IPCC AR6 WG1 Summary for Policymakers](https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers)
- [Sherwood et al. 2020, An Assessment of Earth's Climate Sensitivity Using Multiple Lines of Evidence](https://pmc.ncbi.nlm.nih.gov/articles/PMC7524012/)
- [Abramowitz et al. 2019, Model dependence in multi-model climate ensembles](https://esd.copernicus.org/articles/10/91/2019/esd-10-91-2019.html)
- [Knutti et al. 2013, Climate model genealogy](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/grl.50256)
- [Tierney et al. 2020, Past climates inform our future](https://par.nsf.gov/biblio/10262156-past-climates-inform-our-future)
- [Hansen et al. 2005, Efficacy of climate forcings](https://www.giss.nasa.gov/pubs/abs/ha01110v.html)
- [Faes et al. 2009, The Effective Sample Size](https://researchonline.lshtm.ac.uk/id/eprint/4483)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [The Library of Babel: Locating the Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
