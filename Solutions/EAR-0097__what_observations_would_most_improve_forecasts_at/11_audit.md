# Independent second-seat audit, EAR-0097

**Seat:** ground maintainer / reviewer. What this seat may see: the residual line, the records, the provenance, the verbatim figure text. What it must not see while writing its own census: the primary solution's interiors.

**Honesty limitation, stated first.** This audit was written in the same session by the same model that wrote `01` through `10`. It is a **simulated second seat**, not a second person and not an independent witness. It checks the solution for internal consistency, re-censes from the residual line, and measures the round-trip gap. It cannot supply the independence a real outside frame would supply. Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."** This seat and the primary seat draw on the same text, so any agreement between them is one evidence pool. Record that plainly.

**Mode: `specified` on the per-domain checks, `general` on the shape, `gap` on the named list. Not `grounded`.** This is a simulated derivation, not a ground reading.

---

## 1. The residual line, taken alone

> Which observations would most improve forecasts at the scales where infrastructure and land-use decisions are made?

Stated in effect terms: R = |Γ(b,a) − o′| per decision slot. Γ is the forecasting system, a is the infrastructure or land-use decision, o′ is what actually happens at the place and time the decision commits to, and s is the catchment, coast, parcel or service territory the decision concerns. The question asks which additions to the observing system shrink R⁺_s on the live slots.

Nothing in this line says "satellite", "gauge", "reanalysis", "data assimilation", "ensemble", "downscaling" or "more data". Any answer that opens with one of those has named a candidate before describing the residual, against Fig 8 :53 (**"Residual first, frame second."**) and Fig 9 :27-28 (**"describe it before you go looking, or any frame you pick will seem to fit"**).

**Anchor check.** A nameable anchor exists: the observed local outcome at the decision slot, a measurement the forecasting system cannot move. Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** So the question is well formed and is not yet a `gap`. The `gap` appears later, at the naming step.

**Comparison arity check.** "Most improve" is a threshold relation between two quantities (Fig 12 :87), not a conjunction. This seat flags early that a single ranked list would silently convert a comparison into an aggregate.

---

## 2. Independent re-census from the residual line

### 2.1 Arity, symmetry, scale

- **Arity:** prediction, action and outcome, indexed by slot. A two-place reading (model versus world) loses the decision, so it is rejected. The ranking adds a second arity: candidate observations compared against a slot residual.
- **Symmetry:** ordered, not symmetric. Observation precedes decision precedes outcome (Fig 12 :71, sequence). Decision relevance is a threshold: an observation inside the lead-time and cost envelope counts; one outside does not. A pooled average destroys the ordering (Fig 1 :22).
- **Scale:** intrinsically cross-scale. The observation may enter a global model; the decision is local. The transform is lossy (Fig 4 :27). The residual lives at the membrane, not wholly on either side.

### 2.2 Domains, one line each

| domain | actors | currency | anchor | admitted? |
|---|---|---|---|---|
| A: forecast producer | models, assimilation, downscaling | per-slot error, spread | observed local outcome | yes |
| B: decision holder | planners, engineers, regulators | avoided loss, lead time | realized consequence at the site | yes |
| C: scale boundary | regional models, T_A / T_E | information lost, R_T | local reading to range the projection | yes |
| D: channel and instruments | gauges, satellites, reanalysis, surveys | representable state, contact | ground that persists while channel decays | yes |
| E: habitat / cascade | actors, conditions, relations | second- and third-order contact | the world read off | yes |
| F: "more data" as a free property | an aggregate | volume | none independent of A | no, not a domain |
| G: "universal best observation" | an idealization | one winner | none reachable; terminal room | absorbed into A as a limit |

**Divergence from the primary census, recorded.** The primary named five admitted domains D1 to D5. This seat at first proposed splitting D4 into "instrument extension" and "channel maintenance", because one adds capability and the other preserves contact. On re-census they share one anchor, the persisting ground, and their overlap is a compound, so they are one domain D. This seat also tested merging E into D, because both involve the world outside the model. It declined: E governs where candidate actors come from (enumeration), D governs whether contact survives (channel). The primary kept them separate without stating the test; this seat supplies it. Both censuses arrive at five admitted domains.

**Partition or union:** union. The conditions overlap; a single lever leaves intersections standing (Fig 9 :54, :57).

**Dependency order:** perception -> vocabulary -> objective -> planning -> learn and carry. This seat agrees with the primary and adds that the residual line itself forces only the first three links; planning and carrying are candidate answers introduced by a frame, not forced by the question.

---

## 3. Verbatim figure lines checked

Each line below was re-opened in `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. The "exact" column records whether the quoted string is an exact substring of the cited figure line after whitespace and typographic normalisation.

| citation | exact string checked | exact? |
|---|---|---|
| Fig 1 :19 | The residual is indexed by object slot, not aggregated. | yes |
| Fig 1 :22 | Aggregating across slots is how a live signal disappears into an average. | yes |
| Fig 1 :23 | The ground enters as the only metric. | yes |
| Fig 2 :29 | An anchor is whatever settles the question and does not change its answer because of what any frame thinks. | yes |
| Fig 2 :31 | Independence, between two frames, is how little they draw on the same evidence. | yes |
| Fig 2 :35 | Alignment is triangulation, not negotiation. A mirror cannot correct you. | yes |
| Fig 2 :40 | agreement about the world is worthless when the agreeing frames share an evidence pool | yes |
| Fig 2 :42 | Buy independence in proportion to the cost of being wrong. | yes |
| Fig 3 :20 | The chain is ordered by dependency, not by importance. | yes |
| Fig 3 :27 | A link with no instrument is not a link that works. It is a link nobody has looked at. | yes |
| Fig 4 :22 | Only methods cross up. Only head starts come down. | yes |
| Fig 4 :30 | So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked. | yes |
| Fig 4 :31 | The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold | yes, substring |
| Fig 5 :21 | the gap has real mass somewhere | yes |
| Fig 6 :26 | instruments extend what can be represented at all | yes, substring |
| Fig 6 :31 | Neither answer tells you much about the other. Run them as two tracks, and never read one against the other. | yes |
| Fig 6 :32 | An instrument is not built from a description. It is improved from a worse instrument already returning something. | yes |
| Fig 7 :13 | agreement compounds, evidence does not | yes |
| Fig 8 :39 | So a search that finds nothing is never a proof of absence. | yes |
| Fig 8 :53 | Residual first, frame second. | yes |
| Fig 9 :32 | you get a kind of thing, never the answer itself | yes |
| Fig 9 :54 | And when the split lands on a union rather than a partition, unbundle before you search again. | yes |
| Fig 9 :60 | Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict. | yes |
| Fig 10 :24 | the ground does not decay, the channel does | yes |
| Fig 10 :52 | Bring a characterised residual, never the source. | yes |
| Fig 11 :43 | The habitat is enumerated, never composed. | yes |
| Fig 11 :48 | You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual. | yes |
| Fig 11 :49 | An actor’s valence is relative to the residual, not a property it carries. | yes, curly apostrophe preserved |
| Fig 11 :51 | No standing list of good actors survives a change of residual. | yes |
| Fig 12 :87 | a threshold relation between two quantities | yes |
| Fig 12 :117 | isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour. | yes |
| Fig 12 :125 | A composition costs in two currencies, and they do not add. | yes |
| Fig 13 :134 | Unreachable is a verdict here, not a silence, | yes, substring; not the opening of the line |

**One misuse found and corrected.** An early draft of this audit cited Fig 13 :134 as if the line began *"Unreachable is a verdict here, not a silence,"*. The actual line begins *"So the system can report that it lacks something rather than producing an answer anyway."* The phrase is an exact substring, but the citation should not imply it opens the line. `01`, `07`, `08` and `09` now cite it as a substring or without implying position. No figure quote in the solution was invented, and none came from a summary. Every quoted string in files `01`, `07` and `09` is a substring of the verbatim extract.

---

## 4. Round-trip gap R_T

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

- **T_A, going up:** carry the four-condition separator to a one-sentence abstraction. Result: *better forecasts where decisions are made need observations that reduce local error against a fixed reference and survive the trip from the global model to the site.*
- **T_E, coming back:** put that abstraction into a specific catchment planning situation. Result: *install more local sensors and check them against the model.*

**R_T = gap(x, (T_E ∘ T_A)(x)).** The gap is what the abstraction cannot hold:

1. **The union collapses.** The one-sentence form reads as a single lever, losing Fig 9 :57, *"a case in two conditions is not a harder case of either."* Coming back down it tells a catchment failing only the anchor test to install more sensors, which is effort above the break (Fig 3 :29-30).
2. **The anchor rule vanishes.** "Fixed reference" does not say that the reference must not update on the model's own output (Fig 2 :29, :35). Coming back down, a team can verify against a reanalysis built from the same model family and call it independent.
3. **The two currencies merge.** "Better" silently sums information and cost, losing Fig 12 :125. Coming back down, an expensive gauge network looks like a cheap improvement because the two have been added.
4. **The cascade is lost.** "More local sensors" scopes the habitat to direct contact, losing Fig 11 :52. Coming back down, the driver three steps out is never enumerated.
5. **The `gap` is erased.** The abstraction sounds like an answer, so coming back down nobody records that the winning observation is still unnamed. This is the most dangerous loss because it makes the stop look like a result.

This gap is not an error to eliminate; it is the measurement of what the coarser description cannot hold (Fig 4 :31). It is why the outreach packet sends the generator, not the one-paragraph version. The one-paragraph version in `07` is a deliberately lossy artefact and is labelled as such.

---

## 5. Strains

| id | strain | handling |
|---|---|---|
| S1 | Fig 6 proto-instrument rule versus the practical call for wholly new observation systems | re-census: INWARD extends an existing edge, OUTWARD imports a new atom with a source gate and an independence debit (Fig 6 :31). Resolved, kept visible. |
| S2 | Fig 11 "read the list off the world" versus the model's variable list | re-census: habitat is the world's contact network, not the model's state vector. Resolved as a correction to the naive reading. |
| S3 | "Most improve" as one ranking versus per-slot residual | re-census: ⋛ is a threshold (Fig 12 :87), applied per slot; aggregation hides the signal (Fig 1 :22). Single-list reading retracted. |
| S4 | Information value versus action cost in two currencies | live type question. Fig 12 :125-127 supplies no common unit. Named, not smoothed. |
| S5 | Ensemble spread as uncertainty versus Fig 2 agreement-is-not-a-verdict | re-census: spread is a within-frame budget filter, independence is a between-frame witness rule. Different quantities. Resolved. |
| S6 | Earlier draft "no new sensors, only sharpening" | retracted and preserved in `01` section 6. OUTWARD is licensed. Resolved. |

No unresolved contradiction after re-census. Per the canonical rule, a reading that makes one figure contradict another has misidentified its domain, not found a flaw; each strain was returned to the census.

---

## 6. Comparison with the primary census

| item | primary (`01`) | second seat (this file) | outcome |
|---|---|---|---|
| admitted domains | D1 forecast, D2 decision, D3 membrane, D4 channel, D5 habitat | A forecast, B decision, C boundary, D channel, E habitat | same five, different names; agree |
| excluded candidate | "more data everywhere", no anchor | same, plus "universal best observation" as terminal room | refinement, not conflict |
| instrument versus channel | one domain D4 | initially split, re-merged on shared ground anchor | same endpoint; second seat adds the anchor test |
| habitat versus channel | kept separate | initially merged, declined on enumeration-versus-contact distinction | same endpoint; second seat adds the test |
| partition or union | union of four conditions | union of four conditions | agree |
| dependency order | Fig 3, perception breaks | Fig 3, plus note that only first three links are forced by the residual | refinement, not conflict |
| decisive figures | Fig 1, 2, 4, 6, 11 | Fig 1, 2, 3, 4, 6, 9, 11 | agree on the core; second seat elevates Fig 9 :54 and Fig 12 :87 |
| verdict | four conditions plus enumeration rule, per slot, never averaged | same | agree |
| ranked list | `gap`, unreached not unreachable | `gap` confirmed by Fig 13 :134 and Fig 9 :32 | agree |
| world sources | secondary, one pool per field, no verdict flip | same; S5 dissolved rather than flipped | agree |

**Round trip between seats.** Both censuses were written from the same residual line and the same figure text. Their agreement is a check of internal consistency, not triangulation (Fig 2 :31, :40). A real outside frame with a different evidence pool is still needed, and that is what `08_expert_verification_packet.md` is for.

---

## 7. Verdict on the solution

**Status: pass, with four annotations.**

1. **Pass on structure.** Residual stated in effect terms; domain census before figure lines; verbatim quotes with `Fig N :line`; union declared; per-domain verdicts never averaged; pre-registered refuter written before the conclusion; mode stated; `gap` declared where no line governs; no em dashes; sources opened and recorded with author, venue, year, accessed date and quote.
2. **Pass on derive-first discipline.** The one apparent world/figure tension (ensemble spread versus agreement) was returned to the census and re-mapped to two quantities, never used to flip the verdict. Six strains were logged; one type question remains live and named.
3. **Annotation A, independence.** This second seat is simulated and shares an evidence pool with the primary. The solution has not received an independent human check. Its status must remain `specified`, and it must not be presented as corroborated by this audit.
4. **Annotation B, round trip.** The one-paragraph version in `07` is lossy in five named ways (section 4). It is suitable only as an invitation to check the full packet, never as a substitute for it.
5. **Annotation C, the gap.** No figure line names the winning observation, and the solution says so plainly. That is a verdict, not a silence (Fig 13 :134). The instrument that would close it is characterized, and five refuters are written. Had the solution invented a name, this seat would have failed it.
6. **Annotation D, submission.** Copernicus journals (ESD, ESSD) publish an explicit AI policy, and this package is LLM-assisted. It is a private checking instrument. A human researcher owns and writes anything submitted.

**Final.** The solution is internally consistent with the figures, honest about its simulation status, and correctly stopped at a `specified` shape with an open instrument gap. It is not a ground reading and cannot settle EAR-0097. Unreachable is a verdict, not a silence: the missing discriminator is characterized, the refuters are written, and the lineage is recorded so a later reader can locate the error rather than only feel it.
