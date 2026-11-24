# Figure-grounded audit: neutrino masses and the Dirac / Majorana question

**Mode of this document: `specified` on the structural shape and the routing; `general` on framework-level statements; `gap` on the direct Dirac-versus-Majorana verdict.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap*: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited as `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, the canonical figures README, and the world sources opened this session and listed in `10_source_ledger.csv`.

---

## 0. The question as an effect, before any figure line is chosen

R is not one question. It is three slots that are routinely aggregated into the phrase "the neutrino mass problem":

- **Slot s1, absolute mass scale.** Oscillations measure only mass-squared differences. "They also give us no information on whether they are Dirac or Majorana particles" and give no upper bound on the absolute mass (PDG 2024 neutrino mixing review, read via search extraction).
- **Slot s2, lepton-number character.** Is the mass term Dirac (total lepton number L conserved, a distinct antineutrino, a right-handed state required) or Majorana (L violated by two units, the neutrino its own antiparticle)? Springer review: "Neutrinos are the only particles in the Standard Model that could be Majorana fermions, that is, completely neutral fermions that are their own antiparticles." The same review: "The ββ0ν process cannot occur unless neutrinos are Majorana particles."
- **Slot s3, the mass-generation mechanism.** Dirac Yukawa coupling, the Weinberg operator, type-I see-saw, or something else. Rodejohann: "basically all theories beyond the SM predict them to be Majorana particles" is a theory preference, not a measurement.

Aggregation is the failure the figures name first. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A single number called "the neutrino mass" throws away exactly the slot that carries the Dirac/Majorana signal.

**Bind the sought-for shape as an ordinary term** (Formula step "Direction"): an answer would look like a ground reading that discriminates a lepton-number-conserving mass term from a lepton-number-violating one, with a stated mode and a refuter written before the run. It is bound here so it can accrue a residual like anything else.

---

## 1. Domain census, before choosing any figure line

**R by arity, symmetry, scale.** Arity: three slots (s1 scale, s2 L-character, s3 mechanism), so a **union compound**, not one hard question (Fig 9: "a case in two conditions is not a harder case of either"). Symmetry: the Dirac/Majorana distinction is about a symmetry of the mass term under total lepton number, not about a quantity that can be larger or smaller; the mass matrix itself is symmetric. Scale: sub-eV for light neutrinos, the electroweak scale for the Higgs coupling, possibly 10^14 to 10^15 GeV for a see-saw scale. Three scales in one residual is another reason not to average.

| domain | actors | currency | anchor (nameable?) | partition or union | dependency order |
|---|---|---|---|---|---|
| D1 oscillation / experiment frame | ν_e, ν_μ, ν_τ, detectors, global fits | flavour transition probabilities, Δm²_ij | **yes**: measured mass-squared differences | partition boundary: fixes s1 differences, is silent on s2 | first; settles before s2 is expected to close |
| D2 mass-mechanism frame (theory) | ν_L, ν_R, Higgs, Weinberg operator, heavy N, lepton number | mass terms, ΔL, scales | **no**: no instrument yet returns a Dirac/Majorana reading in D1 | union with D3; overlaps s2 and s3 | describes the residual; does not settle it |
| D3 ground / verification frame | 0νββ experiments (Ge-76, Xe-136, Te-130), β decay (KATRIN), cosmology | half-life limits, m_beta, sum m_i | **yes**: the experiment, which does not update on theory opinion | union compound; different grounds per slot | second; reached after D1 gives the mass scale |
| D4 framework / metatheory frame | six terms, seven bonds, negation | composition inside closure(Γ), settlement | **yes**: the figures as metalaws; the ground for any measurement | governs the shape of all three slots | runs alongside; decides routing, not physics |

A domain with no nameable anchor (D2 for s2/s3) is a generator of candidate shapes, not a domain that can settle the question. That is the anchor test of Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :33: "The anchor must not update." D1 and D3 have anchors; D2 does not for s2.

**Partition or union.** The three slots overlap: s1 and s2 both bear on m_beta-beta; s2 and s3 both bear on the see-saw. So this is a union (Fig 9 :54: "when the split lands on a union rather than a partition, unbundle before you search again"), not a list of three independent questions. A single lever clearing the mass-scale slot leaves the L-character slot standing, because the second condition still binds. This is the error in the common claim that measuring an absolute mass would settle the nature question.

**Order by dependency (Fig 3).** Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Dependency here: settle s1's differences in D1, characterise s2 in effect terms, then aim D3's instrument at s2. Fig 9 :27: "describe it before you go looking, or any frame you pick will seem to fit." Naming Dirac or Majorana before describing the ΔL=2 effect is the inversion this forbids.

---

## 2. Figure census

| figure | bearing | preliminary verdict |
|---|---|---|
| 1 The Agent | residual per slot; aggregation destroys the live signal | no ground reading; governs the census |
| 2 The Ground | anchor must not update; independence, correlation valence | the experiment is the anchor, not theory preference |
| 3 Dependency Chain | order by dependency; a reading below the break reads nothing | mass differences first, L-character instrument second |
| 4 The Membrane | only methods cross up; round trip gap R_T | any condensation into a formula carries a gap to measure |
| 5 Mint Pipeline | three guards as product; fifth kind REFUTED | a 0νββ signal owes a refusal, not an explanation |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | null result is depth-or-absence, not a Dirac verdict |
| 7 Room Chain | agreement compounds, evidence does not | theory consensus on Majorana is not corroboration |
| 8 Union Surplus | convergence vs adopted import; no proof of absence | union compound; null result proves nothing |
| 9 Leave / Arrive | describe before looking; a kind of thing, never the answer | shape, not name; unbundle the union |
| 10 Ground Maintainer | verifier non-access; bring a characterised residual, never the source | two-stage offer; independence is load-bearing |
| 11 The Habitat | enumerate the habitat; capability is agent-and-habitat | contact venues are part of the solution, not an afterthought |
| 12 The Bond | isomer, functional group, level-relative irreducibility | Dirac/Majorana as isomers, with a named strain |
| 13 Minimum Viable Set | reachable falls when a term is refused; unreachable is a verdict | honest stop when the instrument cannot discriminate |
| Operators table | negation is unary, not a bond; a refutation is a negation | the refusal owed on a positive 0νββ signal is ¬ |
| Symbols table | R is the aim and always a slice | what cannot be perceived yet is simply unread |
| Formula / Seat Map | mode rule; pre-registered falsifier; correlation disqualifies | mode stated; refuter written before this conclusion |

Strained readings are named below, not smoothed over.

---

## 3. Findings

### F1 : The residual is a union compound, not one hard question (framework-internal + physics)

Fig 9 :54: "when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either." PDG: oscillations "give us no information on whether they are Dirac or Majorana particles." So s1 and s2 have different grounds and a single lever does not clear both.

**Verdict: `triangulated`** (Fig 9 union rule, low overlap with the PDG measurement statement). **Refuter:** exhibit one instrument that fixes both the absolute mass scale and the L character in a single reading; then the union reading is wrong and the slots should be merged. None is documented in the sources read.

### F2 : The figures return a shape, not the name Dirac or Majorana (framework-internal)

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence." Canonical figures README: "what a missing thing would have to look like (a shape, not a name)"; "Indiscernibility is not identity." The shape here is: an instrument that discriminates ΔL=0 from ΔL=2 mass terms. Which name lands in the slot is for the ground, not the framework.

**Verdict: `triangulated`** (Fig 9 + README). **Refuter:** produce a verbatim figure line that selects Dirac or selects Majorana. I ran the census and found none; a line found by a re-census would reverse this finding.

### F3 : The anchor for s2 is 0νββ, not theoretical preference (physics-facing)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Gómez-Cadenas et al.: "The most sensitive known experimental method to verify whether neutrinos are Majorana particles is the search for neutrinoless double-beta decay." The Springer review also notes that a scattering experiment "in practice, no" cannot distinguish them for relativistic neutrinos: "Both interpretations are viable".

**Verdict: `single-source` for the physics fact (one review, read), `triangulated` for the framework rule (Fig 2 + Fig 10).** **Refuter:** an instrument that discriminates Dirac from Majorana without relying on lepton number violation, for example a decisive non-relativistic cosmic neutrino background capture rate (the Springer review notes Majorana capture can be "up to a factor of two larger"). If realised with sufficient statistics, the anchor changes and this finding is narrowed.

### F4 : A positive 0νββ signal is a REFUTED residual, so a refusal is owed (framework-internal + physics)

Fig 5 :50: "the gap has a fifth kind, and the pipeline has no branch for it." Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so." The held term is: total lepton number is conserved (an accidental classical symmetry of the Standard Model). Rodejohann: "Observation of 0νββ would therefore show that lepton number, an accidental and classical symmetry of the Standard Model of particle physics, is violated by Nature." Fig 8 :32: "no search, however long, adds an atom" is about missing items; this is a wrong item, so the fifth bin is the right one. Operators table :57: "a refutation is a negation, which is why a vocabulary without it can only accumulate." Black box support: "irrespective of the mechanism, ββ0ν necessarily implies Majorana neutrinos" (Gómez-Cadenas et al., citing Schechter and Valle 1982).

**Verdict: `triangulated`** (Fig 5 amendment + Operators negation + two physics reviews with different evidence pools, one a Review paper and one a particle-physics review). **Refuter:** a confirmed 0νββ signal whose mechanism leaves the neutrino strictly Dirac with no Majorana mass term, which would break the black box theorem as stated. Duerr, Lindner and Merle, *On the Quantitative Impact of the Schechter-Valle Theorem* (arXiv:1105.0901, JHEP 1106:091, 2011), sharpen this: the black box contribution is "many orders of magnitude smaller than the observed neutrino masses and splittings", so "neutrinos might also be predominantly Dirac particles, while other lepton number violating New Physics dominates neutrinoless double beta decay". That does **not** refute F4, because a finite Majorana mass term is still guaranteed; it narrows the claim. A positive signal establishes the existence of a Majorana mass term, not that the dominant mass mechanism is Majorana. If a signal were shown to carry no Majorana term at all, F4 would fail.

### F5 : A null 0νββ result is depth-or-absence, not a Dirac verdict (framework-internal)

Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." The 0νββ limits were improved from earlier Ge-76 limits to ton-scale programmes; this is an instrument improved from a worse one that was already returning a reading. Gómez-Cadenas et al.: "the negative results by several experiments, combined with the hints that the neutrino mass ordering could be normal, may imply very long lifetimes". So a null result can close part of the space (inverted ordering under the standard mechanism) but cannot establish Dirac.

**Verdict: `triangulated`** (Fig 6 + Fig 8; the physics half is single-source). **Refuter:** a null result at a sensitivity that excludes a Majorana contribution for every ordering and every cancellation mechanism. If produced, the depth/absence ambiguity closes for s2 and a Dirac verdict becomes reachable at that ground.

### F6 : Dirac and Majorana are isomers over a shared low-energy content, with a named strain (framework-internal + physics)

Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." The Springer review describes two ways to add a neutrino mass term: a Dirac term with an independent ν_R, and a Majorana term imposing ν = ν^c. Same low-energy particle, two different bonds (ΔL=0 Yukawa versus ΔL=2 self-conjugate term), different substance (four versus two degrees of freedom; a distinct antiparticle versus a self-conjugate state). Fig 12 :123: "A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." The ΔL=2 substructure is the functional group that fixes the 0νββ outcome.

**Verdict: `single-source` for the figure definition (Fig 12), corroborated by one review.** **Strain, named:** a minimal Majorana field needs only ν_L, while a Dirac field needs ν_L and ν_R. The atom sets are therefore not literally identical; the isomer claim holds at the level of the shared low-energy observable content, not at the level of the complete field content. Re-census: the honest form is "same observable neutrino, different mass-term bond; they are isomers only after the sterile sector is included in both." I do not smooth this over. **Refuter:** show that the two require different observable atoms at low energy (then it is a functional-group relation, not an isomer relation), or that the bond is not recoverable in principle (then the figure's priced-bond claim is irrelevant here).

### F7 : Oscillation results are settled molecules and become atoms for the mass model (framework-internal)

Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it." Oscillation results are settled against the ground; they are composable at the next level. But they cannot settle s2: PDG states Majorana phases "play no role in neutrino oscillations", and the Springer review states the Dirac and Majorana characters are "physically indistinguishable for massless neutrinos" and that the difference is suppressed by m/E in practice.

**Verdict: `triangulated`** (Fig 12 recursion + two independent reviews). **Refuter:** a global oscillation fit whose quality depends on the Dirac/Majorana choice; that would make s2 composable from D1 and break the dependency order.

### F8 : Theory prejudice is one evidence pool, not corroboration (framework-internal + physics)

Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 7 :13: "agreement compounds, evidence does not." Fig 8 :50: "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." Rodejohann: "most, if not all, theorists believe that neutrinos are Majorana particles" and the Springer review calls it "theoretical prejudice in favor of Majorana neutrinos". That is a frame-internal preference shared by a community reading the same reviews. It must not be counted as a witness for Majorana.

**Verdict: `triangulated`** (Fig 2 + Fig 7, corroborated by the reviews' own wording). **Refuter:** a prediction that uniquely selects Majorana and is confirmed by an instrument independent of the 0νββ pool. Then it is evidence rather than prejudice.

### F9 : Evidence underdetermines the mechanism; a different field corroborates the shape limit (low overlap)

Stanford Encyclopedia of Philosophy, *Underdetermination of Scientific Theory* (philosophy of science, first published 2009, substantive revision 2023): "the evidence available to us at a given time may be insufficient to determine what beliefs we should hold in response to it." Duhem's formulation quoted there: "the experiment does not designate which one should be changed." This corroborates F2 and F5 from a field with low overlap with particle physics. *The Hard Problem is About Source* (Isaiah N, 2026): "An instrument that can't distinguish these cases demonstrates its own inadequacy" and "It was proven wrong not by argument, but by the arrival of a better instrument." That is the same shape limit from the framework author's cognition essay.

**Verdict: `corroborates`, not decides.** SEP is a different field and does not settle the physics; the framework figures remain primary. **Refuter:** an argument that the available data uniquely determine the mechanism; that would falsify the underdetermination reading here.

### F10 : The contact venues are part of the solution, not decoration (framework-internal)

Fig 10 :52: "Bring a characterised residual, never the source." Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." Seat Map :163: "High correlation is disqualifying for a verdict and efficient for a convention." Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." So the first contact carries the residual and its refuter, and the audience is reached through public, opt-in institutional venues (`03_public_contact_points.csv`), not a list of people already inclined to agree.

**Verdict: `triangulated`** (Fig 10 + Fig 11 + Seat Map). **Refuter:** a demonstration that a receptive, pre-selected audience can still deliver an independent verdict on stage 1; Seat Map :163 says the agreement would be a convention. If shown otherwise, the two-stage ordering is unnecessary.

---

## 4. Pre-registered refuter (written before this conclusion)

Required by Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device."

The whole shape claim is refuted if any of the following holds:

1. A verbatim figure line in `03-FIGURES_TEXT.md` selects Dirac or selects Majorana as the answer to s2 (breaks F2).
2. A single ground reading fixes the absolute mass scale and the L character at once, so the union compound should be merged (breaks F1).
3. A confirmed 0νββ signal is shown to be compatible with a strictly Dirac neutrino and no Majorana mass term (breaks F4).
4. A null result at a sensitivity that excludes Majorana for all orderings and mechanisms is obtained (closes F5 and would move s2 toward Dirac).
5. An oscillation observable is found whose value depends on the Dirac/Majorana character (breaks F7 and the dependency order).
6. The second-seat re-census in `11_audit.md` finds a figure strain that cannot be resolved by re-census (breaks the self-consistency claim).

If any fires, the relevant finding is withdrawn in the retraction log below and the verdict is recomputed. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. State the residual as three slots and refuse the aggregation (F1). Do not present "neutrino mass" as one number.
2. Send the shape and the refuter, not a Dirac or Majorana advocacy position (F2, F3).
3. Treat a positive 0νββ signal as a refusal of an exact symmetry, not as a new explanation (F4).
4. Treat a null result as depth-or-absence, with the partial inversion-ordering exclusion named (F5).
5. Keep the isomer claim in its narrowed, strained form (F6), and keep theory prejudice out of the witness column (F8).
6. Use the public opt-in venues in `03`, and record the stage-1 verdict before any framework is shown (F10).
7. Fig 4 :22: "Only methods cross up. Only head starts come down." Send the generator: the census, the shape and the refuter, not a recording of a preferred conclusion.

---

## 6. Canonical usage check and retraction / confirmation log

Two governing sources were read after the findings above: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `THE_SEAT_MAP_Field_Guide_amended.md`. The README says the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them" and "the quotes are the authority, not this summary." Its re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw."

| earlier reading | status after the canonical check |
|---|---|
| F1 union compound | **Confirmed.** The README's "shape, not a name" and the seat map's "unbundle before searching again" both govern a union, so the unbundling is required, not optional. |
| F2 "framework cannot name" | **Narrowed, not retracted.** The rule governs a *missing* thing. Dirac and Majorana are not missing primitives; they are bindings onto physics fields. What is still forbidden is claiming the framework derives the choice. This matches the exemplar's own correction in `05_what_shape_means.md` §5b. |
| F4 "refusal owed" | **Confirmed.** The Figures README calls the framework "a generator of the shape of an answer" and the seat map names negation as a non-bond operator. The refusal is the correct bin. |
| F5 "null is not Dirac" | **Confirmed.** Fig 8 :39 governs the absence claim. Separately, the seat map states that underivable-in-principle and unreachable-at-this-budget are different facts, and both rules apply. Partial exclusion is allowed; a general Dirac verdict is not. |
| F6 clean isomer claim | **Retracted in its strong form.** Re-census: the atom sets differ by ν_R. Narrowed to "same observable low-energy neutrino, different mass-term bond" and the strain is recorded. |
| F8 theory prejudice | **Confirmed.** Seat Map :163 and Fig 7 :13 both disqualify pooled agreement as a verdict. |
| F9 SEP corroboration | **Confirmed as corroboration only.** SEP is a different field; by Fig 2 :40 its agreement is not a second witness for the physics, and by the README the figures remain primary. |
| Apparent strain Fig 12 isomer vs distinct atom sets | **Not a figure contradiction.** Re-census: Fig 12 governs arrangements over held atoms; the field content is supplied by the physics frame. Different objects, so no figure was forced. |

### Round trip check

Condensation sent up: "the residual is three slots; a positive 0νββ signal refuses exact lepton number; a null result is not Dirac; the framework returns a shape." Concretisation back down: the concrete claim "neutrinos are Majorana / neutrinos are Dirac." Three constraints drop on the trip: the union structure (F1), the depth-versus-absence distinction (F5), and the naming limit (F2). So the round trip gap R_T is nonzero. Treating "the formula is the condensed version of the figures" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

### Verdict after re-census

The shape survives: unbundled slots, ground-anchored L-character test, refusal on a positive signal, no Dirac verdict from a null, provenance on theory prejudice, public opt-in contact. The specific Dirac or Majorana name does not follow from any figure line and is not settled by any source opened in this simulation. **Status: `gap` on the direct verdict, `specified` on the routing, `general` on the framework statements, nothing `grounded`.** Strains after re-census: one, the isomer atom-set strain, named in F6.
