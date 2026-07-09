import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const DiscipleshipPracticeNepal = () => {
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
            Discipleship In Practice / Nepal
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
              In developing the continuation of God's work in the sect of discipleship, there must be tools that are provided to enable others to reach others in a way that is easy according to the relevant areas. You can also contribute these blessings if you see the importance of reaching more people.
            </p>

            <p>
              It's not just a bicycle, we need a motorcycle, a car, clothes, a Bible, etc... because the doctrine of discipleship is not only aimed at the city but also in the villages, we go and make sure that people receive the Wonderful Grace of the revelation of discipleship. When the discipleship is strong, then the leadership has a solid foundation.
            </p>

            <p>
              Nepal has been part of our classrooms' beautiful field for discipleship.
            </p>

            <p className="text-xl text-green-700 font-semibold pt-4 border-t border-gray-200">
              If you have a vision like this, it is good to feel like you are with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscipleshipPracticeNepal;