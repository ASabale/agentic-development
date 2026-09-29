# Syllabus — Agentic Applications, from scratch to professional

Theory first, then build. Each lesson is one tightly-scoped HTML file in
`./lessons/`. Resume by reading the highest-numbered `learning-records/`
entry, then the **Current** marker below.

Time estimate: 20 core lessons + 10 depth lessons. Do not binge the depth
track before 0004 is solid. Do not skip quizzes. Storage strength comes
from retrieval, not re-reading.

## How to use this syllabus

1. Open the styled index: [`syllabus.html`](./syllabus.html)
2. Complete the **Current** lesson; do the retrieval quiz from memory
3. Read the assigned primary source (~10–20 min)
4. Come back to chat and get grilled before advancing
5. Repeat. Do not binge. Spacing beats fluency.

## Phase 1 — Foundations (what an agent IS)

The job of this phase: you can draw the loop on a whiteboard and defend
when *not* to build an agent.

| # | Lesson | Status |
|---|--------|--------|
| 0001 | [What is an agent?](./lessons/0001-what-is-an-agent.html) The augmented LLM and the loop. | |
| 0002 | [Tools in a loop](./lessons/0002-tools-in-a-loop.html) Anatomy of one step: call → execute → observe. | |
| 0003 | [Workflows vs agents](./lessons/0003-workflows-vs-agents.html) Five production patterns. Who picks the next step? | queued |
| 0004 | [Context as working memory](./lessons/0004-context-as-working-memory.html) Tokens, statelessness, context engineering. | queued |

## Phase 2 — Core patterns

The job of this phase: you can name the pattern, cite the paper or post,
and say what it *costs*.

| # | Lesson | Status |
|---|--------|--------|
| 0005 | [Tool design](./lessons/0005-tool-design.html) The tool spec is the agent's API contract (ACI). | queued |
| 0006 | [Chain-of-thought](./lessons/0006-chain-of-thought.html) Intermediate steps as test-time compute. | queued |
| 0007 | [ReAct](./lessons/0007-react.html) Interleave thought, action, observation. | queued |
| 0008 | [Planning and reflection](./lessons/0008-planning-and-reflection.html) Decomposition, Reflexion, verbal RL. | queued |
| 0009 | [Memory](./lessons/0009-memory.html) In-context vs external vs tools-as-memory. | queued |
| 0010 | [RAG for agents](./lessons/0010-rag-for-agents.html) Retrieval as a tool, not a preprocessor. | queued |

## Phase 3 — Production engineering

The job of this phase: you can talk like someone who has shipped, even
before you have. These are the interview differentiators.

| # | Lesson | Status |
|---|--------|--------|
| 0011 | [Structured outputs](./lessons/0011-structured-outputs.html) Tools are JSON your code executes. | queued |
| 0012 | [Guardrails and HITL](./lessons/0012-guardrails-and-hitl.html) Layered defense; humans as a tool. | queued |
| 0013 | [Evaluating agents](./lessons/0013-evaluating-agents.html) Tasks, graders, outcome vs trajectory. | queued |
| 0014 | [12-factor agents](./lessons/0014-twelve-factor-agents.html) Own prompts, context, control flow. | queued |

## Phase 4 — Advanced

The job of this phase: you can reject multi-agent and frameworks until
the cost is justified.

| # | Lesson | Status |
|---|--------|--------|
| 0015 | [Multi-agent systems](./lessons/0015-multi-agent.html) Orchestrator–worker, token economics. | queued |
| 0016 | [When frameworks pay](./lessons/0016-when-frameworks-pay.html) LangGraph as durable runtime, not magic. | queued |
| 0017 | [Long-running harnesses](./lessons/0017-long-running-harnesses.html) Sessions, artifacts, initializer agents. | queued |

## Phase 5 — Career and portfolio

The job of this phase: you can whiteboard and you have a build to point at.

| # | Lesson | Status |
|---|--------|--------|
| 0018 | [Design-interview drill](./lessons/0018-design-interview.html) Whiteboard an agent system under pressure. | queued |
| 0019 | [Read a real ship](./lessons/0019-read-a-real-ship.html) Decode an existing agent architecture. | queued |
| 0020 | [Capstone brief](./lessons/0020-capstone-brief.html) The portfolio agent you will build here. | queued |

## Phase 6 — Depth (after 0004; optional until grilled)

The job of this phase: the substrate, the bill, named failures, buses.

| # | Lesson | Status |
|---|--------|--------|
| 0021 | [What an LLM actually is](./lessons/0021-what-an-llm-actually-is.html) Next-token engine. | queued |
| 0022 | [System prompts and roles](./lessons/0022-system-prompts-and-roles.html) Own the prefix. | queued |
| 0023 | [Tokens, cost, latency](./lessons/0023-tokens-cost-and-latency.html) 4× / 15×, three clocks. | queued |
| 0024 | [Failure modes](./lessons/0024-failure-modes.html) Catalog + levers. | queued |
| 0025 | [Prompt caching](./lessons/0025-prompt-caching.html) Append-only prefixes. | queued |
| 0026 | [Traces](./lessons/0026-traces-and-observability.html) One tree per job. | queued |
| 0027 | [Prompt injection](./lessons/0027-prompt-injection.html) Direct vs IPI. | queued |
| 0028 | [MCP](./lessons/0028-mcp.html) Tools, resources, prompts. Not a loop. | queued |
| 0029 | [Inner vs outer loop](./lessons/0029-inner-vs-outer-loop.html) Triggers and webhooks. | queued |
| 0030 | [Computer use](./lessons/0030-computer-use.html) Screenshots as observations. | queued |

## Reference (print these)

- [Glossary](./reference/glossary.html) — canonical terms; grow with each lesson
- [The agent loop](./reference/agent-loop.html) — one-page anatomy
- [Workflow patterns](./reference/workflow-patterns.html) — Anthropic's five, cheat-sheet
- [Twelve factors](./reference/twelve-factors.html) — Dex Horthy's production list
- [Failure modes](./reference/failure-modes.html) — catalog + levers

## Pipeline links

These lessons serve no `dev-*` pipeline skill — they are career learning.

_Last updated: 2026-09-25 (session 3: depth lessons 0021–0030 + loop simulator)_
