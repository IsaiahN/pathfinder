# WATSON answer: what evidence can reveal uncredited or erased contributions?

**Mode: `specified` on the claims, `general` on the shape, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output can "simulate an approximate answer/output" while "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No historical case was settled in this run.

## QUESTION

Decide, in effect terms, what kind of evidence could still name the contributor to work whose attribution was removed or reassigned. Option A: treat the published artefact and its byline as sufficient. Option B: require lineage material held in a different closure, with a source gate and an independent second line. Option C: report `unreachable` where no trace survives. What each leads to: A commits a source-discrimination error because several routes can produce the same artefact; B yields a checkable attribution with a refuter; C gives an honest stop rather than a manufactured credit. Answer format required: a shape, not a list of names.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and dependency order.

- **R (the residual).** A contribution was made but its attribution is missing or reassigned. Arity: per contribution, indexed like a slot, never aggregated into a field-wide score. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Symmetry: the artefact is invariant under relabelling of its producer, the route is not. Scale: bench trace, custody chain, field canon.
- **D1 Inscription.** Actors: papers, photographs, notebooks, raw data, logs, drafts. Currency: dated traces of a route. Anchor: the dated material record. Union, because artefact is not route.
- **D2 Credit and adjudication.** Actors: authors, supervisors, committees, journals, prizes. Currency: reputation converted into credit. Anchor: who actually took the route, but this anchor updates on reputation, which is Fig 2's mutual-update collapse. Partition by who did which part.
- **D3 Custody and archive.** Actors: archivists, fonds, catalogues, finding aids. Currency: continuity of custody. Anchor: the fonds with a recorded chain. Partition by provenance.
- **D4 Verification and historiography.** Actors: historians, forensic analysts, outside frames. Currency: independence between lines of evidence. Anchor: the surviving trace plus a refuter. Union if the archives overlap. Agreement in one archive is one pool.
- **Order by dependency.** Refuse the byline's standing where the anchor is corrupted (Formula step 2), enumerate the habitat before choosing an archive (Fig 11 :43), test a trace in a different closure (Fig 2 :31), then attribute. Describe the residual before choosing a frame (Fig 9 :27-28).

Strain test applied: Fig 2 requires an anchor that does not change its answer because of what any frame thinks. D2's credit anchor plainly does. That is not a strain on Fig 2, it is the collapse Fig 2 names, so D2 is re-censused as a failure to be diagnosed rather than a neutral referee.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Every quotation below is verbatim from the extract. Status is stated per domain.

**D1 Inscription (triangulated).**
- Fig 13 :129 "The space has no last route and every turn begins from a remainder the last one left, so the order is not recoverable from the artefact. It is recoverable from the lineage." -> a published result does not carry its route.
- Fig 13 :130 "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term." -> lineage is not commentary on the work, it is part of what the work is.
- Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> same published ingredients can be different contributions. Low overlap between the substrate figure and the bond figure, so triangulated.

**D2 Credit and adjudication (triangulated on the failure; single-source on corrigibility).**
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> reputation-driven credit is a collapse of the anchor.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> a famous-name consensus is not a verdict.
- Fig 10 :65 "Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record." -> the credit ruling is corrigible. This is single-source within the figures (Figure 10 only), so marked `single-source`.

**D3 Custody and archive (single-source within the figures).**
- Fig 6 :12 "source gate: provenance" -> an imported contribution is legitimate only if its source is recorded; erasure strips that gate.
- Fig 11 :43 "The habitat is enumerated, never composed." -> enumerate everything in contact with the contribution before choosing an archive.
- Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." -> second-order contact matters. Both lines are Figure 11, so `single-source` within the figures; the archival-science world source is secondary corroboration from a different field.

**D4 Verification and historiography (triangulated).**
- Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." -> two readers of one archive are one witness.
- Fig 8 :48 "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus." -> agreement from a shared pool has no surplus.
- Fig 7 :35 "A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes." -> many agreeing historians are not corroboration. Three figures, low overlap, so triangulated.

**Cross-domain verdict limits.**
- Fig 8 :50-51 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" -> contents cannot settle attribution.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> no trace found is `unreachable`, not absence.
- Fig 13 :134 "So the system can report that it lacks something rather than producing an answer anyway." -> unreachable is a verdict, not a silence.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> the method returns a shape, not a name.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> a list of famous cases filters the budget, it does not witness the claim.

**Strains.** None hidden. One scope narrowing is recorded: "shape, not a name" governs a missing primitive, not a class of evidence already held in the historian's library (`06_isomers_and_order.md` Q1). One live open item is not a figure strain but a ground question: whether a particular case has a surviving trace.

## WORLD (secondary sources read, 2026-11-23)

Figures decide; world sources corroborate and never overrule. Each entry gives field, author and venue, a quote from the page actually opened, the prediction here, and the relation to the figure verdict.

- **Archival science / information science.** Wikipedia contributors, "Provenance", Wikipedia, accessed 2026-11-23. Quote: "establishing provenance is essentially a matter of documentation." Predicts that recovered attribution comes from documentation chains, not from re-reading the artefact. Corroborates F1 and F4. Overlap: distinct field, low overlap with the figures.
- **Cognitive science.** Wikipedia contributors, "Source-monitoring error", Wikipedia, accessed 2026-11-23. Quote: "A source-monitoring error is a type of memory error where the source of a memory is incorrectly attributed to some specific recollected experience." Predicts that participant testimony has a documented failure mode and is not a privileged anchor. Corroborates the D4 independence requirement. Overlap: low.
- **Sociology of science.** Wikipedia contributors, "Matthew effect", Wikipedia, accessed 2026-11-23. Quote: "eminent scientists will often get more credit than a comparatively unknown researcher, even if their work is similar." Predicts that the credit anchor updates on reputation. Corroborates D2's collapse. Overlap: shared pool with the Matilda effect source (Merton / Rossiter tradition), so these two count as one witness.
- **History and sociology of science.** Wikipedia contributors, "Matilda effect", Wikipedia, accessed 2026-11-23. Quote: "a bias against acknowledging the achievements of women scientists and inventors, whose work is consequently attributed to their male colleagues." Predicts systematic, named erasure. Corroborates D2; same pool as the previous source.
- **Computational linguistics / engineering.** Wikipedia contributors, "Stylometry", Wikipedia, accessed 2026-11-23. Quote: "Stylometry is often used to attribute authorship to anonymous or disputed documents." Predicts that internal statistical traces can carry authorship information a byline does not, an INWARD instrument case. Corroborates F5. Overlap: low.
- **Science journalism / history of science.** Jennifer Nalewicki, Live Science, 2023. Quote: "dug into the archives at the University of Cambridge's Churchill College and found an unpublished article for Time magazine", plus "The second piece of evidence was a letter written by Pauline Cowan". Predicts that a real reattribution rests on dated documents held outside the crediting institution. Corroborates F4 and D3. Overlap: high with the next two sources (same Comfort and Cobb archival cluster), so one witness.
- **History of science case record.** Wikipedia contributors, "Rosalind Franklin", Wikipedia, accessed 2026-11-23. Quote: "This MRC report contained data from the King's group, including some of Franklin's and Gosling's work". Predicts that the decisive material was an internal report, not the published byline. Corroborates F4. Overlap: high with Live Science and Science History Institute.
- **Institutional archive.** Science History Institute, homepage, 2026. Quote: "New Research Challenges Misconceptions about Rosalind Franklin's Famed 'Photo 51'" and "uncovers the significance of her previously captured Photo 49". Predicts that INWARD re-reading of a different surviving trace revises a settled account. Corroborates F5. Overlap: high with the Franklin cluster.
- **Metatheory / canonical usage.** Isaiah N, `figures/README.md`, general-agent branch, GitHub, 2026. Quote: "what a missing thing would have to look like (a shape, not a name)". Predicts a refused name and a recorded stop. Corroborates, but high overlap (framework author), so weak corroboration.

**Essays by the framework author, read this session (all 2026, Adventures in Machine Learning / Substack).** These corroborate the figure reading but share its author and evidence pool, so their agreement carries little independent weight.

- **Search / shape.** Isaiah N, "The Library of Babel: Locating The Book of Books". Quote: "You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Predicts a narrowed kind of evidence, not a filled name. Corroborates.
- **Outputs versus generators.** Isaiah N, "They're Scanning Books When They Should Be Studying Nature". Quote: "A pile of human reasoning's outputs is not an engine." Predicts that a publication record cannot yield the contributor. Corroborates F1.
- **Instrument discrimination.** Isaiah N, "The Hard Problem is About Source". Quote: "the instrument is speaking only about what it measured, it cannot comment on the source." Predicts the metamerism error of naming a source from a reading. Corroborates F1 and F5.
- **Provenance and horizons.** Isaiah N, "How Intelligence Actually Works". Quote: "The tool only works because a trace existed, and not because a better tool was created." Predicts that instruments help only where a trace survives. Corroborates F5 and the stop.
- **Validation and prestige.** Isaiah N, "The Recursive Self-Improvement Trap". Quote: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Predicts that a famous-name list is not evidence. Corroborates F3 and Fig 9 :60. Also supplies the simulation warning in the header.
- **Tacit knowledge and contact.** Isaiah N, "Decoding Tacit Knowledge". Quote: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Predicts shape-first outreach. Corroborates Fig 9 :27-28.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The main overlap hazards are declared: the three Franklin pages are one archival witness, the two effect pages are one sociology witness, and the essays share the framework author with the figures.

## VERDICT (from the figures)

The shape survives; any specific attribution claim is out of scope until a ground reading is done. A published artefact does not determine its producer, because several routes can print the same result (Fig 13 :129-130, Fig 8 :50-51). The evidence that can reveal a contribution is lineage material held in a closure different from the one that assigned credit, tested against a second independent line (Fig 6 :12, Fig 2 :31, Fig 7 :35). The credit process itself is a live collapse of the anchor (Fig 2 :29), and its rulings are corrigible however clean their provenance (Fig 10 :65). Where no trace is found the verdict is `unreachable`, not absence (Fig 8 :39, Fig 13 :134). This is `specified` and ungrounded. The verdict is triangulated for D1 and D4, single-source for the archive and corrigibility claims, and `gap` for any claim that a particular named case has been settled.

- **cost if wrong:** bounded and locatable. The packet states mode, refuters and provenance before the claim, so an error is findable rather than invisible. The real cost is spending an outside reader's independence by sending a gallery of restored names instead of a method and a refuter (Fig 4 :23: "upward: a method that can be reapplied. Never the recording of a particular success"). That cost is avoidable by leading with the shape claim and its refuter.
- **undoable:** yes. The shape and the method can be corrected without withdrawing the residual. A case-level claim, once made, can be superseded when a better trace is found, and no primitive has to be withdrawn. A well-provenanced ruling remains corrigible (Fig 10 :65), which is what makes the correction cheap.
- **reversed by:** a ground reading, not agreement. A dated trace with a recorded custody chain in a different closure would move a case from `specified` to `grounded`; an instrument that discriminates two surviving routes would name a contributor; a content-only discriminator between convergence and adoption would refute F2; two declared-independent lines shown to share one unrecorded original would reduce the witness count to one. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (verbatim, line numbered)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [THE SEAT MAP Field Guide, amended](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [Provenance](https://en.wikipedia.org/wiki/Provenance)
- [Source-monitoring error](https://en.wikipedia.org/wiki/Source-monitoring_error)
- [Matthew effect](https://en.wikipedia.org/wiki/Matthew_effect)
- [Matilda effect](https://en.wikipedia.org/wiki/Matilda_effect)
- [Stylometry](https://en.wikipedia.org/wiki/Stylometry)
- [Rosalind Franklin knew DNA was a helix before Watson and Crick, unpublished material reveals](https://www.livescience.com/health/genetics/rosalind-franklin-knew-dna-was-a-helix-before-watson-and-crick-unpublished-material-reveals)
- [Rosalind Franklin](https://en.wikipedia.org/wiki/Rosalind_Franklin)
- [Science History Institute](https://www.sciencehistory.org/)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
