# Structure, order and analogues for the bandwidth allocation question

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The question names four goods and one budget. Two questions are owed: (1) what bond structure turns four named goods into a decision, and (2) in what order must the allocation be taken so that effort is not spent above a break in the dependency chain. A third question, whether accuracy and robustness are isomers, is included because the question's own wording treats them as two items on a list.

## DOMAIN CENSUS

Atoms available at design level: a signal, a code, a channel state, a receiver, a clock and a power source. Bonds available: the seven typed relations plus negation (Fig 12 :46). No new atom is available without an import. The cost of being wrong is not among the atoms; it must be imported from D3 in `01_figure_grounded_audit.md`.

## DERIVATION

### Q1 - What bond does each good require?

Fig 12 :46: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."*

- **Accuracy** is a comparison between the received message and the sent message: ⋛, *"a threshold relation between two quantities"* (Operators table :48). Bind it as a floor, not a share.
- **Robustness** is the same comparison held over a second, failed channel state. Same atoms, different bonding condition, different behaviour. This is the isomer claim in Q3.
- **Speed** is a rate, a subtraction of arrival time from deadline: Fig 12 :112, *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."*
- **Energy** is a production cost: ⇒, *"A produces B; B did not exist before"* (Fig 12 :76). The transmitter spends joules to produce a received bit at the decoder.

So the four goods need at least three different bond types. A design that writes them with one `+` has committed the flat-formula collapse, because the ingredients are recorded and the arrangement is not.

**Falsifier:** show that one bond type expresses all four without loss of which slot failed or which channel state held.

### Q2 - What is the order of the allocation?

Fig 3 :20: *"The chain is ordered by dependency, not by importance."*
Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

Reading the five links of Fig 3 onto this question:

1. **Perception.** Is any signal returning from the channel at any resolution? Fig 6 :34-35: *"the question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."* If no, no allocation arrives at a step that can use it.
2. **Vocabulary.** Does the design have terms for what the channel affords: burst versus independent errors, stable versus drifting code? The burst-error literature in `04` shows why this term matters: methods built for random errors are inefficient on clusters.
3. **Objective.** What counts as progress in the design's own terms? This is the link with no obvious instrument, and Fig 3 :27 warns: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Binding floors is the act of giving this link an instrument.
4. **Planning.** Only here choose how to spend bandwidth and power.
5. **Learn and carry.** Update the error model per slot and carry the method. Fig 4 :22: *"Only methods cross up. Only head starts come down."*

**Falsifier:** demonstrate a system where allocation planning (link 4) reliably improves accuracy even though the objective link (3) has no instrument and the channel vocabulary (2) lacks the burst term. If that is possible, Fig 3's dependency order does not govern this domain.

### Q3 - Are accuracy and robustness isomers?

Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
Fig 12 :124: *"A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

As the question writes them, accuracy and robustness share the same atoms: signal, code, channel, receiver. They differ only in the channel state each compares against. Under Fig 12 :117 they are **isomers**: same atoms, different bonding condition, different behaviour. That is the stronger and more useful claim, because it says a single code can be evaluated in both states without importing a new atom.

The weaker reading is that they are members of a **functional group** (Fig 12 :124): both are comparison molecules of the form `received message ⋛ sent message`, qualified by channel state. This reading is forced if the robustness design requires an atom the accuracy design lacks, for example a genuinely disjoint physical path or a second front-end. Multiple description coding in `04` is exactly that case.

**Falsifier, written before the run:** if robustness requires an atom absent from the accuracy molecule, the isomer claim fails and the functional-group claim stands. If it requires no new atom, the isomer claim stands.

### Q4 - Does this compose recursively?

Fig 12 :103: *"Composition is recursive, and the level decides what is irreducible."*
Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it."*

A decoded message whose accuracy and robustness have been settled against the ground becomes an atom at the next level: the link or session. The per-slot residual in Fig 1 :19 is therefore not a detail that disappears at scale; it is the input to the next composition. This is why a fleet average cannot replace it: the next level composes over settled slots, not over their mean.

**Falsifier:** show that a settled per-slot result cannot serve as an atom for the session level, so that the recursion of Fig 12 :104 fails across the slot-to-link boundary.

## CONCLUSION

The four goods require at least three bond types, so the allocation question is a structure problem before it is a budget problem. The decisions are ordered by dependency: perception, channel vocabulary, objective with floors, planning, learn and carry. Accuracy and robustness are isomers over the shared design atoms when robustness adds no new physical path, and functional-group relatives when it does. The composition is recursive across the slot-to-link boundary. All of this is `specified` and ungrounded; no channel was measured.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session. No measurement was used. World sources opened for the channel-vocabulary step are listed in `04_links_and_distribution.md` and `10_source_ledger.csv`.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order, middle link), Fig 4 (methods cross up), Fig 6 (instrument from worse instrument), Fig 9 (union before search), Fig 12 (typed bonds, plan/goal/progress, isomer, functional group, recursion), Operators table (⋛ and ⇒), Formula (steps 3 and 7). Strained after re-census: none, but the attempt to use the six-term substrate for this domain was retracted in `01` §5 and is not repeated here.
