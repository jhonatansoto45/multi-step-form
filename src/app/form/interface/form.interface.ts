export interface CardItem {
  image: string;
  name: string;
  price: number;
}
export interface CheckItem {
  checked: boolean;
  title: string;
  description: string;
  price: string;
}

export interface DataComplete {
  plan: Plan;
}

export interface Plan {
  name: string;
  price: number;
  type: 'mo' | 'yr';
}
