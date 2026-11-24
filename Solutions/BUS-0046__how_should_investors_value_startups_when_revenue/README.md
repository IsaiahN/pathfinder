# Solution BUS-0046 - figure-grounded package

**Question:** How should investors value startups when revenue, user growth, and future markets provide conflicting signals?

**Source:** business.txt line 62

**Section:** 5. Entrepreneurship and startups

**ID:** BUS-0046

**Mode:** `specified` on the per-domain claims, `general` on the structural shape, `gap` on the company-specific number, not `grounded`. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 6.

**Status:** done

**Registry status:** pending

**Figures authority:** every figure quote is taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not the *number* written on the term sheet. It is what an investor holds when three frames return incompatible readings and the investor must still act. In effect terms:

- **b** is the investor's prior, formed from comparable deals and inherited priors.
- **a** is the action: the price, the round size, the tranches, the board rights, the follow-on reserve.
- **Γ(b,a)** is the valuation the investor's model predicts.
- **o′** is what actually happens: audited cash, a subsequent round's clearing price, an acquisition, an IPO, or a write-off.
- **s** is the slot. The residual is indexed by slot (revenue, user growth, future market, and the company as a whole), never averaged into one blended score.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The two options in the question lead to different predictions. Option A, "compute the weighted average and invest at that price," predicts that the conflict is a measurement problem inside one valuation frame. Option B, "treat the conflict as a union of well-formed questions with separate grounds and keep a per-slot residual," predicts that no blend can preserve the live signal that says where to look (Fig 9 :4-5, :54-58). What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"): a shape consisting of (i) a per-slot valuation with a stated live residual, (ii) a named anchor that does not move when the investor's opinion moves, (iii) independence bought between the readings, and (iv) a refuter written in advance. Until that shape is bound it predicts nothing and no check in the loop can see it. It is bound in `01` section 0, so the refuter in section 5 can fire on it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the derive-first audit: residual, domain census, verbatim figure census, findings F1 to F10 with refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in venture valuation and startup finance research. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer, venue constraints |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: union versus partition, dependency order, functional group and isomer readings of valuation methods, with a falsifier |
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
- No claim that this derivation is `grounded`, no claim that it returns the right price for any named startup, and no claim that the framework is the only true account of venture valuation.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Ten investors who share the same comparable-company data set are one witness wearing ten names.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness manufactures the correlation that would make its agreement worthless.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
