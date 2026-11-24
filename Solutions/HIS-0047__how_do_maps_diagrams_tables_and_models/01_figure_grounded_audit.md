# Figure-grounded audit: How do maps, diagrams, tables and models shape reasoning rather than merely display results?

**Mode of this document: `general` on the structural shape, `specified` on the domain placements. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23): "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Canonical framework files read locally: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. Figure quotes are cited as `Fig N :line` against the verbatim extract; Operators and Symbols tables are cited by table name and line. Every quote below was checked character by character against that extract.

---

## 0. The residual in effect terms

Two rival predictions.

- **Display-only hypothesis:** a representation is a transparent, lossless channel. Swap one representation for another carrying the same data and the conclusions of a reasoner should not change. The representation carries already-settled results to the reader and adds nothing to reasoning.
- **Observed effect:** swapping representation while holding the data fixed systematically changes which patterns are noticed, which inferences are cheap, which hypotheses are generated and which errors are made. The periodic table, a spot map, a free-body diagram and a supply-demand graph do not merely print results; they change what can be reasoned next.

**Residual R:** the systematic variation in reasoning outcomes attributable to the encoding rather than to the content. In framework terms the representation is part of the frame's library Γ (Symbols table :111: "A frame is any bounded system with a library: an agent, a person, a discipline, a model."), and R is per slot: Fig 1 :19 "The residual is indexed by object slot, not aggregated." A global verdict of "same information, therefore same reasoning" is an aggregate that hides the live signal, Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

**R by arity, symmetry, scale:**
- Arity: at least three relata, representation / ground / reasoner. This is a frame-to-ground relation, not an object-to-label relation.
- Symmetry: the map from data to representation is many-to-one and not invertible. Fig 12 :95 "Two entries with an identical ingredient set are not variants of one thing." Fig 12 :96 "Two entries can share every ingredient and be inverses of one another." The arrangement is not recoverable from the ingredients (Fig 12 :46 to :47).
- Scale: the effect is measured per slot in the cognitive frame, and at the community scale representations travel between frames as imports.

---

## 1. Domain census before choosing any figure line

One line per domain: actors / currency / anchor. A domain without a nameable anchor is not a domain yet.

| domain | actors | currency | anchor | partition or union | dependency order (Fig 3) |
|---|---|---|---|---|---|
| A. Representation as frame (notation) | marks, cells, nodes, edges, axes, glyphs, typed bonds | what is expressible / reachable closure | the arrangement encoded, Fig 12 :94 "The arrangement is the substance." | partition: expressible vs inexpressible | first: a bond must be carryable before reasoning can use it |
| B. Reasoner (cognition) | library Γ, slots s, belief b, weighting w, residual R_s | per-slot residual and inference cost | the ground the data describe | union compound: perception + vocabulary/objective + planning (Fig 3) | second: consumes A's expressible set |
| C. Ground / data (measurement) | measurements, dataset, the world | measurement | the ground itself, which must not update (Fig 2 :29 to :30, :33) | anchor, not a frame | zeroth: the reference all frames range against |
| D. Community / history of science (verification) | investigators, peer frames, publications | agreement and residuals | the ground, never agreement | union of frames; surplus only where closures differ (Fig 8 :51) | last: a representation travels as an import after it has shaped individual reasoning |

**Overall question type: union, not partition.** This is a bundle of overlapping conditions, not a list of separate ones. Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." So the honest procedure is one loop per domain, verdicts kept separate, never averaged into a single "visualization matters" verdict.

**Strain test applied before findings.** A line that only fits with a strain governs another quantity, so re-census. I initially tried to make Fig 13's six-term set govern visualization directly. That strains: Fig 13 governs the minimum set of a composed physical system, not a notation system. Re-census moved the governance to Fig 12 (bond), the Symbols table (frame), Fig 1 (per-slot residual), Fig 3 (dependency), Fig 6 (instrument/reach), Fig 8 and Fig 2 (frame independence) and Fig 10 (declared meaning). The retracted Fig 13 reading is kept visible in section 6.

---

## 2. Findings, with verbatim figure lines and refuters

### F1: A representation is a frame, not a transparent window (general, Domain A)

Symbols table :111: "A frame is any bounded system with a library: an agent, a person, a discipline, a model. It is a theory with a signature rather than a coordinate system, so frames differ in what they can express and not in how they label it, and there is no known transform between two of them."

A table, a map, a diagram and a model are frames with signatures. They differ in what they can express, not merely in how they label the same content. "Merely display results" assumes a transform that is label-only; the Symbols table says no such transform is known.

- **Mode:** general (structural).
- **Refuter:** exhibit a representation whose signature is provably a pure relabeling of another (a known transform preserving all expressive power) that nonetheless changes reasoning systematically in a way the framework cannot predict. That would break the "no known transform" claim and move the effect out of the frame signature.

### F2: The reasoning power lives in the bond, which the ingredient list does not carry (general to specified, Domain A; decisive)

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
Operators table :4 to :5: "The bond carries information the operands do not, so a term that names only its ingredients has recorded half of itself."
Fig 12 :94: "The arrangement is the substance."

This is the figure-grounded answer to "rather than merely display." A list of values is an ingredient list. A map, diagram, table layout or model adds the typed relation between the values. That relation is information the values do not carry, and which relation holds is not recoverable from the values alone (Fig 12 :46: "A bond is the typed relation between two operands."). Changing the bond changes the term even when the operands are identical, Fig 12 :96: "Two entries can share every ingredient and be inverses of one another."

- **Mode:** general for the structure; `specified` for the claim that this is the mechanism of the observed representation effect in human reasoning (needs the world experiments in `09`).
- **Refuter:** show a flat ingredient-only display from which all four structures of Fig 12 :116 ("Four structures a compositional system exhibits, and each names something the flat form cannot write."), namely isomer, catalyst, cycle and functional group, are as writable and as cheaply writable as from a bonded display. That would break Fig 12 :116 and demote the bond claim.

### F3: A flat display loses the arrangement silently (general, Domain A)

Fig 12 :14 to :16: "the ingredients are recorded and the arrangement is not", "nothing downstream can tell them apart, and nothing signals that anything was lost", "the parts are not the thing." The melt / freeze / boil example at Fig 12 :11 to :13 is "three different changes, one written formula": temperature plus state is recorded, the change-bond is not, and nothing downstream can tell the three apart.

This is the exact failure the question names. A result table that records the numbers but not the relation among them looks complete, and gives no signal that anything was lost. The loss is silent, which is why the display-only view is plausible.

- **Mode:** general (a property of the notation, checkable by reading Fig 12).
- **Refuter:** a flat display that both flags the lost arrangement and preserves the downstream discriminations that the bonded display supports. That would break the "nothing signals that anything was lost" claim as a general property of flat form.

### F4: The effect is per slot, so a global "same information" verdict misses it (general, Domain B)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Symbols table :39 to :40: "what cannot be perceived yet is residual and simply cannot be read."

A representation changes which slots carry live residual. The "same information" claim compares totals; the effect lives in the distribution. Fig 1 :15 names the routing question "where to look: broken vs novel", and Fig 1 :16 "mint φ if the description length pays": a representation that makes a gap cheap to see changes whether a term is worth minting.

- **Mode:** general for the framework rule; `specified` for the placement of the representation effect in the per-slot channel.
- **Refuter:** a controlled experiment in which a representation change alters no per-slot residual (no change in what is noticed at any slot) yet changes conclusions. That would move causality out of the perceptual/vocabulary channel and break this placement.

### F5: Representations act at the vocabulary/objective link of the dependency chain (specified, Domain B)

Fig 3 :7: "it has terms for what things afford: what can be moved, opened, joined, blocked."
Fig 3 :10: "it can say what would count as progress here, in its own terms."
Fig 12 :115: "having terms for what a situation affords was taken for a dictionary and it is a grammar."
Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Fig 3 orders the chain by dependency: perception, vocabulary, objective, planning, learn and carry (Fig 3 :20 "The chain is ordered by dependency, not by importance."). A representation is a grammar for what a situation affords, so it supplies the middle links, the very links that "attract the least attention and the fewest instruments" (Fig 3 :26). This predicts that the leverage of a representation is at link two and three, not at raw perception alone.

- **Mode:** `specified`, falsifiable and unmeasured. This is the placement of the effect, not a measurement of it.
- **Refuter:** show that representation effects occur only at link one (perception) and never at the vocabulary/objective links. That would relocate the effect and change the remedy from "encode the right bond" to "render more visibly."

### F6: A representation extends reach without adding atoms to the world (general, Domain A with C)

Fig 6 :29: "inward: is our representation adequate to hold it? The instrument extends access."
Fig 6 :26: "An import adds no atom to the world."
Fig 6 :33: "Nobody specified a telescope from an account of Mars."

A new representation is an instrument built from a worse instrument that was already returning something. Fig 6 :34: "The question is not whether a sensor could exist." It gives access to an arrangement already present; it does not create a new ground fact. This is the precise limit of "shape reasoning": it changes what is reachable, not what is true. Fig 6 :21: "MINT composes inside the closure and can never add an atom."

- **Mode:** general (a barrier rule).
- **Refuter:** a representation that demonstrably creates a new ground fact rather than access to an existing arrangement. That would break Fig 6 :25 to :26 and turn notation into a producer of atoms.

### F7: The same representation does not force the same conclusion (general, Domain D; independently corroborated)

Fig 2 :31: "Two people reading the same report are not two frames; two instruments pointed at the same thing are."
Fig 2 :45: "Frames range against the ground. They do not negotiate with it."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

Two readers of one map draw on one evidence pool, so their agreement is the pool talking, not two frames confirming each other (Fig 2 :20 to :21). The map ranges against the ground separately in each frame. This predicts that a representation does not compel a unique conclusion; it changes the reach of each frame given what that frame already holds.

World corroboration, independent of the framework: Brody et al., *The Lancet* 2000, on the Snow cholera map, "The map did not give rise to the insight, but rather it tended to confirm theories already held by the various investigators." Also Whitehead 1865, primary account, "according to a carefully-executed plan of the district, in which every house and every death was indicated", followed by "I recorded, tabulated, and pondered over, every evening." This is a genuinely different evidence pool (history of epidemiology), so it is corroboration rather than a shared-pool echo.

- **Mode:** general for the figure rule; the historical instance is grounded in the cited sources but does not settle the general cognitive claim.
- **Refuter:** a representation that, by itself and holding priors, slots and ground fixed, compels a unique conclusion in every reasoner. That would collapse distinct frames into a single deterministic channel and break Fig 2 :31, :45.

### F8: A declared meaning is not a grounded one (general, Domain C with D)

Fig 10 :18: "a declared meaning is not a grounded one."
Fig 10 :49: "Declaring a meaning does not ground it."
Fig 10 :24: "the ground does not decay, the channel does."

A legend, a scale bar or a caption declares what the marks mean; it does not settle the contested fact. The ground must be reached by an instrument, not by a more eloquent encoding. Corroborated by the Science History Institute account of Snow's ghost map (opened 2026-11-23): "his ghost map could be used to argue that living near a pump that emitted a foul odor caused cholera. Snow needed to prove that the water had to be ingested for cholera to spread."

- **Mode:** general (framework rule), with a grounded historical instance in the Snow case.
- **Refuter:** a representation whose arrangement alone constitutes the measurement that settles a contested ground fact, with no further instrument required. That would break Fig 10 :18 and :49.

### F9: Surplus only where closures differ (general, Domain D)

Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."
Fig 8 :14 to :15: "their union adds nothing", "two names for one frame."

Two representations of the same data with identical closures are one frame wearing two names; their union has no surplus. A map plus a table built from the same measurements add nothing to reach unless one frame holds a bond the other does not. Fig 8 :50: "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." The record of provenance, not the content, decides which case it is.

- **Mode:** general.
- **Refuter:** two informationally equivalent representations with demonstrably identical closures that produce a genuine new inference neither supports alone. That would break the independence condition at Fig 8 :48 to :51.

### F10: What survives, with mode attached

| claim | mode | governing line |
|---|---|---|
| A representation is a frame with a signature | general | Symbols table :111 |
| The bond carries information the operands do not | general | Fig 12 :5, Operators :4 to :5 |
| Flat form cannot write the four structures | general | Fig 12 :116 |
| The effect is per slot, hidden by aggregation | general | Fig 1 :19, :22 |
| The effect is placed at the vocabulary/objective link | specified, unmeasured | Fig 3 :7, :10; Fig 12 :115 |
| A representation extends reach, adds no atom | general | Fig 6 :29, :26 |
| One map does not force one conclusion | general | Fig 2 :31, :45 |
| Surplus only where closures differ | general | Fig 8 :51 |
| Historical instances (periodic table, Snow map, Snow table) | grounded in cited sources | world sources, not figure lines |

---

## 3. Pre-registered refuter (written before the conclusion)

Required before any outreach: "a falsifier written before the run is a design instrument, not only an honesty device" (Seat Map :287, framework local file). The shape claim is: **a representation shapes reasoning because it is a frame whose typed bonds determine reachable inference, read per slot against a ground that does not move, with union surplus only where closures differ.** It is refuted if any of the following holds:

1. A pure bond-preserving relabeling systematically changes reasoning in a way the framework cannot predict (breaks F1 and F2: the bond is not the carrier).
2. A flat ingredient-only display supports all four Fig 12 structures as readily as a bonded display (breaks F2 and F3).
3. Two frames drawing on one evidence pool produce genuinely independent corroboration (breaks F7 and F9).
4. A controlled representation-swap experiment, holding bonds, ground, priors and slots fixed, yields no systematic change in inference reachability (breaks the world-facing cognitive claim).
5. A representation is shown to create a new ground fact rather than access to an existing arrangement (breaks F6).

If any fires, the shape is withdrawn or relocated. Until one is run, no part of the cognitive or historical claim is labelled `grounded` beyond the specific cited instances.

---

## 4. Recommendation

1. Replace the question "does visualization merely display results?" (a single sealed-room question) with four domain questions: what bond is carried (A), which slots become live (B), what the ground settles (C), and whose closures differ (D). Fig 9 :54, :57.
2. Audit the arrangement, not the ingredient list. Ask what a representation lets a reasoner write that the raw data do not. Fig 12 :5, :116.
3. Keep the honest limit: a representation extends reach, it does not add atoms and it does not settle the ground. Fig 6 :26; Fig 10 :18.
4. For the world-facing claim, demand controlled representation-swap experiments (informationally equivalent, computationally different), not anecdote. The literature already supplies the design (Larkin and Simon 1987; Cheng 2004; Stapleton, Jamnik and Shimojima 2016). See `04_links_and_distribution.md`.
5. For the historical claim, keep the map's role as *confirmation of a held theory* distinct from the ground settlement. Brody et al. 2000 and Whitehead 1865 are the checkable record.
6. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator, which is the bond audit and the refuter, not a slide deck of conclusions.

---

## 5. Canonical usage check

Read after the first four sections, per the standing instructions:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the limit, the framework says "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the instruments, recording the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop, the route REFUTED before mint, and the mode rule.
- `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`: the interest-in-the-reading rule and the falsifier-before-the-run rule.

Applied here: no figure line names "visualization", "map" or "diagram". The answer is therefore a shape, not a name. The figures govern the *kinds of thing* a representation is and does, and the naming of a specific visualization technique is outside what they deliver. Indiscernibility (two informationally equivalent encodings) is not identity (two frames with different reach).

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Try to derive the answer from Fig 13's six-term minimum set | **Retracted.** Fig 13 governs the substrate of a composed physical system, not notation. It only fit by straining. Re-census moved governance to Fig 12, Symbols table, Fig 1, Fig 3, Fig 6, Fig 8, Fig 2 and Fig 10. Kept visible here rather than erased. |
| "The map gave Snow the answer" (the popular story) | **Refuted at the world level, not by the figures.** Brody et al. 2000: "The map did not give rise to the insight, but rather it tended to confirm theories already held by the various investigators." The figure rule F7 had predicted this before the source was opened. |
| "A better chart would have settled the cholera question" | **Refuted at the world level.** Science History Institute 2022: the ghost map "could be used to argue that living near a pump that emitted a foul odor caused cholera." This is F8 (declared meaning is not grounded meaning). |
| Reading all four domains into one "visualization matters" verdict | **Refused.** Fig 9 :54 requires unbundling a union into its overlapping conditions before searching. |
| Fig 12's bond pricing explains cognitive reaction times | **Refused as a strain.** Fig 12 :125 to :126 charges bits and actions in two currencies that do not add. The pricing rule governs the notation/information domain A; it does not price reaction time. Kept separate. |
| The simulated second seat in `11_audit.md` corroborates the primary | **Refused.** It shares one evidence pool, so by Fig 2 :40 its agreement is internal consistency only. |

### Seven-question recursive derivation (summary)

1. **Is a representation a frame?** Yes. Symbols table :111 defines a model as a frame with a signature; frames differ in what they can express.
2. **What does a display lose?** The arrangement. Fig 12 :5, :14 to :16; the ingredient list records half of itself.
3. **Where is the effect measured?** Per slot, under Fig 1 :19 and :22. A global claim that the information is the same aggregates the live signal away.
4. **Where in the dependency chain?** Links two and three, vocabulary and objective. Fig 3 :7, :10, :26 to :27; Fig 12 :115.
5. **Does it add atoms?** No. Fig 6 :26, :29; it is an instrument extending access, built from a worse instrument (:33).
6. **Does it force a conclusion?** No. Fig 2 :31, :45; frames range against the ground separately, and the world case (Brody 2000) agrees.
7. **When does combining representations help?** Only where closures differ. Fig 8 :51; otherwise two names for one frame (:15).

---

## 6. Updated verdict

The shape survives and is now sharper than the question's own framing. A representation is not a window onto settled results; it is a frame whose typed bonds fix what can be composed and therefore what residuals can register per slot. Its power is the arrangement it carries, which an ingredient list does not; its failure mode is to lose that arrangement silently; its limit is that it extends reach without adding atoms and without settling the ground; and its social effect depends on whether two representations draw on different evidence pools. Verdicts are kept per domain and never averaged. Triangulation: the "bond carries the difference" claim is triangulated across Fig 12 and the Operators table (notation) and corroborated at very low overlap by SEP's account of Larkin and Simon and the periodic table; the "one map, many readings" claim is triangulated across Fig 2 and Fig 8 and corroborated at low overlap by Brody et al. 2000 and Whitehead 1865. Strains after re-census: one, the Fig 13 attempt, retracted; all figure lines now govern the quantity they were written for. Status remains `specified` and ungrounded for the general cognitive claim, with specific grounded historical instances recorded as such.
