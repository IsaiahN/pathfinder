# Supporting derivation: structure, order, and analogues for a rock record

**Mode: `specified` on the mapping of figure bonds onto field terms, `general` on the bond definitions. Not `grounded`.** This is a simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §7). Every figure line quoted here is verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. No specimen was measured and no instrument was run.

## RESIDUAL

A candidate signature has an ingredient inventory (which elements, isotopes and minerals are present) and an arrangement (lamina versus reaction front, bed versus grain, detrital versus authigenic). Two media with the same inventory can preserve different amounts of source information, and the difference lives in the arrangement rather than in the list of ingredients. This file answers three questions the main audit leaves open:

1. Are two chemical signatures **isomers** under Fig 12's definition?
2. Is an isotope profile an **ordering** (spectrum-like) or a **directedness** (gradient-like), and does the distinction change what may be concluded?
3. Is a lamina a **sequence** or a **production**, and does the distinction change what the record licenses?

The output of this file is a set of constraints on a record, not a name of a rock. That is the sought-for shape bound as an ordinary term in `README.md` (Formula, Direction; `Fig 5 :62-63`: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term.").

## DOMAIN CENSUS

Atoms held for this derivation: the six substrate terms (Space, Time, Energy as states; Spectrum, Gradient, Network as structures) plus the field terms (isotope ratio, lamina, mineral assemblage, organic molecule) borrowed from D1 and D2 of `01_figure_grounded_audit.md` with provenance. Bonds held: the seven of Fig 12, including sequence, production, subtraction, comparison, and the unary operator negation. Anchors: a named specimen and a calibrated instrument reading on it. No new primitive is minted here. Field terms are bindings recorded with a source gate, not additions to the six.

Dependency order: fix the arrangement before comparing inventories; fix the bond before naming the substance; settle the reading before composing it into a timeline (Fig 3 :19; Fig 12 :104). Independence between two readings is how little they draw on the same evidence (Fig 2 :31-32), so two instruments pointed at the same lamina through the same literature are one witness.

## DERIVATION

### Q1 - Are two chemical signatures isomers?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Fig 13 :121-123: "Two chains built from different links may compose functionally identical terms, and the converse holds too: the same ingredients under a different bond are a different substance."

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Fig 12 :94: "The arrangement is the substance." Fig 12 :95-96: "Two entries with an identical ingredient set are not variants of one thing."

- **Weak form, as the field usually reports it:** two rocks with different element inventories are not isomers. A chert and an iron formation share only a few ingredients; they are different substances with different compositions, and Fig 12's definition does not apply.
- **Strong form, worth testing:** two media with the same elemental and isotopic inventory but different arrangement, one laminated and one with reaction fronts, are isomer-like under Fig 12. The ingredient formula cannot tell them apart; the bond, depositional lamination versus later redox reaction, is what carries the difference, and the preservation behaviour differs.
- The world instance is the stromatolite debate: "Finding reliable ways to distinguish between biologically formed and abiotic stromatolites is an active area of research in geology" (Wikipedia, Stromatolite, accessed 2026-11-23). Same layered appearance, different source, decisive difference in what may be concluded. That is an isomer-shaped problem, not merely a harder version of the same problem.
- **The limit of the analogy:** a rock is not a molecule. Fig 12's definition governs compositions of atoms and bonds, so the geological use is a shape constraint, not a geochemical law. What the analogy licenses is the demand for a record of the bond (provenance, alteration history, instrument and date), because the ingredients alone cannot carry the distinction. Fig 8 :50-52 says the same in framework terms: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."
- **Mode and status:** `specified`. `triangulated` for the figure definition (Fig 12 plus Fig 13, with the overlap declared, both from the same figure pool); `single-source` for the geology instance; no ground reading of a specimen.

### Q2 - Ordering or directedness?

Fig 13 :20: "ordering, so more and less can be said" (spectrum). Fig 13 :22: "a difference that can be spent" (gradient). Fig 13 :46-47: "What makes a gradient a gradient is that it can be spent, and neither an ordering nor a span of space has directedness." Fig 13 :35-36 adds: "adjacency is not duration, an ordering is not a pathway, a pathway is not a direction."

- An isotope ratio profile is spectrum-like: it orders samples as more or less fractionated. On its own it has no directedness; it does not say which process spent the difference.
- A mineral reaction front is gradient-like: it has a direction that can be spent, a contact where one assemblage replaced another.
- These are **two frames, not two names for one reading**. If they are drawn from the same specimen with the same instrument, their agreement is one evidence pool, not triangulation (Fig 2 :31-32; Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool").
- The world analogue is the Perseverance case: clay and silt are "excellent preservers of past microbial life" while the associated minerals "can be generated abiotically, or without the presence of life" (Taveau, NASA, 2025). The same rock returned a host-quality reading and a mineral reaction-front reading; neither alone fixed the source, and "we cannot rule them out".
- **Mode and status:** `specified`. `triangulated` across Fig 13 and the NASA case (low overlap). Strain named: the six-term spectrum/gradient distinction governs the primitives; applying it to isotope profiles and reaction fronts is an analogue, not a law. Kept falsifiable by F2 below.

### Q3 - Which bond does each reading carry?

Operators table :30: "A then B; B needs A to have happened" (sequence, `→`). Operators table :36: "A produces B; B did not exist before" (production, `⇒`). Fig 12 :87: "a threshold relation between two quantities" (comparison, `⋛`). Fig 12 :99: "A bond costs what it could have been, and nothing more." Fig 12 :92: "Symmetry is what decides whether an arrangement is a new thing."

| field reading | figure bond | what it licenses | what it does not license |
|---|---|---|---|
| lamina after lamina | sequence `→`, ordered | order of deposition; swapping changes the thing | a source claim from an order |
| new iron sulfide at a redox front | production `⇒`, ordered | a reaction fired; the product was absent before | the identity of the driver |
| alteration removes a trace | subtraction `-`, ordered | what is absent at the contact | absence of the original process |
| instrument separates two source hypotheses | comparison `⋛`, ordered | a threshold between two quantities | a name without a calibration |
| mineral assemblage listed as a set | conjunction `+`, symmetric | what holds at once | paragenetic order, which the notation dropped |
| a refused attribution | negation, unary | this claim does not hold | this process never happened |

A record that contains only laminated sequence supports a claim about order of deposition. A record that contains a produced mineral supports a claim about a reaction that fired at that contact. Conflating them yields a source claim from a depositional observation, which is the flat-formula error of Fig 12 :5: the ingredients are recorded and the arrangement is not. Because the ordered bonds are not interchangeable with the symmetric ones, reporting an assemblage as an unordered set throws away the very information that would discriminate a pathway; a binary symmetric bond gives k! spellings and one term, so the missing order is not recoverable from the inventory.

**Mode and status:** `general` for the bond definitions, `specified` for their application to laminae, reaction fronts and instrument readings. `single-source` for the figure mapping; the field instance (NASA reaction fronts) corroborates without sharing the framework's evidence pool.

### Q4 - What fixes a kind and what fixes a member?

Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

- Isotope fractionation fixes the **kind** of process (a category of fractionating pathway). The host mineral, stratigraphic position and alteration history are the qualifiers that would fix the **member** (which specific pathway, in which environment).
- Fig 12 :119: "catalyst. A part that survives its own use." Mineral surfaces and iron-sulfur redox couples are the persistent actors in prebiotic chemistry. Because they survive their own use, they can leave a cumulative trace, which is why a mineral-hosted record is worth reading at all.
- Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it." Once a signature is settled by a source-discriminating instrument, it becomes an atom for the next level, the geological timeline. This is recursion, not an import that adds a primitive.
- Fig 13 :142: "The seed was always the seedline." The route by which a reading was obtained is part of the record; two readings with the same contents and different provenance are not interchangeable (Fig 8 :50-52).

**Status:** `single-source` for the bond-theory mapping. The strong form (a mineral fixes the member) conflicts with the common morphological ambiguity of stromatolites, so it is narrowed to a kind-only claim where morphology cannot discriminate. This is a live strain, kept visible rather than smoothed, as recorded in `01_figure_grounded_audit.md` §9.

### Q5 - The falsifier, written before the conclusion

The isomer/order reading is refused if any of the following holds:

1. Two media with the same inventory but different arrangement return indistinguishable source-discriminating information at every available resolution. Then the bond carries nothing for this question and the Fig 12 isomer mapping does not apply here.
2. An isotope profile is shown to carry directedness on its own, without a mineral or stratigraphic contact. Then the spectrum/gradient distinction was misapplied and Q2 is retracted.
3. A lamina is shown to be production rather than sequence in a given setting, with the produced mineral absent before the layer formed. Then Q3's bond assignment for that setting is wrong and is corrected, not smoothed.
4. A host mineral is found that fixes neither kind nor member under any instrument. Then the strong functional-group claim collapses to a kind-only claim, which is already the recorded narrow form.
5. A symmetric bond is shown to lose no source information for a given assemblage, with a calibration proving the order irrelevant. Then the ordered-bond reading overcharges by the sequence term and is withdrawn for that medium.

None of these was run in this derivation. They are design instruments, not after-the-fact shields (Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device.").

## CONCLUSION

The comparison that matters is not which rock has more elements. It is **same inventory, different arrangement, different archival outcome**, which is Fig 12's isomer question in geological clothing. An isotope profile is ordering without directedness; a reaction front is directedness that can be spent; a lamina is sequence, while a newly formed mineral is production; a mineral assemblage listed as a set has dropped its paragenetic order. The mineral is the catalyst that survives its own use and the qualifier that could fix the member, once an instrument settles it. All of this is `specified`, ungrounded, and per slot. The strongest form (a mineral fixes the member) is already narrowed to a kind-only claim where morphology is ambiguous.

This framing rescues what is checkable without naming a rock as the answer: the arrangement is the substance, the bond is charged for what it could have been, and a settled signature composes into the timeline without a new primitive. The falsifiers are written down before the conclusion so a specialist can fire one.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and reopened for this derivation; the Operators table in the same extract; NASA's Perseverance release and Wikipedia's stromatolite entry, read 2026-11-23 and recorded with URLs and quotes in `10_source_ledger.csv`. No specimen was measured.

## FIGURE CENSUS

Fig 5 :62-63 (sought-for shape as an ordinary term); Fig 8 :50-52 (provenance); Fig 12 :5 (flat formula), :92 (symmetry), :94 (arrangement), :95-96 (same inventory, different thing), :99 (bond price), :104 (settled molecule becomes atom), :117 (isomer), :119 (catalyst), :123 (functional group); Fig 13 :20 (ordering), :22 (spent difference), :35-36 (distinct kinds), :46-47 (gradient directedness), :121-123 (same ingredients, different bond), :142 (seedline); Operators table :30 (sequence), :36 (production), :48 (comparison); Fig 2 :31-32, :40 (independence and shared pool); Fig 3 :19 (dependency order). Strains after re-census: applying the spectrum/gradient and sequence/production bonds to geological objects is an analogue, not a law, and is labelled as such; the strong functional-group form is narrowed where morphology is ambiguous. No figure line was forced to name a rock.
