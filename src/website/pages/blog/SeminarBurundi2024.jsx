import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const SeminarBurundi2024 = () => {
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
            Discipleship Seminar in Burundi 2024
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
              Grace beyond all names be with me all. The name of Christ Jesus is a very wonderful name. It gathers nations and nations. We were able to have a seminar of 250 people where other people added and made the number reach 328. We have been seeing God's hand in making Christians and believers true disciples of Jesus Christ.
            </p>

            <p>
              We have seen people agree with the doctrine of discipleship. We have seen how people confess in their mouths about the doctrine. May God's grace and love be with you, the people of Burundi. When we have teachers, we first need you to start being disciples of Christ Jesus so that you can make others like you. Discipleship brings us into the position of being called Sons of God.
            </p>

            <p>
              We have something to be proud of about the Burundi Seminar. God has glorified Himself. And that's why Dr. Daniel tells many people when he starts to teach, put aside your religious teachings and traditions and let's look at the instructions of the scriptures about the church.
            </p>

            <p className="text-xl text-green-700 font-semibold pt-4 border-t border-gray-200">
              We believe that God who gathers us together will give us another very good time to meet for teaching. Our thanks go to Pastor Justin Who has agreed to be in this Family of discipleship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminarBurundi2024;