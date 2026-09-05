# ANKIT.OS

A premium interactive portfolio built as a personal operating system — a dark, retro pixel-art desktop where each icon opens a real, working window into Ankit's marketing & social media work.

Built with **React + TypeScript + Vite**. No heavy dependencies — just clean components and CSS.

## Run locally

```bash
npm install
npm run dev
```

Open the printed URL (default http://localhost:5173).

Other commands:

```bash
npm run build     # typecheck + production build
npm run preview   # serve the production build
npm run lint      # oxlint
```

## How it works

Click a desktop icon or a dock app to open a draggable, stackable OS window (drag by the title bar, resize with the corner handle, minimize or close via the traffic-light buttons).

- **WORK.EXE** — case studies structured as Problem → Insight → Idea → Execution → Result → Learning
- **CONTENT_STUDIO** — how I think about reels, hooks, carousels, scripts, frameworks
- **CAMPAIGNS.DIR** — campaign concepts: objective, audience, big idea, creative direction, execution
- **STRATEGY.SYS** — concise "how I think" frameworks
- **ANALYTICS.DAT** — what I measure and why (conceptual, no invented numbers)
- **ABOUT_ME.TXT** — bio, experience, skills, contact
- **REJECTED_IDEAS** — recycle bin for rejected ideas, showing process
- **LINKEDIN** — present but disabled until a real URL is added

## Replacing placeholder content

**Everything you need to edit lives in one file: `src/content.ts`.**

That file contains your contact email, LinkedIn URL, intro, about copy, all case study pipelines, content studio examples, campaigns, analytics framing, and rejected ideas. Every placeholder is marked with `[EDIT: ...]` and tagged visually as `● placeholder` in the app. Just replace the placeholders with your real work — no other files need changes.

### To enable LinkedIn

1. In `src/content.ts`, set `contact.linkedin.url` to your real profile URL.
2. Set `contact.linkedin.enabled = true`.

The dock icon will light up and become clickable.

### To change your email

Update `contact.email` and `contact.emailDisplay` in `src/content.ts`.

## Structure

```
src/
  main.tsx              entry
  App.tsx               window manager + shell wiring
  content.ts            ALL editable content (placeholders live here)
  index.css             theme, pixel-art system, responsive styles
  components/
    SystemBar.tsx       top system bar with live clock
    Dock.tsx            bottom dock (linkedin disabled until enabled)
    Desktop.tsx         desktop icons + intro + avatar
    Window.tsx          draggable/resizable/minimizable window
    Boot.tsx            quick pixel boot splash
    Avatar.tsx          pixel avatar (inline SVG)
    icons/OSIcon.tsx    pixel-art app icons
    apps/               one component per app window
```
