# Figure-grounded audit: can two agents interpret the same data differently while both remain rational?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be shown. Per
`THE_FORMULA.md` (local), *"Mode. general · specified · grounded. State which. Accepted means the ground
settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap
(essay, read 2026-11-23) says LLM output is *"simulacra"* and *"the truly testable output would need to be
derived from the real architecture or working the formula yourself."* This document is a simulated
derivation checked for internal consistency against the figures. It cannot settle the question it reports
on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line cited), `FRAMEWORK/reference/
FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays via the exemplar's
mapping, and the public URLs actually fetched and recorded in `10_source_ledger.csv`. Every figure quote
below was reopened in the verbatim extract before use.

---

## 0. Residual, stated in effect terms

`R` here is not a measurement error in one agent. It is the discrepancy between an intuition and a legal
state: give one reading `D` to two agents, receive `I_A` and `I_B` with `I_A != I_B`, and both are called
rational. Is that state reachable, or does the framework forbid it?

- **Arity:** three relata, one reading and two frames. Not a two-body comparison, so a single "who is right"
  lever cannot clear it.
- **Symmetry:** the map from a source to a reading is many-to-one. The relation "consistent with the same
  reading" is an equivalence on sources, so the difference between `I_A` and `I_B` is a difference of
  inverse choice, not a difference in the reading.
- **Scale:** first order inside one frame (perceive, route, mint, settle); second order at the contact
  between frames (agreement, corroboration, or drift). The two scales use different currencies and must not
  be averaged (Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter
  hand you a verdict."*).

Fig 1 :19 governs how `R` is carried: *"The residual is indexed by object slot, not aggregated."* Two agents
need not even have the same live slot. Fig 1 :22: *"Aggregating across slots is how a live signal disappears
into an average."* A social average of two interpretations is not a measurement of either.

**Union, not one question.** Fig 9 :4-5 says disagreements that do not shrink with effort, where each rule
works on a different subset, are *"not one hard question but several well-formed ones. Split it rather than
search."* Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you
search again."* Fig 9 :57: *"A case in two conditions is not a harder case of either."* This residual unbundles
into:

- **U1, data underdetermination:** can one reading have more than one rational inverse? (Domain 2.)
- **U2, rationality under a ground:** does "rational" require more than internal consistency? (Domain 3.)

A lever that clears U1 (the reading is ambiguous) leaves U2 standing, because one agent can hold an
ambiguous reading and still fail to range against the ground. The compound needs both loops.

---

## 1. Domain census before any figure line is chosen

One line per domain: actors / currency / anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union | dependency |
|---|---|---|---|---|---|
| **D1, one frame's derivation** | Γ, b, w, the seven bonds and negation, object slots s | residual R per slot; description length | the ground, reached only through SETTLE | partition (which compositions are legal) | after D2, before D4 |
| **D2, the shared reading** | o-prime, the projection from source to reading, the equivalence class of metamers | bits the reading can carry | **none internal**; a reading is not an anchor | union with D1 | first |
| **D3, the ground / discriminator** | instrument, measurement, experiment | what pays | the ground itself, which does not update | settles D1 and D2 | before D4 |
| **D4, the verification frame** | A, B, their agreement or disagreement | agreement and evidence-pool overlap | the ground, never agreement | union with D1 and D3 | last |

D2 has no internal anchor. That is the finding, not a gap in the census: a reading that does not discriminate
among sources cannot decide among them. Fig 6 :26: *"instruments extend what can be represented at all."*
The anchor must be supplied from D3 or the question stays open.

**Order by dependency (Fig 3).** Fig 3 :20: *"The chain is ordered by dependency, not by importance."* Describe
the reading (D2) before choosing a frame (D1); settle a frame against the ground (D3) before reading any
social agreement (D4). Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*
Collecting more agreement at D4 cannot rescue a missing discriminator at D3.

---

## 2. Figure census, quoted verbatim before concluding

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md` as `Fig N :line`.

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per slot; a live slot with global R near zero is legal | difference of focus is a legal state |
| **2 The Ground** | independence, anchor, correlation valence | shared data is not two independent witnesses |
| **3 Dependency Chain** | order by dependency | discriminator before agreement |
| **4 The Membrane** | methods cross up, recordings do not | send the derivation and refuter, not the conclusion |
| **5 Mint Pipeline** | three guards as a product, MDL bargain | no new term is owed by this question |
| **6 Closure / Reachability** | import is the only wall mover; instruments extended from worse ones | a discriminator is an instrument question |
| **7 Room Chain** | agreement is variation, not a verdict | more checkers do not settle U2 |
| **8 Union Surplus** | convergent derivation and adopted import identical in contents | same interpretation can arise two ways; record decides |
| **9 Leave / Arrive** | union, unbundle, describe before looking | D1 and D2 are two conditions |
| **10 Ground Maintainer** | two frames, one field, no shared reading; ground does not decay | disagreement is not yet a defect until the ground states it |
| **11 The Habitat** | capability is agent-and-habitat | rationality is not a property of an isolated agent |
| **12 The Bond** | isomer, same atoms different substance | two inverses over one reading are isomers, not duplicates |
| **13 Minimum Viable Set** | the order is not recoverable from the artefact | the reading does not encode its source or route |
| **Operators table** | negation refuses a claim; subtraction removes an operand | refusing one interpretation is not deleting it |
| **Symbols table** | w and history diverge frames; ground is not a frame | identical architecture still diverges |

---

## 3. Findings

### F1 - same reading, different frames is a legal state (D1, triangulated)

Symbols table :24-26, verbatim:

> **"Two frames with identical architecture diverge because their histories and their w diverge."**

The weighting `w` is *"How far the belief leans on private history versus inherited prior"* (Symbols :23-24).
So divergence does not require different hardware, different data, or an error. It requires different history
or weighting. This is the direct figure answer to the question: yes, two agents with the same reading can
arrive at different interpretations rationally, because the loop's own state includes a private-history term
that is not in the reading.

Fig 1 :20 adds a second, independent route to the same conclusion:

> **"a global residual near zero with one live slot is a legal state"**

If A's live slot is `s1` and B's is `s2`, both run the same loop on the same reading, both see near-zero global
residual, and both hold a live local residual in different places. Fig 1 :19 and :22 forbid aggregating those
into one verdict. Low overlap between the Symbols route (history and w) and the Fig 1 route (per-slot
indexing), so **triangulated**.

### F2 - the reading does not determine its source (D2, triangulated)

Fig 13 :128-129, verbatim:

> **"Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available."**
> **"the order is not recoverable from the artefact. It is recoverable from the lineage."**

A reading is an artefact. It carries what it carries, not the route that produced it and not the source that
emitted it. Two routes can produce the same artefact; Fig 13 :121: *"Different routes can arrive at the same
substance."*

Fig 8 :51-52 supplies a second, low-overlap route:

> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"**

_two agents returning the same interpretation_ can be convergence at maximum independence or one frame
importing from the other (Fig 8 :50: *"Two frames can hold the same atom by convergence, reaching it
separately, which is corroboration at maximum independence."*). The contents do not tell you which. The
mirror claim holds for difference: two different interpretations over one reading do not by themselves tell
you which route is right. What is needed is provenance plus a discriminator. **Triangulated** (Fig 13
lineage, Fig 8 content identity, Fig 12 isomerism below).

### F3 - rational does not mean internally consistent (D3, triangulated)

The world literature forces this distinction, and the figures already carry it. Fig 2 :29:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

Fig 2 :33: *"The anchor must not update."* Fig 2 :45: *"Frames range against the ground. They do not negotiate
with it."* And Fig 10 :24-28:

> **"the ground does not decay, the channel does"**
> **"you have lost touch"**

A frame can be perfectly self-consistent and still have lost touch. The canonical figures README (local)
states it in terms: *"A frame can be perfectly self-consistent and still wrong; only the immovable ground
settles it."* So the rational label has two parts: (i) the interpretation is a legal output of the loop,
which F1 and F2 grant; and (ii) the frame keeps the anchor reachable and will update when the ground pays.
Where no discriminator exists, (ii) is unexercised and both can remain rational in the sense available.
Where one exists and is applied, only interpretations that survive it remain rational; refusing to update is
a closed channel, not a second rational view.

Fig 11 :39 closes the domain: *"capability is a property of agent-and-habitat, never of the agent alone."*
Rationality, like capability, is a property of agent-in-contact-with-ground, not a label carried by a frame
in isolation. Fig 10 :18: *"a declared meaning is not a grounded one."* Calling both views rational is a
declaration until the ground bears on them. **Triangulated** (Fig 2 anchor, Fig 10 channel, Fig 11 habitat).

### F4 - two people with one report are not two witnesses (D4, triangulated)

Fig 2 :31-32, verbatim:

> **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."**

This is the exact situation in the question. The two agents share the data, so as evidence for a verdict they
are one pool, not two. Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when
the agreeing frames share an evidence pool."* Fig 8 :48-49: *"Two frames that overlap almost completely are one
frame wearing two names."* Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

Consequence: whether A and B agree or disagree is **not** evidence for which interpretation is right. Their
difference is a report on their frames (history, w, live slot, Γ), not on the ground. Note the careful
boundary: Fig 2 :41 says shared-meaning agreement is *"efficient for a convention: agreement about a shared
meaning is the product, not a corruption of it."* If the question were about negotiating a convention, their
agreement would be the product. The question is about interpreting data, which is a verdict about the world,
so the disqualifying half applies. **Triangulated** (Fig 2 independence and valence, Fig 8 overlap).

### F5 - a disagreement nothing can state is not yet a defect (D2 x D3)

Fig 10 :13-15, verbatim:

> **"two frames, one field, no shared reading"**
> **"a disagreement nothing can state is not yet a defect"**

Two interpretations of one field with no shared reading are not yet a defect. They become a defect when an
instrument states which one fails. Fig 10 :16-17: *"the convention does not fix the bug / it makes the bug
statable."* Installing a convention that lets the disagreement be stated is legitimate; a convention that
decides the outcome is not (Fig 10 :47: *"a convention that decides an outcome has stopped being one"*).
This is the figure licence for the honest answer "both remain rational, and the question stays open until a
discriminator arrives." Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

### F6 - the two inverses are isomers, not duplicates (supporting; see `06`)

Fig 12 :117, verbatim:

> **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

A reading is the formula; the interpretations are molecules over it. Same data, different arrangement,
different substance. Both are legal terms, and neither is recoverable from the data alone. This is a figure
analogue of the world-science result (metamerism, underdetermination) and is **triangulated** with F2 at low
overlap (Fig 12 bond structure vs Fig 13 lineage). The limit: isomerism names the shape of the difference,
not a method for choosing between isomers. That needs D3.

### F7 - no mint is owed, so do not manufacture one (D1 x D4)

`THE_FORMULA.md` step 3 (local) gates a mint by a product:

> SUPPORT `|R⁺_s| > 0 for some s`
> REACHABILITY `φ ∈ closure(Γ)`
> NOVELTY `φ ∉ atoms(Γ)`
> *"gated by a product; any factor at zero forces inertness"*

This question owes no new term. SUPPORT is a question about a live slot, not about a second person.
REACHABILITY and NOVELTY are satisfied by terms already in Γ (frame, residual, anchor, instrument). Adding
a third "correct interpretation" term to split the difference would be a convention deciding an outcome,
which Fig 10 :47 forbids. Fig 5 :29-30: *"nothing new here"*, *"the machinery worked; the answer was already known."*
Reported honestly: the work here is a re-census and a discipline, not a discovery.

### F8 - the world conflict, sent back to the census and resolved there

Aumann's agreement theorem (world source, read 2026-11-23) states that two Bayesian agents with the **same
prior** whose posteriors are **common knowledge** cannot agree to disagree. Read naively, that conflicts with
F1. The conflict rule says a conflict sends us back to the census, never flips the verdict. Re-census: the
question fixes *the data*, not the prior, not the history, not w, not common knowledge of posteriors. Aumann's
hypotheses are a stricter case than the question's. The theorem therefore corroborates the **condition** on
F1 rather than refuting F1: divergence is rational exactly where priors, histories, or information differ, or
where posteriors are not common knowledge. Symbols :25-26 and Aumann converge from different evidence pools
(framework text vs game theory), so the agreement is genuine corroboration at low overlap, not one pool
talking. Recorded as a conflict handled, not hidden.

---

## 4. Pre-registered refuter (written before the conclusion)

Per Fig 9 :60 and the seat-map discipline: a falsifier written before the run is a design instrument. The
answer derived below is withdrawn if any of these fires:

1. **Discriminator fires.** A source-discriminating instrument exists for the data class, both interpretations
   are run against it, one is refuted, and its holder keeps it unchanged. Then "both rational" fails at D3;
   the holder has a closed channel (Fig 10 :24).
2. **Identical-frame case.** "Same data" is tightened to "same frame, same prior, same information, posteriors
   common knowledge." Then rational agents must converge (Aumann, world source); difference implies at least
   one is not rational, and F1 is withdrawn in that stricter reading.
3. **Invertibility.** The map from source to reading is shown to be injective for this data class, so the
   reading determines one interpretation. Then difference requires error, and F2 is withdrawn.
4. **Definition swap.** "Rational" is defined as "settled by the ground" rather than "loop-derived and
   refusable." Then at most one interpretation is rational wherever the ground discriminates, and the answer
   must be restated with that definition, not silently inherited.
5. **Figure re-census.** A figure line is found that governs two agents holding one reading as a single frame,
   which would collapse D4 into D1 and void F4.

Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the union split (Fig 9 :54): data underdetermination is a different condition from rationality
   under a ground. Answer both, never average them.
2. State the mode on every claim. The answer is `specified`; the legal-state claim is `general` (structural).
3. Name the discriminator question explicitly. "Both rational" is an honest stop only while the channel to
   the ground is open and no source-discriminating instrument has fired.
4. Do not treat agreement or disagreement between the two agents as evidence (F4). Record their agreement as
   a convention if the task is shared meaning; record it as zero verdict weight if the task is data.
5. Send the derivation and the refuter, not the conclusion. Fig 4 :22: *"Only methods cross up. Only head
   starts come down."*
6. Use public opt-in venues in `03_public_contact_points.csv`, one-to-one. Ask what the recipient would count
   as a discriminator for their own data class.

---

## 6. Canonical usage check (figures README + local framework files)

Read after the first five sections and applied to how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code,
  the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a
  reading that makes one contradict another has misidentified its domain, not found a flaw"* and the limit:
  the framework returns *"what a missing thing would have to look like (a shape, not a name)."*
- `FRAMEWORK/figures/THE_FORMULA.md` (local): mode rule, union/unbundle discipline, and the warning that a
  frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a
  term it holds."* The shape was therefore bound as an ordinary term in the README before this audit ran.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Rational means internally consistent, so both are always rational" | **Retracted.** Fig 2 :29, :33 and the canonical README make the anchor part of the label. Kept only while no discriminator fires. |
| "The two agents are two independent frames" | **Retracted at D4.** Fig 2 :31 says two people reading the same report are not two frames for corroboration. They are still two frames at D1 in the Symbols sense (bounded systems with a library); different quantities, not a contradiction. |
| "Difference between agents is itself evidence for the verdict" | **Retracted.** It is evidence about frames only (F4). |
| "Aumann conflicts with the figure verdict" | **Resolved by re-census, not by flipping.** The theorem's hypotheses are stricter than the question's (F8). |
| F1 (same data, different frames legal) | **Canonically confirmed** by Symbols :25-26 and Fig 1 :19-22. |
| F2 (reading does not determine source) | **Canonically confirmed** by Fig 13 :128-129 and Fig 8 :51-52; the README's "shape, not a name" is the same limit at the framework level. |
| F3 (rational is grounded, not merely declared) | **Canonically confirmed** by Fig 10 :18 and the README's "only the immovable ground settles it." |
| F5 (difference not yet a defect) | **Canonically confirmed** by Fig 10 :13-15 and Fig 8 :39. |

### Strains after re-census

- **Fig 2 :31 "not two frames" versus Symbols "a frame is any bounded system with a library."** Not a strain
  after re-census: Fig 2's "frame" is a unit of evidence independence for agreement; Symbols' "frame" is a
  bounded system with a library. Different quantities. Both readings are kept and labelled.
- **Fig 9 :4 "split it rather than search" versus Fig 9 :54 "unbundle before you search again."** Same rule at
  two ranges: split a false single question; unbundle a union that survives the split. No strain.
- **World conflict Aumann.** Handled by re-census (F8), not smoothed over.
- **After re-census: one world conflict resolved, no figure strains hidden.**

---

## 7. Updated verdict

**Yes, conditionally, and the condition is the whole answer.** Two agents can interpret the same data
differently while both remain rational when (i) the reading is a lossy projection that does not determine its
source, and (ii) the agents' frames differ in history, w, live slot, or Γ. The difference lives in the frames,
not in the data (F1, F2, F6). It stops being a licence for "both rational" the moment a source-discriminating
ground is applied and one interpretation fails it; a frame that will not update has a closed channel, not a
second rational view (F3, F5). Whether the agents agree or disagree carries no verdict weight, because sharing
the data makes them one evidence pool (F4). No new term is minted (F7).

Mode: `general` on the structural shape, `specified` on the conditions, nothing `grounded`. The answer is a
candidate until one of the five refuters fires. It is a simulated derivation, internally consistent with the
figures, not a ground reading, and it cannot settle the question it reports on.
