# Solution EAR-0031 : Tether outreach, figure-grounded package

**Question:** How quickly will Greenland and Antarctic ice loss raise sea levels under different warming pathways?

**Source:** `earth systems.txt` line 44 (question 31).

**Section:** 4. Ice, sea level, and frozen regions.

**Mode:** `general` on the structural shape, `specified` on the per-domain verdicts, `gap` on the literal number a rate would require. Nothing here is `grounded` as a forecast. The historical measured losses are `grounded` observations; the forecast is not.

**Status:** done.

**Registry status:** pending (set by the registry owner, not by this folder).

## Restating the question as an effect

The question asks for a rate, millimetres of global mean sea level per year, contributed by two ice sheets, conditional on a warming pathway. Stated in effect terms, R is the gap between what an ice-sheet and sea-level frame predicts and what the observing system returns, indexed per object slot (Greenland, West Antarctica, East Antarctica) and per process (surface mass balance versus ice dynamics), at several scales (decadal observation, 2100 projection, multi-century commitment). An answer would look like a per-sheet, per-pathway, per-horizon rate with an uncertainty band whose width is set by process understanding, plus a separate committed total and a separately stated deep-uncertainty tail. We bind that shape as an ordinary term in `01`, `06` and `09` so the frame's own preference for a single number can be refused by the same test as everything else.

What each option leads to: option A, a single headline rate or a single global number, aggregates away the live per-slot signal and treats model agreement as an anchor. Option B, the shape with per-slot verdicts kept separate, keeps the ground reachable and records what the instruments cannot yet distinguish.

## Honest standing of this folder

This is a **simulated derivation checked for internal consistency against the figures**, not a ground reading. The framework's own *The Recursive Self-Improvement Trap* says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* No ice, ocean, or sea-level measurement was taken here. The figures decide the shape of the answer, not the number. The number belongs to the ground: satellite altimetry, gravimetry, tide gauges, and the process physics that the world sources in `10_source_ledger.csv` report. This folder cannot settle the question it reports on.

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure census, findings F1 to F9 with modes and refuters, pre-registered refuter, retraction log. |
| `02_outreach_email.md` | The two-stage offer. Residual and refuter first, verdict before theory, links only after. One-to-one, never bulk. |
| `03_public_contact_points.csv` | Public, opt-in, institutional submission and contact venues in ice-sheet dynamics and glaciology. No personal emails. |
| `04_links_and_distribution.md` | Verified public links actually fetched, the wider literature, distribution rules, two-stage offer. |
| `05_what_shape_means.md` | Canonical reading of "shape" from the eight essays, with the correction that the limit governs missing primitives. |
| `06_isomers_and_order.md` | Supporting derivation: rate versus committed total, union unbundling, threshold and sequence bonds, with a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer, mode, per-domain verdicts, non-claims, what would settle it, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | **The one to send.** Claim, three checkable sub-claims, verbatim figure lines, refuters, non-claims, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost if wrong, undoable, reversed by / Sources. |
| `10_source_ledger.csv` | One row per source actually read, with author, venue, year, accessed date, quote, field, overlap, status, file used in. |
| `11_audit.md` | Independent second-seat re-census from the residual line alone, round-trip gap `R_T`, strains, verdict on the solution. |

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree.
- No bulk-send plan.
- No single global number presented as the answer. The figures do not return one (Fig 9 :32; Fig 13 :134).

Three reasons in the figures' own words:

1. **Room is not anchor.** *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). A list selected for agreement manufactures the correlation that makes agreement worthless (Fig 2 :40).
2. **The ground settles, not consensus.** *"The ground enters as the only metric."* (Fig 1 :23). Here that metric is measurement, not the number of models that agree.
3. **Do not spend the checker's independence.** *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact carries the residual and its refuter, never the framework's interiors.

Legally: unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets a sending domain blacklisted. The venues in `03` are institutional and opt-in.

## Suggested next step

Take `01`, `08` and `02` to the public venues in `03`. Ask what a refutation would look like. Record the verdict on stage 1 before offering any theory. Do not pool later agreement as corroboration.
