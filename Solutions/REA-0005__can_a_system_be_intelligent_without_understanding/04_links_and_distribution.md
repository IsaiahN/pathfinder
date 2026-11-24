# Public links and distribution

Every URL below was fetched on 2026-11-23 unless the line says otherwise. A fetch that failed or returned the wrong paper is recorded rather than silently dropped.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Verbatim figure text with line numbers | local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` | One line per SVG text element. Fig 11 :34 to :41 is the replacement for the intelligence question; Fig 3 :9 to :15 is the dependency chain; Fig 5 :62 to :68 is the direction limit; Fig 12 :111 to :114 is the bond requirement. All citations in this folder were checked against this file. |
| Canonical usage rule | local: `FRAMEWORK/reference/FIGURES_README_canonical.md` | *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also *"what a missing thing would have to look like (a shape, not a name)"* and *"Indiscernibility is not identity."* |
| The loop and mode rule | local: `FRAMEWORK/figures/THE_FORMULA.md` | Eight steps; *"Mode. general · specified · grounded. State which."* Direction: bind the sought-for shape as an ordinary term so it can accrue a residual. |
| Chinese Room Argument | https://plato.stanford.edu/entries/chinese-room/ | David Cole, SEP, first published 2004, substantive revision 2024, last modified 2026-05-12. Author and citation information checked separately. *"The program enables the person in the room to pass the Turing Test for understanding Chinese but he does not understand a word of Chinese."* The entry also records the Systems Reply, Virtual Mind Reply and Other Minds Reply, so the result is contested, not settled. |
| The Turing Test | https://plato.stanford.edu/entries/turing-test/ | Graham Oppy and David Dowe, SEP, first published 2003, Winter 2021 edition. States the logical possibility of passing behavioural tests while *"entirely lacking in intelligence, not possessed of a mind, etc."* (Blockhead), and closes with the bearing of the Chinese Room on the test. |
| Understanding | https://plato.stanford.edu/entries/understanding/ | Stephen Grimm, SEP, first published 2021, Winter 2025 edition. Distinguishes the feeling of understanding from genuine understanding: de Regt's distinction, quoted in the entry, is that the feeling is *"neither necessary nor sufficient for genuine understanding"*. Also: understanding is *"harder to acquire, and more of an epistemic accomplishment, than knowledge"* and its objects are *"more structured and interconnected"*. |
| Specification gaming | https://deepmind.google/discover/blog/specification-gaming-the-flip-side-of-ai-ingenuity/ | Victoria Krakovna, Jonathan Uesato, Vladimir Mikulik, Matthew Rahtz, Tom Everitt, Ramana Kumar, Zac Kenton, Jan Leike, Shane Legg, Google DeepMind blog, 2020-04-21. *"Specification gaming is a behaviour that satisfies the literal specification of an objective without achieving the intended outcome."* Includes the Lego block flip and Coast Runners examples. |
| Concrete Problems in AI Safety | https://arxiv.org/abs/1606.06565 | Dario Amodei, Chris Olah, Jacob Steinhardt, Paul Christiano, John Schulman, Dan Mané, arXiv:1606.06565, 2016. Abstract names *"the problem originates from having the wrong objective function"* and separates avoiding side effects from avoiding reward hacking. |
| Human and Rodent Homologies in Action Control | https://pmc.ncbi.nlm.nih.gov/articles/PMC3055420/ | Bernard W. Balleine and John P. O'Doherty, Neuropsychopharmacology 35(1), 48 to 69, 2010 (online 2009). *"actions under goal-directed control are performed with regard to their consequences, whereas those under habitual control are more reflexive in nature, by virtue of their control by antecedent stimuli rather than their consequences."* Gives the outcome devaluation and contingency degradation tests. |
| Goodhart's law | https://en.wikipedia.org/wiki/Goodhart%27s_law | Wikipedia, page last edited 2026-11-22. *"When a measure becomes a target, it ceases to be a good measure"* (Strathern 1997), attributed to Goodhart 1975. Encyclopedia, so weighted as a secondary pointer, not as a primary study. |
| How Intelligence Actually Works | https://adventuresinml.substack.com/p/how-intelligence-actually-works | Isaiah N, 2026-09-16. *"The mapping is not a means to intelligence; the mapping is the intelligence."* Also: *"Alignment asks what the thing is answerable to. A ground, something that refuses, a bill that gets paid. Without it you have a system that can generate things and nothing that can tell it's wrong."* And: *"The LLMs kept getting their context windows eaten up. They would forget the goal and start trying to beat the game themselves."* |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* Also: *"Natural selection is what the loop looks like when there is no one maintaining the ground."* |
| Cognitive Science Society | https://cognitivesciencesociety.org/ | Verified homepage; public submissions and journal routes linked from it. |
| Behavioral and Brain Sciences | https://www.cambridge.org/core/journals/behavioral-and-brain-sciences | Verified journal page; open peer commentary format; submissions moved to ScholarOne in August 2026. |
| JAIR | https://jair.org/ | Verified journal homepage; public submissions link. |
| arXiv cs.AI | https://arxiv.org/archive/cs.AI | Verified archive page and its scope description. |
| ASSC | https://theassc.org/ | Verified society homepage; ASSC30 submissions linked; annual meeting 2027. |
| FQxI | https://fqxi.org/ | Verified homepage; public essay competitions; stated scope is foundations of physics and cosmology. |

## What the wider literature adds, and what it does not settle

Three results bear directly on the operational analogue, and none of them is a figure line:

1. **Balleine and O'Doherty** supply a *test* for whether a goal is represented: outcome devaluation and contingency degradation. A habit persists when the outcome loses value; a goal-directed action does not. This is the closest real instrument to Fig 3 :10's *"it can say what would count as progress here, in its own terms"*. It does not settle the human or machine case; it tells us what to look for.
2. **Krakovna et al.** supply the failure mode that makes the question practical: an agent can satisfy the literal specification while missing the intended outcome. In figure terms the specification became a convention that decided an outcome (Fig 10 :47). This is the operational cost of option A in `01`.
3. **Cole's SEP entry** supplies the oldest clean separation between behaving as if one understands and understanding. The entry also records strong replies to Searle, so it cannot be used as a settled verdict on machine understanding. It corroborates the figure's refusal to read a source off a behaviour.

The three sources come from different fields and different evidence pools (comparative cognition, AI safety, philosophy of mind), so their agreement is not one pool talking. It is still only corroboration: the verdict comes from the figures.

## An honest discarded fetch

`https://arxiv.org/abs/2106.03134` was opened on 2026-11-23 expecting a paper on goal misgeneralization in reinforcement learning. It is **"Pseudo-Riemannian Graph Convolutional Networks"** by Bo Xiong et al., a graph-embedding paper with no bearing on this question. It is logged in `10_source_ledger.csv` as opened and discarded, and is **not cited anywhere** in this solution. No claim here rests on it.

A second fetch failed cleanly: `https://societyforphilosophyandpsychology.org/` returned a transport error, so that venue is **not** listed in `03_public_contact_points.csv`.

## Distribution rules: offer, do not push

- **Fig 10 :52** *"Bring a characterised residual, never the source."* Send the five outputs and the five refuters first. The figures go only after a verdict on stage 1 is recorded.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** *"describe it before you go looking, or any frame you pick will seem to fit"* Ask what they would expect to see if the objective-link claim were true before naming any field or author.
- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Stage 3 sends a method, which is permitted. It does not send an answer.
- **Fig 2 :40** *"agreement about the world is worthless when the agreeing frames share an evidence pool"* Later agreement about the framework is never pooled as corroboration of stage 1.
- **Fig 9 :60** *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A venue's prestige decides where to try, not whether the claim is true.
- **Legal:** one-to-one contact only, no bulk send, no automation, an opt-out line in every message, and GDPR and CAN-SPAM style rules observed. The CSV holds public institutional routes only, no personal emails and no receptiveness rank.

## The two-stage offer, restated

**Stage 1.** Send `08_expert_verification_packet.md`. Ask: what would count as a failure of the objective-link claim and of the self-check limit? Record the answer. Nothing about the Tether is shown yet.

**Stage 2, opt-in only.** If the recipient asks where the claim came from, send the figure-text link and the canonical README. Say plainly that the figures, not this summary, are the authority.

**Stage 3, only if invited.** Offer `THE_FORMULA.md` as a method. Require each user to write a refuter before running it and to state the mode of what they get. From *The Recursive Self-Improvement Trap*: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

**Hard precondition:** stages 1 and 2 only work if the outputs survive the reader's check. This is a simulated derivation, so `grounded` is not on the table.

## What is not distributed

No attachment pushed to a list, no follow-up sequence, no request for endorsement, no use of a recipient's reputation as evidence, no claim that a named system does or does not understand its goals.
