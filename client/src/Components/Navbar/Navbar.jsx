import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import LanguageToggle from "../../LanguageToggle";
import { useTranslation } from "react-i18next"; // Import useTranslation
import i22 from "./i22.png"; // Default LTR logo
import i24 from "./i24.png"; // RTL logo

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Access translation function and i18n instance
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation(); // Get current route

  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Determine the logo based on the language direction
  const logo = i18n.dir() === "rtl" ? i24 : i22;

  return (
    <nav
      className={`bg-Green py-4 px-6 lg:flex hidden lg:flex-row justify-between items-center transition-transform duration-300 shadow-lg ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 w-full z-50`}
    >
      {/* Left Side: Logo */}
      <a href="/" className="text-xl font-bold text-white">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </a>

      {/* Center: Menu Items */}
      <ul className="flex md:flex-row md:flex-1 md:justify-center space-x-8 text-white font-medium">
        {[
          { href: "/tiers-benefits", label: t("Explore Tiers") },
          { href: "/brands", label: t("Discover Brands") },
          { href: "/offers-rewards", label: t("Unlock Rewards") },
          { href: "/contact-us", label: t("Get Support") },
        ].map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={item.href}
              className={`cursor-pointer relative transition-all duration-300 text-sm font-medium ${
                location.pathname === item.href
                  ? "text-white font-bold"
                  : "text-white hover:text-gray-200"
              }`}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <a href="https://rewardclub.space/frontend/login?id=1" target="_blank">
          <button className="btn-outline">{t("Login")}</button>
        </a>
        <a href="https://rewardclub.space/frontend/login?id=2" target="_blank">
          <button className={`btn-primary ${i18n.language === 'ar' ? 'relative right-4' : ''}`}>{t("Signup")}</button>
        </a>
        <a href="https://rewardclub.space/frontend/login?id=3" target="_blank">
          <button className="btn-outline">{t("Vendor_Register")}</button>
        </a>

        {/* Language Toggle */}
        <div className="border-l border-white/30 pl-4">
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;