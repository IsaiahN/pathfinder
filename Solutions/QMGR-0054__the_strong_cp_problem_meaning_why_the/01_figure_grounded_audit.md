# Figure-grounded audit: the strong CP problem as a residual

**Mode of this document: `specified`, with `general` structural claims. Not `grounded`.** Per THE_FORMULA.md: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* One ground fact is quoted from the experiment literature; the derivation itself is not a measurement.

**Status: a simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output approximates an answer but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is checked for internal consistency against the figures only. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure text: `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`, opened this session. Canonical usage: `local: ...\FIGURES_README_canonical.md`. Loop and mode rule: `local: ...\figures\THE_FORMULA.md`. World sources listed in `10_source_ledger.csv`, all opened this session.

---

## 0. The residual, stated in effect terms

The QCD Lagrangian permits a CP-violating term `(theta_bar g^2 / 32 pi^2) G_mu_nu G_tilde^mu_nu`. Through the axial anomaly and the quark masses the physical CP angle is `theta_bar = theta - arg det(Yu Yd)`. It is periodic and free in [0, 2 pi]. The experiment returns a neutron EDM consistent with zero at a precision of `10^-26 e cm`. The link is `d_n approximately (5.2 x 10^-16 e cm) theta_bar` (Wikipedia, Strong CP problem). So:

- predicted, for generic theta_bar of order one: `d_n` of order `10^-16 e cm`;
- observed: `d_n = (0.0 +/- 1.1_stat +/- 0.2_sys) x 10^-26 e cm` (Abel et al. 2020), bound `|d_n| < 1.8 x 10^-26 e cm` at 90 percent CL;
- implied: `theta_bar < 10^-10`.

The residual R is the ten-order gap between what the QCD closure permits and what the ground returns, indexed to one slot (the neutron EDM). It is *not* "why is CP conserved," because the weak frame shows CP is violated at an order-one CKM phase (NC State / TUNL neutron EDM page). It is *not* "why is there more matter than antimatter," which is a different slot with a different ground. Aggregating those would delete the signal (Fig 1 :19).

**Option A:** accept theta_bar near zero as a raw parameter value or impose it by hand. **Option B:** keep R live, refuse the in-closure fix, and characterise the shape of an import that would relax theta_bar_eff dynamically, leaving the specific name open until a ground settles it. This audit derives B.

---

## 1. Domain census, before choosing any figure line

R by arity, symmetry, scale. Arity: one observable slot, but two contributing CP conditions plus the measurement, so a **union compound** at the parameter level (Fig 9 :57), not one hard question. Symmetry: theta_bar is an angle on a circle (periodic), and the symmetry under test is CP; the residual is a comparison between two magnitudes ten orders apart. Scale: the theta term is non-perturbative and first order inside the QCD closure; the candidate mechanisms sit at a higher scale and are imports.

One line per domain. A domain needs actors, a currency and a nameable anchor.

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1 QCD theory frame | theta_bar, `G Gtilde`, instantons, quark masses, Yu/Yd | predicted EDM magnitude | none internal (theta_bar is an input) | **no** |
| D2 experimental frame | ultracold neutrons, Ramsey fields, 199Hg comagnetometer, electric field | measured EDM and upper bound | the measured number | **yes** |
| D3 weak-interaction frame | CKM phase, K and B meson CP violation | CP violation magnitude | observed CP violation in K/B decays | **yes** |
| D4 mechanism / beyond-SM frame | PQ symmetry, axion field, massless up quark, Nelson-Barr high-scale CP, inflation/anthropic selection | dynamical relaxation of theta_bar_eff | none yet (axion undetected, EDM null) | **no** |

D1 fails the anchor test as a settling domain: "its value is not predicted by the theory, but must be measured" (Wikipedia, Axion). It is still a domain (it has actors and a currency), but its anchor is absent, so it cannot close R from inside. D2 and D3 have real anchors. D4 is a candidate set of imports, not yet a settling domain.

**Partition or union.** Union, not partition. The question "why no neutron EDM" bundles "why is theta_bar tiny" with "why does the weak phase not produce a larger EDM." Fig 9 :57: *"a case in two conditions is not a harder case of either."* Unbundle before searching (Fig 9 :54).

**Order by dependency (Fig 3).** Anchor the ground first (D2); refuse the easy answer using the weak frame (D3); search the QCD closure (D1) with SEARCHED; then go outward for an import (D4), described in effect terms before a frame is picked; only a new ground reading settles which mechanism.

Strain test applied before findings: a line that only fits with a strain governs another quantity. Notably Fig 6 says import is the only operator that moves the wall, while the axion mechanism is described as "setting theta_bar to zero" without adding a particle to the world until detected. These are compatible once re-census separates closure-access (a frame gains an atom) from world ontology (Fig 6 :25, *"An import adds no atom to the world"*). No strain left after this re-census.

---

## 2. Findings, quoted verbatim before concluding

### F1: The residual is one slot, not an average (general)

Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* The neutron EDM is a single slot. Electron and mercury EDMs, baryogenesis and dark matter are other slots with their own anchors. Collapsing them into one "CP problem" is how a live signal disappears into an average. *Verdict: triangulated* (Fig 1 and the experiment's own per-observable reporting of a blind analysis). Mode `general`.

### F2: The ground is the EDM measurement, and it does not update (grounded for the bound)

Fig 2 :29-30 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."* The Abel et al. value does not move when a theorist prefers theta_bar = 0. That is why it can anchor. QCD's internal preference for generic theta_bar is a frame, not a ground. *Verdict: triangulated* (Fig 2 plus the published measurement). Mode `grounded` for the bound; the inference `theta_bar < 10^-10` is `specified` because it depends on the lattice matrix element.

### F3: QCD's closure cannot derive theta_bar (specified)

Fig 6 :21 *"MINT composes inside the closure and can never add an atom."* Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* theta_bar is a primitive input of the QCD frame. No composition of QCD's own terms yields its numerical value. "Set theta_bar = 0 by hand" is a stipulation, not a mint: it pays no MDL bargain and adds no reach. The weak CP phase enters from a different frame (D3), which is why the combination theta - arg det(Yu Yd) is itself a cross-frame product. *Verdict: single-source for the closure claim* (Fig 6), corroborated by the world statement that theta_bar "is not predicted by the theory, but must be measured" (Wikipedia, Axion). Mode `specified`.

### F4: The weak frame refuses the easy answer (specified, grounded for the observations)

The explanation "CP is simply conserved" fails at D3. The CKM phase gives observed CP violation in K and B meson decays, while its contribution to the neutron EDM is only about `10^-32 e cm` (NC State / TUNL page). So nature does violate CP at order one; the puzzle is why the strong contribution is ten orders below the weak one. Fig 9 :57 *"a case in two conditions is not a harder case of either."* This is a union compound. *Verdict: triangulated* (Fig 9 union rule plus two independent ground observations, the K/B CP violation and the EDM bound, which share no evidence pool beyond the Standard Model framework). Mode `specified`.

### F5: The null result is a bound, not a proof that theta_bar is zero (general for the logic, grounded for the bound)

Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* The measured value `0.0 +/- 1.1 +/- 0.2` in units of `10^-26 e cm` is an interval around zero, not an exact zero. It excludes `theta_bar` above roughly `10^-10` and says nothing decisive below that. Low-overlap corroboration, genuinely outside physics: Pawel, Heyard, Micheloud and Held (eLife 2024) write *"Absence of evidence is not evidence of absence - the title of the 1995 paper by Douglas Altman and Martin Bland has since become a mantra in the statistical and medical literature"* and distinguish *"testing for an exactly zero effect versus testing for an effect within an interval around zero."* (Rendered with a hyphen for the source's dash.) That is an equivalence-test point: a bounded interval can be evidence of a negligible effect without being proof of mathematical zero. *Verdict: triangulated* (Fig 8 and a statistics source with near-zero overlap with particle physics). Mode `general`.

### F6: The answer is an import, and it is a shape, not a name (specified)

Fig 13 :115 *"The set is closed. The arrangements are not. That gap is why import exists."* Fig 9 :32 *"you get a kind of thing, never the answer itself."* Fig 9 :27-28 *"describe it before you go looking, or any frame you pick will seem to fit."* Describe R first: a strong CP angle forced below `10^-10` while the weak phase is order one. Then any importing frame must satisfy three constraints:

1. it relaxes theta_bar_eff dynamically rather than stipulating it;
2. it coexists with large weak CP violation (so it cannot be a global CP symmetry of the whole theory);
3. it is falsifiable by a ground reading, namely a nonzero EDM at the next sensitivity or an axion signal with the predicted theta_bar relaxation.

Those three are the shape. The name (PQ axion, massless up quark, Nelson-Barr, anthropic selection) is not supplied by the figures. *Verdict: triangulated* (Fig 9, Fig 13 and the canonical README phrase *"a shape, not a name"*). Mode `specified`.

### F7: Candidate mechanisms are imports without a completed source gate (specified)

Fig 6 :12 *"source gate: provenance"* and Fig 6 :13 *"shadow test: explains a gap."* The PQ/axion import passes the shadow test: it explains why the EDM is tiny. It has provenance (Peccei and Quinn 1977; Wilczek and Weinberg 1978, recorded in the Wikipedia and arXiv sources). It has no detection, so the source gate is incomplete. "A massless up quark" is an in-closure alternative that lattice QCD disfavors (Wikipedia, Strong CP problem), so it is not a wall-moving import at all. Fig 8 :50-52 warns that convergent derivation and adopted import look identical in the contents; only the record separates them. *Verdict: single-source for the gate rule* (Fig 6), with the world record of the proposals as corroboration, not settlement. Mode `specified`.

### F8: Unreachable is a verdict, not a silence (specified)

Fig 13 :134 *"Unreachable is a verdict here, not a silence"* (the figure line continues with a comma). Fig 8 :40-43 *"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."* Which mechanism actually solves the strong CP problem is unreachable at this budget: no axion detection and no nonzero EDM. That is different from underivable in principle. The remedy is more search (deeper EDM experiments, axion haloscopes and helioscopes), not the import of an extra primitive just to fill the slot. Fig 6 prices a wrong atom above starting from primitives. *Verdict: triangulated* (Fig 13 and Fig 8, low overlap between the substrate claim and the scope claim). Mode `specified`.

### F9: What actually survives

| claim | mode | figure / source |
|---|---|---|
| The residual is the theta_bar-induced neutron EDM slot, not all CP puzzles | `general` | Fig 1 :19 |
| The EDM measurement is the anchor; it does not update on theory | `grounded` (bound) | Fig 2 :29-30, Abel et al. 2020 |
| QCD's closure cannot derive theta_bar's value | `specified` | Fig 6 :21, :23 |
| "CP conserved" is refused by the weak frame | `specified` | Fig 9 :57, NC State/TUNL |
| The null result is a bound, not exact zero | `general` | Fig 8 :39, Pawel et al. 2024 |
| A solving mechanism must be a dynamic, weak-compatible, ground-testable relaxation | `specified` | Fig 9 :32, Fig 13 :115 |
| The specific mechanism is unreachable at this budget | `specified` | Fig 13 :134, Fig 8 :40-43 |

---

## 3. Pre-registered refuter, written before the conclusion

Per Fig 10's requirement for a falsifier written in advance (see also the ordinary sentence in the outreach files): the shape claim is refuted if any of the following holds.

1. **In-closure fix.** A derivation inside the Standard Model closure fixes theta_bar to its observed small value without any new field or high-scale condition (for example, a lattice result showing the effective CP angle is automatically negligible). This breaks F3 and F6: no import would be owed.
2. **Ground returns a large value.** A measured neutron EDM near `10^-16 e cm` with theta_bar extracted near order one would show the residual was mis-stated. The bound, not the mechanism, would be the thing to retract.
3. **Global CP restored.** A demonstration that the CKM phase can be rotated away while leaving the observed K and B CP violation intact would break F4, and "CP is conserved" would return as a live answer.
4. **Source gate completed against the shape.** A detection that fixes one mechanism and excludes the alternatives (for example an axion with the predicted theta_bar relaxation *and* exclusion of Nelson-Barr and anthropic accounts) would not refute the shape but would end the "unreachable" verdict and name the slot. Recorded here so the move from open to named is itself pre-registered.

If any of 1 to 3 fires, the shape claim is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. State the EDM as a bound and the angle as an upper limit, never as "theta_bar equals zero" (F5).
2. Lead with the weak-frame refusal of "CP conserved" (F4). It is the cheapest ground fact and kills the most common wrong answer.
3. Describe the residual in effect terms before naming PQ or axion (Fig 9 :27-28). Otherwise any mechanism will seem to fit.
4. Offer the three constraints as the answer and keep the slot open (F6, F8).
5. Send the generator (the residual and the refuter), not a recording of a preferred mechanism. Fig 4 :22, *"Only methods cross up. Only head starts come down."*
6. Use the public opt-in venues in `03_public_contact_points.csv`. Ask what would refute the shape, not whether the reader agrees.

---

## 5. Canonical usage check (figures README and the eight essays)

Two rules were read after the first four sections and govern how the figures may be used.

- `local: ...\FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also *"a reading that makes one contradict another has misidentified its domain, not found a flaw"* and the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the instruments and records the lineage. *"Indiscernibility is not identity."*
- The eight essays by Isaiah N, opened this session, supply the canonical reading of shape (see `05_what_shape_means.md`).

### Retractions and confirmations

| earlier reading in this audit | status after the canonical check |
|---|---|
| "the strong CP problem is solved by the axion" | **Retracted.** The framework returns a shape, not a name; the axion is an import with an incomplete source gate, not a settlement. |
| "the neutron has zero EDM" | **Retracted.** It is `d_n = (0.0 +/- 1.1 +/- 0.2) x 10^-26 e cm`, a bound consistent with zero, not a measurement of exact zero (Fig 8 :39; Pawel et al.). |
| "CP is conserved in QCD because no violation is seen" | **Retracted.** The weak frame shows order-one CP violation; the puzzle is the relative smallness of theta_bar (F4). |
| "theta_bar is a free parameter, so any value is equally natural" | **Narrowed.** It is free in the theory's closure, but the ground ranges against it. Freedom is not a settlement (F2, F3). |
| "import moves the wall, so importing the axion adds a primitive" | **Re-censused.** Fig 6 :25 *"An import adds no atom to the world"*; a frame gains access. No world primitive is added by the proposal. |
| "no EDM seen proves CP conservation" | **Refused.** Fig 8 :39 and the equivalence-test literature make this a bound, not a proof of absence. |
| Fig 6 import rule versus the axion's "setting theta_bar to zero" | **Not strained after re-census.** Closure access and world ontology are different quantities. |

### Strain ledger

- **Fig 6 :23 versus in-closure alternatives.** A massless up quark would remove theta_bar without an import. Not a strain: it is an in-closure candidate disfavored by lattice QCD, so it belongs to D1, not D4.
- **Fig 8 :39 versus the practical use of an upper limit.** Not strained: an equivalence interval is evidence of a negligible effect at a stated sensitivity, not proof of exact zero.
- **After re-census: no hidden strain.** One open item remains, the specific mechanism, recorded as unreachable rather than smoothed over.

---

## 6. Updated verdict

The shape survives: the strong CP residual is one EDM slot whose smallness cannot be derived inside QCD's closure, the easy "CP conserved" answer is refused by the weak frame, and whatever solves it must dynamically relax theta_bar_eff, coexist with large weak CP violation, and be ground-testable. The specific mechanism does not survive as a claim: the axion and its alternatives are imports with incomplete source gates, and the figures return a kind of thing, never the answer itself. The measured EDM is a bound, not a zero. The verdict is `specified`, ungrounded, candidate. The honest stop is *"Unreachable is a verdict here, not a silence"* (Fig 13 :134), with the route to a settlement named: a deeper EDM measurement or an axion detection.
