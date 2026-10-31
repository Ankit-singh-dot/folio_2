/** All the words on the site. Edit here, not in the pages. */

export const person = {
  name: "Ankit Raj",
  email: "ankitrajdihara123@gmail.com",
  description:
    "Software engineer in Noida working on websites and AI products. Five-time hackathon winner, currently at The Founders.",
};

export const links = {
  github: "https://github.com/Ankit-singh-dot",
  linkedin: "https://www.linkedin.com/in/ankit-raj-4b1343320",
  instagram: "https://www.instagram.com/_ankitsig/reels/",
  x: "https://x.com/_ankitstwt",
  resume:
    "https://drive.google.com/file/d/1NvL39s-Xi7_xkxAqjZZVUgxCQYEDvAcC/view?usp=sharing",
};

export const nav = [
  { label: "About", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Websites", href: "/websites" },
  { label: "Open source", href: "/open-source" },
  { label: "Learning", href: "/learning" },
  { label: "Achievements", href: "/achievements" },
];

export type Website = {
  name: string;
  what: string;
  image: string;
  href: string;
};

export const websites: Website[] = [
  {
    name: "The Founders",
    what: "Startup ecosystem and investor platform",
    image: "/work/founders.jpg",
    href: "https://thefounders.co.in/",
  },
  {
    name: "NOVA",
    what: "AI developer tool for the terminal",
    image: "/work/nova.jpg",
    href: "https://runnova.ai/",
  },
  {
    name: "Gapoo",
    what: "Raw honey, sold direct to customers",
    image: "/work/gapoo.jpg",
    href: "https://gapoo.in/",
  },
  {
    name: "Foundershala Ventures",
    what: "Investment banking and M&A advisory",
    image: "/work/foundershala.jpg",
    href: "https://www.foundershalaventures.com/",
  },
  {
    name: "Kinjo",
    what: "Community for founders and builders",
    image: "/work/kinjo.jpg",
    href: "https://my-app-sm5d.vercel.app",
  },
  {
    name: "Untapd",
    what: "Strategic marketing firm",
    image: "/work/untapd.jpg",
    href: "https://untapd-six.vercel.app/",
  },
  {
    name: "Global Foodbasket",
    what: "Imported snacks store",
    image: "/work/foodbasket.jpg",
    href: "https://global-foodbasket-weld.vercel.app/",
  },
];

export type Project = {
  slug: string;
  name: string;
  short: string;
  proof: string;
  thumb: string;
  intro: string;
  sections: { heading: string; body: string }[];
  images?: { src: string; alt: string; caption: string; width: number; height: number }[];
  stack: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "codepush",
    name: "CodePush",
    short: "Solve a problem on LeetCode, and your solution lands on GitHub by itself.",
    proof: "66 users, rated 5.0 on the Chrome Web Store",
    thumb: "/projects/codepush.jpg",
    intro:
      "Solve a problem on LeetCode, GeeksforGeeks, Codeforces or CodeChef, and CodePush commits your solution to GitHub. It also tracks progress and schedules revisions. It has 66 users and a 5.0 rating from 3 reviews on the Chrome Web Store.",
    sections: [
      {
        heading: "Why I made it",
        body: "I wanted a record of my DSA practice without copying code into a repo by hand. My own practice repository is now committed by the extension.",
      },
    ],
    images: [
      {
        src: "/projects/codepush.jpg",
        alt: "The CodePush extension popup with a Connect with GitHub button",
        caption: "The extension's sign-in screen.",
        width: 1280,
        height: 800,
      },
    ],
    stack: "JavaScript, Chrome Manifest V3, GitHub API",
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/codepush/ndncchdohccdbnefhoonjaiminacfjdo",
      },
      { label: "A repo it maintains", href: "https://github.com/Ankit-singh-dot/dsa" },
    ],
  },
  {
    slug: "flow-ai",
    name: "Flow AI",
    short: "An AI CRM that can call all your leads at the same time and work out who is serious.",
    proof: "1st place at Bennett University, against 50+ teams",
    thumb: "/projects/flow-ai.jpg",
    intro:
      "Flow AI started as a hackathon project and took first place at Bennett University against 50+ teams. It collects leads from different channels, works out who is serious, and follows up with them. It hasn't launched yet.",
    sections: [
      {
        heading: "Parallel calling",
        body: "AI voice agents built on VAPI and Twilio can call many leads at the same time. This was the part that got the biggest reaction from the judges.",
      },
      {
        heading: "Scoring leads",
        body: "Gemini reads each conversation for sentiment and buying intent and keeps a lead score from 0 to 100 up to date. Leads come in through WhatsApp, the web, email and phone.",
      },
      {
        heading: "Handing over to people",
        body: "When a conversation needs a person, the bot hands it off and the agent gets the full history, along with any tasks and appointments on that lead.",
      },
    ],
    stack: "Next.js, PostgreSQL, Prisma, Twilio, VAPI, Gemini",
    links: [{ label: "Source code", href: "https://github.com/Ankit-singh-dot/AI_ASSI" }],
  },
  {
    slug: "astrovault",
    name: "AstroVault",
    short: "Reads every prompt before an AI model does, and scores it for jailbreaks and data leaks.",
    proof: "Five Docker services behind one gateway",
    thumb: "/projects/astrovault.jpg",
    intro:
      "AstroVault sits between an application and an AI model. Every prompt gets a threat score for things like jailbreaks, prompt injection and data leaks, and the score decides what happens to it.",
    sections: [
      {
        heading: "How it decides",
        body: "A Python service asks Gemini for a strict JSON answer with a score, a category and a confidence. Below 50 the prompt goes through. From 50 to 74 it goes through but gets logged at high priority. From 75 to 89 the model never sees it. At 90 and above the connection is dropped and the session is locked.",
      },
      {
        heading: "When the classifier is down",
        body: "If the Gemini call fails or times out, the gateway falls back to compiled regex rules for common attacks like base64 payloads and system prompt leaks. Coverage gets weaker, but the checks don't disappear.",
      },
      {
        heading: "How it's isolated",
        body: "It runs as five Docker services behind one gateway. The red team and the classifier sit on separate networks with no route between them, and containers run read-only. Audit entries are hashed together with the entry before them, so editing an old log breaks the chain.",
      },
    ],
    stack: "TypeScript, Node.js, Python, Docker, Next.js, Gemini",
    links: [{ label: "Source code", href: "https://github.com/Ankit-singh-dot/AstroVault" }],
  },
  {
    slug: "aegis",
    name: "AEGIS",
    short: "Catches ransomware by measuring how random your files are becoming, then cuts its network and restores them.",
    proof: "Demo on video",
    thumb: "/projects/aegis-network.jpg",
    intro:
      "Antivirus usually looks for known malware. AEGIS looks at what is being written to disk. Encrypted data is close to random, and randomness can be measured, so it doesn't matter what the malware is called.",
    sections: [
      {
        heading: "Detecting it",
        body: "AEGIS watches file writes inside a container and calculates their Shannon entropy. Anything above roughly 7.5 bits per byte gets treated as encryption in progress.",
      },
      {
        heading: "Stopping it",
        body: "It cuts the container's network so nothing can be sent out, kills the process tree, removes the files the attacker dropped, and restores from a snapshot taken before the workload started.",
      },
      {
        heading: "Testing it",
        body: "I wrote a bash simulator that behaves like real ransomware, including the encryption loop and the ransom note, so I could run the whole thing end to end. The orchestrator is TypeScript on the Docker API and streams events to a dashboard over SSE.",
      },
    ],
    images: [
      {
        src: "/projects/aegis-network.jpg",
        alt: "Terminal showing pings to 8.8.8.8 succeeding and then failing with Network unreachable",
        caption: "Pings from the target container stop with “Network unreachable”.",
        width: 2880,
        height: 1800,
      },
      {
        src: "/projects/aegis-restore.jpg",
        alt: "Terminal showing an encrypted file as unreadable text, then the same file readable again",
        caption: "From the demo video: the encrypted file, then the same file restored.",
        width: 2880,
        height: 1800,
      },
    ],
    stack: "TypeScript, Docker API, Next.js, SSE, Bash",
    links: [
      { label: "Watch the demo", href: "https://youtu.be/KQ5bLMOQMSo" },
      { label: "Source code", href: "https://github.com/Ankit-singh-dot/Ransomware" },
    ],
  },
];

export const sideProjects = [
  {
    name: "BlogKaro",
    short: "A platform for writers to publish a blog and sell digital products.",
    thumb: "/projects/blogkaro.jpg",
    href: "https://blogkaro-one.vercel.app",
  },
  {
    name: "TechnieDox",
    short: "Generates documentation from code and scores its quality as it goes.",
    thumb: "/projects/techniedox.jpg",
    href: "https://technie-dox.vercel.app",
  },
  {
    name: "GrowEasy CSV Importer",
    short: "Upload any messy CSV of leads, and an LLM maps the columns into a clean CRM format.",
    thumb: "/projects/groweasy.jpg",
    href: "https://grow-easy-rho.vercel.app",
  },
  {
    name: "Social Knowledge Base",
    short: "A chat interface for asking questions about ingested social media data.",
    thumb: "/projects/socialchat.jpg",
    href: "https://socialchat-xi.vercel.app",
  },
];

export const hackathons = [
  {
    event: "Bennett University",
    result: "1st place",
    date: "March 2026",
    note: "Flow AI, 50+ teams, 24 hours. The best moment was the judges' faces when we demoed parallel calling.",
  },
  {
    event: "Hack'O Clock 2.0, IILM University",
    result: "1st place",
    date: "February 2026",
    note: "Entered solo.",
  },
  {
    event: "Jamia Hamdard",
    result: "Winner",
    date: "February 2026",
    note: "My first win on a stage. A GPT-powered tool with a clean UI for managing content.",
  },
  {
    event: "Paytm",
    result: "Winner",
    date: "2026",
    note: "A weekend of building, breaking things and fixing them at questionable hours.",
  },
];

export const workResults = [
  { result: "95% accuracy at 10K+ requests an hour", where: "Email verification API, Peak AI" },
  { result: "50% faster queries on large datasets", where: "Query and schema work, Avionyz" },
  { result: "40% less manual work", where: "Node.js automation, Avionyz" },
  { result: "9 GB+ of data processed", where: "Scraping pipelines, Peak AI" },
];

export type Contribution = { project: string; change: string; href: string; note?: string };

export const openSource: { status: string; items: Contribution[] }[] = [
  {
    status: "In review",
    items: [
      {
        project: "Rowboat",
        note: "Y Combinator S24",
        change:
          "Fixed the sidebar so it shows the next meeting correctly, sorted across days and with future all-day events labelled, and added tests.",
        href: "https://github.com/rowboatlabs/rowboat/pull/1155",
      },
    ],
  },
  {
    status: "Merged",
    items: [
      {
        project: "XpenseSnap",
        note: "4 pull requests",
        change: "Website work, including the navigation on small screens.",
        href: "https://github.com/xpensesnap/website_xpensesnap/pulls?q=is%3Apr+author%3AAnkit-singh-dot",
      },
    ],
  },
  {
    status: "Closed without merging",
    items: [
      {
        project: "Joplin",
        change: "A Highlight command with a configurable keyboard shortcut in both desktop editors.",
        href: "https://github.com/laurent22/joplin/pull/16744",
      },
      {
        project: "Rocket.Chat",
        change: "Hid “Reply in direct message” on your own messages.",
        href: "https://github.com/RocketChat/Rocket.Chat/pull/40315",
      },
      {
        project: "Oppia",
        change: "Made the learner dashboard count progress per lesson, so partial progress shows.",
        href: "https://github.com/oppia/oppia/pull/24186",
      },
      {
        project: "Matrix.org",
        change: "Fixed a Membership page that was missing from the Foundation menu.",
        href: "https://github.com/matrix-org/matrix.org/pull/3042",
      },
      {
        project: "RUXAILAB",
        change: "Added “Read more” truncation to study cards and made answers load in parallel.",
        href: "https://github.com/ruxailab/RUXAILAB/pull/1017",
      },
    ],
  },
];

export type Reel = {
  assumption: string;
  answer: string;
  note?: string;
  image: string;
  href: string;
};

export const reels: Reel[] = [
  {
    assumption: "Redis alone is enough.",
    answer: "Sometimes it isn't, and Lua is what gives it atomicity.",
    note: "622 likes",
    image: "/reels/redis-lua.jpg",
    href: "https://www.instagram.com/p/DccuYPuyIf_/",
  },
  {
    assumption: "Partitioning and sharding are the same thing.",
    answer: "They're not, and here's the difference.",
    image: "/reels/sharding.jpg",
    href: "https://www.instagram.com/p/Dc-zSsDy5o0/",
  },
  {
    assumption: "Cookies are the same as local storage.",
    answer: "They're not, and here's what happens without them.",
    image: "/reels/cookies.jpg",
    href: "https://www.instagram.com/p/DdzKrpBSexp/",
  },
  {
    assumption: "Isolation levels don't change much.",
    answer: "They make a database behave entirely differently.",
    image: "/reels/isolation-levels.jpg",
    href: "https://www.instagram.com/p/Dc-GBFayGTW/",
  },
  {
    assumption: "Debouncing and throttling do the same job.",
    answer: "One important difference, with two real-world examples.",
    image: "/reels/debounce-throttle.jpg",
    href: "https://www.instagram.com/p/DfJcNHzyJ2j/",
  },
  {
    assumption: "Sliding window is just a DSA problem.",
    answer: "It's how production APIs rate limit you.",
    image: "/reels/sliding-window.jpg",
    href: "https://www.instagram.com/p/DcNmgEySoXp/",
  },
  {
    assumption: "Longest common subsequence is just DSA.",
    answer: "It's connected to how Git tracks code changes.",
    image: "/reels/lcs.jpg",
    href: "https://www.instagram.com/reel/DevvRNFSUx4/",
  },
];

export const learning = [
  {
    name: "Desktop apps with Electron",
    note: "What I'm learning now. A system monitor with IPC, a tray icon and native menus, packaged for Mac, Linux and Windows.",
    href: "https://github.com/Ankit-singh-dot/thread_app_mac",
  },
  {
    name: "Striver's A2Z DSA sheet",
    note: "My practice log.",
    href: "https://github.com/Ankit-singh-dot/a2z",
  },
  {
    name: "my_vercel",
    note: "A small build server, to learn how deploy pipelines publish to S3.",
    href: "https://github.com/Ankit-singh-dot/my_vercel",
  },
  {
    name: "personal_smtp",
    note: "A mail app on SMTP and IMAP, to learn how email actually moves.",
    href: "https://github.com/Ankit-singh-dot/personal_smtp",
  },
  {
    name: "exciledraw",
    note: "My version of an Excalidraw-style whiteboard.",
    href: "https://github.com/Ankit-singh-dot/exciledraw",
  },
];

export const experience = [
  {
    company: "The Founders",
    href: "https://thefounders.co.in/",
    logo: "/logos/founders.png",
    role: "Tech Intern / Junior Developer",
    dates: "Aug 2026 — Present",
    summary:
      "I build websites, MVPs and internal tools for the community, and run the tech for events like the Founders X Investors Pitch Series, from registration to course hosting.",
  },
  {
    company: "Avionyz",
    href: "https://www.avionyz.com/",
    logo: "/logos/avionyz.png",
    role: "Software Developer Intern",
    dates: "Nov 2025 — Feb 2026",
    summary:
      "Full-stack MERN work. I made queries on large NeonDB datasets 50% faster, integrated payment and CRM APIs, and built a real-time social app with nested threads and WebSocket chat.",
  },
  {
    company: "Peak AI",
    role: "Product Engineering Intern",
    dates: "Aug 2025 — Oct 2025",
    summary:
      "I built an email verification API using SMTP and DNS lookups, plus scraping pipelines over MCA and GST portals, and deployed the services with Docker on AWS.",
  },
];

