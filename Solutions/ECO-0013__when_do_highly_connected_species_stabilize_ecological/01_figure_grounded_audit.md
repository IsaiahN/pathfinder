# Figure-grounded audit: when do highly connected species stabilize or destabilize ecological networks?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured in a real web. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, 2026) says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the ecological question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The 16 canonical files under `FRAMEWORK/figures/`, the verbatim extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule `FRAMEWORK/reference/FIGURES_README_canonical.md`, and `THE_FORMULA.md`. Every figure quote below was checked against the verbatim extract before use. World sources appear only in `09_watson_answer.md` and `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The question asks for the sign of a structural property. Let a web be a set of species slots `s`, each with a degree (number of interaction links) and a typed set of relations. A perturbation arrives. The prediction from a simple connectance story is that more links damp the perturbation, so persistence rises with degree. The observation in some webs is the opposite: removing or disturbing one highly connected node takes many others with it. The residual `R_s` is measured per species slot, not as a single network average.

Bound the sought-for shape as an ordinary term (formula Direction step): `CONNECTANCE_VALENCE(R)` is the sign of a high-degree node's contribution to persistence under residual R. It is refusable: a fixed list of stabilizing hubs that survives a change of the residual would break it.

### R by arity, symmetry and scale

- **Arity.** One node property (degree) mapped to a system outcome (persistence after perturbation). But the mapping is not one-to-one: it runs through the typed relations the node carries, so the arity of the *effect* is the number of relations incident on the slot, not the single scalar degree.
- **Symmetry.** Degree in an undirected graph is symmetric, but ecological links are typed and often directed (predation, pollination, competition, dependency) and differ in strength. Treating all links as interchangeable is the flat-formula error named in Fig 12. Under a symmetric bond, many spellings are one term; under an ordered bond, different orders are different terms (Fig 12 :92-93). The question's word "connected" silently assumes the symmetric reading.
- **Scale.** First order is the hub's direct partners. Second and third order are the cascade. Fig 11 :52-54 says the residual that mattered was three steps out. A verdict taken at first order only is a reading below the break.

---

## 1. Domain census

One line per domain: actors, currency, anchor. A domain without a nameable anchor is not a domain yet.

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1 ecological habitat (Fig 11) | species (hubs and specialists), conditions (season, terrain, resource), relations (pollination, predation, competition, dependency) | contact and persistence under perturbation | the ground: what the web actually does after a perturbation, measured as persistence or observed extinction cascade | union: a hub sits in several relations at once |
| D2 network structure (Fig 13, Fig 1, Symbols) | nodes and typed links, per-slot residuals | influence travelling between nodes; residual indexed per slot | the observed adjacency and interaction-strength matrix | union of overlapping conditions, so unbundle before searching (Fig 9 :54-58) |
| D3 verification and outreach frame (Fig 2, Fig 10) | ecologists, datasets, models, expert readers | agreement and residual | the ground, never agreement | partition between those who can refute and those who only agree |

**Order by dependency (Fig 3).** The chain runs: 1 perception (enumerate the habitat and the per-slot residual), 2 vocabulary (have terms for what a link affords: consume, pollinate, compete, depend), 3 objective (say in the web's own terms what would count as stability), 4 planning (which links to measure), 5 learn and carry (name what worked and verify it). Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Computing a connectance index before step 3 is optimising a link that has not been shown to work. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." In this domain, interaction-strength and response-correlation instruments are the missing link, not more connectance indices.

**No nameable anchor, no domain.** D1 and D2 have anchors (field measurement, observed matrix). D3's anchor is the ground, and in this simulated run all three domains draw on one evidence pool, so D3 independence is zero. That is declared, not hidden.

---

## 2. Figure census

| figure | bearing on this question | verdict |
|---|---|---|
| 1 The Agent | residual per object slot; aggregation hides the live slot | governs the measurement of stability |
| 2 The Ground | independence and correlation have valence; anchor must not update | governs the flip condition and the anchor |
| 3 Dependency Chain | a reading below the break is a reading of nothing | governs the order of inquiry |
| 4 The Membrane | round trip carries a gap; methods cross up, recordings do not | governs any condensation of the answer |
| 5 Mint Pipeline | three guards as a product; settlement is not sufficiency | no new primitive is owed here |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse ones | network is already a held primitive, so what is owed is instrumentation |
| 7 Room Chain | agreement compounds, evidence does not | rules out expert agreement as verdict |
| 8 Union Surplus | high overlap, one frame wearing two names; low overlap, surplus | governs the stabilizing regime directly |
| 9 Leave / Arrive | union versus partition; filters for budget, witnesses for verdict; describe before looking | governs unbundling and the resting place of the verdict |
| 10 Ground Maintainer | bring a characterised residual, never the source; verifier non-access | governs the outreach order |
| 11 The Habitat | valence relative to residual; relations not kinds; contact cascades; introduction without exclusion | the governing figure for this question |
| 12 The Bond | bonds typed and priced; isomer; flat formula loses arrangement | governs the critique of "highly connected" |
| 13 The Minimum Viable Set | network is a held structure; cross-kind composition; no last route | governs the domain of the claim |
| Operators table | bond tests; none of them measures degree | supports the typing critique |
| Symbols table | R is the aim and always a slice; network is a structure | supports per-slot measurement |

Strained readings are named in section 6 and in `11_audit.md`, not smoothed over.

---

## 3. Findings

### F1 - Valence is relative to the residual, not carried by the hub (governing line)

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
Fig 11 :51: "No standing list of good actors survives a change of residual."

This is the direct answer to the question as posed. A highly connected species is not a kind with a fixed sign. The same hub is a benefactor for one residual (for example, a perturbation from which its partners recover asynchronously) and a malfactor for another (for example, a perturbation shared by all its partners). Stabilizing and destabilizing are relations, parallel to mutualism and parasitism, not properties of the node. Therefore the honest answer is the set of conditions under which the relation flips, not a roster of good and bad hubs.

Mode: `general` on the structural claim, `specified` when applied to a named web. Figure status: **single-source** for the exact valence rule (Fig 11), corroborated in the world by Allesina and Tang (2012), who find the same complexity stabilizing or destabilizing depending on interaction type. World agreement from a different field is corroboration only, not a second figure.

Refuter: a fixed list of stabilizing hubs that keeps its sign across a genuine change of residual breaks Fig 11 :49-51. Written before the run (section 4).

### F2 - The flip condition is overlap or correlation among the hub's links (triangulated)

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."
Fig 2 :32: "Independence is what makes agreement mean something."
Fig 2 :39: "Correlation has valence."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 8 :48: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."
Fig 8 :49: "Two frames that overlap almost completely are one frame wearing two names."

Read in the ecological domain, a hub links partners. If those partners respond independently (low overlap), their union has a surplus: one failing is compensated by another that does not fail with it, so the hub is a conduit for insurance. If they respond in lockstep (high overlap, shared evidence pool), they are one frame wearing many names: the union adds no surplus, apparent redundancy is nominal, and the hub is a single point of failure whose loss removes many functions at once. High connectivity therefore stabilizes when the linked responses are low-overlap, and destabilizes when they are high-overlap.

This is the **triangulated** core of the solution. The two governing figures have low overlap: Fig 2 derives the rule from anchoring and the two collapse modes; Fig 8 derives it from the union surplus and idempotent closure. They arrive at the same condition from different questions. World corroboration is strong and independent in pool: Yachi and Loreau (1999) derive that asynchronicity of species responses is the basis of the buffering effect, and that with perfectly positively correlated responses "the ecosystem behaves exactly as a single species", which is Fig 8 :49 in population-biology notation.

Mode: `specified`. Refuter: a web whose hub partners have perfectly correlated responses shows the same buffering as one with independent responses. That would break Fig 2 :31-32 and Fig 8 :48-49.

### F3 - First-order enumeration misses the cascade (single-source)

Fig 11 :52-54: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."
Fig 11 :54: "Carson, Silent Spring, 1962. The mechanism, biomagnification through the food chain to eggshell thinning, was established over the following decade."

Degree counts direct links. The effect that decides stabilize versus destabilize can be two or three steps out, exactly as biomagnification was not visible at the first hop. A verdict from degree alone is a first-order reading of a third-order residual. The required method is the habitat rule: enumerate outward until the cascade stops mattering.

Mode: `specified` (a methodological prediction about which measurements carry the sign). Refuter: a demonstration that a direct-link-only model predicts collapse outcomes as well as a cascade-enumerating model across webs.

### F4 - Stability must be indexed per slot, not averaged into "connectance" (single-source)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

A single network connectance value is the aggregate the figure warns against. A global number near zero is compatible with one live slot about to fail (Fig 1 :13). The disagreement in the literature about whether complexity stabilizes is partly this measurement failure: two webs with the same mean connectance can differ in which slot is live.

Mode: `general` on the measurement rule. Refuter: show that a single global connectance preserves the per-slot signal that predicts the first extinction.

### F5 - The web is a union of overlapping conditions, so unbundle before searching (triangulated)

Fig 9 :54-58: "when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 13 :74: "Everything else is a composition across the two kinds, never within one."

A hub is simultaneously in several relations (it eats, is eaten, competes, facilitates). That is a union of overlapping conditions, not a list of separate cases. A single lever (protect the hub, or remove it) clears the region where only one condition holds and leaves the intersections standing. Fig 9 :57-58: what remains is "smaller and it is also categorically different: a case in two conditions is not a harder case of either." Connectance is a filter for which web to study first; it must not be promoted to a witness for the verdict.

Mode: `general`. Triangulated with Fig 3 dependency order (different figures, same conclusion that the index is downstream of the objective).

### F6 - The question is settled by a ground reading, not by agreement (triangulated)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 7 :13: "agreement compounds, evidence does not"
Fig 7 :35: "A room's agreement is variation, not a verdict."

The anchor for this question is nameable: what the web does under perturbation. Field experiments, manipulation of interaction strengths, and observed persistence are anchors. Agreement among modellers who share the same random-web assumption is one evidence pool, not two frames. The framework rule "A search that finds nothing is never a proof of absence" (Fig 8 :39) also applies: a modelling program that never finds a stabilizing hub has not proved none exists.

Mode: `general`. Refuter: exhibit an anchor that changes its answer when a frame pushes on it (then it was not an anchor).

### F7 - Managed and unmaintained habitats pose different questions (single-source)

Fig 11 :14-15: "nothing selects; what survives is what the ground kept"
Fig 11 :61-62: "The seat's power is asymmetric. Introduction is available; exclusion is not."
Fig 11 :63: "Which is why a managed ecosystem is permanent work rather than a solved state."
Fig 11 :65: "Introducing an actor for its cascade is ecosystem engineering, after Jones, Lawton and Shachak, 1994. Cane toads and kudzu are the same move with the cascade unenumerated."

In an unmaintained web, what survives is what the ground kept, so the valence of a hub is a result, not a design choice. In a managed web, a seat can introduce a hub but cannot subtract the habitat; adding a generalist is permanent work with a cascade that may be unenumerated (cane toads and kudzu are the figure's own examples). So part of the answer to "when" is institutional: before asking whether a hub stabilizes, ask whether there is a seat, because introduction and exclusion are not symmetric.

Mode: `specified` for the management branch. Refuter: show a managed web where a hub can be subtracted as cleanly as it was introduced, so the asymmetry fails.

### F8 - "Highly connected" is a flat-formula reading of a typed structure (strain, re-censused)

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
Fig 12 :46-47: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."
Fig 13 :75: "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."

The question's "connected" treats all links as one symmetric bond with a single count. That is the flat formula: ingredients recorded, arrangement not. Predation, pollination, competition and dependency are different bonds, and a hub whose links are all of one typed relation is a different substance from a hub with the same degree across mixed relations. This is not a contradiction between Fig 12 and the habitat figure. Re-census: Fig 11 governs the valence of actors relative to a residual; Fig 12 governs what a link carries. Different objects, so no strain after re-census. The apparent strain was a category error in the question's vocabulary, exactly the kind the canonical usage rule sends back to census.

Mode: `general`. Falsifier: show two webs with identical link counts but identical bond arrangements and identical dynamics under the same perturbation (that would make the bond term free, breaking Fig 12's priced-bond claim).

### F9 - No new primitive is owed; instruments are (single-source)

Fig 13 :23-24: "network" is one of the six structures, "that entities relate, and influence travels".
Symbols table :101: "That entities relate at all, and that influence travels between them."
Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."
Fig 8 :39: "a search that finds nothing is never a proof of absence"

Network is already in the library, so this question can be posed inside closure(Γ). Minting a seventh primitive would be an import that adds no needed atom (Fig 6). What is missing is not a term but an instrument: a way to measure interaction strength and response asynchrony at the per-slot level. Fig 6 :34-35 says the search for a proto-instrument is a search for one already returning something. Interaction-strength estimates (Paine-style per-capita measurements) and response-correlation time series are such instruments, already returning partial readings.

Mode: `specified`. Refuter: exhibit a web effect that no arrangement of the six structures can represent, after a genuine re-census.

### Summary of verdicts by domain (never averaged)

| domain | verdict | triangulation status |
|---|---|---|
| D1 habitat: valence of a hub | relative to residual; relations not kinds | single-source (Fig 11) plus ecology world source |
| D2 structure: flip condition | low overlap stabilizes, high overlap destabilizes | **triangulated** (Fig 2 and Fig 8), low overlap between routes |
| D2 structure: cascade reach and per-slot measurement | first order is insufficient | single-source (Fig 11, Fig 1) |
| D3 verification: ground versus agreement | ground decides; agreement cannot | triangulated (Fig 2 and Fig 7) |

---

## 4. Pre-registered refuter

Required before any outreach. "A falsifier written before the run is a design instrument, not only an honesty device" (Seat Map field guide, amended). The shape claim `CONNECTANCE_VALENCE(R)` is refuted if any of the following holds:

1. A fixed roster of stabilizing "good hubs" keeps its sign across a genuine change of residual (breaks Fig 11 :49-51, F1).
2. A web whose hub partners have perfectly correlated responses buffers as well as one with independent responses (breaks Fig 2 :31-32 and Fig 8 :48-49, F2).
3. Direct first-order links predict collapse as well as a cascade-enumerating model across webs (breaks Fig 11 :52-54, F3).
4. One global connectance number preserves the per-slot first-extinction signal (breaks Fig 1 :19 and :22, F4).
5. Two bond arrangements with the same atoms produce identical dynamics under the same perturbation (breaks Fig 12 :5 and :46-47, F8).

If any fires, the shape is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with F1 and F2: the hub's sign is a relation, and the flip condition is overlap of responses. That is the answer, in shape form.
2. Refuse the roster reading of "highly connected species". It is the flat-formula error (F8), and a roster that survives a change of residual would refute the framework's own valence rule.
3. Measure per slot and out to the third order (F3, F4). Connectance is a budget filter, not a witness (F5).
4. State the mode on every substantive sentence. Most of this answer is `specified`; the structure is `general`; nothing is `grounded`.
5. Send the generator (shape plus refuter), not the conclusion. Fig 4 :22-25: only methods cross up; a recording carried upward looks like knowledge and is a description of one occasion.
6. Ask what would count as a failure before offering any source link. Record that verdict before showing theory.

---

## 6. Canonical usage check and retraction/confirmation log

Two sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." Canonical limit: the framework reports "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the available instruments.
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7 separates SEARCHED, INWARD and OUTWARD. Here SEARCHED is answered: the needed term (network, overlap) is already in closure(Γ), so the third question does not apply and importing a new primitive would add an atom that was not needed. The missing thing is an instrument (INWARD), not a frame (OUTWARD).

| earlier reading | status after canonical check |
|---|---|
| "highly connected" is a symmetric degree count | **Retracted.** Re-census to F8: bonds are typed; degree is a flat-formula reading. Not a figure conflict, a vocabulary error in the question. |
| "Fig 11 versus Fig 12 strain" | **Not strained.** Fig 11 governs actor valence relative to a residual; Fig 12 governs what a link carries. Different objects; matches the canonical re-census rule. |
| "stabilize or destabilize is a property of the species" | **Refused, not merely unsupported.** Fig 11 :49-51 makes valence relative to the residual. Canonical shape-not-a-name limit applies to the roster, not to held atoms. |
| "agreement among network ecologists settles it" | **Refused.** Fig 2 :35, Fig 7 :13. A mirror chain is one long room. |
| "no stabilizing hub found in a search proves none exists" | **Refused.** Fig 8 :39: "a search that finds nothing is never a proof of absence". |
| "network would have to be imported into the framework" | **Refused.** Fig 13 lists it as a held structure. No atom added; the gap is instrumentation. |
| F2 triangulated status | **Confirmed.** Fig 2 (anchor and correlation) and Fig 8 (union surplus) have low overlap and agree on the condition. World corroboration from Yachi and Loreau is a different evidence pool but ecology-to-ecology overlap is declared. |

### Strain log

- **Live strain, named not hidden:** the Figures give the condition (overlap of responses) but no numeric threshold. How much asynchrony is enough to flip the sign is not in the text. That is an instrument question, not an argument, and it is the honest stop point.
- **Resolved strain:** symmetric degree versus typed bonds (F8), dissolved by re-census.
- **No other strained figure line found** after re-census.

### One-paragraph derivation summary

The web is a held structure (Fig 13), so no import is owed. A hub has no fixed valence (Fig 11 :49-51); its sign is set by the overlap of the responses it links (Fig 2 :31-32, Fig 8 :48-49), by how far the cascade runs (Fig 11 :52-54), and by whether links are typed and weak rather than lumped into a degree count (Fig 12 :5, :46-47). Stability must be read per species slot (Fig 1 :19, :22), the problem is a union of overlapping conditions (Fig 9 :54-58), and the verdict belongs to the ground, not to agreement (Fig 2 :35, Fig 7 :13). What would settle it is an instrument measuring interaction strength and response asynchrony, not a further argument.
