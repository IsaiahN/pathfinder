# Figure-grounded audit: can an AI create genuinely novel ideas?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, read 2026-11-23) says "The catch is that the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** The local `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as Fig N :line), the canonical figures README, `THE_FORMULA.md`, the seat map field guide, eight essays, and the public sources in `10_source_ledger.csv`. All web sources opened 2026-11-23.

---

## 0. The question under audit, restated as an effect

> Can an AI system create genuinely novel ideas, or can novelty only be judged relative to human knowledge?

Two options are offered. State what each leads to before choosing:

- **Option A:** an AI can produce world-absolute novelty. This asserts a property independent of any frame's library. It commits us to a generator that adds something to the world, and it sets the anchor for the verdict inside the generating frame.
- **Option B:** novelty can only be judged relative to human knowledge. This sets the human record as the sole anchor for every novelty claim. It commits us to treating human judgment as the ground for questions that are not about people.

**Residual R, in effect terms.** The mismatch between what a generator produces (a term φ that its own library does not hold) and what an observer will count as "never seen before". Arity: **two conditions bundled into one question**, a generator-side condition and a verdict-side condition. Symmetry: NOVEL is a membership test φ ∉ atoms(Γ), which is not symmetric between frames; "new to Γ_A" and "new to Γ_B" are different claims and neither reduces to the other. Scale: first order inside one closure (composition), second order at the membrane between frames (import), third at the ground (did the world gain a primitive). Per slot: Fig 1 :19 says "The residual is indexed by object slot, not aggregated." A single aggregate "novelty score" for an output throws away the one slot that actually failed to resolve (Fig 1 :22).

**What an answer would look like.** Bind the ordinary term "genuinely novel" as `world-atom-added`, so it can accrue a residual like anything else (formula step "Direction": a frame cannot check the direction of its own question because the sought-for shape is not a term it holds). Then ask which anchor can settle that term, and whether any generator can produce it. This binding is our contribution, mode `specified`, and it is recorded as such rather than hidden.

---

## 1. Domain census before choosing any figure line

Describe R by arity, symmetry, scale. One line per domain with actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union | order by dependency (Fig 3) |
|---|---|---|---|---|---|
| D1 The generator frame (an AI system) | Γ, atoms(Γ), closure(Γ), mint, import, instruments | candidate terms φ, cost(φ), residual R_s | the ground for settlement; Γ-membership for the novelty guard | partition boundary: what composes inside closure versus what crosses it | first: is φ in closure(Γ)? |
| D2 The human-knowledge frame | the public record, prior art, editors, reviewers, "the field" | membership in the documented human corpus | the public human record, legitimate only for the human-relative question | one frame among many, not the whole verdict | second: is φ in Γ_h? |
| D3 The ground (world) | instruments, experiments, markets, outcomes | contact; whether a primitive entered the world | the immovable ground (Fig 2 :29) | not a frame; the reference for D1 and D2 | third: does the world pay? |
| D4 The verification frame (people asked to judge) | outside frames, seats, expert readers | agreement and residual | the ground, never agreement | union with D1/D2 where evidence pools overlap | last, after the residual is described |

**Partition or union.** This is a **union**, not a partition. Fig 9 :54 says "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57 says "A case in two conditions is not a harder case of either." The question asks both whether a generator can produce novelty and what standard settles the judgment. Those are two conditions that overlap, so a single answer to the bundled question is not a verdict on either.

**Order by dependency.** Describe the residual before choosing a frame (Fig 9 :28: "any frame you pick will seem to fit"). Refuse before mint (formula step 2). Settle first-order molecules before comparing them. Only then ask who may judge. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." The middle link here is "what would count as novel in this domain?", which is a comparison. Operators table :52: "a goal is a comparison, which is why a vocabulary without it cannot state one."

---

## 2. Figure census

| figure | bearing | verdict after reading |
|---|---|---|
| 1 The Agent | residual indexed per slot, not aggregated; frame-internal quantities disqualified | aggregate novelty scores cannot locate the live slot |
| 2 The Ground | anchor must not update; legitimacy is question-relative | human knowledge is an anchor for one sub-question only |
| 3 Dependency Chain | order by dependency; a reading below the break reads nothing | novelty judgment must wait for the generator-side census |
| 4 The Membrane | only methods cross up, only head starts come down; measure R_T | a novelty claim carried across frames loses information |
| 5 Mint Pipeline | three guards as a product; third guard is novelty in the library; machinery firing is not the milestone | novelty is definitional but not sufficient |
| 6 Closure / Reachability | mint never adds an atom; NOVEL is relative to atoms; import adds an atom to a frame, not the world | decisive for D1 and D1b |
| 7 Room Chain | agreement compounds, evidence does not; novelty swamped to the mean | decisive for D4 |
| 8 Union Surplus | closure idempotent; no proof of absence; convergent derivation versus adopted import | decisive for D3 and for the bundle/split |
| 9 Leave / Arrive | unbundle a union; describe the residual first; you get a kind of thing | decisive for the union reading |
| 10 Ground Maintainer | bring a characterised residual, never the source; verifier non-access | governs outreach, not the verdict |
| 11 The Habitat | intelligence is a label applied after ground contact; capability is agent-and-habitat | decisive for "genuinely" |
| 12 The Bond | arrangement carries meaning; a vocabulary without bonds cannot state a route | supports the per-slot and order arguments |
| 13 Minimum Viable Set | closed set, unbounded arrangements; unreachable is a verdict | decisive for D3 |
| Operators table | ⋛ is a comparison; a claim failing all tests is a claim not yet made | supports the "genuinely" open item |
| Symbols table | R is the aim, not only the error signal; the ground is the anchor | confirms the residual framing |

Strained readings are named in §5, not smoothed over.

---

## 3. Findings

### F1 NOVEL is defined relative to atoms, not to the world (decisive for D1)

Fig 6 :21-22:

> **"MINT composes inside the closure and can never add an atom."**
> **"NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."**

`THE_FORMULA.md` step 3 gives the guard as **NOVELTY `φ ∉ atoms(Γ)`**, checked after a candidate exists. Fig 5 :25 gives the same guard in words: **"it is not already in the library"**.

So the generator-side answer is settled by definition: a system can mint a term that is new relative to its own atoms. That is a real and checkable event. It is not an event in the world. The word "genuinely" in the question is doing work that the guard does not do. `mode: specified`, `triangulated` across Fig 6, Fig 5 and the formula step (low overlap between the closure diagram, the mint pipeline and the eight-step loop).

**Refuter:** show a mint that adds an atom to `atoms(Γ)`, or show that the NOVELTY guard tests world-membership rather than library-membership.

### F2 Import adds an atom to a frame, not to the world (decisive for D1b)

Fig 6 :25-26:

> **"An import adds no atom to the world."**
> **"The world does not gain primitives; a frame gains access."**

Fig 8 :32 adds the definitional reason: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."**

So no frame, whether it is a neural network, a laboratory or a human culture, adds a primitive to the world by composing or importing. The "genuinely novel in the world" reading of Option A is not a hard case of novelty; it is a category error. Fig 13 :114-115: "the array is unbounded and the reach is not" and "The set is closed. The arrangements are not. That gap is why import exists." `mode: specified`, `triangulated` across Fig 6, Fig 8 and Fig 13.

**Refuter:** exhibit a generator whose output increases the world's primitive count rather than a frame's access. Until one is exhibited, "world-absolute novelty generated by a system" is not a verdict the figures can deliver.

### F3 "Machinery firing is not the milestone"

Fig 5 :49:

> **"Machinery firing is not the milestone. A running system can mint and still return nothing new, which is exactly what the third guard exists to record."**

Fig 5 :30: **"the machinery worked; the answer was already known."**

An AI can be structurally creative in the sense of running the mint operator, and still produce nothing new relative to the library being tested. The guard, not the activity, decides. This is why an output-only demonstration of AI novelty is not evidence for the claim. `mode: specified`, `single-source` for the figure definition (Fig 5), corroborated weakly by the computational-creativity source in §7.

**Refuter:** show that passing the third guard is not required for a claim to count as novel, or that a system can be novel while its candidate is already in the library.

### F4 An anchor is legitimate only when the question is constitutively about it (decisive for D2)

Fig 2 :36-37:

> **"An anchor is legitimate when the question is constitutively about it."**
> **"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."**

The question "is this new relative to human knowledge?" is constitutively about human knowledge. Human knowledge is the right anchor for it. This is the part of Option B that survives. But the same lines continue: "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure" (Fig 2 :37-38, sentence wraps across the two extracted lines). For "is this new relative to the world?", human judgment is an instrument, not the anchor. Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** A human record that changes when new work is published is exactly an anchor that moves when frames push on it. `mode: specified`, `triangulated` across Fig 2 and the patent-law sources in §7.

**Refuter:** show an anchor for world-novelty that does not move when the human record changes, or show that a question about the world is constitutively about people.

### F5 Judging novelty requires a frame whose closure differs (D2 and D4)

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 8 :45: **"Two frames together reach what neither reaches alone."**

A generator cannot certify its own novelty from inside its closure. This is the same limit as Fig 8 :37: **"A frame cannot certify its own limit. Chaitin: beyond a fixed constant, no system proves that any object exceeds its own complexity."**

So the judge must be outside the generating frame and must draw on different evidence. Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Human knowledge is one outside frame with a different closure, and often the most convenient one. It is not the only possible one. Option B's word "only" is unsupported. `mode: specified`, `triangulated` across Fig 6, Fig 8, Fig 2.

**Refuter:** show a frame certifying novelty wholly from its own closure, or show that no frame other than the human record can differ from a generator's closure.

### F6 A search that finds nothing proves nothing (D3)

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**
Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**

A prior-art search over the entire human record cannot establish world-absolute novelty. It can establish non-membership in the searched record, which is a different claim. The Wikipedia source on patent novelty says the same in different terms: "No search can possibly cover every single publication or use on earth, and therefore cannot prove that an invention is 'new'." This is corroboration from a different field (law), not a figure line. `mode: specified`, `triangulated` across Fig 8, Fig 9, Fig 13.

**Refuter:** exhibit a sealed frame, or an instrument whose negative result is a proof of absence rather than a report of non-detection.

### F7 "Genuinely" is a label applied after contact, not a property of the artefact (D3)

Fig 11 :36: **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground."**
Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone."**
Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**

Novelty is the same kind of word. It is assigned to a lineage that met a ground, not read off the output. *How Intelligence Actually Works* (essay, read 2026-11-23): "The recursion converges toward indiscernibility, and indiscernibility is not identity." An output indiscernible from a novel one is not thereby novel. `mode: specified`, `triangulated` across Fig 11 and the essay (low overlap between the habitat figure and the provenance essay).

**Refuter:** show an artefact whose novelty is legible from the artefact alone, without a lineage or a ground.

### F8 A room of human judges swallows novelty into the mean (D4)

Fig 7 :14: **"blending: novelty swamped to the mean"**
Fig 7 :13: **"agreement compounds, evidence does not"**
Fig 7 :35: **"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

A panel selected for agreement about what is novel produces a convention about a shared meaning, which Fig 2 :41 calls "efficient for a convention", not corroboration. Seat Map :163: "High correlation is disqualifying for a verdict and efficient for a convention." `mode: specified`, `triangulated` across Fig 7, Fig 2, seat map.

**Refuter:** show that a correlated panel's agreement changes contact with the ground, or buy independence in proportion to the cost of being wrong (Fig 2 :42) and show the verdict still stands.

### F9 The question is a union, so split it before answering

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
*The Library of Babel* (essay, read 2026-11-23): "Perhaps your problem was a bundle or conflation of several problems masquerading as one?"

The two sub-questions are:

- **Q1 (generator side):** can a system produce a term new to its own library? Answer: yes, by mint and import. New to the world? No frame does that.
- **Q2 (verdict side):** what settles the claim that a term is novel? Answer: a membership test against the atoms of the frame in question, judged from outside that frame. Human knowledge is the right anchor for the human-relative version; it is an instrument, not the anchor, for the world version.

Each sub-question gets its own loop and its own verdict. They are never averaged. `mode: general` on the split shape, `specified` on each verdict.

**Refuter:** show the two conditions are a partition, in which case a single loop is legitimate and this split is unnecessary.

### F10 What survives, with its mode attached

| claim | mode | status | figure |
|---|---|---|---|
| A system can mint a term new to its own atoms | `specified` | triangulated | Fig 6 :21-22; Fig 5 :25 |
| No frame adds an atom to the world by composing or importing | `specified` | triangulated | Fig 6 :25-26; Fig 8 :32 |
| Human knowledge is the legitimate anchor for "new to people" | `specified` | triangulated | Fig 2 :36-37; patent law sources |
| Human judgment is only an instrument for "new to the world" | `specified` | triangulated | Fig 2 :37-38 |
| Judging novelty requires an outside frame with different closure | `specified` | triangulated | Fig 6 :23; Fig 8 :45 |
| No search establishes absence from a non-sealed frame | `specified` | triangulated | Fig 8 :39; Fig 9 :44 |
| "Genuinely novel" binds to `world-atom-added` | `specified` | our binding, not a figure term | formula step "Direction" |
| The question is a union and must be split | `general` | triangulated | Fig 9 :54-55; Library of Babel essay |

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: "**And a falsifier written before the run is a design instrument, not only an honesty device.**"

The answer is refuted if any of the following holds:

1. A mint inside `closure(Γ)` adds an atom to `atoms(Γ)` (breaks Fig 6 :21-22).
2. An import adds a primitive to the world rather than access to a frame (breaks Fig 6 :25-26).
3. An anchor for novelty changes its answer when a frame pushes on it (breaks Fig 2 :29-30).
4. A frame certifies its own completeness or proves absence from a non-sealed room (breaks Fig 8 :37, Fig 9 :44).
5. A search over a complete record proves a thing is new (breaks Fig 8 :39 and the patent-law corroboration).
6. The two sub-questions form a partition rather than a union (breaks F9; the verdict must be recomputed as one loop).

If any fires, the corresponding finding is withdrawn. Until one is run, nothing here is labelled `grounded`.

---

## 5. Strains, re-census and open items

- **"Genuinely" is not a figure term.** It is a preference the searcher holds about the sought-for shape, which formula step "Direction" says cannot be checked from inside. Re-census resolution: bind it as an ordinary term `world-atom-added` and let it accrue a residual. The binding is ours, mode `specified`, and it is visible. This is a strain recorded, not a figure line forced.
- **Human knowledge is anchor for one sub-question and instrument for another.** Fig 2 :36-38 makes this a scope distinction, not a contradiction. Re-census confirms it. Recorded in F4; not smoothed.
- **"Create" carries an agency condition** that the philosophy literature treats as live (Paul and Stokes, SEP: agency, spontaneity and originality are proposed as process conditions). The figures do not test agency; Fig 11 :36 says the label is applied afterwards to a lineage that met its ground. Operators table :68: "A relation that fails all seven is not an operator you are missing; it is a claim that has not been made yet." So whether an AI "really creates" in the agency sense is an **open item**, not a verdict. It is named here rather than answered by a figure that does not govern it.
- **Boden's transformational creativity** (new axis, not new term within a space) resembles import moving the wall. The resemblance is a corroborating analogue from cognitive science, not a derivation. Overlap with the figure source is low, so it is useful, but it does not decide anything.
- **No strain left hidden after re-census:** one open item (agency), one binding ("genuinely"), one scope distinction (anchor versus instrument).

---

## 6. Recommendation

1. Answer the bundled question by splitting it. Do not pick Option A or Option B as written.
2. State the mode on every claim. `specified` for the structural verdicts, `general` for the split.
3. Lead with the generator-side result (mint is frame-relative, import does not touch the world), then the verdict-side result (the anchor is question-relative).
4. Ask checkers what they would count as a novelty failure before showing them the figures (Fig 10 :52: "Bring a characterised residual, never the source.").
5. Do not use "no prior art found" as proof of novelty. Use it as a report of non-detection in one frame.
6. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator and the refuter, not the conclusion.

---

## 7. Canonical usage check

Two local sources were read after the first sections and they govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` - "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the available instruments and records the lineage. "Indiscernibility is not identity."
- `THE_FORMULA.md` - step 7 keeps SEARCHED, INWARD and OUTWARD distinct. For this question, SEARCHED asks whether φ is in Γ and unfound; INWARD asks whether the instrument can discriminate sources; OUTWARD asks which other frame already holds the term. They are not interchangeable, and the budget filters are not witnesses (Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Novelty is always relative to human knowledge" | **Retracted.** Fig 6 :22 says relative to `atoms(Γ)`, where Γ is any frame. Human knowledge is one Γ, and it is the right anchor only for the human-relative question (Fig 2 :36). |
| "AI cannot create anything novel" | **Retracted.** A mint new to atoms(Γ) is definitional novelty. The failure is in the word "genuinely", not in the mint (F1, F2). |
| "Fig 2 says human judgment is an instrument, so it cannot anchor anything" | **Narrowed.** Fig 2 :36 makes an anchor legitimate when the question is constitutively about it. It anchors the human-relative question and is an instrument for the world question. |
| "No search proves absence" read as "search is useless" | **Retracted.** Fig 8 :39 forbids absence proofs, not searches. Fig 6 :49-50 requires distributing search and keeping searchers independent. |
| "The bundle must always be split" | **Narrowed.** Fig 9 :54 says unbundle when the split lands on a union. I re-censused: this question is a union of generator-side and verdict-side conditions. The instruction is conditional, not universal. |
| "Genuinely novel" as a figure term | **Refused.** It is a user-supplied preference, bound as an ordinary term by discipline, not a figure line. |
| Agency condition on "create" | **Open item, not a gap.** The figures do not range over it; recorded in §5. |

### Seven-question recursive derivation (summary)

1. **What is the residual?** A mismatch between generator output and observer standard. Arity two, so a union (Fig 9 :55).
2. **Can a term be new to Γ?** Yes, NOVELTY `φ ∉ atoms(Γ)` after the search. Guard, not activity, decides (Fig 5 :49).
3. **Can a term be new to the world?** No frame adds an atom to the world (Fig 6 :25-26). Category error, not a hard case.
4. **Who may judge?** An outside frame with different closure (Fig 6 :23). Independence decides whether its agreement means anything (Fig 2 :31).
5. **Is human knowledge special?** It is the right anchor for a question about people (Fig 2 :36) and an instrument otherwise (Fig 2 :37).
6. **Can a judge certify absence?** No (Fig 8 :39, Fig 9 :44). "Unreachable is a verdict here, not a silence" (Fig 13 :134).
7. **What is the honest stop?** A frame-relative shape and a recorded lineage. "you get a kind of thing, never the answer itself" (Fig 9 :32).

### Updated verdict

The offered dichotomy is false. Once the union is split, the figures give two separate `specified` verdicts: an AI can create terms novel to its own library, but no generator human or AI adds a primitive to the world; and novelty is judged against a frame's atoms from outside that frame, with human knowledge serving as the legitimate anchor only for the question that is constitutively about human knowledge. One strain is named (the agency condition on "create"), one binding is declared ("genuinely" becomes `world-atom-added`), and one scope distinction is preserved (anchor versus instrument). Nothing is `grounded`.
