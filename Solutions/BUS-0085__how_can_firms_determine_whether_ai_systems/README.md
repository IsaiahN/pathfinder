# Solution BUS-0085 - figure-grounded package

**Question:** How can firms determine whether AI systems improve performance across different customer and employee groups?

**Source:** business.txt line 113

**Section:** 9. Technology, data, and artificial intelligence

**ID:** BUS-0085

**Mode:** `specified` on the per-group separator and every substantive claim, `general` on the structural shape, not `grounded`. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 7.

**Status:** done

**Registry status:** pending

**Figures authority:** all figure quotes were taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not the size of an AI system's average performance lift but the *distribution of the residual across groups*. In effect terms: the AI system's library predicts an outcome for a case, the world returns the actual outcome for that case, and `R = |prediction - observation|` is measured per group-slot, never pooled across groups (Fig 1 :19, Fig 1 :22, Symbols :43-44). The phrase *across different customer and employee groups* is not an afterthought attached to a single performance question. It is the instruction to keep the residual indexed.

- Option A, "a pooled improvement number tells you whether the AI works": leads to the prediction that one aggregate figure is a verdict about every group. It hides a live slot inside an average (Fig 1 :22) and lets a convention that decides an outcome stop being a convention (Fig 10 :47).
- Option B, "improvement is a per-group relation that must be measured against a non-updating anchor and independent frames": leads to the prediction that the question is a union of conditions with a verdict per group, that pooled and per-group signs can differ, and that no single fairness metric can certify the result.
- What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"): a *four-condition separator* naming (1) per-slot residual indexing, (2) an instrument for what counts as progress in each group's terms, (3) a non-updating anchor per group with independent frames ranging against it, and (4) a failure condition written before the run. That shape is the sought-for term; until it is bound it predicts nothing, and no check inside the loop can see it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged. The literal question "which groups, which metric, how much improvement" is a declared `gap` of the shape-not-a-name kind, not an invitation to invent a number.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, domain census, verbatim figure census, findings F1 to F11 with quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in AI reliability and risk management research. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer, AI-policy caveat |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: group parity as an isomer under a fixed atom set, dependency order, competing explanations, with a falsifier |
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
- No claim that this derivation is `grounded`, no claim that it settles the business question, and no claim that the framework is the only true account of AI evaluation.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable readers manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness is one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 separator before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
