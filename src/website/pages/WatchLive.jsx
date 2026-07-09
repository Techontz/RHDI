import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Share2, Bell, Youtube, ExternalLink } from 'lucide-react';

// YouTube channel details
const YOUTUBE_CHANNEL_ID = '@timesofrestoration';
const LATEST_LIVE_VIDEO_ID = '9yXnULCR040'; // Recent live video
const CHANNEL_URL = 'https://www.youtube.com/@timesofrestoration/streams';

const WatchLive = () => {
  const [isLive, setIsLive] = useState(true); // Assume live is active

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Handle share
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Times of Restoration Live',
        text: 'Join us live for Times of Restoration',
        url: CHANNEL_URL
      });
    } else {
      navigator.clipboard.writeText(CHANNEL_URL);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section with Live Indicator */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-red-600 rounded-full animate-ping"></div>
                </div>
                <span className="text-red-500 font-semibold tracking-wider">LIVE NOW</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Watch Live Stream
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join us for Times of Restoration - "There is a time for everything, a time to cry and a time to laugh. Everything will return to its rightful place."
              </p>
            </motion.div>

            {/* Main Video Player */}
            <motion.div 
              variants={fadeInUp}
              className="mb-8 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={`https://www.youtube.com/embed/${LATEST_LIVE_VIDEO_ID}?autoplay=1&mute=0`}
                  title="Times of Restoration Live"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </motion.div>

            {/* Video Info Bar */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-between gap-4 mb-12 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-5 h-5 text-red-400" />
                  <span>Live Now</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-5 h-5 text-red-400" />
                  <span>Every Sunday 10:00 AM</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </motion.button>
                
                <motion.a
                  href={CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white transition-all"
                >
                  <Youtube className="w-4 h-4" />
                  Subscribe
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>

            {/* Upcoming/Past Streams - Updated with all three videos */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-6">Recent Streams</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Stream Card 1 - Most recent video (14 hours ago) */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all"
                  onClick={() => window.open('https://www.youtube.com/watch?v=dEFXqRCQgek', '_blank')}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/dEFXqRCQgek/maxresdefault.jpg`}
                      alt="Live stream thumbnail"
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/dEFXqRCQgek/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      RECENT
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold group-hover:text-red-400 transition-colors line-clamp-2">
                      Times of Restoration - Live Stream
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">Saa 14 zilizopita • Watazamaji 964</p>
                  </div>
                </motion.div>

                {/* Stream Card 2 - Video from 4 days ago */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all"
                  onClick={() => window.open('https://www.youtube.com/watch?v=-UYNLurbVrg', '_blank')}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/-UYNLurbVrg/maxresdefault.jpg`}
                      alt="Wafanyakazi kwa ajili ya mavuno"
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/-UYNLurbVrg/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute bottom-2 right-2 bg-gray-700 text-white text-xs px-2 py-1 rounded">
                      Siku 4 zilizopita
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold group-hover:text-red-400 transition-colors line-clamp-2">
                      Wafanyakazi kwa ajili ya mavuno
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">Siku 4 zilizopita • Watazamaji 1</p>
                  </div>
                </motion.div>

                {/* Stream Card 3 - Video from 4 months ago */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all"
                  onClick={() => window.open('https://www.youtube.com/watch?v=clSgZr1JKSc', '_blank')}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/clSgZr1JKSc/maxresdefault.jpg`}
                      alt="Previous live stream"
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/clSgZr1JKSc/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute bottom-2 right-2 bg-gray-700 text-white text-xs px-2 py-1 rounded">
                      Miezi 4 iliyopita
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold group-hover:text-red-400 transition-colors line-clamp-2">
                      Times of Restoration - Live Stream
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">Miezi 4 iliyopita • Watazamaji 5,345</p>
                  </div>
                </motion.div>
              </div>

              {/* View All Button */}
              <div className="text-center mt-8">
                <motion.a
                  href={CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
                >
                  <Youtube className="w-5 h-5" />
                  View All Streams on YouTube
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Notification Banner */}
            <motion.div 
              variants={fadeInUp}
              className="mt-12 p-6 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-2xl border border-white/10 text-center"
            >
              <Bell className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Never Miss a Live Stream</h3>
              <p className="text-gray-300 mb-4">Subscribe to our channel and turn on notifications</p>
              <motion.a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all"
              >
                <Youtube className="w-5 h-5" />
                Subscribe to Times of Restoration
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WatchLive;