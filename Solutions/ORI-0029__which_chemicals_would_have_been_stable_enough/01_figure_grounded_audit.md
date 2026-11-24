# Figure-grounded audit: which chemicals would have been stable enough to accumulate on early Earth

**Mode of this document: `specified` on the per-domain claims, `general` on the cross-domain shape, `gap` on the literal standing list. Not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23): LLMs *"can quickly simulate an approximate answer/output with the formula"*, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 8.

**Sources.** Figure quotes: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local verbatim extract) and `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources: those in `10_source_ledger.csv`, all opened on 2026-11-23. No quote below was taken from a summary.

---

## 0. The question under audit, in effect terms

The ordinary wording asks for a **list of chemicals**. The effect they must satisfy is **persistence long enough to accumulate**. Three distinct effects hide in the one verb:

1. **Formation** (supply). A bond is made. Fig 6 :21: *"MINT composes inside the closure and can never add an atom."* Supply is a composition inside what the habitat already makes available, plus imports (meteoritic delivery, impact-generated atmospheres).
2. **Persistence** (stability). The bond survives the habitat's degradation channels. This is the actual residual.
3. **Accumulation** (concentration). A surviving species reaches a concentration where it can act as an operand for the next composition. Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it."*

A molecule that forms and is destroyed is supply without settlement. A molecule that persists but stays below a usable concentration is settlement without a route. The question is a **union of these conditions with residual-relative valence**, not a list of species with an intrinsic property called stability.

The sought-for shape was written down before the run and bound as an ordinary term (formula step "Direction"): **a per-species, per-habitat persistence claim, with binding conditions named, a concentration channel stated, the chemical name provenanced as an import, and a failure condition written in advance.** Every finding below is checked against that shape, so the preference can be refused rather than hidden.

---

## 1. Domain census (before any figure line was chosen)

### R by arity, symmetry, scale

- **Arity:** a molecule is a composition of operands joined by a bond. The residual is indexed by molecular species, one slot per candidate chemical, not by "the organic inventory". Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A pooled statement such as "amino acids were stable" throws away the only signal that says which species to look at.
- **Symmetry:** stability is **not** a property carried by an ingredient. It is a relation between a bonded arrangement and the habitat. Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* The same molecule is a benefactor in one habitat and a malfactor in another. Two different conditions (UV flux, hydrolysis) do not enter symmetrically into a single score.
- **Scale:** bond-level degradation (a bond breaks) and population-level accumulation (a concentration rises) are different scales. A transform between them loses information (Fig 4); the round trip from half-life to concentration carries a gap `R_T` that must be measured, not assumed zero.

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1 Composition / structure | atoms, typed bonds, molecules, isomers, catalysts, cycles, functional groups | which bonded arrangement persists and can be composed over | ground-measured persistence of the arrangement (half-life under stated conditions) | yes |
| D2 Habitat / geochemistry | conditions (light, water, temperature, season, terrain), mineral surfaces, borates, pH, UV flux, impact events | contact and persistence under a condition set | the actual early Earth environment, which does not update on what a model thinks | yes |
| D3 Accumulation / selection | molecular species, degradation channels, concentrating processes (evaporation, crystallization, mineral adsorption) | concentration; survival of the ground's filter | the ground: what survived is what the ground kept | yes |
| D4 Verification / settlement | instruments (half-life assays, NMR, GC/MS), experimental chemists, independent frames | ground contact, not agreement | an instrument or measurement that does not move when a frame pushes on it | yes |

All four have nameable anchors, so all four are domains. A fifth candidate, "the list of stable chemicals itself", has no anchor until a measurement is specified, so it is **not yet a domain**; it is the gap reported in F6.

### Partition or union

**Union**, not partition. A species persists where several conditions bind at once: its bonds resist the local hydrolysis regime, its functional groups survive the UV flux, and a concentrating process holds it above threshold. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."* One lever (for example, "form the amino acid") leaves the intersections standing, because the degradation condition still binds. An overlap is a compound with its own loop and its own verdict.

### Order by dependency (Fig 3)

1. Settle the bond and the arrangement before asking about persistence (D1 before D2): Fig 3 :19, *"Optimising a link that already works cannot rescue one that does not."*
2. Enumerate the habitat before assigning valence to any actor (D2 before D3): Fig 11 :43, *"The habitat is enumerated, never composed."*
3. Refuse before mint (formula step 2): a proposed name is a candidate, not an accepted term.
4. Let the ground decide names (D4 last): Fig 9 :60, *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

A reading taken below a broken link is a reading of nothing (Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*), so wherever a concentration claim appears without a measuring instrument it is marked as unassessed, not as weak.

---

## 2. Figure census

| figure | line(s) | bearing on this question | verdict |
|---|---|---|---|
| 1 The Agent | :19, :22, :27 | residual is per species, never a pooled inventory; a frame cannot score itself with a quantity it produces | per-species verdicts required |
| 2 The Ground | :29-30, :35, :40, :42 | the anchor is what settles persistence and does not move when frames agree; agreement from one evidence pool is not corroboration | names settle at instruments, not by review consensus |
| 3 Dependency Chain | :19, :27 | settlement before composition; no instrument means no assessment | order fixed |
| 4 The Membrane | :22-26, :30 | methods cross, recordings do not; round trip carries a gap `R_T` | a list is a recording; a persistence rule is a method |
| 5 Mint Pipeline | :26, :41 | the three guards are a product; a name that fails a guard is inert | most proposed names are candidates only |
| 6 Closure / Reachability | :21, :23, :24, :26 | synthesis cannot add an atom; only import moves the wall; instruments extend what can be represented | meteoritic and experimental inputs are imports with provenance |
| 7 Room Chain | :35, :36 | selection between rooms is where the ground votes; a room's agreement is variation | concentration is selection, not agreement |
| 8 Union Surplus | :32, :39, :50, :52 | closure is idempotent; no proof of absence; convergent derivation and adopted import look identical without the record | gap is declared, not filled; provenance is the whole issue |
| 9 Leave / Arrive | :27-28, :30-31, :32, :54, :55, :57, :60 | describe the effect before choosing a frame; you get a kind of thing, never the answer; union must be unbundled | the figures return a shape, not a list |
| 10 Ground Maintainer | :24, :42, :52 | the ground does not decay, the channel does; verifier non-access; bring a characterised residual | send the residual and refuter before names |
| 11 The Habitat | :36, :39, :40, :43, :46, :49, :51, :52-53, :61, :66, :70 | survival of the fittest with no maintainer; valence is relative; no standing list; conditions enumerated; isolation is substitution | decisive for the shape and for the gap |
| 12 The Bond | :5, :46, :94, :97, :104, :117, :119, :121, :123, :125-126 | arrangement is the substance; isomers differ in behaviour; catalysts and cycles survive use; two currencies do not add | decisive for D1 |
| 13 Minimum Viable Set | :134, :135 | the system can report out of reach and narrow, but cannot name a missing primitive | supports the gap verdict |
| Operators table | bonds and negation | a refutation is a negation, not a bond; a list can be refused | refusal precedes mint |
| Symbols table | `R`, `s`, `Γ`, ground | residual is a slice per slot; ground is not in the library | per-species indexing |

Strained readings are named and sent back to the census in section 7; none is smoothed over.

---

## 3. Findings

### F1 — Stability is a relation to a habitat, not a property carried by a molecule (decisive for the shape)

Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*
Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone."*
Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."*
Fig 11 :36: *"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."*

Early Earth had no maintainer in the seat. No bench chemist was choosing which molecules to keep. What remained is therefore not "the stable chemicals" in the abstract, it is the set that met its ground in a specific habitat. The same species can persist in freezing water and vanish at 100 degrees C. The world source states the contrast directly: the NASA-cited Wikipedia RNA world entry reports a nucleoside half-life of 19 days at 100 degrees C and 17,000 years in freezing water, adding that some argue this is *"too short on the geologic time scale for accumulation."* That is Fig 11 :49 in experimental clothing: the valence flips with the residual, not with the molecule.

Fig 11 :46 enumerates what to range against: *"conditions: light, water, temperature, season, terrain"*. A persistence claim without a stated condition set is not a claim about stability; it is an unbracketed reading.

**Mode:** `general` structural, `specified` per species and habitat. **Triangulation:** Fig 11 :49 / :39 (habitat domain) and Fig 2 :29 (anchor does not move) are low overlap, so the shape verdict is triangulated. **Refuter:** show a species whose persistence is invariant across habitats that differ in pH, temperature, and UV flux. That breaks Fig 11 :49 and the shape falls.

### F2 — A set of ingredients is not a molecule; the bond carries persistence

Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
Fig 12 :46: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."*
Fig 12 :94: *"The arrangement is the substance."*

A molecular formula records the inventory, not which bonds hold. Hydrolysis attacks a bond; UV photolysis breaks a different one; thermal decomposition is a third channel. Naming the elements (CHNOPS) tells you nothing about which arrangement survives. This is why the question cannot be answered by listing elements or even by listing formulas without the bonded arrangement.

**Mode:** `general`. **Triangulation:** Fig 12 :5 / :46 and the formose literature's report that at high pH and temperature sugars convert to carboxylic acids while their elemental inventory is largely conserved. Different domains (notation and experimental chemistry), low overlap. **Refuter:** exhibit two arrangements with the same ingredients and the same measured persistence profile across all degradation channels tested. That would show the bond carries nothing here and break F2.

### F3 — Isomers: same formula, different fate

Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
Fig 12 :97: *"silver fulminate and silver cyanate have the same composition and different properties"*, with Berzelius naming isomerism in 1830 on the next line.

The figure uses chemistry as its own instance, not an analogy. A prebiotic inventory reported as "C2H5NO2" has already discarded the difference between species whose behaviour, including persistence, can diverge. The Miller-Urey record itself lists glycine and beta-alanine as separately identified products of the same discharge; the formose record lists glucose, xylose, and mannose from one alkaline mixture. Species identity is the slot, and the slot is bonded, not compositional.

**Mode:** `specified` on any given isomer pair, `general` on the rule. **Refuter:** a controlled comparison in which isomer pairs show identical degradation rate constants under every channel tested. That breaks the figure's "decisive in the behaviour" claim for this domain.

### F4 — The structures that survive use: catalysts, cycles, functional groups

Fig 12 :119: *"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."*
Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*
Fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

These three give the **shape** of an accumulating species, without naming one. A species that is regenerated by the network it participates in (a catalyst or a cycle) does not pay its destruction cost again on each use. A functional group fixes which degradation channel dominates. The formose reaction is the world's own instance: the Wikipedia page records that it is *"autocatalytic"* and that a trace of glycolaldehyde is enough to initiate it; Omran et al. 2020 calls it *"the only known abiotic autocatalytic cycle"*. A cycle that reproduces its own initiator is a cycle in Fig 12 :121, and the accumulating species is the one the cycle keeps regenerating.

The other half of the same finding: Omran et al. report that under alkaline hydrothermal conditions the equilibrium product is *"carboxylic acids rather than sugars"*, with *"less than 1%"* of starting formaldehyde remaining as sugars. That is a thermodynamic trap, a species the network drives toward and then holds. The shape is "what the network keeps", not "what we hoped to find".

**Mode:** `specified`, ungrounded for any particular named species. **Triangulation:** Fig 12 :119/:121/:123 (notation domain) and the autocatalysis/equilibrium result in Omran et al. 2020 (experimental domain) are low overlap. **Refuter:** show an accumulating prebiotic species that is neither regenerated by a cycle nor protected by a functional group, under conditions where a sister species with those features is destroyed faster. That would leave the three structures idle here and send them back to a different domain.

### F5 — Settlement is the gate to further composition

Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."*

This is the bridge from persistence to accumulation. A molecule that survives becomes an operand for the next composition, and at that level it is irreducible by construction. So "stable enough to accumulate" means "settled against the ground at this level", and accumulation is what lets chemistry compose over it. Where a species is not recorded as settled, later lineages pay the derivation again (Fig 12 :107-110): the arrangement persists locally, but across a boundary that drops the record everything is re-earned.

**Mode:** `general`. **Refuter:** show a species that composes over a molecule never settled in that habitat, with no re-derivation cost. That breaks the level rule.

### F6 — The literal list is a `gap`, not a silence

Fig 11 :51: *"No standing list of good actors survives a change of residual."*
Fig 9 :32: *"you get a kind of thing, never the answer itself"*
Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

No figure line names a prebiotic chemical. The framework returns a kind of thing (a shape) and a record of what would reverse it. If the residual changes (a different pH, UV flux, or mineral assemblage), the list changes, so a standing list is structurally refused. This is a `gap` of the **shape-not-a-name** kind, reported as unreachable at this level of description, not as absence and not as an invitation to invent names. Fig 13 :134: *"It can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again."*

The world literature supplies candidates, but as **bindings from the chemistry frame**, not as figure outputs: adenine from concentrated HCN and ammonia (Oró 1961, as recorded in the Miller-Urey entry); borate minerals that stabilize ribose (Ricardo et al. 2004, as recorded in the formose entry); amino acid yields rescued by calcium carbonate buffering and ascorbic acid inhibition of oxidation (Bada and Cleaves, as recorded in the Miller-Urey entry). Each is a measured binding for a stated habitat. None is a standing list.

**Mode:** `gap` on the list, `specified` on each binding when provenanced. **Refuter for the gap:** exhibit a figure line that names a chemical, or show that Fig 11 :51 does not govern molecular species (re-census would then move this finding to another domain). Until one fires, the honest answer to "which chemicals" is a shape plus named bindings with their conditions.

### F7 — Union, not partition: one lever leaves the intersections standing

Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
Fig 9 :57: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*
Fig 11 :52-53: contact cascades; *"first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

Stability under hydrolysis, stability under UV, and a concentration mechanism overlap. Supplying only the first does not accumulate a species in a habitat where the second binds. Second-order effects matter: a mineral that stabilizes a sugar also changes which species it adsorbs and therefore which one concentrates. The world source records this cascade explicitly: borate minerals both stabilize ribose and were invoked as a selection mechanism for it. Re-census sends any claim of a single sufficient lever back here.

**Mode:** `specified`. **Refuter:** demonstrate a habitat where one condition alone determines accumulation across all species tested, with the others demonstrably non-binding.

### F8 — Two currencies do not add: persistence and concentration are different quantities

Fig 12 :125: *"A composition costs in two currencies, and they do not add."*
Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."*

Here the two readings are: persistence (a rate constant, priced by the bond and the habitat) and concentration (an abundance reached, priced by a transport or trapping process and a measuring action). A long-lived molecule can remain dilute; a short-lived molecule can be locally concentrated faster than it decays. Neither predicts the other, so both are read or the choice is blind. "Stable enough to accumulate" is a threshold relation between them (Operators table: comparison ⋛, *"a threshold relation between two quantities"*), not a single score.

**Mode:** `general` structural, `specified` per species pair. **Refuter:** show that a measured half-life predicts the achieved concentration across species without any concentration term. That collapses the two currencies and breaks F8.

### F9 — Names are imports and need a source gate and a shadow test

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
Fig 6 :24: *"A wrong atom costs more than starting from primitives."*
Fig 8 :52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*
Fig 6 :26: *"instruments extend what can be represented at all."*

Every chemical name in this folder enters from the chemistry frame by import: the figure set cannot synthesize a species from its six states and structures, and Fig 8 :32 says *"no search, however long, adds an atom."* An import is legitimate when provenance is shown (where did the name come from, which measurement, which habitat), when it explains a gap (shadow test), and when its independence is debited. A wrong atom is priced above starting from primitives, so the cheapest honest move is to leave the slot named only as a binding. The Miller-Urey entry's note that nitrites destroy amino acids in CO2/N2 atmospheres is precisely a shadow test that changes which binding is legitimate.

**Mode:** `specified` per binding, `general` on the gate. **Triangulation:** Fig 6 :23 and Fig 8 :52 are different figures with low overlap. **Refuter:** exhibit a chemical name derived from the figure set alone, with no import and no measurement, that settles a persistence claim. That would break the closure law.

### F10 — What actually survives (defensible residue, verdicts kept separate)

| claim | mode | figure / source |
|---|---|---|
| Persistence is a relation between an arrangement and a habitat, not an intrinsic property | `general`, triangulated | Fig 11 :49, :39; Fig 2 :29 |
| A formula alone cannot tell which arrangement persists | `general`, triangulated | Fig 12 :5, :46, :117 |
| Regeneration (catalyst, cycle) and functional groups fix which species the network keeps | `specified`, triangulated | Fig 12 :119, :121, :123; Omran et al. 2020 |
| Settlement is the gate to becoming an operand for the next composition | `general` | Fig 12 :104 |
| The literal standing list is a gap; names are provenanced bindings | `gap` / `specified` | Fig 11 :51; Fig 9 :32; Fig 6 :23 |
| Persistence and concentration are two currencies that do not add | `general` | Fig 12 :125-126 |
| Any given species (glycine, adenine, borate-stabilized ribose, formic acid) | `specified`, ungrounded candidate, one witness each | world sources in `10_source_ledger.csv` |

Verdicts are **not averaged**. A species that is stable in one habitat and destroyed in another is two verdicts, not one mean.

---

## 4. Pre-registered refuter (written before the conclusion)

Per formula step "Direction" and the standing rule that a falsifier written before a run is a design instrument. The shape claim is refuted if any of the following holds:

1. A molecular species is shown to have invariant persistence across habitats that differ in pH, temperature, and UV flux (breaks F1, Fig 11 :49).
2. Two bonded arrangements with the same ingredients are shown to have the same degradation profile under every channel tested (breaks F2 and F3, Fig 12 :5, :117).
3. The structural trio (catalyst, cycle, functional group) is shown idle here: an accumulating species lacks all three while a sister species with them decays faster under the same conditions (breaks F4).
4. A species accumulates with no concentration or trapping process acting, i.e. persistence alone predicts concentration (breaks F5 and F8, Fig 12 :104, :125).
5. A figure line is found that names a specific prebiotic chemical, or Fig 11 :51 is shown not to govern molecular species after re-census (breaks F6).
6. A persistence claim is settled by agreement among frames that share one evidence pool, with no non-updating instrument behind it (breaks Fig 2 :29, :40).

If any fires, the affected finding is withdrawn and the re-census is recorded here, not hidden. Until one is run, no part of this folder may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape and its refuter, not with a list. The question's ordinary form invites a standing list, which Fig 11 :51 structurally refuses.
2. State the habitat with every persistence claim (Fig 11 :46). A half-life without conditions is an unbracketed reading.
3. Use Fig 12 as the composition grammar: bond, isomer, catalyst, cycle, functional group (F2 to F5). Do not force Fig 13's six physical terms onto molecular species; see the strain log in section 7.
4. Provenance every chemical name as an import with a shadow test (Fig 6 :23, Fig 8 :52). The name is the chemistry frame's contribution, not the framework's.
5. Keep persistence and concentration in separate columns (Fig 12 :125-126); a threshold relation between them is the accumulation claim.
6. Offer the method, not the recording. Fig 4 :22: *"Only methods cross up. Only head starts come down."* Fig 10 :52: *"Bring a characterised residual, never the source."*

---

## 6. Canonical usage check and retraction / confirmation log

Two local canonical sources were read after the first five sections and govern how figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/03-FIGURES_TEXT.md`. The README states the figures *"outrank everything else in the repo"* and that the framework reports *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments stop, recording the lineage so the stop is honest. It also gives the re-census rule: a reading that makes one figure contradict another has misidentified its domain.

| earlier reading in this audit | status after the canonical check |
|---|---|
| "Stable enough" was first read as a intrinsic property of a species | **Retracted and kept visible.** Re-census to Fig 11 :49/:39 assigns stability to molecule-and-habitat. F1 now carries both the original and the corrected reading. |
| Fig 13 six-term set was considered as the grammar for molecular species | **Refused.** Fig 13 governs physical states and structures (space, time, energy, spectrum, gradient, network), not chemical species. Fig 12 is explicitly chemical and governs D1. Recorded as strain S1 in section 7. |
| An early blanket reading of Fig 11 :51 as a universal refusal of stability | **Narrowed.** It refuses a *standing* list that survives a change of residual. Per-species, per-habitat verdicts remain legitimate. Kept in F6 with the narrowing visible. |
| "No figure line names a chemical, therefore the question has no answer" | **Refused.** Fig 8 :39 and Fig 9 :32 make the gap a report of a shape, not a claim of absence. World bindings are admitted as imports with provenance. |
| F4 (autocatalysis) was first read as a direct derivation of a named molecule | **Retracted at record level.** The figures license the *structure* (cycle, catalyst), not the name. Omran et al. supply the binding as a world source, not as a figure output. |
| "Amino acids are stable" from the Miller-Urey record | **Retracted as a standing claim.** The same entry reports nitrites destroying amino acids unless buffered. This is Fig 11 :49 applied to a real habitat, so the claim is now per-condition. |
| Canonical "shape, not a name" limit | **Confirmed and narrowed.** It governs a primitive or name not held in the frame. Naming a molecule from a measurement is a provenanced binding, not the invention of a new primitive. |

---

## 7. Strain and re-census log

- **S1, Fig 13 versus Fig 12.** An early pass tried to parse molecular species through the six physical terms. Re-census: Fig 13 governs the substrate (states and structures); Fig 12 governs composition of atoms and bonds and is explicitly chemical. Different objects, so no contradiction. Recorded, not erased.
- **S2, Fig 11 :51 versus the question's demand for a list.** The question asks for a standing list; Fig 11 :51 refuses one across changes of residual. Re-census: the list request is a category error at the figure level, but per-habitat verdicts are answerable. Reported as F6, not smoothed into a fake list.
- **S3, closure idempotence (Fig 8 :32) versus laboratory synthesis of new compounds.** Re-census: the lab imports an atom into the frame through an instrument (Fig 6 :26); it does not synthesize inside the closure. No strain after re-census.
- **S4, "stability" as a single quantity versus two currencies.** Fig 12 :125-126 refuses to add them. Re-census splits persistence (rate) from concentration (abundance). Named, not hidden.
- **S5, isomerism in Fig 12 :97 versus the figure's own claim that bonds are not recoverable from operands.** Not strained: the formula hides the bond, which is exactly why isomerism had to be named. The two statements are the same finding read from opposite sides.
- **After re-census: no live strain.** S1 to S4 were dissolved by assigning each figure to its proper object; S5 was never a strain. The gap in F6 is a verdict, not a strain.

### Updated verdict

The shape survives: persistence is a relation between a bonded arrangement and a habitat; the arrangement, not the ingredient list, carries the difference; cycles, catalysts, and functional groups are the structures the network keeps; settlement is the gate to composing over a species; and persistence and concentration are two currencies held apart. The literal standing list does not survive as a figure output; chemical names enter as provenanced, shadow-tested bindings from the chemistry frame, each with its habitat stated. Mode `specified` on the per-domain claims, `general` on the shape, `gap` on the list, nothing `grounded`. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.
