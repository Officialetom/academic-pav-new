import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface university {
  name: string;
  image: string;
}

interface universityList {
  data: university[];
  delayed: number;
}

function Card({ data, delayed }: universityList) {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{ delay: delayed, disableOnInteraction: false }}
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
            slidesPerView: 4,
          },
        }}
      >
        {data.map((uni, index) => (
          <SwiperSlide>
            <div className="card" key={index}>
              <div className="card-image">
                <img src={`${uni.image}`} alt="" />
              </div>
              <div className="card-text">
                <a href="">{uni.name}</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Card;
