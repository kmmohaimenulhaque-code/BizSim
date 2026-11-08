# BIZSIM — Business Intelligence & Strategic Case Simulation Platform

**Version 2.4 — Universal Cross-Platform Release**

Zero-login, local-first corporate case simulation and live company intelligence engine.

## Repository Structure

```
bizsim-universal/
├── README.md
├── package.json                  # Unified scripts for Web, Capacitor, Tauri & Electron
├── capacitor.config.json         # Native iOS & Android container
├── electron-main.js              # Desktop wrapper (Windows/macOS/Linux)
├── web/
│   ├── index.html                # Complete BIZSIM Swiss-Modernist Web & Desktop Application
│   ├── manifest.json             # Installable PWA Manifest
│   └── sw.js                     # Offline-First Service Worker
├── src-tauri/
│   ├── tauri.conf.json           # Native Rust Desktop bundler
│   ├── Cargo.toml
│   └── src/main.rs
└── backend-crawler/
    ├── requirements.txt
    └── edgar_ingest_pipeline.py  # Autonomous SEC 10-K/8-K & Web Case Synthesis
```

> **Note on `web/index.html`**: The full production single-file application (~210–260 KB) is provided in the original BIZSIM-Universal-Suite-v2.4.zip. A lightweight placeholder is currently in the repo. Replace `web/index.html` with the extracted version from the ZIP for the complete interactive experience.

## Supported Platforms

1. **Web / Offline PWA**: Open `web/index.html` directly or `npx serve web`
2. **iOS & Android**: Capacitor (`npx cap add ios && npx cap add android`)
3. **Desktop (macOS .dmg / Windows .msi / Linux .AppImage)**: Tauri or Electron
4. **Python SEC EDGAR + Web Crawler**: `backend-crawler/`

## Quick Build Commands

```bash
# 1. iOS & Android
npx cap add ios
npx cap add android
npx cap open ios

# 2. Linux / macOS / Windows
npm run tauri:build
# or: npm run electron

# 3. Python SEC Crawler
pip install -r backend-crawler/requirements.txt
python backend-crawler/edgar_ingest_pipeline.py
```

## Local-First Design

- MMKV + IndexedDB storage
- Zero-login
- State portability via Sync Token
- Offline-first service worker

Built for strategic decision simulation, live company research, and case-based learning.
