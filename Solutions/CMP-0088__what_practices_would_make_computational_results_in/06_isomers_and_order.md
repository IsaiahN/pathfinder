# Supporting derivation: structure, order, and analogues

**Mode: `specified` on the structural claims, `general` on the dependency order. This is a simulated derivation checked against the figures, not a ground reading** (see `05_what_shape_means.md` section 6).

---

## RESIDUAL

Two questions are owed after `01`:

1. Are repeatability, reproducibility and replicability different *things* under the figure definition of a molecule, or three degrees of one thing?
2. In what order should the practices be applied, and what breaks the chain if the order is wrong?

A third follows from F8: software, data and parameter choices are a union compound, so the order must be run per condition before the compound is handled.

---

## DOMAIN CENSUS

Atoms held: a team, an experimental setup, software artifacts, a data artifact, a parameter configuration, a random stream, an anchor, a comparison tolerance. No new primitive is available without import. Bonds held: the seven, including → sequence, ⋛ comparison, − subtraction, and the unary ¬ refusal. Negation is not a bond.

The three domains from `01` recur: D1 original run, D2 reproducing party, D3 transmission channel. Currency in D3 is twofold (bits and actions), which is what makes an isomorphism between the three reproduction kinds fail if you try to price them with one number.

---

## DERIVATION

### Q1: Are the three reproduction kinds isomers?

- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :94 "The arrangement is the substance."
- ACM (2020) defines the three by which operand is held fixed: repeatability holds team, procedure, system, operating conditions and location fixed; reproducibility changes the team but keeps the author's artifacts; replicability changes the team and the artifacts.

Under Fig 12 the three share an atom set (team, setup, artifacts, ground) and differ in the bond pattern, that is, in which operand is allowed to vary. Same atoms, different bond, different substance. They are **isomers**, not three points on one scale. This matters operationally: a protocol that improves repeatability by pinning the environment does not thereby improve replicability, because the bond that varies is different. The visible formula ("we reproduced the result") is the flat case that hides the difference.

**Falsifier, written before the run:** if one intervention (for example, containerising the environment) raises all three measures together across a set of published results, the three are one substance under one bond and the isomer claim fails. The functional-group reading would stand instead: three members of a family of "verification by a second party" sharing a pattern but not an arrangement.

### Q2: What order do the practices run in?

- Fig 3 :20 "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."
- Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one."
- Operators table :46 "progress is a subtraction, which is why a vocabulary without it cannot say how far along it is"
- Operators table :51 "a goal is a comparison, which is why a vocabulary without it cannot state one"
- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

Mapped to this question, the five links are:

1. **Perception.** Can the second party tell what the result was and what it was measured against?
2. **Vocabulary.** Are there terms for versions, data identifier, parameter values, seeds and raw readings?
3. **Objective.** What counts as agreement, in the second party's own terms? This is ⋛ with a declared tolerance, and it is the middle link where the chain usually breaks.
4. **Planning.** Is there a route to re-run under a changed setup?
5. **Learn and carry.** Is what worked named, verified and carried as a method rather than as a recording?

`Fig 3 :25-26` "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." Most reproducibility effort lands at links 1, 2 and 5, where the measurements already exist. The missing instrument is link 3: the tolerance. Without it, link 4 has no target and link 5 carries a recipe nobody can grade.

**Falsifier:** show a case in which a second party reaches a sound verdict with no declared tolerance and no executable route, using only a parameter list and a narrative description. If so, link 3 has an instrument and the dependency order claim fails.

### Q3: What is the union of software, data and parameters?

- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- Fig 9 :57-58 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

Run each condition's loop separately: pin software and test; freeze code and vary data; freeze both and sweep parameters. Then take the intersections as their own case. A result that fails only when a version change meets a data revision is not a harder case of either. It is a compound with its own ground, and a single lever will clear the single-condition regions while leaving it standing.

**Falsifier:** one intervention that closes the residual in all three conditions and in every intersection, without separate handling of the compound.

### Q4: Analogues, and where they stop

- **Abstract interpretation.** Fig 4 :36 "The round trip is a rediscovery of the abstraction-and-concretisation cycle in abstract interpretation, Cousot and Cousot, 1977." The method carried up from a run is an abstraction; the re-run is concretisation. What is not borrowed is using the size of the gap to decide when a new term is worth minting.
- **Effective sample size.** Fig 2 :44 "The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning." Ten same-stack re-runs do not count as ten independent checks. This is ACM's "Results Reproduced" versus "Results Replicated" distinction in statistical clothing.
- **Metrology.** ACM imports the VIM definitions of repeatability and reproducibility. The result of a computation is treated as a measurement of a virtual object. This is a source-gated import from a different closure; its provenance is recorded, and it corroborates without overruling.
- **Cost carried forward.** Fig 12 :107 "Settling compresses the description and not what it cost to establish." Fig 12 :109-110 "across a boundary that drops it, everything is." A manifest that does not cross the boundary from author to reader forces every lineage to pay the discovery cost again. This is why the lineage travels with the method.
- **Habitat limit.** Fig 11 :71-72 "an agent-only improvement that moved the ground would refute the capability claim." In this setting, an agent-only improvement is a better optimizer that leaves the data and contact conditions unchanged. If it moved the ground, the habitat claim would be wrong; until then, treat harness gains as wiring gains.

**Falsifier for the analogue block:** show that a method abstracted from one run and reapplied in another suffers no loss, so `R_T = 0` and the round trip is reversible. That would break both the abstract-interpretation analogue and F2 of `01`.

---

## CONCLUSION

The three reproduction kinds are **isomers** under Fig 12's definition: same atom set, different bond pattern, decisive difference in behaviour. They are not a maturity scale, so improving one does not automatically improve another. The practice order is fixed by dependency (Fig 3), and the middle link is the declared tolerance, which is a comparison bond ⋛ and a subtraction of residual, not a documentation step. Software, data and parameters form a union compound whose intersections need their own loop. The analogues (abstract interpretation, effective sample size, VIM metrology) corroborate from different fields; none overrules a figure line. Each claim above carries a falsifier written before the run.

---

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-22. ACM Artifact Review and Badging version 1.1 (2020), read 2026-11-22. No measurement was taken in this simulated derivation.

---

## FIGURE CENSUS

Fig 2 (effective sample size, independence), Fig 3 (dependency order, the middle link), Fig 4 (round trip, abstract interpretation), Fig 9 (union compound), Fig 11 (habitat, capability), Fig 12 (isomer, arrangement, cost carried forward, settled molecule), Operators table (comparison and subtraction), Symbols table (`R` per slot). Strains after re-census: none hidden. F5 and F6 in `01` remain single-source within the figures; this file does not triangulate them further.
