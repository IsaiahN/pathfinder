# Figure-grounded audit: inheritance of a reaction network across compartment generations

**Mode of this document: `specified` on the shape, `general` on the dependency order, not `grounded`.** It states what would have to be measured. Per THE_FORMULA.md: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: a simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** Figures 1 to 13, Operators and Symbols tables via `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited as `Fig N :line`); `THE_FORMULA.md`; `FIGURES_README_canonical.md`. World sources opened 2026-11-23 and listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

A reaction network in a compartment is not a thing sitting in a place. It is a pattern of catalytic relations among molecule species, sustained by flux of food and energy. When the compartment grows and divides, the daughter receives a new boundary and a stochastic, unequal sample of the parent's molecules (a point made explicitly by the compartment models opened for this audit). The question asks what makes the *network*, rather than merely its ingredients, reappear in the daughter.

Stated as an effect: what crosses the division, and under what conditions, such that the daughter can re-run the same catalytic closure rather than only holding a frozen list of the parent's molecules?

- **Arity:** at least two conditions, a carrier that crosses and a habitat in which the carrier can re-run. A third condition, a selection pressure among compartments, is needed for *heritable change* rather than bare persistence. This is a **union compound**, not one hard question (Fig 9 :57: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*).
- **Symmetry:** inheritance is ordered, parent to daughter. The relevant bonds are production and sequence, not conjunction (Operators table :34: *"the only bond a flat chain can express, so every term today is a sequence whether or not it should be"*). A symmetric *"both hold at once"* bond cannot express a handoff.
- **Scale:** first order inside a compartment (molecules and reactions compose into a network); second order across generations (the settled network becomes an atom for the daughter compartment). Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it."*

**What an answer would look like (ordinary term, bound before the run).** An answer names the *kind* of thing that crosses (arrangement versus ingredients; generator versus recording), the *kind* of boundary crossed (substituted habitat, not removed wall), and the *two factors* that make the handoff a lineage rather than a copy (fidelity of the bracket, pressure of the ground). It does not name a specific molecule or a numerical fidelity threshold (Fig 9 :32: *"you get a kind of thing, never the answer itself"*). This is the "Direction" discipline of THE_FORMULA.md: write down what an answer would look like, bind it, and let it accrue a residual.

---

## 1. Domain census, before choosing any figure line

Describe R by arity, symmetry and scale (above), then one line per domain with actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| **D1, the chemical closure** | molecule species, reactions, catalysis relations | catalytic closure and flux; the *arrangement* of bonds | instrument or experiment that shows which reactions are catalysed and which species are viable | part of a union |
| **D2, the compartment boundary and division** | membrane, parent and daughter compartments, the division event | what crosses the boundary; the stochastic sample of molecules | the physical division process, observable in vesicle experiments | part of a union |
| **D3, the verification frame** | experimenters, models, instruments | parent-offspring heritability measured as a variance fraction | a laboratory demonstration of heritable chemical change that does not update on the model's own report | ground, not a competitor domain |

**Why D3 has an anchor and is therefore a domain.** The anchor test (Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*) is met by a measurement, not by agreement. The Sokolskyi et al. 2024 serial-transfer experiment and the vesicle division models are candidate grounds, each with the limitation recorded in section 5.

**Partition or union.** D1 and D2 overlap: the carrier cannot be characterized without a boundary, and the boundary cannot be characterized without the thing it encloses. The overlap is a compound with its own loop, so the question is a **union** (Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*). One lever does not clear it: adding more compartments clears the region where compartments were the missing condition and leaves the arrangement and fidelity conditions standing (Fig 9 :55).

**Order by dependency (Fig 3).** Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* Therefore: (1) describe the residual before choosing a frame (Fig 9 :27-28); (2) settle whether the parent network is a viable closure before asking how it crosses (D1 before D2); (3) only then ask whether the crossed thing is inherited with variation and selection (D3). A claim about selection above a break in the carrier link is a reading of nothing (Fig 3 :22-23).

**Census table of figure lines (quoted before concluding).**

| figure | verbatim bearing | governing quantity |
|---|---|---|
| Fig 1 | *"The residual is indexed by object slot, not aggregated."* (:19) | per-compartment residual, not a population average |
| Fig 2 | *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* (:29) | ground for D3 |
| Fig 3 | *"A link with no instrument is not a link that works. It is a link nobody has looked at."* (:27) | broken link at the carrier/objective joint |
| Fig 4 | *"Only methods cross up. Only head starts come down."* (:22) | what kind of thing crosses the generation boundary |
| Fig 5 | *"settling is necessary for a term to be composed over, and it is not sufficient"* (:69) | a viable parent is not automatically a heritable parent |
| Fig 6 | *"MINT composes inside the closure and can never add an atom."* (:21) | no new molecule is created by inheritance itself |
| Fig 7 | *"Progress per handoff has two factors. Zero either and the chain runs in place:"* (:37) | fidelity and ground pressure across generations |
| Fig 8 | *"So a search that finds nothing is never a proof of absence."* (:39) | failure to find a mechanism is not absence of one |
| Fig 9 | *"describe it before you go looking, or any frame you pick will seem to fit"* (:27-28) | residual before frame |
| Fig 10 | *"If levels were copies there would be one lineage drifting and no branches."* (:70) | inheritance is a non-invertible transform |
| Fig 11 | *"Isolation is not removal of the habitat. It is substitution of one habitat for another."* (:66) | the daughter compartment is a new habitat |
| Fig 12 | *"The arrangement is the substance."* (:94) | the heritable object is the bond structure |
| Fig 13 | *"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."* (:75) | cross-kind composition inside the compartment |
| Operators | *"A produces B; B did not exist before"* (:37, production) | ordered crossing, not symmetric conjunction |
| Symbols | *"The gap between prediction and observation. The central quantity: everything the system does is driven by it."* (:38) | R is the aim, not a summary |

---

## 2. Findings

### F1 — The heritable object is the arrangement, not the ingredient list (decisive for D1)

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
Fig 12 :94: **"The arrangement is the substance."**
Fig 13 :129: **"A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term."**

A daughter that receives a sample of molecule concentrations but not the catalytic relations has received ingredients, not the network. The bond here is the typed catalytic relation (which species catalyses which reaction), and Fig 13 :23-24 names the structure directly: *"network that entities relate, and influence travels"*. The order is carried by the bond, not recoverable from the species list: Fig 13 :128, *"the order is not recoverable from the artefact. It is recoverable from the lineage."*

**Triangulation status:** `triangulated` across Fig 12 and Fig 13 (low overlap: one governs composition pricing, the other governs the substrate kinds). World corroboration: Hordijk, Naylor, Krasnogor and Fellermann 2018 define autocatalytic sets by *"reaction network structure and reaction kinetics"* and report that different closed RAF subsets inside compartments are the varying traits, not raw concentrations. Overlap with Hordijk and Steel 2014 is high (same RAF programme); the two count as one witness.

**Refuter:** a controlled division in which the daughter re-runs the parent's network with the catalytic relations destroyed or scrambled while the ingredient list is preserved. If the network reappears, the arrangement claim fails.

### F2 — What crosses must be a generator or head start, not a recording (governs D2)

Fig 4 :22: **"Only methods cross up. Only head starts come down."**
Fig 4 :23: **"upward: a method that can be reapplied. Never the recording of a particular success."**
Fig 4 :24: **"downward: something that makes the next search cheaper. Never a replay of what worked once."**
Fig 4 :25: **"A recording carried upward looks like knowledge and is a description of one occasion."**

Applied to the compartment generation boundary: a frozen concentration snapshot is a recording of one occasion. A catalytic seed or a surviving viable core is a head start, because it makes the daughter's re-derivation of the closure cheaper without replaying the parent's history. Hordijk and Steel 2014 state the chemical version directly: a viable core *"can, for example, be gained by a rare, spontaneous reaction that produces a 'seed' molecule that is required to make a viable core come into existence"*; Sokolskyi et al. 2024 transfer a 20% fraction of a reacted food set into fresh medium for ten generations, which is a head-start protocol, not a replay of a single composition.

**Strain test, declared.** Fig 4 literally governs the membrane between *sizes* (one agent and a population). Our crossing is between *generations* of compartments. Re-census: the generation boundary is a directional, lossy boundary with a filter, and Fig 7 independently governs the handoff between rooms. Two low-overlap figure lines (Fig 4 for the method/recording distinction, Fig 7 for the handoff) govern the same quantity here, so the reading is `specified` and not a strained single-figure fit. The mapping is stated openly, not hidden.

**Refuter:** show that a frozen one-occasion recording, with no catalytic seed and no re-applicable relation, is sufficient for the daughter to re-run the network. That breaks the method/recording boundary.

### F3 — The heritable unit is a catalyst-plus-cycle composition, and the chemical identity is not given

Fig 12 :119: **"A part that survives its own use."** (catalyst)
Fig 12 :121: **"The output re-enters as input."** (cycle)
Fig 12 :123: **"The group says what kind; the qualifier says which member."** (functional group)

The figures name two structural kinds that a heritable chemical network must instantiate: a part that survives its own use and a loop whose output re-enters as input. An autocatalytic set is the composition of these. Note the "shape, not a name" rule correctly applied: Fig 9 :32 says *"you get a kind of thing, never the answer itself"*, and the canonical README restricts that to a *missing* primitive. Catalyst and cycle are already listed in Fig 12, so naming them is a binding onto held atoms, not an invented seventh term. What the figures cannot supply is *which* molecule species plays the catalyst or closes the cycle. That remains a `gap` for the ground (Fig 13 :134: *"Unreachable is a verdict here, not a silence"*).

**Triangulation status:** figure definition is `single-source` (Fig 12) but the structural claim is corroborated at low overlap by the world literature on autocatalytic cycles; declared as one evidence pool in section 5.

**Refuter:** derive a heritable reaction network from the six-term set without any catalyst or cycle composition, or exhibit a network whose heritable part is a species that does not survive its own use across divisions.

### F4 — The daughter is a substituted habitat, so inheritance reproduces contact rather than subtracts a wall

Fig 11 :66: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."**
Fig 11 :67: **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."**
Fig 11 :68: **"what you failed to reproduce is invisible until the goal fails"**
Fig 11 :69: **"what you unintentionally introduced is invisible until it acts"**
Fig 11 :61: **"Introduction is available; exclusion is not."**

Division does not hand the network a blank room. The daughter's membrane composition, internal pH, volume and external food flux are actors it did not choose, and the parent cannot subtract them, only add to them. The silent failures are symmetric: a required catalyst lost by unequal sampling is invisible until the network fails; an uninvited actor (a toxic side product, a permeant inducer) is invisible until it acts. Both failure modes appear in the opened literature: Hordijk and Steel 2014 note loss of a viable core *"during a compartment division with an unequal distribution of molecules"*; Hordijk et al. 2018 demonstrate a *"toxic element"* that destroys another RAF subset and a *"permeable inducer"* that crosses the membrane and changes neighbouring compartments.

**Refuter:** exhibit a division that genuinely removes the habitat rather than substituting it, or a daughter that inherits all required contact with no unchosen actor. That breaks the substitution law.

### F5 — A lineage needs two factors: bracket fidelity and ground pressure

Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
Fig 7 :36: **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."**
Fig 7 :37: **"Progress per handoff has two factors. Zero either and the chain runs in place:"**
Fig 7 :38: **"the bracket's fidelity across the handoff"**
Fig 7 :39: **"the ground's pressure on the room"**

This is the central result for the question as worded. If fidelity is zero, the network is not inherited at all. If ground pressure is zero, compartments persist but no heritable change accumulates, which Fig 7 :32 calls *"one long room: motion, no progress"*. If both hold, the next compartment differs from the last and is selected against the residual the last surfaced (Fig 7 :36). Fig 7 :42 adds: *"The chain approaches the truth only as the world runs out of ways to refuse it."*

World corroboration at low overlap: Hordijk et al. 2018 observe that different closed RAFs in different compartments create *"different 'cell types' and competition between them"* and that resource diversion starves poorly endowed compartments; Hordijk and Steel 2014 list the three necessary conditions (compartments that grow and divide, multiple viable cores, spontaneous gain or loss). These are the same two factors in chemical vocabulary. Vasas, Szathmáry and Santos 2010 reach the opposite emphasis, *"Lack of evolvability... constraints metabolism-first scenarios"*, which is handled in section 4 as a conflict returned to the census.

**Triangulation status:** `triangulated` (Fig 7 handoff plus Fig 10 :70 non-invertible transform, plus the independent compartment-population literature).

**Refuter:** a lineage in which compartments are copied with perfect fidelity and no selection among them, yet open-ended heritable complexity accumulates. That breaks the two-factor claim.

### F6 — The crossing is lossy and non-invertible, which is why branches appear

Fig 10 :70: **"If levels were copies there would be one lineage drifting and no branches. The tree of life is what a non-invertible transform looks like from outside."**
Fig 10 :68: **"Different actors, a different currency, a different ground, and a lossy transform between."**
Fig 4 :27: **"The transform between scales loses information, and that is the point."**
Fig 4 :34: **"A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes."**

Inheritance is therefore not a photocopy. The seed is a generator; the daughter's conditions decide what it becomes. This is why the answer must contain both conservation (the arrangement crosses) and variation (the crossing is lossy and sampled). It also rules out a verbal shortcut: *"the network is copied into the daughter"* is a recording claim in the figures' sense.

**Refuter:** a demonstration that the transform from parent to daughter is invertible, so the daughter is an exact replay of the parent and no branching is possible.

### F7 — The question is a union, and the missing chemical identity is an honest gap

Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**
Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134: **"Unreachable is a verdict here, not a silence"**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

The union members are: what the heritable object is (D1), how it crosses a substituted habitat (D2), and what makes the crossing a selected lineage (D3). The figures return all three shapes. They do **not** return the chemical identity of the carrier, the membrane composition, or a numerical fidelity threshold. That is a `gap` of the unreached kind, not a silence and not an invitation to invent an answer. Fig 1 :19 (*"The residual is indexed by object slot, not aggregated."*) requires the verdict per compartment system, not averaged into a single origins-of-life story.

### F8 — The verification frame cannot certify itself by agreement among models

Fig 2 :29 (anchor), Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**
Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."**

RAF theory, GARD and the stochastic corrector model draw on overlapping evidence pools and cite one another. Their agreement is one witness talking, not corroboration (Fig 8 :48: *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."*). The genuinely lower-overlap witness is the wet-lab serial-transfer work (Sokolskyi et al. 2024), and even that is a mechanism-shape analogue: its vials are not dividing vesicles, so its heritability is not the same measured object. Recorded as such.

### F9 — What survives, with its mode attached

| claim | mode | figure / source |
|---|---|---|
| The heritable object is the catalytic arrangement, not the ingredient list | `specified`, triangulated | Fig 12 :5, :94; Fig 13 :129 |
| What crosses the boundary is a generator or head start, not a recording | `specified`, mapping declared | Fig 4 :22-25; Fig 7 :35-39 |
| The heritable unit instantiates catalyst and cycle, but its chemical identity is open | `specified` shape, `gap` on identity | Fig 12 :119, :121; Fig 9 :32 |
| The daughter is a substituted habitat with unchosen actors and two silent failures | `specified` | Fig 11 :61, :66-69 |
| A lineage needs bracket fidelity and ground pressure; zero either and it runs in place | `specified`, triangulated | Fig 7 :35-39; Fig 10 :70 |
| The crossing is lossy and non-invertible, so branches appear | `general` structural | Fig 4 :27, :34; Fig 10 :68, :70 |
| Which specific molecule or membrane chemistry does the work | `gap`, unreached | no figure line; requires an instrument |

---

## 3. Pre-registered refuter

Written before the conclusion and before any outreach, per the seat rule that a falsifier written before the run is a design instrument. The shape claim is refused if any of the following holds:

1. A controlled division shows the daughter re-running the network with the catalytic relations destroyed or scrambled while the ingredient list is preserved (breaks F1, Fig 12 :5 and :94).
2. A frozen one-occasion recording, with no catalytic seed and no re-applicable relation, is sufficient for re-run (breaks F2, Fig 4 :22-25).
3. Perfect fidelity with no selection among compartments still yields open-ended heritable complexity (breaks F5, Fig 7 :37-39).
4. A division removes the habitat rather than substituting it, or a daughter inherits all required contact with no unchosen actor (breaks F4, Fig 11 :66-69).
5. A heritable reaction network is derived from the six-term set with no catalyst or cycle composition (breaks F3, Fig 12 :119, :121).

If any fires, the shape is withdrawn or narrowed. Until one is run, no part of this is `grounded`.

---

## 4. Conflict handling: a disagreement returned to the census, not a flipped verdict

Two opened sources disagree. Vasas, Szathmáry and Santos 2010 argue that self-sustaining autocatalytic networks show a *"Lack of evolvability"* that *"constraints metabolism-first scenarios"* and that hereditary transmission requires *"ensemble replication of molecular networks"*. Hordijk and Steel 2014 and Hordijk et al. 2018 argue that autocatalytic sets *"can be evolvable"* and *"can, at the least, show a form of pre-template Darwinian evolution"* once compartments and multiple viable cores are present.

Per the rule that a conflict sends us back to the census and never flips the verdict, the disagreement resolves into the union already found: the pessimistic result concerns D1 alone (a closure without compartments or a gain/loss mechanism), the optimistic results concern D1 plus D2 plus a gain/loss mechanism. The conditions named by Hordijk and Steel (compartments that grow and divide; multiple viable cores; spontaneous gain or loss) are exactly the union members. The verdict is not flipped; the conflict is recorded as evidence that the question is a compound. Agreement from the shared RAF evidence pool is one witness, not two.

---

## 5. Strains, re-census and retraction log

| earlier reading | status now |
|---|---|
| "Inheritance means the molecules are copied into the daughter" | **Retracted.** Fig 12 :5 and :94: the arrangement is the substance. A concentration list is a recording, not the network. |
| "Fig 4 governs scale crossing only, so it cannot bear here" | **Narrowed, not erased.** Re-census: Fig 7 independently governs the directional handoff between rooms; the method/head-start distinction is triangulated across two low-overlap lines. Mapping declared as `specified`. |
| "A viable parent network is therefore a heritable network" | **Retracted.** Fig 5 :69: settling is necessary but not sufficient. Fig 11 :67-69 supplies the habitat substitution and the two silent failures. |
| "Darwinian inheritance is just high copying fidelity" | **Retracted.** Fig 7 :37-39: two factors. Fidelity alone gives motion without progress. |
| "Shape, not a name forbids naming catalyst and cycle" | **Refused.** The rule governs a missing primitive (canonical README). Catalyst and cycle are held atoms of Fig 12, so the naming is a binding. The chemical identity remains a `gap`. |
| "The evolving-RAF and no-evolvability papers contradict each other" | **Dissolved by re-census.** Different domain coverage (D1 alone versus D1 plus D2 plus gain/loss). Verdict unchanged. |
| Fig 13 six-term substrate mapped onto chemistry | **Not strained.** Fig 13 :24 (network), :22 (gradient as spendable difference), :14 (energy as conserved and finite) govern chemical objects directly. The mapping is `specified` and recorded. |
| Catalyst *"survives its own use"* versus real catalysts that degrade | **Live type question, named not hidden.** The figure defines a structural kind; a physical molecule approximates it to some degree. The degree is a measurement, not an argument. |

## 6. Canonical usage check

- `FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"*; *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; the framework returns *"a shape, not a name"* and stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* *"Indiscernibility is not identity."*
- Apply that here: the shape is returned, the chemical identity is not, and the stop is recorded with a refuter and an instrument requirement. No claim in this folder asserts that the framework has settled how life began.

---

## 7. Recommendation

1. Lead with the shape and the refuter, not with the framework. Ask what a failure would look like before showing any theory (Fig 10 :52: *"Bring a characterised residual, never the source."*).
2. Keep the verdicts per domain separate. Do not average D1, D2 and D3 into a single origin story (Fig 1 :19).
3. Treat the union as a compound: a lever that adds compartments does not clear the arrangement or fidelity conditions (Fig 9 :55-57).
4. Name the missing instrument, not a missing molecule. The discriminator must distinguish an inherited catalytic arrangement from an inherited ingredient list, which is the metamerism problem of *The Hard Problem is About Source* in chemical form.
5. Send the public venues in `03_public_contact_points.csv`, one to one. Do not ask for agreement or trust (Fig 2 :35, Fig 2 :40).
