# Supporting derivation: ordered bonds, equivalence as isomerism, feedback as cycle

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

CMP-0039 asks which data suffice for causal identification under three obstructions. Three supporting questions are owed before the answer can be stated: (1) why is causal influence an ordered bond and not a symmetric one, (2) in what sense are observationally equivalent graphs isomers, and (3) how do feedback and hidden variables appear in the bond vocabulary. Each is derived, then falsified.

## DOMAIN CENSUS

Atoms held: the measured variables (states) plus the structures that arrange them (a graph, a cycle, a mechanism). Bonds held: the seven, of which `+`, `∥`, `≡` are symmetric and `→`, `⇒`, `−`, `⋛` are ordered (Fig 12 :49). Negation `¬` is the eighth operator and is not a bond. No new primitive is available without import.

## DERIVATION

### Q1 - Causal influence is an ordered bond

- Fig 12 :49: "The seven bonds, and whether the order of the operands matters."
- Fig 12 :74 (sequence, `→`): "swap them. Does it become a different thing? Yes."
- Fig 12 :78 (production, `⇒`): "is there a B before A fires? No."
- Operators table :34: "the only bond a flat chain can express, so every term today is a sequence whether or not it should be"

A regression coefficient, a correlation and a conditional-independence statement are symmetric readings. They can name what co-occurs. They cannot write "A then B" or "A produces B". The ordered bonds are required to state the claim. This is Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."

**Falsifier:** produce a causal influence whose meaning is unchanged under swapping the operands in every context, including under intervention. Then the bond is symmetric after all.

### Q2 - Observational equivalence is isomerism

- Fig 12 :97-98: "silver fulminate and silver cyanate have the same composition and different properties, which is what forced structure into the notation."
- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :92-93: "Symmetry is what decides whether an arrangement is a new thing. Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges."

Two graphs that induce the same distribution are the same "formula" with different bonds. The distribution cannot tell them apart; an intervention can. The equivalence class is therefore not a set of near-misses around one true graph. Its members are isomers: same atoms, different substance. Counting each spelling as a discovered effect is the overcharge; collapsing them into one term is the undercharge.

**Falsifier:** exhibit two graphs with the same observed distribution whose behaviour under every possible intervention is also identical. Then they are not isomers but one term, and the equivalence class is not a real obstruction.

### Q3 - Feedback is a cycle, and a chain cannot close

- Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- Fig 12 :48: "A chain is the degenerate case: one bond type, no branching."
- Fig 2 :4-5: "collapse 1: mutual update (coherent drift)"

A feedback system is a cycle. A chain vocabulary (only `→`, one bond type) cannot represent the return edge except by pretending the loop is a longer chain, which is why long time series alone do not resolve the sign. The data must supply what the notation lacks: a temporal asymmetry that orders the passes, or an intervention that holds one edge severed so the remaining edge reveals its sign.

**Falsifier:** identify the sign of a closed loop from one time slice with no interventional or temporal asymmetry. If this succeeds, a chain can close and Q3 fails.

### Q4 - Hidden variables are missing atoms, not guessed names

- Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."
- Fig 11 :52: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."
- Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."

A hidden common cause sits three steps out in the cascade. Direct contact with the two observed variables misses it. The figure prescribes enumeration, not invention, and an instrument improved from one already returning something (Fig 6 :32-34). The canonical limit "a shape, not a name" applies: the framework can characterise the missing operand but cannot name it without an import that pays.

**Falsifier:** name the latent from the projection and have a source-discriminating instrument confirm it as the unique source. That would legitimately close the slot; it does not refute the method but moves Q4 from ungrounded to settled.

### Q5 - Order of the union

- Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- Fig 9 :57: "a case in two conditions is not a harder case of either"
- Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces"

Order by dependency: perceive the variables -> possess ordered bonds -> state what counts as identification -> plan the intervention -> carry invariance across environments. Anchor and independence are prerequisites of loop resolution, which is a prerequisite of importing a latent. This is why the answer is a four-part *set*, not a menu from which any one item may be chosen.

**Falsifier:** identify an effect under feedback and hidden confounding using independence but no anchor. If Q5 is right, that cannot work; a demonstration would break the dependency order.

## Analogs from other fields (corroboration, never verdict)

- **Convergent cross mapping** (Wikipedia page, Sugihara et al. 2012): "Cross mapping is generally asymmetric." This is Q1's ordered bond in a complex-systems instrument, and it works precisely where variables appear uncorrelated, matching Q2's point that the causal signature is not the marginal association.
- **Orientation-blind diagnostics** (arXiv 2605.04893): "every transpose-invariant spectral diagnostic is orientation-blind". Q1 and Q2 in an information-geometry setting.
- **Decodability versus deployment** (arXiv 2607.03728): a probe can decode a quantity at `R² ≈ 1` while it is "causally inert on next-state prediction". Q2's isomer point: a correct reading does not establish the bond.
- **Invariance across environments** (arXiv 2605.25156): "these structural invariances are non-identifiable from the source data alone". Q4's missing atom in a machine-learning setting.

These sources are independent of the framework's author, so their agreement is weak corroboration. They are not the source of the verdict; the figures are.

## CONCLUSION

Causal influence is an ordered bond; observational equivalence is isomerism, not a harder fit; feedback is a cycle that a chain cannot close; hidden variables are missing atoms found by enumeration and import; and the four obstructions are a union ordered by dependency. Each sub-derivation has a stated falsifier. No new primitive was introduced, and no figure line needed a strain to fit.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; `THE_FORMULA.md`; the world sources listed above, all opened 2026-11-22. No measurement was used, so the mode remains `specified`.

## FIGURE CENSUS

Fig 12 :48, :49, :74, :78, :92-93, :97-98, :111, :117, :121 (bonds, symmetry, isomer, cycle), Fig 2 :4-5 (mutual update), Fig 6 :12-13, :23, :27, :32-34 (import, instrument), Fig 9 :55, :57 (union), Fig 11 :48, :52 (enumeration, cascade), Fig 3 :20-21 (dependency). Strains after re-census: none hidden; the operand type of `⋛` is not used here, so the exemplar's type strain does not transfer.
