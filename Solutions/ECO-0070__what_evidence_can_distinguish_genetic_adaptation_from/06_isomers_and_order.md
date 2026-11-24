# Isomers, order and competing explanations - supporting derivation for ECO-0070

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The primary audit (`01`) returned three state variables as a union. Three questions are still owed before the answer can be stated cleanly:

1. **Structure.** If two populations show the same persistence, are they isomers under Fig 12, or something weaker?
2. **Order.** In what order do the discriminating instruments bind? Which link breaks first?
3. **Competing explanations.** Can the standard ecology answers be generated from the shape, or do they name something the shape cannot reach?

## DOMAIN CENSUS (carried forward, not re-run)

- D1 heritable library: actors alleles, genotypes, mutation, recombination; currency heritable variation and reach; anchor sequence paid by fitness.
- D2 within-lifetime controller: actors nervous system, learning, reaction norms, switch genes; currency actions and expression; anchor common-garden behavior or expression.
- D3 habitat field of contact: actors conditions, actors, relations; currency contact and occupancy; anchor measured environmental coordinates and transplant survival.
- D4 settlement assay: actors gardens, transplants, mark-recapture, E&R; currency survival and reproduction; anchor the ground, which does not decay.
- Partition or union: union of C1 (heritable change), C2 (controller change) and C3 (habitat substitution), with D1/D3 and D2/D3 forming overlapping compounds.
- Dependency order: perception -> vocabulary -> objective -> planning -> learn and carry (Fig 3 :4-15).

No new domain is introduced here. The figure lines below were selected only after this census was fixed.

---

## Q1 - Are two persisting populations isomers?

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :124)
> **"Symmetry is what decides whether an arrangement is a new thing."** (Fig 12 :92)

Two populations of the same species that persist in the same changed environment have the same atoms in the broad sense: the same six-term biology, the same possible genes and the same kind of habitat. If one persists by a new heritable arrangement and the other by a reversible reaction norm, their bonds differ. They are **isomers** under Fig 12 :117: same atoms, different bond, different behavior, with the difference invisible in a trait inventory. This is the figure-grounded version of "same phenotype, different mechanism", and it is stronger than the usual phrase, because the arrangement is itself a substance that carries information the ingredients do not (Fig 12 :5).

If the two share only a pattern (for example `genotype -> phenotype -> fitness` in one and `controller -> action -> fitness` in the other) while differing in which atoms occupy the slots, the weaker claim holds: they are members of the same **functional group** under Fig 12 :124. The presence of the pattern fixes the kind, not the source.

The distinction is testable. A comparison that lists traits or genes but does not record the bond cannot distinguish isomer from functional-group. Ho and Zhang 2018 make the same operational point in their own terms: the plastic change and the genetic change must be measured at three stages (original, just after the shift, after adaptation) before one can say whether they point the same way. A single end-point phenotype cannot do it.

**Falsifier, written before the run:** if two populations with identical heritable atoms, identical controller states, and identical habitat actor lists nevertheless diverge in source with no difference in any measured bond, the isomer framing is insufficient and the difference must be attributed to something the census has not admitted. That would send the derivation back to the census.

**Status:** `specified`, triangulated for the legality of the reading (Fig 12 and Fig 11 :50, different figures), single-source for the biological application.

## Q2 - What order do the discriminating instruments bind in?

> **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."** (Fig 3 :20-21)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** (Fig 3 :26)

Order for a population facing a changed environment:

1. **Perception.** Can we read the phenotype and the environment at all? Failure here is visible and has obvious tests: measurement error, wrong scale, wrong season.
2. **Vocabulary.** Do we have terms for what the habitat affords, and a discriminator of sources? This is the middle link. A term like "adaptation" that covers all three mechanisms is not a discriminator (Fig 1 :22, *"Aggregating across slots is how a live signal disappears into an average"*).
3. **Objective.** Can we state a comparison that would count as progress for each source? Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* A vocabulary with only mechanism names cannot state one.
4. **Planning.** Choose the instrument: common garden for C2, E&R or temporal genomics for C1, occupancy and transplant for C3.
5. **Learn and carry.** Name what worked, verify it against the fitness ground, carry it to the next population (Fig 3 :15; Fig 4 :22).

The three conditions from the primary audit map onto this chain: C1 is mostly a link-4 and link-5 failure when no heritable time series exists; C2 is mostly a link-2 failure, because the reaction norm is not measured; C3 is mostly a link-1 and link-2 failure, because the habitat is not enumerated (Fig 11 :43). That mapping is why a single lever cannot clear all three (Fig 9 :55).

The order also decides which instrument to buy first. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The persistence reading (link 1) has abundance and trait data; the source discriminator (link 2) has almost none in most field studies. Budget will naturally pile up at links 1 and 4 while the break sits at 2. Bernatchez et al. 2024 implicitly confirm this: their review exists because the three mechanisms need different omics toolkits, not because persistence is hard to observe.

**Falsifier:** a case where links 1, 2 and 3 demonstrably work (phenotype read, habitat enumerated, failure conditions written) and the attribution fails only at instrument choice. That would falsify the "usually middle" claim of F8 in the primary audit.

## Q3 - Competing explanations, and what each can and cannot reach

| candidate explanation | what it names | figure-line bearing | what it cannot reach |
|---|---|---|---|
| **Genetic adaptation** (allele-frequency change, selective sweeps) | the heritable library Γ, its added atoms | Fig 6 :14, :21, :23: import moves the wall; selection narrows | Why the same Γ pays in one habitat and not another; no contact variable, so it is a compound with D3 when movement sieves alleles |
| **Phenotypic plasticity / reaction norms** (Sommer 2020; de Villemereuil et al. 2016) | the within-lifetime controller, same atoms different bond | Fig 12 :5, :117; Fig 11 :50 | Which heritable atom, if any, was settled. A reaction norm has no source of new atoms |
| **Behavioral flexibility / cognitive buffering** (Botero 2026; Rittschof and Robinson 2014) | a fast, reversible subset of plasticity; expression profiles as measurements | Fig 12 :117; Fig 3 :26 | The sign of its effect on genetic evolution. Botero's simulation says slower short-term change and more standing variation, so a rate slope cannot be the witness |
| **Range shift / habitat tracking** (Donelson et al. 2019) | substitution of the field of contact | Fig 11 :66-69, :73 | In-situ adaptation; a moved population can still be selected during colonisation (Luqman et al. 2023) |
| **Genomic offset / gene-environment association** (Bernatchez et al. 2024) | a predictor of maladaptation from genotype-environment models | Fig 9 :26-28: describe the residual before choosing the frame | A local settlement. The review notes advantages and limitations; the predictor is an instrument, not the ground |
| **Plasticity-first / genetic accommodation** (Sommer 2020, via West-Eberhard) | a route from plastic response to canalized trait | Fig 12 :119 catalyst, :121 cycle; Fig 7 :36 | Whether it happened here. It is a name for a compound of C1 and C2, not a discriminator |
| **Maternal and other non-genetic inheritance** | a heritable-but-not-sequence channel | Γ read as a library of heritable atoms, not only DNA | The framework does not settle where the sequence boundary falls. Honest `gap`, recorded as strain S4 in `01` |

No candidate is discarded by prestige or familiarity. Each is ranged against the same residual, in the order Fig 8 :53 requires. The point is not to pick one. The point is to notice that the first four are competing *names* for overlapping compounds, which is exactly the union Fig 9 :54-57 requires to be unbundled before a lever is chosen.

## Q4 - Does the shape generate the literature's answers?

Partly. The shape can generate:

- the allele-frequency emphasis of E&R, as C1 under a closure that needs an added heritable atom (Fig 6 :14);
- the reaction-norm emphasis of plasticity research, as C2 and Fig 12 :117;
- the occupancy and range-shift emphasis, as C3 and Fig 11 :66;
- the "plasticity first" emphasis, as a compound of C1 and C2 where a catalyst becomes spent or a cycle closes (Fig 12 :119, :121);
- the disagreement between Ho and Zhang 2018 and Botero 2026, as a union effect: direction of expression change and rate of morphological evolution are different quantities measured at different links.

It cannot generate the *name* of the allele, the behavior, or the habitat that caused a particular persistence. That is the `gap` recorded in F10 of `01`. It is a gap at the instrument boundary, not a silence: Fig 13 :134 (*"Unreachable is a verdict here, not a silence,"*) and Fig 8 :39 (*"So a search that finds nothing is never a proof of absence"*). The source essay states why: an instrument that reads a result *"cannot comment on the source"*, and *"the answer is unreached until a better instrument exists"*.

## CONCLUSION

Two populations with the same atoms but different bonds are isomers under Fig 12 :117; two sharing only a `state -> response -> fitness` pattern are members of one functional group under Fig 12 :124. The instruments bind in dependency order, with the middle link (source vocabulary and failure conditions) the usual break, which is why C1, C2 and C3 need different instruments. The standard ecology explanations are mostly names for overlapping compounds and are generated by the shape only up to the point where a local name would be required. The isomer claim has a written falsifier; the order claim has one; the naming gap is declared rather than filled.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. World sources opened and recorded in `10_source_ledger.csv`. No fitness measurement was used. Mode `specified`.

## FIGURE CENSUS

Fig 3 (dependency order, middle break, instrument absence), Fig 6 (import moves the wall), Fig 8 (residual first, underivable vs unreachable), Fig 9 (union vs partition), Fig 11 (valence relative to residual, habitat substitution), Fig 12 (isomer, functional group, symmetry, catalyst, bond information), Formula (step 5 settlement, Direction). Strained after re-census: none. The one earlier strain, applying Fig 13's six-term substrate to biological responses, is re-census S1 and is logged in `01_figure_grounded_audit.md` section 6.
