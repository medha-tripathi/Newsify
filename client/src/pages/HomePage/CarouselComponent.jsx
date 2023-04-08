import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "./Card";
import React, {useState, useEffect} from "react";

const CarouselComponent = () => {
  const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://amiteshpatel.pythonanywhere.com/topic_news/4')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setPosts(data);
              posts=data
              console.log(posts)
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
  return (
    <div>
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: -20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
      >
        {<SwiperSlide>
          <Card data={posts}/>
          {/* {posts.Headline} */}
        </SwiperSlide>}
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
