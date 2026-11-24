# Isomers, catalysts and order: a supporting derivation for the continual-learning question

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The main audit splits the question into reach preservation and contact preservation. Three supporting questions remain:

1. Is the stability-plasticity dilemma one quantity with a knob, or two quantities that cannot be added?
2. What is the dependency order of the links a continual learner must keep, and which link has no instrument?
3. Over a fixed atom set, what is the structural relation between two learners that retain differently (isomer, catalyst, cycle), and what would falsify that reading?

## DOMAIN CENSUS

Atoms held: the six of Fig 13 (space, time, energy states; spectrum, gradient, network structures) as the substrate the loop assumes; plus the library-level atoms named by the Symbols table: Γ, atoms(Γ), closure(Γ), R per slot, φ, T_A/T_E with R_T, the ground and the habitat. Bonds held: the seven of Fig 12 and the unary negation. No new primitive is available without import. Currency split: bits price the description, actions price finding out whether it holds (Fig 12 :125-127). Anchor: the ground for reach and contact claims, the figures for composition claims.

## DERIVATION

### Q1 - One trade-off knob, or two currencies?

- Fig 12 :125-127: **"A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."**
- The ordinary phrase "stability-plasticity trade-off" treats stability and plasticity as one dimension with a scalar setting. The world literature does the same (Wang et al. and van de Ven et al. both describe a trade-off, and the IEEE paper proposes dynamically tuning a hyperparameter).
- Under Fig 12 :125-127 the two are not one dimension. Plasticity is a change in reach on the new slot; stability is continued contact with the old slot's ground. They are measured in different units (new-slot residual versus old-slot residual against different grounds). Summing them into a single average accuracy is the error the figure names, not the fix.
- **Falsifier, written before the run:** if a single scalar is sufficient to rank all continual learners on both old-slot and new-slot reach under a fixed budget, the two-currency claim is false for this domain. Report `specified`, unmeasured.
- **Triangulated:** Fig 12 :125-127 (two currencies) and Fig 1 :19 (per-slot residual, never aggregated). Low overlap: one is a composition-price rule, the other a metric-index rule.

### Q2 - Dependency order and the link with no instrument

- Fig 3 :14-15 names link 5: *"5 · learn and carry / name what worked, verify it, and carry it to the next problem"*. This is the continual-learning link. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*
- Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*
- Order for this question: (1) perception, tell the current slot from the previous one; (2) vocabulary, have a term for "reach on an old slot" and for "the reference moved"; (3) objective, say what counts as progress in those terms; (4) planning, choose an update under incomplete information; (5) learn and carry. Refusal precedes mint (Formula step 2) and the residual is described before a frame is chosen (Fig 9 :27-28).
- Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* In the opened world sources, AA, FM and BWT are instruments for the *score*, and there is no standard instrument that discriminates reach-fall from channel-decay from habitat-substitution. The break is at vocabulary/objective, not at optimization. This matches the metalaws note that most improvement effort lands above the break where measurements already exist.
- **Falsifier:** exhibit a standard benchmark instrument that discriminates the three failure sources on a single run. That moves the break and changes the outreach recommendation.
- **Triangulated:** Fig 3 :20 and :27 with Fig 1 :22. Different objects (chain order versus metric averaging), low overlap.

### Q3 - What crosses a task boundary: method or recording?

- Fig 4 :23: *"upward: a method that can be reapplied. Never the recording of a particular success."* Fig 4 :24: *"downward: something that makes the next search cheaper. Never a replay of what worked once."*
- Fig 12 :107-110: *"Settling compresses the description and not what it cost to establish. Whether that cost must be paid again depends on the substrate: where the arrangement is recorded, re-deriving it is a lookup and the actions were spent once. Where it is not, the result carries forward and the deriving does not, so every lineage pays again."*
- A replay buffer stores samples of an old distribution. Under Fig 4 :24 those samples are a **head start**: they make the next search cheaper. They become a **recording** in the forbidden sense only if the system treats the replayed occasion as the answer rather than as a probe. The distinction is a use, not a data structure. This dissolves strain S1 of `01` §7.
- Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Round-trip gap R_T for this derivation: the abstraction "retain a method" loses the fact that a method must be recorded somewhere the next task can look it up. The concretization "keep a replay buffer" adds the assumption that samples are the method. The gap is nonzero and is recorded qualitatively in `11_audit.md`.
- **Falsifier:** show a one-occasion recording that generates a new success on an unseen task without re-derivation. That breaks Fig 4 :25.

### Q4 - Are two continual learners isomers over a fixed atom set?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**
- Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**
- Two learners over the same atom set (same architecture family, same capacity, same ground) that differ only in what they retain, for example one consolidating weights and one replaying samples, are **isomers** in the figure's sense: same atoms, different bond arrangement, different behaviour. Nothing in the ingredient list (capacity, optimizer, data) tells you which is which; the bond does. This is a structural claim about the relation, not an empirical ranking.
- **Catalyst reading:** a consolidated subset of weights is a part that survives its own use; a transient activation is a spent part. Under Fig 12 :119 these behave differently across uses, and a description that records only "the weights changed" does not say which a term is. The world EWC result (Kirkpatrick et al.) is a catalyst design: protect the part that survives.
- **Cycle reading:** self-distillation on the learner's own previous outputs is a cycle, the output re-entering as input. Fig 12 :121 says the sign of the loop decides whether it closes. A cycle that re-enters with a ground-payment check is a consolidation loop; a cycle that re-enters with no external check is Fig 2's mirror chain. A chain cannot close by construction, so a purely feedforward update cannot exhibit this distinction at all.
- **Falsifier, written before the run:** if two learners with identical atoms and different retention bonds behave identically on all old-slot residuals under a fixed ground, the isomer claim fails and the difference is a parameter, not a bond. If a self-referential update preserves old-slot reach on an independent ground, the mirror-chain reading of that cycle fails.
- **Status:** triangulated for the isomer definition (Fig 12 :117 plus Fig 12 :94, *"The arrangement is the substance"*), single-source for the catalyst and cycle applications (Fig 12 :119, :121), unmeasured at the ground.

### Q5 - Why no seventh "retention" primitive is owed

- Fig 13 :41: *"Each is indivisible: no arrangement of the other five yields it."* Fig 13 :115: *"The set is closed. The arrangements are not."* Fig 13 :116-118: *"Six members, and no amount of arranging produces a seventh: a new member would have to be a new kind, and composition only ever rearranges the kinds already held. Meanwhile the arrangements over those six do not run out. So a frame can search without end and still not arrive: infinite effort inside a finite reach."*
- "Retention" is not a seventh state or structure. It is a relation among record, reach, channel and habitat, all already held. Adding a "memory" primitive to the six would violate Fig 13 :41 and would be a wrong import, priced above starting from primitives (Fig 6 :24).
- **Falsifier:** derive a retention primitive from five of the six that is not already a composition. That would break minimality and force a re-census.

## CONCLUSION

The stability-plasticity dilemma reads in two currencies that do not add, so a single scalar score is the wrong witness (Fig 12 :125-127, Fig 1 :19). The chain breaks at vocabulary/objective, where there is no instrument that discriminates the three failure sources, not at optimization (Fig 3 :27). What crosses a task boundary is a method or a head start; samples in a replay buffer are a head start by use, not a recording by data structure (Fig 4 :23-25). Two learners over a fixed atom set with different retention bonds are isomers; a consolidated subset is a catalyst; a self-referential update is a cycle whose sign must be checked against a ground (Fig 12 :117, :119, :121). No seventh retention primitive is owed (Fig 13 :115-118). All of it is `specified`, unmeasured, and a simulated derivation.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session; `THE_FORMULA.md`; the two essays read directly this session. No measurement was taken. World mechanisms (interleaved replay, consolidation, EWC) are corroboration of shape only.

## FIGURE CENSUS

Fig 1 :19/:22; Fig 2 :33-34; Fig 3 :14-15/:19/:20-21/:27; Fig 4 :22-25/:30; Fig 5 :69-70; Fig 9 :27-28; Fig 12 :94/:104/:107-110/:117/:119/:121/:125-127; Fig 13 :41/:115-118. Strains: S1 (replay buffer versus recording) dissolved by re-census into instrument versus retained method; S4 (frozen test set as proxy anchor) live. After re-census: one live strain, named.
