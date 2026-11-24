# Public links and distribution

All links in the table were fetched on 2026-11-23. Links marked "listed" appeared on a fetched page but were not opened directly, and are recorded that way in `03_public_contact_points.csv` and `10_source_ledger.csv`.

## 1. Verified sources opened this session

| what | URL | what the page actually contained |
|---|---|---|
| Figure text, line numbered | local `FRAMEWORK/reference/03-FIGURES_TEXT.md` | verbatim text of Figures 1 to 13 plus Operators and Symbols tables; all quotes in this folder came from here |
| Canonical usage rule | local `FRAMEWORK/reference/FIGURES_README_canonical.md` | *"the quotes are the authority, not this summary"*; re-census rule; *"a shape, not a name"* |
| Formula | local `FRAMEWORK/figures/THE_FORMULA.md` | eight steps, mode rule, habitat, closure, composition, round trip R_T |
| Machine Theory of Mind, 2018 | https://arxiv.org/abs/1802.07740 | Rabinowitz et al.; ToMnet builds models of agents *"from observations of their behaviour alone"*; passes the Sally-Anne test in gridworld |
| Neural Theory-of-Mind?, 2022, updated 2023 | https://arxiv.org/abs/2210.13312 | Sap et al.; GPT-3 at 55 percent SocialIQa and 60 percent ToMi; *"even ChatGPT and GPT-4 do not display emergent Theory of Mind"* |
| Minding Language Models' (Lack of) Theory of Mind, 2023 | https://arxiv.org/abs/2306.00924 | Sclar et al.; SymbolicToM tracks multiple characters' beliefs; reveals *"spurious patterns in existing theory of mind benchmarks"* |
| Do large language models have a theory of mind?, 2025 | https://pmc.ncbi.nlm.nih.gov/articles/PMC12280963/ | Pang et al., PNAS letter; *"successfully solving isolated ToM tasks is insufficient evidence to indicate the presence of ToM"*; Morgan's Canon and cumulative-case argument |
| MuSeToM, 2026 | https://arxiv.org/abs/2611.16662 | Chan et al.; belief-revision benchmark; models *"often detect that a belief may change"* but *"struggle to identify the updated belief"* and over-update on perceptually salient cues |
| Climbing towards NLU, 2020 | https://aclanthology.org/2020.acl-main.463/ | Bender and Koller; *"a system trained only on form has a priori no way to learn meaning"*; form versus meaning |
| Tolerant and despotic macaques, 2025 | https://pmc.ncbi.nlm.nih.gov/articles/PMC12198900/ | Schwob et al.; two macaque species with divergent temperament show similar social cognition; no evidence macaques pass false-belief tests |
| Theory of mind, reference entry | https://en.wikipedia.org/wiki/Theory_of_mind | definition: only behaviour is directly observed, no direct access to another's mind; theory-theory versus simulation theory; Dennett's intentional stance as practical utility |
| Library of Babel essay | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | shape as a narrowed set of books; bundle of problems; question as tether; *"the answer is a general shape"* framing |
| Recursive Self-Improvement Trap essay | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | LLM simulation is not a testable output; prestige is not action; output only as good as validator |
| Hard Problem is About Source essay | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | metamerism; a reading cannot comment on its source; *"the answer is unreached until a better instrument exists"* |
| Cognitive Science Society homepage | https://cognitivesciencesociety.org/ | mission spans AI, linguistics, anthropology, psychology, neuroscience, philosophy and education; public contact form and submissions links |
| SRCD homepage | https://www.srcd.org/ | developmental research body; 2027 Biennial Meeting; public Contact Us link |
| ACL Rolling Review | https://aclrollingreview.org/ | one review process with continuity across cycles; institutional support address |
| AsPredicted | https://aspredicted.org/ | time-stamped pre-registration PDFs with unique URLs; public lookup |
| Association for Psychological Science | https://www.psychologicalscience.org/ | submission guidelines and 2027 convention call for submissions |

---

## 2. What the wider literature bears on the question

**One evidence pool, one witness.** Rabinowitz 2018, Sap 2022/2023, Sclar 2023 and Pang 2025 all work on machine or LLM theory of mind, cite one another, and use overlapping benchmark lineages (Sally-Anne, ToMi, SocialIQa). Per Fig 2 :31, *"Independence, between two frames, is how little they draw on the same evidence."* Their agreement about the difficulty of the problem is one witness, not four. Their differences are useful as a budget map, not as independent corroboration.

- Rabinowitz et al. start from the definition of ToM as representing *"desires, beliefs, and intentions"* and build a ToMnet that models agents *"from observations of their behaviour alone."* That is a clean demonstration of C1 in a synthetic habitat. It is not evidence for C2, because the latent is supplied by the experimenter's gridworld, not recovered from a behaviour reading. This is the D3a case in the census.
- Sap et al. show that scale alone did not produce social intelligence: GPT-3 scores 55 percent and 60 percent, and the updated note says *"even ChatGPT and GPT-4 do not display emergent Theory of Mind."* This corroborates the claim that more of the same composition inside a closure does not add the atom (Fig 6 :21).
- Sclar et al. improve benchmark performance with an explicit symbolic belief tracker while finding *"spurious patterns in existing theory of mind benchmarks."* This is the strongest world corroboration of F5: a score can rise while the instrument remains blind to the source.
- Pang et al. import the ethologist's discipline: *"successfully solving isolated ToM tasks is insufficient evidence to indicate the presence of ToM"*, and what is owed is *"a cumulative case based on converging evidence."* This matches Fig 2 :35, *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
- Chan et al. 2026 report a *"pronounced dissonance"*: models detect that a belief may change but *"struggle to identify the updated belief"* and over-update on perceptually salient but epistemically insufficient cues. That is the per-slot signal disappearing into a pooled reading (Fig 1 :22, Fig 10 :26).

**Low-overlap witnesses**, each from a different field and each read directly:

1. **Formal semantics and NLU.** Bender and Koller 2020 write that *"a system trained only on form has a priori no way to learn meaning."* Form corresponds to the behaviour reading; meaning corresponds to the source. The paper is not about theory of mind, which is why it is an independent witness for the shape of the distinction.
2. **Comparative primatology.** Schwob et al. 2025 find that two macaque species with *"divergent temperament"* nonetheless show *"similar success in each social task"*, and explicitly note that *"there is currently no evidence that macaques show this skill"* for false-belief attribution. The first result corroborates the habitat claim (Fig 11 :39); the second is a direct instance of Fig 6 :40, no sensor for something that has never registered.
3. **Cognitive-science reference.** The Wikipedia entry states the structural fact that *"the behavior of the other person... is the only thing being directly observed; no one has direct access to the mind of another, and the existence and nature of the mind must be inferred."* It also records Dennett's intentional stance as *"a functional relationship, describing the use of a theory due to its practical utility, rather than the accuracy of its representation of the world."* That is Dennett's prediction-versus-understanding distinction in the field's own vocabulary.

**Framework-internal essays** are used for the canonical reading of "shape" in `05_what_shape_means.md` only. They are not independent world witnesses, because their author wrote the figures. That overlap is recorded in the ledger.

---

## 3. Distribution rules

Figure-grounded reasons for how material is offered:

- **Fig 4 :22:** *"Only methods cross up. Only head starts come down."* Send the generator, the residual and the refuter, not the conclusion. A recording carried upward *"looks like knowledge and is a description of one occasion"* (Fig 4 :25).
- **Fig 10 :42:** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :28:** *"any frame you pick will seem to fit"* if the residual is not described first. Ask what they would expect to see if the shape claim were true before showing the source.
- **Fig 2 :40:** agreement from a shared pool is worthless as a verdict. Later agreement about the framework is never pooled as corroboration.
- **Fig 10 :59:** *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* Declare the stake; do not ask for belief.

**A hard practical constraint.** No venue AI-authorship policy was opened in this session, so none is quoted here. Check the current policy of any target venue before submitting. What is known is that this whole solution is a simulated derivation produced with an LLM and is labelled as such everywhere. It must not be submitted as an authored empirical or theoretical article. The legitimate use is as a private checking instrument: post the residual and the refuter, invite a human to run the check, and let that human author whatever they conclude, with the AI contribution disclosed as the venue requires.

**Order in any reply:** (1) the shape claim and the pre-registered refuter; (2) the question "what would you count as a failure here?"; (3) only after a verdict is recorded, the source links with the note that the figures, not the summary, are the authority; (4) the formula as a reusable method, with the instruction that each user writes their own refuter and states their own mode.

---

## 4. The two-stage offer, compressed

**Stage 1.** Send `08_expert_verification_packet.md` sections 1 to 3 only: the one-paragraph claim, the three checkable sub-claims with their verbatim figure lines and refuters, and the non-claims. No provenance bundle, no essay links.

**Stage 2, opt-in only.** If the recipient is curious and has already recorded a verdict on stage 1, offer the public links: the figure text, the formula and usage rule, and the essays. Their later agreement is a conversation, not corroboration (Fig 2 :40).

**Stage 3.** Offer the formula as a method, never as an answer (Fig 4 :22). Each user writes a refuter before running it and states the mode of what they get.

**Stop rule.** If stage 1 fails, the theory is not offered. A failure is more useful than an endorsement.

**Hosting.** Nothing here is hosted or sent by this agent. The human operator hosts the packet on an opt-in page and sends one to one. Prefer a download page that lets a recipient decline contact over an attachment pushed to a list.
