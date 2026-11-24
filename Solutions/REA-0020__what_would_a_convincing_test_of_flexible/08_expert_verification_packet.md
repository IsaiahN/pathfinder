# Expert verification packet - the Tether on tests of flexible OOD learning

**What this is:** a claim in a form a machine-learning researcher or benchmark designer can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` - not `grounded`.** No deployment measurement is claimed. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

A convincing test of flexible out-of-distribution learning has seven properties: its conditions are enumerated from the deployment habitat before a benchmark is chosen; its anchor is a real outcome that does not move when pushed; it requires contact with a closure differing from training; it reports residual per environment, not as one average; its pool is unauthored and its anchors are independent; it reports failure as a verdict that separates depth from genuine absence; and it measures the round-trip gap between training instrument and deployment ground. Passing a synthetic corruption suite proves wiring, not capability, because a test harness is a substituted habitat. The framework does not name which benchmark or metric satisfies these conditions; it returns a shape, with refuters written in advance.

## 2. Three checkable sub-claims

### C1 - a synthetic test is a substituted habitat (framework-internal plus world-facing)

- **Statement:** a pass on a synthetic corruption suite does not license a claim about real-world OOD capability. What the suite failed to reproduce is invisible until the goal fails on a real shift.
- **Source, verbatim:** Fig 11 :70 - "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Also Fig 11 :68 - "what you failed to reproduce is invisible until the goal fails" and Fig 11 :69 - "what you unintentionally introduced is invisible until it acts".
- **World check:** Taori et al. 2020, arXiv:2007.00644, report *"there is often little to no transfer of robustness from current synthetic to natural distribution shift."* Geirhos et al. 2020, Nature Machine Intelligence, define shortcuts as rules that *"perform well on standard benchmarks but fail to transfer to more challenging testing conditions."* These are independent of the framework.
- **Refuter:** a synthetic suite whose scores prospectively predict deployment residual across independently sampled real shifts, with no shared generator or shared condition. If one exists, C1 is false.

### C2 - the residual must be per environment, and the anchor must not move

- **Statement:** a single averaged OOD score throws away the only signal that says which environment lost contact. The deployment outcome, not the leaderboard, is the anchor that settles the question.
- **Source, verbatim:** Fig 1 :19 - "The residual is indexed by object slot, not aggregated." Fig 1 :22 - "Aggregating across slots is how a live signal disappears into an average." Fig 2 :29 - "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30 - "If it moves when you push on it, it is not an anchor."
- **World check:** Taori et al. evaluate 204 models across 213 test conditions and find transfer uneven; Recht et al. 2019 find 11 to 14 point drops on freshly collected ImageNet test sets. A single mean would hide both results.
- **Refuter:** an averaged statistic that predicts, prospectively and per named environment, which slot will fail next; or a test score that does not move when the deployment condition is deliberately changed. Either breaks C2.

### C3 - a meaningful pass needs contact with a differing closure, and failure is a verdict

- **Statement:** search inside a fixed training closure cannot add the primitive a new environment requires. A low score must be reported as a verdict, with depth (unfound but reachable) separated from genuine absence (not in the closure).
- **Source, verbatim:** Fig 6 :21 - "MINT composes inside the closure and can never add an atom." Fig 6 :23 - "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 :32 - "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 8 :39 - "So a search that finds nothing is never a proof of absence." Fig 13 :134 - "Unreachable is a verdict here, not a silence".
- **World check:** Arjovsky et al. 2019 (arXiv:1907.02893) say IRM relates invariances learned across multiple training distributions to *"out-of-distribution generalization"*; that is a theory-level corroboration of contact with differing closures, not a ground result. WILDS (Koh et al. 2020) shows the OOD gap persists under existing methods, which is what C3 predicts when contact is not truly renewed.
- **Refuter:** a method that expands OOD reach solely by search inside a fixed closure, with no new atom and no contact with a differing frame, and that still passes a fresh real-shift ground test; or a single score that tells an engineer whether to search longer or import without any further instrument.

## 3. What is explicitly not claimed

- Not a new benchmark, metric, leaderboard or architecture.
- Not that existing benchmarks are worthless. They are instruments, and instruments can be improved from worse instruments (Fig 6 :32); they are not the ground.
- Not that this criterion is `grounded`. No deployment measurement in this packet pays for it.
- Not that the framework can name the shift that will break a given system. Fig 9 :32: *"you get a kind of thing, never the answer itself."*
- Not that the world papers listed here agree with the figures because they were selected to. They were found by looking for evidence bearing on the residual, and the ones that conflict would have been recorded as conflicts.

## 4. Provenance

- Question: REA-0020, `Questions/reasoning.txt` line 25, section 2 Learning and generalization.
- Figure text: extracted verbatim from Isaiah's 13 SVGs plus the Operators and Symbols tables, local file `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped 2026-11-23.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, opened 2026-11-23.
- The eight essays by Isaiah N, 2026; three opened this session and recorded in `05_what_shape_means.md` and `10_source_ledger.csv`.
- Benchmark papers read this session: Recht et al. 2019, Taori et al. 2020, Geirhos et al. 2020, Koh et al. 2020/2021, Arjovsky et al. 2019/2020, Hendrycks and Dietterich 2019. Every URL was opened; see the ledger.
- This packet compiled 2026-11-23.

## 5. What would settle it

A prospective test: environments enumerated from the deployment habitat before a method is chosen; an anchor that does not move; a method comparison that separates import from in-closure search; a per-environment residual report; and a depth/absence discrimination measured, not assumed. A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: a reading *"cannot comment on the source"*; the spectrometer, not a debate, resolved the case.

## 6. What an expert can check in twenty minutes

1. Read Fig 11 :68-70, Fig 1 :19 and :22, Fig 2 :29-30, and Fig 6 :21 and :23. Seven short passages.
2. Check C1 against one real benchmark you know: are its shifts imposed perturbations or naturally occurring covariances? Do its scores predict a deployment outcome you have actually seen?
3. Check C2 against your own results: does your reported mean hide a bad environment? Name one slot it hides.
4. Check C3: can you point to a new atom that entered your method from a differing closure, or was the gain all in-closure search?
5. Name one instrument that would discriminate depth from absence in your setting, or say why none is possible.
6. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
