import "./swiper-styles.scss";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { CardProductDataType } from "#constants/card-product-data";
import { CarouselCard } from "#shared/carousel-card";

import styles from "./carousel.module.scss";

type CarouselType = {
  items: CardProductDataType[];
};

export const Carousel = ({ items }: CarouselType) => (
  <div>
    <Swiper
      className={styles.root}
      modules={[Navigation, Pagination]}
      pagination={{
        bulletActiveClass: "pagination-bullet--active",
        bulletClass: "pagination-bullet",
        clickable: true,
        el: "#paginationContainer",
        type: "bullets",
      }}
      slidesPerView="auto"
      spaceBetween={25}
    >
      {items.map((item) => (
        <SwiperSlide className={styles.slide}>
          <CarouselCard
            color={item.color}
            description={item.descriptionMin}
            price={item.price}
            title={item.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="pagination-wrapper">
      <div className="pagination-container" id="paginationContainer"></div>
    </div>
  </div>
);
