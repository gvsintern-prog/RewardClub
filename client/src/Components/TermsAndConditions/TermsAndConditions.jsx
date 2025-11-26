import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Faqactive from "../Faq/Faqactive";

const TermsAndConditions = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  return (
    <div>
      <div className="max-w-5xl mx-auto p-8 bg-white mt-20 rounded-xl shadow-custom">
        <h1 className="text-2xl font-bold text-center text-Green">
          {isRTL ? "الشروط والأحكام" : "TERMS AND CONDITIONS"}
        </h1>

        <div className="mt-8 space-y-6 text-gray-700">
          <section>
            <p className="leading-relaxed">
              {isRTL
                ? "بفتح حساب عضوية برنامج الولاء أو باستخدام البطاقة، فإنك توافق على شروط الاستخدام وسياسة الخصوصية."
                : "By opening a Loyalty Program membership account or using the card, you agree to these Terms and Conditions and Privacy Policy."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-Green mb-3">
              {isRTL ? "المزايا والعروض" : "Benefits and Offers"}
            </h2>
            <p className="leading-relaxed">
              {isRTL
                ? "جميع فوائد برنامج الولاء والعروض تخضع للتوفر وقد يتم تغييرها في أي وقت."
                : "All loyalty program benefits and offers are subject to availability and may be changed at any time."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-Green mb-3">
              {isRTL ? "المسؤولية" : "Liability"}
            </h2>
            <p className="leading-relaxed">
              {isRTL
                ? "الشركة غير مسؤولة عن فقدان البريد أو تأخر الاسترجاع أو الأخطاء في البرنامج."
                : "The Company is not responsible for lost mail, delays, or program errors."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-Green mb-3">
              {isRTL ? "الأهلية" : "Eligibility"}
            </h2>
            <p className="leading-relaxed">
              {isRTL
                ? "العضوية مفتوحة لأي فرد يبلغ 18 عاماً فأكثر ويقدم معلومات صحيحة وفقاً للقانون."
                : "Membership is open to any individual 18 years or older who provides accurate information and complies with applicable law."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-Green mb-3">
              {isRTL ? "الاتصال بنا" : "Contact Us"}
            </h2>
            <p className="leading-relaxed mb-4">
              {isRTL
                ? "إذا كان لديك أي استفسارات، يرجى التواصل معنا:"
                : "If you have any questions, please contact us:"}
            </p>
            <div className="flex flex-col gap-3">
              <a href="/contact-us" className="inline-block">
                <button className="btn-primary">{t("getSupport")}</button>
              </a>
              <a href="mailto:support@rewardclub.net" className="inline-block">
                <button className="btn-outline">{t("emailUs") || "Email"}</button>
              </a>
            </div>

            <div className="mt-6 pt-6 border-t">
              <p className="mb-3">
                <strong>{isRTL ? "دعم نادي المكافآت" : "Reward Club Support"}:</strong>
              </p>
              <p className="space-y-2">
                {isRTL ? (
                  <>
                    <span>
                      الموقع:{" "}
                      <a
                        href="https://www.rewardclub.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-Green underline"
                      >
                        www.rewardclub.net
                      </a>
                    </span>
                    <br />
                    <span>
                      الواتساب:{" "}
                      <a
                        href="https://web.whatsapp.com/send?phone=971554201838"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-Green underline"
                      >
                        +971 55 420 1838
                      </a>
                    </span>
                    <br />
                    <span>
                      البريد:{" "}
                      <a
                        href="mailto:support@rewardclub.net"
                        className="text-Green underline"
                      >
                        support@rewardclub.net
                      </a>
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      Website:{" "}
                      <a
                        href="https://www.rewardclub.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-Green underline"
                      >
                        www.rewardclub.net
                      </a>
                    </span>
                    <br />
                    <span>
                      WhatsApp:{" "}
                      <a
                        href="https://web.whatsapp.com/send?phone=971554201838"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-Green underline"
                      >
                        +971 55 420 1838
                      </a>
                    </span>
                    <br />
                    <span>
                      Email:{" "}
                      <a
                        href="mailto:support@rewardclub.net"
                        className="text-Green underline"
                      >
                        support@rewardclub.net
                      </a>
                    </span>
                  </>
                )}
              </p>
            </div>
          </section>
        </div>
      </div>
      <Faqactive />
    </div>
  );
};

export default TermsAndConditions;
  