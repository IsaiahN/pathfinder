# Expert verification packet — the Tether on evidence, priors, and perceptual readout

**What this is:** a claim in a form a perception or prediction researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the structural claim, `specified` on the determinant claims, not `grounded`.** No measurement is claimed. This is a shape and a route, not a result.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

A perceptual readout is a per-object residual between a prediction formed from belief and action and the observation that arrived. The interaction is therefore structural; evidence-only and prior-only are limiting cases reached by removing one operand. Whether the readout actually follows evidence, prior, or their gap depends on three separable conditions: a reference that does not move when the perceiver changes, a channel that still delivers current observations, and a residual read per object rather than averaged. There is no scalar that mixes evidence against prior; the framework's weighting mixes two sources of belief, private history and inherited prior. Last, from inside the residual, a prediction that met its evidence and a channel that stopped delivering evidence are indiscernible once the error signal stops.

## 2. Three checkable sub-claims

### C1 — framework-internal, checkable by reading Figures 1 and the Symbols table

- **Statement:** a perceptual readout is the per-slot difference between prediction and observation; interaction is the substrate and the other two options are single operands.
- **Source, verbatim:** Fig 1 :11 "residual R indexed by object slot"; Fig 1 :19 "The residual is indexed by object slot, not aggregated." Symbols table :36-39: "The gap between prediction and observation. The central quantity: everything the system does is driven by it."
- **Refuter:** exhibit a loop whose per-slot readout is a function of only the prediction or only the observation and that still closes against a ground; or show a single-operand term that counts as a molecule under Fig 12's definition.
- **What to check:** is the residual definition applied consistently, and does the limiting-case reading in `06` Q1 follow from Fig 12 :48 and :81-82?

### C2 — domain-facing, checkable by a perception researcher against precision weighting and signal detection theory

- **Statement:** the framework's `w` is prior versus prior, not evidence versus prior. A separate reliability weighting acts on prediction errors, and a channel condition acts on the observation line. There is no single evidence/prior knob.
- **Source, verbatim:** Symbols table :20 "Not the observation"; Symbols table :24-25 "w_A + w_B = 1, and w is learnable from the outcomes of past weightings." Fig 10 :24 "the ground does not decay, the channel does."
- **Refuter:** show a working model in which the same weight that mixes private history and inherited prior also scales the observation against the belief, with `w_A + w_B = 1` still holding over belief sources; or show a demonstrably stale channel whose readout tracks current observations at unchanged fidelity.
- **What to check:** does the distinction between precision weighting of prediction errors and the belief-weighting `w` survive contact with current predictive-processing and signal-detection accounts? The cited pages are in `04` and `10`.

### C3 — framework-internal derivation with a direct experimental consequence

- **Statement:** from inside the residual, a perfect prediction and a closed channel look the same when the error signal stops, so ground contact cannot be certified from the readout alone.
- **Source, verbatim:** `THE_FORMULA.md`, closure: "the loop stops only when R stops arriving, which is either a perfect prediction or a closed channel, and from inside those look the same." Fig 2 :45 "Frames range against the ground. They do not negotiate with it." Fig 10 :27-28 "the output is not a verdict, it is you have lost touch."
- **Refuter:** exhibit a frame that certifies from its own residual alone that it is tracking the ground rather than a closed channel, without importing a reference; or a live-line instrument that reads channel state directly from the readout.
- **What to check:** is this a limit of the readout or an unfalsifiable claim? The packet's answer is the former: it names a specific instrument that would break it. If no such instrument can be described, the claim is unfalsifiable and should be rejected.

## 3. What is explicitly not claimed

- Not that interaction is one of three equivalent options. It is the substrate.
- Not that `w` is the evidence/prior balance. It is belief-source composition.
- Not a brain area, neurotransmitter, cell class, or numerical precision weight.
- Not that predictive processing, the Bayesian brain, or the free-energy principle is true or false. They are secondary witnesses.
- Not that the question is closed. It is open until a ground settles the bindings.
- Not `grounded`. No measurement was taken by this packet.

## 4. Provenance

- Framework figures: Isaiah N, Figures 1 to 13, Operators and Symbols tables. Verbatim extract at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-23.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, local, read 2026-11-23.
- `THE_FORMULA.md` and `THE_SEAT_MAP_Field_Guide_amended.md`, local, read 2026-11-23.
- Essays read directly: "The Hard Problem is About Source" (2026-08-28), "How Intelligence Actually Works" (2026-09-16), "Decoding Tacit Knowledge" (2026-11-10), "The Recursive Self-Improvement Trap" (2026-11-19), all by Isaiah N on adventuresinml Substack.
- World sources opened 2026-11-23: Friston 2010, *Nature Reviews Neuroscience*; Wikipedia articles on predictive coding, Bayesian approaches to brain function, free energy principle, detection theory, unconscious inference, and Kalman filter. Each is in `10_source_ledger.csv` with a quote and an overlap note.
- This packet compiled 2026-11-23.

## 5. What would settle it

1. A **live-line instrument** that reports whether the observation channel is current, independently of the readout. This is the discriminator the color-spectrometer argument calls for.
2. An **anchor-movement test**: does the reference move when the perceiver's belief changes?
3. A **slotting test**: compare global and per-object residuals on the same trials; a global near zero with one live slot decides between C1 and its refuter.
4. A **precision test**: separate reliability weighting of prediction errors from belief-source weighting. This decides C2.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :11, :19 and the Symbols table definition of `R` and `w` (four short passages).
2. Check C2 against their own knowledge: is "no single evidence/prior knob" faithful to current predictive-processing accounts, or does one precision parameter already do both jobs?
3. Name one instrument that would distinguish a live observation line from a closed one, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Recording rule:** the recipient's verdict on stage 1 is recorded before any framework material is shown. Later agreement is never pooled as corroboration (Fig 2 :40). A returned refutation is copied into `11_audit.md` with provenance and re-evaluated by the auditor seat as if it came from any other source.
