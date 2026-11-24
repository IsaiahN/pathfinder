# Expert verification packet  -  INF-0022, correlated errors and coding strategy

**What this is:** a claim in a form a coding researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the shape claims, `general` on the cited laws, `gap` on the identity of a unique best code. Not `grounded`.** No block-error curve is claimed as measured here.

**Status:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

Correlated errors are a shared-source structure, not a larger count of independent errors. The question bundles channel characterisation, redundancy arrangement, erasure handling and cost, so it must be split before a code is chosen. The figure-licensed lever is arrangement: at equal redundancy, a layout that breaks one physical burst into separate correctable events is a different substance from a consecutive layout, with the difference invisible in the ingredient formula and decisive in behaviour. Random-error and burst protection are therefore isomers under Fig 12. The framework returns this shape, not a code name; "best" is settled by a measured block-error curve on a declared channel family, never by agreement or reputation.

## 2. Three checkable sub-claims

### C1  -  framework-internal, checkable by reading Figures 1, 2 and 9

- **Statement.** Correlated errors are a common-cause collapse and a union compound; pooled bit error rate is not the residual, and the bundle must be split before search.
- **Source, verbatim.** Fig 1 :19  -  *"The residual is indexed by object slot, not aggregated."* Fig 1 :22  -  *"Aggregating across slots is how a live signal disappears into an average."* Fig 2 :20-21  -  *"so the agreement is the pool talking, not two frames confirming each other"*. Fig 9 :55  -  *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- **Refuter.** A channel trace whose error indicators are statistically independent at the decision scale after conditioning on the physical state, so no shared pool exists; or a single lever that clears both the channel and arrangement conditions on a measured curve. Fire either and C1 is withdrawn.

### C2  -  coding-facing, checkable against a burst-channel measurement

- **Statement.** At equal redundancy, symbol grouping plus interleaving changes corrected burst length by arrangement alone. Reed-Solomon over F_2^m already groups m bits into one symbol, so a burst of m+1 bit errors affects at most two symbols; a λ-way interleave of an ℓ-burst code corrects bursts of length λℓ. These are isomers, not different ingredient lists: Fig 12 :117  -  *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* And Fig 12 :94  -  *"The arrangement is the substance."*
- **What to check.** Is the interleaving theorem as stated? Does the CD CIRC arrangement (two RS codes, 28-way interleaving) actually buy burst protection at unchanged nominal redundancy? Is the burst-versus-random distinction really a split rather than a ranking, given the RS source's own statement that RS is *"well-suited to applications where errors occur in bursts"* and *"a poor choice compared to a binary code"* for random single-bit errors?
- **Refuter.** Two equal-redundancy arrangements giving the same block-error curve on a channel whose correlation is established; or a counterexample to the λℓ scaling. Fire either and the isomer claim as applied fails.

### C3  -  cost and verification, checkable against a declared budget and a measured anchor

- **Statement.** The burst strategy pays in two currencies that do not add (rate and redundancy on one side, memory and latency on the other), and "best" is settled only by an anchor that does not move when a code is praised: Fig 12 :126  -  *"A composition costs in two currencies, and they do not add."* Fig 9 :60  -  *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Fig 2 :29  -  *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
- **What to check.** Does the interleaver's latency and memory cost scale as the sources describe (block interleaver needs the full message and considerable memory; cross interleaver halves both)? Would a published ranking change if the channel family or metric changed? If yes, "best" is family-relative and the anchor rule holds.
- **Refuter.** A strategy that achieves the same block-error level at lower redundancy, latency and memory on two independent burst channels, with the improvement surviving measurement. Then the trade-off is not binding for this case. Or a code family that dominates across memoryless and correlated channels with no arrangement change, which would narrow the split requirement.

## 3. What is explicitly not claimed

- Not a named winner: no Reed-Solomon, Fire, LDPC, turbo or specific interleaver depth is asserted as the figure's output. That is a `gap`.
- Not "correlation is just a higher bit error rate." It is a different symmetry and a different anchor.
- Not a derivation of any code's distance bound or capacity theorem.
- Not that agreement among experts settles anything. Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."*
- Not `grounded`. No BER curve was measured; this packet is a simulated derivation.

## 4. Provenance

- Verbatim figure text extracted from Isaiah's 13 SVGs plus the Operators and Symbols tables, local file `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Every figure quote above was checked against it character by character.
- Canonical usage rule: local `FRAMEWORK/reference/FIGURES_README_canonical.md`, copied from the public figures README, branch `general-agent`.
- `THE_FORMULA.md` and `THE_SEAT_MAP_Field_Guide_amended.md`, local framework files, opened this session.
- Eight essays by Isaiah N, 2026, all fetched and read this session; listed in `05_what_shape_means.md`.
- Public coding sources, all fetched and read 2026-11-23: Burst error-correcting code, Burst error (Gilbert-Elliott), Reed-Solomon error correction (Wikipedia); arXiv cs.IT; IEEE ISIT 2026 home and Information for Authors. Full URLs and author/year data in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

1. **Dependence test.** Fit a two-state model to a channel error trace; report transition probabilities and a run-length distribution. Independent errors at the decision scale fire the refuter of C1.
2. **Arrangement test.** On that trace, compare equal-redundancy consecutive and interleaved layouts; report corrected burst length. No difference fires the refuter of C2.
3. **Cost test.** Report rate, interleaver memory and decoding latency; compare with the residual burst failures removed. Cost exceeding benefit fires the refuter of C3.
4. **Dominance test.** Test one code family across memoryless and correlated channels on one declared metric. Dominance with no arrangement change narrows the split claim.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :22; Fig 2 :20-21, :29; Fig 9 :55; Fig 12 :94, :117, :126  -  seven short passages.
2. Check C2 against your own knowledge: is the λℓ interleaving theorem correct, and does the burst-versus-random RS distinction hold as stated?
3. Name one channel statistic you would measure to distinguish a shared burst from independent errors at the decision scale, or say why none is available.
4. Send the refutation. A failure is more useful than an endorsement.
