import React from "react";

import Hero from "./sections/Hero";
import ImpactStats from "./sections/ImpactStats";
import CoreProgramsSection from "./sections/CoreProgramsSection";
import AboutImpactSection from "./sections/AboutImpactSection";
import WelcomeSection from "./sections/WelcomeSection";
import UpcomingEventsSection from "./sections/UpcomingEventsSection";
import TechAccess from "./sections/TechAccess";
import BooksSection from "./sections/BooksSection";
import MeetDrDanielSection from "./sections/MeetDrDanielSection";
import SeminarsSection from "./sections/SeminarsSection";
import OnlineGivingSection from "./sections/OnlineGivingSection";
import BlogSection from "./sections/BlogSection";

const Home = () => {
  
  return (
    <>
      <Hero />
      <ImpactStats />
      <WelcomeSection />
      <UpcomingEventsSection />
      <TechAccess />
      <SeminarsSection />
      <BooksSection />
      <OnlineGivingSection />
      {/* New Section */}
      <CoreProgramsSection />
      <AboutImpactSection />
      <MeetDrDanielSection />
      <BlogSection />
    </>
  );
};

export default Home;