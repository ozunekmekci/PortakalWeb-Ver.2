"use client";
import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import { CartContextType, CartItem } from "@/types";

const CART_STORAGE_KEY = "portakal-cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

const getStoredCart = (): CartItem[] => {
  try {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Cart storage error:", error);
    return [];
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getStoredCart());
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  }, [items]);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const found = prev.find((i) => i.image === item.image);
      if (found) {
        return prev.map((i) =>
          i.image === item.image ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((image: string) => {
    setItems((prev) => prev.filter((i) => i.image !== image));
  }, []);

  const updateQuantity = useCallback((image: string, quantity: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.image === image ? { ...i, quantity: Math.max(1, quantity) } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const total = useMemo(() => 
    items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  const count = useMemo(() => 
    items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const value = useMemo(() => ({
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
    count
  }), [items, addToCart, removeFromCart, updateQuantity, clearCart, total, count]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}; 