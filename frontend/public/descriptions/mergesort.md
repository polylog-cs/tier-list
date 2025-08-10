**Quick description.**
Divide the array, sort halves, then **merge** two sorted streams in linear time. Merge sort *solves stable comparison sorting* with predictable complexity; it's the backbone of *external sorting* (sort chunks that fit in RAM, then k‑way merge on disk). ([Wikipedia](https://en.wikipedia.org/wiki/Merge_sort))

**Field notes.**

* Ideal when stability is required or you're sorting on multiple keys in succession. ([Wikipedia](https://en.wikipedia.org/wiki/Merge_sort))
* External/IO‑friendly: classic DB‑style multiway and polyphase merges reduce passes on tapes/disks. ([Wikipedia](https://en.wikipedia.org/wiki/External_sorting))
* Influenced modern production sorts (e.g., **Timsort** in Python/Java for objects—adaptive, stable). ([Wikipedia](https://en.wikipedia.org/wiki/Merge_sort))

**Code references & demos.**

* Wikipedia: Merge sort. ([Wikipedia](https://en.wikipedia.org/wiki/Merge_sort))
* Rosetta Code: Merge sort task; External sort task. ([Rosetta Code](https://rosettacode.org/wiki/Sorting_algorithms/Merge_sort))
* **Interactive**: VisuAlgo Sorting (Merge); USFCA Comparison Sorting; HackerEarth merge sort visualizer. ([VisuAlgo](https://visualgo.net/en/sorting), [USFCA](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html), [HackerEarth](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/))
* **Visualizations**: Mergesort visualization; Mergesort animation. ([Idea Instructions](https://idea-instructions.com/), [Wikimedia Animation](https://commons.wikimedia.org/wiki/File%3AMerge-sort-example-300px.gif))