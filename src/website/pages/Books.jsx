import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, BookOpen, Loader2 } from 'lucide-react';

const Books = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch books from API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://rhdi.world/api/books.php");
        const result = await response.json();
        console.log(result);
        
        if (result.success) {
          setBooks(result.data || []);
        } else {
            setError(result.error || "Failed to load books");
        }
      } catch (err) {
        setError('Network error. Please try again later.');
        console.error('Error fetching books:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Helper function to get cover image or placeholder
  const getBookCover = (book) => {
    if (!book.cover_image) return null;

    if (book.cover_image.startsWith("http")) {
        return book.cover_image;
    }

    return `https://rhdi.world${book.cover_image}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-black py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our Books
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Resources for True Discipleship
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>
      </div>

      {/* Books Grid Section */}
      <div className="container mx-auto px-4 py-16">
        {loading ? (
          // Loading state
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="w-12 h-12 text-green-600 animate-spin mb-4" />
            <p className="text-gray-600 text-lg">Loading books...</p>
          </div>
        ) : error ? (
          // Error state
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center max-w-md">
              <p className="text-red-600 text-lg mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : books.length === 0 ? (
          // Empty state
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <BookOpen className="w-20 h-20 text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">No books available at the moment.</p>
          </div>
        ) : (
          // Books grid
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {books.map((book) => (
              <motion.div
                key={book.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/books/${book.id}`)}
              >
                {/* Book Cover - Full Image */}
                <div className="relative aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {getBookCover(book) ? (
                    <img
                      src={getBookCover(book)}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentElement.querySelector('.fallback-cover').style.display = 'flex';
                      }}
                    />
                  ) : null}
                  
                  {/* Fallback cover when image fails or doesn't exist */}
                  <div 
                    className="fallback-cover w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100"
                    style={{ display: getBookCover(book) ? 'none' : 'flex' }}
                  >
                    <BookOpen className="w-20 h-20 text-green-300" />
                  </div>

                  {/* Always visible info overlay at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 pb-3 px-3">
                    <h3 className="text-white text-sm font-bold line-clamp-2 mb-1">
                      {book.title}
                    </h3>
                    <p className="text-gray-200 text-xs">By: {book.author || "Dr. Daniel"}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-green-400 text-sm font-semibold">
                        ${Number(book.price).toFixed(2)}
                      </span>
                      <span className="text-white text-xs bg-green-600/90 px-2 py-1 rounded-full">
                        {Number(book.stock_quantity)} available
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Footer Note */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-700 to-emerald-700 py-10 mt-8"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-lg md:text-xl">
            These books are available for distribution to help spread true discipleship around the world
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="mt-4 bg-white text-green-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg inline-flex items-center gap-2 transition-colors"
          >
            Request Books
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Books;