# WATSON answer: what determines whether redundancy improves reliability or wastes capacity

**Mode: `specified` on the deciding relation, `general` on the structural shape. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (the Recursive Self-Improvement Trap: LLM outputs are simulacra and the genuinely testable output would need to be derived from the real architecture or working the formula by hand) it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what decides the sign of adding a redundant signal when capacity is scarce. Option A: treat repetition as reliability by definition, so more copies are better. Option B: treat the gain as conditional on independence of the repeated signals and on a capacity bargain. What each leads to: A spends budget on correlated copies that add agreement without evidence, and mistakes a convention for a verdict; B sends a checkable shape, states the two currencies, records the refuters, and leaves the number to a ground. The residual is the per-slot gap between predicted and observed reliability gain, not an average.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (the residual).** Per repetition slot, the gap between the reliability predicted from adding a copy and the reliability observed. Arity: two conditions, separate draws versus shared cause. Symmetry: copies are interchangeable under independent noise, distinct when a shared cause binds them. Scale: bit coding, component redundancy, committee judgment. Fig 1 :19 says R is indexed per slot; Fig 1 :22 says aggregation hides the live slot.
- **Domain 1, coding and channel.** Actors: source, encoder, channel, noise, decoder, receiver. Currency: bits, capacity, error probability. Anchor: measured error rate at the receiver. Union condition: the noise structure decides whether redundancy helps.
- **Domain 2, reliability engineering.** Actors: redundant components, common cause, diversity, separation. Currency: failure probability, beta factor. Anchor: observed failure rate in service. Union condition: coupled failure is a separate binding condition.
- **Domain 3, collective judgment.** Actors: voters, experts, sensors, models. Currency: correctness probability, effective sample size. Anchor: the state of the world. Union condition: correlated errors cap the effective count.
- **Domain 4, framework-internal.** Actors: frames, closures, atoms, evidence, ground. Currency: agreement versus evidence; bits versus actions. Anchor: the ground, which does not update. Partition question: which compositions cross kinds; union question: where two closures have surplus.
- **Partition or union.** D1 and D2 are a union: independent channel noise and a common-cause component failure can coexist. D3 and D4 overlap in the word independence but keep different currencies, so they stay separate loops. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- **Order by dependency.** Describe the residual per slot; establish whether the copies are independent; only then run the capacity bargain; then let the ground settle. Fig 3 :20: "The chain is ordered by dependency, not by importance."

Strain test applied: the first pass tried to make Fig 13 :37 govern the whole question. That line governs a generating set, not a receiver; re-census moved it to D4 and promoted Fig 8 :47-49. No strain remains.

## TETHER (primary, verbatim)

Cited against local `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 8 :47 "Independence is one quantity read twice." -> the deciding quantity is not the count of copies but their evidence overlap. **D4, triangulated.**
- Fig 8 :48-49 "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names." -> correlated copies add agreement, not evidence; independent copies can add a surplus. **D4, triangulated.**
- Fig 13 :36-37 "If two members drew on the same underlying fact, their agreement would carry no information, and one of them would be redundant rather than minimal." -> the framework's own word for a copy of one fact is redundant. **D4, single-source for this exact wording, corroborated by Fig 8.**
- Fig 2 :31-32 "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something." -> two instruments, not two readers of one report. **D3 and D4, triangulated.**
- Fig 6 :53-54 "searchers drawing on the same evidence are one searcher wearing many names. Independence decides whether more of them buy more search or only more spelling, which makes it the parameter rather than a caveat." -> independence is the parameter that flips the sign of added copies. **D3, triangulated.**
- Fig 7 :13 "agreement compounds, evidence does not" -> a mirror chain moves without progress. **D3, single-source.**
- Fig 10 :80-81 "Frames whose independence is renewed by separate experience can be maintained; frames whose correlation is fixed at origin can only be rotated, because no amount of use makes them less alike and replacement is the only refresh." -> copies from one origin cannot be refreshed by more use. **D3, triangulated.**
- Fig 5 :42 "The acceptance test is a bargain, not a threshold." -> licensing a copy is a comparison, not a fixed quota. **D1 and D4, triangulated.**
- Fig 5 :43 "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before." -> the capacity bargain. **D4, triangulated.**
- Fig 12 :125-126 "A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds." -> capacity is bits; checking is actions; no single score. **D1 and D4, triangulated.**
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> agreement cannot substitute for a ground. **D3 and D4, triangulated.**
- Fig 2 :44 "The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning." -> the figures explicitly bind themselves to the statistics of correlation. **D3, single-source.**
- Fig 3 :20 "The chain is ordered by dependency, not by importance." -> independence first, bargain second. **Methodological, single-source.**
- Fig 13 :134 "Unreachable is a verdict here, not a silence," -> the numeric remainder is a gap, not a silence. **Methodological, triangulated with Fig 9 :32.**

Triangulation summary: the independence verdict is triangulated across Fig 8, Fig 2, Fig 6, Fig 10 and Fig 13, which are different jobs with low overlap. The bargain verdict is triangulated across Fig 5 and Fig 12 (term licensing versus composition price). The convention/verdict split rests on Fig 2 plus the Seat Map (two documents). The numeric threshold is a **gap**: no figure line gives a capacity, a code rate, an error exponent or a critical correlation. Those are imports with source gates and shadow tests, never figure-derived results.

## WORLD (secondary sources read)

World sources corroborate only. Field, author, venue, year, quote, prediction and status for each.

- **Information theory / coding.** Claude E. Shannon, *A Mathematical Theory of Communication*, Bell System Technical Journal 27 (1948), full text opened via archive.org: "The redundancy must be introduced in the proper way to combat the particular noise structure involved." Predicts that redundancy is matched to noise structure, not universally good; corroborates the shape. Overlap: low with the figures, except Fig 5 :45 names Shannon coding as borrowed machinery.
- **Information theory / source property.** Shannon (1948), same source: "One minus the relative entropy is the redundancy. The redundancy of ordinary English ... is roughly 50%." Predicts a measured source property, not a design rule; corroborates the D1/D4 distinction. Overlap: same paper, so one witness with the row above, not two.
- **Reliability engineering.** ECSS-Q-HB-30-02A digital handbook, *Modelling of common cause failure*, v0.4.5 (2026 draft, opened 2026-11-23): "The use of identical components in redundant system architecture bears the risk that an error that has been introduced during the development, manufacturing or installation leads to common cause failure of multiple redundant components." Predicts that identical copies share a cause and that diversity plus separation is the remedy; corroborates the independence verdict. Overlap: low with information theory.
- **Reliability engineering / quantitative.** Same ECSS handbook: Q_S = Q_I² + Q_C. Predicts a coupled term that adding copies cannot reduce; corroborates the two-currency and coupling claims. Overlap: same handbook as the row above.
- **Reliability engineering / instance.** Harry W. Jones, *Common Cause Failures and Ultra Reliability*, NASA Ames, conference paper 2012 (NTRS record opened 2026-11-23): "Common cause failures are either common event failures, where the cause is a single external event, or common mode failures, where two systems fail in the same way for the same reason." Predicts two distinct ways copies fail together; corroborates. Overlap: same engineering pool as the ECSS handbook; one witness.
- **Social epistemology / collective judgment.** *Jury Theorems*, Stanford Encyclopedia of Philosophy, first published 2021, opened 2026-11-23: "Causal independence ... by no means makes votes probabilistically independent, since common causes create correlations." Predicts that secret ballots can still be correlated; corroborates the shared-pool analysis. Overlap: low with engineering.
- **Social epistemology / diversity.** Same SEP entry, section 3.3: "If diversity is small, i.e., individuals reason similarly, use similar evidence, etc., then judgments are highly correlated. Without any diversity, judgments coincide." Predicts that low diversity makes added voters redundant; corroborates. Overlap: same entry as above.
- **Machine learning / measurement.** Santiago Morante and Marta Romero Garcia-Rubio, *Correlation limits the reliability of ensemble decision making with large language models*, Discover Informatics vol 1 art 35, 2026, opened 2026-11-23: "a hundred agents correlated at 0.3 have the variance of about three independent ones." Predicts a ceiling on effective copies; corroborates Fig 6 :53-54. Overlap: low with the engineering sources, medium with SEP (both use Condorcet).
- **Machine learning / cost of copies.** Same paper: "most of the ensemble adds cost and apparent agreement rather than independent evidence." Predicts wasted capacity in correlated ensembles; corroborates. Overlap: same paper.
- **Social psychology / qualified conflict.** Richard P. Larrick, Albert E. Mannes and Jack B. Soll, *The Social Psychology of the Wisdom of Crowds*, Behavioral Decision Analysis vol 350, 2024 (original 2011), opened 2026-11-23: "discussion not only transmits error between individuals but also knowledge. There is a 'horse race' between the two." Predicts that some sharing is useful. This **appears to conflict** with a blanket "sharing is bad" reading, so the conflict rule sent the census back: sharing that brings new contact with the ground is Fig 8's import; sharing that recycles one pool is Fig 7's mirror chain. Both are figure cases. After re-census this **corroborates** the refined verdict. Overlap: low.
- **Framework author / agent systems.** Isaiah N, *How a Society of Agents Would Work*, 2026-10-22, opened 2026-11-23: "Ten copies watching the same thing are one opinion said ten times." Predicts the one-frame-many-names result; corroborates Fig 8. Overlap: high (framework author), so weak independent corroboration.
- **Framework author / search.** Isaiah N, *The Library of Babel: Locating The Book of Books*, 2026-10-02: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Predicts a shape, not a threshold; corroborates the canonical limit. Overlap: high.
- **Framework author / source discrimination.** Isaiah N, *The Hard Problem is About Source*, 2026-08-28: "If several paths create the same behavior, then behavior is a projection with lossy information." Predicts that agreement cannot identify the source of copies; corroborates the need for a discriminator. Overlap: high.
- **Framework author / scale limit.** Isaiah N, *They're Scanning Books When They Should Be Studying Nature*, 2026-09-06: "The data wall is the point at which the next genius is redundant." Predicts diminishing returns from more of one kind; corroborates. Overlap: high.
- **Framework author / self-validation.** Isaiah N, *The Recursive Self-Improvement Trap*, 2026-11-19: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Predicts that this WATSON run cannot settle its own claim; corroborates the simulated status. Overlap: high.

No world source conflicts with the figure verdict after re-census. The eight essays share an author and an evidence pool with the figures; their agreement is expected and carries little independent weight. The engineering, information-theory and social-epistemology sources are lower overlap and carry more weight, but none supplies the figure verdict, which comes from the figures alone.

## VERDICT (from the figures)

The sign of the redundancy gain is set by the evidence overlap of the repeated signals, and the design is licensed by a capacity bargain in two currencies. Copies that share one cause or one pool add agreement while evidence does not move; independent copies can add a surplus that neither had alone. For a convention this overlap is the product, for a verdict it is the failure. The copy is worth its cost only when stating it plus the error it leaves costs less than the error before it, and the bits spent and the actions spent to check it do not add. This is `specified`, ungrounded, candidate. The exact capacity, code rate, error exponent and critical correlation are a **gap** in the figures and must be imported with provenance, not derived here.

- **cost if wrong:** bounded and locatable. The packet states its mode, sources and refuters before the conclusion, so an error is findable. The real cost is spending scarce capacity on correlated copies while calling the result a verdict. Fig 2 :42 prices the remedy: "Buy independence in proportion to the cost of being wrong."
- **undoable:** yes. A redundant design can be replaced with a diverse one without withdrawing the shape claim. The coupled term Q_C and the coherence cost are removable by separation and diversity. No primitive of the framework has to be withdrawn.
- **reversed by:** a ground reading, not agreement. A channel experiment that varies noise correlation at fixed rate; a common-cause audit that separates Q_I from Q_C; an effective-sample-size measurement with judges ranged separately against one fixed ground; a derivation showing that Fig 8 :47-49 governs conventions only; or a demonstration that bits and actions are commensurable. Until one fires, the verdict stands as candidate.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [The figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [A Mathematical Theory of Communication, Shannon 1948 (full text)](https://archive.org/stream/in.ernet.dli.2015.503815/2015.503815.The-Mathematical_djvu.txt)
- [Jury Theorems, Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/jury-theorems/)
- [Modelling of common cause failure, ECSS reliability digital handbook](https://handbook.reliability.space/en/latest/system/handbook/reliability_prediction/modelling_common_cause_failure.html)
- [Common Cause Failures and Ultra Reliability, NASA NTRS](https://ntrs.nasa.gov/citations/20160005837)
- [Correlation limits the reliability of ensemble decision making, Discover Informatics](https://link.springer.com/article/10.1007/s44564-026-00040-z)
- [The Social Psychology of the Wisdom of Crowds, Springer](https://link.springer.com/chapter/10.1007/978-3-031-44424-1_7)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge: Why Context, Subtext, and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
