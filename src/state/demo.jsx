import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addItem: (item) => {
        const currentCart = get().cart;
        const existingItemIndex = currentCart.findIndex(cartItem => cartItem._id === item._id);

        if (existingItemIndex >= 0) {
          const updatedCart = [...currentCart];
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            count: updatedCart[existingItemIndex].count + 1
          };
          // Only update once to reduce performance overhead
          setTimeout(() => set({ cart: updatedCart }), 0);
        } else {
          setTimeout(() => set({
            cart: [...currentCart, { _id: item._id, item: item, count: 1 }]
          }), 0);
        }
      },

      clearCart: () => set({ cart: [] }),

      removeItem: (id) => {
        const currentCart = get().cart;
        const existingItemIndex = currentCart.findIndex(cartItem => cartItem._id === id);

        if (existingItemIndex >= 0) {
          const updatedCart = [...currentCart];
          const existingItem = updatedCart[existingItemIndex];

          if (existingItem.count > 1) {
            updatedCart[existingItemIndex] = {
              ...existingItem,
              count: existingItem.count - 1
            };
          } else {
            updatedCart.splice(existingItemIndex, 1); // Remove item if count is 0
          }

          // Apply the update asynchronously
          setTimeout(() => set({ cart: updatedCart }), 0);
        }
      },

      getItemCount: (id) => {
        const currentItem = get().cart.find(cartItem => cartItem._id === id);
        return currentItem ? currentItem.count : 0;
      },

      getTotalPrice: () => {
        return get().cart.reduce((total, cartItem) => {
          return total + cartItem.item.price * cartItem.count;
        }, 0);
      }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ cart: state.cart }) // Persist only cart, not other state
    }
  )
);
