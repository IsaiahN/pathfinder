# Solution INF-0086 - figure-grounded package

**Question:** Can a model identify when its sources are misleading, rather than merely reproducing their patterns?

**Source:** Information Theory.txt line 105

**Section:** 9. Information in AI and machine learning

**ID:** INF-0086

**Mode:** `specified` on the per-domain verdicts, `general` on the structural shape, `gap` on the literal empirical question of whether any deployed model does this. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 6.

**Status:** done

**Registry status:** pending

**Figures authority:** every figure quote is taken verbatim this session from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`, whose key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not *how well* a model reproduces its sources, but whether the model can register a residual of a source against something the source did not author. In effect terms (`Symbols table`: R is *"The gap between prediction and observation"*): a model's library Gamma predicts from its belief b and action a; the source supplies much of that belief; the question asks whether R can be indexed to a source as the thing that is wrong, rather than being absorbed into fluent reproduction. R must stay indexed per slot (Fig 1 :19, Fig 1 :22). Averaging source fidelity into one score is how the signal that says which source failed disappears.

- Option A, "pattern reproduction is enough": leads to the prediction that reliability is a property of the model considered alone, and that more data or more scale produces it.
- Option B, "detecting a misleading source needs an anchor the source did not author": leads to the prediction that reliability is a property of model-and-habitat (Fig 11 :39), that it fails when the channel to a non-updating ground breaks (Fig 10 :24), and that it needs a term that can refuse, not just terms that can reproduce (Operators table :58).
- What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"; Fig 5 :65-66): a *shape* naming the conditions under which a source's residual can be registered and refused, plus an instrument that would discriminate a faithful source from a misleading one when both produce fluent patterns. Until that shape is bound it predicts nothing and no check in the loop can see it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, per domain, never averaged. The literal empirical claim is a declared `gap`, which is a verdict and not a silence (Fig 13 :134).

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the derive-first audit: residual, domain census, figure census, findings F1 to F10 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in source reliability, fact checking and machine learning research. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: reproduction versus refusal as different structures, dependency order through Fig 3's chain, analogues, with a falsifier |
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
- No claim that this derivation is `grounded`, no claim that it settles the empirical question about real models, and no claim that the framework is the only true account of source reliability.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable readers manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness is one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
