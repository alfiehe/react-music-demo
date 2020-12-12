import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { SliderContainer } from './style';

// install Swiper components
SwiperCore.use([Pagination]);

function Slider({ data }) {
  return (
    <SliderContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          data.map((slider, index) => {
            return (
              <SwiperSlide className="swiper-slide" key={slider.imageUrl + index}>
                <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </SliderContainer>
  );
}

export default React.memo(Slider);