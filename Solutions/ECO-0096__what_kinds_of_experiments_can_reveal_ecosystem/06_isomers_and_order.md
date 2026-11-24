# Supporting derivation: design classes as isomers, and the order of the cascade

**Mode: `specified` on the structural mapping, `general` on the bond definition, `gap` on which isomer occupies a given ecosystem slot. Not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (`05_what_shape_means.md` §6).

## RESIDUAL

The main audit refuses to rank named designs and returns a four-condition separator. A second derivation is still owed: how are the named designs in the literature related to one another, and in what order must the parts of an investigation be attempted? Two questions follow.

1. Are BACI, difference-in-differences, regression discontinuity, synthetic control and the long-view record **isomers** over a shared atom set (Fig 12 :117), or merely members of a **functional group** (Fig 12 :123), or different substitutions of habitat (Fig 11 :66)?
2. What is the dependency order: the order of the investigation's links (Fig 3), and the order of the causal cascade (Fig 11 :52-53)?

## DOMAIN CENSUS

Atoms available in the ecology-methods frame, read off the sources actually opened, not invented: `before`, `after`, `impact`, `reference`, `time series`, `exogenous event`, `forcing variable`, `cutoff`, `donor pool`. Bonds available: the seven defined in Fig 12, with `−` subtraction, `⋛` comparison, `→` sequence, `⇒` production, `+` conjunction and `≡` identity doing the work. No new primitive is available without import. A mesocosm is not a new bond; it is a substituted habitat (Fig 11 :66).

## DERIVATION

### Q1 — The dependency order comes before the design order

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The ecological chain runs: perceive the slots and the cascade → acquire a term for what an ecosystem-level effect would be at each slot → state the objective (what would count as a reduction in `R`) → choose the route → carry the method onward. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Effort spent on contrast statistics (above the break) cannot rescue a missing objective term (below it). Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

The objective term is the one most often assumed. "Ecosystem-level effect" is treated as if it were already a measurable quantity. Under Fig 1 :19 it is not: *"The residual is indexed by object slot, not aggregated."* So the first design decision is not BACI versus RD; it is which slot and which crossing of the habitat the objective refers to.

### Q2 — The causal cascade has an order, and it is not the order of measurement

Fig 11 :52-53: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* The steps are: (1) direct contact (spray, plankton), (2) concentration through prey, (3) eggshell thinning and reproductive failure in the top predator. A design that measures at step 1 and declares a null has measured the first order and missed the residual.

The order of the cascade is `⇒` production (each step produces the next), whereas the order of measurement is often `→` sequence (sample this, then that). Fig 12 :74: *"swap them. Does it become a different thing? Yes."* Under `→` the order matters; under `+` it does not (Fig 12 :59: *"swap the operands. Does the meaning change? No."*). A chain of measurements is a sequence; a simultaneous multi-instrument reading is a conjunction. They are not the same design written two ways.

### Q3 — BACI, DiD, RD and synthetic control over a fixed atom set

Take the atom set `A = {before, after, impact, reference, time series, exogenous event}`.

- **BACI** is `((after_impact − before_impact) − (after_ref − before_ref))`. Subtraction twice, then a comparison of the difference against zero. Atoms: all four temporal/site atoms. Bond: `−` plus `⋛`.
- **Difference-in-differences** has the same written form. Craig et al. 2017 note that DiD *"is conceptually similar to the before-after-control-impact (BACI) experimental design"*; Schrodt et al. 2025 say it *"focuses on the before-after change of the difference between control and treatment groups within a BACI design"*. Under Fig 12 :68, *"two names, one referent"*, these are `≡` **identical as written**. The difference is not structural: in Stewart-Oaten, Murdoch and Parker 1986 the reference is *"deliberately chosen to be correlated with the Impact site"* (a covariate), whereas in DiD the control group's parallel trend is an assumption. Fig 12 :123 then applies: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* The group is the before/after/reference comparison; the qualifier is how the reference was obtained.
- **Regression discontinuity** uses a different atom set: `{forcing variable, cutoff, observations immediately above and below}`. Butsic et al. 2017 exploit a wildfire boundary where *"a strong discontinuity is the boundary of the wildfire"*. No `before` atom is required. So RD is **not an isomer of BACI** over `A`; it is a different molecule over a partly overlapping atom set, with `⋛` as its central bond.
- **Synthetic control** uses `{time series, donor pool, weighted composite}` and mints the reference atom from the donor pool rather than observing it. It is a composition that produces a reference atom, which then enters a BACI-like contrast. Craig et al. 2017: *"a synthetic control is a weighted average of control areas that provides the best visual and statistical match"*.
- **Interrupted time series** uses `{time series, change point, serial correlation}` and compares a fitted pre-trend with a post-trend. It is a comparison bond over a time series, not a site contrast.

So the honest classification: BACI and DiD are **functionally identical over `A` with different reference qualifiers**; RD and ITS are **different molecules over partly overlapping atoms**; synthetic control is a **composition that mints a reference atom**. No figure line ranks them. Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* The isomers over `A` are the variants of the reference atom and the choice of contrast bond; the behaviour difference is decisive in the field (covariate-selected reference versus parallel-trends reference versus minted reference).

**Falsifier, written before the run:** if two designs written over the same atom set with the same bond return different per-slot verdicts under the same ground, the isomer/functional-group mapping fails. If a design can be written only with an atom the other does not require, the identity reading of BACI and DiD fails and the functional-group reading stands.

### Q4 — Mesocosm is a substitution, not an isomer

Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."* Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."* A mesocosm does not recombine the atoms of a field design; it replaces the field habitat with a constructed one and inherits actors the designer did not choose (Fig 11 :67). The two silent failures are Fig 11 :68-69: *"what you failed to reproduce is invisible until the goal fails"*, *"what you unintentionally introduced is invisible until it acts"*.

Macaulay et al. 2025 report that mesocosm communities *"diverge from natural communities over time"* through wall growth, restricted dispersal and selection in an artificial environment, while still arguing for their use where the research scale fits. Petersen and Kemp 2008 call scale *"a crucial issue"* for extrapolation. Under re-census, these are claims about mechanism isolation, not about capability transfer. Both are kept; the strain is recorded in `01` §5 S1 and `11`.

### Q5 — Space-for-time is a different state bonded to a structure

Fig 13 :76: *"A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."* Blois et al. 2013 test exactly this substitution and find space-for-time predictions roughly 72 percent as accurate as time-for-time predictions, failing when temporal variation is small relative to spatial variation. Lovell et al. 2023 list transferability as the standing limitation. So space-for-time is not a free renaming of time: the bonded state changes, so the term changes. Its validity is an empirical question about the particular gradient, not a structural identity.

### Q6 — What the union means for the answer

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* The design classes overlap at the intersections: a natural experiment's before period can come from a paleo record; a synthetic control can supply the reference atom for a BACI contrast; a mesocosm can host an exogenous perturbation. One lever, for example "use BACI everywhere", clears the region where before/after/reference atoms exist and leaves the substitution and long-view intersections standing. So the output is not a winner but a per-domain verdict: which conditions are satisfied, which atom had to be imported, and which reference was minted.

## CONCLUSION

The dependency order is perception → objective term → route, and the causal cascade is a production chain whose residual can sit three steps out. BACI and difference-in-differences are the same written term over `before`, `after`, `impact`, `reference` with different reference qualifiers (functional group, not different substance); RD and interrupted time series are different molecules over partly overlapping atoms; synthetic control mints the reference atom; a mesocosm substitutes the habitat and cannot settle field capability; space-for-time changes the bonded state. No figure line selects a winner. The isomer reading is checkable, and its falsifier is stated above. Mode `specified` on the mapping, `general` on the bond rule, `gap` on which design fills a given slot.

## ANCHOR

Verbatim figure text extracted from the SVGs in `FRAMEWORK/reference/03-FIGURES_TEXT.md`; `THE_FORMULA.md`; world sources opened 2026-11-23 and logged in `10_source_ledger.csv`. No ecosystem measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order, link with no instrument), Fig 8 (union, idempotent closure), Fig 9 (union rather than partition, describe before looking), Fig 11 (cascade order, asymmetry, substitution harness, two silent failures), Fig 12 (functional group, identity, sequence versus conjunction, isomer, arrangement is the substance), Fig 13 (gradient over space versus time), Operators table (the seven bonds). Strained after re-census: the Fig 11 :70 versus mesocosm utility tension, narrowed to capability versus mechanism and kept visible.
