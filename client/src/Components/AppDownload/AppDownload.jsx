import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaApple, FaAndroid } from 'react-icons/fa';

const AppDownload = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  return (
    <section className="py-24 bg-gradient-to-r from-Green to-teal-600 px-8 md:px-16 lg:px-24 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className={isRTL ? 'text-right lg:col-span-1 lg:order-2' : 'text-left'}>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              {t('download_app') || 'Download the Aura App'}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('app_description') || 'Manage your rewards, check your points balance, and discover exclusive offers all in one place. Available on iOS and Android.'}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">{t('app_feature_1') || 'Real-time points tracking'}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">{t('app_feature_2') || 'Exclusive app-only deals'}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">{t('app_feature_3') || 'Easy reward redemption'}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">{t('app_feature_4') || 'Push notifications for special offers'}</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-Green px-6 py-3 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <FaApple size={24} />
                <div className="text-left">
                  <div className="text-xs">{t('download_on') || 'Download on'}</div>
                  <div>{t('app_store') || 'App Store'}</div>
                </div>
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-Green px-6 py-3 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <FaAndroid size={24} />
                <div className="text-left">
                  <div className="text-xs">{t('get_it_on') || 'Get it on'}</div>
                  <div>{t('play_store') || 'Google Play'}</div>
                </div>
              </a>
            </div>

            {/* QR Code */}
            <div className="mt-12 pt-8 border-t border-white/30">
              <p className="text-sm text-white/80 mb-4">{t('scan_qr') || 'Or scan QR code to download'}</p>
              <div className="inline-block bg-white p-4 rounded-xl">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">{t('qr_code') || 'QR Code'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Phone Image */}
          <div className={`flex justify-center ${isRTL ? 'lg:col-span-1 lg:order-1' : ''}`}>
            <div className="relative w-full max-w-sm">
              {/* Phone Frame */}
              <div className="bg-black rounded-3xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-3xl overflow-hidden aspect-[9/19.5]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10"></div>
                  
                  {/* App Preview */}
                  <div className="w-full h-full bg-gradient-to-b from-Green/20 to-white flex flex-col items-center justify-center">
                    <div className="text-center px-4 py-8">
                      <h3 className="text-2xl font-bold text-Green mb-2">Aura</h3>
                      <p className="text-gray-600 text-sm mb-4">{t('app_preview') || 'RewardClub App'}</p>
                      <div className="bg-Green/10 rounded-2xl p-6 my-4">
                        <p className="text-3xl font-bold text-Green">12,540</p>
                        <p className="text-xs text-gray-600 mt-1">{t('points_balance') || 'Points Balance'}</p>
                      </div>
                      <button className="bg-Green text-white px-8 py-2 rounded-full text-sm font-bold hover:bg-Green/80">
                        {t('redeem_now') || 'Redeem Now'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white text-Green px-6 py-3 rounded-2xl shadow-2xl font-bold text-sm">
                ⭐ 4.8 Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
