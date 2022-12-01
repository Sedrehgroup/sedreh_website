/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import Cards from "./Cards";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import w1 from "../../img/weblog/w1.jpeg";
import w2 from "../../img/weblog/w2.jpg";
import w3 from "../../img/weblog/w3.jpg";
import w4 from "../../img/weblog/w4.jpg";
import w5 from "../../img/weblog/w5.jpg";

const Carousel = () => {
  return (
    <>
      <Swiper
        className=" -mb-14 hidden lg:block"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 600,
          depth: 800,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide isDuplicate={true} className="mb-32">
          <Cards
            cardImage={w1}
            title="کاربرد هوش مصنوعی در تولید و تحلیل اطلاعات مکان محور"
            topic="تکنولوژی"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            cardImage={w3}
            title="استفاده از هوش مصنوعی و تصاویر ماهواره ای جهت تعیین کیفیت هوای کلان شهر تهران"
            topic="دانش های کاربردی"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            cardImage={w2}
            title="ارزیابی سلامت جنگل با استفاده از شاخص های پوشش گیاهی"
            topic="دانش های کاربردی"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            cardImage={w5}
            title="پردازش تصاویر ماهوارهای جهت شناسایی وضعیت کانونهای گرد و غبار"
            topic="دانش های کاربردی"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            cardImage={w4}
            title="تجزیه و تحلیل وضعیت محصول بر اساس شاخص های پوشش گیاهی"
            topic="دانش های کاربردی"
          />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
