# Figure-grounded audit: BUS-0036, competition versus protection as drivers of innovation

**Mode of this document: `specified` on the business application, `general` on the structural shape, `gap` on the numerical balance point. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* No market measurement was taken here, so nothing below is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* And: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the economic question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Also `THE_FORMULA.md`, `FIGURES_README_canonical.md` and `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

**Declared stake (Fig 10 :59 to :60).** *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* The author of the framework has an interest in a business question being answerable by the framework. That interest is in the outcome, not in which value the market returns today, but it is declared. The pre-registered refuter in section 3 is the instrument that keeps the reading from being chosen to fit the stake.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) − o′|` per slot `s` (Formula step 1; Symbols table, `R`). Here:

- **b** is the firm's belief about what research will pay, formed from its own history and inherited priors.
- **a** is what the firm does: invest in R&D, file a patent, enter, price, imitate, exit.
- **Γ(b,a)** is what the firm's library of routines, technicians and prior art predicts will happen.
- **o′** is what the market and the patent office actually return: a granted claim, an adopted product, a price, a share, survival.
- **s** is the firm and the technology slot. R is indexed by firm and by technology, never aggregated into an industry innovation rate.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

The phenomenon to explain is not the level of R&D spending, nor the count of patents. It is the sign and the duration of the gap between what a firm expects its research to pay and what actually pays it, as competitive pressure changes. Observed: under some slot structures more rivalry is followed by more innovation; under others it is followed by less; under some protected regimes research pays for decades; under others it stalls. A frame that predicts one sign everywhere has a residual.

State the residual as: *why does the gap between what a firm's research library predicts and what the market pays stay small under some competitive structures and grow under others, and why does a period of protection sometimes pay for research and sometimes stop producing new readings?* This is an effect description. It names no theory, no "incentive", no "monopoly rent", no "creative destruction". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a set of conditions whose conjunction keeps `R` small per slot, plus an instrument that discriminates a failure of the paying-channel condition from a failure of the reach-renewal condition. It is now bound, so the refuter in section 3 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Two anchors are named in that line that bear here: **a market** settles whether an innovation paid, and **a counter** settles whether a patent was granted. Both do not move when a firm believes harder. Fig 2 :30: *"you push on it, it is not an anchor."* Analyst sentiment, management opinion, R&D spend and patent *citations as a quality proxy* move when pushed; they are instruments at best, and instruments *"can be wrong on axes they do not measure"* (Fig 2 :37-38). Viable anchors: realized market payment per product, and the patent grant as a counted legal event.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation: firm library Γ, competitive structure, research action a, market return o′, indexed by slot s and ordered in time t. It is a sequence rather than a set, so it carries an **ordered** bond (`→`, *"A then B; B needs A to have happened"*, Fig 12 :71-72) and a **comparison** bond for "increase" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: firm and market are not interchangeable, and competition and innovation are not interchangeable.
- **Symmetry.** "Increases" is directional, while a measured correlation between competition and innovation is symmetric. Operators table :15 gives the test for `+`: *"swap the operands. Does the meaning change? No."* For `→` (Operators :33) and for `⋛` (Operators :51) the answer is yes. A symmetric correlation therefore cannot select the arrow. This is the structural reason the literature's pooled correlations cannot settle the question (see F8).
- **Scale.** Three scales are in view: the single firm's R&D loop (Fig 4, one-agent panel), the market population with *"something that ranks what they produce"* (Fig 4 :5), and the time channel across technology cycles. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap `R_T` must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The firm research loop** (one agent, one scale) | research staff, routines, Γ, prior art | investment actions and residual reduction | yes: realized market payment for the resulting product | admitted |
| **D2 The competition habitat** (population) | incumbents, entrants, rivals, customers, regulators | entry, share, price, profit, survival | yes: customer choice and market return; the market as ground (Fig 2 :29). Competition is itself named as a habitat relation in Fig 11 :47 | admitted |
| **D3 The protection and appropriability frame** | patent office, legal system, the firm's IP counsel, the court | granted claims, excluded imitators,appropriable rents | yes: the patent grant as a counted legal event (Fig 2 :29, "a counter"); the *value* of the protection is settled later by the market | admitted, overlaps D2 |
| **D4 The temporal channel** (across technology cycles) | the firm's instruments, metrics, patent counts, percepts | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "Innovation" as a free-floating quantity to be maximized** | none nameable independent of a product | R&D spend, patent count | no: patent count is a counter but not a measure of value; it is an instrument that can be wrong on axes it does not measure (Fig 2 :37-38) | not a domain yet; handled as an instrument, not a ground |
| **X2 Market power as sole cause** | the monopolist | rent | measurable, but already inside D2 and D3 | absorbed, not separate |
| **X3 "The right amount of competition" as a standing number** | none | a percentage | no number is a nameable anchor; the shape is sought, not held | not a domain; bound as a term in section 0 |

X1 fails the anchor test as a free-floating object and is therefore excluded before any figure line is applied to it. This is a structural exclusion, not a claim that patents never matter. It is re-admitted in D3 as a counted legal event, which is a different object.

### 1.3 Partition or union

D1 and D3 overlap: appropriability enters the firm's Γ as an expectation about what research will pay. D2 and D4 overlap: contact with the market is exercised inside the habitat over time. The whole question is a **union**, not a partition.

> **"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."** (Fig 9 :4)
> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

Fig 9 :4 is the decisive census line for this question. The Schumpeterian rule works well on one subset, the Arrow rule works well on another, and the disagreement does not shrink with more effort because each rule is answering a different slot. That is the figure's own signal to split rather than search. The unbundled conditions are:

- **C1, a maintained channel to a ground that still pays.** The firm must be able to read what the market returns, and the market must still be paying for what the firm does. Failure mode: *"stale percepts, dropped transients, saturated metrics, pooled readings"* (Fig 10 :26).
- **C2, renewal of reach through contact with a closure that differs.** The firm's library must meet entrants, adjacent technologies, customers and science. Failure mode: the same closure handed along, *"agreement compounds, evidence does not"* (Fig 7 :12-13).

A firm failing only C1 and a firm failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The Library of Babel essay states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the firm read the market response to a prototype?) → 2 vocabulary (does Γ have terms for what the changed market affords, and for the bond between a patent and a product?) → 3 objective (can it say what would count as progress in this slot?) → 4 planning (which research path) → 5 learn and carry (what method crosses to the next product). The middle link is the one with no instrument in most of the literature: R&D spend is counted, patents are counted, but *terms for what a situation affords* are rarely measured. Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it, and that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* Most policy effort lands above the break, where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed; refuses an industry innovation rate as the object |
| 2 The Ground | market and counter are named anchors; independence vs common pool; correlation has valence | governs the anchor and the witness rule, and refuses a correlation as an arrow |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; `R_T` | governs scale transfer from a lab to a market |
| 5 Mint Pipeline | three guards as product; MDL bargain; settlement is not a gate | governs R&D as a mint and the role of high profits |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones; debit against independence | governs competition as contact with a differing closure, and the cost of a wrong atom |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs long protection without new readings |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import; independence is one quantity read twice | governs why two frames are needed and why one pool is not two witnesses |
| 9 Leave / Arrive | split rather than search; union vs partition; describe residual first; filters vs witnesses | decisive for the either/or framing |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access; declared stake | governs patent-count proxies and the outreach order |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; competition named as a habitat relation | decisive for per-slot signs |
| 12 The Bond | threshold comparison; two currencies that do not add; catalyst, cycle, isomer | governs the inverted-U and the patent-count versus market-value distinction |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop; not the physical six-term set applied to markets |
| Operators table | `⋛` threshold, `→` ordered, `−` subtraction, `¬` refusal | governs "increase", "high profits above baseline", and the form of a refutation |
| Symbols table | `R` is the aim; the ground is the anchor | governs the residual and the anchor test |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate directly to "market structure" only fit by calling competition a kind of gradient and protection a kind of spectrum. That is a strain, so Fig 13 does **not** govern market structure. Re-census sent Fig 13 to the honest-stop role only (section 6, S1), which is how BUS-0001 handled the same object. No other figure needed a strain after re-census. A second apparent strain, between Fig 11 :49-51 (valence relative to residual) and Fig 2 :29 (a ground that does not update), is dissolved in section 6 S2: one governs an actor's effect on a residual, the other governs what settles a verdict.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about research markets, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The either/or is a union, not one dial (decisive)

**Mode: `general`. Domains all. Status: figure-governed, triangulated (Fig 9 :4 and Fig 11 :49-51, low topical overlap: question splitting versus habitat valence).**

> **"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."** (Fig 9 :4)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)

The question asks which of two levers wins. Fig 9 :4 says that when each rule works well on a different subset, that is not one hard question but several well-formed ones. The two literatures in the field confirm the pattern at the world layer: the Minneapolis Fed survey reports that *"Economic theory has been unable to explain the bond between competition and innovation"* and that *"Theory on the relationship between monopoly and innovation remains unclear"* (Clement 2008, opened 2026-11-22). Clement documents Schumpeter's claim, quoted through Tirole, that *"monopolies are natural breeding grounds for R&D and that if one wants to induce firms to undertake R&D one must accept the creation of monopolies as a necessary evil"*, and Arrow's contrary result, *"The incentive to invent is less under monopolistic than under competitive conditions."* Both are reported in the same article, and neither is presented as having won. That is the world's version of Fig 9 :4, not a tie to be averaged.

**Refuter:** a single competition or protection measure that predicts innovation monotonically in the same direction, prospectively, across all technology slots against an independent ground. If one exists, F1 is false. A retrospective pooled correlation does not fire it, because a correlation is symmetric (F8).

### F2: Innovation must stay indexed per firm and per technology slot

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

An aggregate "competition increases innovation overall" is the wrong object. It averages the slot where rivalry pays (a neck-and-neck race) with the slot where rivalry destroys the return (a laggard that cannot catch up). Aghion, Bloom, Blundell, Griffith and Howitt 2005 report *"strong evidence of an inverted-U relationship using panel data"* and a model in which *"competition discourages laggard firms from innovating but encourages neck-and-neck firms to innovate"* (abstract, RePEc, opened 2026-11-22). That is two signs in one dataset. A single average hides the only signal that says which slot is failing. The specified consequence: any claimed answer that is an industry-level average has already thrown away the diagnostic.

**Refuter:** an averaged industry statistic that predicts, prospectively and per named slot, which firm's research will stop paying next. If one exists, F2's methodological consequence is false.

### F3: The market and the counter are the anchors; high profits are a gate, not the ground

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 2 and the Formula settlement step, low overlap: anchor rule versus loop settlement).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"you push on it, it is not an anchor."** (Fig 2 :30)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)

`THE_FORMULA.md` step 5 is explicit: *"SETTLE the ground settles it. Verified only by what pays. A gate is not the ground."* Protection is a gate. It changes the conditions under which a firm may keep the return, but it cannot itself make the return real. A patent grant is a counted legal event (a legitimate anchor for "was a claim granted"), and it is an instrument, not the ground, for "did the research pay". The Schumpeterian argument, as Clement reports it, treats market power as the *necessary evil* that induces R&D. Under the formula, that is a claim about a gate being mistaken for a settlement. The gate is necessary for the firm to appropriate, but only the market pays. This is not a refusal of protection; it is a refusal to call protection the ground.

**Refuter:** a documented case where a firm's research keeps paying for a product after the market has demonstrably stopped paying for that product, with the channel severed and no new protected product. If it survives, F3 is false.

### F4: Research is a mint, gated by a product of three guards

**Mode: `specified`. Domain D1. Status: triangulated (Fig 5 and the Formula mint step, same framework but distinct roles: pipeline versus compact loop).**

> **"The three guards are a product, not a checklist."** (Fig 5 :33)
> **"Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."** (Fig 5 :41)
> **"The acceptance test is a bargain, not a threshold."** (Fig 5 :42)
> **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."** (Fig 5 :43)
> **"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."** (Fig 5 :48)

A research project is a candidate term φ. Its guards are SUPPORT (is there positive residual mass in this slot?), REACHABILITY (is it composable from the firm's Γ?), and NOVELTY (is it not already in the library?). The bargain is `cost(φ) + left(R,φ) < cost(R)`: the new product plus what remains unexplained must cost less than the puzzle it removes. High profits enter *after* the mint, at settlement, not as a guard. Fig 5 :29-31 names the result when the guards are all satisfied but nothing is new: *"nothing new here... the machinery worked; the answer was already known."* That is the figure-grounded reading of research spending that produces incremental patent counts without a new product.

**Refuter:** a research program whose three guards all measure high, whose new term is admitted and paid by the market, and which nevertheless returns no new product. Under Fig 5 :48 that should be impossible; if observed, F4 weakens.

### F5: Competition is the contact with a differing closure, and it is debited against independence

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 6 and Fig 8, low overlap: wall-moving operator versus union surplus).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Import from a live peer is debited against that frame’s independence. A wrong atom costs more than starting from primitives."** (Fig 6 :24)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)
> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."** (Fig 8 :51)

Competition is the habitat's way of putting a firm in contact with closures that differ from its own: entrants, adjacent technologies, demanding customers, foreign producers. That contact is the import that moves the wall; internal R&D alone composes inside the closure and cannot add an atom (Fig 6 :21). This is the figure-derived reason that rivalry can renew reach. But it is not free: an import from a live peer is debited against independence (Fig 6 :24), so a firm that adopts a rival's atom without provenance may gain a product and lose the ability to generate its own next one. The Minneapolis Fed survey reports the empirical side of this: increased competition in shipping, iron ore, cement and ready-mixed concrete was followed by productivity and work-rule changes (Clement 2008), while Gilbert and Newbery showed that an incumbent with entry blockaded has *"an incentive to maintain its monopoly power by patenting new technologies before potential competitors."* Both are the same contact condition read from different sides: remove the differing closure and the incumbent may still patent, but the surplus that needs a differing closure is gone.

**Refuter:** a firm that renews its reach solely by composing inside its own closure, with no atom entering from a differing closure, and that still passes the market test across a habitat change. That breaks idempotence (Fig 8 :32) and F5 with it.

### F6: The valence of competition is relative to the residual

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12 :121, low overlap: habitat relations versus loop structure).**

> **"relations: pollination, predation, competition, dependency"** (Fig 11 :47)
> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)

Competition is named in the figure as a habitat relation, not a kind of actor with a fixed sign (Fig 11 :47). Its valence is relative to the residual: to a firm close to the frontier, rivalry is a benefactor because it supplies the differing closure that renews reach; to a laggard whose residual is about catching up, the same rivalry is a malfactor because it destroys the return before the catch-up pays. Aghion et al. 2005 give the world-layer statement of exactly this: *"competition discourages laggard firms from innovating but encourages neck-and-neck firms to innovate."* Chen and Schwartz 2009 report a further swap: *"This paper shows that the ranking can be reversed for product innovations"* (RePEc abstract, opened 2026-11-22). That is not a contradiction to be averaged; it is Fig 11 :50 observed in a different slot (process versus product). The sign of the loop decides whether it closes (Fig 12 :121).

**Refuter:** a documented competition event whose measured valence is invariant across two different residuals in the same industry (one frontier race and one catch-up problem). If no such sign flip can be found anywhere, F6 weakens to `general`.

### F7: Protection as a room handed along, and the two-factor test

**Mode: `specified`. Domain D4. Status: triangulated (Fig 7 and Fig 10, low overlap: selection between rooms versus channel maintenance).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

A long period of protection is a chain of handoffs. If the same closure is handed along, the firm runs in place: agreement inside the protected room compounds while evidence does not. If either the bracket's fidelity or the ground's pressure goes to zero, progress stops even if R&D spend is high. Gilbert and Newbery's *"patent shelving"* is the figure's mirror chain at the world layer: a patent is acquired but the new technology is not implemented, and the incumbent keeps the room that already pays. Clement reports their claim that *"Preemption need not have adverse consequences for economic welfare"*, which is exactly the two-factor question: preemption can be a real head start or a mirror, and only the ground's vote separates them.

**Refuter:** a firm that keeps the same closure across two decades of protection and yet keeps producing new, ground-verified products without any import from a differing closure. Under Fig 7 :36 that should be impossible; if observed, F7 is false.

### F8: A competition-innovation correlation is symmetric and cannot choose the arrow

**Mode: `general`. Domains all. Status: triangulated (Fig 2 and the Operators table, low overlap: witness rule versus operator symmetry).**

> **"Correlation has valence."** (Fig 2 :39)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)

The Operators table gives `+` the test *"swap the operands. Does the meaning change? No."* (Operators :15) and `→` the test *"swap them. Does it become a different thing? Yes."* (Operators :33). A measured association between competition and innovation is a `+`: it does not say which way the bond runs. Both Schumpeter's direction (protection causes research) and Arrow's direction (research is suppressed by protection) can generate the same correlation. Fig 2 :40 adds the second defect: studies drawing on the same panel of industries and the same patent-count instrument are one evidence pool, so their agreement is the pool talking, not two frames confirming each other. Aghion et al. are careful about this; they identify the effect with a model and two additional predictions rather than with the correlation alone. That is the right shape.

**Refuter:** a symmetric association that nevertheless identifies the direction prospectively without an imported instrument or an exogenous change. If one exists, F8's structural claim is false.

### F9: The balance point is a threshold comparison, and its location is a gap

**Mode: `general` on the threshold structure, `gap` on the number. Domains D2, D3. Status: structure triangulated (Fig 12 :87 and Fig 11 :49-51); number is a declared gap.**

> **"a threshold relation between two quantities"** (Fig 12 :87)
> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"It cannot say which primitive is missing, because naming it would mean already holding it."** (Fig 13 :135)

The inverted-U is a `⋛` comparison: which quantity is larger changes with the level of rivalry. Fig 12 :87 licenses the *form* of a threshold relation. It does not return the location of the threshold. Aghion et al. supply an empirical inverted-U, and the intermediate disturbance hypothesis in ecology supplies a low-overlap shape analogue: *"local species diversity is maximized when ecological disturbance is neither too rare nor too frequent"* (Wikipedia summary of Connell 1978, opened 2026-11-22). Both say there is a middle. Neither licenses a number for a given firm or technology. The number is a `gap` of the shape-not-a-name kind, reported as unreached rather than silence (Fig 8 :39, *"So a search that finds nothing is never a proof of absence."*).

**Refuter:** a figure derivation that returns a numerical competition index at which innovation peaks, with the derivation shown. None of the thirteen figures contains such a quantity. If one were derived, F9's gap would close and this finding would be withdrawn.

### F10: Protection isolates a habitat; isolation substitutes, it does not remove

**Mode: `specified`. Domain D3. Status: single-source on the figure side (Fig 11), with the world case as corroboration.**

> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)
> **"The seat’s power is asymmetric. Introduction is available; exclusion is not."** (Fig 11 :61)
> **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat’s actors, which you did not choose."** (Fig 11 :67)

Protection does not remove competition; it substitutes a different habitat around the same research residual. The firm inherits actors it did not choose (regulators, patent examiners, a closed set of licensees), and the two failure modes are silent: what you failed to reproduce and what you unintentionally introduced (Fig 11 :68-69). Section 6 S2 records the honest limit of this reading: the substitution law governs the habitat, while Fig 2 :29 governs the ground; they are different objects and do not conflict. A test harness is a substituted habitat; a protected market is not a harness, because the market still pays or does not pay at the end.

**Refuter:** a protected regime in which the firm can subtract an unwanted habitat actor at will and thereby restore the original contact set without substitution. Fig 11 :61 says exclusion is not available; if it is, F10 is false.

### F11: Patent counts and market value are two currencies and do not add

**Mode: `general`. Domains D1, D3. Status: triangulated (Fig 12 two-currency rule and Fig 2 instrument limit).**

> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"** (Fig 12 :126)
> **"Summing them into one figure is the error this names, not the fix for it."** (Fig 12 :130)
> **"instruments can be wrong on axes they do not measure."** (Fig 2 :38)

A patent count is a price in bits: it states what was described and claimed. A market payment is a price in actions: it says what the ground paid. A firm holding only the first accounting cannot see the shortfall, and a policy that adds the two into an "innovation index" has made the named error. Fig 5 :48 adds: *"Its own output is never a measure of success."* An R&D department's output is its own output, not a verdict.

**Refuter:** a single measure that converts patent counts and market payments into one additive unit and predicts, prospectively, which research will pay. Under Fig 12 :130 that cannot be done without losing the distinction; if it is done and works, F11 is false.

### F12: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| The question is a union of conditions, not one dial | general | Fig 9 :4, :55, :57 | figure-governed, F1 |
| Innovation is per firm and per technology slot, never an industry average | general | Fig 1 :19, :22 | figure-derived, F2 |
| The market and the counter are anchors; high profits are a gate | specified | Fig 2 :29; Formula step 5 | triangulated, F3 |
| Research is a mint with a product of three guards | specified | Fig 5 :33, :41, :43 | triangulated, F4 |
| Competition is contact with a differing closure, debited against independence | specified | Fig 6 :21, :23, :24; Fig 8 :45 | triangulated, F5 |
| Competition's valence is relative to the residual | specified | Fig 11 :47, :49, :50, :51 | triangulated, F6 |
| Long protection hands the same room along unless the ground votes | specified | Fig 7 :12, :35, :36, :37-39 | triangulated, F7 |
| A competition-innovation correlation cannot choose the arrow | general | Fig 2 :39, :40; Operators :15, :33 | triangulated, F8 |
| The balance point has a threshold shape; its number is not returned | general / gap | Fig 12 :87; Fig 9 :32; Fig 13 :134 | F9 |
| Protection substitutes a habitat, it does not subtract competition | specified | Fig 11 :61, :66, :67 | single-source, F10 |
| Patent counts and market payments do not add | general | Fig 12 :125, :126, :130 | triangulated, F11 |
| Which specific competition level wins in a named industry | not stated | none | gap: framework returns a shape, not a number |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A single competition or protection measure predicts innovation monotonically in the same direction across all technology slots, prospectively, against an independent ground (breaks F1, Fig 9 :4, and F6, Fig 11 :49-51).
2. A firm renews its reach solely inside its own closure, with no atom from a differing closure, and still passes the market test across a habitat change (breaks F5, Fig 6 :23, Fig 8 :32).
3. A firm's research keeps paying after the market stops paying for the product and the channel is demonstrably severed (breaks F3 and F7, Fig 10 :24, Fig 2 :29).
4. A patent grant is shown to move the reach, adding an atom, rather than only settling a term and keeping a gate open (breaks the settlement/gate distinction, Formula step 5, Fig 6 :21).
5. A competition event has invariant valence across two different residuals in the same industry (breaks F6, Fig 11 :50).
6. A single lever restores both the paying-channel condition and the reach-renewal condition with no categorically different residue (breaks F1 and the union, Fig 9 :57).
7. Fig 6's idempotence fails inside a closed set, or one of the thirteen figures is derived from the others (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of industrial organization (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Split the question before answering it. Report the two conditions C1 and C2 separately; a blended "competition boosts innovation by X percent" is a pooled reading (Fig 10 :26) and destroys the diagnostic (Fig 9 :4, :55).
3. Keep the sign per slot. Do not say "competition increases innovation"; say which residual the competition event is ranging against (Fig 11 :49-51).
4. Treat patent counts as an instrument, never as the ground. Ask what the market paid (Fig 2 :37-38, Fig 12 :125-130).
5. Use the economics literature as one corroborating witness and as a budget filter, not as the verdict. Aghion et al., Clement's survey and Chen and Schwartz share a broad evidence pool (Fig 2 :31, :40).
6. An externality or a spillover is a habitat relation, not a corruption to be averaged away. Enumerate it (Fig 11 :43-48) before choosing a lever.
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name a competition index or a patent term length as *the* answer; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the two essays *The Library of Babel* and *The Recursive Self-Improvement Trap* (both opened 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs F9's gap.
- *The Library of Babel* confirms the union stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* and the shape limit: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*
- *The Recursive Self-Improvement Trap* confirms the simulation status and the stake rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term physical set to market structure and market power | **Retracted, strain S1** | Only fit by renaming rivalry as a gradient and protection as a spectrum. Re-census: Fig 13 governs physical primitives; here it serves only the honest-stop role |
| Read "competition increases innovation" as one causal question with two opposite answers | **Retracted as partition, kept as union** | Fig 9 :4 says a disagreement that does not shrink, with each rule working on a different subset, is several questions. Split rather than search |
| Treated high profits as the cause of innovation | **Narrowed to a gate, not the ground** | Formula step 5: *"A gate is not the ground."* Protection changes appropriability; the market pays |
| Treated the Aghion inverted-U as the framework's answer | **Retracted as a verdict; kept as world corroboration of the threshold shape** | Fig 9 :32 returns a kind of thing; Fig 13 :134 makes unreachable a verdict. The number is a gap |
| Read Chen and Schwartz's reversal as a conflict that should flip the verdict | **Conflict returned to census, not flipped** | Fig 9 :4 again: product innovation is a different slot. Per-slot valence (F6) absorbs it without changing the union verdict |
| Wanted to call F6 a `general` law about all competition | **Narrowed to `specified`** | Fig 11 :49-51 is structural, but no market measurement here pays for the firm-level version |
| Used the IDH ecology analogue as evidence about firms | **Narrowed to mechanism-shape corroboration** | Fig 4 :20 requires the anchor to be renamed at the new scale; it corroborates the threshold form, not the industry number |
| Wanted to count patent applications as the innovation ground | **Retracted; kept as instrument** | Fig 2 :29-30 anchor test; Fig 2 :38 instruments can be wrong on unmeasured axes; Fig 12 :130 forbids adding the currencies |
| F1 "decisive" in an early draft | **Downgraded to figure-governed and triangulated** | Fig 9 and Fig 11 are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 physical substrate versus market structure) dissolved by re-census into the honest-stop role; S2 (Fig 11 :49-51 valence relative to a residual versus Fig 2 :29 non-updating ground) dissolved by re-census into two different objects; S3 (Fig 6 :24 import debit versus F5 competition as reach renewal) kept as a live design constraint, not a defect: renewal and independence are one quantity read twice (Fig 8 :47), so a policy that maximizes imports can spend the independence that made the imports useful. No unresolved contradiction after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question with two answers?** No. Fig 9 :4, :55, :57: the two literatures work on different subsets, so split before searching.
2. **What is the anchor?** The market and the counter, both named in Fig 2 :29. Not R&D spend, not patent quality proxies, not analyst sentiment (Fig 1 :27, Fig 2 :38).
3. **Is the answer in the firm alone?** No. Fig 11 :39-40: capability is agent-and-habitat. The competitive structure is part of the habitat (Fig 11 :47).
4. **What does competition do when it helps?** It supplies contact with a differing closure, the only operator that moves the wall (Fig 6 :23), but it is debited against independence (Fig 6 :24).
5. **What does protection do when it helps?** It keeps a gate open so the market can settle a mint that has a fixed cost (Formula step 5, Fig 5 :43). It does not itself settle.
6. **Why does the sign flip?** Valence is relative to the residual (Fig 11 :49-51). The same rivalry is a benefactor to a frontier race and a malfactor to a catch-up problem. The threshold is a `⋛` comparison (Fig 12 :87).
7. **What can be said at the stop?** A union of two conditions, a per-slot sign rule, an instrument that would discriminate the failures, and seven falsifiers. Not a competition index, not an optimal patent term, not a `grounded` answer. *"Unreachable is a verdict here, not a silence,"* (Fig 13 :134) and *"So a search that finds nothing is never a proof of absence."* (Fig 8 :39).

---

## 8. Updated verdict

The shape survives: **competition and protection are not opposite ends of one dial. They answer two different conditions in a union. Competition supplies contact with a differing closure and can renew a firm's reach, at a debit against independence; protection keeps a gate open so the market can settle a research mint whose fixed cost needs time. Neither is the ground; the market and the count of granted claims are the anchors, and only the market pays. The sign of competition is relative to the residual, so it encourages a neck-and-neck race and discourages a laggard catch-up; its aggregate is a filter for the budget, never a witness for the verdict. The balance point has a threshold form but no number here.** Verdicts are kept separate per domain and never averaged. World evidence corroborates the union and the sign flip; the one genuine world conflict (Chen and Schwartz's reversal for product innovations) was returned to the census and re-mapped to a different slot, and did not flip the verdict. Mode `specified` on the per-domain claims, `general` on the structural shape, `gap` on the numerical balance point. No unresolved strain remains after re-census.
