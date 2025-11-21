# http-requests-ts

A tiny TypeScript-powered CLI & Docker image for **quickly verifying container network and DNS connectivity**.

## Why?
Containerized environments sometimes struggle with outbound HTTP or DNS resolution. This repo provides a minimal, self-contained tool you can run (locally or as a container) to confirm that:

1. Your container can resolve DNS names.
2. It can reach arbitrary URLs via HTTP/S.

## Features
- Simple CLI that performs DNS lookup and HTTP GET request to a target.
- Lightweight Node-based image (< 100 MB).
- Zero external depends beyond Node.

## Usage
### Run locally
```bash
npm install            # or pnpm / yarn
npm run build
node dist/index.js 
```

### Run with Docker
```bash
docker build -t net-check .
docker run --rm net-check https://example.com
```

Outputs DNS lookup result and HTTP status.

## Project structure
- `src/index.ts` – main CLI logic
- `Dockerfile` – multi-stage build producing a small runtime
- `.gitignore`, `.dockerignore` – housekeeping

## License
MIT
