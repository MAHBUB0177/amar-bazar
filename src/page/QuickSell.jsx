import React from "react";
import { Button } from "react-bootstrap";
import delivary from "../images/delivery-boy.webp";
import "./Common.css";

import AlarmIcon from '@mui/icons-material/Alarm';
export const QuickSell = () => {
  return (
    <div className="bg-white pt-[30px] pb-[30px]">
      <div className="row bg-[#52bf81] rounded-lg  h-[400px] mx-[20px] p-[40px]">
        <div className="bg-white p-[30px] rounded-lg flex justify-between">
          <div className=" pt-12 hidden md:block">
            <h5 className="text-lg font-bold">Organic Products and Food</h5>
            <h4 className="text-lg font-bold"> 
              Quick Delivery to{" "}
              <span className="text-[#52bf81]">Your Home</span>
            </h4>
            <p className="text-start text-lg">
              There are many products you will find our shop, Choose your daily
              necessary product from our KachaBazar shop and get some special
              offer. See Our latest discounted products from here and get a
              special discount.
            </p>
            

            <button className="bg-[#52bf81] rounded-full p-[12px] font-semibold text-black">
            Download Now

            </button>
          </div>
          <div className=" sm:w-full">
            <img src={delivary} alt="Second slide" />
            <p className="md:hidden font-bold text-md pt-5">Fastest Delivery At Any Time 24/7 <AlarmIcon className="text-red-500"/></p>
          </div>
        </div>
      </div>
    </div>
  );
};
