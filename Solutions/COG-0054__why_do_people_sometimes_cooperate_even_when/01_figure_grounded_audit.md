# Figure-grounded audit: cooperation without direct reward (COG-0054)

**Mode of this document: `specified` on the mechanism-shape and on each domain verdict, `general` on the structural invariant. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: SIMULATED DERIVATION, not a ground reading.** From *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself". This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement was taken.

**Authority for quotes.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim, cited `Fig N :line`. Quotes were re-opened and checked against the extract before writing. Local canonical rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.

---

## 0. The question under audit, restated as an effect

> Why do people sometimes cooperate even when they expect no direct reward or punishment?

Restated as an effect. An actor performs a cooperative act (a cost `c` to itself, a benefit `b` to another) in a setting where the immediate direct-reward-and-punishment frame predicts defection, because defection has the higher immediate payoff and carries no immediate sanction. The thing to be decided is what accounts for the excess of cooperation over that prediction.

- **Option A:** the direct frame is complete, so the cooperation must be a hidden immediate payoff or a mismeasured punishment.
- **Option B:** the direct frame scopes the actor away from the habitat, and the reward lives in a different currency or at a different scale than the frame carries.

What an answer would look like, written down and bound as an ordinary term before the run (Formula step "Direction", Fig 5 :65-66: "make the sought-for shape an ORDINARY TERM"):

> **SHAPE-TARGET:** a characterisation of what the cooperative act contacts beyond the immediate payoff, such that the act becomes predictable without adding an immediate reward to the frame.

Binding it lets it accrue a residual like anything else (Fig 5 :66: "Committing a prediction before a run is this, already working"). The pre-registered refuter in section 7 is written against this target.

---

## 1. The residual R, in effect terms

Fig 1 :19 "The residual is indexed by object slot, not aggregated."

Fig 1 :13 "a global R near zero with one live slot residual is a legal state"

The slot is one cooperative act under no direct incentive. A near-zero global payoff in that slot is not evidence that nothing is happening; it is the condition the question names.

- **Arity:** cooperation is at least dyadic. One actor alone cannot cooperate. The residual cannot be indexed by a single deciding agent; it is indexed by a relation.
- **Symmetry:** the dilemma payoff is symmetric between the two roles, but the act has directed valence (it benefits the other). Under a change of residual the same relation flips sign (Fig 11 :50). So the residual is symmetric in form and asymmetric in valuation.
- **Scale:** the act is first order (one act, no visible return). The mechanisms that can carry it live at second order and beyond (reputation, iterated bonds, group survival, transmitted norms). This is a contact cascade, not one mechanism at one scale.

**R:** observed cooperation in the no-incentive slot minus the direct frame's predicted cooperation. The direct frame predicts defection; R is positive. The frame that fails is the direct-reward frame, not the actor.

---

## 2. Domain census, before choosing any figure line

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D0 direct-incentive decision frame (the failing frame) | one actor, immediate payoff matrix | immediate material reward or punishment | the immediate payoff | frame whose closure fails on R |
| D1 habitat and relations | actor plus kin, friends, partners, community, institutions, conditions, relations | contact and cascade; valence relative to R | the ground (what survives) | partition boundary: actor-in-isolation versus actor-in-habitat |
| D2 iterated bond and memory | the same actors across repeated encounters; observers of reputation | memory, trust, the repeated encounter | whether the loop closes (continued interaction) | cycle, not a one-shot payoff |
| D3 selection between rooms | groups or rooms of actors | variation inside, selection between | the ground, via selection between rooms | union compound with D2 (both can hold at once) |
| D4 social learning and norm transmission | one agent and the population across the membrane | methods carried up, head starts sent down | the ground | union with D1: norms are relations transmitted |

**Partition or union.** This is a **union**, not a partition (Fig 9 :54-58). A no-incentive cooperative act is usually in two or three conditions at once: it repeats, it sits in a habitat, and it is governed by a norm. A single lever clears the region where only one condition holds and leaves the intersections standing. So the compound gets its own loop, and verdicts are kept per domain.

**Order by dependency (Fig 3).** Enumerate the habitat before assigning valence (Fig 11 :43-48, "the habitat is enumerated, never composed"); close the bond before pricing the selection between rooms (Fig 12 :104); transmit methods after settlement, never recordings (Fig 4 :22). Describe the residual before choosing a frame (Fig 9 :27-28).

---

## 3. Figure census (verbatim, before concluding)

| figure | bearing on R | verdict |
|---|---|---|
| Fig 1 | *"The residual is indexed by object slot, not aggregated."* | R is the no-incentive act, not an average payoff |
| Fig 2 | *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* | agreement among cooperators is not a ground for the claim |
| Fig 4 | *"Only methods cross up. Only head starts come down."* | norms are transmitted methods, not recordings |
| Fig 5 | *"When nothing is scoring, the drive manufactures a gradient."* | strains: governs term minting, not action selection; re-census in section 5 |
| Fig 6 | *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* | naming a mechanism requires contact with a frame that holds it |
| Fig 7 | *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* | group-level selection is a figure-licensed domain |
| Fig 8 | *"Two frames together reach what neither reaches alone."* | cooperation has a surplus the isolated actor cannot reach |
| Fig 9 | *"describe it before you go looking, or any frame you pick will seem to fit"* | mechanism names must be imports, not figure derivations |
| Fig 11 | *"capability is a property of agent-and-habitat, never of the agent alone"* | the direct frame's isolation is the defect |
| Fig 11 | *"An actor's valence is relative to the residual, not a property it carries."* | cooperation is a relation, not a kind of actor |
| Fig 12 | *"catalyst. A part that survives its own use."* | reputation and trust survive the act |
| Fig 12 | *"cycle. The output re-enters as input."* | the return need not be immediate to close the loop |

Strained readings are named in section 5, not smoothed over.

---

## 4. Findings

### F1 — The "no direct reward" condition is a scoping error (decisive)

Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone"

Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."

The direct-reward frame models one actor in isolation, with one immediate payoff. That is D0. It is a frame, not the actor. By Fig 11 :39 the actor so described has been stripped of the habitat that makes the act capable of being cooperative. By Fig 11 :40, improving or measuring that isolated actor more finely changes nothing, because contact did not change.

So "no direct reward" does not mean "no reward". It means the frame measured only first-order material contact and could not carry the currencies in which the return arrives. This is Option B. The reward is not absent; it is in another currency or at another scale.

**Mode:** `specified`. **Refuter:** find a systematically cooperative act where the actor is genuinely isolated from all habitat contact (no kin, no repetition, no reputation channel, no group, no norm, no internalized rule), and still cooperates. That breaks Fig 11 :39.

### F2 — Cooperation is a relation, not an actor property

Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."

Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."

The question asks "why do people ... cooperate". Fig 11 :49-50 says the subject is mis-stated: cooperation is a valence of a relation to a residual, not a property carried by a person. The same act is beneficial to one residual and harmful to another. So the honest question is "what relation makes this act cooperative for this actor". Kin selection, friendship, reputation and formal rules are different relations, not different kinds of person.

**Mode:** `general` (structural). **Refuter:** show cooperation is a fixed trait of the actor that survives every change of residual and every change of relation. That breaks Fig 11 :49-50.

### F3 — The return is a contact cascade beyond first order

Fig 11 :52 "And contact cascades."

The figure's own example is DDT reaching eagles: "first-order enumeration, second-order effect, and the residual that mattered was three steps out" (same line). The direct frame enumerates first-order contact (this act, this payoff). Reputation, future reciprocation and group survival are second and third order. Scoping to direct contact is exactly how the residual that matters gets missed.

**Mode:** `specified`. **Refuter:** show the selective consequence of a cooperative act is strictly first order, with no measurable second or third order effect. That breaks Fig 11 :52.

### F4 — The iterated bond: catalyst and cycle

Fig 12 :119 "catalyst. A part that survives its own use."

Fig 12 :121 "cycle. The output re-enters as input."

Reputation and trust are catalysts: they survive the cooperative act that spends them. A repeated interaction is a cycle: the output (a remembered helpful act) re-enters as input (the next decision). Neither requires an immediate payoff. The "shadow of the future" in the game-theory literature is this cycle stated in another vocabulary; the figures supply the shape (a part that survives its use, a loop that closes), not that name.

**Mode:** `specified`. **Refuter:** show a repeated setting where the output does not re-enter (no memory, no reputation, no carry-over), yet cooperation persists at the same rate. That breaks Fig 12 :121 for this domain.

### F5 — Selection between rooms

Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Fig 11 :36 "Nothing was intelligent; selection ran."

A group whose members cooperate more can out-reproduce or out-compete a group of defectors, even when within any mixed group defection pays. That is selection between rooms. The within-room agreement is variation, not a verdict. No calculating expectation of reward is required of the actor: "Nothing was intelligent; selection ran." The ultimate explanation and the proximate one are different domains (de Waal makes the same distinction in animal behaviour; see `09_watson_answer.md`).

**Mode:** `specified`. **Refuter:** show selection between rooms cannot operate for the case in question, or that a cooperative act carries no group-level differential. That breaks F5 for that case, not the figure.

### F6 — Network is a substrate term, so no new primitive is needed

Fig 11 :24 "that entities relate, and influence travels"

Fig 4 :20 "Only the actors, the currency and the anchor change."

Network is one of the six structures (Fig 13). Under the domain-agnostic rule (Fig 4 :20), applying it to social relations changes the actors and the currency but not the rule. So "cooperation travels through a network of relations" is a legal composition inside the closure; it needs no new primitive and no import that moves the wall (Fig 6 :23). Note the honesty: the figures do not name "reputation" or "norm"; those are bindings from the social-science frame.

**Mode:** `general` for legality; `specified` for the binding. **Refuter:** show cooperation occurring with no relation of any kind between actors and no influence travelling, in a domain where network is claimed to carry it.

### F7 — Norms are head starts, not recordings

Fig 4 :22 "Only methods cross up. Only head starts come down."

An internalized norm is a method: it is reapplicable in a new situation. A copied list of rules is a recording: it works once and cannot produce a new cooperative act. Fig 4 :25-26 says a recording carried across the membrane "looks like knowledge and is a description of one occasion" and replayed produces a system that repeats a past success and cannot produce a new one. Social learning that transmits cooperative norms as head starts is figure-legal; social learning that transmits them as verbatim replays is not a capability.

**Mode:** `specified`. **Refuter:** show norm transmission is verbatim replay that generalizes to no new situation, yet cooperation holds. That breaks the "capability" reading for D4.

### F8 — The figures return a shape, not a mechanism name

Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit"

Fig 8 :53 "Residual first, frame second."

Fig 9 :32 "you get a kind of thing, never the answer itself"

The figure set can say the cooperative act must contact something beyond the immediate payoff, and that the contact must be in a currency the direct frame does not carry. It cannot say whether the slot is filled by kin selection, direct reciprocity, indirect reciprocity, network reciprocity, group selection, strong reciprocity or an internalized norm. Naming one is an import from a frame whose closure differs, with a source gate and a shadow test (Fig 6 :23, Fig 8 :45). Convergent derivation and adopted import look identical in the contents (Fig 8 :50-52), so the record must state where each name came from.

**Mode:** `general`. **Refuter:** derive a specific mechanism name from the figures alone, with no world source and no binding, and show the six-term set selects it. If that can be done, F8 is wrong.

### F9 — What survives (per-domain verdicts, never averaged)

| domain | verdict | mode | status |
|---|---|---|---|
| D0 direct-incentive frame | fails on R; it is the frame under audit, not an explanation | `specified` | triangulated (Fig 11 :39 + Fig 1 :19) |
| D1 habitat and relations | cooperation is a relation; valence relative to R; contact cascades | `specified` | triangulated (Fig 11 :49, :50, :52 + Fig 2 :40) |
| D2 iterated bond | catalyst and cycle carry the return without immediacy | `specified` | triangulated (Fig 12 :119, :121 + Fig 8 :45) |
| D3 selection between rooms | group-level differential sustains cooperation; no calculation needed | `specified` | triangulated (Fig 7 :35 + Fig 11 :36) |
| D4 social learning | norms transmitted as head starts (methods), not recordings | `specified` | single-source for the figure mapping (Fig 4 :22); world sources corroborate the phenomenon, not the vocabulary |

No verdict is an average of the others. The union compound keeps its own loop.

---

## 5. Strain test and re-census

- **Fig 5 :46 strain, resolved by re-census.** I first tried to use Fig 5 :46 "When nothing is scoring, the drive manufactures a gradient." to explain cooperation when no reward is visible. That line governs the **minting of a new term** when nothing scores; it does not govern the selection of an action. It only fits the question by a strain. Re-census sends it back: it governs the search for a vocabulary, not the cooperative act. It is not used in F1 to F9.
- **Fig 13 cross-kind rule, not strained here.** Fig 13 :74 "Everything else is a composition across the two kinds, never within one." governs the six physical primitives. It is not a claim about social relations. Applying "network" to social contact is legal under the domain-agnostic rule (Fig 4 :20), not a violation of Fig 13. If a reading required a social "state" to bond with a social "structure" in the physical sense, I would re-census rather than force it.
- **Fig 11 :36 versus proximate motivation, not strained.** "Nothing was intelligent; selection ran" is the unmaintained-habitat reading. It does not deny a proximate empathic or internalized motive; it explains where the motive came from. de Waal (2007) states the same distinction for primates: the evolutionary reason and the animal's reason are different questions. Different objects, no strain.
- **After re-census: one strain named and removed, none hidden.**

---

## 6. Pre-registered refuter

Written before the conclusion, per the design-instrument rule. The SHAPE-TARGET is refuted if any of the following holds:

1. **Isolation test (breaks F1).** A cooperative act is found where the actor is genuinely isolated from all habitat contact (no kin, no repeated encounter, no reputation channel, no group, no norm, no internalized rule) and still cooperates systematically.
2. **Fixed-trait test (breaks F2).** Cooperation is shown to be a property carried by the actor independent of the residual and of the relation, so valence does not flip with the residual.
3. **Hidden-payoff test (kills R).** A complete immediate material payoff or sanction is found in every such case, so the direct-reward frame predicts the cooperation and R returns to zero.
4. **Cascade test (breaks F3).** The selective consequence is shown to be strictly first order, with no second or third order effect.
5. **Loop test (breaks F4).** A repeated setting is shown where the output never re-enters as input and cooperation is unchanged.
6. **Selection test (breaks F5).** The group-level differential is shown absent for the case in question.

If any fires, the shape claim is withdrawn or narrowed to the domains that survive. Until one is run, nothing here is `grounded`.

---

## 7. Recommendation

1. Lead with the residual and the refuter, not with a list of mechanisms. The residual is the no-incentive slot; the claim is that the direct frame scopes the actor away from the habitat (F1).
2. Keep the five domains separate. Do not average "kin selection plus reciprocity plus norms" into one story (Fig 9 :54-58).
3. Name mechanisms only as provenanced imports (F8). The figures give the shape; Nowak, Ostrom, Axelrod, de Waal, Tomasello and Fehr give the names and the evidence.
4. Do not ask for agreement. Fig 2 :35; Fig 2 :40. Ask what would refute the shape.
5. Send the generator, not a recording: Fig 4 :22 and :25. The generator here is the census, the refuter and the mechanism-shape.

---

## 8. Canonical usage check, retraction and confirmation log

Two rules were re-opened after sections 0 to 7 were drafted and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." The framework returns "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of what instruments distinguish.
- `THE_FORMULA.md` step 7: SEARCHED first, then INWARD, then OUTWARD. "INWARD and OUTWARD are opposed; never read one against the other." Here INWARD would refine the payoff matrix; OUTWARD imports the habitat and the social-science mechanisms. The question is an OUTWARD case (the direct frame lacks the currency), so refining the payoff matrix alone cannot close R.

| earlier reading | status after the canonical check |
|---|---|
| F1 "no reward means hidden reward" | **Narrowed.** The world sources (Fehr 2002, de Waal 2007, Tomasello 2009) show there need be no hidden immediate material reward. The surviving claim is the weaker one: the return is in a different currency or scale, not that it is a disguised immediate payoff. |
| "selection explains all no-reward cooperation" | **Retracted.** Proximate mechanisms (empathy, internalized norms) are real and are a different domain from the ultimate selection account (de Waal 2007, Tomasello 2009). Fig 11 :36 governs the unmaintained mode, not the proximate motive. |
| Fig 5 :46 used as an explanation | **Retracted as a strain.** It governs minting, not action selection (section 5). |
| "the mechanism can be named from the figures" | **Refused.** Canonical rule: a shape, not a name. F8 stands. |
| valence is relative to the residual | **Canonically confirmed.** Fig 11 :49-50 and the README's re-census rule (a contradiction means a misidentified domain). |
| the no-incentive act is a union compound | **Canonically confirmed.** Fig 9 :54-58; Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." |
| simulated status | **Canonically confirmed.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra"; the testable output must be derived from the real architecture or the formula worked by hand. |

### Round trip note

Condensing the figures into the shorthand "cooperation is a relation in a habitat; the return is in another currency" drops at least two constraints on the way back down: (a) the loop-closure condition of Fig 12 :121, and (b) the requirement that the mechanism name be a provenanced import (Fig 9 :27-28). The gap `R_T` is recorded in `11_audit.md`. Treating the shorthand as identical to the law set would set `R_T` to zero and would be dead reckoning (Fig 4 :30).

### Updated verdict after the canonical check

The shape survives: a no-direct-reward cooperative act contacts something beyond the immediate payoff, through relations in a habitat, iterated bonds, selection between rooms and transmitted methods. The five verdicts stay separate. No mechanism name is derived from the figures. Nothing is `grounded`; the refuter list in section 6 is what would move it.
