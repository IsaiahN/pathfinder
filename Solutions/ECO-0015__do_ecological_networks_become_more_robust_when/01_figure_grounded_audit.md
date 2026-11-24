# Figure-grounded audit: ECO-0015, weak versus strong interactions in ecological networks

**Mode of this document: `specified`, not `grounded`.** Structural metalaws are marked `general`. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement pays for any claim in this folder, so nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-23: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the ecological question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session, cited as `Fig N :line`. `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources are secondary, were actually opened, and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

R = |Γ(b,a) - o'| per slot s (Formula step 1; Symbols table, `R`). For this question:

- **b** is what the network takes to be the case before the perturbation: species composition, trait distributions, and the matrix of per-capita interaction strengths inherited from its history.
- **a** is the action or perturbation: a species removal, an invasion, a drought, a warming event, a change in resource supply.
- **Γ(b,a)** is what the web's current interaction structure predicts will happen.
- **o'** is what actually happens: extinction or persistence, return time, variance, the shape of the transient.
- **s** is the slot: a species, a single interaction, or a trophic loop. R is indexed by slot, never by the whole web at once.

Fig 1 :19 "The residual is indexed by object slot, not aggregated."

Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

The phenomenon to explain is not a single number called "robustness". It is why the gap between what a web's interaction structure predicts and what a perturbation actually returns stays small for some species, links and loops and grows for others. Call this `D_s`, the persistence of a live, low-residual slot.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a characterisation of which arrangements of link strengths and loop signs keep `D_s` large, plus an instrument that discriminates a failure of oscillation damping from a failure of load-bearing support. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the pre-registered refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." The same line names acceptable anchors: "A measurement, an experiment, a counter, a market, a patient outcome." For ecology the anchor is a perturbation experiment with measured persistence or extinction outcomes, in a real web or a calibrated mesocosm. A leading eigenvalue computed from an assumed interaction matrix is a frame-internal quantity, because the model both produces the interaction strengths and scores the stability. Fig 1 :23 "The ground enters as the only metric." Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."

**Question type.** The literal "weak, or strong?" is a **union** question that has been written as a partition. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Re-census below keeps the two conditions separate.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry and scale of R

- **Arity.** R is a relation among a web structure, a perturbation and an outcome, indexed by slot and ordered in time. It therefore carries an **ordered** bond (`→`, sequence: "A then B; B needs A to have happened", Fig 12 :72) and a **comparison** bond for "more robust" (`⋛`, "a threshold relation between two quantities", Operators table :48). It is not symmetric: the perturbation and the web are not interchangeable.
- **Symmetry.** "Robust" is a threshold relative to a perturbation regime, not an absolute magnitude. A link that is strong relative to one perturbation is weak relative to another. The comparison is relative, as Fig 11 :49 insists about valence.
- **Scale.** Three scales are in view: the single trophic loop (one cycle), the local neighbourhood of a species (its interaction partners), and the whole web's response across a perturbation sequence. Fig 4 :20 "Only the actors, the currency and the anchor change." The membrane between scales is a lossy filter, so the round-trip gap R_T must be measured rather than assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The interaction habitat** | species, consumers, resources, competitors, mutualists; conditions such as season, temperature, nutrient supply | interaction strength, energy and nutrient flow | yes: measured persistence, extinction, biomass return in a perturbation experiment (Fig 11 :48 reads the list off the world) | admitted |
| **D2 The loop composition** | links as bonds, loops as cycles, signs as feedback, biomass pyramids as the pattern that sets loop weight | loop gain, sign, arrangement | yes: measured return time and oscillation damping in the same experiment | admitted |
| **D3 The measurement channel** | field estimates of per-capita interaction strength, monitoring instruments, reported stability metrics | contact with the ground | yes: the ground, "the ground does not decay, the channel does" (Fig 10 :24) | admitted |
| **D4 The novelty channel** | incoming species, invaders, novel perturbations, differing closures | reach under change | yes: a measured persistence outcome after the novel perturbation enters | admitted |
| **X1 "Interaction strength" as an intrinsic good or bad property** | a link's magnitude | none independent of the residual | **no** anchor independent of which residual is being defended | not a domain yet; excluded by Fig 11 :49-51 |
| **X2 "Complexity itself" as the sole cause** | species count, connectance | topological indices | indices are measurable, but they are frame-internal summaries of D1 and D2, not a separate ground | absorbed into D1/D2 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that interaction magnitude never matters.

### 1.3 Partition or union

D1 and D2 overlap: the loop is a composition inside the habitat, so their overlap is a compound with its own loop. D3 and D4 overlap: encountering novelty is exercised through the measurement channel, so that overlap is a second compound. The whole question is a **union**, not a partition (Fig 9 :54-57).

The unbundled conditions are:

- **C1 (damping):** many weak links lower loop gain and damp consumer-resource oscillations, keeping population densities away from zero.
- **C2 (load-bearing):** a few strong links provide the coupling without which the web has no regulated structure, and some strong, tightly coupled pairs are what make a complex web stable at all.

A web failing only C1 and a web failing only C2 are not different degrees of one failure. They are different compounds and need different instruments (Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."). The Library of Babel essay states the same stop condition: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?"

### 1.4 Dependency order (Fig 3)

Fig 3 :20 "The chain is ordered by dependency, not by importance." Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

Order for this question: 1 perception (can the measured interaction strengths resolve the links that matter?) → 2 vocabulary (does the frame have terms for what a link affords: damping, coupling, loop sign?) → 3 objective (can it say what would count as progress, namely which slot's residual shrinks?) → 4 planning (which perturbation experiment?) → 5 learn and carry (name what worked and carry the method to the next web). The middle link is the one with no instrument: most ecology has measured topological pattern well and has struggled to measure per-capita interaction strength in situ (Paine 1992; Wootton and Emmerson 2005, reported in the Allesina and Tang reference list and opened via the Paine abstract). Diagnosis effort lands above the break because that is where the measurements already exist.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and what may score it |
| 2 The Ground | perturbation experiment as anchor; independence vs common pool | governs the witness rule and the anchor |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across scales; methods up, head starts down; R_T | governs loop-to-web transfer |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when an interaction-strength term can be admitted |
| 6 Closure / Reachability | idempotence; import only from a differing closure | governs novelty and the honest cost of a refutation |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs repeated-model drift |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs two-literature corroboration |
| 9 Leave / Arrive | union vs partition; split rather than search; describe first | governs the unbundling itself |
| 10 Ground Maintainer | channel decay, pooled readings, lost touch | governs quick loss and measurement failure |
| 11 The Habitat | valence relative to residual; contact cascades; habitat enumerated | decisive for D1 and D2 |
| 12 The Bond | cycle sign, flat case, arrangement is substance, load-bearing structure | decisive for C1 and C2 |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |
| Operators table | ⋛ is a threshold relation; negation is not a bond | "weak or strong" is a comparison, not a bond between them |
| Symbols table | R is the aim; the ground is the anchor | no R was stated by the question, so one is bound in section 0 |

**Strain test applied during this census.** Two candidate readings were rejected rather than smoothed over.

- **S1.** Applying Fig 13's six physical terms directly to a food web (calling trophic level a spectrum, energy flow the energy term, the web the network term) only fits by renaming. Re-census: Fig 13 governs the physical substrate, not ecological categories. Only its structural claims (minimality, load-bearing members, closed set with open arrangements) are used, and those are used as analogues with the status declared.
- **S2.** Reading Fig 12's bond price in bits as if it were the magnitude of an ecological interaction strength is a unit mismatch. Re-census: the price governs description cost, not population-dynamic magnitude. Fig 12 is used here for cycle sign, arrangement, and the flat case, not for the pricing rule. Both strains are recorded in section 6.

No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about ecological networks, `grounded` only if settled by a measurement. None is `grounded`. Triangulation means low topical overlap between figures inside one framework, not independent evidence pools.

### F1: The "or" is a union of two conditions, not one binary choice

**Mode: `specified` (the union claim is `general`). Domains D1, D2. Status: triangulated (Fig 9 union rules and Fig 12 arrangement rules, low overlap).**

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."

Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

Fig 9 :4 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset"

Fig 9 :5 "are not one hard question but several well-formed ones. Split it rather than search."

The ecological literature has exactly this shape. McCann, Hastings and Huxel (1998) and Neutel, Heesterbeek and De Ruiter (2002) each work well on a subset: damping of oscillations away from equilibrium and loop weight in real food webs. Allesina and Tang (2012) works well on a different subset: asymptotic probability of stability of random interaction matrices classified by interaction type. The disagreement does not shrink with more effort inside either frame, so Fig 9 :4-5 says split, not search harder. Splitting gives C1 (damping) and C2 (load-bearing coupling), each with its own instrument.

**Refuter:** a single intervention, such as uniformly scaling every interaction strength by one factor, that makes every tested web robust across multiple perturbation regimes and leaves no categorically different residue. If it succeeds, the union collapses into a partition and F1 is false.

### F2: Strength does not carry valence; the residual does

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 habitat valence and Fig 12 arrangement, low overlap).**

Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."

Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."

Fig 11 :51 "No standing list of good actors survives a change of residual."

Fig 12 :94 "The arrangement is the substance."

The question asks as if "weak" and "strong" carried valence, as if weak were generally good and strong generally bad. The figures deny that any actor or link carries valence as a property. A strong predator-resource link is load-bearing for a persistence residual under one perturbation and destabilising for a return-time residual under another. The same magnitude can damp or amplify depending on which loop it closes and which residual is being defended. The engineering witness makes the same point from outside ecology: the small-gain theorem gives a sufficient condition for stability when loop gain is below one, while the large-gain theorem gives the minimum loop gain needed to stabilise an unstable plant (Wikipedia summary of Zames 1966 and Georgiou, Khammash and Megretski 1997, fetched 2026-11-23). Weakness stabilises in one case and strength is required in the other, with no change in what "gain" means.

**Refuter:** a link whose measured effect on persistence keeps the same sign across a documented change of residual (for example, across a shift from demographic to environmental perturbation) while its magnitude and position are held fixed. If none can be found, F2 weakens to `general`.

### F3: An all-weak web is the flat case and carries nothing

**Mode: `general` for the structure, `specified` for the ecological consequence. Domain D2. Status: triangulated (Fig 12 flat case and Fig 13 load-bearing members, low overlap).**

Fig 12 :101 "A bond that costs nothing is a bond that carries nothing, which is the flat case."

Fig 13 :48 "And the set is minimal: remove one and something stops."

Fig 13 :49 "Each member is load-bearing in at least one of them"

If every interaction strength falls to zero, no bond carries information. There is no regulation, no coupling, and strictly no network to call robust. So "weaker is always more robust" fails at its own limit. This is not an empirical generalisation; it is the structural consequence of what a bond is. The world literature already reports the non-flat pattern. McCann, Hastings and Huxel (1998) write that "food-web interaction strengths are indeed characterized by many weak interactions and a few strong interactions" (abstract, fetched 2026-11-23). Paine (1992), measuring per-capita strengths in the field, reports "mainly weak or positive interactions, and a few strong interactions" (abstract, fetched 2026-11-23). Neither source supports all-weak.

**Refuter:** a web whose interaction strengths are all zero that nevertheless shows network-level regulation, that is, a returned signal that cannot be attributed to the species acting alone. Under Fig 12 :101 that is impossible; if observed, F3 is false.

### F4: The sign and placement of the loop decide closure, not magnitude alone

**Mode: `specified`. Domain D2. Status: triangulated (Fig 12 cycle rule and the control-theory witness, very low overlap).**

Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

Neutel, Heesterbeek and De Ruiter (2002) report that "in real food webs, interaction strengths are organized in trophic loops in such a way that long loops contain relatively many weak links" and that this "reduces maximum 'loop weight' and thus reduces the amount of intraspecific interaction needed for matrix stability" (abstract, fetched 2026-11-23). That is the figure's cycle rule expressed in ecological units: the sign decides whether the loop closes stably, and the distribution of magnitudes along a long loop decides the loop's weight. Tang, Pawar and Allesina (2014) add that "the correlation between the effects of consumers on resources and those of resources on consumers, substantially accounts for their stability" (abstract, fetched 2026-11-23), so the arrangement of strengths, not just their marginal distribution, is what settles the matter.

**Refuter:** a feedback loop whose closure is unchanged when the sign of one link is reversed while the absolute loop gain is held fixed. Under Fig 12 :121 the sign reversal must change closure; if it does not, F4 is false.

### F5: Never average across species, links or loops

**Mode: `general` with a `specified` methodological consequence. Domains all. Status: triangulated (Fig 1 and Fig 10, low overlap).**

Fig 1 :19 "The residual is indexed by object slot, not aggregated."

Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings"

Fig 10 :28 "you have lost touch"

A single "network robustness" scalar is a pooled reading. It destroys the only signal that says which species or link is losing contact with the ground. The specified consequence: any answer to ECO-0015 that reports only a web-level average has already thrown away the diagnostic. This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** one network-level robustness scalar that predicts prospectively and per species which named slot will fail under a new perturbation, without any slot-level data. If one exists, F5's methodological consequence is false.

### F6: A model-internal stability score is not the anchor

**Mode: `general`. Domain D3. Status: triangulated (Fig 1, Fig 2 and Fig 8, three distinct roles).**

Fig 1 :23 "The ground enters as the only metric."

Fig 2 :29 "A measurement, an experiment, a counter, a market, a patient outcome."

Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."

May (1972) built the original result from random matrices whose interaction strengths were assumed, and Allesina and Tang (2012) extend it analytically to interaction types. Both are frame-internal: the model supplies the strengths and scores the stability with its own eigenvalues. Fig 8 :32 means that more simulation inside the same matrix frame cannot add the missing atom, which is a ground reading of persistence under a named perturbation. Tang, Pawar and Allesina (2014) show that random webs preserving the distribution and correlation of interaction strengths have stability properties similar to empirical systems. That is a strong result about what the frame can represent, but it is still a model result, a filter for which experiment to run, not the verdict itself. Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

**Refuter:** a simulation-derived stability metric that predicts extinction at a named slot in a real web, prospectively and without ground calibration. If one exists, F6 is false as written and the model metric is an instrument after all.

### F7: Load-bearing strong links can be necessary

**Mode: `specified`. Domain D2. Status: triangulated (Fig 13 load-bearing structure and the tightly-coupled-pairs result, low overlap).**

Fig 13 :48 "And the set is minimal: remove one and something stops."

Fig 13 :49 "Each member is load-bearing in at least one of them"

Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"

Allesina and Tang (2012) report that "Stable predator–prey networks can be arbitrarily large and complex, provided that predator–prey pairs are tightly coupled" and that "the probability of stability for predator–prey networks decreases when a realistic food web structure is imposed or if there is a large preponderance of weak interactions" (abstract, fetched 2026-11-23). This is the world-level name for C2. It *conflicts* with a naive reading of McCann et al. (1998) as "weak is always good". The conflict is not resolved by flipping either verdict. It is returned to the census in section 6, where both literatures are re-mapped to different quantities. The figure-grounded residue is that some links are load-bearing, and removing or weakening them removes a function; a web needs a few strong couplings exactly as a minimal set needs each of its members.

**Refuter:** a web that keeps all of its functions and its measured persistence after every one of its strongest links is weakened to near zero. If that is possible, the load-bearing claim is false for that web and C2 collapses.

### F8: Novelty needs a differing closure; composition inside the web cannot supply it

**Mode: `specified`. Domain D4. Status: triangulated (Fig 6 and Fig 8, distinct roles).**

Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

Fig 6 :21 "MINT composes inside the closure and can never add an atom."

Fig 8 :45 "Two frames together reach what neither reaches alone."

Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists."

Robustness to a novel perturbation (a new species, a new pathogen, a new climate regime) is not the same quantity as robustness to a perturbation the web has already met. Reweighting existing interaction strengths explores arrangements inside the closure. Meeting a differing closure can add an atom: an invader, a mutualist, a new consumer. Fig 11 :52-54 warns that contact cascades, so scoping to direct interactors misses the residual that matters three steps out: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

**Refuter:** a web that maintains measured persistence under a genuinely novel perturbation by reweighting its existing links alone, with no new species, no new interaction and no contact with a differing closure. Under Fig 6 :21 that cannot add reach; if observed, F8 is false.

### F9: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per species, link and loop, never a web-wide average | general | Fig 1 :19, :22 | figure-derived |
| The anchor is a perturbation experiment, not a model eigenvalue | general | Fig 1 :23; Fig 2 :29 | figure-derived |
| "Weak or strong" is a union of C1 damping and C2 load-bearing | general | Fig 9 :54, :55, :57 | figure-derived |
| Strength does not carry valence; valence is relative to the residual | specified | Fig 11 :49, :50, :51 | triangulated F2 |
| An all-weak web is the flat case and carries nothing | general | Fig 12 :101 | figure-derived |
| Loop sign and placement decide closure, not magnitude alone | specified | Fig 12 :121 | triangulated F4 |
| A few strong couplings can be load-bearing | specified | Fig 13 :48, :49 | triangulated F7 |
| Model-internal stability scores are filters, not witnesses | general | Fig 1 :27, Fig 8 :32, Fig 9 :60 | figure-derived |
| Novelty needs contact with a differing closure | specified | Fig 6 :21, :23; Fig 13 :115 | triangulated F8 |
| Which specific strengths stabilise a named real web | not stated | none | `gap`: needs an instrument and a ground reading |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule in the Seat Map (line 287): "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following is observed:

1. One intervention uniformly scaling all interaction strengths makes every tested web robust across multiple perturbation regimes, leaving no categorically different residue (breaks F1).
2. A link's effect on persistence keeps the same sign across a documented change of residual while magnitude and position are fixed (breaks F2).
3. A web with all interaction strengths at zero still shows network-level regulation (breaks F3).
4. A loop's closure is unchanged when one link's sign is reversed at fixed absolute loop gain (breaks F4).
5. One network-wide scalar predicts prospectively and per species which named slot fails under a new perturbation, with no slot-level data (breaks F5).
6. A simulation-derived stability metric predicts extinction at a named slot in a real web, prospectively and without ground calibration (breaks F6).
7. Every strong link in a web can be weakened to near zero with persistence and function unchanged (breaks F7).
8. A web maintains measured persistence under a genuinely novel perturbation by reweighting existing links alone, with no new atom entering (breaks F8).
9. Fig 8's idempotence fails inside a closed set, or one of the six substrate terms is derived from the other five (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a per-slot ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a general theory of stability (Fig 10 :52 "Bring a characterised residual, never the source.").
2. Keep C1 (damping) and C2 (load-bearing) separate in every report. A blended "robustness score" is a pooled reading and destroys the diagnostic (Fig 10 :26).
3. Ask, at each handoff, which slot's residual is being defended and whether that was measured. Do not fund above the break (Fig 3 :20, :27).
4. Treat any list of "good" or "bad" link strengths as Γ, a candidate library whose reach must be tested against the ground, never as the answer (Fig 11 :51).
5. Use the ecology literature as a set of low-overlap witnesses and a budget filter, not as the verdict. McCann/Neutel and Allesina/Tang draw on different methods and different quantities, so they are two frames, not two votes in one pool (Fig 8 :50-52).
6. Name the ground explicitly in any packet: a perturbation experiment with per-species outcomes, not an eigenvalue from an assumed matrix (Fig 2 :29).
7. Stop at the shape. Do not name a universal strength rule. The framework returns "a kind of thing, never the answer itself" (Fig 9 :32).
8. Offer the formula as a method only after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.

---

## 6. Canonical usage check, re-census, and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and four essays fetched 2026-11-23 (*The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*, *The Library of Babel*, *Decoding Tacit Knowledge*).

- The README confirms: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also confirms the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw."
- WATSON 60 confirms that the figures are metalaws for design questions and that the seat must not ask the anchor to decide what the figures already settle. No question was left for a human ruling by this derivation.
- The essays confirm the simulation status and the shape limit: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself"; "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question"; and "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."

### Re-census R1: the apparent conflict between the two ecological literatures

| earlier move | status after re-census | reason |
|---|---|---|
| Read McCann/Neutel and Allesina/Tang as one debate with a winning side | **Retracted, re-census R1** | They measure different quantities. McCann/Neutel study damping away from equilibrium and loop weight in webs with measured strengths; Allesina/Tang study the asymptotic probability of matrix stability by interaction type. Fig 9 :4-5 says split rather than search. Both stay as witnesses, and the union stays a union. |
| Read McCann et al. 1998 as claiming "all weak is stable" | **Retracted at source** | Its own abstract says the empirical pattern is "many weak interactions and a few strong interactions". It never claimed all-weak. |
| Read "strong interactions necessary" as a claim about all webs and all residuals | **Narrowed to `specified`** | It is supported for tightly coupled predator-prey pairs under the matrix-stability residual (Allesina and Tang 2012) and for load-bearing structure (Fig 13 :48-49). No `grounded` claim is made. |
| Apply Fig 13's six physical terms to a food web | **Retracted, strain S1** | Only fit by renaming trophic levels and energy flow. Re-census: Fig 13 used only for minimality and load-bearing structure, as a declared analogue. |
| Read Fig 12's bit-price as interaction magnitude | **Retracted, strain S2** | Unit mismatch. Re-census: Fig 12 used for cycle sign, arrangement and the flat case only. |
| Treat a leading eigenvalue as the anchor | **Retracted as a witness, kept as a filter** | Fig 1 :27, Fig 2 :29, Fig 9 :60. The model scores itself with a quantity it produces. |
| Wanted to answer the literal binary with "weak" or "strong" | **Refused as written** | Fig 9 :32 returns a kind of thing, never the answer; Fig 11 :49 denies that strength carries valence. |
| F1 called a binary choice in the early census | **Corrected to a union** | Fig 9 :54-57 plus the observed literature split. Verdict unchanged in substance, corrected in form. |

**Strains sent to the log:** S1 (Fig 13 applied to food-web categories) resolved by re-census; S2 (Fig 12 bit-price applied to interaction magnitude) resolved by re-census. The Allesina versus McCann/Neutel conflict is a *world* conflict, not a figure strain, and was resolved by splitting the residual, not by softening a figure. No unresolved figure strain remains after re-census.

### Round trip note

The condensation of the figures used in `07_the_tether_answer.md` loses three constraints that must not be treated as carried: the union must be split rather than averaged; strength carries no valence independent of the residual; and a model-internal eigenvalue is not the ground. The round-trip gap R_T is therefore nonzero and is recorded qualitatively in `11_audit.md`. Treating the formula as identical to the figure set would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

### Updated verdict

The shape survives: the question is a union of damping and load-bearing coupling, strength has no valence apart from the residual, an all-weak web is the flat case, loop sign and placement decide closure, the anchor is a per-slot perturbation experiment, and which strengths work in a named web is a `gap`. No world source flipped a figure verdict; the one genuine world conflict was returned to the census and split. Mode `specified` with `general` structural parts. Nothing is `grounded`.
