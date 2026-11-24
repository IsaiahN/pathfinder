# Figure-grounded audit: how histories of scientific harm should inform current decisions

**Mode of this document: `specified`, not `grounded`.** It states what would have to be checked at the ground. `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap*, which was opened 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* The essay also says *"The catch is that the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources for figure lines:** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Every figure quote below is a substring of that file. World sources are listed in `10_source_ledger.csv` and were opened this session.

---

## 0. The residual in effect terms

A decision-maker holds a record of past scientific harms and must decide how to weight it when judging a current research claim. The decision has two named bad outcomes:

- **A, ignore the record.** The same failure recurs. The PHS study at Tuskegee withheld penicillin after it was standard therapy; the CDC's own page records that *"As part of the study, researchers did not collect informed consent from participants. They also did not offer treatment, even after it was easily available."* Ignoring that record is not neutrality, it is a refusal to range the current claim against a known failure.
- **B, treat the record as proof that all research is untrustworthy.** This buys safety by refusing everything, including the instruments and institutions that could discriminate the harmful case from the harmless one. It is a global verdict built from local evidence.

Stated as a gap: `R = |Gamma(b,a) - o'|` per slot (Formula step 1). The institution predicts `Gamma(b,a)` about its own research ("this protocol is safe and beneficial"). The historical record supplies `o'`: in some slots the prediction was false and someone was harmed. The question is how to carry that residual into a current decision without converting a per-slot error signal into a blanket refusal of the whole library.

**What an answer would look like, bound as an ordinary term before the run** (Formula "Direction": a frame cannot check the direction of its own question, so make the sought-for shape an ordinary term and let it accrue a residual). The sought-for shape is *a per-slot, provenance-bearing, independence-buying, stake-declared, habitat-enumerating rule for using a harm history as a scoped refusal rather than a global verdict*. Binding it now makes it refutable by the same test as everything else.

---

## 1. Domain census, before choosing any figure line

Describe `R` by arity, symmetry and scale, then one line per domain with actors, currency and anchor. No nameable anchor means it is not a domain yet.

**R by arity / symmetry / scale.**

- **Arity:** many slots. Each harm attaches to a specific claim, protocol, funding structure, institution and affected group, not to "science" as one object. The question as asked is a bundle of several questions, not one.
- **Symmetry:** the residual is asymmetric. Harm and benefit are not intrinsic properties of a research act; which one it is depends on the decision and on who bears the consequence. Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* There is no symmetric "research is trustworthy / untrustworthy" bit to flip.
- **Scale:** first order at the level of a claim and its protocol; second order at the level of a policy about research generally. Conflating the two is the scale error the audit tests below.

**One line per domain.**

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1, the historical record | historians, archives, harmed communities, documents, review panels | documented evidence of what happened, and its provenance | what actually occurred: a record, a withheld treatment, a patient outcome | yes, Fig 2 :29 names a measurement, an experiment, a counter, a patient outcome |
| D2, the current research decision | researchers, review boards, funders, journals, regulators | protocols, predictions, funding, claims | the ground for the current claim: an experiment, an outcome, a measurement | yes |
| D3, the verification and policy frame | decision-makers, expert checkers, affected communities, the public | agreement, residual, trust | the ground, never agreement | yes |

**Partition or union.** The three domains form a dependency chain, not an average and not a single blended object. D1 must characterize the harm before D2 can be checked; D2 must be checked before D3 can decide. Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* Within D2 the conditions are a union, not a partition: epistemic reliability, ethical acceptability, and fair distribution of benefits and burdens are three overlapping conditions, and a lever that clears one leaves the intersections standing. Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

**Order by dependency (Fig 3).** Perception (can the harm be seen at all, and by whom), then vocabulary (are there terms for the mechanism: informed consent, conflict of interest, publication bias, cascade), then objective (what counts as a safe and acceptable decision here), then planning (protocol, registration, independent review), then learn and carry (verify the method and carry it to the next decision). The middle link, having terms for what a situation affords and being able to say what counts as progress, is where chains break, and Fig 3 :27 says *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Harm histories are most useful precisely as instruments for that middle link.

---

## 2. Findings, one loop per domain, verdicts kept separate

### F1 (D1). A harm history is a scoped refusal, not a verdict on the library

Fig 5 :53: **"refuted: a term we hold is wrong; a term is owed that says so"**. Fig 5 :55: **"What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."** Operators table :57: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*.

A refusal is the eighth operator, negation, and it acts on one operand. It does not join two, and it does not join all. The Tuskegee finding refuses the claim that this study was ethically acceptable; it does not refuse the claim that penicillin treats syphilis. Treating all research as untrustworthy is applying a unary operator to the entire library, which is a different move and is not licensed by the operator table.

**Verdict: `triangulated`** (Fig 5 amendment and the Operators table, two figures with low overlap: one is the mint pipeline, the other is the operator census). **Mode: `general`** for the operator claim, `specified` for its application to a harm record. **Refuter:** show a figure line that licenses a negation over the whole library rather than a single term, or show that a harm record cannot be expressed as a refusal of a specific claim without refusing every claim alongside it.

### F2 (D1). Provenance locates the error; it is not a universal warranty

Fig 10 :62: **"A ruling carries provenance like an atom."** Fig 10 :65: **"Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record."**

A harm history is a ruling with provenance. Its authority over the specific case comes from the ground (the men were not treated, they died), not from the cleanliness of the archive. The same rule cuts the other way: a well documented institutional self-examination is still not the ground. An institution that judges its own safety is a frame that has entered the anchor position.

**Verdict: `triangulated`** (Fig 10 provenance rule and Fig 2 :33-34 anchor rule). **Mode: `general`.** **Refuter:** find a case in which provenance alone settled whether a harm occurred, with no ground reading available.

### F3 (D2). Aggregate the residual and the signal disappears

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

This is the direct figure answer to the "without treating all research as inherently untrustworthy" clause. Blanket distrust takes a residual that is indexed by slot (this protocol, this institution, this funding source, this claim) and collapses it into one global number. The global number has apparent mass and no locating power. It cannot say where to look next, which is exactly what Fig 1 says the slot index is for. A global verdict of "research is untrustworthy" is the aggregation error wearing a cautious costume.

**Verdict: `triangulated`** (Fig 1 slot indexing and Fig 9 union/partition split). **Mode: `general` for the rule, `specified` for the claim that blanket distrust is this error.** **Refuter:** show that the per-slot residual can be averaged into a global trust verdict without losing the signal that says where to look.

### F4 (D2). Each current claim ranges against its own ground

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."** Fig 2 :46: **"Each frame is corrected by it separately, and what makes the correction sound is that neither frame can move it."**

The harm history is a prior that raises the required independence for a claim; it is not a substitute for checking the claim. "Is this result physically correct" has a ground (experiment, replication, measurement). "Is this procedure acceptable to the people it affects" has a different ground (Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* Human judgment is the right anchor for a question about people). Collapsing the two is the category error that produces both blind trust and blanket distrust.

**Strain handled by re-census, not smoothed.** Fig 2 :37-38 says human judgment is *"only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* Applied carelessly this seems to say affected communities are unreliable. Re-census: the figures govern two different questions. On the ethics question affected judgment is the anchor, because the question is constitutively about people. On the epistemic question it is an instrument, fallible on axes it does not measure. Different objects, so no strain after re-census.

**Verdict: `triangulated`** (Fig 2 anchor definition and Fig 9 split rule). **Mode: `specified`.** **Refuter:** show a current decision for which no ground exists on either axis, so per-slot ranging cannot be performed at all; that would move the verdict toward `unreachable` for that slot, not toward blanket distrust.

### F5 (D2). Buy independence where the harm record shows corruption

Fig 2 :39: **"Correlation has valence."** Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*. Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

Harm histories are unusually good instruments for finding where independence was corrupted. The Tuskegee record shows researchers preventing subjects from reaching treatment programs available to others, and the Oreskes and Conway record shows a small group manufacturing doubt across tobacco and climate issues (Wikipedia, *Naomi Oreskes*, 2026, opened 2026-11-23). The policy response is to buy independence at precisely those joints: separate funders, separate review, affected-community participation, registered protocols. It is not to discount every result.

Fig 2 :33-34 adds the failure mode: **"The anchor must not update."** If the same institution supplies both the claim and the judgment that the claim is safe, the anchor has become a frame and *"everything drifts together, and the drift is coherent, which is why nobody notices."* Fig 10 :93: *"A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified."*

**Verdict: `triangulated`** (Fig 2 correlation valence and Fig 8 independence surplus). **Mode: `specified`.** **Refuter:** a controlled case where buying additional independence at the corroded joint made the decision worse at equal cost, with no other factor changed.

### F6 (D3). Agreement is not the anchor; do not select checkers for agreement

Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

A public conversation composed only of people already persuaded that research is harmful is a room of mirrors. So is one composed only of institutional defenders. The next room must differ from the last and match the residual it surfaced (Fig 7 :36). Checkers should be selected for ground contact and a different closure, not for likely agreement.

**Verdict: `triangulated`** (Fig 7 and Fig 2). **Mode: `general`.** **Refuter:** show that a frame selected for likely agreement can still supply an independent bearing on the same ground, with the shared evidence pool identified and shown not to be shared.

### F7 (D3). Declare the stake; the room changes with the question

Fig 10 :59: **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."** Fig 10 :60: **"Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged."** Fig 10 :71-72: *"The room composition is a function of the question. When the question changes, the room should change."*

Historians of harm, researchers, funders and affected communities all have stakes. None can be neutral. The rule is declaration, not absence. When the question changes from "is the result correct" to "was the process acceptable to those it affected," the room must change: it must include people who were in contact with the harm. Fig 10 :86: *"Outside the slice being graded. Whoever is measured by a reading cannot own it."*

**Verdict: `triangulated`** (Fig 10 stake rule and Fig 10 room rule, both in the same figure but on distinct mechanisms; world corroboration from the Belmont "one size fits all" critique, low overlap with the figures). **Mode: `general`.** **Refuter:** exhibit an arrangement in which the measured institution owns the reading of its own harm and the arrangement still produces a sound correction.

### F8 (union). The bundle must be unbundled before it is searched

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** Fig 9 :4-5, quoted above, says split rather than search.

The single question "should research be trusted given histories of harm" is a union of at least four conditions: whether the claim is correct, whether the process was acceptable, whether the benefits and burdens were justly distributed, and whether the checking was independent. A single lever (for example, more ethics training, or more scepticism) clears the region where only one condition holds and leaves the intersections standing. Fig 9 :59 names the larger value of this move: the residue becomes describable. From *The Library of Babel*, opened 2026-11-23: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

**Verdict: `triangulated`** (Fig 9 union rule and the essay's bundle diagnosis, different fields, low overlap). **Mode: `general`.** **Refuter:** show that the four conditions are in fact one condition under a single ground, so a single lever clears all intersections.

### F9 (scale). What crosses from a harm case to a policy must be a method, not a recording

Fig 4 :22: **"Only methods cross up. Only head starts come down."** Fig 4 :25: **"A recording carried upward looks like knowledge and is a description of one occasion."**

A list of historical harms is a recording, a description of occasions. What can legitimately travel upward is the method: how to find a corrupted anchor, how to enumerate the habitat of affected parties, how to buy independence in proportion to cost, how to keep every cut ranked and reversible. Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** A policy that leaps from Tuskegee to "all research is untrustworthy" has skipped the round trip.

**Verdict: `triangulated`** (Fig 4 membrane and Fig 9 describe-before-looking). **Mode: `general`.** **Refuter:** show a case where a recording of one occasion transferred correctly to a new domain without abstraction, and where the round-trip gap was zero.

### F10 (habitat). Harm histories widen the enumeration; they are not a reason to stop

Fig 11 :43: **"The habitat is enumerated, never composed."** Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** Fig 11 :52: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

This is the positive content of the answer. A harm record tells you that the first-order habitat was scoped too narrowly: who funded the study, who could have treated the subjects, who downstream inherited the false result, who was prevented from accessing care. Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."* tobacco industry science was a benefactor to a funding residual and a malfactor to a public-health residual. The valence is not carried by the actor.

Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."* Opting out of research does not remove the research habitat; it substitutes a different one with actors you did not choose. Blanket refusal is not a clean exit.

**Verdict: `triangulated`** (Fig 11 habitat rules and Fig 1 slot indexing). **Mode: `specified`.** **Refuter:** show a harm case in which the relevant consequence was confined to direct first-order contact and no cascade existed; the enumeration rule would then be unnecessary for that case, not wrong.

### F11 (stop). The framework returns a shape and then stops

Fig 9 :32: **"you get a kind of thing, never the answer itself."** Fig 13 :134: **"Unreachable is a verdict here, not a silence,"** Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

What survives is a shape for the policy: per-slot, provenance-bearing, independence-buying, stake-declared, habitat-enumerating, scoped-refusing. The framework does not name the specific instrument (mandatory registration, a particular consent form, a given review board composition) without a ground that settles it. From *They're Scanning Books When They Should Be Studying Nature*, opened 2026-11-23: *"Declaring the primitives does not make them neutral. It makes the choice visible, which is worth a great deal, because a visible choice can be revised and an emergent one cannot."*

**Verdict: `single-source` for the limit itself** (Fig 9 :32, with corroboration from the figures README, a different document). **Mode: `general`.** **Refuter:** derive a specific policy from the figures alone, with a ground reading, and show that no imported institutional fact entered.

---

## 3. Pre-registered refuter (written before the conclusion)

Per the standing instruction, a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A figure line permits aggregating per-slot residuals into a global verdict on all research without losing the signal that says where to look (breaks Fig 1 :19-22).
2. Research, or a research institution, is shown to carry intrinsic trustworthiness independent of the residual and of who bears the consequence (breaks Fig 11 :49-51).
3. A controlled case shows that buying independence in proportion to the cost of being wrong at a corroded joint made the decision worse at equal cost, with no other factor changed (breaks Fig 2 :42 at the ground).
4. A case is produced in which the harm record cannot be expressed as a refusal of a specific claim without refusing every claim in the library alongside it (breaks F1 and the operator census).

If any fires, the corresponding finding is withdrawn and the shape claim is narrowed to what remains. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with the split, not the verdict (F8). The question is a union. Unbundle it into correctness, acceptability, justice and independence before proposing any single lever.
2. Keep the residual indexed by slot (F3). Say which protocol, which institution, which funding relation, which affected group. Refuse to average.
3. Treat the harm record as a scoped negation with provenance (F1, F2). Name the term it refuses. Do not negate the library.
4. Buy independence where the record shows it was corrupted, and declare every stake that cannot be removed (F5, F7).
5. Carry methods upward, not recordings (F9). The transferable object is the checking procedure, not the list of past harms.
6. State the mode on every claim and keep the honest stop visible (F11). The framework returns a shape; the specific policy needs a ground.

---

## 5. Canonical usage check

Two documents were read after the findings were drafted and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. *"Indiscernibility is not identity."* This is why F11 is a limit and not a gap.
- `FRAMEWORK/figures/THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* And step 7's three questions are kept distinct: SEARCHED first, then INWARD, then OUTWARD. Which of the four unbundled conditions is at issue is a SEARCHED question for each slot; whether a policy instrument exists is INWARD; which other field holds a working method (independent review, registration, affected-community governance) is OUTWARD. Importing an institution as if it were a proof would be the budget error Fig 6 :24 names: *"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."*

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "histories of harm show research is untrustworthy" | **Refused as written.** It aggregates a per-slot residual into a global verdict, breaks Fig 1 :22, and applies a unary refusal to the whole library, breaks the operator census. |
| "the anchor must be impartial, so affected communities should not judge" | **Retracted.** Fig 2 :36 makes the anchor legitimate when the question is constitutively about it. Affected judgment is the anchor for acceptability and an instrument for correctness. The two questions are split, not averaged. |
| "Fig 2 :37-38 and Fig 2 :36 conflict" | **Not strained.** Re-census: one governs the ethics question, the other the epistemic question. Two objects, matching the canonical re-census rule. |
| "the framework can name the right policy" | **Refused.** Fig 9 :32 returns a kind of thing, never the answer. The specific instrument needs a ground. |
| "a global verdict would be more cautious" | **Refused.** Caution is not a ground. Fig 2 :42 prices independence in proportion to cost rather than maximising refusal. |
| "Tuskegee shows all institutional review is corrupt" | **Refused.** The record shows a specific corruption of the anchor at a specific place and time. The institutional response (Belmont Report, OHRP, IRBs) is itself part of the history and is reported in the world sources. |
| F1 scoped refusal | **Canonically confirmed.** Operators table distinguishes negation from subtraction; a refusal takes one operand. |
| F9 methods not recordings | **Canonically confirmed.** Fig 4 :22-25 and the canonical README's generator-versus-output distinction both carry it. |

---

## 6. Retraction and confirmation log, second pass

Two further corrections were made after the world sources were opened.

1. **The availability heuristic was initially going to be cited as evidence that the public is wrong to distrust research.** That use was dropped. Wikipedia's *Availability heuristic* page (opened 2026-11-23) says vivid, well reported events inflate perceived frequency. That is a claim about how a vivid harm history is *presented*, not about whether the harm was real. It corroborates the demand for per-slot enumeration (Fig 11 :44), not the refusal of distrust.
2. **Publication bias was initially going to be used as a second witness for "all research is corrupt."** That use was dropped. Wikipedia's *Publication bias* page (opened 2026-11-23) reports that significant results are about three times more likely to be published than null results, and that where bias is present published studies are no longer a representative sample. That is a specific mechanism at a specific joint, and it is exactly the kind of slot-indexed residual Fig 1 requires. Generalising it into a library-wide verdict would repeat the aggregation error the audit refuses.

Neither correction changes a verdict. Both make the per-slot rule stricter.
