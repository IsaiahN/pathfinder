# Figure-grounded audit: INS-0032, anti-corruption campaigns and political purges

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the institutional question it reports on. See `05_what_shape_means.md` section 7.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the governing authority's belief about what enforcement will return: that removing corrupt officials reduces corruption, improves services, and strengthens legitimacy.
- **a** is the campaign: inspections, investigations, arrests, asset seizures, disciplinary proceedings, and institutional reforms.
- **Γ(b,a)** is what the regime's institutional library predicts will happen: fewer corrupt officeholders, cleaner procurement, higher trust.
- **o′** is what actually returns. Two regimes are observed for the same class of action: (i) measured corruption, rent-seeking and petty bribery fall and public trust rises; (ii) the same instrument removes rivals, consolidates the incumbent's control, and corruption persists or grows.
- **s** is the campaign and the targeted office or official. R is indexed per campaign and per target, never averaged into a single "campaigns work / campaigns fail" number.

> "The residual is indexed by object slot, not aggregated." (Fig 1 :19)
> "Aggregating across slots is how a live signal disappears into an average." (Fig 1 :22)

The phenomenon to explain is the **bifurcation of the outcome of one action class**. Call it `B_s`: the same enforcement action lands on different sides of a threshold depending on conditions external to the action's own description. A frame that predicts all campaigns are equally effective, or that a campaign with more arrests is by definition more effective, has a residual here.

State the residual as: *why does the gap between what a campaign's institutional library predicts and what the campaign actually returns split into a reduction regime and a purge regime, indexed per campaign and per target?* This is an effect description. It names no theory, no "political will", no "state capture", no "institutional quality". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction keeps `B_s` on the reduction side, plus an instrument that discriminates a genuine reduction from a factional removal when both produce the same reading. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: "If it moves when you push on it, it is not an anchor."

- The campaign's own arrest count is **not** an anchor. It moves when the campaign pushes on it and it is a quantity the campaign itself produces (Fig 1 :27).
- Public approval is **not** an anchor for corruption reduction. It is an instrument for a different question: whether people approve. Approval rose in the Chinese case while an external perception index fell (section 3, F6).
- A perception index is **not** the anchor either. It is an instrument built from expert and business assessments, and *"Perceptions about corruption may differ from actual levels of corruption"* (Wikipedia, CPI, opened 2026-11-22).
- Viable anchor, characterized in effect terms: an independently gathered record of whether corrupt acts and their payoffs actually declined at the slot, with the source of the record distinguishable from the campaign's own accounting. This instrument is **not held here**. That is a declared `gap`, not a silence (Fig 13 :134, Fig 8 :39).

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: authority belief b, campaign action a, outcome o′, indexed by slot s and ordered by time t. It is a sequence rather than a set, so it carries an **ordered** bond (`→` sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "reduces" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: the campaign and the habitat are not interchangeable.
- **Symmetry.** "Reduces corruption" is a threshold relative to a baseline, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). The purge outcome is asymmetric in time: an official removed by a campaign is not restored by reversing the action.
- **Scale.** Three scales are in view: one campaign's step-by-step loop (Fig 4 one-agent panel), the population of agencies, officials and factions with *"something that ranks what they produce"* (Fig 4 :5), and the time channel across successive campaigns and regimes. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The enforcement loop** (one campaign, one scale) | investigators, prosecutors, disciplined officials, the campaign's Γ | cases, arrests, sentences, residual reduction | yes: independently gathered record of corrupt acts and payoffs at the slot | admitted |
| **D2 The patronage habitat** (regime and rivals) | ruling elite, factions, patrons, clients, security services | power, loyalty, rents, office survival | yes: who holds office after the campaign, measured independently of the campaign's own claim | admitted |
| **D3 The institutional library** (composition inside the campaign) | laws, courts, audit offices, disciplinary bodies, independent press and their bonds | reach (what can be investigated and settled), |φ| cost | yes: settlement of a case against a ground, "then check it against the ground, then carry it up" (Fig 5 :32) | admitted |
| **D4 The measurement channel** (across campaigns) | indices, internal reports, court records, public perception | contact with the ground | yes: a source-discriminating instrument, characterized but not held | admitted |
| **X1 "Political will of the leader" as free-floating property** | the leader | resolve, courage | **no** anchor independent of campaign outcomes | not a domain yet |
| **X2 "The anti-corruption statute" as sole cause** | the law | legal authority | measurable, but this is already the library of D3; Fig 11 :46 names conditions as habitat elements | absorbed into D3 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that leaders never matter.

### 1.3 Partition or union

D1 and D3 overlap: the library lives inside the enforcement loop, so their overlap is a compound with its own loop. D2 and D4 overlap: measurement is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> "And when the split lands on a union rather than a partition, unbundle before you search again." (Fig 9 :54)
> "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." (Fig 9 :55)
> "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." (Fig 9 :57)

The unbundled conditions are:

- **C1, anchor independence.** The campaign's success measure is a ground that does not update on what the campaign thinks. Failure mode: the campaign scores itself with its own arrest count or its own definition of corruption, and the metric drifts until "corruption" names whoever the regime wants removed (Fig 1 :27, Fig 2 :30, Fig 2 :34, Fig 10 :47).
- **C2, closure difference.** The campaign's reach is renewed by contact with a frame whose closure differs from the regime's own. Failure mode: the investigative body sits inside the regime's own closure (a party disciplinary commission, an executive-controlled court, a captured audit office), so it can only rearrange what the regime already holds (Fig 6 :21, Fig 6 :23, Fig 11 :39).

A campaign failing only C1 and a campaign failing only C2 are not different degrees of one failure. They need different instruments: C1 fails when the metric is self-produced; C2 fails when no new atom enters the investigative reach. The *Library of Babel* essay states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

### 1.4 Dependency order (Fig 3)

> "The chain is ordered by dependency, not by importance." (Fig 3 :20)
> "Optimising a link that already works cannot rescue one that does not." (Fig 3 :19)
> "A link with no instrument is not a link that works. It is a link nobody has looked at." (Fig 3 :27)

Order for this question: 1 perception (can the campaign read corruption at all?) -> 2 vocabulary (does its Γ have terms for what kind of corruption, and can it say what would count as progress?) -> 3 objective (can it state a comparison that is corruption reduction rather than arrests?) -> 4 planning (a route to that objective under incomplete information) -> 5 learn and carry (name what worked, verify it, carry it). The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :113-115 says that a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it, and that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* Most reform effort lands above the break because that is where the measurements already exist (Fig 3 :29-30): more laws, more investigators, more arrests.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and what may count as an anchor |
| 2 The Ground | mutual update and coherent drift; anchor must not update | decisive for C1 |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer from one campaign to a population |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a new investigative capability can be admitted |
| 6 Closure / Reachability | import is the only operator that moves the wall | decisive for C2 |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs repetition of campaigns as motion, not progress |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs source discrimination and triangulation |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | convention that decides an outcome; ground does not decay, channel does; declare the stake | governs metric capture and the need for an outside seat |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; introduction not exclusion | decisive for D1, D2 and the purge flip |
| 12 The Bond | isomer, catalyst, cycle, functional group; arrangement is the substance | governs why the same instrument changes outcome |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |
| Operators table | ¬ negation, ⋛ comparison, → sequence | a vocabulary that cannot refuse can only accumulate |
| Symbols table | R is the aim; the ground is the anchor | no ground reading exists here yet |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "forms of corruption" (petty, grand, political, systemic) only fit by calling a bribe a kind of energy and a patronage network a kind of gradient. That is a strain, so Fig 13 does **not** govern the taxonomy of corruption. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about campaigns, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The two outcomes are a union of two conditions, not one dial

**Mode: `specified`. Domains D1 to D4. Status: triangulated (Fig 9 union split and Fig 2 anchor rule, low overlap: unbundling vs triangulation).**

> "And when the split lands on a union rather than a partition, unbundle before you search again." (Fig 9 :54)
> "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." (Fig 9 :55)
> "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." (Fig 9 :57)
> "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset," (Fig 9 :4)
> "are not one hard question but several well-formed ones. Split it rather than search." (Fig 9 :5)

The world literature itself shows the split rather than a single effect. One set of observers reads the Chinese campaign as a political purge: Li and Manion 2023, *"The Decline of Factions: The Impact of a Broad Purge on Political Decision Making in China"*, British Journal of Political Science 53(3); Duben 2018; Tsai 2025. The Economist 2014 wrote that *"it is hard not to see corruption allegations as the latter-day weapon of choice in the winner-takes-all power struggles that the party has always suffered"*. Another set reads the same campaign as genuine reform: Cheng Li 2014 says it has *"truly curbing corrupt practices at all levels of government"*; Keyu Jin 2023 writes that its scope and depth *"prove the seriousness of the intention to sever corrosive links fostered in an era of rapid but disorderly growth"*; Thomas and Wang 2026 argue that calling it *"merely a tool of power consolidation"* does not explain why it continued and intensified after 2022. Both readings draw on the same campaign. Treating them as estimates of one quantity to be averaged is exactly the error Fig 9 :4-5 names.

**Refuter:** a single intervention that restores C1 and C2 in both failure types and leaves no categorically different residue, so that the union collapses into a partition. If one exists, F1 is false.

### F2: The campaign's own count cannot be the anchor

**Mode: `specified` with a `general` structural core. Domains D1, D4. Status: triangulated (Fig 1 disqualification of frame-internal quantities and Fig 2 anchor rule, low overlap).**

> "The ground enters as the only metric." (Fig 1 :23)
> "predicates minted, and credibility accrued" (Fig 1 :26)
> "They are frame-internal. A frame cannot score itself with a quantity it also produces." (Fig 1 :27)
> "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." (Fig 2 :29)
> "If it moves when you push on it, it is not an anchor." (Fig 2 :30)

A campaign that reports success by counting officials investigated is scoring itself with a quantity it produces. In the Chinese case the conviction rate for those investigated in the first half of 2014 was around 99 percent, and the CCDI gathered evidence covertly before announcing an investigation (Wikipedia, "Anti-corruption campaign under Xi Jinping", Due process section, opened 2026-11-22). A near-unity conviction rate is a reading of the campaign's own filtering process, not a reading of corruption incidence. The anchor must be something the campaign cannot move by pushing on its own machinery: an independently gathered record of corrupt acts and their payoffs at the slot. IACA's Global Programme on Measuring Corruption states that *"How we measure corruption shapes how we view and address the problem"* and that *"existing measures of corruption are inadequate to discern the prevalence of state capture from that of petty forms of corruption"* (IACA, opened 2026-11-22). What is owed is a discriminator, not a larger count.

**Refuter:** a case in which the campaign's own count tracks an independently gathered corruption-incidence record prospectively and per slot, including after the campaign changes its own definition of what it counts. If it does, the frame-internal objection is answered for that case.

### F3: When investigator and regime mutually update, they converge on whoever had the most influence

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 2 mutual-update collapse and Fig 10 convention/outcome rule, low overlap).**

> "no anchor; each updates on the others" (Fig 2 :13)
> "they converge, and what they converge on" (Fig 2 :14)
> "is whoever had the most influence" (Fig 2 :15)
> "The anchor must not update." (Fig 2 :33)
> "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices." (Fig 2 :34)
> "a convention that decides an outcome has stopped being one" (Fig 10 :47)

When the body defining corruption and the regime it serves update on each other, the definition converges on whoever has most influence, and the drift is coherent precisely because both sides can report a clean process. The world record names the mechanism. Willy Lam wrote that the CCDI *"seemed to be deriving most of its power from Xi Jinping personally"* and titled the piece *"Growing CCDI Power Brings Questions of Politically-Motivated Purge"* (Jamestown Foundation 2015, cited in the Wikipedia article). In Benin, U4 reports that *"Anti-corruption authorities responsible for the prevention and detection of corruption in the country are placed under the authority of the executive branch and lack human and financial resources to conduct their work effectively"* and that critics contend these bodies *"remain susceptible to political influence and capture"* (U4, Benin, 2026). The definition of what gets investigated is authored inside the same closure that benefits from the investigations.

**Refuter:** a campaign in which the investigatory definition of corruption is set by a body that does not update on the regime's preferences, and whose targets are demonstrably drawn independently of their political position, with the independence measured rather than asserted. If none such can be found, F3 holds only as a mechanism shape, not as a universal.

### F4: Effectiveness is a property of campaign-and-habitat, not of the campaign alone

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 11 capability claim and Fig 6 closure idempotence, low overlap: habitat vs closure).**

> "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." (Fig 11 :39)
> "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." (Fig 11 :40)
> "MINT composes inside the closure and can never add an atom." (Fig 6 :21)
> "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." (Fig 6 :23)
> "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." (Fig 8 :32)

Adding investigators, laws and prison capacity to a campaign whose reach is entirely inside the regime's own closure improves the agent in isolation. It composes harder inside the same wall. What moves the wall is contact with a differing closure: an independent judiciary, a genuinely separate audit institution, a free press, civil society, international monitoring with its own evidence source. The world record is explicit. In the Chinese case, *"Investigations by the party's disciplinary bodies are not part of the state judicial system"*, and *"Some members of the Chinese legal community argue that the lack of an independent judiciary contributes to endemic corruption and that these problems will not be permanently resolved without deeper systemic reforms"* (Wikipedia, Due process and Public perception sections). The same source reports that the sociologist Hu Xingdou speculated a second stage that would include *"the establishment of independent anti-corruption organs"* (Deutsche Welle 2015, cited there). That second stage is the import C2 requires; without it the campaign can only rearrange the closure it already holds. U4's Ukraine review corroborates from a different pool: *"durable reform was driven less by formal mandates than by strong relationships between local authorities, civil society, and business"* and international anti-corruption norms *"have been routinely reshaped by domestic political actors"* (U4, David Jackson, 2026, citing Grimes, Huss and Keudel 2023 and Zaloznaya and Reisinger 2020).

**Refuter:** a campaign that renews its reach purely by internal composition, with no new atom entering from a differing closure, and that still passes the independent corruption-incidence test across a change of habitat. That breaks idempotence and F4 with it.

### F5: Valence is relative to the residual; the same instrument can be benefactor or malfactor

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 valence claim and Fig 12 catalyst/spent-part structure, low overlap).**

> "An actor’s valence is relative to the residual, not a property it carries." (Fig 11 :49)
> "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." (Fig 11 :50)
> "No standing list of good actors survives a change of residual." (Fig 11 :51)
> "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." (Fig 12 :119)

The anti-corruption agency is one actor. Ranged against the residual "corruption is eroding governance", it is a benefactor. Ranged against the residual "rivals are threatening the incumbent", it is a malfactor, because removing them is the point. Nothing in the agency's own description records which residual it is serving, and a campaign can switch from one to the other without changing a single law. This is why the same campaign generates both readings in F1 and why naming an agency "independent" from its own charter is not a ground test. The world gives low-overlap corroboration from a different stratum: U4's Ukraine review finds that civil society organisations which understand corruption as *"a systemic and collective-action problem"* cooperate and report faster results, while those that understand it as *"an individual moral failure"* tend towards *"shame and blame"* and rate it less effective (U4 2026, citing Khambekova, Los and Huss 2021). The same tool, different residual, different valence.

**Refuter:** an anti-corruption instrument whose measured valence is invariant across a documented change of the ruling residual. If no such change of valence can be found anywhere, F5 weakens to `general`.

### F6: A measure used as a target stops discriminating, and the readings disagree with each other

**Mode: `specified` on the campaign application, `general` on the measurement law. Domain D4. Status: single-source on the figure side (Fig 10 channel decay), corroborated by two genuinely low-overlap world fields (economics of measurement and social-science methodology).**

> "the ground does not decay, the channel does" (Fig 10 :24)
> "stale percepts, dropped transients," (Fig 10 :25)
> "saturated metrics, pooled readings" (Fig 10 :26)
> "you have lost touch" (Fig 10 :28)
> "→ keep the anchor reachable" (Fig 10 :29)

When a campaign's success is reported through a single saturated metric (arrests, cases, approval), the channel to the ground decays while the ground itself does not. Two low-overlap bodies of work name the same arithmetic from other fields. Goodhart's law: *"When a measure becomes a target, it ceases to be a good measure"*, and Goodhart's original 1975 form, *"Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes"* (Wikipedia, Goodhart's law, opened 2026-11-22). Campbell's law: *"The more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures and the more apt it will be to distort and corrupt the social processes it is intended to monitor"* (Wikipedia, Campbell's law, opened 2026-11-22). These are not political-science witnesses and share no evidence pool with the China studies; they corroborate the channel mechanism, not the campaign fact.

The world record shows the readings disagreeing. Harvard survey data put the campaign's approval rating at 71.5 percent in 2016 and trust in government rising, while CNN reported in 2014 that *"China slips down corruption perception index, despite high-profile crackdown"*, with the CPI rank falling from 80th to 100th. Melanie Manion reads the campaign as institutionalization, credible commitment and *"significantly reduced rent-seeking opportunities"*; Alonso, Palma and Simon-Yarza 2022, *"The value of political connections: evidence from China's anti-corruption campaign"*, Journal of Institutional Economics 18(5), find that corruption indexed by the success of politically connected private firms increased during the administration (both cited in the Wikipedia article). Four readings of one campaign, and none of them is the ground.

**Refuter:** a documented case in which two independent indicators and the campaign's own count all move together prospectively and per slot, and a source-discriminating check confirms they are not drawing on the same underlying report. If so, F6's channel-decay claim is weakened for that case.

### F7: The break is usually at the middle link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111-113 as a framework-internal corroborating line, so one witness).**

> "Optimising a link that already works cannot rescue one that does not." (Fig 3 :19)
> "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed." (Fig 3 :29)
> "Most improvement effort in practice lands above the break, because that is where the measurements already exist." (Fig 3 :30)

A campaign can usually count arrests (link 1, perception) and add statutes (link 4, planning), because both have obvious instruments. It rarely has terms for what the changed situation affords and cannot say what would count as progress there (links 2 and 3). U4's Ukraine review states the same diagnostic in practitioner language: *"There are no universal laws in anti-corruption and no set of 'holy grail' interventions that inevitably produce change"*, and the right question is *"under what conditions will it work here?"* rather than *"does this intervention work?"* (U4 2026). That is Fig 3 :29 restated. Fig 12 :111-113 adds the structural reason: *"A vocabulary without bonds can name a state and cannot name a route to one."* A statute names ingredients; it does not say how the investigative reach is bonded to an independent ground.

**Refuter:** a documented campaign whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That would falsify the "usually middle" claim, though not the dependency ordering.

### F8: Two campaigns with the same atoms can be isomers

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 12 arrangement rule and Fig 11 valence relation, low overlap: composition vs habitat).**

> "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." (Fig 12 :117)
> "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." (Fig 12 :124)
> "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." (Fig 12 :5)

Two campaigns with identical atoms, an anti-corruption law, a court, an investigative agency, a budget and a published statute book, can be isomers under Fig 12 :117 if the bonds differ: one bonds the agency to an independent evidence source and a non-updating court, the other bonds it to the executive that appoints it. The ingredient list cannot tell them apart. The stronger form, both campaigns over a shared atom set differing only in the bond between the investigative body and its ground, is the checkable claim. The weaker form, both sharing only a `law -> investigation -> sanction` pattern with different atoms in the slots, makes them members of one **functional group** (Fig 12 :124).

**Refuter:** two campaigns with identical atoms and identical bonds whose outcomes nevertheless diverge with no difference in ground contact or imported atoms. That moves the explanation out of composition and into habitat alone and breaks the isomer claim.

### F9: The reading does not determine the source (declared `gap`)

**Mode: `general` on the limit, `specified` on the campaign application. Domain D4. Status: gap after a genuine re-census.**

> "your words are borrowed too, so describe the effect" (Fig 9 :30)
> "rather than the cause" (Fig 9 :31)
> "you get a kind of thing, never the answer itself" (Fig 9 :32)
> "It is recoverable from the lineage." (Fig 13 :129)
> "Unreachable is a verdict here, not a silence," (Fig 13 :134)
> "It cannot say which primitive is missing, because naming it would mean already holding it." (Fig 13 :135)
> "So a search that finds nothing is never a proof of absence." (Fig 8 :39)

A fall in arrests, a rise in approval, a fall in a perception index and a rise in connected-firm profits are all readings. From *The Hard Problem is About Source*, read directly: *"If several paths create the same behavior, then behavior is a projection with lossy information"*, and *"What the Spectrometer Example Reveals: The answer is unreached until a better instrument exists."* A genuine reduction and a successful purge can produce the same headline number, because both remove officials. What is owed is a source-discriminating instrument that ranges the outcome against an independently gathered record and reports the lineage of who defined the charge, who gathered the evidence and who could refuse the verdict. The framework characterizes that instrument in effect terms but does not supply it. So the specific question *"did this named campaign reduce corruption or purge rivals?"* is a `gap` here. That is a verdict, not a silence.

**Refuter:** a source-discriminating instrument that, applied prospectively and per slot, reliably separates reduction from factional removal under the same observable reading. Its arrival would close the gap and is the single most valuable next step.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per campaign and per target, never a global average | general | Fig 1 :19, :22 | figure-derived |
| The campaign's own count is not an anchor | general | Fig 1 :23, :26, :27; Fig 2 :29, :30 | triangulated F2 |
| The question is a union of C1 and C2 | general | Fig 9 :54, :55, :57 | figure-derived |
| Metric capture is coherent drift, not an error anyone sees | specified | Fig 2 :13-15, :33-34; Fig 10 :47 | triangulated F3 |
| Effectiveness is campaign-and-habitat | specified | Fig 11 :39, :40; Fig 6 :21, :23 | triangulated F4 |
| The same instrument changes valence with the residual | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F5 |
| A target metric stops discriminating | general | Fig 10 :24-26 | single-source on figure side; two low-overlap world fields |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :20, :27, :29 | single-source F7 |
| Same atoms, different bond, different outcome | specified | Fig 12 :5, :117, :124 | triangulated F8 |
| Which specific campaign in which country is a purge | not stated | none | gap: source-discriminating instrument not held |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A campaign's sustained reduction in corruption is unchanged after its success metric is replaced by an independently gathered record that does not update on what the campaign thinks (breaks C1, Fig 2 :29-34, Fig 1 :27).
2. A campaign renews its investigative reach purely by internal composition, with no atom entering from a closure that differs from the regime's own, and still passes the independent corruption test across a change of habitat (breaks C2, Fig 6 :21, :23, Fig 8 :32).
3. An anti-corruption instrument's measured valence is invariant across a documented change of the ruling residual (breaks F5, Fig 11 :49-51).
4. Two campaigns with identical atoms and identical bonds diverge in outcome with no difference in ground contact or imported atoms (breaks F8, Fig 12 :117).
5. One intervention restores both C1 and C2 in both failure types and leaves no categorically different residue (breaks F1, Fig 9 :57).
6. A campaign whose perception, vocabulary and objective links all measure as working fails at planning (breaks the "usually middle" claim F7, Fig 3 :19, :29).
7. Fig 8's idempotence fails inside a closed set, or the six-term substrate is derived from five of them (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until an independent corruption record has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of corruption (Fig 10 :52, "Bring a characterised residual, never the source.").
2. Keep C1 and C2 separate in every report. A blended "campaign effectiveness score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each campaign handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat arrest counts, approval ratings and perception indices as instruments, never as the anchor (Fig 2 :29-30). An instrument can be wrong on the axes it does not measure.
5. Use the political-science literature as one witness and the measurement, ecology-style and practitioner literatures as separate low-overlap witnesses, never as a pool to be averaged (Fig 2 :31, :40).
6. Declare the stake. Any assessment of a named campaign by someone inside the campaign's closure has an interest in the reading, which is disqualifying (Fig 10 :59).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name which specific campaign is a purge; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32), and the source-discriminating instrument is not held.

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six physical substrate terms to forms of corruption | **Retracted, strain S1** | Only fit by renaming bribes as energy and patronage as gradient. Re-census: Fig 13 governs the physical substrate, not an institutional taxonomy |
| Treated the Corruption Perceptions Index as a possible anchor | **Retracted as anchor, kept as instrument** | Fig 2 :29-30; perception may differ from actual levels. A perception index moves when campaigns and reporting cultures push on it |
| Treated the campaign's 99 percent conviction rate as evidence of effectiveness | **Retracted as a witness, kept as a reading** | Fig 1 :27; it is filtered and produced by the campaign itself (F2) |
| Planned to name "an independent judiciary" as the framework's answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Independence is a binding from the institutional frame, provenance owed |
| Wanted to call Fig 11 :39 a `general` law about all campaigns | **Narrowed to `specified`** | It is a structural claim; no independent corruption measurement pays for the campaign-level version here |
| Read the disagreement between Manion/Cheng Li and Alonso et al. as a contradiction to be resolved by picking a side | **Conflict returned to census, not flipped** | Re-census R1: the studies measure different slots and different currencies (rent-seeking and perceptions versus the value of political connections). Under Fig 1 :19 they are per-slot readings, not competing estimates of one quantity. The verdict is unchanged |
| Read F9's source question as silence | **Marked `gap`, a verdict** | Fig 13 :134, Fig 8 :39. Unreachable is a verdict, not a silence |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 9 and Fig 2 are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |
| Used Goodhart and Campbell as corroboration of the campaign fact | **Narrowed to the measurement mechanism** | They are low-overlap witnesses for the channel law, not for what happened in any named campaign |

**Strains sent to the log:** S1 (Fig 13 physical substrate vs corruption taxonomy), resolved by re-census; S2 (calling an independently measured corruption record "the ground" while the record itself is built by instruments that can be captured), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground settles; the honest anchor is characterized in effect terms and its construction is owed, not pretended. One live type question remains: a real refusal seat (a court able to refuse the executive's charge) versus the unary negation operator of the Operators table. It is named in `11_audit.md`, not smoothed over. No unresolved contradiction between figures after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the *Library of Babel* bundle passage: it is a union of anchor independence and reach renewal, each with its own instrument.
2. **What is the anchor?** A source-discriminating record of corrupt acts and payoffs at the slot, characterized but not held. Not arrests, not approval, not a perception index (Fig 2 :29-30, Fig 1 :27).
3. **Is the effect in the campaign alone?** No. Fig 11 :39-40. Capability is campaign-and-habitat.
4. **How does the purge regime happen?** The metric updates on what the regime thinks (Fig 2 :13-15, :33-34), a definition that decides an outcome stops being a convention (Fig 10 :47), and the investigative closure cannot add an atom from outside itself (Fig 6 :21, :23).
5. **How does the reduction regime happen?** The success measure is ranged against a ground that does not update, and the reach is moved outward by contact with closures that differ: independent courts, audits, press, civil society, international monitoring with its own evidence (Fig 7 :36, Fig 6 :23, Fig 8 :45).
6. **Why does the good instrument turn bad?** Valence is relative to the residual (Fig 11 :49-51); a catalyst may become spent (Fig 12 :119), and nothing in its charter records which.
7. **What can be said at the stop?** A two-condition shape, two distinct failure modes, an isomer reading, and seven falsifiers. Not which campaign is a purge, not which reform package wins, not a `grounded` answer. Fig 13 :134: "Unreachable is a verdict here, not a silence," and Fig 8 :39: "So a search that finds nothing is never a proof of absence."

---

## 8. Updated verdict

The shape survives: **an anti-corruption campaign lands on the reduction side when its success measure is a ground that does not update on what the campaign thinks and when its investigative reach is renewed by contact with closures that differ from the regime's own; it lands on the purge side when the metric is self-produced or the reach stays inside the regime's closure, and the same instrument changes valence when the residual it is ranged against changes.** The two conditions are kept separate, never averaged. Which specific campaign in which country is a purge is a `gap`, not a hidden answer: the framework returns a shape, and the source-discriminating instrument is not held here. Mode `specified`. No world source was allowed to flip a verdict; the one genuine conflict between effect studies was returned to the census and re-mapped to per-slot readings. No unresolved strain remains after re-census, with one live operator type question recorded in `11_audit.md`.
