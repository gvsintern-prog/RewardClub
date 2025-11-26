import { useState } from "react";
import React from "react";
import { useTranslation } from 'react-i18next';
import Faqactive from "../Faq/Faqactive";
import "./b.css";
import i8 from "../../assets/Images/i8.jpg"
// Dynamically import all PNGs in the folder
// const imageModules = import.meta.glob('../../assets/images/*.png', { eager: true });

// // Convert to a usable image map like: { i1: 'path/to/i1.png', i2: '...', ... }
// const images = {};
// Object.entries(imageModules).forEach(([path, module]) => {
//   const fileName = path.split('/').pop().split('.')[0]; // e.g. 'i1'
//   images[fileName] = module.default;
// });
import i2 from "./i2.png"
import i3 from "./i3.png"
import i4 from "./i4.png"
import i5 from "./i5.png"
import i6 from "./i6.png"


const brands = [
  { name: "Alshaheen Manpower", category: "Manpower", src: i2, alt: "Alshaheen Manpower" },
  { name: "Arabi Aseel", category: "Food", src: i3, alt: "Arabi Aseel" },
  { name: "Saffary", category: "Food", src: i4, alt: "Saffary" },
  { name: "Shaheen Express", category: "Transport", src: i5, alt: "Shaheen Express" },
  { name: "GVS Cargo", category: "Logistics", src: i6, alt: "GVS Cargo" },
  // { name: "Milano", category: "Fashion & Footwear", src: images["i6"], alt: "Milano" },
  // { name: "New Balance(NB)", category: "Fashion & Footwear", src: images["i7"], alt: "New Balance(NB)" },
  // { name: "Next", category: "Fashion & Footwear", src: i8, alt: "Next" },
  // { name: "Victoria Secret (Beauty and Accessories)", category: "Fashion & Footwear", src: images["i9"], alt: "Victoria Secret (Beauty and Accessories)" },
  // { name: "Pink", category: "Fashion & Footwear", src: images["i10"], alt: "Pink" },
  // { name: "JACK WILLS", category: "Fashion & Footwear", src: images["i11"], alt: "JACK WILLS" },
  // { name: "Harvey Nichols", category: "Fashion & Footwear", src: images["i12"], alt: "Harvey Nichols" },

  // { name: "PinkBerry", category: "Food & Restaurants", src: images["i13"], alt: "PinkBerry" },
  // { name: "Starbucks", category: "Food & Restaurants", src: images["i14"], alt: "Starbucks" },
  // { name: "Pf Changs", category: "Food & Restaurants", src: images["i15"], alt: "Pf Changs" },
  // { name: "The Cheese Cake Factory", category: "Food & Restaurants", src: images["i16"], alt: "The Cheese Cake Factory" },
  // { name: "Texas Roadhouse", category: "Food & Restaurants", src: images["i17"], alt: "Texas Roadhouse" },
  // { name: "Shake Shack", category: "Food & Restaurants", src: images["i18"], alt: "Shake Shack" },

  // { name: "Bath & Body Works", category: "Health & Beauty", src: images["i19"], alt: "Bath & Body Works" },
  // { name: "Boots", category: "Health & Beauty", src: images["i20"], alt: "Boots" },
  // { name: "DebanHams", category: "Health & Beauty", src: images["i21"], alt: "DebanHams" },
  // { name: "Jo Malone", category: "Health & Beauty", src: images["i22"], alt: "Jo Malone" },
  // { name: "MAC", category: "Health & Beauty", src: images["i23"], alt: "MAC" },
  // { name: "nyx", category: "Health & Beauty", src: images["i24"], alt: "NYX" },

  // { name: "Pottery barn Kids", category: "Home Furnishings", src: images["i25"], alt: "Pottery barn Kids" },
  // { name: "West elm", category: "Home Furnishings", src: images["i26"], alt: "West elm" },

  // { name: "MotherCare", category: "Kids", src: images["i27"], alt: "MotherCare" },

  // { name: "aerie", category: "Leisure & Entertainment", src: images["i28"], alt: "aerie" },
  // { name: "DebanHams", category: "Leisure & Entertainment", src: images["i29"], alt: "DebanHams" },
  // { name: "River Island", category: "Leisure & Entertainment", src: images["i30"], alt: "River Island" },
  // { name: "The Body Shop", category: "Leisure & Entertainment", src: images["i31"], alt: "The Body Shop" },

];





export default function BrandFilter() {
  const { t } = useTranslation(); // Fetch translations
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = t("categories", { returnObjects: true }); 

  const filteredBrands = brands.filter((brand) =>
    (selectedCategory === "All" || brand.category === selectedCategory) &&
    brand.alt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const uniqueBrands = [];
  const displayedBrandNames = new Set();

  const finalBrands = filteredBrands.filter((brand) => {
    if (!displayedBrandNames.has(brand.name)) {
      displayedBrandNames.add(brand.name);
      uniqueBrands.push(brand);
      return true;
    }
    return false;
  });

  return (
    <div className="">
    <div className="">
    <div className="p-6  max-w-5xl mx-auto mt-32">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        {t("discover_brands")} <span className="text-Green"> {t("discover_brands1")}</span>
      </h2>
      <p className="text-gray-600 mb-6">{t("explore_brands")}</p>
      
      {/* Basic Input and Button */}
      <div className="flex gap-4 mb-6 items-center">
        <label htmlFor="brand-search" className="sr-only">{t('search_placeholder')}</label>
        <div className="relative w-full">
          <input
            id="brand-search"
            type="text"
            aria-label={t('search_placeholder')}
            placeholder={t("search_placeholder")} 
            className="w-full p-3 border rounded-lg pr-10 focus:ring-2 focus:ring-Green focus:border-transparent"
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category} 
            onClick={() => setSelectedCategory(category)} 
            className={`${selectedCategory === category ? 'btn-primary' : 'btn-outline rounded-full px-4 py-2'}`}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {finalBrands.map((brand) => (
          <div key={brand.name} className="bg-white shadow-custom rounded-lg p-4 flex items-center justify-center card-lift">
            <img src={brand.src} alt={brand.alt} className="h-24 w-auto object-contain" />
          </div>

        ))}
      </div>
      {/* <div class="flex justify-center items-center ">
    <span class="text-4xl text-Green font-bold ">ACTIVE SOON</span>
</div> */}


      
    </div>
    <Faqactive />
    </div>
    </div>
  );
}