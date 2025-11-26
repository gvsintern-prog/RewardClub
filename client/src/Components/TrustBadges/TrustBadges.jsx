import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaClock, FaHeadset, FaStar } from 'react-icons/fa';

const TrustBadges = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const badges = [
    {
      icon: FaShieldAlt,
      title: t('secure_payment') || 'Secure Payment',
      description: t('secure_payment_desc') || '100% secure transactions'
    },
    {
      icon: FaClock,
      title: t('instant_reward') || 'Instant Rewards',
      description: t('instant_reward_desc') || 'Points credited immediately'
    },
    {
      icon: FaHeadset,
      title: t('24_7_support') || '24/7 Support',
      description: t('support_desc') || 'Always here to help'
    },
    {
      icon: FaStar,
      title: t('trusted_brand') || 'Trusted by Thousands',
      description: t('trusted_desc') || '50K+ active members'
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className={`flex items-center gap-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                <Icon className="w-12 h-12 text-Green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{badge.title}</h3>
                  <p className="text-xs text-gray-600">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
