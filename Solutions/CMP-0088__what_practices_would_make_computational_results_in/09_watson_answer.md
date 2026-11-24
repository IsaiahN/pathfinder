# WATSON answer: practices for reproducible computational results in complexity science

**Mode: `specified` on the practice set, `general` on the structural claims, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*, 2026-11-19: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the claim it reports on. No controlled comparison was run.

---

## QUESTION

Decide, in effect terms, what the Tether says about this question. Option A: treat reproducibility as a number that reappears when the same code, data and seed are re-run, and score work by how many such re-runs it passes. Option B: treat a reproducible result as a lineage whose atoms and bonds are recoverable, whose tolerance is declared before comparison, and which at least one frame with a different closure ranges against the same ground. What each leads to: A buys agreement inside one evidence pool and calls it a verdict, which Fig 2 disqualifies; B buys a checkable shape with five written refuters and an explicit stop at the limit of the instruments.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor.

- **R (the residual).** The gap between a published computational result and what a second party obtains after changing software, data or parameter choices. Arity: three overlapping conditions, so a union compound; a case in two conditions is not a harder case of either. Symmetry: ⋛, a threshold relation with a declared tolerance, not ≡ identity. Scale: one run, two frames, one channel between them.
- **Domain 1, original run.** Actors: code, data, parameters, seeds, RNG, hardware. Currency: `R` per slot against the dataset. Anchor: the named measurement the model was fit against. Nameable anchor: yes.
- **Domain 2, reproducing party.** Actors: a second team with a different closure, ideally independently built artifacts. Currency: agreement within tolerance versus residual. Anchor: the same ground, never agreement with Domain 1. Nameable anchor: yes.
- **Domain 3, transmission channel.** Actors: artifact, lineage record, abstracted method, maintainer seat. Currency: bits for description and actions for settlement. Anchor: the ground, which must be kept reachable through a decaying channel. Nameable anchor: yes.
- **Partition or union.** Domains 1 and 2 are two frames ranged against one anchor; inside R, software, data and parameters form a union with intersections. Domain 3 is the channel between them, not a fourth condition.
- **Order by dependency (Fig 3).** Perception, vocabulary, objective (the tolerance), planning, learn and carry. The break usually falls between vocabulary and objective, where there is no instrument.

No domain was admitted without a nameable anchor. Strain test: F5 and F6 are single-source within the figures and are reported as such, not smoothed into triangulated findings.

## TETHER (primary, verbatim)

Quoted against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Per-domain verdicts are kept separate and never averaged.

**D1, original run. Verdict: `specified`, triangulated.** Fig 13 :128 "Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available." Fig 13 :130 "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term." Fig 10 :63 "The residual it answered, the reasoning, the date, in a record the seats below can read." The artifact is a projection; the lineage is the proof. Low overlap between Fig 13's lineage argument and Fig 10's provenance rule.

**D2, reproducing party. Verdict: `general`, triangulated.** Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" Fig 2 :42 "Buy independence in proportion to the cost of being wrong." Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Fig 8 :49 "Two frames that overlap almost completely are one frame wearing two names." Four low-overlap routes to the same boundary.

**D3, transmission channel. Verdict: `specified`; round trip triangulated, habitat and currencies single-source.** Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Fig 4 :31-32 "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up." Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 6 :49 "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited." The habitat and two-currency findings are single-source within the figures; external sources corroborate operationally but do not turn them into triangulated figure findings.

**Cross-domain verdict on the bond. `specified`, triangulated.** Fig 4 :27 "The transform between scales loses information, and that is the point." The acceptance bond is ⋛ within tolerance, not ≡. The Operators table defines ⋛ as "a threshold relation between two quantities."

## WORLD (secondary, each source read)

World sources corroborate only; they never overrule a figure line. Five sources are independent of the framework author. Eight essays share the author's evidence pool and are marked as such.

- **Computational biology / reproducibility.** Sandve, Nekrutenko, Taylor and Hovig, "Ten Simple Rules for Reproducible Computational Research", PLOS Computational Biology 9(10), e1003285, 2013. Quote: "There will for a given analysis be an exponential number of possible combinations of software versions, parameter values, pre-processing steps, and so on, meaning that a failure to take notes may make exact reproduction essentially impossible." Predicts a lineage record and an action budget for parameter grids. Corroborates F1 and F6. Overlap with other world sources: moderate, shared reproducibility topic, distinct field and author group.
- **Data stewardship / informatics.** Wilkinson et al., "The FAIR Guiding Principles for scientific data management and stewardship", Scientific Data 3, 160018, 2016. Quote: "all components of the research process must be available to ensure transparency, reproducibility, and reusability." Predicts that workflows, not just data, must be archived. Corroborates F1 and F4. Overlap: moderate, shared reproducibility and data-stewardship topic.
- **Scientific computing education.** Wilson et al., "Good enough practices in scientific computing", PLOS Computational Biology 13(6), e1005510, 2017. Quote: "with organized data, documented steps, and the project structured for reproducibility". Predicts a runnable project structure and a future-self round trip. Corroborates F1 and F4. Overlap: moderate, same publisher as Sandve but different authors and aim.
- **Computer science / metrology.** ACM, "Artifact Review and Badging, version 1.1", 2020. Quote: "exact replication or reproduction of results is not required, or even expected. Instead, the results must be in agreement to within a tolerance deemed acceptable for experiments of the given type." Predicts ⋛ rather than ≡ and a three-way repeatability/reproducibility/replicability split. Corroborates F2, F3 and F6. Overlap: low with the framework, moderate with the other reproducibility sources.
- **Data science community.** The Turing Way Community, "The Turing Way", book.the-turing-way.org, 2024 onward. Quote: "to ensure that the projects they work on are easy to reproduce and reuse." Predicts that adoption is a habitat question. Corroborates F4. Overlap: moderate, same broad topic, community-authored.
- **Search / shape.** Isaiah N, "The Library of Babel: Locating The Book of Books", adventuresinml, 2026-10-02. Quote: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Predicts a narrowed shape, not a score. Corroborates. Overlap: high, framework author.
- **Validation / self-validation.** Isaiah N, "The Recursive Self-Improvement Trap", adventuresinml, 2026-11-19. Quote: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Predicts that this derivation cannot settle its own claim. Corroborates the simulated status. Overlap: high, framework author.
- **Human cognition / tacit knowledge.** Isaiah N, "Decoding Tacit Knowledge", adventuresinml, 2026-11-10. Quote: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Predicts the tolerance-before-comparison rule. Corroborates Fig 9. Overlap: high, framework author.
- **Multi-agent systems.** Isaiah N, "How a Society of Agents Would Work", adventuresinml, 2026-10-22. Quote: "A group is only worth having while its members stay different." Predicts the independence requirement. Corroborates F3. Overlap: high, framework author.
- **Perception / instrument discrimination.** Isaiah N, "The Hard Problem is About Source", adventuresinml, 2026-08-28. Quote: "If several paths create the same behavior, then behavior is a projection with lossy information". Predicts that a passing number does not identify its source. Corroborates F1. Overlap: high, framework author.
- **Representation / imports.** Isaiah N, "They're Scanning Books When They Should", adventuresinml, 2026-09-06. Quote: "Declaring the primitives does not make them neutral. It makes the choice visible". Predicts that the practice vocabulary is a visible choice. Corroborates the non-claim. Overlap: high, framework author.
- **Provenance / perception.** Isaiah N, "How Intelligence Actually Works", adventuresinml, 2026-09-16. Quote: "the lineage has to be kept even when the copy is perfect." Predicts lineage even under indiscernibility. Corroborates F1 and F2. Overlap: high, framework author.
- **Canonical architecture.** Isaiah N, "Arrival of the Fittest: The Tether Architecture", adventuresinml, 2026-08-19. Quote: "could never be verified if the solutions presented were not contrived to fit the formula." Predicts the simulated status and the need for a pre-registered refuter. Corroborates. Overlap: high, framework author.

No world source conflicts with a figure verdict; the conflict rule was not triggered. The five independent sources are one broad reproducibility literature with partial independence between author groups. The eight essays all share one evidence pool with the figures, so their agreement is expected and carries little independent weight.

## VERDICT (from the figures)

The shape survives; a single reproducibility score does not. A result is reproducible when its lineage is recoverable, its tolerance is declared before comparison, and a frame with a different closure ranges against the same ground. Same-stack re-runs are repeatability. A harness proves wiring, never capability. Description cost and settling cost are two readings held apart. The practices run in dependency order and the middle link, the declared comparison, is the one without an instrument. Two findings (habitat, currencies) are single-source within the figures and recorded as such. This is a `specified`, ungrounded, candidate result, not a measurement of which practices actually work best.

- **cost if wrong:** bounded and locatable. Every practice carries a written refuter and the five loss conditions are pre-registered, so an error is findable rather than invisible. The larger cost is spending the independence of outside readers by sending a checklist as if it were a verdict. Fig 2 :42 "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape claim and its refuters.
- **undoable:** yes. The refused item (a single summed score) is removable without touching the rest; the score-free practice set is already written in `07_the_tether_answer.md` and `08_expert_verification_packet.md`. A published practice can be superseded by a corrected one, and no figure has to be withdrawn. An archive that was built can be rebuilt; a refuter that fired stays in the record.
- **reversed by:** a ground reading, not agreement. A controlled comparison on a named model with a fixed dataset, declared tolerance and independent implementation that fires any of the five refuters would reverse the corresponding finding. Specifically: provenance decidable from the artifact alone; same-stack re-runs accepted as verdicts; bitwise identity achieved and correct across stacks; harness results transferring with no contact conditions; or a single summed number outperforming the two currencies held apart. Until one of these fires, the verdict stands as candidate.

## Sources

- [The figures, as text (local, with line numbers)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [WATSON 60: the figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Ten Simple Rules for Reproducible Computational Research](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003285)
- [Good enough practices in scientific computing](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005510)
- [The FAIR Guiding Principles for scientific data management and stewardship](https://www.nature.com/articles/sdata201618)
- [Artifact Review and Badging, version 1.1](https://www.acm.org/publications/policies/artifact-review-and-badging-current)
- [Software and Data Artifacts in the ACM Digital Library](https://www.acm.org/publications/artifacts)
- [The Turing Way](https://book.the-turing-way.org/)
- [Journal of Open Source Software](https://joss.theoj.org/)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [They're Scanning Books When They Should](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
