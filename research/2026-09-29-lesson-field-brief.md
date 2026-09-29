# Field brief — lesson-by-lesson coverage audit

Date: 2026-09-29 · Author: FieldResearch (research subagent)

Question: As of September 2026, what must a complete public course on agentic
application engineering teach, lesson by lesson, so each syllabus promise is
actually covered?

## Method and scope

- Read every lesson file: `lessons/0001`–`lessons/0030` (all 30 exist), all 5
  existing reference pages, `syllabus.html`, `ROADMAP.md`, `RESOURCES.md`,
  `MISSION.md`.
- Live-verified primary-source URLs on 2026-09-29 (see "Verification log").
  URLs carried in `RESOURCES.md` (repo-verified Sept 2026) are marked as such.
- No lesson prose was rewritten. This file is an audit for the planner.

## Repo state (two corrections to the assignment premise)

1. **All 30 lesson HTML files exist** (added in commit `8198d57` "Publish the
   agentic-development course"). The premise "existing HTML is only lessons
   0001–0007" is stale; every lesson was audited as present.
2. **4 of 9 syllabus reference pages are missing**: `syllabus.html` links
   `reference/frameworks.html`, `reference/papers.html`,
   `reference/vendor-landscape.html`, `reference/interview-questions.html` —
   none exist (verified against the directory). The "plus reference pages"
   syllabus promise is delivered 5/9. Lesson-nav reference links are all
   intact (the 5 that exist).
## Verdict legend

- **delivered** — existing HTML covers the job claimed; enrichment only.
- **delivered-with-staleness** — covers the job, but first-party sources have
  moved since the lesson was written; citations need updating.
- **thin** — material gap against the claimed job.

## Triage table

| ID | Job (short) | Verdict | Biggest gap |
|----|-------------|---------|-------------|
| 0001 | Define agent = LLM + tools + loop | delivered | none material |
| 0002 | How the model asks for a tool; loop executes | delivered | no `tool_choice`/parallel/strict knobs |
| 0003 | Workflows vs agents; 5 patterns | delivered | none material |
| 0004 | Context window as working memory | delivered-with-staleness | pre-2026 session-log insight missing |
| 0005 | Tool design principles | delivered-with-staleness | predates Anthropic tool-design post |
| 0006 | Chain-of-thought and when it helps | delivered-with-staleness | missing Weng 2025 test-time-compute update |
| 0007 | ReAct interleaving | delivered | none material |
| 0008 | Planning and reflection | delivered-with-staleness | 2026 harness work re-validates structural planning |
| 0009 | Memory for agents | delivered | procedural memory (skills) thin |
| 0010 | RAG for agents | delivered | none material |
| 0011 | Structured outputs | delivered | strict-mode limits, MCP structured outputs |
| 0012 | Guardrails and human-in-the-loop | delivered | HITL presented as pure defense (no ASI09) |
| 0013 | Evaluating agents | delivered | none material |
| 0014 | 12-factor agents | delivered | repo now has appendix 13 |
| 0015 | When multi-agent helps | delivered | 2026 generator/evaluator pattern missing |
| 0016 | When frameworks pay | delivered | meta-harness angle missing |
| 0017 | Long-running agent harnesses | delivered-with-staleness | 2026-03 harness-design post |
| 0018 | Agent design interview | delivered | none material |
| 0019 | Read a real ship | delivered | none material |
| 0020 | Capstone brief | delivered | none material |
| 0021 | What an LLM actually is | delivered-with-staleness | Wikipedia cited for autoregression; 2026 model landscape in missing page |
| 0022 | System prompts and roles | delivered | file-based system prompts (skills) missing |
| 0023 | Tokens, cost, latency | delivered-with-staleness | no reasoning-token cost |
| 0024 | Failure modes | delivered-with-staleness | predates OWASP Agentic Top 10 |
| 0025 | Prompt caching | delivered | MCP cache-control extension (2026) not mentioned |
| 0026 | Traces and observability | delivered | none material |
| 0027 | Prompt injection | delivered-with-staleness | 2026 LLM Top 10 + Agent Control Standard |
| 0028 | MCP | delivered-with-staleness | 2026-07-28 stateless spec revision |
| 0029 | Computer use | delivered-with-staleness | "last resort" is 2024–25 framing |
| 0030 | Final exam | delivered | none material |

## Part 1 — Per-lesson audit

Each entry: the job the roadmap claims; concepts a reader must leave able to
state (with owning sources); the single best primary URL and why; one concrete
failure/misconception the lesson must correct; verdict on existing HTML.

### 0001 — What is an agent

- **Job (roadmap):** "Introduce the definition of an agent as 'LLM + tools +
  loop' and establish the term used throughout the course."
- **Concepts to teach:**
  1. Four-part decomposition: planning, memory, tool use, action — Weng 2023.
  2. "Powerful yet not a necessary tool" — Weng 2023.
  3. Modern definition: "run tools in a loop to achieve a goal" — Willison 2025-09-18.
  4. Autonomy vs interactivity is a spectrum, not a binary.
  5. Agents get memory by choosing to use memory tools — Willison 2025-09-18.
  6. Vendor definitions are sloppy/contested (OpenAI's 2025 definitional slip) — Willison 2025-09-18.
- **Best primary URL:** https://lilianweng.github.io/posts/2023-06-23-agent
  (verified 2026-09-29) — owns the canonical four-part definition the course
  builds on; every later source (Willison, Anthropic) extends rather than
  replaces it, so a 2026 course must ground the term here before modernizing it.
- **Failure/misconception to correct:** "agent = smarter chatbot." The lesson
  must show the loop (model emits a tool request, *code* executes it) so the
  reader does not imagine the LLM acting on its own.
- **Existing HTML: delivered.** Headings "What is an agent", "Where
  'agents' come from", "LLM agents are powerful but not necessary", "The
  definition you'll use in this course", and "Why the definition matters"
  cover the job. Minor: the accountability point (who is responsible when an
  agent acts) could be a named sub-section rather than a closing line.

### 0002 — Tools in a loop

- **Job (roadmap):** "Explain how the model itself asks for a tool (JSON tool
  call), and how the loop executes it, terminates, and errors."
- **Concepts to teach:**
  1. A tool call is a JSON *request* from the model, not an HTTP call — OpenAI function-calling docs.
  2. Loop mechanics: request → code executes → result appended → repeat.
  3. Termination conditions (final answer, max steps, budget) — OpenAI function-calling.
  4. Tool errors are data, not crashes; the model reads them — OpenAI tools-computer-use.
  5. Non-determinism: same input can request different tools — OpenAI function-calling.
  6. `tool_choice` (auto/required/forced) and parallel tool calls — OpenAI function-calling.
  7. ReAct is one trace shape of the same loop — ReAct paper.
- **Best primary URL:** https://developers.openai.com/api/docs/guides/function-calling
  (URL scheme verified 2026-09-29) — owns the exact wire format (tool object,
  `tool_choice`, parallel calls, errors-as-strings) the loop depends on; it is
  the contract the rest of the course assumes.
- **Failure/misconception to correct:** "the model executes the tool." The
  lesson must state plainly that the model only *requests* and that
  deterministic host code performs the action and owns side effects.
- **Existing HTML: delivered.** "The model requests a tool, it doesn't run
  one", "The loop, step by step", "Three ways the loop ends", "A tool error is
  data, not a crash", "The model is non-deterministic", and "ReAct is one
  shape of this loop" cover the job. Thin: the concrete knobs (`tool_choice`,
  parallel calls, strict schemas) are not surfaced, which a reader meets
  immediately in OpenAI/Anthropic docs.

### 0003 — Workflows vs agents

- **Job (roadmap):** "Distinguish workflows (fixed patterns) from agents
  (LLM-directed) and teach the five canonical workflow patterns."
- **Concepts to teach:**
  1. Workflow = LLM steps composed by predefined code paths; agent = LLM directs its own process and tool use — Anthropic building-effective-agents.
  2. Five patterns: prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer — Anthropic.
  3. Judgment heuristic: fixed, predictable steps → workflow; open-ended, model-decides-the-path → agent — Anthropic.
  4. "Find the simplest solution possible, and only increase complexity when needed" — Anthropic.
  5. Most production "agents" are mostly workflows — 12-factor agents repo.
- **Best primary URL:** https://www.anthropic.com/engineering/building-effective-agents
  (RESOURCES-verified Sept 2026) — owns the workflow/agent distinction and the
  five-pattern taxonomy the lesson is built on; no other first-party source
  frames the choice this crisply.
- **Failure/misconception to correct:** "agents are always better than
  workflows." The lesson must make the cost/reliability trade explicit and
  default to the simplest structure that works.
- **Existing HTML: delivered.** "Workflows: the LLM inside a fixed
  structure", "The five canonical patterns", "Agents: the LLM directs
  itself", "How to choose between the two", and "Start simple, add
  autonomy only when you need it" cover the job.

### 0004 — Context as working memory

- **Job (roadmap):** "Teach the context window as the agent's working memory
  and the five techniques that manage it."
- **Concepts to teach:**
  1. Context is a finite resource; every token competes — Anthropic effective-context-engineering (2025-09-29).
  2. Five techniques: system instructions, conversation history, tool results, retrieval, summarization/compaction — Anthropic.
  3. Context rot: performance degrades as the window fills — Anthropic + Chroma research.
  4. Compaction is irreversible; structured state survives it — Anthropic; see also Anthropic managed-agents (2026-04-08) "session is not Claude's context window".
  5. Just-in-time / agentic search beats pre-loading — Anthropic.
  6. Cache affinity: stable prefixes cost less — OpenAI/Anthropic caching docs.
- **Best primary URL:** https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
  (verified 2026-09-29, published 2025-09-29) — owns the five-technique list
  and the "context is a finite resource" frame; it is the 2025 primary source
  that made context engineering a named discipline.
- **Failure/misconception to correct:** "bigger window = better agent." The
  lesson must show context rot and that more context can mean worse answers.
- **Existing HTML: delivered-with-staleness.** "Context is a finite
  resource", "The five techniques", "Compaction is lossy", "Just-in-time
  beats pre-loading", "Cache affinity", and "The agent loop is the context
  builder" cover the job. Thin: written before the 2026 managed-agents
  insight that a durable session log outside the window (getEvents) is the
  correct long-horizon store; the lesson treats compaction as the end of the
  story.

### 0005 — Tool design

- **Job (roadmap):** "Teach the principles of designing tools an agent can
  use well: naming, schemas, granularity, errors."
- **Concepts to teach:**
  1. Names and descriptions are the prompt; the model reads them every turn — Anthropic writing-tools-for-agents (2025-09); OpenAI function-calling.
  2. Schemas must be precise, not aspirational; enum over free text — OpenAI function-calling.
  3. Fewer, richer tools beat many thin ones — Anthropic writing-tools-for-agents.
  4. Parallelism: batch read-only operations — OpenAI function-calling.
  5. Strict mode: the provider validates the call against the schema — OpenAI function-calling.
  6. Error messages are context: compact, actionable, model-readable — Anthropic; 12FA factor 9.
- **Best primary URL:** https://www.anthropic.com/engineering/writing-tools-for-agents
  (verified 2026-09-29, published Sept 2025) — owns the tool-design
  principles including "build tools *with* agents," the four pitfalls, and
  the MCP-transport vs hand-rolled-design distinction; more current and more
  complete than the 2024-era list the lesson recites.
- **Failure/misconception to correct:** "the model will figure out a vague
  tool." The lesson must show that ambiguous schemas produce the model
  guessing, and that the tool description is the interface.
- **Existing HTML: delivered-with-staleness.** "Six principles", "Three
  tools, one job", "Parallelism", "Strict schemas", "Error messages are
  context", and "MCP is a transport, hand-rolled is a design" cover the job.
  Thin: the principles are the classic six; the 2025-09 post's "use agents to
  build and evaluate your tools" angle is linked but not taught.

### 0006 — Chain of thought

- **Job (roadmap):** "Teach chain-of-thought reasoning, when it helps, when it
  doesn't, and why modern reasoning models changed the picture."
- **Concepts to teach:**
  1. CoT: ask the model to reason before acting; 5x→42% on multi-hop math — CoT paper (arXiv 2201.11903).
  2. Zero-shot vs few-shot CoT — CoT paper.
  3. CoT is model-dependent: it was a prompt trick in 2022, native in 2025+ reasoning models — CoT paper; Weng "Why We Think" (2025-05-01).
  4. Test-time compute: reasoning models spend tokens thinking; that is a cost dial — Weng "Why We Think".
  5. Do not ask modern reasoning models to "think step by step" — Weng; OpenAI reasoning docs.
  6. CoT is not truth: chains can be unfaithful/post-hoc — CoT-era literature.
- **Best primary URL:** https://arxiv.org/abs/2201.11903
  (CoT paper; canonical, stable) — owns the phenomenon and the numbers the
  course teaches (5x→42%); pair it with Weng's 2025 update, which owns the
  2026 answer: https://lilianweng.github.io/posts/2025-05-01/why-we-think/
  (verified 2026-09-29 in her post index).
- **Failure/misconception to correct:** "always prompt 'think step by
  step'." On a 2026 reasoning model that prompt can hurt; the lesson must
  teach the dial (effort/verbosity), not a frozen 2022 incantation.
- **Existing HTML: delivered-with-staleness.** "Reason before you act",
  "The paper that named it", "Zero-shot vs few-shot", "CoT is
  model-dependent", "Test-time compute", and "CoT is not truth" cover the
  job. Thin: only the 2022 paper and the OpenAI guide are cited; the 2025
  first-party update (Weng "Why We Think") is missing from the reading list.

### 0007 — ReAct

- **Job (roadmap):** "Teach the ReAct pattern (interleaved reasoning and
  acting) and why modern agents subsume it."
- **Concepts to teach:**
  1. ReAct interleaves Thought → Action → Observation — ReAct paper (arXiv 2210.03629).
  2. Hot-potato example: the model reasons, queries, observes, repeats — ReAct paper.
  3. ReAct beats Act-only (grounding) and CoT-only (can act) on QA — ReAct paper.
  4. ReAct reduced hallucination vs CoT baseline (38.1%→15.8% on HotpotQA) — ReAct paper.
  5. When to use explicit ReAct vs native tool-calling — Weng 2023.
  6. Modern SDKs hide the trace but do the same loop — Weng 2023.
- **Best primary URL:** https://arxiv.org/abs/2210.03629
  (ReAct paper; canonical, stable) — owns the interleaving pattern, the
  worked example, and the comparison numbers the course quotes; it is the
  source that names the pattern.
- **Failure/misconception to correct:** "you must prompt 'Thought: ...
  Action: ...' to make an agent." That scaffolding was a 2022 crutch; modern
  tool-calling models do the interleave natively and the trace is implicit.
- **Existing HTML: delivered.** "Reason and act, not one or the other",
  "The hot-potato example", "Why it beat both baselines", "When you still
  write it out", "Weng's position", and "Modern SDKs hide the trace" cover
  the job.

### 0008 — Planning and reflection

- **Job (roadmap):** "Teach planning (RePlan, Tree of Thoughts) and
  reflection (Reflexion), and when each is worth the tokens."
- **Concepts to teach:**
  1. RePlan: generate a plan, re-plan after each step — RePlan paper (arXiv 2301.11511).
  2. Tree of Thoughts: branch over intermediate steps, evaluate — ToT paper (arXiv 2305.10601).
  3. Reflexion: self-critique + verbal reinforcement; 89%/97%/90% on HumanEval/ALFWorld/WebShop — Reflexion (arXiv 2303.11366, verified 2026-09-29).
  4. The plan is a suggestion, not a contract; the loop can deviate — 12FA.
  5. Rely on native planning for short tasks; structure pays on long horizons — Reflexion; Anthropic harness-design (2026-03-24).
- **Best primary URL:** https://arxiv.org/abs/2303.11366
  (Reflexion; verified 2026-09-29) — owns the strongest single quantitative
  claim in the lesson (the 89%/97%/90% numbers) and the verbal-reinforcement
  mechanism; RePlan and ToT are stable arXiv companions.
- **Failure/misconception to correct:** "more planning = better results."
  The lesson must show that planning structure is a cost/benefit decision
  that shifts with model capability and task horizon, not a free upgrade.
- **Existing HTML: delivered-with-staleness.** "Re-plan after every step",
  "Tree of thoughts", "Reflexion: criticize yourself", "The plan is a
  suggestion, not a contract", and "Rely on the model's native planning"
  cover the job. Thin: the 2026 Anthropic harness-design post shows a
  *planner agent* as a load-bearing component for multi-hour builds — the
  lesson's "native planning is enough" framing is now horizon-dependent and
  should say so.

### 0009 — Memory

- **Job (roadmap):** "Teach how agents get memory: working, episodic,
  semantic, procedural, and the four techniques that back them."
- **Concepts to teach:**
  1. Taxonomy: working (window), episodic (past episodes), semantic (facts), procedural (how) — Weng 2023.
  2. Memory is the model's choice: it decides when to call memory tools — Willison 2025-09-18.
  3. Four backing techniques: in-context, tool writes, retrieval (RAG), fine-tuning — Weng 2023.
  4. Compaction is the working-memory mechanism; durable memory must live outside it — Anthropic context engineering (2025-09-29); managed-agents (2026-04-08).
  5. Memory poisoning: injected content can persist across sessions — OWASP Agentic Top 10 ASI06 (2025-12-09).
- **Best primary URL:** https://simonwillison.net/2025/Sep/18/agents/
  (verified 2026-09-29) — owns the current first-party statement that "agents
  get memory by remembering to use tools," with the Claude memory-tool
  evidence; Weng 2023 remains the taxonomy source.
- **Failure/misconception to correct:** "memory = a vector database." The
  lesson must show that memory in agents is usually tool-mediated file
  reads/writes, and that durable memory must survive context resets.
- **Existing HTML: delivered.** "Four kinds of memory", "Memory is the
  model's choice", "The four techniques", "Compaction is the mechanism", and
  "Memory is a tool call" cover the job. Thin: procedural memory (agent
  skills, custom commands — the 2025–26 pattern) is listed but never
  developed; memory poisoning is deferred to 0027.

### 0010 — RAG for agents

- **Job (roadmap):** "Teach retrieval-augmented generation in an agentic
  context: static RAG vs agentic search, chunking, and citations."
- **Concepts to teach:**
  1. Static RAG (pre-retrieve) vs agentic search (the loop retrieves) — Anthropic context engineering (2025-09-29).
  2. Contextual retrieval: BM25+vector recall 45.9%→92.2% with contextual chunk embeddings — Anthropic contextual-retrieval (2024-09).
  3. Chunking is a retrieval decision, not an afterthought — Anthropic contextual-retrieval.
  4. Hybrid (BM25 + vector) beats either alone — Anthropic contextual-retrieval.
  5. Re-ranking and citations: the answer must point at its sources — Anthropic.
- **Best primary URL:** https://www.anthropic.com/engineering/contextual-retrieval
  (RESOURCES-verified Sept 2026) — owns the quantitative core (the
  45.9%→92.2% recall result) and the practical chunking guidance; the
  2025-09-29 context-engineering post owns the agentic-search positioning.
- **Failure/misconception to correct:** "RAG is a pipeline you build once."
  In an agent, retrieval is a tool the model invokes repeatedly; the lesson
  must move the reader from static pipeline to search-inside-the-loop.
- **Existing HTML: delivered.** "Static RAG vs agentic search", "Contextual
  retrieval: the numbers", "Chunking is a retrieval decision", "Hybrid
  beats either alone", "Re-ranking and citations", and "The agent loop is
  the retrieval loop" cover the job.

### 0011 — Structured outputs

- **Job (roadmap):** "Teach how to make the model emit schema-conformant
  output: JSON mode, constrained decoding, strict schemas, and their costs."
- **Concepts to teach:**
  1. JSON mode guarantees valid JSON, not valid *schema* — OpenAI structured-outputs guide.
  2. Constrained decoding (strict mode) guarantees 100% schema conformance — OpenAI "Introducing Structured Outputs" (2024-08-06).
  3. Schema design: narrow, typed, `additionalProperties: false` — OpenAI structured-outputs.
  4. Self-correction loops: parse → return error → retry — OpenAI function-calling.
  5. Strict mode has limits: not every JSON Schema is supported — OpenAI structured-outputs.
  6. Tools are structured outputs — 12FA factor 4; MCP structured tool outputs (2025-11-25).
- **Best primary URL:** https://openai.com/index/introducing-structured-outputs-in-the-api/
  (RESOURCES-verified Sept 2026; published 2024-08-06) — owns the
  constrained-decoding capability and the "100% conformance" claim; the
  current developer guide (URL scheme verified 2026-09-29) is the reference.
- **Failure/misconception to correct:** "JSON mode means the model follows
  your schema." It does not; only constrained decoding does, and only within
  the provider's supported schema subset.
- **Existing HTML: delivered.** "JSON mode vs constrained decoding",
  "Designing the schema", "Self-correction is a loop", "Strict mode has
  limits", and "2024 vs 2025" cover the job. Thin: the 2025-11-25 MCP
  structured-outputs extension (tool results validated against schemas) is
  not mentioned — it is now part of the protocol, not a feature.

### 0012 — Guardrails and human-in-the-loop

- **Job (roadmap):** "Teach input/output guardrails and human-in-the-loop
  approval as first-class loop controls, and how to gate on risk."
- **Concepts to teach:**
  1. Guardrails run on input and output, outside the model — OpenAI safety best practices.
  2. HITL: interrupt the loop, surface the proposed action, resume on approval — OpenAI function-calling; LangGraph interrupts (verified 2026-09-29).
  3. The human is an approver, not a driver — OpenAI function-calling.
  4. Gate on risk: not every action needs a human — OpenAI function-calling.
  5. Guardrails see the action vs original intent — OWASP AI Agent Security cheat sheet.
- **Best primary URL:** https://developers.openai.com/api/docs/guides/function-calling
  (URL scheme verified 2026-09-29) — owns the interrupt/resume HITL pattern
  and the `tool_choice` gating knobs in the provider's own docs; LangGraph
  interrupts is the canonical OSS alternative.
- **Failure/misconception to correct:** "put a human in the loop and the
  agent is safe." An attacker can manipulate the approver (OWASP ASI09
  human-agent trust exploitation); the lesson must present HITL as one
  control in a stack, not a shield.
- **Existing HTML: delivered.** "Guardrails on input and output",
  "Human-in-the-loop: interrupt and resume", "The human is an approver, not
  a driver", "Gate on risk", and "When to add a human" cover the job. Thin:
  ASI09 (the human as an attack surface) is absent.

### 0013 — Evaluating agents

- **Job (roadmap):** "Teach how to evaluate agents: unit tests vs evals,
  trajectory vs endpoint, LLM-as-judge, golden sets, and regression."
- **Concepts to teach:**
  1. Unit tests verify deterministic steps; evals measure stochastic end-to-end behavior — Anthropic demystifying-evals (2025-08).
  2. Trajectory (did it do the right steps) vs endpoint (did it get the right answer) — Anthropic; LangSmith docs.
  3. LLM-as-judge: calibrated, but biased and self-lenient — Anthropic demystifying-evals; harness-design 2026 (evaluator tuning).
  4. Golden sets: small, hand-verified, versioned — Anthropic demystifying-evals.
  5. pass^k: consistency over N runs, not best-of-one — OpenAI multi-agent post; Anthropic.
  6. Evals are the only honest signal: you can't "feel" a regression — Anthropic.
- **Best primary URL:** https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
  (RESOURCES-verified Sept 2026; published 2025-08) — owns the "evals are
  the only honest signal" position and the trajectory/endpoint/judge
  material the lesson is built on; OpenAI's multi-agent post (2025-06-14)
  is the first-party companion for pass^k in production.
- **Failure/misconception to correct:** "the demo worked, ship it." One
  successful run is evidence of nothing for a stochastic system; the lesson
  must make pass^k and the golden set the release gate.
- **Existing HTML: delivered.** "Unit tests vs evals", "Trajectory vs
  endpoint", "LLM-as-judge", "Golden sets", "pass^k", "Regression",
  "Online evaluation", and "Evals are the only honest signal" cover the job.

### 0014 — 12-factor agents

- **Job (roadmap):** "Teach the 12-factor agents principles and when to
  deliberately violate them."
- **Concepts to teach:**
  1. The 12 factors, stated — 12-factor agents repo (verified 2026-09-29, 26.4k stars).
  2. Factor 4: tools are structured outputs — repo.
  3. Factor 5: unify execution state and business state in the window — repo.
  4. Factor 8: own your control flow (the loop is your code) — repo.
  5. Four anti-patterns (bag of tools, prompt as code, framework magic, state in the model) — repo.
  6. Most production "agents" are mostly deterministic software — repo.
- **Best primary URL:** https://github.com/humanlayer/12-factor-agents
  (verified 2026-09-29) — owns all 12 factors, the anti-patterns, and the
  "agents are mostly software" claim; it is the course's production-
  engineering backbone and still current (appendix 13 added).
- **Failure/misconception to correct:** "a bag of tools plus a loop is an
  agent in production." The repo's core observation is that reliable products
  are mostly deterministic code with LLM steps; the lesson must land it.
- **Existing HTML: delivered.** "The twelve factors", "Factor 4: tools are
  structured outputs", "Factor 5: one state", "Factor 8: own your control
  flow", "The four anti-patterns", and "When to violate a factor" cover the
  job. Thin: the repo now labels factor 3 as "Context Engineering" and has
  an appendix 13 (pre-fetch); the lesson's factor list is unchanged but
  current.

### 0015 — Multi-agent

- **Job (roadmap):** "Teach when a single agent should become multiple
  agents: orchestration, parallelization, and the cost of coordination."
- **Concepts to teach:**
  1. Orchestrator-workers: a lead delegates, workers report back — Anthropic multi-agent research system (2025-06-13); OpenAI multi-agent post (2025-06-14).
  2. Quantified benefit: 90.2% vs 84.4% on research evals, at ~15x tokens — OpenAI post.
  3. Single agent first: multi-agent is a last resort for cost/latency — Anthropic; OpenAI.
  4. Inter-agent trust is an attack surface (OWASP ASI07; "attacker moves second") — OWASP Agentic Top 10 (2025-12-09); Willison 2025-11-02.
  5. Evaluator as a separate agent (generator/evaluator) — Anthropic harness-design (2026-03-24).
- **Best primary URL:** https://openai.com/index/how-we-built-our-multi-agent-research-system/
  (RESOURCES-verified Sept 2026; published 2025-06-14) — owns the headline
  numbers the course teaches (90.2% vs 84.4%, ~15x tokens); Anthropic's
  companion post (2025-06-13) is the counterweight.
- **Failure/misconception to correct:** "more agents = more intelligence."
  The lesson must make the token cost and the coordination/trust risk
  explicit before anyone spawns a swarm.
- **Existing HTML: delivered.** "One agent first", "Orchestrator-workers",
  "The OpenAI numbers", "Multi-agent is expensive", "When multi-agent pays",
  and "Inter-agent trust is an attack surface" cover the job. Thin: the 2026
  generator/evaluator (GAN-inspired) pattern is absent from this lesson and
  only implied via 0017.

### 0016 — When frameworks pay

- **Job (roadmap):** "Teach the decision axes for choosing an agent
  framework (or none), and what you gain and lose with each."
- **Concepts to teach:**
  1. Four axes: control vs speed, vendor lock-in, persistence (checkpoint/resume), observability — course synthesis over LangGraph/OpenAI/12FA docs.
  2. LangGraph: graph, checkpoint, interrupt, store — LangGraph docs (verified 2026-09-29).
  3. 12FA's position: most production customer-facing agents don't run on frameworks — 12FA repo.
  4. The framework is your escape hatch: you can always hand-roll the loop — 12FA; lesson.
  5. Frameworks lag models: their abstractions encode 2024 assumptions — 12FA.
- **Best primary URL:** https://docs.langchain.com/oss/python/langgraph
  (verified 2026-09-29) — the canonical OSS framework the course teaches;
  its graph/checkpoint/interrupt/store surface is the concrete thing the
  four axes operate on, and the "you can always leave" argument lives in its
  own docs.
- **Failure/misconception to correct:** "you need a framework to build an
  agent." The loop is ~20 lines; frameworks buy persistence and
  observability, not the agent.
- **Existing HTML: delivered.** "The four axes", "Vendor SDKs vs OSS
  frameworks", "LangGraph", "12-factor's position", "The framework is your
  escape hatch", and "Frameworks lag models" cover the job. Thin: the 2026
  managed-agents "meta-harness" angle (stable interfaces around the model)
  is not represented.

### 0017 — Long-running agent harnesses

- **Job (roadmap):** "Teach the five components of a long-running agent
  harness and how to keep a multi-session agent coherent."
- **Concepts to teach:**
  1. The five components: loop, context manager, state store, handoff artifact, termination policy — Anthropic effective-harnesses (2025-10).
  2. The ~90-minute coherence ceiling on early long tasks — OpenAI multi-agent post.
  3. Context reset vs compaction: a clean slate beats a summary when the model shows context anxiety — Anthropic harness-design (2026-03-24).
  4. File-based structured state survives resets (Claude Code pattern) — Anthropic Claude Code best practices (2025-04).
  5. The harness is code: it encodes assumptions that go stale per model release — Anthropic managed-agents (2026-04-08).
- **Best primary URL:** https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
  (RESOURCES-verified Sept 2026; published 2025-10) — owns the
  initializer/coder/handoff architecture the lesson teaches; its 2026
  follow-up is required reading: https://www.anthropic.com/engineering/harness-design-long-running-apps
  (verified 2026-09-29, published 2026-03-24).
- **Failure/misconception to correct:** "if the model forgets, summarize and
  continue." Compaction preserves continuity but not a clean slate; on
  models with context anxiety, resets plus a structured handoff is the fix.
- **Existing HTML: delivered-with-staleness.** "The five components",
  "The ~90-minute ceiling", "Context reset vs compaction", "State lives in
  files", "The harness is code", and "Re-audit on every model change" cover
  the job. Thin: written around the 2025-10 post; the 2026-03 post adds the
  planner/generator/evaluator architecture, context-anxiety evidence, and
  the 20x cost data ($9 solo vs $200 harnessed) that this lesson should
  teach.

### 0018 — Agent design interview

- **Job (roadmap):** "Teach a structured 10-minute agent design interview:
  how to take a vague request and produce a defensible loop design."
- **Concepts to teach:**
  1. The five steps: clarify goal, list tools, choose workflow vs agent, set termination, state the eval — course synthesis.
  2. "The question is the spec": a vague prompt is a spec gap, not a model gap — course synthesis; 12FA factor 2.
  3. "The loop is the answer": every design starts from the loop — 12FA factor 8.
  4. "Cost is the answer": token budget and latency are design inputs — OpenAI prompt caching; Anthropic.
  5. Write it down, not in your head — 12FA factor 2 (own your prompts).
- **Best primary URL:** https://github.com/humanlayer/12-factor-agents/blob/main/content/factor-02-own-your-prompts.md
  (verified 2026-09-29, in-repo) — owns the "write it down, version it"
  epistemology the interview method is built on; no single primary source
  owns the interview itself (it is a course synthesis).
- **Failure/misconception to correct:** "the interviewer should pick the
  model and the framework first." The design starts from goal, tools, and
  termination; the model is a late, cheap decision.
- **Existing HTML: delivered.** "The five steps", "Ten minutes", "The
  question is the spec", "The loop is the answer", and "Cost is the answer"
  cover the job.

### 0019 — Read a real ship

- **Job (roadmap):** "Teach how to read a shipped agent's source and docs to
  extract its design: four steps, eight sources, four questions."
- **Concepts to teach:**
  1. The four steps: find the source, find the docs, find the harness, find the evals — course synthesis.
  2. Eight source types (repo, SDK, prompt file, tool defs, trace samples, benchmarks, post-mortems, changelog) — course synthesis.
  3. "Ship is not the loop": the loop is a small part of a ship — 12FA.
  4. The four questions: what's deterministic, what's stochastic, where's state, what's the eval — course synthesis over 12FA.
  5. "You can never build without reading" — course synthesis.
- **Best primary URL:** https://www.anthropic.com/engineering/claude-code-best-practices
  (RESOURCES-verified Sept 2026; published 2025-04) — the canonical
  real-ship artifact the lesson's eight-source method is built around; its
  harness, CLAUDE.md state, and tool surface are the worked example.
- **Failure/misconception to correct:** "read the README and you
  understand the agent." The README is the marketing layer; the loop, the
  state file, and the eval are where the design actually is.
- **Existing HTML: delivered.** "The four steps", "The eight sources",
  "Ship is not the loop", "The four questions", and "You can never build
  without reading" cover the job.

### 0020 — Capstone brief

- **Job (roadmap):** "Set the capstone: build a real agent for a real user,
  with a harness, an eval, and a security story."
- **Concepts to teach:**
  1. Real problem, real user — course synthesis.
  2. Four deliverables: working agent, harness, eval, security write-up — course synthesis.
  3. Read before building — 0019 method.
  4. "Show the harness, show the eval, show the security" — course synthesis over 12FA + OWASP.
  5. The four axes appear in one stack (planning, tools, guardrails, HITL) — OpenAI agents guide.
- **Best primary URL:** https://developers.openai.com/api/docs/guides/agents
  (RESOURCES-verified Sept 2026) — owns the four-axes taxonomy (planning,
  tools, guardrails, human-in-the-loop) in one first-party doc; the capstone
  is a synthesis, so this is the closest owning source.
- **Failure/misconception to correct:** "the capstone is a demo." A demo has
  no harness, no eval, and no threat model; the brief must make all three a
  grading requirement, not a bonus.
- **Existing HTML: delivered.** "Build something real", "Real problem, real
  user", "The four deliverables", "Read before building", and "Show the
  harness, show the eval, show the security" cover the job.

### 0021 — What an LLM actually is

- **Job (roadmap):** "Teach what an LLM is mechanically: a stochastic
  autoregressive predictor, with three training stages and no state."
- **Concepts to teach:**
  1. Autoregressive next-token prediction — OpenAI "Hello GPT-4o" (2024-05-13); Wikipedia (secondary; should be primary-cited).
  2. Three training stages: pretraining, fine-tuning, RLHF — OpenAI / Anthropic model docs.
  3. No state between calls; the window is the only memory — OpenAI.
  4. Hallucination rate ~70% on LLM-generated code — Willison "LLMs can be confidently wrong" (2024-11-26).
  5. Scale: capability is emergent with size/compute — 2023-era scaling literature.
  6. "The model is not an oracle" — course synthesis.
- **Best primary URL:** https://simonwillison.net/2024/Nov/26/llms-cannot-be-trusted/
  (RESOURCES-verified Sept 2026) — Willison's own measurement of the ~70%
  hallucination rate on LLM-generated code; it is the first-party number the
  lesson should attribute instead of "the literature".
- **Failure/misconception to correct:** "the model understands the task."
  It predicts tokens; the lesson must separate the mechanics (no state,
  autoregression) from the behavior people anthropomorphize.
- **Existing HTML: delivered-with-staleness.** "Stochastic autoregressive
  predictor", "Three training stages", "No state", "Hallucination",
  "Scale", and "The model is not an oracle" cover the job. Thin: the
  autoregression claim cites Wikipedia (a secondary source); the 2026 model
  landscape (GPT-6 Sol/Luna, Opus 4.6, pricing) lives in the missing
  `vendor-landscape.html` reference page.

### 0022 — System prompts and roles

- **Job (roadmap):** "Teach the prompt roles (system, user, assistant),
  few-shot, and why the prompt is the interface."
- **Concepts to teach:**
  1. system vs user vs assistant: distinct roles, distinct trust — OpenAI prompting guide; Anthropic prompt engineering docs.
  2. Few-shot examples shape behavior more than instructions — OpenAI; CoT paper.
  3. The prompt is the interface: changing it is a code change — 12FA factor 2.
  4. Version the prompt: prompts are code, they ship, they regress — 12FA factor 2.
  5. File-based system prompts (CLAUDE.md / skills) as the 2025–26 agentic pattern — Anthropic Claude Code docs.
- **Best primary URL:** https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
  (stable first-party docs; URL not re-fetched today) — owns the role
  semantics and few-shot guidance from the vendor the course's examples use;
  OpenAI's prompting guide is the parallel.
- **Failure/misconception to correct:** "the system prompt is just a
  greeting." It is the most trusted text in the window and the highest-
  leverage (and highest-risk) surface an agent engineer controls.
- **Existing HTML: delivered.** "System, user, assistant", "Few-shot",
  "The prompt is not code… or is it", "The prompt is the interface",
  "Version the prompt", and "The role is the contract" cover the job. Thin:
  file-based system prompts (CLAUDE.md, skills) are not taught here even
  though they are the dominant agentic pattern by 2026.

### 0023 — Tokens, cost, latency

- **Job (roadmap):** "Teach the token math, where latency comes from
  (prefill/decode), and why cost is a design constraint."
- **Concepts to teach:**
  1. Tokens: the unit of both cost and context — OpenAI docs.
  2. Latency = prefill (input) + decode (output); decoding is serial — OpenAI / Anthropic docs.
  3. Cost is a function of tokens in and out, not calls — OpenAI pricing.
  4. "Cost is a design constraint": the loop's token budget shapes the architecture — course synthesis over OpenAI multi-agent (15x) + Anthropic harness (20x, 2026-03-24).
  5. Reasoning tokens: test-time compute is billed like output — Weng "Why We Think" (2025-05-01); OpenAI reasoning pricing.
  6. Caching changes the math: stable prefixes discount 90% — OpenAI/Anthropic caching docs.
- **Best primary URL:** https://developers.openai.com/api/docs/guides/prompt-caching
  (URL scheme verified 2026-09-29) — owns both halves of the lesson (latency
  mechanics and the discount economics) in one first-party doc.
- **Failure/misconception to correct:** "cost scales with the number of API
  calls." It scales with tokens, and a long-running agent's context
  re-sends the whole window every turn; the loop makes costs superlinear.
- **Existing HTML: delivered-with-staleness.** "Token math", "Where
  latency comes from", "Cost is a function of tokens", "Cost is a design
  constraint", "Caching changes the math", and "Stream for UX" cover the
  job. Thin: no treatment of reasoning-token pricing — a first-order cost
  lever on every 2025+ model.

### 0024 — Failure modes

- **Job (roadmap):** "Teach the eight failure modes of agentic systems and
  how to name each one when it appears."
- **Concepts to teach:**
  1. Eight modes, each named (hallucinated action, loop runaway, context loss, tool misuse, cost blowout, silent partial success, eval drift, security bypass) — course synthesis.
  2. Each failure has a name: naming is the first mitigation — course synthesis; OWASP.
  3. The eval is the fix: most failures are untested paths — Anthropic demystifying-evals.
  4. The harness is the fix: most long-horizon failures are context/state failures — Anthropic harness-design (2026-03-24).
  5. Modern taxonomy: OWASP Agentic Top 10 (2025-12-09) adds supply-chain (ASI04), inter-agent comms (ASI07), cascading failures (ASI08) — OWASP.
- **Best primary URL:** https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai
  (verified 2026-09-29, published 2025-12-09) — owns the modern 10-threat
  agentic taxonomy (ASI01–ASI10); it is the 2026 reference the lesson's
  eight modes should map onto.
- **Failure/misconception to correct:** "if it worked in the demo, the
  failures are unlikely." Stochastic systems fail in the tails; the lesson
  must make failure naming a habit before the first incident.
- **Existing HTML: delivered-with-staleness.** "Eight modes", "Each failure
  has a name", "The eval is the fix", "The harness is the fix", and "Never
  deploy the demo" cover the job. Thin: the eight-mode list predates the
  OWASP Agentic Top 10; ASI04/07/08 (supply chain, inter-agent comms,
  cascading failures) have no counterpart in the lesson's eight.

### 0025 — Prompt caching

- **Job (roadmap):** "Teach how prompt caching works, what breaks it, and
  why it is a design decision, not an optimization."
- **Concepts to teach:**
  1. Cache the stable prefix: system prompt, tools, long docs — OpenAI prompt-caching; Anthropic prompt-caching (2024-11).
  2. Cache hit = 90% discount (Anthropic) / 75% (OpenAI) — Anthropic docs; OpenAI docs.
  3. What breaks the cache: any earlier token changes — OpenAI docs.
  4. Auto vs explicit breakpoints — OpenAI docs.
  5. "Cache is a design": order your context stably; cache is a cost lever, not a DB — course synthesis; MCP cache-control extension (2026-07-28).
- **Best primary URL:** https://www.anthropic.com/en/docs/build-with-claude/prompt-caching
  (RESOURCES-verified Sept 2026; published 2024-11) — owns the 90%/25%
  discount numbers the lesson teaches and the explicit-cache breakpoint
  model; OpenAI's guide owns the auto/explicit split.
- **Failure/misconception to correct:** "caching is something the provider
  does to you." The agent engineer decides what is stable and therefore
  cacheable; a volatile prefix silently disables the discount.
- **Existing HTML: delivered.** "How the cache works", "Cache hit = 90%
  discount", "What breaks the cache", "Auto vs explicit", "Cache is not a
  database", "Cache is a design", and "Cache is a cost lever" cover the
  job. Thin: the 2026-07-28 MCP `cache-control` extension (protocol-level
  caching, 100% hit-rate design) is a one-liner missing from the story.

### 0026 — Traces and observability

- **Job (roadmap):** "Teach agent tracing with the OpenTelemetry gen-AI
  conventions: spans, attributes, and why the trace is your debug tool."
- **Concepts to teach:**
  1. OTel gen-AI spans: `invoke_agent`, `execute_tool`, `llm` — OTel semantic-conventions-genai (verified 2026-09-29).
  2. Attributes: `gen_ai.agent.name`, `gen_ai.tool.name`, token counts — OTel semconv.
  3. The trace = the loop made visible — course synthesis over OTel + vendor SDKs.
  4. "Observe before you fix": no eval or incident is debuggable without a trace — course synthesis.
  5. "The trace is the eval": replay traces against new models — course synthesis.
- **Best primary URL:** https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-spans.md
  (repo verified 2026-09-29) — owns the span/attribute schema the lesson
  teaches, including the 2025-era agent spans; it is the vendor-neutral
  contract that makes traces comparable across stacks.
- **Failure/misconception to correct:** "logs are observability." For an
  agent, a flat log of requests cannot show the loop, the tool calls, or
  the state transitions; only the span hierarchy does.
- **Existing HTML: delivered.** "OTel gen-AI spans", "The attributes",
  "The trace is the loop", "Observe before you fix", "The trace is the
  eval", and "The trace is the incident" cover the job. Thin: the 2026-07-28
  MCP revision added first-party observability hooks (telemetry + cache
  stats in the protocol); a 2026 course should note traces now come from
  the protocol, not just the SDK.

### 0027 — Prompt injection

- **Job (roadmap):** "Teach direct and indirect prompt injection, the
  lethal trifecta, defense in depth, and why no model is safe."
- **Concepts to teach:**
  1. Direct vs indirect injection — OWASP Prompt Injection Prevention cheat sheet.
  2. The lethal trifecta: private data + untrusted content + external output — Willison (cited in course).
  3. "Injection is not a parsing bug" — OWASP; course.
  4. The model has no privilege boundary: instruction vs data is undecidable in the model — Willison.
  5. Defense in depth: least-privilege tools, egress filtering, dual-LLP — OWASP; Willison 2025-06-13; 2025-11-02 (agents rule of two).
  6. 2026 state of the field: OWASP LLM Top 10 2026 + Agent Control Standard (2026-09-01); Agentic Top 10 ASI01 goal hijacking — OWASP.
- **Best primary URL:** https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html
  (RESOURCES-verified Sept 2026) — owns the taxonomy and the mitigation
  ladder the lesson is built on; the 2025-12 Agentic Top 10 and the
  2026-09-01 LLM Top 10 release (verified 2026-09-29) are the required
  2026 updates.
- **Failure/misconception to correct:** "you can prompt your way out of
  injection." No instruction to the model closes the undecidability; the
  lesson must end on "never claim safe," which the lesson already does.
- **Existing HTML: delivered-with-staleness.** "Direct vs indirect",
  "The lethal trifecta", "Injection is not a parsing bug", "The model has
  no privilege boundary", "Defense in depth", and "Never claim safe" cover
  the job. Thin: the 2026-09-01 OWASP LLM Top 10 2026 release and the
  emerging Agent Control Standard are not yet represented.

### 0028 — MCP

- **Job (roadmap):** "Teach the Model Context Protocol: client/host/server,
  JSON-RPC, tools/resources/prompts, and what MCP is not."
- **Concepts to teach:**
  1. Client/host/server roles — MCP spec.
  2. JSON-RPC 2.0 wire format — MCP spec.
  3. Tools / resources / prompts primitives — MCP spec.
  4. "MCP is not a framework" — course; spec.
  5. The spec is now a dated revision with a stateless 2026-07-28 shape (no initialize handshake, Roots/Sampling/Logging deprecated, tasks as extension, structured tool outputs, cache-control, MRTR) — MCP spec changelog (verified 2026-09-29).
  6. "MCP has no security model" — course; Willison.
- **Best primary URL:** https://modelcontextprotocol.io/specification/latest
  (verified 2026-09-29; latest revision 2026-07-28) — owns the protocol;
  cite `latest` (or name the revision), because the spec is now a dated
  moving target, not a stable 2024 document.
- **Failure/misconception to correct:** "MCP is the 2024-11 document with
  the initialize handshake and session IDs." The 2026-07-28 revision made
  the protocol stateless (state moved to the client), deprecated
  Roots/Sampling/Logging, and moved tasks to an extension; teaching the old
  shape as the current one is now factually wrong.
- **Existing HTML: delivered-with-staleness.** "Client, host, server",
  "JSON-RPC on the wire", "Tools, resources, prompts", "MCP is not a
  framework", "The spec is the contract", "MCP is a transport, hand-rolled
  is a design", and "MCP has no security model" cover the job — but the
  host/client/server + initialize framing predates the stateless revision;
  this is the single most stale lesson in the course.

### 0029 — Computer use

- **Job (roadmap):** "Teach computer-use agents: screenshot in, action out,
  the CUA model loop, and when to use them."
- **Concepts to teach:**
  1. Screenshot → action → screenshot loop — OpenAI tools-computer-use guide (RESOURCES-verified).
  2. CUA is a CUA model: the capability is in the weights, not the prompt — OpenAI.
  3. "The browser is the terminal": GUI is the universal interface — course.
  4. 2026 practice: browser/CUA via MCP (e.g. Playwright MCP) is a first-class harness component, including as an evaluator's QA path — Anthropic harness-design (2026-03-24); Willison.
  5. "Computer use is a last resort" — 2024–25 vendor guidance; now: prefer APIs, fall back to GUI.
- **Best primary URL:** https://developers.openai.com/api/docs/guides/tools-computer-use
  (RESOURCES-verified Sept 2026; URL scheme verified 2026-09-29) — owns the
  screenshot-to-action loop from the vendor that shipped CUA; Anthropic's
  computer-use docs are the parallel first-party source.
- **Failure/misconception to correct:** "computer use means the agent
  operates the whole desktop." The lesson must scope it (browser window,
  typed actions) and price it — GUI tokens and per-step latency make it the
  most expensive tool class in the loop.
- **Existing HTML: delivered-with-staleness.** "Screenshot in, action
  out", "The CUA loop", "CUA is a CUA model", "The browser is the
  terminal", and "Computer use is a last resort" cover the job as written
  in 2024–25. Thin: by 2026 the field moved from "last resort" to
  "expensive, so prefer APIs" — browser automation via MCP is now a
  default harness component (including as the evaluator's test path), and
  the lesson's framing should be softened accordingly.

### 0030 — Final exam

- **Job (roadmap):** "Teach the six skills the course has built, and how
  they appear in a candidate's work."
- **Concepts to teach:**
  1. Six skills: define, loop, context, tools, eval, security — course synthesis over the 30 lessons.
  2. "The exam is the course": no new material, only synthesis — course.
  3. Ship before the deadline: a partial real ship beats a complete toy — course.
  4. "The exam is the portfolio": artifacts are the evidence — course.
  5. Reference scaffolding: 12FA + LangGraph docs + OTel semconv are the canonical references a candidate should cite — repos verified 2026-09-29.
- **Best primary URL:** https://github.com/humanlayer/12-factor-agents
  (verified 2026-09-29) — the exam reuses the course's canonical references;
  the 12FA repo is the checklist a candidate is expected to apply, so it is
  the closest owning source for a synthesis lesson.
- **Failure/misconception to correct:** "passing means writing an essay."
  The exam grades artifacts (a loop, a harness, an eval, a threat model);
  prose without a working system fails.
- **Existing HTML: delivered.** "The six skills", "The exam is the
  course", "Ship before the deadline", and "The exam is the portfolio"
  cover the job.

## Part 2 — Field shifts since the 2023 Weng survey

Weng's "LLM Powered Autonomous Agents" (2023-06-23) treated context
management, planning, reflection, and evaluation as sub-topics of a
paradigm. By September 2026, at least five of these have become their own
disciplines with first-party ownership. Omitting any of these would make
the course wrong, not merely dated.

1. **Context engineering as a named discipline (2025).** Anthropic
   "Effective context engineering for AI agents" (2025-09-29,
   verified 2026-09-29) owns the five-technique list; the 12FA repo now
   labels factor 3 "Context Engineering" (verified 2026-09-29). In 2023
   this was a paragraph in a survey.
2. **The harness as the unit of engineering (2025–2026).** Anthropic
   "Effective harnesses for long-running agents" (2025-10), "Harness
   design for long-running application development" (2026-03-24, verified
   2026-09-29), and "Scaling Managed Agents: Decoupling the brain from the
   hands" (2026-04-08, verified 2026-09-29: session/harness/sandbox
   virtualization, "don't adopt pets," harness assumptions go stale per
   model release, $9 vs $200 cost data). Weng herself now writes
   "Harness Engineering for Self-Improvement" (2026-07-04, verified in her
   post index 2026-09-29).
3. **Evals as a production requirement (2025).** Anthropic "Demystifying
   evals for AI agents" (2025-08, RESOURCES-verified); OpenAI "How we built
   our multi-agent research system" (2025-06-14, RESOURCES-verified) treats
   the eval harness as first-class infrastructure with pass^k. In 2023,
   evaluation was a bullet point.
4. **Prompt injection as the unsolved security frontier (2023→2026).**
   Willison's running body of work (2025-06-13 design patterns; 2025-11-02
   "agents rule of two" and "attacker moves second"), OWASP LLM Top 10
   (LLM01:2025 prompt injection), the OWASP Agentic Top 10 (2025-12-09,
   verified 2026-09-29, ASI01–ASI10), and the 2026 LLM Top 10 release with
   the emerging Agent Control Standard (2026-09-01, verified 2026-09-29).
   The 2023 survey had no security section at all.
5. **MCP as the tool standard, with a moving spec (2024-11-25 →
   2026-07-28).** The spec is now a dated revision; the 2026-07-28 revision
   (verified 2026-09-29) made it stateless, deprecated Roots/Sampling/
   Logging, moved tasks to an extension, and added structured tool outputs,
   cache-control, and MRTR. OpenAI adoption: MCP blog (2025-03-26) and
   Agents SDK support (2025-07-15), both RESOURCES-verified.
6. **Structured outputs as table stakes (2024-08 → 2025-11).** OpenAI
   "Introducing Structured Outputs in the API" (2024-08-06,
   RESOURCES-verified) owns the constrained-decoding claim; the MCP
   structured-outputs extension (2025-11-25, carried into the 2026-07-28
   revision) moved schema-validated tool results into the protocol itself.
7. **Prompt caching as a cost/latency lever (2024-10 → 2026-07).** OpenAI
   prompt-caching docs (2024-10) and Anthropic (2024-11, 90%/25%
   discounts), both RESOURCES-verified; the MCP cache-control extension
   (2026-07-28) made caching protocol-level. In the 2023 survey, caching
   did not exist.

## Part 3 — The missing reference pages (syllabus promise 5/9)

`syllabus.html`'s Reference nav links nine
pages. Five exist and were audited (glossary, agent-loop, twelve-factors,
failure-modes, workflow-patterns — all short, all intact, all consistent
with the lessons). Four are **missing** and produce broken nav links:

- `reference/frameworks.html` — lesson 0016's axes need this as the
  comparison table (LangGraph vs CrewAI vs PydanticAI vs vendor SDKs vs
  bare loop, with links).
- `reference/papers.html` — the 2023-2026 reading list (Weng 2023, CoT,
  ReAct, Reflexion, RePlan, ToT, the 2025–26 Anthropic posts) deserves one
  canonical index page.
- `reference/vendor-landscape.html` — lesson 0021's pricing/model
  comparison (OpenAI/Anthropic/Google, 2026 SKUs) has no home today.
- `reference/interview-questions.html` — the answer key for lesson 0018's
  five steps.

These four are the only parts of the syllabus promise with no existing
content. Every lesson-level promise (0001–0030) has content.

## Verification log (read 2026-09-29)

**Live-fetched today:**
- lilianweng.github.io post index (2023-06-23 agent post; 2025-05-01 Why We
  Think; 2026-07-04 Harness Engineering) — https://lilianweng.github.io/posts
- simonwillison.net/2025/Sep/18/agents/ (full text)
- modelcontextprotocol.io/specification/2026-07-28/changelog (full text)
- genai.owasp.org 2025-12-09 Agentic Top 10 announcement (full text)
- anthropic.com/engineering/harness-design-long-running-apps (full text)
- anthropic.com/engineering/managed-agents (full text)
- github.com/humanlayer/12-factor-agents (README, live)

**Verified by search today:** MCP spec revision list; OWASP 2026 LLM Top 10
release (2026-09-01); OTel semantic-conventions-genai repo + gen-ai-spans;
LangGraph docs at docs.langchain.com/oss/python/langgraph; OpenAI
developers.openai.com/api/docs/guides URL scheme; Anthropic
effective-context-engineering-for-ai-agents (2025-09-29); Anthropic
writing-tools-for-agents (2025-09); arXiv 2303.11366 (Reflexion).

**Trusted from RESOURCES.md (repo-verified Sept 2026), not re-fetched:**
OpenAI blog posts (Structured Outputs 2024-08-06, multi-agent research
system 2025-06-14, Agents SDK 2025-03-11, MCP adoption 2025-03-26/07-15);
Anthropic building-effective-agents, multi-agent-research-system,
demystifying-evals, effective-harnesses (2025-10), contextual-retrieval,
claude-code-best-practices; Willison 2025-06-13/2025-11-02/2025-12-31;
Willison guides URL; OpenAI guide URLs (function-calling, agents,
prompt-caching, tools-computer-use); Anthropic prompt-caching docs;
OTel agent-spans doc; arXiv IDs for CoT (2201.11903), ReAct (2210.03629),
RePlan (2301.11511), ToT (2305.10601).

**Not re-verified (stable, low risk):** Anthropic prompt-engineering docs
overview URL; arXiv 2201.11903 / 2210.03629 page renders.
