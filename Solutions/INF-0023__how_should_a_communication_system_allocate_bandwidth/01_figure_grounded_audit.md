# Figure-grounded audit: allocation among accuracy, speed, robustness, energy

**Mode of this document: `specified` on the shape, `general` on the unbundling rule, `gap` on any numeric split.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Nothing here is `grounded`.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the allocation question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the figures usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the eight essays listed in `05_what_shape_means.md`. World sources actually opened are listed in `10_source_ledger.csv`.

---

## 0. The question under audit, stated as an effect

> How should a communication system allocate bandwidth among accuracy, speed, robustness, and energy use?

Restated: a finite channel resource and a finite power budget must be arranged so that a receiver gets a message that is correct, timely, still correct when the channel misbehaves, and cheap to produce. What is being decided is not a division of one substance into four portions. It is which constraints are hard floors, which is a rate to be maximised, and which is a physical expenditure to be minimised. Each option leads to a different failure at the receiver. The residual is the gap, per message and per channel condition, between what the design predicted the receiver would get and what it actually got. An answer would look like a set of floors plus a rule for buying independence in proportion to the cost of being wrong, with the numeric split left open until a ground is supplied.

**Direction made an ordinary term.** The sought-for shape is written down and bound here before the derivation: *four goods, two currencies, two bond properties; hard floors before optimisation; per-slot residual; numeric split unreachable without a channel model and a cost of being wrong.* Formula "Direction" says a frame cannot check the direction of its own question unless the shape is made a term that accrues a residual. This paragraph is that term.

---

## 1. Domain census (before any figure line is chosen)

### R by arity, symmetry, scale

- **Arity.** Four named goods, but they are not four independent operands. Accuracy and robustness are both "the receiver got the right message" claims over different channel states. Speed is a rate. Energy is an expenditure. So the arity of the *problem* is four while the arity of the *residual* is one per slot: did this message, under this condition, arrive correctly and in time.
- **Symmetry.** The four are not interchangeable. Swapping energy for accuracy is not a relabelling of the same term; it is a category mistake. A flat formula that records four ingredients and one `+` bond has recorded half of itself (Fig 12 :4-5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*). No equal split follows from symmetry, because there is no symmetry.
- **Scale.** Per message (a slot), per link (a session), per design (a fleet). Residual must be read at the slot scale, not summed into a single quality figure.

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor |
|---|---|---|---|
| D1 Channel and coding | sender, encoder, channel, noise, decoder, receiver | bits and error probability per slot | a received message compared with a known sent message under a stated channel state |
| D2 Resource and thermodynamics | transmitter, clock, power source, bandwidth allocator | joules, hertz, seconds | a power meter and a clock |
| D3 Design and objective | system designer, maintainer, checker | budget and residual | the cost of being wrong, which lives in the application, not in the design frame |
| D4 Verification of this packet | primary seat, second seat, outside frame | agreement and residual | the ground, never agreement; in this simulated run the seats share one evidence pool, so independence is near zero |

Every domain has a nameable anchor. D3 is the one usually skipped: a system that picks its own failure cost has authored its own objective.

### Partition or union?

**Union.** Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Accuracy overlaps robustness (both are correctness claims); speed overlaps energy (a faster symbol rate generally costs more power, see the finite-time Landauer result in `04_links_and_distribution.md`). Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* So the four-way question must be unbundled before it is searched. A single lever that buys accuracy will leave the intersection of robustness and low energy standing.

### Order by dependency (Fig 3)

1. **Perception.** Can the receiver detect a signal at all? If not, no allocation arrives at a step that can use it. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*
2. **Vocabulary.** Does the design have terms for what the channel affords: independent errors vs burst errors, stable code vs drifting code? Without those terms the middle link is unreadable. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
3. **Objective.** What counts as progress here, in the design's own terms? This is the link that usually breaks. No instrument for "how much robustness is enough" means the link is assumed, not measured.
4. **Planning.** Only now allocate the budget.
5. **Learn and carry.** Update the error model per slot and carry the method, not the recording of one successful run (Fig 4 :22: *"Only methods cross up. Only head starts come down."*).

Strain test applied before choosing findings: the question's "four goods" do not map one to one onto the figure set. Re-census result recorded in §5.

---

## 2. Findings F1 to F8, with verbatim figure lines and refuters

### F1 - The four-way allocation is a union, so no single split is derivable (decisive at the structural level)

Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*
Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

The question asks for one allocation across four overlapping conditions. Under Fig 9 that is a union, so the honest first move is to split and then search each part. Any answer that returns a single percentage split has silently decided that the four conditions are a partition. The figures do not license that decision.

**Refuter:** exhibit a single measurable quantity, with one anchor, such that improving it monotonically improves accuracy, speed, robustness and energy use simultaneously, and show that the four goods are its four names rather than four overlapping conditions. Until then, the union reading stands. **Status: `general`, triangulated** (Fig 9 union rule plus the distinct-unit observation in F3, two low-overlap routes).

### F2 - The residual must be indexed per slot, never averaged into one quality number

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Symbols table :43: *"One object, region or entity being tracked. R is measured per slot, never as a single global number."*

In a communication system the slot is the message or the packet under a given channel state. A fleet-wide "99.9 percent delivered" figure can be near zero residual while one live slot, say the control packet on a fading link, is failing. Fig 1 :13 (*"a global R near zero with one live slot residual is a legal state"*) is exactly this case.

**Refuter:** show an aggregated quality metric that reliably identifies which slot is failing and by how much, on a channel with correlated errors. If such a metric exists, the per-slot requirement is weakened. **Status: `general`, triangulated** (Fig 1 and Symbols table, different parts of the framework).

### F3 - The four goods are two currencies plus two properties of the bond, so summing them is the named error

Fig 12 :125: *"A composition costs in two currencies, and they do not add."*
Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."*
Fig 12 :130: *"Summing them into one figure is the error this names, not the fix for it."*
Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*

Bandwidth and the bits it carries price the description. Energy and latency price the actions spent finding out whether the message holds at the receiver. Accuracy and robustness are not a third and fourth currency; they are facts about whether the receiving frame is actually ranged against the ground. So "allocate bandwidth among four goods" is itself a slightly malformed question: it asks one currency to purchase another currency and two bond properties. The honest reformulation is: set floors on the bond properties, then spend bits and actions to meet them.

**Refuter:** exhibit a common physical unit in which accuracy, speed, robustness and energy are additive at the design level without losing which slot failed. If one exists, the two-currency warning does not apply. **Status: `specified`, triangulated** (Fig 12 currency rule plus Fig 6 closure rule).

### F4 - Robustness is bought as independence, not as repetition, and the purchase is priced by the cost of being wrong

Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."*
Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*
Fig 8 :45: *"Two frames together reach what neither reaches alone."*

Two identical copies of a message carried on the same fading path are one frame wearing two names under the failure that matters. They do not add independence. A burst error takes both. The world literature confirms the mechanism in two separate engineering traditions, multiple description coding (descriptions on partially disjoint paths) and interleaved burst-error codes (spread the adjacent bits so a physical scratch becomes correctable random errors). See `04_links_and_distribution.md`. The amount of independence to buy is not a fixed percentage; Fig 2 :42 prices it by the cost of being wrong, which is the D3 anchor and is owned by the application.

**Refuter:** show a repetition scheme whose copies remain independent under the actual failure mode of the channel, measured at the ground, so that no disjointness or interleaving is required. **Status: `specified`, triangulated** (Fig 2 independence rule plus two low-overlap world fields: coding theory and storage engineering).

### F5 - Hard floors precede optimisation; a weighted average cannot guarantee a live slot

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
Fig 1 :20: *"Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert"*

A floor is a comparison, a threshold relation, not a share. Formula "Composition": *"a goal is a comparison, progress is a subtraction, a refutation is a negation."* Setting a minimum accuracy, a maximum latency, a minimum survival under a stated channel state, and a maximum joules per bit turns each good into an ordinary term that can accrue a residual and be refused. Only after the floors hold does it make sense to maximise what is left. A weighted sum of the four goods is a filter presented as a verdict: it can be tuned to pass while a floor is broken.

**Refuter:** exhibit a system in which a weighted objective with no explicit floors still guarantees, for every live slot and every stated channel state, that each minimum is met. **Status: `specified`, single-source for the floor ordering** (Fig 9 filter rule and Formula composition note share the framework evidence pool; the world sources corroborate the shape but do not derive it).

### F6 - The numeric split is a `gap` at this budget: underivable is not the same as unreached

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*
Fig 13 :134: *"Unreachable is a verdict here, not a silence"*

No channel law, noise statistic, power ceiling, latency deadline, or cost of being wrong was supplied with the question. Without them there is no ground against which a numeric allocation can be settled. Formula step 7 separates three questions, and they must be kept distinct:

- **SEARCHED.** Is the answer already in the engineer's library and merely unfound? For standard channels yes: rate distortion theory and the Shannon-Hartley bound already give rate versus distortion and rate versus power frontiers. More search, not a new atom.
- **INWARD.** Sharpen the instrument: measure this channel's error statistics and this hardware's joules per bit.
- **OUTWARD.** Import the missing primitive: the application's cost of being wrong, which no communication frame can author for itself. Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

Reporting "no numeric answer" here is a verdict, not an omission. **Refuter:** supply a channel model, a power ceiling and a cost function, then show that a single frontier closes the allocation without importing the application's cost. **Status: `general`, triangulated** (Fig 8, Fig 6 and Formula step 7, three distinct figure passages).

### F7 - Agreement and prestige cannot settle the allocation

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 7 :13: *"agreement compounds, evidence does not"*
Fig 10 :59: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."*

A committee of stakeholders can agree on a split and still be wrong in exactly the way a mirror is wrong. *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* This is why the outreach in `02` leads with a refuter and asks what would count as a failure, not for endorsement. It is also why this simulated second seat in `11_audit.md` declares that its agreement is internal consistency, not corroboration.

**Refuter:** name a case in which consensus among frames sharing one evidence pool changed a measured bit error rate or a measured joule-per-bit figure. **Status: `general`, single-source for the rule** (Fig 2, Fig 7 and the essay agree, but share an author and evidence pool).

### F8 - The round trip from the abstract question back to a concrete design is lossy, and the gap must be reported

Fig 4 :27: *"The transform between scales loses information, and that is the point."*
Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
Fig 10 :24: *"the ground does not decay, the channel does"*

The phrase "allocate bandwidth among four goods" is a coarse description. Concretising it into a transmitter setting drops at least three things: which slot is live, which channel state is present, and what the failure costs. The resulting confidence is dead reckoning if the drop is not measured. The honest report is a lossy condensation with an enumerated `R_T`, given in `11_audit.md`. Fig 10 :24 adds the operational consequence: when the ground stops arriving, the failure is in the channel, not in the world, so the remedy is to restore contact with the receiver measurement rather than to re-tune the allocation on stale data.

**Refuter:** exhibit a condensation of the four-good question into a concrete design that preserves slot identity, channel state and failure cost on the way down. **Status: `specified`, single-source** (Fig 4 and Fig 10 share the framework evidence pool).

---

## 3. Pre-registered refuter (written before the conclusion)

Required before any outreach, per the standing instruction that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. The four goods are shown to be a partition under one anchor, so one allocation frontier closes all of them without unbundling (kills F1).
2. An aggregated quality metric reliably identifies the failing slot under correlated errors, so per-slot residuals are unnecessary (kills F2).
3. Accuracy, speed, robustness and energy are shown to be additive in one physical unit at design level, with no loss of which slot failed (kills F3).
4. A repetition scheme is measured to be independent under the actual failure mode, so disjoint paths or interleaving are not required (kills F4).
5. A weighted objective with no floors is proven to keep every live slot above every minimum under every stated channel state (kills F5).
6. A numeric split is settled from the question alone, with no channel model, cost ceiling, or import of the application's cost of being wrong (kills F6).

If any fires, the corresponding finding is withdrawn and the packet in `08` is corrected before it is sent. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation (the shape, before any numeric claim)

1. **Unbundle first.** Treat accuracy, speed, robustness and energy as a union of overlapping conditions, not four shares of one budget (F1).
2. **Set floors before optimising.** Bind each good as an ordinary term with a threshold, so it can accrue a residual and be refused (F5).
3. **Measure per slot.** Keep the residual indexed by message and channel condition. Never let a fleet average stand in for a live slot (F2).
4. **Buy independence, not copies.** Spend the robustness budget on low-overlap paths, interleaving, or multiple descriptions in proportion to the cost of being wrong (F4).
5. **Keep the two currencies apart.** Report a bits figure and an actions figure separately. Do not sum them (F3).
6. **Declare the `gap`.** Say plainly that the numeric split is unreachable without a channel model and an imported cost of being wrong. Name the three searches SEARCHED, INWARD, OUTWARD and keep them distinct (F6).
7. **Do not pool agreement.** Ask an outside frame what it would count as a failure, record that verdict, then offer the sources (F7, F8).

---

## 5. Canonical usage check and re-census

Two rules were applied after the first four sections.

**The figures README** (local canonical copy) says the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them"* and that *"the quotes are the authority, not this summary."* It also gives the re-census rule: a reading that makes one figure contradict another has misidentified its domain, not found a flaw. Finally it states the canonical limit: the framework reports what a missing thing would have to look like, *"a shape, not a name,"* and then stops at the limit of the instruments and records the lineage so the stop is honest. *"Indiscernibility is not identity."*

**`THE_FORMULA.md`** governs the mode rule and step 7. Its "Direction" paragraph is why §0 binds the sought-for shape as an ordinary term before deriving.

### Strain found and resolved by re-census

My first pass tried to map the four goods directly onto the six-term substrate: accuracy to spectrum, speed to time, robustness to network, energy to energy. **This reading is retracted.** The six terms of Fig 13 are states and structures of a *system*, not engineering resources. Bandwidth is not a spectrum of a message in the Fig 13 sense; it is a measure of a channel resource. Accuracy and robustness are not structures at all; they are facts about whether a frame is ranged against the ground. Forcing the four goods into the six-term set is exactly the strain test firing: the line only fit with a strain, so it governs another quantity. Re-census sent the four goods back to D1 to D3, where the two-currency rule (Fig 12) and the independence rule (Fig 2) govern them directly. **After re-census: no live strain.** The six-term set is not needed to answer this question, and claiming otherwise would be a new import with no source gate (Fig 6 :21).

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| Four goods map onto four of the six substrate terms | **Retracted.** Re-census: the six terms are states and structures of a system, not allocated resources. Fig 12's two-currency rule governs the resources; Fig 2's independence rule governs robustness. |
| The question has one optimal numeric split | **Retracted at the effect level.** Fig 9 names a union. No split is derivable until unbundled and a ground is supplied. |
| "No answer" is a failure of the derivation | **Refused.** Fig 8 :39 and Fig 13 :134 make unreachable a verdict, not a silence. The `gap` is recorded. |
| Per-slot residual requirement | **Canonically confirmed.** Fig 1 :19, :22 and the Symbols table agree; the figures README permits the structural claim as a shape. |
| Independence must be bought in proportion to failure cost | **Canonically confirmed as a shape, not a number.** Fig 2 :42 gives the rule; the number requires the D3 anchor, which is external. |
| The union reading is strained by Fig 9's "split it rather than search" | **Not strained.** Fig 9 :4-5 says disagreements that do not shrink with effort are several well-formed questions. That is this case. |

### Updated verdict

The shape survives: unbundle the four goods, set floors before optimisation, measure per slot, buy independence rather than copies, keep bits and actions in separate accounts, and declare the numeric `gap` until a channel model and a cost of being wrong are imported. Everything specific to a particular system, including any percentage split, does not. Mode: `general` on the unbundling, `specified` on the shape, `gap` on the number. Strained after re-census: none.
