# Isomers and order in monetary transmission

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

Two supporting questions are owed by the main audit:

1. Is the transmission mechanism an ordered chain or a symmetric set of channels, and what does that decide about "reliability"?
2. Are two economies' transmission mechanisms **isomers** under Fig 12's definition, or only members of the same functional group?

## DOMAIN CENSUS

Atoms held for this derivation: the policy rate, money-market rates, asset prices, expectations, credit, aggregate demand, prices and wages, employment, and the exchange rate. Bonds held: `→` sequence, `⇒` production, `⋛` comparison, `−` subtraction, `+` conjunction, and `∥` disjunction. No new macro primitive is available without import (Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."*).

## DERIVATION

### Q1, Ordered chain or symmetric bundle?

Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* Operators table :34 warns: *"the only bond a flat chain can express, so every term today is a sequence whether or not it should be"*.

The standard textbook account is an ordered chain:

```
policy rate → money-market and lending rates → asset prices, exchange rate, expectations
            → credit and spending → aggregate demand → domestic price and wage setting
            → inflation and employment
```

It carries an ordered bond (`→`), a production bond (`⇒`, credit that did not exist before), and a comparison bond at the end (`⋛`, inflation against target). It is **not symmetric**: swapping the rate change and the inflation outcome gives a different thing. Reliability is the comparison at the end, not a property of any link.

**This matters because of the notation warning.** A reduced-form regression that lists channels as additive terms is a flat formula. Fig 12 :14 says of the flat form: *"the ingredients are recorded and the arrangement is not"*, and :15: *"nothing downstream can tell them apart"*. A pooled coefficient over such a formula cannot tell a credit-driven transmission from an exchange-rate-driven one even when the ingredients are identical. That is the mechanism behind Fig 1 :22 (*"Aggregating across slots is how a live signal disappears into an average"*) at the level of notation.

**Falsifier:** a demonstration that the transmission channels compose under a symmetric bond, so that permuting the order of credit, exchange rate and expectations leaves the inflation and employment outcome unchanged. If that holds, the ordered-chain reading fails.

### Q2, Where the chain breaks

Fig 3 :24: *"Why the middle link is where chains usually break."* Fig 3 :25: *"having terms for what a situation offers and being able to say what would count as progress"*. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Perception (inflation, employment) and planning (set the rate) both have instruments. The middle link, what a rate change affords in this specific habitat, is usually inferred from the outcomes it is supposed to explain. That is the middle link of this question.

**Falsifier:** a direct instrument that reads the available transmission affords independently of the inflation and employment outcomes.

### Q3, Are two economies' mechanisms isomers?

Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

- **Weak form.** Economy A written as `{rate, credit, demand, prices, employment}` and economy B as `{rate, exchange rate, demand, prices, employment}` share only part of the atom set. Under Fig 12's definition they are **not isomers**; they are two members of the same **functional group**, the ordered chain `policy → transmission structure → target`. The group says what kind; the qualifier (credit versus exchange rate) says which member.
- **Strong form.** If both are written over the full shared atom set `{rate, money market, asset prices, expectations, credit, demand, prices, wages, employment, exchange rate}` and differ only in which structure mediates which state, then they **are** isomers: same atoms, different arrangement, different behaviour. This is the claim worth testing, because it predicts that a model transported from A to B will fail in a specific, locatable way rather than at random.
- **Level rule.** Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."* A transmission mechanism that is settled against its own ground can become an atom at the cross-economy level, which is why a two-economy comparison is a second-order composition and needs no new macro primitive.

**Falsifier, written before the run:** if either economy's mechanism can be written without an atom the other requires, and the difference cannot be represented as a different bond over a shared set, the isomer claim fails and the functional-group reading stands instead. A second falsifier: if no settlement exists for either first-order mechanism, the demotion to atom is not licensed and the second-order comparison is out of reach.

### Q4, What is the order of the union?

The two conditions in the main audit are a union, not a sequence in the world: channel maintenance (C1) and habitat match (C2). But the **order of inquiry** is fixed by dependency (Fig 3 :20: *"The chain is ordered by dependency, not by importance."*):

1. Describe `R_s,t` per slot (perception).
2. Acquire terms for the transmission channels (vocabulary).
3. State what counts as a small residual and at what threshold (objective; Fig 12 :87 comparison).
4. Only then choose a lever (planning).
5. Re-estimate and carry forward (learn and carry).

Reversing this order, picking a lever and then looking for the residual, is the apophenia failure Fig 9 :27 warns about: *"describe it before you go looking, or"* any frame you pick will seem to fit.

**Falsifier:** a case where a lever chosen before the residual is described outperforms one chosen after, consistently and against the ground, with no provenance advantage.

## CONCLUSION

The transmission mechanism is an ordered chain with a comparison at the end, not a symmetric bundle; its middle link lacks a direct instrument; and two economies' mechanisms are isomers only under the strong form over a shared atom set, otherwise merely members of a functional group. "Reliability" is the comparison at the end of the chain, a goal statement, not a property carried by the rate change. The order of inquiry is fixed by dependency, and the union of time-variation and cross-economy variation must be unbundled before a lever is chosen.

This rescues what is defensible in both options of the question without forcing a partition: variation is in arrangement, bond, level, and contact, none of which requires a seventh macro primitive or a universal coefficient.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. The Operators table is in the same extract. No measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot indexing), Fig 3 (dependency order, middle link), Fig 4 (cast change), Fig 9 (union, describe first), Fig 12 (ordered bonds, flat formula, isomer, functional group, level rule, comparison), Fig 13 (closed set). Strained after re-census: none. One notation caveat is named and kept: additive reduced-form formulas record ingredients and not arrangement, so isomer differences are invisible in them by construction.
