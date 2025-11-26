import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const TierCard = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            {t('explore_tiers')} <span className="text-Green">{t('tiers')}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('earn_points')}
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Classic Tier */}
          <div className="group rounded-3xl overflow-hidden shadow-custom card-lift hover:shadow-2xl transition-all duration-300 bg-white">
            <div className="h-40 bg-Green flex items-center justify-center">
              <h3 className="text-white text-3xl font-bold">{t('classic_tier')}</h3>
            </div>
            <div className="p-8 min-h-[200px] flex flex-col justify-between">
              <div>
                <p className="text-Green font-bold text-xl mb-3">{t('classic_points')}</p>
                <p className="text-gray-600 leading-relaxed">
                  {t('classic_description')}
                </p>
              </div>
              <button className="mt-6 btn-outline w-full py-2 rounded-lg hover:bg-gray-50 transition-colors">
                {t('learn_more') || 'Learn More'}
              </button>
            </div>
          </div>

          {/* Silver Tier */}
          <div className="group rounded-3xl overflow-hidden shadow-custom card-lift hover:shadow-2xl transition-all duration-300 bg-white transform md:scale-105">
            <div className="h-40 bg-gradient-to-r from-Green to-teal-600 flex items-center justify-center">
              <h3 className="text-white text-3xl font-bold">{t('silver_tier')}</h3>
            </div>
            <div className="p-8 min-h-[200px] flex flex-col justify-between bg-gradient-to-b from-white to-gray-50">
              <div>
                <p className="text-Green font-bold text-xl mb-3">{t('silver_points')}</p>
                <p className="text-gray-600 leading-relaxed">
                  {t('silver_description')}
                </p>
              </div>
              <button className="mt-6 btn-primary w-full py-2 rounded-lg transition-all duration-300">
                {t('learn_more') || 'Learn More'}
              </button>
            </div>
          </div>

          {/* Gold Tier */}
          <div className="group rounded-3xl overflow-hidden shadow-custom card-lift hover:shadow-2xl transition-all duration-300 bg-white">
            <div className="h-40 bg-gradient-to-r from-Green via-teal-500 to-blue-600 flex items-center justify-center">
              <h3 className="text-white text-3xl font-bold">{t('gold_tier')}</h3>
            </div>
            <div className="p-8 min-h-[200px] flex flex-col justify-between">
              <div>
                <p className="text-Green font-bold text-xl mb-3">{t('gold_points')}</p>
                <p className="text-gray-600 leading-relaxed">
                  {t('gold_description')}
                </p>
              </div>
              <button className="mt-6 btn-outline w-full py-2 rounded-lg hover:bg-gray-50 transition-colors">
                {t('learn_more') || 'Learn More'}
              </button>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a href='/tiers-benefits'>
            <button className="btn-primary px-10 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              {t('get_started')}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TierCard;
