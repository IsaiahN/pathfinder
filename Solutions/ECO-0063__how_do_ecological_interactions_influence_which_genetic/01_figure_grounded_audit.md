# Figure-grounded audit: how ecological interactions influence which genetic traits spread

**Mode of this document: `general` on the structural shape, `specified` on the per-domain verdicts, `gap` on the identity of winning traits. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19, opened 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Primary: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the seat map field guide (as carried in the local framework set). Secondary world sources actually opened 2026-11-23 are listed in `10_source_ledger.csv`.

## Proposal header (seat reasoning, five lines)

```
DECIDES:    If ecological interactions are the habitat's relations through which the ground votes on
            standing heritable variation (B), answer with a per-slot filter plus an import condition
            and an enumerated habitat. If interactions generate adaptive variation on demand (A),
            answer with a generative-mechanism claim. A = B? No: they predict different things when
            standing variation is removed (Fig 11 :48, Fig 6 :21-22).
HOURS:      One derivation seat plus one simulated auditor, roughly 1.5 hours of agent time. Hours
            are a contact/budget estimate only and never enter the verdict (Fig 12 :125-127).
PRIOR CASE: None found in this folder's question set for this exact residual. The imported exemplar
            QMGR-0037 uses the same census method on a physics composition; the method carries,
            the answer does not (Fig 4 :22-23).
ANALOGUE:   A predator-prey chemostat with and without standing prey variation. Actors: grazer,
            algal genotypes. Currency: defence traits and grazer growth. Anchor: measured genotype
            frequencies and densities. Source opened 2026-11-23 (Wikipedia, Eco-evolutionary dynamics).
LIMIT:      At one locus versus a whole genome, and across one generation versus a lineage, the
            per-slot claim must not silently become a global average (Fig 1 :19, :22).
```

---

## 0. The residual, in effect terms

We observe that frequencies of heritable traits in a population move in directions that line up with the community around it: predators, prey, competitors, pathogens, pollinators, mutualists. We do not see why *these* traits rather than others, nor why the direction flips when the community changes.

- **Effect to explain:** a variant's frequency rises when its bearers leave more descendants *given the current contact configuration*, and falls when they do not. The residual is the gap between the trait distribution we predict from inheritance alone and the trait distribution we measure after selection (Symbols table :36-40: "The gap between prediction and observation. The central quantity: everything the system does is driven by it. It is the aim, not only the error signal, and it is always a slice").
- **Option A:** ecological interactions generate the adaptive variation that spreads. Leads to: adaptive directional change with no segregating variation and no import.
- **Option B:** ecological interactions sort variation already in the closure or imported by mutation and gene flow. Leads to: adaptive change requires standing variation or an imported atom, and the sign of the effect is relative to the current residual.
- **Bound ordinary term (Formula, "Direction"):** "ecological interactions are the habitat's relations through which the ground votes on standing heritable variation, indexed per trait slot". Binding it makes the sought-for shape refusable by the same test as everything else.

---

## 1. DOMAIN CENSUS (before any figure line is chosen)

### 1a. R by arity, symmetry, scale (Fig 9 :22, :27-28)

- **Arity:** many. One population's trait vector against a community of interactors and conditions. More than two readers of one event, so not a seam. Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
- **Symmetry:** asymmetric. Predator and prey are not interchangeable, and the same interactor changes sign with the residual. Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
- **Scale:** generational for frequency change, community for the interaction web, lineage for feedback. Fig 12 :121: "cycle. The output re-enters as input." A one-generation reading that omits the reverse edge is a different object from the lineage reading.

### 1b. One line per domain: actors / currency / anchor

No nameable anchor means it is not a domain yet. Each domain below has one.

- **D1, the population-genetic frame (the library Γ).** Actors: alleles, genotypes, recombination. Currency: allele frequency, heritability, fitness covariance. Anchor: measured allele frequencies across generations, a counter (Fig 2 :29: "A measurement, an experiment, a counter, a market, a patient outcome"). Question type: partition of what composes inside closure(Γ) versus what must be imported.
- **D2, the ecological habitat (the community).** Actors: species, individuals, relations. Currency: interaction effects on survival and reproduction. Anchor: a manipulative field or mesocosm measurement of an interaction's effect on fitness. Question type: **union**, not partition (overlapping conditions: predation ∩ competition ∩ pathogen pressure), with each overlap its own compound (Fig 9 :54-57).
- **D3, the ground of selection.** Actors: environments and descendants. Currency: survival and reproductive outcomes. Anchor: the actual outcome, which does not update on what any ecologist thinks (Fig 11 :73: "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."). Question type: unmaintained selection in the field, maintained selection in breeding or assisted gene flow.
- **D4, the eco-evolutionary compound.** Actors: the evolved population and the interaction web it changes. Currency: the strength and sign of the reverse edge from trait change to interaction change. Anchor: a measured change in interaction strength after trait change. Question type: compounding cycle with its own loop, not a harder case of D2 (Fig 9 :57: "a case in two conditions is not a harder case of either").

### 1c. Partition or union

D1 is a partition question at first order (what composes versus what is imported). D2 and D4 are **unions**: a single lever that changes only predation leaves the competition and pathogen intersections standing. The answer to "which trait spreads" is therefore not one verdict averaged across conditions; it is a set of per-slot, per-condition verdicts. Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

### 1d. Order by dependency (Fig 3 :20)

The chain runs: (1) heritable variation present in Γ, or an import awaited; (2) heritability and a vocabulary for the trait; (3) the residual described per slot, so progress can be stated; (4) the relevant interactor in contact, enumerated from the habitat; (5) a ground measurement over generations. Effort spent at (5) cannot rescue a break at (1): "Optimising a link that already works cannot rescue one that does not" (Fig 3 :19). The middle link, having terms for what a situation offers and saying what counts as progress, is where this literature is weakest: "A link with no instrument is not a link that works. It is a link nobody has looked at" (Fig 3 :27).

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per slot, not aggregated; ground is the only metric | per-trait verdicts, never a genome-wide mean |
| **2 The Ground** | anchor must not update; agreement is not evidence | field fitness is the anchor; consensus is not |
| **3 Dependency Chain** | order of dependence; break below the chain | standing variation before selection before measurement |
| **4 The Membrane** | method crosses up, recording does not; round trip gap | carry the census method, not a species list |
| **5 Mint Pipeline** | three guards, MDL bargain, settlement | an allele rises when it pays, but ecology is not the mint |
| **6 Closure / Reachability** | only import moves the wall | mutation and gene flow add atoms; selection composes inside |
| **7 Room Chain** | variation inside, selection between; ground votes | selection between variants is the ground's vote |
| **8 Union Surplus** | closure idempotent; low overlap buys surplus | different frames (genetics, field ecology) can cross an atom |
| **9 Leave / Arrive** | describe residual first; union before search; filters not witnesses | enumerate habitat before choosing mechanism |
| **10 Ground Maintainer** | carry a characterised residual; verifier cannot reconstruct | record the refuter before the allele-frequency claim |
| **11 The Habitat** | relations named; valence residual-relative; cascade; introduction not exclusion | the decisive figure for this question |
| **12 The Bond** | arrangement, cycle, functional group, two currencies | feedback is a cycle; same allele in another arrangement is a different substance |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable as verdict | no figure returns a universal winning allele |
| **Operators / Symbols** | R per slot; habitat enumerated; ground is anchor | notation for the census above |

Strains are named in section 6, not smoothed over.

---

## 3. Findings F1 to F9

Each finding states its domain, quotes the governing figure line verbatim *before* the conclusion, marks its mode and triangulation status, and gives a refuter.

### F1 — Ecological interactions are relations in the habitat, not a standing list of good actors (D2)

**Fig 11 :47** "relations: pollination, predation, competition, dependency"
**Fig 11 :49** "An actor's valence is relative to the residual, not a property it carries."
**Fig 11 :51** "No standing list of good actors survives a change of residual."

The question asks how interactions influence *which* traits spread. The figures answer at the right level: the actors are already named as relations, and their valence is not carried by the actor. A predator selects for camouflage in one prey and for speed in another; a pollinator selects for one flower shape under one competitor set and another shape under a different set. There is no trait that is simply "good". The figure makes the same point about interaction kinds: **Fig 11 :50** "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."

**Verdict (D2): `general` structural, `specified` for any named interaction in a named community. Triangulated** across Fig 11 :47, :49-51 and Fig 11 :48 ("You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."), two lines with different jobs (inventory versus valence) and low overlap.

**Refuter:** a documented case where the same interactor has the same sign on the same trait in two communities under opposite selection regimes, with the interaction strength measured in both. If it holds, valence is carried by the actor after all and F1 falls.

### F2 — The effect is indexed per trait slot, not read as a population average (D1)

**Fig 1 :19** "The residual is indexed by object slot, not aggregated."
**Fig 1 :13** "a global R near zero with one live slot residual is a legal state"
**Symbols table :43** "One object, region or entity being tracked. R is measured per slot, never as a single global number."

A trait frequency rises or falls at a locus. A population mean fitness or mean phenotype can stay flat while individual loci move in opposite directions. The correct object of "which genetic traits spread" is the vector of per-locus changes, not the scalar mean. Fig 1 :22 gives the failure mode: "Aggregating across slots is how a live signal disappears into an average."

**World corroboration (secondary):** the Price equation, opened 2026-11-23, states "The equation uses a covariance between a characteristic and fitness, to give a mathematical description of evolution and natural selection" and warns that "There may be cases where the average remains unchanged (and the covariance between fitness and characteristic is zero) while evolution is nevertheless in progress." This is the same quantity read from a different field: covariance is formed per type, sign is read per trait, and the mean can conceal the movement. Fig 1 and a mathematical source with genuinely low overlap agree.

**Verdict (D1): `specified`. Triangulated** (Fig 1 :19/:13 plus the Symbols table, different documents inside the framework, and the Price equation from outside).

**Refuter:** a measured case in which the population mean of a heritable trait shifts across generations while every locus frequency at that trait is unchanged. That would show the spread is plastic or migratory rather than genetic, and the claim as worded fails.

### F3 — Interactions sort standing variation; they do not mint it (D1, D2)

**Fig 6 :21** "MINT composes inside the closure and can never add an atom."
**Fig 6 :22** "IMPORT adds an atom, and the added atom is what expands the closure."
**Fig 8 :32** "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

Selection is a reweighting of what is in the library. A new allele enters by mutation, recombination of existing atoms, or gene flow. The rotifer-algal control opened this session is the ground-facing analogue: "In the single clone algae, prey evolution was inhibited because of the lack of variation." Without the atom, the interaction cannot select a defence up. This also separates the two options in the residual: option A is refused.

**Guard reading (Fig 5 :21)**: "the gap has real mass somewhere". A selection pressure with no heritable variation is a gap with mass but no mint, because the novelty guard is not met. The three guards are a product, not a checklist (Fig 5 :41): "Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."

**Verdict: `specified`. Triangulated** (Fig 6 :21-22 and Fig 8 :32 are two figures with different subjects, wall-moving and idempotence, plus the chemostat control from ecology).

**Refuter:** a documented adaptive allele-frequency rise at a locus with zero segregating variation at that locus and no mutation, immigration or introgression inside the measurement window. If it held, selection would be creating atoms and F3 would be false.

### F4 — Contact cascades, so the habitat must be enumerated outward (D2)

**Fig 11 :52** "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."
**Fig 11 :44** "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

The same expansion is in the world source opened this session: DDT biomagnifies up the food chain and caused eggshell thinning and population decline in predatory birds (Wikipedia, Biomagnification, 2026-11-23). For a genetic trait, the second-order interactor (a predator of the pollinator, a parasite of the competitor) can set the selection pressure even when it never touches the focal population. First-order enumeration is how a study misses the cause.

**Verdict (D2): `specified`. Triangulated** (Fig 11 :52 and :44 are one figure but two distinct moves, cascade and enumeration; the DDT record is an independent low-overlap witness from ecotoxicology).

**Refuter:** manipulate the abundance of a second-order interactor while holding direct interactors fixed and show no change in the selection gradient on the focal trait across two independent systems. Then the cascade clause is dead for that trait.

### F5 — The ground votes; agreement among researchers does not (D3)

**Fig 11 :56** "Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept."
**Fig 7 :35** "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."
**Fig 2 :35** "Alignment is triangulation, not negotiation. A mirror cannot correct you."

In the unmanaged case natural selection is the loop with no maintainer: differential survival and reproduction is the anchor. Fig 11 :36 puts it plainly: "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran." A literature consensus that a trait is adaptive is a room's agreement, not a vote from the ground. The ground-facing case in the opened literature: Atlantic salmon populations showed pathogen-driven selection with specific MHC alleles affecting resistance and a decrease in the susceptibility allele through time (Pelletier, Garant and Hendry 2009, opened 2026-11-23). That is an allele-frequency time series, not an expert vote.

**Verdict (D3): `general` structural, `specified` for any measured case. Triangulated** (Fig 11 :56, Fig 7 :35 and Fig 2 :35, three figures with different subjects: selection, handoff, alignment).

**Refuter:** a stable consensus in the literature that a trait spread by selection with no allele-frequency time series, no experiment and no counter of any kind. That would be a verdict from agreement and would falsify the claim that the ground is the only anchor here.

### F6 — The eco-evolutionary feedback is a union compound and a cycle (D4)

**Fig 9 :57** "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."
**Fig 12 :121** "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
**Fig 9 :54** "And when the split lands on a union rather than a partition, unbundle before you search again."

Evolved traits alter the interaction web, which alters the selection pressure, which alters the traits. Treating this as one harder selection problem loses the reverse edge. It is a compound with its own loop, and the sign of the loop decides whether it closes. The opened ecology source defines the same object: "We define eco-evolutionary feedbacks as the cyclical interaction between ecology and evolution such that changes in ecological interactions drive evolutionary change in organismal traits that, in turn, alter the form of ecological interactions, and so forth" (Post and Palkovacs 2009).

**Verdict (D4): `specified`, ungrounded for any particular system. Triangulated** (Fig 9 :54/:57 union and Fig 12 :121 cycle, plus an independent ecology review).

**Refuter:** in a system with a measured forward edge (interaction changes trait), show the reverse edge (trait change alters interaction strength) is zero under controlled manipulation. Then the object is a chain, not a cycle, and F6 must be narrowed to that system.

### F7 — Managed cases run the same loop with a seat, and the seat can only introduce (D3)

**Fig 11 :61** "The seat's power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."
**Fig 11 :66** "Isolation is not removal of the habitat. It is substitution of one habitat for another."
**Fig 6 :24** "Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."

In breeding programmes and assisted gene flow there is a maintainer, so the same loop runs with a seat (the RSI Trap essay: "Natural selection is what the loop looks like when there is no one maintaining the ground"). The seat adds an actor or an allele; it cannot erase contact. Isolation substitutes a habitat, with two silent failures: what was not reproduced and what came with the transplant (Fig 11 :68-69). An imported allele needs a source gate and a shadow test (Fig 6 :23-24), otherwise a wrong atom is installed at a cost above starting from primitives.

**Verdict (D3 managed branch): `specified`, triangulated** (Fig 11 :61/:66 and Fig 6 :24, different figures and different quantities).

**Refuter:** a reproducible intervention that removes an interactor from a habitat without substituting another contact set. Since contact is a fact about the world, this is expected to fail; if it succeeds, the asymmetry claim is wrong.

### F8 — No figure line names the winning trait: a declared `gap` (all domains)

**Fig 9 :32** "you get a kind of thing, never the answer itself"
**Fig 13 :134** "Unreachable is a verdict here, not a silence"
**Fig 13 :135** "It cannot say which primitive is missing, because naming it would mean already holding it."

The figures return the shape: habitat relations sort standing heritable variation per slot, with import and cascade conditions. No figure line returns "the allele for beak depth wins under drought" or a universal interaction strength. That is a measurement in a particular community, not a derivation. The opened source on measurement (Hard Problem is About Source) gives the reason: "If several paths create the same behavior, then behavior is a projection with lossy information." An allele-frequency rise can come from selection, drift, gene flow or a change in sampling, and the reading alone does not name the source. A discriminator is owed.

**Verdict: `gap`, of the shape-not-a-name kind, reported as unreached rather than as silence. `general` on the claim that the identity is not derivable here.**

**Refuter:** a figure line that, after re-census, governs the identity of a specific allele under a specific interaction. None was found in the full figure text. The refuter is therefore external: an instrument or a derivation that names the source of a frequency change where several sources give the same reading.

### F9 — What actually survives (defensible residue, with mode attached)

| claim | mode | figure / status |
|---|---|---|
| Ecological interactions are the habitat's relations, with residual-relative valence | `general` | Fig 11 :47, :49-51, triangulated |
| Selection acts per trait slot and can hide inside a flat population mean | `general` | Fig 1 :19, :13; triangulated with the Price equation |
| Interactions reweight variation already present; new atoms require mutation, recombination or gene flow | `specified` | Fig 6 :21-22, Fig 8 :32; triangulated |
| Contact must be enumerated outward, including second-order interactors | `specified` | Fig 11 :52, :44; triangulated with the DDT record |
| The ground is differential survival and reproduction, not expert agreement | `general` | Fig 11 :56, Fig 7 :35; triangulated |
| Trait change and interaction change form a cycle when the reverse edge is present | `specified` | Fig 12 :121, Fig 9 :57; triangulated |
| Managed cases introduce alleles or actors and substitute habitats; they cannot subtract contact | `specified` | Fig 11 :61, :66; triangulated |
| Which allele wins in a named community | `gap` | Fig 9 :32, Fig 13 :134-135; unreached |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: "a falsifier written before the run is a design instrument, not only an honesty device" (seat map field guide, as carried locally). The shape claim is refuted, narrowed or withdrawn if any of the following holds:

1. A heritable trait rises in frequency at a locus with zero segregating variation and no mutation, immigration, recombination or introgression in the measurement window (breaks F3).
2. A population mean of a heritable trait shifts across generations while every locus frequency at that trait is unchanged (breaks the genetic half of the claim; plasticity and movement remain).
3. The same interactor has the same sign on the same trait in two communities under opposite selection regimes, with interaction strength measured in both (breaks F1).
4. Manipulating a second-order interactor never changes the selection gradient on the focal trait in two independent systems (breaks F4).
5. A measured forward edge from interaction to trait with a zero reverse edge from trait change to interaction strength (breaks F6 for that system).
6. A reproducible intervention removes an interactor from a habitat without substituting another contact set (breaks F7).
7. An instrument discriminates among selection, drift and gene flow as the source of the same allele-frequency reading (closes F8 rather than refuting it; this is the ground reading that would move the verdict to `grounded`).

If any of 1 to 6 fires, the relevant finding is withdrawn. Until at least one ground reading is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape and the refuter, not with a species list. Fig 10 :52: "Bring a characterised residual, never the source."
2. Enumerate the habitat outward from the focal trait before choosing a mechanism. Fig 9 :28: "describe it before you go looking, or any frame you pick will seem to fit" (the source extract reads "describe it before you go looking, or any frame you pick will seem to fit" at Fig 9 :27-28).
3. Measure per locus across generations; do not report a genome-wide mean as if it were the spread of traits (Fig 1 :22).
4. Separate the menu from the filter. New alleles are imports with provenance; selection is the ground's vote on what is already there (Fig 6 :21-24).
5. In managed cases, state what was introduced, where it came from, and what habitat was substituted. Introduction is available; exclusion is not (Fig 11 :61, :66).
6. Use the public institutional venues in `03_public_contact_points.csv` and ask for a refutation rather than belief. Fig 4 :22: "Only methods cross up. Only head starts come down." Send the generator, not a recording of one result.

---

## 6. Canonical usage check and strains

Two rules govern the use of the figures, read after the first five sections:

- The canonical figures README (`FIGURES_README_canonical.md`; also fetched from the public repo branch 2026-11-23) says the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary" and that "a reading that makes one contradict another has misidentified its domain, not found a flaw". The framework returns "what a missing thing would have to look like (a shape, not a name)" and stops where instruments stop distinguishing, recording the lineage. From the README: "Indiscernibility is not identity." Quotes in this section are README quotes, not figure quotes.
- The formula's mode rule and direction rule bind every claim above: a frame cannot check the direction of its own question, so the sought-for shape was bound as an ordinary term in section 0 and then made refutable in section 4.

### Strain S1: mapping the physical six-term set onto genes (dissolved by re-census)

A first pass tried to read allele as one of the six substrate terms of Fig 13. That strains the line "No system functions without any of them, none is built from the others, and everything else is a composition across the two kinds" because a gene is not a physical state at the base stratum. Re-census: Fig 13 governs the base stratum; the method crosses strata with renamed actors. Fig 4 :20: "Only the actors, the currency and the anchor change." Fig 10 :68: "Different actors, a different currency, a different ground, and a lossy transform between." So we carry the *rules* (per-slot residual, closure and import, enumerated habitat, ground that does not update) and do not name genes as space, time, energy, spectrum, gradient or network. Different objects, no contradiction.

### Strain S2: Price covariance looks like forbidden aggregation (dissolved by re-census)

Fig 1 :22 forbids aggregating across slots. The Price equation covariance is computed over the population. Re-census: the covariance is formed from per-type values and the sign is read per trait; the aggregate mean is exactly the quantity the criticism section says can stay flat while evolution proceeds. Different quantities (per-slot operator versus scalar summary), so no strain after re-census. Both readings are kept.

### Strain S3: "selection" as mechanism versus as ground (named, not hidden)

Fig 11 :36 says "Nothing was intelligent; selection ran" and Fig 11 :73 separates habitat from ground. The opened RSI Trap essay adds that "Natural selection is what the loop looks like when there is no one maintaining the ground." Calling selection a mechanism that *does* something can imply a maintainer. The resolution is a role distinction, not a contradiction: in the unmaintained case selection is the name applied afterwards to the lineage that met its ground; in the managed case there is a seat and the same loop has an actor. This strain is live at the level of wording and is recorded rather than erased.

---

## 7. Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "interactions generate variants" (option A) | **Retracted.** Fig 6 :21-22 and Fig 8 :32 plus the chemostat control give the opposite prediction. Preserved here as the refused option. |
| "interactions are a list of beneficial or harmful species" | **Retracted and replaced.** Fig 11 :49-51 makes valence residual-relative and relations non-kinds. |
| "a genome-wide mean tracks which traits spread" | **Retracted.** Fig 1 :19/:22 and the Price equation criticism show the mean can be flat while loci move. |
| "the six physical terms name genetic entities" | **Retracted by re-census (S1).** The method crosses strata; the atoms are not renamed. |
| "Fig 13 and the Price equation conflict over aggregation" | **Not strained (S2).** Different quantities. |
| Fig 11 habitat enumeration as the governing figure | **Canonically confirmed.** The figures README's own short form says to name actors, currency and anchor then apply the loop, and the canonical limit is a shape, not a name. |
| F8 as `gap` | **Confirmed.** Fig 9 :32 and Fig 13 :134-135. A search that finds no governing line is reported as unreachable, not as silence. |
| Second seat independence | **Not claimed.** The auditor in `11_audit.md` is simulated and shares this evidence pool; its agreement is internal consistency, not corroboration (Fig 2 :40). |

## 8. Updated verdict

The shape survives: ecological interactions are the habitat's relations, their valence is relative to the residual, they sort standing heritable variation per slot, and the ground votes through differential survival and reproduction; contact cascades outward; the eco-evolutionary case is a cycle; managed cases introduce and substitute rather than subtract. What does not survive is any claim that the figures name a winning allele, that interactions mint variation, or that a population mean is the right object. Strains after re-census: one live wording strain (S3), two dissolved (S1, S2), none hidden. Mode: `general` on the shape, `specified` on per-domain verdicts, `gap` on the identity of the traits, not `grounded`.
