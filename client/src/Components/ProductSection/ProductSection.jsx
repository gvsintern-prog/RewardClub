import React from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Purchasepremium from "../Purchasepremium/Purchasepremium";
import { FaHome } from "react-icons/fa";

const ProductCard = ({ imgSrc, brandLogo, title }) => {
  const { t } = useTranslation();

  return (
    <div className="group">
      <div className="rounded-2xl shadow-custom overflow-hidden bg-white card-lift hover:shadow-xl transition-all duration-300">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img 
            src={imgSrc} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
          />
          {brandLogo && (
            <div className="absolute top-3 right-3 w-16 h-16 rounded-lg bg-white shadow-lg p-2 flex items-center justify-center">
              <img src={brandLogo} alt="brand" className="w-full h-full object-contain" />
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-Green mb-3 bg-Green/10 w-fit px-3 py-1.5 rounded-full">
            <FaHome className="text-Green" /> <span>{t('inStore')}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{title}</h3>
          <button className="mt-4 btn-outline w-full py-2 rounded-lg hover:bg-gray-50 transition">
            {t('view_details') || 'View Details'}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  const { t } = useTranslation();

  const products = [
    {
      imgSrc: "https://splashfragrance.in/wp-content/uploads/2023/09/Neroli-36-By-Le-Labo-100ml-Perfume-Tester-with-Cap-min.jpg",
      brandLogo: "https://www.aura-mena.com/sites/default/files/styles/brand_logo/public/brand-logo/2024-05/LEL.png?itok=nnYs_pkE",
      titleKey: "product1",
    },
    {
      imgSrc: "https://5.imimg.com/data5/SELLER/Default/2022/9/NY/RN/UX/94407416/new-product.jpeg",
      brandLogo: "https://www.aura-mena.com/sites/default/files/styles/brand_logo/public/brand-logo/2024-05/MAC.png?itok=JClg16gW",
      titleKey: "product2",
    },
    {
      imgSrc: "https://www.flowesscents.com/cdn/shop/articles/Scent_Wheel_480x480_888d4e9d-3f52-440b-a6f2-ee3fa6a2f52f.webp?v=1662747623",
      brandLogo: "https://www.aura-mena.com/sites/default/files/styles/brand_logo/public/brand-logo/2024-04/JOM.png?itok=H3WfslOe",
      titleKey: "product3",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t('neverMiss')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl">{t('downloadApp')}<br />{t('offers')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imgSrc={product.imgSrc}
              brandLogo={product.brandLogo}
              title={t(product.titleKey)}
            />
          ))}
        </div>
      </div>
      <Purchasepremium />
    </div>
  );
};

export default ProductSection;
