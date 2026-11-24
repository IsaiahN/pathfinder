# Isomers, functional groups and the order of the crossing

**Mode: `specified` on the structure and order claims, `general` on the binding rule, not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The main audit leaves two live items: whether a ribozyme and a protein enzyme are isomers (S2) and whether a gene is a method or a replay (S3). This file derives both from the figure definitions and states the order in which the crossing must occur. A third question is added: what kind of bond joins gene to product, since "encoding" is an ordered relation and a flat formula cannot write it.

## DOMAIN CENSUS

Atoms available for this derivation: persisting catalytic parts (cofactor, fold, active-site geometry), nucleotide monomers, amino-acid monomers, and the recorded arrangement (sequence). Bonds available: the seven plus negation. The explicit bond at issue is production (⇒): "A produces B; B did not exist before" (Operators table; Fig 12 :77). No new primitive is minted here. If the amino-acid monomers are not already in the starting closure, they enter as import (Fig 6 :14, :21-22), which this file prices but does not name historically.

---

## DERIVATION

### Q1: Is "catalyst" a primitive? NO (correction to a first-pass reading)

Fig 12 :116: "Four structures a compositional system exhibits, and each names something the flat form cannot write." Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

Catalyst is one of four **structures a system exhibits** (isomer, catalyst, cycle, functional group). It is not one of the six substrate terms of Fig 13. Treating it as a seventh primitive would break Fig 13 :41 ("Each is indivisible: no arrangement of the other five yields it") applied to the substrate list. Re-census: catalyst is a derived pattern. **Falsifier:** derive catalyst from the six substrate terms (then it is not a distinct pattern) or show a system exhibiting a catalyst that has no persisting part (then Fig 12 :119 is wrong). This correction is preserved in `05` §5 and `01` F1/S1.

### Q2: Ribozyme versus protein enzyme: isomers or functional-group members?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Three levels of claim, kept separate:

1. **As actually written in the world literature:** a ribozyme is built from nucleotides and a protein enzyme from amino acids. Different atoms. By Fig 12 :117 they are **not isomers**. They share an outcome-fixing substructure (an active site, a fold, a cofactor binding site), so they are **members of one functional group**: the group says "catalyst," the qualifier says which member. This is the default verdict.
2. **Over a declared abstraction:** if both are written over the atom set {monomer position, bond type, fold geometry, active-site geometry}, then the same atoms under different arrangements give a different substance. Now the isomer claim is legitimate, and Fig 13 :121 ("Different routes can arrive at the same substance") governs. The atom set must be declared before the claim, not after (Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit").
3. **What the world sources actually support:** the *Ribozyme* article reports that ribozymes "mimic the mechanism used by their protein counterparts" despite four monomers versus twenty side chains, and the *Cofactor* article reports exaptation of pre-evolved structures. Both support a shared *functional group*, not a shared *atom set*. No source opened this session licenses level 2 as history.

**Falsifier, written before the conclusion:** if either a ribozyme or a protein enzyme requires a catalytic atom the other cannot be written over even at the declared abstraction level, the isomer claim fails and only the functional-group claim stands. If, conversely, a shared atom set can be declared and a bond difference shown to change the substance, the isomer claim is `specified` and triangulated. Until one of these is run, level 2 is `single-source` on the figure definition and conditional.

### Q3: What bond joins a gene to its product?

Operators table: production (⇒) means "A produces B; B did not exist before," with the test "is there a B before A fires? No." It is ordered; swapping operands changes the term.

Encoding is production, not identity (≡) and not sequence (→) alone:

- **Not identity.** A gene and its product are "two names, one referent" only if substituting one loses nothing. It loses everything: the product is a catalyst, the gene is a record. Fig 12 :69: identity's test is "substitute one for the other. Is anything lost? No." Here it is.
- **Not mere sequence.** Sequence (→) means "A then B; B needs A to have happened." That is necessary but insufficient: a sequence can run without producing a new thing. Production adds the absence of B before A fires. That is exactly the transition at issue: a working catalyst appears where there was only a record.
- **Therefore ⇒.** Fig 12 :77 and :79: "A produces B; B did not exist before" and "is there a B before A fires? No."

Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one." A list of molecules can name the prebiotic state and the modern state; only the bond can name the route. The flat formula "RNA + peptide + DNA" cannot tell a gene from a product, which is the failure Fig 12 :5 names: "The bond is the rest of the information, and it is the half nothing was recording."

**Falsifier:** exhibit a case where the inherited record and the catalytic product are intersubstitutable with no loss (identity, not production), or where the product exists before the record fires (sequence, not production). Either breaks the ⇒ reading.

### Q4: Is a gene a method or a replay? THE S3 DISCRIMINATOR

Fig 4 :23: "upward: a method that can be reapplied. Never the recording of a particular success."
Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion."
Fig 12 :107-110: "where the arrangement is recorded, re-deriving it is a lookup and the actions were spent once. Where it is not, the result carries forward and the deriving does not, so every lineage pays again."

The same physical object (a heritable sequence) can be two different terms depending on whether the ground pays on reuse:

| reading | bond across the boundary | figure governed | consequence |
|---|---|---|---|
| gene as method | production (⇒): the sequence regenerates a working catalyst each generation | Fig 4 :23, Fig 12 :107-108 | the arrangement is recorded, the cost is paid once, the next search is cheaper |
| gene as replay | identity (≡) applied to a dead copy: the sequence is a description of one occasion | Fig 4 :25, Fig 12 :109-110 | the result carries forward but the deriving does not; every lineage pays again |

The difference is not in the alphabet. It is in what happens when the sequence is concretised back into a catalyst (the round trip of Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning"). The discriminator is therefore an **assay**: express the sequence, ask whether a working catalyst appears, repeat across generations, and measure the gap. S3 is live until that assay is run.

*The Hard Problem is About Source* (opened) is the canonical reason: "If several paths create the same behavior, then behavior is a projection with lossy information" and "An instrument that can't distinguish these cases demonstrates its own inadequacy." A sequence that looks the same in both readings cannot by itself decide between them. A discriminator is owed.

**Falsifier:** show that the same sequence reliably regenerates a working catalyst in one context and never does in another with no change in the ground, while both contexts are claimed as "method." Then the method/replay distinction is not an assay-able property and S3 collapses.

### Q5: The order of the crossing

Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

The dependency order derived in `01` §1, restated with the bond that governs each link:

1. **Persisting part settled** (Fig 12 :119, :104). Bond: none yet; this is the atom. A catalyst must survive its use and be settled before anything can compose over it.
2. **Recording established** (Fig 12 :107-110). Bond: the arrangement is recorded; re-derivation becomes a lookup. This requires a replicating polymer with nonzero fidelity (Fig 10 :24, the channel can decay).
3. **Mapping installed** (Fig 12 :77, Operators ⇒). Bond: production. The readout must produce the catalyst from the record. Adaptors and translation are the world-frame candidates (Genetic code article: Crick's adaptor hypothesis; tRNA).
4. **Alphabet import priced** (Fig 6 :14, :21-22; Fig 8 :50-52). Only if the starting closure lacks the monomers. Source gate and shadow test required. Fig 6 :24: "Import from a live peer is debited against that frame's independence."
5. **Habitat closed** (Fig 11 :36, :39, :43). Selection runs; capability is agent-and-habitat; the habitat is enumerated, never composed.

Fig 12 :106: "Nothing composes over what was never admitted as a part." A record cannot be composed over a catalyst that was never settled at step 1. Fig 5 :33-41: the three guards are a product; any factor at zero stops the mint. If fidelity is zero at step 2 or the mapping is zero at step 3, no amount of work at step 5 rescues the chain.

**Cycle and closure.** Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Once the product catalyst re-enters as part of the replication/translation machinery (ribosome, polymerase, aaRS), the chain becomes a cycle. That is the point at which the transition is no longer a sequence of events but a self-maintaining loop. World corroboration (secondary): the *Abiogenesis* article reports that LUCA already had DNA, the code, ribosomes, polymerases and enzymes, that is, a closed loop with hundreds of genes. Fig 11 :28-33 names the two silent failure modes when such a loop is later substituted into a new habitat: what you failed to reproduce and what you brought with you.

**Falsifier for the order:** show that the mapping (step 3) can be installed and paid for before any persisting catalytic part is settled (step 1), with no import from another closure. Then the dependency order is wrong and Fig 3's chain reads in the other direction.

## CONCLUSION

The structure claim that survives is the **functional group**, not the isomer claim, unless a shared atom set is declared first. The bond that makes the encoding claim precise is **production (⇒)**, not identity and not bare sequence. The method/replay distinction is an assay-able property, and it is the live S3 discriminator. The order of the crossing is: settle the persisting part, record the arrangement, install the mapping, price the alphabet import, close the habitat. The loop closes when the product catalyst re-enters as a component of replication and translation, at which point the chain becomes a cycle. No new primitive is required for any of this; an imported alphabet is required only if the starting closure genuinely lacks it.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (opened this session), `THE_FORMULA.md`, the Operators table, and the public pages listed in `10_source_ledger.csv`. No prebiotic measurement was used.

## FIGURE CENSUS

Fig 3 :19/:20, Fig 4 :22/:23/:25/:30, Fig 5 :33-41, Fig 6 :14/:21-22/:24, Fig 8 :50-52, Fig 9 :27-28, Fig 10 :24, Fig 11 :28-33/:36/:39/:43, Fig 12 :5/:67/:77/:104/:106/:107-110/:111/:116/:117/:119/:121/:123, Fig 13 :41/:121, Operators table (⇒, ≡, →), *The Hard Problem is About Source*. Strains after re-census: S2 conditional and S3 discriminator owed, both named. Nothing hidden.
