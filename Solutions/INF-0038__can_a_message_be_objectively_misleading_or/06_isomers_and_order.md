# Isomers, union compounds and order - supporting derivation

**Mode: `general` on the structural claims, `specified` on the predictions. Not `grounded`.** Simulated derivation checked against the figures (see `05_what_shape_means.md` §6).

## RESIDUAL

Can the difference between "false and misleading" and "true but misleading" be written as a structural difference inside the figures, and what order must the derivation run in? Three questions are owed: (Q1) are these two cases isomers under Fig 12; (Q2) what is the order of the union compound; (Q3) what is the lowest-overlap analogue.

## DOMAIN CENSUS

Atoms held: message tokens, world facts, receiver prior, context. Bonds held: seven bonds plus negation; the relevant ones are `+` conjunction (symmetric), `→` sequence (ordered), `−` subtraction (ordered), `⋛` comparison (ordered), and `¬` negation (unary). No new primitive is available without import.

## DERIVATION

### Q1 - Are "false and misleading" and "true but misleading" isomers?

- Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :94: **"The arrangement is the substance."**
- Write case A (false content): tokens t, world-fact w with `¬(t ≡ w)`, receiver uptake u. Write case B (true content, misleading implicature): the same tokens t, world-fact w with `(t ≡ w)`, but an added arrangement bond between t and context c that produces u.
- Under the figure's definition, if the atom sets are the same and the bond that produces the uptake differs, the two are **isomers**: same atoms, different bond, different substance (different receiver consequence). The "formula" that lists tokens and a truth value cannot tell them apart; the bond carries the difference.
- **Falsifier, written before the run:** if case B requires an atom absent from case A (for example a distinct "implicature" primitive that is not a bond over held atoms), the isomer claim fails and the two cases are different substances in the ordinary sense, not isomers. Test by attempting to write B using only held atoms and bonds.
- Verdict: `specified`, single-source for the figure definition, with the pragmatics source in WORLD as an independent low-overlap witness that a true statement can mislead while remaining linguistically flawless.

### Q2 - What is the order of the union compound?

- Fig 9 :4: **"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."**
- Condition one: content accuracy (m versus W). Its ground is the facts, checkable. Condition two: uptake (m versus receiver-in-context). Its legitimate anchor is human judgment because the question is constitutively about people (Fig 2 :36-38).
- Fig 9 :54-58: a bundled problem that lands on a union rather than a partition must be unbundled; what remains is "a specific compound", not a harder case of either condition (paraphrase of the seat map's union law).
- Dependency order: settle condition one where possible, then assess condition two, then adjudicate. Refusal before mint (Formula step 2): refuse the term "objective misleadingness" before minting any new metric to replace it.
- **Falsifier:** if a single instrument settles both conditions at once without fixing a reference audience, the union split is unnecessary and this order is wrong.
- Verdict: `general`, triangulated (Fig 9 :4 and the local seat-map union law, two low-overlap framings of the same rule).

### Q3 - What is the lowest-overlap analogue?

- Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."** Fig 11 :50: **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."**
- Animal-signalling research reaches the same grammar from a completely different evidence pool: functional deception is defined by a signal, a receiver's adaptive response, and the absence of the condition the signal implies. No mental state is required, and the signal is not deceptive "in itself". This is corroboration at maximum independence from the misinformation literature.
- **Falsifier:** if a signal can be shown to carry its deceptive valence across all receivers and conditions (invariant), the relation/kind claim fails in the analogue and is weakened here.
- Verdict: `general` structural claim, triangulated across Fig 11 and the animal-behaviour source (low overlap). The source is world evidence, so it corroborates rather than decides.

### Q4 - What is the right bond vocabulary for the wasted case?

- `A + B + C` with only a flat formula is the "flat formula" collapse of Fig 12 :6-16: the ingredients are recorded and the arrangement is not, so nothing downstream can tell three different changes apart.
- For messages, a fact-check that records only sentence truth is the flat formula. It cannot distinguish false content from true content under a misleading implicature, because the arrangement was not recorded.
- Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."** So a vocabulary holding only truth values can say what a sentence contains and cannot say how it got its uptake.
- **Falsifier:** if a truth-value-only record fully predicts receiver uptake across contexts, the flat-formula diagnosis is refuted.

## CONCLUSION

The two headline cases are a real isomer claim under Fig 12 if and only if they can be written over the same atom set with a different bond; the falsifier is stated and unrun. The compound is a union that must be split before search (Fig 9 :4), and the dependency order is accuracy, then uptake, then adjudication. The relation/kind grammar of Fig 11 is corroborated at maximum independence by animal signalling. No new primitive, no import that moves the wall, and no naming of a right audience is required.

## ANCHOR

Verbatim figure text from the 16 canonical files under `FRAMEWORK/`; no measurement was used. World corroboration is from the sources listed in `10_source_ledger.csv`.

## FIGURE CENSUS

Fig 1 (slot indexing), Fig 2 (anchor test, legitimate anchor), Fig 8 (low-overlap surplus, provenance), Fig 9 (split union compounds, describe before looking), Fig 11 (valence relative to residual, relations not kinds), Fig 12 (isomer, arrangement is substance, flat-formula collapse, vocabulary without bonds), Operators table (bond types), Formula (step 2 refusal, step 5 settlement). Strained after re-census: none. The Q1 isomer claim is conditional on the falsifier and is marked `specified`, not promoted.
