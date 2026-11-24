# Figure-grounded audit: are reasoning strategies setting-dependent?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The author's own rule applies: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The local verbatim extract `FRAMEWORK\reference\03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, the exemplar's essays file, plus the public sources opened on 2026-11-22 and recorded in `10_source_ledger.csv`.

---

## 0. The question as residual, stated before any figure is chosen

> Are some reasoning strategies more common in particular institutional settings, such as markets, schools, or courts?

Restated in effect terms. Let `S` be a reasoning strategy, `I` an institutional setting, and `f(S|I)` the frequency with which `S` is used and rewarded in `I`. The residual is the unexplained unevenness of `f` across `I`. Two readings:

- **A, conditional:** `f(S|I)` varies systematically with `I`, because each `I` has its own currency, its own anchor, and its own habitat of actors and rules. The same person reasons differently when the setting changes.
- **B, universal:** the forms of reasoning are the same everywhere; only the content differs. Observed differences in `f` are noise, test familiarity, or domain-specific surface.

What an answer would look like, bound as an ordinary term before the run (formula step "Direction"): a **shape** consisting of (i) which part of reasoning is invariant across settings, (ii) which part varies with the setting, and (iii) what would have to be measured in each setting to settle which strategies are actually common there. This shape is written down here so it can accrue a residual and be refused.

---

## 1. Domain census, before choosing any figure line

**R by arity, symmetry, scale.**

- **Arity:** at minimum two-place, `strategy × setting`. Three-place once the reasoner is included: `reasoner × strategy × setting`. The question is about a conditional distribution, not a single property of a person or of a strategy.
- **Symmetry:** asymmetric. Market, school, and court are not interchangeable roles, and the relation is directional (the setting selects and rewards), not an equivalence. The invariant part is the loop; the varying part is the mapping.
- **Scale:** spans two scales. The individual reasoner runs a one-agent loop; the institution is a population with a shared library and something that ranks what it produces. The boundary between them is the membrane, and it has a direction.

**One line per domain: actors, currency, anchor.** No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor |
|---|---|---|---|
| D1 Individual reasoning frame, one-agent scale | one reasoner; belief b, action a, observation o'; terms in Γ | residual R per slot, prediction against observation; description length of a mint | the ground, what actually happened. `Fig 1 :23` "The ground enters as the only metric." |
| D2 Institutional frame, population scale | many agents, a shared library, and a ranking. `Fig 4 :5` "many agents, a shared library, and something that ranks what they produce". In a market: price and clearing; in a court: verdict and precedent; in a school: grade and standard | what the ranking rewards; the institution's "currency" in `Fig 4 :20` | the institution's ground. `Fig 2 :36` "An anchor is legitimate when the question is constitutively about it." A market clears, a court answers the question constitutively about the case. |
| D3 Habitat and contact | roles, rules, evidence standards, instruments, other reasoners. `Fig 11 :45` "actors: what acts on it, and what it acts on" | contact; what the ground keeps | the ground, not the habitat. `Fig 11 :73` "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." |
| D4 Verification and outreach frame | expert readers, the claim, the institution being described | agreement and residual, held apart | the ground, never agreement. `Fig 2 :35` "Alignment is triangulation, not negotiation. A mirror cannot correct you." |

**Partition or union.** This is a **union compound**, not a partition. D2 is not three instances of one thing called "institution": markets, schools, and courts overlap in actors and rewards and cannot be cleanly separated. `Fig 9 :4-5` "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." `Fig 9 :57-58` "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." Unbundle before searching (Fig 9 :54). D1, D3, and D4 are also distinct domains with distinct anchors, so no verdict is averaged across them.

**Order by dependency (Fig 3).** The chain runs: anchor (what settles the question here) → currency (what is ranked and rewarded) → vocabulary of strategies (which moves are available) → observed distribution (which becomes common). `Fig 3 :20` "The chain is ordered by dependency, not by importance." A frequency measured before the anchor is identified is a reading below the break, which `Fig 3 :22-23` calls "a reading of nothing."

---

## 2. Figure census, before concluding

| figure | bearing | preliminary verdict |
|---|---|---|
| 1 The Agent | residual per slot; ground is the only metric; frame-internal quantities disqualified | no frequencies measured here; ground not consulted |
| 2 The Ground | anchor must not update; independence and correlation; legitimacy when constitutively about the anchor | each setting needs its own anchor test |
| 3 Dependency Chain | order by dependency; reading below the break reads nothing | anchor before currency before frequency |
| 4 The Membrane | kernel invariant with size; only actors, currency, anchor change; only methods cross up | **governs the residual directly** |
| 5 Mint Pipeline | three guards as a product; description-length bargain | a "common strategy" is a minted term that paid repeatedly |
| 6 Closure and Reachability | import is the only operator that moves the wall; instruments improved from worse ones | a strategy from another setting is an import needing a source gate |
| 7 Room Chain | a room's agreement is variation, not a verdict; selection between rooms | three settings are three rooms, not one sample |
| 8 Union Surplus | low overlap, residual first, frame second; convergent derivation versus adopted import | provenance decides whether a cross-setting similarity is evidence |
| 9 Leave and Arrive | split rather than search; unbundle a union; describe before looking; kind of thing, never the answer | the question must be split before it is searched |
| 10 Ground Maintainer | bring a characterised residual, never the source; verifier non-access | first contact carries the shape and refuter only |
| 11 The Habitat | capability is agent-and-habitat; valence relative to the residual; habitat enumerated, never composed | **governs the residual directly** |
| 12 The Bond | isomers, functional groups, level-relative irreducibility; arrangement carries meaning | same moves, different arrangement, different practice |
| 13 Minimum Viable Set | composition across two kinds; the set is closed, the arrangements are not; shape, not a name | a shape is the honest output here |
| Symbols table | R is the aim and a slice; the ground is the anchor | no frequency table is claimed as a verdict |
| THE_FORMULA.md | steps 2, 3, 5, 7; mode rule | route: SEARCHED, then INWARD, then OUTWARD |

---

## 3. Findings

### F1 - The kernel is invariant; the currency and the anchor change (decisive, triangulated)

`Fig 4 :19-20` "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."

`Fig 2 :29-30` "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."

The figure names a market as an anchor directly. It does not say that the loop changes across settings. It says the opposite: the loop and the naming rule do not change, and the actors, currency, and anchor do. So the answer is split at the joint. The **loop** (bet, observe, predict, name what paid) is universal by construction. The **strategies that are common** are a function of what the setting's currency rewards and what its anchor settles. Claiming either that everything varies or that nothing varies misreads this line.

- **Refuter:** show a reasoning loop that operates in one setting and is unavailable in another for a reason that is not an actor, currency, or anchor difference, or show a setting whose currency and anchor are held fixed while the strategy distribution still shifts systematically. Either breaks the split.
- **Status:** triangulated across Fig 4 (membrane, two scales) and Fig 2 (anchor test). Low overlap: one is about what crosses a size boundary, the other about what settles a disagreement.

### F2 - Capability is agent-and-habitat (decisive, triangulated)

`Fig 11 :39` "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."

`Fig 11 :40` "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

`Fig 11 :49` "An actor's valence is relative to the residual, not a property it carries."

`Fig 11 :50` "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."

A reasoning strategy is not a property carried by a reasoner into every room. Its value is relative to the residual in that habitat. The court's practice of distinguishing precedents is a benefactor to the residual "what is the legally reasonable outcome here" and would be a malfactor to the residual "what happened in the world"; the same move, two valences. This is the most direct figure-grounded reason for Option A. The world literature converges on the same point from an unrelated field: "the mind's decision strategies are adapted to particular environments. Therefore, decision strategies are not good or bad per se but can only be evaluated relative to the environments in which they are used" (Mata et al., 2012, opened 2026-11-22).

- **Refuter:** demonstrate an agent-only improvement in reasoning that changes contact with the ground and improves settlement in every setting equally. The figure names this as the standing refuter of the capability claim.
- **Status:** triangulated across Fig 11 (habitat and contact) and Fig 4 (currency/anchor change with size). Low overlap.

### F3 - The question is a union compound; split it rather than search it (triangulated)

`Fig 9 :4-5` "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

`Fig 9 :54` "And when the split lands on a union rather than a partition, unbundle before you search again."

`Fig 7 :35` "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

`Fig 7 :36` "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

"Markets, schools, or courts" are not three samples of one population. They are three rooms with different grounds. Pooling their frequencies into one "reasoning style" table is the mirror chain: motion, no progress. The essay on search says the same thing in different words: "Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way" (The Library of Babel, opened 2026-11-22).

- **Refuter:** exhibit a single instrument and a single scoring rule that settles strategy frequency in all three settings without changing what counts as a correct answer in any of them. Then the union reading is wrong and the settings are one partition.
- **Status:** triangulated across Fig 9 (split/unbundle) and Fig 7 (room chain, selection between rooms). Low overlap between a search-stop rule and a handoff rule.

### F4 - Each setting needs its own anchor test (single-source)

`Fig 2 :33` "The anchor must not update."

`Fig 2 :42` "Buy independence in proportion to the cost of being wrong."

`Fig 2 :36` "An anchor is legitimate when the question is constitutively about it."

A court's verdict is constitutively about the case, so a court can have a legitimate anchor. A market's clearing is constitutively about exchange, so a market can have one. A school's grade is only an anchor if the question is constitutively about the grade; if the question is about learning, the grade is an instrument and "instruments can be wrong on axes they do not measure" (`Fig 2 :37-38`). This is a diagnostic to run per setting, not a verdict about any named institution. Note the live strain in F9.

- **Refuter:** show a setting whose ranking metric moves when participants push on it, yet still settles the question. That setting has no anchor and is not a domain in the census.
- **Status:** single-source. All three lines are from Fig 2. The world literature on the legal system (SEP, opened 2026-11-22) corroborates the constitutional point but shares no figure evidence, so it does not raise this to triangulated.

### F5 - Institutional transmission is a membrane question (single-source)

`Fig 4 :22` "Only methods cross up. Only head starts come down."

`Fig 4 :25` "A recording carried upward looks like knowledge and is a description of one occasion."

A strategy becomes common in a setting by being a method that can be reapplied and ranked there. A list of famous cases, a textbook of successful trades, or a standard rubric is a recording, not a method. The frequency of a strategy is therefore driven by what the setting can carry up as a reusable method, not by how often the strategy is named in its literature.

- **Refuter:** show a setting in which a recorded particular success is transmitted and reused as a generator, with no method abstracted from it.
- **Status:** single-source (Fig 4). The education literature on instruction and transfer corroborates from outside the framework but is not figure evidence.

### F6 - Settings are functional groups over shared reasoning atoms (triangulated)

`Fig 12 :117` "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

`Fig 12 :124` "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

`Fig 13 :74` "Everything else is a composition across the two kinds, never within one."

The same stock of moves (perceive, bet, compare, distinguish, mint, refuse) is available to all three settings. What differs is the arrangement and the bond: a court chains observation to comparison with precedent to subtraction (distinguishing) to a verdict; a market chains perception of price to a bet to observation of clearing to a minted heuristic. Same atoms, different arrangement, different practice. An institution functions as a functional group: it fixes *what kind* of reasoning counts, and the setting says which member. This is developed with its own falsifier in `06_isomers_and_order.md`.

- **Refuter:** show that two settings use disjoint atom sets, so that one requires a move the other cannot express. Then they are not isomers and the functional-group reading fails.
- **Status:** triangulated across Fig 12 (bond and arrangement) and Fig 4 (kernel invariant while actors, currency, anchor change). Low overlap.

### F7 - Agreement cannot substitute for a ground reading (triangulated)

`Fig 2 :31` "Independence, between two frames, is how little they draw on the same evidence."

`Fig 2 :40` "agreement about the world is worthless when the agreeing frames share an evidence pool"

`Fig 10 :42` "A verifier that can reconstruct the claim cannot verify it."

The SEP account of legal reasoning, the ecological-rationality review, and the institutional-economics papers were all read on 2026-11-22. Where they agree, the agreement is weak evidence because they are separate frames aimed at the same residual, but several share a literature pool (Gallagher and Petracca appear in two papers; Nisbett appears in two). The ledger records overlap per row. This simulated second seat shares the primary's evidence pool, so its agreement is internal consistency, not corroboration.

- **Refuter:** an independent frame with a different closure and a named ground returns a conflicting frequency pattern that survives the anchor test. That sends us back to the census, never to a flipped verdict.
- **Status:** triangulated across Fig 2 (correlation and independence) and Fig 10 (verifier non-access). Low overlap.

### F8 - What the framework cannot give: frequencies (gap at the empirical layer)

`Fig 9 :32` "you get a kind of thing, never the answer itself"

`Fig 13 :134` "Unreachable is a verdict here, not a silence,"

`Fig 8 :39` "So a search that finds nothing is never a proof of absence."

The figures yield the shape (invariant loop, setting-conditioned distribution) and the instruments (anchor test, habitat enumeration, membrane check). They do not yield the number of times a strategy appears in a courtroom or a market. That is a gap at the empirical layer, not a silence in the derivation. `THE_FORMULA.md` step 7 distinguishes underivable-in-principle from unreachable-at-this-budget; here the frequencies are reachable in principle with instruments and simply not measured in this run. Two essays corroborate the limit: a shape is "a general shape of the answer that satisfies your question," and "The problem you have determines what makes a book relevant to you or not."

- **Refuter:** a figure line that actually predicts a specific strategy frequency for a named setting would falsify this F8. None was found after the census above.
- **Status:** gap, stated plainly. Verdict: unreachable at this budget, not underivable.

### F9 - Strain and re-census: universality versus conditionality (resolved), anchor legitimacy (live)

**Resolved strain.** F1 reads Fig 4 :19-20 as making the loop universal and the distribution conditional. An earlier reading of mine took the same line to mean that reasoning strategies themselves are universal. Re-census shows the earlier reading governed the wrong quantity: the figure says the *loop* and the *rule for naming what worked* do not change; "strategies" are the terms minted and rewarded under the rule, which is exactly what the currency and anchor select. Different objects, so no contradiction after re-census. This matches the canonical rule that a reading which makes figures contradict one another has misidentified its domain.

**Live strain.** Fig 2 :36 makes anchor legitimacy conditional on the question being constitutively about the anchor. Schools are the hard case: a grade is an anchor for "did the student meet the standard" and an instrument for "did the student learn". Until the question is specified, the school setting's anchor is undecided. I record this as a strain requiring an instrument, not a correction to be smoothed over.

**Analogue strain.** Fig 12's isomer and functional-group language comes from chemistry. Applying it to reasoning practices is a `specified` analogue licensed by the framework's domain-agnostic claim, not a measurement. The bond typing is our contribution and must be provenanced as such.

- **Refuter for the re-census:** a case where the loop changes with size while the currency and anchor stay fixed. That would break the kernel reading and restore the earlier, universal-strategy reading.
- **Status:** one resolved re-census, one live strain, one analogue strain. None hidden.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach. "A falsifier written before the run is a design instrument, not only an honesty device."

The shape claim is refuted if any of the following holds:

1. A single reasoning strategy retains the same frequency and the same success criterion across markets, schools, and courts after each setting's currency and anchor have been matched, with the three frames kept independent. That breaks F1 and F2 and supports Option B.
2. A reasoning form is shown to be unavailable in one setting because of a difference that is not an actor, currency, or anchor difference. That breaks the kernel reading in F1.
3. A setting's ranking metric is shown to move when participants push on it, yet the setting still settles the question. That breaks the anchor test in F4.
4. Two settings use disjoint reasoning atom sets, so that neither can express a move the other requires. That breaks the isomer and functional-group claim in F6 and sends the analysis to a different derivation.
5. A single scoring rule settles strategy frequency in all three settings without changing what counts as a correct answer in any of them. That breaks the union reading in F3.

If any fires, the shape is withdrawn or split again. Until one is run, no frequency claim may be labelled `grounded`.

---

## 5. Verdicts per domain, never averaged

| domain | verdict | mode | status |
|---|---|---|---|
| D1 Individual reasoning frame | The loop and the naming rule are invariant. What is minted depends on the residual in front of the reasoner. | `general` structural, `specified` on the mint claim | triangulated (Fig 4, Fig 1) |
| D2 Institutional frame | The setting's currency and anchor select which strategies are rewarded, carried up as methods, and transmitted as head starts. Settings are distinct rooms, not one sample. | `specified`, ungrounded | triangulated (Fig 4, Fig 11, Fig 2, Fig 7) |
| D3 Habitat and contact | A strategy's valence is relative to the residual in that habitat. Capability is agent-and-habitat. Remove the habitat from the account and the explanation stops. | `specified`, ungrounded | triangulated (Fig 11, Fig 4) |
| D4 Verification and outreach | Split before searching; keep the rooms independent; record verdicts before showing the framework; never pool later agreement as corroboration. | `general` procedural | triangulated (Fig 9, Fig 7, Fig 10, Fig 2) |
| Empirical frequency layer | No frequency table is claimed. The framework returns a shape and the instruments that would close it. | `gap` at this budget | unreachable here, reachable in principle |

**Aggregate answer, stated without averaging the domains:** Yes, in the restricted sense the figures license. The forms of reasoning are invariant; which strategies are common is a function of the setting's currency, anchor, and habitat. Which strategies *actually are* more common in markets, schools, and courts is a measurement question the figures do not answer.

---

## 6. Recommendation

1. Lead with F1 and F2: the kernel is invariant, the currency and anchor are not, and capability is agent-and-habitat. These are the two triangulated, figure-derived points.
2. Split the question before answering it (F3). Treat markets, schools, and courts as three rooms with their own grounds. The school anchor needs an explicit decision first (F9).
3. Run the anchor test per setting (F4). Name what settles the question in that setting and check that it does not move when participants push on it.
4. Report strategies as methods, not recordings (F5), and as arrangements over shared atoms (F6).
5. Do not present pooled agreement as evidence (F7). Send the refuter with the shape, and record the reader's verdict before showing the source.
6. Say the gap plainly (F8). The honest stop is a shape plus instruments, not a frequency table.

---

## 7. Canonical usage check and retraction log

Two local governing documents were read after the first six sections: `FIGURES_README_canonical.md` and `THE_FORMULA.md`. The README states that the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them" and that "the quotes are the authority, not this summary." It also states the canonical output limit: the framework reports "a shape, not a name," stops at the limit of what the instruments distinguish, and records the lineage.

| earlier reading | status after the canonical check |
|---|---|
| Fig 4 :19-20 implies reasoning strategies are universal | **Retracted and re-censed.** The line governs the loop and the naming rule, not the terms minted under them. See F9. The earlier reading is kept visible rather than erased. |
| The question is one question about institutions | **Retracted.** The split rule at Fig 9 :4-5 plus the Library of Babel essay's bundle-or-conflation test require a split. Recorded as F3. |
| A school grade is an institution's anchor | **Narrowed.** It is an anchor only when the question is constitutively about the grade (Fig 2 :36). Live strain, F9. |
| Isomers apply to reasoning practices as a matter of fact | **Narrowed to a `specified` analogue.** The framework is domain-agnostic, but the bond typing is ours and is unmeasured. F6. |
| World agreement across the seven sources corroborates the verdict | **Weak, not strong.** Several sources share an evidence pool and two share an author. Overlap is recorded per row in `10_source_ledger.csv`. F7. |
| The framework can say which strategies are more common | **Refused.** It returns a shape and instruments. Fig 9 :32, F8. |

---

## 8. Figure lines used, checked against the verbatim extract

All of the following were reopened in `FRAMEWORK\reference\03-FIGURES_TEXT.md` and copied character by character. Quotes that wrap two SVG lines are reported as one continuous sentence with whitespace normalised.

- `Fig 1 :23` "The ground enters as the only metric."
- `Fig 2 :29-30` "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."
- `Fig 2 :31` "Independence, between two frames, is how little they draw on the same evidence."
- `Fig 2 :33` "The anchor must not update."
- `Fig 2 :35` "Alignment is triangulation, not negotiation. A mirror cannot correct you."
- `Fig 2 :36` "An anchor is legitimate when the question is constitutively about it."
- `Fig 2 :40` "agreement about the world is worthless when the agreeing frames share an evidence pool"
- `Fig 2 :42` "Buy independence in proportion to the cost of being wrong."
- `Fig 3 :20` "The chain is ordered by dependency, not by importance."
- `Fig 3 :22-23` "a reading taken below the break is not a weak reading. It is a reading of nothing."
- `Fig 4 :5` "many agents, a shared library, and something that ranks what they produce"
- `Fig 4 :19-20` "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."
- `Fig 4 :22` "Only methods cross up. Only head starts come down."
- `Fig 4 :25` "A recording carried upward looks like knowledge and is a description of one occasion."
- `Fig 7 :35` "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."
- `Fig 7 :36` "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."
- `Fig 8 :39` "So a search that finds nothing is never a proof of absence."
- `Fig 9 :4-5` "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."
- `Fig 9 :32` "you get a kind of thing, never the answer itself"
- `Fig 9 :54` "And when the split lands on a union rather than a partition, unbundle before you search again."
- `Fig 9 :57-58` "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."
- `Fig 10 :42` "A verifier that can reconstruct the claim cannot verify it."
- `Fig 11 :39` "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."
- `Fig 11 :40` "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
- `Fig 11 :45` "actors: what acts on it, and what it acts on"
- `Fig 11 :49` "An actor's valence is relative to the residual, not a property it carries."
- `Fig 11 :50` "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
- `Fig 11 :73` "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."
- `Fig 12 :117` "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- `Fig 12 :124` "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- `Fig 13 :74` "Everything else is a composition across the two kinds, never within one."
- `Fig 13 :134` "Unreachable is a verdict here, not a silence,"
