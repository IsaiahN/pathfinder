# Source relations and dependency order: supporting derivation

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The record asks for a combining rule for three sources. Two questions are owed before any rule can be written: (1) what is the relation among the sources, and (2) in what order must the operations run? A third is implied: what is the smallest change that would make the rule unnecessary?

## DOMAIN CENSUS

Atoms held: Space, Time, Energy (states) and Spectrum, Gradient, Network (structures), plus the seven bonds and negation. Bonds held: `+` conjunction, `∥` disjunction, `≡` identity, `→` sequence, `⇒` production, `−` subtraction, `⋛` comparison, and the unary `¬` negation (Operators table). No new primitive is available without import. The sources themselves are not substrate terms; they are frames, and the relations among them are bonds between frame-contents.

## DERIVATION

### Q1 - What kind of relation holds among the three sources?

The engineering literature already distinguishes three relations. Castanedo 2013 (opened 2026-11-23), following Durrant-Whyte:

- **complementary**: "when the information provided by the input sources represents different parts of the scene and could thus be used to obtain more complete global information";
- **redundant**: "when two or more input sources provide information about the same target and could thus be fused to increment the confidence";
- **cooperative**: "when the provided information is combined into new information that is typically more complex than the original information."

Map these onto the bond table. Complementary sources combine by `+` (both hold at once, different parts of the slot). Redundant sources are the ones for which `≡` identity is a live hypothesis: two names, one referent, and "substitute one for the other. Is anything lost? No" (Fig 12 :69). Cooperative sources combine by `⇒` production: "A produces B; B did not exist before" (Fig 12 :77), with the test "is there a B before A fires? No."

But the identity test is the whole problem. Whether two readings are one referent cannot be read off the readings; it is a causal inference. Kayser and Shams 2015 (opened 2026-11-23) state it in the language of their field: the system "has to decide which sensory inputs likely originate from the same object and hence provide complementary evidence about this and which inputs originate from distinct objects and hence should be processed separately." So the first operation is a test of `≡`, before any weighted sum. **Falsifier:** if the `≡` test cannot be run at all for a given task, the three relation classes collapse into one and this derivation fails for that task.

### Q2 - Are the three sources isomers under Fig 12?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

A tool, a user and a prior are not built from the same atoms, so they are **not isomers**. A tool reading is an observation o′; a user judgment is a comparative or a goal (Fig 12 :112, "A goal is a comparison"); a parameter is a weighting w over history (Symbols table :23-25). They differ in atoms, not merely in bond. The correct figure label is Fig 12 :123 functional group: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." All three belong to the functional group "frame ranging against a residual", with different fillers in the actor and currency slots.

The stronger isomer claim would require rewriting all three over a shared atom set, for example as three estimators of one slot differing only in which evidence they bind. That is a real checkable claim: if it holds, source disagreement is isomerism and a single comparison `⋛` is defined on them; if not, the functional-group reading stands. **Falsifier, written before the run:** if any one of the three cannot be written over the shared atom set without importing a new primitive, the isomer claim fails and the functional-group reading is kept. This is recorded as open, not answered.

### Q3 - What is the order of operations?

Fig 3 :20: "The chain is ordered by dependency, not by importance." The dependency order for this question is forced:

1. **Perceive** (Fig 3 :4-5): can the system tell what each source said, and tell it apart from its prior state? Without this, there is no residual to route.
2. **Vocabulary** (Fig 3 :6-8): does it have the terms `≡` (same source?), `+` (complementary), `⇒` (cooperative), `¬` (refuse)? Fig 12 :112: "A refutation is a negation, and that one is not a bond." A vocabulary with weights but no `¬` can reweight a false source and can never say it is false.
3. **Objective** (Fig 3 :9-11): what counts as progress here? A residual against the ground that stops arriving, not a smoother fused output. Fig 1 :24-27 disqualifies frame-internal quantities: "coverage, and compression achieved" and "predicates minted, and credibility accrued" do not count. A fused number is frame-internal until a ground pays for it.
4. **Plan** (Fig 3 :12-13): which source to probe next under incomplete information. This is where "buy independence in proportion to the cost of being wrong" (Fig 2 :42) becomes an allocation decision.
5. **Learn and carry** (Fig 3 :14-15): name what worked, verify it, carry the method. Fig 4 :22-23: "Only methods cross up. Only head starts come down." Carry the rule, not the particular fused value.

The break is most likely between 2 and 3, because that link has no instrument (Fig 3 :25-27: "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."). **Falsifier:** a task in which adding the `≡` term and an explicit objective changes nothing while a better optimizer at step 4 changes the ground score materially. Then the break is not at 2 to 3 for that task.

### Q4 - What would make the rule unnecessary?

Fig 6 :14 names import as "the only operator that moves the wall". If the missing thing is a new instrument rather than a new weight, the right move is INWARD (extend an instrument already returning something) or OUTWARD (import a frame whose closure predicts the residual's shape), not more fusion. Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." So when the three sources disagree and none resolves, the question is not "what weights?" but "what is already returning something that fails to resolve, and can it be sharpened?" If nothing is returning anything, the search for a proto-instrument is a search for one already there (Fig 6 :34-35). This is the honest stop condition for the numeric gap in F6.

## CONCLUSION

The three sources are not isomers; they are members of one functional group, "frame ranging against a residual", with different atoms. Their relation must be classified as complementary, redundant or cooperative before fusion, and that classification is a test of identity (`≡`), not a weight. The operations are strictly ordered by dependency: perceive, build the vocabulary including negation, state the objective as a ground-ranged residual, plan probes, then learn and carry a method. The most likely break is at the vocabulary-to-objective link, and the smallest thing that would retire the whole rule is a better instrument, not a better average.

This rescues what is checkable in the question without pretending the figures hand down coefficients. `metric = prior = user` remains an unproven binding; "source relation is classified before fusion, and the operations are dependency ordered" is a checkable structural claim.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; `THE_FORMULA.md`; the Operators and Symbols tables; Castanedo 2013, Kayser and Shams 2015, Roach et al. 2006 (public sources opened 2026-11-23). No measurement was taken.

## FIGURE CENSUS

Fig 3 (dependency order, middle link), Fig 4 (methods cross up, round trip), Fig 6 (import, instrument already returning something), Fig 12 (isomer, functional group, identity test, negation not a bond), Symbols table (w as weighting), Operators table (`≡`, `⇒`, `¬`). Strains after re-census: the isomer reading is **open**, not strained; the numeric weights remain a **gap**, named in `01` F6 and not hidden here.
