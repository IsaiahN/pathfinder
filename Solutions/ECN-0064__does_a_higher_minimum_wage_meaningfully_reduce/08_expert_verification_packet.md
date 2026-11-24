# Expert verification packet - the Tether on minimum wage and hiring

**What this is:** a claim in a form a labor economist can check. Mode, derivation and refuters are stated before the conclusion, so the reader knows what to look for and what would settle it.

**Mode: `general` on the shape, `specified` on the per-channel predictions, not `grounded`.** No employment effect is asserted as settled by measurement in this folder.

**Status:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

"Does a higher minimum wage meaningfully reduce hiring, or can firms absorb it through lower profits, prices, or turnover?" is a union of four overlapping channels over one incremental cost, not a choice between two outcomes. A firm can pass cost through prices, recoup it through retention, absorb it in margin, and still cut vacancies in the intersection where those responses are insufficient. So an answer must name the slot, the margin, the channel, and the external measurement that would settle it. An aggregate employment elasticity alone does not have that shape. Which channel dominates at a given bite is **not** claimed here; it is a `gap` owed to matched firm-level data.

## 2. Three checkable sub-claims

### C1 - framework-internal and literature-facing; checkable by reading Figure 9 and the cited literature

- **Statement:** the question is a union, not a partition, and the either/or framing is invalid.
- **Source, verbatim:** Fig 9 :55 - **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** Fig 9 :56 - **"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."**
- **What to check:** in your data or model, can two of the four channels fire for the same firm in the same period? The Low Pay Commission's 2026 report already states that *"Businesses adapt to minimum wage increases in a combination of ways"*, which is a firm-level union claim from an institutional source.
- **Refuter:** show that the four channels form a partition, that at most one can fire per firm per period, and that no intersection carries positive mass. Then the either/or framing is legitimate and C1 fails.

### C2 - measurement-facing; checkable against any payroll or price dataset

- **Statement:** the effect is per slot; an average throws away the signal that matters for a decision.
- **Source, verbatim:** Fig 1 :19 - **"The residual is indexed by object slot, not aggregated."** Fig 1 :22 - **"Aggregating across slots is how a live signal disappears into an average."**
- **What to check:** does the estimated effect change sign or magnitude when you split by worker group, firm type or region? Two published results already point that way from opposite directions: Neumark and Wascher (2006) report *"stronger disemployment effects for these groups"* for the least skilled, and the Low Pay Commission (2026) reports that youth employment *"fell more in areas with the lowest youth coverage."* Neither settles the sign; both support slot-dependence.
- **Refuter:** exhibit a dataset in which the per-slot residuals are statistically indistinguishable across all firm types, worker groups, regions and margins, so indexing by slot adds nothing.

### C3 - framework-internal structural analogy

- **Statement:** the four channels are isomers over one cost atom; "cost absorption" is a functional group whose qualifier names the member. The figures do not select the member.
- **Source, verbatim:** Fig 12 :117 - **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Fig 12 :124 - **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
- **Scope condition:** the price channel introduces a buyer as an operand of its bond. Re-census: the shared atom is the cost, not the cast of actors. This is recorded as a scope condition in `06_isomers_and_order.md` Q1.
- **Refuter:** show that two channels compose over different atoms, for example that the retention channel introduces a primitive absent from the price channel, so the isomer reading is a false analogy. The functional-group reading may still stand; the isomer reading falls.

## 3. What is explicitly not claimed

- No verdict on the sign or size of the employment effect.
- That any particular channel (price, margin, retention, hiring) is the figure's answer.
- That the competitive model or the monopsony model is the right frame.
- That the literature's disagreement is purely methodological.
- That any cited study, reviewer or journal is a witness by virtue of prestige. Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**
- `grounded`. Nothing here is asserted as settled by experiment.

## 4. Provenance

- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim extract, opened 2026-11-23. Every `Fig N :line` citation in this packet is from that file.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, read 2026-11-23.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, read 2026-11-23.
- Essays read 2026-11-23: *The Library of Babel*, *The Hard Problem is About Source*, *The Recursive Self-Improvement Trap* (all Isaiah N, adventuresinml Substack). Five other essays named in the exemplar were not re-read this session and are not quoted here.
- World sources read 2026-11-23: Card and Krueger NBER WP 4509; Neumark and Wascher NBER WP 12663; Neumark and Shirley NBER WP 28388; Low Pay Commission organisation page, 2026 uprating report, consultation 2026, regional visits 2026. Full provenance in `10_source_ledger.csv`.
- Failed fetches (CBO, QJE/OUP, ILO, EPI, several journal submission pages) are recorded in `04_links_and_distribution.md` and are not cited here.
- Packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: an instrument that reads the output *"cannot comment on the source"*; *"The answer is unreached until a better instrument exists."*

1. Matched firm records that separately report price, margin, separation and vacancy responses to the same wage change. That would name the channel per firm.
2. A declared threshold for "meaningful" in units and horizon, so the objective link has an instrument (Fig 3 :27).
3. An anchor test: does the employment figure move when only the modelling assumption changes? If yes, it is not an anchor.
4. The five standing refuters in `01_figure_grounded_audit.md` section 3.

## 6. What an expert can check in twenty minutes

1. Read Fig 9 :55-56 and Fig 1 :19, :22, and Fig 12 :117, :124. Five short passages.
2. Check C1 against your own knowledge: do firms in your data use more than one channel at a time? One counter-example with two simultaneous channels supports C1; a demonstrated partition refutes it.
3. Check C2: split an employment effect by worker group or region. Does the residual stay put?
4. Name one dataset that would discriminate price from retention as the source of an employment reading, or say why none exists.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** simulated derivation, internally consistent with the figures, not a ground reading. It cannot settle the claim it reports on.
