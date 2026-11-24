# Solution EAR-0018 - figure-grounded package

**Question:** Can a region experience long-term drying even while global average rainfall increases?

**Source:** `earth systems.txt` line 25 (question 18, section 2 "Climate sensitivity, variability, and extremes").

**Field:** regional climate change research.

**Mode:** `specified` on the structural verdict (the global aggregate and the regional slot are different objects, so a rising global mean does not license a rising regional mean); `general` on the shape (residuals are per slot and the cross-scale transform is lossy). Nothing in this folder is `grounded` by this derivation: the physical magnitudes are reported from world sources read by their authors, not measured here.

**Status:** done.

**Registry status:** pending.

**Boundary.** Nothing outside this solution folder was modified. Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. World sources are public URLs actually opened on 2026-11-22 and recorded in `10_source_ledger.csv`.

---

## 1. Restating the question in effect terms

The question asks whether two trends can be true at once:

- **A:** the global mean precipitation over a fixed period is rising (a statement about one aggregate number).
- **B:** a named region over the same period is persistently drying (a statement about one slot).

Each option leads somewhere. If A is taken to settle B, a water manager is told to expect more rain and plans the wrong infrastructure. If A and B are recognised as different quantities, the manager asks the right question: which mechanism moves water into or out of this slot, and does the global constraint say anything about it? The residual is the mismatch produced by treating the aggregate as a prediction for the slot.

## 2. What an answer would look like, bound as an ordinary term

Following the formula's "Direction" step, the sought-for shape is written down and bound so it can accrue a residual like anything else:

> **SHAPE-EAR-0018:** a many-to-one aggregation from N regional slots to one global mean is lossy and non-invertible; therefore a positive trend in the mean and a negative trend in one slot are jointly legal states, and the mechanism that produces the slot trend lives in the transport structure between slots, not in the mean.

If SHAPE-EAR-0018 fails (for example, if the mean were invertible to each slot), the answer to the question would be no. The pre-registered refuter in `01_figure_grounded_audit.md` section 3 is written against this bound term, not against the conclusion.

## 3. What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure lines, findings, pre-registered refuter, recommendation, canonical check, retraction log. |
| `02_outreach_email.md` | Two-stage, one-to-one offer. Residual and refuter first, links only after a verdict is recorded. Never asks for trust or agreement. |
| `03_public_contact_points.csv` | Public, opt-in institutional submission and contact venues in climate science. Not a mailing list. No personal emails. |
| `04_links_and_distribution.md` | Verified public links actually fetched, the wider literature, distribution rules, the two-stage offer. |
| `05_what_shape_means.md` | Canonical reading of "shape" for this question from the eight essays, with the honesty and prestige rules. |
| `06_isomers_and_order.md` | Supporting derivation: why the aggregate and the slot are not the same term, the cross-scale transform, the budget/isomer analogue, with a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | **The one to send.** Claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON shape: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost if wrong, undoable, reversed by, and linked Sources. |
| `10_source_ledger.csv` | One row per source actually read, with author, venue, year, accessed date, quote, field and overlap. |
| `11_audit.md` | Independent second-seat re-census from the residual line alone, round-trip gap R_T, strains, verdict on the solution. |

## 4. What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree with the answer.
- No bulk-send plan.

Three reasons, in the figures' own words:

1. **Agreement is not anchoring.** Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." A list chosen for receptiveness manufactures the correlation that would make its agreement worthless.
2. **A shared pool is one witness.** Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Selecting for likely agreement is selecting for a shared pool.
3. **A verifier must stay outside.** Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." Sending the full framework before asking for a verdict would convert potential outside frames into members of the frame being checked.

Legally, scraping personal emails for unsolicited bulk outreach breaches GDPR and CAN-SPAM style rules in many jurisdictions. Public opt-in venues avoid that failure as well as the structural one.

## 5. Honest standing

This is a **simulated derivation checked for internal consistency against the figures, not a ground reading.** By the framework's own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself"), it cannot settle the question it reports on. The empirical answer in this folder is what the cited climate sources report, not something this run measured. See `05_what_shape_means.md` section 6.
