import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiX } from 'react-icons/fi';

const UrgencyBanner = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-8 md:px-16 lg:px-24 py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-center md:text-left font-bold text-lg flex items-center justify-center md:justify-start gap-2">
            ⏰ {t('limited_offer') || 'Limited Time Offer!'} 
            <span className="text-sm font-normal ml-2">{t('limited_offer_desc') || 'Join now and get 1000 bonus points'}
            </span>
          </p>
        </div>
        <a href="/member-register" className="hidden md:inline-block">
          <button className="bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-all whitespace-nowrap">
            {t('claim_bonus') || 'Claim Bonus'}
          </button>
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200 transition-colors flex-shrink-0"
        >
          <FiX size={24} />
        </button>
      </div>
    </div>
  );
};

export default UrgencyBanner;
