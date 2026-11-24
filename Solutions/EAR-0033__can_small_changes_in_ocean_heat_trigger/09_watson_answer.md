# WATSON answer, EAR-0033

**Mode: `specified`, not `grounded`.** Figures are primary and decide. World sources are secondary,
corroborate but never overrule, and a conflict returns the derivation to the domain census. This is a
simulated derivation checked for internal consistency against the figures, not a ground reading.

## QUESTION

Can small changes in ocean heat trigger large or persistent changes in ice-sheet flow?

Restated as an effect: why does R = |Γ(b,a) - o'| become large or stop trending down in some
glacier-slots, and does a small increment in ocean-heat forcing a produce that change? R is indexed
per glacier or grounding-line slot, never averaged (Fig 1 :19). Anchor: the measurement and the
reversal experiment, named as anchors in Fig 2 :29. Option A (proportional driver) predicts a small,
recoverable response. Option B (threshold at the contact) predicts a conditional, self-sustaining
response where two conditions hold. The shape claim bound before the run is: per slot, the response
is large or persistent only where heat reaches the contact and the contacted ice is configured so
the feedback closes.

## DOMAIN CENSUS

R by arity, symmetry and scale: arity is at least three place (forcing, contacted configuration,
response), indexed by slot; symmetry is non-symmetric (an ordered forcing-response bond and a
comparison for "large"); scale spans ocean basin, cavity, grounding line and ice stream, with a
lossy membrane between scales (Fig 4).

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Ocean heat transport | currents, water masses, heat content | heat, temperature | Argo and heat-content measurement | admitted |
| D2 Ice shelf cavity / grounding zone | warm intrusion, basal melt, buttressing, grounding line | melt rate, resistive stress | borehole melt, radar and altimetry | admitted |
| D3 Ice-sheet flow dynamics | ice streams, bed, sliding law | velocity, grounding-line flux | satellite interferometry and altimetry | admitted |
| D4 Threshold and detection | variance, autocorrelation, hysteresis, reversal | persistence of R, recovery time | the ground, tested by reversal | admitted |
| X1 Ocean heat as sole sufficient cause | the forcing alone | temperature | none nameable without ice configuration | not a domain yet; absorbed into C1 |
| X2 One global ice-sheet tipping point | "the ice sheet" | global mean sea level | already inside D2/D3; aggregation destroys the signal | absorbed |

Union, not partition: D1, D2 and D3 form a coupled chain, and D4 is a union condition over them;
large response requires C1 (delivery) AND C2 (threshold configuration) (Fig 9 :55). Dependency order:
perceive heat and flow, acquire terms for buttressing and hysteresis, define large and persistent,
design the reversal experiment, record and carry (Fig 3). The middle link has no obvious instrument
and is the likely break (Fig 3 :27).

Strain test applied: "large" was initially read as governed by the same bond as "persistent". That
strained the comparison bond. Re-census assigned "large" to ⋛ (Fig 12 :87) and "persistent" to the
cycle (Fig 12 :121), different quantities, so no figure contradiction remains.

## TETHER (primary, verbatim, per domain)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

**D1 and D2 (ocean heat to contact), status triangulated (Fig 11 and Fig 13, habitat versus substrate).**

- Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." -> heat in isolation cannot trigger flow; contact is required.
- Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." -> enumerate water-mass access, intrusion, melt, thinning, buttressing, retreat, flux.
- Fig 13 :46 "distribution is a fact that stays put. What makes a gradient a gradient is that it can be spent, and neither an ordering nor a span of" -> heat becomes spendable only at the contact.
- Fig 13 :76 "Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." -> ice flow is energy plus gradient, typed by which state it bonds to.
- Refuter: warm water delivered to a near-threshold cavity with no change in grounding-line flux. Mode `specified`.

**D3 (flow and feedback), status triangulated (Fig 12 and Fig 13, bond set versus remainder).**

- Fig 12 :87 "a threshold relation between two quantities" -> "large" is a comparison.
- Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." -> "persistent" needs a positive feedback; a chain cannot produce it.
- Fig 13 :32 "comes from: a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise." -> the residual re-enters; discarded detail is why the threshold is uncertain.
- Refuter: a large response that fully recovers when the forcing is removed, with no self-sustaining retreat. Mode `general` for the structure, `specified` for ice.

**D4 (threshold and detection), status `gap` for the number, triangulated for the detector limit (Fig 6 and Fig 9).**

- Fig 6 :34 "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve. Where nothing is, there is no edge to" -> the detector is an existing edge, not an imagined sensor.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> the framework returns conditions, not a threshold value.
- Fig 13 :134 "So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence," -> `gap` is a verdict.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> absence of an observed tip is not proof no tip is possible.
- Refuter: a ground-checked instrument that resolves the threshold at a named slot. Mode `gap` for the number.

**Union and method (across domains), status triangulated (Fig 1, Fig 9, Fig 4).**

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." and Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> per-slot indexing.
- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." and Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific" -> unbundle C1 and C2 before searching.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> cross-scale statements carry a round-trip gap R_T.

## WORLD (secondary, each source read; field, author/venue/year, quote, prediction, corroborates|conflicts)

**Pool A, ice-sheet modelling and tipping science (one witness, not three).**

- **Ice/ocean modelling.** Emily A. Hill, G. Hilmar Gudmundsson and David M. Chandler, *Ocean warming as a trigger for irreversible retreat of the Antarctic ice sheet*, Nature Climate Change 14, 1165-1171, 2026-09-20, opened 2026-11-22. Quote: *"a switch to a warm ocean state will not only result in substantial ice loss from those regions but act as a trigger for the irreversible retreat of some of their grounding lines."* Also: *"this does not lead to a runaway collapse of the West Antarctic ice sheet via these catchments."* Prediction: catchments tip individually, not as one sheet. **Corroborates** per-slot and union reading. Overlap: high with Rosier and Winkelmann (shared topography and ocean products).
- **Ice dynamics and early warning.** Sebastian H. R. Rosier et al., *The tipping points and early warning indicators for Pine Island Glacier, West Antarctica*, The Cryosphere 15, 1501-1516, 2021-03-25, opened 2026-11-22. Quote: *"A large change in response to a small forcing is not necessarily indicative of hysteresis."* Also: *"once a critical threshold, or tipping point, is crossed, ice internal dynamics can drive a self-sustaining retreat committing a glacier to irreversible, rapid and substantial ice loss."* Prediction: large and persistent are distinct; multiple tipping points. **Corroborates** the predicate split and the cycle; the 1.2 °C value is an import from this frame, not a figure result.
- **Tipping-science synthesis.** Ricarda Winkelmann et al., *Mapping tipping risks from Antarctic ice basins under global warming*, Nature Climate Change 16, 341-349, 2026-02-16, opened 2026-11-22. Quote: *"The Antarctic Ice Sheet does not act as one single tipping element, but rather as several tipping systems interacting across drainage basins."* Prediction: basin-level thresholds with gradual decline elsewhere. **Corroborates** per-slot indexing. Overlap: high with Hill and Rosier.

**Lower-overlap fields (independent witnesses for the mechanism and the detector).**

- **Physical oceanography.** Qin Zhou et al., *Channelized topography amplifies melt-sensitivity of cold Antarctic ice shelves*, Nature Communications 17, 3790, 2026-05-07, opened 2026-11-22. Quote: *"even modest CDW intrusions could have important implications for the stability of cold Antarctic ice shelves."* Prediction: small forcing amplified by geometry at the contact. **Corroborates** F4 delivery-and-gradient. Overlap: low with the ice-sheet modelling pool (cavity-scale ocean simulation).
- **Complex systems / mathematics.** Joseph Clarke et al., *Conditions for skilful spatial and temporal tipping point early warning signals*, Journal of Physics: Complexity 7, 025007, 2026-05-07, opened 2026-11-22. Quote: *"Some studies have demonstrated how EWSs can still give an indication of an approaching tipping point even in cases where no such tipping point exists."* Prediction: detector skill is conditional; false positives occur. **Corroborates** the `gap` on the threshold number and the instrument limit. Overlap: low (method paper on a generic saddle-node model).

**Framework-internal essays, used for the canonical reading only, not as world witnesses.** Isaiah N, *The Library of Babel* (Oct 02 2026), *The Hard Problem is About Source* (Aug 28 2026), *The Recursive Self-Improvement Trap* (Nov 19 2026), *Decoding Tacit Knowledge* (Nov 10 2026), all Adventures in Machine Learning, opened 2026-11-22. Key quote from the second: *"The answer is unreached until a better instrument exists."* Overlap with the figures is maximal (same author), so these carry no independent corroboration weight.

No world source conflicts with the figure verdict after re-census. The conflict rule was not triggered. The three ice papers are one evidence pool; their agreement with each other is not corroboration (Fig 2 :40).

## VERDICT (from the figures)

The figure-derived verdict is Option B in `specified` mode, kept per domain and never averaged: a small ocean-heat change can give a large or persistent ice-flow response, but only where heat reaches the ice-ocean contact and the contacted ice is configured so that retreat feeds back on itself. "Large" is a threshold predicate and "persistent" is a cycle predicate; they are tested separately. The residual is per slot. The two conditions form a union compound, not one cause and not a global switch. The threshold value for any named glacier is a declared `gap`, not a hidden answer; the 1.2 °C figure is an import from the ice-sheet frame. The world sources corroborate the mechanism and the detector limit but cannot settle the empirical question for a named glacier.

- **Cost if wrong:** bounded and locatable. If the union is wrong, a single lever would be applied where two are needed, and effort would go to a forcing-only or configuration-only case while the intersection stays standing (Fig 9 :55). If the cycle claim is wrong, a large recoverable response would be misreported as a tip. The real avoidable cost is spending an outside reader's independence by sending a recording instead of a generator, which Fig 2 :42 prices (*"Buy independence in proportion to the cost of being wrong."*). Leading with the shape and its refuter avoids it.
- **Undoable:** yes. No term is deleted if the claim fails; a refutation is added and the reach falls because something was added, not because anything was struck out (Fig 6 :42). The shape, its five falsifiers and the provenance of imported numbers are recorded so a later reader can locate the error (Fig 10 :62).
- **Reversed by:** a ground reading, not agreement. A step-forcing and reversal experiment at a named slot that shows hysteresis; a warm-water delivery that changes no grounding-line flux across near-threshold slots; a lever that clears both union conditions; a basin mean used as the verdict while a slot is live; or a ground-checked threshold instrument returning a value. Any of these moves the relevant claim, and none of them is prestige or consensus.

## Sources

- [The figures, as text (local extract)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Ocean warming as a trigger for irreversible retreat of the Antarctic ice sheet, Hill et al. 2024](https://www.nature.com/articles/s41558-024-02134-8)
- [The tipping points and early warning indicators for Pine Island Glacier, Rosier et al. 2021](https://tc.copernicus.org/articles/15/1501/2021)
- [Mapping tipping risks from Antarctic ice basins under global warming, Winkelmann et al. 2026](https://www.nature.com/articles/s41558-025-02554-0)
- [Channelized topography amplifies melt-sensitivity of cold Antarctic ice shelves, Zhou et al. 2026](https://www.nature.com/articles/s41467-026-71828-8)
- [Conditions for skilful spatial and temporal tipping point early warning signals, Clarke et al. 2026](https://iopscience.iop.org/article/10.1088/2632-072X/ae6217)
- [The Library of Babel, Isaiah N 2026](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source, Isaiah N 2026](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap, Isaiah N 2026](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge, Isaiah N 2026](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [AGU](https://www.agu.org/)
- [Potsdam Institute for Climate Impact Research](https://www.pik-potsdam.de/en/)
