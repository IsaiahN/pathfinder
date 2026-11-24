# Figure-grounded audit: how trade rules and global economic institutions bear on domestic policy choice

**Mode of this document: `general` on the shape, `specified` on the per-domain mechanisms, never `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (read 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World: seven sources listed in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual, stated in effect terms

Let `Gamma_dom` be the domestic frame's library of policy instruments and the predictions it makes with them. Let `o'` be what the world actually returns. Then per policy slot `s`:

```
R_s = | Gamma_dom(b, a) - o' |
```

A slot is live when `R_s` is positive and persistent and does not trend down (THE_FORMULA.md step 2, "the residual that PERSISTS AND DOES NOT TREND DOWN").

**Constrain** and **enable** are not two ends of one scale. They are different signs of a change in the *reach* of `Gamma_dom`:

- **Constrain.** The instrument is legislated, `Gamma_dom` predicts its effect, and the world does not return it. Something was added (an obligation, a ruling, a threatened damages award, a conditionality requirement) that removes the standing of that instrument to be relied on. The statute often remains; what falls is the reach.
- **Enable.** A slot was outside `closure(Gamma_dom)` (the frame could not even compose the move), and after contact with a frame whose closure differs it becomes reachable. A primitive was imported (market access, a commitment device, finance, a supply chain, a coordination rule) and the reach grew.

**R by arity, symmetry, scale.**

- *Arity:* at least two frames, often three (domestic frame, institution, market). The relation is a compound, not one question.
- *Symmetry:* not symmetric in general. A ruling flows from the institution to the domestic frame, while membership and non-compliance flow back. That is an ordered relation, not a symmetric join. The two directions have different closures and must be read separately.
- *Scale:* first order inside a jurisdiction (instrument composed with a domestic state or structure); second order at the border (a settled domestic policy composed with an external rule). The transform between scales is lossy, so "the same policy" at home and at the border is not the same object (Fig 4 :27-29).

The residual is indexed by slot, never averaged. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A global verdict such as "globalisation erodes sovereignty" or "globalisation empowers states" aggregates away exactly the signal that says where to look. **This is the first finding, and it is methodological.**

---

## 1. Domain census (before any figure line is chosen)

| domain | actors | currency | nameable anchor? | question type |
|---|---|---|---|---|
| **D1 Domestic policy frame** | legislature, executive, regulators, central bank, domestic firms, voters | statutory authority, budget, tariff, subsidy, standard, capital control | yes: implemented outcomes, the observed domestic effect of a measure | composition inside `closure(Gamma_dom)` |
| **D2 External rules and institutions frame** | WTO panels and DSB, IMF, World Bank, RTA bodies, ISDS tribunals, capital markets | scheduled commitments, conditionality, rulings, damages, market access, flows | yes: an enforceable ruling, a disbursement, a market price. Fig 2 :29 names "a market" as an anchor. | a different closure `Gamma_ext`, with its own ground contact |
| **D3 Verification / analysis frame** | this derivation, a checker, an expert lead | residuals, shape claims, refuters | yes: the figures are primary; the ground (what actually happens) settles any measurement | meta. In this simulation all seats draw on one evidence pool, so independence is zero |

**Union, not partition.** Constrain and enable can hold on different slots of the same policy at the same time (a trade agreement can open export access while closing tariff autonomy). Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "a case in two conditions is not a harder case of either." So the compound must be unbundled before searching. A single lever that clears the constraint-only region leaves the overlap standing, because the second condition still binds.

**Order by dependency (Fig 3).**

1. *Perception:* can the frame tell which slots carry a live residual? A frame with no tariff-commitment term cannot perceive the constraint at all.
2. *Vocabulary:* does it have terms for commitment, ruling, conditionality, market access? Fig 3 :7 describes a frame that "has terms for what things afford: what can be moved, opened, joined, blocked."
3. *Objective:* what counts as progress here? Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction." "Policy autonomy" is a comparison, not a thing.
4. *Planning:* a route under incomplete information.
5. *Learn and carry:* name what worked, verify it, carry it.

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Asking "how should a government respond?" before step 2 is a reading below the break. Fig 3 :22: that is "a reading of nothing."

---

## 2. Figure census (which lines actually bear)

| figure | bearing on this question | verdict after strain test |
|---|---|---|
| 1 The Agent | residual is per slot; frame-internal quantities cannot score the frame | governs method, `general` |
| 2 The Ground | anchor must not update; independence; agreement from one pool is not corroboration | governs D3 and the anchor test |
| 3 Dependency Chain | census order, reading below the break | governs D1 vocabulary |
| 4 The Membrane | cross-scale transform is lossy; measure the round trip | governs first-order vs second-order |
| 5 Mint Pipeline | the fifth kind (refuted) and the fall of standing | governs **constrain** (F1) |
| 6 Closure / Reachability | import moves the wall; reach can fall by addition | governs **enable** (F2) and F1 |
| 7 Room Chain | agreement is variation, not a verdict | governs outreach, not the mechanism |
| 8 Union Surplus | two frames reach what neither reaches alone | triangulates **enable** |
| 9 Leave / Arrive | describe residual first; union vs partition; filters vs witnesses | governs procedure (F7) |
| 10 Ground Maintainer | convention that decides an outcome; declaring is not grounding | governs F6 and D3 |
| 11 The Habitat | capability is agent and habitat; valence is relative; no subtraction | governs F3 and F5 |
| 12 The Bond | arrangement carries meaning; goals are comparisons | governs `06_isomers_and_order.md` |
| 13 Minimum Viable Set | the set is closed, arrangements are not; unreachable is a verdict | governs the honest stop |
| Operators / Symbols | `R` is the aim; `R_T` is the round-trip gap | notation only |

---

## 3. Findings

### F1. Constrain is a fall in reach caused by an added term, not a deletion (decisive for the "constrain" half)

Fig 5 :55: "What it removes is not a term but a term's standing to be composed over."
Fig 6 :42: "What is recorded only grows. What is reachable is derived, and it can fall."
Fig 6 :43: "something was added rather than because anything was deleted."

An external rule does not erase the domestic statute. It adds a refusal (an obligation, a panel finding, a damages exposure, a condition) and the added term removes the standing of the domestic instrument to be composed over. The reach falls although nothing was struck out.

**World check.** WTO dispute settlement: "A dispute arises when a member government believes another member government is violating an agreement or a commitment that it has made in the WTO" (WTO dispute settlement gateway, 2026). ISDS: "ISDS cannot overturn local laws which violate trade agreements, but the ISDS can grant monetary damages to investors adversely affected by such laws" (ISDS, Wikipedia, accessed 2026-11-23). The local law stays; its standing to be relied on does not. The same source reports the anticipatory form: "the threat of exorbitant fines may cause a chilling effect which halts regulation or legislation in the public interest." That is a term never composed because the refusal was foreseen.

**Mode:** `specified` (mechanism). **Triangulated:** Fig 5 amendment and Fig 6 amendment (two low-overlap figure passages) plus two world sources in different fields (trade law, investment law). **Refuter:** show a case where a domestic instrument's reach falls with no term added, or where the reach does not fall after a final adverse ruling that is actually complied with.

### F2. Enable is an import that adds a primitive and expands the closure

Fig 6 :22: "IMPORT adds an atom, and the added atom is what expands the closure."
Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 8 :45: "Two frames together reach what neither reaches alone."
Fig 8 :46: "Composition crosses the boundary between them, and that surplus is where imports live."

A domestic frame cannot manufacture a new policy instrument from inside its own closure (Fig 6 :21: "MINT composes inside the closure and can never add an atom."). Access to a larger market, a credible commitment device, external finance, or a coordination regime arrives from a frame whose closure differs; it is an added atom, and the domestic reach grows.

**World check.** North, Nobel press release 1993: "Institutions provide the basic structure by which human beings throughout history have created order and attempted to reduce uncertainty in exchange. Together with the technology employed, they determine transaction and transformation costs and hence the profitability and feasibility of engaging in economic activity." Ostrom, Nobel facts 2009: "when natural resources are jointly used by their users, in time, rules are established for how these are to be cared for and used in a way that is both economically and ecologically sustainable." Hirschman's rebuttal to Rodrik, recorded in the political-trilemma source: "diversification of trade (global economic integration) could bolster national sovereignty by making it harder for a state to be coerced by any other single state." That last one is a genuine enable mechanism: more external frames increase independence.

**Mode:** `specified`. **Triangulated:** Fig 6 and Fig 8 (different figures, different roles), plus institutional economics and economic history. **Refuter:** demonstrate a domestic policy becoming reachable with no new primitive crossing from another frame, or an added external primitive that leaves the reach unchanged.

### F3. The valence of an institution is relative to the residual, not a property of the institution

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
Fig 11 :51: "No standing list of good actors survives a change of residual."

The unqualified question "do global economic institutions constrain or enable domestic policy?" has no standing answer by these lines. The same institution is enabling for an export-access slot and constraining for a subsidy slot. This is not a hedge: the figures make valence a relation between an actor and a residual, so a single global verdict is a category error.

**World check.** The sources conflict in exactly this way. Rodrik's political trilemma: "democracy, national sovereignty and global economic integration are mutually incompatible: we can combine any two of the three, but never have all three simultaneously and in full." Hirschman's rebuttal (same page) says trade diversification can *bolster* sovereignty. On ISDS, critics report "a chilling effect which halts regulation or legislation in the public interest," while the International Bar Association is quoted as saying investment treaties "do not limit (and, in fact, expressly safeguard) a state's sovereign right to regulate in the public interest in a fair, reasonable, and non-discriminatory manner." Per the census rule, a conflict sends us back to the census; it does not flip a verdict. The re-census returns F3: same institution, different residual, different valence.

**Mode:** `general` (structural), with `specified` instances. **Triangulated:** Fig 11 and Fig 1 (per-slot residual) plus two opposed world frames. **Refuter:** exhibit an institution with identical valence across two residuals that differ in the relevant respect.

### F4. The aggregated verdict destroys the signal

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

"Constrained" and "enabled" are properties of slots. A statement about "domestic policy" as a whole is an average over slots, and Fig 1 says the average is exactly how a live signal disappears. **Mode:** `general`. **Single-source** for the figure rule (Fig 1), though it conditions every world finding. **Refuter:** show that a global average over policy slots preserves the location of a live residual.

### F5. Capability belongs to the government and its habitat, not to the government alone

Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone."
Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."
Fig 11 :61: "You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."
Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."

Reforming the domestic agency in isolation (better training, better drafting, better regulators) does not by itself change the choice set; only a change in contact does. The institutional habitat cannot be subtracted, because contact is not subject to a state's decision. Withdrawal is not subtraction but the substitution of one habitat for another, with actors the state did not choose.

**World check.** North, Nobel facts 1993: "In order for a market economy to flourish, certain legal and social institutions must be in place." North, press release: "if external factors make an increase in income possible, but institutional factors prevent this from happening, then the chances are good that new institutional arrangements will develop." **Mode:** `general` structural plus `specified` prediction. **Triangulated:** Fig 11 passages plus institutional economics. **Refuter:** an agency-only reform that changes the reachable policy set without changing contact with the habitat.

### F6. A declared rule is not a grounded constraint until something enforces it

Fig 10 :47: "a convention that decides an outcome has stopped being one."
Fig 10 :49: "Declaring a meaning does not ground it."
Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

A treaty text is a declared meaning. What grounds it is the panel, the tribunal, the disbursement decision, the market reaction. And an institution whose finding moves when the domestic frame pushes on it is not an anchor by Fig 2 :29; it has become another frame. This is a live test for captured or potassium-light institutions, not a rhetorical point.

**World check.** The WTO page records 646 disputes and over 350 rulings since 1995, and states: "Resolving trade disputes is one of the core activities of the WTO." Enforcement is the ground. **Mode:** `specified`. **Triangulated:** Fig 10 and Fig 2 plus one world source. **Refuter:** a purely declaratory commitment that reliably determines outcomes with no enforcement channel.

### F7. The compound must be unbundled before any frame is chosen

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :27 (with :28): "describe it before you go looking, or any frame you pick will seem to fit"
Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Choosing IMF, WTO, or ISDS as "the" institution before describing the residual is the inversion Fig 9 names: any frame will seem to fit. The correct order is residual first, then the frame whose closure predicts its shape. Tier labels, counts of rulings, and prestige are filters for the budget and never witnesses for the verdict.

**Mode:** `general`. **Triangulated:** Fig 9 and Fig 8 (Fig 8 :53: "Residual first, frame second"). **Refuter:** a case where describing the residual before choosing the frame makes no difference to which frame is chosen.

### F8. Where no figure line governs: `gap` on the specifics

After a genuine re-census, the figures govern the shape of the relation: fall by addition, rise by import, relative valence, habitat-bound capability, per-slot residual, convention versus ground. They do **not** predict which named policy will be affected by which named institution, by how much, or in which direction for a particular country. That requires a ground reading: a ruling, a dataset, a market observation.

Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 13 :134: "Unreachable is a verdict here, not a silence."

So the honest record is: verdict on shape, `gap` on specifics. **Mode:** `general`. **Status:** `gap` for the numeric and country-specific part. **Refuter:** a figure line that, after re-census, does predict a specific magnitude or country outcome.

---

## 4. Pre-registered refuter (written before the conclusion)

Per Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." The shape claim is refused if any of the following holds:

1. A domestic policy's reach is observed to fall with no term added from another frame (refutes F1).
2. A policy becomes reachable inside a domestic frame with no imported primitive (refutes F2).
3. The same institution is shown to have identical valence across two residuals that differ in the relevant respect (refutes F3).
4. A global average over policy slots is shown to preserve the location of a live slot residual (refutes F4).
5. An agency-only reform is shown to change the reachable policy set with no change in contact with the habitat (refutes F5).
6. A declaratory commitment with no enforcement channel is shown to reliably determine outcomes (refutes F6).

If any fires, the relevant finding is withdrawn. Until one is run, nothing above is `grounded`.

---

## 5. Strain test and re-census

- **Fig 6 main text versus the constrain direction.** The main text of Fig 6 is about the wall moving outward on import. The inward movement (reach falling) is introduced only in the amendment at Fig 6 :41, which says explicitly: "the wall moves outward on import. It also moves inward, and this figure is silent on that." This is a genuine strain, and it is **named, not smoothed**. F1 therefore leans on the amendment (Fig 6 :42-43) together with the Fig 5 amendment, not on the main Fig 6 diagram. Re-census does not remove the strain; it locates it in a figure that openly declares the silence.
- **Anchor versus moving market.** Fig 2 :29 names a market as an anchor, yet markets visibly move. Re-census resolves this: the anchor condition is that the reading does not change *because a frame thinks it should*, not that the reading is static. The impossible-trinity source shows markets defeating a government's peg precisely by returning a verdict the government did not want (Krugman: "The point is that you can't have it all: A country must pick two out of three."). No strain after re-census.
- **Rodrik versus Hirschman.** A world-source conflict. Per the rule, it is not resolved by preferring one author; it is resolved by re-census, which returns F3 (valence relative to residual). No figure changed.
- **After re-census: one named strain (Fig 6 inward direction), no hidden strains.**

---

## 6. Recommendation

1. Lead with F4 and F3: the answer is per slot and the valence is relative. The unqualified "constrain or enable" question is malformed as a single question.
2. Use F1 and F2 as the two mechanisms, kept separate: addition removing standing versus import adding a primitive.
3. Use F5 to reframe "domestic policy choice" as a property of government-and-habitat; agency-only reform is not a lever on the choice set.
4. Use F6 as the test for whether a rule is real: name the enforcement channel or do not call it a constraint.
5. Stop at F8. Report shape, declare `gap` on specifics, and ask for the instrument that would close it. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

---

## 7. Canonical usage check and retraction / confirmation log

Two local canon sources were read after the first sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "a shape, not a name"; "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: the mode rule, the refusal-before-mint order (step 2), and "Use filters for the budget and witnesses for the verdict."

| earlier reading | status after canonical check |
|---|---|
| "The figures say institutions constrain sovereignty" | **Retracted.** Fig 11 :49-51 makes valence relative to the residual. No standing global verdict. |
| "Enable is just the opposite of constrain" | **Retracted.** F1 and F2 are different operations (remove standing versus add an atom), not opposite signs of one quantity. |
| Fig 6 main text appears to deny inward movement | **Narrowed.** The amendment at :41 declares the silence; F1 rests on :42-43 plus Fig 5 :55. Strain named, not hidden. |
| Rodrik conflicts with Hirschman, so one must be wrong | **Re-censused.** Both are world frames with different residuals. Fig 2 :40 forbids pooling them into a verdict. |
| "Shape, not a name" forbids naming any institution | **Narrowed.** The canon phrase governs a *missing* primitive. Naming an actor already in the habitat is a binding and must be provenanced, not a prohibition. |
| F4 (per-slot residual) is a mere methodological aside | **Confirmed as load-bearing.** Without it, F1 and F2 cannot be stated for any slot. |
| F8 (`gap` on specifics) might be a failure to search | **Confirmed as a verdict.** Fig 13 :134 and Fig 8 :39. Unreachable is a verdict, not a silence. |

---

## 8. What would settle it

A ground reading, not more agreement. For F1: a panel or tribunal record showing that an adverse final ruling with compliance removes reliance on the measure without deleting it. For F2: a documented instance of a policy becoming available only after an external primitive (access, finance, commitment device) arrived. For F5: a controlled comparison of agency-only reform against contact-changing reform. For F6: an explicit enforcement channel with an observable verdict. Until such readings exist, the solution reports a shape and a set of refuters, and nothing more.
