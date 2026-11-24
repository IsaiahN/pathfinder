# Figure-grounded audit: INS-0029, misinformation, partisan identity, institutional judgment

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, fetched and read 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session, cited as `Fig N :line`. `FRAMEWORK/figures/THE_FORMULA.md`. `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) − o′|` per slot s (Formula step 1; Symbols table). Here:

- **b** is the citizen's belief about how an institution is performing, formed from private history and inherited prior. The Symbols table weights this at line 23: *"How far the belief leans on private history versus inherited prior."* That is `w`.
- **a** is the judgment the citizen forms and expresses: approve or disapprove, trust or distrust, a performance rating.
- **Γ(b,a)** is what the citizen's library of beliefs and terms predicts about the institution.
- **o′** is what the institution actually does: measured service delivery, audit findings, corruption measurements, election administration quality, budget execution.
- **s** is the institution, and the issue domain inside it. R is indexed per institution and per issue, never folded into one national "trust" number.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the level of trust but **the size and direction of the gap** between perceived and actual institutional performance, and why it widens by two distinguishable routes. Call the gap `R_s` for institution-slot s. Observed: `R_s` is small in some slots and large in others, and it can be large in the optimistic direction (a failing institution judged good) or the pessimistic direction (a functioning institution judged bad). A frame that predicts all institutions are judged equally well, or that a correction simply shrinks every gap by the same amount, has a residual here.

State the residual as: *why does the gap between what citizens believe about an institution and what that institution actually does grow in some slots and not others, under a false information input and under a partisan weighting of the same evidence?* This is an effect description. It names no theory, no "backfire", no "echo chamber", no "motivated reasoning". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (i) a per-slot decomposition into at least two distinct conditions with different instruments, (ii) an instrument that discriminates a corrupted-input condition from a biased-weighting condition, and (iii) an honest stop that states what the framework cannot name. Until bound, this shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* For institutional performance the ground is measured performance and randomized experiments with a factual benchmark. Public opinion polls are **not** the anchor here. They are the `o′` of the researcher's loop, the thing to be explained. Fig 2 :37-38 is decisive:

> **"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."** (Fig 2 :37-38)

A poll or a "trust index" is an instrument. It can be wrong on the axis this question asks about, which is the axis of correspondence to actual performance. A measured performance record, an audit, or an experimental benchmark does not move because a frame thinks differently. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."*

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation: belief b with weight w, an information input (including a false one), institutional performance o′, and the expressed judgment a, indexed by slot s and ordered by time t. It carries an **ordered** bond (exposure then update then judgment: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "performing well or badly" (`⋛`, *"a threshold relation between two quantities"*, Operators table :48). It is not symmetric: a false positive (a failing institution judged good) is not the reverse of a false negative.
- **Symmetry.** "Performance" is a threshold relative to expectations, not an absolute quantity (Fig 12 :85-89). Partisan identity makes the comparison non-exchangeable: the same measured performance maps to a different judgment depending on which party is in power. This is exactly why the relation cannot be averaged without loss.
- **Scale.** Four scales are in view: the individual citizen's step-by-step loop (Fig 4 one-agent panel), the population media habitat with *"something that ranks what they produce"* (Fig 4 :5), the institutional stratum that is judged, and the time channel across election cycles. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and the transform is lossy, so the round-trip gap `R_T` must be measured, not assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The citizen belief loop** (one agent, one scale) | the citizen, their Γ, misinformation items, partisan cues | prediction error reduction, belief updating | yes: a factual benchmark about the institution that does not move with what citizens think | admitted |
| **D2 The information and media habitat** (population) | platforms, ranking systems, content producers, party elites, fact-checkers | attention, reach, measured exposure | yes: measured exposure and diffusion counts, a count that does not change because a frame thinks so | admitted |
| **D3 The partisan identity weighting frame** | party identity, inherited priors, group norms, identity signaling | `w`, in-group and out-group regard | yes: measured party self-identification and voting behavior | admitted |
| **D4 The institutional performance ground** (the thing judged) | the institution, its outputs, audits, oversight bodies | actual performance | yes: the performance measurement itself, the ground for D1's judgments | admitted |
| **D5 The measurement frame** (researchers, pollsters, fact-checkers) | survey designers, experimental researchers, auditors | validity of the instrument | yes: the randomized experiment or measurement that settles a causal claim | admitted |
| **X1 "The misinformed voter" as a type** | a stereotyped voter | gullibility | **no** anchor independent of measured behavior; the label is produced by the frame that uses it | not a domain yet |
| **X2 "Partisan bias" as a single scalar** | a single attitude dimension | bias magnitude | measurable, but already inside D1 and D3 plus their overlap | absorbed, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that citizens never hold false beliefs. X2 is absorbed because treating bias as one scalar is precisely the aggregation Fig 1 :22 warns against.

### 1.3 Partition or union

D1 and D3 overlap: belief and identity are not separable inside a citizen. D2 and D3 overlap: the media habitat and identity co-produce selective exposure. D1 and D4 overlap: a judgment is about a ground it may or may not track. D5 overlaps all of them, because every reading is taken through an instrument. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1, a corrupted input.** A false claim about institutional performance enters b. Its currency is a wrong atom in the belief.
- **C2, a biased weighting.** Partisan identity sets `w` toward the inherited prior, so the same performance evidence maps to a different judgment. Its currency is the weight, not the atom.

An institution-slot failing only C1 and one failing only C2 are not different degrees of one failure. They are different compounds and need different instruments. A single lever, for example "publish more corrections", clears the region where only C1 holds and leaves the intersection standing because C2 still binds (Fig 9 :55-56). The Library of Babel essay says the same thing in its bundle passage: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the citizen perceive the institution's performance and the claim about it?) → 2 vocabulary (does Γ have terms for what institutional performance affords: corruption, competence, fairness, waste?) → 3 objective (can the citizen say what "performing well" would count as, in their own terms?) → 4 planning (vote, complain, engage, withdraw) → 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Most reform effort lands above the break because that is where the measurements already exist (Fig 3 :29-30). Fig 12 :113-115 adds that a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it, and that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."*

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, and what may count as a witness |
| 2 The Ground | anchor, independence, correlation valence, human judgment as instrument | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs individual-to-population transfer |
| 5 Mint Pipeline | three guards as a product; settlement; "nothing new here" | governs when a claim about an institution can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs why a correction that adds no atom cannot move the frame |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs why repeated agreement is motion, not progress |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs corroboration and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first; filter vs witness | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick erosion of judgment accuracy |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D2 and the media environment |
| 12 The Bond | threshold comparison; isomer and functional group; arrangement is substance | governs why the same evidence maps to different judgments |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop only, not the social content |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate directly to "the citizen's belief" only fit by calling partisan identity a kind of energy and a false claim a kind of gradient. That is a strain, so Fig 13 does **not** govern the content of citizen belief. Re-census sent Fig 13 to the honest-stop role only (section 7, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about institutional judgment, `grounded` only if settled by a measurement. None is `grounded`.

### F1  -  Judgments must be indexed per institution, never averaged

**Mode: `general` with a `specified` methodological consequence. Domains all. Status: triangulated (Fig 1 and Fig 9, low topical overlap: residual indexing vs union splitting).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

A single national "trust in institutions" score is a pooled reading. It throws away the only signal that says which institution is losing contact with its ground and where. Budak, Nyhan, Rothschild, Thorson and Watts (Nature, 2024) report *"a pattern of low exposure to false and inflammatory content that is concentrated among a narrow fringe with strong motivations to seek out such information"* (abstract, read 2026-11-23). A population average and the fringe tail are different objects. The world source corroborates the per-slot requirement at a different stratum; it is not a figure line and carries no verdict weight.

**Refuter:** an averaged, national-level statistic that predicts prospectively and per named institution which slot's judgment gap will grow next. If one exists, F1's methodological consequence is false.

### F2  -  The anchor is measured performance, not agreement about performance

**Mode: `general`. Domains D4, D5. Status: triangulated (Fig 2 and Fig 10, low overlap: anchor rule vs channel maintenance).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"the ground does not decay, the channel does"** (Fig 10 :24)

Consensus among citizens, or among pollsters using the same questionnaire, is not the ground for "how well is this institution performing". It is a reading. When a question is constitutively about people, human judgment is the right anchor (Fig 2 :37), but this question is about judgments **of** institutions, so the institution's measured performance is the anchor for those judgments, and human judgment is the instrument that can be wrong on axes it does not measure (Fig 2 :37-38). This distinction is the whole reason "misinformation alters judgment" is a question rather than a tautology.

**Refuter:** a case in which the measured performance record changes because a frame changed its opinion of it, with no change in the underlying delivery. That would make the anchor movable and collapse panel 3 of Fig 2 into panel 1.

### F3  -  The two conditions act on different quantities: a false atom and a biased weight

**Mode: `specified`. Domains D1, D3. Status: triangulated for the two-condition split (Fig 9), single-source and explicitly a binding for the identification of `w` with partisan identity (Symbols table).**

> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)
> Symbols table :23: **"How far the belief leans on private history versus inherited prior."**
> Symbols table :24: **"learnable from the outcomes of past weightings. Two frames with identical architecture diverge"**

Misinformation supplies a wrong input to b. Partisan identity changes `w`, how far b leans on inherited prior rather than on the evidence at hand. These are different quantities. A correction that removes the false atom does not, by that act alone, reset the weight. Conversely, changing the weight does not by itself remove a false atom.

**Honest status of the `w` binding.** The Symbols table defines `w` formally. Identifying a social-psychological "partisan identity" with that inherited prior is a **binding from the world frame onto a held term**, not a derivation from the figures and not an import that adds an atom (Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*). It is recorded as a binding so a reader can see where it came from (Fig 8 :50-52: convergent derivation and adopted import look identical in the contents, only the record separates them). Kuru and Zhang (HKS Misinformation Review, 2026) report that *"Among individuals high in scientific populism, pseudoscientific content combined with censorship accusations was associated with lower vaccination and GMO consumption intentions"* (essay summary, read 2026-11-23). That is a world-frame description of a weight-like moderator; it corroborates the shape, not the binding's provenance.

**Refuter:** an experiment in which a correction fully removes the identity-driven part of the gap with no categorically different residue left over. That would collapse the union into a partition and falsify F3. Also falsifying: a documented case where judgments shift with identity while the weights on private history versus evidence are measured as unchanged.

### F4  -  The media habitat selects which false claims reach the citizen; selection is not persuasion

**Mode: `specified`. Domain D2. Status: triangulated (Fig 11 and Fig 7, low overlap: habitat valence vs room chain).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)

Which false claims a citizen encounters is a property of the habitat, not a free-floating property of the citizen's credulity. The same media actor is a benefactor to one residual and a malfactor to another (Fig 11 :50). Clementson (HKS Misinformation Review, 2026), read 2026-11-23, writes: *"Feed algorithms allocate scarce attention, reward successful message variants, and give producers immediate feedback about what to make next."* The same article notes, citing Vosoughi, Roy and Aral (2018), that *"False news spread farther, faster, deeper, and more broadly than true news in a large study of Twitter cascades, partly because falsehood carried greater novelty."* That is a habitat-selection description, not a claim about any one citizen's belief change.

**Refuter:** a controlled habitat substitution that removes the amplification structures and leaves the distribution of institutional-judgment gaps unchanged. If it does, F4's habitat condition is not load-bearing.

### F5  -  Item removal is not contact repair

**Mode: `specified`. Domains D1, D5. Status: triangulated (Fig 10 and Fig 9, low overlap: channel decay vs union splitting).**

> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"the output is not a verdict, it is you have lost touch"** (Fig 10 :27-28)
> **"→ keep the anchor reachable"** (Fig 10 :29)
> **"A single lever clears the region where only one condition holds and leaves the intersections standing"** (Fig 9 :55-56)

A correction acts on an item after production. It does not by itself change the rewards that produced the item, nor does it reset the weight that made the item plausible. The world reports small and conditional effects. Kuru and Zhang (2026) write in their essay summary: *"The effects were generally limited: pseudoscientific content increased the perceived credibility of misinformation and heightened risk perceptions. The censorship accusation reduced the credibility of misinformation."* Altay, Hoes and Wojcieszak (Nature Human Behaviour, 2025) report that following news accounts *"enhanced current affairs knowledge, participants' ability to discern true from false news stories ... as well as trust in the news"* but that *"The treatment had no significant effects on ... affective polarization"* (abstract, read 2026-11-23). Adding reliable signal moved the belief axis and did not move the identity axis. That is exactly the union F3 predicts.

**Refuter:** a single correction that removes both the false-input residue and the identity-weight residue, with no categorically different leftover. If it does, F5 is false and the two conditions were one after all.

### F6  -  Never let a filter hand you a verdict

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

Trust indices, engagement counts and "how much misinformation people saw" are frame-internal or budget quantities. They decide where to look and how much effort to spend. They do not settle whether a judgment corresponds to performance. Darcy and Altay (HKS Misinformation Review, 2026), read 2026-11-23, describe the institutional version precisely: *"institutions count what they can see instead"*, and *"likes are not beliefs, and beliefs are not actions"* (Implications section).

**Refuter:** a frame-internal statistic that settles a dispute about correspondence to measured performance without an experiment or a ground reading. By Fig 1 :23 that is impossible; if it happens, Fig 1 is wrong.

### F7  -  The break is usually at the middle link: vocabulary and objective

**Mode: `specified`. Domain D1. Status: single-source (Fig 3), with a low-overlap ecology corroboration of the method, not of the social fact.**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

The usual failure in public judgment is not that citizens cannot perceive anything and not that they cannot form a plan. It is that they lack terms for what institutional performance affords and cannot say what would count as progress in their own terms. Wanless, Wardle and Scales (HKS Misinformation Review, 2026), ecology, read 2026-11-23, make the structural point: *"Structure is both a precondition and a partner for understanding dynamics."* And: *"a variable cannot be said to have crossed a threshold until it has been defined, its system bounded, and its unit of analysis fixed."* This corroborates the middle-link rule from a field with no shared evidence pool with political communication.

**Refuter:** a documented institution-slot whose perception, vocabulary and objective links all measure as working and whose judgment gap is located at planning. That would falsify "usually at the middle" while leaving the dependency ordering intact.

### F8  -  Which specific claim or which specific cue moves which institution is a gap

**Mode: `general`. Status: figure-governed honest stop.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

The framework returns a shape: two conditions with different instruments, per-slot indexing, an anchor that does not move, and a stop. It does **not** return the name of the particular false claim, the particular party cue, or the particular institution where the gap will open. From *The Hard Problem is About Source*, read 2026-11-23: an instrument that reads green *"cannot comment on the source"*, and *"If several paths create the same behavior, then behavior is a projection with lossy information."* The same judgment can be produced by a false input, a biased weight, or both. What is owed is a source-discriminating instrument, not a confident name.

**Refuter:** a source-discriminating instrument that names, per slot, which of the two conditions produced the gap, with a ground reading that pays for it. Until then the slot stays marked `???`.

---

## 4. Verbatim figure lines checked before concluding

Every quote below was re-read from `03-FIGURES_TEXT.md` this session. No quote came from a summary.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 1 :23 "The ground enters as the only metric." checked.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." checked.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." checked. The full SVG line continues with the list of anchors; the quotation stops at the full stop.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 2 :37-38 "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." checked across the wrap.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" checked. The SVG line begins "disqualifying for a verdict:", so the quotation is a substring, not the whole line.
- Fig 3 :19, :20, :24, :27, :29 checked.
- Fig 4 :5, :21, :22, :30 checked.
- Fig 6 :21 "MINT composes inside the closure and can never add an atom." checked.
- Fig 7 :13, :35 checked.
- Fig 8 :39 checked.
- Fig 9 :32 "you get a kind of thing, never the answer itself" checked. The SVG line begins with an arrow glyph; the quotation is the sentence without it.
- Fig 9 :54, :55, :57, :60 checked.
- Fig 10 :24, :26, :27-28, :29 checked.
- Fig 11 :39, :49, :50, :51 checked.
- Fig 12 :72, :85-89 checked.
- Fig 13 :134 checked. The SVG line ends with a comma after "silence"; the quotation preserves the words, not the punctuation.

---

## 5. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: a falsifier written before the run is a design instrument, not only an honesty device. The shape claim is refuted if any of the following is observed:

1. An averaged national statistic predicts prospectively and per named institution which slot's judgment gap will grow next (breaks F1, Fig 1 :19, :22).
2. A measured performance record changes because frames changed their opinion of it, with no change in underlying delivery (breaks F2, Fig 2 :29-30).
3. A correction removes the identity-driven part of the gap with no categorically different residue, or identity shifts judgments with measured weights unchanged (breaks F3, Fig 9 :55-57).
4. Removing amplification structures leaves the distribution of institutional-judgment gaps unchanged (breaks F4, Fig 11 :39, :49-51).
5. A single correction removes both the false-input residue and the identity-weight residue with no leftover (breaks F5, Fig 9 :55-56).
6. A frame-internal metric settles a correspondence dispute without a ground reading (breaks Fig 1 :23, :27 and F6).
7. A source-discriminating instrument names the condition per slot and a ground reading pays for it (fires the honest stop in F8; this one upgrades rather than breaks, but it ends the `???` slot).

No part of this solution may be upgraded to `grounded` until at least one of 1 to 6 has been run and has failed to fire, and until a ground reading has paid for the two-condition shape.

---

## 6. Recommendation

1. Lead with the residual and the refuter, not with a theory of polarization (Fig 10 :52: *"Bring a characterised residual, never the source"*).
2. Keep the two conditions separate in every report. A blended "trust gap" score is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Index every claim to a named institution and issue domain (Fig 1 :19).
4. Ask, at each handoff, which link the citizen's chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
5. Treat "misinformation" and "partisanship" as candidate libraries whose reach must be tested against the ground, never as the answer (Fig 1 :27).
6. Use the misinformation literature as a budget filter and as one corroborating witness, not as the verdict. Altay and colleagues, Budak and colleagues, and Darcy and Altay overlap heavily in authors, venues and evidence pool; they count as a small number of witnesses (Fig 2 :31, :40).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22: *"Only methods cross up. Only head starts come down."*). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name which claim or which cue occupies the slot; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 7. Canonical usage check and retraction and confirmation log

Canonical sources read after the first six sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the three essays *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source* and *The Library of Babel* (all fetched 2026-11-23).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 6, item 8.
- The source essays confirm the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six terms to citizen belief | **Retracted, strain S1** | Only fit by renaming identity as energy and a false claim as a gradient. Re-census: Fig 13 governs the physical substrate; it is used here only for the honest-stop line :134 |
| Treated public opinion as "the ground" | **Retracted, strain S2** | Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground is what settles and does not. Polls are instruments |
| Said "shape, not a name" forbids naming misinformation or partisan identity | **Narrowed, strain S3** | The README's phrase governs a missing primitive. Both terms are already held constructs in the world frame, so naming them is a binding, not a new atom. What is forbidden is naming what occupies the `???` slot |
| Claimed `w` is literally partisan identity | **Narrowed to a binding, strain S4** | Symbols :23 defines `w`; the identification is a world-frame binding with no source gate. Marked `specified`, single-source |
| Read the misinformation literature as a verdict | **Retracted as a witness, kept as a filter and one witness** | Fig 9 :60, Fig 1 :27, Fig 2 :31 |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 1 and Fig 9 are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |
| F7 ecology source used as social fact | **Narrowed to method-shape corroboration** | Wanless et al. study information ecosystems, not individual institutional judgment |
| F8 "no source-discriminating instrument exists" | **Marked `gap`, not a claim of absence** | Fig 8 :39: a search that finds nothing is never a proof of absence |

**Strains sent to the log:** S1 (Fig 13 applied to social cognition), resolved by re-census; S2 (poll as ground), resolved by Fig 2 :29-30; S3 (over-broad shape-not-a-name claim), narrowed by the README's "missing thing" qualifier; S4 (`w` as identity), narrowed to a binding with provenance. No unresolved strain after re-census.

---

## 8. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of a corrupted-input condition and a biased-weighting condition, each with its own instrument.
2. **What is the anchor?** Measured institutional performance and experiments with a factual benchmark, named in Fig 2 :29. Not polls, not agreement.
3. **How is R indexed?** Per institution and issue slot, never as a national average (Fig 1 :19, :22).
4. **How does the false input act?** It supplies a wrong atom to belief b; its supply is selected in the habitat (Fig 11 :39, :49-51).
5. **How does identity act?** It sets `w` toward inherited prior (Symbols :23), so the same evidence maps to a different comparison (Fig 12 :85-89).
6. **Why do corrections underdeliver?** They act on items, not on rewards or weights (Fig 10 :26, Fig 9 :55-56); adding reliable signal moved belief accuracy and not affective polarization in the world (Altay et al. 2025).
7. **What can be said at the stop?** A per-slot, two-condition shape with falsifiers and a source-discriminating instrument still owed. Not which claim, not which cue, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 9. Updated verdict

The shape survives: **public judgments of institutional performance are corrupted along two distinguishable routes, a false input selected by the information habitat and a biased weight supplied by partisan identity, and the two form a union that a single lever cannot clear. The gap must be indexed per institution, anchored to measured performance, and kept separate per domain. Which particular claim or cue occupies the `???` slot is a `gap`, not an answer.**

Everything specific in the strong claim is refused or narrowed: public opinion is not the ground; "partisan bias" is not one scalar; `w` is a binding, not a figure-derived identity; no correction is claimed to close both conditions. Mode `specified`. No world source was allowed to flip a verdict; the one genuine conflict (poll as ground) was returned to the census and re-mapped. No unresolved strain remains after re-census.
