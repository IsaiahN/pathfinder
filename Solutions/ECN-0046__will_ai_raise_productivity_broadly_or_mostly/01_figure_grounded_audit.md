# Figure-grounded audit: Will AI raise productivity broadly, or mostly benefit a narrow set of firms and workers?

**Mode of this document: `specified`, not `grounded`.** It states what a checkable answer would have to look like and which instrument would settle it. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is simulacra and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The canonical local figure extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, `60_FIGURES_AS_METALAWS.md`, and the public sources recorded in `10_source_ledger.csv`. All figure quotes below are verbatim substrings of the extract and cited as `Fig N :line`.

---

## 0. The question under audit, stated as an effect

> Will AI raise productivity broadly, or mostly benefit a narrow set of firms and workers?

Stated in effect terms: an instrument reports a number for output per hour across an economy. The question asks whether that number's **change** is spread across many object slots (firms, workers, tasks) or concentrated in a few. Option A (broad) leads to a policy and investment story about general-purpose diffusion. Option B (narrow) leads to a story about concentrated rents and complementary assets. What each leads to is a different measurement design, not a different opinion.

Per `THE_FORMULA.md` "Direction", I bind the sought-for shape as an ordinary term before the run so it can accrue a residual:

> **Bound shape term S:** a checkable answer to this question is a *distribution over slots with a stated breadth threshold*, produced by an instrument that can see the slots and is not a quantity the reporting frame itself produces.

If S is wrong, the pre-registered refuter in section 3 fires. A single aggregate mean does not satisfy S.

### 0.1 Residual in effect terms

**R:** the gap between what AI capability measurements predict and what measured productivity reports, together with the unobserved dispersion across firms and workers. Arity: a distribution over many slots, not one number. Symmetry: breadth is a threshold relation over a distribution (which is larger, the fraction of slots above the line or below it), not a symmetric join of two aggregates. Scale: first order inside one firm or task, second order at the economy-wide aggregate.

### 0.2 Domain census before choosing any figure line

One line per domain with actors, currency and anchor. No nameable anchor means it is not a domain yet.

- **Domain 1, production and measurement.** Actors: firms, workers, tasks, output, hours, the BLS and national statistical offices. Currency: output per hour and total factor productivity. **Anchor: measured, revisable productivity data plus randomized rollout data.** Legitimate because the question is constitutively about measured productivity. It is an instrument, so it can be wrong on axes it does not measure (Fig 2 :29-30, :37-38).
- **Domain 2, AI capability.** Actors: models, labs, compute, benchmarks. Currency: benchmark scores and deployment counts. **Anchor: none for this question.** Benchmark results are a quantity the capability frame produces, so they cannot settle productivity. This domain has a local anchor for its own questions (can the model do the task) but not for R.
- **Domain 3, diffusion habitat.** Actors: adopters, managers, data, process redesign, complements, regulation. Currency: contact and complementary investment. **Anchor: the same measured productivity as Domain 1**, reached through adoption. Capability lives here, not in the model alone.
- **Domain 4, verification.** Actors: researchers and expert readers. Currency: agreement and residuals. **Anchor: the ground, never agreement.** In this simulated run all seats draw on one evidence pool, so this domain's independence is zero.

**Partition or union?** Union. The question bundles at least two conditions: (1) capability breadth, how many tasks AI can improve; (2) diffusion breadth, how many firms and workers get into contact with that capability and its complements. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* A single lever (a better model) clears the region where only condition 1 holds and leaves the intersections standing.

**Order by dependency (Fig 3).** First define the breadth threshold (objective link), then measure per slot (perception link), then decide broad or narrow (comparison link), then act. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* We spend most effort on capability (a link that works) and almost none on the threshold (the link with no instrument).

---

## 1. Figure census

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | residual per slot, never aggregated; frame-produced quantities are disqualified | governs the unit of the answer (F1, F3) |
| **2 The Ground** | anchor test, independence, triangulation not negotiation | governs what may settle it (F2, F8) |
| **3 Dependency Chain** | the middle link with no instrument is where chains break | governs the threshold definition (F5) |
| **4 The Membrane** | round trip and dead reckoning | governs revision and condensation (F7) |
| **5 Mint Pipeline** | guards as a product; a frame cannot check its own direction | governs the pre-registration (F5) |
| **6 Closure / Reachability** | outward import; instruments improved from worse ones | governs instrument search (F9) |
| **7 Room Chain** | agreement is variation, not a verdict | governs outreach (F8) |
| **8 Union Surplus** | idempotent closure; search that finds nothing is not proof of absence | governs status labels (F9) |
| **9 Leave / Arrive** | union versus partition, describe before looking, filters vs witnesses | governs the unbundling (F2, F8) |
| **10 Ground Maintainer** | ground does not decay, channel does; bring a characterised residual | governs F7 and outreach ordering |
| **11 The Habitat** | capability is agent-and-habitat; contact is the whole move | strongest positive claim (F4) |
| **12 The Bond** | a goal is a comparison; two currencies do not add | governs the threshold and the cost trade (F5, F6) |
| **13 Minimum Viable Set** | no new primitive is licensed by this question | no bearing beyond the general grammar |
| **Operators table** | ⋛ comparison as a threshold relation between two quantities | threshold is the right bond (F5) |
| **Symbols table** | R is the aim, always a slice; the ground is the anchor | R here is a distribution slice, not a mean |

Strained readings are named in section 6 rather than smoothed over.

---

## 2. Findings

### F1 - This is a per-slot question; an aggregate answers a different question (decisive)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"**

The words "broadly" and "mostly benefit a narrow set" describe a distribution. A single productivity mean, however precisely measured, is the wrong instrument for the question because the operation that produces it is exactly the operation Fig 1 forbids. A flat aggregate is compatible with a few very large winners and many flat slots. That is not a paradox; it is a legal state.

**Refuter:** a decomposition into firm, worker and task slots adds no information over the mean for the question asked, meaning the distribution is degenerate or the breadth statistic is a deterministic function of the mean. If that is shown, F1 is refuted.

**Triangulation status:** `triangulated`. Fig 1 (per-slot residual) has low overlap with Fig 2 :29-30 (*"An anchor is whatever settles the question and does not change its answer because of what any frame thinks"*), which requires the anchor to be legitimate for the question being asked. A mean is a legitimate anchor for a different question.

### F2 - The broad/narrow binary is a union compound, not a partition

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**

Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

"Broad" can fail for two different reasons: the capability helps few tasks, or many tasks are never reached by the firms and workers who could use it. Those are different conditions with different instruments and different levers. Answering the bundled question with one number (for example, an adoption rate) clears the first condition and leaves the second binding.

**Refuter:** a single measured condition accounts for all of the observed dispersion in productivity effects across slots, so the union collapses to a partition. Until that is measured, treat the question as a compound.

### F3 - Capability benchmarks are frame-internal; they cannot be the productivity anchor

Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

The capability frame produces benchmark scores. Using them as the verdict for productivity lets a frame score itself with a quantity it also produces, the named Fig 1 failure. Measured output per hour, not a model score, is the anchor for this question. The world evidence makes the same point: in the one well-identified study opened for this run, the researchers explicitly measured *"issues resolved per hour"* rather than model quality.

**Refuter:** a capability benchmark that is not produced by the capability frame (for example, a blinded external evaluation of actual workplace output) is shown to track measured productivity at the slot level without ground confirmation. Until then the benchmark is a candidate instrument, not the verdict.

### F4 - The outcome depends on the habitat, not on the model in isolation (strongest positive claim)

Fig 11 :39: **"And capability is a property of agent-and-habitat, never of the agent alone."**

Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**

A better model with unchanged contact with firms, workers, data and workflow does not change measured productivity. Broad versus narrow is therefore a question about the *size and shape of the contact surface*, not only about model quality. This is the one place where the figures make a positive, falsifiable claim about the question.

**Refuter:** an agent-only improvement that leaves every measured contact unchanged moves measured productivity. Fig 11 itself names this as the observation that would refute the capability claim.

**Triangulation status:** `triangulated`. Fig 11 (habitat and contact) has low overlap with Fig 1 (per-slot distribution): one says *where* capability lives, the other says *how* a signal can be lost. Converging on "look at the adoption distribution across slots" is a result of two different starting figures.

### F5 - "Broad" is an unbound preference until a threshold is written down

Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."**

Fig 3 :26: **"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."**

Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

The Operators table calls comparison *"a threshold relation between two quantities"* and the table adds *"a goal is a comparison, which is why a vocabulary without it cannot state one"*. "Broad" without a stated cut (what fraction of slots, over what horizon, above what effect size) is a preference, not a term. `THE_FORMULA.md` "Direction" says a loop cannot check the direction of its own question. The remedy is a discipline: write the cut down before the measurement and let it be refusable. The bound shape S in section 0 does this; `06_isomers_and_order.md` makes the threshold explicit.

**Refuter:** a reader supplies a threshold after seeing the data and the verdict depends on that choice. If the conclusion flips across reasonable thresholds, the claim was never a finding. Keep every cut ranked and reversible (Fig 9 :41).

### F6 - Both options can be true at once; the currencies do not add

Fig 1 :13 again: **"a global R near zero with one live slot residual is a legal state"**

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**

A finding of "broad" at the worker level within one firm and "narrow" at the firm level across an economy are not contradictory. Capability effects can be diffuse over skill levels in a task and concentrated over firms in a market, because complements are distributed differently at the two scales. Adding the two readings into one headline (for example, one "AI productivity score") is the error Fig 12 names.

**Refuter:** show that the same breadth statistic computed at two scales is bounded to the same value by a single mechanism, so the currency distinction is idle.

### F7 - The measured aggregate is an anchor, but the channel to it decays and must be round-tripped

Fig 10 :24: **"the ground does not decay, the channel does"**

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

The source opened for the anchor, the BLS Productivity and Costs release for Q3 2026, reports a 3.6 percent quarterly rise and a 2.2 percent annualized rate for the current cycle, and it revises earlier quarters (Q2 2026 revised from 1.4 to 2.1 percent). The ground did not decay; the release is a channel that gets revised. Treating any single headline number as settled is the dead-reckoning error. The honest report carries the revision as R_T rather than assuming it away.

**Refuter:** a measurement channel with zero revision and complete slot coverage for this question. None was found in the sources opened.

### F8 - Agreement among experts cannot settle it; filters are not witnesses

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Journal prestige, citation counts and the number of economists who agree are filters for where to spend a checking budget. They are not witnesses. Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."** Two reviews of the same firm-level panel are one evidence pool wearing two names.

**Refuter:** an agreement-based procedure that nevertheless has the ground as an unmovable member and passes the anchor test of Fig 2 :29-30. As stated, that is not agreement-based any more.

### F9 - The question is underived by the figures but not unreachable

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**

No figure line in closure(Γ) yields a distribution of productivity effects. More searching of the figures will not add one. But the world already contains instruments returning something at this resolution: firm-level panels, staggered rollout designs, and official productivity statistics. So this is not an unreachable question. "Unreachable is a verdict, not a silence," but it is not the verdict here. The honest status is: `specified` shape from the figures, empirical answer owed from the ground.

**Refuter:** a genuine re-census that derives a per-slot distribution law from the six-term set with no import. Until then the gap between figure and answer is recorded, not papered over.

### F10 - What actually survives, with mode attached

| claim | mode | figure or source |
|---|---|---|
| The answer must be a per-slot distribution, not a mean | `general` (structural) | Fig 1 :19, :22 |
| Broad and narrow are different conditions needing separate instruments | `specified`, falsifiable | Fig 9 :54, :57 |
| Capability alone does not move measured productivity without contact | `specified`, falsifiable | Fig 11 :39-40 |
| A breadth threshold must be bound before measurement | `general` (discipline) | Fig 12 :112, Fig 3 :26-27 |
| Whether AI *will* in fact be broad, and at what magnitude | **not claimed** | no figure line; ground owed |

---

## 3. Pre-registered refuter

Written before the conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim S is refuted if any of the following holds:

1. Slot decomposition (firm, worker, task) adds no information over the mean for the question asked.
2. A single condition accounts for all dispersion in effects, so the capability/diffusion union collapses to a partition.
3. A capability improvement that changes no measured contact changes measured productivity (breaks Fig 11 :40).
4. A frame-internal capability score settles productivity without a ground reading (breaks Fig 1 :27).
5. The verdict flips across reasonable pre-registered breadth thresholds without being reported as threshold-dependent.

If any fires, S is wrong and the answer in `07_the_tether_answer.md` is withdrawn. Until one is run, no empirical claim is labelled `grounded`.

---

## 4. Recommendation

1. Define the breadth threshold in effect terms before looking at any data (F5). Record every cut and keep it reversible.
2. Measure per slot, then aggregate. Never start from the mean (F1).
3. Unbundle capability breadth from diffusion breadth and give each its own instrument (F2).
4. Use measured output per hour and randomized rollout data as the ground; treat benchmark scores as candidate instruments, not verdicts (F3).
5. Report the revision band around any aggregate number rather than a point estimate (F7).
6. Take the packet in `08_expert_verification_packet.md` to public, opt-in venues and ask what would refute it. Do not pool agreement as corroboration (F8).

---

## 5. Canonical usage check

Two documents were read after the first four sections and they govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"* and *"the quotes are the authority, not this summary."* A reading that makes one figure contradict another has misidentified its domain. The framework returns *"a shape, not a name"* and stops where instruments stop, recording the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the human anchor is for what the figures genuinely cannot settle. The seat must not ask for rulings the figures already decide. This is why this audit derives S rather than asking anyone to endorse it.

### Strains after re-census

- **Fig 1 (per slot) versus the BLS aggregate.** Not strained. Fig 1 governs the residual the question is a residual of; the BLS headline is a projection of it. Different objects. The round trip between them is R_T, not a contradiction.
- **Fig 11 (contact) versus an observed aggregate gain.** Not strained. A change in workflow, data or management is a change in contact, so an aggregate gain is allowed. Only an agent-only improvement with unchanged contact is forbidden.
- **Fig 9 (union) versus the two-option wording of the question.** Strained by the wording, not by the figure. The question is written as A or B; the figure governs a union of conditions. Recorded as a wording correction rather than an answer change.

After re-census: no figure strain left unlabelled. The one genuine gap is empirical: no figure line yields the distribution itself.

---

## 6. Retractions and confirmations

| earlier reading in this run | status after the canonical check |
|---|---|
| "Fig 11 :40 predicts AI cannot raise productivity" | **Retracted.** It forbids an agent-only improvement with unchanged contact. A workflow or complement change is a contact change, so broad gains are allowed. |
| "The BLS aggregate is the anchor for the question" | **Narrowed.** The anchor is the per-slot distribution. The aggregate is a lossy projection, and its revisions are the measured R_T (F7). |
| "Capability benchmarks are useless" | **Retracted as overstated.** They are frame-internal for *this* question; they remain legitimate anchors for capability questions in Domain 2. |
| F1 per-slot requirement | **Canonically confirmed.** Fig 1 :19 and :22, plus Fig 2 :29 anchor legitimacy. |
| F4 habitat claim | **Canonically confirmed.** Fig 11 :39-40, and the metalaws note that capability lives in the habitat. |
| "Broad or narrow is one binary" | **Corrected to union compound.** Fig 9 :54, :57. The correction changes the measurement design, not the verdict shape. |
| Simulated status | **Confirmed.** The Recursive Self-Improvement Trap rule applies to this document; no ground reading was taken. |

### Round trip, summarized

Sent up (x): the per-slot requirement (Fig 1 :19), the habitat claim (Fig 11 :39-40), the union rule (Fig 9 :54), the comparison requirement (Fig 12 :112). Abstracted (T_A): "measure the distribution with a pre-registered threshold." Brought back down (T_E): a concrete study design with named slots, a named breadth cut and a named ground. What survives: all four constraints. What the shorthand dropped when first drafted: the union unbundling and the revision band, both now restored in F2 and F7. R_T is recorded qualitatively as that dropped set; it was not measured numerically because no ground reading was taken.

### Updated verdict

The shape survives and is now checkable: a per-slot distribution with a stated breadth threshold, unbundled into capability and diffusion conditions, with the ground in measured output and contact. The empirical question is **not** answered by the figures. Status `specified`, ungrounded, candidate, with five pre-registered refuters. Strains after re-census: none hidden; one wording correction (binary to union) and one empirical gap recorded.
