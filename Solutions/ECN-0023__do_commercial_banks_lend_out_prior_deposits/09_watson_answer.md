# WATSON answer: do commercial banks lend out prior deposits, or does lending create deposits?

**Mode: `general` on the shape, `specified` on the domains, `gap` on attribution. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule, LLM output is simulacra and the truly testable output would need to be derived from the real architecture or worked by hand, so it cannot settle the question it reports on. No measurement was taken by this packet. World sources report other people's readings; reading a report is not taking the reading.

## QUESTION

Decide, in effect terms, what the Tether says about the forced choice. Option A: banks lend out prior deposits, a sequence bond `D -> L` with deposits as a prior stock and the money multiplier as its system story. Option B: lending itself creates deposits, a production bond `L => D` with the deposit absent until the loan fires. What each leads to: A treats deposits as an exogenous constraint and imports a scarcity frame into a ledger; B fits the reported ledger entries but is often overread as "banks are unconstrained". The sought-for shape, written down before the run, is a typed bond plus a per-scale constraint statement plus a named ground, not a single winner.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor.

- **R (the residual).** Arity: two competing ordered bonds over the same atoms, loan L and deposit D, with a hidden third term, the reserve used to settle an outgoing payment. Symmetry: both candidate bonds are ordered, so swapping the operands changes the claim. Scale: bond at the ledger, multiplier at the system, theory names in the modelling frame. Fig 9 :4-5 says *"are not one hard question but several well-formed ones. Split it rather than search."* This is a union compound, not one hard question.
- **Domain 1, single-bank ledger.** Actors: bank, borrower, depositor, central bank. Currency: ledger entries and settlement funds. Anchor: the bank's own books and a payment that clears. Question type: partition on bond type.
- **Domain 2, banking system.** Actors: all commercial banks, central bank, non-bank public. Currency: broad money deposits versus base money reserves. Anchor: monetary statistics and the reserve market. Question type: scale crossing; the aggregate composes from ledger entries but payments net out.
- **Domain 3, modelling frame.** Actors: the three theories of banking and the textbook multiplier narrative. Currency: definitions of money, deposit, loan and reserve. Anchor: published model assumptions and predictions, not a measurement. Question type: union of three frames over one atom set.
- **Domain 4, measurement.** Actors: auditors, payment systems, statistical agencies. Currency: traces, timestamps, series. Anchor: a source-discriminating instrument. Question type: partition with a live attribution gap.
- **Order by dependency:** instrument before ledger bond, ledger bond before aggregate, theory name last (Fig 3). Fig 9 :27-28 says to describe the residual before choosing a frame.

Strain test: an initial attempt to apply Fig 13's six-term substrate to bank books was re-censused and retracted; Fig 13 governs primitives, not accounting atoms. The governing figures are Fig 12 and Fig 4. No strain after re-census.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVG text.

- Fig 12 :77 "A produces B; B did not exist before" -> the production bond fits a loan that brings a deposit into existence.
- Fig 12 :79 "is there a B before A fires? No." -> the six-test discriminator is checkable on a ledger origin field.
- Fig 12 :72 "A then B; B needs A to have happened" -> the sequence bond is what the prior-deposit story actually asserts.
- Fig 12 :94 "The arrangement is the substance." -> the options are different substances, not different quantities.
- Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> the three banking theories are isomers over a shared atom set.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." -> the bond and the funding constraint are different quantities.
- Fig 12 :121 "The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." -> creation and settlement funding form a signed loop, not a chain.
- Fig 4 :21 "The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction." -> methods cross scales, recordings do not; the aggregate is a new composition.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> carrying the ledger result up and back down loses constraints; R_T is nonzero.
- Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." -> the multiplier is an import, not a derivation inside the ledger frame.
- Fig 9 :4-5 "are not one hard question but several well-formed ones. Split it rather than search." -> refuse the forced "or" on form.
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." -> split before answering either arm.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> the framework returns a shape, not a policy verdict.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> a tier or a famous reviewer cannot decide the bond.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> the anchor is the ledger and the cleared payment.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> agreement is not the test.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" -> the BoE and RePEc cluster is one witness.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> domestic, cross-border, retail, wholesale and bank size are live slots.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> the attribution gap is unreached, not answered no.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." -> send the test, not the architecture.
- Fig 10 :52 "Bring a characterised residual, never the source." -> stage 1 before stage 2.
- Fig 13 :134 "It cannot say which primitive is missing, because naming it would mean already holding it." -> report the gap without inventing a mechanism.

Triangulation status: the bond verdict is `triangulated` across Fig 12's six-test separation and the Operators table test, two low-overlap readings of the same bond set. The union split is `triangulated` across Fig 9 and Fig 1. The scale verdict is `triangulated` across Fig 4 and Fig 6. The isomer claim is `single-source` for the figure definition, with chemistry and the taxonomy as separate corroborations of definition and classification only. The attribution and constraint questions are `gap`. The reported ground readings in the world sources are secondary and are not figure witnesses.

## WORLD (secondary sources read)

All opened 2026-11-23. Each line gives field, author/venue/year, quote, prediction here, and whether it corroborates or conflicts.

- **Monetary economics / central bank research.** Michael McLeay, Amar Radia and Ryland Thomas, Bank of England Quarterly Bulletin, 2014: "banks do not act simply as intermediaries, lending out deposits that savers place with them, and nor do they 'multiply up' central bank money to create new loans and deposits." Predicts production at the bond and refusal of the multiplier at the system; corroborates. Overlap: high, see the RePEc cluster below.
- **Monetary economics / central bank research.** Same authors, Bank of England Quarterly Bulletin, 2014: "Most money in the modern economy is in the form of bank deposits, which are created by commercial banks themselves." Predicts deposit creation by banks; corroborates. Same pool.
- **Monetary theory / DSGE modelling.** Zoltan Jakab and Michael Kumhof, Bank of England Working Paper 529, 2015: "In the intermediation of loanable funds model of banking, banks accept deposits of pre-existing real resources from savers and then lend them to borrowers. In the real world, banks provide financing through money creation." Predicts the two-bond distinction and profitability/solvency as constraints; corroborates. Overlap: cites the 2014 BoE work, so one pool.
- **Banking theory / empirical experiment.** Richard A. Werner, International Review of Financial Analysis, 2014: "This study establishes for the first time empirically that banks individually create money out of nothing." Predicts a ledger-level ground contact for the production bond; corroborates. Overlap: claims an independent experiment, but that independence is its author's claim, not established here.
- **Bibliographic record.** IDEAS/RePEc record for McLeay et al., 2014: abstract repeats "banks do not act simply as intermediaries, lending out deposits that savers place with them". Predicts nothing new; used to measure overlap and provenance only, no independent weight.
- **Monetary policy implementation.** Piti Disyatat, BIS Working Paper 269, 2008: "the misplaced emphasis on open market operations as the means through which monetary policy is implemented can give rise to inappropriate characterizations of monetary policy". Predicts that reserve-first narratives are a frame error; corroborates F3. Different institution, same economics pool.
- **Empirical monetary economics.** Seth Carpenter and Selva Demiralp, FEDS 2010-41 / Journal of Macroeconomics, 2010 / 2012: "the mechanism does not work through the standard multiplier model or the bank lending channel". Predicts refusal of the multiplier at the system; corroborates. Different data and instrument from the BoE papers, so partial independence on the mechanism.
- **Austrian economics / critique.** Darren Brady Nelson, Mises Wire, 2023: "bank lending creates deposits" quoted from the BoE, and "the BoE right out of the gate happily busts the myth about bank savings and loans but then sadly obfuscates the mystery of central and fractional reserve banking". Accepts the mechanism, conflicts on the framing. Conflict rule triggered: returned to census, which separated the creation leg from the settlement leg. Verdict did not flip. Not independent on the mechanism because it quotes the BoE.
- **Public reference / mapping aid.** Wikipedia, Money creation, 2026: "Bank loans issued by commercial banks expand the quantity of bank deposits." Predicts production at the bond; corroborates at low weight, mapping aid only.
- **Accounting, genuinely low overlap.** Wikipedia, Double-entry bookkeeping, 2026: "every financial transaction is recorded with equal and opposite entries". Predicts that a loan and a deposit liability are one entry pair; corroborates the mechanism of F1 without sharing the monetary economics pool.
- **Chemistry, genuinely low overlap.** Wikipedia, Isomer, 2026: "Structural isomers have the same number of atoms of each element (hence the same molecular formula), but the atoms are connected in distinct ways." Predicts the isomer definition; corroborates the definition only, not the banking classification.
- **Validation / metatheory.** Isaiah N, The Recursive Self-Improvement Trap, 2026: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Predicts this derivation cannot settle its own claim; corroborates its simulated status. Maximum overlap with the figure author.
- **Search / shape.** Isaiah N, The Library of Babel, 2026: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Predicts a shape, not a verdict; corroborates.
- **Instrument discrimination.** Isaiah N, The Hard Problem is About Source, 2026: "If several paths create the same behavior, then behavior is a projection with lossy information". Predicts that a deposit total cannot reveal its source and that an instrument is owed; corroborates the gap.
- **Tacit knowledge / drift.** Isaiah N, Decoding Tacit Knowledge, 2026: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Predicts the two-stage outreach order; corroborates Fig 10 and Fig 9.

Conflict summary: one real conflict (Nelson) was resolved by separating the creation leg from the settlement leg; it did not flip the bond verdict. Agreement among the four framework essays and the figures is expected and carries no independent weight. The accounting and chemistry sources are the genuinely low-overlap corroborators, and they speak to the mechanism and the definition, not to the economics as a whole.

## VERDICT (from the figures)

The forced disjunction is refused as malformed. At the loan/deposit pair the production bond governs, `L => D`, and its discriminator is the named six-test question. The prior-deposit story is the sequence bond and does not fit a ledger where the deposit is credited as a new liability. Existing-deposit funding is a separate real pathway, so the two mechanisms form a union compound to be split rather than averaged. The money multiplier is a strained import at system level, and creation plus settlement funding is a signed loop whose constraints are capital, liquidity, profitability, the policy rate and credit demand. The share of deposits attributable to lending at a moment, and the exact constraint mix by slot, are `gap`, reported as verdicts rather than silence. This is `general` on the shape and `specified` on the domains, not grounded.

- **cost if wrong:** bounded and locatable. The claim is mode-labelled, carries a ledger test and four refuters written in advance, and records its lineage, so an error is findable. The real cost is sending a theory before the test and spending an outside reader's independence, which Fig 2 :42 prices as "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the test.
- **undoable:** yes. The bond claim and the union split can be corrected without withdrawing the method. If R1 or R2 fires, the affected domain is rewritten and the other domains stand; no atom has to be invented. A sent claim can be superseded by a corrected packet.
- **reversed by:** a ground reading, not agreement. A timestamped ledger origin field showing no new deposit liability would flip the bond to sequence; a stable per-slot reserve-to-loan multiplier with reserves exogenous would reinstate the system story; a source-discriminating instrument closing the attribution gap would remove the `gap`; a bond re-census showing sequence is correct would reverse the primary verdict. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Money creation in the modern economy, Bank of England](https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy)
- [Money in the modern economy: an introduction, Bank of England](https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-in-the-modern-economy-an-introduction)
- [Banks are not intermediaries of loanable funds, BoE WP 529](https://www.bankofengland.co.uk/working-paper/2015/banks-are-not-intermediaries-of-loanable-funds-and-why-this-matters)
- [Can banks individually create money out of nothing?, Werner 2014](https://professorwerner.org/pubs/can-banks-individually-create-money-out-of-nothing-the-theories-and-the-empirical-evidence/)
- [IDEAS/RePEc record for McLeay, Radia and Thomas](https://ideas.repec.org/a/boe/qbullt/0128.html)
- [Monetary policy implementation: Misconceptions and their consequences, BIS WP 269](https://www.bis.org/publ/work269.htm)
- [Money, reserves, and the transmission of monetary policy, FEDS 2010-41](https://ideas.repec.org/p/fip/fedgfe/2010-41.html)
- [The Bank of England: Money Creation in Their Own Words, Mises Wire](https://mises.org/mises-wire/bank-england-money-creation-their-own-words)
- [Money creation, Wikipedia](https://en.wikipedia.org/wiki/Money_creation)
- [Double-entry bookkeeping, Wikipedia](https://en.wikipedia.org/wiki/Double-entry_bookkeeping)
- [Isomer, Wikipedia](https://en.wikipedia.org/wiki/Isomer)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Library of Babel: Locating the Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`.
