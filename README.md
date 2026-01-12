# Multi-Agent System (Agent Handoff Architecture)

This repository demonstrates a **production-ready multi-agent AI system with intelligent handoff**, built using the **OpenAI Agents SDK**.

At the core of the system is a **Reception Agent** that understands user intent, applies **input/output guardrails**, and routes the request to the most suitable specialized agent similar to a real-world receptionist.


> **Note**  
> **Pixelhouse is only an example use case.**  
> The system architecture itself is **generic, reusable, and not tied to any specific business domain**.


---
## Tech Stack

- **Node.js**
- **OpenAI Agents SDK**
- **Zod** (schema validation)
- **dotenv**
- **fs/promises** (persistence)
---
## Project Structure
```
├── 📁 agent
│   ├── 📄 agent.service.ts # Main agent
│   ├── 📄 booking.agent.ts # Booking agent
│   ├── 📄 checkVacancy.agent.ts # Team managing agent
│   ├── 📄 refund.agent.ts # Manages refund
│   └── 📄 sales.agent.ts # Sales agent
├── 📁 data
│   └── 📄 data.ts # Dummy data
├── 📁 guardrails
│   ├── 📄 agentRes.guardrails.ts # Output Guardrails
│   └── 📄 userInput.guardrails.ts # Input Guardrails
├── 📁 tool
│   └── 📄 tools.ts # Agent Tools
└── 📄 types.ts # TS types
```

---

## Features

- Multi-agent architecture
- Central **Reception Agent**
- Automatic intent-based handoff
- **Input guardrails** for safety & validation
- **Output guardrails** for controlled responses
- Modular and scalable design
---
## Architecture Overview

### Reception Agent Responsibilities

1. Understand the user’s intent  
2. Apply **input guardrails**  
3. Select the appropriate agent  
4. Hand off the task  
5. Apply **output guardrails** before responding 

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
Input Guardrails
   ↓
Reception Agent
   ↓ (Intent Detection)
---------------------------------
| Sales | Refund | Vacancy | Booking |
---------------------------------
   ↓
Output Guardrails
   ↓
Final Response
```

---
## Why This Architecture?

- Scalable and modular
- Clear separation of concerns
- Real-world workflow simulation
- Built-in safety with guardrails
- Easy to extend with new agents
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

## Contact

I am open to discussing opportunities and collaborations. Connect with me:

- **Email:** [techie.asad.dev@gmail.com](mailto:techie.asad.dev@gmail.com)  
- **GitHub:** [@asad-bot07](https://github.com/Asad-bot07)  
- **LinkedIn:** [Asad Hussain](https://www.linkedin.com/in/asad-hussain-765502319/)  

---

## Portfolio Link

Explore my work and professional journey: [https://asadtechdev.vercel.app](https://asadtechdev.vercel.app/)