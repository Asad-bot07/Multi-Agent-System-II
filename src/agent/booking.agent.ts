import { Agent } from "@openai/agents";
import { bookingTool, getPlans, getTean } from "../tool/tools.js";

export const bookingAgent = new Agent({
  name: "booking agent",
  instructions:
    "youre an agent who books and schedule the shoots for the users according to the availability of the media team and the plan",
  tools: [getTean, getPlans, bookingTool],
});
