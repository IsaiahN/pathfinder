# Figure-grounded audit: What social and economic conditions determine whether AI increases human autonomy or dependence?

**Mode of this document: `specified` on findings, `general` on the structural shape, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: simulated, not a ground reading.** *The Recursive Self-Improvement Trap*, read 2026-11-24: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** Verbatim figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, local, opened this session. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. World sources actually opened are listed in `10_source_ledger.csv`.

---

## 0. The claim under audit, stated as an effect

The question asks for social and economic conditions that "determine whether AI increases human autonomy or dependence." Two readings are possible and they do not lead to the same work:

- **Reading A (the obvious one):** produce a list, for example education, safety nets, competition, regulation, worker ownership, and attach a sign to each (this raises autonomy, that raises dependence).
- **Reading B (the effect reading):** treat "determine" as an intervention question. Introduce an AI system into a human setting. For each person (each slot `s`), the ground returns a changed capability to reach what that person takes to be their own good. `R_s` is the discrepancy between the predicted effect and the observed effect on that slot. The question asks for the rule that predicts the sign of `Δcapability_s`.

**What an answer would look like (binding the sought shape as an ordinary term, Formula step "Direction"):** a function `HABITAT -> SIGN(Δcapability_s | ground_s)`, evaluated per slot, with the habitat enumerated in actors, conditions and relations. Binding it lets it accrue a residual like anything else, so the preference for a list becomes refusable.

The audit below shows that Reading A is forbidden by the figures (F2), and that Reading B yields a shape but no specific list (F7). The residual is a **union** of two overlapping condition sets ("social" and "economic"), not one hard question (Fig 9 :55). Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." So "AI raises productivity" is a different quantity and cannot close this `R`.

---

## 1. Domain census (before choosing any figure line)

`R` by arity, symmetry and scale:

- **Arity:** two conditions, social and economic, overlapping. Union, not partition (Fig 9 :55). The compound case has its own loop (Fig 9 :57).
- **Symmetry:** ordered, not symmetric. Autonomy and dependence are opposite signs of a comparison against a ground, not two names for one state. A goal is a comparison (Operators table :51); progress is a subtraction (Fig 12 :112).
- **Scale:** four, related by the membrane rule. Fig 4 :20: "Only the actors, the currency and the anchor change." The kernel does not.

| domain | scale | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|---|
| D1 Person plus AI tool | micro | one person, one AI system, the task set | actions and their outcomes relative to the person's own goals | **yes:** human judgment about that person's own good (Fig 2 :37) | partition boundary: does the intervention change contact? |
| D2 Social habitat | meso | workers, managers, peers, teams, norms, organizations | roles, skills, trust, decision authority | **yes:** per-slot human judgment, collected by an instrument; each person ranges against it separately (Fig 2 :45-46) | one arm of the union compound |
| D3 Economic habitat | macro | firms, workers, consumers, owners, capital | money, prices, wages, employment, ownership | **yes, but limited:** a market is an anchor only for questions constitutively about prices or allocation; here it is an instrument and "can be wrong on axes they do not measure" (Fig 2 :37-38) | other arm of the union compound |
| D4 Governance / maintainer seat | cross-cutting compound | regulators, standards bodies, law, property rights, accountability regimes | rules, permitted introductions, liability | **yes:** human judgment about people's good, with the seat's interest declared (Fig 10 :59) | the union of D2 and D3 where a maintainer exists; own loop |

Every row has a nameable anchor, so all four are domains. A candidate domain without one would be dropped.

**Partition or union:** union. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." The case in both conditions is categorically different, not a harder case of either (Fig 9 :57).

**Order by dependency (Fig 3):** D1 first, because the slot whose capability is at stake is upstream of every habitat description. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Within D1 the chain is perception, vocabulary, objective, planning, learn and carry (Fig 3 :4-15). The break that matters here is the middle link: can the person say what counts as progress toward their own good under AI? Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." D2 and D3 depend on D1. D4 acts on all three and is downstream in the sense that it can only introduce into a habitat it did not author (Fig 11 :61).

---

## 2. Findings F1 to F7

Each finding states its mode, marks triangulation, and gives its refuter. Triangulated means two figure lines with low overlap govern the same quantity. The figures remain one metatheory and one evidence pool, so triangulation inside the framework is not independent world corroboration.

### F1. The direction is not a property of the AI; it is a property of the person-tool-habitat contact (decisive shape)

Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."

Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

Fig 4 :20: "Only the actors, the currency and the anchor change." (same kernel, different cast at each scale)

**Derivation.** The question's grammar puts AI in the subject position and autonomy in the object position, as if AI had a one-place effect on a person. Fig 11 says the effect lives in the contact, so the question must be re-censused before any figure line is applied: the unit is person-plus-AI-plus-habitat. A better AI with the person's contact unchanged does not move their capability at all. The social and economic conditions the question asks for are exactly the habitat terms in that contact.

**Mode:** `general` (structural). **Status:** triangulated across Fig 11 (habitat/capability) and Fig 4 (scale-invariance), two figures with low overlap. World corroboration: Wheeler et al. 2026 found preferences varied substantially across life domains; Lyell and Coiera 2016 found overreliance tracked task conditions and reliability variability, not the aid alone.

**Refuter:** a controlled study in which the person's habitat and contact are held fixed and improving the AI alone reliably raises their measured capability to reach their own stated goals. If that fires, F1 is wrong and the agent-only reading stands.

### F2. Conditions have no fixed sign; valence is relative to the residual

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."

Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."

Fig 11 :51: "No standing list of good actors survives a change of residual."

Fig 1 :19: "The residual is indexed by object slot, not aggregated." (measurement-side support, different figure)

**Derivation.** Reading A above wants a list with stable signs. Fig 11 :51 forbids exactly that: a standing list of good actors. Whether, say, workplace AI is autonomy-increasing depends on which residual you measure, that is, which person's own goal. The same AI can be a benefactor to one person's project and a malfactor to another's. This is why the answer cannot be delivered as the requested list. It is not evasiveness on our part; it is the figure's own categorical exclusion.

**Mode:** `general`. **Status:** single-source on the valence rule (Fig 11), triangulated with Fig 1 on the per-slot measurement requirement. World corroboration: Wheeler et al. 2026, "Automation preferences varied substantially across domains."

**Refuter:** exhibit a condition whose sign is invariant across two different goals for the same person, with the person's ground measured separately in each case.

### F3. The ground for this question is human judgment; economic aggregates are instruments and filters

Fig 2 :37: "Human judgment is the right anchor for is this a good answer for a person, because the question is about people."

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Fig 1 :23: "The ground enters as the only metric."

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

**Derivation.** "Is this more autonomy for this person?" is constitutively a question about a person, so the anchor is human judgment about that person's own good. A market, a wage, a productivity index and a benchmark score are instruments for this question, not anchors. Fig 2 :37-38 adds that instruments can be wrong on axes they do not measure. So GDP up plus autonomy up is one witness at most if both are read from the same evidence pool, and an efficiency gain is a filter for where to spend attention, never a witness for the verdict. This is also why Fig 1 :24-27 disqualifies frame-internal quantities such as coverage and credibility accrued from scoring a frame.

**Mode:** `general`. **Status:** triangulated across Fig 2 (anchor legitimacy) and Fig 9 (filter versus witness), low overlap. World corroboration: Pallikala and Hariprasad 2026, who found human autonomy absent from current capability benchmarks; NIST 2026, whose framework is explicitly about risks to individuals and society rather than to throughput.

**Refuter:** show a case in which an aggregate economic or benchmark metric settles a person's own account of their autonomy without any appeal to that person's judgment.

### F4. Social and economic form a union compound, not a list of separate levers

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

**Derivation.** The question says "social and economic conditions." The two overlap (organizations are both social and economic; wages are both economic and a relation of recognition). One lever, for example more AI access or more training, clears only the region where one condition binds; the intersection, where both bind, remains and is a specific compound with its own loop. The census therefore keeps D2 and D3 separate and adds D4 as the compound where a maintainer exists. Any answer that simply adds a social list to an economic list commits the blend failure.

**Mode:** `specified` (structural). **Status:** single-source on the union rule (Fig 9), corroborated in a different field by Sisodia 2026, who concluded that delegation "should depend jointly on consequence, reversibility, verification strength, and operational resilience." That is a joint condition, not a single lever.

**Refuter:** show that the social and economic condition sets are disjoint in the relevant population, so that a single lever clears all cases.

### F5. Governance is a maintainer condition with asymmetric power and a declared interest

Fig 11 :56: "Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept."

Fig 11 :61: "The seat's power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."

Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying."

**Derivation.** Among the "social and economic conditions" are rules, property rights, liability and public standards. Fig 11 distinguishes an unmaintained habitat, where nothing selects, from a maintained one, where a seat can choose instruments and introduce actors. Crucially, that seat cannot exclude an actor from the habitat; it can only add. So governance can fund a skill program, mandate a review, or add an accountability forum, but it cannot remove the fact of contact between the person and the system. And because the seat has an interest in the outcome, that interest must be declared rather than hidden.

**Mode:** `specified`. **Status:** triangulated across Fig 11 (maintainer modes and asymmetric power) and Fig 10 (declared stake), low overlap. World corroboration: NIST AI RMF's consensus-driven public process, and ACM FAccT's scope on incentives, power and redistribution.

**Refuter:** exhibit a governance action that genuinely removes an actor from a habitat rather than adding one, and that settles the per-slot autonomy result without adding a substitute habitat.

### F6. Benchmark and sandbox results do not settle the question

Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."

Fig 10 :24: "the ground does not decay, the channel does"

**Derivation.** A great deal of AI and autonomy research is benchmarked in sandboxes. Fig 11 says a sandbox is a different habitat, so a synthetic success establishes that the system is wired correctly, not that a person's capability in their real habitat changed. Moreover the ground does not decay; the channel to it does, through stale readings, saturated metrics and pooled populations. Any claim about autonomy that rests only on a benchmark has lost the channel.

**Mode:** `general`. **Status:** triangulated across Fig 11 (substituted habitat) and Fig 10 (channel decay). World corroboration: Pallikala and Hariprasad 2026 explicitly note that current benchmarks measure what agents can do rather than autonomy preservation.

**Refuter:** show a benchmark whose score predicts per-slot real-world capability change against the participants' own judgment, with the prediction surviving a change of habitat.

### F7. The specific list of conditions is a `gap`, not a silence

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

Fig 9 :32: "you get a kind of thing, never the answer itself"

**Derivation.** After the census above, no figure line returns a mapping from named social and economic conditions to the sign of `Δcapability_s`. The figures govern the **shape** any answer must have (per-slot, ground-anchored, union-aware, maintainer-declared, benchmark-limited) but they do not and cannot name the conditions. Fig 9 :32 says the search returns a kind of thing, never the answer. "Unreachable is a verdict, not a silence" (canonical figures README and Fig 13 :134). What is owed is an import from a frame whose closure differs, with a source gate (provenance) and a shadow test (Fig 6 :12-13), and then a ground reading. The world sources in `09_watson_answer.md` are precisely such candidate imports, and they are recorded as corroboration of the shape, not as the missing list.

**Mode:** `specified` on the gap. **Status:** single-source on the reachability rule (Fig 6), triangulated with Fig 8 and Fig 9 on the kind-of-thing limit.

**Refuter:** derive from the figure set alone a rule that names conditions and predicts a sign for a new person, then have the ground pay for it. Until that happens the gap stands.

---

## 3. Pre-registered refuter (written before the conclusion)

Per the seat-map discipline: a falsifier written before the run is a design instrument. The shape claim in `07_the_tether_answer.md` is refuted if any of the following holds:

1. With a person's habitat and contact held fixed, improving the AI alone reliably raises their measured capability to reach their own stated goals (breaks F1, Fig 11 :40).
2. A condition is exhibited whose sign is invariant across two different residuals for the same person, with each ground measured separately (breaks F2, Fig 11 :49-51).
3. An economic aggregate or benchmark score settles a person's own account of their autonomy without appeal to that person's judgment (breaks F3, Fig 2 :37 and Fig 9 :60).
4. The social and economic condition sets are shown disjoint for the population, so a single lever clears all cases (breaks F4, Fig 9 :55-56).

If any fires, the shape is withdrawn or re-censused, not softened. None has been run in this simulated derivation, so no claim is `grounded`.

---

## 4. Recommendation

1. Do not answer with a list. State the residual in effect terms, then the shape, then the gap where the list would go.
2. Assess autonomy per slot against the person's own judgment (Fig 1 :19, Fig 2 :37), and keep aggregate efficiency as a filter, not a witness (Fig 9 :60).
3. Enumerate the habitat (Fig 11 :43-44), keep social and economic as a union compound (Fig 9 :55-57), and declare the maintainer's interest (Fig 10 :59).
4. Treat benchmark results as wiring checks (Fig 11 :70). What would settle the question is a ground reading in a real habitat.
5. Take `08_expert_verification_packet.md` to the public venues in `03_public_contact_points.csv` and ask for a refutation, not agreement.

---

## 5. Canonical usage check

Two canonical documents were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: a reading that makes figures contradict one another has misidentified its domain; and the framework's own limit, "what a missing thing would have to look like (a shape, not a name)." The canonical sentence "Indiscernibility is not identity" governs F7: a gap in this derivation is not proof that no answer exists.
- `FRAMEWORK/figures/THE_FORMULA.md`: the mode rule and step 7, which separates SEARCHED, INWARD and OUTWARD. For F7 the order is: SEARCHED first (the figure set has been searched and yields no name); INWARD would sharpen our own instruments for measuring per-slot capability; OUTWARD would import a condition vocabulary from a frame whose closure differs. They are not to be read against each other.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| First draft answered with a list: education, safety nets, competition, regulation | **Retracted.** Fig 11 :51 forbids a standing list of good actors; valence is relative to the residual. The list survives only as habitat actors to be enumerated, never as verdicts. |
| First draft treated "economic conditions" as the anchor because markets are measurable | **Retracted.** Fig 2 :37 makes human judgment the anchor for questions about people; a market is an instrument here. |
| First draft used Fig 7 :13 ("agreement compounds, evidence does not") about expert consensus | **Retracted as strained.** Fig 7 governs handoff chains of rooms, not this question. Re-census: it governs the outreach artifact, not the domain answer. Removed from the findings. |
| F1 direction is habitat-bound | **Canonically confirmed.** Fig 11 :39-40 and the README's domain-agnostic rule agree. |
| F4 union compound | **Canonically confirmed.** Fig 9 :55-57 and the README's warning against a final room agree that a compound keeps its own loop. |
| F7 gap | **Canonically confirmed and narrowed.** The "shape, not a name" limit applies to what is not held in the closure; the conditions named here are not in the figure closure, so the limit applies. |

### Strain check

No figure line required forcing after re-census. The apparent tension between Fig 11 :40 (agent-only improvement changes nothing) and the world evidence that better tools do change outcomes is not a figure conflict: the world studies measure a changed habitat (new task distribution, new verification conditions), so they are instances of Fig 11 :40 rather than counterexamples. Recorded here, not smoothed over.
