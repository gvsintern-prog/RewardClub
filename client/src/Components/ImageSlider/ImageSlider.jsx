import React from "react";
import Slider from "react-slick"; // Import react-slick
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import "./i.css"; // Import custom CSS file
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i5 from "./i5.png";
import g1 from "./g1.png";
import g2 from "./g2.png";
import g3 from "./g3.png";
import g5 from "./g5.jpeg";
import r1 from "./r1.png"
import r2 from "./r2.png"
import r3 from "./r3.png"
const ImageSlider = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const ltrImages = ["https://ik.imagekit.io/cviw7sztp/Rewardclub/i1%20(4).jpg?updatedAt=1752646434814","https://ik.imagekit.io/cviw7sztp/Rewardclub/22%20(1).jpg?updatedAt=1752646464267","https://ik.imagekit.io/cviw7sztp/Rewardclub/33.jpg?updatedAt=1752646498078","https://ik.imagekit.io/cviw7sztp/Rewardclub/444.jpg?updatedAt=1752646497955"]; 
  const rtlImages = [g2, g3, g1, g5];
  const images = isRTL ? rtlImages : ltrImages;
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    rtl: isRTL, // Enable RTL mode dynamically
    customPaging: (i) => <div className="custom-dot"></div>,
  };

  return (
    <div className="relative w-full h-[600px] lg:h-[70vh] mt-0 lg:mt-14 overflow-hidden top-0 z-10 rounded-b-3xl">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-[600px] lg:h-[70vh] object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
