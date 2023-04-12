import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "./Card";
import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [saved, setSaved] = useState(false);
  const handleClick = () => {
    if (!saved) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  };

  const fetchdata = async () => {
    setLoading(true);
    await fetch("https://amiteshpatel.pythonanywhere.com/topic_news/4")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        // console.log(typeof(data));
        const data = Object.values(res);
        var temp = [];

        for (let i = 0; i < data.length; i++) {
          temp.push(data[i]);
        }
        setPosts([...temp]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    // console.log(posts);
  }, [posts]);

  return (
    <div>
      {loading && <Spinner />}
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
        {
          <>
            {/* <Card data={posts} /> */}
            {/* {posts.Headline} */}

            {
              posts.map((i) => {
                return (
                  <SwiperSlide>
                    {/* <Card
                      article = {i.Article}
                      headline ={i.Headline}
                      sentiment ={i.sentiment}
                      summary = {i.Summary}
                      url={i.url}
                      /> */}
                    {/* // {i.Headline}
                      // {i.sentiment} */}
                    <div
                      class="card carousel-card carousel-card"
                      style={{ width: "90%", height: "30rem" }}
                    >
                      <img
                        src="https://assets.thehansindia.com/h-upload/2022/04/30/1289736-politics.webp"
                        class="card-img-top card-image"
                        alt="..."
                      />
                      <div class="card-body">
                        <div className="d-flex justify-space-between align-items-left flex-row">
                          <div>
                            <h5 class="card-title carousel-title">
                              {i.Headline}
                            </h5>
                          </div>
                          <div>
                            <button onClick={handleClick}>
                              <i
                                className={`fa-${
                                  saved ? "solid" : "regular"
                                } fa-bookmark fa-xl ml-2`}
                                style={{ color: " #af695c" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                        <p class="card-text">{i.Summary.slice(0, 240)}...</p>

                        <Link to={`/detail?art=${i.id}`}>
                          <button type="button" class="btn btn-primary card-btn">
                            Read More{" "}
                            <img src="circle-notch.png" className="notch" />{" "}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            }
          </>
        }

        {/* {<SwiperSlide>
          <Card data={posts}/>
          {/* {posts.Headline} */}
        {/* </SwiperSlide>}
        <SwiperSlide>
          <Card />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
