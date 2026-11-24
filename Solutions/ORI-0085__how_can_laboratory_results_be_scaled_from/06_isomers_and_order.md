# Order, bonds and isomers in lab-to-geology scaling

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (`05_what_shape_means.md` §6).

## RESIDUAL

The main audit names the shape and a union of conditions. It leaves three structural questions open: (1) in what order must the work run, (2) what kind of bond carries the result across, and (3) are two lab pathways that share ingredients but differ in mineral or cycling arrangement the same result or different ones? This file answers those in structure, then states a falsifier.

## DOMAIN CENSUS

Atoms held: the lab-side terms (yield, purity, pH, concentration, temperature, mineral, cycling, duration) plus the field-side terms enumerated from geology (weathering, conditioning film, wet-dry flux, hydrothermal input, dilution, rock record). Bonds held: all seven from Fig 12 plus negation. No new primitive is available without import from the geology frame.

## DERIVATION

### Q1  -  What order does the work run in?

Fig 3 gives a dependency order, not an importance order. Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*

For this question the chain reads:

1. **Perception.** Enumerate what is in contact with the residual in the field: *"List everything in contact with the residual, then what is in contact with those"* (Fig 11 :44).
2. **Vocabulary.** Have terms for what a setting affords: concentration, mineral surface, cycling, duration.
3. **Objective.** State in effect terms what would count as the result having happened in the field. This is the broken link (F7).
4. **Planning.** Design the screening matrix and the field or natural-analogue check.
5. **Learn and carry.** Name what worked, carry the method up, stamp its provenance.

**Falsifier for Q1:** if work at link 4 or 5 (a bigger run, more replicates, more publication) rescues an unstated objective at link 3, the dependency order is wrong. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

### Q2  -  What bond carries the result across?

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

The ingredients of a prebiotic experiment (monomers, energy, mineral, water) are recorded. The arrangement is often not. Three bonds matter here:

- **Sequence (`→`)**, *"A then B; B needs A to have happened"* (Fig 12 :30). Wet-dry cycling, sequential reagent addition, and geological history are sequences. Swap the order and you get a different thing.
- **Production (`⇒`)**, *"A produces B; B did not exist before"* (Fig 12 :36-37). A synthesis step is production, not mere sequence: the product was absent before the step fired.
- **Comparison (`⋛`)**, *"a threshold relation between two quantities"* (Fig 12 :86-87). Lab yield versus field yield is a comparison, not a union of ingredients. Operators table: *"a goal is a comparison, which is why a vocabulary without it cannot state one."*

**Why this matters for scaling.** A lab recipe that records only ingredients has recorded half of itself. The missing half is the arrangement: the order of additions, the surface on which the reaction ran, the cycling regime. That is the part that fails to transfer, and it is not visible in the ingredient list. Pianowski (2026) makes the same point in chemistry: pathways *"strongly depend on precise regulation and sequential additions of reactants, which might be difficult to achieve under non-laboratory prebiotic conditions."*

**Falsifier for Q2:** if two arrangements with different sequences or different mineral surfaces produce indistinguishable outcomes at the ground, then the arrangement is not carrying information here and the bond claim is wrong for this case.

### Q3  -  Are two different lab pathways isomers, or one functional group?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Consider two protocols with the same starting monomers and the same nominal energy source:

- Protocol A: solution-phase condensation, single temperature, no mineral.
- Protocol B: the same monomers fed in cycles onto a montmorillonite surface.

Ferris et al. (1996) report that A yields oligomers up to a 10-mer while B yields up to a 55-mer. Under Fig 12's definition these two are **isomers**: same atoms, different bond and arrangement, different substance, invisible in the ingredient formula and decisive in behaviour. The mineral surface is not an extra ingredient; it changes what the arrangement is.

If, instead, two protocols share only a vague family resemblance (both "mineral-assisted cycling") without the same atom set, they are not isomers. They are members of a **functional group**: the substructure `state → structure → cycling` fixes the kind, the qualifier (which mineral, which cycle) says which member. The weaker claim survives when the stronger fails.

**Falsifier, written before the run:** if two protocols with the same atoms but different mineral or cycling arrangement are indistinguishable at the ground, the isomer claim fails and only the functional-group claim stands. If two protocols with *different* atoms are nevertheless called isomers, the claim has been used with the wrong atom set and is withdrawn.

### Q4  -  What is the recursion?

Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom."**

A lab result that is settled against its own ground (reproducible yield under declared conditions) becomes an atom for the field protocol. The field protocol composes over it; it does not re-derive it. This is why carrying the method is cheap and re-deriving the yield at field scale is a new experiment. The transfer is a change of level, not a magnification.

**Falsifier for Q4:** a settled lab result that cannot serve as an atom for a field protocol without re-running the original lab work. Then "settled" was given to the wrong object, and the recursion claim fails at this level.

### Q5  -  Two currencies, and why they do not add

Fig 12 :125: **"A composition costs in two currencies, and they do not add."** Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**

A screening matrix is cheap in bits (a short protocol) and expensive in actions (many conditions tested). A single high-yield recipe is cheap to state and may take a whole field season to settle. Fig 12 :127: *"Neither figure predicts the other, so both are read or the choice is made blind."* A grant or a paper that reports only one (number of conditions described, or number of field tests run) is making the choice blind.

**Falsifier for Q5:** a cost accounting that sums bits and actions into one figure, or that predicts field-test cost from description length alone. That is the error the figure names, not the fix.

## CONCLUSION

The work runs in dependency order, perception to learn-and-carry, and it breaks at the objective (link 3) unless a field-equivalence criterion is supplied. The bond that carries the result is the arrangement (sequence, production, comparison), not the ingredient set, so a lab recipe that records only ingredients has lost the transferable half. Two protocols with the same atoms but different mineral or cycling arrangement are isomers under Fig 12 and are different substances; when they share only a family resemblance they are a functional group and the weaker claim holds. A settled lab result becomes an atom for the field protocol. Bits and actions price different things and must be read apart.

These are structural claims at mode `specified`. None is a field measurement. The falsifiers above are written before the run and are recorded in `01_figure_grounded_audit.md` §3 where they bear on the main shape.

## ANCHOR

Verbatim figure text re-opened at `FRAMEWORK/reference/03-FIGURES_TEXT.md` on 2026-11-23; Ferris et al. 1996 and Pianowski 2026 opened the same day. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 3 (dependency order, break location), Fig 4 (membrane, method over recording), Fig 11 (habitat enumeration, substitution), Fig 12 (bond types, isomer, functional group, settled molecule, two currencies), Operators table (sequence, production, comparison), Symbols table (`R` per slot, `R_T` round trip). Strains after re-census: none. The comparison bond's use at field scale is an effect description, not a claim that lab and field yields are quantities of the same kind; that identity remains ground-open.
