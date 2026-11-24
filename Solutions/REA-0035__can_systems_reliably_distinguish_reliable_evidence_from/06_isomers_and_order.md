# Union, order and near-isomers in the reliability question

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The word "reliably" in the question bundles four conditions over a shared cast: classify a claim against a ground, land a correction in an audience, keep the channel to the live record reachable, and avoid certifying the detector's own completeness. Two questions are owed: what is the **dependency order** among them, and which close-looking alternatives are actually **different terms** rather than variants of one term.

## DOMAIN CENSUS (restated tersely; full census in `01` section 1)

Atoms available for this derivation: claim, source, reader, record, channel, detector, habitat. Bonds available: the seven binary operators plus negation (Fig 12, Operators table). Currency per domain: per-slot residual (D1), agreement and belief change (D2), contact and cascade (D4), absence of an internal anchor (D3). Anchors: the ground for D1 and D4, human judgment for goodness-for-person inside D2, none internal for D3.

## Q1 - Union or partition? (`general`)

Fig 9 :54: *"when the split lands on a union rather than a partition, unbundle before you search again"*. Fig 9 :55: *"A single lever clears the region where only one condition holds and leaves the intersections standing"*. Fig 9 :57: *"a case in two conditions is not a harder case of either"*. Fig 9 :4: *"Split it rather than search."*

Test: does moving one lever (a better classifier) reduce the residual in the intersection of "correctly labelled" and "still believed"? The world literature says no, and says why: Schüler et al. (2026) found an enriched correction left outdated information activated; Zhou et al. (2026) found fact-checking reduced belief without eliminating the continued-influence limit. So the union test is passed. The conditions overlap, and the overlap is a specific compound.

**Verdict:** union. Four loops, four verdicts, never averaged. `general` on the structure, with the world studies as secondary corroboration only.

## Q2 - What is the dependency order? (`specified`)

Fig 3 names the chain perception, vocabulary, objective, planning, learn and carry, and warns: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Applied:

1. **Perception.** Can the system tell this claim from the one that was there before, and read the record at all? Without a live channel this is the break; nothing above arrives (Fig 10 :24).
2. **Vocabulary.** Does it have terms for what the item affords: a source chain, a timestamp, a retraction, a provenance assertion? These are what the search can reach. A detector with only surface features has no term for provenance.
3. **Objective.** Can it say what would count as progress in its own terms? Here the objective is a falling per-slot residual against an unmoving anchor, not a rising count of debunks (Fig 5 :48, Fig 1 :23).
4. **Planning.** A route under incomplete information: SEARCHED first, then INWARD or OUTWARD, kept opposed (formula step 7).
5. **Learn and carry.** Name what worked, verify it, carry the *method* upward (Fig 4 :22), not the list of occasions.

Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."* A settled claim-verdict can serve as an atom for the correction loop; a correction that has not settled cannot. That is why the order is D1 before D2, not the reverse.

The self-certification question (D3) is last in dependency order and is answered by a refusal, not by a further loop. The habitat (D4) runs alongside D2 as the supplier of contact, not as a judge (Fig 11 :10 to :16).

## Q3 - Are the four loops isomers? (`specified`, partially strained)

Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

- As first written in the census, the loops share only a subset of atoms (D1 has the record but not necessarily the audience; D2 has the audience but not necessarily the record). By Fig 12's definition they are **not** isomers; they are members of a **functional group**, a term that "fixes the outcome" by its presence (Fig 12 :124).
- The stronger form: write all four over the full shared atom set `{claim, source, reader, record, channel, detector, habitat}` and vary only the bond. Then:
  - D1 is `claim ⋛ record` (a threshold comparison between a prediction and what the ground returns), with `source → claim` as the provenance bond;
  - D2 is `record ⇒ reader_belief` (production: a corrected state that did not exist before), with `claim ∥ reader_belief` where the continued influence holds both;
  - D4 is `habitat → channel → claim` (a cascade, introduction available and exclusion not, Fig 11 :61);
  - D3 is `¬(detector certifies detector)`, the unary refusal, which is not a bond at all.
  
  Under that reading they **are** isomers: same atoms, different bonds, different substances. The difference is invisible if you record only the ingredient list ("a system, some evidence, some checks") and decisive in behaviour. This is the claim worth testing.
- **Falsifier, written before this conclusion:** if any one loop requires an atom that none of the others can be written over (for example, D2 requires a belief state that cannot be expressed as a bond over reader and claim), the isomer claim fails and the functional-group reading stands. The union verdict in Q1 is unaffected either way, since it rests on Fig 9, not on Fig 12.

**Strain named, not hidden.** Operators table: ⋛ is *"a threshold relation between two quantities"*. At D1 the operands are a prediction and a ground reading, both quantities, so the type fits. At D2 I used ⇒ (production), which is ordered and is not ⋛. Mixing the two would be the flat-formula failure Fig 12 :6 names. The isomer claim therefore depends on keeping bond types explicit; that is the whole point of the figure.

## Q4 - Near alternatives that are not the same term

Each row is a pair that looks like a variant but carries a different bond, so a search that conflates them counts two candidates as one, or one as two.

| near alternative | why it is a different term | figure / operator |
|---|---|---|
| "Detect fake-looking text" vs "track the ground" | style is a surface reading; tracking the ground needs a provenance import. Same projection, different source. | Fig 6 :30, *Hard Problem is About Source* |
| "Issue a fact-check" vs "correction lands" | production (⇒) is not a threshold comparison (⋛). A label can be produced and not compose over. | Fig 12 :77 to :79, Fig 12 :107 |
| "Confidence calibration" vs "ground settlement" | a gate is not the ground. Calibration scores the frame's own output. | Formula step 5, Fig 1 :27 |
| "Provenance verified" vs "claim true" | a signed chain is a gate; it can be correctly formed and still attach to a false assertion. C2PA refuses the value judgment. | C2PA principles; formula step 5 |
| "Many checkers agree" vs "independent instruments agree" | high overlap makes agreement a convention; only low overlap makes it a verdict. | Fig 2 :31, :40, :41 |
| "Search found nothing" vs "nothing exists in the closure" | underivable and unreachable-at-budget are different facts with different instructions. | Fig 8 :39 to :43 |
| "Refuse a claim" vs "remove a claim from the record" | a refutation adds a term; nothing is deleted, and the reach falls because something was added. | Fig 6 :42 to :46, Operators table negation row |

The seventh row matters most for detector design. A system whose vocabulary holds only accumulation (no negation operator) can correct a claim and cannot *carry* the correction, because "a vocabulary without it can only accumulate" (Operators table :58). A takedown removes an item from view; a refusal keeps the reason in the record and drops the reach by derivation.

## Q5 - Why the order of refusal comes before any reliability mint

Fig 5 amendment: a residual whose content is "a regularity I hold is false" owes a refusing term, and the candidates rank by *"a term whose residual PERSISTS AND DOES NOT TREND DOWN"* (Fig 5 :58 to :60). For a detector, the term most worth refusing is often the one it is most confident in, because its residual is flat and persistent. Fig 5 :62 to :64 warns that the sought-for shape is held as a preference rather than a term, so the mechanism cannot see it. The discipline in `README.md`, where "reliably" was bound as an ordinary term before the run, is the remedy.

## CONCLUSION

The question is a union of four loops with a strict dependency order: a live channel, then vocabulary for source and record, then a per-slot objective against a non-updating anchor, then a method that can be carried upward, with refusal before mint. Over the shared atom set the loops are a genuine isomer claim with a stated falsifier; over the atoms as ordinarily written they are a functional group. Both readings are kept because the first is checkable and the second is the honest default until it is tested.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; THE_FORMULA; Operators table; the eight essays; the C2PA principles; FEVER, FEVEROUS and the two cognition studies. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency), Fig 4 (methods only, round trip), Fig 5 (refusal, persistent flat residual), Fig 6 (import, record grows and reach falls, instruments), Fig 8 (union, no proof of absence, underivable versus budget), Fig 9 (split, union, describe before looking), Fig 10 (channel decay), Fig 11 (habitat, introduction not exclusion), Fig 12 (isomer, functional group, settled molecule, bond typing), Fig 13 (shape and unreached cases), Operators table (negation is unary). Strains after re-census: the bond typing of D2 as production rather than comparison, and the isomer claim's dependence on a shared atom set. Both are named, neither is smoothed over.
