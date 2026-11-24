# Solution BUS-0075 - figure-grounded package

**Question:** How can firms identify hidden dependencies in supply chains several tiers beyond their direct suppliers?

**Source:** business.txt line 100

**Section:** 8. Operations, supply chains, and resilience

**ID:** BUS-0075

**Mode:** `specified` on every substantive claim, `general` on the structural shape. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 7.

**Status:** done

**Registry status:** pending

**Figures authority:** all figure quotes were taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not the size of a firm's supplier database but the **depth at which its residual stays small**. In effect terms:

- **b** is the firm's belief about its supply base, formed from approved-vendor lists, contracts and tier-1 questionnaires.
- **a** is what the firm does: orders, dual-sourcing decisions, inventory policy, audits, supplier development.
- **Γ(b,a)** is what the firm's supplier map predicts will happen: continuity, lead time, quality, cost.
- **o′** is what the supply base actually returns when a disruption propagates: a stopped line, a missed shipment, a sub-tier quality failure.
- **s** is a part, site or supplier node, indexed by **tier**. R = |Γ(b,a) - o′| is indexed per node, never aggregated into one enterprise risk score (Fig 1 :19, Fig 1 :22).

The phenomenon to explain: R is near zero at tier 1, where the map has direct contact, and goes live at tier 2, tier 3 and beyond, where the map has no contact. The named figure line is Fig 11 :52: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* That is the question in the figures' own vocabulary.

- **Option A, "add more suppliers to the map":** leads to the prediction that hidden dependencies are a data-volume problem, solved by a bigger tier-1 register plus a visibility platform.
- **Option B, "enumerate the habitat outward and discriminate sources":** leads to the prediction that hidden dependencies are a contact-and-discrimination problem, solved only by extending contact until the cascade stops mattering and by an instrument that separates a shared source from independent failure (Fig 11 :43-44, Fig 2 :6-7).

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: an answer would be (i) a rule for extending enumeration outward until the cascade stops mattering, (ii) a discriminator that tells a hidden shared source from two independent suppliers, and (iii) an instrument that would fire if either were missing. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in `01` section 4 can fire on it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, domain census, figure census, findings F1 to F10 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in supply chain risk, resilience and dependency mapping. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: bond versus ingredient list, isomer and catalyst readings, dependency order, analogues, with a falsifier |
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
- No claim that this derivation is `grounded`, no claim that it settles the supply chain question, and no claim that a named visibility vendor or framework is the answer.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable readers manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness is one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
