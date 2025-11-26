import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaQ } from "react-icons/fa6";
import Faqactive from "../Faq/Faqactive";
const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);
  return (
    <div>
        {isRTL ? (
      <div className="max-w-5xl p-8 mx-auto mb-32 bg-white rounded-xl shadow-custom leading-relaxed">
      <h1 className="text-center text-Green mt-32 text-2xl ">
        حول نادي المكافآت
      </h1>
      <br />
      <p className="">
        {" "}
        يتضمن نادي المكافآت ثلاث بطاقات ولاء مصممة خصيصًا لتلبية احتياجات عملائنا المخلصين ومكافأتهم. عند الانضمام لأول مرة إلى هذا البرنامج، يحصل العميل على بطاقة كلاسيك. من خلال تراكم النقاط، سيتمكن بعد ذلك من الترقية إلى بطاقة الذهبية أو البلاتينية.
      </p>
      <br />
      <h1 className=" text-black  text-2xl ">التسجيل</h1>
      <br />
      <p>
        {" "}
        اشترك في أي مكتب شريك عند الشراء أو الاستفادة من الخدمات بأي قيمة أو عبر الإنترنت على الموقع أو باتباع رابط تطبيق الولاء. لتصبح عضوًا صالحًا، يجب عليك إكمال عملية التسجيل من خلال تقديم تفاصيل شخصية كاملة ودقيقة والإشارة إلى قبولك لشروط وأحكام البرنامج. بعد الانتهاء، ستتلقى بريدًا إلكترونيًا للتأكيد وتصبح مؤهلاً لكسب النقاط. يمكنك البدء في التسجيل فورًا حيث أن التسجيل عبر الإنترنت متاح الآن.
      </p>
      <br />
      <h1 className=" text-black  text-2xl ">الأهلية</h1>
      <br />
      <p>
        {" "}
        كلما استخدم الأعضاء برنامج الولاء، كلما تراكمت النقاط. برنامج الولاء، النقاط، الاسترداد، العروض الترويجية والفوائد أو الخدمات الأخرى المرتبطة به هي ملكية حصرية للشركة. ليس لها قيمة نقدية ولن تعوض الشركة أو تدفع نقدًا عن أي نقاط مهدرة أو غير مستخدمة. يُحظر على الأعضاء مقايضة أو بيع النقاط مقابل النقود. كل نقطة مكتسبة ستكون صالحة لمدة عام واحد من تاريخ الإضافة وفقًا لقواعد الشركة والبائعين. الأعضاء مسؤولون عن البقاء على علم بقواعد البرنامج و/أو أي تغييرات في قواعد البرنامج. يجوز للشركة إنهاء برنامج الولاء، كليًا أو جزئيًا، مع إشعار مسبق لمدة شهر واحد لجميع أعضاء الولاء النشطين. سيؤدي استمرارك في المشاركة في برنامج الولاء إلى موافقتك على أي تغييرات في قواعد البرنامج.
      </p>
      <br />
      <ul>
        <li>
          {" "}
          العضوية في برنامج الولاء مجانية ومتاحة لأي فرد:
        </li>
        <br />
        <li> (أ) يجب أن يكون عمره 18 عامًا فأكثر؛</li>
        <li>
          {" "}
          (ب) يمتلك السلطة القانونية للاتفاق على قواعد البرنامج؛
        </li>
        <li>
          {" "}
          (ج) يقدم معلومات شخصية صحيحة ودقيقة عند التسجيل في برنامج الولاء؛
        </li>
        <li>
          {" "}
          (د) يقيم في ولاية قضائية تسمح قانونيًا بالمشاركة في برنامج الولاء
        </li>
        <br />
      </ul>

      <h1 className=" text-black  text-2xl ">
        أنواع البطاقات والترقيات
      </h1>
      <br />
      <p>عدد النقاط المتراكمة يعتمد على نوع البطاقة:</p>
      <br />
      <p>برنامج ولاء نادي المكافآت</p>
      <br />
      <p>
        {" "}
        <strong>(أ) البطاقة الكلاسيكية</strong>: احصل على بطاقتك الكلاسيكية عند أي عملية شراء أو استفد من الخدمات من مجموعة من البائعين.
      </p>
      <br />
      <p>
        يحصل أعضاء البطاقة الكلاسيكية على نقطة واحدة لكل 100 دينار بحريني يتم إنفاقها. بمجرد تراكم 500 نقطة، يتم منح الأعضاء فرصة استبدالها بقسيمة رقمية بقيمة 100 دينار بحريني. عند الوصول إلى 20,000 نقطة، سيتم ترقية الأعضاء إلى البطاقة الذهبية مع الوصول إلى فوائد إضافية؛
      </p>
      <br />
      <p>
        {" "}
        <strong>(ب) البطاقة الذهبية:</strong> يحمل البطاقة الذهبية يحصلون على ضعف النقاط لكل 100 دينار بحريني، أي نقطتين لكل 100 دينار بحريني يتم إنفاقها. إذا وصلت النقاط إلى 50,000، سيتم ترقية الأعضاء إلى البطاقة البلاتينية مع زيادة الامتيازات، وفوائد إضافية، ومكافآت إضافية؛
      </p>
      <br />
      <p>
        {" "}
        <strong>(ج) البطاقة البلاتينية:</strong> يحصل أعضاء البطاقة البلاتينية على ثلاثة أضعاف النقاط لكل 100 دينار بحريني، أي ثلاث نقاط لكل 100 دينار بحريني يتم إنفاقها.
      </p>
      <br />
      <p>
        {" "}
        <strong>(د) بطاقة B2B:</strong> يمكن لموظفي الشركة والشركاء الذين يشغلون مناصب مثل المهندسين المعماريين، المصممين، مشغلي الرحلات السياحية وغيرهم، الانضمام إلى برنامج B2B عن طريق ملء النماذج المطلوبة وتقديم المستندات اللازمة للأهلية.
      </p>
      <br />

      <h1 className=" text-black  text-2xl">
        {" "}
        فوائد العضوية
      </h1>
      <br />
      <p className=" text-black  font-bold">الشحن والتوصيل</p>
      <p>
        {" "}
        يتمتع أعضاء البطاقة الذهبية والبلاتينية بتوصيل مجاني في جميع أنحاء البحرين دون حد أدنى للإنفاق. بالنسبة لأعضاء البطاقة الكلاسيكية، التوصيل المجاني في البحرين متاح للمشتريات في المتجر بقيمة 50 دينار بحريني على الأقل. ومع ذلك، يتم تطبيق رسوم توصيل رمزية بقيمة 2.000 دينار بحريني للطلبات التي تقل عن 20 دينار بحريني يتم توصيلها في البحرين. بالإضافة إلى ذلك، يتم تطبيق رسوم توصيل بقيمة 1.500 دينار بحريني للطلبات خارج المدن الرئيسية بغض النظر عن مبلغ الإنفاق.
      </p>
      <br />
      <h2 className=" text-black  font-bold">
        {" "}
        برنامج ولاء نادي المكافآت
      </h2>
      <p>
        {" "}
        يمكن للأعضاء كسب النقاط من خلال شراء السلع و/أو الخدمات من خلال الموردين المدرجين في البحرين ودول مجلس التعاون الخليجي الأخرى كما هو مذكور على الموقع، والبوابات الأخرى المرتبطة والمدرجة (سواء عبر الإنترنت و/أو من المتاجر الفعلية) كما هو محدد حسب نوع البطاقة، بغض النظر عن طريقة الدفع، بشرط تقديم/إدخال بطاقة الولاء في وقت الشراء. في بعض الأحيان، سيحصل الأعضاء على عروض، عروض ترويجية أو قسائم حسب فئة بطاقتهم. أحد فوائد كونك عضوًا مخلصًا هو تلقي إشعارات المبيعات الفورية، الخصومات والإعلانات. للتحقق من تفاصيل فوائد كل نوع من البطاقات، يرجى زيارة صفحة برنامج الولاء.
      </p>
      <br />
      <h1 className=" text-black  text-2xl">استرداد النقاط</h1>
      <br />
      <p>
        {" "}
        يمكن لعضو برنامج الولاء استرداد النقاط المتراكمة على تطبيق الولاء واستخدام رقم القسيمة في قسم الرمز الترويجي عند الشراء عبر الإنترنت أو عرضه على أمين الصندوق عند الشراء في المتجر ويمكن استرداد النقاط على الفور عند الدفع في المتجر في مكتب الصندوق بمساعدة أمين الصندوق. ستكون القسيمة صالحة لمدة 3 أشهر من تاريخ الاسترداد.
      </p>
      <br />
      <div>
        <h3 className="text-2xl  mb-1 mt-6"> تحتاج إلى مساعدة؟</h3>
        <p>
          {" "}
          إذا كان لديك أي أسئلة أو إذا كنت ترغب في تقديم أي ملاحظات بخصوص برنامج نادي المكافآت، أو ترغب في إلغاء أو تعديل أي شيء في معلوماتك الشخصية أو ببساطة ترغب في معرفة رصيد نقاطك، يرجى الاتصال بخدمة العملاء لبرنامج ولاء نادي المكافآت في الإمارات أو البحرين:
        </p>
        <br />
        <br />
          <div className="mt-8 border-t pt-6 flex flex-wrap gap-3">
            <a href="/contact-us" className="inline-block"><button className="btn-primary">{t('getSupport')}</button></a>
            <a href="mailto:support@rewardclub.net" className="inline-block"><button className="btn-outline">{t('emailUs') || 'Email'}</button></a>
          </div>
        </div>
      <>
        يجب تعيين حساب واحد فقط لنفس رقم الهاتف والبريد الإلكتروني. في حالة وجود حساب مكرر، يرجى الاتصال بنا لمساعدتك.
        <br />
        <br />
        <strong>دعم نادي المكافآت:</strong> <br />
        يمكنك الدردشة عبر الإنترنت على موقعنا{" "}
        <a
          href="https://www.rewardclub.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-Green underline"
        >
          www.rewardclub.net
        </a>
        ، أو التواصل معنا عبر الواتساب على{" "}
        <a
          href="https://web.whatsapp.com/send?phone=971554201838"
          target="_blank"
          rel="noopener noreferrer"
          className="text-Green underline"
          dir="ltr"
        >
          +971 55 420 1838
        </a>
        ، أو مراسلتنا عبر البريد الإلكتروني على{" "}
        <a
          href="mailto:support@rewardclub.net"
          className="text-Green underline"
        >
          support@rewardclub.net
        </a>
        .
      </>
    </div>

        ):(
            <div className="max-w-5xl p-8 mx-auto mb-32 bg-white rounded-xl shadow-custom leading-relaxed">
            <h1 className="text-center text-Green mt-32 text-2xl ">
              ABOUT REWARD CLUB
            </h1>
            <br />
            <p className="">
              {" "}
              The Reward Club includes three tailored loyalty cards designed to best
              meet the needs of our loyal customers and reward them. When first
              joining this program, the customer receives a Classic Card. By
              accumulating points, they will then be able to upgrade to Gold Card or
              Platinum Card.
            </p>
            <br />
            <h1 className="text-left text-black  text-2xl ">Enrollment</h1>
            <br />
            <p>
              {" "}
              Subscribe at any partner desk upon purchasing or availing services any
              value or online on the website or following the loyalty App <a href="https://rewardclub.net/" className="text-Green underline font-bold" target="_blank">Link</a>. To
              become a valid member, you must complete the enrollment process by
              providing complete and accurate personal details and indicating your
              acceptance of the Program Terms & conditions. After completion, you
              will receive a confirmation e-mail and becomes eligible to earn
              points. You can start immediately the enrollment since online
              registration is now available.
            </p>
            <br />
            <h1 className="text-left text-black  text-2xl ">Eligibility</h1>
            <br />
            <p>
              {" "}
              The more members use the Loyalty Program; the more points they
              accumulate. Loyalty Program, Points, Redemption, Promotions and other
              associated benefits or services are the sole property of the company.
              They have no cash value and the company will not compensate or pay
              cash for any forfeited or unused points. Members are prohibited from
              bartering or selling points for cash. Each point earned will be valid
              for 1 year from addition date as per company and vendors rules.
              Members are responsible for remaining acknowledged of the Program
              Rules and/or any Program Rule Changes. The company may terminate the
              Loyalty Program, in whole or in part, with one (1) month advance
              notice to all active Loyalty Members. Your continued participation in
              the Loyalty Program will constitute your acceptance of any such
              Program Rule Changes.
            </p>
            <br />
            <ul>
              <li>
                {" "}
                Membership in the Loyalty Program is free and available to any
                individual who:
              </li>
              <br />
              <li> (a) must be 18 years of age and above;</li>
              <li>
                {" "}
                (b) possesses the legal authority to agree to the Program Rules;
              </li>
              <li>
                {" "}
                (c) provides valid and accurate personal information when enrolling
                in the Loyalty Program;
              </li>
              <li>
                {" "}
                (d) resides in a jurisdiction that legally permits participation in
                the Loyalty Program
              </li>
              <br />
            </ul>
    
            <h1 className="text-left text-black  text-2xl ">
              Card Types & Upgrades
            </h1>
            <br />
            <p>Number of points accumulated depending on cards’ variety:</p>
            <br />
            <p>Reward Club Loyalty Program</p>
            <br />
            <p>
              {" "}
              <strong>(a) CLASSIC CARD</strong>: Get your Classic Card upon any
              purchase or avail services from range of vendors.
            </p>
            <br />
            <p>
              Classic Card members earn 1 point on each 1.000 BHD spent. As soon as
              500 points are accumulated, members are given the opportunity to
              exchange them with 1.000 BHD value digital voucher. Upon reaching
              20,000 points members will be upgraded to the Gold card with access to
              additional benefits;
            </p>
            <br />
            <p>
              {" "}
              <strong>(b) GOLD CARD:</strong> Gold Card holders earn double the
              points for each 1.000 BHD , meaning 2 points on each 1.000 BHD spent. If
              points reach 50,000, members will be upgraded to the Platinum Card
              with increased privileges, added benefits and further rewards;
            </p>
            <br />
            <p>
              {" "}
              <strong>(c) PLATINUM CARD:</strong> Platinum Card members gain triple
              the points for each BHD , meaning 3 points on each 1.000 BHD spent.
            </p>
            <br />
            <p>
              {" "}
              <strong>(d) B2B CARD:</strong> The Company’s employees and associates
              with positions as architects, stylists, tour operators and more, may
              join the B2B Program by submitting filling out the required forms and
              submitting the necessary document for eligibility.
            </p>
            <br />
    
            <h1 className="text-left text-black  text-2xl">
              {" "}
              Benefits of membership
            </h1>
            <br />
            <p className="text-left text-black  font-bold">Shipping and Delivery</p>
            <p>
              {" "}
              Gold and Platinum members enjoy free delivery across the BAHRAIN with
              no minimum spends. For Classic members, free delivery in BAHRAIN is
              available for in-store purchases of at least BHD 50. However, a
              nominal 2.000 BHD delivery charge applies to orders below BHD 20
              delivered in BAHRAIN. Additionally, a BHD 1.500 delivery charge is
              applicable for deliveries outside of main cities regardless of the
              spend amount..
            </p>
            <br />
            <h2 className="text-left text-black  font-bold">
              {" "}
              Reward Club Loyalty Program
            </h2>
            <p>
              {" "}
              Points can be earned by Members in connection with purchases of goods
              and/or services made through the Company suppliers listed on Bahrain
              and other GCC countries as per website, and other associated and
              listed online portals (whether online and/or from physical stores) as
              defined per card type, regardless of method of payment, provided that
              the Loyalty Card is presented/entered at the time of purchase.
              Occasionally, members will receive offers, promotions or voucher
              depending on their card category. One of the benefits of being a Loyal
              Member is receiving prompt sales’ notifications, discounts and
              announcements. To check details of each Card Type Benefits please
              visit the <a href="https://rewardclub.net/my-benefits" className="underline text-Green" target="_blank">Loyalty Program</a> page.
            </p>
            <br />
            <h1 className="text-left text-black  text-2xl">Points Redemption</h1>
            <br />
            <p>
              {" "}
              A Loyalty Program Member can redeem the accumulated points on the
              Loyalty Application and use the voucher number in the promo-code
              section upon purchasing online or showing it to the cashier upon
              purchasing in-store and can redeem the points instantly upon paying
              in-store at the cash desk with the assistance of the cashier. Voucher
              will be valid for a period of 3 months from redemption date.
            </p>
            <br />
            <div>
              <h3 className="text-2xl  mb-1 mt-6"> Need help?</h3>
              <p>
                {" "}
                If you have any questions or if you wish to provide any feedback
                with respect to Reward Club Program, or would like to cancel or
                amend anything in your personal information or you simply wish to
                know your points balance, please contact our Customer Service for
                Reward Club loyalty program in UAE or Bahrain:
              </p>
              <br />
              <br />
              <div className="mt-8 border-t pt-6 flex flex-wrap gap-3">
                <a href="/contact-us" className="inline-block"><button className="btn-primary">{t('getSupport')}</button></a>
                <a href="mailto:support@rewardclub.net" className="inline-block"><button className="btn-outline">{t('emailUs') || 'Email'}</button></a>
              </div>
            </div>
            <>
              Only one account should be assigned to the same mobile number and
              email. In case you have a duplicated account, please contact us to
              assist you further.
              <br />
              <br />
              <strong>Reward Club Support:</strong> <br />
              You can chat online on our website{" "}
              <a
                href="https://www.rewardclub.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-Green underline"
              >
                www.rewardclub.net
              </a>
              , WhatsApp us on{" "}
              <a
                href="https://web.whatsapp.com/send?phone=971554201838"
                target="_blank"
                rel="noopener noreferrer"
                className="text-Green underline"
              >
                +971 55 420 1838
              </a>
              , or email us at{" "}
              <a
                href="mailto:support@rewardclub.net"
                className="text-Green underline"
              >
                support@rewardclub.net
              </a>
              .
            </>
          </div>
        )}
   <Faqactive />
    </div>
  );
};

export default About;
