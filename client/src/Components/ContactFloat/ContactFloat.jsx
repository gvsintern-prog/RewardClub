import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMessageCircle, FiX } from 'react-icons/fi';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactFloat = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Contact Menu */}
      <div className={`fixed ${isRTL ? 'left-8' : 'right-8'} bottom-24 z-40 flex flex-col gap-3 transition-all duration-300 ease-out`}>
        {isOpen && (
          <>
            {/* WhatsApp */}
            <a 
              href="https://wa.me/971554201838" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-105 group"
            >
              <span className="text-sm font-semibold group-hover:block hidden">{t('whatsapp') || 'WhatsApp'}</span>
              <FaWhatsapp size={24} />
            </a>
            
            {/* Phone */}
            <a 
              href="tel:+97145284037"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105 group"
            >
              <span className="text-sm font-semibold group-hover:block hidden">{t('call') || 'Call'}</span>
              <FaPhone size={24} />
            </a>
            
            {/* Email */}
            <a 
              href="mailto:support@rewardclub.net"
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-red-600 transition-all hover:scale-105 group"
            >
              <span className="text-sm font-semibold group-hover:block hidden">{t('email') || 'Email'}</span>
              <FaEnvelope size={24} />
            </a>
          </>
        )}
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${isRTL ? 'left-8' : 'right-8'} bottom-8 bg-Green text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-Green/80 transition-all duration-300 hover:scale-110 z-40`}
        aria-label="Contact support"
      >
        {isOpen ? <FiX size={28} /> : <FiMessageCircle size={28} />}
      </button>
    </>
  );
};

export default ContactFloat;
