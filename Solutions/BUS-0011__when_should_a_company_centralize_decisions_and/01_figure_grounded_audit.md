# Figure-grounded audit: when should a company centralize decisions?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured in a company before any allocation of decision rights is called settled. Per `THE_FORMULA.md` :107: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local canonical figure text `FRAMEWORK/reference/03-FIGURES_TEXT.md`; `THE_FORMULA.md`; `THE_SEAT_MAP_Field_Guide_amended.md`; `FIGURES_README_canonical.md`; `60_FIGURES_AS_METALAWS.md`. Every quoted figure line was reopened in the extract before use and is cited as `Fig N :line`.

---

## 0. The residual, in effect terms

An organization with N local slots (a region, an account, a product, a plant) has a residual on each slot:

`R_s = |Γ(b,a) - o' |` on slot s

where `Γ` is what the deciding frame believes will happen, `a` is the decision, and `o'` is what actually happened at that slot. The ground is not internal agreement about the decision. It is what the slot returned: a customer outcome, a market result, a safety record, a measured defect rate. Fig 2 :29 names exactly this class of thing as an anchor: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

The question "centralize or decentralize" is therefore a question about **where R is measured and who can reach o'**. It is not a question about hierarchy as such. Rebind it as an ordinary term before deriving, per the formula's "Direction" rule:

> **Bound shape claim (S):** decision rights should sit at the smallest frame whose closure can predict the slot's residual and whose channel to that slot's ground is reachable and does not update on what other frames think.

S is the thing to be refuted, not a conclusion to be defended. It predicts a split by decision class, never a single answer for the whole company.

Two things are explicitly outside S: who happens to hold a title, and which structure is fashionable. Both are filters for the budget, not witnesses for the verdict (Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").

---

## 1. Domain census

R described by arity, symmetry and scale before any figure line is chosen:

- **Arity:** N slots, N greater than one for any company worth asking about. The decision is an N-place family, not a single choice. A genuinely single-slot firm (one customer, one product, one site) is the degenerate case where the central and local frame coincide and this question does not arise.
- **Symmetry:** the slots are not interchangeable. An actor's value depends on which residual it is measured against: Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." The same central rule is a benefactor to one slot and a malfactor to another (Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."). So no standing list of "decisions that belong at the top" survives a change of residual.
- **Scale:** first order at the slot (a decision on the ground); second order at the center (methods, standards, shared atoms); a third order at the portfolio (which decision classes go where). The membrane between scales is lossy and directional (Fig 4 :21 "The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction.").

One line per domain, with actors, currency and anchor. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Slot decision | local team, customer, local conditions | per-slot residual R_s | the slot's ground (customer and market outcome) | admitted |
| D2 Center among frames | central decision makers, local teams | agreement versus independence | the same non-updating ground, reached separately | admitted |
| D3 Membrane | center and locals | methods versus recordings | whether what crosses is a reapplicable method | admitted |
| D4 Habitat | local actors, conditions, relations | contact | the ground, which does not decay | admitted |
| D5 Import and closure | local closure, peer closures, specialized expertise | atoms added to a closure | provenance and shadow test for the imported atom | admitted |
| X1 "The right org chart" | none nameable | prestige and fashion | none: a diagram does not settle anything | not a domain yet |
| X2 "One best degree of centralization" | the CEO | influence | already inside D2; absorbed | absorbed |

**Union or partition.** Union. The decision classes overlap: a safety decision is both a local-contact case and a global-anchor case, so a single lever clears only the regions where one condition holds (Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."; Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."). The company question must be unbundled into decision classes before any level is assigned.

**Dependency order (Fig 3).** Perceive the slot's residual before deciding (Fig 3 :4-5), then have terms for what the slot affords (Fig 3 :6-8), then say what counts as progress in that slot's own terms (Fig 3 :9-11), then plan. A central decision handed down before the local objective is statable is a plan above the break: "Optimising a link that already works cannot rescue one that does not." (Fig 3 :19). Fig 3 :20: "The chain is ordered by dependency, not by importance."

**Strain test applied before conclusions.** The anchor rule (Fig 2) and the habitat rule (Fig 11) at first look pull in different directions: Fig 2 says keep the center off the anchor, Fig 11 says put authority where contact is. Re-census resolves it: Fig 2 governs *updating*, Fig 11 governs *contact*. A center may route and rule (Seat Map :93) without authoring a verdict or moving the ground. Different quantities, so no strain after re-census. The one live strain, the operand type of a "convention" that becomes a decision, is named in F8 and not smoothed.

---

## 2. Figure census

| figure | bearing | verdict it licenses |
|---|---|---|
| 1 The Agent | residual per slot; aggregation hides signal | local authority where R_s is live |
| 2 The Ground | anchor must not update; independence vs mirror | center ranges, never negotiates or averages |
| 3 Dependency Chain | objective before plan | no decision above a missing local objective |
| 4 The Membrane | methods up, head starts down, never recordings | centralize method, not the particular decision |
| 5 Mint Pipeline | guards are a product; settlement is not sufficiency | a rule is not valid because it was written |
| 6 Closure / Reachability | import is the only wall-moving operator | centralize only genuinely absent atoms, with provenance |
| 7 Room Chain | variation inside, selection between | chain of approvals is motion, not progress |
| 8 Union Surplus | residual first, frame second; search proves nothing | name the decision class before picking a level |
| 9 Leave / Arrive | split rather than search; filters not witnesses | the question is a union, unbundle it |
| 10 Ground Maintainer | keep the channel; do not author verdicts | center's job is channel, routing, ruling, allocation |
| 11 The Habitat | capability is agent-and-habitat; enumerate contact | authority follows contact; isolation substitutes a habitat |
| 12 The Bond | plan is sequence, goal is comparison, progress subtraction | a decision right is a bond, not a title |
| 13 Minimum Viable Set | closed set, open arrangements | no new organizational "kind" is minted by rearranging boxes |
| Operators table | comparison and negation | a decision is a threshold; a refusal must be writable |
| Symbols table | R is the aim; ground is anchor | no R, no verdict |

Strained readings are named as such below, never smoothed over.

---

## 3. Findings

### F1 - The residual is indexed by slot, not by company (decisive for D1)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :43: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**

A centralized decision that pools all slots into one number does exactly what these lines forbid. If one region has a live, unmet local residual and the aggregate is near zero, the aggregate is a legal-looking state with the signal deleted. Local authority is the structural answer wherever R_s is live and separable.

This is not a claim that local teams are always right. It is a claim about where the error signal lives. Fig 1 :23: "The ground enters as the only metric." A manager's confidence in a uniform policy is frame-internal (Fig 1 :24-27).

- **Mode:** `general` for the indexing rule, `specified` for its application to a company.
- **Status:** `triangulated`. Fig 1 (per-slot residual) and Fig 11 (valence relative to residual) are two figures with low overlap, one about measurement, one about habitat.
- **Refuter:** show a decision whose residual is genuinely single-slot at the needed resolution, where pooling across slots retains the live signal and improves the ground reading. A variance decomposition that shows small within-slot variance is a filter, not this refuter.

### F2 - The anchor must not update (decisive for D2)

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."**

For a company the anchor is the market or customer outcome that does not move because headquarters and the region agreed on a narrative. Two ways to destroy correction are named in Fig 2: a center that updates on what locals report is the mutual-update collapse; a center and locals that both read the same internal dashboard are the common-cause collapse, "they never talk, and still agree" because the same pool is talking (Fig 2 :18-21). Fig 2 :32: "Independence is what makes agreement mean something." Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Verdict: a central frame is legitimate when it ranges against a ground it cannot move, and illegitimate when it becomes a party to the disagreement. Concretely, a customer outcome, a safety incident and a realized margin can be anchors. A forecast revised to match a regional narrative cannot.

- **Mode:** `general`.
- **Status:** `triangulated`. Fig 2 (anchor and independence) and Fig 7 (agreement is variation, not a verdict) address different quantities, non-updating and handoff progress.
- **Refuter:** a documented case where a decision ground moved because two internal frames updated on each other, and the move was not detected by any independent reading of the customer outcome. Or the converse: a center that genuinely cannot move the ground is shown to reduce correction.

### F3 - Methods go up, head starts go down, recordings do not cross (decisive for D3)

Fig 4 :22: **"Only methods cross up. Only head starts come down."**
Fig 4 :23: **"upward: a method that can be reapplied. Never the recording of a particular success."**
Fig 4 :24: **"downward: something that makes the next search cheaper. Never a replay of what worked once."**
Fig 4 :25: **"A recording carried upward looks like knowledge and is a description of one occasion."**

This is the sharpest figure-grounded statement of the centralization question. What headquarters should centralize is the *method*: a verified, compressed, reapplicable way of doing something that a local team can use as a head start. What it should not centralize is the *particular decision* that worked once in one slot. A playbook that says "here is how we run a pricing review and what evidence counts" is a method. A playbook that says "charge this price" is a recording pushed down as a replay.

Fig 4 :20: "Only the actors, the currency and the anchor change." The kernel is the same loop at both levels, so the center is not a different kind of thing. Fig 4 :30 requires the round trip to be measured: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

- **Mode:** `general` for the membrane rule, `specified` for the playbook example.
- **Status:** `single-source` for the figure rule (Fig 4), with a low-overlap world corroboration from systems engineering in `09_watson_answer.md` (Browning, design structure matrix, 2001).
- **Refuter:** a case where a recording of one success, carried up and replayed down with no re-application test, improved the ground reading across independent slots. Under the rule it should not, because it carries no method.

### F4 - Import is the only reason to add a shared atom (D5)

Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**
Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**

A local team cannot derive what its own vocabulary cannot represent. When a decision needs an atom no local closure holds (a specialist legal judgment, a capital allocation model, a safety physics calculation, a cross-region negotiation), the atom must be imported from a frame whose closure differs. That is a legitimate reason to centralize a capability.

But import is priced. Fig 6 :24: "Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives." Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit." So the order matters: characterize the missing atom in effect terms first, then find the frame that holds it. Importing a central process because centralization is in vogue is the wrong order and an unpriced atom.

- **Mode:** `specified`.
- **Status:** `triangulated`. Fig 6 (what moves the wall) and Fig 8 (why nothing else can) are two figures with different arguments, closure expansion and idempotence.
- **Refuter:** a local team whose closure genuinely lacks the atom still reaches the same ground without any contact with a differing closure, measured on the ground and not on internal satisfaction. That would break the import rule here.

### F5 - The question is a union; unbundle before assigning a level (method)

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :4-5: **"are not one hard question but several well-formed ones. Split it rather than search."**
Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

A single lever (size, geography, "fast-moving market") clears only the region where one condition holds and leaves the intersections standing. The honest output is a decision-by-decision assignment with the overlap named, not a company-wide percentage. This is why the answer in `07_the_tether_answer.md` is a table with a test per row, not a slogan.

Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit." Pick the decision class by its residual first; only then pick a level. Any frame you pick will seem to fit if you start with the level.

- **Mode:** `general`.
- **Status:** `triangulated`. Fig 9 (union and split) and Fig 12 (a vocabulary of ingredients cannot name a route) carry the same structural point by different routes. World corroboration from public administration research is secondary.
- **Refuter:** a company where one lever demonstrably clears the whole decision portfolio on a ground reading, with the intersections measured rather than assumed.

### F6 - Capability is agent-and-habitat; moving a decision substitutes a habitat (D4)

Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone."**
Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**
Fig 11 :43: **"The habitat is enumerated, never composed."**

A local team is in contact with a habitat: customers, regulators, terrain, suppliers, season, local relations. That habitat is not a property of the team and cannot be moved to headquarters by promoting a better manager. Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another." Pulling a decision up to the center substitutes the center's habitat for the local one, and both failure modes are silent: what you failed to reproduce is invisible until the goal fails, and what you unintentionally introduced is invisible until it acts (Fig 11 :68-69).

The remedy is enumeration, not composition: list what is actually in contact with the residual, then what contacts those, outward until the cascade stops (Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."). Centralization that assumes direct contact is enough repeats the DDT error in Fig 11 :52-53, where the residual that mattered was three steps out.

- **Mode:** `general` for the capability claim, `specified` for the org design application.
- **Status:** `triangulated`. Fig 11 (agent-and-habitat) and Fig 1 (per-slot residual) are different figures, contact versus measurement. World corroboration from Hayek (1945) and from honeybee collective decision models is secondary and low overlap.
- **Refuter:** an improvement to the central agent in isolation, with no change in contact with any slot's habitat, that measurably improves local ground outcomes. This is the standing refuter Fig 11 :72 already attaches to the capability claim.

### F7 - A chain of approvals is one long room (D2, process view)

Fig 7 :12-13: **"same closure, handed along; agreement compounds, evidence does not"**
Fig 7 :33: **"variation inside, selection between"**
Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

An approval chain in which every layer shares the same vocabulary and the same dashboard is a mirror chain. Handing the decision up does not add evidence; it adds spelling. Progress needs the next room to differ from the last and to match the residual the last one surfaced (Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."). Fig 7 :37-39 name two factors: bracket fidelity across the handoff and the ground's pressure on the room. Zero either and the chain runs in place.

Verdict: centralize by *selecting between* independent local rooms against the ground, not by escalating a decision through agreeing layers. A review board that only re-states the local recommendation with more authority is motion, not progress.

- **Mode:** `general`.
- **Status:** `single-source` for the figure (Fig 7), with a low-overlap world corroboration from List, Elsholtz and Seeley (2009) on independence plus interdependence in honeybee swarms.
- **Refuter:** an escalation chain whose rooms share an evidence pool is shown to add ground-visible evidence at each handoff. Under Fig 7 it should add agreement only.

### F8 - The center's office is to keep the channel open, not to author verdicts

Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 10 :29: **"keep the anchor reachable"**
Fig 10 :52: **"Bring a characterised residual, never the source."**
Fig 10 :47: **"a convention that decides an outcome has stopped being one"**
Fig 2 :43: **"a convention that decides an outcome has stopped being one."**

Seat Map :93 is the office in full: the Ground Maintainer keeps the anchor reachable, routes what crosses, rules with provenance, allocates, and decides refresh. Crucially it does not author verdicts about the content it grades (Seat Map :82-85). Mapped to a company, the center legitimately maintains the instruments and metrics, routes methods up and head starts down, rules with a record of the residual answered, allocates resources, and rotates decaying checking frames. It does not decide which price is right in a region it cannot read.

The live strain: a standard (a convention) is permitted precisely because it makes no claim about the world, and Fig 10 :47 forbids it from deciding an outcome. But most corporate standards *do* decide outcomes. The strain is resolved rather than hidden by separating two readings: a standard that sets a shared meaning (what "on-time" means) is a convention; a standard that fixes the value that the ground should have returned (the margin every region must hit) is a verdict wearing a convention's clothes. Fig 10 :46: "A convention makes no claim about the world; a verdict and an atom both do."

- **Mode:** `general` for the office, `specified` for the convention/verdict split, which still needs an instrument.
- **Status:** `triangulated`. Fig 10 (the seat) and Fig 2 :43 (the same prohibition reached from the correlation law) are two routes; they share a framework but govern different quantities (channel maintenance and decision-rights of a convention).
- **Refuter:** a standard that demonstrably fixes an outcome is shown to leave the ground non-updating and to remain checkable by a frame that did not author it. Under Fig 10 :47 it has stopped being a convention.

### F9 - A decision right is a bond, not a box on a chart

Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."**
Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."**
Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it."**

"Who decides" names an operand. It does not say what joins that operand to the ground. A decision right is a typed relation: a comparison at a threshold, a sequence from evidence to action, a subtraction of the residual. Two org charts with the same boxes but different bonds are different systems, and the difference is invisible in the chart, exactly as an isomer is invisible in a flat formula (Fig 12 :117 "isomer. Same atoms, different bond, different substance."). This is why a re-org that only redraws boxes is not a change in decision rights.

- **Mode:** `general`.
- **Status:** `single-source` for the figure definition (Fig 12), with the supporting derivation in `06_isomers_and_order.md`.
- **Refuter:** two organizations with identical atoms but different decision-right bonds shown to produce the same ground readings under the same residual. Then the bond carries nothing.

### F10 - What the framework does not return: a single percentage or a named org chart

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134: **"Unreachable is a verdict here, not a silence"**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

No figure line returns "centralize 60 percent of decisions". That is a name where the framework returns a shape. The figures also forbid pretending the question is settled by a famous framework or a consultant's matrix: Seat Map :171 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying" and Fig 10 :59 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." The designer of an org chart has a standing stake in the chart; declare it.

- **Mode:** `general`.
- **Status:** `gap` for the numerical allocation and for the exact org chart. This gap is of the "shape, not a name" kind, not of the unreachable kind: a company-specific ground reading would settle it.
- **Refuter:** not applicable to a gap. A figure line that does return a universal percentage would close it.

---

## 4. Pre-registered refuter

Written before any conclusion, per Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device." The shape claim S is refuted if any of the following holds on a ground reading, not on agreement:

1. A decision whose residual is demonstrably live and separable per slot is shown, across independent slots and repeated trials, to be decided better centrally on a measure that reads the slot's ground rather than internal compliance. This breaks F1.
2. Pooling across slots retains the live local signal: the aggregate reading detects a slot-specific failure that the per-slot reading missed. This breaks Fig 1 :22.
3. A ground is found to have moved because two internal frames updated on each other, with no independent reading detecting the move. This breaks F2.
4. An improvement to the central frame in isolation, with no change in its contact with any local habitat, measurably improves local ground outcomes. This breaks F6 and Fig 11 :40.
5. A single lever clears the whole decision portfolio including the intersections, measured rather than assumed. This breaks F5.

If any fires, the shape claim is withdrawn for that decision class. Until one is run, no part of this may be labelled `grounded`. A failure is more useful to the author than an endorsement.

---

## 5. Recommendation

1. Unbundle the portfolio before assigning any level. For each decision, write down its slot structure and its ground (F1, F5).
2. Centralize methods, shared meanings, instruments and genuinely missing atoms. Centralize with provenance and a shadow test (F3, F4, F8).
3. Decentralize slot-specific judgments where the local team has contact with the ground and an independently checkable reading of it (F1, F6).
4. Do not escalate through a chain of agreeing layers. Select between differing local rooms against the ground (F7).
5. Treat a standard that fixes an outcome as a verdict, not a convention, and give it the checking arrangement a verdict needs (F8).
6. Keep the round trip. Fig 4 :30 requires the gap to be measured; a shorthand "centralize what is common, decentralize what is local" is a lossy condensation with a nonzero R_T (see `11_audit.md`).
7. Send the generator, not the conclusion: the decision test and its five refuters, then the sources only after a verdict is recorded (Fig 10 :52, Fig 4 :22).

---

## 6. Canonical usage check

Two local sources were read after the first sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them" and "the quotes are the authority, not this summary." A reading that makes two figures contradict one another has misidentified its domain. The limit: the framework returns "a shape, not a name."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws, so a design question is answered by derivation, not by escalation to an authority. A conflict sends the derivation back to the census; it never flips a verdict.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F1 called "decisive for the whole question" | **Narrowed.** It is decisive for D1, the slot decision. It says nothing about D5 imports, where centralization is licensed. The union reading in F5 governs the whole. |
| F2 and F6 seemed to pull in opposite directions | **Not strained after re-census.** Fig 2 governs updating and independence. Fig 11 governs contact and habitat. A center may route and rule without authoring a verdict or moving the ground. |
| "centralize what is common" as a slogan | **Retracted.** It is a round-trip lossy condensation. F3 is the actual rule: methods up, head starts down, recordings never. The slogan drops the bond type. |
| F8 convention/verdict strain | **Kept live and narrowed.** The prohibition is real; its application to a corporate standard needs an instrument that distinguishes a shared meaning from a fixed outcome. Not smoothed. |
| F10 gap | **Canonically confirmed.** "a shape, not a name." A percentage allocation is a name and is outside what the figures return. |
| Seat selection by receptiveness | **Canonically forbidden.** Seat Map :163 and :171. Public opt-in venues only; no receptiveness rank anywhere in this folder. |
| "This derivation settles the centralization question" | **Never claimed and explicitly refused.** Simulated derivation, `specified`, candidate. |

### Round trip, short form

Sent up: the figure set, chiefly Fig 1 per-slot residual, Fig 2 anchor, Fig 4 membrane, Fig 9 union. Abstracted: "authority follows the residual and the ground." Concretized: the decision-rights table in `07_the_tether_answer.md`. Three constraints drop on the way back down: the bond type (method versus recording), the non-updating requirement on the anchor, and the union structure that forbids one lever. R_T is nonzero and is recorded qualitatively in `11_audit.md`. Treating the shorthand as identical to the figures would set R_T to zero and repeat the dead-reckoning error Fig 4 :30 names.

### Updated verdict

The shape survives: authority follows the slot structure of the residual and the location of reachable, non-updating ground contact. Centralization is licensed for methods, shared meanings, instruments, missing atoms and standards that do not fix outcomes. Local authority is licensed for slot-specific judgments reached from local habitat contact. The question is a union, so verdicts are kept per decision class and never averaged. Mode `specified`, ungrounded, candidate. One live strain (convention versus outcome-fixing standard), one gap (the numerical allocation for a particular company), five refuters written in advance.
