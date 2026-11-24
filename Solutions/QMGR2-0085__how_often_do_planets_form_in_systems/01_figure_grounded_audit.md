# Figure-grounded audit: how often do planets form in systems that later become unstable?

**Mode of this document: `general` on the structural shape, `specified` on the survivorship and indexing predictions. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026) says LLM output is simulacra and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure lines quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Formula and mode rule from `FRAMEWORK/figures/THE_FORMULA.md`. World sources are listed in `10_source_ledger.csv` and were opened 2026-11-23.

---

## 0. The residual, stated in effect terms

R is not a single observation. It is a frequency over a population, ordered in time:

```
f = count( systems where planets formed AND later became dynamically unstable )
    / count( systems where planets formed )
```

Indexed per system slot s, with formation at t0 and instability at t1 > t0 (Fig 1 :10 *"one bet per object slot, every action"*, Fig 1 :11 *"residual R indexed by object slot"*).

- **Arity:** three-place, (system, formation event, later instability event), indexed by slot and ordered by time.
- **Symmetry:** "unstable" is a threshold relative to a timescale, a comparison, not a symmetric property. Fig 12 :87 gives the identifying test: "is it about which is larger, rather than both being present? Yes."
- **Scale:** three scales in play, the single system (N-body integration), the survey population (occurrence statistics), and the time channel (Gyr). The membrane between them is lossy (Fig 4).
- **What each option leads to:** asserting a bare number hides the live per-slot signal and the survivor bias (option A in the README); deriving the shape and declaring the number a gap yields a refutable, checkable claim (option B).

What an answer would look like, bound before the run: (1) a per-slot distribution of instability times rather than one mean, (2) an explicit declared threshold for "unstable", (3) a correction for the fact that detected systems survived, (4) two or more detection frames with low overlap. This binding is the ordinary term the Formula "Direction" section asks for, so the preference can accrue a residual and be refused.

---

## 1. Domain census

One line per candidate domain giving actors, currency and anchor. No nameable anchor means it is not a domain yet.

| candidate | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Formation frame | gas, dust, planetesimals, young star; disks | mass accretion, angular momentum, disc dissipation | observed protoplanetary disks, meteoritics | admitted, anchor nameable |
| D2 Dynamical-instability frame | planets, star, resonances, close encounters | orbital energy and angular momentum, Lyapunov time | N-body integration plus observed eccentricities and multiplicities | admitted, anchor nameable |
| D3 Survey and detection frame | transit, radial velocity, microlensing, astrometry, direct imaging | detections, occurrence rates, completeness | measurement (Fig 2 :29) | admitted, anchor nameable |
| D4 Survivorship and habitat frame | the detected systems, the ones that survived to be seen | selection, detection window | the observed population, what the ground kept (Fig 11 :15) | admitted, own loop |
| X1 "the frequency" as a single primitive number | none nameable | none | not in the closure of the figures | **not a domain, declared `gap`** |
| X2 "planet formation rate alone" as the whole answer | disks only | accretion | absorbed into D1 | absorbed, not separate |

**Partition or union:** this is a **union**, not a partition. C1 (formation happened) and C2 (instability later happened) are two conditions, and D3/D4 is a third condition that gates what can be observed. Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." A single lever that clears formation alone leaves the instability and survivorship conditions standing.

**Order by dependency (Fig 3):** perception (detect planets) then vocabulary (say what "unstable" means) then objective (define the rate) then planning (design the survey) then learn and carry. The middle link is the one that usually breaks and has the fewest instruments, Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Here the middle link is the definition of "unstable" and the choice of population, not the detection itself.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual indexed per slot, aggregation warning | governs how the rate must be reported |
| 2 The Ground | anchor and triangulation, shared-pool warning | governs D3 and the second seat |
| 3 Dependency Chain | the middle link with no instrument | governs the definition of "unstable" |
| 4 The Membrane | lossy scale crossing, round trip gap | governs system to population inference |
| 5 Mint Pipeline | no term is minted here; guards fail | no new primitive is owed |
| 6 Closure and Reachability | instruments improved from worse ones | governs D3 instrument lineage |
| 7 Room Chain | agreement compounds, evidence does not | governs multi-team surveys |
| 8 Union Surplus | convergent derivation versus adopted import | governs cross-method triangulation |
| 9 Leave, Arrive, Search | the verdict leaves the frame; union unbundling | governs the `gap` verdict |
| 10 Ground Maintainer | ground does not decay, channel does; bring the residual | governs outreach and the audit |
| 11 The Habitat | survivorship, enumeration, selection ran | governs D4, the strongest bearing |
| 12 The Bond | comparison threshold, isomers and arrangement | governs the "unstable" threshold and architecture |
| 13 Minimum Viable Set | chaos from compounding remainder, network over states | governs D2 mechanism |
| Operators table | comparison is "a threshold relation between two quantities" | type-checks "unstable" |
| Symbols table | R is the aim and the ground is the anchor | no R was stated in the question as posed |

Strained readings are named in section 7, not smoothed over.

---

## 3. Findings F1 to F9

### F1: The number is not in the closure of the figures (decisive for the verdict)

Fig 9 :6 gives the right first question: "the verdict: is φ* in here at all?" Fig 9 :43: "The verdict tells you to leave. The lookup tells you where to go. Elimination is what you do after you arrive." Fig 9 :32: "you get a kind of thing, never the answer itself."

The frequency f is an empirical population quantity. No combination of the six terms, seven bonds and eight operators yields a fraction of systems that became unstable. The figures are a domain-agnostic metatheory; they constrain the shape of an answer and say what would settle it, they do not contain survey counts. So the frequency is `gap`, not silence. Fig 13 :134: "Unreachable is a verdict here, not a silence," and Fig 8 :39: "So a search that finds nothing is never a proof of absence."

**Refuter:** exhibit a figure line from which a numerical frequency over planetary systems follows by composition. Until that fires, the verdict on the number is `gap`.

### F2: A global average would hide the only signal (triangulated)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 11 :43: "The habitat is enumerated, never composed."

"How often" is a population statistic, but the underlying quantity is a distribution over per-system instability times. Reporting only f discards which systems and why. The world literature already contains the caution: Zhu and Dong (2021) note that the same term "can carry different meanings" across studies, and that deriving the fraction of stars with planets "can rely on assumptions of these unknowns". A single reported percentage conflates the average number of planets per star with the fraction of stars that host systems.

**Refuter:** a measurement in which the aggregate f is invariant under arbitrary relabelling of per-system instability times, with no distributional change, and the community agrees that no distribution is owed.

Status **triangulated**: Fig 1 (slot indexing) and Fig 11 (enumerate the habitat) have low overlap, one about measurement indexing, one about where actors come from.

### F3: The observed sample is survivor-biased (triangulated)

Fig 11 :15: "nothing selects; what survives is what the ground kept." Fig 11 :36: "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there." Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

A system that became unstable and ejected planets is less likely to be counted as a compact multi-planet system today. The detected population is the surviving population. Yang et al. (2023) report that multiplicity declines with age while the fraction of stars with planets stays near 50 percent, and conclude "planetary systems generally become dynamically hotter with fewer planets as they age." That is a survivor-shaped observation, not a raw formation rate. In an unrelated field, Budd and Mann (2018) show that "Survivorship biases can generate remarkable apparent rate heterogeneities through time in otherwise homogeneous birth-death models of phylogenies," and that conditioning on survival creates an illusion of early high rates. Same shape, different ground, so the corroboration is low-overlap.

**Refuter:** a survey demonstrating that the detected sample is statistically indistinguishable from the born sample with respect to instability history, using an instrument that distinguishes ejected from retained architectures.

Status **triangulated**: Fig 11 (selection ran) and Fig 2 (anchor must not move) are different figures; the world witnesses come from astronomy and paleobiology, two separate evidence pools.

### F4: "Unstable" is a comparison threshold, and choosing it is an authored convention (single-source for the type, live strain on the convention)

Fig 12 :87 identifies the comparison bond: "is it about which is larger, rather than both being present? Yes." The Operators table defines comparison as "a threshold relation between two quantities." So "unstable" must be stated as a relation between a quantity (for example a Lyapunov time or an instability onset time) and a threshold (for example the system age or a survey baseline).

Fig 10 :47 warns: "a convention that decides an outcome has stopped being one." If the threshold is chosen after seeing the data, it is a constant the observer authored, carrying the observer's authority. Yang et al. (2023) explicitly restrict their sample to periods below 100 days because detection efficiency drops beyond that, and exclude ultra-short-period systems; the threshold is part of the measurement, not a neutral label.

**Refuter:** a result whose instability fraction flips sign when the declared threshold is moved within the declared measurement uncertainty, while the authors claim the threshold was set after looking. That is a failed convention, recorded as such.

Status **single-source** for the bond type (Operators table and Fig 12 are the same figure family), **strain named** on the convention.

### F5: The mechanism domain is chaos, not clockwork (triangulated)

Fig 13 :31 says each turn leaves a remainder that re-enters the next, and :32 names the result: "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise." Fig 13 :24: "that entities relate, and influence travels" (network, one of the six structures). A planetary system is a network over space, time and energy; gravitational influence travels between the planets.

The world check agrees and sharpens it. Marzari (2024) reports that "many transiting multiple planetary systems appear to be on the verge of instability with lifetimes of the same order of their age" and that "a significant fraction of these systems underwent dynamical instabilities in the past." Cepelewicz (2023) reports the Laskar and Gastineau result that "around 1% of the time, things went sideways" for Mercury in simulations, and the later proof that instability inevitably arises in a model of three planets around a sun. Fig 12 :96: "Two entries can share every ingredient and be inverses of one another." Same ingredients, different arrangement, different outcome: the figure's isomer point applies to architectures.

**Refuter:** a system with the same masses and separations that is provably non-chaotic at all times and whose observed architecture is unchanged over the survey baseline, with no damping agent present.

Status **triangulated**: Fig 13 (chaos from compounding remainder) and Fig 12 (same atoms, different bond) are distinct figures with low overlap, plus three world sources from astronomy and one from mathematics journalism.

### F6: Detection methods must be independent, and agreement is not corroboration (triangulated)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 8 :50: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them".

Transit, radial velocity, microlensing and astrometry are genuinely different instruments pointing at the same population. Their agreement is meaningful only if they do not draw on the same detection model and the same target catalogue. Zhu and Dong (2021) show that the inferred frequency depends on the definition used (average planets per star versus fraction of stars with planets), so two surveys can agree while measuring different quantities: one evidence pool wearing two names.

**Refuter:** two surveys reporting agreement while sharing the same completeness model and the same target list, with the overlap declared after the agreement.

Status **triangulated**: Fig 2, Fig 6 and Fig 8 are three distinct figures with low overlap.

### F7: The dependency chain breaks at the definition, not at the telescope (triangulated)

Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 3 :24: "Why the middle link is where chains usually break."

We have instruments that detect planets. We do not have an instrument that reads "became unstable" directly from a single snapshot. The middle link, terms for what the situation affords and what would count as progress, is supplied by N-body forward modelling and by an age proxy. Yang et al. (2023) use kinematic age from LAMOST-Gaia-Kepler velocities with 10 to 20 percent internal uncertainty, a proxy, not an instability clock. Effort spent improving the telescope cannot rescue a chain broken at the definition link (Fig 3 :19: "Optimising a link that already works cannot rescue one that does not").

**Refuter:** an instrument that reads instability onset directly from an observable, with no forward model and no age proxy, and a demonstration that the definition link then measures high.

Status **triangulated**: Fig 3 (dependency) and Fig 10 (channel decay) are distinct; one world source, so the physics-facing part is `specified`.

### F8: One system to population is a lossy scale crossing (triangulated)

Fig 4 :22: "Only methods cross up. Only head starts come down." Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Fig 4 :31: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold".

An N-body simulation of one three-planet system returns an instability time. A survey returns an occurrence rate. The transform between them discards individual histories and is not invertible. Yang et al. (2023) generate about 400,000,000 simulated systems in forward modelling to bridge the scales; that is a head start sent down, not a recording carried up. The round-trip gap R_T must be reported, not assumed zero (Section 9 and `11_audit.md`).

**Refuter:** a derivation that maps a single-system instability time to a population rate with no loss and no declared gap.

Status **triangulated**: Fig 4 (membrane) and Fig 9 (describe then look) are distinct figures.

### F9: What actually survives, with mode attached

| claim | mode | figure or source |
|---|---|---|
| The frequency over systems is not derivable from the figures; it is `gap` | `general` | Fig 9 :6, :32, Fig 13 :134 |
| Report a per-system distribution, not a bare average | `general` | Fig 1 :19, :22 |
| The detected population is survivor-biased | `specified`, world-supported | Fig 11 :15, :36; Yang 2023; Budd and Mann 2018 |
| "Unstable" is a comparison threshold that must be declared before the cut | `general` | Fig 12 :87; Operators table |
| Instability arises from compounding remainder in an amplifying network | `specified` | Fig 13 :31-32; Marzari 2024; Cepelewicz 2023 |
| Detection frames must be low-overlap and independently anchored | `general` | Fig 2 :29, :35, Fig 8 :50 |
| The specific numerical value of f | `gap` | no figure line governs it |

---

## 4. Pre-registered refuter

Written before the conclusion, per the seat rule that "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refused if any of the following holds:

1. A figure line is exhibited from which a numerical frequency over planetary systems follows by composition (breaks F1).
2. A source-discriminating instrument shows the age-dependent multiplicity decline is entirely a formation effect, with no dynamical-instability contribution (breaks F3 and F5).
3. A survey shows the detected sample is statistically indistinguishable from the born sample with respect to instability history (breaks F3).
4. One detection method, with no low-overlap triangulation, yields the frequency and the independence requirement is withdrawn (breaks F6).
5. Fig 1's per-slot indexing requirement is shown not to apply to population-frequency questions (breaks F2).
6. The instability threshold is shown to be convention-invariant over the full range of plausible survey baselines (weakens F4, does not break it).

If any of 1 to 5 fires, the shape is wrong and this folder is revised. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. Do not present a percentage as if the figures produced it. Present the shape: per-system distribution, declared threshold, survivorship correction, independent frames (F1, F2, F4, F6).
2. State the mode on every claim (section 9).
3. Put the derivation before any mapping to a specific survey, with dates, so the import and provenance distinction is checkable (Fig 8 :50).
4. Use the public submission and contact points in `03_public_contact_points.csv`, and ask for a refutation, not belief (Fig 2 :35).
5. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator, the shape and the refuter, not a conclusion.

---

## 6. Canonical usage check

Two local sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md` says the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them" and "the quotes are the authority, not this summary". It also says a reading that makes one figure contradict another has misidentified its domain, and that the framework returns "a shape, not a name" then stops at the limit of what instruments can distinguish.
- `FRAMEWORK/figures/THE_FORMULA.md` step 7 separates SEARCHED, INWARD and OUTWARD. The frequency is not unfound inside our closure, it is absent from it, so the correct move is OUTWARD: describe the residual in effect terms and find the frame whose closure predicts its shape. That frame is the survey and N-body community, not another figure.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F1 called "decisive" | **Confirmed** for the numerical value, **downgraded** in scope: the figures decide the shape, not the astronomy. The word "decisive" applies only to the `gap` verdict on the number. |
| "no residual stated" | **Not applicable here.** The residual is stated in section 0 as an effect and bound as an ordinary term, per Formula "Direction". |
| "no pre-registered refuter" | **Retracted as an issue.** Section 4 has six, written before the conclusion. |
| F3 survivor bias as a figure verdict | **Confirmed.** The canonical README's "the ground, not agreement, decides" and Fig 11 :15 agree. The world sources are corroboration, not the source of the verdict. |
| F4 threshold as a mere technicality | **Upgraded.** Fig 10 :47 makes an unexamined convention a named failure, not a detail. |
| Apparent strain Fig 13 chaos versus observed stable systems | **Not strained.** Re-census below. |
| Shape "not a name" applied to the instability mechanism | **Narrowed.** The limit governs a missing primitive. Here the mechanism (chaos, network) is already in the six and in the figure text, so describing it is not naming a missing atom. The numerical frequency is the thing that is missing and not named. |

---

## 7. Strains and re-census

- **Fig 13 chaos versus long-lived stable systems.** Initial strain: if chaos is a property of the turn, why do systems persist for Gyr? Re-census: Fig 13 :31-32 describes what a remainder does in an amplifying chain; it does not assert a universal timescale. The formal result reported by Cepelewicz (2023) proves instability in a specific three-body model and notes that changes may accumulate over hundreds of millions of years rather than billions. Chaos and Gyr stability are different time scales of the same object. No strain after re-census.
- **Fig 1 aggregation warning versus "how often".** Initial strain: the question explicitly asks for an aggregate. Re-census: Fig 1 governs the residual per slot; a population frequency is a statistic computed over slots, not the residual itself. Different quantities. The caution survives as a reporting requirement, not as a prohibition.
- **Comparison operand type.** The Operators table restricts comparison to "a threshold relation between two quantities." Here the operands are a timescale and a survey baseline, both quantities, so the type is sound. The open item is who declares the threshold, recorded in F4.
- **After re-census: one live convention item (F4), no hidden strain.**

---

## 8. Round trip expectation

The condensation carried in `07_the_tether_answer.md` is: per-slot distribution, declared threshold, survivorship correction, independent frames, number is a gap. Sent up as x, concretised back to a concrete survey claim, three things can be dropped: the per-slot distribution (collapsing to one mean), the survivorship correction (treating detected as born), and the convention declaration (choosing the threshold after the cut). R_T is therefore expected to be nonzero. It is recorded qualitatively in `11_audit.md`, not measured numerically, because no ground reading was taken here.

---

## 9. Mode ledger

- `general`: Fig 1 indexing, Fig 2 anchor and triangulation, Fig 3 dependency, Fig 4 lossy crossing, Fig 9 union and gap, Fig 10 convention rule, Fig 11 survivorship and enumeration, Fig 12 comparison type, Fig 13 chaos mechanism. These are structural claims from the figures.
- `specified`: applying those structures to planetary systems, the claim that the detected sample is survivor-biased, and the claim that the definition link (not the telescope) is where this chain breaks.
- `grounded`: none. No measurement was taken in this derivation.

**Final verdict of the audit:** the shape is figure-governed and survives a re-census; the frequency is a declared `gap`; the world sources corroborate the shape from separate evidence pools but do not decide it; no figure line was strained.
