# Signal and threshold: structure, order, and the outcome lattice

**Mode: `specified` on the structure, `general` on the order.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The audit left three structural questions open:

1. Is the signal and the threshold an **isomer** pair under Fig 12, or a weaker functional-group relation?
2. What is the **order** of the reliability quantity itself, and does the comparison bond `⋛` carry it without strain?
3. Which **dependency order** must a reliability study follow, and why do the 2008 and 2012 literatures appear to disagree?

## DOMAIN CENSUS

Atoms available from Fig 13: states (space, time, energy) and structures (spectrum, gradient, network). For this question the relevant bound atoms are: the system state, time, the slowly changing driver, the return rate, the critical value, and the observation noise. Bonds available: the seven, including `→` sequence and `⋛` comparison (Operators table :48). Negation `¬` is available for the "no signal" and "no crossing" cells. No new primitive is needed.

## DERIVATION

### Q1 - Are the signal and the threshold isomers?

Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
Fig 13 :76: *"A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."*

- The **signal** reads a return rate: a gradient over time bonded to the system state. Written `Time → Gradient → State`. It is a directedness reading (Fig 13 :22, *"a difference that can be spent"*).
- The **threshold** compares the driver with a critical value: `Driver ⋛ CriticalValue`. It is an ordering comparison (Operators table :48, *"a threshold relation between two quantities"*).
- As written, they share only the state/time vocabulary and use different third atoms (gradient versus critical value). Under Fig 12's definition they are **not isomers**. They are two members of the same **functional group**, "an instrument reading at a boundary": the group fixes the kind, the qualifier fixes which member.
- The stronger claim becomes available only if both are written over the **full shared atom set** `{SystemState, Time, Driver, Gradient, CriticalValue, Noise}`, differing solely in arrangement. Then, and only then, they are isomers: same atoms, different bond, different substance. That is the checkable structural claim worth sending.

**Falsifier, written before the run:** if either the signal or the threshold can be written without an atom the other requires (for example, a threshold with no driver, or a signal with no time), the isomer claim fails and only the functional-group claim stands. This is the same test pattern the exemplar used for GR and QM, applied to a different residual.

### Q2 - What is the order of the reliability quantity?

Operators table :51: **"a goal is a comparison, which is why a vocabulary without it cannot state one"**
Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."**

- First order, inside the system: the gradient reading (`Time → Gradient → State`). This is directedness, not a comparison of two quantities. Making `⋛` govern it would strain; the audit re-censused on exactly this point (F3 in `01`).
- First order, at the boundary: the driver/critical-value comparison (`Driver ⋛ CriticalValue`). Here `⋛` governs without strain.
- Second order, at the observer arrangement: the reliability quantity compares the conditional probability of a signal given a crossing with the conditional probability of a signal given no crossing. Both operands are quantities, so `⋛` governs at second order without strain. This is the comparison the field actually makes when it chooses an error trade-off.
- The four outcome cells (signal fired or not, crossing occurred or not) are a conjunction lattice under `+` and `¬`, with `⋛` selecting the operating point. Fig 12 :92-93 warns that under a symmetric bond k operands have k! spellings and one term, so a code that charges for the order of the four cells overcharges. The cells are one substance; the false-alarm/miss pair is one comparison at second order, not four independent reliabilities.

**Falsifier:** show that the conditional-probability operands are not quantities at the second-order level, or that the four outcome cells are four distinct terms rather than one symmetric arrangement. Either would break the level distinction and force a re-census.

### Q3 - Dependency order: why the 2008 and 2012 results do not conflict

Fig 3 :20-21: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**
Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

The reliability study chain is:

1. **Perception:** does anything return a signal? Yes, the indicator family does (Fig 6 :34).
2. **Vocabulary:** the four outcome cells and the ordered error pair exist as terms.
3. **Objective:** what counts as reliable. This is the link with no instrument until a false-alarm/miss pair is declared. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
4. **Planning:** choose indicator, system class, sampling design.
5. **Learn and carry:** verify against crossings and report per class.

Dakos et al. 2008 worked at links 1 and 2 on hindsight-selected cases. Boettiger and Hastings 2012 worked at links 3 and 4 on prospective cases. Effort at link 4 cannot rescue an undefined link 3, so the two literatures were never answering one question. The union must be unbundled first (§2b of `01`), which is what this solution does.

### Q4 - Analogues, with their standing stated

These are corroborating analogues, not figure lines. Where they disagree, the figures govern.

- **Metamerism / the spectrometer** (*The Hard Problem is About Source*): a green reading cannot name its source; the instrument that discriminates sources settles it. Same shape as F4. Field: perception and instrumentation. Low overlap with the earth-system papers.
- **Medical screening** (standard sensitivity/specificity reasoning): a positive screen is a filter for further testing, not a diagnosis. Same shape as F5. Field: clinical decision-making. Low overlap.
- **Fire alarm** (everyday): an alarm that fires on toast is a false alarm; an alarm that never fires on a real fire is a miss; neither fault is repaired by voting on more alarms. Same shape as F6. Field: ordinary engineering, lowest overlap.
- **Lab-grown versus mined diamonds** (*How Intelligence Actually Works*): some projections leave isotope traces, some leave none. This is the depth-versus-absence distinction in F7, with a concrete discrimination mechanism. Field: materials provenance.

The analogues do not supply the verdict. They show the figure-derived structure appearing in low-overlap frames, which is corroboration of shape, not a second witness to the same evidence pool.

## CONCLUSION

The signal and the threshold are a **functional-group pair**, not isomers as normally written. They become a real isomer claim only over the full shared atom set, with a stated falsifier. The reliability quantity is a **second-order comparison** between two conditional-probability quantities; `⋛` governs it at that level without strain, while at first order it governs only the driver/critical-value threshold. The four outcome cells are one symmetric substance, not four separate rates. The dependency order puts the error-rate objective before indicator selection, which is why the 2008 hindsight result and the 2012 prospective error rates are two links, not a contradiction.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; the Operators table; the eight essays. No measurement was used. The ground for the structural claims is the figure text itself; the ground for the empirical reliability question is still owed.

## FIGURE CENSUS

Fig 3 (dependency order, the unmeasured middle link), Fig 6 (instrument already returning something; depth versus absence), Fig 9 (union versus partition), Fig 12 (isomer, functional group, symmetry, level-relative irreducibility), Fig 13 (gradient over time, cross-kind composition), Operators table (`⋛` as comparison, goal as comparison). Strains after re-census: one resolved (first-order `⋛` demoted to the threshold quantity, F3 of `01`); one named and level-bounded (second-order operands are quantities, requiring an instrument for the conditional-probability reading). None hidden.
