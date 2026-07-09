import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const DiscipleshipBooksIndia = () => {
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
            Discipleship Books Distributed in India
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
              We had a very good time in India when we had a discipleship seminar and later we distributed tools such as books to help you study. and make them have sources to reach others.
            </p>

            <p>
              In fact, RHDI has been the source of making leaders see first the importance of reaching out to others and making them true disciples of Jesus. and another thing is to receive the revelation of God's Word which is clear and its truth.
            </p>

            <p>
              Many leaders have been teaching their traditions rather than teaching the true revelation of the Word of God. Actually India, we have seen your response, we say God bless you and we are ready to serve you. Pastor David, you are a servant whom God has called you to be the main leaven in your country INDIA.
            </p>

            <p className="font-semibold text-green-700">
              Tools are the right of all our classes.
            </p>

            <p className="text-xl text-gray-800 font-semibold pt-4 border-t border-gray-200">
              Invite RHDI in your area so that we can make the nations to be true disciples of Christ Jesus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscipleshipBooksIndia;