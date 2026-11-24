# Expert verification packet - control of a complex networked system without full internal understanding

**What this is:** a claim in a form a control or complex-systems researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` - not `grounded`.** No measurement at a particular system is claimed. This is a shape and a route, not a result. It is a simulated derivation checked for internal consistency against the figures.

## 1. The claim, in one paragraph

A controller does not need a complete internal model of a complex networked system in order to control it. What it needs is: a ground anchor that fixes the target variable and does not move when the model changes; a lever introduced into the habitat that changes the residual at some node; a channel that keeps the residual indexed per node rather than pooling it; and, when the lever is not derivable locally, an import from a frame whose closure differs. The metric is the per-node residual against the ground, not model coverage. Capability belongs to the controller-and-habitat, so enlarging the model without changing contact does nothing. Control is a maintained cycle, not a one-shot plan. Which lever works for a given network is declared `gap`, not a hidden answer. The verdict is yes, conditionally.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 1 and 2

- **Statement:** the metric of control is per-slot residual at the ground; frame-internal quantities such as coverage and compression cannot be the metric.
- **Source, verbatim:** Fig 1 :23 "The ground enters as the only metric." Also Fig 1 :19 "The residual is indexed by object slot, not aggregated." And Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- **Refuter:** show a case where per-slot residual is driven to zero while the ground outcome is unchanged, or where control succeeds only when model coverage crosses a threshold that is itself measured at the ground.

### C2 - framework-internal and physics/engineering-facing; checkable by a control researcher

- **Statement:** capability is controller-and-habitat; enlarging the controller's internal model without changing contact changes nothing. A missing lever must come from a differing closure by import, not from more internal search.
- **Source, verbatim:** Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." Also Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." And Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."
- **What to check:** is the world analogue faithful? Data-driven control of complex networks (Baggio, Bassett and Pasqualetti, Nature Communications 2021) constructs controls from input-output data without a model of the network dynamics, but requires rich independent experiments and accessible measurements. Structural controllability (Liu, Slotine and Barabasi, Nature 2011) derives driver nodes from topology. Do these count as imports of a lever from a differing closure rather than as pure internal composition? If yes, they corroborate the shape; if the lever is shown to arise from internal composition alone, C2 fails.
- **Refuter:** an agent-only improvement that moves the ground while contact is held fixed; or a new atom appearing from composition inside a closed library; or a controlled comparison where identical anchor, habitat, lever and channel but different model completeness give different ground outcomes.

### C3 - framework-internal derivation, checkable by reading Figures 10 and 12

- **Statement:** most losses of control are channel failures, and control is a cycle, not a chain. Keep the anchor reachable and the readings unpooled.
- **Source, verbatim:** Fig 10 :24 "the ground does not decay, the channel does" and :26 "stale percepts, dropped transients, saturated metrics, pooled readings". Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- **Refuter:** a case where control is lost while channel contact measures high and non-declining at every slot and the anchor is unmoved; or a one-shot open-loop action that sustains control under a disturbance that the closed-loop version cannot handle.

## 3. What is explicitly not claimed

- Not that control is always possible. The verdict is conditional on the four conditions; no anchor means no control, and unreachable-at-budget means the case is `unreachable`.
- Not that observability implies controllability, or that a driver-node set is a complete controller.
- Not that model-based control is useless. A model is a head start when it changes contact (Fig 4 :22); it is a budget filter, not a witness.
- Not a theory of everything, and no final control method. Fig 7 :13 "agreement compounds, evidence does not".
- Not `grounded`. Nothing here is asserted as settled by this agent's measurement.
- Not a name for the lever. Which lever works is `gap` (Fig 9 :32).

## 4. Provenance

- Question: `Questions/complexity science.txt` line 112, ID CMP-0091, section 10.
- Derivation: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, all written 2026-11-22.
- Figure text extracted verbatim from Isaiah's figures, local extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened 2026-11-22.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, opened 2026-11-22.
- World sources actually opened and listed with quotes in `10_source_ledger.csv`.
- This packet compiled 2026-11-22. Every claim above is mode-labelled.

## 5. What would settle it

A ground reading, not agreement.

1. **Anchor test:** change the controller's internal model deliberately and check whether the target reading moves. If it moves, the anchor does not exist as claimed.
2. **Lever test:** introduce a candidate lever, verify contact, and measure the per-node residual. No change at any slot refutes C2.
3. **Channel test:** look for pooled readings, saturated metrics and stale percepts (Fig 10 :26). A recovered signal here shows the loss was a channel failure.
4. **Import test:** find a differing frame whose closure predicts the residual's shape, and record source gate and shadow test. If none exists at this budget, record `unreachable` for that case.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :23, Fig 11 :40, Fig 8 :32 and Fig 10 :24, :26. Six short passages.
2. Check C2 against your own field: does the Baggio et al. result (https://www.nature.com/articles/s41467-021-21554-0) count as a lever imported from a differing closure, or as internal composition? One sentence either way.
3. Name one instrument that would show whether the target moves with the controller's model, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
