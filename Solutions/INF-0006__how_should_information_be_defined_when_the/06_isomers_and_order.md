# Are the candidate definitions isomers? Structure, order and analogues

**Mode: `specified` for the binding claims, `general` for the structural rule.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The audit left two things open: (1) whether the distribution-free candidates (Shannon-with-uniform-support, algorithmic complexity, MDL, credal sets, predictive surprise, per-slot residual reduction) are variants of one definition or structurally different substances; (2) in what order to try the three remedies when p is missing. Both need a supporting derivation.

## DOMAIN CENSUS (carried from `01`, not re-decided)

Atoms available to bind: a set of possibilities Ω, an assignment over Ω, a receiver reading, a slot, a ground that does not update. Structures available: ordering (spectrum), directedness (gradient), relation (network). Bonds available: the seven plus negation. No new primitive is available without import.

## DERIVATION

### Q1 — Isomers or a functional group?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Write the candidates as molecules:

| candidate | atoms in the bond | the bond | what it orders |
|---|---|---|---|
| Shannon with uniform support | Ω, cardinality, receiver reading | log of cardinality (Hartley) | number of equally possible messages |
| Algorithmic complexity | Ω as a string, universal machine, receiver reading | length of shortest program | compressibility |
| MDL | model class, data, receiver reading | description length plus leftover | model choice |
| Credal set | Ω, a set of probabilities, receiver reading | lower/upper envelope | bounds on a degree of belief |
| Predictive surprise | generative model, observation, receiver reading | negative log probability | prediction error |
| Per-slot residual reduction | prediction, observation, slot, anchor | subtraction against a non-updating ground | local discrepancy |

**As written, they are not isomers.** They do not share a single atom set: one needs a universal machine, another a credal set, another an anchor. By Fig 12's definition the differences are invisible in the formula only when the atoms are the same. Here the ingredients differ, so the isomer claim is **strained** and must not be asserted.

**The weaker claim survives.** All six share a functional group: *possibilities + assignment + receiver reading -> a number that supports more/less*. That is Fig 12 :124: the group says what kind (an ordering of a receiver's discrepancy); the qualifier says which member (which bond produced the ordering). They are members of one functional group with different bonds, and their behaviours differ decisively: a credal set can suspend judgement where a precise distribution cannot, and a shortest program can distinguish `0000011111` from a pseudorandom string where Shannon entropy cannot (SEP, Information, §1.2 and §4.3).

- **Falsifier, written before the run:** if all six are shown to reduce to one atom set with one bond (differences only of notation), the functional-group claim fails and they are one definition wearing six names. If one is shown to require an atom none of the others holds and that atom pays against the ground, the functional-group claim narrows to the rest.
- Status: single-source for the figure definitions (Fig 12), with the world comparison corroborated at low overlap by the SEP entry. Strained: the isomer reading, named and not hidden.

### Q2 — What order are the three remedies?

Formula step 7 gives three questions, not one. Fig 6 :49-51 and Fig 8 :40-43 sharpen them.

1. **SEARCHED, first and cheapest.** *"is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."* (Fig 6 :49). For this question: is a usable distribution already in the frame's library but not found? Often yes: a physical symmetry, a known frequency, a specified code ensemble. The remedy is more search, with independent searchers (Fig 6 :50: *"Distribute the search, and keep the searchers independent."*).
2. **INWARD, from an instrument already returning something.** Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** Here: the receiver's per-slot error signal is already returning something that fails to resolve; sharpen it into a better discriminator among candidate definitions.
3. **OUTWARD, import from a closure that differs.** Fig 6 :30: **"outward: does another frame already hold it? The description travels."** Here: imprecise probability holds a formal answer to "unknown distribution" that the six-term set does not; import it with a source gate and shadow test.

Fig 6 :31: **"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."** INWARD and OUTWARD are opposed; sharpening our own terms and casting the description in effect terms pull in different directions. Doing OUTWARD first because INWARD looks slow is a common and named failure.

**Critical split before any of the three:** underivable in principle versus unreachable at this budget. Fig 8 :40-43:

> **"Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom. Importing against a budget limit adds an atom that was not needed"**

Most real cases of "unknown probabilities" are unreachable-at-budget, not underivable. The wrong move is to mint a new definition of information when the right move was to collect more readings. This is the practical payoff of the order.

- **Falsifier:** if a case is classified unreachable-at-budget and further independent search never finds the distribution while a new imported atom pays against the ground, the classification was wrong and the order must be redone.

### Q3 — What is the analogue that carries across fields?

The useful analogue is not "entropy is like X". It is the **wax/reading/source** analogue from *The Hard Problem is About Source*: an instrument reads green and cannot comment on the source. The transfer is structural: any definition that maps a receiver reading to a source claim without a discriminating instrument commits metamerism. This is why the shape demands an anchor outside the assigning frame, and why the six candidate definitions are held as candidates rather than promoted.

Convergence check from *The Recursive Self-Improvement Trap*: two fields arriving at the same structure from different evidence (the essay's Ostrom example) is corroboration at high independence; two papers quoting the same review are one witness. The SEP entries for Information and Imprecise Probabilities overlap in bibliography but differ in community and evidence pool, so their agreement on "the single precise distribution is an idealisation" is weak but not nothing.

## CONCLUSION

The six candidates are **not isomers** as written; they are members of one functional group with different bonds, and the isomer reading is a recorded strain. The remedy order is fixed: SEARCHED before INWARD/OUTWARD, and underivable versus unreachable-at-budget decided before importing. The analogue that carries is the source-discriminator, not any particular formula.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session; the SEP entries opened 2026-11-23; the three essays opened 2026-11-23. No measurement was used.

## FIGURE CENSUS

Fig 6 (SEARCHED / INWARD / OUTWARD, instruments from worse instruments, underivable vs budget), Fig 8 (closure idempotence, budget vs underivable), Fig 9 (filters vs witnesses, split the union), Fig 12 (isomer, functional group, priced bond), Fig 13 (ordering and directedness distinct). Strained after re-census: the isomer reading, named above.
