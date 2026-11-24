# Figure-grounded audit: fair evaluation when outputs resist measurement

**Mode of this document: `general` on the structural shape, `specified` on the failure predictions, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general - specified - grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement was taken, so nothing here is accepted.

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap (essay, 2026-11-19) says LLM output is an approximate simulation and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md`, section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as Fig N :line), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, plus the world sources recorded in `10_source_ledger.csv`. Every quoted figure string below was checked character by character against the verbatim extract.

---

## 0. Proposal header

```
DECIDES:    The fair-evaluation residual is a union compound, not one hard question.
            Where a question is constitutively about people, the anchor is a maintained
            procedure with voice and error correction, not a metric. The metric is an
            instrument. A = B? No. Refining the instrument and keeping the anchor
            reachable are different moves (Fig 6 :29, Fig 10 :24-28).
HOURS:      One primary seat plus one independent reviewer seat. Audit is not optional
            at scale because agreement compounds while evidence does not (Fig 7 :35).
PRIOR CASE: QMGR-0037, the GR/QM composition, imported as the calibration case. It
            showed the danger of naming a slot the framework leaves open.
ANALOGUE:   Library of Babel searcher: describe the residual in effect terms, bootstrap
            vocabulary by proximity, steer by the question-as-tether, stop at a shape.
LIMIT:      The six-term substrate and the figures are the authority. A reading that
            makes two figures contradict one another has misidentified its domain,
            not found a flaw. Naming a specific HR formula is outside the limit.
```

---

## 1. The residual in effect terms

A firm must allocate rewards, ratings, and feedback. The ground is the actual contribution of each person's work. The readings available to the firm fail in two ways: the output is hard to measure, and the output is pooled across a team. The residual R is the gap between what a fair allocation would reward and what the readings can resolve.

- **Arity:** two conditions. Hard-to-measure and pooled are not the same condition and can co-occur. Fig 9 :54-56: a bundled problem is a union of overlapping conditions, and a case in two conditions "is not a harder case of either. It stops being a mixture and becomes a specific compound." So R is a **union compound** with its own loop.
- **Symmetry:** fairness is a comparison (the ⋛ bond, "a threshold relation between two quantities", Operators table :47-51), not a symmetric join. The comparison is between contributions across person slots, so order and slot identity matter.
- **Scale:** two scales. An individual contributes; a team produces. Fig 4 :19-20 gives the rule for what may cross: "Only methods cross up. Only head starts come down."

**Order by dependency (Fig 3).** Describe R before choosing a frame (Fig 9 :27-28). Refuse a criterion that cannot fire (Fig 10 :19). Settle per-person readings before composing to the team level (Fig 12 :104). Triangulate independent frames afterwards (Fig 2 :31-32). Optimising a link that already works cannot rescue one that does not (Fig 3 :19).

---

## 2. Domain census (before choosing any figure line)

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| D1 Performance measurement | metrics, KPIs, ratings, raters, outputs | measured quantities and scores | actual contribution, which does not move when a frame pushes on it | yes, the ground of the work |
| D2 Organizational justice | employees, peers, managers, procedures | voice, consistency, accuracy, lack of bias, error correction | the affected people and the procedure they can push on | yes, Fig 2 :36-37 makes human judgment legitimate here |
| D3 Verification / outside frame | expert checkers, outside peers | agreement and residual | the ground, never agreement | yes, Fig 2 :45 |
| D4 Individual/team scale boundary | individual contributors, the team, the method that crosses | head starts and reapplicable methods | the round trip gap R_T | yes, Fig 4 :30 |

**Partition or union:** union. D1 and D2 overlap where a rating is both a measurement and a procedure; that overlap is a compound with its own loop, so it is not averaged into either. D3 is the checking seat, not a source of verdicts. D4 is a scale transition, not a fifth source of evidence.

**No domain is admitted without an anchor.** D1's anchor is the actual contribution even when unreadable. D2's anchor is legitimate because "An anchor is legitimate when the question is constitutively about it" (Fig 2 :36). D3's anchor is the ground. D4's anchor is the measured round-trip gap. Had any domain lacked a nameable anchor, it would not be a domain yet and would be dropped.

---

## 3. Figure census (quoted before concluding)

| figure | bearing on R | verdict |
|---|---|---|
| Fig 1 | per-slot residual, aggregation destroys the signal, frame cannot score itself | governs the team-pooling condition |
| Fig 2 | anchor definition, anchor legitimacy for person-questions, independence, triangulation | governs the fairness anchor and multi-source claims |
| Fig 3 | the middle link has no instrument | explains why the question persists |
| Fig 4 | methods cross up, head starts down, round trip gap | governs individual/team scale |
| Fig 6 | inward sharpening vs outward import, refine on an axis that cannot carry it | governs hard-to-measure output |
| Fig 7 | a room's agreement is variation, not a verdict | governs panels and consensus committees |
| Fig 8 | low-overlap union, search is never proof of absence | governs triangulation and honest stop |
| Fig 9 | describe residual before choosing a frame, union vs partition, shape not name | governs method order |
| Fig 10 | channel decay, saturated metrics and pooled readings, install what can be violated, declare stakes | governs the failure diagnosis and procedure design |
| Fig 12 | comparison bond, settled molecule becomes an atom | governs fairness as comparison and team-level composition |
| Operators | ⋛ is a threshold relation; a goal is a comparison | governs the form of the fairness criterion |
| THE_FORMULA | mode rule, refusal before mint, direction discipline | governs honesty and order |

Strained readings are named as such in section 6, not smoothed over.

---

## 4. Findings

### F1 - Index the residual per person, never pooled (decisive for the team condition)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 10 :26 (with :25): "stale percepts, dropped transients, saturated metrics, pooled readings"

A single team output number is an aggregate over person slots. Under Fig 1, that aggregate does not merely lose detail, it destroys the only signal that says where to look. So a team-level bonus computed from one pooled output cannot, by the figures' own rule, be a fair evaluation of individual contribution. Per-person residuals are required before any team composition.

**Mode:** `specified`, derived from a structural rule. **Status:** triangulated across Fig 1 (agent architecture) and Fig 10 (channel maintenance), two figures with low overlap. **Refuter:** show a pooled team metric that preserves a discriminating per-member residual at every slot, or show that per-person residuals are unavailable at any resolution even after a better instrument is introduced. Either breaks F1.

### F2 - Human judgment is the legitimate anchor here (decisive for the fairness condition)

Fig 2 :36: "An anchor is legitimate when the question is constitutively about it."
Fig 2 :37: "Human judgment is the right anchor for is this a good answer for a person, because the question is about people."
Fig 2 :38 (continuing :37): "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."

"Is this a fair evaluation of a person?" is a question constitutively about people. By Fig 2 :37, human judgment is the right anchor for it. A metric (a count, a rating scale, a KPI) is an instrument, and instruments "can be wrong on axes they do not measure." This is the central derivation: the fairness problem is not solved by a better metric becoming the anchor; it is solved by a procedure in which people can be heard and can correct errors, with the metric in the instrument role.

World corroboration (secondary): Tyler 1988 found that procedural justice "has a major influence on both satisfaction and evaluation" and listed "the opportunities for error correction" among the criteria people use. The organizational justice literature defines procedural justice as the fairness of the processes that lead to outcomes, enhanced when people "have a voice in the process." These are low-overlap fields relative to the figures.

**Mode:** `general` (anchor legitimacy), `specified` (the procedure design). **Status:** triangulated across Fig 2 and two independent literatures. **Refuter:** show that the question is not constitutively about people, or exhibit a metric that settles a fairness dispute without any procedure that affected people can push on, where the metric's answer does not move when they push. That would break F2.

### F3 - The failure is a degraded channel, not an absent ground

Fig 10 :24: "the ground does not decay, the channel does"
Fig 10 :27-28: "the output is not a verdict, it is you have lost touch"
Fig 10 :29: "keep the anchor reachable"

Hard-to-measure output is usually described as "we have no ground." Fig 10 says the opposite: the ground does not decay, the channel does. Stale percepts and saturated metrics are a lost channel, not a missing world. The remedy is to keep the anchor reachable, not to buy a more precise-looking instrument. Fig 6 :29 warns what the latter does: "Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."

**Mode:** `specified`. **Status:** triangulated across Fig 10 and Fig 6. **Refuter:** demonstrate that no reading at any resolution returns anything at all, so there is no edge to extend from (Fig 6 :34-35: "Where nothing is, there is no edge to extend from"). That is genuine unreachability, not channel decay, and it sends the case to F11.

### F4 - A criterion that cannot be violated is a convention, not a ground

Fig 10 :18: "a declared meaning is not a grounded one"
Fig 10 :19: "install what can be violated"
Fig 10 :47: "a convention that decides an outcome has stopped being one"

A fairness scale with no possible failing case (everyone always scores well, or a rule that cannot be appealed) declares a meaning and calls it measurement. Fig 10 requires installing what can be violated. Tyler's 1988 criteria include "the opportunities for error correction," which is the same requirement in organizational language. This is a structural requirement on the procedure, not a preference for one rating format.

**Mode:** `specified`. **Status:** triangulated (Fig 10 + Tyler 1988). **Refuter:** exhibit a criterion with no firing condition that still decides outcomes and is not a convention. If it decides outcomes without being violable, Fig 10 :47 has already classified it.

### F5 - Triangulate independent frames, not agreeing raters

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."
Fig 2 :32: "Two people reading the same report are not two frames; two instruments pointed at the same thing are."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 8 :45: "Two frames together reach what neither reaches alone."

Two managers reading the same KPI dashboard are one frame wearing two names. A self rating, a peer rating, a customer outcome and an objective count are four frames only if they draw on different evidence. Fig 2 :40 prices the failure: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Buy independence in proportion to the cost of being wrong (Fig 2 :42).

This narrows a common practice. Multi-source feedback is not automatically triangulation. If peers, subordinates and the manager all observed the same meeting and shared the same narrative, their agreement is the pool talking.

**Mode:** `specified`. **Status:** triangulated across Fig 2 (ground theory) and Fig 8 (union surplus). **Refuter:** show two frames that demonstrably share an evidence pool yet whose agreement still buys a surplus in resolving per-person residuals. That breaks the independence requirement.

### F6 - Describe the residual before choosing the metric

Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit"
Fig 9 :32: "you get a kind of thing, never the answer itself"

If a firm first installs a metric and then asks whether it is fair, any metric will seem to fit, because the residual was never described in effect terms. The Library of Babel essay gives the searcher's discipline: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Fig 9 :32 limits what comes back: a kind of thing, not the answer. So the output of this derivation is the form of a fair evaluation system, not a named formula.

**Mode:** `general`. **Status:** triangulated (Fig 9 + the essay). **Refuter:** produce the metric first and show, without re-describing the residual afterwards, that it discriminates the very contribution it was not built to see.

### F7 - Declare stakes and keep interested readers off the reading

Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying."
Fig 10 :60: "Where a stake cannot be removed, declare it."
Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."

A manager whose team's rating affects their own standing has an interest in the outcome. That is unavoidable and not disqualifying by itself. What is disqualifying is an interest in the reading (wanting the number to come out a particular way while being the one who produces it). The framework's remedy is structural: declare the stake, and keep the reading with someone outside the slice being graded (Fig 10 :86-89 in the seat rules). Procedural justice research independently finds that bias and voice shape perceived fairness.

**Mode:** `specified`. **Status:** single-source for the figure rule (Fig 10), with world corroboration from the justice literature on bias and representation. **Refuter:** show a reader with a stake in the outcome holding the reading without distortion and without declaration, with the ground still settling the result.

### F8 - The middle link of the chain has no instrument

Fig 3 :25-26: "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."
Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Firms can see that work is happening (perception) and can decide rewards (planning). What they usually lack is the middle link: terms for what a contribution affords and a statement of what would count as progress. That link "attracts the least attention and the fewest instruments." This explains the persistence of the question better than a claim that firms are careless. The measurement effort lands above the break, where instruments already exist (Fig 3 :29-30).

**Mode:** `specified`. **Status:** single-source (Fig 3). **Refuter:** exhibit an instrument that states what would count as progress on a contribution before any output exists, and show it is used.

### F9 - Rewarding only the measurable task is sharpening the wrong axis

Fig 6 :29: "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."

When part of a job is hard to measure, a single score over the measurable part does not become more fair as it becomes more precise. It becomes more precisely wrong on the axis it cannot carry. Multitask principal-agent theory gives the same instruction from a different field: Holmstrom and Milgrom (1991) write that "The performance measures upon which rewards are based may aggregate highly disparate aspects of performance into a single number and omit other aspects of performance that are essential if the firm is to achieve its goals."

**Mode:** `specified`. **Status:** triangulated across Fig 6 and economics, low overlap. **Refuter:** exhibit a single metric that carries all the valued dimensions of the role, including the ones currently called unmeasurable.

### F10 - Person and team are two scales; measure the round trip gap

Fig 4 :22: "Only methods cross up. Only head starts come down."
Fig 4 :23: "upward: a method that can be reapplied. Never the recording of a particular success."
Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

A rule that works for one person does not transfer to a team by replay. What crosses upward is a method (how residuals are indexed, how stakes are declared, how frames are kept independent), not the particular score someone once received. Coming back down gives a head start, never a recording. The lossy transform between scales must be bracketed with a measured round trip gap R_T (see `11_audit.md`).

**Mode:** `general` (structural), `specified` (the requirement to measure R_T). **Status:** single-source (Fig 4). **Refuter:** show a team rule that is a verbatim replay of the individual rule with no loss of information and no gap.

### F11 - Where the ground lives in another frame, import; where nothing registers, stop honestly

Fig 6 :30: "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."
Fig 8 :39: "a search that finds nothing is never a proof of absence."
Fig 13 :134: "Unreachable is a verdict here, not a silence,"
Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room."

If the firm's own instruments cannot see a contribution but a customer, a peer group, or a later outcome can, the remedy is an import with a source gate and a shadow test: describe the residual in effect terms and find the frame whose closure predicts its shape (Fig 6 :30, Fig 8). An import is debited against that frame's independence. If nothing registers at any resolution, the verdict is `unreachable`, not silence, and not a licence to invent a number. "A search that finds nothing is never a proof of absence," so the verdict is about the available instruments, not about the world.

**Mode:** `general`. **Status:** triangulated across Fig 6, Fig 8, Fig 9, Fig 13. **Refuter:** exhibit a reading at some resolution that returns something failing to resolve, which reopens the inward search; or show an imported ground whose source gate and shadow test both pass and whose atom was already in the firm's closure (in which case the import added nothing).

---

## 5. Pre-registered refuter (written before the conclusion)

Required before any outreach: "a falsifier written before the run is a design instrument, not only an honesty device" (Seat Map, 2026-11-22 amended field guide, failure genera / output layer).

The shape claim is refuted if any of the following holds:

1. A single pooled team metric is shown to preserve a discriminating per-member residual at every slot (breaks F1 and the aggregation finding).
2. A metric is shown to settle a fairness dispute without any procedure that affected people can push on, and its answer does not move when they push (breaks F2, the anchor-legitimacy claim).
3. Two frames sharing a demonstrable evidence pool are shown to buy a genuine surplus in resolving the residual (breaks F5).
4. A criterion with no possible firing condition is shown to decide outcomes without being a convention (breaks F4).
5. An instrument is shown to return, at some resolution, a signal that fails to resolve the hard-to-measure contribution (breaks F3's channel-decay diagnosis and reopens the inward search).

If any fires, the corresponding finding is withdrawn and the shape is redrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Strains, re-census and corrections

**Strain A, Fig 2 :36-38 versus Fig 2 :29.** Fig 2 :29 says an anchor "does not change its answer because of what any frame thinks." Fig 2 :37 says human judgment is the right anchor for person-questions, yet individual human judgments plainly can be moved by framing. Re-census: the anchor in a fairness question is not a single person's mutable opinion. It is the maintained procedure with voice, error correction and declared stakes (Fig 10 :19, :59-60), which is pinned by the affected people's outcomes and is not a party to the disagreement (Fig 2 :46). The procedure can be violated, so it can be corrected; an individual opinion cannot be corrected by being pushed on unless the procedure lets it. Not strained after re-census, but recorded because the naive reading is wrong.

**Strain B, Fig 1 per-slot rule versus team-level reward.** A team must sometimes be rewarded as a unit. Re-census: Fig 1 governs where a residual is measured, not how a bonus is paid. Per-person residuals can be indexed without being the sole basis of pay. The figure bars aggregation as a measurement practice, not team rewards as an institution. Named, not hidden.

**Correction 1 (retracted).** An earlier reading said "there is no anchor when output is hard to measure." Retracted. The ground does not decay; the channel does (Fig 10 :24). The anchor exists and, for a question about people, is legitimate human procedure (Fig 2 :36-37).

**Correction 2 (narrowed).** An earlier reading treated 360-degree feedback as triangulation. Narrowed. It is triangulation only when the sources draw on different evidence (Fig 2 :31-32). Agreeing peers who shared a narrative are one frame.

**Correction 3 (refused).** An earlier draft sought a specific scoring formula. Refused. The canonical figures README says the framework returns "a shape, not a name", and Fig 9 :32 adds that you get a kind of thing, never the answer. A named formula would be the searcher's contribution and must be recorded as such, not derived.

After re-census: no live strain, three corrections recorded, nothing silently erased.

---

## 7. Recommendation

1. Build the evaluation as a procedure, not a metric: per-person residual accounting (F1), voice and error correction (F2, F4), independent low-overlap frames (F5), declared stakes and outside readers (F7).
2. Describe the residual in effect terms before selecting any instrument (F6). Ask what a fair allocation would have to reward, write it down, and let it accrue a residual.
3. Stop sharpening a metric that cannot carry the signal (F3, F9). Where the ground is held elsewhere, import it with a source gate and a shadow test (F11).
4. Bracket the person-to-team transform and measure R_T (F10). Carry the method up, not the recording.
5. State the mode on every sentence: `general` for the shape, `specified` for the failure predictions, never `grounded` without a reading.
6. Send the generator (the derivation and the refuter), not the conclusion (Fig 4 :23).

---

## 8. Canonical usage check

- Figures outrank everything else; the quotes are the authority, not a summary (canonical figures README). Every quote above was checked against `03-FIGURES_TEXT.md`, not against a paraphrase.
- A reading that makes two figures contradict one another has misidentified its domain. Strain A was resolved by re-census, not by softening either figure.
- The framework returns "a shape, not a name" and "Indiscernibility is not identity" (canonical README). This audit names no specific HR formula.
- "Unreachable is a verdict here, not a silence" (Fig 13 :134). F11 states the stop rather than manufacturing an answer.
- Filters are for the budget, witnesses for the verdict: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict" (Fig 9 :60). No tier or cost score entered a verdict here.

---

## 9. Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "no anchor exists" | Retracted. Fig 10 :24 and Fig 2 :36-37 supply the anchor. |
| "360 feedback is triangulation" | Narrowed to low-overlap sources (Fig 2 :31-32). |
| "framework can name the scoring formula" | Refused. Fig 9 :32 and the README's shape-not-a-name rule. |
| Fig 2 :37 versus Fig 2 :29 | Re-censused. The anchor is the maintained procedure, not an individual opinion. |
| F1 per-slot versus team reward | Re-censused. Fig 1 governs measurement, not pay design. |
| "this is a ground reading of fairness" | Never claimed. Labelled a simulated derivation throughout. |
| Fig 9 :32, shape not a name | Canonically confirmed by the README. |
| Fig 8 :39, search is not proof of absence | Canonically confirmed; stated in F11. |
