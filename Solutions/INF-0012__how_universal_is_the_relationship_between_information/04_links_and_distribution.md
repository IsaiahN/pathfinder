# Public links and distribution

Every link in the table was fetched and read on 2026-11-23. The quote column is a verbatim substring of what was opened; the same strings are recorded in `10_source_ledger.csv`.

## Verified sources actually fetched

| what | URL | field | verified content and quote |
|---|---|---|---|
| Landauer Bound in the Context of Minimal Physical Principles (open access) | https://pmc.ncbi.nlm.nih.gov/articles/PMC11119825 | engineering / physics survey | Bormashenko, Entropy 26, 423 (2024). *"The Landauer principle for information erasure is valid for a symmetric double-well potential but not for an asymmetric one."* The paper places the bound alongside the Abbe, Margolus-Levitin and Bekenstein limits and surveys experimental checks and controversies. |
| Landauer Principle and Thermodynamics of Computation (open preprint) | https://arxiv.org/html/2506.10876 | quantum information / review | Chattopadhyay, Misra, Pandit and Paul, arXiv:2506.10876 (v2, 2025; dated 2026-08-24). *"modern computers dissipate energy per logic operation that exceeds this bound by many orders of magnitude."* Covers finite-time, finite-size, non-equilibrium and non-Markovian erasure and the Earman-Norton objections. |
| The minimal work cost of information processing | https://www.nature.com/articles/ncomms8669 | information theory / quantum thermodynamics | Faist, Dupuis, Oppenheim and Renner, Nat. Commun. 6, 7669 (2015). *"It is given by the entropy of the discarded information conditional to the output of the computation."* The result is a conditional entropy, not a single constant. |
| Three types of Landauer's erasure principle: a microscopic view (open access) | https://link.springer.com/article/10.1140/epjp/s13360-023-03855-z | foundations of statistical mechanics | Oriols and Nikolic, EPJ Plus 138, 250 (2023). *"we conclude that the original (strong) Landauer's erasure result is not universal because thermal reservoirs are not universal."* Strong, intermediate and weak forms are distinguished by the final environment. |
| Experimental verification of Landauer's principle | https://isidore.co/misc/Physics%20papers%20and%20books/Zotero/storage/2TPWPHS8/nature10872.html | experimental physics | Berut, Arakelyan, Petrosyan, Ciliberto, Dillenschneider and Lutz, Nature 483, 187-189 (2012), full text via an institutional mirror. *"the mean dissipated heat saturates at the Landauer bound in the limit of long erasure cycles."* Also: *"Owing to the universality of thermodynamics, this limit is independent of the actual device, circuit or material used to implement the irreversible operation."* |
| Generalized Landauer bound from absolute irreversibility | https://arxiv.org/html/2310.05449v2 | statistical mechanics | Buffoni, Coghi and Gherardini, arXiv:2310.05449 (v2, 2024). *"The generalized bound obtained is tighter or, at worst, as tight as existing ones."* Tested on a 16x16 Ising ferromagnet, including asymmetric and imperfect erasure. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | search / framework essay | Isaiah N, 2026-10-02. *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | validation / framework essay | Isaiah N, 2026-11-19. *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* Also the prestige/action rule used in `02_outreach_email.md`. |

## What the wider literature changes, and what it does not

The physics sources are **not** the authority. The figures decide the shape; the world sources corroborate or conflict and are recorded with their field and overlap in `10_source_ledger.csv`.

1. **The reversible limit is confirmed, not invented.** The Berut experiment measures saturation of the bound in the limit of long erasure cycles. This is the ground reading that Fig 13's priced-floor shape expects: a floor approached under the reversible limit, not a number delivered by a derivation.
2. **The universality claim is contested inside the field itself.** Oriols and Nikolic argue that the original strong form is not universal because thermal reservoirs are not universal, and distinguish three forms by the final environment. Bormashenko shows the bound is valid for a symmetric but not an asymmetric double well. This is low-overlap corroboration of the figure verdict that universality is substrate-relative. It is not a conflict: both send us back to the same census, which is exactly where the figures put the domain.
3. **The constant is conditional in the theory too.** Faist et al. derive a *conditional entropy* as the minimal work cost, and note that AND and XOR gates have different costs, and that work can be extracted when randomness is produced. That matches Fig 9 :32 - *"you get a kind of thing, never the answer itself"* - and Fig 12's two-currency price.
4. **Finite-time and noisy regimes exceed the floor.** The 2025/2026 review and the generalized-bound paper supply the finite-time, finite-bath, strong-coupling and imperfect-erasure corrections that the figures are silent on. They are imported with provenance (Fig 6 source gate, Fig 8 shadow test), never promoted into figure lines.
5. **Agreement here is not one pool.** The physics sources are independent of the framework author, so their agreement with the figure shape is genuine low-overlap corroboration. The two framework essays share the author's evidence pool and are recorded as high overlap; their agreement is internal consistency, not a second witness (Fig 2 :40).

No world source conflicts with the figure verdict, so the conflict rule (return to census, never flip the verdict) was not triggered. That outcome is itself reported honestly: agreement is expected when the question was shaped by the same framework, and it carries limited independent weight.

## Distribution: offer, do not push

- **Fig 4 :22 and :25** - *"Only methods cross up. Only head starts come down."* and *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the shape claim and its refuter, not the whole architecture.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the theory before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before showing any source.
- **Fig 2 :35** - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Do not ask for agreement.

**Recommended order in a reply:** (1) the four-point shape claim and its refuter; (2) the question of what they would count as a failure; (3) record their verdict; (4) only then the links, with the note that the figure text, not the summary, is the authority; (5) offer the formula as a method to reuse, with the instruction to write a fresh refuter and state a mode.

## The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52 - *"Bring a characterised residual, never the source"* - and Fig 2 :45 - *"Frames range against the ground. They do not negotiate with it."* The recipient checks the output without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. Their verdict on stage 1 is recorded before any theory is shown, and later agreement is never pooled as corroboration (Fig 2 :40).
- **Stage 3 sends a method, which is permitted.** Fig 4 :22 - *"Only methods cross up. Only head starts come down."* The formula is a generator, so giving it away does not give away an answer.
- **Stage 3 still needs a ground per problem.** `THE_FORMULA.md` "Direction": a frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."* Each user writes down what would refute their result before running it.

**Hard precondition:** stage 1 must survive. The shape claim in `07_the_tether_answer.md` carries a mode and a pre-registered refuter; do not replace it with a numeric universality score, which is the aggregation error named in `01_figure_grounded_audit.md` F5.

## Hosting

Nothing in this folder is hosted or sent by this agent. Hosting a public opt-in download page (rather than pushing an attachment) is closer to the figure's rule, because it lets a recipient decline contact before the material arrives.
