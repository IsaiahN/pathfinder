# Public links and distribution

All links below were fetched and read on 2026-11-22. Two fetches failed and are recorded as such at the end, not silently dropped.

## Framework sources (primary)

| what | URL | verified content |
|---|---|---|
| Arrival of the Fittest: The Tether Architecture | https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether | Aug 19 2026. All 13 figures, THE FORMULA, Symbols and Operators tables, and the citation list tagged "borrowed machinery", "an instance" or "a parallel". Section "Three mappings offered and declined" declines near-miss mappings. Caveat: LLM outputs "could never be verified if the solutions presented were not contrived to fit the formula." |
| How Intelligence Actually Works | https://adventuresinml.substack.com/p/how-intelligence-actually-works | Sep 16 2026. Projection and perception, the video-frame versus photograph case, provenance loss, the gemstone trace case, union horizon, and the claim "indiscernibility is not identity." This is the source that governs the attribution question directly. |
| Figures for direct download | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repo, branch `general-agent`, folder `figures/`. README says the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them" and cites as `Fig N :line`. |
| Figures README, canonical | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | Same rule, plus the limit: "what a missing thing would have to look like (a shape, not a name)" and "Indiscernibility is not identity." |

## Wider literature actually read (secondary, low overlap with the framework)

| source | field | what it contributes to this question |
|---|---|---|
| Self-organization, https://en.wikipedia.org/wiki/Self-organization | complexity science | Defines the target: order "arises from local interactions between parts of an initially disordered system", "not needing control by any external agent"; lists four ingredients and notes "guided self-organization", where constraints steer local interactions. Supports the union reading. |
| Stigmergy, https://en.wikipedia.org/wiki/Stigmergy | animal behaviour and design | "a mechanism of indirect coordination, through the environment, between agents or actions" that works "without need for any planning, control, or even direct communication between the agents"; includes architectural and building-design practice. Forces the F7 re-census from communication axis to seat axis. |
| Dissipative system, https://en.wikipedia.org/wiki/Dissipative_system | physics and thermodynamics | "This reproducible steady state may be reached by natural evolution of the system, by artifice, or by a combination of these two." Shows external flux is common to both A and B and therefore cannot discriminate them. |
| Confounding, https://en.wikipedia.org/wiki/Confounding | statistics and causal inference | "Confounding is a causal concept rather than a purely statistical one, and therefore cannot be fully described by correlations or associations alone"; introduces the intervention `P(y|do(x))`, distinct from observation. Corroborates F3 from a field with no stake in the framework. |
| Metamerism (color), https://en.wikipedia.org/wiki/Metamerism_(color) | color science and perception | "metamerism is a perceived matching of colors with different (nonmatching) spectral power distributions"; "Material colors that match under one source will often appear different under the other." Corroborates the projection and anchor-test findings. |
| The Hard Problem is About Source, https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | perception and instruments, framework author | "the instrument is speaking only about what it measured, it cannot comment on the source"; the spectrometer resolved the case "not by argument, but by the arrival of a better instrument." |
| Decoding Tacit Knowledge, https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | human cognition, framework author | "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Also documents drift when frames check only against each other. |
| The Library of Babel, https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | search and information, framework author | "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." |
| They're Scanning Books When They Should Be Studying Nature, https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should | machine learning, framework author | "A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six." Supports honesty about the stop. |
| The Recursive Self-Improvement Trap, https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | AI safety and validation, framework author | "Natural selection is what the loop looks like when there is no one maintaining the ground"; "The same code runs when there is a Ground Maintainer." Direct statement of F2. |

The eight essays and the canonical README share an author with the figures, so their agreement is high-overlap and counts as one evidence pool. The five Wikipedia sources span complexity science, animal behaviour, thermodynamics, statistics and color science, with low mutual overlap. No source was cited that was not opened.

## Distribution: offer, do not push

- **Fig 4 :22** "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the attribution test and its refuter.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see under each of the three causes before showing the framework.
- **Fig 7 :35** "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Do not select recipients for likely agreement and do not pool later agreement as corroboration.

**Recommended order in a reply:** (1) the shape claim and its three refuters; (2) ask what they would count as a failure; (3) record their verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer, and the third stage

1. **Stage 1:** validate the attribution test against the ground. The recipient checks the output without holding the framework's interior.
2. **Stage 2, opt-in only:** if curious, read the framework that produced it. Verdict on stage 1 is recorded before stage 2. Later agreement is never pooled as corroboration (Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool").
3. **Stage 3:** offer the formula as a method to reuse. This is permitted: Fig 4 :22 "Only methods cross up." Each user must state their own ground and write their own refuter before running it.

**Hard precondition:** stages 1 to 3 work only if stage 1 survives. The audit's F1 to F3 are the live tests; if one fires, the packet is withdrawn rather than defended.

## Fetch failures, recorded honestly

- `https://direct.mit.edu/artl` (Artificial Life journal) returned HTTP 403. Not used as a source or contact point.
- `https://complex-systems.com/` returned HTTP 500. Not used as a source or contact point.

The remaining contact venues in `03_public_contact_points.csv` were fetched successfully on 2026-11-22.

## Hosting

Nothing is sent by this agent. Hosting the packet and sending it is the user's action. Prefer an opt-in download page over a pushed attachment, so a recipient can decline contact.
