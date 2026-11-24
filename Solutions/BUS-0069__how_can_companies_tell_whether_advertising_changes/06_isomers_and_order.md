# Isomers and order: persuaded buyer versus would-have-bought-anyway buyer

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

A purchase follows an exposure in two different cases: the ad changed the purchase, and the ad merely reached someone already likely to buy. The observed reading is identical in both. Two questions are owed: (1) are these two cases **isomers** under Fig 12's definition, and (2) what is the order of refusal, mint, and settlement that keeps the derivation honest?

## DOMAIN CENSUS

Atoms held in the business frame: exposure E, purchase P, prior intention I, and the assignment bit A (exposed or holdout). Bonds held: `→` sequence (exposure precedes purchase), `⋛` comparison (purchase rate against baseline), `+` conjunction (both exposure and purchase hold), `−` subtraction (purchase with the ad's contribution removed), and `¬` negation (the refusal that the ad caused the purchase is false). No new primitive is required to write either case.

## DERIVATION

### Q1: Are the two cases isomers?

- Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Operators table :34: sequence is *"the only bond a flat chain can express, so every term today is a sequence whether or not it should be"*.

Write the two molecules over the same atom set `{E, P, I, A}`:

```
M1 (persuaded):     I + E → P        with ⋛(P | A=1, P | A=0) > 0
M2 (likely buyer):  I → P + E        with ⋛(P | A=1, P | A=0) ≈ 0
```

M1 has the ad entering before the purchase in the producing chain; M2 has the prior intention producing the purchase and the exposure merely conjoined with it. Same atoms, different bond arrangement, different substance. A flat log records `E + P` for both, so *"nothing downstream can tell them apart, and nothing signals that anything was lost"* (Fig 12 :15-16). That is exactly the metamerism described in `05_what_shape_means.md` §4.

Status: **triangulated** for the structure (Fig 5's flat-formula collapse and Fig 12's isomer definition are low-overlap readings of the same failure), **single-source** for the business application, since no measurement in this package pays for it.

**Falsifier, written before the run:** if a single flat reading of `E` and `P` can be shown to determine which molecule produced it, without the assignment bit `A`, the isomer claim fails and the two cases collapse into one term. A demonstrated source-discriminating observational instrument would do it.

### Q2: Is this a functional-group or an isomer claim?

- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

If the two cases are written without the assignment bit, they share the substructure `E + P` and are members of one functional group, "exposure followed by purchase". The qualifier that decides the member is `⋛(P | A=1, P | A=0)`. So the weaker, safer claim is the functional-group one: a raw attribution log can say what kind of event occurred (an exposure-purchase pair) and cannot say which member it is. The stronger claim, isomers over the full atom set including `A`, is a real testable claim but needs the instrument. Both are recorded; neither is stated as settled.

### Q3: What is the order of refusal, mint, and settlement?

- Formula step 2: REFUTED owes a refusal, not an explanation. *"the fifth by what is WRONG, and no arrangement of the other four reaches it."*
- Fig 5 :53-55 (amendment): *"refuted: a term we hold is wrong; a term is owed that says so"*, and *"What it removes is not a term but a term's standing to be composed over."*
- Fig 6 :42: *"What is recorded only grows. What is reachable is derived, and it can fall."*

The term held by most measurement stacks is "purchases after exposure are attributable to the ad". Its residual persists and does not trend down under re-specification, which is the opposite-sign shrinking test the selector runs (Formula step 2). So the order is:

1. **Refuse first.** Add `¬(attributed purchase is caused purchase)` as an ordinary term. Nothing is deleted from the record. The reach falls because something was added, per Fig 6 :42-43.
2. **Then mint.** Offer the counterfactual contrast `⋛(P | A=1, P | A=0)` against the bin that owes it, gated by SUPPORT, REACHABILITY, and NOVELTY (Formula step 3). It is not novel as an atom, since randomisation is already in the business frame, so the mint is a binding of an existing atom, not an import that moves the wall (Fig 6 :21).
3. **Then settle.** Fig 5 :32: *"then check it against the ground, then carry it up."* A gate is not the ground (Formula step 5). A well-specified estimand is a specification of what to measure, not a verdict.
4. **Then promote.** Fig 4 :22: *"Only methods cross up. Only head starts come down."* What crosses upward is the method of per-slot counterfactual comparison, not the recording of one campaign's lift.

An order inversion is the error named in the exemplar's F7 and repeated here: if the firm mints a metric, such as "incrementality score", before refusing the attributed-purchase claim, the score inherits the standing of the term it should have refused. Fig 12 :106: *"Nothing composes over what was never admitted as a part."* Nothing should compose over what was just refused either.

**Falsifier for the order claim:** a documented case in which refusing the attributed-purchase claim first produced a worse measurement outcome, at the ground, than minting a new metric on top of it while leaving the old claim standing. If such a case is found and survives a holdout check, the order claim is weakened to a preference.

### Q4: What is the dependency order for the diagnosis?

- Fig 3 :20: *"The chain is ordered by dependency, not by importance."*
- Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Per consumer slot: 1 perception of the purchase response → 2 vocabulary for the counterfactual and the assignment bit → 3 objective stated as `Δ_s` → 4 planning of the holdout → 5 learn and carry. The middle link is where most firms stop, because they have terms for exposure and purchase and none for the purchase under no-ad (Fig 3 :24-26). Effort spent on bidding optimisation above that break arrives at a step that cannot use it (Fig 3 :19).

### Q5: What about the round trip across scales?

- Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

Send up the per-consumer counterfactual method (abstraction, `T_A`), bring it back down as a campaign-level decision rule (concretisation, `T_E`), and measure `R_T = gap(x, (T_E ∘ T_A)(x))`. What the coarser description cannot hold is at least two things: the per-slot heterogeneity Blake et al. report, and the spillover between geo slots that a campaign-level read averages away. Treating "consumer-level lift" and "campaign ROAS" as the same quantity would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names.

## CONCLUSION

Under Fig 12 the two cases are **isomers over the full atom set** and **members of one functional group** over the raw log. The flat attribution record cannot tell them apart, which is the collapse Fig 12 names, and the assignment bit is the bond information that was never recorded. The honest order is refuse the attributed-purchase claim first, then mint the counterfactual contrast, then settle it against the holdout, then carry the method upward with a measured `R_T`. The isomer reading is `specified`, ungrounded, with falsifiers stated in Q1 and Q3. No new primitive is required.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session, `THE_FORMULA.md`, and the four essays fetched 2026-11-22. No purchase data, holdout, or market measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 (membrane, `R_T`, methods up), Fig 5 (amendment, refusal and settlement), Fig 6 (what import adds, what recording grows), Fig 9 (describe before looking), Fig 12 (flat formula, isomer, functional group, arrangement is the substance), Operators table (sequence and subtraction), Formula (steps 2, 3, 5, 7). Strained after re-census: none. The Fig 13 substrate is not applied to marketing quantities; see strain S1 in `01_figure_grounded_audit.md`.
