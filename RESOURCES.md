# Agentic Applications — Resources

Verified September 2026. Annotated with when to reach for each.

## Knowledge

### Foundations (start here, in order)

- [Article: "Building Effective Agents" — Anthropic Engineering](https://www.anthropic.com/engineering/building-effective-agents)
  The industry-defining taxonomy: workflows vs. agents, the augmented LLM, composable patterns. Use for: any architecture decision, and for the "when do you NOT need an agent" question that interviews love.
- [Guide: "A Practical Guide to Building Agents" — OpenAI](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf)
  Product-grade companion to the Anthropic post: agent = model + tools + instructions, plus orchestration and guardrails. Use for: guardrails, single vs. multi-agent orchestration patterns.
- [Series: "Agentic Engineering Patterns" — Simon Willison](https://simonwillison.net/guides/agentic-engineering-patterns/)
  Clear, empirically grounded explanations of how coding agents actually work (token caching, system prompts, tools in a loop). Use for: mechanics of the agent loop, context engineering.
- [Book: _AI Engineering_ — Chip Huyen (O'Reilly, 2025)](https://www.oreilly.com/library/view/ai-engineering/9781098166298/)
  The canonical textbook for building on foundation models: evaluation-first mindset, RAG, agents, cost/latency. Use for: systematic breadth; the agents chapter anchors interview answers. Companion repo: https://github.com/chiphuyen/aie-book

### Primary sources (papers — read after foundations)

- [Paper: "ReAct: Synergizing Reasoning and Acting in Language Models" (ICLR 2023)](https://arxiv.org/abs/2210.03629)
  The canonical interleaved reason→act→observe loop. Use for: why agents reason *out loud* between tool calls; the pattern every framework implements.
- [Paper: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" (NeurIPS 2022)](https://arxiv.org/abs/2201.11903)
  The reasoning substrate under all agent systems. Use for: understanding why verbalized reasoning improves complex task performance.
- [Survey: "LLM Powered Autonomous Agents" — Lilian Weng, Lil'Log](https://lilianweng.github.io/posts/2023-06-23-agent/)
  Comprehensive taxonomy: planning, memory, tool use. Dated in places but the mental model is durable. Use for: the big picture of agent components.

### Production craft

- [Post: "12-Factor Agents" — Dex Horthy, HumanLayer](https://github.com/humanlayer/12-factor-agents)
  Battle-tested reliability principles (own your prompts, own your context window, compact errors into context). Use for: production design patterns, framework skepticism arguments in interviews.
- [Article: "How We Built Our Multi-Agent Research System" — Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
  Orchestrator-worker pattern, parallel subagents for context compression, token-cost trade-offs. Use for: multi-agent architecture decisions.
- [Article: "Demystifying Evals for AI Agents" — Anthropic](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
  How to evaluate agents that operate over many turns. Use for: evaluation strategy — the #1 thing juniors skip and seniors are interviewed on.
- [Blog: Simon Willison's Weblog](https://simonwillison.net/)
  The field's best running commentary. Use for: staying current; his definition "an LLM agent runs tools in a loop to achieve a goal" is the field's consensus.

### Structured learning

- [Course: Hugging Face Agents Course (free, certified)](https://huggingface.co/learn/agents-course/unit0/introduction)
  Beginner-to-expert, hands-on with the HF stack. Use for: structured practice problems between lessons; the free certification is a resume asset.

### Depth track (session 3)

- [Docs: OpenAI Prompt caching](https://developers.openai.com/api/docs/guides/prompt-caching)
  KV reuse for identical prefixes. Use for: harness layout, cache-busting mistakes.
- [Cheat sheet: OWASP LLM Prompt Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html)
  Direct vs indirect vs agent-specific. Use for: lesson 0027; untrusted observations.
- [Paper: InjecAgent (IPI benchmark)](https://arxiv.org/abs/2403.02691)
  Tool-integrated agents following poisoned content. Use for: why IPI evals exist.
- [Docs: MCP introduction + architecture](https://modelcontextprotocol.io/introduction)
  Host/client/server; tools, resources, prompts. Use for: lesson 0028. MCP does not run the loop.
- [Docs: OpenTelemetry gen-AI spans](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-spans.md)
  `invoke_agent`, `execute_tool`, token attributes. Use for: lesson 0026 vocabulary.
- [Docs: OpenAI Computer use](https://developers.openai.com/api/docs/guides/tools-computer-use)
  You provide the environment; screenshots as observations. Use for: lesson 0030.

## Wisdom (Communities)

- [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/)
  High-signal, fast-moving; production experience reports. Use for: what practitioners actually ship, model comparisons.
- [AI Engineer Summit / ai.engineer talks](https://www.youtube.com/@aiDotEngineer)
  Conference talks from people shipping agents. Use for: how professionals frame trade-offs in public.

### Tool calling, context, evals, multi-agent (added session 2)

- [Docs: OpenAI Function calling](https://developers.openai.com/api/docs/guides/function-calling)
  Canonical five-beat client-tool loop. Use for: harness anatomy, `call_id` pairing, “the API does not execute your function.”
- [Docs: OpenAI Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs)
  Schema adherence vs JSON mode. Use for: Factor 4, production parsing.
- [Article: "Writing effective tools for AI agents" — Anthropic](https://www.anthropic.com/engineering/writing-tools-for-agents)
  Tool descriptions as prompt surface; ACI. Use for: lesson 0005.
- [Article: "Effective context engineering for AI agents" — Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
  Context rot, just-in-time retrieval, compaction. Use for: lesson 0004.
- [Article: "Contextual Retrieval" — Anthropic](https://www.anthropic.com/engineering/contextual-retrieval)
  Chunking destroys context; contextual embeddings + BM25. Use for: lesson 0010.
- [Paper: "Reflexion" — Shinn et al., NeurIPS 2023](https://arxiv.org/abs/2303.11366)
  Verbal RL; episodic critiques. Use for: lesson 0008.
- [Docs: LangGraph Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api)
  State, nodes, edges, compile. Use for: lesson 0016 — runtime, not personality.
- [Article: "Effective harnesses for long-running agents" — Anthropic](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
  Initializer + coding agent; artifacts across sessions. Use for: lesson 0017.
- [PDF: "A Practical Guide to Building Agents" — OpenAI](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf)
  Guardrail layers, orchestration. Use for: lesson 0012.

## Gaps

- A hands-on, framework-free agent build walkthrough (capstone, lesson 0020 — not yet built).
- Recruiting-side view of what agentic-systems interviews actually test — lesson 0018 is our synthesis; still worth collecting real interview reports.
