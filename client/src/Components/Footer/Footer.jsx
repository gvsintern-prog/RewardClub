import { FaFacebookF, FaInstagram } from "react-icons/fa";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('email', email);
      formData.append('list', '7H892J5BEVl7HofjvP7MYb9w'); // Your list ID
      formData.append('subform', 'yes');
      formData.append('hp', '');

      await fetch('https://send.alzyara.com/subscribe', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      setMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Subscription failed. Please try again.');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white text-black py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-2">
          <ul className="space-y-3 text-black font-medium leading-relaxed">
            <li><a href="/tiers-benefits">{t("exploreTiers")}</a></li>
            <li><a href="/brands">{t("discoverBrands")}</a></li>
            <li><a href="/offers-rewards">{t("unlockRewards")}</a></li>
            <li><a href="/contact-us">{t("getSupport")}</a></li>
          </ul>
        </div>

        <div className="relative right-0 lg:right-10">
          <h3 className="font-semibold text-center">{t("customerSupport")}</h3>
          <a href="tel:+97145284037">
            <button className="btn-outline w-full mt-2 flex items-center justify-center gap-2">
              <span className="text-Green font-semibold">{t("callSupport")}</span>
              <span dir="ltr" style={{ unicodeBidi: "plaintext" }}>+971 45284037</span>
            </button>
          </a>
          <p className="text-Green text-center mt-2">
            <a href="mailto:support@rewardclub.net">support@rewardclub.net</a>
          </p>
        </div>

        <div className="relative left-0 lg:left-30 lg:right-30">
          <div className="mb-4">
            <h3 className="font-semibold">{t("followUs")}</h3>
            <div className="flex space-x-3 mt-2">
              <a href="https://www.facebook.com/rewardclubloyalty" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-Green text-xl hover:text-black" />
              </a>
              <a href="https://www.instagram.com/reward_club_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-Green text-xl hover:text-black" />
              </a>
              <a href="https://x.com/Reward_Club_" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-Green text-xl hover:text-black" />
              </a>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="font-semibold mb-2">{t("newsletterHeading") || "Stay Updated"}</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col w-full max-w-xs gap-2">
              <label htmlFor="footer-email" className="sr-only">{t('enterYourEmail')}</label>
              <input
                id="footer-email"
                type="email"
                placeholder={t("enterYourEmail") || "Enter your email"}
                className="p-3 text-gray-800 border border-gray-300 rounded-md focus:ring-2 focus:ring-Green"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn-primary w-max px-4 py-2 rounded-md"
                disabled={loading}
              >
                {loading ? t("submitting") || "Submitting..." : t("register") || "Subscribe"}
              </button>
              {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
            </form>
          </div>
        </div>

        {/* Newsletter Section */}

      </div>

      <hr className="my-6 border-gray-300" />
      <div className="flex flex-col md:flex-row justify-between text-gray-500 text-sm text-center md:text-left">
        <p>©{new Date().getFullYear()} {t("copyright")}</p>
        <div className="flex lg:ml-0 ml-4 lg:mt-0 mt-2 space-x-4">
          <a href="/about-us">{t("About_us")}</a>
          <a href="/terms-conditions">{t("termsConditions")}</a>
          <a href="/privacy-statement">{t("privacyPolicy")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
