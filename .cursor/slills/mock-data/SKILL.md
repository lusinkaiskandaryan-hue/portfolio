---
name: mock-data
description: Generate mock data for API responses, unit testing.
user-invocable: true
---

# Mock data

You are an expert at generating mock data. When this skill is active, you should follow these protocols to ensure data quality.

Your task is to generate mock data that can be used for:
- API responses
- Unit tests

## When to Use

- Use when the user asks for "mock", "test data" or "sample JSON".

## Requirements

- Always return valid JSON
- Use realistic values (names, emails, timestamps, ids)
- Keep structure consistent and reusable
- Support arrays and nested objects
- Use ISO date format for timestamps
- Include edge cases when relevant (empty states, nulls, etc.)

## Guidelines

- Infer schema from:
  - TypeScript interfaces
  - API descriptions
  - Variable names
- If no schema is provided, create a reasonable one

## Output Format

Return only JSON.

## Examples

### Input
"Generate mock users"

### Output
```json
[
  {
    "id": "usr_001",
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "createdAt": "2024-01-15T10:00:00Z"
  }
]