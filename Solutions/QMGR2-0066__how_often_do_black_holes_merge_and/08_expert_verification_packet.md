# Expert verification packet: black hole merger rates and formation channels

**What this is:** a claim in a form a gravitational-wave astronomer can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the structural claim, `general` on the union split, not `grounded`.** No detector data were reduced here. The measured rate is reported as a ground reading made by the LVK collaborations and imported with provenance.

## 1. The claim, in one paragraph

"How often do black holes merge and what does that tell us about how they formed" is a union of two conditions, not one question with two halves. The frequency condition is a symmetric count over events and is settled at the detector. The source condition is an ordered production route and is not carried by the count: a symmetric aggregate names a state of the population, not a path to that state. The route is recoverable from the lineage that survives into the data, namely spin orientation, eccentricity, mass-gap occupancy and redshift trend. Over a shared atom set the stellar-origin channels are isomers (same atoms, different bond, different observable behaviour), a primordial origin is a different composition, and hierarchical remerger is a cycle with partial ground contact. The framework returns the shape a channel answer must have and stops short of naming a channel for an event.

## 2. Three checkable sub-claims

### C1: the two halves are a union with an overlapping intersection, not a partition

- **Statement:** a more precise rate clears the frequency condition and leaves the source condition standing. The intersection is the redshift trend, which is both a count and a channel imprint.
- **Source, verbatim:** Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57 "a case in two conditions is not a harder case of either".
- **Refuter:** show frequency and source to be independent conditions with no overlap, so the union collapses to a partition. Then one lever would settle both and this sub-claim fails.

### C2: a symmetric count cannot carry an ordered route

- **Statement:** the merger rate is exchangeable under relabeling of events; a formation route is a typed sequence. No bond in the count carries the production order.
- **Source, verbatim:** Fig 12 :92 "Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges." Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one." Operators table: `+` conjunction is symmetric, `->` sequence and `=>` production are ordered.
- **What to check:** is the characterization of the rate as a symmetric aggregate faithful to the population inference you use? Does any likelihood or summary statistic in your pipeline carry production order in the count itself?
- **Refuter:** exhibit a typed bond admitted by the figures under which a symmetric population count carries its ordered production route. Then the rate would determine formation and this sub-claim fails.

### C3: the route is in the lineage, and the lineage observables already return values

- **Statement:** the artifact (the catalog) does not determine the route. The route is read from spin, eccentricity, mass-gap occupancy and redshift evolution. These are not hypothetical instruments.
- **Source, verbatim:** Fig 13 :126 "Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available." Fig 13 :129 "It is recoverable from the lineage." Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something."
- **What to check:** are the four listed observables sufficient to separate the candidate channels at a stated misclassification rate, or does one of them fail to register at current sensitivity?
- **Refuter:** show a single observable or set of observables giving identical values for all candidate channels on every accessible measurement, making the route genuinely indiscernible. Then the lineage requirement is vacuous and this sub-claim fails.

## 3. What is explicitly not claimed

- Not a derivation of the merger rate. No figure line yields a number in Gpc^-3 yr^-1. The value 17.9 to 44 at z = 0.2 is from LVK GWTC-3, imported with provenance.
- Not a channel attribution for GW241011, GW241110 or any other event. The collaborations' own wording is "could be" and "tantalizing evidence".
- Not a claim that all channels are isomers. Primordial origin does not share the stellar progenitor atom set (Fig 12 :117 requires same atoms).
- Not that the rate is irrelevant. Its redshift trend is one of the discriminators.
- Not `grounded`. This packet is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## 4. Standing refuters (pre-registered, written before the conclusion)

1. a figure line yielding a numerical rate with physical units;
2. a discriminator identical across all channels on all accessible observables;
3. frequency and source shown to be a partition;
4. a typed bond under which a symmetric count carries an ordered route;
5. the detector anchor shown to move when a formation hypothesis changes.

If any fires, the sender withdraws the shape claim and records the refutation with provenance in `11_audit.md`.

## 5. Provenance

- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim extract from Isaiah's 16 framework files, opened 2026-11-23.
- Usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`; loop: `FRAMEWORK/figures/THE_FORMULA.md`; both read 2026-11-23.
- Rate: LIGO Scientific Collaboration, Virgo Collaboration and KAGRA Collaboration, "The population of merging compact binaries inferred using gravitational waves through GWTC-3", Physical Review X 13, 011048 (2023), https://arxiv.org/abs/2111.03634, opened 2026-11-23.
- Catalog: same collaborations, "GWTC-3: Compact Binary Coalescences Observed by LIGO and Virgo During the Second Part of the Third Observing Run", PRX 13, 041039 (2023), https://arxiv.org/abs/2111.03606, opened 2026-11-23.
- Conditional channel fraction: LVK, "Population Properties of Compact Objects from the Second LIGO-Virgo Gravitational-Wave Transient Catalog" (2021), https://arxiv.org/abs/2010.14533, opened 2026-11-23.
- Discriminator: Zevin, Romero-Shaw, Kremer, Thrane and Lasky, ApJL 921, L43 (2021), https://arxiv.org/abs/2106.09042, opened 2026-11-23.
- Current ground: LIGO newsroom releases of 2026-05-26 and 2025-10-28, https://www.ligo.caltech.edu/news/ligo20260526 and https://www.ligo.caltech.edu/news/ligo20251028, opened 2026-11-23.
- Framework essays read 2026-11-23: Hard Problem is About Source, Library of Babel, Recursive Self-Improvement Trap, They're Scanning Books. Full list in `05_what_shape_means.md`.
- Packet compiled 2026-11-23.

## 6. What an expert can check in twenty minutes

1. Read Fig 9 :54-57 and Fig 12 :92, :111 and Fig 13 :126, :129. Six short passages.
2. Check C2 against your own population pipeline: is the rate a symmetric aggregate in your inference, and does any count carry production order?
3. Name the discriminator you would trust to separate isolated from dynamical formation, and say what misclassification rate it currently achieves. If you cannot name one, that is a useful result.
4. Check C1 against the LVK rate priors: is the redshift trend already being used as a channel constraint in your analysis? If yes, the union is confirmed in practice.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
