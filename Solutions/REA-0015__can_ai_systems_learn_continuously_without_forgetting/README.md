# Solution REA-0015 - figure-grounded package

**Question:** Can AI systems learn continuously without forgetting earlier knowledge or becoming unstable?

**Source:** reasoning.txt line 20

**Section:** 2. Learning and generalization

**ID:** REA-0015

**Mode:** `specified` on the per-domain claims, `general` on the structural split, `gap` on the universal no-forgetting guarantee and the stability-plasticity ratio, not `grounded`. This folder contains a simulated derivation checked for internal consistency against the figures. It is **not** a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 7.

**Status:** done

**Registry status:** pending

**Figures authority:** every figure quote in this folder was taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not whether a loss curve goes down on the current task. It is whether the residual stays small on **every** slot that was ever learned, while new slots keep arriving, and whether the system stays in touch with a ground that does not move when the system pushes on it.

In effect terms: a learner's library Γ predicts an observation Γ(b,a); the world returns o′; R = |Γ(b,a) - o′| is measured per slot s (one previously learned capability, one task's test distribution), never as a single global number (Fig 1 :19, Fig 1 :22). Three options:

- **Option A, "yes, continuous learning without forgetting is a solvable engineering target with a fixed recipe":** leads to the prediction that one algorithm plus one loss closes all slots for all task streams. A universal stability-plasticity setting would be returned.
- **Option B, "no, forgetting and instability are inevitable":** leads to the prediction that any plasticity destroys old reach, so the only safe system is frozen.
- **Option C, the figure-grounded reading:** "forgetting" and "instability" are two different effects with different anchors, so the question is a **union of conditions**, not one question with opposite answers (Fig 9 :54, Fig 9 :55-57). Continuous learning is reachable **as a shape** under stated conditions on what is retained, how the residual is measured, and whether the ground stays unreachable-by-update. No figure line returns a universal guarantee, a numeric ratio, or a named architecture. That is a declared `gap`, which is a verdict and not silence (Fig 13 :134).

What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"): a **separator** naming the conditions under which reach on old slots is preserved while new slots are learned, plus an instrument that discriminates a fall in reach from a decayed channel from a substituted habitat. Until that shape is bound it predicts nothing and no check in the loop can see it.

The verdict recorded in `09_watson_answer.md` is Option C in `specified` mode, kept per domain and never averaged into one number.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, four-domain census, figure census, findings F1 to F11 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in continual learning research. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer, LLM-submission caveat |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the eight essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: what is retained across tasks (method versus recording), dependency order, isomers and catalysts, with a falsifier |
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
- No claim that this derivation is `grounded`, no claim that it settles the continual learning question, and no claim that the framework is the only true account of learning.

Four reasons, three from the figures and one practical:

1. **A room is not an anchor.** *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). A list of researchers selected for receptiveness manufactures the correlation that disqualifies a verdict.
2. **Correlation has valence.** *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). All the world sources in this folder were found from one literature pool in one session, so their agreement is one witness wearing many names, not independent corroboration.
3. **A verifier must be outside the interior.** *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. **Legally**, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
