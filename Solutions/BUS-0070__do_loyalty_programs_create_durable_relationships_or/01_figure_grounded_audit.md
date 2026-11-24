# Figure-grounded audit: BUS-0070, loyalty programs and durable relationships

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Every quote below was checked as an exact substring of that extract before writing. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the firm's belief about a customer, formed from that customer's own history: points accrued, tier reached, past response to offers (Symbols table, `w`: belief leans on private history and inherited prior).
- **a** is what the firm does through the program: award points, grant status, send a targeted discount, open a redemption.
- **Γ(b,a)** is what the program's library predicts will happen: repeat purchase, share of wallet, retention, redemption.
- **o′** is what the customer actually does: buy again, switch to a rival, split the wallet, redeem and leave.
- **s** is the customer. R is indexed by customer and by time, never averaged into a program-level "members versus non-members" number.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the level of repeat purchasing but **the duration for which a customer-slot keeps a low residual, and what that slot does when the program instrument is removed or a rival changes its bracket**. Call it `D_s`, the persistence of a low-residual customer slot. A frame that predicts all program members are equally durable, or that an achieved repeat purchase simply persists, has a residual here.

Stated as an effect: *why does the gap between what a program predicts a customer will do and what the customer actually does remain small for years in some slots and grow quickly in others, and is that small gap maintained by contact with what the customer values or by the program's own points, tiers and discounts?* The description names no theory, no "switching cost", no "habit", no "engagement", no "relationship". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction keeps `D_s` large, plus an instrument that discriminates a failure of one condition from a failure of the other. The two candidates are:

- **C1, contact maintained:** the low residual would survive removal of the program instrument and a change of competitive habitat, because contact with what the customer values changed.
- **C2, channel maintained:** the low residual lasts only while points, tiers and discounts keep the bracket matched to behaviour; remove or match them and the purchase moves to a rival.

Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"you push on it, it is not an anchor."*

- Viable anchor: **revealed choice under a discriminator**, for example a randomized or natural removal of the program with per-customer follow-up, plus market-recorded switching and discount flows. A market is explicitly a named anchor.
- Not an anchor: enrollment rates, redemption rates, points liability, repeat-purchase rate as reported by the program. These move when the firm pushes on them and are produced by the frame being scored (Fig 1 :27). They are frame-internal quantities.
- Not an anchor: a self-reported "relationship" score. It moves with how the question is asked, so it is an instrument at best, and instruments can be wrong on axes they do not measure (Fig 2 :37-38).

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: firm Γ, action a, customer response o′, indexed by slot s and ordered by time t. It is a sequence rather than a set, so it carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "loyal" as a share-of-wallet threshold (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87; Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*). It is not symmetric: the firm and the customer are not interchangeable, and the anchor does not update on the firm's opinion (Fig 2 :25).
- **Symmetry.** "Superior" or "loyal" is a threshold relative to alternatives, not an absolute quantity (Fig 12 :85-89). Persistence is asymmetric in time: a customer lost to a rival's reward is not recovered by reversing the firm's own action (Fig 12 :72).
- **Scale.** Three scales are in view: the single customer's step-by-step loop (Fig 4 one-agent panel), the firm's customer population with *"something that ranks what they produce"* (Fig 4 :5), and the market of competing programs across time. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The customer choice loop** (one agent, one scale) | the customer, their Γ (needs, habits, history), the program instrument | reward earned versus need met | yes: revealed choice under a discriminator, measured per customer | admitted |
| **D2 The firm measurement frame** (CRM, ledger, analytics) | analysts, metrics, points ledger, tier status | enrollment, redemption, points liability, repeat rate | **no** anchor independent of the program's own ledger. *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* (Fig 1 :27) | **not a domain**; admitted only as a frame inside D1 |
| **D3 The competitive market habitat** (population) | firms, rival programs, customers, entrants, regulators | share of wallet, switching, discounts, retention | yes: customer choice across firms, *"a market"* as named anchor (Fig 2 :29) | admitted |
| **D4 The temporal channel** (across years) | instruments, metrics, tier progress, points balance | contact with actual preference | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 Attitudinal loyalty as a free-floating property** | the respondent | a survey score | **no** anchor independent of what the respondent says when pushed | not a domain yet |
| **X2 "The program is the relationship"** | the program | program metrics | the metrics are produced by the frame (Fig 1 :27); already inside D1/D2 | absorbed, not separate |

X1 and D2 fail the anchor test and are excluded before any figure line is applied to them. This is a structural exclusion, not a claim that customer attitudes never matter or that program data are useless. It says they cannot decide the verdict.

### 1.3 Partition or union

D1 and D2 overlap: the program instrument sits inside the customer's choice loop, so their overlap is a compound with its own loop. D3 and D4 overlap: competition is exercised through the temporal channel, so that overlap is a second compound. The whole question is a **union, not a partition**.

> **"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset,"** (Fig 9 :4)
> **"are not one hard question but several well-formed ones. Split it rather than search."** (Fig 9 :5)
> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The offered either/or is itself a bundled union. Some customer-slots are contact-based (C1), some are instrument-based (C2), and a third class is neither: habit, switching costs or a lack of alternatives, which the sibling question BUS-0064 names. A slot failing only C1 and a slot failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The Library of Babel essay states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the firm read what the customer actually does, rather than what the ledger says?) → 2 vocabulary (does Γ have terms for what the customer affords beyond points and tiers?) → 3 objective (can it state what progress would count as: durable contact, or redemption?) → 4 planning → 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Effort lands on earn and redemption metrics because those measurements already exist (Fig 3 :29-30). Fig 12 :112 adds: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* A vocabulary with only points and redemptions can say what a program contains and cannot say whether contact improved.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; program metrics are frame-internal | governs indexing and the exclusion of D2 |
| 2 The Ground | market is a named anchor; independence versus common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs customer-to-firm-to-market scale transfer |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs whether a program term could be admitted |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs C2: internal recomputation cannot renew reach |
| 7 Room Chain | same closure handed along; fidelity times ground pressure | governs persistence as a sequence of handoffs |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs low-overlap witnesses and the source gate |
| 9 Leave / Arrive | union versus partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick shifting (C2 failure) |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1 and D3 |
| 12 The Bond | catalyst, cycle, isomer; arrangement is the substance | governs why a retention device changes sign |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop only |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "customer assets" only fit by calling points a kind of energy and tier progress a kind of gradient. That is a strain, so Fig 13 does **not** govern loyalty-program mechanics. Re-census sent Fig 13 to the honest-stop role only (section 7, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about programs and customers, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Program metrics are frame-internal and cannot decide the verdict

**Mode: `general` with a `specified` consequence for method. Domains D1, D2. Status: triangulated (Fig 1 and Fig 2, low overlap: agent metric rule versus anchor rule).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)

Enrollment, redemption, points liability and the member repeat rate are produced by the program. A program that reports its own success with its own ledger is a frame scoring itself with a quantity it also produces. The business record shows the size of this error. Leenheer, van Heerde, Bijmolt and Smidts (2007) write: *"Loyalty program members may have a much higher share-of-wallet at the firm with the loyalty program than non-members have, but this does not necessarily imply that loyalty programs are effective."* They find *"a small positive yet significant effect of loyalty program membership on share-of-wallet. This effect is seven times smaller than is suggested by a naïve model that ignores the endogeneity of program membership."* The naive model is exactly F1's frame scoring itself.

**Refuter:** a program-internal metric that predicts prospectively, per customer, which slots keep a low residual after the program is removed, with provenance showing it does not derive from the program's own ledger. If such a metric exists, F1's methodological consequence is false.

**World bearing:** Delfabbro and King (2020), in a different field, report the same self-selection caution: *"it is not clear whether loyalty program membership is necessarily causally related to problem gambling. Regular gamblers may sign up to loyalty programs just because they are available"*. Low overlap with marketing, so it corroborates the structure with an independent evidence pool.

### F2: The either/or is a union compound and must be unbundled

**Mode: `general` for the structure, `specified` for the business application. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal so the external witness count is one).**

Fig 9 :4, :5, :54, :55 and :57 are quoted in section 1.3. The two conditions C1 (contact maintained) and C2 (channel maintained) have different instruments:

- A C1 failure shows up as a low residual that collapses when the program is removed or a rival enters, while preference measurement is unchanged (Fig 2 :29, Fig 11 :39).
- A C2 failure shows up as purchase and discount movement that tracks points, tiers and reward qualification rather than any change in what the customer values (Fig 10 :24-26, Fig 7 :12).

A single lever, for example "increase points", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). The world corroborates that slots differ. Liu (2007) reports that *"consumers who were heavy buyers at the beginning of a loyalty program were most likely to claim their qualified rewards, but the program did not prompt them to change their purchase behavior. In contrast, consumers whose initial patronage levels were low or moderate gradually purchased more and became more loyal to the firm."* Different starting Γ, different result. The findings *"suggest a need to consider consumer idiosyncrasies when studying loyalty programs"*.

**Refuter:** a single intervention that restores both conditions in both failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F3: A repeat purchase is a reading, not a source; the framework returns a shape

**Mode: `general` for the limit, `specified` for the business application. Domains D1, D4. Status: triangulated (Fig 9 and the source essay, low overlap between figure limit and metamerism argument).**

> **"your words are borrowed too, so describe the effect"** (Fig 9 :30)
> **"rather than the cause"** (Fig 9 :31)
> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)

From *The Hard Problem is About Source*, read directly: *"You can have several underlying causes that create identical readings but the definition of the output would be read as the same."* And: *"the instrument is speaking only about what it measured, it cannot comment on the source."* And: *"The answer is unreached until a better instrument exists."*

A repeat purchase is a reading. It is consistent with a changed real preference, a points balance, a sunk-tier effect, a habit, a switching cost, or a lack of alternatives. The reading does not determine the source. Sibling question BUS-0064 names three of those sources explicitly. What the answer can state is the shape any candidate answer must have (C1 and C2), not which source occupies a given slot. Averaging across slots is how the discriminator disappears (Fig 1 :22).

**Refuter:** an instrument that, per customer, discriminates among genuine preference change, points-driven response, habit and lack of alternatives, and whose classifications survive a program removal. Until one exists, naming the source from the reading is the metamerism error.

### F4: Quick shifting is channel behaviour, not decay of the ground

**Mode: `specified`. Domain D4, with D3. Status: triangulated across three figures and two independent world fields (Fig 10 ground maintainer, Fig 7 room chain, Fig 6 closure; economics and marketing with low overlap).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients,"** (Fig 10 :25)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)

A customer moving to a rival after a better reward does not show that what they value decayed. It shows the channel went stale, saturated or was matched. Fig 7 gives the two-factor form:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

The world corroborates at two different strata. Khodakarami, Petersen and Venkatesan (2024) find that *"a customer’s purchase probability at the focal firm decreases after they qualify for a reward independent of redemption at a competing firm (competitive mere reward qualification) and after they redeem a reward at a competing firm (competitive rewarded behavior)"*, and conclude that *"customer progress toward a goal in a loyalty program is influenced by competing loyalty programs."* That is purchases shifting among firms, measured in a marketing field. Klemperer (1995), in economics, gives the competitive mechanism: *"In a market with switching costs (or 'brand loyalty'), a firm's current market share is an important determinant of its future profitability."* He examines *"the firm's choice between setting a low price to capture market share, and setting a high price to Harvest profits by exploiting its current locked-in customers"* and discusses *"introductory offers and price wars"*. That is discounts shifting among firms. The two sources share no evidence pool (different disciplines, different data), so this one finding is corroborated across two frames (Fig 8 :47-48).

**Refuter:** a documented case where purchases shift among firms while the channel is independently measured as fresh, unsaturated and unmatched by rivals, and preference measurement is unchanged. If both hold, F4's mechanism is not the cause.

### F5: A durable relationship requires contact with a ground, not internal recomputation

**Mode: `specified`. Domain D3, with D1. Status: triangulated (Fig 11, Fig 6 and Fig 8, distinct roles).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)

A program that recomputes next quarter's offer from this quarter's points ledger stays inside its own closure. It can optimize forever and never add an atom. For a low residual to persist across a change of habitat (a rival enters, a category shifts, a tier is devalued), reach must be renewed by contact with frames whose closures differ: other firms' programs, adjacent categories, entrants, regulators, research. Whether a given program does this is a measurement question, not a claim this derivation makes.

**Refuter:** a program that renews its reach purely by internal composition, with no new atom entering from a differing closure, and whose low residual nevertheless survives instrument removal across a documented change of habitat. That breaks idempotence and F5 with it.

### F6: The retention device can change sign when the residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations versus composition structures).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)

A points balance is a catalyst if it regenerates across uses and a spent part if it does not, and nothing in the program's description records which. The Khodakarami result supplies the flip in measured form: progress toward a reward at one firm predicts *lower* purchase probability at that firm once the reward is obtained, and *higher* purchase probability there when the customer is far from a competing firm's reward (*"competitive stuck-in-the-middle"* and *"competitive effort balancing"*). The same progress that binds a customer can release them. Delfabbro and King (2020), in gambling studies, report that *"At least 40% of problem gamblers reported loyalty card use compared with only around 10% of gamblers in general"*, and that the association survives controlling for gambling frequency, while cautioning about causality. That is the retention instrument's valence changing sign in a field with no shared evidence pool with marketing strategy.

**Refuter:** a program whose measured valence is invariant across a documented change of residual, such as competitor entry or reward devaluation. If no such flip can be found anywhere, F6 weakens to `general`.

### F7: Habits are context-triggered without a mediating goal

**Mode: `general` for the cognition structure, `specified` for the customer application. Domain D1. Status: single-source for the figure reading, with one low-overlap world witness (cognitive science).**

> **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."** (Fig 11 :48)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

Wood and Neal (2007), Psychological Review, write: *"Once a habit is formed, perception of contexts triggers the associated response without a mediating goal."* A repeat purchase can therefore be produced by context cuing, with the goal absent from the mechanism. That is exactly why a purchase reading cannot comment on its source (F3) and why a program ledger, which records the context's output, cannot see the missing goal. This is a low-overlap corroboration of the mechanism, not a customer-level measurement, so it does not decide which program works.

**Refuter:** a customer population in which repeat purchase is invariant across documented context changes and program removal, with goal mediation independently measured as present. That would falsify the application of F7 here, though not the general cognition result.

### F8: Two customers with the same program can still differ

**Mode: `specified`. Domains D1, D3. Status: triangulated for the legality of the reading (Fig 12 and Fig 11 :50, different figures), single-source for the business application.**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :124)

Two customers with the same program exposure, the same points earned and the same tier have the same atoms. If their bonds differ, that is, if one composes the program into a long-run relationship and the other into a short-run reward chase, they are **isomers** under Fig 12 :117: same atoms, different bond, different behaviour, with the difference invisible in the program report. If they share only a pattern (enroll, earn, redeem) while differing in what occupies the slots, the weaker **functional-group** claim holds (Fig 12 :124). Liu (2007) supplies the world instance: heavy buyers claimed rewards without changing behaviour, light and moderate buyers gradually increased purchasing. Same program, different arrangement relative to starting Γ.

**Refuter:** two customers with identical atoms and identical bonds whose persistence diverges with no difference in contact or imported atoms. That would move the explanation out of composition and into habitat alone.

### F9: Never answer this question with an average across customers

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A statement such as "members spend 20 percent more" is produced by the frame and pooled across slots (Fig 10 :26, *"saturated metrics, pooled readings"*). It is a filter for where to look and a budget instrument, not a witness. Leenheer's sevenfold gap between the naive and corrected effect is the numerical form of this error. The specified consequence: any claimed answer to BUS-0070 that is an average across customers has already thrown away the signal that says which slot is losing contact and where.

**Refuter:** an averaged program-level statistic that predicts prospectively and per customer which named slot will keep a low residual after program removal. If one exists, F9's consequence is false.

### F10: Conflict between the world literature and the figures, and how it was resolved

**Mode: `general`. Status: figure-governed.**

Bolton, Kannan and Bramlett (2000) report that loyalty program membership and service experiences bear on retention and value (bibliographic record and title from the reference list of Khodakarami et al. 2024; full text not opened), and the broad marketing literature tends to treat "loyalty" as an attitude the program builds. Read as an agent-only property, that conflicts with Fig 11 :40. A conflict between world and figures sends the derivation back to the census; it never flips the verdict. Re-census R2 in section 7 resolves it: "attitude" is mapped to a term in the customer's Γ, the library operand inside D1, and its stability is re-read as a channel state that has not met a differing closure. Under that mapping the attitude literature corroborates the channel domain, not the contact claim, and carries no verdict weight until a source gate and shadow test are supplied (Fig 6 :23; Fig 8 :51).

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per customer, never a program average | general | Fig 1 :19, :22 | figure-derived |
| The market is the anchor, not program metrics | general | Fig 2 :29; Fig 1 :27 | figure-derived |
| Program metrics are frame-internal | general + specified method | Fig 1 :23, :26, :27 | triangulated F1 |
| The question is a union of contact and channel | general + specified | Fig 9 :4, :5, :54, :55, :57 | figure-derived, F2 |
| A purchase reading does not name its source | general | Fig 9 :30, :31, :32; source essay | triangulated F3 |
| Quick shifting is channel failure, not ground decay | specified | Fig 10 :24, :25, :26; Fig 7 :37-39 | triangulated F4 |
| Durability needs contact renewed from a differing closure | specified | Fig 11 :39, :40; Fig 6 :14, :21, :23 | triangulated F5 |
| The retention device changes valence with the residual | specified | Fig 11 :49-51; Fig 12 :119, :121 | triangulated F6 |
| Habit can produce the reading with no mediating goal | general + specified | Fig 11 :48; Wood and Neal 2007 | single-source figure, one low-overlap witness |
| Two customers with the same program can be isomers | specified | Fig 12 :5, :117, :124 | triangulated for legality, single-source for business |
| Which program, which customer, what fraction | not stated | none | `gap`: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A program-internal metric predicts prospectively, per customer, which slots keep a low residual after program removal, with provenance showing it does not derive from the program's own ledger (breaks F1, Fig 1 :27).
2. One intervention restores both contact and channel in both failure types and leaves no categorically different residue (breaks F2, Fig 9 :57).
3. An instrument discriminates among genuine preference change, points response, habit and lack of alternatives per customer, and its classifications survive program removal (breaks F3 as a `gap`; this is the one outcome that would move the answer toward `grounded`).
4. Purchases shift among firms while the channel measures fresh, unsaturated and unmatched, and preference measurement is unchanged (breaks F4, Fig 10 :24-26).
5. A program renews reach purely by internal composition, with no atom from a differing closure, and its low residual survives instrument removal across a change of habitat (breaks F5 and Fig 8 :32 idempotence).
6. A program's measured valence is invariant across a documented change of residual (breaks F6, Fig 11 :49-51).
7. An averaged program-level statistic predicts prospectively which named slot will lose contact next (breaks F9's methodological consequence).
8. Fig 6's idempotence fails inside a closed set, or a seventh physical substrate term is derived from the six (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of loyalty (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep C1 and C2 separate in every report. A blended "engagement score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund earn-mechanics work above the break.
4. Treat any list of program features as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Describe the residual before selecting a frame (Fig 9 :28, *"any frame you pick will seem to fit"*). Do not begin with "relationship marketing" or "switching costs" as the explanation.
6. Use the marketing literature as one corroborating witness and as a budget filter, not as the verdict. Leenheer, Liu and Khodakarami share one evidence pool (Fig 2 :31, :40). Klemperer (economics) and Wood and Neal (cognition) are the low-overlap witnesses.
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name which program wins; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*
- The seat map confirms the outreach order: an interest in the outcome is unavoidable, *"an interest in the reading is disqualifying"* (Fig 10 :59). The ask gives the claim a budget to be tried; it does not solicit belief.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term substrate to points and tier progress | **Retracted, strain S1** | Only fit by renaming rewards as kinds of energy. Re-census: Fig 13 governs the physical substrate, not a program's Γ |
| Treated "members spend more" as straightforward corroboration | **Retracted as a witness, kept as a filter** | Leenheer's self-selection and sevenfold gap; Fig 1 :27 and Fig 9 :60 |
| Read program metrics as outright unusable | **Narrowed** | The exclusion is of self-scoring, not of all measurement. A metric that survives a source-discriminating test can be an instrument; it still cannot be the anchor |
| Planned to name "switching costs" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Klemperer's phrase is an economics-pool binding, recorded as such with zero verdict weight |
| Read the question as a partition (A or B) | **Reclassified as a union** | Fig 9 :54, :55, :57; heavy and light buyers behave differently in Liu 2007 |
| Wanted to call Fig 11 :40 a `general` law of marketing | **Narrowed to `specified`** | It is a structural claim; no program-removal measurement pays for the customer-level version here |
| Used the gambling study as direct corroboration | **Narrowed to mechanism-shape corroboration** | Different field and different anchor; Fig 4 :20 requires the anchor to be re-named at the new scale |
| F3 "no source from a reading" | **Confirmed, not retracted** | The canonical source rule and Fig 9 :30-32 agree; the missing thing is an instrument, not a name |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 1 and Fig 2 are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to program mechanics), resolved by re-census; S2 (calling the market "the ground" while preferences plainly move), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground settles, and the anchor is revealed choice under a discriminator, not stated preference; S3 (reading Fig 7 :26, *"progress per handoff: R = h² × S"*, as a calibrated equation), resolved by treating it as a product structure in `specified` mode; S4 (treating Klemperer's "switching costs" as a figure atom), resolved as an import with no source gate and zero verdict weight; S5 (tacit-collusion reading of reward programs), excluded as a different question about interfirm coordination rather than customer-slot duration. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :4, :5, :54, :55, :57 plus the Library of Babel bundle passage: it is a union of contact maintenance and channel maintenance, each with its own loop and instrument.
2. **What is the anchor?** Revealed choice under a discriminator, with the market named in Fig 2 :29. Not the program ledger, not a self-report, not internal agreement (Fig 1 :27).
3. **Is the answer in the program alone?** No. Fig 11 :39-40. Capability is agent-and-habitat, and a change that does not change contact changes nothing.
4. **How does quick shifting happen?** Channel decay and matching: stale percepts, saturated metrics, pooled readings (Fig 10 :24-29), either factor of Fig 7 :37-39 going to zero, and purchases following reward qualification at a rival (Khodakarami et al. 2024).
5. **How does durability happen?** A chain of differing rooms selected against the surfaced residual (Fig 7 :36), with imports from differing closures moving the wall outward (Fig 6 :23), so that the low residual survives removal of the original instrument.
6. **Why does the good thing turn bad?** Valence is relative to the residual (Fig 11 :49-51); a catalyst may become spent (Fig 12 :119); progress toward one reward releases the customer to a rival (Khodakarami et al. 2024).
7. **What can be said at the stop?** A two-condition shape with two failure modes, a written refuter list, and the name of the missing discriminator. Not which program, not which customer, not a fraction, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a loyalty program creates a durable relationship only where the low residual is maintained by contact with a ground that still pays when the program instrument is removed; where the low residual is maintained instead by points, tiers and discounts, the program mostly shifts purchases and discounts among competing firms, and the shift tracks reward qualification and competitor matching rather than any change in what the customer values. The two conditions are a union, kept separate per customer and never averaged, and the retention device can change sign when the residual changes.** Which specific program, which customer and what fraction is a `gap`, not a silence: the framework returns a shape, and the source-discriminating instrument is not held here. Mode `specified`, ungrounded, `candidate`. No world source was allowed to flip a verdict; the one genuine conflict (an attitude-as-agent-property reading of the loyalty literature) was returned to the census and re-mapped to Γ. No unresolved strain remains after re-census.
