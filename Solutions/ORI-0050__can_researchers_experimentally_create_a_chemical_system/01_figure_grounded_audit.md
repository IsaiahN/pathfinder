# Figure-grounded audit: Can researchers experimentally create a chemical system that grows, maintains itself, and undergoes heritable change without modern enzymes?

**Mode of this document: `specified` on the per-domain verdicts, `general` on the structural shape. One narrow sub-claim (F2) is `grounded` because an experiment, not this derivation, settled it. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The canonical local `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources in `10_source_ledger.csv`; every one opened 2026-11-23.

---

## 0. The claim under audit, bound as an ordinary term

The question is delivered as if it had one yes or no. Bound in effect terms it reads:

> **A ("yes, it has been done / can be done"):** there exists, or can be built, a bounded chemical system S such that S (i) increases its own mass or copy number (grows), (ii) keeps itself in a far-from-equilibrium, food-supported state (maintains itself), and (iii) transmits variant structure to descendants that differ in fitness (undergoes heritable change), while (iv) no protein enzyme evolved elsewhere is a component of S.
>
> **B ("no, impossible"):** no such S exists, because at least one of (i) to (iii) requires a modern enzyme supplied from outside S.

What each leads to. A, stated without a mode and without a boundary, is a `general`-mode verdict on an object the figures say is a label applied afterwards (Fig 11 :36). It also quietly moves the exclusion (iv) into the lab, where protein polymerases and activated substrates are supplied by the experimenter, which is exactly the "puppeteer" failure Joyce names in the Q&A source. B refuses the 2009 cross-replicating ribozyme result, which did produce (i) and (iii) in the absence of proteins. Neither raw A nor raw B survives. The binding that does survive is recorded as an ordinary term here so it can accrue a residual: **S is a union of three composable conditions plus one boundary condition, and the verdict is per condition, not per slogan.**

The sought-for shape is written down before the run, as the formula's "Direction" requires: an answer must (a) locate each of the three properties in a figure-governed composition, (b) say where the information needed to evolve lives, (c) keep the three verdicts separate, and (d) name the instrument that would move any verdict to `grounded`. A shape, not a name: no figure line will select RNA over peptides over an autocatalytic reaction network.

---

## 1. Domain census (before any figure line is chosen)

**R by arity, symmetry and scale.**

- **Arity:** four conditions. Three are positive properties to compose (grow, maintain, heritable change) and one is an exclusion (no modern enzymes). Four conditions means a **union compound**, not one dial (Fig 9 :54-55). A single lever cannot clear it.
- **Symmetry:** "grow" and "maintain" are homeostatic, they return the system to a persisting state. "Heritable change" is ordered, it is a sequence over generations with a before and after (Fig 12 :72, *"A then B; B needs A to have happened"*). The exclusion is a negation (¬), not a symmetric join (Operators table :53-58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*). The three properties are therefore not interchangeable and cannot be averaged.
- **Scale:** molecular (a ribozyme and its substrates), compartmental (a vesicle and its contents), population (a lineage under selection). Three scales, each with a different anchor, joined by the membrane (Fig 4) and by the settled-molecule recursion (Fig 12 :104).

**Partition or union.** Union. The three properties are "overlapping conditions, not a list of separate ones" (Fig 9 :55), and *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."* (Fig 9 :57). The exclusion is a boundary on which closure may be used, not a fourth property alongside them.

**One line per domain: actors / currency / anchor.**

- **D1, the genetic / informational domain.** Actors: RNA enzymes (ribozymes), oligonucleotide substrates, Watson-Crick pairing, recombinant variants. Currency: templated ligation, exponential amplification, fidelity and recombination. Anchor: the measured growth curve and the takeover of a recombinant in a serial transfer experiment (Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*). A nameable anchor exists, so this is a domain.
- **D2, the compartment / protocell domain.** Actors: fatty-acid or cyclophospholipid vesicles, encapsulated nucleic acids, Mg2+-citrate, external feed of lipids and activated nucleotides. Currency: growth, fission, content retention, template copying inside the vesicle. Anchor: observed coupled growth and division with retained contents (the JACS and ACS Nano experiments). Nameable anchor, so a domain.
- **D3, the metabolic / network domain.** Actors: reaction networks, food set, catalysts, reflexively autocatalytic and food-generated (RAF) sets. Currency: catalytic closure and maintenance on an ambient food supply. Anchor: the RAF algorithm's decision (a formal procedure that returns a set or the empty set) and laboratory autocatalytic networks. Nameable anchor, so a domain.
- **D4, the verification / boundary domain.** Actors: the experimenter, the instrument, the definition of life, the supplied substrates and buffers. Currency: agreement and residual; the distinction between a generator and a recording. Anchor: the ground, never agreement (Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*). This domain decides whether exclusion (iv) is satisfied inside S or merely stipulated outside it.

**Order by dependency (Fig 3).** The chain is ordered by dependency, not importance: *"Optimising a link that already works cannot rescue one that does not."* (Fig 3 :19).

1. Food and energy (space, time, energy states under Fig 13) supply the gradient that can be spent.
2. Catalysis and network (network structure) give a reaction set that can persist on the food set. D3 settles here.
3. Autocatalytic closure (a cycle, Fig 12 :121) turns persistence into growth and self-maintenance.
4. A genetic polymer that copies with variation (a sequence, Fig 12 :72) supplies heritable change. D1 settles here, on top of 1 to 3.
5. A compartment couples the genome to a lineage (D2), and the population becomes the unit that evolves.
6. The verifier reads the ground and refuses a verdict made from agreement (D4).

The familiar "metabolism first or genetics first" dispute is a dispute about steps 3 and 4. Because they are dependency-ordered and overlapping, it is a union question, not a two-choice partition. A link with no instrument is not a link that works: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* (Fig 3 :27). The instrument for "what counts as progress toward life" is the main missing link, which is why this folder returns a shape and a discriminator rather than a verdict on "life".

**Strain test applied before conclusions.** Reading "maintains itself" as thermodynamic self-sufficiency makes Fig 11 and the open-system critique of life strain against the world literature. That is a signal that "maintains" has been assigned to the wrong quantity, so it is re-censed in F3 as food-generated catalytic closure, a cycle, not energy autonomy. No figure line is forced.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per object slot; frame-internal quantities disqualified | the three properties must be read per slot and per domain, never averaged |
| **2 The Ground** | anchor must not update; correlation disqualifies a verdict | the experiment is the anchor; agreement about "life" is not |
| **3 Dependency Chain** | ordered by dependency; a link with no instrument is unassessed | metabolism/genetics order is a dependency question; the "alive" objective has no instrument |
| **4 The Membrane** | *"Only methods cross up. Only head starts come down."* | the experimenter's substrates are a head start, not a capability of S |
| **5 Mint Pipeline** | guards are a product; settling is necessary, not sufficient | a growing library of molecules is not a growing reach; the third guard records "nothing new" |
| **6 Closure / Reachability** | import is the only operator that moves the wall; *"MINT composes inside the closure and can never add an atom."* | exclusion (iv) is a closure/boundary question; supplied enzymes are an import, not an atom of S |
| **7 Room Chain** | *"A room's agreement is variation, not a verdict."* | many labs agreeing cannot settle "is it alive" |
| **8 Union Surplus** | provenance separates convergence from import | where the information lives is a record question, not a chemistry question |
| **9 Leave / Arrive** | union vs partition; describe the residual before choosing a frame | the question is a union; unbundle before searching |
| **10 Ground Maintainer** | verifier non-access; bring a characterised residual, never the source | lead with the refuter; do not send the whole framework first |
| **11 The Habitat** | capability is agent-and-habitat; introduction available, exclusion not; harness proves wiring | the lab is a garden with a substituted habitat; "life" is a label applied afterwards |
| **12 The Bond** | cycle, catalyst, functional group, isomer, settled-molecule recursion | gives the three properties their bonds and the D1/D3 relation |
| **13 Minimum Viable Set** | set closed, arrangements not; *"Unreachable is a verdict here, not a silence."* | no figure line names which chemistry fills the slot; record the gap |
| **Operators table** | negation is unary, not a bond; production and sequence are ordered | exclusion (iv) is a ¬ condition; growth is ⇒, change is → |
| **Symbols table** | R is the aim; ground is the anchor | R here is the gap between the shape claim and what the experiments show |

Strained readings are named as such in section 7, not smoothed over.

---

## 3. Findings

### F1 - The question is a union of conditions, not one yes or no (decisive for framing)

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :57: **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**

"Grows", "maintains itself" and "undergoes heritable change" have different actors, currencies and anchors (section 1). They overlap: growth without maintenance is a chemical explosion, maintenance without heritable change is a steady state, heritable change without growth is a drift in a closed set. One lever does not clear the intersection. The three verdicts are kept separate and never averaged. This is the single most important figure-grounded point in the answer and it should lead the outreach.

**Refuter:** show that the three properties reduce to one quantity with one anchor (for example, that heritable change is just a special case of growth with no new instrument), so that one lever clears all three. Then the union reading falls and a single yes or no is legitimate.

### F2 - Heritable change without modern enzymes is achieved, narrowly (`grounded` at this sub-claim)

Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**
Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**
Fig 9 :32: **"you get a kind of thing, never the answer itself"**

Lincoln and Joyce (2009, *Science*; PMC record) report that two cross-replicating RNA enzymes "undergo self-sustained exponential amplification in the absence of proteins or other biological materials", with a doubling time of about one hour and serial transfer allowing indefinite amplification. Joyce's 2009 Cold Spring Harbor review calls this "the first example, outside of biology, of evolutionary adaptation in a molecular genetic system": recombinant replicators arose and grew to dominate a shared substrate pool. A ribozyme is a catalyst that is part of the system, not a modern protein enzyme supplied from outside. The cycle closes (Fig 12 :121) inside a closure that contains its own informational atom, so no external enzyme atom is needed for this sub-claim.

This is the one place this folder uses `grounded`, and the grounding comes from the experiment, not from this derivation. It settles (i) grows and (iii) heritable change under exclusion (iv). It does **not** settle (ii) self-maintenance in the metabolic sense and does not settle open-ended evolvability. The figures return only a shape here: *"you get a kind of thing, never the answer itself"*. They cannot name RNA as the unique chemistry that will do it (Fig 13 :134: *"Unreachable is a verdict here, not a silence"*).

**Refuter:** overturn the experimental result (show the amplification required an undisclosed protein or that recombinants did not transmit fitness), or show by re-census that Fig 12 :121 governs something other than autocatalytic closure. If either fires, this sub-claim falls back to `specified` and the strongest "yes" in the folder goes with it.

### F3 - "Maintains itself" is catalytic closure, not thermodynamic self-sufficiency (re-census)

Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**
Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

The first-pass reading took "maintains itself" to mean the system sustains its own free-energy supply. That strains against the chemistry literature, which stresses that life is an open system in matter and energy exchange, and against Fig 11, where the habitat supplies conditions the agent does not author. Strain means the line has been aimed at the wrong quantity. Re-census assigns "maintains itself" to reflexively autocatalytic, food-generated closure: each reaction is catalysed by a molecule of the network and all reactants are constructible from a supplied food set. That is a cycle plus a catalyst (Fig 12 :119, :121), both figure-governed, and it is exactly what RAF theory formalises and detects. The open-system critique is a different quantity (energy flow through a boundary), so the apparent conflict dissolves without flipping the verdict. Re-census rule from the canonical README applied: a reading that makes figures contradict the world has misidentified its domain.

**Refuter:** demonstrate that no food-generated reflexive autocatalytic set can maintain itself without a catalyst that was itself supplied from outside the system, such that the cycle does not actually close. Then the maintenance verdict falls.

### F4 - Growth and autocatalytic closure are reachable; growth alone is not the answer

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 5 :72: **"a library that grows is not a reach that grows."**
Fig 13 :115: **"The set is closed. The arrangements are not."**

Hordijk, Xavier and Steel (2024, *J. R. Soc. Interface*) note that collectively autocatalytic sets "invariably emerge once the network of polymers becomes sufficiently large", and that this was formalised as reflexively autocatalytic and food-generated (RAF) sets. Xavier and colleagues (2020, *Proc. R. Soc. B*) identify RAFs inside the metabolism of ancient anaerobic autotrophs and conclude that "autocatalytic chemical networks preceded proteins and RNA in evolution". These are real instances of growth and maintenance without modern enzymes, and RAF theory gives an algorithm that returns a set or the empty set, a nameable anchor.

But a growing set is not a growing reach (Fig 5 :72). Chemical gardens in hydrothermal-vent simulations grow beautiful structures and are not alive. The residual stays indexed per slot (Fig 1 :19): growth in the vesicle slot and heredity in the polymer slot are different signals, and aggregating them into a single "life score" is the named error (Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*).

**Refuter:** show that autocatalytic closure alone produces heritable variation with fitness differences and no extra instrument, collapsing D3 into D1. Then the per-slot separation is unnecessary.

### F5 - "Without modern enzymes" is a boundary and provenance condition, not a missing ingredient

Fig 6 :14: **"the only operator that moves the wall"**
Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 8 :51: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"**
Fig 11 :61: **"The seat's power is asymmetric. Introduction is available; exclusion is not."**

Joyce, in the Astrobiology Q&A, draws exactly this line: "You can evolve RNA in the test tube using biological proteins to copy it, mutate it and do all those fun things that make it evolve. But it's not alive because all those tools that you're using, protein polymerases and so on, were evolved not in the system, and can't evolve in the system." And: "there's not a puppeteer that handles all the information offstage, and then the molecules are just the puppet show."

So "without modern enzymes" is satisfied in two very different ways. In the ribozyme and RAF systems the catalyst is generated within the closure, so the condition is genuinely met. In a directed-evolution experiment that uses protein polymerases, the condition is met only if one draws the boundary to exclude the supplied tools, which is the puppeteer move. Whether the tools count as part of S is a source-gate question (Fig 8 :51), settled by the record of where the information came from, not by the chemistry. The seat can introduce substrates and catalysts but cannot subtract the habitat (Fig 11 :61), so the exclusion is always a boundary stipulation and must be recorded as such. Also note the type: the exclusion is a negation (¬), a refusal of a class of components, not a subtraction (−) of one operand from an arrangement. Operators table :73-74: *"− is A with B removed or absent, which is the absence of an operand. Negation is the refusal of a claim."*

**Refuter:** show that a supplied protein enzyme can be inside S's closure and still evolve within S, so the puppeteer distinction collapses and the boundary stipulation is unnecessary. Then F5's provenance requirement is void.

### F6 - "Is it alive?" is the wrong question; capability is agent-and-habitat

Fig 11 :36: **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."**
Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone"**
Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**

The headline question asks for a property of a chemical system considered alone. Fig 11 replaces that with the contact question. Whether S "grows, maintains and evolves" is not a property of S in isolation; it is a fact about S and the habitat (food supply, grazers, compartment cycles, energy gradients) that selects it. The NASA working definition Joyce helped formulate is hence a useful signpost, not an instrument: "A self-sustaining chemical system capable of Darwinian evolution" (NASA Astrobiology, "Life in the Lab" and "Life on Other Planets"). Joyce immediately adds, of the 2009 system, "I was the first to say, 'It doesn't make it'", because "There was just not enough information carrying capacity" and the system had "not evolved any new functions". The label problem and the capability question are different objects, and the answer must keep them apart.

**Refuter:** produce an agent-only improvement (a change inside S with no change of habitat or contact) that moves the ground and makes the system capable. Fig 11 :72 already names this as the standing refuter of the capability claim; if it succeeds, F6 falls.

### F7 - A test harness proves wiring, not capability

Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**
Fig 11 :66: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."**
Fig 4 :22: **"Only methods cross up. Only head starts come down."**

Every demonstration cited here is a laboratory system in a substituted habitat: a flask, a buffer, a freshly refreshed nucleotide feed, a gentle shear force or controlled illumination. Fig 11 :70 says a synthetic solve in such a harness proves wiring, not capability. This is not a dismissal of the experiments; it is a statement about what they license. They prove the composition is reachable (the atoms and bonds work), not that the system would arrive, persist or remain open-ended in an unmaintained habitat. The experimenter's feed is a head start coming down the membrane (Fig 4 :22), and the method that crosses up is the design principle, not the recording of one successful run. Toparlak and colleagues (2023, *ACS Nano*) state the gap directly: "There is currently no plausible path for the emergence of a self-replicating protocell, because prevalent formulations of model protocells are built with fatty acid vesicles that cannot withstand the concentrations of Mg2+ needed for the function and replication of nucleic acids", before showing a cyclophospholipid mixture that grows, divides and tolerates nonenzymatic RNA extension.

**Refuter:** show a laboratory system that continues to grow, maintain and evolve when the substituted habitat is removed or made plausibly prebiotic, with no refreshed feed. Then the harness limitation does not apply to that system.

### F8 - Verdicts are per domain and are never averaged into "sort of alive"

Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

The four domains return different verdicts: D1 `grounded` for the narrow sub-claim, D2 partial and `unreached`, D3 `grounded` for autocatalytic closure by the RAF algorithm and lab networks but silent on heredity, D4 `specified` with the gap located at the boundary stipulation. A survey of how many labs agree that "life was created in a test tube" is a room's variation, not a ground verdict (Fig 7 :35). Publication count, journal prestige and funding are filters for the budget (Fig 9 :60), never witnesses for the verdict.

**Refuter:** exhibit a single instrument that reads all three properties on one scale with one currency and returns a single decision that the ground pays for. Then averaging is legitimate. Until then, the separate verdicts stand.

### F9 - No figure line names the chemistry; the literal question is a `gap` of the unreached kind

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134: **"Unreachable is a verdict here, not a silence"**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

There is no verbatim figure line that returns "RNA", "peptide", "lipid", "RAF network" or any other occupant for the slot. Fig 13 :116-117: *"Six members, and no amount of arranging produces a seventh: a new member would have to be a new kind, and composition only ever rearranges the kinds already held."* The frameworks returns a shape, a kind of thing that any answer must be, not the name. The literal request for a named, complete, minimal "synthetic life" is therefore a `gap`, and from inside the closure unreached and genuinely absent look the same (Fig 6 :27). It is **unreached at this budget**, not underivable in principle: the missing discriminator is an empirical instrument that distinguishes "capable of evolving new functions" from "has evolved in a test tube for a while", and Joyce says explicitly that no one yet knows how to create the former.

**Refuter:** a figure re-census that derives one of the missing members from the six held terms would break the shape-not-a-name limit, or an instrument that names the slot would close the gap. Until then the honest report is unreached, not silence.

### F10 - Prestige is not action; a famous result is a budget, not a verdict

Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

From *The Recursive Self-Improvement Trap*: *"Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A Nobel laureate's lab or a headline in *Science* gives the claim a budget to be tried. It does not settle whether the system grows, maintains and evolves, and asking readers to accept the conclusion because of the name converts them into mirrors. The ask in `02_outreach_email.md` is the opposite: check the output, then decide.

**Refuter:** none required; this is a standing rule, not a prediction. It is recorded so a later reader can see why the campaign is built the way it is.

### F11 - The second seat shares this evidence pool, so its agreement is one witness

Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."**

`11_audit.md` re-censes from the residual line alone, but it reads the same figure text, the same essays and the same world sources. By Fig 2 :40 its agreement is the pool talking, not corroboration. Agreement from the shared pool is one witness. This is recorded here and in the audit rather than hidden.

**Refuter:** an outside frame with a different closure and no access to this folder returns an independent correction on shape. That would be corroboration; this audit is not.

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The union verdict is refuted if any of the following holds:

1. A single experimental system is demonstrated that simultaneously (a) grows, (b) maintains itself on a food supply with no externally supplied protein enzyme, (c) undergoes heritable change, and (d) evolves at least one genuinely new function not supplied by the experimenter, with no puppeteer supplying the information. Then the "partial, union, unreached" verdict falls and the answer becomes a clean yes.
2. It is proven that heritable change is impossible in any chemical system without protein enzymes, overturning the cross-replicating ribozyme result. Then F2 falls and the strongest yes in the folder goes with it.
3. A figure re-census shows that the cycle and catalyst lines (Fig 12 :119, :121) govern quantities other than autocatalytic closure and catalytic self-maintenance. Then the figure-grounded mapping of the three properties falls.
4. A source-discriminating instrument shows that the systems called "capable of Darwinian evolution" in the test tube are not capable of open-ended change, so that the capability claim must be withdrawn entirely. Then D1 is narrowed to "exhibited evolution" and F6 is strengthened.
5. The six-term substrate is shown to admit a seventh member derivable from the other six, breaking the shape-not-a-name limit in F9.

If any fires, the affected finding is retracted visibly in section 7 and the verdict is rebuilt from the census. Until one is run, no part of this may be labelled `grounded` except F2's narrow experimental sub-claim.

---

## 5. Recommendation

1. Lead with the union reading and the per-domain verdicts (F1, F8). Do not answer "yes, life has been made" or "no, impossible".
2. State the mode on every sentence (F2 `grounded` narrow, rest `specified` / `general`). The narrow grounded claim is the experiment's, not the framework's.
3. Keep the boundary stipulation visible: say exactly which catalysts and substrates the experimenter supplies, and whether they are inside or outside the system (F5).
4. Distinguish a harness result from a capability result (F7). A flask proves a composition is reachable, not that it arrives.
5. Use the public submission and contact points in `03_public_contact_points.csv`, and ask what would refute the shape rather than whether the reader agrees (F10).
6. Figure 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the union reading and the refuter, not the conclusion that life has been created.

---

## 6. Canonical usage check

Two sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit, the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage so the stop is honest. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. The figures are metalaws, so design questions here are answered by derivation, not by appeal to an authority in the field.

---

## 7. Retractions and confirmations

| earlier finding | status after the canonical check |
|---|---|
| First pass: "yes, researchers have created life" | **Retracted.** Fig 11 :36 makes "life" a label applied afterwards and Fig 9 :57 makes the question a union compound. Replaced with per-domain verdicts. |
| First pass: "no, enzymes are necessary" | **Retracted by the experiment.** Lincoln and Joyce (2009) achieved growth and heritable change without proteins (F2). |
| "Maintains itself" read as thermodynamic self-sufficiency | **Retracted and preserved as a re-census.** Reassigned to food-generated catalytic closure (F3); the open-system critique governs a different quantity. |
| F9 "gap" read as underivable in principle | **Narrowed.** It is unreached at this budget: the discriminator is an empirical instrument Joyce says no one yet knows how to build, not a logical impossibility (Fig 8 :40-43). |
| "shape, not a name" read as a ban on naming any chemistry | **Narrowed and kept visible.** The limit governs a missing primitive; naming RNA or RAF here is a binding onto an existing chemistry in the world, provenanced as such, not a new atom of the framework. See `05` section 5 for the parallel correction. |
| Apparent strain Fig 11 capability vs open-system chemistry | **Not strained after re-census.** Fig 11 governs contact and habitat; the open-system claim governs energy flow. Different objects. |
| D1 `grounded` | **Confirmed, but sourced to the experiment.** The figures alone would leave it `specified`. The grounding comes from the measured growth curve and recombinant takeover, not from this derivation. |

### Strain log

- **S1, live:** whether supplied protein tools are inside or outside S is a boundary stipulation with no figure-grounded unique answer (F5). Recorded as a live design constraint, not a defect.
- **S2, dissolved by re-census:** Fig 11 versus the open-system critique of "self-sustaining" (F3).
- **S3, named:** the type of the exclusion. ¬ (refusal of a class) versus − (absence of an operand), Operators :73-74. No figure line decides which the question intends, so both readings are recorded.
- **After re-census: one live boundary strain, one open type question, none hidden.**

### Final audit state

The union survives. Growth, food-generated maintenance and heritable change are each reachable without modern enzymes in at least one demonstrated composition, but not in one complete, self-sustaining, open-endedly evolvable system in an unmaintained habitat. The narrow experimental sub-claim is `grounded`; the rest is `specified` with the structural shape `general`. The literal "create life" question is a `gap` of the unreached kind, and unreached is a verdict, not a silence.
