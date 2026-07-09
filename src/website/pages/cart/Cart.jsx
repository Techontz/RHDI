import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  BookOpen,
} from "lucide-react";
import { useCart } from "./context/CartContext";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <ShoppingBag
            size={70}
            className="mx-auto text-purple-500 mb-6"
          />

          <h1 className="text-3xl font-bold text-white mb-3">
            Your Cart is Empty
          </h1>

          <p className="text-gray-400 mb-8">
            Browse our collection and add books to your cart.
          </p>

          <Link
            to="/books"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
          >
            <BookOpen size={18} />
            Browse Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-6"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <h1 className="text-4xl font-bold">
            Shopping Cart
          </h1>

          <p className="text-gray-400 mt-2">
            {getTotalItems()} item(s) in your cart
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">

        {/* Cart Items */}

        <div className="lg:col-span-2 space-y-5">

          {cartItems.map((item) => (
            <div
              key={item.book_id}
              className="bg-slate-800 rounded-xl border border-slate-700 p-5 flex gap-5"
            >
              <div className="w-28 h-40 bg-slate-700 rounded overflow-hidden flex-shrink-0">

                {item.cover ? (
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <BookOpen className="text-gray-500" />
                  </div>
                )}

              </div>

              <div className="flex-1">

                <h2 className="text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="text-gray-400 mt-1">
                  {item.author}
                </p>

                <p className="text-purple-400 text-lg font-bold mt-3">
                  ${Number(item.price).toFixed(2)}
                </p>

                <div className="flex items-center gap-3 mt-6">

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.book_id,
                        item.quantity - 1
                      )
                    }
                    className="w-9 h-9 rounded bg-slate-700 hover:bg-slate-600 flex items-center justify-center"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="text-lg font-semibold w-8 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.book_id,
                        item.quantity + 1
                      )
                    }
                    className="w-9 h-9 rounded bg-slate-700 hover:bg-slate-600 flex items-center justify-center"
                  >
                    <Plus size={18} />
                  </button>

                  <button
                    onClick={() =>
                      removeFromCart(item.book_id)
                    }
                    className="ml-5 flex items-center gap-2 text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={18} />
                    Remove
                  </button>

                </div>

              </div>

              <div className="text-right">

                <p className="text-xl font-bold">
                  $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Summary */}

        <div>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 sticky top-24">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-3">

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Items
                </span>

                <span>
                  {getTotalItems()}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Shipping
                </span>

                <span className="text-green-400">
                  FREE
                </span>
              </div>

              <div className="border-t border-slate-700 pt-4 flex justify-between text-xl font-bold">

                <span>Total</span>

                <span className="text-purple-400">
                  ${getTotalPrice().toFixed(2)}
                </span>

              </div>

            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full mt-8 bg-purple-600 hover:bg-purple-700 py-4 rounded-lg font-semibold text-lg transition"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/books"
              className="block text-center mt-4 text-gray-400 hover:text-white"
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;