# Figure-grounded audit: comparing costs of quality failures, safety incidents, delays and prevention across parties

**Mode of this document: `specified` on the per-domain separators, `general` on the structural shape, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output can "quickly simulate an approximate answer/output" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, plus the world sources in `10_source_ledger.csv`, all opened 2026-11-22.

---

## 0. The residual, in effect terms

A manager must decide where to put prevention money. The costs of the four named classes (quality failure, safety incident, delay, prevention) are borne by different parties: the firm's budget, the customer's experience, the worker's body and time, the supplier's schedule, the regulator's and society's books. The question asks "how should managers compare" them. The residual in effect terms is this:

> Each party holds a reading of a cost in its own currency, taken at its own anchor. The manager's accounting frame holds a single declared total produced from its own report. The two do not range against the same ground, and nothing in the question says which conversion would be legitimate. A frame cannot score itself with a quantity it also produces (Fig 1 :27).

What fails to resolve is not "how much is a safety incident worth" but "which comparisons are composable at all, and what to do with the ones that are not." The effect to be explained is that a single cost-of-quality total looks rigorous and decides budgets while leaving the party-bearing costs unmoved, and the same accident shows up as four different numbers depending on which party's instrument reads it.

**The answer-shape is bound in advance** (formula step "Direction", Fig 5 :65): a per-party, per-slot vector, currencies held apart, each ranged against its own non-updating anchor, shared fraction unassigned, prevention recorded as method, failure condition written before the run. Anything that returns one number with one rate is refused by construction, not by preference.

---

## 0b. DOMAIN CENSUS (before any figure line is chosen)

**R by arity, symmetry and scale.**

- **Arity:** four named cost classes crossed with at least five parties (firm, customer, worker, supplier or downstream partner, society or regulator). Arity is therefore a union of overlapping conditions, not a list (Fig 9 :55-57).
- **Symmetry:** the question's ordinary word "compare" proposes a symmetric, additive relation: a + b + c summed into a total. The relation that actually holds between money spent on prevention and a worker's injury is an ordered threshold comparison, not a symmetric conjunction (Fig 12 :87, Operators table :48-52). The operands are not interchangeable; swapping who bears a cost changes the term.
- **Scale:** per party and per slot (Fig 1 :19). Contact cascades outward: a prevention omission inside the firm becomes a customer's field failure, which becomes a downstream delay, which becomes a safety exposure three steps out (Fig 11 :52-54). Scoping to direct cost is first-order enumeration.

**One line per domain (actors / currency / anchor). A domain with no nameable anchor is not a domain yet.**

| domain | actors | currency | anchor (nameable) |
|---|---|---|---|
| D1 Firm prevention and appraisal | managers, quality engineers, budget owners | money spent, tests, training hours, defect counts | a physical test result, a specification, a warranty claim, a returned unit, a fine |
| D2 Customer quality failure | customers, consumers, field users | product performance, returns, lost time, dissatisfaction, harm | the customer's actual return, complaint, field failure or injury |
| D3 Worker safety | workers, unions, safety regulators, families | injuries, near misses, lost time, lives, capacity to succeed | an actual injury, an inspection, an epidemiological measurement, work-as-done (Hollnagel 2016) |
| D4 Supplier and downstream delay | suppliers, logistics, downstream production | time, schedule adherence, throughput, delay cost per unit time | a delivery date, a stopped line, a contract penalty, the local resource's remaining time (Reinertsen 2013) |
| D5 Society and regulator | regulators, communities, insurers, taxpayers | compliance, social cost, reputation, externalities | a law, a fine, a published statistic, an inspection (Ostrom 2010 design principle 2B) |
| D6 The accounting and decision frame | the manager, accountants, analysts, the cost-of-quality report | a declared common measure: allocation, rate, score, total | **no own anchor**: it borrows the anchors of D1 to D5. Its own report is not an anchor (Fig 1 :27, Fig 10 :18) |

D6 is included because it is where the question is asked, but it is explicitly a frame, not a sixth ground. If its report is treated as an anchor, Fig 2 panel 1 arrives by a different route: everything drifts together coherently and nobody notices (Fig 2 :34).

**Partition or union? Union.** A single event is simultaneously a quality failure, a delay and a safety incident; the same event has a firm cost and a customer cost. The shared fraction is not assignable from the figures. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." One lever (spend more on prevention) clears the region where only one condition holds and leaves the intersections standing. Verdicts stay per domain and are never averaged.

**Order by dependency (Fig 3).** 1 perception (can each party tell what happened, recorded at its own anchor) -> 2 vocabulary (terms for what each cost affords to the party bearing it) -> 3 objective (what counts as progress for that party) -> 4 planning (which prevention to buy) -> 5 learn and carry (reapplicable method versus recording of one occasion). The chain usually breaks between 2 and 3, where the money vocabulary is rich and the vocabulary for what an injury or a delay affords to its bearer is absent (Fig 3 :25-27). Optimising the accounting computation (link 4) cannot rescue a missing objective (Fig 3 :19).

---

## 1. Figure census

| figure | bearing on this residual | verdict |
|---|---|---|
| **1 The Agent** | per-slot residual; frame-internal quantities disqualified; ground the only metric | a single aggregated total throws away the only signal that says where to look |
| **2 The Ground** | anchor must not update; independence between frames; alignment as triangulation | party anchors must not be set by the manager's report; one accounting system is one frame |
| **3 Dependency Chain** | break between vocabulary and objective; link with no instrument | the money vocabulary cannot state the safety or delay objective |
| **4 The Membrane** | methods cross, recordings do not; round trip gap | prevention is a head start; a one-occasion failure replay is not a method |
| **5 Mint Pipeline** | MDL bargain; persistence-and-flat residual points the refusal | no new universal conversion term is licensed; a refused total is owed |
| **6 Closure and Reachability** | import only moves the wall; inward versus outward | a conversion rate cannot be minted from inside the accounting frame |
| **7 Room Chain** | a room's agreement is variation, not a verdict | more managers agreeing on one total adds no anchor |
| **8 Union Surplus** | low overlap and described residual; convergent derivation versus adopted import | independence must be bought in proportion to the cost of being wrong |
| **9 Leave, Arrive, Narrow** | union versus partition; filters versus witnesses; describe before looking | the four costs are a union; the universal rate is a `gap` |
| **10 Ground Maintainer** | declared meaning not grounded; convention deciding an outcome; channel decay | an allocation that decides a budget has stopped being a convention |
| **11 The Habitat** | capability is agent-and-habitat; valence relative to residual; contact cascades | no standing dollar value of an injury; third-order costs are missed by first-order scoping |
| **12 The Bond** | bonds carry arrangement; comparison and subtraction are ordered; two currencies do not add | a total that sums money and harm is the flat-form error |
| **13 Minimum Viable Set** | returns a shape, not a name; unreachable is a verdict | no figure line returns the correct total or conversion rate |
| **Operators table** | ⋛ comparison, − subtraction, + conjunction, ¬ refusal | the relation between cost classes is not plain addition |
| **Symbols table** | R is a slice, per slot; the ground does not update | the residual is the unread party cost, not the gap in the report |
| **Seat Map** | correlation valence, stakes, mode-as-verdict, pre-registered falsifier | outreach and mode rules for the packet |

Strained readings are named in section 7, not smoothed over.

---

## 2. Findings

### F1 A single additive cost-of-quality total is structurally refused (decisive)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

Fig 12 :125: "A composition costs in two currencies, and they do not add." Fig 12 :126-127: "Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them". Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."

The money in the prevention budget and the harm in a lost-time injury are different readings, in different units, from different anchors. Adding them into a "total cost of quality" is the collapse Fig 12 :6-17 names: the ingredients are recorded, the arrangement is not, and nothing signals that anything was lost. Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." The bond here is *who bears the cost, under which obligation, at which anchor*, and it is exactly what a total erases.

- **Mode:** `specified`. **Status:** triangulated. Two low-overlap figure groups govern it: Fig 1 (per-slot residual in the agent loop) and Fig 12 (priced bonds and two currencies in composition theory). They share neither vocabulary nor evidence pool inside the framework.
- **Refuter:** a figure line that licenses a single additive total across parties with a non-updating anchor for the conversion; or a measurement showing one currency's reading determines the other's at the same anchor with no loss.

### F2 Each party ranges against its own anchor, and the anchors must not update

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :33: "The anchor must not update." Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices." Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

The customer's return, the worker's injury, the stopped line and the regulator's fine do not change because the manager's report says quality is on target. A manager cannot negotiate those readings down. They settle separately, and the comparison is triangulation, not a committee decision (Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you.")

The practical consequence: the four cost classes must be read at four different instruments, then placed side by side. A budget meeting that averages them has replaced the anchors with a room.

- **Mode:** `specified`. **Status:** triangulated (Fig 2 plus Fig 10 :24).
- **Refuter:** a demonstration that a single instrument at one anchor returns all four readings without loss, so the parties are one frame wearing four names.

### F3 The manager's report is frame-internal and cannot score the frame that produces it

Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 10 :18: "a declared meaning is not a grounded one". Fig 10 :47: "a convention that decides an outcome has stopped being one". Fig 10 :24: "the ground does not decay, the channel does". Fig 10 :25-26: "stale percepts, dropped transients, saturated metrics, pooled readings".

A cost-of-quality report is produced by the accounting frame and then used to score that frame's decisions. When the allocated number decides where prevention money goes, the allocation is no longer a convention for describing costs; it is a verdict, and the channel to the party anchors is severed. Pooled readings are the named failure: one line in the report stands for a customer return, a worker injury and a supplier delay at once.

- **Mode:** `specified`. **Status:** triangulated (Fig 1 and Fig 10, different figures and different failure genera).
- **Refuter:** a report whose allocation is demonstrably a shared meaning that decides no outcome, with the party anchors still read independently and shown to be unmoved by it.

### F4 The question is a union of overlapping conditions, not a partition

Fig 9 :4-5: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55-57: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds. What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

A defective part that stops a line and injures a worker is not three additive cases. It is one case in three conditions. Prevention spend is a single lever: it clears the region where only quality failure holds and leaves the safety and delay intersections standing, because those conditions still bind through different parties and anchors.

- **Mode:** `specified`. **Status:** triangulated (Fig 9 union rule plus the per-slot rule of Fig 1).
- **Refuter:** an empirical partition of the four cost classes with an assignable shared fraction and no cross-class overlap, shown at the ground.

### F5 The chain breaks between vocabulary and objective

Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :25-26: "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Managers have an elaborate vocabulary for money (appraisal spend, scrap, rework, warranty) and almost none for what an incident affords to the worker who bears it or what a delay affords to the downstream partner. Without that vocabulary there is no per-party objective, so planning has nothing to plan toward for those slots. Building a better allocation model improves link 4 while link 2 to 3 is still missing.

- **Mode:** `specified` for the diagnosis in this setting; `general` for the dependency order. **Status:** single-source on the figure side (Fig 3), with Hollnagel 2016 and Reinertsen 2013 as low-overlap world corroboration that the safety and delay objectives are measured by different instruments.
- **Refuter:** an instrument already returning a per-party progress reading for safety and delay, in use and checked at the ground, so the link is not missing.

### F6 Independence has to be bought; four reports from one system are one witness

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool". Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Fig 7 :35-36: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced." Fig 8 :48: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."

Three cost reports generated from the same ledger, the same survey and the same incident database are one frame wearing three names. Their agreement on where to spend is the pool talking. Genuine triangulation here requires the customer's return data, the worker's or regulator's injury record and the supplier's schedule data to be read from instruments the accounting frame did not author (Fig 10 :52: "Bring a characterised residual, never the source."). Independence is expensive, so buy it in proportion to the cost of being wrong: a safety incident with a fatality justifies more independence than a scrap count.

- **Mode:** `specified`. **Status:** triangulated (Fig 2 plus Fig 7 and Fig 8, three distinct figures).
- **Refuter:** a single-source measurement whose agreement with four independent readings holds at maximum independence, which would make the extra instruments unnecessary.

### F7 Prevention is a head start or method; failure cost is often a one-occasion recording

Fig 4 :22: "Only methods cross up. Only head starts come down." Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it." Fig 12 :107-110: "Settling compresses the description and not what it cost to establish. Whether that cost must be paid again depends on the substrate: where the arrangement is recorded, re-deriving it is a lookup and the actions were spent once. Where it is not, the result carries forward and the deriving does not, so every lineage pays again."

Prevention spend buys a generator (a reapplicable check, a designed-out failure mode, a trained adjustment). Failure cost is the price of re-deriving what the arrangement did not record. This is the one sense in which prevention and failure are not symmetric operands: prevention crosses into future slots as a method, a failure replay does not, and Fig 12 prices the bond rather than the ingredient. Hollnagel 2016 corroborates from safety science: learning from the 9,999 times things go right is a different object from counting the one time they went wrong.

- **Mode:** `specified`. **Status:** triangulated (Fig 4 and Fig 12, low overlap within the framework; world corroboration single-source).
- **Refuter:** a prevention program shown to be a replay of one past success with no reapplication, and a failure cost shown to carry a recorded method forward; the generator/recording distinction would then collapse.

### F8 No standing dollar value of a safety incident survives a change of residual

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :51: "No standing list of good actors survives a change of residual."

A cost category has no carried valence either. Prevention is a benefit to the worker's residual and sometimes a delay to the delivery residual. Appraisal is a benefit to the customer residual and a cost to the budget residual. The figure refuses a standing list, so it also refuses a standing conversion table. Walasek and Brown 2024 corroborate from human cognition: "people are largely incapable of providing consistent and context-independent valuations of nonmarket goods, such as health, safety, or personal data."

- **Mode:** `specified`. **Status:** triangulated (Fig 11 plus the decision-science source, genuinely low overlap).
- **Refuter:** a context-independent valuation of health and safety that is stable across instruments and residuals, shown at the ground.

### F9 Contact cascades; first-order scoping misses the cost that matters

Fig 11 :52-54: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." Fig 11 :43: "The habitat is enumerated, never composed."

A quality failure at the firm is first-order contact. The customer's lost use is second order. The downstream safety exposure or the regulator's action is third order. A comparison that enumerates only direct supplier costs repeats the first-order error. The habitat must be enumerated outward until the cascade stops mattering, and what cannot yet be perceived is the residual (Fig 11 :48).

- **Mode:** `general` on the cascade rule, `specified` on this supply chain. **Status:** single-source on the figure side (Fig 11).
- **Refuter:** a measured cascade that terminates at first order for all four cost classes, with the third-order reading shown to be zero at a non-updating anchor.

### F10 The universal rate and the correct total are a declared `gap`

Fig 9 :32: "you get a kind of thing, never the answer itself". Fig 13 :134: "So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence," Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line returns a universal conversion rate, a single correct cost-of-quality percentage, or the right dollar value of a fatality. That is a `gap` of the **shape-not-a-name** kind, reported as a verdict and not as silence. It is not unreachable in principle: a firm with its own anchors and an instrument that discriminates sources can ground a *local* comparison (Fig 6 :29, inward instrument extension). What it cannot do is promote that local rate to a universal one without an import that moves the wall (Fig 6 :23).

- **Mode:** `general`. **Status:** triangulated (Fig 9, Fig 13 and Fig 8).
- **Refuter:** a figure line that names the rate, or a ground measurement at a non-updating anchor that settles it for a defined scope.

### F11 Correction to my own reading: "shape, not a name" governs missing primitives

The figures README says the framework returns "what a missing thing would have to look like (a shape, not a name)." I initially read this as forbidding the naming of any specific cost unit. That is an overstatement, recorded here rather than erased. The phrase governs a primitive not held in the library. Money, time and injury counts are already held terms in a management accounting frame. Naming them is a **binding from that frame**, a matter of provenance, not the invention of a seventh primitive and not an import that moves the wall (Fig 6 :21: "MINT composes inside the closure and can never add an atom."). What remains forbidden is inventing a universal conversion atom and claiming the framework derived it. See `05_what_shape_means.md` section 5b and `06_isomers_and_order.md` Q1.

### F12 The relation between cost classes is not plain addition

Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one." Fig 12 :112-113: "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond." Operators table :51: "a goal is a comparison, which is why a vocabulary without it cannot state one". Operators table :46: "progress is a subtraction, which is why a vocabulary without it cannot say how far along it is". Fig 12 :87: "a threshold relation between two quantities".

A cost-of-quality report built only with `+` can name a state (this is what we spent) and cannot name a route to one (what would count as getting somewhere for each party), a goal (which threshold matters) or progress (what was removed). A budget decision is a comparison ⋛ at a threshold, and a reduction in incidents is a subtraction −. Using only addition is the flat-form collapse again, now at the level of the operator set rather than the quantities.

- **Mode:** `general`. **Status:** triangulated (Fig 12 and Operators table).
- **Refuter:** a decision procedure that states its goal and its progress using only conjunction, with no comparison or subtraction term, and is checkable at the ground.

---

## 3. Pre-registered refuter

Written before the recommendation, per Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device. Stating what failure looks like surfaces constraints the design does not, and the constraint arrives as a change to the experiment rather than as a note about it."

The shape claim (per-party vector, separate currencies, separate anchors, union, method/recording distinction) is refuted if any of the following holds:

1. A figure line is produced that licenses a single additive total across parties with a non-updating anchor for the conversion. That would overturn F1 and F12.
2. A measurement at a specific firm shows one currency's reading determines another's at the same anchor with no information loss, so money and harm are one quantity at that level and F1's no-add rule does not bite.
3. All parties' readings are shown to come from one instrument and still triangulate at maximum independence (Fig 8 :50-52), so F6's independence requirement is empty.
4. A prevention spend is shown to be a recording of one occasion rather than a reapplicable method, and a failure cost is shown to carry a recorded method forward, collapsing F7.
5. The four cost classes are shown to form a partition with an assignable shared fraction and no cross-class overlap, collapsing F4.
6. A per-party progress instrument already exists and is used for safety and delay, collapsing F5.

If any fires, the shape is withdrawn. Until one is run, no part of this may be labelled `grounded`. A firm-specific local conversion is allowed, but only with its own anchor declared and its scope bounded; it is a candidate binding, not a universal term.

---

## 4. Recommendation

1. **Report a vector, not a total.** One line per party per cost class, with the currency and the anchor named on the line (F1, F2).
2. **Keep the anchors non-updating.** A customer return, an injury record, a stopped line, a fine. None may be recomputed from the manager's own report (F2, F3).
3. **Unbundle the union before deciding.** Describe each overlapping condition separately and leave the shared fraction unassigned rather than allocating it by convention (F4).
4. **Fix the vocabulary-to-objective link first.** Give managers terms for what an incident affords to a worker and what a delay affords to a downstream partner, then state what progress means per party. Do not start with a better allocation model (F5).
5. **Buy independence deliberately.** Read customer, worker, supplier and regulator data from instruments the accounting frame did not author, in proportion to the cost of being wrong (F6).
6. **Account for prevention as method.** Record what is reapplicable; do not treat a one-occasion success as a generator, and do not let a failure replay stand in for a method (F7).
7. **State mode on every line.** `specified` per domain, `general` on the shape, nothing `grounded` (Seat Map :281).
8. **Pre-register the failure condition.** Use the six refuters above before any budget decision is attributed to this derivation (Seat Map :287).
9. **Declare the gap.** The universal rate is a shape-not-a-name gap, a verdict and not silence (F10).

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The gap between a vector report and a one-number management summary must be measured, not assumed zero.

---

## 5. Canonical usage check

Two local canonical sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them" and "the quotes are the authority, not this summary." A reading that makes one figure contradict another has misidentified its domain. The limit is "a shape, not a name," and "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide design questions the figures already settle. Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." applies to cost estimates: a variance threshold filters what gets investigated, it is not a witness for which party's cost caused the outcome.

No ruling was requested from the framework author. All design questions (report a vector, unbundle the union, buy independence) are decidable from the figures and the metalaw note.

---

## 6. Retractions and confirmations

| earlier finding | status after the canonical check |
|---|---|
| F1 "single total refused" | **Confirmed, narrowed.** It refuses a *universal* additive total across parties. It does not refuse a local comparison inside one party's closure with a declared anchor; that is a binding, not a universal term. |
| F11 "shape not a name forbids naming money" | **Retracted.** The rule governs missing primitives. Money, time and injury counts are held terms in the frame; naming them is provenance. Kept visible because it was my first reading. |
| F8 "no standing value of a safety incident" | **Confirmed with a boundary.** Fig 11 :51 governs standing valuations across residuals. A firm may set a local value for one defined residual and its anchor; promoting it to a standing table is what fails. |
| F10 "universal rate is a gap" | **Confirmed as unreached, not unreachable.** A local, source-discriminating instrument can ground a scope-bounded rate (Fig 6 :29). The figure returns no universal name (Fig 13 :135). |
| F5 "missing objective instrument" | **Kept as `specified`, single-source on the figure side.** World corroboration exists but is not a second figure. Not upgraded to triangulated. |
| Apparent Fig 1 versus Fig 12 overlap | **Not strained.** Fig 1 governs per-slot residual in the agent loop; Fig 12 governs priced bonds in composition. Different objects, same no-add rule. Re-census, not a contradiction. |
| Apparent Hollnagel Safety-II versus counting incidents | **Not strained.** Counting the absence of safety and reading the presence of capacity are two instruments on one slot. Kept as evidence that the slot needs its own anchor. |
| Ostrom overlap | **Declared, not hidden.** The framework author's *Recursive Self-Improvement Trap* essay cites Ostrom's polycentric-governance paper, so that source shares part of the framework's evidence pool. It is not a fully independent witness. |

---

## 7. Strains and re-census

- **S1: six-term physical substrate mapped onto cost categories (retracted).** My first pass tried to read quality, safety, delay and prevention as species of the six physical terms. Re-census: they are library terms and bonds in a business frame, not the six primitives. Fig 13 governs the substrate of a composed physical system; here the relevant figures are Fig 1 (per-slot residual), Fig 9 (union) and Fig 12 (bonds and currencies). Strain dissolved; the first reading is kept above.
- **S2: extending Fig 12's "two currencies" from bits and actions to money and harm.** The no-add rule is structural and triangulated by Fig 1. The specific extension to management accounting is an analogue, so F1's world-facing application is `specified` and single-source on the extension. Named, not hidden.
- **S3: operand type of ⋛ (live).** Operators table :48-52 defines comparison as "a threshold relation between two quantities." Money and harm are not obviously two quantities at the same level. Fig 12 :104 permits a settled molecule to become an atom at the next level, but whether a harm reading counts as a quantity there needs an instrument, not an argument. This is the one live type strain; it is carried into `06`, `08`, `09` and `11`.
- **S4: Walasek and Brown against the framework.** No conflict. Their finding that there is no universal value scale corroborates the figure verdict from a genuinely different field. If they had found a stable common scale, that would have returned us to the census rather than flipped the verdict, because the figure rule governs the verdict.
- **After re-census: one live strain (S3), two dissolved readings (S1, S4), one narrowed analogue (S2), none hidden.**

---

## 8. Round trip gap note

The condensation used in the email and packet is: report a vector, keep anchors separate, treat the problem as a union, buy independence, pre-register a refuter. Bringing that back down to a concrete budget meeting drops three constraints: the typed bond naming who bears each cost (Fig 12 :5), the non-updating anchor test (Fig 2 :29), and the source-discriminating instrument needed to settle a local conversion ( essay *The Hard Problem is About Source*). The gap is recorded qualitatively and is nonzero. `11_audit.md` measures it in detail.
