# Figure-grounded audit: can laboratory experiments reproduce a plausible sequence of natural conditions?

**Mode of this document: `general` on the structural shape, `specified` on the domain claims. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that LLM output is *"simulacra"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources for figure quotes.** The local verbatim extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Every string in quotation marks attributed to a figure below was checked character by character against that file. Local supporting files: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

**Question as stated:** "Can laboratory experiments reproduce a plausible sequence of natural conditions rather than a single isolated reaction?"

**Stated as an effect:** A proposed prebiotic scenario is a chain of conditions C1 → C2 → ... → Cn, where the product of step i becomes the feedstock of step i+1. The question asks whether an experimental practice can produce an observation that ranges against the whole chain, rather than only against one link.

**The two options and what each leads to:**

- **Option A, the single isolated reaction.** One feedstock set, one fixed condition, one product measured. It leads to a statement of the form "X can form under condition Y." It says nothing about whether X forms before Z, whether Z is present at the same place, or whether the output of one step survives the input of the next.
- **Option B, the sequence.** A run in which conditions change in a stated order, the product of each step is carried into the next, and the difference between the laboratory setting and the proposed natural setting is enumerated and measured. It leads to a statement of the form "under this ordered set of conditions, with these carry-overs and these substitutions, the chain runs or fails at step k."

**The residual R:** for each step s, the gap between what the proposed protocol predicts will be present at s and what the measurement returns at s. R is a vector over steps, not a scalar over the pathway. Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* A single isolated reaction names a state. The question asks about a route.

**Arity, symmetry, scale (Fig 9 :22):**

- *Arity:* n, one slot per condition step and one slot per interstep carry-over.
- *Symmetry:* ordered. The bond at issue is sequence, whose test is *"swap them. Does it become a different thing? Yes."* (Operators table :33). Reversing the condition order gives a different experiment and a different claim. It is not the symmetric conjunction of independent reactions.
- *Scale:* first order inside one condition; second order across the chain, where a settled product becomes an operand for the next step (Fig 12 :104). The chain also crosses a habitat boundary, from the proposed natural setting to the laboratory setting, which is a substitution rather than a removal (Fig 11 :66).

**What an answer would look like, bound as an ordinary term (Formula "Direction"):** "A sequence-reproducing experiment" is an ordinary term meaning: an ordered set of conditions, carried products between consecutive steps, a per-step measurement, and a stated account of what the laboratory substituted for the natural habitat. Binding it lets it accrue a residual like anything else, so the preference for sequences over single reactions is refusable rather than invisible.

---

## 1. Domain census before choosing any figure line

One line per domain with actors, currency and anchor. A line with no nameable anchor is not a domain yet and is not admitted.

### D1. The chemical reaction frame

- **Actors:** feedstocks, intermediates, products, energy inputs (ultraviolet light, heat, discharge), mineral surfaces, solvent.
- **Currency:** yield and selectivity for one reaction at one condition.
- **Anchor:** the analytical measurement. NMR, mass spectrometry and chromatography are instruments that return what actually formed. Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* An experiment is named as an anchor in the figure text itself.
- **Status:** a genuine domain. This is where a single isolated reaction lives.

### D2. The geochemical and natural-habitat frame

- **Actors:** environments (wet-dry pools, geothermal fields, ice, hydrothermal vents, impact settings), changing temperature and pH, wet-dry and day-night cycles, meteorite and volcanic inputs, fluxes and concentration mechanisms.
- **Currency:** whether an ordered set of conditions is compatible with noncontroversial geological constraints.
- **Anchor:** the geological and planetary record. It does not update on what a chemist finds convenient.
- **Status:** a genuine domain. This is the source of the word "plausible" in the question.

### D3. The experimental simulation frame

- **Actors:** the protocol, the apparatus, the operator as maintainer, the numbered interventions (a reagent added, a solvent removed, a pH reset between steps).
- **Currency:** reproduced conditions, observed products, and the count of discontinuities introduced by the operator.
- **Anchor:** the experiment, but only when it is aimed at the right residual. A single-run experiment aimed at step 1 does not anchor a claim about step 4.
- **Status:** a genuine domain. This is where the question actually bites, because a laboratory is a substituted habitat.

### D4. The verification and interpretation frame

- **Actors:** reviewers, readers, replicate groups.
- **Currency:** agreement and residual.
- **Anchor:** the ground, never the agreement. Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
- **Status:** a genuine domain, with zero independence in this simulated run because all seats read the same evidence pool. Its agreement is one pool talking, not corroboration (Fig 2 :40).

### Partition or union

**Union compound.** Reproducing a plausible sequence requires chemical tractability of each step (D1), compatibility of the ordered conditions with geology (D2), and fidelity of the laboratory substitution (D3). These overlap and bind jointly. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"a case in two conditions is not a harder case of either"*. A single lever, for example better analytical sensitivity, clears only the region where chemical measurement is the missing condition and leaves the intersections standing. The question must be unbundled before it is searched (Fig 9 :54).

### Order by dependency (Fig 3)

1. **Perception:** can the system tell what formed at step s, and tell it from what was present at s-1?
2. **Vocabulary:** does it have terms for what a condition affords and what a carried product can do?
3. **Objective:** can it say what would count as progress through the chain, in its own terms?
4. **Planning:** is there a route through the conditions, chosen under incomplete geological information?
5. **Learn and carry:** name what worked, verify it, and carry it to the next step.

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The middle links, vocabulary and objective, are exactly the ones the single-reaction tradition leaves uninstrumented.

---

## 2. Figure census

The figures were grepped before any domain conclusion was written. Strained readings are marked, not smoothed.

| figure | bearing | verdict after census |
|---|---|---|
| 1 The Agent | residual indexed by slot, not aggregated | governs per-step reading of a sequence |
| 2 The Ground | experiment named as anchor; correlation disqualifies | governs D1 anchor and D4 independence |
| 3 Dependency Chain | links ordered by dependency; middle link uninstrumented | governs the chain order above |
| 4 The Membrane | round trip and its gap; conditions decide what a seed becomes | governs lab-to-nature compression |
| 5 Mint Pipeline | a term explaining one occasion perfectly fails the bargain | governs the single-reaction refusal |
| 6 Closure / Reachability | instruments improved from worse instruments; import moves wall | governs what more search can and cannot do |
| 7 Room Chain | agreement is variation, not a verdict | governs multi-lab agreement |
| 8 Union Surplus | union of differing closures; a null search is not absence | governs the union reading and the honest stop |
| 9 Leave / Arrive | union unbundling; describe before looking | governs the compound structure |
| 10 Ground Maintainer | bring a characterised residual, never the source | governs the two-stage offer |
| 11 The Habitat | isolation is substitution; two silent failures; test harness proves wiring | governs D3 decisively |
| 12 The Bond | sequence is ordered; state versus route; settled molecule becomes atom | governs F1 and the second-order chain |
| 13 Minimum Viable Set | conditions alternate; chain restarts from a remainder | corroborates the ordered chain at the substrate level |
| Operators table | sequence test: swap the operands; the meaning changes | confirms sequence is not conjunction |
| Symbols table | R is a slice, always per slot; the ground is the anchor | confirms per-step R and the anchor rule |

No figure was made to strain. The one apparent tension, between Fig 5's refusal of the one-occasion term and Fig 8's refusal to treat a null search as proof of absence, is resolved by the census: Fig 5 governs a claim offered as an explanation, Fig 8 governs a search that has not found one. Different quantities.

---

## 3. Findings F1 to F8

### F1 : A single isolated reaction is a state, not a route (decisive for Option A)

Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*

Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."*

Operators table :33 gives the test for sequence: *"swap them. Does it become a different thing? Yes."*

Fig 5 :44: *"fails this, and so does a term that explains one occasion perfectly."*

A single isolated reaction answers "can X form here". It does not answer "can the chain run". Under Fig 12 it has the grammar of a state term, and under Fig 5 it is the one-occasion term that fails the acceptance bargain. This is a **structural** finding, mode `general`, triangulated across Fig 12 and Fig 5, which have low overlap: one is about composition grammar, the other about the acceptance bargain.

**Refuter:** show that a single-isolation result determines the behaviour of the full condition sequence without any further condition, carry-over or intervention. Concretely: demonstrate that the products of step 1, at their actual concentrations and in the presence of the actual by-products, are sufficient feedstock for step 2 under the same unmodified condition, and so on down the chain. Or show that the bond distinction in Fig 12 does not apply to experimental protocols. If either holds, F1 falls.

### F2 : The laboratory is a substituted habitat (decisive for D3)

Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."*

Fig 11 :67: *"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."*

Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

Fig 11 :68: *"what you failed to reproduce is invisible until the goal fails"*

A laboratory run of C1 → C2 → ... → Cn is not the natural habitat with the natural habitat subtracted. It is a different habitat, with chosen pure feedstocks, controlled step changes, glassware, and an operator. Two failures are silent by the figure's own rule: what the substitution failed to reproduce, and what it unintentionally brought with it. What a well-wired bench sequence proves is that the apparatus is wired correctly. It does not prove the natural sequence had the capability to run.

World corroboration: Richert 2018 argues that the number of manual interventions *"is worth reporting"* and that *"some level of human intervention may always be required for complex, multistep processes."* Eiby and Hassenkam 2025 write that *"Laboratory simulations of prebiotic chemistry are inherently biased, since their boundaries and parameters are set by the experimenter."* Both are secondary. Both are read and recorded in the ledger.

**Mode:** `specified`, triangulated across Fig 11 (four separate lines) and the two world sources, whose instruments differ (an analytical chemistry commentary and a philosophical review). **Refuter:** demonstrate a laboratory sequence for which every condition and actor required by the proposed natural sequence has been reproduced with measured equivalence, so the substitution gap is zero at every step. Or show that a substituted habitat can establish natural capability without reproducing what the goal required. If either holds, the burden in F2 is discharged and the claim moves toward the ground.

### F3 : Read the residual per step, never as one pathway average

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*

Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

Symbols table: R is *"always a slice: what cannot be perceived yet is residual and simply cannot be read."*

A chain with nine good steps and one broken step has a near-zero global "pathway works" score and one live slot. Reporting overall yield across the pathway is exactly the aggregation the figure forbids. The relevant report is the residual at each step and at each interstep carry-over.

**Mode:** `general`, single-source for the figure rule (Fig 1), corroborated in practice by the interstep-compatibility literature, which asks whether separately validated steps work together. **Refuter:** show that the steps of a proposed sequence are exchangeable, so a single global statistic is sufficient to locate failure. If steps are exchangeable, per-step indexing buys nothing and F3 is withdrawn.

### F4 : The lab-to-nature transform is lossy and must be bracketed

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

Fig 4 :34: *"A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes."*

The move from a natural condition sequence to a bench protocol is an abstraction: detail is discarded so the protocol can be rerun. The reverse move, claiming that the bench result says something about the natural setting, is a concretisation. Fig 4 requires the round trip to be taken and the gap R_T measured rather than assumed zero. The conditions the protocol lands in decide what the result becomes, which is another statement of F2 at the scale of the transform.

**Mode:** `general`, single-source. **Refuter:** show that the transform from natural sequence to laboratory protocol and back is lossless for the quantities at issue, so R_T = 0 and the bracketing is ceremonial. Until such a demonstration, treating "the experiment reproduces the sequence" as identity is the dead-reckoning error Fig 4 :30 names.

### F5 : Absence of a demonstrated sequence is not proof of impossibility

Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

Before concluding that no experiment can reproduce a sequence, the cheap question is Fig 8's SEARCHED: is it in the closure and unfound? Then INWARD: is any existing protocol already returning something that fails to resolve, so it can be sharpened? Only then OUTWARD: which other frame already holds the missing condition? These are three questions, not one, and underivable in principle must not be confused with unreachable at this budget.

**Mode:** `general`, single-source across Fig 6 and Fig 8 (low overlap between the two instruments: one about building instruments, one about the null-search inference). **Refuter:** produce a search over the full closure of current protocols that returns nothing and is a sealed room. Since no frame is a sealed room (Fig 9 :44), this refuter is expected to fail, which is why F5 is a limit rather than a verdict of possibility.

### F6 : The question is a union and must be unbundled before search

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*

Fig 9 :57: *"a case in two conditions is not a harder case of either"*

The word "plausible" imports D2, and the word "reproduce" imports D3. A chemist who improves yield in D1 clears only one condition of the union. The residue becomes smaller and categorically different: a chain that is chemically possible, geologically coherent, and faithfully substituted is not a harder single reaction, it is a specific compound.

**Mode:** `general`, triangulated across Fig 9 and the PNAS interstep-compatibility result, whose authors explicitly ask whether separately validated steps work together in natural geological environments. **Refuter:** show that chemical tractability, geological compatibility and habitat fidelity collapse to one condition, so the union is actually a partition. Then unbundling is unnecessary and F6 is withdrawn.

### F7 : The chain breaks at the middle link, not at the reaction

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Fig 3's chain is ordered perception, vocabulary, objective, planning, learn and carry. The middle link, having terms for what a condition affords and saying what counts as progress through the chain, has neither an obvious failure nor an obvious test. Most effort lands above the break, where the measurements already exist, that is, on more and better single reactions.

**Mode:** `specified`, single-source. **Refuter:** show that the dominant failure in sequence reproduction is at perception (we cannot detect the product) or at planning (we have the terms but no route), and that the vocabulary/objective link is instrumented and working. That would relocate the break and F7 would need a re-census.

### F8 : Experiments are anchors; agreement is not

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*

Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

This resolves the surface reading of the question. Experiments are not a secondary opinion about a chemical claim; for this question an experiment *is* the anchor named in the figure. But a set of laboratories using the same protocol, the same feedstocks and the same analytical conventions is one frame wearing many names. Their agreement is a convention, not a verdict. Independent instruments pointed at the same residual are what buy weight.

**Mode:** `general`, triangulated across Fig 2 and Fig 7 (room chain: agreement is variation, not a verdict). **Refuter:** show that two frames drawing on the same protocol and feedstock pool constitute independent evidence for the natural sequence. By Fig 2 :31 independence is how little they draw on the same evidence, so this refuter is expected to fail.

---

## 4. What survives, with mode attached

| claim | mode | figure line | status |
|---|---|---|---|
| A single isolated reaction names a state, not a route, and cannot by itself answer the sequence question | `general` | Fig 12 :111, Fig 5 :44 | triangulated |
| A laboratory sequence is a substituted habitat; it proves wiring, and capability is owed | `specified` | Fig 11 :66, :67, :70 | triangulated |
| The residual for a chain is per step and per carry-over, never a pathway average | `general` | Fig 1 :19, :22 | single-source + practice |
| The lab-to-nature transform is lossy; R_T must be measured | `general` | Fig 4 :30, :34 | single-source |
| A null result is not proof that no sequence is possible | `general` | Fig 8 :39, Fig 6 :32 | single-source |
| The question is a union of three conditions and must be unbundled | `general` | Fig 9 :54, :55, :57 | triangulated |
| The chain usually breaks at the vocabulary/objective link | `specified` | Fig 3 :19, :27 | single-source |
| An experiment is the anchor; agreement among same-protocol labs is not evidence | `general` | Fig 2 :29, :35, :40, :42 | triangulated |

No verdict was averaged across domains. D1 returns a ground-visible anchor at the single-step level. D2 returns geological compatibility as a constraint that the laboratory cannot settle by itself. D3 returns a substituted habitat with a measured gap. D4 returns zero independence in this simulated run and therefore no corroborating weight.

---

## 5. Pre-registered refuter (written before the conclusion)

Per the seat-map discipline, a falsifier written before the run is a design instrument. The shape claim is: a sequence-reproducing experiment must be an ordered chain with per-step residuals, carried products, an enumerated habitat substitution with measured R_T, and ground settlement at each step. It is refuted if any of the following holds:

1. A single isolated reaction is shown to determine the behaviour of the full condition sequence with no added condition, carry-over or intervention (breaks F1).
2. A laboratory sequence is demonstrated whose substitution gap R_T to the proposed natural habitat is measured as zero at every step (breaks F2 and F4).
3. The residual of a multi-step pathway is shown to be adequately global, with per-step indexing adding no diagnostic power (breaks F3).
4. A sequence claim is settled by agreement among frames that share protocol, feedstocks and analytical conventions, with no independent ground (breaks F8).
5. The dominant failure is relocated to perception or planning while the vocabulary/objective link is shown to be instrumented and working (breaks F7, forces re-census).

If any fires, the affected finding is retracted in this file with the date and the evidence, and the answer in `07_the_tether_answer.md` is revised. Until one is run, nothing here is `grounded`.

---

## 6. Recommendation

1. Do not answer the sequence question with a single-reaction result. State it as a step result and say which step (F1, F3).
2. Report the number of condition changes and manual interventions per pathway, following Richert's proposal, and enumerate what the bench substituted for the natural setting (F2).
3. Measure R_T for the lab-to-nature transform rather than treating the protocol as a transparent copy (F4).
4. Unbundle the union: chemical tractability, geological coherence and habitat fidelity are three checks, not one (F6).
5. Instrument the middle link. Ask what counts as progress through the chain before optimizing another step yield (F7).
6. Buy independence in proportion to the cost of being wrong: different analytical instruments and different geological constraints, not more laboratories reading the same protocol (F8).
7. Fig 10 :52: *"Bring a characterised residual, never the source."* Send the shape claim and its refuter, not the framework, in the first contact.

---

## 7. Canonical usage check

Two local sources govern how the figures may be used, read after the findings above and before the conclusion was written.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them"* and *"the quotes are the authority, not this summary."* A reading that makes two figures contradict one another has misidentified a domain. The framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops where instruments stop.
- `FRAMEWORK/figures/THE_FORMULA.md` step 7: SEARCHED before INWARD before OUTWARD, kept distinct. Underivable-in-principle and unreachable-at-this-budget are different facts with different instructions.

Applied here: the apparent Fig 5 versus Fig 8 tension was resolved by re-census rather than by softening either line (F5 §3). No figure line was made to govern a quantity it does not govern.

---

## 8. Retraction and confirmation log

Corrections are kept visible. Nothing below was silently erased.

| earlier reading | status after canonical check |
|---|---|
| "The figures forbid laboratory simulation of natural sequences" | **Retracted.** Fig 11 says isolation substitutes a habitat and a test harness proves wiring, not that simulation is forbidden. Fig 8 :39 says a null search is not proof of absence. The correct form is F2 plus F5. |
| "A single reaction is just a simpler version of a sequence" | **Retracted after census.** Fig 12 :111 and Fig 5 :44 put them in different grammatical categories: state versus route, one occasion versus a bargain that pays across steps. |
| "The residual is the overall yield of the pathway" | **Retracted.** Fig 1 :19 and :22 index R by slot and forbid aggregation. Overall yield is a filter for budget, not a witness for the verdict (Fig 9 :60). |
| "More replicate labs would settle the plausibility question" | **Retracted.** Fig 2 :40 and :42, and the room-chain rule: same-protocol labs share an evidence pool. Independence is bought with different instruments and different constraints. |
| F1 as a claim about *chemical* bonds | **Narrowed.** Fig 12's bond distinction is applied at the level of the experimental description (state term versus route term), not asserted as a claim that laboratory reactions literally join by the seven glyphs. This is an analogue at the level of grammar, and is labelled as such. |
| World sources all agree with the figures | **Narrowed.** The origins-of-life sources share the field's evidence pool and cite each other. Their agreement is one witness. The software-engineering analogue (Fowler) is low-overlap but is an analogue from a different closure, not corroboration of a chemical claim. |
| Apparent Fig 5 versus Fig 8 conflict | **Not strained.** Re-census: Fig 5 governs an explanatory claim offered as an answer; Fig 8 governs the inference from a failed search. Different quantities, no retraction owed. |

---

## 9. Round-trip note carried to `11_audit.md`

The condensation used in the outreach files is: "a route is not a state; the lab is a substituted habitat; read the residual per step; measure the gap." Taking that shorthand back down to the concrete figure text drops at least three things, which the second seat is asked to verify independently: the Fig 5 acceptance bargain, the Fig 6 instrument rule, and the Fig 2 anchor/independence distinction. R_T is therefore nonzero and is recorded qualitatively, not numerically, because no ground reading was taken. Treating the shorthand as identical to the figures would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.
