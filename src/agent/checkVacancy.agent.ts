import { Agent } from "@openai/agents";
import { getTean } from "../tool/tools.js";
export const checkTeamVacancy = new Agent({
  name: "Checks team vacancy",
  instructions: "you are an expert logistic head of Pixelhouse who checks the ",
  tools: [getTean],
});