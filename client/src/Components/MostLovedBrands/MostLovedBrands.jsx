import React from "react";
import { useTranslation } from "react-i18next";
import i2 from "./i2.png"
import i3 from "./i3.png"
import i4 from "./i4.png"
import i5 from "./i5.png"
import i6 from "./i6.png"

const MostLovedBrands = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl"; // Check if the language is right-to-left

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
        {/* left section */}
        <div className={`w-full md:w-2/5 lg:w-1/3 ${isRTL ? '' : ''} text-center md:text-left`}>
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="text-black">{t('most')}</span> <span className="text-Green">{t('loved_brands')}</span>
          </h2>
          <p className="text-gray-600 mt-4">
            {t('personalized_offers')}
          </p>
          <a href="/brands">
            <button className="btn-primary mt-6">{t('discover_brands12')}</button>
          </a>
        </div>
        {/* right section */}
        <div className="w-full md:w-3/5 shrink-0 lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-custom flex items-center justify-center card-lift">
            <img
              src={i2}
              alt="chipotle"
              className="h-16 sm:h-32 object-contain"
            />
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-custom flex items-center justify-center card-lift">
            <img
              src={i3}
              alt="hm"
              className="h-16 sm:h-32 object-contain"
            />
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-custom flex items-center justify-center card-lift">
            <img
              src={i4}
              alt="bath_body_works"
              className="h-16 sm:h-32 object-contain"
            />
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-custom flex items-center justify-center card-lift">
            <img
              src={i5}
              alt="american_eagle"
              className="h-16 sm:h-32 object-contain"
            />
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-custom flex items-center justify-center card-lift">
            <img
              src={i6}
              alt="victorias_secret"
              className="h-16 sm:h-32 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostLovedBrands;