# Figure-grounded audit: what determines whether an introduced species becomes invasive and transforms an ecosystem?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured.
`THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground
settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The canonical article says LLM
outputs produced from the figures are *"simulacra"* and that *"the truly testable output would need
to be derived from the real architecture or working the formula yourself."* This document is a
simulated derivation checked for internal consistency against the figures. It cannot settle the
question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure quotations are from `FRAMEWORK/reference/03-FIGURES_TEXT.md` only, cited as
`Fig N :line`. Canonical usage is from `FRAMEWORK/reference/FIGURES_README_canonical.md`.
World sources were opened on 2026-11-23 and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The question as it is normally asked treats invasiveness as something a species *has*: list the
traits, get the answer. Stated in effect terms, the residual is:

> A species is moved into a habitat it did not author. What decides the sign, reach and persistence
> of the contact cascade that this actor then sets up, including changes three steps out, such that
> the receiving system is transformed rather than merely added to?

What an answer would look like, bound as an ordinary term before the run (Formula "Direction"):
a claim of the form *invasiveness is a property of (actor, habitat, residual) and is settled only by
measured contact effects*, with a stated refuter. Binding it lets it accrue a residual like
anything else instead of remaining an unseen preference.

**R by arity, symmetry and scale.**

- **Arity:** two-place, and then three-place once a residual is named. The actor alone is not the
  subject. Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a
  system capable. And capability is a property of agent-and-habitat, never of the agent alone."*
- **Symmetry:** not symmetric under a change of residual. The same actor changes sign depending on
  which effect you track. Fig 11 :50: *"The same actor is a benefactor to one residual and a
  malfactor to another, so mutualism and parasitism are relations rather than kinds."*
- **Scale:** at least three orders. Direct contact, then the cascade out to the effect that mattered.
  Fig 11 :52: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the
  eagles: first-order enumeration, second-order effect, and the residual that mattered was three
  steps out."*

---

## 1. Domain census

One line per domain with actors, currency and anchor. A domain with no nameable anchor is not a
domain yet.

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| 1. The introduced actor (propagule and its traits) | the individual organism, its traits, its propagule number | establishment and population growth | the ground: does it persist and spread in this habitat? | yes, but only inside domain 2; removed from contact it has no independent anchor |
| 2. The habitat (field of contact) | residents, conditions, relations: light, water, temperature, season, terrain, pollination, predation, competition, dependency | the contact cascade | the ground: measured change in the enumerated actors and relations | yes, this is the governing domain |
| 3. The introducing seat (maintained mode) | the agency that moves the actor | introduction, never exclusion | the ground: what the introduced actor actually did | yes, but in unmaintained mode there is no seat |
| 4. The verifier / reader | specialist readers | agreement and residual | the ground, never agreement | yes, but its independence is zero in this simulated run |

**Partition or union.** This is a **union compound**, not a partition. Establishment, cascade reach
and impact sign overlap. Fig 9 :55: *"A bundled problem is usually a union of overlapping
conditions, not a list of separate ones. A single lever clears the region where only one condition
holds and leaves the intersections standing, because the second condition still binds."* The
intersections are the cases that establish and then transform: a lever that only blocks establishment
leaves them, and a lever that only reduces harm leaves the establishment cases. Fig 9 :54:
*"And when the split lands on a union rather than a partition, unbundle before you search again."*

**Dependency order (Fig 3).** Enumerate the habitat before assessing the actor (Fig 11 :43); describe
the residual before choosing a frame (Fig 9 :27-28); settle establishment before measuring cascade;
refuse before mint where a held term is wrong (Formula step 2). Fig 3 :19: *"Optimising a link that
already works cannot rescue one that does not."*

**Per-slot, not global.** Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A single
"biodiversity impact" score is the forbidden average: the live slot (one predator, one scavenging
function) vanishes into it.

### Figure census (candidate lines before the findings)

| figure | bearing | initial verdict |
|---|---|---|
| 11 The Habitat | actor, conditions, relations, enumeration, cascade, asymmetry, isolation, two modes | governs the question directly |
| 4 The Membrane | a seed carries no small tree; the landing conditions decide | triangulates the actor-alone refusal |
| 1 The Agent | per-slot residual | governs the method of measurement |
| 2 The Ground | anchor, independence, correlation | governs the verdict, not the mechanism |
| 3 Dependency Chain | order by dependency | governs the order of the loops |
| 6 Closure / Reachability | import moves the wall; instruments improve from worse instruments | governs what would settle it |
| 7 Room Chain | agreement compounds, evidence does not | governs outreach, not the mechanism |
| 8 Union Surplus | residual first, frame second; no proof of absence | governs the union reading |
| 9 Leave / Arrive | describe before looking; unbundle a union | governs the census |
| 10 Ground Maintainer | bring a characterised residual, never the source | governs the packet |
| 12 The Bond | catalyst, cycle, functional group | governs the supporting derivation |
| 13 Minimum Viable Set | network as a structure; closed set, open arrangements | corroborating, not decisive here |

Strained readings are named in section 5, not smoothed over.

---

## 2. Findings

### F1 : The actor-only question is refused; the governing object is the contact relation

Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system
capable. And capability is a property of agent-and-habitat, never of the agent alone."*
Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An
improvement that does not change contact changes nothing, however much it improves."*

Triangulated across a second, low-overlap figure. Fig 4 :34-35: *"The level a method lands on
remakes it. A seed carries no small tree: it carries what will grow one, and the conditions it lands
in decide what it becomes."* Fig 4 concerns the membrane between scales; Fig 11 concerns the field
of contact. Different subject matter, same verdict: the incoming thing does not carry the outcome.

Applying this to the question: "which species are invasive?" is the wrong question form. The
answerable form is "which (actor, habitat, residual) triples produce a transforming cascade, and
what would measure it?" A species-level trait list is an improvement of the agent in isolation, and
by Fig 11 :40 it changes nothing unless it changes contact.

**Refuter:** show an actor whose establishment probability and cascade are invariant across all
habitats at equal propagule pressure. That would make capability a property of the agent alone.
Fig 11 :71-72 itself names the mirror version of this test: *"an agent-only improvement that moved
the ground would refute the capability claim."*

World corroboration (secondary): Hui, Pyšek and Richardson 2023 define invasiveness as conditioned
on recipient context and invasibility as an emergent property of the recipient ecosystem. This is a
different field's phrasing of the same relational claim. It corroborates; it does not decide.

### F2 : Valence is relative to the residual; there is no standing list of "invasive species"

Fig 11 :49: *"An actor’s valence is relative to the residual, not a property it carries."*
Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so
mutualism and parasitism are relations rather than kinds."*
Fig 11 :51: *"No standing list of good actors survives a change of residual."*

So a species is not "an invasive species" in the way it is a mammal. It is a malfactor relative to
one tracked residual and possibly a benefactor relative to another. The question's phrase "becomes
invasive" hides the residual that would have to be named before the word has a truth value. This is
a **single-source** verdict inside the figures (Fig 11); `THE_FORMULA.md` "Habitat" repeats it
(*"Valence is relative to R, not carried"*), but that is the same framework restating itself, not a
second independent witness.

**Refuter:** produce a context-free, residual-independent harm ordering of species that holds across
habitats and across every tracked effect. That would make valence a carried property.

World corroboration: Jolly, Shine and Greenlees 2015, *"Some invaders have catastrophic impacts,
whereas others may benefit native taxa; some native taxa are more vulnerable than others."*

### F3 : The transformation is the cascade, not the arrival; direct contact is the wrong scope

Fig 11 :52: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the
eagles: first-order enumeration, second-order effect, and the residual that mattered was three
steps out."*
Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and
outward until the cascade stops mattering."*
Fig 11 :45-47: *"actors: what acts on it, and what it acts on"*, *"conditions: light, water,
temperature, season, terrain"*, *"relations: pollination, predation, competition, dependency"*.

Enumeration is read off the world, not composed: Fig 11 :48 *"You do not invent the list. You read
it off the world, and what you cannot perceive or measure yet is the residual."* So the answer to
"what determines whether it transforms the ecosystem" is not a trait of the invader but the shape
of the enumerated contact graph and where the cascade terminates. The transform is a second- or
third-order effect, not a first-order one.

**Refuter:** a case where the transformation is fully captured at first-order contact, with no
second- or third-order effects detectable at any instrument resolution. That would break the
cascade finding.

World corroboration: Pettit, Ward-Fear and Shine 2021 on cane toads and scavenging, and Doody et al.
2015 on predator removal and prey release, both show effects arriving through links two or three
steps out. These corroborate Fig 11 :52; they do not create the figure verdict.

### F4 : Introduction is available, exclusion is not; a managed system is permanent work

Fig 11 :61-62: *"The seat’s power is asymmetric. Introduction is available; exclusion is not. You
can add an actor and you cannot subtract the habitat, because contact is a fact about the world and
does not consult you."*
Fig 11 :63-64: *"Which is why a managed ecosystem is permanent work rather than a solved state. And
in neither mode is the habitat composed: unmaintained nothing composes it, maintained the seat adds
to a habitat it still did not author."*
Fig 11 :65: *"Introducing an actor for its cascade is ecosystem engineering, after Jones, Lawton and
Shachak, 1994. Cane toads and kudzu are the same move with the cascade unenumerated."*

This is the sharpest practical result for the question. The difference between ecosystem engineering
and an invasion disaster is not the actor or the intent; it is whether the cascade was enumerated
before the introduction. Cane toads are the same seat move with the enumeration skipped. Fig 11 :56
gives the other mode: *"Unmaintained. No maintainer and no live frame in the seat. The habitat is
pure contact, nothing selects, and what survives is what the ground kept."*

**Refuter:** a one-off exclusion that permanently restores the original habitat without continuing
work, or a case where subtracting the habitat is possible. Either breaks the asymmetry claim.

World corroboration (secondary): Cassey et al. 2018, *"only complete exclusion of an alien can
guarantee no establishment"*; Simberloff 2009 on propagule pressure as the most consistent
determinant of establishment. Both corroborate the cost of introduction and the difficulty of
exclusion.

### F5 : RETRACTION of the obvious mapping: the Tether habitat is not the ecological niche

This question is ecology, so the tempting move is to identify the Tether's "habitat" with the
ecological niche. That mapping is **refused** by the canonical article. Its section "Three mappings
offered and declined" says: *"The habitat as an ecological niche. A niche is defined by an
organism’s relation to its environment. A habitat here is defined by contact with a residual, and
the residual moves so the same actors constitute a different habitat when the question changes."*
It continues: *"the figure says enumerated, never composed rather than borrowing the ecological
term outright."*

Fig 11 :73 makes the same distinction: *"The habitat is not the ground. The habitat is where
actors come from and it updates; the ground is what settles, and it does not."*

So the framework does not donate a niche theory to invasion biology. It supplies a discipline:
enumerate contact with the residual, keep the residual named, and do not average the slots. The
ecological literature's "invasibility" is close but not identical; it is an independent frame whose
agreement is useful only because it arrived separately (Fig 8 :50-52).

**Refuter:** show that "niche" and "habitat defined by contact with a moving residual" are the same
object under all changes of residual. Until then the mapping stays declined. This retraction is
kept visible rather than silently dropped.

### F6 : Isolation is substitution, not removal

Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for
another."*
Fig 11 :67: *"Move the residual and you must reproduce everything its goal required, and you inherit
the new habitat’s actors, which you did not choose."*
Fig 11 :68-69: *"what you failed to reproduce is invisible until the goal fails"*; *"what you
unintentionally introduced is invisible until it acts"*.

For the question: quarantine, containment, or moving a species to a "safe" site is a substituted
habitat, not an absence of habitat. Two failure modes are silent by construction: what the new site
failed to reproduce, and what came along with the move. This is a **single-source** figure verdict.

**Refuter:** exhibit a genuine removal of a habitat in which nothing is substituted and no inherited
actors arrive.

### F7 : Measure per slot, never as one impact score

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

An "ecosystem-level impact index" is convenient for policy and fatal for this derivation: it
averages away the one live slot (a single predator, a single scavenging function) that carries the
cascade. Fig 2 :37-38 warns that an instrument can be right on the axes it measures and wrong on
axes it does not. Keep the slots separate.

**Refuter:** an impact measure that retains per-slot residuals and still hides no live slot. If such
a measure exists and changes nothing, this finding is withdrawable.

### F8 : The ground settles it; agreement does not

Fig 2 :29-30: *"An anchor is whatever settles the question and does not change its answer because
of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If
it moves when you push on it, it is not an anchor."*
Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
Fig 7 :35: *"A room’s agreement is variation, not a verdict. Selection between rooms is where the
ground votes."*

In this simulated run all seats draw on one evidence pool, so their agreement is one pool talking
(Fig 2 :40). It is internal consistency, not corroboration.

**Refuter:** a case where specialist consensus, without a measurement, correctly settles whether a
particular introduction transformed an ecosystem. That would make agreement an anchor.

### F9 : What survives

| claim | mode | figure |
|---|---|---|
| Invasiveness is a property of (actor, habitat, residual), not of the actor alone | `specified` | Fig 11 :39-40, triangulated with Fig 4 :34-35 |
| Valence is relative to the residual; there is no standing list of invasive species | `specified` | Fig 11 :49-51, single-source in the figures |
| The transformation is a contact cascade out to third order | `specified` | Fig 11 :44, :52, single-source in the figures |
| Introduction is available, exclusion is not; managed systems need permanent work | `specified` | Fig 11 :61-64, single-source in the figures |
| Isolation substitutes a habitat; it does not remove one | `specified` | Fig 11 :66-69, single-source |
| Habitat is enumerated never composed, and per-slot residuals must not be averaged | `general` (method) | Fig 11 :43-48, Fig 1 :19, :22 |
| The Tether habitat is the ecological niche | **refused** | canonical article, "Three mappings offered and declined"; F5 |

---

## 3. Pre-registered refuter (written before the conclusion)

Required before any outreach. The canonical seat rule is that a falsifier written before the run is
a design instrument. The shape claim is refuted if any of the following holds:

1. An introduced actor shows invariant establishment and cascade across all habitats at equal
   propagule pressure (breaks Fig 11 :39-40).
2. A context-free, residual-independent harm ordering of species is demonstrated (breaks Fig 11 :49-51).
3. A transformation is fully captured at first-order contact with no detectable second- or
   third-order effects at any resolution (breaks Fig 11 :44, :52).
4. A one-off exclusion permanently restores the habitat without ongoing work (breaks Fig 11 :61-64).
5. A one-off authoring of the habitat with no inherited, unchosen actors is demonstrated (breaks
   Fig 11 :66-69).

If any fires, the corresponding finding is withdrawn. Until one is run, no part of this may be
labelled `grounded`.

---

## 4. Recommendation

1. Ask which residual is being tracked before using the word "invasive" (F2). Without a named
   residual the statement has no truth value.
2. Replace trait lists with an enumerated habitat: actors, conditions and relations, outward until
   the cascade stops mattering (F3, F7).
3. Treat the introduction as a seat move with asymmetric power. Budget for permanent work, and
   enumerate the cascade before the actor is moved (F4).
4. Keep the Tether habitat and the ecological niche distinct in any write-up (F5). The literature
   is a corroborating frame, not the source of the verdict.
5. Send the generator, that is the shape claim and the refuter, before any links. Fig 4 :22:
   *"Only methods cross up. Only head starts come down."*

---

## 5. Canonical usage check and re-census

**Canonical usage rule (`FIGURES_README_canonical.md`).** The figures outrank everything else; the
quotes are the authority, not the summary. A reading that makes one figure contradict another has
misidentified its domain. The framework returns a shape, not a name, and stops where instruments
stop discriminating. "Indiscernibility is not identity."

I ran the strain test by returning to the census after the first pass:

- **Initial strain:** Fig 11 says capability is agent-and-habitat; ecology says some species are
  consistently invasive across regions. Is that a conflict? **Re-census:** no. The ecology claim is
  about relative frequency under a shared evidence pool, not invariance across all habitats. The
  two quantities differ. The framework's claim is structural (no actor-alone anchor), and the
  ecology claim is statistical. No figure was forced.
- **Initial strain:** the word "habitat" in the question seems to invite the niche mapping.
  **Re-census:** the canonical article declines it explicitly; F5 records this as a retraction of
  the naive mapping, not as a figure conflict.
- **Initial strain:** Fig 2 says the anchor must not update, yet a habitat updates (Fig 11 :73).
  **Re-census:** different objects. The habitat is where actors come from; the ground is what
  settles. Fig 11 :73 states the distinction in the figure itself. No strain after re-census.
- **After re-census: no live figure strain.** The remaining open items are measurement gaps, not
  contradictions.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Invasiveness is a property of the species" (the question's default) | **Retracted.** Fig 11 :39-40 and Fig 4 :34-35. |
| "Tether habitat equals ecological niche" | **Retracted.** Canonical article, "Three mappings offered and declined"; F5. |
| "The framework explains why cane toads are invasive" | **Retracted.** Fig 11 :65 names cane toads as the same move with the cascade unenumerated. This is an instance or retrodiction, not a forward prediction (Fig 8 :56). |
| "World ecology sources decide the verdict" | **Retracted.** They corroborate only. Fig 2 :29-30; Fig 8 :50-52. |
| "Agreement among the ecology sources is two witnesses" | **Retracted.** They share a broad evidence pool. Fig 2 :40. |
| Per-slot residual, no global average | **Confirmed.** Fig 1 :19, :22. |
| Enumeration, asymmetry, cascade, substitution | **Confirmed.** Fig 11 :43-48, :52, :61-69. |
| Unmaintained versus maintained modes | **Confirmed.** Fig 11 :55-64. |

### Where the framework admits a limit

The canonical article states under "A note on what is not cited" that several claims carry no prior
source, including *"an actor’s valence is relative to the residual rather than a property it
carries"*, *"introduction is available to a maintainer and exclusion is not"*, *"isolation is
substitution of one habitat for another rather than removal"* and *"capability is a property of
agent-and-habitat, never of the agent alone."* The article also says the isolation law and the
capability claim *"fit cases already known and have not been tested forward, so they can still come
back wrong."* So F1, F2, F4 and F6 are `specified`, ungrounded, and their own source records them as
untested forward. This package does not claim more than that.

### Updated verdict

The shape survives: invasiveness is a relation among an introduced actor, an enumerated habitat
and a named residual; the transformation is a contact cascade measured per slot; introduction is an
asymmetric seat move whose disaster form is an unenumerated cascade. The species-only framing, the
niche mapping, and any claim that world sources or agreement settle the question do not survive.
Strains after re-census: none live. Gaps: the forward test of the capability and isolation claims,
and the instrument that would resolve which residual a tracked change belongs to.
