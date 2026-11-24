# Expert verification packet: early RNA replication fidelity

**What this is:** a claim in a form a specialist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` - not `grounded`.** No measurement of a fidelity band is claimed. This is a shape and a route, not a result. Simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

"Copy accurately enough to persist but inaccurately enough to evolve" is not one optimisation problem with a best error rate. It is a union of two conditions at the handoff between generations: the information that made the molecule a replicator must survive the copy, and the next generation must differ from the last so the habitat can vote between variants. In the figures' terms, progress per handoff is the product of the bracket's fidelity and the ground's pressure on the room; zero either factor and the chain runs in place. Too faithful, and a copy is an identity bond, a mirror that adds no new term. Too loose, and the copying channel loses contact with what worked, the remainder compounds, and the population disperses. Errors are per-site residuals, not a global average. The framework returns the shape of the answer, a band with two named failure edges, not a critical mutation rate. The number, when used, is a provenanced import and is conditional on the fitness landscape.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figure 7

- **Statement:** progress per generation is a product of two factors, the bracket's fidelity across the handoff and the ground's pressure on the room. Zero either and the chain runs in place. A perfect copy is a mirror chain with motion but no progress.
- **Source, verbatim:** Fig 7 :26 *"Progress per handoff: R = h² × S"*; Fig 7 :37 *"Progress per handoff has two factors. Zero either and the chain runs in place:"*; Fig 7 :38 *"the bracket's fidelity across the handoff"*; Fig 7 :39 *"the ground's pressure on the room"*; Fig 7 :36 *"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."*
- **Refuter:** show a system with positive per-generation progress when bracket fidelity is measured at zero, or when the habitat applies no differential pressure, or a perfect-copy system that still generates adaptive heritable novelty with no external source of novelty.

### C2 - chemistry-facing; checkable by a ribozyme or origins-of-life researcher

- **Statement:** a copying error is a residual on a nucleotide slot, not a global scalar. The information that worked is carried forward by the channel; the channel, not the ground, decays. The two failure regimes are isomers of the copying relation: identity at the stasis edge, noisy production at the dispersal edge.
- **Source, verbatim:** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*; Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*; Fig 10 :24 *"the ground does not decay, the channel does"*; Fig 13 :31 *"because each turn leaves a remainder (the residual) that re-enters the next, it is also where the randomness comes from"*; Fig 12 :117 *"isomer. Same atoms, different bond, different substance."*
- **What to check:** in a real templated ligation or polymerisation system, does the per-site error distribution, rather than the mean error rate, determine which information is lost? Do catalytic sites and neutral positions behave as different slots? Is the failure at high fidelity a loss of heritable variation, and at low fidelity a loss of localisation about a master sequence?
- **Refuter:** show that the global mean error rate is sufficient to predict both persistence and evolvability, with per-site indexing adding nothing; or show a system where bracket fidelity is zero and the information that worked is nevertheless retained.

### C3 - population-facing; checkable against quasispecies theory

- **Statement:** the numeric threshold is an import from a different frame, not a figure result, and its sharp form is landscape-conditional. The band's shape stands even where the sharp threshold is absent, because zero either factor still stops the chain.
- **Source, verbatim:** Fig 8 :50 *"Convergent derivation and adopted import look identical in the contents."*; Fig 8 :51 *"Only the record of where each came from separates them, and the surplus lives only where the closures differ."*; Fig 9 :32 *"you get a kind of thing, never the answer itself"*. World source, opened 2026-11-23: Wilke (2005), BMC Evolutionary Biology 5:44: *"Eigen described the error threshold in his 1971 paper as a limit to the amount of information a genome can store at a given mutation rate."* Same source on conditionality: *"the condition for the existence of an error threshold is precisely the complete absense of lethal genotypes"* [spelling as published].
- **What to check:** is the Master sequence localisation in the system's landscape the relevant analogue? Does the system have lethal genotypes, which would remove the sharp threshold? Is the reported critical mutation rate a derived model quantity or an imported number?
- **Refuter:** demonstrate a sharp error threshold in a landscape with lethal genotypes under the stated assumptions, or derive the critical mutation rate from the figures alone.

## 3. What is explicitly not claimed

- Not a critical mutation rate, and not a derivation of μ_c from the figures.
- Not a universal sharp threshold. Landscape conditionality is stated in C3.
- Not a design or a maintainer. The prebiotic case is the unmaintained mode: nothing selects in the seat sense, but the habitat settles which variants remain.
- Not a laboratory demonstration of a sustained evolutionary system. A synthetic harness proves wiring, not capability (Fig 11 :70).
- Not `grounded`. Nothing here is asserted as settled by experiment.
- Not an isomer claim about two different molecules. The isomers are two regimes of one copying relation, same atoms and different bond.

## 4. Provenance

- Figure text: verbatim extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened 2026-11-23. Every `Fig N :line` quote above is from that file.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Supporting derivation: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`.
- World sources opened 2026-11-23: Obermayer and Frey 2010 (arXiv:1003.1304v2; J Theor Biol), Wilke 2005 (BMC Evol Biol 5:44), Shannon noisy-channel theorem (Wikipedia summary of Shannon 1948), March 1991 (Organization Science 2(1)), Smith 2025 (Open Encyclopedia of Cognitive Science, MIT Press), and four essays by Isaiah N. Each is recorded in `10_source_ledger.csv` with a quote and an overlap estimate.
- Compiled 2026-11-23.

## 5. What would settle it

A serial-transfer experiment with measured per-site fidelity and a habitat applying differential pressure. It must report which nucleotide slots carry positive error mass, whether the population localises about a master sequence or disperses, whether the next generation differs heritably, and what kind of fitness landscape is in play. An instrument that discriminates error sources is also owed, because a measured rate does not by itself name its source.

Standing falsifiers, written before the run: a perfect-copy system that still evolves without external novelty; positive progress with either factor at zero; a re-census showing the handoff line governs another quantity; a system that keeps information and evolvability where the threshold predicts dispersal under the threshold's stated preconditions.

## 6. What an expert can check in twenty minutes

1. Read Fig 7 :26 and :37-39, Fig 1 :19, Fig 10 :24, and Fig 12 :117. Five short passages.
2. Check C2 against what you know of templated RNA copying: is the per-site distribution, not the mean, what decides which information survives?
3. Check C3 against the landscape of the system you work with: are there lethal genotypes, and is a sharp threshold expected at all?
4. Name one measurement that would show whether the bracket survived a handoff. Or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
