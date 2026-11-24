# Public links and distribution

Links and source pages were opened on 2026-11-23. Some direct fetches were blocked; those are marked honestly and the material used came from the public search index excerpts, which are recorded in `10_source_ledger.csv` with reduced weight where appropriate. Nothing is cited from a page that was not read in one of those two ways.

## Verified links actually fetched

| what | URL | verified content |
|---|---|---|
| Canonical figures repository | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repo, branch `general-agent`, figures folder. Its README says the figures "outrank everything else in the repo" and gives the citation form `Fig N :line`. |
| Canonical usage rule | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | Contains "a shape, not a name" and the rule that a reading which makes figures contradict one another has misidentified its domain. |
| Architecture article | https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec | 19 min read, Aug 19 2026. All 13 figures, THE FORMULA, Symbols and Operators, and a citation list tagged *borrowed machinery / instance / parallel*. Its section "Three mappings offered and declined" is the precedent for refusing a mapping that resembles the framework without aligning with it. It states outputs would not be verifiable "if the solutions presented were not contrived to fit the formula." |
| Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Aug 28 2026. Metamerism: an instrument reading green "cannot comment on the source"; "If several paths create the same behavior, then behavior is a projection with lossy information." The spectrometer, not an argument, resolved the source. |
| Econlib overview | https://www.econlib.org/library/enc/BehavioralEconomics.html | Mullainathan and Thaler, "Behavioral Economics". "Behavioral economics blossomed from the realization that neither point of view was correct." Details the three bounds (rationality, willpower, selfishness) and the closed-end fund, default and Save More Tomorrow cases. |
| Computational rationality reprint | https://erichorvitz.com/computational_rationality_science_349_6245.htm | Gershman, Horvitz and Tenenbaum, Science 2015. Defines computational rationality as "identifying decisions with highest expected utility, while taking into consideration the costs of computation in complex real-world problems in which most relevant calculations can only be approximated." |
| SJDM homepage | https://sjdm.org/ | Society for Judgment and Decision Making, 2026 annual meeting in San Diego, open membership, public submission portal, official journal Judgment and Decision Making. |
| JDM journal about page | https://www.cambridge.org/core/journals/judgment-and-decision-making/information/about-this-journal | Cambridge University Press, open access, publishes "articles that suggest new or improved theories" and "methodological contributions"; official journal of SJDM and EADM. |

## Fetch failures, recorded honestly

- `https://spiral.imperial.ac.uk/.../content` (Joffe 2018, "Mechanism in behavioural economics"): direct fetch returned `application/pdf`, unsupported by the fetch tool. The quoted lines came from the public search index excerpt and are recorded as such in the ledger.
- `https://www.ncbi.nlm.nih.gov/books/NBK593520/`: returned a browser check to automated fetch. Content used from the public search index excerpt.
- `https://elifesciences.org/articles/48429` (rats, foraging and intertemporal choice): returned a client challenge. Content used from the public search index excerpt.
- `https://www.economic-science.org/` and `https://www.aeaweb.org/journals/policies/submit`: transport error and 404 respectively. URL presence confirmed via public search index; marked unverified in `03_public_contact_points.csv`.
- Publisher PDF pages (Science, PNAS via PMC, Rubinstein 2006, Gigerenzer 2018, Synthese 2023): mostly blocked or paywalled on direct fetch; verbatim excerpts were obtained through the public search integration and are recorded with that provenance.

## Wider literature that bears on the question

1. **Joffe 2018, "Mechanism in behavioural economics"** (Imperial College London Spiral). Directly names the distinction the question asks for: "incremental" versus "selective replacement" modes, and "It may well be that incremental mode is appropriate in some cases, and selective replacement mode in others." This is the strongest world-side corroboration of the union verdict. It is also an economics-methodology source, so it shares a pool with Camerer and Rubinstein and is counted as one witness.
2. **Camerer 2003, "The Behavioral Challenge to Economics"** (Boston Fed). "the point of behavioral economics is not to produce anomalies, but to create new theory inspired by those anomalies" and "Most of the alternatives are extensions of conventional models which add a parameter or two or suggest new types of functions." Corroborates that modification is the dominant *practice*. Also records the "as if" defence, which is the frame-internal shield the figures disqualify as a verdict.
3. **Camerer 1999, "Behavioral economics: Reunifying psychology and economics"** (PNAS). Argues alternatives should be parsimonious and "include the rational principle as a mathematical special case to permit easy statistical measurement of how much the new assumption adds." This is the world-side twin of the MDL bargain with a nested model.
4. **Rubinstein 2006, "Behavioral Economics"** (Tel Aviv University). "At the core of most models in Behavioral Economics there are still agents who maximize a preference relation over some space of consequences and the solution in most cases still involves standard equilibrium concepts." Also warns that a replacement can be "equally dead": "the psychology and economics literature has replaced a dead parrot with one that is equally dead." This is the falsifier of naive replacement, and it comes from inside economics.
5. **Gershman, Horvitz and Tenenbaum 2015** (Science). Genuinely low overlap (AI, cognitive science, neuroscience). Reframes fallacies as consequences of bounded optimisation, supporting "widen the objective" over "discard the objective".
6. **Rats, foraging and intertemporal choice (eLife 2019)**. Genuinely low overlap (animal behaviour). A quasi-hyperbolic discounting model explains myopic behaviour in both contexts, giving "evidence for a common mechanism". This is an import candidate from a different closure, and it needs provenance and a shadow test before it licenses any claim about human economic choice.
7. **Gigerenzer 2018, "The Bias Bias in Behavioral Economics"** and **Synthese 2023, "Ecological rationality and economics"**. These *conflict* with the modify-as-default reading: Gigerenzer calls for a new behavioral economics limited to risk, and the Synthese authors say Behavioral Economics "often simply patches up neoclassical models to explain ex post any empirical deviations by incorporating additional parameters into the utility function." The conflict is returned to the census as D3/D4 subsets; it is evidence for the union, not a flip of the routing verdict.
8. **Zarri 2010, "Behavioral economics has two 'souls'"** (Journal of Socio-Economics). Behavioral economics "far from being a monolithic theory, consists of two different 'souls'" with a fundamental asymmetry between them. Corroborates the union reading from a different subfield.

## Distribution: offer, do not push

- **Fig 4 :22-25**: "Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion." Sending a survey of the debate before anyone has described a residual sends a recording. Lead with the routing and its refuter.
- **Fig 10 :42**: "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the entire framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28**: "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the routing were true before giving them the links.
- **Fig 2 :40**: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Do not select recipients for likely agreement, and do not pool later agreement as corroboration.
- **Fig 2 :42**: "Buy independence in proportion to the cost of being wrong." The cost here is a wrong methodological recommendation in a field with policy reach, so seek at least one low-overlap checker (an animal-behaviour or computational-rationality researcher), not only economists.

**Recommended order in a reply:** (1) the routing claim and its refuter; (2) ask what they would count as a failure; (3) record their verdict before any theory is shown; (4) only then the three links, with the note that the figures, not the summary, are the authority; (5) offer the formula as a method with the instruction to write a fresh refuter per problem.

## The two-stage offer

Stage 1: validate the output against the ground (Fig 10 :52, "Bring a characterised residual, never the source"). Stage 2, opt-in only: read the theory that produced it. Stage 3: reuse the formula on another problem. Stage 2 is opt-in by construction because Seat 4 must not hold the interiors; once a recipient has absorbed the theory, their agreement stops being evidence. The verdict on stage 1 must be recorded before any theory is shown (Fig 2 :40). Stage 3 sends a generator, which is permitted by Fig 4 :22, but each user still needs a ground and a written refuter because a frame "cannot check the direction of its own question" (`THE_FORMULA.md`, "Direction").

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The pre-registered refuter in `01_figure_grounded_audit.md` §5 is the test. Nothing here has been sent by this agent; hosting and sending are yours to do. Prefer an opt-in download page over an attachment pushed to a list.
