# Public links and distribution

All links below were fetched and read on 2026-11-23, except where a fetch failed and that failure is stated. URLs cited in `10_source_ledger.csv` are the exact pages opened.

## Verified framework sources

| what | URL | verified content |
|---|---|---|
| Verbatim figure text | `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local) | Figures 1 to 13, Operators and Symbols tables, one line per SVG text element, with line numbers. Authority for every `Fig N :line` quote in this folder. |
| Canonical usage rule | `FRAMEWORK/reference/FIGURES_README_canonical.md` (local) | *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* |
| The formula | `FRAMEWORK/figures/THE_FORMULA.md` (local) | Eight-step loop, the three questions at step 7, the mode rule, and the Direction discipline on binding the sought-for shape as an ordinary term. |
| Full architecture (Medium) | https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec | Listed here from the exemplar's verified record; not refetched this session. Treat as a secondary pointer, not a primary quote source. |
| Worked narrative | https://adventuresinml.substack.com/p/how-intelligence-actually-works | Opened 2026-11-23. Six-term derivation, Rules 1 to 5, provenance loss, distinction horizon and union horizon, RLVR as ground, and *"the answer doesn’t exist until the question is contacted."* |
| Tacit knowledge essay | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Opened 2026-11-23. Context, subtext, pretext; Polanyi's *"we can know more than we can tell"*; *"When contact isn’t possible, the best you can send is a plain description of what you’d expect to see, because anyone can check that against the world."* |
| Source / metamerism essay | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Opened 2026-11-23. *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"The answer is unreached until a better instrument exists."* |
| Recursive self-improvement trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Opened 2026-11-23. *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* Also the simulacra admission used in `README.md` and `01`. |

## Wider literature that bears on this question

Grouped by field, with overlap noted. The verdict comes from the figures; these are corroboration only.

1. **Neuro-symbolic AI (one witness, not two).** Bhuyan, Ramdane-Cherif, Tomar and Singh, *Neuro-symbolic artificial intelligence: a survey*, Neural Computing and Applications 36, 2024, https://link.springer.com/article/10.1007/s00521-024-09960-z. Quote: *"develop AI systems with more human-like reasoning capabilities by combining symbolic reasoning with connectionist learning."* Garcez and Lamb, *Neurosymbolic AI: the 3rd wave*, Artificial Intelligence Review 56, 2023, https://link.springer.com/article/10.1007/s10462-023-10448-w. Quote: *"seeking to bring together robust learning in neural networks with reasoning and explainability by offering symbolic representations for neural models."* These two share an evidence pool, so they count once. Both corroborate the two-frame shape and neither settles which coupling wins. That silence is F12, not an oversight.

2. **Cognitive science (low overlap).** *Dual process theory*, Wikipedia, https://en.wikipedia.org/wiki/Dual_process_theory, read 2026-11-23, citing Evans, Stanovich and Kahneman. Quote: *"our System 1 (intuition) is more accurate in areas where we've gathered a lot of data with reliable and fast feedback."* This corroborates F3 and Fig 11 :40, *"An improvement that does not change contact changes nothing, however much it improves."* Fast judgment is accurate only where a reliable ground has paid often. It also corroborates the caution in F2: fast and slow are not two votes to be averaged.

3. **Philosophy of knowledge (low overlap).** Michael Polanyi, *The Tacit Dimension*, University of Chicago Press, https://press.uchicago.edu/ucp/books/book/chicago/T/bo6035368.html, read 2026-11-23. Quote: *"we can know more than we can tell."* This is the unnameable register the formal frame faces. Corroborates Fig 6 :30, *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."*

4. **Game AI and engineering (low overlap).** Silver et al., *Mastering the game of Go with deep neural networks and tree search*, Nature 529, 2016, https://www.nature.com/articles/nature16961. Quote: *"We also introduce a new search algorithm that combines Monte Carlo simulation with value and policy networks."* The policy and value networks are the fast frame; the rule-bound tree search is the slow frame; the win or loss is the ground that neither can move. Corroborates F3 and F5 at a different closure. It does not settle the general architecture, because Go has an explicit, finite rule set.

5. **Formal methods (low overlap).** Klein et al., *seL4: Formal Verification of an OS Kernel*, SOSP 2009, https://dl.acm.org/doi/10.1145/1629575.1629596. Quote: *"Complete formal verification is the only known way to guarantee that a system is free of programming errors."* Barbosa et al., *Generating and Exploiting Automated Reasoning Proof Certificates*, CACM 2023, https://cs.stanford.edu/~niemetz/publications/2023/BarbosaBCDKLNNOPRTZ-CACM23.pdf. Quote: *"it is possible to provide strong correctness guarantees for an automated reasoner without having to trust the tool at all. The idea is to separate proof finding from proof checking."* Alrawajfeh, *What Does a Machine-Checked Proof Actually Verify?*, 2026, https://talalalrawajfeh.eu/blog/mathematics-formalization/. Quote: *"machine checking establishes the correctness of a proof with respect to an encoded statement, while the correspondence between that statement and the intended theorem remains outside that guarantee."* The first two corroborate F5. The third corroborates F12 from the formal side: the checker's guarantee does not reach the intended, context-sensitive claim, which is exactly why a fast frame is needed and why its contribution needs a source gate.

6. **LLM evaluation (one witness, not three).** McKenna et al., *Sources of Hallucination by Large Language Models on Inference Tasks*, Findings of EMNLP 2023, https://arxiv.org/html/2305.14552v2. Quote: *"much of this performance is achieved by (1) recall of relevant memorizations and (2) corpus-based biases like term frequency."* Wu et al., *Reasoning or Reciting?*, NAACL 2024, https://aclanthology.org/2024.naacl-long.102.pdf. Quote: *"they often also rely on narrow, non-transferable procedures for task-solving."* MIT News, *Reasoning skills of large language models are often overestimated*, 2024, http://news.mit.edu/2024/reasoning-skills-large-language-models-often-overestimated-0711. Quote: *"LLMs excel in familiar scenarios but struggle in novel ones."* These three draw on the same LLM-evaluation pool and count once. They corroborate F1 and F4: a fluent self-report from a shared training corpus is not a ground reading.

## Distribution: offer, do not push

- **Fig 4 :22-25** — *"Only methods cross up. Only head starts come down."* A recording carried upward looks like knowledge and is a description of one occasion. Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the residual, the shape and the refuter; offer links after.
- **Fig 10 :42** — *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the entire framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** — *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40** — *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* A mass send selected for people who already agree produces a convention, not corroboration.

**Recommended order in a reply:** (1) the residual in effect terms and the shape claim; (2) the five refuters, and the question of what they would count as a failure; (3) record their verdict; (4) only then the three framework links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

**Stage 1** is the residual, the shape and the pre-registered refuter. This is Fig 10 :52, *"Bring a characterised residual, never the source,"* and Fig 2 :45, *"Frames range against the ground. They do not negotiate with it."* The recipient checks the output without holding the framework's interior.

**Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence, so the stage 1 verdict must be recorded before any theory is shown, and later agreement is never pooled as corroboration (Fig 2 :40).

**Stage 3 sends a method, which is permitted** (Fig 4 :22). Each user writes their own refuter, states their own ground and labels the mode of what they get, because a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 work only if the stage 1 output survives. If any of the five refuters fires, stop and publish the failure.

## Zip

The folder itself is the packet. I can assemble a local archive on request; **I cannot upload it or send it to anyone.** Hosting it (Drive, Dropbox, a repo release) and sending the link is yours to do. Prefer an opt-in download page over an attachment pushed to a list.
