# The Tether's answer on early-warning signals and thresholds

**Mode: `general` on the shape, `specified` on the four domain verdicts, `gap` on a universal numeric reliability rate. Not `grounded`.** Simulated derivation checked against the figures (`05_what_shape_means.md` §7), not a ground reading.

## 1. The residual it answers

An observer reads a time series, sees slower recovery or rising variance, and must decide whether to treat that reading as evidence that a threshold is approaching. The residual is the gap between the indicator's prediction and the observation at the ground, which is the crossing itself. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* The four outcome cells (signal or no signal, crossing or no crossing) are four slots. The word "reliably" tries to collapse them into one, which is the defect the derivation repairs.

## 2. The shape, one verdict per domain, never averaged

**Domain 1, the indicator frame.** A statistic cannot score itself. Fig 1 :27: *"A frame cannot score itself with a quantity it also produces."* Rising autocorrelation is a quantity the indicator frame produces, so it cannot also be the measure of the indicator's reliability. Reliability must be measured elsewhere, against crossings. Verdict: `general`, triangulated (Fig 1 plus Fig 3). **Not averaged with the others.**

**Domain 2, the ground frame.** The crossing is the legitimate anchor because the question is constitutively about it. Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* An admissible reliability claim therefore ranges against actual crossings and reports what happened in their absence. Verdict: `specified`, triangulated (Fig 2 and Fig 10, low overlap between the anchor definition and channel decay).

**Domain 3, the observation channel.** Fig 10 :24: *"the ground does not decay, the channel does"*; Fig 10 :25: *"stale percepts, dropped transients, saturated metrics, pooled readings"*; Fig 10 :27: *"the output is not a verdict, it is you have lost touch"*. Both errors are channel failures. False positives arise when systems are selected because they collapsed, so a stable system's chance excursion is read as a warning. False negatives arise when a large shock crosses without gradual loss of resilience. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Verdict: `specified`, triangulated (Fig 10, Fig 6, and two independent world methods).

**Domain 4, the verification frame.** Agreement is not corroboration when the data are shared. Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*; Fig 7 :13: *"agreement compounds, evidence does not"*; Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* Multiple indicators computed from one series, and reviews reusing one paleoclimate record, are one witness. Verdict: `general`, triangulated (Fig 2 plus Fig 7).

**The practical use.** A warning threshold is a filter for attention and sampling budget, never a verdict. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* The operational output is an ordered pair of error rates for a named system class and a named channel, with the window, detrending, and sampling interval disclosed. Verdict: `general`, triangulated (Fig 9 plus Fig 2).

**The numeric coefficient.** No figure line produces a universal false-alarm or miss rate. Fig 9 :32: *"you get a kind of thing, never the answer itself."* Verdict: `gap`. This is a verdict, not a silence.

## 3. What it explicitly does not say

- Not that early-warning signals are useless. The 2008 paleoclimate result and the chemostat and simulation results show real cases where a trend preceded a crossing.
- Not that a null signal proves no threshold. "Not detected at this resolution" is the honest report; depth and genuine absence look the same from inside one frame (Fig 6 :27).
- Not that a single reliability number is admissible. At a fixed 5 percent false-alarm rate the literature reports 25 percent, 5.0 percent and 5.4 percent detection across three datasets; no average of those is a property of the indicator.
- Not that agreement among papers, indicators or experts settles anything (Fig 2 :40).
- Not that this is a measurement. `THE_FORMULA.md` mode rule: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Everything here is candidate.
- Not that the framework returns a numeric rate. It returns a shape.

## 4. What would settle it - the ground

A source-discriminating instrument and a prospective, replicated design, not a further argument. *The Hard Problem is About Source* (essay): an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it. Here the corresponding tests are:

- **Prospective registration:** declare the system class, the indicator, the window, the detrending and the accepted false-alarm rate before observing the crossing. Then measure both error cells. This removes the prosecutor's fallacy (Boettiger and Hastings 2012a: *"experimental studies with replicates avoid this pitfall entirely."*).
- **Replication:** run enough independent systems to range the indicator against crossings more than once. Ten correlated time series are one series wearing ten names (Fig 8 :48-49).
- **Model-based discrimination:** fit a model of an approaching bifurcation and a stable null, and compare their likelihoods rather than reading a rising trend. Boettiger and Hastings 2012b show this improves detection but does not abolish the trade-off.
- **Source-discriminating instruments:** where possible, measure the return rate directly with controlled perturbations instead of inferring it from autocorrelation.
- **Standing refuters from the audit:** both error rates at zero with finite data; a single aggregate reliability preserving per-class rates; two indicators from one series with disjoint measurement channels; a null result entailing absence of a threshold. Any one fires against this answer.

## 5. The honest stop

**Unreached, not unreachable.** The six-term minimum set is *"a human's careful guess at reality's compression axes"* (*They're Scanning Books*, essay). Declaring the saddle-node assumption makes the choice visible, not neutral. The union horizon moves as instruments improve, so a present null result is *"only a report that nobody has reached it yet"* (*How Intelligence Actually Works*, essay). The answer stops at the limit of the available discrimination and records the lineage so the stop is checkable. *"Indiscernibility is not identity."*

## 6. One-paragraph version for outreach

> The Tether does not give a yes or no to "are early-warning signals reliable?" It says that the question is a bundle, not one question. The crossing is the ground and the signal is a channel to it, so reliability must be measured against crossings and reported per system class as an ordered pair of false-alarm and miss rates, with the sampling and detrending choices disclosed. Both failures are channel failures: a stable system on a chance excursion can show a warning, and a large shock can cross without any gradual slowing. A threshold on an indicator is a filter that decides how much attention to spend, not a verdict that a threshold is being approached. No signal detected is not the same as no approaching threshold. The framework returns the shape an admissible reliability claim must have, the refuters written in advance, and the instruments that would close it. The number itself stays open until the ground settles it.
