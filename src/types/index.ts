export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  stock: number;
  slug: string;
  rating?: number;
  reviews?: number;
  createdAt?: string;
  updatedAt?: string;
  oldPrice?: number;
  discount?: number;
  badge?: string;
  info?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  count: number;
  total: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export interface ToastProps {
  message: string;
  duration?: number;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
} 