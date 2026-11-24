# Expert verification packet: the Tether on defining alignment under disagreement

**What this is:** a claim in a form an AI safety researcher, social-choice theorist, or moral psychologist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the split, `specified` on the per-domain verdicts, not `grounded`.** No measurement settles a contested value here. This packet is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

"Defined precisely" splits into two senses with different anchors. A precise alignment definition is possible and useful as a **convention**: a shared, violable meaning that makes the disagreement statable (Fig 10 :17 to :19). It is not available as a single ground-settled **verdict** over contested values by aggregation or negotiation: agreement about shared meaning is efficient for a convention but disqualifying for a verdict (Fig 2 :40 to :41), an anchor that updates produces coherent drift (Fig 2 :34), and disagreement is indexed per slot and destroyed by averaging (Fig 1 :19, :22). The values question and the acceptable-risk question form a union to be unbundled (Fig 9 :54). The framework returns a shape any candidate definition must have, not a name for the value set (Fig 9 :32). Which values a deployment should serve is reported as a gap, not filled.

## 2. Three checkable sub-claims

### C1: Framework-internal, checkable by reading Figure 2 and Figure 1

- **Statement:** the same agreement is disqualifying for a verdict and efficient for a convention; a precise convention is legitimate only while it remains violable. Disagreement must be kept per slot.
- **Source, verbatim:** Fig 2 :39 *"Correlation has valence."* Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* Fig 2 :41 *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"* Fig 2 :43 *"Guard, from Figure 10: a convention that decides an outcome has stopped being one."* Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*
- **Refuter:** exhibit a precise convention that decides an outcome and still satisfies the figure's convention test, or exhibit a global alignment score from which all per-slot disagreement is reconstructed losslessly on real data. One case fires either refuter.

### C2: Mathematics-facing, checkable by a social-choice theorist or a careful reader of Arrow

- **Statement:** no aggregation procedure satisfying the stated axioms yields a single social ordering of contested values, so aggregation cannot supply the verdict part of the definition. This bounds D2 only; it does not forbid decisions made under a convention or against a ground.
- **Source, verbatim from a world source (not a figure line):** Michael Morreau, *Arrow's Theorem*, Stanford Encyclopedia of Philosophy (2014, substantive revision 2025): *"possibilities for choosing rationally can be lost when individual preferences are aggregated into social preferences."* And: *"collective decisions cannot in general be made on the basis of a common preference, that assimilates the tastes and values of all the individual men and women who make up a society."*
- **What to check:** is the scope correct? Arrow concerns ranked (ordinal) aggregation under unrestricted domain, non-dictatorship, Pareto and independence of irrelevant alternatives. Cardinal or rated methods fall outside it, and the SEP entry records that. A correct objection here would be that real preference elicitation supplies cardinal information, in which case the limit is weaker than stated.
- **Refuter:** produce an aggregation procedure satisfying the axioms that is ground-confirmed on a contested real case, or show that the deployed system's preference inputs are cardinal in a way that removes the theorem's application to this deployment. Either weakens C2.

### C3: Deployment-facing, checkable by an AI safety researcher

- **Statement:** a precise local shape is available per deployment against a non-updating ground, with human judgment a legitimate anchor only where the question is constitutively about people. The value-content part remains a gap unless a ground or a provenanced import supplies it.
- **Source, verbatim:** Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :34 *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."* Fig 2 :37 *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* Fig 9 :32 *"you get a kind of thing, never the answer itself."*
- **World corroboration (secondary):** Casper et al. (2023) survey *"open problems and fundamental limitations of RLHF and related methods"*; Hadfield-Menell et al. (2016/2017) conclude that *"giving machines an appropriate level of uncertainty about their objectives leads to safer designs"*; Bai et al. (2022) note that *"The only human oversight is provided through a list of rules or principles."* All three are from a different field and corroborate the split, none decides it.
- **Refuter:** exhibit an anchor that updates on frame opinions and still settles a contested question, confirmed by a separate instrument; or show that a precise rule list is ground-settled merely by being published. Either fires C3.

## 3. What is explicitly not claimed

- Not that alignment is undefined. Two precise senses are available.
- Not that a convention is a verdict, or that a verdict is a convention with better wording. Under Fig 12 :117 they are isomers: *"Same atoms, different bond, different substance."*
- Not that human judgment is the right anchor for instrument questions such as acceptable failure rates.
- Not that Arrow's theorem forbids collective decisions, only that it bounds one aggregation frame.
- Not a specific utility function, value ordering, or risk tolerance.
- Not that this packet is a test of anything. It is a simulated derivation, not a ground reading.

## 4. Provenance

- Question: `reasoning.txt` line 116, section 10, evaluation, safety and social consequences.
- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim extraction from 13 SVGs plus Operators and Symbols tables, opened 2026-11-24. Cite as `Fig N :line`.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `60_FIGURES_AS_METALAWS.md` (2026-11-22).
- Rule and seat discipline: `FRAMEWORK/figures/THE_FORMULA.md` and `THE_SEAT_MAP_Field_Guide_amended.md`.
- World sources actually opened and recorded with quotes in `10_source_ledger.csv`, accessed 2026-11-24.
- Packet compiled 2026-11-24. No experiment, survey or measurement was run.

## 5. What would settle it

Not agreement. An instrument or a proof:

1. **Anchor test:** show a non-updating reference each frame can range against separately (Fig 2 :46).
2. **Per-slot test:** show from real data that averaging destroys a recoverable per-slot signal (Fig 1 :22).
3. **Union test:** apply one lever to both conditions and measure the residual in the intersection (Fig 9 :56).
4. **Value-content test:** a ground reading or a provenanced import that names which values a deployment should serve, with source gate and shadow test (Fig 6 :23).
5. The five refuters in `01_figure_grounded_audit.md` section 6, written before the conclusion.

## 6. What an expert can check in twenty minutes

1. Read Fig 2 :29 to :43 and Fig 1 :19 to :22. Four short passages decide C1.
2. Check C2 against your own knowledge of Arrow. Is the scope stated correctly, and does the cardinal escape apply to the system you know?
3. Check C3 against one deployment you know: name the anchor, say whether it updates, and say which questions are constitutively about people.
4. Try to fire one refuter. A failure is more useful to me than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
