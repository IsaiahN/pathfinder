# Isomers, symmetry and order in the genetic-information question

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §8).

## RESIDUAL

The census in `01` §2 leaves three ordered questions:

1. Is the genetic code's degeneracy a symmetric bond (many spellings, one term) or an ordered one (different codons, different terms)?
2. Are the "coding sense" and the "semantic sense" isomers over a shared atom set, or members of a functional group with different atoms?
3. What is the dependency order among sequence, reader and ground?

## DOMAIN CENSUS (carried, not repeated)

Atoms held: the four bases as a code alphabet; codons; amino acids; the translation machinery; the phenotype; the lineage. Bonds held: the seven plus negation. Currency: description length for D1, realized mapping for D2, selected effect for D3. No new primitive is available without an import from the biology frame. Fig 13 :115: **"The set is closed. The arrangements are not."**

## DERIVATION

### Q1 — Is codon degeneracy a symmetric bond?

- Fig 12 :92: **"Symmetry is what decides whether an arrangement is a new thing."**
- Fig 12 :93: **"Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges. Both wrong, in opposite directions, and only one is usually noticed."**
- Operators table :59-62: the test for a symmetric bond is **"swap the operands. Does the meaning change? No."** The test for the ordered `→` is **"swap them. Does it become a different thing? Yes."**
- OpenStax (2018): *"a given amino acid could be encoded by more than one nucleotide triplet. This was later confirmed experimentally."* LibreTexts (2021): 64 codons, 20 amino acids, 3 stop codons, so the code is **"degenerate"**.

The codon to amino acid map is a many-to-one map. Under the identity bond `≡` (Operators :27, **"two names, one referent"**), the different codons are different names for one amino acid. Swapping two synonyms for the same amino acid changes the spelling and not the term. Charging per nucleotide overcharges; charging only the amino acid undercharges; the price sits on the mapping.

**Result:** degeneracy is symmetric at the amino-acid level. This is an analogue of Fig 12's rule, not the rule's own object: Fig 12 governs composition inside a frame and the codon map is a binding from the biology frame onto a held relation. Named as strain S1 in `01` §7, not hidden. Triangulated (Fig 12 + Operators + two independent textbook sources).

**Falsifier:** if two codons for one amino acid turn out to be two distinct biological terms at the level audited (different folded products, different functions, with the reader held fixed), the symmetric reading fails and the codons are an ordered bond. This is written before the conclusion.

### Q2 — Are the two senses of "information" isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Write the two senses over the shared atoms `{nucleotide, codon, amino acid, reader, assay, lineage}`:

- Coding sense: `arrangement -> description length`, priced in bits (Fig 5 :45, source-attributed MDL and Shannon coding).
- Semantic sense: `arrangement -> reader -> effect kept by selection`, priced in function (Fig 12 :125, *"A composition costs in two currencies, and they do not add."*).

Over that full shared set the two are **isomers**: same atoms, different bonds, different substance. One is a price in bits, the other a verdict paid by the ground; the difference is invisible in a bare formula that writes only "information" and decisive in what can settle a dispute.

As the question is usually written, though, the two senses do not share the whole atom set: the coding sense uses only the sequence and its entropy, while the semantic sense needs the reader and the lineage. On that narrower reading they are not isomers but two members of a **functional group** (Fig 12 :124): both are `X -> Y` relations with different occupants in the slots. The qualifier says which member.

**Verdict:** the isomer claim is real but conditional on the shared-atom set. The weaker functional-group claim stands without that condition. Triangulated for the figure definition; the atom-set condition is a live constraint, recorded in `09` and `11`.

**Falsifier:** if the coding sense can be written without any atom the semantic sense requires, and the semantic sense can be written without any atom the coding sense requires, the isomer claim fails and only the functional-group claim survives.

### Q3 — What is the dependency order?

- Fig 3 :20: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**
- Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

The chain here:

1. **Perception.** The sequence is readable (sequencing). Instrument exists.
2. **Vocabulary.** There are terms for what the sequence affords: codon, anticodon, mapping, variant. Instrument exists.
3. **Objective.** We can say what counts as progress: a better predictor of the functional effect. This is the link that has no instrument in much of the literature; the SEP (2024) records that correlations alone pick the wrong effect (*"acorn genomes... correlate better with rotting than with growing"*).
4. **Planning.** A route: align homologs, build an assay, test a recoding.
5. **Learn and carry.** Name what worked, verify it, carry the method upward (Fig 4 :22 *"Only methods cross up. Only head starts come down."*).

Effort spent on step 1 (more sequencing) cannot rescue a break at step 3 (no discriminating objective). Fig 3 :23: **"A step whose input never arrives cannot be diagnosed, only its predecessor can."**

Formula step 7 order, kept distinct: **SEARCHED** first, is the coding quantity already in here and unfound? Yes, sequencing and entropy are established (F1). **INWARD**, sharpen the instrument: functional assays and alignments (F6). **OUTWARD**, import the reader from molecular biology with a source gate and a shadow test (F3). Never read INWARD against OUTWARD (Fig 6 :31).

**Verdict:** order is sequence (coding) before reader (mapping) before ground (effect). Dependency, not importance. `general` structural.

**Falsifier:** if a meaning verdict can be settled before the coding sense is fixed, the dependency order is wrong and the chain should be reordered.

### Q4 — Does "settled" imply "composable over"?

- Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world"**
- Fig 5 amendment, source-attributed: *"settling is necessary for a term to be composed over, and it is not sufficient."*

The genetic code was settled experimentally (Crick and Brenner's frameshift result, OpenStax 2018). It can therefore serve as an atom at the cell level: the mapping is a part the reader composes over. But settling the table does not by itself compose a meaning for a phenotype; that requires the reader and the ground. Fig 5 :72, source-attributed: *"a library that grows is not a reach that grows."*

**Verdict:** the settled code is composable over, but its settlement does not settle biological meaning. Triangulated (Fig 12 :104 + Fig 5 amendment + the Crick-Brenner anchor).

**Falsifier:** show that a settled mapping automatically yields a semantic verdict for every sequence with no reader or ground. Then settlement would be sufficient, contrary to the amendment.

### Q5 — Negation and the unread slice

- Operators :58: **"a refutation is a negation, which is why a vocabulary without it can only accumulate"**
- Symbols :38-40: **"The gap between prediction and observation. The central quantity: everything the system does is driven by it. It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."**

An eliminativist refusal of "genetic information" (Griffiths 2001, via SEP 2024) is a negation: it removes the term's standing to be composed over, not the term itself. It does not add an atom. Fig 6 amendment :42, **"What is recorded only grows. What is reachable is derived, and it can fall."** A vocabulary that can only accumulate would keep "information" as a metaphor forever and never be able to carry the correction.

The unread slice is the physical locus of meaning. It is residual, not absent (Fig 8 :39, **"So a search that finds nothing is never a proof of absence."**).

**Verdict:** `general` structural, single-source on each operator line, triangulated with the SEP's record of the eliminativist position.

## CONCLUSION

Codon degeneracy is symmetric at the amino-acid level (many spellings, one term), with the price on the mapping. The coding and semantic senses are isomers over the full shared atom set and members of a functional group over the narrower set; the isomer claim carries a live shared-atom condition. The dependency order is sequence, reader, ground, and it is dependency not importance that decides it. A settled code is composable over but does not by itself settle meaning. Negation lets a refusal be carried rather than merely accumulated. No figure line selects a physical locus; that is a `gap` with an instrument owed, not a name.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, and the opened world sources listed in `10_source_ledger.csv`. No laboratory measurement was taken by this agent.

## FIGURE CENSUS

Fig 3 :20/:23/:27, Fig 4 :22, Fig 5 :45/:72 and the settling amendment, Fig 6 :22/:31/:42, Fig 8 :39, Fig 9 :32, Fig 12 :92/:93/:104/:117/:124/:125, Fig 13 :115, Operators :27/:58/:59-62, Symbols :38-40. Strained after re-census: the codon-as-symmetric-bond analogue (S1) and the shared-atom condition on the isomer claim, both named rather than smoothed.
