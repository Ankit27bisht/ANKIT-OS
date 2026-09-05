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
//   6. Campaign lab
//   7. Strategy
//   8. Analytics
//   9. Projects (WORK — editable project slots)
//  10. Rejected concepts
//  11. Contact + LinkedIn
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
    'campaigns',
    'content',
    'strategy',
    'analytics',
    'linkedin',
    'bin',
  ],
  dock: [
    'work',
    'about',
    'social',
    'campaigns',
    'content',
    'strategy',
    'analytics',
    'bin',
    'mail',
    'linkedin',
  ],
}

// ---------------------------------------------------------------------------
// DESKTOP INTRODUCTION (shown in the WELCOME window)
// ---------------------------------------------------------------------------
export const intro = {
  name: 'Hi, I\'m Ankit.',
  role: 'Marketing & Social Media',
  tagline: 'I turn ideas into content, campaigns and social experiences.',
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
// 6. CAMPAIGN LAB  (campaign framework + CONCEPT PROJECT blueprints only)
// ---------------------------------------------------------------------------
export const campaigns = {
  intro:
    'Campaign thinking from objective to measurement. These are conceptual blueprints marked CONCEPT PROJECT — never presented as real shipped work.',
  items: [
    {
      id: 'camp1',
      title: '[EDIT: Campaign name]',
      concept: true,
      objective: '[EDIT: The business objective this campaign serves]',
      audience: '[EDIT: Primary audience + what they care about]',
      insight: '[EDIT: The sharp observation the campaign is built on]',
      bigIdea: '[EDIT: The single central idea of the campaign]',
      execution: '[EDIT: Channels, formats, cadence, how it comes to life]',
      measurement: '[EDIT: The one or two behaviours/outcomes you would watch]',
    },
    {
      id: 'camp2',
      title: '[EDIT: Campaign name]',
      concept: true,
      objective: '[EDIT: The business objective]',
      audience: '[EDIT: Audience]',
      insight: '[EDIT: Insight]',
      bigIdea: '[EDIT: Big idea]',
      execution: '[EDIT: Execution plan]',
      measurement: '[EDIT: Measurement]',
    },
    {
      id: 'camp3',
      title: '[EDIT: Campaign name]',
      concept: true,
      objective: '[EDIT: The business objective]',
      audience: '[EDIT: Audience]',
      insight: '[EDIT: Insight]',
      bigIdea: '[EDIT: Big idea]',
      execution: '[EDIT: Execution plan]',
      measurement: '[EDIT: Measurement]',
    },
  ],
}

// ---------------------------------------------------------------------------
// 7. STRATEGY  (how I think — frameworks, not textbooks)
// ---------------------------------------------------------------------------
export const strategy = {
  intro:
    'How I think. Sharp and human — the frameworks I actually use, not corporate noise.',
  sections: [
    {
      id: 'audience',
      label: 'AUDIENCE',
      lead: 'Start with the moment, tension or desire — not just a demographic label.',
      notes: [
        '[EDIT: Replace with your own line on audience thinking]',
      ],
    },
    {
      id: 'content',
      label: 'CONTENT',
      lead: 'Build content lanes that earn attention differently:',
      lanes: [
        { name: 'UTILITY', note: '[EDIT: practical value people can take and use]' },
        { name: 'POV', note: '[EDIT: a clear point of view people can align with or argue with]' },
        { name: 'PROOF', note: '[EDIT: evidence and specifics that build trust]' },
        { name: 'PARTICIPATION', note: '[EDIT: hooks that invite people to add to the story]' },
      ],
    },
    {
      id: 'testing',
      label: 'TESTING',
      lead: 'Keep the hypothesis visible. Change one meaningful variable. Learn from the signal.',
      notes: [
        '[EDIT: Replace with your own line on testing]',
      ],
    },
    {
      id: 'campaign',
      label: 'CAMPAIGN',
      lead: 'Give the idea a world, then give that world multiple ways to enter.',
      notes: [
        '[EDIT: Replace with your own line on campaign thinking]',
      ],
    },
  ],
}

// ---------------------------------------------------------------------------
// 8. ANALYTICS  (proof, not noise — NO invented performance numbers)
// ---------------------------------------------------------------------------
export const analytics = {
  tagline: 'PROOF, NOT NOISE.',
  intro:
    'What I measure and why. This is a metric framework and a testing philosophy — never fabricated campaign performance.',
  sections: [
    {
      id: 'measure',
      label: 'WHAT I WOULD MEASURE',
      note: 'Quality of attention beats volume. I watch things that imply engagement, not just reach.',
      points: [
        'Watch time, completion rate, dwell time, saves and shares.',
        'Signals that people acted, rather than just passed by.',
      ],
    },
    {
      id: 'test',
      label: 'WHAT I WOULD TEST',
      note: 'One variable at a time, with the hypothesis written down first.',
      points: [
        'Hooks, formats, length, calls to action.',
        'Sequence changes — not everything with a new idea at once.',
      ],
    },
    {
      id: 'signals',
      label: 'WHAT SIGNALS MATTER',
      note: 'Comments, DMs, saves, replies and follows that indicate real resonance.',
      points: [
        'Repeat behaviour — do people come back for the next one?',
        'Depth of conversation over size of the audience.',
      ],
    },
    {
      id: 'optimize',
      label: 'HOW I WOULD OPTIMIZE',
      note: 'Iteration is the strategy. Kill what flops without drama; double down on signal.',
      points: [
        'Use directional results to shape the next round.',
        'Feed every learning back into the content system.',
      ],
    },
  ],
  metricHeadline: 'METRIC FRAMEWORK — WHAT I WOULD WATCH',
  metrics: [
    {
      metric: 'Quality of attention',
      what: 'Watch time, completion rate, dwell time, saves and shares — signs people actually engaged, not just passed by.',
    },
    {
      metric: 'Format performance',
      what: 'Which formats (reels, carousels, static, text posts) earn disproportionate attention from the same audience.',
    },
    {
      metric: 'Audience response',
      what: 'Comments, DMs, saves, replies and follows that indicate resonance — not just likes.',
    },
    {
      metric: 'Testing & iteration',
      what: 'What I tested, one variable at a time, and what the directional result tells us to double down on or kill.',
    },
  ],
  note:
    'This portfolio never fabricates campaign performance. Any figures shown anywhere would reflect real, labelled data from my actual accounts.',
}

// ---------------------------------------------------------------------------
// 9. PROJECTS (WORK) — editable project slots, no invented projects
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