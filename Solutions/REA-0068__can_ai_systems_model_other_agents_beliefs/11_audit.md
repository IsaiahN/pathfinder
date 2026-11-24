# Independent second-seat audit, REA-0068

**Seat:** ground maintainer / reviewer. What this seat may see: the residual line, the records, the provenance, the verbatim figure text. What it must not see: the primary solution's interiors while it writes its own census.

**Honesty limitation, stated first.** This audit was written in the same session by the same model that wrote `01` through `10`. It is a **simulated second seat**, not a second person and not an independent witness. It checks the solution for internal consistency, re-censes from the residual line, and measures the round-trip gap. It cannot supply the independence that a real outside frame would supply. Per Fig 2 :31, *"Independence, between two frames, is how little they draw on the same evidence."* This seat and the primary seat draw on the same text, so any agreement between them is one evidence pool. Record that plainly.

**Mode: `specified`.** This is a simulated derivation, not a ground reading.

---

## 1. The residual line, taken alone

> Can the gap between what a model predicts an agent will do and what the agent actually does be near zero while the model is wrong about the belief or intention that produced the behaviour?

R = |Γ(b,a) - o′| per slot. The object of explanation is the relation between two quantities, not the quality of any model. Nothing in this line says "theory of mind", "emergence", "stochastic parrot", "world model" or "simulation". Any answer that begins with one of those words has already named a candidate before describing the residual, against Fig 9 :28 (*"any frame you pick will seem to fit"*) and Fig 8 :53 (*"Residual first, frame second"*).

**Anchor check.** Two anchors are needed, not one. For the behaviour half, a nameable anchor exists: held-out behaviour, legitimate because that question is constitutively about behaviour (Fig 2 :36). For the latent half, none is nameable here without a source-discriminating instrument. So the question is well formed as a union and not yet answerable as a single question. It is not yet a `gap` overall, because one half has a ground.

---

## 2. Independent re-census from the residual line

### 2.1 Arity, symmetry, scale

- **Arity:** a relation among model library, model belief, emitted attribution, agent behaviour and agent latent, indexed by slot and ordered by time. A two-place reading (model, accuracy) loses the latent and the prediction, so it is rejected. The relation carries an ordering and a comparison, not a symmetric conjunction.
- **Symmetry:** not symmetric. The Symbols table says `b` is *"Not the observation."* The model sees o′ and not the agent's `b`. The agent has access to its own `b`, so the two frames are not interchangeable. Fig 2 :25 says the anchor is *"pinned: it does not update on A or B"*; a latent that changes when the model changes its attribution is not an anchor.
- **Scale:** the slot is one agent, but the question of whether a latent was recovered only makes sense across a boundary between the agent's frame and the model's frame. Fig 4 :20 says the kernel does not change with size and only the actors, currency and anchor do. So the residual is intrinsically cross-frame, and the membrane is lossy (Fig 4 :30).

### 2.2 Domains, one line each

| domain | actors | currency | anchor | admitted? |
|---|---|---|---|---|
| A: model's prediction loop | model Γ, b_model, attribution, o′ | perceived and predicted behaviour | held-out behaviour | yes |
| B: agent's own loop | Γ_agent, b_agent, w_agent, a_agent | reduction of its own residual | the agent's ground | yes, interior not observable from A |
| C1: frame boundary, synthetic | two frames plus recorded latent | behaviour versus latent | experimenter-controlled latent | yes |
| C2: frame boundary, real agent | two frames, real agent | same | none without a source discriminator | no, not a domain for the attribution claim |
| D: verification frame | outside checkers, benchmarks | agreement and residual | the ground, never agreement | yes |
| E: "understanding" as a free property | a model and a label | insight | none independent of an instrument | no |

**Divergence from the primary census, recorded.** The primary split the frame boundary into D3a and D3b by anchor availability. This seat first proposed a single D3 with a footnote about simulation, then rejected that: a domain is admitted by whether an anchor can be named, and the answer differs between the synthetic and real cases, so one domain cannot hold both. This seat also tested merging A and D because both involve evaluation; it declined, because A is settled by held-out behaviour at a moment while D is settled by ground-backed checking of a claim, which are different anchors. The primary kept them separate for the same reason without stating the test. Both censuses arrive at the same four admitted domains plus one gap.

**Partition or union:** union. The two named conditions are prediction (A and D) and source attribution (C1, with B supplying the behaviour that crosses the boundary). Their overlap is a compound with its own loop (Fig 9 :54-57).

**Dependency order:** perception → vocabulary → objective → planning → learn and carry (Fig 3). This seat agrees with the primary ordering and adds that the residual line itself only forces the first three links; planning and carrying are candidate answers introduced by the frame, not forced by the residual.

---

## 3. Verbatim figure lines checked

Each line below was re-opened in `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. The "exact" column records whether the quoted string is an exact substring of the cited figure line, after whitespace normalisation.

| citation | exact string checked | exact? |
|---|---|---|
| Fig 1 :19 | The residual is indexed by object slot, not aggregated. | yes |
| Fig 1 :22 | Aggregating across slots is how a live signal disappears into an average. | yes |
| Fig 2 :31 | Independence, between two frames, is how little they draw on the same evidence. | yes |
| Fig 2 :36 | An anchor is legitimate when the question is constitutively about it. | yes |
| Fig 8 :39 | So a search that finds nothing is never a proof of absence. | yes |
| Fig 9 :32 | you get a kind of thing, never the answer itself | yes |
| Fig 10 :42 | A verifier that can reconstruct the claim cannot verify it. | yes |
| Fig 10 :43 | Soundness requires the checker to be unable to produce what it is checking. | yes |
| Fig 11 :39 | capability is a property of agent-and-habitat, never of the agent alone. | yes |
| Fig 12 :5 | A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording. | yes |
| Fig 12 :117 | isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour. | yes |
| Fig 13 :134 | Unreachable is a verdict here, not a silence, | yes, exact substring of a longer line |

**One citation hygiene note found and corrected.** An early draft wrote Fig 13 :134 as if the line began with the quoted phrase. The actual line begins *"So the system can report that it lacks something rather than producing an answer anyway."* The phrase is an exact substring, but the citation should not imply it opens the line. `01` and `07` now cite it as a substring, which is accurate. No figure quote in the solution was invented, and no quote came from a summary.

---

## 4. Round-trip gap R_T

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

- **T_A, going up:** carry the primary's shape to a one-sentence abstraction. Result: *behaviour can be predicted without the latent being known, so separate the two and require a source discriminator.*
- **T_E, coming back:** put that abstraction into a concrete AI evaluation. Result: *report accuracy and a separate confidence in the inferred belief, and call the system understood when both are high.*

**R_T = gap(x, (T_E ∘ T_A)(x)).** The gap is what the abstraction cannot hold:

1. The one-sentence form collapses the anchor rule. "Separate the two" does not say which anchor settles which half (Fig 2 :36, :38). Coming back down, a confidence score produced by the model itself is a frame scoring itself with a quantity it produces (Fig 1 :27).
2. It loses the closure result. "Require a source discriminator" does not say that composition inside the model's own closure cannot supply one (Fig 6 :21, :23). Coming back down, the natural fix is a bigger benchmark, which is effort above the break.
3. It loses the no-transform limit. The abstraction has no place for a pose, so coming back down it treats frame translation as a solved interface (Symbols `F`).
4. It loses the isomer point. A confidence score does not discriminate two latents with one reading (Fig 12 :117), so the concrete evaluation can score high on both columns and still be wrong about the source.
5. It loses the real/synthetic split. Coming back down, it invites treating a gridworld result as if it settled the real-agent case.

This gap is not an error to eliminate; it is the measurement of what the coarser description cannot hold (Fig 4 :31). It is also why the outreach packet sends the generator, not the one-paragraph version (Fig 4 :25). The one-paragraph version in `07` is a deliberately lossy artefact and is labelled as such.

---

## 5. Strains

| id | strain | handling |
|---|---|---|
| S1 | Applying Fig 13's six physical substrate terms to belief and intention only fits by renaming beliefs as kinds of energy | sent back to census; Fig 13 now governs only the honest stop, not a mental-state ontology. Resolved |
| S2 | Reading "no known transform between two frames" as an in-principle impossibility | narrowed to a structural limit of the held figure set; a pose-bearing transform is a live refuter. Resolved |
| S3 | Reading Fig 7 :26, "progress per handoff: R = h squared times S", as a calibrated equation | strained: the figure supplies the two factors and no numbers. Re-census: treat it as a product structure, mode `specified`, not a formula to fit. Resolved |
| S4 | Treating "theory of mind" as the framework's answer to C2 | re-census: it is a frame label with no source gate; a name where the framework returns a shape. Recorded as an import with zero verdict weight. Resolved |

No unresolved strain after re-census. Per the canonical rule, a reading that makes one figure contradict another has misidentified its domain, not found a flaw; each strain was returned to the census rather than smoothed over.

---

## 6. Comparison with the primary census

| item | primary (`01`) | second seat (this file) | outcome |
|---|---|---|---|
| admitted domains | D1 model loop, D2 agent loop, D3a synthetic, D3b real, D4 verification | A model loop, B agent loop, C1 synthetic, C2 real, D verification | same five, different names; agree |
| excluded candidate | understanding as free-floating property | same, plus theory of mind as a frame label | agree |
| partition or union | union of C1 and C2 | union of prediction and attribution | agree |
| frame boundary | split by anchor availability | initially merged, re-split by the anchor test | same endpoint; second seat supplies the test |
| dependency order | per Fig 3, middle link breaks | per Fig 3, plus note that only first three links are forced by residual | refinement, not conflict |
| decisive figures | Fig 2, Fig 1, Fig 6, Fig 12, Fig 10 | Fig 2, Fig 1, Fig 8, Fig 9, Fig 10 | agree on the core; second seat elevates the union rule |
| verdict | two conditions, kept separate, `specified` | two conditions, kept separate, `specified` | agree |
| real-agent attribution | `gap` | `gap`, confirmed by anchor test | agree |
| world sources | secondary, no verdict flip | secondary; one witness per pool; conflicts returned to census | agree |

**Round trip between seats.** The two censuses were written from the same residual line and the same figure text. Their agreement is a check of internal consistency, not triangulation (Fig 2 :31, :40). A real outside frame with a different evidence pool is still needed, and that is what the expert packet is for.

---

## 7. Verdict on the solution

**Status: pass, with four annotations.**

1. **Pass on structure.** Residual stated in effect terms, census before figure lines, verbatim quotes with `Fig N :line`, verdicts per domain and never averaged, pre-registered refuter, mode stated, `gap` declared where no line governs, no em dashes, sources opened and recorded. The figure quotes checked in section 3 are exact.
2. **Pass on derive-first discipline.** The one apparent world/figure tension (Rabinowitz's working ToMnet versus Fig 6 :21) was returned to the census and re-mapped into D3a rather than used to flip the verdict. Four strains were logged and resolved by re-census.
3. **Annotation A, independence.** This second seat is simulated and shares an evidence pool with the primary. The solution has not received an independent human check. Its status must remain `specified`, and it must not be presented as corroborated by this audit.
4. **Annotation B, round trip.** The one-paragraph version in `07` is lossy in five named ways (section 4). It is suitable only as an invitation to check the full packet, never as a substitute for it.
5. **Annotation C, submission.** This is LLM-assisted work. No venue AI policy was opened in this session, so none is quoted; the current policy of any target venue must be checked. It is to be used as a private checking instrument; a human researcher owns and writes anything submitted.
6. **Annotation D, the real-agent gap.** The gap is not silence. The instrument that would close it is described in effect terms and five refuters are written, so a world check can fire. *"Unreachable is a verdict here, not a silence"* (Fig 13 :134).

**Final:** the solution is internally consistent with the figures, honest about its simulation status, and correctly stopped at a `specified` shape with an open instrument gap for real agents. It is not a ground reading and cannot settle REA-0068. If a future check supplies a latent manipulation with recorded ground truth, a pose-bearing transform, or a score that predicts per-slot attribution errors out of distribution, the verdict is built to be reversed by it.
