# Solution BUS-0070 - figure-grounded package

**Question:** Do loyalty programs create durable relationships, or mostly shift purchases and discounts among competing firms?

**Source:** business.txt line 92

**Section:** 7. Customers, marketing, and competition

**ID:** BUS-0070

**Mode:** `specified` on every substantive claim, `general` on the structural shape. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 8.

**Status:** done

**Registry status:** pending

**Figures authority:** all figure quotes were taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. Every planned quote was checked as an exact substring before writing. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not whether a loyalty program is associated with repeat purchases. Every program reports such an association. What is being decided is **what a repeat purchase is a reading of, and whether the low prediction error persists when the program instrument is removed**. In effect terms: R = |Γ(b,a) - o′| per customer-slot s over time.

- **b** is the firm's belief about a customer, formed from that customer's own history: points accrued, tier reached, past response to offers.
- **a** is the program action: award points, grant status, send a discount, open a redemption.
- **Γ(b,a)** is what the library predicts the customer will do: share of wallet, repeat rate, retention.
- **o′** is what the customer actually does: buy again, switch, split the wallet, redeem and leave.
- **s** is the customer. R is indexed per customer and per time, never averaged into "members versus non-members" (Fig 1 :19, Fig 1 :22).

Option A, "the program creates a durable relationship", leads to the prediction that the low residual survives removal of the instrument and a change of habitat: the customer would keep buying because the contact with what they actually value was changed. Option B, "the program mostly shifts purchases and discounts among competing firms", leads to the prediction that the low residual lasts only while the bracket is fresh and unmatched: points, tiers and discounts redirect the same underlying demand, and purchases move when a rival offers a better bracket.

What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"): **a pair of conditions with two distinct instruments**, (C1) contact with a ground that still pays once the program is removed, and (C2) a channel that keeps the bracket matched only while the program is in place, plus an instrument that discriminates a failure of C1 from a failure of C2. Until bound, that shape predicts nothing and no check in the loop can see it. It is now bound, so the refuter in section 4 of `01` can fire on it.

The verdict recorded in `09_watson_answer.md` is: the either/or is a **union, not a partition**, and the two options survive as two per-slot conditions kept separate and never averaged. Which specific program, which customer, and what fraction is a `gap` at the instrument boundary. Mode `specified`, ungrounded.

**Relation to a sibling question.** `business.txt` line 86 (BUS-0064) asks how to measure loyalty when repeat purchases may reflect habit, switching costs or a lack of alternatives. That is the upstream measurement question: it is the source-discriminating instrument this solution reports as owed. It is not used as an answer here.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, domain census, figure census, findings F1 to F10 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in marketing and customer relationship research. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer, AI-policy caveat |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: isomer and functional-group readings, dependency order, competing explanations, with a falsifier |
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
- No claim that this derivation is `grounded`, no claim that it settles the business question, and no claim that the framework is the only true account of loyalty.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable marketing academics manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). Leenheer, Liu and Khodakarami share the marketing evidence pool; their agreement is one witness, not three (Fig 2 :31).
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
