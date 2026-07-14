"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../pages/cart/context/CartContext";

const menuItems = [
  {
    title: "HOME",
    path: "/",
  },

  {
    title: "ABOUT US",
    children: [
      { title: "Who We Are", path: "/about/who-we-are" },
      { title: "Mission & Vision", path: "/about/mission-vision" },
      { title: "Our History", path: "/about/history" },
      { title: "Leadership & Governance", path: "/about/leadership-governance" },
  
      // ADD THIS
      { title: "Our Staff", path: "/about/our-staff" },
  
      { title: "Core Values", path: "/about/core-values" },
      { title: "Community Care & Humanitarian Support", path: "/about/community-care" },
      { title: "Countries We Serve", path: "/about/countries-we-serve" },
    ],
  },

  {
    title: "PROGRAMS",
    children: [
      {
        title: "Leadership Development",
        path: "/programs/leadership-development",
      },
      {
        title: "Education & Training",
        path: "/programs/education-training",
      },
      {
        title: "Community Outreach",
        path: "/programs/community-outreach",
      },
      {
        title: "Digital Empowerment",
        path: "/programs/digital-empowerment",
      },
      {
        title: "Technology Access Initiative",
        path: "/programs/technology-access-initiative",
      },
      {
        title: "Women Empowerment",
        path: "/programs/women-empowerment",
      },
      {
        title: "Family & Youth Development",
        path: "/programs/family-youth-development",
      },
      {
        title: "Theology & Biblical Studies",
        children: [
          {
            title: "Program Overview",
            path: "/theology/program-overview",
          },
          {
            title: "Vision & Mission",
            path: "/theology/vision-mission",
          },
          {
            title: "Curriculum",
            path: "/theology/curriculum",
          },
          {
            title: "Learning Approach",
            path: "/theology/learning-approach",
          },
          {
            title: "Admissions & Enrollment",
            path: "/theology/admissions",
          },
          {
            title: "Faculty & Mentors",
            path: "/theology/faculty",
          },
          {
            title: "Student Resources",
            path: "/theology/resources",
          },
          {
            title: "Frequently Asked Questions",
            path: "/theology/faq",
          },
          {
            title: "Contact Admissions",
            path: "/theology/contact",
          },
        ],
      },
    ],
  },

  {
    title: "IMPACT",
    children: [
      {
        title: "Statistics",
        path: "/impact/statistics",
      },
      {
        title: "Stories of Transformation",
        path: "/impact/stories",
      },
      {
        title: "Program Updates",
        path: "/impact/program-updates",
      },
      {
        title: "Annual Reports",
        path: "/impact/annual-reports",
      },
    ],
  },

  {
    title: "TECHNOLOGY INITIATIVE",
    children: [
      {
        title: "Vision",
        path: "/technology/vision",
      },
      {
        title: "Current Needs",
        path: "/technology/current-needs",
      },
      {
        title: "Countries Served",
        path: "/technology/countries-served",
      },
      {
        title: "Partnership Opportunities",
        path: "/technology/partnership-opportunities",
      },
    ],
  },

  {
    title: "PARTNERSHIPS",
    children: [
      {
        title: "Become a Partner",
        path: "/partnerships/become-a-partner",
      },
      {
        title: "Corporate Partnerships",
        path: "/partnerships/corporate",
      },
      {
        title: "Foundation Partnerships",
        path: "/partnerships/foundation",
      },
      {
        title: "Technology Partnerships",
        path: "/partnerships/technology",
      },
    ],
  },

  {
    title: "DOCUMENTS",
    children: [
      {
        title: "Organizational Profile",
        path: "/documents/organizational-profile",
      },
      {
        title: "Annual Report",
        path: "/documents/annual-report",
      },
      {
        title: "Impact Report",
        path: "/documents/impact-report",
      },
      {
        title: "Policies & Governance",
        path: "/documents/policies-governance",
      },
    ],
  },

  {
    title: "FAITH & VALUES",
    children: [
      {
        title: "Statement of Faith",
        path: "/faith/statement-of-faith",
      },
      {
        title: "Making Disciples",
        path: "/faith/making-disciples",
      },
      {
        title: "Biblical Foundations",
        path: "/faith/biblical-foundations",
      },
      {
        title: "Leadership Principles",
        path: "/faith/leadership-principles",
      },
    ],
  },

  {
    title: "CONTACT",
    path: "/contact",
  },

  {
    title: "WATCH LIVE",
    path: "/watch-live",
  },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [lockedSubMenu, setLockedSubMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { cartItems, getTotalItems } = useCart();

  const submenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(e.target)
      ) {
        setLockedSubMenu(null);
        setActiveSubMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown", 
        handleClickOutside
      );
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#001a3d] border-b border-yellow-600/20 shadow-lg">
    <div className="max-w-[1700px] mx-auto px-4">
      <div className="h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/LOGOO.webp"
            alt="RHDI"
            className="h-15 w-15 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center h-full">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {item.children ? (
                <>
                  <button
                    className="
                      flex items-center gap-1
                      px-3
                      h-full
                      text-[12px]
                      font-medium
                      uppercase
                      tracking-wide
                      text-white
                      hover:text-[#d4a017]
                      transition-all
                    "
                  >
                    {item.title}
                    <ChevronDown size={12} strokeWidth={3} />
                  </button>

                  <div
                    className={`absolute left-0 top-full min-w-[300px] bg-white rounded-md shadow-2xl transition-all duration-300 ${
                      activeMenu === index
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-3"
                    }`}
                  >
                    <div className="py-2">
                    {item.children.map((child, childIndex) => (
                      <div
                        key={childIndex}
                        className="relative"
                        onMouseEnter={() => {
                            if (lockedSubMenu === null) {
                                setActiveSubMenu(childIndex);
                            }
                        }}
                    >
                        {child.children ? (
                          <>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();

                                if (lockedSubMenu === childIndex) {
                                  setLockedSubMenu(null);
                                  setActiveSubMenu(null);
                                } else {
                                  setLockedSubMenu(childIndex);
                                  setActiveSubMenu(childIndex);
                                }
                              }}
                              className="
                                w-full
                                flex
                                justify-between
                                items-center
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-gray-700
                                hover:bg-[#001a3d]
                                hover:text-[#d4a017]
                                transition
                              "
                            >
                              {child.title}

                              <ChevronDown
                                size={14}
                                className="-rotate-90"
                              />
                            </button>

                            {/* SECOND DROPDOWN */}

                            <div
                              className={`absolute left-[102%] top-3 w-[235px]
                                rounded-[6px]
                                bg-white/95
                                backdrop-blur-xl
                                border border-gray-200
                                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                                overflow-hidden
                                transition-all
                                duration-300
                                ${
                                  activeSubMenu === childIndex ||
                                  lockedSubMenu === childIndex
                                    ? "opacity-100 visible translate-x-0 scale-100"
                                    : "opacity-0 invisible translate-x-4 scale-95"
                                }
                              `}
                            >
                              {child.children.map((subChild, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subChild.path}
                                  className="
                                    block
                                    px-4
                                    py-2
                                    text-sm
                                    text-gray-700
                                    hover:bg-[#001a3d]
                                    hover:text-[#d4a017]
                                  "
                                >
                                  {subChild.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            to={child.path}
                            className="
                              block
                              px-4
                              py-2
                              text-sm
                              font-medium
                              text-gray-700
                              hover:bg-[#001a3d]
                              hover:text-[#d4a017]
                            "
                          >
                            {child.title}
                          </Link>
                        )}
                      </div>
                    ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-2
                    px-3
                    h-full
                    text-[12px]
                    font-medium
                    uppercase
                    tracking-wide
                    transition
                    ${
                      item.title === "WATCH LIVE"
                        ? "text-red-400 hover:text-red-300"
                        : "text-white hover:text-[#d4a017]"
                    }
                  `}
                >
                  {item.title}

                  {item.title === "WATCH LIVE" && (
                    <>
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      <span className="text-[10px] font-semibold text-red-400">
                        LIVE
                      </span>
                    </>
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Donate Button */}
          <Link
            to="/donate"
            className="
              hidden md:flex
              items-center
              justify-center
              bg-[#d4a017]
              hover:bg-[#b88b11]
              text-black
              text-[11px]
              font-medium
              uppercase
              tracking-wide
              px-5
              h-10
              rounded-sm
              transition-all
            "
          >
            DONATE
          </Link>

          <Link
              to="/cart"
              className="relative text-white hover:text-[#d4a017] transition"
          >
              <ShoppingBag size={22} />

              {cartItems.length > 0 && (
                  <span
                      className="
                      absolute
                      -top-2
                      -right-2
                      w-5
                      h-5
                      rounded-full
                      bg-red-600
                      text-white
                      text-[10px]
                      flex
                      items-center
                      justify-center
                      font-bold
                      "
                  >
                      {getTotalItems()}
                  </span>
              )}
          </Link>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="xl:hidden text-white"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {mobileMenu && (
      <div className="xl:hidden bg-[#001a3d] border-t border-white/10">
        <div className="px-6 py-4">
          {menuItems.map((item, index) => (
            <div key={index} className="py-3">
              <div className="text-white text-sm font-medium uppercase">
                {item.title}
              </div>

              {item.children && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    to={child.path}
                    onClick={() => setMobileMenu(false)}
                    className="block text-gray-300 text-xs py-2 hover:text-[#d4a017]"
                  >
                    {child.title}
                  </Link>
                ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/donate"
            className="
              mt-4
              flex
              justify-center
              bg-[#d4a017]
              text-black
              font-bold
              text-xs
              py-3
              rounded-md
            "
          >
            DONATE
          </Link>
        </div>
      </div>
    )}
  </header>
  );
}