# Figure-grounded audit: causal relationship versus well-predicting correlation

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured in a particular case. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, re-opened this session): *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The canonical verbatim extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `THE_FORMULA.md`, the Operators and Symbols tables, the amended Seat Map, the figures README, and the essays and public causal-inference sources recorded in `10_source_ledger.csv`. All `Fig N :line` citations are checked against the verbatim extract, not a summary.

---

## 0. The residual, stated in effect terms

A system holds a relation between two tracked slots, A and B. That relation **predicts well**: on the data the system has seen, plugging A into its library returns an observation of B with a small residual. The system is now asked to decide what to do.

- **Option A.** Compose over the relation as if it were causal: set A and expect B to change.
- **Option B.** Refuse to compose over it until a change of contact has settled whether B actually responds to A.

What each leads to. A gives a cheap, immediate plan, but if the co-variation comes from a hidden shared source, the plan moves A and leaves B unchanged; the well-predicting relation was a reading of the channel, not of the ground. B costs an intervention, but it produces a relation that can be composed over at the next level, because the ground paid for it.

The residual R is therefore not "prediction error on a test set." It is the **persistent, non-trending gap between what the predictor says will happen under A and what the ground returns when A is actually set**. Fig 9 :22 names the description quantities: *"arity · symmetry · scale"*. Arity is two or more slots plus possible unmeasured common causes. Symmetry is the key discriminator, developed in F1. Scale is one associative frame versus the contact with the ground where an intervention lands.

R is indexed per slot, never averaged (Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*). A relation can be live in one subpopulation and invisible in a global accuracy score.

---

## 1. Domain census (before choosing any figure line)

R by arity, symmetry, scale. One line per domain giving actors, currency, anchor. No nameable anchor means it is not yet a domain. Partition or union. Order by dependency (Fig 3).

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| D1, the associative or predictive frame | variables A and B, the fitted predictor, held-out observations | predictive accuracy and compression | none inside the frame; it borrows an anchor it does not touch | **no** (defective domain, see F3) |
| D2, the intervention or habitat frame | the setting act, the instrument, A as manipulated slot, B as outcome | change in B when A is set | the experiment, the measurement, the patient outcome | **yes** (Fig 2 :29) |
| D3, the verification frame | expert readers, rival frames, the record | residuals and independence | the ground, never agreement | **yes** |

- **D1 is a frame but not a settled domain.** Its actors and currency are present; its anchor is absent. It borrows "accuracy" from a ground it never touches. That is the defect, not an oversight. Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* An accuracy figure is not one of these.
- **Partition or union.** "Predicts well" and "would change under a setting" are two conditions, so this is a **union compound**, not one hard question. The Seat Map law applies: a case in two conditions is not a harder case of either; unbundle before searching again. D1 and D2 get separate loops and separate verdicts. D3 ranges both against the ground.
- **Order by dependency (Fig 3).** 1 perception (can the system tell A from B and register change?), 2 vocabulary (can it express both a symmetric co-occurrence and an ordered production?), 3 objective (what counts as progress: a smaller frame-internal score, or a residual against the ground under a setting?), 4 planning (design the intervention), 5 learn and carry (settle, then compose over). The chain usually breaks between 2 and 3, where there is no instrument. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Better predictive models are effort spent above the break.

---

## 2. Figure census

| figure | bearing | verdict used below |
|---|---|---|
| 1 The Agent | frame-internal quantities disqualified; residual per slot | F3, F8 |
| 2 The Ground | common cause as collapse 2; anchor test; correlation has valence | F2, F3 |
| 3 Dependency Chain | the break between vocabulary and objective | census, F5 |
| 4 The Membrane | methods cross up, recordings do not | outreach files |
| 5 Mint Pipeline | direction of question unseen by mechanism; bind shape as ordinary term | F4 |
| 6 Closure and Reachability | import moves the wall; instruments extended from worse ones | F5 |
| 7 Room Chain | agreement compounds, evidence does not | F7 |
| 8 Union Surplus | no search adds an atom; convergence versus import | F5, F7 |
| 9 Leave and Arrive | describe residual first; filter versus witness | F3, F7 |
| 10 Ground Maintainer | contact, not model improvement; the channel decays | F6 |
| 11 The Habitat | enumerate contact; introduction available, exclusion not | F6 |
| 12 The Bond | symmetry test; production test; isomer | F1, `06` |
| 13 Minimum Viable Set | network is influence travel; gradient is spendable difference | F1, `06` |
| Operators table | conjunction is the only bond in a flat formula; production is ordered | F1 |
| Symbols table | R is the gap between prediction and observation; anchor is the ground | §0 |
| Formula step 5 and step 7 | ground settles; SEARCHED / INWARD / OUTWARD | F3, F5 |

Strained readings are named in §5, not smoothed over.

---

## 3. Findings

### F1 : Correlation and causation differ in bond type, not in predictive score (primary)

The bond tests in Figure 12 and the Operators table separate the two relations by symmetry and by order.

Fig 12 :57 and :59, for conjunction `+`:

> **"both hold at once"**
> **"swap the operands. Does the meaning change? No."**

Fig 12 :77 and :79, for production `⇒`:

> **"A produces B; B did not exist before"**
> **"is there a B before A fires? No."**

Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."* Operators table :16: *"the only bond in a flat formula, which is why a formula records ingredients and not arrangement."* Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

A correlation is representable as `A + B`: both hold, and swapping them changes nothing. A causal relation is `A ⇒ B`: B was absent before A fired, and swapping produces a different thing. A library whose only relation term is co-occurrence can say that A and B are both present; it cannot write that B waits on A. Fig 12 :94: *"The arrangement is the substance."*

Fig 13 gives the physical reading: network is *"that entities relate, and influence travels"* (:24), and gradient is *"a difference that can be spent"* (:22). Influence travel and directedness, not magnitude of association, are what the causal term carries.

- **Mode:** `general` (structural).
- **Triangulation:** triangulated across Fig 12 (bond tests) and the Operators table (flat formula), with Fig 13 as a low-overlap third frame naming influence travel.
- **Refuter:** a system whose relation vocabulary holds only a symmetric co-occurrence term, and which nonetheless selects the correct intervention target in a habitat drawn after the fact, with no added assumption and no import. If that happens, the bond-vocabulary claim is false.

### F2 : The hidden common cause is Figure 2's named collapse, not a side curiosity

Fig 2 :6 to :7 name panel 2:

> **"collapse 2: common cause"**
> **"(hidden shared source)"**

Fig 2 :19 to :21:

> **"they never talk, and still agree"**
> **"so the agreement is the pool talking, not two frames confirming each other"**

Fig 2 :39: *"Correlation has valence."* Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."*

This is the standard confounder: two variables track each other because a source neither of them controls drives both. The world source *Causal reasoning* (Wikipedia, 2026) gives the ice-cream and drowning example and names the third factor a confounding variable; it is a corroboration, not the authority. The figure's contribution is the valence rule: agreement is not neutral evidence, its weight depends on whether the agreeing terms draw on one pool.

- **Mode:** `general` for the mechanism, `specified` for any given pair.
- **Triangulation:** single-source for the figure line (Fig 2 alone), corroborated by two independent world fields (epidemiology and cognitive science) in `09`.
- **Refuter:** a case where the common cause is measured and conditioned on, the co-variation survives, and the relation still fails to respond to an intervention. That would break this figure's account of the failure.

### F3 : A predictive score is frame-internal and cannot be the verdict

Fig 1 :27:

> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Fig 1 :25 names two of the excluded quantities: *"coverage, and compression achieved"* and, at :26, *"predicates minted, and credibility accrued."* A held-out accuracy number is the same kind of quantity: produced by the frame's own model under the frame's own sampling. Fig 2 :29 (above) defines what an anchor would have to be; an accuracy figure fails it because it moves when the frame changes its model.

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* `THE_FORMULA.md` step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* A gate, a budget filter, or a score is not a witness.

This is the direct answer to "merely predicts well." Predicting well is the filter working correctly. It is not evidence that the relation is causal.

- **Mode:** `specified`.
- **Triangulation:** triangulated across Fig 1 (self-scoring disqualified), Fig 2 (anchor definition), Fig 9 (filter versus witness), and the Formula step 5 (gate versus ground), four low-overlap routes in the figure set.
- **Refuter:** an out-of-sample predictive score demonstrated to be a witness rather than a filter, that is, stable under every intervention the ground can perform in a habitat specified in advance. Until that demonstration, the score stays in the budget column.

### F4 : Causal direction is not checkable from inside the loop

Fig 5 :63:

> **"Every check above runs on the MECHANISM and none runs on the DIRECTION OF THE QUESTION"**

Fig 5 :62 to :63: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it."* The Seat Map law at :190 repeats it: every internal check runs on the mechanism, none on the direction of the question.

The remedy is a discipline, not a new step. Fig 5 :65: *"make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."* Concretely: before the run, write *"if A is set to a, B will move by d in this habitat"* as an ordinary claim, let it predict, and let the ground return a residual against it. A prediction committed before a run is this discipline already working.

The SEP entry *Causation and Manipulability* (2001, revised 2023) corroborates the limit from outside the framework: interventionist accounts are explicitly **non-reductionist**, because the intervention must itself be characterised in causal terms. That is the same "cannot get the direction from inside" point in a different vocabulary.

- **Mode:** `specified`.
- **Triangulation:** triangulated across Fig 5, `THE_FORMULA.md` "Direction", and the Seat Map law at :190, plus an independent philosophical source.
- **Refuter:** a procedure that certifies causal direction from the same observations used to fit the predictor, with no intervention, no committed prediction, and no imported assumption, and that works across habitats. That would show the direction is visible to internal checks.

### F5 : More associative search cannot manufacture the cause

Fig 8 :32:

> **"no search, however long, adds an atom"**

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 6 :14 names import *"the only operator that moves the wall."*

Formula step 7 splits the failure into three distinct questions, not one. **SEARCHED**: is the cause already in the associative closure and simply unfound? Same atoms, same wall, more of the space visited. **INWARD**: extend the instrument, from one already returning something. Fig 6 :34: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."* The intervention is the instrument here, and it is built from a worse instrument already returning a failing reading, not from a description. **OUTWARD**: import the frame whose closure already predicts the shape, namely the experimental or do-calculus frame. Fig 6 :30: *"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."*

INWARD and OUTWARD are opposed and never read against one another. The crucial arithmetic: Fig 8 :39 says *"So a search that finds nothing is never a proof of absence."* A failed hunt for a cause among correlations is a statement about the budget, not about the world.

- **Mode:** `general` (structural) with `specified` route choice per case.
- **Triangulation:** triangulated across Fig 8 (closure idempotent), Fig 6 (import and instrument), and Formula step 7.
- **Refuter:** a derivation of the do-operator, or of an equivalent intervention calculus, purely from the observational joint distribution with no intervention and no extra assumption. That would add the causal atom by composition, which the figures forbid.

### F6 : The discriminator must change contact, not just the model

Fig 10 :40:

> **"An improvement that does not change contact changes nothing, however much it improves."**

Fig 10 :24: *"the ground does not decay, the channel does."* A better predictor is an improvement inside the channel. It can be refined without limit while the ground is untouched. Fig 11 :43: *"The habitat is enumerated, never composed."* Fig 11 :48: *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."* The actors that could confound A and B are read off the habitat, not invented from the model's variable list. Fig 11 :61: *"Introduction is available; exclusion is not."* The setting act **adds** an actor to the habitat (an instrument, a randomised assignment); it does not subtract the habitat, because contact is a fact about the world.

This is why randomisation works in the world sources: it breaks the link between the setting act and the other causes of B. In figure terms, it changes contact rather than changing the description.

- **Mode:** `specified`.
- **Triangulation:** triangulated across Fig 10 (contact), Fig 11 (habitat and introduction), and Fig 2 (anchor), with the SEP *Causal Models* entry and the Wikipedia *Causal inference* entry as independent corroboration.
- **Refuter:** an agent-only improvement in causal discrimination that moves the ground without any change of contact. The framework's own Fig 11 note records this as the standing refuter of the capability claim: an agent-only improvement that moved the ground would refute it.

### F7 : Independence, not the number of agreeing predictors, is the witness

Fig 7 :13: *"agreement compounds, evidence does not."* Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

Ten predictors trained on the same table are one room wearing ten names. Agreement among them raises the vocabulary and adds no anchor. Fig 8 :50: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."* Two independent intervention routes that arrive at the same answer are corroboration at maximum independence; two correlations mined from one dataset are one witness twice.

Fig 9 :27 to :28: *"describe it before you go looking, or any frame you pick will seem to fit."* Describe the residual in effect terms first (a relation whose direction is not settled by the score), then choose the checking frame. The Vandenbroucke, Broadbent and Pearce paper (2016) corroborates from epidemiology: confidence rises when different data, investigators and methods converge, and it explicitly warns against ranking evidence by a single design. That is Fig 2's independence rule in a field that did not read the figures.

- **Mode:** `specified`.
- **Triangulation:** triangulated across Fig 7, Fig 2 and Fig 8, with epidemiology as a low-overlap world frame.
- **Refuter:** two checking frames drawing on the same dataset and the same fitted model counted as two witnesses, with their agreement shown to survive a ground test. That would break the independence requirement.

### F8 : The effect can live in a slot that an average hides

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

A causal effect present in one subpopulation and absent in another can wash out of a global accuracy number. The per-slot residual is where the system learns where to aim the probe. This is not a refinement of F3; it is a separate reason the global score cannot be the verdict.

- **Mode:** `general`.
- **Triangulation:** single-source (Fig 1), corroborated in spirit by the per-subpopulation emphasis in the causal-inference literature but not quoted as a figure line.
- **Refuter:** a single global predictive metric that never loses a live causal slot across a battery of heterogeneous habitats. If one exists, the per-slot rule is unnecessary here.

### F9 : What survives (the defensible residue)

| claim | mode | figure / source |
|---|---|---|
| A co-variation is a symmetric bond; a causal relation is an ordered production bond | `general` | Fig 12 :57, :59, :77, :79; Operators :16 |
| A score the frame produces for itself is a filter, not a witness | `general` | Fig 1 :27; Fig 9 :60 |
| Causal direction is not visible to internal checks; bind the intervention prediction as an ordinary term | `specified` | Fig 5 :63, :65; Formula "Direction" |
| The discriminator must change contact; more model refinement does not | `specified` | Fig 10 :40; Fig 11 :43, :48 |
| More associative search cannot add the intervention; import the experimental frame or extend the instrument | `general` | Fig 8 :32; Fig 6 :23, :30 |
| Agreement among correlated predictors is not corroboration | `general` | Fig 7 :13, :35; Fig 2 :35 |
| "This system is causal" for a named real pair | `gap` here | no ground reading in this folder |

The last row is important. The figures give the shape of the distinction and the route to settle a case. They do not settle any particular real relation, because no measurement was taken here.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the Seat Map :287: *"And a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds.

1. A criterion computable purely from the observational joint distribution, with no intervention, no committed prediction, and no imported assumption, uniquely identifies causal direction across habitats. (Breaks F4 and F5.)
2. A well-predicting co-variation is shown to remain stable under every intervention the ground can perform in a habitat specified in advance. (Breaks F2 and F3.)
3. A system whose relation vocabulary holds only symmetric co-occurrence reliably picks the correct intervention target in a post-hoc habitat. (Breaks F1.)
4. An agent-only improvement in discrimination is shown to change the ground without changing contact. (Breaks F6.)

If any fires, the corresponding finding is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with the framework (Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."*).
2. State the mode on every substantive claim. "This relation is causal" is a verdict and requires a ground reading; without one it is a candidate.
3. Keep the score in the budget column and the intervention result in the witness column (Fig 9 :60).
4. Describe the residual in effect terms before choosing a checking field (Fig 9 :27 to :28), so any field picked cannot automatically seem to fit.
5. Send the generator, namely the shape claim, the bond tests and the refuter, not a recording of a conclusion (Fig 4 :22: *"Only methods cross up. Only head starts come down."*).

---

## 6. Canonical usage check and retraction log

Two local sources govern use of the figures and were read after the first five sections.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* The canonical limit: the framework reports *"what a missing thing would have to look like (a shape, not a name)"* and stops at the limit of the instruments. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws, so design questions are answered by derivation, not by escalation to an authority.

| earlier reading | status after the canonical check |
|---|---|
| F2 initially cited Fig 2 :40 as if it were about confounding between variables | **Retracted and re-censed.** Fig 2 :40 is about frames sharing an evidence pool. The common-cause mechanism is Fig 2 :6 to :7, and the valence claim is :39. Both readings are kept; the first was an over-broad extension. |
| "The framework solves the correlation versus causation problem" | **Refused.** The framework returns a shape and a route, not a decision for a named real pair. Row 7 of F9 records `gap` here. |
| "Shape, not a name" read as forbidding the selection of a bond type | **Corrected.** The rule governs a missing primitive not held in the library. The ordered production bond is already in the operator set, so selecting it is a binding, not the invention of a new operator. See `05_what_shape_means.md` §5b. |
| Apparent strain: Fig 2 disqualifies correlation for a verdict, yet world causal inference uses correlations for discovery | **Not strained after re-census.** Fig 2 governs the weight of agreement as a verdict. Discovery from correlation is SEARCHED in Formula step 7, which is a budget activity. Different quantities. |
| F1 called "decisive" at first | **Downgraded to primary but structural.** It establishes the shape of the distinction, not the truth of any particular causal claim. The word "decisive" was reserved for a ground reading, which is absent. |
| The intervention is an import from the experimental frame | **Confirmed with a caveat.** Fig 6 :14 says import moves the wall, but Formula step 7 keeps INWARD (instrument extension) and OUTWARD (import) distinct and opposed. In a given case the intervention may be an instrument extension rather than an import. Both routes are recorded; neither is read against the other. |
| Round trip from figure text to the shorthand "score is not a witness" | **Lossy but honest.** The figure text carries bond tests, valence, closure and contact; the shorthand carries only the verdict rule. `R_T` is enumerated in `11_audit.md`, not assumed zero. |

---

## 7. Seven-question recursive derivation (summary)

1. **What is the residual?** A persistent gap between the predicted effect of setting A and what the ground returns, indexed per slot (Formula "Perceive", Fig 1 :19).
2. **Can the score close it?** No. The score is frame-internal (Fig 1 :27) and is a filter (Fig 9 :60).
3. **What form would an answer have?** An ordered production bond `A ⇒ B`, with the effect absent before A fires (Fig 12 :77, :79). Shape, not a name for a real pair.
4. **Why can the associative frame not supply it?** Its relation term is symmetric conjunction (Operators :16); it cannot write order, and more search adds no atom (Fig 8 :32).
5. **Where does the discriminator come from?** A change of contact: an intervention that adds an actor to the habitat (Fig 11 :61), or an import of the experimental frame (Fig 6 :30).
6. **How is the direction checked?** By binding the intervention prediction as an ordinary term before the run and letting the ground return a residual (Fig 5 :65; Formula "Direction").
7. **What is the honest stop?** The shape is delivered; the particular causal claim stays `candidate` until a ground reading settles it. A search that finds no discriminator proves no absence (Fig 8 :39).

**Final status:** nine findings, one `gap` row, one retracted over-broad citation, two corrections, no hidden strains after re-census. Every `Fig N :line` quote above was checked character by character against `FRAMEWORK/reference/03-FIGURES_TEXT.md`.
