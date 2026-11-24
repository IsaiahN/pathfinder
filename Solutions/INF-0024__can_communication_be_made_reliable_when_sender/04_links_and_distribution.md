# Public links and distribution

All links below were fetched and read on 2026-11-23. Failed fetches were replaced with reachable copies, and the replacements are recorded. Every source used for a quote is in `10_source_ledger.csv` with author, venue, year, accessed date and a quote.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Shannon, A Mathematical Theory of Communication (1948), HTML edition | https://spinchange.com/the-mathematical-theory-of-communication/ | Full text with line-accurate introduction. "The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point." Scope boundary: "These semantic aspects of communication are irrelevant to the engineering problem." |
| Vanderschraaf and Sillari, Common Knowledge, SEP 2023 | https://plato.stanford.edu/archives/win2023/entries/common-knowledge/ | Full entry. Coordination, pure coordination games, Lewis conventions, skepticism about attaining common knowledge. Authors and year confirmed at https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=common-knowledge |
| Adriaans, Information, SEP 2024 | https://plato.stanford.edu/archives/sum2024/entries/information/ | Full entry. "Information reduces uncertainty"; overview of Shannon, Kolmogorov and semantic theories; "information is what information does". Authors and year confirmed at https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=information |
| Grounding in communication (Wikipedia entry, read 2026-11-23) | https://en.wikipedia.org/wiki/Grounding_in_communication | Clark and Brennan's theory: "grounding criterion", presentation and acceptance phases, evidence of understanding, least collaborative effort, media constraints on grounding. Entry last edited 2026-03-22. |
| Isaiah N, Decoding Tacit Knowledge (Substack, 2026-11-10) | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Also the context/subtext/pretext analysis and two-way grounding loop. |
| Isaiah N, The Hard Problem is About Source (Substack, 2026-08-28) | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Metamerism: "If several paths create the same behavior, then behavior is a projection with lossy information." An instrument that cannot discriminate sources demonstrates its own inadequacy. |
| Isaiah N, The Library of Babel (Substack, 2026-10-02) | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | "You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Also the proximity/vocabulary bootstrapping method. |
| Isaiah N, The Recursive Self-Improvement Trap (Substack, 2026-11-19) | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | "the truly testable output would need to be derived from the real architecture or working the formula yourself"; "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action." |
| Wang, Li, Han, Sun and Xu, Drift-Aware Adaptive Semantic Codec Update Strategy, arXiv 2026 | https://arxiv.org/abs/2611.23722 | "its performance depends on the consistency between training and target-domain data distributions" and "distribution drift can make offline-trained semantic codec models stale". A shared-code engineering result that corroborates the scope split. |
| arXiv Information Theory recent listings | https://arxiv.org/list/cs.IT/recent | Live listing of current cs.IT work; used to confirm the field is active and to locate the codec paper above. |
| IEEE Information Theory Society, contact page | https://www.itsoc.org/contact | Public role contact `[institutional contact: see source URL]` and an opt-in mailing list. The site states the contact form was disabled in June 2021 because of spam. No personal addresses used. |
| ISIT 2027 submission guidelines | https://2027.ieee-isit.org/index.php/submission-guidelines | EDAS submission, single-anonymous review, 2027-01-10 deadline, mandatory disclosure of AI use. Public role contacts for technical and publication questions. |
| Tether figures, public repository | https://github.com/IsaiahN/tether/tree/general-agent/figures | Figures 1 to 13, Operators and Symbols tables, and the README that says the quotes are the authority. Local verbatim extract: `FRAMEWORK/reference/03-FIGURES_TEXT.md`. |

### Fetch notes

The first attempt at the original Shannon PDF (`people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf`) failed because the fetched content type was `application/pdf` and could not be read as text. It was replaced with the HTML edition above, which was read in full. The attempt at `https://plato.stanford.edu/entries/conventions/` returned 404; the live entry is `entries/common-knowledge/`, and the stable archived URL was used. `https://www.itsoc.org/contact` returned 403 on the text fetch while the search result exposed its public content; only the role address already visible in that result is used, and no claim rests on content that was not read.

## Wider literature: what bears on the claim

1. **Shannon (1948)** fixes the scope of the fact-bearing question. Reliable reproduction is defined over a set of possible messages known at design time. His explicit exclusion of semantic aspects is not a dismissal of meaning; it is the boundary that forces the split in `01` F1. Cite it when explaining why "Shannon already solved this" answers only one of the two questions.
2. **Vanderschraaf and Sillari (SEP 2023)** supply the convention side from an outside field. The entry reports that Lewis himself later said "common knowledge" was an unfortunate term because there is no assurance the proposition is true or even known. That is the figure distinction between a convention (Fig 2 :41) and a verdict (Fig 2 :40), corroborated from a low-overlap field.
3. **Clark and Brennan (1991), via the Wikipedia entry opened here**, give the empirical shape of the round trip: presentation, acceptance, evidence of understanding, refashioning of referring expressions. The reported finding that pairs shortened "the next one looks like a person who's ice skating..." to "The ice skater" over repeated trials shows a convention being built through contact. It does not show that the built convention is a truth verdict. This corroborates Fig 4 :30 and Fig 2 :41.
4. **Adriaans (SEP 2024)** confirms that quantitative information theory and semantic information are not the same enterprise and that no unified concept is settled. This corroborates the unbundling in `01` F1 from a field with low overlap with the framework.
5. **Wang et al. (arXiv 2026)** is the closest current engineering witness to the shared-code assumption: drift breaks the match between trained codec and target domain. It is a real source, but it presupposes a shared code, so it corroborates the scope split and does **not** corroborate a solution to the no-shared-code case. Marked as such in the ledger.
6. **The four essays** are the framework author's own writing. They corroborate the figures but share an author and an evidence pool with them, so their agreement carries little independent weight. This is declared in `09_watson_answer.md` and the ledger.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 6 :30** : *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Lead with the claim and its refuter, stated in effects. Do not lead with the architecture.
- **Fig 10 :42** : *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the full framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** : *"describe it before you go looking, or any frame you pick will seem to fit"* (verbatim across the wrap). Ask what they would expect to see if the claim were true before giving them the source.
- **Fig 2 :40** : *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* A send selected for people likely to agree manufactures the disqualifying correlation.
- **Fig 4 :22** : *"Only methods cross up. Only head starts come down."* Stage 3 sends a method, which is permitted, not a conclusion.

**Recommended order in a reply:** (1) the two-domain claim and the four refuters; (2) ask what they would count as failure, and record it; (3) only then the sources, with the note that the figures, not the summary, are the authority; (4) if they ask, offer the formula as a method with the instruction to state a mode and a refuter for their own problem.

## The two-stage offer

- **Stage 1 before stage 2.** Fig 10 :52 *"Bring a characterised residual, never the source."* and Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."* The recipient checks the claim without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. Their verdict on stage 1 is recorded *before* any theory is shown and is never pooled as corroboration (Fig 2 :40).
- **Stage 3 sends a method.** The formula is a generator. Giving it away does not give away an answer (Fig 4 :22). The Recursive Self-Improvement Trap essay adds the warning that *"the truly testable output would need to be derived from the real architecture or working the formula yourself"*, so each user must write their own refuter first.
- **No trust request, no prestige appeal.** The same essay: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action."* The ask gives the claim a budget to be tried; it does not ask for endorsement.

**Hard precondition:** the two-stage offer only works if the stage-1 claim keeps its mode and its split. If it is rewritten as a single yes/no, it invites a verdict that the figures say is not available. Keep F1 of `01_figure_grounded_audit.md` in front of the links.

## Hosting

Nothing in this folder was sent by this agent. Hosting the packet on an opt-in download page, rather than pushing an attachment to a list, is closer to the figure's rule: let the recipient decline contact before reading. The packet in `08_expert_verification_packet.md` is the one to host.
