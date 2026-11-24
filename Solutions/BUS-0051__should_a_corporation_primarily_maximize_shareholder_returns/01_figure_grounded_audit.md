# Figure-grounded audit: BUS-0051, shareholder returns versus stakeholder balance

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the governance question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o'| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the board's and executives' belief about what the firm's actions will return, formed from its own history and inherited priors.
- **a** is what the corporation does: invest, lay off, price, source, disclose, pollute, pay a dividend, buy back shares.
- **Γ(b,a)** is what the firm's library of routines, contracts and capital predicts will happen.
- **o'** is what actually happens: realized return, survival, employment, product safety, supply continuity, local effects, litigation.
- **s** is a slot. A slot is a party or relation in contact with the residual, indexed separately. It is not an industry average and not a single firm-level score.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is: what does the decision procedure count, and what ground settles each counted slot? The question as posed offers two procedures. Option A counts one slot (the capital provider's return) and uses one market reading as the objective. Option B counts several slots and proposes to balance them, usually by a weighted aggregate. Both are procedures for handling R; neither has yet been ranged against an anchor.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a shape specifying (i) which slots are in the habitat of this residual, enumerated from contact, (ii) which ground settles each slot, and (iii) an instrument that discriminates a failure of one slot's channel from a failure of another's. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidate directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* A market is explicitly a named anchor. So a share price can be an anchor **for the capital slot**: it settles what shareholders received and does not move because a board thinks it did well.

But Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* The question before us names workers, customers, suppliers and communities as parties whose interests are at stake. It is constitutively about them as well as about shareholders. Fig 2 :37-38 adds: *"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* A single market price is therefore a legitimate anchor for one slot and an instrument on one axis for the whole question. Promoting it to the anchor of the whole is the anchor error: a frame-internal quantity standing in for the ground (Fig 1 :27, *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*).

**This is the first substantive finding.** Option A fails the anchor test as a total answer, while remaining valid as the ground of D2 (the capital-market domain). The verdict is not "shareholders do not count"; it is "one slot's anchor is not the anchor of a union."

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a relation among firm library Γ, action a and realized outcome o', indexed by slot s and ordered by time t. It has at least three operands and an ordering. A two-place reading (firm, return) loses both the action and the other parties, so it is rejected.
- **Symmetry.** The decision is not symmetric. The anchor does not update on the board's opinion (Fig 2 :25). "Primarily" and "balance" introduce **comparison** bonds (⋛, *"a threshold relation between two quantities"*, Fig 12 :87) and an **ordered** sequence (→, *"A then B; B needs A to have happened"*, Fig 12 :72). Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* "Maximize" states one comparison; "balance" states a family of them and never says how to rank the family.
- **Scale.** The slot is a firm-level decision, but "superior" and "stakeholder" exist only at the population scale (Fig 4 :5, *"many agents, a shared library, and something that ranks what they produce"*). The time index crosses the membrane between the board's step loop and the market's and habitat's selection loops (Fig 4). The transform is lossy, so the round-trip gap R_T must be measured rather than assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The decision procedure** (board and executive loop) | directors, executives, Γ of routines and contracts | actions and residual reduction | yes: realized outcome of the specific decision, per slot | admitted |
| **D2 The capital market** | shareholders, investors, analysts, lenders | price, return, cost of capital | yes: the market, named in Fig 2 :29 | admitted, but only for the capital slot |
| **D3 The stakeholder habitat** | workers, customers, suppliers, communities, regulators, environment | wages and safety, price and quality, supply continuity, local effects | yes: each party's realized outcome, enumerated from contact (Fig 11 :43, :44) | admitted |
| **D4 The measurement and reporting channel** | metrics, audits, disclosures, incentive schemes | contact with the ground | yes: the ground, "the ground does not decay, the channel does" (Fig 10 :24) | admitted |
| **X1 Shareholder value as a free-floating corporate objective** | the shareholder class | return | no anchor independent of D2's market reading; it is a binding that elevates one D2 slot | absorbed into D2 with a declared stake |
| **X2 Stakeholder welfare as a single aggregate score** | an index builder | a blended number | no independent anchor; the blend discards the per-slot signal (Fig 1 :28) | rejected as a compound in disguise |
| **X3 The public interest as a free-floating objective** | society in the abstract | welfare | no nameable anchor separable from the habitats of D2 and D3 | not a domain yet |

X1 is not excluded as irrelevant; it is re-scoped to D2 and its stake is declared, per Fig 10 :59-60: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"* and *"Where a stake cannot be removed, declare it."* X2 fails because aggregation is exactly the move Fig 1 forbids.

### 1.3 Partition or union

D1 and D4 overlap: the decision loop reads only through the reporting channel, so their overlap is a compound with its own loop. D2 and D3 overlap in the same persons: a worker may hold shares, a community bears effects that return as price and regulation, a supplier extends credit. So the whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **(C1)** each slot's channel to its own ground stays reachable, and **(C2)** the firm's reach keeps moving outward through contact with closures that differ from its own, because that is how it keeps paying any slot over time. A firm failing only C1 (a stale or pooled reading of one party) and a firm failing only C2 (a closure handing itself the same room) are not different degrees of one failure; they need different instruments. The third item, the normative weights that would decide a true conflict between slots, is not a condition in the closure at all. It is the `gap` of section 3 F10.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order: 1 perception (can the board read each slot's outcome at all?) -> 2 vocabulary (does governance have terms for what each party's claim affords, and can it say what would count as progress there?) -> 3 objective (can it state a comparison per slot?) -> 4 planning -> 5 learn and carry. The middle link, having terms for what a situation affords and saying what would count as progress, is the one with no instrument (Fig 3 :26). Most governance effort lands above the break, on executive pay, board composition and disclosure format, because that is where the measurements already exist (Fig 3 :29-30). The "maximize" move sets the objective before the vocabulary link is built, which is effort arriving at a step that cannot use it.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed; decisive against a single aggregate |
| 2 The Ground | market is a named anchor; legitimacy and independence rules | governs the anchor and the witness rule; decisive against promoting one slot |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer and the honest round trip |
| 5 Mint Pipeline | three guards as a product; settlement | governs whether a new objective can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs renewal of reach (C2) |
| 7 Room Chain | same closure handed along; agreement is not evidence | governs stakeholder consensus and ESG-rating agreement |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs source rules and the limits of search |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; declared stakes | governs measurement failure (C1) and the board's stake |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D3 and for the strength-to-rigidity flip |
| 12 The Bond | comparison, goal, isomer, functional group | governs what "maximize" and "balance" can state |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop on normative weights |
| Operators table | ⋛ comparison between two quantities; ¬ negation | "balance" is a family of comparisons, not a single bond |
| Symbols table | R is the aim; the ground is the anchor | no R is stated by either option as posed |

**Strain test applied during this census.** An early attempt to apply Fig 13's six physical substrate terms (space, time, energy, spectrum, gradient, network) directly to corporate governance only fit by calling capital "energy" and stakeholder influence a "gradient." That is a strain, so Fig 13 does **not** govern the governance content. It is sent to the honest-stop role only (section 6, strain S3). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about governance, `grounded` only if settled by a measurement. None is `grounded`.

### F1: A single-slot objective fails the anchor test for the whole question

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 1 and Fig 2, low overlap: per-slot residual vs anchor legitimacy).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)

Option A keeps the capital slot's residual visible and discards the signal that says where other relations are failing. It is not wrong about the capital slot; it is wrong to promote that slot's anchor to the whole union. The question names the other parties, so the question is constitutively about them (Fig 2 :36). A market price settles what shareholders received; it cannot settle what workers or communities received, because those are axes it does not measure (Fig 2 :37-38).

**Refuter:** a prospective, per-firm study in which a single shareholder-return measure predicts, in advance and without pooling, which named stakeholder relation will fail next and why. If it does, F1 is false.

**World bearing (secondary only):** Friedman 1970 writes that *"a corporate executive is an employee of the owners of the business"* whose *"primary responsibility is to them."* Read via a public full-text reproduction, 2026-11-22. This **conflicts** with Fig 2 :36 as a total anchor. The conflict is returned to the census, not used to flip the verdict; re-census R1 in section 6 re-maps it to D2, where its market reading is a legitimate instrument for the capital slot. Jensen 2001 argues that *"purposeful behavior requires a single‐valued objective function"* and that with no clear score *"stakeholder theory effectively makes managers unaccountable for their actions"* (RePEc abstract, opened 2026-11-22). That is a claim about decision coherence, a different quantity from diagnostic residual indexing (re-census R2).

### F2: "Balance" as a blended score repeats the same aggregation error

**Mode: `specified`. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap: signal loss vs union structure).**

> **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."** (Fig 1 :28)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

A composite stakeholder score with two dozen indicators is the Balanced Scorecard objection Jensen raises, and it fails the figure test for the same reason a firm-level average fails: it is a pooled reading (Fig 10 :26, *"saturated metrics, pooled readings"*). When the score falls, the board still cannot tell which slot lost contact. "Balance" is figure-licensed only if it means keeping the verdicts separate, not combining them.

**Refuter:** an aggregate stakeholder index that preserves, per decision, which single slot's residual grew and would have flagged that slot before the aggregate moved. If such an index exists and pays at the ground, F2 weakens to a warning rather than a prohibition.

### F3: The stakeholders are a habitat to be enumerated, not ranked by a standing list

**Mode: `specified`. Domain D3. Status: triangulated (Fig 11 and Fig 9, low overlap: habitat enumeration vs residual-selected habitat).**

> **"The habitat is enumerated, never composed."** (Fig 11 :43)
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** (Fig 11 :44)
> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"R's own predicates name the habitat that holds φ*"** (Fig 9 :26)

The parties in the question are not a fixed priority list. They are the habitat enumerated from the residual: direct contacts (wages, price, supply terms, local effects) and then second-order contacts (a supplier's own labour conditions, a community's health effects returning as regulation and litigation). Contact cascades (Fig 11 :52-53): scoping the habitat to direct suppliers is how a firm misses the effect three steps out. The world corroborates the shape: the Business Roundtable 2019 statement commits to *"Delivering value to our customers," "Investing in our employees," "Dealing fairly and ethically with our suppliers,"* and *"Supporting the communities in which we work,"* which is an enumeration of the habitat, not a ranking of it. That is a `specified` corroboration of shape only, from a business source with a declared interest.

**Refuter:** a fixed priority ordering of stakeholder claims that survives a documented change of the firm's residual and still pays at the ground. If one is found, "no standing list" is false for this domain.

### F4: A return metric that becomes the target stops measuring the thing

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 1, plus a low-overlap world witness from measurement theory).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

When shareholder return is made the objective and the compensation trigger, the channel from the firm to what actually pays degrades: stale readings, dropped signals, saturated metrics, pooled readings. The result is not a wrong verdict on the world but a lost channel, *"you have lost touch"* (Fig 10 :28). The low-overlap witness is Goodhart's law, read from a Cambridge DAMTP page 2026-11-22: *"Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes."* The popular form is attributed there to Strathern: *"When a measure becomes a target, it ceases to be a good measure."* This is an independent field (monetary economics and audit studies), so it corroborates the mechanism rather than sharing the strategy evidence pool.

**Refuter:** a governance metric that remains discriminating, per firm and in advance, after a decade in which it was the sole compensation target. If one exists, the saturation claim is too broad.

### F5: Internal agreement about purpose is not a verdict

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 7 and Fig 2, low overlap: selection between rooms vs anchor triangulation).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)

A board that keeps appointing the same kind of director, the same kind of committee and the same kind of metric is handing itself the same room. Investor consensus, analyst consensus and ESG-rating consensus are rooms too. None is an anchor. This is the figure-grounded reading of "governance washing": not that a stakeholder pledge is necessarily false, but that agreement about the pledge does not settle what the firm did.

**Refuter:** a governance decision validated by a genuinely independent, low-overlap anchor after board and investor agreement, where the anchor measured what each party actually received. Agreement alone never satisfies this; a ground reading does.

**World bearing:** Bebchuk and Tallarita, *Will Corporations Deliver Value to All Stakeholders?*, Vanderbilt Law Review 75:1031 (2023), opened 2026-11-22, report that *"our findings support the view that the BRT Statement was mostly for show and that BRT Companies joining it did not intend or expect it to bring about any material changes in how they treat stakeholders."* That is a source-discriminating result: the pledge and the governance documents disagree, so the pledge cannot be read as the source of stakeholder treatment. It corroborates F5 and the source rule of `05_what_shape_means.md` section 4.

### F6: Renewal of reach requires contact with a differing closure

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, three distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

A board can optimize inside its own model of value forever and never add an atom. To keep paying any slot over time, its reach must be expanded by contact with frames whose closures differ: workers on the shop floor, customers who leave, entrants, regulators, adjacent technologies, science. These are not distractions from the core; they are the only operators that move the wall. This is C2 of section 1.3.

**Refuter:** a firm that renews its reach solely by composing inside its own closure, with no new atom entering from a differing closure, and still passes the ground test across a change of habitat. That breaks idempotence and F6 with it.

### F7: The arrangement that delivered returns can change sign

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

A governance arrangement that produced returns (a cost programme, a supply contract, a buyback) is a catalyst if it regenerates across uses and a spent part if it does not, and nothing in its description records which. When the residual changes, the formerly winning arrangement can become the thing that prevents the next win. The low-overlap witness is social-ecological resilience: MathisonSlee et al. 2022, *Ecology and Society* 27(3):8, read 2026-11-22, describe a *"rigidity trap"* in which a system becomes *"highly connected, rigid, and inflexible"* and loses *"capacity for novelty"*, with a *"decrease in adaptive responses to shocks."* That is Fig 12 :119 and Fig 7 :36 in a field with no shared evidence pool with corporate governance.

**Refuter:** a governance arrangement whose measured valence is invariant across a documented change of the firm's residual. If none can be found anywhere, F7 weakens to `general`.

### F8: Isolation is substitution of a habitat, not removal of one

**Mode: `specified`. Domains all. Status: single-source (Fig 11, with the seat-map restatement as same-framework corroboration, so one witness).**

> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)
> **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat’s actors, which you did not choose."** (Fig 11 :67)
> **"what you failed to reproduce is invisible until the goal fails"** (Fig 11 :68)
> **"what you unintentionally introduced is invisible until it acts"** (Fig 11 :69)

Changing governance form (to private equity, founder control, a benefit corporation, a different jurisdiction) does not remove stakeholder contact; it substitutes a habitat. Two failure modes are silent: what the new form failed to reproduce from the old one, and what new actors it introduced unchosen. This is a `specified` prediction about governance transitions, not an argument against any particular form.

**Refuter:** a governance-form change that demonstrably reproduces every contact the goal required and introduces no unchosen actor, with both claims measured at the ground. That would falsify the substitution claim for this case.

### F9: The break is usually at the middle link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :112 as same-framework corroboration, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** (Fig 3 :26)

In governance terms, the usual failure is not that the board cannot plan; it is that it has no terms for what a changed stakeholder relation affords and cannot say what would count as progress there. More pay-design and committee budget lands above the break (Fig 3 :29-30). F9 predicts that the highest-value diagnostic question is not "is this a good board?" but "at which link does its chain currently stop, and was that measured?"

**Refuter:** a documented board whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That falsifies "usually middle", though not the dependency ordering.

### F10: What survives, with modes attached, and what is a genuine gap

| claim | mode | figure | status |
|---|---|---|---|
| R is per slot, never a single firm score | general | Fig 1 :19, :22, :28 | figure-derived |
| A market is an anchor for the capital slot, not the whole union | general | Fig 2 :29, :36, :37-38 | figure-derived, re-census R1 |
| Scorecard saturation is channel decay, not ground decay | specified | Fig 10 :24, :26; Fig 1 :27 | triangulated F4 |
| Stakeholders are an enumerated habitat with relative valence | specified | Fig 11 :43, :44, :49-51 | triangulated F3 |
| Renewal needs import from a differing closure | specified | Fig 6 :14, :21, :23 | triangulated F6 |
| A formerly winning arrangement can change sign | specified | Fig 11 :50; Fig 12 :119 | triangulated F7 |
| Governance-form change is habitat substitution | specified | Fig 11 :66-69 | single-source F8 |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| "Maximize" states one comparison; "balance" states a family | general | Fig 12 :112; Operators table | figure-derived |
| The break is usually at vocabulary and objective | specified | Fig 3 :19, :26, :27 | single-source F9 |
| Which weights settle a genuine conflict between slots | not stated | none after genuine re-census | **gap**: Fig 9 :32, Fig 13 :134 |
| Whether a corporation "should" maximize anything as a final verdict | not stated | none | **gap**: normative, no instrument in the figures settles it |

The last two rows are not silence. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* The missing thing is a source-discriminating instrument and an imported preference, characterized in effect terms but not held here.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A single shareholder-return measure predicts, prospectively and per firm without pooling, which stakeholder relation fails next (breaks F1, Fig 1 :19 and Fig 2 :36).
2. An aggregate stakeholder index preserves the per-slot diagnostic and pays at the ground (breaks F2, Fig 1 :28 and Fig 10 :26).
3. A fixed priority list of stakeholder claims survives a documented change of the firm's residual (breaks F3, Fig 11 :51).
4. A governance metric remains discriminating after a decade as the sole compensation target (breaks F4, Fig 10 :24-26).
5. Board and investor agreement is shown to be a low-overlap anchor for what parties actually received (breaks F5, Fig 2 :35 and Fig 7 :13).
6. A firm renews its reach purely by internal composition, with no new atom from a differing closure, across a habitat change (breaks F6, Fig 8 :32).
7. A governance-form change reproduces every required contact and introduces no unchosen actor, both measured (breaks F8, Fig 11 :66-69).
8. A derivation inside the figures yields the weights that settle a genuine inter-slot conflict (fills the gap of F10, which would change the verdict from `gap` to `specified`).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a ground reading pays for the shape. Agreement among governance scholars is not such a reading.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of corporate purpose (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep each slot's residual separate in every report. A blended "stakeholder score" is a pooled reading (Fig 10 :26) and destroys the diagnostic (F2).
3. Use the market as the anchor of the capital slot only. Do not promote it to the anchor of the union (Fig 2 :36, F1).
4. Enumerate the habitat from contact, including second-order contacts, and do not rank it by a standing list (Fig 11 :43-44, :51, F3).
5. Treat the board's own stake as structural and declare it (Fig 10 :59-60). An undeclared interest is modelled anyway.
6. Treat any stakeholder pledge as a reading whose source is unestablished until governance documents and realized outcomes agree (Bebchuk and Tallarita 2023; source essay metamerism).
7. Buy independence in proportion to the cost of being wrong (Fig 2 :42). A list of famous governance professors who agree is a convention, not corroboration.
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22, *"Only methods cross up. Only head starts come down."*). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name the weights or declare which party wins a genuine conflict; the framework returns *"you get a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*, all fetched 2026-11-22.

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs the F10 stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Draft planned to answer "balance the stakeholders" directly | **Retracted at record level** | The framework returns a shape, not a name or a weight. The answer is the per-slot procedure, not a prescribed weighting |
| Draft treated Friedman 1970 as straightforward corroboration of Option A | **Conflict, re-census R1** | His "primary responsibility to owners" conflicts with Fig 2 :36 as a total anchor. Re-mapped to D2, where it is legitimate for the capital slot. Verdict unchanged |
| Draft treated Jensen 2001 as a refutation of the whole stakeholder position | **Conflict, re-census R2** | His single-valued objective governs decision coherence, not per-slot diagnostic signal. Different quantities, so no contradiction. Verdict unchanged; the weight gap is confirmed, not filled |
| Draft wanted to call Pareto efficiency the framework's answer on weighting | **Retracted as a witness for the verdict** | It is a low-overlap corroboration that preferences must be imported; it does not supply the preferences. Fig 9 :60: filters are not witnesses |
| Draft applied Fig 13's six-term physical substrate to firm governance | **Retracted, strain S3** | Only fit by renaming capital as energy and influence as gradient. Re-census: Fig 13 governs the honest stop here, not governance content |
| Draft read "the market is an anchor" as settling the whole question | **Narrowed, strain S2** | Fig 2 :36 requires the anchor to be constitutively about the question. The market settles the capital slot; the question names other parties |
| Draft called Fig 11 :51 a `general` law about all corporations | **Narrowed to `specified`** | It is a structural claim; no ground measurement pays for the corporate version here |
| F10 rows on weights and the normative "should" | **Marked `gap` and confirmed** | The shape limit at Fig 9 :32 and the verdict at Fig 13 :134 govern. Unreachable is a verdict |

**Strains sent to the log:** S1 (Jensen vs per-slot indexing), resolved by re-census R2 as different quantities; S2 (market anchor for one slot vs whole union), resolved by Fig 2 :36 and Fig 2 :37-38; S3 (Fig 13 physical substrate applied to governance), resolved by re-census to the honest-stop role. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of contact maintenance (C1) and reach renewal (C2), with a third item, the weights, outside the closure.
2. **What is the anchor?** The market, but only for the capital slot (Fig 2 :29, :36). The question is constitutively about other parties too.
3. **Is the answer in one slot?** No. Fig 1 :19, :22; Fig 2 :36. Per-slot indexing is the only signal that says where contact is failing.
4. **What does "balance" add?** A habitat to enumerate (Fig 11 :43-44), not a weighted blend (Fig 1 :28).
5. **How does a firm keep paying any slot?** By keeping channels reachable (C1, Fig 10 :24-29) and moving reach outward through differing closures (C2, Fig 6 :23).
6. **Why can a good governance arrangement turn bad?** Valence is relative to the residual (Fig 11 :49-51); a catalyst may become spent (Fig 12 :119).
7. **Why not just pick a weighting?** The figures return a shape, not a name (Fig 9 :32); Pareto comparability needs preferences from outside the optimization; there is no instrument here that discriminates among the competing sources of a single profit reading.
8. **What can be said at the stop?** A procedure shape, two conditions with separate instruments, eight falsifiers, and a declared gap. Not the weights, not the final normative "should", not a `grounded` answer.

---

## 8. Updated verdict

The shape survives: **a corporation's decision procedure should keep each slot's residual against its own ground, enumerate the stakeholder habitat from contact rather than ranking it, keep the channel to each ground reachable, and keep moving its reach outward through contact with closures that differ from its own. The verdicts are kept per domain and never averaged. Neither "primarily maximize shareholder returns" nor "balance by aggregating" is figure-licensed as stated: the first promotes one slot's anchor to the whole union and the second discards the per-slot signal.** Which weights would settle a genuine conflict between slots is a `gap`, not a hidden answer, and the normative "should" is not settled by any instrument the figures hold. Mode `specified`. No world source flipped a verdict; the two genuine conflicts (Friedman, Jensen) were returned to the census and re-mapped to different quantities. No unresolved strain remains after re-census.
