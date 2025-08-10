# Algorithm Tier List Maker - Project Notes

## Site Purpose
Interactive website for creating and sharing algorithm tier lists. Users can drag algorithm cards between S-E tiers and see detailed information about each algorithm.

## Content Format Standards

### Algorithm Descriptions Structure
Each algorithm must have exactly **3 sections** in this order:

1. **Quick description.** - Brief explanation of what the algorithm solves
2. **Field notes.** - Interesting insights, historical context, practical applications
3. **Code references & demos.** - Links to documentation and interactive visualizations

**CRITICAL:** 
- Markdown files must NOT include H1 headings (`# Algorithm Name`) since the React component already displays the title
- Markdown files must NOT include "Time complexity" section since this is already in the JSON and displayed by the React component
- Files should start directly with `**Quick description.**`

### Markdown Link Format
- Use inline links: `[Wikipedia](https://en.wikipedia.org/wiki/...)` 
- NOT numbered references: `[Wikipedia][1]` with reference section
- Descriptive link text: `[VisuAlgo]`, `[USFCA]`, `[Red Blob Games]`

### JSON Structure
Each algorithm in `algorithms.json` has:
- `id`: kebab-case identifier
- `title`: Display name
- `year`: When invented (e.g., "1960", "300 BCE", "1959/1956")
- `author`: Who created it (e.g., "Hoare", "Euclid", "Moore/Dijkstra")
- `timeComplexity`: LaTeX math notation for KaTeX (e.g., "O(n \\log n)")
- `image`: SVG path for visual
- `descriptionPath`: Path to markdown file

### UI Components
- **Algorithm Cards**: Small draggable cards (120x100px) with image + title
- **Tooltip**: Click card → large modal with image, metadata (year/author/complexity), and full description
- **Tier Rows**: S-E ranking system for drag-and-drop organization
- **KaTeX Rendering**: Mathematical expressions in tooltips

### File Structure
```
frontend/
├── public/
│   ├── data/algorithms.json       # Algorithm metadata
│   ├── descriptions/*.md          # One file per algorithm
│   └── images/*.svg              # Placeholder images
└── src/components/               # React components
```

### Current Algorithm List (20 total)
1. BFS/Dijkstra, 2. DFS, 3. Kruskal, 4. Quicksort, 5. Mergesort, 6. Heaps/Heapsort, 7. Bubble Sort, 8. Bucketsort/Radixsort, 9. KMP/Aho-Corasick, 10. Hash Tables, 11. Binary Search Trees, 12. Euclid Algorithm, 13. Sieve of Eratosthenes, 14. Karatsuba/Strassen, 15. FFT, 16. Edit Distance, 17. Graham Scan, 18. Gradient Descent, 19. K-means, 20. Bogosort

### Development Setup
- Frontend: React + Vite with drag-and-drop (@hello-pangea/dnd)
- Math: KaTeX for complexity notation
- Deployment: GitHub Pages with base path `/tier-list/`
- Local dev: `cd frontend && npm run dev` → http://localhost:5173/tier-list/