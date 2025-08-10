**Quick description.**
Kruskal computes a *minimum spanning forest/tree* in a weighted undirected graph. Sort edges by weight and add them in increasing order, *skipping any that would form a cycle* (detected with Disjoint‑Set Union). If the graph is connected you get an MST; otherwise, a forest with one MST per component. ([Wikipedia](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm))

**Field notes.**

* DSU (a.k.a. Union‑Find) with path compression + union‑by‑rank makes cycle tests almost O(1) amortized. ([USFCA](https://www.cs.usfca.edu/~galles/visualization/DisjointSets.html))
* Cut/cycle properties justify the greedy choice; Prim and Borůvka are alternative MST algorithms with different sweet spots (e.g., sparse vs. dense). ([Wikipedia](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm))
* Early stop = clustering: halting after k‑1 unions yields k clusters (single‑linkage idea). ([Wikipedia](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm))

**Code references & demos.**

* Wikipedia: Kruskal. ([Wikipedia](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm))
* **Interactive**: VisuAlgo MST (Kruskal/Prim) + quizzes; USFCA Kruskal; USFCA Disjoint‑Sets visualizer. ([VisuAlgo](https://visualgo.net/en/mst), [USFCA](https://www.cs.usfca.edu/~galles/visualization/Kruskal.html))