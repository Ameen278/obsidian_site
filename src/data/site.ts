export const SITE = {
  name: 'Study Agent',
  tagline: 'Chat with a local AI, inside Obsidian',
  description:
    'Study Agent is a free Obsidian plugin that adds a study-assistant chat sidebar. Talk to a local Ollama model by default — nothing leaves your machine — or switch to OpenAI, Claude, Gemini and more.',
  version: '1.0.1',
  author: 'Ameen',
  minObsidian: '1.13.0',
  license: 'GPL-3.0-or-later',
  github: 'https://github.com/ameen278/Study-Agent',
  releases: 'https://github.com/ameen278/Study-Agent/releases',
  issues: 'https://github.com/ameen278/Study-Agent/issues',
  pluginPage: 'https://community.obsidian.md/plugins/study-agent',
  addToObsidian: 'obsidian://show-plugin?id=study-agent',
  ollama: 'https://ollama.com/',
  ollamaDownload: 'https://ollama.com/download',
  docsGuide: 'https://github.com/ameen278/Study-Agent/blob/master/docs/guide/',
  docsDev: 'https://github.com/ameen278/Study-Agent/blob/master/docs/dev/',
  guideHowItWorks:
    'https://github.com/ameen278/Study-Agent/blob/master/docs/guide/HowTheAgentWorks.md',
  guideSkills:
    'https://github.com/ameen278/Study-Agent/blob/master/docs/guide/Skills.md',
  guideProviders:
    'https://github.com/ameen278/Study-Agent/blob/master/docs/guide/AiProviders.md',
} as const;

export const NAV = [
  { href: '', label: 'Home' },
  { href: 'features/', label: 'Features' },
  { href: 'get-started/', label: 'Get Started' },
  { href: 'guide/', label: 'Guide' },
  { href: 'providers/', label: 'Providers' },
  { href: 'docs/', label: 'Docs' },
  { href: 'privacy/', label: 'Privacy' },
  { href: 'troubleshooting/', label: 'Troubleshooting' },
] as const;

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
}

export const PROVIDERS = [
  {
    name: 'Ollama (local)',
    local: true,
    needs: 'Ollama running locally, a pulled chat model',
    notes: 'Default provider. Requests go to your configured URL — usually http://localhost:11434 — so nothing leaves your machine.',
  },
  {
    name: 'OpenAI',
    local: false,
    needs: 'OpenAI account + API key',
    notes: 'Messages and prompt context are sent to OpenAI servers.',
  },
  {
    name: 'Anthropic Claude',
    local: false,
    needs: 'Anthropic account + API key',
    notes: 'Messages and prompt context are sent to Anthropic servers. Extended thinking is not wired up.',
  },
  {
    name: 'OpenRouter',
    local: false,
    needs: 'OpenRouter account + API key',
    notes: 'One key for many models. Messages are sent to OpenRouter and the selected model provider.',
  },
  {
    name: 'Groq',
    local: false,
    needs: 'Groq account + API key',
    notes: 'Messages and prompt context are sent to Groq servers.',
  },
  {
    name: 'Gemini',
    local: false,
    needs: 'Google AI Studio API key',
    notes: 'Messages are sent to Google. New keys start with `AQ.` — older keys may be blocked (HTTP 401).',
  },
  {
    name: 'Custom (OpenAI-compatible)',
    local: 'depends',
    needs: 'Any OpenAI-compatible server URL (e.g. LM Studio http://localhost:1234/v1)',
    notes: 'Local if your server is local. Each provider keeps its own base URL, API key, and model.',
  },
] as const;
