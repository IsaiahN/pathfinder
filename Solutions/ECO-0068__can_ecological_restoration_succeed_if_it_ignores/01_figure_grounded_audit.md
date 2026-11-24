# Figure-grounded audit: ECO-0068

**Question:** Can ecological restoration succeed if it ignores the capacity of organisms to adapt and change?

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." The structural claims in F1, F4 and F7 are `general`. Their application to restoration is `specified`. No claim here is `grounded`.

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap essay says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as Fig N :line), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, plus the world sources in `10_source_ledger.csv`, each opened 2026-11-23.

---

## 0. The residual, stated in effect terms

Restoration acts on a site. For each tracked slot *s* (a population, a species, an ecosystem function), the practitioner holds a belief *b* about what the site will become after an intervention *a*, predicts Γ(b,a), observes o′, and reads a residual R = |Γ(b,a) − o′| per slot over time. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

The question asks one specific thing about that loop: **does dropping the term "organisms can adapt and change" from Γ change whether the loop can settle R against the ground?** If adaptive capacity is load-bearing, a restoration that ignores it can replay a past state but cannot produce a self-sustaining one. If it is decoration, ignoring it costs nothing.

Two clarifications before any figure is chosen.

- "Succeed" is not a single reading. It can mean *hitting a declared reference snapshot*, or *having the restored system persist and function under continuing change, without perpetual repair*. These are different anchors. The first is a convention; the second is a ground. Fig 10 :18: "a declared meaning is not a grounded one." Fig 10 :47: "a convention that decides an outcome has stopped being one."
- The object of the question is not "evolution happens" (settled biology) but "is the change term load-bearing in the restoration loop". That is a structural question, so the figures govern.

---

## 1. Domain census, before choosing any figure line

### 1.1 Arity, symmetry, scale

- **Arity.** A relation among (restoration frame Γ, intervention action *a*, observed trajectory o′), indexed by slot *s* and ordered by time *t*. It carries an ordered bond (sequence: site assessment to propagule selection to planting to monitoring, Fig 12 :70) and a comparison bond ("success" is a threshold against a reference, Fig 12 :89: "is it about which is larger, rather than both being present? Yes."). It is not a symmetric conjunction.
- **Symmetry.** Not symmetric. The ground does not update on the practitioner's opinion (Fig 2 :25). "Success" is a threshold, not a mutual hold.
- **Scale.** The slot is a population or function; the ranking exists at the community scale, and the time index crosses the membrane between an organism's step loop and a community's assembly loop (Fig 4). The transform between them is lossy (Fig 4 :27).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if it has a nameable anchor. Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1 Practitioner seat** | restoration ecologists, land managers | interventions: propagules, reintroductions, soil and hydrology work | the ground: does the site persist and function, whatever the plan says | admitted |
| **D2 Introduced organisms as generators** | individuals, populations, genotypes | adaptive capacity: genetic variance, plasticity, generation time, dispersal, gene flow | contact: survival, reproduction and change under the new habitat | admitted |
| **D3 Recipient habitat, field of contact** | resident biota, light, water, temperature, season, terrain, relations of pollination, predation, competition | contact cascades | enumerated from the world, not authored by the frame | admitted |
| **D4 Monitoring and evaluation channel** | instruments, indicators, reference states | R per slot | the ground, which persists while the channel decays | admitted |
| **X1 Static reference blueprint as endpoint** | a species list | resemblance to a snapshot | none that settles persistence; it is a convention deciding an outcome (Fig 10 :47) | not a domain yet |
| **X2 Adaptive capacity as a property of one organism in isolation** | a single genotype | plasticity | absorbed into D2; valence is relative to the residual (Fig 11 :49) | absorbed |

### 1.3 Partition or union

**Union, not partition.** D1, D2, D3 and D4 overlap. The overlap of intervention (D1) and adaptive response (D2) is a compound with its own loop, the eco-evolutionary feedback, and needs its own treatment. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." A single lever that fixes site preparation leaves the adaptive-response intersection standing.

### 1.4 Dependency order

Per Fig 3, dependency order, not importance: **perception (enumerate the habitat) to vocabulary (what do propagules afford, what can change) to objective (what counts as success) to planning (intervention) to learn and carry (adaptive management)**. Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

The candidate break is between vocabulary and objective. A restoration that ignores adaptive capacity has no term for "the introduced population will change under contact", so its objective becomes a fixed snapshot. Effort then lands above the break, where the measurements already exist. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

---

## 2. Figure census (quotations before conclusions)

Each line below was re-opened in `03-FIGURES_TEXT.md` this session. Quotes are exact substrings.

| figure | bearing | preliminary verdict |
|---|---|---|
| Fig 1 | residual per slot, never aggregated | success must be read per population or function, not one site score |
| Fig 2 | anchor must not update; correlation disqualifies | a reference snapshot is not an anchor; persistence is |
| Fig 3 | dependency order; link with no instrument | the missing adaptive term breaks the middle link |
| Fig 4 | seed versus recording; lossy round trip | organisms are generators, not replays of a past community |
| Fig 5 | three guards as a product | no support and no settlement for a blueprint-only target |
| Fig 6 | import is the only operator that moves the wall | genetic variation is an imported atom, not composed from site prep |
| Fig 7 | room chain, agreement compounds, evidence does not | more practitioners agreeing on a snapshot adds no ground |
| Fig 8 | closure, surplus, residual first | which provenance wins is a gap, not a figure answer |
| Fig 9 | union, unbundle, describe before looking | name the residual before choosing a provenancing frame |
| Fig 10 | ground maintainer, convention versus verdict | a declared target that decides outcome has stopped being a convention |
| Fig 11 | capability is agent-and-habitat; enumerate, introduce never subtract; managed ecosystem is permanent work | the decisive domain for this question |
| Fig 12 | bond carries arrangement; catalyst, cycle, functional group | structure of the compound, not a restoration measurement |
| Fig 13 | set closed, arrangements not; unreachable is a verdict | honest stop for the specific genotype question |
| Operators / Symbols | sequence and comparison; R is the aim | the loop is ordered and thresholded, not a list |

---

## 3. Findings F1 to F7

### F1. Adaptive capacity is the generator, not the recording (decisive)

Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Fig 4 :26: "Replayed downward, it produces a system that repeats a past success and cannot produce a new one." Fig 4 :34-35: "A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes."

The formula's promotion rule says generators cross up, playback never does. A planted community is a seed, not a small tree. The capacity to change under the conditions it lands in is the generator. A restoration that ignores that capacity treats its planting as a recording of a past community, and can at best repeat a past success; it cannot produce a new, self-sustaining one under changed conditions.

**Mode:** `general` for Fig 4's asymmetry, `specified` for the restoration reading. **Status: triangulated** (Fig 4 membrane plus Fig 11 capability, low overlap: one is about scale transforms, the other about contact and seats).

**Refuter:** a documented restoration that sets adaptive capacity to zero in its design (no genetic variance management, no plasticity allowance, no gene flow) and whose introduced populations nonetheless persist and function across a measured environmental shift over multiple generations, with no further intervention, at the same rate as an adaptive-capacity-aware comparator. If that exists, the generator term is not load-bearing and F1 fails.

### F2. Capability is a property of agent and habitat, never of the agent alone

Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

The capacity of a restored site to persist is not in the seed bank or the planting design alone. It is in the contact between the introduced organisms and the recipient habitat. Ignoring the organisms' capacity to change is the mirror image of the named error: one optimises the site blueprint while the contact that settles success is unmodelled. The world literature makes the same move in its own vocabulary. Broadhurst et al. 2008 wrote that a low genetic base "will fail to ensure that populations have the functionality and resilience necessary to become self-sustaining in the face of environmental change."

**Mode:** `specified`. **Status: triangulated** (Fig 11 and Fig 4, distinct figures with low overlap). World source corroborates only, never decides.

**Refuter:** a site-only intervention that leaves the adaptive terms of the organisms unmeasured and unchanged, yet yields the same multi-generation persistence as a design that manages those terms, under the same documented environmental shift.

### F3. A managed ecosystem is permanent work, not a solved state

Fig 11 :61: "Introduction is available; exclusion is not." Fig 11 :63: "Which is why a managed ecosystem is permanent work rather than a solved state." Fig 11 :58: "introduce what was not there."

Restoration is a maintained habitat (the garden in Fig 11 :58), not an unmaintained one where selection runs unobserved. Because introduction is available and exclusion is not, the practitioner can add actors but cannot subtract the habitat; contact is a fact about the world and does not consult the plan. A static target treats the site as solved. Ignoring adaptive capacity compounds this, because the cast of players changes under selection while the plan holds it fixed. Stockwell, Kinnison and Hendry 2006: restoration ecologists "may thus be faced with a changed cast of players, even if many of the same nominal species are restored."

**Mode:** `specified`. **Status: single-source for the governance claim** (Fig 11), corroborated by the restoration literature at low overlap.

**Refuter:** a restoration whose declared target remains met with no maintenance across a period long enough for the ignored taxa to pass through multiple generations under a documented environmental change.

### F4. A declared reference is not an anchor

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 10 :47: "a convention that decides an outcome has stopped being one." Fig 10 :18: "a declared meaning is not a grounded one."

If "success" is defined as resemblance to a fixed species list, the frame has authored the verdict and then measured its own authorship. A reference community is not an anchor in Fig 2's sense: it can move with climate and it can be satisfied on paper while the ground fails. The anchor for restoration is what persists and functions independently of the plan. Dropping the adaptation term is structurally the same error as letting a convention decide an outcome, because the criterion that would register change has been removed from the loop.

**Mode:** `general` for the anchor rule, `specified` for restoration. **Status: triangulated** (Fig 2 anchor plus Fig 10 convention, low overlap).

**Refuter:** show that the chosen success criterion is settled by an independent, non-moving instrument (survival, reproduction, ecosystem function) and that removing all adaptive-capacity terms leaves the verdict on that instrument unchanged.

### F5. Habitat substitution hides two classes of failure

Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another." Fig 11 :67: "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose." Fig 11 :68: "what you failed to reproduce is invisible until the goal fails" Fig 11 :69: "what you unintentionally introduced is invisible until it acts."

Moving organisms into a restored site substitutes one habitat for another. What the design failed to reproduce, including the adaptive context, gene flow and mutualists, is invisible until the goal fails. What it unintentionally introduced, including a shifted genotype or a novel interaction, is invisible until it acts. Ignoring adaptive capacity deletes the very terms that would make those two classes visible before failure. Fig 11 :73: "the habitat is where actors come from and it updates; the ground is what settles, and it does not."

**Mode:** `specified`. **Status: triangulated** (Fig 11 isolation law plus Fig 10 channel decay).

**Refuter:** a monitoring design that detects both classes before failure using no term for adaptive change, with a recorded instance where it caught a failure that an adaptation-aware design missed.

### F6. The middle link has no instrument

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Restoration practice has instruments for site preparation and for structural targets such as species presence and cover. The link "does this introduced population retain the capacity to change under the new conditions" is frequently uninstrumented. Sgrò, Lowe and Hoffmann 2011: "managers currently tend to ignore evolutionary processes when devising ways to protect biodiversity under climate change and developing criteria for conservation." Broadhurst et al. 2008 documented that the default local-seed rule lacks a strong evidence base and can establish populations with insufficient evolutionary potential. Effort therefore lands above the break, where the measurements already exist (Fig 3 :29-30).

**Mode:** `specified`. **Status: triangulated** (Fig 3 dependency order plus the two world sources, which are corroboration only).

**Refuter:** an instrument that returns a per-slot reading for adaptive capacity and is actually used to select propagules and trigger intervention, with a recorded case where that reading changed a decision.

### F7. Where the answer stops: a shape, not a species list

Fig 9 :32: "you get a kind of thing, never the answer itself" Fig 13 :134: "Unreachable is a verdict here, not a silence" Fig 8 :39: "So a search that finds nothing is never a proof of absence."

The framework returns the shape a successful restoration must have under change: a maintained generator loop among organism, habitat and ground, with the adaptation term instrumented and the anchor independent of the plan. It does not return the name of the winning genotype or the exact future species mix. That is a real limit, not a silence. Which provenancing strategy wins at a given site is a **`gap`** after re-census: no figure line governs it, and only a ground measurement can close it. Aitken and Whitlock 2013 frame the same open problem in world terms: assisted gene flow "has the potential to mitigate maladaptation due to climate change", with risks that must be weighed case by case.

**Mode:** `general` for the limit, `specified` for restoration. **Status: gap for the specific strategy, triangulated for the limit** (Fig 9 plus Fig 13).

**Refuter:** a figure line that predicts a particular provenancing rule for a given site would close this gap and remove the need for the ground measurement. None was found in a genuine re-census.

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the design discipline: "a falsifier written before the run is a design instrument, not only an honesty device" (exemplar `01`, Seat Map :287). The shape claim is refuted if any of the following holds:

1. A restoration that sets adaptive capacity to zero in its design persists and functions across a documented multi-generation environmental shift at the same rate as an adaptation-aware comparator, with no further intervention. (Kills F1 and F2.)
2. A site-only intervention with no change in the organisms' adaptive terms yields the same persistence as an adaptation-aware design under the same shift. (Kills F2.)
3. A declared static reference is shown to be a genuine anchor in Fig 2's sense, that is, it settles persistence and does not move with conditions, and removing adaptive terms leaves the verdict on the ground unchanged. (Kills F4.)
4. A monitoring design that carries no adaptive term detects both invisible failure classes of Fig 11 :68-69 before the goal fails, in a recorded case. (Kills F5.)
5. An instrument for per-slot adaptive capacity exists, is used to select propagules and trigger intervention, and its readings never change a decision across multiple projects. (Kills F6.)

If any fires, the derivation is withdrawn or narrowed accordingly. Until one is run, no part of this is `grounded`.

**Summary verdict, stated now so it cannot be tuned later:** In the ground-settled sense of success, no, a restoration that ignores adaptive capacity cannot be expected to succeed; in the narrow, declared-snapshot sense, it can "succeed" on paper, but that is a convention that has decided an outcome and not a solved state. Mode `specified`. Verdicts are kept separate per domain and are never averaged.

---

## 5. Recommendation

1. State the mode on every substantive claim (Section 0, F1 to F7).
2. Treat the adaptation term as load-bearing, not optional: enumerate the habitat before choosing a frame (Fig 11 :43: "The habitat is enumerated, never composed."), and keep the generator loop intact (F1, F2).
3. Define success by the ground, not by a snapshot: survival, reproduction, function under changing conditions (F4).
4. Instrument the middle link per slot (F6), and budget for the two invisible failure classes (F5).
5. Keep the verdict `specified`, declare `gap` for the specific provenancing rule, and send the generator (the claim, the verbatim lines and the refuter) rather than a one-line conclusion: Fig 4 :25, "A recording carried upward looks like knowledge and is a description of one occasion."
6. Use the public opt-in venues in `03_public_contact_points.csv`. Ask for a refutation, not agreement (Fig 2 :40; Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").

---

## 6. Canonical usage check

Two sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit: the framework says what a missing thing would have to look like, *"a shape, not a name"*, then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md` step 7: SEARCHED is asked first because it is cheapest, then INWARD, then OUTWARD; "underivable-in-principle and unreachable-at-this-budget are DIFFERENT FACTS with different instructions." The gap in F7 is a budget-and-instrument gap, not a reason to import an arbitrary provenancing rule.

Applied here: no figure line was forced onto a quantity it does not govern. Where Fig 11 seemed to say "restoration cannot succeed", re-census showed Fig 11 governs capability as agent-and-habitat and the asymmetry of introduction, while Fig 10 governs the convention-versus-verdict distinction. They answer different parts of the residual and were kept separate.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "Restoration cannot succeed if it ignores adaptation" as a flat verdict | **Retracted and narrowed.** Fig 2 and Fig 10 require separating the declared-snapshot sense from the ground-settled sense. The narrow sense can hit its target on paper; the ground sense is the one the answer addresses. |
| "The reference community is the anchor" | **Retracted.** Failed the Fig 2 :29 anchor test: a reference state can move with conditions and can be satisfied while the ground fails. The anchor is persistence and function, not resemblance. |
| "Adaptive capacity is a seventh primitive" | **Retracted.** It is not a substrate member. It is a generator property of an admitted entity (D2), and adding it as a primitive would violate Fig 13's closed set. It is managed in the loop, never minted as a new kind. |
| F3 as `triangulated` | **Downgraded to `single-source`** for the governance claim (Fig 11 only). World literature corroborates at low overlap but is secondary. Kept visible. |
| "Ignoring adaptation is like refusing a term" | **Refined.** It is not a Fig 5 refusal (no term is deleted). It is the absence of a term from Γ, so the support and settlement guards (formula step 3) are never run on it. |
| Apparent strain Fig 11 (habitat updates) versus Fig 2 (anchor does not update) | **Not strained.** Re-census: Fig 11 governs the habitat; Fig 2 governs the ground. Different objects, as Fig 11 :73 states directly. |
| Gap in F7 | **Confirmed.** No figure line names a provenancing rule. "Unreachable is a verdict here, not a silence" (Fig 13 :134). |

### Strains after re-census

None unresolved. The two candidate strains (habitat updates versus anchor does not; adaptation as a primitive) were returned to the census and resolved as shown above.

### Final status of this audit

Internally consistent with the figures, honest about its simulation status, stopped at a `specified` shape with an open instrument gap. It is not a ground reading and cannot settle ECO-0068.
