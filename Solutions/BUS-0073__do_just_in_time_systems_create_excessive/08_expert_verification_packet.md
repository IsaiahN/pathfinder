# Expert verification packet : the Tether on JIT and vulnerability, BUS-0073

**What this is:** a claim in a form an operations or supply-chain researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the sub-claims, `general` on the structural kernel. Not `grounded`.** No disruption measurement is claimed. This is a shape and a route, not a result. Simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

The question "does JIT create excessive vulnerability, or can it be resilient when managed well?" is a union, not a partition. Resilience is a property of the scheduling rule together with its enumerated supply habitat and its visibility channel, indexed per supply slot, not of the rule in isolation. The habitat must be enumerated past direct suppliers because the actor that matters can be three tiers out; a single actor's valence depends on which residual is at issue. A healthy firm average can coexist with one live slot because aggregated metrics pool readings, which is channel failure rather than ground failure. Management can introduce alternatives but cannot subtract contact, so "managed well" is permanent work rather than a state. Which specific lever wins is a declared `gap`, owed to a source-discriminating instrument. Five refuters were written before this packet.

## 2. Three checkable sub-claims

### C1 : framework-internal; checkable by reading Figure 11

- **Statement:** the scheduling rule alone cannot carry resilience. Capability belongs to the agent-and-habitat compound, and changing the rule without changing contact changes nothing.
- **Source, verbatim:** Fig 11 :39 : *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :40 : *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*
- **What to check:** is the mapping of "agent" to the pull/kanban rule and "habitat" to suppliers plus logistics a fair reading, or does the schedule itself encode habitat decisions? If the latter, the boundary between agent and habitat in this application is wrong.
- **Refuter:** the same schedule, with suppliers and logistics held fixed, gives materially different per-slot continuity across repeated disruptions. Then something in the schedule carries resilience and C1 fails.

### C2 : framework-internal plus network structure; checkable by reading Figures 11 and 1

- **Statement:** the habitat is enumerated, not composed; contact cascades, so the responsible actor can be three tiers out; actor valence is relative to the residual; the residual is per slot and a global near-zero average with one live slot is a legal state.
- **Source, verbatim:** Fig 11 :43 : *"The habitat is enumerated, never composed."* Fig 11 :52 : *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* Fig 11 :49 : *"An actor's valence is relative to the residual, not a property it carries."* Fig 1 :19 : *"The residual is indexed by object slot, not aggregated."* Fig 1 :13 : *"a global R near zero with one live slot residual is a legal state"*
- **What to check:** do real disruption traces show the three-step cascade, and do aggregated service metrics in fact hide a single live slot? This is the claim most easily checked against a firm's own incident record.
- **Refuter:** a disruption reaches the focal firm from three or more tiers out with no positive live-slot residual anywhere in the chain; or an aggregated metric with a stated firing threshold remains diagnostic when one component slot goes live. Either breaks C2.

### C3 : framework-internal plus seat rule; checkable by reading Figures 10 and 11

- **Statement:** invisibility is channel failure, and "managed well" is permanent, asymmetric work rather than a terminal state.
- **Source, verbatim:** Fig 10 :24 : *"the ground does not decay, the channel does"*; Fig 10 :26 : *"stale percepts, dropped transients, saturated metrics, pooled readings"*; Fig 11 :61 : *"The seat's power is asymmetric. Introduction is available; exclusion is not."*; Fig 11 :63 : *"Which is why a managed ecosystem is permanent work rather than a solved state."*
- **What to check:** can a firm show a "managed well" state that stays resilient after managers stop acting and the habitat changes, with no re-enumeration? If yes, the permanent-work claim is false for that case.
- **Refuter:** such a state, demonstrated with a per-slot continuity record. Also a channel that keeps per-slot resolution after metrics are pooled, which would break the channel-decay claim.

### Named gap, not a sub-claim

Which lever wins for a given firm and disruption is **not** claimed. Fig 9 :32 : *"you get a kind of thing, never the answer itself"*; Fig 13 :134 : *"Unreachable is a verdict here, not a silence"*. If you can name an instrument that selects the lever for a given residual, that part moves from `gap` to `grounded`. Until then no buffer size, supplier count or nearshoring recommendation is asserted.

## 3. What is explicitly not claimed

- Not that JIT is always fragile, nor that lean practice is worthless.
- Not that a managed JIT system is safe or that "managed well" has a fixed definition. That predicate moves when pushed and is not an anchor (Fig 2 :30).
- Not that dual sourcing, buffers, nearshoring or flexibility is the answer. None is named.
- Not that the ecology or safety-science sources measured supply chains. Their concepts are low-overlap imports, recorded as such, not measurements (Fig 8 :50-52).
- Not that a firm-wide service metric is useless. The claim is that it cannot by itself resolve a single live slot (Fig 1 :22).
- Not `grounded`, and not a settlement of the real-world operations question.

## 4. Provenance

- Verbatim figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session; citations are `Fig N :line` against that extract.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md` and WATSON 60, *The Figures as Metalaws*.
- Eight-step loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Essays opened 2026-11-22: *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*, *They're Scanning Books When They Should Be Studying Nature* (Adventures in Machine Learning, Isaiah N, 2026). Maximal overlap with the figures, canonical reading only, not independent witnesses.
- World sources actually opened: lean manufacturing and supply chain resilience and ecological resilience and resilience engineering and cascading failure (Wikipedia, accessed 2026-11-22); Walker, Holling, Carpenter and Kinzig, *Resilience, adaptability and transformability in social-ecological systems*, Ecology and Society 9(2):5, 2004. Full list with quotes in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 5. What would settle it

A source-discriminating instrument, not further agreement. From *The Hard Problem is About Source*: a reading of green *"cannot comment on the source"*; the spectrometer resolved it. Here:

1. a per-slot continuity counter that fires when one supplier or route goes live;
2. a tier-3 trace that enumerates the cascade before a disruption;
3. a controlled comparison that varies habitat with schedule fixed, and channel with habitat fixed;
4. a threshold test on time-to-survive versus time-to-recover that can actually fire;
5. any of the five refuters in `01` §4.

## 6. What an expert can check in twenty minutes

1. Read Fig 11 :39-40, :43, :49, :52, :61, :63 and Fig 1 :13, :19 and Fig 10 :24, :26. Ten short passages.
2. Check C2 against one disruption you know: was the actor that mattered a direct supplier, or further out? Did the aggregate metric hide the live slot?
3. Check C3: after the last disruption in your firm, was the "managed well" state still true six months later without further work?
4. Name one instrument that would distinguish the candidate levers, or say why none is available.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
