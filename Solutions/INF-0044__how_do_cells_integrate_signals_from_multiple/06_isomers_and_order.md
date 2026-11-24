# Isomers and order: the supporting derivation for signal integration

**Mode: `specified` on the structural claims, `general` on the bond algebra, no molecular mechanism named.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The primary audit left two structural questions open. First, are simultaneous combination and step-wise combination different compositions over the same atoms, or is one a harder case of the other? Second, which of the seven bonds is licensed for each, and how would a checker tell? If these are not settled, the shape claim in `07` has no grammar, only vocabulary.

## DOMAIN CENSUS

Atoms held at this level: the pathways themselves as frames, their outputs as quantities, the external condition as ground, and time as an ordered state. Bonds held: the seven, three symmetric (+, ∥, ≡) and four ordered (→, ⇒, −, ⋛), plus the unary negation operator (¬). No new primitive is available without import. The pathway molecules named by cell biology are bindings from another frame, not new atoms in this census.

## DERIVATION

### Q1 — Are simultaneous and step-wise integration isomers?

Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fix an atom set: two pathway outputs, A and B, and one external condition G that does not update. Write the two cases over that set:

- Simultaneous: the decoder receives A and B in one window. The candidate bond is + (both required), ∥ (either suffices) or ⋛ (a threshold or ratio between A and B).
- Step-wise: A arrives, changes the state of the decoder, then B arrives. The candidate bond is → (A then B; B needs A to have happened) or ⇒ (A produces the receptor or scaffold that B needs).

The atom sets are the same. The bonds differ. Under Fig 12 :117 the two are **isomers**, not variants of one thing. The fate difference is *"decisive in the behaviour"* while *"invisible in the formula"*: an ingredient list of the two pathways cannot tell you which case you are in.

Fig 13 :121: **"Different routes can arrive at the same substance."** The converse matters too: the same pair of atoms under different bonds can arrive at different substances. Fig 12 :96: **"Two entries can share every ingredient and be inverses of one another."** A growth signal and a damage signal can produce the same division under one arrangement and arrest under another, and the ingredient list still reads the same.

**Falsifier, written before the result:** if, for a fixed atom set and a fixed external condition, the simultaneous and step-wise cases produce the same outcome under every tested bond, the isomer claim fails. They are then one substance reached twice, not two substances. Recorded as **F-Q1**.

### Q2 — Which bonds are licensed, and what identifies them?

Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**

The six tests separate them. The three that matter here:

| bond | Fig 12 line | test | cell-level reading |
|---|---|---|---|
| + conjunction | :57 *"both hold at once"* | :59 *"swap the operands. Does the meaning change? No."* | an AND decoder: remove either pathway and the fate fails |
| ⋛ comparison | :87 *"a threshold relation between two quantities"* | :89 *"is it about which is larger, rather than both being present?"* | a ratio decoder: the balance of A to B decides |
| → sequence | :72 *"A then B; B needs A to have happened"* | :74 *"swap them. Does it become a different thing? Yes."* | a primed decoder: antigen before cytokine |

Fig 12 :92: **"Symmetry is what decides whether an arrangement is a new thing."** Under +, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!). Under →, different orders are different terms and charging for the sequence is correct. A cell that has a true AND gate does not need an order term; a cell that has a true priming step cannot drop one. Conflating them is the flat-formula error Fig 12 names.

A live type question, kept visible: ⋛ is defined as a threshold between two **quantities** (Operators table :49). A ratio of two pathway activities is a quantity at that level, but whether a background-to-step ratio counts as two quantities under the declared code needs an instrument, not an argument. This is S5 in `01` section 7 and is not smoothed over here.

### Q3 — The decoder as a functional group

Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Across the world literature in `09_watson_answer.md`, several different molecular implementations perform the same structural role: a promoter with two binding sites (Wong et al. 2019), a condensate that decodes dynamic inputs through negative feedback (Meyer et al. 2025), a fold-change detector that compares each input to its own background (Hart et al. 2013), a step-wise chromatin re-routing of a transcription factor (Grassmann et al. 2026). The *kind* is a typed decoder; the *member* is the molecule. That is a functional group under Fig 12 :123. The shape fixes the group; the molecule is the qualifier, supplied by a provenanced import.

This also explains why "cells integrate signals" is a poor search term. It names the functional group and then invites a list of members. Fig 8 :53: **"Residual first, frame second."** Search by the four constraints, not by the member list.

### Q4 — Catalysts and cycles inside the decoder

Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** A scaffold or adaptor that persists across rounds of signalling is a catalyst; a phosphorylated intermediate that is consumed is a spent part. They look like the same ingredient in a single snapshot and behave differently across uses. A static interaction map cannot tell them apart, which is one reason the required instrument is time-resolved.

Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** Negative feedback in a decoder is a cycle with a sign. Meyer et al. 2025 report that co-condensation is *"counteracted by negative feedback from transcription"*, producing an adaptive response suited to decoding dynamic inputs. That is a cycle instance. Fig 12 :121 says the sign decides whether it closes; the measurement decides which sign holds. No figure line supplies the sign for a given cell.

### Q5 — Two currencies, held apart

Fig 12 :125: **"A composition costs in two currencies, and they do not add."** :126: **"Bits price the description. Actions price finding out whether it holds."**

For this question: stating that a cell uses a 5-bond decoder among the seven costs a certain number of bits. Finding out whether it actually does, by time-resolved perturbation with a non-updating ground, costs actions. A short arrangement over a costly reporter is cheap to state and expensive to settle; a long chain of cheap measurements is expensive to describe and may be cheap to refute. Fig 12 :130: **"Summing them into one figure is the error this names, not the fix for it."** A claim that a decoder is "likely" because it is simple is a description-cost argument smuggled in as a settlement. Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

### Q6 — Order at the next scale

Fig 4 :20: **"Only the actors, the currency and the anchor change."** The same loop applies at the scale of a population of cells. A tissue-level decision is a composition of per-cell outputs; if the tissue averages across cell slots, the live slot residual disappears exactly as in Fig 1 :22. The dependency order in `01` section 1.4 holds at that scale too: perception, vocabulary, objective, planning, carry. No new rule is needed, only a new cast. This is a `general` structural claim, not a measured one.

## FALSIFIER FOR THE WHOLE SUPPORTING DERIVATION

**F-Q1 above is the primary falsifier.** In addition:

- If the seven-bond set cannot distinguish two cell-fate outcomes that share the same pathway atoms, the bond grammar is empty for this domain and the shape collapses to an ingredient list.
- If ordering a pair of signals never changes the outcome in a system where the question explicitly asks about arrival times, the ordered-bond part of the claim is refuted for that system.
- If a feedback cycle can be shown to have no sign because feedback is absent at every level, Fig 12 :121 does not govern the decoder and Q4 is withdrawn.

These are written before the conclusion. None has been run here.

## CONCLUSION

Simultaneous and step-wise integration are **isomers over a fixed pathway atom set**: same atoms, different bond, different fate. The licensed bonds are determined by symmetry tests, not by the ingredient list: +, ∥ and ⋛ for order-free combination, → and ⇒ for arrival order, − for inhibition, ¬ for refusal. The decoder is a **functional group**, whose molecular members are provenanced imports. Catalysts, spent parts and signed cycles explain why a static snapshot cannot settle the mechanism. Description cost and action cost stay in two columns.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, the eight essays (opened 2026-11-23), and the world sources in `10_source_ledger.csv`. No cell measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 4 (kernel and cast), Fig 8 (provenance, residual first), Fig 9 (filters versus witnesses), Fig 12 (bond types, symmetry tests, isomer, functional group, catalyst, cycle, two currencies), Operators table (bond definitions and the negation amendment). Strains after re-census: one live type question, the operand type of ⋛ when the operands are fold-change ratios; named in Q2 and carried into `08` and `09`.
