import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";

import BurundiImage from "../../../assets/blog/burundi-seminar.webp";
import UgandaImage from "../../../assets/blog/uganda-seminar.webp";
import IndiaImage from "../../../assets/blog/india-books.webp";

const BlogSection = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Discipleship Seminar in Burundi 2024",
      description:
        "Grace beyond all names be with us. Discover how God moved powerfully through discipleship training and leadership development in Burundi.",
      image: BurundiImage,
      date: "March 15, 2024",
      location: "Burundi",
      path: "/blog/discipleship-seminar-burundi-2024",
    },
    {
      id: 2,
      title: "Seminar Discipleship in Uganda 2024",
      description:
        "Our discipleship mission continues to raise mature believers and strengthen churches throughout Uganda through biblical teaching.",
      image: UgandaImage,
      date: "February 28, 2024",
      location: "Uganda",
      path: "/blog/seminar-discipleship-uganda-2024",
    },
    {
      id: 3,
      title: "Discipleship Books Distributed in India",
      description:
        "Hundreds of discipleship books were distributed during our ministry visit, equipping believers and church leaders across India.",
      image: IndiaImage,
      date: "January 10, 2024",
      location: "India",
      path: "/blog/discipleship-books-distributed-india",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="uppercase tracking-[5px] text-[#d4a017] font-semibold text-sm">
            Latest Updates
          </span>

          <div className="w-16 h-[2px] bg-[#d4a017] mx-auto mt-4 mb-8"></div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#001a3d]">
            News & Stories
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Stay informed with ministry updates, discipleship journeys,
            leadership seminars, outreach activities, and inspiring stories
            from the nations we serve.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {blogPosts.map((post, index) => (

            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .12,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(post.path)}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
                cursor-pointer
                group
              "
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden h-72">

                <img
                  src={post.image}
                  alt={post.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>

                {/* Date */}

                <div
                  className="
                    absolute
                    left-5
                    bottom-5
                    bg-white/90
                    backdrop-blur-md
                    rounded-full
                    px-4
                    py-2
                    flex
                    items-center
                    gap-2
                    shadow-md
                  "
                >
                  <Calendar
                    size={14}
                    className="text-[#001a3d]"
                  />

                  <span className="text-xs font-semibold text-gray-700">
                    {post.date}
                  </span>
                </div>

                {/* Location */}

                <div
                  className="
                    absolute
                    top-5
                    right-5
                    bg-[#001a3d]
                    text-white
                    rounded-full
                    px-4
                    py-2
                    flex
                    items-center
                    gap-2
                    shadow-lg
                  "
                >
                  <MapPin size={13} />

                  <span className="text-xs font-semibold">
                    {post.location}
                  </span>
                </div>

              </div>

              {/* CONTENT */}

              <div className="p-8">

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#001a3d]
                    leading-snug
                    mb-4
                    group-hover:text-[#d4a017]
                    transition
                  "
                >
                  {post.title}
                </h3>

                <p className="text-gray-600 leading-8 mb-8 line-clamp-3">
                  {post.description}
                </p>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-3
                    font-semibold
                    text-[#001a3d]
                    group-hover:text-[#d4a017]
                    transition
                  "
                >

                  Continue Reading

                  <span
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-[#d4a017]
                      flex
                      items-center
                      justify-center
                      group-hover:translate-x-1
                      transition
                    "
                  >
                    <ArrowRight
                      size={15}
                      className="text-[#001a3d]"
                    />
                  </span>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

        {/* Button */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >

          <button
            onClick={() => navigate("/blog")}
            className="
              inline-flex
              items-center
              gap-3
              bg-[#001a3d]
              hover:bg-[#002a5f]
              text-white
              font-semibold
              px-9
              py-4
              rounded-full
              shadow-xl
              transition-all
              group
            "
          >
            Explore All Articles

            <span
              className="
                w-9
                h-9
                rounded-full
                bg-[#d4a017]
                flex
                items-center
                justify-center
                group-hover:translate-x-1
                transition
              "
            >
              <ArrowRight
                size={16}
                className="text-[#001a3d]"
              />
            </span>

          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default BlogSection;