// ============================================================================
// ANKIT.OS — EDITABLE CONTENT  (single source of truth)
// ----------------------------------------------------------------------------
// THIS IS THE ONLY FILE YOU SHOULD EDIT TO REPLACE PLACEHOLDER CONTENT WITH
// YOUR REAL WORK. Everything marked with `[EDIT: ...]` is placeholder and
// ready to be swapped for your own projects, copy, and links.
//
// Sections:
//   1. Personal profile
//   2. Navigation (desktop icons + dock)
//   3. Desktop widgets & sticky note
//   4. Social media
//   5. Content studio
//   6. Projects (WORK — editable project slots)
//   7. Rejected concepts
//   8. Contact + LinkedIn
// ============================================================================

import type { AppKey } from './components/icons/OSIcon'

// ---------------------------------------------------------------------------
// 1. PERSONAL PROFILE
// ---------------------------------------------------------------------------
export const profile = {
  name: 'Ankit Bisht',
  osName: 'ANKIT.BISHT',
  role: 'Marketing & Social Media',
  status: 'ONLINE',
  bio:
    'I turn ideas into content, campaigns and social experiences—balancing a sharp point of view with the discipline to make it useful.',
  skills: [
    'Social Strategy',
    'Content Direction',
    'Campaign Concepts',
    'Editorial Planning',
    'Creative Briefs',
    'Testing & Iteration',
  ],
  // [EDIT] Replace with real roles. Keep it honest — no invented employers.
  experience: [
    {
      role: '[EDIT: Role]',
      org: '[EDIT: Company / freelance]',
      period: '[EDIT: dates]',
      note: '[EDIT: 1–2 lines about what you did and what you were proud of]',
    },
    {
      role: '[EDIT: Previous role]',
      org: '[EDIT: Previous company]',
      period: '[EDIT: dates]',
      note: '[EDIT: 1–2 lines]',
    },
  ],
  emailNote: 'Email placeholder — replace in src/content.ts → contact.email',
}

// ---------------------------------------------------------------------------
// 2. NAVIGATION — order of icons on the desktop and apps in the dock
// ---------------------------------------------------------------------------
export const navigation: { desktop: AppKey[]; dock: AppKey[] } = {
  desktop: [
    'about',
    'social',
    'work',
    'content',
    'linkedin',
  ],
  dock: [
    'about',
    'social',
    'work',
    'content',
    'linkedin',
  ],
}

// ---------------------------------------------------------------------------
// DESKTOP INTRODUCTION (shown in the WELCOME window)
// ---------------------------------------------------------------------------
export const intro = {
  name: 'Hi, I\'m Ankit.',
  role: 'Marketing & Social Media',
  tagline: 'I help brands grow with content\nthat connects, campaigns that perform,\nand strategies that make an impact.',
  tags: ['Social Media', 'Content Creation', 'Strategy', 'Brand Growth', 'Creative Thinking'],
  exploreLabel: 'Open my work',
}

// ---------------------------------------------------------------------------
// 3. DESKTOP WIDGETS & STICKY NOTE  (interface elements, not claims)
// ---------------------------------------------------------------------------
export const desktopWidgets = {
  now: {
    title: 'NOW.TXT',
    label: 'Currently working on...',
    text: 'Content systems, campaigns & social ideas.',
  },
  signal: {
    title: 'SIGNAL.LOG',
    items: [
      'audience behaviour',
      'content signals',
      'creative patterns',
      'campaign performance',
    ],
  },
  status: {
    title: 'STATUS.DAT',
    rows: [
      { label: 'SYSTEM', state: 'ONLINE' },
      { label: 'CONTENT', state: 'READY' },
      { label: 'STRATEGY', state: 'LIVE' },
      { label: 'ANALYTICS', state: 'WATCH' },
    ],
  },
}

export const stickyNote = {
  title: 'NOTE.TXT',
  text: 'Ideas are easy.\nMaking them work is the job.',
}

// ---------------------------------------------------------------------------
// 4. SOCIAL MEDIA  (how I think about social — not a project case study)
// ---------------------------------------------------------------------------
export const social = {
  intro:
    'How I think about social: attention is earned, then it has to be kept and put to work. These are conceptual placeholders for the thinking, not claims about results.',
  principles: [
    'Good content gets attention. Good social strategy gives people a reason to return.',
  ],
  sections: [
    {
      id: 'content',
      label: 'CONTENT',
      heading: 'Content',
      points: [
        '[EDIT: A principle about the content itself — the format, the rhythm, the usefulness.]',
        '[EDIT: A second point on how you approach the actual posts.]',
      ],
      placeholder: true,
    },
    {
      id: 'audience',
      label: 'AUDIENCE',
      heading: 'Audience',
      points: [
        '[EDIT: How you read the audience — who they are and what they are trying to get done.]',
        '[EDIT: What they scroll past, and why.]',
      ],
      placeholder: true,
    },
    {
      id: 'testing',
      label: 'TESTING',
      heading: 'Testing',
      points: [
        '[EDIT: What you test — one variable at a time.]',
        '[EDIT: How you read results — directional signal over vanity numbers.]',
      ],
      placeholder: true,
    },
    {
      id: 'iteration',
      label: 'ITERATION',
      heading: 'Iteration',
      points: [
        '[EDIT: How you compound learnings into the next piece.]',
        '[EDIT: How formats evolve based on how real people respond.]',
      ],
      placeholder: true,
    },
  ],
}

// ---------------------------------------------------------------------------
// 5. CONTENT STUDIO  (creative workspace — ideas and structures)
// ---------------------------------------------------------------------------
export const contentStudio = {
  intro:
    'The workspace where content ideas and reusable structures live. Every example is a clearly-labelled concept/placeholder showing the thinking process.',
  slots: [
    {
      id: 'reels',
      label: 'REELS',
      concept: true,
      items: [
        '[EDIT: A reel concept — the scene, the payoff, why it makes people watch twice]',
      ],
    },
    {
      id: 'carousels',
      label: 'CAROUSELS',
      concept: true,
      items: [
        '[EDIT: Slide-by-slide structure — cover, beats, payoff, CTA]',
        '[EDIT: A carousel that reframes a boring topic with a strong POV]',
      ],
    },
    {
      id: 'scripts',
      label: 'SCRIPTS',
      concept: true,
      items: [
        '[EDIT: A short 20–30s script — hook, tension, resolution, CTA]',
      ],
    },
    {
      id: 'ideas',
      label: 'CONTENT IDEAS',
      concept: true,
      items: [
        '[EDIT: A text-first post idea with a strong take]',
        '[EDIT: A post that turns a lesson into a story]',
        '[EDIT: A curiosity-gap hook]',
      ],
    },
    {
      id: 'systems',
      label: 'CONTENT SYSTEMS',
      concept: true,
      items: [
        '[EDIT: A repeatable content framework — the pattern, not just one post]',
        '[EDIT: A content pillar / angle system for a generic brand]',
      ],
    },
  ],
}

// ---------------------------------------------------------------------------
// 6. PROJECTS (WORK) — editable project slots, no invented projects
// ---------------------------------------------------------------------------
export const projects = [
  {
    id: 'project-1',
    slot: 'PROJECT 01',
    // [EDIT] Replace every field with a real project. Keep the structure.
    placeholder: true,
    name: '[PROJECT NAME]',
    category: '[CATEGORY]',
    year: '[YEAR]',
    role: '[ROLE]',
    type: '[TYPE]',
    overview: '[PROJECT DESCRIPTION]',
    stages: [
      { label: 'PROBLEM', text: '[EDIT] The situation — what was the challenge before any work began?' },
      { label: 'INSIGHT', text: '[EDIT] A sharp observation about the audience or the market.' },
      { label: 'IDEA', text: '[EDIT] The single big idea that everything hung on.' },
      { label: 'EXECUTION', text: '[EDIT] What you actually made and shipped.' },
      { label: 'RESULT', text: '[EDIT] What happened — qualitative or directional (no fabricated numbers).' },
      { label: 'LEARNING', text: '[EDIT] What this taught you and what you would repeat.' },
    ],
    visuals: '[SCREENSHOTS / LINKS]',
    tags: ['[EDIT: tag]', '[EDIT: tag]', '[EDIT: tag]'],
  },
  {
    id: 'project-2',
    slot: 'PROJECT 02',
    placeholder: true,
    name: '[PROJECT NAME]',
    category: '[CATEGORY]',
    year: '[YEAR]',
    role: '[ROLE]',
    type: '[TYPE]',
    overview: '[PROJECT DESCRIPTION]',
    stages: [
      { label: 'PROBLEM', text: '[EDIT] The situation before the work.' },
      { label: 'INSIGHT', text: '[EDIT] The sharp observation.' },
      { label: 'IDEA', text: '[EDIT] The big idea.' },
      { label: 'EXECUTION', text: '[EDIT] What you shipped.' },
      { label: 'RESULT', text: '[EDIT] Directional outcome.' },
      { label: 'LEARNING', text: '[EDIT] The lesson.' },
    ],
    visuals: '[SCREENSHOTS / LINKS]',
    tags: ['[EDIT: tag]', '[EDIT: tag]'],
  },
  {
    id: 'project-3',
    slot: 'PROJECT 03',
    placeholder: true,
    name: '[PROJECT NAME]',
    category: '[CATEGORY]',
    year: '[YEAR]',
    role: '[ROLE]',
    type: '[TYPE]',
    overview: '[PROJECT DESCRIPTION]',
    stages: [
      { label: 'PROBLEM', text: '[EDIT] The situation before the work.' },
      { label: 'INSIGHT', text: '[EDIT] The sharp observation.' },
      { label: 'IDEA', text: '[EDIT] The big idea.' },
      { label: 'EXECUTION', text: '[EDIT] What you shipped.' },
      { label: 'RESULT', text: '[EDIT] Directional outcome.' },
      { label: 'LEARNING', text: '[EDIT] The lesson.' },
    ],
    visuals: '[SCREENSHOTS / LINKS]',
    tags: ['[EDIT: tag]', '[EDIT: tag]'],
  },
]

// ---------------------------------------------------------------------------
// 10. REJECTED CONCEPTS (recycle bin — portfolio concept material)
// ---------------------------------------------------------------------------
export const rejectedIdeas = {
  intro:
    'A respectful graveyard for ideas that taught us something. These are portfolio concept examples, not real client history.',
  items: [
    {
      title: 'Make every post neon.',
      reason: 'Too much visual noise, not enough signal.',
      note: '[EDIT: What it taught you or what you salvaged from it]',
    },
    {
      title: 'The campaign is just a trend.',
      reason: 'Trends are ingredients, not the entire idea.',
      note: '[EDIT: The lesson carried forward]',
    },
    {
      title: '[EDIT: A rejected idea]',
      reason: '[EDIT: Why it was parked]',
      note: '[EDIT: Something useful it proved / disproved]',
    },
  ],
}

// ---------------------------------------------------------------------------
// 11. CONTACT + LINKEDIN
// ---------------------------------------------------------------------------
export const contact = {
  // [EDIT] Replace with your real email, then set emailIsPlaceholder = false
  email: 'hello@ankit.os',
  emailDisplay: 'hello@ankit.os',
  emailIsPlaceholder: true,
  // [EDIT] Add your real LinkedIn profile URL, then set linkedin.enabled = true
  linkedin: {
    url: 'https://www.linkedin.com/in/your-handle',
    enabled: false,
  },
}