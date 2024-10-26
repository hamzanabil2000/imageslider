import React from "react";
import "./ImageSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; 
import Image1 from "../assets/images/img_5terre_wide.jpg";
import Image2 from "../assets/images/img_lights_wide.jpg";
import Image3 from "../assets/images/img_mountains_wide.jpg";
import Image4 from "../assets/images/img_nature_wide.jpg";
import Image5 from "../assets/images/img_snow_wide.jpg";
import Image6 from "../assets/images/img_woods_wide.jpg";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const ImageSlider = () => {
  return (
    <div className="slider">
      <h1>Image Slider</h1>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
