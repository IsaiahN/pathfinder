# Arrangement, order and the isomer test for compression

**Mode: `specified` on the shape, `general` on the cited figure rules.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

Two questions are owed after `01_figure_grounded_audit.md`. (Q1) In what exact sense is "what matters" carried by the arrangement rather than the ingredient list, and is that an isomer claim under Fig 12? (Q2) What is the dependency order between stating the relevance criterion, choosing the transform and measuring the gap, and what would break if the order were reversed?

## DOMAIN CENSUS

Atoms held for this derivation: a source X, a representation T, a relevance term Y, and bonds of sequence (→), comparison (⋛), subtraction (−) and identity (≡). No new primitive is available without import. The ground is D3, the use is D4, the frame doing the compression is D2. Union, not partition: the bond between X and T is meaningless without Y.

## DERIVATION

### Q1 Arrangement versus ingredients

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Fig 12 :94: **"The arrangement is the substance."**

Fig 12 :99: **"A bond costs what it could have been, and nothing more."**

Fig 12 :100: **"The price of an arrangement is the choice it records, so it is logarithmic in the number of bonds available."**

A lossy compressor that keeps the ingredient inventory and drops the typed relation has produced Fig 12 :6's *"collapse 6: the flat formula"*. Fig 12 :14-16 names the consequence: **"the ingredients are recorded and the arrangement is not"**, **"nothing downstream can tell them apart, and nothing signals that anything was lost"**. That is precisely the condition under which a bit-count metric reports success while the receiving check fails. So the structural answer to "what information matters" is not a ranking of atoms; it is the bond.

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Two representations over the same atom set, differing only in which typed relation joins them, are isomers in the figure's sense. Their bit counts can be identical because the count records ingredients, while the behaviour differs because the bond differs. The rate-distortion and information-bottleneck sources corroborate from outside: the latter is explicitly a tradeoff between compression and information retained about a relevance variable, which is an arrangement-sensitive quantity, not an ingredient count.

**Falsifier, written before the run:** if two arrangements over the same atoms with different bond types behave identically on the ground under a declared distortion measure and two independent uses, the isomer claim fails. What remains standing is the weaker claim that mattering is a relation to a relevance term (F5, F6), not that the bond is always the carrier.

### Q2 What order is the union?

Fig 3 :20: **"The chain is ordered by dependency, not by importance."**

Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**

Fig 5 :65-66: **"The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."**

Fig 4 :30: **"So take the round trip and measure the gap."**

The legal order is: (1) enumerate what contacts the residual (Fig 11 :43, **"The habitat is enumerated, never composed."**); (2) bind the relevance term as an ordinary term so it accrues a residual and can be refused; (3) state what would count as preservation in effect terms; (4) choose and price the transform; (5) run the round trip and report R_T; (6) let the ground settle. Reversing steps 2 and 4 is the named failure: a transform chosen before the criterion is a link below the break of Fig 3, and Fig 3 :22-23 says **"a reading taken below the break is not a weak reading. It is a reading of nothing."**

Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world"** licenses the recursion: once a relevance term is settled against the ground, it becomes an atom usable at the next level, and the next compression is judged against it. There is no bottom to this and no final room (Fig 7 :6, **"the limit: no last room"**).

### Q3 Two currencies, held apart

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**

Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**

Fig 5 :42: **"The acceptance test is a bargain, not a threshold."**

A rate-distortion curve prices bits against distortion. The MDL two-part code prices the hypothesis and the data given the hypothesis. Neither prices the actions spent establishing that the relevance term was the right one. *Decoding Tacit Knowledge* states the same gap in prose: *"When knowledge gets packed into a few words, the work that built it stays behind"*, and quotes Fig 12 :107, **"Settling compresses the description and not what it cost to establish."** Summing the two currencies into one "efficiency score" is the error Fig 12 :125-126 names, not the fix for it.

**Falsifier for Q3:** a single measure that prices bits and establishing-actions in the same units and whose ranking is invariant to a change in the ground's refusal rate. Then the two currencies do add and Fig 12 :125-126 is wrong for this domain.

## CONCLUSION

The arrangement, not the ingredient inventory, is the carrier of what matters, and two representations over the same atoms with different bonds are isomers under Fig 12 :117. The dependency order is criterion before transform before round trip before settlement, and reversing it puts the claim below the break of Fig 3. Bits and establishment-actions are two currencies that do not add. The isomer claim, the order claim and the two-currency claim each have an explicit falsifier; none is asserted as `grounded`.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and re-checked this session; the eight essays and the public information-theory pages listed in `10_source_ledger.csv`, all opened 2026-11-23. No measurement was taken.

## FIGURE CENSUS

Fig 3 :20, :22-23; Fig 4 :30; Fig 5 :42, :65-66; Fig 6 :14, :22; Fig 7 :6; Fig 9 :27-28; Fig 11 :43; Fig 12 :5, :6, :14-16, :94, :99, :100, :104, :107, :117, :125, :126. Strains after re-census: none hidden. The apparent strain between Fig 12 :107 (settling does not compress what it cost) and the MDL two-part code was dissolved by re-census: one prices actions, the other prices description length, and Fig 12 :125-126 holds them apart.
