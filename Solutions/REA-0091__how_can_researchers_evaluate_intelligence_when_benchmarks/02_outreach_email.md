# Outreach draft — check the evaluation claim before you decide about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send. Field: benchmark evaluation research.

**Hard precondition:** do not send until the pre-registered refuter in `01_figure_grounded_audit.md` §4 is written into the final packet unchanged. The claim must survive validation or the two-stage offer collapses on contact.

---

**Subject:** Check one claim about benchmark evaluation before you decide whether the framework is worth reading

> Hi [name],
>
> I have one specific claim I would like you to check against what you already know about evaluation. I am not asking you to read the framework first, and I am not asking you to agree with it. If the claim does not survive, there is nothing else to look at.
>
> **The claim (`specified`, not `grounded`):** "benchmark can be memorized, gamed, or made obsolete" is not one hard problem. It is a union of three overlapping conditions, and one lever does not clear their intersections. From the figure set: an anchor is "whatever settles the question and does not change its answer because of what any frame thinks", and "if it moves when you push on it, it is not an anchor." A score that rises because the items were in training, or because the metric was optimized, has moved when pushed. So it cannot be a ground. And "the residual is indexed by object slot, not aggregated", so a single scalar hides which capability is actually live. Saturation is separately "the ground does not decay, the channel does": a benchmark at ceiling is a lost channel, not a capability verdict.
>
> What follows is a protocol, not a better single benchmark: describe capability in effect terms per slot before choosing any instrument; keep a private, canary-marked held-out set that the model cannot see before acting; report per-slot residuals and their trend rather than one number; use several low-overlap instruments; refresh or retire on a schedule; and keep provenance for every score so convergence and copied results can be told apart. A benchmark solve is a substituted habitat, so it proves wiring, not capability in the real habitat. The framework does not name which benchmark to use. It returns a shape.
>
> **What I am not claiming:** that any existing benchmark is invalid, that any leaderboard number is false, that a particular vendor gamed a test, or that this protocol has been validated. I am not claiming human judgment is always the right anchor: it is right when the question is constitutively about people, and an instrument with axes it does not measure otherwise. No score here is `grounded`.
>
> **What would refute the claim, written down before this message:**
> 1. A single scalar score is shown to determine every per-slot residual exactly, so no live signal is hidden by averaging.
> 2. A general metric is demonstrated to be an anchor that does not move under optimization pressure.
> 3. A benchmark solve transfers to capability in a reproduced habitat with every goal-required condition present and no unenumerated actors.
> 4. A fresh private held-out instrument fails to discriminate between two systems that genuinely differ in capability, for reasons other than budget.
> 5. A verifier with full access to the item pool and selection rule is still sound against a party that can optimize against it.
>
> If any one holds, I will retract or narrow the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Figure text with line numbers (local): `FRAMEWORK/reference/03-FIGURES_TEXT.md`. See Fig 1 :19-27, Fig 2 :29-44, Fig 8 :39-52, Fig 9 :44-60, Fig 10 :24-52, Fig 11 :39-70.
> - LiveBench: https://arxiv.org/abs/2406.19314
> - Defining and Characterizing Reward Hacking: https://arxiv.org/abs/2209.13085
> - The Leaderboard Illusion: https://arxiv.org/abs/2504.20879
>
> **If you want to use the machinery:** the formula is at `FRAMEWORK/figures/THE_FORMULA.md`. Run it on an evaluation problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. The framework's own article warns that simulated outputs "could never be verified if the solutions presented were not contrived to fit the formula." A reported failure is more useful to me than a reported success.
>
> — [your name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Claim first, theory second | Fig 10 :52, "Bring a characterised residual, never the source." Fig 2 :45, "Frames range against the ground. They do not negotiate with it." |
| Do not ask for agreement | Fig 2 :35, "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter | Formula / seat discipline: a falsifier written before the run is a design instrument, not only an honesty device. |
| Mode on every claim | `THE_FORMULA.md`, "Mode. general · specified · grounded. State which." |
| No named benchmark | Fig 9 :32, "you get a kind of thing, never the answer itself." The figures return a shape, not a name. |
| Links only after the verdict | Fig 10 :42, "A verifier that can reconstruct the claim cannot verify it." |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Union before lever | Fig 9 :55, "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." |
| Per-slot residuals, not a scalar | Fig 1 :22, "Aggregating across slots is how a live signal disappears into an average." |
| Private held-out set | Fig 10 :84, zero-knowledge: the verifier's non-access is what makes verification sound. |
| Offer the formula as a method | Fig 4 :22, "Only methods cross up. Only head starts come down." |
| Ask users to write their own refuter | Formula "Direction": a frame cannot check the direction of its own question. |
