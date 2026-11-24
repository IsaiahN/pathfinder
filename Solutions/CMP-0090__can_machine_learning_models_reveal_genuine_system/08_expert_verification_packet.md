# Expert verification packet: mechanism versus correlation in fitted models

**What this is:** a claim in a form a researcher in machine learning for complex systems can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the shape, `specified` on each sub-claim, not `grounded`.** No model was measured here. This is a simulated derivation checked for internal consistency against the figures; it cannot settle the question it reports on.

## 1. The claim, in one paragraph

In-distribution accuracy cannot witness a mechanism, because it is a quantity the training loop also produces. The discriminating observation is the per-slot prediction gap under a changed habitat, taken by a probe that shares no evidence pool with training. Correlation versus mechanism is an ingredients-versus-arrangement distinction: two models over the same variables with different bonds are isomers under Fig 12, invisible in the accuracy formula and decisive under intervention. A benchmark is a substituted habitat, so a solve proves wiring and never capability. The question as posed bundles three conditions and must be split before it is searched. What is offered is the shape a legitimate mechanism-credit must have, falsifiers written in advance, and the instruments that would close it. No model class is certified or barred.

## 2. Three checkable sub-claims

### C1: framework-internal; checkable by reading Figures 1, 2 and 9

- **Statement:** accuracy is a frame-internal budget filter, not a witness for mechanism; the discriminating residual is per slot, under habitat change, from an independent frame.
- **Source, verbatim:** Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 2 :29-30 *"If it moves when you push on it, it is not an anchor."* Fig 2 :31-32 *"Two people reading the same report are not two frames; two instruments pointed at the same thing are."* Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
- **What to check:** do these five lines say what is claimed, and is there any figure line that makes accuracy sufficient for mechanism? (There is not; that is the check.)
- **Refuter:** exhibit a mechanism-scoring rule independent of the training objective whose value predicts intervention survival across habitats, with accuracy as its sufficient statistic; or show a probe sharing the training generator still counts as an independent frame under Fig 2.

### C2: the bond claim; checkable by a researcher against Fig 12 and their own models

- **Statement:** "mechanism" names an arrangement (bond), not an ingredient set. Fig 12 :94 *"The arrangement is the substance."* Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :5 *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Models sharing only a pattern are a functional group (Fig 12 :124 *"the group says what kind; the qualifier says which member"*), not isomers.
- **What to check:** can two of your models share features and in-distribution predictions and diverge under intervention? If yes, which difference in arrangement carries it? Does a feature-importance map capture that difference, or only ingredients?
- **Refuter:** show that two models with the same ingredients and different arrangements behave identically under every intervention once habitat is fixed (isomer claim fails), or that the divergence is already recorded in the flat formula (bond carries nothing).

### C3: the habitat claim; checkable by anyone who has shipped a model

- **Statement:** a held-out test set is a substituted habitat; passing it proves wiring, not capability. Fig 11 :70 *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."* Fig 11 :66-67 *"Isolation is not removal of the habitat. It is substitution of one habitat for another."* Fig 11 :40 *"An improvement that does not change contact changes nothing, however much it improves."* Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
- **What to check:** name one deployment condition your benchmark fails to reproduce, and one thing it unintentionally introduces. Measure `R_T` between benchmark and deployment, even qualitatively.
- **Refuter:** a benchmark that reproduces every deployment condition that matters for the residual, with measured `R_T` of zero. Then the substitution is free and C3 is refuted for that benchmark.

## 3. What is explicitly not claimed

- Not that models cannot reveal mechanisms. The figures give criteria, not a blanket verdict, and no figure line names a model class either way.
- Not that accuracy is useless. It is a budget filter (Fig 9 :60), disqualified only as a mechanism witness.
- Not that feature importance, saliency or probing accuracy is a mechanism. Those are readings, and a reading *"cannot comment on the source"* (*The Hard Problem is About Source*).
- Not that a bigger fixed test set fixes under-specification. More of the same closure adds no atom (Fig 8 :32).
- Not that any model has been measured. This packet is `specified`, not `grounded`.
- Not a theory of everything, no final room, and no claim that the framework certifies its own completeness (Fig 8 :34 *"A frame cannot certify its own limit"*; see `07_the_tether_answer.md` §4).

## 4. Provenance

- Question: `Questions/complexity science.txt` line 109, mapped to CMP-0090, section 9 Modeling, measurement, and reproducibility.
- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim extract from Isaiah's 13 SVGs plus the Operators and Symbols tables, reopened 2026-11-22.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `60_FIGURES_AS_METALAWS.md`, read 2026-11-22.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, read 2026-11-22.
- Secondary, low overlap: Arjovsky et al. 2019/2020 (arXiv:1907.02893), D'Amour et al. 2020/2022 (arXiv:2011.03395), Geirhos et al. 2020 (Nature Machine Intelligence), Ilyas et al. 2019 (arXiv:1905.02175), Chollet 2019 (arXiv:1911.01547), Lapuschkin et al. 2019 (Nature Communications). All opened 2026-11-22; full details and quotes in `10_source_ledger.csv`.
- Secondary, high overlap (framework author): *The Hard Problem is About Source*, *The Library of Babel*, *The Recursive Self-Improvement Trap*, opened 2026-11-22. Their agreement with the figures is expected and carries little independent weight.
- This packet compiled 2026-11-22.

## 5. What would settle it

1. **Intervention test:** a model keeps per-slot residual near zero under a genuinely new habitat, with a probe that shares no data or preprocessing with training and a habitat that reproduces deployment. This refutes the "mainly correlations" side for that model.
2. **Bond test:** same ingredients, different arrangement, identical behaviour under every intervention. This refutes the mechanism side.
3. **Round trip test:** measure `R_T` between benchmark and deployment; a measured zero clears the substitution objection.
4. **Independence test:** two probes with disjoint evidence agree on the mechanism claim; record whether the agreement is convergent derivation or adopted import (Fig 8 :50-53).

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :27; Fig 2 :29-32, :42; Fig 9 :60; Fig 11 :70; Fig 12 :5, :94, :117, :124; Fig 4 :30. Short passages.
2. Check C2 against your own work: do you have a pair of models that share features and predictions and diverge under intervention? What carries the difference?
3. Name one deployment condition your benchmark fails to reproduce, and estimate `R_T` qualitatively.
4. Send the refutation. A failure is more useful than an endorsement. No reply is needed if you would rather not engage.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
