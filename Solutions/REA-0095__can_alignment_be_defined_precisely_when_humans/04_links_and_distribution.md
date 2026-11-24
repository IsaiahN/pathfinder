# Public links and distribution

Every link below was fetched on 2026-11-24 unless marked otherwise. Failed fetches are recorded as failures rather than quietly replaced.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Verbatim figure text (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | 13 figures plus Operators and Symbols tables as text with SVG line numbers. Fig 2 is titled "The Ground and the Alignment Problem" and contains the anchor, independence, two collapses, correlation-valence and convention-guard lines used throughout this folder. |
| Figures for direct download | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repo, branch `general-agent`, folder `figures/`. Its README says the figures *"outrank everything else in the repo"* and gives the citation form `Fig N :line`. |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Nov 19 2026. Section "Alignment to What?" states the moving-target problem and that the Tether ties alignment to the ground, not to preferences or a reward model. Also the simulated-output warning and the prestige/action separation. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Nov 10 2026. Effect descriptions travel where lived history does not; a final section applies Fig 2 :35 directly to AI alignment and describes two navigators taking bearings on a fixed landmark. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Aug 28 2026. Metamerism: an instrument that reads green *"cannot comment on the source."* The answer is *"unreached until a better instrument exists,"* proven by the spectrometer, not by argument. |
| The Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Oct 2 2026. A question determines relevance; a small descriptive set gives *"a general shape of the answer";* a bundled question must be searched as several problems. |
| How a Society of Agents Would Work | https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work | Oct 22 2026. Applies the figures to multi-agent systems: separate frames, one ground, methods shared upward, per-slot rates not totals, and the line *"Ten copies watching the same thing are one opinion said ten times."* |
| Arrow's Theorem (SEP) | https://plato.stanford.edu/entries/arrows-theorem/ | Michael Morreau, first published 2014, substantive revision Dec 7 2025. *"possibilities for choosing rationally can be lost when individual preferences are aggregated into social preferences."* |
| Arrow's impossibility theorem | https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem | Formal statement and interpretation; notes Arrow's own remark that all ranked systems can work badly at times, and that rated (cardinal) methods fall outside the theorem. |
| Moral foundations theory | https://en.wikipedia.org/wiki/Moral_foundations_theory | Haidt, Joseph, Graham and others; *"morality is more than one thing."* Also records that political ideology may predict moral foundations rather than the reverse, a motivated-reasoning direction. |
| Cultural cognition | https://en.wikipedia.org/wiki/Cultural_cognition | Kahan and colleagues; values shape risk perception, information is selectively credited, and expert credibility is assessed by perceived value similarity. Directly relevant to "acceptable risk" disagreement. |
| Open Problems and Fundamental Limitations of RLHF | https://arxiv.org/abs/2307.15217 | Casper et al., 2023. Survey of fundamental limitations and a call for auditing and disclosure standards. |
| Concrete Problems in AI Safety | https://arxiv.org/abs/1606.06565 | Amodei et al., 2016. Wrong objectives, reward hacking, scalable supervision, safe exploration and distributional shift. |
| Constitutional AI | https://arxiv.org/abs/2212.08073 | Bai et al., 2022. *"The only human oversight is provided through a list of rules or principles,"* a precise convention that is not thereby a ground. |
| The Off-Switch Game | https://arxiv.org/abs/1611.08219 | Hadfield-Menell, Dragan, Abbeel and Russell, 2016/2017. An agent preserves its off switch when it is uncertain about the utility and treats human actions as observations. |
| NIST AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework | Released Jan 26 2023, being revised in 2026. Built through a consensus-driven, open process with public comments and workshops. |
| ACM FAccT | https://fatconference.org/ | Cross-disciplinary conference on fairness, accountability and transparency in socio-technical systems; public calls and author resources. |
| JAIR submissions | https://www.jair.org/index.php/jair/about/submissions | Free submission, explicit evidence requirement, structured abstract and reproducibility checklist. |
| Minds and Machines | https://link.springer.com/journal/11023/how-to-publish-with-us | AI, philosophy and cognitive science; public submission route. |
| AI & SOCIETY | https://link.springer.com/journal/146/how-to-publish-with-us | Knowledge, culture and communication; public submission route. |
| arXiv submission overview | https://arxiv.org/help/submit | Public submission routes for TeX or PDF. |
| European Commission Have Your Say | https://ec.europa.eu/info/law/better-regulation/have-your-say_en | Public consultation portal for EU better-regulation proposals. |
| Center for AI Safety contact | https://safe.ai/contact | Public web form for general inquiries. |
| Future of Life Institute contact | https://futureoflife.org/contact/ | Institutional inquiry routes. |
| FQxI | https://fqxi.org/ | Public essay competitions and contact route for foundational questions. |

### Fetches that failed (recorded, not hidden)

- `https://fatconference.org/call-for-papers` returned 404. The home page was used instead; it links the current call.
- `https://aies-conference.org/` returned a transport error. The venue is therefore **not** listed in `03_public_contact_points.csv`.
- `https://www.nist.gov/itl/ai-risk-management-framework/engage` returned 404. The main AI RMF page was used instead; its public Feedback link is noted in the CSV.
- Three guessed arXiv identifiers turned out to be unrelated papers (a 5G networking paper, a group-theory paper and a quantum optimisation paper). They were opened, recognized as wrong, and are not cited anywhere in this folder. This is recorded so a later reader knows the search was checked rather than assumed.

## Two things in the wider literature that bear directly on this question

1. **Arrow is a limit on a frame, not on a ground.** The theorem says no ranked aggregation procedure satisfies the stated conditions; it does not say no decision can be made, and it does not select values. Read with Fig 2 :41, it explains why precision about a convention is cheap and precision about a verdict is not. It governs D2 only.
2. **The AI safety literature supplies the instrument side.** *Concrete Problems in AI Safety* separates wrong objectives from expensive-to-evaluate objectives (scalable supervision); *The Off-Switch Game* shows that uncertainty about the objective is what preserves corrigibility; *Constitutional AI* shows that a precise rule list is a convention authored by a seat, which Fig 10 :18 says is not thereby grounded. Together they corroborate, from a different field, the split the figures decide.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52**: *"Bring a characterised residual, never the source."* Stage 1 sends the residual and the refuter, not the framework.
- **Fig 2 :45**: *"Frames range against the ground. They do not negotiate with it."* Ask what the recipient would count as a failure, not whether they agree.
- **Fig 2 :40**: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* Never pool later agreement as corroboration.
- **Fig 4 :22**: *"Only methods cross up. Only head starts come down."* Stage 3 gives away a method, not an answer.
- **Seat Map :163**: *"High correlation is disqualifying for a verdict and efficient for a convention."* No receptiveness ranking, no bulk send.
- **Fig 10 :59 to :60**: stakes must be declared. The first message states that this derivation is simulated and framework-sympathetic.

**Recommended order in a reply:** (1) the residual, the split, and the five refuters; (2) ask what they would count as a failure and which anchor they would use; (3) record their verdict before showing any theory; (4) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

- **Stage 1:** the split claim and its refuter. The recipient checks whether a precise definition can be a convention and a local shape without becoming a verdict. Their verdict is recorded before any framework material is shown.
- **Stage 2, opt-in only:** if curious, they receive the figure text, the alignment essay and the formula. Their later agreement is never counted as corroboration.
- **Stage 3:** offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. That is why the refuter leads. No agreement is requested at any stage.
