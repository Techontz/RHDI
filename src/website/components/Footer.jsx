import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Twitter,
  MessageCircle,
  Send,
} from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    name: "Facebook",
    color: "hover:bg-blue-600",
    url: "https://www.facebook.com/people/Rehoboth-Discipleship-international/100092349679891/",
  },
  {
    icon: Instagram,
    name: "Instagram",
    color: "hover:bg-pink-600",
    url: "https://www.instagram.com/rehoboth_discipleship_intern/",
  },
  {
    icon: Twitter,
    name: "X",
    color: "hover:bg-black",
    url: "https://twitter.com/rhdiworld",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    color: "hover:bg-blue-700",
    url: "https://www.linkedin.com/in/dr-daniel-k-boniface-58199b147",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    color: "hover:bg-green-600",
    url: "https://wa.me/18023555243",
  },
  {
    icon: Send,
    name: "Telegram",
    color: "hover:bg-sky-500",
    url: "https://t.me/rhdiworld",
  },
  {
    icon: Youtube,
    name: "YouTube",
    color: "hover:bg-red-600",
    url: "https://www.youtube.com/@timesofrestoration",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubscribe = async () => {
    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }
  
    try {
      setLoading(true);
      setMessage("");
  
      const response = await fetch(
        "https://rhdi.world/api/newsletter.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
  
      const data = await response.json();

      if (!data.success) {
          throw new Error(data.message);
      }

      setMessage(data.message);
      setEmail("");
      setEmail("");
    } catch (err) {
      console.error(err);
      setMessage(err.message || "Subscription failed.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer className="bg-[#041B35] text-white">
      <div className="max-w-[1700px] mx-auto">
        {/* Top */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 px-10 py-14">
          {/* About Us */}
          <div className="pr-8 border-r border-[#C69A2B]/40">
            <h3 className="text-[#D4A52A] font-bold text-xl mb-6 uppercase">
              About Us
            </h3>

            <p className="text-gray-300 leading-8">
              Rehoboth Discipleship International is an international team
              ministry dedicated to equipping Discipleship (perfecting) the
              saints to function fully and freely in the body of Christ.
            </p>

            <Link
              to="/about/who-we-are"
              className="inline-block mt-6 text-[#D4A52A] font-semibold hover:text-white transition"
            >
              Read More
            </Link>
          </div>

          {/* Discover */}
          <div className="pr-8 border-r border-[#C69A2B]/40">
            <h3 className="text-[#D4A52A] font-bold text-xl mb-6 uppercase">
              Discover
            </h3>

            <ul className="space-y-4 text-gray-300">

            <li>
              <Link
                to="/about/who-we-are"
                className="hover:text-[#D4A52A] transition duration-300"
              >
                Rehoboth Discipleship International
              </Link>
            </li>

            <li>
              <Link
                to="/appointment"
                className="hover:text-[#D4A52A] transition duration-300"
              >
                Appointment
              </Link>
            </li>

            <li>
              <Link
                to="/become-a-volunteer"
                className="hover:text-[#D4A52A] transition duration-300"
              >
                Become a Volunteer
              </Link>
            </li>

            <li>
              <Link
                to="/partner"
                className="hover:text-[#D4A52A] transition duration-300"
              >
                Become Partner
              </Link>
            </li>

            <li>
              <Link
                to="/books"
                className="hover:text-[#D4A52A] transition duration-300"
              >
                Books
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className="hover:text-[#D4A52A] transition duration-300"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-[#D4A52A] transition duration-300"
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/terms-and-conditions"
                className="hover:text-[#D4A52A] transition duration-300"
              >
                Terms & Conditions
              </Link>
            </li>

          </ul>
          </div>

          {/* Contact */}
          <div className="pr-8 border-r border-[#C69A2B]/40">
            <h3 className="text-[#D4A52A] font-bold text-xl mb-6 uppercase">
              Contact Us
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              For more communication, feel free to write to us by email and
              make appointments with us.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 border border-white/15 rounded-xl p-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Mail className="text-blue-400" size={20} />
                </div>

                <a
                  href="mailto:info@rhdi.world"
                  className="text-gray-200 hover:text-[#D4A52A]"
                >
                  info@rhdi.world
                </a>
              </div>

              <div className="flex items-center gap-4 border border-white/15 rounded-xl p-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <MapPin className="text-purple-400" size={20} />
                </div>

                <a
                  href="https://maps.google.com/?q=378+Lime+Kiln+Rd+428+South+Burlington+VT+05403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-[#D4A52A]"
                >
                  378 Lime Kiln Rd #428, South Burlington, VT 05403
                </a>
              </div>

              <div className="flex items-center gap-4 border border-white/15 rounded-xl p-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Phone className="text-green-400" size={20} />
                </div>

                <a
                  href="tel:+18023555243"
                  className="text-gray-200 hover:text-[#D4A52A]"
                >
                  +1 (802) 355-5243
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#D4A52A] font-bold text-xl mb-6 uppercase">
              Subscribe to Our Newsletter
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              Subscribe to receive updates, newsletters, and ministry news.
            </p>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full h-14 rounded-xl border border-white/15 bg-white/10 px-5 outline-none placeholder:text-gray-400"
            />

            <button
              type="button"
              onClick={handleSubscribe}
              disabled={loading}
              className="w-full mt-4 h-14 rounded-xl bg-[#C89A26] hover:bg-[#D4A52A] text-[#041B35] font-bold transition disabled:opacity-60"
            >
              {loading ? "Subscribing..." : "Subscribe Now"}
            </button>

            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>

            {message && (
              <p className="mt-3 text-sm text-green-400">
                {message}
              </p>
            )}

            <h4 className="text-2xl font-bold mt-12 mb-6">
              Connect With Us
            </h4>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className={`w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="bg-[#C89A26] text-[#041B35] py-4 px-10">
          <div className="max-w-[1700px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 text-sm font-medium">
            <p>
            © {new Date().getFullYear()} Rehoboth Discipleship International. All rights reserved.
            </p>

            <p className="italic text-center">
              "Unless the Lord builds the house, the builders labor in vain."
              — Psalm 127:1
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}