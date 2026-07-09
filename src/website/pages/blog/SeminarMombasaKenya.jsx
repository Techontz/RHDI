import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const SeminarMombasaKenya = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-black py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          >
            Discipleship Seminar In Mombasa Kenya. 2024
          </motion.h1>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold transition-colors group"
        >
          <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </button>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              We have had a very Graceful year only when we see sufficient harvests coming to the Lord. We have had a powerful seminar of great restoration to make people true disciples of Jesus Christ.
            </p>

            <p>
              The number we have invited was very small. It was a seminar of 50 people, but people came more and more to hear a teaching with revelation and the power of God where in it people have seen the true teaching of God and it has been able to change their lives.
            </p>

            <p>
              Those are the fruits that Christ has placed in the power of discipleship. We have had good conduct under our leader Pastor IIBRAHIMU. Discipleship is a good place to get good leaders.
            </p>

            <p className="text-xl text-green-700 font-semibold pt-4 border-t border-gray-200">
              We hope to be with you soon before the finish is over.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminarMombasaKenya;