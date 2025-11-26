import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUserPlus, FaShoppingCart, FaCoins, FaGift } from 'react-icons/fa';

const HowItWorks = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const steps = [
    {
      icon: FaUserPlus,
      title: t('step_1_title') || 'Sign Up',
      description: t('step_1_desc') || 'Create your free RewardClub account and join our loyalty program in minutes.'
    },
    {
      icon: FaShoppingCart,
      title: t('step_2_title') || 'Shop & Earn',
      description: t('step_2_desc') || 'Shop at 70+ partner brands and earn points on every purchase automatically.'
    },
    {
      icon: FaCoins,
      title: t('step_3_title') || 'Accumulate Points',
      description: t('step_3_desc') || 'Watch your points grow and unlock higher tiers for exclusive benefits.'
    },
    {
      icon: FaGift,
      title: t('step_4_title') || 'Redeem Rewards',
      description: t('step_4_desc') || 'Use your points to redeem amazing rewards from your favorite brands.'
    }
  ];

  return (
    <section className="py-24 bg-white px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-5xl lg:text-6xl font-bold text-Green mb-6">
            {t('how_it_works') || 'How It Works'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('how_it_works_subtitle') || 'Four simple steps to start earning rewards'}
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-Green/0 via-Green to-Green/0 z-0" />

          {/* Steps */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative z-10">
                {/* Card */}
                <div className="bg-gradient-to-br from-white to-Green/5 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 card-lift h-full flex flex-col items-center">
                  {/* Step Number Circle */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-Green text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <Icon className="w-16 h-16 text-Green mb-6 mt-4" />

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a href="/member-register">
            <button className="btn-primary px-12 py-4 text-lg font-bold shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              {t('get_started') || 'Get Started Now'} 🚀
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
