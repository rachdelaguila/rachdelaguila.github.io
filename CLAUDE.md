# Project notes for Claude Code

## Codex subagent

- When the user says to "use codex" for a task, delegate that task to the `codex` subagent (`.claude/agents/codex.md`), which runs the OpenAI Codex CLI non-interactively.
- Default Codex model: `gpt-5.6-sol`; fall back to `gpt-5.6-terra` if Sol is unavailable.
- Codex needs credentials: either `OPENAI_API_KEY` set in the environment, or a prior `codex login`. If neither is present, tell the user instead of attempting the task.
