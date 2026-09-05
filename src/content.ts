// ============================================================================
// ANKIT.OS — EDITABLE CONTENT
// ----------------------------------------------------------------------------
// THIS IS THE ONLY FILE YOU SHOULD EDIT TO REPLACE PLACEHOLDER CONTENT
// WITH YOUR REAL WORK. Everything marked with `[EDIT: ...]` is placeholder
// and ready to be swapped for your own projects, copy, and links.
// ============================================================================

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------
export const contact = {
  // [EDIT] Replace with your real email
  email: 'hello@ankit.os',
  emailDisplay: 'hello@ankit.os',
  // [EDIT] Add your real LinkedIn profile URL, then set linkedin.enabled = true
  linkedin: {
    url: 'https://www.linkedin.com/in/your-handle',
    enabled: false,
  },
}

// ---------------------------------------------------------------------------
// ABOUT_ME.TXT
// ---------------------------------------------------------------------------
export const about = {
  name: 'Ankit Bisht',
  role: 'Marketing & Social Media',
  intro:
    'I am a marketer who thinks in systems. I turn raw ideas into content, campaigns and social experiences that people actually want to engage with — not just broadcast at.',
  experience: [
    {
      // [EDIT] Replace with your real roles
      role: 'Marketing & Social Media',
      org: '[EDIT: Your company / freelance]',
      period: '[EDIT: dates]',
      note: '[EDIT: 1-2 lines about what you did and what you were proud of]',
    },
    {
      role: '[EDIT: Previous role]',
      org: '[EDIT: Previous company]',
      period: '[EDIT: dates]',
      note: '[EDIT: 1-2 lines]',
    },
  ],
  skills: [
    'Content strategy',
    'Social media management',
    'Campaign planning',
    'Copywriting & hooks',
    'Reels & short-form video',
    'Community building',
    'Analytics & testing',
    'Creative direction',
  ],
  whatIDo:
    'I plan content in systems, write hooks that stop the scroll, build campaigns with a clear idea at the centre, and test relentlessly so the next iteration beats the last.',
  // [EDIT] Replace the email placeholder in contact.email too
  emailNote: 'Email placeholder — replace in src/content.ts',
}

// ---------------------------------------------------------------------------
// DESKTOP INTRO
// ---------------------------------------------------------------------------
export const intro = {
  name: 'Hi, I\'m Ankit.',
  role: 'Marketing & Social Media',
  tagline: 'I turn ideas into content, campaigns and social experiences.',
  exploreLabel: 'Explore my work',
}

// ---------------------------------------------------------------------------
// DESKTOP WIDGETS — small always-on desktop elements (interface, not claims)
// ---------------------------------------------------------------------------
export const desktopWidgets = {
  now: {
    title: 'NOW.TXT',
    label: 'Currently working on...',
    text: 'Content systems, campaigns & social ideas.',
  },
  signal: {
    title: 'SIGNAL.LOG',
    text: 'Good content connects. Great content gives people a reason to care.',
  },
  status: {
    title: 'STATUS.DAT',
    rows: [
      { label: 'CONTENT', state: 'READY' },
      { label: 'CAMPAIGNS', state: 'ACTIVE' },
      { label: 'STRATEGY', state: 'ONLINE' },
    ],
  },
}

// ---------------------------------------------------------------------------
// WORK.EXE
// ---------------------------------------------------------------------------
export const workProjects = [
  {
    id: 'signal-noise',
    kicker: 'CASE STUDY 01',
    title: 'Signal / Noise',
    // [EDIT] Replace the placeholder pipeline with your real project
    placeholder: true,
    stages: [
      { label: 'PROBLEM', text: '[EDIT] The situation — what was the challenge before any work began?' },
      { label: 'INSIGHT', text: '[EDIT] A sharp observation about the audience or the market.' },
      { label: 'IDEA', text: '[EDIT] The single big idea that everything hung on.' },
      { label: 'EXECUTION', text: '[EDIT] What you actually made and shipped.' },
      { label: 'RESULT', text: '[EDIT] What happened — qualitative or directional (no fabricated numbers).' },
      { label: 'LEARNING', text: '[EDIT] What this taught you and what you would repeat.' },
    ],
    tags: ['[EDIT: tag]', '[EDIT: tag]', '[EDIT: tag]'],
  },
  {
    id: 'orbit-social',
    kicker: 'CASE STUDY 02',
    title: 'Orbit Social',
    placeholder: true,
    stages: [
      { label: 'PROBLEM', text: '[EDIT] The situation before the work.' },
      { label: 'INSIGHT', text: '[EDIT] The sharp observation.' },
      { label: 'IDEA', text: '[EDIT] The big idea.' },
      { label: 'EXECUTION', text: '[EDIT] What you shipped.' },
      { label: 'RESULT', text: '[EDIT] Directional outcome.' },
      { label: 'LEARNING', text: '[EDIT] The lesson.' },
    ],
    tags: ['[EDIT: tag]', '[EDIT: tag]'],
  },
  {
    id: 'content-grid',
    kicker: 'CASE STUDY 03',
    title: 'The Content Grid',
    placeholder: true,
    stages: [
      { label: 'PROBLEM', text: '[EDIT] The situation before the work.' },
      { label: 'INSIGHT', text: '[EDIT] The sharp observation.' },
      { label: 'IDEA', text: '[EDIT] The big idea.' },
      { label: 'EXECUTION', text: '[EDIT] What you shipped.' },
      { label: 'RESULT', text: '[EDIT] Directional outcome.' },
      { label: 'LEARNING', text: '[EDIT] The lesson.' },
    ],
    tags: ['[EDIT: tag]', '[EDIT: tag]'],
  },
]

// ---------------------------------------------------------------------------
// CONTENT_STUDIO
// ---------------------------------------------------------------------------
export const contentStudio = {
  intro:
    'This is how I think about social content — the mechanics behind pretty posts. Every example below is a conceptual placeholder showing the thinking process.',
  // [EDIT] Replace each concept with a real example
  slots: [
    {
      id: 'reel-concepts',
      label: 'REEL CONCEPTS',
      placeholder: true,
      items: [
        '[EDIT: A video concept idea — the scene, the payoff, why it would make people watch twice]',
        '[EDIT: Another reel concept with a format twist]',
      ],
    },
    {
      id: 'hooks',
      label: 'HOOKS',
      placeholder: true,
      items: [
        '[EDIT: A scroll-stopping hook line — first 2 seconds]',
        '[EDIT: Another hook written out of a common audience pain point]',
        '[EDIT: A curiosity-gap hook]',
      ],
    },
    {
      id: 'carousels',
      label: 'CAROUSEL CONCEPTS',
      placeholder: true,
      items: [
        '[EDIT: Slide-by-slide structure idea — cover, beats, payoff, CTA]',
        '[EDIT: A carousel that reframes a boring topic with a strong POV]',
      ],
    },
    {
      id: 'social-posts',
      label: 'SOCIAL POSTS',
      placeholder: true,
      items: [
        '[EDIT: A text-first post idea with a strong take]',
        '[EDIT: A post that turns a lesson into a story]',
      ],
    },
    {
      id: 'scripts',
      label: 'SCRIPTS',
      placeholder: true,
      items: [
        '[EDIT: A short 20-30s video script — hook, tension, resolution, CTA]',
      ],
    },
    {
      id: 'frameworks',
      label: 'CONTENT FRAMEWORKS',
      placeholder: true,
      items: [
        '[EDIT: A repeatable content framework idea — the pattern, not just one post]',
        '[EDIT: A content pillar / angle system for a generic brand]',
      ],
    },
  ],
}

// ---------------------------------------------------------------------------
// CAMPAIGNS.DIR
// ---------------------------------------------------------------------------
export const campaigns = {
  intro:
    'Campaign thinking from objective to execution. These are conceptual placeholders showing how I structure a campaign before any real one is locked in.',
  // [EDIT] Replace each with a real campaign
  items: [
    {
      id: 'camp1',
      title: '[EDIT: Campaign name]',
      placeholder: true,
      objective: '[EDIT: The business objective this campaign serves]',
      audience: '[EDIT: Primary audience + what they care about]',
      bigIdea: '[EDIT: The single central idea of the campaign]',
      creativeDirection: '[EDIT: The visual / tone / language direction]',
      execution: '[EDIT: Channels, content formats, cadence, how it comes to life]',
    },
    {
      id: 'camp2',
      title: '[EDIT: Campaign name]',
      placeholder: true,
      objective: '[EDIT: The business objective]',
      audience: '[EDIT: Audience]',
      bigIdea: '[EDIT: Big idea]',
      creativeDirection: '[EDIT: Creative direction]',
      execution: '[EDIT: Execution plan]',
    },
    {
      id: 'camp3',
      title: '[EDIT: Campaign name]',
      placeholder: true,
      objective: '[EDIT: The business objective]',
      audience: '[EDIT: Audience]',
      bigIdea: '[EDIT: Big idea]',
      creativeDirection: '[EDIT: Creative direction]',
      execution: '[EDIT: Execution plan]',
    },
  ],
}

// ---------------------------------------------------------------------------
// STRATEGY.SYS
// ---------------------------------------------------------------------------
export const strategy = {
  intro:
    'How I think. Sharp and human — the frameworks I actually use, not corporate noise.',
  sections: [
    {
      id: 'audience',
      title: 'Audience thinking',
      heading: 'Audience thinking',
      body: [
        'I start with the person, not the platform.',
        'The useful questions are: What are they trying to get done? What interrupts their day? What would make them actually stop? I write for one specific human and let everyone else self-select in.',
        'I avoid "everyone" and "reaching people" — I chase relevance and recognition instead.',
      ],
    },
    {
      id: 'content',
      title: 'Content strategy',
      heading: 'Content strategy',
      body: [
        'Content is not a posting schedule. It is a store of value that compounds — education, entertainment, proof, and community all have different jobs.',
        'I build repeatable formats and pillars, so quality is consistent and the brand voice stays recognisable across every post.',
      ],
    },
    {
      id: 'campaigns',
      title: 'Campaign planning',
      heading: 'Campaign planning',
      body: [
        'Every campaign needs one central idea that survives contact with the audience. Setup, distribution, and measurement all serve that idea.',
        'I plan backwards from the behaviour I want to change, then let the message and format follow.',
      ],
    },
    {
      id: 'iteration',
      title: 'Testing & iteration',
      heading: 'Testing & iteration',
      body: [
        'I would rather ship and learn than polish and delay. Change one variable at a time, measure what actually moved, and kill what flops without drama.',
        'Iteration is the strategy, not the fallback.',
      ],
    },
  ],
}

// ---------------------------------------------------------------------------
// ANALYTICS.DAT
// ---------------------------------------------------------------------------
export const analytics = {
  intro:
    'What I measure and why. These are conceptual / placeholder frameworks — no invented real performance numbers.',
  startingWith:
    'I would rather track the few metrics that explain behaviour than hoard every number. Vanity reach is out; quality of attention is in.',
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
    'All figures shown anywhere in this portfolio would reflect real, labelled data from my actual accounts — nothing is invented.',
}

// ---------------------------------------------------------------------------
// REJECTED_IDEAS
// ---------------------------------------------------------------------------
export const rejectedIdeas = {
  intro:
    'Ideas that were pitched, explored, and rejected. Showing the process — because most of the work is the version you never see. These are conceptual placeholders.',
  // [EDIT] Replace with real (or keep conceptual) rejected ideas
  items: [
    {
      title: '[EDIT: A rejected idea]',
      reason: '[EDIT: Why it was rejected — the flaw you spotted]',
      note: '[EDIT: What it taught you or what you salvaged from it]',
    },
    {
      title: '[EDIT: A rejected idea]',
      reason: '[EDIT: Why it did not make the cut]',
      note: '[EDIT: The lesson carried forward]',
    },
    {
      title: '[EDIT: A rejected idea]',
      reason: '[EDIT: Why it was parked]',
      note: '[EDIT: Something useful it proved / disproved]',
    },
  ],
}
