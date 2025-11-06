import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number,
  img: string;
  title: string;
  price: number;
  sold: number;
}

interface StoreState {
  products: Product[];
  addProduct: (product: Product[]) => void;
}

export const productStore = create<StoreState>()(

  persist(
    (set)=>({
      id: 1,
      products: [],
      addProduct: (products) => set({ products }),
    }),
     { name: "product-storage" }
  )
);

