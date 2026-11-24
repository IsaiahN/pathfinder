# Two axes, non-additivity, and order: the supporting derivation for INF-0066

**Mode: `general` on the structural claims, `specified` on the decision-making application. Not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (`05_what_shape_means.md` §6).

## RESIDUAL

The main audit establishes two ledgers but leaves three questions open: (1) is "effect on the reach" the same axis as "currency of pricing"? (2) is non-additivity only a cross-currency problem, or does it hold inside one currency? (3) does the order in which the two kinds of information are acquired matter? A fourth question is whether two items with identical prices can nonetheless be different for the decision.

## DOMAIN CENSUS (supporting derivation)

Atoms held: bits (description cost), actions (cost of finding out whether a term holds), residual `R` per slot, `closure(Γ)`, wall, contact, standing to compose. Operators held: the seven bonds including ordered `→` and symmetric `+`, and the unary negation `¬` (Operators table :53-58). No new primitive is admitted. World analogues: expected value of information (Howard 1966; Keisler et al. 2014), real options (Engelen and Cassimon 2019; Pindyck 2008 excerpts), affordances (Chemero 2024). All read and recorded in `10_source_ledger.csv`.

## DERIVATION

### Q1 — Effect and currency are two independent axes

- Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."* Every candidate term has both prices, whatever its effect.
- Fig 6 :49: *"more search at the same reach: is it in here and unfound? The closure does not change."* Fig 6 :14: *"the only operator that moves the wall"* (IMPORT).
- So **axis 1 (effect)** is whether the wall, contact, atom set or standing changes. **axis 2 (price)** is the pair of costs, bits and actions, always both present.
- A U item can be expensive in actions (a large trial that only sharpens a belief). An A item can be cheap in bits (a single sentence that names a new counterparty). Crossing the axes produces four cells:

| | cheap in bits | expensive in bits |
|---|---|---|
| **U, same wall** | cheap forecast that only updates `b` | exhaustive within-closure search |
| **A, wall moves** | one imported affordance | a full new instrument and its theory |

- **Conclusion:** classification uses axis 1 only. Pricing uses axis 2 only. Conflating them is the flat-formula error of Fig 12 :5, *"A set of ingredients is not one. The bond is the rest of the information."*
- **Refuter:** an item whose wall effect and bit price are not separable for one decision.

### Q2 — Non-additivity holds inside a single currency too

- Howard 1966, read: *"the joint elimination of the uncertainty about a number of even independent factors in a problem can have a value that differs from the sum of the values of eliminating the uncertainty in each factor separately."*
- Wikipedia *Value of information*, read and fetched: *"The VoI of observing two new evidence variables is not additive. Instead it is equivalent to observing one, incorporating it into our current evidence, then observing the other."*
- Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 12 :130: *"Summing them into one figure is the error this names, not the fix for it."*
- **Conclusion:** non-additivity is not solely a bits-versus-actions phenomenon. Even two U items in one currency must be evaluated sequentially, with the first incorporated before the second. This is the ordered bond `→`, not the symmetric `+`: Fig 12 :71-74, *"A then B; B needs A to have happened"*, test *"swap them. Does it become a different thing? Yes."*
- **Caveat:** world sources here are secondary. Howard's result is a mathematical claim about expected value, not a figure line, and it cannot decide the framework's verdict. It corroborates the shape.
- **Refuter:** a decision where two U items' joint value equals the sum of their separate values for every state, with the per-slot ordering preserved.

### Q3 — Order: refuse before mint, search before import, settle before compose

- Formula step 2: REFUTED owes a refusal, and *"no arrangement of the other four reaches it."* Formula step 7: SEARCHED is asked first, *"it is cheapest and the other two assume its answer"*.
- Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit."*
- Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."*
- Fig 6 :24: *"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."*
- **Derived order for a decision-maker:** characterize the residual per slot -> refuse false held terms -> search the current closure -> extend the instrument inward or import outward only if search fails -> settle each change against the ground -> then compose over it.
- **Why order matters:** the unary negation removes standing (Fig 5 :55: *"What falls is the reach"*). Pricing an item that depends on a term about to be refused spends budget on a term that will not be composable. Operators :73-74: *"− is A with B removed or absent, which is the absence of an operand. Negation is the refusal of a claim."* These are not interchangeable.
- **Refuter:** a case where reversing refuse/search and search/import leaves both cost and reach unchanged for every slot.

### Q4 — Are two items with the same prices different "substances"?

- Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Two items can share the same bit price and the same action price yet differ in which bond they attach to the reach: one is `same wall` (U), the other `wall moves` (A). Their expected-value formula is identical; their decision consequences are not. That is the framework's isomer claim applied to information.
- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* All A items share the functional group "changes the reach"; import, instrument extension and refusal are different members. All U items share "same wall"; sampling, forecast and computation are different members.
- **Falsifier, written before the run:** if two items with identical bit and action prices and identical reach effects lead to different correct decisions, then the bond carries no information the prices do not, and the isomer claim fails. If all such items lead to the same decision, the bond claim stands as `specified` and unmeasured.
- Mode: `general` for the bond structure, `specified` for the information application.

### Q5 — The refusal branch is unary and carries a negative sign on the reach

- Operators table :70-72: *"Seven of the eight are bonds: they join two operands... Negation joins nothing."* Operators :77-78: *"What a unary operator costs is open: an atom slot, nothing, or the choice of what to negate."*
- Fig 5 :55: *"What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."*
- Glynn et al. 2022 VE3, read: information that invalidates a model is valuable but rarely counted. This is an A item whose effect is negative on the reach. A VoI accounting that only accumulates cannot carry it, which is the Operators :58 conclusion: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."*
- **Refuter:** a refusal that leaves the reach unchanged yet genuinely changes what actions are possible.

## CONCLUSION

Effect and price are orthogonal axes; classification uses the first and accounting uses the second. Non-additivity holds even within one currency, so items are evaluated sequentially rather than summed. Order is load-bearing: refuse before mint, search before import, settle before compose. Two items with identical prices but different reach bonds are isomers in the figure's sense, and refusal is the unary, negative-sign member of the A class. All of this is `general` or `specified`, none `grounded`.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table extract, and `THE_FORMULA.md`, all local, read 2026-11-23. World analogues read: Howard 1966, Wikipedia *Value of information* (2026), Engelen and Cassimon 2019, Pindyck 2008 excerpts, Chemero 2024, Glynn et al. 2022. No measurement was used.

## FIGURE CENSUS

Fig 1 :22 (no aggregate), Fig 5 :51 and :55 (fifth kind, reach falls), Fig 6 :14, :23, :24, :49 (wall, import, independence, same wall), Fig 8 :32 (idempotence), Fig 9 :27-28 (describe first), Fig 12 :5, :71-74, :104, :117, :124, :126, :130 (bond, order, level, isomer, functional group, prices, no sum), Fig 13 :134 (unreachable is a verdict), Operators :53-58, :70-78 (negation unary), Formula steps 2, 5, 7. Strains after re-census: none. The apparent bits-versus-actions conflict was resolved in `01_figure_grounded_audit.md` §5 as two readings of one item, held apart, never summed.
