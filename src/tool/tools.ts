import { tool } from "@openai/agents";
import z from "zod";
import fs from "fs/promises";
import { plans, vacantTeam, owners } from "../data/data.js";

export const getPlans = tool({
  name: "get plans",
  description: "this fetches the available plans for shoot",
  parameters: z.object({}),
  execute: async function () {
    return plans;
  },
});

export const getTean = tool({
  name: "Check team",
  description:
    "this returns the data of the team or photographer or videographer under Pixelhouse",
  parameters: z.object({}),
  execute: async function () {
    return vacantTeam;
  },
});

export const getOwners = tool({
  name: "show owners",
  description:
    "this returns the owner of Pixelhouse to the customer if they enquired",
  parameters: z.object({}),
  execute: async function () {
    return owners;
  },
});

export const initiateRefund = tool({
  name: "initiate refund",
  description: "this tool helps in processing refunds for a customer",
  parameters: z.object({
    customerId: z.number().describe("This is the customer id"),
    reasonRefund: z.string().describe("Reason for refund"),
  }),
  execute: async function ({ customerId, reasonRefund }) {
    fs.appendFile(
      "./refunds.txt",
      `Refund for customer having customer id : ${customerId} has been initiated due to ${reasonRefund}`,
      "utf-8"
    );
    return { refundInitiated: true };
  },
});

export const bookingTool = tool({
  name: "booking tool",
  description: "this helps to store the user and its plan into the database",
  parameters: z.object({
    name: z.string().describe("the name of the user"),
    plans: z.number().describe("the price of the plan"),
  }),
  execute: async function ({ name, plans }) {
    fs.appendFile(
      "./bookings.txt",
      `the booking for ${name} has been booked for plan ${plans}`,
      "utf-8"
    );
    return { isBooked: true };
  },
});

// export default { getPlans, bookingTool, initiateRefund, getOwners, getTean };
