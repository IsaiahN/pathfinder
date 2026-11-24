# Isomers, production, and the order of the four checks

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The score increase after a change does not say whether the atom set grew, the bonds changed, more of the closure was visited, or contact with the ground changed. This file works out two supporting questions: (1) under what relation do the before and after states differ, and (2) in what order must the four checks run so a later check cannot be answered by an earlier one.

## DOMAIN CENSUS (supporting)

Atoms held: the six of Fig 13 plus whatever the model's Γ contains at time t. Bonds held: the seven of Fig 12, plus negation as a unary operator. Currency: composition inside closure(Γ) in bits, and actions to settle. Anchor: the ground, not the benchmark. No new primitive is available without import (Fig 6 :22).

---

## Q1: Is the change a new atom or an isomer?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
Fig 13 :116: "Six members, and no amount of arranging produces a seventh"

Let Γ_t be the library before the change and Γ_(t+1) after.

- If atoms(Γ_(t+1)) = atoms(Γ_t) and the difference is a new bond arrangement, then the two states are **isomers**: same atoms, different bond, different substance. Fig 12 :94: "The arrangement is the substance." A capability claim of this kind is real, but it is not a new primitive. It needs a bond-level description, not an atom-level one.
- If atoms(Γ_(t+1)) contains an atom not in atoms(Γ_t), then an **import** occurred. Fig 6 :22: "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure." Fig 6 :23 requires contact with a differing frame, and Fig 6 :12-13 requires a source gate and a shadow test.
- If neither atoms nor bonds changed and more of the closure was visited, it is **SEARCHED** (Fig 6 :49): "Same atoms, same wall, more of the space actually visited."

Three different objects, three different reports. A single score cannot tell them apart.

**Falsifier, written before the conclusion:** if the before and after states can be written with the same atoms and the same bond structure, and the difference is only how often a path was traversed, the isomer claim fails and the SEARCHED reading stands. If an atom appears with no traceable source, the import claim fails and the claim is withdrawn pending provenance.

### Worked structural example, deliberately generic

No named model is claimed. Take a task family T whose items share atoms {A, B, C} and a bond `→` (sequence). A pre-change system composes A→B→C. A post-change system composes B→A→C. Same atoms, different bond order, different substance under Fig 12 :117. If the ground pays differently for the two arrangements, that is an isomer difference and a legitimate capability claim at the bond level. It is not a new atom. If instead the post-change system composes A⇒D, where D was never in atoms(Γ_t), then D must have arrived from a differing frame; otherwise the claim is unsupported. Fig 12 :74: "A then B; B needs A to have happened" is sequence, and Fig 12 :77: "A produces B; B did not exist before" is production. Confusing `→` with `⇒` is the most common way a re-arrangement gets reported as a new capability.

**Second falsifier:** if the ground does not discriminate between A→B→C and B→A→C, the isomer claim has no purchase, because "the difference is decisive in the behaviour" fails. That is an instrument question, not an argument.

---

## Q2: What is the order of the four checks?

Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

| order | check | consumes | produces | figure |
|---|---|---|---|---|
| 1 | Bind the sought-for shape as an ordinary term | the residual in effect terms | a refusable capability term | Fig 5 :65, Formula "Direction" |
| 2 | Secure a non-updating anchor and per-slot residual | the term from 1 | a ground that does not move when the model moves | Fig 2 :29-30, Fig 1 :19 |
| 3 | Test novelty relative to atoms(Γ_t) | the anchored residual from 2 | a verdict: SEARCHED / isomer / import | Fig 6 :21-23, Fig 5 :25 |
| 4 | Test change of contact in a reproduced habitat | the classification from 3 | a capability verdict, or harness-only | Fig 11 :39-40, :66-70 |

Order matters because each check assumes the previous one's output. Testing novelty on a saturated benchmark (skipping 2) measures the metric, not the atom set. Testing contact before binding the shape (skipping 1) lets the evaluator pick whatever contact looks interesting, which is apophenia: Fig 9 :28, "any frame you pick will seem to fit". Refusal comes before mint in the Formula step 2, so a claim that fails check 3 must be refused, not repaired by a new story.

**Falsifier for the order:** if a change of contact can be established without first specifying the term being tested, or if novelty can be decided without an anchor, the dependency order is wrong and must be re-censused. Fig 3 :22-23: "A step whose input never arrives cannot be diagnosed, only its predecessor can."

---

## Q3: What breaks at the middle link?

Fig 3 :25-26 names the usual break: perception and planning have obvious tests; the link between them, "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

In capability evaluation the vocabulary is accuracy, loss, and pass rate. The missing term is the relation between an atom set and a ground: novelty, contact, import. That is the bond-level vocabulary Fig 12 :111-112 names: "A vocabulary without bonds can name a state and cannot name a route to one." With only scores one can say what the system did on a task. One cannot say what would count as getting somewhere. This is a structural diagnosis of why the question is hard, not an empirical finding about any lab.

---

## Q4: Two currencies, not one

Fig 12 :125: "A composition costs in two currencies, and they do not add."
Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."

A capability term can be cheap to state and expensive to settle. A benchmark score prices the description side at one occasion; it does not price the actions needed to show the term pays across slots. Fig 5 :44: "fails this, and so does a term that explains one occasion perfectly." Summing the two currencies into one number is the named error, not the fix.

**Falsifier:** if a single scalar can be shown to price both the description length of a capability term and the actions required to settle it against a ground, in the same units, the two-currency claim is refuted. No such scalar is used in this solution.

---

## CONCLUSION

The before and after states are related in one of three ways: SEARCHED (same atoms, same wall), isomer (same atoms, different bond, different substance), or import (new atom from a differing frame). Only the third moves the wall; the second is still a real substance change and must be reported at the bond level. Capability is a further, second-order claim about contact with a ground in a habitat (Fig 11 :39-40), so a harness solve cannot establish it. The four checks run in dependency order, from binding the shape to testing contact, and each assumes the previous output. The missing instrument is at the vocabulary/objective link: researchers have terms for scores and no term for the bond between an atom set and a ground.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-24. No measurement, no named model, and no ground reading.

## FIGURE CENSUS

Fig 1 :19, Fig 2 :29-30, Fig 3 :19-20/:22-27, Fig 5 :25/:44/:65, Fig 6 :12-13/:21-23/:49, Fig 8 :51, Fig 9 :28, Fig 11 :39-40/:66-70, Fig 12 :5/:74/:77/:94/:111-112/:117/:125-126, Fig 13 :116. Strains after re-census: none. The apparent tension between "isomer is a real difference" and "only import moves the wall" dissolves because the first concerns substance at fixed atoms and the second concerns closure size. Different objects.
