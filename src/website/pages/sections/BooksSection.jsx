import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const BooksSection = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://rhdi.world/api/books.php");
        const result = await response.json();

        if (result.success) {
          const data = result.data?.items || result.data || [];
          setBooks(data.slice(0, 6));
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const getBookCover = (book) => {
    if (!book.cover_image) return null;
    return `https://rhdi.world${book.cover_image}`;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1700px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-4 py-1 text-sm font-semibold">
            Resources
          </span>

          <h2 className="mt-5 text-5xl font-bold text-gray-900">
            Featured Books
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Discover discipleship books, leadership materials and biblical
            resources carefully selected to strengthen your spiritual journey.
          </p>

        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500">
            Loading books...
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">

              {books.map((book) => (
                <motion.div
                  key={book.id}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: .25
                  }}
                  onClick={() => navigate(`/books/${book.id}`)}
                  className="group cursor-pointer"
                >
                  <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-emerald-500 shadow-sm hover:shadow-2xl transition-all duration-300">

                    {/* IMAGE */}

                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">

                      {getBookCover(book) ? (
                        <img
                          src={getBookCover(book)}
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                      ) : null}

                      <div
                        className={`${
                          getBookCover(book) ? "hidden" : "flex"
                        } absolute inset-0 items-center justify-center bg-gradient-to-br from-emerald-100 to-green-50`}
                      >
                        <BookOpen
                          size={55}
                          className="text-emerald-300"
                        />
                      </div>

                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow">
                        ${Number(book.price || 0).toFixed(2)}
                      </div>

                    </div>

                    {/* CONTENT */}

                    <div className="p-4">

                      <h3 className="font-bold text-gray-900 text-sm line-clamp-2 min-h-[42px]">
                        {book.title}
                      </h3>

                      <p className="text-gray-500 text-xs mt-2 truncate">
                        {book.author || "Unknown Author"}
                      </p>

                      <div className="flex items-center justify-between mt-4">

                        <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
                          {book.stock_quantity || 0} in stock
                        </span>

                        <span className="text-xs text-gray-400">
                          View →
                        </span>

                      </div>

                    </div>

                  </div>
                </motion.div>
              ))}

            </div>

            <div className="flex justify-center mt-16">

              <button
                onClick={() => navigate("/books")}
                className="px-10 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition"
              >
                View All Books →
              </button>

            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BooksSection;