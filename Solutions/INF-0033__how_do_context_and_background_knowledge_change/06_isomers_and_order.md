# Supporting derivation: which bonds context uses, isomers, and order

**Mode: `general` on the structure, `specified` on the tests, not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The same token list conveys different information under different context. Two questions are owed. (1) Which of the seven bonds does a context supply, and is the answer nameable from the figures? (2) When the atom set is held fixed and only the bond changes, are the two readings **isomers** under Fig 12's definition?

## DOMAIN CENSUS

Atoms held: the tokens of the signal, plus whatever is already in `Γ`. Bonds held: `+` conjunction, `∥` disjunction, `≡` identity, `→` sequence, `⇒` production, `−` subtraction, `⋛` comparison, and the unary `¬` negation (Operators table). No new primitive is available without import. Currency: description length in bits and actions to settle, two currencies that do not add (Fig 12 :125-127).

## DERIVATION

### Q1: Is "context equals the library `Γ`" exact? Correction to my own earlier reading

- *Decoding Tacit Knowledge*: *"Pretext is the history ('the library'): the experience and assumptions the listener brings before the words arrive."*
- The same essay: *"Context points the way ('search'): it picks the part of that history this message is about."*
- Symbols table :9-10: `Γ` is *"Everything the system can currently express: its primitives, and everything it can build by combining them."*
- Symbols table :20-26: `b` is *"Formed from its own history and from what it inherited, mixed by w"*; `w` measures how far belief leans on private history versus inherited prior.

So the mapping is not one-to-one. "Background knowledge" in the question covers `Γ` plus `b` plus `w`. "Context" in the narrower sense is the operative selection of which part of that history a signal addresses, closer to the essay's "search" pointer. "Subtext" is the resulting interpretation.

**I earlier wrote "context is the library." That is retracted as imprecise.** The corrected form keeps both readings visible: background knowledge is the library and belief; context is the selector. Triangulated (essay plus Symbols table) at low independence, since the essay is by the framework author.

### Q2: Which bonds can context supply?

Fig 12 :59-89 gives seven tests. Applying them to the same token list under different situations:

- **`→` sequence.** Swap the tokens; if the meaning changes, order matters. The essay's example: *"In a single sentence, where the position of a word decides what it means: heteronyms"* and *"The rest of the sentence is the context: it picks which sense of the word is meant."* Sequence is the bond context most often supplies in language.
- **`≡` identity.** Substitute one token for the other; if nothing is lost, two names name one referent. A shared background makes this bond available where a stranger lacks it.
- **`⋛` comparison.** The question is which is larger, not both being present. Operators table: *"a goal is a comparison, which is why a vocabulary without it cannot state one."*
- **`−` subtraction.** The second token's absence is the point. Context that tells you what is *not* being said supplies this bond.
- **`+` and `∥` symmetric bonds.** Here order does not change the term. Context still matters because which bond holds is not recoverable from the operands (Fig 12 :46-47).

Fig 12 :40-41: *"same two atoms, three substances / and the bond is charged for what it could have been."* The bond carries the context, and it is priced by what it could have been.

**Falsifier written before the run:** if a token list is behaviourally identical under two different bonds and no instrument can discriminate them, then Fig 12's claim that the bond carries information fails for that case.

### Q3: Are the two readings of the same signal isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

- If receiver 1 and receiver 2 compose over the **same atom set** and differ only in which bond they apply (for example `→` versus `≡` for the same two tokens), the two readings are **isomers** under the figure's definition. Same atoms, different bond, different substance.
- If one receiver's `Γ` lacks an atom the other has, the atom sets differ. That is **not** an isomer pair. It is a reach difference: one frame can compose a term the other cannot. Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*
- The stronger form worth testing: fix the full atom set held by both receivers, vary only the bond supplied by context, and check for different downstream behaviour. That is a real isomer claim with a stated falsifier.

**Falsifier:** if a "context change" always changes the atom set rather than the bond, the isomer claim fails and the reach-difference reading stands instead.

### Q4: What is the order of the union?

Fig 13 :28-32: *"They alternate, and the alternation is where both the recursion and the randomness come from"* and *"because each turn leaves a remainder (the residual) that re-enters the next."* The token and the receiver alternate: the token updates the receiver's model, the updated model selects what the next token affords. So context is not a one-time add-on applied before decoding. It is regenerated each turn from the residual the last turn left.

Fig 4 :27: *"The transform between scales loses information, and that is the point."* Passing a reading between two receivers is a lossy transform, so the round trip must be measured: *"So take the round trip and measure the gap"* (Fig 4 :30). The gap `R_T` here is the part of the first receiver's interpretation that does not survive translation into the second receiver's vocabulary.

## CONCLUSION

Background knowledge maps to `Γ` plus `b` plus `w`; context in the narrow sense maps to the selector of which part of that history a signal addresses. The figure-grounded bond is not nameable for a particular context, a recorded gap. Where the atom set is fixed and only the bond changes, two readings of the same signal are isomers under Fig 12 :117; where the atom sets differ, the difference is a reach difference under Fig 6 :21. The union is recursive under Fig 13 :28-32, so context is rebuilt from the residual each turn rather than applied once. This rescues the checkable part of the question without supplying a name the figures do not give.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators and Symbols tables in the same extract, and the four essays listed in `05_what_shape_means.md`. No measurement was used.

## FIGURE CENSUS

Fig 4 :27, :30 (lossy transform, round trip); Fig 6 :21 (closure, reach); Fig 9 :32 (shape, not an answer); Fig 12 :40-41, :46-47, :59-89, :117, :125-127 (bond tests, isomer, two currencies); Fig 13 :28-32 (alternation and remainder); Operators table (seven bonds and negation); Symbols table (`Γ`, `b`, `w`). Strains after re-census: **one**, the unbound identity of the bond a given context supplies, recorded as a gap. No quote drift found on recheck.
