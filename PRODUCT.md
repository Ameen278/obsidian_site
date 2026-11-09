# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are Obsidian users looking for the Study Agent plugin and its documentation. Situation: discovering, installing, or troubleshooting the plugin from the site. Job: understand what the plugin does, how to install and use providers, and find privacy and usage guidance.

## Product Purpose

Marketing + docs site for Study Agent, an Obsidian plugin for chat with a local AI inside Obsidian. Built with Astro and deployed to GitHub Pages. Success means visitors can get started, understand features/providers, and use the plugin from the docs.

## Positioning

It is a landing and doc site for the plugin. Neighboring content does not substitute: this site centralizes plugin discovery, installation, and documentation in one place.

## Operating Context

Static Astro site (output: static, format: directory). Dev: `npm run dev`, build: `npm run build`, preview: `npm run preview`, check: `npm run check`. Pushes to `main` trigger GitHub Pages deploy of `dist/`. Content pages live in `src/pages/`; shared plugin data in `src/data/site.ts`.

## Capabilities and Constraints

Confirmed plugin facts from `src/data/site.ts`: Study Agent v1.0.1, requires Obsidian 1.13.0+, GPL-3.0-or-later. Same file lists GitHub, releases, issues, plugin page, and docs links; update version/links there when plugin changes. Provider model is Ollama (local) by default, with OpenAI, Anthropic Claude, OpenRouter, Groq, Gemini, and custom OpenAI-compatible servers as opt-in alternatives. No telemetry / no analytics confirmed in site copy; chat history cleared on sidebar reopen per site content. Do not invent benchmarks, testimonials, customers, pricing, licensing, or deployment claims beyond confirmed facts.

## Brand Commitments

Name: Study Agent. Tagline: "Chat with a local AI, inside Obsidian". Author: Ameen. Logo: `public/images/logo.png` (purple crystal over open book, circuit-brain; favicon `public/favicon.png`). Existing links, screenshots in `public/images/`, and site voice in `src/pages/index.astro` and `src/data/site.ts` are the binding sources. No other brand commitments made in this session.

## Evidence on Hand

Screenshots in `public/images/`, plugin links and version in `src/data/site.ts`, and pages: home, features, get-started, guide, providers, docs, privacy, troubleshooting (see `README.md` and `src/pages/`). Absences: no testimonials, case studies, benchmarks, or press assets on hand; future work must not fabricate them.

## Product Principles

- Preserve plugin truth: site claims must match `src/data/site.ts` and the plugin source of truth.
- Local-first privacy stays explicit: cloud providers are opt-in.
- Landing and docs are one surface: discovery and usage guidance belong together.
- Do not fabricate evidence; mark undecided facts open instead.
