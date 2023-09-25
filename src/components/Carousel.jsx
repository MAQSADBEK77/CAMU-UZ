import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Carousel.css";
function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 3500);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  console.log(current);
  return (
    <div className="carousel-block pt-28">
      <div
        className="carousel"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}>
        <div className="carousel_wrapper">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "carousel_card carousel_card-active"
                    : "carousel_card"
                }>
                <img className="card_image" src={image.image} alt="" />
                <div className="card_overlay">
                  <div className="hero min-h-screen">
                    <div className="hero-content text-center text-neutral-content">
                      <div className="max-w-md">
                        <h1 className="mb-5 mt-44 text-4xl font-bold">
                          {image.title}
                        </h1>
                        <p className="mb-5">{image.text}</p>
                        <a
                          className="btn btn-xl bg-[#0d2d62] text-[#ffffff] transition duration-500 hover:text-[#0d2d62]"
                          href={image.id}>
                          Ko'proq
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="carousel_arrow_left" onClick={slideLeft}>
            &lsaquo;
          </div>
          <div className="carousel_arrow_right" onClick={slideRight}>
            &rsaquo;
          </div>
          <div className="carousel_pagination">
            {images.map((_, index) => {
              return (
                <div
                  key={index}
                  className={
                    index == current
                      ? "pagination_dot pagination_dot-active"
                      : "pagination_dot"
                  }
                  onClick={() => setCurrent(index)}></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
