# Are the cost-pass-through and market-power stories isomers? Bonds, order and the single-number error

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6). No inflation data were recomputed here.

## RESIDUAL

`01` leaves two candidate stories for the same per-slot residual: (A) a cost or expectation shock reaches the pricing rule and is passed through, and (B) the firm's market position lets it shelter or widen a margin. Both are consistent with a rising markup reading. Two questions are owed: (1) can they be written over a shared atom set, and if so are they **isomers** under Fig 12's definition, and (2) what bonds and what order does each require, given that the question asks "how much"?

## DOMAIN CENSUS

Atoms available in the economics frame and already held: a cost shock `C`, marginal cost `MC`, fixed or overhead cost `FC`, a price `P`, an expectation of future cost `E`, a demand condition `D`, a market position or barrier `B`, a markups reading `M`, a market share `S`, and the aggregate index `I`. Bonds available: the seven of Fig 12 plus negation. No new primitive is available without import. No figure line types `B` or `M` as a physical primitive; they are readings bound from a differing frame (see `01` strain S1).

## DERIVATION

### Q1: Are the two stories isomers over the shared atom set?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

As the literature usually writes them, the two stories do **not** share atoms. The BIS paper writes story A as `oil cost shock → marginal cost → sectoral PPI`; the Richmond Fed and De Loecker-style work write story B as `barrier or fixed cost → markup → price`. The atom sets differ, so by Fig 12's definition they are two members of the same **functional group**, a `state → structure → state` style `cost → price-setting → price` crossing, with different fillings. That is the weaker claim.

The stronger version: write both over the full shared set `{C, MC, FC, P, E, D, B, M, S, I}` and let them differ only in which bond mediates which step.

```
Story A (pass-through):   C → MC ⇒ P ⋛ MC   ⇒   I
Story B (shelter):        E + B ⇒ M − (P ⋛ MC) ⇒ P ⇒ I
```

Same atoms; different bonds; different substance. That is the isomer claim worth testing. The Kansas City Fed result is the world-side instance of the difference being *"invisible in the formula and decisive in the behaviour"*: the same 3.4 percent markup growth was equally compatible with a formula reading of market power and with an anticipated-cost story, and only *"the timing and cross-industry patterns"* separated them. The formula alone did not decide the bond.

- **Falsifier, written before the run:** if both stories can be written with the **same** bond over the **same** atoms and produce identical per-slot predictions, the isomer claim fails and the functional-group reading stands. Fig 8 :12-15 names the resulting object: *"same atoms, different names; their union adds nothing"*, *"two names for one frame"*. A second failure mode: if no shared atom set can be written at all, the stories are not even a functional group and are simply different questions (Fig 9 :57).

### Q2: What bond is a markup?

- Fig 12 :87: **"a threshold relation between two quantities"** is the ⋛ comparison test. The Operators table gives the identifying question: *"is it about which is larger, rather than both being present? Yes."*
- Fig 12 :82: **"A with B removed or absent"** is subtraction `−`, with the test *"is the second operand's absence the point? Yes."*
- Fig 12 :92: **"Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!)"**

A markup is a **comparison** of price to marginal cost first (⋛), and a **subtraction** second (`P − MC`). It is not a conjunction: price and cost are both present in any sale, so `+` would carry no information. It is not a sequence: price and cost are not "one then the other" in the required sense. The ordering matters: `P ⋛ MC` is not `MC ⋛ P`, so the bond is one of the four ordered ones. A cost shock reaching a price is a sequence `→`: *"A then B; B needs A to have happened"* (Fig 12 :72). A markup producing a new price level is production `⇒`: *"A produces B; B did not exist before"* (Fig 12 :77). A claim that a firm's market position is the source of a reading is a provenance claim, not a bond; without a discriminator it is a name where a source is owed (source essay, §4 of `05`).

- **Falsifier:** if a markup can be shown to be a symmetric conjunction of price and cost, the bond analysis fails and the "price-setting" structure collapses into an ingredient list (Fig 12 :6-17, the flat-formula collapse).

### Q3: What order does the composition require?

- Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."**
- Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

Three orders are in play:

1. **Within the slot.** Cost or expectation first, pricing response second, realized price third: `C/E → (pricing rule) ⇒ P`. This is a chain, and a chain cannot close by construction.
2. **Across the population.** The output of the selection, the cast of firms, re-enters as input to the aggregate markup: `S → M̄ → S'`. This is the cycle Fig 12 :121 names. Hasenzagl and Perez (2026) report that *"the economy-wide markup rose instead because high-markup firms came to account for a growing share of sales"*, with roughly 65 percent of the increase among incumbents and 35 percent from turnover. The sign of the loop decides whether the aggregate rises; a fixed-cast question has answered a different question.
3. **Across the membrane.** Firm-level readings compose into an index only through a lossy transform, with round-trip gap `R_T` (Fig 4 :30): *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

The dependency order from Fig 3 governs diagnosis: perception → vocabulary → objective → planning → learn and carry. The objective link is the one without an instrument here, because "how much" is a pooled comparison over a changing cast.

- **Falsifier:** if the composition loop has zero sign across a period with documented entry and exit (within-firm change accounts for the whole aggregate change), Q3's cycle mapping is wrong.

### Q4: Why the "how much" number sums two currencies

- Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
- Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"**
- Fig 12 :130: **"Summing them into one figure is the error this names, not the fix for it."**

A headline percentage mixes a description quantity (how much of the variance in an index is associated with a markup series) with an action quantity (what it takes to change a pricing rule or a barrier). They are in different units. The Nikiforos and Grothe piece (INET, 2023) reports the distinction from inside economics: *"Markups (and profit margins) are not equivalent to profit shares"*, and *"Has there been an increase in markups over the last three years? This is an empirical question."* The question "how much" invites the sum; the figures name the error.

- **Falsifier:** a stated common unit with a conversion that the ground pays for, in which a variance share and an intervention cost are commensurable. If supplied, Q4 is false.

### Q5: Analogue, kept as an analogue

The Stanford Encyclopedia of Philosophy entry on *Simpson's Paradox* (Pearson and Bigelow, first published 2021, revised 2026) defines the structure: *"Simpson's Paradox is a statistical phenomenon where an association between two variables in a population emerges, disappears or reverses when the population is divided into subpopulations."* Kievit, Frankenhuis, Waldorp and Borsboom (2013, *Frontiers in Psychology*) add: *"Simpson's paradox is most likely to occur when inferences are drawn across different levels of explanation."*

This is the same shape as Fig 1 :22 (*"Aggregating across slots is how a live signal disappears into an average"*) and Fig 10 :25 (*"pooled readings"*), arrived at in mathematics and psychological methods with no shared evidence pool with Compustat. It corroborates the **method**, not the verdict: it says an aggregate association is not a per-slot verdict, which is what the figures already say. It does not say anything about firms or inflation. Marked accordingly in `10_source_ledger.csv`.

## CONCLUSION

The two stories are **functional groups** as usually written (different atom sets, same `cost → pricing → price` structure) and a real **isomer claim** over the full shared atom set, differing in which bond mediates which step. A markup is an ordered comparison plus a subtraction, never a conjunction; a cost shock reaching a price is a sequence; a markup producing a price is a production; the cast-of-firms effect is a cycle whose sign decides the aggregate. The "how much" number mixes two currencies that do not add. What survives is the bond map and its falsifiers, not a magnitude. `metric-like reading = market power` remains an unsourced binding; `the two stories are isomers over a shared atom set with a signed composition loop` is a checkable structural claim.

## ANCHOR

Verbatim figure text extracted from the local `03-FIGURES_TEXT.md` this session; the Operators and Symbols tables; six essays opened in full. The Simpson's paradox sources are outside analogues and are not anchors. No measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot indexing), Fig 4 (lossy membrane and R_T), Fig 8 (one frame wearing two names; search that finds nothing), Fig 9 (union, describe before looking, filters vs witnesses), Fig 10 (pooled readings), Fig 11 (valence relative to residual; habitat enumerated), Fig 12 (isomer, functional group, bond tests, cycle, two currencies), Fig 13 (honest stop), Operators table (⋛ and − tests). Strained after re-census: the type of the firm's market position for ⋛ at the composed level, named in `01` F10 and here in Q1's failure modes, not hidden.
