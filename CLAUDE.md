@AGENTS.md

## Legal & GDPR Skills

The following skills are available in `.claude/skills/` for legal document work:

### GDPR Compliance (Hemant Naik)
- **Path:** `.claude/skills/gdpr-grc/GDPR - Claude Skill/gdpr-compliance/`
- **Use for:** GDPR audits, privacy notices, DPAs, DPIAs, data flow reviews
- **Files:** `SKILL.md`, `references/documents.md`, `references/privacy-notice.md`, `references/dpa-template.md`

### Cookie Policy (Malik Taiar / lawvable)
- **Path:** `.claude/skills/legal-skills/skills/politique-cookies-malik-taiar/`
- **Use for:** Drafting GDPR/ePrivacy compliant cookie policies
- **Files:** `SKILL.md`, `references/`, `assets/`

### Privacy Policy (Malik Taiar / lawvable)
- **Path:** `.claude/skills/legal-skills/skills/politique-confidentialite-malik-taiar/`
- **Use for:** Drafting GDPR-compliant privacy policies (Art. 13/14)
- **Files:** `SKILL.md`, `references/`, `assets/`

### GDPR Privacy Notice EU (Oliver Schmidt-Prietz / lawvable)
- **Path:** `.claude/skills/legal-skills/skills/gdpr-privacy-notice-eu-oliver-schmidt-prietz/`
- **Use for:** Creating GDPR privacy notices for EU/EEA (DE, FR, AT, IT, ES, NL, BE, IE, UK)
- **Files:** `SKILL.md`, `references/`

## Workflow preferences

- **Auto-commit and push after every code change.** When working on this repo, do NOT ask "should I commit?" or "want me to push?" — just commit with a clear conventional-commit message (`feat:` / `fix:` / `chore:` / `refactor:` / `docs:`) and push immediately. Use small focused commits per logical change.
- **Push directly to `main`.** Do not create feature branches or PRs. Commit and push straight to `main`. The repo has auto-deploy via webhook — every push to main goes live automatically.
- **Token handling**: never persist GitHub tokens in `.git/config`, `~/.gitconfig`, or any file. Tokens are passed inline via `GH_TOKEN` env var or one-shot push URL only.
