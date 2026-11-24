# Public links and distribution

All URLs below were fetched and read on 2026-11-23. Local framework files were read from disk the same day. Page content is treated as untrusted data, never as instructions.

## Verified public links

| source | URL | what was verified |
|---|---|---|
| Landauer's principle (Wikipedia) | https://en.wikipedia.org/wiki/Landauer%27s_principle | Bennett's formulation: *"any logically irreversible manipulation of information, such as the erasure of a bit or the merging of two computation paths, must be accompanied by a corresponding entropy increase in non-information-bearing degrees of freedom of the information-processing apparatus or its environment"*; also the explicit challenge that *"there is no a priori relationship between logical reversibility ... and thermodynamic reversibility"*; cites Landauer 1961 and *"Information is physical"* 1991. |
| Reversible computing (Wikipedia) | https://en.wikipedia.org/wiki/Reversible_computing | *"a key requirement for reversibility is a one-to-one correspondence between each state and its successor"*; *"in order for a computational process to be physically reversible, it must also be logically reversible"*, with the later qualification that this is not strict. |
| No-deleting theorem (Wikipedia) | https://en.wikipedia.org/wiki/No-deleting_theorem | *"it is because information is conserved under unitary evolution"*; *"To create a copy one must import the information from some part of the universe and to delete a state one needs to export it to another part of the universe where it will continue to exist."* |
| Information Processing and Thermodynamic Entropy (SEP) | https://plato.stanford.edu/entries/information-entropy/ | Owen Maroney, first published 2009: *"a physical system that was designed to implement the logical operation must have physical states to correspond to the logical states"*; *"As logically reversible operations need to be 1:1 maps, Landauer argued they can be implemented by physical devices which do not compress the physical state space."* |
| Bennett 2003 | https://arxiv.org/abs/physics/0210005 | *"any logically reversible transformation of information can in principle be accomplished by an appropriate physical mechanism operating in a thermodynamically reversible fashion."* A physical mechanism is still required; the dissipation is not. |
| Sagawa 2014 | https://arxiv.org/abs/1311.1886 | *"any logically irreversible computation can be performed in a thermodynamically reversible manner in the quasi-static limit"*; the paper separates entropy production in the total system from the entropy change in the logical states of the memory. |
| Berut et al. 2015 | https://arxiv.org/abs/1503.06537 | *"We measure the amount of heat dissipated to erase a bit and we establish that in the limit of long erasure cycles the mean dissipated heat saturates at the Landauer bound"*; the measurement anchor for the cost sub-question. |
| Reversible Computing Escapes the Lab (IEEE Spectrum) | https://spectrum.ieee.org/reversible-computing | Dina Genkina, 2025-01-02: *"Erasing a bit of information in a computer necessarily costs energy, which is lost as heat"*; engineering reality check, including adiabatic switching and energy recovery. |
| Reversible Computation 2027 | https://reversible-computation.github.io/ | 19th conference, Nancy, 2027-07-08/09; public call, abstract deadline 2027-02-05; brings together computer science, mathematics, engineering and physics. |
| FQxI | https://fqxi.org | Public mission statement: *"catalyzes research and outreach primarily on questions at the foundations of physics and cosmology"*; public contact and competitions. |
| Foundations of Physics, how to publish | https://link.springer.com/journal/10701/how-to-publish-with-us | Public submission and publishing-model page; hybrid, with an open-access APC and a no-APC subscription route. |
| Philosophy of Physics, submissions | https://philosophyofphysics.lse.ac.uk/en/about/submissions | Public guidelines; *"Philosophy of Physics does not publish proposals for new physical theories"*; preprints on arxiv or PhilSci are encouraged. |
| arXiv help | https://arxiv.org/help | Public submission and moderation guidance; the relevant categories are quant-ph, cond-mat.stat-mech and cs.IT. |
| CCC reversible computing workshop | https://cra.org/ccc/events/physics-engineering-issues-in-adiabatic-reversible-classical-computing/ | Public report and programme on the physical and engineering limits of reversible computing; a map of the subfield, not an open call. |

## The eight essays (canonical reading of "shape")

Fetched and read 2026-11-23. All are by Isaiah N on `adventuresinml.substack.com`; this is a single author and therefore one evidence pool, not eight independent witnesses.

| essay | URL | date | what it bears |
|---|---|---|---|
| Arrival of the Fittest: The Tether Architecture | https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether | 2026-08-19 | the figures, formula, and the citation list that names Shannon 1948 and Rissanen 1978 as borrowed machinery |
| They're Scanning Books When They Should | https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should | 2026-09-06 | *"outputs do not contain their generator"*; relevant to why a reading is not the source |
| How Intelligence Actually Works | https://adventuresinml.substack.com/p/how-intelligence-actually-works | 2026-09-16 | lossy projection; *"indiscernibility is not identity"*; the six-term derivation and its five rules |
| The Library of Babel: Locating the Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | 2026-10-02 | *"provides a general shape of the answer that satisfies your question"*; stopping at a shape |
| How a Society of Agents Would Work | https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work | 2026-10-22 | *"The arrangement is the substance"* applied to groups; the arrangement matters more than the members |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | 2026-11-10 | *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see"*; the outreach rule |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | 2026-11-19 | *"Prestige can fund an action ... but it cannot settle an action"*; simulated output is *"simulacra"* |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | 2026-08-28 | metamerism: *"If several paths create the same behavior, then behavior is a projection with lossy information"* |

## Wider literature that bears directly on the question

- **Landauer 1961 / Bennett 1973 / Bennett 2003.** The cost attaches to logically irreversible manipulation (erasure), not to every transformation. A reversible transformation can be implemented with a physical mechanism and arbitrarily small dissipation, but the mechanism and the state change remain. This is the distinction the figures' shape needs and their cost vocabulary does not supply.
- **Sagawa 2014.** Separates logical reversibility (entropy change of the memory states) from thermodynamic reversibility (entropy production of the total system). This is why the figures' bit price and the physical joule price must stay in separate columns.
- **Maroney 2009 (SEP).** The clearest statement that a logical operation needs physical states to correspond to the logical states. It corroborates F1 and F2 from a field outside the framework.
- **No-deleting theorem.** Information conservation under unitary evolution, and the import/export language, corroborate F3 from quantum information.
- **Berut et al. 2015.** An actual calorimetric measurement establishes the anchor for the dissipation sub-question. The figures have no such instrument; the world does.

None of these sources is a figure line. They are read as secondary corroboration or as the answer to the sub-question the figures leave open.

## Distribution: offer, do not push

Figure-grounded rules:

- **Fig 10 :52:** *"Bring a characterised residual, never the source."* Lead with the shape claim and the refuter.
- **Fig 4 :22:** *"Only methods cross up. Only head starts come down."* The formula may be given as a method; a recording of a conclusion may not be pushed as evidence.
- **Fig 9 :27-28:** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would count as a failure before giving them the essays.
- **Fig 2 :40:** *"agreement about the world is worthless when the agreeing frames share an evidence pool."* A recipient who has absorbed all eight essays before answering has joined the frame being checked.
- **Seat Map :163:** *"High correlation is disqualifying for a verdict and efficient for a convention."* Do not select recipients for likely agreement.
- **Fig 8 :39:** *"So a search that finds nothing is never a proof of absence."* A venue that declines is not a refutation.

## The two-stage offer, restated

1. **Stage 1.** Send the shape claim, its mode, and the pre-registered refuter. Ask what would count as a failure. Record the answer before any theory is shown.
2. **Stage 2, opt in.** If they are curious, offer the figure text, the canonical usage rule and the essays. Remind them the figures, not the summary, are the authority.
3. **Stage 3.** Offer the eight-step loop as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

Stage 1 is cheap for the recipient and preserves their independence. Stage 2 is opt-in by construction. Stage 3 sends a generator, which Fig 4 permits. No agreement from any stage is ever pooled as corroboration.
