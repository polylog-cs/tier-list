**Quick description.**
Maps keys→values via a **hash function** to array indices. Collisions are handled by **separate chaining** (buckets/lists) or **open addressing** (probing: linear, quadratic, double‑hashing). Resize to keep **load factor** bounded. Used everywhere: dicts, sets, caches, DB indexing. ([Wikipedia](https://en.wikipedia.org/wiki/Hash_table))

**Field notes.**

* With chaining, performance degrades gradually as load rises; with open addressing, performance collapses as load→1, so keep α ≲ 0.7. ([Wikipedia](https://en.wikipedia.org/wiki/Hash_table))
* Hash‑table flavors: **cuckoo hashing** (two tables/two hashes), **Robin Hood** hashing (probe length equalization), **Hopscotch** hashing (neighborhoods). (General references.) ([Wikipedia](https://en.wikipedia.org/wiki/Cuckoo_hashing))
* Choosing hash functions and table size matters (clustering vs. distribution); production dicts usually include **amortized resizing**. ([Wikipedia](https://en.wikipedia.org/wiki/Hash_table))

**Code references & demos.**

* Wikipedia: Hash table; Hash function. ([Wikipedia](https://en.wikipedia.org/wiki/Hash_table))
* Rosetta Code: Associative array (creation) — many language idioms. ([Rosetta Code](https://rosettacode.org/wiki/Associative_array/Creation))
* **Interactive**: VisuAlgo Hash Table (chaining & probing); USFCA Open Hashing; USFCA Closed Hashing (+ buckets). ([VisuAlgo](https://visualgo.net/en/hashtable), [USFCA](https://www.cs.usfca.edu/~galles/visualization/OpenHash.html))