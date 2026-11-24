# Supporting derivation: bond type, order, and analogues

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (`05_what_shape_means.md` §5).

## RESIDUAL

The question uses two verbs that the natural language collapses. "Construct a causal model" and "revise a causal model" are not the same operation, and "through intervention rather than observation alone" adds a third distinction about input source. I need to decide: which operator each verb maps to, in what order the operators must run, and which world analogues are instances rather than imports.

## DOMAIN CENSUS

Atoms held: the seven bonds of Fig 12 (three symmetric, four ordered) plus negation as a unary operator. States and structures from Fig 13 are available as operands. No new primitive is available without import. Bonds relevant here: `→` sequence, `⇒` production, `−` subtraction, `¬` negation. Currency: composable terms in `closure(Γ)` and the reach, not the library size. Anchor: the ground, which does not update.

## DERIVATION

### Q1. Is "construct" a mint or a composition?

Both, at different levels. Formula step 3 gates a mint with SUPPORT `|R⁺_s| > 0` for some slot, REACHABILITY in `closure(Γ)`, and NOVELTY relative to `atoms(Γ)`. For a causal slot, SUPPORT is the live residual that observation cannot close. The new term is a molecule: variables joined by production bonds. Novelty is relative to the library, so a graph using known variables in a new arrangement can be novel even though no new primitive appears.

The composition rule itself is Fig 13 :74 "Everything else is a composition across the two kinds, never within one." A causal model is therefore not a pile of variable names; it is an arrangement, and the arrangement is what carries the causal claim. Fig 12 :94: "The arrangement is the substance."

**Falsifier:** a causal claim that is fully specified by its variable set with no bond information, and that still distinguishes cause from effect. If one exists, the bond analysis is wrong.

### Q2. Is "revise" a subtraction or a negation?

This is the load-bearing distinction. Fig 12 :82: "A with B removed or absent" is subtraction, `−`, an ordered bond whose test is "is the second operand's absence the point? Yes." Operators table :73: "− is A with B removed or absent, which is the absence of an operand. Negation is the refusal of a claim." And :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate."

Reweighting an edge or dropping a variable is subtraction or parameter change. It is not revision in the strong sense, because the held claim remains available for composition. Refusal adds a term that says the claim is false; the original term stays in the record but loses standing to be composed over. Fig 6 :42: "A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted."

So the world literature's "structure update" is a weaker analogue unless a term is actually refused. CORE and CAASL update a graph posterior; whether that counts as negation depends on whether a held relation loses standing, not merely on a score changing. I mark this `specified`, unmeasured.

**Falsifier:** a system with no unary negation that withdraws a held causal relation so that the relation can no longer be used as a premise. That would show revision without negation and break this distinction.

### Q3. What order do the operators run in?

Formula step 2 sorts the residual before minting, and the refusal case comes fifth: "REFUTED a term held is false; what is owed is a refusal, not an explanation". So the order is: perceive the per-slot residual, route it, refuse the held term that persists and does not trend down (Fig 5 :58), then mint the replacement, then settle it against the ground. Refusal before mint.

The dependency chain (Fig 3) gives the same order from the capability side: perception, vocabulary for what an intervention affords, objective that counts causal progress, planning which variable to intervene on, then learn and carry. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." A larger model with a better prediction objective cannot rescue a vocabulary that has no do-operation.

**Falsifier:** a case where minting a new causal term successfully removes the standing of a held false term without any refusal term being added. If that happens, the order is wrong.

### Q4. Which world analogues are instances, and which are imports?

| analogue | field | status | reason |
|---|---|---|---|
| Interventional Markov equivalence, Hauser and Bühlmann 2012 and Yang et al. 2018 | statistics, ML | instance of F2 | a finer equivalence class from intervention; same effect as the production versus sequence distinction, reached in a different vocabulary |
| Active intervention design, He and Geng 2008, CORE 2024, CAASL 2024 | ML | instance of F1 and Fig 5 :12 | the agent chooses which variable to set to "aim the probe here" |
| Children selecting informative interventions, Sobel and Sommerville 2010, Lapidow and Walker 2020 | human cognition | instance of F4 | low overlap with ML; action supplies information observation does not |
| Metamerism and the spectrometer, *The Hard Problem is About Source* | perception, instruments | analogue, not import | a reading cannot name its source; a better instrument can |
| A reinforced score called the ground | ML engineering | import, with cost | RLVR is an instance of an anchor (Fig 2 :29), not a new primitive; if the score measures prediction only, it does not settle causal slots |

Fig 8 :50: "But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." The psychology sources reach a similar shape by a different route. Five ML sources share a pool; their agreement is one witness, not five.

**Falsifier:** a source that reaches the opposite conclusion about intervention from a genuinely different field, read this session. None was found. A conflict would send the census back to §RESIDUAL, not flip the verdict.

### Q5. Are the observational and interventional cases isomers?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Two causal graphs over the same variables with different directed edges are isomers in this sense: same ingredients, different arrangement, different intervention consequences, and the difference is invisible in the variable list. This is why a prediction-only score cannot distinguish them, and why intervention is the discriminator.

The weaker form is a functional group (Fig 12 :124): "A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." Two models over different variable sets can still share the motif `variable -> variable -> variable`, which fixes the *kind* of structure but not which one. This is a real but weaker claim.

**Falsifier:** a case where two graphs over the same variables with different edges have identical consequences under every possible intervention. That would make them one substance and break the isomer reading.

## CONCLUSION

Construct maps to a mint plus a composition with ordered bonds; revise maps to negation, not subtraction or reweighting; refusal precedes mint; capability sits in agent and habitat; interventional equivalence, active design and children's exploratory action are instances; a prediction-only reward is an import with a cost. None of this names a system. The one structural claim with a real falsifier is the isomer claim in Q5.

## ANCHOR

Verbatim figure text extracted from the canonical local file this session; the four essays read this session and listed in `05`; the public sources in `10_source_ledger.csv`. No measurement was used.

## FIGURE CENSUS

Fig 1 (action in the loop), Fig 2 (anchor definition, shared pool), Fig 3 (dependency order), Fig 5 (mint guards, refusal, persistent residual), Fig 6 (import, reach falls), Fig 8 (idempotence, convergence), Fig 9 (residual first), Fig 11 (habitat), Fig 12 (bond types, subtraction versus negation, isomer, functional group), Fig 13 (cross-kind composition), Operators table (negation), Formula (steps 2, 3, 7). Strains after re-census: the prediction-only reward question is an instrument strain, named in `01` §7, not a figure strain.
