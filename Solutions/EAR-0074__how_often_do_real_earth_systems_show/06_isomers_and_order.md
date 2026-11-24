# Isomers and order: what the four warning signals are to each other

**Mode: `specified`.** This is a simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading.

## RESIDUAL

The field treats AR(1), variance or SD, skewness, kurtosis, flickering and spectral density ratio as alternative indicators of the same thing. Are they the same thing written differently, different members of one kind, or different substances? And in what order do the steps of using one actually run? Two questions are owed: (Q1) the structural relation among indicators, and (Q2) the dependency order of a forecast.

## DOMAIN CENSUS (supporting)

Atoms held: one detrended state variable and its history; a moving window; a numerical summary of that window. Bonds held: sequence (`→`), comparison (`⋛`), negation (`¬`, refusal of a claim), functional grouping. Currency: a trend statistic in bits of description plus the actions needed to test it. Anchor: the realised crossing, per slot (Fig 2 :29). No new primitive is available without import. The population of systems is enumerated, never composed (Fig 11 :43).

## DERIVATION

### Q1 - Are the indicators isomers or a functional group?

Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

AR(1), SD, skewness and kurtosis are computed from the same detrended series over the same kind of window. The atoms are the same; the statistic applied is the bond. Under Fig 12 they are **isomers of one reading**: same atoms, different arrangement, and decisively different behaviour. Gsell et al. 2016 is the check: the four indicators did not move together, AR(1) and SD agreed in only 5 of 16 series, and only one state variable showed the theoretically expected trend in all four. Different substances, one ingredient list.

At the same time they form a **functional group**. "Early warning signal based on critical slowing down" is the kind; AR(1) or SD is the qualifier that picks a member. "Flickering" is a different kind whose members are skewness and kurtosis (Wang et al. 2012; Contosta et al. 2023). The group fixes what kind of claim is being made; the qualifier decides which statistic carries it. Both readings are needed: the isomer reading explains why swapping one for another changes the verdict, and the functional-group reading explains why the field can discuss them under one heading. **Triangulated** (Fig 12 plus the empirical disagreement); mode `specified`.

**Falsifier, written before the run:** if two indicators computed from the same series always move together in every system and every window, they are not isomers in the figure's sense and this reading fails. Gsell et al. 2016 already fires against that falsifier, so the isomer reading survives its first check.

### Q2 - What order does the forecast actually run in?

Fig 3 orders a chain by dependency, not importance: perception, vocabulary, objective, planning, learn and carry. Mapped to EWS:

1. **Perception.** Is anything returning a reading at this sampling rate and noise level? Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**
2. **Vocabulary.** Does the frame have a term for what a slowing recovery affords? Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** Kéfi et al. 2013 shows that slowing down is not specific to catastrophic shifts, so this link has no instrument. This is the break.
3. **Objective.** What counts as a signal, and was the detection threshold fixed before the collapse was visible? Fig 10 :47: **"a convention that decides an outcome has stopped being one"**.
4. **Planning.** Can anyone act early enough for the warning to matter?
5. **Learn and carry.** Was the verdict checked against the ground and carried with its provenance?

Fig 3's rule applies: optimising a link that already works cannot rescue one that does not. Most effort in this literature goes into step 1 and step 3 (better statistics, better detrending), because those have instruments. Step 2 has none and attracts the least attention. Mode `general` for the chain, `specified` for the claim that step 2 is the break; the latter is refutable by an instrument that reads mechanism from the pre-tip series alone.

### Q3 - Which bond carries the decision?

The Operators table defines `⋛` as *"a threshold relation between two quantities"* with the test *"is it about which is larger, rather than both being present?"* A detection rule is a comparison: the trend statistic is larger than a threshold. `→` is wrong here, because a trend over time is a sequence inside the series, not the bond between the statistic and the decision. `+` is wrong, because it would record both the statistic and the threshold as merely present without saying which is larger.

So the decision is `statistic ⋛ threshold`, and the threshold is a convention. Fig 10 :47 then applies directly: when the threshold is chosen after the outcome is known, the convention has decided the outcome. Boettiger and Hastings 2012 is the worked case. Mode `specified`; falsifier: a pre-registered threshold whose verdict is unchanged on stable controls.

### Q4 - Why the frequency is a subtraction, not a sum

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** The count of signals across systems is a subtraction: observed hits minus what a stable surrogate would produce (Contosta et al. and Gsell et al. both use surrogate or control logic). It is not the sum of hits. A reported 14 of 16 series with at least one indicator is not a success rate until the false-positive count is subtracted; Gsell et al. then report that only three of 64 trend tests were significant in more than half of the surrogate comparisons. `THE_FORMULA.md` calls progress a subtraction; here the subtraction is the whole measurement.

**Falsifier:** a study that reports a raw hit count as a success rate without a control or a surrogate and shows that the control makes no difference would refute this reading.

## CONCLUSION

The four classic indicators are isomers of one reading and members of two functional groups (critical slowing down; flickering). That structural fact explains the empirical finding that they disagree: same atoms, different bond, different substance. The forecast runs as a dependency chain whose middle link, the vocabulary that says what a slowing recovery means, has no instrument; that is where the claim breaks, not in the statistics. The decision itself is a comparison bond against a convention, so a post-hoc threshold is a convention deciding an outcome. The population frequency is a subtraction against a control, never a bare count, and a filter for a budget, never a witness.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Empirical checks: Gsell et al. 2016, Kéfi et al. 2013, Wang et al. 2012, Contosta et al. 2023, Boettiger and Hastings 2012, all opened 2026-11-22 and listed in `10_source_ledger.csv`. No measurement was taken in this derivation.

## FIGURE CENSUS

Fig 2 (anchor), Fig 3 (dependency order), Fig 6 (instrument improvement), Fig 9 (filters vs witnesses), Fig 10 (convention that decides), Fig 11 (habitat enumerated), Fig 12 (isomer, functional group, bond), Operators table (`⋛` type), `THE_FORMULA.md` (progress as subtraction; cited as a local doc, not a figure line). Strained after re-census: none. The apparent conflict between "same atoms" and "different indicators" resolves because isomer and functional group are two readings of the same arrangement at different levels, as Fig 12 itself states.
