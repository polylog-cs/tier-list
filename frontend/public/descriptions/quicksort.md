**Quick description.**
Pick a pivot, partition into `< pivot | = pivot | > pivot`, then recurse on the sides. Quicksort *solves general in‑memory sorting* extremely well in practice: in‑place partitioning and excellent cache locality make it a default choice in many contexts. ([Wikipedia](https://en.wikipedia.org/wiki/Quicksort))

**Field notes.**

* Pivot strategy matters: randomization or median‑of‑three avoids adversarial O(n²). (Quicksort overview.) ([Wikipedia](https://en.wikipedia.org/wiki/Quicksort))
* For many duplicates, use *three‑way partitioning* (Dutch National Flag) to cut work. ([Wikipedia](https://en.wikipedia.org/wiki/Dutch_national_flag_problem))
* Production sorts often use **introsort** (quicksort with a heap‑sort fallback + small‑array insertion sort); e.g., in libstdc++'s `std::sort`. ([Wikipedia](https://en.wikipedia.org/wiki/Introsort))

**Code references & demos.**

* Wikipedia: Quicksort. ([Wikipedia](https://en.wikipedia.org/wiki/Quicksort))
* Rosetta Code: Quicksort task. ([Rosetta Code](https://rosettacode.org/wiki/Sorting_algorithms/Quicksort))
* **Interactive**: VisuAlgo Sorting (Quick/Merge with step controls); USFCA Comparison Sorting; SortVisualizer (many sorts side‑by‑side). ([VisuAlgo](https://visualgo.net/en/sorting), [USFCA](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html), [Sort Visualizer](https://sortvisualizer.com/))
* **Visualizations**: Quicksort visualization; Quicksort animation. ([Idea Instructions](https://idea-instructions.com/quick-sort/), [Wikimedia Animation](https://commons.wikimedia.org/wiki/File%3ASorting_quicksort_anim.gif))