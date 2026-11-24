# The Tether's answer on when new evidence should change a learned belief

**Mode: `specified`, not `grounded`.** The answer is a decision shape and a route, not a measured threshold. Simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

A system holds a learned belief `b`, formed from its history and inherited prior mixed by `w` (Symbols table :19-25). New evidence `o'` arrives, and `Γ(b,a)` misses. The decision residual is not the size of the miss but the route the miss should take: transferred, novel, broken-rebinding, broken-mechanism, or refuted. Only the last is a belief change. The question is what licenses it and which belief it targets. Per Fig 9 :54-58, this is a union compound with its own loop, not one scalar problem.

## 2. The shape

1. **Measure per slot, not in aggregate.** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." A global residual near zero with one live slot is a legal state (Fig 1 :13). Support requires `|R⁺_s| > 0` for some slot (Fig 5 :21).
2. **Route before minting.** There are five bins. The first four sort the gap by what is missing; the fifth sorts it by what is wrong, "a term we hold is wrong; a term is owed that says so" (Fig 5 :53). none of the other four routes reaches it (Formula step 2). Effort above the break cannot rescue a link below it (Fig 3 :19).
3. **Pick the target by the persistent-and-flat residual.** Among all terms currently bound and predicting, the one to refuse is the one whose residual "PERSISTS AND DOES NOT TREND DOWN" (Fig 5 :58-60), the selector's shrinking test read with the opposite sign. A belief does not change because it once failed; it changes when it keeps failing while the others improve.
4. **Add a refusal; never delete the belief.** Fig 6 :43 "A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted." The reach fall is computed by derivation, not stipulated (Fig 6 :44). The operator is negation, unary, not one of the seven bonds (Fig 12 :134-140; Operators :58). A vocabulary without it "can only accumulate".
5. **Price the refusal.** Fig 5 :42 "The acceptance test is a bargain, not a threshold." Accept iff the refusal's description cost plus its leftover residual is less than the confusion of keeping the belief (Fig 5 :43, Formula step 3). Persistence is necessary but not sufficient.
6. **Hold the anchor fixed.** Fig 2 :33 "The anchor must not update." Fig 2 :34: if it does, the anchor becomes another frame and "everything drifts together, and the drift is coherent, which is why nobody notices." The ground settles; frames range against it (Fig 2 :45).
7. **Bind the direction before the run.** Fig 5 :61-66: the most worth-refusing term may be an unbound preference, invisible to every mechanism check. The remedy is a discipline, make the sought-for shape an ordinary term and let it accrue a residual like anything else. The pre-registered refuter is that discipline already working.
8. **Stop at the open case.** Fig 6 :47: when a term and its refusal are both settled, the record holds a contradiction, and whether that is two scopes, a ground error or a changed world "is not yet decidable here". Report `gap`; do not manufacture a closure.

## 3. What it explicitly does not say

- Not a numeric threshold. The framework returns a shape; the setting requires an instrument and a ground.
- Not a rewrite of Bayesian, AGM or continual-learning theory. Those are world frames whose closure differs; they corroborate parts of the shape and are provenanced as such in `10_source_ledger.csv`.
- Not "change the belief whenever the error is large". Large one-off error is the NOVEL or BROKEN bin, not REFUTED.
- Not "delete the false belief and move on". Deletion loses the never-held distinction (Fig 6 :46).
- Not "let the data decide what counts as evidence". If the anchor moves with the frames, that is the mutual-update collapse.
- Not `grounded`. No measurement in this derivation settles any real belief change.
- Not a final theory of learning. Fig 7 :6: "the limit: no last room."

## 4. What would settle it: the ground

A documented, checkable case, not agreement. The relevant instruments are:

- A per-slot residual trace showing a term's residual flat while other bound terms trend down, followed by a correct refusal. This would pay for F2.
- A record showing the added refusal and the derived fall of reach, with the old belief still present in the library and no longer composable over. This would pay for F3.
- A case where the measurement remained fixed while frames changed. This would pay for F5.
- A case where a term and its refusal are both settled and the framework is forced to choose among two scopes, an error in the ground, or a changed world. This would close the open item in F8, which the figures currently leave undecided.

Standing falsifiers: the five listed in `01_figure_grounded_audit.md` §3. If any fires, the corresponding claim is withdrawn.

## 5. The honest stop

The rule is governed but not settled. Its truth status is `specified`, ungrounded, candidate. Where it is triangulated (F1, F2, F3) it rests on two or more figures with low overlap; where it is single-source (F5's anchor rule, F6's direction limit) that is marked. The one genuine `gap` is F8, reported plainly. Fig 8 :39: "So a search that finds nothing is never a proof of absence." That is a verdict about what this run can and cannot report, not an invitation to keep searching until a closure appears.

## 6. One-paragraph version for outreach

> A system should not change a learned belief just because it failed once or because the global error rose. It should measure the miss per object slot, sort it into five bins, and act only on the fifth: the gap whose content is that a held term is wrong. Among all terms currently bound and predicting, it should point the refusal at the one whose residual persists and does not trend down, read with the opposite sign from the test that asks which residual is improving. It should then add a refusal rather than delete the belief, so the reach falls by derivation and the system can still tell never-held from held-and-withdrawn; it should accept that refusal only if stating it plus what remains unexplained costs less than the confusion of keeping the belief; it should hold the ground fixed while frames change; and it should write down the answer shape before the run so that shape can be refused too. The framework returns that decision structure, not a numeric threshold, and it leaves open the case where a belief and its refusal are both settled. This is a `specified` shape with pre-registered refuters, not a measured result.
