# Figure-grounded audit: INF-0027, distinguishing noise from a rare signal

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the information-theory question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o'| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the receiver's belief about what the channel will deliver: its code, its channel model, its priors.
- **a** is what the receiver does: attend, probe, integrate over time, set a criterion, pass a reading onward.
- **Γ(b,a)** is what the receiver's library predicts will be observed next.
- **o'** is what the channel actually returns.
- **s** is the slot: one time step, one frequency bin, one spatial cell, one candidate source. R is indexed by slot and by time, never merged into a single global energy figure.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"a global R near zero with one live slot residual is a legal state"** (Fig 1 :13)

The phenomenon to explain is the classifier's failure: *why do noise and a rare meaningful signal both produce a residual, and what extra structure lets a receiver tell them apart?* A frame that answers "compare the amplitude to a threshold" has a residual here, because the false-positive paradox (a world source opened this session) shows that lowering the threshold to catch a rare signal floods the receiver with false alarms from the vastly larger noise population. A frame that answers "look for a pattern" also has a residual, because a long run of noise can contain an accidental pattern and a single genuine transient may be too brief to form one.

State the residual as: *what makes a positive residual on one slot source-bearing rather than a discard of the representation, and what discriminates the two before the ground has spoken?* This is an effect description. It names no detector, no "matched filter", no "Bayesian prior", no "anomaly score". Those are candidate names, withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a conjunction of conditions that must hold together before a residual may be called a signal, plus an instrument that discriminates the source rather than the reading. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* For detection, the anchor is the source state, established by a measurement that does not move when the receiver changes its criterion. A detection statistic (d', a likelihood ratio, an alarm) is an **instrument**, not the anchor: it can be wrong on axes it does not measure (Fig 2 :37-38, Seat Map anchor section). Receiver confidence, analyst consensus and an internal alarm rate move when pushed; they are instruments at best. Viable anchor: a source-confirming measurement taken by an instrument whose reading the receiver cannot adjust by moving its criterion. This distinction is load-bearing for the whole solution: the criterion is a budget filter, the ground is the witness.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation (receiver library Γ, action a, observation o'), indexed by slot s and ordered by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72), because observations arrive in sequence and a transient is defined by when it occurs. The classification "signal or noise" is a **routing** operation on R (Formula step 2), implemented as a **comparison** (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87) between a slot's residual and a criterion. It is not a symmetric join of signal and noise operands.
- **Symmetry.** Not symmetric: the receiver's Γ and the world are not interchangeable, and the ground does not update on the receiver's opinion (Fig 2 :25). "Rare" is a threshold relative to the slot population, not an absolute amplitude (Fig 12 :85-89; Operators table :46-51). "Signal" is a relation between a residual and a source, not a property carried by the amplitude (compare Fig 11 :49, *"An actor's valence is relative to the residual, not a property it carries"*, read here at the level of a reading).
- **Scale.** Three scales are in view: the single observation step (the one-agent panel of Fig 4), the stream over time (the channel of Fig 10), and the population of slots against which "rare" is defined (the population panel of Fig 4, *"many agents, a shared library, and something that ranks what they produce"*, Fig 4 :5). The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30). A rare signal is intrinsically cross-scale: it is one slot at step scale, a transient at stream scale, and an outlier at population scale.

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The receiver loop** (one agent, one scale) | receiver, Γ (code, channel model, priors), probe actions | residual reduction per slot | yes: the observation actually returned, o' (Fig 2 :29, as an instrument settling "what arrived") | admitted |
| **D2 The channel** (Fig 10) | instruments, percepts, metrics, transients | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **D3 The source / ground** | whatever emits or fails to emit | true state of the world | yes: the ground itself, legitimate because the question is constitutively about whether a signal was sent (Fig 2 :36) | admitted |
| **D4 The code and library** (composition inside the receiver) | atoms (features, basis functions, primitives) and bonds, candidate terms φ | reach, description length, |φ| | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **X1 "Noise as a substance out there"** | the disturbance | amplitude | **no** anchor independent of the receiver's representation. Fig 13 :32 defines noise as discarded detail, so noise is representational-relative | not a domain yet; absorbed into D4 and D2 |
| **X2 "Pure randomness as a property of the world"** | chance | probability | no nameable anchor independent of the code; a distribution is a description in Γ | absorbed into D4 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that physical disturbances do not exist. It is a finding in its own right (F7): asking "is this noise or signal?" without naming the representation and the ground is an under-specified question.

### 1.3 Partition or union

D1 and D4 overlap: Γ is inside the receiver loop, so their overlap is a compound with its own loop. D2 and D3 overlap: contact with the ground is exercised through the channel, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1, structure:** the slot carries positive residual mass and the apparent pattern pays the MDL bargain (D1, D4).
- **C2, contact:** the channel preserved the reading; no transient was dropped, no metric saturated, no reading pooled (D2).
- **C3, source:** the source is corroborated across frames that do not share an evidence pool (D3).

A receiver failing C2 (a dropped transient) and a receiver failing C1 (an incompressible pattern) are not two degrees of the same failure; they need different instruments. A single lever, for example "lower the threshold", clears the region where only C1 is binding and leaves C2 and C3 standing. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the receiver read the slot at all?) → 2 vocabulary (does Γ have a term for the apparent pattern?) → 3 objective (can the receiver say what would count as a detection, in its own terms?) → 4 planning (where to aim the next probe) → 5 learn and carry (name what worked, verify it, carry it). The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. A rare signal for which the receiver has no term is exactly a break at link 2: more threshold tuning is effort above the break (Fig 3 :29-30). Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it, and that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."*

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; a live slot with global R near zero is a legal state; frame-internal quantities disqualified | governs how R is indexed and what a rare signal looks like at step scale |
| 2 The Ground | measurement is a named anchor; independence vs common pool; instruments can be wrong on unmeasured axes | governs witness rule and the criterion/instrument distinction |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order for an unknown pattern |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs cross-scale transfer and the honesty of the one-paragraph summary |
| 5 Mint Pipeline | gap kinds; three guards; MDL bargain; large and compressible | governs the structure test, as a filter, not as a witness |
| 6 Closure / Reachability | import only moves wall; instruments improved from worse ones already returning something | governs the three reachability questions and INWARD |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governs why a chorus of matched filters is not corroboration |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import; no proof of absence | governs "searched and nothing found" and source provenance |
| 9 Leave / Arrive | union vs partition; describe the effect; filters vs witnesses | governs the unbundling and the criterion verdict split |
| 10 Ground Maintainer | ground does not decay, channel does; four named decay modes | decisive for the rare-transient failure (C2) |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | governs the fact that discrimination is receiver-and-ground, not receiver alone |
| 12 The Bond | arrangement is the substance; sequence, comparison, subtraction, negation | governs why magnitude alone cannot carry source information |
| 13 Minimum Viable Set | discarded detail reappears as noise; set closed, arrangements not | decisive for the definition of noise; honest stop |

Strain test applied during this census: an early attempt to apply Fig 13's six physical terms directly to "signal atoms" and "noise atoms" only fit by calling a frequency bin a kind of space and an amplitude a kind of energy. That is a strain, so Fig 13 does **not** govern the detector's vocabulary at that level. Re-census sent Fig 13 to two narrower roles: :32 for the definition of noise, and the honest-stop section for the closed-set/open-arrangement limit. The six-term substrate is not used to name detector features. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about receivers, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Magnitude alone cannot discriminate; index the residual per slot

**Mode: `general` with a `specified` consequence for receiver design. Domains D1, D4. Status: triangulated (Fig 1 and Fig 9, low overlap: per-slot bookkeeping vs union splitting).**

> **"a global R near zero with one live slot residual is a legal state"** (Fig 1 :13)
> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"where to look: broken vs novel"** (Fig 1 :15)

A rare meaningful signal is exactly the state Fig 1 :13 calls legal: almost every slot quiet, one slot carrying positive mass. If the receiver replaces the per-slot vector with total received energy, that slot is averaged away and the only signal that says where to look is destroyed. The world corroborates from a separate pool: the false-positive-paradox source reports that *"When the prevalence, the proportion of those who have a given condition, is lower than the test's false positive rate, even tests that have a very low risk of giving a false positive in an individual case will give more false than true positives overall."* A rare target in a large slot population is dominated by the noise population unless the receiver keeps the slots separate and integrates over time in a way that preserves the live one. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A global energy threshold is a budget filter applied at the wrong granularity.

**Refuter:** a detector that recovers every ground-confirmed rare signal after replacing per-slot R with the global average, with no other information entering. Under Fig 1 :22 that cannot happen; if observed, F1's design consequence is false.

### F2: The structure test is compressibility, and it is a filter, not a witness

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 5 and the MDL world source, different strata: framework loop vs information-theory literature).**

> **"seeks the gap that is large and compressible"** (Fig 5 :18)
> **"the gap has real mass somewhere"** (Fig 5 :21)
> **"does the new term cost less to state than the confusion it removes?"** (Fig 5 :26)
> **"The acceptance test is a bargain, not a threshold."** (Fig 5 :42)
> **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."** (Fig 5 :43)
> **"fails this, and so does a term that explains one occasion perfectly."** (Fig 5 :44)

A meaningful signal is a residual that is **large and compressible**: there is a description φ of the apparent regularity such that cost(φ) plus what remains unexplained after φ costs less than the raw residual did (Formula step 3, *"accept iff cost(φ) + left(R,φ) < cost(R)"*). Noise is large but incompressible: its shortest description is as long as the data it would explain, so the bargain fails and it stays as unexplained residual. Fig 5 :44 is the sharp clause for rare events: a pattern that fits one occasion perfectly is not thereby a signal, because stating it costs as much as the occasion it explains. This is the discriminator that amplitude lacks.

The world source gives the same inequality from inside information theory: *"any regularity in a given set of data can be used to compress the data, i.e. to describe it using fewer symbols than needed to describe the data literally"* (MDL page, Grünwald 2004 quoted there), with the two-part code L(D) = min over H of L(H) + L(D|H). That is Fig 5 :43 in another vocabulary, reached independently, so it is a genuine low-overlap corroboration of the shape.

**Critical retraction, recorded here and not hidden.** In the first pass of this derivation I wrote that compressibility *is* the discriminator and therefore *is* the verdict. That was wrong. Fig 9 :60 (*"Use filters for the budget and witnesses for the verdict"*) and Formula step 5 (*"SETTLE — the ground settles it. Verified only by what pays. A gate is not the ground"*) govern: the MDL bargain decides whether a term is worth **naming**, not whether the source is **real**. An accidental regularity in noise can be compressible; a genuine single transient may be incompressible. Compressibility is the filter that ranks which candidate to check. The ground (D3) is the witness. The verdict in `09_watson_answer.md` uses the narrowed form: structure selects candidates, the ground settles them.

**Refuter:** a residual that is reproducibly large, incompressible under the receiver's declared code (best code length equal to literal length), and yet precedes a ground-confirmed source event across independent trials. That would break the filter reading only if the receiver had no other candidate to check; on its own it breaks the stronger claim that compressibility is necessary, not the claim that it is sufficient-with-ground. A second refuter breaks the filter itself: a detector whose named term pays no MDL bargain yet improves ground-confirmed detection because the term was handed to it by a differing closure (import), with provenance and shadow test intact.

### F3: Keep the channel to the ground reachable; the ground does not decay

**Mode: `specified`. Domain D2. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients,"** (Fig 10 :25)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"keep the anchor reachable"** (Fig 10 :29)

The four named decay modes are exactly the ways a rare signal dies. A rare signal **is** a transient, so *"dropped transients"* is its named failure. It is a small live slot, so *"pooled readings"* is the same averaging failure as Fig 1 :22 at the channel level. A strong brief burst saturates a metric, after which amplitude carries no source information. Stale percepts mean the receiver is ranging against a past channel state. In all four cases the ground kept paying someone else; the receiver lost contact. The symptom is *"you have lost touch"*, not a verdict about the world. Fig 7 adds the two-factor bracket:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket's fidelity across the handoff"** (Fig 7 :38)
> **"the ground's pressure on the room"** (Fig 7 :39)

If bracket fidelity goes to zero, no amount of source pressure reaches the receiver. The remedy is to restore the reading, not to adjudicate from a degraded one (Seat Map, Seat 3: the maintainer's output on a dead channel is *"contact has been lost"*, not a number).

**Refuter:** a documented case in which the channel is independently verified intact (no dropped transient, no saturation, no pooling, fresh percepts) and a rare signal is still systematically missed at a rate predicted by channel decay. If both factors of Fig 7 :37-39 measure high while detection fails, F3's mechanism is not the cause.

### F4: One reading cannot discriminate source; triangulate across independent frames

**Mode: `specified`. Domain D3. Status: triangulated (Fig 2 and the source-discrimination essay, different strata: anchor geometry vs instrument philosophy).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"Independence, between two frames, is how little they draw on the same evidence."** (Fig 2 :31)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)

A detection statistic reads a value; it does not name the source that produced it. The essay *The Hard Problem is About Source*, opened this session, states the mechanism in terms of metamerism: *"If several paths create the same behavior, then behavior is a projection with lossy information"*, and of a color instrument, *"it cannot comment on the source"*. Several physical causes can produce the same positive reading; the reading does not determine which. The essay's own resolution is the figure's: *"An instrument that can't distinguish these cases demonstrates its own inadequacy"*, and *"The answer is unreached until a better instrument exists."* A spectrometer, not an argument, resolved the color case.

So the receiver needs a second frame whose closure differs (two instruments on different physical principles, or one instrument plus a source-confirming measurement), and those frames must not draw on the same evidence pool. Two matched filters fed the same samples are one witness wearing two names (Fig 2 :31, Fig 8 :48-49). Agreement among them is efficient for a convention and disqualifying for a verdict (Fig 2 :40-41).

**Refuter:** a case in which the set of physically possible sources is demonstrably closed and each yields a distinct reading, with the mapping verified against the ground for every member. Then a single reading would uniquely identify the source and the triangulation requirement would be shown to be a property of under-characterised pools, not a law. Until such a census exists, F4 stands as `specified`.

### F5: The criterion is a budget filter, never a verdict witness

**Mode: `general` with a `specified` consequence for receiver operation. Domains D1, D3. Status: triangulated (Fig 9, ROC page, Neyman-Pearson page: three fields with distinct evidence pools).**

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)
> **"A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)

Setting a detection threshold trades a miss against a false alarm. That is an allocation of a budget under a cost context; it is not a statement that a signal exists. Three opened world sources agree from separate literatures:

- *Detection theory*: *"Bias is independent of sensitivity."* A response criterion (c or beta) and sensitivity (d') are separate quantities; a liberal criterion does not make a weak signal real.
- *Receiver operating characteristic*: *"The ROC curve is the plot of the true positive rate (TPR) against the false positive rate (FPR) at each threshold setting."* And crucially: *"ROC analysis provides tools to select possibly optimal models and to discard suboptimal ones independently from (and prior to specifying) the cost context or the class distribution."* The discrimination capacity is assessed before the cost context is applied, which is exactly the filter/witness order.
- *Neyman-Pearson lemma*: *"one must not relinquish control over one type of error while calibrating the other"*, and in radar, *"the Neyman–Pearson lemma is used in first setting the rate of missed detections to a desired (low) level, and then minimizing the rate of false alarms."* The lemma prices the trade; it does not supply the source.

The framework's own wording is Fig 9 :60: filters for the budget, witnesses for the verdict. A detector that reports "signal present" because its score crossed a tuned threshold has let a filter hand it a verdict. The legitimate report has two lines: the sensitivity estimate (instrument property) and the criterion (budget choice), followed by a source-confirming measurement (ground).

**Refuter:** a detection rule whose threshold is derived from the signal's existence rather than from the miss/false-alarm cost pair, demonstrated by showing the cost pair can be varied freely with no change in the rule and no loss of ground-confirmed detection. That collapses the distinction F5 defends.

### F6: If no term closes the residual, ask SEARCHED, then INWARD, then OUTWARD

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 6, Fig 8, Formula step 7, distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."** (Fig 6 :34)
> **"the search for a proto-instrument is a search for one that is already there"** (Fig 6 :35)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

When the receiver has no term for a novel signal, three questions are owed and they must not be blurred (Formula step 7):

1. **SEARCHED, is it in here and unfound?** The closure does not change; more of the space is visited. Distribute the search and keep searchers independent, because *"searchers drawing on the same evidence are one searcher wearing many names"* (Fig 6 :53). This is asked first because it is cheapest and the other two assume its answer.
2. **INWARD, is the representation adequate to hold it?** Extend an instrument that is already returning something that fails to resolve. A sensor is not built from a description of Mars; a wandering point was already a reading (Fig 6 :32-33). Here: is some existing measurement already showing an unresolved anomaly that a sharper readout would separate?
3. **OUTWARD, does another frame already hold it?** Import a term from a closure that differs, with source gate and shadow test, debited against independence. Characterize the residual in effect terms first: *"describe it before you go looking, or any frame you pick will seem to fit"* (Fig 9 :27-28).

INWARD and OUTWARD are opposed and are never read against one another. A failure to detect is `unreachable at this budget` if the term is already in the closure and was not found (remedy: more, independent search), and `underivable in principle` if it is not in the closure (remedy: import). Importing against a budget limit adds an atom that was not needed.

**Refuter:** a receiver that reliably detects a genuinely novel signal with no additional search, no instrument refinement, and no import, with the novelty verified against a source-confirming measurement. That would break the trichotomy at step 7.

### F7: Noise is representation-relative; there is no "noise domain"

**Mode: `general`. Domains D2, D4. Status: triangulated (Fig 13 and the tacit-knowledge essay, which cites the same line but draws a different consequence).**

> **"the detail a crossing discards reappears above it as noise"** (Fig 13 :32)
> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)
> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)

Fig 13 :32 defines noise as what a lossy crossing throws away and what reappears above the crossing as residual. Noise is therefore not a substance in the world; it is relative to the representation doing the crossing. This is the same quantity as the round-trip gap R_T (Fig 4 :30): what the coarser description cannot hold returns as unexplained residual. The tacit-knowledge essay makes the identification explicitly: *"Noise is Fig 13 :32: 'the detail a crossing discards reappears above it as noise.'"*

Consequences: (1) the question "is this noise or a signal?" is under-specified until the receiver's Γ and the ground are named, which is why X1 had no anchor (section 1.2); (2) a receiver cannot certify from inside its own frame that a residual is noise, because the frame cannot see what its own crossing discarded; (3) a search that returns nothing is *"never a proof of absence"* (Fig 8 :39). What the receiver can honestly report is a shape: the class of thing that would have to be present for the residual to be source-bearing, and the instrument that would discriminate it.

**Refuter:** a receiver-independent definition of noise that names an anchor, that is, a physical quantity that is noise under every possible code with every possible ground. None was found in this derivation or in the opened sources, and Fig 13 :32 shows why the attempt is a category error. If one were produced and survived a ground test, F7 would be narrowed to `specified`.

### F8: Internal agreement is not evidence; a repeated room is not progress

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 7 and Fig 2, low overlap: selection between rooms vs anchor triangulation).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"The chain approaches the truth only as the world runs out of ways to refuse it."** (Fig 7 :42)

A receiver that keeps running the same detector, the same criterion and the same feature set is handing itself the same room. Ten agreeing matched filters fed the same samples raise the vocabulary and do not add an anchor. The frame-grounded reading of "ensemble agreement" here is not that the ensemble is bad, but that the ensemble has stopped selecting between rooms. Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

**Refuter:** a bank of detectors sharing one evidence pool whose agreement predicts ground-confirmed rare events prospectively and per slot, with no member seeing a different closure. Under Fig 7 :36 that should be impossible; if observed, F8 is wrong for this domain.

### F9: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per slot, never a global average | general | Fig 1 :13, :19, :22 | figure-derived |
| A live slot with global R near zero is a legal state | general | Fig 1 :13 | figure-derived |
| Compressibility ranks which candidate is worth naming | general | Fig 5 :18, :42-43 | figure-derived; filter, not witness |
| The ground, not the criterion, settles source | general | Fig 9 :60; Fig 2 :29 | figure-derived |
| Channel decay, not ground decay, loses rare transients | specified | Fig 10 :24-29 | triangulated F3 |
| One reading cannot discriminate source | specified | Fig 2 :29, :31; source essay | triangulated F4 |
| The criterion trades miss against false alarm | specified | Fig 9 :60; ROC, Neyman-Pearson | triangulated F5 |
| A novel signal triggers SEARCHED, then INWARD or OUTWARD | specified | Fig 6 :34-35; Fig 8 :39 | triangulated F6 |
| Noise is discarded detail, representational-relative | general | Fig 13 :32; Fig 4 :30 | triangulated F7 |
| Which specific source produced this particular reading | not stated | none | gap: framework returns a shape, plus a ground measurement is owed |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A detector recovers every ground-confirmed rare signal after replacing per-slot R with the global average and adding no other information (breaks F1, Fig 1 :22).
2. A residual that is large, incompressible under the declared code and without any import, still selects the correct source prospectively across independent trials (breaks F2's filter reading, Fig 5 :43).
3. A channel independently verified as fresh, unsaturated, unpooled and transient-preserving still misses a rare signal at a rate predicted by channel decay (breaks F3, Fig 10 :24-29).
4. A closed, enumerated set of possible sources each yielding a distinct reading is verified against the ground for every member (breaks F4's triangulation requirement, Fig 2 :31).
5. A detection rule works with its cost pair varied freely and no change in decision (breaks F5, Fig 9 :60).
6. A receiver detects a novel signal with no added search, no instrument refinement and no import, with novelty source-confirmed (breaks F6, Formula step 7).
7. A receiver-independent definition of noise naming an anchor survives a ground test (breaks F7, Fig 13 :32).
8. Fig 6's idempotence fails inside a closed set, or Fig 5's bargain can be paid by a term that is neither support-positive nor reachable (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a source-confirming measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a detector theory (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep per-slot residuals separate in every report. A single blended "signal score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Report sensitivity, criterion and source confirmation as three separate lines (Fig 9 :60). Never let a threshold crossing be written as "signal present".
4. Treat any feature list as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*).
5. Before naming a pattern, ask whether its description pays the MDL bargain (Fig 5 :43), then ask what ground measurement would confirm the source. Do not confuse the two questions (retraction in F2).
6. When a residual persists with no term, run SEARCHED first, then one of INWARD or OUTWARD, never both read against each other (Formula step 7).
7. Use the detection literature as a budget filter and as corroborating witnesses from separate pools, not as the verdict (Fig 2 :31, :40).
8. Stop at the shape. Do not name which physical source produced a particular reading; the framework returns *"you get a kind of thing, never the answer itself"* (Fig 9 :32), and the source-discriminating instrument is not held here.

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*, *They're Scanning Books When They Should Be Studying Nature* and *Decoding Tacit Knowledge* (all fetched 2026-11-23).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- WATSON 60 confirms the filter/witness split: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* It also confirms that the seat reads the ground rather than asking the anchor to decide design questions, so no ruling was sought from outside the figures.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Compressibility called "the discriminator" and treated as the verdict | **Retracted and narrowed to a filter** | Fig 9 :60 and Formula step 5. MDL ranks which term to name; the ground settles source. F2 rewritten; verdict uses narrowed form |
| Detection threshold treated as the answer to the question | **Retracted at record level** | Fig 9 :60; ROC and Neyman-Pearson confirm criterion is cost context, not source evidence |
| Applied Fig 13 six-term substrate directly to signal/noise atoms | **Retracted, strain S1** | Only fit by renaming bins as space and amplitude as energy. Re-census: Fig 13 governs :32 (noise) and the honest stop only |
| Treated "noise" as a domain with an anchor | **Rejected as X1, absorbed** | No anchor independent of the representation; Fig 13 :32 makes noise representational-relative |
| Read "two detectors agree" as corroboration | **Retracted as a witness, kept as a filter** | Fig 2 :31, :40; same evidence pool is one witness |
| Wanted to call d' or the likelihood ratio "the ground" | **Narrowed to instrument** | Fig 2 :37-38: instruments can be wrong on axes they do not measure; the ground is the source state |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 1 and Fig 9 are two figures from one framework; triangulation here means low topical overlap, not independent evidence pools |
| "No proof of absence" considered a rhetorical caution | **Canonically confirmed as a law** | Fig 8 :39, restricted by :40-43 to underivable versus unreachable-at-budget, which issue different instructions |

**Strains sent to the log:** S1 (Fig 13 substrate applied to detector features), resolved by re-census; S2 (calling the source "the ground" while the channel plainly updates), resolved by Fig 2 :29-30 and Fig 11 :73: the channel updates, the ground settles; S3 (reading Fig 5 :18 "large and compressible" as sufficient for source), resolved by the F2 retraction and Fig 9 :60. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of structure (C1), contact (C2) and source corroboration (C3), each with its own instrument.
2. **What is the anchor?** The source state, a measurement that does not move when the criterion moves (Fig 2 :29). Not the alarm, not the score, not the receiver's confidence.
3. **Can magnitude decide?** No. A rare signal is one live slot with the rest quiet (Fig 1 :13). Global energy destroys it (Fig 1 :22). The false-positive paradox corroborates from a different pool.
4. **What ranks a candidate?** The MDL bargain (Fig 5 :43): a large, compressible gap is worth naming. This is a filter, not a witness (Fig 9 :60, F2 retraction).
5. **How is a rare signal lost?** Channel decay, not ground decay: dropped transients, saturated metrics, pooled readings, stale percepts (Fig 10 :24-29).
6. **How is a source confirmed?** Triangulation, not negotiation (Fig 2 :35). One reading cannot comment on its source; independent frames can, provided they do not share an evidence pool.
7. **What if no term exists?** SEARCHED, then INWARD or OUTWARD, kept distinct (Formula step 7). Absence of detection is not proof of absence (Fig 8 :39).
8. **What can be said at the stop?** A shape: keep slots separate, rank candidates by compressibility, keep the channel fresh, corroborate the source across differing closures, and keep the criterion out of the verdict. Not which source produced this particular reading. Not `grounded`.

---

## 8. Updated verdict

The shape survives: **a receiver distinguishes noise from a rare meaningful signal not by amplitude but by a conjunction of conditions, kept separate: a live per-slot residual rather than a pooled average, a pattern that pays the description-length bargain and is therefore worth naming, a channel preserved against the four named decay modes, and source corroboration from frames that do not share an evidence pool. The detection criterion is a budget filter and never a verdict witness; the ground, not the threshold, settles whether a source was present.** Which specific source produced a particular reading is a `gap`, not a silence: the missing thing is a source-discriminating instrument, characterized in effect terms but not held here. Mode `specified`. No world source was allowed to flip a verdict; each genuine conflict or overreach was returned to the census and narrowed. No unresolved strain remains after re-census.
