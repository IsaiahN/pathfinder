# Isomers and order in recovery and hysteresis

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The question asks when reversal after crossing is possible and when hysteresis makes it difficult. Two sub-derivations are owed: (1) what kind of structural change the crossing is, and (2) what order the recovery questions must be asked in. The word "order" here is literal: the figures define an ordered bond `→` and an ordered comparison `⋛`, and they state that the guards on a mint are a product whose factors become checkable in a fixed sequence.

## DOMAIN CENSUS (supporting derivation)

Atoms held: Space, Time, Energy (states); Spectrum, Gradient, Network (structures). Bonds held: `+ ∥ ≡ → ⇒ − ⋛`, plus unary `¬`. For this question the relevant atoms are the network (relations that carry influence), the gradient (a difference that can be spent), and the spectrum (ordering, so more and less can be said). No new primitive is introduced.

---

## Q1 : What kind of operator is a threshold?

- Operators table :47-51: **"⋛ comparison / a threshold relation between two quantities / no / is it about which is larger, rather than both being present? Yes."** Symmetric = no.
- Fig 12 :85-89 gives the same bond: *"comparison / a threshold relation between two quantities / no / is it about which is larger, rather than both being present? Yes."*
- Operators table :52: *"a goal is a comparison, which is why a vocabulary without it cannot state one."*

So a threshold is an **ordered** relation between two quantities. Swapping the operands is a meaning change, not a spelling change. Under a symmetric bond, `k` operands have `k!` spellings and one term (Fig 12 :92); under `⋛` the two orders are different terms. The forward crossing `control ⋛ critical` and the return crossing `critical ⋛ control` are therefore not the same composition run backwards. Hysteresis is what you see when the two ordered comparisons fire at different values.

- **Falsifier for Q1:** a crossing for which both orderings have the same truth value at every queried pair and the measured loop width is zero at every driving rate. Then the ordered-bond reading collapses to a symmetric gate and this sub-derivation fails.

## Q2 : Are the before and after states isomers?

- Fig 12 :13-17, the melt / freeze / boil case: **"three different changes, one written formula"**, **"the ingredients are recorded and the arrangement is not"**, **"nothing downstream can tell them apart, and nothing signals that anything was lost"**, **"the parts are not the thing."**
- Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**

Before and after a hysteresis crossing, the same state variables (same atoms) can be measured while the arrangement of reinforcing relations differs. Under Fig 12's definition the two states are **isomers**: same atoms, different bond, different substance. This is not an analogy imported from chemistry; the figure itself uses the chemistry case (Fig 12 :97-98: Liebig and Wöhler, silver fulminate and silver cyanate, isomerism named by Berzelius 1830).

There is a second structural kind in the same figure. Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** A crossing that installs or strengthens a positive feedback loop closes the cycle; the new state then maintains itself after the driving control is reversed. A chain could not do this. The loop sign, not the loop's existence, is the load-bearing property.

- **Falsifier for Q2:** a crossing that changes only the values of quantities while every bond arrangement and every loop sign is identical before and after. Then the two states are the same molecule and the isomer reading fails; only a magnitude reading survives.

## Q3 : What is the order of the recovery questions?

Formula step 7 names three questions and says they are not one:

1. **SEARCHED:** *"is it in here and unfound? The closure does not change: same atoms, same wall, more of the space actually visited."* Cheapest; asked first; the other two assume its answer.
2. **INWARD:** *"extend the instrument, from one already returning something. Sharpen in our own terms."*
3. **OUTWARD:** *"Characterize R in effect terms, then find the frame whose closure predicts its shape."* With a source gate, a shadow test, and a debit against independence.

Fig 6 :28-31 keeps INWARD and OUTWARD strictly separate: *"inward: is our representation adequate to hold it?... outward: does another frame already hold it? The description travels... Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."*

A fourth ordering constraint comes from Formula step 2: a refusal is owed before a mint when the residual's content is that a held term is false. In crossing terms, ask whether the old arrangement is wrong (refuse it) before asking what new term would explain the new state. The fifth kind of gap in Fig 5 :53 is **"refuted: a term we hold is wrong; a term is owed that says so."**

- **Falsifier for Q3:** a recovery in which OUTWARD succeeds at lower total cost than SEARCHED while both are available and the atom is actually in the closure. That breaks the stated order and the price claim in Fig 8 :42-43.

## Q4 : What is the unit of measurement?

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Symbols table :42-44: *"One object, region or entity being tracked. R is measured per slot, never as a single global number."*

For a threshold crossing, different components cross at different times and recover at different rates. A system-level average can read as recovered while one slot still carries positive live mass on the post-crossing regime. Fig 1 :13: *"a global R near zero with one live slot residual is a legal state."* So the unit is the slot, and the verdict is a set of per-slot verdicts. This is also why the two resilience objectives cannot be read off one pooled statistic (Gunderson 2000; Allen et al. 2016).

- **Falsifier for Q4:** a measurement in which a single global scalar predicts every component's recovery status with no loss, for the same system and the same ground. Then per-slot indexing is an unnecessary cost for that system.

## Q5 : Are the guards a sequence or a product?

Fig 5 :33: **"The three guards are a product, not a checklist."** Fig 5 :41: **"Any one of them at zero stops the mint entirely."** Formula step 3: **"gated by a product; any factor at zero forces inertness."** The guards are drawn in the order each becomes checkable (support before the search, reachability during, novelty after), not in order of importance (Fig 5 :34-40).

Applied to a recovery intervention: support (is there positive residual on some slot before anything is tried), reachability (does the proposed intervention compose from what the system holds), novelty (is it actually new relative to atoms, not just relative to the world, Fig 6 :22). Any one at zero means the intervention will not mint a new reachable state, regardless of how good the other two look.

- **Falsifier for Q5:** a new reachable state produced after crossing when one of the three guards was at zero throughout the attempt. That breaks the product rule.

## CONCLUSION

The crossing is an ordered comparison, not a symmetric gate. The before and after states are Fig 12 isomers over the same atoms, with a loop sign deciding whether the new state self-maintains. Recovery questions are ordered SEARCHED, INWARD, OUTWARD, with a refusal before a mint where a held arrangement is false, and with guards that are a product rather than a checklist. Measurement is per slot. No number, threshold value, or named intervention follows from any of this; those need a ground reading or a provenanced import.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session; `THE_FORMULA.md`; the Operators table; the canonical figures README. World corroboration from Beisner 2012, the Scheffer et al. 2001 reproduction, Gunderson 2000, Allen et al. 2016 and the general hysteresis overview, all opened this session and listed in `10_source_ledger.csv`. No measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 5 (fifth kind, guards as product), Fig 6 (INWARD versus OUTWARD, guard order, atoms versus world), Fig 8 (idempotent closure, cost of a wrong atom), Operators table (⋛ ordered, goal as comparison), Symbols table (slot), Formula (steps 2, 3, 5, 7). Strained after re-census: none. The apparent tension between "threshold" as ⋛ and "acceptance test is a bargain, not a threshold" (Fig 5 :42) was dissolved by assigning each to a different quantity, as recorded in `01_figure_grounded_audit.md` §6.
