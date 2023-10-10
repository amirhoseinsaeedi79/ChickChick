import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";



export default function Company() {

  return (
    <div data-aos="zoom-in" className=" w-full bg2 py-3 md:py-10 ">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        breakpoints={{
            320: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
            640: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
            1024: {
              slidesPerView:5,
              spaceBetween: 1,
            },
            1424: {
                slidesPerView:5,
                spaceBetween: 1,
              },

            
          }}
        modules={[FreeMode, Pagination]}
        className="mySwiper  "
      >
        <SwiperSlide >
            <img className="w-36 h-36 cursor-pointer grayscale-[100%] hover:grayscale-0" src="/src/asset/images/item (1).png" alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <img className="w-36 h-36 cursor-pointer grayscale-[100%] hover:grayscale-0" src="/src/asset/images/item (2).png" alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <img className="w-36 h-36 cursor-pointer grayscale-[100%] hover:grayscale-0" src="/src/asset/images/item (3).png" alt="" />
        </SwiperSlide>
         <SwiperSlide >
            <img className="w-36 h-36 cursor-pointer grayscale-[100%] hover:grayscale-0" src="/src/asset/images/item (4).png" alt="" />
        </SwiperSlide>
         <SwiperSlide >
            <img className="w-36 h-36 cursor-pointer grayscale-[100%] hover:grayscale-0" src="/src/asset/images/item (5).png" alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <img className="w-36 h-36 cursor-pointer grayscale-[100%] hover:grayscale-0" src="/src/asset/images/item (6).png" alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <img className="w-36 h-36 cursor-pointer grayscale-[100%] hover:grayscale-0" src="/src/asset/images/item (7).png" alt="" />
        </SwiperSlide>
        <SwiperSlide >
            <img className="w-36 h-36 cursor-pointer grayscale-[100%] hover:grayscale-0" src="/src/asset/images/item (8).png" alt="" />
        </SwiperSlide>

         
      

      </Swiper>
    </div>
  );
}
