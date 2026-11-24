# Public links and distribution

All links marked verified were fetched and read on 2026-11-23. Local framework files are in the workspace and were opened directly. The three `itsoc.org` pages are recorded as unverified candidates because the fetch returned 403; they are not cited as read anywhere in this folder.

## 1. Verified framework sources (primary, they decide)

| what | URL | verified content |
|---|---|---|
| The figures, as text | local: `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md` | Figures 1 to 13, Operators and Symbols tables, with line numbers. Every `Fig N :line` citation in this folder is checked against it. |
| Canonical usage rule | local: `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md` | *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also the shape limit and *"Indiscernibility is not identity."* |
| The eight-step loop | local: `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md` | Mode rule, refusal before mint, import gate, step 7 three questions, and *"the ground does not decay, the channel does."* |

## 2. Verified world sources (secondary, corroborate only)

| what | URL | verified content |
|---|---|---|
| List-Decoding Capacity of the Gaussian Arbitrarily-Varying Channel, Hosseinigoki and Kosut, Entropy 21(6), 2019 | https://pmc.ncbi.nlm.nih.gov/articles/PMC7515064 | Open access. States that *"the adversary knows the legitimate user's code"*, gives the Ahlswede dichotomy (capacity equals random-code capacity or is zero), defines symmetrizability as the adversary mimicking the transmitted signal, and describes list decoding that keeps the true message in a list alongside counterfeits. |
| The Capacity of the Arbitrarily Varying Channel Revisited, Csiszar and Narayan, IEEE Trans. Inf. Theory 34(2), 1988 | https://user.eng.umd.edu/~prakash/papers/Csiszar_Narayan-IT_1988ii.pdf | *"a celebrated result of Ahlswede [2] asserts that the capacity of an AVC either equals its random code capacity or else is zero"*; *"the capacity is zero if and only if the AVC is symmetrizable"*; random codes use *"common randomness between the encoder and the decoder"*; constraints *"may lead to a positive capacity."* |
| Communication Theory of Secrecy Systems, C. E. Shannon, Bell System Technical Journal 28(4), 1949 | https://vtda.org/pubs/BSTJ/vol28-1949/articles/bstj28-4-656.pdf | *"There are some systems that are perfect, the enemy is no better off after intercepting any amount of material than before."* Also the key-source diagram and *"perfect secrecy requires an infinite amount of key."* |
| The Wire-Tap Channel, A. D. Wyner, Bell System Technical Journal 54(8), 1975 | https://www.worldradiohistory.com/Archive-Bell-System-Technical-Journal/70s/Bell-System-Technical-Journal-1975-8.pdf | *"the code books used in these operations are assumed to be known by the wire-tapper"*; *"reliable transmission at rates up to C_s is possible in approximately perfect secrecy."* The adversary knows the code; a channel asymmetry still permits reliable hidden transmission. |
| Secret Key Agreement by Public Discussion from Common Information, U. Maurer, IEEE Trans. Inf. Theory 39(3), 1993 | https://crypto.ethz.ch/publications/files/Maurer93a.pdf | Secret key agreement is possible *"even when the enemy's channel is superior to the other two channels"*; conclusion warns against converting noisy channels into error-free ones before a cryptographic protocol, because that makes Shannon's bound apply. |
| The Byzantine Generals Problem, Lamport, Shostak and Pease, ACM TOPLAS 4(3), 1982 | https://lamport.org/pubs/byz.pdf | *"using only oral messages, this problem is solvable if and only if more than two-thirds of the generals are loyal; so a single traitor can confound two loyal generals. With unforgeable written messages, the problem is solvable for any number of generals and possible traitors."* A low-overlap, distributed-computing corroboration of the import shape. |
| Cryptology ePrint Archive home | https://eprint.iacr.org/ | Public self-submission venue, records scope and acceptance conditions. Verified 2026-11-23. |
| arXiv cs.IT and cs.CR listings | https://arxiv.org/list/cs.IT/recent and https://arxiv.org/list/cs.CR/recent | Verified 2026-11-23. Current listings confirm active communities for coding theory and adversarial security. |
| IACR conferences index | https://www.iacr.org/conferences/ | Verified 2026-11-23. Lists CRYPTO, EUROCRYPT, ASIACRYPT and other reviewed venues. |
| IEEE S and P index | https://www.ieee-security.org/TC/SP-Index.html | Verified 2026-11-23. Public conference index and current-year submission routes. |

### Failed fetches, recorded honestly

`https://www.itsoc.org/` and its child pages for the Information Theory Society, IEEE Transactions on Information Theory and ISIT returned HTTP 403 on 2026-11-23. They appear in `03_public_contact_points.csv` as unverified candidates and are not cited as read in `09_watson_answer.md`, `10_source_ledger.csv` or any other file.

## 3. What the wider literature does and does not do for this solution

1. **It corroborates the shape, it does not replace the figures.** Ahlswede's dichotomy (zero or full deterministic capacity), symmetrizability (the adversary mimics the code), Wyner's codebook-known wiretapper, Maurer's key agreement from partially independent noise, and the Byzantine result on unforgeable signatures are all secondary witnesses. They are not figure lines and cannot overrule one. Full provenance is in `10_source_ledger.csv`.
2. **Overlap is declared.** Shannon 1949, Wyner 1975, Ahlswede/Csiszar-Narayan, Hosseinigoki-Kosut and Maurer draw on a shared information-theory and cryptology pool and cite one another. They are one broad witness, not five independent ones. The Byzantine Generals paper is the genuinely low-overlap source: different field (distributed computing), different venue (ACM TOPLAS), different method (impossibility proof over message counts). Its agreement with the import shape is therefore worth more as corroboration, but it is still secondary.
3. **A conflict sends us back to the census.** No world source conflicted with a figure verdict. The conflict rule was not triggered. The one place where the literature sharpens the shape is the symmetrizability condition: it explains *when* the adversary can mirror the code, which the figures leave as a shape rather than a name. That sharpener is recorded as an import, not as a figure output.

## 4. Distribution: offer, never push

Figure-grounded reasons:

- **Fig 10 :52** *"Bring a characterised residual, never the source."* Lead with the per-slot residual, the shape claim and the refuter. The theory comes only after a stage-1 verdict is recorded.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before offering any source.
- **Fig 2 :35** *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Do not ask for agreement, and do not select recipients for likely agreement.
- **Fig 2 :40** *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* A later "I agree" is never pooled as corroboration.
- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Stage 3 sends the loop as a method, which is permitted, because giving away a generator does not give away an answer.
- **Fig 2 :42** *"Buy independence in proportion to the cost of being wrong."* The cost here is a jammed channel discovered in deployment, so independent checking is worth real effort.

**Recommended order in a reply:** (1) the shape claim and its pre-registered refuter; (2) ask what the recipient would count as a failure and record it; (3) only then the links, with the note that the figures, not the summary, are the authority; (4) only then the offer of the loop as a method, with the instruction to state a ground and write a refuter before running it.

## 5. The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52 and Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."* The recipient checks the output without holding the framework interior.
- **Stage 2 is opt-in by construction.** Stage-4 independence is spent the moment the theory is shown, so the stage-1 verdict must be recorded first.
- **Stage 3 is a method, not an answer.** Fig 4 :22. Each user must declare a ground and write a refuter, because Formula "Direction" says a frame cannot check the direction of its own question.
- **Hard precondition:** if the stage-1 output fails any refuter in `01` section 4, stop. There is nothing to offer.

## 6. Hosting and sending

Nothing is sent by this author. The packet in `08_expert_verification_packet.md` is meant to be hosted on an opt-in page, not attached to a bulk send. Prefer a download page that lets a recipient decline contact. Keep the shape claim and the refuter in front of the links so that a reader can refuse the claim without first accepting the framework.
