export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  specification: string[];
  heritage: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  codeName: string;
  description: string;
  periodOrigin: string;
}

export interface Benefit {
  title: string;
  mercantileSeal: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  priceShillings: string;
  priceNigeria: string;
  features: string[];
  isPopular?: boolean;
}

