# Public links and distribution

All links below were fetched and read on 2026-11-23 unless marked otherwise. The figures are the primary authority; these pages are secondary corroboration or mapping aids.

## 1. Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Chalmers, "Does a Rock Implement Every Finite-State Automaton?" | https://consc.net/papers/rock.html | Published in *Synthese* 108:309-33, 1996. Reports Putnam's claim that every ordinary open system implements every finite-state automaton, then refuses it by requiring strong, counterfactual-supporting state-transition conditionals and combinatorial state structure. Direct source for the lawfulness and non-triviality conditions in `01` F3 and F4. |
| SEP, "The Computational Theory of Mind" | https://plato.stanford.edu/entries/computational-mind/ | First published 2015, substantive revision 2024-12-18. Sections on Turing machines, functionalism, alternative conceptions of computation (mechanistic theories, pluralism), and triviality arguments. Gives the "key task... to explain what one means when one says that the mind computes" framing and the observation that to compute addition "we will have to provide an interpretation of the symbols recorded on the tape." |
| SEP, "The Chinese Room Argument" | https://plato.stanford.edu/entries/chinese-room/ | First published 2004, revision 2024-10-23. Searle (2010): "Computation is defined purely formally or syntactically, whereas minds have actual mental or semantic contents, and we cannot get from syntactical to the semantic just by having the syntactical operations and nothing else." Source for the syntax-versus-ground distinction. |
| SEP, "Turing Machines" | https://plato.stanford.edu/entries/turing-machine/ | First published 2018, revision 2025-05-21. Requires an interpretation of tape symbols as numbers before a machine can be said to compute a function; distinguishes computable in theory from computable in practice. |
| Landauer's principle (summary page) | https://en.wikipedia.org/wiki/Landauer%27s_principle | Landauer 1961, Bennett 2003, Bérut et al. 2012. Key line: "Logical reversibility is a property of the computation itself, i.e. of the abstract mapping from inputs to outputs, whereas thermodynamic reversibility is a property of the physical process, i.e. the hardware, that implements it. The two can therefore differ." Source for the ground-side, physics-facing corroboration. |
| Natural Computing journal | https://link.springer.com/journal/11047 | Fetched 2026-11-23. Scope: "explores both computational processes observed in nature and human-designed computing inspired by nature." Open calls for papers listed. |
| Synthese journal | https://link.springer.com/journal/11229 | Fetched 2026-11-23. Philosophy of science journal; venue of the Chalmers paper. |
| FQxI and QSpace | https://fqxi.org and https://qspace.fqxi.org/ | Fetched 2026-11-23. Public competitions and contact page advertised. |
| PSA submissions | https://philsci.org/submissions.php | Fetched 2026-11-23. Anonymous review, 9500 word limit, Editorial Manager submission. |

Framework essays read 2026-11-23, all by Isaiah N, all high overlap with the figures and therefore weak independent corroboration:

- "The Hard Problem is About Source", https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
- "The Recursive Self-Improvement Trap", https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
- "The Library of Babel: Locating The Book of Books", https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
- "Decoding Tacit Knowledge", https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context

Local canonical files (primary, not world sources): `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`.

One attempted source failed: PhilSci Archive (https://philsci-archive.pitt.edu/) returned a bot-rejection page on 2026-11-23. It is **not** cited as a read source and does not appear in `10_source_ledger.csv`. Another attempted URL, Wolfram's computational equivalence page, returned 404 and was dropped. The honest consequence is that no Wolfram source was read; the "rule-following versus computation" contrast is carried by Chalmers/Putnam and the SEP entries instead.

## 2. What the wider literature contributes

Four findings bear directly on the stage-1 claim and were not available from the framework alone:

1. **The triviality result is real and independently derived.** Putnam, via Chalmers, shows that an arbitrary open system implements every inputless finite automaton under a disjunctive mapping. This is the world-side equivalent of the figure's warning that a term which "explains everything by saying nothing" fails the bargain (Fig 5 :43-44). It corroborates the lawfulness and non-triviality conditions.
2. **Implementation is a causal-mirroring relation, not a naming relation.** Chalmers requires that "causal relations among states of a physical system must mirror formal relations among states of the automaton", including transitions not manifested on the actual run. This is the content behind the figure's requirement that computation be a route (Fig 12 :111-113), not a state.
3. **Interpretation is necessary but not sufficient.** Both SEP Turing Machines and SEP Computational Theory of Mind make interpretation explicit; neither makes it sufficient. That is a clean low-overlap corroboration of Fig 10 :18 "a declared meaning is not a grounded one".
4. **Physics prices the distinction but does not collapse it.** Landauer/Bennett separate logical reversibility (the abstract mapping) from thermodynamic reversibility (the hardware). This corroborates the fork in `01` F5: the question has a convention side and a physical side, and the two must not be averaged.

No world source conflicts with the figure verdict, so the conflict rule (back to the census) was not triggered. The SEP entries and Chalmers are genuinely low overlap (different authors, different institutions, no dependence on the Tether). The essays are high overlap and are marked as such in the ledger.

## 3. Distribution: offer, do not push

- **Fig 4 :22 "Only methods cross up. Only head starts come down."** Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the four-condition shape and its refuter; offer links after.
- **Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."** A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked. Record stage-1 verdicts first.
- **Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit".** Ask what they would expect to see if the shape claim were true before giving them Chalmers or the SEP entries.
- **Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."** Do not select recipients for likely agreement. Use public, opt-in submission venues.
- **Fig 2 :42 "Buy independence in proportion to the cost of being wrong."** The cost here is a silent definitional error, so spend the effort on an outside reader in a different closure (philosophy of computation, natural computing, thermodynamics of computation), not on more readers of the same essays.

**Recommended order in a reply:** (1) the residual and the four-condition shape; (2) the four refuters, written in advance; (3) ask what they would count as a failure and record the answer; (4) only if curious, the three links, with the note that the figures and the cited papers, not my summary, are the authority; (5) if they want the method, the formula with the instruction to write their own refuter and state their own mode.

## 4. The two-stage offer

**Stage 1:** the shape claim and its pre-registered refuter, with no theory attached. The recipient checks the discriminator against what they already know.
**Stage 2, opt-in:** the figure text and the low-overlap papers. Their stage-1 verdict is already recorded, so later agreement is never pooled as corroboration (Fig 2 :40, "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool").
**Stage 3, opt-in:** the formula as a reusable method, with each user writing their own refuter and mode.

Hard precondition: stages 1 and 2 only work if the stage-1 shape survives. `01` shows the discriminators that must hold. If a refuter fires, stop and retract rather than offer the links.

## 5. Hosting

There is no archive to upload. If you host the packet, prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. Nothing in this folder sends anything. Hosting and sending are yours to do.
