import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (book, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.book_id === book.id);
      
      if (existingItem) {
        // Update quantity if book already in cart
        const updatedItems = prevItems.map(item =>
          item.book_id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        toast.success(`Updated ${book.title} quantity in cart`);
        return updatedItems;
      } else {
        // Add new item
        toast.success(`Added "${book.title}" to cart`);
        return [
          ...prevItems,
          {
              book_id: book.id,
              title: book.title,
              author: book.author,
              price: Number(book.price),
              cover_image: book.cover_image,
              quantity,
              stock_quantity: book.stock_quantity,
          },
      ];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (bookId) => {
    const book = cartItems.find(item => item.book_id === bookId);
    setCartItems(prevItems => prevItems.filter(item => item.book_id !== bookId));
    if (book) {
      toast.success(`Removed "${book.title}" from cart`);
    }
  };

  // Update quantity
  const updateQuantity = (bookId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(bookId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.book_id === bookId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    toast.success('Cart cleared');
  };

  // Get total items count
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Get total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Prepare order data for API
  const getOrderData = (addressId, paymentMethod = 'card') => {
    return {
      address_id: addressId,
      type: 'purchase',
      payment_method: paymentMethod,
      payment_status: 'pending',
      currency: 'USD',
      items: cartItems.map(item => ({
        book_id: item.book_id,
        quantity: item.quantity
      }))
    };
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
    getOrderData
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};