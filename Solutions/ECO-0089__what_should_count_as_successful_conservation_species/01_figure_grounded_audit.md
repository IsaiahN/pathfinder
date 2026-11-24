# Figure-grounded audit: what should count as successful conservation?

**Mode of this document: `specified`, not `grounded`.** It states the shape a success report must have and what would have to be measured to settle any particular case. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** LLM output is a simulated derivation checked for internal consistency against the figures. The Recursive Self-Improvement Trap warns that an approximate answer can be simulated but the testable output would have to be derived from the real architecture or obtained by working the formula against a ground. This document does not analyse a dataset, run a monitoring program or settle a real conservation dispute. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6 for the full statement.

**Sources used.** The verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md` (primary, cited as `Fig N :line`), `THE_FORMULA.md`, the canonical figures README, the amended Seat Map, and eight world sources opened on 2026-11-23 and recorded in `10_source_ledger.csv`.

---

## 0. The question restated in effect terms

> "What should count as successful conservation: species persistence, ecosystem function, evolutionary potential, or human well-being?"

The question looks like a multiple choice with one correct option. The derive-first method requires stating the residual in effect terms before choosing any figure line.

A conservation actor (a manager, agency, community or policy) makes an intervention. The library Γ holds terms for what a successful outcome looks like: continued existence of a species, delivery of a process, retention of adaptive capacity, improvement in a person's life. Before acting, the actor predicts an outcome under one of those terms. After acting, the world returns an observation. The residual is the difference between prediction and observation, indexed per object slot:

`R_s = |Γ(b,a)_s - o'_s|` for each slot `s`, where `s` ranges over populations, processes, lineages and people, not over a single aggregate.

The question "what should count" is asking which of those four terms is the anchor that settles the residual. Three consequences follow immediately and must be carried through the whole audit.

1. **The residual is per slot.** "The residual is indexed by object slot, not aggregated" (Fig 1 :19). "Aggregating across slots is how a live signal disappears into an average" (Fig 1 :22). A single score that rolls four criteria into one composite is disqualified before any criterion is chosen, because it throws away the location of the live signal.
2. **The four candidates are frames, not synonyms.** Each has different actors, a different currency and a different anchor. "Only the actors, the currency and the anchor change" (Fig 4 :20). They are not four names for one quantity, so their agreement cannot be treated as corroboration without measuring overlap (Fig 2 :31-32).
3. **The choice of term is itself a question about the objective link of the dependency chain.** "it can say what would count as progress here, in its own terms" (Fig 3 :10). "A link with no instrument is not a link that works. It is a link nobody has looked at" (Fig 3 :27). This is the link the question lives at.

**Direction bound as an ordinary term.** The sought-for shape is written down before the run so it can accrue a residual like anything else: *an answer is acceptable only if it says what is measured per slot, names the anchor for each constitutive question, keeps the four verdicts separate, splits the union before search, and states what would refute it.* A composite scalar, a single universal winner, or an unanswered "it depends" all fail this shape and are refusable by it.

---

## 1. Domain census, before any figure line is chosen

R described by arity, symmetry and scale, then one line per domain with actors, currency and anchor. No nameable anchor means it is not yet a domain.

- **R (the residual).** Arity: four conditions (persistence, function, evolutionary potential, well-being), so a **union with overlapping compound cases**, not one hard question. Symmetry: not symmetric under exchange. The currencies do not commute; abundance in kilograms of carbon or a well-being score cannot be substituted for a population count without loss. Fig 2 :31 defines independence precisely here. Scale: first order within a site or taxon, second order at the union of four criteria, and third order when cascades through the habitat are included (Fig 11 :52).
- **Domain D1, species persistence.** Actors: populations, individuals, metapopulations. Currency: abundance, occupancy, extinction risk, viability. Anchor: a count or census of organisms, which is exactly "a measurement, an experiment, a counter, a market, a patient outcome" (Fig 2 :29). Legitimate when the constitutive question is about continued existence.
- **Domain D2, ecosystem function.** Actors: processes, trophic links, nutrient cycles, functional groups. Currency: rates, fluxes, interaction strengths, trait diversity. Anchor: a measurement of a process rate (an experiment in the Fig 2 :29 sense). Legitimate when the constitutive question is about what the system does.
- **Domain D3, evolutionary potential.** Actors: genomes, alleles, lineages, metacommunities. Currency: heritable variance, adaptive capacity, genetic diversity over generations. Anchor: a measurement across generations, on a timescale the management action can actually reach. In an unmaintained system the anchor still settles: "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground" (Fig 11 :36).
- **Domain D4, human well-being.** Actors: people, communities, institutions. Currency: health, livelihood, security, subjective and objective well-being. Anchor: human judgment, but only under a strict condition discussed in F3. "Human judgment is the right anchor for is this a good answer for a person, because the question is about people" (Fig 2 :37).
- **Domain D5, the verification and reporting frame.** Actors: indicators, monitors, auditors, reviewers. Currency: agreement and residual. Anchor: the ground, never agreement. In this simulated run all domains draw on one evidence pool (the same figures, formula and literature), so this domain's independence is zero by construction.
- **Partition or union.** Union. A species viable in small isolated populations can persist and contribute little to ecological process, the "Noah's Ark" endgame described by Tobias et al. 2025. An ecosystem can deliver a service while losing evolutionary options; a community's well-being can rise while biodiversity falls (Naeem et al. 2016). These are compound cases with their own loops, not harder cases of a single criterion.
- **Order by dependency (Fig 3).** Perception first: can the slot be measured at all? Vocabulary second: are there terms for what the situation affords? Objective third: what counts as progress in this domain? Planning and carrying come after. The question under audit sits at the objective link. "Optimising a link that already works cannot rescue one that does not" (Fig 3 :19).

**Strain test applied before concluding.** The obvious temptation is to read Fig 2 :37 as making human well-being the universal winner, since people are involved in every conservation decision. That is a strain. Fig 2 :37 governs a question constitutively about a person, not every question that has people in it. A more careful reading sends it back to D4 only. The strain is recorded, not smoothed, in section 5.

---

## 2. Figure census

| figure | bearing on this question | provisional verdict |
|---|---|---|
| **1 The Agent** | residual per slot, aggregate hides the signal, ground is the only metric | no ground reading here; disqualifies composite scalars |
| **2 The Ground** | anchor test, independence, correlation valence, convention guard | governs which criterion may anchor which question |
| **3 Dependency Chain** | objective link is the middle link, usually unmeasured | this question lives at the objective link |
| **4 The Membrane** | actors, currency and anchor are what change between domains | supports the four-domain census |
| **5 Mint Pipeline** | output is not a measure of success; guards as a product | disqualifies a program's own reported indicator |
| **6 Closure / Reachability** | import is the only operator that moves the wall; instruments improved from worse ones | separates an unchosen criterion from an unavailable one |
| **7 Room Chain** | agreement compounds, evidence does not | multiple agreeing indicators are one witness |
| **8 Union Surplus** | residual first, frame second; low overlap for a surplus | governs the union and the search order |
| **9 Leave / Arrive** | split rather than search; unbundle a union; shape not a name | decisive for question form |
| **10 Ground Maintainer** | declared meaning is not grounded; verifier non-access; convention guard | governs the reporting frame |
| **11 The Habitat** | habitat enumerated never composed; cascades; introduction asymmetric; permanent work | governs persistence-only scoping and the "solved state" error |
| **12 The Bond** | isomers, functional group, comparison as a goal | supporting derivation in `06_isomers_and_order.md` |
| **13 Minimum Viable Set** | unreachable is a verdict; a shape not a name | governs the `gap` verdict on a universal criterion |
| **Operators table** | a goal is a comparison; progress is a subtraction | each criterion carries its own threshold |
| **Symbols table** | R is always a slice, per slot, never a single global number | confirms Fig 1 at the notation level |

---

## 3. Findings, with verbatim lines and refuters

### F1 - The four criteria are distinct domains, so the question must be split (decisive for question form)

Fig 9 :4-5:

> **"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."**

Fig 9 :54:

> **"when the split lands on a union rather than a partition, unbundle before you search again."**

Each candidate rule works well on a different subset. Persistence works for a single recovering population. Function works for a process. Evolutionary potential works over generations. Well-being works for a person or community. Searching harder for the one true criterion across all four subsets is the wrong operation; the question must be split and the union unbundled. Fig 4 :20 supplies the census rule: **"Only the actors, the currency and the anchor change."** That is the sense in which these are different frames rather than competing names.

World corroboration: Milot et al. 2020 write that "different objectives, such as maintaining species richness versus ecosystem services, may express different, when not conflicting, underlying values attributed to biodiversity." Capmourteres and Anand 2016 found the term "conservation value" has "many different meanings, and is measured using a variety of metrics." Both are secondary and neither decides.

- **Refuter:** a demonstration that all four criteria reduce to one latent variable with a single instrument, such that each rule works on the same subset rather than a different one, would collapse the union to a partition and refute F1.
- **Status:** `triangulated` across Fig 9 and Fig 4, with low conceptual overlap between the question-form rule and the domain-census rule. `general` mode.

### F2 - Success is a per-slot vector, not a composite scalar

Fig 1 :19 and Fig 1 :22:

> **"The residual is indexed by object slot, not aggregated."**
> **"Aggregating across slots is how a live signal disappears into an average."**

A single "conservation success index" that adds a population count, a process rate, a genetic variance and a well-being score is exactly the aggregation these lines forbid. The live signal is the slot that is still failing. If one of the four domains is collapsing while the other three improve, a composite reports improvement and deletes the only information that says where to look. The Symbols table confirms at the notation level that `R` is always a slice.

World corroboration: Brichieri-Colombi et al. 2018 built SPECCS with separate biological benefit, biological resilience, socioeconomic benefit, socioeconomic resilience and linkage scores rather than one number, and reported a case where socioeconomic performance (86%) and biological performance (60%) diverged. Akcakaya et al. 2025 introduced a recovery index precisely because existing indices did not measure recovery, saying it goes "beyond extinction risk and population abundance" rather than replacing the separate indices.

- **Refuter:** a validated instrument that returns the same decision from the composite as from the full slot vector across all cases, including cases with one live failing slot, would refute F2.
- **Status:** `triangulated` across Fig 1 and the Symbols table. `general` mode for the ban, `specified` for the prediction that a composite hides a live slot.

### F3 - No criterion is the universal anchor; each is the anchor of a different constitutive question

Fig 2 :29-30 and Fig 2 :36:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."**
> **"An anchor is legitimate when the question is constitutively about it."**

Fig 2 :37:

> **"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."**

The anchor rule is conditional on what the question is about. If the constitutive question is "did the species persist," the counter is the anchor and D1 governs. If it is "does the process still run," the experiment is the anchor and D2 governs. If it is "can the lineage still adapt," the across-generation measurement is the anchor and D3 governs. If it is "was a person better off," human judgment is legitimately the anchor, because that question is about people, and D4 governs. What the figures do not supply is a fifth question called "conservation success in general" with a standing anchor. Picking one of the four as the permanent winner is the error Fig 2 :36 warns against: it would make the anchor legitimate for a question the framework has not been asked.

**Strain handled here.** Reading Fig 2 :37 as a universal endorsement of well-being is a strain, because the line is explicitly scoped to a question about a person. Re-census returns it to D4. The overstatement is preserved in section 5 and in `05_what_shape_means.md`.

- **Refuter:** a figure line stating that one of the four criteria is the anchor for conservation regardless of what the question is constitutively about would refute F3. A close second: showing that a criterion can serve as anchor while moving whenever a frame pushes on it, which would violate "If it moves when you push on it, it is not an anchor" (Fig 2 :29-30).
- **Status:** `triangulated` across Fig 2 :29-30 and :36-37. `specified` mode.

### F4 - A chosen criterion is a convention, and a convention that decides an outcome has stopped being one

Fig 2 :43:

> **"a convention that decides an outcome has stopped being one"**

Fig 10 :18:

> **"a declared meaning is not a grounded one"**

Fig 10 :46 adds that a convention "makes no claim about the world; a verdict and an atom both do." Declaring "success means species persistence" does not make a species persist. The danger is the slide: a criterion adopted by agreement to coordinate attention starts determining which projects get funded, which reports count as successful and which failures are invisible. At that point the convention has become a ground that no frame can move, which is the coherent-drift collapse Fig 2 names as "collapse 1: mutual update" (Fig 2 :4). The guard is to declare the choice, keep it revisable and range it against the ground separately (Fig 2 :45).

World corroboration: Milot et al. 2020 argue that advocates of evolutionary potential must make their normative commitments explicit, because "the impression that one may have when reading papers is that conserving evolutionary potential can only be a good thing" hides conflicting values. Naeem et al. 2016 find that biodiversity and well-being are "typically treated in isolation and their linkages are neglected," a failure of declared meaning at framework level.

- **Refuter:** a case in which a declared success criterion remained a pure coordination device and never influenced which outcomes were counted or funded, with the separation auditable, would show that this guard is not needed there.
- **Status:** `triangulated` across Fig 2 and Fig 10. `specified` mode.

### F5 - Conservation success is permanent work, not a terminal state

Fig 11 :61 and Fig 11 :63:

> **"Introduction is available; exclusion is not."**
> **"Which is why a managed ecosystem is permanent work rather than a solved state."**

Fig 10 :24:

> **"the ground does not decay, the channel does"**

A binary declaration that conservation "succeeded" is a category error against these lines. The seat can add actors and cannot subtract the habitat, because contact is a fact about the world that does not consult the manager. The channel (monitoring, funding, attention) decays even when the ground does not, so a project declared complete can lose contact without anything in the ecosystem changing. Success has to be reported as a maintained relation, with the maintenance itself under audit. Simkins et al. 2025 corroborate at the world level: "While conservation interventions have reduced the extinction risk of some of the most threatened species, in very few cases has full recovery been achieved," and deterioration outnumbered improvement roughly six to one.

- **Refuter:** a demonstrated case where a conservation outcome, once reached, remained stable without any continuing maintenance of the channel and with no decay in contact, would refute the "permanent work" reading.
- **Status:** `triangulated` across Fig 11 and Fig 10. `specified` mode.

### F6 - A persistence-only criterion scoped to direct contact misses the cascade

Fig 11 :43 and Fig 11 :52:

> **"The habitat is enumerated, never composed."**
> **"Scoping the habitat to direct contact is how DDT reached the eagles"**

The habitat is the field of contact: actors, conditions and relations, read off the world outward until the cascade stops mattering (Fig 11 :44). Fig 11 gives the canonical case: the residual that mattered was three steps out. A species can persist while the soil, the pollinator or the prey base that supports it is degrading one or two steps away; the persistence indicator stays green and the live residual is elsewhere. This is not an argument against counting species. It is an argument that a persistence slot must be read against an enumerated habitat and a cascade horizon, and that the horizon is part of the success report.

Fig 11 :67 sharpens the same point for relocations and captivity: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** A population in a captive or fenced setting has a substituted habitat, with things the manager did not choose. Counting it as "persisted" without declaring the substitution is a benign-looking version of the same scoping error.

- **Refuter:** a case where a direct-contact species count tracked the system's response through two or more cascade steps with no lost signal, across independent habitats, would refute the enumeration requirement.
- **Status:** `triangulated` across Fig 11 :43, :44, :52 and :67. `specified` mode.

### F7 - A program's own output is not its measure of success

Fig 5 :48 and Fig 10 :42:

> **"Its own output is never a measure of success."**
> **"A verifier that can reconstruct the claim cannot verify it."**

If the same team defines the criterion, collects the indicator and declares success, the arrangement is mutual update: the frame scores itself with a quantity it also produces. Fig 1 :27 puts the general rule: "A frame cannot score itself with a quantity it also produces." The reporting frame must be outside the frame being graded, must carry only what it did not author, and must range separately against an anchor that does not move when it is pushed (Fig 10 :37, Fig 2 :45). This does not mean practitioners cannot monitor their own work. It means a self-report is a claim, not a verdict, and carries no corroborating weight when it agrees with the claim it measures.

- **Refuter:** a verified arrangement in which a self-produced indicator was shown to be independent of the producing frame, with the source of its reading outside that frame's closure, would refute the blanket exclusion here.
- **Status:** `triangulated` across Fig 5 and Fig 10. `specified` mode.

### F8 - Correlated indicators are one witness, not four

Fig 2 :40 and Fig 7 :13:

> **"agreement about the world is worthless when the agreeing frames share an evidence pool"**
> **"agreement compounds, evidence does not"**

Four indicators that all rise because they draw on the same monitoring program, the same sites and the same funding cycle are one frame wearing four names. Fig 8 :50 distinguishes the legitimate case: "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." Convergence requires separate derivation and a record showing where each came from. Fig 8 :51 adds that "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them." So the success report must carry provenance for each indicator, and agreement counts only at measured low overlap. Fig 2 :42 gives the budget rule: "Buy independence in proportion to the cost of being wrong."

- **Refuter:** a demonstration that the four indicators were derived from genuinely disjoint evidence and instruments, with quantified low overlap and separate provenance, would upgrade them from one witness to four and refute the blanket warning in this particular case.
- **Status:** `triangulated` across Fig 2 and Fig 7, with Fig 8 supplying the convergence exception. `general` mode.

### F9 - The universal single criterion is a `gap`, a verdict and not a silence

No figure line from Fig 1 to Fig 13, nor the Operators or Symbols tables, names species persistence, ecosystem function, evolutionary potential or human well-being as *the* anchor for conservation in general. F1 to F4 explain why the lines that look like candidates govern other quantities: Fig 2 :36 is conditional on what the question is constitutively about, Fig 1 governs how success is measured rather than what counts, Fig 9 governs the form of the question, and Fig 2 :43 governs the selection procedure. After a genuine re-census there is no line left that closes this residual. The correct report is:

Fig 13 :134:

> **"Unreachable is a verdict here, not a silence"**

Fig 9 :32:

> **"you get a kind of thing, never the answer itself"**

Fig 8 :39:

> **"So a search that finds nothing is never a proof of absence."**

The honest status is unreached rather than demonstrably unreachable in principle. Under the formula's step 7, SEARCHED was answered first: the closure of these figures was inspected and no candidate found. INWARD would mean sharpening the constituent-question test. OUTWARD would mean importing a normative frame that states which values conservation serves. Those are opposed tracks and must not be read against one another. Importing an answer to a question about values would add an atom that is not in the figure set, and Fig 6 :24 warns that "A wrong atom costs more than starting from primitives."

- **Refuter:** any of the following would close the gap and refute F9: (a) a verbatim figure line naming one criterion as the general anchor; (b) a constitutive restatement of the question that the whole field accepts, since Fig 2 :36 would then supply an anchor legitimately; (c) a ground reading showing that one slot's residual is the only one that ever persists and stays flat, which would give the selector something to point at.
- **Status:** `gap` after re-census. This is the load-bearing honesty point of the package.

---

## 4. Pre-registered refuter

Written before the recommendation and before the WATSON verdict. "A falsifier written before the run is a design instrument." The shape claim fails if any of the following holds.

1. A verbatim line in `03-FIGURES_TEXT.md` elevates one of the four criteria to the anchor for conservation in general, with no constitutive restriction.
2. A validated instrument returns the same decision from a single composite as from the full per-slot vector across all cases, including cases with one live failing slot.
3. All four criteria are shown to load on one latent variable with disjoint instruments, collapsing the union to a partition.
4. A direct-contact species count is shown to track cascade effects two or more steps out with no lost signal across independent habitats.
5. A conserved outcome remains stable with no continuing maintenance of the monitoring or funding channel and with no decay in contact.
6. A self-produced indicator is demonstrated to be independent of its producing frame, with its reading sourced outside that frame's closure.

If any fires, the shape claim is withdrawn or narrowed, and the correction is kept visible in this section and in `11_audit.md`. No fire has occurred in this simulated run, which is not evidence that they could not fire.

---

## 5. Recommendation

1. Report success as a vector of per-slot residuals across D1 to D4, never as a composite (F2).
2. Split the question before searching. Treat it as a union of four conditions with compound intersections, each with its own loop (F1).
3. For each report, declare which constitutive question is being asked, and derive the anchor from that question rather than appointing a permanent winner (F3).
4. Keep the criterion as a declared, revisable convention. Do not let it decide outcomes (F4).
5. Enumerate the habitat outward to the cascade horizon and declare any substitution of habitat (F6).
6. Keep the producer of an indicator outside the frame it grades, and treat self-report as a claim (F7).
7. Count agreement only at measured low overlap, with provenance for each indicator (F8).
8. Say `gap` on the universal criterion. Do not fill the slot with a name the figures do not supply (F9).
9. Send the generator (the residual, the shape and the refuter), not the conclusion. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion."

---

## 6. Canonical usage check

Two local sources govern how the figures may be used and were read after the first five sections.

- The canonical figures README states that the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them" and that "the quotes are the authority, not this summary." It also gives the re-census rule: a reading that makes one figure contradict another has misidentified its domain. The framework returns "a shape, not a name" and stops at the limit of what instruments distinguish, recording the lineage so the stop is honest. "Indiscernibility is not identity."
- `THE_FORMULA.md` step 7 distinguishes SEARCHED, INWARD and OUTWARD, and its Direction section requires making the sought-for shape an ordinary term so it can be refused. Step 5 states that "SETTLE the ground settles it. Verified only by what pays. A gate is not the ground." Nothing in this folder is settled, so every substantive mode is `specified` or `general`, never `grounded`.

### Retractions, corrections and confirmations, kept visible

| earlier reading | status after the canonical check |
|---|---|
| "Human well-being is the anchor because people are involved" | **Retracted.** Fig 2 :37 is scoped to a question constitutively about a person. It governs D4 only. Restored in F3 as a conditional anchor. |
| "Species persistence is the base criterion, so it wins by default" | **Retracted.** Fig 11 :61-63 makes management permanent work, so persistence is a slot in a vector, not a terminal verdict. F5. |
| "Four indicators agreeing is four witnesses" | **Retracted.** Fig 2 :40 and Fig 7 :13 disqualify a shared pool. Fig 8 :50 allows convergence only with separate derivation and a record. F8. |
| "Shape, not a name" forbids naming any of the four criteria | **Narrowed.** The README's phrase governs a *missing* thing. All four criteria are already-held frames in the world literature, not missing primitives of the figure set. Naming one as the anchor of a constitutive question is a declared convention (F4), not the invention of a fifth primitive. The overstatement is preserved here so it is not quietly lost. |
| "This is a gap because the framework is incomplete" | **Narrowed.** It is a gap because no line governs a universal winner. The framework does return a shape for the report, and the shape is checkable. Unreachable is a verdict, not a failure. |
| Apparent strain Fig 2 :36 versus D4 | **Not strained after re-census.** Fig 2 :36 supplies a conditional rule; D4 is one of its legitimate instances. Different quantities, so no contradiction. |
| Apparent strain Fig 9 "split" versus Fig 12 isomers | **Not strained.** Fig 9 governs question form (which loops to run); Fig 12 governs arrangement over a shared atom set. `06_isomers_and_order.md` keeps the two separate. |

### Round trip, briefly

The condensation from the figures into the shorthand "report a per-slot vector and split the union" is lossy. What survives the trip back down is the ban on aggregation, the conditional anchor and the gap on a universal winner. What the shorthand drops is the habitat-cascade horizon (Fig 11 :52), the convention guard (Fig 2 :43), the independence measurement (Fig 2 :31-32) and the permanent-work condition (Fig 11 :63). `11_audit.md` records this as a nonzero R_T rather than assuming the shorthand is the figures.

### Final status of this audit

The derivation is internally consistent with the verbatim figure text at zero strain after the re-census above. It is `specified` on the shape, `general` on the barrier rules and `gap` on the universal criterion. It is simulated and cannot settle the ecological question. The pre-registered refuter is live. The WATSON world sources corroborate and were not allowed to decide.
