# Figure-grounded audit: INS-0020, measuring state capacity apart from fair use

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the institutional question it reports on. See `05_what_shape_means.md` section 7.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md` and `FIGURES_README_canonical.md` opened this session. World sources are secondary, opened directly, and listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the government's belief about the citizen and the case, formed from its own records and inherited administrative categories.
- **a** is the administrative act: register, match, assess, levy, deliver, flag, deny, correct.
- **Γ(b,a)** is what the administrative library predicts will follow: the benefit will arrive, the tax will be owed, the identity match is correct, the record is reliable.
- **o′** is what actually happens to the person: the payment arrived or not, the debt was owed or not, the record was corrected or not, the decision was fair or arbitrary, a favour was dispensed.
- **s** is the citizen or case. R is indexed per citizen and per time, never aggregated into a national capacity score.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The question asks whether two quantities can be measured independently: a quantity C for the state's ability to bring about o′, and a quantity F for the government's willingness to use that ability fairly. The phenomenon to explain is not the level of C or F but whether an instrument that ranges C can leave F unread, and whether the two readings can be recombined without one masking the other.

State the residual as: *can an instrument return a low residual for "the state did the thing" while remaining silent on "the person was treated fairly," and can the two readings be kept separate per citizen-slot?* This is an effect description. It names no theory, no "bureaucracy," no "institution," no "oversight." Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be two conditions with different instruments, each with its own failure signature, plus a discriminator that decides which condition failed in a named case. Until bound, that shape predicts nothing and no check in the loop can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The anchor here is the per-case outcome and its correction record: did the payment arrive, was the debt owed, was the error corrected after challenge. That does not move when the agency changes its description of its own fairness. *"you push on it, it is not an anchor."* (Fig 2 :30). The disposition called willingness to use capacity fairly is **not** an anchor: it is a disposition, and it moves with self-report, framing, and the agency's own narrative. It becomes measurable only when bound to a refusal-and-correction record. This is the first structural result of the audit.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: administrative library Γ, action a, citizen outcome o′, indexed by slot s and ordered by time t. It carries an **ordered** bond, because a registration precedes an assessment and an assessment precedes a correction (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72), and a **comparison** bond for "fairly" (`⋛`, *"is it about which is larger, rather than both being present? Yes."*, Fig 12 :87; Operators table :48). Fairness is a threshold relation across cases, not a quantity produced by one case.
- **Symmetry.** Not symmetric. The citizen is an anchor-side party and the agency is a frame; they are not interchangeable. Fairness is asymmetric in time: a wrongly raised debt is not undone by reversing the data flow that raised it, which is why correction is a separate act. Fig 12 :125: *"A composition costs in two currencies, and they do not add."* A price in reach and a price in correction are held apart.
- **Scale.** Three scales are in view: the single case inside one agency (Fig 4 one-agent panel), the population of citizens and cases with *"something that ranks what they produce"* (Fig 4 :5), and the time channel across repeated decisions and appeals. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The administrative loop** (one agency, one case) | officials, routines, case files, the agency's Γ | actions and residual reduction per case | yes: the realized case outcome (payment arrived, correct assessment) | admitted |
| **D2 The citizen habitat** (population and case flow) | citizens, taxpayers, claimants, oversight bodies, courts, media | survival, benefit receipt, correction, contestability | yes: the citizen's outcome and the ability to challenge it | admitted |
| **D3 The administrative library** (composition inside the state) | registries, cadasters, identity systems, data links, assessment rules, staff | reach (what can be composed and done), |φ| cost | yes: settlement against the ground, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The checking seat and channel** (across cases and time) | auditors, ombudspersons, courts, human reviewers, statistical inspectors | contact, refusal, correction | yes: the ground that persists while the channel does not, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "Willingness" as a free-floating disposition inside the government** | the government's stated intentions | declared commitment | **no** anchor independent of decision patterns and corrections | not a domain yet |
| **X2 "National capacity score" as the object of the question** | index producers, rating agencies | composite rank, perception averages | perception data partly produced by frames inside the field (Fig 1 :27), so not an anchor | absorbed into D2 and D4 as a budget filter |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that intentions never matter. It says: until a disposition is bound to a record of decisions and refusals, there is nothing to range it against. X2 is not excluded but reclassified: a composite index is a measurement instrument with a budget use, not the ground. The Worldwide Governance Indicators page states the scores *"should be treated as estimates rather than definitive ratings of government performance,"* and the page's own critique records that the six indicators *"appear to say the same thing, with different words"* and *"do not discriminate usefully among different aspects of governance."* That is exactly the Fig 1 :22 and Fig 9 :60 failure, stated by the instrument's own documentation.

### 1.3 Partition or union

D1 and D3 overlap: the administrative library is inside the agency loop, so their overlap is a compound with its own loop. D2 and D4 overlap: challenge and correction are exercised inside the citizen habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) a maintained channel to a ground that settles each case from a source the measuring frame cannot move; (C2) a checking seat that cannot author what it checks and can refuse a use. A system failing only C1 and a system failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The case where both bind, an administratively effective data link that is also unfairly targeted, is *not* "high capacity with a fairness problem." It is a specific compound with its own loop (Fig 9 :57). This is the direct answer to the "measure separately" framing: the two readings are separable as conditions, not as two columns of one score.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the agency read the citizen's actual situation?) to 2 vocabulary (does Γ have terms for what the citizen affords, for example fluctuating income rather than stable employment?) to 3 objective (can it say what progress would count here, correct assessment rather than debt volume?) to 4 planning to 5 learn and carry (does a correction reach every institution that relied on the faulty record?). The middle link is the one with no instrument. Fig 12 :113 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most capacity-building effort lands above the break, where the measurements already exist (Fig 3 :29-30): more data, more linkage, more automation.

The ICTD Robodebt case is the world's illustration of this exact ordering. Data was plentiful (perception worked). What failed was the vocabulary for fluctuating earnings, and the objective that would have counted an unlawfully raised debt as a failure until an external Royal Commission supplied it. ICTD writes: *"Even accurate data can be misleading without context. A payment record shows money received but may say little about whether it represents business revenue, a loan, or a household transfer. Irregular earnings can also be misrepresented by assumptions designed around stable employment."*

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs indexing and the rejection of a single national score |
| 2 The Ground | per-case outcome as anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer from case to population |
| 5 Mint Pipeline | three guards as product; settlement; refutation as a fifth kind | governs what a fairness term must be |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs capacity renewal and the price of a wrong atom |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs repeated decisions and a corrected case as a handoff |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs the source rule for fairness evidence |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; checker non-access | decisive for the checking seat C2 |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1, D2 and the dual-use finding |
| 12 The Bond | isomer, functional group, catalyst, cycle, two currencies | governs the "same instruments, different use" claim |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop and `gap` |
| Operators table | ⋛ comparison; ¬ refutation is unary, not a bond | governs "fairly" as threshold and fairness as refusal |
| Symbols table | `R` is the aim; ground is the anchor | no `R` is stated by a national index |

Strain test applied during this census: an early attempt to apply Fig 13's six physical substrate terms directly to registries, cadasters and data links only fit by calling a cadaster a kind of space and an assessment rule a kind of gradient. That is a strain, so Fig 13 does **not** govern administrative capacity as a physical substrate. Re-census sent Fig 13 to the honest-stop role only, retaining its domain-agnostic closed-set line (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about state capacity measurement, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Capacity is a property of state-and-habitat, not an agency stock

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 4, low topical overlap: habitat vs membrane).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"Only the actors, the currency and the anchor change."** (Fig 4 :20)

"State capacity" as an internal stock of an agency is an agent-only reading. If the question is "can this state do X," the answer cannot be a property of the agency considered alone; it is a property of the agency in contact with the citizens, records and payment channels it acts on. The habit of answering with a list of administrative attributes (staff numbers, registries, digital systems, budget) is an agent-only improvement that may not change contact.

The world agrees at the level of definition. Suryanarayan, reporting the Lindvall/Teorell and Brambor et al. definition, writes that state capacity is *"the link between the intent of political leaders and outcomes"* and characterizes it as the strength of the *"causal relationship between policies and outcomes."* That is a relation, matching Fig 11 :39. Wikipedia's overview defines capacity functionally as *"the ability of a government to accomplish policy goals"* and immediately notes *"There are multiple dimensions of state capacity, as well as varied indicators of state capacity."* Both are in the same political-economy evidence pool, so they count as one witness, not two.

**Refuter:** a capacity intervention that leaves the per-case outcomes unchanged across a documented habitat substitution that removes or reverses the ground's payment for what the agency does (breaks Fig 11 :39-40).

### F2: A national capacity score aggregates away the live signal

**Mode: `general` with a `specified` consequence for measurement. Domains all. Status: triangulated (Fig 1 and Fig 9, low topical overlap: per-slot residual vs union splitting).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

Any answer that is a single national number, a composite governance index, a tax-to-GDP ratio, a "capacity score," has already averaged across citizen-slots and thrown away the only signal that says where fairness failed. The WGI critique is unusually candid: *"the six indexes do not discriminate usefully among different aspects of governance. Rather, each of the indexes whatever its label merely reflects perceptions of the quality of governance more broadly."* The World Bank's own current page says the scores *"should be treated as estimates rather than definitive ratings."* A composite index is therefore a budget filter: it decides what gets tried first. It is not a witness for the verdict (Fig 9 :60).

The `specified` consequence: a report that answers INS-0020 with "capacity rose by X while fairness fell by Y" at national level has committed the frame-internal scoring error. The two readings must be per citizen-slot and per case type before they are compared.

**Refuter:** a national index that prospectively predicts, for a named citizen-slot and a named case type, which case will be unfairly decided next, with no per-slot information fed into the prediction (breaks Fig 1 :19, :22 and the filter rule).

### F3: The same administrative atom changes valence with the residual

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low topical overlap: habitat relations vs composition structures).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)

This is the decisive mechanism against the "measure separately" premise. A registry, a cadastre, a data link, an identity matcher or an automated assessment has no fixed sign. Which residual you are trying to close decides whether it is a benefactor or a malfactor, and nothing in the instrument's description records which.

The strongest direct corroboration is Ogembo and Niesten 2026, opened in full: *"Data sharing can bring substantial benefits. It allows authorities to cross-check declarations, detect inconsistencies and simplify compliance, while also enabling taxpayers to spend less time supplying information already held by the state. But these connections can also determine which taxpayers are flagged for scrutiny or asked to explain a discrepancy."* They add the rule that would settle the question at the ground: *"Data availability should not be treated as proof that is use is lawful, appropriate, or sufficiently reliable."* The Robodebt case is their instance: data collected for one purpose was reused without safeguards, around 470,000 debts were wrongly raised, and a Royal Commission found the scheme *"neither fair nor legal."*

Suryanarayan's historical political economy supplies an independent-sounding but same-pool confirmation: *"legibility risks taxation but enables property rights."* Scott 1998 makes the general case that legibility enables both service and control, but Laitin's critique on the same Wikipedia page records that Scott's *"evidence is selective and eclectic, with only minimal attempts to weigh disconfirming evidence,"* so Scott is narrowed to mechanism-shape corroboration, not a measured instance (retraction R4 in section 6).

**Refuter:** an administrative atom whose measured valence is invariant across a documented change of the residual it is ranged against, with the same atoms, the same bond and a different ground. If no such case can be found anywhere, F3 weakens to `general`.

### F4: The two uses are isomers over a shared atom set, not two quantities

**Mode: `specified`. Domains D3, D4. Status: triangulated (Fig 12 and Fig 13, distinct roles: bond-level arrangement vs closed set).**

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :124)
> **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."** (Fig 12 :104)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

Write the fair-delivery arrangement and the targeted-extraction arrangement over the same administrative atom set: identity, registry, data link, assessment rule, reviewer, correction channel. At the strongest reading they are Fig 12's isomers: same atoms, different bond, different substance, with the difference invisible in an inventory of instruments. At the safer reading they are members of one functional group, differing in which qualifier occupies the slot. Either way, a list of administrative instruments cannot separate them. The difference is carried by the arrangement, not the ingredients.

**Refuter:** either use can be written without an atom the other requires, for example fair delivery with no identity system or targeted extraction with no reviewer. That kills the isomer claim and leaves the functional-group claim standing (falsifier repeated in `06_isomers_and_order.md`).

### F5: Fairness is a refusal, and it needs a checker that cannot author what it checks

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 5 / Operators table, low topical overlap: seat non-access vs refutation operator).**

> **"A verifier that can reconstruct the claim cannot verify it."** (Fig 10 :42)
> **"Soundness requires the checker to be unable to produce what it is checking."** (Fig 10 :43)
> **"A ruling carries provenance like an atom."** (Fig 10 :62)
> **"refuted: a term we hold is wrong; a term is owed that says so"** (Fig 5 :53)
> **"A vocabulary that cannot refuse can only accumulate."** (Fig 12 :140)

"Willingness to use capacity fairly" is not a disposition to be read off a minister's statements. It is a record of refusals by a seat outside the agency: a decision questioned, an error corrected, a use disallowed. A capacity metric produced by the agency scores itself with a quantity the agency also produces (Fig 1 :27). A vocabulary that can only accumulate throughput, registrations and collection totals cannot register the claim that one of its own decisions was wrong, because refutation is a negation and negation is not one of the bonds (Operators table :57-58, :73-74).

Ogembo and Niesten state the institutional shape in effect terms: *"Independent oversight bodies need the powers, expertise, and resources to examine whether those limits are respected. Where automated tools inform consequential decisions, meaningful human review requires staff who can question the output and reconsider the case."* And: *"A taxpayer should receive an intelligible explanation of a decision and be able to access the information needed to challenge it."* Robodebt supplies the failure of the shape: the scheme was settled not by its own metrics but by a Royal Commission, an external anchor.

**Refuter:** an agency's own capacity metric that prospectively predicts its own fairness failures, with no external checker, and that is confirmed at the per-case ground (breaks Fig 10 :42-43 and Fig 1 :27).

### F6: Quick failure of fair use is channel failure, not ground decay

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low topical overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

A system can keep delivering high throughput while its contact with what pays the citizen degrades: pooled readings, saturated metrics, dropped transients. The two factors of Fig 7 name the failure modes. Bracket fidelity asks whether the assessment still matches the citizen's actual situation; ground pressure asks whether the correction mechanism still bites. When either goes to zero, the chain runs in place.

ICTD reports the exact asymmetry: *"While the administration gains a wider view of the taxpayer, the taxpayer may see only the resulting demand. Resolving that error can require discovering which organisation supplied the information, obtaining the relevant records, and persuading several bodies to correct them, a major undertaking."* And: *"the burden of correcting errors falls unevenly. People with incomplete documentation, limited digital access, or fewer resources for professional advice may find it particularly difficult to contest a decision."* Channel decay is not evenly distributed; it falls hardest on the slots least able to correct the record. That is why a national average of "access to justice" hides the live signal.

**Refuter:** a documented case in which fair use is lost while bracket fidelity and ground pressure both measure high and are not declining (breaks Fig 7 :37-39).

### F7: The question is a union of two conditions; the break is usually at the middle link

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and Fig 3, different figures, with Fig 12 :113 corroborating from the same framework).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines for the union. The two conditions have different instruments:

- A C1 failure shows up as pooled readings, a bracket that no longer matches the citizen's situation, an assessment whose source the agency cannot move (Fig 10 :26, Fig 7 :38).
- A C2 failure shows up as a checker that authors what it checks, a vocabulary without negation, a correction that does not reach every institution that relied on the faulty record (Fig 10 :42-43, Fig 12 :140, Fig 5 :53).

A single lever, for example "add more data" or "publish more transparency statistics," clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). Fig 3 adds the ordering: the middle link, having terms for what the citizen's situation affords and saying what would count as a correct decision, is where the chain usually stops, and *"Optimising a link that already works cannot rescue one that does not."* (Fig 3 :19)

**Refuter:** one intervention that restores both conditions in both failure types with no categorically different residue left over (breaks the union reading, Fig 9 :57), or a documented case where perception, vocabulary and objective all measure as working and the failure is located at planning (breaks the middle-link claim).

### F8: World measurement practice already refuses the single-score framing, but cannot name the discriminator

**Mode: `general`. Status: figure-governed with one live strain, S4.**

The field's own measurement literature is aware of the problem but resolves it as a measurement-accuracy question. Wikipedia's state-capacity article reports *"multiple dimensions of state capacity, as well as varied indicators"* and cites Suryanarayan's own blog title asking whether the concept is *"a useful concept or meaningless pablum?"* Suryanarayan's answer is to decompose capacity into informational and infrastructural inputs: *"Effective taxation requires acquiring information about your subjects who they are, what they make, and how they hide their wealth and then a sophisticated infrastructure to shake them down and make them comply to taxes."* That is a decomposition of C1 inputs, useful as a filter for where to look. It does not supply a refusal operator or a non-authoring checker, so it does not close C2.

Principal-agent theory is the low-overlap economics corroborator for the shape of C2. The overview defines the problem as one where *"the principal cannot directly ensure that the agent is always acting in the principal's best interest"* and notes that the problem is *"particularly serious in the public sector."* It also names the measurement trap: *"targeting certain measurable variables may cause others to suffer,"* and *"the more difficult it is to completely specify and measure the variables on which reward is to be conditioned, the less likely that performance-related pay will be used."* This corroborates Fig 1 :27 and Fig 9 :60 from a different evidence pool: a metric the agent also produces cannot settle the verdict. It does not override the figure verdict; it is secondary.

The live strain S4: a checker outside the agency still has a stake, because *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"* (Fig 10 :59). Ombudspersons, courts and auditors have institutional interests and standing. The figures require the stake to be declared, not removed (Fig 10 :60). No figure line designs the specific accountability arrangement; that remains the price of the import and is recorded, not hidden.

### F9: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per citizen-slot, never a national average | general | Fig 1 :19, :22 | figure-derived |
| The per-case outcome and correction record are the anchor, not self-reported fairness | general | Fig 2 :29, :30 | figure-derived |
| Capacity is state-and-habitat, not an agency stock | specified | Fig 11 :39, :40 | triangulated F1 |
| A national composite score is a budget filter, not a witness | general plus specified method | Fig 1 :27, Fig 9 :60 | figure-derived |
| The same administrative atom changes valence with the residual | specified | Fig 11 :49-51, Fig 12 :119 | triangulated F3 |
| Fair and unfair uses are isomers over a shared atom set | specified | Fig 12 :117, :124 | triangulated F4 |
| Fairness is a refusal needing a non-authoring checker | specified | Fig 10 :42-43, Fig 5 :53, Fig 12 :140 | triangulated F5 |
| Quick loss of fair use is channel failure | specified | Fig 10 :24-29, Fig 7 :37-39 | triangulated F6 |
| The question is a union of two conditions with different instruments | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary and objective | specified | Fig 3 :19, :24, :27 | triangulated F7 |
| Which specific oversight body or audit design fills the checking seat | not stated | none | gap: the framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A capacity intervention leaves per-case outcomes unchanged across a habitat substitution that removes the ground's payment for what the agency does (breaks F1, Fig 11 :39-40).
2. A national composite score prospectively predicts, per named citizen-slot and case type, which case will be unfairly decided next, with no per-slot information fed in (breaks F2, Fig 1 :19, :22).
3. An administrative atom's measured valence is invariant across a documented change of residual with the same atoms and the same bond (breaks F3, Fig 11 :49-51).
4. Either the fair-delivery or the targeted-extraction use can be written without an atom the other requires (breaks the isomer claim at F4; the functional-group claim survives).
5. An agency's own capacity metric prospectively predicts its own fairness failures at the per-case ground with no external checker (breaks F5, Fig 10 :42-43).
6. Fair use is lost while bracket fidelity and ground pressure both measure high and non-declining (breaks F6, Fig 7 :37-39).
7. One intervention restores both conditions in both failure types and leaves no categorically different residue (breaks the union at F7, Fig 9 :57).
8. Fig 13's six terms are derived from five of them, or Fig 8's closure idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a per-case ground measurement has paid for the shape.

---

## 5. Recommendation

1. Refuse "measure them separately" as a partition. Deliver two conditions with different instruments, reported separately and never averaged (Fig 9 :54-57).
2. Keep the reading per citizen-slot and per case type. A single national capacity or fairness score is a pooled reading (Fig 1 :22) and destroys the diagnostic.
3. Bind "willingness" to a refusal-and-correction record before trying to measure it. An unbound disposition has no anchor (Fig 2 :29-30).
4. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
5. Treat any list of administrative instruments as Γ, that is, as a candidate library whose reach and valence must be tested against the ground, never as the answer (Fig 1 :27, Fig 11 :49-51).
6. Require a checker that cannot author what it checks, and declare its stake where it cannot be removed (Fig 10 :42-43, :59-60).
7. Use the measurement literature as a budget filter and as one corroborating witness, not as the verdict. The state-capacity sources share a pool; the principal-agent source is low overlap but still secondary (Fig 2 :31, :40; Fig 9 :60).
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name the oversight body that would fill the checking seat; the framework returns *"you get a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and three framework essays opened directly this session (*The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status and the independent-witness rule: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* And from *The Hard Problem is About Source*: *"the answer is unreached until a better instrument exists."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Treated "state capacity" as an anchor because it is widely measured | **Retracted, R1** | A composite index is a frame-internal instrument, not an anchor (Fig 1 :27, Fig 2 :29-30; WGI usage advisory). The anchor is the per-case outcome and correction record |
| Attempted to apply Fig 13's six physical terms to administrative capacity | **Retracted, strain S1** | Only fit by renaming a cadaster as space and a rule as gradient. Re-census: Fig 13 governs the honest-stop role only, via its closed-set line |
| Read "shape, not a name" as forbidding any mention of an oversight body | **Narrowed, R3** | The README's phrase governs a *missing* primitive. Naming an oversight body already in the institutional vocabulary is a binding, not an invented primitive. The gap survives because no source-discriminating instrument has been supplied (Fig 6 :23, Fig 8 :50) |
| Treated Scott 1998 as direct corroboration of dual use | **Narrowed, R4** | Laitin's methodological critique is on the same page. Scott is mechanism-shape corroboration only; ICTD and Robodebt carry the direct evidence |
| Read WGI "lack of conceptual clarity" as a figure conflict | **Confirmation, not conflict** | The critique *"do not discriminate usefully among different aspects of governance"* confirms Fig 1 :22 and Fig 9 :60 at the instrument level |
| Wanted to call F3 a `general` law of all bureaucracies | **Narrowed to `specified`** | No per-case ground measurement paid for the administrative version here |
| Used the WGI six dimensions as six independent witnesses | **Retracted as witnesses, kept as a filter** | They share a perception-data pool; WGI's own critique says they say the same thing with different words |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 11 and Fig 4 are two figures from one framework; low topical overlap is not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 physical substrate applied to administrative capacity), resolved by re-census; S2 (moving citizen preference versus a non-updating anchor), resolved by Fig 11 :73: *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."* The anchor is the per-case outcome, not preference. S3 (per-slot measurement versus comparable national indices), resolved as a budget and measurement tension via Fig 9 :60, not a figure conflict. S4 (the checker's stake cannot be removed) kept live and named, with Fig 10 :59-60 requiring declaration. No hidden strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57: it is a union of a maintained channel to a settling ground and a checking seat that can refuse. Neither is a value of one dial.
2. **What is the anchor?** The per-case outcome and correction record, named in Fig 2 :29 terms. Not self-reported fairness, not a national index, not preference (Fig 1 :27, Fig 11 :73).
3. **Is capacity in the agency alone?** No. Fig 11 :39-40. Capability is state-and-habitat.
4. **Why can't the same instrument read both?** Because the administrative atom's valence is relative to the residual (Fig 11 :49-51) and fair versus unfair uses are isomers over the same atoms (Fig 12 :117). The difference is in the bond, not the inventory.
5. **What makes fairness measurable at all?** A refusal by a checker that cannot author what it checks (Fig 10 :42-43), with a negation operator (Fig 5 :53, Fig 12 :140).
6. **Why does a capable system still fail quickly?** Channel decay, not ground decay (Fig 10 :24-26); either Fig 7 :37-39 factor going to zero; the break at the middle link (Fig 3 :24).
7. **What can be said at the stop?** Two conditions, separate instruments, per-slot indexing, a declared stake, and falsifiers. Not the name of the institution that fills the seat. *"Unreachable is a verdict here, not a silence,"* (Fig 13 :134, quoted as a substring) and *"So a search that finds nothing is never a proof of absence."* (Fig 8 :39).

---

## 8. Updated verdict

The shape survives: **state capacity cannot be measured separately from fair use as two independent readings of one instrument; the two are deliverable only as two conditions of one state-and-habitat relation, kept per citizen-slot and never averaged.** The first condition is a maintained channel to a ground that settles each case from a source the measuring frame cannot move. The second is a checking seat that cannot author what it checks and can refuse a use. The same administrative tools have no fixed valence; they change sign with the residual, so their fair and unfair arrangements are isomers over a shared atom set at the strongest reading and members of one functional group at the safest. Quick failure of fair use is channel failure, not ground decay. Which specific oversight body, statute or audit design fills the checking seat is a `gap`, reported as unreached rather than silence, because no source-discriminating instrument was supplied. Mode `specified` on the application, `general` on the two-condition shape. No world source flipped a figure verdict; the one genuine apparent conflict, WGI's measurement optimism versus the critique, was dissolved at the instrument level. Three strains resolved by re-census, one live strain declared.
