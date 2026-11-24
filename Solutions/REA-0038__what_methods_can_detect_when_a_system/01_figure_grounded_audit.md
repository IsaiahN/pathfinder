# Figure-grounded audit: detecting distribution-driven confidence

**Mode of this document: `specified` on the method shapes, `general` on the structural limit. Not
`grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted
means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement
Trap*, 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found
in the architecture post... However, the truly testable output would need to be derived from the
real architecture or working the formula yourself."* This document is a simulated derivation
checked for internal consistency against the figures. It cannot settle the question it reports on.
See `05_what_shape_means.md` §6.

**Sources.** Figure lines from `local: FRAMEWORK/reference/03-FIGURES_TEXT.md` (opened and grepped
this session). Usage rule from `local: FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop and
mode rule from `local: FRAMEWORK/figures/THE_FORMULA.md`. World sources are listed in
`10_source_ledger.csv` and were opened on 2026-11-23.

---

## 0. The residual, stated in effect terms

A system emits a confidence value `c(s)` for a claim at slot `s`. Two different sources can produce
the same value:

- the frequency structure of the corpus it was trained on, that is the base rates, regularities and
  priors it absorbed (the Symbols table calls this the weighting `w`: *"How far the belief leans on
  private history versus inherited prior."*);
- the strength of evidence available for this particular claim at contact with a ground.

The question is not "is the system confident?" and not "is the system accurate?". It is: what would
let an outside observer tell which of the two sources produced the reading? In effect terms this is
a metamerism problem. One instrument reads green and *"the instrument is speaking only about what
it measured, it cannot comment on the source"* (framework essay, *The Hard Problem is About Source*,
opened 2026-11-23). A confidence scalar is that green reading. What is owed is a
source-discriminating instrument, not a better argument about the scalar.

An answer would look like this, and this is the bound term: a **procedure whose output changes when
the source changes while the reading is held fixed, and whose output is checked against a ground the
system cannot move.** Until such a procedure is named and its failure condition written, the
sought-for shape is an unbound preference (Formula, "Direction") and cannot be seen by the loop.

---

## 1. Domain census, before any figure line is chosen

### 1.1 R by arity, symmetry, scale (Fig 9 :22, *arity · symmetry · scale*)

- **Arity.** At least four operands: a system with library Γ and weighting `w`, a claim at slot `s`,
  an observation `o′`, and a ground that settles whether the claim held. The diagnostic object is a
  *pair* of readings of the same slot: the system's confidence and the ground's payment. One field
  with two possible sources is a seam (Fig 10 :13, *two frames, one field, no shared reading*;
  :14, *a disagreement nothing can state*). A two-place reading, system and confidence, loses the
  ground and is rejected.
- **Symmetry.** Confidence values are orderable, so one operand carries a spectrum (Fig 13 :20,
  *ordering, so more and less can be said*). But the two sources are symmetric in their *effect*:
  with only the scalar in hand, neither is distinguishable. Fig 8 :51: *"Convergent derivation and
  adopted import look identical in the contents."* Per-slot readings are not interchangeable with
  the aggregate: Fig 1 :22, *"Aggregating across slots is how a live signal disappears into an
  average."*
- **Scale.** The confidence is produced at the step scale. Its validity is a property at the
  population scale (a calibration curve, a hit rate, a coverage guarantee). The detector therefore
  crosses the membrane, and the crossing is lossy (Fig 4 :27, *"The transform between scales loses
  information, and that is the point."*). This is a cross-scale residual, not a single-scale one.

### 1.2 One line per domain: actors / currency / anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 The frame under test | the model, its Γ and `w` | confidence scalar, credibility accrued | none inside the frame | admitted as the object of measurement, not as a source of verdict |
| D2 The held-out ground | fresh observations, the outcome counter | per-slot residual `R`, hit or miss | the outcome, which does not move when confidence moves (Fig 2 :29) | admitted |
| D3 The shift probe | a calibration set and a deliberately changed marginal | change in confidence per unit change in evidence | the ground's payment under the new habitat | admitted |
| D4 The source discriminator | two low-overlap readings of one slot | the *gap* between the readings | each reading ranges against the ground separately (Fig 2 :45) | admitted |
| D5 The provenance record | origin stamps, the lineage of what the model saw | provenance, date, route | the record, which does not move when confidence moves | admitted |
| X1 "confidence is itself a verdict" | the model | confidence | none nameable | refused, not a domain |
| X2 "raw model ability explains it" | the model alone | accuracy | absorbed into D2 and D3 | absorbed |

No nameable anchor means it is not a domain yet. X1 fails that test and is refused. X2 is absorbed
because Fig 11 :40 says an improvement that does not change contact changes nothing, so ability
apart from habitat cannot be the object.

### 1.3 Partition or union

**Union, not partition.** D2 and D3 overlap: a ground under a changed marginal is a compound with
its own loop, not two independent checks. D4 and D5 overlap: two readings plus a provenance record
are the compound that makes the word "source" mean anything. Fig 9 :57: *"a case in two conditions
is not a harder case of either."* Fig 9 :55: *"A bundled problem is usually a union of overlapping
conditions, not a list of separate ones."* A single lever, such as collecting more confidence
values, clears the region where only one condition binds and leaves the intersections standing.

### 1.4 Order by dependency (Fig 3)

Perception (can we read confidence and outcome at all?) to vocabulary (do we have separate terms for
prior and for evidence?) to objective (what counts as a failure?) to planning (which probe?) to
learn and carry (record the refuter). The chain is ordered by dependency, not importance (Fig 3 :20,
*The chain is ordered by dependency, not by importance.*). The middle link, having a term for what
confidence affords and being able to say what would count as progress, has neither an obvious
failure nor an obvious test (Fig 3 :26, *The link between them, having terms for what a
situation offers and being able to say what would count as progress, has neither, so it attracts the
least attention and the fewest instruments.*). That is exactly why the field lacks a settled
detector. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has
looked at."*

---

## 2. Figure census

| figure | bearing on this residual | verdict |
|---|---|---|
| 1 The Agent | confidence is frame-internal; residual is per slot | governs D1 and D3 directly |
| 2 The Ground | anchor must not update; independence between frames | governs D2 and D4 |
| 3 Dependency Chain | order of dependence; the un-instrumented middle link | governs the method order |
| 4 The Membrane | round trip and `R_T`; confident without a check | governs F7 and the honest stop |
| 5 Mint Pipeline | system output is never a measure of success | triangulates F1 |
| 6 Closure / Reachability | instruments improved from worse ones; what already returns something | governs D3 inward probe |
| 7 Room Chain | agreement compounds, evidence does not | governs outreach, not the detector |
| 8 Union Surplus | identical contents, only the record separates; search is not proof of absence | governs F2 and F9 |
| 9 Leave / Arrive | describe the residual before choosing a frame; filters vs witnesses | governs the census and F8 |
| 10 Ground Maintainer | pooled readings, saturated metrics; verifier non-access; provenance | governs D4 and D5 |
| 11 The Habitat | contact, substituted habitat, harness proves wiring | governs D3 |
| 12 The Bond | two currencies held apart; one scalar conflates them | governs F5 |
| 13 Minimum Viable Set | the honest stop and the closed set of kinds | governs the limit, not statistical content |
| Symbols table | `w`, `b`, `R`, `s` define the objects | notation for the residual |
| Operators table | `⋛` comparison: a threshold relation between two quantities | the detector is a comparison, not a new primitive |
| `THE_FORMULA.md` | mode rule, three questions, direction discipline | process, not verdict |

Strained readings are named in §3 and re-censused, not smoothed over.

---

## 3. Findings

### F1. A confidence value cannot score its own source (decisive for D1)

Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also
produces."* Fig 5 :48: *"Its own output is never a measure of success. A system can be
enthusiastically curious and produce nothing."*

Confidence is *"credibility accrued"* in Fig 1 :26, a quantity the frame produces. Using it to
certify its own provenance is exactly the frame-internal scoring the figures forbid. This is
`triangulated`: the Agent figure (residual machinery) and the Mint figure (output criterion) have
low overlap and agree. Mode `general` for the prohibition, `specified` when applied to a model's
confidence.

**Refuter:** a procedure that, from the confidence scalar and the model's own internals alone, with
no held-out ground and no perturbation of the input distribution, separates prior-driven from
evidence-driven confidence at above-chance rates that survive an independent replication with a
different corpus. If that exists, Fig 1 :27 and Fig 5 :48 do not govern this domain and the domain
must be re-censused.

### F2. Two sources yield one reading, and only the record separates them (D1/D5)

Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the
record of where each came from separates them, and the surplus lives only where the closures
differ."* Fig 2 :20: *"so the agreement is the pool talking,"* and :21: *"not two frames confirming
each other."* Fig 9 :32: *"you get a kind of thing, never the answer itself."*

A corpus-trained prior is an evidence pool. A model high in confidence because a pattern was
frequent in training and a model high in confidence because the present evidence is strong return
the same scalar. The framework essay states the mechanism directly: *"If several paths create the
same behavior, then behavior is a projection with lossy information."* So an instrument that reads
only `c(s)` is inadequate by construction, not by accident. Status `triangulated` between Fig 8
(provenance) and Fig 2 (shared pool), two figures with different subject matter.

**Refuter:** demonstrate a statistic of the confidence trajectory alone whose value is invariant to
a documented intervention that swaps the source while holding the per-slot ground fixed. If the
statistic does not move, F2 fails.

### F3. Aggregate calibration throws away the live signal (D2)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating
across slots is how a live signal disappears into an average."* Fig 1 :28: *"The gap is measured
per object, not per step."*

A single reliability diagram or expected calibration error averaged over all cases is a global
number. A global number near zero with one live slot is a legal state (Fig 1 :13, *"a global R near
zero with one live slot residual is a legal state"*), so the aggregate can report good calibration
while the very slots whose confidence is distribution-driven are miscalibrated. Status
`triangulated` (Fig 1 per-slot rule plus the Symbols table definition of `s`). Mode `specified`
for calibration practice.

**Refuter:** an aggregate calibration statistic that detectably fires on a planted single-slot
source substitution while the per-slot readings are withheld, replicated on a second corpus.

### F4. Detection requires an anchor that does not update on confidence (D2)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of
what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*
Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :45:
*"Frames range against the ground. They do not negotiate with it."*

The held-out outcome is the anchor. The model's own confidence, a second model trained on the same
corpus, and a reviewer who shares the training pool are not anchors. Fig 1 :23: *"The ground enters
as the only metric."* Status `general` for the anchor rule, `specified` for its application here.
`triangulated` across Fig 1 and Fig 2.

**Refuter:** a demonstrated case where a detector that lets the presumed anchor update on model
confidence outperforms one whose anchor is fixed, under a pre-registered comparison.

### F5. One scalar conflates two currencies: keep two readings apart (D4)

Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."* Fig 12 :127:
*"They are in different units, so a system holding one accounting cannot compare them and will not
notice the shortfall."* Fig 2 :31: *"Independence, between two frames, is how little they draw on the
same evidence."*

The figures' two-currency rule is the structural reason a single confidence number cannot carry the
answer. The world has a clean instance: signal detection theory separates *sensitivity* (ability to
discriminate, `d′`) from *bias* (criterion placement, driven partly by base rate), and shows that
multiple combinations of the two produce the same accuracy (Lynn and Barrett, 2014, opened
2026-11-23). Conformal prediction supplies the machine-learning counterpart: a set-valued output
whose size adapts to difficulty, checked on fresh calibration data, instead of a bare softmax score
(Angelopoulos and Bates, 2021/2023, opened 2026-11-23). In both, the detector is the *difference*
between two readings, not either reading alone. Status `triangulated` (Fig 12 plus Fig 2, distinct
quantity and distinct subject).

**Refuter:** show that for some confidence-producing system sensitivity and bias (or confidence and
ground-checked coverage) cannot be estimated separately under any admissible probe, so the two
readings always coincide and the gap carries no information.

### F6. The source-discriminating experiment is a habitat substitution (D3)

Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring
and never capability."* Fig 11 :40: *"A system cannot be made more capable by improving the agent in
isolation. An improvement that does not change contact changes nothing, however much it improves."*
Fig 6 :34: *"The question is not whether a sensor could exist. It is whether anything, at any
resolution, is already returning something that fails to resolve."*

A calibration set drawn from the same distribution is a substituted habitat. It proves that the
confidence mechanism is wired, not that it tracks evidence under a different marginal. The probe
that separates sources changes the marginal while holding the per-case evidence fixed, and asks
whether confidence follows the marginal or the evidence. This is precisely the base-rate
manipulation in the medical diagnosis problem (Casscells, Schoenberger and Graboys, 1978) and the
dataset-shift result in Ovadia et al. (2019): *"We find that traditional post-hoc calibration does
indeed fall short."* Status `triangulated` (Fig 11 habitat plus Fig 6 instrument rule). Mode
`specified` for the experimental design.

**Refuter:** a case where confidence tracks the per-slot ground across a documented covariate shift
with no change in the marginal and no import, after the provenance record is checked.

### F7. The round trip is the measurement of what the abstraction lost (cross-scale)

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead
reckoning: confident about a position nobody checked."* Fig 4 :31: *"The gap is not an error to
eliminate. It is the measurement of what the coarser description cannot hold, and it is the only
honest report of how much was given up."*

Carry "this system is well calibrated" up to a one-line abstraction and bring it back down to a
specific case. What the abstraction cannot hold is precisely the source distinction, because
"well calibrated" averages over the slots and the marginals. The round-trip gap `R_T` is therefore
an operational detector: confidence that survives the round trip unchanged is a recording of a
past occasion (Fig 4 :25, *"A recording carried upward looks like knowledge and is a description
of one occasion."*), not a contact-based reading. Status `single-source` for the round trip itself
(Fig 4), triangulated with F3 for the loss of per-slot structure.

**Refuter:** an abstraction of a confidence claim that, when concretised, preserves per-slot source
identity without retaining the slot data, so `R_T` for the source distinction is zero under a
pre-registered metric.

### F8. Provenance is the only separation when contents are identical (D5)

Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the
record of where each came from separates them..."* Fig 10 :62: *"A ruling carries provenance like an
atom."* Fig 10 :59: *"an interest in the outcome is unavoidable, an interest in the reading is
disqualifying."*

A detection claim must be stamped with what it answered, which data it used, and the date. Without
that, a source-discriminating result and a result manufactured by selecting the corroborating pool
look the same. Fig 2 :43: *"Guard, from Figure 10: a convention that decides an outcome has stopped
being one."* Status `triangulated` (Fig 8 plus Fig 10).

**Refuter:** a detector whose published provenance is missing or internally inconsistent but whose
result survives independent replication. That would show provenance is bookkeeping rather than the
separator.

### F9. The pure introspective detector is a `gap`, and that is a verdict (limit)

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 9 :44, as a
substring: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So
searching and finding nothing proves nothing."* Fig 13 :134, as a substring: *"Unreachable is a
verdict here, not a silence,"*

No figure line governs a method that separates the sources from confidence alone. After the census
in §1, that is not silence: it is ruled out by F1, F2 and F4, which require contact, a second frame
and a record. Fig 9 :32: *"you get a kind of thing, never the answer itself."* What can be stated is
the **shape** of any detector: contact with a ground that does not update, per-slot indexing, a
changed marginal, two low-overlap readings, and a provenance record. The name of a single universal
statistic is not given by the figures. Underivable-in-principle and unreachable-at-this-budget are
different facts (Fig 8 :40, *"Underivable-in-principle and unreachable-at-this-budget are different
facts, and they issue different instructions."*); this is the former for the introspective version,
and an open engineering problem for the instrument version.

**Refuter:** produce such a statistic with the properties denied in F1 to F4, replicated on a corpus
with a different evidence pool. Until then the `gap` stands.

### F10. Confidence is a filter for the budget, not a witness for the verdict

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a
verdict."* A confidence value is legitimately used to route attention (which case to check next,
which example to label, when to abstain). It becomes a defect only when it is promoted to evidence
that the claim is true. Fig 2 :43 (quoted in F8) names the failure: a convention that decides an
outcome has stopped being one. Status `general`, `single-source` for the sentence, corroborated by
the world's selective-prediction practice.

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing rule that a falsifier written before the run is a
design instrument. The shape claim is refuted if any of the following holds:

1. **Introspective separation works.** A method using only the model's confidence and internals,
   with no held-out ground and no distribution perturbation, reliably separates prior-driven from
   evidence-driven confidence, and the result replicates on a corpus with a different evidence
   pool. This breaks F1 and F2.
2. **The anchor moves safely.** A detector that lets the presumed ground update on model confidence
   matches or beats a fixed-anchor detector under a pre-registered comparison. This breaks F4.
3. **The two readings collapse.** For a confidence-producing system, sensitivity and bias (or
   confidence and ground-checked coverage) cannot be estimated separately under any admissible
   probe, so the gap in F5 is identically zero.
4. **Shift does not matter.** Post-hoc calibration retains its guarantees under a documented
   covariate shift with the same calibration set, contradicting F6 and the world evidence in
   `09_watson_answer.md`.
5. **Provenance is inert.** A detector with missing or fabricated provenance replicates as well as
   one with a clean record. This breaks F8.

If any fires, the substrate of this answer is wrong and the claim is withdrawn. Until one is run,
no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Stop treating a scalar confidence as evidence (F1, F2, F10). Publish it as a routing signal with
   its mode attached.
2. Report calibration per slot and per marginal, not as one averaged ECE (F3).
3. Build the detector as a three-part instrument: a fixed held-out ground, a deliberate marginal
   shift with per-case evidence held fixed, and a second low-overlap reading (F4, F5, F6).
4. Ship a provenance record with every reported detector result: which data, which frame, which
   date, which refuter was attempted (F8).
5. Measure and publish the round-trip gap `R_T` between the one-line calibration claim and its
   concretisation (F7). Treat the loss as the result, not as noise.
6. Say the `gap` plainly: the figures return a shape for a detector, not a universal name (F9).
7. Send the generator, not the conclusion: Fig 4 :22, *"Only methods cross up. Only head starts come
   down."* The outreach artifacts do this.

---

## 6. Canonical usage check

Two local sources were read after the first five sections and govern how the figures may be used.

- `local: FRAMEWORK/reference/FIGURES_README_canonical.md`: *"the quotes are the authority, not this
  summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not
  found a flaw"*; and the canonical limit, the framework says *"what a missing thing would have to
  look like (a shape, not a name)"*, then stops at the limit of the instruments and records the
  lineage. *"Indiscernibility is not identity."*
- The WATSON instruction set read from `C:\Users\Admin\.claude\skills\synced\...\tether-watson`:
  figures primary and deciding, world secondary and corroborating only; a conflict sends the
  derivation back to the census, never flips the verdict.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F6 first called "test set calibration is the detector" | **Retracted.** Ovadia et al. (2019) shows post-hoc calibration falls short under shift; Fig 11 :70 calls a harness a substituted habitat. Test-set calibration is a filter for the budget, not a witness for the verdict. |
| "no method exists" | **Retracted and narrowed.** No *introspective* method exists (F1, F2). Ground-based method shapes do exist (F4 to F8). The gap is the universal name, not the whole class. |
| Fig 13 six-term substrate applied to "training distribution" by naming base rates a spectrum | **Retracted as a strain.** Re-census: Fig 13 governs the closed set of kinds and the honest stop, not the statistical content of a corpus. No figure term was renamed to make the fit work. |
| Fig 9 :44 cited as if it opened with "Only a sealed room" | **Citation corrected.** The phrase is an exact substring of the line, not its opening. All such citations are now marked "as a substring". |
| F3 "ECE is the failure" | **Narrowed.** ECE is not wrong, it is aggregate. It is a budget filter unless reported per slot and per marginal. |
| F1 "frame cannot score itself" | **Canonically confirmed.** Fig 1 :27 and Fig 5 :48 are two low-overlap statements of the same prohibition. |
| The answer is a shape | **Canonically confirmed.** The README's phrase *"a shape, not a name"* governs the missing discriminator; the figures return the form of a detector, not a universal statistic. |
| Simulation status | **Canonically confirmed.** The Recursive Self-Improvement Trap essay, 2026-11-23, distinguishes simulated output from testable output. |

### Round trip to the canonical shape

A detector claim carried up to one sentence reads *check confidence against a ground you did not
use, under a changed marginal, with two independent readings and a record*. Brought back down, it
loses: the per-slot indexing (F3), the non-updating anchor (F4), the two-currency separation (F5),
and the provenance requirement (F8). Those four losses are the round-trip gap and are recorded in
`11_audit.md`.

### Verdict of the primary seat

The figure-derived answer survives: detection is a contact operation, not an inspection operation.
Mode `specified`. Strains after re-census: none unresolved. The one genuine world/figure conflict
(Hendrycks and Gimpel find that softmax confidence carries usable OOD signal, which seems to make
confidence self-describing) was returned to the census and resolved: the signal is a heuristic
score that must itself be calibrated against a ground (Angelopoulos and Bates), so it corroborates
F5 rather than breaking F1. The verdict was not flipped by a source.
