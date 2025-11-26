import React, { useEffect, useState } from "react";
import il from "./il.jpg";
import Faqactive from "../Faq/Faqactive";
import { useTranslation } from "react-i18next";

const MemberRegister = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const countryStateData = {
    Bahrain: {
      states: ["Capital Governorate", "Northern Governorate", "Muharraq Governorate","Southern Governorate"],
      cities: {
        "Capital Governorate": ["Manama", "Juffair", "Adliya"],
        "Muharraq Governorate": ["Muharraq", "Amwaj", "Arad"],
        "Northern Governorate": ["Muharraq", "Amwaj", "Arad"],
        "Southern Governorate": ["Muharraq", "Amwaj", "Arad"],
      },
    },
    Qatar: {
      states: ["Doha", "Al Rayyan", "Umm Salal"],
      cities: {
        Doha: ["West Bay", "Al Sadd", "Msheireb"],
        "Al Rayyan": ["Education City", "Al Wajba"],
        "Umm Salal": ["Umm Salal Ali", "Umm Salal Mohammed"],
      },
    },
    UAE: {
      states: ["Dubai", "Abu Dhabi", "Sharjah"],
      cities: {
        Dubai: ["Downtown", "JLT", "Deira"],
        "Abu Dhabi": ["Al Khalidiya", "Mussafah"],
        Sharjah: ["Al Nahda", "Muweilah"],
      },
    },
    Kuwait: {
      states: ["Al Asimah", "Hawalli", "Farwaniya"],
      cities: {
        "Al Asimah": ["Kuwait City", "Sharq"],
        Hawalli: ["Salmiya", "Jabriya"],
        Farwaniya: ["Khaitan", "Fintas"],
      },
    },
    Oman: {
      states: ["Muscat", "Dhofar", "Batinah"],
      cities: {
        Muscat: ["Muttrah", "Seeb", "Ruwi"],
        Dhofar: ["Salalah", "Mirbat"],
        Batinah: ["Sohar", "Barka"],
      },
    },
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setStates(countryStateData[country]?.states || []);
    setSelectedState(""); // Reset state selection
    setCities([]); // Reset cities
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(countryStateData[selectedCountry]?.cities[state] || []);
  };

  return (
    <div className="mb-4 font-sans lg:mb-20">
      <div className="min-h-screen flex items-center mt-4 lg:mt-20 justify-center">
        <div
          className="lg:max-w-4xl max-w-7xl w-full mx-auto p-6 -mt-4 bg-white bg-opacity-90 shadow-md rounded-md relative"
          style={{
            backgroundImage: `url(${il})`,
            backgroundSize: "auto",
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-center text-2xl font-bold mt-4 lg:mt-10 mb-8">
            {t("member_register")}
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder={t("first_name")} className="border p-3 rounded w-full focus:ring-2 focus:ring-Green" />
            <input type="text" placeholder={t("last_name")} className="border p-3 rounded w-full focus:ring-2 focus:ring-Green" />
            <input type="email" placeholder={t("email")} className="border p-3 rounded w-full focus:ring-2 focus:ring-Green" />
            <input type="email" placeholder={t("secondary_email")} className="border p-3 rounded w-full focus:ring-2 focus:ring-Green" />
            <input type="password" placeholder={t("password")} className="border p-3 rounded w-full focus:ring-2 focus:ring-Green" />
            <input type="password" placeholder={t("confirm_password")} className="border p-3 rounded w-full focus:ring-2 focus:ring-Green" />
            <input type="date" className="border p-3 rounded w-full focus:ring-2 focus:ring-Green" />

            <div className="flex items-center space-x-4 w-full">
              <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2" /> {t("male")}
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2" /> {t("female")}
              </label>
            </div>

            <input type="text" placeholder={t("primary_phone")} className="border p-3 rounded w-full" />
            <input type="text" placeholder={t("secondary_phone")} className="border p-3 rounded w-full" />
            <input type="text" placeholder={t("building_no")} className="border p-3 rounded w-full" />
            <input type="text" placeholder={t("street_name")} className="border p-3 rounded w-full" />

            {/* Country Dropdown */}
            <select className="border p-3 rounded w-full" onChange={handleCountryChange}>
              <option value="">{t("select_country")}</option>
              {Object.keys(countryStateData).map((country) => (
                <option key={country} value={country}>
                  {t(country)}
                </option>
              ))}
            </select>

            {/* State Dropdown */}
            <select
              className={`border p-3 rounded w-full ${!selectedCountry ? "opacity-50" : ""}`}
              onChange={handleStateChange}
              disabled={!selectedCountry}
            >
              <option value="">{t("select_state")}</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {t(state)}
                </option>
              ))}
            </select>

            {/* City Dropdown */}
            <select
              className={`border p-3 rounded w-full ${!selectedState ? "opacity-50" : ""}`}
              disabled={!selectedState}
            >
              <option value="">{t("select_city")}</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {t(city)}
                </option>
              ))}
            </select>

            <input type="text" placeholder={t("postal_code")} className="border p-3 rounded w-full" />
            <input type="text" placeholder={t("bank_name")} className="border p-3 rounded w-full" />
            <input type="text" placeholder={t("account_number")} className="border p-3 rounded w-full" />

            <select className="border p-3 rounded w-full">
              <option>{t("select_referral_type")}</option>
              <option>{t("test_referral")}</option>
              <option>{t("print_media")}</option>
              <option>{t("online_ads")}</option>
              <option>{t("social_media")}</option>
              <option>{t("friends")}</option>
            </select>

            <div className="col-span-2 flex items-center mt-4 space-x-4">
              <input type="checkbox" className="border" onChange={() => setIsTermsAccepted(!isTermsAccepted)} />
              <p className="text-sm font-sans">{t("terms_and_conditions")}</p>
            </div>

            <button
              type="submit"
              disabled={!isTermsAccepted}
              className={`col-span-2 p-3 rounded text-center transition w-full ${
                isTermsAccepted ? "btn-primary" : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {t("register")}
            </button>
          </form>
        </div>
      </div>
      <Faqactive />
    </div>
  );
};

export default MemberRegister;
