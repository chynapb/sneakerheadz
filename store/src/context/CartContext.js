import { createContext, useContext, useEffect, useState } from 'react';
import { ShoppingCart } from '../components/ShoppingCart';

// Create context
const CartContext = createContext({});

// Store cart items in a variable for local storage
const storedItems = JSON.parse(localStorage.getItem('cart-items') || '[]');

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(storedItems);
  const [isOpen, setIsOpen] = useState(false);

  // Add items to local storage
  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify(cartItems));
  }, [cartItems]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id) == null) {
        return [...curItems, { id, quantity: 1 }];
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id)?.quantity === 1) {
        return curItems.filter((item) => item.id !== id);
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeCartItem = (id) => {
    setCartItems((curItems) => {
      return curItems.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    localStorage.setItem('cart-items', JSON.stringify([]));
  };

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeCartItem,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        clearCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen}></ShoppingCart>
    </CartContext.Provider>
  );
};
