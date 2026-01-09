import { Plan, Owner, TeamMember } from "../types.js";

export const plans: Plan[] = [
  {
    plan_id: 1,
    price_inr: 1299.0,
    type: "Reel Shooting + Editing",
  },
  {
    plan_id: 2,
    price_inr: 2499.0,
    type: "Promotional video + Editing",
  },
  {
    plan_id: 3,
    price_inr: 999.0,
    type: "Personal Shoot + Editing",
  },
];

export const owners: Owner[] = [
  {
    name: "Asad Hussain",
    position: "Co-founder and technical lead",
  },
  {
    name: "Subhradeep Roy Chaudhary",
    position: "Founder and CEO",
  },
];

export const vacantTeam: TeamMember[] = [
  {
    name: "Parthiba Mondal",
    role: "photographer and videographer",
    isAvailable: false,
  },
  {
    name: "Aritra Mukherjee",
    role: "photographer and videographer",
    isAvailable: true,
  },
  {
    name: "Sudipta Naiya",
    role: "Editor",
    isAvailable: false,
  },
  {
    name: "Spandan Sur",
    role: "Editor",
    isAvailable: true,
  },
];

// export default {
//   plans,
//   owners,
//   vacantTeam,
// };
