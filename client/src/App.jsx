import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LifestyleRewards from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AuraStarCard from './Components/AuraStarCard/AuraStarCard';
import BrandFilter from './Components/BrandFilter/BrandFilter';
import ProductSection from './Components/ProductSection/ProductSection';
import SupportSection from './Components/SupportSection/SupportSection';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import MobileNavbar from './Components/MobileNavbar/MobileNavbar';
import { DirectionProvider } from './Components/DirectionContext';
import FAQ from './Components/Faq/Faq';
import About from './Components/About/About';
import MemberRegister from './Components/MemberRegister/MemberRegister';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import ContactFloat from './Components/ContactFloat/ContactFloat';
import UrgencyBanner from './Components/UrgencyBanner/UrgencyBanner';
// import LoginPage from './Components/Login/Login';
// import VendorRegister from './Components/VendorRegister/VendorRegister';

function App() {
  return (
    <Router>
      <DirectionProvider />
      <UrgencyBanner />
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<LifestyleRewards />} />
        <Route path="/tiers-benefits" element={<AuraStarCard />} />
        <Route path="/brands" element={<BrandFilter />} />
        <Route path="/offers-rewards" element={<ProductSection />} />
        <Route path="/contact-us" element={<SupportSection />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-statement" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/member-register" element={<MemberRegister />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/vendor-register" element={<VendorRegister />} /> */}

      </Routes>
      <Footer />
      <ScrollToTop />
      <ContactFloat />
    </Router>
  );
}

export default App;
