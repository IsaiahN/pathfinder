# Public links and distribution

All external links below were fetched and checked on 2026-11-23. Local framework paths were read the same session.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Epistemic versus aleatoric uncertainty (Kendall and Gal) | https://arxiv.org/abs/1703.04977 (full text at https://arxiv.org/html/1703.04977) | NeurIPS 2017; abstract: "Aleatoric uncertainty captures noise inherent in the observations. On the other hand, epistemic uncertainty accounts for uncertainty in the model – uncertainty which can be explained away given enough data." Section 5 reports that aleatoric uncertainty stays roughly constant with more data while epistemic uncertainty decreases, and that epistemic uncertainty rises on out-of-data examples. |
| Selective classification / reject option (Geifman and El-Yaniv) | https://arxiv.org/abs/1705.08500 (full text at https://arxiv.org/html/1705.08500) | NeurIPS 2017; "The main motivation for selective prediction is to reduce the error rate by abstaining from prediction when in doubt, while keeping coverage as high as possible." The formal output is literally "don't know" when g(x)=0. |
| Empty prediction sets and epistemic uncertainty in conformal prediction (Chau et al.) | https://arxiv.org/html/2602.01667v1 | arXiv 2026; Proposition 3.9 discussion: "enforcing consonance precludes conformal prediction from producing empty prediction sets, thereby removing its ability to explicitly signal extreme predictive uncertainty in rare or highly atypical prediction scenarios." |
| Skepticism (Stanford Encyclopedia of Philosophy) | https://plato.stanford.edu/entries/skepticism | Substantive revision 2026; "Suspension of judgment is thus a bona fide doxastic attitude alongside belief and disbelief", and it "can itself be justified or unjustified". The example: suspension is unjustified for "Paris is the Capital of France" and justified for "there are an even number of stars in the Milky Way". |
| Verbatim figure text | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md` | Source of every `Fig N :line` quote in this folder. |
| Canonical usage rule | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md` | "They outrank everything else in the repo... the quotes are the authority, not this summary." |
| Figures as metalaws | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md` | "The figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." |
| Verified submission venues | https://arxiv.org/help/submit; https://www.jmlr.org/; https://neurips.cc/Conferences/2026/CallForPapers; https://www.cambridge.org/core/journals/episteme; https://link.springer.com/journal/11229; https://plato.stanford.edu/ | Public institutional submission, contact or reference routes for unanswered-questions research. See `03_public_contact_points.csv`. |

## What in the wider literature bears on this question

1. **Reducible versus irreducible absence (Kendall and Gal, 2017).** The paper separates uncertainty that "can be explained away given enough data" from noise that "cannot be reduced even if more data were to be collected". This is a low-overlap, empirical analogue of the figures' distinction between unreachable-at-this-budget and underivable-in-principle (Fig 8 :40-41). It corroborates F4 but does not decide it: the ML distinction is about data and model parameters, not about closure(Γ).
2. **Abstention as a first-class output (Geifman and El-Yaniv, 2017).** The output of a selective classifier is literally "f(x) if g(x)=1; don't know if g(x)=0", with a guaranteed error rate on the accepted subset. This corroborates F1 and F9: abstention can be engineered, and it is not an invented class. It does not settle the normative "should"; it shows that a no-answer output is operationally coherent.
3. **The empty set as a signal (Chau et al., 2026).** Conformal prediction can return an empty prediction set, and the paper explicitly notes that removing that possibility "remov[es] its ability to explicitly signal extreme predictive uncertainty". This is the sharpest world analogue of F10: a system can meet a numeric target and still lose the ability to say that nothing settled the question. Overlap with the other two ML sources is partial (different authors, different statistical tradition; Chau et al. cite Kendall and Gal), so their agreement is one pool with internal structure, not four independent witnesses.
4. **Suspension of judgement as a justified attitude (SEP, 2026).** The entry gives a clean case: withholding assent is unjustified for an ordinary settled fact and justified where the evidence does not decide. This is a philosophy-source corroboration of F1, at low overlap with the ML corpus.

No world source conflicts with the figure verdict. The conflict rule was not triggered. If one did, it would send the derivation back to the domain census, never flip the verdict.

## Distribution: offer, do not push

- **Fig 10 :52**, "Bring a characterised residual, never the source." Send the claim and its refuter first. The framework's interior is shown only after a verdict on the claim is recorded.
- **Fig 10 :42**, "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the whole framework before being asked has joined the frame being checked.
- **Fig 9 :27-28**, "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the protocol were correct before giving them the figures.
- **Fig 2 :35**, "Alignment is triangulation, not negotiation. A mirror cannot correct you." Do not select recipients by likely agreement and do not ask for endorsement.
- **Fig 7 :13**, "same closure, handed along; agreement compounds, evidence does not." Forwarding a note to more people who already agree is motion, not progress.

**Recommended order in a reply:** (1) the three-condition claim and its four refuters; (2) ask what they would count as a failure; (3) record the answer; (4) only then, offer the verified links with the note that the figures, not this summary, are the authority.

## The two-stage offer (with an optional third)

1. **Stage 1, output first.** The claim, its mode, and the pre-registered refuter. No theory. Record the recipient's verdict before anything else.
2. **Stage 2, opt-in only.** If they are curious, offer the figure text and the canonical usage rule. Their later agreement is never pooled as corroboration (Fig 2 :40, "agreement about the world is worthless when the agreeing frames share an evidence pool").
3. **Stage 3, offer the formula as a method.** Fig 4 :22, "Only methods cross up. Only head starts come down." A generator can be given away without giving away an answer. Each user must state their own ground and write their own refuter before running it (`THE_FORMULA.md` "Direction").

**Hard precondition:** stages 1 to 3 only work if the stage-1 claim survives the three checks in `08_expert_verification_packet.md`. Do not send before that check is done.

## Hosting

Nothing in this folder sends anything. Host the packet on an opt-in page if you want a download link; a page that lets a recipient decline contact is closer to the figures' rule than an attachment pushed to a list.
