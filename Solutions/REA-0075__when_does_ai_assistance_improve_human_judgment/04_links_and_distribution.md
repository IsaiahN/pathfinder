# Public links and distribution

All links below were fetched and read on 2026-11-24. Failed fetches are recorded as failures rather than silently replaced.

## Verified sources actually opened

| what | URL | what was verified |
|---|---|---|
| Automation bias (survey of the field) | https://en.wikipedia.org/wiki/Automation_bias | Definition of automation bias; commission and omission errors; Parasuraman and Riley 1997 use/misuse/disuse/abuse; Cummings 2004; Lyell and Coiera 2017 systematic review; clinical decision support improved answers from 29% to 50% while 7% of correct unaided answers were changed incorrectly; aviation and health-care sectors. |
| Out-of-the-loop performance problem | https://en.wikipedia.org/wiki/Out-of-the-loop_performance_problem | *"Potential loss of skills and of situation awareness due to complacency and a lack of vigilance can make operators unable to operate manually in case of a system failure."* Endsley and Kiris 1995; *"Highly automated systems reduce the operator to a monitoring role, which gives an operator fewer chances to understand the system."* |
| Ironies of Automation | https://en.wikipedia.org/wiki/Ironies_of_Automation | Bainbridge 1983, *Automatica* 19(6):775-779. Automating most work leaves the operator without practice; operators need more training, not less, for rare interventions. |
| Extended mind thesis | https://en.wikipedia.org/wiki/Extended_mind | Clark and Chalmers 1998, *Analysis* 58(1):7-19; active externalism; Otto's notebook; the coupling condition; Adams and Aizawa 2010 "causal-constitutional fallacy" and "cognitive bloating" criticisms. |
| Google effect | https://en.wikipedia.org/wiki/Google_effect | Sparrow, Liu and Wegner 2011, *Science* 333:776-778; cognitive offloading (Risko and Gilbert 2016); Fisher et al. 2015; mixed replication (Camerer et al. 2018; Hesselmann 2020; Gong and Yang 2024 meta-analysis). |
| Are the Internet and AI affecting our memory? | https://www.nature.com/articles/d41586-025-00292-z | Helen Pearson, *Nature* 638, 26-28 (2025). GPS and search reliance case studies; the science on offloading; replication caveats. |
| The impact of generative AI on critical thinking | https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/ | Lee, Sarkar, Tankelevitch, Drosos, Rintel, Banks and Wilson, CHI 2025. 319 knowledge workers; *"higher confidence in GenAI is associated with less critical thinking, while higher self-confidence is associated with more critical thinking."* |
| When combinations of humans and AI are useful | https://www.nature.com/articles/s41562-024-02024-1 | Vaccaro, Almaatouq and Malone, *Nature Human Behaviour* 8, 2293-2303 (2024). 106 experiments, 370 effect sizes; synergy `g = -0.23`; augmentation `g = 0.64`; losses on decision tasks, gains on creation tasks; gains when human outperforms AI alone, losses when AI does. |
| How human-AI feedback loops alter human judgement | https://www.nature.com/articles/s41562-024-02077-2 | Glickman and Sharot, *Nature Human Behaviour* 9, 345-359 (2025). Bias amplification; participants unaware of influence; *"when humans interact with an accurate AI system, their judgements are improved."* |
| AI amplifies experts, not expertise | https://www.nature.com/articles/s41562-026-02604-3 | Sheng-Tun Li, *Nature Human Behaviour* World View, 29 Sep 2026. *"AI tools can amplify what people are able to do, but this may pose problems for the development of the next generation of experts."* |
| Petition style changes with AI writing support but outcomes do not improve | https://www.nature.com/articles/s41562-026-02579-1 | *Nature Human Behaviour* Research Briefing, 14 Oct 2026. Texts became more similar, outcomes did not improve; references Noy and Zhang 2023 (Science) and Doshi and Hauser 2024 (Sci. Adv.) for the productivity and homogeneity results. |
| Framework essays read for `05_what_shape_means.md` | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap ; https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context ; https://adventuresinml.substack.com/p/the-hard-problem-is-about-source ; https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | All four opened 2026-11-24 and quoted in `05`. All are by the framework author, so overlap is high. |

**Fetches that failed and were not cited.** `https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321` returned 403; `https://www.microsoft.com/en-us/research/publication/cognitive-forcing-functions-designing-for-appropriate-reliance-in-ai-decision-support/` returned 404; `https://www.hbs.edu/managing-the-future-of-work/research/Pages/navigating-the-jagged-technological-frontier.aspx` returned 404; two arXiv IDs tried on a hunch turned out to be unrelated papers. None of these appear in the ledger as sources. The Buçinca cognitive-forcing-functions result is referenced only through the Vaccaro et al. paper, which I did read, and is marked as a reference inside a source rather than an independently opened source.

## What the wider literature bears on the question

1. **Both halves are empirically real, and they come apart.** Vaccaro et al. find augmentation (human-plus-AI better than human alone, `g = 0.64`) and no synergy (worse than the better of the two, `g = -0.23`) in the same dataset. That is the figure's union compound measured at the ground: one lever clears one condition and leaves the other standing. Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
2. **Accuracy of the aid decides the direction.** Glickman and Sharot found amplification under biased AI and improvement under accurate AI. This corroborates Fig 2 :36-37: AI is an instrument for what it measures, and instruments can be wrong on axes they do not measure. It is not an argument for or against AI in general.
3. **The loss is a channel loss, not a ground loss.** Bainbridge 1983, Endsley and Kiris 1995, and the automation bias literature all describe a person who can no longer take over. Fig 10 :24: *"the ground does not decay, the channel does"*. Fig 11 :68: *"what you failed to reproduce is invisible until the goal fails"*.
4. **Confidence is not calibration.** Lee et al. 2025 found that confidence in GenAI predicted less critical thinking while self-confidence predicted more. Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
5. **Extended mind is a conditional, not a blanket licence.** Clark and Chalmers give the positive case (a constantly available, automatically endorsed notebook that plays the same role as memory); Adams and Aizawa give the "cognitive bloating" objection. The figure's version is Fig 11 :39: *"And capability is a property of agent-and-habitat, never of the agent alone."* An aid is part of the capability only while the coupling actually changes contact.

Agreement among these sources is not independent confirmation where they share a pool. The Nature Human Behaviour papers and the Microsoft/CHI paper draw on overlapping human-AI experiment literatures. They are several readings of a related pool, not many independent witnesses. Their value here is corroboration of the figure verdict, never a source of that verdict.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52** - *"Bring a characterised residual, never the source."* Lead with the two quantities and the refuter; offer the links after a verdict is recorded.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what the recipient would expect to see if the shape claim were true before giving them the theory.
- **Fig 7 :35** - *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* A mass send selected for people who already agree produces a convention, not corroboration.
- **Fig 2 :40** - *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*. Later agreement from a recipient who has read the theory is never pooled as evidence.
- **Fig 4 :22** - *"Only methods cross up. Only head starts come down."* The formula is a generator, so giving it away does not give away an answer.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the entire framework before being asked for a verdict has joined the frame being checked.

**Recommended order in a reply:** (1) the two quantities and the shape claim; (2) the five refuters, and the question "what would you count as a failure?"; (3) record the verdict; (4) only then, the four links, with the note that the figures, not the summary, are the authority; (5) the formula as a method, if asked, with the instruction to write a fresh refuter and state a mode.

One-to-one only. No bulk send, no automation, no misleading subject lines, and an opt-out line in every message. Public institutional submission portals in `03_public_contact_points.csv` are the intended route. Nothing is sent by this agent.
