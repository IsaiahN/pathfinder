# Are the three readouts isomers? Union, order, and analogues

**Mode: `general` on the structure, `specified` on the dependency order.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The question offers three readouts: incoming evidence, prior expectations, and their interaction. We need to know whether these are three compositions of the same atoms under different bonds (Fig 12 isomers), or something else, and in what order their determinants must be checked (Fig 3).

## DOMAIN CENSUS

Atoms held from the Symbols table: `Γ(b,a)` the prediction, `o′` the observation, `b` the belief, `w` the weighting, `R` the residual, `s` the slot. Relations named by the figures: the residual gap, subtraction `−` ("A with B removed or absent"), comparison `⋛` ("a threshold relation between two quantities"), negation `¬` (refusal of a claim). No new primitive is available without import.

The three readouts are treated as candidate molecules, not as mechanisms. That keeps the census inside what the figures can decide.

## DERIVATION

### Q1 — Are evidence-only, prior-only, and interaction isomers of one another?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- **Interaction:** operands `{Γ(b,a), o′}`, both present, relation is the per-slot gap. Two atoms, one relation. This is a molecule.
- **Evidence-only:** operand `{o′}` alone. The prediction is absent. Fig 12 :81-82 defines subtraction as "A with B removed or absent". Removing the prediction from the molecule leaves a single operand, and Fig 12 :48 says "A molecule is a bonded arrangement. A chain is the degenerate case: one bond type, no branching." A single operand is not a bonded arrangement at all.
- **Prior-only:** operand `{Γ(b,a)}` alone, by the same subtraction. Also not a molecule.
- ⇒ The three are **not isomers**. Evidence-only and prior-only are the bare operands; only the interaction is a composition. This is not a terminological quibble: it means the question's three-way framing already breaks the composition rule. Options A and B are not full terms, so they cannot be determinants in the same sense as option C. This is the molecule-level version of F1 in `01`.
- **Falsifier:** exhibit a composition rule under which a single operand counts as a molecule with the same atom set as the two-operand gap, and show that it still satisfies Fig 12 :48. If it does, the non-isomer verdict fails.

### Q2 — Is the residual a subtraction or a comparison?

- Symbols table :36-38: "The gap between prediction and observation. The central quantity: everything the system does is driven by it."
- Operators table :41-44: subtraction is "A with B removed or absent", test: "is the second operand's absence the point? Yes." Here neither operand is absent, so subtraction is the wrong bond for the gap itself.
- Operators table :46-51: comparison `⋛` is "a threshold relation between two quantities", test: "is it about which is larger, rather than both being present? Yes." The residual is about the magnitude of the difference between two present quantities, which is closer to comparison than to subtraction.
- ⇒ Working reading: the residual is a comparison-like gap over two present operands; subtraction is the operation that produces the *limiting cases* by removing one operand. These are different operations at different places. **Strain, named not hidden:** the figures never explicitly write `R` as `⋛`. They call it a gap. Treating the gap as the comparison bond is a binding from the notation, not a verbatim figure statement. It stays `specified`.
- **Falsifier:** a figure line or a working implementation showing the residual is computed by removing an operand rather than comparing two present ones. That would move the limiting cases into the main term and change the census.

### Q3 — What order do the three determinants come in?

- Fig 3 :5: "the system can tell what is in front of it, and tell it apart from what was there before" (perception, link 1). Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
- Order by dependency, not importance:
  1. **Channel** (D3). Is `o′` current at all? Fig 10 :24: "the ground does not decay, the channel does."
  2. **Anchor** (D2). Is the reference immovable? Fig 2 :33: "The anchor must not update."
  3. **Slotting** (D1). Is `R` read per object? Fig 1 :19: "The residual is indexed by object slot, not aggregated."
  4. **Belief and weighting** (D1). Only now does `b` and `w` matter for what the prediction contains.
- Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." A determinant that has no instrument is not a determinant that is working; it is one that has not been measured.
- ⇒ The determinant that a researcher reaches for first (prior strength) is the *last* link in dependency order. This is why the question is easy to ask in the wrong order.
- **Falsifier:** show that tuning the prior restores per-slot fidelity through a demonstrably stale channel. If it does, the dependency order is reversed and Fig 3 does not govern this domain.

### Q4 — Are the three determinants a functional group?

- Fig 12 :123-124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- All three determinant conditions share a substructure: a ground-referenced per-object gap. They differ in what qualifies it, immovable reference, live channel, local read. Under Fig 12 they are **members of one functional group**, not three different bond types and not three different substances.
- This is the structural reason the union verdict in `01` holds: a single lever clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55-58). It also explains why a averaged answer across the three determinants would be meaningless: "Progress per handoff has two factors. Zero either and the chain runs in place" (Fig 7 :37).
- **Falsifier:** exhibit a case where one of the three conditions holds with the other two failing and the readout still tracks the ground. That would break the functional-group reading and make them independent mechanisms instead.

### Q5 — Outside analogues, as low-overlap corroboration only

Three outside frames make the same structural move from different evidence pools:

| frame | analogue | what it corroborates |
|---|---|---|
| Engineering, Kalman filter | the estimate is "a weighted average" of a model prediction and a new measurement, with weight set by estimated uncertainty; high gain "conforms to the most recent measurements", low gain "conforms to the model predictions more closely" | two operands, reliability-weighted, not a single scalar prior knob (F1, F2) |
| Psychophysics, signal detection theory | "Bias is independent of sensitivity"; experience, expectations and fatigue can affect the threshold | separating evidence sensitivity from response prior, and the channel condition (F4, F5) |
| Neuroscience, predictive coding | prediction errors "weighted by their precision, or estimated reliability"; in low-trust conditions "the top-down prediction would be given greater weight" | channel reliability changes the effective balance (F4) |

The three agree with the shape, but the second and third draw on overlapping Bayesian literature, so they are not fully independent. The engineering analogue is the lowest-overlap witness. None of them is allowed to overrule a figure line; a conflict would send the census back to Q1.

## CONCLUSION

The three readouts are **not isomers**. Only the interaction is a molecule; evidence-only and prior-only are single operands reached by subtraction of the other term. The three determinant conditions are **members of one functional group**, a ground-referenced per-object gap with different qualifiers. Dependency order puts channel first, anchor second, slotting third, belief-weighting fourth. One strain is named: the figures call `R` a gap and never explicitly bind it to the comparison operator `⋛`, so that binding stays `specified` and ungrounded.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and the Operators and Symbols tables, read this session. The three outside analogues were opened 2026-11-23 and are recorded in `10_source_ledger.csv`. No measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot indexing), Fig 2 (anchor), Fig 3 (dependency order), Fig 7 (multiplying factors), Fig 9 (union compound), Fig 10 (channel decay), Fig 12 (molecule, chain, subtraction, comparison, functional group), Operators (bond tests), Symbols (residual, belief, observation). Strains after re-census: one, the gap versus `⋛` binding, named above.
