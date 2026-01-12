import { Agent, InputGuardrail, run } from "@openai/agents";
import z from "zod";

export const userInputGuardrail: InputGuardrail = {
  name: "User Input Guardrail",
  execute: async (args) => {
    const userInput = args.input as string;
    const res = await run(checkUserInput, userInput);
    return {
      tripwireTriggered: !res.finalOutput?.isValid,
      outputInfo: "User input validation completed",
    };
  },
};

const checkUserInput = new Agent({
  name: "User Input Checker",
  instructions: `
    The user input should be related to all the below :
    - Should be related to pixelhouse.in (bookings, plans, refund, booking and so on)
    - Should be a authentic question or query
    - Should consist no foul language or anything off topic than pixelhouse.in
    `,
  outputType: z.object({
    isValid: z.boolean().describe("if the input is valid"),
  }),
});
