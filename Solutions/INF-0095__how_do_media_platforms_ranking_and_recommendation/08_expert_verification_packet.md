# Expert verification packet: the Tether on ranking, encounter and trust

**What this is:** a claim in a form a recommender-systems researcher or an evaluation-methods researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the mechanism, `general` on the structural shape, `gap` on magnitude. Not `grounded`.** No system was instrumented here. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

The question "how do ranking and recommendation systems alter the information people encounter and trust" is two questions joined in one sentence, and they must not be scored by the same quantity (Fig 9 :5). Encounter has a ground: the logged slate, measured per item slot. Trust has a different ground: independent human judgment, because the question is about people (Fig 2 :37). A ranking loop that ranges against predicted engagement is a frame scoring itself with a quantity it produces (Fig 1 :27), so its metric cannot anchor the loop. Selection toward that metric contracts exposure toward what the user's history already predicts, because no frame escapes its own closure without contact with a frame whose closure differs (Fig 6 :23). Agreement inside the resulting feed is the pool talking until independence is shown (Fig 2 :18 to :21). Cross-closure exposure is a priced import whose sign is not given in advance (Fig 6 :24). No magnitude is asserted; the one randomised result found a large effect on exposure and a three-month null on attitudes and trust, and that is recorded as a live partial refutation of the broad trust claim.

## 2. Three checkable sub-claims

### C1. The platform's engagement metric is frame-internal, so it cannot be the ground for trust or for the ranking's own correction

- **Statement:** predicted engagement (clicks, dwell, reshares, "credibility accrued") is produced by the ranking it reports on. A frame cannot score itself with such a quantity.
- **Source, verbatim:** Fig 1 :27, "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 1 :26 lists "predicates minted, and credibility accrued" among the excluded quantities. Fig 2 :30, "If it moves when you push on it, it is not an anchor." Fig 10 :93, "A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified."
- **Status:** `triangulated` (Fig 1 agent-loop disqualification plus Fig 10 disqualification of an interested keeper; low conceptual overlap). Mode `general` for the principle, `specified` for its application to this platform.
- **Refuter:** show an engagement instrument that the ranking frame cannot move, and that returns the same reading under a different ranking. If it does, C1 falls.

### C2. Engagement-optimised selection contracts exposure toward the user's existing closure, measured per slot

- **Statement:** relative to a chronological control, engagement ranking shifts the distribution of encountered items toward items predictable from the user's prior history. The effect must be measured per item slot, not as a site-wide average.
- **Source, verbatim:** Fig 6 :23, "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 1 :19, "The residual is indexed by object slot, not aggregated." Fig 4 :25, "A recording carried upward looks like knowledge and is a description of one occasion." Fig 8 :48, "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."
- **Status:** `triangulated` (Fig 6 closure, Fig 8 independence, Fig 4 replay; the first two share the independence axis, so treat them as one witness and Fig 4 as a second). Mode `specified`.
- **What to check:** is the comparison per slot against a real control? Cinelli et al. (2021, PNAS) is a population-scale corroboration: echo chambers dominated on Facebook and Twitter and were absent on Reddit, where users can modify the feed algorithm.
- **Refuter:** per-slot measurement showing no shift toward prior-history-predictable items, or a shift in the opposite direction. C2 falls.

### C3. Cross-closure exposure is priced, and its sign is not given by the figures

- **Statement:** showing a user materially different content is an import from a frame whose closure differs. It is debited against independence, a wrong import costs more than starting from primitives, and the sign of the effect depends on the residual, not on the content label "diverse."
- **Source, verbatim:** Fig 6 :24, "Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives." Fig 11 :69, "what you unintentionally introduced is invisible until it acts." Fig 11 :49, "An actor's valence is relative to the residual, not a property it carries."
- **Status:** `single-source` on the figure price (Fig 6/Fig 11), with a low-overlap empirical corroboration: Bail et al. (2018, PNAS) found Republicans who followed a liberal Twitter bot became substantially more conservative. Mode `specified`.
- **Refuter:** a pre-registered, adequately powered trial in which cross-closure introduction reliably reduces the target residual across residuals and populations, with the direction fixed in advance. That would not refute the price; it would show the price was worth paying. C3's specific shape (sign not given in advance) is refuted only if the sign is shown to be fixed by the content type alone.

**One live partial refutation, stated by the sender rather than hidden:** Guess et al. (2023, Science) randomised about 23,000 users out of algorithmic feeds. Exposure changed substantially; attitudes, political knowledge and trust in institutions did not change significantly over three months. This fires against the strong form of "ranking alters trust" at that duration. It was written down before the verdict was synthesised (audit §3, refuter R4) and is why the trust domain is `specified`, ungrounded, `candidate`, and not promoted to `grounded`.

## 3. What is explicitly not claimed

- Not a number, direction or duration for an effect on trust. That sub-question is `gap` from the figures.
- Not "ranking has no effect on trust." Fig 8 :39: "a search that finds nothing is never a proof of absence."
- Not "diverse exposure reliably fixes polarisation." Fig 6 :24 prices the import and Fig 11 :49 makes valence relative to the residual.
- Not a theory of everything and no final room (Fig 7 :6).
- Not that a substrate atom *is* the algorithm. "Ranking" is a binding of figure-held terms onto a software artifact, provenanced as a binding (audit §5 and `05_what_shape_means.md` §5b).
- Not `grounded`. This packet is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on.
- Not an endorsement, a request for agreement or a request for trust.

## 4. Provenance

- Primary: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim figure text with line numbers. Every `Fig N :line` quote in this packet was checked against that file before use.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, which says the quotes, not the summary, are the authority.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Essays by Isaiah N, 2026-08 to 2026-11, opened 2026-11-23 and listed in `05_what_shape_means.md`.
- World sources: Cinelli et al., PNAS 2021; Guess et al., Science 2023; Bail et al., PNAS 2018; Taber and Lodge, AJPS 2006. Each opened, with author, venue, year, quote and field in `10_source_ledger.csv`. Empirical sources are corroboration only; the figures decide.
- Compiled 2026-11-23.

## 5. What would settle it

1. A per-slot exposure measurement against a chronological control (settles C2).
2. An instrument that discriminates among the sources of a high engagement reading and is not moved by the ranking (settles C1).
3. A pre-registered cross-closure trial with the direction fixed in advance and long enough to address the three-month limit (settles C3 and the live partial refutation).
4. A figure re-census that derives a sixth substrate term from the other five, or admits a frame ranging against a reference it cannot move while still correcting. That would break the structural claims.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19 and :26 to :27, Fig 2 :30, :34 to :35 and :37, Fig 6 :23 to :24, Fig 8 :48, Fig 11 :49 and :69. Nine short passages.
2. Say whether, in your own evaluation practice, "what a person encountered" and "what a person trusted" have the same ground. If they do, explain the instrument that makes it so.
3. Check C2 against the data you have or know: is the exposure shift per slot, and does it survive a chronological control?
4. Tell me which of C1, C2, C3 fails first. A failure is more useful than an endorsement.
5. If it survives, say what you would count as the ground for the magnitude. That is the part marked `gap`.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on. Send it one-to-one, ask for a refutation, record the verdict before showing any framework material, and do not pool later agreement as corroboration.
