# Isomers, the flat formula and the sign of the loop

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

Two AI deployments can print the same local time saving, for example "20 minutes saved per ticket", and yet have completely different whole-system outcomes: in one the capacity is released, in the other the saved minutes are re-absorbed as review, rework and coordination. The flat metric cannot tell them apart. Three questions are owed: (1) why does an identical ingredient set hide the difference, (2) what structure closes or fails to close the loop, and (3) in what order must the measurement be built.

## DOMAIN CENSUS

Atoms held in the measurement frame: minutes, task count, headcount, quality floor, queue state, customer outcome. Bonds held: the seven, including `→` sequence, `⋛` comparison, `−` subtraction, and the eighth operator `¬` negation. No new primitive is available without an instrument that returns something. The anchor for the derivation is the figures themselves; the anchor for any business claim is the ground (customer outcome, realized value).

## DERIVATION

### Q1 - Why the flat metric cannot tell the two deployments apart

- Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
- Fig 12 :14-16: **"the ingredients are recorded and the arrangement is not"**, **"nothing downstream can tell them apart, and nothing signals that anything was lost"**.
- Fig 12 :94: **"The arrangement is the substance."**

A report containing "20 minutes saved, 40 tickets per hour, same headcount" has recorded ingredients. It has not recorded where the saved time went. Two deployments with identical ingredient sets are therefore not variants of one outcome; they are different outcomes whose notation cannot tell them apart. The difference is carried entirely by the arrangement, that is, by which slot the saved time bonds to next.

This is the figure-grounded reason a single KPI fails even when every number in it is accurate. The failure is not inaccuracy; it is a failure of notation.

- **Falsifier, written before the run:** two deployments with identical slot-level time savings and identical recorded arrangements (same downstream bonds, same review load, same quality floor) but different whole-system outcomes at the ground. If that is reproducible, the arrangement is not the substance and Q1 fails.

### Q2 - Are the two deployments isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**

As most dashboards write them, the two deployments share the same atoms (minutes, tickets, headcount) but only one records the bond from the saved time to a downstream slot. Under Fig 12's definition they are **isomers**: same atoms, different bond, different substance. The difference is invisible in the flat "hours saved" formula and decisive in the ground result.

The catalyst reading matters for the second-order effect. A saved minute that is converted into a reusable method is a part that survives its own use; a saved minute consumed by one extra review is a spent part. Nothing in the time-saved figure records which kind it is. That is why an unchanged local metric can hide a change in what the saved time becomes across uses.

- **Falsifier:** a deployment in which the saved time is identical in bond and in regeneration across uses, yet the ground result differs. That kills the isomer/catalyst reading and leaves only measurement noise.

### Q3 - The sign of the loop

- Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**
- Fig 11 :52-53: **"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

The saved time re-enters as new work. That is a cycle, not a chain. The sign of the loop decides whether capacity is actually released (the cycle closes with a gain at the ground) or whether work expands until the saving is consumed (the cycle runs in place). A flat before/after timer is a chain: it measures `task before → task after` and cannot close by construction. It is therefore structurally incapable of registering the sign.

The world corroborates from a different field. Parkinson's Law, opened this session, states *"Work expands so as to fill the time available for its completion."* Jevons, quoted in the entry opened this session, *"It is a confusion of ideas to suppose that the economical use of fuel is equivalent to diminished consumption. The very contrary is the truth."* Both predict that the sign can be the reverse of the local reading. Both are retrodictions from other pools, one witness each, and neither settles any firm's sign.

- **Falsifier:** a long-running deployment in which re-entered output has no effect on any slot and the loop demonstrably has no sign, neither closing nor expanding. Under Fig 12 :121 that cannot be a cycle; if observed, the cycle framing is wrong for this case.

### Q4 - Order: what must be built before what

- Fig 3 :20: **"The chain is ordered by dependency, not by importance."**
- Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**
- Fig 3 :26: **"situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."**

The dependency order for building the measurement is:

1. **Perception**: can the firm see the new work on other slots? This requires slot-level instrumentation beyond the AI-augmented task. If it cannot, steps below are readings of nothing (Fig 3 :22-23: a step whose input never arrives cannot be diagnosed).
2. **Vocabulary**: does the system have terms for downstream load, review, rework and quality, or only for minutes? The graph of bonds is a grammar, not a dictionary (Fig 12 :115).
3. **Objective**: what counts as progress at the ground? Without this, there is no way to read the sign of the loop.
4. **Planning**: where to aim the next probe, given the residual surfaced by steps 1 to 3.
5. **Learn and carry**: carry the method upward, not the recording of one quarter's number (Fig 4 :22-25).

Most effort lands at step 1 and above, where the measurements already exist (Fig 3 :28-29). The break is between 2 and 3: having terms for what the workflow affords and saying what would count as progress is the link with no instrument.

- **Falsifier:** an organization whose step-2 and step-3 links are demonstrably instrumented and have been used to detect a re-absorption failure before the local time metric moved. Then the "no instrument" claim is false for that organization and the order is a recommendation rather than a diagnosis.

### Q5 - Why the netted number is the flat formula, not the fix

- Fig 12 :6-8 names **"collapse 6: the flat formula"** and contrasts it with **"grounded: the priced bond"**.
- Fig 12 :13: **"three different changes, one written formula"**; Fig 12 :16-17: **"nothing downstream can tell them apart, and nothing signals that anything was lost"**.
- Fig 12 :130: **"Summing them into one figure is the error this names, not the fix for it."**

Melt, freeze and boil are three different changes that one written formula cannot separate, because the ingredients are recorded and the arrangement is not (Fig 12 :9-17). A net "hours saved minus new hours" is the same collapse: it records the ingredients of two different deployments under one number and signals nothing when the arrangement changes. The fix is to price the bond, that is, to record which slot the saved time bonded to and what the bond cost in actions.

**Analogue caveat, recorded from section 6 of `01`:** Fig 12's formal "two currencies" are bits and actions in composition cost. Hours and tasks are business units, not bits and actions. The transfer is an analogue, so Fig 12 supports Q1 through Q5 as a claim about notation and arrangement, not as a direct law of business accounting. F1 in `01` stands on Fig 1 :19/:22 without relying on this transfer.

## CONCLUSION

The two deployments are **isomers** under Fig 12's definition when written with the same atoms and different bonds, and their local metric is the **flat formula** that cannot tell them apart. The saved time is a **cycle**, and the sign of the loop, not the size of the local saving, decides whether capacity is released or re-absorbed. The measurement must be built in dependency order, with the middle link, terms for what the workflow affords plus a ground-level objective, as the one that currently has no instrument. Each claim has a written falsifier above.

This rescues what the local metric reports without the part that fails: the 20-minute saving is a real reading, and it is not a verdict about where the 20 minutes went.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the eight essays opened this session; the world sources listed in `10_source_ledger.csv`, all opened. No business measurement was taken.

## FIGURE CENSUS

Fig 1 (per-slot residual, frame-internal quantities), Fig 3 (dependency order, missing instrument), Fig 4 (methods up, recordings down, R_T), Fig 8 (no proof of absence), Fig 11 (habitat cascade, valence relative to residual), Fig 12 (isomer, catalyst, cycle, flat formula, priced bond, two currencies), Fig 13 (arrangements over a closed set), Operators table (sequence, comparison, subtraction, negation). Strains after re-census: S1 and S2 (see `01` section 6), both named rather than hidden.
