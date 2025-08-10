**Quick description.**
Alternates assignment (closest centroid) and update (mean of assigned points) to minimize within‑cluster squared distances. Solves vector quantization/partitioning problems; ubiquitous for exploratory data analysis. ([Wikipedia](https://en.wikipedia.org/wiki/K-means_clustering))

**Field notes.**

* Sensitive to initialization—**k‑means++** improves it; mini‑batch variants scale. ([Rosetta Code](https://rosettacode.org/wiki/K-means%2B%2B_clustering))
* Not a density model; clusters are Voronoi cells around centroids; outliers and anisotropy break assumptions. ([Wikipedia](https://en.wikipedia.org/wiki/Voronoi_diagram))

**Code references & demos.**

* Wikipedia: k‑means; Lloyd's algorithm. ([Wikipedia](https://en.wikipedia.org/wiki/K-means_clustering))
* Rosetta Code: K‑means++ clustering. ([Rosetta Code](https://rosettacode.org/wiki/K-means%2B%2B_clustering))
* **Interactive**: scikit‑learn gallery examples for KMeans (digits demo, assumptions). ([Scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html))