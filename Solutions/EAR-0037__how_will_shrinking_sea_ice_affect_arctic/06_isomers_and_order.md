# Structure and order in the sea-ice cascade

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The main audit splits the question into one driver and three receivers, but it does not say what *kind* of arrangement joins them, nor what order the joins run in. Two questions are owed:

1. Can the causal chain be written with the figure's typed bonds, and which bond governs each step?
2. Are the receiving domains isomers of one another under Fig 12's definition, or merely members of a functional group?

## DOMAIN CENSUS

Atoms held: the six substrate terms (Fig 13), plus the observed cryosphere actors read off the world (sea ice extent, albedo, ice algae, Calanus, Arctic cod, pressure fields, shipping, subsistence). Bonds held: the seven (three symmetric: `+`, `∥`, `≡`; four ordered: `→`, `⇒`, `−`, `⋛`) plus the unary negation `¬`. No new primitive is available without import. Valence is relative to the residual (Fig 11 :49).

## DERIVATION

### Q1 - What bond governs each step

Fig 12 :46: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."*

| step | bond | figure test | reading |
|---|---|---|---|
| ice removed from the habitat | `−` subtraction | *"is the second operand's absence the point? Yes."* (Fig 12 :84) | the absence is the driver, not a bystander |
| melt onset before bloom | `→` sequence | *"swap them. Does it become a different thing? Yes."* (Fig 12 :74) | earlier melt changes which bloom occurs; order matters |
| ice algae and light co-occur | `+` conjunction | *"swap the operands. Does the meaning change? No."* (Fig 12 :59) | a symmetric co-condition, not a route |
| bloom creates biomass not present before | `⇒` production | *"is there a B before A fires? No."* (Fig 12 :79) | the under-ice bloom is new production |
| ice extent below a navigability threshold | `⋛` comparison | *"is it about which is larger, rather than both being present? Yes."* (Fig 12 :89) | shipping responds to a threshold, not to mere presence |
| albedo loss returns as more absorbed heat | cycle (not a bond) | Fig 12 :121 *"The output re-enters as input. The sign of the loop decides whether it closes"* | a closed loop, which a chain cannot express |
| an attribution result that would refute a claim | `¬` negation | Operators table *"is the point that it is false, rather than absent? Yes."* | a refutation, which subtraction cannot write |

**Ordering caveat.** Writing the chain entirely with `→` would be the "flat chain" failure the Operators table names: *"the only bond a flat chain can express, so every term today is a sequence whether or not it should be."* The melt/bloom step is genuinely ordered; the co-occurrence of ice and light is symmetric. Charging sequence for the symmetric step overcharges by log₂(k!) (Fig 12 :92-93). The shape must state which joins are ordered and which are not; it must not let the notation decide.

### Q2 - Are the receiving domains isomers?

Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
Fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

- As the question is usually posed, D1 (ecosystems), D2 (weather) and D3 (human activity) share only the driver `sea-ice loss`. They do **not** share an atom set. Under Fig 12's definition they are **not isomers**; they are three members of a functional group, *"receiving from one upstream condition, each with a different qualifier"* in the language of Fig 12 :123.
- The stronger form: write all three over the full shared atom set {ice, albedo, light, water, season, energy, gradient, network}, differing only in which bond mediates which pair. Then D1 is dominated by `⇒` and `network` relations, D2 by `gradient` composed into `flow` plus a `cycle`, D3 by `⋛` thresholds and `−` access. Under that shared set they **are** isomers: same atoms, different bonds, different substance. That is the checkable structural claim worth carrying.
- **Falsifier, written before the run:** if two domains can be written over the same atom set with the same bonds and still produce different behaviour, the isomer claim fails and the functional-group reading stands. If one domain requires an atom the other two do not (for example a genuinely non-physical currency in D3), the shared-set claim also fails.

### Q3 - What order does the dependency chain actually have?

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* Dependency order:

1. D0, the measured sea-ice state. This link is reached; it has an instrument (Fig 3 :16 *"reached, so its state can be read"*).
2. D1 and D2, in parallel, each consuming D0.
3. D3, consuming both D1 and D2.
4. Feedback from D2 to D0 (signed loop) and from D3 to D0 (emissions).

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* The measurement link (D0) is already working. Effort spent refining extent statistics cannot rescue the weakly instrumented link, which is the objective link: saying what counts as progress in each receiver's currency. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* For the midlatitude magnitude in D2, the instrument is contested; for several cultural dimensions of D3, the instrument is community record and judgment, not a satellite.

### Q4 - The analogue that governs the cascade

Fig 11 :52-54: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

This is the framework's own analogue for D1. It says that enumerating only direct contact is a known failure mode, and that the effect that matters can be three steps out. The world-side analogue in the opened sources is borealization: Wise et al. report that warming, sea-ice loss and shifting productivity restructure a 27-taxon ecosystem and propagate to fisheries and food security. The analogue corroborates the shape; it does not derive it, and it comes from a different field with low overlap to the figure text. It is recorded as corroboration only in `09_watson_answer.md`.

### Q5 - A cycle that a chain cannot write

Fig 12 :121 again. The ice-albedo feedback is the loop in D2. It cannot be represented by any sequence of bonds, because a chain has no return edge. This is why the question needs the cycle structure and not a longer causal list. If a reader insists on writing the weather domain as a straight chain, they have silently set the loop sign to zero, which is one of the live refuters in `01` Section 3.

## CONCLUSION

The causal chain is not a flat sequence: it contains a symmetric co-condition, a genuine order, a production, a threshold, and one closed loop that no chain can express. D1, D2 and D3 are a functional group as the question is normally written, and a real isomer claim only when all three are composed over a shared atom set. That stronger claim has a stated falsifier. Dependency order puts the measured ice state first and the weakly instrumented objective link in the middle, so effort on better ice statistics cannot substitute for a currency and an anchor in each receiving domain.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened 2026-11-22; the Operators and Symbols tables in the same extract; the NOAA Arctic Report Card essays in `10_source_ledger.csv`. No new measurement was taken by this author.

## FIGURE CENSUS

Fig 3 :19-20, :27 (dependency, instruments); Fig 11 :49, :52-54 (valence, contact cascade); Fig 12 :46, :59, :74, :79, :84, :89, :92-93, :117, :121, :123 (bond tests, pricing, isomer, functional group, cycle); Fig 13 (substrate atoms); Operators table (flat-chain failure, negation). Strained after re-census: none. The cycle applies only to D2; the cascade only to D1; the threshold reading only to D3 and to navigability.
