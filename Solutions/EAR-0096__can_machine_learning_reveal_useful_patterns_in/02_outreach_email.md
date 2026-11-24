# Outreach draft: check the guard before you decide whether the pattern is worth reading

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the residual and the refuter in `08_expert_verification_packet.md` survive the reader's own check. The offer collapses on contact if the stage-1 output does not hold.

---

**Subject:** One guard for ML patterns in Earth-system data. What would you count as a failure?

> Hi [name],
>
> I have one specific claim I would like you to check against what you already know. I am not asking you to read the framework first, and I am not asking you to agree with it. If the claim does not survive, there is nothing else to look at.
>
> **The claim (`specified`, not `grounded`):** machine learning can narrow a candidate set of regularities in Earth-system data. That is a shape, not a causal name. It becomes useful only when ranged against an independent ground. The guards that keep a correlation out of the verdict seat are:
>
> 1. Two models trained on the same reanalysis are one witness, not two. Agreement that shares an evidence pool is disqualified for a verdict. Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool."
> 2. The residual must be read per slot (region, variable, season), not only as a global score. Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
> 3. Training accuracy, compression, and feature counts are frame-internal and cannot score the frame. The ground is the only metric.
> 4. Describe the residual and the predicted signature before model search, or any model will seem to fit. Fix thresholds before the run.
> 5. Enumerate the habitat for confounders. The correlation that matters is often three steps out.
>
> **What I am not claiming:** that any named pattern from a named dataset is established here; that a model output is a causal mechanism; that an ensemble of correlated models corroborates itself; that a synthetic test proves real-world capability. I make no claim about a specific model or dataset, because no ground reading is reported in this packet.
>
> **What would refute the claim:**
> 1. Two models with genuinely disjoint evidence agree against a third held-out ground, and the agreement still adds nothing.
> 2. A global metric is shown to preserve every per-slot live residual such that no slot is averaged away.
> 3. A scoring quantity is shown to be producible only by the ground and not by the frame it scores.
> 4. A pattern is admitted as useful whose description length plus residual exceeds its baseline.
> 5. A source-discriminating instrument names the mechanism at the ground with recorded provenance.
>
> I wrote these down before sending this. If any holds, I retract the corresponding guard. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures, not my summary, are the authority.
> - Verbatim figure text with line numbers (local extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Canonical figures README: https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md
> - Reichstein et al. 2019, Nature: https://www.nature.com/articles/s41586-019-0912-1
> - Runge et al. 2023, Nature Reviews Earth and Environment: https://www.nature.com/articles/s43017-023-00431-y
> - Domingos 2012, Communications of the ACM: https://cacm.acm.org/research/a-few-useful-things-to-know-about-machine-learning
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it. A reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Claim and refuter first, theory second | Fig 10 :52, *"Bring a characterised residual, never the source."* The reader checks the claim without holding the framework's interior. |
| Do not ask for agreement | Fig 2 :35, *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | The seat rule: a falsifier written before the run is a design instrument. |
| Mode stated on the claim | `THE_FORMULA.md`, *"Mode. general · specified · grounded. State which."* |
| No claim about a named model or dataset | The ground settles a pattern; no reading is reported here. This is a simulated derivation. |
| Per-slot residual | Fig 1 :19, *"The residual is indexed by object slot, not aggregated."* |
| Shared evidence pool disqualifies | Fig 2 :40; Fig 7 :13, *"agreement compounds, evidence does not."* |
| Describe before looking | Fig 9 :27-28, *"describe it before you go looking, or any frame you pick will seem to fit."* |
| Habitat and confounders | Fig 11 :52-54, the DDT and eagles cascade. |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: prestige can fund an action but "cannot settle an action. Only the ground can settle it." |
| Offer the formula as a method | Fig 4 :22, *"Only methods cross up. Only head starts come down."* |
