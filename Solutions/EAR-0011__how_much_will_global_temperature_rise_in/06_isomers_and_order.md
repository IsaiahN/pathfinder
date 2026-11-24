# Forcing efficacy as isomers, and the order of the response chain

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The audit in `01` leaves one structural question open: if a radiative forcing is a single currency (W m-2), why does the measured response depend on which agent supplied it? Hansen et al. 2005 report efficacy roughly 110 percent for CH4, about 145 percent with indirect effects, about 58 percent for biomass-burning black carbon and about 78 percent for fossil-fuel black carbon. Same currency, different response. Two questions are owed:

1. Are different forcing agents **isomers** under Fig 12's definition, or merely members of one **functional group**?
2. What is the dependency order of the response itself: transient, then equilibrium, then Earth-system, and what licenses promoting one to the next?

## DOMAIN CENSUS

Atoms held for this derivation: energy-like forcing (a state), time (a state), spectrum/ordering (a structure), gradient (a structure), network (a structure), plus space (a state, relevant to where a forcing is applied). Operators held: ordered `→` sequence, `⋛` comparison, `¬` negation. No new primitive is available without import.

For D4 of the audit: actors are forcing agents and their geographic and vertical placement; currency is W m-2 multiplied by efficacy; anchor is single-forcing experiments and observed pattern effects (Hansen 2005; Tierney et al. 2020 for the paleo side).

## DERIVATION

### Q1: Are forcing agents isomers under Fig 12?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Write two forcing molecules over the same atom set:

```
M1: Energy(forcing) -> Spectrum(vertical/geographic placement) -> Time(response)
M2: Energy(forcing) -> Gradient(placement and adjustment) -> Time(response)
```

Both share the forcing and time atoms. The structure in the middle differs. In the *formula* that records only Watts, they are indistinguishable: both are "2 W m-2". In *behaviour* they are not: methane and black carbon give different global temperature changes per Watt. That is exactly the isomer condition: same recorded ingredients, different arrangement, different substance. Fig 12 :94: **"The arrangement is the substance."**

### Q2: Or are they only a functional group?

Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

If the shared substructure is just `forcing → response`, then all agents belong to one functional group: the group says "radiative forcing", the qualifier says "CO2", "CH4", "black carbon". The consequence is different from the isomer reading. Under the functional-group reading, a single scalar sensitivity is a legitimate coarse description (the group fixes the kind of outcome) and efficacy is a qualifier to be attached afterwards. Under the isomer reading, the scalar is a lossy projection that hides decisive information.

Both readings are figure-licensed. Which applies is decided by the instrument: if efficacy differences survive a source-discriminating instrument, the isomer reading governs; if they collapse to 1, the functional-group reading governs. This is the falsifier, written before the run (below).

### Q3: What is the order of the response chain?

Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."**

1. **First order:** forcing → feedback chain → transient warming. This is settled against the instrumental record for the historical period.
2. **Second order:** the first-order molecule, settled, becomes an atom. The long ocean tail and slow feedbacks compose over it to give equilibrium warming. Sherwood et al. 2020 report that long simulations equilibrate to a higher warming than the effective sensitivity over the first 150 years, with a median difference of about 17 percent at 4xCO2 for the models examined, partly offset by state dependence. The order is therefore real and measurable, not a definition.
3. **Third order:** Earth-system sensitivity composes over equilibrium, adding slow carbon-cycle and land-ice feedbacks. Tierney et al. 2020 supplies the paleoclimate anchor for this order.

The recursion is Fig 12's, not an import: each settled molecule becomes an atom for the next level. It is also ordered, matching the Operators table's `→` (*"A then B; B needs A to have happened"*). You cannot state equilibrium warming before the transient molecule has been settled, because it is composed over it.

### Q4: Where does negation enter?

Fig 5 amendment: the fifth kind of gap is *"refuted: a term we hold is wrong; a term is owed that says so."* The Operators table: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."*

If a measured efficacy turns out to be 1 within resolution, the isomer term must be **refused**, not re-fitted. The record keeps the isomer term and its refusal; the reach falls because something was added (Fig 6 amendment). This is why the falsifier in this file is a negation and not a new number.

## FALSIFIER, WRITTEN BEFORE THE RUN

If a source-discriminating instrument shows that all forcing agents have efficacy 1 within its resolution, so that placement and agent identity change nothing in the temperature response per Watt, then:

- the isomer reading of Q1 fails;
- only the functional-group reading of Q2 stands;
- the D4 domain in `01_figure_grounded_audit.md` is re-censused as a single scalar slot;
- this failure is recorded in the retraction log of `01`, with the date and the source, and is not silently removed.

A secondary falsifier: if equilibrium warming can be measured without first settling the transient molecule, the ordered chain in Q3 is wrong and the response is a partition, not a sequence.

## CONCLUSION

Under Fig 12, forcing agents with the same forcing magnitude but different placement and efficacy are **isomers over a shared forcing atom set**, while the universal "degrees per watt" scalar is their **functional group**. Which description governs is an instrument question, not an argument. The response chain is ordered first order (transient), second order (equilibrium), third order (Earth-system), with each settled molecule becoming an atom for the next level by Fig 12 :104. The isomer claim has a pre-registered falsifier; the scalar claim inherits the opposite one. Both are `specified`, ungrounded by this run.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, `THE_FORMULA.md`, and the world sources actually opened: Hansen et al. 2005, Sherwood et al. 2020, Tierney et al. 2020. No measurement was taken in this derivation.

## FIGURE CENSUS

Fig 12 :94 (arrangement is substance), :104 (settled molecule becomes atom), :117 (isomer), :124 (functional group); Fig 5 amendment (fifth kind, refusal); Fig 6 amendment (record grows, reach can fall); Fig 1 :19 (residual per slot); Operators table (`→` ordered, `¬` unary negation); Fig 9 :27 (residual first, frame second). Strains: "different bond" is used as shorthand for different placement and efficacy, not as a claim that an eighth bond exists; this is named, not hidden.
