**Quick description.**
**Karatsuba:** Divide‑and‑conquer trick that reduces one n×n multiplication into three half‑size multiplications plus additions/subtractions. **Strassen:** Reduces 2×2 block multiplications from 8 to 7 via algebraic recombination, and recurses. They solve fast big‑integer/polynomial multiplication and dense matrix multiply when n is large enough that grade‑school methods are too slow. ([Wikipedia](https://en.wikipedia.org/wiki/Karatsuba_algorithm))

**Field notes.**

* **Karatsuba:** First published sub‑quadratic integer multiplication (1962); many big‑int libraries switch from schoolbook to Karatsuba past a crossover. ([Wikipedia](https://en.wikipedia.org/wiki/Karatsuba_algorithm))
* **Strassen:** Often combined with Winograd variants; numerical stability and memory overhead can bite. Production libraries typically stick to highly‑tuned GEMM unless matrices are very large. ([Wikipedia](https://en.wikipedia.org/wiki/Strassen_algorithm))
* For *very* large n, FFT‑based methods (Schönhage–Strassen, Fürer…) dominate asymptotically. ([Wikipedia](https://en.wikipedia.org/wiki/Sch%C3%B6nhage%E2%80%93Strassen_algorithm))

**Code references & demos.**

* Wikipedia: Karatsuba algorithm; Strassen algorithm. ([Wikipedia](https://en.wikipedia.org/wiki/Karatsuba_algorithm))
* Rosetta Code: Strassen's algorithm; Long multiplication references. ([Rosetta Code](https://rosettacode.org/wiki/Strassen%27s_algorithm))
* **Interactive**: YouTube walkthrough: Karatsuba Multiplication; GeeksforGeeks Strassen walkthrough. ([YouTube](https://www.youtube.com/watch?v=wW1gYT9UsJM), [GeeksforGeeks](https://www.geeksforgeeks.org/dsa/strassens-matrix-multiplication))