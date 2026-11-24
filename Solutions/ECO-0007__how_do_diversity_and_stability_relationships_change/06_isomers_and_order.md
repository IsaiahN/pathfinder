# Stability metrics as isomers, and the order of aggregation

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §4).

## RESIDUAL

"Stability" is used as one word for several quantities. If resistance, initial resilience, and invariability are the same thing under different names, a single diversity-stability law could be sought. If they are different substances built from the same community atoms, the question must be unbundled. Two questions are owed: (1) are the stability metrics isomers under Fig 12, and (2) what is the order of a cross-scale derivation, and is that order commutative?

## DOMAIN CENSUS

Atoms held in D1: species, biomass, biomass change, perturbation, conditions. Bonds held in D2: ratio, inverse, time derivative, variance, aggregation over species, aggregation over sites. No new primitive is needed. Scale (D3) is a transform between levels, not a seventh member of Fig 13's set.

## DERIVATION

### Q1. Are the stability metrics isomers?

- Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124: "A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- Jarillo et al. (2022) define resistance as an inverse of relative displacement, initial resilience as a rate of return, and invariability as the inverse of squared coefficient of variation, all over the same biomass time series. Same atoms (biomass before and after a perturbation, across time), different bond (inverse, derivative, variance), different substance (they scale differently).
- ⇒ They are **isomers** in Fig 12's exact sense. They also share a **functional group**: all are responses of a system to perturbation. The group says "stability"; the qualifier says which member.
- **Falsifier, written before the run:** show that two of these metrics are related by identity (≡, two names one referent) so that one is redundant, or show that their scale dependence is identical in sign and magnitude so that the bond carries no information. If shown, the isomer claim fails and the metrics collapse to one quantity.

### Q2. What is the order of the derivation?

Fig 3 :19-20: "Optimising a link that already works cannot rescue one that does not. The chain is ordered by dependency, not by importance."

The dependency order for a cross-scale claim is:

1. **Perceive (D1):** enumerate species, sites, conditions, interactions. Fig 11 :43-44: "The habitat is enumerated, never composed." Read the list off the world.
2. **Name (D2):** define the stability metric in units before comparing anything. A link with no instrument is not a link that works (Fig 3 :27).
3. **Objective (D2/D3):** state what counts as a change across scale, that is, which quantity the transform must preserve. This is the middle link Fig 3 says usually breaks.
4. **Transform (D3):** aggregate, then run the round trip and measure `R_T` (Fig 4 :30).
5. **Carry (D4):** send the generator (shape plus refuter), not the recording, to an outside frame.

Effort spent fitting a universal diversity coefficient at step 1 lands above the break and cannot be used at steps 2 to 4.

### Q3. Is the order commutative?

Hodapp et al. (2023) partition meta-community variability either species-then-space or space-then-species, and both routes arrive at the same terminal meta-community variability (`CV_C,R`). This is Fig 13 :121: "Different routes can arrive at the same substance."

- The terminal quantity is the same substance, so no order claim is needed for the endpoint.
- The intermediate terms are different, and the synchrony coefficients extracted along the two routes differ (Hodapp et al. find species synchrony roughly twice spatial synchrony on average). So the route is not interchangeable with the substance:Fig 13 :129: "It is recoverable from the lineage."
- ⇒ The derivation is order-independent at the endpoint and order-dependent on the way. A report that omits the route loses the only checkable part of the result.
- **Falsifier:** show that the two aggregation orders yield different terminal values for the same dataset, or that the intermediate synchrony terms are identical, so the lineage carries no information.

### Q4. Does this import a new primitive?

No. Space and time are already states in Fig 13; spectrum, gradient, and network are already structures. "Scale" is the name of a transform between levels, not a member of the set. Fig 13 :115: "The set is closed. The arrangements are not." Adding a seventh primitive to explain scale would be the error the figure forbids.

- **Falsifier:** derive a stability scaling effect that cannot be expressed as an arrangement of the six existing terms, so a new member is genuinely owed.

## CONCLUSION

The stability metrics are **isomers** over the same community atoms, sharing a functional group ("response to perturbation") and differing in the bond that carries the information. A single diversity-stability quantity is therefore a notation error of the flat-formula kind (Fig 12 :14-17: "the ingredients are recorded and the arrangement is not / nothing downstream can tell them apart"). The cross-scale derivation has a fixed dependency order (perceive, name, objective, transform, carry) and is commutative only at the terminal substance, not along the route. No new primitive is imported.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, Fig 3, Fig 4, Fig 11, Fig 12, Fig 13; Jarillo et al. 2022; Hodapp et al. 2023. No measurement was taken in this run.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 (round trip gap), Fig 11 (habitat enumerated, valence relative), Fig 12 (isomer, functional group, flat formula, lineage), Fig 13 (different routes, same substance; closed set). Strains after re-census: none. The one open item is whether the `R_T` gap can be measured numerically for a given dataset, which needs an instrument, not a further derivation.
