# Solution BUS-0009 - figure-grounded package

**Question:** How much of a company's performance comes from management choices versus industry structure and broader economic conditions?

**Source:** business.txt line 13

**Section:** 1. Competitive strategy and firm performance

**ID:** BUS-0009

**Mode:** `specified` on every substantive claim, `general` on the structural shape. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 7.

**Status:** done

**Registry status:** pending

**Figures authority:** all figure quotes were taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

The question asks for a **share**: a single number that splits a company's performance into three named sources, management choices, industry structure, and broader economic conditions. Stated in effect terms, the loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the firm's belief about what the market will pay for, formed from its own history and inherited priors.
- **a** is what management does: price, product, entry, investment, routine.
- **Γ(b,a)** is what the firm's library of routines and assets predicts will happen.
- **o′** is what the market actually returns: demand, price, share, survival.
- **s** is the firm, indexed also by time t for the economic conditions.

The "how much" framing commits to three moves before any measurement: that performance is one aggregable quantity, that the three sources are separable, and that a global percentage is the answer. Each move is tested below.

- Option A, "the split is a findable number": leads to the prediction that a universal percentage exists and that variance decomposition can report it.
- Option B, "the split is a filter and the sources are a union": leads to the prediction that any reported percentage moves with the frame that produced it, that the residual must stay indexed per firm-slot, and that the three named sources are overlapping conditions rather than additive parts.
- What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"): a shape stating (i) the indexing the residual must keep, (ii) why the three sources do not partition it, and (iii) the source-discriminating instrument that would settle an attribution for a named firm-slot. Until bound, that shape predicts nothing and no check in the loop can see it. It is now bound, so the refuter in section 5 of `01` can fire on it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged. The universal percentage is declared a `gap`, not a hidden answer.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, domain census, figure census, findings F1 to F11 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in strategic management and performance attribution research. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer, AI-policy caveat |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: union versus partition, effect classes as isomers, dependency order, competing explanations, with a falsifier |
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
- No universal percentage, no claim that this derivation is `grounded`, no claim that it settles the business question, and no claim that the framework is the only true account of firm performance.

Four figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). A list of studies selected for agreement manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). Several papers using the same FTC or Prowess dataset and the same ANOVA are one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. The filter is not the witness. *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* (Fig 9 :60). A variance decomposition tells a researcher where to look; it cannot hand them the cause.
5. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
