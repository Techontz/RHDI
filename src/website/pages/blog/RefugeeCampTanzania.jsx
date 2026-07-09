import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const RefugeeCampTanzania = () => {
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
            Discipleship Seminar In Refugee Camp In Nyarugusu Tanzania 2023
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
              The great work that Dr. Daniel has been doing is to ensure that people of all ages are reached by the true teaching which is to make all people true disciples of Jesus Christ. In 2023 Dr. Daniel had a good time to reach the refugees living in the refugee camp, where there was a great response from many people who were touched by that teaching. There has been a very big change in the direction of their lives and their Christianity.
            </p>

            <p>
              The doctrine of discipleship is a doctrine that brings a better direction to the leaders of various churches. Our goal is to ensure that the church gets the life of true doctrine.
            </p>

            <p>
              Today we have failed to understand the true doctrine of the church. Today we have had a wave of teachings about blessings, sacrifices and miracles, where most people in churches have become partners rather than disciples. About 438 people we have seen receive a great change and agree with this teaching.
            </p>

            <p className="text-xl text-green-700 font-semibold pt-4 border-t border-gray-200">
              The God of light is increasingly illuminating his people with wonderful grace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefugeeCampTanzania;