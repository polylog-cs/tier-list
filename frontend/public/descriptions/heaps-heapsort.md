**Quick description.**
A (binary) heap is an array‑backed complete binary tree with the heap property (parent ≥ children for max‑heap). It's an efficient priority queue. Heapsort first **heapifies** the array, then repeatedly swaps the root with the last element and **sifts down** to restore the heap — yielding a sorted array. Use heaps when you need fast highest/lowest‑priority extraction; use heapsort for predictable O(n log n) sorting without extra memory. ([Wikipedia](https://en.wikipedia.org/wiki/Heap_%28data_structure%29))

**Field notes.**

* Williams (1964) introduced the **binary heap** and heapsort; Floyd (1964) gave the classic **O(n)** heap‑build. ([Wikipedia](https://en.wikipedia.org/wiki/Binary_heap))
* Bottom‑up heapsort cuts comparisons (≈ 1.5 n log₂n worst vs. 2 n log₂n). Useful when comparisons are expensive. ([Wikipedia](https://en.wikipedia.org/wiki/Heapsort))
* Heaps implement selection efficiently (k‑th element via k extractions). Variants include **min‑max heaps** for double‑ended PQs. ([Wikipedia](https://en.wikipedia.org/wiki/Heap_%28data_structure%29))

**Code references & demos.**

* Wikipedia: Heap; Binary heap; Heapsort. ([Wikipedia](https://en.wikipedia.org/wiki/Heap_%28data_structure%29))
* Rosetta Code: Heapsort. ([Rosetta Code](https://rosettacode.org/wiki/Sorting_algorithms/Heapsort))
* **Interactive**: VisuAlgo (Binary Heap & heap sort); USFCA Heap Sort. ([VisuAlgo](https://visualgo.net/en/heap), [USFCA](https://www.cs.usfca.edu/~galles/visualization/HeapSort.html))