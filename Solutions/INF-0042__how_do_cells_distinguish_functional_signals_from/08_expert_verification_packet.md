# Expert verification packet - the Tether on signal versus noise in cells

**What this is:** a claim in a form a cell-signalling researcher can check. Mode, derivation and refuters are stated before the conclusion.

**Mode: `specified` on the shape, `general` on the structural rules, `gap` on the molecular mechanism. Not `grounded`.** No measurement at the bench is claimed. This is a simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §6).

## 1. The claim, in one paragraph

A receptor reading cannot name its own source. So any working discriminator must (1) resolve events per receptor class and per object slot, not through one global mean; (2) range against a ground that does not move when the cell's model moves, namely what the response pays; (3) use a time comparison or a second channel that does not share the same fluctuation; and (4) pay in two currencies, bits and actions, that do not add. Noise is the detail a lossy crossing discards, so signal and noise can be isomers over the same atoms. The framework returns this shape, a set of pre-registered refuters, and the instruments that would close it. It does not name a pathway.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 1, 2 and 13

- **Statement:** a single reading is underdetermined; detection must be per slot and must range against an anchor that does not update.
- **Verbatim figure lines:**
  - Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
  - Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*
  - Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
  - Fig 13 :32 *"the detail a crossing discards reappears above it as noise."*
- **What to check:** did I keep the per-object and per-step axes distinct? Temporal averaging of one receptor is permitted; collapsing distinct receptor classes into one scalar is not. Does the anchor claim survive the case of a cell that changes its own environment? (If it does not, the correct response is a re-census adding a coupled habitat domain, Fig 11 :73 *"The habitat is not the ground."*)
- **Refuter:** a cell that discriminates a novel signal from a fluctuation from one instantaneous reading of one receptor, with no time comparison, no second channel, and no contact with a penalising ground.

### C2 - biology-facing; checkable against the literature

- **Statement:** the four constraints are instantiated by known mechanisms, but none of them is the framework's answer. Kinetic proofreading supplies a delay plus dissipation; Berg and Purcell supply the time and receptor-count precision bound; intrinsic/extrinsic splitting supplies an independent-channel instrument; feed-forward loops supply persistence detection and response acceleration.
- **Verbatim figure lines behind the prediction:**
  - Fig 3 :5 *"the system can tell what is in front of it, and tell it apart from what was there before"*
  - Fig 2 :31 *"Independence, between two frames, is how little they draw on the same evidence."*
  - Fig 12 :125 *"A composition costs in two currencies, and they do not add."*
- **What to check:** are these characterizations faithful? Hopfield 1974: *"can be increased above the level available from free energy differences in intermediates or kinetic barriers by a process defined here as kinetic proofreading."* Berg and Purcell 1977: *"Statistical fluctuations limit the precision with which a microorganism can, in a given time T, determine the concentration of a chemoattractant."* Elowitz 2002: *"Both stochasticity inherent in the biochemical process of gene expression (intrinsic noise) and fluctuations in other cellular components (extrinsic noise) contribute substantially to overall variation."* Mangan and Alon 2003: coherent feed-forward loops *"act as sign-sensitive delays"* and incoherent ones *"act as sign-sensitive accelerators"*.
- **Refuter:** a discriminator with zero delay, zero dissipation above equilibrium, and zero extra description length achieving arbitrary specificity for near-cognate ligands; or a proof that a two-channel discriminator gains nothing when the channels are demonstrably independent.

### C3 - framework-internal derivation

- **Statement:** signal and noise are isomers over the same atoms (Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*), and the minimum bond set is `+` for the reading, `→` for delay, `⋛` for the goal, `−` for fluctuation removal, and `¬` for refusal. See `06_isomers_and_order.md`.
- **Verbatim figure lines:** Operators table :30 *"A then B; B needs A to have happened"*; Operators table :48 *"a threshold relation between two quantities"*; Operators table :73 *"Negation is the refusal of a claim."*; Fig 12 :125 *"A composition costs in two currencies, and they do not add."*
- **Refuter:** a case where signal and noise in the same context can be separated by their ingredient sets alone, with no reference to ground, time, or cell state; or a case where reversing delay and comparison leaves both the response and its cost unchanged, which would show the ordered bonds are doing no work.

## 3. What is explicitly not claimed

- Not a named molecular pathway. The framework returns a shape, not a mechanism name (Fig 9 :32 *"you get a kind of thing, never the answer itself"*).
- Not that the figures derived kinetic proofreading, feed-forward loops, or receptor arrays. Those are provenanced imports from the biology frame.
- Not that all cells use one discriminator. The question is a union compound; the answer is a family.
- Not that "noise" is a class of molecules. It is the discarded detail of a crossing.
- Not that more receptors always help. Independence is the parameter; two channels sharing a fluctuation are one witness.
- Not `grounded`. No measurement is claimed, and this packet cannot settle the question it reports on.

## 4. Provenance

- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim extract, local, read 2026-11-23). Every `Fig N :line` citation above is from this file.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md` (local).
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md` (local).
- Eight essays by Isaiah N, 2026, listed in `05_what_shape_means.md`.
- World sources actually opened, with author, venue, year, quote and overlap: `10_source_ledger.csv`. Principal ones: Hopfield, PNAS 1974; Thattai and van Oudenaarden, PNAS 2001; Mangan and Alon, PNAS 2003; Berg and Purcell, Biophysical Journal 1977; Tostevin and ten Wolde, Phys Rev E 2010; Elowitz et al., Science 2002; Swain et al., PNAS 2002; Boeger, Annual Review of Biochemistry 2022; Alon, Nature Reviews Genetics 2007.
- Compiled 2026-11-23. Simulated derivation, not a ground reading.

## 5. What would settle it

A ground reading, not agreement. Useful discriminating experiments already named in the literature: perturb the delay step and test whether specificity falls as proofreading predicts; split intrinsic from extrinsic noise with two identical reporters and test whether the independent-channel constraint holds; drive the input with trajectories rather than steps and test whether the discriminator's ranking changes; use persistence versus pulse stimuli to separate the circuit motifs. Agreement among readers selected for receptiveness is not such an experiment (Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*).

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19 and :28, Fig 2 :29 and :31, Fig 13 :32, Fig 12 :117 and :125. Six short passages.
2. Check C2 against your own knowledge of signal transduction: are the four characterizations faithful, or is one of them a stretch?
3. Name one experiment that would distinguish a per-slot discriminator from a global-mean one in your system, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
