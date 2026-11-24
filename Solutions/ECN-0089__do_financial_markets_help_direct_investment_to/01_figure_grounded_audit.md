# Figure-grounded audit: do financial markets direct investment well?

**Mode of this document: `general` on the structural findings, `specified` on the anchor and instrument findings, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The framework's validation essay says LLM output can be "simulacra" and that "the truly testable output would need to be derived from the real architecture or working the formula yourself". This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. No measurement was taken.

**Sources.** Figure text quoted only from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop and mode from `FRAMEWORK/figures/THE_FORMULA.md`. World sources opened this session are listed in `10_source_ledger.csv`.

---

## 0. The residual stated in effect terms

There is an observed divergence between where capital actually flows and where it would flow under full knowledge of long-run productive use. Two candidate mechanisms are offered for that divergence.

- **A, the signal mechanism:** dispersed knowledge is compressed into prices, and capital follows the signal to its highest-valued use.
- **B, the distortion mechanism:** speculation and short-horizon incentives pull capital away from long-run productive use.

**R** is the gap, per investment slot `s`, between the allocation a mechanism produces and the allocation a non-market ground would rank as most productive. Arity: two candidate conditions, not mutually exclusive. Symmetry: asymmetric, because price discovery and speculation are different operators with different horizons and different inputs. Scale: micro (a firm's capital budget) through macro (sectoral capital flows). R is always a slice; what cannot be measured yet is residual and simply cannot be read.

**Binding the sought-for shape as an ordinary term.** What an answer would look like: a verdict per slot against a named anchor that is not the market's own price, with each actor's valence declared relative to the residual chosen. The formula's "Direction" paragraph warns that a frame cannot check the direction of its own question because the sought-for shape is held as a preference, not a term. Writing the shape down here is the discipline that makes it refusable.

---

## 1. Domain census (before choosing any figure line)

Describe R by arity, symmetry, scale. Then one line per domain: actors / currency / anchor. No nameable anchor means it is not a domain yet.

- **Domain 1, price discovery and allocation.** Actors: dispersed investors, arbitrageurs, issuing firms, prices. Currency: capital allocated, risk-adjusted return, information compressed into a quote. Anchor: realized long-run productive outcome measured outside the price system (physical capacity, real output, measured productivity). Nameable, so this is a domain.
- **Domain 2, speculation and short-horizon incentives.** Actors: speculators, fund managers, corporate managers under quarterly pressure, lenders. Currency: near-term price changes, conventional valuation, career and reputation. Anchor: the same long-run productive outcome, plus a second directly observable anchor, the mismatch between the decision horizon and the payoff horizon. Nameable, so this is a domain.
- **Domain 3, verification and measurement.** Actors: researchers, data providers, regulators, peer reviewers. Currency: published evidence, replications, revisions. Anchor: out-of-sample real outcomes, never agreement. Nameable, so this is a domain.
- **Candidate Domain 4, market sentiment as such.** Actors: noise traders, beliefs about beliefs. Currency: expected conventional valuation. Anchor: inside the frame there is none, because the only reference is the next conventional valuation, which is frame-internal. Outside the frame the anchor is again the real outcome of Domain 1. Not a domain yet on its own. It folds into Domain 2 as a compound and is not given separate verdict weight.

**Partition or union.** Union, not partition. The two mechanisms are conditions that can both hold, in different slots and at different horizons. Fig 9 :4-5 says disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Fig 9 :54-58 says a bundled problem is usually a union of overlapping conditions, and when the split lands on a union rather than a partition, unbundle before you search again. Fig 1 :19 says *"The residual is indexed by object slot, not aggregated."* So the "or" in the question is not exclusive. Verdicts stay per slot and are never averaged.

**Order by dependency (Fig 3).** (1) Perception: can we read the allocation and the productive outcome per slot? (2) Vocabulary: do we have terms for capital flow, horizon, mispricing, productive use? (3) Objective: what counts as progress here, in our own terms? (4) Planning: a design that isolates the two mechanisms. (5) Learn and carry. The chain plausibly breaks at link 3, because "most productive uses" is usually operationalised with the market's own output. Fig 3 :25-26 says the link between having terms and saying what counts as progress "has neither, so it attracts the least attention and the fewest instruments", and Fig 3 :27 says *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Effort spent above that break arrives at a step that cannot use it.

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing | preliminary verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | no global verdict; prices as a self-score is disqualified |
| 2 The Ground | anchor must not update; ground as a party becomes a frame | the market cannot anchor the question it is a party to |
| 3 Dependency Chain | objective link with no instrument | "most productive uses" is uninstrumented |
| 4 The Membrane | methods cross, recordings do not | send the refuter, not a conclusion |
| 5 Mint Pipeline | the three guards and the MDL bargain | no new primitive is owed; a better instrument is |
| 6 Closure and Reachability | import is the only wall mover; instruments improved from worse ones | a non-price instrument is INWARD, not a new atom |
| 7 Room Chain | agreement compounds, evidence does not | two agreeing literatures are one long room |
| 8 Union Surplus | low overlap is the surplus; convergent derivation vs adopted import | EMH and behavioural finance largely share a pool |
| 9 Leave and Arrive | split union from partition; describe R before picking a frame | unbundle; do not answer the global "or" |
| 10 Ground Maintainer | conventions that decide outcomes; declared stakes | a price that allocates has stopped being a neutral convention |
| 11 The Habitat | valence relative to R; introduction not exclusion | speculation is a relation, not a kind |
| 12 The Bond | a route needs bonds, not just states | signal, price, allocation is a chain, not a list |
| 13 Minimum Viable Set | unreachable is a verdict | gap at the ground, not silence |
| Operators table | sequence, production, comparison, subtraction | names the bonds the question needs |
| Symbols table | R is the aim; ground is the anchor | no ground reading here |

Strained readings are named and re-censed in section 5, not smoothed over.

---

## 3. Findings

### F1. The question is a union compound, not one question with two answers

Fig 9 :4-5: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

Fig 9 :57-58: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*

Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

The signal story works well on some slots (liquid, information-rich, short-horizon allocations). The distortion story works well on others (long-horizon, opaque, incentive-misaligned allocations). A single global answer, "markets help" or "markets distort", is precisely the aggregation that throws away the signal that says where to look. The correct output is a set of per-slot verdicts with the conditions named.

**Mode:** `general`, structural. **Triangulation:** Fig 9 (union/partition) and Fig 1 (per-slot residual) are two figure lines with low conceptual overlap, so triangulated within the framework. Both are primary; world corroboration from the Library of Babel essay ("your problem was a bundle or conflation of several problems masquerading as one") is secondary and by the same author.

### F2. Actor valence is relative to the residual, so "is speculation good or bad?" is malformed

Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*

Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."*

Fig 11 :51: *"No standing list of good actors survives a change of residual."*

Speculation supplies liquidity and price discovery when the residual is "does this price incorporate dispersed information quickly?" That is Hayek's arbitrageur, described in the world literature as performing "eminently useful functions based on special knowledge of circumstances of the fleeting moment". Speculation distorts when the residual is "does capital reach long-run productive use?" That is Keynes's speculator, "forecasting the psychology of the market" rather than "the prospective yield of assets over their whole life". Same activity, two residuals, two valences. The question only becomes decidable after a residual is declared.

**Mode:** `general`. **Triangulation:** Fig 11 valence (habitat) and the world sources Hayek 1945 and Keynes 1936 are genuinely low overlap in author, era and method, so the world sources corroborate rather than merely echo. They do not decide; the figure decides.

### F3. Price cannot settle the question it is a party to

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*

Fig 2 :30: *"If it moves when you push on it, it is not an anchor."*

Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."*

Fig 2 :47: *"A ground listed as one of the parties has already become a frame."*

Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

Fig 2 :43: *"Guard, from Figure 10: a convention that decides an outcome has stopped being one."*

Fig 10 :47: *"a convention that decides an outcome has stopped being one"*

Fig 2 :29 lists "a market" as a possible anchor, and Fig 2 :36 says an anchor is legitimate when the question is constitutively about it. That licenses a market as anchor for a question such as "is this price correct given available information?", where the market's own pricing is the subject. It does **not** license prices as the anchor for "does the market send capital to productive uses?", where the market is one of the two candidate mechanisms. Push on the market and the alleged anchor moves with it. By Fig 2 :47 the ground has become a party.

This is the exact structural collapse Keynes names: "In practice we have tacitly agreed, as a rule, to fall back on what is, in truth, a convention." A conventional valuation that decides the allocation has stopped being a neutral measuring device. The world literature's own operationalisation makes the point: the Econlib encyclopedia article says "if stock prices accurately reflect all information, new investment capital goes to its highest-valued use", where "highest-valued" is read off the prices being tested. That is the frame scoring itself with a quantity it produces.

**Mode:** `specified`, because it claims a specific instrument failure. **Triangulation:** Fig 1 :27 (frame-internal metric) and Fig 2 :43/:47 (convention and party) are two independent figure routes to the same bar. World corroboration from Keynes 1936 is low overlap.

### F4. The objective link is uninstrumented

Fig 3 :25-26: "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."

Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Link 3 of the dependency chain is the objective: can the system say what would count as progress in its own terms? Here the objective phrase is "most productive uses". It is usually replaced, without argument, by "highest risk-adjusted return", "highest valuation", or "highest expected cash flow", all of which are prices or functions of prices. That swaps the objective for the mechanism's own output, so link 3 never receives an independent instrument. Effort spent perfecting return-based tests lands above the break and arrives at a step that cannot use it.

Fig 6 :29 says the inward instrument is "is our representation adequate to hold it? The instrument extends access", and Fig 6 :32 says "An instrument is not built from a description. It is improved from a worse instrument already returning something." What is owed here is an INWARD improvement from an instrument already returning something (real capacity utilisation, physical throughput, measured productivity), not a new theoretical atom.

**Mode:** `specified`. This is a claim about the current state of instrumentation, not a proof that no such instrument could exist (Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*). **Status:** single-source for the chain diagnosis (Fig 3), triangulated with Fig 6 inward instrument rule.

### F5. The two literatures are not two independent witnesses

Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*

Fig 8 :48-49: "Two frames that overlap almost completely are one frame wearing two names."

Fig 7 :13: "same closure, handed along; agreement compounds, evidence does not"

Fig 2 :31-32: independence is "how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."

The efficient-market and behavioural-finance literatures are conventionally presented as opposing frames. But as the opened sources show, they largely test on the same return series, the same event studies and the same canonical studies (Fama, Shiller, DeBondt and Thaler, Shleifer and Vishny, Malkiel). Jones and Netter and Mullainathan and Thaler are even entries in the same encyclopedia. Their shared findings are the pool talking, not two frames confirming each other. Fig 8 :50 says "shared atoms are not the signature", so the remedy is not to declare one side wrong but to find a witness that does not draw on returns at all.

**Mode:** `specified`. **Overlap declared:** high between the three modern finance encyclopaedia and survey sources (shared citation pool), low between Hayek 1945 and Keynes 1936 and that pool. Agreement among the high-overlap sources is one witness, not several.

### F6. What survives, and what is refused

| claim | mode | figure / source |
|---|---|---|
| The two mechanisms can both be live in different slots; the "or" is a union | `general` | Fig 9 :4-5, :54-58; Fig 1 :22 |
| Actor valence is relative to the declared residual | `general` | Fig 11 :49-51 |
| Price cannot anchor the question it is a party to | `specified` | Fig 1 :27; Fig 2 :36, :43, :47; Fig 10 :47 |
| The objective link lacks an independent instrument | `specified` | Fig 3 :25-27; Fig 6 :29 |
| Trade-off: more market efficiency is always better | refused as a global verdict | F1, Fig 1 :22 |
| Speculation is intrinsically distorting | refused as written | F2, Fig 11 :49-51 |
| Returns settle whether capital reached productive use | refused | F3, Fig 1 :27 |
| A global "markets help" or "markets distort" answer | `gap` at the ground, not a silence | Fig 13 :134 |

Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* followed by the limit that the framework "cannot say which primitive is missing, because naming it would mean already holding it". Here the honest report is: the question as posed is a union compound and the objective link has no independent instrument. That is a verdict, not an admission of failure.

---

## 4. Pre-registered refuter

Written before the conclusion, per the framework's own rule that a falsifier written before the run is a design instrument. Each item would break the shape claim above.

1. **Union refuter.** Exhibit a single residual, stated in effect terms, for which both mechanisms return the same stable verdict against a non-price anchor across independent slots. That converts the union into a partition and kills F1.
2. **Valence refuter.** Show an actor whose valence is invariant across residuals, benefactor or malfactor for every residual. That kills F2 and Fig 11 :49-51 as applied here.
3. **Anchor refuter.** Exhibit a price-based quantity that ranks real productive allocation and demonstrably does not move when the price-forming frames are pushed. That kills F3 and restores price as anchor.
4. **Aggregation refuter.** Show that per-slot residuals aggregate to a single global verdict with no loss of the live signal. That kills Fig 1 :19/:22 as applied here.

None of these was run in this simulated derivation. Until one is, no part of the answer is `grounded`.

---

## 5. Recommendation

1. Do not answer the global "or". Unbundle by slot and by residual, and report verdicts separately (F1).
2. Declare the residual before naming a mechanism as good or bad (F2, Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*).
3. Build or name the non-price instrument for productive use before running any efficiency test (F3, F4). Fig 3 dependency order: link 3 first.
4. Buy independence in proportion to the cost of being wrong. Seek at least one witness that does not draw on return data (Fig 2 :42; Fig 8 :45).
5. Use filters for the budget and witnesses for the verdict. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A journal tier or a large sample is a filter, not a witness.
6. Send the generator, not a recording. Fig 4 :22: *"Only methods cross up. Only head starts come down."*

---

## 6. Canonical usage check

Two local sources govern how the figures may be used, and both were read before this check.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo" and "the quotes are the authority, not this summary". A reading that makes one figure contradict another has misidentified its domain, not found a flaw. The framework returns "a shape, not a name" and stops at the limit of the available instruments, recording the lineage so the stop is honest.
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule (`general | specified | grounded`); step 7 separates SEARCHED, INWARD and OUTWARD; step 3 gates any mint by support, reachability and novelty; "the ground settles it. Verified only by what pays. A gate is not the ground."

Nothing in this audit claims a mint. No new primitive is proposed. The remedy in F4 is explicitly INWARD (a better instrument from one already returning something), not OUTWARD import, so the two instruments are not read against each other.

### Strains and re-census

- **Fig 2 :29 lists "a market" as an anchor, but F3 refuses a market as anchor.** Strain only if the two are read as the same quantity. Re-census: Fig 2 :29 licenses a market as anchor for a question constitutively about that market's own pricing (is this price right, given the information?); Fig 2 :36 and :47 bar it for a question in which the market is one of the opposing mechanisms. Different question types, so no strain after re-census.
- **Fig 11's habitat language applied to financial markets.** Superficial strain, since the figure is written in ecological terms. Re-census: the figures README says only "the actors, the currency and the anchor change" across domains, and Fig 10 :68 says "Different actors, a different currency, a different ground". The habitat is enumerated, not composed: investors, managers, regulators; liquidity, disclosure, interest rates; ownership, lending, incentive contracts. No strain.
- **Demanding a non-price measure of "productive use" can look like demanding the impossible**, since economists often define value by willingness to pay. Re-census: the framework does not say the instrument exists. It says the question cannot be settled without one (Fig 13 :134, Fig 8 :39). That is an honest stop, not an omnipotence claim. Named, not hidden.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| "Use Fig 2 :29 to take market prices as the anchor, since figures list a market." | **Retracted.** Fig 2 :36 and :47 restrict that licence to questions constitutively about the market's own pricing. Kept as evidence of the re-census, not silently erased. |
| "EMH and behavioural finance are two frames, so their agreement is triangulation." | **Downgraded to one evidence pool.** Fig 2 :31-32 and :40; the opened surveys cite the same studies. Their agreement is a convention, not a witness. |
| "Speculation is the distorting actor." | **Refused.** Fig 11 :49-51 makes valence residual-relative. Kept only as a slot-filling for a specified long-horizon residual. |
| "The framework can name the missing instrument." | **Refused.** Fig 9 :32: *"you get a kind of thing, never the answer itself"*. The instrument is characterised in effect terms only. |
| "Fig 13 :134 makes this a failure to answer." | **Reversed.** Unreachable is a verdict, not a silence. Recorded as a `gap` at the ground with the instrument owed. |
| Valence claim (F2) | **Canonically confirmed** by Keynes 1936 (speculation vs enterprise are two forecast targets) and Hayek 1945 (the arbitrageur as benefactor for a knowledge residual), two low-overlap world frames. |

### Updated verdict

The shape survives: a union compound, per-slot verdicts, residual-relative valence, and a bar on using the market as its own anchor. Every global claim in the original "or" is refused as posed. The gap is at the ground (no independent instrument for productive use), it is recorded rather than filled, and it is reachable only by an INWARD instrument improvement plus genuinely independent witnesses. Strains after re-census: none live; three resolved and recorded above.
