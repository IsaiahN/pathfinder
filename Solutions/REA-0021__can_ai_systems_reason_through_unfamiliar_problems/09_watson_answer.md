# WATSON answer: can AI systems reason through unfamiliar problems?

**Mode: `general` on the structural shape, `specified` per domain, `gap` on empirical attribution. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself"*) it cannot settle the claim it reports on. No measurement of any AI system was taken.

## QUESTION

Decide, in effect terms, whether a successful response by an AI system to a problem absent from its examples shows reasoning through the unfamiliar or the extension of prior patterns. Source: `reasoning.txt` line 28, section 3. Restated as an effect: given system S with library Γ and novel problem P, what is the source of the closure of `R = |Γ(b,a) − o′|` on P? Option A says a new composition reaching beyond the examples. Option B says a reuse or recombination of them. What each leads to: A licenses a generator claim without a discriminator; B licenses a pattern-claim from a score. The figures are asked to decide the form of the answer, not to name a model.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (residual).** Arity: two-indexed `(system, problem-slot)`, with a hidden third index, the frame that judges novelty. Symmetry: asymmetric, because "unfamiliar" is a relation between a problem and a Γ, not a property of the problem; a generator crosses scales and a playback does not. Scale: one inference inside one scale, versus capability acquired across problems at the membrane. Fig 9 names a union compound: a case in two conditions is not a harder case of either.
- **D1, model-internal composition.** Actors: atoms, bonds, candidate φ, slots s. Currency: residual per slot, cost(φ) against cost(R), closure and reach. Anchor: figures as metalaws; ground for any settlement. Type: partition inside closure, which molecules compose.
- **D2, corpus, priors and habitat.** Actors: examples, inherited priors, verifiable rewards, curriculum, seat. Currency: contact, atom import, enumerated habitat. Anchor: an outcome that does not update on the model's report. Type: union of what the library holds and what crosses its wall.
- **D3, benchmark and evaluation.** Actors: test designers, held-out sets, scores, leaderboards. Currency: measured residual, contamination, substituted habitat. Anchor: the actual problem's correct answer. Type: union of novelty of form and availability of a discriminator.
- **D4, human and animal comparison.** Actors: people, corvids, pigeons, experimenters. Currency: transfer to novel samples, relational mapping, inhibition of a prior response. Anchor: controlled experiment. Type: union of fluid and crystallized conditions.
- **D5, verification of this package.** Actors: expert readers, figures, refuter. Currency: agreement versus residual. Anchor: the ground, never agreement. Type: partition of checking roles, one evidence pool here.

Union, not a partition. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* No domain without a nameable anchor was admitted; "consciousness as an inner property" was refused because the question names no anchor for it and Fig 11 :36 calls that form *"the wrong question."* Dependency order (Fig 3 :20): perception, vocabulary, objective, planning, learn and carry. The break sits at vocabulary/objective, where "what would count as progress on the unfamiliar" has no cross-domain instrument.

Strain test: Fig 13's closed set and Fig 5's mint seem to conflict about whether novelty is possible. Re-census: Fig 13 governs kinds, Fig 5 governs arrangements. Different quantities, so no strain after re-census.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs. Per-domain verdicts are kept separate and never averaged.

**Governing lines, whole question:**

- Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."* -> the either/or must be unbundled before any system is tested.
- Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* -> novelty is per system and per slot, not a benchmark average.
- Fig 6 :22 *"NOVEL means novel relative to atoms, not to the world."* -> unfamiliarity is relative to Γ.
- Fig 8 :50 *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"* -> a score or trace cannot name a source.
- Fig 11 :39 *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."* -> the unit of attribution is system plus habitat.
- Fig 9 :32 *"you get a kind of thing, never the answer itself"* -> the output is a discriminator shape, not a model verdict.
- Fig 13 :134 *"Unreachable is a verdict here, not a silence"* -> the empirical attribution is `gap`, reported plainly.

**Per-domain verdicts:**

| domain | figure lines | mark | verdict |
|---|---|---|---|
| D1 composition | Fig 6 :21 *"MINT composes inside the closure and can never add an atom."*; Fig 13 :115 *"The set is closed. The arrangements are not. That gap is why import exists."*; Fig 5 :29 *"nothing new here"* | **triangulated** (closure, substrate, mint guards: low overlap) | `general`: a new molecule can be composed from held atoms, so a novel success is not evidence of a mechanism beyond examples. |
| D2 habitat | Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*; Fig 8 :32 *"no search, however long, adds an atom."*; Fig 11 :40 *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."* | **triangulated** (wall rule plus habitat rule, low overlap) | `specified`: a missing atom needs a differing frame with a source gate; import is last by dependency, not first. |
| D3 evaluation | Fig 8 :50; Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*; Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* | **triangulated** (provenance, frame-internal quantities, anchor) | `general`: a score underdetermines source; a discriminator plus provenance is required. |
| D4 human and animal | Fig 11 :39; Fig 12 :123 *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* | **triangulated for the group claim, single-source for the figure half** (Fig 11 plus Fig 12; the operational tests are world sources) | `specified`: fluid and crystallized conditions overlap; novel-sample transfer is an operational discriminator in another substrate. |
| D5 verification | Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*; Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*; Fig 10 :42 *"A verifier that can reconstruct the claim cannot verify it."* | **triangulated** (room chain, ground, verifier non-access) | `general`: this simulated second seat shares one evidence pool, so its agreement is internal consistency, not corroboration. |

**Strains sent to re-census, not kept as witnesses:** Fig 13 :115 versus Fig 5's mint (kinds versus arrangements, dissolved); the bond/unary description of negation in Fig 12 and the Operators table (same operator set, different precision, non-propagating); the operand type of `⋛` when operands are successes rather than quantities (live, needs an instrument).

## WORLD (secondary sources read)

World sources corroborate; they never overrule. Overlap is declared per row.

- **AI, measurement of intelligence.** François Chollet, *On the Measure of Intelligence*, arXiv:1911.01547, 2019: *"unlimited priors or unlimited training data allow experimenters to 'buy' arbitrary levels of skills for a system, in a way that masks the system's own generalization power."* Predicts novelty must be indexed to priors. Corroborates D1 and D2. Overlap: low with framework, high with ARC Prize.
- **AI, compositional generalization.** Brenden M. Lake and Marco Baroni, *Generalization without systematicity*, ICML, arXiv:1711.00350, 2018: *"when generalization requires systematic compositional skills ... RNNs fail spectacularly."* Predicts a working discriminator (SCAN *dax*) whose failure is informative. Corroborates D3. Overlap: low with all others.
- **AI, reasoning evaluation.** Iman Mirzadeh et al., *GSM-Symbolic*, ICLR camera ready, arXiv:2410.05229, 2024: *"performance of all models declines when only the numerical values in the question are altered."* Predicts surface-form change exposes source. Corroborates D3. Overlap: shares a pool with the next row.
- **AI, reasoning-model limits.** Parshin Shojaee et al., *The Illusion of Thinking*, NeurIPS, arXiv:2506.06941, 2025: *"LRMs face a complete accuracy collapse beyond certain complexities."* Predicts limits are structural rather than a lack of scale. Corroborates D3. Overlap: same pool as GSM-Symbolic, so one witness with two faces.
- **Human cognition, analogy.** Wikipedia contributors, *Analogy*, accessed 2026-11-23: *"analogy depends on the mapping or alignment of the elements of source and target."* Predicts transfer is relational, not object matching. Corroborates D4. Overlap: low.
- **Human cognition, abilities.** Wikipedia contributors, *Fluid and crystallized intelligence*, accessed 2026-11-23: *"Fluid intelligence is the ability to solve novel reasoning problems"* and crystallized intelligence is *"the application of learned procedures and knowledge."* Predicts the two offered options are overlapping ability conditions, and a meta-analysis quoted there says *"memory training programs appear to produce short-term, specific training effects that do not generalize."* Corroborates the union in D4. Overlap: low.
- **Animal behaviour.** Wikipedia contributors, *Animal cognition*, accessed 2026-11-23: *"Many experiments end with the presentation of items never seen before; successful sorting of these items shows that the animal has not simply learned many specific stimulus-response associations."* Predicts an operational discriminator in a non-linguistic substrate. Corroborates D4. Overlap: low.
- **Metatheory, source discrimination.** Isaiah N, *The Hard Problem is About Source*, 2026-08-28: *"the instrument is speaking only about what it measured, it cannot comment on the source."* Predicts score-level source inferences fail. Corroborates D3, high overlap with framework author.
- **Method, simulation limit.** Isaiah N, *The Recursive Self-Improvement Trap*, 2026-11-19: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* Predicts this derivation cannot validate itself. Corroborates D5, high overlap.
- **Method, outputs versus generators.** Isaiah N, *They're Scanning Books When They Should Be Studying Nature*, 2026-09-06: *"The real import is not a new term in the existing space. It is a new dimension of the space."* Predicts a missing primitive needs a new axis, not more data. Corroborates D2, high overlap.

No world source conflicts with the figure verdict; the conflict rule was not triggered. Agreement among the framework essays is expected because they share an author and an evidence pool. The two benchmark-critique papers are one pool, not two witnesses.

## VERDICT (from the figures)

The figures decide the shape, not a model verdict. The offered either/or is a union of conditions: search inside a closure, a new composition over held atoms, and an import from a differing closure. Novelty is relative to a system and indexed per slot. A novel success does not imply a mechanism beyond the examples, because arrangements are open over a closed set of kinds. A genuinely missing atom requires contact with a differing frame, with provenance and a source gate. Scores and fluent traces cannot identify a source, because contents do not carry provenance. Capability belongs to a system and its habitat, and a harness solve proves wiring only. Which named system reasons on which slot is `gap`, unreachable at this budget rather than silenced. Mode: `general` on the shape, `specified` per domain, `gap` on attribution, `candidate` until a ground pays.

- **cost if wrong:** if a replay is called reasoning, capability is attributed to a model in isolation and the habitat that actually does the work is missed. If a genuine new composition is denied because it uses old atoms, effort is spent importing an atom that was not owed, which Fig 6 prices above starting from primitives. Both costs are bounded and locatable because the verdict keeps slots and domains separate. The larger avoidable cost is spending a reader's independence by sending a recording before a discriminator (Fig 4 :25, Fig 2 :42).
- **undoable:** yes. The shape claim is a generator plus refuters. Withdrawing it removes standing to compose over it, not a term from the record. Each domain verdict can be rewritten independently, and no primitive has to be withdrawn.
- **reversed by:** (1) a clean partition of reuse and novel composition across three fields (R1); (2) a composition from an absent atom with no differing frame, confirmed by provenance (R2); (3) a behavioural source discriminator working across low-overlap frames without provenance or instrument change (R3); (4) an agent-only, contact-free improvement that transfers to a novel habitat (R4); (5) a closed-frame proof that settles attribution for all systems (R5). A ground reading on a named system would promote that slot from `gap`. Agreement or prestige is not such a reading.

## Sources

- [Figures text with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Canonical figures README (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [On the Measure of Intelligence, Chollet 2019](https://arxiv.org/abs/1911.01547)
- [Generalization without systematicity, Lake and Baroni 2018](https://arxiv.org/abs/1711.00350)
- [GSM-Symbolic, Mirzadeh et al. 2024](https://arxiv.org/abs/2410.05229)
- [The Illusion of Thinking, Shojaee et al. 2025](https://arxiv.org/abs/2506.06941)
- [Analogy](https://en.wikipedia.org/wiki/Analogy)
- [Fluid and crystallized intelligence](https://en.wikipedia.org/wiki/Fluid_and_crystallized_intelligence)
- [Animal cognition](https://en.wikipedia.org/wiki/Animal_cognition)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
