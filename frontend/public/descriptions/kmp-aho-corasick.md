**Quick description.**
KMP solves **single‑pattern string search** by precomputing the longest‑proper‑prefix/suffix (LPS) table so the scan never backtracks in the text. Aho–Corasick solves **multi‑pattern search** by augmenting a trie with **failure links** to jump between overlapping prefixes, reporting all matches in one left‑to‑right pass. ([Wikipedia](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm))

**Field notes.**

* KMP elegantly proves the scan makes at most \~2n character inspections. ([Wikipedia](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm))
* Aho–Corasick underlies classic **fgrep** and many intrusion/virus scanners. ([Wikipedia](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm))
* AC generalizes the KMP idea from a line to a trie; building failure links is **BFS** over the trie. (Overview.) ([CP Algorithms](https://cp-algorithms.com/string/aho_corasick.html))

**Code references & demos.**

* Wikipedia: KMP; Aho–Corasick. ([Wikipedia](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm))
* Rosetta Code: KMP (draft task); Aho–Corasick (draft). ([Rosetta Code](https://rosettacode.org/wiki/Knuth-Morris-Pratt_string_search))
* **Interactive**: UBC KMP visualizer; algorithm‑visualizer KMP; Aho–Corasick live viz (GitHub pages). ([UBC](https://cmps-people.ok.ubc.ca/ylucet/DS/KnuthMorrisPratt.html), [Algorithm Visualizer](https://algorithm-visualizer.org/dynamic-programming/knuth-morris-pratts-string-search), [Aho-Corasick Viz](https://wiomoc.github.io/aho-corasick-viz/))