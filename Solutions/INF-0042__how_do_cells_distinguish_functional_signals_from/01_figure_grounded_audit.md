# Figure-grounded audit: how a cell tells a functional signal from molecular noise

**Mode of this document: `specified` on the shape, `general` on the structural claims, `gap` on the molecular mechanism.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* No measurement in this folder settles which molecular pathway a given cell uses.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, the eight essays, and the world sources in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual in effect terms

Question: *How do cells distinguish functional signals from molecular noise in changing environments?*

Restated as an effect, with the two options and what each leads to:

- A molecular event arrives at a receptor. Option A: treat it as a functional signal, and commit resources (transcribe, move, divide, die). Leads to: benefit if the event indexes a real condition at the ground, cost if it was a fluctuation.
- Option B: treat it as noise and ignore it. Leads to: saving resources if it was a fluctuation, cost if it indexed a real condition that needed a response.

The residual `R` is the gap between the prediction *"this event will pay at the ground"* and the observation *"this event produced a reading"*. A single reading does not determine which option is right. This is the metamerism case from *The Hard Problem is About Source*: an instrument *"cannot comment on the source"*, so one green reading may come from green, from yellow plus blue, from RGB, or from a scheme not yet discovered. A receptor binding event is the same shape: the reading is the same whether the ligand bound because the environment changed or because of a thermal fluctuation.

What an answer would look like, bound as an ordinary term (Formula step "Direction"): an answer is a **discriminator** = a procedure that, per event and per slot, returns a verdict "pays at the ground / does not pay", together with (i) a stated anchor, (ii) at least one independent second reading or a time comparison, (iii) a stated cost in both bits and actions, and (iv) a stated refuter. A bare mechanism name (for example "kinetic proofreading" or "a feed-forward loop") is not an answer in this sense: it is a candidate discriminator that still has to be checked against the ground.

---

## 1. Domain census (done before choosing any figure line)

### 1.1 R by arity, symmetry, scale

- **Arity:** at least two. A reading and its source are distinct; a single event is underdetermined. The question is a **union compound**, not one hard problem (Fig 9 :4-5). It bundles at least four conditions: transient versus sustained, intrinsic versus extrinsic fluctuation, this receptor versus another, this time scale versus another. A single lever will clear only the regions where one condition holds and leave the intersections standing (Fig 9 :54-58).
- **Symmetry:** the two options are not symmetric. A false positive (respond to noise) and a false negative (ignore signal) have different costs at the ground. The discriminating relation is a threshold comparison, not a symmetric join (Operators table :47-51).
- **Scale:** molecular events (micro), the cell's decision (meso), population and evolutionary settlement (macro). The question crosses the membrane twice (Fig 4).

### 1.2 One line per domain: actors / currency / anchor

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| D1 molecular sensing frame | receptors, ligands, second messengers, promoters, fluctuating copies | binding events, occupancy, concentrations | none inside the frame: a reading cannot name its own source | **no internal anchor**, so D1 alone is not yet a domain that can settle anything |
| D2 environmental ground / habitat | nutrients, toxins, gradients, temperature, other cells, predators | survival, growth, reproduction, what the response pays | the environment, which does not change its answer because of what the cell thinks | yes, Fig 2 :29 |
| D3 population / evolutionary frame | lineages, variants, selection between rooms | differential survival across variants | the ground, via selection, not via agreement among cells | yes, Fig 7 :35, Fig 11 :36 |
| D4 maintenance / channel seat | the apparatus that keeps the anchor reachable (receptor resetting, adaptation) | channel integrity | the ground, never agreement | yes, Fig 10 :24 |

D1 has no nameable internal anchor. It is a real frame, but it cannot decide the residual on its own. That is the first substantive result of the census: the decision must be exported to D2/D3, and the export must be a procedure, not a vote.

### 1.3 Partition or union

Union, not partition (Fig 9 :54-58; Fig 8 :45). The four conditions overlap: an event can be transient *and* extrinsic *and* at an unfamiliar receptor. A compound of this kind needs its own loop; it is not four easier questions in a list. The practical consequence is that "signal versus noise" must be split before it is searched, or any single mechanism will seem to fit.

### 1.4 Dependency order (Fig 3)

1. Perception: can the cell tell what is in front of it, *"and tell it apart from what was there before"* (Fig 3 :5). Without this, nothing downstream is assessable.
2. Vocabulary: terms for what the event affords (bind, block, metabolise, flee) (Fig 3 :7). The middle link, having terms for what a situation offers and being able to say what would count as progress, is where chains usually break (Fig 3 :24-27).
3. Objective: what would count as paying at the ground, stated in the cell's own terms.
4. Plan: a route under incomplete information (kinetic proofreading, temporal integration, independent channels).
5. Learn and carry: name what worked, verify it, carry it (Formula step 5), which in biology is selection across generations and the import of a new receptor.

A reading taken below a break is a reading of nothing (Fig 3 :22-23). So an experiment that measures downstream pathway activation while the perception link is broken tells us nothing about discrimination.

---

## 2. Figure census (grepped and quoted before concluding)

| figure | verbatim line | bearing |
|---|---|---|
| 1 The Agent | Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* | detection must be per receptor / per object, not a global mean |
| 2 The Ground | Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* | the environment is the anchor; internal consistency cannot decide |
| 3 Dependency Chain | Fig 3 :5 *"the system can tell what is in front of it, and tell it apart from what was there before"* | perception is temporal comparison, not a single snapshot |
| 4 The Membrane | Fig 4 :27 *"The transform between scales loses information, and that is the point."* | noise appears at the crossing, not as a substance in the molecule |
| 5 Mint Pipeline | Fig 5 :11 *"held: the model was right, nothing owed"*, Fig 5 :12 *"new: extend perception, aim the probe here"* | the four-way sort of a gap maps onto the four biological conditions |
| 6 Closure | Fig 6 :21 *"MINT composes inside the closure and can never add an atom."* Fig 6 :27 *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."* | no response is not proof of no signal; a new receptor is an import |
| 7 Room Chain | Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* | many cells agreeing is not evidence; selection is |
| 8 Union Surplus | Fig 8 :45 *"Two frames together reach what neither reaches alone."* Fig 8 :50 *"But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."* | two channels only help if they do not share the same fluctuation |
| 9 Leave / Arrive | Fig 9 :32 *"you get a kind of thing, never the answer itself"* | the framework returns a shape, not a molecular mechanism name |
| 10 Ground Maintainer | Fig 10 :24 *"the ground does not decay, the channel does"*, Fig 10 :25 *"stale percepts, dropped transients, saturated metrics, pooled readings"* | adaptation and desensitisation are channel failures, not a changed world |
| 11 The Habitat | Fig 11 :49 *"An actor's valence is relative to the residual, not a property it carries."* Fig 11 :43 *"The habitat is enumerated, never composed."* | the same molecule is signal or noise, friend or toxin, depending on the residual |
| 12 The Bond | Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :125 *"A composition costs in two currencies, and they do not add."* | signal and noise can share all atoms and differ only in relation; two prices |
| 13 Minimum Viable Set | Fig 13 :32 *"the detail a crossing discards reappears above it as noise."* | noise is the loss of a lossy transform between scales |
| Operators | Operators table :51 *"a goal is a comparison, which is why a vocabulary without it cannot state one"* | discrimination is a threshold comparison, not a list of ingredients |
| Symbols | Symbols table :43-44 *"One object, region or entity being tracked. R is measured per slot, never as a single global number."* | the unit of detection is the object slot |

Strained readings are named in §8, not smoothed over.

---

## 3. Findings F1 to F10

### F1: Detection is per slot, and the apparent strain with biological averaging dissolves on re-census

Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*
Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*
Symbols table :43-44 *"One object, region or entity being tracked. R is measured per slot, never as a single global number."*

**Strain test.** Real cells average over time, and over many receptor copies, to suppress noise. Read naively, this contradicts "never aggregated". Re-census: Fig 1 :28 distinguishes *per object* from *per step*. Averaging a receptor's occupancy over time is averaging per step, which the figure permits. Averaging across distinct objects (different receptor types, different microdomains, different ligands) into one global scalar is what destroys the where-to-look signal. Berg and Purcell 1977 derive the precision limit for exactly this: the cell must *"monitor continually the state of occupation of receptors distributed over its surface"* over a time T, and there is *"ample room for many independent systems of specific receptors"*. Time averaging and per-slot separation are both required; they are not the same operation.

**Verdict:** `specified`, triangulated (Fig 1 + Symbols table + Berg and Purcell, low overlap between a metatheory line and a 1977 biophysics derivation). A cell that collapses all receptor classes into one global concentration reading has thrown away the only signal that says where to look.

**Refuter:** show a cell that discriminates a novel ligand from a fluctuation using only one global scalar averaged over all receptor classes, with no per-class or per-time structure, and that this generalizes beyond the training condition.

### F2: Signal and noise are not different stuff. They are the same atoms under a different relation to the ground

Fig 13 :32 *"the detail a crossing discards reappears above it as noise."*
Fig 4 :27 *"The transform between scales loses information, and that is the point."*
Fig 11 :49 *"An actor's valence is relative to the residual, not a property it carries."*
Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

A ligand and a near-cognate ligand can be chemically almost identical (Hopfield 1974 opens with *"the maximum frequency at which a wrong but similar amino acid is inserted has been estimated at 1 in 10^4"*, so the discrimination problem is real at the molecular level). Under Fig 12, the two cases are isomers: same atoms, different bond, different substance. The bond here is the relation to the cell's residual and ground, not a covalent difference. The essay *The Hard Problem is About Source* gives the general case: the instrument *"is speaking only about what it measured, it cannot comment on the source."*

**Verdict:** `specified`, triangulated (Fig 13 + Fig 4 + Fig 12 + the source essay). "Noise" names what a crossing discards; it is a fact about the level and the transform, not a name for a kind of molecule. This is why "changing environments" matters: when the residual changes, valence flips with it (Fig 11 :49). There is no standing list of good molecules.

**Refuter:** demonstrate a molecule that carries "signal" as an intrinsic property independent of cell state, environment, and measurement level, such that every cell in every environment must treat it as a signal.

### F3: The anchor is the ground, and the sensing frame cannot correct itself

Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."*
Fig 9 :51 *"what the verifier may see: evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it"*

Inside D1 there is no anchor. A receptor configuration that is perfectly self-consistent can still be wrong. What settles the discrimination is what the response pays at D2/D3: growth, survival, reproduction. Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* A population of cells all making the same response is a room, not an anchor.

**Verdict:** `specified`, triangulated (Fig 2 + Fig 7 + Fig 11). The decision is export to the ground, never internal consistency.

**Refuter:** show a cell that reliably distinguishes a novel signal from noise with no contact, direct or ancestral, to a ground that would penalise the wrong response.

### F4: Independence between channels, and the common-cause collapse

Fig 2 :31 *"Independence, between two frames, is how little they draw on the same evidence."*
Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."*
Fig 8 :45 *"Two frames together reach what neither reaches alone."*
Fig 8 :50 *"But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."*

Two receptor systems that both read the same upstream fluctuation (common cause) are one evidence pool wearing two names (Fig 2 collapse 2). Their agreement is *"the pool talking, not two frames confirming each other"* (Fig 2 :20-21). Two systems that read the ligand through different physics (for example a binding-occupancy readout and a metabolic-flux readout) can corroborate. This is what Elowitz et al. 2002 exploited: two identically regulated genes in the same cell share extrinsic state, so their within-cell difference isolates intrinsic noise. That is an independence instrument, not a vote.

**Verdict:** `specified`, triangulated (Fig 2 + Fig 8 + Elowitz, low overlap). Independence is the parameter, not a caveat.

**Refuter:** show that a two-channel discriminator performs no better than a single channel even when the two channels are proven to draw on statistically independent fluctuations, across the full operating range.

### F5: Discrimination takes time and costs energy. The two currencies do not add

Fig 3 :5 *"the system can tell what is in front of it, and tell it apart from what was there before"*
Fig 12 :125 *"A composition costs in two currencies, and they do not add."*
Fig 12 :126 *"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"*
Fig 5 :45 *"This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."*

Hopfield 1974: specificity *"can be increased above the level available from free energy differences in intermediates or kinetic barriers by a process defined here as kinetic proofreading"*, and *"known reactions which otherwise appear to be useless or deleterious complications are seen to be essential to the proofreading function."* Boeger 2022 describes the mechanism as *"the insertion of a free energy–transmitting delay step between the initial recognition event and its downstream effect"*. Berg and Purcell 1977: *"Statistical fluctuations limit the precision with which a microorganism can, in a given time T, determine the concentration of a chemoattractant."* Thattai and van Oudenaarden 2001 report a direct tradeoff: *"During evolutionary adaptation, living systems have made tradeoffs between energy efficiency and noise reduction in choosing between these two alternatives."*

The figure-level claim is the shape of the tradeoff, not the identity of the pathway: a discriminator needs a delay or a memory (time), it pays in free energy (actions), and it pays in description length (bits). A system accounting only one currency will propose arrangements it cannot afford to test.

**Verdict:** `specified`, triangulated (Fig 3 + Fig 12 + three independent biology sources).

**Refuter:** exhibit a discriminator with zero delay, zero energy dissipation above equilibrium, and zero additional description length that still achieves arbitrary specificity for near-cognate ligands.

### F6: The channel decays, not the ground

Fig 10 :24 *"the ground does not decay, the channel does"*
Fig 10 :25 *"stale percepts, dropped transients, saturated metrics, pooled readings"*
Fig 10 :27 *"you have lost touch"*
Fig 11 :39 *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."*

Receptor desensitisation, adaptation drift, and saturation are failures of the channel. The environment did not stop presenting the ligand. The biological literature is explicit that precision is limited by low copy number (*"low intracellular copy numbers of molecules can fundamentally limit the precision of gene regulation"*, Elowitz et al. 2002) and that networks are *"intrinsically noisy"* (Thattai and van Oudenaarden 2001). The maintenance move (reset the receptor, keep the anchor reachable) is a seat's office, not part of the loop; `THE_FORMULA.md` step 8 says *"Nothing here maintains the ground. The ground does not decay; the channel does, and that is a seat's office, not the loop's."*

**Verdict:** `specified`, triangulated (Fig 10 + Fig 11 + three biology sources).

**Refuter:** show a receptor system whose loss of discrimination is caused entirely by a change in the environment that is independent of the receptor's own state, with the channel demonstrably unchanged.

### F7: "Is it signal or noise?" must be split, not searched

Fig 9 :4-5 *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*
Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."*
Fig 9 :32 *"you get a kind of thing, never the answer itself"*

The bundled question contains at least: intrinsic versus extrinsic noise (Elowitz et al. 2002 and Swain et al. 2002 give the split and an instrument for it), transient versus sustained input (Mangan and Alon 2003: coherent feed-forward loops act as *"sign-sensitive delays"* and incoherent ones as *"sign-sensitive accelerators"*; Alon 2007: coherent loops show *"persistence detection"*), instantaneous readout versus trajectory (Tostevin and ten Wolde 2010: *"the same network can have radically different characteristics for the transmission of instantaneous signals and trajectories"*). Each has its own loop and its own ground. Optimising one at a single level can make the whole worse: *"optimizing signal transmission at a single level of a signaling cascade can reduce signaling performance for the cascade as a whole"* (Tostevin and ten Wolde 2010).

**Verdict:** `specified`, triangulated across four fields. The question as posed is a union; the answer is a family of discriminators, not one mechanism.

**Refuter:** show that all four conditions collapse to one metric with identical optimum for every cell type and every environment, such that no split changes the prediction.

### F8: No response is not proof of no signal, and a new receptor is an import

Fig 6 :21 *"MINT composes inside the closure and can never add an atom."*
Fig 6 :27 *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*
Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*
Fig 8 :53 *"Residual first, frame second."*

From inside the cell, "we never respond to X" cannot distinguish "we lack a receptor for X" (genuine absence, needs an import across generations) from "X is present but below the resolution of our current receptors" (depth, needs a better instrument). Fig 8 :53 requires describing the residual in effect terms before picking the frame; naming a pathway first makes any pathway seem to fit. A new receptor type is a new atom, which composition inside the existing closure cannot supply (Fig 6 :21). It arrives by evolution or by horizontal transfer, both of which are imports with a source gate and a shadow test.

**Verdict:** `general` (underivable versus unreachable), `specified` (the cell cannot certify its own completeness), single-source for the inward/outward instrument split, triangulated with Fig 8 for the no-proof-of-absence claim.

**Refuter:** show a cell that derives, from inside its existing receptor set alone, a receptor with a genuinely new binding specificity, with no import and no mutation, and that this closes a residual the old set could not represent.

### F9: A vocabulary with no refusal can only accumulate

Operators table :58 *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*
Fig 12 :140 *"A vocabulary that cannot refuse can only accumulate."*

A cell that can only add responses and never refuse a previously held classification will accumulate wrong commitments. In molecular terms, refusal is the deactivation or the active correction of a response after the signal is gone (a phosphatase, a degrading step, a checkpoint that says "that was noise"). Note: this is not the subtraction bond `−`, which is the absence of an operand; it is negation `¬`, the refusal of a claim (Operators table :73-74). A network built only of additions and subtractions can remove a molecule and cannot say that an interpretation was wrong.

**Verdict:** `general`, single-source (Operators table and Fig 12 amendment share an evidence pool with the figures).

**Refuter:** exhibit a signalling network that correctly refuses a previously committed classification using only additive and subtractive bonds, with no unary refusal equivalent at any level.

### F10: The framework returns a shape, not a molecular mechanism name

Fig 9 :32 *"you get a kind of thing, never the answer itself"*
Fig 5 :32 *"then check it against the ground, then carry it up"*
Fig 13 :134 *"Unreachable is a verdict here, not a silence"*

The canonical usage rule (*FIGURES_README_canonical.md*) says the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* So the honest output of this derivation is the set of constraints any discriminator must satisfy (F1 to F9), plus the explicit admission that the figures do not name the discriminator. Naming kinetic proofreading or a feed-forward loop is a provenanced binding from the biology frame onto a figure-derived shape, not a figure result.

**Verdict:** `general`, triangulated (Fig 9 + canonical README + Fig 5).

**Refuter:** produce a verbatim figure line that names a specific molecular mechanism for distinguishing signal from noise. There is none; if one is found, F10 is withdrawn.

---

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A cell reliably discriminates a novel signal from a fluctuation from a single instantaneous reading of a single receptor, with no time comparison, no second channel, and no ancestral or present contact with a ground that would penalise the wrong response.
2. "Signal" and "noise" are shown to be intrinsic properties of molecules, independent of cell state, environment, and measurement level.
3. The environment's answer to the cell's response is shown to be moved entirely by the cell's internal model, with no independent component at the ground. (If the cell genuinely constructs its niche, this is not a refutation of the figures but a re-census: a new domain with an updating habitat, Fig 11 :73 *"The habitat is not the ground."*)
4. A cell is shown to certify from inside its own receptor set that it holds every receptor it will ever need.
5. A discriminator is exhibited with zero delay, zero dissipation, and zero extra description length that achieves arbitrary specificity.

If any of 1, 2, 4, or 5 fires, the shape is wrong and the claim is withdrawn. If 3 fires, the census is redone with a coupled habitat. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. Send the shape and the pre-registered refuter first, not a mechanism name (Fig 10 :52 *"Bring a characterised residual, never the source."*).
2. Ask the checker what they would count as a failure of F1 to F8, and record that verdict before showing the framework (Fig 2 :45; `08_expert_verification_packet.md`).
3. Treat candidate mechanisms (proofreading, feed-forward loops, receptor arrays, intrinsic/extrinsic separation) as provenanced imports from the biology frame, each with a source gate and a shadow test (Fig 8 :50-52).
4. Split the bundled question before searching: transient versus sustained, intrinsic versus extrinsic, instantaneous versus trajectory (Fig 9 :4-5, :54).
5. Do not pool agreement from readers selected for receptiveness (Fig 2 :40; Fig 7 :35). A failure is more useful than an endorsement.

---

## 6. Canonical usage check

Two local canonical sources govern how the figures may be used, read after the first five sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"* and the limit: *"what a missing thing would have to look like (a shape, not a name)"*.
- `THE_FORMULA.md` step 7: *"Describe it before you go looking, or any frame you pick will seem to fit"*, and the mode rule quoted at the top.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| F1 seemed to contradict temporal averaging in cells | **Retracted as a strain.** Re-census on Fig 1 :28 (per object, not per step): time averaging is allowed, object aggregation is not. Berg and Purcell corroborate. |
| "the figures give the mechanism of signal discrimination" | **Never claimed, now explicit as F10.** The figures give a shape; the mechanism is a `gap` at figure level. |
| "valence is carried by the ligand" | **Refused (F2).** Fig 11 :49 makes valence relative to the residual. |
| F6 "the ground decays" | **Refused.** Fig 10 :24 says the opposite; the channel decays. |
| "more receptor types is always better" | **Refused.** Fig 2 :42 and Thattai's energy/noise tradeoff price it; more channels buy independence only if they are independent. |
| "adapting to a changing environment means the anchor no longer exists" | **Narrowed.** A ground that moves independently of the frame is still an anchor (Fig 2 :29). Only when the cell moves the ground does a coupled habitat have to be censused as a new domain (Fig 11 :73). |
| simulation status | **Confirmed.** The recursive self-improvement essay forbids treating this derivation as a ground reading. |

---

## 7. Strains and re-census

- **Fig 1 per-slot rule versus biological time averaging.** Dissolved by re-census on Fig 1 :28 (per object versus per step). Not a strain after re-census.
- **Ground independence versus "changing environments".** Named as a live fork, not hidden. For a ground that changes independently of the cell, F1 to F9 hold unchanged. For niche-constructing cells, the habitat updates and must be added as a fifth domain with its own loop; the verdict for D1 to D4 is unchanged, the verdict for the coupled system is a `gap` until that loop is run.
- **Two currencies in Fig 12 versus a single fitness currency in D2.** Not a strain: Fig 12 prices description and actions; D2 settles which combination pays. Different quantities, matched by the re-census rule in the README.
- **Fig 8 independence versus shared evolutionary origin of receptor families.** Live and priced: two paralogous receptors may share atoms by convergence or by descent, and only the record separates them (Fig 8 :50-52). A corruption of independence here weakens F4, it does not flip it.

After re-census: two live forks (changing-ground coupling, receptor-family independence), both named, none hidden.

---

## 8. Updated verdict

The shape survives; the mechanism is not named by the figures.

- **D1 molecular sensing:** triangulated on per-slot, time-comparison, independence, and two-currency price. `specified`.
- **D2 environmental ground:** triangulated on the anchor being what pays and on valence being relative to the residual. `specified`, with a named fork for a coupled habitat.
- **D3 population / evolution:** triangulated on selection between rooms being the only thing that settles which discriminator persists. `specified`.
- **D4 maintenance:** single-source for the exact channel-anchor split (Fig 10), corroborated by receptor-adaptation biology. `specified`.
- **Mechanism domain:** `gap` at figure level. The world sources supply candidates, none of which the figures endorse or deny. The verdict is a set of constraints plus refuters, not a pathway name.

No part of this is `grounded`. The honest stop is the limit of what the figures and the instruments in the ledger can distinguish, with the lineage recorded.
