import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheck, FaX } from 'react-icons/fa6';

const BenefitsComparison = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const features = [
    { name: t('earn_points') || 'Earn Points on Purchases', classic: '1x', silver: '1.5x', gold: '2x' },
    { name: t('redeem_rewards') || 'Redeem Rewards', classic: true, silver: true, gold: true },
    { name: t('exclusive_offers') || 'Exclusive Offers', classic: false, silver: true, gold: true },
    { name: t('vip_support') || 'VIP Support', classic: false, silver: false, gold: true },
    { name: t('birthday_bonus') || 'Birthday Bonus Points', classic: false, silver: true, gold: true },
    { name: t('early_access') || 'Early Access to Sales', classic: false, silver: true, gold: true },
    { name: t('concierge_service') || 'Concierge Service', classic: false, silver: false, gold: true },
    { name: t('priority_checkout') || 'Priority Checkout', classic: false, silver: true, gold: true }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-Green/5 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-5xl lg:text-6xl font-bold text-Green mb-6">
            {t('compare_tiers') || 'Compare Tier Benefits'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('compare_subtitle') || 'Choose the tier that best fits your lifestyle'}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <thead>
              <tr className="bg-Green text-white">
                <th className="px-8 py-6 text-left font-bold text-lg">
                  {t('feature') || 'Feature'}
                </th>
                <th className="px-8 py-6 text-center">
                  <div className="text-lg font-bold">⭐</div>
                  <div>{t('classic_tier') || 'Classic'}</div>
                </th>
                <th className="px-8 py-6 text-center bg-Green/80">
                  <div className="text-lg font-bold">✨</div>
                  <div>{t('silver_tier') || 'Silver'}</div>
                  <div className="text-xs mt-1 bg-white/20 px-2 py-1 rounded-full inline-block">
                    {t('popular') || 'POPULAR'}
                  </div>
                </th>
                <th className="px-8 py-6 text-center">
                  <div className="text-lg font-bold">👑</div>
                  <div>{t('gold_tier') || 'Gold'}</div>
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-Green/5 transition-colors`}
                >
                  <td className="px-8 py-5 font-semibold text-gray-900">
                    {feature.name}
                  </td>
                  <td className="px-8 py-5 text-center">
                    {typeof feature.classic === 'boolean' ? (
                      feature.classic ? (
                        <FaCheck className="w-6 h-6 text-Green mx-auto" />
                      ) : (
                        <FaX className="w-6 h-6 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="font-bold text-Green text-lg">
                        {feature.classic}
                      </span>
                    )}
                  </td>
                  <td className="px-8 py-5 text-center bg-Green/5">
                    {typeof feature.silver === 'boolean' ? (
                      feature.silver ? (
                        <FaCheck className="w-6 h-6 text-Green mx-auto" />
                      ) : (
                        <FaX className="w-6 h-6 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="font-bold text-Green text-lg">
                        {feature.silver}
                      </span>
                    )}
                  </td>
                  <td className="px-8 py-5 text-center">
                    {typeof feature.gold === 'boolean' ? (
                      feature.gold ? (
                        <FaCheck className="w-6 h-6 text-Green mx-auto" />
                      ) : (
                        <FaX className="w-6 h-6 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="font-bold text-Green text-lg">
                        {feature.gold}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <a href="/tiers-benefits">
            <button className="w-full btn-outline py-3 rounded-xl font-bold text-lg hover:bg-Green hover:text-white transition-all">
              {t('explore_classic') || 'Learn About Classic'}
            </button>
          </a>
          <a href="/tiers-benefits">
            <button className="w-full bg-Green text-white py-3 rounded-xl font-bold text-lg hover:bg-Green/80 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {t('choose_silver') || 'Choose Silver ⭐'}
            </button>
          </a>
          <a href="/tiers-benefits">
            <button className="w-full btn-outline py-3 rounded-xl font-bold text-lg hover:bg-Green hover:text-white transition-all">
              {t('unlock_gold') || 'Unlock Gold'}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsComparison;
