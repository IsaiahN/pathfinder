# Expert verification packet - the Tether on aerosol and greenhouse forcing

**What this is:** a claim in a form an atmospheric chemist or climate dynamicist can check. Mode,
derivation and refuters are stated before the conclusion, so the reader knows what to look for and
what would settle it.

**Mode: `specified` for the applied shape, `general` for the framework-internal laws, `gap` for the
dominant mechanism and all magnitudes. Not `grounded`.** No regional climate measurement is claimed.
This is a shape and a route, not a result.

**Status:** a simulated derivation checked for internal consistency against the figures, not a
ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

Aerosol pollution and greenhouse gases cannot be treated as two interchangeable ingredients added
under a single global W m⁻² budget when the question is regional climate. The residual that matters
is indexed by region and season, so a matching global mean can coexist with a live regional slot.
The operands are role-differentiated: a short-lived, patchy aerosol and a long-lived, well-mixed
gas pass the ordered-bond test and fail the symmetric-bond test. Their combination is a union
compound with its own loop, the crossing from particle microphysics to regional circulation is lossy
and carries a measurable round-trip gap, and the sign of any actor is relative to the named
residual. The framework does not name the dominant species or give a magnitude; it returns a shape,
four refuters written in advance, and the instruments that would close the slot.

## 2. Three checkable sub-claims

### C1 - framework-internal and observation-facing; checkable by reading Figure 1 and a regional dataset

- **Statement:** the error signal is per slot, not per global mean. A global near-zero residual with
  one live regional slot is a legal state.
- **Source, verbatim:** Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* Also
  Fig 1 :13 - *"a global R near zero with one live slot residual is a legal state"*, and Fig 1 :22 -
  *"Aggregating across slots is how a live signal disappears into an average."*
- **What to check:** in a regional dataset, is there a season and region where the observed
  trajectory departs from the greenhouse-only prediction while the global mean stays close? If yes,
  the slot claim is instantiated.
- **Refuter:** a documented case where global-mean forcing predicts every regional and seasonal
  trajectory with no live slot left. Then per-slot indexing adds nothing.

### C2 - physics-facing; checkable by an atmospheric chemist or climate dynamicist

- **Statement:** the two forcings are not symmetric operands, and their combination is a union
  compound with an interaction term. The coupling lives in aerosol-cloud interactions, atmospheric
  stability and the interhemispheric gradient, not in the sum of two scalar forcings.
- **Source, verbatim:** Fig 12 :59 - *"swap the operands. Does the meaning change? No."* (the test
  that fails here); Fig 12 :74 - *"swap them. Does it become a different thing? Yes."* (the test that
  passes); Fig 9 :55 - *"A bundled problem is usually a union of overlapping conditions, not a list
  of separate ones."*; Fig 12 :5 - *"A set of ingredients is not one. The bond is the rest of the
  information, and it is the half nothing was recording."*
- **What to check:** is it true that a short-lived, heterogeneous aerosol forcing and a long-lived,
  well-mixed greenhouse forcing cannot be interchanged without changing the regional outcome and
  timescale? Is there a documented interaction term in the regional response that a simple sum
  misses? Published single-forcing experiments are the natural test.
- **Refuter:** either a swap of the forcing histories gives identical regional trajectories at every
  slot, or the combined response equals the arithmetic sum of the separate responses in every slot
  with no interaction term. Either one makes the ordered-bond and union claims fail.

### C3 - multiscale; checkable against a parameterisation and two independent regional datasets

- **Statement:** any map from aerosol microphysics to a regional climate response is a lossy
  transform with a nonzero round-trip gap `R_T`; it must be measured, not assumed zero.
- **Source, verbatim:** Fig 4 :27 - *"The transform between scales loses information, and that is
  the point."* Fig 4 :30 - *"So take the round trip and measure the gap. Without it you are
  navigating by dead reckoning: confident about a position nobody checked."* Fig 10 :68 -
  *"Different actors, a different currency, a different ground, and a lossy transform between."*
- **What to check:** take a cloud-droplet or aerosol-optical-depth parameter, carry it up to a
  regional precipitation response, then invert the mapping back to the parameter. Does it return the
  same value on two independent regional datasets? If not, the gap is real.
- **Refuter:** a parameter-to-region map that round-trips with zero measured `R_T` on independent
  datasets. Then this membrane is not lossy for that pair and F4 is withdrawn.

## 3. What is explicitly not claimed

- Not a value for aerosol effective radiative forcing, and not a ranking of sulfate, black carbon or
  organic carbon.
- Not that ⋛ is the first-order bond between the two forcings. That reading was retracted: the
  Operators table defines ⋛ as *"a threshold relation between two quantities"*, and Fig 13 :75 bars
  a same-kind direct join. It is kept only as a single-source threshold observation.
- Not that the figures identify the dominant regional mechanism, or give a threshold value for
  interhemispheric aerosol optical depth. Those are ground readings.
- Not that emission policy can subtract committed warming: Fig 11 :61 - *"The seat's power is
  asymmetric. Introduction is available; exclusion is not."*
- Not that a multi-model consensus corroborates the shape; shared parametrisations are one evidence
  pool (Fig 2 :40).
- Not `grounded`. Nothing here is asserted as settled by measurement.

## 4. Provenance

- Residual and domain census: `01_figure_grounded_audit.md`, sections 0 to 2, compiled 2026-11-22.
- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim extract, opened 2026-11-22. Every
  `Fig N :line` quote above is from that file, not from a summary.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, opened 2026-11-22.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, opened 2026-11-22.
- World sources actually opened: IPCC AR6 WGI SPM (2021); Bellouin et al., Reviews of Geophysics
  (2020); Kalisoras et al., Atmospheric Chemistry and Physics (2024); Monerie, Wilcox and Turner,
  Journal of Climate (2022); Rockström et al., Nature (2023); Pringle, PLoS Biology (2016). See
  `10_source_ledger.csv` for URLs, quotes, fields and overlap declarations.
- Pre-registered refuters: `01` §3, written before this packet was compiled.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*
(opened 2026-11-22): an instrument that reads green *"cannot comment on the source"*; the
spectrometer resolved it. Here:

1. **Slot test:** does a slot-indexed regional residual persist while the global mean is near zero,
   in station data and reanalysis?
2. **Swap and sum tests:** do reordered forcing histories give different regional trajectories, and
   is there a measurable interaction term beyond the arithmetic sum?
3. **Round-trip test:** does a microphysics-to-region parameterisation invert cleanly on independent
   datasets, or is `R_T` nonzero?
4. **Source test:** can spectral, polarimetric or in-situ observations discriminate scattering,
   cloud-droplet number and surface-albedo contributions to a TOA shortwave anomaly? This would name
   the mechanism slot.
5. **Threshold test:** is there a threshold in interhemispheric aerosol optical depth difference for
   ITCZ displacement, and at what value? The number belongs to the ground literature.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :13, :19, :22 and Fig 12 :5, :59, :74. Six short passages.
2. Check C2 against single-forcing experiments you know: are the operands genuinely
   non-interchangeable, and is there an interaction term a sum would miss?
3. Name one instrument that could discriminate the source of a TOA shortwave anomaly, or say why
   none is available. That is the mechanism slot.
4. Send the refutation. A failure is more useful than an endorsement. If you would rather not
   engage, no reply is needed.

**Status of this packet:** simulated derivation, internally consistent with the figures, not a
ground reading. It cannot settle the claim it reports on.
