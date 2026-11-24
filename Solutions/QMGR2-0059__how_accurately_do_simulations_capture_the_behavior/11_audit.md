# Second-seat audit of the QMGR2-0059 solution

**Mode: `specified`, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same essays, the same astronomy sources, the same folder files. Fig 2 :40 says *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement of any code's error was taken. This audit cannot settle QMGR2-0059.

The material audited is the full primary audit in `01`, read together with `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09` and `10`.

## Independent domain census

I redid the census before reading the primary's conclusions, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The gap between a model prediction for baryons and an observation. Arity: at least three place (model, observation, slot), so not a set but an indexed family. Symmetry: asymmetric, the sky does not update (Fig 2 :33). Scale: sub-parsubgrid, resolved ISM and CGM, galaxy, population, cosmic web. Two conditions (numerical and physical fidelity) with different anchors, so a **union compound** (Fig 9 :57), not one hard question.
- **Domain 1, numerical solver.** Actors: solver, timestepping, resolution. Currency: numerical error. Anchor: test problems and refinement. Admitted.
- **Domain 2, subgrid bonds.** Actors: star formation, feedback, enrichment, dust. Currency: calibrated parameters. Anchor: borrowed from Domain 3; no direct instrument. Admitted, overlaps Domain 3.
- **Domain 3, observational ground.** Actors: telescopes and surveys. Currency: measured observables. Anchor: the sky. Admitted.
- **Domain 4, chaotic ensemble.** Actors: perturbations, round-off, RNGs. Currency: galaxy-to-galaxy variance. Anchor: distributions only. Admitted, overlaps Domain 3.
- **Excluded:** "the simulation alone" (no independent anchor) and "code agreement" (frame-internal, shared pool).

Order by dependency: refuse a single number before reporting one (Formula step 2); settle perception and vocabulary before planning (Fig 3 :20); check convergence before validation but never instead of it; describe the residual before naming a frame (Fig 9 :27-28).

My census matches the primary's four domains, its union reading and its two excluded candidates. Where the primary derived from Fig 1 (per-slot indexing) and Fig 12 (bond structure), I derived from Fig 9's union/partition split and Fig 2's anchor test. Different starting figures, same domain boundaries: low overlap between routes, so the agreement is weak but not circular within the framework. It is still one evidence pool.

## Comparison with primary

I checked each finding of the primary audit against the verbatim figure text and against its own corrected files.

| primary finding | my independent check | agreement |
|---|---|---|
| F1 accuracy is per slot, never one number | Fig 1 :19, :22 and :13 license it; Fig 9 :54 unbundles the question; a global number pools the signal | agree |
| F2 code agreement is not corroboration | Fig 2 :29, :31, :40 and Fig 7 :12; the major suites calibrate to overlapping targets | agree |
| F3 convergence is a gate, not the ground | Formula step 5 and Fig 1 :27; NAFEMS/Oberkampf corroborate the split from engineering | agree |
| F4 subgrid feedback is a bond; codes are isomers | Fig 12 :5, :117 and Fig 6 :21; Crain and van de Voort report the same pattern in gas flows | agree |
| F5 residual sits at the uninstrumented link | Fig 3 :24-27 and Fig 11 :48; subgrid microphysics below the resolution element | agree |
| F6 chaos caps object-level accuracy | Fig 13 :32 and Fig 4 :27; Ludlow et al. report up to 50 percent variance from chaos | agree, instance unmeasured here |
| F7 source discrimination owed | Fig 6 :32, :33 and Fig 8 :39; the source essay and the CGM conclusion point the same way | agree |
| F8 accuracy is simulation-and-observation-contact | Fig 11 :39, :40, :70; a synthetic solve proves wiring, never capability | agree |
| F9 round-trip gap must be reported | Fig 4 :30, :31; van de Sande et al. is the round trip executed | agree |
| F10 "which number for which code" marked gap | Fig 9 :32 returns a kind of thing, not an answer; no ground reading here | agree |
| S1 Fig 13 as a taxonomy of baryons | strained, retracted to honest-stop role | agree with retraction |
| R2 code agreement versus code divergence | re-census: calibration targets versus physical implementation, different quantities | agree with re-census |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked. The full line begins "Correlation has valence." and continues "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"; the quoted span is a substring, not the whole line.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." checked.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." checked.
- Fig 6 :21 "MINT composes inside the closure and can never add an atom." checked.
- Fig 9 :32 "you get a kind of thing, never the answer itself" checked.
- Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom" checked. The full line ends "and there is no bottom"; shorter forms used elsewhere are truncations, not different quotes.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." checked.
- Fig 13 :74 "Everything else is a composition across the two kinds, never within one." checked.
- Fig 13 :75 "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state." checked.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." checked.

All checked lines are present verbatim in the extract. No quote was found to have drifted.

## Round trip gap R_T

The Symbols table defines R_T as `gap(x, (T_E ∘ T_A)(x))`, the gap between what was sent up and what came back down, measuring what the coarser description cannot hold. Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation this folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 1 :19, Fig 2 :29, Fig 12 :117, Fig 4 :30.
2. **Abstraction (T_A):** the shorthand carried in `07` and `09`: accuracy is a per-slot residual; convergence is a gate; codes are isomers; calibration has a gap; an instrument is owed.
3. **Concretisation (T_E):** a concrete accuracy statement about a named code, e.g. "IllustrisTNG matches the observed stellar mass function to systematics, therefore its baryon physics is accurate."

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- the **per-slot indexing** of Fig 1 :19, which the concrete statement collapses into one calibration curve;
- the **isomer distinction** of Fig 12 :117, which the concrete statement erases by treating a matched population as a matched subgrid model;
- the **gate versus ground** rule of Formula step 5, which the concrete statement reverses by letting convergence stand in for validation.

Conversely, one thing survives cleanly: a model prediction and an observation must be compared per slot against an anchor the model cannot move. That is the residue worth sending. R_T was **not** measured numerically, because no independent ground reading is available in this folder; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "matches the calibration statistic" as "matches the galaxy" would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a reported gap, which is what `09_watson_answer.md` states.

## Strains and re-census

- **Fig 13 applied to baryonic components.** The primary's strain S1. Re-census resolves it: Fig 13 governs composition rules and the honest stop, not a classification of gas, stars and dust. Different object, no strain.
- **"The ground" versus "the calibration target."** A calibration target is an instrument that moves when the community changes its fit; the ground is the sky. Resolved by Fig 2 :29-30 and Fig 1 :27. The habitat and the instrument update, the ground does not.
- **Code agreement versus code divergence.** Crain and van de Voort's "enduring successes" reads as agreement; Ludlow's code comparison reads as divergence. Re-census R2 resolves it: agreement is about calibration targets, divergence is about physical implementation. No verdict flipped.
- **NAFEMS V&V as a verdict for astronomy.** Narrowed to a structural corroboration from a low-overlap field. It licenses the union shape, not any astronomical number.
- **After re-census: no unresolved strain.** One live limit is named rather than hidden: no source-discriminating observation is held in this folder.

## Verdict on the solution

**On internal consistency: the solution passes.** The twelve files are consistent with one another and with the verbatim figure text. The retracted moves are applied rather than ignored: the six-term taxonomy is retracted to the honest-stop role, code consensus is kept as a filter only, the accuracy number is marked `gap`, the code-agreement conflict is returned to the census and re-mapped, and the round-trip gap is reported qualitatively. `09_watson_answer.md` carries the full WATSON shape with all verdict fields stated; `10_source_ledger.csv` lists every source actually opened with verified URLs, accessed date 2026-11-23 and local paths where applicable; this file records the independent check. The strongest artifact remains `08_expert_verification_packet.md`: mode, three checkable sub-claims, verbatim lines, refuters and provenance before the conclusion.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the shape is true.

**On the claim: `specified`, ungrounded, candidate.** The shape survives: per-slot residuals against the sky; convergence as a gate; subgrid bonds as isomers; the live residual at the uninstrumented link; chaos limiting object-level claims; a reported round-trip gap; accuracy as simulation-and-observation-contact. Which number belongs to which code is a `gap`, not a silence. Nothing here is settled: a source-discriminating observation, a prospective per-slot accuracy number, agreement at maximum independence, or a zero round-trip gap would be required to move it to `grounded`. Prestige or agreement is not such an instrument.

**Recommendation.** Send the packet with its mode and refuters attached, ask which slot carries the largest live residual and what would refute the shape, and do not pool later agreement as corroboration. Keep the shape claim and the refuter in front of the links.
