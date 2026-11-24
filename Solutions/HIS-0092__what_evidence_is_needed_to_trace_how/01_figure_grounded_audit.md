# Figure-grounded audit: what evidence is needed to trace a claim from observation to policy

**Mode of this document: `general` on the shape of the evidence, `specified` on the per-domain evidence classes. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: simulated, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, opened 2026-11-23) says LLM output can *"simulate an approximate answer/output"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources actually opened are recorded in `10_source_ledger.csv`.

---

## 0. The claim under audit

The question is a methodological one, so the "claim under audit" is the pair of candidate answers it generates:

- **A (endpoint sufficient).** The evidence needed to trace a claim is the endpoint artifact plus the documents that surround it: the published theory, the institutional record, the policy text, and the citation trail. If these are assembled and read carefully, the route is recoverable.
- **B (lineage required).** The endpoint artifact does not carry its route. Many routes can produce the same endpoint. The evidence needed is lineage: the atoms, bonds, provenance, ground settlements, refusals, selection events, and round-trip gaps at each crossing from observation to theory to institution to policy. The framework returns only the shape of that evidence, not a named archive.

The audit derives from the figures before choosing between A and B.

---

## 1. Figure census

Describe R by arity, symmetry, scale. One line per domain with actors / currency / anchor. No nameable anchor means it is not a domain yet.

**R (the residual).** We hold an endpoint and want its route. Arity: four slots (observation, theory, institution, policy), so a chain, not one question. Symmetry: a route is ordered; `→` sequence applies, not `+` conjunction (Fig 12 :30, Operators table :29-33). The artifact-to-route map is many-to-one and lossy. Scale: first order inside a stage, second order at each membrane crossing. Fig 9 :54: *"when the split lands on a union rather than a partition, unbundle before you search again."* The four stages are a dependency chain, not four instances of one task.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| 1 Observation / ground contact | instruments, observations, measurements, the ground | per-slot residuals and readings | the ground, *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* (Fig 2 :29) | is there a live reading and a stable, nameable anchor |
| 2 Theory / composition | frames, Γ, candidate terms φ, bonds, imports | composition inside closure(Γ), settlement | the ground, via settlement | which terms were minted, imported, or refused, and in what order |
| 3 Institution / room chain | institutions, peer frames, editors, review boards, prestige | agreement and selection between rooms | should be the ground, often collapses into agreement | did the next room differ and get selected against the residual |
| 4 Policy / convention / habitat | policymakers, seats, public, habitat actors | conventions, decisions, consequences | the ground (outcomes), *"a convention that decides an outcome has stopped being one"* (Fig 10 :47) | when did a convention become an outcome-decider, and what was the far cascade |
| 5 Historian's verification frame | archivists, source critics, independent frames | credibility and independence | the ground, never agreement | are the sources independent, and is the chain of custody intact |

**Order by dependency (Fig 3 :20: *"The chain is ordered by dependency, not by importance."*):** settle the observation before the theory, the theory before the institution, the institution before the policy. Describe the residual before choosing a frame (Fig 9 :27-28). Refuse before mint (Formula step 2). Measure the round-trip gap at each membrane (Fig 4 :30).

Partition or union: the four stages form a dependency chain, so an interruption at any link is not repaired by work above it (Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*). Where stages overlap in a compound, they are a union with its own loop and must be unbundled (Fig 9 :55-58).

---

## 2. Findings

### F1: The endpoint artifact cannot carry its route. Lineage is the required evidence (decisive)

Fig 13 :127: **"The array cannot be checked by inspection, so the record is what makes it verifiable."**
Fig 13 :128: **"Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available."**
Fig 13 :129: **"It is recoverable from the lineage."**
Fig 13 :130: **"A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term."**

Applied to the question: a public policy or an institutional doctrine is a composed term viewed at its endpoint. Inspecting it cannot disclose which observation, which theoretical commitment, which institutional selection, and which policy decision produced it. That information is not lost from the world, it is absent from the artifact. What the historian must collect is the record: the lineage. This decides between A and B in favour of B.

Fig 13 :132-133 names the two distinct historical questions the lineage answers:
**"The first is provenance: how did this come to be, and from what."**
**"The second is decidability: given the library as it stands, could this have been reached at all."**

A historian who answers only the first produces a chronology; one who answers both produces a checkable account. **Refuter:** exhibit an endpoint artifact from which the route is uniquely recoverable by inspection (an injective artifact-to-route map), so the lineage adds nothing.

### F2: The route is a sequence with priced bonds, not an ingredient list

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."**
Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."**

A list of the documents that mention a claim cannot express order, dependency, or refusal. The evidence needed must record which bond held between items: sequence (`→`), production (`⇒`), subtraction (`−`), comparison (`⋛`), or negation (`¬`). This is also why citation counts are the wrong currency: they record adjacency, not bonds. **Refuter:** show that an unordered set of documents determines the same trajectory as the ordered, bonded record in every case.

### F3: Per-slot residuals, not aggregated narratives

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

A claim's route is traced slot by slot: this measurement, this term, this review, this ruling. Aggregating into "the scientific consensus of the period" discards the live signal that says where the claim actually changed. Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* A discipline's own retrospective self-description is such a frame-internal quantity. **Refuter:** show that an aggregate account reproduces every per-slot transition without residue.

### F4: Each crossing is a lossy membrane; measure the round-trip gap

Fig 4 :22: **"Only methods cross up. Only head starts come down."**
Fig 4 :25: **"A recording carried upward looks like knowledge and is a description of one occasion."**
Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Observation to theory, theory to institution, institution to policy are membrane crossings. What crosses up is a method or a compressed claim; what crosses down is a head start, never the original occasion. A trace that treats a policy citation of a paper as the paper's content commits the recording error. The evidence needed includes the round-trip gap R_T at each crossing (Symbols table: `gap(x, (T_E ∘ T_A)(x))`). **Refuter:** demonstrate a lossless transform between two adjacent stages, so R_T is zero and need not be measured.

### F5: Imports need a source gate and a shadow test

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**
Fig 8 :50: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"**

When a term enters from another field, the trace must distinguish independent rediscovery from adoption. The contents alone cannot do it; only provenance can. This is why the historian needs correspondence, notebooks, grant records, and dated drafts, not only the published argument. Fig 8 :53: **"Residual first, frame second."** Describe the gap the import filled before selecting which outside frame to search. **Refuter:** show a case where convergent derivation and adopted import are indistinguishable even in the record, and no consequence follows.

### F6: Institutional agreement is not evidence of the claim's truth

Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
Fig 7 :36: **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Institutional endorsement (a journal, a society, a panel) is a room's agreement. It is evidence about the institution, not about the claim's contact with the ground. The evidence needed at this stage is the record of selection between rooms: which room differed, which residual it surfaced, and what the ground returned. Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool."* Fig 7 :13: *"same closure, handed along; agreement compounds, evidence does not."* **Refuter:** show an institution whose agreement with the ground is constitutive (Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it"*), so its endorsement is the anchor rather than a room.

### F7: Policy: provenance of rulings, and the moment a convention becomes an outcome

Fig 10 :62: **"A ruling carries provenance like an atom."**
Fig 10 :63: **"The residual it answered, the reasoning, the date, in a record the seats below can read."**
Fig 10 :65: **"Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record."**
Fig 10 :47: **"a convention that decides an outcome has stopped being one"**

A policy is a ruling plus a convention. The evidence needed is the ruling's provenance (residual, reasoning, date) and the crossing point where a neutral convention began to decide an outcome. Provenance alone does not show the policy was correct; only the ground (consequences) does. **Refuter:** exhibit a policy whose legitimacy is fully established by its outcome record without any provenance of the decision.

### F8: Enumerate the habitat to far orders

Fig 11 :43: **"The habitat is enumerated, never composed."**
Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**
Fig 11 :52: **"contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

A claim's effect on public policy is often not in the direct chain of citations or decisions. The actors that matter can be three steps out. The evidence needed is an enumerated habitat (actors, conditions, relations) around the residual at each stage, extended until the cascade stops. Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* So the historian must not pre-classify actors as supporters or opponents. **Refuter:** show a trace that reaches the policy outcome with first-order enumeration only, with no second- or third-order effect bearing on the result.

### F9: Refusals and retractions must be in the record

Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."**
Fig 5 :53: **"refuted: a term we hold is wrong; a term is owed that says so"**
Fig 5 :55: **"Nothing leaves the library. What falls is the reach."**

A history that records only what was accepted is a flat record. Formula step 3: *"NOTHING IS EVER DELETED, and the reach falls because something was ADDED."* The evidence needed includes rejected hypotheses, failed replications, withdrawn standards, and refused terminations, with their dates. **Refuter:** show a correct trajectory that can be recovered from successes alone, with every refusal omitted.

### F10: An incomplete trace is a verdict, not a failure

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room."**
Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**

Archival gaps are expected. The honest output is a described residual (what is missing, in effect terms), not a fabricated continuity. Fig 13 :136: *"It can say the question is not one question and must be split before it is searched again."* **Refuter:** exhibit a sealed historical record that can be searched to exhaustion, making absence a proof.

### F11: Independence, not quantity of witnesses

Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."**
Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**
Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Ten archives derived from one press release are one witness. The evidence needed is low-overlap frames (laboratory notebooks, funding records, regulatory files, oral histories, material artifacts) ranged separately against the ground. Fig 2 :32: *"Independence is what makes agreement mean something."* **Refuter:** show that increasing the number of same-pool documents increases the reliability of a historical claim about the world.

---

## 3. Pre-registered refuter

Written before the conclusion, per the standing rule: a falsifier written before the run is a design instrument. The shape claim (that tracing a claim requires lineage-type evidence) is refuted if any of the following holds:

1. **Injectivity of the artifact.** An endpoint artifact is exhibited from which the route is uniquely recoverable by inspection, so the lineage adds no information (breaks F1, F2).
2. **Lossless crossing.** A transform between two adjacent stages is demonstrated with R_T = 0, so the round trip need not be measured (breaks F4).
3. **Provenance dispensable.** A trajectory is reconstructed and settled against the ground with no provenance records and no cross-frame comparison, and the reconstruction is not later overturned (breaks F5, F7).
4. **Single-frame sufficiency.** One frame's own record is shown to settle the route without independent low-overlap witnesses, and the ground does not later reverse it (breaks F6, F11).
5. **Successes sufficient.** A correct trajectory is recovered from accepted results alone with every refusal omitted (breaks F9).

If any fires, the answer is withdrawn or narrowed. Until one is run, no part of this is `grounded`.

---

## 4. Recommendation

Collect evidence in five layers, each with its own ground:

1. **Observation:** per-slot readings and a nameable, non-updating anchor. Not a consensus summary.
2. **Theory:** provenance and sequence of terms, imports with source gate and shadow test, and the refusals with dates. Not a list of ingredients.
3. **Institution:** evidence of selection between rooms, not a roster of endorsements. What residual did each room surface, and what did the ground return?
4. **Policy:** provenance of the ruling (residual, reasoning, date) plus the moment a convention became an outcome-decider, plus the habitat enumerated to the order where the effect actually lands.
5. **Across all layers:** independent low-overlap frames, chain of custody, measured round-trip gaps, and explicit gap verdicts where the record is silent.

Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Offer the lineage and the refuter, not a retrospective narrative.

---

## 5. Canonical usage check

Two local sources were read after the first four sections and govern usage:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"* and stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: the shape a frame searches for is a preference, not a term; the remedy is to *"make the sought-for shape an ORDINARY TERM."* This is why §0 binds both candidate answers before deriving.

Consequence for this question: "what evidence is needed" is itself a shape question. The framework returns the shape of the evidence (lineage, bonds, provenance, independence, measured gaps), not a named list of documents. Naming a specific archive as *the* required source would be a name where the framework returns a shape.

---

## 6. Retractions and confirmations

Kept visible, never silently erased.

| earlier reading | status after the canonical check |
|---|---|
| "Institution" treated as one stamp of approval | **Retracted.** Re-census via Fig 7 :35-36 shows a room chain. The evidence needed is selection between rooms, not a single endorsement. |
| "Public policy" treated as a terminal artifact | **Retracted.** Fig 10 :47 and :62-65 show a ruling plus a convention that may decide an outcome. The crossing moment is itself evidence. |
| "A complete lineage can be required" | **Narrowed.** Fig 8 :39, Fig 9 :44 and Fig 13 :134 make incompleteness a verdict. Require a described residual, not an impossible completeness. |
| "The framework returns a list of evidence types" | **Narrowed.** The local README's *"a shape, not a name"* governs: the five layers are the shape, not a prescribed archive. |
| F1 decisive | **Confirmed.** Fig 13 :127-130 is the governing passage and was checked character by character against the local extract. |
| F6 (agreement is not truth) | **Confirmed with a boundary.** Fig 2 :36 makes an anchor legitimate when the question is constitutively about it; an institution's agreement can be the ground only for a question about that institution. |
| Apparent strain between Fig 3 (ordered chain) and Fig 9 (union/unbundle) | **Not strained after re-census.** Fig 3 orders a dependency chain; Fig 9 governs overlapping compounds. Different objects. |
| External sources as corroboration | **Declared, not hidden.** The essays and the canonical README share an author and an evidence pool with the figures. Their agreement is internal consistency, not independent confirmation. |

---

## 7. Verdict

Shape survives: tracing a claim requires lineage evidence, per-slot and bonded, with provenance at each membrane crossing, refusals in the record, independent low-overlap frames, and measured round-trip gaps. The endpoint artifact alone is insufficient (F1). The specific evidence classes are `specified` and ungrounded. Nothing here names a particular archive, and nothing here settles any actual historical case. Strains after re-census: none hidden; one boundary noted at F6.
