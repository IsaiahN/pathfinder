# Expert verification packet - the Tether on interactive versus pre-collected learning

**What this is:** a claim in a form a learning researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the sub-claims, `general` on the structural shape, not `grounded`.** No measurement is claimed. This is a shape and a route, not a result. It is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

The question "can a system learn from interaction as efficiently as from pre-collected data" is a union compound, not one well-formed comparison. A stored corpus prices description bits; interaction prices actions and their risk. The two prices are in different units and do not add, so a single ratio is a type error until a currency, a slot and a habitat are declared. The loop is the same kernel in both regimes; capability is a property of agent and habitat, so a stored corpus is a substituted habitat that proves wiring and not by itself live capability. The ground does not decay, the channel does. What the framework returns is a shape: a per-slot residual reduction in a declared currency against a non-updating ground, with a recorded refuter. The single efficiency number is a `gap`, reported as a verdict rather than an invented value.

## 2. Three checkable sub-claims

### C1 - Framework-internal; checkable by reading Figure 12 and the Operators table

- **Statement:** a single efficiency ratio across the two regimes is not well typed. The two regimes price different currencies, and the comparison operator requires quantities in one unit.
- **Source, verbatim:** Fig 12 :125-126 - "A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds." Also Fig 12 :126-127 - "They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall." And Fig 12 :130 - "Summing them into one figure is the error this names, not the fix for it." The Operators table defines the comparison glyph as "a threshold relation between two quantities".
- **Refuter:** declare one currency in which both regimes price the same units at the same slot and habitat, and show one dominates at every slot; or show the two prices are additive; or show the comparison operator accepts operands in different units.

### C2 - Agent-and-habitat; checkable by a learning researcher against their own benchmarks

- **Statement:** the loop kernel is invariant, but capability is not a property of the agent alone. A pre-collected dataset is a substituted habitat; success inside it is wiring, not a demonstrated capability in the live habitat.
- **Source, verbatim:** Fig 4 :19-20 - "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change." Fig 11 :39-40 - "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :70 - "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
- **What to check:** does a policy trained only on a fixed corpus transfer to live states outside the corpus without an additional interaction budget? The offline RL literature predicts failure at exactly this point through distributional shift. Is there a case where the corpus distribution *is* the ground, so the substituted habitat is legitimate?
- **Refuter:** show an agent-only change with contact held fixed that moves the ground and changes capability; or show that a fixed corpus changes contact with a non-updating ground as much as live interaction for the question at hand. Fig 11 :71-72 already names the first as the standing falsifier of the capability claim.

### C3 - The channel and the reporting rule; checkable against a benchmark design

- **Statement:** the corpus is a channel that can go stale, while the ground does not decay; and a global efficiency average destroys the per-slot signal. Sample counts are budget filters, not verdict witnesses.
- **Source, verbatim:** Fig 10 :24 - "the ground does not decay, the channel does". Fig 1 :19 - "The residual is indexed by object slot, not aggregated." Fig 9 :60 - "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- **What to check:** can the benchmark report a per-slot residual rather than one aggregate score? Does the evaluation query states outside the collection distribution? If neither, the benchmark cannot discriminate the two regimes and cannot settle the question.
- **Refuter:** show that the residual is genuinely global for this task, so no slot-wise decomposition exists; or show a corpus channel that cannot go stale for the question asked; or exhibit a case in which cost is itself the anchor, so the filter legitimately becomes a witness.

## 3. What is explicitly not claimed

- Not that interaction always wins, and not that pre-collected data is useless.
- Not that sample count is a single neutral currency.
- Not that the two regimes are isomers. Live versus stored is a substituted habitat (Fig 11 :66), and provenance is not one of the seven bonds (Fig 8 :50-52). The weaker functional-group reading is the one offered.
- Not that benchmark agreement corroborates anything. Agreement among frames sharing an evidence pool is the pool talking (Fig 2 :40).
- Not `grounded`. Nothing here is asserted as settled by experiment.
- Not a ground reading. The packet is a simulated derivation checked for internal consistency against the figures.

## 4. Provenance

- Figure text extracted verbatim from Isaiah's 13 SVGs plus the Operators and Symbols tables: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read and quote-checked 2026-11-24.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- The formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. Seat rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` (lines 163, 281, 287).
- Eight essays by Isaiah N, 2026, listed in `05_what_shape_means.md`; five re-fetched and phrase-checked this session, three carried from the exemplar's verified ledger and declared as such.
- World sources: Levine et al. 2020; Kumar et al. 2020; Ren et al. 2020; Janner et al. 2019; Lake et al. 2015; Friston 2010; Kingsbury et al. 2026; Yadid et al. 2026. All opened 2026-11-24 and recorded in `10_source_ledger.csv`. Overlap declared there.
- This packet compiled 2026-11-24.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: a reading cannot comment on its source, and the spectrometer resolved the case where several sources gave the same green reading. Here:

1. **Currency Test:** price both regimes in one declared unit at the same slot and habitat. Does one dominate at every slot?
2. **Contact Test:** hold contact fixed, vary only the habitat, and see whether capability moves.
3. **Distributional Shift Test:** query states outside the corpus and see whether the corpus-trained reading still tracks the ground.
4. **Channel Test:** age the stored percepts and find the point where the output becomes lost touch rather than a verdict.
5. **Standing falsifiers:** the five written before the conclusion in `01_figure_grounded_audit.md` §4.

## 6. What an expert can check in twenty minutes

1. Read Fig 12 :125-130 and Fig 11 :39-40, :66, :70 and the Operators entry for the comparison glyph. Eight short passages.
2. Check C1: name the unit in which a paper reports "sample efficiency" and say whether it prices bits, actions, or both collapsed into one number.
3. Check C2 against one offline RL result you know: does it report a transfer gap outside the data distribution?
4. Check C3: does the evaluation report per-slot residuals, and does it age the channel?
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
