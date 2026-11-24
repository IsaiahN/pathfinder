# WATSON answer: which changes in biodiversity increase disease transmission

**Mode: `general` on the shape, `specified` on the mechanism conditions, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes
`01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`,
`07_the_tether_answer.md` and `08_expert_verification_packet.md`. By its own rule, from *The
Recursive Self-Improvement Trap* (essay, read 2026-11-23): "LLMs can quickly simulate an approximate
answer/output with the formula found in the architecture post" and "the truly testable output would
need to be derived from the real architecture or working the formula yourself." It is checked for
internal consistency against the figures. It cannot settle the ecological question it reports on.
No measurement was taken by this agent.

## QUESTION

Decide, in effect terms, what the Tether says about the claim that a universal list of
biodiversity changes can be given, with each change labelled as increasing or reducing disease
transmission, together with the conditions under which biodiversity reduces transmission. Option A:
treat "biodiversity change" as a variable carrying its own sign and produce the list. Option B:
refuse the list as the wrong slot and return the shape that any system-specific answer must have.
What each leads to: A gives a portable rule that breaks on known reversals and encourages
interventions with unenumerated cascades; B gives a constructible answer plus written refuters and
leaves the sign to a measured ground for a named pathogen, host and place.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition
or union, and order by dependency.

- **R (the residual).** A proposed community change must be mapped to a sign and size of change in
  transmission of a named pathogen to a named host. Arity: at least three operands (change, residual,
  outcome) plus context (scale, transmission mode, season, landscape). Symmetry: not a symmetric
  join, because the same change carries opposite valence for different residuals. Scale: local,
  landscape and regional slots, with the decisive link sometimes three steps out. Fig 1 :19: "The
  residual is indexed by object slot, not aggregated." Fig 9 :54: "And when the split lands on a
  union rather than a partition, unbundle before you search again." It is a union compound of
  component mechanisms, not one hard question.
- **Domain 1, the pathogen's habitat.** Actors: reservoir hosts, vectors, non-competent hosts,
  predators, competitors, people. Currency: contacts x transmissibility x host density, read as
  measured prevalence or incidence. Anchor: an instrument reading infection in the target host,
  which does not move when a frame changes its mind. Question type: a union of component mechanisms,
  enumerated rather than composed.
- **Domain 2, the management seat.** Actors: managers, conservation bodies, public-health agencies.
  Currency: interventions, introductions, habitat substitution, vaccination, culling. Anchor: the
  same ground read as disease risk after intervention. Question type: a partition of lever types by
  which contact mechanism each acts on. Introduction is available, exclusion is not.
- **Domain 3, the verification frame.** Actors: field ecologists, meta-analysts, modellers,
  philosophers of science. Currency: effect sizes, mechanistic paths, falsifiers. Anchor:
  experiment, intervention or measurement, never agreement. Question type: a union of component
  hypotheses checked separately; a net null is not a mechanism null. In this simulated run all three
  domains draw on overlapping evidence pools, so their independence is limited and is declared.
- **Order by dependency (Fig 3).** Describe the residual before choosing a frame; enumerate direct
  contact; follow the cascade outward; decompose the changed link; measure the net effect on
  infection; only then state management advice. Effort spent above the break arrives at a step that
  cannot use it.

Strain test applied: the capability line (Fig 11 :39) and the management-asymmetry lines
(Fig 11 :61-62) were first read as competing for one domain. Re-census assigned them to D1 and D2
respectively, so no figure line is strained.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local verbatim extract, read 2026-11-23).
Quotes are verbatim from the figure text.

**Per domain, with verdict status.**

- **D1, valence (triangulated: Fig 1 and Fig 11, low overlap between slot indexing and habitat
  valence).** Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."
  -> valence is a relation, not an ingredient. Fig 11 :50 "The same actor is a benefactor to one
  residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
  -> the same change can dilute one pathogen and amplify another. Fig 11 :51 "No standing list of
  good actors survives a change of residual." -> a universal list is refused. Fig 1 :22 "Aggregating
  across slots is how a live signal disappears into an average." -> the aggregate index averages the
  signal away.
- **D1, habitat and cascade (triangulated: Fig 9 and Fig 11, low overlap between describing the
  residual and reading the habitat).** Fig 11 :43 "The habitat is enumerated, never composed." and
  Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and
  outward until the cascade stops mattering." -> the list is read off the world. Fig 9 :26 "R's own
  predicates name the habitat that holds φ*" -> the residual's own predicates select the habitat.
  Fig 11 :52-53 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the
  eagles: first-order enumeration, second-order effect, and the residual that mattered was three
  steps out." -> a first-order list can miss the decisive link.
- **D2, management (triangulated: Fig 11 asymmetry and the intervention literature, low overlap
  between the framework line and practice).** Fig 11 :61-62 "The seat's power is asymmetric.
  Introduction is available; exclusion is not. You can add an actor and you cannot subtract the
  habitat, because contact is a fact about the world and does not consult you." -> subtraction is not
  a general lever. Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one
  habitat for another." -> isolation inherits actors. Fig 11 :65 "Introducing an actor for its
  cascade is ecosystem engineering, after Jones, Lawton and Shachak, 1994. Cane toads and kudzu are
  the same move with the cascade unenumerated." -> unenumerated introduction is the named failure.
- **D3, verification (triangulated: Fig 2, Fig 7 and Fig 9).** Fig 9 :60 "Use filters for the budget
  and witnesses for the verdict. Never let a filter hand you a verdict." -> a review verdict decides
  where to look, not what is true. Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror
  cannot correct you." -> agreement is not an anchor. Fig 7 :13 "agreement compounds, evidence does
  not" -> many agreeing reviews are one pool. Fig 9 :32 "you get a kind of thing, never the answer
  itself" -> the framework returns a shape.
- **D3, the specific conditions (single-source at figure level).** Fig 11 :49 governs the form of
  the conditions. The four instanced conditions (generalist vector, variable competence, horizontal
  transmission, dominant competent host) come from the Cary Institute page and are imports with
  provenance in `10_source_ledger.csv`, not figure primitives. Status: single-source, corroborated
  by an overlapping disease-ecology pool.
- **No gap.** No domain ends in `gap`, but D3's instanced conditions remain `single-source` and the
  universal-list question is refused as the wrong slot, which is a verdict rather than a silence.

## WORLD (secondary sources read)

World sources are corroboration only. Field, author / venue / year, quote, prediction and status are
given for each. Sources opened 2026-11-23.

- **Field: disease ecology, review. Author / venue / year:** Keesing et al., Nature, 2010. URL
  https://www.nature.com/articles/nature09575. Quote: "In principle, loss of biodiversity could
  either increase or decrease disease transmission." Also: naturally high biodiversity "may serve as
  a source pool for new pathogens." Prediction: a single sign for biodiversity is not available;
  corroborates D1. Overlap: high, shares authors and pool with several sources below.
- **Field: mechanistic disease ecology. Author / venue / year:** Luis et al., PNAS, 2018. URL
  https://pmc.ncbi.nlm.nih.gov/articles/PMC6077700/. Quote: "dilution and amplification are occurring
  at the same time in the same host-pathogen system; there is a component amplification effect
  (increase in transmission rate), but overall a net dilution because the effect of diversity on
  reservoir host population density is stronger." Prediction: opposing component mechanisms coexist;
  corroborates D1 and the functional-group reading. Overlap: high with Keesing pool.
- **Field: meta-analysis, public health. Author / venue / year:** Salkeld et al., Ecology Letters,
  2013. URL https://pmc.ncbi.nlm.nih.gov/articles/PMC7163739/. Quote: "the relationship between
  biodiversity and zoonotic disease risk is probably idiosyncratic." Prediction: no universal list;
  corroborates D1. Overlap: high with the same pool.
- **Field: philosophy of science. Author / venue / year:** Chen and McFarlane, Ecology and Evolution,
  2025. URL https://pmc.ncbi.nlm.nih.gov/articles/PMC12343334/. Quote: net dilution and amplification
  "are not falsifiable as proposed." Prediction: net patterns cannot license mechanism claims;
  corroborates D3. Overlap: low on method, medium on the underlying disease literature.
- **Field: economics, One Health. Author / venue / year:** Hopkins et al., Lancet Planetary Health,
  2022. URL https://pmc.ncbi.nlm.nih.gov/articles/PMC9364143/. Quote: in a complex system, forest
  cover or host biodiversity have also been associated with "unexpected amplification of Lyme disease
  risk"; context dependency is common among 46 proposed win-win solutions. Prediction: a policy
  selected for biodiversity benefit can amplify a pathogen in some contexts; corroborates D2 and D3.
  Overlap: medium, shares the Keesing and Salkeld pool but adds economics and policy criteria.
- **Field: mathematics, network theory. Author / venue / year:** Keeling and Eames, J R Soc Interface,
  2005. URL https://midasnetwork.us/papers/networks-and-epidemic-models/. Quote: "each individual has
  a finite set of contacts to whom they can pass infection; the ensemble of all such contacts forms a
  'mixing network'." Prediction: transmission depends on contact structure, not just counts;
  corroborates D1. Overlap: low, independent mathematical frame.
- **Field: animal behaviour, conservation. Author / venue / year:** Silk et al., Philosophical
  Transactions of the Royal Society B, 2019. URL https://pmc.ncbi.nlm.nih.gov/articles/PMC6710568/.
  Quote: "Non-random mixing of host individuals can impact the demographic thresholds that determine
  the amplification or attenuation of disease prevalence." Prediction: interventions that rewire
  contact structure can reverse the sign; corroborates D1 and D2. Overlap: low to medium, different
  methods and taxa.
- **Field: institutional disease ecology. Author / venue / year:** Richard S. Ostfeld, Cary Institute
  of Ecosystem Studies research project page, fetched 2026-11-23. URL
  https://www.caryinstitute.org/science/research-projects/biodiversity-community-ecology-and-dilution-effect.
  Quote: "Human-induced environmental changes, such as landscape fragmentation and predator
  suppression, can inadvertently increase disease risk by reducing biodiversity." Prediction:
  concrete conditions and cascades for dilution; corroborates D1. Overlap: high, originates the same
  hypothesis under test.

No world source conflicts with the figure verdict; the conflict rule was not triggered. Agreement
among the ecology-facing sources is one evidence pool speaking with several names (Fig 2 :40), so it
is not treated as independent corroboration. The low-overlap witnesses are Keeling and Eames
(mathematics) and Chen and McFarlane (philosophy of science).

## VERDICT (from the figures)

The universal list is refused as the wrong slot; the shape survives. Valence belongs to the relation
between a community change and a named residual, not to the change itself. For a named residual,
enumerate the habitat and the contact cascade, decompose the changed link, and let measured infection
settle the sign. Managers can add actors or substitute habitats but cannot subtract a habitat, so an
intervention with an unenumerated cascade is the named failure mode. Net patterns are filters;
component measurements are witnesses. Dilution and amplification are a functional group of component
mechanisms, and two communities with the same species list can be isomers for transmission. This is
a `general` shape with `specified` mechanism conditions, not a `grounded` ecological result, and it
is a simulated derivation checked for internal consistency against the figures.

- **cost if wrong:** if the world really contains one aggregate diversity metric that predicts
  transmission sign across pathogens, withholding a simple rule costs managers a shortcut. The
  larger cost runs the other way: a list selected for its appealing "win-win" conclusion can drive
  interventions whose cascades were never enumerated, and Fig 2 :42 prices independence in
  proportion to the cost of being wrong. That cost is avoidable by leading with the shape and its
  refuters.
- **undoable:** yes. The shape is revisable per system without withdrawing the figure verdict;
  interventions can be monitored, substituted and corrected. Nothing in the six-term substrate has
  to be retracted. A refused universal list adds a term that refuses, it does not delete anything.
- **reversed by:** a ground reading, not agreement. An aggregate diversity metric that predicts sign
  out of sample across independent pathogens would break D1; an actor with invariant valence across
  two pathogens in one habitat and scale would break Fig 11 :50-51; a habitat contact subtracted
  outright with no substitution and no ongoing work would break D2; a first-order enumeration that
  predicted as well as the full cascade would drop a step from the order claim. Until one of these
  fires, the verdict stands as `candidate`.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Impacts of biodiversity on the emergence and transmission of infectious diseases (Keesing et al., Nature, 2010)](https://www.nature.com/articles/nature09575)
- [Species diversity concurrently dilutes and amplifies transmission (Luis et al., PNAS, 2018)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6077700/)
- [A meta-analysis suggesting an idiosyncratic relationship (Salkeld et al., Ecology Letters, 2013)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7163739/)
- [Reappraisal of the Dilution and Amplification Effect Framework (Chen and McFarlane, Ecology and Evolution, 2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12343334/)
- [Evidence gaps and diversity among potential win-win solutions (Hopkins et al., Lancet Planetary Health, 2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9364143/)
- [Networks and epidemic models (Keeling and Eames, J R Soc Interface, 2005)](https://midasnetwork.us/papers/networks-and-epidemic-models/)
- [Integrating social behaviour, demography and disease dynamics in network models (Silk et al., Phil Trans R Soc B, 2019)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6710568/)
- [Biodiversity, Community Ecology, and the Dilution Effect (Cary Institute)](https://www.caryinstitute.org/science/research-projects/biodiversity-community-ecology-and-dilution-effect)
- [The Library of Babel: Locating The Book of Books (essay)](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap (essay)](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`
