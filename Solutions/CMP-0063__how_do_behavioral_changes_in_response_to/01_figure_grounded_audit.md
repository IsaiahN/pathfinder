# Figure-grounded audit: behavioral response and epidemic dynamics (CMP-0063)

**Mode of this document: `specified`, not `grounded`.** It states a shape and what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *How Intelligence Actually Works* names the failure mode *"simulacra"*, and *The Recursive Self-Improvement Trap* says *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** The 16 framework files under `FRAMEWORK/`, with verbatim text and line numbers in `FRAMEWORK/reference/03-FIGURES_TEXT.md`; `FRAMEWORK/figures/THE_FORMULA.md`; five world sources listed in `10_source_ledger.csv`, each opened on 2026-11-22. Every `Fig N :line` quote below was checked character by character against the verbatim extract.

---

## 0. Proposal header (seat reasoning, five lines)

```
DECIDES:  If behavior is an external forcing applied to a fixed epidemic, we forecast one peak and
          one threshold; if behavior is a term inside the epidemic's own loop, we forecast waves,
          thresholds that move with response, and hysteresis. A = B? No: different numbers and
          different interventions, so the distinction is worth deriving.
HOURS:    Derivation ~2, world corroboration ~1, packet and audit ~1. Read against Fig 12 :126-130,
          where bits and actions are two currencies and do not add.
PRIOR CASE: Funk et al. (PNAS 2009) coupled awareness to susceptibility; Gross et al. (PRL 2006)
          coupled rewiring to transmission; Just et al. (2017) proved oscillations can arise from
          information degradation alone. None is figure-derived. This is the first Tether census
          of this residual in this folder.
ANALOGUE: Fig 11's habitat and Fig 12's cycle. Prey that change foraging under perceived predation
          risk alter the predator's dynamics (Bleicher, PeerJ 2017): actors, currency and anchor
          map across without any appeal to looks.
LIMIT:    At 10^6 agents and many waves, does the audit stay flat? Only if the residual is kept per
          slot (Fig 1 :19) and agreement is never pooled as corroboration (Fig 2 :40).
```

---

## 1. The residual, in effect terms

During an outbreak, cases rise; people notice, form a belief about risk, and change contact (distancing, mask use, vaccination, avoiding known cases, sharing information); that change alters subsequent transmission; transmission changes cases again. What fails if behavior is held fixed is concrete: peak timing, peak size, final size, the effective reproduction number, and the number of waves are mispredicted, and interventions aimed only at pathogens underperform when the behavioral loop reverses them.

The decision is not "does behavior matter" (it plainly does). It is: **is behavior an external push applied to an epidemic that otherwise runs on its own, or is behavior a term inside the epidemic's own loop?** Option A fixes the transmission process and treats behavior as a perturbation; it yields one-peak forecasts and a stable threshold. Option B closes the loop; it yields the possibility of damped waves, sustained oscillations, bistability, and a threshold that depends on the response itself. The two options lead to different models, different data requirements, and different interventions.

Residual stated as a shape to be bound before the run: *a coupled system in which the epidemic's output re-enters as its own input through contact, with a sign and a delay that decide whether the loop damps or amplifies.* This is written down now, as an ordinary term that can accrue a residual and be refused (Formula step "Direction"; Fig 5 :65-66).

---

## 2. Domain census, before any figure line is chosen

### 2a. R by arity, symmetry, scale (Fig 9 :22)

- **Arity:** two conditions bind at once, disease transmission and behavioral response. A shared field between two frames is Fig 10's seam, not a single hard question. Two readers of the same case count are one report, not two witnesses.
- **Symmetry:** not symmetric. The path is ordered: perceive cases, form belief, change contact, change transmission, new cases. It becomes a cycle only because the output re-enters as input (Fig 12 :121). Reversing the arrows gives a different system, so `→` and `⇒` are the right bonds, not `+`.
- **Scale:** the individual response is a step loop; the epidemic is a population loop. They sit on opposite sides of the membrane (Fig 4). A method can cross up, a recording cannot.
- **Slot:** the residual is per group and per region, not a global average. A national case count can be near zero while one live slot carries the whole signal (Fig 1 :13, :19).

### 2b. One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1 Epidemiological transmission | susceptibles, infectious, recovered, contacts | infection events, R_t | case and hospitalization data | the disease loop alone is a partition of one kind |
| D2 Behavioral response | individuals, information, perceived risk, protective action | awareness, contact change | contact surveys, behavior data | the behavior loop alone is another partition |
| D3 The coupled compound | both loops, the information and disease networks | contact-mediated feedback | epidemic data, never agreement | **union**: the overlap is a specific compound with its own loop |
| D4 Verification and outreach | modellers, expert readers | residuals and refutations | the ground, not agreement | a seat, with independence currently zero in this simulation |

No domain is admitted without a nameable anchor. D1 and D2 have instruments (case data; contact surveys). D3's anchor is the same ground, but the compound has its own loop, so it needs its own census. D4's anchor is the ground and is forbidden to update on any frame's opinion (Fig 2 :33).

### 2c. Partition or union

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." Behavior and disease are a compound: a one-lever intervention (say, a vaccine) clears the region where only the disease condition binds and leaves the intersection (the behavioral response to the vaccine) standing. So this is a union with its own loop, not two problems to be added.

### 2d. Order by dependency (Fig 3 :20)

Fig 3 :20: "The chain is ordered by dependency, not by importance." The order is: perceive cases -> form belief -> choose protective action -> change contact -> change transmission -> new cases. A break at perception cannot be repaired by optimizing a downstream hinge; a reading taken below the break is a reading of nothing (Fig 3 :22-23). This is why information-generated feedback is upstream of every epidemiological parameter.

---

## 3. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per slot; aggregation hides the live signal | governs how the residual must be measured |
| **2 The Ground** | anchor does not update; agreement from a shared pool is worthless | governs verification, not the mechanism |
| **3 Dependency Chain** | order by dependency; below-break readings are readings of nothing | governs the loop's hinge order |
| **4 The Membrane** | only methods cross up, only head starts down; round-trip gap | governs the individual-to-population crossing |
| **5 Mint Pipeline** | three guards as a product; settling is necessary, not sufficient | governs what would license a new behavioural term |
| **6 Closure / Reachability** | import is the only operator that moves the wall; instruments improved from worse ones | governs what a new measurement could add |
| **7 Room Chain** | selection between rooms, no last room | governs why model agreement is not a verdict |
| **8 Union Surplus** | residual first, frame second; convergent derivation and adopted import look identical | governs how the two frames are combined |
| **9 Leave / Arrive** | union versus partition; describe before you look | **governs the compound directly** |
| **10 Ground Maintainer** | bring a characterised residual, never the source | governs the outreach order |
| **11 The Habitat** | capability is agent-and-habitat; valence is relative to the residual; contact cascades | **governs contact and second-order effects directly** |
| **12 The Bond** | cycle, sign, catalyst, structural levels | **governs the feedback directly** |
| **13 Minimum Viable Set** | remainder re-entering an amplifying chain is chaos; two kinds in lockstep | corroborates oscillation and ordering |
| **Operators table** | sequence and production are ordered; negation is unary | governs why the loop cannot be written with `+` |
| **Symbols table** | `b` is belief and *"Not the observation"* | governs perceived versus actual risk |

Strained readings are named in section 5, not smoothed over.

---

## 4. Findings, with verbatim lines and refuters

### F1 The coupled system is a union compound, not one hard problem

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

The residual is two conditions binding at once. A lever that reduces transmission (antivirals) clears the disease-only region; it does not clear the intersection where people change behavior in response to the drug's availability or to the outbreak itself. So the compound needs its own loop and its own ground. Read "union" as Fig 8 :53, "Residual first, frame second": describe the effect (cases feed behavior feeds cases) before choosing which discipline owns it.

**Status:** single-source for the union ruling (Fig 9), corroborated by the world sources (Funk et al.; Gross et al.; Just et al.) across epidemiology, physics, and mathematics with low overlap.
**Refuter:** show the two loops separable, each solvable independently and recombinable with no residual left at the intersection.

### F2 Behavior alters the epidemic only through contact (decisive)

Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone."
Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."
Fig 4 :20: "Only the actors, the currency and the anchor change."

A behavioral response is not a change to an isolated agent. It matters only if it changes the field of contact: whom one meets, how often, for how long, and under what transmission conditions. A response that leaves contact untouched cannot move the epidemic, however strongly it is believed to help. This is the load-bearing line of the whole derivation, and it is triangulated: Fig 11 gives the agent-and-habitat rule, Fig 4 gives the cross-size rule that only actors, currency and anchor change, and the Symbols table gives the perception term that drives the action.

**Status:** triangulated (Fig 11 :39-40 with Fig 4 :19-20; low overlap between habitat and membrane).
**Refuter:** a controlled comparison in which measured contact patterns are unchanged and the epidemic trajectory (peak time, peak size, final size, R_t) changes anyway. That would break Fig 11 :40 at the ground.

### F3 The coupling is a cycle; its sign and delay decide damping versus waves

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
Fig 13 :31-32: "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."
Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

Cases produce information; information produces protective behavior; protective behavior reduces transmission; reduced transmission removes the information's cause. That is a cycle, and a fixed chain cannot represent it. The sign is the crux: risk-averse response (more cases, more protection) is negative feedback and can damp; risk-seeking response or relaxation (more cases, less perceived risk once information fades) is positive feedback and can amplify. A delay in the loop converts damping into oscillation (the "phase shift" in control terms). Fig 13 :31-32 says a remainder compounding through an amplifying chain is chaos, which is exactly what a finite information lag can produce. Fig 12 :119 names the third ingredient: awareness that persists after the risk subsides is a catalyst, behaving differently from a response that disappears on use.

**Status:** triangulated (Fig 12 cycle and Fig 13 remainder), corroborated by the negative-feedback control source and by Just et al.'s proof that information degradation alone can sustain oscillations with constant rates.
**Refuter:** a coupled model in which reversing the sign of the behavior-to-contact term, or removing the feedback, leaves the qualitative dynamics unchanged (same wave count, no bistability). That would break Fig 12 :121.

### F4 Behavior keys on belief about risk, not on the ground

Symbols table :20-21: "What the system takes to be the case before it acts. Formed from its own history and from what it inherited, mixed by w. Not the observation."
Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

The action is taken from `b`, not from `o'`. During a real outbreak those diverge: information arrives late, degrades as it passes between people, and is unevenly distributed. So behavior responds to perceived prevalence, and the perceptual gap is itself a state variable of the epidemic. Funk et al. state the same effect in world terms: "it is not so much the presence of the disease itself that will prompt humans to change their behavior, as awareness of the presence of the disease." The per-slot rule adds that a national average can hide the group or region where the behavioral loop is actually live.

**Status:** triangulated for perception versus observation (Symbols table and Fig 1), single-source for the per-slot conclusion (Fig 1), corroborated by Funk et al. and by the landscape-of-fear literature.
**Refuter:** show that a model driven by ground-truth prevalence predicts behavior as well as one driven by perceived prevalence, and that aggregate case counts predict the epidemic as well as per-group counts.

### F5 The loop crosses the membrane between one agent and a population

Fig 4 :22: "Only methods cross up. Only head starts come down."
Fig 4 :20: "Only the actors, the currency and the anchor change."

An individual's protective decision is a step-loop output. The epidemic is a population loop. What crosses upward is a method (how contact choices compose into a contact distribution), never the recording of one person's decision. What comes down is a head start that makes the next person's search cheaper, not a replay. A model that simply scales one agent's behavior to a population commits the recording error Fig 4 :25 names.

**Status:** single-source (Fig 4), corroborated by Gross et al.'s adaptive-network result that local rewiring produces global structure.
**Refuter:** show a population-level contact distribution derivable from a single agent's history without any cross-scale transform, with no lossy round trip.

### F6 The ground settles it; agreement among models does not

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool."
Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

Three models fitted to the same case series and agreeing on a wave are one witness wearing three names. Settling requires an anchor that does not move when a frame pushes on it: a contact survey, a serological study, a measured contact matrix. Models range against the ground; they do not negotiate with it. And the instrument that would separate a belief-driven response from a ground-driven one is improved from a worse instrument already returning something, not designed from a description of what we wish we could see.

**Status:** triangulated (Fig 2 and Fig 6), with the independence rule also in Fig 8 :47-48.
**Refuter:** a case where two modelling groups, using disjoint data and disjoint measurement instruments, still agree for reasons traceable to shared assumptions rather than shared evidence. That would require re-census of what counts as independence.

### F7 What survives and what is refused

| claim | mode | figure |
|---|---|---|
| The system is a union compound with its own loop | `general` | Fig 9 :54, :57 |
| Behavior can alter the epidemic only by changing contact | `specified`, falsifiable | Fig 11 :40, Fig 4 :20 |
| The coupling is a cycle whose sign and delay decide damping or waves | `specified`, falsifiable | Fig 12 :121, Fig 13 :31-32 |
| Behavior keys on perceived risk, held per slot | `specified` | Symbols table :20-21, Fig 1 :19 |
| The individual-to-population crossing is lossy | `general` | Fig 4 :20, :22 |
| The specific sign, delay, and magnitude in any given outbreak | **refused as a name** | framework returns a shape; binding requires an instrument |

---

## 5. Strain test and re-census

1. **What "contact" means.** Read narrowly, Fig 11 :40 could be taken to forbid any intervention that changes per-contact transmission probability while leaving the number of contacts fixed (for example, mask use). That would be a strained reading, because it makes a well-established effect impossible. Re-census: "contact" in Fig 11 is the field of contact, the agent-and-habitat relation, which includes who contacts whom, for how long, and under what transmission conditions. Changing per-contact conditions is changing contact. **My earlier narrow reading is retracted**; no strain remains after the re-census. |= triangulated (Fig 11 habitat plus Fig 13 network/gradient composition).
2. **What "closes" means in Fig 12 :121.** "The sign of the loop decides whether it closes" does not mean the loop settles or terminates. It is a topological claim: a cycle returns its output as input, which a chain cannot do by construction. The sign then decides whether that return damps or amplifies. **I initially wrote "closes = damps"** and retract it. Damping and amplification are held separate, and the world sources (negative feedback; Just et al.) corroborate the split.
3. **Naming the mechanism.** "Awareness" and "risk perception" are bindings from the epidemiology frame onto held terms (belief, actor, information), not names the framework derives. The framework returns a shape, not a name. Provenance for the binding is recorded in `10_source_ledger.csv`.
4. **After re-census:** two corrections, no live strain. Both corrections are visible above and in section 8.

---

## 6. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A behavioral response that leaves measured contact unchanged alters the epidemic's peak timing, peak size, final size, or R_t in a controlled comparison (breaks Fig 11 :40).
2. Reversing the sign of the behavior-to-contact feedback, or removing the feedback, leaves the qualitative dynamics unchanged, with the same wave count and no bistability (breaks Fig 12 :121).
3. A model driven by ground-truth prevalence predicts behavior as well as one driven by perceived prevalence, and aggregate case counts predict the epidemic as well as per-slot counts (breaks Symbols table :20-21 and Fig 1 :19).
4. The disease and behavior loops solve independently and recombine with no residual left at the intersection (breaks Fig 9 :57).

If any fires, the shape is wrong and this packet is withdrawn. Until one is run, nothing here is `grounded`.

---

## 7. Recommendation

1. Model behavior as an internal state of the epidemic, coupled through contact, with an explicit sign and an explicit delay (F3).
2. Measure contact, not declared intention (F2). An intent that does not change contact has no effect on the epidemic by the framework's own rule.
3. Keep the residual per group and per region; do not let a national average erase the live slot (F4).
4. Settle against an anchor that does not update on model output: contact surveys, serology, measured contact matrices (F6).
5. Do not pool agreement among models that share a data pool as corroboration (F6).
6. Send the generator, the shape claim and its refuter, not the conclusion (Fig 4 :22).

---

## 8. Canonical usage check and retraction log

Read after sections 1 to 7, per the standing instruction that the canonical usage rule governs how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"* and the limit, the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`, step 7: SEARCHED, INWARD, OUTWARD are three distinct questions. Here the mechanism is in `closure(Γ)` (Fig 11, Fig 12 already hold it), so this is not a gap and no import is owed.

| earlier reading | status after the canonical check |
|---|---|
| "contact" excludes measures that act on per-contact transmission | **Retracted.** Re-census of agent-and-habitat contact; see section 5.1. |
| Fig 12 "closes" means "damps" | **Retracted.** Topological return, with sign held separate; see section 5.2. |
| "awareness is a primitive the model must import" | **Refused.** Awareness is a binding from the epidemiology frame onto held terms, not a new atom; Fig 6 says import adds an atom and this adds none. |
| "the question is a gap because no figure mentions epidemics" | **Refused after re-census.** Fig 11 and Fig 12 govern the residual directly; the figures are domain-agnostic. |
| "five world sources agreeing proves the shape" | **Refused.** Five sources across five fields with low overlap are corroboration only; the verdict is from the figures, and the second seat shares this evidence pool (see `11_audit.md`). |
| union compound reading | **Confirmed.** Fig 9 :54, :57 plus the behaviour and disease anchor test. |
| contact-necessity | **Confirmed and strengthened.** Fig 11 :39-40 triangulated with Fig 4 :19-20. |

### Verdict of this audit

The shape survives: a coupled compound whose output re-enters as input through contact, with sign and delay deciding damping versus waves, keyed on perceived risk and held per slot. What is refused is any claim about the specific sign, delay, or magnitude in a named outbreak; that is a binding requiring an instrument. Mode `specified`, ungrounded, candidate. Strains after re-census: none hidden, two retracted readings preserved above.
