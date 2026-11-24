# Solution COG-0096 - figure-grounded package

**Question:** How can studies account for the effects of migration, urbanization, media, and schooling on the populations they compare?

**Source:** cognitive science.txt line 117

**Section:** 10. Methods, comparison, and theory

**ID:** COG-0096

**Mode:** `general` on the structural shape, `specified` on its consequences for cross-cultural research method, explicitly **not** `grounded`. Every substantive file states that this is a simulated derivation checked for internal consistency against the figures, not a ground reading, so it cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 7.

**Status:** done

**Registry status:** pending

**Figures authority:** every figure quote in this folder was taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not whether migration, urbanization, media and schooling "matter" (they plainly do) but how a comparison can keep a residual attributable to those exposures separate from a residual attributable to the construct the study claims to measure.

In loop terms (Formula step 1; Symbols table, `R`, `s`):

- **b** is the belief a sampled person brings to the task, formed from private history and inherited prior, mixed by the learnable weighting `w` (Symbols :20-26). Migration, schooling, media diet and urban residence are exactly the histories and priors that move `w`.
- **a** is the act of measuring: translating an instrument, recruiting a site, administering a task, coding a response.
- **Γ(b,a)** is what the study's library predicts a person in that site will score.
- **o′** is the observed response.
- **s** is the slot: a person, a site, a migrant cohort, a school cohort. R is indexed per slot, never averaged into a population mean (Fig 1 :19, :22).

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

- **Option A, "exposures are nuisance covariates to be partialled out":** leads to the prediction that a sufficiently rich covariate list makes the group comparison clean, and that one common correction works across sites.
- **Option B, "exposures are habitat conditions and relations that must be enumerated per site and kept as separate domains":** leads to the prediction that the four named exposures are a union of overlapping conditions with distinct instruments, that their valence is relative to the local residual, and that any single pooled adjustment destroys the diagnostic (Fig 9 :54-57; Fig 11 :43-51).

Written down and bound as an ordinary term before the run (Formula, "Direction"): the answer would be a **shape**, namely the set of conditions under which a between-population score difference can be read as a construct difference rather than as an exposure-driven reading, plus instruments that discriminate one failure from another. Until bound, that shape predicts nothing; once bound, the refuter in `01` section 5 can fire on it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged. The question "which specific exposure produced this particular score gap" is a declared `gap`, not a hidden answer.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the derive-first audit: residual, domain census, figure census, findings F1 to F11 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in cross-cultural research methods and sampling; no personal emails |
| `04_links_and_distribution.md` | every link actually fetched, what the wider literature bears on the question, distribution rules, the two-stage offer, failed fetches recorded honestly |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, with the source/provenance and prestige/action rules, and a visible correction |
| `06_isomers_and_order.md` | supporting derivation: isomers and functional groups, dependency order, competing explanations, with a falsifier |
| `07_the_tether_answer.md` | the synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version |
| `08_expert_verification_packet.md` | **the one to send:** one-paragraph claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check |
| `09_watson_answer.md` | canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost if wrong, undoable, reversed by / Sources as linked titles |
| `10_source_ledger.csv` | one row per source actually opened: url, title, author, venue, year, accessed date, quote, field, overlap, status, used-in-file |
| `11_audit.md` | independent second-seat re-census from the residual line alone, comparison with the primary census, verbatim lines checked, round-trip gap `R_T`, strains, verdict on the solution |

---

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree.
- No bulk-send plan.
- No claim that this derivation is `grounded`, no claim that it settles the cross-cultural question, and no claim that the framework is the only true account of comparison.

Four reasons, three from the figures and one practical:

1. **A room is not an anchor.** *"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). A list of receptive reviewers manufactures the correlation that disqualifies a verdict.
2. **Correlation has valence.** *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). Samples drawn from the same media and schooling pool are one witness wearing many names.
3. **A verifier must be outside the interior.** *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. **Legally**, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
