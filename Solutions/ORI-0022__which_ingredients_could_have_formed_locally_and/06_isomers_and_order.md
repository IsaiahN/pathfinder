# Ingredients, bonds, order and analogues: the supporting derivation for ORI-0022

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The source question asks "which ingredients", but an ingredient name does not settle reachability or provenance. Two supporting questions are owed:

1. What is the difference between having an ingredient and having a prebiotic route to it? (structure / bond)
2. What is the dependency order of the local loop and the import loop, and where does impact synthesis sit? (order / compound case)

## DOMAIN CENSUS

Atoms held in both frames: C, H, N, O, P, S, Fe, Ni. Bonds available locally: the reaction pathways of spark discharge, formose, HCN oligomerisation, cyanoacetylene and urea, Fischer-Tropsch type synthesis, phosphorylation. Bonds available in the extraterrestrial frame: Strecker synthesis on parent bodies, UV photochemistry in ices, aqueous alteration, shock synthesis. No new element is available from import. The anchor for every claim is an isotope or chirality measurement, not a review's conclusion.

## DERIVATION

### Q1 - An ingredient is not a pathway: the bond and the order are the other half

- Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
- Fig 12 :47: *"A recipe that names only its ingredients has recorded half of itself."*
- Fig 13 :74: *"Everything else is a composition across the two kinds, never within one."*
- Therefore a slot is `local-reachable` only if the local closure reaches the arrangement, not merely the atoms. Pianowski 2026 reports the same constraint in the world literature: the demonstrated nucleoside pathways *"strongly depend on precise regulation and sequential additions of reactants, which might be difficult to achieve under non-laboratory prebiotic conditions."*
- **Falsifier:** a one-pot local demonstration, under geologically plausible conditions, producing the same molecule and isomer distribution with no imposed reagent order. That would remove the order constraint for that slot.
- **Mode:** `general` for the figure rule, `specified` for the chemistry. Triangulated (Fig 12 plus the 2026 review, low overlap).

### Q2 - Isomerism: same ingredient list, different substance

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Oba et al. 2022 detected the uracil isomers 2-imidazolecarboxylic acid and 4-imidazolecarboxylic acid at concentrations *"1–2 orders of magnitude more abundant than the corresponding pyrimidine nucleobases"* in Murchison. They also detected methylated pyrimidine analogs at concentrations similar to the canonical bases and read this as evidence of abiological origin.
- Hence "uracil present in Murchison" and "uracil made locally by formose-derived routes" are not automatically the same claim. The isomer distribution is part of the provenance record.
- **Falsifier:** a measurement showing the local synthesis isomer distribution matches the meteoritic one within error for the same slot, which would make the isomer discriminator useless.
- **Mode:** `specified`. Triangulated for the figure definition; single-source for the specific meteorite isomers.

### Q3 - Order of the two loops: local first, import second

- `THE_FORMULA.md` step 7 asks SEARCHED first because it is cheapest and the other two assume its answer; then INWARD (extend the instrument), then OUTWARD (import).
- Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit."*
- Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*
- So the dependency order is: (a) enumerate the local habitat (Fig 11 :43, *"The habitat is enumerated, never composed"*), (b) establish what the local closure reaches, (c) ask what it does not reach and whether that is depth or absence (Fig 6 :27), (d) only then characterise the residual in effect terms and look for the frame whose closure differs.
- A search that finds no nucleobase in a given meteorite is not a proof of absence (Fig 8 :39, *"So a search that finds nothing is never a proof of absence."*), because a null at low concentration is a budget result, not a closure result.
- **Falsifier:** a demonstration that the extraterrestrial frame must be characterised first because the local feedstock inventory is unknowable in principle. That would invert the dependency order and refute this finding.
- **Mode:** `general`. Triangulated across Fig 3, Fig 6 and Fig 9.

### Q4 - Impact synthesis is a compound, not an import of the finished molecule

- *Nucleobase and amino acid formation through impacts of meteorites on the early ocean* (2015, retrieved abstract) reports cytosine and uracil plus glycine, alanine, serine, aspartic acid, glutamic acid and others formed from *"a mixture of meteoritic minerals, water, nitrogen, and ammonium bicarbonate in impact-induced reactions."*
- Under Fig 6 :21, *"MINT composes inside the closure and can never add an atom,"* this is a local composition: atoms from the early ocean plus a meteoritic catalyst and shock energy, forming new bonds. The import supplies the trigger and the catalyst, not the product.
- Fig 9 :54-56: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Impact synthesis sits in the intersection and needs its own loop.
- **Falsifier:** a demonstration that the impact delivers the finished nucleobase intact with a meteoritic isotopic signature, with no new bond formation in the ocean. That would move this case cleanly into the delivered bucket and remove the compound.
- **Mode:** `specified`. Single-source for the specific impact experiments; triangulated for the compound structure.

### Q5 - Reactive phosphorus: depth or absence?

- Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*
- Galloway et al. 2025: most terrestrial P is *"locked in sparsely soluble minerals such as apatite and vivianite"* and P(V) is *"only weakly reactive to organic molecules"*, which is the *"P-problem"*. Meteorites supply schreibersite; lightning, serpentinization and metamorphism also generate reduced P locally.
- Therefore P is not an atom absent from the local closure. The question is whether reactive reduced P is reachable locally at sufficient flux, which is an instrument question about local production rates, not a naming question.
- **Falsifier:** a measured local reduced-P flux at the origin site that accounts for the required phosphorylation without any meteoritic input. That moves the slot to `local-reachable` and dissolves the strain.
- **Mode:** `specified`, live strain. Triangulated for the geochemistry across Galloway et al. 2025 and Pasek et al. 2008 (retrieved).

### Q6 - Analogues as the question needs them

Two analogues were considered and one was declined:

- **Accepted, low overlap:** metamerism in colour measurement (*The Hard Problem is About Source*). One reading, several possible sources; only a better instrument separates them. This is the provenance problem exactly.
- **Accepted, low overlap:** convergent derivation versus adopted import (Fig 8 :50). Two frames can hold the same molecule by separate routes; only the record separates them.
- **Declined:** the "ingredients as letters, reactions as grammar" analogy. It is attractive but it is an echo, not a shadow: the figure already states the relation directly (Fig 12 :5, :47), so the analogy adds no discriminating prediction. Fig 9 :27-28 requires describing the residual before picking the frame; picking a literary frame first would be apophenia.

## CONCLUSION

The source question's noun, "ingredients", understates what is required. Reachability depends on the bond arrangement and the order of reagent availability, and provenance depends on an isotope or chirality record. Two slots, reactive phosphorus and impact synthesis, do not fit either bucket cleanly and are recorded as compound or undetermined. The dependency order is local-first, import-second, with provenance as the only discriminator.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. World literature opened 2026-11-23. No measurement was taken by this agent.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 6 (closure, import, depth versus absence), Fig 8 (isomer/provenance distinction, null result), Fig 9 (union, describe before looking), Fig 11 (enumerate the habitat), Fig 12 (bond, recipe, isomer), Fig 13 (cross-kind composition). Strains after re-census: reactive P depth-versus-absence, and impact-synthesis bucket membership. Both named, neither hidden.
