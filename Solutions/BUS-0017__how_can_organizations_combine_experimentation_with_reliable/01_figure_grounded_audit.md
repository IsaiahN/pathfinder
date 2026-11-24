# Figure-grounded audit: combining experimentation with reliable, repeatable operations

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per THE_FORMULA.md: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The canonical local figure text `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the figures README, `FRAMEWORK/figures/THE_FORMULA.md`, the seat map field guide, and the public sources in `10_source_ledger.csv`. Every `Fig N :line` quote below was checked against the local extract.

---

## 0. The residual in effect terms

Let the organization's repertoire Γ be its routines, standard procedures, metrics and working distinctions. For each object slot s (a product line, a patient pathway, a customer segment, a safety-critical operation, a team), define

`R_s = |Γ(b,a) − o'|`

where `Γ(b,a)` is what the repertoire predicts will happen when the organization acts, and `o'` is what the ground actually returns. The ground is a measurement, an experiment, a counter, a market, a patient outcome (Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks"). Fig 2 :36 adds the legitimacy condition: "An anchor is legitimate when the question is constitutively about it." This question is constitutively about organizations, which are made of people, so human and customer or patient outcomes are legitimate anchors here, not merely instruments.

Two distinct failures of `R_s` are visible:

- **Reliability failure.** A settled routine's prediction drifts away from what the ground returns, or `R_s` stops arriving at all. The ground has not changed; the channel has. Fig 10 :24: "the ground does not decay, the channel does." Fig 10 :25-26: "stale percepts, dropped transients, saturated metrics, pooled readings." When the signal stops, Fig 10 :27-29 says the output is not a verdict but "you have lost touch", and the instruction is "keep the anchor reachable."
- **Experimentation failure.** A novel situation arrives whose shape is not in `closure(Γ)`. No term in the repertoire predicts it, so `R_s` persists and does not trend down. A new term is owed (FORMULA step 3, "BROKEN · mechanism a mint is owed"), gated by SUPPORT, REACHABILITY and NOVELTY, and settled only by the ground (FORMULA step 5: "the ground settles it. Verified only by what pays. A gate is not the ground").

The question "how can an organization combine the two" is therefore not a question about allocating a percentage of effort. It is the question of how two different loops, one driving `R_s` down on settled slots and one minting terms for novel slots, can occupy one organization without either destroying the other's contact with the ground.

**Arity.** Two conditions, not one objective. Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." **Symmetry.** Not symmetric and not commutative. The membrane has a direction (Fig 4 :22), and the two have different currencies (Fig 12 :125-126). **Scale.** Each loop closes within one scale (FORMULA, "Closure": steps 1 to 5 close within one scale); the handoff between an experiment and an operation crosses a scale boundary and therefore carries a round-trip gap `R_T` (Fig 4 :30-32).

---

## 1. Figure census

Before choosing any figure line, describe R by arity, symmetry and scale (done in section 0), then one line per domain with actors, currency and anchor. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | partition or union | dependency |
|---|---|---|---|---|---|
| **D1 Operations and reliability** | operators, routines or SOPs, metrics, incidents, customers or patients | per-slot residual kept near zero; contact maintained | the ground: customer outcome, patient outcome, incident, market | partition side A | must perceive before it can voice; perception is link 1 of Fig 3 |
| **D2 Experimentation and minting** | experimenters, hypotheses, prototypes, instruments | actions spent to test a candidate, bits to state it | the same ground, reached through a different closure | partition side B | mint only after support, reach, novelty; refuse before mint (FORMULA step 2) |
| **D3 The membrane and handoff** | methods, head starts, records, review boards | what crosses, and the loss across the crossing | the round-trip gap `R_T` (Fig 4 :30) | neither side; it is the boundary | comes after both first loops have something to carry |
| **D4 The compound intersection** | both sets, where a single unit must be reliable *and* change | both currencies, unmerged | the ground for the compound | union, not partition (Fig 9 :54) | its own loop, after D1 and D2 are distinguished |

No domain here lacks a nameable anchor, so all four are domains. D3's anchor is the measured round trip, not an opinion about the handoff. D4 is a union because the two conditions overlap in real operations. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." A single lever clears the region where only one condition holds and leaves the intersection standing (Fig 9 :56-58).

**Dependency order (Fig 3).** Fig 3 :20-21: "The chain is ordered by dependency, not by importance." The order is: perceive (can we see a per-slot residual at all?), vocabulary (do we have terms for what a situation affords?), objective (what counts as progress in each loop?), plan, then learn and carry. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." The middle link, having terms for what a situation affords and being able to say what would count as progress, is where these organizations usually stop, because it has no instrument (Fig 3 :25-27). Most improvement effort lands above the break where measurements already exist (Fig 3 :29-30).

### Figure-first census (quotes before conclusions)

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | per-slot residual; frame-internal quantities disqualified | global KPIs cannot settle reliability |
| **2 The Ground** | anchor must not update; independence; agreement has valence | customer/patient/instrument is the anchor, not consensus |
| **3 Dependency Chain** | order by dependency; the middle link has no instrument | diagnose the link, do not buy another optimisation tool |
| **4 The Membrane** | methods up, head starts down, never recordings or replays | the combination is a directed filter with a measured gap |
| **5 Mint Pipeline** | three guards as a product; curiosity output is not success | experiments are budgeted by filters, settled by the ground |
| **6 Closure / Reachability** | import is the only operator that moves the wall; inward and outward are two tracks | a new experiment method is an import with a source gate |
| **7 Room Chain** | agreement compounds, evidence does not; next room must differ | one more review meeting is a mirror, not a ground |
| **8 Union Surplus** | low overlap is where the surplus lives; residual first, frame second | describe the residual before choosing a management fashion |
| **9 Leave / Arrive** | split when each rule works on a different subset; unbundle a union | split D1/D2; treat D4 as a compound, not a blend |
| **10 Ground Maintainer** | the ground does not decay, the channel does; bring the residual, never the source | reliability is a seat's office, not a loop's output |
| **11 The Habitat** | capability is agent-and-habitat; a test harness substitutes habitat | a pilot proves wiring, never capability |
| **12 The Bond** | two currencies that do not add; plan is sequence, goal is comparison, progress is subtraction | the two sides need different notation, not one score |
| **13 Minimum Viable Set** | closed set, unbounded arrangements; infinite effort inside a finite reach | reliability has no final settled state |
| **Operators table** | `¬` refusal; `→` sequence; `⋛` comparison | a reliability target is a comparison, not a production bond |
| **Symbols table** | `R` is the aim and always a slice; `R_T` is the round trip | report residuals and gaps, not term counts |

Strained readings are named, not smoothed over. Two strains are recorded in section 5.

---

## 2. Findings

### F1 — This is a union of two conditions, not one objective to balance (decisive, triangulated)

Fig 9 :4-5:

> **"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."**

Fig 12 :125-126:

> **"A composition costs in two currencies, and they do not add."**
> **"Bits price the description. Actions price finding out whether it holds."**

Fig 12 :130: **"Summing them into one figure is the error this names, not the fix for it."**

The reliability loop works well on settled slots; the mint loop works well on novel slots. A single blended objective (for example one score that trades experiment throughput against uptime) makes each rule work slightly worse on the subset it governed well, and the disagreement does not shrink with effort. That is Fig 9's signature of several well-formed questions, not one hard one. It is also the two-currency error of Fig 12: the cost of stating a routine (bits, documentation, training) and the cost of finding out whether a candidate works (actions, experiments) are in different units. Adding them into one KPI is the named error.

**World corroboration (independent of the figures' author).** James G. March, "Exploration and Exploitation in Organizational Learning," *Organization Science* 2(1), 1991, writes that "adaptive processes, by refining exploitation more rapidly than exploration, are likely to become effective in the short run but self-destructive in the long run," and that adaptation tends "to increase the reliability of performance rather more than its mean." Cinotti et al., "Dopamine blockade impairs the exploration-exploitation trade-off in rats," *Scientific Reports* 9:6770, 2019, show in a different stratum that "decreasing dopaminergic activity does not affect learning rate but is equivalent to an increase in random exploration rate": two separate parameters, separately controlled. O'Reilly and Tushman, "The Ambidextrous Organization," *Harvard Business Review*, April 2004, report the organizational version: successful firms "separate their new, exploratory units from their traditional, exploitative ones, allowing for different processes, structures, and cultures; at the same time, they maintain tight links across units at the senior executive level."

If two independent bodies of work, one organizational and one neuroscientific, arrive at "separate the mechanisms," that is convergent derivation at low overlap (Fig 8 :50-52). It corroborates; it does not decide.

**Verdict:** `specified`, triangulated across Fig 9 and Fig 12 plus three independent world sources. Differentiate the loops; do not average them.

### F2 — Reliability is maintained contact with an unmoving anchor, not repetition of a recording (triangulated)

THE_FORMULA.md, "Closure": "Nothing here maintains the ground. The ground does not decay; the channel does, and that is a seat's office, not the loop's."

Fig 10 :24: **"the ground does not decay, the channel does."** Fig 10 :27-29: the output of a dead channel **"is not a verdict, it is you have lost touch"**, and the instruction is **"keep the anchor reachable."**

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Fig 1 :13 allows the state where "a global R near zero with one live slot residual is a legal state." Fig 2 :29-30 requires that the anchor "does not change its answer because of what any frame thinks" and adds: "If it moves when you push on it, it is not an anchor."

So repeatability is not "do the same thing again." It is the maintenance of a channel that keeps returning `R_s` against an anchor nobody on the team can move. A safety target that gets relaxed because the team is under pressure has become another frame (Fig 2 :33-34: "The anchor must not update"). A global uptime number that hides one live failing slot is the aggregation failure named at Fig 1 :22. A figure reporting zero incidents in a quarter is a saturated metric when reporting has been suppressed (Fig 10 :25-26).

**World corroboration.** The PSNet primer on High Reliability (UC Davis editorial team, AHRQ, last reviewed 2024) says "high reliability is better described as a condition of persistent mindfulness within an organization" and "safety is an emergent, rather than a static, property," adding that "High reliability is an ongoing process or an organizational frame of mind, not a specific structure." Weick and Sutcliffe's chapter sample *Managing the Unexpected* (Wiley, 2001) reports that HROs "treat any lapse as a symptom that something is wrong with the system" and are "better able to notice the unexpected in the making and halt its development."

**Verdict:** `specified`, triangulated across Fig 10, Fig 1, Fig 2, the formula, and two independent world sources. Reliability is a seat's office whose output is "keep the anchor reachable," measured per slot.

### F3 — Only methods cross the membrane; head starts go down, never recordings (triangulated)

Fig 4 :22-26:

> **"Only methods cross up. Only head starts come down."**
> **"upward: a method that can be reapplied. Never the recording of a particular success."**
> **"downward: something that makes the next search cheaper. Never a replay of what worked once."**
> **"A recording carried upward looks like knowledge and is a description of one occasion."**

Fig 4 :34-35: "A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes." Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced." Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

The practical consequence is precise. What an experiment may pass to operations is a reapplicable method, verified and compressed to its essentials, never the narrative of the occasion that succeeded. What operations may pass to an experiment is a head start that makes the next search cheaper (a baseline, an instrument, a known failure mode), never a replay of the routine. A "lessons learned" deck that retells what happened is a recording; it looks like knowledge and is a description of one occasion. The handoff is a one-way filter with a direction, and it must be bracketed by a round trip whose gap is measured rather than assumed.

**World corroboration.** O'Reilly and Tushman (2004) describe exactly this arrangement as "cross-fertilization among units while preventing cross-contamination," with senior integration sharing "cash, talent, expertise, customers" while separation protects the new unit's "processes, structures, and cultures." The Oxford Bibliographies entry on Organizational Ambidexterity (2023) calls the same thing "targeted integration": differentiation of units accompanied by integration effected by the senior team. Neither source is derived from the figures; they are separate witnesses to the same shape.

**Verdict:** `specified`, triangulated across Fig 4, Fig 7 and two independent world sources. The combination is a directed membrane with a measured gap, not a blended process or a common dashboard.

### F4 — A pilot is a substituted habitat; it proves wiring, never capability (triangulated)

Fig 11 :66-70:

> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."**
> **"what you failed to reproduce is invisible until the goal fails"**
> **"what you unintentionally introduced is invisible until it acts"**
> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**

Fig 11 :39-40: "capability is a property of agent-and-habitat, never of the agent alone" and "An improvement that does not change contact changes nothing, however much it improves." Fig 11 :43-48: the habitat "is enumerated, never composed," listed as actors, conditions and relations "read off the world, and what you cannot perceive or measure yet is the residual."

A controlled experiment removes actors, conditions and relations from the production habitat. That is substitution, not deletion of a nuisance variable. The result may be perfectly valid inside the pilot and still fail to transfer, because the dropped actors reappear only when the goal fails and the introduced actors act only when they act. Before admitting an experiment's result to operations, enumerate what the test habitat dropped and what it brought in, then run the round trip of Fig 4 :30 and report `R_T`. This is a checkable instruction, not a metaphor.

**World corroboration.** Amy Edmondson, "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly* 44(2), 1999, found that "team psychological safety is associated with learning behavior, but team efficacy is not, when controlling for team psychological safety," and documents teams seeking honest second opinions because "knowing they cannot provide an objective opinion themselves, they seek an objective eye elsewhere." Weick and Sutcliffe (2001) warn that "Experience by itself is no guarantee of expertise, since all too often people have the same experience over and over and do little to elaborate those repetitions," and describe deference to expertise as decision authority migrating to the person with specific knowledge of the event. Both corroborate the need for an independent reader of the pilot's residual.

**Verdict:** `specified`, triangulated across Fig 11, Fig 4 and two independent world sources. A successful pilot is not evidence of operational capability until the habitat difference is enumerated and the gap measured.

### F5 — Experiment count and incident count are filters, not witnesses (single-source on the figure, corroborated in business)

Fig 5 :48-49: **"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."** and **"Machinery firing is not the milestone."** Fig 1 :24-27 disqualifies "coverage, and compression achieved" and "predicates minted, and credibility accrued" because "A frame cannot score itself with a quantity it also produces." THE_FORMULA.md, step 8: "a system measuring progress by terms minted is counting the denominator." Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Number of experiments, velocity of experiments, and number of ideas generated are frame-internal. They are legitimate budget filters and illegitimate verdicts. Likewise, a falling incident count is only a verdict if the reporting channel has been shown to be reachable (F2); otherwise it is a saturated metric. The witness in both cases is the ground settling a term: a minted change that reduces a per-slot residual, or a contact reading that remains faithful.

**World corroboration.** March (1991) describes "increasing returns to experience" and "positive local feedback" that "can lead to suboptimal equilibria," which is why the easy-to-measure side wins. The PSNet primer says "The absence of errors or accidents leads not to complacency but to a heightened sense of vigilance for the next possible failure."

**Verdict:** `specified`, single-source for the figure rule (Fig 5 plus Fig 1 plus Fig 9, all one framework), with independent business corroboration. Counts budget; the ground decides.

### F6 — The intersection is a compound with its own loop, and no single lever clears it (single-source, live strain named)

Fig 9 :54-58:

> **"when the split lands on a union rather than a partition, unbundle before you search again"**
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
> **"a case in two conditions is not a harder case of either"**

Where a single unit must be both reliable and changing (a safety-critical production line under continuous improvement, a clinical pathway that must not drift while it learns from near misses), splitting into D1 and D2 is necessary but not sufficient. The intersection is a specific compound. It needs its own loop and its own ground, not a weighted average of the D1 and D2 metrics. Fig 12 :130 refuses the sum of the two currencies. What the figures do not supply is a recipe for pricing that compound decision in one number. That absence is recorded as a strain in section 5, not filled with an invented recipe.

**Verdict:** `specified`, single-source for the figure definition of a compound, unmeasured. A shape and a refusal, not a procedure.

---

## 3. Pre-registered refuter

Written before the conclusion, per the seat rule that "a falsifier written before the run is a design instrument, not only an honesty device." Any one of the following fires refutes the shape claim in section 4:

1. **No differentiation needed.** A single process, with no separate seats and no directed membrane, demonstrably drives per-slot `R_s` to zero on settled routines *and* mints ground-settled terms on novel slots, in at least two independent organizations, against an anchor that does not move when pushed. Refutes F1 and F3.
2. **Synthetic solve yields capability.** A controlled pilot's result transfers to production capability with no enumeration of the habitat difference and no measured `R_T`. Refutes F4.
3. **Aggregation is harmless.** A global KPI near zero coexists with a persistently live slot residual invisible to operators, and no degradation at the ground follows over a full operating cycle. Refutes F2 and the aggregation part of F5.
4. **Counts are witnesses.** Experiment count or incident count predicts ground-settled improvement above chance across organizations, with shared evidence pools controlled. Refutes F5.

If any fires, the corresponding finding is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. **Split, then recombine through a membrane.** Give the reliability loop and the mint loop different seats, different currencies and the same unmoving ground (F1, F3). Do not merge their metrics.
2. **Install the ground maintainer first.** Before asking whether operations are good, ask which link of Fig 3's chain it stops at and whether that was measured or assumed (Fig 3 :29-30). Make `R_s` visible per slot; keep metrics unsaturated and the anchor unmovable (F2).
3. **Carry methods, not stories.** From experiments to operations, pass verified reapplicable methods; from operations to experiments, pass head starts. Bracket each handoff with a round trip and report `R_T` (F3, F4).
4. **Enumerate the habitat at every pilot.** List the actors, conditions and relations the test dropped and introduced before claiming transfer (F4).
5. **Budget with counts, settle with the ground.** Keep experiment throughput as a filter, never as a verdict. Treat a falling incident count as a signal to check the reporting channel first (F5).
6. **Name the compound.** Where both conditions bind, give the intersection its own loop and its own ground rather than a blended score, and record the unpriced decision as a strain (F6).
7. **Keep the stop honest.** Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator (the residual, the shape, the refuter), not the conclusion.

---

## 5. Canonical usage check and retraction / confirmation log

Two governing sources were read after the first four sections: the local canonical figures README and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (the local WATSON metalaws note). They constrain how the figures may be used.

- The README: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also "a reading that makes one contradict another has misidentified its domain, not found a flaw." The framework says what a missing thing would have to look like, "a shape, not a name," then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- The metalaws note: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. Design questions are answered by derivation, not escalation.

| earlier reading | status after the canonical check |
|---|---|
| "The figures say structural ambidexterity is the answer" | **Retracted.** That is a name imported from the business literature. The figures return a shape: separate seats, a directed membrane, a measured gap. O'Reilly and Tushman's "ambidextrous organization" is world corroboration that converges with the shape (Fig 8 :50-52: convergent derivation and adopted import look identical in the contents; only the record separates them). It is not the derivation. |
| "The tension is a trade-off to be optimised" | **Retracted.** Fig 9 :4-5 says to split when each rule works on a different subset; Fig 12 :130 refuses the sum. There is no single optimum to compute. |
| "Reliability means running the same process" | **Narrowed, not erased.** Fig 10 :24 governs the channel, not the routine. Repetition is the visible surface; the load-bearing claim is maintained contact. "Do the same thing" survives only as a special case when the ground is unchanged. |
| "One more cross-functional committee fixes the handoff" | **Refused.** Fig 7 :35: "A room's agreement is variation, not a verdict." Fig 2 :35: "A mirror cannot correct you." A committee can author a convention; it cannot make the ground vote. |
| "A successful pilot is proof the method works" | **Refused.** Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." |
| Fig 9 :4-5 versus Fig 9 :54-58 (split versus unbundling a union) | **Not strained after re-census.** The first governs question type (several well-formed questions); the second governs what remains after the split (an intersection that is a compound). Different quantities. Matches the README's re-census rule. |
| "Reliability" in ordinary language versus Fig 10's "ground does not decay, the channel does" | **Not strained after re-census.** Ordinary reliability names low process variance; Fig 10 names what must be maintained for any variance figure to mean anything. Different objects: the reading versus the instrument. |
| F6's unpriced compound decision | **Live strain, named, not hidden.** Fig 12 :130 refuses to add the two currencies, and the figures give no third currency for the intersection. The honest report is a shape plus an open price. |

### Round trip note

Fig 4 :30 requires the round trip to be measured. Abstraction from the figures to the shorthand "split the loops, carry methods across a membrane" discards at least three constraints that the concrete case must recheck: the anchor must not update (Fig 2 :33), the habitat difference must be enumerated (Fig 11 :68-69), and the two currencies must not be summed (Fig 12 :130). `R_T` is therefore nonzero. It is recorded qualitatively as an enumerated set of dropped constraints, not numerically, because no organization was measured here. Treating "the formula is the condensed version of the figures" as identity would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names.

### Final audit state

After re-census: **two apparent strains, both dissolved by re-census; one live open price (F6), named.** The shape survives. The verdict is `specified` and ungrounded. The analysis is internally consistent with the verbatim figure text and with the independent world sources read for this folder. It is not a ground reading and cannot settle the question it reports on.
