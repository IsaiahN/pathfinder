# Figure-grounded audit: early atmosphere composition and pressure

**Mode of this document: `specified`, not `grounded`.** It states what any answer must look like and what would have to be measured. The numbers reported from the literature are `grounded` by their authors, not by this derivation.

Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post." The truly testable output "would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the four essays named in `05_what_shape_means.md`, and the world sources in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The claim under audit

> What were the atmosphere's composition and pressure during the relevant period?
>
> Read as an effect: give a list of gases with their abundances and a total surface pressure for the late Hadean to early Archean window in which prebiotic chemistry could operate and life appeared. The answer must serve three effects: keep the surface warm under a fainter Sun, shield the surface from UV, and be consistent with the chemical traces left in rocks. It must also say what each option leads to, because a high-pressure reducing atmosphere and a thin N2-CO2 atmosphere license different prebiotic pathways.

Two candidate shapes are in play, and they are not merely different numbers:

- **A, the consensus shape:** a weakly reducing, anoxic atmosphere dominated by N2 and CO2, with minor H2, CO, CH4, H2S and SO2, and a total pressure well below the modern bar.
- **B, the reducing shape:** an atmosphere rich in H2, CH4 and NH3 and poor in CO2, with a very different pressure and redox state (Ohmoto and Ferry, 2026).

An answer that asserts A or B without a ground reading is a verdict in `general` mode. The figures do not decide between A and B. They decide the *shape* that either answer must have.

---

## 1. Domain census (before choosing any figure line)

R is described by arity, symmetry and scale, then one line per domain gives actors, currency and anchor. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| **R, the residual** | gas species and one total pressure | partial pressure, mixing ratio, isotope ratio | the rock record | union: composition and pressure are two conditions, not one hard problem |
| **1. Framework-internal composition** | six terms (space, time, energy; spectrum, gradient, network), seven bonds, negation | compositions inside closure(Γ), settlement | the figures as metalaws | partition: what composes across the two kinds |
| **2. Geochemical / planetary frame** | volcanic outgassing, impacts, escape to space, nitrogen fixation, methanogenesis, oxygenic photosynthesis | gas fluxes, partial pressures, isotope fractionations | rock proxies: S-MIF, detrital uraninite and pyrite, paleosols, fluid inclusions, fossil raindrops, vesicles in basalt, micrometeorite oxidation | union of overlapping conditions; each proxy constrains a slice |
| **3. Climate and photochemical modeling frame** | radiative-convective and photochemical models | predicted surface temperature and gas abundance | the observed warm-but-glaciated record | union; models consume the outputs of domain 2 |
| **4. Verification / outreach frame** | expert readers | agreement and residual | the ground, never agreement | separate frame; in this simulation it shares one evidence pool |

**Arity of R.** Composition is a vector (many species), pressure is a scalar. They couple: partial pressure equals mixing ratio times total pressure, so the same mixing ratio at 0.23 bar and at 1 bar is a different climate. This is a compound, not a list (Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again.").

**Symmetry.** Mixing ratios are symmetric under renaming of species order, like a conjunction; pressure and the greenhouse response are ordered, because pressure broadening saturates and Rayleigh scattering eventually reverses the sign. So one figure line cannot govern both, which is a strain test in disguise.

**Scale.** A local rock sample is not a global atmosphere. Time is a window of hundreds of millions of years, not an instant. Extrapolation from sample to planet is itself an import and must be recorded.

**Dependency order (Fig 3 :20: "The chain is ordered by dependency, not by importance.").** First establish that a ground exists (preserved rocks and proxies); then constrain total pressure; then constrain composition conditional on pressure; then test climate consistency; then synthesize. Effort spent on climate models before pressure is constrained arrives at a step that cannot use it.

**Anchor test (Fig 2 :29).** "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." Each proxy moves when the rock is re-measured; none moves when a model or a reviewer changes its mind. The proxies are anchors. Model agreement is not.

---

## 2. Figure census

Verbatim lines from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line` against the figure's own line numbers. Quotes are exact substrings.

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | Fig 1 :19 "The residual is indexed by object slot, not aggregated." | each proxy is a slot; averaging proxies destroys the signal that says which one is broken |
| **2 The Ground** | Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement among models is not a measurement |
| **3 Dependency Chain** | Fig 3 :20 "The chain is ordered by dependency, not by importance." | pressure before composition before climate |
| **4 The Membrane** | Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | condensation from proxy to number and back carries R_T |
| **5 Mint Pipeline** | three guards as a product | a named gas is a binding, not a new primitive |
| **6 Closure / Reachability** | Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | rock proxies are imports from a frame whose closure differs |
| **7 Room Chain** | a chain of agreeing rooms is one long room | more reviews of the same literature add no evidence |
| **8 Union Surplus** | Fig 8 :39 "So a search that finds nothing is never a proof of absence." | no Hadean rocks is a gap, not proof of no atmosphere |
| **9 Leave / Arrive** | Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit" | describe the effect the atmosphere had to serve before picking a proxy |
| **10 Ground Maintainer** | Fig 10 :52 "Bring a characterised residual, never the source." | outreach carries the residual and refuter, not the theory |
| **11 The Habitat** | Fig 11 :43 "The habitat is enumerated, never composed." | enumerate outgassing, impacts, escape and life; do not invent the actor list |
| **12 The Bond** | Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | pressure is the arrangement that changes the substance; see `06` |
| **13 Minimum Viable Set** | Fig 13 :74 "Everything else is a composition across the two kinds, never within one." | atmosphere is a composition; the figures do not name the gases |
| **Operators table** | seven bonds plus negation | an anoxia claim is a negation, not a subtraction |
| **Symbols table** | R is the aim; the ground is the anchor | no single global R; R is per slot |

---

## 3. Findings

### F1 — The figures return a shape, not a gas list (decisive for scope)

Fig 13 :3: "No system functions without any of them, none is built from the others, and everything else is a composition across the two kinds."
Fig 13 :74: "Everything else is a composition across the two kinds, never within one."
Fig 9 :32: "you get a kind of thing, never the answer itself"

An atmosphere is a composition of states (space, time, energy) and structures (spectrum, gradient, network). The figures license the claim that the answer must be compositional and must cross kinds. They do not license naming CO2, N2 or methane. *Triangulated* across Fig 13 and Fig 9 (low overlap: one is the substrate, the other is the leave/arrive limit).

**Refuter:** show that the figures derive a specific gas species from the six terms, or that a single-species atmosphere is a legal composition under Fig 13 :74. Neither holds after a genuine census. The specific gases are world imports, not figure derivations.

### F2 — The residual is a union, not one hard problem

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Composition and pressure have different anchors and different loops. Pressure is constrained by vesicle sizes, raindrop imprints and N2/Ar ratios; composition is constrained by sulfur isotopes, redox-sensitive minerals and paleosols. They couple only through the greenhouse calculation. A single search over "the atmosphere" will average the slots and throw away the only signal that says where to look. *Triangulated* across Fig 9 and Fig 1.

**Refuter:** a single instrument that measures both the full gas vector and total pressure for the same age, on the same rock, with no cross-calibration, would collapse the union to one slot. No such instrument exists in the sources read.

### F3 — The ground is the rock record, not model agreement

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"

The sources read are explicit that proxies are the constraint. Catling and Zahnle (2020): "Data about the Archean atmosphere come from how individual gases, or the air as a whole, affected chemical and physical phenomena ... that were recorded in rocks." Kasting (2013) is a model chapter and cannot settle a number by itself. Three paleobarometers (basalt vesicles, raindrop imprints, N2/Ar fluid inclusions) are independent instruments, so their convergence is weak triangulation; three papers quoting the same review are one witness. *Triangulated* across Fig 2 :29 and :35.

**Refuter:** show that the pressure proxies share a calibration, a rock, or a single author's reinterpretation, so their agreement is one evidence pool. If that holds, the pressure verdict drops from triangulated to single-source.

### F4 — Anoxia is a negation, and the figures price it differently from a subtraction

Operators table :57-58: negation means "this does not hold"; "a refutation is a negation, which is why a vocabulary without it can only accumulate."
Symbols table entry for subtraction: "A with B removed or absent."

"O2 was negligible before oxygen-producing life" refuses a claim (O2 was present). It is not the absence of an operand in a mixture. That matters for outreach: a vocabulary that can only accumulate gases cannot carry the correction. *Single-source* for the operator distinction (Operators table), but the physical claim is triangulated in the world literature (S-MIF plus detrital uraninite plus redox-sensitive metals).

**Refuter:** evidence in two independent proxy systems that O2 was at or above 10^-5 present atmospheric level before oxygenic photosynthesis. This would fire the negation and change the composition answer categorically, not just numerically.

### F5 — Gap is a verdict, not a silence, for the Hadean

Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 13 :134: "Unreachable is a verdict here, not a silence"
Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."

The sources agree that Hadean rocks are scarce or absent. Catling and Zahnle (2020): "These perspectives are unavailable for the Hadean eon from ~4.6 to 4 Ga ago, which generally lacks these rocks." Ohmoto and Ferry (2026) reach a different composition by thermodynamic modeling of the magma ocean, but their pressure figures (hundreds to over a thousand bar in the magma-ocean stage) are computed, not measured. The honest stop for the pre-4.0 Ga window is `gap` on measured values, with a shape still statesable. *Triangulated* across Fig 8 and Fig 13.

**Refuter:** a preserved, datable Hadean rock or fluid inclusion that returns a gas abundance or a barometric reading. This would convert the gap to a grounded slot without changing the shape.

### F6 — The habitat must be enumerated, not composed

Fig 11 :43: "The habitat is enumerated, never composed."
Fig 11 :46: "conditions: light, water, temperature, season, terrain"

The actors on this residual are volcanic outgassing, impact delivery and loss, hydrogen escape to space, biological nitrogen fixation, methanogenesis and oxygenic photosynthesis. Enumerate everything in contact with the residual, then what contacts those, outward until the cascade stops mattering. Do not invent an actor list and do not assume a standing list of "important" processes survives a change of period. Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Impacts are a benefactor to prebiotic chemistry and a malfactor to atmospheric retention. *Single-source* for the enumeration rule (Fig 11), but the actor list itself is read off the world sources.

**Refuter:** a reservoir or process in contact with the residual that is missing from the enumerated list and that changes a partial pressure by more than the current proxy uncertainty.

### F7 — The round-trip gap is nonzero

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Sent up: the proxy readings (a vesicle size distribution, a raindrop imprint, an isotope ratio). Abstracted: "thin, anoxic, N2-CO2 atmosphere." Brought back down: a specific claim such as "total pressure was 0.23 bar and CO2 was >70% by volume." Lehmer et al. (2020) show exactly why the gap matters: the same oxidation state is reproduced by a 1 bar atmosphere with >0.7 bar CO2 and by a 0.23 bar atmosphere with >0.16 bar CO2. The abstraction does not hold the coupling. R_T is therefore nonzero and is recorded qualitatively, not numerically, because no ground reading closes it. *Triangulated* across Fig 4 and the Lehmer result (low overlap: one is a figure rule, the other a micrometeorite model).

**Refuter:** a proxy whose reading is invariant to total pressure over the full 0.1 to 5 bar range, so the abstraction and concretisation agree. The vesicle and raindrop proxies fail this test by construction, which is why they are useful.

### F8 — The live conflict sends us back to the census, not to a new verdict

Ohmoto and Ferry (2026, *Scientific Reports*): "we suggest that life evolved sometime during 4.50–3.9 Ga under a reducing atmosphere, rich in hydrogen (H2), methane (CH4), and ammonia (NH3), but very poor in CO2." This conflicts with the N2-CO2 consensus of Kasting (2013) and Catling and Zahnle (2020). Per the WATSON discipline, a conflict is not a coin flip. Re-census: the two frames use different anchors. Ohmoto and Ferry compute equilibrium gas compositions from an assumed mantle fO2 (IW minus 2); Catling and Zahnle range rock proxies. Different closures, so the surplus is real, and the disagreement is about which frame gets to anchor the composition, not about whether the answer is compositional. The figures give no verdict between them. Recorded as a live `specified` conflict, not resolved by authority or by citation count.

### F9 — What actually survives

| claim | mode | figure or source |
|---|---|---|
| Any answer must be a cross-kind composition, not a single species | `general` (structural) | Fig 13 :3, :74 |
| Composition and pressure are a union and must be unbundled | `general` (structural) | Fig 9 :54, Fig 1 :19 |
| The ground is the rock record; model agreement is not | `general` (structural) | Fig 2 :29, :35 |
| Pre-4.0 Ga measured values are `gap` | `specified`, falsifiable | Fig 8 :39, Fig 13 :134 |
| Anoxic before oxygenic life | `specified`, world-triangulated | Operators table negation; S-MIF, uraninite |
| N2-CO2 dominated, thin (roughly 0.1 to 1 bar) | `specified`, world-triangulated for pressure, single-source for the gas identity | Som 2016, Marty 2013, Catling and Zahnle 2020 |
| H2-CH4-NH3 rich and CO2 poor | `specified`, single-source, in conflict | Ohmoto and Ferry 2026 |
| Specific numerical composition and pressure for a given age | `grounded` by the cited authors, not by this derivation | source ledger |

---

## 4. Pre-registered refuter

Written before the WATSON world search (Fig 5 and the seat rule: a falsifier written before the run is a design instrument). The shape claim is: the answer is a triangulated, cross-kind composition with a pressure that sets partial pressures, and the figures do not name the gases.

1. **R1.** The shape is refuted if two independent proxies, sharing no rock, isotope system or calibration, show that a single gas species made up more than 99 percent of the atmosphere for the same age, with no detectable trace species. The composition would collapse from a vector to a name.
2. **R2.** The shape is refuted if two independent proxy systems show O2 at or above 10^-5 present atmospheric level before oxygenic photosynthesis. This fires the negation in F4 and changes the answer categorically.
3. **R3.** The triangulation claim in F3 is refuted if the three paleobarometers are shown to draw on one evidence pool, so their agreement is the pool talking rather than three instruments ranging against the ground.
4. **R4.** The gap verdict in F5 is refuted by a preserved, datable Hadean rock or fluid inclusion that returns a gas abundance or barometric reading. This narrows the gap without changing the shape.

None of R1 to R4 fired in this run. That is a report of internal consistency, not corroboration.

---

## 5. Recommendation

1. Answer in two layers: shape from the figures, numbers from the ground, with the layer named on every sentence.
2. Unbundle composition and pressure before searching either (F2).
3. Lead with the ground proxies and their disagreements, not with a single preferred number. Fig 1 :19 says the residual is indexed by slot; averaging the proxies is how the live signal disappears.
4. State the Hadean as `gap` on measured values while keeping the shape (F5).
5. Record the Ohmoto and Ferry conflict as a live re-census item, not as a defeat or a win for the consensus (F8).
6. Fig 10 :52: "Bring a characterised residual, never the source." Send `08_expert_verification_packet.md`; keep the essays behind the first reply.

---

## 6. Canonical usage check

Two framework sources were read after findings F1 to F8 and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." And the canonical limit: the framework returns "a shape, not a name", then "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."
- `FRAMEWORK/figures/THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." And step 7 separates SEARCHED, INWARD and OUTWARD: "INWARD and OUTWARD are opposed; never read one against the other."

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "shape, not a name" forbids giving any numbers | **Retracted at the narrow point.** The README phrase is "what a **missing** thing would have to look like (a shape, not a name)". It governs a primitive not held in Γ. Gases and pressures are not primitives of the six-term set; the measured numbers are grounded reports from another frame. The rule still forbids *deriving* a gas from the six terms. See `05_what_shape_means.md` section 5. |
| Fig 13 :75 ("Two states never bond directly") was tried as a direct line governing gas identity | **Retracted as a strain.** Strain test: the line governs which kinds may compose, not which species occupy a slot. Re-census sent it to F1, where Fig 13 :3 and :74 govern the answer's compositional shape. No figure line names a gas. |
| Ohmoto and Ferry (2026) conflicts, so one side must be wrong | **Retracted.** Conflict sends the reader back to the domain census (WATSON discipline and Fig 2 :35). Different anchors, so the verdict stays `specified` and the conflict stays live. |
| "Origins of Life and Evolution of Biospheres" as an active submission venue | **Retracted.** The journal was renamed *Discover Life* on 1 January 2024 and is fully open access (Springer journal page, verified 2026-11-23). `03_public_contact_points.csv` uses the current title and submission URL. |
| F1 (shape not a gas list) | **Canonically confirmed.** The README's "a shape, not a name" and Fig 9 :32 agree. |
| F5 (gap is a verdict) | **Canonically confirmed.** Fig 13 :134 and the README's honest-stop sentence agree. |
| F7 (R_T nonzero) | **Confirmed and specified.** Fig 4 :30 requires the gap be measured; Lehmer et al. supply the concrete coupling that the abstraction drops. |

### Seven-question recursive derivation, compressed

1. **Is there a ground?** Yes for the Archean (rocks and proxies), no for most of the Hadean. Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." The instruments exist from 3.5 Ga onward.
2. **Are composition and pressure one question?** No. Union, unbundle (Fig 9 :54).
3. **Do the figures name a gas?** No. Shape only (Fig 13 :3, :74; Fig 9 :32).
4. **Which frame holds the numbers?** The geochemical frame, imported with provenance (Fig 6 :23).
5. **Do the proxies agree?** Pressure, weakly yes, three instruments; composition, partially, with a live conflict.
6. **Is anything settled by this run?** No. Mode `specified`; ground settles it (THE_FORMULA step 5).
7. **Route when the closure does not close?** SEARCHED first (the proxies have been swept), then INWARD (sharpen a proxy), then OUTWARD (import a frame that predicts the shape). Importing a gas name from the Tether six-term set would be a budget error, since the six do not contain gas identities.

### Updated verdict

The shape survives. The specific numbers are ground reports from named authors, not figure derivations, and they are marked as such. Strains after re-census: one live conflict (Ohmoto and Ferry versus the consensus) and one nonzero round-trip gap (pressure-composition coupling). Both are named, not smoothed. Nothing here is `grounded` by this derivation.
