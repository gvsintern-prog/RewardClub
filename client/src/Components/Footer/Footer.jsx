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
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-Green/10 border border-Green/30 rounded-2xl p-8 mb-12 max-w-2xl">
          <h3 className="text-2xl font-bold mb-2">{t("newsletterHeading") || "Stay Connected"}</h3>
          <p className="text-gray-300 mb-6">{t("newsletter_description") || "Get exclusive offers and updates delivered to your inbox"}</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="footer-email" className="sr-only">{t('enterYourEmail')}</label>
            <input
              id="footer-email"
              type="email"
              placeholder={t("enterYourEmail") || "Enter your email"}
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-Green"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn-primary px-8 py-3 rounded-lg font-semibold whitespace-nowrap"
              disabled={loading}
            >
              {loading ? t("submitting") || "..." : t("register") || "Subscribe"}
            </button>
          </form>
          {message && <p className="mt-3 text-sm text-Green">{message}</p>}
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-Green">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/tiers-benefits" className="text-gray-300 hover:text-white transition">{t("exploreTiers")}</a></li>
              <li><a href="/brands" className="text-gray-300 hover:text-white transition">{t("discoverBrands")}</a></li>
              <li><a href="/offers-rewards" className="text-gray-300 hover:text-white transition">{t("unlockRewards")}</a></li>
              <li><a href="/contact-us" className="text-gray-300 hover:text-white transition">{t("getSupport")}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-Green">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about-us" className="text-gray-300 hover:text-white transition">{t("About_us")}</a></li>
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-white transition">{t("privacyPolicy")}</a></li>
              <li><a href="/terms-conditions" className="text-gray-300 hover:text-white transition">{t("termsConditions")}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-Green">{t("customerSupport")}</h3>
            <a href="tel:+97145284037" className="text-gray-300 hover:text-Green transition mb-3 block">
              <div className="font-semibold">📞 {t("callSupport")}</div>
              <div dir="ltr" className="text-sm">+971 45284037</div>
            </a>
            <a href="mailto:support@rewardclub.net" className="text-Green hover:text-white transition">
              📧 support@rewardclub.net
            </a>
          </div>

          {/* Social & Follow */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-Green">{t("followUs")}</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.facebook.com/rewardclubloyalty" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-Green/20 flex items-center justify-center hover:bg-Green transition">
                <FaFacebookF className="text-Green text-lg" />
              </a>
              <a href="https://www.instagram.com/reward_club_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-Green/20 flex items-center justify-center hover:bg-Green transition">
                <FaInstagram className="text-Green text-lg" />
              </a>
              <a href="https://x.com/Reward_Club_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-Green/20 flex items-center justify-center hover:bg-Green transition">
                <FaXTwitter className="text-Green text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-gray-700 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>©{new Date().getFullYear()} {t("copyright")}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
