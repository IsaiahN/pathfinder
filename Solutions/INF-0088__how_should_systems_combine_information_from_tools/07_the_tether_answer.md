# The Tether's answer on combining conflicting tool, user and parameter information

**Mode: `specified` on the rule, `general` on the structural shape, not `grounded`.** The figures constrain what a combining rule must look like; no figure line hands down a coefficient and no measurement here settles it. Simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground reading.

## 1. The residual it answers

A system receives readings from tools, feedback from users, and a prior from learned parameters. On some object slot those readings disagree. The question asks which rule to apply. The disagreement is a **union compound**, not one hard problem (Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."). At least two questions are bundled: do the sources bear on the same state, and how much should each reading count? They have different answers and must not be averaged together.

## 2. The shape

1. **Keep the residual per slot; never average it away.** Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :28: "A system that averages across objects has thrown away the only signal that says where to look." A single fused score is frame-internal until a ground pays for it (Fig 1 :24-27).

2. **Classify the source relation before fusing.** Fig 2 :6-7 names "collapse 2: common cause (hidden shared source)". Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Ask first whether tool, user and parameter are readings of one state, different states, or the same pool under two names.

3. **Range each source separately against a ground that does not move.** Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." If a source shares an evidence pool with another, their agreement is one witness (Fig 2 :40).

4. **Who is the anchor depends on the question.** Fig 2 :37: "Human judgment is the right anchor for is this a good answer for a person, because the question is about people." Fig 2 :37-38: "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." So the user's weight is delegated to the question, not fixed in advance.

5. **Parameters are a prior, not a ground.** Symbols table :23-25 makes w a learnable weighting over history, and Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." Parameter confidence is a budget to try an action, not a verdict.

6. **Fuse only redundant, low-overlap readings, and discount shared evidence.** Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Faes et al. 2009 give the statistical form: effective sample size is "the sample size one would need in an independent sample to equal the amount of information in the actual correlated sample." Segregate sources that fail the common-cause test rather than weighting them (Roach et al. 2006).

7. **Keep a refusal operator.** Fig 12 :112: "A refutation is a negation, and that one is not a bond." A rule that only reweights cannot say a source has become false. Fig 5 :50-52: the term owed refuses another rather than explaining a gap.

8. **Keep provenance and maintain the channel.** Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them". Every admitted reading gets origin and sequence. Fig 10 :24: "the ground does not decay, the channel does". A stale channel reports as lost contact, not as a verdict.

9. **Order the operations by dependency.** Fig 3 :20: "The chain is ordered by dependency, not by importance." Perceive, then build the vocabulary including negation, then state the objective as a ground-ranged residual, then plan probes, then carry a method (Fig 4 :22: "Only methods cross up. Only head starts come down.").

## 3. What it explicitly does not say

- Not a numerical weighting formula. The figures constrain the shape and leave the coefficient to a ground-scored measurement. This is a `gap`, not a silence masquerading as an answer.
- Not a fixed weight for users. The anchor role is question-dependent.
- Not a claim that parameter confidence is evidence about the world, or that a large prior settles anything.
- Not that averaging never works. Averaging is efficient for a convention whose weights an outcome later prices (Fig 2 :41), which is different from treating agreement as a verdict.
- Not grounded. No experiment here discriminates among candidate rules.

## 4. What would settle it - the ground

A source-discriminating experiment, not a further argument. *The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source"; the spectrometer, not an argument, resolved it. Here the corresponding questions are:

- **Common-cause test:** on a controlled task, does inferring whether sources share a source before fusing change the ground score relative to unconditional fusion? Roach et al. 2006 predict it does; the pre-registered refuter R1 asks the same thing in the opposite direction.
- **Correlation test:** do two sources with identical evidence add accuracy when their agreement is counted twice? Effective-sample-size theory predicts no.
- **Anchor test:** on a non-people question with a checkable ground, does user feedback match a direct ground test? Fig 2 :37-38 predicts no.
- **Refusal test:** when a source flips to being systematically false, does a rule with `¬` recover faster than a rule with weights only?
- Standing falsifiers from `01`: derive one of the six from the other five; make a symmetric blend win under independent sources and a settled ground; derive the numeric weights from the figures alone.

## 5. The honest stop

**Unreached, not unreachable.** Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing." Fig 8 :39: "So a search that finds nothing is never a proof of absence." The framework gives the shape of the rule, the refuters, and the instruments that would close it. It stops at the limit of what the available instruments distinguish, and records the lineage so the stop is checkable. "Indiscernibility is not identity." The numeric weights remain named as a gap.

## 6. One-paragraph version for outreach

> The Tether does not give a magic weighting formula for conflicting tool, user and model readings. It gives the shape any defensible rule must have. Keep the disagreement per object slot instead of averaging it into one number. Before fusing anything, decide whether the sources are readings of one state, of different states, or of the same evidence pool under two names. Range each source separately against a ground that does not move when they disagree, and remember that user judgment is the anchor only when the question is itself about people; for a code-correctness question it is an instrument, and instruments can be wrong on axes they do not measure. Learned parameters are a prior inside the frame, not a ground. Fuse only redundant, genuinely independent readings, discount shared evidence, keep a way to refuse a source that has become false, and stamp every admitted reading with its origin. What is offered is the shape, the refuters written in advance, and the experiments that would close the one open gap, the numbers.
