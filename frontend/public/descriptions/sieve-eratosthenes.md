**Quick description.**
Generates all primes up to n by iteratively striking out multiples of each found prime, starting at p². It solves: "list primes ≤ n," which underpins many number‑theory tasks and benchmarks. ([Wikipedia](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes))

**Field notes.**

* Practical variants: **segmented sieve** (sieve in blocks) and **wheel factorization** (skip obvious non‑residues); "genuine sieve" clarifies what is and isn't a true sieve. ([CP Algorithms](https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html), [CS HMC](https://www.cs.hmc.edu/~oneill/papers/Sieve-JFP.pdf))
* There's also the **linear sieve** achieving O(n) with larger constants. ([CP Algorithms](https://cp-algorithms.com/algebra/prime-sieve-linear.html))

**Code references & demos.**

* Wikipedia; CP‑Algorithms (incl. segmented). ([Wikipedia](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes), [CP Algorithms](https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html))
* Rosetta Code: Sieve of Eratosthenes (many languages). ([Rosetta Code](https://rosettacode.org/wiki/Sieve_of_Eratosthenes))
* **Interactive**: UNCG sieve visualizer; interactive animated sieves. ([UNCG Math](https://math-sites.uncg.edu/sites/pauli/112/HTML/seceratosthenes.html), [Algorithms Visual](https://algorithms-visual.com/eratosthenes))