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
      <div className="min-h-screen relative">
        <div className="absolute w-[50px] h-[50px] z-3 animate-bounce bottom-2 left-[50%]">
          <ArrowDown size={30} color="#424645" />
        </div>
        <Swiper
          speed={600}
          parallax={true}
          navigation={true}
          modules={[Parallax, Navigation]}
          className="mySwiper min-h-screen"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              backgroundImage:
                "url(https://harperfinedining.co.uk/wp-content/uploads/2024/03/dining-table-decor-ideas.jpg)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div
              className="text-white text bg-black/50 p-8 w-1/3 ml-[60%]  mt-[30%] shadow-sm"
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="text bg-gray-200/50 p-8 w-1/2 rounded-sm m-auto mt-[35%] shadow-sm"
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="text bg-gray-200/50 p-8 w-1/2 rounded-sm m-auto mt-[35%] shadow-sm"
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
