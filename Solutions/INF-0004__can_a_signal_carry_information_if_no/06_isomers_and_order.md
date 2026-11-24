# Structure, symmetry and order in the four-domain answer

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The four domains found in `01` were separated by their anchors, not by their vocabulary. Two supporting questions remain. (1) Are the domains related as **isomers** under Fig 12, or only as members of a **functional group**? (2) What is their **order**, and does the symmetry of the quantity being discussed change the answer? A third question follows from the figure text itself: the word "information" appears in Fig 12 with a specific meaning (the bond is the information), which must not be silently equated with Shannon's measure.

## DOMAIN CENSUS (carried from `01`, not re-derived)

Atoms held: distinguishable state (a slot), source, channel, bond, detector, ground. Bonds held: the seven, including → sequence, ⋛ comparison, ≡ identity, − subtraction, plus the unary ¬ negation. No new primitive is available without import. Currency: bits for description, actions for finding out (Fig 12 :125-126: "A composition costs in two currencies, and they do not add.").

## DERIVATION

### Q1 — Are the four domains isomers or a functional group?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- As written, D1 (carrier), D2 (measure), D3 (aboutness) and D4 (access) do **not** share an atom set. D1 needs a distinguishable physical state; D2 needs a distribution; D3 needs a typed relation to a source; D4 needs an instrument in contact. By the figure's definition they are **not isomers**. They are a functional group: each has the shape "something is carried and something decides what the carrying means", with different qualifiers in the slots.
- The stronger form: if all four are written over a shared atom set `{signal state, source, bond, channel, detector, ground}`, differing only in which bond is priced and which term is anchor, then they **are** isomers under Fig 12 :117. This is a real checkable claim, not a metaphor. It requires that a detector can be written as an atom in the same library as a bond, which Fig 13 :110 permits for settled compositions but does not guarantee here (a detector is a habitat-level actor, Fig 11 :39).
- **Falsifier, written before the run:** if any domain can be stated without an atom that another domain requires, the isomer claim fails and the functional-group reading stands. On the census above it fails immediately, so the functional-group reading is the one used in `07` and `09`. The isomer claim is recorded as a test, not as a result.

### Q2 — Does symmetry change the verdict?

- Fig 12 :73 gives the test for → sequence: "swap them. Does it become a different thing? Yes." Fig 12 :59 gives the test for + conjunction: "swap the operands. Does the meaning change? No."
- Shannon mutual information passes the symmetric test: I(X;Y) = I(Y;X). Directed information and semantic aboutness fail it: smoke → fire is not fire → smoke. The Wikipedia Information theory article states both facts explicitly.
- Therefore "information" in D2 is a **symmetric bond** over two random variables, while "information" in D3 is an **ordered bond** (→ sequence or ⇒ production) from signal to source. They are different substances even when the same physical case instantiates both. Fig 12 :92: "Symmetry is what decides whether an arrangement is a new thing."
- Consequence for the question: a yes or no about "carrying information" cannot be transferred between D2 and D3, because the operand order that defines the quantity is different. This is a structural result, not a terminological one.
- **Falsifier:** show that I(X;Y) and "X carries information about Y" have the same symmetry and the same ground, i.e. that swapping source and signal preserves aboutness. The smoke/fire case refutes this immediately, but that is a world check, not a figure line; status `specified`.

### Q3 — What is the dependency order, and what does it forbid?

- Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :21: "Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."
- Order: D1 carrier → D2 measure → D3 aboutness → D4 detection.
  - D1 precedes D2 because a distribution is over carrier states.
  - D2 precedes D3 because a typed relation needs a reliable correlation to attach to (the SEP Semantic Conceptions entry: "That one part of our environment may carry information about another part of our environment depends on our environment behaving in reliable, non-randomised way").
  - D3 precedes D4 because an instrument can only be aimed at a residual that has been described; Fig 6 :33: "A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."
- What this forbids: starting with a detector inventory and inferring what information exists. That is effort applied above the break in the wrong direction, and Fig 3 :27 names the failure: "A link with no instrument is not a link that works. It is a link nobody has looked at." A missing detector is a statement about D4, not a diagnosis of D1 to D3.
- Consequence: the question's phrase "if no system can detect or interpret it" puts a D4 condition at the front of the chain. Re-ordering it to the end is the whole structural move.
- **Falsifier:** a case where the detector inventory determines which bonds can exist in the signal, with source and channel fixed. That would make D4 upstream of D1 and reverse the chain.

### Q4 — Is a detector an atom, a bond or a habitat actor?

- Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :43: "The habitat is enumerated, never composed."
- A detector is therefore not an atom that composes with the signal. It is an actor in a habitat, enumerated from contact (Fig 11 :48: "You do not invent the list. You read it off the world"). Its valence is relative to the residual: the same instrument is a benefactor to one residual and irrelevant to another (Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries").
- This closes the loop with Q1: D4 cannot be an isomer of D1 to D3, because it is not the same *kind* of term. It is a habitat enumeration over the other domains, not a composition inside the same library.
- **Falsifier:** a formal account in which a detector is a primitive atom alongside the signal state and the bond, and in which adding it changes no habitat relation. Then Fig 11 :39-43 would be wrong as applied here.

### Q5 — Does the figure text's own word "information" settle anything?

- Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Operators table :4: "The bond carries information the operands do not".
- Fig 12 :101: "A bond that costs nothing is a bond that carries nothing, which is the flat case."
- This is a **structural** use of the word: information is what the arrangement records beyond the ingredient list. It is not Shannon's uncertainty reduction, which is a measure over a distribution. Treating them as one quantity is the error Fig 9 :4-5 warns about: a disagreement that does not shrink with effort is "not one hard question but several well-formed ones. Split it rather than search."
- So the figure line decides the framework's internal question and corroborates D1 and D3 by analogy. It does **not** by itself settle the philosophy-of-information literature's question. That is why `09_watson_answer.md` lists Dretske and the SEP entries as secondary witnesses, not as the verdict.
- **Falsifier:** a derivation showing that the "information" of Fig 12 is definitionally the same quantity as Shannon entropy, so that the bond term and the distribution term are one. None of the sources read supports this; the SEP Information entry explicitly says the proposals "have next to nothing in common".

## CONCLUSION

The four domains are a **functional group** over a partly shared atom set, not isomers as currently written. The stronger isomer claim is stated and falsified in Q1, so it is not carried forward as a result. The quantities differ in **symmetry** (D2 symmetric, D3 ordered), which is a structural reason no single yes/no can cover both. The **order** is carrier, measure, aboutness, detection, and the question reverses it by putting detection first. The detector is a habitat actor, not a compositional atom, which is why adding one cannot retroactively create or destroy a bond. The figure's own use of "information" is structural and corroborates D1 and D3 but does not replace the world literature's measures.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. World checks: Wikipedia Information theory (symmetry of mutual information), the two SEP entries (reliable correlation, plurality of definitions), Wikipedia Affordance and Detection theory (hidden affordance, Miss case). No measurement was taken by this author.

## FIGURE CENSUS

Fig 3 :19-21, :27 (dependency order, middle link); Fig 9 :4-5 (split rather than search); Fig 11 :39, :43, :48-49 (habitat, enumeration, valence); Fig 12 :5, :59, :73, :92, :101, :117, :124, :125-126 (bonds, symmetry, isomer, functional group, two currencies); Fig 13 :110 (settled composition becomes an atom); Operators table :4 (bond carries information). Strains after re-census: none unexplained; the vocabulary strain "information" in Fig 12 versus Shannon is named in Q5 and kept as separate domains.
