# Expert verification packet: the Tether on closeness to capacity under an unpredictable channel

**What this is:** a claim in a form an information theorist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it. One-to-one use only.

**Mode: `specified` for the substantive claims, `general` for the structural shape. Not `grounded`.** No measurement is claimed. This is a shape and a route, not a result.

**Status:** simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

When a channel changes unpredictably, a single fixed-channel capacity is no longer an anchor that settles reliability, because which limit applies depends on channel state information, latency, blocklength and threat model. The honest answer is a family of limits, each with its benchmark made explicit, the achieved rate reported per realisation rather than as a mean, and the abstract-to-measured round trip `R_T` stated. Two failure classes must be kept apart: a finite-blocklength shortfall is unreachable-at-budget and closes with more search, while missing channel state is an absence that has to be imported from the channel-tracking frame. The framework returns that shape, names no single benchmark as the right one, and carries refuters written before the run.

## 2. Three checkable sub-claims

### C1 - anchor re-census; checkable against standard capacity results and Fig 2

- **Statement:** a fixed-channel capacity is a legitimate anchor for a fixed, known channel, but does not settle reliability for an unpredictably changing channel without stating CSI, latency, blocklength and threat model.
- **Source, verbatim:** Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :33 *"The anchor must not update."* Fig 2 :34 *"the anchor becomes another frame, everything drifts together, and the drift is coherent"*
- **World anchor:** Wikipedia, Channel capacity (opened 2026-11-23): in slow fading *"there is no definite capacity as the maximum rate of reliable communications supported by the channel"* and an `ε`-outage capacity is defined instead. Langberg and Sabag, arXiv:2407.02949 (2024), show worst-case AVC optimisation *"may result in low rates for state sequences that are associated with relatively good channels."*
- **What to check:** is there a single frame-independent limit for the moving channel that decides reliability without the four side conditions, or do all the standard definitions condition on them?
- **Refuter:** exhibit such a single limit and show it settles the question with no side conditions. If it holds, C1 fails.

### C2 - per-slot gap and import; checkable against finite-blocklength and CSI results

- **Statement:** the relevant gap is indexed by channel realisation, not its mean; and reaching a state-dependent limit requires importing channel state into the coding frame, which a fixed codebook cannot do from its own closure.
- **Source, verbatim:** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :32 *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*
- **World anchor:** Hesham et al, arXiv:2312.10412 (2023), derive the *"coding rate meta distribution"* and report *"the discrepancy between the actual network rate and idealistic classical channel capacity."* Seifert, Günlü and Schaefer, arXiv:2409.08786 (2024), build finite-blocklength wiretap codes *"without channel state information."* Langberg and Sabag (2024) find the encoder *"benefits from varying its input distribution as time proceeds."*
- **What to check:** does reporting only a mean rate hide deep-fade error? Does a state-blind fixed code reach the full-CSI rate at the same blocklength and error?
- **Refuter:** show the rate distribution carries no reliability information beyond its mean, or that a state-blind code matches full CSI. If either holds, C2 fails.

### C3 - depth versus absence and the round trip; checkable against the ground

- **Statement:** finite blocklength is depth (budget; more search), missing CSI is absence (import), and the realised gap is the measured round trip `R_T`, not a quality score.
- **Source, verbatim:** Fig 6 :27 *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."* Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Fig 8 :40 *"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."*
- **World anchor:** Wikipedia (2026-11-23) states the coding theorem assumes *"for a sufficiently large block length"*, which puts short blocks in the budget bin. Hesham et al (2023) report the capacity-versus-realised-rate discrepancy, which is the round-trip object.
- **What to check:** are the two failures being given the same remedy anywhere? Is the round-trip gap measured, or is capacity treated as identical to the implemented rate?
- **Refuter:** show the two cases issue the same instruction for a channel class, or that `R_T = 0` at finite blocklength and finite compute. If either holds, C3 fails.

## 3. What is explicitly not claimed

- Not that capacity is undefined; it is a legitimate anchor for a fixed, known channel.
- Not that any particular benchmark is correct, nor that the framework names one.
- Not a "percent of capacity" result. No measurement was taken.
- Not that coding is futile, nor that real systems are far from capacity.
- Not that agreement among readers corroborates the claim (Fig 7 :13 *"agreement compounds, evidence does not"*; Fig 2 :40).
- Not a derivation of a new primitive. Channel state is an import from another frame, not a new member of the six.

## 4. Provenance

- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-23.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`; metalaw note: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`.
- `THE_FORMULA.md` and `THE_SEAT_MAP_Field_Guide_amended.md` (local canonical copies).
- Three essays by Isaiah N opened 2026-11-23: Library of Babel (2026-10-02), The Hard Problem is About Source (2026-08-28), The Recursive Self-Improvement Trap (2026-11-19). Five other essays were not opened; see `05_what_shape_means.md` §7.
- Public sources: Wikipedia Channel capacity and the arXiv papers listed in `10_source_ledger.csv`, each opened 2026-11-23.
- This packet compiled 2026-11-23. All `Fig N :line` quotes were checked against the extract.

## 5. What would settle it

A measurement or a re-census, not agreement. The five pre-registered refuters in `01_figure_grounded_audit.md` §4 are copied here for the checker: (1) a single stable frame-independent limit for the moving channel; (2) state-blind code matching full CSI; (3) `R_T = 0` at finite blocklength and compute; (4) rate distribution carries nothing beyond its mean; (5) depth and absence issue the same instruction. Any one firing moves the verdict.

## 6. What an expert can check in twenty minutes

1. Read Fig 2 :29, :33, Fig 1 :19, Fig 6 :23, :27, Fig 4 :30, Fig 8 :40 (seven short passages, all in `03-FIGURES_TEXT.md`).
2. Check C1 against the definitions of outage and ergodic capacity you already use: does a single limit settle reliability for a moving channel without side conditions?
3. Check C2: is a mean-throughput number sufficient in your channel class, and does a fixed codebook reach the full-CSI rate?
4. Check C3: are short-block and missing-CSI failures given different remedies in your practice, and is the abstraction-to-measurement gap reported?
5. Send the refutation. A failure is more useful than an endorsement.

**Verdict fields:** cost if wrong: a bare closeness number lets a benchmark convention decide the answer before the ground speaks. Undoable: yes, the additions do not withdraw established coding results. Reversed by: one of the five ground tests or a re-census that shows the union is a partition.

**Status:** `specified`, candidate, ungrounded. It cannot settle the question it reports on.
