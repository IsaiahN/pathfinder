# Solution REA-0090: figure-grounded package

**Question:** Which limits to AI progress are technical, and which reflect economic incentives, regulation, or social choices?

**Source:** reasoning.txt line 109

**Section:** 9. Limits, scaling, and architecture

**Mode:** `specified` on the classification procedure and on each domain verdict, `general` on the structural shape. No ground reading settles any named real-world limit, so nothing here is `grounded`.

**Status:** done

**Registry status:** pending. This agent did not modify the registry or anything outside this folder.

---

## The question restated as an effect

We are asked to sort candidate brakes on AI progress into two bins: "technical" and "not technical" (economic incentives, regulation, social choices). Stated as an effect, the decision is:

- Option A: produce one ranked list of limits and label each item technical or non-technical, then average across the list to say which kind dominates.
- Option B: census the residual per slot first, name the anchor that governs each slot, and refuse to merge slots whose anchors differ.

What each leads to: A yields a headline that reads like an answer but aggregates away the only signal that says where to look (Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*). B yields a decision procedure, a per-slot verdict with a reversal condition, and an honest stop where the instruments cannot discriminate. This package takes B.

## What an answer would look like (bound as an ordinary term)

Per the formula's "Direction" rule, the sought-for shape is written down and bound before the run so it can accrue a residual like anything else. The bound shape here is:

> For any candidate limit L on AI progress: name its slot, name the anchor that governs it, name the currency in which it is paid, state the observation that would move L into a different domain, and state what would reverse the whole classification. An answer is a mapping from L to (domain, anchor, reversal), not a list of names.

This is a shape, not a filled slot. The framework *"you get a kind of thing, never the answer itself"* (Fig 9 :32) governs here: the figures return the discriminator, not a verdict on any particular named limit such as compute, data, or a specific statute. Naming those requires a ground reading, which this simulated run does not have.

---

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure findings F1 to F8, pre-registered refuter, retractions. Mode `specified`. |
| `02_outreach_email.md` | Two-stage offer. Residual and refuter first, verdict second, links only after. One to one, never bulk. |
| `03_public_contact_points.csv` | Public, opt-in institutional submission and contact venues in AI limits research. Not a mailing list. |
| `04_links_and_distribution.md` | Verified links actually fetched, what each bears on the question, distribution rules, two-stage offer. |
| `05_what_shape_means.md` | Canonical reading of "shape" from the eight essays, applied to this question. |
| `06_isomers_and_order.md` | Supporting derivation: why limits with the same surface description are different substances, plus dependency order and a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | **The one to send.** Claim, three checkable sub-claims with verbatim lines and refuters, provenance, non-claims, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT / Sources. |
| `10_source_ledger.csv` | Every source actually read, with URL, author, venue, year, accessed date, quote, field, overlap. |
| `11_audit.md` | Independent second-seat re-census from the residual line alone, round-trip gap `R_T`, strains, verdict on the solution. |

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree with the classification.
- No bulk-send plan.
- No assertion that this run settles which real-world limit is technical. It cannot: *"the output is only as good as the validator"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself"* (*The Recursive Self-Improvement Trap*, fetched 2026-11-24).

Three figure reasons for the first three refusals:

1. Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."* Selecting recipients for receptiveness manufactures the correlation that makes their agreement worthless.
2. Seat Map :283: *"A room does not upgrade the label. A room reaching a conclusion without the ground is agreement, and agreement among frames is a weighted average of influence. Adding people raises the vocabulary and does not add an anchor."*
3. Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* The first contact carries the residual and its refuter, never the framework's interiors.

## Standing status of every substantive claim

This folder is a **simulated derivation checked for internal consistency against the figures, not a ground reading**. It cannot settle the question it reports on. Mode is stated on every substantive claim. See `05_what_shape_means.md` section 6 and the header of `01_figure_grounded_audit.md`.
