# Figure-grounded audit: standardization across the firm vs local adaptation

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured at a named ground. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries a mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*, fetched 2026-11-22: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* And: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session; every figure quote is copied verbatim from it and cited as `Fig N :line`. `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources are secondary and are logged in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The formula defines `R = |Γ(b,a) − o′|` per slot `s` (step 1; Symbols table, `R`). Map it onto the question without naming a theory:

- **b** is a team's belief about what its local situation affords, formed from its own history and inherited priors.
- **a** is the process the team actually runs: the steps, their order, the checks, the handoffs.
- **Γ(b,a)** is what the firm's library of routines and process templates predicts will happen when that process is run.
- **o′** is what the local ground returns: a customer outcome, a defect count, a cycle time, a safety finding, a regulator decision, a surviving unit.
- **s** is a slot: a team, a site, a process family, or a customer situation. R is indexed by slot and by time, never averaged into an organization-wide score.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)

The decision under audit is what may cross the membrane between the slot where a process was first settled and a new slot. Option A, standardize organization-wide, carries the same recorded process to every slot. Option B, allow local adaptation, lets each slot re-fit the process to its own ground. Stated as an effect: *when a settled process is carried into a new slot, which parts of it may be replayed and which parts must be re-settled against the new slot's ground, and what does each choice do to the firm's reach and to R in that slot?*

This description names no management theory, no "best practice", no "one best way", no "dynamic capability". Those are candidate names and are withheld until after the census.

**Bind the sought-for shape as an ordinary term before the run** (Formula, "Direction"): the answer would be a rule that assigns each process element to one of two layers according to which anchor settles it, plus an instrument that discriminates a convention failure (coordination breaks because a shared meaning was not shared) from a verdict failure (the local ground was not matched). Until bound, this shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 3 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* The local market outcome, the defect count and the safety finding are named anchors. Fig 2 :30: *"you push on it, it is not an anchor."* Internal agreement, consultant opinion, headquarters sign-off and adoption rate move when pushed; they are instruments at best. Viable anchor: the ground's return, measured per slot. The central subtlety of this question is that a process standard is often a **convention**, and Fig 2 :41 says agreement about a shared meaning is the product, not a corruption. So the anchor depends on which layer is being judged. That is the split this derivation must find, not assume.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry and scale of R

- **Arity.** Process replication is a three-place relation: template Γ, local habitat `h_s`, outcome `o′_s`, indexed by slot and ordered by time. It is a sequence, so it carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72; Operators table :30). "Standardized across the organization" asserts an **identity** bond across slots (`≡`, *"two names, one referent"*, Fig 12 :67), that is, one referent for many local names. "Adapted locally" asserts that the same atoms carry a different bond in different slots, which is Fig 12's isomer claim.
- **Symmetry.** "Standard" is a threshold across slots, not an absolute quantity (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87; Operators table :48). The relation is not symmetric: template and local habitat are not interchangeable. Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."* If the bond between steps is symmetric, two teams with the same steps are one term; if ordered, the same steps in a different order are different terms. Local adaptation often changes the bond, not the ingredient list.
- **Scale.** Three scales are in view: the single team's step-by-step loop (Fig 4, one-agent panel), the population of teams with *"a shared library, and something that ranks what they produce"* (Fig 4 :5), and the time channel across repeated process revisions. The membrane is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap `R_T` must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The single team loop** (one agent, one scale) | team members, local routines, the team's Γ | actions and residual reduction at that slot | yes: the local ground's return (defect, customer, safety, regulator) | admitted |
| **D2 The replication membrane** (head office to teams) | central process owners, templates, local adapters, the process document | what crosses: a method, a head start, or a recording | yes: `R_T`, the round-trip gap (Fig 4 :30), plus whether the ground pays after the crossing | admitted |
| **D3 The population of teams** (habitat) | teams, sites, customers, suppliers, regulators, conditions | network-scale benefits of a shared template vs fit to local ground | yes: return per slot, the market as ground (Fig 2 :29) | admitted |
| **D4 The convention layer** (shared meaning) | shared vocabulary, interfaces, metric definitions, safety rules, handoff protocols | coordination and agreement | yes, but the product **is** agreement (Fig 2 :41); the anchor is whether the shared meaning works as a shared meaning, not whether it predicts the world | admitted, with a special rule |
| **X1 "One best way" as a free-floating property of the process** | the process itself | universal validity | **no** anchor independent of each slot's ground; *"No standing list of good actors survives a change of residual."* (Fig 11 :51) | not a domain yet |
| **X2 "Local knowledge" as a property of the team alone** | the team | tacit know-how | its anchor is the same local ground as D1, and capability is agent-and-habitat (Fig 11 :39), so it is not separable | absorbed into D1 and D3 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that some process designs are never better than others. X2 is not dismissed but relocated: the local knowledge lives in the contact between team and habitat, not in the team as an isolated stock.

### 1.3 Partition or union

D1 and D2 overlap: the template is inside the team loop when it is used. D2 and D4 overlap: a shared interface is itself a convention that crosses the membrane. D3 and D4 overlap: coordination is exercised inside the habitat. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **(C1)** a shared meaning that makes coordination possible (a convention, where agreement is the product), and **(C2)** a process element whose correctness is settled only by the local ground (a verdict, where agreement is disqualifying). A firm failing only C1 and a firm failing only C2 are not different degrees of one failure; they need different instruments. *The Library of Babel* states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

The global either/or question ("standardize everything" or "let every team adapt") is a single lever applied to a union. Fig 9 :55 predicts what that does: it clears the region where only one condition holds and leaves the intersection standing.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the team read its local ground?) → 2 vocabulary (does the process give terms for what the local situation affords?) → 3 objective (can the team say what progress would count locally?) → 4 planning → 5 learn and carry. Standardization can help at link 2 by supplying a shared vocabulary, and can damage link 3 by fixing the objective centrally. The middle link, having terms for what a situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* Most process-improvement effort lands above the break, where measurements already exist (Fig 3 :29).

Order of operations: describe the residual before choosing a lever (Fig 9 :27-28); settle the template against a ground before composing over it (Fig 12 :104); refuse a wrong convention before minting a new one (Formula step 2).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and why an organization-wide average hides the signal |
| 2 The Ground | anchor is the ground; correlation has valence; convention vs verdict | **decisive**: the same uniformity is good for a convention and bad for a verdict |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs where a shared process helps and where it hurts |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; `R_T` | **decisive** for what may cross from one team to many |
| 5 Mint Pipeline | three guards as a product; settlement; "nothing new here" | governs when a local variant is a new term or a re-fit |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs renewal of reach and the source of local variation |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs why handing every team the same room stops progress |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and the source rule for local practice |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the whole census |
| 10 Ground Maintainer | ground does not decay, channel does; conventions | governs convention failure and the outreach order |
| 11 The Habitat | capability is team-and-habitat; valence relative to residual | **decisive**: a process moved to a new team is a substituted habitat |
| 12 The Bond | isomer, catalyst, cycle; arrangement is the substance | governs why same steps in a different order are a different process |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop, not the organizational claim |
| Operators table | `≡` identity, `→` sequence, `⋛` comparison | governs what "same process across teams" asserts |
| Symbols table | `R` is per slot; the ground is the anchor | governs the metric and the anchor |

**Strain test during this census.** An early attempt to apply Fig 13's six-term physical substrate to "process elements" only fit by calling a standard an energy gradient and a team a spectrum. That is a strain, so Fig 13 does **not** govern the organizational claim. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). A second early strain, reading Fig 2 :40 as a ban on standardization, was resolved by re-census: the line governs verdicts, and Fig 2 :41 explicitly protects conventions (strain S2, resolved). No unresolved strain remains after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about firms, `grounded` only if settled by a measurement. None is `grounded`. "Triangulated" means two figures with low topical overlap inside one framework, not two independent evidence pools.

### F1: The question is a union, and a global either/or is a filter masquerading as a verdict

**Mode: `general` with a `specified` method consequence. Domains all. Status: triangulated (Fig 9 union split and Fig 12 isomer structure, low topical overlap).**

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

"Standardize" and "adapt" are not two answers to one question. They are two levers applied to two conditions that overlap in the same process document. A global policy is a budget filter that decides what gets tried first; it is not a witness for which process element should be fixed. The `specified` consequence: any answer of the form "firms should standardize" or "firms should localize" has already thrown away the intersection where the two conditions bind at once.

**Refuter:** a single intervention that restores both conditions in both failure types and leaves no categorically different residue. That would collapse the union into a partition and falsify F1.

### F2: Uniformity is a convention virtue and a verdict vice (decisive)

**Mode: `general`. Domains D1, D4. Status: triangulated (Fig 2 alignment/valence and Fig 10 convention rule, low overlap).**

> **"Correlation has valence."** (Fig 2 :39)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"** (Fig 2 :41)
> **"Guard, from Figure 10: a convention that decides an outcome has stopped being one."** (Fig 2 :43)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"Frames range against the ground. They do not negotiate with it."** (Fig 2 :45)

This is the load-bearing line of the whole audit. Fig 2 does not say agreement is always bad. It says agreement has two valences, set by what the agreement is about. For a shared meaning, agreement **is** the product: a common name for a defect, a common interface between two teams, a common safety rule, a common definition of "done". Standardization is efficient there because the product is coordination, not a claim about the world. For a verdict about what works with this customer, on this machine, under this regulator, agreement among teams that share the same manual is worthless, because they share an evidence pool. Uniformity cannot be a verdict about a ground it never ranges against.

The governing rule for the split: **standardize an element if agreement about it is the product; localize an element if its correctness is settled by the local ground.** And the guard: if a convention is allowed to decide the outcome, it has stopped being a convention and has become an unpinned frame (Fig 2 :43, Fig 10 :47).

**Refuter:** exhibit a process element for which agreement is simultaneously the product and a claim about the world, with one instrument that settles both; or show a shared convention that decides an outcome while still functioning only as a convention. Either breaks the split criterion.

### F3: Capability is team-and-habitat; carrying a process to a new team is habitat substitution with hidden losses

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 11 habitat and Fig 4 membrane, low overlap).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)
> **"what you failed to reproduce is invisible until the goal fails"** (Fig 11 :68)
> **"what you unintentionally introduced is invisible until it acts"** (Fig 11 :69)
> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** (Fig 11 :70)

A process document is not the capability. It is the part of the capability that was written down. The rest lives in the contact between team, conditions and relations (Fig 11 :43, *"The habitat is enumerated, never composed."*). Copying the document to a new site substitutes a habitat. Two failures are invisible until they act: what the new site failed to reproduce from the old contact, and what the new site's habitat introduced that the old one never had. Pure local adaptation has the same hazard in reverse: it keeps contact but can drop the convention that made coordination possible.

**Refuter:** a process that produces identical ground-verified outcomes after being carried into a habitat where none of the original conditions are reproduced and no new actor is introduced. Under Fig 11 :66-69 that should be impossible. If observed, F3 is false.

### F4: What crosses scales must be a method or a head start, never a recording

**Mode: `general` on the rule, `specified` on the firm-level prediction. Domain D2. Status: triangulated (Fig 4 membrane and Fig 6 import, low overlap).**

> **"The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."** (Fig 4 :21)
> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)
> **"upward: a method that can be reapplied. Never the recording of a particular success."** (Fig 4 :23)
> **"downward: something that makes the next search cheaper. Never a replay of what worked once."** (Fig 4 :24)
> **"A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one."** (Fig 4 :25)
> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)

A standardized process can be one of two things. It can be a **method**: a rule that can be reapplied, carrying how to look for a failure and what would count as a win, which makes the next team's search cheaper. Or it can be a **recording**: the steps that worked once, written down as if the occasion were a law. Fig 4 :25 says the two look the same from inside and that only the replay reveals which one was sent. The practical test is the round trip: send the standard down, run it in a new slot, bring the outcome back up, and measure `R_T`. A standard that closes with zero gap on a slot it never visited was a recording.

World bearing (secondary): Netland 2013 reports that *"XPSs largely represent variants of the same in content"* and *"an XPS represents an own-best-way to the one-best-way"*, and warns of *"a too rigid, path-dependent development process"*. That is Fig 4 :25 observed in manufacturing practice. It is one witness from the operations pool, not a verdict.

**Refuter:** a standard that is a verbatim replay of a single success and still produces new ground-verified results in every new slot with `R_T` measured as zero. Under Fig 4 :25 that cannot happen; if it does, F4 is false.

### F5: Keep the residual per slot; an organization-wide standardization score destroys the signal

**Mode: `general` with a `specified` method consequence. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

Adoption rate, audit pass rate and percentage of teams "compliant" are quantities the standardization frame produces. Fig 1 :27 disqualifies them as a score for that frame. They are filters for where to look and budget instruments, not witnesses. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict."* The `specified` consequence: any answer to this question that is expressed as one organization-wide score has already aggregated away the only signal that says which team has lost contact and where.

**Refuter:** a single organization-wide standardization statistic that predicts, prospectively and per named slot, which team will lose ground contact next and on which process element. If one exists, F5's methodological consequence is false.

### F6: A repeated room stops travel; local rooms must differ and match the residual

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 7 selection between rooms and Fig 6 import, low overlap).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)

Handing every team the same template is handing them the same room. Agreement across teams compounds while evidence does not. Local adaptation is the only mechanism in this picture that makes the next room differ, but Fig 7 :36 requires more than difference: the new room must **match the residual the last one surfaced**. Random local variation is not selection. The two factors of Fig 7 :38-39, *"the bracket’s fidelity across the handoff"* and *"the ground’s pressure on the room"*, give the test: a local variant is progress only if the template still brackets what it must and the local ground is actually pressing on it.

**Refuter:** a network in which every team runs the same template, no differing closure ever enters, and the network keeps producing new ground-verified readings across a changing habitat. Under Fig 7 :36 that should be impossible.

### F7: Same steps, different bond: local variants are isomers, not defects

**Mode: `general` (structural) with a `specified` prediction. Domains D2, D3. Status: triangulated (Fig 12 and Fig 9 :57).**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."** (Fig 12 :46)
> **"The arrangement is the substance."** (Fig 12 :94)
> **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."** (Fig 12 :95)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)

A process document records the ingredient list: steps, tools, forms. It usually does not record the bond: which step waits for which, which check is a threshold, which step produces a new artifact, which step is a subtraction of a prior one. Operators table :34 says *"the only bond a flat chain can express, so every term today is a sequence whether or not it should be"*. So a standard written as a flat list of steps systematically under-records the arrangement. Two teams with the same listed steps can be running different substances. Local adaptation is often a re-bonding, not a deviation. The parallel with chemistry is the figure's own, not an imported analogy: *"Chemistry hit it first: silver fulminate and silver cyanate have the same composition and different properties"* (Fig 12 :97).

**Refuter:** a process variant whose steps and bonds are demonstrably identical in two teams and whose ground outcomes are also identical, with no arrangement difference to account for the claimed variation. If all such cases collapse, the isomer reading has no object.

### F8: The strength that gave the standard its standing changes valence when the residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 habitat relations and Fig 12 catalyst/cycle, low overlap).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

A standard is a catalyst if it regenerates across uses and a spent part if it does not, and nothing in the standard's description records which. When the residual changes (a new customer mix, a new regulator, a new technology), the same standard becomes a malfactor without anything about it changing. This is the figure-grounded reading of "standardization becomes rigidity": not that the standard was bad, but that its valence was relative to a residual that has moved.

World bearing: the 2007 conference record of Winter, Szulanski, Ringov and Jensen reports that *"franchises are most successful when they do not adapt to local conditions"*, while the 2016 Ringov, Liu, Jensen and Szulanski study finds *"the accurate replication of the established template of the franchisor and its local augmentation both have a positive effect on local franchise unit performance."* The two look like a direct contradiction. The conflict rule sends them back to the census, not to a softer reading (section 6, re-census R1): the template's **Arrow core** (the convention layer) is what precise copying protects, while augmentation is the local ground layer. Split by layer, both results stand, and F8 is strengthened rather than overturned.

**Refuter:** a standardized process whose measured contribution to the local ground is invariant across a documented change of residual. If no such change ever alters a standard's valence, F8 weakens to `general`.

### F9: The chain usually breaks at vocabulary and objective, not at planning

**Mode: `specified`. Domain D1. Status: single-source (Fig 3; Fig 12 :111-115 is a corroborating line from the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In firm terms: the common failure is not that a team cannot plan. It is that the process gives it no terms for what its changed situation affords and cannot say what would count as progress there. More planning and more standardization budget land above the break because that is where the measurements exist. F9 predicts that the highest-value diagnostic is not "is this team following the standard?" but "at which link does this team's chain currently stop, and was that measured?"

**Refuter:** a documented team whose perception, vocabulary and objective links all measure as working, with its failure located at planning. That falsifies the "usually at the middle" claim, though not the dependency order.

### F10: Renewal of reach needs a differing closure; local teams are the channel, not the problem

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6 and Fig 8, low overlap).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

A central process group can optimize the template inside its own library forever and never add an atom. Local teams, customers, regulators and adjacent practices are the differing closures that can move the wall. Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*, so a locally adapted practice must carry provenance if it is to count as an import rather than a re-fitting. World bearing: March 1991 finds that *"adaptive processes, by refining exploitation more rapidly than exploration, are likely to become effective in the short run but self-destructive in the long run"*, a low-overlap organizational-learning witness for the same hazard.

**Refuter:** a firm that renews its reach solely by composing inside the centre's closure, with no atom entering from any local or external frame, and still passes the ground test across a habitat change. That breaks idempotence and F10 with it.

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R belongs to the slot, never to an organization-wide average | general | Fig 1 :19, :22 | figure-derived |
| The ground, not internal agreement, settles a process | general | Fig 2 :29, :30, :45 | figure-derived |
| Uniformity is efficient for a convention and disqualifying for a verdict | general | Fig 2 :39-43, Fig 10 :47 | triangulated F2, decisive |
| Capability is team-and-habitat; a moved process is a substituted habitat | specified | Fig 11 :39, :40, :66-70 | triangulated F3 |
| What crosses scales must be a method or head start, never a recording | general / specified | Fig 4 :21-25, :30; Fig 6 :23 | triangulated F4 |
| The question is a union and must be unbundled | general | Fig 9 :54, :55, :57 | figure-derived |
| Same process document, different bond, different substance | general / specified | Fig 12 :5, :46, :94, :95, :117 | triangulated F7 |
| A standard's valence changes when the residual changes | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F8 |
| The break is usually at vocabulary or objective | specified | Fig 3 :19, :24, :27, :29 | single-source F9 |
| Renewal needs contact with a differing closure | specified | Fig 6 :14, :21, :23; Fig 8 :32, :45 | triangulated F10 |
| Which exact process elements belong in which layer | not stated | none | **gap**: framework returns a shape, not a name; the instrument that would name it is the local ground measurement |

---

## 3. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A process element for which agreement is simultaneously the product and a claim about the world, settled by one instrument (breaks F2, Fig 2 :40-41).
2. A verbatim replay of a single success that produces new ground-verified results in every new slot with `R_T` measured as zero (breaks F4, Fig 4 :25, :30).
3. A process that produces identical ground-verified outcomes after being carried into a habitat where none of the original conditions are reproduced and no new actor introduced (breaks F3, Fig 11 :66-69).
4. A single lever that restores both conditions of the union with no categorically different residue (breaks F1 and F7, Fig 9 :57).
5. A team whose perception, vocabulary and objective links all measure as working, with failure located at planning (breaks F9's "usually", Fig 3 :24).
6. A firm that renews reach entirely inside its own closure, with no differing frame entering, across a measured habitat change (breaks F10, Fig 8 :32).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape in at least one named slot.

---

## 4. Recommendation

1. Lead with the residual and the refuter, not with a theory of organization design (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Split the process inventory into two columns by anchor: "agreement is the product" (standardize) and "the local ground decides" (adapt). Keep the split visible; a blended compliance score is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Standardize **methods and interfaces**, not recordings. Send down a head start that makes the next team's search cheaper (Fig 4 :22-24). Measure `R_T` at each new site rather than assuming the standard transferred.
4. Treat every local variant as a possible isomer first and a defect second: ask which bond changed, not which step was skipped (Fig 12 :5, :94).
5. Ask, at each handoff, which link the team's chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
6. Keep the two conditions separate in every report. A firm failing coordination and a firm failing local fit are different compounds and need different instruments (Fig 9 :57).
7. Use the management literature as a budget filter and as one corroborating witness, not as the verdict. The replication studies share an evidence pool (Fig 2 :31, :40). The engineering modularity source is the lower-overlap witness.
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name which specific processes belong in which column; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 5. Canonical usage check

Canonical sources read after the first four sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, the essays *The Library of Babel: Locating The Book of Books* and *The Recursive Self-Improvement Trap* (both fetched 2026-11-22), and the local figure text extract.

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also gives the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 4's stop and the `gap` row in F11.
- *The Library of Babel* confirms the shape discipline: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* It also confirms the union stop quoted in section 1.3.
- *The Recursive Self-Improvement Trap* confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* And the prestige rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* A famous operations author does not settle this question; a local ground measurement does.

---

## 6. Retractions and confirmations (kept visible)

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term physical substrate to process elements | **Retracted, strain S1** | Only fit by renaming a standard as a gradient and a team as a spectrum. Re-census: Fig 13 governs the physical substrate, not a firm's Γ. It stays in the honest-stop role only. |
| Read Fig 2 :40 as a ban on standardization | **Retracted, strain S2** | The line governs verdicts; :41 explicitly makes agreement efficient for conventions. Re-census split D4 from D1/D3. This became F2, the decisive finding. |
| Treated local adaptation as an error to be minimized | **Retracted at census level** | Fig 11 :39-40 locates capability in team-and-habitat; local contact is the mechanism of capability, not noise. Relocated to F3 and F10. |
| Planned to answer with a fixed percentage (for example, standardize 80 percent) | **Retracted as a name** | The framework returns a shape, not a name; which elements belong where is a `gap` until a local ground measures them (Fig 9 :32; canonical README). |
| Treated the replication studies as mutually exclusive conflict | **Conflict, re-census R1** | The 2007 report that franchises succeed without local adaptation and the 2016 finding that replication and augmentation both help were reconciled by splitting template core (convention) from augmentation (verdict). Verdict unchanged; F8 strengthened. |
| Treated the business literature as several independent witnesses | **Narrowed to one pool** | Netland, Ringov, Winter, Szulanski, March and their cohorts share a strategy and operations evidence pool (Fig 2 :31, :40). The engineering modularity source is the only genuinely lower-overlap witness here. |
| F11 row "which elements belong in which layer" | **Marked `gap`, not silence** | Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* |
| F2 "decisive" in an early draft | **Kept, but narrowed** | It is decisive for the split criterion, not for any particular process element. The README's shape-not-a-name limit forbids filling the slots from the armchair. |

**Strains sent to the log:** S1 (Fig 13 applied to firm routines), resolved by re-census; S2 (Fig 2 :40 versus :41), resolved by the D4/D1 split; R1 (precise replication versus local augmentation), resolved by the convention/verdict layer split. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the *Library of Babel* bundle passage: it is a union of a convention condition and a verdict condition, each with its own anchor and instrument.
2. **What is the anchor?** The local ground (defect, customer, safety, regulator) for verdicts; agreement itself for conventions. Fig 2 :29 and :41.
3. **Is the answer in the process document alone?** No. Fig 11 :39-40. Capability is team-and-habitat.
4. **What may cross between teams?** A method or a head start, never a recording. Fig 4 :22-25. Measure `R_T` (Fig 4 :30).
5. **Why does uniform rollout stop paying?** Same room handed along, agreement compounding without evidence. Fig 7 :12, :13, :36.
6. **Why does local variation often get misread as deviation?** The bond is not recorded. Same atoms, different bond, different substance. Fig 12 :5, :94, :117.
7. **What can be said at the stop?** A split rule with falsifiers, not a list of processes. Fig 9 :32; Fig 13 :134; Fig 8 :39.

---

## 8. Updated verdict

The shape survives: **standardize the convention and method layer, because agreement about a shared meaning is the product there; localize the layer whose correctness is settled by the local ground, because uniformity is disqualifying for a verdict. Carry methods and head starts across the membrane, never recordings; measure the round-trip gap; treat local variants as isomers until proven defects; keep residuals per slot.** The two conditions are kept separate and never averaged. Which exact process elements occupy which column is a `gap`, not a silence: the instrument that would name them is a local ground measurement, not an argument. Mode `specified`. No world source flipped a verdict; the one genuine conflict (precise replication versus local augmentation) was returned to the census and resolved by the layer split. No unresolved strain remains after re-census.
