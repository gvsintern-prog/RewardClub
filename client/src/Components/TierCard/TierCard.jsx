import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const TierCard = () => {
  const { t } = useTranslation();

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t('explore_tiers')} <span className="text-Green">{t('tiers')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('earn_points')}
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Classic Tier */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-Green/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100 duration-300"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border-2 border-gray-100 group-hover:border-Green/30">
              {/* Tier Badge */}
              <div className="absolute top-4 right-4 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                {t('classic_tier')}
              </div>
              
              {/* Content */}
              <div className="p-10">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-Green mb-2">1</div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Tier Level</p>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed text-base">
                    {t('classic_description')}
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-8 p-4 bg-Green/5 rounded-xl">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="text-sm text-gray-600">Starting Points</p>
                    <p className="font-bold text-Green text-lg">{t('classic_points')}</p>
                  </div>
                </div>

                <button className="w-full btn-outline py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  {t('learn_more') || 'Learn More'}
                </button>
              </div>
            </div>
          </div>

          {/* Silver Tier - Featured */}
          <div className="relative group md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-Green via-teal-400/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-20 group-hover:opacity-40 duration-300"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-Green/5 border-3 border-Green/50 transform md:scale-105">
              {/* Ribbon */}
              <div className="absolute top-0 right-0 bg-Green text-white px-6 py-2 text-xs font-bold uppercase tracking-widest transform rotate-0">
                ⚡ Most Popular
              </div>
              
              {/* Content */}
              <div className="p-10">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-Green mb-2">2</div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Tier Level</p>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed text-base">
                    {t('silver_description')}
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-8 p-4 bg-Green/15 rounded-xl">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="text-sm text-gray-600">Starting Points</p>
                    <p className="font-bold text-Green text-lg">{t('silver_points')}</p>
                  </div>
                </div>

                <button className="w-full btn-primary py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  {t('learn_more') || 'Learn More'}
                </button>
              </div>
            </div>
          </div>

          {/* Gold Tier */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-Green/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100 duration-300"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border-2 border-gray-100 group-hover:border-Green/30">
              {/* Tier Badge */}
              <div className="absolute top-4 right-4 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                {t('gold_tier')}
              </div>
              
              {/* Content */}
              <div className="p-10">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-Green mb-2">3</div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Tier Level</p>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed text-base">
                    {t('gold_description')}
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-8 p-4 bg-Green/5 rounded-xl">
                  <span className="text-2xl">👑</span>
                  <div>
                    <p className="text-sm text-gray-600">Starting Points</p>
                    <p className="font-bold text-Green text-lg">{t('gold_points')}</p>
                  </div>
                </div>

                <button className="w-full btn-outline py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  {t('learn_more') || 'Learn More'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <a href='/tiers-benefits'>
            <button className="btn-primary px-12 py-4 text-lg font-bold shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              {t('get_started')} 🚀
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TierCard;
