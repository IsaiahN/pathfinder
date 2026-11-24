# Figure-grounded audit: how firms should value environmental and social harms not reflected in prices or accounting

**Mode of this document: `specified`, not `grounded`.** It states the shape a valuation must have and what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* records that LLM output is a simulated approximation and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text with element line numbers), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays by Isaiah N, and the public sources listed in `04_links_and_distribution.md` and `10_source_ledger.csv`. Every `Fig N :line` quote below was taken from the verbatim extract this session.

---

## 0. The claim under audit

> How should firms value environmental and social harms that are not reflected in prices or accounting systems?
>
> Restated as an effect: a firm's price and accounting frame Γ registers private costs, what the firm pays, but leaves positive mass in object slots where real harm occurs and the books show zero. The question asks what an acceptable valuation must look like, given that the instrument being asked (price, ledger, budget) is the same instrument that failed to see the harm.

Two options are distinguishable. **Option A:** keep searching inside the price and accounting frame, refine the estimates, and wait for a number to appear. **Option B:** describe the residual in effect terms first, import what the frame lacks from a frame whose closure differs, keep the object slots separate, declare the stake, and stop at a shape until a ground settles a number. The derivation below supports B and states exactly where it stops. It does not produce a dollar value for any harm.

---

## 1. Residual, domain census and dependency order

### 1.1 R by arity, symmetry and scale

- **Arity:** many. Each harmed party, place, species, or future state is a separate slot. Fig 1 :19: "The residual is indexed by object slot, not aggregated." A single total has the wrong arity.
- **Symmetry:** low. A tonne of CO2 in one place, a worker's exposure, and a lost wetland are not interchangeable operands. The bond that would join them is not given by the six-term set; Fig 13 :74: "Everything else is a composition across the two kinds, never within one."
- **Scale:** first order at the direct operation, second order at the cascade. Fig 11 gives the precedent: a first-order enumeration missed a second-order effect three steps out (DDT and the eagles, Fig 11 :52-54). Supply-chain and intergenerational harms are second-order slots.
- **Kind of problem:** a **union** of overlapping conditions, not a partition and not one harder pile. Fig 9 :57: "a case in two conditions is not a harder case of either". A pollutant that harms both a river and the people who drink from it is a compound with its own loop. Unbundle before searching (Fig 9 :54).

### 1.2 One line per domain: actors, currency, anchor

A domain needs a nameable anchor. Where none exists, the thing is not yet a domain and is recorded as a `gap`.

| # | domain | actors | currency | anchor | standing |
|---|---|---|---|---|---|
| D1 | The firm's price and accounting frame | management, prices, ledgers, budgets, KPIs | money, private cost | the market transaction. This anchor is frame-internal and produced by the frame, so it cannot settle a harm. | real domain, wrong anchor for this residual |
| D2 | The valuation and natural/social science frame | ecologists, epidemiologists, economists, standard setters | physical measures and monetary estimates | physical measurement, dose-response, outcome data | real domain, anchor available |
| D3 | The assurance and business-ethics seat | auditors, regulators, affected parties, standard setters | independence and declared stake | the ground, measured outcomes, never agreement (Fig 7 :35) | real domain, stake must be declared |
| D4 | The aggregation question | one number versus a vector of slots | bits for description, actions for settlement | no single anchor exists for a cross-slot sum | **compound**, not a domain until split; see F7 and F8 |

D4 is not a domain on its own. It is the overlap of D1 and D2 plus a notation choice, so it gets its own loop after the split, not an average over the others.

### 1.3 Partition or union, and dependency order

The environmental and social pair is a **union** (Fig 9 :57). Overlap is a compound with its own loop, so it is unbundled rather than merged (Fig 9 :54). Dependency order (Fig 3): perception of the harm → vocabulary for the harm → objective (what counts as progress on that slot) → planning → learn and carry. The break in most firms is at the vocabulary/objective link: Fig 3 :27, "A link with no instrument is not a link that works. It is a link nobody has looked at." Effort spent on planning or disclosure above that break arrives at a step whose input never arrived (Fig 3 :19-23).

---

## 2. Figure census: verbatim lines quoted before concluding

| figure | verbatim line | bearing on this residual |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | Sets the unit of valuation: per slot. |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | Bars a single global total as a witness. |
| Fig 1 :23 | "The ground enters as the only metric." | The anchor cannot be the firm's own score. |
| Fig 1 :27 | "A frame cannot score itself with a quantity it also produces." | The price frame cannot validate the harm it omitted. |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | Physical measurement, not price, is the anchor. |
| Fig 2 :33 | "The anchor must not update." | A valuation that moves with the firm's reported number is not an anchor. |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | Consensus among firms is not measurement. |
| Fig 2 :40 | "agreement about the world is worthless when the agreeing frames share an evidence pool" | Industry consensus is one witness. |
| Fig 2 :42 | "Buy independence in proportion to the cost of being wrong." | Assurance effort scales with the harm's cost. |
| Fig 2 :45 | "Frames range against the ground. They do not negotiate with it." | Science and accounting range separately against outcomes. |
| Fig 3 :27 | "A link with no instrument is not a link that works. It is a link nobody has looked at." | The missing middle link diagnosis. |
| Fig 4 :22 | "Only methods cross up. Only head starts come down." | Send a method, not a recorded valuation. |
| Fig 4 :30 | "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | A monetary aggregate is a lossy condensation with a measurable gap. |
| Fig 5 :33 | "The three guards are a product, not a checklist." | Support, reachability and novelty all needed for a new valuation term. |
| Fig 5 :43 | "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before." | The MDL bargain for a new valuation term. |
| Fig 6 :21 | "MINT composes inside the closure and can never add an atom." | More accounting cannot manufacture a price for an unpriced harm. |
| Fig 6 :22 | "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure." | Import is the only route to the missing atom. |
| Fig 6 :23 | "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | Import from ecology, epidemiology, public health. |
| Fig 6 :12 | "source gate: provenance" | Where the physical atom came from must be recorded. |
| Fig 6 :13 | "shadow test: explains a gap" | The imported measure must explain a previously invisible harm. |
| Fig 6 :30 | "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." | Describe the harm, not the accounting category. |
| Fig 6 :32 | "An instrument is not built from a description. It is improved from a worse instrument already returning something." | Measurement improves from an existing reading, not from a declaration. |
| Fig 7 :13 | "agreement compounds, evidence does not" | More signatories do not add evidence. |
| Fig 7 :35 | "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." | Standard-setter consensus is a convention. |
| Fig 8 :32 | "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." | Searches inside the price frame are bounded. |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | No price found is not proof of no harm. |
| Fig 8 :51 | "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ." | Provenance of the number is the whole issue. |
| Fig 8 :53 | "Residual first, frame second." | Describe the harm, then pick the valuation frame. |
| Fig 9 :27-28 | "describe it before you go looking, or any frame you pick will seem to fit" | Why starting from a preferred metric is apophenia. |
| Fig 9 :30-31 | "your words are borrowed too, so describe the effect rather than the cause" | Effect terms, not corporate vocabulary. |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | The output is a shape. |
| Fig 9 :44 | "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing." | A firm's frame is not sealed. |
| Fig 9 :57 | "a case in two conditions is not a harder case of either" | Union, not one pile. |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | A single number is a budget filter. |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | The firm cannot verify its own valuation. |
| Fig 10 :49 | "Declaring a meaning does not ground it." | A declared shadow price does not measure a harm. |
| Fig 10 :52 | "Bring a characterised residual, never the source." | Outreach order. |
| Fig 10 :59 | "an interest in the outcome is unavoidable, an interest in the reading is disqualifying" | The firm's stake in the number. |
| Fig 10 :60 | "Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged." | Stake declaration. |
| Fig 10 :65 | "Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record." | An auditable number is not a correct one. |
| Fig 11 :40 | "An improvement that does not change contact changes nothing, however much it improves." | A valuation that does not change the physical harm is a recording. |
| Fig 11 :48 | "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." | Enumerate the harms from the habitat, not from a reporting taxonomy. |
| Fig 11 :49 | "An actor's valence is relative to the residual, not a property it carries." | An activity is a benefactor or malfactor relative to a specific harm. |
| Fig 11 :61 | "The seat's power is asymmetric. Introduction is available; exclusion is not." | You can add an assurance step; you cannot subtract the harm. |
| Fig 11 :73 | "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." | Stakeholder lists update; measured harm settles. |
| Fig 12 :87 | "a threshold relation between two quantities" | The comparison bond, relevant to F9. |
| Fig 12 :112 | "A plan is a sequence. A goal is a comparison. Progress is a subtraction." | Why a vocabulary of ingredients cannot state a reduction target. |
| Fig 12 :117 | "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | Same harm, different arrangement, different substance. |
| Fig 12 :125 | "A composition costs in two currencies, and they do not add." | The two-currency rule. |
| Fig 12 :126 | "Bits price the description. Actions price finding out whether it holds." | Description and settlement are different units. |
| Fig 12 :130 | "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart." | The named error of a single aggregate. |
| Fig 13 :74 | "Everything else is a composition across the two kinds, never within one." | Cross-kind composition only. |
| Fig 13 :75 | "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state." | A harm is not a primitive; it is a composition in the slot. |
| Fig 13 :115 | "The set is closed. The arrangements are not. That gap is why import exists." | Why more accounting cannot close this. |
| Fig 13 :133 | "what it returns is a shape rather than a name" | No dollar value is derived. |
| Fig 13 :134 | "Unreachable is a verdict here, not a silence" | The honest stop on the specific number. |

Strained readings are named as such in §7, not smoothed over.

---

## 3. Findings

### F1 — The unit is the slot, not the total (decisive for the shape)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :11 carries the same rule in the mechanism: one bet per object slot.

The question asks for a valuation of environmental **and** social harms. The natural first move is a single number: a total social cost. That move has the wrong arity. A combined total can fall while a specific worker cohort or watershed gets worse, and the total then hides the very signal it was built to report. The figures do not forbid making a total as a budget filter; they forbid treating it as the residual (Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").

**Refuter:** a demonstration that a single aggregate retains every per-slot residual, so that summing the slots loses no live signal. If that is shown, F1 falls.

### F2 — The price frame cannot anchor what it failed to price

Fig 1 :27: "A frame cannot score itself with a quantity it also produces." Fig 1 :23: "The ground enters as the only metric." Fig 2 :29 defines the anchor: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

A firm's share price, budget variance, or reported provision is produced by the same frame that omitted the harm. If the reported number moves, the physical harm need not move. Such a quantity fails the anchor test; it updates with the frame. The anchor for a harm is a measurement that does not change because the firm changed its estimate: tonnes emitted, cases of illness, hectares lost, measured exposure (Fig 2 :30: "you push on it, it is not an anchor").

**Refuter:** a price or accounting quantity shown to be an unmoving anchor for an unpriced harm, one that does not change when the firm pushes on it. If found, F2 falls.

### F3 — The anchor must not update, and the volatility of monetary estimates is the evidence

Fig 2 :33: "The anchor must not update." Fig 2 :34 says that if it does, everything drifts together *"and the drift is coherent, which is why nobody notices."*

The public record on the social cost of carbon is a real-world instance. It documents extreme sensitivity to a small set of assumptions and *"wildly divergent SCC values"* under different administrations (Wikipedia, Social cost of carbon, opened 2026-11-22). That is not a reason to abandon monetary estimates. It is a reason to classify them as frame products, not anchors. The physical measure (atmospheric concentration, temperature, cases) is the anchor; the dollar figure is a provenanced binding onto it.

**Refuter:** a monetary series that remains invariant under changes in discount rate, scope and damage function, and that tracks the physical measure one to one. If found, F3 falls.

### F4 — More accounting inside the closure cannot reach the harm

Fig 6 :21: "MINT composes inside the closure and can never add an atom." Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."

If the firm's Γ contains only prices, revenues and costs, no amount of more careful bookkeeping composes a measurement of an unpriced harm. The atom is absent, not unfound. Fig 8 :39: "So a search that finds nothing is never a proof of absence." This distinguishes the two formula step-7 questions: SEARCHED (is it in here and unfound?) is cheap and fails here; INWARD (sharpen our instrument) refines forever on an axis that cannot carry it; OUTWARD (import) is the route that applies (Fig 6 :29-30).

**Refuter:** a derivation of a physical harm measure entirely from price and ledger atoms, with no atom imported from science or public health. If shown, F4 falls.

### F5 — Import needs a source gate and a shadow test

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 6 :12: "source gate: provenance"; Fig 6 :13: "shadow test: explains a gap." Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."

So the firm must import physical measures from ecology, epidemiology and public health, and must record where each came from. The shadow test is concrete: the imported measure must explain a gap the firm's books left open. A number with no provenance is indistinguishable from one derived inside the frame, and therefore carries no evidentiary weight.

**Refuter:** an imported physical measure with no provenance that nonetheless explains the previously invisible gap with the same force as a provenanced one. If shown, the source gate is not load-bearing and F5 narrows.

### F6 — Describe the harm before choosing the valuation frame

Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit". Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause". Fig 8 :53: "Residual first, frame second." Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

Starting from a preferred metric (willingness to pay, social cost, planetary boundaries) and then mapping harms onto it is the inversion the figures call apophenia. The correct order is to enumerate the habitat: who is in contact with the harm, what conditions carry it, what relations spread it (Fig 11 :45-48), then choose the frame whose closure predicts its shape. The actor's valence is relative to the residual (Fig 11 :49), not a property of the activity, so the same supplier is a benefactor for one slot and a malfactor for another.

**Refuter:** a case where choosing the valuation frame first produces the same slot set as enumerating the habitat first, across all tested harms. If found, F6 is weakened to a hygiene rule.

### F7 — Two currencies, held apart

Fig 12 :125: "A composition costs in two currencies, and they do not add." Fig 12 :126: "Bits price the description. Actions price finding out whether it holds." Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."

This is the sharpest figure-bearing result for the business question. A description of a harm (a physical vector) and the actions required to find out whether a valuation holds (monitoring, assurance, abatement tests) are in different units. Collapsing them into one monetary score is the named error, not the remedy. The round-trip rule applies: any single-number condensation of the vector is lossy and the gap must be measured, not assumed zero (Fig 4 :30; Symbols table `R_T`, *"Measures what the coarser description cannot hold."*).

**Refuter:** a demonstration that the two currencies share a unit, so a single figure retains both the description and the cost of settling it. If shown, F7 falls.

### F8 — The union of environmental and social harms must be unbundled

Fig 9 :57: "a case in two conditions is not a harder case of either". Fig 9 :54 directs that a union be unbundled before searching again. Fig 13 :75: "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."

Where an environmental harm and a social harm share a cause, the overlap is a compound with its own loop and its own ground. It must not be averaged into the two parents, because a lever that clears the region where only one condition holds leaves the intersection standing (Fig 9 :55-56). The figure's cross-kind rule also bars composing two bare states (a physical state and a social state) without a structure in the slot; what sits there is an arrangement, measurement or institution, and it must be named by the importing frame, not by the six-term set.

**Refuter:** a case in which the joint environmental-social condition is cleared by a lever that clears each condition alone, with no residue in the intersection. If found, the compound reading is unnecessary for that case.

### F9 — Comparison is allowed; summation is not (strain resolved by re-census)

A possible reading of the comparison bond (Fig 12 :87: "a threshold relation between two quantities"; Operators :52: "a goal is a comparison, which is why a vocabulary without it cannot state one") is that harms can be compared and therefore added into one number. This is the strain. Re-census resolves it: the bond compares two quantities **at a level**; Fig 12 :125-130 governs what may be done with the two currencies of description and action. Comparison at a level is licensed; summation across currencies is the named error. The strain is named, not hidden (see §7 and `11_audit.md`).

**Refuter:** a derivation showing that Fig 12's comparison bond authorises adding descriptions to settlement actions in one currency. If shown, the re-census fails and the strain must be reopened.

### F10 — The stake is disqualifying unless declared and the check is outside the firm

Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying". Fig 10 :60: "Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged." Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." Fig 10 :49: "Declaring a meaning does not ground it."

A firm valuing its own harm occupies the seat with a stake in the reading. It may supply the physical data, but it may not be the blind verifier of the number built from them. The check must be arranged so the checker cannot produce what it checks: independent assurance, a regulator, or a standard setter whose reading is not authored by the firm. Declaring a shadow price does not ground it. Provenance is necessary but not sufficient: Fig 10 :65, "Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record."

**Refuter:** a case where the valuing firm is also the blind verifier and its agreement counts as evidence without producing the correlation Fig 2 :40 disqualifies. If shown, F10 falls.

### F11 — Agreement among firms is a convention, not a verdict

Fig 7 :13: "agreement compounds, evidence does not". Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Industry consensus on a valuation method, a standard, or a disclosure protocol is a convention. It can decide a budget, which is legitimate, but a convention that decides an outcome has stopped being one (Fig 10 :47). The figures require independent frames ranging against the same physical ground: two instruments pointed at the same thing, not two firms reading the same standard (Fig 2 :31-32).

**Refuter:** a consensus process that produces a new physical measurement of the harm it was convened to price, with low overlap between participants' evidence. Then the consensus created a witness and F11 narrows.

### F12 — The number is a gap, not a silence

Fig 13 :133: "what it returns is a shape rather than a name". Fig 13 :134: "Unreachable is a verdict here, not a silence". Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 9 :32: "you get a kind of thing, never the answer itself."

The figures do not and cannot return a dollar value for a specific harm. That value is an import from the valuation science frame, with provenance, a shadow test, and settlement against a ground. Until such a reading exists, the honest verdict on the specific number is `gap`, of the unreached kind: reachable in principle from an external frame, not reached here at this budget. Fig 8 :39 forbids reading this as proof of absence.

**Refuter:** a figure-derived dollar value for a named harm with a stated ground settlement. If produced, F12 is retracted and this solution's mode changes from `specified` to `grounded` for that value.

---

## 4. Verdicts per domain, kept separate and never averaged

| domain | verdict | status | why |
|---|---|---|---|
| D1 firm frame | Cannot anchor its own omitted harm; more accounting composes no new atom (F2, F4) | `triangulated` across Fig 1 and Fig 6/Fig 8, low overlap between the per-slot rule and the closure theorem | two distinct figure mechanisms, not one restated |
| D2 valuation science frame | Must import physical measures with source gate and shadow test; describe effect first (F5, F6) | `triangulated` across Fig 6 and Fig 9/Fig 11 | import rule and describe-first rule are independent lines |
| D3 assurance and ethics seat | Stake declared, checker outside the firm, ground never agreement (F10, F11) | `triangulated` across Fig 10 and Fig 2/Fig 7 | seat rules and anchor rules share little overlap |
| D4 aggregation compound | Keep per-slot vector; two currencies held apart; single number is a filter with a measured round-trip gap (F1, F7, F8, F9) | `triangulated` across Fig 1, Fig 12 and Fig 4/Symbols | arity rule plus two-currency rule plus round-trip rule |
| Specific dollar value for a named harm | `gap`, unreached not unreachable (F12) | `gap` after re-census | no figure names a number and no ground reading was taken |

No domain verdict was averaged with another. In particular, D1's failure is not evidence for D2's success; D2's import is not evidence for D3's independence. Each stands on its own figure lines.

---

## 5. Pre-registered refuter

Required before any outreach, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. A price or accounting quantity is shown to be an unmoving anchor for an unpriced harm, that is, one that does not change when the firm pushes on it (breaks Fig 1 :27, Fig 2 :33).
2. A single aggregate is shown to retain every per-slot residual, so that summing the slots loses no live signal (breaks Fig 1 :22, Fig 12 :130).
3. The person who sets the valuation can also reconstruct the claim and check it, and that verdict is counted as corroboration (breaks Fig 10 :42, Fig 2 :40).
4. A source-discriminating instrument shows that moving the reported number never moves the physical harm, and that no independent physical measurement is used anywhere (breaks Fig 2 :29, Fig 11 :40).
5. A dollar value for a named harm is derived from the figure set and settled against a ground reading (breaks F12 and the stated `gap`).

If any fires, the shape claim is withdrawn or narrowed and the retraction is added to §8 rather than erased. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Publish the per-slot vector of physical and social measures, not a single total. Keep the round-trip gap of any derived monetary summary (F1, F7).
2. Choose the anchor from physical measurement or outcome data, and test it by asking whether it changes when the firm changes its reported number (F2, F3).
3. Import the missing atoms from ecology, epidemiology and public health with provenance and a shadow test; describe the harm in effect terms before choosing the valuation frame (F5, F6).
4. Unbundle the environmental-social union and give each compound its own loop and ground (F8).
5. Put the check in a seat that cannot author the number, declare the firm's stake, and never pool consensus as corroboration (F10, F11).
6. State the mode on every claim. Do not present a `specified` shape as a `grounded` number.
7. Fig 4 :22: "Only methods cross up. Only head starts come down." Send the derivation and the refuter, not the conclusion.

---

## 7. Strains, re-census and canonical usage check

Two canonical sources were read after §§0 to 6 and govern how the figures may be used: the local copy of the figures README and the formula file. Their effect:

- The figures are metalaws and outrank the essays and the world literature. A reading that makes two figures contradict one another has misidentified its domain, not found a flaw.
- The framework returns *"a shape, not a name"* for a missing primitive. This governs a primitive not held in Γ, not a binding from an external frame onto a held term. Here the missing thing is a discriminator and a physical measure, so the number is an import, not a seventh primitive. The earlier overstatement in F12 is narrowed accordingly, not erased.
- `Unreachable is a verdict here, not a silence` applies to the specific number at this budget. Underivable-in-principle and unreachable-at-budget remain different facts with different instructions (Fig 8 :40-43).

### Strains

**S1, comparison versus summation.** First read: Fig 12 :87 allows comparing quantities, so a single aggregate might be legitimate. Re-census: Fig 12 :87 governs a threshold comparison at one level; Fig 12 :125-130 governs the two currencies of description and action. Different objects. Strain dissolved, reading kept visible in F9.

**S2, "shape, not a name" applied to a held harm.** First read: the framework cannot name any harm. Re-census: the rule governs a missing primitive; harms are imported atoms, not new primitives. Naming a measured harm is a provenanced binding. Narrowed, not withdrawn.

**S3, Fig 11 :40 as a ban on valuation.** First read: if the reported number does not change the harm, valuation is forbidden. Re-census: the line says an improvement that does not change contact changes nothing. A valuation that changes only reports is a recording; one that changes abatement and therefore physical harm changes contact. The line governs the contact test, not a ban on the practice. Narrowed.

After re-census: three strains named, none hidden, none left live.

### Retraction and confirmation log

| earlier statement | status after canonical check |
|---|---|
| "a single total is forbidden" | **Narrowed.** A total is allowed as a budget filter (Fig 9 :60) and forbidden as a witness. Both readings are kept. |
| "the framework cannot name any harm" | **Narrowed to S2.** It cannot name a missing primitive; it can bind an imported measurement with provenance. |
| "monetary estimates are useless" | **Refused.** They are frame products and useful budget filters (Fig 9 :60), not anchors. No claim that they are worthless. |
| F1 per-slot rule | **Confirmed** verbatim at Fig 1 :19 and :22. |
| F2 self-scoring rule | **Confirmed** verbatim at Fig 1 :27 and Fig 2 :29. |
| F4 closure rule | **Confirmed** verbatim at Fig 6 :21 and Fig 8 :32. |
| F7 two currencies | **Confirmed** verbatim at Fig 12 :125-130, the strongest business-facing figure result in this folder. |
| F10 stake rule | **Confirmed** verbatim at Fig 10 :59-60. |
| F12 specific number as `gap` | **Confirmed and narrowed to unreached, not unreachable.** Import can in principle close it. |
| S1 comparison versus summation | **Dissolved by re-census**, different objects, recorded above. |

---

## 8. Honest stop

The shape closes in four domains against the figures. The specific dollar value for any named harm does not close; it is `gap` at this budget, and saying so is a verdict, not a silence. The six-term set is a human choice made visible, not nature's own list, and the standard setters in the contact CSV share one evidence pool by design. What this folder offers is the shape a valuation must have, four refuters written in advance, and the kind of instrument that would close it. No measurement was taken and no world source was allowed to overrule a figure.
