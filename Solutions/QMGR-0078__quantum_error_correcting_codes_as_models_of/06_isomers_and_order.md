# Is a holographic code an isomer? Structure, order and analogues

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6). The analogues below are bindings from the coding and physics frames, not figure-governed facts. They are marked as such.

## RESIDUAL

The main audit leaves three structural questions open: (1) if a QEC code models the bulk-boundary membrane, what *kind* of thing is the relation between a holographic code and an ordinary code, (2) what is the order of the composition (what is first order, what is built on it), and (3) which analogues are licensed and which are strained. This file answers them separately and gives a falsifier for each.

## DOMAIN CENSUS

- **Atoms held in the coding frame:** physical qubits, logical qubits, tensor legs, stabilizer generators. None is a member of the six-term substrate (Fig 13), so using them here is an import, declared in `01` F4.
- **Bonds held:** the seven typed bonds plus negation (Fig 12). The encoding isometry is a typed relation, not a list of qubits: "which one holds is not recoverable from the operands" (Fig 12 :46).
- **Ground:** correctability conditions and proved theorems about reconstruction (world-side, different from the figure ground).
- **No new primitive is available without import.** The derivation stays inside the arrangements of what is already held.

## DERIVATION

### Q1 - Is a holographic code an isomer of an ordinary code?

- Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124: "A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- Take two codes over the same physical Hilbert space, with the same number of physical and logical qubits. Code H uses a perfect-tensor network on a hyperbolic tiling; code O uses an arbitrary stabilizer arrangement. Same atoms, different bond, different behaviour: H obeys the Ryu-Takayanagi formula exactly for connected boundary regions and has negative tripartite information; O need not. By Fig 12's definition they are **isomers**, not variants of one thing.
- The earlier draft claim that *AdS/CFT and QEC are isomers under the six-term set* is **retracted**. Fig 13's six are not the atoms of either theory; that reading overcharged the analogy. The defensible isomer claim is between codes over a shared qubit set, and it is the one stated here.
- **Falsifier, written before the run:** if two codes with the same atom set and the same bond arrangement differ in RT behaviour, or if two with different arrangements match in RT behaviour with no additional structure to account for it, the isomer claim fails and the functional-group reading (Fig 12 :124) stands instead.
- **Mode:** `specified`, single-source for the figure definition (Fig 12 :117), with the physics check supplied by the world sources. Triangulated across the HaPPY and Harlow papers.

### Q2 - What is first order and what is second order?

- Fig 12 :103: "Composition is recursive, and the level decides what is irreducible."
- Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world"
- **First order:** the encoding map from logical (bulk) degrees of freedom to physical (boundary) degrees of freedom. One typed relation, one crossing of the membrane. This is the level that Almheiri, Dong and Harlow identified and the HaPPY code constructs.
- **Second order:** the area operator and the reconstruction of a bulk operator from a boundary subregion, composed on a first-order code that is already settled against the ground (Harlow's theorem). It is legal *because* the first-order molecule settled. This is Fig 12's recursion, not a new primitive and not an import that moves the wall.
- **Third order and beyond:** a code used as a constituent of a larger code, or a family of codes compared under a common area functional. Each settled level becomes an atom for the next, and "irreducible is a fact about a level and never about the world."
- **Falsifier:** show a settled code cannot serve as an atom for a higher-level composition, or that reconstruction must be stated at the same level as encoding with no promotion. That breaks the order claim.
- **Mode:** `specified`, triangulated (Fig 12 :103-104 with the three-stage literature order 2014, 2015, 2016).

### Q3 - Which analogues are licensed, and which are strained?

| analogue | figures say | status |
|---|---|---|
| membrane between sizes → encoding plus recovery map | Fig 4 :21 "not a wall: a filter with a direction" | licensed; the code is a directional rule for what crosses |
| generator up / head start down → isometry up / reconstruction down | Fig 4 :22 "Only methods cross up. Only head starts come down." | licensed |
| round-trip gap `R_T` → reconstruction error off the entanglement wedge | Fig 4 :30 "So take the round trip and measure the gap." | licensed and computable in toy models |
| import with gates → code sourced from the information frame | Fig 6 :23; "source gate: provenance" | licensed; dates supplied |
| two states do not bond directly → logical and physical Hilbert spaces need a map | Fig 13 :75 "Two states never bond directly." | **analogue only, strained.** The six-term state/structure distinction is not the same as the code's Hilbert-space distinction. Kept as a structural hint, not a figure verdict. |
| ⋛ comparison at second order → comparing two codes' area operators | Operators table: "a threshold relation between two quantities" | **strained.** Whether settled codes count as quantities at that level needs an instrument, not an argument. Named, not hidden. |

- **Falsifier for the whole analogue set:** a code that satisfies the licensed rows but for which no coherent account of the strained rows can be given, and which still delivers the full correspondence. That would show the strained rows were load-bearing after all and the figure reading needs re-census.
- **Mode:** `general` on the licensed rows, `specified` and ungrounded on the strained rows.

### Q4 - Structure: what does the arrangement carry that the ingredient list does not?

- Fig 12 :94: "The arrangement is the substance."
- Fig 12 :46: "which one holds is not recoverable from the operands"
- A list of physical qubits, stabilizers and tensor ranks does not tell you whether the code obeys an area law; that is carried by the bond, the hyperbolic arrangement and the perfect-tensor condition. This is the Operators table's point as well: a term that names only its ingredients has recorded half of itself. That is why the code is a model of the *map* (the arrangement) and not of the *parts*. (The "Operators table" reference here is to the canonical operators table in `03-FIGURES_TEXT.md`.)
- **Falsifier:** an ingredient list from which RT behaviour follows without stating the arrangement. Then the bond carries nothing and Fig 12 :94 is wrong for this domain.

## CONCLUSION

A holographic code and an ordinary code over the same qubits are **isomers** under Fig 12: same atoms, different bond, different substance. The encoding is first order; the area operator and reconstruction are second order, licensed by the settled-molecule rule rather than by a new primitive. Three analogues (membrane, generator, round trip, import) are figure-licensed; two (the state/structure hint and ⋛ at second order) are strained and recorded as such. This rescues the defensible structural content of the "codes as models" claim without the identity claim that failed `01` F5. The falsifiers above are stated in advance so either result is checkable.

## ANCHOR

Verbatim figure text read from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the Operators table in the same extract; the four physics papers and five essays listed in `10_source_ledger.csv`. No new measurement was taken. This is a simulation checked for internal consistency against the figures.

## FIGURE CENSUS

Fig 4 (membrane, generator direction, round trip), Fig 6 (import gates), Fig 8 (provenance, residual first), Fig 9 (union, shape not a name), Fig 12 (isomer, functional group, arrangement, recursion, level-relative irreducibility), Fig 13 (two kinds and cross-kind composition), Operators table (⋛ operand type). Strained after re-census: the state/structure analogue and ⋛'s operand type at second order, both named above, none hidden.
