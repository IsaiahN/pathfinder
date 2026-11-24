# Figure-grounded audit: BUS-0003, distinguishing advantage from luck

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the research-methods question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the researcher's or firm's belief about what the market will pay for.
- **a** is what the firm does: price, product, entry, investment, routine.
- **Γ(b,a)** is what the firm's library of routines and assets predicts will happen.
- **o′** is what the market actually returns: demand, price, share, survival.
- **s** is the firm. R is indexed by firm and by time, never aggregated into an industry average.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the size of R but its **source**. A slot with a persistently small R has produced a reading o′ that is consistent with at least four candidate sources: a settled term in Γ (a genuine advantage), a favorable sequence of handoffs (timing), a configuration of the habitat (favorable market conditions), and an unattributed configuration (luck). The reading does not determine which source produced it. State the residual as: *given an identical performance reading, what discriminates the source that produced it?* This is an effect description. It names no method, no "control variable", no "factor model", no "fix effect". Those are candidate names and are withheld until the census.

The framework essay *The Hard Problem is About Source* names this exact structure. Its color instrument reads green but *"the instrument is speaking only about what it measured, it cannot comment on the source."* A profit or return reading is the same kind of projection. Several sources create the same reading. *"If several paths create the same behavior, then behavior is a projection with lossy information."*

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a discriminator that maps one reading to its source, an instrument for each candidate source, and a rule that keeps the verdict per slot. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* A market return anchors "did the slot pay", but it cannot anchor "which source paid". Source attribution needs an **experiment or counter**, which is also named in that line. Internal metrics, analyst consensus and significance thresholds move when pushed; they are instruments at best (Fig 2 :30, *"If it moves when you push on it, it is not an anchor."*). Viable anchor: a pre-registered contrast whose result the researcher cannot author.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** The residual here is a relation among the reading o′, a candidate source C, a contrast or intervention, and a time index. It is at least four-place. It carries a **comparison** bond ("genuine" is a threshold attribution, ⋛, *"a threshold relation between two quantities"*, Fig 12 :87) and an **ordered** bond (the sequence of handoffs, →, *"A then B; B needs A to have happened"*, Fig 12 :72). It is not symmetric: the reading and its source are not interchangeable.
- **Symmetry.** "Genuine" is a threshold relative to a counterfactual, not an absolute quantity. Persistence and attribution are asymmetric in time: a luck-driven run is not converted into an advantage by reversing the analysis.
- **Scale.** Four scales are in view: the firm's step loop (Fig 4 one-agent panel), the population of firms with *"something that ranks what they produce"* (Fig 4 :5), the market habitat, and the research community that checks the attribution. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30). Cross-scale transfer of a mechanism requires the anchor to be re-named at the new scale (Fig 4 :19-20).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The measurement frame** (researcher) | researchers, instruments, estimators | reading, residual, variance | yes: a pre-registered contrast and the market return (Fig 2 :29) | admitted |
| **D2 The firm's generative library** (candidate source A, genuine advantage) | routines, assets, Γ, bonds | reach, |φ|, residual reduction | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D3 The market habitat** (candidate source B, timing and favorable conditions) | firms, customers, entrants, regulators; conditions *"light, water, temperature, season, terrain"* (Fig 11 :46) | survival, share, rents | yes: customer choice and realized market return (Fig 2 :29) | admitted |
| **D4 The temporal channel** (handoffs across time) | instruments, metrics, percepts | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **D5 The verification seat** (research community) | reviewers, editors, pre-registration, data editors | refusal, provenance, bracket fidelity | yes: the ground, and the seat must not author the claim (Fig 10 :42, :43) | admitted |
| **X1 "Luck" as a positive property of a firm** | none nameable | residual category | **no** anchor independent of the attribution; it is whatever remains after the other sources are named | **not a domain yet** |
| **X2 "Timing" as a cause separate from habitat and sequence** | the sequence itself | order | measurable, but it is already the handoff structure of D4 and the conditions of D3 | absorbed into D3 and D4 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that chance plays no role. It is the reason luck ends as a declared `gap` in F5 and F10. X2 is absorbed: timing is a property of the sequence of handoffs and the state of the habitat, not a separate source with its own anchor.

### 1.3 Partition or union

D1 and D2 overlap: the measurement of a source happens inside a Γ that is itself part of the firm, so their overlap is a compound with its own loop. D3 and D4 overlap: the habitat is exercised through a channel across time. D5 ranges over all four. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (S) a source-discriminating instrument exists and fires; (I) the frames compared are independent, so their agreement means something; (A) an anchor does not update; (P) the verdict is per slot and never averaged. A researcher failing only I (one evidence pool) and a researcher failing only S (no discriminator) are not different degrees of one failure. They need different instruments. The Library of Babel essay states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the researcher read the return at all?) → 2 vocabulary (does the frame have terms for the candidate sources, and can it say what would count as discrimination?) → 3 objective (what contrast would count as progress?) → 4 planning (which design?) → 5 learn and carry. The middle link, having terms for what a situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :112-113 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most research effort lands above the break because that is where the measurements already exist (Fig 3 :29-30): more data, more controls, finer significance thresholds.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how the reading is indexed and what may not count as evidence |
| 2 The Ground | anchor, independence, correlation valence | governs the witness rule and the non-updating contrast |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs cross-scale transfer from finance or psychology to firms |
| 5 Mint Pipeline | three guards as product; settlement not sufficiency | governs what a significant coefficient can and cannot license |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse ones | governs instrument search and the fate of "luck" |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs timing as a sequence of handoffs |
| 8 Union Surplus | idempotence; provenance separates convergence from import; search is not proof of absence | governs source discrimination and the luck verdict |
| 9 Leave / Arrive | union vs partition; describe the effect before the cause; filters vs witnesses | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access; declare stake | governs the verification seat and pre-registration |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D2 and D3 |
| 12 The Bond | isomer, functional group, two currencies, comparison as threshold | governs why two sources with the same reading are different substances |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop on luck |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "firm resources" only fit by calling a routine a kind of energy and a capability a kind of gradient. That is a strain, so Fig 13 does **not** govern firm capabilities. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). A second early attempt to treat "luck" as a domain with actors and a currency produced no nameable anchor, so it was excluded (strain S2). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about research practice, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The reading cannot settle the source (metamerism)

**Mode: `general` for the structure, `specified` for its application to performance readings. Domains D1, D2. Status: triangulated (Fig 9 and the source essay, with Fig 1 :27 as a third line).**

> **"your words are borrowed too, so describe the effect"** (Fig 9 :30), **"rather than the cause"** (Fig 9 :31)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> *"the instrument is speaking only about what it measured, it cannot comment on the source."* (*The Hard Problem is About Source*, read 2026-11-22)

A high return is a reading. It is consistent with a protected resource, a paying habitat, a favorable sequence, or luck. No refinement of the reading alone selects among them. In the words of the finance literature this is the exact problem: *"The challenge is to distinguish skill from luck. Given the multitude of funds, many have extreme returns by chance."* (Fama and French 2010, full text). What is owed is a discriminator, not a better reading.

**Refuter:** an instrument that maps an identical reading to its source uniquely, without an intervention, a contrast, or any out-of-sample information. If such an instrument exists, F1 is false.

### F2: Independence, not agreement, is what makes the distinction possible

**Mode: `general` with a `specified` consequence for study design. Domains D1, D5. Status: triangulated (Fig 2 and Fig 8, low topical overlap: anchor rule vs union surplus).**

> **"Independence, between two frames, is how little they draw on the same evidence."** (Fig 2 :31)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)

Several studies reaching the same conclusion with the same dataset, the same factor set, and the same citation chain are one frame wearing many names. The finance record makes the point directly: two influential bootstrap studies *"using similar data, they arrive at different conclusions"* (Harvey and Liu 2022), which is what one evidence pool looks like when two teams probe it with different tolerances for error. The remedy is separate evidence pools, not more teams reading the same report.

**Refuter:** two genuinely low-overlap frames (for example a market micro-structure design and an organizational-process design) that return the same per-slot source attribution with no shared data, no shared author, and no shared factor definition. That would be corroboration at maximum independence and would strengthen, not break, F2. F2 breaks if agreement from a shared pool is shown to carry verdict weight.

### F3: Variance decompositions and significance are filters for the budget, never witnesses

**Mode: `general` with a `specified` method consequence. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"coverage, and compression achieved"** (Fig 1 :25), **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A variance decomposition that reports "firm effects explain X percent of returns" scores the frame with a quantity the frame produces. A t-statistic that clears 0.05 is a gate. Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* The specified consequence: any claimed answer to BUS-0003 that is an average across firms, or a single threshold inside one dataset, has already spent a filter as if it were a verdict. Meta-science corroborates the mechanism from a different field: *"a research finding is less likely to be true when the studies conducted in a field are smaller"* (Ioannidis 2005), because small studies conflate noise with source.

**Refuter:** an averaged industry-level statistic that predicts, prospectively and per firm, which named slot is genuine and which is lucky. If one exists, F3's methodological consequence is false.

### F4: A genuine advantage is agent-and-habitat, and its valence is relative to the residual

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)

A discriminant for "genuine" must show that the firm's contact and reach mattered, not merely that the market paid. The same routine is a benefactor under one residual and a malfactor under another, so no fixed list of attributes settles attribution. Development economics corroborates the need for mechanism from a low-overlap field: *"progress in understanding economic development (as in other branches of economics) must come from the investigation of mechanisms"* (Deaton 2010). A coefficient is not a mechanism.

**Refuter:** an invariant firm property that predicts the return across a documented habitat substitution that removes the market's payment for that property. If one exists, F4 is false.

### F5: "Luck" is a gap, not a rival cause that can be searched for and ruled out

**Mode: `general` for the structural claim, `specified` for the research-practice consequence. Domains D1, D3. Status: triangulated (Fig 8, Fig 13, Fig 6, three distinct roles).**

> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"It cannot say which primitive is missing, because naming it would mean already holding it."** (Fig 13 :135)
> **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."** (Fig 6 :34-35)

Luck is the label the frame gives to whatever it cannot source. It has no anchor independent of the attribution (X1 in the census), so it cannot be measured as a positive property. A researcher cannot "test for luck" and then declare victory when the test is insignificant, because a search that finds nothing is never a proof of absence. The honest form is: luck is the residue left when the available instruments do not discriminate, and that residue is declared, not filled. The hot-hand literature shows the danger from a low-overlap field: *"The outcomes of previous shots influenced Cornell players' predictions but not their performance."* (Gilovich, Vallone and Tversky 1985). Observers read a source (a streak) into a sequence that the data do not support.

**Refuter:** a source-discriminating instrument that returns "luck" as a positive measurement with a defined signature, an anchor, and an out-of-sample success rate. That would promote X1 to a domain and falsify F5. Until then, luck stays a `gap`.

### F6: Convergent derivation and adopted control look identical; only the record separates them

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 8 and Fig 6, distinct roles).**

> **"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."** (Fig 8 :50)
> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"** (Fig 8 :51)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)

Adding a market factor to a regression is an import from the finance frame into the strategy frame. If the factor was derived independently against the same residual it is corroboration at maximum independence; if it was adopted because it is fashionable it is an import with no source gate. The contents look the same. The record of origin is the whole issue. Fig 8 :52 adds that *"the surplus lives only where the closures differ"*, so a factor drawn from the same evidence pool creates no surplus.

**Refuter:** a factor or control that discriminates sources out of sample with no recorded provenance and no independent derivation, and that survives a check that it was not fitted to the same reading. That would break the provenance requirement.

### F7: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 plus the Library of Babel essay, but the essay is framework-internal so the external witness count is one).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The four conditions have different instruments:

- A **S** failure shows up as no contrast that separates sources, so every reading remains a projection (Fig 9 :30-31).
- An **I** failure shows up as agreement from a shared pool, so the witness count is one however many papers there are (Fig 2 :31, :40).
- An **A** failure shows up when the supposed anchor moves when pushed, which turns it into another frame (Fig 2 :30, :33-34).
- A **P** failure shows up as pooled readings that erase the per-slot signal (Fig 1 :22, Fig 10 :26).

A single lever, for example "add another control variable", clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55). F7 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores all four conditions in all failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F8: Settlement is necessary but not sufficient; a passed test is not a composable result

**Mode: `specified`. Domain D5. Status: single-source (Fig 5 with Formula step 5 as a corroborating line from the same framework, so one witness).**

> **"A term is settled when the ground pays for it."** (Fig 5 :69)
> **"Whether a settled term can be composed over is a fact about how it composes, not about what it paid."** (Fig 5 :70)
> **"A gate is not the ground."** (Formula step 5)

A statistically significant coefficient has been settled by an in-sample gate. Whether it can be composed over, that is, whether it discriminates sources in a new habitat, depends on how it composes, not on what it paid. A library that grows is not a reach that grows. The Registered Reports format is the methodological name for the right order: *"authors submit the introduction, methods, measurement info, and analysis plan (but not the results) of a completed or planned study"* (Academy of Management Discoveries call, read 2026-11-22), and *"what was or is likely to be found has no bearing on the outcome of the evaluation."*

**Refuter:** a settled coefficient that cannot be composed over, together with a demonstration that composability follows from settlement alone. That would falsify the sufficiency distinction.

### F9: The verifier must be outside the interior, and the stake must be declared

**Mode: `general`. Domain D5. Status: triangulated (Fig 10 and the meta-science record, low overlap).**

> **"A verifier that can reconstruct the claim cannot verify it."** (Fig 10 :42)
> **"Soundness requires the checker to be unable to produce what it is checking."** (Fig 10 :43)
> **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."** (Fig 10 :59)
> **"Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record."** (Fig 10 :65-66)

A reviewer who authored the design and shares the stake cannot check it. The first contact carries the residual and its refuter, never the framework interior. Ioannidis corroborates from meta-science: *"when there is greater financial and other interest and prejudice"* a finding is less likely to be true (2005). That is an independent witness for the stake rule, but it is not a witness for this framework's account of verification, so it is marked as mechanism-shape corroboration only.

**Refuter:** a documented case in which a checker who authored the claim and shares its stake produces a reliable source discrimination. That would break the non-access rule.

### F10: Instruments are improved from worse instruments already returning something

**Mode: `specified`. Domains D1, D5. Status: triangulated (Fig 6 and Fig 3, distinct roles).**

> **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** (Fig 6 :32)
> **"the search for a proto-instrument is a search for one that is already there."** (Fig 6 :34-35)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

The field is not empty of proto-instruments. Bootstrap simulations that ask whether extreme returns exceed what chance produces (Fama and French 2010), random-sequence benchmarks for perceived streaks (Gilovich, Vallone and Tversky 1985), and potential-outcome contrasts that define a causal effect (Imbens and Wooldridge 2009) are all instruments already returning something. What is missing is a single discriminator that separates genuine advantage from luck for the *same* reading at the firm level. That is the `gap`, and it is characterized in effect terms: a signature that maps one reading to multiple sources and an intervention that changes one source while holding the reading fixed.

**Refuter:** an edge that returns nothing at any resolution, so that no proto-instrument exists anywhere for any of the four sources. That would make the gap permanent rather than current.

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| The reading is per firm and per time, never an average | general | Fig 1 :19, :22 | figure-derived |
| The reading does not determine its source | general | Fig 9 :30-31; source essay | triangulated F1 |
| Independence decides whether agreement counts | general | Fig 2 :31, :35, :40 | figure-derived |
| Significance and variance shares are filters, not witnesses | general with specified method consequence | Fig 1 :27; Fig 9 :60; Formula step 5 | triangulated F3 |
| A genuine advantage is agent-and-habitat, with relative valence | specified | Fig 11 :39-40, :49-51 | triangulated F4 |
| Luck is a gap, not a measurable positive cause | general and specified | Fig 8 :39; Fig 13 :134-135; Fig 6 :34-35 | triangulated F5 |
| Provenance separates convergent derivation from adopted control | specified | Fig 8 :50-52; Fig 6 :23 | triangulated F6 |
| The question is a union of four conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| Settlement is necessary but not sufficient for composability | specified | Fig 5 :69-70; Formula step 5 | single-source F8 |
| The verifier must be outside and declare its stake | general | Fig 10 :42, :43, :59 | triangulated F9 |
| Which specific source produced a given firm's run | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. An instrument maps an identical performance reading to its source uniquely without a contrast, an intervention, or out-of-sample information (breaks F1).
2. A single evidence pool produces verdict-weight agreement, or a shared-pool result is counted as two witnesses (breaks F2).
3. An averaged industry statistic predicts prospectively and per firm which named slot is genuine (breaks F3).
4. An invariant firm property predicts the return across a habitat substitution that removes payment for it (breaks F4).
5. A source-discriminating instrument returns "luck" as a positive measurement with an anchor and out-of-sample success (breaks F5).
6. An unprovenanced control discriminates sources out of sample while surviving a check that it was not fitted to the same reading (breaks F6).
7. A single lever restores all four conditions and leaves no categorically different residue (breaks F7).
8. Composability is shown to follow from settlement alone (breaks F8).
9. A checker who authored the claim and shares its stake produces a reliable source discrimination (breaks F9).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a source-discriminating instrument has paid for the shape against the ground.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of method (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the four conditions separate in every report. A blended "advantage score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat every control variable and factor as Γ, that is, as a candidate term whose provenance and reach must be tested against the ground, never as the answer (Fig 1 :27, Fig 8 :51).
5. Use the finance, meta-science, cognition and econometrics literature as filters and as a few independent witnesses, not as the verdict. Fama-French and Harvey-Liu are one evidence pool (Fig 2 :31).
6. Pre-register the discriminator and the refuter before the run (Formula, "Direction"; AOM Registered Reports, read 2026-11-22).
7. Stop at the shape. Do not name which firm is genuine; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs section 5's stop and F5's luck verdict.
- The source essay confirms the simulation status indirectly: *"An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it."* The RSI essay confirms it directly: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to firm resources | **Retracted, strain S1** | Only fit by renaming routines as kinds of energy. Re-census: Fig 13 governs the physical substrate, not a firm's Γ |
| Treated "luck" as a domain with actors and currency | **Retracted, strain S2** | No nameable anchor independent of the attribution. X1 excluded; luck becomes a declared gap (F5) |
| Planned to count Fama-French 2010 and Harvey-Liu 2022 as two independent witnesses | **Retracted as two, kept as one** | Both are mutual-fund finance using related data and methods; one evidence pool (Fig 2 :31, :40) |
| Read "shape, not a name" as forbidding naming any source | **Narrowed and corrected** | The phrase governs a **missing** primitive. Naming an atom already held is a binding requiring provenance, not a category error. Kept both formulations visible |
| Read Gilovich hot hand as a firm-level result | **Narrowed to mechanism-shape corroboration** | Individual cognition stratum; Fig 4 :19-20 requires the anchor to be re-named at the new scale |
| Treated a significant coefficient as the ground | **Retracted, kept as a gate** | Fig 5 :69-70 and Formula step 5; settlement is necessary and not sufficient (F8) |
| Wanted to call F1 "decisive" | **Downgraded to triangulated** | Fig 9 and the source essay are low-overlap in topic but both are framework-internal; triangulation here means low topical overlap, not independent evidence pools |
| F11 row "which specific source produced a given run" | **Marked `gap`** | Fig 13 :134-135 and Fig 8 :39; the discriminator is characterized, not held |

**Strains sent to the log:** S1 (Fig 13 applied to firm resources), resolved by re-census; S2 (luck as a domain), resolved by the anchor test. No unresolved strain after re-census. Per the canonical rule, a reading that makes one figure contradict another has misidentified its domain, not found a flaw; each strain was returned to the census rather than smoothed over.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of discriminator, independence, anchor and per-slot conditions, each with its own instrument.
2. **What is the anchor?** A pre-registered contrast named in Fig 2 :29 (experiment or counter), not the reading and not internal agreement (Fig 1 :27).
3. **Can the reading settle the source?** No. Fig 9 :30-31 and the source essay's metamerism. Several sources produce one reading.
4. **Why is agreement not enough?** Fig 2 :31 and :40. Independence decides what agreement means; shared pools are one witness.
5. **Why is luck a gap?** Fig 8 :39, Fig 13 :134-135, Fig 6 :34-35. No anchor, no positive signature, and absence of evidence is not evidence of absence.
6. **Where do instruments come from?** Fig 6 :32-35 and Fig 3 :27. They are improved from worse instruments already returning something: bootstrap tests, random-sequence benchmarks, potential-outcome contrasts.
7. **What can be said at the stop?** A shape, four conditions, nine falsifiers. Not which firm is genuine, not a name for luck, not a `grounded` answer. *"Unreachable is a verdict here, not a silence,"* and *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a performance reading cannot settle its own source, so researchers must range the same reading against independent frames with an anchor that does not update, keep the verdict per firm-slot, and declare luck as the residue their instruments cannot discriminate rather than naming it as a rival cause.** The four conditions are kept separate, never averaged. Which specific source produced a given firm's run is a `gap`, not a silence: the discriminator is characterized in effect terms and the instrument is not held here. Mode `specified`. No world source was allowed to flip a verdict; the genuine conflict in the finance record (Fama-French versus Harvey-Liu) was returned to the census as one evidence pool. No unresolved strain remains after re-census.
