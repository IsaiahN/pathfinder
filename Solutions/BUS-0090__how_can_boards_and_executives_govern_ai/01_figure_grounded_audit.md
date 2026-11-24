# Figure-grounded audit: how boards and executives can govern AI risk

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19, opened 2026-11-22) says LLM output is an approximate simulation and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Canonical local files: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md` and `THE_SEAT_MAP_Field_Guide_amended.md`. World sources opened 2026-11-22 and listed in `10_source_ledger.csv`. Every figure quote below was checked character by character against `03-FIGURES_TEXT.md` and is cited as `Fig N :line`.

---

## 0. The residual, stated in effect terms

The question asks for a governance arrangement that does three things at once. Stated as an effect, with the per-slot residual of Fig 1:

> R_s = |Γ(b, a) - o′| at deployment slot s, where Γ is management's governance model (its controls, assurance reports, risk scores and checklists), b is what the board believes before it acts, a is the decision to permit, slow, change or refuse an experiment, and o′ is what the ground actually returns (real outcomes, real incidents, affected people, a market, a regulator).

Three constraints sit on the same R, and they are not the same quantity:

1. **Govern the risks.** Keep R_s from growing at the slots where harm can occur.
2. **Do not slow useful experimentation.** Keep the reach growing, meaning keep importing atoms from frames whose closure differs (Fig 6 :23), because useful experiments are imports and not re-arrangements of the same atoms.
3. **Do not rely on technical checklists alone.** The checklist is produced by the same frame it is supposed to grade, so it is a frame-internal quantity and cannot score that frame (Fig 1 :24-27, Fig 5 :33, Fig 9 :60).

What an answer would look like, bound as an ordinary term before the run (Formula step "Direction"): *an arrangement that keeps a non-updating anchor reachable at each slot, keeps the reach renewed through imports with provenance, and keeps a seat able to refuse a held claim, while it declares which of its own readings are filters rather than witnesses.* That shape is written down here so it can accrue a residual and be refused by the same test as anything else. This is the pre-registered prediction of §3.

The question is not a single dial with an optimum between "safety" and "speed". Fig 9 :4-5: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." The board question splits before it is searched.

---

## 1. Domain census (before any figure line is chosen)

R by arity, symmetry and scale:

- **Arity:** a three-place relation per slot (governance model Γ, decision a, ground return o′), indexed by deployment s. It carries a comparison bond, since "risk" is a threshold relative to a tolerance (Fig 12 :87), and an ordered bond, since a refusal before a mint is not the same as a mint before a refusal.
- **Symmetry:** "risk" and "safe" are not symmetric readings of one quantity. The comparison is ⋛-like (a threshold relation between two quantities), and the refusal is ¬, a unary operator that joins nothing (Operators table amendment).
- **Scale:** one deployment loop, a portfolio of deployments, and the board-to-floor channel between them. The transform between scales is lossy (Fig 4 :27-30).

One line per domain, with actors, currency and anchor. A candidate with no nameable anchor is not admitted as a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1 Governance frame** | directors, committees, management reports, risk appetite, controls | assurance, votes, approvals, compliance attestations | the ground, *when* it does not move when management reports success (Fig 2 :29, :33-34) | admitted |
| **D2 Experimentation frame** | builders, models, data, experiments, red teams, deployments | residual reduction, new settled terms, reach | deployment outcomes, the ground for the build loop | admitted |
| **D3 Habitat of a deployment** | users, affected people, vendors, third parties, regulators, supply chain, data sources | contact and cascade, actors and conditions and relations | the ground, which settles harm | admitted |
| **D4 Oversight seat** | board as ground maintainer, internal audit, external audit, independent frame | independence, proximity to ground, ability to refuse | the ground, never agreement (Fig 7 :35) | admitted |
| X1 "enterprise AI risk score" | one aggregated number | reported comfort | none that does not move when pushed | **not a domain**, absorbed into D1 as a pooled reading (Fig 10 :26) |
| X2 "more AI expertise on the board" | the technically literate director | knowledge | dissolved by re-census into D4's independence plus the instrument question | absorbed |

**Union, not partition.** D1 and D4 form the verification compound; D2 and D3 form the experimentation-and-habitat compound. The two overlap: the board books the next room (Fig 7 :42) and the habitat supplies the ground that the room is selected against. So this is a union of overlapping conditions, not a list of separate ones (Fig 9 :54-57). A single lever, for example adding another approval gate, clears the region where only one condition holds and leaves the intersections standing. Verdicts are kept per domain and never averaged.

**Order by dependency (Fig 3).** 1 perception (what is actually deployed), 2 vocabulary (terms for what a deployment affords), 3 objective (what would count as progress or safety here, in the board's own terms), 4 planning (which experiments to book next), 5 learn and carry (name what worked, verify it, carry it). The chain is ordered by dependency, not importance: "Optimising a link that already works cannot rescue one that does not" (Fig 3 :19). The likely break is between 2 and 3, where a board has model metrics (perception) but no instrument for the objective (Fig 3 :24-27).

**Strain test applied during the census.** A first pass tried to map the six-term substrate of Fig 13 directly onto governance functions. That strains: the six are the minimum substrate for any composed system, not a governance checklist. Re-census assigns Fig 13 to the grammar of composition (a structure must sit between two states) and leaves governance functions as bindings onto held atoms. The strain is named, not smoothed (see §7, S1).

---

## 2. Figure census

| figure | bearing on this residual | verdict |
|---|---|---|
| **1 The Agent** | residual indexed per slot; frame-internal quantities disqualified | decisive against one averaged risk score and self-scored controls |
| **2 The Ground** | anchor must not update; independence; triangulation not negotiation | decisive for the board's reference and against circular governance |
| **3 Dependency Chain** | a link with no instrument is a link nobody has looked at | the objective link, not model accuracy, is the likely break |
| **4 The Membrane** | methods cross up, head starts down, lossy round trip | a board receives a method and a head start, never a recording of one deployment |
| **5 Mint Pipeline** | three guards are a product not a checklist; fifth kind is refutation | checklists cannot be the verdict; the refusal is owed |
| **6 Closure / Reachability** | import is the only operator that moves the wall | useful experimentation is the import channel; freezing it cuts reach |
| **7 Room Chain** | selection between rooms is where the ground votes | independent differing rooms, not a chain of agreeing reports |
| **8 Union Surplus** | surplus lives only where closures differ; provenance | external audit and incident data are surplus only if independent |
| **9 Leave / Arrive** | filters for budget, witnesses for verdict; union unbundling | threshold scores are filters; the question is a union |
| **10 Ground Maintainer** | keep anchor reachable; verifier cannot reconstruct; arrange for refusal | the structural role of the board, and the live literacy tension |
| **11 The Habitat** | enumerated not composed; contact cascades; standing lists fail | enumerate the deployment habitat to second order |
| **12 The Bond** | arrangement carries information atoms do not; isomers; two currencies | two governance modes over the same atoms are isomers |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict | the specific checklist is a `gap`, not an invention |
| **Operators table** | negation refuses a claim; a vocabulary without it can only accumulate | governance needs a "no", not an accumulating list of controls |
| **Symbols table** | R is the aim and always a slice; the ground is the anchor | R_s is indexed per deployment, never a global comfort score |

---

## 3. Findings

### F1 - One enterprise AI risk score is the named aggregation failure (decisive against a single dial)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

A board that governs "AI risk" as one aggregated number has thrown away the only signal that says where to look. One live deployment with positive residual is invisible in a portfolio average that is near zero. Fig 1 :13 names that state legal: "a global R near zero with one live slot residual is a legal state." The correct object is R_s per deployment, per decision, per affected group.

This is not a call for more dashboards. It is a constraint on the unit of governance. Mode `specified` for boards, `general` for the indexing rule. **Refuter:** show a board that keeps a live, ground-paid per-slot signal after all deployment residuals are collapsed into one enterprise score, with no second instrument. Triangulated across Fig 1 and Fig 12 :5 ("A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording"): an average records the ingredients and loses the arrangement.

### F2 - Checklists are frame-internal and cannot score the frame (decisive against "checklists alone")

Fig 1 :25-27: "coverage, and compression achieved" and "predicates minted, and credibility accrued" and "They are frame-internal. A frame cannot score itself with a quantity it also produces."
Fig 5 :33: "The three guards are a product, not a checklist."
Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

A control count, a policy coverage percentage, a model card completed, an impact assessment filed: each is produced by the frame it is meant to grade. That is exactly the disqualified quantity. The figures do not say checklists are useless. They say a checklist is a filter for the budget, never a witness for the verdict. It decides where to spend attention; it cannot decide whether the deployment is safe. NIST's own AI RMF agrees in the world: "Actions do not constitute a checklist, nor are they necessarily an ordered set of steps" (NIST AI RMF Core, opened 2026-11-22). That is corroboration from the field, not a figure line.

Fig 5 :41 sharpens it: "Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting." A team returning a clean checklist may have nothing wrong with its checklist. Mode `specified`. **Refuter:** produce a control score that predicts ground outcomes at low overlap with the team that produced and reported it, with a non-updating anchor. Without that, the score carries zero verdict weight (Fig 2 :40).

### F3 - The reference must not update on management's own report (decisive for board oversight)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :30: "If it moves when you push on it, it is not an anchor."
Fig 2 :33: "The anchor must not update."
Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

If the standard used to judge an AI deployment is set by the team deploying it, and moves when that team reports success, the board's reference has become another frame. Everything can then drift together coherently, which is precisely why nobody notices. NACD's board guidance names the same collapse in the field: "reporting on AI must avoid a 'circular governance' scenario where the oversight terms are dictated by oversight subjects" (NACD, opened 2026-11-22). The world mechanism for coherent drift is documented: NASA's O-ring problem was repeatedly reinterpreted as acceptable, "an incremental descent into poor judgment" (Vaughan, 1997, via search), because insiders judged the anomaly against a baseline that their own successful launches kept moving. The IChemE review of Challenger adds: "If key decision makers cannot see the baseline (or if the baseline is wrong) they cannot easily spot significant deviations from it, especially when these are incremental."

The counter is not a board that is difficult. It is a reference that does not update: incidents, harmed people, a market, a regulator, a measurement, an external audit drawing on a different evidence pool. Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Mode `specified`. **Refuter:** show a governance arrangement where the reference used to judge AI safety does not move when the audited team reports success and still resolves a live harm. Triangulated across Fig 2 and the NACD and Challenger sources (low overlap between a board-practice source, a safety-science source and the figures).

### F4 - The board is a blind verifier, not a better model reader (with a live tension)

Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."
Fig 10 :50: "Looking inside the frame it grades is how the seat stops being outside."
Fig 10 :51: "A seat that reads that interior acquires the frame's model, and thereafter grades reports against its own picture rather than against the ground."
Fig 10 :52: "Bring a characterised residual, never the source."

A board is in the ground-maintainer seat. Fig 10 :24: "the ground does not decay, the channel does." Its office is to keep the channel reachable, not to rebuild the model. Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." The board wants the company to succeed; it must not want a particular answer from the ground. Fig 10 :60: "Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged."

World corroboration is unusually strong and low overlap. Bainbridge (1983, *Ironies of Automation*, Automatica 19(6)): "There is therefore no way in which the human operator can check in real-time that the computer is following its rules correctly" and "The human monitor has been given an impossible task." The board is asked to monitor a system it cannot, by construction, reconstruct. Kourabas and Tsang (2025) describe "diminished human vigilance, amplified by cognitive-miser behaviour and automation bias" and argue for the "right human in the loop" with external audits complementing internal governance.

**Live tension, named.** Practitioner guidance tells boards to build AI fluency and technical competency (NACD, INSEAD, EY). Fig 10 :50-51 says looking inside the frame is how the seat stops being outside. Both cannot be the same quantity. **Re-census (S2):** technical literacy is a *head start* for asking good questions (Fig 4 :22: "Only methods cross up. Only head starts come down"), not a standing to grade the model. What the board needs from management is the characterised residual, the failure condition and the provenance of the reading, not the interiors. The seat's independence is spent when it acquires the frame's model, so the deeper the board goes into the model, the less its later agreement is worth. Mode `specified`. **Refuter:** show a verifier that reconstructs the model and still catches ground errors at the same rate as one that does not, with independence measured separately. Triangulated across Fig 10 and Bainbridge (different fields, low overlap).

### F5 - A standard that decides an outcome has stopped being a standard; what is owed is a refusal

Fig 10 :47: "a convention that decides an outcome has stopped being one."
Fig 10 :49: "Declaring a meaning does not ground it."
Fig 10 :82: "Three panels, one move: arrange for refusal."
Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so"
Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate"

An approval gate that mechanically releases any deployment whose checklist is green is a convention that has decided an outcome. It has become "a constant the seat authored, carrying the seat's authority" (Fig 10 :48). The figures do not ban gates; they require the gate to be a *refusal* (¬), which is a term that says a held claim is false, not a sum of points. A governance system with only "+", with only accumulation of controls and attestations, "can only accumulate. It can be corrected and cannot carry the correction" (Fig 12 amendment on ¬).

This is the structural answer to "checklists alone." The board's distinctive power is the ability to say no to a claim management holds, with provenance, and to keep that refusal in the record so the reach falls safely when the claim is wrong (Fig 6 :41-43). Mode `general` for the operator requirement, `specified` for boards. **Refuter:** show a governance system that can only add controls, cannot refuse any held claim, and still catches a novel failure that no accumulated control anticipated.

### F6 - Experimentation is the import channel, so slowing it cuts reach

Fig 6 :21: "MINT composes inside the closure and can never add an atom."
Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 6 :24: "Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."
Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."
Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."

Useful experimentation is not re-running the same benchmark at a larger scale. It is contact with a frame whose closure differs: a new deployment context, an independent red team, an incident from outside, an affected community, a regulator, another domain's failure data. That contact is the only operator that moves the wall. Governance that freezes all experiments does not make the system safer in the figure's sense; it stops the wall moving, so reach stops growing, and the board is left governing a shrinking set of arrangements inside a fixed closure (Fig 13 :116-118: "infinite effort inside a finite reach").

Fig 7 :35 supplies the steering mechanism: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." And Fig 7 :42: "the next room you book is the direction you travel, and booking a room like the last one is how a chain stops travelling at all." Governance steers by choosing which differing rooms to book next and by matching each room to the residual the last one surfaced. It does not need to approve every experiment serially. That is why this shape does not necessarily slow useful experimentation: it changes what is governed, from *permission for each run* to *the schedule of independent rooms and the reachability of the ground*.

Imports still need a source gate and a shadow test (Fig 6 :12-13, Fig 8 :52), and "Import from a live peer is debited against that frame's independence" (Fig 6 :24). An external auditor who reuses management's own metrics is one frame wearing two names (Fig 8 :48). Mode `specified`. **Refuter:** show a firm whose reach grows with new ground-verified atoms while all external experiments are blocked and only internal re-arrangement occurs. Triangulated across Fig 6, Fig 7, Fig 8 and Fig 13.

### F7 - The habitat must be enumerated to second order; standing lists fail

Fig 11 :43: "The habitat is enumerated, never composed."
Fig 11 :51: "No standing list of good actors survives a change of residual."
Fig 11 :52: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."
Fig 11 :61: "The seat's power is asymmetric. Introduction is available; exclusion is not."

The unit of AI governance is not the model. It is the deployment habitat: everything in contact with the residual, then what is in contact with those, outward until the cascade stops mattering. Actors include users, affected people, vendors, data sources, third parties and regulators; conditions include the deployment context; relations include dependency and influence. Harm is frequently two or three steps out, which is why a first-order checklist misses it. Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." A vendor, a feature or a control that is a benefactor for one deployment can be a malfactor for another, so no standing list of approved actors or controls survives a change of residual.

The board's power is asymmetric: it can introduce an actor (an independent audit, an affected-community channel, an incident feed) and cannot subtract the habitat, because contact is a fact about the world. Fig 11 :61: "Introduction is available; exclusion is not." Mode `specified`. **Refuter:** show an invariant control and actor list whose measured adequacy does not change across a documented change of residual and deployment habitat. Triangulated across Fig 11 and the AI Incident Database (ground records of second-order harm, low overlap with the framework).

### F8 - A benchmark is a substituted habitat, not a capability

Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."
Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
Fig 11 :67-69: "what you failed to reproduce" and "what you unintentionally introduced."

A clean evaluation suite, a red-team report run in a sandbox and a model card all substitute a habitat. They inherit actors you did not choose, and they lose the actors you failed to reproduce. Two silent failures follow: what you failed to reproduce is invisible until the goal fails, and what you unintentionally introduced is invisible until it acts. The board cannot treat a passed benchmark as ground payment. Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

This does not abolish testing. It re-prices it: a test is a head start for the next search (Fig 4 :22-24), not a recording of one success carried upward as knowledge (Fig 4 :25). Mode `specified`. **Refuter:** show a synthetic evaluation pass that transfers to deployment ground with no increment in contact, with the anchor measured separately. Triangulated across Fig 11 and Fig 4.

### F9 - The channel decays, not the ground

Fig 10 :24: "the ground does not decay, the channel does."
Fig 10 :26: "stale percepts, dropped transients, saturated metrics, pooled readings"
Fig 10 :28: "you have lost touch"
Fig 10 :29: "keep the anchor reachable"

Board reporting goes stale; metrics saturate; readings are pooled into an average; transients (the early warnings) are dropped. The harm does not stop because the report stopped showing it. Fig 10 :27-28 names the output of that state: "the output is not a verdict, it is / you have lost touch." The board's standing job is to keep the channel to the anchor reachable. The Caremark reporting-system duty is the world's institutional version: a board breaches its duty when it "failed to implement a corporate information and reporting system, or failed to adequately monitor or oversee management, thereby preventing the Board from being informed of risks or problems requiring their attention" (Giunta and Suvanto, Harvard Law School Forum on Corporate Governance, 2024). The Boeing Caremark claim is the sharper case: the board "overly relied on regulatory compliance and did not demand regular safety reporting from senior management."

Fig 10 :93: "A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified." An internal safety function whose standing depends on the deployment being approved is not a ground. Mode `specified`. **Refuter:** show a harm rate that falls while channel fidelity (freshness, unsaturation, unpooled slot-level readings) declines monotonically. Triangulated across Fig 10 and the corporate-law sources (low overlap).

### F10 - The specific checklist, committee and thresholds are a declared gap

No figure line returns the checklist items, the committee structure, the reporting cadence or the numerical risk appetite. Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence." Fig 8 :39: "So a search that finds nothing is never a proof of absence." The figures fix the shape (per-slot residual, non-updating anchor, renewed reach, a refusal seat, an enumerated habitat) and stop. Naming a particular framework as *the* governance answer would turn a visible choice into an invisible one, the same error *They're Scanning Books* names when it says a minimum viable set is "a human's careful guess at reality's compression axes."

This is `gap` of the shape-not-a-name kind, not underivable in principle and not an invitation to invent a number. A source-discriminating instrument, characterized in effect terms, is owed. Mode `general` for the limit. **Refuter:** produce a figure line that selects a specific threshold or committee; until then the gap stands.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach (Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device."). The shape claim is refuted if any of the following holds:

1. **Aggregation.** A board keeps a live, ground-paid per-slot signal after all deployment residuals are collapsed into one enterprise score, with no second instrument (breaks Fig 1 :19, :22).
2. **Self-scored controls.** A control or checklist score predicts ground outcomes at low overlap with the team that produced and reported it, against a non-updating anchor (breaks Fig 1 :24-27, Fig 9 :60).
3. **Updating anchor.** A governance arrangement whose reference does not move when the audited team reports success still resolves a live harm (breaks Fig 2 :33-34).
4. **Reconstructing verifier.** A verifier that reconstructs the model catches ground errors at the same rate as one that does not, with independence measured separately (breaks Fig 10 :42, :50-51).
5. **Accumulation only.** A governance system that can only add controls, cannot refuse any held claim, still catches a novel failure no accumulated control anticipated (breaks Fig 10 :82 and Operators :58).
6. **Frozen reach.** A firm's reach grows with new ground-verified atoms while all external experiments are blocked and only internal re-arrangement occurs (breaks Fig 6 :23, Fig 8 :32).
7. **Invariant valence.** A control and actor list whose measured adequacy does not change across a documented change of residual and habitat (breaks Fig 11 :51).
8. **Synthetic transfer.** A synthetic evaluation pass transfers to deployment ground with no increment in contact (breaks Fig 11 :70).

If any fires, the corresponding finding is withdrawn and the shape is re-censused. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. **Govern per slot.** Replace the enterprise AI risk number with R_s indexed by deployment, decision and affected group; keep an explicit signal for the one live slot (F1).
2. **Keep the reference unmoved.** Name the anchor per slot (incident, harm, measurement, market, regulator, external audit) and forbid it from updating on the audited team's own report. Publish the provenance of each reading (F3, F9).
3. **Treat checklists as budgets.** A control score decides where attention is spent. It never decides whether to proceed. The proceed/refuse decision is a negation with provenance, not a sum of points (F2, F5).
4. **Arrange for refusal.** Give the oversight seat a "no" that can fire against a term management holds, written before the run, and keep the refusal in the record so the reach falls safely (F5, §4).
5. **Steer by rooms, not by serial approval.** Book the next independent room against the residual the last one surfaced; require low overlap with the builder's evidence pool; import with source gate and shadow test (F6).
6. **Enumerate the habitat.** List actors, conditions and relations per deployment to second order; announce that standing lists expire with the residual; use introduction, never subtraction (F7).
7. **Price tests correctly.** A benchmark is a head start, never a ground payment; pair every synthetic pass with one contact-changing deployment reading (F8).
8. **Declare the stake and the gap.** The board's interest in the outcome is unavoidable; its interest in the reading is disqualifying (Fig 10 :59-60). The checklist items, committee and thresholds are `gap`, not hidden answers (F10).

---

## 6. WATSON step 7: SEARCHED, INWARD, OUTWARD (kept distinct)

When no single line closed the residual, the three questions were run in order (Formula step 7). They are not interchangeable.

- **SEARCHED, asked first (cheapest).** Is the specific governance answer already in the closure, merely unfound? A search across the figures and the opened practitioner sources did not find a line that selects a committee or threshold. But absence here does not decide underivability: "a search that finds nothing is never a proof of absence" (Fig 8 :39). Status: searched at this budget, not exhausted in principle.
- **INWARD.** Sharpen in our own terms using an instrument already returning something. The board's own incident feed, audit findings and slideroom reports already return weak readings; the move is to stop pooling them (Fig 10 :26) and to read them per slot. This can improve the objective link without importing a new frame. It fails by refining forever on an axis that cannot carry the residual.
- **OUTWARD.** Import. Characterize what is missing in effect terms: a source-discriminating instrument that separates "the control score is high" from "the ground did not pay" and that does not update on the audited team. Cast the description in effect terms before choosing a frame (Fig 9 :27-28), then look at safety science (normalization of deviance), human factors (impossible monitoring) and cybernetics (requisite variety), each with a source gate and a shadow test. INWARD and OUTWARD were run as two tracks and never read against each other.

---

## 7. Canonical usage check and retraction log

### Canonical sources read after the first pass

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." And the governing limit: a reading that makes one figure contradict another "has misidentified its domain, not found a flaw." The framework returns "what a missing thing would have to look like (a shape, not a name)" and stops at "the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat does not escalate a design question to the anchor. So the board-governance design here is decided by derivation, not by asking a governance authority to rule on it. The world sources are corroboration, never the decision.
- `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`: :163 "High correlation is disqualifying for a verdict and efficient for a convention"; :171 "an interest in the reading is disqualifying"; :283 "A room does not upgrade the label"; :287 "a falsifier written before the run is a design instrument, not only an honesty device."

### Strains and re-census

| id | strain | status after re-census |
|---|---|---|
| S1 | Fig 13's six-term physical substrate mapped directly onto governance functions | **Retracted and preserved.** Re-census assigns Fig 13 to the grammar of composition; governance functions are bindings onto held atoms, not new members of the six. The re-census rule in the figures README governs. |
| S2 | Practitioner demand for board AI fluency vs Fig 10 :50-51 (the verifier must not acquire the frame's model) | **Live but narrowed.** Literacy is a head start for questions (Fig 4 :22), not standing to grade the model. Kept visible in F4 and in `08`. |
| S3 | NIST and NACD present the framework as a set of actions/structures that looks like a checklist | **Not strained.** Their own text refuses the checklist reading ("Actions do not constitute a checklist"; "circular governance"). World corroboration, not a figure conflict. |
| S4 | A deployment gate looks like a convention, but a convention that decides an outcome has stopped being one (Fig 10 :47) | **Dissolved by re-census.** The legitimate gate is a refusal (¬), not a weighted convention. Operators :58 governs a different quantity than a scoring rubric. |
| S5 | Fig 11 :51 (no standing list of good actors) vs the need for a minimum control baseline | **Not strained.** Standing lists fail across residual changes; a per-slot baseline that expires with the residual is a binding, not a standing list. |
| S6 | "Not slowing experimentation" vs the need to refuse experiments | **Dissolved by re-census.** Governance steers the schedule of independent rooms (Fig 7 :42); it does not serially approve every run. Slowing is a symptom of applying a convention where a refusal is owed. |

**After re-census: one live strain (S2), named and not hidden.**

### Corrections to my own reading, kept visible

1. **First pass called checklists "forbidden."** Corrected in F2. The figures disqualify self-scored frame-internal quantities and make checklists filters for the budget. They do not ban checklists. The word "alone" in the question is doing exactly the work Fig 9 :60 describes.
2. **First pass treated board technical literacy as the fix for the verifier problem.** Corrected in F4 and S2. Fig 10 :50-51 makes deeper literacy a cost to independence past the point of asking questions. The correct ask is the characterised residual, not the source.
3. **First pass read Fig 13 as forbidding governance composition.** Retracted in S1. Fig 13 is the cross-kind grammar, not a governance menu.

### Confirmations after the canonical check

- F10 (the specific checklist is a gap) is **canonically confirmed** by the README's "a shape, not a name" and Fig 13 :134.
- F3 (the reference must not update) is **canonically confirmed** by Fig 2 :33-34 and the metalaws note that the seat reads the ground rather than asking the anchor to decide.
- F5 (arrange for refusal) is **canonically confirmed** by Fig 10 :82 and the Operators table's unary negation.
- F6 (import needed for reach) is **canonically confirmed** by Fig 6 :23, Fig 8 :32 and Fig 13 :115.

### Updated verdict

The shape survives. A board governs AI risk by keeping per-slot contact with a ground that does not update, by renewing reach through imports with provenance, and by holding a seat able to refuse; checklists and scores are filters for the budget, not witnesses for the verdict, and the objective link, not model accuracy, is the place where the chain most often breaks. What does not survive is any claim to name the checklist, the committee or the threshold. The one live strain is board literacy versus verifier independence (S2). No world source conflicts with the figure verdict; where a source seemed to, it was returned to the census and re-mapped (S3, S5). All figure lines used in this folder were checked verbatim against `03-FIGURES_TEXT.md`.
