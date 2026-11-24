# Solution REA-0076 - figure-grounded package

**Question:** How do people decide when to trust an AI system, and what makes those judgments well calibrated?

**Source:** reasoning.txt line 93

**Section:** 8. Human and machine intelligence

**ID:** REA-0076

**Mode:** `specified` on every substantive claim, `general` on the structural shape. No measurement of human trust calibration was taken in this folder, so nothing here is `grounded`. This is a simulated derivation checked for internal consistency against the figures, NOT a ground reading. It cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 6.

**Status:** done

**Registry status:** pending

**Figures authority:** all figure quotes were taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

**Field for public contact points:** trust in AI research.

---

## The question restated as an effect

What is being decided is not whether a person feels trust, but whether the person's reliance tracks the ground. In effect terms: a person holds a belief b about an AI system, weights private history against inherited prior by w, takes an action a (rely, check, or override), and sees an outcome o'. The residual R = |Γ(b,a) - o'| is indexed per decision slot s, not averaged (Fig 1 :19, Fig 1 :22). A judgment is well calibrated when the person's confidence matches what the system actually does in that slot, against a legitimate anchor.

- Option A, "trust is a property of the system that the person reads off": leads to the prediction that a benchmark accuracy, a confidence score, or a fluent explanation is sufficient for calibration.
- Option B, "trust is a relation among person, system and task ground, maintained through contact": leads to the prediction that calibration fails when the anchor type is wrong, when checks share the system's evidence, when the channel decays, or when the habitat changes (Fig 2 :36-38, Fig 2 :40, Fig 10 :24, Fig 11 :40).
- What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"): a *shape* naming the conditions under which a per-slot trust judgment is calibrated, plus an instrument that would discriminate a fluent-but-wrong output from a fluent-and-right one. Until that shape is bound it predicts nothing and no check in the loop can see it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged. The specific numeric threshold is declared a `gap`, not smuggled in as an answer.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, domain census, figure census, findings F1 to F7 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in trust in AI research. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: anchor types, calibration as a comparison bond, dependency order, competing explanations, with a falsifier |
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
- No claim that this derivation is `grounded`, no claim that it settles the trust question, and no claim that the framework is the only true account of human-AI trust.
- No universal trust threshold, no single calibration number offered as an answer, and no claim that a confidence display or an explanation by itself calibrates anyone.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable readers manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness, or a verification step that reuses the system's own output, is one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask what would refute the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
