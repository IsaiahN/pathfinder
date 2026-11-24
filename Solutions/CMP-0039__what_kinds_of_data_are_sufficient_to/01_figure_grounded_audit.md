# Figure-grounded audit: what data suffice for causal identification under feedback, confounding and hidden variables?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and what shape the sufficient data must have. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: a simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-22): LLM output can simulate an answer, but "the truly testable output would need to be derived from the real architecture or working the formula yourself". This document is checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md` (opened and grepped this session), the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, and `FRAMEWORK/figures/THE_FORMULA.md`. Every figure quote below is an exact substring of the verbatim file, cited as `Fig N :line`.

---

## 0. The residual in effect terms

The question: what kinds of data are sufficient to identify causal influence in a system with feedback, confounding, and hidden variables?

Stated as an effect, not a topic. An observer holds a finite set of variables and a finite sample of their joint behaviour. The observer wants to decide a directional claim, "X causally influences Y". Three features block the naive move from observed association to that claim:

- **Feedback** closes the loop, so cause and effect coexist in one mutual-update state. A chain reading cannot represent it.
- **Confounding** means two observed variables can agree because a hidden source talks to both, not because one produces the other.
- **Hidden variables** mean the thing that would settle the comparison is not among the measured variables.

The residual R is therefore: *what additional structure in the data converts a fitted joint distribution into a settled directional claim?* This is not an estimation problem inside a fixed model. It is a boundary question about what data can cross from `closure(Γ)` of one observational frame to a ground-settled atom.

R by arity, symmetry and scale:

- **Arity.** The object is a binary relation (one variable influencing another), embedded in a network of such relations. Causal influence is a *typed, ordered* bond. Fig 12 :49: "The seven bonds, and whether the order of the operands matters." The sequence test is explicit (Fig 12 :74): "swap them. Does it become a different thing? Yes."
- **Symmetry.** The observational data is symmetric with respect to structures that induce the same distribution; the causal claim is not. Under a symmetric reading, Fig 12 :92: "Symmetry is what decides whether an arrangement is a new thing. Under a symmetric bond, k operands have k! spellings and one term". An observational dataset is the flat, symmetric case: many spellings, one recorded term.
- **Scale.** First order within the observed system; second order when an intervention or a new environment is applied from outside; the loop between them closes only if there is an anchor that does not update.

---

## 1. Domain census (before any figure line is chosen)

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not yet a settled domain, and that failure is itself a finding.

**Domain 1, the observational data frame.**
Actors: measured variables, a recorded joint distribution, conditional independences, sample size.
Currency: association and fit.
Anchor: none available from inside this frame. There is no quantity in the data that changes its answer when the system is pushed, because the data *is* the system's own output. This is Fig 2's panel 1 and panel 2, not its panel 3. It is a real domain but an unanchored one, which is exactly why it cannot settle R alone.

**Domain 2, the intervention frame (the anchor).**
Actors: an experimenter, a do-operation, random assignment, an instrument, a perturbed environment.
Currency: measurements taken while a variable is set from outside.
Anchor: the intervention itself. It is the thing that "settles the question and does not change its answer because of what any frame thinks" (Fig 2 :29). It does not update on the system: "the ground does not decay, the channel does" (Fig 10 :24).

**Domain 3, the hidden-variable frame.**
Actors: unmeasured common causes, latents, mechanisms three steps out.
Currency: unexplained covariance and residual structure.
Anchor: either the latent becomes measured by a better instrument, or a different frame supplies the missing atom by import. Without one of those, this domain has no anchor and is reported as such. Fig 11 :52: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

**Domain 4, the verification frame.**
Actors: analysts and reviewers.
Currency: agreement and residuals.
Anchor: the ground, never agreement. If the analysts all read the same dataset, their independence is zero and their agreement is one evidence pool (Fig 2 :40).

**Partition or union?** Union, not partition. Feedback, confounding and hidden variables are overlapping conditions. A case in two conditions is not a harder case of either. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either." The compound (feedback plus hidden confounding) has its own loop and its own required data; a lever that clears the confounded-only region leaves the intersection standing.

**Order by dependency (Fig 3).**
1 perception (can the variables be told apart and measured at all), 2 vocabulary (does the analyst have ordered bonds and negation, or only `+`), 3 objective (what counts as identification: a settled do-effect, not a fit), 4 planning (which intervention to run), 5 learn and carry (invariance across environments). The usual break is between 2 and 3: a correlational vocabulary can name a state and cannot state a causal verdict. Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Optimising link 1 (more observations) cannot rescue a break at link 3 (Fig 3 :19): "Optimising a link that already works cannot rescue one that does not."

Strain test applied before concluding: a line was rejected wherever it only fit by stretching its subject. The two strains that survive are named in section 6, not smoothed over.

---

## 1b. Figure census

| figure | bearing on R | verdict |
|---|---|---|
| 1 The Agent | the residual is per slot and frame-internal scores are disqualified | more global fit cannot settle a per-variable causal claim |
| 2 The Ground | anchor must not update; independence is how little evidence is shared; one evidence pool | intervention is the anchor; shared-latent correlation is the collapse |
| 3 Dependency Chain | order by dependency; a link with no instrument | correlational vocabulary breaks at the objective link |
| 4 The Membrane | only methods cross up; round trip has a gap | the report must be a method plus a measured gap, not a recording |
| 5 Mint Pipeline | three guards as a product; MDL bargain | an identified effect is a mint that must settle against the ground |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | observational data cannot add the causal atom; an intervention can |
| 7 Room Chain | a room's agreement is variation, not a verdict | many analysts on one dataset cannot corroborate |
| 8 Union Surplus | convergent derivation and adopted import look identical in contents | confounded and causal associations are indistinguishable in the joint distribution |
| 9 Leave / Arrive | describe R before choosing a frame; union needs unbundling; filters are not witnesses | equivalence class is a filter, the ground is the witness |
| 10 Ground Maintainer | verifier non-access; bring a characterised residual | send the residual and refuter, not the fitted model |
| 11 The Habitat | contact cascades; enumerate the habitat | hidden causes are found by enumeration out to the cascade, not by direct contact only |
| 12 The Bond | ordered vs symmetric bonds; isomer; cycle | causal direction is an ordered bond, feedback is a cycle, equivalence is isomerism |
| 13 Minimum Viable Set | network: influence travels; two kinds in lockstep | influence is structural, not a bare state |
| Operators table | sequence and production are ordered; negation refuses | a vocabulary without negation can only accumulate associations |
| Symbols table | R is the aim and always a slice | what cannot be measured yet is residual, not zero |

---

## 2. Findings

### F1 - A joint distribution records the ingredients and not the arrangement (decisive)

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

Fig 12 :46: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."

A dataset records values and their co-occurrence. Which typed relation produced them is not recoverable from the values. This is the figure form of "the joint distribution cannot identify the causal direction". Two structures over the same variables can induce the same distribution; the bond is the half that was never recorded. More observations of the same kind fill in the ingredients more precisely and leave the bond unrecorded.

**Refuter:** show a procedure that, from a joint distribution alone and with no extra assumptions, returns the typed bond for every pair. Fig 12 :46 denies this definitionaly; the burden is on the demonstration.

### F2 - Confounding is Fig 2's one evidence pool

Fig 2 :18-21 describe the failure: "one evidence pool", "they never talk, and still agree", "so the agreement is the pool talking, not two frames confirming each other". Two observed variables can be perfectly correlated while never influencing each other, because a hidden shared source drives both. Their agreement is the pool talking.

Fig 2 :13: "no anchor; each updates on the others". With feedback added, the system is also panel 1: mutual update produces coherent drift. Both collapse panels apply at once, which is why the union needs its own loop.

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Pooling across a hidden common cause is an aggregation that removes the very slot-level signal that would say where to intervene.

**Refuter:** exhibit the hidden source making a measurable difference (measure the latent, or apply an instrument that moves one variable without moving the source). If the correlation survives an anchor that the common cause cannot update, the finding is refuted.

### F3 - Observational equivalence is isomerism, not a harder estimation problem

Fig 12 :97-98: "silver fulminate and silver cyanate have the same composition and different properties, which is what forced structure into the notation."

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Fig 12 :92-93: under a symmetric reading, "k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges. Both wrong, in opposite directions, and only one is usually noticed."

An equivalence class of causal graphs is exactly this: same measured atoms, different arrangement, invisible in the distribution, decisive under intervention. Treating the class as one term is the undercharge; counting every spelling as a distinct discovered effect is the overcharge. Both are wrong in opposite directions.

**Refuter:** produce an instrument that discriminates among the members of the class. The spectrometer case in *The Hard Problem is About Source* is the precedent: "It was proven wrong not by argument, but by the arrival of a better instrument."

### F4 - Only an import moves the wall, and an intervention is an import

Fig 6 :14: "the only operator that moves the wall" (IMPORT).
Fig 6 :21: "MINT composes inside the closure and can never add an atom."
Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

No amount of additional observational data crosses the closure. What crosses is an atom supplied from a frame whose closure differs: a do-operation, a randomized assignment, an instrument, a second environment with a different mechanism. That is the import. It adds a distribution that was not derivable from the first.

Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." A non-identified effect and an effect needing only more samples look identical from inside the observational frame. Distinguishing them is the point of the inward/outward split (Fig 6 :29, outward casts the residual in effect terms and finds the frame that holds the atom).

**Refuter:** show a closed frame deriving a new atom by composition alone, or show an intervention that produces no distribution outside the original closure. Either breaks the import claim.

### F5 - The anchor must not update on the system

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."
Fig 2 :33: "The anchor must not update."
Fig 10 :24: "the ground does not decay, the channel does."

This is the sharpest figure statement of the intervention requirement. A sufficient dataset is not merely "large". Its setting mechanism must be outside the feedback loop: random assignment, a do-operation, or an instrument whose value is not a response to the system's state. If the purported intervention is itself driven by the confounder (an instrument that moves when pushed by the hidden cause), it is not an anchor and the identification collapses back to panel 1.

**Refuter:** exhibit a "randomized" treatment whose assignment probability depends on the hidden confounder. Then the ground moved and the anchor test fails.

### F6 - Independence, not sample size, is what makes agreement mean something

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."
Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

This governs the second and third items of the sufficient set. Two environments, two instruments, or two measurement modalities are only independent if they do not draw on the same hidden source. Ten datasets all contaminated by the same latent are one witness with ten names. The price of independence should scale with the cost of a wrong causal claim, which is high wherever intervention is expensive or impossible.

**Refuter:** show two frames with zero shared evidence whose agreement on a causal direction is still produced by a single hidden cause. That would break the independence definition.

### F7 - Feedback needs loop-resolving data, not a longer chain

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
Fig 12 :48: "A chain is the degenerate case: one bond type, no branching."

A static snapshot of a feedback system merges the two directions into one mutual-update state (Fig 2 :4-5, "collapse 1: mutual update (coherent drift)"). A chain vocabulary cannot close, so the data must supply what a chain cannot: time ordering that separates the two passes of the loop, or an intervention that severs one edge and holds it severed. The sign of the loop (Fig 12 :121) is exactly what a loop-resolving dataset must measure.

**Refuter:** show a single-time-slice dataset from which the sign of a cyclic influence is identified without any temporal or interventional asymmetry. If it can be done, the chain can close after all.

### F8 - Hidden variables are an enumeration and import problem, not a naming problem

Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."
Fig 11 :52: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."
Fig 6 :29: "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."
Fig 6 :34: "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."

A hidden common cause is a missing operand, not a name to be guessed. "A shape, not a name" (canonical figures README) governs it: the framework can say what the missing thing must do (stand in contact with both observed variables and be unaffected by the intervention) but cannot name it. What names it is a better instrument, an import from a frame that measures it, or a multi-environment design where its effect does not stay invariant.

**Refuter:** name the latent from the data alone and have a source-discriminating instrument confirm the reading. That would be a legitimate import, not a refutation, and would close this finding.

### F9 - Filters are not witnesses

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 8 :39: "So a search that finds nothing is never a proof of absence."

Sample size, fit, cross-validation score, and number of variables are filters for the budget. They decide what gets tried. They do not decide whether a direction is true. A large observational sample narrows the equivalence class and can never select a member without an anchor. This is the discipline that keeps the answer honest: the equivalence class is reported as a shape, and the ground decides.

**Refuter:** produce a verdict from a budget filter alone that survives an independent intervention. The intervention, not the filter, would be the witness.

### F10 - What survives: the shape of sufficient data

Kept separate per domain, never averaged.

| domain | verdict | mode |
|---|---|---|
| observational frame | insufficient in general. Yields a narrowed class, not a direction. Fig 12 :5, Fig 9 :32 | `general` structural |
| intervention frame | sufficient when the setting mechanism is an anchor that does not update (Fig 2 :29, :33) | `specified`, falsifiable |
| hidden-variable frame | sufficient only if the latent is measured by a discriminating instrument or imported via independent environments (Fig 11 :52, Fig 6 :23) | `specified`, ungrounded |
| verification frame | sufficient only with independence and a verifier that cannot author the claim (Fig 2 :40, Fig 10 :42) | `specified` |

The composite answer is a **four-part sufficient set**: (1) anchored interventional data, (2) independent evidence across frames that do not share the hidden source, (3) loop-resolving time or severed-edge data, (4) an imported atom that measures or replaces the latent, all checked by a seat that cannot reconstruct the claim.

---

## 3. Pre-registered refuter

Written before the conclusion, per the standing rule that "a falsifier written before the run is a design instrument."

The shape claim is refuted if any of the following holds:

1. A procedure returns the typed causal bond from a joint distribution alone, with no intervention, instrument, temporal asymmetry, or extra assumption (breaks F1 and F3).
2. An intervention whose setting depends on the hidden confounder still yields an identified effect (breaks F5, the anchor test).
3. Two frames known to share a single hidden source still provide independent corroboration of a direction (breaks F6).
4. A cyclic influence is identified from a single time slice with no interventional or temporal asymmetry (breaks F7).
5. A latent is named from the projection and confirmed by a source-discriminating instrument as the unique source (this would not refute the method but would move F8 from ungrounded to settled, and the claim would be revised accordingly).

Until one of these is run, no part of the answer may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with F1 and F4: the distribution records ingredients, not arrangement, and only an import moves the wall. That is the figure-grounded reason more observational data cannot be the answer.
2. State the four-part sufficient set with its refuter attached (F10). Do not present it as a recipe that guarantees identification in every system; it is a shape, and the ground decides each case.
3. Keep the union unbundled (F9, Fig 9 :54). Treating the compound of feedback and hidden confounding as one bigger dataset is how the intersection survives the lever.
4. Report the equivalence class honestly as "a kind of thing, never the answer itself" (Fig 9 :32), then name the specific instrument that would split it.
5. Send the generator (residual, shape, refuter), not a recording. Fig 10 :52: "Bring a characterised residual, never the source."

---

## 5. Canonical usage check

Read after sections 0 to 4 and used to govern how the figures may be cited:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` (local copy of the figures README): "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit: "what a missing thing would have to look like (a shape, not a name)", then stop at the limit of the instruments and record the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: the loop stops only when R stops arriving, which is either a perfect prediction or a closed channel, and from inside those look the same. This is why "no more residual" is not evidence of identification.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| F1 read as "causal direction is unidentifiable in principle" | **Narrowed.** It is unidentifiable from the joint distribution alone under no extra assumptions. An import makes it identifiable. The README's re-census rule applies. |
| F3 read as a claim that equivalence classes are never broken | **Retracted.** Spectrometer-style instruments break them. Fig 6 :29 and the source essay both support this. The claim is about what data are *sufficient*, not about eternal unknowability. |
| F8 read as a ban on naming latents | **Narrowed.** "A shape, not a name" governs a primitive not held in Γ. Naming a latent from a discriminating instrument is a provenanced import and is permitted. |
| Apparent strain Fig 8 :32 vs Fig 6 :27 | **Not strained.** Fig 8 :32 governs composition inside a closure; Fig 6 :27 governs the observational limit from inside. Same law, two scopes. |
| F9 "filters" applied to p-values | **Narrowed.** p-values are filters for the budget only; they become a verdict only when paired with an anchor. |

### Round trip note

The condensation from the verbatim figures to the four-part sufficient set is lossy. `R_T` is nonzero: what is dropped is the exact provenance condition on each import (source gate and shadow test, Fig 6 :12-13) and the requirement that the verifier be outside the frame. `11_audit.md` measures this gap qualitatively. Treating the four-part set as identical to the figures would be the dead-reckoning error Fig 4 :30 names: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

### Final verdict of the audit

The shape survives. Sufficient data are data with an anchor, with independence from the hidden source, with the loop resolved, and with the latent imported or measured, all reported as a lineage with a pre-registered refuter. Observational data alone are a filter, not a witness. Strains after re-census: none hidden; two named in `11_audit.md` and in `06_isomers_and_order.md`.
