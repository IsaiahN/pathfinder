# Public links and distribution

All links below were fetched and read on 2026-11-22 unless marked otherwise. Two attempted venue fetches failed and are recorded rather than hidden: the OECD corporate-governance topic page returned HTTP 403, and the Elsevier and ScienceDirect Journal of Corporate Finance guide-for-authors pages returned HTTP 400. Neither is cited as evidence. The working alternatives in `03_public_contact_points.csv` were fetched successfully.

## 1. Verified source links actually fetched

| what | URL | verified content |
|---|---|---|
| Figures extract with line numbers (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Verbatim figure text, Fig 1 to 13 plus Operators and Symbols tables. All `Fig N :line` citations in this folder come from it. |
| Figures README, canonical | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Same document as the local canonical copy. |
| Full architecture (Medium) | https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec | 19 min read, Aug 19 2026. All 13 figures, the formula, Operators and Symbols tables, and the *"Three mappings offered and declined"* section. |
| Shleifer and Vishny 1986, full text (Harvard) | https://shleifer.scholars.harvard.edu/sites/g/files/omnuum10626/files/shleifer/files/lg_shareholders.pdf | *"in the paper this function is performed by large shareholders."* The canonical monitoring model. |
| Johnson, La Porta, Lopez-de-Silanes and Shleifer 2000, NBER | https://www.nber.org/papers/w7523 | *"Tunnelling is defined as the transfer of assets and profits out of firms for the benefit of their controlling shareholders."* |
| La Porta, Lopez-de-Silanes and Shleifer 1999, Wiley | https://onlinelibrary.wiley.com/doi/full/10.1111/0022-1082.00115 | *"power over firms significantly in excess of their cash flow rights, primarily through the use of pyramids and participation in management."* |
| Claessens, Djankov, Fan and Lang 2002, Wiley | https://onlinelibrary.wiley.com/doi/full/10.1111/1540-6261.00511 | *"firm value increases with the cash-flow ownership of the largest shareholder... But firm value falls when the control rights of the largest shareholder exceed its cash-flow ownership."* |
| Morck, Shleifer and Vishny 1988, full text (Harvard) | https://shleifer.scholars.harvard.edu/sites/g/files/omnuum10626/files/shleifer/files/mgt-own-mkt-val.pdf | *"significant nonmonotonic relationship. Tobin's Q first increases, then declines, and finally rises slightly."* |
| Edmans and Holderness, HLS Forum post | https://corpgov.law.harvard.edu/2014/01/21/blockholders-and-corporate-governance/ | *"Blockholders may also exacerbate rather than solve agency problems."* Voice, exit and private benefits in one survey post. |
| Edmans 2014, NBER | https://www.nber.org/papers/w19573 | *"Blockholders may also worsen governance by extracting private benefits of control or pursuing objectives other than firm value maximization."* |
| Ostrom 1990, full text | https://www.burmalibrary.org/sites/burmalibrary.org/files/obl/docs20/Ostrom-1990-governing_the_commons.pdf | *"A regulatory agency, on the other hand, always needs to hire its own monitors."* A genuinely different evidence pool. |
| NIST SP 800-160v1r1 | https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-160v1r1.pdf | *"Loss control should not rely on a single defensive element."* and *"Avoid Single Points of Failure."* Engineering analogue for concentrated control. |
| Ross and Anderson 1982 | http://www.craiganderson.org/wp-content/uploads/caa/abstracts/1979-1984/82RA.PDF | *"the tendency for attributers to underestimate the impact of situational factors and to overestimate the role of dispositional factors in controlling behavior."* |

## 2. Wider literature that bears on this question

The corporate-governance sources form **one evidence pool**, not eight independent witnesses. Shleifer and Vishny (1986), Morck, Shleifer and Vishny (1988), La Porta, Lopez-de-Silanes and Shleifer (1999), Johnson and coauthors (2000) and Claessens and coauthors (2002) share authors, data traditions and a common question. Their agreement is recorded as one witness. Even so, two findings matter for the shape:

1. **The two effects are separable in the data.** Claessens and coauthors report that value rises with cash-flow ownership and falls when control rights exceed cash-flow rights. That is the union's two conditions measured separately, which is exactly what Fig 9 :55-57 requires and what an averaged "net concentration effect" would erase.
2. **The relation is not monotone.** Morck and coauthors find a significant nonmonotonic relationship, and Holderness's NY Fed survey (https://www.newyorkfed.org/medialibrary/media/research/epr/03v09n1/0304hold.html, fetched 2026-11-22) reports the alignment-then-entrenchment reading. This supports a threshold *shape*, but it does not supply a figure-derived percentage. The `gap` in `01` F8 stands.

**Low-overlap corroboration.** Ostrom (1990), from common-pool resource institutions, reports that the parties to a contract will monitor each other, while *"A regulatory agency, on the other hand, always needs to hire its own monitors."* and then faces a principal-agent problem. That corroborates the D1 and D3 reading from a different field. NIST SP 800-160 (engineering) states that loss control should not rely on a single defensive element and that redundant solutions are susceptible to common-mode failure. That corroborates the D3 anchor rule, and its common-mode warning is the engineering version of Fig 2 :40. Ross and Anderson (human cognition) describe the tendency to over-attribute behaviour to disposition and under-attribute it to situation, which is the cognitive counterpart of Fig 11 :49-51. A conflict in that pool is honest: Harvey, Town and Yarkin (1981, https://www.communicationcache.com/uploads/1/0/8/8/10887248/how_fundamental_is_the_fundamental_attribution_error.pdf, fetched 2026-11-22) dispute whether the effect is an error at all. That conflict does not flip the figure verdict, because the figure claim needs only the descriptive tendency, not the label "error". It is recorded, not smoothed away.

## 3. Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the union claim and its four refuters; offer links after.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the union claim were true before giving them the articles.
- **Fig 2 :40** *"agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* A bulk send selected for people who already agree buys correlation, not evidence.
- **Fig 10 :60** *"Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged."* State your own stake in the verdict if you have one, in the first message.

**Recommended order in a reply:** (1) the union claim and the four refuters; (2) ask what they would count as a failure, and record the answer; (3) only then the three links, with the note that the figures, not the summary, are the authority; (4) if they ask, offer the formula as a method to reuse, with the instruction to state mode and write a refuter before running it.

## 4. The two-stage offer, with a third stage

1. **Stage 1 before stage 2.** Fig 10 :52 *"Bring a characterised residual, never the source."* The recipient checks the four refuters without holding the framework's interior. Their verdict is recorded before any theory is shown.
2. **Stage 2 is opt-in by construction.** Seat 4 must not hold the interiors. Once a recipient has absorbed the theory, their agreement stops being evidence, so later agreement is never pooled as corroboration.
3. **Stage 3 sends a method, which is permitted.** Fig 4 :22. The formula is a generator, so giving it away does not give away an answer. Each user must still state a ground and a refuter for their own problem, because the loop cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 only work if stage 1 survives. The refuters in `01` §4 are written before the run and must be quoted unchanged in `02_outreach_email.md`. Do not soften them after seeing a reply.

## 5. What is not hosted here

This agent cannot upload files or send messages. Hosting the packet (a repo release, a Drive link, an opt-in download page) and sending it is yours to do. Prefer a link that lets a recipient decline contact. No archive, no attachment to a list, and no personal email addresses are part of this folder.
