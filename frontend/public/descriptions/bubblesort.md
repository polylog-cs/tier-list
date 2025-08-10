**Quick description.**
Repeatedly sweep the array, swapping adjacent out‑of‑order pairs, until a pass makes no swaps. It *solves sorting* but is mainly pedagogical; even among O(n²) sorts, insertion sort is usually better. ([Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort))

**Field notes.**

* Early description dates to **Edward H. Friend (1956)**. ([Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort))
* Variants: **cocktail shaker sort** (bidirectional) and **comb sort** try to mitigate "turtles" (small elements moving left slowly). ([Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort))
* Despite reputation, it's handy for detecting a "nearly sorted" inversion with an O(n) pass. ([Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort))

**Code references & demos.**

* Wikipedia: Bubble sort. ([Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort))
* Rosetta Code: Bubble sort. ([Rosetta Code](https://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort))
* **Interactive**: VisuAlgo Sorting (Bubble); USFCA "Comparison Sorting" (has Bubble). ([VisuAlgo](https://visualgo.net/en/sorting), [USFCA](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html))