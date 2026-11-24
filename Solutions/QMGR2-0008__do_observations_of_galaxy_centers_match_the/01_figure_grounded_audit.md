# Figure-grounded audit: do observed galaxy centers match simulated dense dark-matter profiles?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and what each figure governs. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (fetch 2026-11-23): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Figure lines are quoted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` only. World sources were opened on 2026-11-23 and are listed in `10_source_ledger.csv`.

---

## 0. Proposal header (seat reasoning, five lines)

```
DECIDES:    The residual is a union compound, not one yes/no question. Verdicts stay per
            galaxy slot and per domain; they are never averaged into a single match/mismatch
            score (Fig 1 :19, Fig 9 :54). The dark-matter-only simulation closure cannot
            manufacture a core; the missing atom enters by import from the baryonic frame
            (Fig 6 :21-23). Whether the residual is a failure of the model or of the
            inference channel is decided by the ground, not by agreement (Fig 2 :29-30).
HOURS:      Setup and reading 2-3. Derivation and 12 files 6-9. Source verification 2.
            Independent re-census 1. Total roughly 11-15 agent-hours for this one question.
PRIOR CASE: QMGR-0037, the GR/QM composition, imported exemplar. It is the calibration
            case, including its retractions under the canonical usage check.
ANALOGUE:   Metamerism from "The Hard Problem is About Source": a colorimeter reads green
            and cannot comment on the source. A rotation curve reads a potential and cannot
            comment on the dark-matter source without an instrument that discriminates.
LIMIT:      A simulated derivation cannot certify its own direction or settle its own claim.
            It stops where the instruments stop and records the lineage (Fig 13 :134).
```

---

## 1. The residual, stated in effect terms

Symbols table: *"The gap between prediction and observation."* (`R`, the residual). Fig 1 :19:

> **"The residual is indexed by object slot, not aggregated."**

Here `Γ(b,a)` is the collisionless cold-dark-matter N-body prediction. Its inner halo is dense and cuspy: the spherically averaged profile falls roughly as an inverse power of radius toward the center, with no plateau (NFW 1997, opened 2026-11-23). `o′` is what instruments return for a particular galaxy center: a rotation curve, a stellar kinematic profile, or a lensing constraint, from which an enclosed mass and an inner density slope are **inferred**. Dark matter is not directly visible; the profile is a reading of a potential.

So `R_s = |Γ_s − o′_s|` per galaxy slot `s`. In effect:

- In many low-mass, dark-matter-dominated dwarfs and low-surface-brightness disks, the inferred central density is approximately constant (a core), and the inner enclosed mass is lower than the collisionless cusp predicts (de Blok 2009/2010; Oman et al. 2015).
- In some massive dwarfs the inferred inner profile is cuspy and consistent with NFW (Cooke et al. 2022). The reference overview also lists one dwarf-sized ultra-diffuse galaxy case with a cuspy inferred profile; that paper was not opened in this session and is not used as a source.
- The prediction and the observation do not disagree uniformly. Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** A single "yes, they match" or "no, they do not" throws away the only signal that says where to look.

The residual is therefore a **per-slot inner-profile shape mismatch, with a hidden third condition (baryon content and star-formation history)**. Its effect statement is: *something in the relevant class of galaxy centers delivers less central dark-matter mass than the collisionless cusp prediction, while other centers deliver what the prediction says.*

Writing down the sought-for shape as an ordinary term (Formula step "Direction"): an answer would be a profile whose inner slope is shallower than the cusp in the low-mass slots, with the direction and magnitude of the change stated, and with a mechanism that transfers energy to collisionless particles or changes the dark matter itself. Binding that shape now lets it accrue a residual like anything else.

---

## 2. Domain census (before choosing any figure line)

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor. A domain with no nameable anchor is not a domain yet.

**R (arity / symmetry / scale).** Arity two at first glance (prediction versus observation), but three on inspection: dark-matter microphysics, baryonic response, and the inference channel. Symmetry: the comparison is a threshold relation between two quantities (predicted inner slope versus inferred inner slope), typed like `⋛` in the Operators table, *"a threshold relation between two quantities"*, not a symmetric join. Scale: 10 pc to a few kpc in galaxy centers; observational inference is beam- and non-circular-motion-limited; feedback core formation acts on 10-100 pc scales that large simulations often do not resolve (Wikipedia reference page, opened 2026-11-23).

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| D1 dark-matter-only simulation frame | collisionless particles, halos, N-body code | ρ(r), V_c(r), concentration, inner slope | numerical convergence tests; **no ground of its own** (it is a prediction) | yes, as a prediction, not as a verdict |
| D2 observation and inference frame | dwarf, LSB and spiral galaxies; HI/CO gas; stars; telescopes and interferometers | measured rotation speed V(r), inferred enclosed mass and slope | the instrument: a reading that does not move because a theorist prefers a cusp (Fig 2 :29-30) | yes |
| D3 baryonic physics frame | stars, supernovae, gas outflows, AGN | feedback energy, potential fluctuations, gas inflow/outflow | hydrodynamical simulations plus observed burst histories | yes |
| D4 verification and outreach frame | expert readers, reviewers, data releases | agreement and residual | the ground, never agreement | yes |

**Partition or union.** Union, not partition. Fig 9 :54: *"When the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* The inner-profile residual is a compound of dark-matter physics, baryonic response and measurement inference. A single lever that fixes only one condition leaves the intersections standing. The three regimes in D2 (cored low-mass dwarfs, cuspy massive dwarfs, cuspy UDGs) are different slots, not gradations of one slot.

**Order by dependency (Fig 3).** Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The order is: (1) perceive and describe the residual per slot; (2) check the inference link, does the rotation curve give the true circular velocity; (3) state the objective, what counts as a match (inner slope, enclosed mass at a fixed V_max); (4) choose a mechanism frame. The inference link is the middle link with the fewest instruments (Fig 3 :27, *"A link with no instrument is not a link that works. It is a link nobody has looked at."*). Sands et al. (2024, via the FIRE page, opened 2026-11-23) reports reconstruction errors of 50 percent or more from non-circular motions and non-thermal stresses, and that these failures are *"not always visibly obvious in HI observations."* By Fig 3 :19, *"Optimising a link that already works cannot rescue one that does not,"* refining halo profiles above a broken inference link cannot rescue the reading.

---

## 3. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; ground is the only metric | no ground reading here; aggregate match scores disallowed |
| 2 The Ground | anchor must not update; independence, not negotiation | observations anchor the question; ΛCDM-based agreement is one pool |
| 3 Dependency Chain | a reading below the break is a reading of nothing | inference link must be checked before mechanism is chosen |
| 4 The Membrane | *"Only methods cross up. Only head starts come down."* | send the residual and refuter, not a recording of this derivation |
| 5 Mint Pipeline | five kinds of residual, including refuted | the collisionless term may need a refusal, not an added explanation |
| 6 Closure / Reachability | import is the only operator that moves the wall; inward and outward are opposed | baryonic feedback is an import; rotation-curve repair is inward; never read one against the other |
| 7 Room Chain | *"agreement compounds, evidence does not"* | a larger chorus of agreeing simulators adds no anchor |
| 8 Union Surplus | residual first, frame second; provenance separates convergence from import | describe the mismatch before selecting a mechanism |
| 9 Leave / Arrive | union vs partition; describe before looking; filters are not witnesses | the question is a union compound; tier or prestige cannot decide it |
| 10 Ground Maintainer | bring a characterised residual, never the source; verifier non-access | lead with the mismatch and its refuter, not with the framework |
| 11 The Habitat | enumerate the habitat; contact cascades | baryons are already in contact with the residual; first-order enumeration misses the cascade |
| 12 The Bond | arrangement carries information; priced bonds; isomer and functional group | cusp and core share atoms under a different arrangement; do not conflate |
| 13 Minimum Viable Set | *"Unreachable is a verdict here, not a silence"* | the residual may remain open at the current instrument limit |
| Operators table | `⋛` is a threshold relation between two quantities | the predicted-versus-inferred slope comparison is typed, not a field merge |
| Symbols table | `R` is the aim and is always a slice | what cannot be resolved yet is residual and cannot be read |

Strained readings are named below, not smoothed over.

---

## 4. Findings

### F1 — The residual is per slot, so the question has no single yes/no (governing)

Fig 1 :19 and :22:

> **"The residual is indexed by object slot, not aggregated."**
> **"Aggregating across slots is how a live signal disappears into an average."**

Observed inner profiles are not uniform. de Blok (arXiv:0910.3538): *"Observations seem to indicate an approximately constant dark matter density in the inner parts of galaxies, while cosmological computer simulations indicate a steep power-law-like behaviour."* Oman et al. (arXiv:1504.01437): *"Some dwarfs have rotation curves that agree well with simulations, others do not."* Cooke et al. (arXiv:2203.00694) finds *"cuspier profiles than lower mass dwarfs"* in six massive dwarfs. Wikipedia: *"some agree with the steeper curves of simulations, while many others match the core slopes seen in earlier observations."*

**Verdict:** the honest answer to "do observations match the dense profiles" is a per-slot distribution: match in some massive systems, mismatch in many low-mass systems. Any single verdict is Fig 1's aggregation error. Triangulated across four world sources with different data (H I rotation curves, CO/ALMA, compilation) and Fig 1. **Refuter:** a single well-measured population in which every slot at fixed V_max has the same inner slope equal to the cusp would collapse the per-slot verdict to a single yes.

### F2 — The simulation closure cannot manufacture a core (decisive for D1)

Fig 6 :21 and :23:

> **"MINT composes inside the closure and can never add an atom."**
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

NFW (arXiv:astro-ph/9611107): *"We find that all such profiles have the same shape, independent of halo mass, of initial density fluctuation spectrum, and of the values of the cosmological parameters."* The dark-matter-only closure contains collisionless particles and gravity. Composing inside it, at any depth, returns a cusp-like family. Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**

de Blok, quoted on the Wikipedia page: *"The presence of a cusp in the centers of CDM halos is one of the earliest and strongest results derived from N-body cosmological simulations."* So the prediction itself is not in doubt inside its frame.

**Verdict:** "the simulations predict dense cusps" is confirmed as a frame prediction, not as a ground fact. No amount of extra N-body search changes it. This is `general` on the closure law, `specified` on the class of halos. **Refuter:** a dark-matter-only simulation that produces a stable constant-density core without baryons or changed microphysics, with the result surviving convergence tests, breaks F2.

### F3 — The missing atom enters by import from a closure that differs (the resolving shape)

Fig 6 :22 and Fig 8 :45-46:

> **"NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."**
> **"Two frames together reach what neither reaches alone."**

Pontzen and Governato (arXiv:1106.0499): *"The model demonstrates how fluctuations in the central potential irreversibly transfer energy into collisionless particles, thus generating a dark matter core."* And: *"both outflows and galactic fountains can give rise to cusp-flattening, even when only a few per cent of the baryons form stars."* Wikipedia: *"feedback-driven gas outflows produce a time-varying gravitational potential that transfers energy to the orbits of the collisionless dark matter particles."*

The import has a source gate (provenance: Pontzen and Governato 2011/2012, tested against new simulations) and a shadow test (it explains the observed inner mass deficit). Fig 8 :50: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."** So the mechanism is a candidate import with recorded provenance, not a derivation from the six-term set and not a fact declared by this derivation.

**Verdict:** the shape of a resolving term is fixed in effect terms: something that lowers the central density by transferring energy to collisionless particles or by changing the dark matter itself. Which of these is correct is not given by the figures. `specified`, ungrounded. **Refuter:** a closed, provenanced demonstration that repeated potential fluctuations cannot produce the observed deficit at fixed V_max would fire the source gate and refuse this import.

### F4 — The inference channel can decay, and that is a separate domain verdict

Fig 10 :24: **"the ground does not decay, the channel does"**. Symbols table: *"The gap between prediction and observation."* Wikipedia: *"Dark matter density profiles are not directly observable and are often inferred from the rotation curves of galaxies."*

Sands et al., quoted on the FIRE page (2024): *"the measured rotation curve may deviate from true circular velocity by at most 10% within the radius of the disk. However, non-equilibrium behavior, non-circular motions, and non-thermal and non-kinetic stresses may cause much larger discrepancies of 50% or more."* And: *"they may give rise to the appearance of 'artificial' rotation curve diversity that does not reflect the true variation in underlying dark matter profiles."*

Oman et al. (arXiv:1504.01437) state the third option explicitly: *"(iii) the mass profiles of 'inner mass deficit' galaxies inferred from kinematic data are incorrect."*

**Verdict:** D2 is not a clean anchor reading. The instrument is the anchor, but the quantity inferred from it (inner dark-matter slope) passes through a channel that has a documented failure mode. This does not erase the residual; it unbundles it. Fig 9 :54 says to unbundle before searching again. **Refuter:** an independent mass probe (stellar kinematics, lensing, or proper motions) that agrees with the H I/CO inferred profiles in the same slots would close this channel strain and move D2 toward `grounded`.

### F5 — Agreement inside one evidence pool cannot decide the question

Fig 2 :31 and :35:

> **"Independence, between two frames, is how little they draw on the same evidence."**
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."** Most simulation groups and most observational groups in this literature use ΛCDM priors, common codes or common compilations. de Blok's review, NFW, Oman and Cooke all sit in overlapping pools. Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

**Verdict:** the verdict is not a head count of simulators versus observers. This simulated second seat shares the primary's pool and is explicitly not a witness (see `11_audit.md`). **Refuter:** a genuine low-overlap frame (for example, an instrument-based mass measurement with no ΛCDM prior, or a modified-gravity prediction derived independently) that returns the same per-slot shape would be a second witness; its absence is recorded as a gap, not silently filled.

### F6 — The residual may owe a refusal, not another explanation (Formula step 2, fifth kind)

Fig 5 :50 and :53:

> **"AMENDMENT · the gap has a fifth kind, and the pipeline has no branch for it."**
> **"refuted: a term we hold is wrong; a term is owed that says so"**

Wikipedia records McGaugh, Barker and de Blok's three interpretations, one of which is: *"The picture of halo formation suggested by CDM simulations is wrong."* That is a refusal of a held term, not a new composition inside it. Fig 5 :56: *"Same mint operator, same three guards, same bargain. Only the direction of the residual differs. Requires an operator for negation, which the seven bonds do not contain."* The Operators table: *"a refutation is a negation, which is why a vocabulary without negation can only accumulate"*.

**Verdict:** if the inner mass deficit survives the import test and the channel test, the correct output is a refusal of "collisionless CDM halo profiles match observed centers in low-mass galaxies," written as a term that removes the standing of that binding. Nothing is deleted from the record. This is a live possibility, not the chosen verdict, because both tests are still open. **Refuter:** a successful import plus channel check that closes every slot without refusing any held term would fire against this finding.

### F7 — Describe the residual before choosing a mechanism (apophenia guard)

Fig 9 :27-28:

> **"describe it before you go looking, or any frame you pick will seem to fit"**

The world literature makes this concrete. WARM, fuzzy, self-interacting and meta-cold dark matter, baryonic feedback, and alternative gravity are all on offer (Wikipedia, *"theorists have considered warm, fuzzy, self-interacting, and meta-cold dark matter, among other possibilities"*). If the residual is stated only as "the slope is wrong," any of these will seem to fit. The effect description must be sharper: *less enclosed mass inside the inner few hundred parsecs at fixed maximum rotation speed, in low-mass systems, with the channel-corrected slope stated separately.*

Fig 9 :32: **"you get a kind of thing, never the answer itself."** Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** A tier label, a prestige measure or a publication count is a filter, never a witness. **Refuter:** a frame selected before the effect description that nevertheless predicts the per-slot shape and survives a ground check would show the guard was unnecessary here; record that rather than assume it.

### F8 — The habitat is enumerated, not composed, and the cascade reaches baryons

Fig 11 :43 and :48:

> **"The habitat is enumerated, never composed."**
> **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."**

First-order enumeration of a galaxy center finds stars and gas. Fig 11 :52-54 warns that *"contact cascades"* and that the residual can be *"three steps out"*. Here the relevant chain is: star formation → bursty outflow → time-varying potential → energy transfer to collisionless particles → shallower inner profile → rotation-curve inference. Scoping the habitat to "dark matter particles plus gravity" is how the core gets missed. Fig 11 :32: **"→ introduce, never subtract"**: the baryonic atom is introduced into the frame; the collisionless term stays in the record. **Refuter:** a demonstration that the residual is in contact only with dark matter microphysics and not with baryon history in any slot would break this cascade and force a re-census.

### F9 — Cusp and core are arrangements over shared atoms, not different ingredients

Fig 12 :5 and :117:

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

A cusp and a core are not two different dark matters. They are two arrangements of the same mass over radius, with different observable consequences. Fig 12 :43: **"A bond costs what it could have been, and nothing more."** The choice between "steep inner slope" and "flat inner slope" is the information the catalog of ingredients does not record. This is a structural reading, `general`, and it does not by itself tell us which arrangement a given galaxy has. **Refuter:** if cusp and core were shown to require different particle species rather than different arrangements, the isomer reading fails and a new atom is owed.

### F10 — No last room: the answer stops at the instrument limit

Fig 7 :6 names *"the limit: no last room"*, and :13: *"agreement compounds, evidence does not"*. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** Fig 13 :134: **"Unreachable is a verdict here, not a silence"**.

This derivation cannot close the question. It can report the shape of a mismatch, the domains that must be checked separately, and the instruments that would move it. It cannot name the correct dark-matter model, and it is not a theory of everything of galaxy formation. **Refuter:** a ground measurement that returns the same per-slot shape in every regime and closes all three domain verdicts would end the search for this question. Until then the honest status is `candidate`.

### F11 — The comparison is typed, not a merge

Operators table :49-51: `⋛` is *"a threshold relation between two quantities"*, with the test *"is it about which is larger, rather than both being present? Yes."* The residual comparison is between a predicted inner slope (or enclosed mass) and an inferred one. It is not a claim that simulation and observation are the same referent under identity (`≡`). Fig 12 :95-96: *"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart."* Treating "the simulation matches the observation" as an identity claim hides the bond, and therefore hides exactly what would have to change. **Refuter:** a demonstration that the predicted and inferred quantities are the same measurement under a proven transform would license `≡` and dissolve the residual at the level of notation.

---

## 5. Strain test and re-census

- **Inward versus outward (Fig 6).** Sands et al. (inward, repair the instrument or the inference) and Pontzen and Governato (outward, import baryonic feedback) both bear on the same residual. Fig 6 :31: **"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."** No strain after re-census: they are the two opposed instruments, and both are run.
- **Fig 13 versus the bond reading (F9).** An early reading tried to force the six-term set to decide cusp versus core directly. Re-census: Fig 13 governs the primitives and their cross-kind composition; Fig 12 governs arrangements of settled terms. Different objects, different figures, no contradiction. Matches the canonical rule that a reading making figures contradict each other has misidentified its domain.
- **Fig 5 refuted-kind versus mint (F6).** Not a strain. The fifth kind is an amendment in the figure and is explicitly *"a gap in this figure"* (Fig 5 :73); it governs a residual whose content is that a held term is false, which is what the third McGaugh interpretation asserts.
- **Fig 8 corroboration versus import.** Convergent derivation and adopted import look identical in the contents. The record of provenance, not the content, decides which this is. Named as a provenance obligation, not hidden.
- **After re-census: one live strain, the channel/inference question of F4, named and not smoothed.**

---

## 6. Pre-registered refuter (written before the conclusion)

Required before any outreach: *"a falsifier written before the run is a design instrument, not only an honesty device."* Seat Map :287. These are written here, before §7 and before `07_the_tether_answer.md`:

1. **Slot refuter.** A measurement of the inner mass profile, independent of H I/CO rotation-curve reconstruction, showing that low-mass dwarfs at fixed V_max have inner slopes consistent with the NFW cusp would refute the "cored low-mass" reading for those slots.
2. **Import refuter.** A hydrodynamical simulation that reproduces the observed inner mass deficits at fixed V_max using observed star-formation histories, with convergence and resolution tests reported, would close F3 and refute the claim that a new mechanism is owed.
3. **Channel refuter.** Agreement between rotation-curve-inferred profiles and independent mass probes in the same slots would refute F4's channel strain.
4. **Union refuter.** A demonstration that the residual is a single hard question (a partition) rather than a union of dark-matter physics, baryonic response and inference would refute the census and require the whole derivation to be redone.
5. **Aggregate refuter.** Any analysis that averages per-slot residuals into a single match score and then reports a verdict is an automatic failure of F1, regardless of the sign of the score.

If any of 1 to 4 fires, the corresponding claim is withdrawn. Nothing here may be labelled `grounded` until one of these tests has actually been run against the ground.

---

## 7. Recommendation

1. Report per-slot verdicts, never a single match/mismatch score (F1). Say plainly that some centers match and many low-mass centers do not.
2. Run the inference check before choosing a mechanism (F4, dependency order of Fig 3). A 50 percent reconstruction error is not a dark-matter result.
3. Treat baryonic feedback as an import with source gate and shadow test, with provenance recorded (F3, F7). Do not present it as derived from the framework.
4. Keep the refusal option open. If the deficit survives both tests, the correct output may be a negation of the held collisionless binding, not another explanatory story (F6).
5. Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** Send the generator (residual, refuter, domain census), not a recording of this derivation.

---

## 8. Canonical usage check

Two local sources were read after the first seven sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw,"* and the canonical limit: *"what a missing thing would have to look like (a shape, not a name)"*, then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* And: *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws, so design questions are answered by derivation, not escalation; the seat reads the ground and does not ask the anchor to decide what the figures already settle.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "the question is whether CDM is right" | **Retracted as framed.** The question decided here is narrower: whether per-slot inner profiles match a collisionless prediction, and which domain owns the mismatch. CDM correctness is not settled by a residual. |
| "observations show cores, so the cusp prediction is wrong" | **Narrowed, not simply confirmed.** Many low-mass systems show cores or inner mass deficits; massive dwarfs and some UDGs show cusps. Per-slot verdicts differ and may not be averaged (F1). |
| "baryonic feedback solves the problem" | **Narrowed.** It is a candidate import with provenance and a shadow test (F3). Oman et al. report deficits *"well in excess of that reported in recent simulations"*, so it does not close every slot. |
| "rotation curves measure the dark matter profile" | **Narrowed.** Profiles are inferred; the channel has a documented 50 percent+ failure mode (F4). |
| "union compound" | **Canonically confirmed.** Fig 9 :54 and the Library of Babel essay's *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* |
| "a shape, not a name" | **Canonically confirmed and narrowed.** It governs a missing primitive or mechanism. Naming a candidate import (feedback) is allowed only with provenance, not as a framework derivation. |
| apparent Fig 13 versus Fig 12 strain | **Not strained.** Re-census: primitives versus arrangements. Matches the README's re-census rule. |
| "this derivation decides the question" | **Refused.** Simulated derivation, `specified`, candidate. See §0 limit and `05_what_shape_means.md` §7. |

### Updated verdict

The shape survives: a per-slot inner-profile mismatch in the low-mass regime, a union compound across dark-matter physics, baryonic response and inference, with a resolving term whose effect is to lower the central density. The specific mechanism is not derived; it is an import, provenanced as such. The inference channel is a live strain. Nothing is `grounded`. After re-census, one strain remains live (F4) and none is hidden. Unreachable is a verdict, not a silence.
