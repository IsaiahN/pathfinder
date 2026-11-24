# Comparison, convergence and isomerism in the microstate count

**Mode: `specified` on the physics-facing claims, `general` on the bond analysis, not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The equality `S_stat = S_BH` is written with an equals sign in the literature, and the two counting programs (string BPS and loop horizon geometry) are often spoken of as if they were the same account in different languages. Two questions are owed. (1) Is the equality an identity or a comparison? (2) Are the two accounts isomers under Fig 12's definition, or something else? An answer that gets the bond wrong will misstate what the evidence shows.

## DOMAIN CENSUS

Atoms available in this analysis: horizon area, distinguishability of states, quantization, degeneracy `Ω`, and the logarithm. Bonds available: the seven binary bonds plus negation. The string frame adds D-branes, BPS protection and CFT state counting; the loop frame adds spin-network punctures and horizon quantum geometry. These added items come from different closures, so neither is an atom held by the other frame. Dependency order: settle what kind of bond the equality is before deciding whether the two accounts are isomers, because isomerism is defined over atoms and bonds (Fig 12 :117), and the bond decision determines what the atoms are.

## DERIVATION

### Q1. Is `S_stat = S_BH` an identity or a comparison?

- The Operators table and Fig 12 :87 define comparison ⋛ as **"a threshold relation between two quantities"**, with the test **"is it about which is larger, rather than both being present? Yes."**
- Identity ≡ is defined as **"two names, one referent"**, with the test **"substitute one for the other. Is anything lost? No."**
- Substitution test applied here: replace the geometric reading with the statistical one. Something is lost. The geometric reading carries the anchor (horizon area, stationarity, the area theorem) and says nothing about degrees of freedom. The statistical reading carries the enumeration and says nothing about horizon area until the count is supplied. The opened Wikipedia *Black hole thermodynamics* page states the boundary directly: *"for the Schwarzschild black hole, viewed as the furthest-from-extremal black hole, the relationship between micro- and macrostates has not been characterized."*
- ⇒ The two readings **compare** at a threshold in a domain; they are not identical terms. Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."** Fig 12 :94: **"The arrangement is the substance."**
- **Falsifier, written before the run:** if substituting one reading for the other loses nothing, in particular if the statistical count supplies the area anchor without being compared to it, the identity reading wins and this finding is withdrawn. Triangulated (Operators table plus Fig 12 prose, low overlap within the framework). Mode `general`.

### Q2. Are the string and loop counts isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :95-96: **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."**
- The atom sets are not identical. The string count uses BPS soliton bound states and D-brane degeneracies (Strominger-Vafa abstract, opened 2026-11-23: *"counting the degeneracy of BPS soliton bound states"*). The loop count uses quantum geometries of the horizon distinguishable from the exterior (Rovelli abstract, opened 2026-11-23: *"the logarithm of the number of quantum microstates of the hole which are distinguishable from the hole's exterior"*). Supersymmetry is load-bearing in the first and not in the second as described.
- ⇒ By Fig 12's definition they are **not** isomers as actually written. They are **convergent derivations to one atom**: area scaling. Fig 8 :50: **"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."** Convergence is a stronger epistemic situation than isomerism here, because it carries independence; isomerism is a structural claim about arrangements over a shared set.
- **Correction to my own first pass.** I initially wrote that they are isomers because both "count states over an area." That stipulated a shared atom set the sources do not give. Re-census: different closures, different atoms, one shared outcome. Retracted as stated; the convergent-derivation reading stands.
- **The stronger, checkable form:** if one stipulates the shared set `{area, distinguishability, quantized count}` and writes each account as an arrangement over it, differing in which structure mediates the count, then they **are** isomers under Fig 12 :117. This is a real claim with a falsifier: if either account requires an atom the other does not (for example, BPS protection in one and not the other), the isomer claim fails and the convergent-derivation reading is the correct one. The falsifier is written before the run and the safest current verdict is convergent derivation.
- **Falsifier for the convergent-derivation verdict:** if both counts fix their normalization from the semiclassical area law, they draw on one evidence pool, so they are one witness wearing two names (Fig 2 :40, *"agreement about the world is worthless when the agreeing frames share an evidence pool"*). The Sen abstract (opened) is the cautionary case: *"stringy effects could correct the Bekenstein-Hawking formula for the black hole entropy in such a way that it correctly reproduces the logarithm of the density of elementary string states."* A correction that makes the formula reproduce the count is the opposite direction of travel from an independent derivation, and the record must say which happened. Triangulated for the definition (Fig 8 plus Fig 12); single-source for each physics instantiation.

### Q3. What order governs the comparison?

- Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."** The count link works in the protected sector; the area law works thermodynamically. The weak link is the objective: what would count as a failure of the match.
- `THE_FORMULA.md` step 2 routes a residual that is wrong to a refusal before a mint: **"REFUTED - a term held is false; what is owed is a refusal, not an explanation."** The ordinary sentence "string theory reproduces black hole entropy" is a term held too broadly. The refusal comes first: it reproduces for a protected class. Then the narrower term is offered.
- Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** Reproduction and identification are the two bundled conditions; they need separate loops and separate anchors.
- Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"** (the full figure line continues). Each protected-sector result is settled against its own ground and can serve as an atom for the comparison at the next level. This is recursion, not an import that moves a wall.
- **Falsifier:** if the protected-sector result is not actually settled (for example, if its match depends on a normalization chosen after comparison), it cannot serve as an atom and the second-order comparison is void. This is refuter 1 in `01_figure_grounded_audit.md` section 3, restated at this level.

### Q4. Does the count price the symmetry correctly?

- Fig 12 :92-93: **"Symmetry is what decides whether an arrangement is a new thing. Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges. Both wrong, in opposite directions, and only one is usually noticed."**
- The logarithm in `log Ω` means an overcount of spellings enters additively as `log₂(k!)`, which is exactly the bond price Fig 12 :100-101 describes: **"A bond costs what it could have been, and nothing more"** and **"A bond that costs nothing is a bond that carries nothing, which is the flat case."**
- The opened Wikipedia *Entropy (statistical thermodynamics)* page gives the world-side version: *"Neglecting correlations (or, more generally, statistical dependencies) between the states of individual particles will lead to an incorrect probability distribution on the microstates and hence to an overestimate of the entropy,"* and coarse graining leaves the entropy *"defined only up to an additive constant."*
- ⇒ A count that reproduces `A/4` has already identified which relabelings are symmetric and which are distinct. That identification is part of the shape, not a detail. **Falsifier:** if two counts of the same system, differing only in how they quotient gauge-equivalent configurations, give different logarithms, the symmetry-pricing claim is falsified and an instrument for the equivalence relation is owed. Triangulated (Fig 12 plus the statistical-mechanics source, genuinely low overlap).

### Q5. Why the "no last room" rule caps the answer

Fig 8 :56-57: **"The triangulation claim fits four cases already known and has not been tested forward: Wiles and Frey, Montgomery and Dyson, Bekenstein and holography, the relativization barriers in complexity theory."** Fig 7 :6 names **"the limit: no last room."** A final answer that declares the microscopic origin of black hole entropy settled for all black holes would be a terminal room. The figures forbid it. Fig 13 :90: **"One chain is one route through a space that has no last route."** This is not a rhetorical preference; it follows from the figure set. Mode `general`.

## CONCLUSION

The equality is a **comparison** (⋛), not an identity (≡). The string and loop counts are, on the sources actually read, **convergent derivations to one atom** (area scaling), not isomers, because their atom sets differ; the isomer reading survives only as a stipulated-shared-set claim with its own falsifier. The order of operations is: refuse the over-broad term, unbundle reproduction from identification, then compare, then settle. The count itself is a bond-symmetry problem, and the logarithmic currency is exactly where a symmetry mispricing shows up. The answer stops at a protected class with a protection-dependent result, and the general identification stays a named `gap`. All of this is `specified`/`general`, ungrounded, and simulated.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; the Operators table; `THE_FORMULA.md`; and the world sources opened 2026-11-23 and listed in `10_source_ledger.csv`. No measurement was taken by this agent. The three live strains named in `01_figure_grounded_audit.md` section 6 (coefficient normalization, buildability of a discriminator, operand type of ⋛ across closures) are carried here rather than hidden.
