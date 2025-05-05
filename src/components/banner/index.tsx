// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation } from "swiper/modules";
import { ArrowDown } from "lucide-react";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";

import "./banner.css";

const Banner = () => {
  return (
    <>
      <div className="h-[600px] lg:min-h-screen relative">
        <div className="absolute w-[50px] h-[50px] z-3 animate-bounce bottom-2 left-[50%]">
          <ArrowDown size={30} color="#424645" />
        </div>
        <Swiper
          speed={600}
          parallax={true}
          navigation={true}
          modules={[Parallax, Navigation]}
          className="mySwiper lg:min-h-screen"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              backgroundImage:
                "url(https://static.vecteezy.com/system/resources/thumbnails/049/682/945/small_2x/romantic-table-setting-with-rose-bouquet-and-wine-glass-photo.jpg)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div
              className="text-white text bg-black/50 p-8 w-full mt-[60%] text-sm lg:w-1/3 lg:ml-[60%]  lg:mt-[30%] shadow-sm"
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="text-white text bg-black/50 p-8 w-full mt-[60%] text-sm lg:w-1/3 lg:ml-[60%]  lg:mt-[30%] shadow-sm"
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
