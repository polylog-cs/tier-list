**Quick description.**
A BST keeps the **invariant**: left subtree < node < right subtree. In‑order traversal yields sorted order, which is why **tree sort** works. For guaranteed performance, use self‑balancing variants (AVL, Red‑black, etc.). ([Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree))

**Field notes.**

* Classic BSTs date to the 1960s; poor insertion order can make them **linear‑height** without balancing. ([Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree))
* Self‑balancing families: **AVL** (tight height bound), **Red‑black** (looser balance, cheaper updates). ([Wikipedia](https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree))
* BSTs remain great when you need **order‑statistics** (with augmentations) or **range queries**, where hash tables can't help. (BST overview.) ([Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree))

**Code references & demos.**

* Wikipedia: Binary search tree; Self‑balancing BST. ([Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree))
* Rosetta Code: Tree traversal; AVL tree; Tree sort via BST. ([Rosetta Code](https://rosettacode.org/wiki/Tree_traversal))
* **Interactive**: VisuAlgo BST; USFCA BST visualizer. ([VisuAlgo](https://visualgo.net/en/bst), [USFCA](https://www.cs.usfca.edu/~galles/visualization/BST.html))