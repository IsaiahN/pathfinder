# Public links and distribution

Every URL below was opened on 2026-11-23 unless noted. Where a direct fetch was blocked, that is stated rather than hidden, and the content used was the indexed abstract or the publisher's public author page. Full provenance with verbatim quotes is in `10_source_ledger.csv`.

## Verified primary links and what they say

| what | URL | verified content |
|---|---|---|
| Hauser and Bühlmann, JMLR 2012 | https://www.jmlr.org/papers/v13/hauser12a.html | Full abstract fetched. "interventional Markov equivalence defines a finer partitioning of DAGs than observational Markov equivalence and hence improves the identifiability of causal models." 13(79):2409 to 2464. |
| He and Geng, JMLR 2008 | https://www.jmlr.org/papers/v9/he08a.html | Full abstract fetched. "Because we cannot distinguish the different directed acyclic graphs (DAGs) in a Markov equivalence class learned from observational data, we have to collect further information on causal structures from experiments with external interventions." 9(84):2523 to 2547. |
| Yang, Katcoff and Uhler, ICML 2018 | https://proceedings.mlr.press/v80/yang18a.html | Full abstract and BibTeX fetched. Defines the interventional Markov equivalence class under general interventions; the abstract notes this is common in biology, where gene regulatory networks can be intervened on with reagents or deletions. PMLR 80:5541 to 5550. |
| Li, Jaber and Bareinboim, NeurIPS 2023 | https://proceedings.neurips.cc/paper_files/paper/2023/hash/368cba57d00902c752eaa9e4770bbbbe-Abstract-Conference.html | Abstract fetched. "learning from observational data in multiple domains is equivalent to learning from interventional data with unknown targets in a single domain." Defines S-Markov and S-FCI. |
| Brouillard et al., NeurIPS 2020 | https://proceedings.neurips.cc/paper/2020/hash/f8b7aa3a0d349d9562b424160ad18612-Abstract.html | Abstract fetched. Reports that most differentiable approaches do not use interventional data, which "can significantly alleviate identifiability issues". DCDI handles perfect, imperfect and unknown targets. |
| Méndez-Molina, Morales and Sucar, PMLR 2022 | https://proceedings.mlr.press/v186/mendez-molina22a.html | Full abstract fetched. "the interventional nature of the data generating process in RL favors the discovery of the underlying causal structure." PMLR 186:421 to 432. |
| Sauter et al., AAMAS 2024, CORE | https://ifaamas.org/Proceedings/aamas2024/pdfs/p1664.pdf | Abstract and method section read from the indexed PDF text; the direct PDF fetch was not supported by the fetch tool. States that passive observations alone are not enough to distinguish correlation from causation, and formulates causal discovery as a POMDP with informative interventions. |
| Sobel and Sommerville, Frontiers in Psychology 2010 | https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2010.00176/full | Full open-access article fetched. "Conditional probability information can be learned from observation, but actions typically provide conditional probability information not present in simply observing the environment." Four-year-olds in the discovery condition outperformed the observation condition. |
| Lapidow and Walker, Cognition 2020 | https://www.sciencedirect.com/science/article/abs/pii/S0010027720301347 | Full abstract and highlights read from the indexed abstract; the direct article fetch returned a block page. "Children use exploratory actions to discriminate between possible causal structures." Volume 201, 104315. |
| Recursive Self-Improvement Trap, essay | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Full essay fetched. "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Also the explicit simulator caveat quoted in `01`. |
| Library of Babel, essay | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Full essay fetched. Gives the proximity and narrowing account of shape: use the vocabulary you already have that is closest, then recurse. |
| Hard Problem is About Source, essay | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Full essay fetched. Metamerism: an instrument that reads green "cannot comment on the source", resolved by a spectrometer rather than an argument. |
| Decoding Tacit Knowledge, essay | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Full essay fetched. "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." |
| Canonical figures README | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | Read locally as `FRAMEWORK/reference/FIGURES_README_canonical.md`. States that the quotes are the authority and that the framework returns a shape, not a name. |
| Verbatim figure text with line numbers | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md | Read this session. Primary source for every `Fig N :line` citation in this folder. |
| The eight-step loop | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md | Read this session. Supplies the mode rule, the three guards, the refusal amendment, and step 7. |

## What the wider literature contributes, and what it does not

The ML pool, from Pearl's hierarchy through interventional equivalence classes to budgeted intervention policies, makes one point in several vocabularies: intervention refines what observation leaves equivalent. He and Geng (2008) collect further information from experiments with external interventions; Hauser and Bühlmann (2012) show interventional equivalence is finer; Yang, Katcoff and Uhler (2018) extend this to general interventions; Li, Jaber and Bareinboim (2023) treat multi-environment data as interventional data with unknown targets. These five sources share the same theoretical inheritance and much the same author network. Their agreement is **one pool talking**, which Fig 2 :40 disqualifies as a verdict.

The two psychology sources are genuinely low overlap. Sobel and Sommerville (2010) show that acting first beats observing first for four-year-olds learning a causal structure, and that not all self-generated action is equivalent. Lapidow and Walker (2020) show children selecting informative interventions to discriminate structures. They corroborate the shape from a field that does not use do-calculus or Markov equivalence classes.

The two RL sources (Méndez-Molina et al. 2022, Sauter et al. 2024) are the closest world analogues to the figure's loop: an agent acts, observes, and maintains an estimate of a causal graph. They are still ML-pool sources, so I do not double-count them.

None of these sources decides the verdict. The verdict is from the figures; the world sources only corroborate or conflict, and none conflicted.

## Distribution: offer, do not push

- Fig 10 :52 "Bring a characterised residual, never the source." Send the residual and the refuter first. A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Do not ask for agreement.
- Fig 9 :27 "describe it before you go looking, or". Ask what they would expect to see if the shape were true before offering the papers.
- Fig 7 :13 "agreement compounds, evidence does not". A crowd of agreeable readers adds vocabulary, not an anchor.
- Fig 4 :23 "Only methods cross up. Only head starts come down." The method can be offered freely; the conclusion should not be pushed.

**Order in a reply:** (1) the residual and its refuter; (2) ask what they would count as a failure; (3) record their verdict before any theory is shown; (4) only then the links, with the note that the figures and the papers, not this summary, are the authority; (5) offer the method as something they can reuse with their own refuter.

## The two-stage offer, staged explicitly

1. **Stage one.** Residual, shape claim, and pre-registered refuter. No theory, no links beyond the public papers that define the residual. The recipient's verdict on stage one is recorded first.
2. **Stage two, opt-in only.** If they are curious, offer the figure text and the method. Their later agreement is never pooled as corroboration, because they now hold the interior (Fig 2 :40).
3. **Stage three.** Offer the loop as a method to reuse. Each user writes their own refuter and states their own mode. *The Recursive Self-Improvement Trap*: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."

**Hard precondition:** stage one must stand on its own. If the residual and refuter are not checkable in a few minutes, the offer has failed and should not be sent.

## What I cannot do

I cannot host, upload, or send anything. Hosting a download page and doing the actual one-to-one approach is yours. Prefer an opt-in page that lets a recipient decline contact over an attachment pushed to a list. No personal emails are included in `03_public_contact_points.csv`, and no bulk send is described anywhere in this folder.
