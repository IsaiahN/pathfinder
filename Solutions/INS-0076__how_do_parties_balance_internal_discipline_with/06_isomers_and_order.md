# Isomers, bonds and order: the supporting derivation

**Mode: `specified` on the structural claims, `general` on the bond definitions, not `grounded`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

`01` returned a separator rather than a ratio, and left two live constraints: (1) the isomer claim holds only over a fixed atom set, and (2) a free vote is an analogue of the negation operator, not a derivation of it. This file works both, then asks what order the union has and whether the two currencies can be added.

## DOMAIN CENSUS (for this file only)

Atoms held: members, factions, a leader, a whip, a rule book, a constituency, an election. Bonds held: the seven (symmetric `+`, `∥`, `≡`; ordered `→`, `⇒`, `−`, `⋛`) and the unary `¬`. No new primitive is available without import. Currency: description cost in bits and settling cost in actions, held apart (Fig 12 :125). Anchor: the election, which does not update on the party's own line.

## DERIVATION

### Q1. Are a disciplined party and a pluralist party isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**
- Hold the membership set fixed: `{member A, member B, faction F, leader L, whip W, rule R}`. Party 1 bonds `L → W → (all members)` under a sequence plus a comparison threshold on dissent. Party 2 bonds `(F ∥ members) → L` under a disjunction plus a sequence. Same atoms, different bonds, different substance. Under Fig 12 :117 they are **isomers**, not points on a scalar.
- **Why this matters:** the question asks how much of each. For isomers that question has no answer, because "how much" presumes the same substance with a varying parameter. What varies is the bond type.
- **Falsifier, written before this run:** if the two parties can be written with the *same* bond set and the only difference is a scalar whip strength, and they remain the same substance at the ground (same behaviour, same settling cost), the isomer claim fails and the degree claim stands instead. This is the live constraint from `01` F9, kept here rather than resolved by fiat.

### Q2. Which bonds are actually in play?

- Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."**
- A whip is `→` (sequence: the member votes after the caucus decision) and often `⋛` (a threshold: enough votes to carry the line). The Operators table defines `⋛` as *"a threshold relation between two quantities"*, with the test *"is it about which is larger, rather than both being present?"* A whip count is literally a threshold relation. That is why discipline feels quantitative.
- A faction is often `∥` (disjunction: either wing can supply the position) or `+` (conjunction of views held at once). Both are symmetric: swapping the wings changes no term (Operators table :15 and :21). So a "big tent" is a symmetric bond over diverse atoms, and a whip is an ordered bond. They are not opposite amounts; they are different bond classes.
- A refusal is `¬`, not a bond. Fig 12 :112 is explicit, and the Operators amendment says negation takes one operand and joins nothing. Its price is open: *"What a unary operator costs is open: an atom slot, nothing, or the choice of what to negate."*
- **Falsifier:** if the whip were a symmetric bond, the order of caucus decision and member vote would not matter. It demonstrably does in the party-discipline literature, so the ordered reading stands; but the exact bond for a conscience vote remains an analogue, not a derivation.

### Q3. What order is the union: block, sequence or comparison?

- The consensus literature gives a real case of an ordered-versus-blocked dispute. A universal block means the proposal re-enters as input until concerns are met: that is Fig 12 :121, **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** A majority rule means `L → vote → outcome`, a chain.
- Fig 12 :121 says a chain cannot close by construction. So "majority discipline" and "consensus inclusion" are not two settings on one continuum; they are a chain and a cycle, different structures. The world literature records both failure modes: a cycle can entrench the status quo (*"an enormous advantage to anyone who supports the existing state of affairs"*, Consensus decision-making), and a chain can ignore minority concerns. The framework predicts that neither can be reformed into the other by turning a dial; changing order changes the substance.
- Fig 13 :74: **"Everything else is a composition across the two kinds, never within one."** Applied at the institutional scale, the analogue is that a rule (structure) and a decision (state-like event) alternate. I mark this as an analogue: the six-term set itself is not being claimed as a political taxonomy. Re-census in `11_audit.md` dissolves the apparent strain.
- **Falsifier:** show a procedure that is provably a chain and a cycle at once, closing and not closing under the same rule, with no change of bond. That would break the order claim.

### Q4. Settled molecules, catalysts and the next level

- Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."**
- A party that has settled a position against the ground (won an election on it, or lost and recorded the loss) can serve as an atom for the next comparison. This is the recursion, not an import. Two settled party positions can be compared at the next level without inventing a new institution.
- Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** A whip that survives a lost vote and can still act next session is a catalyst-like part; a whip whose authority is spent by one defeat is a spent part. The party-discipline literature records that a high cohesion rate coexists with leaders who cannot be challenged, which is a catalyst that never regenerates. Which a given institution is must be read, not assumed.
- Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** All parties that keep a refusal seat share a functional group; which specific seat fills it (free vote, minority report, ombudsperson, internal court) is the qualifier. The framework can name the group, not the member.
- **Falsifier:** show an institution that is both spent and regenerating across identical uses with no change of record. That would collapse the catalyst distinction.

### Q5. The two currencies again, stated in bond terms

- Fig 12 :125: **"A composition costs in two currencies, and they do not add."** Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**
- A long, carefully hedged party platform is expensive in bits and may be cheap to settle (everyone already agreed to the wording). A short, ambiguous slogan is cheap in bits and may consume a whole electoral cycle to settle. Neither predicts the other. Fig 12 :128-129 hold them apart.
- **Falsifier:** a single unit in which platform length and votes spent predict outcomes correctly out of sample. If found, the non-additivity claim is refuted.

## CONCLUSION

The disciplined party and the pluralist party are **isomers over a fixed membership set**, subject to the stated falsifier. The bonds in play are `→` and `⋛` for discipline, `∥` and `+` for breadth, and the unary `¬` for refusal, which is not a bond and carries an open price. The union is not a scalar blend: majority rule is a chain, consensus blocking is a cycle, and Fig 12 says a chain cannot close by construction. Settled positions become atoms for the next comparison, and the refusal seat is a functional group whose particular member the framework does not name. The two currencies, bits and actions, are held apart.

Nothing here names an optimal party structure. It rescues what is defensible in the question without the part that fails: there is a real structural difference between disciplined and pluralist parties, it is carried by the bond and the order, and a scalar "balance" is the wrong object.

## ANCHOR

Verbatim figure text extracted from the local `03-FIGURES_TEXT.md` this session; the Operators table in the same file; the political-science sources opened on 2026-11-23 and listed in `10_source_ledger.csv`. No party measurement was taken.

## FIGURE CENSUS

Fig 6 (import versus re-arrangement), Fig 8 (independence one quantity), Fig 10 (room follows question), Fig 11 (valence relative to residual), Fig 12 (bond, isomer, cycle, catalyst, functional group, two currencies, unary negation), Fig 13 (cross-kind composition), Operators table (bond tests, negation). Strains after re-census: two live (fixed-atom condition on the isomer claim; ¬ versus its institutional analogue), both named.
