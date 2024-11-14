import { createContext, useContext, useState } from "react";
import data from "./data.json";

export interface Product {
  id: number;
  name: string;
  display: string;
  os: string;
  price: number;
  camera: string;
  ram: string;
  rom: string;
  img: string;
}

export interface Cart extends Product {
  quantity: number;
}

interface ShoppingCartContextState {
  products: Product[];
  selectedProduct?: Product;
  carts: Cart[];
  handleSelectProduct: (product: Product) => void;
  handleAddProductToCart: (product: Product) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextState | undefined>(undefined);

export function ShoppingCartProvider({ children }: { children: React.ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [carts, setCarts] = useState<Cart[]>([]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddProductToCart = (product: Product) => {
    const index = carts.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      setCarts((carts) =>
        carts.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        })
      );
    } else {
      setCarts((carts) => [{ ...product, quantity: 1 }, ...carts]);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{ products: data, selectedProduct, carts, handleSelectProduct, handleAddProductToCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error("useShoppingCartContext cannot use outside ShoppingCartProvider");
  }

  return context;
};
