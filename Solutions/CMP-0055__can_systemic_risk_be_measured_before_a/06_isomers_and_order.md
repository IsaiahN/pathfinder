# Isomers and order: hidden-exposure variants, first and second order

**Mode: `specified` on the finance-facing claims, `general` on the structural shape.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The record treats "systemic risk" as one quantity with one value. Two questions are owed: (1) can two networks with the same aggregate balance sheets be different systemic-risk substances under Fig 12's definition, and (2) what is the order of the cascade composition, given that feedback and second-order contact matter?

## DOMAIN CENSUS

Atoms held: institutions, exposure edges, common holdings, the failure threshold, and the observation instruments already returning something (variance, autocorrelation, connectivity drift). Bonds held: sequence (`->`, cascade step), production (`=>`, shock produces loss), comparison (`⋛`, failure threshold), cycle (feedback re-entry). No new atom is available without an import of exposure-level data. The habitat is enumerated (Fig 11 :43-44), never composed.

## DERIVATION

### Q1 — Are two same-balance-sheet networks isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :95: *"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."*
- If network A and network B contain the same institutions, the same total exposures and the same aggregate leverage, but different edge arrangements, they share every ingredient and differ only in bonds. Under Fig 12 they are **isomers**, not two estimates of one risk.
- Ramadiah et al. 2018 hold balance-sheet information fixed, vary density and block structure, and find risk properties *"extremely sensitive to its network features."* That is the isomer claim observed in the finance frame: same ingredients, different arrangement, different behaviour.
- **Falsifier, written before the run:** if two networks with identical aggregate balance sheets but different edge arrangements show the same cascade behaviour at the ground across held-out shocks, the isomer claim fails and they are one substance with two notations.
- Status: `specified`, triangulated (Fig 12 definition plus the finance-facing test). Mode stays `specified` until a ground reading pays.

### Q2 — What is the order of the composition?

- Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."**
- Each institution's failure is settled against the ground (it defaults or it does not). A settled default then becomes an atom for the next level, the network cascade. The cascade is therefore **second order** relative to the single-institution failure. This is recursion, not an import and not a new primitive.
- A chain of single defaults is not the same object as a cascade. Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** Feedback is what converts a chain into a cascade, and a linear exposure model cannot close that loop by construction.
- **Falsifier:** a documented cascade that can be written as a pure sequence of independent first-order defaults with no re-entrant feedback. If one exists, the second-order/cycle claim fails.

### Q3 — Which cost is being paid: bits or actions?

- Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
- Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**
- A detailed exposure graph is expensive in bits (long description) but may be cheap in actions if the data already exists. A compact scalar score is cheap in bits but may cost a whole crisis budget to settle, because it does not discriminate among the hidden sources that could produce it. Neither figure predicts the other, so both must be read (Fig 12 :127-129).
- Summing description cost and settlement cost into one "model quality" number is the error Fig 12 :130 names: **"Summing them into one figure is the error this names, not the fix for it."**
- **Falsifier:** a single measure that predicts both the prose length needed to specify the network and the number of actions needed to settle its risk, with no loss of information. That would collapse the two currencies and falsify this finding.

### Q4 — Where is the catalyst?

- Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**
- A clearing house, a repo counterparty or a common asset can survive its own use as a shock absorber and then regenerate as a shock amplifier in the next cycle. A static exposure snapshot records the holding, not which role the part will play. This is the structural reason a pre-crisis measure needs the cycle (Fig 12 :121) and the habitat enumeration (Fig 11 :44), not just a larger matrix.
- May, Levin and Sugihara 2008 supply the cross-field witness: *"linkages that are latent and often unrecognized"* and, on control, *"Within the financial system, robustness is something that emerges; it cannot be engineered."*
- **Falsifier:** a counterparty whose role is invariant across uses and across residuals, with no spent/regenerating distinction measurable at the ground.

### Q5 — Is the hidden exposure an import?

- Fig 6 :25: **"An import adds no atom to the world."** The hidden exposure already exists; disclosure gives this frame access.
- Fig 8 :50-51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."* Two regulators who independently arrive at the same hidden exposure by separate data collections are convergent derivation at maximum independence; one who adopts the other's number without provenance is an import with no record.
- The distinction matters for measurement: a new data source is a licensed import only with a source gate (provenance) and a shadow test (does it explain the persisting residual?). Without both, it is a number with a story attached.
- **Falsifier:** a model that derives a hidden exposure from the same reported data it already held, with no new source and no ground trace, and that is later confirmed. That breaks idempotence (Fig 8 :32) and this finding.

## CONCLUSION

Two networks with the same aggregate balance sheets but different edge arrangements are **isomers** under Fig 12, so measured systemic risk is a property of the arrangement, not of the ingredient list. The cascade is **second order** over settled single-institution failures and requires a cycle, which a linear chain cannot express. The two costs, bits to describe and actions to settle, do not add and must be read apart. A counterparty's role (spent or regenerating) is not recorded by a static snapshot, which is why the habitat must be enumerated outward and revisited. None of this licenses a single pre-crisis number: it licenses a shape, the measurements that would discriminate among hidden sources, and falsifiers written in advance (see `01` section 4).

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the eight essays; the world sources listed in `10_source_ledger.csv`. No systemic-risk measurement was taken in this derivation.

## FIGURE CENSUS

Fig 6 (import, no atom added to world), Fig 8 (provenance, idempotence), Fig 11 (enumerate habitat, valence relative to residual), Fig 12 (isomer, settled molecule, cycle, catalyst, two currencies), Formula step 5 (ground settles). Strains after re-census: none. Fig 13's physical six-term substrate was deliberately excluded here (strain S1 in `01`), because applying it to financial nodes only worked by renaming exposures as energy and cascades as gradients.
