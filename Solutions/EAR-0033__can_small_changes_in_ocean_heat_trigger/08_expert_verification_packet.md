# Expert verification packet - the Tether on ocean heat and ice-sheet flow

**What this is:** a claim in a form an ice-ocean or tipping-points researcher can check. Mode,
derivation and refuters are stated before the conclusion, so a reader knows what to look for and what
would settle it.

**Mode: `specified` - not `grounded`.** No ground reading of a threshold at a named glacier is
claimed. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

The response of ice flow to ocean heat must be indexed per glacier or grounding-line slot, not as a
basin average. "Large" and "persistent" are two different predicates: a large response is a
threshold relation between forcing magnitude and response magnitude, while a persistent response
requires a feedback in which retreat re-enters as input with a positive sign, which a simple chain
cannot produce. Ocean heat becomes a flow only where it reaches the ice-ocean contact and is bonded
to a spendable gradient, and the response is a union of two conditions: delivery of heat to the
grounding zone, and a threshold-ready ice configuration. The framework returns this shape, not a
threshold number. The number is a ground reading and is recorded as an import from the ice-sheet
frame. Five falsifiers are pre-registered in `01_figure_grounded_audit.md` section 4.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 1 and 12

- **Statement:** R is indexed per slot, and a large response is not the same as a persistent one.
- **Source, verbatim:** Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 - *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :20 - *"Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert"* Fig 12 :87 - *"a threshold relation between two quantities"* Fig 12 :121 - *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*
- **What to check:** does a basin-mean response ever hide a single live ice stream? Does a large-but-recoverable response occur in the literature without hysteresis? Rosier et al. 2021 Figure 1 explicitly separates these cases and states *"A large change in response to a small forcing is not necessarily indicative of hysteresis."*
- **Refuter:** a documented case where a basin mean is used as the verdict while one slot is in sustained retreat; or a "persistent" response that stops when the anomaly is removed across all tested slots.

### C2 - ice-facing; checkable by an ice-sheet modeller or observational glaciologist

- **Statement:** the named phenomenon requires a union of (i) delivery of ocean heat to the grounding zone and (ii) an ice configuration whose feedback closes. Neither alone is sufficient.
- **Source, verbatim:** Fig 9 :55 - *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57 - *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific"* Fig 11 :40 - *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*
- **What to check:** Hill et al. 2024 report that a cold-to-warm cavity transition produces *"destabilization and irreversible grounding line retreat in some locations"* but *"does not lead to a runaway collapse of the West Antarctic ice sheet via these catchments"*; Winkelmann et al. 2026 find that some basins show *"gradual decline versus tipping dynamics"* and that the ice sheet is *"not... one single tipping element, but rather... several tipping systems interacting across drainage basins"*; Zhou et al. 2026 show that *"even modest CDW intrusions could have important implications for the stability of cold Antarctic ice shelves"* through channelised topography. Are these faithful descriptions of the shape, or is delivery alone sufficient in some regime the packet has missed?
- **Refuter:** warm water delivered to the cavity with no change in grounding-line flux across several near-threshold slots; or one intervention that restores small recoverable responses in both a forcing-only and a configuration-only case with no categorically different residue.

### C3 - detector and provenance; checkable against the world sources

- **Statement:** the threshold number is a `gap` here; the detector exists but is lossy, and the 1.2 °C value is an import, not a derivation.
- **Source, verbatim:** Fig 9 :32 - *"you get a kind of thing, never the answer itself"* Fig 13 :134 - *"So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence,"* Fig 6 :34 - *"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve. Where nothing is, there is no edge to"* Fig 8 :51 - *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures"*
- **What to check:** Rosier et al. 2021 report early warning indicators that *"robustly detect the onset of the marine ice sheet instability"* in model simulations and a final threshold at *"an ocean warming of approximately 1.2 °C"*; Clarke et al. 2026 show spatial EWIs lose skill under strong coupling and that *"Some studies have demonstrated how EWSs can still give an indication of an approaching tipping point even in cases where no such tipping point exists."* Is the detector an edge already returning something, and is the provenance of the number recorded correctly?
- **Refuter:** a ground-checked instrument that resolves the threshold for a named slot and returns a value; or a demonstration that the number is derived by the framework rather than imported.

## 3. What is explicitly not claimed

- Not that any named glacier is about to tip, and no specific threshold value is asserted by this derivation.
- Not that ocean heat is the sole cause of ice loss; geometry, buttressing, subglacial discharge and bed slope are co-actors.
- Not that every large response is a tipping event, or that every steep response is persistent.
- Not a single global ice-sheet switch. The verdict is per basin and per slot.
- Not `grounded`. No reversal experiment or ground measurement is held here.
- Not a new primitive, and no claim that the framework yields a threshold number it does not hold.

## 4. Provenance

- Local figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session; every `Fig N :line` quote above is verbatim from it.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, opened this session.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, opened this session.
- World sources opened 2026-11-22: Hill, Gudmundsson and Chandler, Nature Climate Change 14, 1165-1171 (2024); Rosier et al., The Cryosphere 15, 1501-1516 (2021); Winkelmann et al., Nature Climate Change 16, 341-349 (2026); Zhou et al., Nature Communications 17, article 3790 (2026); Clarke et al., Journal of Physics: Complexity 7, 025007 (2026). Full URLs and quotes in `10_source_ledger.csv`.
- Framework essays opened 2026-11-22, listed in `05_what_shape_means.md`.
- This packet compiled 2026-11-22. It is a simulated derivation, not a measurement.

## 5. What would settle it

1. **Threshold Test:** step the forcing at a named slot and locate the point where recovery time stops shortening and reversal requires going well below the trigger (hysteresis).
2. **Reversal Test:** remove or halve the heat anomaly at that point and observe re-stabilisation versus continued retreat.
3. **Per-slot Test:** confirm that one slot can be live while the basin mean stays near zero, or refute it.
4. **The five pre-registered falsifiers** in `01_figure_grounded_audit.md` section 4.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :20, :22 and Fig 12 :87, :121 - five short passages.
2. Check C2 against their own knowledge: is there a regime where heat delivery alone is sufficient? If so, name it and the union claim is narrowed.
3. Check C3 against the two detector papers: is the early-warning edge real at the slot scale, and is the threshold number correctly attributed?
4. Name one reversal experiment that would discriminate a threshold response from a large recoverable one - or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
