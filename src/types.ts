export interface Plan {
  plan_id: number;
  price_inr: number;
  type: string;
}

export interface Owner {
  name: string;
  position: string;
}

export interface TeamMember {
  name: string;
  role: string;
  isAvailable: boolean;
}
