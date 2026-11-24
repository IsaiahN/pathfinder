# Public links and distribution

All links below were fetched and read on 2026-11-23 unless the entry says otherwise. Where a page was only named by another page and not opened, that is stated in the entry and in `10_source_ledger.csv`.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| The Mythos of Model Interpretability (Lipton) | https://arxiv.org/abs/1606.03490 | arXiv:1606.03490, v3 2017, presented at the 2016 ICML Workshop on Human Interpretability in Machine Learning. Abstract: interpretability is *"underspecified"*; papers offer *"diverse and sometimes non-overlapping motivations"* and *"many papers proclaim interpretability axiomatically, absent further explanation."* It names *"transparency to humans and post-hoc explanations as competing notions."* |
| Stop explaining black box models (Rudin) | https://www.nature.com/articles/s42256-019-0048-x | Nature Machine Intelligence 1, 206-215 (2019), published 13 May 2019. Abstract: *"trying to explain black box models, rather than creating models that are interpretable in the first place, is likely to perpetuate bad practice and can potentially cause great harm to society."* The way forward is stated as *"design models that are inherently interpretable."* |
| Goodhart's law (Wikipedia, Strathern 1997) | https://en.wikipedia.org/wiki/Goodhart%27s_law | Quotes Strathern: *"When a measure becomes a target, it ceases to be a good measure"* and Goodhart 1975: *"Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes."* |
| Attribute substitution (Wikipedia, Kahneman and Frederick 2002) | https://en.wikipedia.org/wiki/Attribute_substitution | *"It occurs when an individual has to make a judgment (of a target attribute) that is computationally complex, and instead substitutes a more easily calculated heuristic attribute."* Also: *"when someone tries to answer a difficult question, they may actually answer a related but different question, without realizing that a substitution has taken place."* |
| Overfitting (Wikipedia) | https://en.wikipedia.org/wiki/Overfitting | *"An overfitted model is a mathematical model that contains more parameters than can be justified by the data."* Also: *"The possibility of over-fitting exists when the criterion used for selecting the model is not the same as the criterion used to judge the suitability of a model."* This is the benchmark-versus-ground gap in F1 and F6. |
| Black box (Wikipedia, Bunge 1963 and Ashby 1956) | https://en.wikipedia.org/wiki/Black_box | *"multiple internal mechanisms can produce identical input-output behavior"* and Shannon's result that any external behaviour can be realised by indefinitely many internal structures. Also the observer caveat: *"Different observers, or the same observer using different instruments, may arrive at different descriptions of how the system behaves."* |
| Map-territory relation (Wikipedia, Korzybski 1933) | https://en.wikipedia.org/wiki/Map%E2%80%93territory_relation | *"the map is not the territory it represents, but, if correct, it has a similar structure to the territory, which accounts for its usefulness."* Also Valery via Bonini's paradox: *"Everything simple is false. Everything which is complex is unusable."* |
| Proof assistant (Wikipedia) | https://en.wikipedia.org/wiki/Proof_assistant | *"a software tool to assist with the development of formal proofs by human-machine collaboration."* On soundness: a bug that declares a false statement proven *"potentially invalidates every proof that has been checked with that system"*; responses include small checkers, public source review and multiple independent checkers. |
| Journal of Machine Learning Research | https://www.jmlr.org/ | Open-access journal, established 2000, public submission and contact pages, all papers freely available. |
| ACM FAccT | https://facctconference.org/ | Public home page with Call for Papers, public press and general contact addresses, and an opt-in announcement list. Scope includes whether decisions should be outsourced to data- and code-driven computing systems. |
| NeurIPS | https://neurips.cc/ | Public home page with Calls for Papers, a Reproducibility track, a public contact form and a published Code of Conduct. |
| Canonical figures README (local) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* |
| Verbatim figure text (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Primary source of every `Fig N :line` citation in this folder. |

## Fetch failures and dead ends, recorded not cited as read

- `https://info.arxiv.org/help/submit.html` returned HTTP 404 on 2026-11-23. The arXiv public submission route is therefore cited only through the abs pages that were fetched and through the home-page link on those pages, not through this URL.
- `https://www.siam.org/` returned HTTP 403 on 2026-11-23. SIAM is not included in `03_public_contact_points.csv` for that reason.
- A web search for the Bender et al. stochastic-parrots paper returned no results on 2026-11-23. It is not cited in this folder. The Tamkin et al. arXiv:2102.02503 abs page was opened, but it is a different paper (a workshop summary on large language models) and is not used as a witness here.
- The Nature Machine Intelligence article abstract was readable; the full text is behind a subscription. Only the abstract and figure captions visible on the fetched page are quoted.

## Wider literature across low-overlap fields

The world sources were chosen to span different evidence pools so that agreement would not be one pool talking (Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*).

1. **Machine learning and interpretability.** Lipton 2016/2017 and Rudin 2019. These are independent of the framework author and they corroborate the finding that a complexity or score proxy does not by itself make a model checkable. Rudin's *"inherently interpretable"* position is a world-side instance of the figure's requirement that the bond be recorded, not merely the ingredient list (Fig 12 :5).
2. **Human cognition.** Attribute substitution (Kahneman and Frederick 2002, read via the Wikipedia entry). Corroborates D2: a complex target is replaced by an accessible proxy and the substitution is not detected.
3. **Economics and accountability.** Goodhart's law (Strathern 1997 quoting Hoskin, read via the Wikipedia entry). Corroborates F1 and F5: a measure used as a target stops discriminating.
4. **Statistics and model selection.** Overfitting (Wikipedia). Corroborates F2 and F6: selection criterion and suitability criterion come apart; a model perfect on training data fails on new data.
5. **Systems theory and philosophy of science.** Black box (Bunge 1963, Ashby 1956, Shannon, read via the Wikipedia entry). Corroborates F3: identical input-output behaviour does not determine the internal mechanism.
6. **Philosophy of modeling.** Map-territory relation (Korzybski 1933, read via the Wikipedia entry). Corroborates F4: a useful representation is not the thing, and treating it as such is a fallacy.
7. **Mathematics and formal verification.** Proof assistant (Wikipedia). Corroborates F6 and F7: small independent checkers, public source review and soundness bugs are exactly the verifier-non-access rule expressed in engineering practice.

No world source conflicts with the figure verdict, so the conflict rule was not triggered. Overlap is declared: the seven sources come from seven distinct pools; none shares an author with the figures. The one figure-side concept they share is the general point that a reading does not determine its source, which is a convergence from independent starting places rather than a single pool repeated.

## Distribution: offer, do not push

- **Fig 10 :52** — *"Bring a characterised residual, never the source."* Lead with the discriminator and the pre-registered refuter.
- **Fig 4 :25** — *"A recording carried upward looks like knowledge and is a description of one occasion."* Sending the whole framework before a residual has been described sends a recording.
- **Fig 9 :51** — *"evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it"* Do not send biographical material, prestige signals or author claims in stage 1.
- **Fig 2 :42** — *"Buy independence in proportion to the cost of being wrong."* The cost of a wrong answer about model reliability is high, so buy real independence: a checker who has not read the framework and cannot reconstruct the claim.
- **Fig 9 :60** — *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Venue and citation count decide what gets tried, not what is true.
- **Fig 7 :35** — *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* One-to-one contact only. No bulk send, no recipient list ranked by likely agreement.

**Recommended order in a reply:** (1) the residual and the discriminator; (2) the pre-registered refuter and the question "what would you count as a failure?"; (3) record their stage-1 verdict; (4) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

**Stage 1.** Send the residual and the discriminator with its mode label and refuter. Ask what would refute it. Record the answer before any theory is shown. This is Fig 10 :42 and Fig 10 :52 together: the checker stays outside the interior and still ranges against the ground.

**Stage 2, opt-in only.** If the checker is curious, offer the three local links. Their later agreement is never pooled as corroboration (Fig 2 :40). Their disagreement is copied into `11_audit.md` with provenance and re-evaluated by the auditor seat as if it came from any other source.

**Stage 3.** Offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode. Fig 4 :22: *"Only methods cross up. Only head starts come down."*

**Hard precondition.** Stages 1 and 2 only work if the stage-1 output survives. The output is currently a `specified` discriminator with seven named failure conditions. It does not claim to settle any particular model. Repair or narrow it if a failure condition fires, and keep the repair visible.
