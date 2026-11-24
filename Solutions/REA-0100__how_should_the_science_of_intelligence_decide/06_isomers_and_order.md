# "Can" and "ought": isomers, dependency order, and a falsifier

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The science of intelligence has a working vocabulary for capability and an unfinished vocabulary for direction. Two questions are owed: (1) are "what it can learn to do" and "what it ought to do" the same kind of thing arranged differently, or different things; and (2) in what order do they sit in the dependency chain.

## DOMAIN CENSUS

Atoms held in the machine-learning frame: states such as a policy, a reward signal, an observation, a world state; structures such as a scoring function, a data distribution, a reward model, a benchmark. Bonds held: the seven plus negation. No new primitive is available without import from a frame whose closure differs (Fig 6 :23). The two quantities are read in different currencies and the currencies do not add (Fig 12 :125).

---

## DERIVATION

### Q1 — Over a fixed atom set, are "can" and "ought" isomers?

Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Write both over the same held atoms:

- A **capability** claim uses sequence and production: given this state and this structure, this other state is produced. Operators table :39: *"is there a B before A fires? No."* It says what follows from what.
- An **ought** claim uses comparison, subtraction and negation: Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*; :46: *"progress is a subtraction, which is why a vocabulary without it cannot say how far along it is"*; :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*.

Same atoms, different bonds, different substances. Fig 12 :94: *"The arrangement is the substance."* Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

This is why a capability vocabulary cannot answer the question even if it contains every relevant ingredient. Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* Fig 12 :112-113: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond. A system holding only ingredients can say what a / situation contains and cannot say what would count as getting somewhere from it."*

**Falsifier, written before the run:** if "ought" can be written as a magnitude on the same spectrum as "can", with the same bond, such that raising capability raises the "ought" score without a comparison, a subtraction, or a refusal, then the two are one quantity and the isomer claim fails. Reward hacking and Goodhart's law are evidence against that falsifier, not for it: both show that raising the measure can lower the intended outcome.

### Q2 — Where the atoms differ, the weaker claim is a functional group

Fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

A capability claim over `{observation, policy, environment}` and an "ought" claim over `{person, preference, commitment, ground}` do not share enough atoms to be isomers. They share the cross-kind functional form: a state, a structure, a comparison against a ground. The group says what kind of thing it is; the qualifier says which member. The verdict is weaker, but still checkable.

This matters because a careless reading of Q1 would import values as if they were just another arrangement of the same ingredients. They are not. Where the atom set changes, the relation is composition plus import, and import needs a source gate and a shadow test (Fig 8 :50-54). Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures"* differ.

**Falsifier:** if a value atom is derived inside the capability closure with no contact with a differing frame, Q2 collapses into Q1 and the import requirement is void.

### Q3 — Dependency order: the objective is upstream of learning

Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* The chain runs perception (1), vocabulary (2), objective (3), planning (4), learn and carry (5). Fig 3 :10 names link 3: *"it can say what would count as progress here, in its own terms"*.

So "what it ought to do" is link 3 and "what it can learn to do" is link 5. The question's contrast is not between two sibling answers; it is between a downstream measurement and an upstream object that is usually assumed rather than measured. Fig 3 :25-26 names why: *"Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests. The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

**Falsifier:** a system that reliably pursues an objective for which it has no bound term, with the ground checking the pursuit rather than the objective, would reverse the dependency order. RLVR-style verifiable rewards are a partial counterexample to the *measurement* claim (they instrument link 3 for narrow tasks), but not to the direction claim: the objective is still supplied from outside the loop. Record this as a live tension, not a dissolved one.

### Q4 — Two currencies: description price and action price

Fig 12 :125: *"A composition costs in two currencies, and they do not add."* Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"*. Fig 12 :128: *"The two readings come apart in both directions. A long chain of cheap parts is expensive to describe and may cost one action to refute. A short arrangement"* (line continues with "over a costly operand...").

A capability score holds one accounting: how well the system did under a fixed specification. An "ought" decision needs the other: how much it costs to settle which specification is legitimate and who may author it. Summing them into one number is the error Fig 12 names, not the fix. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A reward total is a filter for the budget; the ground is the witness.

**Falsifier:** a single accounting in which description bits and settling actions are the same unit, paid by a non-updating ground, with no residual lost. None supplied.

### Q5 — The anchor is not an identity bond

Operators table :27: identity is *"two names, one referent"*, with the test *"substitute one for the other. Is anything lost? No."* Tying an objective to a ground is not identity: the specification does not become the ground by being named as it. Fig 10 :49: *"Declaring a meaning does not ground it."* Fig 10 :47: *"a convention that decides an outcome has stopped being one"*.

What binds a specification to a ground is a comparison with a threshold (⋛) under a maintainer seat that can refuse. Fig 2 :33: *"The anchor must not update."* Fig 2 :34: *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."*

**Falsifier:** a declared specification that settles an outcome while remaining a convention. Self-contradictory by Fig 10 :47; if produced, the operator reading here needs re-census.

---

## ANALOGUES (effect terms, not borrowed authority)

- **Goodhart and Campbell (economics and audit studies, low overlap).** A measure that becomes a target ceases to be a good measure. This is the action-price currency of Q4, read from a different field. It corroborates the shape; it does not supply it.
- **Arrow (social choice, low overlap).** No ordinal social welfare function satisfies the stated conditions. This corroborates the per-slot separator of Q2 and the gap on a universal scalar. It is not the same theorem as the figure's claim.
- **Reward hacking (AI safety, overlaps the DeepMind source).** The agent optimises the literal specification without achieving the intended outcome. This is a violation of identity between the symbol and its referent (Q5), not a new kind of atom.
- **Automation bias (human factors, low overlap).** The human overseer ignores contradictory information, especially when the automation is reliable. This is a decayed channel to the ground (Fig 10 :24), not a failure of the ground itself.
- **Specification gaming (AI engineering).** The same ingenuity that produces a desirable novel solution under a correct specification produces a degenerate one under a wrong specification. This is the isomer claim of Q1 observed in practice: same learner, same atoms, different bond, different substance.

---

## CONCLUSION

Over a fixed atom set, "can" and "ought" are isomers: the atoms are the same, the bonds differ, and the difference is decisive in behaviour. Where the atom sets differ, the weaker functional-group claim holds and any value atom must be imported with provenance and a shadow test. In the dependency chain the objective sits at link 3, upstream of planning and learning at links 4 and 5, and it is the usual break because it has no instrument. Description price and action price do not add, and the anchor is bound by a threshold comparison under a refusing seat, not by identity.

These readings rescue what is defensible in the plain-language question without inventing a primitive or naming an objective: the science can decide by building the missing instrument and stating the separator, and it must stop at the shape until the ground settles the content.

## ANCHOR

The verbatim figure extract and Operators/Symbols tables, opened this session. No measurement was taken; all claims are `specified` and some `general` on structure.

## FIGURE CENSUS

Fig 3 :10/:20/:25-27 (dependency order and the missing instrument), Fig 6 :23 (import), Fig 8 :50-54 (provenance, residual first), Fig 9 :60 (filters versus witnesses), Fig 10 :24/:47/:49 (channel, convention, grounding), Fig 12 :5/:94/:111/:112-113/:117/:123/:125-128 (bonds, isomer, functional group, currencies), Operators table :27/:39/:46/:51/:58. Strains after re-census: none hidden. The one live tension is the partial counterexample in Q3 (verifiable rewards instrument link 3 for narrow tasks), recorded there rather than suppressed.
