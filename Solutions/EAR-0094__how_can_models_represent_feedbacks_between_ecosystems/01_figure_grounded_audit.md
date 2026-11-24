# Figure-grounded audit: representing feedbacks without losing useful detail

**Mode of this document: `specified`, not `grounded`.** It states what a coupled model would have to satisfy. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap (Isaiah N, 2026) says "LLMs can quickly simulate an approximate answer/output" and "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figures), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources actually opened 2026-11-22 are listed in `10_source_ledger.csv`.

---

## 0. Proposal header (seat reasoning)

```
DECIDES:    "Without losing useful detail" is not a promise of lossless representation.
            It is a request to make the loss measurable against the ground. Adopt the
            seven-part shape in the README as the ordinary term under audit. A = B?
            No: A (a coarser model that settles the decision) and B (the full coupled
            system) answer different questions, and only the ground decides between them
            (Fig 2 :29-30, Fig 4 :31-32).
HOURS:      This derivation and its checks approximately 2 to 3 agent-hours. A real
            settlement needs observations, not more argument (Fig 10 :24).
PRIOR CASE: QMGR-0037, the GR/QM composition package, imported as the calibration
            exemplar. Its retractions are the precedent for keeping corrections visible.
ANALOGUE:   Library of Babel searcher: state the residual in effect terms, bootstrap
            vocabulary by proximity, steer by the question as tether, stop at a shape.
            Habitat enumeration: read the list of actors off the world, never compose it.
LIMIT:      The framework returns a shape, not a name (Fig 9 :32). It cannot select a
            particular model architecture, a resolution, or a coupling scheme. A
            second seat that shares this evidence pool is internal consistency, not
            corroboration (Fig 2 :40).
```

---

## 1. The residual in effect terms

A coupled model of ecosystems, climate, and human land use stands in for the world so that a land-use decision can be made. The residual R is the gap between what the model predicts and what the ground (observations) returns, per slot, at the scale of the decision. "Losing useful detail" names the failure mode where coarsening the model discards a term that was load-bearing for that decision, and no instrument in the modeling frame registers the loss. So the residual is not "we lack resolution." It is "we cannot tell which lost detail mattered." Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

**R by arity, symmetry, and scale.**

- **Arity:** three coupled subsystems (ecosystems, climate, land use) plus an observer who must decide. A union compound, not one hard question. Fig 9 :54-58 warns that a bundled problem is a union of overlapping conditions and must be unbundled before searching.
- **Symmetry:** the couplings are directional and cyclic, not symmetric conjunctions. Land use changes emissions; emissions change climate; climate changes ecosystems; ecosystems change the land surface and the carbon sink that constrains land use. Adding the components does not give the loop (Fig 12 :121).
- **Scale:** patch to globe, season to century. Multiple membranes, each with its own lossy transform (Fig 4 :21).

**Domain census, one line per domain (actors / currency / anchor).** A domain needs a nameable anchor or it is not yet a domain.

| domain | actors | currency | anchor | partition / union |
|---|---|---|---|---|
| A. Climate physics frame | atmosphere, ocean, ice, radiation, greenhouse gases | energy and water fluxes | reanalysis and radiative observations | member of the A/B/C union |
| B. Ecosystem frame | vegetation, soils, microbes, species, carbon and nutrient pools | carbon, water, nutrient fluxes | eddy-covariance flux towers, inventories | member of the union; overlaps A and C |
| C. Land-use and decision frame | managers, policies, land-cover change, agriculture | decisions, land cover, emissions | land-use records and decision outcomes | member of the union; overlaps B |
| D. Modeling and compression frame | state variables, resolution, parameters, emulators | bits to describe, actions to evaluate (Fig 12 :125-126) | the round-trip gap measured against observations | cross-cutting, not a peer subsystem |
| E. Verification and decision frame | modelers, reviewers, decision-makers | agreement and residual | the ground, never agreement | cross-cutting |

The three subsystem frames are a **union with compound overlaps**, not a partition. Land use is both a human decision and a biophysical forcing; ecosystems are both a carbon sink and a climate responder. Each overlap is a compound with its own loop and its own ground (Fig 9 :54-58). Domains D and E run across all three.

**Order by dependency (Fig 3).** Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." The chain here is: observation → vocabulary (what the model can represent) → objective (what counts as progress for the decision) → plan (which detail to keep) → carry to the next decision. The likely break is the middle link: having terms for what a situation affords is mistaken for a dictionary when it is a grammar (Fig 12 :114-115). Adding resolution above that break cannot rescue it. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

---

## 2. Figure census (verbatim, quoted before concluding)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Every quoted string below is an exact substring of that file.

| figure | what it bears on | verdict for this domain |
|---|---|---|
| 1 The Agent | per-slot residual, no aggregation | governs D and E: keep the signal where it lives |
| 2 The Ground | anchor, independence, correlation valence | governs all: ranges against observation, not agreement |
| 3 Dependency Chain | order by dependency, the unmeasured middle link | governs the modeling chain |
| 4 The Membrane | lossy cross-scale transform, round-trip gap | governs D decisively |
| 5 Mint Pipeline | acceptance as a bargain (MDL) | governs "useful" as what pays |
| 6 Closure / Reachability | inward versus outward, instruments improved from worse ones | governs the resolution decision |
| 7 Room Chain | agreement compounds, evidence does not | governs verification outreach |
| 8 Union Surplus | low-overlap union, provenance of imports | governs cross-subsystem coupling |
| 9 Leave / Arrive | describe residual first, filters not witnesses, shape not a name | governs the whole derivation |
| 10 Ground Maintainer | bring a characterised residual, verifier non-access | governs stage 1 of outreach |
| 11 The Habitat | enumerate, contact cascades, introduce not subtract | governs which detail counts as useful |
| 12 The Bond | cycle, network bond-formation, two currencies | governs feedback topology |
| 13 Minimum Viable Set | cross-kind composition, discarded detail as noise | governs scale and structure |
| Operators and Symbols tables | R is per slot; R_T is the round-trip gap | notation |

**Strain test applied before use.** Fig 1 :19 (per-slot residual) and a global model skill score were initially read as conflicting. Re-census: Fig 1 governs where the error signal lives; a global skill score is a frame-internal diagnostic, not the residual (Fig 1 :24-27). Different objects, no strain. Fig 4's "throw away detail" and Fig 11's "enumerate everything in contact" were also read as conflicting. Re-census: Fig 4 governs the transform across sizes; Fig 11 governs enumeration of the habitat at one size. Different quantities, no strain. Both re-censuses are recorded in section 6.

---

## 3. Findings F1 to F8

### F1 - Loss is structural; measure it, do not promise to avoid it (decisive for D)

Fig 4 :27: "The transform between scales loses information, and that is the point." Fig 4 :28-29: "Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible, and something carried up and brought back down will not match what was sent." Fig 4 :31-32: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up." Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

So the question is misposed if it asks for a representation with no loss. The figure-licensed form is: pick the decision, coarsen, carry the result back down, and report the round-trip gap R_T against the ground. "Useful detail" is exactly the detail whose loss shows up in R_T on a decision-relevant slot. Fig 13 :32: "the detail a crossing discards reappears above it as noise." Noise is the discarded detail returning, which is why an unnoticed coarsening looks like data noise rather than a modeling choice.

- **Mode:** `general` (structural), with the measurement instruction `specified`.
- **Triangulation:** triangulated across Fig 4 and Fig 13 (low overlap: membrane transform versus substrate alternation).
- **Refuter:** exhibit a cross-scale coupling of the three subsystems for which R_T is zero on every decision-relevant slot against the ground. Then loss is avoidable and this finding is false.

### F2 - Keep the residual per slot; the average eats the live signal (governs D and E)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

Applied here: a single global skill score for a coupled model can be near zero while one region, one vegetation type, or one season carries the feedback that matters for the land-use decision. "Without losing useful detail" means the model must report where the mismatch is, not only how large the total is. The Symbols table binds this: R is "always a slice: what cannot be perceived yet is residual and simply cannot be read."

- **Mode:** `specified` (falsifiable at the ground).
- **Triangulation:** single-source within the figures (Fig 1). World corroboration from Williams et al. 2009 (multiple independent orthogonal data limit equifinality) is secondary and shares no evidence pool with the figure text, but it cannot promote this to two figures.
- **Refuter:** show that aggregating residuals across slots preserves the decision-relevant signal as well as a per-slot reading, for the decision at hand. Then the per-slot instruction is not load-bearing.

### F3 - A feedback is a cycle, and a chain cannot close (governs A/B/C topology)

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one." Fig 13 :24: "that entities relate, and influence travels." Fig 13 :29-30: "A state with no structure has no magnitude: three of what, ordered how, varying across what? A structure with no state is empty: an ordering over nothing, a network with nothing at the nodes."

The carbon-climate feedback is a concrete instance of the cycle: warming increases respiration and reduces uptake, which raises atmospheric CO2, which increases warming. Womack et al. 2026 (opened) note that "any linear emulation technique will break down in the presence of nonlinearities (Fig. 1d – ice-albedo feedbacks)," a world-facing instance of the same topology problem. A model wired as one-way forcing links (land use to climate to ecosystems, stop) cannot represent the return path, so it does not model the feedback at all.

- **Mode:** `general` (structural).
- **Triangulation:** triangulated across Fig 12 (cycle) and Fig 13 (network, cross-kind composition), low overlap.
- **Refuter:** represent one of the three coupled feedbacks faithfully as a one-way chain with no return path, and show the decision outcome is unchanged. Then the cycle instruction is unnecessary for that case.

### F4 - Couple low-overlap frames; shared bias is one witness (governs verification)

Fig 8 :45: "Two frames together reach what neither reaches alone." Fig 2 :31-32: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."

Cox 2019 (opened) is the world-facing warning: "Where the models share similar systematic biases, or neglect similar processes, even statistically significant emergent relationships may mislead about the likely changes in the real system." An ensemble of models fed the same reanalysis and built on the same parameterizations is one frame wearing many names; its agreement is not corroboration. Buy independence with genuinely different observations (flux towers, atmospheric inversions, satellites) ranged separately against the ground. Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

- **Mode:** `general` on the rule, `specified` on which frames are independent in a given study.
- **Triangulation:** triangulated across Fig 8 and Fig 2, low overlap.
- **Refuter:** show that two frames drawing on the same evidence provide independent corroboration for a decision-relevant quantity. Then the independence criterion is wrong.

### F5 - Enumerate the habitat out to where the cascade stops (governs what "useful" means)

Fig 11 :43-44: "The habitat is enumerated, never composed. List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :52-53: "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

This is the direct answer to "useful detail": detail is useful if it sits in the contact cascade of the decision-relevant residual, even three steps out. A model that scopes only to first-order contact (land use changes albedo) misses the third-order effect (albedo changes productivity, which changes land-use viability). Enumerate from the world, do not compose a convenient list.

- **Mode:** `general`.
- **Triangulation:** single-source within the figures (Fig 11). Cox 2019's observation that "if an important process is neglected in all models" constraints mislead is a non-figure corroboration, not a second figure.
- **Refuter:** show that for the decision at hand, third-order and higher contact effects are provably irrelevant, so first-order scoping loses nothing useful. Then this enumeration instruction is idle.

### F6 - More resolution is not the same as more answer (governs the resolution decision)

Fig 6 :29: "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms." Fig 6 :30: "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

"Losing useful detail" is often treated as a resolution problem, so the reflex is inward refinement. Fig 6 says inward refinement fails when the axis cannot carry the quantity. The paired outward move is to find a frame that already holds the quantity and import it with a source gate and a shadow test. Lu and Ricciuto 2019 (opened) give a world-facing version of the bargain: using SVD to reduce output dimensions, "using only 20 model simulations, we can build an accurate surrogate system of the 42 660 variables," with reported consistency 0.93. Compression paid because the retained modes carried the signal; the round trip was measured, not assumed.

- **Mode:** `specified`.
- **Triangulation:** triangulated across Fig 6 and Fig 4 (two distinct instruments: reachability versus transform loss).
- **Refuter:** show a case where refining resolution on a single axis recovers a decision-relevant quantity that no other frame holds and no coarsening had discarded. Then the inward-versus-outward split is not the right instrument here.

### F7 - "Useful" is a bargain, and complexity is a filter, not a verdict (governs D and E)

Fig 5 :42-43: "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before." Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Fig 12 :125-126: "A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."

A detail earns its place when stating it plus the residual it leaves costs less than the residual it removes. Resolution and computational cost rank what gets tried; they do not decide whether the representation is adequate. Van Katwyk et al. 2026 (opened) describe the world-facing version as a co-design loop in which "simulators generate data that trains emulators, and emulators, in turn, help target where simulation efforts are most needed," but warn that "ML models typically fail to generalize beyond their training distributions, especially when extrapolating to previously unseen forcings, extreme events, or overshoot scenarios." That is a filter failure being mistaken for a verdict.

- **Mode:** `general` on the bargain, `specified` on any particular detail.
- **Triangulation:** triangulated across Fig 5, Fig 9, and Fig 12 (low overlap: acceptance test, verdict/budget split, two currencies).
- **Refuter:** show a detail that must be kept for the verdict even though it fails the description-length bargain, or that a resolution budget is itself the verdict. Then the filter rule is wrong.

### F8 - The framework returns a shape, not a model (governs the whole answer)

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134-135: "Unreachable is a verdict here, not a silence" and "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 7 :13: "agreement compounds, evidence does not." Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."

The canonical figures README states the framework gives "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the instruments. So this solution does not name the right model, resolution, or coupling. It states the shape those things must have and the refuter that would retire it. It also refuses to gather agreements as a substitute for the ground: a room of modelers reaching a conclusion without the ground is agreement, and adding people raises the vocabulary and does not add an anchor (Seat Map :283).

- **Mode:** `general` (a limit on what the framework can return).
- **Triangulation:** triangulated across Fig 9, Fig 13, and Fig 7 (low overlap).
- **Refuter:** derive a particular model architecture, resolution, or coupling scheme from the figures alone, with no import and no ground reading. Then the shape-only limit is false.

---

## 4. Pre-registered refuter (written before the conclusion)

Per Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. A cross-scale coupling of ecosystems, climate, and land use is demonstrated with zero round-trip gap R_T on every decision-relevant slot against the ground (breaks F1).
2. Aggregating residuals across slots or regions is shown to preserve the decision-relevant signal as well as a per-slot reading (breaks F2).
3. One of the three coupled feedbacks is faithfully represented by a one-way chain with no return path, with the decision outcome unchanged (breaks F3).
4. Two frames drawing on the same evidence are shown to give independent corroboration for a decision-relevant quantity (breaks F4).
5. Third-order and higher contact effects are shown to be irrelevant to the decision, so first-order scoping loses nothing useful (breaks F5).

If any fires, the corresponding finding is withdrawn and the shape is redrawn. Until one is run, no part of this may be labelled `grounded`. A sixth, standing falsifier from Fig 8 :39: "So a search that finds nothing is never a proof of absence," so failure to find a governing figure line after re-census would be recorded as `gap`, not as a silent omission.

---

## 5. Recommendation

1. Restate the question as a measurement instruction: choose the decision, coarsen, carry back, report R_T (F1). Do not promise losslessness.
2. Report residuals per slot, region, and season, not one global score (F2).
3. Wire the coupling as explicit cycles with a sign, not one-way forcing chains (F3).
4. Triangulate observationally independent frames and declare their overlap in the provenance (F4).
5. Enumerate the habitat of each feedback out to where the cascade stops mattering; read the list off the world (F5).
6. Treat resolution and cost as filters for budget, and use inward and outward as distinct instruments (F6, F7).
7. Send the shape and its refuter, not a named architecture; record a reader's verdict before showing the framework (F8). Fig 4 :22: "Only methods cross up. Only head starts come down."

---

## 6. Canonical usage check, retractions and confirmations

Two local sources were read after the first five sections and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. The README says the quotes are the authority and that "a reading that makes one contradict another has misidentified its domain, not found a flaw." WATSON 60 says the figures are the ground for design questions, so a question like "how many layers should the model have?" is decidable from the figures or is a genuine gap, not something to escalate to an authority.

| earlier move | status after the canonical check |
|---|---|
| Tried to name a coupling scheme (a carbon-climate emulator) as the answer | **Retracted.** Fig 9 :32 and the README return a shape, not a name. The scheme stays in the world-source section as an instance, not a derivation. |
| Read "without losing useful detail" as a call for maximum resolution | **Retracted and replaced.** Fig 6 :29 says inward refinement fails on an axis that cannot carry the quantity; the round-trip gap is the instrument. |
| Read Fig 1 per-slot residual as conflicting with global model skill | **Re-census, not a strain.** Fig 1 governs where the error signal lives; a global skill score is a frame-internal diagnostic (Fig 1 :24-27). Different objects. |
| Read Fig 4 lossy transform as conflicting with Fig 11 "enumerate everything" | **Re-census, not a strain.** Fig 4 governs the transform between sizes; Fig 11 governs habitat enumeration at one size. Different quantities. |
| Treated the world sources as corroboration of the figure verdict | **Narrowed.** They are instances and warnings from different fields; Fig 2 :40 makes agreement from a shared pool one witness. They corroborate in the weak sense and never decide (Fig 2 :29-30). |
| "Models that agree are trustworthy" | **Refused.** Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Seat Map :163: correlation is disqualifying for a verdict. |
| Any claim that this derivation settled the question | **Refused.** Mode is `specified`/`general`, never `grounded`; no measurement was taken. |

### Seven-question recursive derivation (summary)

1. **Is lossless representation possible across scales?** No. Fig 4 :27. Legality of the transform, not a claim about a particular model.
2. **What makes lost detail "useful"?** Its loss changes a decision-relevant slot's round-trip gap. Fig 4 :31-32, Fig 1 :19.
3. **Does adding the three subsystems give the feedbacks?** No. The return path is a cycle; a chain cannot close. Fig 12 :121.
4. **Which observations settle it?** Those that anchor the residual and are independent of one another. Fig 2 :29-32.
5. **Does more resolution answer it?** Only when the axis can carry the quantity; otherwise go outward. Fig 6 :29-30.
6. **Is this an import?** No new primitive is needed. The shape composes from the figures already held; world sources are instances, not atoms that move the wall (Fig 6 :23).
7. **What is the honest stop?** A shape with a measured gap and a pre-registered refuter. `Unreachable is a verdict here, not a silence` (Fig 13 :134).

### Updated verdict

The shape survives: make the loss measurable against the ground, keep the per-slot signal, close the loops, enumerate the habitat, triangulate independent observers, and treat resolution and cost as filters. Every specific claim about a particular model, resolution, or coupling is withheld, because the framework returns a shape, not a name. Strains after re-census: none hidden; two re-censuses recorded above. World sources corroborate in different fields but decide nothing.
