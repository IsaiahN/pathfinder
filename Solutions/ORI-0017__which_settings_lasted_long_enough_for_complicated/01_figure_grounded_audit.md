# Figure-grounded audit: which settings lasted long enough for complicated chemistry to build up?

**Mode of this document: `specified` on the per-domain shape claims, `general` on the structural shape, `gap` on the literal list of named settings, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23) says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle which early-Earth settings persisted. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text with line numbers), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the world sources listed in `10_source_ledger.csv`, all opened 2026-11-23. Every figure quote below was re-opened and checked against the figure text.

---

## 0. The question under audit, stated as a residual

> Which settings lasted long enough for complicated chemistry to build up?
>
> (origins of life.txt line 24, Section 2. Early Earth: where and when?)

**In effect terms.** A "setting" is a habitat (Fig 11): a bounded field of contact where conditions act on a chemical residual. The question asks which habitats had (a) enough duration that contact was not severed before products compounded, (b) enough concentration that building blocks were crowded together rather than washed away, (c) a spendable gradient (Fig 13 :22) that could drive uphill synthesis, and (d) re-entrant cycling (Fig 12 :121) that let each round feed the next. A setting fails if any one factor is at zero. The ground that settles the actual list is geological and experimental evidence (rocks, isotopes, lab reconstruction), not agreement among researchers (Fig 2 :29).

**The sought-for shape, bound as an ordinary term before the run.** A qualifying setting is one where:

```
conditions (light, water, temperature, season, terrain)
  stay in CONTACT with the chemistry
  across enough TIME
  with a SPENDABLE GRADIENT
  and RE-ENTRANT CYCLES
  so that CONCENTRATION exceeds DILUTION
  and accumulation rate exceeds degradation rate
  as settled by GROUND (rock + experiment)
```

This binding is the "Direction" discipline of `THE_FORMULA.md`: a frame cannot check the direction of its own question, so write down what an answer would look like and let it accrue a residual. The pre-registered refuter in §3 is written before the conclusion.

---

## 1. Domain census (before choosing any figure line)

### 1.1 R by arity, symmetry, scale

- **Arity:** at least four conditions (contact/persistence, concentration, gradient, cycling). This is a **union compound**, not one variable. Fig 9 :4-5: *"are not one hard question but several well-formed ones. Split it rather than search."* Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* No single lever selects a setting; one lever clears the region where only one condition binds and leaves the intersections standing.
- **Symmetry:** the candidate settings are **not interchangeable**. Each is a distinct habitat with different actors and conditions. Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* The same vent is a benefactor to a gradient-dependent residual and a malfactor to a concentration-dependent one. There is no standing rank of good settings (Fig 11 :51: *"No standing list of good actors survives a change of residual."*).
- **Scale:** molecular accumulation (monomers to polymers), diurnal or seasonal cycling, and geological persistence. Three scales, two membranes between them (Fig 4). A claim that works at the lab-bench scale does not automatically cross to the geological scale; the transform is lossy and the round trip must be measured (Fig 4 :30).

### 1.2 One line per domain: actors / currency / anchor

No nameable anchor means it is not a domain yet. Each line below has one.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1, the setting (habitat)** | conditions: light, water, temperature, season, terrain (Fig 11 :46); mineral surfaces, pores, ice, basins | contact and persistence (time) | geological record: rocks, zircons, isotopes, strata | union of candidate habitats, enumerated not composed |
| **D2, chemical accumulation** | monomers, oligomers, mineral surfaces, pores, eutectic pockets | concentration versus dilution; spendable gradient (Fig 13 :22) | laboratory reconstruction (experiment) | union of concentration and energy-flow conditions |
| **D3, time and cycling** | day/night, wet/dry, freeze/thaw, seasonal and volcanic cycles | number of cycles, residence time, ordering of differences (Fig 13 :12) | astronomical and geological record (diurnal cycle, strata, dating) | union of cycling conditions; re-entrant loops only |
| **D4, verification / outreach** | geologists, geochemists, experimental chemists, reviewers | evidence versus agreement | the ground, never agreement (Fig 2 :29, :35) | a seat-and-channel question (Fig 10), not a setting |

D4 has a nameable anchor (the ground: rock and experiment). All four are domains.

### 1.3 Partition or union

**Union, not partition.** The four conditions overlap in every real setting: a hot spring supplies gradient, cycling, and concentration together; a vent supplies gradient and persistence but dilutes. Because the question is a union, verdicts are kept per domain and never averaged into a single "best setting" score. Averaging across domains is how the live signal disappears (Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*). Scope was `ORI-0017`; no file outside this folder was modified.

### 1.4 Dependency order (Fig 3)

1. **Perception and vocabulary (links 1-2):** can we tell a setting that persists from one that merely recurs, and do we have terms for contact, concentration, gradient, and cycling? The world sources show the terms exist (residence time, eutectic concentration, deliquescence), so the chain reaches link 3.
2. **Objective (link 3):** what counts as "complicated chemistry building up"? This is the unmeasured link. The question assumes it. Fig 3 :25-27: a link with no instrument is not a link that works.
3. **Planning (link 4):** only then can one ask which setting supplies the four conditions. Effort spent above the break arrives at a step that cannot use it (Fig 3 :20: *"The chain is ordered by dependency, not by importance."*).
4. **Learn and carry (link 5):** each ground-settled result becomes an atom for the next assessment (Fig 12 :104).

---

## 2. Figure census: quote before concluding

Every quoted string is an exact substring of `FRAMEWORK/reference/03-FIGURES_TEXT.md`, checked this session. Strained readings are named, not smoothed.

| figure | bearing on this residual | verdict |
|---|---|---|
| **1 The Agent** | per-slot residual; global near-zero with one live slot is legal | no global "best setting" score; per-domain verdicts |
| **2 The Ground** | anchor must not update; agreement from one pool is worthless | geology and experiment settle the list, not consensus |
| **3 Dependency Chain** | objective link has no instrument in the question | "build up" must be defined before settings are ranked |
| **4 The Membrane** | lab-to-geology transform is lossy; measure the round trip | lab success is not geological persistence; `R_T` owed |
| **5 Mint Pipeline** | three guards as a product; support before search | no figure term for a specific setting is minted here |
| **6 Closure / Reachability** | no search inside a closure adds an atom; instruments improved from worse ones | enumerating settings does not add a primitive; better instruments owed |
| **7 Room Chain** | agreement compounds, evidence does not | a literature consensus on vents is not a second witness |
| **8 Union Surplus** | underivable is not unknowable; import needs a source gate | naming a setting is an import from the geology frame, provenanced |
| **9 Leave / Arrive** | describe the residual before choosing a frame; union unbundled; shape not answer | the shape is returned; the literal list is a declared gap |
| **10 Ground Maintainer** | ground does not decay, channel does; bring the residual, not the source | first contact carries the shape and refuter, not the theory |
| **11 The Habitat** | habitat enumerated; conditions listed; valence relative to residual; no standing list | governs D1 and the refusal of a standing rank |
| **12 The Bond** | cycle, catalyst, functional group, priced bond | governs D3 cycling and the "same conditions, different setting" isomer reading |
| **13 Minimum Viable Set** | time as state, gradient as spendable structure, set closed/arrangements not | governs time, gradient, and the shape-not-a-name limit |
| **Operators table** | production `⇒` and sequence `→` are ordered and distinct | accumulation is production, not mere recurrence |
| **Symbols table** | `R` is the aim; ground is the anchor | no ground reading was taken here |

---

## 3. Findings F1..F9

### F1 — The question is a union compound, not a setting contest (decisive for the frame)

Fig 9 :4-5: *"are not one hard question but several well-formed ones. Split it rather than search."* Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

The world literature treats "vent versus pond versus ice" as rival answers (see the Abiogenesis and Hydrothermal vent pages). Under Fig 9 that is a bundled union: a vent scores on gradient and persistence and fails on concentration; a pond scores on concentration and cycling and is uncertain on persistence. Over the fixed condition set `{contact, concentration, gradient, cycling}` the candidate settings are different **arrangements** of the same conditions. They are Fig 12 :117 isomers: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Consequence: no single "which setting won" verdict is licensed. Four per-condition verdicts are owed, kept separate.

- **Mode:** `general` on the union shape, `specified` on the per-domain separators.
- **Refuter:** show that at one scale and one residual the four conditions reduce to one measured lever (a single variable predicts which settings accumulate), which would dissolve the union into a partition.

### F2 — A setting must be enumerated from its conditions, not composed or ranked (figure-governed)

Fig 11 :43: *"The habitat is enumerated, never composed."* Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* Fig 11 :46: *"conditions: light, water, temperature, season, terrain"* Fig 11 :48: *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."*

The question's own section (Early Earth: where and when?) is an enumeration request. The figures govern *how* to enumerate: read conditions off the world, then follow contact outward. A "top setting" list composed from the four conditions is not a derivation; it is a ranking manufactured inside the frame.

And the standing rank is refused twice: Fig 11 :49 *"An actor's valence is relative to the residual, not a property it carries."* and Fig 11 :51 *"No standing list of good actors survives a change of residual."* A setting that is good for a concentration-limited residual is bad for a gradient-limited one.

- **Mode:** `general` (structural rule), `specified` when applied to D1.
- **Refuter:** show a setting whose valence for accumulation is intrinsic and survives every change of residual, which would break the valence-relative law.

### F3 — "Lasted long enough" is a contact-and-time claim, not a new primitive (figure-governed)

Fig 13 :12: *"the ordered succession of differences"* (time). Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

Persistence is a parameter of the time channel and of contact. It is not a seventh member of the six-term set. The world sources make the same point operationally: the Hydrothermal vent page says *"The ecosystem so formed is reliant upon the continued existence of the hydrothermal vent field as the primary source of energy"*; the Abiogenesis page says vents leave *"little residence time to accumulate."* Both are readings of contact duration, not of a new substance.

**Strain S4 named:** the question's word "lasted" could be misread as a new primitive. Re-census assigns it to the existing time state plus the contact relation. Kept visible, not hidden.

- **Mode:** `specified` (falsifiable: a setting can lose contact).
- **Refuter:** a measurement showing accumulation compounding after contact with the setting has been severed.

### F4 — Accumulation needs a spendable gradient, not merely a gradient-shaped distribution (figure-governed)

Fig 13 :22: *"a difference that can be spent"* (gradient). The fuller argument at Fig 13 :45-47 is that *"What makes a gradient a gradient is that it can be spent, and neither an ordering nor a span of"* *"space has directedness."* (the line wraps; each half is verbatim).

A warm pond with a uniform temperature has a distribution, not a spendable gradient. A vent with a redox or proton gradient has directedness. Deamer & Weber 2010 (opened) put the physical version: *"the flow of energy through relatively simple systems of molecules produced a more complex set of polymeric molecules that had specific physical and chemical properties."* The Hydrothermal vent page: *"Hydrothermal plumes embody physical and chemical gradients that promote several types of chemical reactions"* corroborates the figure's directedness condition.

- **Mode:** `specified`, triangulated (Fig 13 plus two world sources with different methods).
- **Refuter:** show multi-step accumulation in a setting with no spendable gradient and no imported gradient.

### F5 — Cycling must re-enter, and the sign of the loop decides (figure-governed)

Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* Operators table :34 (on sequence): *"the only bond a flat chain can express, so every term today is a sequence whether or not it should be"*; :39 on production: *"is there a B before A fires? No."*

Wet/dry, freeze/thaw, and day/night cycles are re-entrant loops; each dry phase feeds the next. A one-pass flow is a chain and cannot close. Campbell et al. 2019 (opened) give the measured version: samples with regulated wet/dry cycling produced *"an average total yield of glycine oligomers of 16.0%"* against *"1.9%"* for overhydrated samples, and Deamer & Weber 2010 write that *"if the dry phase of a condensation reaction is cycled repeatedly through a hydrated phase, the reaction can lead to the accumulation of more complex products."*

The sign matters (Fig 12 :121): the same cycle can drive condensation or hydrolysis. Campbell et al. report that extra water *"reduces yields of glycine oligomerization by increasing the duration of time the oligomers are subjected to hydrolysis."*

- **Mode:** `specified`, triangulated (Fig 12 :121 + Operators :39 + two lab sources).
- **Refuter:** show accumulation from a single pass with no re-entry of output as input.

### F6 — Concentration is the bottleneck, and dilution is a wall the setting must clear

Fig 6 :21: *"MINT composes inside the closure and can never add an atom."* More search inside a dilute closure does not concentrate anything. Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*

The world sources are unusually direct here. Abiogenesis (Wikipedia): *"Vents do not concentrate prebiotic materials, due to strong dilution by seawater. This open system cycles compounds through vent minerals, leaving little residence time to accumulate."* Campbell et al. 2019: *"the challenge of overdilution to cellular compartmentalization is a well-known problem in the origin of life."* Deamer & Weber 2010: *"Because the concentration of reactants strongly affects reaction rates, it seems likely that for a prebiotic reaction to proceed at a useful rate, there must have been concentrating processes such as evaporation or adsorption."* Last Chance Lake (Wikipedia): *"It is a closed-basin lake, which allows it to maintain high salinity and carbonate alkalinity."*

This is where the figure and the world agree most strongly: accumulation requires the setting to do the concentrating, because composition alone will not.

- **Mode:** `specified`, triangulated.
- **Refuter:** show multi-step accumulation in an open, well-mixed setting where dilution exceeds concentration.

### F7 — The figures return a shape, not the list (decisive for the verdict)

Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :134: *"So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence,"* and Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

No figure line names a hydrothermal vent, a pond, an ice eutectic, or a hot spring. The figures license the four-condition shape. Which actual settings satisfy it is a **gap** at the figure layer, to be settled by ground (geology, experiment). This is not silence: it is a declared `unreachable` at this budget with a named discriminator owed. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

The specific naming, when it comes, is a **binding from the geology frame** onto held atoms (time, gradient, network, spectrum), with provenance and a shadow test (Fig 8 :50-52), not a figure derivation and not an import that moves the wall (Fig 6 :21: mint adds no atom).

- **Mode:** `general` on the limit, `gap` on the list.
- **Refuter:** exhibit a figure line that names a specific geological setting, or a ground result that closes the discriminator.

### F8 — Lab-to-geology transfer is lossy: the round trip gap `R_T` is owed

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* The world literature repeatedly flags this: Campbell et al. ran 24-hour cycles and explicitly note *"long periods of heat (>6 h) seem unlikely given the 24-h diurnal cycle on Earth"*; the Abiogenesis page says *"The amount of exposed continental crust in the Hadean is unknown."*

A lab result that concentrates glycine in a humidity chamber is a method carried up; it is not a recording of a Hadean pond. Carrying it down requires the measured gap between controlled cycling and geological persistence. This gap is reported qualitatively in `11_audit.md`, not assumed zero.

- **Mode:** `specified` (the gap exists), `gap` (its magnitude).
- **Refuter:** an instrument that measures geological-scale accumulation directly, which would collapse `R_T`.

### F9 — The ground settles, and this audit is not the ground

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*

The anchor here is rock and experiment. A consensus among review articles is one evidence pool talking. The Recursive Self-Improvement Trap: *"The Tether ties alignment to the ground. Not to human preferences... An outcome. A measurement. A board that pays or does not."* And *"Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*

- **Mode:** `general` (verdict weight rule).
- **Refuter:** a designed instrument or dating result that changes which setting qualifies. Agreement is not such an instrument.

---

## 4. Verbatim figure line census used in this audit

Checked character by character against `03-FIGURES_TEXT.md`:

- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
- Fig 3 :20 "The chain is ordered by dependency, not by importance."
- Fig 4 :22 "Only methods cross up. Only head starts come down."
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
- Fig 6 :21 "MINT composes inside the closure and can never add an atom."
- Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."
- Fig 8 :39 "So a search that finds nothing is never a proof of absence."
- Fig 9 :4-5 "are not one hard question but several well-formed ones. Split it rather than search."
- Fig 9 :32 "you get a kind of thing, never the answer itself"
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."
- Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."
- Fig 11 :43 "The habitat is enumerated, never composed."
- Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
- Fig 11 :46 "conditions: light, water, temperature, season, terrain"
- Fig 11 :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."
- Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."
- Fig 11 :51 "No standing list of good actors survives a change of residual."
- Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it."
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- Fig 13 :12 "the ordered succession of differences"
- Fig 13 :22 "a difference that can be spent"
- Fig 13 :134 "So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence"
- Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it."
- Operators :34 "the only bond a flat chain can express, so every term today is a sequence whether or not it should be"

**Triangulation status.** F2, F3, F4, F5, and F6 are triangulated: each is carried by at least two figure lines with low overlap (habitat enumeration in Fig 11 versus cycling in Fig 12 versus gradient/time in Fig 13 versus anchor in Fig 2), plus world sources from distinct methods. F7 and F8 are single-source on the figure side (Fig 9 :32 and Fig 4 :30 respectively) with world corroboration from different fields. The literal list of settings is a `gap`, not a single-source claim.

---

## 5. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim of this solution is refuted if any of the following holds:

1. **No gradient counterexample:** multi-step accumulation is demonstrated in a setting with no spendable gradient and no imported gradient (breaks F4 / Fig 13 :22).
2. **No-cycle counterexample:** accumulation compounds through a single pass with no re-entry of output as input (breaks F5 / Fig 12 :121).
3. **Dilution counterexample:** building-block concentration and product accumulation increase in a well-mixed open setting where dilution exceeds input (breaks F6).
4. **Persistence counterexample:** multi-step chemistry is shown to complete after contact with the setting has been severed (breaks F3 / Fig 11 :40).
5. **Union collapse:** at one scale and one residual the four conditions reduce to a single measured lever, making the union a partition (breaks F1 / Fig 9 :54).
6. **Anchor failure:** the geological or experimental ground reverses any of the above after the fact, which would move the verdict; agreement alone does not count (Fig 2 :29).

Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Send the shape and the refuter first, not a ranked list of settings (F2, F7). The list is a gap; say so.
2. Keep the four per-domain verdicts separate; never average them into a "best setting" (F1).
3. Put the ground in front: what rock or lab result would select among vent, pond, ice, and spring? (F8, F9).
4. Measure the lab-to-geology round trip gap `R_T` rather than treating lab cycling as a replay of the Hadean (Fig 4 :30).
5. Use the public, opt-in venues in `03_public_contact_points.csv` and ask for a refutation, not belief. One-to-one, never bulk (Fig 2 :35, :40).

---

## 7. Canonical usage check and retraction log

Two canonical sources were read after the first six sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit: the framework reports *"what a missing thing would have to look like (**a shape, not a name**)"* and stops at the limit of the instruments, recording the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7 (SEARCHED / INWARD / OUTWARD), the habitat and closure notes, and the mode rule.

### Retractions and confirmations

| earlier reading in this audit | status after canonical check |
|---|---|
| F1 "no single setting wins" first read as a ban on comparing settings | **Narrowed and preserved.** Fig 9 :54 governs the union of conditions; comparison of per-condition verdicts is still required. The ban is on a single averaged winner, not on comparison. |
| "persistence is a seventh primitive" (temptation in F3) | **Retracted.** Re-census assigns "lasted" to the held time state plus the contact relation. Fig 13 :134-135 and the README's re-census rule govern. Kept visible as S4. |
| F4 quoted only "a difference that can be spent" | **Confirmed and extended.** The fuller argument at Fig 13 :45-47 adds directedness, which is the load-bearing part. Both halves are verbatim. |
| "the figures cannot name a setting, therefore the question is unanswerable" | **Refused.** The canonical limit is a shape, not a name, but Fig 8 :39 says underivable is not unknowable and Fig 13 :134 says unreachable is a verdict, not silence. The list is owed to the ground, not declared impossible. |
| "world sources corroborate the shape" | **Narrowed.** The Wikipedia pages share a tertiary pool; Campbell et al. and Deamer & Weber are distinct groups in one origin-of-life field; the two essays share the framework author. Agreement is one witness, not several (Fig 2 :40). |
| F8 lab-to-geology transfer first read as a defect of the lab work | **Corrected.** It is a lossy transform between scales (Fig 4 :27-32), not an error. The gap is the honest report, not something to eliminate. |
| Apparent strain Fig 11 :51 (no standing list) versus the question's list request | **Not strained after re-census.** Fig 11 :51 governs actor valence relative to a residual; the enumeration itself is required by Fig 11 :43-44. The law constrains the ranking, not the enumerating. |

### SEARCHED / INWARD / OUTWARD (Formula step 7)

- **SEARCHED:** is a specific setting in the figure closure and unfound? No figure line names one. The closure does not change; more reading of the same 13 figures will not produce a name. Asked first.
- **INWARD:** extend the instrument from one already returning something. geological dating, residence-time measurement, and concentration assays already return readings; sharpen those (Fig 6 :32: an instrument is improved from a worse instrument already returning something).
- **OUTWARD:** import from a frame whose closure differs, described in effect terms. The geology and prebiotic-chemistry frames already hold settings; cast the four conditions in effect terms and let those frames answer (Fig 6 :30, Fig 8 :53).
- INWARD and OUTWARD are opposed and kept distinct; importing against a budget limit would add an atom that was not needed (Fig 8 :40-43).

### Updated verdict

The shape survives: a qualifying setting is an enumerated habitat whose conditions stay in contact long enough for a spendable gradient and re-entrant cycling to concentrate building blocks faster than they degrade, with the whole arrangement settled by rock and experiment. The literal list is a declared `gap`, owed to the ground and not to the figures. Verdicts per domain remain separate and are never averaged. Strains after re-census: four named (S1 standing-list, S2 substrate binding, S3 vent dilution versus pond cycling as union evidence, S4 persistence as time/contact), none hidden, none flipped. Mode `specified` on the shape, `general` on the union, `gap` on the list, not `grounded`. Simulated derivation, not a ground reading.
