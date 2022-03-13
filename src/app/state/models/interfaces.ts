export interface User {
  id: string;
  name: string;
  email: string;
  photoURL?: string;
  employee_code: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}