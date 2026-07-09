import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const TrainingVaranasi = () => {
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
            Discipleship Training in Varanasi City, India
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
              I have had a heart of gratitude for what is happening in India because it is the perspective of the vision of Christ Jesus. Jesus did not have seminars for leaders, but he had the teaching of discipleship. The model you see in the picture is the teaching system.
            </p>

            <p>
              God bless the country of India for the good work of discipleship. Our vision is to ensure that the whole world lives with that system.
            </p>

            <p>
              Dr. Daniel's approach is to ensure that all churches live by the class system as seen in the picture.
            </p>

            <p className="text-xl text-green-700 font-semibold pt-4 border-t border-gray-200">
              May God bless Pastor David more and more in the country of India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingVaranasi;