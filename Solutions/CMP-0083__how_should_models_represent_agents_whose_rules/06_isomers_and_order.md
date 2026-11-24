# Isomers, order and analogues in the representation of changing agents

**Mode: `specified` on the isomorphism and order claims, `general` on the structural shape.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §8).

## RESIDUAL

Two questions are owed after `01`: (1) if two agents hold the same state variables but differ in rule or goal, are they **isomers** under Fig 12's definition, and (2) in what order must the representation requirements be satisfied, given that an unreachable slot index makes every later reading void (Fig 3)?

## DOMAIN CENSUS

Atoms available in the encoding: the state/structure roles of Fig 13 (as roles, not agent types, per `01` S1), the seven typed bonds and unary negation (Operators table). No new primitive is available without import. Bonds held include `→` sequence, `⋛` comparison, `−` subtraction and the unary `¬`.

## DERIVATION

### Q1 : Does the bond vocabulary license the operator mapping? CORRECTION TO MY OWN FIRST PASS

- The figures README: "what a **missing** thing would have to look like (a shape, not a name)." The subject is a missing primitive, one not held in Γ.
- The seven bonds and negation are all already held and named. Operators :51 "a goal is a comparison, which is why a vocabulary without it cannot state one"; Operators :46 "progress is a subtraction, which is why a vocabulary without it cannot say how far along it is"; Operators :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate"; Fig 12 :71 "A then B; B needs A to have happened" for sequence.
- ⇒ Naming rule as sequence, goal as comparison, information limit as subtraction and rule replacement as negation is **not** forbidden. It is a binding onto held operators. What remains forbidden is naming the specific live rule of a particular agent from its behavior, because that source is not held (F7 of `01`).
- **I overstated this earlier.** In `01` §0 and the draft I treated the shape-not-a-name rule as barring the operator mapping. Narrowed here and in `05` §5. Retracted as applied to held operators; retained as applied to rule identity. Triangulated (README plus Fig 13 :135 plus Operators table).

### Q2 : Are two agents with the same ingredients different things?

- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :95 "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."
- Consider two agents with identical state variables (same observable ingredients) where agent A's rule is `observe → update → act` and agent B's rule is `observe → act`, with the information limit `−` removing the update input. Same atoms, different bond arrangement, different behavior. By Fig 12 :117 they are **isomers**, and the difference is invisible to an ingredient-only representation. This is the structural reason F2 of `01` demands the signature rather than the label.
- The weaker case: agents that share only a `state → rule → state` skeleton but differ in which atoms fill the slots are a **functional group**, not isomers. Fig 12 :123 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." This matters because a representation can correctly name the skeleton and still be wrong about the member.
- **Falsifier, written before the run:** if two agents with the same atoms and different bonds are shown to be behaviorally identical under every intervention the ground can apply, the isomer claim is empty for modeling purposes and the functional-group reading stands instead.

### Q3 : What is the dependency order of the representation requirements?

- Fig 3 :20 "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."
- Ordered requirements:
  1. **Per-slot index** (Fig 1 :19). Without it there is no object whose residual can be read.
  2. **Bond vocabulary** (Fig 12 :46, :111). Without it the model can name what an agent contains and cannot name a route or a threshold.
  3. **Goal as comparison** (Operators :51). Without it the model cannot state what counts as progress for an agent.
  4. **Ground reachable and non-updating** (Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."). Without it, every later fit is drift.
- The break in Fig 3 is drawn between links 3 and 4 as an illustration only: "Where a given chain stops is a reading, never a property of the chain" (Fig 3 :18). Here the standing diagnosis is that link 2, the bond vocabulary, is the one with no instrument; link 4 is the one most often replaced by agreement among modelers (F8 and S5 of `01`).
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Most modeling effort lands above link 2, where measurements already exist. That is the named failure.

### Q4 : Is a rule that persists a catalyst or a spent part?

- Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
- A rule that continues to pay across contexts without being re-purchased is a catalyst in the representation: it survives its own use. A rule that worked once and is replayed is a spent part being treated as a catalyst. A representation that records only the rule, and not whether it was regenerated, cannot tell them apart (Fig 12 :119).
- The practical requirement: stamp each carried rule with its origin and the context in which it was settled (Formula step 4 "Γ ← Γ ∪ {φ}, stamped with origin and seq"). The stamp is what makes the catalyst/spent distinction checkable. This is also the "purchase conditions" requirement in `01` F3.
- **Falsifier:** show a rule reused across contexts whose behavior is indistinguishable whether or not its origin and settlement context are recorded. Then the stamp is bookkeeping, not structure.

### Q5 : What do the low-overlap analogues actually corroborate?

- **Animal behaviour.** Behavioural reaction norms measure "the behaviour of an individual over an environmental gradient", giving both the average and the change across contexts. This corroborates F3 and the rejection of a fixed rule constant, from a field with no contact with the figure vocabulary. The criticism that one can "erroneously determine that variation in behaviour between individuals exists if the subjects have not been examined across a gradient of ecological contexts" is the mechanism-level reason a single-context agent snapshot misidentifies the source.
- **Machine learning and engineering.** Concept drift is "an evolution of data that invalidates the data model" when "the statistical properties of the target variable... change over time in unforeseen ways"; its authors state it "cannot be avoided for complex phenomena that are not governed by fixed laws of nature". This corroborates the method-not-recording rule (Fig 4 :22) without importing the framework.
- **Mathematics and AI.** A POMDP policy is "a mapping from the history of observations (or belief states) to the actions", and optimal behavior includes information-gathering actions. This corroborates the per-slot history indexing of D1 and the "instrument owed" conclusion of F7. The further result that "Planning in POMDP is undecidable in general" is a genuine limit from another frame, but it does not transfer: the framework's unsettled-rule claim is a `gap` about instruments, not an undecidability theorem. Do not upgrade one into the other.
- **Human cognition.** Bounded rationality replaces global optimization with behavior "compatible with the access to information and the computational capacities that are actually possessed by organisms". This corroborates treating information access as a typed absence (`−`) rather than as an omitted parameter.
- **Overlap:** the four framework essays share the author's pool completely; the ABM sources are one field pool; the four analogues above are low overlap with each other and with the figures. They corroborate the *shape*, not the framework's authority.

## CONCLUSION

Two agents with identical ingredients but different bonds are isomers in the figure's sense, so an ingredient-only representation is structurally blind to the difference. Two agents that share only the `state → rule → state` skeleton are a functional group, so naming the skeleton is not naming the member. The requirements are ordered by dependency: slot index, bonds, comparison, ground. A carried rule is a catalyst only if it survives its own use and its origin is stamped; otherwise it is a spent part being replayed. The low-overlap analogues corroborate the need for per-slot history, context-graded rules, an information-limit operator and an instrument for the live source, but they do not license naming a specific representation.

This framing rescues what is checkable in the question without importing a modeling language: the isomer and functional-group tests need no new primitive, the dependency order needs no new atom, and the catalyst test needs only the provenance stamp the formula already requires. What remains unavailable is the identity of the live rule, which is F7's `gap`.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators and Symbols tables, `THE_FORMULA.md`, the four framework essays opened this session, and the low-overlap world sources listed in `10_source_ledger.csv`. No model was built or run.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (ground, one pool), Fig 3 (dependency order, missing instrument), Fig 4 (methods versus recordings, round trip), Fig 6 (closure, import adds no atom), Fig 8 (provenance, residual first), Fig 9 (union, name versus shape), Fig 11 (valence, harness as substituted habitat), Fig 12 (isomer, functional group, catalyst, bonds, two currencies), Fig 13 (missing primitive, shape not a name), Operators table (sequence, comparison, subtraction, negation, open price of unary operator), Symbols table (slot, weighting, frame signature). Strained after re-census: **none**; one live open item retained, the open price of negation (S4 of `01`).
