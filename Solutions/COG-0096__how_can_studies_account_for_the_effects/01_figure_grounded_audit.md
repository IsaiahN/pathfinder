# Figure-grounded audit: COG-0096, exposures in compared populations

**Mode of this document: `specified` on the research-method consequences, `general` on the structural shape, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the cross-cultural question it reports on. See `05_what_shape_means.md` section 7.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Also `THE_FORMULA.md`, `FIGURES_README_canonical.md`, and the amended Seat Map for the two outreach rules. World sources are secondary and are listed with quotes in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`, `s`). Here:

- **b** is what a sampled person brings to the task. The Symbols table defines `b` as *"formed from its own history and from what it inherited, mixed by w"* and adds that *"Two frames with identical architecture diverge because their histories and their w diverge."* (Symbols :20-26). Migration, urbanization, media and schooling are precisely the histories and inherited priors that move `w`. This is the single most direct figure line for the question.
- **a** is the measurement act: translating an instrument, recruiting a site, deciding who counts as a migrant or an urban resident, administering a task, coding a response.
- **Γ(b,a)** is what the study's library predicts a person in that slot will score.
- **o′** is the observed response.
- **s** is the slot. R is indexed by person, site and cohort, never aggregated into a single population mean.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is **the persistence of a per-slot gap after the study has claimed to account for exposure**. Observed: two groups can differ on a score, the study can list migration, urbanization, media and schooling as covariates, and the gap can remain because the covariates were entered as if they were noise terms rather than as conditions that changed the mapping from construct to reading. A frame that predicts a single pooled adjustment cleans all comparisons has a residual here.

State the residual as: *why does the gap between what a cross-cultural instrument predicts for a sampled person and what that person actually returns persist, and change sign across sites, after migration, urbanization, media and schooling have been recorded?* This is an effect description. It names no method, no "confound", no "covariate", no "cultural dimension". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (i) a set of conditions that must hold before a between-group score difference may be read as a construct difference, (ii) a partition of the four exposures into conditions with distinct instruments, and (iii) an instrument that discriminates a construct difference from an exposure-driven reading, a translation artifact, a response convention and a motivation to perform. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* A test normed on one population, an expert's judgment of what "intelligence" means in another, and a self-report of acculturation all move when pushed by the investigator or by the respondent; they are instruments at best. Because the question is constitutively about people, local human outcomes can serve as anchors, but only if they are blind to the hypothesis being tested. Fig 2 :36-38: *"An anchor is legitimate when the question is constitutively about it."* and *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* Viable anchors: a locally defined outcome the instrument authors cannot move, a response-discriminating measurement, a prospective result. Not viable: consensus among the investigators, a global mean, a "validated" score whose validation pool is the comparison pool.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation indexed by exposure condition: migration history M, urban residence U, media diet D and schooling S, acting on a person-slot s at a site. It is not one comparison with four covariates; it is a union of four overlapping conditions (Fig 9 :55). It carries a **comparison** bond for "different from" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87) and an **ordered** bond for exposure history (`→`, *"A then B; B needs A to have happened"*, Fig 12 :72). Migration before or after schooling is a different molecule.
- **Symmetry.** "Different" is a threshold relative to a reference group, not an absolute quantity (Fig 12 :85-89). Exposure valence is not symmetric: the same schooling can raise performance on one task and suppress it on another. Fig 11 :49: *"An actor’s valence is relative to the residual, not a property it carries."*
- **Scale.** Three scales are in view: the single person's belief and response (Symbols :20-26; Fig 4 one-agent panel), the study's sample and site (Fig 4 population panel), and the between-site comparison that crosses a membrane. The membrane is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). An instrument transported from one population to another is a lossy crossing, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The sampled person's belief** | the respondent, private history, inherited prior, the learnable weighting w | belief update, residual reduction | yes: a locally observable outcome the respondent cannot move by answering differently | admitted |
| **D2 The habitat of the site** | migrants, urban residents, media sources, schools, institutions, conditions and relations | contact, survival, local payoff | yes: the site's own ground, enumerated not composed (Fig 11 :43-48) | admitted |
| **D3 The measurement channel** | translated items, response styles, response scales, recruitment, coding, retention | contact with the ground, or loss of it | yes: a response-discriminating instrument; a reading that fails against a locally defined outcome | admitted |
| **D4 The comparison frame** | the study's reference group, its investigator, its reviewer, its published norm | agreement, residual, prestige | partial: the ground for the verdict, but the reference group is an instrument that can move | admitted with the reference group demoted to instrument |
| **D5 The design convention layer** | who counts as migrant, urban, exposed, schooled; what counts as a failure | declarations with no truth value until they decide an outcome | no independent anchor; a convention is legitimate only while falsifiable (Fig 10 :47) | admitted as a convention, not a verdict domain |
| **X1 "Culture" as a free-floating cause of the gap** | the culture | an unnamed substance | **no** anchor independent of the readings it is invoked to explain | not a domain yet |
| **X2 "Socioeconomic status" as sole cause** | income, education, occupation | structural position | measurable, but already inside D2 as a habitat condition (Fig 11 :46) | absorbed into D2, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that culture is unreal. It is the same move Fig 11 :34-36 makes with "intelligence": *"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground."* X2 is not excluded but absorbed: naming it as a standalone cause would be first-order enumeration where the figure requires a cascade (Fig 11 :52).

### 1.3 Partition or union

D1 and D3 overlap: a belief is formed through the very channel that measures it, so their overlap is a compound with its own loop. D2 and D5 overlap: the definitions of who counts as exposed are authored inside the habitat they classify, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1 exposure-as-history**: migration, urbanization, media and schooling change the weighting `w` between private history and inherited prior (Symbols :24-26).
- **C2 exposure-as-habitat**: each exposure is a condition or relation in a site's habitat, with valence relative to the local residual (Fig 11 :43-51).
- **C3 exposure-as-channel**: each exposure can degrade the measurement channel while the ground keeps paying (Fig 10 :24-29) and can change response-scale usage without changing the construct (Sorokowski and Kowal 2024, read directly).
- **C4 exposure-as-convention**: the cut that defines "migrant", "urban", "exposed" is authored; a cut that decides the outcome has stopped being a convention (Fig 10 :47).

A study failing only C3 needs a response-discriminating instrument; a study failing only C4 needs a re-declaration of the cut. These are not different degrees of one problem. The Library of Babel essay states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."* (opened 2026-11-22).

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for a cross-cultural comparison: 1 perception (can the study read the local response at all?) → 2 vocabulary (does its instrument have terms for what the local situation affords, and can it say what would count as progress there?) → 3 objective (can it state a local comparison that counts as getting somewhere?) → 4 planning (a recruitment and analysis route under incomplete information) → 5 learn and carry (name what worked, verify it, carry it to the next site). The middle link is the one with no instrument. Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* An instrument holding only items cannot state what would count as getting somewhere in a site whose affordances it has not enumerated.

Because the exposures are histories, the order also has a temporal direction: migration before schooling is not schooling before migration. `→` is the correct bond for the exposure chain, and `+` would be a flat-form error (Fig 12 :5).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs indexing, not the cause of persistence |
| 2 The Ground | anchor must not update; independence vs common pool; valence of correlation | governs the reference group and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs transport of an instrument across populations |
| 5 Mint Pipeline | three guards as product; a preference is invisible to its frame | governs why "culture" cannot be minted as the answer |
| 6 Closure / Reachability | import is the only operator that moves the wall; cast in effect terms | governs how a local frame is reached |
| 7 Room Chain | same closure handed along; agreement compounds | governs repeated-norm comparisons |
| 8 Union Surplus | convergence vs adopted import; residual first | governs provenance and low-overlap witnesses |
| 9 Leave / Arrive | union vs partition; describe before looking; filters vs witnesses | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; convention deciding outcome | governs C3 and C4 |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; enumerate, never compose | decisive for D1 and D2 |
| 12 The Bond | isomer, functional group, bond carries the difference; two currencies | governs two groups with the same score |
| 13 Minimum Viable Set | closed set, open arrangements; unreachable is a verdict | governs the honest stop |

Strain test applied during this census: an early attempt to map the four exposures onto Fig 13's six physical terms only fit by calling urbanization a kind of space and media a kind of network. That is a strain, so Fig 13 does **not** govern the four exposures. Re-census sent Fig 13 to the honest-stop role only (section 8, strain S1). No other figure needed a strain after re-census.

A second strain was caught: Fig 2 :36-38 seems to forbid human judgment as an anchor, yet a cross-cultural question is constitutively about people. Re-census resolves it: human judgment is the right anchor for a question about people, but only when it is blind to the hypothesis; one culture's test norm is an instrument, not the anchor (section 8, strain S2).

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about research method, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The exposure changes the weighting between history and prior, not just the score

**Mode: `specified`. Domains D1, D2. Status: triangulated (Symbols table and Fig 11, low overlap: belief-weight definition vs habitat valence).**

> **"How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings. Two frames with identical architecture diverge because their histories and their w diverge."** (Symbols :24-26)
> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)

Two populations with identical cognitive architecture can therefore diverge in task performance because their histories and `w` diverge. That is the figure-grounded content of "accounting for migration, urbanization, media and schooling": these are not noise to be removed but the terms that set `w`. A covariate list that records years of schooling as if it were a nuisance parameter has already made the category error.

The world corroborates at a different stratum. Ritchie, Bates and Deary 2015 report that *"the association of education with improved cognitive test scores is not mediated by g, but consists of direct effects on specific cognitive skills"* (abstract, PMC, opened 2026-11-22). Schooling changes particular bonds, not a single general capacity, which is exactly the isomer/functional-group shape of F5 rather than a uniform shift. Because the study is within-population and the figure claim is about between-population comparison, the corroboration is of the mechanism shape, marked single-source for the cross-cultural application.

**Refuter:** a two-site study in which a documented difference in migration or schooling history produces no change in the measured weighting between private history and inherited prior on a task that is demonstrably sensitive to that weighting. If `w` is invariant across the exposure contrast, F1's mechanism is wrong.

### F2: The exposures are habitat conditions and relations, and must be enumerated per site

**Mode: `general` on the enumeration rule, `specified` on its application. Domain D2. Status: triangulated (Fig 11 and Fig 6, low overlap: habitat census vs closure/import).**

> **"The habitat is enumerated, never composed."** (Fig 11 :43)
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** (Fig 11 :44)
> **"conditions: light, water, temperature, season, terrain"** (Fig 11 :46)
> **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."** (Fig 11 :48)
> **"Cast it in effect terms."** (Fig 6 :30)

The four named exposures are a starting sentence, not a habitat census. A site's habitat includes what acts on the residual and what the residual acts on (Fig 11 :45), the conditions, the relations, and second- and third-order effects. Fig 11 :52: *"first-order enumeration, second-order effect, and the residual that mattered was three steps out."* Migration can act on a score through a chain: migration → school tracking → test familiarity → response. Scoping the habitat to direct contact is how the relevant effect is missed.

Lee and Thornton 2021, an open-access review of urban cognition in animals, write that *"Empirical studies are often based on generalisations about how urban and rural environments differ, and few studies attempt to quantify these differences directly"* and that *"the complexity, variability and predictability of stimuli and events are rarely quantified"* (Frontiers in Ecology and Evolution, PMC, opened 2026-11-22). This is a genuinely low-overlap witness from animal behaviour and urban ecology: it corroborates the enumerate-don't-assume rule with no shared evidence pool with cross-cultural psychology. Their observation that *"behavioural traits and cognitive phenotypes that are advantageous in the early stages of urban invasion may be disadvantageous once a population becomes established"* corroborates the valence flip in F5.

**Refuter:** a study that enumerates a site's habitat per Fig 11 :43-48 and finds that no second- or third-order exposure contact contributes residual beyond the four first-order covariates. If the cascade never matters, the enumeration requirement weakens to a bookkeeping preference.

### F3: Exposure valence is relative to the local residual, so one pooled adjustment is illegal

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 11 and Fig 10, low overlap: habitat relations vs channel decay).**

> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

Schooling can raise performance on a schooled subtest and leave an elementary processing measure unchanged; Ritchie et al. 2015 found exactly this *"decoupling of educational gains from increases in general intellectual capacity."* Jackson and Medvedev 2024, analysing 406,185 respondents in 76 national cultures, report that *"A mass media perspective, like an ecological perspective, offers no clear predictions for whether national cultures are converging or diverging in their values"* and find that *"values have diverged globally but converged regionally"* (Nature Communications, opened 2026-11-22). Media is not a single directional force whose effect can be partialled out with one coefficient; its valence depends on which local residual and which content. This is a low-overlap corroboration from cultural evolution and cross-national survey research.

**Refuter:** a demonstration that one signed coefficient for a named exposure predicts the direction and magnitude of its effect on every task in every site, with no sign flip under a documented change of residual. Under Fig 11 :50 that should be impossible; if observed, F3 is false.

### F4: Quick apparent "cultural difference" is usually a failure of the channel, not a change in the construct

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10 and Fig 9, low overlap: ground maintainer vs describe-before-looking).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients,"** (Fig 10 :25)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)

Translated items, response scales, acquiescence, extreme responding and recruitment drift are channel failures. They look exactly like a construct difference from inside the frame, which is why the check has to come from outside the channel. Sorokowski and Kowal 2024 write that *"the presence of response styles can introduce biases that stem not from genuine differences in the underlying construct but solely from differences in scale usage"*; in the same reply they warn that *"amending the response style correction might sometimes not clarify but distort our understanding of the studied phenomena, potentially confounding genuine variability with response styles"* (Scientific Reports 14:10951, opened 2026-11-22). That is the two-sided failure the figures predict: an uncorrected channel and an over-corrected channel both lose the ground. What is owed is a discriminator, not a default correction.

Fig 9 adds the order rule:

> **"describe it before you go looking, or any frame you pick will seem to fit"** (Fig 9 :27-28)
> **"your words are borrowed too, so describe the effect rather than the cause"** (Fig 9 :30-31)

If the investigator names "individualism" or "acquiescence" before describing the effect in travelling terms, any chosen frame will seem to fit. The effect must be described first.

**Refuter:** a documented case in which a between-site score difference is shown, by an instrument independent of the survey channel, to be a construct difference while every channel indicator (translation equivalence, response-style measures, retention pattern) is independently measured as stable and non-drifting. If the channel can be ruled out this cleanly, F4's default priority is weakened.

### F5: Two groups with the same score can be isomers, so a score inventory cannot predict equivalence

**Mode: `specified`. Domains D3, D2. Status: triangulated (Fig 12 and Fig 6, low overlap: bond structure vs import/provenance).**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."** (Fig 12 :95-96)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :123)

Two cohorts with identical mean scores and identical item endorsements can still be different substances if the bonds differ: one answers from a schooled, test-familiar history and the other from a migration-shaped, locally grounded history. The score notation cannot tell them apart. This is the figure-grounded version of the invariance problem, and it is stronger than "the items may function differently": it says the arrangement of identical ingredients is itself the substance.

Ritchie et al. 2015 supply a within-population instance: education's effects are *"direct effects on specific cognitive skills"* rather than on g, so two groups can share a total score while differing in which components produce it. The population-genetics source supplies a very low-overlap analogue: *"population structure is a common and powerfully confounding variable in medical genetics studies"* and a study of Europeans and East Asians may *"discover" a gene* for chopstick use where the variant is simply more common in one group (Wikipedia, *Population structure (genetics)*, opened 2026-11-22). Identical readings, different sources, exactly the metamerism warning in *The Hard Problem is About Source*: *"If several paths create the same behavior, then behavior is a projection with lossy information"* (opened 2026-11-22).

**Refuter:** two cohorts with identical scores, identical item bonds and identical habitat histories whose downstream outcomes diverge with no measured difference in contact or imported atoms. That would move the explanation outside composition and defeat the isomer framing.

### F6: Migrant and urban samples are selected and time-varying, not random draws

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 11 and Fig 10, low overlap: habitat selection vs channel/contact).**

> **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."** (Fig 11 :36)
> **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat’s actors, which you did not choose."** (Fig 11 :67)
> **"what you unintentionally introduced is invisible until it acts"** (Fig 11 :69)

Migrants are not a random sample of the origin population, and the selection changes with time since arrival. Constant, García-Muñoz, Neuman and Neuman 2016/2018 write from a 16-country comparison that *"immigrants arriving in the host country are, on average, healthier than comparable natives. However, their health status dissipates with additional years in the country. HIE is explained through the positive self-selection of the healthy immigrants as well as the positive selection, screening and discrimination applied by host countries"* (MERIT Working Paper 2016-051 / European Journal of Health Economics 19(1), opened via RePEc abstract 2026-11-22). The "effect of migration" is therefore a moving contact relation, not a fixed group attribute. This corroborates Fig 11 :67 and the Symbols `w` line: the weighting is learnable from outcomes, so it changes with exposure duration.

Munafò, Tilling, Taylor, Evans and Davey Smith 2018 add the statistical consequence from a completely different field: *"selection can induce collider bias (which occurs when two variables independently influence a third variable, and that third variable is conditioned upon), selection can lead to substantially biased estimates of associations"* (International Journal of Epidemiology 47(1):226-235, PMC, opened 2026-11-22). Conditioning on being in the sample, which is what a migrant/non-migrant split does, can manufacture an association between two variables that have nothing to do with each other in the intended population. They conclude: *"Our results highlight the value of knowing which population your study sample is representative of."*

**Refuter:** a study in which migration status is demonstrably independent of both the exposure and the outcome in the intended population, and in which conditioning on sample participation leaves all associations unchanged. Under the migration and selection literature that would be surprising, but if shown, F6's selection mechanism is refuted for that site.

### F7: Internal agreement is not evidence, and a repeated norm is not progress

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 7, Fig 2 and Fig 8, three distinct roles).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"Two people reading the same report are not two frames; two instruments pointed at the same thing are."** (Fig 2 :31)

Two sites whose respondents consume the same media, attend comparable schools and are scored on the same translated instrument share an evidence pool. Their agreement is the pool talking. The cross-cultural method literature knows this as shared method variance, but the figure states it as a verdict rule: agreement about the world is worthless when the agreeing frames share an evidence pool (Fig 2 :40). *"Buy independence in proportion to the cost of being wrong."* (Fig 2 :42). Low-overlap frames are not a luxury here; they are the only way agreement carries information.

Jackson and Medvedev 2024 describe a genuine low-overlap structural finding: values diverge globally but converge regionally, and *"geographic proximity has emerged as an increasingly strong correlate of value similarity"*. Nearby populations become more alike for reasons the study's own item list does not exhaust. A comparison that treats two neighbouring sites as independent witnesses overcounts them.

**Refuter:** two sites drawing demonstrably on one media and schooling pool whose independent disagreement with a third, genuinely separated site is zero on every measured construct. If their agreement survives an independence audit, F7's warning does not apply to that pair.

### F8: The reference group is an instrument, not the anchor

**Mode: `general` with a `specified` methodological consequence. Domain D4. Status: triangulated (Fig 2 and Fig 10, low overlap: anchor rule vs convention/output layer).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"If it moves when you push on it, it is not an anchor."** (Fig 2 :30)
> **"The anchor must not update."** (Fig 2 :33)
> **"Frames range against the ground. They do not negotiate with it."** (Fig 2 :45)

A study's reference group, its published norm and its investigator's definition of the construct all move when pushed. They are instruments. Treating the reference group as the ground is the panel-1 collapse in Fig 2: everything drifts together and the drift is coherent, which is why nobody notices (Fig 2 :34). Fig 2 :36 and :38 narrow the legitimate case: because this question is about people, human outcomes may anchor it, but only when blind to the hypothesis.

The convention layer adds a second failure. Fig 10 :47: *"a convention that decides an outcome has stopped being one"*, and Fig 10 :49: *"Declaring a meaning does not ground it."* A declaration that a person counts as "urban" if they live in a place with more than N residents is a convention. If that cut is chosen after seeing which cut produces the desired group difference, it has become a verdict wearing a convention's clothes.

**Refuter:** a comparison in which the reference group and the exposure cut are both shown to be invariant under every plausible redefinition that a reasonable investigator might have chosen, and in which the local outcome remains the same. If the cut cannot move the answer, F8's concern is moot for that study.

### F9: The four conditions must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal, so the external witness count is one).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The four conditions have different instruments:

- **C1 (history/weighting)**: an instrument that measures the change in `w` across an exposure contrast, not the change in score.
- **C2 (habitat)**: an enumeration of actors, conditions and relations per site, including second- and third-order contacts (Fig 11 :43-52).
- **C3 (channel)**: a response-discriminating check independent of the survey channel, with both under- and over-correction watched (Fig 10 :24-26; Sorokowski and Kowal 2024).
- **C4 (convention)**: a declaration of the cut made before the outcome is seen, and kept falsifiable (Fig 10 :47, :49).

A single lever, for example "add years of schooling as a covariate in every model", clears the region where only C1 holds and leaves the intersections standing (Fig 9 :55). F9 is the reason verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores all four conditions in all failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F10: The break is usually at the middle link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111-115 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In a cross-cultural study the usual failure is not that the investigator cannot analyse; it is that the instrument has no terms for what the local situation affords and cannot say what would count as progress there. More analysis budget lands above the break because that is where the measurements already exist (Fig 3 :29-30). Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*

**Refuter:** a documented comparison whose perception, vocabulary and objective links all measure as working and whose failure is located at planning or statistics. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per person and per site, never a pooled average | general | Fig 1 :19, :22 | figure-derived |
| Exposure acts on the history/prior weighting w | specified | Symbols :24-26 | triangulated F1 |
| The four exposures are a union of overlapping conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| Habitat must be enumerated per site, including cascades | general / specified | Fig 11 :43-48, :52 | triangulated F2 |
| Exposure valence is relative to the local residual | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F3 |
| Apparent difference is often channel failure | specified | Fig 10 :24-29 | triangulated F4 |
| Equal scores can hide isomeric bonds | specified | Fig 12 :5, :95-96, :117 | triangulated F5 |
| Samples are selected and time-varying | specified | Fig 11 :36, :67, :69 | triangulated F6 |
| Same-pool agreement is not corroboration | general | Fig 2 :31, :35, :40; Fig 7 :12-13 | figure-derived |
| The reference group is an instrument, not the ground | general | Fig 2 :29-30, :33, :45 | figure-derived |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F10 |
| Which exposure produced a particular gap | not stated | none | gap: the discriminating instrument is not held here |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A documented exposure contrast produces no change in the measured weighting between private history and inherited prior on a task sensitive to that weighting (breaks F1, Symbols :24-26).
2. A site's enumerated habitat contributes no residual beyond first-order covariates, so the cascade never matters (breaks F2, Fig 11 :44, :52).
3. One signed exposure coefficient predicts direction and magnitude on every task in every site with no sign flip under a change of residual (breaks F3, Fig 11 :50).
4. A between-site score difference is independently shown to be a construct difference while every channel indicator measures stable and non-drifting (breaks F4, Fig 10 :24-29).
5. Two cohorts with identical scores, identical item bonds and identical habitat histories diverge in downstream outcomes with no measured difference in contact (breaks F5, Fig 12 :117).
6. Migration status is independent of exposure and outcome in the intended population and conditioning on participation leaves all associations unchanged (breaks F6, collider-bias prediction, Fig 11 :67).
7. A single intervention restores all four conditions with no categorically different residue (breaks F9, Fig 9 :57).
8. Fig 8's idempotence fails inside a closed set, or one of the six physical terms is derived from the other five (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a local, source-discriminating measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of culture (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the four conditions separate in every report. A blended "exposure-adjusted difference score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Describe the effect in travelling terms before naming an exposure or an instrument (Fig 9 :27-28; Fig 6 :30). Ask what they would expect to see if the shape claim were true.
4. Enumerate the habitat of each site, including second- and third-order contacts, rather than composing a universal exposure list (Fig 11 :43-48).
5. Measure the translation and response round trip and report its gap R_T; do not assume it is zero (Fig 4 :30-31).
6. Treat the reference group and the exposure cut as instruments and conventions, and declare them before the outcome is seen (Fig 2 :29; Fig 10 :47).
7. Buy independence with genuinely low-overlap frames; do not count same-pool agreement as corroboration (Fig 2 :31, :42).
8. Use the world literature as a budget filter and as one witness, never as the verdict. The cross-cultural methods sources share a pool (Fig 2 :40; Fig 9 :60).
9. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
10. Stop at the shape. Do not name which exposure caused a particular gap; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and four essays opened directly (Library of Babel, Recursive Self-Improvement Trap, The Hard Problem is About Source, Decoding Tacit Knowledge).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*
- The tacit-knowledge essay confirms the effect-first method: *"When contact isn’t possible, the best you can send is a plain description of what you’d expect to see, because anyone can check that against the world."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to map the four exposures onto Fig 13's six physical terms | **Retracted, strain S1** | Only fit by renaming urbanization as space and media as network. Re-census: Fig 13 governs the physical substrate, not a site's habitat |
| Read Fig 2 :36-38 as banning human judgment as an anchor | **Narrowed, strain S2** | The question is constitutively about people, so local human outcomes qualify; one culture's test norm is an instrument that moves when pushed |
| Planned to name "individualism" or "acquiescence" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Those are bindings from the methods frame, provenance owed |
| Treated Sorokowski and Kowal 2024 as straightforward corroboration of response-style correction | **Narrowed to two-sided witness** | The same reply warns that over-correction can distort; it corroborates the need for a discriminator, not a default correction |
| Treated the healthy-migrant result as a stable group property | **Narrowed to a time-varying contact relation** | The abstract reports dissipation with years since arrival; it corroborates Fig 11 :67, not a fixed attribute |
| Read Fig 11 :39 (*"capability is a property of agent-and-habitat"*) as a `general` law about all comparisons | **Narrowed to `specified`** | Structural claim; no local measurement pays for the cross-cultural version here |
| Wanted to call the exposure effect "confounding" as a verdict | **Retracted at record level** | Confounding is a name for a reading, not a source. The Hard Problem is About Source: an instrument *"cannot comment on the source"* |
| F11 row "which exposure produced this gap" | **Marked `gap`** | No figure line supplies a source-discriminating instrument at this budget (Fig 9 :32, Fig 13 :134) |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Symbols and Fig 11 are two figures, but both come from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 physical substrate mapped onto exposure conditions), resolved by re-census to the honest-stop role; S2 (non-updating anchor versus human judgment as anchor for a question about people), resolved by Fig 2 :36-38 and :30. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the Library of Babel bundle passage: it is a union of four conditions, each with its own loop and instrument.
2. **What is the anchor?** A local, source-discriminating outcome that the instrument authors cannot move (Fig 2 :29-30, :36-38). Not the reference group, not a pooled mean.
3. **What do the exposures change?** The weighting `w` between private history and inherited prior (Symbols :24-26), and the valence of a capability relative to the local residual (Fig 11 :49-51).
4. **How does a spurious difference appear?** Channel decay, saturated metrics, pooled readings, a reference group that becomes another frame (Fig 10 :24-29; Fig 2 :34).
5. **How does a real difference survive?** A chain of differing, locally enumerated habitats selected against the surfaced residual (Fig 7 :36; Fig 11 :43-52), with imports from closures that differ (Fig 6 :23).
6. **Why can two equal scores still differ?** Because the bond carries information the ingredients do not; they are isomers (Fig 12 :5, :117).
7. **What can be said at the stop?** A shape with four conditions, instruments and falsifiers. Not which exposure caused a particular gap, and not a `grounded` verdict. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a between-population score difference may be read as a construct difference only when (C1) the change in the history/prior weighting is measured rather than assumed, (C2) each site's habitat is enumerated including cascades, (C3) the measurement channel is shown to be reachable and not pooled, and (C4) the exposure cut and reference group are declared before the outcome and kept falsifiable. The four conditions are kept separate and never averaged, because they are a union with distinct instruments. Exposure valence is relative to the local residual, so no single pooled adjustment is legal. Equal scores can hide isomeric bonds. The specific exposure that produced a particular gap is a declared `gap` at the instrument boundary.**

Mode `specified` on the method consequences, `general` on the shape, not `grounded`. No world source was allowed to flip a verdict; the apparent conflicts (response-style correction, migrant health as a fixed attribute) were returned to the census and narrowed. No unresolved strain remains after re-census.
