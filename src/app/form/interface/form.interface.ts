export interface CardItem {
  image: string;
  name: string;
  price: number;
}
export interface CheckItem {
  checked: boolean;
  title: string;
  description: string;
  price: number;
}

//* OBJETO DE DATOS
export interface DataComplete {
  plan?: Plan;
  user: User;
  addtions?: CheckItem[];
}

export interface User {
  name: string;
  email: string;
  phone: number;
}

export interface Plan {
  name: string;
  price: number;
  type: 'mo' | 'yr';
}
