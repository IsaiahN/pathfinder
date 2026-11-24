# Figure-grounded audit: What evidence is sufficient to establish that a system is safe for a particular level of autonomy?

**Mode of this document: `general` on the shape, `specified` on the falsifiable predictions, not `grounded`.** It states what any sufficient-evidence account must look like and what would refute it. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap* (essay, opened 2026-11-24): LLM output can "simulate an approximate answer/output", while "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No benchmark was run and no deployment was measured.

**Sources.** Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (opened this session, cited as Fig N :line). Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop and mode: `FRAMEWORK/figures/THE_FORMULA.md`. Seat rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. Essays by Isaiah N, opened this session where quoted. World sources listed in `10_source_ledger.csv`, each fetched and quoted.

---

## 0. The claim under audit (residual in effect terms)

The question contains a presupposition. It asks *what evidence is sufficient*, which assumes there is a nameable packet of evidence that, once assembled, establishes safety for an autonomy level. Call this **Option A: the certificate reading**. Its effect: a team collects tests, red-team reports, benchmark scores, formal checks and monitoring dashboards, then declares the system safe at level L. The certificate travels to a regulator or deployer and is treated as settled.

**Option B: the contact reading.** Safety is not a property of the system alone. It is a property of an agent in a habitat, settled only by outcomes at the ground under that level of autonomy. Evidence is sufficient only when it is (i) ranging against that ground rather than a substituted habitat, (ii) indexed by the live slots where harm can occur, (iii) triangulated across genuinely low-overlap frames, (iv) tied to a threshold stated in advance as an ordinary term, and (v) maintained as a channel rather than delivered once. Under B, an evaluation-only certificate is not sufficient even if it is large, because it is a recording from a substituted habitat.

What each leads to: A yields a portable label that can outrun the ground and spends the independence of anyone asked to check it. B yields a scoped, checkable claim with a stated refuter and an explicit stop. The residual R is the gap between the certificate a frame can produce and the behavior the ground settles when the system is actually given level L of autonomy. R is indexed by slot (level, domain, failure mode, cascade depth), never a single global number.

**What an answer would look like, bound as an ordinary term (Direction).** Before deriving, write down the sought-for shape so it can accrue a residual: a sufficient-evidence account is a term `φ_safe(L, H)` with (a) an anchor A that does not update on the evaluator's opinion, (b) a per-slot residual index s, (c) two or more low-overlap frames ranged against A, (d) a threshold comparison `risk ⋛ acceptable(L)` stated in advance, and (e) a maintenance rule for the channel. If any of (a) to (e) is missing, `φ_safe` is a preference, not a held term, and by Fig 5 no internal check can see it: "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.** Arity: relational, it compares a body of evidence with a threshold at a given autonomy level; it is not a property with one operand. Symmetry: asymmetric, evidence can support a claim but cannot establish it without the ground, and a threshold comparison ⋛ is ordered, not a symmetric join (Fig 12 :87: "a threshold relation between two quantities"). Scale: evidence is gathered at evaluation scale and the claim is about deployment scale, so a lossy transform lies between them (Fig 4 :30). R is a union compound, not one hard question (Fig 9 :54: "when the split lands on a union rather than a partition, unbundle before you search again"): a bundle of perception, vocabulary, threshold, and maintenance conditions, where a single lever clears the region where only one condition holds and leaves the intersections standing.

| domain | actors | currency | anchor | partition or union | dependency order |
|---|---|---|---|---|---|
| D1 Evaluation frame (the lab) | models, benchmarks, red teams, harnesses, evaluators | test results, coverage, pass rates, residual on held-out slots | none internal; the benchmark is frame-internal, so it is not an anchor | one condition of a union | first: perception and vocabulary (Fig 3 :4-11) |
| D2 Deployment habitat (the world at level L) | system, users, operators, other agents, environment, cascades | real consequences, harm or no harm | outcomes under L; Fig 2 :29-30 calls such an anchor "a measurement, an experiment, a counter, a market, a patient outcome" | the ground condition of the union | second: objective and threshold must sit here (Fig 3 :9-11) |
| D3 Verification and claim frame | auditors, certifiers, regulators, outside readers | agreement and residuals | the ground, never agreement | the maintenance condition of the union | third: planning and carrying (Fig 3 :13-16) |
| D4 Threshold and decision (the "particular level" in the question) | the scorer, the accepted-risk convention, the comparison ⋛ | risk versus acceptable risk | the ground settles the value, the seat may author only the convention | the compound where D1, D2 and D3 intersect | last: a step whose input never arrives cannot be diagnosed, only its predecessor can (Fig 3 :22-23) |

**No nameable anchor means it is not a domain yet.** D1 has no internal anchor, so it is not a self-sufficient domain; it borrows its anchor from D2. This is the first structural result and it comes from the census, not from a quote chosen to fit.

**Order by dependency (Fig 3).** Perception (can harm be detected at L at all?), vocabulary (are there terms for the failure modes at L?), objective (what counts as acceptable risk at L?), planning (what evidence would be needed?), learn and carry (how is the claim refreshed?). The chain usually breaks between vocabulary and objective, because that link "has neither" obvious failures nor obvious tests (Fig 3 :25-26) and "A link with no instrument is not a link that works. It is a link nobody has looked at" (Fig 3 :27).

## Figure census (figure, bearing, verdict)

| figure | bearing on this question | verdict |
|---|---|---|
| 1 The Agent | residual indexed by slot, never aggregated; frame-internal quantities disqualified | governs D1 and D2; aggregate pass rates are not safety evidence |
| 2 The Ground | anchor definition, independence, mirror chain, admissible evidence | governs D2 and D3; agreement is not a verdict |
| 3 Dependency Chain | order by dependency; uninstrumented middle link | governs D4; the threshold is where chains break |
| 4 The Membrane | round trip and its gap; only methods cross up | governs D1 to D2 transfer; a certificate is a recording, not a generator |
| 5 Mint Pipeline | make the sought-for shape a term; persistent flat residual; settling not sufficient | governs D4; "safe enough" must be bound before the run |
| 6 Closure and Reachability | import only moves the wall; no proto-instrument where nothing registers | governs D2; a closed evaluation suite cannot manufacture a deployment outcome |
| 7 Room Chain | agreement compounds, evidence does not | governs D3; many reviews from one data pool are one room |
| 8 Union Surplus | absence is not proof; convergent derivation versus adopted import | governs D2; "no harm found" is not "no harm" |
| 9 Leave, Arrive, Search | describe the residual before picking a frame; shape not a name; admissible evidence | governs method and D4; the answer is a kind of thing, never the certificate itself |
| 10 Ground Maintainer | channel decays, not the ground; bring the residual, not the source | governs D3; a green dashboard can mean "you have lost touch" |
| 11 The Habitat | capability is agent-and-habitat; harness is substituted habitat; introduction not exclusion | decisive for D2; safety is not a model-only property |
| 12 The Bond | comparison is a threshold relation; a goal is a comparison | governs D4; "safe at level L" is a goal, not an invariant atom |
| 13 Minimum Viable Set | six terms, closed set, open arrangements | no direct bearing; no seventh primitive is offered, and no strain is needed |
| Operators table | ⋛ comparison; ¬ negation for refusal | supports D4; a vocabulary without negation can only accumulate certificates |
| Symbols table | R is the aim, always a slice; the ground is the anchor | supports the residual framing; what cannot be perceived is residual |

Strained readings are named as such in §2 and §6, not smoothed over.

---

## 2. Findings

### F1 : Safety is agent-and-habitat, not a property of the model alone (decisive shape)

Fig 11 :39: **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."**

Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**

Apply the same move the figure makes for intelligence. The answerable question is not "is this system safe?" but "what makes this deployment safe at level L?" Safety is a property of agent-and-habitat. A better model card, a larger benchmark suite, or a cleaner training pipeline that does not change contact with the deployment habitat changes nothing about safety, however much it improves the evaluation numbers.

World corroboration, low overlap with the framework: Lee, Zhu et al. (Data61 CSIRO, arXiv 2026), opened 2026-11-24, write that "safety properties cannot be assessed independently of the surrounding system and its operational context". D'Amour et al. (JMLR 2022), opened 2026-11-24, report that underspecified pipelines "can return many distinct predictors with equivalently strong test performance" and that "such predictors can behave very differently in deployment domains." These are two distinct fields (software assurance engineering and ML methodology), so this is corroboration from low-overlap frames, not a single pool.

Verdict: **triangulated** (Fig 11 plus Fig 2 anchor rule, with two low-overlap world sources; Fig 11 and the world sources do not share an evidence pool). Mode: `general`.

**Refuter.** Fig 11 :71-72 itself supplies the standing falsifier: "an agent-only improvement that moved the ground would refute the capability claim." Concretely: show an intervention internal to the model that changes deployment harm rates at level L without changing contact with any habitat actor, condition, or relation. If that happens, the capability claim, and with it the safety reading, is wrong.

### F2 : A test harness is a substituted habitat; evaluation evidence proves wiring, never safety in deployment

Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**

Fig 11 :67-69: **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."** **"what you failed to reproduce is invisible until the goal fails"** and **"what you unintentionally introduced is invisible until it acts."**

A benchmark, a red-team exercise, and an eval harness are substitutions. Two failure modes are silent: the conditions the harness failed to reproduce are invisible until the goal fails in deployment, and the actors the harness unintentionally introduced (the grader, the honeypot cues, the fixed seed) are invisible until they act. This is the figure's isolation law applied to safety evidence. It explains why a certificate can be perfectly coherent inside the lab and still not range against the ground.

World corroboration: Kwa, West et al. (METR, NeurIPS 2025), opened 2026-11-24: "Despite rapid progress on AI benchmarks, the real-world meaning of benchmark performance remains unclear", and their discussion cautions that "time horizon is always measured relative to a domain, task distribution, and human baseliners' level of skill and context." Oakden-Rayner et al. (CHIL 2020 / arXiv 2019), opened 2026-11-24: "Worryingly, when these subsets are not labelled, even performance measurements on a held-out test set may be falsely reassuring." Phuong et al. (arXiv 2024), opened 2026-11-24, pilot dangerous-capability evals and state "We do not find evidence of strong dangerous capabilities in the models we evaluated, but we flag early warning signs", which is a careful report of non-detection, not a safety certificate.

Verdict: **triangulated** (Fig 11 substitution law plus Fig 4 round-trip requirement plus three world sources in capability evaluation and medical imaging that do not share the framework's evidence pool). Mode: `specified`.

**Refuter.** Show that a harness reproduces every contact in the habitat that is causally relevant to the harm residual at level L, including second- and third-order cascades, and that deployment outcomes match harness outcomes under the same threshold. Fig 11 :52-53 is the warning this refuter must clear: "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." If a harness can clear that enumeration, the substitution claim is false for that class.

### F3 : Aggregate evidence hides the live slot

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**

Fig 1 :20-21: **"a global residual near zero with one live slot is a legal state and not an inert one."**

Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

Fig 5 :58-59: the selector ranks "a term whose residual PERSISTS AND DOES NOT TREND DOWN" with the opposite sign; the live slot is the one to attend to, not the global mean.

A single safety score, an overall pass rate, or a fleet-wide incident rate is exactly the aggregation the figure forbids. For autonomy level L, the relevant slots are level, domain, subgroup, task class, and cascade depth. A global score near zero with one live slot (say, rare high-severity cases) is a legal state, not evidence of safety.

World corroboration: Oakden-Rayner et al. report "aggregate performance measures such as accuracy, sensitivity (i.e. recall), or ROC AUC can be dominated by larger subsets, obscuring the fact that there may be an unidentified subset of cases within which performance is poor", with relative performance differences "of over 20% on clinically important subsets." This is a direct empirical instance of Fig 1's per-slot law from medical imaging.

Verdict: **triangulated** (Fig 1 and Fig 5 are different figures with different mechanisms, plus a low-overlap empirical field). Mode: `general`.

**Refuter.** Produce a case where a single aggregate score tracks the persistently failing slot as well as a per-slot index does, across a change of habitat, or demonstrate an instrument that detects the hidden stratum without enumerating slots. The world literature itself notes the limit: in Oakden-Rayner et al., "schema completion is fundamentally limited by the understanding of the schema author; if important subclasses are omitted, schema completion does not protect against important clinical failures."

### F4 : Absence of observed harm is not evidence of safety

Fig 8 :39: **"a search that finds nothing is never a proof of absence."**

Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room."**

Fig 6 :34-35: **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."**

No evaluation suite is a sealed room, so "we ran N tests and found no harm" is a statement about the budget and the suite, not about the world. If a harm class has never registered at any resolution, there is no instrument to sharpen and no edge to extend from. The status is unreachable-at-this-budget, not underivable-in-principle, and the two "issue different instructions" (Seat Map :207). More tests of the same suite buy more search, not more evidence (Fig 6 :49-50).

World corroboration: Phuong et al. explicitly separate non-detection from safety, and the International AI Safety Report 2026 (Bengio et al., opened 2026-11-24) notes in its technical-safeguards update that "significant gaps remain: sophisticated attackers can often bypass current defences, and the real-world effectiveness of many safeguards is uncertain."

Verdict: **triangulated** (Fig 8, Fig 9 and Fig 6 are distinct figures; world corroboration from a different field). Mode: `general`.

**Refuter.** Prove the evaluation frame is a sealed room for the harm class at level L: complete enumeration of the habitat, a saturating instrument, and a closed channel. Fig 9 :44 says no frame is a sealed room, so a successful refuter would break a foundational law here, not merely add tests.

### F5 : Verdicts come from the ground, not from agreement between correlated evaluators

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."**

Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence."**

Fig 7 :13: **"agreement compounds, evidence does not."**

Fig 9 :51: **"evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it."**

Ten review boards reading the same eval report are one frame with ten names. A benchmark suite and a red-team report produced by the same lab, on the same model, with the same threat model, are one pool. Evidence about the residual (deployment behavior at L) is admissible; evidence about the maker (the lab's reputation, the model's pedigree, the size of the eval budget) is excluded. Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."** Safety is a high-cost-of-wrong verdict, so independence is worth paying for.

Verdict: **triangulated** (Fig 2, Fig 7, Fig 9, plus Seat Map :163 and :171). Mode: `general`.

**Refuter.** Show that two frames drawing on one evidence pool constitute two witnesses for a verdict about the world, which would overturn the effective-sample-size law named in Fig 2 :44. Or show that evidence bearing only on the maker can settle a question about the residual. Fig 8 :50 states the legitimate alternative: "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." Convergence from separate experience is admissible; pooled repetition is not.

### F6 : "Sufficient at level L" is a threshold comparison that must be bound as an ordinary term

Fig 12 :87 (operators table): **"a threshold relation between two quantities."** Operators table :52: **"a goal is a comparison, which is why a vocabulary without it cannot state one."**

Fig 5 :65-66: **"make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."**

Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

"Safe for a particular level of autonomy" has two operands: realized risk and acceptable risk at L. The bond is ⋛, a comparison, so safety is a **goal**, not an invariant atom. A frame cannot check the direction of its own question (Fig 5 :62-64), so "safe enough" held only as a preference is invisible to every internal check. The remedy is the discipline: write the threshold down before the run, bind it, and let it accrue a residual. This is why the question's phrase "particular level" is load bearing: it is the comparison operand. Without it, "safe" is unbound.

Verdict: **single-source for the bond definition** (Fig 12 and the Operators table are one source family), **triangulated for the discipline** (Fig 5 plus Fig 3 plus Seat Map :192 on direction as a seat office). Mode: `specified`.

**Refuter.** Exhibit a safety claim stated as a pure invariant (no threshold, no level operand) that settles at the ground and remains composable. Under Fig 5 this lands in the TRANSFERRED bin, not the comparison bin, and the ⋛ reading would then govern another quantity. Recorded as a strain in §6, not hidden.

### F7 : Sufficiency is not delivered once; the channel to the ground decays

Fig 10 :24: **"the ground does not decay, the channel does."**

Fig 10 :25-26: **"stale percepts, dropped transients, saturated metrics, pooled readings."**

Fig 10 :27-28: **"the output is not a verdict, it is you have lost touch."**

Fig 11 :61: **"The seat's power is asymmetric. Introduction is available; exclusion is not."**

Fig 11 :63-64: **"Which is why a managed ecosystem is permanent work rather than a solved state."**

A green monitoring dashboard can mean the channel is healthy or that it has lost contact with deployment; from inside, "these look the same" (Fig 6 :27). A certificate delivered at time t does not stay sufficient as the model, prompts, tools, users, and environment change. Introduction of oversight is available; subtraction of the habitat is not, so safety assurance is permanent work.

World corroboration: Lee, Zhu et al. state that "evidence must be continually refreshed as model behaviour and deployment contexts evolve", and describe assurance as "a process of continuous learning rather than static certification." The NIST AI RMF page (NIST, 2023, revised 2026), opened 2026-11-24, describes the framework as "intended for voluntary use and to improve the ability to incorporate trustworthiness considerations into the design, development, use, and evaluation of AI products, services, and systems", a process framing rather than a one-time label.

Verdict: **triangulated** (Fig 10 and Fig 11, plus two institutional and engineering sources). Mode: `general`.

**Refuter.** Show a frozen configuration whose safety evidence remains decisive after its deployment context changes, with the channel demonstrably intact (no stale percepts, no pooled readings). That would refute the "permanent work" reading for that class of systems.

### F8 : The gap between evaluation claim and deployment outcome must be measured, not assumed zero

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Fig 5 :69-70: **"settling is necessary for a term to be composed over, and it is not sufficient."** "A term is settled when the ground pays for it. A term is usable when something can compose over it."

Fig 9 :32: **"you get a kind of thing, never the answer itself."**

An eval score settled against a harness is settled for the harness. It is not thereby composable into a claim about deployment. The condensation from a safety case to a single "sufficient evidence" checklist is lossy; the loss is `R_T`, the round-trip gap, and treating the condensed form as identical to the ground reading is dead reckoning. What survives the trip is a shape: per-slot, ground-ranged, low-overlap, threshold-bound, maintained. What does not survive is any specific number or checklist that claims to be sufficient in general.

Verdict: **triangulated** (Fig 4, Fig 5, Fig 9). Mode: `general`. The second-seat audit in `11_audit.md` enumerates `R_T` qualitatively.

**Refuter.** A measured round trip with zero gap for a stated class, using a real instrument at the ground, would show the condensation is not lossy for that class. The figures do not forbid this; they forbid assuming it without measurement.

### F9 : What actually survives

| claim | mode | figure or source |
|---|---|---|
| Safety is a property of agent and habitat, never of the agent alone | `general` | Fig 11 :39-40, triangulated |
| An eval harness is a substituted habitat; a pass proves wiring, never deployment safety | `specified` | Fig 11 :70, :67-69 |
| Evidence must be indexed by slot, not aggregated into one score | `general` | Fig 1 :19-22 |
| No-harm-found is not proof of safety | `general` | Fig 8 :39, Fig 9 :44 |
| Verdicts come from low-overlap triangulation against the ground, not agreement | `general` | Fig 2 :31-32, :35, :40, Fig 7 :13 |
| "Safe at L" is a threshold comparison and must be bound before the run | `specified` | Fig 12 :87, Fig 5 :65-66 |
| Assurance is maintained work, not a one-time certificate | `general` | Fig 10 :24-28, Fig 11 :61, :63-64 |
| A specific content list of sufficient evidence for all systems | **refused** | Fig 9 :32; framework returns a shape, not a name |

---

## 2b. Additions and corrections during the run

**A1 : The first draft asked "which tests are sufficient?" Re-censused.** That question asks for a name, while Fig 9 :32 gives a kind of thing. Re-census (per the canonical rule that a strained reading means the wrong domain) moves the question from D1 (which tests) to D2 and D4 (what relation the evidence must bear to the ground and the threshold). The specific-test list is not refused as useless; it is demoted to an application-level question that only a ground reading can answer for a specific system and habitat.

**A2 : Hidden stratification was initially filed as an empirical caveat. Reclassified.** After the census it is not a separate empirical finding but an instance of Fig 1's per-slot residual law. The world paper corroborates the figure; it does not supply the verdict. This matters because two sources quoting the same review are one witness (source ledger overlap column).

**A3 : AMLAS PDF withdrawn as a cited source.** The guidance document `AMLASv1.1.pdf` at the University of York appeared in search results with a definition of a safety case, but the fetch returned "Unsupported fetched file content type: application/pdf" on 2026-11-24. I did not open it, so I did not cite it. The safety-case definition in this folder is taken from the Lee, Zhu et al. arXiv HTML paper, which was opened.

---

## 3. Pre-registered refuter (written before the conclusion)

Required before any outreach: Seat Map :287 says "a falsifier written before the run is a design instrument, not only an honesty device."

The shape claim is refuted if any of the following holds:

1. **Ground-independence fires.** An agent-only improvement moves the ground on harm at level L, with no change in habitat contact (breaks F1 and Fig 11 :40).
2. **Substitution clears.** A harness is shown to reproduce every causally relevant contact, including cascades three steps out, and deployment outcomes match it under the stated threshold (breaks F2 and Fig 11 :70).
3. **Aggregation suffices.** A single aggregate safety score tracks the persistently failing live slot as well as per-slot indexing does, across a habitat change (breaks F3 and Fig 1 :19).
4. **Non-detection settles.** A bounded search with no observed harm is accepted as proof of absence by a sealed-room argument (breaks F4 and Fig 8 :39).
5. **Pooled agreement counts.** Two evaluators drawing on one evidence pool are admitted as two independent witnesses for a verdict about the world (breaks F5 and Fig 2 :40).
6. **Invariant settles.** A threshold-free invariant claim is settled at the ground and composable, showing ⋛ governs a different quantity (breaks F6; recorded strain).
7. **One-time suffices.** Frozen evidence remains decisive after the deployment context changes, with an intact channel (breaks F7 and Fig 10 :24).

If any fires, the shape is withdrawn or narrowed accordingly. Until one is run, no part of this may be labelled `grounded`. Note that none of these is a request for agreement or for a larger eval budget; each is a ground-level or structural test.

---

## 4. Recommendation

1. **Do not answer with a checklist.** Answer with the shape any sufficient-evidence account must have, and mark the slot for the threshold `???` until a ground settles it (F6, F8).
2. **Lead with the residual and the refuter, in that order.** Fig 10 :52: "Bring a characterised residual, never the source." Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit."
3. **Price independence, not volume.** Buy two or more genuinely low-overlap instruments ranged against deployment outcomes; do not multiply reviews that share a pool (F5).
4. **Index the claim.** State the autonomy level, the domains, the subgroups, and the cascade depth; keep the live slot visible (F3).
5. **State the threshold as an ordinary term before the run** and attach a refuter (F6, §3).
6. **Measure `R_T`** between the evaluation claim and the deployment outcome instead of calling the condensation identical (F8).
7. **Treat assurance as maintenance.** Keep the channel reachable; a green dashboard is a report on the channel, not a verdict on the world (F7).
8. **Send the generator, not the recording.** Fig 4 :22: "Only methods cross up. Only head starts come down." The generator here is the shape plus refuter, not a list of passed tests.

---

## 5. Canonical usage check

Two local canonical sources were read after the first four sections and they govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also states "a reading that makes one contradict another has misidentified its domain, not found a flaw", and that the framework says what a missing thing would look like, **"a shape, not a name"**, then stops at the limit of what instruments can distinguish and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md` and `THE_SEAT_MAP_Field_Guide_amended.md`: mode must be stated; a falsifier written before the run is a design instrument; direction is a seat office, not something a frame can check for itself (Seat Map :192).

Applied here: the apparent conflict between "no evidence is sufficient" and "safety cases exist" is resolved by re-census, not by choosing a softer reading. Fig 11 governs the agent-habitat relation; the safety-case literature governs how practitioners structure arguments. They are different objects. The framework does not deny that a scoped, maintained, ground-ranged safety case can be sufficient for a specific deployment; it denies that a content-free, one-time certificate is sufficient in general, because naming that content would mean already holding the ground's answer.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "The answer is a fixed list of sufficient tests" | **Retracted at the question level.** Fig 9 :32 gives a kind of thing, never the answer itself (A1). |
| Hidden stratification as an independent empirical caveat | **Reclassified, not erased.** It is an instance of Fig 1's per-slot law; the world paper corroborates rather than decides (A2). |
| AMLAS PDF as a source for the safety-case definition | **Withdrawn.** Fetch unsupported; source was not opened and is not cited (A3). |
| F1 "safety is agent-and-habitat" | **Canonically confirmed.** Fig 11 :39-40 and the figures README's domain-agnostic, cross-kind composition rule. |
| F4 "absence is not proof" | **Canonically confirmed.** Fig 8 :39 explicitly, plus Fig 9 :44. |
| F6 threshold-free invariant reading | **Kept as a live strain, not smoothed.** See §6. |
| "This derivation settles the question" | **Never claimed; reaffirmed.** The essays' own rule: "the truly testable output would need to be derived from the real architecture or working the formula yourself." |

---

## 6. Strains, re-census and honest stop

- **Fig 9 "shape, not a name" versus the question's demand for sufficient evidence.** Re-census: Fig 9 governs a primitive missing from Γ; here the question seeks a certificate that is a preference, not a held term, so Fig 5 :65-66 governs. Different objects, no strain after re-census. The slot for the sufficient content stays marked `???`.
- **Comparison ⋛ versus pure invariant safety.** Live strain. Fig 12 :87 defines ⋛ as a threshold relation and Operators :52 ties it to goals; the word "particular level" supplies the second operand. A threshold-free invariant claim would strain this reading and would have to be handled by the TRANSFERRED bin of Formula step 2. Named in F6 and in the refuter, not hidden.
- **Fig 11 capability claim versus deployment evidence.** The figure itself says (Fig 11 :71-72) the isolation law and capability claim "fit cases already known and have not been tested forward, so they can still come back wrong." This solution inherits that standing caveat.
- **Strain after re-census:** one live (comparison versus invariant), none hidden.

**Honest stop.** The shape is reachable. The content of a sufficient evidence package for a named system at a named autonomy level is unreached here: it needs a ground reading (deployment outcomes under that level), an instrument that discriminates the live slots, and a threshold convention stated by a seat and settled by the ground. This run took no such measurement. "Unreachable is a verdict here, not a silence" (Fig 13 :134). The lineage is recorded so a reader can locate where the stop occurred and what would move it.
