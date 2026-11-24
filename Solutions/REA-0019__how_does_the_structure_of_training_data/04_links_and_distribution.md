# Public links and distribution

Every URL below was fetched and read on 2026-11-23. Both websearch attempts in this session returned no results, so sources were located by fetching canonical URLs directly; the 403 and 500 failures recorded at the end are reported rather than hidden.

## 1. Verified framework links (authority)

| what | URL | verified content |
|---|---|---|
| Verbatim figure text with line numbers (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Figures 1 to 13 plus Operators and Symbols tables, one SVG text element per line with figure line numbers. Every `Fig N :line` citation in this folder was checked against this file. |
| Canonical figures README (local) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a shape, not a name" and "Indiscernibility is not identity." |
| Figures folder, branch `general-agent` | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public SVGs and formula; the citation form `Fig N :line` is defined in its README. |
| Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | "the truly testable output would need to be derived from the real architecture or working the formula yourself." Also the prestige/action rule. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | "If several paths create the same behavior, then behavior is a projection with lossy information." Also: "The answer is unreached until a better instrument exists." |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Also: "text is mostly context with some subtext and almost no pretext." |
| They're Scanning Books When They Should Be Studying Nature | https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should | "A corpus is the compressed output of human minds; the capacity that produced it is a generator, and outputs do not contain their generator." Also: "the right structure causes emergence, and scale only helps once the structure is right." |
| How Intelligence Actually Works | https://adventuresinml.substack.com/p/how-intelligence-actually-works | "The test that environment applies is what we call fitness." Also the provenance-loss and union-horizon thought experiments. |

The other three essays in the canonical set (How a Society of Agents Would Work, Arrival of the Fittest: The Tether, and the Medium architecture article) are listed in `05_what_shape_means.md` with the quotes recorded in the calibration exemplar; they were not re-fetched in this session and are marked as such in the ledger.

## 2. Wider literature actually read (secondary only)

Grouped by field so overlap is visible. These sources corroborate or strain the shape; they never decide it.

- **Mathematics and learning theory.** "No free lunch in search and optimization" (Wikipedia, fetched 2026-11-23): "any two algorithms are equivalent when their performance is averaged across all possible problems." This is the Wolpert and Macready result; it predicts that no learner is best independent of the problem distribution, which is the habitat.
- **Machine learning, representation.** "Inductive bias" (Wikipedia, fetched 2026-11-23): "Without any additional assumptions, this problem cannot be solved since unseen situations might have an arbitrary output value." The extra assumptions are exactly the atom and bond inventory.
- **Information theory and model selection.** "Minimum description length" (Wikipedia, fetched 2026-11-23): "any regularity in a given set of data can be used to compress the data, i.e. to describe it using fewer symbols than needed to describe the data literally." Shares the Rissanen citation already used in Fig 5, so its agreement with the figures is not independent.
- **Machine learning, out-of-distribution.** Arjovsky, Bottou, Gulrajani and Lopez-Paz, "Invariant Risk Minimization", arXiv:1907.02893 (2019, revised 2020), fetched 2026-11-23: "IRM learns a data representation such that the optimal classifier, on top of that data representation, matches for all training distributions" and "enable out-of-distribution generalization." A direct corroboration of the multiple-training-distributions (import) condition.
- **AI practice and data volume.** Halevy, Norvig and Pereira, "The Unreasonable Effectiveness of Data", IEEE Intelligent Systems 2009, via the Google Research blog post fetched 2026-11-23: "we should stop acting as if our goal is to author extremely elegant theories, and instead embrace complexity and make use of the best ally we have: the unreasonable effectiveness of data." This is the main source that *strains* the filter verdict. Re-census: it argues for volume as a budget under a fixed representation; it does not claim volume adds a primitive. The conflict was returned to the census and did not flip the verdict.
- **AI practice and data quality.** "Data-centric AI" (Wikipedia, fetched 2026-11-23): "emphasizes on improving the quality, consistency and representativeness of the data used to train machine learning models, rather than focusing primarily on optimizing model architectures or algorithms."
- **HCI and responsible AI.** Sambasivan, Kapania, Highfill, Akrong, Paritosh and Aroyo, "Everyone wants to do the model work, not the data work: Data Cascades in High-Stakes AI", CHI 2021, via the Google Research publication page fetched 2026-11-23: "Data Cascades---compounding events causing negative, downstream effects from data issues---triggered by conventional AI/ML practices that undervalue data quality... pervasive (92% prevalence), invisible, delayed, but often avoidable." Directly corroborates the channel-decay finding.
- **Computer science folklore.** "Garbage in, garbage out" (Wikipedia, fetched 2026-11-23): "flawed, biased or poor quality (garbage) information or input produces a result or output of similar ("garbage") quality." Low evidentiary weight, recorded for completeness.
- **Animal behaviour and psychology (low overlap).** "Reinforcement" (Wikipedia, fetched 2026-11-23): "the pattern of reinforcement strongly affects how fast an operant response is learned, what its rate is at any given time, and how long it continues when reinforcement ceases." Also: "Specific schedules of reinforcement reliably induce specific patterns of response, and these rules apply across many different species." This is the strongest *independent* corroboration of the central claim: the schedule (structure) changes what is learned at fixed outcome values.
- **Ecological psychology (low overlap).** "Affordance" (Wikipedia, fetched 2026-11-23), quoting Gibson 1979: "The affordances of the environment are what it offers the animal, what it provides or furnishes, either for good or ill. ... It implies the complementarity of the animal and the environment." Corroborates the agent-and-habitat finding from a non-ML field.
- **Philosophy of mind (low overlap).** "Extended mind thesis" (Wikipedia, fetched 2026-11-23), reporting Clark and Chalmers 1998: "some objects in the external environment can be part of a cognitive process" and a "coupled system" can be "a complete cognitive system of its own." Corroborates the same finding, but is an argument, not a measurement.

Overlap warning: the ML-theory sources share one evidence pool with each other, and the MDL source shares a cited author with Fig 5. The low-overlap witnesses (reinforcement schedules, affordances, extended mind) are separate pools but are analogies, not measurements of a neural network. Agreement across them is corroboration of the *mechanism shape*, not a ground reading of the claim.

**Fetch failures, recorded honestly.** `https://dl.acm.org/doi/10.1145/3411764.3445518` returned 403 and `https://www.deeplearning.ai/the-batch/data-centric-ai-development-part-2/` returned 500 on 2026-11-23. The CHI paper was read via the Google Research publication record instead; the DeepLearning.AI article was not used as a source, only as a reference listed by the Wikipedia Data-centric AI page.

## 3. Distribution: offer, do not push

- **Fig 4 :22**: "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter.
- **Fig 10 :42**: "A verifier that can reconstruct the claim cannot verify it." A reader who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27**: "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the articles.
- **Fig 2 :40**: "agreement about the world is worthless when the agreeing frames share an evidence pool." A send selected for likely agreement produces a convention, not corroboration.
- **Fig 2 :35**: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Ask for a failure, not endorsement.

**Recommended order in a reply:** (1) the shape claim and the four-part dependence; (2) the five pre-registered refuters and the question "what would you count as a failure?"; (3) record that verdict; (4) only then the framework links, with the note that the figures, not the summary, are the authority.

## 4. The two-stage offer (three stages if invited)

1. **Stage 1:** residual, shape claim, mode and refuter. No theory. The recipient checks the output without holding the framework's interior (Fig 10 :52).
2. **Stage 2, opt-in only:** the three framework links. Their stage-1 verdict is already recorded; later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3, opt-in only:** the formula as a reusable method. Each user states their own ground, writes their own refuter before the run, and labels the mode of what they get (Fig 4 :22; Formula, "Direction").

**Hard precondition:** stages 1 to 3 only work if the stage-1 output can be refused. It can: five refuters are written in `01_figure_grounded_audit.md` section 4 and repeated in `08_expert_verification_packet.md`.

## 5. Zip and hosting

The folder `C:\Users\Admin\Desktop\Project Pathfinder\Solutions\REA-0019__how_does_the_structure_of_training_data\` contains the twelve working files. This agent can assemble an archive locally; it cannot upload it or send it to anyone. Hosting (Drive, Dropbox, a repo release) and sending the link is yours to do. Prefer a link that lets a recipient decline contact, an opt-in download page is closer to the figures' rule than an attachment pushed to a list.
