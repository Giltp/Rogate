'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    label: 'Rogate Handmade Jewelry',
    href: '/handmade-jewelry',
    image: '/Images/Pic.jpeg',
  },
  {
    label: 'Rogate Kids Clothes',
    href: '/catalogue/kids-clothes',
    image: '/Images/Pic.jpeg',
  },
  {
    label: 'Rogate Fashion',
    href: '/catalogue/fashion',
    image: '/Images/Pic.jpeg',
  },
  {
    label: 'Rogate Accessories',
    href: '/catalogue/accessories',
    image: '/Images/Pic.jpeg',
  },
];

export default function Carousel() {
  return (
    <div className="w-full bg-background flex justify-center px-4 py-8">
      <div className="w-full max-w-2xl"> {/* Increased max width for grid layout */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={12}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="rounded-xl"
        >
          {/* Create slides with 2x2 grid layout */}
          <SwiperSlide>
            <div className="grid grid-cols-2 gap-3 p-4 bg-white rounded-xl shadow-lg">
              {slides.map((slide, index) => (
                <a key={index} href={slide.href} className="block group">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={slide.image}
                      alt={slide.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded px-2 py-1">
                        <p className="text-xs font-medium text-gray-800 truncate">
                          {slide.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </SwiperSlide>
          
          {/* You can add more slides here with different product combinations */}
          <SwiperSlide>
            <div className="grid grid-cols-2 gap-3 p-4 bg-white rounded-xl shadow-lg">
              {slides.map((slide, index) => (
                <a key={`alt-${index}`} href={slide.href} className="block group">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={slide.image}
                      alt={slide.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded px-2 py-1">
                        <p className="text-xs font-medium text-gray-800 truncate">
                          {slide.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}