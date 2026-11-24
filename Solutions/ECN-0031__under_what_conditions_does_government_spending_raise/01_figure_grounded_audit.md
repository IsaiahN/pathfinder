# Figure-grounded audit: when does government spending raise output?

**Mode of this document: `specified` on the separator and its per-domain verdicts, `general` on the structural shape, `gap` on a universal multiplier or standing sector list. Not `grounded`.** Per THE_FORMULA: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The essay *The Recursive Self-Improvement Trap* (opened 2026-11-23) says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figures 1 to 13, the Operators table and the Symbols table, quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local, read this session); `FRAMEWORK/figures/THE_FORMULA.md`; `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources were opened on 2026-11-23 and are listed with quotes in `10_source_ledger.csv`.

---

## 0. The residual under audit

> **Question:** Under what conditions does government spending raise total output rather than displace private activity?

Restated as an effect. A fiscal authority commits an action `a` (spend, finance, direct). The economy returns observations `o′` (realized output, employment, tax receipts, private investment) per slot `s`. The library `Γ` predicts `Γ(b,a)` from belief `b`. The residual is `R_s = |Γ(b,a) − o′|`, **indexed by slot**. The question asks what distinguishes two outcomes:

- **Addition (multiplier):** `o′` rises in a slot because the spending composed over an atom or bond the private closure did not hold or could not reach.
- **Displacement (crowding out):** `o′` in one slot rises only because `o′` in another slot falls, the two drawing on the same scarce atom.

The ordinary-language word "conditions" is a sought-for shape, not a term the loop holds. Following THE_FORMULA "Direction", I bind it now: **a condition is a slot-level relation between the spending action and the private closure that decides which bond holds, production or subtraction.** Written down and bound, it can accrue a residual and be refused. If no figure line closes it, the honest output is a gap, not a list.

Arity, symmetry, scale (Fig 9 :21-22, where R is described by *"arity · symmetry · scale"*):

- **Arity:** two operands, public spending and private activity, in one accounting. The question pretends one variable with two values; it is a relation between two.
- **Symmetry:** not symmetric. Spending can cause activity (production, ordered) or remove it (subtraction, ordered). A pooled correlation cannot choose the arrow (Fig 2 :39, *"Correlation has valence."*).
- **Scale:** per slot and per period versus an aggregate over slots and periods. The aggregate is the wrong object for the verdict.

---

## 1. Domain census, before any figure line is chosen

Describe R by arity, symmetry and scale, then one line per domain with actors, currency and anchor. No nameable anchor means it is not a domain yet. Partition or union, then dependency order (Fig 3).

| domain | actors | currency | anchor (nameable?) |
|---|---|---|---|
| **D1 Fiscal authority frame** | treasury, legislature, finance ministry | budget authority, bond issuance, currency | realized receipts and realized output, which do not move when the authority changes its forecast |
| **D2 Private production frame** | firms, households, savers, investors | private expenditure, investment, sales, saving | realized sales and cash flow, which do not move when a forecaster changes its story |
| **D3 Real-resource habitat** | workers, machines, materials, land, time | physical capacity, utilisation, inventories | physical feasibility at a moment, a constraint the authority cannot talk past |
| **D4 Monetary and credit channel** | central bank, banks, bond market | loanable funds, liquidity, the interest rate | the observed rate and observed credit creation, which the authority cannot declare into existence |
| **D5 Verification frame** | statistical agencies, fiscal researchers, narrative coders | per-slot residual estimates, shock series | an exogenous or narrative shock and a non-updating outcome record |

All five have a nameable anchor, so all five are domains. D4's anchor is subtle: a central bank that *responds* to spending is a frame that ranges against the same ground, not the ground itself (Fig 2 :25: *"pinned: it does not update on A or B"*). That distinction carries findings F4 and F9.

**Partition or union? Union.** "Raises output" and "displaces private activity" are not the two sides of a clean partition. A spending can raise output in one slot while displacing investment in another, and the shared region (both effects present) is a specific compound with its own loop. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"a case in two conditions is not a harder case of either."* One lever (more spending) clears the region where only one condition holds and leaves the intersections standing. Therefore verdicts are per domain and per slot, never averaged into one multiplier.

**Order by dependency (Fig 3 :20, "The chain is ordered by dependency, not by importance.").** The chain here is: (1) perceive whether any slot has live positive residual, (2) have terms for the two bonds, production and subtraction, (3) say what counts as progress in the chosen currency, (4) choose where to direct the spending, (5) carry the method after settlement. The middle link is the one that usually breaks: an authority can name ingredients (spend, tax, borrow) and have no term for the bond (Fig 12 :111, *"A vocabulary without bonds can name a state and cannot name a route to one."*). Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

**Strain test rule.** If a figure line only fits after stretching it, it governs another quantity and I re-census rather than soften the reading. Strains are logged in section 9 and carried into `11_audit.md`.

---

## 2. Figure census (quoted verbatim before concluding)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session. Every quoted string below is an exact substring of that file.

| figure | bearing on this question | verdict after census |
|---|---|---|
| **Fig 1 The Agent** | residual per slot, live slot with global near zero is legal | governs the object: "total output" is not the verdict object |
| **Fig 2 The Ground** | anchor must not update; independence is low overlap; correlation has valence | governs D1/D4/D5; kills receptiveness-ranked verdicts |
| **Fig 3 Dependency Chain** | order by dependency; a link with no instrument is unassessed | governs the order of the separator |
| **Fig 4 The Membrane** | kernel fixed, actors and currency and anchor change with size | governs the level at which macro terms are used, re-census of S2 |
| **Fig 5 Mint Pipeline** | guards as a product; *"the gap has real mass somewhere"* | governs support: a live slot must exist before spending can add |
| **Fig 6 Closure and Reachability** | import is *"the only operator that moves the wall"*; mint cannot add an atom | governs addition versus reallocation; strains on physical atoms (S1) |
| **Fig 7 Room Chain** | *"agreement compounds, evidence does not"* | governs why more multiplier studies pooled together add no witness |
| **Fig 8 Union Surplus** | closure idempotent; surplus only where closures differ; residual first | governs union framing and the import's source gate |
| **Fig 9 Leave, Arrive, Search** | split rather than search; union not partition; filters not witnesses; describe before looking | governs the whole shape and the declared gap |
| **Fig 10 Ground Maintainer** | ground does not decay, channel does; verifier non-access; declare stake | governs D4 and the two-stage offer |
| **Fig 11 The Habitat** | capability is agent and habitat; valence relative to residual; no standing list | governs D3 and refuses a universal sector checklist |
| **Fig 12 The Bond** | bonds carry the difference; isomers; two currencies do not add | governs addition and displacement as bond types over shared atoms |
| **Fig 13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict | governs the gap and the limit of the derivation |
| **Operators table** | `⇒` production, `−` subtraction, `⋛` comparison, `¬` negation | governs the bond assignment and the refusal |
| **Symbols table** | `R` is per slot; ground does not update | confirms Fig 1 and Fig 2 |

No figure line was selected before the census above was written. The census decided which figures govern; the quotes below confirm what they say (Fig 9 :53, *"Nobody chooses. The gap does, and the gap is only as good as its description."*).

---

## 3. Findings F1 to F10

### F1 - The question asks for the wrong object: "total output" aggregates away the live slot (decisive for the object)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

Symbols table :43: **"One object, region or entity being tracked."** Symbols :38-39: **"The gap between prediction and observation."**

"Total output" is a single number over many slots. An increase in that number is compatible with addition in one slot and displacement in another. Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"**, and Fig 1 :20-21 makes the same point about support. So an aggregate multiplier cannot be the verdict object.

**What this kills.** Any answer of the form "the multiplier is above or below one, therefore spending raises rather than displaces output." That answer averages the signal away. The world literature agrees in effect: Ahir et al. 2026 (VoxEU column, opened 2026-11-23) report that **"multipliers vary more within income groups than between them."** A within-group spread is a per-slot phenomenon.

**Refuter for F1.** A demonstration that the per-slot residuals are all zero except where the aggregate points, so that the aggregate is a sufficient statistic. Until that is shown, the aggregate is a budget filter, not a witness.

**Mode:** `general` on the object, `specified` on the per-slot claim. Triangulated: Fig 1 and the Symbols table (low overlap, different figures), plus the Ahir et al. result.

### F2 - The two outcomes are different bonds over the same atoms, not different quantities (decisive for the mechanism)

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Fig 12 :94: **"The arrangement is the substance."**

Fig 12 :40: **"same two atoms, three substances"** (about `A+B`, `A→B`, `A−B`).

Operators table :37: **"A produces B; B did not exist before"** (production, `⇒`). Operators :43: **"A with B removed or absent"** (subtraction, `−`). Operators :51: **"a goal is a comparison, which is why a vocabulary without it cannot state one."**

Census of atoms in this question: public spending, private spending, savings, labour, capital, materials, time. Both outcomes use the same list. What differs is the bond:

- Addition: `spending ⇒ activity` where the activity did not exist before, because the spending reached an atom or a composition the private closure held but could not activate (Fig 5 :21, *"the gap has real mass somewhere"*).
- Displacement: `activity − spending_share` where the same atom (a loanable fund, a customer, an hour of labour) is drawn by both, and the authority's use removes it from the private use.

Fig 12 :117: **"Same atoms, different bond, different substance."** Addition and displacement are isomers over the fixed atom set. Fig 12 :123: **"A substructure whose presence fixes the outcome."** The presence of a live unheld slot is the functional group; the qualifier is which sector.

**Refuter for F2.** A case where public spending and private investment use disjoint atoms yet total output is unchanged, or a case where they use identical atoms yet both expand without limit. Either breaks the bond mapping.

**Mode:** `specified`, ungrounded. Triangulated across Fig 12 and the Operators table.

### F3 - Support: a live positive residual must exist before spending can add anything

Fig 5 :20-21: **"is there anything to explain?"** and **"the gap has real mass somewhere"**.

THE_FORMULA step 3 gates a mint by a product: SUPPORT `|R⁺_s| > 0` for some `s` before the search, REACHABILITY `φ ∈ closure(Γ)` during, NOVELTY `φ ∉ atoms(Γ)` after: *"gated by a product; any factor at zero forces inertness."*

Apply to a spending action:

- **SUPPORT:** at least one slot must carry positive mass, idle capacity, unmet demand, hoarded saving, an output gap. If every slot is at capacity, the factor is zero and no addition can be minted. The action can only re-price or reallocate existing atoms.
- **REACHABILITY:** the resulting activity must compose from what the economy already holds (labour, capital, techniques). A spending that demands an atom nobody holds cannot be composed, whatever the budget.
- **NOVELTY:** the activity must not already be in the library. If the private frame already produced it, the spending did not add it; it bought it over.

`THE_FORMULA.md` step 5: **"the ground settles it. Verified only by what pays. A gate is not the ground."** Passing the three guards makes a spending *candidate* for addition, not a settled multiplier.

World corroboration: the crowding-out reference (Wikipedia, opened 2026-11-23) states that when the economy is at capacity a deficit creates competition for scarce resources, whereas below capacity there is no such competition; the fiscal multiplier reference states that the multiplier is limited by **"the spare capacity available"**. MMT (Wikipedia) states that money-financed spending is sustainable **"only while the economy has spare capacity"**. These are three pages in one economics evidence pool, so they count as one witness, not three.

**Refuter for F3.** A controlled spending episode in which every measured slot is at capacity, the private channel is intact, no new atom is imported, and total output still rises persistently one-for-one. That would fire the support guard with zero mass and break the finding.

**Mode:** `specified`. Triangulated (Fig 5 + formula + one world pool).

### F4 - The channel can break while the ground does not: why the zero lower bound matters structurally

Fig 10 :24: **"the ground does not decay, the channel does"**. Fig 10 :26: **"stale percepts, dropped transients, saturated metrics, pooled readings"**.

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :33: **"The anchor must not update."**

In a liquidity trap (Wikipedia *Liquidity trap*, opened 2026-11-23, quoting Keynes 1936 and Krugman 1998), the private frame's channel to the interest-rate anchor is broken: cash is hoarded, monetary base injections do not move prices or output, and **"fiscal expansion ... leads to a higher level of output ... with no change in interest rates"**. In the figures' terms, the private frame's instrument is saturated; the ground has not moved. A spending that reaches idle resources reopens contact (Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**).

Where the channel is intact and the monetary authority offsets the spending to hold a target, the anchor is being *made* to answer to a frame. Then Fig 2 :34 applies: **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."** The observed interest rate is no longer a non-updating anchor for the verdict; it is a frame's output.

**Refuter for F4.** A case where the private channel is demonstrably saturated yet government borrowing still raises the market rate one-for-one and displaces private investment, with no central-bank response. Or the converse: an intact channel with no offset and no displacement at capacity. Either breaks the channel claim.

**Mode:** `specified`. Triangulated (Fig 10 and Fig 2, with the liquidity-trap world source as secondary corroboration, low overlap in mechanism but same broad economics pool as other world sources, declared in `10_source_ledger.csv`).

### F5 - Import versus composition: only a new atom moves the wall

Fig 6 :14: **"the only operator that moves the wall"** (import). Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**

Fig 8 :45: **"Two frames together reach what neither reaches alone."**

A spending adds output in the strong sense when it imports something the private closure does not hold: a demand floor where private demand has collapsed, a public good that no private actor can sell, a coordination point that unlocks private complementary investment, a source of finance the private frame will not create at that moment. Each has the shape of an import, not a rearrangement. A spending that buys the same goods the private sector would have bought, financed from the same savings, is a composition inside the closure, and by Fig 8 :32 cannot move the wall.

Fig 8 :13-14 names the failure: *"same atoms, different names"* and *"their union adds nothing"*. Two descriptions of the same loanable fund, one called "public investment" and one called "private saving", are one frame wearing two names.

**Source gate and shadow test.** Fig 8 :9-13 names *"source gate: provenance"* and *"shadow test: explains a gap"*. The claim that a particular program imports a missing atom is an import claim, and it owes both. The Ahir et al. 2026 dataset is the closest thing here to a source gate: it records direction, instrument, motivation and implementation status for 142 countries, so an analyst can say what the action actually was rather than infer it from outcomes. Its own warning applies: outcome data move with the cycle as well as with policy.

**Refuter for F5.** A spending episode that demonstrably imported no atom (same goods, same finance, same actors) yet expanded the economy's reach permanently, meaning new private activity continued after the spending ended in slots that were previously idle. That would break the idempotence mapping.

**Mode:** `specified`. Triangulated (Fig 6 and Fig 8, different figures, with the import vocabulary from the canonical README).

### F6 - The multiplier is a filter for the budget, not a witness for the verdict

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Fig 9 :4-5: **"Split it rather than search."**

Fig 9 :57: **"a case in two conditions is not a harder case of either."**

Fig 7 :12-13: **"agreement compounds, evidence does not"**.

A pooled multiplier (0.8 to 1.5 in Ramey 2011, larger in recessions in Auerbach and Gorodnichenko 2012) is a statement about an ensemble. It ranks how much budget to allocate to a class of actions. It does not say whether *this* action in *this* slot added or displaced. A regression estimate is symmetric in the sense that it averages over regimes; the verdict is ordered (production or subtraction), so the two are different objects (Fig 2 :39, *"Correlation has valence."*).

The world sources make the same division. Auerbach and Gorodnichenko (NBER WP 16311, abstract, opened 2026-11-23): **"fiscal policy being considerably more effective in recessions than in expansions"**. Ramey (JEL 2011, abstract): **"the multiplier for this type of spending is probably between 0.8 and 1.5"** for a temporary deficit-financed increase. Ahir et al. 2026: **"multipliers vary more within income groups than between them."** All three are ensemble statements. None is a per-slot witness.

**Refuter for F6.** A multiplier estimate with a confidence interval narrow enough that every individual slot's effect lies on the same side of one, measured with an anchor that does not update on the spending. Until then the estimate is a filter.

**Mode:** `general` on the filter rule, `specified` on the claim about pooled estimates. Triangulated (Fig 9 + Fig 7 + Fig 2).

### F7 - No standing list of qualifying sectors; the qualifying property is residual-relative valence

Fig 11 :49: **"An actor’s valence is relative to the residual, not a property it carries."**

Fig 11 :51: **"No standing list of good actors survives a change of residual."**

Fig 11 :45: **"actors: what acts on it, and what it acts on"**.

Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone"**.

The question asks "under what conditions", which invites a list: build roads, cut taxes, wait for a recession, issue currency. The figures refuse that form. A sector's valence depends on which slot is live. Infrastructure can import a missing coordination point in one habitat and compete with private construction in another. Food stamps can have a high measured multiplier in one regime and simply shift consumption timing in another (the Zandi estimates in the fiscal multiplier reference range from 1.73 for food stamps to 1.36 for general state aid, one evidence pool).

The low-overlap psychology source sharpens the point. The overjustification effect (Wikipedia, opened 2026-11-23) reports that an external reward reduces intrinsic motivation where initial interest is already high, but **"rewards can increase intrinsic motivation for tasks that initially hold little intrinsic interest"** (the 2001 meta-analysis summarized there). The property that decides the sign is the initial state of the slot, not the reward. That is a shape analogue, not an economic mechanism, and it is recorded as corroboration only.

**Refuter for F7.** A sector that raises output in every measured residual regime with no sign flip, under an anchor that does not update. That would reinstate a standing list and break the valence claim.

**Mode:** `general`. Triangulated (Fig 11 plus a genuinely low-overlap psychology analogue).

### F8 - Describe the residual before choosing the frame, or every school's favourite policy will fit

Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**.

Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause"**.

Fig 9 :32: **"you get a kind of thing, never the answer itself"**.

Fig 6 :30: **"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."**

The school positions on this question (Keynesian, Ricardian, monetarist, MMT, New Classical) each pick a frame first and then read the same aggregate through it. The effect description that travels is: *a slot with positive residual, a bond that produces rather than subtracts, a channel still open, an atom that was actually imported*. Any school can be asked to check that in its own vocabulary. No school can be asked to accept the framework's interior.

**Refuter for F8.** A demonstration that the effect description can only be read inside the framework's own terms, so an outside frame cannot check it. Then it has failed the travel test.

**Mode:** `general`. Triangulated (Fig 9 and Fig 6).

### F9 - The ground is an outcome, not an estimate, and an estimate that moves with the claim is not an anchor

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."**

Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."**

Fig 10 :59: **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"**.

A national accounts estimate of GDP is an instrument, not the ground; instruments can be wrong on axes they do not measure (Fig 2 :37-38). The ground here is the realized outcome that pays or does not pay: the revenue, the output that persists, the capacity actually utilized, the private investment that went ahead. Two research groups using the same revised GDP series are one frame wearing two names (Fig 8 :48). The Ahir et al. dataset adds independence by reading the policy record (direction, motivation, implementation) rather than inferring discretion from outcomes, which is why it is worth more as a witness than a second multiplier regression on the same data.

**Refuter for F9.** A verification in which the outcome series is revised in response to the theory being tested. Then the anchor updates and the whole arrangement collapses to panel 1.

**Mode:** `specified`. Triangulated (Fig 2 + Fig 10).

### F10 - The universal multiplier and the sector list are a declared gap, not silence

Fig 9 :38: **"elimination compounds here, and only here"** and Fig 9 :42: **"narrowing gets you close, the ground decides"**.

Fig 13 :134: **"Unreachable is a verdict here, not a silence"**.

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

Fig 9 :32 already noted: **"you get a kind of thing, never the answer itself"**.

No figure line returns a number for the multiplier, a threshold of slack, or a name for the qualifying sector. That is a `gap`. Which kind? Not underivable in principle: an instrument could be built. Unreached at this budget and, for the universal list, of the shape-not-a-name kind (Fig 9 :32; Fig 13 :135, *"It cannot say which primitive is missing, because naming it would mean already holding it."*). Reporting it is the honest stop. Manufacturing a number from the ensemble estimates would be a filter handing us a verdict.

**Refuter for F10.** A figure line, derived before the conclusion, that selects the multiplier or the sector. None was found after the census and re-census. If one is produced, this section is withdrawn.

**Mode:** `general`. Single-source on the figure side for the gap rule (Fig 9 and Fig 13 agree but are one framework), corroborated by the spread in the world estimates.

---

## 4. Pre-registered refuter

Written before the conclusion and before the recommendation, per the framework's own discipline (essay *Decoding Tacit Knowledge*, opened 2026-11-23: the ground settles, agreement does not). The shape claim is refused if any of the following holds:

1. **Support fires at zero.** A controlled spending episode in which every slot is at capacity, the private channel intact, and no atom imported, yet total output rises persistently one-for-one or more.
2. **Bond mapping fails.** Public and private activity use disjoint atoms while output is unchanged, or use identical atoms while both expand without constraint.
3. **Channel claim fails.** A saturated private channel with no central-bank response still produces full crowding out at a one-for-one rate, or an intact channel with no offset produces none at capacity.
4. **Estimate stability.** A multiplier estimate stable across slack regimes and countries to within measurement error, with a non-updating anchor, would collapse the union into one condition.
5. **Anchor updates.** The realized outcome moves when the authority or the researchers change their forecast, so the ground is not pinned.
6. **Discriminator built.** An instrument that assigns a single spending's output change to addition or displacement in every slot would close the gap and could flip the verdict from `gap` to `grounded`.

If any fires, the separator is withdrawn or narrowed, and the retraction is recorded here rather than erased.

---

## 5. Recommendation

1. Replace "total output" with per-slot residuals before any verdict is stated (F1). A pooled multiplier is a budget filter (F6).
2. State the bond explicitly for each spending: production (`⇒`) or subtraction (`−`), with the atom list named (F2).
3. Test the three guards as a product, not a checklist: support, reachability, novelty (F3). A zero factor forces inertness.
4. Distinguish import from composition, and supply a source gate and shadow test for the former (F5).
5. Read the channel separately from the ground; an offsetting central bank is a frame, not an anchor (F4, F9).
6. Do not issue a sector list. Issue a separator with a falsifier (F7, F8).
7. Keep the gap visible. Report `unreached` and the instrument owed, not a number (F10).
8. Send the verification packet, not this audit. Fig 10 :52: **"Bring a characterised residual, never the source."**

---

## 6. Canonical usage check

Two local files were read after sections 0 to 5 and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: **"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."** Also: **"a reading that makes one contradict another has misidentified its domain, not found a flaw"**, and the canonical limit, the framework says **"what a missing thing would have to look like (a shape, not a name)"**, then stops at the limit of what the instruments can distinguish and records the lineage. **"Indiscernibility is not identity."**
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, mint guards, settle rule, step 7 (SEARCHED / INWARD / OUTWARD), round-trip gap `R_T`.

### Retractions and confirmations

| earlier reading in this session | status after the canonical check |
|---|---|
| "crowding out is the bond `−`, so any spending at full capacity must displace one-for-one" | **Narrowed.** Fig 12's `−` governs the bond over a fixed atom set; an import can still change the level even at high utilisation if it brings an atom the private closure lacked. Kept as a conditional, not a law. |
| "spare capacity is the condition" | **Narrowed.** Spare capacity is the SUPPORT guard, necessary but not sufficient. Reaching the atom and importing a new bond are separate guards (F3, F5). |
| "the multiplier is the answer to the question" | **Retracted.** Fig 9 :60 makes it a filter. A ratio cannot choose an ordered bond. |
| "a universal list of conditions can be derived" | **Retracted.** Fig 11 :51 refuses a standing list; the qualifying property is residual-relative. |
| "Fig 6 says mint cannot add an atom, so a multiplier above one is impossible" | **Retracted and preserved as strain S1.** A new settled molecule is not a new primitive; output is a reading in a different currency (Fig 12 :125). See section 7. |
| "the six physical terms are the economy's sectors" | **Retracted.** Re-census: Fig 4 :19-20 fixes the kernel while actors and currency and anchor change with size. The six-term set is not mapped onto GDP components (strain S2). |
| "aggregate output is the residual" | **Retracted.** Fig 1 :19 and :22 govern per-slot indexing. The aggregate is a filter. |

### Re-census triggered by the canonical check

The canonical README's rule (a contradiction means a misidentified domain) was applied to the Fig 6 versus multiplier question and to the Fig 13 versus macro question. Both were re-censused in section 7. No figure line was changed; the objects were reassigned.

---

## 7. Strains, kept visible

**S1, live but narrowed.** Fig 6 :21 says mint cannot add an atom; the world reports multipliers above one. Re-census: the atom in Fig 6 is a primitive in `atoms(Γ)`. A multiplier above one corresponds to a new *settled molecule*, not a new primitive: idle atoms brought into a composition that pays (Fig 12 :104, *"A settled molecule becomes an atom for whatever composes over it."*). Output and resource use are two currencies, and Fig 12 :125 says **"A composition costs in two currencies, and they do not add."** The strain is between physical accounting and national-income accounting, not between the figure and the world. Kept visible because converting one currency into the other is the exact error the figure names.

**S2, dissolved by re-census.** The six terms of Fig 13 (space, time, energy, spectrum, gradient, network) do not name sectors of an economy. Re-census: Fig 4 :19-20 holds the kernel fixed and changes actors, currency and anchor across size. The applicable part of the framework here is Fig 12's bond and arrangement logic, not the physical substrate list. No claim in this folder says an economy has six physical terms.

**S3, dissolved by re-census.** Fig 1 :13 says a global residual near zero with one live slot is legal. The question's "total output" was initially treated as the residual. Re-census: the residual is per slot, the total is an aggregate filter. This is F1.

**S4, live.** Ricardian equivalence (an anticipated future tax reduces present private activity) looks like a frame updating on an announcement, while Fig 2 :29 requires an anchor that does not update. Re-census: expectation is `b` (the belief), not `o′` (the observation). Anticipation changes the private frame's action without moving the realized ground, so there is no direct contradiction. But the effect is real: a believed future tax changes present contact. Recorded as a live tension between belief and ground, with a refuter: a case where the expectation itself changes the measured output series through the forecast used to compile it.

**S5, declared asymmetry.** The overjustification source is human psychology, not economics. It corroborates the *shape* (valence depends on the initial state of the slot) and not the mechanism. It is one low-overlap witness and is not counted with the economics sources.

After re-census: **two live strains named (S1, S4), two dissolved (S2, S3), one asymmetry declared (S5). None hidden.**

---

## 8. Triangulation status per domain

| domain | verdict | status |
|---|---|---|
| D1 fiscal authority | the authority's forecast is a frame, not the ground; its action adds only if support and reachability pass and an atom is imported | `triangulated`: Fig 5 + Fig 6 + Fig 8, with Auerbach/Gorodnichenko and Ramey as secondary |
| D2 private production | the bond decides addition or displacement over a shared atom set; valence is residual-relative | `triangulated`: Fig 12 + Fig 11 + Operators, with the psychology analogue as one low-overlap witness |
| D3 real-resource habitat | a live positive residual is necessary; a standing sector list is refused | `triangulated`: Fig 5 + Fig 1 + Fig 11, with the crowding-out and MMT references as one economics pool |
| D4 monetary and credit channel | the channel can break while the ground does not; an offsetting bank is a frame | `triangulated`: Fig 10 + Fig 2, with the liquidity-trap reference as secondary |
| D5 verification | pooled estimates are filters; independence must be bought in proportion to the cost of being wrong | `triangulated`: Fig 9 + Fig 7 + Fig 2, with Ahir et al. 2026 as the one narrative-data witness |

Verdicts are kept separate and are never averaged into one overall multiplier.

---

## 9. Round-trip gap `R_T` (qualitative)

The Symbols table defines `R_T` as *"The gap between what was sent up and what came back down"*, and Fig 4 :30 requires it to be measured: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

1. **Sent up:** the verbatim figure set (Fig 1 per-slot residual; Fig 5 guards; Fig 6 import; Fig 9 union and filter; Fig 11 valence; Fig 12 bonds and two currencies).
2. **Abstraction:** the shorthand used in this folder: *a spending adds when it reaches a live slot with a bond that produces rather than subtracts and keeps the channel open; it displaces when the atoms are already held; the multiplier is a filter; no standing list*.
3. **Concretisation:** the concrete policy question (does a given program in a given country at a given moment raise output?).

**`R_T` is nonzero.** What the shorthand holds does not all survive the trip down:

- the **identity of the atom imported** is not in the figures; it must be named from the policy record with provenance and a shadow test (Fig 8 :12-13);
- the **source of the anchor** is not in the figures; a revised GDP series is an instrument that can be wrong on unmeasured axes (Fig 2 :37-38);
- the **belief channel** (anticipated future tax) is not in the shorthand as a separate term, so S4 is dropped on the way down;
- the **currency conversion** from physical capacity to national income is dropped, which is S1.

One thing survives cleanly: the per-slot guard structure and the bond distinction. That is the residue worth sending in `08_expert_verification_packet.md`. `R_T` was not measured numerically, because no ground reading was taken. It is recorded qualitatively as the enumerated set of dropped constraints.

---

## 10. Final audit statement

The question is a union of conditions, not a two-way choice. No figure line returns a number or a sector name, so the output is a **separator with a pre-registered refuter and a declared gap**, mode `specified` on the separator and its per-domain verdicts, `general` on the shape, not `grounded`. This is a simulated derivation checked for internal consistency against the figures, not a ground reading, and it cannot settle the question it reports on. The next step is an outside check of `08_expert_verification_packet.md`, with the verdict recorded before any framework material is shown.
