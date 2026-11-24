# Independent second-seat audit, EAR-0028

**Seat:** ground maintainer / reviewer. What this seat may see: the residual line, the records, the provenance, the verbatim figure text. What it must not see: the primary solution's interiors while it writes its own census.

**Honesty limitation, stated first.** This audit was written in the same session by the same model that wrote `01` through `10`. It is a **simulated second seat**, not a second person and not an independent witness. It checks the solution for internal consistency, re-censes from the residual line, and measures the round-trip gap. It cannot supply the independence that a real outside frame would supply. Per Fig 2 :31, *"Independence, between two frames, is how little they draw on the same evidence."* This seat and the primary seat draw on the same text, so any agreement between them is one evidence pool. Record that plainly.

**Mode: `specified`.** This is a simulated derivation, not a ground reading.

---

## 1. The residual line, taken alone

> Could changes in plankton and marine food webs substantially alter the ocean's role in the carbon cycle? Restated in effect terms: does any part of the gap between a physics-and-pumps prediction and the observed air-sea CO2 flux arise from the biological actors, and how large is that part relative to the whole sink?

R = |Γ(b,a) - o′| per slot. The object of explanation is a **threshold comparison**, not a level and not a name. Nothing in this line says "diatom", "krill", "biological pump", "solubility pump" or "blue carbon". Any answer that begins with one of those words has already named a candidate before describing the residual, against Fig 9 :28 (*"any frame you pick will seem to fit"*) and Fig 8 :53 (*"Residual first, frame second"*).

**Anchor check.** A nameable anchor exists: the measured carbon inventory and air-sea flux, explicitly a measurement in Fig 2 :29. So this is a well-formed question and not yet a `gap`. The word "substantially" needs a second quantity to compare against, which is why the census below finds two quantities rather than one.

---

## 2. Independent re-census from the residual line

### 2.1 Arity, symmetry, scale

- **Arity:** a relation among pump state Γ, biological perturbation a, physical forcing and observed flux o′, indexed by region and pool. It has at least four operands and an ordering (carbon fixed → exported → remineralised → returned). A two-place reading (plankton, sink) would lose the physics and the observation, so it is rejected. The comparison in "substantially" is a binary threshold relation, not a symmetric join (Fig 12 :87).
- **Symmetry:** not symmetric. The anchor does not update on the frame (Fig 2 :25), and the comparison is a threshold, so one operand is a quantity compared against a second rather than merely conjoined with it.
- **Scale:** the slot could be a region, a pool or a trophic level. The ranking of "substantially" only makes sense at a stated scale, and the transform between mixed layer, mesopelagic zone and deep ocean is lossy (Fig 4 :27-31). The residual is intrinsically cross-scale, which is why a single global number is the wrong form of answer.

### 2.2 Domains, one line each

| domain | actors | currency | anchor | admitted? |
|---|---|---|---|---|
| A: biological pump and export | phytoplankton, zooplankton, bacteria, viruses | export, transfer efficiency | sediment traps, 234Th, O2/Ar | yes |
| B: solubility and carbonate pumps | CO2, seawater, carbonate ions | DIC, pCO2, alkalinity | SOCAT, GLODAP | yes |
| C: circulation and ventilation | currents, mixing, upwelling | transport, residence time | floats, tracers | yes |
| D: food-web relations | grazers, predators, mixotrophs, viruses | coupling, valence | isotopes, networks, mesocosms | yes |
| E: observation and models | models, instruments, observers | residual | measured inventory | yes |
| F: "the plankton" as one actor | a biomass number | carbon fixed | none independent of species and relations | no, re-census into A and D |
| G: "the ocean sink" as one global number | an aggregate flux | one number | a global mean hides the per-slot residual | absorbed into B and C |

**Divergence from the primary census, recorded.** The primary called its domains D1 (biological pump), D2 (solubility and carbonate), D3 (circulation), D4 (food-web relations) and D5 (observation frame). This seat at first proposed splitting the biological side into "producers" and "consumers" as two domains. On re-census they share one anchor, the export flux, and their overlap is a compound, so they are one domain A (the primary's D1 plus D4). This seat also tested merging the observation frame E into the physical domains B and C, because models are manufactured within the same disciplinary frame; it declined, because the anchor differs in kind: B and C are settled by measured chemistry and transport, while E is the seat that ranges both against the inventory (Fig 10 :29, *"→ keep the anchor reachable"*). The primary kept D5 separate for the same reason without stating the test. Both censuses arrive at five admitted domains.

**Partition or union:** union. The two named conditions are the natural gradient (A and D) and the anthropogenic sink (B and C, with E ranging both). Their overlap is a compound with its own loop (Fig 9 :54-57).

**Dependency order:** perception → vocabulary → objective → planning → learn and carry (Fig 3). This seat agrees with the primary ordering, and adds that the residual line itself only supports the first three links; planning and carrying are candidate answers introduced by the frame, not forced by the residual.

---

## 3. Verbatim figure lines checked

Each line below was re-opened in `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. The "exact" column records whether the quoted string is an exact substring of the cited figure line.

| citation | exact string checked | exact? |
|---|---|---|
| Fig 1 :19 | The residual is indexed by object slot, not aggregated. | yes |
| Fig 2 :29 | An anchor is whatever settles the question and does not change its answer because of what any frame thinks. | yes |
| Fig 2 :31 | Independence, between two frames, is how little they draw on the same evidence. | yes |
| Fig 2 :42 | Buy independence in proportion to the cost of being wrong. | yes |
| Fig 3 :27 | A link with no instrument is not a link that works. It is a link nobody has looked at. | yes |
| Fig 8 :53 | Residual first, frame second. | yes |
| Fig 9 :28 | any frame you pick will seem to fit | yes |
| Fig 9 :32 | you get a kind of thing, never the answer itself | yes |
| Fig 9 :57 | What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. | yes |
| Fig 10 :29 | → keep the anchor reachable | yes |
| Fig 11 :43 | The habitat is enumerated, never composed. | yes |
| Fig 11 :52 | And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out. | yes |
| Fig 12 :87 | a threshold relation between two quantities | yes |
| Fig 12 :104 | A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world. | yes |
| Fig 12 :117 | isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour. | yes |
| Fig 12 :121 | cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction. | yes |
| Fig 13 :76 | Energy and a gradient compose a flow. | yes |

**One citation form corrected.** An early draft cited the short phrase *"Unreachable is a verdict here, not a silence,"* as if it opened Fig 13 :134. The line actually begins *"So the system can report that it lacks something rather than producing an answer anyway."* The short phrase is an exact substring of the line, but the citation must not imply it opens the line. `01`, `07` and `09` now present it as a substring. No figure quote in the solution was invented, and no quote came from a summary.

---

## 4. Round-trip gap R_T

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

- **T_A, going up:** carry the primary's shape to a one-sentence abstraction. Result: *plankton changes affect the ocean carbon sink according to the food web.*
- **T_E, coming back:** put that abstraction into a specific basin decision. Result: *protect large plankton and grazers to increase the ocean carbon sink.*

**R_T = gap(x, (T_E ∘ T_A)(x)).** The gap is what the abstraction cannot hold:

1. It collapses the union into one lever. It loses Fig 9 :57, *"a case in two conditions is not a harder case of either."* Coming back down, it tells a manager to buy a biological lever for a solubility problem, which is effort above the break (Fig 3 :29-30).
2. It loses the two quantities. "Affect the sink" does not say whether the natural gradient or the anthropogenic sink is meant. Coming back down, it conflates the ~90 percent result with the <0.15 GtC per year result.
3. It loses the sign rule. "Protect large plankton" assumes a fixed valence; Fig 11 :49-51 and Fig 12 :121 say the sign can flip. Coming back down, it licenses a standing list of good actors that Fig 11 :51 forbids.
4. It loses the bond. "Large plankton and grazers" is an ingredient list. Fig 12 :5 says the bond is the rest of the information. Coming back down, it predicts export from a species inventory, which is exactly what Lin et al. 2017 found inadequate.
5. It loses the source-discriminator requirement. The abstraction cannot say what instrument would distinguish a plankton-driven export change from a solubility-driven flux change, which is the actual `gap` in the answer.

This gap is not an error to eliminate; it is the measurement of what the coarser description cannot hold (Fig 4 :31). It is also why the outreach packet sends the generator, not the one-sentence version (Fig 4 :25). The one-paragraph version in `07` is a deliberately lossy artefact and is labelled as such.

---

## 5. Strains

| id | strain | handling |
|---|---|---|
| S1 | Applying Fig 13's six physical substrate terms to plankton functional types only fits by renaming a diatom a state and grazing a gradient | sent back to census; Fig 13 now governs the physical flow (energy plus gradient) and the honest stop, not a taxonomic list. Resolved |
| S2 | Reading "Energy and a gradient compose a flow" as if the biological pump were itself a physical state | re-census via Fig 12 :104: level-relativity permits flow as a composition at a different level; it is not a seventh substrate term. Resolved |
| S3 | Calling the measured inventory "the ground" while the inventory is itself estimated by models using assumptions | re-census: the habitat updates and the ground settles (Fig 11 :73); the anchor is the measurement that does not move on model opinion, and models are frames ranged against it. Resolved |
| S4 | Treating Resplandy 2026 as a refutation of the food-web cascade | re-census: it governs the anthropogenic sink (Q2), the cascade governs the natural gradient and export (Q1); different quantities and levels. Resolved |
| S5 | Treating the 0.15 GtC per year result as the answer to "substantially" | re-census: it is a world measurement of one quantity at one level, a filter for scale, not a witness for the shape (Fig 9 :60). Resolved |

No unresolved strain after re-census. Per the canonical rule, a reading that makes one figure contradict another has misidentified its domain, not found a flaw; each strain above was returned to the census rather than smoothed over.

---

## 6. Comparison with the primary census

| item | primary (`01`) | second seat (this file) | outcome |
|---|---|---|---|
| admitted domains | D1 pump, D2 solubility, D3 circulation, D4 relations, D5 observation | A pump and export, B solubility, C circulation, D relations, E observation | same five, different grouping; agree |
| producers and consumers | inside D1 | initially split, re-merged on shared export anchor | same endpoint; second seat adds the anchor test |
| observation frame | D5 separate | initially merged into B and C, declined on anchor kind | same endpoint; second seat states the test |
| partition or union | union of Q1 and Q2 | union of natural gradient and anthropogenic sink | agree |
| decisive figures | Fig 11, Fig 12, Fig 9 | Fig 11, Fig 9, Fig 2, Fig 12 | agree on the core set; second seat elevates Fig 2's anchor rule |
| verdict | two quantities kept separate, `specified` | two quantities kept separate, `specified` | agree |
| decisive species and magnitude | `gap`, `gap` | `gap`, `gap`, confirmed by the source-discriminator argument | agree |
| world sources | secondary, one apparent conflict returned to census | secondary; one witness per pool; conflict returned to census | agree |

**Round trip between seats.** The two censuses were written from the same residual line and the same figure text. Their agreement is a check of internal consistency, not triangulation (Fig 2 :31, :40). A real outside frame with a different evidence pool is still needed, and that is what the expert packet is for.

---

## 7. Verdict on the solution

**Status: pass, with three annotations.**

1. **Pass on structure.** Residual stated in effect terms, census before figure lines, verbatim quotes with `Fig N :line`, verdicts per domain and never averaged, pre-registered refuter, mode stated, two `gap`s declared where no line governs, no em dashes, sources opened and recorded. The figure quotes checked in section 3 are exact.
2. **Pass on derive-first discipline.** The one genuine world/figure conflict (Resplandy 2026 versus the cascade reading) was returned to the census and re-mapped rather than used to flip the verdict. Five strains were logged and resolved by re-census. The year of the Resplandy source was corrected from a search-snippet 2020 to the opened page's 2026, and that correction is recorded in the ledger.
3. **Annotation A, independence.** This second seat is simulated and shares an evidence pool with the primary. The solution has not received an independent human check. Its status must remain `specified`, and it must not be presented as corroborated by this audit.
4. **Annotation B, round trip.** The one-paragraph version in `07` is lossy in five named ways (section 4). It is suitable only as an invitation to check the full packet, never as a substitute for it.
5. **Annotation C, submission.** This is LLM-assisted work. The MEPS homepage links an AI policy for authors and ASLO and Copernicus have comparable policies, but those individual pages were not opened this session, so the exact rule must be verified before acting. The packet is to be used as a private checking instrument; a human researcher owns and writes anything submitted.

**Final:** the solution is internally consistent with the figures, honest about its simulation status, and correctly stopped at a `specified` shape with two open instrument gaps. It is not a ground reading and cannot settle EAR-0028. *Unreachable is a verdict, not a silence*: the missing instrument is characterized, the refuters are written, and the stop is recorded.
