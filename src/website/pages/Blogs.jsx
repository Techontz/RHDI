import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

// Picha za blog posts (hizi utazibadilisha kulingana na picha zako)
import BurundiImage from "../../assets/blog/burundi-seminar.webp";
import UgandaImage from "../../assets/blog/uganda-seminar.webp";
import IndiaImage from "../../assets/blog/india-books.webp";
import PakistanImage from "../../assets/blog/pakistan-seminar.webp";
import NepalImage from "../../assets/blog/nepal-training.webp";
import TanzaniaImage from "../../assets/blog/tanzania-refugee.webp";
import MombasaImage from "../../assets/blog/mombasa-seminar.webp";
import LucknowImage from "../../assets/blog/lucknow-gathering.webp";
import VaranasiImage from "../../assets/blog/varanasi-training.webp";
import DarImage from "../../assets/blog/dar-leaders.webp";
import TabletsImage from "../../assets/blog/tablets-teaching.webp";
import NepalPracticeImage from "../../assets/blog/nepal-practice.webp";

const BlogSection = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      category: "News",
      title: "Discipleship Books Distributed in India",
      description: "We had a very good time in India when we had a discipleship seminar...",
      image: IndiaImage,
      date: "March 2024",
      location: "India",
      path: "/discipleship-books-distributed-in-"
    },
    {
      id: 2,
      category: "News",
      title: "Discipleship Fellowship Gathering December in Lucknow 2023",
      description: "What is the grace to see a very good development for our unity...",
      image: LucknowImage,
      date: "December 2023",
      location: "Lucknow, India",
      path: "/discipleship-fellowship-gathering-december-in-lucknow-2023/"
    },
    {
      id: 3,
      category: "News",
      title: "Discipleship In Practice / Nepal",
      description: "In developing the continuation of God's work in the sect of discipleship, there must be...",
      image: NepalPracticeImage,
      date: "February 2024",
      location: "Nepal",
      path: "/discipleship-in-practice-nepal"
    },
    {
      id: 4,
      category: "News",
      title: "Discipleship Receiving Tablets for Teaching Others",
      description: "It is a wonderful love to see how people are affected by this issue...",
      image: TabletsImage,
      date: "January 2024",
      location: "Multiple Locations",
      path: "/discipleship-receiving-tablets-for-teaching-others"
    },
    {
      id: 5,
      category: "News",
      title: "Discipleship Seminar in Burundi 2024",
      description: "Grace beyond all names be with me all. The name of Christ Jesus is...",
      image: BurundiImage,
      date: "March 15, 2024",
      location: "Burundi",
      path: "/discipleship-seminar-in-burundi-2024"
    },
    {
      id: 6,
      category: "News",
      title: "Discipleship Seminar In Mombasa Kenya. 2024",
      description: "We have had a very Graceful year only when we see sufficient harvests coming...",
      image: MombasaImage,
      date: "February 2024",
      location: "Mombasa, Kenya",
      path: "/discipleship-seminar-in-mombasa-kenya-2024"
    },
    {
      id: 7,
      category: "News",
      title: "Discipleship Seminar In Pakistan",
      description: "The God of discipleship again made a new way of discipleship in Pakistan. I hope my...",
      image: PakistanImage,
      date: "December 5, 2023",
      location: "Pakistan",
      path: "/discipleship-seminar-in-pakistan"
    },
    {
      id: 8,
      category: "News",
      title: "Discipleship Seminar In Refugee Camp In Nyarugusu Tanzania 2023",
      description: "The great work that Dr. Daniel has been doing is to...",
      image: TanzaniaImage,
      date: "October 12, 2023",
      location: "Nyarugusu, Tanzania",
      path: "/discipleship-seminar-in-refugee-camp-in-nyarugusu-tanzania-2023"
    },
    {
      id: 9,
      category: "News",
      title: "Discipleship Training in Varanasi city in India",
      description: "I have had a heart of gratitude for what is happening in India...",
      image: VaranasiImage,
      date: "January 2024",
      location: "Varanasi, India",
      path: "/discipleship-training-in-varanasi-city-in-india"
    },
    {
      id: 10,
      category: "News",
      title: "Discipleship Training Seminar in Mountain Nepal 2024",
      description: "Praise be to the God of our Lord Jesus Christ. We have made...",
      image: NepalImage,
      date: "November 20, 2023",
      location: "Mountain Nepal",
      path: "/discipleship-training-seminar-in-mountain-nepal-2024"
    },
    {
      id: 11,
      category: "News",
      title: "Seminar Discipleship In Uganda 2024",
      description: "Discipleship work continues. Again I always tell people that without discipleship we cannot have a...",
      image: UgandaImage,
      date: "February 28, 2024",
      location: "Uganda",
      path: "/seminar-discipleship-in-uganda-2024"
    },
    {
      id: 12,
      category: "News",
      title: "Training for church Leaders Dar es salaam, Tanzania",
      description: "We have had the wonderful grace to see how the God of...",
      image: DarImage,
      date: "March 2024",
      location: "Dar es Salaam, Tanzania",
      path: "/training-for-church-leaders-dar-es-salaam-tanzania-2"
    }
  ];

  return (
    <div>
      {/* Header Section - Black Background Only */}
      <div className="bg-black py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our Blog
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Stories, thoughts and articles from our discipleship work around the world
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid Section - White Background */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => navigate(post.path)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                  
                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-green-600" />
                    <span className="text-xs font-medium text-gray-700">{post.date}</span>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute bottom-4 right-4 bg-green-600/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-white" />
                    <span className="text-xs font-medium text-white">{post.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors group"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>

                {/* Decorative bottom line */}
                <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;