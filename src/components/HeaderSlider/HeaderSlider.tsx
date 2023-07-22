import React, { FC, useState } from "react";
import { ISlide } from "../../types/swiper";
import styles from "./Swiper.module.scss";
import bgImg from "../../assets/images/bg1.png";
import Slide from "./Slide";
import Slider from "../UI/Slider/Slider";
import { useContext } from "react";
import { WidthContext } from "../../context";
const HeaderSlider: FC = () => {
  const width = useContext(WidthContext);
  const slides: ISlide[] = [
    {
      id: "0",
      header: "Лучшие товары в мире татуировок",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: bgImg,
    },
    {
      id: "1",
      header: "Лучшие товары в мире татуировок",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: bgImg,
    },
    {
      id: "2",
      header: "Лучшие товары в мире татуировок",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: bgImg,
    },
    {
      id: "3",
      header: "Лучшие товары в мире татуировок",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: bgImg,
    },
    {
      id: "4",
      header: "Лучшие товары в мире татуировок",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: bgImg,
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <Slider
        direction={width <= 1024 ? "row" : "column"}
        spaceBetween={0}
        st__pagination={styles.slider__pagination}
        st__pag__btn__next={styles.pagination__btn__next}
        st__pag__btn__prev={styles.pagination__btn__prev}
        st__pag__item={styles.pagination__item}
        st__pag__item__active={styles.active}
      >
        {slides.map((slide) => (
          <li className={styles.sliderItem}>
            <Slide
              key={slide.id}
              header={slide.header}
              desc={slide.description}
            />
          </li>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderSlider;