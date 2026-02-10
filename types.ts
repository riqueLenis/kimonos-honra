export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  image: string;
  description: string;
  isFeatured?: boolean;
}

export type CategoryId = 'jiu-jitsu' | 'karate' | 'taekwondo' | 'hapkido' | 'faixas' | 'acessorios';

export interface Category {
  id: CategoryId;
  label: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}