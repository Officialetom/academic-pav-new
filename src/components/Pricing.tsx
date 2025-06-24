import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

function Pricing() {
  return (
    <div className="pricing">
      <div className="pricing-container">
        <div className="pricing-item">
          <h2>Pricing</h2>
          <span>Choose your plan...</span>
        </div>
        <div className="pricing-item">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="price price-1">
                <h3>FREE</h3>
                <span>WHAT'S INCLUDED?</span>
                <ul>
                  <li>An Item from the price</li>
                  <li>An Item from the price</li>
                  <li>An Item from the price</li>
                  <li>An Item from the price</li>
                  <li>An Item from the price</li>
                </ul>
                <Button href="/" name="Select Plan" class_name="button-dark" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="price price-2">
                <h3>PREMIUM</h3>
                <span>WHAT'S INCLUDED?</span>
                <ul>
                  <li>An Item from the price</li>
                  <li>An Item from the price</li>
                  <li>An Item from the price</li>
                  <li>An Item from the price</li>
                  <li>An Item from the price</li>
                </ul>
                <Button href="/" name="Select Plan" class_name="button-light" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="price price-3">
                <h3>BUSINESS</h3>
                <span>WHAT'S INCLUDED?</span>
                <ul>
                  <li>An Item from the price</li>
                  <li>An Item from the price</li>
                  <li>An Item from the price</li>
                  <li>An Item from the price</li>
                  <li>An Item from the price</li>
                </ul>
                <Button
                  href="/"
                  name="Select Plan"
                  class_name="button-secondary"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
