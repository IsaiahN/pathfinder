# Public links and distribution

All links below were fetched and read on 2026-11-23. Two arxiv IDs were opened in error during the search (2101.02751, a paper on coalescent tree geometry, and 2104.06272, a paper on RL training architectures). Neither bears on this question; both were discarded and are recorded here so the discarded search step stays visible rather than silently vanishing.

## Verified links actually fetched

| what | URL | verified content |
|---|---|---|
| Figured-out distinction source, framework essay | https://adventuresinml.substack.com/p/how-intelligence-actually-works | "How Intelligence Actually Works", Isaiah N, Sep 16 2026. States: "The definition of what we call General Intelligence is that a system can answer questions to problems it's never seen before and in environments it has no training data for." Also "Alignment asks what the thing is answerable to. A ground, something that refuses, a bill that gets paid." |
| Framework architecture and citation list | https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether | "Arrival of the Fittest: The Tether Architecture", Isaiah N, Aug 19 2026. All 13 figures, the formula, and a citation list tagged borrowed machinery / instance / parallel. Section "Three mappings offered and declined" explicitly declines the habitat-as-ecological-niche mapping. |
| Figures for direct download | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repo, branch general-agent. Figures 1-13 plus Operators and Symbols tables. README states the figures outrank everything else and gives the citation form `Fig N :line`. |
| Canonical usage rule | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | "a shape, not a name"; "Indiscernibility is not identity"; re-census rule for apparent contradictions between figures. |
| OpenReview | https://openreview.net/ | Open peer review platform. Venue index lists ICLR, ICML, NeurIPS, AAAI, TMLR, CogSci and an AAAI AI Alignment track. |
| JAIR | https://www.jair.org/index.php/jair | Journal of Artificial Intelligence Research. "JAIR invites submissions in all areas of AI." Open access, AI Access Foundation. |
| NeurIPS | https://neurips.cc/ | Main track, Position Paper track, Evaluations and Datasets track, Creative AI track. |
| Minds and Machines | https://link.springer.com/journal/11023 | "Journal for Artificial Intelligence, Philosophy and Cognitive Science." Hybrid model. |
| AI Alignment Forum | https://alignmentforum.org/ | Public posts on reward hacking, specification gaming, orthogonality and oversight. Account needed to post. |
| AAAI conferences | https://www.aaai.org/Conferences/conferences.php | Umbrella page for the main conference, AIES and the symposia series. |

## World literature that bears on the question

These are corroboration only. Full provenance and quotes are in `10_source_ledger.csv`.

- **Goodhart's law** (economics / measurement): "When a measure becomes a target, it ceases to be a good measure." The reason a narrow objective's score is not a ground.
- **Specification gaming** (Krakovna et al., DeepMind 2020): "a behaviour that satisfies the literal specification of an objective without achieving the intended outcome." The clearest public case of excellent optimization without the intended contact.
- **Reward hacking** (Wikipedia, AI safety): an agent "optimizes an objective function ... without actually achieving an outcome that the programmers intended." Also records the result that proxy and true reward are unhackable only if one is constant, so the failure is structural, not a bug to be patched away.
- **No free lunch** (Wolpert and Macready 1997): "any two algorithms are equivalent when their performance is averaged across all possible problems." Why more search inside one closure cannot buy universality.
- **Affordance** (Gibson 1979): "The affordances of the environment are what it offers the animal ... It implies the complementarity of the animal and the environment." A low-overlap corroboration of the vocabulary and habitat links. The framework declines an outright habitat-as-niche identity, so this is a mechanism-level parallel only.
- **Niche construction** (Odling-Smee, Laland and Feldman 2003): "the ecological process by which an organism alters its own (or another species') local environment." Same partial status as affordance.
- **Chollet, On the Measure of Intelligence** (2019): describes intelligence as "skill-acquisition efficiency" with priors, scope and generalization difficulty. The framework names this as a parallel measuring a different quantity. It conflicts with the demand for one number, and the conflict was returned to the census.
- **Orthogonality thesis** (Bostrom, via Wikipedia): "almost any level of intelligence can be combined with almost any goal." A genuine conflict with the figure verdict that capability is agent-and-habitat; returned to the census, verdict unchanged.

## Distribution: offer, do not push

- **Fig 10 :52** *"Bring a characterised residual, never the source."* Send the four-part shape and its refuters first. The links come only after a stage-1 verdict is recorded.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :60** *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Do not rank recipients by how likely they are to agree. A venue's prestige can fund a hearing; it cannot settle the claim.
- **Fig 2 :35** *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Do not ask for agreement.

**Recommended order in a reply:** (1) the shape claim and its six refuters; (2) ask what the reader would count as a failure; (3) record that answer; (4) only then offer the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1 before stage 2.** Send the residual, the shape claim and the pre-registered refuter. Ask what they would count as a failure. Never ask for trust or agreement.
2. **Stage 2 is opt-in.** If they are curious, offer the source links. Their later agreement is never pooled as corroboration, because a reader who has absorbed the theory shares the evidence pool with it (Fig 2 :40).
3. **Stage 3 is a method, not an answer.** The formula is a generator. Handing it over does not hand over a conclusion. Each user writes their own refuter and states their own mode before running it.

**Hard precondition:** stage 1 works only if the shape survives the six refuters. Until one has been run, this is a candidate, not a result.

## Hosting

I cannot upload or send anything. Hosting the packet (Drive, Dropbox, a repo release, a venue submission) and contacting people is yours to do. Prefer a link that lets a recipient decline contact, closer to an opt-in download than an attachment pushed to a list. No personal emails are collected or used anywhere in this folder.
