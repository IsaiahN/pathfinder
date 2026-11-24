# Solution INF-0097 - figure-grounded package

**Question:** How should information systems handle claims whose truth is uncertain, contested, or dependent on future events?

**Source:** Information Theory.txt line 118

**Section:** 10. Social information, reliability, and misinformation

**ID:** INF-0097

**Mode:** `general` on the structural shape, `specified` on the mapping of the three named conditions to three domains. Nothing here is `grounded`. This folder contains a simulated derivation checked for internal consistency against the figures, NOT a ground reading, and it cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 7.

**Status:** done

**Registry status:** pending

**Figures authority:** every figure quote was taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not a truth value for a claim. It is the *disposition of a claim slot whose prediction does not yet match a settled observation*. In effect terms: the system's library Γ predicts Γ(b,a) for claim C in slot s; the ground returns o′; the residual R_s = |Γ(b,a) - o′| fails to close. R is indexed per slot, never averaged (Fig 1 :19, Fig 1 :22).

The three adjectives in the question name three different ways R can fail to close:

- **Uncertain:** no observation, or no positive mass on the slot, so support is absent and nothing is owed yet.
- **Contested:** more than one frame returns a reading, and the system's own operation changes what "truth" means, so agreement has a valence that must be classified before it is used.
- **Future-dependent:** the anchor event has not happened, so o′ cannot arrive at all and the correct report is "unreached", not a guess and not silence.

- Option A, "assign one truth score per claim and update it by the flow of opinions": leads to averaging across slots, to a ground that updates on frames, and to a system with no first-class way to carry a refusal.
- Option B, "keep a per-slot disposition with a ground, a classified valence of agreement, a carried refusal, and a channel check": leads to a shape that any implementation must have, with falsifiers written in advance and an open stop where the ground has not returned.

What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"; Fig 5 :65): a *shape* naming the conditions that must hold for a claim slot to be handled honestly, plus an instrument that would discriminate a failure of one condition from a failure of another. That shape is the sought-for term; until it is bound it predicts nothing and no check in the loop can see it.

The verdict recorded in `09_watson_answer.md` is Option B in `general`/`specified` mode, kept per domain and never averaged. Which specific algorithm implements the shape is a declared `gap`.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual by arity/symmetry/scale, domain census, figure census, findings F1 to F12 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in contested information research. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: the union split, bond/operator order, refusal-before-mint, with a falsifier |
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
- No claim that this derivation is `grounded`, no claim that it settles the information-systems question, and no claim that the framework is the only true account of contested information.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable readers manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness is one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask what would refute the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
