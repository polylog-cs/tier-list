**Quick description.**
DFS explores "as deep as possible" along each branch before backtracking (stack/recursion). It *solves generic traversal* and underpins *topological sorting* of DAGs, *cycle detection*, *articulation points/bridges*, and *SCCs* (Tarjan/Kosaraju are structured DFS passes). ([Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search))

**Field notes.**

* Reverse post‑order of a DFS on a DAG gives a valid topological order. ([Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search))
* Recursive DFS may blow the call stack on deep/large graphs—use an explicit stack if needed. (General DFS guidance.) ([Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search))
* Classic demos include maze generation/solving and tree traversals (pre/in/post). ([Rosetta Code](https://rosettacode.org/wiki/Tree_traversal))

**Code references & demos.**

* Wikipedia: DFS. ([Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search))
* Rosetta Code: Tree traversal; Topological sort (DFS variant). ([Rosetta Code](https://rosettacode.org/wiki/Tree_traversal))
* **Interactive**: VisuAlgo DFS/BFS; USFCA DFS visualizer. ([VisuAlgo](https://visualgo.net/en/dfsbfs), [USFCA](https://www.cs.usfca.edu/~galles/visualization/DFS.html))
* **Visualizations**: DFS animation. ([DFS Demo](https://gist.github.com/kira924age/c14ec7424a966d1e48a9b601289907f0))