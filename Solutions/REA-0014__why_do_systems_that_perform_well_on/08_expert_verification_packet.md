# Expert verification packet: the Tether on benchmark robustness

**What this is:** a claim in a form a robustness researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the structural shape, `specified` on the transfer prediction, not `grounded`.** No effect size is claimed. This is a shape and a route, not a measured result.

**Status:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

A familiar benchmark is a substituted habitat, not a measure of capability. A high score in it proves that the system's wiring works in that habitat; capability itself is a property of the system and the habitat together, so a small change of context can collapse task success while the old score stays reportable. The score may saturate while the channel to the ground quietly dies, and the evaluation room usually stays fixed while the question moves, which makes the high score a symptom of the fixed room rather than a verdict about the system. Continuing to compose inside the same training frame cannot reach what the frame never held. The honest measure of the difference is the round trip from score to deployment and back, its gap `R_T`, which this packet requires be measured rather than assumed. The shape is offered with five pre-registered refuters and no named culprit.

## 2. Three checkable sub-claims

### C1: framework-internal and conceptual; checkable by reading Figures 11, 4 and 10

- **Statement:** a benchmark is a substituted habitat; its score proves wiring, not capability; capability is agent-and-habitat; when the question changes and the room does not, the score is a symptom.
- **Source, verbatim:** Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Also Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Fig 10 :72: "When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom."
- **What to check:** are these three sentences present in the figure text, and does the inference from them to the claim commit a category error (for example, treating a property of the pair as a property of the agent)?
- **Refuter:** show an isolated improvement that changes no contact, habitat or instrument and yet raises capability in a genuinely changed habitat; or show that the benchmark is the ground for the generalization question itself so an unchanged score means no residual exists.

### C2: empirical and checkable against the literature

- **Statement:** the five conditions named in the audit (shortcut cue, underspecification, metric saturation, habitat substitution, missing vocabulary) overlap as a union compound; a single lever clears only the single-condition regions.
- **Source, verbatim:** Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
- **What to check (world evidence, secondary only):** Geirhos et al. 2020 report "Shortcuts are decision rules that perform well on standard benchmarks but fail to transfer to more challenging testing conditions, such as real-world scenarios." D'Amour et al. report an underspecified pipeline "can return many predictors with equivalently strong held-out performance in the training domain." Lapuschkin et al. observe that "standard performance evaluation metrics can be oblivious to distinguishing these diverse problem solving behaviors." Do these three findings describe overlapping conditions rather than one?
- **Refuter:** demonstrate that the five conditions are independent in a controlled study, so a partition model predicts transfer better than a union model; or show a single lever that clears the intersections as well as the single-condition regions.

### C3: methodological and checkable by designing an experiment

- **Statement:** the difference between the in-domain score and out-of-domain contact is a round-trip gap `R_T` that must be measured; it is not an error term to tune away.
- **Source, verbatim:** Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Fig 4 :31: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."
- **What to check:** can the abstraction (score in C0) and the concretization (contact in C1) be specified so that `gap(x, (T_E ∘ T_A)(x))` is an estimable quantity? If not, say why. The value has not been measured anywhere in this packet.
- **Refuter:** a real habitat change for which the round trip is information preserving for the capability of interest, giving `R_T = 0`; or a demonstration that the gap is dominated by irreducible noise and carries no information about transfer.

## 3. What is explicitly not claimed

- Not a measured effect size, and not a specific failure mechanism.
- Not that benchmarks are useless. A benchmark is a legitimate budget filter, and it is the ground when the question is constitutively about it (Fig 2 :36).
- Not that more data or harder items never help. They help when the needed term is in the closure and unfound.
- Not that agreement among reviewers, citations or prestigious venues corroborates the claim. Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool."
- Not `grounded`. Nothing here is asserted as settled by experiment.
- Not a claim that the framework can name the missing cue. It returns a shape, not a name.

## 4. Provenance

- Primary authority: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim figure text with line numbers; citations checked character by character on 2026-11-23.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. Seat rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`.
- Essays by Isaiah N, 2026: *The Library of Babel*, *The Hard Problem is About Source*, *The Recursive Self-Improvement Trap*, *Decoding Tacit Knowledge*; opened 2026-11-23 and quoted in `05_what_shape_means.md`.
- World papers: Geirhos et al. 2020, D'Amour et al. 2020, Koh et al. 2020, Lapuschkin et al. 2019, Geirhos et al. 2018, Ben-David et al. 2010; full URLs, dates and quotes in `10_source_ledger.csv`.
- This packet compiled 2026-11-23. No measurement was taken.

## 5. The five pre-registered refuters, in full

Written before any conclusion (Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device"):

1. A benchmark score predicts performance under arbitrary small context changes as well as a direct measurement of contact with the changed habitat.
2. A system improved in isolation, with no change of contact, habitat or instrument, becomes more capable in a changed habitat.
3. The benchmark is shown to be the ground for the generalization question, so an unchanged score means there was no residual.
4. Composition inside the training closure reaches the term that predicts the new context, with no new habitat and no new instrument.
5. A round trip from score to deployment and back loses nothing for the capability of interest, giving `R_T = 0`.

If any fires, the corresponding part is withdrawn.

## 6. What an expert can check in twenty minutes

1. Read Fig 11 :70, Fig 11 :39, Fig 10 :72 and Fig 4 :30 (four short passages). Confirm or deny C1 as a reading of those lines.
2. For C2, name one of the five conditions you have actually measured and say whether it overlapped with another in your data. A single counterexample to the union claim is enough.
3. For C3, sketch how you would estimate `R_T` in your own system, or say why the abstraction/concretization pair cannot be specified.
4. Try one of the five refuters. A failure is more useful than an endorsement.

**Status of this packet:** simulated derivation, internally consistent with the figures, not a ground reading. It cannot settle the claim it reports on. Send the claim and its refuter in front of the links, and do not pool later agreement as corroboration.
