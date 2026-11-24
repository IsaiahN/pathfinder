# Figure-grounded audit: the observer's role in deciding which physical states count as computational states

**Mode of this document: `specified`, not `grounded`.** It states what would have to be settled and what an answer would look like. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (opened 2026-11-23): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure text: local `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Canonical usage: local `FRAMEWORK/reference/FIGURES_README_canonical.md`, opened this session. Formula and mode rule: local `FRAMEWORK/figures/THE_FORMULA.md`, opened this session. World sources: seven opened on 2026-11-23, listed in `10_source_ledger.csv`.

---

## 0. The question under audit, stated in effect terms

> **Question (source line 97):** What role does the observer play in deciding which physical states count as computational states?

Restated as an effect: a physical system is described in physical terms (states, transitions, fields, energy). A computational description assigns states, transitions, inputs and outputs. A mapping between the two is proposed. The question asks what the observer contributes to that assignment and whether that contribution decides the outcome or only makes it sayable.

Two options and what each leads to:

- **Option A, observer decides.** The observer's choice of description is what makes some states computational and others not. Under a free mapping, every sufficiently complex system implements every computation. This is the position reported in the Stanford Encyclopedia of Philosophy entry: *"John Searle (1992) explicitly argues that whether a physical system implements a computation depends on how an observer interprets the system; therefore, for any sufficiently complex object and for any computation, the object can be described as implementing the computation."* If the observer's declaration is the final arbiter, the "convention" has become a verdict.
- **Option B, observer authors a convention and ranges it against a ground.** The observer supplies the mapping (which coarse-graining, which state types, which input and output labels). That mapping is a convention whose legitimacy is as a shared meaning, not as a measurement. Whether the physical system actually supports the computation is settled by a ground that does not update on what the observer thinks. The observer is seat-like: it makes the residual statable and selects the frame, but it does not author the verdict.

The audit decides between these from the figures, then checks the world literature as secondary corroboration.

---

## 1. Residual

R is the gap between a physical state description and a computational state description of the same system, together with the observer who proposes the mapping.

- **Arity.** The mapping is a typed relation between physical states (equivalence classes of microphysical states) and computational states. It is not a list of one kind of thing. In the world literature this is made explicit by Curtis-Trudel: *"implementation is a three-place relation between a physical system, computational model, and a labelling scheme."* Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
- **Symmetry.** Under permutation of the observer, does which states count change? This is the crux of the question. If the answer is yes without constraint, the mapping is a convention deciding an outcome. If the answer is constrained by the ground, then observer differences are differences of description that get settled separately by each frame ranging against an anchor. Fig 2 :31-32: *"Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."*
- **Scale.** Physical microphysical states to computational macro-states: a crossing across the membrane (Fig 4). Fig 4 :20: *"Only the actors, the currency and the anchor change."* The observer operates at the level of the description, not at the level of the microphysics, and the transform between them is lossy.

**Binding the sought-for shape as an ordinary term** (Formula, step "Direction"): an answer would look like an assignment of an office to the observer (which operations it may perform) and an assignment of an anchor to the question (what settles which states count). It would state which of these the observer may do: declare a convention, make a residual statable, select a frame, build an instrument, or decide the verdict. Until this is written down, the preference is unbound and predicts nothing. It is now bound and refusable by the test in §6.

---

## 2. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1, physical ground** | physical states, microphysical states, transitions, fields, energy | space, time, energy (Fig 13 states), physical prediction | a measurement or experiment that does not move when a frame pushes on it (Fig 2 :29-30) | domain, anchor nameable |
| **D2, computational description** | computational states, symbols, transition function, labelling scheme or coarse-graining | description length, bits, the typed bond (Fig 12 price) | correctness check of a run, a proof or a trace; legitimate but *"only an instrument"* for questions not constitutively about it (Fig 2 :37-38) | domain, anchor nameable but bounded |
| **D3, observer / seat** | the describing agent, the frame that assigns syntax, the instrument builder | conventions, declared meanings, labels, prior weighting `w` | the ground it ranges against (Fig 10 :8-9, Fig 2 :24-27); it does not author the verdict (Fig 10 :43-44) | domain, anchor nameable |

**Partition or union?** This is a **union compound**, not one hard question. The observer's declarative act (D3) and the physical implementation question (D1/D2) are two conditions that can be satisfied separately. Fig 9 :57-58: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."* Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* A single lever (saying "the observer decides") clears the region where only the convention condition holds and leaves the intersection standing, because the ground condition still binds.

**Dependency order (Fig 3).** Perception of the physical states comes first (Fig 3 :4-5); the vocabulary for what states afford comes second (Fig 3 :6-7); the objective, stated in the observer's own terms, comes third (Fig 3 :9-10); only then can the mapping be planned and settled. Fig 3 :19-20: *"Optimising a link that already works cannot rescue one that does not. The chain is ordered by dependency, not by importance."* So a claim about which states count cannot be settled at the objective link if the vocabulary link has no instrument.

Strain test applied during the census: my first pass tried to treat D2 (computational description) as having the same kind of anchor as D1. Re-census shows Fig 2 :36-38 limits that: *"An anchor is legitimate when the question is constitutively about it."* A correctness check is the right anchor for "is this code correct" but *"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* The question here is not constitutively about the code's correctness but about which physical states count, so the D2 anchor cannot decide D1. Strain dissolved by re-census, not by softening the reading.

---

## 3. Figure census (read and quoted before concluding)

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | *"The residual is indexed by object slot, not aggregated."* | which states count must be asked per slot, not averaged over the system |
| **2 The Ground** | anchor must not update; triangulation not negotiation | the observer's declaration moves with the observer, so it is not the anchor |
| **3 Dependency Chain** | a reading below the break is a reading of nothing | vocabulary before objective before settlement |
| **4 The Membrane** | only methods cross up, head starts down | the physical-to-computational transform is lossy, so the round trip must be measured |
| **5 Mint Pipeline** | three guards as a product; direction of question is outside the pipeline | a sought-for shape must be bound as an ordinary term before it can be refused |
| **6 Closure / Reachability** | import is the only operator that moves the wall | a new state assignment is a new description, not a new physical atom |
| **7 Room Chain** | *"A room's agreement is variation, not a verdict"* | many observers agreeing cannot anchor the mapping |
| **8 Union Surplus** | *"Residual first, frame second."* | describe the mapping gap before choosing a descriptive frame |
| **9 Leave / Arrive** | union vs partition; describe before looking | this residual is a union compound and must be unbundled |
| **10 Ground Maintainer** | *"a declared meaning is not a grounded one"*; seat authors conventions, not verdicts | the observer is seat-like: declares the convention, does not decide the outcome |
| **11 The Habitat** | capability is agent and habitat; enumerate, never compose | which states count is a property of system plus descriptive frame plus ground contact |
| **12 The Bond** | the bond carries information the operands do not; *"The arrangement is the substance."* | the mapping is a typed relation, not a list of physical states |
| **13 Minimum Viable Set** | states name what is measured; structures decide what the measurement means | the observer's choice of state versus structure changes the meaning of the reading |
| **Operators table** | negation refuses a claim; a vocabulary without it can only accumulate | a wrong mapping needs a refusal, not a new mapping piled on top |
| **Symbols table** | the ground is the anchor and does not change because of what any frame thinks | the observer cannot be the ground |

---

## 4. Findings

### F1  -  The question is a union compound, not one question (decisive for the census)

Fig 9 :54-58:

> **"And when the split lands on a union rather than a partition, unbundle before you search again."**
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
> **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**

The two conditions are: (i) which mapping the observer declares, and (ii) whether the physical system actually supports that mapping. Collapsing them produces the impression that the observer decides the physical facts. Keeping them separate produces the real question: the observer authors (i); the ground settles (ii). Verdict: `triangulated` across Fig 9 :54-58 and Fig 2 :24-27 (anchor does not update).

### F2  -  The observer's declaration is a convention, not an anchor

Fig 10 :18: **"a declared meaning is not a grounded one"**. Fig 10 :49: **"Declaring a meaning does not ground it."** Fig 2 :29-30:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."**

An observer's assignment of computational states moves when the observer is changed, retrained or replaced. By the anchor test it is not an anchor. Fig 13 :16 says of states **"it names what is being measured"** and Fig 13 :26 says of structures **"it decides what the measurement would mean."** The observer's choice of description therefore changes what the measurement means, which is exactly why it cannot also be what settles the measurement. Verdict: `triangulated` across Fig 10 :18/:49 and Fig 2 :29-30.

### F3  -  The observer's legitimate role: make the residual statable and author the convention

Fig 10 :16-17:

> **"the convention does not fix the bug"**
> **"it makes the bug statable"**

Fig 2 :41: **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it."** So the observer's mapping is not worthless. It is the shared meaning that lets frames range against the ground at all. Without a declared convention there is no residual to measure and nothing to check. Fig 10 :52: **"Bring a characterised residual, never the source."** The observer brings the characterised mapping, not a verdict. Verdict: `triangulated` across Fig 10 :16-17 and Fig 2 :41.

### F4  -  The forbidden collapse: a convention that decides an outcome

Fig 10 :47: **"a convention that decides an outcome has stopped being one"**. Fig 10 :43-44: **"A verifier that can reconstruct the claim cannot verify it. Soundness requires the checker to be unable to produce what it is checking."**

If the observer's choice of mapping settles which states count, then the observer has become the author of the verdict it is supposed to help check. That is the named failure: a convention that decides an outcome. It is also the world's *interpretivist pancomputationalism*, which the SEP entry names: *"If whether a system performs a given computation depends solely or primarily on how the system is perceived, as opposed to objective fact, then it seems that everything computes because everything may be seen as computing (Searle 1992)."* Verdict: `triangulated` across Fig 10 :47/:43-44 and the anchor test in Fig 2 :29-30.

### F5  -  The ground settles; frames range against it

Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."** Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :36-38:

> **"An anchor is legitimate when the question is constitutively about it."**
> **"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."**

For "which physical states count as computational", the relevant ground is a measurement or experiment on the system (a counter, a trace, a controlled intervention), not agreement among observers. This is where the world literature gives the sharpest corroboration. Chrisley: *"That an object is interpreted by someone as being C is a deeply observer-relative fact; that an object is interpretable by someone as being C need not be observer-relative, if enough constraints are put on the conditions of interpretation."* Curtis-Trudel: *"in engineering practice this decision is guided by a variety of considerations about how to best build devices that meet our needs."* These are secondary witnesses for the same shape: constraints are not supplied by the observer's say-so. Verdict: `triangulated` across Fig 2 :45/:35/:36-38 and Fig 10 :49.

### F6  -  The observer selects the frame; describe the residual first

Fig 8 :53: **"Residual first, frame second."** Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**. Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause."**

The observer does not pick a computational description first and then find states to fit it. It describes the residual in effect terms (which transitions failed to resolve, which input and output behaviour needs explaining), then looks for the frame whose closure predicts that shape. Fig 8 :53 and Fig 9 :27-28 are two low-overlap statements of one rule: the observer's frame selection is downstream of the residual. Verdict: `triangulated` (search discipline vs leave/arrive discipline, different figures).

### F7  -  The mapping is a typed bond, not a list of states

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** Fig 12 :94: **"The arrangement is the substance."** Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Which physical states count is not settled by enumerating the physical states. Two systems with the same physical state inventory can implement different computations under different typed relations, just as two molecules with the same ingredients can be different substances. The observer authors the bond (the coarse-graining and the state assignment); the system supplies the atoms; the ground settles whether the bond holds. Verdict: `single-source` for the bond definition (Fig 12), corroborated in the world by Searle's *"Syntax, in short, is not intrinsic to physics"* and by Curtis-Trudel's grouping and assignment functions.

### F8  -  Computation is a contact property, not an observer property and not a system property alone

Fig 11 :36: **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there."** Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone."** Fig 11 :48: **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."**

The word "computational" can be a label applied after the fact to a system that met its ground, or it can be the name of a working practice where a seat builds instruments and enumerates the habitat. In neither case is it a property of the observer alone. The observer is part of the contact condition, like the habitat in Fig 11, not the seat that decides what the ground returns. Verdict: `triangulated` across Fig 11 :36/:39/:48 and Fig 10 :43-44.

### F9  -  What survives, with mode attached

| claim | mode | figure |
|---|---|---|
| The question is a union compound of a convention condition and a ground condition | `general` (structural) | Fig 9 :54-58 |
| The observer's declaration is a convention and cannot be the anchor | `specified`, falsifiable | Fig 10 :18/:49; Fig 2 :29-30 |
| The observer's legitimate work is to make the residual statable, then range the frame against the ground | `general` (seat rule) | Fig 10 :16-17; Fig 2 :45 |
| If the declaration decides which states count, the convention has stopped being a convention | `specified`, falsifiable | Fig 10 :47 |
| The mapping is a typed bond; which states count depends on the arrangement, not the inventory | `specified` | Fig 12 :5/:94 |
| Which specific states, in a given system, count | `gap` from the figures; needs an instrument | Fig 11 :48; Fig 2 :29-30 |

The last row is a **gap**, honestly recorded. Fig 9 :32: **"you get a kind of thing, never the answer itself."** The figures give the office of the observer, not the state list for any particular system.

---

## 5. Strain test and re-census

Two strains were found and resolved by re-census, not by forcing a line:

1. **Fig 2 :37 could be misread as making the observer the anchor.** The line says human judgment is the right anchor for "is this a good answer for a person" because the question is about people. Re-census: the present question is not constitutively about human judgment; it is about which physical states count. The same line immediately says the judgment is *"only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* So human judgment is an instrument here, not the anchor. Strain dissolved.
2. **Fig 10 :47 first looked like a direct answer.** I initially read "a convention that decides an outcome has stopped being one" as if it settled the observer's role by itself. Re-census: it governs the **failure mode** (Option A), not the legitimate role. The legitimate role comes from Fig 10 :16-17 and Fig 2 :41. Strain dissolved by giving each line its own quantity.

After re-census: no live strain in the figure reading. The one open item is the world-facing one (which states in a given system), and it is recorded as a gap, not smoothed over. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

---

## 6. Pre-registered refuter

Written before the conclusion, per the standing rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. An observer's assignment of computational states can be shown to be a legitimate anchor, that is, it does not move when the observer is pushed on and it settles the question without ranging against a measurement. This breaks Fig 2 :29-30 and Fig 10 :49.
2. A frame can certify its own state assignment without a ground that does not update on it. This breaks Fig 10 :42 and Fig 2 :45.
3. The union reading fails: the convention condition and the ground condition cannot be separated and are one question after all. This breaks Fig 9 :54-58.
4. A world source shows that the mapping is fixed by the physical state inventory alone with no descriptive convention at all, in a way the Figures cannot accommodate. This would send the census back to D2.

If any fires, the corresponding finding is withdrawn. Until one is run, no part of this is labelled `grounded`.

---

## 7. Recommendation

1. Lead with F1 and F2: the question is two conditions and the observer's declaration is a convention. This is the part the figures decide.
2. State the mode on every substantive claim (`01`, `07`, `08`, `09`).
3. Do not answer "which states count" for any particular system. That row is a gap. Give the shape (a typed bond, declared by the observer, settled at the ground) and the instrument that would close it.
4. Use the public venues in `03_public_contact_points.csv` and ask for a refutation, not belief. Fig 7 :35 and Fig 2 :40.
5. Send the generator (the residual, the census and the refuter), not a recording of the conclusion. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*

---

## 8. Canonical usage check

Read this session after the findings: local `FIGURES_README_canonical.md`, which says of the figures *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also states the limit directly: the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and *"Indiscernibility is not identity."* That is exactly the F9 gap: the office of the observer is given; the specific state list is not.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "The observer decides which states count" as a candidate answer | **Refused.** It is the failure mode named by Fig 10 :47, not the answer. Kept visible as Option A in §0. |
| Fig 10 :47 treated as the direct answer | **Retracted as applied.** It governs the collapse, not the legitimate role (§5). |
| Fig 2 :37 read as making human judgment the anchor here | **Retracted at re-census.** It is an instrument for this question, because the question is not constitutively about human judgment (§5). |
| "Which states count" answered by the figures | **Refused.** Canonical usage returns a shape, not a name. Recorded as `gap` in F9. |
| Convention has no legitimate role | **Refused.** Fig 2 :41 makes agreement about a shared meaning the product of a convention; Fig 10 :16-17 makes the convention that which makes the bug statable. |
| Union compound reading | **Confirmed.** Fig 9 :54-58 is explicit and survives re-census. |

---

## 9. Updated verdict

The figures decide the **office** of the observer: it authors the convention that maps physical states to computational states, it makes the residual statable, it selects the frame after describing the residual, and it ranges that frame against a ground it cannot author. The observer does **not** decide which states count in the grounded sense. If its declaration does settle the outcome, the convention has stopped being a convention and has become a verdict (Fig 10 :47), which is the named failure. The specific list of states for any particular system is a `gap`: the figures return a shape, not a name, and only an instrument that discriminates among candidate mappings can close it. Mode `specified`, ungrounded, `candidate`. No strain remains after re-census; the one open item is the instrument gap, stated plainly.
