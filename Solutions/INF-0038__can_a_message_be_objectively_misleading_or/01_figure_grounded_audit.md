# Figure-grounded audit: can a message be objectively misleading?

**Mode of this document: `general` on the structural finding, `specified` on the operationalisation prediction, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is a simulated answer and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The 16 files under `FRAMEWORK/figures/` and `FRAMEWORK/reference/`. Every figure quote below was checked character by character against `FRAMEWORK/reference/03-FIGURES_TEXT.md` and is cited as `Fig N :line`.

---

## 0. The question restated in effect terms

> Can a message be objectively misleading, or does misleadingness always depend on an audience and context?

- **R, stated as an effect.** A message m, a world state W, and a receiver with prior b in context c. The property "m is misleading" is being tested for anchor-independence: does it register against a ground that does not move when the receiver or the context changes (objective), or is it indexed to the receiver (frame-relative)?
- **Arity / symmetry / scale.** Arity 3 (message, world, receiver-in-context). Not symmetric under swapping message and receiver: the relation is directed, m acts on a receiver. Scale: token/arrangement level, receiver belief level, institutional adjudication level.
- **What an answer would look like, bound as an ordinary term (Formula "Direction").** *Misleadingness* = a relation that holds when a receiver's uptake of m diverges from W in a way that matters to some decision. Option A: a property of m alone, invariant across receivers and contexts. Option B: a relation among m, W, and a receiver-in-context. Binding the sought shape as an ordinary term makes it refusable by the same test as everything else (Fig 5 :65, *"make the sought-for shape an ORDINARY TERM"*).

---

## 1. Domain census before choosing any figure line

One line per domain with actors / currency / anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | type |
|---|---|---|---|---|
| D1, arrangement and content | tokens, bonds, the message as used | what m conveys in its context | the message and its context of use (a fixable object, not the ground for the whole question) | partition of which arrangements carry which content |
| D2, receiver uptake | audience with prior b, context c | belief update, inference, uptake | the receiver's belief state ranged against W; human judgment is legitimate here because the question is constitutively about people (Fig 2 :36-38) | partition by receiver slot |
| D3, adjudication | fact-checkers, regulators, "reasonable consumer" | verdicts of misleadingness | ground truth plus a declared standard | a convention that must not decide the outcome (Fig 10 :47) |

**Partition or union.** This is a **union compound**, not a partition. The factual-accuracy condition (m versus W) and the uptake condition (m versus receiver-in-context) overlap in the case we call "misleading." Fig 9 :4: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* A case in two conditions is not a harder case of either; it is a specific compound (Fig 9 :54-58). The seat map states the same rule: *"when a split lands on a union rather than a partition, unbundle before searching again."*

**Order by dependency (Fig 3).** Fix what m conveys in context (D1) before assessing uptake (D2); assess uptake before adjudicating (D3); describe R in effect terms before choosing a frame (Fig 9 :27-28, *"describe it before you go looking, or any frame you pick will seem to fit"*). Refusal before mint (Formula step 2): the term "objectively misleading" is refused as written before any new metric is minted.

**Habitat (Fig 11 :43-44).** Enumerate, never compose: everything in contact with R. Actors: speaker, message, platform, receiver, fact-checker, regulator, reasonable-consumer standard, the underlying facts. Conditions: context, prior belief, source credibility, repetition. Relations: uptake, de-contextualisation, correction, adjudication. Read off the world; what cannot be measured yet is the residual.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual indexed per slot; averaging kills the signal | misleadingness must be indexed per receiver slot, not averaged into a global score |
| 2 The Ground | anchor test; legitimate when constitutively about it; independence | decisive for audience-dependence (F1) |
| 3 Dependency Chain | order by dependency | D1 before D2 before D3 |
| 4 The Membrane | methods cross, recordings do not; round-trip gap | a "misleadingness score" is a recording of one adjudication, not a generator |
| 5 Mint Pipeline | shape held as preference; refusal is a fifth bin | "objectively misleading" is a preference masquerading as a term (F6) |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse ones | no new primitive is needed; the gap is in uptake, not representation |
| 7 Room Chain | agreement compounds, evidence does not | a panel of agreeable readers cannot corroborate the verdict |
| 8 Union Surplus | surplus lives where closures differ; provenance separates convergence from import | law, pragmatics, misinformation research and animal behaviour are low-overlap frames |
| 9 Leave / Arrive | split union compounds; describe the effect; shape not name | union split (F4) and honest limit (F6) |
| 10 Ground Maintainer | declared meaning not grounded; convention must not decide outcome | institutional definitions are conventions (F5) |
| 11 The Habitat | valence relative to residual, relations not kinds | decisive structural analogue (F2) |
| 12 The Bond | arrangement is substance; isomer; functional group | same tokens, different bond, different content (F3) |
| 13 Minimum Viable Set | shape, not a name; unreachable is a verdict | the framework returns the relational shape, not a specific audience |
| Operators / Symbols | R is a slice; ground is the anchor | no ground reading is claimed |

Strained readings are named in §5, not smoothed over.

---

## 3. Findings

### F1 - The anchor test: a message-only "misleadingness" is not an anchor (decisive, triangulated)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :30: *"If it moves when you push on it, it is not an anchor."*

Push on the receiver or the context. The same true headline ("a healthy doctor died two weeks after getting a COVID-19 vaccine", a real example in the Nature Medicine review) misleads one audience and is read correctly by another who knows the timing. The verdict moves. A property that moves when the receiver changes is a frame, not a ground.

Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* Fig 2 :37: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."* "Is this misleading?" is constitutively about a receiver's uptake. So the receiver is the legitimate anchor, not an instrument that can be wrong on an axis it does not measure. Fig 2 :33: *"The anchor must not update."* A receiver's belief state *does* update, which is exactly why it must be ranged against W separately per frame (Fig 2 :45-46).

Strain test applied: Fig 2 :37 could be strained to cover every question involving a message. Re-census shows it is restricted to questions "about people," and misleadingness is such a question by definition (a receiver forming a belief). No strain after re-census. **Triangulated**: the general anchor test (Fig 2 :29-30) and the constitutive-about-people rule (Fig 2 :36-38) are two low-overlap routes to the same verdict.

### F2 - Valence is a relation, not a property carried (triangulated)

Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."* Fig 11 :51: *"No standing list of good actors survives a change of residual."*

This is the structural grammar of the question. A message is "misleading" the way an actor is a "benefactor": relative to a residual (a receiver trying to form a true belief). The same message is misleading for one audience and innocuous for another. Calling misleadingness a property of the message alone is the same category error as calling an actor a benefactor "in itself." **Triangulated** with F1: Fig 11 gives the relation/kind grammar, Fig 2 gives the anchor test. Low overlap.

### F3 - The arrangement carries the content (single-source for the figure; corroborated in WORLD)

Fig 12 :94: *"The arrangement is the substance."* Fig 12 :95-96: *"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."* Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

The "message" is not its token set. The same words under a different bond (context, implicature, ordering, omission) are a different conveyed content, hence may mislead one way and not another. This is why a message-only metric that counts tokens or fact-checks a literal proposition misses the phenomenon. Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* **Single-source** for the figure definition; the pragmatics source in WORLD independently predicts the same thing from a different evidence pool.

### F4 - It is a union compound; split before answering (triangulated)

Fig 9 :4: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

The two conditions are: (i) content accuracy against W (objective, fact-checkable); (ii) uptake by a receiver in context (relational). "Misleading" is their compound. Collapsing them into one property is the error. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A single global "objectively misleading" score averages away the receiver slot that carries the signal. **Triangulated** with Fig 2 :31, *"Independence, between two frames, is how little they draw on the same evidence,"* applied to the two conditions: the accuracy measurement and the uptake measurement draw on different evidence.

### F5 - Declared meanings are conventions, not ground (single-source)

Fig 10 :18: *"a declared meaning is not a grounded one."* Fig 10 :49: *"Declaring a meaning does not ground it."* Fig 10 :47: *"a convention that decides an outcome has stopped being one."*

An institution can declare "a message is objectively misleading if X." That declaration is a convention. It becomes a verdict the moment it decides an outcome, at which point it has stopped being a convention and has smuggled in a reference audience (the "reasonable consumer", the "typical reader") without admitting it. The honest form declares the reference audience explicitly. Note the qualification: this finding governs *declared meanings*, not the factual accuracy of content, which has its own ground in W. No strain after re-census.

### F6 - The framework returns a shape, not a name (triangulated)

Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."* Fig 5 :62: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."*

The Tether can say the property is receiver-indexed, relational, and a union compound. It cannot name which receiver or which threshold counts, because that would require already holding the standard. Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room."* So no exhaustive search of definitions in the misinformation literature settles this; the field's own survey reports unresolved definitional divergence. **Triangulated** with the local figures README (*"a shape, not a name"*) and Fig 13 :134 (*"Unreachable is a verdict here, not a silence"*).

### F7 - What survives: an objective component, but not an objective whole

The factual-accuracy condition is objective: a message can stand in a fixed, measurable relation to W (this claim is false; these events did not occur). That component is anchor-checkable. But "misleading" is not identical to "false": a literally true headline can mislead through implicature, omission or de-contextualisation. So the objective component does not determine the whole property. This is a **qualification of the verdict, not a reversal of it**: misleadingness as a whole always depends on an audience and context, even when one of its conditions is objective. Fig 12 :117 (isomer) is the right grammar: same tokens, different arrangement, different substance.

### F8 - What an outside frame contributes

Fig 8 :50-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*, and the surplus lives only where closures differ. Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* Fig 10 :52: *"Bring a characterised residual, never the source."* So the first contact to a misinformation researcher carries the residual (F1 to F4) and the refuter, not the framework. Their verdict is recorded before any theory is shown.

---

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument (Seat Map, failure genera :287). The verdict **B, misleadingness is irreducibly receiver- and context-dependent**, is refuted if any of the following holds:

1. **Anchor test passed by a message-only metric.** A measure of misleadingness is produced that is invariant under change of receiver and context, still registers against the ground (tracks actual belief divergence or harm), and does not merely fix a hidden reference audience. By Fig 2 :30, invariance is a *candidate* anchor only if it also satisfies Fig 2 :29 and :36: it must settle the question and be constitutively about it.
2. **Convergence at maximum independence.** The same content, facts and context yield the same misleading verdict across audiences that share no evidence (low overlap, Fig 2 :31, Fig 8 :50). That would demonstrate an audience-independent component, not merely a shared pool.
3. **Valence is carried.** Fig 11 :49-51 is refuted: a message's valence turns out to be invariant across residuals, so "relations rather than kinds" fails.
4. **The union collapses.** Factual falsity alone fully determines the misleading verdict, so the two conditions are one and Fig 9 :4's split is unnecessary.

If any fires, the verdict is withdrawn and the census redone. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Answer B, with the F7 qualification. "Objectively misleading" is coherent only after an implicit reference audience and context are made explicit.
2. Keep the three verdicts separate (anchor test, valence relation, union split); never average them into a single score (Fig 1 :22).
3. Split the question before further search (Fig 9 :4): content accuracy and receiver uptake have different grounds and different instruments.
4. Send the residual and the refuter first; offer theory only on request (Fig 10 :52).
5. Use the venues in `03_public_contact_points.csv`, one to one, and ask what would count as a failure rather than for agreement.

---

## 6. Canonical usage check (figures README + WATSON 60, read after the first sections)

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"the quotes are the authority, not this summary"*; *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; the framework says *"what a missing thing would have to look like (a shape, not a name)"* and stops where instruments cannot distinguish, recording the lineage; *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat reads the ground and does not ask the maintainer to decide what the figures already settle. *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

### Retraction / confirmation log

| earlier reading | status after canonical check |
|---|---|
| F1 "decisive" | **Confirmed but narrowed.** It decides audience-dependence for the *whole* property; it does not deny the objective accuracy condition (F7). Keeping both claims prevents an over-read. |
| Fig 2 :37 applied to all messages | **Strain found and resolved.** Re-census restricts it to questions constitutively about people. Misleadingness qualifies. No correction to F1. |
| "misleadingness is purely subjective" | **Retracted as an overstatement.** It is receiver-indexed, but one of its two conditions is objective (F7). The correct claim is relational, not arbitrary. |
| "the framework can name the right audience" | **Retracted.** Fig 9 :32 and the README forbid it. The framework returns the shape. |
| F5 "no objective definition possible" | **Narrowed.** No *declared* definition is self-grounding; factual accuracy still has a ground in W. |
| Apparent Fig 10 :18 vs F7 strain | **Not strained.** Fig 10 governs declared meanings (conventions); F7 concerns measurement against W. Different objects. |
| Field survey shows definitional disagreement | **Corroboration, not a witness.** The HKS survey and the figures share no author, but the survey is one evidence pool and cannot be pooled with the pragmatics or FTC sources as independent confirmation of the same claim. |

### Round-trip gap `R_T` (Fig 4 :30)

*Sent up (x):* the verbatim figure set, chiefly Fig 2 :29-30/:36-38, Fig 11 :49-51, Fig 9 :4/:32.
*Abstraction (T_A):* the shorthand "misleadingness is receiver-relative and a union compound."
*Concretisation (T_E):* an operational definition, e.g. FTC "likely to mislead consumers acting reasonably under the circumstances."

**`R_T` is nonzero.** What the shorthand holds but the operationalisation must add: which authority fixes the reference audience; which decision is "material"; the threshold for "likely"; and the source of the underlying facts W. Conversely, one thing survives the trip cleanly: the verdict cannot be a property of the message alone. `R_T` was not measured numerically (no ground reading exists for a conceptual claim); it is recorded qualitatively as the enumerated set of dropped constraints. Treating "a score is the condensed form of the verdict" as identity would set `R_T` to zero, the dead-reckoning error Fig 4 :30 names. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

### Updated verdict

The shape survives: misleadingness is a receiver-indexed, context-bound relation over a union of an objective accuracy condition and a subjective uptake condition; a message-only "objective misleadingness" fails the anchor test. The specific claims that fail are: that the property is carried by the message, that a declared definition grounds itself, and that the framework can name the right audience. Strains after re-census: none, with the one narrowing recorded above. Mode `general`/`specified`, not `grounded`.
