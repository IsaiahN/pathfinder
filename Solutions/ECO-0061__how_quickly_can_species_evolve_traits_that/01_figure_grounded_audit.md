# Figure-grounded audit: how quickly can species evolve traits that reduce vulnerability to a changing environment?

**Mode of this document: `specified` on the substantive shape, `general` on the structural claim.** No measurement was taken in this derivation, so nothing here is `grounded`. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: a simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is simulacra and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Canonical local extract `FRAMEWORK/reference/03-FIGURES_TEXT.md` (every `Fig N :line` quote below is copied from it), `FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the five public world sources opened on 2026-11-23 and recorded in `10_source_ledger.csv`. Unlike the QMGR exemplar's essays, these world sources are not authored by the framework's author; they are independent of the figures' evidence pool.

---

## 0. The question in effect terms

> **Q (ecology.txt :76):** How quickly can species evolve traits that reduce their vulnerability to changing environments?

**Residual stated as an effect.** A population of a species sits at a trait distribution. The environment moves, so the trait distribution that would keep the population away from the ground (death, failure to replace itself) moves with it. The residual `R` is the gap between the population's current per-trait values and the values that would reduce vulnerability. The question asks for the **rate** at which that gap closes: trait change per generation, per trait, per environmental axis.

**What is being decided, and what each option leads to.**

- **Option A:** the rate is set mainly by the strength of environmental pressure. Leads to: effort spent increasing pressure, and a prediction that any strongly pressured population adapts fast.
- **Option B:** the rate is a product of two factors, the fidelity with which the trait is transmitted across the generational handoff and the pressure the environment exerts on the population. Leads to: a checkable stall condition (either factor at zero means no response), a per-trait vector rather than one species-wide number, and a lag under a moving optimum.

**The sought-for shape bound as an ordinary term (Formula, "Direction").** Before searching, I write down what an answer would look like and let it accrue a residual like anything else: *an answer has the form of a per-slot rate, is a product of a transmission term and a pressure term, is zero when either term is zero, is bounded per generation, and trails a moving optimum rather than arriving at it.* This binding makes the preference refusable by the refuter in §4 instead of leaving it invisible.

---

## 1. Residual description and domain census

**R by arity, symmetry, scale.** Arity: many. One slot per trait and per environmental axis, so `R_s` is a vector, not a scalar (Fig 1 :19; Fig 1 :22). Symmetry: the response is ordered. Selection moves the trait toward the current optimum; it is not a symmetric join of two operands. Scale: the response is per generation (one handoff) and compounds across generations, with a further crossing from allele to individual to population to lineage (Fig 4).

**One line per domain. A domain with no nameable anchor is not a domain yet.**

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1, population and quantitative genetics | individuals, alleles, additive genetic variance, heritability `h²`, selection differential `S` | trait change per generation `R` | measured heritability and measured selection in a population (an instrument, not an opinion) | partition: which compositions of variance and pressure produce a response |
| D2, the changing habitat and environment | conditions (temperature, water, season), predators, competitors, contaminants | selection pressure, the environmental side of `S`; contact between organism and habitat | fitness and mortality, which settle and do not update with what a frame thinks | union: several conditions bind at once, so the residual is a compound |
| D3, the generational and scale frame | generations, inherited distributions, settled traits, lineages | response per handoff, then the compounding of responses | the lineage record; the round trip across scales | ordered by dependency: inherit, then select, then carry forward |
| D4, verification (this simulated run) | expert readers, figures, world sources | agreement and residual | the ground, never agreement | here all seats draw on one evidence pool, so independence is low |

**Partition or union.** Union, not partition. Several conditions (temperature, food, predators, contaminants) can bind the same population at once; a lever that clears one condition leaves the intersection standing. Fig 9's rule applies: a case in two conditions is not a harder case of either. The species-wide question must be unbundled into per-trait loops before it is searched.

**Order by dependency (Fig 3).** Heritable variation must exist before selection can move a trait (the vocabulary link); the adaptive optimum must be stateable before progress can be measured (the objective link); the response must be carried into the next generation (the learn-and-carry link). Effort spent above a break cannot rescue a link below it (Fig 3 :19).

---

## 2. Figure census

| figure | bearing | verdict after strain test |
|---|---|---|
| **1 The Agent** | residual is per slot, never aggregated | governs the vector-of-rates reading (F2) |
| **2 The Ground** | anchor is a measurement; agreement from a shared pool disqualifies | governs what would settle the numeric rate and the outreach discipline (F9, F10) |
| **3 Dependency Chain** | break at the middle link; optimising a working link cannot rescue a broken one | governs the variance-before-pressure ordering (F4) |
| **4 The Membrane** | same loop at two sizes; round trip has a gap | governs per-generation to lineage scaling and `R_T` (F7) |
| **5 Mint Pipeline** | three guards as a product; a gate is not the ground | no new primitive is minted here; the shape uses terms already held |
| **6 Closure / Reachability** | import moves the wall; instruments improved from worse ones | no import claimed; the numeric rate is a ground measurement, not a new atom (F9) |
| **7 Room Chain** | `progress per handoff: R = h² × S`; two factors; zero either and the chain runs in place | **the governing figure** (F1, F3, F6) |
| **8 Union Surplus** | convergent derivation and adopted import look identical | forces the provenance honesty in F8 |
| **9 Leave / Arrive** | describe the residual before choosing a frame; you get a kind of thing | governs the union reading and the refusal to give a number (F9) |
| **10 Ground Maintainer** | bring a characterised residual; verifier non-access | governs the two-stage offer (F10) |
| **11 The Habitat** | selection ran; capability is agent-and-habitat; habitat updates, ground settles | governs the vulnerability-as-contact reading (F5) |
| **12 The Bond** | a settled molecule becomes an atom; isomer and functional group | governs recursion across generations (F7) and the competing-route analogue in `06` |
| **13 Minimum Viable Set** | two kinds, cross-kind composition | no new primitive is needed; the response is a composition over existing terms |
| **Operators table** | `⋛` comparison, `→` sequence | per-trait rate is a comparison of successive distributions; no new operator claimed |
| **Symbols table** | `R` is the aim and the error signal, always a slice | confirms the per-slot reading of `R` |

---

## 3. Findings

### F1 - The governing line: the rate is a product of two factors (decisive)

Fig 7 :26, verbatim:

> **"progress per handoff: R = h² × S"**

Fig 7 :37-39, verbatim:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"**
> **"the bracket's fidelity across the handoff"**
> **"the ground's pressure on the room"**

The figure writes the quantity the question asks for, `R` per handoff, and gives it as a product of two factors. Mapping without strain:

- `h²`, "the bracket's fidelity across the handoff", is the fidelity with which the trait is transmitted from one generation to the next. In quantitative genetics this is narrow-sense heritability, the additive component of variance relative to phenotypic variance. The world source *Heritability / Breeder's equation* states the same product: "the expected response to selection of a trait with known narrow-sense heritability (h2) can be estimated using the breeder's equation: R=h2S". Its definition of the second factor, "the Selection Differential (S) is defined as the average difference between the parent generation and the selected parents", matches "the ground's pressure on the room".
- `S`, "the ground's pressure on the room", is how strongly the changed environment favours the better-fitting variants.
- "Zero either and the chain runs in place" is the stall condition: `h² = 0` (no heritable variation) or `S = 0` (no differential pressure) gives no directional response.

**Mode: `specified` (the figure line is structural; the world equation is a separate, independent corroboration). Triangulated** between Fig 7 and the *Heritability / Breeder's equation* page, two frames with no shared evidence pool. **No strain.** Re-census check: the figure's "room" is the population's trait distribution at a time, and the "handoff" is generational transmission. This is a level choice (Fig 12 :104), not a claim that a population perceives; see F4.

**Refuter:** show that the response is additive (`R = h² + S`) rather than a product, or that a population with zero additive variance for the trait still shows a sustained heritable directional response under constant pressure.

### F2 - There is no single species-wide rate

Fig 1 :19 and :22, verbatim:

> **"The residual is indexed by object slot, not aggregated."**
> **"Aggregating across slots is how a live signal disappears into an average."**

The world source *Rate of evolution* defines the quantity as "the speed of genetic or morphological change in a lineage over a period of time", which invites one number per lineage. The figures forbid that aggregation. A species facing a changed climate has many `R_s`: heat tolerance, drought tolerance, phenology, disease resistance. Several may be live while the global average is near zero, which is a legal state in the figures' own terms. "How quickly can a species evolve traits?" is therefore a bundled question and must be reported as a vector of per-trait rates.

**Mode: `general` (structural). Triangulated** with Fig 1 and the Symbols table's definition of `R` as always a slice. **Refuter:** exhibit a case where a single scalar rate predicts each trait's response as well as the per-trait vector does.

### F3 - Variation is not adaptation; selection is where the ground votes

Fig 7 :33 and :35, verbatim:

> **"→ variation inside, selection between"**
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

Fig 11 :36, verbatim:

> **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there."**

A population containing resistant variants is not yet adapted; the variants are the room's internal variation. The change in frequency under pressure is the selection between rooms, and that is where the ground votes. This matches the independent source *Evolutionary rescue*: a population "persists due to natural selection acting on heritable variation". Both halves are required: heritable variation and selection.

**Mode: `specified`. Triangulated** (Fig 7 plus Fig 11 plus the independent *Evolutionary rescue* page, with Fig 2 :35's "A mirror cannot correct you" as the reason internal variation cannot certify itself). **Refuter:** show a trait frequency shifting directionally across generations with neither heritable variation nor differential pressure.

### F4 - Dependency order: variance before pressure

Fig 3 :19 and :27, verbatim:

> **"Optimising a link that already works cannot rescue one that does not."**
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

The common failure in this field is to ask how to increase selection pressure when the chain has stopped at the heritable-variation link. The independent review by Alexander, Martin, Martin and Bonhoeffer (2014) names "genetic variance or mutation rate" alongside "severity of environmental change" and "population size" as the essentially equivalent parameters that determine the outcome. More pressure cannot manufacture variance that is not there; Fig 6's "NOVEL means novel relative to atoms" makes the same point in the composition vocabulary.

**Mode: `specified`. Triangulated** (Fig 3 dependency order plus the independent peer-reviewed review). **No strain after re-census:** Fig 3 describes what any chain needs to proceed; it does not assert that a population consciously perceives the environment. The mapping is to the link's function, not to a cognitive faculty. Falsifier: a population whose response to selection is unchanged by removing all additive genetic variance.

### F5 - Vulnerability is a property of contact, not of the organism alone

Fig 11 :39, :40 and :73, verbatim:

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."**
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**
> **"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."**

"Reduce vulnerability to changing environments" is a contact claim. The environment that changes is the habitat (Fig 11 :43 "The habitat is enumerated, never composed."; :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."). The ground is fitness, which does not update. So `S` lives at the habitat/ground seam: the habitat supplies the conditions, the ground settles which variants persist. An intervention that changes only the organism's label without changing its contact does not reduce vulnerability.

**Mode: `specified`. Triangulated** (Fig 11 plus the *Evolutionary rescue* page's "extrinsic factors" and "human impact" sections). **No strain after re-census:** I initially tried to treat the changing environment as the ground itself, which would contradict "the ground is what settles, and it does not update". Re-census resolved it: the changing conditions are the habitat; fitness is the ground. The pressure `S` is the habitat's effect measured against that fixed ground.

**Refuter:** a demonstrated reduction in vulnerability from a change that alters no contact with any environmental actor or condition.

### F6 - Incremental, bounded, and lagging under a moving optimum

Fig 7 :30-31, :34 and :42, verbatim:

> **"every room closes some of the gap;"**
> **"no finite number of them ever arrives"**
> **"→ the truth is where the schedule is heading"**
> **"The chain approaches the truth only as the world runs out of ways to refuse it. Which means the next room you book is the direction you travel, and booking a room like the last one is how a chain stops travelling at all."**

Adaptation closes part of the gap each generation. No finite number of generations arrives at a perfect match, which is the figure's form of a moving-optimum lag. Both independent world sources say the same thing in their vocabulary: *Evolutionary rescue* describes "a stable lag of the mean trait value behind a moving environmental optimum, where the rate of evolution and change in the environment are equal"; Alexander et al. (2014) write that "Response to selection allows the population mean trait value to track the moving optimum, asymptotically establishing a constant lag distance", and add that if environmental change exceeds a critical rate set partly by available genetic variance and the width of the fitness function, the population faces deterministic extinction.

**Mode: `specified`. Triangulated** across Fig 7 and two independent world sources. **Refuter:** a population that reaches and holds a continuously moving optimum with zero lag, or a population that adapts despite an environmental rate beyond the critical rate given its variance and fitness width.

### F7 - Settled traits become substrate for the next round

Fig 12 :104, verbatim:

> **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"**

Fig 4 :22, verbatim:

> **"Only methods cross up. Only head starts come down."**

A trait fixed and settled in one generation becomes a term available to the next round of selection; the loop recurses. Across the generational membrane what travels is a head start (the inherited distribution), not a recording of one success. This is why the per-generation product compounds without needing a new primitive at each generation.

**Mode: `general` (structural). Single-source for the figure rule** (Fig 12), with the quantitative genetics literature as corroboration of compounding rather than of the figure's recursion claim. **Refuter:** show that a settled trait cannot serve as a substrate for further response, or that a lineage must re-mint its entire variance each generation.

### F8 - The figure line is an adopted import from breeding, confirmed by the record

Fig 8 :50-51, verbatim:

> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"**

The figure's `R = h² × S` and the quantitative geneticists' `R = h²S` are the same shape. I initially read this as a convergent derivation, where two frames arrive separately and only the record distinguishes them. **That reading was corrected after the essays were opened.** *How a Society of Agents Would Work* states, in the author's own words, "Figure 7's progress formula, R = h² × S, borrowed from breeding, reads directly: how faithfully partial results pass between agents, times how hard the checker selects." The word "borrowed" makes this an **adopted import**, not convergence. The lineage runs from Lush, Fisher and the selection experimenters into the figure, not the other way around.

What the figure adds is not a new biological law but a **placement**: the product is indexed per slot (Fig 1 :19), stalls at zero on either factor (Fig 7 :37-39), sits behind the variance link in dependency order (Fig 3 :19), lives at the organism-habitat seam (Fig 11 :39-40), and trails a moving optimum (Fig 7 :30-31). Those placements are the checkable surplus, and they are what the packet offers. The breeder's equation itself is credited to its originators.

**Mode: `specified` on the provenance claim. Triangulated** between Fig 8's provenance rule and the author's explicit "borrowed from breeding" record (low overlap: a figure rule and a dated essay statement). **Refuter:** a dated lineage showing the formula was independently derived inside the figure set before any breeding source was consulted; that would upgrade this to convergence, not change the shape.

### F9 - The numeric rate is a ground gap, not a silence

Fig 9 :32, verbatim:

> **"you get a kind of thing, never the answer itself"**

Fig 2 :29, verbatim:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

The figures give the kind of thing: a product, a stall condition, a vector, a lag. They do not give a number of generations for a named species, and no amount of searching inside the figure set will add one. Under Formula step 7 the three questions are distinct and I keep them apart:

- **SEARCHED:** is a numeric rate already in the figure closure and merely unfound? No. The closure contains the shape, not species parameters.
- **INWARD:** sharpen our own instrument. Here that means measuring `h²` and `S` for a particular trait in a particular population. The *Rate of evolution* page notes that estimating rates needs genomic and palaeontological data, i.e. instruments, not argument.
- **OUTWARD:** import a frame whose closure predicts the shape. This has already happened with quantitative genetics and evolutionary rescue (F1, F6), and it is recorded as an import with a source gate, not as a figure derivation (F8).

The honest verdict is **gap for the figures alone on the numeric rate**, while the shape is triangulated. "Unreachable is a verdict, not a silence." World sources give the conditions (critical rate, standing variation, lag) but no universal generations-to-adapt constant.

**Mode: `general` on the gap claim. Refuter:** a derivation of a species-specific adaptation time from the figure set without any population measurement.

### F10 - Outreach cannot use agreement as evidence

Fig 2 :35 and :40, verbatim:

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
> **"agreement about the world is worthless when the agreeing frames share an evidence pool"**

Fig 2 :42 and Fig 10 :42 and :52, verbatim:

> **"Buy independence in proportion to the cost of being wrong."**
> **"A verifier that can reconstruct the claim cannot verify it."**
> **"Bring a characterised residual, never the source."**

A list of evolutionary biologists selected for likely agreement would be a convention, not corroboration. The two-stage offer in `02_outreach_email.md` therefore sends the residual and the pre-registered refuter first, asks what the recipient would count as a failure, records that verdict before showing any theory, and only then offers links. Agreement after seeing the framework is never pooled as a witness.

**Mode: `general` (structural rule from the figures). Refuter:** a case where a group selected for receptiveness produced a refutation that changed the shape; that would show the correlation was not disqualifying here, and would require re-census, not a softer reading.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. **Product failure:** the per-generation response to selection for a trait is shown to be additive in heritability and pressure (`R = h² + S`), or proportional to pressure alone, rather than their product (breaks Fig 7 :26).
2. **Stall failure:** a population with zero additive genetic variance for a trait, under sustained differential pressure, shows a heritable directional response across generations (breaks Fig 7 :37-39).
3. **Vector failure:** a single scalar rate predicts each trait's response as well as the per-slot vector (breaks Fig 1 :19, :22).
4. **Lag failure:** a population reaches and holds a continuously moving optimum with zero lag, or adapts past the critical rate set by its variance and the fitness width (breaks Fig 7 :30-31 and F6).
5. **Contact failure:** vulnerability is reduced by a change that alters no contact between the organism and its habitat (breaks Fig 11 :39-40).

If any fires, the shape is withdrawn or re-censused. Until one is run, nothing here is labelled `grounded`.

---

## 5. Recommendation

1. Send the shape, not a number: per-trait response equals transmission fidelity times environmental pressure, stalls at zero on either factor, and lags a moving optimum (`specified`).
2. Unbundle the species-level question into per-trait slots before answering it (F2).
3. Lead with the dependency order: heritable variance first, pressure second (F4), and refuse the "more pressure" lever when the variance link is the broken one.
4. Record the breeder's-equation match as convergent provenance, not as a figure-derived biological law (F8).
5. State the numeric rate as a ground gap and ask for measurements of `h²` and `S` for a named trait, not for agreement (F9, F10).
6. Fig 4 :22: send the generator (the shape claim plus its refuter), not the recording of a conclusion.

---

## 6. Canonical usage check

Two local canonical sources were read after the findings and govern how the figures may be used:

- `FIGURES_README_canonical.md` states the figures "outrank everything else in the repo" and that "the quotes are the authority, not this summary." Its re-census rule (a reading that makes figures contradict one another has misidentified its domain) was applied twice: once to separate habitat from ground (F5) and once to separate figure primitives from second-order derivatives (F7). It also states the framework returns "a shape, not a name", which is why no adaptation time is named here.
- `THE_FORMULA.md` step 7 keeps SEARCHED, INWARD and OUTWARD distinct (F9), and its "Direction" section is why the sought-for shape was bound as an ordinary term in §0. Its mode rule is why every finding carries a mode.
- The eight essays were opened after the first six sections. They govern two things: the provenance of the product law ("borrowed from breeding", in *How a Society of Agents Would Work*), which changed F8 from convergence to adopted import, and the refusal to aggregate a bundled question (*The Library of Babel*), which corroborates F2 and F9. See `05_what_shape_means.md` §4 and §8.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| Tried to treat the changing environment as the ground | **Retracted.** Fig 11 :73 separates them: habitat updates, ground settles. `S` lives at the seam. Re-census, not a strain. |
| Read Fig 7's `h²` as generic "room quality" | **Narrowed.** It is transmission fidelity, which the independent source identifies as narrow-sense heritability. The figure's notation and the world equation agree; no strain. |
| Treated "how quickly" as one species-level number | **Retracted.** Fig 1 :19 makes it a per-slot vector; aggregation hides the live slots. |
| Considered using Fig 11's isolation/substitution law for organisms moving to a new habitat | **Removed as out of scope.** That is question ECO-0070's residual, not this one. Kept out rather than forced in. |
| Claimed the figure derived the breeder's equation | **Retracted and confirmed by the record.** Fig 8 :50-51 makes provenance decisive, and *How a Society of Agents Would Work* says Fig 7's formula is "borrowed from breeding". This is an adopted import, not a convergent derivation. The equation is credited to quantitative genetics. |
| Read "shape, not a name" as forbidding any named quantity here | **Narrowed.** The rule governs a missing primitive; heritability and selection differential are imported and held. What is refused is a species-specific number, not the two factors. See `05_what_shape_means.md` §8. |
| Fig 3 perception link read as requiring conscious detection | **Retracted.** The mapping is to link function only. Populations need no perception for selection to run (Fig 11 :36). |
| Fig 7 "no finite number arrives" vs world source "constant lag distance" | **Not strained.** Both are the same bounded, lagging shape at different vocabularies. |
| Numeric rate sought from figures | **Recorded as gap**, not silence (Fig 9 :32; Formula step 7). |

### Updated verdict

The shape survives and is triangulated: a per-trait adaptation rate equal to transmission fidelity times environmental pressure, zero at either factor, incremental per generation, and lagging a moving optimum. The species-wide scalar and the numeric generation count do not survive: the first is an aggregation the figures forbid, the second is ground work the figures cannot perform. Strains after re-census: **none hidden**; one provenance correction (F8: the product law is an adopted import from breeding, credited to quantitative genetics) and one ground gap (F9) are recorded openly.
