# Isomers, order and analogues: supporting derivation for EAR-0082

**Mode: `specified` on the figure-derived structure, `general` on the ordering claim. Not `grounded`.** Simulated derivation checked against the figures (see `05_what_shape_means.md` §6).

## RESIDUAL

"Across regions or sectors" could mean two things: a list of people/assets (a partition, separate cases), or a union of overlapping conditions that produces specific compounds. It also asks about order: a cascade is a route, not a state, and the figures say "A vocabulary without bonds can name a state and cannot name a route to one" (Fig 12 :111). Four questions are owed:

1. Is a cross-sector cascade a partitioned list or a union compound?
2. Which bond types license the ordering of a cascade, and which are forbidden?
3. Are two cascades with the same ingredients "isomers" under Fig 12?
4. Do the cycle and catalyst structures change what a mitigation can do?

## DOMAIN CENSUS (reused from `01` §1, not re-derived)

Atoms held for the analysis: the six substrate terms, chiefly Space (state), Time (state), Energy (state), Gradient (structure), Network (structure), Spectrum (structure). Fig 13 :24 "that entities relate, and influence travels" makes Network the structure that carries a cascade. Bonds held: the seven plus negation, from the Operators table. Conditions held: sector membership, region membership, hazard identity. No new primitive is available without import.

## DERIVATION

### Q1 Partition or union? Compound, not list

Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :57-58 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

Let condition S = "crosses a sector boundary" and R = "crosses a regional boundary". The question asks for S ∪ R. A failure that only crosses sectors is cleared by a sector-specific lever; a failure that only crosses regions is cleared by a regional lever; the intersection (S ∩ R) is cleared by neither, because the second condition still binds. The residue after one lever is "smaller and categorically different" (Fig 9 :57). So the answer must keep the intersection as its own loop, not average it into a list.

**Falsifier, written before the run:** if a single lever demonstrably clears both the S-only case and the S ∩ R case, the union reading fails and the partition reading stands.

### Q2 Which bonds order a cascade?

Operators table: `→` is sequence, "A then B; B needs A to have happened" (also Fig 12 :30); `⇒` is production, "A produces B; B did not exist before" (Fig 12 :36). `−` is subtraction and `⋛` is a threshold comparison between two quantities.

A cascade is correctly written with `→` for load transfer (one failure triggers the next) and with `⇒` only where the failure creates a new condition that did not exist (a blackout creating a communications outage, rather than merely preceding it). `+` is symmetric and cannot express propagation: Fig 12 :59 "swap the operands. Does the meaning change? No." So a flat formula that records only ingredients (the list of infrastructures) loses the route, which is the thing asked for.

**Strain, named:** these glyphs compose terms in a library; they are not a physics of failure. Using `→` here is a notation binding from network science, not a figure derivation. Held as notation only (F7 of `01`).

### Q3 Are two cascades isomers?

Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Take the two most cited cascade cases:

- Power failure to communications failure to power failure (Italy 2003, Buldyrev et al. 2010). Ingredients: electricity network, communications network, dependency links.
- Drought in arable zones to urban food insecurity (IPCC AR6 WGII Ch6 2022). Ingredients: water availability, food production, urban consumption, connecting infrastructure.

These share almost no atoms, so under Fig 12 they are **not isomers**. They are two different molecules with different ingredients. The isomer claim becomes real only at a higher level of description: if both are written as `state → structure → state` over the shared atom set (Space, Time, Energy, Gradient, Network, Spectrum), differing only in which structure mediates which state pair, then they are "same atoms, different bond, different substance." That is the testable structural claim, not the ingredient-level one.

**Falsifier, written before the run:** if either case can be written without an atom the other requires, or if the same atom set with a different bond produces the same behaviour, the isomer claim fails and the weaker functional-group reading (Fig 12 :124 "the group says what kind; the qualifier says which member") stands instead.

### Q4 Cycle and catalyst: what mitigation can and cannot do

Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

The Italy case is a positive-feedback cycle: power failure impairs communications, impaired communications degrade grid management, which feeds back into power. A chain notation cannot close this loop; the cycle bond is required, and its sign decides whether it amplifies or damps. The "cascade failure" definition in the world source says the growth is by positive feedback, which corroborates the sign.

A protection system that regenerates between uses (an operator who regains situational awareness, a relay that resets) is the catalyst case; one that is spent after a single use is not. A model that records only the ingredient set cannot tell them apart, so it will misprice mitigation. Fig 12 :126 "A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds." A long chain of cheap parts is expensive to describe and may cost one action to refute; a short cycle over a costly operand is cheap to state and may take a whole budget to settle. Both readings are needed; summing them is the named error.

**Falsifier:** if a cascade is found whose feedback sign is negative (damping) where the claim requires positive feedback, the cycle reading is wrong for that domain and must be re-censused, not softened.

## CONCLUSION

The sector/region question is a union, and the intersection is a compound with its own loop. The route demands ordered bonds (`→`, and `⇒` where a genuinely new condition appears); a flat ingredient list cannot express it and is exactly what Fig 12 :111 forbids as an answer. The two canonical cases are not isomers at ingredient level; they are isomers only under the higher-level `state → structure → state` description, with a stated falsifier. Feedback sign is decisive: the chain notation cannot close the loop that makes a cascade a cascade. Mitigation must distinguish catalysts from spent parts, and must price description bits and settlement actions separately.

This framing preserves what is checkable without claiming a ground reading: the order and the union structure need no new primitive, and no named "critical list" is smuggled in.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session. Buldyrev et al. 2010 (*Nature*) and IPCC AR6 WGII Ch6 2022 were opened as secondary corroboration of the two cases. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 9 (union versus partition, categorical residue), Fig 11 (contact enumeration, valence relative to residual), Fig 12 (isomer, functional group, cycle sign, catalyst, two currencies, name a route), Fig 13 (network structure, influence travels), Operators table (sequence versus production, symmetric versus ordered). Strains after re-census: one, the bond notation as a binding rather than a derivation, named in Q2 and in `01` F7.
