# Solution EAR-0035 - figure-grounded package

**Question:** How will thawing permafrost release carbon dioxide and methane, and how will those releases vary by place?

**Source:** earth systems.txt line 48 (question 35, section 4: Ice, sea level, and frozen regions)

**Section:** 4. Ice, sea level, and frozen regions

**Mode:** `specified` on the shape claims, `general` on the structural composition rules, not `grounded` anywhere. Nothing in this folder returns a flux number. The quantitative half of the question is recorded as a `gap` at this budget.

**Status:** done

**Registry status:** pending

**Field for public contact points:** permafrost carbon research.

**Boundary.** All work was confined to this folder. No file outside it was modified. Figure citations come from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session; they are never taken from a summary or from memory. The figure README at `FRAMEWORK/reference/FIGURES_README_canonical.md` and the formula at `FRAMEWORK/figures/THE_FORMULA.md` were also read. World sources were fetched and opened; each is recorded with author, venue, year, accessed date and a quote in `10_source_ledger.csv`. Sources that could not be fetched are named as failures in `04_links_and_distribution.md` and are not cited as evidence.

## The residual in effect terms

The question asks for two things joined: a forecast of CO2 and CH4 release from thawing ground, and the variation of those releases by place. In effect, the residual is the gap between what a forecast predicts and what the ground will actually return, measured per place and per gas. Arity: place x gas x pathway x time, at least four slots. Symmetry: CO2 and CH4 are not interchangeable (different redox conditions, different atmospheric lifetimes and forcing). Scale: microbe, landscape, globe, with a lossy transform between each. An answer that collapses the places into one global number has thrown away the signal the question is about (Fig 1 :19, Fig 1 :22).

## What an answer would look like, bound as an ordinary term

A `specified` shape with four parts: (1) a per-place list of the conditions in contact with the carbon pool, enumerated not composed; (2) a thaw pathway that distinguishes gradual active-layer deepening from abrupt thermokarst as a union compound; (3) a production step in which microbes turn newly available organic carbon into CO2 under oxic conditions and CH4 under anoxic conditions; (4) a ground reading per slot that settles magnitude, timing and the CO2/CH4 split. The framework returns that shape and the dependency order between its parts. It does not return the numbers, and this folder does not pretend otherwise.

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure census, findings F1 to F9, pre-registered refuter, retraction log. |
| `02_outreach_email.md` | Two-stage offer. Residual and refuter first, verdict recorded before theory, links only after. One-to-one, not bulk. |
| `03_public_contact_points.csv` | Public, opt-in, institutional contact and submission venues in permafrost carbon research. No personal emails. |
| `04_links_and_distribution.md` | Links actually fetched, wider literature, failed fetches named, distribution rules, two-stage offer. |
| `05_what_shape_means.md` | Canonical reading of "shape" from the figure README and the five essays opened this session. |
| `06_isomers_and_order.md` | Supporting derivation: bond type, union versus partition, dependency order, analogues, with a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer, mode, non-claims, ground tests, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | **The one to send.** Claim, three checkable sub-claims with verbatim lines and refuters, non-claims, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT / cost if wrong, undoable, reversed by / Sources. |
| `10_source_ledger.csv` | One row per source actually read, with overlap and the file that used it. |
| `11_audit.md` | Independent second-seat re-census from the residual line alone, round trip gap R_T, strains, verdict. |

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree with the shape claim.
- No bulk-send plan.

Three reasons, in the figures' own words:

1. **Agreement is not a verdict.** Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*.
2. **Selecting for receptiveness manufactures the disqualifying correlation.** Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* A list ranked by likely agreement buys the opposite of independence.
3. **Sending the theory before the output spends the reader's independence.** Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* Fig 10 :52: *"Bring a characterised residual, never the source."*

Legally, scraping personal emails for unsolicited bulk outreach breaches GDPR and CAN-SPAM style rules in many jurisdictions. That is a practical failure on top of the structural one. Public institutional and opt-in venues are used instead.

## Honest standing of this package

This is a simulated derivation checked for internal consistency against the figures, not a ground reading. *The Recursive Self-Improvement Trap* (essay opened 2026-11-22) states that *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* It also states that *"LLMs can quickly simulate an approximate answer/output"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This package cannot settle the permafrost carbon question it reports on. It says what a complete answer must be shaped like and what would settle it.

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask what would refute the shape claim. Record the answer before showing any theory. Do not pool later agreement as corroboration.
