# Expert verification packet — evaluating intelligence when benchmarks fail

**What this is:** a claim in a form a benchmark researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified`, not `grounded`.** No held-out result, contamination measurement or deployment outcome is claimed. This is a shape and a route, not a result.

**Status: simulated derivation checked for internal consistency against the figures, not a ground reading.** It cannot settle the claim it reports on.

## 1. The claim, in one paragraph

"Memorized, gamed and obsolete" is not one hard evaluation problem. It is a union of three overlapping conditions, so one lever does not clear their intersections. An evaluation anchor must not move when the system is optimized against it; a score that rises because items were in training or because the metric was optimized has moved when pushed, so it is a frame, not a ground. Residuals are indexed per capability, so a single scalar hides the live signal, and saturation is "you have lost touch" rather than a capability verdict. A benchmark solve is a substituted habitat, which proves wiring and not capability in the real habitat. What follows is a protocol shape, not a named benchmark: a private unreachable ground, per-slot residuals and their trend, independent instruments with recorded overlap, a verifier that cannot see the items before acting, a maintainer who refreshes or retires with provenance, and five falsifiers written in advance.

## 2. Three checkable sub-claims

### C1 — framework-internal and logical; checkable by reading Figures 1, 2 and 9

- **Statement:** the three failure modes are a union, and a metric that moves under optimization is not an anchor. One intervention cannot clear all three.
- **Source, verbatim:**
  - Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
  - Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
  - Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
  - Fig 2 :30: "If it moves when you push on it, it is not an anchor."
  - Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
- **What to check:** is there any single intervention that removes memorization, gaming and obsolescence simultaneously, including their intersections? If yes, the union claim is wrong.
- **Refuter:** exhibit one intervention that clears all three conditions with no residual left in the intersections; or exhibit a general metric that is demonstrably unhackable, so that raising it never lowers the true quantity.

### C2 — measurement-facing; checkable by an evaluation researcher against their own instruments

- **Statement:** a single aggregate score cannot carry the per-slot residual and its direction; saturation is a dead channel and not proof that capability is complete.
- **Source, verbatim:**
  - Fig 1 :19: "The residual is indexed by object slot, not aggregated."
  - Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
  - Fig 10 :24: "the ground does not decay, the channel does".
  - Fig 10 :25: "stale percepts, dropped transients, saturated metrics, pooled readings".
  - Fig 10 :27-28: "the output is not a verdict, it is you have lost touch".
  - Fig 8 :39: "So a search that finds nothing is never a proof of absence."
- **What to check:** for an evaluation you know, can the scalar be inverted to recover every per-capability residual and its trend? If yes, this sub-claim does not apply to that evaluation. Does a ceiling score mean the ground changed, or that the instrument lost resolution?
- **Refuter:** show that one scalar determines all per-slot residuals exactly for that evaluation; or show that the saturated score still separates capability above the ceiling with no dropped signal.

### C3 — verifier-facing; checkable against benchmark design practice

- **Statement:** the held-out set must be unreachable to the party being scored, and a benchmark solve is a substituted habitat whose solve proves wiring and not real capability.
- **Source, verbatim:**
  - Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."
  - Fig 10 :84: "Zero-knowledge proof systems, where the verifier's non-access to the witness is what makes the verification sound rather than a limitation it tolerates."
  - Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
  - Fig 11 :68: "what you failed to reproduce is invisible until the goal fails".
  - Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone"
- **What to check:** does the benchmark you use publish its generation code and item pool before scoring? If so, the model can optimize against it and the verifier condition fails. Does a high score transfer to the deployment goal with every required condition reproduced?
- **Refuter:** show that a verifier with full access to the item pool and selection rule is still sound against a party optimizing against it; or show a benchmark solve that transfers to capability in a fully reproduced habitat with no unenumerated actors.

## 3. What is explicitly not claimed

- Not that any named benchmark, lab, vendor or leaderboard is invalid, dishonest or gamed. No individual or organization is accused here.
- Not that a score is useless. It is an instrument. The claim is about what it can settle.
- Not that human judgment is always the ground. Fig 2 :36-38: "An anchor is legitimate when the question is constitutively about it." For a people-about question it is the anchor; for code correctness it is an instrument with axes it does not measure.
- Not that a better single benchmark would settle the question. Fig 9 :32: "you get a kind of thing, never the answer itself."
- Not that this derivation is validated. `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."
- Not `grounded`. Nothing here was settled by an instrument during this derivation.

## 4. Provenance

- Question: REA-0091, `Questions/reasoning.txt` line 112, section "10. Evaluation, safety, and social consequences".
- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim, read 2026-11-24. Every quote above is an exact substring of that file.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, local, read 2026-11-24.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`, local, read 2026-11-24.
- Eight essays by Isaiah N, opened 2026-11-24, listed in `05_what_shape_means.md`.
- World sources opened 2026-11-24: Skalse et al. (NeurIPS 2022), White et al. (ICLR 2025), Singh et al. (NeurIPS 2025), Liang et al. (TMLR 2023), Ribeiro et al. (ACL 2020), Phan et al. (2025/2026), Trahan et al. (2014). All are corroboration only; full details in `10_source_ledger.csv`.
- This packet compiled 2026-11-24. Pre-registered refuter in `01_figure_grounded_audit.md` §4, written before the conclusion and unchanged here.

## 5. What would settle it

A discriminating instrument, not a further argument:

1. **Memorization:** a canary-marked private set withheld from training that separates two systems tied on the public set.
2. **Gaming:** a reproduced habitat in which raising the reported score never lowers the real outcome, tested across the relevant policy set.
3. **Saturation:** a harder fresh item stream on which the residual keeps a direction after the public set is exhausted.
4. **Habitat:** a solve that transfers to the real goal with all required conditions reproduced and no unenumerated actors.
5. **Standing refuter:** any of the five in §6 of `07_the_tether_answer.md` firing.

## 6. What an expert can check in twenty minutes

1. Read Fig 9 :55-57, Fig 2 :29-30, Fig 1 :19 and :22, Fig 10 :24-28 and :42, Fig 11 :39 and :70. Nine short passages.
2. Check C2 against one evaluation you know: can the scalar recover per-capability residuals? Does a ceiling mean capability or a dead channel?
3. Check C3 against one benchmark you know: is the item pool public before scoring, and is the generation code released?
4. Name one instrument that would discriminate memorization from capability, or say why none is possible at this budget.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
