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

- **WORK.EXE** — editable project slots: name, category, year, role, type, overview and a Problem → Insight → Idea → Execution → Result → Learning pipeline, plus a visuals placeholder
- **ABOUT ANKIT** — bio, skills, editable experience, contact
- **SOCIAL MEDIA** — how social thinking works: content, audience, testing, iteration
- **CAMPAIGN LAB** — campaign framework (objective → measurement), CONCEPT PROJECT blueprints only
- **CONTENT STUDIO** — creative workspace: reels, carousels, scripts, content ideas, content systems
- **STRATEGY** — concise personal frameworks (audience, content lanes, testing, campaign)
- **ANALYTICS** — proof, not noise — a metric framework with no invented numbers
- **REJECTED CONCEPTS** — recycle bin for rejected ideas, shown as concept material
- **CONTACT** — email (copy button) + LinkedIn, editable placeholders
- **LINKEDIN** — present but disabled until a real URL is added

## Replacing placeholder content

**Everything you need to edit lives in one file: `src/content.ts`.**

It is organised into: personal profile, navigation (desktop icons + dock order), desktop widgets, social media, content studio, campaign concepts, strategy frameworks, analytics framing, project slots, rejected concepts, and contact/LinkedIn. Every placeholder is marked with `[EDIT: ...]` and tagged visually as `● placeholder` in the app. Just replace the placeholders with your real work — no other files need changes.

### To enable LinkedIn

1. In `src/content.ts`, set `contact.linkedin.url` to your real profile URL.
2. Set `contact.linkedin.enabled = true`.

The dock/desktop icons light up and become clickable.

### To change your email

Update `contact.email`, `contact.emailDisplay`, and set `contact.emailIsPlaceholder = false` in `src/content.ts`. The CONTACT app shows a copy button rather than a raw mailto link.

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
    Desktop.tsx         desktop icons + welcome window + widgets + sticky note
    Window.tsx          draggable/resizable/minimizable window
    Boot.tsx            quick pixel boot splash
    Avatar.tsx          pixel avatar (inline SVG)
    icons/OSIcon.tsx    pixel-art app icons
    apps/               one component per app window
```
