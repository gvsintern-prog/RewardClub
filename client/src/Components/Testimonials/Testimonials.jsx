import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar } from 'react-icons/fa';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: t('testimonial_1_name') || 'Sarah Ahmed',
      title: t('testimonial_1_title') || 'Retail Professional',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      text: t('testimonial_1_text') || 'RewardClub has completely changed how I shop. I earn points on every purchase and redeem them for amazing rewards. The tiers system really motivates me to shop more!',
      rating: 5
    },
    {
      name: t('testimonial_2_name') || 'Mohammed Hassan',
      title: t('testimonial_2_title') || 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      text: t('testimonial_2_text') || 'The Gold tier benefits are incredible. Exclusive offers, VIP treatment, and the double points really add up. Highly recommend RewardClub!',
      rating: 5
    },
    {
      name: t('testimonial_3_name') || 'Fatima Al-Mansouri',
      title: t('testimonial_3_title') || 'Fashion Enthusiast',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      text: t('testimonial_3_text') || 'Love the variety of brands available! From fashion to beauty to dining, everything is in one place. The rewards are generous and easy to redeem.',
      rating: 5
    },
    {
      name: t('testimonial_4_name') || 'Ahmed Al-Khalifa',
      title: t('testimonial_4_title') || 'Travel Blogger',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      text: t('testimonial_4_text') || 'The Silver tier is perfect for me. Great balance of benefits and points accumulation. Customer service is responsive and helpful!',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-Green/5 via-white to-Green/10 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-5xl lg:text-6xl font-bold text-Green mb-6">
            {t('customer_testimonials') || 'What Our Members Say'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('testimonials_subtitle') || 'Real feedback from our happy customers'}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 min-h-[400px] flex flex-col justify-between card-lift">
            {/* Stars */}
            <div className="flex gap-2 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-8 border-t border-gray-200">
              <img 
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-Green"
              />
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <h3 className="font-bold text-lg text-gray-900">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm text-Green font-semibold">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-Green text-white rounded-full hover:bg-Green/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
            >
              <IoChevronBack size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-Green w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-Green text-white rounded-full hover:bg-Green/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
            >
              <IoChevronForward size={24} />
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg card-lift">
            <h3 className="text-4xl font-bold text-Green mb-2">
              {t('active_members') || '50K+'}
            </h3>
            <p className="text-gray-600 font-semibold">
              {t('active_members_label') || 'Active Members'}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg card-lift">
            <h3 className="text-4xl font-bold text-Green mb-2">
              {t('points_redeemed') || '10M+'}
            </h3>
            <p className="text-gray-600 font-semibold">
              {t('points_redeemed_label') || 'Points Redeemed'}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg card-lift">
            <h3 className="text-4xl font-bold text-Green mb-2">
              {t('member_satisfaction') || '4.8/5'}
            </h3>
            <p className="text-gray-600 font-semibold">
              {t('member_satisfaction_label') || 'Member Satisfaction'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
