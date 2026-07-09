import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const TrainingDarEsSalaam = () => {
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
            Training for Church Leaders Dar es Salaam, Tanzania
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
              We have had the wonderful grace to see how the God of discipleship gives us permission in front of many leaders of various churches in Africa and elsewhere in the world.
            </p>

            <p>
              There, Dr. Daniel met with some leaders of various churches for seven hours, being able to teach them how to make the church they have led become a church of discipleship and not a church of partners.
            </p>

            <p>
              These leaders took their time to listen to Dr. Daniel where they were able to have a testimony for the doctrine that they said they would work on and it would bear fruit in their church.
            </p>

            <p className="text-xl text-green-700 font-semibold pt-4 border-t border-gray-200">
              That teaching has brought a great change to some churches in Tanzania where Dr. Daniel has been receiving enough invitations to teach discipleship lessons. Honor and glory are yours, God.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDarEsSalaam;