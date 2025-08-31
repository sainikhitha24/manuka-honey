export interface Product {
  id: string;
  name: string;
  umf: string;
  mgo: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  imageUrl: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}
