# Expert verification packet: the Tether on resilience measurement

**What this is:** a claim in a form a resilience researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the separator and per-domain verdicts, `general` on the structural non-additivity claim, `gap` on a universal scalar. Not `grounded`.** No trajectory measurement is claimed here. This is a shape and a route, not a result.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

---

## 1. The claim, in one paragraph

A disturbance produces two effects that a measurement can keep apart. Resistance is the magnitude of the immediate departure from a reference; recovery or reorganization is the subsequent trajectory, whose outcome depends on whether a loop closes back to the same basin. These are differently bonded readings (comparison versus sequence plus cycle), and their costs do not add, so a single number that sums them is the named error rather than a compact summary. The report stays per component and keeps the transient, because dropped transients delete recovery, saturated metrics delete resistance, and pooled readings delete both. A discriminator between same-basin return and basin change can be built from instruments already returning something (return time, resistance magnitude, recovery rate, lag-1 autocorrelation). A universal scalar index and a universal recovery threshold are not returned; they are a declared `gap` with a source-discriminating instrument named as what is owed.

## 2. Three checkable sub-claims

### C1. Framework-internal; checkable by reading Figure 13 and Figure 12

- **Statement:** the magnitude reading and the trajectory reading are different bond types, so keeping them apart is structurally possible and collapsing them loses information.
- **Source, verbatim:** Fig 13 :36, *"adjacency is not duration, an ordering is not a pathway, a pathway is not a direction."* Fig 12 :30, *"A then B; B needs A to have happened"* (sequence). Fig 12 :125, *"A composition costs in two currencies, and they do not add."* Fig 12 :130, *"Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."*
- **What to check:** is the bond typing faithful to the figures, and does the non-additivity claim follow from Fig 12 rather than being imported from the resilience literature?
- **Refuter:** show a deterministic one-to-one map between the two readings across all disturbances and slots, or a scalar with zero round-trip loss on a ground where the resist and recover decisions conflict.

### C2. Measurement-facing; checkable by a resilience researcher against their own data

- **Statement:** the channel failure modes delete specific halves of the distinction, and per-component reporting is required. Fig 10 :24, *"the ground does not decay, the channel does"*; Fig 10 :26, *"stale percepts, dropped transients, saturated metrics, pooled readings"*; Fig 1 :19, *"The residual is indexed by object slot, not aggregated."*
- **What to check:** on a real post-disturbance time series, does dropping the transient remove the recovery verdict while leaving the peak reading intact? Does saturating the peak remove the resistance verdict? Does pooling components remove the signal that decides which component recovered?
- **Refuter:** exhibit an instrument for which none of the four named failures removes either reading, with the transient and the reference recorded at full resolution; or show a case where averaging preserves the basin decision and the per-component readings add nothing.

### C3. Framework-internal derivation with an empirical hook

- **Statement:** recovery, reorganization and regime shift separate by cycle closure, and the discriminator is buildable from an instrument already returning something. Fig 12 :121, *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* Fig 6 :32, *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* Fig 6 :34, *"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."*
- **What to check:** is there a trajectory reading at some resolution that returns something about return rate even when it fails to discriminate basins? Lag-1 autocorrelation and recovery-rate estimators are the candidates from Scheffer et al. 2009.
- **Refuter:** show that no recovery-related reading registers at any resolution and no better instrument can be derived from one that does, or exhibit a regime shift indistinguishable from same-basin recovery at every achievable resolution with no derivable discriminator.

## 3. What is explicitly not claimed

- Not a universal resilience index, recovery time or threshold. That is `gap`, reported as unreachable, not silence (Fig 9 :32, Fig 13 :134).
- Not that the two components must always be operationally reported separately. Walker et al. 2004 caution that they are interdependent; that caution is carried as a cost if wrong.
- Not that the adaptive cycle, panarchy, critical slowing down or robustness/graceful-extensibility *are* the figure's cycle bond. They are low-overlap corroborations only.
- Not that the six-term physical substrate maps onto ecological domains. Fig 13 is used only for the ordering/duration distinction.
- Not that this packet is `grounded`. No system was measured.
- Not that the framework returns numeric content. The practitioner supplies the measurements and owns them.

## 4. Provenance

- Question source: `Questions/complexity science.txt` line 58, section 5 (Critical transitions, tipping points, and resilience).
- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, re-opened and checked verbatim this session; cited as `Fig N :line`. Operators table used for ⋛, → and ¬.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, *"the quotes are the authority, not this summary."*
- World sources read 2026-11-22: Walker et al. 2004 (*Ecology and Society*), MathisonSlee et al. 2022 (*Ecology and Society*), Scheffer et al. 2009 (*Nature*, abstract and captions), the ecological-resilience and resistance-in-ecology reference pages, the resilience-engineering and business-continuity reference pages, the Stockholm Resilience Centre dictionary, and the eight framework essays. Ecology/SES sources are one evidence pool, not several witnesses. Full provenance in `10_source_ledger.csv`.
- Five failure conditions were written before the conclusion (`01` section 5), before the world search was folded into the verdict.
- Packet compiled 2026-11-22.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: a reading *"cannot comment on the source"*; it was the spectrometer, not an argument, that resolved the analogous case. Here:

1. **Source test:** at a fixed peak departure, does a trajectory reading discriminate same-basin return from basin change?
2. **Channel test:** with the transient recorded at full resolution and no pooling, do both readings survive?
3. **Union test:** can the resist decision and the recover decision conflict on one trajectory? If yes, one scalar is demonstrably lossy.

## 6. What an expert can check in twenty minutes

1. Read Fig 13 :36, Fig 12 :30, :121, :125 and :130. Five short passages.
2. Check C2 against a time series you know: drop the transient, saturate the peak, pool the components. Which reading survives each operation?
3. Name one instrument that would distinguish same-basin return from basin change at a fixed peak departure, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.
