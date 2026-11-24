# Solution INF-0044

**Question:** How do cells integrate signals from multiple pathways when those signals conflict or arrive at different times?

**Source:** Information Theory.txt line 55

**Section:** 5. Biological information and the origin of life

**Mode:** `general` on the structural shape, `specified` on the per-domain claims, `gap` on the identity of a molecular mechanism. Nothing here is `grounded`. Every substantive file is a simulated derivation checked for internal consistency against the figures, not a ground reading, so it cannot settle the question it reports on.

**Status:** done

**Registry status:** pending

## What this solution decides, in effect terms

A cell holds several pathways, each a bounded system that predicts what a ligand affords. It must produce one phenotype from several pathway outputs. Two conditions are named in the question and a third is implicit in any real cell: simultaneous combination, conflict between pathways, and arrival at different times. The residual is not "which pathway wins". It is whether the per-pathway signal survives the integration at all, whether the bond between pathway outputs is the right one, whether an external ground still reaches the decision, and whether arrival order is preserved as information rather than averaged away.

What an answer would look like is bound as an ordinary term before the run, per the "Direction" discipline in `THE_FORMULA.md`: an answer must (a) keep the signal indexed per pathway, (b) state which typed bond joins the pathways, (c) name a ground that does not update on the cell's own decision, and (d) say whether the bond is symmetric or ordered. Any candidate answer that fails one of these four is refused before a molecule is named. The framework returns a shape under (a) to (d); the specific molecule, rate or circuit is a provenanced import from cell biology with a shadow test, never a figure derivation. See `07_the_tether_answer.md` and `09_watson_answer.md`.

## Headline verdict

The question is a union of overlapping conditions, not one integration problem with one answer. Figures fix the shape any answer must have: per-pathway indexing instead of a scalar average (Fig 1 :19, :22), a typed bond that carries information the pathway list does not (Fig 12 :46, :94), an ordered bond when order carries the signal (Fig 12 :72, :74), triangulation against an anchor that does not update (Fig 2 :29, :35, :45), and a channel that decays while the ground does not (Fig 10 :24). No figure line names MAPK, NF-kappa B, mTOR, a fold-change circuit or any rate constant. That is a declared `gap`, reported as unreachable at this budget rather than silence (Fig 8 :39, Fig 13 :134). Verdicts per domain are kept separate and never averaged into one cellular "integration rule".

## Files

- `README.md` (this file)
- `01_figure_grounded_audit.md`: residual, domain census, verbatim figure findings F1 to F9, pre-registered refuter, recommendation, canonical usage check, retraction and confirmation log.
- `02_outreach_email.md`: two-stage offer, residual and refuter first, links only after, one to one.
- `03_public_contact_points.csv`: public, opt-in institutional submission and contact venues in cell biology, systems biology and biophysics. No personal emails.
- `04_links_and_distribution.md`: verified links actually fetched, relevant wider literature, distribution rules, two-stage offer.
- `05_what_shape_means.md`: canonical reading of "shape" from the eight essays, with sources and a visible correction.
- `06_isomers_and_order.md`: supporting derivation on typed bonds, isomers, functional groups, cycles and order, with a falsifier.
- `07_the_tether_answer.md`: synthesized answer, modes, non-claims, what would settle it, honest stop, one-paragraph version.
- `08_expert_verification_packet.md`: the one to send. Claim, three checkable sub-claims with verbatim lines and refuters, non-claims, provenance, 20-minute check.
- `09_watson_answer.md`: canonical WATSON shape with QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT, cost if wrong, undoable, reversed by, and linked sources.
- `10_source_ledger.csv`: every source actually read, with author, venue, year, accessed date, quote, field, overlap, status and use.
- `11_audit.md`: independent second-seat re-census from the residual line, round-trip gap R_T, strains and verdict.

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree.
- No bulk-send plan.
- No claim that a simulated derivation settles a biological question.

## Boundary

Nothing in this folder was modified outside `Solutions/INF-0044__how_do_cells_integrate_signals_from_multiple/`. All figure citations use `FRAMEWORK/reference/03-FIGURES_TEXT.md` and cite as `Fig N :line`. Quotes there are the authority; summaries are not.
