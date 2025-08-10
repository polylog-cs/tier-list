**Quick description.**
Finds the convex hull of planar points by: pick an anchor (e.g., lowest y), sort others by polar angle around it, then do a stack‑based walk discarding right turns. Solves the basic hull task used in GIS, collision detection, and geometry pipelines. ([Wikipedia](https://en.wikipedia.org/wiki/Graham_scan))

**Field notes.**

* Alternatives: Andrew's monotone chain (also O(n log n)), Jarvis march (O(nh), good for small hulls). Precision/degeneracy handling matters in practice. ([Wikipedia](https://en.wikipedia.org/wiki/Graham_scan))
* Nice to visualize; often taught alongside orientation tests and cross products.

**Code references & demos.**

* Wikipedia: Graham scan. ([Wikipedia](https://en.wikipedia.org/wiki/Graham_scan))
* Rosetta Code: Convex hull (many langs). ([Rosetta Code](https://rosettacode.org/wiki/Convex_hull))
* **Interactive**: VisuAlgo convex hull. ([VisuAlgo](https://visualgo.net/en/convexhull))