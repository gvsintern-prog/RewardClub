import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const TierCard = () => {
  const { t } = useTranslation(); // Use the useTranslation hook to access translations

  return (
    <div>
      <div className="lg:ml-48 ml-0 mt-0 text-center lg:text-left">
        <h2 className="text-3xl font-bold mt-0 lg:mt-20 text-gray-900">
          <span className="text-black ml-0 lg:ml-4">{t('explore_tiers')}</span><span className="text-Green">{t('tiers')}</span>
        </h2>
        <p className="text-gray-600 p-4 mt-2">
          {t('earn_points')}
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-6 space-y-6 lg:space-y-0 mt-6">
        {/* First Card */}
        <div className="flex flex-col items-center p-6 bg-white">
          <div className="w-72 rounded-[40px] shadow-custom overflow-hidden card-lift bg-white">
            <div className="h-32 flex items-center justify-center bg-Green text-white">
              <h3 className="text-center text-3xl font-semibold">{t('classic_tier')}</h3>
            </div>
            <div className="bg-white p-6 min-h-[140px] flex flex-col justify-center">
              <p className="text-gray-800 font-semibold text-lg">
                <span className="text-Green">{t('classic_points')}</span>
              </p>
              <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                {t('classic_description')}
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="flex flex-col items-center p-6 bg-white">
          <div className="w-72 rounded-[40px] shadow-custom overflow-hidden">
            <div className="bg-Green to-orange-400 h-32">
              <h3 className="text-white relative top-12 text-center text-3xl font-semibold">{t('silver_tier')}</h3>
            </div>
            <div className="bg-white h-32 p-4">
              <p className="text-gray-800 font-semibold">
                <span className="text-Green">{t('silver_points')}</span>
              </p>
              <p className="text-gray-600 mt-2">
                {t('silver_description')}
              </p>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="flex flex-col items-center p-6 bg-white">
          <div className="w-72 rounded-[40px] shadow-custom overflow-hidden">
            <div className="bg-Green to-orange-400 h-32">
              <h3 className="text-white relative top-12 text-center text-3xl font-semibold">{t('gold_tier')}</h3>
            </div>
            <div className="bg-white h-32 p-4">
              <p className="text-gray-800 font-semibold">
                <span className="text-Green">{t('gold_points')}</span>
              </p>
              <p className="text-gray-600 mt-2">
                {t('gold_description')}
              </p>
            </div>
          </div>
        </div>
      </div>

        {/* Button below the cards */}
      <a href='/tiers-benefits' className="flex justify-center mt-8 mb-8">
        <button className="btn-primary px-6 py-3 text-xl">{t('get_started')}</button>
      </a>
    </div>
  );
};

export default TierCard;
