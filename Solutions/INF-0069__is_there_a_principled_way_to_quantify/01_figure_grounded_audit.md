# Figure-grounded audit: quantifying the value of information before its content is known

**Mode of this document: `specified` on the per-domain findings, `general` on the structural shape.
Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which.
Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement
Trap* (opened 2026-11-23) says an LLM can *"simulate an approximate answer/output with the formula"*
but that *"the truly testable output would need to be derived from the real architecture or working
the formula yourself."* This document is a simulated derivation checked for internal consistency
against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Figure lines are quoted from
`C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md` (verbatim extract,
cited as `Fig N :line`). The canonical usage rule is in
`FRAMEWORK/reference/FIGURES_README_canonical.md`. The loop is `FRAMEWORK/figures/THE_FORMULA.md`.
World sources are listed with author, venue, year and quote in `10_source_ledger.csv` and were opened
on 2026-11-23; where a direct fetch failed, the source is read through the public search index and
its reduced weight is recorded.

---

## 0. The residual in effect terms

A frame holds belief `b`, library `Γ`, action `a`, and tracks object slots `s`. Its prediction is
`Γ(b,a)`, its observation is `o'`, and its residual is `R = |Γ(b,a) − o'|` per slot (Formula step 1,
Symbols table). Now split the case in two:

- the message whose value is being asked about has **not arrived**, so `o'` is unavailable;
- the decision to seek, buy, design, or skip that message must be made **now**.

Symbols table :38-40 describes exactly this state: *"It is the aim, not only the error signal, and it
is always a slice: what cannot be perceived yet is residual and simply cannot be read."* The value
question asks for a quantity over a slice that cannot yet be read.

The residual `R` here is therefore not "what is the entropy of the message" and not "what will the
message say". It is: **what would change if this slot were resolved, and how much should be spent to
resolve it, given that its content is not available for inspection yet?** Arity, symmetry and scale:

- **Arity:** two conditions in contact, the channel's possible content and the frame's decision rule
  that would consume it. Fig 9 :54-57: a bundled case is a union of overlapping conditions, not one
  hard question; a single lever leaves the intersections standing.
- **Symmetry:** information value is ordered and threshold-like, not a symmetric join. Swapping the
  possible contents does not preserve the decision consequence, and the `→` / `⋛` bonds of Fig 12
  are ordered. The field itself reports non-additivity (Howard 1966; Wikipedia "Value of
  information", 2026).
- **Scale:** first order inside one decision frame (a message resolves a slot); second order when the
  message is an import from a frame whose closure differs (Fig 6 :23). The two scales must not be
  read against each other (Fig 6 :31).

Option A (a settled ex-ante scalar) leads to a number that can be computed before content but cannot
be audited against the ground, because the ground has not paid. Option B (a shape and budget filter)
leads to a per-slot ranking, a two-currency price, a pre-registered refusal, and an instrument owed.
The derivation below keeps the verdicts per domain separate and never averages them.

---

## 1. Domain census (before choosing any figure line)

Describe `R` by arity / symmetry / scale, then one line per domain with actors, currency and anchor.
No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union | order (Fig 3 :20) |
|---|---|---|---|---|---|
| D1 decision frame | belief `b`, action `a`, observation `o'`, slot `s`, candidate term `φ` | per-slot residual mass `R⁺_s`, description cost `\|φ\|`, leftover `left(R,φ)`, actions to settle | the ground, what pays (Formula step 5) | partition boundary: which slots carry live mass | 1, support before search |
| D2 message-as-import | channel, external source (nature / corpus / peer frame), imported atom | an atom crossing the wall; bits of description | the ground, plus provenance and shadow test | union: in-closure depth versus genuine absence | 2, SEARCHED first, then INWARD / OUTWARD |
| D3 verification / settlement | expert frames, the maintainer seat, the ground | agreement versus residual; actions to test | the ground, never agreement | partition: whose reading ranges against the anchor | 3, settle before composing over |
| D4 notation and currency | atoms, bonds, the eight operators | bits and actions, in different units | the priced bond (Fig 12 :99-102) | union: two readings held apart, never summed | cross-cutting, priced at every step |

D4 is included because the field's central object, a "value", is a composite quantity; without a
currency census the question silently becomes "which single number". The four domains are ordered by
dependency: support must be established before lookup, lookup before import, import before
settlement, and the currency rule prices all of them. Fig 3 :20: *"The chain is ordered by
dependency, not by importance."*

Anchors check: D1 has a nameable anchor (the measurement that pays), D2 has one (the ground plus
provenance), D3 has one (the ground, non-updating), D4 has one (the bond price under a declared
code). All four are domains, none is a metaphor standing in for a missing instrument.

---

## 2. Figure census (verbatim, before concluding)

| figure | what it governs here | bearing | status |
|---|---|---|---|
| Fig 1 The Agent | residual indexed per slot; frame-internal quantities disqualified | a global "value" hides the live slot | governing D1, triangulated with Fig 5 |
| Fig 2 The Ground | anchor does not update; agreement from one pool is worthless | budget filter cannot become a verdict via agreement | governing D3, triangulated with Fig 9 |
| Fig 3 Dependency Chain | order by dependency; a link with no instrument is unread | SEARCHED before INWARD / OUTWARD | governing order, single-source |
| Fig 4 The Membrane | lossy round trip; methods cross up, recordings do not | condensing the figures to "EVPI" loses constraints | governing R_T, single-source |
| Fig 5 Mint Pipeline | support, reach, novelty; bargain; curiosity seeks large and compressible gap | the ex-ante rule exists and is a shape | governing D1, triangulated with Formula step 3 |
| Fig 6 Closure / Reachability | import moves the wall; depth and absence look alike | cannot tell in-closure from needs-import before content | governing D2, triangulated with Fig 8 |
| Fig 7 Room Chain | agreement is variation, not a verdict | more forecasters do not settle the value | corroborating D3, single-source |
| Fig 8 Union Surplus | non-additivity, non-proof of absence, residual first | underivable versus unreachable at budget | governing D2, triangulated with Fig 6 |
| Fig 9 Leave / Arrive | describe `R` first; kind of thing, never the answer; filters for budget | the ex-ante object is a shape and a filter | governing D2 and D3, triangulated with Fig 13 |
| Fig 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | trust in a VoI number is not a measurement | governing D3, single-source |
| Fig 11 The Habitat | valence relative to residual; no standing list | the value of the same message flips with the residual | governing D1 and D3, single-source |
| Fig 12 The Bond | two currencies, bits and actions, do not add | the decisive line against a single scalar | governing D4, triangulated with world sources |
| Fig 13 Minimum Viable Set | closed set, open arrangements; unreachable is a verdict | the exact ex-ante object cannot be named before it is held | governing D2, triangulated with Fig 9 |
| Operators table | eight operators; `⋛` threshold, `→` sequence | value is ordered and threshold-like, not a flat sum | supporting D4, single-source |
| Symbols table | `R` is the aim and a slice; what cannot be perceived is unreadable | the residual before content is a slice, not zero | governing D1, triangulated with Fig 1 |

Strained readings are named in §6, not smoothed over.

---

## 3. Findings

### F1 - The ex-ante rule exists, and it is a shape, not a number (decisive for the "yes" half)

Fig 5 :18 gives the curiosity drive's target verbatim:

> **"seeks the gap that is large and compressible"**

Fig 5 :21 gives the guard that must hold before any search:

> **"the gap has real mass somewhere"**

Formula step 3 adds the support gate: `SUPPORT |R⁺_s| > 0 for some s` before the search. And Fig 5
:42, :43-44 give the bargain:

> **"The acceptance test is a bargain, not a threshold."**
> **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."**

Together these are a principled ex-ante procedure. Before any content is known, a frame can:
(1) find which slots carry positive residual mass; (2) ask whether the gap is large and compressible,
which is the same quantity the acceptance test scores (Fig 5 :47); (3) compare the cost of stating a
candidate against the confusion it would remove. That is a ranking rule over slots, not the settled
value of a particular message. Fig 9 :32: *"you get a kind of thing, never the answer itself."*

Mode: `general` for the existence of the rule, `specified` for the per-slot application. Two figures
with low overlap govern it: Fig 1 (per-slot residual) and Fig 5 (mint bargain). Framework-internal
triangulation, not world corroboration. Refuter: show that the ex-ante ranking is independent of the
per-slot residual distribution, or that a slot with zero live mass is selected and the ground still
pays. Both break Fig 5 :21 and Formula SUPPORT.

### F2 - A single scalar is the named error: bits and actions do not add (decisive for the "no" half)

Fig 12 :125-127:

> **"A composition costs in two currencies, and they do not add."**
> **"Bits price the description. Actions price finding out whether it holds."**
> **"They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."**

Fig 12 :130:

> **"Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."**

The field splits along exactly this seam. Shannon 1948 (opened via full text) defines information as
a logarithmic measure over a set of possible messages and says *"These semantic aspects of
communication are irrelevant to the engineering problem."* Howard 1966 (IEEE abstract) answers
that *"no theory that involves just the probabilities of outcomes without considering their
consequences could possibly be adequate in describing the importance of uncertainty to a decision
maker"* and adds that the joint elimination of uncertainty *"can have a value that differs from the
sum of the values of eliminating the uncertainty in each factor separately."* The ISPOR Task Force
(Rothery et al. 2020, opened in full) puts both currencies in one sentence: *"Quantifying the
expected improvement with new information requires an assessment of uncertainty and the scale of the
consequences of that uncertainty in terms of pay-offs. Acquiring information, however, can be
costly."*

So the question "is there a principled way to quantify the value" inherits a type error if it asks
for one number. Shannon's bits and Howard's expected utility are the two readings Fig 12 names.
Any answer that adds them is the flat-formula collapse of Fig 12 :6-17. Note the distinct reasons for
non-additivity: Fig 12 is about incommensurable units; Howard and the Wikipedia characteristics list
are about submodularity inside one currency. Both support "do not sum", for different reasons. This
is recorded as strain S4, not merged.

Mode: `specified`. Figure side single-source (Fig 12), triangulated with low-overlap world sources
(mathematics/communication theory, decision theory, health economics) that do not share one evidence
pool at the level of the quantity they price. Refuter: produce a single scalar that sums bits and
actions and show it is invariant under re-description of the coding and of the experiment. That
breaks Fig 12 :130.

### F3 - The value is indexed per slot; aggregating is how the signal disappears

Fig 1 :19 and :22:

> **"The residual is indexed by object slot, not aggregated."**
> **"Aggregating across slots is how a live signal disappears into an average."**

A global "value of information" for an organization, a patient population, or a sensor suite has the
same defect as a global residual near zero with one live slot (Fig 1 :13, :20). The field's own
aggregation is visible in the ISPOR report's population scaling (`PopulationVOI = VOI per-person x
...`), which is legitimate for budgeting a population but is a filter, not a per-slot verdict. Fig 1
:23: *"The ground enters as the only metric."* Fig 1 :27: *"They are frame-internal. A frame cannot
score itself with a quantity it also produces."* A VoI number a frame computes for itself is
frame-internal until something outside ranges it against a non-updating anchor.

Mode: `specified`, triangulated (Fig 1 plus Fig 5, and the Symbols table's "slice"). Refuter: a
case where the aggregate value ranks two information sources correctly while every live slot is
ranked incorrectly. That breaks Fig 1 :19/:22.

### F4 - Before content, depth and absence are indiscernible; the ex-ante number cannot tell which

Fig 6 :27:

> **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."**

Fig 8 :40-43:

> **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."**

The ex-ante question cannot distinguish "the message is already in our closure and unfound" (remedy:
SEARCHED, more independent search, Fig 8 :50) from "the message requires an import from a frame whose
closure differs" (remedy: OUTWARD, with provenance and a shadow test, Fig 6 :23, Fig 8 :27-28).
Formula step 7 requires SEARCHED first because it is cheapest and the other two assume its answer.
Ivanova 2021 (opened in full, Bayesian optimal experimental design) states the field-level version
cleanly: *"we can't use IG to find the optimal design as it depends on the outcome y and hence can't
calculate it until after the experiment has been performed"*, so the field replaces realized
information gain with its expectation over outcomes. That expectation is the shape; it is not the
content and it does not say which kind of thing will arrive. Fig 13 :134-135: *"It cannot say which
primitive is missing, because naming it would mean already holding it."*

Mode: `specified` structural; `gap` on which message will arrive. Triangulated (Fig 6 and Fig 8, low
overlap between the wall rule and the idempotence theorem). Refuter: demonstrate a classification of
the missing quantity as in-closure versus needs-import, before any content arrives, with no
instrument and no ground. That breaks Fig 6 :27.

### F5 - Value has valence relative to the residual; there is no standing ranking

Fig 11 :49, :51:

> **"An actor's valence is relative to the residual, not a property it carries."**
> **"No standing list of good actors survives a change of residual."**

A message is not intrinsically valuable. The same reading is a benefactor to one residual and a
malfactor to another (Fig 11 :50). This is why a field-wide table of "high-value information sources"
cannot be a verdict: the ranking has to be re-run per slot after each loop changes the reach (Formula
step 8). Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it
improves."* Buying more of a message that does not change contact with the ground does not raise its
value, however precise it becomes.

Mode: `general` structural, `specified` per slot. Single-source on the figure side (Fig 11), with the
world's expected-utility framing as a partial corroboration of the dependence on the decision
consequence. Refuter: exhibit a message whose value ranking is invariant across two different
residuals with different anchors, with the same cost and same content. That breaks Fig 11 :49.

### F6 - Agreement cannot settle the ex-ante number

Fig 2 :35, :40, :42:

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
> **"agreement about the world is worthless when the agreeing frames share an evidence pool"**
> **"Buy independence in proportion to the cost of being wrong."**

Fig 7 :35: *"A room's agreement is variation, not a verdict."* Fig 10 :42: *"A verifier that can
reconstruct the claim cannot verify it."* The field's good-practice documents already contain the
same discipline: Rothery et al. 2020 require that VOI outcomes be reported for explicit thresholds
and all assumptions stated, and note that structural uncertainty is often ignored, which is
equivalent to assuming the model is perfect. A model that grades itself with its own output is Fig 1
:27's disqualified quantity. Fig 9 :60:

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

An ex-ante value is exactly a filter for the budget, deciding which experiment to try. It is not a
witness for what the world will say.

Mode: `general` structural, `specified` for the outreach rule. Triangulated (Fig 2 and Fig 9).
Refuter: a case where unanimous expert agreement, with a shared model and no anchor reading,
settles the value of a message. That breaks Fig 2 :35 and :40.

### F7 - The round trip from the figures to "EVPI" is lossy

Fig 4 :30:

> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Condensing these figures into the field phrase "expected value of perfect information" abstracts away
at least four constraints: per-slot indexing (Fig 1 :19), the two-currency separation (Fig 12
:125-130), the SEARCHED-first order (Formula step 7), and the requirement that the ground settle
before a term is composed over (Formula step 5). Fig 4 :27: *"The transform between scales loses
information, and that is the point."* The honest description is a lossy condensation with a measured
round-trip gap `R_T`, not "the same thing in fewer words". `11_audit.md` enumerates `R_T`.

Mode: `general`. Single-source (Fig 4), corroborated by the canonical README's "shape, not a name"
limit. Refuter: show a condensation of the figures into a single VoI formula that preserves all four
constraints. Until one is shown, `R_T` is nonzero.

### F8 - What survives: per-domain verdicts, kept separate

| domain | verdict | mode | figure basis | status |
|---|---|---|---|---|
| D1 decision frame | a principled ex-ante rule exists: support, large-and-compressible gap, MDL bargain | `specified` | Fig 1 :19/:22, Fig 5 :18/:21/:42/:43-44 | triangulated |
| D2 message-as-import | the ex-ante object is a shape and a kind of thing; depth versus absence is unresolved before content | `specified` structural; `gap` on which message | Fig 6 :27, Fig 8 :40-43, Fig 9 :32, Fig 13 :134 | triangulated for the shape, `gap` for the identity |
| D3 verification | the number is a budget filter; only a non-updating ground settles it | `general` / `specified` | Fig 2 :29/:35/:40/:42, Fig 9 :60, Fig 10 :42 | triangulated |
| D4 currencies | bits and actions are two readings and must not be summed | `specified` | Fig 12 :125-130, Fig 12 :6-17 | figure single-source, world corroborated |

No verdict is averaged across domains. The union is a union of conditions, not a single dial.

### F9 - The literal question is answered yes-and-no, and the honest stop is a named gap

The literal question "is there a principled way to quantify the value of information before its
content is known" asks two different things at once:

1. **Is there a principled rule?** Yes: F1, the per-slot support and bargain procedure.
2. **Is there a principled settled value?** No: F2, F4, F5, F7. The content is not available, the
   two currencies do not add, the ground has not paid, and the kind of thing that will arrive is not
   nameable before it is held.

The concrete number for a concrete decision is a `gap` of the unreached kind, reported plainly:
*"Unreachable is a verdict here, not a silence"* (Fig 13 :134). *"So a search that finds nothing is
never a proof of absence."* (Fig 8 :39). What is owed is a discriminator: an instrument and a ground
reading, not a better argument.

---

## 4. Strain test and re-census

- **S1 Shannon bits versus decision value.** Apparent conflict: entropy is a principled quantify of
  information, so why is it not the answer? Re-census: Shannon prices the description (Fig 12 :126,
  bits), decision VoI prices consequences and actions. Different quantities; Fig 12 :125-130 governs
  both and forbids summing. Not strained after re-census, but the reason is recorded because it is the
  question's central trap.
- **S2 Fig 1 :23 "The ground enters as the only metric." versus an ex-ante utility metric.** Re-census: an ex-ante
  number is frame-internal until ranged against an anchor that does not update (Fig 2 :29, :33-34).
  It becomes a metric only when it predicts a payment the ground makes. Not strained; the metric
  status is conditional.
- **S3 Fig 5 "curiosity manufactures a gradient when nothing scoring" versus SUPPORT needing live
  mass.** Re-census: the curiosity drive aims at the *new* bin (Fig 5 :15-16) but still "seeks the gap
  that is large and compressible" (Fig 5 :18) and still needs "the gap has real mass somewhere"
  (Fig 5 :21). A manufactured gradient is a probe aimed at mass, not value created from nothing. Not
  strained.
- **S4 Howard non-additivity versus Fig 12 non-additivity.** Different objects (submodularity within
  one currency versus incommensurable units). Both are kept, neither is used to flip the other. Live
  but resolved as two claims.
- **S5 Enumerability of outcomes.** EVPI and expected information gain require an outcome space to
  average over. Where the habitat cannot be enumerated (Fig 11 :43-44: *"The habitat is enumerated,
  never composed."*), the ex-ante expectation is unreachable at this budget. This is a genuine
  boundary, not a defect: underivable-in-principle and unreachable-at-budget are different facts with
  different instructions (Fig 8 :40-43). Recorded as a live limit.

---

## 5. Pre-registered refuter

Written before the conclusion and before the outreach email, per the standing rule that a falsifier
written before the run is a design instrument. The shape claim is refused if any of the following
holds:

1. A single scalar is produced that sums bits and actions and is invariant under re-description of
   the coding and of the experiment (breaks Fig 12 :130).
2. The ex-ante ranking is shown to be independent of the per-slot residual distribution (breaks Fig
   1 :19/:22 and Fig 5 :21).
3. The missing quantity is classified as in-closure versus needs-import before any content arrives,
   with no instrument and no ground (breaks Fig 6 :27 and Fig 8 :40-43).
4. The large-and-compressible target selects a slot with zero live residual mass and the ground still
   pays (breaks Fig 5 :21 and Formula SUPPORT).
5. The ex-ante number is shown to settle a decision without a ground reading (breaks Formula step 5,
   *"A gate is not the ground"*, and Fig 1 :23).
6. A message's value ranking is shown invariant across two residuals with different anchors at equal
   cost and content (breaks Fig 11 :49).

If any fires, the shape is withdrawn. Until one is run, nothing here is `grounded`.

---

## 6. Recommendation

1. Answer with the qualified yes: a principled ex-ante procedure exists, but its output is a shape
   and a budget filter, not a settled scalar (F1, F6).
2. Keep the two currencies explicit and refuse their sum (F2). Present bits and actions as two
   readings, as Fig 12 :130 requires.
3. Keep the ranking per slot and never average it into one organizational number (F3).
4. Run SEARCHED before INWARD or OUTWARD, and say plainly that depth and absence look alike before
   content (F4, Formula step 7).
5. Re-run valence per residual; never publish a standing list of high-value sources (F5).
6. Owe the discriminator. Name what would settle the number and stop there (F9). Fig 4 :25: *"A
   recording carried upward looks like knowledge and is a description of one occasion."* Send the
   generator: the rule, the per-slot residual, and the refuter.

---

## 7. Canonical usage check

Two local primary sources govern how the figures may be used, read after the first six sections.

- `FRAMEWORK/reference/FIGURES_README_canonical.md` - *"They outrank everything else in the repo:
  the code, the rulings and the docs answer to them... the quotes are the authority, not this
  summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not
  found a flaw"*; and the canonical limit: the framework returns *"what a missing thing would have to
  look like (a shape, not a name)"*, then stops at the limit of what the instruments can distinguish
  and records the lineage. *"Indiscernibility is not identity."* The README's section titled "This
  is not a Theory of Everything - and that is the point" confirms that no single final number is
  being claimed.
- `FRAMEWORK/figures/THE_FORMULA.md` - step 3 gates (`SUPPORT`, `REACHABILITY`, `NOVELTY`, product
  not checklist), step 5 (*"the ground settles it. Verified only by what pays. A gate is not the
  ground."*), step 7 (SEARCHED first; underivable and unreachable-at-budget are different facts),
  and the "Direction" discipline: write down what an answer would look like and bind it as an
  ordinary term. The pre-registered refuter in §5 is that discipline applied here.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Shannon entropy is the principled quantification, so the answer is yes" | **Retracted.** Shannon prices bits (Fig 12 :126); the question asks for value, which is a second currency. Kept as the trap the answer must name, not as the answer. |
| "Expected value of perfect information is the principled settled value" | **Narrowed to a budget filter.** Fig 9 :60. It ranks which experiment to try; it does not report what the ground will pay. Its expectation-over-outcomes is a shape (Ivanova 2021). |
| "There is no principled way at all" | **Retracted.** F1's per-slot support / large-and-compressible / MDL rule is principled and ex-ante. "Unreachable is a verdict, not a silence" (Fig 13 :134) applies to the concrete number, not to the rule. |
| "Shape, not a name forbids any ex-ante number" | **Narrowed.** The README's phrase governs a missing primitive (one not held in `Γ`). An ex-ante ranking over held slots is a bound term with a residual, which is permitted and required by the Direction discipline. The identity of the missing message remains unnamed. |
| Fig 1 :23 versus an ex-ante metric | **Not strained.** Re-census assigns the metric status to the ground and the ex-ante number to the budget (Fig 9 :60). Different objects. |
| Shannon versus Howard | **Not strained.** Re-census assigns each to a different currency (Fig 12 :125-130). The world sources agree with the figure verdict for different reasons and are not pooled as one witness. |
| D2 which message will arrive | **Confirmed `gap`.** Fig 9 :32, Fig 13 :134-135. Reported as unreached, not silence. |
| F7 round trip | **Confirmed nonzero.** Four dropped constraints enumerated in §7 and in `11_audit.md`. |

### Seven-question recursive derivation (summary)

1. **Is there anything to explain?** Yes when `R⁺_s > 0` for some slot (Formula step 3, Fig 5 :21). Without support nothing is owed.
2. **Is the message in here and unfound?** SEARCHED first, cheapest, other branches assume its answer (Formula step 7). Independence between searchers decides whether more of them buy more search (Fig 8 :53).
3. **Is the gap compressible?** Fig 5 :18, the target is large and compressible; Fig 5 :43-44 is the bargain. This is the ex-ante rule.
4. **What currency?** Bits price the description, actions price finding out whether it holds (Fig 12 :126). Do not sum (Fig 12 :130).
5. **Is the value stable across residuals?** No, valence is relative to the residual (Fig 11 :49); no standing list (Fig 11 :51).
6. **Can agreement settle it?** No, a shared evidence pool makes agreement the pool talking (Fig 2 :40); only the ground settles (Formula step 5).
7. **What is owed?** A discriminator and a ground reading. Until then the concrete number is `unreachable`, which is a verdict (Fig 13 :134), and the shape is the honest deliverable.

---

## 8. Updated verdict

The question is a union of two questions with different anchors. **A principled ex-ante rule exists**
(per-slot support, large-and-compressible target, MDL bargain, SEARCHED-first order), and it is a
shape and a budget filter. **A principled settled value before content does not exist** in this
framework: the two currencies do not add, the content has not arrived, the ground has not paid, and
the missing kind of thing cannot be named before it is held. The honest stop is the shape plus a
written refuter plus the instrument that would close it. Mode `specified` on D1 and D4, `general` on
the structural reading of D3, `gap` on the concrete number and the identity of the message. Nothing
is `grounded`. Strains after re-census: five named, one boundary (S5) kept live, none hidden. The
whole document is a simulated derivation checked for internal consistency against the figures, not a
ground reading, and it cannot settle the question it reports on.
