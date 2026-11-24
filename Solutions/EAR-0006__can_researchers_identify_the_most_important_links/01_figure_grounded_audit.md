# Figure-grounded audit: finding the most important links without losing the rest

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and what would refute it. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." Seat Map :281 adds: "An unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict."

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap* (read 2026-11-22): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post." The testable output "would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Figure source.** All figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and cited as `Fig N :line`. Nothing is quoted from a summary. World sources were opened on 2026-11-22 and are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms before any figure line is chosen

The question is "Can researchers identify the most important links in the Earth system without oversimplifying the rest?" Stated as an effect, not as a theory:

- A researcher has a finite budget of attention, compute and instruments.
- The Earth system presents a very large field of coupled links: exchanges of energy, water, carbon, momentum and nutrients between atmosphere, ocean, cryosphere, land surface and biosphere, plus feedbacks and teleconnections that run between those exchanges.
- The researcher wants a shortlist, "the most important links", on which to spend the budget.
- The named obstacle is that selecting a shortlist normally compresses everything not selected into background. The question asks whether the shortlist can be produced without that loss.

So R is not "which links are important." R is: **how to rank link slots by contribution to a stated residual while keeping the unranked slots legible rather than averaged into a global background.** What an answer would look like, bound as an ordinary term per the Formula "Direction" section: a *per-residual, per-slot ranking with an explicit budget use and an explicit ground check*. That is the shape. The question as written carries it as a preference, not a term, so Fig 5 :62-64 applies: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term." Writing the shape down, here, is the remedy at Fig 5 :65, "make the sought-for shape an ORDINARY TERM."

**The question is a union, not a partition.** Its two halves, "rank the links" and "do not simplify the rest away", are two conditions over the same residual field, and the lever that satisfies one does not automatically satisfy the other. Seat Map :211 is direct: "And when a split lands on a union rather than a partition, unbundle before searching again." Fig 9 :5 supplies the first test: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." I unbundle before deriving. See `06_isomers_and_order.md` for the structure of the union.

**D by arity, symmetry and scale** (Fig 9 :22 names these three as the description of R):

- **Arity:** a link is a binary relation between two components. R is indexed per link slot, so the arity is many slots, not one system-level score.
- **Symmetry:** the relation is directed and ordered (a flux, a sequence, a threshold, not a symmetric conjunction). "Importance" is therefore not symmetric. Change the residual from "what drives warming" to "what buffers warming" and the ranking reverses. A single scalar that collapses the field is a symmetry imposed on an ordered object.
- **Scale:** first-order direct links, second-order links that alter other links, and cascades three steps out. A shortlist scoped to direct contact is a different object from one that includes the cascade.

**Domain census, one line per domain (actors / currency / anchor).** A domain with no nameable anchor is not yet a domain.

| domain | actors | currency | anchor | partition or union | dependency order |
|---|---|---|---|---|---|
| D1, Earth system as ground | components (atmosphere, ocean, cryosphere, land, biosphere) and relations (fluxes, gradients, networks, feedbacks, teleconnections) | flux magnitude and residual against observation | observations, reanalysis, experiments, paleo records | union of coupled components; the links are the cross-boundary relations | first, because D2 and D3 are about this |
| D2, the modeling and method frame | models, parameters, sensitivity indices, centrality measures, importance scores | description length, residual, budget | the ground via validation, never the metric itself | a filter over D1, not a new domain of the world | second, consumes D1 readings |
| D3, the verification and outreach frame | expert readers, submission venues | agreement and residual | the ground, never agreement | a checking arrangement around the shape claim | third, must not see D2 interiors |

**No anchor means no domain.** D1's anchor is a measurement. D2's anchor is the same measurement, reached through validation. D3's anchor is the same measurement again. If a proposed "domain" had only agreement as its anchor, I would not count it. That is why a list of researchers selected for likely agreement is not a domain and cannot corroborate anything.

**Order by dependency (Fig 3).** Fig 3 :20: "The chain is ordered by dependency, not by importance." The order is: settle whether there is a fact here (Fig 9 :5), bind the residual and the sought-for shape (Formula "Direction"), enumerate the habitat outward (Fig 11 :43-44), keep residuals per slot (Fig 1 :19), spend the ranking as a budget filter (Fig 9 :60), then let the ground settle (Fig 2 :45). Effort spent above a break arrives at a step that cannot use it: Fig 3 :19, "Optimising a link that already works cannot rescue one that does not."

### Strain detected at the census, named before continuing

Fig 3 :20 says chains are ordered by dependency, not importance, which appears to conflict with the question's "most important links." Re-census resolves it: Fig 3 governs the internal order of a single dependency chain; the question asks which link to fund and measure, which is a budget-allocation question governed by Fig 9 :60. Different objects, no contradiction after re-census. The figures README rule is that a reading making figures contradict one another has misidentified its domain. This strain is recorded, not smoothed over.

---

## 1. Figure census (quoted before concluding)

| figure | verbatim line used | bearing |
|---|---|---|
| Fig 1 | :19 "The residual is indexed by object slot, not aggregated." :22 "Aggregating across slots is how a live signal disappears into an average." | governs "without oversimplifying the rest" |
| Fig 2 | :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | governs what may settle the ranking |
| Fig 3 | :20 "The chain is ordered by dependency, not by importance." :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." | governs dependency versus importance and the unmeasured link |
| Fig 4 | :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | governs any condensation of the answer |
| Fig 5 | :62 "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term." :65 "make the sought-for shape an ORDINARY TERM" | governs the unbound "most important" |
| Fig 8 | :39 "So a search that finds nothing is never a proof of absence." | governs an empty shortlist |
| Fig 9 | :5 "not one hard question but several well-formed ones. Split it rather than search." :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | governs union split and filter-versus-verdict |
| Fig 10 | :42 "A verifier that can reconstruct the claim cannot verify it." :52 "Bring a characterised residual, never the source." | governs outreach order |
| Fig 11 | :43 "The habitat is enumerated, never composed." :49 "An actor’s valence is relative to the residual, not a property it carries." :52 "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." | governs what "important" means and how far to enumerate |
| Fig 12 | :117 "isomer. Same atoms, different bond, different substance." :123 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." | governs structure of the shortlist |
| Fig 13 | :3 "No system functions without any of them, none is built from the others, and everything else is a composition across the two kinds." :24 "that entities relate, and influence travels" | governs the network as a held structure, not a new primitive |
| Symbols table | :109-110 "Everything in contact with the residual: actors, conditions, relations. Enumerated, never composed." | definition of habitat |
| Seat Map | :163 "High correlation is disqualifying for a verdict and efficient for a convention." :283 "A room does not upgrade the label." | governs recipient selection |

---

## 2. Findings

### F1 - "Most important" has no referent until the residual is bound (decisive for the strong reading)

Fig 11 :49: "An actor’s valence is relative to the residual, not a property it carries." Fig 11 :51: "No standing list of good actors survives a change of residual." Fig 5 :62: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."

A link's importance is a relation between the link and R, not an attribute of the link. A carbon flux is "the most important link" only relative to a residual such as "the model cannot close the carbon budget" or "the model misses the seasonal cycle." Change R and the ranking changes. The question as posed does not name R, so it asks for a ranking of an unbound field. Seat Map :192 names this exactly: the sought-for shape is "a preference rather than a claim," and "the residual cannot carry a direction the frame never wrote down."

**World corroboration, not a figure line.** *Centrality* (Wikipedia, network science, read 2026-11-22): "The word 'importance' has a wide number of meanings, leading to many different definitions of centrality." And: "a centrality which is appropriate for one category will often 'get it wrong' when applied to a different category." *Sensitivity analysis* (Wikipedia, statistics and modeling methodology): "Different statistical tests and measures are applied to the problem and different factors rankings are obtained. The test should instead be tailored to the purpose of the analysis." Two independent fields, low overlap with each other and with the figures, make the same structural point. **Verdict: `specified`, triangulated (Fig 11 + Fig 5 + two world sources).**

**Refuter:** exhibit one link ranking that is invariant under a change of the stated residual, across at least two residuals that the Earth system community would regard as different questions. That would make importance intrinsic and break Fig 11 :49-51.

### F2 - Aggregating the rest is precisely the named failure, not a harmless simplification

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :28: "A system that averages across objects has thrown away the only signal that says where to look."

This is the direct figure answer to "without oversimplifying the rest." A global importance score that ranks the top links and folds the remainder into a single background term is exactly the average that loses the live slot. Keeping the rest legible is not an aesthetic preference; it is the condition for the residual to remain measurable at all. Note the asymmetry: the shortlist may be small, but the unlisted slots must remain individually addressable, because R is indexed per slot even when R is near zero globally. Fig 1 :13 (cited in the exemplar's domain) allows a global R near zero with one live slot as a legal state, so a quiet remainder cannot be taken as evidence that nothing is there.

**World corroboration.** *Centrality*: "a ranking only orders vertices by importance, it does not quantify the difference in importance between different levels of the ranking." And the direct hit: "the features which (correctly) identify the most important vertices in a given network/application do not necessarily generalize to the remaining vertices," followed by "For the majority of other network nodes the rankings may be meaningless." The reason given is structural: "a measure which is optimal for such vertices is sub-optimal for the remainder of the network." This is the world-language version of Fig 1 :22.

**Verdict: `specified`, triangulated (Fig 1 + network-science source).**

**Refuter:** demonstrate, on a real Earth system model, a single aggregated importance statistic that preserves every per-slot live residual and predicts where to look next as well as the per-slot field. That breaks Fig 1 :19-22.

### F3 - Direct-link enumeration misses the residual that matters

Fig 11 :52: "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Symbols table :109-110: "Everything in contact with the residual: actors, conditions, relations. Enumerated, never composed."

A shortlist built from direct links only is not a smaller version of the right shortlist. It is a different object, and it is precisely the object that missed the DDT cascade. In earth system terms the analogues are immediate: a freshwater forcing changes overturning, which changes sea ice and high-latitude warming, which changes permafrost and boreal forest; the "important link" for a given residual may be the third step, not the first.

**World corroboration from two independent fields.** *Biomagnification* (Wikipedia, ecology and ecotoxicology): "A well known example of the harmful effects of DDT biomagnification is the significant decline in North American populations of predatory birds such as bald eagles and peregrine falcons due to DDT causing eggshell thinning in the 1950s." This is the historical case Fig 11 refers to, arrived at from outside the framework. *Tipping points in the climate system* (Wikipedia, earth and climate science): "Crossing a threshold in one part of the climate system may trigger another tipping element to tip into a new state." And: "A danger is that if the tipping point in one system is crossed, this could cause a cascade of other tipping points, leading to severe, potentially catastrophic, impacts." These two sources are low overlap with each other (ecotoxicology versus climate dynamics) and neither shares the framework author or evidence pool.

**Verdict: `specified`, triangulated (Fig 11 + two world sources).**

**Refuter:** show, across a representative set of published model-intercomparison cases, that first-order enumeration reliably identifies the link that carries the residual at third order. That breaks the contact-cascade claim.

### F4 - The ranking is a budget filter, never a witness for the verdict

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." The metalaws note (`60_FIGURES_AS_METALAWS.md`, local) restates it: thresholds are filters, never the decision. Fig 9 :41: "so keep every cut ranked and reversible."

An importance score answers where to spend the next model run, observation or field campaign. It does not answer whether the link is important in truth. That answer is owed by the ground, and the ground here is an instrument, a reanalysis product, an experiment or a paleo constraint. Fig 2 :45: "Frames range against the ground. They do not negotiate with it." Treating the score as the verdict is the named output-layer failure genus at Seat Map :281: an unmeasured quantity delivered as a settled answer.

**World corroboration.** *Sensitivity analysis* explicitly separates the two jobs: "Uncertainty reduction, through the identification of model input that cause significant uncertainty in the output and should therefore be the focus of attention in order to increase robustness." That is a budget use. It also warns that "the framing of the analysis itself, its institutional context, and the motivations of its author may become a matter of great importance," which is the stake-declaration rule from a completely different field. *Geoscientific Model Development* (journal home page, read 2026-11-22) states: "citation metrics used in isolation do not describe importance, impact, or quality of a journal." Same shape in a different object: a number used to allocate attention is not a verdict about quality.

**Verdict: `specified`, triangulated (Fig 9 + Fig 2 + two world sources).**

**Refuter:** publish a case where the importance ranking, with no independent ground check, correctly predicts the observed system outcome and survives a change of residual. That would let the filter hand over a verdict and break Fig 9 :60.

### F5 - The unmeasured link is a live slot, not a harmless omission

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 3 :29-30: "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed." Fig 3 :22: "A step whose input never arrives cannot be diagnosed, only its predecessor can."

In a shortlist exercise it is tempting to treat links without observations as low importance, because they contribute nothing to the score. That is a reading taken below the break. The figures say such a link is unassessed, not negligible. Fig 8 :39: "So a search that finds nothing is never a proof of absence." A shortlist that omits a link because no instrument exists for it has reported an instrument limit as a system fact.

**World corroboration.** *Tipping points in the climate system* records exactly this dynamic in a live field: "the science of tipping points is so complex that there is great uncertainty as to how they might unfold," and the article documents a list that changed over time (ENSO and the Indian monsoon were dropped, the Labrador-Irminger gyre and mountain glaciers were added). A standing list of important links did not survive the changing evidence. That is Fig 11 :51 in earth system language.

**Verdict: `specified`, triangulated (Fig 3 + Fig 8 + world source).**

**Refuter:** show that omitting an uninstrumented link from the shortlist leaves the prediction unchanged on a ground-checked case, with the instrument gap explicitly accounted for. That breaks Fig 3 :27.

### F6 - The two halves need two different operations, so union unbundling is required

Fig 9 :5: "not one hard question but several well-formed ones. Split it rather than search." Seat Map :211: "And when a split lands on a union rather than a partition, unbundle before searching again," because "a single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

The two operations are: (a) rank for budget, and (b) preserve the per-slot field. A single lever cannot do both, because the ranking compresses and the preservation refuses to compress. Trying to solve the bundled question with one metric produces a score that looks like an answer while the second condition still binds. Seat Map :211 names the payoff: after unbundling, "the residue is finally describable." The residue here is exactly the four constraints in the short answer.

**Strain to name.** Seat Map :225: "Introduction is available; exclusion is not." "Without oversimplifying the rest" cannot mean removing links from the habitat, because exclusion is unavailable. It must mean keeping them enumerable, so that the rest is present as slots with residuals even when it is not funded. This is a narrowing of the everyday meaning of "simplify," recorded here rather than hidden.

**Verdict: `general` (structural), single-source for the union rule (Seat Map + Fig 9, low overlap between the checking-arrangement frame and the leave/arrive frame, so triangulated at the framework level).**

**Refuter:** produce a single scalar that simultaneously ranks links for budget and preserves the full per-slot residual field without loss, and show on a model that both conditions hold. That unbundles nothing and breaks the union reading.

### F7 - "Network" and "gradient" are held structures, so no new primitive is owed

Fig 13 :3: "No system functions without any of them, none is built from the others, and everything else is a composition across the two kinds." Fig 13 :24 lists the structure "network": "that entities relate, and influence travels." Fig 13 :22 names "gradient": "a difference that can be spent."

The Earth system's links are already expressible in the six-term set as networks and gradients over space, time and energy. Nothing in the answer requires a seventh term, and the frameworks' own rule is that a generating set must not contain what its members produce (Fig 13 :43-44). This finding blocks a tempting overreach: declaring "the link" to be a new primitive of the Earth system. It is a composition, not a member of the minimum set.

**Verdict: `general`, single-source (Fig 13), with the physics-facing check still unmeasured.**

**Refuter:** exhibit an Earth system link that cannot be written as a composition over the six terms without adding a seventh structure. That breaks the closure claim at Fig 13 :3.

### F8 - A final canonical list is forbidden; the honest stop is a shape with a lineage

Fig 7 :6 names "the limit: no last room." Fig 13 :134: "Unreachable is a verdict here, not a silence." Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 8 :39: "So a search that finds nothing is never a proof of absence."

The strong reading of the question asks for a list that is simultaneously complete and final. That is a terminal room, which the framework rules out definitionally. The deliverable is instead a shape (per-residual, per-slot, cascaded, filtered, ground-checked) with the lineage recorded so the stop is checkable. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Any compression of this answer into a one-line rule carries a round-trip gap R_T that must be measured, not assumed zero. See `11_audit.md` §Round trip gap.

**Verdict: `general`, triangulated (Fig 7 + Fig 13 + Fig 9, three low-overlap figure contexts).**

**Refuter:** exhibit a link-ranking procedure that is final in the sense that no further ground check could change it. That would be a last room and break Fig 7 :6.

### F9 - Independence is the parameter, and this simulated run has none

Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool." Seat Map :163: "High correlation is disqualifying for a verdict and efficient for a convention." Seat Map :139: "The outside frame does not know what the reports describe."

In this run the primary seat, the second seat in `11_audit.md`, and most of the framework-facing sources draw on one evidence pool. Their agreement is one pool talking. The world sources that are genuinely independent of the framework author are the four Wikipedia articles and the GMD journal page, and even those are only corroboration for the shape, never a ground reading of the Earth system. No researcher was contacted. No measurement was taken. **Verdict: `general`, triangulated across Fig 2 and Seat Map, and explicitly a non-claim of corroboration for the simulated seats.**

**Refuter:** a ground-visible researcher who checks the shape claim against their own data and returns a correction on shape. That would be a real outside frame, and it is exactly what the venues in `03_public_contact_points.csv` are for.

### F10 - What actually survives (defensible residue with modes attached)

| claim | mode | figure / source |
|---|---|---|
| Importance is relative to a stated residual, not intrinsic to a link | `specified` | Fig 11 :49-51, F1, triangulated |
| A global average loses the live slot | `specified` | Fig 1 :19-22, F2, triangulated |
| First-order enumeration misses cascades | `specified` | Fig 11 :52-54, F3, triangulated |
| Ranking is a budget filter, not a verdict | `specified` | Fig 9 :60, F4, triangulated |
| Uninstrumented links are unassessed, not unimportant | `specified` | Fig 3 :27, F5, triangulated |
| The two halves are a union and need two operations | `general` | Fig 9 :5, F6 |
| Links are compositions over held structures, not a new primitive | `general` | Fig 13 :3, :24, F7 |
| No final canonical list; deliver a shape and a lineage | `general` | Fig 7 :6, Fig 13 :134, F8 |
| This document is a simulation, not a ground reading | `general` | RSI essay, F9 |

The stronger claim, "there is a fixed set of most important links that a sufficiently clever ranking will find," does not survive F1, F3 or F8. The weaker claim, "a researcher can rank links without oversimplifying the rest, provided the four constraints are met," survives all ten findings with its mode attached.

---

## 3. Pre-registered refuter (written before the conclusion)

Required before any outreach: Seat Map :287, "a falsifier written before the run is a design instrument, not only an honesty device."

The shape claim is refuted if any of the following holds:

1. **Invariance of importance.** A link ranking is demonstrated to be invariant under a change of stated residual across two residuals the field treats as different questions (breaks F1 and Fig 11 :49-51).
2. **Lossless aggregation.** A single aggregated importance statistic is shown to preserve every per-slot live residual and to predict the next measurement location as well as the per-slot field (breaks F2 and Fig 1 :19-22).
3. **First-order sufficiency.** Published model-intercomparison cases show that direct-link enumeration reliably finds the residual carried three steps out (breaks F3 and Fig 11 :52-54).
4. **Filter as verdict.** An importance ranking, with no separate ground check, correctly predicts an observed system outcome and survives a change of residual (breaks F4 and Fig 9 :60).
5. **A final list.** A ranking procedure is shown to be final, in that no further ground check could change it (breaks F8 and Fig 7 :6).

If any fires, the shape claim is withdrawn. Until one is run, no part of this may be labelled `grounded`. Note that a failure to find a refuter is not corroboration: Fig 8 :39, "So a search that finds nothing is never a proof of absence."

---

## 4. Recommendation

1. Restate every importance question with an explicit residual before ranking anything (F1). This is the Formula "Direction" discipline: bind the sought-for shape as an ordinary term.
2. Enumerate the habitat outward to the point where the cascade stops mattering, and record the enumeration rather than composing a shortlist from intuition (F3, Symbols table :109-110).
3. Publish the per-slot residual field alongside any shortlist. Never report only the aggregate (F2).
4. Label the ranking as a budget filter and keep every cut ranked and reversible (F4, Fig 9 :41).
5. Treat links without instruments as unassessed slots and say so explicitly (F5).
6. Offer the shape and the refuter to the public venues in `03_public_contact_points.csv`, ask what would refute it, and record the verdict before showing any framework material (F9, Fig 10 :52).
7. Measure the round-trip gap R_T rather than treating the formula as identical to the figures (F8, Fig 4 :30, `11_audit.md`).

---

## 5. Canonical usage check (figures README, metalaws note, seat map)

Three sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` - the figures "outrank everything else in the repo," and "the quotes are the authority, not this summary." On strain: "a reading that makes one contradict another has misidentified its domain, not found a flaw." On the deliverable: the framework says what a missing thing would have to look like, a shape rather than a name, then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` - "the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." Its Fig 9 entry is the same filter/verdict law used in F4. No human ruling was requested on any question the figures decide.
- `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` - :211 union unbundling, :225 introduction versus exclusion, :283 room versus anchor, :287 pre-registered falsifier, :281 mode as verdict. These are rules the framework imposes on itself, not external facts about Earth science.

### Retraction and confirmation log

Earlier readings during this derivation, kept visible:

| earlier reading | status after the canonical check |
|---|---|
| "Fig 3 forbids ranking links by importance" | **Retracted and narrowed.** Fig 3 governs the internal dependency order of a chain. Ranking for measurement budget is a Fig 9 :60 filter. Different objects, so no strain after re-census. |
| "Without oversimplifying means no link may be left off a shortlist" | **Retracted.** Seat Map :225 makes exclusion unavailable on the habitat; what is preserved is enumerability of unranked slots, not their funding. Narrowed in F6. |
| "A shortlist is just a smaller version of the full field" | **Retracted.** Fig 11 :52 and the cascade sources make it a categorically different object (F3). The word "smaller" was carrying an unexamined assumption. |
| "Centrality rankings are misleading, so ranking is illegitimate" | **Narrowed.** The world source says rankings are good at ordering the most important vertices and bad at generalizing to the rest. This supports F2, it does not forbid F4's budget use. |
| "Sensitivity analysis gives the important links" | **Narrowed.** It gives different rankings under different measures and purposes. It corroborates F1, it does not supply the verdict. |
| "The modeler's importance metric is the ground" | **Refused.** Fig 2 :29 anchor, Fig 9 :60 filter. A metric that moves when the framing moves is not an anchor. |
| No-direct-bond style strain between Fig 3 and the question | **Not strained after re-census**, see the strain note in §0 and F6. |
| Contact cascade (Fig 11) | **Canonically confirmed.** The seat map's habitat section carries the same DDT sentence in its own words: "Scoping to direct contact is how a second-order effect three steps out goes unseen." |
| Filter-versus-verdict (Fig 9 :60) | **Canonically confirmed.** The metalaws note repeats it as a design rule. |
| Simulated status | **Confirmed, not retracted.** The RSI essay's own warning applies to this document. |

### Seven-question recursive derivation (summary)

1. **Is there a fact here?** Yes for each bound residual, but the bundled question is a union, so split it first (Fig 9 :5).
2. **What is the shape?** A per-residual, per-slot, cascaded, filtered, ground-checked shortlist. Bound as an ordinary term (Fig 5 :65).
3. **Is importance intrinsic?** No. Valence is relative to R (Fig 11 :49). Corroborated by centrality and sensitivity analysis.
4. **Does aggregation preserve the signal?** No (Fig 1 :22). Corroborated by the centrality generalization limit.
5. **Where does the wall move?** Not by adding a new "link" primitive (Fig 13 :3). By importing a ground reading from a frame whose closure differs (Fig 6, Fig 8), which is what the contact venues are for.
6. **Is the term settled?** No. Fig 2 :45, the ground settles it. Status `candidate`.
7. **Can this frame check its own direction?** No. The sought-for shape was a preference until written down above (Fig 5 :62-64, Seat Map :192). That is why the pre-registered refuter was written before this conclusion.

### Updated verdict

The shape survives all ten findings: importance is residual-relative, per-slot, cascade-aware, a budget filter rather than a verdict, and owed to the ground. What does not survive is the strong reading, a canonical final list, and any claim that this simulated derivation has settled which links are important in the Earth system. Strains after re-census: **one live budget strain** (whether a continuous residual field is finitely enumerable at a fixed budget), named in `11_audit.md`, not hidden here.
