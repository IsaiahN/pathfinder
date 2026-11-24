# Figure-grounded audit: the naturalness problem and its proposed resolutions

**Mode of this document: `general` on the shape, `specified` on the per-domain verdicts, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (2026-11-19): LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Figure text in `FRAMEWORK/reference/03-FIGURES_TEXT.md`; canonical usage in `FIGURES_README_canonical.md`; `THE_FORMULA.md`; `THE_SEAT_MAP_Field_Guide_amended.md`; `60_FIGURES_AS_METALAWS.md`; the eight essays; the physics sources in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms first

Do not begin with "supersymmetry" or "naturalness." Begin with what fails.

Let Γ be the library of the Standard Model as an effective field theory plus a cutoff Λ. Let b be the belief that the theory is valid up to Λ. Let a be the act of computing the Higgs mass parameter from the bare term plus radiative corrections. The prediction Γ(b,a) contains a correction δm² proportional to Λ². The observation o′ is the measured Higgs mass, about 125 GeV (Wikipedia, Hierarchy problem, 2026). The residual is

```
R = |Γ(b,a) − o′|  on one live slot s = the Higgs mass-squared parameter.
```

If Λ is taken near the Planck scale, the correction exceeds the observed value by roughly 34 orders of magnitude, so the bare term must cancel the correction to about one part in 10³⁴ (Wikipedia, Hierarchy problem, 2026; Craig, CERN Courier, 2019). That is the residual. It is indexed by one slot, not averaged: Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*

**Two distinctions made before any figure is chosen.**

1. **The residual is not "naturalness."** Naturalness is the name physicists give to a *preference* for a theory whose parameters are of order unity at the cutoff. Wikipedia (Naturalness, 2026) calls it *"a particular, aesthetically motivated construction principle for physical theories."* Grinbaum (Foundations of Physics, 2012) calls it *"essentially a formalized aesthetic criterion."* In figure terms a preference is not a term: Fig 5 :62 *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."* It accrues no residual and cannot be seen by the mechanism checks. So **naturalness has no nameable anchor and is not yet a domain.** It is a filter.
2. **The question contains a compound, not one lever.** "The naturalness problem and whether supersymmetry or other mechanisms resolve it" bundles (a) a calculation failure inside the effective field theory, (b) a family of candidate imports, and (c) an empirical check. Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Split before searching. A single lever aimed at "naturalness" clears the region where only one condition holds and leaves the intersections standing.

**Bound shape (written before the run, per Formula "Direction").** A resolution of R is a candidate term φ such that:
- (i) it adds at least one atom to closure(Γ) of the EFT frame;
- (ii) it cancels or softens the quadratic sensitivity of the Higgs mass to Λ;
- (iii) it pays `cost(φ) + left(R,φ) < cost(R)`;
- (iv) it is settled by experiment, not by agreement.

This binding can now be refused. That is the point of writing it down.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.**
- *Arity:* one live slot (the Higgs mass parameter) with a two-sided structure (bare term plus correction). The relation between the weak scale and the cutoff is a threshold comparison of two quantities, which is ⋛-like in the Operators table, but this identification is a `specified` binding, not a derivation, and it is strain-tested in §5.
- *Symmetry:* the known cancellation reverses the sign between boson and fermion loop contributions. The relevant structure is a sign-reversing pairing across two kinds of particle. I do **not** identify this with any of the seven bonds; see the retraction log.
- *Scale:* the residual spans roughly 34 orders of magnitude. It is a cross-scale (membrane) quantity. A single-scale calculation inside the EFT cannot close it, because closure is idempotent.

**One line per domain. No nameable anchor means it is not a domain yet.**

| domain | actors | currency | anchor | partition or union | order |
|---|---|---|---|---|---|
| D1, EFT calculation frame | Higgs field, top and other virtual loops, cutoff ΛUV, bare mass m₀, renormalisation | δm² ~ Λ² corrections; tuning measure | the measured Higgs mass (collider) | partition boundary: what composes inside one closure | first (Fig 3 :19) |
| D2, mechanism frame | superpartners; or new strong dynamics; or extra dimensions; or relaxion field | cancellation of quadratic divergences; new parameters and new atoms | **none internal**; borrows D3's anchor | **union** of competing closures (Fig 9), not a partition | second (depends on D1's description) |
| D3, experimental ground frame | ATLAS, CMS, precision Higgs and flavour measurements | exclusion limits, discoveries | the measurement, which does not update on what anyone thinks (Fig 2 :29) | the ground under both, never a party | settles last |
| D4, naturalness preference | aesthetic judgment, 't Hooft technical naturalness, Bayesian tuning measures | preference, heuristic | **none** | not a domain; a filter on D2's budget | excluded from verdict |

**Anchor test applied.** D4 fails the anchor test: if you push on "naturalness," it moves with who is pushing (Craig, 2019: the acceptable amount of fine-tuning *"has changed over time"*). Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* So naturalness is excluded from verdict weight. It may still filter which theory gets tried first. Filters for the budget, witnesses for the verdict.

**Partition or union.** D2 is a **union**, not a partition. SUSY, composite Higgs, extra dimensions and relaxion overlap: each is a mechanism that adds degrees of freedom coupled to the Higgs, and they can be combined (SUSY plus compositeness, for example). A bundled problem of overlapping conditions is not a list of separate ones (Fig 9 :54-58). The question of which mechanism resolves naturalness is therefore not one search over a list; it is a search over a union with its own compound.

**Order by dependency (Fig 3).** Perceive R in D1 → describe R in effect terms before picking a frame (Fig 9 :27) → offer candidate φ in D2 → let D3 settle. Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."* Fig 3 :22 *"A step whose input never arrives cannot be diagnosed, only its predecessor can."* A reading taken at D3 before D1 has described R is a reading of nothing.

---

## 2. Figure census (quoted before concluding)

| figure | verbatim bearing | verdict here |
|---|---|---|
| Fig 1 | *"The residual is indexed by object slot, not aggregated."* | R is one live slot, the Higgs mass parameter |
| Fig 2 | *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* | experiment, not elegance, is the anchor |
| Fig 3 | *"Optimising a link that already works cannot rescue one that does not."* | order the domains by dependency |
| Fig 4 | *"The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."* | the residual is cross-scale; a round trip is owed |
| Fig 5 | *"The three guards are a product, not a checklist."* | a mechanism must pass support, reach and novelty together |
| Fig 6 | *"MINT composes inside the closure and can never add an atom."* | more SM calculation cannot resolve R |
| Fig 7 | *"agreement compounds, evidence does not"* | theorist consensus is not corroboration |
| Fig 8 | *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* | resolution requires an import |
| Fig 9 | *"Use filters for the budget and witnesses for the verdict."* | naturalness is a filter, never a witness |
| Fig 10 | *"A verifier that can reconstruct the claim cannot verify it."* | do not send the full theory before the check |
| Fig 11 | *"An improvement that does not change contact changes nothing, however much it improves."* | a prettier model with no new contact gains nothing |
| Fig 12 | *"A settled molecule becomes an atom for whatever composes over it."* | D1 settled becomes operand for D2's mechanism |
| Fig 13 | *"The set is closed. The arrangements are not."* | the resolution is an arrangement over held atoms plus import |

Strained readings are named in §5 and in `11_audit.md`, not smoothed over.

---

## 3. Findings F1 to F9

### F1 - The residual is real mass in one slot; naturalness is the invisible preference (support gate)

Fig 5 :20 *"is there anything to explain?"* Fig 5 :21 *"the gap has real mass somewhere."* The hierarchy is real mass: a 34-order discrepancy on a named slot. SUPPORT passes.

But the *thing being sought* is "a natural theory," and that is a preference, not a term. Fig 5 :62 *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."* Formula step 2: *"Unbound, predicting nothing, no residual - so nothing above can see it."* The remedy is a discipline, not a step: Fig 5 :65 *"make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."* That is why §0 binds the shape before the verdict.

**Mode:** `general` (structural). **Triangulation:** Fig 1 (per-slot residual) and Grinbaum 2012 (formalized aesthetic criterion) are low-overlap routes to the same point. **Refuter:** exhibit a tuning measure that itself predicts a measurement and is settled by the ground; then it is a term, not a preference, and this finding fails.

### F2 - No search inside the Standard Model closure can resolve R

Fig 8 :32 *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* Fig 6 :21 *"MINT composes inside the closure and can never add an atom."* Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

Therefore a resolution is necessarily an **import** of new atoms (sparticles, new strong degrees of freedom, extra dimensions, a relaxion field) from a frame whose closure differs. This is `general` and figure-derived. Wikipedia (Hierarchy problem, 2026) records the same structural fact in physics language: *"The problem cannot even be formulated in the strict context of the Standard Model, for the Higgs mass cannot be calculated."*

**Mode:** `general`. **Triangulation:** Fig 8 and Fig 6 (same framework, different figures) plus the physics statement (low overlap). **Refuter:** exhibit a calculation inside the Standard Model alone that drives the Higgs-mass residual to zero with no new degrees of freedom and no change of closure.

### F3 - The resolution is a mint governed by a bargain, not a label

Fig 5 :26 *"and then: does the new term cost less to state than the confusion it removes?"* Formula step 3: `accept iff cost(φ) + left(R,φ) < cost(R)`. Fig 5 :33 *"The three guards are a product, not a checklist."*

Apply to SUSY as a candidate φ, with mode `specified` because the cost terms are a binding from the physics frame, not figure-given quantities:
- **SUPPORT** - pass (F1).
- **REACHABILITY** - the sparticle atom is in closure(Γ) once the SUSY frame is imported; it is not derivable from the SM atoms alone (F2).
- **NOVELTY** - sparticles are not in atoms(Γ) of the SM. Pass.
- **BARGAIN** - `cost(φ)` is high: a superpartner spectrum and many new parameters. `left(R,φ)` is the residual tuning. With sparticles pushed to roughly 1-2 TeV or above by LHC null results, `left(R,φ)` is not near zero (Wikipedia, Little hierarchy problem, 2026). Whether the bargain pays is an **empirical** question the ground has not settled.

Craig (CERN Courier, 2019) states the same limit in physicist language: naturalness principles *"can point to a problem in the existing theory, and a scale at which the theory should change, but they don't tell you precisely how the problem is resolved."* So the phrase "SUSY resolves naturalness" is a `general`-mode verdict on a `specified`, ungrounded bargain. It is not licensed.

**Mode:** `specified` on the application, `general` on the bargain rule. **Refuter:** a measurement of sparticles near the weak scale with the required couplings (drives `left(R,φ)` toward zero), or a proof that `cost(φ) > cost(R)` for every viable breaking mechanism.

### F4 - Any proposed mechanism is an import and owes a source gate and a shadow test

Fig 6 :14 calls import *"the only operator that moves the wall."* Fig 8 records a source gate (provenance) and a shadow test (explains a gap). Fig 6 :26 *"An import adds no atom to the world."*

Keep both halves distinct. Importing the sparticle idea moves the **frame's** closure outward. Whether sparticles are atoms **in the world** is a ground question, not an import question. The world is not modified by importing a description.

Each alternative passes or fails the shadow test differently: SUSY cancels the top-loop quadratic divergence by a sign-reversing partner; composite Higgs removes the elementary Higgs by making it a bound state; extra dimensions lower the fundamental gravitational scale; relaxion uses cosmological dynamics. These are different atoms and different closures, so they are a union (§1), and adopting one is debited against the independence of the frame it came from.

**Mode:** `general` on the gate requirement, `specified` on each mechanism. **Refuter:** a mechanism that leaves R unchanged yet is adopted as a resolution (fails the shadow test), or a claimed import with no provenance record (fails the source gate).

### F5 - "Which mechanism" is unreachable at this budget, not underivable in principle

Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* Fig 8 :41 *"different facts, and they issue different instructions."* Fig 13 :134 *"Unreachable is a verdict here, not a silence,"*

LHC null results do not refute supersymmetry as such. They disfavour specific, historically popular models. Craig (2019): *"The LHC null results teach us only about specific (and historically popular) models that were inspired by naturalness."* Wikipedia (Supersymmetry, 2026): *"There have been multiple experiments on supersymmetry that have failed to provide evidence that it exists in nature."* So the residual persists and does not trend down to zero, and the specific name stays `gap` at this budget. Fig 13 :118 *"infinite effort inside a finite reach."*

Distinguish the two instructions. Underivable in principle would send us outward for a new frame. Unreachable at this budget sends us to more search and better instruments. Importing an atom against a budget limit adds an atom that was not needed (Fig 8 :42-43).

**Mode:** `specified` on the budget status, `general` on the rule. **Refuter:** a direct detection of a distinctive atom of one mechanism (a sparticle, a deviations pattern fixing compositeness, a Kaluza-Klein resonance), or a theorem that no experiment in any frame could discriminate the candidates (which would change the verdict to underivable).

### F6 - The verdict comes from the anchor, not from elegance or consensus

Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool."* Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

Naturalness, elegance, and "no fine-tuning" are filters that decide what gets tried first. They are not witnesses. Selecting a mechanism because many respected theorists prefer it manufactures exactly the disqualifying correlation. Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."* Grinbaum (2012) reaches the same conclusion independently: in comparing beyond-Standard-Model theories naturalness *"cannot be defined objectively"* and functions as *"socio-historical heuristics in particle physics."*

**Mode:** `general`. **Triangulation:** Fig 2, Fig 9, Seat Map :163, and Grinbaum 2012 (philosophy of science, low overlap). **Refuter:** an operational naturalness measure whose value is fixed by a measurement rather than by a choice of measure; then it is a witness and this finding is narrowed.

### F7 - Cost if wrong is high, so buy independence

Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* Choosing a mechanism on aesthetic grounds and building the wrong detector for decades is the expensive failure. Craig (2019) notes that the acceptable amount of fine-tuning *"has changed over time,"* which is drift in the frame, not movement in the ground.

Buy independence across low-overlap frames: direct sparticle searches, precision Higgs coupling measurements, flavour observables, dark matter searches, and gravitational or cosmological probes. Agreement among them is meaningful only if they do not share one evidence pool (Fig 2 :31-32). Agreement among SUSY phenomenologists reading the same review is one witness wearing many names.

**Mode:** `general`. **Refuter:** a decision procedure whose cost of error is demonstrably near zero; then independence is not worth buying.

### F8 - "SUSY resolves naturalness" is a prediction stated as a verdict

Craig (2019): *"we don't know how nature computes fine-tuning... or what amount of fine-tuning is reasonable to expect."* The Potter Stewart measure, *"I know it when I see it,"* is cited in the same interview. A claim whose acceptance threshold is chosen after the data is a preference, not a term. Formula: *"Accepted means the ground settled it; otherwise candidate."* So the honest form is: *"Under the figure-derived shape, a mechanism that adds atoms and cancels quadratic sensitivity would close the slot; whether supersymmetry is that mechanism is `specified`, ungrounded, and awaiting the ground."*

**Mode:** `specified`. **Refuter:** a declared, predeclared tuning threshold with a stated ground and a measured value.

### F9 - Are the mechanisms isomers? (developed in `06_isomers_and_order.md`)

Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* SUSY and composite Higgs do **not** share an atom set, so they are not isomers as written. They are a functional group (Fig 12 :124 *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*): a mechanism that adds weak-scale degrees of freedom coupled to the Higgs so as to soften the quadratic divergence. The stronger isomer claim requires writing both mechanisms over a full shared atom set; that is a checkable structural claim with a stated falsifier, developed in file `06`.

**Mode:** `specified`. **Refuter:** if two mechanisms share no common substructure that fixes the outcome, the functional-group claim fails.

---

## 4. Some findings that survive (with mode attached)

| claim | mode | figure or source |
|---|---|---|
| A resolution is an import that adds atoms to the EFT frame's closure | `general` | Fig 8 :32, Fig 6 :21 |
| Naturalness is a preference/filter, not a witness | `general` | Fig 5 :62, Fig 9 :60, Grinbaum 2012 |
| The verdict is experiment, not consensus | `general` | Fig 2 :29, :35, :40 |
| SUSY's cancellation is a real first-order structure but its bargain is unpaid | `specified`, ungrounded | Formula step 3; Little hierarchy problem 2026 |
| Which mechanism resolves it is `gap` at this budget | `specified` | Fig 8 :39, Fig 13 :134 |
| The candidate mechanisms form a functional group, not isomers as written | `specified` | Fig 12 :117, :124 |

---

## 5. Pre-registered refuter (written before the conclusion)

Required before any outreach: Seat Map :287 *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. A renormalisation or recalculation inside the Standard Model alone drives the Higgs-mass residual to zero with no new atoms and no change of closure (breaks F2).
2. An operational naturalness measure is shown to be fixed by a ground reading, not by a post hoc choice (breaks F1 and F6).
3. An experiment settles the name: a distinctive atom of one mechanism is detected with the predicted couplings, or all viable candidates of a class are excluded by a ground-visible measurement (closes F5).
4. Two candidate mechanisms are shown to share no common substructure that fixes the cancellation outcome (breaks F9's functional-group claim).
5. A mechanism is demonstrated to close R with `cost(φ) + left(R,φ) >= cost(R)` for every assignment (breaks F3's bargain).

Until one of these is run, no part of the specific claim may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with F1, F2 and F6: the residual is real, no SM-only search closes it, and the verdict belongs to the ground. These are the figure-grounded results.
2. State the mode on every sentence. Never write "SUSY resolves naturalness" as a verdict; write "SUSY is a candidate import whose bargain is unmeasured."
3. Refuse before minting: the compound must be split (D1 calculation, D2 mechanism, D3 ground) before any mechanism is ranked.
4. Use the public opt-in venues in `03_public_contact_points.csv` and ask for a refutation, not belief (F6, F7).
5. Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Send the generator, the shape and the refuter, not the conclusion.

---

## 7. Canonical usage check

Two sources were read after the first six sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* The canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"* and stops at the limit of the instruments, recording the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (2026-11-22): the seat reads the ground and does not ask for rulings the figures already decide. The figures are metalaws, so design questions are answered by derivation, not escalation. It explicitly lists Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

### Retractions and confirmations (kept visible)

| earlier reading | status after canonical check |
|---|---|
| "Naturalness is the residual" | **Retracted.** The residual is the Higgs mass discrepancy; naturalness is a preference about it (Fig 5 :62). Corrected in §0. |
| "The boson/fermion cancellation is the symmetric bond + or ≡" | **Retracted as a bond identification.** The figures' `+` means *"both hold at once"* with no sign reversal; calling the cancellation `+` strains. Re-census: it governs the symmetry of the physics frame, not a figure bond. Kept as a `specified` physics description only. |
| "SUSY adds an atom to the world" | **Retracted.** Fig 6 :26 *"An import adds no atom to the world."* It adds an atom to the frame's closure; whether the world has it is a ground question. Both halves now recorded (F4). |
| "LHC null results refute SUSY" | **Retracted.** Fig 8 :39; nulls disfavour specific models only (Craig 2019). Corrected in F5. |
| "Naturalness is not a domain" | **Canonically confirmed.** No anchor; Fig 2 :29 anchor test; excluded from verdict but retained as budget filter (Fig 9 :60). |
| "Which mechanism is a gap at this budget" | **Canonically confirmed.** Fig 13 :134 *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39. Recorded as a verdict, not a silence. |
| Apparent strain: Fig 5 :62 preference invisible vs Fig 9 :60 filter usable | **Not strained.** Re-census: :62 governs what a mint pipeline can *see*; :60 governs what a *seat* may use for budget. Different offices. Matches the README's re-census rule. |
| Apparent strain: Fig 8 underivable vs Fig 8 unreachable | **Not strained.** They are different facts with different instructions (Fig 8 :41). Named, not smoothed. |

### Strain test applied

One live strain is recorded, not hidden: the identification of the hierarchy as a ⋛ comparison of two scales is a `specified` binding from the Operators table, not a figure derivation. If a reader shows that ⋛ at the electroweak/cutoff comparison cannot govern quantities at different scales without violating the Operators table's "two quantities" test, the binding is withdrawn and the residual remains simply a per-slot discrepancy. No other strain after re-census.

### Final verdict of this audit

The shape survives: a resolution must import atoms into the EFT closure, cancel or soften quadratic sensitivity, pay the mint bargain, and be settled by the ground; naturalness is a filter and never a witness. The specific name does not survive as a figure-derived verdict: supersymmetry and its alternatives are candidate imports whose bargain is unmeasured, and the ground has not returned. `general` on the shape, `specified` on the domains, nothing `grounded`. Strains after re-census: one named binding (⋛ as scale comparison), no hidden ones.
