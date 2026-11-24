# Independent second-seat audit, INF-0027

**Seat:** ground maintainer / reviewer. What this seat may see: the residual line, the records, the provenance, the verbatim figure text. What it must not see: the primary solution's interiors while it writes its own census.

**Honesty limitation, stated first.** This audit was written in the same session by the same model that wrote `01` through `10`. It is a **simulated second seat**, not a second person and not an independent witness. It checks the solution for internal consistency, re-censes from the residual line, and measures the round-trip gap. It cannot supply the independence that a real outside frame would supply. Per Fig 2 :31, *"Independence, between two frames, is how little they draw on the same evidence."* This seat and the primary seat draw on the same text, so any agreement between them is one evidence pool. Record that plainly.

**Mode: `specified`.** This is a simulated derivation, not a ground reading.

---

## 1. The residual line, taken alone

> How can a receiver distinguish noise from a rare but meaningful signal, when both produce a positive residual?

R = |Γ(b,a) - o'| per slot. The object of explanation is the classifier's discrimination, not its sensitivity. Nothing in this line says "matched filter", "Bayesian prior", "p-value", "anomaly score", "ROC" or "threshold". Any answer that begins with one of those has already named a candidate before describing the residual, against Fig 9 :28 (*"any frame you pick will seem to fit"*) and Fig 8 :53 (*"Residual first, frame second"*).

**Anchor check.** A nameable anchor exists: the source state, settled by a measurement that does not move when the receiver changes its criterion (Fig 2 :29). So this is a well-formed question and not yet a `gap`. The detection statistic is an instrument, not the anchor, which is the distinction the primary solution makes in section 0 and F5.

---

## 2. Independent re-census from the residual line

### 2.1 Arity, symmetry, scale

- **Arity:** a relation among receiver library Γ, action a and observation o', indexed by slot s and ordered by time t. It has at least three operands and one ordering. A two-place reading (signal amplitude, noise amplitude) loses the slot and the source, so it is rejected.
- **Symmetry:** not symmetric. The anchor does not update on the receiver's opinion (Fig 2 :25). "Rare" is a threshold comparison relative to the slot population (Fig 12 :87), so one operand is compared against a distribution rather than merely conjoined with another.
- **Scale:** the slot is one observation, but "rare" exists only at the population scale (Fig 4 :5), and "transient" exists only at the stream scale. The time index crosses the membrane between the receiver's step loop and the population's ranking loop (Fig 4). So the residual is intrinsically cross-scale. This seat adds an observation the primary states less explicitly: the word "distinguish" is itself a **routing** operation on R, not a new composition of operands, so the answer must be a classifier of residuals, not a new signal-plus-noise molecule.

### 2.2 Domains, one line each

| domain | actors | currency | anchor | admitted? |
|---|---|---|---|---|
| A: receiver as controller | receiver, Γ, probe actions | predicted and returned reading | the observation actually returned | yes |
| B: population of slots | slots, competing readings, ranking | rarity, share, persistence | the source-confirming measurement (Fig 2 :29) | yes |
| C: the channel | instruments, percepts, metrics, transients | contact | the ground that persists while the channel does not (Fig 10 :24) | yes |
| D: the code and composition | atoms, bonds, candidate terms φ | reach, description length | settlement (Fig 5 :32) | yes |
| E: noise as a substance | the disturbance | amplitude | none independent of the representation | no, not a domain |
| F: "pure randomness" as cause | chance | probability | probability is a description in Γ; no independent anchor | absorbed into D |

**Divergence from the primary census, recorded.** The primary named four domains D1 receiver loop, D2 channel, D3 source, D4 code. This seat at first proposed splitting the source into "source present" and "source identified", because a reading can be source-bearing without naming which source. On re-census they share one anchor, the ground, and their overlap is a compound, so they are one domain B/D3; the difference is a stage within the domain, not a domain boundary. This seat also tested merging the channel into the receiver loop, because both involve instruments, and declined: the anchors differ in kind, C is settled by contact persistence over time, A by a single returned reading. Both censuses arrive at four admitted domains and one rejected candidate.

**Partition or union:** union. The two named conditions are structure (A and D) and contact plus corroboration (C and B). Their overlap is a compound with its own loop (Fig 9 :54-57). This seat adds a third condition the primary separated later: the criterion is a budget filter and cannot be a witness, which is a method condition rather than a domain, so it sits outside the census in the verdict.

**Dependency order:** perception → vocabulary → objective → planning → learn and carry (Fig 3). This seat agrees with the primary ordering and adds that the residual line itself only supports the first three links; planning and carrying are candidate answers introduced by the frame, not forced by the residual. Search order SEARCHED → INWARD or OUTWARD is a second, nested order (Formula step 7).

---

## 3. Verbatim figure lines checked

Each line below was re-opened in `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. The "exact" column records whether the quoted string is an exact substring of the cited figure line after whitespace normalisation, with curly punctuation preserved where present.

| citation | exact string checked | exact? |
|---|---|---|
| Fig 1 :13 | a global R near zero with one live slot residual is a legal state | yes |
| Fig 1 :19 | The residual is indexed by object slot, not aggregated. | yes |
| Fig 1 :22 | Aggregating across slots is how a live signal disappears into an average. | yes |
| Fig 2 :29 | An anchor is whatever settles the question and does not change its answer because of what any frame thinks. | yes |
| Fig 2 :31 | Independence, between two frames, is how little they draw on the same evidence. | yes |
| Fig 2 :35 | Alignment is triangulation, not negotiation. A mirror cannot correct you. | yes |
| Fig 2 :40 | agreement about the world is worthless when the agreeing frames share an evidence pool | yes, substring of the full line |
| Fig 5 :18 | seeks the gap that is large and compressible | yes |
| Fig 5 :43 | A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. | yes |
| Fig 6 :34 | It is whether anything, at any resolution, is already returning something that fails to resolve. | yes, capital I as in the SVG |
| Fig 8 :39 | So a search that finds nothing is never a proof of absence. | yes |
| Fig 9 :32 | you get a kind of thing, never the answer itself | yes |
| Fig 9 :60 | Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict. | yes |
| Fig 10 :24 | the ground does not decay, the channel does | yes |
| Fig 10 :26 | saturated metrics, pooled readings | yes |
| Fig 12 :117 | Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour. | yes |
| Fig 13 :32 | the detail a crossing discards reappears above it as noise | yes |
| Fig 13 :134 | Unreachable is a verdict here, not a silence | yes, substring |

**One misuse found and corrected.** In the first pass, the Fig 13 :134 line was treated as if it opened with *"Unreachable is a verdict here, not a silence"*. The line actually opens *"So the system can report that it lacks something rather than producing an answer anyway."* The phrase is an exact substring, so `01` and `09` now cite it as a substring and do not imply it opens the line. No figure quote in the solution was invented, and none came from a summary.

---

## 4. Round trip gap R_T

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

- **T_A, going up:** carry the primary's four-condition shape to one sentence. Result: *detect by keeping the residual local, the pattern compressible, the channel fresh and the source corroborated.*
- **T_E, coming back:** put that sentence into a specific receiver. Result: *raise sensitivity, fit a compact model, recalibrate the sensor and ask a colleague.*

**R_T = gap(x, (T_E ∘ T_A)(x)).** The gap is what the abstraction cannot hold:

1. The one-sentence form drops the per-slot indexing and comes back as "raise sensitivity", which is effort above the break (Fig 3 :29-30) and a pooled reading (Fig 10 :26).
2. It drops the filter/witness split. "Fit a compact model" looks like the verdict, whereas Fig 9 :60 says compressibility only ranks a candidate; the ground settles source. This is the largest single component of the gap, and it is why the F2 retraction must travel with the one-paragraph version.
3. It drops the independence requirement. "Ask a colleague" may be one evidence pool restated (Fig 2 :31, :40), not a second frame.
4. It drops the criterion rule. The abstraction has no place for the statement that a threshold is a budget and not evidence, so the concretisation silently promotes it.
5. It drops the honest stop. The abstraction sounds complete; the full shape names a `gap` for the source-discriminating instrument and says the framework returns a kind of thing, not the answer (Fig 9 :32).

Conversely, one thing survives cleanly: a rare signal is one live slot over a quiet background, and the channel rather than the ground decays. That is the residue worth sending. R_T was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names. The one-paragraph version in `07` is a deliberately lossy artefact and is labelled as such.

---

## 5. Strains

| id | strain | handling |
|---|---|---|
| S1 | Applying Fig 13's six physical substrate terms to detector features only fits by renaming bins as space and amplitude as energy | sent back to census; Fig 13 governs :32 (noise definition) and the honest stop only. Resolved |
| S2 | Calling the source "the ground" while the channel plainly updates | re-census: channel updates, ground settles (Fig 2 :29-30, Fig 11 :73); the anchor is the source-confirming measurement. Resolved |
| S3 | Reading Fig 5 :18 "large and compressible" as sufficient for a source | re-census and retraction: compressibility is a filter, the ground is the witness (Fig 9 :60). Resolved, and carried into 02, 04, 07, 08, 09 |
| S4 | Treating the criterion as a detection verdict | re-census: criterion is a budget filter; detection theory, ROC and Neyman-Pearson corroborate from separate pools. Resolved |
| S5 | Reading "noise" as a domain with an anchor | re-census: Fig 13 :32 makes noise representational-relative, so X1 is rejected. Resolved |

No unresolved strain after re-census. Per the canonical rule, a reading that makes one figure contradict another has misidentified its domain, not found a flaw; each strain above was returned to the census rather than smoothed over.

---

## 6. Comparison with the primary census

| item | primary (`01`) | second seat (this file) | outcome |
|---|---|---|---|
| admitted domains | D1 receiver loop, D2 channel, D3 source, D4 code | A controller, B population of slots, C channel, D code | same four, different names and a different order; agree |
| rejected candidate | noise as a substance, no anchor | noise as a substance, no anchor; plus randomness as a description in Γ | agree, second seat adds one rejection |
| partition or union | union of C1 structure, C2 contact, C3 source | union of structure and contact/corroboration, with criterion as method condition | agree, second seat relocates the criterion outside the census |
| "distinguish" as routing | implied in F1 and F5 | stated explicitly as a routing operation on R, not a composition | refinement, not conflict |
| channel | one domain D2 | initially proposed merging with receiver loop, then separated on anchor kind | same endpoint; second seat adds the anchor-kind test |
| dependency order | per Fig 3, middle link breaks | per Fig 3, plus nested SEARCHED/INWARD/OUTWARD order | refinement, not conflict |
| decisive figures | Fig 1, Fig 5, Fig 10, Fig 2, Fig 9 | Fig 1, Fig 9, Fig 10, Fig 2, Fig 4 | agree on core; second seat elevates Fig 4's cross-scale and R_T role |
| verdict | four-condition shape, criterion as filter, `specified` | same, plus criterion placed as method rather than domain | agree |
| naming the specific source | `gap` | `gap`, confirmed by metamerism and source-discriminator argument | agree |
| world sources | corroboration only, no verdict flip | one witness per pool; Wikipedia host is not a shared evidence pool; essays declared one pool | agree |

**Round trip between seats.** The two censuses were written from the same residual line and the same figure text. Their agreement is a check of internal consistency, not triangulation (Fig 2 :31, :40). A real outside frame with a different evidence pool is still needed, and that is what the expert packet is for.

---

## 7. Verdict on the solution

**Status: pass, with three annotations.**

1. **Pass on structure.** Residual stated in effect terms, census before figure lines, verbatim quotes with `Fig N :line`, verdicts per domain and never averaged, pre-registered refuter, mode stated, `gap` declared where no line governs, no em dashes, sources opened and recorded. The figure quotes checked in section 3 are exact substrings.
2. **Pass on derive-first discipline.** The one genuine overreach (compressibility promoted from filter to verdict) was retracted at record level and carried into every downstream file. Five strains were logged and resolved by re-census. No world source flipped a verdict.
3. **Annotation A, independence.** This second seat is simulated and shares the primary's evidence pool. The solution has not received an independent human check. Its status must remain `specified`, and it must not be presented as corroborated by this audit.
4. **Annotation B, round trip.** The one-paragraph version in `07` is lossy in five named ways (section 4). It is suitable only as an invitation to check the full packet, never as a substitute for it, and the F2 retraction must accompany it.
5. **Annotation C, submission.** This is LLM-assisted work. Any venue that restricts AI-authored submissions must be checked by a human author before submission. It is to be used as a private checking instrument; a human researcher owns and writes anything submitted.

**Final:** the solution is internally consistent with the figures, honest about its simulation status, and correctly stopped at a `specified` shape with an open source-discriminator gap. It is not a ground reading and cannot settle INF-0027. *Unreachable is a verdict, not a silence*: the missing instrument is characterized, the refuters are written, and the stop is recorded.
