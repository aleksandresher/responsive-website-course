"use client";
import React from "react";
import AniImage from "../../public/styles/assets/avatar-anisha.png";
import AliImage from "../../public/styles/assets/avatar-ali.png";
import RichImage from "../../public/styles/assets/avatar-richard.png";
import ShanaiImage from "../../public/styles/assets/avatar-shanai.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const CarouselPage = () => {
  return (
    <section className="carousel | padding-block-700 text-center">
      <h2 className="fs-secondary-heading fw-bold">What they’ve said</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
      >
        <SwiperSlide key={1}>
          <Image src={AniImage} alt="image of ani" />
          <div
            className="slider-content | flow"
            style={{ "--flow-space": "1em" }}
          >
            <h3 className="fw-bold">Anisha Li</h3>
            <p data-width="wide">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <Image src={AliImage} alt="image of ali" />
          <div
            className="slider-content | flow"
            style={{ "--flow-space": "1em" }}
          >
            <h3 className="fw-bold">Ali Bravo</h3>
            <p data-width="wide">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <Image src={RichImage} alt="image of richard" />
          <div
            className="slider-content | flow "
            style={{ "--flow-space": "1em" }}
          >
            <h3 className="fw-bold">Richard Watts</h3>
            <p data-width="wide">
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={4}>
          <Image src={ShanaiImage} alt="image 4" />
          <div
            className="slider-content | flow "
            style={{ "--flow-space": "1em" }}
          >
            <h3 className="fw-bold">Shanai Gough</h3>
            <p data-width="wide">
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <button className="button">Get Started</button>
    </section>
  );
};

export default CarouselPage;
