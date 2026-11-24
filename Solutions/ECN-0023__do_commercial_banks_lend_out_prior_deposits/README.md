# Solution ECN-0023: figure-grounded package

**Question:** Do commercial banks lend out prior deposits, or does lending itself create deposits?

**Source:** economics questions.txt line 33

**Section:** 3. Money, banking, and central banks

**Mode:** `general` on the structural shape (the bond typing and the union split), `specified` on the four domain applications, `gap` on the numeric attribution of deposit creation shares and on the exact mix of binding constraints. Nothing here is `grounded`. This is a simulated derivation checked for internal consistency against the figures, not a ground reading, so it cannot settle the question it reports on.

**Status:** done

**Registry status:** pending

**Boundary.** Nothing in this folder is a repo edit. Everything was written inside `Solutions/ECN-0023__do_commercial_banks_lend_out_prior_deposits/`. Figure quotes came from `FRAMEWORK/reference/03-FIGURES_TEXT.md` only. World sources were opened on 2026-11-23 and are logged with URL, author, venue, year, accessed date and quote in `10_source_ledger.csv`.

## What an answer would look like

Restated as an effect: decide which typed bond joins the loan L and the deposit D on a bank's balance sheet. Option A, lend out prior deposits, asserts `D → L` (sequence: the deposit had to happen first, so it is a prior stock). Option B, lending creates deposits, asserts `L ⇒ D` (production: the deposit does not exist before the loan fires). What an answer would look like is (1) a typed bond, (2) a statement of which quantity is the constraint at each scale, and (3) a named ground that would settle the bond, namely a ledger trace, a cleared payment and central bank data. That sought-for shape is written down here and in `01` before the derivation, so it is an ordinary term and can be refused (THE_FORMULA, Direction).

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure census, findings F1 to F9 with refuters, pre-registered refuter, recommendation, canonical usage check, retraction log. |
| `02_outreach_email.md` | Two-stage offer, one to one. Residual and refuter first, links only after a verdict is recorded. Never asks for trust or agreement. |
| `03_public_contact_points.csv` | Public, institutional, opt-in contact and submission venues in banking and credit creation research. No personal emails, no receptiveness rank. |
| `04_links_and_distribution.md` | Verified public links actually fetched, wider literature, distribution rules, two-stage offer, fetch failures. |
| `05_what_shape_means.md` | Canonical reading of "shape" from the eight essays, with the prestige rule and the simulated-status rule. |
| `06_isomers_and_order.md` | Supporting derivation: why the two theories are isomers over a shared atom set, scale as a membrane, order by dependency, with a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | The one to send. Three checkable sub-claims, verbatim figure lines, refuters, non-claims, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON shape: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT / Sources. |
| `10_source_ledger.csv` | One row per source actually read, with overlap and where it was used. |
| `11_audit.md` | Independent second-seat re-census, verbatim line checks, round-trip gap R_T, strains, verdict. |

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree with the claim.
- No bulk-send plan.
- No claim that this derivation settles the economics. The reported ground readings in the world sources are secondary reports, and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Agreement among sources that share a pool is one witness, not two.

The forced "A or B" is itself refused as malformed. The evidence supports production at the loan/deposit bond and settlement funding as a separate loop at a different scale. Those are joined in a union compound and are never averaged into a single verdict (Fig 9 :58).
