# Figure-grounded audit: can a general theory explain ecological network resilience?

**Mode of this document: `specified` on the ecological application, `general` on the structural shape, `gap` on the inventory of traits. Not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** The figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the world sources listed in `10_source_ledger.csv`. Every figure quote below was opened in the verbatim extract this session.

---

## 0. The claim under audit

> Question: Can a general theory explain when ecological networks are resilient, or does resilience depend too strongly on context?
>
> Option A: a small set of structural terms predicts resilience across habitats, so the recovery shape is derivable from network composition alone.
> Option B: resilience depends so strongly on the habitat that no general statement survives contact with a case, so only case studies can speak.

Both options are readings of one residual, and the residual decides between them. The audit below derives the shape from the figures before looking at the ecological literature. World sources are admitted only after the figure verdict is recorded, and they corroborate or conflict without overruling.

**Strain test applied throughout.** Where a figure line only fits by forcing it, it governs another quantity and the census is redone. Two early readings were sent back to census and are preserved in §7, not quietly erased.

---

## 1. The residual in effect terms

Let a network be a frame Γ with a library of terms (species, interaction links, interaction strengths, slow variables) and a prediction Γ(b,a) for the system's response to perturbation a, given belief b built from its history and inherited priors. The habitat returns o′. The residual is

```
R_s(a,t) = |Γ(b,a)_s(t) − o′_s(t)|
```

where s is an object slot: a species, a functional group, an ecosystem function, a basin, a patch. Three properties matter before any theory is chosen.

1. **Arity.** R is a multi-place relation among network structure, perturbation, habitat conditions and observed response, indexed by slot and ordered in time. It is not a two-place relation between "diversity" and "stability."
2. **Symmetry.** "Resilient" is a threshold relative to a perturbation and a baseline, not an intrinsic quantity. Fig 12 :87 describes comparison as *"a threshold relation between two quantities"*; the test is *"is it about which is larger, rather than both being present? Yes."* A pooled resilience score is a comparison whose operands have been dropped.
3. **Scale.** The loop runs at the population slot, the network, the ecosystem and across scales through a lossy membrane. Fig 4 :19-20 is explicit: *"Only the actors, the currency and the anchor change."* A claim that holds at the patch scale is not automatically a claim at the landscape scale.

The two candidate answers commit to different objects. Option A seeks a term that predicts the *shape* of R across slots from network structure. Option B denies that any such term exists and substitutes a list of case descriptions. The figures return a third thing: a shape with conditions, plus an acknowledged gap where the specific inventory would go.

---

## 2. Domain census

R by arity, symmetry and scale was stated in §1. One line per domain gives actors / currency / anchor. A domain needs a nameable anchor; without one it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Network composition | species, interaction links, interaction strengths, modules | flows, interaction effects, composition inside closure(Γ) | the measured recovery of each slot, outside the graph | admitted |
| D2 Habitat / context | conditions (light, water, temperature, season, terrain), relations (pollination, predation, competition, dependency) | contact and cascade | the ground, which settles and does not update on the model | admitted |
| D3 Perturbation and instrument channel | the shock, indicators, sampling design, metrics | residual R per slot, contact with the ground | the ground, which does not decay; the channel does | admitted |
| D4 Theory and verification frame | modellers, meta-analyses, peer frames | agreement and residuals | experiment, monitoring data, independent instruments | admitted |
| X1 "Resilience as a property of the network alone" | the graph | none nameable independent of measurement | none: the graph has no anchor that settles recovery | not a domain yet |
| X2 "Context alone, with no network structure" | the habitat | contact | already inside D2 | absorbed |

**Union, not partition.** D1 and D2 form a compound: a network's capacity is a property of network-and-habitat (Fig 11 :39). D3 and D4 form a second compound: the reading of recovery is a channel-to-anchor question, not a property of the indicator alone. The whole question is a union of at least two overlapping conditions, C1 (a maintained channel to a non-updating ground, so R can be read per slot) and C2 (renewed reach through contact with a differing closure, so the network can respond to a residual that changed). Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

**Order by dependency (Fig 3).** The chain is: perceive R per slot (link 1) → have terms for what a perturbation affords and what would count as recovery (link 2) → state the objective in the frame's own terms (link 3) → choose a route under incomplete information (link 4) → name what worked, verify it and carry it (link 5). Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The objective link is where resilience research is weakest, because a global index can be computed without saying recovery of what, to what.

---

## 3. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual indexed per slot; frame-internal quantities disqualified | no single global resilience score can be the ground |
| 2 The Ground | anchor must not move; triangulation not negotiation; correlation valence | measured recovery is the anchor, agreement is not |
| 3 Dependency Chain | objective link has no instrument in most studies | diagnose link before scoring networks |
| 4 The Membrane | only methods cross up, head starts down; round trip has a gap | cross-scale claims are lossy and need R_T |
| 5 Mint Pipeline | three guards as a product; MDL bargain; fifth kind is a refusal | a claimed general term must pay cost plus leftover |
| 6 Closure / Reachability | import is the only operator that moves the wall | internal rearrangement cannot add a new response type |
| 7 Room Chain | room agreement is variation; no last room | many case studies in one closure do not add evidence |
| 8 Union Surplus | closure idempotent; search finding nothing is not proof of absence | underivable is not the same as unreachable at budget |
| 9 Leave / Arrive | union versus partition; describe residual before frame; filters versus witnesses | the either/or is a union; effect sizes are filters |
| 10 Ground Maintainer | ground does not decay, channel does; bring a characterised residual | a saturated indicator is a channel failure, not a resilience result |
| 11 The Habitat | capability is agent-and-habitat; enumerate habitat; valence relative to residual; cascades | decisive: context is constitutive, not an add-on |
| 12 The Bond | threshold relation; isomers; functional group; two currencies | same species set, different bond, different substance |
| 13 Minimum Viable Set | set closed, arrangements not; infinite effort in a finite reach | a general *list* is unreachable; a general shape is not |
| Operators table | ⋛ comparison; ¬ refutation | the verdict may need to refuse a term, not mint one |
| Symbols table | R is the aim, always a slice; ground is the anchor | no global R; anchor outside the frame |

Strained readings are named as such in §7, not smoothed over.

---

## 4. Findings

### F1 - The question is a bundled union, not two opposite answers (decisive for the framing)

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

C1 (a channel to a measured, non-updating ground) and C2 (contact with a differing closure, so the network has terms for a changed residual) overlap. A single lever clears the region where only one holds and leaves the intersection standing. Asking "general theory or context" treats a union as a partition and therefore asks for a verdict that cannot be returned.

**Refuter:** show that C1 and C2 are independent with no overlap in at least one documented system, or that one lever clears both conditions with no categorically different residue. Then the partition reading stands and this finding is withdrawn.

Mode `general` for the union structure, `specified` for this question. Triangulated across Fig 9 and Fig 11 (two different figures, low overlap: one is about search shape, the other about habitat).

### F2 - Resilience is a property of network-and-habitat, never of the network alone (decisive for Option A)

Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

Substituting the ecological cast: a network's capacity to absorb a shock is a property of network-and-habitat. Adding a species or a link that does not change contact with the ground changes nothing that the ground pays for. This is not a denial that topology matters; it is a denial that topology alone can be the object of a general predictive theory. Option A, read as a theory of the graph, is refused. Option A, read as a theory of the *relation* with named conditions, survives.

**Refuter:** demonstrate a structural invariant that predicts recovery across a documented change of habitat and residual, with the habitat's contribution measured separately and found to be zero. That would refute the agent-and-habitat claim at this scale.

Mode `specified`. Triangulated across Fig 11 and Fig 2 :29 (habitat/capability versus anchor definition, different bearings).

### F3 - No standing list of resilience-conferring traits survives a change of residual

Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."* Fig 11 :51: *"No standing list of good actors survives a change of residual."*

This is the figure-level reason why "context dependence" is not a nuisance parameter. It is structural. A predator, a mutualist, a diversity level or a modular topology has no valence fixed in advance; the residual selects the valence. The literature corroborates at low overlap: Allesina and Tang 2012 report that *"predator–prey interactions, which are stabilizing, and mutualistic and competitive interactions, which are destabilizing"* under one set of assumptions, while the same authors note that realistic food-web structure can *decrease* stability. Trait lists are bindings under a declared residual, not general findings.

**Refuter:** exhibit one trait whose sign is invariant across two residuals that differ in perturbation type and measured function, with both residuals independently measured. Then Fig 11 :51 is broken for this domain.

Mode `general` for the valence rule, `specified` for ecological traits. Triangulated: Fig 11 figure line plus a population-biology result from a different evidence pool.

### F4 - The habitat is enumerated, and contact cascades beyond first order

Fig 11 :43: *"The habitat is enumerated, never composed."* Fig 11 :48: *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."* Fig 11 :52: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* Fig 11 :73: *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."*

The figures' own worked example is ecological. The residual that mattered was three steps out, so a one-ring habitat census is a scope error, not a small error. Context dependence has this specific mechanism: the chain of contact was truncated. This also fixes a common category mistake. Calling "context" the ground is wrong; the habitat updates and the ground does not.

**Refuter:** show a case where a third-order contact has no measurable effect on the residual while first-order contacts fully determine it, across more than one perturbation type.

Mode `specified`. Triangulated across Fig 11 (cascade) and Fig 7 :37-39 (bracket fidelity and ground pressure across handoffs, a different figure).

### F5 - The residual must stay indexed per slot

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

A single "resilience index" for a network is exactly the move the first figure disqualifies. Two networks with the same mean recovery can differ in which function is about to fail. Carpenter et al. 2001 put the same requirement in ecological terms: *"To assess a system's resilience, one must specify which system configuration and which disturbances are of interest."* The article title, *From Metaphor to Measurement: Resilience of What to What?*, is the per-slot instruction in the field's own vocabulary.

**Refuter:** demonstrate a case where an aggregated score predicts a slot-level failure earlier and more reliably than the slot-level readings themselves. Then the indexing rule is not load-bearing here.

Mode `general` for the indexing rule, `specified` for networks. Triangulated across Fig 1 and an ecology source from a low-overlap evidence pool.

### F6 - The anchor is measured recovery; the channel can decay while the ground does not

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Fig 10 :24: *"the ground does not decay, the channel does"* and Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings."*

A large part of what is called context dependence is a measurement failure with a different remedy. If an indicator saturates, a transient is dropped, or readings are pooled, the channel has lost contact while the ground has not moved. The correct response is to extend the instrument from one already returning something (Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*), not to conclude that resilience is intrinsically unmeasurable.

**Refuter:** show that the failure persists after the indicator is replaced by one that resolves the previously saturated range and all readings are kept unpooled. Then the channel diagnosis is wrong and context is doing the work.

Mode `specified`. Triangulated across Fig 10 and Fig 6 (channel decay versus instrument improvement, distinct figures).

### F7 - A general *shape* is available; a general *inventory* is not

Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."* Fig 13 :117-118: *"So a frame can search without end and still not arrive: infinite effort inside a finite reach."* Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."*

The figures permit a general statement of the *conditions* because those conditions come from rules that apply at every scale, not from an exhaustive list of arrangements. They forbid treating a search over arrangements as if it could close the question. This separates the two plausible meanings of "general theory": a general shape is reachable and is delivered here; a general catalogue of which traits confer resilience in which networks is not reachable by rearrangement inside the current library and is owed as a `gap`.

**Refuter:** derive an exhaustive trait inventory whose validity survives a change of residual and habitat, or derive one of the conditions in §4 from the other three so that the shape collapses to a single lever.

Mode `general` for the reachability result, `specified` for ecology. Triangulated across Fig 13 and Fig 8.

### F8 - Failure to find the inventory is not proof that none exists

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

The `gap` is reported as unreached at this budget with the library as it stands, not as a proved impossibility and not as silence. What is owed is characterized in effect terms: a source-discriminating instrument that names, for a given residual, which condition failed, plus an independent frame with a differing closure. The figures do not let us name that instrument, only its shape.

**Refuter:** actually exhibit the instrument and show it discriminating C1 failure from C2 failure on the same network. The gap then closes and this finding is superseded, not hidden.

Mode `general`. Single-source for the figure rule (Fig 8), corroborated by Fig 13, which shares the framework evidence pool; recorded as triangulated within the framework but not independently witnessed.

### F9 - Effect sizes and meta-analytic shares are filters, never the verdict

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

A meta-analysis that reports "diversity increases stability on average" is a budget instrument: it says where to spend the next sampling effort. It is not a witness for the per-slot verdict, because a pooled effect has already performed the aggregation that Fig 1 :22 disqualifies. MathisonSlee et al. 2022 report that reviewers found an inverted-U relationship in one synthesis and that *"this definition does not elaborate on which factors are important for creating or ensuring that a system is resilient"* in another. Those are two different observations about two different quantities, not a contradiction to be averaged.

**Refuter:** exhibit a pooled effect size that correctly predicts a slot-level failure under a documented change of residual, with the slot-level readings withheld from the fit. Then the filter can be promoted to a witness for that domain.

Mode `general` for the filter rule, `specified` for meta-analysis. Triangulated across Fig 9 and Fig 1.

### F10 - A managed ecosystem is permanent work, not a solved state

Fig 11 :63: *"Which is why a managed ecosystem is permanent work rather than a solved state. And in neither mode is the habitat composed: unmaintained nothing composes it, maintained the seat adds to a habitat it still did not author."*

This is the practical consequence of F2. If capacity is network-and-habitat, then a intervention that changes the network without re-checking contact has not bought resilience; it has bought a one-occasion arrangement. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* The outreach implication is that the packet must carry the generator (the conditions and the refuter), not a recorded success story.

**Refuter:** exhibit a one-off intervention whose effect persists across a documented habitat substitution without renewed contact or renewed measurement. Then the permanent-work claim fails for this class.

Mode `specified`. Single-source on the figure side (Fig 11), with the Holling and Walker 2003 definition of resilience as an operational, context-dependent measurement as a low-overlap corroborator.

### F11 - Which specific term occupies a slot is a binding, not a derivation

Fig 9 :32: *"you get a kind of thing, never the answer itself."* The canonical figures README states the limit as *"what a missing thing would have to look like (a shape, not a name)."* The subject is a **missing** primitive, one not held in Γ. Modularity, redundancy, response diversity and connectance are already terms in the ecological library; naming one as the resilience mechanism is a binding from the ecology frame onto a held term, not the invention of a seventh primitive and not an import that moves the wall (Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*).

What is forbidden is claiming the framework *derived* the choice. What is required is provenance: say which frame supplied the binding and under which residual. May 1972 and Allesina and Tang 2012 supply bindings with clear provenance and explicitly limited domains, which is the honest form.

**Refuter:** derive a unique structural term from the conditions alone, with no ecological input, that names the slot and predicts recovery across two residuals. Then the shape-not-a-name limit is broken for this question.

Mode `general` for the limit, `specified` for the bindings. Triangulated across Fig 9 and the canonical README, same framework pool; the binding itself is world-sourced and marked as such.

---

## 5. Pre-registered refuter

Required before any outreach, per the standing instruction that *"a falsifier written before the run is a design instrument."* Written here before the conclusion and before the world sources were used to settle anything.

The shape claim is refuted if any of the following holds:

1. A structural invariant predicts slot-level recovery across two documented habitat changes and two different residuals, with the habitat contribution measured separately and found to be zero (breaks F2).
2. One trait or structural feature has invariant sign across two different residuals with both independently measured (breaks F3 and Fig 11 :51).
3. A single lever clears both C1 and C2 with no categorically different residue, or the two conditions are shown to be independent with no overlap (breaks F1).
4. An aggregated resilience index predicts a slot-level failure earlier and more reliably than the slot readings themselves, with those readings withheld from the fit (breaks F5).
5. The failure persists after the indicator resolves the previously saturated range and all readings are kept unpooled (breaks the channel diagnosis in F6).
6. One of the two conditions is derived from the other so the union collapses to a single condition (breaks F7).
7. A source-discriminating instrument is exhibited and shows that only one of C1 or C2 is needed in a documented case where both were thought to bind (closes the gap and narrows the shape).

If any fires, the corresponding finding is withdrawn and the verdict is rewritten. Until one is run, nothing here may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with F1 and F2: the either/or is a union, and capacity is network-and-habitat. These are the two figure-derived moves that change what the question is asking.
2. Keep R per slot (F5). Never report a single network resilience number as the ground.
3. Report the trait inventory as a `gap` with its instrument characterized in effect terms (F7, F8). Do not fill the slot to make the answer feel complete.
4. Treat meta-analytic effect sizes as filters for the next measurement, not as witnesses (F9).
5. Send the generator, the two conditions and the refuter, not a recorded success. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*
6. Declare the provenance of every binding (F11). Say which frame supplied modularity, diversity or connectance and under which residual.

---

## 7. Canonical usage check, retractions and confirmations

Two framework sources were read after the first six sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments cannot distinguish and records the lineage.
- `FRAMEWORK/figures/THE_FORMULA.md` step 7: *"INWARD and OUTWARD are opposed; never read one against the other."* So sharpening an indicator (inward) and importing an ecological frame (outward) are two tracks. A conflict between them sends us to the census.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| F2 first read as "no general theory is possible" | **Retracted and narrowed.** The figures forbid a general theory of the *network alone*. They permit a general theory of the *relation* with named conditions. Both halves are now stated separately. |
| "Context" mapped onto the six-term substrate in a first pass | **Retracted by re-census.** Context is the habitat (Fig 11), not a seventh primitive. Fig 13 governs the minimum set; Fig 11 governs the field of contact. Different objects, so no strain remains. |
| Diversity treated as a standing resilience-promoting actor | **Retracted.** Fig 11 :51 and the inverted-U finding in MathisonSlee et al. 2022 break the standing-list reading. Diversity is a binding under a residual, with provenance. |
| F5 first written as "ignore aggregate metrics entirely" | **Narrowed.** Aggregates are disqualified as *ground*, not as budget filters. Fig 9 :60 licenses them for the budget. Both claims are recorded. |
| F6 first read as "context dependence is mostly bad measurement" | **Narrowed.** It is *sometimes* a channel failure. The test in F6 separates the two; a failure that survives instrument replacement is genuine context dependence. |
| F8 (`gap`) | **Canonically confirmed.** Fig 8 :39 and Fig 13 :134 make unreachable a verdict, not silence, and forbid turning a failed search into a proof of absence. |
| F11 (shape, not a name) | **Canonically narrowed.** The limit governs *missing* primitives. Naming modularity or connectance is a binding onto a held term, not a forbidden invention. Provenance is owed, not silence. |
| Apparent Fig 11 :40 versus Fig 2 :29 strain | **Not strained.** Re-census: Fig 11 governs what changes contact, Fig 2 governs what settles a question. Different quantities. |
| Apparent Fig 13 "set closed" versus ecology's open-ended species list | **Not strained.** Re-census: Fig 13 governs the minimal generative set at a level; an ecological species list is an arrangement inside the held network atom, not a new member of the set. |

### Round-trip note

The condensation from the figure set to the two-condition shape is lossy. What the shorthand holds and what the trip back down does not preserve are recorded qualitatively in `11_audit.md` as R_T. Nothing here assumes the round trip is identity.

---

## 8. Updated verdict

The shape survives: a general theory of ecological network resilience is possible as a two-condition shape, a union of a maintained non-updating channel to measured recovery and renewed contact with a differing closure, with the residual indexed per slot and valence relative to that residual. What does not survive is either original option as stated: Option A fails because capacity is network-and-habitat (F2) and no standing trait list survives a change of residual (F3); Option B fails because the conditions are general across scales and the "no general statement" claim converts a union into a partition (F1). The specific inventory of resilience-conferring traits remains an honest `gap` (F7, F8), not a filled slot. Strains after re-census: none hidden, one live type question about what counts as a non-updating ground in a monitoring programme, named in `06_isomers_and_order.md` and `11_audit.md`.
