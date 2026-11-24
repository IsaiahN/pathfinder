# Public links and distribution

Every link below was opened on 2026-11-23 unless marked otherwise. Links that failed to fetch are named, not hidden. All world sources in this file are secondary corroboration. The figures decide.

## 1. Framework links actually fetched

| what | URL | verified content |
|---|---|---|
| Figures text with line numbers (local) | `local: FRAMEWORK/reference/03-FIGURES_TEXT.md` | reopened this session; 13 figures plus Operators and Symbols tables; all `Fig N :line` citations in this folder come from it |
| Canonical usage rule (local) | `local: FRAMEWORK/reference/FIGURES_README_canonical.md` | *"the quotes are the authority, not this summary"*; *"Indiscernibility is not identity"*; *"what a missing thing would have to look like (a shape, not a name)"* |
| Canonical usage rule (public) | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | fetched 2026-11-23; 90 lines; same text, public on branch `general-agent`; confirms citation form `Fig N :line` and the no-final-room limit |
| Eight-step loop (local) | `local: FRAMEWORK/figures/THE_FORMULA.md` | mode rule, promotion rule, step 7 SEARCHED / INWARD / OUTWARD, Direction discipline |
| Cognitive Science Society | https://www.cognitivesciencesociety.org/ | fetched 2026-11-23; public submissions route, public contact form, official journals |
| Journal of Artificial Intelligence Research | https://www.jair.org/index.php/jair | fetched 2026-11-23; scope includes knowledge representation, automated reasoning, nonmonotonic reasoning; public submission route |
| Memory & Cognition (Springer) | https://link.springer.com/journal/13421 | fetched 2026-11-23; explicit call for work on *"cognition in context"* and a special issue on rethinking the episodic/semantic distinction |

**Fetch failures, recorded honestly.** `https://www.psychonomics.org/` and `https://vldb.org/` returned transport errors on 2026-11-23. They remain in `03_public_contact_points.csv` flagged as unverified this session. Nothing was claimed from them.

## 2. Wider literature actually fetched, and what it bears on the question

These are low-overlap with the framework: different authors, different evidence pools. Their agreement with the figure verdict is corroboration, not a second witness where they share a pool among themselves.

### Human cognition and memory (one overlapping pool)

- **Episodic memory** (Wikipedia, 2026, https://en.wikipedia.org/wiki/Episodic_memory): *"They are subject to rapid forgetting"* appears as property 7 of episodic recollection. Semantic memory is described as *"a structured record of facts, concepts, and skills that we have acquired."* The article records Tulving's 1972 distinction between *"knowing is factual recollection (semantic) whereas remembering is a feeling that is located in the past (episodic)."* Predicts: a class of facts exists whose certificate is the occasion that produced them, not their content. Corroborates F2.
- **Semantic memory** (Wikipedia, 2026, https://en.wikipedia.org/wiki/Semantic_memory): *"what is stored in semantic memory is the 'gist' of experience, an abstract structure that applies to a wide variety of experiential objects."* Also: *"researchers speculate that semantic memory captures the stable aspects of our personality while episodes of illness may have a more episodic nature."* Predicts: stable knowledge is the abstraction that survives across occasions, not the record of one. Corroborates F2 and F4 almost verbatim.
- **Context-dependent memory** (Wikipedia, 2026, https://en.wikipedia.org/wiki/Context-dependent_memory): *"context-dependent memory is the improved recall of specific episodes or information when the context present at encoding and retrieval are the same."* The Godden and Baddeley diving study: *"changing the context between encoding and retrieval reduced the divers' ability to recall learned words."* Predicts: a term that only works in its encoding context is a context-specific assumption, and the discriminator is a context swap. Corroborates F6 and the closure test. The *multiple learning context technique* is the engineering version of F5: present material in multiple contexts so no single cue dominates.

Overlap declared: these three pages are one evidence pool (same encyclopedia, overlapping references to Tulving, Godden and Baddeley). They count as one witness, not three.

### Animal behaviour (independent pool)

- **Episodic-like memory** (Wikipedia, 2026, https://en.wikipedia.org/wiki/Episodic-like_memory): Clayton and Dickinson's scrub jays *"remember where they cache different types of food, and discriminately recover them depending on the perishability of the item and the amount of time that has passed since caching."* In the flexibility experiment the jays could *"update their information after the time of encoding."* Predicts: a non-linguistic system already distinguishes a stable resource from a temporary one by re-testing against the world, and updates a held fact when the ground changes. Corroborates F3 and F4 from a field with no contact with the framework.

### AI engineering and database engineering (two further independent pools)

- **Reason maintenance / truth maintenance system** (Wikipedia, 2026, https://en.wikipedia.org/wiki/Reason_maintenance): *"Reason maintenance distinguishes between base facts, which can later be rejected, and derived facts."* Also *"A premise is a fundamental belief which is assumed to be true. They do not need justifications."* And on multi-context systems: *"This is achieved by tagging each fact or deduction with its logical history."* Predicts: exactly the provenance-and-refusal architecture of F6 and F10. This is an implemented engineering instance, arrived at independently (Doyle 1978, de Kleer 1986).
- **Temporal database** (Wikipedia, 2026, https://en.wikipedia.org/wiki/Temporal_database): *"Valid time is the time period during or event time at which a fact is true in the real world."* *"Transaction time is the time at which a fact was recorded in the database."* In a transaction time table *"records are never deleted. Only new records can be inserted."* Bitemporal modelling separates historical queries from rollback queries. Predicts: a system that needs to distinguish "what was true" from "what we believed" must keep two time axes and never delete. Corroborates F10 and F6 from a field with no contact with the framework.

**Conflict check.** None of these sources conflicts with the figure verdict. One of them sharpens it: the episodic/semantic literature reports that the distinction is *"may not be as distinct as once thought"* (Springer journal update), which is precisely why this solution refuses a single partition and runs four domains (F1). A conflict would have sent us back to the census; instead the source pool supports the union reading.

## 3. Framework essays fetched (high overlap, declared)

- **The Library of Babel: Locating The Book of Books** (Isaiah N, Substack, 2026-10-02, https://adventuresinml.substack.com/p/the-library-of-babel-locating-the): *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Also the bundle warning quoted in F1. Corroborates the shape-not-a-number limit.
- **Decoding Tacit Knowledge: Why Context, Subtext, and Pretext Matter** (Isaiah N, Substack, 2026-11-10, https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context): *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* Also *"The ground is whatever settles a question regardless of what any frame thinks"* and the correction-size instrument quoted in F4. Directly about context-specific assumptions.
- **The Recursive Self-Improvement Trap** (Isaiah N, Substack, 2026-11-19, https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap): *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This is the source of this folder's simulated standing. Also the prestige/action rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action."*

All three share the framework author with the figures, so their agreement is expected and carries little independent weight. They are recorded in `10_source_ledger.csv` with overlap = high.

## 4. Distribution: offer, do not push

Figure-grounded rules:

- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Sending a catalogue of which facts were stable last week is a recording. Sending the four-instrument discriminator with its refuter is a generator.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* Seat 4 must not hold the interiors. A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the four-instrument shape were right *before* giving them the source links.
- **Fig 2 :35** *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A list selected for likely agreement is a convention, not corroboration.
- **Fig 9 :60** *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* The contact-cost estimate decides how to approach someone, never whether their answer counts.

**Recommended order in a reply:** (1) the residual in effect terms and the four-instrument shape; (2) the pre-registered refuter, and the question "what would you count as a failure here?"; (3) record their verdict; (4) only then the three source links, with the note that the figures, not the summary, are the authority. Later agreement is never pooled as corroboration (Fig 2 :40).

## 5. Two-stage offer, restated

1. **Stage 1.** Send the residual and the shape claim with its refuter. Ask for a failure. No framework, no links, no request for trust or agreement. The RSI trap essay's warning applies: a simulated derivation *"cannot validate itself"* and needs an external ground.
2. **Stage 2, opt-in only.** If they are curious and have already recorded a verdict, offer the three source links. Fig 10 :52 *"Bring a characterised residual, never the source."*
3. **Stage 3.** Offer the formula as a method, with the instruction that each user write their own refuter and state their own mode. Fig 4 :22 permits methods to cross. The formula is a generator, so giving it away does not give away an answer.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The refuters in `08_expert_verification_packet.md` are the test. If one fires, stop and retract rather than recruit agreement.

## 6. Hosting and sending

Nothing in this folder is sent by this agent. Hosting the packet on an opt-in download page and sending the link is yours to do. Prefer a route that lets a recipient decline contact. A public journal or society submission portal is closer to the figure's rule than an attachment pushed to a list. The two venues whose fetch failed this session must not be used until re-verified.
