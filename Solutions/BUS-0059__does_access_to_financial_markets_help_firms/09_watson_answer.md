# WATSON answer: does access to financial markets help firms invest better or increase short-term pressure?

**Mode: `specified`, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run is checked for internal consistency against the figures. By its own rule, LLM output is a simulation and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* It cannot settle the question it reports on. No firm-level data were gathered.

## QUESTION

Decide, in effect terms, what the Tether says about the bundled question BUS-0059. Option A: market access dominates and improves investment. Option B: short-term pressure dominates and harms investment. What each leads to: A commits to capital import as the governing effect and predicts better per-project selection when capital was binding; B commits to metric feedback as the governing effect and predicts abandonment of positive-NPV projects when the quarterly number was binding. The admissible answer must name the ground, the unit, and which condition binds, and must not average the two.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency, anchor, partition or union, and order by dependency.

- **R (the residual).** The gap between what a firm's investment choices predict about long-run real value and what realised outcomes pay. Arity: two, so a **union compound** (Fig 9 :55), not one hard question. Symmetry: not symmetric, one condition concerns reach (capital, information), the other concerns the metric horizon. Scale: per-project slots at firm level, one aggregate number at market level (Fig 1 :19).
- **Domain 1, the firm's investment frame.** Actors: managers, project slots, capital, R and maintenance outlays. Currency: real returns over time. Anchor: realised long-run cash flows, a measurement that does not move with a forecast (Fig 2 :29). Question type: reach and import.
- **Domain 2, the financial market frame.** Actors: investors, analysts, price, quarterly target, transient institutional owners. Currency: price, EPS, capital allocation. Anchor: not the price for this question, because the question is constitutively about real investment (Fig 2 :36) and a price moves when firms act on it (Fig 2 :30). The price is an instrument. Question type: metric feedback.
- **Domain 3, the verification frame.** Actors: researchers and expert readers. Currency: evidence and agreement. Anchor: the ground, never agreement (Fig 2 :35). In this simulated run all three domains draw on one evidence pool, so independence is low and agreement is not corroboration.
- **Order by dependency:** refuse the price-as-ground term before measuring; describe the residual before choosing a frame (Fig 9 :27); settle each condition separately; compose only if a common currency exists.

Strain test applied: Fig 2 :29 lists a market among anchor examples, which strains against treating price as an instrument. Re-census resolves it by the constitutive-question clause (Fig 2 :36) and the invariance test (Fig 2 :30). The first reading is retracted in `01` and `05`, not erased.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the canonical extract.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> investment quality is per project. Governs D1 and D2's failure mode.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> a quarterly pool erases a live positive-NPV project.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> defines the required ground.
- Fig 2 :30 "If it moves when you push on it, it is not an anchor." -> price fails the anchor test here.
- Fig 2 :34 "everything drifts together, and the drift is coherent, which is why nobody notices" -> mutual update of manager and price is invisible from inside.
- Fig 2 :43 "a convention that decides an outcome has stopped being one" -> the earnings target becomes a substitute ground. Single-source: Fig 10 :47 states the same rule, so this is one witness, not two.
- Fig 6 :14 "the only operator that moves the wall" -> capital import genuinely expands reach. Governs D1.
- Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone" -> the benefit is conditional on the firm-and-market pair. Governs D1.
- Fig 11 :61 "Introduction is available; exclusion is not." -> listing cannot be partially undone.
- Fig 9 :55 "a bundled problem is usually a union of overlapping conditions, not a list of separate ones" -> two verdicts, not one.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> no net magnitude is returned.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" -> the simulated second seat is not a witness.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> corroboration must be bought from low-overlap fields.

Triangulation status: the per-slot finding is triangulated across Fig 1 :19 and :22 (same figure, two distinct lines governing indexing and aggregation, so low internal overlap). The help verdict is triangulated across Fig 6 (moves the wall) and Fig 11 (agent-and-habitat), two figures with different currencies. The harm verdict is triangulated across Fig 1 (unit) and Fig 2 (anchor stability), again low overlap. The target-as-ground finding is single-source within the figures (Fig 2 :43 and Fig 10 :47 are the same rule), corroborated from a low-overlap field in WORLD. The net magnitude is a gap after a genuine census: no currency is available to add the two grounds. Note that all figure lines share one framework evidence pool, so "triangulated" means distinct governing lines, not independent witnesses.

## WORLD (secondary sources read, corroboration only)

Each source was opened on 2026-11-22. Overlap is declared rather than hidden.

- **Business / corporate finance.** Asker, Farre-Mensa and Ljungqvist, "Corporate Investment and Stock Market Listing: A Puzzle?", Review of Financial Studies 28(2), 2015. Quote: "Our findings highlight short-termist pressures as a potentially important cost of a stock market listing." Predicts the harm verdict for listed firms; corroborates C2. Overlap: high with the other finance sources (same literature pool).
- **Business / behavioral corporate finance.** Graham, Harvey and Rajgopal, "The Economic Implications of Corporate Financial Reporting," Journal of Accounting and Economics 40, 2005 (NBER WP 10550). Quote: "We find that 55% of managers would avoid initiating a very positive NPV project if it meant falling short of the current quarter's consensus earnings." Predicts the target-decides finding; corroborates F5 and C2. Overlap: high with the finance pool.
- **Economics / theory.** Jeremy C. Stein, "Efficient Capital Markets, Inefficient Firms: A Model of Myopic Corporate Behavior," Quarterly Journal of Economics 104(4), 1989. Quote: "even a fully efficient market can lead managers who care about stock prices to behave myopically." Predicts the mutual-update harm even with rational markets; corroborates F4. Overlap: moderate, it is the theoretical precursor of the two empirical papers.
- **Financial economics.** Bond, Edmans and Goldstein, "The Real Effects of Financial Markets," Annual Review of Financial Economics 4, 2012. Quote: "a new definition of price efficiency is needed to account for the extent to which prices reflect information that is useful for the efficiency of real decisions (rather than the extent to which they forecast future cash flows)." Predicts the help verdict via information; corroborates F7. Overlap: high with finance, but a distinct mechanism from the short-termism papers.
- **Finance / practitioner research page.** Alex Edmans, "Financial Markets and the Real Economy," research page. Quote: "the manager learns information from the stock price to guide his actions." Predicts the learning channel; corroborates F7. Overlap: high, same author and pool as the survey above.
- **Social science / measurement.** Jeffery Rodamar, "There ought to be a law! Campbell versus Goodhart," Significance, 2018. Quote: "The more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures and the more apt it will be to distort and corrupt the social processes it is intended to monitor." Predicts that a target corrupts its measure; corroborates Fig 2 :43 from a low-overlap field. Overlap: low with finance, but the article itself did not read the 1975 and 1997 originals, so the attribution is second hand.
- **Mathematics / formalisation.** "On Goodhart's law, with an application to value alignment," arXiv, 2024. Quote: "When a measure becomes a target, it ceases to be a good measure", attributed there to Strathern 1997, with a formal dependence on the tail of the discrepancy distribution. Predicts when the effect is strong; corroborates the target finding. Overlap: high with the Rodamar source (same adage), so these two are one witness, not two.

No world source conflicts with the figure verdict. The apparent tension between the harm literature and the help literature is not a conflict to be resolved by averaging; it is the two conditions of the union compound in Fig 9 :55. Their agreement on the existence of real effects comes from a shared finance pool and is one pool talking (Fig 2 :40).

## VERDICT (from the figures)

The shape survives; a single signed verdict does not. Investment quality is per project against realised long-run outcomes; price is an instrument, not the anchor; manager and price form a mutual-update pair unless a separate anchor is installed; a target that decides projects has stopped being a convention; capital import can genuinely expand reach when capital was binding, and cannot be partially unwound. So the answer to BUS-0059 is two conditional verdicts, one for each condition, never averaged, with a `gap` for the net magnitude. This is `specified`, ungrounded, candidate. The strongest checkable point is the union-compound reading; the most useful world corroboration is the cross-field target-corruption law.

- **cost if wrong:** bounded and locatable. The packet states its mode, four refuters and its lineage, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending a verdict instead of a shape, which Fig 2 :42 prices. That cost is avoidable by leading with the shape claim and its refuter.
- **undoable:** yes. The two verdicts can be re-weighted or replaced when a ground reading arrives, without withdrawing the shape or importing a new primitive. A sent claim can be superseded by a corrected packet.
- **reversed by:** a ground reading, not agreement. A per-project, long-horizon dataset showing the sign does not depend on which condition binds would break the compound claim; a price invariant to firms' actions that settles long-run value would break the instrument reading; a demonstration that the target never decides project acceptance would break the convention-to-ground finding; a common currency for the two grounds would make a net term owed. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Corporate Investment and Stock Market Listing: A Puzzle? (HLS Forum)](https://corpgov.law.harvard.edu/2014/11/20/corporate-investment-and-stock-market-listing-a-puzzle/)
- [Corporate Investment and Stock Market Listing: A Puzzle? (Oxford Academic)](https://academic.oup.com/rfs/article/28/2/342/1601139)
- [The Economic Implications of Corporate Financial Reporting (NBER)](https://www.nber.org/papers/w10550)
- [Efficient Capital Markets, Inefficient Firms (Stein, Harvard PDF)](https://scholar.harvard.edu/files/stein/files/qje-1989.pdf)
- [The Real Effects of Financial Markets (NBER)](https://www.nber.org/papers/w17719)
- [Financial Markets and the Real Economy (Edmans)](https://alexedmans.com/research/research-financial-markets-and-the-real-economy/)
- [There ought to be a law! Campbell versus Goodhart (Significance)](https://rss.onlinelibrary.wiley.com/doi/10.1111/j.1740-9713.2018.01205.x)
- [On Goodhart's law, with an application to value alignment (arXiv)](https://arxiv.org/html/2410.09638)
- [The Library of Babel: Locating the Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Decoding Tacit Knowledge: Why Context, Subtext and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
