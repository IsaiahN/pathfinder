# Figure-grounded audit: genetic information and biological meaning

**Mode of this document: `specified`, with `general` on the structural shape and `gap` on the literal locus of meaning. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23) says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` §7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the seat map field guide, plus the world sources listed in `10_source_ledger.csv`. Every figure quote below was reopened character by character in the verbatim extract this session.

---

## 0. The claim under audit

> Genetic material stores information in the sense that a nucleotide sequence is a coded arrangement. The biological meaning of that information resides somewhere: candidates include the sequence itself, the genetic code table, the translation machinery, the folded protein, the phenotype, or the selective history of the lineage.

The audit does not assume one of these. It states the residual in effect terms, censuses the domains, then lets the figures close or refuse each domain separately.

---

## 1. Residual, in effect terms

The word "information" names two different quantities here:

1. **A coding quantity.** A sequence over a four-letter alphabet carries description length. This is measurable now: sequencing, entropy per site, alignment columns.
2. **A semantic quantity.** "Meaning" is asymmetric and normative: the sequence is *about* a product, can be read correctly or wrongly, and is not ubiquitous (a cloud carries information about rain; a weather forecast has it because it was made to) (SEP, 2024, §1; Maynard Smith 2000 via full text).

The effect that failed is the **unassigned aboutness**. A sequence correlates with many things (a phenotype, a folded protein, a degraded genome, an evolutionary past). Correlation alone does not select which of those is its meaning. Maynard Smith (2000) puts it exactly: *"genes are symbols, in that there is no necessary connection between their form (sequence) and their effects"*; SEP (2024) adds that acorn genomes *"correlate better with rotting than with growing"*, so a bare correlation picks the wrong effect. Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause"**.

So R is not "where is meaning stored?" That phrasing already assumes meaning is a thing in a place. R is: *which quantity is being asked about, and what settles each one?*

---

## 2. Domain census (written before choosing any figure line)

### 2a. R by arity, symmetry, scale (Fig 9 :22)

- **Arity:** three things are related, not two. The sequence (form), the interpreter (reader), and the ground (the effect selection kept). The "two uses of information" are a separate, second cut through the same three. Arity three means a single lever cannot clear it (Fig 9 :54-57).
- **Symmetry:** the coding quantity is symmetric. Shannon mutual information runs both ways: if A correlates with B, B correlates with A (SEP 2024 §1.1). The semantic quantity is ordered and asymmetric: the sequence is read *to produce* a protein, not the reverse; Crick's dogma, quoted in SEP (1958: 153), is *"once 'information' has passed into protein it cannot get out again."* Symmetric and ordered relations are different bonds (Fig 12 :55-88, Operators table). A pooled "information" number averages two different bond types.
- **Scale:** the sequence is molecular (first order); the interpreter is cellular (second order); the selected effect is lineage-level (third order). The transform between them is lossy (Fig 4 :27-32), so a reading at one level cannot be replayed at another.

### 2b. One line per domain: actors / currency / anchor

A domain needs a nameable anchor. Where none is nameable, it is not a domain yet.

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| **D1, the sequence as code** | four bases, codons, the arrangement | description length, Shannon bits, MDL | the sequence as a measurable string, plus functional assays of variants | yes, a string and an assay |
| **D2, the interpreter** | mRNA, ribosome, tRNA anticodons, aminoacylating enzymes | the realized codon to amino acid mapping | the translation apparatus, which can be violated by a recoded codon or a suppressor tRNA | yes, the apparatus |
| **D3, the ground of meaning** | phenotypes, habitats, lineages, homologous sequence alignments | biological function, evolutionary conservation | the effect that pays (survival, reproduction) and cross-species alignments | yes, the effect and the alignment |
| **D4, the verification frame** | researchers, the code-as-metaphor literature | agreement and residual | a functional assay or a source-discriminating instrument | yes in principle; none taken here |

The codon-to-amino-acid mapping is a compound where D1, D2 and D3 overlap. It has its own loop and cannot be cleared by one lever (Fig 9 :54-58). D4 in this simulated run draws entirely on the same evidence pool as D1 to D3, so its independence is zero (Fig 2 :31-32).

### 2c. Partition or union?

**Union, not partition.** The storage claim (D1) and the meaning claim (D2 + D3) overlap in the mapping. They are not two halves of one question with opposite answers; they are two conditions with different anchors. A code table can be correct as a convention and still fail as a ground. A sequence can be a perfect store and still be a bad forecast of phenotype.

### 2d. Order by dependency (Fig 3)

1. Fix the coding quantity first (D1). It is measurable and the other two assume it (Formula step 7: SEARCHED first, cheapest).
2. Then the reader (D2). A mapping without a physical reader is a declared convention.
3. Then the ground that fixes which reading survives (D3).
4. D4 only after 1 to 3, because a check below the break is a reading of nothing (Fig 3 :22-23).

### 2e. Strain test applied before concluding

- Does Fig 12's bond price govern nucleotides? It governs composition inside a frame; the four bases are atoms and the sequence is a chain over them (Fig 12 :48, "A chain is the degenerate case: one bond type, no branching"). That is a fit, not a strain.
- Does Fig 8 :34 (metaframe) govern the genetic code? It governs any language whose truth cannot be defined inside itself. The codon table is a mapping, not a truth predicate. It fits only after re-census that the *frame* is the sequence-plus-table and the *metaframe* is the interpreting machinery. Named in §7 as S2.
- Does Fig 11 :36 (selection ran) conflict with a maintained interpreter in the cell? No after re-census: the cell is a maintained habitat, the lineage is unmaintained ground contact. Different domains, ordered by dependency. Named as S3.

No figure line was chosen to make a predetermined answer. The census came first.

---

## 3. Figure census: verbatim lines, quoted before conclusion

Every string below is an exact substring of `FRAMEWORK/reference/03-FIGURES_TEXT.md` (case-insensitive, trailing punctuation ignored).

| figure | bearing | verdict |
|---|---|---|
| Fig 1 | residual per slot, not aggregated | the two readings must be kept per slot, not pooled into one "information" number |
| Fig 2 | anchor must not update; agreement is a pool | a code table agreed on by readers is not a ground |
| Fig 3 | order by dependency | sequence before reader before ground; a check below the break reads nothing |
| Fig 4 | lossy round trip; methods cross, recordings do not | a sequence read at one level cannot be replayed as a phenotype at another |
| Fig 5 | MDL bargain; Shannon coding is a component | the storage sense is a coding quantity, priced, not semantic |
| Fig 6 | import moves the wall; instruments improve from worse ones | the interpreter is an import from a differing closure; the instrument is an assay |
| Fig 7 | agreement is variation, selection is the ground's vote | consensus on a code table is not a verdict on meaning |
| Fig 8 | a frame cannot reach its own metaframe; no proof of absence | the sequence cannot carry its own semantic rule; a failed search is not absence |
| Fig 9 | describe before looking; shape not name; union unbundling | meaning is a shape (relation), not a named locus |
| Fig 10 | a declared meaning is not a grounded one; verifier non-access | the code table is a convention; the apparatus and the assay ground it |
| Fig 11 | capability is agent-and-habitat; introduce, never subtract | meaning is sequence-and-reader-and-habitat, not sequence alone |
| Fig 12 | bond carries the information; arrangement is the substance; two currencies | the sequence stores by arrangement; bits and function do not add |
| Fig 13 | set closed, arrangements not; unreachable as verdict | no figure returns the physical locus of meaning |
| Operators / Symbols | ordered versus symmetric bonds; R is always a slice | symmetry split and the unread slice are explicit |

---

## 4. Findings

### F1 — The storage sense is legitimate and is a coding quantity (D1)

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
Fig 12 :94: **"The arrangement is the substance."**
Fig 12 :100: **"The price of an arrangement is the choice it records, so it is logarithmic in the number of bonds available."**
Fig 5 :45, quoted with attribution to the formula source rather than the figure text: *"This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."*

The four bases are ingredients. The information is in their ordered arrangement, a chain over typed bonds (Fig 12 :48, *"A chain is the degenerate case: one bond type, no branching"*). This is exactly what the world literature reports: Barbieri (2016, *What is information?*, opened 2026-11-23) writes **"These discoveries have shown that the information of genes and proteins is the specific linear order of their sequences."** OpenStax Biology 2e (2018, opened 2026-11-23) says *"Ribosomes are able to read the genetic information inscribed on a strand of messenger RNA and use this information to string amino acids together into a protein."*

**Verdict D1: `specified`, triangulated** across Fig 12 (bond and arrangement), Fig 5 (MDL/Shannon), and Barbieri 2016 (low overlap: biophysics/semiotics versus composition theory). Storage is a real, measurable coding fact. It is not yet meaning.

**Refuter:** a sequence whose arrangement carries no describable order (a maximally random string with no compressible structure and no measurable colony or functional difference between arrangements) would break the claim that storage is an arrangement quantity. If every arrangement of the same four bases were biologically identical, Fig 12 :94 would have no purchase here.

### F2 — The two quantities are two currencies and do not add (D1 versus D3)

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
Fig 12 :130: **"Summing them into one figure is the error this names, not the fix for it."**

Koonin (2016, *The meaning of biological information*, opened via search-retrieved full abstract and article page, 2026-11-23): **"Biological information encoded in genomes is fundamentally different from and effectively orthogonal to Shannon entropy. The biologically relevant concept of information has to do with 'meaning', i.e. encoding various biological functions with various degree of evolutionary conservation."** He adds that meaning **"can be extracted and quantified from alignments of homologous nucleotide or amino acid sequences but generally not from a single sequence,"** so *"information encoded in genomes is defined vertically but not horizontally."*

The world says orthogonal; the figures say two currencies. These agree at low overlap (genomics/evolution versus composition pricing). Shannon (1948, opened via search-retrieved full text of the source, 2026-11-23) had already excluded semantics by construction: **"Frequently the messages have meaning... These semantic aspects of communication are irrelevant to the engineering problem."**

**Verdict: `specified`, triangulated.** A bits-per-site number cannot be promoted into a meaning number by summing. Equivocating on the word "information" is the exact error Fig 12 :130 names.

**Refuter:** if a single-sequence Shannon entropy score predicted functional meaning across contexts with no alignment and no assay, the two-currency claim would fail and the quantities would be one.

### F3 — The sequence cannot carry its own semantic rule (D2)

Fig 8 :34: **"A frame cannot reach its own metaframe. Godel's second theorem: a consistent system cannot prove its own consistency. Tarski: truth for a language is not definable within that language."**
Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

The codon table is a mapping from a language (triplets) to an alphabet (amino acids). Nothing in the sequence states which triplet maps to which amino acid, just as nothing in a language defines its own truth predicate. The rule lives in a differing frame: the translational machinery. SEP (2024, §2.2) reports Godfrey-Smith (2014): **"the genome involves a reader (the transcriptional and translational machinery within the cell), but no clear sender, so genes might work as 'cues', rather than as signals."** It reports Jablonka (2002): **"information is conferred by the interpreter."** LibreTexts (Bergtrom, *An Overview of the Genetic Code*, opened 2026-11-23) states it physically: **"the mRNA translation machine is the ribosome and the decoding device is tRNA. Each amino acid attaches to a tRNA whose short sequence contains a 3-base anticodon that is complementary to an mRNA codon."**

Fig 9 :32: **"you get a kind of thing, never the answer itself"**. What the figures return here is the *shape* of the missing thing: a reader outside the sequence's closure. They do not name which molecule must occupy it (that name comes from the biology frame, provenanced as such).

**Verdict D2: `specified`, triangulated** across Fig 8 :34 (metaframe limit), Fig 6 :23 (import from differing closure), and the SEP/LibreTexts reader literature (low overlap between formal limit theory and molecular biology).

**Refuter:** derive the full codon to amino acid mapping from the chemical properties of nucleotides and amino acids alone, with no interpreter and no import, and the metaframe claim fails.

### F4 — A declared code is not a ground (D2)

Fig 10 :18: **"a declared meaning is not a grounded one"**
Fig 10 :49: **"Declaring a meaning does not ground it."**
Fig 10 :24: **"the ground does not decay, the channel does"**

A codon table written in a paper is a convention. It becomes a ground only when the apparatus actually produces the mapped amino acid and a functional test pays for it. OpenStax (2018) gives the checkable event: Crick and Brenner inserted one, two or three nucleotides into a viral gene; one or two destroyed the protein, three restored a functional one. That experiment is the anchor, not the table. Fig 5 :42, cited to the formula source rather than the figure text: *"The acceptance test is a bargain, not a threshold."*

Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."** Handing a reader the whole code table before asking what would falsify the mapping spends their independence.

**Verdict D2 second finding: `specified`, single-source on the figure side (Fig 10) plus the Crick-Brenner anchor from OpenStax.** The figure line is strong; the world anchor is one source, so it is not upgraded to corroborated.

**Refuter:** if a declared table, with no translation machinery and no functional assay, settled a dispute about what a codon means, Fig 10 :18 would be false.

### F5 — Biological meaning resides in a relation to a ground that pays (D3)

Fig 11 :36: **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there."**
Fig 11 :39: **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."**
Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

Maynard Smith (2000, full text opened 2026-11-23): **"In biology, the coder is natural selection."** His summary: **"In both protein synthesis and in later development, genes are symbols, in that there is no necessary connection between their form (sequence) and their effects. The sequence of a gene has been determined, by past natural selection, because of the effects it produces."** And, on the difference between a cloud and a forecast: **"the forecast has intentionality (Dennett 1987), whereas the cloud does not."**

Wills (2016, *DNA as information*, opened via accepted manuscript at Auckland ResearchSpace and publisher page, 2026-11-23): **"one also fails to find any simple answer in the DNA itself, because single molecules can have vastly different biological effects, covering the entire range of possibilities depending on the molecular biological context, even though they are identical except for the exchange of a particular one of the 10^9 nucleotide moieties of a genome, most such exchanges having very little effect."** Ball (2016, *The problems of biological information*, opened via publisher page, 2026-11-23): **"the genome is not a 'blueprint' or 'instruction manual' for the cell, but rather, a shorthand crib for the many details that cannot otherwise be reliably communicated or assumed between generations. DNA surely encodes some instructions, but not the whole context in which they acquire meaning and causative affect."**

The framework essay *Decoding Tacit Knowledge* (opened 2026-11-23) states the same shape in plain words: **"Meaning doesn't live in the words. It lives in what the listener brings: the situation, the point and the history behind it."**

**Verdict D3: `specified`, triangulated** across Fig 11 :36/:39 (lineage met ground; capability is agent-and-habitat), Fig 2 :29 (anchor), and three low-overlap world fields (evolutionary philosophy of biology, molecular biophysics, cellular biology). Meaning is a three-term relation: sequence, reader, ground. It is not located in any one term.

**Refuter:** show a sequence whose biological meaning is invariant across every reader and every habitat, with no selection history required. That would make meaning intrinsic and break the relation claim.

### F6 — The reading does not determine the source; a discriminator is owed (D3)

*The Hard Problem is About Source* (opened 2026-11-23) gives the mechanism: an instrument that reads green **"is speaking only about what it measured, it cannot comment on the source"**, and **"If several paths create the same behavior, then behavior is a projection with lossy information"**. The case was closed **"not by argument, but by the arrival of a better instrument."**

Genetic Material maps onto this exactly. The genetic code is degenerate (64 codons, 20 amino acids; OpenStax 2018 and LibreTexts 2021 both confirm), so several codons give one reading, one amino acid. Conversely the same sequence has different effects in different contexts (Wills 2016 above). The sequence is the reading; meaning is the source. Fig 6 :34: **"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."** The instrument here is a functional assay or an alignment across homologs (Koonin 2016), not a further definition of "information."

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** Not having a source-discriminating assay is not evidence that meaning is absent or that it is in the sequence.

**Verdict D3 second finding: `specified`, triangulated** across Fig 6 :34 (instrument from worse instrument), Fig 8 :39 (no proof of absence), and the metamerism essay plus Koonin's vertical definition.

**Refuter:** produce a reading of the sequence that uniquely determines the biological effect across all contexts, with no assay. Then the source is the reading and the metamerism claim fails.

### F7 — Symmetry and degeneracy: many spellings, one term (D1/D2)

Fig 12 :92: **"Symmetry is what decides whether an arrangement is a new thing."**
Fig 12 :93: **"Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges. Both wrong, in opposite directions, and only one is usually noticed."**

Degeneracy is this structure: different codons, one amino acid. Charging per nucleotide spelling overcharges; charging only the amino acid undercharges. The right price is on the mapping (the bond), not on the spelling. OpenStax (2018): *"a given amino acid could be encoded by more than one nucleotide triplet. This was later confirmed experimentally."*

This also explains why searching for "the meaning" by enumerating codons cannot finish: the search space is larger than the term space. Fig 13 :115: **"The set is closed. The arrangements are not."**

**Verdict: `specified`, single-source for the figure definition (Fig 12), world-confirmed degeneracy, no conflict.** The codon case is an analogue of the symmetric-bond rule, not the rule's own object; this is recorded as strain S1 in §7.

**Refuter:** show that two codons for one amino acid are in fact two different biological terms, so the bond is not symmetric at this level. Then the degeneracy reading fails.

### F8 — The question is a union, so one lever leaves the intersection standing

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

"Where does meaning reside?" invites a single location (sequence, code, fold, phenotype, history). The census shows three conditions, each with its own anchor. A lever that clears the coding condition (better sequencing) leaves the interpreter condition and the ground condition standing. A lever that clears the convention condition (a correct table) leaves the ground condition standing. The compound at the codon mapping needs its own loop.

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** A single "information content of DNA" number aggregates the coding slot with the semantic slot, which is how the semantic residual disappears.

**Verdict: `general` structural, triangulated** across Fig 9 :54-57 (union), Fig 1 :19/:22 (per-slot), and SEP 2024 (the plurality of information senses in biology).

**Refuter:** show that one anchor settles all three conditions at once, so the union collapses to a partition.

### F9 — No figure line names a physical locus; that is a `gap`, not a silence

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**

The figures return a shape: a relation among a coded arrangement, a reader outside its closure, and a ground that pays. They do not return "meaning is in the ribosome" or "meaning is in the population." Naming a molecule is a binding from the biology frame, provenanced as such, not a figure derivation. Fig 8 :34 shows why: the rule that fixes the mapping lives outside the mapped language.

Symbols table :38-40: **"The gap between prediction and observation. The central quantity: everything the system does is driven by it. It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."** The locus, if there is one, is in the unread slice.

**Verdict: `gap` of the shape-not-a-name kind.** The honest report is unreached, with an instrument owed. It is not unreachable in principle: a source-discriminating assay could name a contributor (Fig 6 :32 *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*).

**Refuter:** derive a figure line that selects a unique molecular locus for biological meaning. Until one is shown, no locus is named.

### F10 — The verification frame cannot settle this by agreement

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

The philosophy-of-biology literature is a genuine disagreement (Maynard Smith teleological; Griffiths eliminativist; Godfrey-Smith reader-based; Koonin alignment-based; Barbieri code-based). A tally of which side has more citations would be a convention, not a verdict (Fig 10 :47, *"a convention that decides an outcome has stopped being one"*). The anchor is a functional assay, a recoding experiment, or a cross-species alignment, each of which can be wrong independently of what any camp believes.

Fig 10 :59: **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"**. My own stake (a preferred answer) is declared here and handled by the pre-registered refuter below.

**Verdict D4: `general` structural, single-source, and this simulated seat shares the primary evidence pool.** Its agreement is internal consistency, not corroboration (see `11_audit.md`).

---

## 5. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. **Intrinsic meaning.** A DNA sequence isolated from every interpreter and every selection history reliably produces a determinate biological effect, with meaning intrinsic to the string. (Breaks F3 and F5.)
2. **No metaframe.** The complete codon to amino acid mapping is derivable from chemical properties of bases and amino acids alone, with no interpreter and no import from a differing frame. (Breaks F3.)
3. **Declared ground.** A codon table with no physical translation machinery and no functional test settles a dispute about what a codon means. (Breaks F4.)
4. **One currency.** A single-sequence Shannon entropy score predicts biological meaning across contexts without alignment or assay. (Breaks F2.)
5. **Reader-invariant meaning.** A sequence's biological meaning is identical across all readers and all habitats with no selection history. (Breaks F5 and F6.)
6. **Unique reading.** A sequence reading uniquely determines its biological effect across all contexts without a discriminator. (Breaks F6.)
7. **Symmetric failure.** Two codons for one amino acid turn out to be two distinct biological terms at the level audited. (Breaks F7.)

Until one of these is run, nothing in this folder is labelled `grounded`.

---

## 6. Recommendation

1. Lead with the union and the two currencies (F2, F8); do not answer "where is meaning" with one location.
2. State the storage claim as a coding fact with a price (F1), and refuse to promote it to meaning (F2).
3. Name the reader as an import from a differing closure, provenanced (F3); do not claim the figures derive which molecule reads.
4. Ground the mapping in the apparatus and an assay, not the table (F4, F6); the Crick-Brenner frameshift result is the anchor a reader can check in twenty minutes.
5. Record the locus question as a `gap` with an instrument owed (F9), not as a silence and not as a name.
6. Send the packet with the pre-registered refuter in front of the links; ask what would refute it, not whether the reader agrees (F10).

---

## 7. Canonical usage check and strains

The figures README (canonical local copy, opened 2026-11-23) governs: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also gives the re-census rule: a reading that makes one figure contradict another has misidentified its domain. WATSON 60 (metalaws, local) confirms the figures are the ground for design questions and the seat does not ask the anchor to decide what the figures already settle.

| strain | first reading | re-census | status |
|---|---|---|---|
| **S1** Fig 12 symmetric bond applied to codons | Fig 12 :93 seemed to price nucleotide spellings directly | Fig 12 governs composition inside a frame; the codon to amino acid map is a binding from the biology frame onto a held relation. Degeneracy is the analogue, not the rule's own object. | named analogue, not hidden |
| **S2** Fig 8 :34 metaframe versus a codon table | the table looked like a language needing a truth predicate | the frame is sequence plus table; the metaframe is the interpreting machinery. Tarski's limit applies to truth, here to the mapping rule. | dissolved by re-census |
| **S3** Fig 11 :36 selection ran versus a maintained cell interpreter | apparent conflict: the cell maintains reading while evolution has no maintainer | Fig 11 distinguishes two modes. The cell is a maintained habitat; the lineage is unmaintained ground contact. Ordered by dependency. | dissolved by re-census |
| **S4** Koonin's "orthogonal" versus Fig 12 two currencies | world and figure seemed to use "information" differently | Fig 12 :125/:130 governs price in two currencies; Koonin governs semantic versus entropy. Same object, different terms. | agreement, no strain |
| **S5** "shape, not a name" overstatement | I first wrote that naming the ribosome is forbidden | The README's phrase governs a *missing* primitive. The interpreter is a held binding from the biology frame, so naming it is provenance, not invention. | correction kept visible in `05` §7 |

After re-census: one named analogue (S1), no hidden contradiction.

---

## 8. Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "meaning is in the sequence" as a candidate to be decided | **Refused, not merely unsupported.** Fig 8 :34 and Fig 10 :18 categorically bar a sequence from carrying its own semantic rule. |
| "information in DNA is Shannon information" | **Narrowed.** F1 keeps the coding sense; F2 refuses the promotion to meaning. Both readings preserved. |
| "the genetic code is a convention, therefore arbitrary and ungrounded" | **Corrected.** The table is a convention (Fig 10 :18), but the physical mapping is grounded in an assay; Crick and Brenner is the anchor. |
| "Koonin conflicts with the figures on information" | **Withdrawn.** Re-census assigns orthogonal quantities to D1 and D3; no conflict (S4). |
| "a figure line will select the molecular locus of meaning" | **Retracted.** Fig 9 :32 and Fig 13 :134 return a shape. Recorded as `gap`, not silence. |
| "the world sources corroborate independently" | **Narrowed.** Maynard Smith, SEP and the three 2016 Royal Society pieces share a philosophy-of-biology and genomics pool; the molecular textbook and the framework essays have high overlap with their own camps. Low-overlap corroboration is limited. |
| F10 verification frame | **Confirmed.** Fig 2 :35/:40 and Fig 10 :42 stand. This simulated second seat shares the evidence pool, so it is not a witness. |

---

## 9. Verdict of this audit

Per domain, never averaged:

- **D1 sequence as code:** `specified`, triangulated, real coding fact, not meaning.
- **D2 interpreter:** `specified`, triangulated on the metaframe limit, single-source on the declared-versus-grounded distinction; reader named from the biology frame with provenance.
- **D3 ground:** `specified`, triangulated, meaning is a relation to a reader and an effect selection kept; a discriminator is owed.
- **D4 verification:** `general` structural, `gap` on the literal locus, no ground reading, simulated and one evidence pool.

The shape survives: genetic material stores information as a priced arrangement, and biological meaning resides in the relation between that arrangement, a reader outside its closure, and a ground that pays. Every specific locus claim is a binding and unproven. No measurement here settles it, so nothing is `grounded`.
