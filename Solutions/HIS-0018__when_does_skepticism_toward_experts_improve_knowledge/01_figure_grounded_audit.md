# Figure-grounded audit: when skepticism toward experts improves or degrades knowledge

**Mode of this document: `general` on the structural claim, `specified` on the two regimes.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The essay *The Recursive Self-Improvement Trap* states: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post."* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, with line numbers), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays by Isaiah N, and the world sources recorded in `10_source_ledger.csv`. All were opened this session (2026-11-23).

---

## 0. The residual, in effect terms

The observation to be explained is a **valence flip**. A skepticism event S (withholding assent from an expert claim E, or refusing the standing of the expert who carries it) is followed sometimes by better knowledge and sometimes by worse. The residual R is the unexplained variation in that valence.

- **Arity.** S is a ternary relation at minimum: skeptic frame B, expert claim or frame A, and the ground G against which E purports to hold. A fourth term, the channel C between B and G, is needed to describe the degrading cases.
- **Symmetry.** S itself is a unary operator, a refusal (¬) applied to a held term. It is not symmetric: swapping skeptic and expert does not produce the same event. Its *effect* is asymmetric for the same reason.
- **Scale.** First order, a single claim. Second order, the standing or credentials of the expert. Third order, the institution that certifies expertise. A single event can act at all three scales at once, which is why the two-regime answer is a union, not a partition (see §1 and `06_isomers_and_order.md`).

The question is a "when" question. It asks for the variable on which the valence indexes. The figures' own rule for such questions is that valence is not carried by the actor: Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :51 "No standing list of good actors survives a change of residual." So "is skepticism good or bad" is the wrong form of question, in the same way Fig 11 :35 calls "what is intelligence" the wrong question. The answerable form is: what makes a skepticism event capable, and capability is a property of skeptic-and-habitat (Fig 11 :39), never of the skeptic alone.

**Bound shape (Direction step, written down before the run).** The sought-for answer is written as an ordinary term so it can accrue a residual: *S improves knowledge iff its refusal aims at a settleable held term, comes from a frame with low overlap with the expert frame, and preserves the channel to the ground. S degrades knowledge iff the refusal aims at the ground or the channel, comes from a correlated pool, or is driven by a stake in the reading.* This is the claim the refuter in §4 is written against.

---

## 1. Domain census (before choosing any figure line)

Describe R by arity / symmetry / scale, then one line per domain with actors, currency and anchor. A domain without a nameable anchor is not a domain yet.

- **R:** as in §0. Arity 3 to 4. Symmetry: unary refusal with asymmetric effect. Scale: claim, standing, institution.

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| **D1. Claim and ground** | the expert claim E, the held term, the ground G (measurement, experiment, counter, outcome, replicated observation) | settlement: does the ground pay? | **Yes:** G, which does not move when a frame pushes on it (Fig 2 :29-30) | partition: is this term settleable or not? |
| **D2. Frames and triangulation** | expert frame A, skeptic frame B, their evidence pools, the chain of rooms over time | independence (overlap ρ) and residual | **Yes:** G as the selection pressure between rooms (Fig 7 :35) plus independence as the measurable quantity (Fig 2 :31-32) | selection between rooms, not negotiation |
| **D3. Channel and habitat** | the verifier / ground-maintainer office, instruments, journals, peer review, credentials, funders, the public | contact with the ground; conventions that decide nothing about the world | **Yes:** ground reachability (Fig 10 :24 "the ground does not decay, the channel does") | maintenance: is the channel kept open? |

All three domains have nameable anchors, so all three are domains.

**Partition or union?** Not a partition. The same ground threads through all three, and one skepticism event can act in all three simultaneously: refuse a term (D1), from a frame (D2), inside an institution (D3). The two "regimes" are a **union of overlapping conditions**, not a list of separate kinds. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." So the regimes must be unbundled and each condition looped separately. This is done in `06_isomers_and_order.md`.

**Order by dependency (Fig 3).** Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Fig 3 :20-21 "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces". Order:

1. **D1 perception/vocabulary:** can the claim be brought against a ground at all? Without this, the next links have no input.
2. **D2 objective/planning:** is there an independent frame that can range against that ground and match the residual?
3. **D3 learn and carry:** is the channel maintained so the correction can be carried forward?

Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." The instrument for D2 overlap is not supplied by the figures (a gap named in §7).

---

## 2. Figure census

Quotes are verbatim from `03-FIGURES_TEXT.md`, cited as `Fig N :line`. Strained readings are named, not smoothed.

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | per-slot residual; frame-internal quantities disqualified | "public trust is up/down" is an aggregate that throws away the signal |
| **2 The Ground** | anchor, independence, three collapses, triangulation not negotiation | decides both regimes |
| **3 Dependency Chain** | order by dependency; a link with no instrument | orders D1 to D3; D2 lacks a stated overlap instrument |
| **4 The Membrane** | only methods cross up; round trip gap `R_T` | any condensation into a rule carries a measurable gap |
| **5 Mint Pipeline** | refusal is a fifth gap; which term to refuse | decides the *aim* of skepticism |
| **6 Closure / Reachability** | import moves the wall; reach falls when a refusal is added | decides undoability and cost |
| **7 Room Chain** | agreement compounds, evidence does not; selection between rooms | decides the improving regime |
| **8 Union Surplus** | independence read twice; residual first, frame second | decides why independent doubt adds reach |
| **9 Leave / Arrive** | union vs partition; describe before looking; verdict vs budget | forces the unbundling in §1 |
| **10 Ground Maintainer** | channel decay, stake in the reading, standing, ground with a reputation | decides the degrading regime |
| **11 The Habitat** | valence relative to residual; capability is agent-and-habitat | removes the intrinsic-valence reading |
| **12 The Bond** | a refutation is a negation, not a bond; a vocabulary without it can only accumulate | classifies S before judging it |
| **13 Minimum Viable Set** | independence applied to the set itself | corroborates Fig 2 on overlap |
| **Operators table** | negation is unary; a vocabulary without it can only accumulate | corroborates Fig 12 |
| **Symbols table** | R is the aim; the ground is the anchor; not in the library | fixes the vocabulary of the residual |

---

## 3. Findings

### F1  /  Skepticism is a negation, and the negation carries no valence (decisive, `general`)

Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond." Operators :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate". Fig 12 :139-140 "and it cannot write that any of those is false".

S is ¬ applied to a held term. The operator has the same form in both outcomes. What differs is its aim and its relations, not the operator. Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone", and Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."

**Domain:** all three. **Mode:** `general` (structural). **Triangulation:** Fig 12 plus Operators table plus Fig 11, low overlap between the bond analysis and the habitat analysis.

**Refuter:** exhibit a case where the same refusal operator, aimed at the same held term from the same frame, changes valence with no change in aim, overlap or contact. Then valence is intrinsic and F1 fails.

### F2  /  Improving regime: the refusal is a selection between rooms (`specified`)

Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 7 :24-25 "low ρ between rooms; the next room is picked against the residual the last one surfaced". Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced." Fig 8 :45 "Two frames together reach what neither reaches alone." Fig 8 :48 "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."

When a skeptic brings a genuinely different closure, selected against the residual the expert frame surfaced, the union has a surplus the expert frame could not derive from inside. Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." This is the *Library of Babel* observation that *"people new to a research field can often make connections that the seasoned experts may miss."*

**Domain:** D2. **Mode:** `specified`. **Triangulation:** Fig 2, Fig 7 and Fig 8 are three distinct figures with different roles (anchor, chain, union), so this is triangulated, not a single source.

**Refuter:** a case where a low-overlap frame, selected against the surfaced residual, produced no improvement in contact with the ground.

### F3  /  Improving regime requires a settleable aim and a pre-registered refusal criterion (`specified`)

Fig 5 :58-59 "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at". Formula step 2 sorts this as REFUTED: a term held is false and what is owed is a refusal, not an explanation. Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so". Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit".

The world source closest to this is the SEP entry on Karl Popper (Stephen Thornton), which reports that for Popper *"criteria of refutation have to be laid down beforehand: it must be agree which observable situations, if actually observed, mean that the theory is refuted."* A doubt that cannot name what would settle it is not aimed at a term; it is aimed at the direction of the question, which the loop cannot see.

**Domain:** D1. **Mode:** `specified`. **Triangulation:** Fig 5 and Fig 9 (figure internal) plus Popper/SEP (independent, low overlap with the framework author).

**Refuter:** a case where skepticism improved knowledge while the skeptic could not state, in advance, what observation would have ended the doubt.

### F4  /  Degrading regime: the ground is promoted to a party, so everything drifts (`specified`)

Fig 2 :33 "The anchor must not update." Fig 2 :34 "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices." Fig 2 :47 "A ground listed as one of the parties has already become a frame." Fig 2 :45 "Frames range against the ground. They do not negotiate with it."

Skepticism degrades knowledge when it treats the measuring instrument, the replication record, or the settled experimental finding as "just another interested claim" that can be negotiated with. Then the anchor updates, panel 3 becomes panel 1, and the drift is invisible from inside. The *Merchants of Doubt* case is the world instance: Oreskes and Conway describe the tactic as using *"normal scientific uncertainty to undermine the status of actual scientific knowledge"*, in their words *"As in jujitsu, you could use science against itself."* Hume's rule points the other way: *"A wise man, therefore, proportions his belief to the evidence."*

**Domain:** D1 and D3. **Mode:** `specified`. **Triangulation:** Fig 2 (figure) plus Oreskes and Conway (history of science) plus Hume (philosophy of skepticism), independent evidence pools.

**Refuter:** a case where knowledge improved after the instrument or the settled record was itself treated as an interested, negotiable claim.

### F5  /  Degrading regime: correlated pool and stake in the reading (`specified`)

Fig 2 :39 "Correlation has valence." Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool". Fig 2 :42 "Buy independence in proportion to the cost of being wrong." Fig 10 :59 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying". Fig 10 :61 "And standing is a stake that survives the outcome it was earned on." Fig 10 :93 "A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified."

A skeptic who draws on the same pool as the expert adds spelling, not search (Fig 6 :49-50). A skeptic with an interest in the reading produces a refusal that cannot count as a verdict. The expert's credentials are also a standing stake and must be declared on the other side, so this is symmetric between the two parties. The *Decoding Tacit Knowledge* essay gives the mechanism plainly: *"Two people who only check against each other drift, and they drift together, so neither notices."* Lord, Ross and Lepper (1979) supply the experimental form: exposing opposing factions to an *identical* body of evidence produced *"not a narrowing of disagreement but rather an increase in polarization."*

**Domain:** D2 and D3. **Mode:** `specified`. **Triangulation:** Fig 2 plus Fig 10 plus Lord et al. (cognitive psychology, independent pool).

**Refuter:** a case where a doubt driven by a declared stake in the reading, and drawn wholly from the expert's evidence pool, still improved contact with the ground.

### F6  /  Degrading regime: the channel decays while the ground does not (`specified`)

Fig 10 :24 "the ground does not decay, the channel does". Fig 10 :25-26 "stale percepts, dropped transients, saturated metrics, pooled readings". Fig 10 :27-28 "you have lost touch". Fig 10 :29 "keep the anchor reachable". Fig 11 :61 "Introduction is available; exclusion is not."

When skepticism attacks the channel (journals, replication, instruments, the credentialing process) without supplying a better reading of the ground, it substitutes a habitat rather than removing one (Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another."). What is lost is invisible until the goal fails. Shermer's *Scientific American* piece gives the world case: *"Manufacturing doubt is not difficult, because in science all conclusions are provisional, and skepticism is intrinsic to the process."* Collins and Evans give the balanced normative form: their Third Wave position can be used against *"both an excessive reliance on science and an unrestrained suspicion of expertise."*

**Domain:** D3. **Mode:** `specified`. **Triangulation:** Fig 10 plus Fig 11 plus Shermer and Collins and Evans, independent pools.

**Refuter:** a case where degrading the channel, with no replacement instrument, still improved contact with the ground.

### F7  /  A refusal is undoable, and the cost is bounded by the record (`general`)

Fig 6 :41-43 "What is recorded only grows. What is reachable is derived, and it can fall." Fig 6 :44-45 "A term is reachable if it is derivable under everything currently held, so what happens to terms built on a refuted one follows from derivation rather than being stipulated." Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

A correction is a negation added to the record, not a deletion. Reach falls because something was added. This makes the degrading cases recoverable without erasing anything, and it makes the cost of a wrong refusal locatable rather than global. It also forbids the usual summary statistic: "trust in experts is up/down" aggregates across slots and discards the only signal that says where to look.

**Domain:** all three. **Mode:** `general`. **Triangulation:** Fig 6 plus Fig 1, different figures and different quantities.

**Refuter:** show that a refused term is deleted rather than retained, or that reach does not fall when a held term is refused.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the standing instruction, a falsifier written before the run is a design instrument. This section was written before §8.

**The shape claim to be refuted:** skepticism's valence is set by three conditions: aim at a settleable held term; low overlap of the skeptical frame with the expert frame; preservation of the channel to the ground. All three improving gives improvement; inversion of any one degrades it.

**Falsifiers.**

1. A documented case in which skepticism improved knowledge while the skeptical frame drew on the same evidence pool as the expert frame, **and** the refusal aimed at the channel rather than a settleable term, **and** the skeptic declared a stake in the reading. All three inversions holding while contact improves refutes the shape.
2. A documented case in which skepticism degraded knowledge while low overlap, settleable aim and channel preservation all held.
3. A documented case in which the skeptic could not state in advance what observation would end the doubt, yet the doubt improved contact. This kills F3.
4. A case in which the ground was treated as a negotiable party and knowledge still improved. This kills F4.
5. If no nameable ground can be found for an apparent case, the anchor test (Fig 2 :29-30) excludes it. It is not counted either way. Fig 8 :39 "So a search that finds nothing is never a proof of absence."

**Meta-refuter of this whole derivation:** demonstrate that the figures can be read with a different census in which skepticism carries intrinsic valence. That would be a genuine conflict and would send the analysis back to §1, never flip the verdict by preference.

---

## 5. Recommendation

1. Ask the "when" question as a relation, not a virtue (F1). Do not answer "doubt more" or "trust more".
2. Require a pre-registered refusal criterion before counting a doubt as knowledge-improving (F3). This is the cheapest filter available and it is the one the exemplar's outreach discipline already uses.
3. Test independence, not agreement. Ask what evidence the skeptic and the expert draw on separately (F2, F5).
4. Protect the channel. A doubt that cuts an instrument without offering a better reading is a habitat substitution, not a correction (F6).
5. Report the residual per slot. A single national or field-wide "trust in experts" number is an average that destroys the signal (F7).
6. Declare stakes on both sides. Credentials and standing are stakes that survive the outcome (F5).
7. Keep the record. A refusal is undoable precisely because nothing is deleted (F7).

Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." The three conditions are filters for deciding what to measure. The ground is the witness.

---

## 6. Canonical usage check

Two local documents govern how the figures may be used, both read this session:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"* and *"the quotes are the authority, not this summary."* It gives the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* It gives the limit: the framework reports *"what a missing thing would have to look like (a shape, not a name)"* and stops where instruments cannot distinguish.
- `FRAMEWORK/figures/THE_FORMULA.md`: step 2 REFUTED, step 5 *"the ground settles it. Verified only by what pays. A gate is not the ground."*, step 7 SEARCHED / INWARD / OUTWARD, and the mode rule.

Applied here: the two regimes were not assumed to be contradictory readings. When Fig 11 (valence is relative) seemed to strain against Fig 2 (correlation has valence), re-census resolved it: Fig 11 governs the actor's valence; Fig 2 governs the correlation of frames. Different objects, so no strain after re-census.

---

## 7. Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| "skepticism is good" / "skepticism is bad" | **Retracted as a form of question.** Fig 11 :49-51 makes valence relative to the residual. Both readings assign the valence to the operator. |
| Two regimes as two kinds of skepticism | **Retracted.** They are a union of overlapping conditions (Fig 9 :54-55). Rewritten as conditions in `06_isomers_and_order.md`. |
| "the ground settles it, so just consult the ground" | **Narrowed.** Fig 10 :24 says the channel decays. A ground that cannot be reached is not a verdict. F6 carries this. |
| Independence treated as a moral virtue | **Narrowed.** Fig 2 :31-32 defines it as a quantity (how little the frames draw on the same evidence), and Fig 2 :42 prices it. It is a filter, not a verdict. |
| The eight essays as independent corroboration | **Declared high overlap.** They are by the figure author. The SEP, Collins and Evans, Lord et al., Oreskes and Conway, Shermer, Hume and Popper/Thornton are the low-overlap witnesses. |
| Missing overlap instrument for D2 | **Named as a gap, not filled.** Fig 3 :27 "A link with no instrument is not a link that works." No figure supplies a measure of ρ for belief systems. |
| Fig 11 versus Fig 2 apparent strain | **Not strained after re-census.** Actor valence versus frame correlation. Different objects. |
| Popper/SEA used in F3 as corroboration | **Narrowed, not retracted.** It corroborates only the discipline of fixing a refusal criterion before a test. The canonical article explicitly declines "The seat as a Popperian critic": Popper's critic draws on the community's evidence, whereas the seat cannot reconstruct the claim. No claim is made here that critical rationalism supplies the verification seat. See `05_what_shape_means.md` §7. |

---

## 8. Verdicts per domain (kept separate, never averaged)

| domain | verdict | status | mode |
|---|---|---|---|
| **D1 claim and ground** | Skepticism improves knowledge when the refusal aims at a term with a persistent, flat residual and a refutation criterion is fixed in advance. It degrades knowledge when the ground or the settled record is promoted to a negotiable party. | **triangulated**: Fig 2, Fig 5, Fig 9 plus Popper/SEP and Oreskes and Conway, low overlap | `specified` |
| **D2 frames and triangulation** | Skepticism improves knowledge when the skeptical frame has low overlap with the expert frame and is selected against the residual the expert frame surfaced. Agreement within a shared pool adds no evidence. | **triangulated**: Fig 2, Fig 7, Fig 8, Fig 13 plus Lord et al., low overlap | `specified` |
| **D3 channel and habitat** | Skepticism improves knowledge when it keeps the anchor reachable and declares both stakes. It degrades knowledge when it cuts the channel without a replacement instrument, because the ground does not decay but the channel does. | **single-source within the figures**: Fig 10 and Fig 11; corroborated by Shermer and by Collins and Evans, independent pools | `specified` |

No averaging across domains. A case can be improving in D2 and degrading in D3 at the same time; that is a compound with its own loop, not a middle value.

**Final status:** the shape survives as `general` structure plus `specified` conditions. It is not `grounded`. A pre-registered refuter is in §4, and what would settle it is in `07_the_tether_answer.md` §4. No figure line was forced; one instrument gap is recorded openly.
