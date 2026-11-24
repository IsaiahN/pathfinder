# Isomers, scale and order: supporting derivation for ECN-0023

**Mode: `specified`** on the isomer and scale claims, `general` on the ordering rule, `gap` on the numeric attribution. This is a simulated derivation checked against the figures, not a ground reading (`05_what_shape_means.md` section 6).

## RESIDUAL

The figure audit found that the two options are two bonds over the same atoms. Two questions are owed: (1) are the theories of banking isomers under Fig 12's definition, and (2) what is the dependency order of the domains, given that the system-level claim is made at a different scale from the ledger claim?

## DOMAIN CENSUS

Atoms held in the ledger frame: bank, borrower, deposit, loan, reserve, payment. Bonds available: the seven, including `→` sequence and `⇒` production. No new atom is available without import. Scale boundary: one bank versus the banking system. Anchor: the ledger at D1, monetary statistics at D2.

## DERIVATION

### Q1: Are the three theories of banking isomers?

- Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Werner's taxonomy, opened 2026-11-23, recognises financial intermediation (deposits collected then lent), fractional reserve (individual banks cannot create money, the system does), and credit creation (each bank creates money when it extends credit).
- Over the full shared atom set `{bank, borrower, deposit, loan, reserve}`, the three arrange the same atoms differently: intermediation puts `deposit → loan`, fractional reserve puts a systemic interaction between the individual and the aggregate, credit creation puts `loan ⇒ deposit`. They are **isomers** under Fig 12 :117.
- **Falsifier, written before the run:** if one theory requires an atom the others do not, for example a binding statutory reserve ratio that exists only in the fractional-reserve frame, the strict isomer claim fails and the weaker functional-group reading stands: same `funding to lending` pattern, different atoms in the slots.
- Low-overlap corroboration: the public chemistry entry on isomers, opened 2026-11-23, says structural isomers have the same atoms connected in distinct ways and that cisplatin and transplatin differ in behaviour. That corroborates the *definition*, not the banking claim. Mode `general` for the definition, `specified` for the banking application.

### Q2: Where is the scale boundary, and what crosses it?

- Fig 4 :19-20: *"Only the actors, the currency and the anchor change."*
- Fig 4 :21: *"The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."*
- At D1 (one bank) the currency is ledger entries; at D2 (the system) it is broad money versus base money. What crosses up is the **method** of creating a deposit entry, which is reusable. What does not cross is the **recording** of one bank's settlement problem, because interbank payments net out at system level.
- Fig 4 :22: *"Only methods cross up. Only head starts come down."* So the system-level story cannot be a blown-up photograph of one bank. It is a new composition over the same method.
- **Falsifier:** a demonstration that the system's deposit total is exactly the sum of independently created deposits with no netting, reserve acquisition or repayment effects. That would set the round-trip gap to zero and collapse D2 into D1.

### Q3: What is the order of the domains?

- Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*
- Order: instrument (D4) → ledger bond (D1) → aggregate composition (D2) → theory name (D3). A theory name cannot settle the bond, just as a quantity aggregate cannot see a bond type.
- The historically broken link is the middle one: having terms for what a bank balance sheet affords and saying what would count as a constraint on lending. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The timestamped ledger origin field is that instrument.

### Q4: Is the creation/funding relation a cycle or a chain?

- Fig 12 :121: *"The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*
- Loan creates deposit; deposit payment may leave the bank; the bank acquires reserves; reserve acquisition changes what the bank can lend next. That is a loop. Reading it as the chain "reserves → deposits → loans" drops the return leg and reverses the first bond.
- The sign matters. A positive feedback loop (more lending, more deposits, more capacity to lend subject to capital) closes and can amplify. A negative loop (capital and liquidity constraints) closes and damps. Fig 12 :121 says the chain cannot represent either. This is why the multiplier narrative is not merely wrong in magnitude but wrong in form.
- **Falsifier:** an empirical trace in which the return leg is absent, that is, reserve acquisition never feeds back into lending capacity because banks are never constrained by settlement. Then the loop is open and a chain reading may be adequate.

### Q5: What is the round-trip gap R_T here?

- Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
- Sent up: Fig 12's six-test bond separation plus the union split. Concretised: "banks create money when they lend, therefore deposit totals are unconstrained". Dropped in the concretisation: the settlement loop, the constraint set, the slot index, the attribution gap. R_T is nonzero and is enumerated qualitatively in `11_audit.md`. Treating "the formula is the metalaws in fewer words" as identity would set R_T to zero and be the dead-reckoning error.

## CONCLUSION

The three theories are isomers over a shared atom set; the strict claim has a stated falsifier. The scale boundary is a membrane that passes methods and not recordings, so system-level statements are new compositions over the same method. The dependency order puts the instrument before the ledger bond, the ledger bond before the aggregate, and the theory name last. The creation/funding relation is a signed loop, not a chain, and the round-trip gap is nonzero. All of this is `specified`, not `grounded`, and none of it settles the economics on its own.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the local formula, the canonical figures README, and the public sources listed in `10_source_ledger.csv`. No measurement was taken by this packet.

## FIGURE CENSUS

Fig 3 (dependency order, instrument-poor middle link), Fig 4 (membrane, methods cross, round trip), Fig 8 (no proof of absence), Fig 9 (split before search, describe before looking), Fig 12 (isomer, cycle, two currencies, arrangement), Fig 13 (level relativity, after re-census), Operators table (bond tests). Strains after re-census: none hidden; the Fig 13 substrate attempt is recorded and retracted in `01` section 1.
