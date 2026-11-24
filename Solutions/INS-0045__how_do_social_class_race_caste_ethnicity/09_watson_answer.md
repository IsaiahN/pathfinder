# WATSON answer, INS-0045

**Mode: `specified`, not `grounded`.** Figures are primary and decide. World sources are secondary, corroborate but never overrule, and a conflict returns the derivation to the domain census. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## QUESTION

How do social class, race, caste, ethnicity, or gender affect access to public authority and legal protection?

Restated as an effect: why does `R_s = |Γ(b,a) − o′|` stay small for some person/group slots and grow for others, when the institution's procedure predicts the same outcome for everyone who meets its published criteria? `R` is indexed per slot, never aggregated (Fig 1 :19). Anchor: the recorded distribution of outcomes for people, which is legitimate because the question is constitutively about people (Fig 2 :29, :36). The institution's own fairness account is not an anchor because *"They are frame-internal. A frame cannot score itself with a quantity it also produces"* (Fig 1 :27).

## DOMAIN CENSUS

Arity: an institutional library Γ, an action, an observation and a group slot, with a time index; at least four operands plus an ordering. Symmetry: not symmetric, the anchor does not update on the frame, and access and protection are threshold comparisons (Fig 12 :87). Scale: the slot is a person, but "authority" and "inequality" exist at population scale, so the residual is cross-scale (Fig 4 :20).

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Institutional procedure | officials, rules, Γ, routines | rulings, referrals, delays | recorded outcomes of the procedure | admitted |
| D2 Social habitat | groups by class, race, caste, ethnicity, gender; families, networks | resources, network position, friction exposure | the same outcome distribution, read per group | admitted |
| D3 Measurement channel | registers, complaint records, audits | contact with the ground | the ground, which persists while the channel does not | admitted |
| D4 Formal/legal convention | statutes, equal-protection rules, agency guidance | declared meaning, standing to claim | outcome distribution once the convention decides an outcome | admitted as convention |
| X1 Prejudice as free-floating attitude | an individual mind | self-report | none independent of D1 and D3 | not a domain yet |
| X2 Culture as sole cause | a group norm | custom | already inside D2 | absorbed |
| X3 The law is the answer | the statute | formal equality | already inside D4 | absorbed |

Union, not partition: D1 and D3 form one compound (contact maintained), D2 and D4 another (reach and claim standing), and their overlap is a compound with its own loop (Fig 9 :54–57). Dependency order: perception → vocabulary → objective → planning → learn and carry (Fig 3); only the first three links are forced by the residual line.

## TETHER (primary, verbatim, per domain, triangulated|single-source|gap)

**D1 Institutional procedure, status triangulated (Fig 1 and Fig 2, residual production vs ground).**

> *"The residual is indexed by object slot, not aggregated."* (Fig 1 :19)
> *"Aggregating across slots is how a live signal disappears into an average."* (Fig 1 :22)
> *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* (Fig 1 :27)
> *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35)

Reading: the outcome is read per group and against an anchor the institution cannot move. Mode `specified`. Refuter: an aggregate statistic that loses no group information, or a self-assessment that predicts recorded outcomes across offices.

**D2 Social habitat, status triangulated (Fig 11 and Fig 4, habitat vs membrane).**

> *"The habitat is enumerated, never composed."* (Fig 11 :43)
> *"No standing list of good actors survives a change of residual."* (Fig 11 :51)
> *"An actor’s valence is relative to the residual, not a property it carries."* (Fig 11 :49)
> *"Only the actors, the currency and the anchor change."* (Fig 4 :20)

Reading: relevant categories are read from the dispute, not fixed in advance; their valence flips with the residual. Mode `general` for enumeration, `specified` for this question. Refuter: a fixed category ranking that survives a change of dispute and institution.

**D3 Measurement channel, status triangulated (Fig 10 and Fig 1, decay vs slot indexing).**

> *"the ground does not decay, the channel does"* (Fig 10 :24)
> *"stale percepts, dropped transients, saturated metrics, pooled readings"* (Fig 10 :26)

Reading: missing, stale or pooled records are channel failures, distinguishable from procedure failures only by an instrument that reaches unrecorded cases. Mode `specified`. Refuter: a disparity that persists while the channel returns complete, current, unpooled readings for every group.

**D4 Formal/legal convention, status triangulated (Fig 10 and Fig 2, declaration vs anchor).**

> *"a declared meaning is not a grounded one"* (Fig 10 :18)
> *"a convention that decides an outcome has stopped being one"* (Fig 10 :47)
> *"An anchor is legitimate when the question is constitutively about it."* (Fig 2 :36)

Reading: an equal-protection rule is a convention until its application distributes protection; then it is graded against the outcome anchor. Mode `specified`. Refuter: a formally impartial rule producing a group-invariant distribution at every aggregation and under a different office.

**Union and method, status triangulated (Fig 9 and Fig 8).**

> *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* (Fig 9 :55)
> *"a case in two conditions is not a harder case of either."* (Fig 9 :57)
> *"describe it before you go looking, or any frame you pick will seem to fit"* (Fig 9 :27–28)
> *"Residual first, frame second."* (Fig 8 :53)

**Naming the specific lever, status `gap`.** No figure line governs which reform closes a given disparity. Fig 9 :32, *"you get a kind of thing, never the answer itself"*; Fig 13 :134, *"Unreachable is a verdict here, not a silence,"*; Fig 8 :39, *"So a search that finds nothing is never a proof of absence."* The missing thing is an instrument that discriminates procedure failure, habitat failure and channel failure, characterized in effect terms but not held.

## WORLD (secondary, each source read; field, author/venue/year, quote, prediction, corroborates|conflicts)

**Evidence pool A: law, sociology and fairness in machine learning (one witness, several chapters).**

- **Law, sociology, computer science.** Solon Barocas, Moritz Hardt and Arvind Narayanan, *Fairness and Machine Learning: Limitations and Opportunities*, MIT Press 2023, opened at https://fairmlbook.org/broader-view.html, 2026-11-23. Quote: *"Sociologists organize discrimination into three levels: structural, organizational, and interpersonal."* Prediction: levels overlap and must be enumerated. **Corroborates** D2 and the union reading. Same pool as the two chapters below, so one witness.
- **Law.** Same authors and book, chapter "Understanding United States anti-discrimination law", opened at https://fairmlbook.org/legal.html, 2026-11-23. Quote: *"the law is primarily concerned with the processes themselves"*; also *"Formal equality under the law primarily addresses direct discrimination and has relatively little effect on indirect discrimination"* (from the broader-view chapter). Prediction: formal impartiality is a process declaration. **Corroborates** D4. Conflict with Fig 10 :18 was checked: none, the law chapter's point is that process is the object of the doctrine, not that the doctrine is grounded.
- **Measurement and testing.** Same authors and book, chapter "Testing discrimination in practice", opened at https://fairmlbook.org/testing.html, 2026-11-23. Quote: *"there is no single test for fairness, that is, there is no single criterion that is both necessary and sufficient for fairness."* Prediction: no single lever. **Corroborates** F8 and the union. Same pool.

**Low-overlap fields (independent witnesses for the mechanism shape).**

- **Mathematics, statistics and philosophy of science.** Jan Sprenger and Naftali Weinberger, *Simpson's Paradox*, Stanford Encyclopedia of Philosophy, Summer 2026 edition, opened at https://plato.stanford.edu/entries/paradox-simpson/, 2026-11-23. Quote: *"Simpson's Paradox is a statistical phenomenon where an association between two variables in a population emerges, disappears or reverses when the population is divided into subpopulations."* Prediction: an aggregate reading can hide or invert a per-group reading. **Corroborates** Fig 1 :22 and Fig 9 :54. Low overlap with the figures; the entry itself notes application to discrimination data.
- **Mathematics and computer science.** Jon Kleinberg, Sendhil Mullainathan and Manish Raghavan, *Inherent Trade-Offs in the Fair Determination of Risk Scores*, ITCS 2017, opened at https://arxiv.org/abs/1609.05807, 2026-11-23. Quote: *"we prove that except in highly constrained special cases, there is no method that can satisfy these three conditions simultaneously."* Prediction: criteria conflict, so a compound needs separate loops. **Corroborates** the union reading. Low overlap with the framework; moderate overlap with the fairness pool above, so these two together are still counted as one fairness witness plus one mathematical witness, not three.
- **Human cognition.** Claude M. Steele and Joshua Aronson, *Stereotype threat and the intellectual test performance of African Americans*, Journal of Personality and Social Psychology 69(5):797-811, 1995; record and abstract opened at https://pubmed.ncbi.nlm.nih.gov/?term=Steele+Aronson+1995+stereotype+threat, 2026-11-23. Quote: *"Stereotype threat is being at risk of confirming, as self-characteristic, a negative stereotype about one's group."* Prediction: the same person reads differently when the habitat makes identity salient. **Corroborates** Fig 11 :40 at the individual stratum; not a group-level institutional measurement. A 2025 review in the same result set notes robustness and replication scrutiny, recorded as a caution.
- **Law and governance (tertiary index description).** Wikipedia entry *World Justice Project*, opened at https://en.wikipedia.org/wiki/Rule_of_Law_Index, 2026-11-23. Quote: *"The World Justice Project Rule of Law Index is a quantitative assessment tool designed to offer a detailed and comprehensive picture of the extent to which countries adhere to the rule of law in practice."* Prediction: an outcome index can serve as an anchor candidate. **Corroborates** D1 in principle, but the index is country-level and therefore a filter for budget, not a witness for a per-group verdict (Fig 9 :60). Tertiary source; the official index site was not fetched.

**Framework-internal essays, used for the canonical reading only, not as world witnesses.** Isaiah N, *The Recursive Self-Improvement Trap* (2026-11-19), *The Library of Babel* (2026-10-02), *The Hard Problem is About Source* (2026-08-28), all opened 2026-11-23. Key quotes: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*; *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*; *"the answer is unreached until a better instrument exists."* Overlap with the figures is maximal, same author. They carry no independent corroboration weight.

**Venue pages opened, no verdict bearing (silent on the question).** American Sociological Association, Law and Society Association, American Political Science Association, Institute for Research on Poverty. These establish public opt-in routes only. The IRP seminar listing *"The Costs of Bureaucratic Encounters in Foster Care"* is a practical pointer to the administrative-burden theme, not evidence about the residual.

## VERDICT (from the figures)

The figure-derived verdict: social class, race, caste, ethnicity and gender affect access **per group slot**, through a **union** of a maintained channel, a procedure ranged against an outcome the institution cannot move, and a habitat enumerated from the dispute. Formal impartiality is a convention until its application distributes protection. No category ordering, single cause or specific reform survives (Fig 1 :19, :22; Fig 2 :29, :35; Fig 9 :55, :57; Fig 10 :18, :24, :47; Fig 11 :43, :49, :51). Verdicts are kept separate per domain and never averaged. Mode `specified`. The world pool after de-duplication is three witnesses: law/sociology/fairness (one pool), mathematics (SEP plus the incompatibility theorem, treated as one formal witness), and human cognition. They corroborate the shape, not the group-level fact. Which lever closes a gap is a declared `gap`.

- **Cost if wrong:** a real group-level failure is diagnosed as a channel problem and sold a better form, or a channel failure is diagnosed as bias and sold a new rule. In outreach terms, an expert's twenty minutes would be spent refuting a shape that was never the right shape. Cost is real but bounded and largely reversible.
- **Undoable:** yes. No term is deleted if the claim fails. A refutation is added and the reach falls because *"What is recorded only grows. What is reachable is derived, and it can fall"* (Fig 6 :42). The shape and its five falsifiers are in a provenance trail so a later reader can locate the error (Fig 10 :62–64).
- **Reversed by:** any of the five pre-registered falsifiers: (1) aggregation loses no group information; (2) institution self-assessment predicts outcomes across offices; (3) a formally impartial rule yields a group-invariant distribution at every aggregation; (4) a fixed category ranking survives a change of residual; (5) one fairness criterion suffices for both authority access and legal protection. A source with a genuinely different evidence pool showing that per-group persistence is fully predicted by a single condition and no interaction would also reverse it.

## Sources (linked titles)

- [Simpson's Paradox, Sprenger and Weinberger, SEP 2026](https://plato.stanford.edu/entries/paradox-simpson/)
- [SEP author and citation record](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=paradox-simpson)
- [Inherent Trade-Offs in the Fair Determination of Risk Scores, Kleinberg, Mullainathan and Raghavan 2017](https://arxiv.org/abs/1609.05807)
- [Fairness and Machine Learning, Barocas, Hardt and Narayanan 2023](https://fairmlbook.org/)
- [A broader view of discrimination](https://fairmlbook.org/broader-view.html)
- [Understanding United States anti-discrimination law](https://fairmlbook.org/legal.html)
- [Testing discrimination in practice](https://fairmlbook.org/testing.html)
- [Stereotype threat, Steele and Aronson 1995, PubMed record](https://pubmed.ncbi.nlm.nih.gov/?term=Steele+Aronson+1995+stereotype+threat)
- [World Justice Project / Rule of Law Index entry](https://en.wikipedia.org/wiki/Rule_of_Law_Index)
- [The Recursive Self-Improvement Trap, Isaiah N 2026](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Library of Babel, Isaiah N 2026](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source, Isaiah N 2026](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [American Sociological Association](https://www.asanet.org/)
- [Law and Society Association](https://www.lawandsociety.org/)
- [American Political Science Association](https://apsanet.org/)
- [Institute for Research on Poverty](https://www.irp.wisc.edu/)
