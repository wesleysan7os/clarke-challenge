export interface Supplier {
  name: string;
  logo?: string;
  state?: string;
  kwhCost: number;
  minKwhLimit: number;
  customersCount: number;
  customersRatingAverage: number;
} 