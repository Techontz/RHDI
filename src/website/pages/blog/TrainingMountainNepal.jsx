import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const TrainingMountainNepal = () => {
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
            Discipleship Training Seminar in Mountain Nepal 2024
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
              Praise be to the God of our Lord Jesus Christ. We have made excellent progress in making people true disciples of Christ Jesus. I hope that you have heard a lot about the salvation of Christ.
            </p>

            <p>
              God has been able to open doors for us in the country of Nepal there, where this year 2024 we had the doctrine of discipleship. Many leaders participated with us in the teaching and saw what the Lord has put in the teaching of restoration of discipleship. Join us in reaching more people.
            </p>

            <p>
              Christ wants you. Christ also needs that one. We have placed Nepal in the hands of God so that God can make more disciples.
            </p>

            <p className="text-xl text-green-700 font-semibold pt-4 border-t border-gray-200">
              Our teachings have been able to be under our supervisor who is pastor VIVEK.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingMountainNepal;