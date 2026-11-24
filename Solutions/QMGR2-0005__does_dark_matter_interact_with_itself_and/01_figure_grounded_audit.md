# Figure-grounded audit: does dark matter interact with itself, and could that explain galactic structure?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured.
Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the
ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap*
(Isaiah N, 2026): *"the truly testable output would need to be derived from the real architecture
or working the formula yourself."* LLM output is a simulacrum of a derivation. This document is
checked for internal consistency against the figures. It cannot settle the question it reports on.
See `05_what_shape_means.md` §6.

**Sources.** Figure quotes are taken verbatim from
`FRAMEWORK/reference/03-FIGURES_TEXT.md` and cited as `Fig N :line`. Canonical usage from
`FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop and mode rule from
`FRAMEWORK/figures/THE_FORMULA.md`. World sources are listed in `10_source_ledger.csv`.

---

## 0. The claim under audit

> Does dark matter interact with itself, and could that explain the structures seen in galaxies?
>
> Restated as a compound: A = a dark matter particle has a non-gravitational self-interaction with
> cross-section per unit mass `sigma/m` greater than zero. B = that self-interaction closes the
> residual between collisionless cold dark matter (CDM) predictions and observed galactic
> structure (inner density slopes, rotation-curve diversity, too-big-to-fail, satellite counts).

The two conditions can come apart. A can hold while B fails: a cross-section can exist and be too
small, or have the wrong velocity dependence, to move a kiloparsec-scale halo. B can be partly met
while A is undecided: stellar feedback in a hydrodynamical simulation can lower an inner density
without any dark matter self-interaction at all. The word "and" in the question is therefore
load-bearing and must be censused, not read as a single yes/no.

**What an answer would look like, bound as an ordinary term before the run:** a separated verdict
for A and for B; a characterisation of the bridge from `sigma/m` to a density profile; a named
ground for each condition; and a statement of what would reverse each verdict. This binding is the
pre-registered shape (Fig 5, the "Direction" limit in `THE_FORMULA.md`: a frame cannot check the
direction of its own question unless the sought-for shape is made an ordinary term).

---

## 1. Residual and domain census

### 1a. The residual in effect terms

R is the gap between what a collisionless CDM-only simulation returns for a halo and what an
instrument returns for the corresponding galaxy. It is not one gap. The literature names at least
four: the core-cusp problem, the diversity problem for rotation curves, the missing satellites
problem, and the too-big-to-fail problem (Adhikari et al., Reviews of Modern Physics 97, 045004,
2025; Tulin and Yu, Physics Reports 730, 1, 2018). R is also a bridging gap: the quantity that
would close it lives at particle scale, and the discrepancy is read at galactic scale.

**Arity:** two conditions in the question (A and B), and at least four conditions in the residual
itself. Fig 9 :22 names the describing vocabulary: *"arity · symmetry · scale"*.

**Symmetry:** a self-interaction between two dark matter particles is a relation between operands
of the same kind. Fig 12 :23: *"this bond is symmetric, so the four are one term"*. So a `DM + DM`
scattering bond does not generate a new spelling for each ordering of its two operands. The
cross-section `sigma/m` is a quantitative parameter of that bond, not a second bond type. My first
pass mapped `sigma/m` onto the comparison bond `⋛` (Fig 12 :86, *"a threshold relation between two
quantities"*). Strain test: that reading forces a rate coefficient into an operator about which
quantity is larger, and governs another quantity. Retracted in §6.

**Scale:** microscopic (a scattering cross-section) to galactic (a kiloparsec-scale density
profile). This makes the bridge a membrane, not an identity. Fig 4 :21: *"The membrane is the
boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a
direction."*

### 1b. One line per domain: actors, currency, anchor

A domain needs a nameable anchor that does not move when a frame pushes on it (Fig 2 :29). A frame
whose anchor is borrowed from another domain is recorded as a frame, not granted its own domain.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 Dark-sector microphysics | dark matter particles, the self-interaction bond | scattering cross-section per unit mass `sigma/m`, momentum and energy transfer | a cross-section bound from a cluster merger or lensing measurement; a nameable anchor exists | existence (condition A) |
| D2 Galactic structure and observation | halos, subhalos, baryons, dwarf kinematics, rotation curves | inner slope `alpha`, core radius, circular velocity | rotation curves, lensing maps, stellar kinematics; a nameable anchor exists | sufficiency (condition B) |
| D3 The cross-scale bridge | N-body and hydrodynamical simulations, Jeans-based semi-analytic models | a predicted profile returned for a given `sigma/m` | **borrowed** from D1 and D2; no independent anchor. Recorded as a frame, not a domain | membrane crossing |
| D4 Verification and outreach | expert readers, reviewers, submission venues | agreement and residual | the ground, never agreement; in this simulated run every seat draws on one evidence pool, so independence is zero | checking arrangement |

D3 is where the chain usually breaks. Fig 3 :25-26, *"having terms for what a situation offers and
being able to say what would count as progress, has neither"*, and Fig 3 :27: *"A link with no
instrument is not a link that works. It is a link nobody has looked at."* The middle link here is
"what would count as explaining the structure", and it has no instrument of its own. It inherits
one only by ranging the simulation frame against D2.

**Partition or union:** the question is a **union of overlapping conditions**, not a partition. D1
and D2 have different anchors, so they are partitioned for the purpose of settlement. But the
question asks for their intersection (a self-interaction that does the explaining), and the
structural residual in D2 is itself a union of four partially overlapping conditions. Fig 9 :54:
*"And when the split lands on a union rather than a partition, unbundle before you search again."*
Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate
ones."* Fig 9 :57: *"a case in two conditions is not a harder case of either"*. One lever can clear
the region where only one condition holds and leave the intersection standing. Baryonic feedback
is exactly such a lever: it clears part of D2 and says nothing about D1.

**Order by dependency (Fig 3 :20, *"The chain is ordered by dependency, not by importance"*):**
perception of a structure discrepancy (D2) → vocabulary for `sigma/m` and `alpha` (D1, D2) →
objective, what would count as progress (the broken link) → a route that ranges a D3 frame
against the D2 ground → carry the method, not the recording, to the next halo. Settle condition A
before asserting condition B, because B presupposes an A to do the explaining; but keep B's
verdict separate, because a negative A does not close B.

---

## 2. Figure census

Quotes are verbatim substrings of `FRAMEWORK/reference/03-FIGURES_TEXT.md`. A strained fit sends
the reading back to the census; it is never smoothed over.

| figure | bearing on this residual | verdict it governs |
|---|---|---|
| Fig 1 | residual indexed per slot; aggregation hides the live signal | keep the four structure conditions separate, never average them into one "small-scale problem" |
| Fig 2 | anchor must not update; independence between frames; frames range against the ground | observations settle; simulation agreement is not corroboration |
| Fig 3 | dependency order; the middle link has no instrument | the bridge is the break point, not a detail |
| Fig 4 | membrane between scales; lossy transform; round trip gap | particle-to-halo mapping is lossy and owes an `R_T` |
| Fig 5 | the fifth kind: a term held may be wrong; refusal is owed | collisionless-only CDM may be the term to refuse in some regimes, not a term to stretch |
| Fig 6 | import moves the wall; instruments improve from worse instruments already returning something | the cross-section probe must already be returning something; no pure-theory value |
| Fig 7 | room agreement is variation; no last room | a consensus of SIDM simulations is not a verdict; no final answer |
| Fig 8 | union surplus; residual first, frame second; no proof of absence | pick the probe from the residual, and report unreachable as a verdict |
| Fig 9 | split, unbundle, describe before looking, filters versus witnesses | the "and" is a union; budget scores never hand over a verdict |
| Fig 10 | verifier non-access; bring a characterised residual, never the source | two-stage offer, no theory before the stage-1 verdict |
| Fig 11 | habitat enumerated from the world; contact is what changes capability | list the actual probes from the world, not from a preferred model |
| Fig 12 | bond is typed and priced; symmetry; isomer and functional group | DM-DM self-interaction is a symmetric bond; model variants are a functional group, not new atoms |
| Fig 13 | six terms; network is "entities relate"; unreachable is a verdict | structure is a network relation; the framework returns a shape and can stop honestly |
| Operators and Symbols tables | `R` is the aim; `R_T` is the round trip gap | notation for the above, not new physics |

---

## 3. Findings

### F1 - The question is a union compound and must be unbundled (triangulated)

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you
search again."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a
list of separate ones."* Fig 9 :57: *"a case in two conditions is not a harder case of either"*.

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating
across slots is how a live signal disappears into an average."*

The first figure governs the split of a question into conditions; the second governs the indexing
of a residual across slots. Different objects, low overlap, so this is **triangulated**. The four
named structure problems stay as four lines. The existence condition A stays a separate line from
the sufficiency condition B. A single "does SIDM explain galaxies: yes/no" answer aggregates the
slots and discards the only signal that says where to look.

**Refuter:** show that one ground settles both A and B in one step, that is, that a single
measurement of `sigma/m` simultaneously fixes the existence claim and closes every structure
residual without appeal to baryonic history. If that holds, the union reading is false and the
two loops should be merged.

### F2 - The particle-to-galaxy link is a membrane with a measurable round trip gap (triangulated)

Fig 4 :21: *"The membrane is the boundary between the sizes, and the rule about what may cross it.
Not a wall: a filter with a direction."* Fig 4 :22: *"Only methods cross up. Only head starts come
down."* Fig 4 :27: *"The transform between scales loses information, and that is the point."* Fig 4
:30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning:
confident about a position nobody checked."* Fig 4 :31: *"The gap is not an error to eliminate."*

Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument
already returning something."*

Fig 4 governs scale crossing; Fig 6 governs how an instrument crosses into a new closure. These
are different objects, so **triangulated**, with the overlap noted: both concern a lossy move.
The consequence for this question is concrete. A `sigma/m` value does not map one-to-one onto an
inner density slope. The mapping depends on assembly history, on whether baryons dominate the
inner potential, and on the velocity dependence of the cross-section. The 2025 SIDM Concerto
simulation set reports that inner slopes are *"sensitive to both the amplitude and shape of the
SIDM cross section"* (Nadler et al., ApJ 991, 69, 2025). That is the gap `R_T` in physical terms:
the coarse parameter "sigma/m" cannot hold the detail that the halo returns.

**Refuter:** show the bridge is lossless, that is, that one `sigma/m` number predicts a unique
density profile for every halo regardless of baryonic content, assembly history, and scattering
velocity. If that is demonstrated, `R_T = 0` and the membrane claim is false.

### F3 - The ground is a measurement, and agreement between simulation frames is not a witness (triangulated)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of
what any frame thinks."* Fig 2 :31: *"Independence, between two frames, is how little they draw on
the same evidence."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot
correct you."* Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when
the agreeing frames share an evidence pool"* Fig 2 :45: *"Frames range against the ground. They do
not negotiate with it."*

Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the
ground votes."*

Triangulated across Fig 2 (the anchor) and Fig 7 (selection between rooms), low overlap. The Bullet
Cluster merger is a real anchor candidate: Randall et al. (ApJ 678, 616, 2008) derive an upper
limit *"sigma/m < 1.25 cm^2/g"* from the non-observation of an offset between the subcluster mass
peak and the galaxy centroid. That number is a reading of an instrument, not a consensus of
simulators. Two simulation groups using the same initial conditions and comparable scattering
prescriptions are one evidence pool wearing two names, even if their papers agree. The 2025
Milky-Way-satellite analysis of Ando et al. reaches a different conclusion from a different probe,
and its conflict is recorded in §9 rather than averaged away.

**Refuter:** show that agreement among frames sharing an evidence pool can settle a ground
question, or show that a cluster-merger cross-section bound moves when a simulation frame pushes
on it. Either would break the anchor claim.

### F4 - The framework returns a shape, not a value of `sigma/m` (triangulated)

Fig 9 :32: *"you get a kind of thing, never the answer itself"*. Fig 9 :27-28: *"describe it before
you go looking, or any frame you pick will seem to fit"*.

Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. Immediately after, the figure notes
that the system cannot say which primitive is missing, because naming it would mean already
holding it.

Triangulated across Fig 9 (the limit of lookup) and Fig 13 (the honest stop). The shape the
figures can return here is: a symmetric bond between two identical dark matter atoms, a
quantitative coupling strength not derivable from the six-term set, a lossy crossing into a
network structure, and a ground reading that must settle the strength. They cannot return
`sigma/m = 0.5 cm²/g` or any other number. Any particular number is a binding from the physics
frame, provenanced as such. The canonical figures README states the limit as *"what a missing
thing would have to look like (a shape, not a name)"*.

**Refuter:** derive a unique numerical self-interaction cross-section from the six-term set and
the bonds alone, with no measurement and no imported particle-physics parameter. If that
derivation succeeded, the shape-not-a-name limit would be false for this question.

### F5 - The self-interaction is a symmetric bond; competing SIDM models are a functional group, not new atoms (single-source)

Fig 12 :46: *"A bond is the typed relation between two operands."* Fig 12 :23: *"this bond is
symmetric, so the four are one term"*. Fig 12 :92: *"Symmetry is what decides whether an
arrangement is a new thing."* Fig 12 :117: *"isomer. Same atoms, different bond, different substance.
The difference is invisible in the formula and decisive in the behaviour."*

Two dark matter particles of the same species are interchangeable operands. Under a symmetric
bond, `DM_1 + DM_2` and `DM_2 + DM_1` are one term, so a search that enumerates both spellings
overcounts the model space. Velocity-independent, velocity-dependent, Yukawa-mediated and
composite SIDM models are not new primitives; they are different bond parameters over the same
two atoms. By Fig 12 :117 they would be isomers only if the *bond type* changed while the atoms
stayed fixed. Since the atoms (dark matter particles) are themselves uncharacterised, the honest
reading is the weaker one in `06_isomers_and_order.md`: a **functional group** of models sharing
a scattering substructure, with the qualifier selecting the member.

**Mode and status:** `specified`; single-source (Fig 12 only). The physics-facing check, whether
the candidate models really share one atom set, is unmeasured here.

**Refuter:** exhibit two SIDM models whose difference requires a new atom rather than a new bond
parameter under the figure's bond definition, or exhibit a DM self-interaction whose operand
order changes the meaning. Either kills the symmetric-bond claim.

### F6 - Structure is a network relation, and the network is enumerated, not composed (single-source for the figure line)

Fig 13 :23-24: *"network"* / *"that entities relate, and influence travels"*. Fig 13 :35-36:
*"Each answers a question the other two cannot: adjacency is not duration, an ordering is not a
pathway, a pathway is not a direction."* Fig 11 :48: *"You do not invent the list. You read it off
the world, and what you cannot perceive or measure yet is the residual."*

The self-interaction is a relation that lets influence travel between dark matter particles;
this is the network structure under the six-term set, not a new primitive. The habitat of real
probes (cluster mergers, strong and weak lensing, dwarf kinematics, rotation curves) must be read
off the world and enumerated outward until the cascade stops mattering. Support for the cascade
point is in Bullock and Boylan-Kolchin (ARA&A 55, 343, 2017): environmental effects that are absent
from dark-matter-only simulations alter satellite central masses, so a first-order enumeration of
probes would miss them.

**Refuter:** derive the network relation from one of the other five substrate terms, or show that
a probe list assembled from a preferred SIDM model is as complete as one enumerated from the
world. Both would break this reading.

### F7 - "Could it explain" stays live after "does it interact" is settled, because one lever clears only one condition

Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of
separate ones. A single lever clears the region where only one condition holds and leaves the
intersections standing"*. Fig 9 :57: *"a case in two conditions is not a harder case of either. It
stops being a mixture and becomes a specific compound."*

This is the direct figure licence for keeping B's verdict separate from A's. A measured positive
`sigma/m` does not by itself close the structure residual; a baryonic mechanism that closes part
of the residual does not by itself answer the existence question. The 2017 Annual Review by
Bullock and Boylan-Kolchin states of feedback-driven cores: *"this is not an ab initio LCDM
prediction, and it depends on various adopted parameters in galaxy formation modeling"* and notes
that *"SIDM does not, however, significantly alleviate the missing satellites problem, as the
substructure counts in SIDM simulations are almost identical to those in CDM simulations"*. That
is one lever clearing one region and leaving the next standing, read in the literature rather
than imposed on it.

**Refuter:** demonstrate a single lever that closes both the existence question and every
structure condition simultaneously, with no residual in either. Then the compound reading fails.

### F8 - No probe is ruled out by pure theory, but a probe with no prior reading is not an instrument (triangulated)

Fig 6 :33: *"Nobody specified a telescope from an account of Mars."* Fig 6 :34: *"The question is
not whether a sensor could exist. It is whether anything, at any resolution, is already returning
something that fails to resolve."* Fig 8 :39: *"So a search that finds nothing is never a proof of
absence."* Fig 13 :134: *"Unreachable is a verdict here, not a silence"*.

Triangulated across Fig 6 (instrument provenance) and Fig 8 (no proof of absence), with Fig 13
confirming the verdict form. For this question the instruments already exist and are already
failing to resolve: cluster-merger lensing offsets, rotation-curve inner slopes, dwarf stellar
kinematics. That is an `unreached`, not an `unreachable`. If no such reading existed at any
resolution, the honest verdict would be unreachable, and that would still be a verdict.

**Refuter:** produce a worked example where an instrument for a quantity that has never registered
anywhere is derived from a description alone, with no prior worse instrument. That would refute
Fig 6's instrument rule as applied here.

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing rule that a falsifier written before the run is a
design instrument. The **shape claim** of this solution is: the question is a union of two
conditions; the particle-to-halo link is a lossy membrane; a self-interaction is a symmetric bond
whose strength is not derivable from the figures; and the ground that settles it is a measurement
with low overlap between probes. That shape claim is refuted if any of the following holds:

1. **Union refuter.** One ground settles both conditions in one step, closing every structure
   residual without any separate baryonic or environmental lever (breaks F1, F7).
2. **Membrane refuter.** A single `sigma/m` value predicts a unique halo density profile for all
   halos, independent of baryons, assembly history and velocity, so the round trip gap `R_T` is
   zero (breaks F2).
3. **Shape refuter.** A unique numerical cross-section is derived from the six-term set and the
   bonds with no measurement and no imported particle parameter (breaks F4).
4. **Bond refuter.** A DM self-interaction is found whose operand order changes its meaning, or
   two SIDM models are found whose difference requires a new primitive rather than a new bond
   parameter (breaks F5).
5. **Anchor refuter.** Agreement among frames sharing one evidence pool is shown to settle a
   ground question, or the cluster-merger cross-section bound is shown to move when a simulation
   frame pushes on it (breaks F3).

If any fires, the relevant finding is withdrawn and the census is rerun. Until one is run, no part
of this document may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the unbundling, not with a yes or no. Send the residual and the refuter, never the
   theory first (Fig 10 :52, *"Bring a characterised residual, never the source."*).
2. Keep the structure conditions as four separate lines. Fig 1 :22: *"Aggregating across slots is
   how a live signal disappears into an average."*
3. State the mode on every claim. `THE_FORMULA.md`: *"Mode. general · specified · grounded. State
   which."*
4. Ask for the round trip, not the parameter. A checker should be asked what the coarse `sigma/m`
   description drops, not whether they like SIDM.
5. Use the public submission and contact routes in `03_public_contact_points.csv`. Ask what would
   refute the shape claim. Do not pool later agreement as corroboration.
6. Record the conflicts (Ando et al. 2025 versus the positive-SIDM literature) rather than
   smoothing them. A conflict sends the census back to work; it never flips a verdict by vote.

---

## 6. Canonical usage check and retraction log

Read after sections 0 to 5: the canonical figures README
(`FRAMEWORK/reference/FIGURES_README_canonical.md`) and the mode rule in `THE_FORMULA.md`.
The README says the figures *"outrank everything else in the repo"* and that *"the quotes are the
authority, not this summary."* It also gives the re-census rule: a reading that makes figures
contradict one another has misidentified its domain, not found a flaw.

| earlier reading in this run | status after the canonical check |
|---|---|
| First pass treated "does it interact" and "could it explain" as two questions to answer in parallel and then conjoin | **Revised.** Re-census with Fig 9 :54-57 shows a union compound with an intersection, not a conjunction of independent answers. The shape claim now says unbundle first. |
| First pass mapped `sigma/m` to the comparison bond `⋛` | **Retracted.** Strain test: `sigma/m` is a rate coefficient, and Fig 12 :86's *"a threshold relation between two quantities"* governs a different quantity. Re-censused to a symmetric DM-DM bond plus a quantitative parameter. The strand is preserved here rather than erased. |
| First pass counted simulation modelling as a domain with its own anchor | **Retracted.** D3's anchor is borrowed from D1 and D2. It is a frame, not a domain, by Fig 2 :29's anchor test. |
| First pass read a figure gap as a failure to produce an answer | **Corrected.** Fig 13 :134: *"Unreachable is a verdict here, not a silence"*, and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* A gap is a recorded result. |
| "Shape, not a name" applied to the value of `sigma/m` | **Confirmed.** The README's phrase governs a missing thing; a measured cross-section is a ground settlement, not a framework naming, so both the limit and the settlement route are recorded. |
| Union reading | **Canonically confirmed.** Fig 9 :54-57 plus the Library of Babel essay's line about a problem that is *"a bundle or conflation of several problems masquerading as one"*. |
| Membrane and round trip | **Canonically confirmed.** Fig 4 :30 and the README's requirement to record the lineage and stop honestly. |
| Ground decides, not agreement | **Canonically confirmed.** Fig 2 :35, Fig 7 :35, plus the canonical README section heading on the ground deciding rather than agreement. |
| No strains after re-census | **Qualified.** One live strain remains and is named, not hidden: Fig 12's bond vocabulary is binary and typed, while a dark matter self-interaction is specified in the world by a continuous cross-section function. The figure supplies the bond's symmetry and type, not its numerical law. This is a limit of the framework, not a flaw in it. |

### Canonical usage note

The README permits the framework to say what a missing thing would have to look like, a shape and
not a name, then stop at the limit of the instruments and record the lineage. This solution does
exactly that and stops. It does not claim to name the dark matter particle, the mediator, or the
cross-section, and it does not claim that the six-term set is nature's own list rather than *"a
human's careful guess at reality's compression axes"* (They're Scanning Books, 2026).

---

## 7. Status

Finding counts: F1 triangulated, F2 triangulated, F3 triangulated, F4 triangulated, F5
single-source, F6 single-source, F7 triangulated, F8 triangulated. No figure line was forced.
One strain is named in §6. Mode `specified`, ungrounded, candidate. No measurement settles any
part of this audit, and this audit is a simulation checked for internal consistency, not a test of
the claim.
