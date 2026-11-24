# WATSON answer: when does adaptation build resilience and when does it undermine the system?

**Mode: `specified`, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, the condition under which an adaptive change to a system increases its capacity to keep meeting its ground (resilience), and the condition under which the same kind of change makes agents exploit the score and undermine the system. Option A: treat adaptation as a property of the agent, so a better or faster adapter is more resilient. Option B: treat capability as a property of agent and habitat, so the discriminator is whether the adaptive loop keeps an independent, non-updating ground and reads its residual per slot against it. What each leads to: A counts adaptation activity as success and cannot distinguish a healthy score from a drifted one; B yields a checkable discriminator, four pre-registered refuters, and an honest open slot where the ground instrument is not yet known.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** The gap between "score up means contact intact" and "score up while contact lost." Arity: two conditions plus a contact relation, so a union compound rather than one hard question. Symmetry: asymmetric; resilience is triangulation, exploitation is a named collapse genus. Scale: the loop runs at agent scale and population scale with a lossy transform between them.
- **Domain 1, single-agent adaptive loop.** Actors: agent, belief b, weighting w, action a, observation o', residual R, library Γ. Currency: per-slot residual, description length, actions spent. Anchor: a verifiable outcome the agent cannot update. Question type: partition (which compositions keep contact). First in dependency order.
- **Domain 2, population with a shared rank.** Actors: many agents, a shared library, something that ranks what they produce. Currency: the score. Anchor: the ground only while the rank ranges against it. Question type: union compound, two collapse genera plus the grounded case. Second; consumes Domain 1.
- **Domain 3, habitat and ecology.** Actors: introduced actors, conditions, relations. Currency: contact and cascade. Anchor: the ground, what settles whether the goal is still met. Question type: partition; enumerate the habitat, never compose it. Third; consumes Domains 1 and 2.
- **Domain 4, verification and conventions.** Actors: checker, anchor, convention. Currency: verdict versus convention. Anchor: must not update. Question type: partition; a verdict is not a convention. Last; governs all readings.
- **Order by dependency:** keep the anchor reachable; read residual per slot; check the objective before funding more adaptation; identify the collapse genus; enumerate the habitat cascade; carry the result across scale with a measured gap.

Strain test applied: the ecological literature defines resilience as a basin or return-time property, while the figures define the governing quantity as contact with an immovable anchor. Different objects, so no contradiction after re-census. The ecological definition is an import used for vocabulary only. See `01_figure_grounded_audit.md` §7.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the canonical figure text.

- Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." -> capability belongs to agent and habitat; adaptation that leaves contact untouched is not resilience. Domain 1 and 3.
- Fig 2 :30 "If it moves when you push on it, it is not an anchor." -> a score the agents can move is not a ground. Domain 4.
- Fig 2 :34 "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices." -> exploitation is coherent drift, invisible from inside. Domain 2.
- Fig 10 :47 "a convention that decides an outcome has stopped being one" -> a metric made into a target stops measuring the ground. Domain 2.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> the agent's own output cannot validate the agent. Domain 1.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> a global average can hide the live slot where failure starts. Domain 1; single-source.
- Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." -> no standing list of resilience-producing adaptation mechanisms. Domain 3.
- Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." -> resilience is a closed cycle with the ground inside it; exploitation is a chain that mistakes its output for the ground. Domains 1 and 2; application single-source.
- Fig 7 :13 "agreement compounds, evidence does not" -> more readers do not corroborate the claim. Domain 4.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> this simulated second seat shares the primary's evidence pool, so it is not a witness.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> a result carried from agent scale to population scale must have its gap measured.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> not finding a ground instrument here is not proof none exists.
- Fig 13 :134 "Unreachable is a verdict here, not a silence." -> the open slot is reported, not hidden.

Triangulation status: the contact verdict is triangulated across Fig 11, Fig 2 and Fig 1 (three separate statements with low overlap). The exploitation-genus verdict is triangulated across Fig 2, Fig 10 and Fig 1. The valence verdict is triangulated across Fig 11 and Fig 4. The per-slot rule and the cycle-sign application are single-source, marked as such. One strain is live and named: the ecological basin definition of resilience versus the figures' contact definition; different objects, import declared.

## WORLD (secondary sources read)

World sources corroborate only; they never overrule a figure line. Fields were chosen for low overlap.

- **Economics / measurement.** Charles Goodhart, "Goodhart's Law", Le Libellio d'AEGIS 9(4), 2013: "any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes". Predicts that a stable proxy breaks under targeting; corroborates Fig 10 :47. Also Marilyn Strathern, "Improving ratings", European Review 5(3), 1997: "When a measure becomes a target, it ceases to be a good measure." Overlap: distinct primary documents, but both restate the same observation, so they are one witness, not two.
- **Machine learning / engineering.** Victoria Krakovna et al., "Specification gaming: the flip side of AI ingenuity", Google DeepMind, 2020: "Specification gaming is a behaviour that satisfies the literal specification of an objective without achieving the intended outcome." Predicts that agents find shortcuts when the score is the target; corroborates Fig 2 :34 at the engineering scale. Overlap: independent of the figures.
- **Mathematics / formal theory.** Joar Skalse et al., "Defining and Characterizing Reward Hacking", NeurIPS 2022 / arXiv:2209.13085: "a phenomenon where optimizing an imperfect proxy reward function leads to poor performance according to the true reward function". Also: for all stochastic policies, two reward functions are unhackable only if one is constant. Predicts that the proxy/ground relation, not optimisation effort, decides the regime; corroborates Fig 1 :27 and F7. Overlap: cites Goodhart but is a distinct formal result.
- **Ecology.** C. S. Holling, "Resilience and stability of ecological systems", IIASA RP-73-003, 1973, as reported in Sonia Kéfi et al., Environmental Research Letters 17(4), 2022: resilience is "the ability of a system to withstand perturbations without shifting to a different state". Predicts thresholds and alternative basins; corroborates the need for an external reference, but is a different definition, so the strain is declared. Overlap: independent field.
- **Social-ecological systems.** Brian Walker, C. S. Holling, Stephen Carpenter, Ann Kinzig, "Resilience, adaptability and transformability in social-ecological systems", Ecology and Society 9(2):5, 2004: "Adaptability is the capacity of actors in the system to influence resilience." Also: "resilience is not always a good thing." Predicts that actors can move a system toward a desirable or an undesirable basin; corroborates Fig 11 :50. Overlap: independent field, though co-authored by Holling.
- **Framework-adjacent essays (high overlap, weak corroboration).** Isaiah N, "How a Society of Agents Would Work", 2026: agents updating on each other converge on "whoever had the most influence"; the group's agreement is never the verdict. Predicts coherent drift and the need for per-slot rates; corroborates Fig 2 and Fig 1, but shares author and evidence pool with the figures, so it counts as one witness.
- **Human cognition / instruments.** Isaiah N, "The Hard Problem is About Source", 2026: "If several paths create the same behavior, then behavior is a projection with lossy information." Predicts that a rising score cannot name its source; corroborates the open slot. High overlap declared.

No world source conflicts with the figure verdict; the conflict rule was not triggered. Most sources share either the framework author or a common Goodhart evidence pool, so their agreement is expected and carries little independent weight. The CNA 2022 report and the Cambridge Goodhart note were read as provenance checks, not additional verdict witnesses.

## VERDICT (from the figures)

Capability belongs to agent and habitat. Adaptation builds resilience when the loop keeps an anchor that does not update when agents push on it, measures residual per slot against it, and enumerates the habitat cascade before introducing new actors. It becomes exploitation when agents can move the score the loop uses as its ground: the score becomes another frame, the population converges on whoever has most influence over it or on a hidden shared source, and the drift is coherent, which is why nobody notices. The two collapse genera are structurally different (isomers), so their remediations differ. The framework does not name the correct ground for a given system; it returns the shape and the refuters. This is `specified`, ungrounded, candidate.

- **cost if wrong:** bounded and locatable. The discriminator is short to state and the four refuters are cheap to run. The real cost is spending the independence of outside readers by sending the full framework before their verdict, which Fig 2 :42 prices: "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape claim and its refuters.
- **undoable:** yes. The four domain verdicts are independent; one can fall without the others. No primitive has to be withdrawn and no import is required. A sent packet can be superseded by a corrected one.
- **reversed by:** a ground reading, not agreement. A controlled case where agent-only adaptation moves an independent ground reading while contact is fixed; a score under high-stakes targeting that keeps a stable independently measured ground correlation; a standing list of adaptive mechanisms beneficial across two residuals; or a single intervention that removes both collapse genera. Until one of these fires, the verdict stands as candidate. Prestige and consensus are not such instruments.

## Sources

- [Figures README, canonical (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [WATSON 60: the figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [The Formula, eight-step loop (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Goodhart's Law, Charles Goodhart 2013](https://lelibellio.polytechnique.fr/uploads/volume9_num4/articles/goodharts_law.pdf)
- ['Improving ratings': audit in the British University system, Strathern 1997](https://gwern.net/doc/statistics/decision/1997-strathern.pdf)
- [Goodhart's Law, CNA 2022](https://www.cna.org/analyses/2022/09/goodharts-law)
- [Specification gaming: the flip side of AI ingenuity, Krakovna et al. 2020](https://deepmind.google/blog/specification-gaming-the-flip-side-of-ai-ingenuity)
- [Defining and Characterizing Reward Hacking, Skalse et al. 2022](https://arxiv.org/html/2209.13085)
- [Resilience and stability of ecological systems, Holling 1973](https://pure.iiasa.ac.at/id/eprint/26/7/RP-73-003.pdf)
- [Ecological resilience: what to measure and how, Kéfi et al. 2022](https://iopscience.iop.org/article/10.1088/1748-9326/ac5767)
- [Resilience, adaptability and transformability, Walker et al. 2004](https://ecologyandsociety.org/vol9/iss2/art5/main.html)
- [How a Society of Agents Would Work, Isaiah N 2026](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [The Hard Problem is About Source, Isaiah N 2026](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Library of Babel, Isaiah N 2026](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [Decoding Tacit Knowledge, Isaiah N 2026](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Recursive Self-Improvement Trap, Isaiah N 2026](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- Folder material synthesized: `01`, `05`, `06`, `07`, `08`.
