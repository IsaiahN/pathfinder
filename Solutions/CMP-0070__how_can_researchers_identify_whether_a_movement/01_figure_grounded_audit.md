# Figure-grounded audit: coordination threshold versus visibility and reporting

**Mode of this document: `specified` on the method shape, `general` on the structural limits, `gap` on the name of the instrument for a particular movement.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From the framework essay *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This audit is a simulated derivation checked for internal consistency against the verbatim figure text. It cannot settle the question it reports on. No measurement, dataset, or movement was examined.

**Figure source.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened every session. Every quoted string below is copied from that file and cited as `Fig N :line`. Quotes are not taken from the canonical README summary or from another solution folder.

---

## 0. The residual, stated in effect terms

**The observation to be explained.** For a movement M, a set of slots s (locales, organisations, time windows, data sources), and a time index t, an observed series o'(s,t) of "apparent movement activity" (news mentions, hashtag volume, protest event counts, reported membership, street presence) shows a break at time T. A change-point detector can find T. It cannot say what produced it. Fig 9 :26-28 says *"describe it before you go looking, or any frame you pick will seem to fit"*, and Fig 9 :30-31 adds *"your words are borrowed too, so describe the effect rather than the cause."*

**The two candidate producers, in effect terms.**

- **H_coord (ground change).** The number of actors who actually coordinate (show up, commit resources, synchronise action, maintain an organisation) crossed a threshold. The change would persist in a record that does not depend on anyone deciding to report it.
- **H_vis (channel change).** The ground did not cross any threshold. What crossed a threshold was the observation channel: news attention, a platform ranking change, a coding-rule change, a dataset's coverage, a coder's attention, or the launch of a new outlet. The same underlying activity became more visible or more recorded.
- **H_mix (union compound).** Both moved, with a lag or a feedback between them. This is not "a harder case of either." Fig 9 :57: *"a case in two conditions is not a harder case of either."* Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

**The residual R.** Per slot s, R_s = |Γ(b,a) - o'(s,t)|, the gap between the model's prediction and the observation at the break. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." The question is therefore not "did the movement tip" (one global number) but "in which slots did the ground move, in which did the channel move, and which condition binds where." A global "the movement turned" average is the exact error Fig 1 :28 names: "A system that averages across objects has thrown away the only signal that says where to look."

**What an answer would look like, bound as an ordinary term (Formula step "Direction").** The sought-for shape is a *discriminator*: a procedure that returns, per slot, one of {ground crossed, channel changed, both, undecidable at this instrument}, together with a non-updating anchor and a second frame whose evidence pool does not overlap the reporting channel. Binding this shape now, before the run, makes it refusable by the same test as anything else (Fig 5 :65-66: "Write down what an answer would look like, bind it, and let it accrue a residual like anything else."). Without this binding the preference would be invisible to every check in the pipeline (Fig 5 :62-64).

**Trial conclusion, stated now so it can be refuted rather than smuggled in.** The figures can fix the *shape* of the discriminator but cannot name the *specific indicator* for a given movement. The method shape is `specified` and triangulated. The instrument name is a declared `gap` of the shape-not-a-name kind, not an omission (Fig 9 :32: "you get a kind of thing, never the answer itself"; Fig 13 :134: "Unreachable is a verdict here, not a silence,").

---

## 1. Domain census, before choosing any figure line

### 1.1 R by arity, symmetry, scale

| property | reading | consequence |
|---|---|---|
| arity | at least two producing conditions (ground, channel), plus a mixed compound | **union**, not one dial with an optimum. Fig 9 :54-57 governs |
| symmetry | asymmetric under the available instruments. The visible series is a product of ground and channel, so exchanging them changes what is observable. The comparison between two readings is ordered, not a symmetric join | one reading cannot be swapped for another as if they were the same witness; the second frame must differ in kind, not just in label |
| scale | first order inside one channel (a break in one series); second order at the union of two channels (ground versus channel); a feedback loop can make it third order (the movement changes the reporting that changes the movement) | settle the first-order reading before comparing channels; Fig 12 :103 and :104 govern the recursion |

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if a nameable anchor exists. Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."

| domain | actors | currency | anchor (nameable, non-updating) |
|---|---|---|---|
| **D1, the coordination ground** | participants, local groups, organisations, coordinators | actual coordinated acts, commitments, resources, maintained roles | an independent record of presence or commitment that does not move when media attention moves: on-site counts, rosters, meeting records, participant-run logs, administrative records |
| **D2, the visibility and reporting channel** | outlets, platform ranking systems, dataset builders, coders, archive coverage | mentions, coverage volume, coding categories, sampling rules | a process log of instrument changes: an algorithm-change notice, a dataset version, a coder-retraining record, an outlet launch date. This is an anchor for *when the instrument changed*, not for what the movement did |
| **D3, the inference and verification frame** | researchers, reviewers, outside frames | residuals and independent agreement | the ground, never agreement. Fig 2 :45: "Frames range against the ground. They do not negotiate with it." |
| **D4, the mixed compound** | both of the above, with their lag or feedback | the residual that survives one lever | a slot-level record of which condition still binds after the other is removed; Fig 9 :55-56 says a single lever leaves the intersections standing |

Domains that failed the anchor test and were **not** admitted:

- "Public sentiment" inferred from the same posts that show the break. It updates on the reporting channel, so by Fig 2 :30 it is not an anchor.
- "Number of protest events" counted from news archives. It is a product of the channel under test, so it is a frame, not the ground.
- "Expert consensus that the movement tipped." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

### 1.3 Partition or union

This is a **union**, not a partition. A slot can be in both conditions (the ground did change and the reporting also changed), and the two conditions can be causally coupled. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :56: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Therefore one lever, for example a change-point test on a single series, cannot close the question. It finds T in both H_coord and H_vis.

### 1.4 Dependency order (Fig 3)

Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."

1. **Perception.** Can the system tell a ground reading apart from a channel reading, and tell each apart from what was there before? Fig 3 :5: "the system can tell what is in front of it, and tell it apart from what was there before." This is the link most likely to be broken in movement research, because the standard data are themselves reporting data.
2. **Vocabulary.** Are there terms for what the channels afford: what can be counted, what can be logged, what can be cross-checked? Fig 3 :7: "it has terms for what things afford: what can be moved, opened, joined, blocked."
3. **Objective.** Can be stated, in the system's own terms, what would count as progress here: a per-slot verdict with a non-updating anchor. Fig 3 :10: "it can say what would count as progress here, in its own terms."
4. **Planning.** Design the two-frame test and the pre-registered refuter.
5. **Learn and carry.** Record lineage, dates, and which condition bound in each slot.

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." If link 1 is missing, applying sophisticated change-point machinery at link 4 is a reading below the break. Fig 3 :22-23: "A step whose input never arrives cannot be diagnosed, only its predecessor can. Which is why a reading taken below the break is not a weak reading. It is a reading of nothing."

---

## 2. Figure census (bearing and verdict before findings)

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | residual per slot; frame-internal quantities disqualified | method: never aggregate the movement into one number; visibility counts are frame-internal |
| **2 The Ground** | anchor must not update; independence; two collapse modes | decisive: a break in one series can be coherent drift or a hidden shared source, not a threshold |
| **3 Dependency Chain** | most likely break is the perception link | method: establish a non-reporting instrument before optimising the detector |
| **4 The Membrane** | only methods cross up; round trip gap R_T | the discriminator is a method; a recorded conclusion from another movement is a description of one occasion |
| **5 Mint Pipeline** | four kinds of gap plus refuted; shape as an ordinary term | a channel-only break belongs to "mis-attached: refit what you have, do not invent" |
| **6 Closure / Reachability** | import moves the wall; instruments improved from worse ones already returning | an anchor cannot be specified from a description; find one already returning a reading |
| **7 Room Chain** | agreement compounds, evidence does not | many reports of the same tipping are one room, not corroboration |
| **8 Union Surplus** | low overlap for surplus; residual first, frame second | a second frame drawn from the same reporting pool adds no surplus |
| **9 Leave / Arrive** | union versus partition; describe the residual first; narrowing gets close, ground decides | the question is a union; the figures return a kind of discriminator, not a dataset name |
| **10 Ground Maintainer** | ground does not decay, channel does; keep the anchor reachable; bring the residual, not the source | decisive: the observed break may be channel decay or saturation, not a ground change |
| **11 The Habitat** | enumerate the habitat; contact cascades; introduce, never subtract | enumerate reporting conditions outward, including second and third order effects |
| **12 The Bond** | same atoms, different bond, different substance; two currencies | two identical-looking breaks can be isomers; bits and actions do not add |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict | the specific instrument name is a `gap`, not silence |
| **Operators table** | comparison ⋛ is a threshold relation; negation closes refutation | the discriminator compares two quantities and must be able to refuse a held reading |
| **Symbols table** | R is the aim and always a slice; ground is the anchor | what cannot be perceived yet is residual and "simply cannot be read" |

Strained readings are named in section 7, not smoothed over.

---

## 3. Findings, each with verbatim figure text and a refuter

### F1 - A break in one series cannot settle its source (decisive, triangulated)

Fig 10 :24: "the ground does not decay, the channel does"

Fig 10 :25: "stale percepts, dropped transients, saturated metrics, pooled readings"

Fig 10 :27-28: "the output is not a verdict, it is" / "→ keep the anchor reachable"

The exact ambiguity in the question is named by the figure. An apparent turning point in a reporting series can be produced by the ground changing, or by the channel losing contact (a saturated metric, a dropped transient, a pooled reading). These are the same observation R at the level of one reading. Fig 2 :29 requires an anchor that does not change its answer because of what any frame thinks. If the only evidence is the reporting series, the anchor has been replaced by a frame.

Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

That is the movement-specific failure: media attention and mobilisation can update on each other. A visible "tipping" can be coherent drift, which by the figure is precisely the case nobody notices.

- **Mode:** `general` structural claim, `specified` prediction that single-series analysis will be ambiguous.
- **Triangulation:** Fig 10 (channel decay) and Fig 2 (anchor must not update, two collapse modes) are two different figures with low conceptual overlap. `triangulated`.
- **Refuter:** exhibit a case where a single reporting series, with no external anchor and no second frame, uniquely determines whether the ground or the channel changed. Under the figures this is impossible, so any such claim must be examined for a hidden anchor.

### F2 - The second frame must have low overlap with the reporting pool (decisive, triangulated)

Fig 2 :31: "Two people reading the same report are not two frames; two instruments pointed at the same thing are."

Fig 2 :32: "Independence is what makes agreement mean something."

Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"

Ten news datasets, five hashtag archives, and three commentator narratives are one witness with many names. They all draw on the same reporting process, which is the process under suspicion. Fig 8 :48-49: "Two frames that overlap almost completely are one frame wearing two names."

Fig 8 :51-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."

So the second frame must be an instrument on a different closure: a count of actual presence, an organisational record, an administrative series, an on-site observation protocol. Its agreement with the reporting series is meaningful only if it does not read the reporting series.

Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

- **Mode:** `general` rule, `specified` requirement that the second instrument be named and its evidence pool declared.
- **Triangulation:** Fig 2 (collapses, independence) plus Fig 8 (union surplus, one frame wearing two names). `triangulated`.
- **Refuter:** show two frames with measured low overlap that both range against the ground and still cannot discriminate ground from channel. Or show that the proposed second instrument is itself produced by the reporting system, in which case the verdict is withdrawn as single-source.

### F3 - The residual must be kept per slot, not averaged (method, single-source for the figure line)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

A real coordination threshold is expected to appear unevenly: some locales and organisations cross first, others later, some never. A reporting change is expected to appear as a simultaneous step in the reporting channel across slots, because the instrument changed at once. This empirical expectation is a `specified` prediction, not a figure law; the figures supply the per-slot discipline and the expectation must be checked at the ground.

Fig 1 :13: "a global R near zero with one live slot residual is a legal state."

So a movement-wide average that looks flat can coexist with a live threshold in one locale. Reporting the global average as "no tipping" commits the exact error the figure names.

- **Mode:** `general` discipline, `specified` signature to be tested.
- **Status:** `single-source` for the per-slot rule (Fig 1 only); the empirical signature is unmeasured.
- **Refuter:** show that coordination thresholds in the domain are genuinely global and simultaneous at every slot, such that per-slot reporting carries no more information than the mean. Then the per-slot requirement is unnecessary for this domain.

### F4 - The two collapse modes give two distinct false-positive signatures (triangulated)

Fig 2 names two ways a design destroys correction: "collapse 1: mutual update (coherent drift)" and "collapse 2: common cause (hidden shared source)".

- **Mutual update.** Coverage of the movement increases participation, and increased participation increases coverage. The series tips without either the ground or the channel being independent. Fig 2 :13-15 describes the result: "no anchor; each updates on the others / they converge, and what they converge on / is whoever had the most influence."
- **Common cause.** A third event, for example a platform policy change, an election, or a legal ruling, changes both coverage and participation. Fig 2 :18-21: "one evidence pool / they never talk, and still agree / so the agreement is the pool talking, / not two frames confirming each other."

Fig 2 :33: "The anchor must not update."

Both collapse modes are ruled out by the same instrument: a record whose value is not a function of the other two. The distinction between the modes matters for the remedy. Mutual update requires breaking the feedback at the anchor; common cause requires naming the third variable. Fig 11 :52-53: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

- **Mode:** `specified`.
- **Status:** `triangulated` between Fig 2 (collapse modes) and Fig 11 (contact cascades).
- **Refuter:** show a break produced by mutual update or a hidden shared source that survives a genuinely non-updating anchor and a second low-overlap frame. Then these signatures are incomplete.

### F5 - Residual first, frame second, and describe the effect not the cause (method, single-source)

Fig 9 :53: "Nobody chooses. The gap does, and the gap is only as good as its description."

Fig 9 :26: "R's own predicates name the habitat that holds φ*"

Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit"

Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause"

Applied here: before deciding that "Twitter data" or "protest event counts" is the right frame, write down the effect that a coordination threshold would produce in non-reporting terms (a sustained change in independently recorded presence, a change in the diffusion order across slots, a change in maintained organisational capacity). Then find the frame whose closure predicts that effect. Picking the favourite dataset first is the inversion the figure forbids.

Fig 8 :53: "Residual first, frame second."

- **Mode:** `general` procedure.
- **Status:** `single-source` for the figure line (Fig 9 and Fig 8 agree, but share the same framework evidence pool; counted as one witness with two citations).
- **Refuter:** show a research practice where choosing the frame first does not produce a fit to any residual because the residual is already fully characterised by a non-updating anchor. Then the inversion is harmless in that domain.

### F6 - A channel-only break is "mis-attached", not a new mechanism (single-source)

Fig 5 :11: "held: the model was right, nothing owed"

Fig 5 :12: "new: extend perception, aim the probe here"

Fig 5 :13: "mis-attached: refit what you have, do not invent"

Fig 5 :14: "mechanism broken: a new term is owed"

If the break is visibility or reporting, the gap is not a new coordination mechanism. It is a mis-attachment of an existing model to a changed channel. The correct move is to refit the observation model (update the coverage parameter, the coding rule, the platform-change covariate), not to mint a theory of a new mobilisation phase. Fig 5 :41: "Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."

Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."

An increase in published "tipping point" papers is not evidence that tipping points were found.

- **Mode:** `specified`.
- **Status:** `single-source` (Fig 5).
- **Refuter:** show a case where a channel change genuinely requires a new coordination mechanism in the framework sense, with the three mint guards passed and the term settled at the ground. Then the mis-attached classification is incomplete.

### F7 - An anchor cannot be specified from a description; find one already returning something (single-source)

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

Fig 6 :33: "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."

Fig 6 :34-35: "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."

This is why the answer cannot be "invent a perfect ground measure." The usable anchor is something already returning a reading: an existing administrative series, an existing on-site count protocol, an existing organisational roster. Fig 6 :29-30 distinguishes the two routes: "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms." / "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."

- **Mode:** `general` instrument rule, `specified` requirement to cite an existing proto-instrument.
- **Status:** `single-source` (Fig 6).
- **Refuter:** exhibit an instrument built from a pure description with no prior reading, and show it returned a discrimination. Then the "already returning something" condition is too strong.

### F8 - The habitat must be enumerated outward, including second-order reporting effects (single-source)

Fig 11 :43: "The habitat is enumerated, never composed."

Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

For this question the habitat includes not only the movement and the outlets but the platform's ranking changes, the dataset's sampling rules, the coder's guidelines, the funding and legal conditions on reporting, and the feedback from coverage to participation. Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." A news outlet is not intrinsically a confounder or a witness; its valence depends on which residual is being tracked and whether it updates on it.

Fig 11 :61: "The seat's power is asymmetric. Introduction is available; exclusion is not." A researcher can add a channel to the study; they cannot subtract the reporting habitat from the world. So the discipline is enumeration plus provenance, not experimental removal.

- **Mode:** `general`.
- **Status:** `single-source` (Fig 11).
- **Refuter:** show a discrimination that works while the reporting habitat is scoping-bound to direct contact only, and that survives a documented third-order effect. Then the outward enumeration requirement is unnecessary for this domain.

### F9 - Two breaks with the same ingredients are isomers; the bond carries the verdict (single-source for the figure line)

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

Fig 12 :94: "The arrangement is the substance."

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

A break at time T in a reporting series and a break at time T in a coordination record have the same "ingredient" (a step change). They are different substances because the producing bond differs: ground change versus channel change. A model that records only the step has recorded half of itself.

Fig 12 :125-126: "A composition costs in two currencies, and they do not add." / "Bits price the description. Actions price finding out whether it holds." The cost of writing a coordination model (bits) and the cost of fielding the independent instrument (actions) are different units. Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it."

- **Mode:** `specified` structural analogy, not a claim about chemical or social identity.
- **Status:** `single-source` (Fig 12).
- **Refuter:** show that once the step is recorded, the producing bond is recoverable from the record alone without lineage. Then the isomer reading adds nothing here.

### F10 - The figures return a shape, not the name of an instrument (gap, canonically confirmed)

Fig 9 :32: "you get a kind of thing, never the answer itself"

Fig 13 :132: "The first is provenance: how did this come to be, and from what. The second is decidability: given the library as it stands, could this have been reached at all."

Fig 13 :138-139: "and it can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again."

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

The canonical figures README states the limit as "what a missing thing would have to look like (a shape, not a name)" and adds "Indiscernibility is not identity." Therefore:

- **Declared `gap`.** Which specific indicator is the non-updating anchor for movement M cannot be derived from the figures. It must be read off the habitat (Fig 11 :48) and provenanced as a binding from another frame (Fig 6 :23).
- This is a **shape-not-a-name gap**, not an unreachable-in-principle gap and not an unreachable-at-this-budget gap. The method shape is reachable; the particular name is out of scope by design.
- **Mode:** `general` limit.
- **Status:** `triangulated` between Fig 9 and the canonical README (low overlap between a figure line and the canonical usage rule, though both belong to the framework evidence pool).
- **Refuter:** derive a specific universal anchor for all movements from the six-term set without importing from any empirical frame. Under Fig 6 :21, "MINT composes inside the closure and can never add an atom," this cannot be done.

### F11 - Prestige and agreement are not the anchor (structural, triangulated)

Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

Fig 2 :41: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"

A survey of researchers who already agree that the movement tipped is a convention, not a verdict. The outreach artifacts in this folder therefore select for ground contact and opt-in channels, never for likely agreement. Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." A researcher who studies the movement has an interest in the outcome; that is allowed and must be declared. A researcher selected because they will confirm the tipping reading has an interest in the reading; that is disqualifying.

- **Mode:** `general`.
- **Status:** `triangulated` (Fig 2, Fig 7, Fig 10, three distinct figures).
- **Refuter:** show a case where agreement among frames that share the evidence pool increased the probability of a correct ground verdict. Then the independence rule needs qualification.

### F12 - Mode discipline: a discriminator design is not a verdict about a movement (structural)

Fig 5 :69: "AMENDMENT · settling is necessary for a term to be composed over, and it is not sufficient."

Fig 5 :70: "A term is settled when the ground pays for it."

Fig 9 :42: "narrowing gets you close, the ground decides"

Nothing in this folder has been paid for by a ground reading of any movement. Every claim about what a researcher *should* do is a `specified` design claim derived from the figures. Every claim about what a particular movement *did* is out of scope. The mode rule is stated in `THE_FORMULA.md` and repeated here so the distinction is not lost in outreach.

- **Mode:** `general`.
- **Status:** `triangulated` (Fig 5, Fig 9, THE_FORMULA mode rule).
- **Refuter:** exhibit a ground reading that settles one of the design claims without importing a term from outside the figures. Then that claim moves to `grounded`.

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the design discipline: "a falsifier written before the run is a design instrument." The shape claim is refuted if any of the following holds:

1. A single reporting series, with no external anchor and no low-overlap second frame, uniquely determines whether the ground or the channel changed.
2. Two instruments that both draw on the same reporting pool are shown to provide independent corroboration of a ground change (breaks Fig 2 :31-32 and :40).
3. A movement break is found whose producing bond is recoverable from the step alone, with no lineage and no habitat enumeration (breaks Fig 12 :5, :94).
4. A channel-only break is found that genuinely requires a new coordination mechanism with all three mint guards passed and settlement at the ground (breaks Fig 5 :13).
5. An anchor is derived for all movements purely from the six-term set with no empirical import (breaks Fig 6 :21).
6. A ground reading of a particular movement settles the discriminating instrument claim, moving it from `specified` to `grounded` (in which case this folder is superseded, not merely corrected).

If any fires, the corresponding finding is withdrawn and the census is rerun from the residual line. The refuter is repeated in `08_expert_verification_packet.md` and `09_watson_answer.md` so a checker sees it before any conclusion.

---

## 5. Recommendation

1. **Split before searching.** Treat the question as a union of ground change, channel change, and their compound (Fig 9 :54-57). Do not fit one change-point model to one series and call it a tipping point.
2. **Bind the sought-for shape now.** Write down, before data collection, what a coordination threshold would look like in non-reporting terms and what a reporting change would look like in instrument logs (Fig 5 :65-66).
3. **Secure a non-updating anchor per slot.** Use a record already returning a reading, and record why it does not update on the reporting channel (Fig 2 :29-30; Fig 6 :32-35).
4. **Add one genuinely low-overlap frame.** Declare its evidence pool. If it reads the same reports, it is not a second frame (Fig 2 :31-32; Fig 8 :48-49).
5. **Enumerate the habitat outward.** Include platform rules, dataset versions, coding changes, and the feedback from coverage to participation (Fig 11 :43-48, :52-53).
6. **Refit before minting.** If the break disappears when the instrument-change covariate is added, it was mis-attached (Fig 5 :13).
7. **Keep verdicts per slot and separate.** Never average ground and channel verdicts into one "the movement did or did not tip" number (Fig 1 :19, :22).
8. **Send the generator, not the recording.** Fig 4 :22: "Only methods cross up. Only head starts come down." The two-stage offer in `02_outreach_email.md` leads with the method and its refuter.

---

## 6. Canonical usage check and retraction / confirmation log

Two local canonical files were read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`. They govern how the figures may be used. The README says the figures "outrank everything else in the repo" and that "the quotes are the authority, not this summary." It also says a reading that makes figures contradict one another has misidentified its domain, and that the framework returns "a shape, not a name" then stops at the limit of the instruments and records the lineage so the stop is honest. "Indiscernibility is not identity."

| earlier move | status after the canonical check |
|---|---|
| "Question is a union" | **Canonically confirmed.** Fig 9 :54-57 gives the union/partition split directly; no strain. |
| "The figures decide the method shape" | **Canonically confirmed.** The README describes the framework as a generator of the shape of an answer and a barrier theorem that narrows without needing the answer in advance. |
| "Instrument name is a gap" | **Canonically confirmed and narrowed.** "Shape, not a name" governs a missing primitive or instrument, not the naming of things already held. The gap here is of the instrument-name kind and is owed to the habitat, not a claim that nothing can ever be named. |
| Initial temptation to call H_vis a "refuted" bin | **Retracted before publication.** Refutation is the fifth kind of gap (Fig 5 :53) and applies to a term held to be false. H_vis is a competing producer of the same observation, so it is the mis-attached bin (Fig 5 :13), not a refusal. Kept visible here as a correction. |
| Initial temptation to average the two verdicts | **Retracted before publication.** Fig 1 :19 and :22 forbid aggregation of the residual; averaging would discard the only signal that says where to look. |
| Apparent strain Fig 10 (channel decays) versus Fig 2 (anchor must not update) | **Not strained after re-census.** Fig 10 governs what happens to a channel; Fig 2 governs the required property of an anchor. Different objects, same design consequence. |
| Apparent strain Fig 9 :32 (shape not a name) versus naming an anchor at all | **Not strained after re-census.** The figures constrain the anchor's *properties* (non-updating, low overlap, per slot) and do not supply its name. Naming a particular record is a provenanced binding from the habitat, not an invented primitive. |

### Triangulation summary

- **Ground-versus-channel ambiguity:** `triangulated` (Fig 10 :24-28 and Fig 2 :29-34, :40, low overlap between the channel-decay claim and the anchor/independence claim).
- **Independence requirement:** `triangulated` (Fig 2 :31-32, :40 and Fig 8 :48-52).
- **Per-slot residual:** `single-source` (Fig 1).
- **Union split:** `single-source` at the figure level (Fig 9 :54-57), corroborated by the canonical README's barrier-theorem reading.
- **Shape-not-a-name gap:** `triangulated` (Fig 9 :32 and the canonical README).
- **Instrument name for M:** `gap`, declared, not silent.

---

## 7. Gaps and strains, kept visible

**Gaps.**

- **G1, instrument name.** Which specific record is the non-updating anchor for a given movement is not derivable. Shape-not-a-name kind. Owed: an import from the habitat with a source gate and a shadow test (Fig 6 :23-24).
- **G2, numeric threshold.** No figure returns a threshold value, a lag length, or a required number of independent frames. These are budget and design parameters, not verdicts (Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").
- **G3, settlement.** Whether any actual movement's break was ground or channel is unsettled here. This folder contains no measurement, so all such verdicts remain `candidate`.

**Strains, named and re-censused or left live.**

- **S1.** A reporting series can be both the instrument under suspicion and the only available "ground" record in a dataset. Re-census: it is a frame, not an anchor, until a non-updating record is found. Strain dissolved by Fig 2 :29-30.
- **S2.** Feedback from coverage to participation makes the two conditions causally coupled, so a strict partition is impossible. Dissolved by the union reading (Fig 9 :54-57).
- **S3.** "Refit versus mint" depends on whether a coverage change is a parameter change or a mechanism change. Left live and narrowed: the three guards and ground settlement decide, not the researcher's preference (Fig 5 :33, :41, :70).
- **S4.** The isomorphism between a reporting break and a coordination break is structural only. Left live as an analogy, not a claim of social-chemical identity (Fig 12 :117, with the figure's own chemistry precedent kept as a mapping, not a derivation).

After re-census: four strains recorded, two dissolved, two narrowed, none hidden.

---

## 8. Round-trip note (expanded in `11_audit.md`)

The condensation from the figures into an outreach sentence loses constraints. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The shorthand "you need an independent non-updating measure" drops at least three constraints: the second frame must have a declared low-overlap evidence pool; the residual must be kept per slot; and the instrument must already be returning something before it can be sharpened. The gap R_T is therefore nonzero and is reported qualitatively in `11_audit.md` rather than assumed to be zero.
