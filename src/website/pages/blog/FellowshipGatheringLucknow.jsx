import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const FellowshipGatheringLucknow = () => {
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
            Discipleship Fellowship Gathering December in Lucknow 2023
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
              What is the grace to see a very good development for our unity and association in the city of Lucknow where today true discipleship is bearing big and mature fruits? Mchunaga David has been a great source and a great cause in the area of making leaders of various departments to be true disciples of Christ Jesus.
            </p>

            <p>
              We see good hope only when God allows times and seasons to fulfill his purpose. we are only God's workers for what God has placed in us. discipleship has met to discuss the continuation of the work of making others disciples of Christ.
            </p>

            <p>
              Where in examining the scriptures we see the goodness and virtues of God. making others true disciples of Christ Jesus is a revelation.
            </p>

            <p className="text-xl text-green-700 font-semibold pt-4 border-t border-gray-200">
              Pastor David RHDI exists to reach all nations and tribes in general. May God raise you higher. Bring another to Jesus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FellowshipGatheringLucknow;