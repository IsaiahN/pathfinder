# What the kept structure is: isomers, order and analogues

**Mode: `specified`.** A simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The primary audit says the preserved part of a memory is the typed relation, not the item list. Three questions are owed before that can be used: (1) what makes two memories with the same items different substances, (2) whether order is part of what is kept, and (3) which analogues the figures provide for a structure that survives its own use.

## DOMAIN CENSUS

Atoms available: the seven bonds and their symmetry tests, plus the negation operator. No new primitive is available without import. Domains: framework-internal composition (anchor: the figures), memory-systems research (anchor: recall and inference measurements), and verification (anchor: the ground, never agreement). Order by dependency: settle the bond type before pricing it, and settle the substance before asking about its order. Refuse before mint (`THE_FORMULA.md` step 2).

## DERIVATION

### Q1: Same items, different memory: are they isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :99: **"A bond costs what it could have been."**

Fig 12 :101: **"A bond that costs nothing is a bond that carries nothing, which is the flat case."**

Take two memories holding the same three items, say a place, an action and an outcome. In one, the items are joined by **sequence** (`→`, *"A then B; B needs A to have happened"*, Operators table), so the memory says what happened first. In the other, the same items are joined by **production** (`⇒`, *"A produces B; B did not exist before"*, Operators table), so the memory says what brought the outcome about. Under Fig 12 :117 these are **isomers**: same atoms, different bond, different substance. They will support different later inferences even though an ingredient-only inventory cannot tell them apart.

This is the precise sense in which "useful structure" survives the cut. It is not more items; it is the bond that makes the items a substance.

**Isomer test, stated before the run:** two memories with identical item sets but different bond types must produce different predictions on a later inference task. If they do not, the bond is free and Fig 12 :101 applies.

### Q2: Is order part of what is kept?

Fig 12 :92: **"Symmetry is what decides whether an arrangement is a new thing."**

Fig 12 :93: **"Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges. Both wrong, in opposite directions, and only one is usually noticed."**

Operators table: of the seven bonds, `+`, `∥` and `≡` are symmetric; `→`, `⇒`, `−` and `⋛` are ordered. So the answer is conditional, not a yes or no.

1. If the kept relation is symmetric (both items hold at once, either suffices, or two names one referent), then **order is not structure**. A memory that stores the temporal order of such a set is overcharging by `log₂(k!)` for spellings the bond does not distinguish. That is one of the two errors Fig 12 :93 names, and it is the one usually noticed.
2. If the kept relation is ordered (sequence, production, subtraction, comparison), then **order is the substance**. A memory that discards it has recorded the ingredients and lost the substance. This is the other error in Fig 12 :93, the undercharge, and it is usually not noticed because the item list looks complete.

**Prediction:** a memory system that keeps item sets but not bond order will fail exactly on inference tasks that require sequence, production, absence or threshold, and will look fine on tasks that require only conjunction or identity. That is a checkable `specified` prediction.

### Q3: Cycle: does recall re-enter as encoding?

Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

A memory system is not a one-way store. A retrieval is an output that re-enters as an input: the recalled trace is re-encoded, and the structure can be strengthened, distorted or refused on the way back. Under Fig 12 :121 that makes memory a **cycle**, not a chain. A chain cannot close by construction, so any account of memory that treats retrieval as a read-only playback has the wrong topology.

The sign of the loop matters. A loop that strengthens the structure each time closes around a stable attractor; a loop that distorts it drifts, and the drift is coherent because each retrieval is corrected by the last one rather than by the ground (Fig 2 :33-34). This connects the figure directly to the reconstructive-memory finding reported in *Decoding Tacit Knowledge*: details that do not fit a schema are *"omitted from the recollection, or transformed into more familiar forms."*

### Q4: Catalyst: what survives its own use?

Fig 12 :119: **"catalyst. A part that survives its own use."**

The same line continues: **"Spent and regenerating parts behave differently across uses, and nothing records which a term is."**

A memory structure that can be used repeatedly without being consumed is the catalyst case. A structure that is spent in use and regenerated only by re-learning is the spent case. The behavioural outputs can look identical across uses, so the two are indistinguishable from the recall record alone. This is a second, independent reason to keep the lineage: the record of which parts were regenerated is part of the term, not documentation of it.

### Q5: Functional group: what fixes the outcome?

Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

A reusable schema is a functional group: its presence fixes what kind of later situation this is, and its qualifiers say which member. This is the figure-grounded content of "head start" in Fig 4 :24, *"downward: something that makes the next search cheaper. Never a replay of what worked once."* A head start is a functional group, not a recording.

### Q6: Two currencies, never summed

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**

Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."**

For this question: the cost of stating a retained structure is in bits; the cost of settling whether it is worth retaining is in actions (an experiment, a retrieval test, an outcome). A memory account that reports only storage size cannot notice a shortfall in settlement, and one that reports only accuracy cannot notice an overlong description. Fig 12 :130: **"Summing them into one figure is the error this names, not the fix for it."** They are held apart.

## CONCLUSION

The preserved structure is a **molecule of items and typed bonds**, and two memories with the same items under different bonds are isomers under Fig 12 :117. Order is structure only for the four ordered bonds; for the three symmetric bonds, storing order is an overcharge. A memory system is a **cycle**, because retrieval re-enters as encoding, and it contains **catalysts** and **functional groups** whose spent-versus-regenerated status the recall output alone cannot record. The two costs, bits and actions, are kept apart.

This keeps what is defensible in the primary derivation and adds the topology it lacked: the cut is not a one-time edit but a loop, and what survives the loop has to be recorded rather than inferred from the trace.

## FALSIFIER, WRITTEN BEFORE THE RUN

The supporting derivation is refuted if any of the following holds:

1. Two memories with identical item sets but different bond types make identical predictions on a later inference task that is designed to distinguish sequence from production, or presence from absence. That makes the bond free and kills the isomer claim (Fig 12 :101).
2. A memory system is demonstrated whose retrieval cannot alter the stored trace in any way, and which still updates correctly under novel conditions. That makes it a chain, not a cycle (Fig 12 :121).
3. A memory part is shown to be both spent and regenerated across uses with no observable difference between the two states, yet the system can still report which it is from the recall record alone. That contradicts Fig 12 :119's second sentence.
4. A single scalar is demonstrated that correctly prices both the description cost and the settlement cost of a retained structure. That collapses the two currencies Fig 12 :125-130 holds apart.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session. No memory measurement was used.

## FIGURE CENSUS

Fig 12 (isomer, symmetry, cycle, catalyst, functional group, two currencies), Operators table (bond names, symmetry and tests), Fig 4 (head start, not a replay), Fig 2 (coherent drift), Fig 6 (import adds no atom). Strains after re-census: none. The bond-to-memory mapping is a binding from a world frame onto figure-held atoms, provenanced as such, not a new primitive.
