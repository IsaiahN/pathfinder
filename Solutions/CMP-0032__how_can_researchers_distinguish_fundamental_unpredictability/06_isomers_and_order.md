# Chaos, noise and level: the supporting derivation

**Mode: `specified` on the compositional claims, `general` on the dependency order. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).**

## RESIDUAL

The main audit separates two causes. This file answers the three structural questions the separation leaves open:

1. Are chaotic amplification and discarded-detail noise the **same substance with different bonds** (Fig 12's isomer case), or different compositions altogether?
2. What does "fundamental" mean once Fig 12 makes irreducibility a fact about a level?
3. In what order must a researcher run the checks, and what breaks if the order is reversed?

## DOMAIN CENSUS

Atoms held for this derivation: the six substrate terms (Space, Time, Energy states; Spectrum, Gradient, Network structures) plus the residual `R` as a slice, the closure `closure(Γ)`, the channel, and the ground. Bonds held: the seven, including `−` subtraction, `→` sequence, `⋛` comparison, and the unary `¬` negation. No new primitive is available without import. Actors / currency / anchor were set out in `01_figure_grounded_audit.md` section 1 and are not repeated.

## DERIVATION

### Q1 - Are chaos and noise isomers?

Fig 12 :117 (definition): **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 13 :32: **"a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."**

Parse the two:

- **Chaos:** remainder `R` re-enters the next turn (a **cycle**, Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*) and the chain **amplifies** it. The bond is a positive-feedback cycle plus comparison (⋛) on the growing magnitude.
- **Noise:** a crossing **discards** detail (`−` subtraction, Fig 12 :80: *"A with B removed or absent"*) and that discarded detail **reappears above** the crossing. The bond is subtraction plus a reappearance at the next level.

They do not share the same atoms under two different bonds. Chaos uses a remainder that re-enters; noise uses detail that was removed and then shows up again. Under Fig 12's definition they are **not isomers**. They are two different structures that a composition leaves behind, both listed in Fig 13 :124: **"Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member."**

The weaker, defensible claim is that they share a **functional group** (Fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*): both are *remainders at a crossing*. The qualifier (re-entering versus discarded-and-reappearing) decides which member. That is the claim worth testing.

**Falsifier, written before the run:** if an instrument shows that a compounding remainder and discarded detail produce the same invariant signature at the same level (same spectrum, same dependence on record length, same response to added sensors), the functional-group split fails and the two are one phenomenon. Fig 12 :95: *"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."* Here the notation is the time series; the bond is what an instrument must recover.

World corroboration, low overlap: surrogate data testing *"can then for example be used for testing for non-linear structure in the empirical data"* (Wikipedia, Surrogate data); and a positive maximal Lyapunov exponent *"is usually taken as an indication that the system is chaotic"* (Wikipedia, Chaos theory). But the Perron counterexample warns that *"a positive largest Lyapunov exponent does not, in general, indicate chaos"* (Wikipedia, Lyapunov exponent). So the instrument exists, is real, and is not universal. That is exactly the shape F10 predicts.

### Q2 - What does "fundamental" mean after Fig 12?

Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"**

Three readings of "fundamental" are available, and only two survive:

| reading | status | reason |
|---|---|---|
| Absolutely irreducible, no deeper account possible | **refused** | Fig 12 :104 "there is no bottom"; Fig 4 :33 "there is no top and no infinite regress". |
| Underivable in principle relative to a declared `closure(Γ)` | **kept** | Fig 8 :40-43; needs a proved barrier or an outside witness (Fig 8 :34, :37; Fig 9 :19). |
| Irreducible at this level; a settled composition becomes an atom for the next level | **kept** | Fig 12 :104; a result that is an atom above need not have been primitive below. |

So "fundamental unpredictability" must always be indexed: fundamental *relative to which closure, at which level, as certified by what*. An unindexed use of the word is an unbound preference (Fig 5 :62-63), not a term.

**Falsifier:** derive one of the six terms from the other five, or show a level that cannot become an operand for any higher composition. Either breaks the recursion and restores an absolute bottom.

### Q3 - What order do the checks run in, and what breaks if reversed?

Fig 3 :20: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**

Dependency order for the discriminator:

1. **Perception** (Fig 3 :4-5): does anything register at all? Fig 6 :34: *"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."* If nothing registers, there is no edge to extend (Fig 6 :35) and "more data" is a preference, not a plan.
2. **Vocabulary** (Fig 3 :6-7): is there a term for the shape of the missing thing? Fig 9 :32: *"you get a kind of thing, never the answer itself."* Without the shape, any frame picked will seem to fit (Fig 9 :27-28).
3. **Objective** (Fig 3 :9-10): what counts as closing `R_s`? A global accuracy number is the wrong objective; Fig 1 :19 requires per-slot residual.
4. **Planning / intervention** (Fig 3 :12-13): run the inward track (sharpen the instrument) and the outward track (find a differing closure) as **separate** searches (Fig 6 :31).
5. **Learn and carry** (Fig 3 :14-15): record provenance for any import; a wrong atom costs more than starting from primitives (Fig 6 :24).

Reversals and their costs:

- Declaring "fundamental" before step 1: mints an atom that was not owed. Fig 8 :42-43: importing against a budget limit adds an unneeded atom at a cost above starting from primitives.
- Picking a frame before step 2: apophenia. Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit."*
- Reading inward and outward against each other at step 4: Fig 6 :31 forbids it; the two instruments are opposed.
- Using a global metric at step 3: Fig 1 :22, *"Aggregating across slots is how a live signal disappears into an average."*

Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** The middle link here is objective-setting: most teams have a forecast error metric (perception) and an optimisation procedure (planning), but no instrument for "what would count as closing this slot's residual by import rather than by search." That is where the chain breaks.

### Q4 - The analogue from identifiability, and its limit

World source arXiv:2611.23526 (Shamekh and Acquaviva, 2026): *"Different parameters influence different features and time scales of the dynamics, so the record length and sampling interval needed to constrain them may differ."* In figure terms, the residual is indexed by slot **and by time scale**. A parameter that looks irreducible under a slow-variable record becomes reachable when the fast field is added. That is the inward track succeeding, not a barrier being crossed.

World source arXiv:2611.23434 (Williams, Kutz and Manohar, 2026): the leading Lyapunov exponents of a full system were reproduced *"from 25 of 128 state components"*. That is the structural invariant surviving sparse data, which is why chaos is not automatically "incomplete data".

Limit of the analogue: neither paper is a figure line. They are instruments and filters for the budget. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* They corroborate the shape; they do not supply the decision rule.

## CONCLUSION

Chaos and discarded-detail noise are not isomers. They share a functional group (remainders at a crossing) and differ in bond: a re-entering amplifying cycle versus a subtraction whose discarded detail reappears above the level. "Fundamental" survives only as relative to a declared closure and a level; absolute irreducibility is refused by Fig 12 :104. The checks run in a fixed dependency order, and every reversal mints an atom, picks a frame too early, or aggregates the signal away. An instrument for the middle link (what would count as closing this slot by import rather than search) is still owed, which is the declared gap of the main audit.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; the eight essays (four opened this session, four carried from the exemplar's canonical mapping and marked as such in `05`); the world sources listed in `10_source_ledger.csv`. No measurement was taken. This is a simulated derivation, not a ground reading.

## FIGURE CENSUS

Fig 1 :19, :22; Fig 3 :4-15, :20, :27; Fig 4 :33; Fig 5 :62-63; Fig 6 :24, :31, :34-35; Fig 8 :34, :37, :40-43, :42-43; Fig 9 :19, :27-28, :32, :60; Fig 12 :80, :104, :117, :121, :123, :95; Fig 13 :32, :124. Strained after re-census: none. The apparent chaos-versus-determinism tension was dissolved by assigning Fig 13 :32 to the source of a residual and the world sources to the ontology of the dynamics (S3 in the main audit).
