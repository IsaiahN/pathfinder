# Figure-grounded audit: HIS-0020, durable trust under acknowledged uncertainty and disagreement

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below is tagged. None is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*, read 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the institutional question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session; cite as `Fig N :line`. `THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources are secondary, were opened, and are recorded in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) - o'|` per slot s (Formula step 1; Symbols table, `R`). Mapping the question onto that notation:

- **Γ** is the institution's library: its methods, standards, panels, precedents, review procedures and inherited priors.
- **b** is what the institution believes about the domain it speaks for.
- **a** is what it does: issues a ruling, publishes a number, admits a gap, records a dissent, revises a standard.
- **o'** is what the ground returns: the measurement, the replicated result, the outcome in the world, the case that was actually decided.
- **s** is the claim or decision slot, indexed per claim and per time, never rolled into an institutional average.
- **The audience** is the party placing the bet that Γ tracks o'. Trust is that bet. It is a three-place relation (audience, institution, ground), not a property carried by the institution.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"The ground enters as the only metric."** (Fig 1 :23)

The phenomenon to explain is not trust level but **duration**: why does the audience's low-residual bet on an institution persist across many claims and many years even while the institution publicly marks what it does not know and records internal dissent? Call it `D_s`, the persistence of the audience's trust in slot s. Observed: some institutions keep it for decades, some lose it after a single failed ruling, and some keep it precisely by admitting failure early. A frame that predicts all admissions of uncertainty cost trust equally, or that a long track record simply carries trust forward, has a residual here.

State the residual as: *why does the audience's bet that an institution's readings track the ground remain small for decades in some slots while the institution openly states uncertainty and disagreement, and why does that bet collapse in others?* This is an effect description. It names no theory, no "transparency", no "credibility", no "reputation". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a conjunction of conditions that keep `D_s` large, plus an instrument that discriminates a failure of one condition from a failure of the other. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"you push on it, it is not an anchor."* Public trust scores, reputation rankings and an institution's own credibility metrics move when pushed; they are frame-internal instruments at best (Fig 1 :27). A viable anchor here is the per-claim record of whether what the institution issued was paid by the ground, later readable by someone who did not hold the institution's interior.

Note the trap in this very question. If "trust" is measured by asking audiences whether they trust the institution, we have used human judgment as the anchor. Fig 2 :36-38 permits that only when the question is constitutively about people: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* The question asks about durable trust, which is partly about people, so audience judgment is admissible for the audience half. But it is only an instrument for the other half, whether the institution's readings tracked the ground. The two must not be pooled. This is the first strain recorded in the audit (S1, resolved in section 6).

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation among institution Γ, action a, ground return o' and audience bet, indexed by claim slot and ordered by time. It is a sequence, so it carries an ordered bond, and "durable" is a comparison bond, a threshold relative to a lifetime rather than an absolute quantity. It is not symmetric: institution, audience and ground are not interchangeable.
- **Symmetry.** The ground is pinned and does not update (Fig 2 :33-34). The audience frames may update. The institution is the object being ranged, not the arbiter of its own ranging. A symmetry violation is exactly the failure Fig 2 :47 names: *"A ground listed as one of the parties has already become a frame."*
- **Scale.** Three scales are in view: a single claim settled or not (first order), an institution's accumulated record across claims (second order), and a field of institutions whose independent readings get compared (third order). The membrane between claim-level correctness and institution-level trust is lossy; a round-trip gap `R_T` is owed (Fig 4 :30). Correctness at one claim does not compose directly into institutional trust; something is lost in the carry, and the record of which claim paid is what lets us measure the loss.

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The claim loop** (one claim, one frame) | assessors, evidence, the issued claim | residual per claim, settlement | yes: the ground for that claim, "a measurement, an experiment, a counter, a market, a patient outcome" (Fig 2 :29) | admitted |
| **D2 The verifier / audience seat** (who may place the bet) | peer readers, auditors, affected people, the public | agreement versus residual | yes: the ground, never agreement (Fig 2 :45, Fig 10 :86) | admitted |
| **D3 The institutional room chain** (across claims and years) | successive panels, committees, review boards, editors | handoff fidelity and ground pressure (Fig 7 :37-39) | yes: the ground's vote through selection between rooms (Fig 7 :35) | admitted |
| **D4 The disagreement compound** (multiple independent frames) | frames whose closures differ | independence; convergence versus common-pool correlation | yes: one pinned ground each frame ranges against separately (Fig 2 :46) | admitted |
| **X1 "Trust as institutional standing"** | the institution's name, its prestige | reputation | **no** anchor independent of what the institution itself produces; Fig 1 :26-27 calls credibility accrued frame-internal | not a domain yet |
| **X2 "Trust as headcount or majority opinion"** | the crowd, the signatories, the survey respondents | agreement | measurable, but it is agreement, already inside D2; the ground is not a party or a tie-breaker (Fig 2 :46-47) | absorbed into D2 |

X1 fails the anchor test and is excluded before any figure line is applied to it. That is a structural exclusion, not a claim that reputation never correlates with good work. X2 is not a second domain: counting agreement is a quantity D2 already produces, and Fig 2 :41 says such agreement is *"efficient for a convention"*, not a verdict about the world.

### 1.3 Partition or union

D1 and D3 overlap: the claim loop is inside the institutional chain, so their overlap is a compound with its own loop. D2 and D4 overlap: independence is exercised inside the verifier seat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **(C1)** the institution keeps its channel to the ground reachable and the ground unpinned-by-opinion, and **(C2)** the disagreement it hosts comes from frames that are genuinely independent rather than one pool speaking. An institution failing only C1 (it has independent critics but no ground contact, so the critics merely argue) and one failing only C2 (it has measurements but all its readers come from one pool) are not different degrees of one failure. They need different instruments. This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

A third condition is separable and is not optional: **(C3)** a wrong ruling must remain correctable, which requires the record to carry provenance (Fig 10 :62-66). An institution with C1 and C2 but no C3 can find its errors and still be unable to correct them.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the institution read the ground's response at all?) → 2 vocabulary (does it have terms in which uncertainty and disagreement are statable?) → 3 objective (what would count as a failure, written down before the run?) → 4 planning (which room is summoned next?) → 5 learn and carry (what is recorded so a later reader can locate the error?).

The middle link is the one with no instrument. Fig 10 :14-17 is the governing passage: *"a disagreement nothing can state"*, *"is not yet a defect"*, *"the convention does not fix the bug"*, *"it makes the bug statable"*. Until uncertainty is statable, no amount of planning reaches it. The same figure warns *"a declared meaning is not a grounded one"* (Fig 10 :18) and gives the instruction *"→ install what can be violated"* (Fig 10 :19). So the dependency is: make the failure statable and violable before you make any promise about trust.

### 1.5 Strain test applied during the census

An early attempt to read the whole question through Fig 13's six-term physical substrate only fit by calling an institution a "structure" and trust a "gradient". That is a strain. Fig 13 governs the physical substrate, not an institution's Γ, and the re-census sends it to the honest-stop role only (section 7, strain S2). No figure needed a strain after re-census except the two named in section 6.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; credibility accrued is frame-internal | governs how trust is indexed and what may not score it |
| 2 The Ground | anchor, independence, triangulation versus negotiation, the anchor as non-party | decisive for C1 and C2 |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | methods cross, head starts come down, `R_T` | governs claim-to-institution carry |
| 5 Mint Pipeline | guards as product; settlement; "nothing new here" | governs whether an admission of uncertainty is an addition or a recording |
| 6 Closure / Reachability | import the only operator that moves the wall; peer import debited against independence | governs when disagreement adds reach and when it is just rotation |
| 7 Room Chain | same closure handed along; selection between rooms | decisive for durability as a chain of handoffs |
| 8 Union Surplus | idempotence; provenance; independence read twice | governs triangulation and the source rules |
| 9 Leave / Arrive | union versus partition; describe residual first; filters not witnesses | governs unbundling and the honest stop |
| 10 Ground Maintainer | disqualifiability, declared stake, unauthored pool, correctable provenance, reputation | decisive for institutions specifically |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | governs the false location of trust in the institution alone |
| 12 The Bond | arrangement is substance; a goal is a comparison | governs why the same charter yields different institutions |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest stop and the shape-not-a-name limit |
| Operators and Symbols | `R`, `Γ`, `⋛` as threshold comparison | governs "durable" as a threshold, not an absolute |
| Seat Map :163, :171, :283, :287 | correlation, stakes, rooms, pre-registered falsifier | governs outreach and the design instrument |

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about institutions, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Trust is a relation to a ground, not a self-issued credential

**Mode: `general` structural, `specified` for institutions. Domains D1, D2. Status: triangulated (Fig 1 and Fig 2, low overlap: frame-internal scoring versus anchor rule).**

> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)

An institution that cites its own trust score, its own prestige or its own history as the reason it should be trusted is scoring itself with a quantity it produces. The 2019 review by van der Bles and colleagues names the same asymmetry from a different field: introducing uncertainty reduces trust in the *number* but not necessarily in the *messenger*, so the two objects must be separated. That is a world witness, not a figure line, and it corroborates rather than decides.

**Refuter:** a documented case in which an institution's audience trust persists across a measured loss of ground contact, with no new independent witness entering and with the trust demonstrably not derived from a shared evidence pool. If that is reliably observed, the claim that durability requires ground contact is false.

### F2: Disagreement is the raw material of triangulation, but only under independence

**Mode: `general` for the rule, `specified` for institutions. Domains D2, D4. Status: triangulated (Fig 2, Fig 8 and Fig 10, three distinct roles: anchor rule, surplus rule, seat's view of agreement).**

> **"Independence, between two frames, is how little they draw on the same evidence."** (Fig 2 :31)
> **"is what makes agreement mean something."** (Fig 2 :32)
> **"The anchor is not a third party to the disagreement and it is not the tie-breaker in a vote. Each frame is corrected by it separately, and what makes the correction sound is that neither frame can move it."** (Fig 2 :46)
> **"a disagreement nothing can state"** (Fig 10 :14) and **"is not yet a defect"** (Fig 10 :15)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)

Disagreement is not a defect to be managed down. It is what makes a correction possible, provided the disagreeing frames draw on different evidence and range against a ground that neither can move. Without independence, disagreement is either coherent drift (no anchor, each updates on the others) or a common cause (one pool, two names). Fig 2 :19-21 gives both collapse modes: *"they never talk, and still agree"* and *"so the agreement is the pool talking, not two frames confirming each other"*.

World corroboration at low overlap: Oreskes 2019, in *Why Trust Science?*, argues that reliability comes from the *"collective or social process of critical scrutiny"* and that the *"social and institutional character"* of vetting ensures no one person's biases control. That is a history-of-science witness for the mechanism, and it is in the same field as the question, not the framework's pool. A 2026 meta-analysis by Dries and colleagues finds that *"Uncertainty communication neither systematically undermined nor enhanced trust"* across 28 experiments, which corroborates the claim that acknowledging uncertainty is not automatically a trust cost, while leaving the independence condition untested by those experiments.

**Refuter:** an institution hosting demonstrably independent disagreement against a pinned ground whose rulings are nonetheless no more ground-accurate, over many claims, than a matched institution that suppresses disagreement. If found reliably, the triangulation benefit is falsified and F2 weakens to a `general` structural claim with no institutional consequence.

### F3: Engineered agreement is disqualifying for a verdict and cannot anchor trust

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 2, Fig 7 and Seat Map :163, three separate rules).**

> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"** (Fig 2 :41)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)
> **"same closure, handed along;"** (Fig 7 :12) and **"agreement compounds, evidence does not"** (Fig 7 :13)
> Seat Map :163: **"High correlation is disqualifying for a verdict and efficient for a convention."**

A verifier panel appointed because it is likely to agree, a peer-review pool that shares one school, and a public consultation drawing on one media diet are conventions, not witnesses. They can produce shared meaning, which Fig 2 :41 says is legitimate, but they cannot corroborate a claim about the world. Crucially, this does not mean disagreement is to be manufactured for its own sake. Fig 10 :73-74 requires the pool to be *"unauthored first and examined second"*: *"A candidate set chosen by a participant is an authored room however well the selection is reasoned"*.

The PNAS Nexus 2025 study by Dries and colleagues supplies a low-overlap world witness for the valence of correlation: the more consistent the communicated evidence is with a reader's prior belief, the less that reader trusts the information and source when uncertainty is communicated. Correlation has valence, exactly as Fig 2 :39 says.

**Refuter:** a panel selected by the institution itself, with independence measured as low, that nonetheless issues ground-settled corrections at a rate matching unauthored panels across multiple questions and years. If authored selection routinely yields grounded corrections, the authorship disqualification weakens.

### F4: Durability is a chain of differing rooms, not the persistence of one room

**Mode: `specified`. Domain D3. Status: triangulated (Fig 7 and Fig 10, room chain plus room composition rule).**

> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37), **"the bracket's fidelity across the handoff"** (Fig 7 :38), **"the ground's pressure on the room"** (Fig 7 :39)
> **"When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom."** (Fig 10 :72)

An institution's decades-long record is a chain of handoffs between panels, methods and reader communities. It stays live when each next room differs from the last and is selected against the residual the last one surfaced. It goes through the motions when the same closure is handed along: agreement compounds while evidence does not. The failure is not that the reviewers are weak; it is that the chain stopped travelling (Fig 7 :42).

The high-reliability-organisation literature is an independent witness from safety engineering. The AHRQ PSNet primer (updated 2024) says of organisations that sustain reliable performance in high-hazard domains: *"uncertainty is endemic, and no two accidents are exactly alike"*, and lists *"preoccupation with failure; reluctance to simplify explanations for operations, successes, and failures; sensitivity to operations...; deference to frontline expertise; and commitment to resilience."* Weick and Sutcliffe's formulation, quoted in Hopkins 2007, is *"The signature of an HRO is not that it is error-free, but that errors don't disable it."* That is F4 plus F5 in an engineering vocabulary, with no shared evidence pool with the figures.

**Refuter:** an institution that keeps the same reviewer pool, the same charter and the same decision rules across two decades while its residuals keep being settled by the ground, with no import of a differing frame. Under Fig 7 :36 that should be impossible; if observed, F4's necessity claim is false.

### F5: The institution must be disqualifiable, its stake declared, and its reputation barred from the ground

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 10 and Seat Map :171, seat rules plus stakes rule; low topical overlap with Fig 11 valence).**

> **"A verifier that can reconstruct the claim cannot verify it."** (Fig 10 :42)
> **"Soundness requires the checker to be unable to produce what it is checking."** (Fig 10 :43)
> **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."** (Fig 10 :59)
> **"Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged."** (Fig 10 :60)
> **"And standing is a stake that survives the outcome it was earned on."** (Fig 10 :61)
> **"Outside the slice being graded. Whoever is measured by a reading cannot own it."** (Fig 10 :86)
> **"A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified."** (Fig 10 :93)

This is the institutional core. The conditions under which a checker can actually check are conditions of inability: it must not be able to produce what it is checking, must not own the reading by which it is graded, and must not gain from which value the ground returns. An institution earns durable trust by submitting to those conditions, by declaring the stake it cannot remove, and by accepting that the standing it earned earlier is itself a stake that survives the outcome. The alternative, a keeper protecting the ground's reputation, is not trust but the disqualification named in Fig 10 :93.

From *The Recursive Self-Improvement Trap* (framework-internal, canonical use only): *"Prestige must never be allowed to validate an action directly"* and *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* This is the essay form of Fig 10 :93 and Seat Map :171. It is not an independent witness.

**Refuter:** an institution whose keeper's reputation is shown to improve the ground-settlement rate of its rulings without any change in who is allowed to refuse those rulings. If reputation directly improves accuracy with no change in disqualifiability, Fig 10 :93 is wrong as applied to institutions.

### F6: Provenance shows legitimacy, not correctness, and must keep the error findable

**Mode: `general`. Domains D1, D3. Status: triangulated (Fig 10 and Fig 8, record rule versus convergence/import record).**

> **"A ruling carries provenance like an atom."** (Fig 10 :62)
> **"Not so the ruling can be appealed, but so a later reader can locate the error rather than"** (Fig 10 :63)
> **"Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record."** (Fig 10 :65)
> **"A perfectly provenanced wrong ruling is an unimpeachable record of nothing, and it is still to be corrected."** (Fig 10 :65-66)
> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"** (Fig 8 :51)

A clean process is not a true result. What the record buys is locateability: a later reader can find where the error entered. That is a different good from legitimacy and must not be confused with it. An institution that publishes its reasoning, dissent and dates without preserving the ground reading that settled each claim has produced an audit trail that cannot correct anything. Oreskes's account of verification practices (*"peer review, reproduction of experiments"*, NYRB 2019) is a world-level corroboration of the same shape, from history of science.

**Refuter:** a comparison in which institutions with complete provenance systematically resist correction longer than matched institutions without it, with ground settlement measured. That would break the claim that the record enables correction.

### F7: Stating uncertainty is not a trust cost, but format and object matter

**Mode: `specified`. Domain D1 with D2. Status: triangulated across fields for the world half (van der Bles 2019 and Dries 2026), single-source within the figures (Fig 10 :16-19).**

> **"the convention does not fix the bug"** (Fig 10 :16) and **"it makes the bug statable"** (Fig 10 :17)
> **"a declared meaning is not a grounded one"** (Fig 10 :18)
> **"→ install what can be violated"** (Fig 10 :19)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)

The figures require the gap to be statable and violable, not hidden. They do not predict an audience's response to different wordings; that is a world question, and the world sources split usefully. van der Bles et al. 2019 conclude that *"we know that stating uncertainty does not necessarily undermine trust"* while separating trust in numbers from trust in messenger. Dries et al. 2026 find no overall effect across 28 experiments: *"Uncertainty communication neither systematically undermined nor enhanced trust."* Schuster et al. 2026, a systematic review of 24 articles, report the opposite emphasis: *"communicating scientific uncertainties generally has a positive impact on trust in science, whereas downplaying uncertainty may foster distrust."* Guo, Liu and Chen 2025 find different signs for different objects, with epistemic uncertainty slightly *"positive... on credibility perception"* and consensus uncertainty slightly negative on attitudes.

That disagreement between reviews is not noise to be averaged. It is a union of different conditions with different instruments: trust in a source, trust in a field, and response to disagreement as opposed to numeric range (Fig 9 :54-57). Fig 2 :40 warns that agreement from one pool is one witness. The reviews partly share a literature pool, so their convergence or divergence carries limited independent weight. The figure verdict is unchanged: statability and violability are required; the audience response is measured, not assumed.

**Refuter:** a set of well-powered studies in which an unquantified admission of uncertainty reliably increases both trust in the number and trust in the source relative to a quantified range, across topics and audiences. That would falsify the world half of F7 (the figure half stands), and is recorded as a strain if it fires.

### F8: Which specific institution earns trust is a `gap`

**Mode: `general`. Domains all. Status: figure-governed.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."** (Fig 9 :44)
> **"It cannot say which primitive is missing, because naming it would mean already holding it."** (Fig 13 :135)
> **"The answer is unreached until a better instrument exists."** (*The Hard Problem is About Source*, essay, framework-internal)

No figure line names the policy, charter or governance rule that will earn trust in a given field. After a genuine re-census, what is missing is a source-discriminating instrument: a way to tell which ruling was actually settled by which ground reading, rather than a reading of the institution's output that cannot comment on its source. The essays' metamerism example is the exact analogue: an instrument that reads green *"cannot comment on the source"*. Calling a given governance design "the trustworthy one" from the trust reading alone would repeat that error. Declare `gap`. Unreachable is a verdict, not a silence.

| claim | mode | figure | status |
|---|---|---|---|
| R is per claim, never an institutional average | general | Fig 1 :19, :23 | figure-derived |
| The ground, not agreement, anchors trust | general | Fig 2 :29, :35, :45 | figure-derived, triangulated |
| Disagreement needs independence and a pinned ground | general / specified | Fig 2 :31-32, :46; Fig 8 :45 | triangulated F2 |
| Engineered agreement is a convention, not a verdict | general / specified | Fig 2 :40-42; Seat Map :163 | triangulated F3 |
| Durability is a chain of differing rooms | specified | Fig 7 :35-39; Fig 10 :72 | triangulated F4 |
| Disqualifiability and declared stake are load bearing | specified | Fig 10 :42-43, :59-61, :86, :93 | triangulated F5 |
| Provenance enables correction, not correctness | general | Fig 10 :62-66; Fig 8 :51 | triangulated F6 |
| Statability of uncertainty is required | general / specified | Fig 10 :16-19; Fig 13 :134 | figure half single-source, world half triangulated |
| Which named institution or policy is trustworthy | not stated | none | `gap`: shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach. Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. Audience trust persists across a measured loss of ground contact with no new independent witness and no shared-evidence-pool explanation (breaks F1).
2. Demonstrably independent disagreement against a pinned ground yields no better ground accuracy than suppressed disagreement across many claims (breaks F2).
3. An institution-selected, low-independence panel reliably produces ground-settled corrections at the same rate as unauthored panels (breaks F3).
4. The same reviewer pool and charter survive two decades while residuals keep being settled with no import of a differing frame (breaks F4).
5. Keeper reputation improves settlement rates without any change in who may refuse a ruling (breaks F5).
6. Complete provenance systematically delays correction relative to no provenance, with settlement measured (breaks F6).
7. A source-discriminating instrument is found that names which governance design earns trust from the trust reading alone (closes F8 and falsifies the `gap`).
8. A figure re-census shows the ground may update on audience opinion without collapsing into coherent drift (breaks Fig 2 :33-34 itself).

Until at least one of these is run and fails to fire, and until a per-claim ground record pays for the shape, no part of this solution may be upgraded to `grounded`.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of trust (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the two conditions C1 and C2 and the correction condition C3 separate in every report. A blended "trust score" is a pooled reading (Fig 10 :26, *"saturated metrics, pooled readings"*) and destroys the diagnostic.
3. Make uncertainty statable and violable before promising anything (Fig 10 :16-19). Publish what would count as a failure in advance.
4. Treat any list of institutional virtues as Γ, a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Use the trust literature as one corroborating witness and as a budget filter, not as the verdict. van der Bles, Dries, Schuster, Oreskes and Weick and Sutcliffe come from different pools, but the reviews partly overlap each other (Fig 2 :40).
6. Check who appointed the verifiers and what they draw on before counting their agreement (Fig 10 :73-74, Fig 2 :31).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name the governance design that wins; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources opened after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, the seat guide, and the two essays *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (both fetched 2026-11-23).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* It confirms the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage.
- The source essay confirms the simulated status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Treating audience trust scores as the anchor for the whole question | **Narrowed, strain S1** | Fig 2 :36-38 permits human judgment as anchor only when the question is constitutively about people. It is admissible for the audience half, an instrument only for the ground half. The two are not pooled |
| Attempted to govern institutional trust with Fig 13's six physical terms | **Retracted, strain S2** | Only fit by renaming a committee a structure and trust a gradient. Fig 13 governs the physical substrate, not an institution's Γ |
| Reading Dries 2026 and Schuster 2026 as one corroborating witness | **Narrowed** | They share a literature pool and differ in object (source trust versus trust in science). Fig 2 :40. Their divergence is unbundled in F7, not averaged |
| Calling F7 a figure-derived prediction about audience response | **Retracted at that level** | The figures require statability and violability; audience response is a world measurement. F7 now carries a figure half and a world half with separate modes |
| Calling the 28-study null result a proof that uncertainty never costs trust | **Retracted** | The meta-analysis itself notes most studies used fictitious communicators and that control conditions varied; Fig 9 :44 says searching and finding nothing proves nothing |
| Wanting to name a governance design as the answer | **Marked `gap`** | Fig 9 :32 and Fig 13 :135. The source-discriminating instrument is not held here |
| Using *The Recursive Self-Improvement Trap* as an independent witness for F5 | **Retracted as witness, kept as canonical reading** | Same author and evidence pool as the figures |
| F2 called "decisive" in an early draft | **Downgraded to triangulated** | Three figures with distinct roles, but one framework. Triangulation means low topical overlap here, not independent evidence pools |

**Strains sent to the log:** S1 (audience judgment as anchor for both halves), resolved by Fig 2 :36-38; S2 (Fig 13 applied to institutions), resolved by re-census. The divergence between the 2026 reviews is recorded as a union, not a strain against the figures. No unresolved figure strain remains after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the institutional split: it is a union of ground contact (C1), independence under disagreement (C2) and correctability (C3), each with its own instrument.
2. **What is the anchor?** The per-claim ground record, named by Fig 2 :29. Audience judgment is an instrument for the audience half only (Fig 2 :36-38).
3. **Is trust in the institution alone?** No. Fig 11 :39-40: capability is agent-and-habitat, and an improvement that does not change contact changes nothing. The analogue holds at the institutional scale with the anchor re-named.
4. **How is disagreement useful?** Only with independence and a pinned ground (Fig 2 :31-32, :46). Otherwise it is drift or one pool talking.
5. **What makes trust last?** A chain of differing rooms selected against the surfaced residual (Fig 7 :35-39), with imports from differing closures and a recorded stake (Fig 10 :59-61, :72).
6. **Why does a good standing turn bad?** Standing is a stake that survives the outcome it earned on (Fig 10 :61); the keeper who protects the ground's reputation is disqualified (Fig 10 :93); a catalyst can become spent when the residual changes (Fig 11 :49-51).
7. **What can be said at the stop?** A conjunction of conditions, three falsifiers and an instrument to build. Not a name of a policy, not a trust score, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

**The shape survives:** institutions earn durable trust while acknowledging uncertainty and disagreement when they (C1) keep a ground reachable that does not update on opinion, (C2) host disagreement from frames that are independent and range against that ground separately, and (C3) preserve a record in which a wrong ruling can be located and corrected, while declaring the stake they cannot remove and barring their own standing from settling what the ground returns. Uncertainty and disagreement are the mechanism's input, not its cost. The three conditions are kept separate and never averaged. Which specific institution or governance design satisfies them is a declared `gap`, not a hidden answer. Mode `specified`, ungrounded, candidate.

No world source flipped a verdict. The one genuine divergence, between two 2026 reviews of uncertainty communication, was returned to the census and unbundled by object (F7). After re-census, two strains were named and resolved, and none remains hidden. This remains a simulated derivation and cannot settle the question it reports on.
