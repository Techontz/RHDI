import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, BookOpen, Loader2, ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useCart } from './cart/context/CartContext';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.rhdi.world/books.php?id=${id}`
        );
        const result = await response.json();
        console.log(result);
        
        if (result.success) {
          setBook(result.data);
        } else {
          setError('Failed to load book details');
        }
      } catch (err) {
        setError('Network error. Please try again later.');
        console.error('Error fetching book:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBookDetail();
    }
  }, [id]);

  const getBookCover = (book) => {
    if (!book?.cover_image) return null;
  
    return book.cover_image;
  };

  const handleAddToCart = () => {
    if (book && quantity > 0) {
      addToCart(book, quantity);
    }
  };

  const incrementQuantity = () => {
    if (book && quantity < book.stock_quantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-green-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading book details...</p>
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">{error || 'Book not found'}</p>
          <button
            onClick={() => navigate('/books')}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Books
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <button
          onClick={() => navigate('/books')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Books
        </button>
      </div>

      {/* Book Detail Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Book Cover Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="sticky top-24">
                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                  {getBookCover(book) ? (
                  <img
                    src={getBookCover(book)}
                      alt={book.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentElement.querySelector('.fallback-cover').style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className="fallback-cover w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100"
                    style={{
                      display: getBookCover(book) ? "none" : "flex",
                    }}
                  >
                    <BookOpen className="w-32 h-32 text-green-300" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Book Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  {book.title}
                </h1>
                <p className="text-xl text-gray-600">By: {book.author}</p>
              </div>

              <div className="mt-3">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                {book.category}
              </span>
            </div>

            {book.is_featured == 1 && (
              <div className="mt-4">
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                  Featured Book
                </span>
              </div>
            )}

              <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <span className="text-2xl font-bold text-green-700">${Number(book.price).toFixed(2)}</span>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-gray-700">
                  Available:
                    <span className="font-bold">
                      {book.stock_quantity}
                    </span>
                  </span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    disabled={quantity >= book.stock_quantity}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  {book.stock_quantity} copies available
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={book.stock_quantity === 0}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart - ${(Number(book.price) * quantity).toFixed(2)}
              </button>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  {book.description || 'No description available for this book.'}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <h3 className="font-semibold text-gray-900">Book Details:</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    <span className="font-medium">ISBN/ID:</span> {book.id}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Status:</span>{' '}
                    <span
                      className={
                        Number(book.is_active) === 1
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {Number(book.is_active) === 1
                        ? "Available"
                        : "Unavailable"}
                    </span>
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Added on:</span>{' '}
                    {new Date(book.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mt-6">
                <p className="text-gray-700 text-sm text-center">
                  📖 These resources are available for distribution to help spread true discipleship around the world.
                  Contact us for bulk orders and international shipping.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;