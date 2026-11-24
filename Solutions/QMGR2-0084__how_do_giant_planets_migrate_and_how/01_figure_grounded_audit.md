# Figure-grounded audit: how giant planets migrate and what that reshapes

**Mode of this document: `specified` on the domain verdicts, `general` on the structural shape, `gap` on the per-system route. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula... However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the astrophysical question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited as `Fig N :line`). Loop: `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Essays and world sources are listed with quotes in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

Observation `o'`: a Jupiter-mass planet is found at an orbital radius where the standard in-situ formation story fails, because the local solid surface density is too low and the temperature too high to assemble a core. The prediction `Γ(b,a)` of "planets form where they are found" misses the observation. That miss is the residual `R`, and it is carried per object, not as a system average:

- Fig 1 :19 "The residual is indexed by object slot, not aggregated."
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

Every observed giant is its own slot. Some migrated, some may not have; a system-mean "migration rate" would throw away the only signal that says which planet moved.

Describe `R` by arity, symmetry and scale before choosing any figure line (Fig 9 :22 "arity · symmetry · scale"):

- **Arity.** More than one mechanism can produce the same observed endpoint. The question "how do they migrate" is therefore a union of overlapping conditions, not a single cause with one name (Fig 9 :4-5). A single lever clears the systems where only one condition holds and leaves the intersections standing (Fig 9 :55).
- **Symmetry.** Migration is ordered, not symmetric. The `→` bond is "A then B; B needs A to have happened" (Fig 12 :70-72), and the sign of the change matters: inward versus outward. The Grand Tack is precisely a sign reversal: Jupiter migrates inward to about 1.5 AU, then outward after capturing Saturn in resonance (Walsh et al. 2011, opened 2026-11-23). A symmetric `+` bond would lose the direction that makes the question interesting.
- **Scale.** The driving structures operate over the disk lifetime (roughly 10^5 to 10^7 years) and AU scales; the "reshaping" is a system-level architecture that re-enters as the starting point of the next turn (Fig 13 :88-89).

The two halves of the question are therefore a **union of two sub-residuals**, not one question:

- **R1, the mechanism:** what moves the planet (per slot, per system).
- **R2, the reshaping:** what the movement does to the rest of the system (a cascade, per system).

They share actors but not currency, and they must not be averaged into one verdict.

---

## 1. Domain census before any figure line

One line per domain with actors, currency, anchor. A domain without a nameable anchor is not a domain yet. Order by dependency (Fig 3 :20 "The chain is ordered by dependency, not by importance.").

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1 Disk frame | gas, dust, embedded giant, disk viscosity and entropy gradients | angular momentum and energy exchanged through torques | disk surface density and temperature structure, observable in ALMA images | one condition of the R1 union |
| D2 Dynamical N-body frame | giant planets, planetesimals, distant companions | orbital energy and angular momentum exchange at close encounters and secular perturbations | conservation laws plus the observed eccentricity and inclination distribution | second, overlapping R1 condition |
| D3 Tidal / star frame | the star's tide, the close-in planet | orbital energy dissipated as heat; spin angular momentum | the star's gravity-defining mass, which does not move when our frame changes its mind (Fig 2 :29) | third R1 condition, usually the final leg |
| D4 Observation frame | telescopes, radial velocity, transit and astrometry instruments | measurements of semi-major axis, eccentricity, inclination, obliquity, mass | the observations themselves; "the ground does not decay, the channel does" (Fig 10 :24) | the anchor for all three domains |
| D5 System-architecture frame | the surviving planets, belts and debris after migration | the new arrangement of orbits | the architecture that actually exists, read off the same anchor | the R2 domain; a composition over D1 to D3 |

**Partition or union.** D1, D2 and D3 are a union, not a partition. Disk migration, planet-planet scattering, secular/Kozai excitation plus tidal friction, and the in-situ alternative overlap. Dawson and Johnson (2018, opened 2026-11-23) state that "there is no consensus on their predominant origin channel. Three classes of hot Jupiter creation hypotheses have been proposed: in situ formation, disk migration, and high eccentricity tidal migration." One lever cannot clear the intersections.

**Dependency order (Fig 3).** The chain runs: perception (we observe an orbit) → vocabulary (we have terms for torque, eccentricity, inclination, resonance) → objective (say what would count as migration) → planning (which channel) → learn and carry. The chain typically breaks at the vocabulary/objective link: observations and N-body simulations are abundant, but the instrument that reads "this system took channel X" from the final architecture is usually absent. "A link with no instrument is not a link that works. It is a link nobody has looked at." (Fig 3 :27). "Optimising a link that already works cannot rescue one that does not." (Fig 3 :19).

**Scale rule.** "The kernel is the part that does not change with size... Only the actors, the currency and the anchor change." (Fig 4 :19-20). The same residual loop applies to one planetesimal and to a whole disk. This is why the six-term substrate can be used at the planetary-dynamics level without claiming that planets are literally made of six framework terms ( strain S1, §7).

---

## 2. Figure census: quote before concluding

Each line below was reopened in `03-FIGURES_TEXT.md` this session and is a verbatim substring. Verdicts are kept per domain; none is averaged.

| figure line | verbatim text | governs |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | per-planet residual R1 |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | why system-mean migration rates hide the signal |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | observations as the ground |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | why agreement among models is not corroboration |
| Fig 2 :40 | "agreement about the world is worthless when the agreeing frames share an evidence pool" | the disk and N-body literatures partly share simulation codes and initial conditions |
| Fig 2 :42 | "Buy independence in proportion to the cost of being wrong." | how to choose corroborating sources |
| Fig 3 :20 | "The chain is ordered by dependency, not by importance." | dependency order of the chain |
| Fig 3 :27 | "A link with no instrument is not a link that works. It is a link nobody has looked at." | the missing route-discriminating instrument |
| Fig 4 :22 | "Only methods cross up. Only head starts come down." | simulation methods versus one-occasion replays |
| Fig 4 :25 | "A recording carried upward looks like knowledge and is a description of one occasion." | a single N-body run is a recording of one history |
| Fig 4 :30 | "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | round-trip gap R_T in `11_audit.md` |
| Fig 6 :21 | "MINT composes inside the closure and can never add an atom." | rearranged orbits add no new physics |
| Fig 6 :23 | "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | importing disk viscosity or tidal dissipation from another frame |
| Fig 6 :30 | "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." | describe the residual before importing an analogue |
| Fig 7 :35 | "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." | many agreeing simulations are not a verdict |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | no detected route instrument is not proof no route existed |
| Fig 8 :50-52 | "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" | ecology analogue must be marked as import, not derivation |
| Fig 8 :53 | "Residual first, frame second." | the order of the derivation |
| Fig 9 :4-5 | "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." | split the "how" into R1 and R2 and into channels |
| Fig 9 :27-28 | "describe it before you go looking, or any frame you pick will seem to fit" | describe R1/R2 before picking disk or dynamics |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | shape, not a name for the per-system route |
| Fig 9 :54 | "And when the split lands on a union rather than a partition, unbundle before you search again." | unbundle the migration union |
| Fig 9 :55 | "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." | overlapping channels |
| Fig 9 :57 | "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." | disk plus scattering is a compound, not more disk |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | observability of a channel is a budget filter, not a verdict |
| Fig 10 :24 | "the ground does not decay, the channel does" | instruments and disk channels decay, observations stand |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | two-stage outreach |
| Fig 10 :52 | "Bring a characterised residual, never the source." | outreach order |
| Fig 11 :39 | "capability is a property of agent-and-habitat, never of the agent alone" | reshaping belongs to planet-and-system |
| Fig 11 :40 | "An improvement that does not change contact changes nothing, however much it improves." | moving a planet that changes no contact changes nothing |
| Fig 11 :43 | "The habitat is enumerated, never composed." | enumerate disk, belts, planets, star |
| Fig 11 :49 | "An actor's valence is relative to the residual, not a property it carries." | Jupiter helps one residual, harms another |
| Fig 11 :50 | "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." | Jupiter's water delivery versus planet ejection |
| Fig 11 :51 | "No standing list of good actors survives a change of residual." | no standing list of "good" migrations |
| Fig 11 :52 | "And contact cascades." | second and third order effects of migration |
| Fig 11 :66 | "Isolation is not removal of the habitat. It is substitution of one habitat for another." | moving a planet substitutes an orbit |
| Fig 11 :68 | "what you failed to reproduce is invisible until the goal fails" | lost planets show up only when architecture fails |
| Fig 11 :69 | "what you unintentionally introduced is invisible until it acts" | delivered water or impactors show up later |
| Fig 12 :104 | "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world." | a settled migration channel becomes a building block of architecture |
| Fig 12 :117 | "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | disk-driven and scattering-driven hot Jupiters are isomers |
| Fig 12 :119 | "catalyst. A part that survives its own use." | resonances and the star persist through the migration |
| Fig 12 :121 | "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." | Kozai cycles and migration traps |
| Fig 12 :123 | "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." | "migration channel" as functional group |
| Fig 12 :125-126 | "A composition costs in two currencies, and they do not add." / "Bits price the description. Actions price finding out whether it holds." | description cost of a channel versus observation cost to settle it |
| Fig 13 :41 | "Each is indivisible: no arrangement of the other five yields it." | do not invent a seventh term for migration |
| Fig 13 :74 | "Everything else is a composition across the two kinds, never within one." | composition rule |
| Fig 13 :75 | "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state." | re-census of S2 |
| Fig 13 :76 | "Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." | migration as a flow over a gradient |
| Fig 13 :88-89 | "The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place." | each migration changes the starting architecture |
| Fig 13 :115 | "The set is closed. The arrangements are not. That gap is why import exists." | rearranged orbits need no new primitive |
| Fig 13 :128-129 | "Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available." / "the order is not recoverable from the artefact. It is recoverable from the lineage." | why the route is a `gap` |
| Fig 13 :134 | "Unreachable is a verdict here, not a silence" | honest stop |

---

## 3. Findings F1 to F9

### F1  - The mechanism question is a union, not one mechanism with one name (governs R1; `specified`, triangulated)

Fig 9 :4-5 says to split rather than search when each rule keeps working on a different subset. Fig 9 :55 says a bundled problem is a union of overlapping conditions. The literature confirms the split independently: Lubow and Ida (2010, opened 2026-11-23) write "The main agent for causing gas giant planet migration is the gravitational interaction of the young planet with the gaseous disk from which it forms," while Dawson and Johnson (2018) report three competing origin classes with no consensus. World agreement is not the verdict; the figure line is, and the world fact is a low-overlap corroboration (disk-torque simulations versus hot-Jupiter population statistics). Verdict per R1: **union of at least three conditions plus in-situ**. Strains: none after re-census; a single-mechanism answer would be a category error, not a simpler answer.

### F2  - Migration is a directional flow over a gradient, and the sign is load-bearing (governs R1; `general`, triangulated)

Fig 13 :76: "Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." A giant opens a gap and exchanges angular momentum with a disk whose surface density and entropy vary with radius; that is a directional gradient that can be spent ("a difference that can be spent", Fig 13 :22). The `→` bond is ordered (Fig 12 :70-72), so inward and outward are different terms. The Grand Tack is a real sign reversal, not a detail: Walsh et al. (2011) report "the inward migration of Jupiter to 1.5 AU, and its subsequent outward migration, lead to a planetesimal disk truncated at 1 AU." Verdict: **migration is a `→` flow over a spendable gradient**; the direction must be stated for every system. Triangulated across Fig 13 :76, Fig 12 :70-72 and the Walsh result (low overlap: substrate figure versus hydrodynamical simulation).

### F3  - Alternative routes to the same endpoint are isomers; the difference lives in the record (governs R1/R2; `specified`, single-source on figure side)

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Two systems can both end with a hot Jupiter at 0.03 AU, one arriving by smooth disk migration (low eccentricity, low obliquity, often resonant chains), the other by scattering or Kozai plus tides (eccentric or misaligned, often with a distant companion). Same atoms (star, giant, angular momentum, disk or companion), different bond, different behaviour. Fig 13 :128: "Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available." Fig 13 :129: "the order is not recoverable from the artefact. It is recoverable from the lineage." This is the figure-grounded reason the per-system route is not read off the final orbit. Verdict: **isomer claim `specified`; route name `gap`**. Single-source on the figure side (Fig 12), corroborated in the world by the coexistence of the channels in Dawson and Johnson (2018).

### F4  - No figure line selects which channel acted in a given system (the `gap`; `general`, confirmed)

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence." I ran the three formula-step-7 questions in their required order (search first, cheapest, `THE_FORMULA.md` step 7):

1. **SEARCHED**: is the route selector already in our closure and merely unfound? No public source opened this session supplies an instrument that reads the channel from the final architecture alone. Obliquity, eccentricity and companions are informative priors but each channel can mimic them. Same atoms, more visited space, no added atom (Fig 6 :21).
2. **INWARD**: extend an instrument already returning something. The Rossiter-McLaughlin obliquity measurements and Gaia astrometry are exactly such instruments, and they sharpen the distribution, not the per-system verdict. The link is "a link with no instrument" for the route itself (Fig 3 :27).
3. **OUTWARD**: import from a frame whose closure differs. We imported the population-statistics frame (Dawson and Johnson) with a source gate and a shadow test (it explains the obliquity gap). It returns a distribution, not a name for this system. Fig 9 :32 governs.

Verdict: **`gap`, of the unreachable-at-this-budget kind, not underivable in principle.** An instrument that discriminated sources would close it. "So a search that finds nothing is never a proof of absence." (Fig 8 :39).

### F5  - The reshaping is habitat substitution, with valence relative to the residual (governs R2; `specified`, triangulated)

Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another." A giant moving from 3.5 AU to 1.5 AU and back does not delete the inner disk; it substitutes a new set of actors and relations. Fig 11 :68-69: "what you failed to reproduce is invisible until the goal fails" and "what you unintentionally introduced is invisible until it acts." Walsh et al. (2011) give the concrete case: migration truncates the planetesimal disk at 1 AU (small Mars), scatters the asteroid belt and repopulates it from two compositions, and may drive an early generation of planets into the Sun. Fig 11 :49-51 supplies the valence rule: "The same actor is a benefactor to one residual and a malfactor to another." Jupiter's gravity delivers water and limits Mars's mass (benefactor to a habitability residual) and ejects planets or drives them into the star (malfactor to a survival residual). Verdict: **R2 is a cascade of habitat substitutions with per-residual valence**, not a single good or bad outcome. Triangulated across Fig 11 :49-51, :66-69 and two world sources with different anchors (Grand Tack hydrodynamics; hot-Jupiter terrestrial-planet simulations).

### F6  - Resonance capture is a cycle and a functional group; this is where the chain can close or stall (governs R1/R2; `specified`, single-source)

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." Migration can be captured into mean-motion resonance; the resonance then alters the migration torque, can halt it, and in the Grand Tack reverses it. Resonance capture is thus a substructure that fixes the outcome class, and a cycle whose sign decides whether migration continues or reverses. Wikipedia "Orbital resonance" (opened 2026-11-23) states "orbital resonance occurs when orbiting bodies exert regular, periodic gravitational influence on each other, usually because their orbital periods are related by a ratio of small integers." Single-source on the figure side; the world source corroborates the mechanism without deciding the verdict.

### F7  - N-body histories are recordings unless carried as methods (governs the verification frame; `general`, triangulated)

Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Fig 4 :22: "Only methods cross up. Only head starts come down." A single simulation of one migration history is a recording. What can cross into a general claim is the method, the torque law and the conservation checks, with the seeds and provenance recorded. Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." A thousand agreeing runs share the same code and initial-condition pool, so their agreement is one pool talking (Fig 2 :40). Verdict: **population agreement among models is a budget filter, not a witness** (Fig 9 :60).

### F8  - Imports need a source gate and a shadow test, and the ecology analogue is one (governs method, not verdict; `general`)

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them." The ecology source (Jones, Lawton and Shachak 1994, via Wikipedia "Ecosystem engineer", opened 2026-11-23) says "An ecosystem engineer is any species that creates, significantly modifies, maintains or destroys a habitat." It corroborates the shape of F5 from a genuinely different evidence pool, but it is an **adopted import**, not a figure derivation. It earns a shadow test: it explains the gap of why a moved body has third-order effects that first-order enumeration misses. No new atom is added to the planetary frame by the analogy (Fig 6 :21). Recorded as corroboration only.

### F9  - What actually survives, with mode attached

| claim | mode | status | figure |
|---|---|---|---|
| The residual is per planet, not a system mean | `general` | triangulated | Fig 1 :19, :22 |
| Migration is a `→` flow over a spendable gradient; sign matters | `general` | triangulated | Fig 13 :76; Fig 12 :70-72 |
| The channels form a union of overlapping conditions | `specified` | triangulated | Fig 9 :4-5, :55 |
| Disk, dynamical and tidal channels are real, with different anchors | `specified` | triangulated across domains | Fig 2 :29, Fig 11 :43 |
| Alternative routes to one endpoint are isomers | `specified` | single-source on figure side | Fig 12 :117 |
| Resonance capture is a cycle and a functional group | `specified` | single-source | Fig 12 :121, :123 |
| Reshaping is habitat substitution with cascading, relative valence | `specified` | triangulated | Fig 11 :49-51, :66-69 |
| Which channel acted in this system | `gap` | unreachable at this budget | Fig 9 :32; Fig 13 :128-129, :134 |
| The six-term substrate applies at the planetary scale | `general` | strain S1, dissolved by re-census | Fig 4 :19-20 |

No line returns a universal migration rate, a unique channel per system, or a numerical architecture. Asking for one would be asking the framework for a name where it returns a shape.

---

## 4. Pre-registered refuter (written before the conclusion)

Required by seat reasoning: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. A figure line is found that selects a unique migration channel from the final architecture alone (closes F4 and turns the `gap` into a verdict).
2. A measurement on a single system reads the route directly, for example a channel-specific signature that no other channel can mimic, with a non-updating anchor (Fig 2 :29).
3. A system is shown whose architecture is provably reachable by only one of the four channels and that channel is measured, collapsing the union to a partition for that class.
4. Migration is demonstrated to be a recording of one occasion rather than a cumulative flow, so Fig 4 :25 applies and F2 fails.
5. The six-term set cannot be applied at the planetary-dynamics scale under Fig 4 :19-20, so the whole derivation is out of domain.
6. An ecology or other low-overlap analogue is found to carry an atom that changes the planetary verdict, i.e. the import is not shadow-only.

Until one of these is run, nothing here is labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape and the refuter, not with the mechanism names (Fig 10 :52). The names are bindings from the astrophysics frame and must be provenanced as such (Fig 8 :50-52).
2. Keep verdicts per domain: the mechanism union, the per-system route gap, and the reshaping cascade are three results, never averaged.
3. Ask an expert what they would count as a failure of the shape claim, and record the answer before showing the framework (Fig 10 :42).
4. Use the public institutional venues in `03_public_contact_points.csv`, one-to-one, with no receptiveness rank (Fig 2 :40).
5. Report the `gap` plainly. "Unreachable is a verdict here, not a silence" (Fig 13 :134).

---

## 6. Canonical usage check

Two local documents govern how the figures may be used, read this session:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw," and the limit: the framework says "what a missing thing would have to look like (a shape, not a name)," then stops at the limit of the available instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop; step 7 orders SEARCHED, INWARD, OUTWARD and forbids reading inward against outward; mode rule restated in the header of this file.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "Fig 13 :76 decides the mechanism" | **Narrowed.** :76 governs the shape of a flow, not the name of a channel. The channel names are bindings from the astrophysics frame with provenance (Fig 8 :50-52). |
| "Fig 12 :121 makes Kozai cycles figure-derived" | **Narrowed.** The cycle is real in the world frame; the figure governs composition structure. Kept as corroboration, not as a figure derivation. |
| "shape, not a name forbids naming disk migration or tides" | **Retracted and narrowed.** The README phrase governs a *missing* primitive. Disk torque, scattering and tides are bindings onto held atoms, not a seventh primitive. The missing thing here is the per-system route discriminator, and it stays unnamed. |
| Apparent Fig 13 :75 versus orbital mechanics strain | **Re-census, not contradiction.** Fig 13 governs composition of library terms; orbital motion is the arena. See S2 below. |
| "no route instrument therefore no route existed" | **Refused.** Fig 8 :39: "So a search that finds nothing is never a proof of absence." |
| F1 union, F2 flow, F5 cascade, F6 cycle | **Canonically confirmed** against the README's metalaw reading and the formula step 7 order. |

---

## 7. Strains, re-census and honest limits

- **S1, substrate at a new scale (dissolved).** Applying the six-term set to planetary dynamics could look like claiming planets are made of six literal framework terms. Re-census under Fig 4 :19-20: only actors, currency and anchor change with size. The substrate is used as a composition grammar, not as a material inventory.
- **S2, Fig 13 :75 versus orbital mechanics (dissolved).** "Two states never bond directly" governs composition inside the library. It does not say a body cannot move through space. The orbit is itself a composition with a structure in the slot, so there is no contradiction; this mirrors the exemplar's re-census of its direct-bond reading.
- **S3, isomer versus gap (not a strain).** Alternative routes to one endpoint (Fig 12 :117) and the impossibility of reading the route from the endpoint (Fig 13 :128-129) are two claims about different objects: the world has routes, the final artefact does not record them.
- **S4, the star as anchor (live, narrowed).** Fig 2 :29 requires an anchor that does not update. A real star's spin evolves under tides. Narrowed: the star's gravity-defining mass is the anchor; its spin is a channel that decays, and "the ground does not decay, the channel does" (Fig 10 :24). Recorded as a live type question, not hidden.
- **S5, world heterogeneity kept as evidence.** The three origin channels each work on a different subset of the population. That is evidence for the union verdict, not a conflict that should flip it; a conflict would return us to the census (Fig 9 :4-5).
- **After re-census: one live, narrowed strain (S4), the rest dissolved or shown to be different objects.**

## 8. Second seat

`11_audit.md` re-does the census from the residual line alone, checks the verbatim lines character by character, and records the round-trip gap `R_T`. It is a **simulated** second seat drawing on the same evidence pool. Its agreement is internal consistency, not corroboration: "agreement about the world is worthless when the agreeing frames share an evidence pool" (Fig 2 :40).
