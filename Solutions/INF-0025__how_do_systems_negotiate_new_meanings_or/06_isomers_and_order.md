# Code as molecule, and the order of the bootstrap

**Mode: `general` for the structure, `specified` for the protocol application.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

`01` established that the first code is not agreed into existence but found at a shared contact and installed as a violable convention. Two questions remain: (1) what is the structure of the thing that is shared, and (2) in what order must the bootstrap links run. A third question, whether two protocols with the same inventory are isomers, decides what a falsifier would even look like.

## DOMAIN CENSUS (supporting)

Atoms held in each frame: whatever the habitat enumerates (Fig 11 :43). Bonds held: the seven typed relations of Fig 12 plus negation. No new primitive is available without import (Fig 13 :115). The object of study is not the inventory but the arrangement: Fig 12 :5 *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

## DERIVATION

### Q1 - What is shared: the symbol or the bond?

- Fig 12 :46: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."*
- Fig 12 :47: *"A recipe that names only its ingredients has recorded half of itself."*
- ⇒ Two frames that share a symbol inventory do not thereby share a code. The relation is carried by the bond and by the record of provenance.
- Fig 8 :50: *"Convergent derivation and adopted import look identical in the contents."* So even a perfectly shared symbol cannot tell you whether the two frames arrived at it independently or one copied it. Only the record separates them (Fig 8 :51).

**Reading:** a protocol is a molecule. A list of signals is not a protocol. This is `general`, triangulated (Fig 12 plus Operators table plus Fig 8).

### Q2 - Are two protocols with the same inventory isomers?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Consider two protocols over the same inventory {request, reply, ack, timeout}. If one composes them as `request → reply ⇒ ack` (sequence then production) and the other as `request ⋛ timeout − reply` (comparison then subtraction), they are the same ingredients under different bonds. By Fig 12 they are different substances, not variants of one protocol.
- The weaker case: if the two protocols merely share a *functional group*, a substructure whose presence fixes the outcome (Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*), then they are the same *kind* of protocol (a handshake) with different members.

**Falsifier, written before the run:** if a controlled comparison shows that two arrangements over the same inventory with different bonds produce indistinguishable behaviour in both frames, with adequate instrumentation and a discriminating ground, the isomer claim fails and the protocol is just its inventory. That would also falsify F3 in `01`.

### Q3 - Convergence versus import: why the record matters

- A shared term can arise two ways. Both can be independently derived (convergence at maximum independence), or one can be carried across from a frame whose closure differs (adopted import). Fig 8 :51 makes them identical in contents.
- Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* So when a genuinely new term appears, it is an import, not an internal composition.
- But Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Failure to find the source of a term is not proof that it was never imported.

**Reading:** the protocol's lineage is part of the protocol, not documentation of it. Fig 13 :128: *"Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available."*

### Q4 - What order must the bootstrap links run?

Fig 3 orders links by dependency, not importance. Applied here:

| link | question it must answer | figure anchor |
|---|---|---|
| 1 perception | is anything already registering that neither frame authored? | Fig 3 :5; Fig 6 :34 |
| 2 vocabulary | what does that contact afford, in terms both frames can state? | Fig 11 :43-48 |
| 3 objective | what would count as coordination, in each frame's own terms? | Fig 3 :9-11 |
| 4 planning | which differing closure can supply the missing atom? | Fig 8 :53-54 |
| 5 learn and carry | which convention settled, and is it still reversible? | Fig 10 :18-19, :47 |

The chain is a **union**, not a simple line, because link 3 splits: a convention objective (agreement is the product, Fig 2 :41) and a ground objective (agreement is disqualifying, Fig 2 :40). These need different instruments. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

- **Order claim:** links 1 to 3 must settle before link 4, and link 4 before link 5. A protocol stabilized before its objective is stated is a convention that has quietly decided an outcome, which Fig 10 :47 forbids.
- **Falsifier:** a case where link 5 (settled, reversible convention) is achieved while link 3 (objective in each frame's own terms) is demonstrably absent, and the code still tracks the contact. That would break the dependency order and require a re-census.

### Q5 - The analogue that does not transfer

The engineering analogue, DHCP, is tempting as a complete answer: a client with no configuration negotiates configuration on a fixed lower layer. But the lower layer is an import from a frame whose closure differs (IP, UDP, fixed ports). It does not derive a code from nothing; it shows what a bootstrap looks like *when a substrate already registers*. Using it as proof that codes can arise without any contact would be the apophenia Fig 9 :27-28 warns against: *"describe it before you go looking, or any frame you pick will seem to fit"*. The same caution applies to Schelling points and to bouba/kiki: both are witnesses for the mechanism shape, not derivations of it.

## CONCLUSION

A first code is a molecule with priced bonds, not a list of signals. Two protocols over the same inventory are isomers under Fig 12 when their bonds differ, or share a functional group when only their substructure matches. The bootstrap runs through five ordered links, with a union split at link 3 between convention and ground. Every claim here is `general` or `specified`; none is `grounded`. The one live strain is the same as in the exemplar: Fig 12 prices bonds in bits and actions in two currencies that do not add (Fig 12 :125-127), so "cost of a first code" must be reported in two readings, never summed.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` read this session; formula steps 2 to 5 and 7; no measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 6 (closure and import), Fig 8 (convergence versus import, provenance), Fig 9 (union before search, describe before looking), Fig 10 (convention guard), Fig 11 (enumerated habitat), Fig 12 (bond, isomer, functional group, two currencies), Fig 13 (lineage is the term, closed set). Strains after re-census: the two-currency cost of a code, named and not summed.
