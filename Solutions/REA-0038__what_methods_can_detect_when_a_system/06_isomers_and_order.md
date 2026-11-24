# Are the detector families isomers? Order, currency, and analogues

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground
reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The figures give the shape of a source-discriminating detector but not a single name. Three method
families in the world answer parts of it: ground-checked calibration, signal detection theory, and
conformal prediction. Two questions are owed: (1) are these **isomers** under Fig 12, that is the
same atoms arranged differently, or merely members of one functional group; and (2) in what
**order** must their operations be run? A third question follows from Fig 12 :126: are the two
currencies, description cost and action cost, being held apart?

## Five-line proposal header

```
DECIDES:    If the families share one atom set and differ only in bond, treat them as isomers and
            keep their verdicts separate (A = B is false: ECE under exchangeability is not SDT
            under a manipulated base rate, nor conformal coverage under shift). If one family
            requires an atom the others do not, treat it as a different compound and re-census.
HOURS:      1 to 2 hours per family to check the atom set against public sources; the action-cost
            column is kept apart from the bit-cost column (Fig 12 :126-127).
PRIOR CASE: The exemplar QMGR-0037, where GR and QM cores were first-order derivatives over one
            six-term set and their comparison was second-order; no detector-shaped prior case found
            in Logs/derivation_log.md this session.
ANALOGUE:   Signal detection theory: actors = observer and signal distribution, currency = hit and
            false-alarm rates, anchor = the payoff and base rate the observer cannot move by
            deciding to feel confident. It maps by relation, not by appearance.
LIMIT:      At 1,300 questions and one shared atom set, does the isomer check stay flat? Only if
            each solution re-censes its atoms rather than inheriting the exemplar's. Otherwise
            agreement compounds and evidence does not (Fig 7 :13).
```

## DOMAIN CENSUS

Atoms in play, none new: a per-slot reading `R_s`; a ground that does not update; a marginal that can
be changed; a second low-overlap reading; a provenance record. Bonds in play: `→` sequence, `⋛`
comparison, `≡` identity, `¬` refusal. The Operators table defines `⋛` as *"a threshold relation
between two quantities"*. No new primitive is available without import.

## DERIVATION

### Q1. Are the three families isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is
invisible in the formula and decisive in the behaviour."**

Write each family over the shared atom set:

| family | arrangement over the atoms | bond that carries it |
|---|---|---|
| ground-checked calibration | reading → ground → per-slot residual | `→` sequence, with `⋛` for the confidence-outcome comparison |
| signal detection theory | second reading ⋛ first reading, against a fixed base rate | `⋛` comparison between sensitivity and criterion |
| conformal prediction | reading + fresh calibration data → set with coverage, checked under shift | `→` sequence plus `⋛` for the coverage check |

All three use the same five atoms. They differ in which bond does the work and in what is compared.
By Fig 12's definition they are **isomers**: same atoms, different arrangement, different
behaviour under a changed marginal. This is `triangulated` for the structure (Fig 12 plus Fig 2's
independence rule) and `single-source` for the specific mapping of each family, which comes from
the opened sources in `09`, not from the figures.

**Falsifier, written before the run:** if any one family requires an atom the other two do not, for
example a ground whose value is determined by the model's own confidence, the isomer claim fails and
the families are different compounds, not variants of one thing.

### Q2. What is the order of operations?

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The dependency order is
perception to vocabulary to objective to planning to learn and carry. Mapped onto the detector:

1. **Perception:** can we read confidence and outcome per slot at all? If not, nothing downstream
   can be diagnosed (Fig 3 :22, *"A step whose input never arrives cannot be diagnosed, only its
   predecessor can."*).
2. **Vocabulary:** do we have separate terms for prior-driven and evidence-driven confidence? This
   is the middle link with no instrument (Fig 3 :26), and it is where the field is stuck.
3. **Objective:** what counts as a failure? Answer in advance: confidence that follows the marginal
   when the per-case evidence is held fixed.
4. **Planning:** which probe? This is where formula step 7 splits into three distinct questions.

Formula step 7: ask **SEARCHED** first, *"is it in here and unfound? The closure does not change:
same atoms, same wall, more of the space actually visited."* In this case: collect more calibration
data. If the residual persists, ask **INWARD**, *"extend the instrument, from one already returning
something. Sharpen in our own terms."* In this case: separate sensitivity from bias, or conformalise
the score. Only then ask **OUTWARD**, *"IMPORT. Characterize R in effect terms, then find the frame
whose closure predicts its shape."* In this case: import the base-rate manipulation from medical
decision making. INWARD and OUTWARD are opposed and are never read against one another.

The order is part of the specification, not a matter of taste (seat reasoning move 9, *keep the
order*). Reversing it, by importing a frame before describing the residual, is Fig 9 :28, *"any
frame you pick will seem to fit."*

### Q3. Are the two currencies held apart?

Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."** Fig 12 :127:
**"They are in different units, so a system holding one accounting cannot compare them and will not
notice the shortfall."**

A confidence scalar is cheap in bits and nearly free in actions: it comes out of the forward pass.
A marginal-shift experiment is cheap to describe and expensive to run: it needs a new data regime,
an outcome counter, often a real intervention. A calibration report that counts only bits will
propose arrangements it cannot afford to test. Fig 12 :130: *"Summing them into one figure is the
error this names, not the fix for it."*

So the detector specification must carry **two columns** and must not add them:

- **Bit cost:** how much description the method adds (one scalar, an interval, a set, a lineage).
- **Action cost:** what must be spent to find out whether it holds (fresh outcomes, a changed
  marginal, a second frame's independent measurement).

`triangulated` (Fig 12 plus Fig 9 :60, *"Use filters for the budget and witnesses for the verdict"*).
Mode `general` for the two-currency rule, `specified` for the detector.

### Q4. Do the analogues transfer by structure or by appearance?

Following the living-system test (Fig 4 :19-20, *"Only the actors, the currency and the anchor
change."*):

| analogue | actors | currency | anchor | what transfers |
|---|---|---|---|---|
| Signal detection theory | observer, signal and noise distributions | hit and false-alarm rates, `d′`, criterion `c` | payoff and base rate, which the observer's confidence cannot change | the separation of sensitivity from bias; one scalar conflates them |
| Medical base-rate problem | clinician, test, patient | prevalence and predictive value | whether the patient has the disease | a prevalence manipulation discriminates the source of a confident reading |
| Conformal prediction | model, calibration set, ground truth | prediction set size and marginal coverage | the held-out label | a ground-checked set, not a bare score, carries the guarantee |

Each transfers a *relation*, not a vocabulary. None of them is being claimed as "the same thing" as
a neural network. The Arrival essay's citation scheme calls such cases *"a parallel"* or *"an
instance"*, and the difference matters: a parallel is cited so a reader can check the resemblance,
not so it can decide the verdict.

**Falsifier for the analogy set:** if an analogue only fits by renaming the model's training
corpus as "base rate" or "payoff" without a mechanism that can actually be manipulated, the analogue
is an echo without a shadow and is withdrawn.

## CONCLUSION

The three families are **isomers** over a shared five-atom set: same atoms, different bond,
different behaviour under a changed marginal. The family verdicts stay separate and are never
averaged (Fig 1 :22, *"Aggregating across slots is how a live signal disappears into an average."*).
The order is fixed by dependency and by formula step 7: SEARCHED, then INWARD, then OUTWARD, never
inward read against outward. The two currencies, bits and actions, are held apart in two columns.
What is not established is a winner among the families. That would be a name where the figures
return a shape.

## ANCHOR

Verbatim figure text extracted from `local: FRAMEWORK/reference/03-FIGURES_TEXT.md` this session;
the five essays listed in `05_what_shape_means.md`; the opened world sources in
`10_source_ledger.csv`. No measurement was used, so nothing here is `grounded`.

## FIGURE CENSUS

Fig 3 (dependency order, middle link), Fig 4 (structure mapping, actors and currency), Fig 9
(describe before looking, filters vs witnesses), Fig 12 (isomer, parallel, two currencies), Fig 2
(independence), formula step 7 (SEARCHED / INWARD / OUTWARD), Operators (`⋛` type). Strained after
re-census: none. The one near-strain, reading conformal coverage as a new atom, was resolved by
re-census: coverage is a bond between an existing reading and an existing ground, not a sixth atom.
