import "dotenv/config";
import { Agent, run } from "@openai/agents";
// import { getOwners, getPlans } from "../tool/tools.js";
import { refundAgent } from "./refund.agent.js";
import { checkTeamVacancy } from "./checkVacancy.agent.js";
import { bookingAgent } from "./booking.agent.js";
import { salesAgent } from "./sales.agent.js";

const mainAgent = new Agent({
  name: "reception agent",
  instructions:
    "You are the receptionist expert in understanding what does the customer needs and then route them or handoff to the right agent directly",
  handoffDescription: `you have 4 agents available : 
  - salesAgent : Experts in handling queries related to sales like plans, pricing available. good for first commer
  - refundAgent : experts in initiating refunds for the customers, taking username and issues for our betterment
  - checkTeamVacancy : experts in managing the availability of our team members which helps user to schedule their shoot
  - bookingAgent : experts in booking shoots for the customers and assign them members based on their availability
  `,
  handoffs : [salesAgent, refundAgent, checkTeamVacancy, bookingAgent]
});

async function runAgent(query: string) {
  const result = await run(mainAgent, query);
  console.log(result.finalOutput);
  // console.log(result.history);
}

const query : string = "Hey there, my name is Asad Hussain with userid #2408 and i want to have a refund request as the shoot has been cancelled due to some reasons";
runAgent(query);
