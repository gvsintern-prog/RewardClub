import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiShare2, FiCopy, FiCheck } from 'react-icons/fi';

const ReferralProgram = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const [copied, setCopied] = useState(false);
  const referralCode = 'REWARD2024';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-Green/10 to-teal-600/10 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={isRTL ? 'text-right lg:order-2' : 'text-left'}>
            <h2 className="text-5xl lg:text-6xl font-bold text-Green mb-6">
              {t('refer_friend') || 'Refer & Earn'}
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {t('referral_desc') || 'Share the love! Invite your friends to join RewardClub and both of you earn exclusive bonuses.'}
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-Green/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-Green font-bold">✓</span>
                </div>
                <span className="text-lg text-gray-800">{t('referral_bonus_1') || '500 bonus points per successful referral'}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-Green/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-Green font-bold">✓</span>
                </div>
                <span className="text-lg text-gray-800">{t('referral_bonus_2') || 'Your friend gets 500 bonus points too'}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-Green/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-Green font-bold">✓</span>
                </div>
                <span className="text-lg text-gray-800">{t('referral_bonus_3') || 'No limit on referrals - earn unlimited rewards'}</span>
              </div>
            </div>

            {/* CTA Button */}
            <a href="/member-register" className="inline-block">
              <button className="btn-primary px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                {t('join_referral') || 'Join Referral Program'} →
              </button>
            </a>
          </div>

          {/* Right - Referral Code Card */}
          <div className={`flex justify-center ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-sm w-full card-lift">
              {/* Header */}
              <div className="text-center mb-8">
                <FiShare2 className="w-16 h-16 text-Green mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('your_referral_code') || 'Your Referral Code'}
                </h3>
              </div>

              {/* Code Display */}
              <div className="bg-gradient-to-br from-Green/5 to-teal-600/5 rounded-2xl p-6 mb-6 text-center border-2 border-Green/30">
                <p className="text-gray-600 text-sm mb-2">{t('share_code') || 'Share this code'}</p>
                <p className="text-4xl font-bold text-Green tracking-widest mb-2">{referralCode}</p>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 bg-Green text-white py-3 rounded-xl font-bold hover:bg-Green/90 transition-all mb-4"
              >
                {copied ? (
                  <>
                    <FiCheck size={20} />
                    {t('copied') || 'Copied!'}
                  </>
                ) : (
                  <>
                    <FiCopy size={20} />
                    {t('copy_code') || 'Copy Code'}
                  </>
                )}
              </button>

              {/* Share Text */}
              <p className="text-center text-sm text-gray-600">
                {t('referral_share_text') || 'Share your unique code with friends and earn rewards together!'}
              </p>

              {/* Social Share Buttons */}
              <div className="flex gap-3 mt-6">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                    Facebook
                  </button>
                </a>
                <a href={`https://twitter.com/intent/tweet?text=${t('referral_share_text')}&url=${window.location.origin}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button className="w-full py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
                    X
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20 bg-white rounded-2xl p-10 shadow-lg">
          <h3 className={`text-3xl font-bold text-Green mb-10 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('how_referral_works') || 'How It Works'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: t('ref_step1_title') || 'Share Your Code', desc: t('ref_step1_desc') || 'Send your referral code to friends' },
              { step: '2', title: t('ref_step2_title') || 'They Sign Up', desc: t('ref_step2_desc') || 'Your friend joins using your code' },
              { step: '3', title: t('ref_step3_title') || 'You Both Earn', desc: t('ref_step3_desc') || 'Both get 500 bonus points instantly' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-Green text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram;
