import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const SeminarPakistan = () => {
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
            Discipleship Seminar In Pakistan
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
              The God of discipleship again made a new way of discipleship in Pakistan. I hope my approach has been bringing great fruits to Islamic countries.
            </p>

            <p>
              May the Father of our Lord Jesus Christ be thanked for enabling us to see powerful discipleship in Pakistan. Many have been appearing there in our seminars and following the teachings of discipleship which has been seen to change the lives of many people. Today's Pakistan is not what it used to be. We are ready to be beheaded and tortured but to leave Christ we are not ready. That is the statement of the disciples of the country of Pakistan.
            </p>

            <p>
              Our teachings have had a very high level of revelation for restoring the respect of what Jesus started. Jesus did not conduct Leaders' Seminars unless he made disciples. We are ready to teach every part if you need access.
            </p>

            <p className="text-xl text-green-700 font-semibold pt-4 border-t border-gray-200">
              Bishop. DR. M.M. Waqar has been the most blessing for what he is doing in Pakistan. May the grace of God cover you at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminarPakistan;