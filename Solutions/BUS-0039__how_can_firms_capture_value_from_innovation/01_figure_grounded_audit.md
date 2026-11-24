# Figure-grounded audit: BUS-0039, value capture from innovation

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the firm's belief about what customers will pay for, formed from its own history and inherited priors.
- **a** is what the firm does: invest, disclose, patent, keep secret, build manufacturing, build distribution, license, form an alliance, move first.
- **Γ(b,a)** is what the firm's library of knowledge and routines predicts it will receive.
- **o′** is what the market actually returns: price, share, profit, survival.
- **s** is the innovation. R is indexed by innovation and by time, never averaged across a portfolio.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon is a **gap between private and social return that persists per innovation**: the innovation pays customers, imitators, suppliers and complementors, while the originator's predicted return Γ(b,a) exceeds the realized return o′. State the residual as: *why does the market's payment for an innovation accrue to the originator in some slots and to imitators or owners of complementary assets in others, and what keeps that payment arriving over time?* This is an effect description. It names no mechanism, no "patent", no "moat", no "dynamic capability". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a set of conditions whose conjunction keeps a slot's R small, plus an instrument that discriminates a failure of one condition from another. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidate: *"A measurement, an experiment, a counter, a market, a patient outcome."* The market is explicitly a named anchor. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* Analyst consensus, internal metrics, patent counts and managerial opinion move when pushed; they are instruments at best. A patent registry is also a moving instrument: grants are invalidated, jurisdictions differ, laws change (see F4). Viable anchor: realized private return and survival, measured per innovation.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: innovation Γ, the firm's appropriability action a, and the market return o′, indexed by slot s and ordered by time t. It is a sequence, so it carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "capture" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: originator and imitator are not interchangeable.
- **Symmetry.** "Capture" is a threshold relative to competitors, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). Knowledge diffusion is strongly asymmetric in cost: publication is cheap, rebuilding the complementary arrangement is not (Fig 12 :5, :47; Fig 12 :125-126 on two currencies).
- **Scale.** Three scales are in view: the single innovation inside one firm's step-by-step loop (Fig 4 one-agent panel), the population of firms and imitators in a habitat with *"something that ranks what they produce"* (Fig 4 :5), and the institutional layer of law, registries and standards that spans them. The membrane is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Knowledge / closure** | the innovation's knowledge atoms, imitators as frames with differing closures | composition over leaked atoms; closure and reach | yes: market payment, not the firm's claim (Fig 2 :29) | admitted |
| **D2 Arrangement / complementary assets** | the firm, manufacturing, distribution, brand, service, data, cumulative learning, ecosystem actors | the bond that turns knowledge into delivered value; cost in actions | yes: market settlement (Fig 12 :125-126; Fig 2 :29) | admitted, decisive |
| **D3 Legal / institutional appropriability** | firm, patent and copyright and trade-secret law, courts, registries, standards bodies | exclusion rights, time bought, record created | partially: court and registry, but they move when pushed (Fig 2 :30, Fig 10 :47) | admitted as an instrument, not the ground |
| **D4 Market / ground** | customers, entrants, complementors | payment, switching, network position | yes: willingness to pay and realized return (Fig 2 :29) | admitted |
| **D5 Temporal chain of innovations** | successive innovations, followers, dominant designs | progress per handoff | yes: bracket fidelity and ground pressure (Fig 7 :37-39) | admitted |
| **X1 Knowledge as a self-contained moat** | the knowledge item | codification | **no** anchor independent of the market's verdict | not a domain yet |
| **X2 Patent portfolio size as proof of value** | the portfolio | grant counts | registry count moves when pushed and does not settle payment | instrument, absorbed into D3 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that knowledge never matters. X2 is the same failure: a count of grants is a frame-internal quantity (Fig 1 :26: *"predicates minted, and credibility accrued"*; Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*).

### 1.3 Partition or union

D1 and D2 overlap: the knowledge and the arrangement are both inside the firm's Γ, so their overlap is a compound with its own loop. D3 and D4 overlap: legal rights change what the market can pay for, so that overlap is a second compound. D2 and D5 overlap: complementary assets are built over time across successive innovations. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the"** (Fig 9 :55, continued :56 *"intersections standing, because the second condition still binds."*)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) a bond the imitator cannot reproduce from the same knowledge atoms; (C2) maintained contact with a paying ground across a chain of differing innovations; (C3) a record and a legal instrument that buy time and prove provenance; (C4) a habitat position that enumerates complementors and imitators rather than assuming them away. A firm failing only C1 and a firm failing only C3 are not different degrees of one failure; they need different instruments. The Library of Babel essay states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

Order for this question: 1 perception (can the firm see what is leaking and which returns are arriving to whom?) → 2 vocabulary (does Γ have terms for what the innovation affords: which parts codify, which stay tacit, which complements bind?) → 3 objective (can it say what would count as capture, per innovation, in its own terms?) → 4 planning (choose a mechanism) → 5 learn and carry (reuse the method, not the particular capture). The middle link is where chains usually break: firms have mature instruments for R&D spend and patent counts, which sit above the break, and few for saying what would count as progress in the habitat. Fig 12 :111-113: *"A vocabulary without bonds can name a state and cannot name a route to one. A plan is a sequence. A goal is a comparison. Progress is a subtraction."*

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not the answer |
| 2 The Ground | market is a named anchor; independence vs common pool; moving anchors | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer and the individual-to-firm analogue |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a mechanism can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall; idempotence | governs imitation and the limits of exclusion |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs persistence across successive innovations |
| 8 Union Surplus | low overlap triangulates; provenance separates convergence from import | governs complementors, the record, and independent reinvention |
| 9 Leave / Arrive | union vs partition; describe the residual first; filters vs witnesses | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; convention that decides an outcome | governs the legal instrument and the verifier |
| 11 The Habitat | capability is agent-and-habitat; introduction available, exclusion not | decisive for D1, D2 and C4 |
| 12 The Bond | arrangement is the substance; isomer; two currencies | decisive for D2 |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop only |
| Operators table | seven bonds plus negation; ⋛ is a threshold relation | governs the type of "capture" and of refusal |
| Symbols table | R is the aim; the ground is the anchor | governs notation |
| Formula | step 5 settlement, step 7 three questions, mode rule | governs status and stop |
| Seat Map | correlation valence; falsifier as design instrument | governs outreach and the pre-registration |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "knowledge assets" fit only by calling knowledge "space", accumulation "energy" and spillover "gradient". That is a strain, so Fig 13 does **not** govern the composition of firm capabilities. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about firms, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Imitation is a closure fact; exclusion cannot subtract the habitat

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 11 and Fig 6/Fig 8, low topical overlap: habitat relations vs closure algebra).**

> **"The seat’s power is asymmetric. Introduction is available; exclusion is not."** (Fig 11 :61)
> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)

Once knowledge atoms are public, imitators compose inside their own closures; no amount of searching inside the innovator's closure removes those atoms from the world. What the firm can do is add actors and assets to a habitat it did not author. It cannot subtract imitators, because contact is a fact about the world and does not consult the firm. "Knowledge spreads quickly" is therefore not a contingency to be wished away; it is the idempotence of closure observed from inside a market. Secrecy is a **substitution** of habitat (F3), not a deletion.

**Refuter:** a documented case in which an originator permanently removes all imitators from a habitat without substituting another habitat, with the market still paying for the same innovation. That breaks Fig 11 :61 and the idempotence reading together.

**World bearing (secondary only):** Honma, Takakura and Nishida 2008, in *PLOS ONE*, report that in a model/mimic system *"the availability of alternative prey rather than the precise method of predator learning critically determines the relationship between Model and Mimic."* In this low-overlap field the effect of an imitator on the originator is decided by the surrounding habitat, not by the imitator's internal properties. This corroborates Fig 11 :49-51 at a different stratum. It is one witness, not two.

### F2: The bond carries the defensible value; the recipe is half the information

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 12 and Fig 11, low overlap: composition notation vs habitat relations).**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"recipe that names only its ingredients has recorded half of itself."** (Fig 12 :47)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :123)
> **"And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)

The innovation document is the ingredient list. Manufacturing, distribution, service, brand, data and cumulative learning are the bonds. A diffuse-knowledge world transfers the ingredient list cheaply and leaves the bonds in place if the firm holds them. Under Fig 12 :117, two firms with the same knowledge atoms but different bonds are **not variants of one thing**; they are different substances. Under Fig 11 :39 the durable part of the return is a property of firm-and-habitat, never of the knowledge item alone. This is the figure-grounded reason why publishing a recipe does not by itself transfer the returns.

**Refuter:** a measured case in which full disclosure, no complementary asset, no record, no legal right and no network position still yields durable private returns across repeated innovations at the ground. That breaks F2 and collapses the bond claim.

**World bearing:** Teece 1986, in *Research Policy*, opens with the finding that *"the profits from innovation may accrue to the owners of certain complementary assets, rather than to the developers of the intellectual property"* and states *"the need, in certain cases, for the innovating firm to establish a prior position in these complementary assets."* This is a direct business-pool corroboration of F2. Polanyi, in *The Tacit Dimension*, starts from the fact that *"we can know more than we can tell"*, which corroborates the portion of the arrangement that does not travel with a document. The two come from different evidence pools (economics of innovation; philosophy of knowledge), so they are two witnesses for the mechanism shape, but neither is a ground reading for this question.

### F3: Secrecy is habitat substitution with invisible costs

**Mode: `specified`. Domain D1. Status: single-source (Fig 11), with one low-overlap engineering corroboration.**

> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)
> **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat’s actors, which you did not choose."** (Fig 11 :67)
> **"what you failed to reproduce is invisible until the goal fails"** (Fig 11 :68)
> **"what you unintentionally introduced is invisible until it acts"** (Fig 11 :69)
> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** (Fig 11 :70)

A sealed lab, an opaque process, or an isolated subsidiary does not remove competitors; it exchanges one habitat for another, and the new habitat may fail to reproduce the complements that made the innovation pay. The two failure modes are invisible until they act. A protected enclave proves the technology works, not that value can be captured in the market.

**Refuter:** a sealed enclave that reproduces all complements, introduces no imitators, and loses no contact with the paying ground, with each condition independently measured. That would falsify the substitution-and-loss claim.

**World bearing:** Rosulek, in *The Joy of Cryptography* (Engineering LibreTexts), states Kerckhoffs' principle: *"Design your system to be secure even if the attacker has complete knowledge of all its algorithms."* In a field where secrecy failure is studied formally, the robust design is the one that survives publicity because the secret is concentrated in a changeable key, not in the design. This corroborates F3 from a low-overlap field. It is an analogue, not evidence about firms.

### F4: Legal IP buys time and a record; it is not the ground

**Mode: `specified`. Domain D3. Status: triangulated (Fig 2 and Fig 10, low overlap: anchor theory vs ground maintainer).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"If it moves when you push on it, it is not an anchor."** (Fig 2 :30)
> **"A ground listed as one of the parties has already become a frame. Which is panel 1, arrived at by a different route."** (Fig 2 :47)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)

A patent is a real instrument: it buys time, creates a public record, and can exclude within a jurisdiction. But it moves when pushed. Grants are invalidated, scopes are reinterpreted, jurisdictions differ, statutes change. A firm that treats its grant count as proof that value has been captured has promoted an instrument into a ground and joined the frame it was trying to check. Fig 2 :47 names the failure exactly. The legal layer is therefore **C3, a time-and-record condition**, not the verdict. It is priced by Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

**Refuter:** a jurisdiction in which a patent grant is immovable under push (no appeal, no invalidation, no legislative change) and where grant alone reliably predicts realized private return across innovations. Then the grant would be a ground and F4 would fail.

**World bearing:** Cohen, Nelson and Walsh 2000, in an NBER working paper based on 1,478 R&D labs, report that *"patents tend to be the least emphasized by firms in the majority of manufacturing industries, and secrecy and lead time tend to be emphasized most heavily."* They also find that firms patent for reasons *"that often extend beyond directly profiting from a patented innovation"*, including blocking and negotiations. This corroborates the instrument reading of legal IP. High overlap with Teece and James (same innovation-economics pool), so it counts with them as one witness for the verdict, not three.

### F5: The record is the asset where artefact and copy are indistinguishable

**Mode: `specified`. Domain D3. Status: single-source (Fig 8).**

> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures"** (Fig 8 :51, continued :52 *"differ."*)
> **"Residual first, frame second."** (Fig 8 :53)

A product that an imitator builds independently and one that it copied from the originator can be indistinguishable in the artefact. What separates them is the dated record: lab notebooks, prior art, publication timestamps, design history. Under Fig 8 :51-52 the record is not documentation of the asset; for provenance purposes it **is** the asset, because the surplus exists only where the closures differ and only the record says which closure produced the artefact. This is why C3 includes a record condition alongside the legal right.

**Refuter:** a domain in which independent invention and copying are reliably distinguishable from the artefact alone, generally, so provenance adds nothing to the originator's standing. Then the record condition drops out.

**World bearing:** no low-overlap source was found that speaks directly to provenance as the discriminating asset. F5 is recorded as single-source, not upgraded by analogy.

### F6: Capture is a chain of differing rooms, not a one-time extraction

**Mode: `specified`. Domain D5. Status: triangulated (Fig 7 and Fig 12, low overlap: room selection vs level-relative irreducibility).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)
> **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"** (Fig 12 :104)

A single protected innovation is one room. Durable capture is a sequence of rooms, each differing from the last and selected against the residual the previous one surfaced. A follower who copies the previous room is *"one long room: motion, no progress"* (Fig 7 :32). Each innovation, once settled against the ground, becomes an atom for the next one, so the chain needs no new primitive. Where ground pressure or bracket fidelity goes to zero, the chain runs in place even if the firm keeps shipping.

**Refuter:** a measured case of one room (a single product with no successor and no new atom) that keeps paying for decades while both bracket fidelity and ground pressure are independently shown to be irrelevant. That breaks F6.

**World bearing:** Cohen, Nelson and Walsh report that secrecy and **lead time** are the most emphasized mechanisms. Lead time is the business name for a handoff advantage, and James, Leiblein and Lu 2013 list *"specific bundles of value capture mechanisms"* as what is most likely to help innovating firms achieve *"persistent superior performance"*. Both corroborate the chain shape. They share the innovation-strategy pool with Teece, so they are one witness.

### F7: Two currencies, bits and actions

**Mode: `general` with a `specified` consequence for method. Domain D2. Status: single-source (Fig 12).**

> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"** (Fig 12 :126)
> **"Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."** (Fig 12 :130)

The knowledge artifact is cheap to describe (bits); the arrangement that makes it pay is expensive to settle (actions: building plants, channels, trust, learning). A strategy that accounts only R&D spend and filing fees counts one currency and will not notice the shortfall in the other. The two do not add and cannot be summed into a single "appropriability score" without destroying the diagnostic.

**Refuter:** a single prospective metric that predicts capture across both the description cost and the settlement cost without loss, validated on named innovations before outcomes are known. That would collapse the two readings.

### F8: The question is a union of conditions; unbundle before choosing a lever

**Mode: `general`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal, so the external witness count is one).**

Fig 9 :54, :55 and :57 are quoted in section 1.3. The four conditions have different instruments:

- A C1 failure shows up as easy replication of the artefact with no loss to the imitator (Fig 12 :5, :117).
- A C2 failure shows up as a chain running in place: fidelity or ground pressure at zero (Fig 7 :37-39).
- A C3 failure shows up as an unprovable provenance and a moving legal anchor (Fig 8 :51-52, Fig 2 :30).
- A C4 failure shows up as unenumerated habitat relations and surprise valence changes (Fig 11 :43, :49-51).

A single lever, for example "patent everything", clears the region where only C3 holds and leaves the intersections standing. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

**Refuter:** a single intervention that restores all four conditions in all four failure types and leaves no categorically different residue. That would collapse the union into a partition.

**World bearing:** James, Leiblein and Lu 2013 write that *"we have yet to develop a robust theory that allows us to unbundle the characteristics of institutions, industries, firms, and individual technologies that affect the selection of particular value capture mechanisms."* This is a near-verbatim statement of the same gap and the same instruction from inside the field. It corroborates F8, and it is the strongest reason to present this as a shape for checking rather than a mechanism list.

### F9: Value is per innovation, never a portfolio average

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

A portfolio-level average return scored with the firm's own accounting has already averaged away the signal that says which innovation lost contact and where. Fig 9 :60 forbids letting that filter hand a verdict. The specified consequence: any claimed answer to BUS-0039 that is an average across innovations has thrown away the only signal that identifies the failing slot.

**Refuter:** an averaged portfolio statistic that predicts, prospectively and per named innovation, which one will fail to capture value. If one exists, F9's methodological consequence is false.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per innovation, never a portfolio average | general | Fig 1 :19, :22 | figure-derived |
| The market is the anchor, not grants or internal metrics | general | Fig 2 :29, :30, :47 | figure-derived |
| Imitation is closure idempotence; exclusion cannot subtract habitat | specified | Fig 11 :61; Fig 6 :21, :23; Fig 8 :32 | triangulated F1 |
| The bond, not the knowledge atoms, carries the defensible value | specified | Fig 12 :5, :47, :117; Fig 11 :39 | triangulated F2 |
| Secrecy substitutes habitat and has invisible costs | specified | Fig 11 :66-70 | single-source F3 |
| Legal IP buys time and a record, not a verdict | specified | Fig 2 :30, :47; Fig 10 :47 | triangulated F4 |
| The record is the provenance asset | specified | Fig 8 :51-52 | single-source F5 |
| Capture is a chain of differing rooms | specified | Fig 7 :12, :36-39; Fig 12 :104 | triangulated F6 |
| Bits and actions are two currencies | general | Fig 12 :125-126, :130 | single-source F7 |
| The question is a union of four conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| Which specific mechanism wins for a given innovation | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule in the Seat Map, :287: *"And a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. An originator permanently removes all imitators from a habitat without substituting another habitat, while the market keeps paying (breaks F1, Fig 11 :61, Fig 6 :21).
2. Full disclosure with no complementary asset, no record, no legal right and no network position yields durable private returns across repeated innovations, measured at the ground (breaks F2, Fig 12 :5, :47).
3. A sealed enclave reproduces all complements, introduces no imitators, and loses no ground contact, with each condition measured (breaks F3, Fig 11 :66-70).
4. A patent grant is immovable under push and predicts realized returns across innovations (breaks F4, Fig 2 :30).
5. Independent invention and copying are reliably distinguishable from the artefact alone, generally (breaks F5, Fig 8 :51-52).
6. One room keeps paying for decades with no new atom and no ground pressure, measured (breaks F6, Fig 7 :37-39).
7. A single intervention restores all four conditions in all four failure types and leaves no categorically different residue (breaks F8, Fig 9 :57).
8. A portfolio average predicts, prospectively and per named innovation, which one fails to capture (breaks F9, Fig 1 :19).
9. Fig 8's idempotence fails inside a closed set, or Fig 12's two currencies are summed without loss (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of strategy (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the four conditions separate in every report. A blended "appropriability score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Enumerate the habitat before choosing a lever. Fig 11 :43: *"The habitat is enumerated, never composed."* List actors, conditions and relations, then what contacts those, outward until the cascade stops mattering.
4. Treat legal IP as C3: a time-buying instrument and a record, not the verdict. Price the record separately from the right.
5. Price bits and actions in two ledgers (Fig 12 :125-130). Do not sum them.
6. Ask at each handoff which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
7. Use the business literature as one witness and a budget filter. Teece, Cohen/Nelson/Walsh and James/Leiblein/Lu share an evidence pool (Fig 2 :31, :40).
8. Stop at the shape. Do not name which mechanism a particular firm should use; the framework returns *"you get a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, the Seat Map, and the essays *The Recursive Self-Improvement Trap*, *The Library of Babel* and *The Hard Problem is About Source* (all opened 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- *The Hard Problem is About Source* confirms the source-discriminator argument: *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"The answer is unreached until a better instrument exists."* A patent count or an imitator's artefact is a reading, not a source.
- *The Recursive Self-Improvement Trap* confirms both the simulation status and the prestige rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to knowledge assets | **Retracted, strain S1** | Only fit by renaming knowledge "space" and spillover "gradient". Re-census: Fig 13 governs the physical substrate, not a firm's Γ |
| "Patents confer no protection" | **Narrowed to F4** | Teece 1986 says patents work in some industries. The figure-grounded claim is that a grant is a moving instrument, not that it is worthless |
| "shape, not a name" read as a ban on naming mechanisms | **Narrowed** | The README's phrase governs a *missing* primitive. Patents, bonds, records and habitats are already in Γ or in the habitat, so naming them is a binding from the business frame, recorded as provenance (Fig 8 :51-52) |
| Treated James et al.'s four mechanisms as a partition | **Re-mapped to a union** | Fig 9 :54-55. The mechanisms are overlapping conditions; a list is a budget filter, not a verdict |
| Treated Teece, Cohen et al. and James et al. as three independent witnesses | **Retracted as three, kept as one** | Same innovation-strategy evidence pool, Fig 2 :31, :40 |
| Read a market as a ground that "moves" | **Resolved, strain S2** | Fig 11 :73: *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."* Customer preference is habitat; realized payment is ground |
| Marked "which mechanism wins" as `gap` | **Canonically confirmed** | Fig 9 :32 and Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* |
| F5 called "single-source" | **Kept single-source** | No low-overlap source was found for provenance specifically; no corroboration was invented |

**Strains sent to the log:** S1 (Fig 13 applied to knowledge assets), resolved by re-census; S2 (market as moving ground), resolved by Fig 11 :73. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the Library of Babel bundle passage: it is a union of four conditions, each with its own instrument.
2. **What is the anchor?** The market, named in Fig 2 :29. Not grant counts, not internal metrics.
3. **Is the value in the knowledge alone?** No. Fig 12 :5, :47, :117; Fig 11 :39. The recipe is half the information.
4. **Can imitators be excluded?** Not subtractively. Fig 11 :61; Fig 6 :21, :23. Introduction is available; exclusion is not.
5. **What does secrecy do?** Substitutes a habitat, with costs invisible until they act (Fig 11 :66-70); corroborated at low overlap by Kerckhoffs' principle.
6. **What does legal IP do?** Buys time and creates a record; it is a moving instrument, not a ground (Fig 2 :30, :47; Fig 10 :47).
7. **How does capture persist?** A chain of differing rooms selected against the surfaced residual (Fig 7 :36-39), each settled innovation becoming an atom for the next (Fig 12 :104).
8. **What can be said at the stop?** A shape and nine falsifiers, not a named mechanism. Fig 9 :32, Fig 13 :134.

---

## 8. Updated verdict

The shape survives: **value capture per innovation depends on holding a bond the imitator cannot reproduce from the same knowledge atoms, on maintaining contact with a paying ground across a chain of differing innovations, on a dated record plus a legal instrument that buys time, and on a habitat whose actors and relations have been enumerated rather than assumed away. These four conditions are a union, kept separate and never averaged. The knowledge item itself is not the moat, and protection alone is not the verdict.** Which specific mechanism wins in a given industry is a `gap`, not a silence: the framework returns a shape, and the instrument that would name the source is not held here. Mode `specified`. No world source flipped a verdict; the one genuine conflict (patents as proof of value) was returned to the census and re-mapped as an instrument. No unresolved strain remains after re-census.
