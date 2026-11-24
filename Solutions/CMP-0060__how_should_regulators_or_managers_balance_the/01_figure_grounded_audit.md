# Figure-grounded audit: efficiency versus exposure to cascading failure

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on a universal coupling fraction. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that LLM output is a simulation of an approximate answer and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The local canonical extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the local canonical figures README, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, plus the public sources in `10_source_ledger.csv`, all opened 2026-11-22.

---

## 0. The residual in effect terms

The question as posed: "How should regulators or managers balance the efficiency of tightly connected systems against their exposure to cascading failure?"

Stated as an effect, not a cause: a structure is built so that flow between its parts is cheap and fast. The builder predicts continued service. A local shock arrives, a part fails, the failure shifts load to neighbours, and the prediction fails at particular slots while the system-wide average still looks healthy. The residual is the gap between the predicted smooth flow and the observed cascade, and it is indexed per slot.

Two figure lines govern before any theory is chosen:

- Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
- Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*

And Fig 1 :13: *"a global R near zero with one live slot residual is a legal state."*

So the phrase "balance efficiency against exposure" already hides the first error. It invites one system-wide scalar, but the signal that matters is a live residual on one slot. A single efficiency-or-exposure score is an average that throws away the signal, exactly the move Fig 1 :28 names when it says a frame cannot score itself with a quantity it also produces.

The residual R, described for the lookup step (Fig 9 :22, arity · symmetry · scale):

- **Arity:** at least three conditions bind. (a) flow efficiency, (b) failure propagation, (c) the monitoring and governance arrangement that declares the system safe. More than one condition means a union, not one dial.
- **Symmetry:** efficiency and exposure are not interchangeable and are measured in different currencies. Fig 12 :125 *"A composition costs in two currencies, and they do not add."* Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."* A trade-off ratio silently adds two incommensurable quantities.
- **Scale:** step (one part fails) to cycle (load re-enters as input, Fig 12 :121) to level (systemic cascade) to seat (who may declare stop) to lineage (the rule changes after the crisis). The cascade is a cross-scale phenomenon.

---

## 1. Domain census, written before any figure line was chosen

I wrote this census first, then went to the figure text. One line per domain with actors, currency and anchor. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | partition / union |
|---|---|---|---|---|
| D1 exposure and topology | nodes (firms, utilities, institutions), typed bonds, shocks, load | flow and overload propagation; bits describe the arrangement, actions test it | a real shock and its loss record, a physical failure | part of a union; internal question is the bond, not the node set |
| D2 measurement and ground contact | stress tests, exposure data, early-warning metrics, regulator models | residual R per slot, prediction against observation | the real crisis and loss data, which do not update on the model's report | part of a union; seam with D1 and D4 |
| D3 governance and the seat | regulators, managers, boards, regulated firms, auditors | verdicts, conventions, influence versus ground contact | the ground, never agreement; a seat able to refuse | part of a union; the compound D2 ∩ D3 has its own loop |
| D4 the efficiency model as a frame | the manager's own model and vocabulary | composition inside closure(Γ) | the figures as metalaws; the ground for any measurement | the seam between D1 and D2; not a separate room to be trusted |

**Union, not partition.** Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* Efficiency and exposure share the same atoms (nodes and bonds) but differ in the bond, so they are a compound with their own loop, not two ends of one continuum.

**Order by dependency (Fig 3).** Fig 3 :20 *"The chain is ordered by dependency, not by importance."* Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* The order is: (1) make a non-updating ground reachable (D2), (2) enumerate the habitat of contact (D1), (3) choose the bond topology, (4) install a seat able to refuse (D3), (5) require an outside frame for any safety claim (D4). Effort spent tuning exposure metrics above a broken measurement link arrives at a step that cannot use it. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Strain test applied during the census: I first tried to read the six-term physical substrate of Fig 13 directly onto financial networks. That strains, because space, time and energy are not the variables a regulator manipulates. Re-census assigns Fig 13's network and gradient atoms and its cross-kind composition rule to D1, and leaves the physical six alone. The strain is recorded in section 6 rather than hidden.

---

## 2. Figure census

| figure | bearing on this residual | verdict in this audit |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | no single score; D1 and D2 |
| 2 The Ground | anchor must not update; independence; correlation valence | D2, D3, D4 |
| 3 Dependency Chain | order by dependency; a reading below the break reads nothing | census order |
| 4 The Membrane | methods, not recordings, cross; round-trip gap | outreach and R_T |
| 5 Mint Pipeline | three guards as a product; MDL bargain | no term minted without a ground |
| 6 Closure and Reachability | import alone moves the wall; depth and absence look alike inside | D4 |
| 7 Room Chain | a room's agreement is variation, not a verdict | D3 |
| 8 Union Surplus | no search adds an atom; passing is not proof of absence; independence read twice | D2, D4, gap |
| 9 Leave, Arrive, Search | union versus partition; describe first; filters not witnesses | whole audit |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access; declare stakes | D2, D3 |
| 11 The Habitat | enumerate contact; valence relative to residual; contact cascades; substitution | D1, D3 |
| 12 The Bond | the bond carries the information; isomers; cycle; two currencies | D1 decisive |
| 13 Minimum Viable Set | closed set, open arrangements; remainder amplifies into chaos | D1, gap |
| Operators table | negation is a refusal, not a subtraction | a seat can refuse |
| Symbols table | R is the aim; ground is the anchor; habitat is contact | definitions |

Every quoted string in this folder was checked character by character against `03-FIGURES_TEXT.md`.

---

## 3. Findings

### F1 The lever is the bond, not the amount of connection (decisive, D1)

Fig 12 :5 *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :46 *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."* Fig 12 :94 *"The arrangement is the substance."*

Fig 13 :115 *"The set is closed. The arrangements are not. That gap is why import exists."*

The question asks "how tightly." The figures answer in terms of which bond. The same set of institutions joined by a different arrangement is a different substance. Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Fig 13 :24 names the atom that matters: *"that entities relate, and influence travels."* Fig 13 :22 names the spendable difference: *"a difference that can be spent."* A cascade is a gradient being spent through a network, so the quantities to govern are the typed bonds and the directedness of the flow, not a scalar count of connections.

**Verdict D1:** `specified`, triangulated (Fig 12 bond and isomer lines plus Fig 13 network and arrangement lines, low overlap between the notation claim and the substrate claim). Change the bond, not the node count. Refuter: show two arrangements over the same atom set with identical cascade behaviour under the same shock, which kills the bond-as-substance claim.

### F2 A cascade is an amplifying cycle, so there is a threshold, not a monotone dial (D1)

Fig 12 :121 *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*

Fig 13 :31-32: *"a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."*

A chain that redistributes load after a failure is a cycle: the output of one node's overload re-enters as input to its neighbours. Whether it closes and amplifies depends on the sign, which is a property of the arrangement, not of the number of nodes. A remainder compounding through an amplifying chain is the figure's own definition of the regime the regulator fears.

This predicts a non-monotone relation: connection absorbs a shock over one range, then amplifies it past a threshold. The world sources corroborate. The Systemic risk synthesis reports that *"up to a certain point, interconnectedness enhances financial stability. However, once a critical threshold density of connectedness is exceeded, further increases in the density of the financial network propagate risk"* (Acemoglu, Ozdaglar and Tahbaz-Salehi 2015, as reported in the opened Wikipedia article). The Ecological network synthesis reports *"a tipping point may therefore be passed at which the populations of a large number of species may collapse simultaneously"* (Lever et al. 2014, as reported in the opened Wikipedia article). These are secondary corroboration only; the verdict comes from Fig 12 :121 and Fig 13 :31-32.

**Verdict D1 (continued):** `specified`, triangulated. Govern the sign of the loop, with compartments and buffers that keep a cascade from closing. Refuter: a measured monotone relation between coupling and cascading loss across the whole operating range, which would dissolve the threshold compound and send us back to the census.

### F3 Contact cascades, so the habitat must be enumerated outward, not scoped to direct links (D1, D3)

Fig 11 :43 *"The habitat is enumerated, never composed."* Fig 11 :52 *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

Fig 11 :49 *"An actor's valence is relative to the residual, not a property it carries."* Fig 11 :51 *"No standing list of good actors survives a change of residual."*

A regulator who enumerates only direct counterparties has performed first-order enumeration on a second-order effect. The residual that matters can be three steps out. A standing list of "systemically safe" arrangements is refused by Fig 11 :51, because valence flips when the residual changes. What is a shock absorber in one regime is a shock amplifier in another (world corroboration, the Systemic risk article's diversification section).

**Verdict D1 and D3:** `specified`, triangulated (Fig 11 contact and valence lines plus Fig 9 union line). Enumerate outward until the cascade stops mattering, and re-enumerate when the residual changes. Refuter: a completed enumeration whose second-order effect is shown to be irrelevant to the residual at every step, which would collapse the habitat to direct contact.

### F4 A single score discards the live slot (D1, D2)

Fig 1 :19 and :22 (quoted in section 0) are decisive here. Fig 1 :13 *"a global R near zero with one live slot residual is a legal state."* Fig 1 :27, on frame-internal quantities: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

The efficiency statistic (throughput, latency, cost per transaction) and the risk statistic (a pooled VaR or connectivity index) are produced by the same frame whose arrangement they are scoring. Averaging them hides the one live slot. Fig 12 :130 *"Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."*

**Verdict D2:** `specified`, triangulated (Fig 1 per-slot plus Fig 12 two-currency). Keep the residual indexed per slot and the two currencies held apart. Refuter: a scalar shown to preserve all per-slot cascade information under perturbation, which would break Fig 1 :22.

### F5 A passing stress test is not a proof of safety (D2)

Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* Fig 8 :40-41 *"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."*

A stress test that passes has searched inside a closure and found no failure. That is the "searched" branch, not a verdict that the atom is absent. A rare cascade whose mechanism and network structure change during the crisis (the source question 58) is a case where the closure itself may be wrong, so the correct instruction is to check whether the missing mechanism is depth (unreachable at this budget) or genuine absence. From inside the model the two look the same.

Fig 8 :32 *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* More scenarios at the same model do not add the missing mechanism.

**Verdict D2:** `specified`, triangulated (Fig 8 absence plus Fig 6 :27 depth-absence). A stress test is an instrument, not the ground. Refuter: a demonstrated case where passing a specified battery entails safety by construction, with a proof that the battery's closure contains every mechanism that can produce a cascade.

### F6 Hidden and correlated exposures are channel failures, not ground failures (D2)

Fig 10 :24 *"the ground does not decay, the channel does."* Fig 10 :25 *"stale percepts, dropped transients, saturated metrics, pooled readings"* and :28 *"you have lost touch."*

The ground (the real losses) does not decay. What decays is the regulator's channel to it: stale exposures, dropped transients, saturated metrics, and pooled readings. The question about measuring systemic risk when connections are partly hidden (source question 55) is a channel question. The output of a decayed channel is not a verdict; it is the report that contact has been lost.

Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* A model whose inputs are the regulated firms' own reports can update on those reports, so it is not an anchor. Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

Diversification is only as good as independence. Fig 2 :31 *"Independence, between two frames, is how little they draw on the same evidence."* Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool."* Fig 8 :47 *"Independence is one quantity read twice."* A portfolio diversified across correlated risks is one frame wearing many names, exactly the collapse the Systemic risk article reports when it notes that *"all models across the board use the same theoretical basis"* (its Factors section).

**Verdict D2:** `specified`, triangulated (Fig 10 channel plus Fig 2 anchor and independence plus Fig 8 independence-as-one-quantity). Buy independent readings; do not pool them into one agreement. Refuter: a demonstration that correlated readings carry the same independent information as separated ones, which breaks Fig 2 :31.

### F7 Agreement among managers is not a verdict about safety (D3)

Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* Fig 7 :36 *"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."*

A committee of managers who all read the same dashboard is one room. Its confidence is variation, not evidence. Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* The cost of being wrong about a cascade is high, so the framework says to buy real independence: separate instruments, separate closures, an outside frame.

Fig 10 :42 *"A verifier that can reconstruct the claim cannot verify it."* A checker who has been walked through the entire model before being asked for a verdict has joined the frame being checked. Fig 10 :52 *"Bring a characterised residual, never the source."*

Fig 10 :47 *"a convention that decides an outcome has stopped being one."* A safety threshold that, once crossed, automatically determines a verdict has stopped being a convention and become an author of the outcome. It must remain installable-and-violable. Fig 10 :59 *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* A regulator with a reputation to protect has a structural stake that must be declared, not denied.

**Verdict D3:** `specified`, triangulated (Fig 7 room plus Fig 2 independence plus Fig 10 seat rules). Keep a seat that can refuse, declare its stake, and never count its agreement as corroboration. Refuter: a case where agreement among a single evidence pool settles a question about the world, which would break Fig 2 :40.

### F8 The model cannot certify its own safety (D4)

Fig 6 :21 *"MINT composes inside the closure and can never add an atom."* Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 6 :27 *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*

The model that certifies "this system is efficient and safe" is a frame inside the system. It cannot compose its way to the atom it lacks, and it cannot tell whether its failure to find a cascade mechanism means the mechanism is far away or absent. Fig 8 :34-37 (Godel, Tarski, Chaitin) is the formal statement of the same limit.

The remedy is an import with a source gate and a shadow test, from a frame whose closure differs. Fig 6 :30 *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :27-28 *"describe it before you go looking, or any frame you pick will seem to fit."*

**Verdict D4:** `general` on the structural limit, triangulated (Fig 6 closure plus Fig 8 metaframe theorems). Any safety claim that comes only from inside the system's own model is a candidate, not settled. Refuter: a closure that proves its own completeness, which the figures forbid; if one is demonstrated, Fig 8 is wrong.

### F9 The universal balance fraction is a gap, not a silence (all domains)

Fig 9 :32 *"you get a kind of thing, never the answer itself."* Fig 13 :134 *"Unreachable is a verdict here, not a silence."* Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*

No figure line returns a coupling percentage, a buffer size, a diversification ratio, or an optimal modularity. The framework returns the shape any such answer must have: per-slot residual, independent non-updating ground, enumerated habitat, bond-level lever, a seat that can refuse, and an instrument that would name the threshold. What it cannot do is hand over the number. That is a declared `gap` of the shape-not-a-name and unreachable-at-this-budget kind. It is a verdict, not a failure to try.

**Verdict:** `gap` on the exact fraction. Refuter for the gap: a figure line that does govern a universal fraction would falsify this gap; none was found after the re-census in section 6.

### F10 What actually survives, with mode attached

| claim | mode | figure |
|---|---|---|
| The residual stays indexed per slot; a system-wide average can hide a live cascade | `general` structural | Fig 1 :13, :19, :22 |
| The lever is the typed bond and the sign of the feedback cycle, not the number of nodes | `specified` | Fig 12 :5, :46, :94, :121; Fig 13 :24 |
| Same nodes, different arrangement gives a different cascade substance (isomer) | `specified` | Fig 12 :117; Fig 13 :115 |
| Connection is a threshold compound, not a monotone dial | `specified`, ungrounded | Fig 12 :121; Fig 13 :31-32; world corroboration |
| Contact must be enumerated outward; valence flips with the residual | `specified` | Fig 11 :43, :49, :51, :52 |
| A passing stress test is searched, not proven absent | `specified` | Fig 8 :32, :39, :40-41 |
| Hidden exposures are channel decay; the ground does not decay | `specified` | Fig 10 :24, :25, :28 |
| Agreement inside one evidence pool is not a verdict | `general` structural | Fig 2 :35, :40; Fig 7 :35 |
| The internal model cannot certify its own safety | `general` structural | Fig 6 :21, :23, :27; Fig 8 :34-37 |
| A universal optimal coupling fraction | `gap` | Fig 9 :32; Fig 13 :134 |

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. A system-wide scalar is shown to preserve every per-slot cascade residual under perturbation, so aggregation loses nothing (breaks Fig 1 :19, :22).
2. Two arrangements over the same atom set are shown to have identical cascade behaviour under the same shock, so the bond carries no information (breaks Fig 12 :117, Fig 13 :115).
3. Coupling is measured to be monotone with cascading loss across the entire operating range, so no threshold compound exists (sends the union reading back to census).
4. A safety claim is settled by agreement among frames that share one evidence pool, and the ground subsequently pays for it anyway (breaks Fig 2 :40, Fig 7 :35).
5. A battery of tests is proven, not merely observed, to contain every mechanism that can produce a cascade, so passing entails absence (breaks Fig 8 :39).
6. A frame inside the system proves its own completeness (breaks Fig 8 :34-37 and Fig 6 :23).

If any fires, the relevant verdict is withdrawn and the census is redone. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Stop asking for a balance ratio. Ask which bond arrangement keeps the ground reachable and the residual legible per slot (F1, F3, F4).
2. Treat coupling as a threshold compound. Keep compartments and buffers so the feedback cycle cannot close and amplify (F2, Fig 12 :121).
3. Enumerate the habitat outward to second and third order, and re-enumerate when the residual changes (F3).
4. Keep an independent, non-updating anchor. Treat stress tests as instruments with a measured round-trip gap, not as the ground (F5, F6, Fig 4 :30).
5. Keep a seat that can refuse, declare its stake, and do not pool its agreement as corroboration (F7).
6. Require an outside, low-overlap frame for any "safe" claim, with provenance and a shadow test (F8).
7. State the `gap` on the exact fraction plainly, and name the instrument that would close it (F9).

Fig 4 :22 *"Only methods cross up. Only head starts come down."* Send the method (census, refuter, instrument question), not a recording of this derivation.

---

## 6. Canonical usage check, strains, and retraction log

Two local sources were read after sections 0 to 5 and govern how the figures may be used. The canonical figures README says the quotes are the authority, not the summary, and that a reading which makes one figure contradict another has misidentified its domain, not found a flaw. It also says the framework returns *"a shape, not a name"* and then stops at the limit of the instruments, recording the lineage so the stop is honest. `THE_FORMULA.md` step 7 separates SEARCHED, INWARD and OUTWARD; step 5 says *"the ground settles it. Verified only by what pays. A gate is not the ground."*

### Strains and re-census

- **S1, physical six versus network objects.** I first tried to map space, time and energy onto financial nodes. Strain. Re-census: Fig 13's network (:24) and the spendable gradient (:22) and its cross-kind composition (:74) govern D1; the physical six are not the variables. Dissolved, kept visible.
- **S2, one dial versus union.** The question's "balance A against B" implies one axis. Re-census with Fig 9 :54-57 assigns three conditions with different anchors. Dissolved.
- **S3, exclusion versus substitution.** Managers speak of "removing" risk. Fig 11 :61 *"The seat's power is asymmetric. Introduction is available; exclusion is not."* and Fig 11 :66 *"Isolation is not removal of the habitat. It is substitution of one habitat for another."* Re-census: a buffer or a circuit breaker substitutes a habitat; it does not subtract contact. Dissolved, kept visible.
- **S4, live type question.** The efficiency anchor is often a market throughput, which updates on participants' behaviour. Fig 2 :29-30 requires a non-updating anchor. Fig 2 :36-38 says an anchor is legitimate when the question is constitutively about it, and that an instrument can be wrong on axes it does not measure. For "is this arrangement efficient," a market is constitutive; for "is it safe," it is only an instrument. Named as a live question with a refuter: an instrument that discriminates throughput from persistence under shock. Not smoothed.

After re-census: one strain named and live (S4), none hidden.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| "tight coupling is simply bad" | **Retracted.** Replaced by a union with a threshold: connection absorbs then amplifies (F2). World corroboration from the systemic-risk and ecology syntheses. |
| "diversification always reduces exposure" | **Narrowed.** Diversification buys nothing when readings share an evidence pool (F6). Only independent frames can corroborate. |
| "the six physical terms map onto financial nodes" | **Retracted by re-census (S1).** Only the network and gradient atoms and the cross-kind rule govern. |
| "a stress test is the ground" | **Retracted.** It is an instrument with a round-trip gap (F5, Fig 4 :30). |
| "managers can remove systemic risk" | **Retracted (S3).** They substitute habitats and must keep enumerating the new contact. |
| "shape, not a name forbids naming the lever" | **Narrowed.** The canonical phrase governs a missing primitive. Naming an already available binding (buffer, compartment, independent frame) is provenance, not an invented primitive. See `05` section 5b. |
| F1 bond-as-substance | **Canonically confirmed** by Fig 12 :5, :46, :94, :117 and Fig 13 :115. |
| F7 room-is-not-verdict | **Canonically confirmed** by Fig 7 :35 and Fig 2 :40. |
| F9 universal fraction as gap | **Canonically confirmed** by Fig 9 :32 and Fig 13 :134. Unreachable is a verdict. |

### Updated verdict

The shape survives. What a regulator or manager should balance is not a coupling amount but the arrangement of bonds, the reachability of a non-updating ground, the independence of the frames that declare safety, and the presence of a seat able to refuse. The residual is per slot and the currencies do not add. The exact fraction is a declared `gap`, with an instrument owed. Mode `specified` on the per-domain claims, `general` on the structural shape, not `grounded`. No measurement was taken; this is internal consistency, not corroboration (Fig 2 :40).
