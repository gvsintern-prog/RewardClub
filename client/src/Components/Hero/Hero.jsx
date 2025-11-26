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
      <div className="bg-white py-16 font-roboto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col max-w-5xl mx-auto lg:flex-row items-center justify-between">
          {/* Left Section (Text) */}
          <div className={`lg:w-1/2 ${isRTL ? 'text-right' : 'text-left'} mb-12 lg:mb-0`}> 
            <h2 className="text-4xl font-bold text-Green">{t("discover_lifestyle")}</h2>
            <p className="mt-4 text-lg text-gray-600">{t("description")}</p>
            <a href='/offers-rewards'>
              <button className="btn-primary mt-8 shadow-sm focus:outline-none">
                {t("unlock_rewards")}
              </button>
            </a>
          </div>

          {/* Right Section (Stats in 2x2 Grid) */}
          <div className="lg:w-[560px] lg:h-[580px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 auto-rows-fr">
            {/* Brands */}
            <div className="p-8 bg-white rounded-[40px] lg:w-64 lg:h-full text-black flex shadow-custom flex-col items-center min-h-[240px] md:min-h-[260px] lg:min-h-[300px] card-lift">
              <img src={i2} alt="Icon" className="w-20 h-20" />
              <div className="flex-1 flex flex-col justify-center w-full">
                <div className="w-full h-0.5 bg-black rounded-full mb-0 lg:mb-6"></div>
                <div className="text-center">
                  <h3 className="lg:text-6xl text-2xl font-bold">70+</h3>
                  <p className="text-lg">{t("brands")}</p>
                </div>
              </div>
              <div className="mt-3">
                <p className='text-[15px] font-bold text-Green blinking-text'>ACTIVE SOON</p>
              </div>
            </div>

            {/* Countries */}
            <div className="p-8 bg-white lg:w-64 lg:h-full rounded-[40px] shadow-custom text-black flex flex-col items-center min-h-[240px] md:min-h-[260px] lg:min-h-[300px] card-lift">
              <img src={i3} alt="Icon" className="w-20 h-20" />
              <div className="flex-1 flex flex-col justify-center w-full">
                <div className="w-full h-0.5 bg-black rounded-full mb-0 lg:mb-6"></div>
                <div className="text-center">
                  <h3 className="lg:text-6xl text-2xl font-bold">5</h3>
                  <p className="text-lg">{t("countries")}</p>
                </div>
              </div>
            </div>

            {/* Tiers */}
            <div className="p-8 bg-white lg:w-64 lg:h-full rounded-[40px] shadow-custom text-black flex flex-col items-center min-h-[240px] md:min-h-[260px] lg:min-h-[300px] card-lift">
              <img src={i1} alt="Icon" className="w-20 h-20" />
              <div className="flex-1 flex flex-col justify-center w-full">
                <div className="w-full h-0.5 bg-black rounded-full mb-0 lg:mb-6"></div>
                <div className="text-center">
                  <h3 className="lg:text-6xl text-2xl font-bold">3</h3>
                  <p className="text-lg">{t("tiers")}</p>
                </div>
              </div>
            </div>

            {/* Rewards */}
            <div className="p-8 bg-white lg:w-64 lg:h-full rounded-[40px] shadow-custom text-black flex flex-col items-center min-h-[240px] md:min-h-[260px] lg:min-h-[300px] card-lift">
              <img src={i4} alt="Icon" className="w-20 h-20" />
              <div className="flex-1 flex flex-col justify-center w-full">
                <div className="w-full h-0.5 bg-black rounded-full mb-0 lg:mb-6"></div>
                <div className="text-center">
                  <h3 className="lg:text-6xl text-2xl font-bold">50</h3>
                  <p className="text-lg">{t("rewards")}</p>
                </div>
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
