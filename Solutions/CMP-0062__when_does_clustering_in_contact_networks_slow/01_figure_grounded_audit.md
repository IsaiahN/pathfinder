# Figure-grounded audit: CMP-0062, clustering in contact networks

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** The essay *The Recursive Self-Improvement Trap*, opened 2026-11-22, says: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself." It also says: "The catch is that the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the epidemiological question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary corroboration only and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Gamma(b,a) minus o'| per slot s (Formula step 1; Symbols table, R). Here:

- **b** is what a modeller or a control policy believes about a contact pattern: the assumed degree distribution, transitivity, contact duration, immunity.
- **a** is the intervention or the observation: rewire, trace, vaccinate, measure contacts.
- **Gamma(b,a)** is what the model predicts: growth rate, final size, reproduction number, endemic prevalence, disease lifetime.
- **o'** is what the ground returns: observed incidence, serology, contact-tracing records, fade-out or persistence.
- **s** is the cluster, household, social group, or community. R is indexed per cluster and per time, never aggregated into a single national curve.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon is not "does clustering matter" but "which quantity is being asked about, and which regime is the pathogen in." The same structural fact (a triangle closing a path) is reported in the world literature as slowing an SIR outbreak and as lowering the threshold for an SIS-like disease. If a frame answers with one sign for both, it has a residual.

State the residual as: *why does a closed local contact structure sometimes reduce the reach of an infection and sometimes keep it alive, and what would discriminate the two cases before the outcome is known?* This is an effect description. It names no mechanism as cause. "Redundant contacts", "reservoir", and "community" are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a **separator**, a set of conditions, each with its own anchor, that assigns a case to the slow-down regime or the reservoir regime, plus an instrument that discriminates the arrangement behind a measured coefficient. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so refuter R2 and R5 in section 4 can fire on it.

**Anchor test.** Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." The same line names candidates: "A measurement, an experiment, a counter, a market, a patient outcome." For this question the anchors are observed case counts, serological surveys, proximity-logger or diary contact records, and observed fade-out versus endemicity. A model's own R0 estimate, an expert's intuition, and a fitted clustering coefficient are instruments at best: they move when pushed (Fig 2 :30, "you push on it, it is not an anchor"). Viable anchor: the infection outcome recorded independently of the model that predicted it.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** Clustering is a three-place relation: two edges sharing a node plus the closing edge, that is, a triangle (Welch 2011 defines it exactly this way). Transmission is an ordered sequence (→, "A then B; B needs A to have happened", Fig 12 :72). Persistence is a threshold comparison (⋛, "a threshold relation between two quantities", Operators table :48; "a goal is a comparison", Fig 12 :112). R is therefore not a symmetric relation between two scalar quantities; it is a typed composition of a relation, a sequence and a comparison.
- **Symmetry.** The contact edge may be undirected, but the transmission event is not: ordering matters (Fig 12 :73, "swap them. Does it become a different thing? Yes."). A recovered node is not a susceptible node; reinfection changes the bond type. "Slow" and "persistent" are threshold-relative, not absolute quantities (Fig 12 :87, :89).
- **Scale.** Three scales are in view: the node and edge (micro), the triangle, clique, household or community (meso), and the whole contact network (macro). The membrane between them is "Not a wall: a filter with a direction" (Fig 4 :21), with "Only methods cross up. Only head starts come down." (Fig 4 :22). The transform between scales is lossy, so the round-trip gap R_T must be measured rather than assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Contact structure** | individuals, edges, triangles, cliques, communities; the "network" structure that "that entities relate, and influence travels" (Fig 13 :24) | connectivity, transitivity, arrangement, contact duration | yes: measured contact pattern from diaries, proximity loggers, contact tracing | admitted |
| **D2 Transmission dynamics** | susceptible, infected, recovered/exposed hosts; pathogen | infection events, growth rate, final size, peak timing | yes: observed incidence and serology | admitted |
| **D3 Persistence and threshold** | pathogen, host population, reinfection or waning immunity, reservoir group | reproduction number against a threshold, disease lifetime, endemic state | yes: observed fade-out or endemicity | admitted |
| **D4 Measurement and model frame** | clustering coefficient, moment-closure terms, generating functions, model assumptions | predictions, residuals, biases | yes: the ground (observed outcomes), not agreement among models | admitted |
| **X1 "Clustering" as a free-floating scalar cause with one universal sign** | the coefficient itself | a number | **no** anchor independent of the outcome; the same number is reported with opposite effects | not a domain yet, refused |
| **X2 "Group size" as sole cause** | the count of individuals in a group | headcount | measurable, but already inside D1 as a habitat condition (Fig 11 :46, "conditions: light, water, temperature, season, terrain") | absorbed into D1, not separate |

X1 fails the anchor test: the scalar does not settle anything by itself. This is a structural exclusion, not a claim that transitivity is irrelevant. X2 is absorbed, not discarded: Sah et al. 2018 report that spread is "driven primarily by the social organization of interactions in a group and not its size", which is the figure's habitat/contact distinction, not a refutation of group size as a measured condition.

### 1.3 Partition or union

D2 and D3 overlap in the same network but carry different currencies (flow versus persistence) and are settled by different readings of the ground (incidence curve versus long-run fade-out). D1 and D4 overlap because the measured coefficient is itself a model output, not the raw contact pattern. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) local depletion of susceptible slots, the slow-down condition, anchored in early growth and final size; (C2) reopening of the path by reinfection or continued susceptibility, the reservoir condition, anchored in disease lifetime and endemicity. A network failing only C1 and a network failing only C2 are not different degrees of one failure. They need different instruments. The essay *The Library of Babel* states the same stop condition: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?"

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: (1) perception, can the contact pattern be measured at all, and at which scale; (2) vocabulary, do we have terms for arrangement (triangle, clique, community) and not only for a scalar coefficient; (3) objective, can we say which quantity is being decided, speed or persistence; (4) planning, choose SIR-like or SIS-like model and the ground reading; (5) learn and carry, name what paid and carry it to the next pathogen. The middle link, having terms for what the contact pattern affords and saying what would count as progress, is the one with no instrument in much of the literature: Welch 2011 reports that even a complete transmission tree "provides little information about clustering that is not present in the epidemic curve." Fig 3 :29: "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."

---

## 2. Figure census (before findings)

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not the answer |
| 2 The Ground | anchor must not update; independence versus shared pool | governs D4 and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; lossy transform, R_T | governs micro/meso/macro transfer |
| 5 Mint Pipeline | three guards as a product; settlement; "nothing new here" | governs whether a new term (arrangement measure) can be admitted |
| 6 Closure / Reachability | import is the only operator that moves the wall; inward and outward instruments | governs the instrument gap |
| 7 Room Chain | same closure handed along; agreement is not verdict | governs pooling of model results |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation of world sources |
| 9 Leave / Arrive | union versus partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | governs fade-out versus persistence and outreach order |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; contact cascades | decisive for the reservoir regime |
| 12 The Bond | flat formula, priced bond, cycle, isomer, functional group, two currencies | decisive for the slow-down regime and the union |
| 13 Minimum Viable Set | network is a held structure; set closed, arrangements not; unreachable is a verdict | governs the honest stop |
| Operators table | sequence, comparison, threshold between quantities | governs the flip and its type strain |
| Symbols table | R is the aim; ground is the anchor; cluster is the slot | governs section 0 |

Strain test applied during this census: an early attempt to apply Fig 13's six physical terms directly to "nodes as energy, edges as gradient, clusters as spectrum" only fit by renaming social quantities as physical ones. That is a strain, so Fig 13 does **not** govern the pathogen dynamics. Re-census sends Fig 13 to two proper roles: the "network" structure ("that entities relate, and influence travels", Fig 13 :24) licenses the existence of contact structure as a substrate term, and "The set is closed. The arrangements are not. That gap is why import exists." (Fig 13 :115) governs the honest stop. Strain S1 is recorded in section 6. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about contact networks, `grounded` only if settled by a measurement. None is `grounded`.

### F1 — The clustering coefficient is a flat formula, not the structure

**Mode: `specified`. Domain D1, D4. Status: triangulated (Fig 12 and two world frames with low overlap: a network-model comparison study and a generating-function ODE model).**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"the ingredients are recorded and the arrangement is not"** (Fig 12 :14)
> **"The arrangement is the substance."** (Fig 12 :94)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

A scalar clustering coefficient counts closed triangles as a fraction of triples. It records the ingredient count and drops the bond: whether triangles are disjoint, share edges, form larger cliques, or form communities linked by a few bridges. Fig 12 :46: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."

The world corroborates from two directions. Rolls et al. 2015, comparing exponential random graph and edge-triangle contact-network models against three empirical networks, state: "The global clustering coefficient is not sufficient to determine the full epidemiological impact of clustering" and that "the specific nature of the clustering appears relevant for epidemic dynamics." Volz, Miller, Galvani and Meyers 2011 state: "the clustering coefficient (a single value for the entire network) alone is not always sufficient to determine the full epidemiological impact of clustering." These are different methods (empirical model comparison versus analytic ODEs) and one broad network-epidemiology pool, so they are two low-overlap checks of the same figure claim, not two independent grounds.

**Refuter:** two networks matched on degree distribution, global clustering coefficient and degree correlations, run under the same transmissibility and recovery, produce statistically indistinguishable SIR and SIS outcomes across many realisations. If so, the dropped arrangement carries nothing and F1 fails.

### F2 — Slow-down: the triangle spends a contact on an already-reached slot

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 1 plus Fig 11 plus Fig 12, low topical overlap: per-slot residual, contact, cycle).**

> **"An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

When two of a node's contacts are themselves in contact, infection arriving at that node finds those neighbours already exposed or already reached through the same triangle. The effective number of new susceptible slots per infection falls. The early epidemic slows and the final size is reduced. In figure terms the contact is spent on an existing slot rather than opening a new one, and R stays indexed per slot instead of being pooled.

World corroboration: Volz et al. 2011 write "Clustering always slows an epidemic" and find that "clustering always slows the epidemic and increases" the time to peak incidence. The 2025 pairwise-modelling review by Abubakar, Aremu and Aphane reports that "random contacts increase the effective reproduction number, while regular contacts reduce transmission due to local depletion of susceptibles" and that high clustering "may result in localized outbreaks before propagation through the broader network." Welch 2011, holding the degree sequence fixed, found that outbreaks on highly clustered networks "spread more slowly, on average, leading to marginally longer epidemics with fewer individuals infected at the peak of the outbreak." Note the qualification: Welch also found the effect small relative to stochastic variation at moderate clustering levels, so F2 is a directional claim, not a magnitude claim.

**Refuter:** a fixed degree distribution and transmissibility, with a fully removed (no reinfection) compartment, in which higher transitivity fails to reduce either early growth rate or final size across an ensemble. That breaks Fig 11 :40 and Fig 12 :121 as applied here.

### F3 — Reservoir: the same triangle becomes a cycle when reinfection is possible

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 12 :121 plus Fig 11 :49-51 plus Fig 10 :24, low overlap: bond structure, valence, channel).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"the ground does not decay, the channel does"** (Fig 10 :24)

If recovery confers lasting immunity (SIR-like), a closed triangle is a dead end: the chain "cannot close by construction" in the sense that matters, because a recovered node does not re-enter. If recovery returns the node to susceptibility (SIS-like, SIRS-like, waning immunity, treatment without immunity), the output re-enters as input. The triangle is now a cycle, and the cluster acts as a reservoir. Clustering has flipped valence without anything about the contact pattern changing. That is Fig 11 :49 applied at the level of a structure, not an actor.

The world gives the cleanest two-regime result. Nadini, Sun, Ubaldi, Starnini, Rizzo and Perra 2018, in *Scientific Reports*, write: "while the presence of tightly connected clusters inhibits SIR processes, it speeds up SIS phenomena." They explain: "in SIS models, reinfection is allowed and nodes can become infected many times: communities act as a reservoir for the disease and favour the contagion process pushing the epidemic threshold to smaller values." House and Keeling 2010, working in an endemic SIS frame with contact tracing, add a mechanism: "Clustering increases the number of II pairs present at a given endemic state, and contact tracing can be viewed as hyper-parasitism on the network of infected individuals." The same structure, different residual (immunity status), opposite effect. This is not a contradiction; it is the union verdict of section 1.3.

The low-overlap ecology witness agrees on the shape. Benton et al. 2016 describe the European badger as "the key wildlife reservoir of bovine TB" and note that "social structure typical of moderate to high density, managed and unmanaged badger populations can have a marked impact on the persistence and transmission of TB." Marescot et al. 2021 find that communal nurseries, a form of modular subdivision, raise epidemic fade-out probability. Different taxa, different methods, one broad disease-ecology pool, counted as one witness.

**Refuter:** a clustered, SIS-like system with documented reinfection in which modularity fails to lower the epidemic threshold or fails to lengthen disease lifetime across an ensemble; or a clustered SIR-like system that sustains endemicity without any re-entry of infection. Either breaks F3.

### F4 — The flip is a comparison, and its operand type is strained

**Mode: `specified` on the existence of a threshold, `gap` on its numerical value. Domain D3. Status: single-source for the figure definition, with a live strain S2.**

> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."** (Fig 12 :112)
> **"a threshold relation between two quantities"** (Operators table :48)

Persistence is decided at a threshold: the reproduction number against one, the endemic state against extinction. That is a ⋛ comparison, not a degree of clustering. The operand type is a problem: the Operators table restricts ⋛ to two quantities, while the slow-down and reservoir conditions are arrangements (bonded structures) on the network. Whether a settled arrangement can serve as a quantity at that level needs an instrument, not an argument. Fig 5 :69-70 warns that "settling is necessary for a term to be composed over, and it is not sufficient."

The world literature shows why no single scalar can be the operand. Volz et al. 2011: "Clustering always slows an epidemic, but simultaneously increasing clustering and the variance of the degree distribution can increase final epidemic size." Pastor-Satorras et al. 2015, in the *Reviews of Modern Physics* review, report that clustering decreases outbreak size (Keeling 1999; Newman 2003) but can also "decrease the epidemic threshold, making it easier for diseases to spread" (Newman 2003), and that in scale-free networks "the epidemic threshold depends on m_0 and is shifted with respect to the unclustered result; however, for scale-free networks, this shift is not able to restore a finite threshold in the thermodynamic limit." Two quantities are being compared: probability of invasion and speed or final size. They move differently. This resolves the apparent world conflict back to the union census; it does not flip the verdict.

**Refuter:** show that ⋛'s operands are bare scalars at every level, so that a single clustering coefficient can decide persistence; or produce a figure re-census that admits a structured operand without strain. Until then S2 stays live.

### F5 — One lever cannot clear both conditions

**Mode: `general` on the union, `specified` on the two anchors. Domains all. Status: triangulated (Fig 9 plus two world regimes).**

Fig 9 :54, :55 and :57 are the governing lines (quoted in section 1.3). The two anchors differ:

- A C1 failure shows up in early growth rate, peak timing and final size. Its instrument is incidence data with a fixed contact pattern (Fig 2 :29, anchor = measurement).
- A C2 failure shows up in disease lifetime, endemicity and fade-out probability. Its instrument is longitudinal infection status with reinfection documented (Fig 10 :24, the channel to the ground must stay reachable).

A single lever such as "reduce clustering" clears the region where only one condition holds and leaves the intersection standing. Nadini et al. 2018 demonstrate exactly this: the same modular structure inhibits SIR and favours SIS. Welch 2011 adds the methodological warning: "the apparently strong effect of clustering observed by some is more likely to due to a change in the degree distribution—an effect we have nullified by holding the degree sequence constant." Changing one knob while leaving the degree distribution free is a lever applied above the break (Fig 3 :19, "Optimising a link that already works cannot rescue one that does not").

**Refuter:** a single intervention that moves both early growth and long-run persistence in the predicted direction across both regimes, with no categorically different residue left over. That would collapse the union into a partition.

### F6 — Capability and valence live in agent-and-habitat, not in the coefficient

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat versus membrane).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles"** (Fig 11 :52)
> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)

A reservoir is not a property of a cluster considered alone. It is a property of pathogen plus host plus contact pattern plus immunity regime plus the bridges between groups. Scoping the census to direct contacts is the first-order error named in Fig 11 :52: the residual that mattered was three steps out. In network terms, a community with high internal transitivity and no external bridges fades out; the same community with a few bridges reseeds. Marescot et al. 2021 report that age-dependent between-group interactions change persistence, which is a second-order contact cascade. Silk et al. 2017, in *BioScience*, note that "Contact networks, behavioral interactions, and shared use of space can all have important implications for the spread of disease in animals", which is the habitat reading rather than the coefficient reading.

**Refuter:** a documented case in which a cluster's reservoir behaviour is unchanged across a substitution of habitat that demonstrably removes the between-group contacts and the reinfection route. If it survives, F6 is false.

### F7 — The instrument gap: arrangement is not recoverable from the coefficient

**Mode: `general` on the gap, `specified` on what an instrument would have to do. Domain D4. Status: triangulated (Fig 6 inward/outward plus Fig 8 plus Fig 13, distinct roles).**

> **"inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."** (Fig 6 :29)
> **"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."** (Fig 6 :30)
> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

No figure line returns a numerical flip point, and none selects which arrangement is present in an observed network. What is owed is a source-discriminating instrument, not a better argument. Welch 2011 is explicit: "it is unlikely that the level of clustering in the underlying contact network could be accurately inferred independently of the degree distribution", and "the complete transmission tree from an epidemic provides little information about clustering that is not present in the epidemic curve." Rolls et al. 2015 show that different model families fitted to the same empirical network recreate clustering differently and give somewhat different epidemic results, so the coefficient is a projection with loss. This is the `gap`: unreached, not silence and not an invitation to invent a number.

**Refuter:** a published instrument that, from a single observed outbreak and a fixed degree sequence, identifies the arrangement (disjoint triangles versus cliques versus modular communities) with calibrated error, and whose reading is confirmed by an independent contact census. That would close the gap and make the numerical flip reachable.

### F8 — What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R must stay indexed per cluster, not as one epidemic curve | general | Fig 1 :19, :22 | figure-derived |
| The anchor is observed incidence and persistence, not model agreement | general | Fig 2 :29, :35 | figure-derived |
| Clustering is an arrangement (bond), not a scalar ingredient | general | Fig 12 :5, :14, :94 | figure-derived |
| Slow-down when contacts are spent on already-reached slots | specified | Fig 11 :40; Fig 12 :121 | triangulated F2 |
| Reservoir when the closed path re-enters through reinfection | specified | Fig 11 :49-51; Fig 12 :121; Fig 10 :24 | triangulated F3 |
| The two outcomes form a union, not one dial | general | Fig 9 :54, :55, :57 | figure-derived |
| The flip is a threshold comparison with a live operand-type strain | specified | Fig 12 :112; Operators :48 | single-source, strained S2 |
| Capability is pathogen-and-habitat, valence residual-relative | specified | Fig 11 :39, :40, :49-51, :52 | triangulated F6 |
| The numerical flip point and the arrangement in a given network | gap | Fig 9 :32; Fig 13 :134 | unreached, not silence |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: a falsifier written before the run is a design instrument, not only an honesty device. The shape claim is refuted if any of the following is observed:

1. A fixed scalar clustering coefficient, with degree distribution, transmissibility and immunity regime held fixed, predicts both early growth and long-run persistence with no residual (breaks F1 and F4).
2. A clustered SIR-like system with permanent removal sustains endemicity without any re-entry of infection (breaks F3's cycle-plus-reinfection condition).
3. A clustered SIS-like system with documented reinfection shows no lowering of threshold and no lengthening of disease lifetime relative to a degree-matched unclustered control (breaks F3).
4. Two networks matched on degree distribution, clustering coefficient and degree correlations give statistically indistinguishable outcomes in both SIR and SIS runs (breaks F1's isomer claim and F5's union).
5. A published instrument reads the underlying arrangement from outbreak data alone, with calibrated error confirmed by an independent contact census (breaks F7's gap).
6. Figure-level: derive the "network" structure from fewer substrate terms than the six, or admit a composition within one kind that cannot be refused (breaks Fig 13).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until an instrument has paid for the shape against observed incidence and persistence data.

---

## 5. Recommendation

1. Lead with the separator, not with "clustering matters". Name the quantity and the immunity regime before naming the structure (Fig 10 :52, "Bring a characterised residual, never the source"; Fig 9 :27-28, "describe it before you go looking, or any frame you pick will seem to fit").
2. Keep the two verdicts separate in every report. A blended "clustering effect" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Replace the scalar coefficient with an arrangement-level description: disjoint triangles, shared-edge motifs, clique size distribution, community bridges. The bond carries the information (Fig 12 :94).
4. Hold the degree sequence fixed when measuring an effect; otherwise the estimated clustering parameter is a proxy for degree variance (Welch 2011; Fig 9 :60, "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").
5. Report per cluster and per time. National curves are aggregated slots (Fig 1 :22).
6. Treat the model literature as one evidence pool, not many witnesses. Rolls, Volz, Welch, Nadini and House all work in network epidemiology; the badger and communal-nursery studies are the lower-overlap witness (Fig 2 :31, :40).
7. Stop at the shape. Do not name a numerical flip point or a universal coefficient threshold; the framework returns "a kind of thing, never the answer itself" (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and two essays opened directly this session (*The Recursive Self-Improvement Trap*, *The Library of Babel: Locating the Book of Books*).

- The README confirms: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also gives the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw."
- The README's canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop and F7.
- The Trap confirms the simulation status ("the truly testable output would need to be derived from the real architecture or working the formula yourself") and the prestige rule ("Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it.").
- *Library of Babel* confirms the shape rule ("you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question") and the union rule ("Perhaps your problem was a bundle or conflation of several problems masquerading as one?").

| earlier move in this audit | status after the canonical check | reason |
|---|---|---|
| First pass treated clustering as a cause with one sign | **Retracted, valence-relative reading** | Fig 11 :49-51 plus Nadini 2018: the same structure flips with the immunity residual |
| First pass treated the clustering coefficient as the structure | **Retracted to flat-formula reading** | Fig 12 :5, :14, :94; Rolls 2015 and Volz 2011 both say the scalar is insufficient |
| First pass applied Fig 13's six physical terms to nodes and edges | **Retracted, strain S1** | Only fit by renaming social quantities as physical ones; re-census limits Fig 13 to the network structure (:24) and the honest stop (:115) |
| Apparent world conflict: clustering lowers threshold versus raises it | **Not strained after re-census** | Different quantities (invasion probability versus speed/final size) and different constraints (degree distribution held fixed or not). Matches the union verdict |
| First pass read Fig 12 :121 cycle as requiring an explicit loop in the network | **Narrowed** | The triangle closes a path; what decides the sign is whether infection re-enters, which is the immunity regime |
| Temptation to report a universal coefficient value at the flip | **Refused as `gap`** | Fig 9 :32, Fig 13 :134, Fig 8 :39; no figure line and no instrument here returns a number |
| Treating all network-epidemiology papers as independent witnesses | **Narrowed to one pool** | Fig 2 :31, :40; Rolls, Volz, Welch, Nadini and House share methods and literature |
| F4 "single-source" | **Kept, strain named** | The threshold definition is from the Operators table; the operand type is still live (S2) |

**Strains sent to the log:** S1 (Fig 13 physical substrate applied to social network; resolved by re-census to the network structure and the honest stop), S2 (⋛ operand type at the threshold: quantities versus settled arrangements; live, named in F4, `06`, `09` and `11`), S3 (model evidence-pool overlap; resolved by declaring one witness and promoting the badger/ecology studies to the lower-overlap corroborator). After re-census: one live strain, S2, and no hidden strain.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus *Library of Babel*'s bundle passage: it is a union of local depletion and path re-entry, each with its own anchor.
2. **What is the anchor?** Observed incidence and persistence, indexed per cluster (Fig 2 :29; Fig 1 :19). Not model agreement, not the coefficient.
3. **What is the structure?** A bond, not an ingredient list. Arrangement is the substance (Fig 12 :5, :94).
4. **Why does spread slow?** Contacts are spent on already-reached slots, so a chain cannot open new ground quickly (Fig 11 :40; Fig 12 :121).
5. **Why does infection persist?** The closed path re-enters when reinfection is possible: the chain becomes a cycle and the cluster is a reservoir (Fig 12 :121; Fig 11 :49-51; Fig 10 :24).
6. **What decides which?** A threshold comparison (⋛), whose operand type is strained, not a smooth function of a coefficient (Fig 12 :112; Operators :48).
7. **What can be said at the stop?** A separator with two anchors, a refused scalar, a named strain and a refuter. Not a number, not a standing list of good structures, not a `grounded` answer. Fig 13 :134: "Unreachable is a verdict here, not a silence"; Fig 8 :39: "So a search that finds nothing is never a proof of absence."

---

## 8. Updated verdict

The shape survives: **clustering slows transmission when it spends contacts on already-reached susceptible slots and the chain cannot open new ground; it creates a persistent reservoir when the same closed path becomes a cycle through reinfection or waning immunity. The two effects are a union with different anchors, kept separate and never averaged. The controlling object is the arrangement (bond), not the scalar clustering coefficient, and the scale-free or degree-heterogeneous case can move the two quantities in opposite directions.** What does not survive: any universal sign for the coefficient, any single flip-point number, any claim that a transmission tree recovers the arrangement, and any claim that one lever clears both conditions. Live strain S2 concerns the operand type of the threshold comparison. The gap is real and reported as unreached: no instrument here discriminates the arrangement in a given observed network. Mode `specified` on the separator, `general` on the structural shape, `gap` on the number and the arrangement. No world source flipped a verdict; the apparent threshold conflict was returned to the census and dissolved. Simulated derivation, internally consistent, not a ground reading.
