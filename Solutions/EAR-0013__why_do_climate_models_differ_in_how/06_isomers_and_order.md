# Parametrizations as bonds: isomers, functional groups and order

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

Two climate models can hold the same list of cloud variables, cloud fraction, liquid and ice water path, optical depth, effective radius, and still predict different warming. The ordinary vocabulary says one has "different physics." That is a name, not a shape. Two questions are owed: (1) under Fig 12's definition, are two such schemes **isomers**, and (2) what is the **order** of the composition from a cloud droplet to a global warming prediction, and where does it break?

## DOMAIN CENSUS (for this supporting derivation)

Atoms held in the climate-modeling closure: cloud fraction (C), liquid water path (LWP), ice water path (IWP), cloud optical depth (tau), effective radius (r_e), cloud-top pressure, updraft velocity, temperature, humidity, aerosol number, sea surface temperature, inversion strength. Bonds held: the seven of Fig 12 plus negation. No new primitive is available without import from a process model or an instrument.

## DERIVATION

### Q1 — Are two cloud schemes with the same variables isomers?

Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Fig 12 :94: **"The arrangement is the substance."** Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**

- Scheme A: aerosol number **production** (⇒) cloud droplet number, which **compares** (⋛) with a threshold for autoconversion, which **subtracts** (−) water from the cloud. Scheme B: the same atoms, but updraft velocity **sequences** (→) droplet activation and the phase partition **compares** (⋛) temperature against a freezing threshold. Same ingredient list, different typed bonds, different predicted CRE response. That is the figure's definition of isomer.
- The stronger form requires a **fixed atom set**: both schemes must be written over the same variables. This is a real condition, not a formality. A scheme that adds a new prognostic variable (a seventh atom in this local vocabulary) has not rearranged; it has imported (Fig 6 :21, *"MINT composes inside the closure and can never add an atom"*).
- If the two schemes share only a few variables, e.g. cloud fraction and temperature, they are **not** isomers. They are two members of the same **functional group**: both are `state → structure → state` molecules in the Fig 13 sense, with different atoms in the slots. Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

**Falsifier, written before the run:** if two schemes with identical variable lists and demonstrably different bonds produce identical radiative responses in every regime, the isomer claim fails and only the functional-group claim stands. Conversely, if the response difference disappears when the atom sets are allowed to differ, the difference was an import effect, not an arrangement effect.

**World corroboration (secondary):** Zelinka et al. 2020 (opened) attribute the CMIP5-to-CMIP6 cloud-feedback change to increased mean-state supercooled liquid water in mixed-phase clouds, with references to Frey and Kay 2017, Tan et al. 2016, Bodas-Salcedo et al. 2019 and Gettelman et al. 2019. That is a change in the state held and therefore in the bonds available, not a global slider. Zhao et al. 2022 (opened) show that cloud fraction is decisive for CRE in observations while models make CRE too sensitive to LWP and optical depth: same variables, different mediating bond. Both papers are one CMIP evidence pool, counted as one witness.

**Status:** triangulated for the definition (Fig 12 :46/:94/:117 plus the held-atom condition from Fig 6 :21); `single-source` on the world side (one pool).

### Q2 — What does the substrate say about the composition order?

Fig 13 :74: **"Everything else is a composition across the two kinds, never within one."** Fig 13 :75: **"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."**

A local chain from a droplet to a flux reads:

```
temperature(state) -> phase-partition(structure) -> optical-depth(state-like field)
   -> radiation(structure) -> TOA flux(state-like measurement)
```

Fig 13 itself licenses more than one first-order molecule: *"A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."* So a phase partition over temperature and a phase partition over height are different terms, which is exactly why a mixed-phase scheme can matter in one region and not another. This is F9 of `01` in structural form.

**Caution, kept visible.** Applying the six physical terms (space, time, energy, spectrum, gradient, network) directly to cloud variables is a Category error if taken literally. The re-census resolves it: for EAR-0013 the six-term set governs the *form* of composition (cross-kind alternation, level-relative irreducibility), while the concrete cloud variables are bindings from the physics frame onto that form. Fig 4 :20: *"Only the actors, the currency and the anchor change."* The kernel stays; the cast changes. This re-census dissolves the apparent strain between Fig 13 and the climate vocabulary, and is recorded in `01` §6 and `11_audit.md`.

### Q3 — Where does the order break?

Fig 3 :20: **"The chain is ordered by dependency, not by importance."** Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**

Name the links for this question:

1. perception: satellite flux and active-sensor profile (works, with known limits);
2. vocabulary: a common definition of a cloud regime between model and satellite (works only when a simulator is run, COSP);
3. **objective: what counts as progress, present-day flux or dCRE/dT (breaks here);**
4. planning: parameterization and resolution choices;
5. learn and carry: CMIP, CFMIP, emergent constraints.

Link 3 has no discriminating instrument in much of the literature, because present-day mean-state skill does not predict feedback skill (Eos/Zelinka 2022, opened). Effort at links 4 and 5 cannot rescue it. Fig 3 :23: *"A step whose input never arrives cannot be diagnosed, only its predecessor can."*

**Falsifier:** a deployed objective that selects realistic cloud feedback using only present-day mean-state metrics would move the break from link 3 to another link. That would refute this Q3 and require a new census, not a softer reading.

### Q4 — How does order cross the scale membrane?

Fig 4 :22: **"Only methods cross up. Only head starts come down."** Fig 4 :23: **"upward: a method that can be reapplied. Never the recording of a particular success."** Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

- Upward: a cloud-resolving model yields a *method* (a closure for sub-grid statistics, a process understanding) that can be reapplied at coarse resolution. That is permitted.
- What must not cross upward is a recording of one successful tuning: a parameter value fitted to one present-day satellite period, replayed as if it were a method. Fig 4 :26: **"Replayed downward, it produces a system that repeats a past success and cannot produce a new one."**
- The transform is lossy in both directions, so a round trip from grid-box cloud fraction up to a process closure and back down does not return the original. The gap is R_T and must be measured (Fig 4 :30). Treating a condensed cloud scheme as identical to the process it approximates sets R_T to zero, which is the dead-reckoning error.

**Falsifier:** a cross-scale round trip measured to be lossless would break the claim that a gap is owed. A single demonstrated case of a parameter value transferred as a method and remaining valid across climates and resolutions would narrow it further.

### Q5 — Is a multi-model ensemble a union with a surplus?

Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."** Fig 8 :50: **"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."** Fig 8 :53: **"Residual first, frame second."**

A union of 30 CMIP models with shared code ancestry, shared forcing and shared evaluation data is a blend, not a triangulation: same atoms, different names (Fig 8 :12-15). A union of a GCM, an active-sensor retrieval, a field campaign and a large-eddy simulation, all describing the same residual with different evidence, has a surplus. Convergence is possible but only the record of where each came from distinguishes it from adopted import (Fig 8 :50-52). This is F8 of `01` in bond language.

**Falsifier:** demonstrate zero evidence overlap between two CMIP centers, including evaluation data and tuning targets, and show that their agreement survives an anchor test. Then the surplus claim is true for that pair and the general warning must be narrowed.

## CONCLUSION

Over a fixed variable set, two cloud parameterizations are **isomers** under Fig 12 :117: same atoms, different typed bond, different radiative substance. Where they share only a few variables, they are members of one **functional group** rather than isomers. The composition order from droplet to warming is a cross-kind chain whose discriminating link is the objective, not the physics, and the scale membrane permits methods upward and head starts downward, never a recording of one success. Multi-model agreement is a surplus only where closures and evidence genuinely differ. Every one of these claims is `specified`, ungrounded, and carries a written falsifier.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. World material: Zelinka et al. 2020 (OSTI/LLNL full text), Bock and Lauer 2024 (ACP), Zhao et al. 2022 (Advances in Atmospheric Sciences), Eos/Zelinka 2022, NCAR Climate Data Guide COSP page, all opened 2026-11-22. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 3 (dependency order, break at objective), Fig 4 (membrane, methods up, head starts down, round trip gap), Fig 6 (composition cannot add an atom), Fig 8 (idempotent closure, convergence versus import, residual first), Fig 12 (bond type, arrangement is substance, isomer, functional group), Fig 13 (cross-kind composition, licensed multiplicity of molecules). Strains after re-census: the literal mapping of the six physical terms onto cloud variables was retracted and replaced by a form-versus-binding reading; Fig 8 convergence versus blend is dissolved by measuring overlap rather than asserting it.
