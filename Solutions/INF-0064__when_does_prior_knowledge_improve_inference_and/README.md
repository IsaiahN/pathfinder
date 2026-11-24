# Solution INF-0064 - figure-grounded package

**Question:** When does prior knowledge improve inference, and when does it lock a learner into a mistaken model?

**Source:** Information Theory.txt line 79

**Section:** 7. Learning, inference, and decision-making

**ID:** INF-0064

**Mode:** `specified` on every substantive claim. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 7.

**Status:** done

**Registry status:** pending

**Figures authority:** all figure quotes are taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not *how much* prior knowledge a learner has, but *what relation the prior holds to the ground and to the learner's own machinery for refusing a term*. In effect terms (Symbols table): the belief `b` is *"formed from its own history and from what it inherited, mixed by w"*, the prediction is `Γ(b,a)`, the observation is `o'`, and the residual is `R = |Γ(b,a) − o'|`, measured per slot `s` (Fig 1 :19). The question asks which settings make that per-slot residual shrink faster with the prior than without it, and which settings make the residual persist and not trend down while the learner keeps predicting wrongly.

- Option A, "prior knowledge is a stock that improves a learner in proportion to its amount": leads to the prediction that more prior is always better and that the tipping point is a quantity `w*`.
- Option B, "the prior's effect is decided by its relation to a non-updating anchor, by whether it is a refusable term or an invisible preference, and by the independence of the frames that check it": leads to the prediction that the same prior improves one slot and locks another, and that the discriminator is structural, not a magnitude (Fig 2 :33, Fig 4 :22, Fig 5 :62, Fig 1 :19).

What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"): a *shape* naming (i) the condition under which a prior is composable and refusable, and (ii) the condition under which it is held as an unbound preference that accrues no residual, plus an instrument that ablates the prior against a fixed ground and measures the per-slot residual with and without it. Until that shape is bound it predicts nothing and no check in the loop can see it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged. The numeric tipping point is an honest `gap`: the figures return a shape, not a number (Fig 9 :32).

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, three-domain census, verbatim figure census, findings F1 to F10 with refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in prior-knowledge and inference research (cognitive science, judgment and decision making, machine learning, psychology). No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what four independent literatures bear on the question, distribution rules, two-stage offer |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules and a correction to the "shape, not a name" reading |
| `06_isomers_and_order.md` | supporting derivation: isomer and functional-group readings of two learners with the same prior, dependency order, the comparison bond as the shape of the tipping point, with a falsifier |
| `07_the_tether_answer.md` | the synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version |
| `08_expert_verification_packet.md` | **the one to send:** one-paragraph claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check list |
| `09_watson_answer.md` | canonical WATSON output shape: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost if wrong, undoable, reversed by / Sources as linked titles |
| `10_source_ledger.csv` | one row per source actually opened: url, title, author, venue, year, accessed date, quote, field, overlap, status, used in file |
| `11_audit.md` | independent second-seat re-census from the residual line alone, comparison with the primary census, verbatim lines checked, round-trip gap R_T, strains, verdict on the solution |

---

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree.
- No bulk-send plan.
- No claim that this derivation is `grounded`, no claim that it settles the empirical question, and no claim that the framework is the only true account of prior-knowledge effects.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable readers manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness is one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
