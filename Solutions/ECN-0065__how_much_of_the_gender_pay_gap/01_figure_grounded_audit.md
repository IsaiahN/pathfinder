# Figure-grounded audit: ECN-0065, occupation and hours versus discrimination and caregiving

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries a mode. Nothing is labelled accepted.

**Status of this derivation: a simulation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-23: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the labor-economics question it reports on. See `05_what_shape_means.md` section 7.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, and `THE_SEAT_MAP_Field_Guide_amended.md` are framework primaries. World sources are secondary and are listed in `10_source_ledger.csv`. Every verbatim figure quote below was checked character by character against the extract before use.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) minus o'| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is what a worker and an employer take the pay for a slot to be, formed from private history and inherited priors about what that occupation, schedule, and household arrangement normally pays.
- **a** is the arrangement actually enacted: the occupation entered, the hours supplied, the care given, the employer's pay decision.
- **Γ(b,a)** is what the worker's library of credentials, skills, schedule, and bargaining position predicts the pay will be.
- **o'** is the pay actually received, the ground reading for this question.
- **s** is the worker-slot, a person in a job at a time. This is the indexing the question erases.

> Fig 1 :19: "The residual is indexed by object slot, not aggregated."
> Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
> Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

The question as posed asks for the opposite of that rule. It asks for one number aggregated across worker-slots, then divided among four named conditions. The quantity that says *where to look* is exactly what the aggregation removes. That is a structural finding, not an empirical complaint about data quality.

State the residual as: *why does the difference between what a worker's situation predicts and what the pay actually returns differ across worker-slots, and why does any global share of that difference keep changing when the frame of measurement changes?* This is an effect description. It names no percentage, no "explained" bin, and no "discrimination effect". Those are candidate names, withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction") before the run: the answer would be (i) the indexing the residual must keep, (ii) the reason the four conditions form a union rather than a partition, (iii) the currency of each condition, and (iv) an instrument that discriminates, for a named worker-slot, which condition changed the pay. Until bound, this shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." Fig 2 :30: "you push on it, it is not an anchor." The observed earnings record is a named anchor for **magnitude**: the gap exists and has a size in a given dataset. It is not an anchor for **mechanism**. Fig 2 :37-38 puts the restriction plainly: "instruments can be wrong on axes they do not measure." A pay regression is an instrument for the *size* of a difference and is silent on which condition produced it. Viable mechanism anchors: a randomized callback audit, a blind audition, an event-study around a birth, a measured hours change, a measured occupational move, each read at the worker-slot.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation: worker-slot Γ, arrangement a, pay outcome o', and institution/time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because a birth precedes the penalty it creates and an occupational move precedes the pay that follows it. It carries a **comparison** bond (`⋛`, "a threshold relation between two quantities", Fig 12 :87) because "the gap" is a difference between two distributions, not a substance.
- **Symmetry.** The relation is asymmetric. Employer and worker are not interchangeable, and a career interruption is not recovered by reversing it. Fig 12 :92: "Symmetry is what decides whether an arrangement is a new thing." Swapping the four conditions yields a different compound, so the question is about arrangement, not ingredients.
- **Scale.** Three scales are in view: the single worker's loop (Fig 4, one-agent panel), the population of worker-slots with *"something that ranks what they produce"* (Fig 4 :5), and the household/institutional habitat around the worker (Fig 11 :46). The membrane is "Not a wall: a filter with a direction" (Fig 4 :21). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30), not assumed zero.

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where no anchor independent of the model can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Occupation** | workers, employers, gatekeepers, credentials | occupational sorting and the pay attached to an occupation | yes: recorded occupation and occupational pay, which do not move when our frame changes | admitted |
| **D2 Hours** | workers, employers, schedulers | hours supplied, hours paid, schedule flexibility | yes: measured hours and earnings per hour | admitted |
| **D3 Discrimination** | employers, workers, gatekeepers | differential treatment at equal observed productivity | **only if** a source-discriminating instrument exists (callback audit, blind audition, randomized manager). Without one, the "anchor" is the model's own unexplained remainder and moves with the model | admitted conditionally; without instrument, **not a domain yet** |
| **D4 Caregiving burdens** | caregivers, children or elders, households, employers | time out of work, reduced hours, interrupted careers, unpaid care hours | yes: measured care time and labor-force attachment, event-dated around a birth | admitted |
| **X1 "The unexplained residual" as a cause** | the model | leftover variance | **no** anchor independent of the model | not a domain yet; absorbed into D3 as a symptom |
| **X2 "Gender" as a free-floating cause** | a partition label | group membership | no mechanism anchor; gender labels the partition, it is not a condition that changes pay by itself | dissolved into D1 to D4 |
| **X3 "A universal percentage"** | none | one share | no anchor; it changes with dataset, year, and controls | declared `gap` |

X1 fails the anchor test. An unexplained residual is a name for what the frame cannot perceive, and the Symbols table defines R as "always a slice: what cannot be perceived yet is residual and simply cannot be read." It is the starting point of a search, not the terminus of an explanation. X2 is dissolved because gender is the partition variable, not the mechanism. X3 is declared a gap now, before any figure is applied to it, so that no later figure line can be strained to produce a number.

### 1.3 Partition or union

D1 and D2 overlap: occupations differ in their hour structures, and hours are priced inside occupations. D2 and D4 overlap: caregiving is enacted partly as reduced hours. D1 and D4 overlap: caregiving changes occupational sorting and promotion. D3 overlaps all three: a differential at equal observed productivity can be exercised through hiring into an occupation, through scheduling, and through penalties after a birth. The whole question is a **union**, not a partition.

> Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
> Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

A worker who is in a part-time occupation, after a birth, with a manager who discounts mothers is a case in four conditions. By Fig 9 :57 that is a specific compound, not "25 percent occupation, 25 percent hours, 25 percent caregiving, 25 percent discrimination". The shared fraction cannot be assigned by the figures, and forcing a partition leaves the intersections standing (Fig 9 :55-56). This is why the empirical literature's shares move when a new overlapping condition is added. It is not a measurement defect. It is what a union looks like when a partition is forced onto it.

### 1.4 Dependency order (Fig 3)

> Fig 3 :20: "The chain is ordered by dependency, not by importance."
> Fig 3 :24: "Why the middle link is where chains usually break."
> Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Order for this question: 1 perception (can we read which condition fired at this worker-slot?) → 2 vocabulary (do our terms name the condition, or only "explained" versus "unexplained"?) → 3 objective (what would count as progress for this particular gap?) → 4 planning (which intervention?) → 5 learn and carry. The "how much" question is asked at link 3 with an observer-side variance decomposition, which is not the worker's or the institution's term for what counts as progress. Most effort in this literature lands above the break, where the aggregate measurements already exist, which is why hundreds of percentages can accumulate without settling the mechanism (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot indexing; frame-internal quantities disqualified | governs how R is indexed; forbids the global split as a steering signal |
| 2 The Ground | anchor for magnitude, instrument for mechanism; independence and common pool | governs the witness rule and the anchor test |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs why percentages accumulate without settling |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer from worker to population |
| 5 Mint Pipeline | three guards as product; "explains everything by saying nothing" | governs why "discrimination" cannot be admitted as an unexplained bin |
| 6 Closure / Reachability | import is the only wall-moving operator; instruments improved from worse instruments | governs the instrument requirement for D3 |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governs why agreeing studies are one witness |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs source independence across datasets |
| 9 Leave / Arrive | union versus partition; describe residual first; filters versus witnesses | decisive for the "how much" framing |
| 10 Ground Maintainer | ground does not decay, channel does; pooled readings; keep anchor reachable | decisive for D3 and for aggregates |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1, D2, D4 and their overlap |
| 12 The Bond | comparison is a threshold; arrangement is the substance; two currencies do not add | governs additivity of the four "shares" |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop on a universal number |
| Operators and Symbols tables | ⋛ threshold; R as aim and slice; R_T round trip | governs notation and the residual definition |

**Strain test applied during this census.** An early attempt to map the four conditions onto the six-term physical substrate (occupation as space, hours as time, caregiving as network, discrimination as gradient) only fit by calling each condition a kind of physical state or structure. That is a strain, so Fig 13 does **not** govern the four labor-market domains. Re-census sends Fig 13 to the honest-stop role only (section 7, S1), as the validated BUS-0001 and BUS-0009 solutions did for their own domains. A second strain appeared when reading Fig 12's "two currencies" literally onto four pay-gap causes. Re-census: Fig 12 governs bits versus actions; the extension to four causal currencies is an analogue, marked `specified` by analogy and single-source (S3). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about this question, `grounded` only if settled by a measurement at the ground. None is `grounded`.

### F1: The global percentage aggregates away the only signal (decisive)

**Mode: `general` structural, `specified` for this question. Domains D1 to D4. Status: triangulated (Fig 1 per-slot residual and Fig 3 dependency order, low overlap between the agent loop and the chain).**

> Fig 1 :19: "The residual is indexed by object slot, not aggregated."
> Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
> Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

A decomposition of a national pay gap reports the share of variance attributable to an effect class across a whole sample. That is an average over objects, and by Fig 1 :22 the quantity that says *where to look* is exactly what the average removes. The share is also frame-internal in the sense of Fig 1 :27: it is produced by the model that uses it, so it cannot score the model's own explanation.

Fig 3 adds the dependency reason. The question is asked at the objective link, and the instrument applied (ANOVA or Oaxaca-Blinder style decomposition over a sample) is an observer-side population statistic, not the worker's term for what counts as progress. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

**World bearing (secondary only).** Blau and Kahn (2017, *Journal of Economic Literature*, opened 2026-11-23) write: "By 2010, conventional human capital variables taken together explained little of the gender wage gap, while gender differences in occupation and industry continued to be important." The same paper notes that "women's work force interruptions and shorter hours remain significant in high-skilled occupations". These are aggregate statements, exactly the objects F1 says cannot steer. They corroborate the existence of a measurable split and carry zero weight for the verdict.

**Refuter:** exhibit a stable per-slot attribution whose global percentage predicts a named worker-slot's response to an intervention better than the per-slot reading does. If that holds, F1 is false.

### F2: The four conditions form a union, not a partition (decisive)

**Mode: `specified`, with a `general` structural core. Domains D1 to D4. Status: triangulated (Fig 9 union rule and the Simpson's-paradox literature in mathematics/statistics, genuinely low overlap; plus Fig 8 on overlap).**

> Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
> Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

Occupation, hours, discrimination, and caregiving are not four boxes summing to 100 percent. They are four conditions that overlap on every worker-slot. A worker in a part-time occupation, after a birth, facing a biased manager is a case in four conditions, which by Fig 9 :57 is a specific compound. The shared part cannot be assigned to one condition without changing the question.

**World bearing (secondary only, low overlap).** The *Stanford Encyclopedia of Philosophy* entry on Simpson's Paradox (first published 2021, substantive revision 2026, opened 2026-11-23) defines the phenomenon: "Simpson's Paradox is a statistical phenomenon where an association between two variables in a population emerges, disappears or reverses when the population is divided into subpopulations." Its section on discrimination reports that in the Berkeley admissions case "women were more likely to apply to departments with lower acceptance rates. This leads to a probabilistic association between gender and the partitioning variable (department), which we have seen can lead to Simpson's reversals." The occupational analogue is exact: a population-level gap can change or reverse when partitioned by occupation, because occupation is correlated with both gender and pay. That is a different field from the metalaw and corroborates the union shape.

A second, independent empirical signature is in Kleven, Landais, and Søgaard (2018 NBER WP 24219, opened 2026-11-23): "The arrival of children creates a gender gap in earnings of around 20% in the long run, driven in roughly equal proportions by labor force participation, hours of work, and wage rates." One event fires three channels at once. That is a union measured at the worker-slot, not three additive causes.

**Refuter:** exhibit a decomposition whose per-condition shares are invariant to adding an overlapping condition and to the choice of reference category, with an assignable shared part. If such an invariant partition is demonstrated, F2 is false.

### F3: A share is a filter for the budget, never a witness for the cause

**Mode: `general` (metalaw), `specified` when applied to a dataset. Status: single-source for the figure line, with the decomposition-methods literature as corroboration.**

> Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
> Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

A percentage from a variance decomposition tells a research team where to spend the next month of data collection. It does not tell them which condition changed a worker's pay. Blau and Kahn (2017) conclude that "research based on experimental evidence strongly suggests that discrimination cannot be discounted", while the same survey reports that the explanatory mix changes with year and with the controls included. Fortin, Lemieux, and Firpo (2010, NBER WP 16045, opened 2026-11-23) state that their methods "discuss the assumptions required for identifying the different elements of the decomposition". Identification depends on assumptions; the resulting shares are conditional on what the frame holds, which is the definition of a frame-internal score.

**Refuter:** show a share that survives a change of identification assumptions and a change of instrument class with the same value and the same interpretation. Until then, no share may be promoted to a verdict.

### F4: "Discrimination" is not a domain until an instrument exists

**Mode: `specified`. Domain D3. Status: triangulated (Fig 3 dependency chain and Fig 5 mint guards, low overlap between instrument logic and admission logic).**

> Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."
> Fig 5 :21: "the gap has real mass somewhere."
> Fig 5 :26: "and then: does the new term cost less to state than the confusion it removes?"
> Fig 5 :43: "A term that explains everything by saying nothing"

Using "discrimination" as the label for the unexplained remainder fails the support guard and the bargain. It has no independent anchor (X1), and it explains everything by saying nothing: any residual, whatever its cause, is called discrimination. Fig 5 :43 names exactly that failure. What is owed is an instrument that makes differential treatment readable at equal observed productivity.

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 6 :35: "the search for a proto-instrument is a search for one that is already there." There are such instruments. Bertrand and Mullainathan (2004, *American Economic Review*, opened 2026-11-23) randomized perceived race on otherwise identical resumes and report: "White names receive 50 percent more callbacks for interviews." This is a race audit, not a gender audit, so it is a **method analogue**, not a direct measurement of the gender gap. It matters here only because it demonstrates a class of instrument that returns a differential-treatment reading independent of the model's residual.

**Refuter:** exhibit a source-discriminating instrument for gender differential treatment whose reading is unchanged when the controls in the earnings model are changed, or show that no such instrument can exist in principle. The first would admit D3; the second would make D3 a genuine `gap` rather than a conditional domain.

### F5: The aggregate can reverse when partitioned

**Mode: `general` structural, `specified` for this question. Status: triangulated (Fig 1 per-slot rule and SEP Simpson's Paradox, low overlap).**

> Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."
> Fig 2 :37: "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."

The Nobel Committee's 2023 press release on Claudia Goldin (opened 2026-11-23) states: "Historically, much of the gender gap in earnings could be explained by differences in education and occupational choices. However, Goldin has shown that the bulk of this earnings difference is now between men and women in the same occupation, and that it largely arises with the birth of the first child." The same object, the gender earnings gap, moved its explained location across a century. Goldin (2014, *American Economic Review*, opened 2026-11-23) adds the mechanism: "The gender gap in pay would be considerably reduced and might vanish altogether if firms did not have an incentive to disproportionately reward individuals who labored long hours and worked particular hours." The aggregate did not change because one cause was finally measured. It changed because the conditions themselves moved.

**Refuter:** show that a single fixed partition explains the gap's magnitude and location across a century and across countries without a change of conditions. If that holds, F5 is false.

### F6: Conditions are contact-changing and their valence is residual-relative

**Mode: `general` structural, `specified` for each domain. Domains D1, D2, D4. Status: triangulated (Fig 11 habitat and Fig 10 channel, low overlap between capability-at-scale and anchor maintenance).**

> Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."
> Fig 11 :46: "conditions: light, water, temperature, season, terrain"
> Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."
> Fig 10 :24: "the ground does not decay, the channel does"

Occupation, hours, and caregiving are habitat conditions around a worker, not properties of the worker. Fig 11 :49 makes the valence point: a part-time schedule is a benefactor to a worker whose residual is "time for care" and a malfactor to a worker whose residual is "promotion to partner". The same condition cannot carry a fixed sign across residuals, which is a second reason a fixed percentage is the wrong object.

UN Women's economic empowerment page (opened 2026-11-23) states institutional corroboration in a different field: "because women perform the bulk of household work, they often have little time left to pursue economic opportunities." The parental-investment literature (Trivers 1972, as summarized on the Wikipedia page opened 2026-11-23) defines care as "any parental expenditure (e.g. time, energy, resources) that benefits offspring". That is mechanism-shape corroboration from evolutionary biology only. It does not ground a pay gap and is never used as one.

**Refuter:** show that one of these conditions leaves the worker's contact with the pay ground unchanged in a case where the measured gap moves. If so, the condition is a proxy, not a lever.

### F7: Pooled readings are a channel failure, not a verdict

**Mode: `general` structural, `specified` for D3 and for aggregate series. Status: triangulated (Fig 10 and Fig 2, low overlap between channel maintenance and anchor definition).**

> Fig 10 :26: "saturated metrics, pooled readings"
> Fig 10 :28: "you have lost touch"
> Fig 10 :52: "Bring a characterised residual, never the source."
> Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Fig 10 lists pooled readings among the ways a channel dies. When several conditions are pooled into one gap statistic and the statistic is then used to decide which condition fired, the output is "you have lost touch", not a verdict on the world. The fix is to restore the reading, that is, to re-establish the per-slot instrument, not to adjudicate what the pooled number would have said.

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Goldin, Blau and Kahn, Kleven and colleagues, and the Nobel press release all draw on a broadly shared labor-economics evidence pool. They are one witness with several names, not four confirmations (Fig 2 :40). Genuine independence here comes from the Simpson's-paradox mathematics, the attribution-psychology entry, and the biology entry, none of which reads labor datasets.

**Refuter:** demonstrate that the pooled gap statistic, with no per-slot instrument, predicts intervention outcomes at a named worker-slot as well as the disaggregated reading does. If so, F7 is false.

### F8: The four shares cannot be added

**Mode: `specified` by analogy from a `general` figure rule. Status: single-source, marked as an analogue rather than a direct figure verdict.**

> Fig 12 :125: "A composition costs in two currencies, and they do not add."
> Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."
> Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it."

The figure's own case is description cost versus action cost, in bits and actions. The four conditions here have different currencies too: occupational sorting (a categorical move), hours (a time quantity), differential treatment (a conditional comparison), and caregiving (an unpaid time expenditure). Adding their "shares" into one 100 percent requires a common currency that the figure does not supply. This is an **analogue**, not a claim that Fig 12 was written about wage gaps. It is recorded here as single-source and `specified` by analogy, and S3 in section 7 keeps the strain visible.

**Refuter:** supply a common currency in which all four condition effects are commensurable, such that a single additive decomposition is definitionally valid rather than a modelling choice. If supplied, F8 is false.

### F9: The universal percentage is a `gap`, unreachable rather than silence

**Mode: `general` on the limit, `specified` on this question. Status: single-source for the figure line, `gap` for the number.**

> Fig 9 :32: "you get a kind of thing, never the answer itself"
> Fig 13 :134: "Unreachable is a verdict here, not a silence"
> Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line returns a universal percentage, and no world source supplies one that is invariant across datasets, years, and instruments. This is the **unreachable-at-this-budget** kind of gap, not the underivable-in-principle kind: with instrument-level data at the worker-slot and randomized or matched conditions, a local answer is reachable for a named population and a named year. Fig 8 :40-43 requires that the two kinds be kept apart. Searching harder over the same aggregate datasets will not produce the number (Fig 8 :32), but importing a new instrument can change what is answerable.

**Refuter:** publish a stable universal percentage that replicates across datasets with non-overlapping instruments and survives the addition of an overlapping condition. Until then the honest report is `gap`.

### What survives, with its mode

| claim | mode | figure or source |
|---|---|---|
| The residual must stay indexed per worker-slot | `general` structural | Fig 1 :19, :22, :28 |
| The four conditions form a union with an unassignable shared fraction | `specified`, falsifiable | Fig 9 :54-57; Simpson's paradox corroborates at low overlap |
| A variance share is a budget filter, never a mechanism verdict | `general` metalaw | Fig 9 :60; Fig 1 :27 |
| Discrimination is admitted only with an instrument; otherwise it is a symptom | `specified` | Fig 3 :27; Fig 5 :21, :43; Fig 6 :32 |
| Occupation, hours, and caregiving are contact-changing habitat conditions with residual-relative valence | `specified` per domain | Fig 11 :40, :46, :49; Fig 10 :24 |
| The four shares cannot be summed in a figure-supplied common currency | `specified` by analogy, single-source | Fig 12 :125-130 |
| A universal percentage is `gap`, unreachable at this budget | `general` limit | Fig 13 :134; Fig 8 :32, :39 |

---

## 4. Pre-registered refuter

Required before any outreach, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* Written before the conclusion. The shape claim is refuted if any of the following holds:

1. A decomposition is exhibited whose per-condition shares are invariant to adding an overlapping condition and to changing the reference category, with an assignable shared part. This falsifies F2.
2. A single instrument is shown to discriminate all four conditions at the worker-slot with no cross-condition remainder. This falsifies the union instrument claim in section 1.3 and F2.
3. Randomizing or matching occupation, hours, and caregiving leaves the measured pay gap unchanged in a case where the figure predicts a change. This falsifies F6 through Fig 11 :40.
4. A universal percentage is replicated across datasets using non-overlapping instruments and survives the addition of an overlapping condition. This falsifies F9.
5. A figure re-census shows the four conditions forming a partition under the atom-and-currency census, or shows Fig 12 licenses a common additive currency for them. This falsifies F2 or F8.
6. The global percentage predicts a named worker-slot's response to an intervention better than the per-slot reading does. This falsifies F1.

If any fires, the shape is withdrawn or narrowed, and the change is recorded here rather than silently edited. Until one is run, no part of this folder may be labelled `grounded`.

---

## 5. Recommendation

1. Refuse the requested object, then answer the question that survives: ask which condition changed the pay at a named worker-slot, with an instrument for each condition.
2. Keep the four verdicts separate. Never average them into a single split.
3. Treat every published percentage as a filter for where to collect the next instrument, never as a witness for a cause (Fig 9 :60).
4. For D3, demand the instrument before the name. An unexplained remainder is a symptom that contact has been lost (Fig 10 :28), not a finding.
5. Report the round-trip gap R_T when condensing the derivation into a headline. The condensation is lossy by Fig 4 :30.
6. Use `03_public_contact_points.csv` for one-to-one, opt-in contact. Ask for a refutation, never for agreement (Fig 2 :35).
7. State the mode on every sentence that leaves the folder (Seat Map :281).

---

## 6. Canonical usage check and retraction log

Two sources were read after the first five sections and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. The key canonical sentence is that the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of what instruments distinguish and records the lineage. *"Indiscernibility is not identity."* WATSON 60 adds that the figures are the ground for design questions, so no ruling from a human anchor is owed on what the figures already decide.

| earlier reading | status after the canonical check |
|---|---|
| S1: mapped occupation, hours, caregiving, and discrimination onto the six physical terms | **Retracted as a strain.** Fig 13 governs the physical minimum set, not labor-market conditions. Re-census sends it to the honest-stop role only (Fig 13 :134). No figure line governs the four conditions directly. |
| S2: "discrimination is the unexplained residual, so the figures name it as a cause" | **Retracted.** An unexplained remainder has no anchor independent of the model (X1). Fig 5 :43 refuses a term that explains everything by saying nothing. D3 is admitted only with an instrument. |
| S3: "the answer is a set of national percentages" | **Narrowed.** The figures return a shape, not a name or a number (Fig 9 :32; figures README). Percentages are filters. |
| S4: "shape, not a name forbids naming occupation, hours, or caregiving" | **Retracted as applied to already-available conditions.** The README's rule governs a *missing* primitive. Naming an available condition is a binding, not an invented primitive. Same correction the exemplar preserves in `05` section 5b. |
| F2 union reading | **Canonically confirmed.** Fig 9 :54-57 and the README's re-census rule: a reading that makes figures contradict one another has misidentified its domain. |
| F9 universal percentage | **Canonically confirmed.** Fig 13 :134, *"Unreachable is a verdict here, not a silence"*, and the README's stop-at-the-limit rule. |
| "the figures decide the whole labor question" | **Refused.** The figures decide the *shape* of the answer. They do not measure a gap and do not name which condition fired at a worker-slot. That is the ground's office. |

### Strains and re-census, visible

- **S1 Fig 13 physical substrate versus four labor conditions.** Retracted and preserved above. Re-census: different objects, no conflict.
- **S2 unexplained residual as a cause.** Retracted and preserved above. Re-census: residual is the aim and a slice (Symbols table), not a term.
- **S3 Fig 12 two currencies versus four causal currencies.** Live but contained: the extension is an analogue, marked single-source and `specified` by analogy in F8. No figure verdict depends on it.
- **S4 social-psychology attribution source is contested.** The Wikipedia entry records a 2006 meta-analysis and a 2015 critique of the standard demonstration. Weight reduced accordingly; it is used only to note that audiences over-read dispositional explanations, never as a ground.
- **S5 external validity of the Danish child-penalty study.** Kleven et al. is one country, 1980 to 2013. It corroborates the union shape at the worker-slot, not a universal magnitude. Recorded, not generalized.
- **After re-census: one live analogue strain (S3), two source-quality limits (S4, S5), two retracted readings preserved (S1, S2).** Nothing hidden.

---

## 7. Updated verdict

The shape survives. The residual must remain indexed per worker-slot. Occupation, hours, discrimination, and caregiving form a **union of overlapping conditions with a shared fraction the figures cannot assign**, not a partition with additive shares. A variance share is a filter for the budget, never a witness for a cause. Discrimination is admitted as a domain only when an instrument makes differential treatment readable, because otherwise it is the model's own remainder and a symptom of a dead channel. Occupation, hours, and caregiving are contact-changing habitat conditions whose valence flips with the residual. A universal percentage is a declared `gap` of the unreachable-at-this-budget kind. Mode `specified` on the substantive claims, `general` on the structural shape, not `grounded`. Simulated derivation, internally consistent with the figure text, not a test of the labor-economics claim.
