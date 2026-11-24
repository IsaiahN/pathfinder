# Figure-grounded audit: does extinction order matter?

**Mode of this document: `specified` on the per-domain findings, `general` on the structural separator, `gap` on a universal order rule, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap*: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the ecological question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Primary: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `THE_FORMULA.md`. Secondary: the sources in `10_source_ledger.csv`, all opened 2026-11-23. Every quoted string marked `Fig N :line` was checked character by character against the figure extract.

---

## 0. The residual in effect terms

Two communities begin with the same species set. Both end with the same set of species removed. They differ only in the **order** of removals. We observe different functioning and different stability. The residual is the part of that difference not explained by which species were lost or by how many were lost.

Stated as an effect, not a mechanism:

> Does the map from an ordered removal sequence to (functioning, stability) factor through the unordered removal set, or does it depend on the path? If it factors, order is a bookkeeping artifact. If it depends on the path, order is a live variable and a measurement that records only the final species list has thrown the variable away.

Fig 9 :22 gives the description axes: *"arity · symmetry · scale"*.

- **Arity.** The residual is indexed by an ordered k-tuple of removals, k at least 2. There are k! candidate orders over the same final set. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* The slots here are the species removals and the functions measured.
- **Symmetry.** The whole question is whether the outcome is invariant under permutation of the removal sequence. That is a symmetry test, and the figures have a typed operator for exactly this test (F1 below).
- **Scale.** Community and ecosystem scale, the habitat of Fig 11, not the single-species population. At the population scale the residual would be a different question, "why did this species go first", which belongs to ECO-0022.

Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* The ecology literature already shows this split: Larsen, Williams and Kremen (2005) find order-dependent functional loss in two systems, while Clare, Garcia and Bolam (2024) find loss and recovery sequences that differ but functional relationships that are largely the same. That is not one question with opposite answers. It is a union of conditions, and the census must find them before any verdict is stated.

---

## 1. Domain census before choosing any figure line

Descriptor of R: ordered arity k, symmetry unknown and under test, community scale. One line per domain with actors, currency and anchor. A domain without a nameable anchor is not yet a domain.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1, dependency structure of the community** | species and their relations: *"relations: pollination, predation, competition, dependency"* (Fig 11 :47) | interaction strength, abundance, functional contribution | measured process rate, an outcome that does not move when a frame changes its mind (Fig 2 :29-30) | ordered-bond question; partition boundary when a removal breaks a dependency |
| **D2, functional traits and redundancy** | functional groups, effect traits, response traits | effect on a named function versus substitutability at fixed richness | the same measured function, but indexed per function, not pooled (Fig 1 :19) | symmetric-bond question where members are interchangeable for the measured function |
| **D3, habitat and disturbance** | habitat conditions, disturbance timing, the maintaining seat | contact, introduction versus exclusion, disturbance order | the measured state of the habitat after the cascade stops (Fig 11 :43-48) | ordered-bond question coupled to D1; disturbance selects which species go first |
| **D4, measurement and verification** | instruments, sequence-resolved experiments, expert readers | residuals and ground contact | the ground, never agreement (Fig 10 :24, Fig 2 :45) | instrument question; currently a `gap` for a universal order rule |

**Partition or union.** Union. Fig 9 :55-57: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* The "effect of extinction order" is the intersection of dependency, redundancy and habitat coupling. A lever that only changes species identity leaves the order condition standing; a lever that only changes richness leaves the dependency condition standing.

**Order by dependency (Fig 3).** Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces"*. So:

1. Describe R before picking a frame (Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*). Done in section 0.
2. Enumerate the habitat from contact outward (Fig 11 :43-48), including second and third order effects (Fig 11 :52-54). This fixes D1 and D3 before D2.
3. Settle whether the species contributing to a function are interchangeable (D2) before claiming order matters for that function. A symmetric bond at D2 can cancel an ordered bond at D1 for a particular function.
4. Only then ask for an instrument (D4). Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

**Anchor test applied.** D1, D2 and D3 all have a nameable anchor: a measured rate, biomass, or state variable that does not change because a frame prefers an answer. D4's anchor is the ground directly. All four are domains. No domain was invented from a figure line alone.

---

## 2. Figure census

| figure | bearing on this residual | verdict after census |
|---|---|---|
| **1 The Agent** | residual per slot; ground is the only metric | order must be indexed per removal slot and per function, never pooled into one stability number |
| **2 The Ground** | anchor must not update; agreement is not corroboration | the anchor is a measured function, not expert opinion about which order is worse |
| **3 Dependency Chain** | chain ordered by dependency, not importance | early removals of upstream links are load bearing; a reading below a broken link reads nothing |
| **4 The Membrane** | methods cross up, recordings do not | a past order replayed is a recording, not a generator for the next community |
| **5 Mint Pipeline** | guards and MDL bargain | no new primitive is owed; the ordered and symmetric bonds are already in the library |
| **6 Closure / Reachability** | import is the only wall mover; instruments built from worse instruments | a universal order rule is not reachable from the bond set alone; a discriminator is owed |
| **7 Room Chain** | agreement compounds, evidence does not | two reviews agreeing from one literature is one witness |
| **8 Union Surplus** | describe R first; identical contents, different provenance | convergence and import look alike; the sequence record is the whole issue |
| **9 Leave / Arrive** | arity, symmetry, scale; split unions; describe before looking | this is a union, and the shape returned is a separator, not a ranking |
| **10 Ground Maintainer** | channel decays, ground does not; bring a characterised residual | what would settle it is an instrument, not consensus |
| **11 The Habitat** | enumerate, never compose; contact cascades; valence relative to R; asymmetric introduction | the mechanism lives in the contact network, not in a standing list of "important species" |
| **12 The Bond** | ordered versus symmetric bonds; subtraction, production, sequence; isomer, functional group, lineage | **this is the decisive figure**: whether order matters is a bond-type question |
| **13 Minimum Viable Set** | different routes can arrive at the same substance; route not recoverable from artefact | the final species list is an artifact; the order is the lineage |
| **Operators table** | swap tests separate symmetric from ordered bonds | provides the operational test for the F1 verdict |
| **Symbols table** | R is always a slice; what cannot be perceived is residual | an unmeasured order effect is a residual, not evidence of no effect |

Strained readings are named and re-censused in section 7, not smoothed over.

---

## 3. Findings

### F1 — Order dependence is a bond-type question (decisive, triangulated)

Fig 12 :46-47: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."*

The figures give an explicit swap test for each bond. For conjunction, Fig 12 :59: *"swap the operands. Does the meaning change? No."* For sequence, Fig 12 :72: *"A then B; B needs A to have happened"* and Fig 12 :74: *"swap them. Does it become a different thing? Yes."* Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."* The Operators table states the consequence directly: *"Under an ordered bond, different orders are different terms, and charging for the sequence is correct."*

Applying the test to the residual:

- If the removal of species A and species B is a **symmetric** conjunction, removing A then B and removing B then A are one term. k orders give k! spellings and one outcome. Order is bookkeeping.
- If the removals are joined by an **ordered** bond (sequence, production, or subtraction over a dependency), the two orders are different terms. Order is a live variable.

This is not an analogy imposed on ecology. It is the figure's own symmetry test applied to the object the question names. The census decides which bond holds per domain, so there is no averaging of the two answers.

**Refuter.** Show a community whose removals are dependency-linked (pollination, predation, trophic supply) in which every permutation of the same removal set yields the same measured function and stability at the same remaining set. That collapses the ordered bond to a symmetric one and F1 fails for that domain.

### F2 — Extinction is subtraction applied to an actor, not to the habitat (triangulated)

Fig 12 :82: *"is the second operand's absence the point? Yes."* This is the test for the subtraction bond, named *"A with B removed or absent"* in the same row. The Operators table states what the bond is for: *"progress is a subtraction, which is why a vocabulary without it cannot say how far along it is"*.

Fig 11 :61-62: *"You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."*

A species can be subtracted. The contact structure it leaves behind cannot be subtracted by the same act. The relations persist and act on the survivors. So a sequence of extinctions is a sequence of typed subtractions over a structure that is not rewritten by the subtraction, which is exactly why the order of the subtractions can matter. Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*

**Refuter.** Show that after a removal the contact structure is fully rewritten to match the remaining species list, so that no historical relation survives to act on survivors. Then the subtraction is only a set operation and the order carries nothing.

### F3 — Contact cascades make first-order enumeration wrong (triangulated with world sources)

Fig 11 :52-54: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

Fig 11 :43: *"The habitat is enumerated, never composed."* Fig 11 :48: *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."*

So the set of species that actually disappears is not necessarily the set selected for removal. A removal three steps out can fire a coextinction cascade. World corroboration: Ebenman (2011) reports that sequential deletion under an IUCN-based scenario removed large-bodied top predators and mega-herbivores first and changed trophic structure in ways that might affect robustness to future disturbances. Wikipedia "Extinction" states: *"The extinction of one species' wild population can have knock-on effects, causing further extinctions. These are also called 'chains of extinction'."* (Tertiary source, corroboration only.) Wikipedia "Cascading failure", from systems engineering: *"A cascading failure is a failure in a system of interconnected parts in which the failure of one or few parts leads to the failure of other parts, growing progressively as a result of positive feedback."*

**Refuter.** A controlled removal sequence in which no secondary extinction or abundance change occurs outside the selected species, with the contact network measured before and after. Then first-order enumeration is adequate for that community and F3 does not apply there.

### F4 — Dependency order makes early removals load bearing (triangulated)

Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces"*. Fig 3 :22: *"A step whose input never arrives cannot be diagnosed, only its predecessor can."* Fig 12 :76: *"A produces B; B did not exist before"* is the production bond.

If species B depends on species A (A produces B in the relevant function), then subtract A first and B loses its input before it is itself removed: the function collapses at an earlier step than if B were removed first. The final set is the same; the path, the timing of the collapse and the state of the survivors differ. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

**Refuter.** Measure a system in which removing a dependency base before its dependent produces the same functional trajectory as removing the dependent first, across all intermediate states, not only at the endpoint. That dissolves the production bond here.

### F5 — The final species list is an artifact; the order is the lineage (decisive, triangulated)

Fig 13 :129: *"Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available. The space has no last route and every turn begins from a remainder the last one left, so the order is not recoverable from the artefact. It is recoverable from the lineage."*

Fig 13 :130: *"A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term."* Fig 12 :94: *"The arrangement is the substance."*

This is the measurement-level answer to the question. A survey that records only final richness, final species identities or final interaction strengths has recorded the atoms and discarded the route. Two communities with identical final lists can be different substances. The lineage, the dated sequence of removals and the intermediate states, is not documentation of the outcome; for this question it is part of the outcome.

World corroboration: Wikipedia "Extinction debt" states *"In ecology, extinction debt is the future extinction of species due to events in the past."* A species list today therefore does not determine the state tomorrow. Wikipedia "Priority effect" quotes Robert May: *"If there is a unique stable state, historical accidents are unimportant; if there are many alternative locally stable states, historical accidents can be of overriding significance."*

**Refuter.** Show that final richness plus final interaction strengths predicts function and stability with zero residual variance attributable to route, across multiple orders at the same final set. Then the lineage carries no information the artifact lacks and F5 fails.

### F6 — Over the fixed atom set, two loss orders are isomers only under an ordered bond (triangulated)

Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :95-96: *"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."*

Two communities that lost the same set and retain the same set have identical atoms. If their removal sequences differ and their measured behaviour differs, they are isomers under Fig 12. If their measured behaviour does not differ, Fig 12 :92 makes them one term, not two isomers. So the isomer claim is a falsifiable empirical claim, not a metaphor.

**Refuter.** Same remaining atoms, different recorded routes, identical measured function and stability within instrument resolution. Then the bond is symmetric for that function and the isomer claim is withdrawn for that function.

### F7 — Functional redundancy is the symmetric domain (triangulated, and a world conflict)

Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* Where species in a group are interchangeable for the measured function, the group fixes the outcome and the member's identity is the qualifier. Under Fig 12 :92, k spellings collapse to one term.

World source that **conflicts** with an unconditional order-matters claim: Clare, Garcia and Bolam (2024), Oikos, report *"BEF relationships for biodiversity loss and recovery were largely the same despite species extirpation and recolonisation sequences being different"*, and attribute this to *"different species present at comparable levels of species richness during biodiversity loss and recovery phases have similar functional effects"*. Per the WATSON conflict rule this does not flip a verdict. It sends us back to the census: D2 is a distinct domain with a symmetric bond for the measured function (bioturbation potential), and its verdict is "order does not matter here". The two verdicts are kept separate.

**Refuter for the symmetric-domain verdict.** A sequence effect on that same function in that same system when richness is held fixed, larger than instrument noise. Then Fig 12 :92 has been misapplied and the domain is dependency-structured after all.

### F8 — Pooled stability hides the signal (triangulated)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

"Functioning and stability" in the question is a bundle of slots: pollination rate, dung burial, biomass production, resistance, recovery, persistence. A single stability index is an aggregation across those slots and across species. The order signal can be live in one slot and invisible in the average. Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*. So a null result from a pooled index is not evidence that order does not matter.

**Refuter.** A pooled index that predicts every per-function trajectory with no loss of order information, demonstrated by showing the aggregate reconstructs each slot exactly. Otherwise the pooling is lossy by construction (Fig 4 :27).

### F9 — The universal order rule is a `gap`, not a silence

No figure line returns a ranking of which extinction orders are worst, a threshold in number of removals, or a universal rule such as "lose generalists first". Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

What is owed is a discriminator: a sequence-resolved experiment at fixed final species set, with function measured per slot against a ground that does not update on the experimenter's expectation. Fig 6 :39: *"instruments do not have to improve by small steps. A jump in resolution is fine"*. Fig 3 :27 again: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

**Refuter for the `gap` claim.** Produce a figure line that does select an order, or an instrument-independent derivation from the bond set that ranks k! orders. Neither exists in the extract as read. If one is supplied, this finding is withdrawn.

### F10 — Prestige and agreement cannot settle which order is worse

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*. Fig 7 :12-13: *"same closure, handed along; agreement compounds, evidence does not"*.

The relevant world literature (Larsen 2005, Ebenman 2011, Clare 2024, the Wikipedia syntheses) is not three independent witnesses. The ecology papers cite one another and share the biodiversity-ecosystem-functioning evidence pool. Two reviews agreeing about "order matters" is one pool talking. From *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*

**Refuter.** Two independent instruments, drawn from different closures and not citing one another, each ranging separately against the same non-updating function measurement. That would convert agreement into triangulation.

### F11 — Priority effects are an analogue, not the same residual

Wikipedia "Priority effect": *"In ecology, a priority effect refers to the impact that a particular species can have on community development as a result of its prior arrival at a site."* Arrival order is an ordered bond on the same dependency structure that extinction order acts on, with the sign reversed. The analogue is legitimate because both are sequence questions about the same contact network, not because the two literatures measure the same quantity. Marked as corroboration of the shape only, with low overlap (community assembly versus biodiversity-ecosystem functioning).

**Refuter.** Show that arrival-order effects require a mechanism (propagule pre-emption, facilitation) that has no counterpart in removal sequences. Then the analogue is dropped and the figure derivation stands without it.

### F12 — The want is a refusal, not a new primitive

Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world"*. The ordered bonds, subtraction and the symmetric bond are already in the library. Fig 6 :21: *"MINT composes inside the closure and can never add an atom."* So the correct response to "order matters" is not to mint a new primitive called extinction order. It is to bind the question to the held bond set and refuse the reading that a species list determines an outcome.

**Refuter.** A demonstration that neither subtraction nor sequence nor symmetry can express any part of the observed order effect, so a new atom really is owed. None was found.

---

## 4. Pre-registered refuter (written before the conclusion)

The shape claim is refuted if any of the following is observed:

1. In a dependency-structured community, every permutation of the same removal set gives the same measured function and stability at the same remaining set, within instrument resolution. That collapses the ordered bond to a symmetric one.
2. Final species identities plus final interaction strengths predict every function and stability outcome with zero residual attributable to route. That kills the lineage claim (F5).
3. Two communities with the same remaining atoms and different recorded routes have identical measured behaviour on every function. That kills the isomer claim (F6).
4. A controlled sequence shows no secondary extinctions, abundance changes or deposit effects, so contact cascades do not operate in that system. That narrows F3 out of that domain.
5. Removing a dependency base before its dependent produces the same intermediate trajectory as the reverse order. That dissolves the production-bond claim (F4).
6. A figure line is produced that ranks k! extinction orders, or an instrument-independent derivation does so. That closes the declared `gap` (F9).

If any fires, the affected finding is withdrawn and the retraction is recorded in section 7. Until an instrument runs, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the separator, not with a verdict about which order is worse. The separator is: ordered bonds give order dependence, symmetric bonds give order independence, and the two domains must be kept apart.
2. Index the residual per function and per removal slot (F8). Never report a single pooled stability number as the answer.
3. Record the lineage: dated removal order, intermediate states, secondary extinctions, and the function readings at each step (F5). The species list alone is the artifact, not the result.
4. Test the swap explicitly (F1). For the function of interest, swap two removals and ask whether the measured outcome changes. That is the figure's own operational test.
5. Treat functional redundancy as the symmetric domain and report its null verdict separately (F7). Do not average it with the ordered-domain verdict.
6. State the `gap` plainly (F9). What is owed is a sequence-resolved instrument, not another review.
7. Send the generator (the separator, the refuter and the lineage requirement), not a conclusion about conservation priorities. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*

---

## 6. Canonical usage check

Two framework sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of what instruments distinguish and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws and decide design questions by derivation; the seat must not ask the ground maintainer for rulings the figures already settle. Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*

### Retraction and confirmation log

| earlier reading | status after re-census |
|---|---|
| "Extinction order always matters" | **Retracted.** Conditional on an ordered bond. The symmetric domain (F7) gives order independence for the measured function. |
| "Same species lost means same outcome" | **Retracted.** Fig 13 :129 makes the route part of the result, not documentation of it. |
| "This is an isomer claim, full stop" | **Narrowed.** Only over a fixed atom set and only under an ordered bond (Fig 12 :92, :117). |
| "Priority effects prove extinction order matters" | **Narrowed to analogue.** Arrival and removal are different experiments on the same contact structure (F11). |
| "The literature agrees, so the verdict is settled" | **Refused.** The ecology sources share one evidence pool; agreement is not a witness (F10). |
| "No figure line governs, so say nothing" | **Refused.** F1 to F8 govern. Only the universal ranking is a `gap`; unreachable is a verdict (Fig 13 :134). |
| Apparent conflict Fig 12 :117 (isomer) versus Fig 12 :92 (symmetry) | **Not strained.** Re-census assigns :117 to ordered bonds and :92 to symmetric bonds. Different bond types, one figure, no contradiction. |
| Apparent conflict Fig 11 :61 (cannot subtract habitat) versus extinction as subtraction | **Not strained.** Re-census: subtraction acts on actors; contact is not subtracted by the same act. Different objects. |
| "shape, not a name" forbids naming sequence and subtraction | **Overstatement retracted.** The phrase governs a *missing* primitive. Sequence and subtraction are already held bonds (Fig 12); naming them is a binding, not an invented atom. |

### Verdict after the canonical check

The shape survives: order dependence is a bond-type question; the final species list is an artifact and the removal sequence is the lineage; the ordered and symmetric domains must be reported separately; the universal order ranking is unreached and needs an instrument. No strain remains hidden after re-census. All corrected or narrowed earlier readings are preserved above.

---

## 7. Strain and re-census log

- **S1, Fig 12 :117 versus Fig 12 :92.** Resolved by bond-type census. Isomer applies under ordered bonds; the k-spellings-one-term rule applies under symmetric bonds.
- **S2, Larsen/Ebenman versus Clare.** World conflict returned to census. Dependency-driven pollination and dung-burial functions (ordered, size-asymmetric) versus functionally redundant benthic bioturbation at comparable richness (symmetric). Two domains, two verdicts, no flipped verdict.
- **S3, subtraction versus contact.** Resolved by actor/habitat distinction (Fig 11 :61-62).
- **S4, pooled stability versus per-slot residual.** Resolved by Fig 1 :19/:22. Aggregation is a lossy transform (Fig 4 :27).
- **S5, arrival order versus removal order.** Kept as a named analogue with a sign reversal, not an identity claim.
- **After re-census: zero hidden strains, one live instrument gap (F9), one live type question (does an ordered bond hold for a given function), both stated.**

---

## 8. Summary verdict

- **D1 dependency structure:** order matters. `specified`, triangulated (Fig 12 + Fig 3 + Fig 11; world: Larsen 2005, Ebenman 2011, priority effect, extinction).
- **D2 functional redundancy:** order does not matter for the measured function. `specified`, triangulated (Fig 12 :92/:124; world: Clare 2024).
- **D3 habitat and disturbance:** order matters through disturbance-selected sequences and cascades. `specified`, triangulated (Fig 11 + Fig 3; world: Larsen 2005, cascading failure).
- **D4 universal order rule:** `gap`, unreached not unreachable; an instrument is owed (Fig 9 :32, Fig 13 :134, Fig 3 :27).

Verdicts are not averaged. The whole derivation is internal consistency, not corroboration.
