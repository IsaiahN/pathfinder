# Figure-grounded audit: can supply-chain transparency improve accountability?

**Mode of this document: `general` on the shape, `specified` on the conditional verdict, `gap` on the frequency word "often". Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (2026-11-19): LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Primary: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim lines), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`. Secondary: the sources in `10_source_ledger.csv`, each opened 2026-11-22.

---

## 0. The residual in effect terms

The question asks which of two outcomes follows from making a supply chain visible.

> **Option A:** transparency improves accountability in practice. Prediction: disclosed problems are followed by consequences that track the disclosure. A named supplier, a named violation and a named remedy move together.
> **Option B:** transparency stops at reporting and certification. Prediction: the number of documents, audits, certificates and disclosed supplier lists rises while the states they describe stay fixed.

**R, stated as an effect.** For each slot `s` (a supplier, a factory, an incident, a worker cohort), `R_s = | report(s) - ground(s) |`, where `report(s)` is what the disclosure frame says about the slot and `ground(s)` is what an anchor that does not move on the frame's sayings returns: wage paid, hours worked, injury rate, remediation completed, penalty enforced.

This is a per-slot quantity, not an aggregate. Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** A supply chain that publishes 100 percent of its tier-one suppliers and scores 95 percent audit compliance can still have one live factory slot with an unremediated injury. A single "transparency index" is the aggregate that hides it.

**Direction, bound as an ordinary term** (`THE_FORMULA.md`, "Direction"). The sought-for shape is written down before the run so it can accrue a residual like anything else: *an answer is a rule that says which contact a disclosure must cross for consequences to follow, and which conditions leave it inside the reporting frame.* That rule is the term under audit, not the answer the question wanted.

**What would count as an answer:** not "transparency works" or "transparency fails", but a discrimination: a condition C such that disclosure plus C changes `ground(s)`, and disclosure without C changes only `report(s)`. The derivation below offers C = an importable anchor with consequences that can be violated. It is `specified`, not `grounded`, and the frequency "often" is explicitly left open.

---

## 1. Domain census (before any figure line was chosen)

### R by arity, symmetry and scale

- **Arity:** two conditions, (i) visibility and disclosure, (ii) consequence and enforcement. This is a **union compound**, not one hard question. Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** A case satisfying both conditions is categorically different from a case satisfying one.
- **Symmetry:** ordered, not symmetric. Disclosure to consequence is `→` (sequence, or better `⇒` production when the disclosure actually creates a consequence that did not exist). Consequence to disclosure does not run the other way: an enforced remedy need not produce the same published artifact. The consequence comes from a frame whose closure differs, so it is an import (Fig 6 :14), not a symmetric join.
- **Scale:** first order inside the disclosure frame (a firm sees, records, publishes, certifies); second order at the governance frame (an inspector, worker, buyer or court acts on what was published). Settlement at the first order is not settlement at the second.

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor (nameable?) |
|---|---|---|---|
| D1, the disclosure frame | firm, auditor, certification scheme, reporting standard setter, disclosure platform | documents, certificates, coverage percentages, audit scores | **None inside the frame.** The frame scores itself with quantities it produces (Fig 1 :27). No nameable anchor means it is a closure, not yet a grounded domain. |
| D2, the governance and consequence frame | labour inspectorate, regulator, worker, union, buyer, court, consumer, criminal prosecutor | fines, remediation, back pay, contract loss, liability, personal injury | **Yes.** Worker outcomes and enforcement actions that do not change because the firm disputes them (Fig 2 :29-30). |
| D3, the observation and research frame | academic researcher, journalist, outcome auditor, affected worker speaking publicly | measured outcomes versus reported outcomes | **Yes, the ground.** Never agreement between researchers. In this simulated run all seats share one evidence pool. |

### Partition or union

**Union, not partition.** Disclosure-only cases and enforcement-only cases are separate regions; the intersection is a specific compound that needs its own loop. Fig 9 :56: **"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."** "Publish more" is the single lever. It clears the disclosure-only region and leaves the disclosure-plus-consequence intersection untouched.

### Order by dependency (Fig 3)

Fig 3 :20: **"The chain is ordered by dependency, not by importance."** The chain here is:

1. **Perception:** can the firm see what is in its own chain, past tier one?
2. **Vocabulary:** does it have terms for what it finds (wage theft, forced overtime, subcontracting without notice)?
3. **Objective:** can it say what would count as progress, in its own terms (remediation completed, not report filed)?
4. **Planning:** is there a route to that objective under incomplete information?
5. **Learn and carry:** is the remedy verified and carried to the next supplier?

Disclosure tools reach links 1 and 2. The chain usually breaks at link 3, because the objective is the one link with no obvious instrument. Fig 3 :24: **"Why the middle link is where chains usually break."** Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** Fig 3 :29: **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."** Publishing more is effort above the break.

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing | verdict after census |
|---|---|---|
| 1 The Agent | frame-internal quantities disqualified; residual per slot | reporting metrics are frame-internal; single transparency indices hide live slots |
| 2 The Ground | anchor must not update; correlation disqualifies; convention that decides an outcome | certificates are conventions until they decide consequences; then they corrupt |
| 3 Dependency Chain | ordered by dependency; break at the middle link | disclosure reaches perception and vocabulary, usually stops before objective |
| 4 The Membrane | lossy transform, round trip gap | a summary of a transparent chain cannot substitute for the chain reading |
| 5 Mint Pipeline | machinery firing is not the milestone | more reports is machinery firing, not new ground contact |
| 6 Closure / Reachability | import is the only operator that moves the wall | accountability is an atom from a different closure; disclosure alone cannot compose it |
| 7 Room Chain | agreement compounds, evidence does not; no last room | a certification chain is a mirror chain; more certifiers add vocabulary, not an anchor |
| 8 Union Surplus | residual first, frame second; no proof of absence | describe the consequence gap before choosing a disclosure tool |
| 9 Leave / Arrive | union versus partition; filters not witnesses | disclosure is a filter for the budget, not a witness for the verdict |
| 10 Ground Maintainer | declared meaning not grounded; channel decays | a disclosure standard declares meaning; it is grounded only when it can be violated |
| 11 The Habitat | capability is agent and habitat; contact claim | disclosure that does not change contact changes nothing |
| 12 The Bond | state versus route, goal, progress, refusal | disclosure names a state; accountability needs ordered bonds and negation |
| 13 Minimum Viable Set | network = "that entities relate, and influence travels"; gradient = "a difference that can be spent" | the supply chain is a network; governance pressure is a spendable difference, not a document |
| Operators table | `→` sequence, `⇒` production, `⋛` comparison, `¬` negation | a report does not produce a consequence by being issued |
| Symbols table | `R` is the aim; the anchor is whatever settles the question | no `R` is measured by a certification count |

Strained readings are named as such in §6, not smoothed over.

---

## 3. Findings F1 to F9

### F1 — Reporting and certification are frame-internal quantities (decisive)

Fig 1 :24-27:

> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 5 :49: **"Machinery firing is not the milestone. A running system can mint and still return nothing new, which is exactly what the third guard exists to record."**

A certificate, an audit score, a disclosed supplier list and a coverage percentage are all produced by the disclosure frame. The same frame uses them to report on itself. Supply chain transparency and sustainability research separations visibility from disclosure (Kraft, Yu and Zheng, 2023), and Schäfer (2022) found only 30 of 92 papers even defined transparency. The vocabulary the frame uses to score itself is not independent of the frame.

**Mode:** `general` (structural). **Status:** triangulated (Fig 1 plus Fig 5 plus Goodhart and Campbell in the world, which the framework article itself cites as borrowed machinery). **Refuter:** exhibit a disclosure measure whose value is set by the anchor, not by the reporting system, and which moves when the anchor moves and does not move when the report changes. F1 is false if such a measure exists and is in ordinary use.

### F2 — The anchor for accountability is consequences, not documents

Fig 2 :29-30:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

Fig 2 :43: **"a convention that decides an outcome has stopped being one."**
Fig 2 :41: **"agreement about a shared meaning is the product, not a corruption of it"**
Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

A certificate is efficient for a convention (everyone in the chain knows what the badge means). It corrupts the moment it is allowed to decide the outcome, because then the thing the reporting frame produces settles the question the reporting frame is supposed to be answering. The anchor must be outside: fines actually levied, back pay actually paid, injuries actually reduced, a buyer actually terminating a contract.

This is also why "avoiding a bad certificate" and "achieving accountability" are different objectives. The first can be met by editing the report; the second cannot. World corroboration: Locke, Qin and Brause (2007) found *"monitoring alone appears to have produced only limited results"* across more than 800 Nike suppliers; Vandenbroucke (2023) found *"SC compliance does not amount to SC effectiveness"*; Kuruvilla et al. (2020) found audit scores were *"not statistically significant predictors of better compliance"* in their sample.

**Mode:** `specified`. **Status:** triangulated (Fig 2 plus Fig 10 plus three low-overlap business sources). **Refuter:** a properly independent study in which a certificate or audit score predicts worker outcomes out of sample, with the outcome measured by a source that does not draw on the auditor's evidence. Agreement between the auditor and the researcher reading the same audit is one pool, not two frames (Fig 2 :40).

### F3 — Transparency is a channel, and the channel decays

Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 10 :25: **"stale percepts, dropped transients, saturated metrics, pooled readings"**
Fig 10 :18: **"a declared meaning is not a grounded one"**
Fig 10 :19: **"install what can be violated"**

A disclosure standard declares a meaning. It becomes grounded only when something can violate it in a way the standard cannot absorb. A supplier list that is correct on the day of publication and stale nine months later is a channel failure, not a change in the ground. Fig 10 :28: **"you have lost touch"** is the honest report, not "you have found a violation" when the metric saturates.

Padfield et al. (2025) name **map-washing**: disclosure that *"has little or no value to the intended users, but rather creates, conforms to or distorts a particular narrative."* Their review quotes Stohl et al. (2016) on **"a sea of unstructured and boundless data"** that overwhelms third parties and reduces transparency. More channel is not necessarily more contact.

**Mode:** `specified`. **Status:** triangulated (Fig 10 plus Fig 1 plus map-washing literature). **Refuter:** show a disclosure channel whose readings are refreshed by the anchor at the same cadence as the anchor changes and whose saturation point is known and below the operating range.

### F4 — A certification chain is a mirror chain

Fig 7 :13: **"agreement compounds, evidence does not"**
Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
Fig 7 :36: **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

When a brand accepts an auditor, the auditor accepts a certifier and the certifier accepts a standard, and all four read the same documents, the chain adds agreement without adding an anchor. Seat Map :283 on rooms applies directly: adding parties raises the vocabulary and does not add an anchor. Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool."**

**Mode:** `general` (structural). **Status:** triangulated (Fig 7 plus Fig 2 plus Seat Map). **Refuter:** a chain in which each link ranges against a different instrument and the instruments cannot be moved by the other links. That is triangulation, and it is exactly what a chain of shared audits is not.

### F5 — More disclosure inside the same closure cannot compose accountability

Fig 6 :14: **"the only operator that moves the wall"**
Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**
Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**
Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Everything the disclosure frame can produce is already in its closure. The atom of accountability (a consequence that costs the firm something even if it disputes the report) lives in the governance frame's closure. It arrives by import, with a source gate and a shadow test, or it does not arrive. Disclosure is a filter for the budget: it decides where to look. It is not the witness for the verdict.

Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit."** The consequence gap must be described in effect terms before choosing a transparency tool, otherwise any tool will appear to fit.

**Mode:** `specified`. **Status:** triangulated (Fig 6 plus Fig 8 plus Fig 9). **Refuter:** exhibit a case where iterating disclosure inside the same frame produced a new consequence that was not previously composable. That would be a mint, and Fig 6 forbids a mint from adding an atom; if it happened, the figure is wrong for this domain and the census must be redone.

### F6 — The question is a union compound, not one lever

Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :56: **"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."**
Fig 9 :59: **"it stops being a mixture and becomes a specific compound."**

Visibility without consequence is one region. Consequence without visibility (a worker suing an employer whose chain was never mapped) is another. Their intersection is a specific compound with its own loop and its own ground. Treating "transparency" as a single lever leaves every intersection standing. Fig 9 :32: **"you get a kind of thing, never the answer itself."**

**Mode:** `general`. **Status:** triangulated (Fig 9 plus Fig 12's bond distinction, see F7). **Refuter:** show that disclosure and consequence are one condition rather than two, i.e. that wherever disclosure exists a consequence necessarily follows in the same operation. The Nike and apparel evidence explicitly separates compliance from effectiveness, so this refuter has already fired against the empirical claim, but a figure-level demonstration would still be needed to move the verdict.

### F7 — Disclosure names a state; accountability needs a route, a goal, progress and a refusal

Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."**
Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."**

A map of tier-one suppliers is a state term. It says what is present. Accountability needs four more things the disclosure vocabulary usually lacks:

- a **route** (`→`) from finding to remedy;
- a **goal** (`⋛`) that compares actual wages with a threshold, not merely reports them;
- **progress** (`−`), a subtraction between an earlier reading and a later one at the same slot;
- a **refusal** (`¬`), the standing to say a certificate is false, which a vocabulary with only accumulation cannot carry.

This is the sharpest figure-grounded reason the answer is not simply "more data". The vocabulary that produces reports cannot express the correction. Fig 12 :112 names negation as the missing operator.

**Mode:** `general` (structural). **Status:** single-source (Fig 12, with the Operators table corroborating the bond types). Marked single-source honestly, not averaged with the others. **Refuter:** exhibit a disclosure system whose own vocabulary includes an ordered remediation plan, a threshold comparison, a per-slot progress subtraction and a standing refusal, and which itself delivers consequences. If that system is still only "reporting and certification", F7 is false. Note that if it delivers consequences, it has crossed into D2 and the verdict in F2 stands.

### F8 — Capability is agent and habitat; disclosure that does not change contact changes nothing

Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**
Fig 11 :66: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."**
Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**

An audit is often a substituted habitat: the factory is prepared for the visit, records are assembled, workers are coached. The audit then proves the wiring of the disclosure system and not the capability of the supply chain. Fig 11 :40 governs the whole question: if a transparency improvement does not alter the contact between the firm and the consequences it can bear, it changes nothing however much it improves the reports.

**Mode:** `specified`. **Status:** triangulated (Fig 11 plus Fig 6 import). **Refuter:** an agent-only improvement that moved the ground without changing contact. The essay *How a Society of Agents Would Work* records the framework's own standing falsifier for this claim: *"an agent-only improvement that moved the ground would refute the capability claim."* Until such a case is shown, the claim stands as `candidate`, not settled.

### F9 — The frequency word "often" is a gap for the figures

Fig 9 :32: **"you get a kind of thing, never the answer itself."**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

The figures settle a condition, not a base rate. They say what must be present for disclosure to cross into accountability and what happens when it is absent. They do not say how frequently real supply chains are in one state or the other. That is an empirical question about the world, answerable only by outcome measurement across a sample. No such measurement was taken here.

**Verdict: `gap`.** "Unreachable is a verdict, not a silence." The honest report is: *the framework returns the shape of the discriminator; it does not return the frequency.* Claiming "transparency often stops at reporting" as a figure-grounded result would be a mode violation (Seat Map :281: *"An unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict."*). The world literature leans that way (Locke 2007; Vandenbroucke 2023; Kuruvilla 2020; Padfield 2025) but it is one shared evidence pool about audited supply chains, not an anchor for all supply chains.

---

## 4. Pre-registered refuter (written before the conclusion)

Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted, revised or withdrawn if any of the following holds:

1. A disclosure measure is in ordinary use whose value is set by the anchor and which moves when the anchor moves but not when the report changes (refutes F1, F3).
2. An independent study shows that publication alone, with no enforcement, reliably produces remediation across multiple suppliers and multiple slots (refutes F2, F5, F8).
3. Audit scores predict worker outcomes out of sample, measured by a source that does not draw on the auditor's own evidence (refutes F2, F4).
4. A disclosure vocabulary carries a route, a threshold, a per-slot progress subtraction and a standing refusal, and itself delivers consequences (refutes F7).
5. A figure re-census shows that disclosure and consequence are one condition, not a union compound (refutes F6).
6. A measured sample reports the actual frequency with a stated instrument and sampling frame (closes F9; does not refute the shape, but replaces the gap with a `grounded` frequency).

Each is a ground test. None is an appeal to agreement. If any fires, the affected finding is marked retracted in the log below with the date and the source.

---

## 5. Recommendation

1. State the residual per slot. Refuse any single "transparency score" as an aggregate that hides the live signal (F1).
2. Name the anchor before naming a tool: what consequence would have to move, and who can move it without the firm's permission (F2).
3. Describe the union compound before choosing a disclosure frame (F6, Fig 9 :27-28).
4. Treat disclosure as a filter for the budget and a witness-free input, never as the verdict (F5, Fig 9 :60).
5. Ask which link of the dependency chain the current system stops at. Most effort lands above the break (§1, Fig 3 :29).
6. Add the missing vocabulary deliberately: route, threshold, progress, refusal (F7).
7. Report the gap on "often" honestly. Do not convert a leaning of the literature into a figure verdict (F9).
8. Send the refuter and the shape claim through public institutional venues, one to one (Fig 10 :52: **"Bring a characterised residual, never the source."**).

---

## 6. Canonical usage check and retraction log

Two sources were read after the first five sections and they govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` and the eight essays (all eight opened 2026-11-22). The README says the figures *"outrank everything else in the repo... the quotes are the authority, not this summary"* and that a reading making figures contradict one another has *"misidentified its domain, not found a flaw."* It adds the limit: the framework returns *"a shape, not a name"* and stops where instruments can no longer distinguish, recording the lineage.

| earlier reading | status after canonical check |
|---|---|
| "Transparency never improves accountability" | **Retracted.** Unsupported and not figure-derived. Fig 6 :14 permits an import from a frame whose closure differs. The verdict is conditional, not absolute. |
| "Certification is always harmful" | **Narrowed.** Fig 2 :41 makes agreement about shared meaning *"efficient for a convention"*. The failure begins only when the convention decides an outcome (Fig 2 :43). Third-party certification can be useful for coordination and still be worthless as a verdict. |
| "The figures answer whether it happens often" | **Retracted.** This is a frequency question about the world. Marked `gap` in F9. The figures give a discriminator, not a base rate. |
| "Disclosure is frame-internal, therefore useless" | **Narrowed.** It is a budget filter and a head start (Fig 9 :60, Fig 4 :22). Useless as a witness, useful as a way to aim the probe. |
| Apparent strain: Fig 2 :41 (conventions efficient) vs Fig 2 :43 (convention deciding an outcome corrupt) | **Not strained after re-census.** The two lines govern different conditions: does the convention decide an outcome? No contradiction, so no re-census of domains was owed. |
| Apparent strain: Fig 1 :27 (frame-internal) vs F5 (import can supply the atom) | **Not strained.** Fig 1 disqualifies self-scoring inside a frame. Fig 6 supplies the operator that crosses frames. Different quantities. |
| Apparent strain: F7 (single-source) vs F1 (triangulated) | **Not strained.** Different claims at different levels. One source is reported as one source. No averaging. |
| Goodhart and Campbell as "outside" corroboration | **Declared overlap.** The framework article's own citation list files Goodhart 1975, Campbell 1979 and Strathern 1997 under *"Proxies, and what happens when a measure becomes a target"*, tagged *"An instance."* They corroborate Fig 2 and Fig 10 but the framework already borrowed them. Low overlap with the supply chain evidence pool, high overlap with the framework. Recorded as such, not hidden. |
| My own §3 first draft called F1 "triangulated across three independent fields" | **Retracted.** The business studies share the apparel and audit evidence pool, and the framework article already cites Goodhart. Triangulation is now claimed only between figure lines with genuinely different subject matter, with world sources listed as corroboration and their overlap stated. |

### Seven-question recursive derivation (summary)

1. **Is this one question?** No. Union of visibility and consequence (Fig 9 :55-59).
2. **Which link does disclosure reach?** Perception and vocabulary, usually not objective (Fig 3 :20-29).
3. **Can the frame score itself?** No. Its outputs are frame-internal (Fig 1 :27).
4. **What is the anchor?** Consequences that do not update on the frame (Fig 2 :29-30, Fig 10 :18-19).
5. **Can more disclosure compose the anchor?** No. Mint stays inside closure (Fig 6 :21, Fig 8 :32). Import is required (Fig 6 :14).
6. **Does the vocabulary carry the correction?** No. It names a state, not a route, goal, progress or refusal (Fig 12 :111-112).
7. **How often does it stop there?** Unknown here. `gap`, F9. One measurement study would close it.

### Updated verdict

The shape survives at `general` and `specified` mode: disclosure is a per-slot, frame-internal signal; accountability needs an anchor from a different closure; the two form a union compound; disclosure can be a filter and a head start but not a witness. Strains after re-census: **none hidden**, one declared overlap (Goodhart/Campbell borrowed by the framework itself), and one declared gap (frequency). Nothing in this audit is labelled `grounded`.
