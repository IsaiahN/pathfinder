# Figure-grounded audit: does reducing inflation usually require higher unemployment?

**Mode of this document: `specified`, not `grounded`.** It states what a measurement would have to show. Per THE_FORMULA.md: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The framework's own Recursive Self-Improvement Trap essay says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the figures README at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the eight essays as mapped in `05_what_shape_means.md`. World sources were opened on 2026-11-23 and are listed in `10_source_ledger.csv`.

---

## 0. The claim under audit and the residual in effect terms

> Does reducing inflation usually require higher unemployment, or can better policy avoid much of that cost?

Stated as a residual R: the prediction "a reduction of inflation of size d(pi) requires an increase of unemployment of size k x d(pi), with k stable across episodes" is compared with observations where the same d(pi) was accompanied by very different d(u). R is the gap between that fixed-coefficient prediction and the episode record.

Three things are bound before the search, per the formula's "Direction" rule, so the sought-for shape is an ordinary term that can accrue a residual:

- **The shape claim:** the cost is indexed by the state of the anchor and by which condition is binding, not by a single global coefficient. What an answer would look like: a list of the slots the cost is indexed by, a statement of which anchor must not move, and a description of the instrument that would settle each slot.
- **Option A leads to:** a policy that buys lower unemployment by moving the target, which the figures predict produces coherent drift, higher inflation with no lasting employment gain.
- **Option B leads to:** a policy that pins the anchor and unbundles the compound, which the figures predict lowers the cost, but only through an import from a frame whose closure differs.

The word "usually" is itself a claim to audit. It requests a global average. Fig 1 forbids the average before the question is even routed.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.**

- **Arity:** two quantities at the surface (inflation reduction, unemployment increase) joined by a comparison. The compound underneath has at least four conditions: expectations, nominal rigidity, supply shocks, labour-market structure. Surface arity 2, compound arity 4 or more.
- **Symmetry:** the relation is ordered, not symmetric. It asks which quantity gives way to which and which is larger. This is the comparison bond, not conjunction. "is it about which is larger, rather than both being present? Yes." (Fig 12 :89). A goal is a comparison (Fig 12 :113), so the inflation target itself is a comparison, not a thing.
- **Scale:** first order inside one policy loop (one disinflation episode). Second order at the regime level, where the settled expectations regime becomes an atom for the next loop (Fig 12 :104).

**One line per domain: actors / currency / anchor.** No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1 Policy loop | central bank, policy rate, price level, unemployment | a loss over (inflation minus target) versus (unemployment minus natural rate), a comparison of two quantities | the nominal target, which must not move when private expectations move | partition boundary: what the central bank can and cannot set |
| D2 Expectations frame | firms, workers, wage setters, indexation rules | expected inflation built into nominal contracts | credibility of the commitment, a convention that is not allowed to decide the outcome | separate frame, low overlap with D1 (different actors, different currency) |
| D3 Ground and measurement | price indices, unemployment surveys, episode record | measured d(pi) and measured d(u) | the data, which does not change because a model thinks otherwise | union with D1 and D2 at the point of measurement |
| D4 The cost compound | the four conditions above | which condition is binding in this episode | the binding condition, identified by an instrument, not by the model | **union**, not a list of separate conditions |

**Order by dependency (Fig 3).** Anchor first (D1), then expectations (D2), then the slope of the tradeoff, then the cost estimate at the ground (D3). The middle link, expectations formation, is the one that historically attracts the fewest instruments; Fig 3 :24 "Why the middle link is where chains usually break." and Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Inflation-expectation surveys and market breakevens are now proto-instruments already returning something, so this link has been looked at, but readings get pooled and saturated (Fig 10 :25-27).

**Partition or union.** D1 and D2 are two frames, not two settings of one frame. D4 is a union inside them. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." The question "does it usually require higher unemployment" treats the compound as a partition (one answer for all episodes). The census says it is a union, so the question must be split before it is searched.

---

## 2. Findings

### F1 - "Usually" is the aggregation error the figures name (decisive at the level of the question)

Fig 1 :19 "The residual is indexed by object slot, not aggregated."
Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
Fig 12 :125 "A composition costs in two currencies, and they do not add."
Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."

The cost of disinflation is not one number. It is indexed by the regime slot: expectations anchored or unanchored; demand-pull or cost-push; flexible or rigid labour and product markets. Averaging across slots is exactly how the signal that says where to look disappears. Fig 12 adds a second reason a single coefficient fails: the cost is paid in more than one currency, and summing them is named as the error rather than the fix. The committee asking "usually" is asking for one number where the figure requires a vector.

**Verdict for this finding:** `triangulated` (Fig 1 and Fig 12 are low-overlap figures, one about slots, one about incommensurable prices). The "usually" form is refused as stated. It is not answered with a number; it is split.

**Refuter:** a cross-episode dataset showing a single stable sacrifice coefficient across all four slots, with no interaction by expectations regime or shock type, would overturn this finding.

### F2 - The anchor must not update; exploiting the tradeoff is the named collapse

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :13 "no anchor; each updates on the others"
Fig 2 :33 "The anchor must not update."
Fig 2 :34 "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."
Fig 10 :47 "a convention that decides an outcome has stopped being one"

This is the decisive figure line for the economics. The nominal target is the anchor. If the central bank moves it in response to what private agents think, or trades it for lower unemployment, the target stops being an anchor and becomes another frame. Fig 2 :13 and :34 predict the result: the frames converge on whoever had the most influence, and the drift is coherent, so nobody notices until inflation is high and unemployment is no lower. That is the stagflation pattern the world sources report. If the target is pinned, private expectations range against it rather than negotiating with it (Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."), and the same disinflation costs less.

The bridge from the figure to the economics is a binding, not a derivation. Fig 10 :47 makes the binding checkable: a target revised to deliver an unemployment outcome has stopped being a convention and has become a frame. This is testable in the record, not a matter of taste.

**Verdict:** `triangulated` (Fig 2 on collapse and anchoring, Fig 10 on seat conventions, two different figures with different jobs). "Better policy can avoid much of the cost" survives, but only in the specific form: keep the anchor fixed and let expectations fall to it. The form "exploit the tradeoff" is refused.

**Refuter:** a pinned, credible target followed by no faster fall in expected inflation and no smaller output cost than a discretionary regime would fire here.

### F3 - The cost is a union compound, so one lever leaves the intersections standing

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55 "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
Fig 9 :57 "a case in two conditions is not a harder case of either"
Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Higher unemployment is a single lever. It works where excess demand is the only binding condition. Where expectations are unanchored, or where the shock is a supply shock, the second condition still binds after the lever is pulled; the economy gets the recession and less of the disinflation. The compound is categorically different in the intersections, so it is not "the same problem, only harder." Unbundling is the precondition for choosing a lever. Fig 9 :60 is the discipline reminder: the identity of the binding condition is a witness, not something a tier label or a prior can hand us.

**Verdict:** `triangulated` (Fig 9 on union splitting, Fig 8's union-surplus logic on what a union of frames reaches). Real empirical support exists in the world sources (Rogoff's 2003 IMF speech reports large disinflation alongside institutional and competition changes rather than a single recession lever), but it is corroboration only.

**Refuter:** if separating demand, expectations and supply conditions does not change which instrument is effective, this finding fails.

### F4 - Moving the wall is an import, and imports need a source gate and a shadow test

Fig 6 :21 "MINT composes inside the closure and can never add an atom."
Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 6 :14 "the only operator that moves the wall"
Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."
Fig 13 :115 "The set is closed. The arrangements are not."

Within one policy frame, a better reaction function is a mint: it composes inside the closure and cannot add an atom. If the tradeoff frontier is a closure of that frame, no amount of tuning inside it moves the wall. What moves the wall is contact with a frame whose closure differs: the private sector's expectation-formation regime, the indexation conventions, the institutional arrangement of the central bank, the degree of product-market competition. These are imports relative to the policy frame, and Fig 8 requires a source gate (provenance) and a shadow test (does it explain a gap it was not built for?). A policy change that merely re-labels the same expectation formation is not an import; it is a spelling change, and Fig 8 warns that two frames that overlap almost completely are one frame wearing two names.

**Verdict:** `triangulated` (Fig 6 and Fig 8 together, plus Fig 13's closed-set/arrangement distinction). The "better policy" half of the question is an import claim. It is legitimate where provenance and a shadow test can be shown, and it is empty where they cannot.

**Refuter:** a regime change with clear provenance and a stated shadow test that fails to reduce the measured cost would fire here.

### F5 - Capability is agent-and-habitat, not a better controller alone

Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone"
Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."

A central bank that optimizes its loss function more carefully, without changing its contact with expectations and the institutional habitat, has improved the agent in isolation. The figures say that changes nothing that matters. The habitat here is enumerated, not composed: indexation rules, wage-setting institutions, fiscal dominance, openness, the legal mandate. This is why the world sources keep returning to independence, credibility and competition rather than to a cleverer rule.

**Verdict:** `triangulated` (Fig 11 on habitat and contact, Fig 2 on the anchor as the thing range against). Single-source for the specific economic bindings, which come from the world sources and are named as bindings.

**Refuter:** an agent-only improvement that moves the measured ground would refute this, exactly as the figure's own "how to read" note allows.

### F6 - The instrument for the middle link exists; the channel can still fail

Fig 3 :24 "Why the middle link is where chains usually break."
Fig 10 :24 "the ground does not decay, the channel does"
Fig 6 :33 "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."

Expectations are not invisible. Survey expectations and market-based measures were already returning a reading before any modern model used them, which satisfies Fig 6's proto-instrument rule. The failure mode is not that no instrument could exist; it is that readings get pooled, saturated and dropped (Fig 10 :25-27), so the anchor silently stops being reachable. The cost estimate must be read against measured d(pi) and d(u) per episode, not against a model's internal consistency. Fig 2 :29 demands an anchor that does not move when a frame thinks, and the data is that anchor here.

**Verdict:** `triangulated` (Fig 3 on the dependency break, Fig 10 on channel decay, Fig 6 on instruments). 

**Refuter:** a case where no proxy for expectations ever registered anything, at any resolution, would move this from "unreached" toward "unreachable at this budget" (Fig 8 :39 "So a search that finds nothing is never a proof of absence.").

### F7 - The honest stop: a shape, not a number (gap at the ground)

Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit"
Fig 9 :32 "you get a kind of thing, never the answer itself"
Fig 8 :39 "So a search that finds nothing is never a proof of absence."

The figures decide the shape: index the cost per slot, pin the anchor, unbundle the union, import a different closure with provenance, keep contact with the habitat. They do not decide the magnitude. They contain no sacrifice ratio, no NAIRU value, no episode identification, no choice among inflation targeting, price-level targeting or monetary aggregates. Those are bindings from the economics frame and must be recorded as such. Naming one of them as "what the Tether says" would be the forbidden move: a name where the framework returns a shape.

So this is a `gap` only at the numeric ground, and it is a reachable gap: the data exists and could be measured. It is not `unreachable`. "Unreachable is a verdict, not a silence" applies where no instrument registers; here instruments register and the measurement has simply not been run in this derivation. The verdict stays `candidate` until it is.

**Verdict:** `single-source` for the rule that figures return shapes (canonical figures README), corroborated by Fig 9 :32. No independent figure governs the number, so none is claimed.

---

## 3. Pre-registered refuter

Written before the conclusion, per the seat rule that "a falsifier written before the run is a design instrument, not only an honesty device."

The shape claim is refuted if any of the following holds:

1. A well-measured cross-episode dataset shows a single stable cost coefficient across all four slots, with no interaction by expectations regime, shock type, or labour-market structure (kills F1).
2. A pinned, credible nominal anchor is followed by no faster decline in expected inflation and no smaller output cost than a discretionary regime (kills F2).
3. Unbundling demand, expectations and supply conditions does not change which policy instrument is effective (kills F3).
4. A regime change with provenance and a stated shadow test fails to reduce the measured cost (kills F4).
5. An agent-only policy improvement, with no change in contact with expectations or institutions, moves the measured ground (kills F5).

If any fires, the shape claim is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Refuse the word "usually" as stated (F1). Split the question into the four slots before any cost estimate is attempted.
2. Lead with the anchor finding (F2): the only "better policy" the figures license is one that pins the target and lets expectations come to it. Policy that trades the anchor for unemployment is the named coherent-drift collapse.
3. Unbundle the compound before choosing a lever (F3). Higher unemployment as a universal prescription is a single lever on a union.
4. Treat regime change as an import with provenance and a shadow test, not as a discovery of a new atom (F4).
5. Send the generator, that is the residual, the shape claim and the refuter, not the conclusion. Fig 4 :22 "Only methods cross up. Only head starts come down."

---

## 5. Canonical usage check (figures README and the formula)

Two framework sources govern how the figures may be used, and both were read after the first four sections.

- The canonical figures README: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: a reading that makes one figure contradict another has misidentified its domain, and the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- THE_FORMULA.md: the mode rule above, and step 7's distinction between underivable in principle and unreachable at this budget. Fig 8 :40-43 makes the same point: importing against a budget limit adds an atom that was not needed.

### Retractions and confirmations

| earlier reading in this audit | status after the canonical check |
|---|---|
| "The figures prove costless disinflation" | **Retracted.** That is a result of a specific rational-expectations model frame (world source), not a figure verdict. The figures only constrain the shape. No zero-cost claim is made. |
| "Usually is answerable with an average" | **Refused.** Fig 1 :19, :22 makes the average the named error. The question is split, not averaged. |
| "Anchor must not update means a fixed rule forever" | **Narrowed.** A published price-level path is fixed in advance and does not update on what frames think, so it is still pinned. A crawl that adjusts to expectations is not. No strain after re-census. |
| "Expectations are outside the policy frame, so import is literal" | **Narrowed.** Import is level-relative (Fig 12 :104). The private expectation regime is another frame whose closure differs from the central bank's model, so regime change is an import into that frame. It adds no atom to the world. |
| "The 2 percent target is the anchor" | **Refused as stated.** The target is a comparison (a goal, Fig 12 :113); the anchor is the convention that does not move. A target revised to hit an employment outcome has stopped being a convention (Fig 10 :47). |
| F7 as a `gap` | **Confirmed and bounded.** It is a gap at the numeric ground, not unreachability. Instruments register, so the remedy is measurement, not import. |
| Fig 2 versus a deliberately adjusted crawl | **Not strained.** Re-census above: pre-announced path versus expectation-contingent adjustment are different objects. |
| Fig 6 import versus expectations being internal to the economy | **Not strained.** Level-relative import, confirmed by Fig 12 :104. |

---

## 6. Retraction and confirmation log (cumulative)

1. 2026-11-23, first pass: wanted to answer the question with a single yes/no. Retracted at F1: the figures require per-slot residuals.
2. 2026-11-23, first pass: wanted to cite the rational-expectations policy-ineffectiveness result as the Tether's answer. Retracted at F7 and in the canonical check: it is a world-frame result, secondary corroboration only.
3. 2026-11-23, first pass: treated "better policy" as a better setting. Narrowed at F4 and F5: it is an import plus a habitat change, not a parameter tune.
4. 2026-11-23, canonical check: confirmed F2 (anchor) and F3 (union) as the two strongest figure-grounded points, and confirmed that the numeric magnitude is owed to the ground.
5. 2026-11-23, second-seat check: see `11_audit.md`. The auditor re-censused from the residual line alone, found no drift in the verbatim lines, and recorded a nonzero round-trip gap R_T for the shorthand used in outreach.

---

## 7. Final status

The shape survives: index the cost per slot, pin the anchor, unbundle the union, import a different closure with provenance, and keep contact with the habitat. The single global "usually" does not; it is the aggregation error Fig 1 names. The magnitude is a `gap` at the ground and remains `candidate`. Strains after re-census: **none**, with two earlier apparent strains dissolved by distinguishing a pre-announced anchor path from an expectation-contingent one, and a level-relative reading of import.
