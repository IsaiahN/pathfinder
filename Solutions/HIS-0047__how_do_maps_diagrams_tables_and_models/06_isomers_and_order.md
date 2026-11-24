# Supporting derivation: structure, order and analogues for representations

**Mode: `general` on the notation structure, `specified` on the analogue mapping. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).**

## RESIDUAL

The main audit establishes that a representation is a frame and that the bond carries what the ingredient list does not. Two supporting questions remain: (1) exactly *what* can a flat form not write, and (2) in what order should the four domains be examined so that a lever applied to one does not leave the intersections standing (Fig 9 :55 to :58).

## DOMAIN CENSUS

Atoms available for this derivation are the seven bonds of Fig 12 / the Operators table (three symmetric: `+`, `∥`, `≡`; four ordered: `→`, `⇒`, `−`, `⋛`) plus the unary negation operator. Structures available are the four Fig 12 :116 to :124 composites: isomer, catalyst, cycle, functional group. No new primitive is needed. A representation is treated as a molecule of marks joined by typed bonds, and a "display" is the ingredient list of that molecule.

## DERIVATION

### Q1: What can a flat form not write?

Fig 12 :116: "Four structures a compositional system exhibits, and each names something the flat form cannot write." The four are:

- **isomer**, Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- **catalyst**, Fig 12 :119: "A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
- **cycle**, Fig 12 :121: "The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- **functional group**, Fig 12 :123: "A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Applied to representations: a table of values can name a *functional group* (a `state to structure to state` template, e.g. `Space - structure - Time`) only if its layout carries the substructure; a bare list of values cannot. A map that encodes a comparison bond `⋛` lets a reasoner ask which quantity is larger (Operators table :51 "a goal is a comparison, which is why a vocabulary without it cannot state one"); a coordinate list does not, until the work is done by hand. This is not an analogy imported from chemistry; Fig 12 :97 to :98 says so directly: "This is not an analogy. Chemistry hit it first: silver fulminate and silver cyanate have the same composition and different properties, which is what forced structure into the notation."

**Falsifier, written before the run:** if a flat ingredient-only display supports all four of these structures as readily and as cheaply as a bonded display, then Fig 12 :116 fails as applied here and the "rather than merely display" claim collapses into a formatting preference.

### Q2: Why a display can be mis-priced in opposite directions

Fig 12 :92 to :93: "Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges. Both wrong, in opposite directions, and only one is usually noticed."

Fig 12 :99 to :101: "A bond costs what it could have been, and nothing more." And: "With one bond type the second term is zero, and it rises as the vocabulary of bonds grows, and only then. A bond that costs nothing is a bond that carries nothing, which is the flat case."

So a display that records only `+` (the flat formula, Operators table :16 "the only bond in a flat formula, which is why a formula records ingredients and not arrangement") sets the bond price to zero. It looks cheap and carries nothing. Conversely, a display that prints every permutation of symmetric operands charges for `k!` spellings of one term. Both errors come from not recording which bond holds. The practical consequence for visualization research is that "informationally equivalent" (Larkin and Simon 1987, as quoted in SEP) is exactly the ingredient-level claim; it does not imply "computationally equivalent", which is the bond-level claim. The two are priced in different currencies and do not add, Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."

### Q3: What order should the domains be examined in?

Fig 9 :54: "when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." Fig 9 :58: "Which is the second-order value of a big lever, and usually the larger one: not that the pile is smaller, but that the residue is finally describable."

The four domains (A notation, B cognition, C ground, D verification) form a union with overlapping conditions. A single lever such as "make the chart prettier" clears only the region where one condition holds and leaves the intersections standing, because the second condition still binds (Fig 9 :56). The dependency order from Fig 3 :20 ("The chain is ordered by dependency, not by importance") is therefore:

1. **C, the ground**, first as reference. Fig 2 :29 to :30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." If the contested fact is not settled, no encoding settles it (Fig 10 :18 "a declared meaning is not a grounded one").
2. **A, the notation**, second. Does the representation carry a bond the raw data do not? Fig 12 :5.
3. **B, the cognition**, third. Which slots carry residual, and does the representation supply vocabulary and objective? Fig 1 :19; Fig 3 :7, :10.
4. **D, the verification**, last. Do the two frames draw on different evidence? Fig 8 :51.

Ordering by importance instead (for example, starting with a debate about whether visualization "works") spends effort above the break, which Fig 3 :20 to :21 says "arrives at a step that cannot use it." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

### Q4: Analogues that survive the test

- **The periodic table** is a *functional group* case at scale. SEP (2025 revision) reports Knight 1996: "Grouping and classifying chemical elements in terms of a visually clear table 'transformed the science'." The rows and columns are the substructure; the qualifier is which element. This is a figure-licensed functional group (Fig 12 :123), not an isomer.
- **Snow's ghost map and his water-company table** are two different bonds over related data. The map encodes spatial adjacency and comparison (a `⋛`-like concentration gradient); the table (Tulchinsky 2018, Table 5.1, "possibly the most famous presentation table in epidemiology") encodes a rate comparison per company. They are closer to *isomers* over the shared atom set of cholera deaths and water source: same atoms, different arrangement, different inference. The shared ground (contaminated water) settled between them.
- **A legend or scale bar** is a *declared meaning*, not a grounded one (Fig 10 :18, :49). It is a convention that makes the claim statable, not a verdict.
- **A chain of re-used charts** can become a *cycle* (Fig 12 :121) if the output re-enters as input, or a *catalyst* (Fig 12 :119) if the same mark survives across uses. Both are properties of the arrangement, and neither is visible in the ingredient list.

These analogues are supporting scaffolding, not verdicts. Each is `specified` until checked against a ground.

### Q5: Settled molecule becomes atom (recursion)

Fig 12 :103 to :104: "Composition is recursive, and the level decides what is irreducible." And: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world." A well-formed representation that has been settled against its ground becomes an atom for the next level of reasoning; a new diagram is not a new primitive, it is a new arrangement of already-settled terms. This is why "infinite charts" do not by themselves grow knowledge, and why the set of arrangements can be searched without end inside a finite reach, Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."

## CONCLUSION

The flat form's precise deficit is the four structures of Fig 12 :116 to :124, plus the silent loss of arrangement at :14 to :16 and the mis-pricing at :92 to :101. The correct order of examination is ground, notation, cognition, verification (dependency order, not importance order). The analogues that survive are functional group (periodic table), isomer (map versus rate table), declared meaning (legend) and cycle/catalyst (reused marks), each with its own falsifier and none admitted as a figure-derived name. No new primitive was introduced; the seven bonds and four composites suffice.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `THE_FORMULA.md`, the Operators and Symbols tables, all read locally this session. World anchors: SEP "Diagrams and Diagrammatical Reasoning" (2025 revision), Science History Institute 2022, Tulchinsky 2018 Table 5.1, Brody et al. 2000. No new measurement was taken in this run.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor, independence), Fig 3 (dependency order, break), Fig 6 (no new atom, instrument), Fig 8 (surplus where closures differ), Fig 9 (union unbundling, big lever), Fig 10 (declared versus grounded meaning), Fig 12 (four structures, bond price, recursion, silent loss), Fig 13 (closed set, open arrangements), Operators table (bond types, symmetry, price). Strains after re-census: one retracted (Fig 13 applied to notation); none hidden.
