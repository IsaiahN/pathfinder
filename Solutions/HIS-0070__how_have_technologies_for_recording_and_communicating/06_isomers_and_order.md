# What is preserved per medium: bonds, order, and structural analogues

**Mode: `specified` on the structural claims, `general` on the shape.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

Two records carry the same content but different amounts of provenance, or the same atoms in different arrangements. Are they variants of one preserved item, or different items? And does the order in which a technology appears matter, or only the atoms it holds? The question is about what a medium adds to the thing it carries.

## DOMAIN CENSUS

Atoms held: a content item (a measurement, a text, an image), a date, a source, a method, a reader instrument, a community of practitioners. Bonds held: sequence (`->`), production (`=>`), comparison (`⋛`), and the symmetric bonds, plus negation. No new primitive is available without import. Actors, currency and anchor per domain are in `01` section 1; the governing condition is Fig 12 :5, *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

## DERIVATION

### Q1 - Are two media holding the same content isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- The claim can be made only over a fixed atom set. Suppose a manuscript and a database record both hold {observation, date, observer, reading method, correction history}. They share every atom. What differs is the bond: a marginal annotation in the manuscript (`+` or `->`) versus a typed `wasDerivedFrom` and `hadPrimarySource` relation in the database (W3C PROV-O, read 2026-11-23). Under Fig 12 they are **isomers**: same atoms, different arrangement, different behaviour under later inspection.
- If the database lacks the method and the correction history, the atom sets are no longer the same. Then the two records are not isomers; one is a **subtraction** from the other, Fig 12 :39: **"A with B removed or absent"** (Operators table :42, *"A with B removed or absent"*). This is the common historical case and it is decisive: most "digitisation preserved the document" claims are subtraction claims, not preservation claims.
- **Falsifier, written before the run:** exhibit a pair of records with identical atom sets and identical bonds whose later behavioural consequences nevertheless differ in every test. Then the bond does not carry the information and Fig 12 :117 does not apply to records. Triangulated for the definition (Fig 12 and the Operators table); single-source for the application to documentary records.

### Q2 - Which bond does each operation use?

- Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."**
- Recording a state is a symmetric matter: the item and its metadata can be listed in any order. Recovering a route is ordered. Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."** The sequence bond (`->`) carries what a flat inventory loses; the Operators table :34 states that a flat chain can express *"the only bond a flat chain can express, so every term today is a sequence whether or not it should be"*.
- A correction history is not a sequence in general. A later edition that supersedes an earlier one is a revision (`wasRevisionOf`); two formats of the same content are alternates (`alternateOf`); a permalink is a specialization. These are different typed relations. A flat "archive folder" collapses all of them into `+` and therefore loses the distinction, exactly the flat-formula collapse in Fig 12 :6: *"collapse 6: the flat formula"*.
- **Falsifier:** show that a single un-typed adjacency relation correctly represents revision, alternation, specialization and derivation for every later use. Then the typed-bond claim is unnecessary for records.

### Q3 - Does the order in which technologies appear matter?

- Fig 13 :121: **"Different routes can arrive at the same substance."** So a technology-neutral account of preservation is possible at the level of substance: the same bond and lineage can be built by marginalia, by a card catalogue or by a provenance graph.
- But Fig 13 :88: **"The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place."** A later medium inherits the earlier medium's residue. Digital preservation inherits the card catalogue's arrangement and the archive's selection biases. The route is not recoverable from the artefact (Fig 13 :129): *"The space has no last route and every turn begins from a remainder the last one left, so the order is not recoverable from the artefact. It is recoverable from the lineage."*
- So order matters at the level of lineage and not at the level of substance. "Which technology came first" is not a figure-governed question; "what residue did the previous medium leave in the record" is.
- **Falsifier:** exhibit two histories with different media sequences and different residues whose final records have indistinguishable lineages. Then the residue claim is empty for records.

### Q4 - Functional group, catalyst, cycle

- Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** All preservation media share the functional group {content, bond, reader}. The qualifier (parchment, paper, microfilm, magnetic tape, object store) names the member. A standing list of "good media" is refused by Fig 11 :51, *"No standing list of good actors survives a change of residual"*; the functional group survives, the member does not.
- Fig 12 :119: **"catalyst. A part that survives its own use."** A standard or an open format is the closest analogue: a reader specification that is not consumed by being used. Proprietary tooling is the spent part: it works until its vendor stops, and nothing in the bitstream records which a term is. World corroboration from the digital preservation source: chosen formats should be *"open, standard, non-proprietary, and well-established"*, and proprietary formats are more likely to suffer format obsolescence.
- Fig 12 :121: **"cycle. The output re-enters as input."** A corrected record that becomes the input to the next observation closes a cycle. The sign decides whether it closes. A revision history that records only the latest state breaks the cycle; a versioned record with `wasRevisionOf` keeps it. The signed-loop claim is structural; the historical case is `specified`.

### Q5 - The two currencies do not add

- Fig 12 :125: **"A composition costs in two currencies, and they do not add."** Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**
- A preservation program can be cheap in bits (compress everything) and expensive in actions (nobody can tell which copy is authoritative), or expensive in bits (keep every version with full metadata) and cheap in actions (a lookup settles the source). Bush's complaint in 1945 was the second kind of shortfall in reverse: publication was cheap enough to flood the record, while the actions needed to consult it were not funded. Cerf's X-ray snapshot is a proposal to pay both: keep the content, the application, the operating system and the machine description, then keep the standard that unpacks them.
- **Falsifier:** a case where description cost and verification cost are measured in one unit and trade off linearly. Then the two-currency claim does not govern preservation decisions.

## CONCLUSION

Over a fixed atom set, two media that carry the same contents with different typed relations are isomers (Fig 12 :117). Where one medium drops the method or the correction history, the relation is subtraction, not isomerism, and this is the common case. The functional group is shared across all media; the named medium is a qualifier and a provenanced binding, not a framework selection. Order matters in the lineage and not in the substance. A standard is a catalyst, a version history can close a cycle, and description cost and verification cost are held apart. Every claim is `specified` and ungrounded until a historical case is checked against a ground.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` on 2026-11-23; the Operators table in the same file; W3C PROV-O (2013), the digital preservation and tacit knowledge sources, all read 2026-11-23. No historical measurement was used.

## FIGURE CENSUS

Fig 4 (method versus recording), Fig 8 (provenance separates convergent derivation from adopted import), Fig 11 (valence relative to the residual), Fig 12 (isomer, subtraction, sequence, functional group, catalyst, cycle, two currencies), Fig 13 (different routes, lineage, residue), Operators table (bond types and the unary negation). Strained after re-census: the fixed-atom condition on the isomer claim (Q1), named rather than hidden.
