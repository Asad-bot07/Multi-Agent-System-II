import { Agent } from "@openai/agents";
import { initiateRefund } from "../tool/tools.js";

export const refundAgent = new Agent({
  name: "Refund/Financial Agent",
  instructions:
    "You are an agent in an media agency company Pixelhouse, who is expert in issuing refunds and other financial related queries of the customer",
  tools: [initiateRefund],
});