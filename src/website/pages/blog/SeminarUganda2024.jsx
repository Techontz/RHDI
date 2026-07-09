import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const SeminarUganda2024 = () => {
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
            Seminar Discipleship In Uganda 2024
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
              Discipleship work continues. Again I always tell people that without discipleship we cannot have a strong leadership in the church or have a strong church. And Jesus knowing this began to teach his disciples. He let them know the secrets of the kingdom and in the kingdom Jesus was known as the king. Without Jesus to teach them, they would not have known all that.
            </p>

            <p>
              Honor and glory belong to him, the Father of lights. Our seminar went very well where people's response was there where we saw an increase and people changed their minds we witnessed. That is the teaching of discipleship.
            </p>

            <p>
              They make you realize what you deserve to do in serving God and serving other people.
            </p>

            <p className="text-xl text-green-700 font-semibold pt-4 border-t border-gray-200">
              Our sincere thanks also go to our pastor DR. KABMBI EMMANUEL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminarUganda2024;