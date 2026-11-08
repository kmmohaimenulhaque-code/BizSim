# BIZSIM — Business Intelligence & Strategic Case Simulation Platform

**Version 2.4 — Universal Cross-Platform Release**

Zero-login, local-first corporate case simulation and live company intelligence engine.

## Repository Structure

```
BizSim/
├── README.md
├── package.json                  # Unified scripts (Web / Capacitor / Tauri / Electron)
├── capacitor.config.json         # Native iOS & Android container
├── electron-main.js              # Desktop wrapper
├── web/
│   ├── index.html                # Main application (see note below)
│   ├── manifest.json             # PWA Manifest
│   └── sw.js                     # Offline-first Service Worker
├── src-tauri/
│   ├── tauri.conf.json
│   ├── Cargo.toml
│   └── src/main.rs
└── backend-crawler/
    ├── requirements.txt
    └── edgar_ingest_pipeline.py  # SEC EDGAR 10-K/8-K + web ingest
```

### Important: Full `web/index.html`

The original single-file application is ~210–260 KB.  
Because of size limits when pushing through the available API, the full cleaned version is **not yet in the repo**.

**To restore the complete interactive app (recommended):**

1. Download the cleaned file: [bizsim-web-index-clean.html](https://github.com/kmmohaimenulhaque-code/BizSim) (or use the original ZIP you uploaded).
2. In GitHub → `web/index.html` → Edit → replace the entire content → Commit.

Or clone locally and replace the file, then push.

## Supported Platforms

1. **Web / Offline PWA** — open `web/index.html` or `npx serve web`
2. **iOS & Android** — Capacitor (`npx cap add ios && npx cap add android`)
3. **Desktop** (macOS `.dmg` / Windows `.msi` / Linux `.AppImage`) — Tauri or Electron
4. **Python SEC + Web Crawler** — `backend-crawler/`

## Quick Build Commands

```bash
# Mobile
npx cap add ios
npx cap add android
npx cap open ios

# Desktop
npm run tauri:build
# or: npm run electron

# Crawler
pip install -r backend-crawler/requirements.txt
python backend-crawler/edgar_ingest_pipeline.py
```

## Local-First Design

- MMKV + IndexedDB storage  
- Zero-login  
- State portability via Sync Token  
- Offline-first service worker  

Built for strategic decision simulation, live company research, and case-based learning.
