# Solution REA-0053 - figure-grounded package

**Question:** What capacities are required for an AI system to act autonomously over extended periods?

**Source:** reasoning.txt line 66

**Section:** 6. Agency, goals, and autonomy

**ID:** REA-0053

**Mode:** `specified` on every substantive claim, `general` on the structural shape. Nothing here is `grounded`. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 7.

**Status:** done

**Registry status:** pending

**Figures authority:** all figure quotes were taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not a list of parts an AI system owns, but what must hold so that its prediction error stays small across a long run of object slots and time, without an outside seat correcting it at every step. In effect terms: the system's library Gamma predicts an observation Gamma(b,a); the world returns o'; R = |Gamma(b,a) - o'| is measured per slot, not averaged (Fig 1 :19, Fig 1 :22). The question asks for the conditions under which R remains small over an extended horizon.

- Option A, "autonomy is a stock of capacities stored inside the model": leads to the prediction that sustained autonomous operation is a property of the agent considered alone and can be improved by improving the agent in isolation.
- Option B, "autonomy is a relation that must be maintained": leads to the prediction that sustained operation is a property of agent-and-habitat and fails when contact, reach, or the channel to the ground fails (Fig 11 :39, Fig 11 :40).
- What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"): a *shape* naming the conditions that must all hold for a slot's R to stay small over a long horizon, plus an instrument that would discriminate a failure of one condition from a failure of another. Until that shape is bound it predicts nothing and no check in the loop can see it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged. The specific named mechanisms that the AI literature offers (episodic memory, skill libraries, executive control) are bindings from that frame, provenanced as such, not derivations from the figures.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, domain census, verbatim figure census, findings F1 to F11 with refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in autonomy, agents, and cognitive science research. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: union versus partition, dependency order, two-currency price, analogues, with a falsifier |
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
- No claim that this derivation is `grounded`, no claim that it settles the autonomy question, and no claim that the framework is the only true account of agency.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable readers manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness is one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
