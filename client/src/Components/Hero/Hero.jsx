import React, { useState, useEffect } from 'react';
import "../../App.css";
import ImageSlider from '../ImageSlider/ImageSlider';
import TierCard from '../TierCard/TierCard';
import MostLovedBrands from '../MostLovedBrands/MostLovedBrands';
import Slide from '../Slide/Slide';
import { useTranslation } from 'react-i18next';
import Faqactive from '../Faq/Faqactive';
import "./b.css"
import i1 from "./i1.webp"
import i2 from "./i2.webp"
import i3 from "./i3.webp"
import i4 from "./i4.png"
const LifestyleRewards = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  // Language Change Detect Karne ke liye
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'; // RTL Handling
  }, [i18n.language]);

  return (
    <div>
      <ImageSlider />
      <div className="bg-gradient-to-b from-white via-white to-gray-50 py-20 font-roboto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col max-w-6xl mx-auto lg:flex-row items-center justify-between gap-16">
          {/* Left Section (Text) */}
          <div className={`lg:w-1/2 ${isRTL ? 'text-right' : 'text-left'}`}> 
            <h2 className="text-5xl lg:text-6xl font-bold text-Green leading-tight">{t("discover_lifestyle")}</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">{t("description")}</p>
            <a href='/offers-rewards'>
              <button className="btn-primary mt-10 shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none">
                {t("unlock_rewards")}
              </button>
            </a>
          </div>

          {/* Right Section (Stats in 2x2 Grid) */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Brands */}
            <div className="p-8 bg-white rounded-3xl shadow-custom text-black flex flex-col items-center justify-center min-h-[280px] card-lift hover:shadow-xl transition-all duration-300">
              <img src={i2} alt="Icon" className="w-16 h-16 mb-6" />
              <div className="text-center w-full">
                <h3 className="text-5xl font-bold text-Green mb-2">70+</h3>
                <p className="text-base text-gray-600 font-medium">{t("brands")}</p>
              </div>
              <div className="mt-6 w-full">
                <p className='text-xs font-bold text-Green text-center bg-Green/10 py-2 rounded-full'>ACTIVE SOON</p>
              </div>
            </div>

            {/* Countries */}
            <div className="p-8 bg-white rounded-3xl shadow-custom text-black flex flex-col items-center justify-center min-h-[280px] card-lift hover:shadow-xl transition-all duration-300">
              <img src={i3} alt="Icon" className="w-16 h-16 mb-6" />
              <div className="text-center w-full">
                <h3 className="text-5xl font-bold text-Green mb-2">5</h3>
                <p className="text-base text-gray-600 font-medium">{t("countries")}</p>
              </div>
            </div>

            {/* Tiers */}
            <div className="p-8 bg-white rounded-3xl shadow-custom text-black flex flex-col items-center justify-center min-h-[280px] card-lift hover:shadow-xl transition-all duration-300">
              <img src={i1} alt="Icon" className="w-16 h-16 mb-6" />
              <div className="text-center w-full">
                <h3 className="text-5xl font-bold text-Green mb-2">3</h3>
                <p className="text-base text-gray-600 font-medium">{t("tiers")}</p>
              </div>
            </div>

            {/* Rewards */}
            <div className="p-8 bg-white rounded-3xl shadow-custom text-black flex flex-col items-center justify-center min-h-[280px] card-lift hover:shadow-xl transition-all duration-300">
              <img src={i4} alt="Icon" className="w-16 h-16 mb-6" />
              <div className="text-center w-full">
                <h3 className="text-5xl font-bold text-Green mb-2">50</h3>
                <p className="text-base text-gray-600 font-medium">{t("rewards")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slide />
      <TierCard />
      <MostLovedBrands />
      <Faqactive />
    </div>
  );
};

export default LifestyleRewards;
