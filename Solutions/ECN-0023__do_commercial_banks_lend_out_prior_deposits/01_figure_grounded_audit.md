# Figure-grounded audit: do commercial banks lend out prior deposits?

**Mode of this document: `general` on the bond shape, `specified` on the domain findings, `gap` on attribution and constraint mix, not `grounded`.** THE_FORMULA mode rule: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (opened 2026-11-23): LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. World sources report ground readings, but reading a report is not taking the reading. Nothing here settles the question it reports on. See `05_what_shape_means.md` section 6.

**Source of figure quotes.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` only. Every quoted string below is an exact substring of that file after whitespace and typography normalisation. Quotes are cited as `Fig N :line`.

---

## 0. The residual, stated in effect terms

The question as given is a forced disjunction: banks either lend out prior deposits, or lending itself creates deposits. State it as an effect question before choosing any figure line:

- **What is being decided:** the typed bond between a loan L and a deposit D on a commercial bank's balance sheet.
- **Option A (lend out prior deposits):** D is a prior stock, L transfers that stock, the bank is an intermediary of loanable funds, and the system-level story is reserves → deposits → loans (the money multiplier).
- **Option B (lending creates deposits):** L and D are one double-entry, D is a liability brought into existence by L, and the binding constraints are solvency, liquidity, profitability and credit demand, not a prior stock of deposits.
- **What an answer would look like:** a bond type (`→` or `⇒`), a constraint statement per scale, and a named ground that would discriminate the two (a ledger trace showing which entry came first, a payment that clears, central bank reserve and money data). This shape is bound as an ordinary term before the run so that it can be refused (THE_FORMULA, Direction).

**R by arity, symmetry, scale** (Fig 9 :21-22, *"R, described / arity · symmetry · scale"*):

- **Arity:** two competing ordered bonds over the same two atoms. There is also a hidden third term, the reserve used to settle a payment that leaves the bank. So the residual is at least a two-condition compound, not a single comparison.
- **Symmetry:** both candidate bonds are ordered. `→` (sequence) and `⇒` (production) are both non-symmetric, so swapping L and D changes the claim (Fig 12 :74, *"swap them. Does it become a different thing? Yes."*). There is no symmetric reading that would let the two options collapse into one.
- **Scale:** the bond is decided at the single-bank ledger; the multiplier claim is made at the banking system; the theory names (intermediation, fractional reserve, credit creation) live in a modelling frame. Different scales, different actors, different anchors.

## 0b. Pre-registered refuter (written before the findings, 2026-11-23)

"*A falsifier written before the run is a design instrument.*" (Seat Map :287). The shape claim is refuted if any of the following fires:

- **R1:** a ledger trace shows the universal mechanism is a pure transfer of a pre-existing deposit with no new deposit liability created anywhere in the banking system when a loan is disbursed. This kills the production bond.
- **R2:** aggregate data show a stable, tight reserve → deposit → loan multiplier in which reserves are the exogenous driver and deposits precede loans. This kills the system-level refusal of the multiplier.
- **R3:** a re-census of Fig 12's six tests shows `→` is the correct bond for loan and deposit, that is, a deposit exists before the loan fires in the decisive test. This flips the bond verdict.
- **R4:** a source-discriminating instrument attributes deposit creation shares at a moment (lending, cash deposits, wholesale funding, foreign flows) and shows the lending share is negligible. This closes the declared attribution gap against the verdict.
- **R5:** the world sources are discovered to be one evidence pool repeating a single result with no independent ground contact. This removes the corroboration, though not the figure verdict.

These are written down here before the derivation and repeated in `07`, `08` and `09`. No later finding was allowed to rewrite them.

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 single-bank ledger | bank, borrower, depositor, central bank | ledger entries (assets, liabilities), settlement funds | the bank's own books; a payment that clears | partition: which typed bond joins L and D |
| D2 banking system | all commercial banks, central bank, non-bank public | broad money (deposits) vs base money (reserves) | central bank monetary statistics, the reserve market | scale crossing: what composes from D1 to the aggregate |
| D3 modelling frame | the three theories of banking, textbook narratives | definitions of money, deposit, loan, reserve | published model assumptions and their predictions, not a measurement | union: three frames over the same atoms with different bonds |
| D4 measurement / instrument | auditors, payment systems, statistical agencies | traces, timestamps, aggregate series | a source-discriminating instrument | partition with a live gap: what can be attributed to lending |

**Partition or union:** the residual is a **union compound**, not a partition. D1 and D4 are real partitions inside it; D2 and D3 overlap because the multiplier is both an empirical claim and a modelling frame. Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* Fig 9 :58: *"a case in two conditions is not a harder case of either."* So the forced "or" is refusable on form before either option is tested.

**Order by dependency (Fig 3):** settle D1 (the ledger bond) before D2 (the aggregate), because the aggregate composes from the ledger entries. D4 supplies the instrument that settles D1 and D2. D3 is downstream: a theory name is licensed only after the bond is settled. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The missing instrument in this debate is a timestamped ledger trace, which is why the middle link (what counts as a constraint) stayed unmeasured for so long.

**An attempted six-term substrate census, retracted.** My first pass tried to map the loan and deposit onto Fig 13's states and structures and to apply Fig 13 :75 (*"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."*). That is a strain: a ledger entry is not a physical state and a bank is not a structure in the six-term sense. Re-census: Fig 13 governs the composition of primitives at a level; the loan/deposit question is a bond-typing question between already-settled accounting atoms. The governing figures are Fig 12 (bond types) and Fig 4 (scale), not Fig 13. The attempt is preserved here rather than erased. Matches the canonical re-census rule: a reading that makes figures contradict one another has misidentified its domain.

---

## 2. Figure census before concluding

| figure | bearing | verdict |
|---|---|---|
| Fig 1 | per-slot residual, never aggregate | domestic vs cross-border, bank size and funding model are live slots |
| Fig 2 | anchor must not update; shared pools | agreement among central-bank papers is one pool, not three witnesses |
| Fig 3 | dependency order; instrument-poor middle link | settle ledger before aggregate; the constraint link lacked an instrument |
| Fig 4 | what crosses a scale; round-trip gap | single-bank result does not copy to the system unchanged; R_T is owed |
| Fig 5 | guards as a product; bargain | a term that explains all lending by saying "banks lend" fails the bargain |
| Fig 6 | only import moves the wall | "reserves create loans" is an imported frame, not a derivation |
| Fig 7 | agreement is variation, not a verdict | a consensus of reviewers cannot settle the bond |
| Fig 8 | no search adds an atom; no proof of absence | searching money data longer cannot manufacture a new mechanism |
| Fig 9 | split before search; describe before looking; filters vs witnesses | the "or" is a union; the multiplier was named before the residual was described |
| Fig 10 | verifier non-access; bring the residual | send the ledger test, not the theory |
| Fig 11 | capability is agent and habitat; enumerate the habitat | enumerate settlement, regulation and payment actors, not just the bank |
| Fig 12 | sequence vs production; isomer; arrangement is the substance | **decisive: the two options are two bonds, not two quantities** |
| Fig 13 | level relativity, after re-census | governs primitives, not ledger atoms; re-census recorded above |
| Operators table | six tests separate the bonds | the bond test is *"is there a B before A fires? No."* |
| Symbols table | R is the aim; ground is the anchor | no ground reading is taken in this packet |

---

## 3. Findings

### F1: The two options are two bonds over the same atoms (decisive)

Fig 12, production bond, and the Operators table give the exact distinction:

> Fig 12 :77 *"A produces B; B did not exist before"*
> Fig 12 :79 *"is there a B before A fires? No."*
> Fig 12 :72 *"A then B; B needs A to have happened"*

Operators table :40: *"different from sequence: the second operand is not waiting, it is absent until the first fires"*

Map the question onto these. If the claim is "banks lend out prior deposits", the deposit is operand A, the loan is operand B, and the bond is `→` sequence: the deposit is waiting and the loan needs it to have happened. If the claim is "lending creates deposits", the bond is `⇒` production: the deposit is absent until the loan fires, and the test asks whether there was a deposit before the loan fired. On a bank ledger, when a loan is disbursed the bank credits the borrower's account and records a new liability. The deposit was not waiting in that slot.

Fig 12 :94: *"The arrangement is the substance."* Fig 12 :95: *"Two entries with an identical ingredient set are not variants of one thing."* Both options use the same atoms (bank, borrower, loan, deposit, reserve). They are different substances because the bond differs. This is why more measurement of quantities cannot decide the question: a quantity reading cannot see a bond type.

**Mode:** `general` on the bond typing; `specified` on its application to bank ledgers. **Status:** `triangulated` (Fig 12 production definition plus Operators table six-test separation, two figures with low conceptual overlap). **Refuter:** R1 or R3 above.

Strain check: does `⇒` require a temporal priority of loan over deposit? Fig 12 :94 and the double-entry nature of the entries mean the two sides are booked together. The production bond does not say "loan first in time"; it says the deposit's existence depends on the loan firing. That is not a strain on the bond, it is a correct reading of it. The instrument that discriminates is the ledger entry's origin code, not a stopwatch.

### F2: The two theories are isomers over a shared atom set

Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Werner's taxonomy (opened 2026-11-23) names three hypotheses over the same atoms: financial intermediation (banks collect deposits that are then lent out), fractional reserve (individual banks cannot create money but the system does through interaction), and credit creation (each individual bank creates money when it extends credit). These are not three quantities of one thing; they are three arrangements of the same ingredients, hence three isomers under Fig 12 :117.

Falsifier, written before the run: if one theory needs an atom the others do not (for example a reserve requirement that exists in the fractional-reserve frame but not in the credit-creation frame as a binding constraint), the strict isomer claim fails and the weaker functional-group reading stands: same `loan to funding` pattern, different atoms in the slots. The falsifier is stated in `06_isomers_and_order.md`.

**Mode:** `specified`. **Status:** figure definition `single-source` (Fig 12), taxonomy `single-source` (Werner), with the chemistry analogue as low-overlap corroboration of the definition only.

### F3: The system-level multiplier is a strained import, not a derivation

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 6 :14 calls import *"the only operator that moves the wall"*.

The reserve → deposit → loan story imports a physical scarcity frame (a fixed stock of base money that is multiplied up) into a ledger frame where deposit creation is an entry. Fig 4 :21: *"The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."* What crosses up from the single bank is the method of entry creation, not the recording of one occasion. What does not cross is the single bank's settlement problem, which becomes a different thing at system level because interbank payments net out.

World evidence reports the strain: the Bank of England article says banks neither simply lend out deposits nor *"multiply up" central bank money; Carpenter and Demiralp report that the transmission mechanism *"does not work through the standard multiplier model or the bank lending channel"*; Disyatat reports that *"the misplaced emphasis on open market operations as the means through which monetary policy is implemented can give rise to inappropriate characterizations of monetary policy"*. These are secondary reports of ground contact, not this packet's own reading.

**Mode:** `specified`. **Status:** `triangulated` for the refusal (Fig 4 scale filter plus Fig 6 import rule plus independent world reports), `gap` for the exact quantitative reserve-deposit relationship in any jurisdiction. **Refuter:** R2.

### F4: "Or" is a union compound, so neither option wins by averaging

Fig 9 :4-5: *"are not one hard question but several well-formed ones. Split it rather than search."* Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

Both mechanisms really occur. A household can move existing cash into a deposit (no new deposit created by that act), and a bank can fund an outflow with existing wholesale money. At the same time a loan disbursement creates a new deposit entry. Bundling them into one "or" produces a question that no single measurement can answer, because each arm is true in its own slot. The correct move is to split and keep verdicts per domain. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*

**Mode:** `general`. **Status:** `triangulated` (Fig 9 split rule plus Fig 1 slot rule). **Refuter:** a demonstration that the two mechanisms are not jointly real in the same banking system, which would make it a partition after all.

### F5: The ground is a ledger trace and a cleared payment, not agreement

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The anchor here is the bank's own books: a timestamped entry showing the loan and the deposit arising together, and a payment that either clears or does not.

The world sources are mostly one pool. McLeay/Radia/Thomas, Jakab/Kumhof and the IDEAS records cite each other; the Mises piece quotes the Bank of England article. Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*. One genuinely independent ground contact is Werner's reported experiment monitoring a cooperating bank's internal records while a loan was made. That is a report of a ground reading, and its independence is claimed by its author, not established here. Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

**Mode:** `specified`. **Status:** `triangulated` for the anchor rule (Fig 2 plus the source-discrimination essay), `single-source` for the independence claim of the experiment. **Refuter:** R5.

### F6: The constraint is a different quantity from the bond

This is the load-bearing correction to the naive version of option B. Saying "lending creates deposits" does not say banks are unconstrained. The constraint set is capital adequacy, liquidity, the policy rate and the demand for creditworthy borrowers. Fig 12 :125: *"A composition costs in two currencies, and they do not add."* Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."* The bond between L and D is one quantity; the funding needed when a payment leaves the bank is another. Adding them into one "is a deposit a constraint or a consequence?" scalar is the error.

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Carrying the single-bank result up to the system and back down loses the settlement constraint. That loss is R_T, recorded in `11_audit.md`.

**Mode:** `specified`. **Status:** `triangulated` (Fig 12 two currencies plus Fig 4 round trip plus the BoE statement that the amount of money created ultimately depends on central bank monetary policy). **Refuter:** an instrument showing the same constraint operates identically at both scales, which would set R_T to zero.

### F7: Slot indexing matters, and an aggregate hides the live one

Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Live slots here include: domestic versus cross-border lending, retail deposits versus wholesale funding, bank size, and the operating regime (corridor, floor, ample reserves). A single UK or US aggregate cannot decide all of them. This is why R4 (an attribution instrument) is a gap, not a silence.

**Mode:** `specified`. **Status:** `triangulated` (Fig 1 plus the multiplicity of regimes reported in the sources).

### F8: "No prior deposit needed" is not "no funding needed"

A payment out of the borrower's new deposit may leave the bank. The bank then needs central bank reserves, obtained after the fact by borrowing, selling assets or attracting deposits. The deposit creation and the reserve acquisition are two bonds in a loop, not one chain. Fig 12 :121: *"The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*

This is where the Austrian critique (Nelson, Mises Wire, 2023) and the Bank of England account agree on the mechanism and disagree on the interpretation. The conflict does not flip the bond verdict; it sends us back to the census, which separates the creation leg from the settlement leg. Per the conflict rule, agreement about the mechanism across opposed frames is corroboration at maximum independence only if the frames genuinely differ in evidence pool. Here the Mises piece quotes the BoE, so it is not independent on the mechanism. It is independent on the interpretation, which is not the claim under audit.

**Mode:** `specified`. **Status:** `triangulated` for the loop form (Fig 12 cycle plus the BoE reserve-supply statement), `gap` for the exact order and timing in any particular payment system.

### F9: What survives, with mode attached

| claim | mode | figure or source |
|---|---|---|
| The two options are different bonds, not different quantities | `general` | Fig 12 :72/:77/:79, Operators :40 |
| The loan/deposit bond is production (`⇒`) at the ledger | `specified`, reported-ground-backed | Fig 12 :77; Werner experiment report |
| The multiplier is a system-level import, not a derivation | `specified` | Fig 4 :21, Fig 6 :23, world reports |
| The "or" is a union compound and must be split | `general` | Fig 9 :4-5, :54 |
| Funding/settlement is a separate loop with its own anchor | `specified` | Fig 12 :121, Fig 4 :30 |
| Exact share of deposits attributable to lending at a moment | `gap`, unreached | no source-discriminating instrument in the pool |
| Exact mix of binding constraints by bank and regime | `gap`, unreached | per-slot data owed |

---

## 4. Recommendation

1. Refuse the forced disjunction on form. Split the union (Fig 9 :4-5) before answering either arm.
2. State the bond type explicitly: `L ⇒ D` at the ledger, with the six-test discriminator named (Fig 12 :79).
3. Keep the settlement loop as a separate domain with its own anchor. Do not average it into the bond verdict (Fig 12 :125).
4. Mark the attribution and constraint-mix questions as `gap`, reported as verdicts and not silence (Fig 13 :134: *"It cannot say which primitive is missing, because naming it would mean already holding it."*).
5. Lead any outreach with the bond test and its refuter, not with a theory name. Fig 10 :52: *"Bring a characterised residual, never the source."*

---

## 5. Canonical usage check

Read after the first pass: the canonical figures README (`FIGURES_README_canonical.md`), THE_FORMULA, the seat map, and WATSON 60 where present locally. The governing sentence is that the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"* and the limit that the framework returns *"what a missing thing would have to look like (a shape, not a name)"*.

### Retractions and narrowings, kept visible

| earlier reading | status after the canonical check |
|---|---|
| Fig 13 six-term substrate governs bank books | **Retracted.** Ledger atoms are not physical states. Re-census to Fig 12 bonds and Fig 4 scale. Recorded in section 1. |
| "Credit creation is true, intermediation is false" | **Narrowed.** Credit creation is the correct bond at the loan/deposit pair; existing-deposit funding is a real separate pathway. The "or" is a union. |
| "Bank of England and Werner agree, so two witnesses" | **Retracted at witness level.** The BoE article and the IDEAS records share a pool; Werner's experiment is one claimed independent ground contact. Agreement is not corroboration (Fig 2 :40). |
| "Lending creates deposits, so banks are unconstrained" | **Refused.** F6 separates bond from constraint. The BoE explicitly says the amount created ultimately depends on monetary policy. |
| "The money multiplier is false everywhere" | **Narrowed.** The mechanism fails as a derivation and in the reported data for the systems examined; per-slot regimes are a `gap`, not a universal no. |
| "Shape, not a name" forbids naming credit creation | **Narrowed.** The phrase governs a missing primitive. Credit creation is a bond arrangement over held atoms, so naming it is allowed as `specified`, with provenance. |
| "The world sources settle the question" | **Retracted.** They are secondary reports. This packet is a simulated derivation checked for internal consistency only. |

### Round trip, anticipating the second seat

Sent up: Fig 12's six-test separation of sequence and production, Fig 9's union split, Fig 4's scale filter. Brought down: "banks create money when they lend, full stop". Dropped in the trip: the settlement loop, the constraint set, the slot index, and the attribution gap. That is a nonzero R_T, measured qualitatively and enumerated in `11_audit.md`.

---

## 6. Verdict of this audit

The shape survives; the forced disjunction does not. At the loan/deposit pair the figure-governed bond is production, `L ⇒ D`, and the discriminator is *"is there a B before A fires? No."* At the system level the multiplier is a strained import and a union compound that must be split. The bank's need to settle outflows is a separate loop with a different anchor, and the exact attribution of deposit creation and the exact constraint mix are declared `gap`. Every domain verdict is kept separate and never averaged. Nothing here is `grounded` in this packet, and cost, undoability and the reversal instruments are carried into `09_watson_answer.md`.
