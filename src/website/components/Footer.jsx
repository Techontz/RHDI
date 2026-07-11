import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  Globe,
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
    url: "https://linkedin.com/company/rhdiworld",
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
    url: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#041B35] text-white">
      <div className="max-w-[1700px] mx-auto">

        {/* Top */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10 px-10 py-12">

          {/* Logo */}
          <div className="pr-8 border-r border-[#C69A2B]/40">

          <img
            src="/LOGOO.jpeg"
            alt="RHDI Logo"
            className="h-14 mb-5"
          />

            <p className="text-gray-300 leading-8 text-lg">
              Equipping Leaders.
              <br />
              Empowering Communities.
              <br />
              Transforming Nations.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
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
                    className={`w-11 h-11 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

          </div>

          {/* Quick Links */}

          <div className="pr-8 border-r border-[#C69A2B]/40">
            <h3 className="text-[#D4A52A] font-bold text-xl mb-5 uppercase">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              {[
                "About Us",
                "Programs",
                "Impact",
                "Technology Initiative",
                "Partnerships",
                "Documents",
                "Faith & Values",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#D4A52A] duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}

          <div className="pr-8 border-r border-[#C69A2B]/40">
            <h3 className="text-[#D4A52A] font-bold text-xl mb-5 uppercase">
              Programs
            </h3>

            <ul className="space-y-3 text-gray-300">

              {[
                "Leadership Development",
                "Education & Training",
                "Community Outreach",
                "Digital Empowerment",
                "Technology Access Initiative",
                "Women Empowerment",
                "Family & Youth Development",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#D4A52A] duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Partnerships */}

          <div className="pr-8 border-r border-[#C69A2B]/40">
            <h3 className="text-[#D4A52A] font-bold text-xl mb-5 uppercase">
              Partnerships
            </h3>

            <ul className="space-y-3 text-gray-300">
              {[
                "Become a Partner",
                "Corporate Partnerships",
                "Foundation Partnerships",
                "Technology Partnerships",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#D4A52A] duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-[#D4A52A] font-bold text-xl mb-5 uppercase">
              Contact Us
            </h3>

            <p className="text-gray-300 leading-8">
              Rehoboth Discipleship
              <br />
              International (RHDI)
              <br />
              South Burlington,
              <br />
              Vermont, USA
            </p>

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3">
                <Phone className="text-[#D4A52A]" size={18} />
                <span>+1 (802) 355-5243</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#D4A52A]" size={18} />
                <span>info@rhdi.world</span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="text-[#D4A52A]" size={18} />
                <span>www.rhdi.world</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="bg-[#C89A26] text-[#041B35] py-4 px-10">

          <div className="max-w-[1700px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 text-sm font-medium">

            <p>
              © 2026 Rehoboth Discipleship International (RHDI). All Rights
              Reserved.
            </p>

            <p className="italic text-center">
              "Unless the Lord builds the house, the builders labor in vain."
              – Psalm 127:1
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}