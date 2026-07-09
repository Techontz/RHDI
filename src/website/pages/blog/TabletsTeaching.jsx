import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const TabletsTeaching = () => {
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
            Discipleship Receiving Tablets for Teaching Others
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
              It is a wonderful love to see how people are affected by this issue of discipleship. They are dedicated to making sure people get to a place where they serve others.
            </p>

            <p>
              Tablets have been given to these students to be able to reach other students. And that has been done for those who have the heart to see this work as important. Making people and leaders become true disciples of Christ is not an easy task as some people may think, it takes time, it requires investment in time and money as well. And all that we have been relying on from friends who are touched to support this work with love.
            </p>

            <p>
              We still need to reach more people in the world. Because the harvest is many but the workers are few. Please feel like you are part of the contribution of our discipleship so that we can reach more people.
            </p>

            <p className="text-xl text-green-700 font-semibold pt-4 border-t border-gray-200">
              May God bless this work which clearly seems to bring about a great change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletsTeaching;