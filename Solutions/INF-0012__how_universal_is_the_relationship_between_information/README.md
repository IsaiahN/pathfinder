# Solution INF-0012 - figure-grounded package

**Question:** How universal is the relationship between information erasure and thermodynamic cost in real, noisy systems?

**Source:** Information Theory.txt line 17

**Section:** 2. Information, physics, and thermodynamics

**Field for public contact points:** Landauer principle research.

**Mode:** `specified` on the shape claim, `general` on the structural rule. Nothing in this folder is `grounded`: this is a simulated derivation checked for internal consistency against the figures, and the figures do not themselves contain a Landauer principle. See `05_what_shape_means.md` section 7.

**Status:** done

**Registry status:** pending

---

## The question restated as an effect

The question asks whether the relationship "erasing one bit of information costs at least kT ln2 of heat" is *universal*, and asks this specifically for *real, noisy systems*. Stated in effect terms, two readings are on the table:

- **Reading A (universal equality).** The relationship is a single law that holds identically for every physical implementation, in every regime, with one constant price. What it leads to: a `general`-mode verdict that ignores the boundary conditions under which the relationship was actually derived and measured, and that treats an average as if it were a per-case fact.
- **Reading B (substrate-relative priced floor).** The relationship is a lower bound whose domain of validity is named by the conditions that produce it (something to count, a direction to spend, a finite region, a cross-kind composition), approached only in the reversible limit, and exceeded in real, finite-time, noisy systems. What it leads to: a checkable, per-domain verdict with stated refuters and an honest stop where the figures are silent.

The residual R is the gap between the ideal statement and the behaviour of real, noisy systems. Its shape: arity greater than one (a union of overlapping conditions, not one hard question); symmetry broken (a lower bound, not a symmetric equality); scale-dependent (one bit at the microscopic scale versus an emergent state function in the macroscopic limit).

## What an answer would look like, bound as an ordinary term

The sought-for shape is written down and bound before the run, per the formula's "Direction" rule: *"make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else"* (`THE_FORMULA.md`, Direction). The shape bound here is:

> A `specified` claim that the erasure-cost relationship is a **priced floor** (bits and thermodynamic cost are two currencies that do not add), that it is **substrate-relative** (universal only within the domain the figures name), that in noise it is a **per-slot** quantity (averaging hides where the live residual is), and that the "universality" question is a **union** to be unbundled before it is searched.

This shape is then allowed to accrue a residual like any other term, and the pre-registered refuter in `01_figure_grounded_audit.md` section 5 is written before the conclusion.

---

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: proposal header, residual, domain census, figure census, findings F1 to F8, pre-registered refuter, recommendation, canonical usage check, retraction and confirmation log. Mode `specified`. |
| `02_outreach_email.md` | The two-stage offer, one-to-one, state of the refuter first, links only after. |
| `03_public_contact_points.csv` | Public, opt-in institutional venues in Landauer principle research. Not a mailing list. |
| `04_links_and_distribution.md` | Verified public links actually fetched, wider literature, distribution rules, the two-stage offer. |
| `05_what_shape_means.md` | Canonical reading of "shape" for this question from the framework essays and figure text, with sources and a self-correction. |
| `06_isomers_and_order.md` | Supporting derivation: the two-currency price, noise as discarded detail, union versus partition, with a falsifier. |
| `07_the_tether_answer.md` | Synthesized `specified` answer, per-domain verdicts, non-claims, falsifiers, one-paragraph version. |
| `08_expert_verification_packet.md` | **The one to send.** Claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost if wrong, undoable, reversed by, and linked sources. |
| `10_source_ledger.csv` | One row per source actually read, with author, venue, year, accessed date, quote, field, overlap, status, used-in-file. |
| `11_audit.md` | Independent second-seat re-census from the residual line alone, comparison with the primary census, round-trip gap R_T, strains, verdict. |

## What is deliberately not here

- No personal emails of named individuals, and no ranking of people by how likely they are to agree.
- No bulk-send plan. The venues in `03_public_contact_points.csv` are public and opt-in.
- No claim that this derivation settles the physics question. Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* The second seat in `11_audit.md` shares this session's evidence pool, so its agreement is internal consistency, not corroboration.
- No demand that a reader trust the framework before checking the output. Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."*

## Source discipline

Figure quotes are cited as `Fig N :line` against `FRAMEWORK/reference/03-FIGURES_TEXT.md` and were checked character by character this session. World sources were opened and are recorded with a quote in `10_source_ledger.csv`. Local framework files use `local: PATH`. The simulated status follows the framework's own rule in *The Recursive Self-Improvement Trap*: LLM output can *"simulate an approximate answer/output with the formula"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."*

## Suggested next step

Take `01` and `08` to the public venues in `03_public_contact_points.csv`. Ask what would refute the shape claim. Record the verdict before offering any theory. A failure is more useful than an endorsement.
