# Figure-grounded audit: why employees stay in some places and leave others

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, Adventures in Machine Learning, 2026-11-19, opened 2026-11-22) says LLM output can simulate an approximate answer, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on and it cannot explain why any particular employee stayed or left. See `05_what_shape_means.md` section 6.

**Sources.** The verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `THE_FORMULA.md`, the canonical `FIGURES_README_canonical.md`, the exemplar solution QMGR-0037, the validated BUS-0001 pilot, and the public sources in `10_source_ledger.csv`. All figure quotes below are taken from the verbatim text file, not from a summary.

---

## 0. The residual, stated in effect terms

Let `s` be one employee-slot. Let `b` be that employee's belief about the employment relation, formed from private history and inherited priors mixed by `w` (Symbols table :18-25). Let `a` be the action: stay, leave, or the reduced-participation state the literature calls withdrawal or quiet quitting. Let `o'` be what actually happened: the reveal of the stay/leave event and its date. Then

```
R_s = | Γ(b,a) − o' |
```

The puzzle is that the pay input to `Γ(b,a)` does not predict `o'` consistently across slots. In some slots `o' = stay` while the "poor conditions" input predicts leave. In others `o' = leave` while the "attractive pay" input predicts stay. So the quantity that `o'` ranges against is not pay considered alone. The residual is the per-slot gap between the pay-prediction and the observed decision.

Three consequences follow before any figure line is chosen.

1. **The residual is indexed per employee and never averaged.** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* A company turnover rate is how the live signal disappears. "Why do employees remain" must be asked of one slot at a time.
2. **The anchor is revealed behaviour, not a stated reason.** Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The quit is the observation. An exit interview answer is a report from inside the frame that produced the decision, so it is frame-internal, not the ground (Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*).
3. **A global R near zero with one live slot is a legal state.** Fig 1 :13 *"a global R near zero with one live slot residual is a legal state"*. An organization that looks healthy in aggregate can contain one slot with a large live residual. This is why the two halves of the question cannot be answered with an average.

**What an answer would look like, written down before the run (Formula, "Direction"):** a shape stating that the decision is settled by a typed bond between employee and habitat, by the reach of the employee's frame through contact with a differing frame, and by the state of the channel carrying current conditions. Pay is one atom among others with valence relative to the residual. If this shape is wrong, a refuter in section 3 should fire.

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry and scale

- **Arity.** A relation between an employee, an organizational habitat, and an outside frame, ordered in time. The decision is an action (a bet). The employee-organization tie is a typed relation, not a quantity (Fig 12 :46 *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."*).
- **Symmetry.** Stay versus leave is a threshold comparison, not a symmetric join: the Operators table defines `⋛` as *"a threshold relation between two quantities"* (Operators table :49). The bond types are not interchangeable, so two molecules with the same atoms can be different substances.
- **Scale.** The individual loop (one employee), the habitat (dyad, team, community), the population (labor market), and the career channel over decades. The membrane between scales is lossy (Fig 4 :27 *"The transform between scales loses information, and that is the point."*).

### One line per domain (actors / currency / anchor)

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1 Employee decision loop** | employee, belief `b`, library Γ, the bet (stay / leave / withdraw) | residual reduction, `R = |Γ(b,a) − o'|` | the revealed stay or leave event and its date, a counter | admitted |
| **D2 Organizational habitat** | manager, peers, team, policies, pay, community ties | contact, links, fit, sacrifice, influence travel | the job and community that can be enumerated, priced by a market | admitted |
| **D3 Outside or alternative frame** | other employers, outside offers, family, outside options | offers, alternatives, comparison | the market, named as an anchor in Fig 2 :29 | admitted |
| **D4 Temporal channel** | HR records, metrics, percepts, shocks, memory of past conditions | contact over time, round trip gap R_T | the ground, which does not decay (Fig 10 :24) | admitted |
| **X1 "Pay as a free-floating cause"** | pay alone | money | none nameable apart from D2 and D3 | **not a domain yet**, absorbed into D2 (a habitat actor) and D3 (the outside offer) |
| **X2 "Loyalty or talent as a property of the person"** | the employee | disposition | none nameable apart from D1 | **not a domain yet**, absorbed into D1 as Γ and `w` |
| **X3 "Culture" as a free-floating entity** | culture | climate | none nameable apart from D2 | **not a domain yet**, absorbed into D2 |

The X rows matter. The question's own framing promotes pay to a cause with an anchor it does not have. The framework's anchor test forbids that until a domain can be named. Fig 11 :48 *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."*

### Partition or union

**Union, not partition.** Fig 9 :55 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57 *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* "Stay despite poor conditions" and "leave despite attractive pay" are not two domains and not two versions of one puzzle. They are two surface readings of one union compound that must be unbundled before it is searched. Staying in a poor job is a union of bonds (links, fit, sacrifice, obligation, few alternatives). Leaving a well-paid job is often one condition failing (a shock, an imported outside frame, a flipped valence), not a stronger dose of the same condition. A single lever clears the region where only one condition holds and leaves the intersections standing.

### Order by dependency (Fig 3)

Fig 3 :20 *"The chain is ordered by dependency, not by importance."* Perception, then vocabulary, then objective, then planning, then learn and carry (Fig 3 :4-15). Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The middle link here is having terms for what the employment situation affords. Fig 12 :115 *"What can be said is that having terms for what a situation affords was taken for a dictionary and it is a grammar."* Pay is a dictionary term. The bond set is the grammar. Optimising pay cannot rescue a missing grammar (Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."*).

**Strain test applied before findings:** X1 initially looked like a domain because pay is measurable. Re-census: measurability is not an anchor. Pay has no anchor independent of the job that pays it and the market that prices it, so it is an actor inside D2 and D3. No strain remains after the re-census. This matches the canonical rule that a reading which makes figures contradict one another has misidentified its domain.

---

## 2. Findings F1 to F9

### F1 : Retention is a property of employee-and-habitat, not of pay or of the person (decisive for both halves)

Fig 11 :39 *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."*

Fig 11 :40 *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

Fig 11 :49 *"An actor's valence is relative to the residual, not a property it carries."*

Fig 11 :50 *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."*

Fig 11 :51 *"No standing list of good actors survives a change of residual."*

Read literally: "attractive pay" is an actor whose valence is relative to `R_s`, not a fixed good. Raising pay in isolation is an improvement that does not change contact, so by Fig 11 :40 it changes nothing in the decision where the missing thing is a bond or an outside frame. The same pay is a benefactor to a slot whose Γ is closed around a Pay atom and inert or harmful to a slot whose Γ has been contacted by a different frame. This is why the question's premise ("attractive pay" should retain) fails in one domain and holds in another without any contradiction. Mode `specified`.

**Refuter:** a within-person longitudinal record in which the stay/leave event and tenure are invariant to changes in habitat contact (links, alternatives, shocks, channel updates) while pay varies systematically, with the residual not trending down. If that holds, retention is an agent-only property and Fig 11 :39-40 is not governing this domain.

### F2 : More pay is search inside a closed frame; it cannot manufacture retention when the missing atom is absent

Fig 8 :32 *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."*

Fig 6 :21 *"MINT composes inside the closure and can never add an atom."*

Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

Fig 13 :115 *"The set is closed. The arrangements are not. That gap is why import exists."*

The "leave despite attractive pay" half is the signature of a budget spent searching inside the wrong closure. If the employee's Γ lacks the term that would settle the decision (a tie, a future, a comparison against an alternative), then increasing an atom already in Γ is more search at the same wall. What moves the wall is contact with a frame whose closure differs: an outside offer, a new team, a shock. Mode `general` for idempotence, `specified` for the employee application.

**Refuter:** a case where increasing an atom already in Γ, with no contact with any differing frame, repeatedly reverses the observed quit at the ground and the residual trends down. That would mean the atom was in the closure and merely unfound, which is a SEARCHED case (Formula step 7), not an import case.

### F3 : The two puzzles are a union compound and must be unbundled, not averaged

Fig 9 :55 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*

Fig 9 :57 *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*

Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

A company-wide engagement score is a filter for the budget. It is not a witness for the verdict. It can tell you where to look but it cannot tell you why one slot stayed. A union compound needs its own loop and its own ground. Mode `general`.

**Refuter:** one intervention that restores both union conditions with no categorically different residue, measured per slot at the ground. If a single pay change reliably cleared both the stay-in-poor-conditions and leave-despite-pay cases with no leftover compound, the union reading would be wrong.

### F4 : The bond is the substance; commitment components are different bonds over the same atoms

Fig 12 :5 *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

Fig 12 :94 *"The arrangement is the substance."*

Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Fig 12 :124 *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

Fig 12 :99 *"A bond costs what it could have been, and nothing more."*

Two employees with the same atom set (pay, tenure, conditions, peers, alternatives) but different bonds (want to / ought to / have to) are different substances. The three-component commitment model is exactly a typed-bond distinction, not three amounts of one stuff. The figure gives the bond distinction; mapping it onto affect, norm and continuance is a binding from the psychology frame (source gate and shadow test owed, Fig 8 :50). Mode `general` for the bond rule, `specified` for the binding.

**Refuter:** a ground measurement in which two employees with identical atom sets and identical bond types still diverge in the observed decision with no unmeasured atom; or a finding that the three components collapse to a single factor with no incremental prediction of the observed quit. Either would break the typed-bond claim.

### F5 : The channel decays, not the ground; decisions can run on stale or pooled readings

Fig 10 :24 *"the ground does not decay, the channel does"*

Fig 10 :26 *"saturated metrics, pooled readings"*

Fig 10 :52 *"Bring a characterised residual, never the source."*

Fig 10 :42 *"A verifier that can reconstruct the claim cannot verify it."*

"Poor conditions" and "attractive pay" are readings at an instant. The decision is often made against a prior reading, a memory of a team, or a pooled company metric. The grebe study opened this session (Kloskowski 2021) is a low-overlap instance: birds prospecting a year ahead and relying on previous-year information were trapped when the habitat quality changed, so *"their settlement decisions, based on the win-stay/lose-switch rule and prospecting a year in advance, were inappropriate in conditions of year-to-year habitat fluctuations."* An exit interview is a report generated inside the frame under audit, so asking a leaver why they left is not a ground reading. Mode `specified`.

**Refuter:** a case where an updated, unpooled reading of current conditions, with no change in history or ties, flips the decision at the ground. If decisions tracked only current readings, the channel-decay claim would not govern this domain.

### F6 : Leaving is habitat substitution, not absence of habitat

Fig 11 :32 *"introduce, never subtract"*

Fig 11 :66 *"Isolation is not removal of the habitat. It is substitution of one habitat for another."*

Fig 11 :67 *"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."*

Fig 11 :68-69 *"what you failed to reproduce is invisible until the goal fails"* and *"what you unintentionally introduced is invisible until it acts"*

Taking the better-paid job is not exiting a habitat. It is substituting one. The mover inherits a new manager, new peers and a new community that were not chosen, and what the new habitat failed to reproduce becomes visible only when the goal fails. This is the hidden cost behind "leave despite attractive pay," and it is a different quantity from pay level. Mode `specified`.

**Refuter:** a habitat substitution that reproduces everything the goal required with no inherited unchosen actors, measured at the ground. If such a move existed repeatedly, the substitution law would be wrong for this domain.

### F7 : The framework returns a shape, not a name; specific drivers are bindings, not derivations

Fig 9 :32 *"you get a kind of thing, never the answer itself"*

Fig 13 :134 *"Unreachable is a verdict here, not a silence"*

Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*

The canonical figures README (opened 2026-11-22) says the framework returns *"what a missing thing would have to look like (a shape, not a name)."* The shape here is: retention is a typed bond in a habitat, with a maintained channel and a renewable reach, and pay is one atom among others. Naming affective commitment, job embeddedness, fairness or any other specific driver as *the* cause is an import from the psychology frame, not an output of the derivation. It carries zero evidentiary weight until a source gate and shadow test are shown (Fig 8 :50 *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*). Mode `general`.

**Refuter:** a derivation from the six-term set that names a unique retention bond without importing from a psychology frame. That would mean the framework can name the slot after all.

### F8 : Agreement among similarly framed witnesses is not corroboration

Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool"*

Fig 7 :13 *"agreement compounds, evidence does not"*

Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."*

Most organizational-psychology sources opened this session (the three QIC-WD umbrella summaries, the Vandenberghe and Tremblay study, the Hom and Kiazad review, the turnover-contagion abstract) draw on the same meta-analyses and the same three-component model. Their agreement is one witness speaking in several voices. The ecological-trap and hysteresis sources are lower-overlap witnesses for the mechanism shape only, not for the employee-level fact. No expert should be selected for likely agreement; that manufactures the disqualifying correlation. Mode `general`.

**Refuter:** two genuinely low-overlap evidence pools that independently predict the same specific employee-level retention outcome at the ground, with declared separate provenance. That would upgrade this from one witness to two.

### F9 : What survives (the residue table)

| claim | mode | figure / status |
|---|---|---|
| Retention is a property of employee-and-habitat, not of pay or person alone | `specified` | Fig 11 :39-40, triangulated with the habitat-valence rule Fig 11 :49-51 |
| Pay is an actor with valence relative to `R_s`, not a fixed good | `specified` | Fig 11 :49-51, single-source for the figure, corroborated by QIC-WD compensation at the world level |
| Adding an atom already in Γ cannot move the wall | `general` | Fig 8 :32 + Fig 6 :21 + Fig 13 :115, triangulated across three figures with low overlap |
| The two puzzles are a union compound, indexed per slot, never averaged | `general` | Fig 9 :55-57 + Fig 1 :19, triangulated |
| Same atoms, different bond, different substance (isomer reading) | `specified` | Fig 12 :5, :94, :117, triangulated within Fig 12 and Fig 12 :104 |
| Decisions can run on a decayed channel | `specified` | Fig 10 :24, :26, triangulated with the grebe case at the world level |
| Leaving substitutes a habitat and inherits unchosen actors | `specified` | Fig 11 :66-69, single-source within the figures |
| The framework returns a shape, not a name | `general` | Fig 9 :32 + canonical README, triangulated |
| The specific retention bond that wins in a given slot | `gap` | No figure line governs after a genuine re-census. Needs a source-discriminating instrument |

---

## 2b. Additions checked after the first nine findings

### F10 : "Fairness" and "embeddedness" are bindings, not competing verdicts (ACCEPTED with a demotion)

The compensation umbrella summary (QIC-WD, Paul 2022, opened 2026-11-22) says: *"the primary theme for pay satisfaction is one of perceived fairness"* and *"pay satisfaction is only modestly related to actual turnover"*. The job embeddedness umbrella (Paul 2020, opened 2026-11-22) defines embeddedness as *"the extent to which employees are connected to their jobs through a social web"* with links, fit and sacrifice. Both are imported atoms from the psychology frame. Neither moves the Tether wall (Fig 6 :25 *"An import adds no atom to the world."*). What they supply is a promised instrument: a way to name what the Tether says only as a shape. They corroborate F1 and F4 after re-mapping, and they carry zero verdict weight on their own.

### F11 : The strong claim "pay does not retain anyone" is REFUSED

A global negative about pay would be a `general`-mode verdict about all slots. Fig 1 :13 forbids the move that would license it: *"a global R near zero with one live slot residual is a legal state"*. Pay may be the live atom in some slots. The correct form is: pay has valence relative to each `R_s` (Fig 11 :49), and on average the world literature finds only a modest relation to actual turnover (QIC-WD compensation, Paul 2022). That is a statement about the pool, not a verdict about a person.

### F12 : "Commitment is the cause of retention" is REFUSED as circular

Commitment is defined in the field as a tie that binds an employee to the organization (QIC-WD organizational commitment, Stepanek and Paul 2023: *"most definitions refer to organizational commitment in terms of a tie that binds employees to their organization"*). Saying "they stayed because they were committed" names the bond with the outcome already built in. Fig 12 :5 *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* The bond must be specified by its atoms and typed relation before it explains anything. Otherwise it is a flat formula that records the ingredients and not the arrangement.

---

## 3. Pre-registered refuter (written before the conclusion)

Required before outreach: a falsifier written before the run is a design instrument, not only an honesty device (seat rules, as recorded in the exemplar's `01` section 3). The shape claim is refuted if any of the following holds at the ground:

1. A within-person longitudinal record shows stay/leave and tenure invariant to changes in habitat contact while pay varies systematically, with the residual not trending down. Breaks F1.
2. Increasing an atom already in Γ, with no contact with a differing frame, repeatedly reverses an observed quit and the residual trends down. Breaks F2 and Fig 8 idempotence.
3. Two employees with identical atom sets and identical bond types still diverge in the observed decision with no unmeasured atom. Breaks F4.
4. The three commitment components collapse to a single factor with no incremental prediction of the observed quit. Breaks the F4 binding.
5. One lever restores both union conditions with no categorically different residue, measured per slot. Breaks F3.
6. A habitat substitution reproduces everything the goal required with no inherited unchosen actors. Breaks F6.
7. A source with a genuinely low-overlap evidence pool shows per-employee retention fully predicted by pay level averaged across slots. Breaks F1 and the per-slot rule.
8. A derivation from the six-term set names a unique retention bond without importing from a psychology frame. Breaks F7.

If any fires, the shape is withdrawn or narrowed. Until one is run, nothing here is `grounded`.

---

## 4. Recommendation

1. Lead with the shape and the refuter, not with a theory of commitment. The first contact carries `R_s`, the union reading, and the falsifiers.
2. Ask what the recipient would count as a failure before offering any source. Their verdict on stage 1 is recorded before any framework interior is shown (Fig 10 :52).
3. Treat every named driver as a binding with provenance, never as a derivation (F7). If provenance is absent, it has zero verdict weight.
4. Use the public submission and contact points in `03_public_contact_points.csv`. The results-blind Registered Reports route is especially suitable because the refuter is registered before the result.
5. Fig 4 :25 *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the residual, the census and the refuter, not a conclusion about why people stay.

---

## 5. Canonical usage check and retraction / confirmation log

Two sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md` (opened 2026-11-22): *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also *"a reading that makes one contradict another has misidentified its domain, not found a flaw"* and the limit *"what a missing thing would have to look like (a shape, not a name)"*. The framework stops at the limit of the available instruments and records the lineage; *"Indiscernibility is not identity."*
- `THE_FORMULA.md` (opened 2026-11-22): the mode rule above, step 7's three distinct questions SEARCHED, INWARD and OUTWARD, and step 5 *"the ground settles it. Verified only by what pays. A gate is not the ground."*

### Retractions and confirmations of my own earlier readings in this derivation

| earlier reading in this run | status after the canonical check |
|---|---|
| "Pay is a hygiene factor, so it cannot retain" | **Retracted as a figure claim.** That is a Herzberg import, not a figure line. The figure-derived claim is idempotence of closure (F2), which is different and stronger. The import is recorded in the ledger with zero verdict weight. |
| "The two halves of the question are two separate problems" | **Narrowed.** Fig 9 :55-57 makes them two surface readings of one union compound. They must be unbundled, but they are not two domains and were never censused as two. |
| "The three commitment components are figure-derived" | **Narrowed.** The figure gives typed bonds and isomers (F4). The specific affect / norm / continuance mapping is a binding from the psychology frame and needs a source gate and shadow test. |
| "The grebe study shows animals staying in poor habitat" | **Retracted.** The study actually found birds leaving low-quality ponds more often. What it corroborates is the mechanism: cue-based, history-dependent settlement under rapid change, and the trap for stayers on formerly good ponds. It does not corroborate the literal stay-in-poor-conditions result. Recorded here rather than quietly dropped. |
| "An aggregated turnover rate is a usable witness" | **Refused.** Fig 1 :19 and :22 make it a filter for the budget only. It is retained as a filter, never as a verdict. |
| "Commitment explains retention" | **Refused as circular** (F12). The tie is the outcome renamed until its atoms and bond are stated. |
| X1 pay as a domain | **Re-censused out.** No nameable anchor apart from D2 and D3. The strain disappeared after re-census, as the canonical rule requires. |
| "Culture is a driver" | **Not a domain yet.** No anchor apart from D2. Used only as a label for the habitat's relations. |

### Step 7 discipline (SEARCHED / INWARD / OUTWARD kept distinct)

- **SEARCHED:** is the retention term already in the employee's closure and merely unfound? Often yes for pay, which is why more pay is a budget spent sweeping an already swept region (Fig 6 :49 *"more of the space actually visited"*). Distribute the search and keep searchers independent.
- **INWARD:** extend the instrument from one already returning something. The 24-item commitment scale and the global embeddedness measure are existing instruments sharpened in our own terms (Fig 6 :29 *"Sharpen in our own terms."*).
- **OUTWARD:** import a frame whose closure predicts the shape. The ecological-trap literature and the hysteresis literature are such frames. Fig 6 :30 *"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Run INWARD and OUTWARD as two tracks, never read one against the other.

---

## 6. Seven-question recursive derivation (summary)

1. **Is pay an anchor?** No. No nameable anchor apart from the job and market (X1 re-census). Fig 2 :29 anchor test.
2. **Why does more pay fail to retain in some slots?** Because it is search inside a closed frame. Fig 8 :32, Fig 6 :21.
3. **Why does poor conditions fail to make people leave in other slots?** Because the bond carries the decision, and the bond is not an atom of the conditions. Fig 12 :5, :94.
4. **Are the two halves one question?** No, a union compound to be unbundled, indexed per slot. Fig 9 :55-57, Fig 1 :19.
5. **Can the framework name the winning bond?** No. It returns a shape. Fig 9 :32 and the canonical README.
6. **Is "leave for better pay" an exit from a habitat?** No, a substitution with inherited actors. Fig 11 :66-69.
7. **What closes it?** A ground reading: the revealed event plus a source-discriminating instrument that tells the bond types apart. Until then the verdict is `candidate`, and Fig 8 :39 holds: *"So a search that finds nothing is never a proof of absence."*

---

## 7. Updated verdict

The shape survives: retention is a typed bond between an employee and a habitat, the decision is indexed per slot, pay is an actor with valence relative to the residual, adding an already-held atom cannot move the wall, leaving substitutes a habitat, and the channel can carry stale or pooled readings. Every specific naming of a driver (affective commitment, embeddedness, fairness, shock) is a binding from the psychology frame with provenance recorded and zero verdict weight until a ground settles it. The live strain is the operand type of the isomorphism claim at the person level: two employees over the same atom set and different bond types are a real isomer test, but whether the three commitment components are bonds or sub-atoms needs an instrument, not an argument (see `06_isomers_and_order.md`). After re-census: **one strain, named, none hidden.** Mode `specified`, `general` on the structural shape, not `grounded`.
