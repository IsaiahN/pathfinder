# Independent second-seat audit, REA-0038

**Seat:** ground maintainer / reviewer. What this seat may see: the residual line, the records, the
provenance, the verbatim figure text. What it must not see: the primary solution's interiors while it
writes its own census.

**Honesty limitation, stated first.** This audit was written in the same session by the same model
that wrote `01` through `10`. It is a **simulated second seat**, not a second person and not an
independent witness. It checks the solution for internal consistency, re-censes from the residual
line, and measures the round-trip gap. It cannot supply the independence a real outside frame would
supply. Per Fig 2 :31, *"Independence, between two frames, is how little they draw on the same
evidence."* This seat and the primary seat draw on the same text, so their agreement is one evidence
pool. Record that plainly.

**Mode: `specified`.** This is a simulated derivation, not a ground reading.

---

## 1. The residual line, taken alone

> What would make a system's confidence value change when the source of that reading changes while
> the reading itself stays the same?

`R` is the gap between what the system's library predicts and what a ground returns, per slot, never
aggregated (Fig 1 :19). The object of explanation is a discriminator of *sources*, not a measure of
confidence and not a measure of accuracy. Nothing in this line says "calibration", "ECE", "conformal",
"signal detection", "base rate", or "metamerism". Any answer that opens with one of those has named a
candidate before describing the residual, against Fig 9 :28, *"any frame you pick will seem to fit,"*
and Fig 8 :53, *"Residual first, frame second."*

**Anchor check.** A nameable anchor exists: a held-out outcome or counter, explicitly listed in
Fig 2 :29. So this is a well-formed question and not yet a `gap`.

**Bound-shape check.** The sought-for shape is a source-discriminating instrument. It is not a term
the loop holds, so it cannot accrue a residual and the loop cannot see it (Formula, "Direction").
This seat therefore accepts the primary's move of binding it as an ordinary term at the top of `01`,
so it can be refused.

---

## 2. Independent re-census from the residual line

### 2.1 Arity, symmetry, scale

- **Arity.** A relation among a frame with library Γ and weighting `w`, a claim at slot `s`, an
  observation `o′`, and a non-updating ground. The diagnostic minimum is a *pair* of readings of one
  slot. A one-place reading, confidence alone, cannot even state the question, so it is rejected.
- **Symmetry.** Confidence is orderable, carrying a spectrum (Fig 13 :20). But the two candidate
  sources are symmetric in their effect on the scalar (Fig 8 :51). Per-slot readings are not
  interchangeable with an average (Fig 1 :22).
- **Scale.** The reading is produced at the step scale and validated at the population scale. The
  connection crosses the membrane, and the transform is lossy (Fig 4 :27). The residual is
  intrinsically cross-scale.

### 2.2 Domains, one line each

| domain | actors | currency | anchor | admitted? |
|---|---|---|---|---|
| A: the frame under test | model, Γ, `w` | confidence scalar | none inside the frame | yes, as object only |
| B: the held-out ground | fresh observations, outcome counter | per-slot hit and miss | the outcome, fixed | yes |
| C: the marginal shift | calibration set, changed marginal | confidence per unit evidence | ground payment under the new habitat | yes |
| D: two-reading separation | two low-overlap measures | the gap between them | ground, ranged separately | yes |
| E: the provenance record | origin stamps, lineage | date, route, source | the record | yes |
| F: the evaluator's own certainty | the checker | feeling of confidence | none outside the checker | no, not a domain |
| G: the benchmark designer | the person choosing the test set | benchmark choice | absorbed into B and C | absorbed |

**Divergence from the primary census, recorded.** The primary named five domains D1 to D5. This seat
at first proposed splitting the primary's D4 into "two-reading separation" and "provenance", because
one is a measurement operation and the other is a record. On re-census they share one anchor, a
ground the frame cannot move, and their overlap is a compound, so they are kept as D and E but
marked as a union, separate fields. This seat also tested merging B and E because both resist
updating; it declined, because B is settled by an outcome at a moment and E by a recorded route
across time. The primary kept them separate without stating the test; this seat supplies the anchor
test. Both censuses arrive at five admitted domains.

**Partition or union:** union. Contact maintenance (B and C) and source identity (D and E) are two
conditions whose overlap is its own compound (Fig 9 :55 and :57).

**Dependency order:** perception, vocabulary, objective, planning, learn and carry (Fig 3). This seat
agrees with the primary ordering and adds that the residual line itself forces only the first three
links; the probe and the record are candidate answers introduced by the frame, not forced by the
residual.

---

## 3. Verbatim figure lines checked

Each line below was re-opened in `local: FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. The
"exact" column records whether the quoted string is an exact substring of the cited figure line,
with curly apostrophes preserved where present.

| citation | exact string checked | exact? |
|---|---|---|
| Fig 1 :19 | The residual is indexed by object slot, not aggregated. | yes |
| Fig 1 :22 | Aggregating across slots is how a live signal disappears into an average. | yes |
| Fig 1 :27 | They are frame-internal. A frame cannot score itself with a quantity it also produces. | yes |
| Fig 2 :29 | An anchor is whatever settles the question and does not change its answer because of what any frame thinks. | yes |
| Fig 2 :31 | Independence, between two frames, is how little they draw on the same evidence. | yes |
| Fig 2 :35 | Alignment is triangulation, not negotiation. A mirror cannot correct you. | yes |
| Fig 3 :27 | A link with no instrument is not a link that works. It is a link nobody has looked at. | yes |
| Fig 4 :30 | So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked. | yes |
| Fig 5 :48 | Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing. | yes |
| Fig 6 :34 | The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve. | yes |
| Fig 8 :51 | Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them | yes |
| Fig 9 :32 | you get a kind of thing, never the answer itself | yes |
| Fig 9 :60 | Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict. | yes |
| Fig 11 :70 | A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability. | yes |
| Fig 12 :126 | Bits price the description. Actions price finding out whether it holds. | yes |
| Fig 13 :134 | Unreachable is a verdict here, not a silence, | yes, substring not line opening |

**One citation defect found and corrected.** An early draft of the primary audit cited
*"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and
finding nothing proves nothing."* as Fig 8 :44. The line is Fig 9 :44; Fig 8 :44 is the citation
line "Godel 1931; Tarski 1936; Chaitin 1974." The primary file now cites Fig 9 :44 and marks the
phrase as a substring. No figure quote in the solution was invented, and none came from a summary.

---

## 4. Round-trip gap `R_T`

Fig 4 :30, quoted above: *"So take the round trip and measure the gap."*

- **T_A, going up:** carry the primary's five-part shape to one sentence. Result:
  *check confidence against a ground you did not use, under a changed marginal, with two independent
  readings and a record.*
- **T_E, coming back:** put that abstraction into a specific deployment. Result:
  *report a reliability diagram on a held-out set and add an OOD score.*

**`R_T = gap(x, (T_E ∘ T_A)(x))`.** What the abstraction cannot hold:

1. It collapses the union into one lever. "Check against a ground" does not say that the marginal
   must change with per-case evidence fixed, so a team reads it as "collect more of the same data"
   (Fig 3 :29-30, effort above the break).
2. It loses the anchor rule. A held-out set whose labels were generated by the model's own outputs
   is a mirror, and the abstraction cannot tell you it is one (Fig 2 :35).
3. It loses the two-currency separation. Adding an OOD score is cheap in bits and may be expensive
   in actions; the one sentence has one column (Fig 12 :126-127).
4. It loses per-slot indexing. "Reliability diagram" invites an average, which is how a live signal
   disappears (Fig 1 :22).
5. It loses the provenance requirement. The abstraction does not say who generated the calibration
   labels or when (Fig 8 :51).

This gap is not an error to eliminate; it is the measurement of what the coarser description cannot
hold (Fig 4 :31). It is also why the outreach packet sends the generator, not the one-sentence
version. The one-paragraph version in `07` is a deliberately lossy artefact and is labelled as such.

---

## 5. Strains

| id | strain | handling |
|---|---|---|
| S1 | Applying Fig 13's six physical substrate terms to a training corpus by renaming base rates as a spectrum | sent back to census; Fig 13 now governs only the closed set of kinds and the honest stop. Resolved |
| S2 | Reading Hendrycks's usable softmax signal as proof that confidence can certify its own source | re-census: the score is a heuristic needing ground calibration (Angelopoulos), so it corroborates the two-reading claim rather than the introspective one. Resolved |
| S3 | Treating conformal marginal coverage as a sixth atom | re-census: coverage is a bond between an existing reading and an existing ground, not a new primitive. Resolved |
| S4 | Reading Ovadia's "traditional post-hoc calibration falls short" as a world verdict that overrules Fig 11 :70 | re-census: the figure is the authority and the paper corroborates it; no verdict flip. Resolved |
| S5 | Calling the evaluator's own certainty a candidate domain | refused at census: no anchor independent of the checker. Resolved |

No unresolved strain after re-census. Per the canonical rule, a reading that makes one figure
contradict another has misidentified its domain, not found a flaw; each strain above was returned to
the census rather than smoothed over.

---

## 6. Comparison with the primary census

| item | primary (`01`) | second seat (this file) | outcome |
|---|---|---|---|
| admitted domains | D1 frame, D2 ground, D3 shift, D4 discriminator, D5 record | A frame, B ground, C shift, D separation, E record | same five, different names; agree |
| excluded candidate | confidence as verdict, no anchor | evaluator's certainty, no anchor | agree, different wording |
| partition or union | union of two compounds | union of contact and source identity | agree |
| D4 and D5 | kept separate | initially split further, then kept as a union on shared anchor | same endpoint, second seat supplies the anchor test |
| benchmark designer | not raised | raised then absorbed into ground and shift | refinement, not conflict |
| dependency order | per Fig 3, middle link un-instrumented | per Fig 3, plus note only first three links forced by residual | refinement, not conflict |
| decisive figures | Fig 1, Fig 2, Fig 8, Fig 11, Fig 12 | Fig 1, Fig 2, Fig 4, Fig 8, Fig 11, Fig 12 | agree on core; second seat elevates Fig 4 round trip |
| verdict | detection is contact, not inspection; `specified` | same | agree |
| universal detector name | `gap` | `gap`, confirmed by Fig 9 :32 and Fig 8 :39 | agree |
| world sources | secondary, no verdict flip | secondary; ML pool is one witness; conflicts returned to census | agree |

**Round trip between seats.** The two censuses were written from the same residual line and the same
figure text. Their agreement is a check of internal consistency, not triangulation (Fig 2 :31, :40).
A real outside frame with a different evidence pool is still needed, and that is what the expert
packet is for.

---

## 7. Verdict on the solution

**Status: pass, with three annotations.**

1. **Pass on structure.** Residual stated in effect terms, census before figure lines, verbatim
   quotes with `Fig N :line`, verdicts per domain and never averaged, pre-registered refuter, mode
   stated, `gap` declared where no line governs, no em dashes, sources opened and recorded. The
   figure quotes checked in section 3 are exact.
2. **Pass on derive-first discipline.** The one genuine world/figure conflict (softmax OOD signal
   versus the rejection of introspective detection) was returned to the census and re-mapped rather
   than used to flip the verdict. Five strains were logged and resolved by re-census. One citation
   defect was found and corrected visibly.
3. **Annotation A, independence.** This second seat is simulated and shares an evidence pool with
   the primary. The solution has not received an independent human check. Its status must remain
   `specified`, and it must not be presented as corroborated by this audit.
4. **Annotation B, round trip.** The one-paragraph version in `07` is lossy in five named ways
   (section 4). It is suitable only as an invitation to check the full packet, never as a substitute
   for it.
5. **Annotation C, submission.** This is LLM-assisted work. The ICLR homepage lists an AI policy
   for authors and TMLR hosts review on OpenReview; a human researcher must own and write anything
   submitted, and must read the current policy first.

**Final:** the solution is internally consistent with the figures, honest about its simulation
status, and correctly stopped at a `specified` shape with an open instrument gap. It is not a ground
reading and cannot settle REA-0038. `Unreachable is a verdict, not a silence`: the missing
source-discriminating instrument is characterised, the refuters are written, and the stop is
recorded.
