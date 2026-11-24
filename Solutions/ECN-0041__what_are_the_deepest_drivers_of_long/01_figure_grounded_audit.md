# Figure-grounded audit: the deepest drivers of long-run economic growth

**Mode of this document: `specified` on the shape, `general` on the shape-not-a-name limit, `gap` on the literal single-driver question. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output simulates an approximate answer, and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim quotes, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the world sources opened 2026-11-23 and listed in `10_source_ledger.csv`.

---

## 0. The question as an effect, and the term we bind

> What are the deepest drivers of long-run economic growth: technology, capital, education, institutions, or something else?

Stated as an effect: we observe persistent, large differences in real output per person across countries and eras, including the escape from Malthusian stagnation. We ask which named candidate, when pushed, leaves a residual that persists and does not trend down, and whose failure cannot be repaired by pushing the others. "Deepest" is therefore a position in a dependency order (Fig 3), not an importance score.

Before the run we bind what an answer would look like (formula step "Direction"): a **shape** that every viable driver must satisfy, the **domains** in which that shape applies, and a **refuter** that would fire if the shape is wrong. The sought-for shape is made an ordinary term so it can accrue a residual like anything else. §6 writes the refuter down before any conclusion.

---

## 1. The residual R

- **Arity.** At least four named candidates (technology, capital, education, institutions) plus an open "something else" slot. It is a compound, not one binary variable.
- **Symmetry.** The candidates are not interchangeable. Capital and education-as-embodied-skill are stocks or flows of reproducible inputs. Technology is a flow of nonrival knowledge. Institutions are rules and incentives. Under Fig 12's bond tests they would not all join the same way, so a flat sum of "drivers" is a notation that has lost the arrangement.
- **Scale.** Firm, sector, nation, and centuries. The same label ("growth driver") is used at all four, but the anchor differs at each.
- **Per slot, not aggregate.** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* A world-average growth rate hides which country or era has a live, persistent residual. The residual must be tracked per country and per era.
- **The anchor.** Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* For this question the anchor is measured output per person and productivity, not agreement among schools of thought. OWID's topic page supplies the ground-facing description: economic growth *"means an increase in the quantity or quality of the many goods and services that people produce"* (Roser et al., 2023, world source).

---

## 2. Domain census, before choosing any figure line

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1, accumulation frame** (capital, education as embodied skill) | savers, investors, firms, machines, workers | investment flows, capital stock, output | measured output and market prices | a **closed** frame: more of the same input changes the level, not the long-run rate |
| **D2, ideas / technology frame** | inventors, researchers, firms, the pool of ideas | new combinations, knowledge spillovers, TFP | TFP measurement, patent citations, productivity | an **import** frame: adds an atom from outside the reproducible-factor closure |
| **D3, habitat / institutions frame** | rules, property rights, the state, markets, social networks | incentives and constraints on actors, contact between agents and the ground | market outcomes, natural experiments, measured development differences | **habitat**, not atom: changes which actors are in contact with the ground |
| **D4, verification frame** | expert readers, data, methods | residuals and agreement | the ground, never agreement (Fig 2 :35, :40) | in this simulated run all domains draw on one evidence pool, so independence is zero |

**Partition or union? Union.** These are overlapping conditions, not a list of separate ones. Fig 9 :55 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :4-5 *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* Fig 8 :45 *"Two frames together reach what neither reaches alone."* A single lever clears the region where only one condition binds and leaves the intersections standing (Fig 9 :55-56).

**Order by dependency (Fig 3).** First decide whether this is one question or several (Fig 9 :4-5). Then unbundle the union (Fig 9 :54). Then, for each unbundled domain, ask what is inside the closure and what must be imported (Fig 6). Then ask what changes contact (Fig 11). Settle the upstream link before reading the downstream one: Fig 3 :22 *"A step whose input never arrives cannot be diagnosed, only its predecessor can."*

---

## 3. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | *"The residual is indexed by object slot, not aggregated."* | no single global growth number can select the driver |
| 2 The Ground | anchor must not update; agreement with a shared pool is disqualifying | data is the anchor; school consensus is not |
| 3 Dependency Chain | *"Optimising a link that already works cannot rescue one that does not."* | "deepest" is a dependency position, not a rank by importance |
| 4 The Membrane | only methods cross up; round trip needs a measured gap | the shape is a generator, not a recording of the growth literature |
| 5 Mint Pipeline | three guards as a product; settling is necessary but not sufficient | no new primitive is minted by this derivation |
| 6 Closure / Reachability | *"MINT composes inside the closure and can never add an atom."* | accumulation inside a closure cannot set the long-run rate |
| 7 Room Chain | *"A room's agreement is variation, not a verdict."* | the consensus of a school cannot settle this |
| 8 Union Surplus | *"Two frames together reach what neither reaches alone."* | technology and institutions are a union, not rival names for one slot |
| 9 Leave / Arrive | *"describe it before you go looking, or any frame you pick will seem to fit"*; union needs unbundling | pick the residual first, then the frame; split before searching |
| 10 Ground Maintainer | *"Bring a characterised residual, never the source."* | outreach leads with the shape and refuter, not the framework |
| 11 The Habitat | *"capability is a property of agent-and-habitat, never of the agent alone."* | institutions fit the habitat shape, not the atom shape |
| 12 The Bond | catalyst, cycle, functional group, isomorphism | analogues only; not allowed to hand a verdict |
| 13 Minimum Viable Set | *"The set is closed. The arrangements are not."* | generic support for import; the six-term mapping was retracted (§5) |
| Operators table | seven bonds plus negation | no growth-specific operator was added |
| Symbols table | `R` is the aim; ground is the anchor | the residual is defined per slot against measured output |

Strained readings are named in §5, not smoothed over.

---

## 4. Findings

### F1 - The question is a union, not a partition (decisive shape)

Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

Fig 9 :56-57: *"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds. What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

Each candidate in the question works well on a different subset: capital deepening explains levels and transitions, ideas explain nonrival productivity shifts, institutions explain why some places can exploit the same pool of ideas. That is the signature Fig 9 names. The instruction is *split rather than search*. The question "which single driver is deepest" is therefore answered at the shape level with `gap`: the figures do not license a single root, and the debate persisting across subsets is evidence of a union rather than of one hard question.

**Refuter:** show that one candidate accounts for the persistent residual across independent closures and subsets, so the "different subsets" observation fails.

### F2 - Pure accumulation cannot set the long-run rate (triangulated)

Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*

Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."*

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

D1 is a closed frame: adding more reproducible capital or more embodied skill is composition inside the same atom set. Under the closure law it changes the level reached and the speed of transition, not the long-run rate. The world sources agree and are independent of the framework: Solow's Nobel lecture states that *"the permanent rate of growth of output per unit of labor input is independent of the saving (investment) rate and depends entirely on the rate of technological progress in the broadest sense"* (Solow, 1987/1992). OWID's Malthusian-trap article shows the same effect at a different scale: before the escape, *"Any increase in productivity would only lead to a brief increase in living standards, because it ultimately led to an increasing size of the population that left everyone as poorly off as before"* (Roser, 2020).

**Verdict per domain:** D1 `specified`, cannot be deepest for the *long-run rate*. It remains a real driver of levels and intermediate-run transitions, and Solow's embodiment discussion is recorded so this is not overclaimed. **Triangulated** (Fig 6 and Fig 8, low overlap with the two world sources).

**Refuter:** a measured sustained rise in per-capita growth generated entirely by accumulating a reproducible factor, with no import and no change in contact.

### F3 - Technology fits the import shape, but the figures return a shape, not a name (triangulated)

Fig 6 :14: *"the only operator that moves the wall"* (IMPORT).

Fig 8 :45-46: *"Two frames together reach what neither reaches alone. Composition crosses the boundary between them, and that surplus is where imports live."*

Fig 8 :51-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."*

D2 has the shape of the thing Fig 6 says can move the wall: an atom from a frame whose closure differs. Nonrival ideas are the right *kind* of thing for that shape, because crossing does not consume them (Jones, 2004: *"Ideas are different from nearly all other economic goods in that they are nonrivalrous"*). Solow's growth accounting gives the world-side magnitude: *"Thus technology remains the dominant engine of growth, with human capital investment in second place"* (Solow, 1987/1992). OWID's networks article adds the mechanism of diffusion: *"social networks facilitate the diffusion of ideas across individuals and firms, and because of this, they play an important role in productivity growth"* (Ortiz-Ospina, 2019).

But Fig 9 :32 says *"you get a kind of thing, never the answer itself."* The figure licenses the shape **an import from a different closure**. It does not license the name "technology" as a decree. The name is a binding from the economics frame, provenanced as such.

**Verdict per domain:** D2 `specified`, triangulated (Fig 6 + Fig 8, with three world sources). Name withheld as a figure verdict.

**Refuter:** demonstrate that ideas and TFP are generated wholly inside the accumulation closure, so the "different closure" condition fails.

### F4 - Institutions fit the habitat shape, a different kind of thing (triangulated)

Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."*

Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

Fig 11 :43-44: *"The habitat is enumerated, never composed. List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*

D3 has the shape of a habitat, not an atom. It changes contact between agents and the ground. This is not a competing name for D2's slot: import and habitat are different kinds of thing, which is precisely why F1 calls the question a union. The world side is strong and independent: Acemoglu, Johnson and Robinson state that *"differences in economic institutions are the fundamental cause of differences in economic development"* and that *"Economic institutions determine the incentives of and the constraints on economic actors, and shape economic outcomes"* (AJR, 2004). Solow, from a different frame, writes that *"the markets for goods and for labor look to me like imperfect pieces of social machinery with important institutional peculiarities"* (Solow, 1987/1992). Solow also names a "third factor" that can make technical progress and investment move together: *"the presence of conditions that encourage entrepreneurial activity"*. That is the union, stated by a witness who was arguing for technology.

**Verdict per domain:** D3 `specified`, triangulated (Fig 11 + Fig 2's anchor rule, with AJR and Solow). Name withheld as a figure verdict.

**Refuter:** show that rules and incentives are themselves just another reproducible input inside D1's closure, so "habitat" adds no distinct kind.

### F5 - "Deepest" is a dependency position, not an importance rank

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*

Fig 3 :22-23: *"A step whose input never arrives cannot be diagnosed, only its predecessor can. Which is why a reading taken below the break is not a weak reading. It is a reading of nothing."*

Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

So the question is answerable only after asking which link currently stops the chain in a given place and era, and whether that was measured or assumed. Fig 3 :24 *"The middle link is where chains usually break."* The middle link here is the one between having terms for what the economy affords and being able to say what would count as progress, which is where Fig 12 :114 says a vocabulary of ingredients rather than bonds bites. This is a `general` structural reading, not a diagnosis of any country.

**Refuter:** show that all four links are independently measurable and none can be the binding one, so the dependency ordering adds nothing.

### F6 - A single aggregate cannot select the driver

Fig 1 :19 and :22 (quoted in §1). Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*.

A cross-country regression that pools all slots and reports a coefficient for "education" or "institutions" is exactly the aggregation Fig 1 disqualifies. The residual is per slot. This is also why the source ledger records overlap: Solow, Jones, AJR and OWID are different frames but they share a body of growth-accounting evidence, so their agreement is not four independent witnesses.

**Refuter:** a per-slot analysis in which the same candidate carries the persistent residual in every slot, with no pooling.

### F7 - Agreement, prestige and mode cannot settle it

Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*.

Picking a favourite driver and then finding evidence for it is the inversion Fig 9 forbids. The outreach artifacts therefore lead with the residual and its refuter, and never ask for trust. *The Recursive Self-Improvement Trap* adds the prestige rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* Mode must be stated: an unmeasured driver ranking is a specification of what to measure, not a verdict (`THE_FORMULA.md` mode rule).

**Refuter:** a measurement that settles the ranking, at which point the mode would legitimately move to `grounded`. Until then this remains `candidate`.

### F8 - What survives, with modes

| claim | mode | figure line |
|---|---|---|
| The question is a union of overlapping conditions, so split before searching | `specified` | Fig 9 :4-5, :54-57 |
| Pure accumulation inside a closure cannot set the long-run rate | `specified` | Fig 6 :21, Fig 8 :32 |
| Any deepest driver must have the shape of an import from a different closure | `specified` | Fig 6 :23, Fig 8 :45-46 |
| Any deepest driver must also have the shape of a habitat condition that changes contact | `specified` | Fig 11 :39-40 |
| A frame returns a kind of thing, never the answer itself | `general` | Fig 9 :32 |
| Which single named driver is deepest, in every place and era | **`gap`** | no figure line governs after re-census |

---

## 5. Strain test and re-census

**Strain 1, retracted.** I first tried to map the question directly onto the six-term substrate of Fig 13: capital as energy (conserved, finite), institutions as network (that entities relate), education as spectrum (ordering so more and less can be said), technology as gradient (a difference that can be spent). Fig 13 :74 says *"Everything else is a composition across the two kinds, never within one."* The mapping forces three states or three structures to bond within a kind and imports economic categories into a physical composition rule. That is a strain, and the strain means the line governs another quantity.

**Re-census:** Fig 13 governs the six primitives of a physical composition system. Growth drivers are not primitives of that set, and the question is about causal depth, not cross-kind composition. I therefore withdrew the six-term mapping as a verdict. It survives only as a `general` analogue, recorded in `06_isomers_and_order.md`, and it is not allowed to hand a verdict (Fig 9 :60). Fig 13 is used here only for its generic closure statement: Fig 13 :115 *"The set is closed. The arrangements are not. That gap is why import exists."*

**Strain 2, named not hidden.** Fig 12 offers catalyst (*"A part that survives its own use"*), cycle (*"The output re-enters as input"*) and functional group (*"A substructure whose presence fixes the outcome"*). These are tempting analogues for institutions, capital accumulation and a technology bundle. They are analogues from a different domain. Marked `general`, used in `06` only as supporting structure, and never counted as a second witness for F3 or F4.

**Strain 3, dissolved by re-census.** F2 and F4 appear to conflict: if institutions change contact, is that not an import that moves the wall? Re-census: Fig 6 governs what changes the *closure* (an atom), Fig 11 governs what changes *contact* (the habitat). Different objects. Fig 10 :68 *"Different actors, a different currency, a different ground, and a lossy transform between."* The canonical rule applies: a reading that makes two figures contradict one another has misidentified its domain.

**After re-census: no live strain, one retracted mapping, one analogue declared.**

---

## 6. Pre-registered refuter

Written before the conclusion, per the seat rule that *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. A sustained rise in per-capita growth is measured that is generated entirely inside the closure of a reproducible factor, with no import and no change in contact (breaks F2 and Fig 6 :21).
2. One candidate is shown to carry the persistent residual across independent subsets and closures, so the union collapses to a partition (breaks F1 and Fig 9 :4-5, :54).
3. Import and habitat are shown to be the same kind of thing operating on the same slot (breaks the two-domain split, Fig 10 :68).
4. The residual is shown to be fully recoverable from a single global aggregate, so per-slot indexing is unnecessary (breaks Fig 1 :19, :22).
5. A figure re-census restores a single-root derivation that the six-term mapping was wrongly excluded from (reverses the Strain 1 retraction).

If any fires, the shape is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 7. Recommendation

1. Ask the literal single-driver question as `gap`, and offer the shape instead. Do not force a name where Fig 9 :32 returns a kind of thing.
2. Unbundle before searching (Fig 9 :54). Treat capital, ideas and institutions as a union of overlapping conditions with separate loops.
3. Order by dependency (Fig 3 :20). Measure which link stops the chain per country and era before ranking any driver.
4. Keep the per-slot residual (Fig 1 :19). Do not let a pooled coefficient select the answer.
5. Lead outreach with the shape and the refuter (Fig 10 :52 *"Bring a characterised residual, never the source."*), and never pool later agreement as corroboration.

---

## 8. Canonical usage check and retraction log

Two local sources govern how the figures may be used. `FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* The canonical limit is that the framework reports *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. `THE_FORMULA.md` step 7 separates SEARCHED, INWARD and OUTWARD: no atom closes R here, so SEARCHED was run first (the literature is large but shares an evidence pool), INWARD was refused (no sharper growth instrument was built from a worse one in this run), and OUTWARD was used only to describe the residual in effect terms before naming a frame.

| earlier reading | status after the canonical check |
|---|---|
| "the deepest driver is technology" | **Withdrawn as a figure verdict.** Solow and Jones make it a strong world claim, but Fig 9 :32 returns a kind of thing. Retained as a binding from the economics frame, provenanced (F3). |
| "institutions are the real answer, so technology is wrong" | **Withdrawn as a figure verdict.** AJR supports it in the world, but F1 shows the two are a union, not rival names (F4). |
| "capital and education cannot matter" | **Withdrawn as stated.** F2 says only that they cannot set the long-run *rate* inside the closure. Levels and transitions remain real, and Solow's embodiment passage is retained. |
| Six-term mapping of growth drivers onto the substrate | **Retracted** after the strain test (§5). Replaced by a generic closure reading of Fig 13 :115 and a declared `general` analogue in `06`. |
| "one hard question with one deepest root" | **Retracted.** Fig 9 :4-5 and :54-57 govern a union compound. Instruction: split rather than search. |
| Fig 6 versus Fig 11 apparent conflict | **Not strained.** Re-census: closure (atom) and contact (habitat) are different objects, Fig 10 :68. |
| The shape-not-a-name limit | **Canonically confirmed.** It applies here to the *single-driver slot*, not to the shape of the constraints. Naming the constraints (union, closure, contact) is what the derivation does. |

### Updated verdict

The literal question receives `gap`: the figures do not name a single deepest driver and their own rule forbids inventing one. What survives is a `specified` shape, triangulated across Fig 9, Fig 6, Fig 8 and Fig 11: the drivers form a union of overlapping conditions; pure accumulation inside a closure cannot set the long-run rate; any deepest driver must have the shape of an import from a frame whose closure differs and of a habitat condition that changes contact; and per-slot measurement, not pooled agreement, is what could settle which binds in a given place and era. Strains after re-census: none live, one retracted mapping, one declared analogue.
