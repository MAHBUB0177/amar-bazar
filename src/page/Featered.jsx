import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Common.css";
import { Button, CardActions } from "@material-ui/core";
import StarIcon from "@mui/icons-material/Star";

import { caruselItem } from "../components/product";

const Responsive = () => {


  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="slick bg-white" >
      <div className="container">
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-2/5"></span>
          <p className="text-2xl font-medium  text-center text-gray-500 uppercase ">
            Featured Product
          </p>
          <span className="border-b w-1/5 lg:w-2/5"></span>
        </div>
      </div>

      <Slider {...settings}>
        {caruselItem?.map((item, i) => (
          

          <div className={`flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg transform transition duration-300 hover:scale-105 h-[300px]`} >
          
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <img className="relative w-40 h-[150px]" src={item?.image} alt="" />
          </div>
          <div className="flex space-x-2 items-center mt-2 justify-center ">
                <StarIcon className="text-orange-500" fill="currentColor" />
                <StarIcon className="text-orange-500" fill="currentColor" />
                <StarIcon className="text-orange-500" fill="currentColor" />
                <StarIcon className="text-orange-500" fill="currentColor" />
                <StarIcon className="text-orange-500" fill="none" />
                <span className="text-gray-600 ml-3"></span>
              </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <div className="flex justify-between">
              <span className="block  text-sm text-black font-medium">{item.title.slice(0, 20)}</span>
              <span className=" bg-white rounded-full text-black  font-bold px-3 py-2 leading-none flex items-center text-sm">{item.price}</span>
            </div>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
};
export default Responsive;
