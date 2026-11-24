# Expert verification packet, INF-0029

**What this is:** a claim in a form an adversarial-communication researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the shape claims, `general` on the cited laws, `gap` on the identity of any single winning scheme, nothing `grounded`.** No measurement at a declared channel and threshold is claimed. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

An adversary that adapts to the code changes the channel's statistics when the code changes, so the channel fails the anchor test and becomes a frame that overlaps the sender's closure. Reliability is therefore not a property of the code alone. It is a property of the code together with a resource the adversary cannot read, imported with provenance and a shadow test, and reported as a per-slot residual at a receiver counter. Against an adversary that can mirror the code, the code alone cannot carry a positive worst-case rate; against one that cannot, a code-only rate is possible. The framework returns that shape and its refuters, not a specific cipher, key length or rate.

## 2. Three checkable sub-claims

### C1. Framework-internal, checkable by reading Figures 2 and 8

- **Statement:** a channel that updates on the code is a frame, not an anchor; a frame that reads the code does not provide independent corroboration.
- **Source, verbatim:** Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :34 *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."* Fig 8 :48-49 *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."*
- **Refuter:** show that the channel distribution the decoder ranges against is invariant under code changes while the adversary adapts, or exhibit a declared independence statistic showing low overlap between the adversary's jamming and the code. Then the anchor reading fails.

### C2. Engineering-facing, checkable against the arbitrarily varying channel literature

- **Statement:** the figure shape "code alone gives a zero worst-case ceiling when the adversary can mirror the code; an unreadable resource restores positive rate" lines up with the Ahlswede dichotomy and the symmetrizability condition. The measured residual must be per slot, not a pooled average.
- **What to check:** Hosseinigoki and Kosut, *List-Decoding Capacity of the Gaussian Arbitrarily-Varying Channel*, Entropy 21(6), 2019 (open access, https://pmc.ncbi.nlm.nih.gov/articles/PMC7515064): *"the adversary knows the legitimate user's code"*; the deterministic capacity *"either corresponds to the AVC randomized code capacity or else it equals zero"*; *"A symmetrizable AVC is an AVC in which the adversary can mimic the transmitted signal in order to prevent the decoder from distinguishing between the true message and an adversarial imitation."* Csiszar and Narayan, IEEE Trans. Inf. Theory 34(2), 1988: *"the capacity is zero if and only if the AVC is symmetrizable."* Wyner, *The Wire-Tap Channel*, 1975: *"the code books used in these operations are assumed to be known by the wire-tapper"* and *"reliable transmission at rates up to C_s is possible in approximately perfect secrecy."*
- **Refuter:** a deterministic code with a positive worst-case rate against a fully code-aware symmetrizing adversary, with no shared secret randomness, no authenticated or private channel, no list decoding and no state or power constraint; or a sustained measurement in which the adversarially targeted slot has no larger residual than the mean. Either kills the shape as stated.

### C3. Framework-internal derivation, checkable by reading Figures 6, 9, 10 and 12

- **Statement:** the question is a union, so the order of operations is describe R, refuse "channel is an anchor", import with gates, mint, settle. The import is a differing closure the adversary cannot read, and the resource cannot be treated as figured out from inside the code frame.
- **Source, verbatim:** Fig 9 :55 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* Fig 6 :14 *"the only operator that moves the wall"*; Fig 6 :24 *"Import from a live peer is debited against that frame’s independence. A wrong atom costs more than starting from primitives."* Fig 10 :24 *"the ground does not decay, the channel does"*. Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- **Refuter:** a case where a scheme is minted and settles at the ground while the false term "channel is an anchor" is still held; or a documented program that reversed the order and still achieved per-slot reliability against a code-aware adversary with no unreadable resource; or a code whose reliability is invariant under every rearrangement of its atoms at fixed alphabet and redundancy, which would collapse the isomer claim.

## 3. What is explicitly not claimed

- Not a capacity number for any real channel, and no measurement at a stated threshold.
- Not that reliability is impossible in principle. Only that code-only reliability fails where the adversary can mirror the code.
- Not a specific cipher, key length, hopping pattern, list size or power constraint. The framework returns a shape, not a name. Those are provenanced bindings from engineering frames.
- Not that an average error probability is a verdict. Several mechanisms produce the same pooled reading; a source-discriminating instrument is owed.
- Not `grounded`. Nothing here is asserted as settled by experiment.
- Not that the second seat in `11_audit.md` is an independent witness. It is simulated and shares the evidence pool; its agreement is internal consistency only.

## 4. Provenance

- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim with `Fig N :line` citations, checked character by character this session.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`. The loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Eight essays by Isaiah N, opened 2026-11-23, listed in `05_what_shape_means.md`; all share the framework author and carry little independent weight.
- World sources actually read: Shannon 1949, Wyner 1975, Csiszar and Narayan 1988, Maurer 1993, Hosseinigoki and Kosut 2019, Lamport, Shostak and Pease 1982. Full URLs, quotes, fields and overlap in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A receiver counter at a declared channel family, adversary model and threshold, with per-slot residuals and a declared independence statistic. From *The Hard Problem is About Source* (essay, read this session): an instrument that reads green *"cannot comment on the source"*; the spectrometer settled it, not a further argument. Here the corresponding questions are:

1. Does the targeted slot carry a larger residual than the mean under a code-aware adversary?
2. Is the channel distribution invariant under code changes, or does it move (C1)?
3. Does a deterministic code with no private resource achieve a positive worst-case rate on a symmetrizable channel (C2)?
4. Does adding an unreadable resource at fixed code change the per-slot result (C3)?

## 6. What an expert can check in twenty minutes

1. Read Fig 2 :29, :34, Fig 8 :48-49 and Fig 9 :55 (four short passages).
2. Check C2 against your own knowledge of AVC capacity: is "symmetrizable means zero deterministic capacity without a private resource" a fair reading of Ahlswede and Csiszar-Narayan?
3. Name one measurement that would discriminate a code-adapting channel from a fixed one at a declared threshold, or say why none exists.
4. Send the refutation if you find one. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
