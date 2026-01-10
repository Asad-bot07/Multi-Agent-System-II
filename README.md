# Multi-Agent System (Agent Handoff Architecture)

This repository demonstrates a **multi-agent AI system with intelligent handoff**, built using the **OpenAI Agents SDK**.  
A central **Reception Agent** understands the user’s intent and routes the request to the most suitable specialized agent similar to how a real-world receptionist works.

> **Note**  
> **Pixelhouse is only an example use case.**  
> The system architecture itself is **generic, reusable, and not tied to any specific business domain**.

---

## Features

- Multi-agent architecture
- Automatic agent handoff based on user intent
- Clear separation of responsibilities
- Built with `@openai/agents`
- Environment-based configuration using `dotenv`

---
## Tech Stack

- **Node.js**
- **OpenAI Agents SDK**
- **Zod** (schema validation)
- **dotenv**
- **fs/promises** (persistence)
---

## Architecture Overview

The system is centered around a **Reception Agent** whose only job is to:
1. Understand the user’s request
2. Decide which agent is best suited
3. Hand off the task to that agent

### Available Agents

| Agent | Description |
|------|------------|
| **Sales Agent** | Handles queries related to plans, pricing, and first-time customer questions |
| **Refund Agent** | Initiates refunds, collects user details, and records cancellation reasons |
| **Check Team Vacancy Agent** | Checks team availability for scheduling shoots |
| **Booking Agent** | Books shoots and assigns team members based on availability |

---

## Agent Handoff Flow

```
User Query
   ↓
Reception Agent
   ↓ (intent detection)
---------------------------------
| Sales | Refund | Vacancy | Booking |
---------------------------------
```
---
## Why This Architecture?

This system:
- Scales easily with new agents
- Keeps responsibilities isolated
- Mimics real-world organizational workflows
- Improves maintainability and clarity
---

### Running the Agent
```
async function runAgent(query: string) {
  const result = await run(mainAgent, query);
  console.log(result.finalOutput);
}
```
### Example Query
```
const query =
  "Hey there, my name is Asad Hussain with userid #2408 and I want a refund as the shoot was cancelled";
```
### Example Use Cases

- “What plans do you offer?” → Sales Agent

- “I want a refund for my last shoot” → Refund Agent

- “Is your team available this weekend?” → Check Team Vacancy Agent

- “Book a shoot for next Friday” → Booking Agent

---
## Environment Setup

1. Install dotenv
```
npm i dotenv
```
2. Create a .env file in the root directory:
```
OPENAI_API_KEY=your_openai_api_key = add your api key
```
---
## Project Structure
```
├── 📁 src
│   ├── 📁 agent
│   │   ├── 📄 agent.service.ts # Main entry point
│   │   ├── 📄 booking.agent.ts # Handles bookings
│   │   ├── 📄 checkVacancy.agent.ts # Manages team availabilty
│   │   ├── 📄 refund.agent.ts # Handles refunds and write in database ( refund.txt)
│   │   └── 📄 sales.agent.ts # Handles pricing and plans
│   ├── 📁 data
│   │   └── 📄 data.ts # Dummy data
│   ├── 📁 tool
│   │   └── 📄 tools.ts # Tools used by agents
│   └── 📄 types.ts # TypeScript types
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 refunds.txt # The data of the one who ask for refund
└── ⚙️ tsconfig.json
```

---
## Contact

I am open to discussing opportunities and collaborations. Connect with me:

- **Email:** [techie.asad.dev@gmail.com](mailto:techie.asad.dev@gmail.com)  
- **GitHub:** [@asad-bot07](https://github.com/Asad-bot07)  
- **LinkedIn:** [Asad Hussain](https://www.linkedin.com/in/asad-hussain-765502319/)  

---

## Portfolio Link

Explore my work and professional journey: [https://asadtechdev.vercel.app](https://asadtechdev.vercel.app/)