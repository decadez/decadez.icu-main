import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';
import 'swiper/css';
import ImageX from 'components/ImageX';

function CustomSwiper() {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      className="mySwiper"
      modules={[EffectCards, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}>
      <SwiperSlide>
        <ImageX width={250} height={170} src="/images/home/decade_01.gif" />
      </SwiperSlide>
      <SwiperSlide>
        <ImageX width={250} height={170} src="/images/home/decade_02.gif" />
      </SwiperSlide>
      <SwiperSlide>
        <ImageX width={250} height={170} src="/images/home/decade_03.gif" />
      </SwiperSlide>
      <SwiperSlide>
        <ImageX width={250} height={170} src="/images/home/decade_04.gif" />
      </SwiperSlide>
      <SwiperSlide>
        <ImageX width={250} height={170} src="/images/home/decade_05.gif" />
      </SwiperSlide>
    </Swiper>
  );
}

CustomSwiper.displayName = 'CustomSwiper';
export default CustomSwiper;
