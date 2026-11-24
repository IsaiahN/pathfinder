# Symmetric spellings, two currencies, and the order of the two loops

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The main audit named independence as the sign-changing quantity and the MDL bargain as the licensing quantity. Two supporting questions remain: (1) why does adding interchangeable copies not create a new term, and (2) in what order must the two loops run, and in which currencies are they priced? A third question follows: are two redundancy schemes isomers under Fig 12, or merely members of one functional group?

## DOMAIN CENSUS

Atoms already held: a signal, a copy of a signal, a noise draw, a shared cause, a check, and a capacity budget. Bonds held: the seven, including the symmetric `+`, `∥` and `≡`, and the ordered `→` and `⋛`. No new primitive is available without import. Anchors: measured error rate (D1), measured failure rate (D2), the state of the world (D3). Dependency order: establish the source of the copies before pricing them.

## DERIVATION

### Q1 — Why interchangeable copies add spellings, not substance

Fig 12 :92-93:

> **"Symmetry is what decides whether an arrangement is a new thing. Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges."**

A repetition scheme in which copy order is immaterial is a symmetric arrangement. Adding copies gives k! spellings of one term. A receiver that counts those spellings as distinct evidence overcharges by log₂(k!) and undercharges the bond, in exactly the two opposite directions the figure names. Fig 8 :49: "Two frames that overlap almost completely are one frame wearing two names." Fig 13 :39: "Six members that overlapped would be fewer members wearing six names."

The contrast is an ordered arrangement. Fig 12 :74: "A then B; B needs A to have happened" is `→`, and swapping the operands makes a different thing. A scheme whose copies must arrive in a specific order (a sequence number, a time slot, a distinct sensor) is a different molecule and can carry information a symmetric pile cannot. Fig 12 :40 puts the two cases side by side: "same two atoms, three substances."

So the structure of the repetition, not the count, decides whether there is anything new. Fig 12 :94: "The arrangement is the substance."

**Falsifier, written before the run:** if a scheme whose copies are provably interchangeable under a symmetric bond still reduces the error rate when the extra capacity is spent on genuinely independent noise draws, this Q1 reading is wrong and the gain comes from something other than a new arrangement. That would send the census back to D1.

### Q2 — The two currencies are not one budget

Fig 12 :125-126:

> **"A composition costs in two currencies, and they do not add."**
> **"Bits price the description. Actions price finding out whether it holds."**

The question's phrase "scarce communication capacity" names only the bits currency. A redundancy scheme also spends actions: the tests, checks and experiments needed to establish that the copy holds against the ground. Fig 12 :129-130: "Neither figure predicts the other, so both are read or the choice is made blind."

The world literature gives two independent faces of this. The Society of Agents essay cites Amdahl's law (a serial fraction sigma caps the speedup at 1/sigma) and the Universal Scalability Law (a coherence cost kappa makes adding members slower past a peak). The ECSS handbook gives Q_S = Q_I² + Q_C, where the coupled term Q_C is a cost that adding copies cannot reduce. None of these is a figure line; all three are imports with provenance.

**Falsifier:** a scheme for which bits and actions are genuinely commensurable (a single measure predicts both the description cost and the cost of checking it, with no residual) would refute the two-currency claim and let the question be answered with one optimization.

### Q3 — Order: sources first, bargain second

Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

The dependency chain for this question is:

1. **Describe the residual per slot.** What failed to resolve, and which copy slot is live? (Fig 1 :19, :22.)
2. **Source/independence link.** Do the copies draw on the same evidence? If yes, they are one frame wearing two names and there is no new information to price.
3. **Bargain link.** Only if step 2 yields a surplus, ask whether `cost(copy) + left(R, copy) < cost(R)` (Fig 5 :43).
4. **Settlement.** The ground pays or it does not. "A gate is not the ground" (Formula step 5).

Running step 3 before step 2 produces a costed plan built on a term that carries no information. That is effort spent above the break.

**Falsifier:** a case where the cost calculation itself reveals that the sources were correlated, with no independent source audit available, would collapse steps 2 and 3 into one and refute the ordering.

### Q4 — Are two redundancy schemes isomers?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

A repetition code and a parity code over the same symbol set share the atoms and differ in arrangement. Under Fig 12's definition they are **isomers**, and the difference is decisive in behaviour: repetition tolerates independent errors differently from parity. Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." Where the two schemes do not share the full atom set (one requires a feedback channel the other does not), the weaker functional-group claim stands instead.

**Falsifier, written before the run:** if two schemes over the same atoms and different bonds prove behaviourally identical on every ground, the isomer claim fails and they are one term with two spellings.

### Q5 — The round trip to a number

Formula step 6 defines R_T = gap(x, (T_E ∘ T_A)(x)). Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

1. **Sent up (x):** Fig 8 :47-49 (independence decides surplus), Fig 5 :43 (the bargain), Fig 12 :125-126 (two currencies).
2. **Abstraction (T_A):** the shorthand "redundancy helps iff independent and cheap enough".
3. **Concretisation (T_E):** a concrete claim such as "three copies at rho = 0.3 have three independent votes and beat one copy".

**R_T is nonzero.** What the shorthand holds does not survive the trip down: the effective count is bounded by 1/rho, not by N; the coherence cost can reverse the gain; and the two currencies cannot be added. R_T is recorded qualitatively as the set of dropped constraints, not measured numerically, because no ground reading was taken here. Treating the shorthand as identical to the figures would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

## CONCLUSION

Interchangeable copies are spellings of one term, not new terms; the structure of the repetition is what can carry information. The price of a redundancy scheme has two currencies that do not add. The two loops are ordered: source independence first, bargain second, settlement third. Two redundancy schemes over the same atoms with different bonds are a real isomer claim with a stated falsifier. The round trip from figure shape to numeric threshold loses the correlation ceiling, the coherence cost and the second currency, so the number must be imported with provenance, never derived here.

## ANCHOR

Verbatim figure text from the local `03-FIGURES_TEXT.md`; the local formula; the eight essays; Shannon 1948, the ECSS reliability handbook, the NASA common-cause record, SEP Jury Theorems, and the recent LLM ensemble paper, all opened 2026-11-23. No measurement was taken in this derivation.

## FIGURE CENSUS

Fig 1 (per slot), Fig 3 (dependency order), Fig 4 (round trip), Fig 5 (bargain), Fig 8 (independence and one-frame-two-names), Fig 12 (symmetric spellings, two currencies, isomer, functional group), Fig 13 (redundant rather than minimal), Formula (steps 3, 5, 6). Strains after re-census: none. The Q1 strain (a symmetric pile still helping under independent noise) is named as a falsifier, not hidden.
