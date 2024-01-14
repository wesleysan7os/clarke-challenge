export interface Supplier {
  _id: string;
  name: string;
  logo?: string;
  state?: string;
  kwhCost: number;
  minKwhLimit: number;
  customersCount: number;
  customersRatingAverage: number;
  tags: string[];
} 