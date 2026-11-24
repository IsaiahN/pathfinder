# Figure-grounded audit: BUS-0097, conflicts between claimant parties

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business-ethics question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) - o'|` per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the company's belief about what each party will accept, bear, or return, formed from its own history and inherited priors about "how business works".
- **a** is what the company does: a wage, a price, a dividend, a siting decision, a supply contract, a product, a disposal pathway, a disclosure.
- **Γ(b,a)** is what the company's library of routines, forecasts, and metrics predicts will follow for each party.
- **o′** is what actually follows for each party, measured outside the company's own report: payslips, complaints, returns, health outcomes, contract breaches, ecosystem thresholds, survival.
- **s** is the claimant party. R is indexed by party and by decision, never averaged into one "overall stakeholder outcome".

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the size of any party's claim but **how a conflict between named residuals is settled**. Observed practice offers two named options, and both are aggregates: "the owner's residual is the only one that counts" collapses five slots to one; "balance all stakeholders" collapses five slots to one score. The question "how should companies resolve conflicts between workers, customers, owners, communities, and future generations" is already framed as if a single resolution existed. The effect description refuses that frame: what is owed is a process that keeps five residuals visible while something outside them settles which action pays for all of them.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a governance shape with (i) a per-slot residual register, (ii) a non-updating anchor each party ranges against, (iii) a seat able to refuse a verdict and outside the slice being graded, (iv) an explicit treatment of the party whose residual cannot yet register, and (v) an instrument that discriminates failure of one condition from failure of another. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates: *"A measurement, an experiment, a counter, a market, a patient outcome."* A wage payment, a safety measurement, a contract performed or breached, a price paid, a threshold crossed, a survival count, a court ruling: each can settle without moving when a party pushes. Stakeholder sentiment, board consensus, an ESG score, and the company's own disclosure move when pushed; they are instruments at best. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."*

For the **future generations** slot, no nameable anchor is available now. There is no party present who can be asked, and no instrument currently returning a reading of their residual. Under the census rule, that means this slot is **not yet a domain** (section 1.2, X1). Fig 6 :34-35 describes the condition exactly: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."* This is recorded as a `gap`, not as silence and not as an invented priority.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation: company action `a`, claimant slot `s`, party outcome `o'`, and time `t`. The five named parties are five slots, not five values of one variable, because a benefit to one is not a measurement of the other. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :70-72) because a hearing must precede a decision if the hearing is to bear on it, and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :85-87) because "fair", "adequate", and "material" are thresholds, not quantities. It is not symmetric: a harm to a community is not undone by a dividend to an owner.
- **Symmetry.** Conflicts are asymmetric in time and in kind. A lost wage is not recovered by reversing the price; an extinct condition is not restored by a later payment. "Superior", "fair", and "sufficient" are threshold relations relative to a named party (Fig 12 :85-89; Operators table :46-51).
- **Scale.** Four scales are in view: the single decision, the firm's governance room, the habitat of current claimants, and the intergenerational time channel. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30). A method for hearing workers does not replay unchanged as a method for hearing a community, still less for a party not yet born.

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The decision loop** (one firm, one decision) | managers, the firm's Γ, instruments | actions and residual reduction per party | yes: the measured outcome for each named party | admitted |
| **D2 The claimant habitat** (current parties) | workers, customers, owners, communities, suppliers, regulators | survival, consent, payment, trust, license to operate | yes: each party's own outcome plus market, contract, and court (Fig 2 :29) | admitted |
| **D3 The governance library** (composition inside the firm) | atoms: claims, rights, contracts, metrics, seats, instruments; typed bonds between them | reach (what can be composed and done), `|φ|` cost | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The seat and the time channel** (across decisions and generations) | boards, audits, ombuds, regulators, standards, instruments | contact with the ground | yes: *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 Future generations as a currently registering claimant** | none present in the room | none currently returned | **no**: no party to ask and no instrument returning their residual (Fig 6 :34-35; Fig 10 :23) | not a domain yet |
| **X2 A fixed priority order of parties** ("owners first", "workers first") | one named party | standing rank | measurable ranks exist, but the rank does not track a change of residual (Fig 11 :51) | absorbed into D2 as a candidate binding, not a domain |
| **X3 "Society" as one extra party alongside the five** | the public | public interest | already the union of D2 and D4, not a separate anchor | absorbed |

X1 fails the anchor test and is therefore excluded as a domain before any figure line is applied to it. This is a structural exclusion, not a claim that future people do not matter. It is the reason their treatment in section 3 F5 is a `gap` with an owed instrument rather than a priority rule. X2 is refused by Fig 11 :51 before any rank is applied. X3 is a compound, so it gets its own loop rather than a sixth slot (Fig 9 :55).

### 1.3 Partition or union

D1 and D3 overlap: Γ is inside the firm loop, so their overlap is a compound with its own loop. D2 and D4 overlap: contact with the ground is exercised inside the habitat, and a seat that grades the habitat must stand outside it (Fig 10 :85-86), so that overlap is a second compound. The claimant parties overlap each other: a worker is also a community member, an owner is also a beneficiary of a stable climate, a customer is also a neighbour. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) a maintained channel to a ground that does not update on any party's own report; (C2) a reachable refusal seat outside the slice being graded; (C3) a per-slot residual register that is never averaged into one objective; (C4) an instrument that registers the party whose residual does not yet arrive. A conflict where only C1 fails and a conflict where only C2 fails are not different degrees of one failure. They need different levers, and one lever clears only the region where a single condition holds (Fig 9 :55). This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)

Order for this question: 1 perception (can the firm read the party's outcome?) → 2 vocabulary (does Γ have terms for what this party affords and what would count as progress for it?) → 3 objective (can it say what a fair resolution would count as, per slot?) → 4 planning → 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument in most stakeholder processes. Fig 12 :112-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most governance effort lands above the break because that is where the measurements already exist (Fig 3 :29-30): more listening rounds, more reporting, more committees, without a term for what a party's residual is or a ground that could settle it.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how the five parties are indexed, not who wins |
| 2 The Ground | non-updating anchor; alignment is triangulation, not negotiation | decisive for the resolution mechanism |
| 3 Dependency Chain | the middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs transfer between decision, firm, and generation |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a new governance term can be admitted |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse ones; nothing registers where nothing is | decisive for the future-generation slot |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs "stakeholder dialogue" as a chain of rooms |
| 8 Union Surplus | idempotence; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; seat outside the slice; convention vs verdict | decisive for the dispute-resolution seat |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; no standing list | refuses all fixed priority orders |
| 12 The Bond | arrangement is the substance; isomer, catalyst, flat formula; two currencies | governs why a priority list is a notation failure |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop for future generations |
| Operators table | negation refuses where subtraction only removes | governs the need for an explicit refusal operation |
| Symbols table | `R` is the aim; ground is the anchor | no `R` per party is stated in current practice |

Strain test applied during this census: an early attempt to map the five parties directly onto Fig 13's six physical terms (workers as energy, communities as space, future generations as time) only fit by naming analogies the figure does not license. That is a strain, so Fig 13 does **not** govern the identity of the parties. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about governance, `grounded` only if settled by a measurement. None is `grounded`.

### F1: A single objective aggregates away the live signal

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 1 and Fig 9, low overlap: per-slot residual vs union unbundling).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

Both named answers are aggregates. Shareholder primacy keeps one slot and discards four. Stakeholder balancing keeps five slots and replaces them with one weighted score, which is the same operation performed with more terms. A score a firm computes from its own report is frame-internal: the firm scores itself with a quantity it also produces. The figure-derived requirement is the opposite: five residual registers, each ranged against an outcome measurement the firm does not author, and no single number that stands in for all of them.

The business literature states the difficulty without the figures' vocabulary. Jensen 2002 argues that stakeholder theory *"leaves managers with multiple objectives and no principled way to make trade-offs"* and proposes a single objective instead (read via the Stakeholder theory synthesis, 2026-11-22). That is the aggregation complaint stated from the other side. Mitchell, Agle and Wood's salience typology (power, legitimacy, urgency) is a **filter**: it tells a firm where to spend attention, not which claim the ground pays for. Fig 9 :60 governs it.

**Refuter:** a prospective, per-party measurement that is stable under aggregation: a single "stakeholder value" number that predicts, for each named party separately and before the fact, which party's residual will grow next. If one exists, F1's per-slot requirement is false.

### F2: Alignment is triangulation, not negotiation

**Mode: `specified`. Domain D4. Status: triangulated (Fig 2 and Fig 7, low overlap: anchor rule vs selection between rooms).**

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"The anchor must not update."** (Fig 2 :33)
> **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."** (Fig 2 :34)
> **"A ground listed as one of the parties has already become a frame."** (Fig 2 :47)

A process that resolves a conflict by getting the parties to agree is panel 1 of Fig 2, whatever it is called. *"no anchor; each updates on the others... they converge, and what they converge on is whoever had the most influence"* (Fig 2 :13-15). With equal seating and unequal power, the outcome is the influence-weighted average, and it looks like consensus, which is why nobody notices. The figures require each party to range separately against a reference that does not move when they push on it: a payment record, a safety measurement, a price, a harm count, a contract performed or breached, a court ruling.

Fig 7 adds the room test:

> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)

A programme of repeated "stakeholder engagement" that books the same participants, the same facilitation, and the same agenda is one long room. It produces agreement and not evidence. The next room must be selected against the residual the last one surfaced.

World corroboration comes from a genuinely different pool. Blattberg (2004), as reported in the Stakeholder theory synthesis, criticises stakeholder theory *"for assuming that the interests of the various stakeholders can be, at best, compromised or balanced against each other"* and locates the cause in *"its emphasis on negotiation as the chief mode of dialogue for dealing with conflicts between stakeholder interests"* (read 2026-11-22). Rawls, in the procedural justice synthesis, defines perfect procedural justice as requiring *"an independent criterion for what constitutes a fair or just outcome of the procedure"* (read 2026-11-22). Both are the anchor requirement stated in political philosophy. Ostrom's guidelines, as reported by Henderson, include that *"good conflict resolution methods should be in place"* and that *"monitoring and punishing is done by the users or someone accountable to the users"*; monitoring accountable to users is a ranged instrument, not a self-score.

**Refuter:** a documented case in which a conflict is settled by party negotiation alone, the reference used moves whenever a party pushes on it, and the resulting allocation nevertheless persists unchanged across three independent measurements of each party's outcome. That breaks F2.

### F3: No standing list of good parties survives a change of residual

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use."** (Fig 12 :119)

"Owners first" and "workers first" are the same structural move with a different name: a standing rank of actors independent of the residual. The figures refuse it. A party's standing is a relation to a particular harm or benefit, not a property it carries. A supplier who is a benefactor when the residual is delivery can be a malfactor when the residual is the community's water; a dividend that is a benefit to an owner can be a harm to a future generation's capital base. This is not an argument for treating everyone equally; it is an argument against freezing the rank before the residual is read.

The contrast between shareholder primacy and stakeholder theory is the world-level instance. Friedman's formulation, as quoted in the shareholder primacy synthesis, is that *"a corporate executive is an employee of the owners of the business. He has direct responsibility to his employers... and his primary responsibility is to them"* (read 2026-11-22). The Business Roundtable's 2019 statement replies that *"Each of our stakeholders is essential. We commit to deliver value to all of them"* (opened 2026-11-22). The second is broader than the first, but it is still a standing list with no priority rule; Jensen's objection applies to it. Both are candidate bindings, not figure-derived ranks. Their disagreement is recorded as evidence that a fixed list is contested, not as a reason to pick one.

**Refuter:** a standing priority order over the five parties that predicts, prospectively and without re-reading the residual, which party's claim should prevail across at least three categorically different conflicts. If one holds, F3 is false.

### F4: The question is a union, so one lever leaves the intersections standing

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay; the essay is framework-internal, so the external witness count is one).**

Fig 9 :54, :55 and :57 are quoted in section 1.3. The four conditions C1 to C4 have different instruments:

- A C1 failure shows up as a reference that moves when the parties push, agreement without measurement, saturated metrics and pooled readings (Fig 2 :13-15, Fig 10 :26).
- A C2 failure shows up as a grade of itself by a seat inside the measured slice, an interest in the reading that was never declared (Fig 10 :85-86, :59).
- A C3 failure shows up as a single blended score, a live slot hidden in an average (Fig 1 :22).
- A C4 failure shows up as a party that is named in the policy but has no channel returning anything about its outcome (Fig 10 :23, Fig 6 :34-35).

A single lever, for example "appoint a chief sustainability officer" or "adopt a stakeholder scorecard", clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55). The intergenerational-equity literature supplies the world-level instance of the trap: *"weak sustainability"* offsets environmental loss against economic gain through a discount rate, while *"strong sustainability"* holds that no such offset is admissible (read 2026-11-22). One lever, the discount rate, is being asked to settle a union of intragenerational and intergenerational conditions. Fig 9 :57 says the residue is categorically different, not merely smaller.

**Refuter:** a single intervention that restores all four conditions in all four failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F5: The future-generation slot is `unreachable`; an instrument is owed, not a name

**Mode: `specified` on the governance consequence, `general` on the structure, `gap` on any specific priority for future people. Domain D4, with X1. Status: triangulated (Fig 6 and Fig 13, plus Fig 10 for the channel; distinct figures with distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."** (Fig 6 :34-35)
> **"R never arrives"** (Fig 10 :23)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)
> **"Unreachable is a verdict here, not a silence"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

Future generations are named as a party in the question, but in the current governance closure they have no seat, no measurement returning their residual, and no way to push on a reference. That is not "a hard case of the same kind" as the other four. It is a different condition, and under the census rule it is not yet a domain (X1). Calling them "just another stakeholder" imports a name where an instrument is owed.

What the figures permit is to characterise the missing thing in effect terms: a channel that returns a reading of long-horizon consequences before the harm is irreversible, and a seat that can carry that reading without authoring it. An import from a frame whose closure differs is legitimate only with the two gates:

> **"source gate: provenance"** (Fig 6 :12) and **"shadow test: explains a gap"** (Fig 6 :13)

World sources converge on exactly this shape. Waddock 2026 classifies *"unvoiced or silent humans who have no voice in the present"* and notes that *"the interests and needs of many un(der)voiced stakeholders may not yet have sufficient salience or voice to gain attention unless specific attention is paid"* (abstract read via Semantic Scholar, 2026-11-22; full text 403 on direct fetch, reduced weight recorded). The intergenerational equity synthesis reports proposals for *"an ombudsman for future generations, or other institutions tasked specifically with considering future generations"*, and Tobin's formulation that *"The trustees of endowed institutions are the guardians of the future against the claims of the present"* (read 2026-11-22). Construal level theory supplies the low-overlap cognitive mechanism: *"the more distant an object is from the individual, the more abstract it will be thought of, while the closer the object is, the more concretely it will be thought of"*, and for risks *"this mechanism divorces us cognitively from the reality of likely undesirable outcomes"* (read 2026-11-22). The problem is not that future interests are weighable and are weighed too lightly. It is that no instrument currently returns their residual at the resolution the decision needs. Fig 6 :34-35 governs; the world sources corroborate the shape, never the figure verdict.

**Refuter:** a present, repeatable, non-updating instrument that returns a per-decision residual for people not yet born, which is accepted by two frames with different evidence pools, together with a seat authorised to refuse on the strength of it. If such an instrument exists and is already in use, F5's `gap` narrows to a measurement problem and the unreachable verdict is withdrawn.

### F6: The resolving seat must be outside the slice being graded

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and the procedural-justice synthesis; the latter is a genuinely low-overlap field).**

> **"A verifier that can reconstruct the claim cannot verify it."** (Fig 10 :42)
> **"Outside the slice being graded. Whoever is measured by a reading cannot own it."** (Fig 10 :85-86)
> **"Sees what agreement hides. The collapses are invisible from inside the frames that are collapsing."** (Fig 10 :91)
> **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"** (Fig 10 :59)

If the parties to a conflict grade the resolution of their own conflict, the seat is inside the measurement. Their agreement is the phenomenon to be explained, not the test of it. This is the figure-grounded reason for an independent board member, an ombuds, an auditor, a regulator, or a court: not because such a person is wiser, but because they can refuse and have no gain from a particular reading. *"A seat with no stake at all does not exist"* (Fig 10 :58); the interest in the outcome is declared, and the interest in the reading is disqualified. Fig 2 :47 applies directly: *"A ground listed as one of the parties has already become a frame."*

Operators table :58 adds the necessary operation: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."* A governance vocabulary that can record claims, interests, and commitments but cannot record "this claim does not hold" can only accumulate obligations. The refusal is a unary operator, not a subtraction: it does not remove the claim from the record, it removes the claim's standing to be composed over (Fig 6 :42-43).

The low-overlap corroboration is close. Leventhal's justice rules include *"consistency, bias suppression, accuracy, correctability, representativeness, and ethicality"* (read 2026-11-22): bias suppression and correctability are the refusal seat's job stated in organizational psychology. The synthesis also records that *"Hearing all parties before a decision is made is one step which would be considered appropriate"* and that giving members a voice matters even when the voice is non-instrumental, that is, *"a voice that will not have any weighting on the decision-making process"*. The second finding is a real strain and is kept open in section 6 S4: a voice that changes perceived fairness is not the same quantity as a ground that changes the outcome.

**Refuter:** a conflict-resolution seat that is measurably inside the slice it grades, with a declared gain from a particular reading, an interest in the reading that is not disqualified, and no available act of refusal, which nevertheless produces outcomes stable across three non-updating measurements. That breaks F6.

### F7: A convention that decides an outcome has stopped being one

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10 and Fig 2, distinct roles).**

> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"Declaring a meaning does not ground it."** (Fig 10 :49)
> **"→ install what can be violated"** (Fig 10 :19)
> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"** (Fig 2 :41)

A mission statement, a code of ethics, a stakeholder charter, or a purpose clause is a convention: a shared meaning with no truth value. It is useful, and Fig 2 :41 says agreement about a shared meaning is the product, not a corruption. It becomes a different object when it decides an outcome. "We put customers first" used as a rule for resolving a specific wage dispute is a verdict wearing a convention's clothes, and no instrument can violate it because it is the instrument. The Business Roundtable statement is a declared commitment, not a grounded one; that is a description of its mode, not a criticism of it. The failure would be to treat the signing as evidence that the conflicts were settled.

Fig 10 :19 gives the replacement: install what can be violated. A commitment becomes checkable when a party can bring a case that it was breached and a seat can rule against the company.

**Refuter:** a convention that assigns a binding outcome in a named dispute, is not open to violation, and is nevertheless accepted as a convention by two frames with different evidence pools. That breaks the distinction F7 depends on.

### F8: The break is usually at vocabulary and objective

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :112-115 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In company terms, the usual failure is not that the firm cannot run a consultation; it is that it has no term for what the changed situation affords a party and cannot say what would count as progress for that party. More listening, more disclosure, and more committee time land above the break. F8 predicts that the highest-value diagnostic question is not "is this company ethical?" but "at which link does its chain currently stop, and was that measured?"

**Refuter:** a documented firm whose perception, vocabulary, and objective links all measure as working per party, and whose failure is located at planning. That falsifies "usually at the middle", though not the dependency ordering.

### F9: Description cost and action cost do not add

**Mode: `general` with a `specified` consequence for sustainability accounting. Domains D2, D3. Status: triangulated (Fig 12 and Fig 9, low overlap).**

> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds."** (Fig 12 :126)
> **"Summing them into one figure is the error this names, not the fix for it."** (Fig 12 :130)

A stakeholder scorecard is cheap to state and expensive to settle: a long list of indicators can be written quickly, and verifying each one against a ground costs a whole budget. Conversely, a single hard measurement, for example a wage floor or a discharge threshold, can be expensive to describe in the abstract and cheap to test. The weak-sustainability move, discounting future harm into a present number, sums the two currencies into one figure, which is the named error. The specified consequence: a governance arrangement must report both what it costs to describe and what it costs to verify, and must not blend them.

**Refuter:** a single unit that prices both the complexity of a governance arrangement and the cost of settling each of its claims, with prospective predictions that neither component alone makes. That would collapse the two currencies.

### F10: Prestige is not a verdict, and independence is bought for the cost of being wrong

**Mode: `general`. Status: framework-internal (essay + figure, maximal overlap for the essay, one witness).**

> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)

From *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A well-known certifier, a respected board, or a high ESG rating gives a governance claim a budget to be tried. It does not settle whether a party's residual closed. The same essay notes that the author arrived at a governance structure matching Ostrom's *"from bacteria and biology and game agents"* while Ostrom arrived *"from committees and fisheries and forests"*, and that *"the structures matched"* with different paper trails. That is exactly the convergent-derivation case of Fig 8 :50-52: it counts as corroboration only because the records of origin differ, not because the conclusions agree.

**Refuter:** a verdict that is settled by the reputation of the certifier and remains stable when the certifier is replaced by an unknown, a ground reading showing the reputation and the outcome move together. That breaks the prestige/action separation.

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per claimant party, never an aggregate score | general | Fig 1 :19, :22 | figure-derived |
| The anchor must not update on any party's report | general | Fig 2 :29, :30, :33 | figure-derived |
| Stakeholder agreement is triangulation only when each party ranges against that anchor | specified | Fig 2 :35, :45; Fig 7 :35 | triangulated F2 |
| No standing priority order survives a change of residual | specified | Fig 11 :49-51 | triangulated F3 |
| The five parties form a union, not a list | general | Fig 9 :54, :55, :57 | figure-derived |
| The resolving seat must be outside the slice graded, and able to refuse | specified | Fig 10 :42, :85-86, :91; Operators :58 | triangulated F6 |
| A convention that decides an outcome is no longer a convention | specified | Fig 10 :47, :49 | triangulated F7 |
| The break is usually at vocabulary and objective | specified | Fig 3 :19, :27, :29 | single-source F8 |
| Description cost and action cost stay separate | general | Fig 12 :125, :126, :130 | triangulated F9 |
| Which party prevails in a named dispute | not stated | none | gap: framework returns a shape, not a name |
| A present residual for future generations | not stated | Fig 6 :34-35; Fig 13 :134 | gap of the unreachable kind; an instrument is owed |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A single aggregate score predicts, prospectively and per named party, which party's residual will grow next (breaks F1, Fig 1 :19, :22).
2. A conflict is settled by negotiation against a reference that moves when parties push on it, and the allocation persists across three independent non-updating measurements (breaks F2, Fig 2 :29, :33, :35).
3. A standing priority order over the five parties predicts, without re-reading the residual, which claim prevails across three categorically different conflicts (breaks F3, Fig 11 :51).
4. A single lever restores all four conditions in all four failure types and leaves no categorically different residue (breaks F4, Fig 9 :57).
5. A repeatable, non-updating instrument returns a per-decision residual for people not yet born and is accepted by two frames with different evidence pools (narrows F5's `gap`).
6. A seat inside the slice it grades, with an undeclared interest in the reading and no available refusal, produces outcomes stable across three non-updating measurements (breaks F6, Fig 10 :85-86).
7. A convention that assigns a binding outcome, is not open to violation, is still accepted as a convention by two low-overlap frames (breaks F7, Fig 10 :47).
8. Fig 13's six terms are derived from five of them, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a non-updating measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of corporate purpose (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the party residuals separate in every report. A blended "stakeholder score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. For each dispute, name the reference that settles it and show that it does not move when a party pushes (Fig 2 :29, :30).
4. Install a refusal seat outside the measured parties, declare its unavoidable interest in the outcome, and disqualify any interest in the reading (Fig 10 :58-60, :85-86).
5. Treat a mission or purpose statement as a convention, not a verdict; make it violable (Fig 10 :47, :19).
6. For future generations, report `unreached` and fund an instrument with a source gate and a shadow test. Do not invent a priority rank (Fig 6 :12-14, :34-35).
7. Use the business and ethics literature as a budget filter and as one corroborating witness, not as the verdict. Jensen, Friedman, the Business Roundtable, and the stakeholder salience literature share an evidence pool (Fig 2 :31, :40).
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name which party wins a specific conflict; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Recursive Self-Improvement Trap* and *The Library of Babel* (the latter carried from the exemplar's canonical mapping and marked as such; maximal overlap with the figures, no independent witness weight).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs F5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to map the five parties onto Fig 13's six physical terms | **Retracted, strain S1** | Only fit by renaming parties as kinds of space and energy. Re-census: Fig 13 governs the physical substrate, not a firm's claimant slots; it appears here only in the honest-stop role |
| Read "balance all stakeholders" as a legitimate union rather than an aggregate | **Narrowed** | A union keeps conditions separate (Fig 9 :57); a weighted score aggregates slots (Fig 1 :22). They are different objects, and only the first is figure-licensed |
| Treated the Business Roundtable statement as evidence that conflicts were resolved | **Retracted as a witness, kept as a convention** | A declared meaning is not a grounded one (Fig 10 :49); the statement is a mode-labelled commitment |
| Planned to name an ombudsman as "the" answer for future generations | **Retracted at record level** | The framework returns a shape. The ombudsman is a world-level binding onto the shape, recorded as such (Fig 9 :32) |
| Wanted to call Fig 11 :51 a `general` law about all organizations | **Narrowed to `specified`** | No ground measurement pays for the firm-level version here |
| Used the procedural-justice "voice" finding as if it measured outcome change | **Narrowed to mechanism-shape corroboration**, strain S4 kept open | Perceived fairness and a change in the party's residual are different quantities; Fig 4 :20 requires the anchor to be re-named at the new scale |
| F10 "convergent derivation with Ostrom" treated as two witnesses | **Narrowed to one witness** | The structures match and both records are in the framework author's essay; the independence is in Ostrom's field, not in this folder's evidence |
| F5 row for future generations | **Marked `gap` of the unreachable kind** | Not underivable in principle; unreachable at this budget with no proto-instrument (Fig 6 :34-35) |

**Strains sent to the log:** S1 (Fig 13 physical substrate vs claimant parties), resolved by re-census. S2 (Fig 2 non-updating anchor vs stakeholder preferences that do update), resolved into two objects: the habitat updates, the ground is what settles and does not (Fig 11 :73, Fig 2 :29-30). S3 (Fig 11 residual-relative valence vs a fixed list of parties to be heard), dissolved by re-census: which parties to hear is the habitat; which prevails is the binding; valence attaches to the residual, not the hearing. S4 (voice changes perceived fairness vs voice changes the outcome), live and narrowed, kept visible. No hidden strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of at least four conditions with different instruments.
2. **What is the anchor?** A non-updating outcome measurement per party, named in Fig 2 :29. Not consensus, not a score the firm produces.
3. **Can a party be ranked in advance?** No. Fig 11 :49-51; valence is relative to the residual.
4. **How are conflicts correctly settled?** Each party ranges against the anchor separately (Fig 2 :45); the seat that grades is outside the slice (Fig 10 :85-86) and can refuse (Operators :58).
5. **Why does engagement so often fail?** It books the same room (Fig 7 :36) or stops at the middle link where there is no instrument (Fig 3 :27).
6. **What about the unborn party?** Their residual does not arrive (Fig 10 :23); no edge exists to extend from (Fig 6 :34-35). What is owed is an imported instrument with provenance and a shadow test, not a name.
7. **What can be said at the stop?** A shape and eight refuters. Not which party wins, not a grounded answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a company resolves a conflict by keeping each claimant party's residual indexed and separate, ranging each against a measurement that does not move when that party pushes, and installing a refusal seat outside the slice being graded; it does not resolve the conflict by aggregating the parties into one objective, by negotiating them to agreement against a moving reference, or by applying a standing priority list. Because the parties overlap, the conditions form a union and one lever leaves the intersections standing. For future generations no residual currently registers, so the honest verdict is `unreached`: an instrument and a seat are owed, and no priority name is returned.** The four conditions are kept separate and never averaged. Which party prevails in a named dispute, and any numerical weighting of the five, are `gap` verdicts, not hidden answers. Mode `specified` on the governance claims, `general` on the structural shape, not `grounded`. No world source was allowed to flip a verdict; the one genuine world/world disagreement (shareholder primacy versus stakeholder commitment) was recorded as a contested standing list and returned to the census under F3. No unresolved strain remains after re-census except S4, which is named and narrowed.
