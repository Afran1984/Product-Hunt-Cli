import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-3">
          <h1 className=" text-4xl font-semibold text-center md:text-start font-exo">
            <Typewriter
              words={["ArtCraft"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            <span className="text-textsecondary font-bold text-4xl">.</span>
          </h1>
          <p className="text-center md:text-start">
          Product Hunt Explore a world of creativity and inspiration with our curated collection of unique handcrafted items, personalized designs, and stunning artworks. From timeless portraits to vibrant paintings, every piece is thoughtfully crafted to resonate with your style and imagination. Whether you're decorating your home, searching for the perfect gift, or simply looking to add a touch of artistry to your life, our platform offers creations that tell a story and spark joy.
          </p>
          <Link to="/allArtCraft">
            <button className=" bg-bgprimary px-4 py-2 hover:scale-110 cursor-pointer transition-all rounded-sm text-white ">
              Explore More
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://i.ibb.co.com/bs8cb74/11.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co.com/mFzPCw7/14.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co.com/S5MncV0/13.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;