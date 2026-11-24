# The message as a molecule: isomers, order and two currencies

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 5).

## RESIDUAL

The question asks how information theory should model communication that changes beliefs or behavior. Having fixed the anchor (a per-participant effect at the ground), three structural questions remain: (1) is the message an atom or a molecule, (2) what is the order of the effect chain, and (3) are two differently framed messages isomers or merely variants?

## DOMAIN CENSUS

Atoms held: the symbol set, the receiver's existing beliefs, and the message's literal content. Bonds held: the seven, of which `→` sequence, `⇒` production, `−` subtraction and `⋛` comparison are ordered; `+`, `∥`, `≡` are symmetric. Negation `¬` is a unary operator, not a bond. No new primitive is available without import.

## DERIVATION

### Q1 - Is the message an atom or a molecule?

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Fig 12 :94: **"The arrangement is the substance."**

The Shannon message is a sequence of symbols drawn from an alphabet. That records the ingredients and their probabilities. It does not record which relation the receiver is being asked to hold between them: assertion, command, warning, analogy, negation, identity. Two messages with the same symbol multiset under different bonds are different messages.

- **Answer:** the message is a molecule. Atoms are symbols and held beliefs; the bond is the framing, order and relation. A model that encodes only the atom distribution has recorded half of the message.
- **Falsifier:** a controlled test in which two messages with identical atoms and different bonds produce statistically indistinguishable effects on a per-participant ground measure, with a live residual and a discriminating instrument. Then the bond carries nothing and this claim fails.

### Q2 - Are two differently framed messages isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Apply the figure's definition literally:

- Same atoms (same facts, same symbol set), different bond (gain frame versus loss frame; sequence versus identity), different substance (different choice under the same facts). That is Fig 12 :117 and it is the empirical finding of the framing literature.
- If the two messages share only the topic and not the atom set, they are not isomers. They are members of the same **functional group** (Fig 12 :124): both are `facts → relation → effect` molecules with different occupants in the slots.

**Falsifier, written before the run:** if a discriminating instrument finds that the two messages differ in their atom sets after all (the "framing" manipulation actually added or removed a fact), the isomer claim fails and the functional-group reading stands.

### Q3 - What is the order of the effect chain?

Fig 12 :98-101 distinguishes three ordered bonds:

- `→` sequence: *"A then B; B needs A to have happened"* (Operators :31). The message must be received before it can be read.
- `⇒` production: *"A produces B; B did not exist before"* (Operators :37). A new belief is produced, not transferred. This is the correct bond for a belief that was not in the receiver's library.
- `⋛` comparison: *"a threshold relation between two quantities"* (Operators :49). The effect is assessed against a ground: did the change cross the threshold that matters?

Fig 3 :20-21: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**

The dependency order for this question is:

1. perceive that something changed (an instrument returns a difference);
2. have terms for what the change affords (a vocabulary for belief, `w`, residue);
3. say what would count as progress (a ground-anchored threshold, `⋛`);
4. design the message (`⇒` production of a candidate term in the receiver);
5. carry what worked as a method, not a recording (Fig 4 :22).

The break is at link 3. Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** Most effort in communication engineering lands at link 4 (better coding) because links 1 and 2 already have instruments. That is effort above the break arriving where it cannot be used.

**Falsifier:** a system that can reliably specify a ground-anchored threshold for "change that matters" without any per-participant instrument, and whose threshold survives a ground test. Then link 3 has an instrument after all and the break claim fails.

### Q4 - First-order and second-order effects

Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."**

- **First order:** the message produces a new belief inside one receiver's library. This is one crossing, gated by support, reachability and novelty. It is `⇒` production at the receiver level.
- **Second order:** once the new belief is settled against the ground, it becomes an atom at the next level. It can then compose with other participants' beliefs. Fig 13 :24: **"that entities relate, and influence travels"**. This is the network propagation of an effect, not a channel phenomenon.

Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."** A message that improves the encoding but does not change the receiver's contact with the ground changes nothing at first order.

**Falsifier:** a settled first-order belief change that cannot serve as an atom for a second-order composition (it cannot be told to another participant), with the ground held fixed. That would break the recursion in Fig 12 :104.

### Q5 - Two currencies, held apart

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**

Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**

- Description currency: the length of the message under a declared code (Shannon's bit, Rissanen's MDL).
- Settlement currency: the actions spent observing whether the receiver's state actually changed.

These do not add. A message can be cheap to describe and expensive to settle (a short claim requiring a long experiment); a message can be expensive to describe and cheap to settle (a long table with an immediate behavioral readout). Fig 12 :128: **"The two readings come apart in both directions."**

**Falsifier:** a demonstrated conversion between the two currencies that preserves predictions across a ground test that keeps them separate. Then the two-currency rule fails for this domain.

## CONCLUSION

The message is a molecule: atoms plus a bond. Differently framed messages with the same atoms are isomers under Fig 12 :117; messages that share only a functional form are members of one functional group (Fig 12 :124). The effect chain is ordered by dependency, and it breaks at the objective ("what counts as a change"), not at the channel. First-order production of a belief becomes a second-order atom only after settlement (Fig 12 :104), which is how influence travels (Fig 13 :24). Description bits and settlement actions are two prices, not one.

This framing rescues what is checkable in the question without inventing a new primitive: no new kind of information is needed, only a different anchor, a bond in the message, and a separation of the two prices.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the Operators table; `THE_FORMULA.md`; the eight essays and the five low-overlap world sources listed in `10_source_ledger.csv`. No behavioral measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order, the break at the objective), Fig 4 (methods cross up), Fig 5 (novelty, three guards), Fig 6 (closure, import, effect terms), Fig 11 (contact, habitat), Fig 12 (bond, isomer, functional group, level relativity, two currencies), Fig 13 (network, influence travels), Operators (sequence, production, comparison). Strained after re-census: none; the `⋛` threshold requires an instrument, which is named as owed rather than assumed.
