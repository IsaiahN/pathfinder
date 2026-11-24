# Supporting derivation: structure, order, and analogues

**Mode: `specified` on the structure claim, `general` on the order claim.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The main audit leaves three things under-derived:

1. What kind of bond does "safe for a particular level of autonomy" use? If it is a comparison ⋛, the claim is a goal with two operands; if it is an invariant, it is a different object.
2. In what order do the evaluation conditions have to be satisfied? Which link does a chain actually break at?
3. What analogue from another domain makes the structure checkable by an outside frame that does not hold the framework's interiors?

## DOMAIN CENSUS

Atoms held: the six substrate terms (space, time, energy as states; spectrum, gradient, network as structures) and the evaluative vocabulary (residual R, slot s, anchor, ground, habitat, closure, import, channel). Bonds held: the seven plus negation. No new primitive is available without import. The question's "evidence" is already in Γ as test results and observations; what is not in Γ is a settled mapping from those to "safe at L". That mapping is the sought-for shape, currently a preference rather than a term (Fig 5 :62-64).

## DERIVATION

### Q1 : What bond does the safety claim use?

- Operators table :47-52: comparison ⋛, "a threshold relation between two quantities"; the test is "is it about which is larger, rather than both being present? Yes." And :52: "a goal is a comparison, which is why a vocabulary without it cannot state one."
- The phrase "particular level of autonomy" supplies the second operand: `realized risk(L)` and `acceptable risk(L)`. The claim is therefore `risk(L) ⋛ acceptable(L)`, a goal.
- Fig 5 :65-66: "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else." So `acceptable(L)` must be written down before the run, not inferred after the results arrive.
- Seat Map :192 makes this a seat office, not a frame discipline: "a frame that writes down what it expects will write down a flattering one, and the failure is invisible from inside by construction." The threshold is authored by a seat as a convention (Fig 10 :46: "A convention makes no claim about the world; a verdict and an atom both do"), then settled or refused by the ground.
- Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate." A safety case that cannot write ¬ can report that a claim stopped paying, not that it is wrong. Fig 6 :42-43: the reach falls because something was added, not deleted.
- **Conclusion Q1:** the bond is ⋛, and the claim is a goal, `specified`. The invariant alternative is a live strain (below).

### Q2 : In what order do the conditions have to be satisfied?

Fig 3 gives a five-link dependency chain: perception, vocabulary, objective, planning, learn and carry. Applied to safety at L:

| link | in this domain | failure if missing |
|---|---|---|
| 1 perception | can harm at L be detected at all? Fig 6 :34-35: "Where nothing is, there is no edge to extend from" | no residual arrives; a green metric is "you have lost touch" (Fig 10 :27-28) |
| 2 vocabulary | terms for the failure modes, subgroups and cascades at L | "having terms for what a situation affords was taken for a dictionary and it is a grammar" (Fig 12 :115) |
| 3 objective | `acceptable(L)` as an ordinary term | "A link with no instrument is not a link that works. It is a link nobody has looked at" (Fig 3 :27) |
| 4 planning | which evidence reaches the ground under L | effort above the break arrives where it cannot be used (Fig 3 :20-21) |
| 5 learn and carry | refresh the claim as habitat changes | "a managed ecosystem is permanent work rather than a solved state" (Fig 11 :63-64) |

Fig 3 :24-27 explains why the middle link is where chains usually break: perception and planning have obvious failures and tests, while having terms for what a situation offers and being able to say what would count as progress has neither, so it attracts the least attention and the fewest instruments. In AI safety practice this is visible in Lee, Zhu et al., who write that "many AI systems are evaluated against existing human or automated systems that were never formally certified", so risk arguments become marginal and "shift the reasoning mode toward induction and statistical inference." That is the uninstrumented middle link in the world literature's own words.

**Order verdict:** refuse and bind the objective (link 3) before scaling the evaluation (link 4). Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." `general`, triangulated (Fig 3 plus the world source).

### Q3 : Which analogues make this checkable from outside?

**Analogue A, the substituted habitat.** Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." This is the strongest analogue for an outside frame. It names a failure class without requiring the reader to accept the whole framework: a pass in a substituted environment is evidence about the substitution. Lee, Zhu et al. independently observe that "Unexpected behaviours, such as prompt injection or role-play exploitation, emerge only after deployment-like testing", which is the same failure class described from software assurance.

**Analogue B, cascade depth.** Fig 11 :52-53: "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." Safety evidence scoped to direct effects misses the third-order harm. This analogue is useful because it is a known, checkable historical case, not a metaphor invented for AI.

**Analogue C, source discrimination.** From *The Hard Problem is About Source*, opened this session: an instrument that reads green "cannot comment on the source", and "It was proven wrong not by argument, but by the arrival of a better instrument." A safety score reads "pass"; it cannot comment on whether the pass came from robustness or a spurious correlate. Oakden-Rayner et al. give the concrete case: pneumothorax ROC AUC was 0.94 on the subclass with chest drains but 0.77 on the clinically important subclass without them, while the aggregate was 0.87. The aggregate reading could not see the source.

**Analogue D, non-detection.** Fig 8 :39: "a search that finds nothing is never a proof of absence." Phuong et al. report "We do not find evidence of strong dangerous capabilities in the models we evaluated, but we flag early warning signs", and frame the work as helping to "advance a rigorous science of dangerous capability evaluation" rather than as certifying safety. That is the figure's rule followed in practice.

### Q4 : Are two evaluation pipelines isomers?

Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Two safety cases may share the same atoms (a benchmark suite, a red-team report, a monitoring dashboard, a threshold) yet differ in the bond between the evidence and the claim. If case A bonds evidence to the claim by `→` sequence (tests were run, then the label was issued) and case B bonds it by ⋛ comparison against a ground-ranged threshold, they are **isomers under Fig 12**: same ingredient list, different substance, and the formula of ingredients cannot tell them apart. This is exactly why a checklist of "sufficient evidence" is the wrong artifact: it records the atoms and omits the bond.

- **Falsifier, written before the run:** if two safety cases with identical evidence atoms but different bonds to the claim produce no difference in ground behavior at level L, the isomer claim fails and the two are the same substance under a flat formula (Fig 12 :6-17, "the ingredients are recorded and the arrangement is not").
- **Second falsifier:** if a threshold-free invariant claim settles at the ground and is composable, then ⋛ does not govern this quantity and Q1 must be re-censused. This is the live strain carried from `01_figure_grounded_audit.md` §6.

## CONCLUSION

The safety claim is a comparison bond ⋛ between realized risk and an acceptable-risk threshold at L, so it is a goal, not an invariant atom, `specified`. The evaluation conditions are ordered by dependency and the chain breaks at the objective link (Fig 3 :24-27), `general`. Four analogues make the structure checkable from outside without handing over the framework's interiors: substituted habitat, cascade depth, source discrimination, and non-detection. Two pipelines that share evidence atoms but differ in the bond to the claim are isomers; a checklist records only the atoms, so it cannot be the sufficient artifact. One strain remains live (comparison versus invariant), named rather than smoothed.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, and `THE_FORMULA.md`, all local and opened this session; the three essays listed in `05_what_shape_means.md` that were opened this session; the five world sources in `10_source_ledger.csv` that were fetched. No measurement was taken.

## FIGURE CENSUS

Fig 3 (dependency order, uninstrumented middle link), Fig 5 (bind the sought-for shape; settled is not sufficient), Fig 6 (no proto-instrument where nothing registers; reach falls when a refusal is added), Fig 8 (absence is not proof), Fig 10 (convention versus verdict), Fig 11 (substituted habitat, cascade, permanent work), Fig 12 (isomer, flat formula, middle-link grammar), Operators table (⋛ comparison, ¬ negation), Symbols table (R is always a slice). Strained after re-census: ⋛ versus invariant safety, named in Q1 and in the falsifiers.
