# Algorithm Tier List Maker

An interactive website where users can create and save their own algorithm tier lists, while displaying global average rankings from all submissions.

## Features

- **Interactive Drag & Drop**: Organize algorithms into S-E tiers using intuitive drag-and-drop
- **Local Storage**: Save your rankings locally in your browser
- **Global Rankings**: Submit and view aggregated rankings from all users
- **Responsive Design**: Works on desktop and mobile devices
- **Extensible**: Easy to add new algorithms by updating JSON and adding images

## Architecture

### Frontend (React + Vite)
- Hosted on GitHub Pages
- Drag-and-drop tier list interface using @hello-pangea/dnd
- Algorithm data loaded from `public/data/algorithms.json`
- Markdown descriptions rendered from `public/descriptions/` files

### Backend (Cloudflare Worker)
- Serverless API for submitting and aggregating rankings
- KV storage for global ranking data
- CORS configured for GitHub Pages domain
- Rate limiting and validation

## Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Worker
```bash
cd worker
npm install
npm run dev
```

## Deployment

### Frontend
Automatically deployed to GitHub Pages via GitHub Actions when pushing to main branch.

### Worker
1. Install Wrangler CLI: `npm install -g wrangler`
2. Create KV namespace: `wrangler kv:namespace create TIER_LIST_KV`
3. Update `wrangler.toml` with your KV namespace ID
4. Deploy: `cd worker && wrangler deploy`
5. Update the API URL in the frontend TierList component

## Adding New Algorithms

1. Add image to `frontend/public/images/algorithm-name.svg`
2. Add description to `frontend/public/descriptions/algorithm-name.md`
3. Update `frontend/public/data/algorithms.json` with new entry
4. Update the valid algorithms list in `worker/src/index.js`

## Project Structure

```
├── frontend/                 # React frontend
│   ├── public/
│   │   ├── data/
│   │   │   └── algorithms.json
│   │   ├── descriptions/     # Markdown descriptions
│   │   └── images/          # Algorithm images
│   └── src/
│       └── components/
├── worker/                  # Cloudflare Worker API
│   └── src/
│       └── index.js
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Pages deployment
```

## Sample Algorithms Included

- Quicksort
- Merge Sort  
- Heapsort
- Bubble Sort
- Dijkstra's Algorithm
- A* Search
- Breadth-First Search
- Depth-First Search
