import React from 'react';
import { Route } from 'react-router-dom';
import WebsiteLayout from '../layouts/WebsiteLayout.jsx';
import Home from '../pages/Home.jsx';
import Donate from '../pages/Donate.jsx';
import NotFound from '../pages/NotFound.jsx';
import WatchLive from '../pages/WatchLive.jsx';
import OurStaff from '../pages/OurStaff.jsx';
import ChidrensMinistry from '../pages/ChidrensMinistry.jsx';
import WomensMinistry from '../pages/WomensMinistry.jsx';
import WhoIsJesus from '../pages/WhoIsJesus.jsx';
import ApostlesToday from '../pages/ApostlesToday.jsx';
import TheApostolicCall from '../pages/TheApostolicCall.jsx';
import WhatIsTheChurch from '../pages/WhatIsTheChurch.jsx';
import MakingDisciples from '../pages/MakingDisciples.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import MissionStatement from '../pages/MissionStatement.jsx';
import LeadershipGovernance from '../pages/LeadershipGovernance.jsx';
import CommunityCare from '../pages/CommunityCare.jsx';
import CoreValues from '../pages/CoreValues.jsx';

import LeadershipDevelopment from '../pages/LeadershipDevelopment.jsx';
import CommunityOutreachSection from '../pages/CommunityOutreachSection.jsx';
import DigitalEmpowermentSection from '../pages/DigitalEmpowermentSection.jsx';
import TechnologyAccessInitiativeSection from '../pages/TechnologyAccessInitiativeSection.jsx';
import WomenEmpowermentSection from '../pages/WomenEmpowermentSection.jsx';
import FamilyYouthDevelopmentSection from '../pages/FamilyYouthDevelopmentSection.jsx';

import StatementOfFaithSection from '../pages/StatementOfFaithSection.jsx';
import MakingDisciplesSection from '../pages/MakingDisciplesSection.jsx';
import BiblicalFoundationsSection from '../pages/BiblicalFoundationsSection.jsx';
import LeadershipPrinciplesSection from '../pages/LeadershipPrinciplesSection.jsx';
import StatisticsSection from '../pages/StatisticsSection.jsx';
import StoriesTransformationSection from '../pages/StoriesTransformationSection.jsx';
import ProgramUpdatesSection from '../pages/ProgramUpdatesSection.jsx';
import AnnualReportsSection from '../pages/AnnualReportsSection.jsx';
import President from "../pages/President.jsx";

import TechnologyVisionSection from '../pages/TechnologyVisionSection.jsx';
import TechnologyNeedsSection from '../pages/TechnologyNeedsSection.jsx';
import TechnologyCountriesSection from '../pages/TechnologyCountriesSection.jsx';
import TechnologyPartnershipsSection from '../pages/TechnologyPartnershipsSection.jsx';

import BecomePartnerSection from '../pages/BecomePartnerSection.jsx';
import CorporatePartnershipsSection from '../pages/CorporatePartnershipsSection.jsx';
import FoundationsPartnershipsSection from '../pages/FoundationsPartnershipsSection.jsx';
import TechnologyPartnershipsSection2 from '../pages/TechnologyPartnershipsSection2.jsx';

import OrganizationProfileSection from '../pages/OrganizationProfileSection.jsx';
import AnnualReportDownloadSection from '../pages/AnnualReportDownloadSection.jsx';
import ImpactReportSection from '../pages/ImpactReportSection.jsx';
import PoliciesGovernanceSection from '../pages/PoliciesGovernanceSection.jsx';

import HeroBanner from "../pages/conference/HeroBanner";
import ConferenceOverview from "../pages/conference/ConferenceOverview";
import WhyThisConference from "../pages/conference/WhyThisConference";
import AboutBook from "../pages/conference/AboutBook";
import MeetAuthor from "../pages/conference/MeetAuthor";
import WhatYouWillLearn from "../pages/conference/WhatYouWillLearn";
import ConferenceProgram from "../pages/conference/ConferenceProgram";
import WhoShouldAttend from "../pages/conference/WhoShouldAttend";
import ConferenceFAQ from "../pages/conference/ConferenceFAQ";
import ConferenceRegistration from "../pages/conference/ConferenceRegistration";

import ProgramOverview from "../pages/ProgramOverview";
import VisionMission from "../pages/VisionMission";
import Curriculum from "../pages/Curriculum";
import LearningApproach from "../pages/LearningApproach";
import Admissions from "../pages/Admissions";
import FacultyMentors from "../pages/FacultyMentors";
import StudentResources from "../pages/StudentResources";
import FAQ from "../pages/FAQ";
import ContactAdmissions from "../pages/ContactAdmissions";

import EducationTraining from '../pages/EducationTraining.jsx';
import CountriesWeServe from '../pages/CountriesWeServe.jsx';
import Discipleship from '../pages/Discipleship.jsx';
import History from "../pages/History.jsx";
import SeeThoseWhoNeedYourHelp from '../pages/SeeThoseWhoNeedYourHelp.jsx';
import ConstructionOfWorshipBuildings from '../pages/ConstructionOfWorshipBuildings.jsx';
import Appointment from '../pages/Appointment.jsx';
import SeminarsZoom from '../pages/SeminarsZoom.jsx';
import SeminarsPhysical from '../pages/SeminarsPhysical.jsx';
import BecomePartner from '../pages/BecomePartner.jsx';
import Books from '../pages/Books.jsx';
import SeminarsLunch from '../pages/SeminarsLunch.jsx';
import BlogDetails1 from '../pages/BlogDetails1.jsx';
import BlogDetails2 from '../pages/BlogDetails2.jsx';
import BlogDetails3 from '../pages/BlogDetails3.jsx';
import Seminars from '../pages/Seminars.jsx';
import Contact from '../pages/Contact.jsx';
import BecomeAVolunteer from '../pages/BecomeAVolunteer.jsx';
import Blogs from '../pages/Blogs.jsx';

// Import blog detail components
import DiscipleshipBooksIndia from '../pages/blog/DiscipleshipBooksIndia.jsx';
import FellowshipGatheringLucknow from '../pages/blog/FellowshipGatheringLucknow.jsx';
import DiscipleshipPracticeNepal from '../pages/blog/DiscipleshipPracticeNepal.jsx';
import TabletsTeaching from '../pages/blog/TabletsTeaching.jsx';
import SeminarBurundi2024 from '../pages/blog/SeminarBurundi2024.jsx';
import SeminarMombasaKenya from '../pages/blog/SeminarMombasaKenya.jsx';
import SeminarPakistan from '../pages/blog/SeminarPakistan.jsx';
import RefugeeCampTanzania from '../pages/blog/RefugeeCampTanzania.jsx';
import TrainingVaranasi from '../pages/blog/TrainingVaranasi.jsx';
import TrainingMountainNepal from '../pages/blog/TrainingMountainNepal.jsx';
import SeminarUganda2024 from '../pages/blog/SeminarUganda2024.jsx';
import TrainingDarEsSalaam from '../pages/blog/TrainingDarEsSalaam.jsx';
import Login from '../pages/auth/Login.jsx';
import Register from '../pages/auth/Register.jsx';
import Dashboard from '../pages/dashboard/Dashboard.jsx';
import PrivateRoute from '../pages/auth/context/PrivateRoute.jsx';
import Users from '../pages/dashboard/users/Users.jsx';
import DashboardBooks from '../pages/dashboard/books/DashboardBooks.jsx';
import Orders from '../pages/dashboard/orders/Orders.jsx';
import UserProfile from '../pages/dashboard/profile/UserProfile.jsx';
import BookDetail from '../pages/BookDetail.jsx';
import Checkout from '../pages/cart/Checkout.jsx';
import Cart from "../pages/cart/Cart";
import OrderSuccess from '../pages/cart/OrderSuccess.jsx';




// Public routes that don't require authentication
const PublicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/donate-to-support" element={<Donate />} />
    <Route path="/watch-live" element={<WatchLive />} />
    <Route path="/impreza-church/meet-our-staff" element={<OurStaff />} />
    <Route path="/chidrens-edit" element={<ChidrensMinistry />} />
    <Route path="/womens-ministry" element={<WomensMinistry />} />

    <Route path="/confession/who-is-jesus" element={<WhoIsJesus />} />
    <Route path="/confession/apostle-today" element={<ApostlesToday />} />
    <Route path="/confession/apostolic-call" element={<TheApostolicCall />} />
    <Route path="/confession/what-is-church" element={<WhatIsTheChurch />} />
    <Route path="/confession/making-disciples" element={<MakingDisciples />} />

    <Route path="/about/who-we-are" element={<AboutUs />} />
    <Route path="/about/mission-vision" element={<MissionStatement />} />
    <Route path="/about/core-values" element={<CoreValues />} />
    <Route path="/about/leadership-governance" element={<LeadershipGovernance />} />
    <Route path="/about/community-care" element={<CommunityCare />} />
    <Route path="/about/countries-we-serve" element={<CountriesWeServe />} />
    <Route path="/about/history" element={<History />} />
    <Route
    path="/about/president"
    element={<President />}
    />
    <Route path="/about/discipleship" element={<Discipleship />} />
    <Route path="/about/homeless" element={<SeeThoseWhoNeedYourHelp />} />
    <Route path="/about/construction" element={<ConstructionOfWorshipBuildings />} />

    <Route path="/conference/hero" element={<HeroBanner />} />
    <Route path="/conference/overview" element={<ConferenceOverview />} />
    <Route path="/conference/why-this-conference" element={<WhyThisConference />} />
    <Route path="/conference/about-book" element={<AboutBook />} />
    <Route path="/conference/author" element={<MeetAuthor />} />
    <Route path="/conference/what-you-will-learn" element={<WhatYouWillLearn />} />
    <Route path="/conference/program" element={<ConferenceProgram />} />
    <Route path="/conference/who-should-attend" element={<WhoShouldAttend />} />
    <Route path="/conference/faq" element={<ConferenceFAQ />} />
    <Route path="/conference/register" element={<ConferenceRegistration />} />

    <Route path="/programs/leadership-development" element={<LeadershipDevelopment />} />
    <Route path="/programs/education-training" element={<EducationTraining />} />
    <Route path="/programs/community-outreach" element={<CommunityOutreachSection />} />
    <Route path="/programs/digital-empowerment" element={<DigitalEmpowermentSection />} />
    <Route path="/programs/technology-access-initiative" element={<TechnologyAccessInitiativeSection />} />
    <Route path="/programs/women-empowerment" element={<WomenEmpowermentSection />} />
    <Route path="/programs/family-youth-development" element={<FamilyYouthDevelopmentSection />} />

    <Route path="/theology/program-overview" element={<ProgramOverview />} />
    <Route path="/theology/vision-mission" element={<VisionMission />} />
    <Route path="/theology/curriculum" element={<Curriculum />} />
    <Route path="/theology/learning-approach" element={<LearningApproach />} />
    <Route path="/theology/admissions" element={<Admissions />} />
    <Route path="/theology/faculty" element={<FacultyMentors />} />
    <Route path="/theology/resources" element={<StudentResources />} />
    <Route path="/theology/faq" element={<FAQ />} />
    <Route path="/theology/contact" element={<ContactAdmissions />} />

    <Route path="/faith/statement-of-faith" element={<StatementOfFaithSection />} />
    <Route path="/faith/making-disciples" element={<MakingDisciplesSection />} />
    <Route path="/faith/biblical-foundations" element={<BiblicalFoundationsSection />} />
    <Route path="/faith/leadership-principles" element={<LeadershipPrinciplesSection />} />

    <Route path="/impact/statistics" element={<StatisticsSection />} />
    <Route path="/impact/stories" element={<StoriesTransformationSection />} />
    <Route path="/impact/program-updates" element={<ProgramUpdatesSection />} />
    <Route path="/impact/annual-reports" element={<AnnualReportsSection />} />

    <Route path="/technology/vision" element={<TechnologyVisionSection />} />
    <Route path="/technology/current-needs" element={<TechnologyNeedsSection />} />
    <Route path="/technology/countries-served" element={<TechnologyCountriesSection />} />
    <Route path="/technology/partnership-opportunities" element={<TechnologyPartnershipsSection />} />

    <Route path="/partnerships/become-a-partner" element={<BecomePartnerSection />} />
    <Route path="/partnerships/corporate" element={<CorporatePartnershipsSection />} />
    <Route path="/partnerships/foundation" element={<FoundationsPartnershipsSection />} />
    <Route path="/partnerships/technology" element={<TechnologyPartnershipsSection2 />} />
    <Route path="/donate" element={<Donate />} />

    <Route path="/documents/organizational-profile" element={<OrganizationProfileSection />} />
    <Route path="/documents/annual-report" element={<AnnualReportDownloadSection />} />
    <Route path="/documents/impact-report" element={<ImpactReportSection />} />
    <Route path="/documents/policies-governance" element={<PoliciesGovernanceSection />} />
    
    <Route path="/appointment" element={<Appointment />} />
    <Route path="/seminars/zoom" element={<SeminarsZoom />} />
    <Route path="/seminars/physical" element={<SeminarsPhysical />} />
    <Route path="/seminars/lunch" element={<SeminarsLunch />} />
    
    {/* Blog Detail Routes */}
    <Route path="/discipleship-books-distributed-in-" element={<DiscipleshipBooksIndia />} />
    <Route path="/discipleship-fellowship-gathering-december-in-lucknow-2023/" element={<FellowshipGatheringLucknow />} />
    <Route path="/discipleship-in-practice-nepal" element={<DiscipleshipPracticeNepal />} />
    <Route path="/discipleship-receiving-tablets-for-teaching-others" element={<TabletsTeaching />} />
    <Route path="/discipleship-seminar-in-burundi-2024" element={<SeminarBurundi2024 />} />
    <Route path="/discipleship-seminar-in-mombasa-kenya-2024" element={<SeminarMombasaKenya />} />
    <Route path="/discipleship-seminar-in-pakistan" element={<SeminarPakistan />} />
    <Route path="/discipleship-seminar-in-refugee-camp-in-nyarugusu-tanzania-2023" element={<RefugeeCampTanzania />} />
    <Route path="/discipleship-training-in-varanasi-city-in-india" element={<TrainingVaranasi />} />
    <Route path="/discipleship-training-seminar-in-mountain-nepal-2024" element={<TrainingMountainNepal />} />
    <Route path="/seminar-discipleship-in-uganda-2024" element={<SeminarUganda2024 />} />
    <Route path="/training-for-church-leaders-dar-es-salaam-tanzania-2" element={<TrainingDarEsSalaam />} />
    
    <Route path="/blog/discipleship-seminar-burundi-2024" element={<BlogDetails1 />} />
    <Route path="/blog/seminar-discipleship-uganda-2024" element={<BlogDetails2 />} />
    <Route path="/blog/discipleship-books-distributed-india" element={<BlogDetails3 />} />
    
    <Route path="/partner" element={<BecomePartner />} />
    <Route path="/books" element={<Books />} />
    <Route path="/books/:id" element={<BookDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/blog" element={<Blogs />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/seminars" element={<Seminars />} />
    <Route path="/become-a-volunteer" element={<BecomeAVolunteer />} />
    
    {/* Auth Routes */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </>
);

// Protected routes that require authentication
const ProtectedRoutes = (
  <>
    <Route 
      path="/dashboard" 
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } 
    />
    
    {/* Add more protected routes here if needed */}
    <Route 
      path="/dashboard/users" 
      element={
        <PrivateRoute requiredRole="admin">
          <Users />
        </PrivateRoute>
      } 
    />
    <Route 
      path="/dashboard/books" 
      element={
        <PrivateRoute requiredRole="admin">
          <DashboardBooks />
        </PrivateRoute>
      } 
    />
    <Route 
      path="/dashboard/orders" 
      element={
        <PrivateRoute requiredRole="admin">
          <Orders />
        </PrivateRoute>
      } 
    />
    
    <Route 
      path="/dashboard/profile-settings" 
      element={
        <PrivateRoute>
          <UserProfile />
        </PrivateRoute>
      } 
    />
    <Route
      path="/checkout"
      element={<Checkout />}
    />
        
      <Route
        path="/order-success/:orderId"
        element={<OrderSuccess />}
      />
  </>
);

// Combine all routes
export const WebsiteRoutes = (
  <>
    <Route element={<WebsiteLayout />}>
      <Route path="*" element={<NotFound />} />
      {PublicRoutes}
      {ProtectedRoutes}
    </Route>
  </>
);