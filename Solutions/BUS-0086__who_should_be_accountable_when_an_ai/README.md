# Solution BUS-0086: figure-grounded package

**Question:** Who should be accountable when an AI-driven business decision causes harm: the vendor, the firm, the manager, or the decision-maker?

**Source:** business.txt line 114

**Section:** 9. Technology, data, and artificial intelligence

**Mode:** `specified` on the substantive claims, `general` on the structural shape. No case-specific ground reading settles the attribution, so nothing here is `grounded`.

**Status:** done

**Registry status:** pending (set by the registry step, not by this folder)

**Boundary.** Work was confined to this folder. No file outside it was edited, except the required append to `Logs/completion_log.md`. Every figure quote was taken from `FRAMEWORK/reference/03-FIGURES_TEXT.md` opened this session. Every world URL was opened this session, or its abstract was read through Crossref where the publisher blocked direct fetch (recorded honestly in `10_source_ledger.csv`).

## Restatement as an effect

A harm H arrives from an AI-driven decision D. Four candidates are offered: vendor, firm, manager, decision-maker. The effect question is not "who deserves blame" but "which thing can settle the question of who answers for H and does not change its answer because one of the four pushes on it." Each option leads somewhere different:

| option offered | what it leads to |
|---|---|
| vendor | attribution to the artifact's producer; stops at the model's closure, which cannot contain the deployment decision (Fig 6 :23) |
| firm | attribution to the deploying entity; risks aggregating per-slot harms into one organizational average (Fig 1 :22) |
| manager | attribution to the overseer; a seat-like role, but one with a stake in the reading (Fig 10 :59) |
| decision-maker | attribution to the human who approved D; the closest to a human anchor, but still a party to the case (Fig 10 :86) |

## What an answer would look like (bound as an ordinary term)

Before deriving, the sought-for shape is written down and treated as a claim that can accrue a residual, per `THE_FORMULA.md` "Direction". The answer sought is: **a per-harm, per-slot attribution, enumerated from the habitat of the harm, with the four candidates ranged separately against a human-facing anchor that is external to all four, and with the conditions unbundled before any "who" is searched.** If a real case returns a single name that is stable under independent recomputation and does not move when the parties push on it, that is a `grounded` result for that case and is recorded separately.

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure census, findings with refuters, pre-registered refuter, retractions. Mode `specified`. |
| `02_outreach_email.md` | Two-stage offer. Residual and refuter first, links only after a verdict is recorded. One-to-one, never bulk. |
| `03_public_contact_points.csv` | Public, opt-in institutional contact and submission venues in AI governance and accountability research. No personal emails. |
| `04_links_and_distribution.md` | Verified public links actually fetched, wider literature, distribution rules, two-stage offer. |
| `05_what_shape_means.md` | Canonical reading of "shape" for this question from the framework essays and the figures README. |
| `06_isomers_and_order.md` | Supporting derivation: why this is a union of conditions, not a list of four actors, and what order the attribution runs in. Falsifier included. |
| `07_the_tether_answer.md` | Synthesized answer, mode, non-claims, refuters, what would settle it, one-paragraph version. |
| `08_expert_verification_packet.md` | The one to send. Claim, three checkable sub-claims with verbatim lines and refuters, non-claims, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT / cost if wrong, undoable, reversed by / Sources. |
| `10_source_ledger.csv` | Every source actually read, with URL, author, venue, year, accessed date, quote, field, overlap, status, used_in_file. |
| `11_audit.md` | Independent second-seat re-census, round trip gap `R_T`, strains, verdict. |

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree with this answer.
- No bulk-send plan.

Three reasons in the figures' own words:

1. **A room does not upgrade the label.** Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Adding agreeable recipients raises the vocabulary and does not add an anchor.
2. **Selecting for receptiveness manufactures the disqualifying correlation.** Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."*
3. **Asking for trust before a check spends the reader's independence.** Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."*

Legally: scraping personal emails for unsolicited bulk outreach breaches GDPR and CAN-SPAM style rules in many jurisdictions. That is a practical failure on top of the structural one. The venues in `03_public_contact_points.csv` are public submission or contact routes, not a mailing list.

## Status of the whole package

This is a **simulated derivation checked for internal consistency against the figures, not a ground reading.** The framework's own recursion essay warns that LLM output is simulacra and that a testable output would have to be derived from the real architecture or by working the formula by hand. This package cannot settle the question it reports on. It states a shape, the conditions that would close it, and the refuters that would break it.
