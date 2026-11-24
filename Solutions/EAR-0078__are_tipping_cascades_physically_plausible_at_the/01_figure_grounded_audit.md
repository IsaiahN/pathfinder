# Figure-grounded audit: EAR-0078 tipping cascades at global scale

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** LLM output is "simulacra"; "the truly testable output would need to be derived from the real architecture or working the formula yourself" (*The Recursive Self-Improvement Trap*, read 2026-11-22). This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Verbatim figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (all `Fig N :line` citations). Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. World sources opened 2026-11-22 are listed in `10_source_ledger.csv`.

---

## 0. The question under audit, stated as an effect

> Are tipping cascades physically plausible at the global scale, and which links in proposed chains are well supported?

Restate as residual, not as a topic. `R = |Γ(b,a) − o′|` per slot `s` (Fig 1 :11). A slot is a tipping element or a proposed link between two elements. What failed to resolve: a threshold crossing in element A appears to propagate to element B, and the claim asks whether that propagation composes into a global cascade and which A-to-B links are real.

Two effects are bundled here and must be separated before a verdict (Fig 9 :54-57):

1. **Existence/composition effect:** can a local threshold change compose through contact into a cascade at all, and can that cascade reach global scale?
2. **Link-status effect:** which individual links are `reached, so its state can be read` versus `not reached, so not assessable` (Fig 3 :16-17)?

The second is a union of many per-link questions, not one hard question. "A case in two conditions is not a harder case of either" (Fig 9 :57). Writing down what an answer would look like, as the Direction discipline requires: a dependency-ordered list of links, each with a named contact path, a named instrument, a ground status, and a measured element-to-global round-trip gap `R_T` (Fig 4 :30). That shape is bound as an ordinary term and then tested below.

---

## 1. Domain census, before any figure line is chosen

Describe R by arity, symmetry and scale, then one line per domain with actors / currency / anchor. No nameable anchor means it is not a domain yet.

**R (arity / symmetry / scale).** Arity: a chain is a set of pairwise links plus the states of the elements they join; the relation is n-ary for n elements and must be enumerated, not composed. Symmetry: links are ordered, `→` sequence or `⇒` production or `⋛` threshold, not symmetric `+` bonds; a feedback return path is a cycle, which a chain cannot represent (Fig 12 :121). Scale: first order at a single element, second order at the coupling between elements, and a lossy transform from element-level to global-level description (Fig 4 :27-30).

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Physical contact habitat | tipping elements (Greenland, West Antarctic, AMOC, Amazon, permafrost, coral) and what acts on them | physical fluxes, forcing, moisture and freshwater transport | observations, palaeo records, process instruments | admitted |
| D2 Proposed chain as composition | elements as terms, links as typed bonds | composition inside `closure(Γ)`; bits to state a link, actions to settle it | the ground settles each link separately | admitted |
| D3 Evidence and verification frame | research groups, Earth system models, expert elicitation, reviews | agreement and residuals | the ground, never agreement | admitted |
| D4 Scale bridge | element-level descriptions and the global aggregate | the lossy transform `T_A`, `T_E` and its round-trip gap `R_T` | the round trip, measured, not assumed zero | admitted |
| X1 "Planetary threshold" as one global state variable | one aggregate number | averaged risk | none nameable that is not itself a model output | not a domain yet; absorbed into D4 as an aggregate |

**Partition or union.** D1 and D2 form one physical compound: the chain is a notation over a habitat, not the habitat itself. D3 and D4 form a second compound: evidence about links plus the scale transform. The whole is a **union**, not a partition, because the chain status depends on both the physical contact path (D1) and the instrument that reads it (D3), and a single lever clearing one condition leaves the intersection standing (Fig 9 :55-57).

**Order by dependency (Fig 3).** Enumerate contact outward (Fig 11 :44) → give each link a status (Fig 3 :16-17, :27) → settle each link against the ground before composing over it (Fig 5 :69-72; `THE_FORMULA.md` step 5) → bracket the cross-scale transform and measure `R_T` (Fig 4 :30) → triangulate across low-overlap frames (Fig 2 :31-32). Effort spent above the break cannot rescue a link below it (Fig 3 :19-21).

---

## 2. Figure census (quoted before conclusion)

| figure | bearing | verdict |
|---|---|---|
| Fig 1 | residual per slot, never aggregate | a single global cascade number aggregates away the live signal |
| Fig 2 | anchor, independence, correlation valence | models sharing thresholds are one evidence pool |
| Fig 3 | per-link status ordered by dependency | "which links" is a link-by-link reading |
| Fig 4 | lossy membrane, round trip | global scale needs a measured `R_T` |
| Fig 5 | three guards as a product; settlement not sufficient | a stylized model is not a settled link |
| Fig 6 | import moves the wall; instruments improved from worse ones | a new coupling coefficient is an import with a source gate |
| Fig 7 | room chain, agreement compounds | more agreeing models do not add evidence |
| Fig 8 | union surplus, residual first | the evidence pool decides what a second frame is worth |
| Fig 9 | split union vs partition; describe before looking; filters not witnesses | bundle must be split before search |
| Fig 10 | ground does not decay, channel does; bring a characterised residual | short observations are channel failure, not ground failure |
| Fig 11 | habitat enumerated by contact; contact cascades | cascade shape is licensed; valence is relative to the residual |
| Fig 12 | priced bond; chain is degenerate case; a chain cannot close | chain diagrams under-represent feedback cycles |
| Fig 13 | residual compounding gives chaos; unreachable is a verdict | no figure line names which physical link is supported |
| Operators | `→` sequence, `⇒` production, `⋛` comparison | link types are not interchangeable |

Strained readings are named as such in F3 and F6, not smoothed over.

---

## 3. Findings, one loop per domain

### F1 (D1): cascade is a contact-composition shape, not a physical measurement

**Mode: `general` for the shape, `specified` for its application to Earth-system elements.**

Fig 11 :43-44:

> **"The habitat is enumerated, never composed."**
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**

Fig 11 :52-53:

> **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

Fig 13 :31-32:

> **"And because each turn leaves a remainder (the residual) that re-enters the next, it is also where the randomness comes from: a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."**

Reading: the framework licenses "cascade" as a shape, namely a remainder compounding through a contact network until the effect stops mattering. It does **not** assert that any particular Earth-system cascade occurs. The DDT case in Fig 11 is a worked instance where the residual that mattered was three steps out, so first-order scoping is a known failure mode. An actor's valence is relative to the residual, not carried (Fig 11 :49), so an element that is a mediator for one cascade is not a mediator for another.

**Status: triangulated.** Fig 11 (habitat enumeration) and Fig 13 (substrate alternation and residual compounding) are two figures with low overlap: one is about what to list, the other about what compounding does. Both are framework-internal, so triangulation is structural, not a second witness.

**Refuter:** a proposed cascade link for which no nameable contact path (actor and currency) can be given; or a demonstrated cascade whose residual mattered only at first order where the habitat enumerates third-order contact. Either breaks the contact-enumeration claim.

### F2 (D2): "which links are well supported" is a per-link status reading

**Mode: `specified`, ungrounded.**

Fig 3 :19-23:

> **"Optimising a link that already works cannot rescue one that does not."**
> **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**
> **"A step whose input never arrives cannot be diagnosed, only its predecessor can. Which is why a reading taken below the break is not a weak reading. It is a reading of nothing."**

Fig 3 :17 and :27:

> **"not reached, so not assessable"**
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

Fig 1 :19 and :22:

> **"The residual is indexed by object slot, not aggregated."**
> **"Aggregating across slots is how a live signal disappears into an average."**

Reading: a proposed chain has no more support than its weakest link, and the status of each link must be read separately. A link with no instrument is not a weak link, it is an unexamined link. A global "cascade risk" number that averages across links throws away exactly the signal the question asks for. The dependency order matters: a downstream link cannot be diagnosed until its predecessor's output arrives.

**Status: triangulated.** Fig 3 (dependency order) and Fig 1 (per-slot indexing) are low-overlap frames: one is about chain order, the other about slot indexing. Both say index, do not aggregate.

**Refuter:** a link shown to transmit a cascade at the ground while having no instrument; or a chain whose status can be read from its strongest link; or a global aggregate that predicts each link's status without loss. Any of these breaks the per-link claim.

### F3 (D2 topology): a chain is a lossy notation over a habitat with feedback

**Mode: `general` for the representation limit, `specified` for the claim about cascade diagrams.**

Fig 12 :48 and :121:

> **"A molecule is a bonded arrangement. A chain is the degenerate case: one bond type, no branching. Nothing about a chain is a different kind of object."**
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

Fig 13 :86-88:

> **"Each step acts on one kind and produces the other, so the colours alternate by construction rather than by choice."**
> **"The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place."**

Reading: proposed tipping chains are drawn as one-way domino sequences (`→`). Physical cascade mechanisms include return paths: ice loss freshens the North Atlantic, weakens the overturning, shifts Southern Ocean heat, which acts back on ice. That is a cycle, not a chain. The chain diagram is a degenerate notation, and the missing bond is a modelling choice, not a fact about the world. This is a **strain**, and the strain sends us back to the census (Fig 11 :43-44): the habitat has two-way relations; the diagram is one-way by construction. Re-census resolves it without flipping any verdict: D1 is the habitat, D2 is the notation over it.

**Status: triangulated.** Fig 12 (bond topology) and Fig 13 (alternating chain restarts) are low-overlap: one is about operator arity and closure, the other about the substrate chain. World corroboration from Rocha et al. 2018 is secondary and noted in `09_watson_answer.md`, not counted here.

**Refuter:** a demonstrated cascade among the claimed elements with no feedback return path at any link, where the diagram asserts one; or a proof that a one-bond chain represents a two-way coupling without loss. Either breaks the representation claim.

### F4 (D4): "global scale" is a cross-scale transform with a measurable round-trip gap

**Mode: `specified`, ungrounded.**

Fig 4 :20 and :27-32:

> **"Only the actors, the currency and the anchor change."**
> **"The transform between scales loses information, and that is the point."**
> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
> **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."**

Reading: the kernel (loop, naming rule) is the same at element scale and global scale; only actors, currency and anchor change. What crosses up is a method, never a recording of one element's trajectory (Fig 4 :22-25). A global aggregate is a coarser description and must be bracketed: send element-level description up, bring it back down, measure `R_T`. A "global cascade probability" quoted without that gap is dead reckoning.

**Status: triangulated.** Fig 4 (membrane) and Fig 1 (per-slot residual) are low-overlap: one is about cross-scale transforms, the other about slot indexing.

**Refuter:** a global aggregate that reproduces every element-level residual with `R_T = 0` demonstrated against the ground; or a measurement showing the transform from element to global is lossless for this quantity. Either breaks the bracket requirement.

### F5 (D3): models sharing thresholds are one evidence pool

**Mode: `general`.**

Fig 2 :29-35:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."**
> **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."**
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 7 :13 and Fig 8 :32:

> **"agreement compounds, evidence does not"**
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."**

Fig 10 :24:

> **"the ground does not decay, the channel does"**

Reading: expert elicitation, stylized network models and Earth system models that inherit the same thresholds and coupling signs draw on one evidence pool. Their agreement is the pool talking, not corroboration. Short observational records are a channel problem (stale percepts, pooled readings), not evidence that the ground has moved. Where the anchor itself is a model output, it has become another frame (Fig 2 :47).

**Status: triangulated.** Fig 2 (anchor and independence) and Fig 7 (room chain) are low-overlap: one is about triangulation, the other about handoff. Agreement among research groups is variation, not a verdict (Fig 7 :35).

**Refuter:** two frames with demonstrated low overlap, each ranging separately against the ground, agreeing on the same link; or an anchor that does not move when any model's coupling strength is changed. Either would move this finding from one-pool to triangulated.

### F6 (gap): which specific link is well supported is not in the figures

**Mode: `general` on the limit, `gap` on the content.**

Fig 9 :32:

> **"you get a kind of thing, never the answer itself"**

Fig 13 :134 and Fig 8 :39:

> **"Unreachable is a verdict here, not a silence,"**
> **"So a search that finds nothing is never a proof of absence."**

Fig 6 :34-35:

> **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve. Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."**

After a genuine re-census of all four domains, no figure line governs which physical link is well supported. The figures return the shape of that answer (per-link, contact-enumerated, dependency-ordered, bracketed across scale) and then stop at the limit of the instruments. Naming "Greenland to AMOC is supported" would require the ground, not a figure. This is `gap` plainly, not silence and not a hidden answer. The world literature explicitly agrees the link structure is partly based on expert knowledge and that cascade size distributions lack empirical data; see `09_watson_answer.md` §WORLD.

**Status: `gap`.** A search that finds no governing line is not a proof that none exists. The refuter below is the route by which this could be closed.

**Refuter:** a measurement that quantifies coupling on a specific link at the ground, or a figure re-census that finds a line governing link support. Until one fires, no link may be labelled `grounded`.

---

## 4. Pre-registered refuter (written before the conclusion)

"A falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted, or a finding revised, if any of the following holds:

1. A proposed cascade link has no nameable contact path with an actor and a currency (breaks F1/D1).
2. A link's cascade status is measured at the ground while it has no instrument (breaks F2).
3. A demonstrated cascade among the claimed elements has no feedback return path where the diagram asserts one, or a one-bond chain is shown to represent a two-way coupling without loss (breaks F3).
4. A global aggregate reproduces every element-level residual with `R_T = 0` demonstrated (breaks F4).
5. Two low-overlap frames, each ranging separately against the ground, agree on the same link (moves F5 from one-pool to triangulated).
6. A ground measurement quantifies a specific link's coupling, or establishes the planetary threshold, at the ground (closes F6).

If any fires, revise that domain's verdict; never average across domains. Item 6 would move the second half of the question from `gap` to `grounded`.

---

## 5. Recommendation

1. Split the question before searching (Fig 9 :54-57). Treat the existence question and the link-support question as two compounds with separate loops and separate grounds.
2. Enumerate the habitat by contact, outward until the cascade stops mattering (Fig 11 :44). Do not scope to direct contact.
3. Give every proposed link a row: contact path, bond type (sequence, production, threshold, or cycle), instrument, ground status (Fig 3 :16-17), and dependency predecessor.
4. Redraw chains that contain return paths as cycles; record the redraw, do not silently convert (Fig 12 :121).
5. Bracket every move to global scale and report `R_T` qualitatively or numerically (Fig 4 :30).
6. Buy independence where the cost of being wrong is high (Fig 2 :42). Two stylized models sharing thresholds are one witness.
7. Say `gap` for the link-support question. Fig 13 :134: "Unreachable is a verdict here, not a silence,".

---

## 6. Canonical usage check (figures README + the eight essays)

Read after sections 0 to 5, and used to govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit, the framework returns "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- Eight essays (all read 2026-11-22, listed in `05_what_shape_means.md`): a shape is a constraint stated before the name is available; model agreement is not ground contact; prestige is not action.

### Retractions and confirmations

| earlier finding | status after the canonical check |
|---|---|
| "The figures show global tipping cascades are physically plausible" | **Retracted as written.** Fig 11 licenses the *shape* of contact cascades, not the physical occurrence of any named chain. Downgraded to: cascade composition is `general`; physical occurrence is `specified`, ungrounded. |
| F3 called a figure contradiction (chain vs feedback) | **Re-census, not a contradiction.** Fig 12 governs the notation over the habitat; Fig 11 :43-44 governs the habitat itself. Different objects. The README's re-census rule applies. Strain named, not hidden. |
| "Global scale is a third domain" | **Retracted at census level.** A global aggregate has no nameable anchor independent of model output (X1), so it is folded into D4 as a lossy aggregate, not admitted as a domain. |
| Wunderling et al. 2021 read as independent ground evidence that ice sheets initiate cascades | **Downgraded to one witness.** It is a conceptual, process-based network model with thresholds propagated from the same expert-elicitation pool. It corroborates the shape, not the physical link. |
| Rocha et al. 2018 read as a direct measurement of Earth-system cascade links | **Downgraded to low-overlap corroboration of mechanism.** It is a structural analysis of 30 social-ecological regime shifts, not an Earth-system link measurement. |
| F5 "models agree, therefore the link is real" | **Never claimed, and canonically forbidden.** Fig 2 :35 and :40 refuse it. Recorded here because a first draft of the outreach wording implied it. |
| F6 `gap` | **Canonically confirmed.** The framework returns a shape, not a name; "Unreachable is a verdict here, not a silence," (Fig 13 :134). |

### Recursive derivation summary

1. **Cascade composable at all?** Yes, as contact composition. Fig 11 :52-53, Fig 13 :31-32. Mode `general`.
2. **Which links?** Per-link ground status, not a global average. Fig 3 :17, :27; Fig 1 :19, :22. Mode `specified`.
3. **Chain or cycle?** Chain is degenerate notation; return paths need the cycle bond. Fig 12 :48, :121. Strain re-censused.
4. **Global scale?** Cross-scale transform with measured `R_T`. Fig 4 :20, :30. Mode `specified`.
5. **How many witnesses?** One evidence pool until low-overlap instruments agree. Fig 2 :31-32, :40.
6. **Import?** A new coupling coefficient is an import with a source gate and shadow test (Fig 6 :23; Fig 8 :50-52). None supplied in world sources that share the elicitation pool.
7. **Settlement?** None of the six world sources is a ground reading of a specific cascade link. Status `candidate`.

### Updated verdict

The shape survives: a cascade is contact enumeration with compounding residual; each link needs its own instrument and ground status; a global aggregate must carry a measured round-trip gap; agreement inside one evidence pool is not corroboration. What does not survive is any claim that the figures name a well-supported physical link, or that model agreement settles global plausibility. Strains after re-census: one, the chain-versus-cycle notation strain, named in F3 and carried into `11_audit.md`. No figure quote was found to have drifted from the extract.
