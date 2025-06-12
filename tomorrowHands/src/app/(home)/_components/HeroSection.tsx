"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { heroPostArr } from "@/data/mainArr";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      <Swiper
        effect={"fade"}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="h-full w-full"
      >
        {heroPostArr.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="hero-cover pointer-events-none absolute inset-0 z-10" />
            <Image
              src={post.image}
              alt="후원 관련 이미지"
              fill
              priority
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
