# Are signal and noise isomers? Bonds, order, and the minimum discriminator

**Mode: `specified` on the structural derivation, `general` on the bond rules.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

F2 of `01` says signal and noise can share all their molecular atoms and differ only in relation to the cell's residual and ground. Two questions follow. (1) Under Fig 12's definition, are they **isomers**? (2) What is the **bond set** a discriminator needs, and does the order of the bonds matter? A stated falsifier closes the section.

## DOMAIN CENSUS

Atoms held for this derivation: a ligand L, a receptor R, a fluctuation F, a time index T, and the cell's ground G (what the response pays). Bonds available: the seven in Fig 12, plus the unary negation `¬` from the Operators table. No new primitive is introduced. Anchor: the figures as metalaws; nothing is settled biologically.

## DERIVATION

### Q1 - Isomer or functional group?

Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
Fig 12 :124 *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

- Written narrowly, `{L, R}` under one reading gives a signal; `{L, R}` under another gives a fluctuation. The ingredient set is identical. The bond to the ground differs: in the first case the composition reaches G, in the second it does not. By Fig 12 :117 these are **isomers**, and the difference is invisible in the formula (the binding event looks the same) and decisive in behaviour (respond or ignore).
- Written broadly, with all three receptor/readout atoms in play, the discriminator family `{time comparison, independent second channel, threshold, refusal}` is a **functional group** (Fig 12 :124): the group says what kind of discriminator, the qualifier says which molecule implements it. This is why different cell types can instantiate the same shape with different parts.
- **Falsifier (written before the run):** if a ligand that is a signal in one context and noise in another can be separated by its ingredient set alone, with no reference to ground, time, or cell state, the isomer claim fails and the distinction is just a list of molecule types.

### Q2 - The bond set a discriminator needs

| operation | bond | verbatim figure line | role here |
|---|---|---|---|
| combine receptor and ligand into one reading | `+` conjunction | Operators :15 *"swap the operands. Does the meaning change? No."* | symmetric; the reading does not tell which side contributed |
| resolve two channels or a channel and a ground | `⋛` comparison | Operators :48 *"a threshold relation between two quantities"* | the goal is a comparison (Operators :51 *"a goal is a comparison, which is why a vocabulary without it cannot state one"*) |
| wait, then compare (kinetic proofreading, persistence detection) | `→` sequence | Operators :30 *"A then B; B needs A to have happened"* | ordered; the delay must precede the decision |
| remove a fluctuation from the reading | `−` subtraction | Operators :42 *"A with B removed or absent"* | ordered; the absence of the fluctuation is the point |
| refuse a previously held classification | `¬` negation | Operators :73 *"Negation is the refusal of a claim."* | unary; not a bond |

Fig 12 :111-113: *"A vocabulary without bonds can name a state and cannot name a route to one."* A cell that only lists molecule concentrations can say what a situation contains and cannot say what would count as getting somewhere from it. In particular: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."*

A vocabulary with `+` alone is the flat case. Fig 12 :43 *"one bond type costs nothing; seven cost 2.8 bits each"*: a bond that costs nothing carries nothing. A discriminator that merely binds ligand cannot discriminate; the arrangement of binding, delay, comparison, subtraction, and refusal is what carries the information.

### Q3 - Does order matter?

Operators :32-33 *"swap them. Does it become a different thing? Yes."* for sequence. Fig 12 :40 *"same two atoms, three substances"* for `+`, `→`, and `−` over the same pair.

Therefore:

1. A comparator that acts before the delay is a different substance from one that acts after it. This is the figure-level reason kinetic proofreading (delay then decide) and a simple equilibrium occupancy read (decide now) are not the same discriminator.
2. A subtraction applied before a comparison (subtract expected fluctuation, then threshold) is different from a comparison applied before a subtraction (threshold, then remove the residual fluctuation). Both are legal compositions; they have different falsifiers.
3. Negation is not a bond and does not enter the bond price. Operators :77: *"What a unary operator costs is open: an atom slot, nothing, or the choice of what to negate."* A cell that can only accumulate cannot refuse a wrong classification (Operators :58 *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*).

**Falsifier for Q3:** if reversing any of the ordered pairs above leaves the predicted response and its cost unchanged across the operating range, the sequence/subtraction bonds are not doing work and this derivation is wrong.

### Q4 - Why not just add more of the same bond?

Fig 12 :100 *"The price of an arrangement is the choice it records, so it is logarithmic in the number of bonds available."* Adding more receptors of one type extends the count of operands, not the bond vocabulary. Berg and Purcell 1977 do show that *"There is ample room for many independent systems of specific receptors"*, but independence here is a property of the evidence source, not of the bond type. Two receptor arrays reading the same fluctuation are one operand counted twice (Fig 2 :31 *"Independence, between two frames, is how little they draw on the same evidence."*). More of the same bond buys precision, not a new substance.

### Q5 - The minimum discriminator shape

Putting the four constraints of `01` into bond terms:

```
per slot:   (L + R) → (compare against prior reading ⋛ threshold)
            → (subtract expected fluctuation) → ¬(previous classification if refuted)
independent second channel or time index, not sharing the same evidence pool
price:      bits for the arrangement + actions for the delay and the test
```

This is a **shape**. It does not say which protein performs any step. It does say that a candidate mechanism lacking a time comparison, a threshold, a subtraction, or a refusal is missing a bond the shape requires, and owes an explanation of how it achieves the same discrimination without it.

## CONCLUSION

Signal and noise are isomers under Fig 12 when written over the same atoms, and members of a functional group when written as a discriminator family. The minimum bond set is `+` for the reading, `→` for delay, `⋛` for the goal, `−` for fluctuation removal, and `¬` for refusal. Order matters because `→` and `−` are ordered bonds. The isomer and order claims both have written falsifiers. The whole derivation remains `specified`, ungrounded: it constrains the shape of an answer, it does not identify a pathway.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (Fig 12, Operators table), the eight essays, and the world sources in `10_source_ledger.csv`. No biological measurement was taken.

## FIGURE CENSUS

Fig 12 (isomer, functional group, bond price, plan/goal/progress), Operators table (sequence, subtraction, comparison, negation, open price), Fig 2 (independence), Fig 13 (crossings and noise), `THE_FORMULA.md` step 3 (molecule and bonds). Strains after re-census: the operand type of `⋛` when the compared quantities are trajectories rather than instantaneous values is left open, matching `01` F7 and the Tostevin and ten Wolde result that instantaneous and trajectory rankings can differ. Named, not hidden.
