---
name: pr-review
description: Review PR and add comments.
user-invocable: true
---

#Focus on:
- React best practices
- Hooks correctness
- State management issues
- Performance problems
- Component reusability
- Accessibility
- TypeScript safety
- Async handling
- Error boundaries
- Clean architecture

##Check for:
- Missing dependencies in useEffect
- Unnecessary rerenders
- Incorrect memoization
- Props drilling
- Mutable state updates
- Missing keys in lists
- Bad component separation
- Large components that should be split
- Duplicate logic
- Unsafe any typing
- Memory leaks
- Missing loading/error states
- Accessibility issues (buttons, labels, aria)

##Performance review:
- Suggest useMemo/useCallback only when beneficial
- Detect expensive rerenders
- Detect unnecessary global state usage
- Check lazy loading opportunities
- Verify query caching strategy if React Query is used

##Code quality:
- Prefer readable and maintainable solutions
- Suggest reusable hooks when logic repeats
- Verify naming consistency
- Ensure proper folder structure

##Review behavior:
- Use add_comment_to_pending_review for every actionable issue
- Keep comments concise and specific
- Explain WHY something is problematic
- Suggest concrete improvements
- Avoid commenting on formatting or subjective preferences

###Severity prefixes:
[critical] security, crashes, data loss
[major] bugs, architectural problems
[minor] maintainability or readability issues
[nit] optional improvements