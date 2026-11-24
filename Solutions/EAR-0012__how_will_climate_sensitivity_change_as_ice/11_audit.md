# Independent second-seat audit, EAR-0012

**Seat:** ground maintainer / reviewer. What this seat may see: the residual line, the records, the provenance, the verbatim figure text. What it must not see: the primary solution's interiors while it writes its own census.

**Honesty limitation, stated first.** This audit was written in the same session by the same model that wrote `01` through `10`. It is a **simulated second seat**, not a second person and not an independent witness. It checks the solution for internal consistency, re-censes from the residual line, and measures the round-trip gap. It cannot supply the independence that a real outside frame would supply. Per Fig 2 :31, *"Independence, between two frames, is how little they draw on the same evidence."* This seat and the primary seat draw on the same text, so any agreement between them is one evidence pool. Record that plainly.

**Mode: `specified`.** This is a simulated derivation, not a ground reading.

---

## 1. The residual line, taken alone

> How will climate sensitivity change as ice, clouds, forests and oceans respond to warming?

In effect terms: R = |Γ(b,a) − o′| per feedback slot and per state. The object of explanation is the movement of R as the slots change state. Nothing in this line says "ECS value", "tipping point", "cloud feedback", "pattern effect" or "carbon sink". Any answer that begins with one of those has named a candidate before describing the residual, against Fig 9 :28 (*"any frame you pick will seem to fit"*) and Fig 8 :53 (*"Residual first, frame second"*).

**Anchor check.** A nameable anchor exists: the measured top-of-atmosphere energy imbalance, ocean heat content and temperature record, explicitly named as the kind of thing that settles a question in Fig 2 :29. So this is a well-formed question and not yet a `gap`. The `gap` appears later, and only for the numeric trajectory that the figures cannot derive.

---

## 2. Independent re-census from the residual line

### 2.1 Arity, symmetry, scale

- **Arity:** a relation among Γ, a forcing action and an observed flux and temperature, indexed by slot and ordered by time and state. At least three operands plus two orderings. A two-place reading (warming, sensitivity) would lose the model, the observation and the slot, so it is rejected.
- **Symmetry:** not symmetric. The measured energy budget is an anchor and does not update on the model's opinion (Fig 2 :25). "Amplifying" is a threshold comparison relative to the Planck response (Fig 12 :87), so one operand is compared against a second, not merely conjoined with it.
- **Scale:** four scales are in view: instantaneous radiative, multi-decadal pattern, centennial carbon and millennial ice-sheet. The transform between them is lossy (Fig 4). The residual is intrinsically cross-scale, so a single scalar cannot report it without dropping the scale index.

### 2.2 Domains, one line each

| domain | actors | currency | anchor | admitted? |
|---|---|---|---|---|
| A: energy-budget response | surface, atmosphere, radiation | W m-2, K | measured TOA flux and temperature | yes |
| B: physical feedback habitats | ice, clouds, water vapour, ocean heat uptake | albedo, flux, heat uptake | CERES, Argo, ice extent | yes |
| C: biogeochemical habitats | forests, soil, permafrost, ocean carbon | carbon flux, CO2/CH4 | growth rate, flux towers, ocean inventory | yes |
| D: model and verification frame | ESMs, ensembles, elicitation | ECS/TCR, spread | external measurement and paleo proxies | yes, anchor outside |
| E: sensitivity as a free scalar | a number | K per doubling | none independent of forcing-response pair | no, reframed as a metric |
| F: tipping point as a standalone property | a critical value | control parameter | already inside B and C | absorbed |

**Divergence from the primary census, recorded.** The primary called its first domains D1 (energy budget), D2 (physical habitats), D3 (biogeochemical habitats), D4 (verification frame). This seat at first proposed splitting D2 into two domains: "fast radiative feedbacks" (clouds, albedo) and "slow state feedbacks" (ice sheets, ocean heat uptake). On re-census they share one anchor class, measured flux, and their overlap is a compound with its own loop, so they are one domain B. This seat also tested merging B and C because both are "habitat" domains; it declined, because the currencies differ in kind: B is measured in radiative flux, C in carbon mass, and a flux-to-mass mapping requires a new binding. The primary kept them separate for the same reason without stating the explicit test. This seat also adds a refinement to X1: a metric is not "not a domain" in the sense of being useless, it is the comparison bond ⋛, which is a legitimate object of study. Both censuses arrive at four admitted domains, with the same exclusions.

**Partition or union:** union. The two named conditions are physical response (A and B) and biogeochemical response (C, with D supplying both the model binding and the external anchor). Their overlaps are compounds with their own loops (Fig 9 :54-57).

**Dependency order:** perception → vocabulary → objective → planning → learn and carry (Fig 3). This seat agrees with the primary ordering and adds that the residual line itself supports only the first three links; planning and carrying are candidate answers introduced by the frame, not forced by the residual.

---

## 3. Verbatim figure lines checked

Each line below was re-opened in `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. The check is against the extract, not against a summary or memory.

| citation | exact string checked | exact? |
|---|---|---|
| Fig 1 :13 | a global R near zero with one live slot residual is a legal state | yes |
| Fig 1 :19 | The residual is indexed by object slot, not aggregated. | yes |
| Fig 1 :22 | Aggregating across slots is how a live signal disappears into an average. | yes |
| Fig 2 :29 | An anchor is whatever settles the question and does not change its answer because of what any frame thinks. | yes |
| Fig 2 :31 | Independence, between two frames, is how little they draw on the same evidence. | yes |
| Fig 2 :40 | disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool | yes; the leading clause must be kept if presented as the whole line |
| Fig 7 :13 | agreement compounds, evidence does not | yes |
| Fig 9 :32 | you get a kind of thing, never the answer itself | yes |
| Fig 9 :57 | What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. | yes |
| Fig 11 :43 | The habitat is enumerated, never composed. | yes |
| Fig 11 :52 | And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out. | yes, across the line wrap |
| Fig 12 :87 | a threshold relation between two quantities | yes |
| Fig 12 :121 | cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction. | yes |
| Fig 13 :31 | a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise. | yes, across the line wrap |
| Fig 13 :134 | Unreachable is a verdict here, not a silence | yes; substring, not the opening of the line |

**One citation narrowed.** An early draft cited the hysteresis claim as if the figures gave a path-dependent threshold operator. Re-census: Fig 12 :87 defines ⋛ as a threshold relation between two quantities; it does not say the second operand cannot include history. The path-dependence came from the EGUsphere sea-ice short summary, a world source, not from a figure line. `06` Q4 and `09` now attribute it correctly. The figure governs the comparison; the world source supplies the operand.

---

## 4. Round trip gap R_T

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

- **T_A, going up:** carry the primary's shape to one sentence: *climate sensitivity changes when per-slot signed feedback loops change sign or strength with state.*
- **T_E, coming back:** put that sentence into a specific decision: *report the low-cloud feedback as amplifying and reduce the ECS range accordingly.*

**R_T = gap(x, (T_E ∘ T_A)(x)).** The gap is what the one sentence cannot hold:

1. The one-sentence form loses the per-slot indexing (Fig 1 :19). Coming back down, it permits a global mean to stand in for the cloud slot, which is the exact failure F1 names.
2. It loses the anchor rule (Fig 2 :29, :40). "Change sign or strength" does not say which instrument settles the sign, so a coming-down reader can substitute ensemble agreement for measurement.
3. It loses the union split (Fig 9 :57). "Feedback loops" merges the physical and carbon-cycle conditions, so a coming-down reader applies one lever to two compounds.
4. It loses the `gap` on the numeric trajectory (Fig 9 :32, Fig 13 :134). The one sentence sounds like a result; a coming-down reader can treat it as authority for a number.
5. It loses the cascade depth (Fig 11 :52). "Per-slot" reads as direct effects only, so the second- and third-order residual disappears.

One thing survives cleanly: a feedback is a cycle whose sign decides closure, and the measured budget settles that sign. That is the residue worth sending. R_T was **not** measured numerically, because no ground reading exists for this simulated run; it is recorded qualitatively as the enumerated set of dropped constraints. Treating the formula as identical to the metalaws would set R_T to zero, which is the dead-reckoning error Fig 4 :30 names.

---

## 5. Strains

| id | strain | handling |
|---|---|---|
| S1 | Applying Fig 13's six physical substrate terms to carbon-cycle slots only fits by renaming carbon flux as energy | sent back to census; Fig 13 now governs amplification and the honest stop, not carbon bindings. Resolved |
| S2 | The IPCC Ch7 statements that the cloud sign is known and the future magnitude is unquantified read as a contradiction | re-census: sign is a comparison at a measured state, magnitude is a trajectory; different objects. Resolved |
| S3 | Reading Fig 7 :26, *"progress per handoff: R = h² × S"*, as a calibrated equation with measurable h² and S | strained: the figure supplies two factors and no numbers. Treat as a product structure, mode `specified`. Resolved |
| S4 | Treating Lenton's expert elicitation as a third independent witness | re-census: elicitation is a filter, and Lenton's own text records the bias criticism. Recorded as a method warning. Resolved |
| S5 | Treating "tipping point" as a seventh primitive | re-census: it is the ⋛ comparison on a control parameter, already in Fig 12. Resolved |

No unresolved strain after re-census. Per the canonical rule, a reading that makes one figure contradict another has misidentified its domain, not found a flaw; each strain above was returned to the census rather than smoothed over.

---

## 6. Comparison with the primary census

| item | primary (`01`) | second seat (this file) | outcome |
|---|---|---|---|
| admitted domains | D1 energy budget, D2 physical, D3 carbon, D4 verification | A response, B physical, C carbon, D verification | same four, different names; agree |
| physical domain | one D2 | initially split fast/slow, re-merged on shared flux anchor | same endpoint; second seat adds the anchor test |
| excluded candidate | sensitivity as free scalar, tipping point as property | free scalar reframed as comparison, tipping absorbed | agree with a refinement on the metric |
| partition or union | union of C1 physical and C2 carbon | union of response and carbon | agree |
| decisive figures | Fig 1, Fig 12, Fig 11, Fig 2 | Fig 1, Fig 9, Fig 11, Fig 2 | agree on the core set; second seat elevates Fig 9's union rule |
| numeric trajectory | `gap` | `gap`, confirmed by the anchor check and Fig 9 :32 | agree |
| world sources | secondary, no verdict flip | secondary; one witness per pool; apparent conflict returned to census | agree |
| round trip | not carried out in `01` | carried out here, five named drops | addition, not conflict |

**Round trip between seats.** The two censuses were written from the same residual line and the same figure text. Their agreement is a check of internal consistency, not triangulation (Fig 2 :31, :40). A real outside frame with a different evidence pool is still needed, and that is what the expert packet is for.

---

## 7. Verdict on the solution

**Status: pass, with four annotations.**

1. **Pass on structure.** Residual stated in effect terms, census before figure lines, verbatim quotes with `Fig N :line`, verdicts per domain and never averaged, pre-registered refuter, mode stated, `gap` declared where no line governs, no em dashes, sources opened and recorded. The figure quotes checked in section 3 are exact substrings of the extract.
2. **Pass on derive-first discipline.** The one apparent world-side conflict, known cloud sign versus unknown future magnitude, was returned to the census and split by scope rather than used to flip a verdict. Five strains were logged and resolved by re-census.
3. **Annotation A, independence.** This second seat is simulated and shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is internal consistency, not truth.
4. **Annotation B, round trip.** The one-paragraph version in `07` is lossy in five named ways (section 4). It is suitable only as an invitation to check the full packet, never as a substitute for it.
5. **Annotation C, the anchor.** This question has a real, external, measured anchor: instruments and paleo data. That makes it unlike a purely frame-internal question, and it is why the solution can say the sign is settled while declining to derive the number. The `gap` is relative to the figures, not to climate science.
6. **Annotation D, submission.** This is LLM-assisted work. Journal and union policies must be checked before anything is submitted; a human researcher owns and writes any submitted article. This packet is a private checking instrument.

**Final:** the solution is internally consistent with the figures, honest about its simulation status, and correctly stopped at a `specified` shape with an open instrument gap. It is not a ground reading and cannot settle EAR-0012. *"Unreachable is a verdict here, not a silence"*: the missing per-slot discriminator is characterized, the seven refuters are written, and the stop is recorded.
