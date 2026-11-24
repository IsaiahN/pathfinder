# Figure-grounded audit: How can AI systems learn robustly from far fewer examples than current data-intensive methods often require?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured.
`THE_FORMULA.md` mode rule: *"Mode. general · specified · grounded. State which. Accepted means the
ground settled it; otherwise candidate."*

**Status: a simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap*
(Isaiah N, 2026): an LLM "can quickly simulate an approximate answer/output" but "the truly
testable output would need to be derived from the real architecture or working the formula
yourself." This document is a simulated derivation checked for internal consistency against the
figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figures 1 to 13, Operators and Symbols tables, `THE_FORMULA.md` and the canonical
figures README, all from the local framework copies. Every figure quotation below was checked
against `FRAMEWORK/reference/03-FIGURES_TEXT.md`, character by character, before use.

---

## 0. The residual stated in effect terms

The central quantity is `R = |Γ(b,a) − o′|` per slot `s` (Symbols :38, Fig 1 :8-11). Read the
question as an effect, not as a technique name:

- **"far fewer examples"** is a **support** constraint. The learner must get a positive live mass
  `|R⁺_s| > 0` on the few slots it sees, because a mint is gated by a product and any zero factor
  forces inertness (`THE_FORMULA.md` step 3, Fig 5 :19, :33, :41).
- **"learn"** is a **composition and settlement** constraint. The learner must compose a term `φ`
  that pays the bargain `cost(φ) + left(R,φ) < cost(R)` (Fig 5 :43-44) and then be settled by the
  ground (Fig 1 :23, Fig 5 :32).
- **"robustly"** is a **contact** constraint. `R` must stay small after the habitat is substituted,
  which is a property of agent and habitat, not of the agent alone (Fig 11 :39-40, :70).

What an answer would look like, bound as an ordinary term now so the preference can accrue a
residual (`THE_FORMULA.md` "Direction"): *a head start that supplies the atoms, a few examples that
select a composition among them, a non-updating ground that settles it, independent frames that
check it, and an open slot for what cannot be named.* That is the sought-for shape. It is written
down before the run so it can be refused.

---

## 1. Domain census, before choosing any figure line

`R` by arity, symmetry and scale:

- **Arity:** one residual per object or task slot, never a single global number. Fig 1 :19,
  *"The residual is indexed by object slot, not aggregated."* Fig 1 :22, *"Aggregating across slots
  is how a live signal disappears into an average."*
- **Symmetry:** the "few versus many" comparison is a threshold on a quantity (Fig 12 :87), not a
  symmetric join of two operands. The learner-ground relation is ordered: frames range against the
  ground (Fig 2 :45).
- **Scale:** one learner loop, a population of tasks or frames across the membrane (Fig 4 :19-22),
  and a deployment habitat over time (Fig 11, Fig 10 :24).

One line per domain. A domain needs actors, a currency and a nameable anchor; otherwise it is not a
domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 The learner's inner loop | slots s, belief b, weighting w, library Γ, actions a, observations o′, candidate term φ | residual reduction per slot; the bargain `cost(φ)+left(R,φ) < cost(R)` | the ground, the only metric (Fig 1 :23; Fig 2 :29) | admitted |
| D2 The inherited prior (head start) | atoms(Γ), priors, w, compressed methods from other tasks | how far belief leans on inherited prior versus private history (Symbols :24); reach and cost | the ground; provenance for imports (Fig 4 :22-25, Fig 6 :23) | admitted |
| D3 The task habitat and distribution | tasks, conditions, relations, other frames, deployment environment | contact between learner and ground | the ground, which does not decay (Fig 11 :39-40; Fig 10 :24) | admitted |
| D4 The checking arrangement | independent frames, instruments, verifiers | independence, how little frames draw on the same evidence (Fig 2 :31) | the ground, never agreement (Fig 2 :35, :42) | admitted |
| X1 "innate talent" as a free-floating property | the model | talent | **none nameable** | not a domain yet |
| X2 "just add more data" as sole cause | the dataset | volume | already inside D1 support | absorbed into D1 |

**Union, not partition.** Few-shot robustness is a compound of D1 (support plus bargain on few
slots), D2 (the prior supplies atoms), D3 (contact maintained across a substituted habitat) and
D4 (independent checking). They overlap. Fig 9 :54: *"A bundled problem is usually a union of
overlapping conditions, not a list of separate ones."* Fig 9 :57: *"What remains is smaller and it
is also categorically different: a case in two conditions is not a harder case of either."* One
lever clears the region where a single condition holds and leaves the intersections standing. This
is why "few-shot" and "robust" cannot be averaged into one accuracy number.

**Order by dependency (Fig 3).** Perception -> vocabulary -> objective -> planning -> learn and
carry. Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what
the one above produces, so effort spent above the break arrives at a step that cannot use it."*
For this question the likely break is the middle link: having terms for what a few examples afford
and being able to say what counts as progress.

---

## 2. Findings

### F1 - Few examples is a support constraint, and support is per slot (triangulated)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*

`THE_FORMULA.md` step 3 gates the mint: `SUPPORT |R⁺_s| > 0 for some s` before the search,
`REACHABILITY φ ∈ closure(Γ)` during, `NOVELTY φ ∉ atoms(Γ)` after. Fig 5 :33:
*"The three guards are a product, not a checklist."* Fig 5 :41:
*"Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."*

**Reading.** With few examples most slots carry no live mass. A mint needs positive support on at
least one slot; where it is absent the term is not licensed at all. An average benchmark accuracy
performs exactly the aggregation Fig 1 forbids: it lets a global `R` near zero hide the one live
slot where the learner failed. Mode `general` for the per-slot law, `specified` for AI learners.
Triangulated across Fig 1 (indexing), Fig 5 (guard product) and `THE_FORMULA.md` step 3, three lines
with low conceptual overlap.

**Refuter.** A learner with zero positive residual on the held-out slot mints a term that the
ground subsequently settles. If that happens, the support guard as stated is false.

### F2 - Few-shot works when the needed atoms are already held, supplied as a head start (triangulated)

Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*
Fig 6 :22: *"NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."*
Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

Fig 4 :12: *"a head start, never a recording"*
Fig 4 :22: *"Only methods cross up. Only head starts come down."*
Fig 4 :24: *"downward: something that makes the next search cheaper. Never a replay of what worked once."*
Fig 4 :34-35: *"A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes."*

Symbols :24: *"How far the belief leans on private history versus inherited prior."*

**Reading.** "Learning to learn", meta-learning, an inductive bias, a prior, a pretrained
representation: in figure terms these are all the **head start**. What descends is a method or a
head start that makes the next search cheaper, never a recording of one past success. Few examples
then do not have to supply new atoms; they select among compositions of atoms already in `Γ`. If a
required atom is genuinely absent, composition cannot reach it, and no number of examples fixes
that from inside the frame. The remedy is an import with provenance from a differing closure
(Fig 8 :52, *"the surplus lives only where the closures differ"*). This is the figure-grounded
content of "few-shot ability comes from prior structure", without naming which architecture supplies it.

**Triangulation.** Fig 4 (the membrane between scales) and Fig 6 (the closure wall) are separate
figures governing different objects, so their agreement is low-overlap. Symbols `w` supplies the
weighting quantity. Status `triangulated`.

**Refuter.** A system shows few-shot success on a task whose required atom is demonstrably absent
from `Γ`, with no import recorded. That breaks the closure law and F2 together.

### F3 - Robustness is agent-and-habitat contact, not an agent-only property (triangulated)

Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."*
Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*
Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

Fig 10 :24: *"the ground does not decay, the channel does"*
Fig 10 :26: *"saturated metrics, pooled readings"*
Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*

**Reading.** "Robustly" is not a property you can read off a model in isolation. It is the claim
that `R` stays small after the habitat is substituted, i.e. that contact with a non-updating ground
has been maintained. A few-shot benchmark is a test harness; a synthetic solve proves wiring, not
capability. A model that fails under a small context change has lost contact or never had it,
regardless of its average score. Mode `specified` for systems, `general` for the agent-and-habitat
law. Triangulated across Fig 11 (habitat), Fig 10 (channel decay) and Fig 2 (anchor), three figures
with distinct roles.

**Refuter.** Few-shot accuracy holds across a documented habitat substitution while contact (the
set of conditions and the ground being ranged against) is unchanged and no new atom was imported.
That would refute the capability-claim in Fig 11 :40 as applied here.

### F4 - A robustness claim must be checked by independent frames, or agreement is one pool (triangulated)

Fig 2 :31-32: *"Independence is what makes agreement mean something."*
Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

Fig 8 :45: *"Two frames together reach what neither reaches alone."*
Fig 8 :47: *"Independence is one quantity read twice."*
Fig 8 :52: *"the surplus lives only where the closures differ."*
Fig 6 :50: *"Distribute the search, and keep the searchers independent."*
Fig 7 :35: *"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

**Reading.** A claim of few-shot robustness supported by many benchmarks that share a construction,
a corpus or an author is one witness stated many times. What buys evidence is a second frame whose
closure differs at the evidence level and which ranges separately against the same ground. Note
that independence is a single parameter read twice: the same quantity that creates a union surplus
also makes agreement costly to obtain, so there is no free lunch here (Fig 8 :47-49). Triangulated
across Fig 2, Fig 6 and Fig 8.

**Refuter.** A robustness claim supported only by frames with declared shared evidence still
predicts an independent ground at the same rate. If it does, the independence law is wrong for this
case.

### F5 - The broken link is vocabulary and objective, and it has no instrument (single-source)

Fig 3 :25-26: *"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."*
Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

**Reading.** Most effort in "data efficiency" lands above the break: collect more data (perception)
or build a bigger model (planning). The chain stops earlier, at the link where the learner must
have a term for what a few examples afford and state what would count as progress from them. That
link has no standard instrument in the field, which is exactly why it is not fixed by scaling.
Status `single-source` on the figure side (Fig 3 only); world sources below corroborate the
mechanism, not the figure line. Mode `specified`.

**Refuter.** An instrument measures the vocabulary/objective link and shows it working while
few-shot failure persists on the same slots. Then Fig 3's middle-link diagnosis is wrong here.

### F6 - Absence versus budget: more examples are not always the remedy (single-source)

Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
Fig 8 :40-42: *"Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."*
Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*

**Reading.** Two different failures look identical from inside a learner. If the needed atom is
absent from `Γ`, no amount of additional examples helps; an import is owed. If the atom is present
but the search never found it, the remedy is more or better distributed independent search, not a
new atom (Fig 6 :50). Adding data to an absence case imports nothing and just spends budget. Status
`single-source` across Fig 6 and Fig 8, which are closely related figures, so I do not claim two
witnesses. Mode `general` for the distinction.

**Refuter.** A case where adding examples fixes a failure after the required atom was proved absent
from `Γ` and no import occurred. That collapses underivable into unreachable-at-budget.

### F7 - The specific winning architecture is a declared `gap`

Fig 9 :32: *"you get a kind of thing, never the answer itself"*
Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause"*
Fig 13 :134: *"Unreachable is a verdict here, not a silence,"*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

**Reading.** No figure line names MAML, Bayesian program learning, a particular prior or a specific
architecture. The framework returns a shape: head start supplying held atoms, few examples
selecting a composition, ground settlement, independent checking, and an open slot. Which concrete
binding occupies the slot is licensed only by a ground reading or by a provenanced import, not by
the figures. This is `gap` in the strict sense, and it is a verdict, not a silence. Mode `general`.

**Refuter.** Produce a figure line that names a specific few-shot algorithm as the required one.
Then F7 is withdrawn.

---

## 3. Strain test and re-census

**S1 (the apparent "few-shot is impossible" strain).** Fig 6 :21 says the mint "can never add an
atom" and Fig 8 :32 says no search adds an atom. Read naively this denies that a learner can gain
anything from few examples. **Re-census:** these lines govern **reach**, what is composable from
held atoms. They do not govern **settlement**, which composition the ground pays for. Few examples
select among compositions and cost no new atom; a genuinely new atom still requires contact with a
differing closure (Fig 8 :52). Different quantities, no strain after re-census. The correction is
kept visible here rather than erased.

**S2 ("shape, not a name" versus naming an inductive bias).** Fig 9 :32 seems to forbid naming the
mechanism. **Narrowing:** the canonical README says the framework returns *"a shape, not a name"*
for what a **missing** thing would look like. An inductive bias, a prior or a head start is not a
missing primitive; it is a binding onto atoms already held or a method that descended across the
membrane (Fig 4 :22). Naming it is provenance, not the invention of a seventh term. I overstated
this on a first pass; the narrowed form is recorded in `05_what_shape_means.md` section 6 and kept
here.

**S3 (more data as an exception to closure).** World learning theory says sample complexity falls
as the hypothesis class shrinks. This is not a strain: a restricted class is a prior, i.e. a head
start (D2), and the sample count is a **budget** variable, not a witness for the verdict
(Fig 9 :60, *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you
a verdict."*).

After re-census: one narrowing (S2) and one dissolved strain (S1), none hidden.

---

## 4. Pre-registered refuter

Required before any outreach: a falsifier written before the run is a design instrument. The shape
claim above is refuted if any of the following holds. These were written before the conclusion and
before the WATSON run.

1. A learner with zero positive residual on the held-out slot mints a term the ground settles
   (breaks F1 and the support product).
2. Few-shot success on a task whose required atom is provably absent from `Γ` with no import
   recorded (breaks F2 and F6).
3. Few-shot accuracy holds across a documented habitat substitution while contact is unchanged and
   no atom was imported (breaks F3).
4. A robustness claim supported only by frames with declared shared evidence predicts an
   independent ground at the same rate (breaks F4).
5. The vocabulary/objective link is measured working while few-shot failure persists on the same
   slots (breaks F5).
6. A figure line names the specific few-shot algorithm that wins (breaks F7).

If any fires, that domain verdict is withdrawn. Until one is run, no part of this is `grounded`.

---

## 5. Recommendation

1. Lead with F1 and F3: index the residual per slot, and test across a substituted habitat, not on
   one benchmark harness (Fig 1 :19, Fig 11 :70).
2. Treat "number of examples" as a **budget filter**, never as a witness (Fig 9 :60). Fewer examples
   does not by itself make a method more capable.
3. Build and declare the head start. Record provenance for any atom or method that crossed from a
   differing closure; a wrong atom costs more than starting from primitives (Fig 6 :24, Fig 8 :52).
4. Buy independence in proportion to the cost of being wrong (Fig 2 :42): check with a frame whose
   evidence pool differs, and record the verdict before showing it the theory (Fig 10 :52).
5. Keep F7 open. Send the generator, the shape and the refuter, not a named answer
   (Fig 4 :22-25).

---

## 6. Canonical usage check

Two local sources govern how the figures may be used, read after the first five sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the
  repo"; "a reading that makes one contradict another has misidentified its domain, not found a
  flaw"; the framework reports "what a missing thing would have to look like (**a shape, not a
  name**)" and stops at the limit of the instruments, recording the lineage; "Indiscernibility is
  not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws, so design questions
  are answered by derivation rather than by escalation to an authority. A seat reads the ground; it
  does not ask the anchor to decide what the figures already settle.

### Retractions and confirmations

| earlier reading | status after the check |
|---|---|
| "Fig 6 forbids learning from few examples" | **Retracted at re-census.** Fig 6 governs reach, not settlement. Few examples select compositions without adding atoms (S1). |
| "shape, not a name forbids naming an inductive bias" | **Narrowed and kept visible.** The rule governs a missing primitive; a head start is a binding onto held atoms (S2, `05` section 6). |
| "robustness can be read off an average benchmark" | **Refused.** Fig 1 :19/:22 and Fig 11 :70. A global score hides the live slot and a harness proves wiring. |
| "more data is a cause of capability" | **Absorbed into D1 budget.** Fig 9 :60. A budget filter cannot hand you a verdict. |
| "independence is a nice-to-have" | **Canonically confirmed as structural.** Fig 2 :31, :42 and Fig 8 :47 treat it as one quantity read twice. |
| F7 as a `gap` | **Canonically confirmed.** Fig 9 :32 plus the README's shape-not-a-name limit. `Unreachable is a verdict here, not a silence` (Fig 13 :134). |

---

## 7. Findings summary table

| claim | mode | figure | status |
|---|---|---|---|
| `R` must stay indexed per slot; an average hides the live slot | `general` | Fig 1 :19, :22 | triangulated |
| Support is a product guard; no positive mass, no mint | `general` / `specified` | Fig 5 :33, :41; Formula 3 | triangulated |
| A head start supplies held atoms; few examples select a composition | `specified` | Fig 4 :12, :22, :24; Fig 6 :21-23 | triangulated |
| Robustness is agent-and-habitat contact across a substituted habitat | `specified` | Fig 11 :39-40, :70; Fig 10 :24 | triangulated |
| Independence decides whether agreement and union mean anything | `general` | Fig 2 :31, :35, :40; Fig 8 :45, :47 | triangulated |
| The broken link is vocabulary and objective, unmeasured | `specified` | Fig 3 :25-27 | single-source |
| Absence and budget are different failures with different remedies | `general` | Fig 6 :27; Fig 8 :32, :39, :40-42 | single-source |
| Which architecture wins | `gap` | Fig 9 :32; Fig 13 :134 | unreached, not silence |
