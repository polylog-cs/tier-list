**Quick description.**
BFS explores a graph in layers from a start node using a queue. It *solves single‑source shortest path on unweighted graphs*. Dijkstra's algorithm generalizes this to *weighted graphs*: repeatedly extract the currently closest node (via a min‑priority queue) and relax its outgoing edges. 

**Field notes.**

* If any edge weight can be negative, Dijkstra's optimality breaks. 
* A\* = "Dijkstra with an (admissible) heuristic" aimed at a target; same optimality when the heuristic never overestimates. Widely used in games/robotics. [See our video!](https://www.youtube.com/watch?v=A60q6dcoCjw&pp=ygUGI3N0w6By)
* Historically: Dijkstra's 1959 algorithm predates the binary heap (Williams, 1964), so early implementations weren't even heap‑based. 

**Code references & demos.**

* Wikipedia: [BFS](https://en.wikipedia.org/wiki/Breadth-first_search), [Dijkstra](https://www.youtube.com/watch?v=A60q6dcoCjw&pp=ygUGI3N0w6By)
* Rosetta Code: Dijkstra; A\*. ([Rosetta Code](https://rosettacode.org/wiki/Dijkstra%27s_algorithm))
* **Interactive**: Red Blob Games pathfinding (BFS/Dijkstra/A\*); VisuAlgo SSSP (BFS & Dijkstra); USFCA interactive Dijkstra. ([Red Blob Games](https://www.redblobgames.com/pathfinding/a-star/introduction.html), [VisuAlgo](https://visualgo.net/en/sssp), [USFCA](https://www.cs.usfca.edu/~galles/visualization/Dijkstra.html))
* **Visualizations**: BFS animation; Dijkstra's algorithm animation. ([BFS Demo](https://gist.github.com/kira924age/c14ec7424a966d1e48a9b601289907f0), [Dijkstra Animation](https://commons.wikimedia.org/wiki/File%3ADijkstras_progress_animation.gif))