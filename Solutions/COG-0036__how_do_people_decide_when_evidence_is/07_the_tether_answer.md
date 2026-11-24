# The Tether's answer: when is evidence sufficient to act?

**Mode: `specified` — not `grounded`.** This is a shape and a route, not a measured decision rule. Simulated derivation checked against the figures (`05_what_shape_means.md` section 7), not a ground reading.

## 1. The residual it answers

A person tracking a live case acts, observes, and carries a per-slot residual. The question asks for the stop rule when waiting for certainty is costly. In effect there are two conditions, not one: is there still a live residual, and is another observation worth its price (Fig 9 :57 "a case in two conditions is not a harder case of either."). This is a union compound with its own loop.

## 2. The shape

1. **Sufficiency is a comparison, not a certainty bar.** Fig 12 :87 "a threshold relation between two quantities", with the test Fig 12 :89 "is it about which is larger, rather than both being present? Yes." The operators table :51-52: "a goal is a comparison, which is why a vocabulary without it cannot state one". The two quantities are the residual that would remain if one acted now and the cost of acquiring more evidence.
2. **The residual is per case, never aggregated.** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." A global confidence score can be high while one live case still needs an answer.
3. **Two currencies are being priced, and they do not add.** Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 12 :126 "Bits price the description. Actions price finding out whether it holds." A rule that collapses description cost and observation cost into one scalar hides which one is binding. This is a structural constraint on the stop rule, not a claim that laboratory reward-rate models are wrong; `06` Q4 records the re-census.
4. **Waiting is bounded by the reach.** Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 6 :50 "Fails by spending budget on a region already swept. Distribute the search, and keep the searchers independent." Fig 13 :117-118 "So a frame can search without end and still not arrive: infinite effort inside a finite reach." Waiting pays off only while independent search can still find something, or while a different closure can be imported. Certainty that is unreachable at this budget is not made cheaper by waiting longer.
5. **The stop signal is a flat residual.** Fig 5 :58 "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign." When more observation stops shrinking the residual, the choice is to act, to refuse the term being tested, or to change frame. It is not to keep sampling.
6. **The act and the mint are different operations.** Fig 5 :42 "The acceptance test is a bargain, not a threshold." Acting uses `⋛`; accepting a new belief uses the bargain `cost(phi) + left(R,phi) < cost(R)` (Formula step 3). Both are needed and neither substitutes for the other.
7. **The ground settles the decision.** Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 9 :42 "narrowing gets you close, the ground decides". Whether stopping was right is settled by the paid outcome, not by agreement that the evidence looked sufficient.

## 3. What it explicitly does not say

- Not a numeric threshold, drift rate, boundary height, likelihood ratio, or aspiration level. The framework returns a shape, not a name (canonical README; Fig 9 :32 "you get a kind of thing, never the answer itself").
- Not that people actually use this rule. That is an empirical question for judgment and decision-making research. The figures constrain the shape an adequate descriptive rule must answer to; they do not report behaviour.
- Not that the framework is Bayesian, or a reinvention of satisficing, sequential analysis, or optimal stopping. Those are independent world witnesses with low overlap, cited as corroboration of the shape only.
- Not that a single scalar can price both costs. Fig 12 :127 "They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."
- Not `grounded`. No experiment in this folder pays for the shape.

## 4. What would settle it — the ground

The relevant instrument is a discriminating experiment, not a further argument. *The Hard Problem is About Source*, read this session: a reading "cannot comment on the source", and "the answer is unreached until a better instrument exists". Here the discriminators are:

1. **Cost-of-delay manipulation:** do measured stop thresholds move with the opportunity cost of time in a task whose optimum is known to depend on it? Falsifier 5 in `01` section 2.
2. **Reachability manipulation:** does waiting help when the target is unreachable at budget, and stop helping when the target is underivable but an import is available? This distinguishes SEARCHED from OUTWARD.
3. **Currency discrimination:** can a design separate description cost from settling cost, so that one is seen to bind while the other is held fixed? If both always move as one scalar, F2 fails.
4. **Per-slot test:** does a global confidence instruction hide a live case that a per-case instruction reveals? If not, F4 fails.
5. **Standing falsifiers from `01`:** a certainty criterion that persists when delay is costly; a single additive scalar at every level; aggregation with no lost live signal; a fixed-sample procedure with no sample-size cost.

## 5. The honest stop

**Unreached, not unreachable.** The canonical README says the framework "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." *They're Scanning Books*: "Declaring the primitives does not make them neutral. It makes the choice visible." The answer stops at the comparison, the per-slot residual, the two currencies and the flat-residual signal. It does not reach a number, and it does not reach a cognitive mechanism. "Indiscernibility is not identity" (*How Intelligence Actually Works*): several mechanisms can produce the same stopping behaviour, and the record of the route is what keeps that honest.

## 6. One-paragraph version for outreach

> The Tether does not give a number for when evidence is enough, and it is not a new decision theory. It gives the shape any adequate answer must have. Sufficiency is an ordered comparison between the residual that would remain if you acted now and the cost of one more observation, not a certainty bar you fill up to. That residual belongs to a live case, so aggregating it into one global confidence score hides the case that still needs an answer. Two things are being priced, the cost of describing what is still unexplained and the cost of the actions spent settling it, and they are in different units, so a single scalar that adds them hides which one is binding. Waiting only pays while independent search can still find something in the current reach, or while a genuinely different frame can be imported; once the residual persists and stops trending down, more waiting is budget spent in a swept region. The stop signal is the flat residual, and the rightness of the act is settled by its paid outcome, not by how many people agreed it was enough. The framework writes its refuters in advance and stops where the instruments stop distinguishing.
