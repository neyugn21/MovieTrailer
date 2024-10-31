import React from "react";
import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";
const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-bannerimg bg-center  bg-no-repeat bg-cover relative ">
      <div className=" absolute w-full h-full bg-black opacity-40 top-0 left-0" />
      <div className="w-full h-full  flex items-center justify-center space-x-[30px] relative z-20 p-5">
        <div className="flex flex-col items-baseline space-y-5 w-[50%] mb-10">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-200 py-2 px-6 text-xl">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px] font-bold ">
              Nghe nói em thích tôi
            </h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="rating " className="w-8 h-8" />
              <img src={IconRating} alt="rating " className="w-8 h-8" />
              <img src={IconRating} alt="rating " className="w-8 h-8" />
              <img src={IconRating} alt="rating " className="w-8 h-8" />
              <img src={IconRatingHalf} alt="rating " className="w-8 h-8" />
            </div>
            <div>
              <p className="text-white mb-2">Nội dung tâm lý, xã hội</p>
              <p className="text-white">
                Sau bảy năm xa nhà, Nguyễn Lưu Tranh quay về quê và trở thành
                bác sĩ thực tập khoa Thần kinh của bệnh viện Bắc Nhã. Ở đây, cô
                gặp lại chồng cũ Ninh Chí Khiêm, một trong những bác sĩ giỏi
                nhất của bệnh viện. Anh chủ động làm cố vấn cho cô, xem như là
                bù đắp cho hôn nhân thất bại mà anh gây ra. Sau nhiều năm, hai
                người giờ đây đã trưởng thành hơn cùng với quá trình làm việc
                chung đã giúp những hiểu lầm, khúc mắc năm xưa được gỡ bỏ và cho
                nhau cơ hội bắt đầu một mối quan hệ mới.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-white bg-black px-4 py-2 font-bold text-sm hover:opacity-70">
                Chi tiết
              </button>
              <button className="text-white bg-red-600 px-4 py-2 font-bold text-sm  hover:opacity-70">
                Xem phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group">
            <img src={ImgTemp} alt="" className="w-full h-full object-cover" />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out cursor-pointer">
              <img src={IconPlay} alt="" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
