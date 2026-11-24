# Union, order and feedback in the downturn question

**Mode: `specified` on the structure, `general` on the dependency rule.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

`01` split the question into a reachability condition (depth) and an absence condition. Three further questions are owed: (1) is that split a partition or a union? (2) in what dependency order must the regimes be read? (3) what is the bond structure of the feedback loop that makes a downturn persist, and is there a falsifier for the structural claim?

## DOMAIN CENSUS

Atoms held from the figure set: R as per-slot residual, Γ_1 as private closure, Γ_2 as policy closure, an atom that may be absent, an import, a ground, an instrument. Bonds held: sequence (→), comparison (⋛), cycle, negation (¬). No new primitive is available without an import from the economics frame, and every such import is provenanced in `10_source_ledger.csv`.

## DERIVATION

### Q1 — Partition or union?

- Fig 9 :4: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."
- Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- The two conditions overlap. A balance sheet recession is both a broken interest-rate channel (depth) and an absence of willing borrowers (absence). A liquidity trap is both money held rather than spent (absence of a spender) and a failure of the expectation channel (depth).
- ⇒ The split is a **union**, not a partition. Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
- Consequence: testing "markets clear" against the whole population of downturns and testing "stimulate" against the whole population are both single-lever moves. They clear their own regions and leave the intersection standing. The residue is not a harder case of either; it is a specific compound (Fig 9 :57).

**Falsifier, written before the run:** if a single mechanism closes both conditions in every observed downturn so the compound behaves as a partition, this union claim fails. Blanchard's review (JEP 2018, read 2026-11-22) is the relevant counter-evidence to watch: he keeps the natural-rate hypothesis as the null while giving some weight to hysteresis, which is exactly a two-condition picture rather than a one-lever picture.

### Q2 — Dependency order

Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."

Ordered chain for this question:

1. **Perception.** Is there a persistent per-slot gap? Instrument: sectoral output, employment, credit and balance-sheet data. Without this, nothing downstream can be diagnosed.
2. **Vocabulary.** Do we have terms for what the situation affords? Output gap, natural rate, liquidity trap, debt overhang, hysteresis. This is the middle link with no instrument of its own. Fig 3 :26: "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."
3. **Objective.** What counts as recovery, in the economy's own terms? Employment, output, price stability, within a stated horizon H. This is where the classical and Keynesian positions silently differ.
4. **Planning.** Which frame holds the missing term? Γ_1 (more search) or Γ_2 (import).
5. **Learn and carry.** Name what worked, verify it against the ground, and carry the *method* to the next downturn. Fig 4 :22: "Only methods cross up. Only head starts come down."

A reading taken below a break is a reading of nothing (Fig 3 :22). Debating the size of a stimulus before specifying the objective and the closure is a below-break reading. Most effort in this debate lands above the break, where the measurements already exist.

### Q3 — Feedback structure: cycle, not chain

- Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- The debt-deflation mechanism is a negative-sign cycle: falling prices raise real debt; higher real debt forces asset sales and deleveraging; lower demand lowers prices further. The output re-enters as input and the loop closes. Koo's account (CSIS 2009 and House testimony 2010, read 2026-11-22) states that the private sector moves from profit maximisation to debt minimisation and that GDP shrinks unless someone else borrows and spends the repaid funds.
- A recovery story built as a chain (shock → lower wages → higher demand → recovery) cannot close by construction; it has no re-entry. If the empirical object is a loop, a chain-shaped model is the wrong notation, and no amount of tuning its parameters produces closure.
- Fig 12 :119: "catalyst. A part that survives its own use." A public spender that remains after the private sector repairs is a candidate catalyst, but the claim is `specified` and unmeasured here; it needs an instrument to tell a catalyst from a one-off impulse.

**Falsifier, written before the run:** if the persistence can be fully described by a chain with no re-entrant output, then the cycle reading is a notation imposed on a linear process and should be withdrawn. Scheffer et al. (Nature 2009, read 2026-11-22) are the cross-field check: critical slowing down and rising autocorrelation are signatures of a system whose return rate is collapsing, which is a loop property, but the discriminator has to be measured in the data, not asserted here.

### Q4 — Are the two regimes isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Written over the full shared atom set {persistent residual, private closure, policy closure, absent spender, import, ground}, depth and absence share every atom. They differ in one relation: in depth, the needed spender is inside Γ_1 and the bond to it is a **reachability** relation; in absence, the spender is outside Γ_1 and the bond is an **import** relation. Same atoms, different bond, different substance. They are isomers under Fig 12's definition, and this is why the same aggregate reading cannot tell them apart: the difference is carried by the bond, not by the ingredients.
- The weaker claim, as normally written in the literature ("demand shortfall" versus "supply shock"), shares fewer atoms and is a **functional group** rather than an isomer: Fig 12 :124, "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- **Falsifier:** if either regime can be written without an atom the other requires (for example, absence with no absent spender, or depth with no reachability relation), the isomer claim fails and the functional-group reading stands instead.

### Q5 — What order is the verdict?

- Fig 5 :59: "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign."
- Formula step 2 sorts the residual before minting: a broken term owes a refusal, and a refusal is a negation, not a bond (Operators table :58). So the order is: describe the per-slot residual → refuse the term that keeps being wrong → then decide whether more search or an import is owed.
- Fig 9 :53: "Nobody chooses. The gap does, and the gap is only as good as its description." If the description is "aggregate demand is weak", the gap has been described at the wrong resolution (Fig 1 :22) and will select the wrong frame.

## CONCLUSION

The split is a **union compound**, not a partition. The dependency order runs perception → vocabulary → objective → planning → carry, with the vocabulary-to-objective link being the unmeasured break where the debate stalls. Persistence is a **cycle** with a negative sign, not a chain, so a chain-shaped model cannot close it. Depth and absence are **isomers** over the shared atom set: same atoms, different bond, different substance, which is precisely why the aggregate reading cannot discriminate them. All four claims are `specified` and carry written falsifiers.

This framing rescues what is defensible in both schools without choosing between them: the regime difference is structural and bond-carried, the diagnosis is per slot, and the discriminator is an empirical instrument, not a further argument.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. World corroboration: Blanchard (JEP 2018), Koo (CSIS 2009; House 2010), Scheffer et al. (Nature 2009). No measurement was taken in this folder.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order, no reading below the break), Fig 4 (methods cross up), Fig 5 (persistent residual points a refusal), Fig 6 (depth versus absence), Fig 8 (no atom added by search), Fig 9 (union versus partition, filters not witnesses), Fig 12 (cycle, catalyst, isomer, functional group), Operators table (negation is not a bond), Formula (step 2). Strained after re-census: none. Fig 13's six physical terms were deliberately not applied here (see `01` §6 retraction log).
