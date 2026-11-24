# Solution ECN-0025

**Question:** Do interest-rate changes reliably control inflation and employment, or do their effects vary substantially across time and economies?

**Source:** economics questions.txt line 35

**Section:** 3. Money, banking, and central banks

**Mode:** `specified` on the structural verdict, `general` on the indexing and union rules. Nothing here is `grounded`; no per-economy, per-date coefficient is settled by a measurement in this package.

**Status:** done

**Registry status:** pending

## What this is

A figure-grounded derivation of the residual, a WATSON run with world sources actually opened, a pre-registered refuter, and a public, opt-in verification packet. The answer is a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on (see `01_figure_grounded_audit.md` header and `05_what_shape_means.md` section 6).

**Field for public contact points:** monetary transmission research. All venues in `03_public_contact_points.csv` are institutional, public, and opt-in. No personal emails, no receptiveness ranking, no bulk-send plan.

## The residual in one line

R_s,t = |Γ_s,t(b,a) - o'_s,t| for the policy action a = a change in the policy rate, indexed by economy slot s and time t, against observed inflation and employment o'. The question is not whether Γ fits on average. It is whether the per-slot residual stays small and stable as the cast (actors, currency, anchor) changes across economies and across time.

## Files

- `README.md` (this manifest)
- `01_figure_grounded_audit.md` (derive-first audit: residual, domain census, verbatim figure lines, findings, pre-registered refuter, retraction log)
- `02_outreach_email.md` (two-stage offer, one-to-one)
- `03_public_contact_points.csv` (public institutional contact and submission venues, monetary transmission research)
- `04_links_and_distribution.md` (verified links, distribution rules)
- `05_what_shape_means.md` (canonical reading of "shape" from the eight essays)
- `06_isomers_and_order.md` (supporting derivation: the ordered transmission chain and its union)
- `07_the_tether_answer.md` (synthesized answer, non-claims, falsifiers, one-paragraph version)
- `08_expert_verification_packet.md` (the one to send: three checkable sub-claims with verbatim lines and refuters)
- `09_watson_answer.md` (canonical WATSON output)
- `10_source_ledger.csv` (provenance for every source actually read)
- `11_audit.md` (independent second-seat re-census and round-trip gap)

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree.
- No bulk-send plan.
- No numeric estimate of a policy multiplier for any named economy at any named date. That quantity is a declared `gap` in this package, not a hidden answer.
