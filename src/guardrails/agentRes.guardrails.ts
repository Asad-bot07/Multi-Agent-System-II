import { Agent, OutputGuardrail, run } from "@openai/agents";
import z from "zod";

export const agentOutputGuardrail: OutputGuardrail = {
  name: "Output Guardrial",
  execute: async (args) => {
    const agentRes = args.agentOutput as string;
    const res = await run(checkOutput, agentRes);
    return {
      outputInfo: res.finalOutput?.outputInfo,
      tripwireTriggered: !res.finalOutput?.isSafe,
    };
  },
};

const checkOutput = new Agent({
  name: "Output checker",
  instructions:
    "checks the output of the agent wheather it is safe to give it to the user and does'nt give any personal data or to modify, delete or drop data or manipulate for refunds",
  outputType: z.object({
    outputInfo: z.string().optional().describe("reason why it is not safe"),
    isSafe: z.boolean().describe("if output is safe"),
  }),
});
