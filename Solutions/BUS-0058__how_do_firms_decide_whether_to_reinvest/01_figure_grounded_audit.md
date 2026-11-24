# Figure-grounded audit: how a firm routes free cash flow

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the firm-specific number. Nothing here is `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed to tether the veracity of the output to reality. Anything else is drift."* And: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This file is a simulated derivation checked for internal consistency against the figures. It cannot settle the corporate-finance question it reports on. See `05_what_shape_means.md` §7.

**Sources for figure lines.** The local canonical extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`, read in full this session. Every quoted string marked `Fig N :line` was checked character by character against that file. No figure quote was taken from a summary. World lines are from the public sources in `10_source_ledger.csv`, each opened on 2026-11-22.

---

## 0. The question restated as an effect

The question asks how firms decide among reinvesting profits, paying dividends, buying back shares and reducing debt. Stated in effect terms, the object of the decision is not a choice among four labels. It is a **single residual, free cash flow after obligations, that must be routed to a channel that pays for it**.

- The residual `R` here is the gap between cash held and the set of uses that would return it to a claimant at or above the opportunity cost of capital. It is indexed per firm and per use-slot. A global "payout ratio" is an aggregation that discards the slot information.
- Each of the four named options is a **route**, not an answer. A route is a composition with a typed bond: reinvest composes cash with a project; debt reduction composes cash with an outstanding claim; dividends compose cash with a recurring obligation to all shareholders; buybacks compose cash with a discrete repurchase from some shareholders.
- What an answer would look like, written down and bound as an ordinary term before the run (Formula "Direction"): *a separator that says, for each cash slot, which condition binds, what anchor settles that condition, and what would refute the routing*. That is the sought-for shape made refusable. A universal percentage is **not** the sought-for shape; it is a name the question's grammar tempts us to invent.

Two preliminary refusals, recorded before the derivation:

- Refusal 1. The four options are not four of the six substrate terms. This was my first-pass reading and it is withdrawn in §7 (R1). Cash and the channels are bindings from the finance frame, not primitives.
- Refusal 2. "Reinvest versus payout" is not symmetric. It is ordered, because a paying internal use must be searched for and refused before the residual is returned (Formula step 2, refuse before mint). The order is a finding, not an assumption, see F1 and F3.

---

## 1. Domain census (before any figure line is chosen)

### 1.1 R by arity, symmetry and scale

- **Arity.** One residual quantity, four channels, at least four distinct conditions. The conditions overlap: a firm can reinvest and pay a dividend in the same year; a buyback and a dividend both return cash to shareholders; debt reduction and reinvestment compete for the same dollar. So the structure is a **union of overlapping conditions**, not a partition (Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."). A single lever, such as "maximise shareholder value", clears the region where one condition holds and leaves the intersections standing (Fig 9 :55-57).
- **Symmetry.** Dividends and buybacks are close to **isomers** over a fixed atom set: same atoms (cash, shares, shareholders), different bond (recurring commitment versus discrete repurchase). Reinvest and payout are related by an ordered bond, not a symmetric one. Debt reduction changes the creditor claim, so it ranges against a different anchor from an equity payout. The four channels therefore cannot be ranked on one axis without losing the bond information.
- **Scale.** Level 1 is the per-dollar, per-slot routing decision. Level 2 is the capital structure that is the accumulated result of many level-1 decisions. A settled level-1 composition becomes an atom at level 2 (Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."). Reading level 2 with a level-1 instrument, or the reverse, is the scale error this census is meant to prevent.

### 1.2 One line per domain: actors, currency, anchor

A domain without a nameable anchor is not yet a domain. Each of the following has one.

| domain | actors | currency | anchor (what settles it, and does not update on the frame) | question type |
|---|---|---|---|---|
| **D1 Internal investment** (capital budgeting) | management as maker, projects, the firm's existing library of capabilities | net present value, return on invested capital versus cost of capital | the market that actually pays for the project's output; a non-updating customer and price, not management's own forecast | partition inside closure: is there a paying use in here? |
| **D2 Capital structure / creditor** | lenders, debt covenants, treasury, the rating the market assigns | interest paid, tax shield, distress cost, reserve borrowing power | the market pricing of the firm's debt and the fixed contractual claim; the claim does not move because management prefers a ratio | comparison of quantities, with a target that is a convention until the ground can violate it |
| **D3 Shareholder payout** | shareholders as residual claimants, board, management | cash per share, tax treatment, signal, flexibility | the share price and the total return the market pays, which do not update on management's stated intent | union inside the payout domain: two bonds over the same atoms |
| **D4 Governance / agency** | shareholders, board, management as agent, market for corporate control | free cash flow under discretionary control, agency cost | the capital market the firm must face when internal cash runs out, and the market for control that can replace the management team | refusal: which held term has a residual that persists and does not trend down? |

D4 is a cross-cutting condition, not a fourth box beside the other three. It changes the valence of retention: the same held cash is a head start when a paying use exists and a liability when none does (Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries.").

### 1.3 Partition or union

**Union.** Fig 9 :57 "a case in two conditions is not a harder case of either". Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* The four options are bundled in the question's grammar as if they were a menu. In effect they are the visible tips of four conditions, and one lever cannot clear the compound. Each domain gets its own loop and its own verdict; the verdicts are never averaged into a "correct payout policy".

### 1.4 Order by dependency (Fig 3)

Fig 3 :20 "The chain is ordered by dependency, not by importance." The routing chain is:

1. **Perception.** Measure free cash flow per slot. Fig 1 :19 "The residual is indexed by object slot, not aggregated."
2. **Vocabulary.** Have terms for what cash affords: invest, retire a claim, distribute, hold.
3. **Objective.** Say what counts as progress in this frame: a return above the cost of capital, a claim reduced toward a target the market can violate.
4. **Planning.** Route the cash to the paying channel under incomplete information.
5. **Learn and carry.** Name what paid, verify it against the market, and carry the method to the next period.

The chain usually breaks between links 2 and 3, exactly where Fig 3 :25-27 says it does: having terms for what cash affords is mistaken for having a term for what would count as progress, so the firm falls back on a convention (a fixed payout ratio, a target leverage) that has no instrument. Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Effort spent on link 4 (a more sophisticated buyback schedule) cannot rescue a break at link 3 (Fig 3 :19 "Optimising a link that already works cannot rescue one that does not.").

---

## 2. Figure census (bearing and verdict before conclusion)

| figure | bearing on this question | verdict after census |
|---|---|---|
| **1 The Agent** | free cash flow must be indexed per slot; frame-internal quantities cannot score the routing | supports the per-slot residual; rules out a global payout ratio as the object |
| **2 The Ground** | the market is an anchor only if it does not update on the firm's own report; agreement is not triangulation | governs D1, D3 and D4 anchors; forbids "the CFO consensus" as evidence |
| **3 Dependency Chain** | the objective link has no instrument in much of the literature | locates the break; separates vocabulary from objective |
| **4 The Membrane** | methods cross scales, recordings do not; round trip must be measured | governs carrying one period's routing to the next |
| **5 Mint Pipeline** | search inside the closure first; refusal of a persistent flat residual is a mint; settlement is not sufficiency | governs "reinvest first, refuse retention second" |
| **6 Closure / Reachability** | mint cannot add an atom; import is the only operator that moves the wall; instruments are improved from worse ones | governs when reinvestment is composition and when it is import |
| **7 Room Chain** | a room's agreement is variation, not a verdict; next room must match the surfaced residual | forbids settling a routing rule by surveying what other firms do |
| **8 Union Surplus** | residual first, frame second; provenance separates convergent derivation from adopted import; no proof of absence | governs the world search and the gap verdict |
| **9 Leave / Arrive** | union before partition; describe before looking; filters for budget, witnesses for verdict; you get a kind of thing | decisive for the union reading and the shape-not-a-name gap |
| **10 Ground Maintainer** | ground does not decay, channel does; convention that decides an outcome; declare the stake; verifier non-access | governs the governance seat and the outreach order |
| **11 The Habitat** | capability is agent and habitat; valence relative to residual; habitat enumerated, never composed; isolation is substitution | governs why a cash-rich firm can lose capability and why retention valence flips |
| **12 The Bond** | bond carries information the atoms do not; isomer, functional group, comparison, two currencies that do not add | decisive for dividends versus buybacks and for description cost versus action cost |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict, not silence | governs the gap for the numerical target |
| **Operators table** | `−` is absence of an operand, `¬` is refusal of a claim; `⋛` is a threshold comparison | debt reduction is a settled claim removed in another frame; retention refusal is `¬`, not `−` |
| **Symbols table** | `R` is the aim and always a slice; `|R|φ|` is the leftover after a candidate explains what it can | keeps the residual per slot and allows a payout to leave leftover |

Strained readings are named in §4, not smoothed over.

---

## 3. Findings

### F1 - Reinvestment is tested first, and it is a closure search, not a new atom (decisive for D1)

Fig 5 :35 "is there anything to explain, before the search starts" and :20-21 *"is there anything to explain? the gap has real mass somewhere"*. The formula's step 7 asks SEARCHED first, because it is cheapest and the other two assume its answer: *"SEARCHED is it in here and unfound? The closure does not change: same atoms, same wall, more of the space actually visited."*

Applied to D1: a firm first asks whether an already-held capability can turn cash into a paying output. If the answer is yes, the route is composition inside the current closure. Fig 6 :21 "MINT composes inside the closure and can never add an atom." So ordinary reinvestment does not move the wall; it explores an already-held reach.

World corroboration, secondary only. Jensen 1986 (American Economic Review), opened 2026-22 via the SSRN record and a full-text reproduction at the Boston Fed: *"Free cash flow is cash flow in excess of that required to fund all of a firm's projects that have positive net present values when discounted at the relevant cost of capital. Such free cash flow must be paid out to shareholders if the firm is to be efficient and to maximize value for shareholders."* Myers 1984 (Journal of Finance), full text opened: *"Firms prefer internal finance."* Brav, Graham, Harvey and Michaely 2005 (Journal of Financial Economics), full PDF opened: *"maintaining the dividend level is on par with investment decisions, while repurchases are made out of the residual cash flow after investment spending."*

The three finance sources are one evidence pool, not three independent witnesses (Fig 2 :40). The figure verdict stands on its own lines; the world sources are consistent with it.

**Refuter for F1.** If a firm's internal reinvestment route pays persistently against a market that does not update on the firm's forecast, with no new atom and no contact with a differing closure, and this survives an instrument that discriminates the source of the return, then the closure reading of reinvestment is wrong. Also refuted if a figure line is produced that returns a universal investment-first rule without the SEARCHED precondition.

**Status:** `triangulated` (Fig 5 and Fig 6, low overlap: search order versus closure wall; world corroboration from one pool).

### F2 - The four options are a union, not a partition (decisive for the shape of the answer)

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57 "a case in two conditions is not a harder case of either".

The question's grammar presents a menu. In effect, D1 binds when a paying internal use exists; D2 binds when a claim should be retired; D3 binds on what remains to the residual claimants; D4 changes the valence of holding throughout. Two or more conditions can bind on the same dollar. A single lever, for example "return all surplus to shareholders", clears the region where only D3 binds and leaves the D1 and D2 intersections standing.

The external analogue is genuinely low overlap. Stephens, "Decision ecology: Foraging and the ecology of animal decision making" (2008, Cognitive, Affective, and Behavioral Neuroscience), full text read via the public record: *"Many-probably most-animals face leave-versus-stay decisions like this."* And: *"One would expect a forager's patch-leaving behavior to reflect a balance between the diminishing returns of patch gain and the value of the forager's options elsewhere."* A forager does not choose between four answers to one question; it balances diminishing returns where it is against the value of options elsewhere, in a habitat it did not author. The firm's reinvest-versus-payout decision has the same shape: stay while the marginal internal return exceeds the option elsewhere, leave when it does not. This is a **shape analogue from animal behaviour**, not a claim that firms are foragers and not a second witness for the finance facts.

**Refuter for F2.** If a non-updating instrument can assign an exclusive, exhaustive partition of cash flows into the four categories with an assignable shared fraction measured at the ground, the union reading fails. If the foraging analogue is shown to depend on a mechanism absent from capital allocation (a fixed fitness currency with no claimant structure), its corroboration is withdrawn and the figure verdict remains single-source on this point.

**Status:** `triangulated` (Fig 9 union rules plus the animal-behaviour leave-or-stay shape, genuinely low overlap; the figure verdict does not depend on the analogue).

### F3 - The order is refuse before mint, not mint before refuse (decisive for D4)

Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so". Fig 5 :55 "What it removes is not a term but a term's standing to be composed over." Fig 5 :59 "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at".

Free cash held with no positive-NPV use is precisely a term whose residual persists and does not trend down: every period the same cash fails to be converted into a paying composition. The framework's rule is that the owed term is a refusal, not another explanation. A payout is the refusal in effect: it removes management's standing to compose over that cash. The Operators table :58 is explicit: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*. This is `¬`, not `−`: subtraction would be the absence of an operand, whereas refusal is the denial that the held term may be composed over.

Jensen 1986, opened: *"Managers have incentives to expand their firms beyond the size that maximizes shareholder wealth. Growth increases managers' power by increasing the resources under their control."* Brav et al. 2005, opened: repurchases are *"more flexible than dividends"* and are made when *"good investments are hard to find"*. Miller and Modigliani 1961, opened, give the perfect-market limit in which the packaging cannot matter: *"given a firm's investment policy, the dividend payout policy it chooses to follow will affect neither the current price of its shares nor the total return to its shareholders."*

The limit result is not a refutation of F3. It is a frame-internal theorem under perfect markets. Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." In a world with taxes, rigidity and asymmetric information, the bond does carry information; the empirical literature is the ground-side report of that. The strain is named in §4 S2.

**Refuter for F3.** If persistent free cash with no paying internal use is shown, by a source-discriminating instrument, to increase market value persistently without a change in contact with a differing closure, the refusal verdict fails. If debt retirement or a payout is shown to be `−` in the framework's sense rather than `¬` (a mere absence of an operand rather than a refusal of standing), the operator mapping is withdrawn.

**Status:** `triangulated` (Fig 5 plus Operators, triangulated against the agency literature as one secondary pool).

### F4 - The ground is a market that does not update on the firm's report (decisive for D1, D3, D4)

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30 "If it moves when you push on it, it is not an anchor." Fig 2 :33 "The anchor must not update." Fig 2 :45 "Frames range against the ground. They do not negotiate with it."

A forecast of a project's NPV is a frame reading. A dividend increase announced as a signal is a frame reading. A target leverage chosen by the board is a frame reading. None is an anchor. The anchor is the price the market actually pays, the customer who actually buys, the claim the lender can actually enforce. If a "value creation" metric moves when management changes its own assumption, it has become a frame and has left the anchor position (Fig 2 :34 "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices.").

Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." A board that ratifies management's payout recommendation because the recommendation is well argued is a mirror.

**Refuter for F4.** If the market price is shown to update on the firm's internal report in the relevant slot, so that the reading and the anchor are the same instrument, the anchor assignment for that domain fails and a different ground must be found. If a firm can settle its routing with no external payment at all, the anchor requirement is refuted for that case.

**Status:** `triangulated` (Fig 2 plus Fig 1 :23 "The ground enters as the only metric.").

### F5 - Dividends and buybacks are isomers, not synonyms (decisive for D3)

Fig 12 :5 "The bond is the rest of the information, and it is the half nothing was recording." Fig 12 :117 "Same atoms, different bond, different substance." The arrangement, not the ingredient list, is the substance (Fig 12 :94 "the arrangement is the substance").

Over the fixed atom set {cash, shares, shareholders}:

- A dividend is a bond that creates a **recurring expectation** across all shareholders. Its distinguishing feature is that cutting it is costly. Lintner 1956, opened: *"the dependent variable in the decision-making process is the change in the existing rate, not the amount of the newly established rate as such."* Brav et al. 2005, opened: *"94% of dividend-payers strongly (rating of +1) or very strongly (rating of +2) agree that they try to avoid reducing dividends."*
- A buyback is a **discrete repurchase** from those who sell. It creates no recurring obligation. Brav et al.: *"many managers now favor repurchases because they are viewed as being more flexible than dividends"*; and firms would not substitute back from repurchases to dividends, an *"asymmetric substitution"*.

Same atoms, different bond, different substance. The empirical asymmetry is exactly what the figure predicts when the bond is priced. There is no figure line that selects which bond pays in a given tax regime; that remains a `gap` (§6).

**Refuter for F5.** If dividends and buybacks are shown to be identical in bond, not merely in atoms, in the relevant jurisdiction and horizon (no recurring-expectation effect, no tax difference, no flexibility difference), the isomer claim fails and they collapse to one functional group member. A falsifier written before the run: equal survival rates of dividend levels and buyback programs across a shock that forces a payout cut.

**Status:** `triangulated` (Fig 12 definition plus the empirical asymmetry; the figure line and the finance result are different objects, so low overlap).

### F6 - Debt reduction is a comparison against a target that must remain violable (D2)

Fig 12 :87 "a threshold relation between two quantities" and Operators :52 "a goal is a comparison, which is why a vocabulary without it cannot state one." A leverage target is a goal, hence a comparison, not a primitive.

Fig 10 :18 "a declared meaning is not a grounded one" and :19 "→ install what can be violated". A target debt ratio that the board cannot bring itself to violate, whatever the market does, has stopped being a convention and has become an outcome-fixing constant (Fig 10 :47 "a convention that decides an outcome has stopped being one"). Myers 1984, opened: in the static tradeoff framework *"the firm is viewed as setting a target debt-to-value ratio and gradually moving towards it, in much the same way that a firm adjusts dividends to move towards a target payout ratio"*, whereas in the pure pecking order *"the firm has no well-defined target debt-to-value ratio."* These are two different frames, not two answers; the figures do not choose between them. That choice is a `gap`.

Jensen 1986 adds the other half of D2: *"debt can be an effective substitute for dividends"* because principal and interest payments *"bond their promise to pay out future cash flows"* in a way a dividend promise does not. Debt reduction and a dividend are therefore not simple inverses; they differ by bond and by which claimant can enforce.

**Refuter for F6.** If a universal target debt ratio is derived from the figures, or if a firm's leverage target is shown to be immovable by any market event and still to count as a convention, the comparison reading fails. If debt retirement is shown to add an atom to the firm's library rather than remove a standing claim, the operator mapping is revised.

**Status:** `single-source` on the figure side for the target itself (Fig 12 comparison), `triangulated` for the violability condition (Fig 10 plus Fig 2); world corroboration from one finance pool.

### F7 - Capital structure is a second-order composition over settled level-1 routes

Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world." Each settled period's routing becomes an atom for the next: retained earnings accumulate, debt retired stays retired, a dividend policy becomes an expectation. Level 2 is not a different question; it is the same loop at the level where the settled outputs are atoms.

Fig 4 :22 "Only methods cross up. Only head starts come down." A routing method that can be reapplied crosses the scale; a recording of one year's cash allocation does not. Fig 4 :30 "So take the round trip and measure the gap." The round-trip gap `R_T` for this condensation is recorded in `11_audit.md` §Round trip gap.

**Refuter for F7.** If a capital-structure result is shown to require a primitive not available at the per-period level and not imported with provenance, the second-order reading fails.

**Status:** `triangulated` (Fig 12 plus Fig 4).

### F8 - Description cost and action cost do not add

Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 12 :126 "Bits price the description. Actions price finding out whether it holds." Knowing that a payout is an isomer of a buyback is cheap in description; measuring which one pays in this tax regime is expensive in actions. A firm that holds only one accounting will propose arrangements it cannot afford to test (Fig 12 :127 "They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall.").

Practical consequence: the shape in this folder is cheap to state and expensive to settle. The pre-registered refuter is the cheap instrument that makes the expensive test worth running.

**Refuter for F8.** If a single unit is found in which both the description cost of a routing rule and the action cost of verifying it are commensurable without loss, the two-currency claim fails for this domain.

**Status:** `single-source` (Fig 12), used as a caution, not as a verdict-bearing line.

### F9 - No figure line returns the number (gap, stated plainly)

Fig 9 :32 "you get a kind of thing, never the answer itself". Fig 13 :134 "Unreachable is a verdict here, not a silence". Fig 8 :39 "a search that finds nothing is never a proof of absence".

No figure line returns a payout ratio, a dividend amount, a buyback schedule, a target debt ratio, or which bond pays in a given tax regime. The framework returns the kind of thing: a union of four conditions, each with an anchor, a refusal order, an isomer relation, and a second-order accumulation. The number requires a ground reading, a source-discriminating instrument at the firm's own market, which this derivation does not hold. This is a `gap` of the shape-not-a-name kind, not underivable in principle and not a silence. The honest stop is recorded, not filled.

The conventional finance answers (target payout ratio, pecking order, static tradeoff, free-cash-flow payout) are **bindings from the finance frame** onto this shape. They are candidates with provenance owed (Fig 8 :51 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"). Naming them is not forbidden (the shape-not-a-name rule governs a *missing* primitive, see `05` §6), but claiming the framework derived them would be false.

**Refuter for F9.** A single verbatim figure line that returns a universal percentage or ratio would refute the gap. Until one is produced, the gap stands.

**Status:** `triangulated` (Fig 9 plus Fig 13 plus Fig 8, three distinct figures).

### F10 - The governance seat and the declared stake

Fig 10 :59 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying" and :60 "Where a stake cannot be removed, declare it." The maker of this derivation has an interest in the shape being found; that cannot be removed, so it is declared here and carried into `08` and `09`. The pre-registered refuter in §5 is the instrument that keeps the interest from deciding the reading.

Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." A finance practitioner who has read the whole framework before being asked for a verdict has joined the frame being checked. The outreach in `02` therefore leads with the residual and the refuter and withholds the theory until stage 1 is recorded.

**Refuter for F10.** If the refuter is rewritten after the verdict is known, or if a recipient's stage-1 verdict is pooled as corroboration after they have seen the theory, this control fails and the packet must be withdrawn.

**Status:** `general` structural rule, applied `specified` to this folder.

---

## 4. Strains, re-census and what was not smoothed

- **S1, live then dissolved. Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." versus the finance fact that a higher internal return on capital appears to pay.** Re-census: a higher ROIC is a reading; if the market does not pay for it, no new cash arrives and contact has not changed. If it does pay, the channel to a non-updating market changed and the figure is satisfied. Different quantities, no contradiction. Kept visible because the naughty reading (any efficiency gain pays) is common in practitioner finance.
- **S2, live and named. Miller and Modigliani's irrelevance result versus Fig 12 :5 (the bond is the rest of the information).** Re-census: MM is a `general` theorem inside a perfect-market frame; Fig 12 governs what a notation must record in any frame. The empirical record (Lintner, Brav et al.) shows taxes, rigidity and asymmetric substitution in the ground, so the bond carries information there. The two are not contradictory; they are different modes. The tension is retained rather than resolved into "MM was wrong".
- **S3, live then dissolved. Fig 5 :55 "What it removes is not a term but a term's standing to be composed over." versus debt reduction, which really does extinguish a claim.** Re-census: in the firm's library the debt term is refused and loses its standing; in the creditor's frame the claim is settled by payment. Two frames, two currencies, one event. Fig 10 :68 "Different actors, a different currency, a different ground, and a lossy transform between." Kept visible as a frame-boundary note.
- **S4, dissolved. The question's grammar says four options (a partition).** Re-census at Fig 9 :54: the grammar is not the residual. Union; unbind before searching. The question is not retraced to its grammar.
- **S5, live and narrowing. The animal-behaviour analogue (leave-versus-stay) has a single fitness currency, while the firm has several claimants with different currencies.** The analogue is therefore restricted to the *shape* of the stay-or-leave test, not to the routing among claimants. Declared in F2 and in `09` WORLD.

After re-census: no unhandled contradiction. Two live tensions (S2 mode difference, S5 analogue scope) are named, not hidden.

---

## 5. Pre-registered refuter (written before the conclusion)

Required before any outreach: *a falsifier written before the run is a design instrument, not only an honesty device* (seat guide). The shape claim in this folder is refuted if any of the following holds:

1. A verbatim figure line returns a universal payout ratio, dividend amount, buyback schedule or target debt ratio. That would refute F9 and the `gap`.
2. A firm's internal reinvestment route pays persistently against a non-updating market anchor with no new atom and no contact with a differing closure, and a source-discriminating instrument confirms it. That would refute the closure reading in F1.
3. Dividends and buybacks are shown to be identical in bond, not merely in atoms, over the horizon and jurisdiction in question. That would refute F5.
4. Persistent free cash with no paying internal use is shown to increase market value persistently without a change in contact. That would refute the refusal verdict in F3.
5. A non-updating instrument assigns an exclusive, exhaustive partition of cash flows into the four options with an assignable shared fraction. That would refute F2.
6. The deck is rewritten so the refuter no longer matches the claim, or a stage-1 verdict is pooled after the theory is shown. That would void the governance control in F10.

If any fires, the affected finding is withdrawn and the packet is reissued with the retraction visible. Until one is run, nothing in this folder is `grounded`.

---

## 6. Canonical usage check and retraction log

Two local canonical files were read after the first four sections and before the conclusion, and they govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit: the framework gives *"what a missing thing would have to look like (a shape, not a name)"* and stops where instruments can no longer distinguish, recording the lineage so the stop is honest. *"Indiscernibility is not identity."*
- `THE_FORMULA.md`: mode rule; refuse before mint; SEARCHED first; *"the ground settles it. Verified only by what pays. A gate is not the ground."*

### Corrections to my own first pass, kept visible

| earlier reading | status after the canonical check |
|---|---|
| R1, first pass mapped the four options onto four of the six substrate terms | **Withdrawn.** The six-term set is physical-ish substrate; the options are bindings from the finance frame. Re-census: cash is a held resource, the channels are bonds and operators, the market is the ground. Kept as evidence of the first error. |
| R2, first pass treated "reinvest versus payout" as a symmetric menu choice | **Withdrawn.** Ordered by the SEARCHED-first rule and by refuse-before-mint. See F1, F3. |
| R3, first pass treated dividends and buybacks as one payout answer | **Narrowed, not fully withdrawn.** They are isomers over a fixed atom set (F5), which is a stronger and more useful claim than either "same" or "different". |
| R4, first pass read "shape, not a name" as forbidding any mention of a target payout ratio | **Corrected.** The rule governs a *missing* primitive. Naming a finance binding is provenance, not an invented primitive. What is forbidden is claiming the framework derived it. See `05` §6. |
| R5, first pass called the MM irrelevance result a conflict with the figures | **Narrowed to a mode difference (S2).** MM is `general` within a perfect-market frame; the figures bind the notation in any frame. Not a figure conflict, so no re-census is owed. |
| F2 initially claimed the foraging analogue corroborates the full four-way union | **Narrowed.** It corroborates only the stay-or-leave shape (S5). The claimant structure is finance-specific. |
| F9 initially called the gap unreachable in principle | **Corrected.** It is unreachable at this budget with the instruments held, which is a different fact with different instructions (Fig 8 :40-43). Importing a number against a budget limit would add an atom that is not needed. |

No earlier finding was silently erased. The withdrawn readings remain in this table so a later reader can locate the error rather than only see the corrected claim.

### Canonical confirmations

- The union reading is confirmed by Fig 9 :54-57 and by the figures README's *"a reading that makes one contradict another has misidentified its domain"*.
- The shape-not-a-name limit is confirmed by Fig 9 :32 and Fig 13 :134-135.
- The simulated status is confirmed by the Recursive Self-Improvement Trap essay, opened directly: *"LLMs can quickly simulate an approximate answer/output... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."*

---

## 7. Recommendation

1. Send the separator, not a percentage. The four domains, their anchors and their separate verdicts are the artifact. State the `gap` for the number as a verdict (F9).
2. Keep the dependency order visible: measure per slot, name what cash affords, state the objective, then route. Most practitioner effort lands at link 4 (buyback mechanics) when the break is at link 3 (no instrument for the objective) (Fig 3 :25-27).
3. Keep the anchor test on every claimed "value creation" metric. If it moves when management changes its own assumption, it is a frame, not a ground (F4).
4. Treat dividends and buybacks as isomers, and ask which bond pays in this jurisdiction, rather than asking which is generally better (F5).
5. Put the refusal order before the payout: search the closure, then refuse the cash with a persistent flat residual, then route outward to the claimant (F3).
6. Lead outreach with the residual and the six refuters. Ask what a failure would look like before offering any theory (Fig 10 :52 "Bring a characterised residual, never the source.").
7. Record the gap as unreachable-at-this-budget and do not fill it with a conventional ratio. The conventional ratios are candidates with provenance owed (F9).

---

## 8. Gaps, stated once more

**Declared gap.** No figure line governs a universal payout ratio, dividend amount, buyback schedule, target debt ratio, or the choice of bond in a given tax regime. `Fig 9 :32 "you get a kind of thing, never the answer itself"`. `Fig 13 :134 "Unreachable is a verdict here, not a silence"`. The instrument owed is a market-side, source-discriminating reading of the marginal return to each route at the firm's own slot. Until one exists, the answer stops at `specified` plus `gap`, and the stop is recorded here rather than hidden.
