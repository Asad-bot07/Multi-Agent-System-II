import "dotenv/config";
import { Agent, run } from "@openai/agents";
import { getOwners, getPlans } from "../tool/tools.js";
import { refundAgent } from "./refund.agent.js";
import { checkTeamVacancy } from "./checkVacancy.agent.js";
import { bookingAgent } from "./booking.agent.js";


const mainAgent = new Agent({
  name: "Sales Agent",
  instructions:
    "You are an expert sales agent who only deals with sales related queries for an media agency company named Pixelhouse, talk to the user and help them in what they need",
  tools: [
    getPlans,
    refundAgent.asTool({
      toolName: "refund expert",
      toolDescription: "handles refund queries and requests",
    }),
    checkTeamVacancy.asTool({
      toolName: "check team availbility",
      toolDescription:
        "checks data and tell wheather a photographer or videographer is available or not",
    }),
    getOwners,
    bookingAgent.asTool({
      toolName: "book shoot for user",
      toolDescription: "books the shoot for the user",
    }),
  ],
});

async function runAgent(query : string) {
  const result = await run(mainAgent, query);
  console.log(result.finalOutput);
}

const query = "I want to book a reel shoot for tommorow, under 1299";
runAgent(query);
