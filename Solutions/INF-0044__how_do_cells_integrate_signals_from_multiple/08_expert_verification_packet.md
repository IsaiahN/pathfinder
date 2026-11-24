# Expert verification packet: the Tether on multi-pathway signal integration

**What this is:** a claim in a form a cell biologist, systems biologist or biophysicist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the structural shape, `specified` on the per-domain claims, `gap` on the molecular mechanism. Not `grounded`.** No cell measurement is claimed. This packet is a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

A cell integrating several pathways must satisfy four structural constraints before any molecule is named. The residual stays indexed per pathway, because a scalar aggregate can be near baseline while one pathway carries a large unsolved demand. The relation between pathway outputs is a typed bond, so conjunction, disjunction, sequence and threshold are different substances over the same ingredients. Arrival order is an ordered bond wherever order carries information, so step-wise and simultaneous integration are isomers over a fixed atom set. Conflict is settled by triangulation against a condition that does not move when the cell decides, not by pathways updating on one another; agreement drawn from one evidence pool is a convention, not a verdict about the world. What decays is the channel to that condition, not the condition. The specific protein or circuit is a declared `gap`, returned as a shape and a refuter rather than a name.

## 2. Three checkable sub-claims

### C1 — per-slot indexing, framework-internal and cell-facing

- **Statement:** a single scalar of pathway activity is not a sufficient decision variable when two pathways carry different, live demands. The signal must stay indexed per pathway.
- **Source, verbatim:** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :13 *"a global R near zero with one live slot residual is a legal state"*.
- **What to check:** in a system you know, is there a case where total activity looks unchanged while one pathway is driving a fate switch? If yes, a scalar readout would miss the causal pathway. Would a pathway-resolved time series show it?
- **Refuter:** exhibit a case with two live, conflicting pathways in which collapsing outputs to one scalar preserves every decision-relevant distinction, including which pathway needs attention next. Then C1 fails for that system.
- **Status:** `specified`, triangulated across Fig 1 and Fig 12 :94. Not `grounded`.

### C2 — typed bond and order, the decisive structural claim

- **Statement:** the relation between two pathway outputs carries information the ingredient list does not. Where arrival order carries the signal, the bond is ordered, and simultaneous versus step-wise integration are isomers over the same atoms.
- **Source, verbatim:** Fig 12 :46 *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."* Fig 12 :72 *"A then B; B needs A to have happened"*. Fig 12 :117 *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- **What to check:** for a pair of pathways you know, do the following four perturbations give the same fate: remove one pathway (tests + and ∥), swap the arrival order (tests →), hold total activity fixed while changing the ratio (tests ⋛), and remove the second pathway after the first has fired (tests ⇒ and priming). If all four give the same outcome, the bond carries nothing here. If order matters, the swap perturbation is the cheapest discriminator.
- **Refuter:** for a fixed pathway pair and fixed outcomes, show that conjunction, disjunction, sequence and threshold are observationally equivalent; or show order is inert for every tested pair and that the pre-step background carries no order-dependent information. Then C2 fails.
- **Status:** `specified`, triangulated across Fig 12 and the Operators table. No molecule is asserted.

### C3 — triangulation and the non-updating anchor

- **Statement:** agreement among pathways is not a verdict about the outside world when they share an evidence source. A verdict needs a reference that does not move when the cell decides. A failure of temporal integration is more often channel decay than a change in the ground.
- **Source, verbatim:** Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*. Fig 10 :24 *"the ground does not decay, the channel does"*.
- **What to check:** in your system, do the pathways that "agree" actually read different external conditions, or do they fan out from one ligand? Manipulate the shared upstream source while holding the external condition fixed. Does the decision still track the external condition? Then vary receptor desensitisation at fixed external condition. Does the decision track the receptor instead?
- **Refuter:** show two pathway frames drawing on one evidence pool, with the anchor absent or demonstrably moving, still returning a calibrated world verdict under independent manipulation of the shared source; or show that the external condition changes as a direct consequence of the decision while the pathways remain calibrated to the pre-decision world. Then C3 fails.
- **Status:** `specified`, triangulated on the non-updating requirement across Fig 2, Fig 7 and Fig 8; single-source on the decay asymmetry in Fig 10. Kept separate, not averaged.

## 3. What is explicitly not claimed

- Not a molecular mechanism. No kinase, scaffold, promoter, condensate or rate constant is asserted.
- Not that cells average their inputs. Averaging is one candidate bond, priced by Fig 1 :22.
- Not that one pathway always wins, or that internal cross-talk decides the fate. That is the no-anchor collapse the figures name.
- Not that pathway agreement is corroboration. From one evidence pool it is a convention (Fig 2 :41).
- Not that complex decoders are more capable. Capability is contact with a ground, not component count (Fig 11 :40).
- Not `grounded`. Nothing here is asserted as settled by experiment.
- Not a test of the biology. This is a simulated derivation; only the checker's ground reading can test it.

## 4. Provenance

- Figure text extracted verbatim from Isaiah N's 13 SVGs plus the Operators and Symbols tables: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-23. Cite as `Fig N :line`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, read 2026-11-23.
- Eight essays by Isaiah N, 2026-08 to 2026-11, eight URLs opened and read 2026-11-23; canonical shape mapping in `05_what_shape_means.md`.
- World sources actually opened: Manella et al. 2022 (PNAS, PMC9636907), Hart et al. 2013 (PLOS ONE, PMC3587607), Grassmann et al. 2026 (Immunity, PMC13523785), Kamino et al. 2017 (PNAS, PMC5448168), Meyer et al. 2025 (Nature Communications, PMC12343768), Wong et al. 2019 (Biophysical Journal, PMC6382958), and the Wikipedia "Signal transduction" page. All recorded with author, venue, year, accessed date and quote in `10_source_ledger.csv`. They corroborate the shape and are not figure derivations.
- Primary derivation: `01_figure_grounded_audit.md`; supporting derivation: `06_isomers_and_order.md`; full answer: `07_the_tether_answer.md`; WATSON shape: `09_watson_answer.md`; independent second seat: `11_audit.md`.
- Compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. In *The Hard Problem is About Source*, a reading of green *"cannot comment on the source"*; the spectrometer resolved it. Here:

1. A pathway-resolved, time-resolved reporter that separates the four bond perturbations in C2 while aggregate activity is held flat.
2. An independent external condition that can be manipulated separately from the shared upstream source (C3).
3. A measurement of channel state (desensitisation, saturation, pooled readout) at fixed external condition.
4. An instrument that discriminates among the candidate molecular implementations that currently give the same fate reading. Until one exists, the mechanism is a `gap`.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19 and :22, Fig 12 :46, :72 and :117, Fig 2 :29 and :35, and Fig 10 :24. Eight short passages; do not read the whole framework.
2. Say whether C1 is already settled in your system by a scalar readout, or whether a pathway-resolved signal is needed.
3. Say which of the four bond perturbations in C2 your system has actually been subjected to, and what came out. A blank here is useful information.
4. Name one measurement that would discriminate the candidate mechanisms in your system, or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on. No agreement with it is counted as corroboration (Fig 2 :40).
