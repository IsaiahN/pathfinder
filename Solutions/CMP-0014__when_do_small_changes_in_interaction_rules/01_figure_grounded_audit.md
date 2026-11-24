# Figure-grounded audit: when small rule changes trigger abrupt collective transitions

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`, *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* The numerical part of the question is declared `gap`, not answered.

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap*, opened this session: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* LLM output can *"simulate an approximate answer/output"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This file is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Primary sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, read this session. Every figure quote below was checked character by character against the verbatim extract. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

The question is not "how big must a perturbation be." It is "what makes the response discontinuous."

Let Γ be the library a model holds: the atoms, the bonds between them, and the rule for predicting a collective state from local interactions. Let δ be a change to one interaction rule. δ is small in description length (one bond changed, one threshold nudged) and small in parameter magnitude. Let o' be what the system actually does. The residual R = |Γ(b,a) − o'| has two possible shapes:

| | smooth regime | abrupt regime |
|---|---|---|
| collective response | scales with δ, no discontinuity | jump, cascade, attractor switch |
| distribution of R | spread across slots | concentrated in a few slots |
| what predicts it | magnitude of δ | location of δ in the composition, loop sign, compounding remainder |

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :28: *"the gap is measured per object, not per step."* An averaged order parameter can hide the slot where the jump starts; the slot-indexed residual is the signal that governs the question.

**What an answer would look like (Formula step "Direction", made an ordinary term).** A predicate C such that: for a system whose local rules compose under Γ, changing one rule by δ produces a discontinuous collective response if and only if C holds, together with an instrument that can test C before the transition and a stated failure condition. Binding this in advance makes the sought shape refusable by the same test as everything else. The figures can license the *shape* of C. They do not license a numeric value of δ_c or a universal critical exponent; that part is `gap` (F7).

---

## 1. Domain census, before choosing any figure line

### 1.1 R by arity, symmetry, scale

- **Arity.** An interaction rule joins two operands. Fig 12 :46: *"A bond is the typed relation between two operands."* The collective state is a k-operand composition over such bonds. δ changes a bond or a bond parameter, not necessarily an atom. So the residual is binary at the site and k-ary at the collective level.
- **Symmetry.** Symmetric bonds `+`, `∥`, `≡` give k! spellings and one term; ordered bonds `→`, `⇒`, `−`, `⋛` make order constitutive. A change that flips a symmetric bond to an ordered one changes the substance without adding atoms. Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."* The Operators table separates the eight by six tests.
- **Scale.** Three scales are in play: micro (one interaction), meso (contact cascade through a neighbourhood), macro (collective state). Fig 4 :20: *"Only the actors, the currency and the anchor change."* The kernel is the same loop at every size; what differs is what is being counted and what settles it.

### 1.2 One line per domain: actors, currency, anchor

| # | domain | actors | currency | anchor (nameable?) |
|---|---|---|---|---|
| 1 | Physical critical phenomena (statistical mechanics) | spins, sites, grains, atoms, fields | energy, order parameter, correlation length, susceptibility | **yes**: measured critical point, finite-size scaling, avalanche size distribution |
| 2 | Network and social cascades | nodes, agents, thresholds | influence, adoption, cascade size | **yes**: observed cascade distribution against a threshold, platform data or controlled experiment |
| 3 | Neural and biological collective dynamics | neurons, cultures, cells, organisms | spikes, excitation/inhibition ratio, avalanches | **yes**: avalanche exponent, dynamic range measurement |
| 4 | Engineered multi-agent and control systems | controllers, agents, feedback gains | control authority, stability margin, failure boundary | **yes**: designed failure test, stability measurement |
| M | Metatheoretical layer (the figure set itself) | frames, seats | residual, provenance | **yes**: the figures as metalaws for design questions, the ground for empirical ones |

Every empirical row has a nameable anchor. By the audit rule, each is a domain; none is dismissed as "not yet a domain."

### 1.3 Partition or union

The four empirical domains form a **partition by anchor and instrument**: no domain borrows another's instrument without becoming that domain. At the level of *mechanism*, however, they form a **union**: the cascade/positive-feedback structure recurs in all four. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55: *"a case in two conditions is not a harder case of either"* (repeated at :57). So a single lever, for example "increase the threshold," clears only the region where one condition holds and leaves the intersections standing, which are compounds with their own loops.

### 1.4 Dependency order (Fig 3)

Fig 3 :20: *"The chain is ordered by dependency, not by importance."*

1. **Perception**: can we see the order parameter and the slot-indexed residual?
2. **Vocabulary**: do we have terms for bond, cycle, functional group, gradient, anchor?
3. **Objective**: can we say what counts as abrupt, in our own terms?
4. **Planning**: is there a route from the local rule to the global state?
5. **Learn and carry**: can the result be verified and carried to the next system?

The usual break is between 2 and 3: Fig 3 :25 names *"having terms for what a situation offers and being able to say what would count as progress"* as the link with neither obvious failures nor obvious tests. Where the instrument exists (susceptibility, avalanche exponent, stability margin), the link is reached; where it does not, claims of abruptness are readings of nothing.

---

## 2. Figure census and findings

Each finding states the verbatim line first, then the verdict, the domain(s), the mode, and the triangulation status. No verdict is averaged across domains.

### F1: A small rule change is a change of bond, and a different bond is a different substance

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :95: **"Two entries with an identical ingredient set are not variants of one thing."**

Fig 12 :46: **"A bond is the typed relation between two operands."**

**Verdict.** Where δ changes a rule while leaving the actors and quantities unchanged, the system does not move a little along a continuum. Under the figure's own definition it becomes a different substance. This is what "small change, abrupt collective state" means in composition terms: the description length of the change is small because the atoms are unchanged, and the behavioural difference is large because the bond carried information the operands did not. **Mode: `specified`.** **Status: triangulated** across Fig 12 (bond identity) and Fig 4 :20 (the kernel is the same loop at every size while actors, currency and anchor change), two figures with low subject overlap.

**Refuter.** Show a bond change that leaves the collective substance identical under the figure's six bond tests, or show that the changed rule is an atom rather than a bond (in which case this finding does not govern and we re-census).

**Census note (strain named, not smoothed).** Fig 12 :97 says *"This is not an analogy"* about chemical isomerism. Using the figure to reason about social or neural systems *is* a cross-domain application, which the framework licenses as domain-agnostic (Fig 4 :19-20), but it is not what that sentence itself asserts. The chemical case is the figure's literal instance; ours is a structural application. Recorded as a strain on scope, not retracted.

### F2: The sign of the loop decides whether the change closes and amplifies

Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

Fig 13 :31: **"a remainder compounding through a chain that amplifies is chaos"**

Fig 11 :52: **"And contact cascades."**

**Verdict.** The structural condition for an abrupt collective response is that the perturbed bond sits inside a re-entrant loop whose sign amplifies. A pure feed-forward chain cannot close, so the same δ applied there gives a bounded, proportional response. Where the loop is re-entrant and the remainder compounds, the per-slot residual grows through the chain and the collective state switches. This is the core of C. **Mode: `specified`.** **Status: triangulated** across Fig 12 (cycle sign, a composition-structure claim) and Fig 13 (compounding remainder, a claim about where randomness and sensitivity come from). Low overlap: different figures, different governing quantities.

**Refuter.** Exhibit a system with no re-entrant cycle and no compounding remainder in which a small rule change still produces a discontinuous collective transition. That breaks the cycle/compounding clause and sends us back to the census. Equivalently, exhibit a re-entrant amplifying loop where the response stays smooth when the bond sign flips.

### F3: A small substructure can fix the outcome: the functional group

Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Fig 13 :22: **"A difference that can be spent."**

Fig 5 :46: **"When nothing is scoring, the drive manufactures a gradient."**

**Verdict.** A functional group is the figure's own licence for a small substructure with outcome-fixing power. In this question the "small change" is often the addition or removal of such a group (one inhibition rule, one threshold, one rewiring), not a scaling of a global parameter. The gradient is the spent difference: once the group crosses the threshold, the directed difference is spent in a cascade. **Mode: `specified`.** **Status: single-source** for the functional-group definition (Fig 12); the spent-gradient reading is a separate figure and is used as corroboration, not as the definition.

**Refuter.** Show that in the domain under test the small change alters the qualifier only (which member) with the group unchanged, and that the collective state still jumps. That would move the explanation to F1 or F2 and retire this clause here.

### F4: The jump must be measured per slot, never as a global average

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

Fig 1 :28: *"the gap is measured per object, not per step."*

**Verdict.** A claim about abruptness based only on a global mean is not admissible under the figures. The onset lives in a slot; the cascade is the spread of that slot's residual to others. This governs the instrument, not the ontology: report the slot-indexed residual and the spread, not just the mean order parameter. **Mode: `general` (a rule about how the measurement must be taken).** **Status: triangulated** across Fig 1 (slot indexing) and Fig 11 :44 (the habitat cascade: *"contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles"*), two figures with low overlap.

**Refuter.** Show a transition that is genuinely discontinuous in every slot simultaneously with no cascade order. That would be a different phenomenon and the slot-indexed clause would need narrowing.

### F5: Agreement does not settle when; an anchor does

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 10 :24: **"the ground does not decay, the channel does"**

Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*

**Verdict.** In all four empirical domains the anchor is a measurement: a susceptibility peak, a cascade-size distribution, an avalanche exponent, a stability boundary. It is not the agreement of modellers. This matters here because "abrupt" is easy to see once it has happened and easy to dispute before. The anchor is the instrument that returns a shape before the event. **Mode: `general`.** **Status: triangulated** across Fig 2 (anchor and independence) and Fig 10 (the channel decays), triangulated for the rule; the choice of instrument per domain is `specified`.

**Refuter.** Produce a case where the collective-state question is constitutively about the observers' agreement, so that human judgment is the legitimate anchor (Fig 2 :36-37). That would move the case out of the empirical domains as censed.

### F6: The micro rule and the macro state are related by a lossy transform with a measured gap

Fig 4 :20: **"Only the actors, the currency and the anchor change."**

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Fig 10 :68: **"Different actors, a different currency, a different ground, and a lossy transform between."**

**Verdict.** The same loop runs at the scale of one interaction and at the scale of the collective. But carrying a micro rule up to a macro claim discards detail, and the trip is not reversible. The round trip gap R_T must be measured, not assumed zero. For this question R_T is exactly what a single-agent or mean-field prediction loses about the slot structure and the loop sign. **Mode: `general` for the lossy-transform rule, `specified` for its application to this question.** **Status: triangulated** across Fig 4 and Fig 10 (low overlap: scale membrane versus the ground maintainer's crossing).

**Refuter.** Show a transform from micro rule to macro state that preserves every distinction needed to predict the jump, in which case R_T for that case is zero and this clause is idle there.

### F7: The figures give the shape of C, not a number: this is a genuine gap

Fig 9 :32: **"you get a kind of thing, never the answer itself"**

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

Fig 13 :134: **"Unreachable is a verdict here, not a silence"**

**Verdict.** No figure line yields δ_c, a critical exponent, a universality class, or a formula relating rule magnitude to jump size. Searching the figure set for one would be searching a closed set for an atom it does not contain (Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*). Those quantities have to be imported from the critical-phenomena frame with a source gate and a shadow test, and they are not figure-derived. **Mode: `general` for the limit, `gap` for the content.** **Status: triangulated** across Fig 9, Fig 8 and Fig 13. This is an honest `gap`, not a failure to find a line.

**Refuter.** Exhibit a verbatim figure line that predicts a numeric threshold or exponent for a specified system. That would close the gap in the opposite direction and require rewriting this finding.

### F8: What survives, per domain, kept separate

| domain | figure verdict | status | mode |
|---|---|---|---|
| 1 Physical critical phenomena | bond/cycle/compounding shape governs; numeric threshold absent | triangulated for shape (F1, F2), `gap` for number | `specified` / `gap` |
| 2 Network and social cascades | re-entrant amplifying loop plus functional group governs; anchor is cascade distribution | triangulated (F2 via Fig 2 :13-15, F3) | `specified` |
| 3 Neural and biological | functional group and spent gradient govern; anchor is avalanche and dynamic-range measurement | single-source for Fig 12 definition, world corroboration recorded | `specified` |
| 4 Engineered multi-agent | cycle sign and gates govern; anchor is failure test | triangulated (F2, Formula gates) | `specified` |
| M Metatheoretical | figures decide design questions; numeric empirical question is `gap` | triangulated (README canonical + metalaws doc) | `general` |

No row is averaged into another. Agreement between rows is not corroboration: all rows use the same figure set and this derivation uses one evidence pool.

---

## 3. Strain test and re-census

**Initial reading (retained as evidence).** I first tried to use Fig 13 :31, *"a remainder compounding through a chain that amplifies is chaos"*, as a direct theory of phase transitions. That strains: chaos is sensitive dependence in a deterministic dynamics, while a phase transition is nonanalytic behaviour in a limit. They are not the same quantity.

**Re-census.** Fig 13 :31 governs *why the response is large* (a remainder compounds through an amplifying chain). Fig 12 :121 governs *when the small change closes a loop* (the sign of a re-entrant cycle decides). Fig 12 :123 governs *what fixes the new outcome* (a substructure whose presence decides). Different quantities, different figures, no contradiction. The reading survives as `specified` rather than `grounded`, and the initial over-equating of chaos with criticality is recorded above rather than erased.

**Second strain.** Fig 12 :117's *"This is not an analogy"* was initially read as forbidding application outside chemistry. Re-census: that sentence distinguishes the chemical instance from an analogy *for* the bond principle; the framework itself is domain-agnostic (Fig 4 :19-20), so cross-domain structural application is allowed but must be labelled as such. F1 records the label.

**Third strain, resolved by separation.** Fig 13 :124, *"Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member"*, could be read as saying chaos and phase transitions are the same kind of left-behind property. Re-census: it says they are both derivatives of composition, not that they are identical. We use it only to deny that "criticality" is a new primitive, not to identify it with chaos.

After re-census: two strains named and narrowed, none hidden, no figure contradiction.

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing rule: a falsifier written before the run is a design instrument.

The shape claim (F1 to F3 combined) is refuted if any of the following holds:

1. A small rule change produces a discontinuous collective transition in a system with **no re-entrant cycle and no compounding remainder**, under a measured slot-indexed residual. This breaks F2.
2. In a re-entrant amplifying loop, flipping the sign of the perturbed bond leaves the response smooth with no jump and no growing susceptibility. This breaks the sign clause.
3. The jump size is fully accounted for by the **magnitude of δ alone** in a smooth but steep linear response, with no bond identity, cycle sign or functional group needed. This breaks the "where, not how much" claim.
4. The slot-indexed residual stays flat while only the global mean jumps. This breaks F4 and means the measured "transition" is an aggregation artifact.
5. A world source shows a controlled counter-instance in any one domain. Per the authority order, a conflict sends us back to the domain census; it never flips a verdict by itself, and it is recorded in `11_audit.md` with provenance.

If any fires, the shape is withdrawn or narrowed, and the retraction is written into this file rather than silently applied.

---

## 5. Recommendation

1. Send the shape C and the five refuters, not a threshold. Ask what would count as a failure before offering any theory (Fig 10 :52, *"Bring a characterised residual, never the source."*).
2. Keep verdicts per domain separate. Do not pool the physics, network, neural and engineering witnesses into one "consensus" (Fig 2 :40).
3. Treat the critical-phenomena literature as an **import with provenance**: source gate and shadow test recorded in `10_source_ledger.csv`. It is secondary corroboration, never the deciding authority.
4. Report the slot-indexed residual and the round trip gap R_T alongside any claim of abruptness (F4, F6).
5. State `gap` for the numeric part plainly. Fig 13 :134: *"Unreachable is a verdict here, not a silence."*

---

## 6. Canonical usage check

Read this session after sections 0 to 5:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit, the framework gives *"a shape, not a name"* and *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: *"the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."* Design questions about how to run this derivation are decided here from the figures, not escalated.

### Retraction and confirmation log

| earlier move | status after the canonical check |
|---|---|
| Equated Fig 13 "chaos" with a phase transition | **Narrowed, recorded in section 3.** They share amplification, not identity. The read is `specified`, not `grounded`. |
| Tried to derive a numeric δ_c from the figures | **Retracted.** F7 declares it `gap`; the figure set returns a shape and stops. |
| Counted the arXiv papers as independent corroboration of the figure verdict | **Corrected.** They are secondary witnesses from one broad scientific pool across low-overlap fields. They corroborate; they do not decide. Overlap is recorded per row in `10_source_ledger.csv`. |
| Read Fig 12 :97 "This is not an analogy" as forbidding cross-domain application | **Retracted as an overstatement.** It forbids treating the chemical instance as an analogy for the bond principle; the framework is domain-agnostic. Cross-domain use is labelled as such in F1. |
| Treated the global order parameter as sufficient evidence of a jump | **Retracted.** F4 and Fig 1 :22 require the slot-indexed residual. |
| Want a human ruling on whether the criterion is right | **Refused by the metalaws note.** The figures decide the design; an anchor is for what they genuinely cannot settle, which here is the ground reading. |

### Confirmations

The cross-kind composition rule (Fig 13 :74), the anchor rule (Fig 2 :29), the round trip rule (Fig 4 :30) and the shape-not-a-name limit (Fig 9 :32, figures README) all survive the canonical check unchanged. No figure quote was found to have drifted from `03-FIGURES_TEXT.md`; all were rechecked character by character before use.
